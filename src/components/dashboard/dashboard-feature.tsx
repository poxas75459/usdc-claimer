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
    "3GVx48RKaSrjYVTAuurQC4oQSoErMyWv3X4qCC6TNg545RVUhR8q6BHGoy51WG6h94tfNqnF7VD621dDLPFU48J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fNFwoVT8UYsCGHA5gohcorg5mav89EC3agjJmBjgoNzoa8HYE5MAYjGQB1TwpXzMhKA7s5LnKRe6rRuxUxPRMW",
  "key1": "2oZEUxCYs4zPLWSPz1T5ACEsaTLyi19VzRyTP985E1zHLzuPQbkJ47NKzbnuxoopdAynVBSzJULzudY5dkvmPbG7",
  "key2": "4Pxrpj3fz3i2sRVHHSdbDgHHFvthdtCHPgmxZHvK1nQgEadLMAbRxYqskajQvb9H8nY1EaTYH3gRZRjwpTFatFrN",
  "key3": "ifmH5Hp8h8N5EAj3SMjYnR4Fe5LSX8cCYJ6Ruk2ZLU9TpR4vfNYzDgTrEbhaYJdGunfheXnNr4bYLnW9UwJr82D",
  "key4": "55BpJCvyWNZPRqJiu8XpAqLszbVB3h9BPHMWQ1BwsvusoxXyBTYihjgMJsUjYNxsyaFNtpEaK1GMndjQ4HGQXVKf",
  "key5": "2FEFRRDhdKud5My1Kiyrqn3qKo8KrLuqRmsb54JqF4LkjaUfjKuyR7pWMrUnTRnFKWFPRjg8kUj6rbuYqQ7qo6RL",
  "key6": "wijU2Lp8uaVmST9iFoxFNxbsSqdBfAdiEJicRSMhMk81HVWXryPWQEggqssy1vQems4e6yxF62C6DW7UzsX7Qj4",
  "key7": "y7qKjTd4sAazQXav9UkLqG3RXYjHryMUrbr79kM96G7291Ten1QU9Y1VWCaCRVTW2RvoUCqPJwTNSbqPiyR7YUJ",
  "key8": "2ATBdr1kzxCKqEBFTxVGWLcAKRLEni8215r419Np1fNyyhYAjGEw1x9TyaCsgiam1DRoeYrwL2B2FeQ88dHWvYCj",
  "key9": "2ofsEUnDm3yEoiE7VeouH3RvK7MVpoo1FoaS2gM8xYmhgiZkXk1udnYd975uNxr6FbbPSNM5mnP2hSV5H4SxNDgW",
  "key10": "3hp2APk5DxqwegtR8kJTPQPzUrMsZQf1rUAUBe3JtsUFLKZikRHQy3nUYBkPqX9E9viY8mrm67tm5sc2D4bV46fE",
  "key11": "3bEcUHD2ZrwGvKXYnAQoP2fS9Sj4LGsPPDM2SzjppJyG8Aa8Ns64DinxXazfNddyi3jy4j62bwU8HahMjKH2Y3Ta",
  "key12": "3nZcA4y35uajTmRyiUkia9uRLWp6B9NjS6WpoarCyBkV4njNB7BUiRg2MoSMDmojPjxYCcE31LKpv744GgpN7v6S",
  "key13": "44SKFEH6Xa2j8qoF3AGpQkxr7grv86BthNCTwAtNbwYgpiY3AJpfUyPqfpLMGBkSo2BLs6cYUFi39RZTuumqsFv9",
  "key14": "4dXfu56UPpTbi96NWqMfyZM4YMT9C2vhkuJkutNTJKoxGXokgecC3ostFhiLGKcLp3wSnG1PMmKptiQQrrZiRTWx",
  "key15": "1mf2ecSJ1MSfxbPJpY9ACzSpZQLS2G6GLcayeSvM4m119VwXekgvm7fbReGhXd1AJ6XhPUdT7Nr4ykmae1JWb4C",
  "key16": "2kiXQexh8piM9cyJW6WBG4hHXvMd549zunENYetnzgYqjEZWje3wqgK3CfdEpsFYbWfJHNhq46xA9T4oR1xYkfFD",
  "key17": "GmEpvFdnnwnLCjzzzWpWXcdVafqNRGKLPQdBX8AUVoFfpXks7u2w5Kind5jnMLU1MeuvtJvrTG1cgS6fBMenj44",
  "key18": "2M3iZrqLdPxjkwZzKodxbHYzmxsepDApep9Ssyq7recmzEKzk7NY1CxENRSCZVKXQ26pLqWjKxLwDwp3awjjVGxZ",
  "key19": "5aPcVouCAZNU1mD9tgoG5KnbiLEbRQjXY8ZQ3UWuixfVmyrcwCWKVSXRRwyiALA8wNBrqD33TsWPnYiBbLZ992Mx",
  "key20": "5hwKRQs8Vey3PVuBMkb1xunaxjeyU6CCsDGJ7Na4qBCyGhvEKmpd2jTMT8GFrzWn8ZPDQncvs4sqE7F5omNgYjiz",
  "key21": "4zpyaURoPiYs2yMcD1x7zp6sbkWHpxoTEwm6VdFDFMbhU1gJs6D1aFzqHHtS76PAka9e7XpMLvuzRpUM6bbNVD3w",
  "key22": "4xxH8Vyktb41NDYYjcZGJ6441vyYE2Vu6rxcAC6JbJ5CHB5SRq27mv87yTsgGXwPErYbXCNmHWKSFXoziQehMUXV",
  "key23": "5WnEdY1jS7t7Fd2KAf4YkKWAvHMf17W3HH1DrsnVkDiN5stvDMgaJcHuzrZ8jeknQN6Hy7vUTYaNf7rVRqorUrsT",
  "key24": "65sASnoaNdJortLSQUbJhz2tPStPLKBKngDvtFRS123way3QkfTYqQh68C22XMYzkiLjyyozcJECPwoyeA5Ah8MM",
  "key25": "xiHjuscAsU3Ahf7xX6KWehfXgBkzecBrGmhh8WqqHbF7Apo2Z8n8VckTXNenf8k28JCyZksufrk22fbAMi7398b",
  "key26": "5uwQuSfuMu1xjZMQN6HzuJgmeQTSPG7XVjgdHS7WKma4kntHXHpTMtx3Az3VnAMUgZ9222CZ2QaGcLFWFm5Wb82L",
  "key27": "2biqGa5nfm9qrVtdh86T85rD6kz8ANVEA1hL26Keb8bQGJCqjSTjVVphwnap9xggDafazR5fnFoYkxvmsztZm1Be",
  "key28": "3Q9TeiCFVFB5maDCUdcZubwAMyG9Wmii1rNGKwatbjmhN1SHNLPbefxZLQ46mYBw5VJo9BUUPKwT3S1LJsLYUEYa"
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
