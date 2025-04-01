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
    "5LFjgcDEfDXaxHYoLhcBc8CcYVKhBUpzCstZjbevQELy9D1352Z29ki9Ax1A7ULuKrVEzsnNcYsNeXnx5ePPJx5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZR38dUh1GjDQ5wwofuPTsKvoiEFbpUxkeMdto4FEyNetMMWxDLMgyByX3j4kUaZNhadJfHbz8DSZY7KXQwvx47y",
  "key1": "4drQzJ1MkuSt56PjvHyuT69pmBhHTQajLEF2hTDw9HHSC3RgsXt11w4Tfp7jAsTYuTsu2qmfBewCHbpwJ8EqCe8u",
  "key2": "2RYYZhnNcRhrB2wL65r2zwBS9AMDBNebBRBHMsKBCBCYto6rxhrAGci5jWVbH1p5RNzAFnprkhD5N6NTT1Gnorgr",
  "key3": "2WCquMPpP6yGQp7ZqtuCmCXdbYGzaP3dHAUEL67jNQaGooA42gv6CkxJ6iFjJ6djW5KZUdZFXAdgBPy2KEzZMkLJ",
  "key4": "47Y42yy6JqkUwT98ymeBHM1Lza7eF3EFivS6qGf21r1yHhdQd9iJwk5W3ULHcVk5muQzWK65muyoZ8sGaehbXawn",
  "key5": "3SKcXQNXUTTUXWqh5Yny7XSkLW4Uv2mNidBnMrZZAbPVESuzE33Fivf7NcvwAhYFdTvwZbqoN63nuzfrBEBWqZwy",
  "key6": "34fbbA61rkK2w4QJA3Xu8WtTd5vtsmXkQVsoSxfk8phe6gGvH56XkHpWm1KvvupCxZPAxBvTe88cyc1PLFvhRotL",
  "key7": "3r99KHXWPAmJXc66WcAo8i3ws9ZwM61JMFmtk43koSFNwrLuAYR5i9SWw3tp7bYg5dco2VHaNTanHXnZj7R47BAE",
  "key8": "3Z82VZHwufjLgwjzHuZZ8AE5L7cNURb4rse8v7aZvYby7x4w11fUefKeKMgh4zNVoqyBogEQJufbL7rdwai2ngsF",
  "key9": "3DwYCr5SDpUgPYE71AJa2gz2NQfWuyWtokuZNPNfZQ1BSqywB3Tu2WEaqS5Efgu2uJZJbZLpdvdtNySPcZqX4Mdc",
  "key10": "2YZQF4Ve9aKS5txebXkxZK13WaoQaWa2wa7Q2itahrTBTsBqzEgxATjV8vvvaTsRurYtyRx6GYm1RR5fbXCGyUwJ",
  "key11": "3TFkH9env2DBgCGxaqePXKvE4NpAoTQkkPDq8TtawsDjvkvf8SZ5YXy8WHqYT7H2FyxVpjnVXdn22fBBsojLF5M8",
  "key12": "53jk7cbJUAufppyPNusYhugBiuTMFyiiae9KgmGs6CBd74fcDBsWSCJff8CpcE1WRmy1JbjKE46NXrVmMD6V2row",
  "key13": "4TPhn3NZqMNJGM3L8WmfGJEqGptQCMJ9D4aBbBFV1BTh6cfAaXpD3jVGMpKBJEcWi4qpaBZQMQvPcsZWtepBizvU",
  "key14": "3jnQJTqeTW6u6zHUhVe7V34LDgrbFEq1FGwvpoCkmxsxUcyotXSRQ2eFwysXnZvgzW4aBW4JaGSL1REXa3VAr44K",
  "key15": "5fb4sKMzcbUfZo1Wrxaw2gskZxJi2cUPC6NMaMB36EdeCxmhZvMe3uRNKNf9GuLvCpuZv3zofS3vNMVF1SvJDKXv",
  "key16": "2Xqh5MggP2S9MWLj1arZrN15sVmH99Q61GMK1k5WE5a9qQxBRqLc4vVsusYJUpb8i2zpNnsWzxVDkwDgetGSspRL",
  "key17": "2FzUmn78jXFWYj8TGu8gb6GDhtgGEkaBdj3kwW8V3yZ7bKV3Vb5MpGx2FSGrcCT8DZJyJJXjAxZs8afrLCrdsUE2",
  "key18": "4oY1ZRvRgFT3djWiBGmAyeuwEMpfRgPBTdAU4YtBfXWY2HLDiXwrdTj5PMY7Xg7apXMZBAWnN828z9hn2b8585Xt",
  "key19": "37xd81oRW7Mhc2bmCB6uwg6buo9yc1g6hNREquRFXZGPAcXtRmgEHHYbMposTRJBusLih9K32wuV3x5wXCGoNsev",
  "key20": "PQ4VXGjQE5Q7P3TVAd1ZS6zmT4vfpWfhApHZ79RddDKWDoDb6GhRd8W6Lg5pWZD7okRWAtzDnqLyg8cWGaqhKW9",
  "key21": "5zLeZJEiQp6HbcdaodWrrJ3oZsaGTArJBjfgJpkGTZqaa1XJrDhzTzbjqUPrVjaRPyaccNLQTnzkk9wfWMa8FRqM",
  "key22": "wjz7kVQw7FCUeNhL579DAwkxQjqeTm3L6AGkUbBfe541AzgKc9eUuC3iL8N2UpCFJUs9xrmCokWK1c3qhDiajGM",
  "key23": "2LSap3GgH3yx3enpNMgnJEMmtSr1BamLg1BGbHKaxLfZJs1AywfMyfEF7zmV3wVBtX6vybQFxYHgVrqDFA2VPpyQ",
  "key24": "4xSDF1KcUNefSRp3X4Aiqqn5nfJWaciqd769Cnv7a9MpYsmGD452dsDGLhFngBq9Gpnj1Ss2pvTSv8WzLncgEjyx",
  "key25": "4y13AQMWKQaNHZFEDf8fQbDqqTrTTp2KGw5YSzp3McxHScYxHMjD17ZP94Wm8Kmmh3triWV57Xt2wQKkpmzu3dEF"
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
