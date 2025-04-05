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
    "4FVEswG8S97Uayp4id774VR9ES9X97zFs4zeZLNKzH73FouAQqAM3PFrgF4tCntvAGNYv4YTRnLirpbZFRySgE4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Duj1qVDZK4TFP2H7V1t26VARa6qdeVUDfcCqjDoMjEwxX9ErnxcGEopAuE7WWHA8D3wPi4B5T8xL2MyxFZLVNxe",
  "key1": "46ovUugLPv5tsMV9urzCWdigqXn35Aw9s7s6E5LLV3Xpgtsw1D4QEDDiGqeocXWFz9Yq5Z5eDSbDH3EvGZhuUyBW",
  "key2": "36vesshADRdazDcryV9zr92FenUV2qNMuiuXzPhxMjPBUJSeXxPd8HU6iRY2e6xLZpxaHUeteasgnJ6yKe4r646R",
  "key3": "21yj4NfDspDjy1vF6FhvBjvuZh24bLv57cQRFQxm8gchdRSGJcjW9tcuPZd8Bu3VE542mpAEgdTau27uqdGbqz7M",
  "key4": "4Kfs4Y5DSEzjmY2GBS3tHNbFRDRjVJPewoZtGtYfWk2dPTFtN7MDJR1HXpUjShoiVYw53SStpdskY8XqBKVue3ht",
  "key5": "4sTtJC9TTX3PQTmoJ6HX4S7PTdVVBGaq9WJPyzUWbdFoLqmcH5QzxJpw1eBvtJY82EJWqWLqhTKeHWYN2yZ6aBKf",
  "key6": "3CwMTGq6kC7eAw1prDwgSsdVoCnUJpximb2Hah1W355JUE2X6G6SfkUs65k7hZsRp8mKrfo1sj1FqWp8dKTWm724",
  "key7": "4L2HpxFpeNYHRx8t9tNyakPvir8diKCpzX4V5GZ3sEvK5Bx2JdFp5fLdTY4yqPE8sNEsDLsJod1XzidvQDchRMXf",
  "key8": "5rxxNizRgHUkwMdTHtjZyz2sSf8J3g5MZEosZ9dKL3y6QTdwFdwMnLfeCU5gzcFHMeKJdgvaKNRSXE4qvGZuZ1f9",
  "key9": "4br3e4yruKYZWqAXDBBMSMrz6cEe6nj8GSnv7T7sTRmLY3uJ17mdnpC3pmFQNNYJy6M4ZicfdWU9RyJepYDWxEd7",
  "key10": "2UCsajS8mTDbniQAjY5GZEZ8YEcD38vX1BZcU4nX8AmCWGSKLZtQ4jFuJb7d1SCqUjVE5JfMxCiAqX9NAeaB1pUj",
  "key11": "5kyq2We8PoEKU24XAeTFdsnEThRrnNzCYr8911X5F2nJLA4sGJGK4G1iXTEKZy2vcZBSsDQLQ7kMa65zhsTz9Nuh",
  "key12": "2ojCMJTUNVdUHyxyWYmzPdYFgzWpx1cPXnccCAc8ACfiaRwxDWw6HC46g7sZvywcz4BoNiv7bAo6euc1PmUDiE23",
  "key13": "5Qyn7NdbcUQEM9Xzdfwehr7sC7W77Q94Qk5LCccbCZWfSHJerLuGDn6evhxRhyh1rxt9xZLf11TgdJYzJSeRUhHp",
  "key14": "3pJNsC4YnUA535N27Q8UMTm8jkMRUY7ky2PJP5v7QppZm6Tk8EJSdV9yJvjXPF5ruVJGXNxwHE81WTo7g2q6MzcC",
  "key15": "5ewCpNGszgvKi1iYY8xpg6cHLwocrd1cKrXzgrfhfQv475NGj7B4xN3Zz4kZi2r8btCNxC2xY9vq3qqrGhECryUR",
  "key16": "27GTFDgQDx318rQmXTqR7QqxqX4rJPUhNLz7dPS7hmsx4gaWRuAhA5ooumeDqtN1fYUYsLVA6b5fKGiTxBtx5orr",
  "key17": "4hwCGbT4meyweCJ9bX6EWviQ6bzS6QzZ4q9utxgwxJeknzX1gAV9k7KAL6QJjquj3nuxY3yTTXcJAKy5YC9796MM",
  "key18": "4V5feSUwG93KcMcR92vsn6ChfAGUiMk5jkK2F9uQbEpXuRoCG3iiqrMKSmCe5TkiT9qhiATMzVSj5nL768cvoxsV",
  "key19": "48XZQoDF7SYj8seuaSZYmeFAsXtDuHr3HHFXW7puMeY3LaaMhKgoC9BBBBHFCLcLQFsrcQ8WCe2gfVopahfs7smM",
  "key20": "5XaSRybVxhiWjmNYf6PFFP8YLMYGhtabiHzAS9G5C1QodSVA74QDi941YEwJzuf9RYuouW9R7aGyFTPec5vfB9YN",
  "key21": "WHXdr4qAnBBokWfEioLiao53XR5iafot3nRyzgjNMWzcDA33eouWGeY2jFfTi1Rh7vH1wrU236rqaZYsGBivJxy",
  "key22": "4cQxZZgoGY6ejKxfvGSjcvEA1bdHnTtymwXQ8XAUVnFzKaCcB5v8L5z4mnwHPGwERfsJrn5s4RucsbJL5FRcGot3",
  "key23": "5Xgq4Y76bPxhfGTjBVfapoKsFqGjuJxVB6wuncyKNFsjMYLWdvTrnrVgkhQnbBtHC7J924nFxVfkTfBohHrCHvaY",
  "key24": "4sPJHoP7AYKf36DgXoYJzW8XFAf1DJGgr1NifkCjpzF8seAm6iDMNjtepyR5xVgtJMyntChn2kXFucXFs1hVMdbQ",
  "key25": "2tUSkFuy6kXDXFHN9rThj5NkqqsitE5VdoED81Aew7sX6KGa3cjhzyBh5hwaD6pPkPZrjoTRjZNFNezC3N59hoHb",
  "key26": "2j6o7WsNFHKa7iBWY4a1YErbGL6eF4yKgzaZNc3N7zyfFjA9mQEfj65VMcUEEPfQn2QniN7WL2sPSbX8paFNVh22"
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
