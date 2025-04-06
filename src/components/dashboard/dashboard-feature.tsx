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
    "4s1ZJQmYhNNxRvxcFg2wWSGM52XNbn5EuwcqekBy6bDV1xqWZN1LFbWLPziSo2gxnCFwCJT4LQCoCU3eR4BRtVs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKa9wp7k8A1ZehxvdBj1vCqhDD5FphC1FAc4a9a4eNy6V9N1uPChtxJcfBjmPQJpmb16KveeJoSxurDoBYZyJZc",
  "key1": "iqkmpPf8FPdEWwbUaXxkLpoTXtF8fV7kf8LP9N3qCahxwK77txj8TxjyU1uSo6r4RwGNDkgpHzx4XHXse7Gvuiq",
  "key2": "2KRANCQFQ7ezraWPXhkqHpHXPz2hua5MMdkaQy6NwkeFwm1xzvseJHUz46FLuZCWpZp5pKXGZHwRp8oEZ3az84J7",
  "key3": "5GjhEuq158Vofe1GASUMDaU3bZ3z47XJxvBRZ5w4QC1neYiG9D7Wudps2cSt39SbdtZ1Qued32PRK3NTMyWHW3XR",
  "key4": "3bTjHyNA3VDHripDi5txrtEtYU1p7E5vtTmuQVnZUen698xskyRU2kqT3X8duu2qHPRtsTKmJUqqNBmacJJY9U6t",
  "key5": "3JiPxEdFxyJbknJ2pF8HqGhrN16zJK3dTM6onmVt32LNzCyPGd1Rnh2w8ATzHCPsLda3zvj8qL69wDkYsxRVFUfR",
  "key6": "5BbgC5W8XCVMD1QAhZu6Fx6usNR4Yo1nZ9Q2sPy4aZCqrVKrHGLvqGtWnwz72rWxzdgoYPaReJHxUSMGRjiM5Sma",
  "key7": "3qqRKjAjVgPvYdWPyqPRBvhkMqouq8NDEmFSjc9mPv9pMS6pLKDoU4VKKYZDgzS1SMQESBDvmRm5zZiyPV3VAZE8",
  "key8": "5Qm9wbkVGtzwepnJR9JRnk4Zk7qtQkaFn3hc75LNfrHU2cRMa4DqQuEhoMnAzMMJL2sANL6pgKZm3qWW9Bow9xKg",
  "key9": "2q8vkeKTYVyRutWzxvi2rJuaKt7jWGNiSwuPAzbNBTHdmTtaYWJaqD6oEH1jvTNZdEKLadUxBFd6p6fZM9F3M52d",
  "key10": "256eVAkwtYKAQ7WbExP85sjQDupc5ZPnzQUiipzNmTPTLb2ckJLt6NZGTjzWnijTDdaCH1nX68SNJVJFxmLzqnBm",
  "key11": "5ziS74Fe2unUki91sFybWC5DQvm9KPornWsqwkMPtPjso41ebjB8ZHnzrcbaDeW52xEecLBEUVSjdYoy379giE1o",
  "key12": "U4z6MKRW4uTCbqKwEUEFvPhuWWNt5EPYrkm4RqtP3KTFVvrbUQtmbBShVe3EVpLfLK3NjQWMzDYnrkSRRrtRrVJ",
  "key13": "5xyPPSqfv1pqF2JD3FPtP9J5crpfQ49tmDUfzMY1G2YD75VMGk31G8QqCz3fSLpx4X35HTtnovCsHmTNi6mzKRdH",
  "key14": "3skJduoYzRCJL5SHsMLFeYJ2X4J4NTuDGNVafksecQ24dr2wdeAFnkDnYou4ZxEPKaBZs4zKFHGo1YYcj2m3fJ1S",
  "key15": "2Rm4ZgJeV61XSea5rFk7SmfYakxonsvsaC5FjL2VrxgSH1JdgvcmrW3bfu5nuPABBrLqRgKzxihoQBFo45j9372j",
  "key16": "2xiuAmAMybLybHc8UiatGxSJ25KoBrEAmRSTHxqMXpvdmwn73nCueBsnWGJxc53BpCoc7Tx8vUpXzKMd143APKim",
  "key17": "5Ey5xXUqd24DHTbd5P3JzVJmFCWXLNmfk6t33UrdmAQca88txhkcACtbt28ftoZYm1AmgaPdmrKqU1DaowqY5b36",
  "key18": "5W7rfdYg5TxtJZgKmQacqstDPt9f9jTmJKwXkTCGMuhhuQCe21HSZd3sjJQLtUbKZJwTET5rEepaoFtKFU33WqqY",
  "key19": "Tfz3raPpGtjgW4nELQcHYwziS82fv5JCshsSAirJ1bWey8PwLCR7C9r7zzSXvv7mj2FkVTukhCtDhEJ2989W3Zx",
  "key20": "waBmYVbxDLwhWMCvBRPdhSpfMdUkAa7XeHdJdAiJ9sgdyipMR1KA2mwrpg9MHiohYQC1vVk5s9bdF1G5CUpfg4D",
  "key21": "2c2K8ApZJD1nRnvzrsJjUHg9jF8G99oKynF68Ph59VbRVKofFrccf7wRtPmF5VyTj4NvsZroQQeFvFpuZy4fQ8tx",
  "key22": "WQXRfgRByPhsbRMVzMx9zsVb5tMxwkxxofaoZpyeeYaJiJwkui9cWMihWVhmA3Wqc7bWXwjzSYL2Qi64aAPAMtg",
  "key23": "5rQe59YJfnEfq8togBTEFi1nuqhWDpT3fsPQGQCwKCZa45AjN87xT7zebQcqy7Gq9gLG7sczJaB228usYAocY2HL",
  "key24": "5WRwGafBekZcGpsFZKAm5utkyoEsTU1V23oHWRdVUJ8BE5oEECrcqbcnbAR4eEU5WAEvoxEnXyc4pzxd3dEEwgNS",
  "key25": "3aMLW1k5k8Ai87WAuNenJDjsUACFPkmAa94fEbjR7Q62vNvVZ5yWNniES1RXwXdKVVNhc15MeeHkn1QZ3bZEJJHs"
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
