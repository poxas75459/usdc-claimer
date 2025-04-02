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
    "4FX51evV2tfgrWxuCRcgyDLoUogh2KZjfm5wZiZDvxcZfMzK7ARNmQgXmznyuuqF3NJrJhsGGrvpHPEeUZ9vau2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HNKNr5PhRc5xB6K4w1p147pKnA3XWNrD3emFuTAB5pR7ZYnWfjhdS8AUWxDuX4SjenaJ3cdJM1EerzJ5aYUgq3",
  "key1": "5eB6SvY2XwQK34DfZ4J2eNDyZB7qzKEVet8zxaE9uUcZCcs989jNNhT42pd5MSJZxfP2gE2VLPRwAabUY1wr2Tct",
  "key2": "5mhs7rRP8PdziWH6FJdVGwSprHjQsUyH9VocnsSYoKv4MAWFKZvUyMBdSaeDenxqfvijJeqYh5QRsJtFPJjKqaja",
  "key3": "WYCcZf6xcgAqu2HQgcSGKUoGTu7YAvuoXWbrupzKVPaQxHcBsWtQB723A6maaYMZA8WevNphCgSujeQsNQwbctp",
  "key4": "4RCiqxgNky1ktEJR8qfJpGgwdmGtjAoWncpoeJxXeKc1dvFqFu1Aiyv5LjH5NmWMLWXWHGfDDUnpYE4BJpDrCFUG",
  "key5": "5PuQmGKaVjVCa4LvfANcinDwa8k85yG8AcKtXEd4JKfGVJ32Zx9Uv9UGDWKfUPJyweEbNYeKacxYgV46CieMREYu",
  "key6": "4nL925D4WcAbZCuFkx6mAm13gYbQWnkdpqTTf2dHgnHkbYqhJYX1aARB8VA7QW5SexJJc3gfWjZGiaKMnMy9TkbE",
  "key7": "5yCdSuV4KHemorte8omM6B9TYEmom6Q1vkNdazTzuJi3gcApDsjq57C1Nkepme7Pmuf3oakDMZR46PxSjYNXqati",
  "key8": "5ipchzc6xeU6sCiYtY99bfJqWFUHwbx2NXBiya8U9AAE7X3XQMZUij36FEruEFuVkoafKJUn1FPVrDQ6ZoswBb7H",
  "key9": "3y28MDaWnu7T4WgtDeSiz9dmJ6rg4Rxt8v5TNBbkeneQusogwDsfbWPAj9Wet5BUd1u3Bq3Cq3r8v7dpfnHewhb1",
  "key10": "4nQmEgivmCAcAN3kpK8P7Z3p7ALCR7Kd5buw1sMWdLFBj2j9D8KWQYmNSqEu66XkJwN98bBCn4oAi4MMGYBgpVsH",
  "key11": "5AbQoN66v6fvGtpawasBb2etdspXqbpbg1gv8SHntArWkoQAVY2wWSwSXCvntoQheWUJqbuKQgfHS7WUAkL3sPc1",
  "key12": "2MaZpAp8VC5ZjwixwALQrthuHtP9khSZQMo7akLsfd5EsT4LRPkDT66NPmJHoZyp1gPzTbbehP4mZfjP15GexPqA",
  "key13": "2twFUbmPx5JU8YjVQADnaEBNgJNHqH6a7KyLx9MYcmowsH25fh5VmRWdGpssXz8QRrFHFsP9ihuLuafQyM1WLMp8",
  "key14": "41rxKuJBxuq95yJCJJCvmKU1G1sAc4Wrw6CjsFBrHwxg82ZPXpgwFG8HecDhU7k5MH3f4p2LssCmMZwnFLZkJCv",
  "key15": "2fJsv6Wxmy6DDYB2ctLhkKiHdLicGNBgLk9swfa1nCHHMCyDew57jroUvGfjfmeZ4vsPAhLEmaPhnDdg7ndHUnTZ",
  "key16": "33mprdmUg1YcwnCykFD3MsdW1xNe3uyZ4jRSZHno78wzBsqe78wgTHdercSbFVTgGEQSvHgADxw1AkNRn9L3ETWR",
  "key17": "4vTQkEo1r19nmHVKNuGbdv74LTy2MJPqw8CKvxW7UTGZxr1Veiu9vkCVcZx5k4WmTgjyx3AtroG1fHu82ewprEX1",
  "key18": "5DTbHeMWabxrtmDrvR3vKqxBKCqo2wkpcajmqhFGSgUkKeSpiW1svCf5mPaubuJ4QmHqdSt2bqMPyLSfb5W7jy5P",
  "key19": "23SPTxoKeexk6BWkYz67MntCHbwvNqFYmUYe2u2VcuTvzTvDLnVjLDLT2tEEVs9JyeS8XU3wXUaDZ8EwecgE3xDM",
  "key20": "37ockFz8SAsdPUDKbE9e53P6T8EjCiuU6fjt3Pdvdnep81j1ERXVPu46A2BVa2RiJxMMHziXxd67hEqGCWPCacZE",
  "key21": "5y9Vs8zecKU3v23Gj1ZgMpUKK3CquVxCKjeqzuMqdCaf8ba8abGVoqNURpCNucru27KgGAC6QX73xVZPFeczkHSj",
  "key22": "4AqS9ESnBm1AKhAUeAGQbzw5L1iueuehdn5bVRdeCE1XhxxfbeUoYFhiDbLVz89h8MTesqaahDaccMKXXyhfCtF6",
  "key23": "3qeQg6Eyho5PW2MaREpNRWZvq7S7PEKxt2sJ77gMSwmtywMnWo6S7mtgC85DJovLvKKoU8dgLYfLuE8neXGUYncW",
  "key24": "5k5t4R26suTjxh6LNENtey3aQxRhvQ76Z1Z8ZMwTo3oVq3GdCaE1hwv3F4rwbGGmqZoL1NMUMdN77pmHvr2dSii5",
  "key25": "5LS1zkjQHAZ2inC442Z3XmhnWNNofaK65ELRtRBTrTUDYmQ2unDXijP3fymSAKwCmw9Fe4jE4wPjd1fxdHN9pVVP",
  "key26": "pG61WkfxA3keemhYswrYLU6Rp8qxRdTMk1rkgnagZtdU7sdtJN6NpRH7CegmATueYKrigAaH7avcTy3XW3QM8zU",
  "key27": "4JBGes1EzeZuwuuh31XBES2S25f5vaAgXcvRVJ9GjePgUpTikLSoLSST25QLzyvX74RgqV7CeDoJBQb3MEftcPiH",
  "key28": "qU8XmTkQaX97hwf6ZMf6gwN9Zaa9ykzw75hsWax8gKcLih9AaMUcspRxz7FBQXdLEpyLokUffa2srT6Ct1DJ2gx",
  "key29": "3vcXsC5mx8ZVmxfAA4jN1pMP49H2bcSXfLQNLeFFtuSkfqcRzDCczDKB5B2nhetHUEanAKBjRtSCtKwkL7HpCX7t",
  "key30": "iwsU5Qe11NWZ8MLJg7i9nACfugVzZj3X6c8HeVGHLWvs4cYGzhHjnKrvxpvd7oXtQo22be63AHvf6CgNGyvrJ7Y",
  "key31": "3fmi6gkqLJXHutBF3TqFfDjE962pocy1o4DMKc2B8EmEEiiMiCWPwnvFDac2axzCpYeZrnzjKboK4mUHRTpVtdTo",
  "key32": "3bYK1yMpdbWngzbTaWjtgHkVt8mSfBWeiUC5GB5qFbyTxfPuS5GfBcgThqS72EjpKR7nvkqMndzpMEjeM8mGzetG",
  "key33": "XS1j53gUGwNpRRV9Qhgm6bqYnmUaWZTmFQVR86ydms8fGRk3zEpDrCBrHxj39ePx1W9LVxD4c7UMPLAtag671YP",
  "key34": "2jrYH8qSz6VrhFTatNcF7FAixGH3Lh1Rgpv3iNRqKvC2JdnT3iwiaK9ruUS9jek1EEE379oMdK2cNTdqLxKLNF8H",
  "key35": "5Pne7CjqNAhebVCLuyprYch6PJJNBsMjmFpjD3SLXDJCJS9EFr5sT9kPudK64AKfdT7YkhrMbfCLbfERND1Tjqyd",
  "key36": "7XyeiiDEzV9XEjUqj1sNceFicme79rXvk3Bgao5xBdFYDQvgvkSesjZASJw9hEpZXbziEKfgkJovKKwwSeRsrg7",
  "key37": "3xjixoH8GMULiRTgm2UQpyBcNfqXaqMdTfSfiZ2a7XRz9Vy9mNvnsrXsMrM6aDo4WukUaKi7tuNnWm9SVKB8Uw6e",
  "key38": "3tzitVmv7EryTmcJBc8ndsAwSZNh5iMGv9QztaT6jhf91mWRf8adAMQpJRnxduRkJ8KHPn6AdUwcAWE1dKP5fRAC"
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
