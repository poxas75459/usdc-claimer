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
    "53p7PWcapTxxrHMnSSvj3WsiAUC52g1XZFdecv2RLnatYbSHQd8FAhijsQpogs3KS36cVmPJyZKDoxM3CVFiRXmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VyrVLdUCzQibfPWzwpdxbGUHPG9CPd573zHj4YySbptTz6M8dwGprCYVAhJnghNu7EFJUvG2xr5iZWtx5mpSwm7",
  "key1": "3HoZFZBJufKSx9WkHniPmYyU6uBEvztF2753xjGs4No1myDnWPejFYhiGcBcPN6oysJqakNWk26LKYFFRK7ZHHst",
  "key2": "3GpVZGpoMQFyeXh9FWDWg65ffxLyLMxKdQz7e5DYahpXbGyK6WQwwYEJdGHJVWr1Wghw7MoESzN8b6BYQtiXPPX2",
  "key3": "5zCrKk9pHEiURS5moubQgbmx6m6jW8W54kpDcLaZBCG3wrNpzck375NNvGVJ5ZPXEsB4cQGgKaEbuJ6AjwaasgxN",
  "key4": "3zott8SGynk1ULGNP8kRBZtrL3x4vgKfFC71Hr9NGiXgjNhpqBprWCs3qFKDWi9eahZRLA6PfNVhC2BwKpMpcSsr",
  "key5": "2by6Crm492RQSe5Wa8NSkhxmPomUMAywDASFo843dcsZjXcpiTkdaWpRZqyZiM2EE61ijeYSYgdxojBLXUnHp9nB",
  "key6": "3sy4m7AeND8NnXK57X4bB2sLkwMQiEB9Lo3vmzSoTrL1XqVbxZeoX38bnMSYKHt6fU5fnBJsQRUc5xHcMnFaX2JK",
  "key7": "5fqomaAZ3Se1avoKFLguVLyZSpLU14jjPmkXDmKLBepmDRgsXapiQhiGCMtxVdHfWU1ABjKESJehh5347qNLZrUJ",
  "key8": "2oHKvXdgPsrEaC2NXtfSbFAE2JTDXrNCtEMXz4HrR4DVUES19bndesdiUKAZbmuNDkWd8j41AyZPijjJVGzPsa9u",
  "key9": "3vjEWEY4dzUR6opEmscdt72vt9mrr91xJiVYcJKqaKcTFWQi7GaT7aWiZxW4wzuTCpqdBCcGoQik4R1Pp8Y9TgPQ",
  "key10": "63kwEnSMZWjZbxDGXePi1Gkz5BThUEJrCQgXwZTXMGKxVf4xVtL9bWKfn4q6eLQVHhWog3sqN2WBKjh1iMhzN6CW",
  "key11": "5uHtu85KWZBFEgTjUmd2E7YFiPrPmxgqg6CoT5oXJu9L5y8ckk2Fe78YgKKDofgNb5EHEXms8fNT9ZyNR83x3G2m",
  "key12": "5bUzzjuTMNFD76LGpWGYxPWM1F2Ri9UKgMuPda7mw6ALDb9JLDJNUzNu5QKkVXkizfLGsAcR2K84tbeMhiYQUh4x",
  "key13": "3cpu1YrbmuYT972o33VrFsY4EQtCSHFbDFNRyfDJhdvKwHgSFjRNjbdy8D7ggFBoMbxqeep6XHq9Y5pLbtDQeYto",
  "key14": "25WxFyGCy9kASU2jwuh69tnc321e4qVXJN2y7KkhCyvBssxt1mWHbBoWBjAc3eicUDmTMdeW3naLXMmWUpZChtU6",
  "key15": "2ReDUDucNKcqbR3iJG6YQqoJsLhWKNeXhBYobpBU7kBwZNJZAcctXvD7Kkq4RTFSVk9yV1xM3foNSiQ2bGgekaDQ",
  "key16": "3suB12mbphRim4yqPZcAU6sL75AQoabEK9Aa49K8iSSazJuvcwRkMkozoqTLhefwk7qGDqfAeo6k4CxoAGDyAKBR",
  "key17": "rFhASJbB9bGTmvviN7dffu5dgD1W2DXsfhnqC5HEJYRA5dk6CeJdfAjume5urpXj4F8BWZYFNcvMmnn51PENdat",
  "key18": "42F1DD2KRQTLtfZpibbEyhi1xaMM2xxbhtRNBWZrhsG3DNGTCWSoy3bfGHQWR4jqKnkh59sar2jeSQANtzdnwSZc",
  "key19": "4Fg1S7nES6KxF97mqDVFiYHYoa6jpFVczWdrQ77G6hTLoHr2sgFpGdAUirwbokdwku22jhT3ijQSGLC9q1PKQQZB",
  "key20": "4bcuZkHgw8S9rtkqVqQu1tW3hmUA7LbKF8dzivNGhk6AKH5D4aQ5F8uUB35FG51ZGTV6xgz8HPzgrs28voSnZLzU",
  "key21": "5i8p36p7zLQC1cRRsMfUw584TQyLuqH3Bk6x9JetKbuidWhmykXFcXDjiqQoteYsSNKJSwweM8VAsfT5PdoEQHgV",
  "key22": "2F6rgdJikfimnfynCgm6x9UVYetKRbAMKcosfYEJx8zVyCCZCvyHoaMUEPEdBjEYHqeuE4QZLDuy5QfRehmgWnmn",
  "key23": "5t8M53fKLbMgZsDPNACNzdzyPLWWq29wmasiEDZd1nFUfsb4LS4tWEuwKbGwPfjqcfYWT9CD4UbzF7uqcVNMasVb",
  "key24": "cZ1AdGhpCCqrVhtQ71Zsdi1G79uh9QoCjqoT9snDCoRXbdFGFDtekKMXyUEVCYaLJt3M422WsEzDie3FsR1seaQ"
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
