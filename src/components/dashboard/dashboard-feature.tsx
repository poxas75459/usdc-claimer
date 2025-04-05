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
    "4Mw8Q7qHfk5NMDrVf8CPJkwgJTbKjMbz8JZY3HkUmePePxffDo2KnXJJx8trS9eawQXx4CTvde7sh6buMDaeYcGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CepDYMNXGHVRd4e3ZYEghVTgSJahZaK54LyGXytEHqj8BPqQ3Y7RrU8RLJjM2kzrGaiiv1e3gpGZTWYQKFQ5qfD",
  "key1": "44TfH7CCRupQB2bmjxo1Xs1eJPBZpyhHiNrs4nHWEoUuy23u1t7FmSY1mragstgvGnav4kdHwGhPGKEY8AsoEvgk",
  "key2": "4YTB61Pg6EnW9txDodQuMffAywCUhW6vMwH3bsyb38NJMZC3C2xUJmVvUAo4Ps5bBsJj41jpsGmSmQtXMfVgbeKM",
  "key3": "5KMnWGASkJy48NURcyTqPHYt4GELUtxJYmgBCemjW4PW2bpuvEko7kg8hoKVUdyVkpg3ooqyBExRxe7sqE9La5Ns",
  "key4": "sHCmgLaxaCa8y1GrvzPx5rdzksKts1x4FcQGYLwhswqAZMogfG2fffSifZLbWyV2vEfZgUxXungpbueJx6BATFY",
  "key5": "ph2Z9pKBrR3tdQktHrChKTjCJf9M5oVGBuCAxfLH8dfL3RngQUiBJXTQuVgqoK9WkLJjXcJ25wKmj2kAq4vPLyc",
  "key6": "4P8TexneSrLTC5TiFgQeHZNqutcEdLGnV5yHguXs1JAq99Pd6q5BXH1esEkVnf7BwYmhZxeBcsMRYSRmxWCHYkXL",
  "key7": "3JbdvcWwyBtnFgcTCvAzBtRiwZ1LYAq48gogqqYXiAJkM7vSnnrogi89tMfRo4gdpgGWV5vPQmPKCtHardC3YNb7",
  "key8": "3NG5EHbm1ZzWVTTSzw4Tn89cUvJfnyMegjrmtUTNZVyWHfbt9ReBCTfDUENjZi3s7Ah6j1KXzTAG4Ajq33zShZc",
  "key9": "nxfgxxL3jt2SAQGXDaUsHfYqVscjcTCmJC8JumnjRarq5YrJkQ8Dqajuvmthabz1QYPji1ZEZRYjAB1UqrNu8Z3",
  "key10": "3iCJ5K8R2U1u9jiYqcsCK1s1CjMWUNDnKGruehAVK6t86zpvDrJC3Wn9wp7Zbgqd9kiEECHnX1eAYCZr4tbePx1Q",
  "key11": "2dRqziukbcaSCwWVwwktsvsphdqR8Aox1xshRrjw3wrtTtqBUbHjC8XBCZpgoXzagrzsQtGHLGLhpdatHZh36v2n",
  "key12": "4hsJDWx3wJnHSw748VA42MFN1UEQi4TtKkFS4dnMKXjaCoWMbeHjcSC79BUf3QmDFxWgLAr3B6A4u7GXW15gjCTd",
  "key13": "37Bg4jYKfYpzcL2cPHyoAMFUhRY2QSXS8crpSJ2ENAfrQYW26GKJFMSdytPVfb8iqBmzcVx93QEgrpK3Nm2CqDfo",
  "key14": "5wfvwznVuup3VcR3wbCeLa1FR6ofjDXpoYUnrq6Vrefu5NLjNUG5bRFcpNqHbMdZUp5bAqq8MLVBEZk8AFTQHY2n",
  "key15": "3LUQK3gzcCTp3xfENNBYnrbtLkHxgDKrBWYogSCzjebmRjcGY3k2RejiWb8LzX9Xrqgujy5vYTC3TVbTwXc2Ko13",
  "key16": "2VcPfFbvUPbkUaoZfFRN8rRCjL89Cuo7s9iggqe48wRL3kcjuT2jGp6BCV2sYyz8ruuHbYe41kpKfSwXJ7i67RvA",
  "key17": "3BLaZ6Zw3zPgU1utZ2Xq5tfPdXP4Wp4Rs5yeofxCVVMhx3wQudDemn7g2pXGJpM7qs7ovUKNFaYZ7kjPVeBSPkb6",
  "key18": "3arcvEiaqZpVZiWftnU34DYWkzaeTcZF14RU5coEmoXP2qZ71B8m44XzDPKx3Y7DoNtLvTQa1YMJ9pPG1f3ZX5jy",
  "key19": "y4RouLaE5LFWPqMFv6MBVMSG19m5RyjTvdMtox3VfPzyi3PoQ5qWnvfbmYJXDdQfQz1wJ75sdRLSrtPZj7KMbiN",
  "key20": "2YuXGpNfBp1DqxXxpLAeWiuXbMAtk9HmmfWxj1wxp2p888bjxLKFF2FhcMgTkh5cfeGVkRJx6UbR7GTonR3Vnw5t",
  "key21": "4A96f6J6mEJUqbEXcoD57UrwrTP8gGxs2wBS4AAULKUQErgmPRAYBFHXV8gaAnggiVXFvvyDz6f5yBvqxJTJAKuL",
  "key22": "4mXmBHW1s2qZoxcZV73bckaepi8c1LNsBxP7Bz9yTGxWScMnnEAY2DppuzBqxXkVhbEXDLAazAijVeZr936NtP32",
  "key23": "4Xb5wobjDZ8XZtQcmbAo5CSoS493M6kfZpyVmhPn6BPpAhvBU1rHb8RmvqcGLoEiCqx1avvSLv5yBXZqFc9JsVXc",
  "key24": "Qb1x1bJp7Z46p77eZFop7XgHSoPZaVm22aWERT7Rv8HmWKuFhj2MuEsrj5ZbPWzHUXf4VZdy4wGNv2PFeqmACfd",
  "key25": "44iL7RaCg3GZ19jpnhCewYyAwSRDniJMqYbPZqVz5fDrCTgvM2QVi1WCinFHieG5cCVAnDqg5Y6DWHXHBerRd5QV",
  "key26": "5oSV4z7xkuiJp1jVNTetAkbukWcRoHe7QikrYPjAfE9GChKg4uDtxp9WhRcqU8Grt3GgZENo9TXgJJDBnJLwAkCK"
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
