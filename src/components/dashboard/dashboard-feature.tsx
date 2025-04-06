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
    "5BWUq3ry2pKoquSZ3W91Khp17xFxC9cUs7LwchiyJ5hFMPZhP4LLeJAmfDGUykLdrRB3pzegWyf196RcgBnqE9Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoZFCYwCiAHYXfzeqzP2rjSx1sVvsnTsT7zKK1JvhNPKkKffpyGgo8rsdWMEPpfxBsGFyT3h36oMQZUEzFrXA9M",
  "key1": "4monX3fLVVhq6RgyDS7t3kuThxHDnr4aiuXarm2MUw2mYv9Fvy8NLKEa3a2CEbXWyS9yWRkE77vJs9QpvYTrcYy3",
  "key2": "3B8YDay2MXjxo2NE7kNANBX5DvFsCAhMwAhrkjutiV5fupmAbfnN7YP5uVhv4DgsoZWiGuAYyshShKhu5fQhtaEb",
  "key3": "zTT15H7AkZPWKzAG974qZq6LXZdjVwb2WAwjAGauvkv4TgVpB8bScVx3rYkXEMFGF6JQfyFNcxBuZ6bRRArxNnX",
  "key4": "4Xdo6pyWAbLwy19nF3TPeburWmLPAnVXGoT8UGvUGB7GCebpyxxbcajPd84xGojDV9RnKiwpwwvHi6wuSNnFJz1z",
  "key5": "5DrC5D9DPc4tNMYyEDFw4UA4LUkwBncc4qj2u8niSKrQvVHjgpMwsGmj37U55NYuEtUSHmThzdfRxSJyxMdKvuwP",
  "key6": "5yHjc8BpMoxCwTFXJSP8EPuwFF5mat3exzgv6ccXr4bteRVaqYh8BhNYVH7WCT1F7sZpu5Cj6hvjeCunq9gy51Uo",
  "key7": "5nydjHXruepVjdkavZFU67GYgrj2vwTUJTSy42VsR9RQ58z9VRU7RmEKTqLprvKfrKoM8fGpepB4nQxvS6pCZxyS",
  "key8": "gnFH6wJGXDM4HS1iSC5ievCPGW1BmySGQRNdEdifUC99jYqRhzHwo2BkrZahqhdmJPQUCGLn4GxByeEFxnnTtxk",
  "key9": "4U3gHoJFdooHJTXrZei1dSS4fB5sPMGLjUf6iMqeUHrmGcsjchLvVHtzmJKiwr9Aqa62a592VuKVchJPHJapyyax",
  "key10": "2baHg4Mp9QNBcuuFHmVJ9j2Yqbkon3ZAWzh47K9FfnPdEu14fNAcDhZcATVYKCoBhp77EJ5AXeVGJNFCTdJCUVVA",
  "key11": "2jRXmbXy19RH6yeCfdFx8z1ZFw1fYmxLhHx4Z2Ta9LbBciRsysg4RYYm5yLuiPx9XH1JLnH6wBK956QNyHVKuTk",
  "key12": "49Ckf3Hzpn4EbQYPMBj9d49vtXRwgF6sXuq1cV7Ajfz3U5y7L2icSfLQyZ5UTr8os7Vx3ePQgtMFtspdY1FWFWsR",
  "key13": "DxVjvyRdcuffwpmyx6rWR2X1fyvTxsAEsGB2mvv9VnAk3rWwmWdABg1TWWA2Er56bjyUwR85yc8LFB9km1fjFKz",
  "key14": "3S7tk3H96ysLpSons6MqZ37muWKwuJXdYjNmbFKUkMZtok19qGr1Jk8v2Z7DkceMQFmTd8zBRYD3aMmhBFRyRKvP",
  "key15": "2t8WMAa25vhSNDk3fXZiBbwrHkQW6Y94x1qzqo8JUA8PG97aWaQFw5QB6t1RkbiYCjpmW84n7u9bW1kKGLFPc2ro",
  "key16": "vozeuFK1dwbph4nRhUsQfxAY8xWzSpMXt9xPqydEExVsH9prbDy2R6QafZSHnfsdHD8U9e1qUP1VTLxg1C6nfhF",
  "key17": "5EuoUYobgbpGnVHX5YVtp2hkRcWTKCHN1pV3SPjEojCwKhTfMU8fBnmYTvSvRnLwtMSad4tDvEL3FBAWyegGUTsP",
  "key18": "3okTzkXqWX7cyRaQy3y9etdc1GngW2eTS4NynLjr1maQdyCQ4cMkU9WbyvcPeecQm7Y5BwBr8jG9XjuwL8ozBzHa",
  "key19": "4c5Zg8EJzC4JP5wLBeBXGbqhbXnLyC55cNZggWHdaR8LvEjTXhU87dggN74K2Bti1DYqcbhTQHMKzsgLD4JYLgf1",
  "key20": "4484YWWqbEiVykMPH12Xoet92e9nv4UdFsh9RLoUCgWJwRPYLM4HpNKYoLszBzkoY5EGSo7PJw5Lmm98kiAj24xK",
  "key21": "5fnM1uaMYLsNowxgMcoKkAEmMTSr9dvFQHg8NQuiuKRhG8N9257Tj6rrutNUSvSp1qrySvt2bpjLduJKBXmbzATH",
  "key22": "5LH7Jt2qS3BGRfdKAPfWEmd2dVMiMLqb6jnWBnPVoMLC6AqqVtSXp5zwfr7tQxEyz6aVA8PNR1aPt2JaV7YEtFid",
  "key23": "2cYLLpEHETQXatuRkbqEprFHE6vwxa8YCTNEgAeCAbWomSWvdf5wUjoJbQp6tEp73b7F8fYzkPLZtcmDXx2AgvdJ",
  "key24": "4ozvskGfCP4Y4Uw8RU24odZv4RWL8bqaj4mB51k9cBEmiAHWPuMaAx4LEPqjhD281E72PfqPqK4P1g3HSjSiypxM",
  "key25": "4Nj4Pss8uUwPomsJdEBzfa8qHuqMjABCCpWH2rCbu8FuRfYBbKgYrVApJQ1jNaHyyFhZvWJmrrd89Cmwktd7v5PM",
  "key26": "55mgHubHHLFrSKvXixMAjiasj2fVme2QHs4PsvH3p6VemcxA8CEeJoHWR7ZGYz5keuDsnEyB3kPCkLPX3zdjgpo",
  "key27": "5JRn3wDU43owujyd1rk1PqDWXkF2zxYV69cEDj5RAYqzW7kwhtyQwJYJp9WP6GMmGi5zPuc19ngn8EnwQUVfGZuD",
  "key28": "QewXSHUxWjgw2A5aSEYge52Qi3tAwkWpTySG3hnyiREv8Ygm9AXgripQLBewC2TsPQX1CEDr8tLg3zsRfv1wrFw",
  "key29": "5Sz6Tw39usWmgPaGWEkCepRS89DqhmoJVpijEj5QDYnzTwuWg5BGz5YxkhWJ7shTNWsxPmf8Hf2YrYm7ojfqP7Co",
  "key30": "5SRkGXfuMj1gpVVeBYoEgZVXBWgLcfA9N93kKDYR7XLdYud7tVRgVfbjDGxpbKxMToAkNbVF9TWxdxK9qvvaMLik",
  "key31": "2YnMkAxxyqPB3tzU8cKsKU9gj3PgsqkP9XQPPdtnuFj3GrBWTnK6zooTPnLEAEwNwKnNifdF6HH6acN9CT6zwSKs",
  "key32": "4j19FmRLijRYzT2GfC7gk6XDw9o7HiSfYVSjsD77uWstkmg8SXsFmrGReRw5niwh6mN7WMUACkrwr5bxdcgNa4xc",
  "key33": "2tTmhdobUHqFDwumv2LjLtqZDati65Gvqp1GAY3R43VVyVXf9nh6yYN8c8gRC5ZBf93XgYJMv34fTbLpZuqM1rdn",
  "key34": "39JxKdXaH4LynKaHr1sonY62MDGpgudxXCdMQhoPJEVo8hb17XK3eoPUPQBuYxJVrLT3R2HJ2XzVzdsyxKkZHLeV",
  "key35": "3dypG4xqtJGLvqWnYxiPGXatbJe7KHpqmZCEYqtRQ5yTx6NppxGobBSrkhJJMpZhKCZwSkAAUG8cRNSN1yMJKGfp",
  "key36": "41gsxaM6Hak6wyqFRvYbAGqaVJGmXcGsXZid7Y9MWEDVidMFkYaxr3QRRvy9wk5tZW28forVAUED1ZpTfambRZDA",
  "key37": "5xcmWHK41UBJWJwcH3d6ZJBCCr6u2oByUDT1LLXvygF7Aorjde8wKMbLEZEbQvJcqqxevAnimJh1QYVjiRJnhhDj",
  "key38": "3z84ywmbhhQSM3mVdqba7cVR7zbMv5GTUXxTXGRoVArYodRphovX9EjRxQKUTcEQ6pVA2GPABMsZMPJ3qvcJJ6kP",
  "key39": "3YBY1pgc2z2YtSoxHvJrNTLmUXDLPXTDr9NX7CSDfckngDGpBwUyRadVmRh5HanjhxR88ExKrmsAGb2uPyRN7VLc",
  "key40": "3K5jMgEN2uLsi8KsEgJM83z7qXExUZP7TSgu5aweVaY8Rkqs8hjN1a2ksqqUgnpoaXFJYzPr5h9APUtt7fVboevX",
  "key41": "4bruGgYVA6YMLae6yaixf83FgbwhvH3LC1SJxM7MtCEyh6t6qKA4KjskA2wkBG1uHc75u76s8TRdjXtPyMZdBHqV",
  "key42": "tVskauVx1zoHpD9CWqCsXN6g8AGoTumkErE3eUs9HSCQHZa7FnrPPTP92cMQgQmku4YK9qqPK8hgTuJUSqk5Xqo",
  "key43": "9b3XamLKwMPhxKT7wfaWTf1JigEVxynbDspU7H5XC3AAyctnLXCRjPU4GnAKeA32gzeLAKFG4sevPFA7CT6qDsq"
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
