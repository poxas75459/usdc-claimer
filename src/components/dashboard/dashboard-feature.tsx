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
    "51Ao5EgVKu3BtyK3QZmEtenw7EjAhSCecyoV7A8xEq5aiF8yFyGBMA5gjQUbSbtW5JmbTWz8w1StAMtiv43KZu4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qHKRGTS7Y6wXkXSwz3mX8rznBpjhRYF6rFrMRGCsWhd1gzTsN3WAf5rA1Er1Cd7uDqECQ3AaVM3Rp2hdoyoRqX",
  "key1": "3foJ8KT3Zafe3Lq6KGJgpiMS4k8rDz3AjjGqrC2xn3axKcogKj5BYWzab3UErReSRNxbz4K5WQXnDQDyyg5BZyxq",
  "key2": "hGU8LWxmtz4HDzzegoDstVceAtW6juLWheJoaZGuvshfWv3cc6Yn2HVmZyqSJ1GWhyNxFaibJZ9npw5Kzy9FFTA",
  "key3": "3tradJVmdMnL8TrN7XPJzv2kyzd8qjp41vX7cBN51rHP6SvXzsFAE6EX29Sm1MPb5SEFeUSEDdmmzACJYVUUSRMZ",
  "key4": "2CY8MkzvfHojtrx7gkB768v28G6SnZoGyw2xtEhSmtW8upvC4XEhuWagazsh6b1LRuKpekRmdqAz2jaw2sqaZrsn",
  "key5": "53JRr9NFfoTWkuxEKnSbYKohadqWEcp4kB9Jk73hk6odx3RiPkLuJyVQJDAgsqYTCBEbyjvoceGNZJrDsKiKEA5p",
  "key6": "54oVCavSnSkygguirvDPUucKfmbFEYggnwE2fi15GChxbs837hWrE7ocFSsB1V5yr723eMpfNJRwCxokdT5ng7QH",
  "key7": "4CdUQbz5NS3hFctAkySszi8VFi2PLVwPFy5f4enGFNczDtkR3APV1eq1kxHpPUeQrVrH456SnuQ7ZkumenT8Y6JB",
  "key8": "5iTghMXer1nJBGYFCX6s7gSzCnsQQvDvvikQNvCiyzonuq932PjHApzzdw2CifrikpeksWiCS9mDkFccgf9xnZ3",
  "key9": "5AHqYhdHa6ndc41PrdG9Xc21ycidzkNSKc4WxqhYZeDonH3UQKLpRsbQBuSBmBT6yxGD6wMRXMZMRyUKwHy2e6U5",
  "key10": "MEbMziCDU5N3HBGoHjKyzDCp265cXtNLvkH1X7dzfF9VsK3xZAzsi9MnmB3CgD1PjHHV7NCLbB4LvousZbsTzrP",
  "key11": "67BS4zesR4HhVxx1hX9bq4dYMrYf1dmaZNebFTZB4RwPKPqUF7yV3SpKSr1cs3RaH7YJBqP6qLXcy9ginsVzL3HL",
  "key12": "41ioPj6T47rBm6swrVyN8D4N1v9o11xR5XAKVKTj7EXLFAyZGQtBZ89vHeWckPfUpUd2pHipX6VKeEq1jtCs4u3Y",
  "key13": "oXmV3tBCRCgrKRWvLCX8QRZh3WfHonFzRXwCkAfrQ6n8NRuoTBFzM6bU3mMkDxMDHng1WrW7dsQqABTrWKFPStx",
  "key14": "3sgoftDFxxMSKHRy2LJ2PnVfwPBEo5dLkZE78gTZSaxKugbMdVSRkqZWukvFoc2FuKHs9UKZCThS1tNFx1FDm6ff",
  "key15": "QW6ggeUJ6mCc5TEyWxqywp2JQrThDvxNgyJpW9bKVtjLVFQkJCqcGm6cpXVHGPUTPwGBLMREm8chHv5kTtB9YJq",
  "key16": "3nY7qsXLxTqFoXyXnHczPs6ysiuLkUGmgqW3GtHV1Ff8uGBmgKZfDppqyKhorQVaFKEXC8tPhC9D1D8SnTNwS4Dc",
  "key17": "rEuT8FvVpaVQARM19jX9BQ2sF4cXEXqyX67KUA5UrJD2ZvNS6vEvoE5nzKyvdrNKiKmZmMbwUX5RuAfvpWG5D5v",
  "key18": "uEtcBiDpVNxRACDp1rMRnadBctTe7KvyybnNXsTbLS8nqbgjX4t4sN95zkQUJRFk6zjo8zVP22XMSXxfgT8m5HA",
  "key19": "3ru3qm1RjeBfaXy31x1Z7ecE2jgZ6ZYoirjzSnYPYTAuanDkozobTM7EmSPvFpD9bmbX6FjfUYDCszidjZ4Bezag",
  "key20": "qvTRsJhDvrEKiJS8nXPdsTkRQsSRrjtk9NSsbjgfw9UEkqukbNEd2ndJAs4Bk5FB4vsFqNpmDaYSTwxcNFgKwaZ",
  "key21": "2KB5u3bp61jRymPjCu5hPA46Am8n1pqecF2dFD5Gk8R5tZNN2TTmVaom1pnpcjk8zrydJ22faYGCd9b2AmrWbtUr",
  "key22": "N4XFSjxGj7AiAC1pAZmJE7zpcRh1MsipBDmWyiwfbZSNoBWAi68KT18vsbiw4DKvqncGxDLTZvPdDY1frChcqEq",
  "key23": "GZ7UpbtFundJYGZYCqVrYyiPxaDkDN1kNMVh9LP3RnfLUUgoW388EH7Pwp9Mhke6LjGiEKMVFQJjYGXpo5kc53D",
  "key24": "3iKUHkkUcuMGBqLTSUdJqZiwBuUg6K2TSpryVPfXK3zGc3KtoLaLFMJdQPfdUhqfimMQdKbNueLky2raCm5CJxXa",
  "key25": "5udj2xzy7E9Pe4djZNYrd7G3GhfwzFYE98e2r69fy6dRbMiZXwXdMt2DW8UgsMXbtk6HRP5WQftzC4NHJokgsGYd",
  "key26": "51FSSirRpG8wjDC3KLawo7ajJRaNTR7xn5mGrN9P3fp9wTsM9ce1fKxnfprdGaTCZ8W6dkEoBZ7giohsyXz6RpWU",
  "key27": "3LusBv6xHFwTVBeEEidN3v1ZZ5pdDDjtXDxGzT6BtCCiBi2bTKEWU5EyvuUdtt3Zngd1VMVL4oTyX2NdR1HrfbbM"
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
