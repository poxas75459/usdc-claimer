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
    "57aDhb8EBWQurvA2KwgJEiFBc9bpiT4Tj71yFuofzEaUuhjW29CSD2KV4Z8iaVcWYN6Jt1rWVY92DQq6Eb1HEH4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SroMjkB8KSsmJb46SqdYKj7txYFMswNPzVjtybadHwCbD762YrXWVUJziQ4NVSXjpA3wd5D5aabUzSXBTBZAn6V",
  "key1": "69Pa9nKo9BztDh9DniWmYEeBBueo6xo5zaKwuCtvJFyLuufeYAYN1vgVtWatfSt1CEbNaUEbHSkhQzqh8fJGbB2",
  "key2": "49hJPxCURxs39ZZSfkurV6egjcHbwLSqsFQ5SpX7fZytv2wx62Fcxquo9X8wdwk91HJTzPa1c7MMJYUpmDYZR6Hh",
  "key3": "cGkzCGAG9BSnHzs11uTxrYcGT7yXfu4KSDyTFJSrHVfSP67edGoU2KdW6EmuGHcU2w5tH84wtQfrteAhnNnhQkJ",
  "key4": "4E6ckySqs4CLneS2yua9L8mcjCRY5GopnSwjAyUmZY6NeQqJQLYeqyMSai7QT1Atxw1TyQiSL3pQifQkaYipUmfo",
  "key5": "edYQmDTqYGs39yaQNSw359UTDq1eHxRUBssHd2H8vv9ntUbMBQ7S5AcUEtR4fdYABYHJU7YsNZWV6vob5PgHt1Q",
  "key6": "3k8SSQVtRsUwDyFmiTNcCzwasnwUezecHdhMNVke9aBfnVFgYsZbXhfSLFVuSZzzwqtwHiutRn2KBQabCgQP1taF",
  "key7": "511S5aiMTA5qEXdRTPWYdi5cTKxZJXeMtLeHgFCqX3zGTNYGxeSXCN5M7m2GjuiyxdvqWb75q2n5uiM25AAV2hf8",
  "key8": "DNVnUqbGqMwPyr1iweg7QFAxSnRmTbUnNFpuooaQr6UyXsc9vNQN43HgiFppchk7WDiofBVFBF4aB5Ajjqyk45z",
  "key9": "jm61nvcGUny7jyvgRDmYe4ukQYobZ56kYiy4maBxdC6BdksrtgH5Rfe3q4yeTFNGmnfKwMf1j1u3nBpXVBWz8qX",
  "key10": "21sUzSf1GFRwKR3ugHyHHseJAiPsb4NXW9X17vAAhjVtLgAW7CLjzPwF7JL4eiA1UjQHv5tQyZTdC2cT3H4xLC1x",
  "key11": "4ef2tSgZN1jwyLU7FTKAwfr4DYa77Sd2Bk2DLvu39wqVSZiUPqJBHqFmbJktVndoyzJbSuyVh5mMFpoRfdH4iG19",
  "key12": "4XJjbskqmLUVnjMKAMqhTUk5gychhdibwepfCgfAZXcDemkCGphVB977H4Cjo7WK72dpQwz3qcGeJju1GRL6LVWi",
  "key13": "4XeT5stNUsZVRYFeNXAs9pu73vrmxFWgmN1kvNPo75MKdjuJVUnPbZkff8VZLUkDigSeBEWXbRZe7bPAVs33PVLb",
  "key14": "4gQy5Uy9dmT8f3rrm52Kx4F4P165WRiXccYaDa4Z9mNNQ4wzC51vcYYeK7BkBiaM2nGSq1amJWJu3ABufpBdVvT3",
  "key15": "48BiDiudBsGHP3RWhYxnjMcjYPnNKT2d6qnAK8JXNXnydbLcBFW5RDJ6FFMHeJwhEu8ivG2md1a7xQitXzQiS3CX",
  "key16": "2nAZLGtMjVbHEb218UeN68p88MML8ZugT6cBq9qAMtM22urvEr9eNSDQ2aignov8g3D2DMTwVqRMaTLJRReD7Z3T",
  "key17": "2jyJCG2vos7GyLHLypgKGGfUrKPCms6xtqrcw2NrCMBaL3o9q7Zsx7rq7NtLNKQfgvTHm3jHHTWQiBigL4TQwkpe",
  "key18": "4F2nbfuPBDd9sirYzdqsKd2dDUnmGaEV22G5L7Rshs3bPRSGwQXaTGHWHTQjTerzkeAXCnvMENJfoqkXfB7FaqFF",
  "key19": "2KveZ3tPSTNtdupt7ezK1rBi8pc98VLtnkMHwEDjGUhyq65vwwWBtZoAxtCyS4CQ56fV9F8EWSkTsY1g4moXfk7q",
  "key20": "4GVZvK6k9yf566VGAYL5fr3sZ9HAtwZj6VB5XnbDvndZe2Vnn4mrRZxaM2aZGxcr2NK1qJdqt2edvsRhDnfmjmeZ",
  "key21": "5VWBL3gQC8aySawXvGwXe6SiZuRdNfq9fDfM3pjDGmqAXu9HeayDy31Ekj88mDm1WrXV7FEu6zCM2xLh7Z4oTbmm",
  "key22": "56eePnzq4jC5QNoFhw3mtxa2tm4XfR1iyHEVmNA38dKCyEFMnJSCrwDJemfLg8CTSbToPDQJtZfLqow1rGBFsTt3",
  "key23": "4ruSA19W513qg3fmoFNP23jxQ683t9hhAM1VPtuN625ZgWKdScyWyMKn1tJ2JXh2uQiL2Y6gpAzkx6LfQfiQVu5B",
  "key24": "3ySmzyZVPYM3Z9yLacjV3kh7fXGtppBvzxx34JMJeKvxBuYgE317z6fRVtpEg1SNYdDzbzmAKqSa9o5LqpXQiW48",
  "key25": "3eL7tgCiFCpypLX5oa3fbjbcRcGDHotQkL2R8DGcmVptxdRb2my4zuU8BrqxKFYrfMono6syCHLfSq1bKVm7hNK3",
  "key26": "3QJwYthiskMfxU6WSY5iLkBUPqYV8c7jinWgvRKz92HkqRRPyWerLviAdA4t9r5s9vybSBe2pVY7U6LKSU3dnot3",
  "key27": "5M1w2PbKAfCoeWv31zBDQb3AkXM5ita8C8VPNDkcr7U8fyZRz8ZMwdMQBwdBfwvtUVXeZFAkoobW4rQ78P7vav5P",
  "key28": "5WecmR8Q6heaWDoJLqHcPZ5CaSCB85RxUBBGTfMmT4aWSSXBvavo7xmrDqtJapNCWAp8VJWf2xTrccp2KXyc8W78",
  "key29": "5i3XyX1cpfvofZnY9EaqnK3Umwo7fw7waz13eNd3hgaUWaWkzKA2D2DMoEZ98Xia9y7b8D9U7yz39PgNwnFHKdkX",
  "key30": "5ZcPtZuNQYqKN9B56eLieVx9bg9H694XhEX9JoCDzt2ReZk8DA8JHNikzJbEWqdC1i8XbuoVEXS4X7gvc4KhyqXL",
  "key31": "8D7rXNNRuD2hWGxMGmKUDdRCHor8VgfKU3zUub2uChrbEFA2cyww9TtyHqppzYtG8Hsk28g4oC8CmhktmtBm7DK",
  "key32": "2CgmBHbptfDHqfBnDKRZmWoSxRLdLEciWtMiqpsPT9MHc4ayUMZSgmXbix9vEGqYuZheHWag41uqNxtTBGHMYfNg",
  "key33": "UXx5CVLtrFPj8eJuc8QdBkwCWBbLy33VeQuFsac38gSrn2A9vkX6r6s4t4tpWmUTewBuQxWdjmLs8KbPEB949wt",
  "key34": "59Kbc9ZXj6swzQSDzW1pKcs2RygPMev7y34E5uS6aR9XvmNX5r9AhaHzES1Dxz9WW2SfL4bh9r692cYbTMWmfTJk",
  "key35": "3Xoy2FBgWJJpHB2HGYYnf5vDgJS9cLuQYHsV4GrdEuL2NNwcdBrBBV1fCFm6tgwK34aptcf8hJ9NLEqetfu4jwnJ",
  "key36": "49uuqud2UubGMXvUHdmKStAbJfmnrvJqQBk7y1vTkM4NWVfHHVKwYfN7LEMc7ZsdSHjSBgKwwfNqT18CotU4dW5H",
  "key37": "3X7yDBxapULWwiVLuj9Wvn3m7ZGShaRtMZ8wqNpiRqwMvz1CTmxbTzi2uvPNfefwRM5j4y3AqX46HCTwGntmYh4p"
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
