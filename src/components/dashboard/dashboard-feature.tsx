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
    "2bkcV9Z98tUtfscQokd5iE8zUsjdYK4ic3SF2AquzzhF84JmN61x1sxXeXPmGKJ4fr553N2axJoA8c8maYzbPUXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z12Ah683ydBj25PUY9x95xc7CDF2i6UVQhkVUwecEcJVrCawpYD56VZhk9e1ePa8q2h64G9XYvgwNEUTfF4TXBs",
  "key1": "2Vm4giq3cyicashhyN1DRomomH7n3rhwC65vMNEbmSJVgov3cYcwGFByXmCviikMau1wvTcvX7ZbwcgFbAvwzskx",
  "key2": "4Myt7QeHm68Ma6tNHaJuCs1VsYezjCfhSX1WXMLF6tb6wZUoVE9jdwjB4djEePzwMTvKPGTKZULkefsm94acPwtb",
  "key3": "5RTP1LWLC5Nw6Dx4dfmpz9GxBQjqx4NRqUW1B8fZoSFPNebnxEBufwdmixFEK68Uz5pjx6czhRpT5Sr1HCWFuhnH",
  "key4": "5fneGheKogWH4kvYyFEwGQQ3nehwEEqgrs3yvAQffvBD7TJ1CBezTpsp6Aw1JoXHHW77jbwFTf659d12gcL1FB7Z",
  "key5": "63sQMoyWVmuZ7jG2GrmrY2Cb1eJXHV82QXYF9MpCttVDMRjrCByVp29sgEYXxDLasaKZAPJBiHxWtc4ZYEhYE2LC",
  "key6": "2jfjme4YxxPLqdfRGaLbc19dqd5prVBrCYiNteQeRyyXpnFfZDgG3Ei8BRSRpUtEVEMkyZBLWGZ8BMp9fDv6B5SK",
  "key7": "DgtWj1rcWad21B3WoyaSiTnx3GHTCRFp7C6orzB8mUJufiAFCXqNhJFfqD5ngAR4xssziNqNuoruTkwW72qmyRe",
  "key8": "5qrFmQydUVpRngKGzr8LMudTdVd7Fs8LLEjzN24Yt42Jo3AuMfGi9oXgf2RwaiUL8ohsbJtfPgctxkXu6sEszwzD",
  "key9": "2s2XXqcUU5oDULEyrZC1YQShpyHbNW8n9RzYWDZsrZBVPZZYSHd5V4bPCi2Ws8HjokAsgH5Ea49FTbYxWVW3tqAs",
  "key10": "2M3Gj1LsoDZgwGNmBKQ2EovzADGqysR333HMwdi7TfmMAVmMrx1YEP1X7iv75t53d5Q4YRzq534jpb8V4FVy1zAA",
  "key11": "2y2BWdQBZKfDLjec3wdvhVdpvdthEotyn6i3ZvD5DBSvnrWuoMPfS2AUzrEE5dNMMrJXUyNqyGdjJffcKGMUTnVo",
  "key12": "5CuQznriYvp34Kyh1yJkWQu6JBGGUk2gSKAwGwVQAA6PgPqF7LK3NXuNunPfC9aFuf28ivj99ywGZHXTKVVzthr7",
  "key13": "5Rj9g8VK1qNgBXBquSQdGFebrf11m3JCMnTbTkECwGc5TFserP9fDRBaSmuqPoHYJNPihTNxmFk19pJfPUq3YLP",
  "key14": "5fbA4BjpJX8zynCMnXbmUQYt9fxMrZkJbQYtd2FhbywByH3rphz42Fj2bs8JWWnWeoHRUoWGzBKofXJzSXDYR6Ys",
  "key15": "4uCZvapgTLHgj77nbRiSzX6nnbqrTazvGkx2MTUqSoiHXrUhXMTGcScdEYP3eMMXuJ3GtWsQhvkhhcvwqySYeWZv",
  "key16": "3rqWQcN25RqrxLVUcrKhM9PL7nZcWRWZ3wEGB1amR3FoFEyypMRKi8xU2mTuChhYLBkM3XgWD1eQ75CvHthwrhXD",
  "key17": "3EbFKgLhVHfymg579APrq5AyuHDTRBRkog9bbh9TpV5mA9hm3uSuVEPJedV4QVwZM416csAZ9yaLgd4ygLhwNeTE",
  "key18": "3jR6fVTTCrrNKysd5f4zvoMfUQKhrC4ihgjuGde5Wcy2c7GHXJcpMMnr8XQMg8Zqm8ER7A3P1S4bQpRvLExkhHK4",
  "key19": "5C1fQy6NPASaN9bcKtDs3iSrs5zScY6SipCvnQDST7JKbcwgJbsDRPm91tKSvzRs7UeEYvaJRahk9BRgGw5gF4mJ",
  "key20": "2X3AgxktR5oTqP5PPMKbbvUuwNjaCgyD46Kr5oPPLF7hXt5yjAcsuBDpPCDGF2vsyX9bfTNMa78mU4151GyhE62c",
  "key21": "2TiWG7fC3pCGgosPvMe9nKtDCaQdHCL4fXaZHpwJNercZy34LYpN96bh6SH7xyJqidZD7zvcuFe3QZmPckzsoB1J",
  "key22": "4j33RsfiV1BoxYjY2fhiT1XMp78TS6WxiDCHKcocqAJ5SvxBDxDY915DqQwtQ74X7PCeLnsRTf2F5cYmwSYkv3Yr",
  "key23": "4qrFdK9ySKwAxuJRv7fTznn8gyxwjzhb6y6tEQaD1wQUEk7VFZ1W3opb3CZNw1ZoSqWP5EKHM9HNHxWvGbG2GG6C",
  "key24": "127Fd9keudymGtupU7mzsvWRvUkz1y5Kq6YKL4PaQKa7QNyq7q4dfgyRb3vYRxGG1rvfH8woRuANw4VqzZKB6S6g",
  "key25": "2fKjZafmwDAg3BN873EtxBFSwECsgN8d1FfGMArs3A5N14Vvdt3arum6CJLknGr1r3JvyiRZoEbocd3BaCcQDDZE",
  "key26": "5Ew8TGVsWhKuDMkUwNyoWeFLnTNCLJDwx8XARJSgqDGRBkKUBuTGve8pTFX3u4uwV1w4iR1uCTNAaYAWZGD71LE1",
  "key27": "2aM7vyZxAqvNzRP5i6DsdwQKNeMLbgUL1kEU4zS1vvrrm85dwZKaFVAs7EKMw8byZxGB5bxG3WxLu677UTVoM2e7",
  "key28": "5qUkDnCLSTb5ZfFudV8ioUbiVFV1gmaNctT7zd69N8S9KXunB4TcpoHjkhsSGwd1r5LXrELU5wn5VxkAvnvnHrLZ",
  "key29": "2G4owy2Yr4fUxS3Y5EDfbwWnsxiNXN9UMWHFAPaDHE5Pp6zXCG9i4mtbAG5pS2JZNaeXghH6WSFJJBVEwL9JNXEk",
  "key30": "2L4ruGJkcVFugSF2KH7UsaA8GgAsqL4vFshKZ9uGmaKKGp8nmSmEwVQWonqSaPd8SKxvhHV1tX33FQtTVrzCoJ74",
  "key31": "5ecshHqhrXJyfvZPoL3HmoNTwqcJwsBu6BkZ7GWUebGwe6U1kkdgbob32vPX1Kun3wbPY3tuDdwhJZcj3heHYLfB",
  "key32": "3AZNeGgpLS8erbEFoaWT7Wg1Zs7oSJouxuWcA5w5xK85MCikDo4Zv7b8RYiR2u3sUjwuaXfScdH5vkizqan3dhFe",
  "key33": "4UDYrEFDQ3vWtr5unSqAWTF1ZqeEafgwh7nPzrdEoBcYr6hcNjvFRjPEri54T3TAQzS5FzyLoZcx3aniLS3DwJDS",
  "key34": "67ddngeG6na5mpZBnpZkqJ69qJMevB1DvFYrrjqG9qkkqpySuhnDr57u44Q8wxkyL6huy2fHphoZfK6pxvHQcR4Z",
  "key35": "66Ej81Nf4WmFvkiyBVE9Xh6XpaXuh1rrJQu8cFsEtwPCCTcaiknZQwmQzaEHt4amjdbsh7CazCeeBvAAc8VWVUAv",
  "key36": "57H4AA7oLyWZvgq1s4kDYGtKUyZYrRdm7dHPXSAU9iPftCDcmjQYUK4XAWZccFgrhJrJWeWTgrM1KJzXgrywLSUc",
  "key37": "AcxSy4eQS7RtsK5jsAs4nAc3uqPSSuiY7qJ7RxozfztLAg2E1dd3PbgyYqW2YAEEtxe9cebYb2BwyfcYo5WeVwU",
  "key38": "FFbjMJbMtPP8XLvuMXwW5VMzWqKctYL3L16EXxKjuYgXx1et4fiF8g1n84av5q8HAumBMEuySV7cLqeA2rgtoU7",
  "key39": "gZY71PCUAbx8aBoWasAdjv3d7jxhU2x4KCsRu49A3dY7oWmdLL6RNXc6mBdw6Nd6e94hHCMsLCPFXoxRGF5FK6g",
  "key40": "5SL3EswBofksPnNUHMxP7W3EPshQyhYbz6ZoxQoT2mJCF3boEo8GK7KkkzLQESB8KQgBr42eHf1cVVTRkRL9Vjx3",
  "key41": "5W7YHXFDgfnQoxxoeNNz8pTzv8m7NbYavSWULFL1hmYgtDtR5kpSKDDMfAvtcXNQ41k1RBs3i4WC2g4aWYuu6ejj",
  "key42": "5u2SjkDFxg5zbrMQYX7k6UD1LhPQF7y4yeefCXPbK6oBaARWRbNiMSQbx2pXE5shq1baUTKaGmX2XKHDZf8E9ewc",
  "key43": "2Ez6kThX3SpzWxe2rgKCSz5uWVuvXSoF4HkHatqJPmzSpsLgSThBW3rH99tL8i3BxSHTyA9dr4Qn4yz6shQ8wVP7",
  "key44": "5iFjHrHByv36YbUPt7hudgZLYdBUziKCMagnQRe7CEhrhW4nUo2N6HLCTj94486djxT2Jjrj7xDiR74w88kReLKD",
  "key45": "5tJ14977Dhub2QRcBKstnepV7yAbtYfvHDzRqw6oZo4iw5xm5XfFBZVMd8CZ6BeMVgddWjXVvCHn4ev8AjwKz4vN",
  "key46": "38Uv83cB9fXkXva1hrLm5HGX9kZzeoFFSFcDeUC221YrfpJrstmLKBpPYomSZ7GwRdcMWKsdiL8qT7XJwgnjb1Eu",
  "key47": "4ZV8Apdq5sqiqVyPjC2BbeLZqA1BaaaKYHxs3w2ihRnHvbNrRQYTPm3UFtAvguuW7Bj5pPwaXuBC47RiNkmp7mpk",
  "key48": "5XbQa9DdeiBmrV8Vj42bZvApPgCK5pLHkyLacTBXM63oA2euqv7YCEhgbPAp2R2FGezqVYZsqfJMcV4iZdw3zAcq",
  "key49": "2FCT7HdpRDijv4RV8kbBUgxoPKRHxXgzGWWuLCazfZSMns2L9ej4BuRc9N5RYWBCstkE2gjfbH5oRx8Z3DhBHapG"
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
