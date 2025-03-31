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
    "5vxmubQoatk4qdMGf5yUGxjhDSEXuCePRZoAjTNbx6CpAX26GSne2Eo8BjMRtghygEDa9F17GhayUJyNFxG4J7xN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5RGgA1Rrpr6dvzi3PEM4s4jBrBPnZ5gFGxPezY2GEUzuy3Vr11i2wEkqPcFLfjJ9kVfPSMwmeZraLdrXxwz9Yr",
  "key1": "3hPvgwzhjirMkTi2pW7cEwbf5QtexVXDcA6dcXJB4FH2A6i7N2EzXdLTRKUHFoa9kFsPBAegNetzm63BrMUnWRMj",
  "key2": "5BYWRVi7Ud5w3d9gJhdvFCQkaCPMbTcRC7VbnJyBGmCxFxPomr1yLHE9eEwxtBSLhY6JyJ8BbatWRmYpw99qoFBn",
  "key3": "21bCwxfaD6gsTamLFjfUdepGztcdop9d5VqwWxHmwrBNUz5qduzyC2uAqEJ63e45rL3qxyjacwKxG2DG8aLC55j1",
  "key4": "d1TGp7JR1tuG5RtqHEBs8CX9m3hn4gnAcmdubf4cgqTG1RAt1doN1FnjSz4xjCdTEbgLpGzMmf3VBmweoqKNaHA",
  "key5": "j3mgXiCraZDLZY5WxAobZdym8zaDe4M44PK2ErdDbkvUXedPc4N6xPoPnUjsnEQ2n5ddpoxpEqd4b9sGCC9F8QE",
  "key6": "3CgXkLcGhi81DXtT1oreqnWGLdf5Y9yRGMC5qMXqQRZHrN1JTcoNtNFMj7ngMw7D3Mt6ebvoueAE6oCCYC7wnNMf",
  "key7": "44hLtv6TGv4cY4zjs6zdQkgXf7WcDikQFLZTrtGm3mSwCQT8SEmn6abkUbg9Qj2kCGQ3zpuEkSTspWQESvSLZjVx",
  "key8": "Ha1weUUpd4suGZaZbVsPxN3fFprTPkhgcfAX1qfUSVa9pfFuXHqzk5NWbXgjVsgdbaAk1MBTufFdjyvtzoN733Y",
  "key9": "fP53gKS7rf9caf5roJWM1jRCTAXZQ4AzMXsfBvjocLdJQ4si6qCpFKfCZ3F4Y1BVo7QAvXH6xWBRAKZHq3A3yaW",
  "key10": "43XuReLVMmBZr5iKmTsfzmxU7ka8Ron1Dd8Hyncrhvors9pL52j9tBgNSKdTe5SWpkN7b7uAJtrWisAiyEDzxfPS",
  "key11": "4ZgDzPgTXrnhgymbviwHCPAcsR3A7PKe6fR5LtYVKhoxywoaCNnPRxY856rzucWNyTYi2tDo4ZkcXKXivNzZjUFd",
  "key12": "4iL3t6zCVpHC9KwRBavDg9uAxVKcAc588irEtJHjaXVoMDk8PEXNT6sdeZuY8rT5VYrSx75dBkUJhugZGMoS9CgR",
  "key13": "4qEtAZUR8pB8DV4Cxcnq9rx6tTHfxQhtsrNBrrfXD3X5rPne8vyLuPhbcTNHTDWFKTnm22HMx5RQ5kV3kyWKp6eF",
  "key14": "uvq6pTReAir1Eb9DxAh7ZLtcLvhipBRXF86qZZkJ2a5B18kidPDm7VdsipDDscZ55sY33cpLY5VE12fHyuQfMJ5",
  "key15": "4P8xShESGQQQ2v67R6D7qbKfoRd5Dgz3iKBM7u1n4PTz4t3Chh3SjFjds849T4h4bZmR91gCZCLJUTxFB4bfHk8L",
  "key16": "2296718sTSD7zrDAyWfWKMNzVdWMcccfCgDZ6jxq1AMHVKMzQwm6dkDHUdMkuzXeEFgJtawEYuCA9JiT1Cdt4WE6",
  "key17": "2dYg9hZwEzVsUJhqeq1JLEw3ECn6hqQvAHejYK91gKdhTxybKVvRCAv5nsKwHQ1DZ84yLTJdXPX9rwsnfuuVTD8t",
  "key18": "NhDSZTmSXL5uZLt4SRvaqR4mHYAcetNustug7KjtWsRaSuJNVSMsw1RTqydg4v63CrFKgSY6B6RoyX4M6DMPzyR",
  "key19": "GtVi66RjW5APjv8N7EbxHxYssCdvehS8ozP3FV2t8J4i17CG7gpb3bCY3qUwMNkksCGwj5P95hpgyg2iB91TumB",
  "key20": "4LCpaXtEdsC778fDa6uqKkrBj91ZhLb27PhPxeDSgZhp7HkEvKF1G5pfv8YCmvdXw7aSyv3VM7keseomNfNMH7t6",
  "key21": "4HAjfnDUrUcYqW3nQPvZcwDrZ5MGaQYHJMD5pQfyk234odU3JqK2d1KJHZbGjH4qoDbJwvsEoqLvyHVRKFHwL29M",
  "key22": "64nXtmaCvLXpSLsivhiTr7fs2jG7UCCyxizKhW6rPwWWkkpUFM1LohESzFs9iXVmMVv9tMtKDRswXxQyVCdZGDxd",
  "key23": "4aAbVKqgUgaGoBUeEeYRSBiRKFVM2fVrHmsiQdfgYMk8Ey5LYKLqyFcS4q2uLa2JLivuhV6FN3yYzzjLWQYewrqG",
  "key24": "4S2UtcdhcagHokBra5RH9mrazvsuFxR8GggJGd3uo9LSJ2FvwcK9FXetbGhar7QeQdbLP1FUKpnWNWNoTLEJAvoa",
  "key25": "5DJaLF1QfTD3f9Cusp1xEvGFSTmsG4NJAcWaMNtCWfR8FUrfaz1TfDqp2KawLy7a71x28Rr45dKx6umBMEfnA2ua",
  "key26": "5jJWeFHjP9r5Sbkhvet729BzL5H6eV7LLX7vHAdHKMGNZcN41Rh2qGPhQkiRVd33KFugDJud5p5fz29Qi8yPVj1U",
  "key27": "63zArXCDRRe3mtCqQikevkf7NzJ7yQyeMGcXA6XTY8tx7YiyNSz5YSMTkmayKNJ6LaFxRd32znqbGnsHQhqGTrV2",
  "key28": "3v3nSSZycrh8H2jdixudddyuEf9CoNXU3c5XgbPU3DDPA3eRTAufv2CDWysDWRVedqDQ5oFkKFBZErUEzSFy1qXu",
  "key29": "2vgCmFLsLLEsQyZi8ix8swdrKqbhoMfvYJaLMZYoYgEmpRSwMTsV2S7ycrDi5F4vDHEPfHgxrS23Gj4r6PBY9SKd",
  "key30": "5jXJRqz7NcV4opqNsw56zCLXMC7Hv1czX1kjQbnBfmFqTYWj4Yn9WwWaiPGWfyVj61ti118Ez2Afj7LUwVPTKHxm",
  "key31": "4H2BuCq1Vr9N2km8B46pGypoD7VKe7XR79zNEYmsnzRpSmHxVLFhPLmjgnT6pB5wmpAHB4GnEcCh2yKbKoUhQZmH",
  "key32": "3oMGPWubpkvertTkyjQXpv1pcVwDHjirRvbgcBzXvdJNUUduC2KCWczMQGa9WdFrMC6BnpYiJzjcrmUcCpAdWw4S",
  "key33": "uDoGNV5HXXPZqm9nWDAYdv6qdQTrNc3FUTE3KgaytvRDMx4cuXnvAQNB1on7HQcMFdLb7kTbsWUseUs4TUFUEbA",
  "key34": "63mrZtrQEfwnHRWwQM4kSAQK7URLZy6KqzH97yiv4hGKAyQALbhCxwzZeMgz8swSSU3hEoP8d5gr7Jvc3169Xio4",
  "key35": "Fm61RJMAhe4ZKiS9iJJUxuAViKijx2tgUi2gKTfXPkSfKZhrekP9UWeRGiYxWFpzEF7k7dVvYuDjambnNvTGwbb",
  "key36": "3FsaquMYTiKXBcbCYXZPt9wRZDq8czMjfhVaFvPdyNj2iNEwcbDQ7cvrpQqxJmUrqhcc35N6aRa6iu5brHEeHXeN",
  "key37": "4HLC2A3icMYbHCDBAZo8HotuQD1DT18wcDQsM6sMTqDmyBdjcCdjZWQVqkLK1sGNPqkUtGfUrJc1wUPUVLtNC5e1",
  "key38": "UcukRF7AmwP3CuHcNuiCHS3BaUUNMntCt3VLrTJj6oXJTZkwCb9NLciUPVufsTDmVg71XsN5JjWHqGF2tY92a1C",
  "key39": "47eDEtHT63UNLiZa7zgacL5M9vdk4hLGRkoZVQimjaEdfHwtc7DcFsWcZx4LrXjUZKGCctDZjtKTxKRPaR3crazo",
  "key40": "4MhabnRaJ9mUKV3WoKsCNJVztCMBDpALAb2EW8BRxqDdLSfQL2rkTh4kEgCAQ8iefvmfNuEbPXFadzvBB93US2qK",
  "key41": "3NL7c3PNRFYtxYN5TymNm3ro6HBnud5opPkQ1PhbYKpgomsyPNdniM9g6VnbTetBwaLPr1D8ntK8RzYaEz2bmLt3"
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
