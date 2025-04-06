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
    "31aD5L6VQdjrmSxvFhwAyngDhuu3rrvC3g3mGA6s1h4jH4QJYXzyGRpApL5Gm5tTkYwBZSAHr9qK5ydkoGJUBpEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247rBdoLPUs6RaMfjpN8Juickcui2qMobzaHoHWeD3fSvKBZNxSYzqPC3cTwzqiMnMstCZcm3RN2S8PbB561mZG5",
  "key1": "3Wps3ENh2ptdDuSTkTx1ud4hxNYc9gjLbZDC7bgwQuHkBnJZRX1fymisvQm6Hsh8NfLDtWDaDc8LemG7BkJ9yYrT",
  "key2": "oSrzyqib3qFhgp6bBqSxusgzhggCbk2jLCo8VTQo57iMiuz9rnXshUf3WhyUTMLy4A33Pxk3EPZhnRgqBw5aD1T",
  "key3": "4P5Axwo2HAv7V9rWX8ttYaq9ghXZXTcbxPreJaHejcSrcK4MUKuwXdANqipChwbATHuPcy3MKg14qPAT8Tjj3aKY",
  "key4": "38w4bvmUp79K4mrPrm2wFKp17xXNhbq7864uZ8rpNE6H24Z2eFoEUx6U73B8UMMeyQf5qyCrpLzp2SQF65YxmkJq",
  "key5": "3gUo9Zm2ziX34XCsKryLWRL6wGciLNxhi16nxVhcTcdQDd3xYp1PH92FhErWMRgNrvuFzvqEGG1dbwkcsEtJdMao",
  "key6": "2cYjY1MQyCXXkhZnDR1Znxz6iMQYqerpfATnGW2c8JTZSZ5R22E1vTiUy7FcEDUsVc8En7FprQASgRSED8ZA42AT",
  "key7": "PGAhoWcMq35od45frMo6n8Yt7nfvNdoj4VXZmZAWVkJqU8W6Q4Joyqztmxb5jMTNDzU95G8b1wAxBaxdBa1BtHZ",
  "key8": "4TvGWFmdPdBmPVXDgR4cPt4dL13uqcZDE4Z1wFkxYzMiwkW4P3SYx7r4CLfheBrXrgQBukhc4tj822EJK8dL24Lw",
  "key9": "3WwdPrnYFRP6LJgwnKgrTnf2KUFTZzkTuwgcsrdJqRqzVnmspBadhRus6bsEr3iPTAWgPM8xoN12n8TABRVgtgCh",
  "key10": "3asF1M1txui9CBs2Rm4RLJ3L8LnDjk51UrkExX3YN326h7XV6bgfRyLZvKPFsv28BBfKmJtsD5C8YVxEn73RJrXt",
  "key11": "3gpvHJAUWbCZk9Qgc9SAi8hH5T6KxpFM11S5nVAUkWFtU3DNErZXiEdUCV52gNnXV9S7eysdBATx77HA6bHVJUrv",
  "key12": "64HAYBEq5jQsi1Y8xR5EsBZSofBKuQpGUAxtx9nCwWDikWkXac5UCa5sp7M5QZtAUJhjxd6tCBCtdDZEqomJUBvd",
  "key13": "2G2sStxi52vqNfDFNa2326qL93HAhQBzGN43hAqhikKCAFua6MieFMPwgHMGxhnpPSQN5tz1shwzhbmGGemPzwir",
  "key14": "5biiyySK9xQ4BXnve97A6ADcqmzALdnCAffpppsTXkehsBCQbEMQ928xS74Ed6Xs31L2QLKqSjsSzpffuKB7F8Vh",
  "key15": "32woHWz1A14gLQSx3yH5oyCbfZJgUUaujGC1Js3PmqVZDZPL9iqvYkYa84S7L5rwkCGutSFde6c42FtBr8Qf8ou6",
  "key16": "3w299AYV8J8GMMaF5KsBCwV8KS5ka7uuPVmCUSeVBAmdtSA6egkTA9y1CrbuifViDPQBSFg17aKaq1EDMM7FcWy7",
  "key17": "3cgoKVAiokT7aeZE2U7qXC3gteehPRnSowRXJ526gu77wWepsk2NtHHd1rTxWH3FnufSV7U5cpFoDQHusBH8ur7Y",
  "key18": "61gBwXtwho6evYaongvBRQZ22nKzFfUhYrPq3P59Mm6gruyQz8YXhK2EZQgyr6aq24v7xXQ18NJS8pvAY95xQwGR",
  "key19": "5NTre4z3xT9SBx8ePkYgfwMspbH23M3oGkiX7q6Rd7DWas6e7u5CWdDDHPBMWs4stECCsnKBAjh3utLJ4qLicwkT",
  "key20": "3MB6WA24qsgjb2T46yqSAaxtFneQE8s1jp7cW1cG175EBe93jF3bHmbLmg1PpaRQ3bSNBHPnLbB8QebbH9EJsuVi",
  "key21": "3cduScR1V26hWwyAXdzUYK7Lsj57mVhq6NgskpgyE6hva6FCACguWkUrnsqHBizVG1NbcotAyd5kFnyGk1WFEjeN",
  "key22": "2bvfFxPu5zL6oCi1222rkchBuFHoadTAdYz9s4Z9D5aA9yTxj7NNBAapfnyTuh3EopzQxYjsRPwUCDcgjVmCWapb",
  "key23": "56iDUMpAxZMafT2upViPzeb3TuD4nWEAfvmHDwMb81M1QhtyCy4BBnUb8Pjjfcnk5FMgCL2nkq5T1WyBjvCVx3y1",
  "key24": "4LmGVbhRsPEmPGnyeFptdbPDz1QTxaHNPwAXA18mqv8LQBNRTXYE2LYNK35Xg9JaM7ET7QK3wLjfYhcHpHtSGbD5",
  "key25": "5FswC7VTc8uukTeUv34QoDMf8nvxzNq6tY71Ye9pckCh3fFpjRuLi4i5UsMWZRuwWiiVXBYyx1RZQN9eeYkRM6Sj"
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
