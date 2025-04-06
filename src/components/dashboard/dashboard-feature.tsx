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
    "4N1bxkBWwXuhgx3sg78txUS58ukSyg4edVwLT3K4cDCeXFLhgxwDxatF6PpetJUFSkvDqWRWEMyYhaYA4YS1t7V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TtQG8fMRDgyjxpjB7e7TfBqoFxzpaXJUSjwc7t2Q24pYeQHPK4fdqGW12QvCgX3BSobjnaMwh1f9DCkkVGvKioX",
  "key1": "P5nb3QqDoMG12wiSvfLJjZ8q6EpK984CN3yGFxeLm7SxwDabUe3ngA9PcsJK84mi293zAXUwwp4r4d8JrrdFHRT",
  "key2": "4Up5wb58dLkvhJtWGXJnqR8vj5Tdap8HeGt531VzPmGVFVjMcJ4jXVr6isWH8yhyuT6R7mF17yxaNiUXj2KcaFgb",
  "key3": "3cLucTqVXHxXhY2bhgZgVqdfBWHUzrNLf6wpDZERhNn5bPimCisJAyc2TMMS6MaAtTQZo7X1PX51Km5bDqAFuce2",
  "key4": "3t9ADBk9My7EeydDuzqu32ySUDg4bQQ6HxmRYaEPsmmkb6r7tWu3Z8JM1cyK65dwL4VCzrKwetuYxtptceM8X9JP",
  "key5": "3nW3q94Vos2T8ndcXaru3FQS1wWo6oeAj226AYAnExV29EL3koJfevWVYj5kY2AwrHazjcLXT3MzPFNR7HYK4UPL",
  "key6": "4GXZi4b678cdrLFrMtLVojDEGXfeDkHMbMyscRduXnsBvmsBLDoRrJjTPvjFCnyakaRZDDUGw9PJWcHaQ96p8G9M",
  "key7": "4tSQXvKptNmxWtr8C4WAQx3gf1EHb5g8aryvCmVy2h1WB5mhAkoHLdraU7jZvJ3cVcS8M9WJbJuLfXhRNNszSvj8",
  "key8": "5SZNJfGhMNbsx2gmSh2v6y1BvRraaKmQgo6hs3qEc9RpkaburtjU2vFEvFkmg4CRVeKmvLJ1GuTLHjT5ddsCn4wS",
  "key9": "2WGHtSdfyY4euUUCBn39sTaEArUVCtFrU3TwGhkd5RuPGnqfrhrnHmuyADXzEjEE1Edq4tsVbVgMj6KTuTRZfjFs",
  "key10": "N2DtLF9joSucbpf7UioyUudgKTikLAiCZFeKJ3Wb1xmmhj3Sfivsac1T7xvNZPRGY7xGG5y7N2FaRk39cXfEbQJ",
  "key11": "62c5FxpqDJwUczHzT7dghf2rGSPfVGdU8MdzB3gKUwj9qCqzu6ULHoorApwA67i29h2kjowZmKDvDRgv22g1FdSA",
  "key12": "4UzjqWFjm4RnysjqQEYghocKpwhYvxr8wYEJ71DBk1novmsQfA4NykP4eq6xBCCwNS3WYz4fiwJyQwnfPqR6oQJW",
  "key13": "xytfRTyGNMeSXSaCsxR7DrmEYabtsHKVDNV7JwkBfpG3NSCx2Z2vtKg8NT8C1vdFaPrVHBnmd1WwiMVATaxBsrj",
  "key14": "2kCnMSJqQDeviNXUJkkzm9uibYmSKyfQNWDfN7PF7u6XTvNFis3QtdyTd9APCR3xWop55XPjVgrP2S1yCWxzWWCN",
  "key15": "5j3u9NgaZJd1dp2mikXZPCE3uCujKikxgeoXaRyBvHNmYSx8JLoGKjqb1Z78sGtAdDs9rmxfnDDtkfbXKjTDFBRc",
  "key16": "613JDfbTCHkpSfCKCEmYNhhYLshZ8dPqCxD4btKHWbzjifxb8HQHQUvJ1vgWJT3Pa2BqVpYGTwGeRKTJUrMgc9t7",
  "key17": "5Ze68QoXf7FZzPPav3d9rL19r2QzWzzarngzRmRLUPiPG1yjEovsxfBEKW4QK1CfKEhMGdpCZyE4391RQeGRQiR7",
  "key18": "5NdmRT9ncP3w9EjjcHGfdwoqWktwcbQAKDoLbSgKtC11FfMS69h84aWrWyD1WVaxMuczzbnfyeBwjtQFJxFYoyzJ",
  "key19": "tZ7NHUzAZZbxDCiexb5m3ua3ZN9NCpomJSsKVVdbGJQoSg8To6rMNnpNvybDmJhvRniRvQDce2DLXpPRerq3MQ9",
  "key20": "2RYkBrHueeKTV1M7PM3vnWhkY9R1unmxpShJ5GGyaC82Vpy5NtgoHDtpeQhxFgoJzAXL2Nann1TJmKwFj9H7iWq9",
  "key21": "AdDn2uTzAgrTd2SqWwJiGyhTNfnxCJUDGd28squmxkQMCkHsAepz4Q8CW7fjj3Z4SgfUWPuqhDeteZHJCTK6d7y",
  "key22": "5oEY4rE13WqSAErY2thAnN3z21MAQEg3L4FckctvfB2DWoV3b8rPh1LTEtKsSPvZFdHcBG3XEoaAQbnG8Vb6ZCxP",
  "key23": "EZX7LhBruuRh83Rey4utDLdDDnTmxzqMsAiBYZ2siCWvDV8Y8KgEHGLMqr5wTVpPxZpYPGNMB5Yrurb7KVjVC6L",
  "key24": "2Se1d3FPK5Yb6t2AXxAwg89Lg2zqJ15KEnvNhgwXJXNMCKjdbnZeajw12U4UhkrJxVJtFEUZDSYgRpMjFSb8j4JX",
  "key25": "2tciqg6XCCCk1uKwS3HxpmY3SdYvUKhigfARhgSn6g4orFn94iqHH17XDYoVqQNx5YFyMRbez5MQwrKTYPVRHqSY",
  "key26": "2KBKgyLWTzUqrHqJUFwmPGzsyDr4TYX1G3kFTZ1n5Y5wxkbdtS28tcwnbFPbNDEQVJy7ki7exAp6Ytix4n498Ws6",
  "key27": "2bWFWQgGz7LARLfE2SaHAwvBw7Fzc2FKvDr2ZEs9ZVyM3MKntKVWWMH2wLoR4HCyKZ4UbRMdFpnVqTau7gALW3wG"
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
