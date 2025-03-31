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
    "SQSghRqQP9xkhYgGQ23ZGYprzcELoiXfxUTLYEHTBRfdJowKqjnY3WRag3AxAUEByXXUq9mgDLkTrvvhnDAHX5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yh51xAU973CN5kaXvwTLzZS7XmUJqaHAKuoNwZNhUY1FUQJXEtMyXWDzkh7HT4P7sUEBZfiHM3GQGxZjDjHYoWd",
  "key1": "2DHAeAMLVZpbfenZCEaLYuHTfbvCLb3sVEcZfmBSScok1dtnedMXegytBy5vvrQy1PQLzwj3rKskd9Lsh21KUAG1",
  "key2": "5TL52SxywqtyYk5Yki6m1QGQjByyga5vRXwFRnmDsNFSV1oxNGwjgKNhoksU65DUGkNhKrLM6GtQSpf9j3ge2g4M",
  "key3": "4ggr1F7qyuZaU7jeeufWfDVLRxXihZ1haBtEXn2Hs2Wwo1BteAiRcTepQSyTPXfhkEvjgi4b7xSyajFjQDt3kshx",
  "key4": "2xUaLJDeSKzXUcoD6e2Dm8zY1rFVAX2njXpQEaLuEYMXZrPAm8zfPx3GroxLjJxbEsNFZUMbuhy7k5zLzXAUSHsK",
  "key5": "67TArVLJKKaG5vNQA8AUTmL7dsGP6njfWozmg6PHge1zyGavH3FaDedcQPoiGzz8HWsTDC9gK3P9bJmXko8etoQ1",
  "key6": "2Si8YMMu4C5yb9Pn7r8dMQbmXffuHRsQThLRTvVDPHpNPZvXCC49fY9kYodv7rxLZygy5xWc1ENpR1P7sT1ECTNE",
  "key7": "4XvN4sJ5BnoeEzy8r4grAz5KG9hThsBxEpzaczZgKFMHL6k177rx1SPDsGHZb2kceMqk2JfgBwPUSCnEVuKg5Bb6",
  "key8": "5AGbvyMN9kk76idpQiADWLyuBGve9NUaH8qcuUjmGtqCYmeULXzT8pNEaNMgkgqE9N8imNjtaU1YeRBDSDsH47S6",
  "key9": "2uTHxRoJZ3uYnXiqcPtmApYZdacVp3Xi6h7eXSGobsEnNphsjN2UiZV5PPe6EL4Uo2joPigrxPKJxSm8UVCY1eda",
  "key10": "4aURXcnuQoBiTZpXZzBXcMK3CH6dKDCFCfiYDbp2zebRo5GDAyE4fnZVqdovAq3cYdXrRpJ45uQ7B4SJXx5YtyG9",
  "key11": "3ZZNTjEFTH1XxPR3WNJAFP55vPyvrnaSjQ3kzc1j9DmNGB4jw3uL2Us14uqpk6c3azthk9ZxG29dSd8KLsrNjeM8",
  "key12": "81NPMCMibrQMGzRopvCqpBpnrYFBVg2FrLtmAnabj9eqapVieLV4tHkz9YqJvuDc1UfRWpH2A883X5VFrHggGk9",
  "key13": "5enAh5Q2DNkgVWntjUkXjapYR13AHhRKGRogmVJqaxR6E3i5QFWgKk589XMPH9UURpwMiWWRUE55VWjZq3VoTjmD",
  "key14": "aNwkMMBjuhTrKpPZyXMDcVDzYBJ61ReTMUWdFpRK9YPdbV8PynuuyGSn7M7wbqMJqtpxuEpyXYfEtUrtq629qgB",
  "key15": "4cA2xPQuVqXS8mSK8j6XgkXLoEjpWZcJxoCT9eSbVSQjsJxs9KMiHvbdYwzzhm4jrwdzvLLNA8hSZgupeaUt4fQz",
  "key16": "4F23bai8AjD1eSW2nvNDz7Azv7MrFQusLyutCWdZ6eP4bT2TiCQa41Yh6efFMbubpepu1UfZSfiFu1MRSsobLHGU",
  "key17": "122EeQDcPFpsWDQQ8PjxswYW9HMhf4udeWQN6sWj5CkRNtpbxiuQyV4DMVowNyiNSAuDpL4gz2zz8euxoruhLoPY",
  "key18": "oh1i2p16rCZXk7uYBfENyD6ecUDRKJhdw69Skn5XpCbLLW699ea3zAPmWGnU6cA8uPMnUZvznVZCMcNmn6ChdUE",
  "key19": "29zN9zkPNkpwNmaH368EmRz3aoeXVfopV7dF2B1LTDrbvD8XdspuDawLAPSftCrcaWxDUD9aq6TG5yshBM3zp4rj",
  "key20": "5843HVywR9aHn8o87py5uy6mgcUavHir5Xfvq4mfLXejxpxAwQsr7Ep5SEvLdifyGu3veemqS45ZhHPnLer17WGy",
  "key21": "2bD7jT3iQ1yLXh46jHKtaofA3toTzzmyK6VY2b8tccQUbBifhJQDZrPg8DVumHGWYVbiqRbzSNgJ49XQfyGYMDym",
  "key22": "mopztRhksSmuaCJWFC3C7ns2pEt1SpPmoP81oCTuqxNdenMZziuogAqvoBYDFy8LaYXDa1HVhZwqnAYye7CS5zn",
  "key23": "5ZyHxkDG6JL6M5cCmDW3iPQwgxb9mYN1QAusCRzj22t7Pc17mny91H1UERGuonqRwEH1tJQBW5ktKJbBE6A54Bnp",
  "key24": "3cujSp1CEusEbPTXiCnV9T25cb93YVVP78MeobzfHMK2dUPaiNb1v9mxjDJfu4RvacLvvghkSTd35pd4fTpRmo1c",
  "key25": "2Twrn8r7Eme556o8D8vJVZDwDvdxRiRA3SobT36ovubU9h8jBeLJcFNYTgKVT41NJEy3ehmNoEesKPSRF8CFmnUQ"
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
