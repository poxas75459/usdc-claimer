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
    "469Y1NV6MFVQexKRoMiyAu5XijkzjprBr2Dz3YFrcDY7G47AJJ6E98U2fhJorzfacXfmDscjT27xFVRsSp93hkm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSJR5ed55AGn4jziFXnwokgBgh7cfNRWdzXCcPHaLnNTNPMjpRtjCbh1uzd3CKnGeGcBKhJiwjoxrtGyzifnkL8",
  "key1": "3WX3rsE7bUMkWmC2UBA613G1uNLkyHnKHJqL6k4e8neMdDFTTd8K8bYXVF6XMpMDLsQt6W9PtED7SrcFrrTvcBkX",
  "key2": "UbEg3adQmuPFvjBMBAFAJK3XoMSxGaWqDebckUfvxABEk86sqx8Kg1gxvRUh4QZpAkauxNJ34YccZ8pZLWByA4T",
  "key3": "4w7q1JDa1a7LD8Q3uTUD3pL85vatcufDDiEFH4RRPCRqiK4SZ5omvbmXSrGJp6zh25rpdtCffjLsUahatfgGCXfw",
  "key4": "5XnUEstvuEsQfVLjJrE4rKKEdEwZ26Poq16iK2nvDLJHyMj4LiJbDDYt27ygZAsG4QZMWWZwEuYCWvDKJHfH4AHx",
  "key5": "zzKW23PUSG2RefjPSuLHvayXPfSAHy48c1MSaiXxwW7q3dLFgL9TfnMCLmQfT9yXf78ZH5TwLeHJtsG5qAEAtZu",
  "key6": "67WveSX9kcdbJ5fsARss8WQxLgSM25La5GgzWwjJgtJ64ykauPTW1SMPJ4CpBEY9ifC5RwnMnTGszyU7uurEfJCD",
  "key7": "595unXVwbbJkpX1S5rfjKUCaSpgyjne8NMu3tCmoJak11Uic4o5qE1uqpugeRiqAWYGRg7QxdR5G3oHatetj5TWP",
  "key8": "LiMee9R4dvAMMzmjXZJuH7Qo6mjsWCmkovBmfRVhKTcJ9aWsmGs9g9ZtGQQsCV9DwJAVbCzGyqtMbhL7TpVKC1p",
  "key9": "6Y6Z2yK1fswLyuC7pBSjeCfkfSpeYEmppNoRRv8SMcHKiyMB6dVAXDeRsxshFBm6Zb59Gr6WhKPMD9SAmsEnhPt",
  "key10": "2a3ZjMKy8VCmq4YMMjrD1u2587LzKtNraCDWVSqBpCftRPSi7MWrwuCEU1NgMQ7Gic28SdViN4DGUPygRq1GKPnS",
  "key11": "3xjzB3eRrHATm8mpHxpJ8xnobi4UEq9gTYF5pioWAxGhNCVXUP5oiqLEhEdaGpBV8XmzGse6GoX4CJSfj2QmgJYP",
  "key12": "UhCD63ni56pCjJs3H2Wk8AbUL6qq8TbsxLKME3rfW7RZet5rNttuCRfvpZopx876YAqWwNMBAJ4ESRCBzPp6M5T",
  "key13": "3PjiBHbsbuSPXDMMzkKeDqp3tfXLWWbuByU1DauKC5fu1Kj7YYvW9sMmAhA7xSdXoNYcpiZJRCasiYLUPo9obQuw",
  "key14": "2pE1PhFGFpFULBAyFaBpvmNgmea2JMwAM3gKFofZ3gtYCHYem5AHmJk3rqWZvP2cb99oxV1T3gfq983axewFqFhG",
  "key15": "42WFfGefcm89p8E6KUPrTf3H9fGazcuxLgaTRRZikYRu6DmogsQpEHRawHnCPhmn4xCJ1tFjYQhfJG3Yy8BfaUV1",
  "key16": "4GDcpD2A7pab4W9LHKmq8TVNFkbGCBiZA2QFiiGMUSMVJVMZwtoTwXZ2P1u8s5jMH9j5PDXweKYxzs6xH9UKFzTQ",
  "key17": "36uy6T6dURSBru6xSE4SehkqDZDnLadGAKcfNBU74A7n74aedJuYu876Mut1jqvkwmu9pxXqNDkWoaYA82vDXX3z",
  "key18": "dYk6XoYV6SyMnZBoP3NHPsUVeFzjAhMVVEezRHUKgu1qndMbuyczyn9KiJ7QzmHvzK5VNhXiMJfw8nBfPwgyMup",
  "key19": "5WbzxUdSBqn1mV9J5jUwwzhZHF6hCxNu5BsUtkuxZ4Tmvvnk45P5qVckYbaFzufKygBShnkUQLxA1kDT8tNC3eM2",
  "key20": "5uFjdmRbhY17DYnvpjMdC18iiChnrX989hQt1uYj3ukpaTS8Jc9ZhKzyyReWcqDHhfFB8TXP3AdpzHvbJxtLgvKX",
  "key21": "27b5P8ZkTiiHJuob6qrvt2Xpby2FBeLfiemFsoCGd2oxYu2MR2YPEaTKDfV9ByDtA9CZXreZoZshmUjuvsJbuX9E",
  "key22": "5czhDpLu5ULTVtm8WvwhrBcS7xbHyW1VTBXqTb6ffysZDdafahhQJD5zUNDoF7CmsJL5kYK9VED57XoVrv7ZcoEH",
  "key23": "5NHeNksyUNqtfF6aNxLMBBHAez57U47VBUisniTb5G6VABBqPCpGuF6sNDBqdYphepS8whwzDJgzQiEdP3LQ4mYY",
  "key24": "2tBXndiHSfvxBRZ7AU1iDVT2oxntCpnU4HzhGyQeBxEEoSTWUjzfWXLMb1DXXJdzB9nNNRJLrtgXUKnFMYFJxudd",
  "key25": "VcprZtYQSDmzbA7ZbDkbxojWey6oKtMf94BT3knaXH7fqmStiswHYBP8BNvmXJMPxFQzJJqeBFkSfYCj98oRyaN",
  "key26": "3DUUq2NrB5vP6hCXYFo2SF85QdTQ71o8ABbARSyhQiY3VGmwCuHVFKkpVhRST7At6tjrANkLj5V1vSvqGqHJXfNA",
  "key27": "5xMKFu5pyYtJpcG3zXTjQQqQXUTQ3NEdeG42NZZP34QZGHJKNdb3qpBjFhaD9i7q5muxJzsH8rK5VTNKEtwMfdtr",
  "key28": "3Zp19ExFijBr8GbcueNFjQiNzf9TA8UuzHQbDckXeDce3ZrCHrsXCPare4zeDfsb6Gg7H3FwrxBGzY6yVFwDQ47o",
  "key29": "2LQKMChLkYNPanoMaDyHKmJBbvrbwwk9m8BzvK1Phbj7hnrmUyAJnmJbNKZr2ACDQyYe5mh76T6jZNXjE4P7JPAN",
  "key30": "5XBwFS2HLzVVTgMzqAo6CAne9yyem4fNZo5b1CUNUXBrfGtxiHaVyqD2QTga1J5uLhpco21Do5aUHibcV6bLvAkC"
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
