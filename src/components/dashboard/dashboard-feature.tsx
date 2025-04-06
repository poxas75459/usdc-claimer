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
    "2nXdFMx2CRPprTv4RSSPK9ppoZxuMC7wW7HV9oSmo3QPjT9a46RfQLTCrBHckXQUkgWJSxaMiMA11kfH3ctQfM3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFd7JPaDGmKaRiYrcuSqLUAemi77DbrAxQfyWZgSC7KeJH6nSRqPZLWTJZTqQvjq7Kgfs9Q49qZvaVp3N6QWkGN",
  "key1": "4pJtGPyzgNrwj6b2KUqfJNKQzycgR3FbMfCxsAu9vT8tm5hPttrdsfr1zkC4KVgwA6xWZpjavUZ7xW9edtDHdpEW",
  "key2": "48Tfjdu5B1ue6dAG4ibNdkzbhWUYJ5fehbYVQ64gXugEo4yPJvst4oW2ASPZUH9sXeuYmyebUxksngJLTwZUL8cf",
  "key3": "5HCc3d4pAHRtZZjcfkwzJzZKxZWGfyBDZefgESrz5nmzQViT4CgyNSP14mLBhU3kguJycsepD9jnAb759hKaunyh",
  "key4": "4eWqAReodpdxjFqfL4Cv16Q1YjFNqQ9z15P4uYNhrekyDg5ZwnYjLxNqWqtLpRuFC1e7A89YRQbngfVCQUX6Rcip",
  "key5": "3U2X4uA2kLabTMrrSoTmugjVD3bVt92e8DUJG1zMtixrzfjV543J82SddgKnm5dwnuE4MqZTt2i7eRTGJ2tjLcNc",
  "key6": "3JHmaPwiTDF74TtDoRhfyiVnK2NPPuBmpoDCG5UXx944VCyKPL81BinKW8uPdQMwS8xovxQg4pBfvGSAzLjV96wY",
  "key7": "4V7sBTUPqzSwcF6hQRi6sdugDtPdE2EWtrX6CSv3QD6Xu5yhyEZ3oDWChsHmX2iPaF25q8CNLDmn5uX7bjEAxZYM",
  "key8": "461ZT4geawNQPxuBuddiJzs2Y8xjeFXtcKfjBgLKqbuj2g5GTzJrTyMSHxzfbu3Jfj5iez2hL5nDv87d9Tvbv35o",
  "key9": "mahuKDQob2ypinzFAWB1RXXAky2UsHcYgkqBhqVTT8DmjK15pmaTvRPFkxb5zMBp27LkqktWBVcWPC8VS9US5BL",
  "key10": "5dxS77hoN7CiNEADq5uofxZFQJAoAthKzrSzdUGghfwe2t54MiNWymKRfVqnDq3EYMSnA2ySAnd4vz3YYHJsggwh",
  "key11": "5udZXBVvtY5Evqx699iBv1LVkek6xAa7GWcxXV57MSCGuajYA3HPxyLUjUNPhiuR871P6uCT3tJtzP8n31CdFh9Y",
  "key12": "5c5x8nssS8xrrxBR4catMzbxmoU1UQ3YCfe1MpxvVQECQRFbAoTAvkdpudZjrb5fkD7sZsj2VxxNZGUhhoy2WtSG",
  "key13": "4qANLdHq9se7zruXWJiyVpLX2vYGswYYaGedpXkdJbqnsACHbRmzJwAoP22zsh9aCzvL9ZsHZCaCSnYjNyLnkG5f",
  "key14": "MGD8dEy1kEd7noWfffAESeCm9FYwYNtMopjj8Wz5vYHVeZJC4XiYhxuSM2FT5cSgy4aK2hnmWbdGQCZgSkNhPKV",
  "key15": "5uQUv2wzX7e8LYSpDdLKJniJVc7W8ciG8iF9MWQvRmpC4ocQ1B7uEbijpB2Lodr2GSs4yWGqfmNT111ojNjaV9GV",
  "key16": "3hCkfHScUuo1XfBiLwCBmt7mW7RiG5YK6KhcZLzLVRKKpqmDKT9NBzjY9i2KferBLrLF4hkt3t362QfyVWrYzZQ5",
  "key17": "3w3ByH2MabPdQYQ65ZT23E7LD6hfv599q6jm9FrzKZ12k9GAoL1oUh9q2mQqysPKZfinmoGckAkAcbhm6Yq6kfq1",
  "key18": "EX9jLGsGLSWabQaPTQGksfL2XLRoHThYx9W1g9VPE1GS9hV8En6VvhXJ2dzssF5JUzgCUFWzZrm5Pt9acnj6z7r",
  "key19": "5wzAwqjL31E8TfGKFpV5tGxiGKe6N9YpjeqBgm7VPvQBMnVwMRkJF2RWV62iDKKVqyFR1tvTon3NSWG8KHy5g9AK",
  "key20": "j5Hddi6d8VRM95GkDUGQTjMak2W6z6xHrFn6jzk1XpRT58W4pnp5MH3cNK1ywA9jPcz4x6ykUqdGALNajsVFn3b",
  "key21": "xTguU9fTmDpVchq9aoed5DaB294XyNKRtm98dFuTUKzqrj9y1DL71dk5Tum8Pc2HuLdrEZM7QPDK5F8HkuEZpER",
  "key22": "2WYAmbS1Wd2nV6RyBpHHsro5zsiPzcVhDqt8QNVtp8Le9J2YXpwSUMCzJY6sGE8YCYKb1bJajhTgULWH1MX6WYva",
  "key23": "3TojaLHw29GFhtxfkuBA5XVbsvTm24L2qzx66f48h3vKazNaGRrFJVAiarESJVon1WjTiVKADZb7dLCxnGPcZV9W",
  "key24": "2xXRxJpExCispJrGd5efU3wqqhn759e8buntuwx8vbYUydTDc1ViBT84UmfgAjLd3WvJyvbW8KK2g9Jk4wg9xqR",
  "key25": "4dtAbgbb2Z1KMXCWT1pRmBAWSQXGpUGATcrZyCSPGj5DTZKP6Uwv4cN2pVygNxo874S2AeA8E4VofU3CRh6rG9eV",
  "key26": "46FXv9pxEdqjDmbzbRBspFYkV1FVu9rHmwHTLRRrbTMWdWr8a7KkDckxJr71gWCrHXuQ3xs8A5joKE7KNBPDZLon",
  "key27": "2GSsgs8hdnpHor2ENMoUuXDpzT9RbMGidhP8FoWY9pMtyGSznSzjCst8Q6M3mrX9KVJfVwN2JmoKL9iS6RJFRft5",
  "key28": "4QD5ZfSVP7xiJ6AhgsRru4chXyHvwVC3Tsrq6aKvfNWr5Hj6V62wkbEYhkAMVasi8UDaS8aQEUdqTNqd3YaVe5sH",
  "key29": "5xLkruJbB9RHbmb6bxyoTtnL1jScALD4m1kdDFCsKBMKYHrRQyxofAsFniuD4LkZ5icJiesJPb4dVMK6H2hyi9xp",
  "key30": "39ELLWui1dTMJa3ovFxGieBucKYSUymqavofQBcD1Y7K5KpFgoMVvxaEWVGzHBYBKUGLceyvWw9ucdnbNAjoZ9bv",
  "key31": "3UPcuGmVerBJk8SWSLoWmqZ5NLh6k4cZgPBrHZgKQXe1hRwAbFuh1xWWc1u3ux9EbnpjDXzvAXWJNNWRHiUZbfNa",
  "key32": "2ZrRL5etDMZETbW7RjoeScW7oiZYBT9s7ypAkXfW2zhsZqMERsVwkD9fbauAqzN6YJCocqLyhZnHoJneSUwLJRE5",
  "key33": "2GEjBAmT4PsDTfc2UDuNhN56PiNiMuqH8Q8UD5yq1E74Xf1njH5mBBXkRtUPkXKsqV8rBfskjK9xkmWj1T9mq6U3"
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
