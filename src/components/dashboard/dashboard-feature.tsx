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
    "5o3cDAuaLWxQHrcrXeMk8KSSX6PGo8EmARwBYqaTt8Bah951R912yhPp2JkxLgqqnLqt53Y8ji4UKTwyCQ57Yvw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62pciRyXBLNdFwwq6MEbxq4zgR4SoFgD5QPYP3iFnXtp7fKCpgxnppfwTvLmHGi9A4ubXGEiXEaZMazjKZVuMDUy",
  "key1": "3MhekqABTnb2uq627hcb7wh5rFCXpdXoMNcSnrPiuk9VLx4CuE1Lk5GCHzAe3R59DTKDVymmFZZkG7svdng4WpuX",
  "key2": "59k6KTroEak4wTv48Jhmv5PVj67g57Uv2mQYdogyUpxKeaYAy2mQ2udjwyWcqLbSNbEUzN11mCPk1FrDN2hq5dy9",
  "key3": "42goZRY7sJqRz7May6BRsNfamE8LYfYSduXuCVyuGEsHP7fJ9b3ffj3Mwbx6Sgngr3H6VBHyZ81bvWoeknsmNYzX",
  "key4": "fxizpHGA5zGUG3goMcQEjb3Ue8e1t73jWKewiLXPrFSNoxegjECPLfrqt6wFzJ44PxBgTiqpnH64u1v1S55vVoj",
  "key5": "2p8Yo1CEbcznG3uZVbwGTneLX7UqHAj3WABBCtmKd3iK7c47UySNC3NJ5DELZULKi78RH63xg5Uv78jc3hdHPXMA",
  "key6": "2EsX45kuGwTbUbSB85xwsJKgP32JUc8P7DreNT7BM4PTUoWH78zf9smbtNHaUzer2sj7KwkZTbwLEyBmDSpxbFB2",
  "key7": "N2XgCF253fjazGyLbmhCij83edfLtP2ASWbrgD4YwzSQo9BnE5wkSwjtTaaeMq83LwjP8EkzdNBh6wcs3CE5gxc",
  "key8": "2Wy4PVfmTxamGpoGxL9hVHPcAW3y7wZEUYutJDvh3DfTrtgLbA1uuEDHCXNDEnXQFB13skAjcRe7J4rgmCmpW1Ks",
  "key9": "3Na2ZHnN8Q4od15o7Bhyg2e6yq19z3YNJhShHeSCjDLL3Pq3ZP7MSUxaVtruBK9s3oNSwGZWCCsLaSccfzuEsZUi",
  "key10": "odQgMJk1sz3ubFYdXz2sgCx3LmFBpySwHZd65iPwFAuN92yjbd7U3Yz6FwHyHadeRFtkaAoLX8dfGxR5ta6PrN6",
  "key11": "48R1ozY8JC6SXGGeyAy1JV1jnExn1du4r19F8RKzcGRLTAKgkjVRypXdyA5tqFxiYcX9VJeA9h3mJdDwbm2SEsHW",
  "key12": "44Ad7jLhPa3gekyAcp7mGNg83cYB5pfqqE6cedBeoffAhtcDrSN76tx2jdP6LYsuFMj1qJs8KeYSbBYduniqi4s1",
  "key13": "5LWpgjThyfB7z8xhDBcSYggUoE2kwmKuQ1K9quxEpbWahzci9mYBgBrBf73jouJ5RpgPCdjNDMA92ceQ9dpTWLY5",
  "key14": "5qCJyCPviKXADD7XZCEC3sUk7RZTur8UrB85m2yD6eQ1Z8eSDRtUdX3hsHF5Mc6xhUYib8WkNVR7ts77wXWchhEZ",
  "key15": "4Eit3VtTSA17hdNUuf6tSEu2JJvAjMfjPQdfn25WUo47ShV6buaioEYXc3DajuACrTAL4VvJdYEUyddRBpbAB4PH",
  "key16": "4MqyfKmFsEz8YQpDKkvhLwW1Zx9LezMV1kksnkHh51Sw5gkJNahbuUqtjKFzCtKGvTMKYqgy3cvhpUoKsgPkUd57",
  "key17": "2zLRWxGSsTSBEEHpyXWYHrZabbjD541hyz8F5sm3xm5ntTuWhNjb37PTyNWiJ2BLPnjnkF959N6u7qnYjF2KyFmS",
  "key18": "3Rf9dKQREMC2rxVvguDZ7mWV8K8d9UQjy4skXzT7QMcqnkniPSCLSNYwtV13niotBbUruJiSqpZFGXbdX52MU1vr",
  "key19": "18s6mr9SwxVRjcs18ACgjAHgp43aPjb9GZr64agkzDEzTchkbz7u893BFPim4FKwT71eXSCnftWLAjYd2a8V9WG",
  "key20": "3Wg6cPGqWLjUf6yYXWA4QKVSaSFD3pXS3fUQJXBEdD77XoFVCtm3WtjAhpHbvQrc4iviUtLffA89JbPEZ5ZA1MuK",
  "key21": "4T2FgkgS1VFRHmaTGRy1CYabiFa3y9rakicYKLo65g6eR8Qt4LiViDi9DSdwK6ebgf4wy1gicrza3QGr8MWThxy2",
  "key22": "4FrFdTJp2o4uqc9xQuoKtC2vEQoKDgjiA6unrtQxEWxvq5T24tFmTrcyovr45S9QsxjVCM8YZ6Rn4tBTfMDYMxBq",
  "key23": "41JGa6ecV1ePw1tAX32DiBywwsGcqRoFQRW2rbD6U8roVQnynTn5dfUNNau4DzsHeboh2t8rkSEfSexAPn95zeYv",
  "key24": "2KMhFDYJbPsfJuWnv8HA5k3ppNmWRadFKanNuUqYuoeA2yRYWgd84VNi3aQmEgcvujXP7r6Ti72QZLEEYwo3xQ1m",
  "key25": "4zKd1aw1HRKBr5GQyvoZAkfVBJUV2YKvEG5isVKHUyWE2jDiQ4okCT7LKJTfmouHH3VfN37VqdCxbga81W4tva1"
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
