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
    "regyRpPknwnQHoTvyEWDtf28TU2FoFznryEdDkMWQiZJ2RCiE6B6mjqsWp8DiG9evTwccWX1tn7mERTbhBZXm7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQ5hTAjdf7bi5gemt9h4VVAin1Xg8JPu2HfyRyRJLJWvk2dfNJceHy8VY7kMKeL6SABybFv3eWFxj9VwU3CQpn8",
  "key1": "3a6G2AXyUbcgyWFft174g4CE9AJGHbeAFYuBMBvoaWuyM8CNMBt1JWgRd9Z9BDrw2ryuJ3NqA1pyix6xfc37Ay34",
  "key2": "44anpsioMZXZDQtzA25SUPxHqvUpGymsLA8PwJ5D62smXfy6gdyipVBGNubFUZvDLJsPMr6mdF6Vri7PfSegBfvR",
  "key3": "Wn1RWiA9PeYmuBR2yhgm9Z8xaLATQcFxhKCYea37obQijbEZRf7rz6JAT1CtqokWGdyeLPegeAwqPnSm5ThCciP",
  "key4": "2f1jWQjP5wDsYKmL5F6vE5tmH48mmN4wsNrBrCGPF2nGvPyreMLgoUgcpueHtVm3YW2LV2xZtRBANoSXsxJQWvuq",
  "key5": "fwyLxY6NmiDDuQqVHh7QjMBGMEjc7xzWo4KKPkjouL1FS2CJ51aHmjgWt7dR7qE7pfZjz5vAkXekWgYkZhEUadm",
  "key6": "4YwK2damkREKzvyj4AaJ9Ezq9U8TGt83yNnXE4xhK7bMrXpAwU8FsSLpjh79UAjYhmA1tfNfJSn2wCyDuiJYepHY",
  "key7": "3zteCcvcZ2ieeSH8mmBLe1heL4UzcWDH7mv2ERWCxQ2EtDxJh5tsyCRLJawPoj7EowqHQbsUUuWbtTxwT179Go2s",
  "key8": "41RA4oFeajUZo9pmcRD2vBXACzdXstRiQeK67ETY4PfdadYsB35ZXZeWMNhWxoUxLrPqbp8A81TyDeK1UiqgUUMt",
  "key9": "4gBQNWejtRmcXfsY2UnJviiAbsW3SSeGQq5nCr6kneXieei8DqG84K7pETmSPUvsZdowhGqLRCqdauaWRTJ2jC4H",
  "key10": "2ZAhXkPDCyF6xHWT6amkoiNmG8bxeUxV6YpmnbqfLpxVeco5M4cRwaseaefoufeM6BhxG1wnC8Krua7DpRNfsCDB",
  "key11": "2pLRmFZ34BgqrB8d5bNB7JAajMpNfrJP2aH59rCFewotv6Fr73jb7VjmD1pmfjm8ViL32G7izFahowDmekx9sakV",
  "key12": "4zZiinEXCWN9wUNNpmUbSNai4i34h56pdKGTLHguts2j8UB6yUAEUtRJUDbAKH9QbbTDCqQ8ZfZ1vswTqWGHBHCd",
  "key13": "5jcNk3cEdgMJ6C51WbxXFFSFVCfZkEk3zyWzWURnCG3Wgn8vaoinvBh3eF5yuSbQ7jH4ESugppUXTX32v3QoJETx",
  "key14": "4MdWir349mZ1sm8cv2ABPqtYzi2jf5gttNt4P6Lxg5aMnY4LTvq4W3MVuo9QA9FvsxuXr37vn7SdKX7Mb3aX5mWE",
  "key15": "2821ZeAmDdVReXKfAcraL8Hz19fE6XYjNnVvjJYznqmWmnGPAuTWSkp9haeU1MmRaAyKgpvw491YFdANN623W7Zk",
  "key16": "s1TCTmPhFW9Rq2zdRAd7z4kimcHBdk3kVD3CNfsLC8vU6hdw5KrSNYMRmMkwfngf1pzyarBkerQAhR7gdkYLeSA",
  "key17": "611hqYTh9i92XfeL42htxxs8AEdD3CstM7HNDAziZyQkgLqqXXk4Gd3i4PSesasUXw5YK5n8Pj4BPJuv921y3PKG",
  "key18": "61AwjR4kNdV9gNvPqfV7xqSX6zLwu5XNh7EjgvSuvpRB4wFguTpjhpZ19cpmswaXDeyqKDye2ApVHhvy9kDy7rfs",
  "key19": "4KuWj4b2LHFWUfa9BwSXADa9P4xWM63CcrgxuTpoQaPdyEfxmxLR7MfkDSHr299ER2jnbyvhiRp67rfY3pYgTAcB",
  "key20": "4iKq3NzBeJyXdcCXCG2vppcc7K3xtEqCSUKMzSHcMfrepJsj9Wi6KyZKGrbyp2DHwpQS7Ahws8x4R2M5QrQNL3Li",
  "key21": "57fjB9mVs8JCh8BpMoGcfz2eqdA2166oCLKaESk73TLU9xfJJmcekpmEVX4Aq5eugN9y2xKNeHZBgSd9zyexAJhg",
  "key22": "4mUeCBmp9vaTX78SPEAtxBc6zWsJGwDiwukT5r2HJ48YfEw6s2fauc7ARNmQ9DhU4yHbNcsiyuH4cH4pEeAy6CQs",
  "key23": "5sjVesF7tv1n25sXUqrGztyXciDzpydQp8A5iYSaJFyePaQWLELAveCnkSWGtncFpq7kn535g6CJD5DrxRtVUaNw",
  "key24": "3CNKYoMJEHHtskTbBf1CMPdj8iLsF2JpfXZ5k3LUa38LwZqs6xn59MzNWF9aBGHiCV6etVuxFbTL7LBg7gvGXhaQ",
  "key25": "3yy1M1nS1KUpP1Tj4AFKytUBPnCaVFYouMdUYakgpWh8Fb6xTrPKJQENCmdx6eicLRjNrivgnrFxZszs5gr69uuH"
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
