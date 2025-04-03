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
    "U5sAqPSbd5bS4z7SmyP8c1ab8DTXYf168tQr5FqE4tYn5VMBtimu5C1NQFpw6yC1HSKhVHYPqu77dj9UQEnFee2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWgGD3VXrPttpFLQVgUjtNA7CHQbRii4FgBi5SJou5zcVEytRsWSbBcWfN1RuAE4PDSKHDn1h439ghsLyHJtKaK",
  "key1": "bT2c9mnSXPuRdM4PbnNheSFve12SkeMuypmah8wTYSBiNmadM9ixbCZ1shEGrzVQebf1KJUHVvVR3fT55pXgv63",
  "key2": "3vLRQTSavQ1XLMiQ7FPzH5xXJQuZd5frk2pxnxi2vNgAYWTDCQiSd26jd97DXR3jvAFuhph9dQNHtactrDVy5hhR",
  "key3": "3879xznrJya7RwKiXybyfQ6f9Z8qna7xV9qN6R2fytXHwgxVyV4eaPEvyxRSHq1gJntwxvXTPqzMAAooWfQfqZmY",
  "key4": "2iXAPCoULaH3WxK5wK9SA19c9aftM3RtB9xyaLPVi1bHjjXLZhYXAxkn8mwqtqSxfTPkmwNj2Hi9kcC7MeWukoF6",
  "key5": "37e8UyhGkiC5YesGrAZ88VZyjbv6KokdyDnrBrbKRUQKwuYbvvVuZcy2xhNbtvbmeqHnE1ZCfGFeFb7wZkobH7CL",
  "key6": "3p5ceiXru82P5sUoQea3nFx8reh2XCCyuXMuQJvs2brR3rLcEPuqSvpWg6NxonWPGxGDRfDHGRyKXsdfiKLNiAk3",
  "key7": "2gjaFWoT8hDe35h7w41MYRc3485mxvryjMBhYkNqnk3n99V5ZT7MxWfUwSLsuWLhaFwUi4Bk2hfrdFRVhR3iWJBL",
  "key8": "21q3W5gfxnGsKANZusTDrQ3cTLojeLdozN4hZiAsvTDcBBzVcoVQxSbwngiH242DkyJP5pBtNC36GB9111Nx4mET",
  "key9": "5iYaNZnnEXfTw9Ya65JcdbkRRWC5Yj4KbL874wEWRouKykxvqJcDEt7g7YLp3dNHPEEBUWedtqDN4xpyB1JeamZr",
  "key10": "45SX13qi8syMhDz4cdDDKxRucQWCsqHyhcSZmYokPRXknaCpkid4iwjB1yf65TmUhGGA7YnyeZh984V2xmWdmK21",
  "key11": "61iSH6cbpBasFNieGkF7LuFmewXWUPpomwWaPhNTZFi9bkn48mW5MfGCJkhW7hMY8D2YkfDnsmL3q6K2S9dvGREU",
  "key12": "5BeMGGzrjFWXcCvHRoB46QShQiyn3vfBJrGWjoqLkxK2hkvnpYE6yAmiLCPdzNrbhaZ2R34WQH3J4pNYEZgShdtn",
  "key13": "mkLshZJ4EYHekXQhrG9uB3vfc9C2VPqdYFybv24eeA1EVSoKVWzcByWidxQBS9zvMLBLTTBUGth9cH7rt7fk4Cf",
  "key14": "t7toN8ERDwwJXgcVrM6cXqnCndqqQwNeAnS8LuH4xQgeJeC9tXfZkh8g6xrXGGykvHtty4Kq5cUR4eNL5uEZCiS",
  "key15": "QmTDG6Rxt1oRBQHpJvAqoaEJUBx9sMhccwBmUqFqWRUWhBf8uhvkBS4B5kSYecrkfrkwXjpfXbXd5ftb8cTd4sw",
  "key16": "3d5WqyJiKPonrC8C7sGUAScWSN99ynFZRRdHAUCKksFYzmxaAkn2kZxE27sXPDCmZC84d8sziJWLGZntPEBS7Com",
  "key17": "3633MxEP76oWcUpVqjW2pe67f25te9Ptd5PiVv9Bqu2n2F4fusASikuVKzJmTJJ3eDGwoKG6xScW9AsmQxoruLTe",
  "key18": "2PpyjZhkSsti6cCqugu42RE5mQMyCXRrMhXj3uzVJ5TKvMXNHLsW9HVaGmVavCvq9g1HzMuwWY6X2voF56ReDy9p",
  "key19": "4PWtW12ySmFHfg9zP8YretVxzQtynAmZxXJtYptChKyASvSSAi6Y4KHEmh248jmmwzbY24hqSrrXERypcWVK4HSp",
  "key20": "28rPkbFKuoPbjGES2L6DKFczAgmoizFTQkVBYLmKb75i8di9n3hQVXHeQFenm5zSeCbGM2LZTzrbNaZEgwKvMNuf",
  "key21": "PRDaHBus5r2L3H3rr6muyfujqApxx4mbBhyE3CvPtD51M1QbBGPbom5etXv2qvpiBt3ynygxsQhkSGn21DLvSE1",
  "key22": "4WUp3mMZKKRB1FRMeR5ahvQbAKACWiUVXN6QysHYA9XmJ9ZcKE4kNTrXa4nHVpR2kTXTgSoNbUjYTtMXFfbuGFaE",
  "key23": "4Cs6RPTB6btMwgQYiGE3szofusSzWMXEcQqDxZ6QpHN7YjEVffLcm9biyqZF4UcGBNYmyrsKJUqi39LYEYPfE5Yn",
  "key24": "jKtQyWPjf39fSvbjAN9DFRrf2NQYMdS73wkZLRp1nktx57PtJrYGL3J1uZuwBYw8QMDVXeCCqHqUitagVFhhSaH",
  "key25": "4jSsXkaaop1nJXRF999Ug61K87QJs56CsB5zAQo2FkXFbuqjrHnhVNb9CFdUxSkpYuQ5UHo6MJq59V6799GbCsAR",
  "key26": "Xn3n6mygSEMc7K8NRWECHE43wRrxS7UWDACCgoJCe1xC2RL95CfNpWhZ6f2f9xuh1dW72cp5CENGGtrFynutfRa",
  "key27": "37rj1TFt1bPK84RP5wKcgkuQbASqxyJrwPGrMXEv58eiDWmEnJsx7HnG9r9dfvAanXuWqpcTPx9pFTJUKWwWYWUN",
  "key28": "27vkVMyDWxrxda54uD3vZ1azciaQK5EVLY2c5gvmr9dpxPtRRfNHZaY8sns3e51JcfEXjachZk2rPYRXTkE7T2mE",
  "key29": "5UjyozFBTzfFZFYpsCUVHyiiNMvPUnJsQo1Fb5Gp5ZXN7piwLmd6HSKTHwmMqr6GXzsv9npaQqHGdrPtnBSymxon",
  "key30": "57kYPj3JgctRUuWzrwU1HBXnvUZnGDFP9rzLT34YfzCr1285HYY4taGaJpXRHoTKHaNLzGLL6qobep24wibyw1BT",
  "key31": "2xL4VaLbL5wcBu3mDkkZGtbdyaZzahaRaefDSwMQwZpN3bPBiP8HkhZSpmvDtFajcUtpDKYgfGbLFhN8U6yDGGLQ",
  "key32": "3GKY2QDjyZarBfjzYcZdqWpoV8fttZRg9SFwvZiiBeDDhcrn4LJ2g8iHrxZTf3JftHKkPSNPntatN2r2Gip14HmU"
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
