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
    "4Vw9juoaTT23SdEVt8i1F1Ai1C1mVGYgY5e3fBmLAipJHXnbz6Xa5VaqrezjZ4p3y53byijxA2U5KmowtQwVDs2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CSZQNu6h8k3KEb4AsFhiRULGZixG3oUJUEFFBnib9eZdpCJcpMRvi7G6dheK6onJY6GC5jJHLhktUtQcGVdvrBc",
  "key1": "2kUkKAY9Q6LpVoyihwA5f9pt8DMJqFoH3cCDYzcXebsavZGEPt22vrq9uHhSwq9Ev2pRqkWeTd6g5yyMdzAh1XJK",
  "key2": "4TQHbLWYuGkZsJbHZMZTnpdhkMQ46wnae6v1YYrpL8bgvv6QG2YYXvKSiYmmDsoze6ckVYDxuVv97XpuiqB7ttNL",
  "key3": "5nu4su1yG8VK7VRTExM9KCNjWpcLQHZf3GWnmpaGS4Thku7SrDahEgPj4t7rzDJA7XNRf7pXceK57EWFjQycCiee",
  "key4": "VrbpudwxQT69nEbmHe9nJagsdyJFGi6Cq5EWRDRK9oAyxxfV8zAUcEwrdSuxUtG95FJFiGumpB8c598fKoYZWvA",
  "key5": "3fjbVkDg4zsgg3uHBoCd969av9NTVNXbHqvdbF8z4GD6SpBpmnbv7ZEBFkzZL4CCrkCTERLJe6RpayfDYJw1hgtj",
  "key6": "4GBEFZoKU9ioTdFUfEHMHk6avVN7pRHLhzRxvBegUvQNKHa2ta9ewBgF9JYi3RfXUFstoyqrDMF9NUfw6b2BoGtg",
  "key7": "5eKfcpgjR3FQM63E2H5JGZ4VtTTE6AA8SXFXr7KK7yKQoSFe15Aw69zhA6HgSs62yTLhF7Y1oNXwoJ5xE4NYciee",
  "key8": "2ebNi41wionX2uRW1ZqMXTZ7Jv64frdjdkw7A6DzB2jdnsDxQrS4MLK3cArVCcU6QxN77rUrzbZmzUSFQYWpbYk3",
  "key9": "4gVF5NERVUTMtpHEQcjeTTauZLMBXBSEQMHpGGRUKS2P633UjtsoD96Nem4nX8EfkG9y74Rxo4vtwrHqsPLcZnKG",
  "key10": "3twEJi2ihPi2pKT7xFjbzh5nBnxX8KJvaKyb13biXuZwUxPM9wD2yybyxeBDbB9Go7BEbJQqsfuKcEFL8z978FNn",
  "key11": "4tYKxYsEBsaDu9T5qU4Wm4APmTerwR6cbXs5ioNMV6EKSNbB4p7o18jZp2Tp3eCc29udwhVbCvdZUcU2M8UF834x",
  "key12": "2BNH2HbwhtTi1NKQ8dwx48SACqiaR3EVLYSU3bxwqCZT2auDgTLoSJ5Zw31P6nPZsiyubnVcgFHdYQ95MA9gPaBF",
  "key13": "3htyvV836ikDA4RMwNGubkqWP7qu9vNNKegJnCf17wMvT1UMBamec2p8SnqBJsmmp3fNjyhwSeM151HEq4wE4U6P",
  "key14": "2i6WtqR332KFy1UwC7c9gdw1Vm8wUfivRNDGQpPDyt54UM5bz2MWw584DEF4hoUqVYHm44g6gHm3GCEiSMFZj3EL",
  "key15": "2G2mXx65CFUZNwQ2HoB7cUWat254hKEAseRbY2BtSd885EDtc5xgzo5EP8js2E7PP35jDQ7PybMCgM2hWPXE5TPP",
  "key16": "645tXtR7AsWyG4cSdsdhZPhSSx7r54ooBUnDZ4ThtJg28PiJdWtaiBu54EbZxupw5Tc1WyvRsMJ2KEFcfPFWCfo8",
  "key17": "29qNaUVPmkMnoctAXd645xHVfoRK5mcdiGddbq95a394CEKCp343sJLQQanrzmQzk4E31GPJFj8RKoxqmuuorMzy",
  "key18": "H1ydp1RYCVem7FmW4TEfRSup6CLs6WQQXessvQeojyCSjazKfBWV8muv9ke2jrRrnpdAyXUVR4GjSgLbyGYE4oh",
  "key19": "z6L3RUft63BixsMZew9fYyLovBg6H13VCpPrQQ1xKVX8uWUFYPkWMLZFNvV8RH1fUUNuRUWuhVQ6ezBPYyGHwoV",
  "key20": "2ZKG9zRxQhsDY6jxDU6ev5ZW68weA8UvHTuVvv3vVKyS6RRzhnnB4fu4i8n3XbDGJ1hpUDie1d4Nm5Z5eVedUe9T",
  "key21": "4ma6DdsYHUzJSi46CF53hwE8y5ZUebWTChjY75gvWxVdVijhiNm29d1mVr4QgXp4gdq1JYVJeGcUQyGY5GfrBtJx",
  "key22": "23RFmTSmhCChzJUVXYJarMU8pvU7ERfbYhSdDzbBCpwyy3JDNXp7BTcHcyuFf44NxuPK7AUSYQyBz24cWmmpt3Ve",
  "key23": "5q8pof8R2WMfEP2uFZw9JbQizrkZQuddDyfq9Q7pM5QX3bmUeMXYTPeAxQ39wxgb2eYpds7BeUEir9JUBDvefPZW",
  "key24": "5AUJ675fF4q4FNGYTXAkdiaeDcvjcmjHwxytgLJ83TGSSt8cvKxwUdnytxF4KNmRcVEgMfZ7g6xdUi6VkDj7R4Ko",
  "key25": "2egTpF7drzNwX6nHLQ5D7WGXtNHj8f2zRMnpTvdEMcwmifUnoUNtN649qoeDX6zMTFWftBSsaFhQLoAEbbsaAkuc",
  "key26": "4ZbQ2Gw1ZvGmpmf45priYFpnpGQFUHoC6ZjWBbCxEEop2rY7ZoNm9UNrc4eTXMsUtzc4ySdeCgsBCxH1oxngkKT6",
  "key27": "2BGVqAsBDE6ghw7VK4gMiqtLW629F8Xi768U9KzzKpqAPcKKSmmg22ThxnEnmPeBZDVbmiBwTArXpweJSTBc8R7J",
  "key28": "4Bupj8r8sXki5jRXKpnKoZXG9yWg43VU82YzLXVVEcu2o14kVWboueU5TJ86dxgp3wZYANJ8xdEHVGtQ18UYKbrA",
  "key29": "3LuJSwVnvUkB7xeZBLkukgVftHAbuCLYZ46dXbTGDxGnymfSVX2PXSkAJCBxPCXtUwhAdDhMjZFNdnbCfaZ6AE9m",
  "key30": "4YFNvchVb9kyR78qmgVLUsT3Cd4t2mT6hmGLR7c9MwuNUyrLWhLWiSYMY8LWFcfD6R74oPP7vAxWULPoXrLyqyXC",
  "key31": "4n2a55iFvkq1bNXyg8PPuM2626465sAL1uE5hhFkdYjLTW78JEnJBRtHWjBXYLZaHWdXv49RykxWzFiE4Lb3nXgk",
  "key32": "2KPCMqMEyxG2X95mXJCvC9knCkS249brRRKzpdvmhreWV3iJmskwff2ggnt86RC8n9Sy8qpdgHESEou7jB2zSM8i",
  "key33": "4ycmhLLnFHw8787fGvnfn1vCLDUmwCVXH1JvaLcGwJqjC82kbu5sDURyWdhVYywPMTZWZ65oovdGKjzzP7XEVghd",
  "key34": "2Gpt8EJF9UU2QM5WsCeEi6dtJkUgLAQDASM31b66VKW6uxSk9sKbDJt3fmT7Lpdx1z1HcNA1DSH1mpmyaQYmqyru",
  "key35": "FtB47aPu1mD3kJYBepcuraZE1jtPTbcC9Nj1KTTynrsAj5wGkfAY1Fp8RHkvBidhwt6RCwnNAn3mbCkyyjgoVRt",
  "key36": "NpjioUEQAzU4ni4jXSeXmGdt4xTpwD9MS4aznuxcZ45BXaEPzKjCHX2RP2G9yXV1GqT4YZjenLUUXHt2VNnFWFM"
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
