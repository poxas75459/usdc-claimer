/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4KUVawADhGWwVU6opA7kcubcdQgSEWTMhUhxaq1irQ2c52TfhMUd3VyjgQ7z9bKmyuTrKoLKFAohXBD4CdnnPbkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5spZTMWS2Wqzcm66m2n93fntN4mbJ7spzryDVb7i6334VFSn4ht9TFXUupBwbLb6qzt8eGEPaiG27sorTy3ZnJzF",
  "key1": "4kauBdKHHvytbGvm65pUraRn3ZCFg4LuUKYcBchf7APr3ZgHfu1qvAef11yBkYhPo8aymwexpWeNMmQxPRTXASSi",
  "key2": "2JQzAsUUHmVs1vX6quMHQGAEBgVdwfLX4A5PEoRxLD1GxtsDq38Rxa1kiR5GYGThhVsxUGDj5edj2QU3vqacg6vi",
  "key3": "61b34KEahCZwXXc4bnFh16hjWDfzrafoUSZaGNCKNfdQJZxxTrA9hcPEpD6G1bBC3e2EVazr1dAhVB8FdUGTyZKR",
  "key4": "45DvtiHKRKLe2DGSVw3PTdCPCgG4vqDVRvmw82kHsa7JRWHdPCJmxqhWxBGCthQkuQLSK9spiwcL6fej4htdGoiR",
  "key5": "5b4QWY8zrohWJqEGXijuvhFX7BaPuTiywBuNfKkkmdQiBz92PkUfUv6VR398fjRB9nGsZZvhdJjDVF5o7Dxff8Rs",
  "key6": "48zWA5YT3YfyZyXaaCM6mjTmH8D3wSddJ7FzdrMg2eMmX6P5y2j6FBCXV42QRaVUhMit5af2qzg1A3mjnPxXdXTS",
  "key7": "3D2HDqdkhyUHQhATiLNKiV11by6tMpqwz7FrgEvJjYbpXET8urm2qNKeqqpMeAaTfdLktuf1DWA2oWrN6DNu4txV",
  "key8": "54eLuvCiTz4QpsNMsSySh37Mftb9Tzv3j5iscL4HEQieehgNUBryU4mtTE45evTbuzZwAHm3JaF2u78xfCbw6XNC",
  "key9": "57ty8nqipCBpkkGnXw9J1V6Rxxk8eCYFXS4ySMZTcn15xQTDtCAErViatbM9rD97jsmxd5JgxrhFtN27AfvB3mqw",
  "key10": "4SAeQZmxMmEHiY7tZYHzfAgjwaKP5rf1m7hGf3PC4sp1ptFmNAPsRbXcyn3a4yBuj8ajFsDN5mw9v8bugz2Geek1",
  "key11": "3T7z755ULbFuVN6GyivVWhxMG3WEiGnw1RzrnfKdGM6DmvgrGFXTH1WKjT6UjRRi85vrb4RLw3QWZ7o195g4LK45",
  "key12": "3XGwYozbCWceCTsrCa8P66NFL4xsDZngjBVLqkddpsVHm7UDevvEthdoFGNErcKyCLsysHFjma6BQkP2S8PeiUwH",
  "key13": "5oHTzW3vXqiRRTVxShhvu48Bp8Ld9VvnDSdKMm3yHryhymVNvqdJ1Ugk9JGLsa17XB4MwGZD4UydfQMknyBf7Rup",
  "key14": "2afcqqa3th26wiZ9j2uuUcubEz6jyHVEmq4TvpX1WHy6nFJNB96fuuJEYoKzWAZBP25tioi6Fj7hxZvpc8kdbXAb",
  "key15": "To8H9v4k7y1xpTppYm9rVFk2fD83dLVK7Pvpehgf29npTAQGCpJKm441juvvk4zvFGEm466Nm4LTNAvukyC8p6L",
  "key16": "5grpeiBAhQ8NBsCLNvvsi1J5Jd2pzbXyApJL4JDEbisqXSLM4L6aiRnFmPzxR4p7bcGjeSMBjjziBXMjATxKuPkL",
  "key17": "f9uSKeikcANNq5TzUETB7geo9p4Mv4ZKa2iPseJUeKqde4hJc526sNS4p8dMYM5C9xhWCGBSs4cEWZkjGx2yt7Q",
  "key18": "Hh6DnxKGzma2RxdTqoLDFdCPjmjQGsEdWK34v9Qe1rrMfSep6a5CPifSPLdxFVMEEAS9WX1yJFosNycHvYun8MY",
  "key19": "4YYEfYW1hDGRg5bdD7NMTRMJCW1e9oq39GHe3UG4KfhnrZPDFCQg3rUreS8r4oe5nc4P43vxBwyFqH2XCNnwniKZ",
  "key20": "gyoEsk4ebbCgDbQrrbzety2ffCur85w6ArowSgSs51iXAkhmZ1hwZDw1SBqAnRR2ESmpiUQBmMsGK6Mme6RUYPq",
  "key21": "2jXet1t5a6JJNBvNzoDrvMiPuPFws2pRSUtdzVehVQW4eqLLS91A92bvTFtbwhDUA2vk9n47WniRSJUcvcNvGasG",
  "key22": "5CkiTUQuJDxnuZtAmVCdUM7QQ1To1GFn1cySGYkF1u4QS1H6cbbJwhBmePGqYsqTbyvBE8vGGRJ55Uk6thjMwygx",
  "key23": "4emi6vX5PZ4wyCgj8nx7S1iJTVMjaGJvSQjUi2MLP6iDmxQkJHha2FMeptXBPLZcgknFxjzw4FjZbc3ZcBiYmTyH",
  "key24": "54qeWS6ZXGFwTvHN1HW5KiiExXpDhoVm2hTivLyiHqG69XW5SWE8QbgLDhWSmbds381caux1FJt865Z9RgELuRL8",
  "key25": "5yBvkwCwKAaoqTiZRXZ5KQXaAik3i56S9wg1JPYutcLhRaFFpLhTKiag2SzFW6ArUW9C4fkucNFjM8SWCT24iJut",
  "key26": "gre5PzCVhjbnEDo4pJDnwfTQ316gUJyfv4cR87XhUU3TtKDEJdLCfNu1ijXLS3svFWjmogvtGorN6CNgAJjZNgB",
  "key27": "67rhXTEZjWZFMa5ycincgJFBSrgiydU2bJZRdDcraLoFdsJm24Ccvz4AL9LjVk8ntTFrNH6dksF8T9nQ4JxbocJe",
  "key28": "2UuT8YRh3NaDFp3Uau5uWZnAZP77tR3bBrA1ypFUZkEF4PRECaNfu3rw8LhRcW9riU7Tqv4CAFyJGigTBAAwBWzV",
  "key29": "4zEASRXnRd2jHVGwQTwSMEe3Hadmyy2Z9JJU2tNVd1CEqWUdhRkWgmcEqSEpWizfrQ5SVsrsJBMMyPNMKqxhPDfb",
  "key30": "hL3UvErgyemJfshbBn5uKakRXsc8PjFo9QRicvUxARGp2hTucGpTt4iPdd6DyxGQYnmtJVghevLuV3GeaSHAp3Q",
  "key31": "4ZU9Vv1G3vNNTqCGMapaZ76D7s9LqZ2CCjMFSJChZMuhJ53P5d3rNJqmsk7MTwvBP3iBdR6dEDPyQKAXHfdySxkn",
  "key32": "5H54ogfCGHuDdBPmMQVHJaD2N4TGgbmi2VmRTGxyJBJZmYE595JweddnxvoTDmxyevJBv138hDyr2zt1w1SHjn4N",
  "key33": "3kbin4ePKHKHXMikaDHeQjcNS9zLBLxdofo69azAH8nDdg3HU5MiVBVRTC1zhA3vukABjQyeXBmdUxxbMQhRS7Um",
  "key34": "4AVsoBoNANd3Kof5JdMTGxUL8HaTCKXTyEB4pm98GyXKdKEzBiD3jvKSoByRygRy2biFNppjw11PuEkcTUhyoxT6",
  "key35": "CdWfpvTcqa9J5456nPqv89395owiuYYTWTt9x5zhbpDvn2yut7g8AG1xxyS54W9FiirRTtAciqiCLDTYHAqvgZx",
  "key36": "2kVfNmyhbpFzxw3X2M1t9VcZ7hNSPZ1TfsSLW2BsXNAy6S1tBdkNcsCvHfqzxHT112TKGRKBvWvVEM14aqbNb74p",
  "key37": "3KxKZ639DeFu6pmfwAWGAoA3C3ZcCrCEvhKQWBRFeMKbG7TBzgzU9oujJESrz325gp6p1Mo3bJm5sirzbcFFV7G7",
  "key38": "4EaNu9tDZ5q1SvECAfDpgtPsvDsNsyY8NF4o9s3Sh16EivteVqANjZyF5W1ZQxmTWkhjndJEDepNreQpZEcK5vCC"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
