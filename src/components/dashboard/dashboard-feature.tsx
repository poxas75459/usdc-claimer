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
    "5jYUQqytrhLMcHtJ387cmXf9Qx6N2CYAtutYreFY5NmYGiw6PTuYpYPDaPoJb65qKvmVYhvLqJnNh47xuwRHJ2oT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVvtiMtNRETnbAp6rseeo62Drheh1wth1mw2njwd8EELvKffW5C8qVpxEVuJGaq8p1LzU4wY2PJeePHaB2e4nuk",
  "key1": "5tJ51qApM3v9zhU4FneA3VxTGhCYbVJDD3PQMeBsVdcq3pLVp3yCh4DjS9sURhq9LSZZerMV3Ai2hbzLYtXeE5Cu",
  "key2": "3zFDaNs8i3xXZosNzpDqy19nPYF739khBVT3z47DyKc5VkejCPaYHViEi3Cdn5AheDUbcKS3zChrJfnKhjKxU1rQ",
  "key3": "JDFScjY69LSqHP8qBTH7EaoSyA6F5j4DMKLpB8Ni6185DknWVfT7PjJkgFdbXuaZzy355wgGMVqaUS3Eh4m6NDD",
  "key4": "WRfuZP2WC65TFVG69k97e9Rcx175gybFJhcDz5SB522UXhVTJN7RND6qmsCth7u7i1XeF3YdmZ2x1nyWAMnJpiV",
  "key5": "5ZvPttjuS1iaxngjUMzUK9drcxUVPXF3HVrHMgQ3tQox3rLXenZ4XHvdzMfG8U7AvTpNPMrG77M1srbV672yqtXd",
  "key6": "DKb2Se2c1HkwtX63BrXpPynTcXPCdV3okewT5XRESz28wkSJFtrmhxYo41K22Xp8BjiJ6BvWvrorryV4RWLrnmg",
  "key7": "3buEpDduxJKULxgj56ezPba5CMeq7NpxkHDuvbPWwkv1bwKPJKEyemVmCaAJQDCQpmXNBY3RghCtbgXpzDYoMMmp",
  "key8": "59E3bJywy6o5VUJt44zUy38iJLyxyduydknooRNNq1SJ5ygP1xb869ysdaLWdHb2qsVoRqUC18YCytvRTSC61kLf",
  "key9": "46RS2mceH2CoHSDfGaVjTLQP8YVPN4swKacrqLCUtSBFJJQjJcE3hoHNJkpBpxzKv5NeyUUh8dDpSyn7eCPNaP1E",
  "key10": "TuhA1P8UHLgAgH1YQwe7cu9RwLkwtwjfxFT79mgPDfWNFTg8fimu7EdS74oQAGvZ5i7ZySv3mFDYRZbMEvkmDoF",
  "key11": "4hGMn2dDzPsyhYnPeeWo2etiTgtYdGG5YbDuECy8pdCAKhb7Zs4bnGBi7yUygi6LpNoc8TET7gUMNUKsmikBSYaW",
  "key12": "2mUGV54eKZYq5VBvaDphtjamH4zxSWYr6ydGRmrfzdcRmQe3kzitFbXBZN2RhcRm9Ly3U9jFxi64VezdMjwkBMZP",
  "key13": "48fAK5foS2FM3frYxRvrBYBL9Zy2j7YGZiKRbnTE4TW2cdg3LfVyAb3Uwb7CgwqWsAysCwi8LVApZeAGopZSQbSC",
  "key14": "2WGHZxXjo714hw9YzQTf42kWNsyHs1GiHm4TyaDzYFxYUpj5uE3NEhWyB9uJJvV4a3BzqUZgVmCbnTX95CvuT5Lb",
  "key15": "3uTGKwQbsE7DZPgB8jV4zSwqTBrGQfwbAz74Y4K5586vwMx2gRL1JNpHMHwCUGytpm3bHU17a3cV9iYG9aGCcRfV",
  "key16": "2NaWrQgzt9NRC41qWFiPFDPMyph8C5C4G2fGQkR8uuv79Zdpziu7RwLswJxxuzaqLNdJVetbCD3eui6Q8i3h1XSR",
  "key17": "2ducfHRH3yzVBFabJSxV1Zi1FoKLQ2rwrUjjWJE7W4hB5ER1h93MdeSLHSKVFpTYBtTn5qb5wF92SZRsjy2CByWQ",
  "key18": "PHynWABeJPGtMQqpH6B4S4pSRajnsKqUTtBdexxjwnpuBjUnKJKKsgKXc2QzXfXLhqjhuj1hBGEyizA53zVbpff",
  "key19": "53sLKNBhdqWrzy7t6nybjnyUTuejbwccvpCzYJFBynfedMVfyVku7XiA9jUDAu6Q4LaqQcKVcPuBw8UcqYjcvbNv",
  "key20": "4PkrNh2n5Pr5Uh7Z5yFCeoUdht5bGFM1rM8oeH5vfM6xKjiT52FzngkhE8j5WJBq1xxHwxUwSnPiedVGmvzjabCJ",
  "key21": "5CUUebhKyWGDm28of2ec8FkASzbWcQ6bxT7rjcst7r5Zqca3fbAWe8WZKvfSRfr6RqbXuGhKRm72KGmZXnCxBnFk",
  "key22": "5QYxB12HxrvhxXshUSZtQP75KbyLGm86vFSxYjH3hoyQ9sG7ufXubTwwhmnSzhad6tepeSHENtCsFzGi8DoSX2tJ",
  "key23": "5jkKnS5pz7Tax13FpvTiWZy7rUNibph6oZQ2ZDjzcdwYEtH4bqTUgkNjPi5tfkizpvPMb1LeonGaHxdA3zynZzcY",
  "key24": "PopEvh7b5rVFWsMVCzHULXZrG29C1E5DxFRiqTZQ4jYakfysjpTVyKhL8kUuCqDBaSP6VLh6uY5zhEhWVmf6itj",
  "key25": "2WD68fqbmoJ8nY61cYyNMyzfNpatmvSdhF4KQCsmHgVGwt9qcFVPR98RhjkKNuTfYvWHATHH7TupVoJty5oDm2wg",
  "key26": "3TKH8vTsQxFUXJ4PDffGt3jziUsjwzAJyKUSrhKfVU63sbjD5HKpM5p5BDJnemKnv1tNuDUZqJMWFvCJubqdpbab",
  "key27": "5nvGfCtUcuRzYyPm9k7qjuW5sDHYQzQCbhruvREqsPwDSi1V2wzUqj97ZFmKV3TtY1SNcmxbQLrZa3ZgvPn2bMca",
  "key28": "BNGEPevN8kWvYKvzaAotggDUqVc1sy1B662itz9b2JsexXPwtDbj15g2V98Tzbr6nZzyWVuUSimFu9NuMzf73am",
  "key29": "2dyw2phEkupLQf3EjUVVuNmrDvwrDTzhZSehCQJKQoj9bwUBdHKQz8gjsmFKHdq2BR8B6a5LNoeVyUCTjPxwaBXa",
  "key30": "5YfNHrin4YPMj9YFAJyjTrdYpc7htL1G8d4Th63UHin4MiWMiTENin7AwtYsDERha6bg4HepygGMdnKwzumD8CQr",
  "key31": "4AByKycT2BsZRBVmHDkDLNQFJPWHCkgvqeTMTyW3wScjD6kYvu6Wgou69k2dAuyVE5xQskiU5hMnwjtC8pVQngk6"
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
