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
    "5QxLMywwdWQnVi3vWBfJyguiHFGEJS2k8w6jxGzFb1MZQu1V5vk4WE5uba9rikKXr26QC4HEmEoDe5rhd2FTTY1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3cfgZoCr7dvGBrAUFxaFRi5cvXApxHqa756mH282igMRSpc94cDKeSTeiq33zN7MK9t9ZsKBktEemenWjHiJqG",
  "key1": "2UUvRYV6tzSVoD6tKv6FM7Qmqzb9VL7bsfjX6DV27uuVEP4AANQW8hpzydbvMQQwVGkFhMq1bGomWo4kXy1SUaEn",
  "key2": "2fHmV3NzeeMA63jTvknQLGnNGSXy3fBa9QC7vaYqucbaWNuNNUn982usPTTwCAqbVVnfKwbPbisgRQKhhfUpsteL",
  "key3": "3pMXqppvQyNmvPzxVoJJQPhNy3wR2Fw87qfZZWkesJQ4A9WUcPtsPCaWzQRar1GbXu2YDqqHZPFc2U6YfpvsFKi",
  "key4": "ckTcaT8xJCaWd33sYXjTHeAUHVp85fdxuG1kUMUD3a2aFgw65aGS7DFU5Dtp3jDh9YK4Fmn9oh8ccykxPZ1h8Es",
  "key5": "5QeYXSsCQ3NuUjBohCCXF5ErLM8fd7jLnM3y52sBCWNRfBS6Chz6gZbLiYFo4qiHVCi3boghrRp9Mwsbh98rRYB9",
  "key6": "JK1sLM17cQREDuNiB6qzVC4aNxBaYtkK2iLAFt9mEnh6QbjceXgZFJjBGNBLJimjn1dx4uEkXF7wgvtxYHuPze3",
  "key7": "4eSEkQwG9YnyfBehvRduAJvCjeEt5K7V7FMf6zRKKKhF62jP7pTEhwBJ4tDmqd652QSaAs9zwWAKaEaDdLc8cHAg",
  "key8": "3jf2L9F5FEhh5eDYY6uWh5DenfqG5e2fDQ9ahvVieaaDzK6Ydj1mdU8K87tMCyYGDR2dka1xt4Y9VYeCM6MZWL8B",
  "key9": "5Fq1o8tnqnNZHe7QPrMQPitDmTeZx2qANz7BKHovdaEzxfjabPctMtgeQPBUcYBTdzz6UCmvFg3ncV7ePp9g1cq5",
  "key10": "3NEu1daLELNnhHZ2uh79gxm6nv9QqHFEGLTm2UC4hFsGhH5sMwNeY8RLV9ZEUS375KDZwyp9HWC1WCZr9s35VoXG",
  "key11": "62P8eivhZ1AM4CLtA8zGTJza9JyDkv8mN2dD2LgduijoY9KNepAn4G6pRHVyo6eKCax11avGDm6U4a2uqBwqfb2N",
  "key12": "3ETECyR5VkAayBhnUpm2FJquR6gdSpmZjBWT389fPPi5YfuRKZDMHZzgDiBN3DSGbF3uTk5UKJix8mjJqo6BX7sS",
  "key13": "2qf2FPo7iUmtqJKaCrq4J5oHio3FiYRY2uG3b2iMyuwpytUUWT5yX4b8Wg7tf5jLRDqR1ddtp1fHJTeH4Ewwmftp",
  "key14": "4KFaCyvMyXHVNFEnbqt4DXneKRCz6vxrbGwQVNsnvSE4XGzB5Rhjr1pM3Hndp7Nnv2zYepn3PzkCaKAuPXusgVth",
  "key15": "4iTua13s2pX4DwVcXujWBzs8HZdp1oc2ZAYfungh5WLiXPbYL6nWmFW1U46zKBaqyj2PHNVi49KoAF1KmoH2sr5j",
  "key16": "T4PszD5ahuJunjdS9QHTbNHfCbxy68uEedquA1Z8ubi63DTrnTeCG5mRQTB4K2bKnAquBdUMPofunTCs5GkYVvz",
  "key17": "4dbz9sF5VapwzLzgZeRythzX7ssZ36MpGCjqqA2SUiobUaDxe4B7FGrmNxHiBmMTPkEJCf46mwCidLQjKiBWknMC",
  "key18": "6pjpTuJ7661J3VvEgupqVXz1agtomFjKpq5zkx1S8MWYHc4P1NJiEUqqjRPtHdpzL6WujEJHfom5RrcU1cLQF2Y",
  "key19": "YNeJBJ254dUYw39594PBLgE4W9b74vY6JH4S2hATJmnZyXLUMyKPNaCULLamYzYiDQTEYjxUDxAXV1pHmTE6WmR",
  "key20": "2Swjjane5F9kJ9nMobSmEWqamjXRje5NyCf6WDe4nPAZ68t5Q5hwiigjwFznWB8ucdD9ts586YXkAE1Vzb8qmiFM",
  "key21": "gU7gq1hAuPiSv8FbhMMUa9pz4naqAckGf1NJGrwCf17ogD9Xd4R3Hd5H78GP6A1iVu1gWE5EM6QJAPFo2MPSB6o",
  "key22": "2Brbr2wiqqdkJ7tcWrq7St5mx5BvgaEKFzpeCShaiYFS8yBTNB1qnBeJQEfFfyxc7sDWibrRyb1iBGpozbDFNJpH",
  "key23": "35toiUURmCqdHt9vNjXRkKgrYobWvaD6zFVDmYuPCohz38z7hBvpGNLRmthJ6neAjdecQjWyuYnPivhzCRsQXoar",
  "key24": "3ziYkMqo1BVByY967DijVyQDKdyv2cBobWJ1JHhYZi6m1bFGHG4tcb1MRxaT6cuRrrznpEMija2xc9ti6fS4bBtC",
  "key25": "4wndt4DvqzcjipUsYWayGurgcqBBm1fZbfPfpGUqhJ2EJRzvYLFrLsB2K9sgXGDGxwF1khRnFTUMsqVWUXHCDkaP",
  "key26": "3Ld5Ua6FVehfeJo39azsX3LHNqUUJ5CQByQZ1j9D8X6Msw8BNeTrsQ9qeTvDcV2YkNENsbtzxgc285pqa8mcu6VG",
  "key27": "2vDS2g5YFcyjbRbNg2DWiaLrbPPjXL8VoUqwQf1kuMnYSjfageUfhthQ7BPEDNacfNwF5y5Ud6FemcRyVYwPepH1",
  "key28": "4ZS536eBzKaQot3RWuChKrm25T76ChaLWy8RmULyJnYrgMyK7dU1HzMyoPdqEvL5oYjh1JGertX9vYAALnbPGgNu",
  "key29": "2Xq1hyNLXYsBFzdzcPqtFuoGrxYevdnDyeoxMVYDjG7GXjwBijgc8hDx4DuYSaYNhh5YmSU33LfDrALWixbjqjW9",
  "key30": "3xKuzxtmJksPkdxpFdtecUuZz42G3UZMbgfKrpAE4VXTCWtdqEubdBUqruM7dwaSPeRKJusZYHbKtUDwjrAdhMMd",
  "key31": "523456yCuH1NQQTYzdcFjhWZoMrpQWsNLSoMzusWAhHs8Tq9VyE8WLzFR5snAXLSsDrihaN6N6jnX3SAveaznEe6",
  "key32": "4sHgc1nt8HvzdtJozxRz5oKk5NayHx7ByN7yANCMrGRV8sByNStR3GXHAgUj5twM6htQacdaahBLGcjH5B54mqCp"
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
