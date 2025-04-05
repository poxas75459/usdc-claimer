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
    "3o4g6UZxU3HtrsbwmRn6P5wD1Tu1jzsYzFpqCow1FfCiMYZGbFGsboTKj3sgYpqB2C9wCowN36VJYSLhX8EuuMy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54aTvQhH6A51uC1YYp8vd3dwn8cKK3iJHLkoJfLQDBfzmKZLJif6E5yoGGwaEs4iawGgaySGAUyQahsqiZXhr9pE",
  "key1": "4nZoaRnqBpQag6FmPzwbVUaVmNBWjMD3B1cMvHc23qE87GYHho3ZsxqYMs9qM8tTWb2YqGCBmYd5GbjuYHMq6k5c",
  "key2": "65XEiXAvipK73GsPJZ9km5PLf64KkubFoz1axgGdMYqkWMp77Jvj3JQeGpYvjtmtW5vgzWXYfMtnWmnsjZHbhmWW",
  "key3": "5ah899oBMkks7vpvmnR2F3JDEtMbWKUij7fx8G87YKxBvDo22X5dBXvZg7eYwx7vceX2F6o4DY5CvESjnPJdEkk9",
  "key4": "5ZLmnFFsRLpKuyFjvPZYKcCoQ9fFpbGk72iHxgw6YS5KqCyQzq2ocZfLYWzGtGuBim9CNCTSc32TieZDjAkt692z",
  "key5": "2N6ggdGkFPYeqtaY7TVfHcxirkCEhmVRA4YjHJVVqVqiEJdKhRmcC6Dmsq6me5bmjkf4Sy4buNezFT2uZ9WXpe5i",
  "key6": "qTiRgZJkVpPKftTvB7bJDpZbsBt7oefE5ynBNSo3DJWk7onP37s8LoHeZG1iEc53se2Su2GdhwguBKaufKTT8HA",
  "key7": "339BwuwYvvARoRF7Wq2e7FhefzVcW3gHaFWnqvtKhFZ7KBVsX2vaAJMGRGXhKw9F4KtCeKKrqGvZxgcQvdGfPVFj",
  "key8": "35PA7yZnNWZqMgpH4pqVPQAFkmbM8Hodpky2fL9iM8o2zVBuBxHHqHoXzvaMCHwYYxwscrRfJJtkN67hZcGEwy74",
  "key9": "4fKodXi4tZjLGz7SmzJqdnupqzYy3eCw45nFKosrP8uPWbYt36yekTfHjyk29x6NHjTiqeZpK4RFxQpgcjuq1HKG",
  "key10": "2PPo84hwCmrvGYoujinXu8iDVDacnqpHDm1CggRnwyFcAZKbUhLrTztvxXjjQZNcpCdMuFAoMrR9J8eaGqYcSvFL",
  "key11": "5wyoBjChva6bEuTBrNGfwKm8G81FoVohoNqFVbX3cw1DcPdP144eSwU8YSxaCD4GaNQttfHvTfD1Xr8hjTvjg2mp",
  "key12": "3thaSMHeh3Gj5jfW1VG1KBA4Gk8UvvyFpQNL8Zo8ufrrXACcdGhxNJyV7FLt4vp3sn2gAABbnNpoZjiDbQny2rC",
  "key13": "5guy229NtVwQDpdrrkSknzT2PYys9yLfnP4M319c2mN6J4cCQsEAZZ8J8RaGE5VJsxt4EsWw7qfT3BmLQkJPN9AD",
  "key14": "5NPdXQN3wVtjxpx2RQhNuGnbH6rDrsLDrz1kzwNo2oDiHfbUxYcuK7Q144AwW4BMoRPF8mNk9LkXRnwr2EAxFu62",
  "key15": "5Tib1GoeR7ToKY3JjfiG59UTRdV5AbzJuXwtboE2dbZTySmEPEN2nNPJ7FCsoV4HiMJz4KTtbJWzMBQR5JjmyesQ",
  "key16": "4dEBMqH7g9bSyK62kzcNyiuPL8PtdTxHJmzoPZSnG7jqVpcY4jtyKTYpt3d4p41cGejbzgQ15yW8JXd5VHkeEEk2",
  "key17": "xp9g59Lz6DrahsXLEAaABC1RddrkenqzUfv3dt8GyzJUMZ1G8kb44N8uXPdH7M7PKEiQinKNwEcrkxbfjXdq8NX",
  "key18": "3LknXKy9oq1MLy7U3Z8mUzNGxh833xWitkr7k3r8N2a4QxTR7FwhF9ivjuPM2DN1MyZR4K5obYPoRxw9DA28JUtt",
  "key19": "5BptS7C9cJKtaHcZHVwNv1YP789nFnoRPe2GeJ6qCiymitj6tFVKpPHg7Bahovntomy5y321n9jvuGLnKcAS4PtV",
  "key20": "41w7cTdz3gVk33nyNCp2hrAEDXrfj4i4JB3LRrJjpHcsLvaPPxQcs37NsqNiYtgwPcZkmkWLbaBuog4W9gyMcFay",
  "key21": "hVwm23tm3FT27GaAQ5qEXT2v9N6uursCSATn4K5YYnMwEonsv42TnxfYBAWHfwSkbt9acspdiaPURVo42iQcbAk",
  "key22": "3yYc2C5NfN5t463CYMv2nnY3omp7XuLhnzPHAXQip5StfhtSq838EnA1hFpFSoar7Cvw7UarcLZb1zYXr36e9Aua",
  "key23": "3CrZ2X8bbXFBkN6nu2dJ42srYMuMgobEE42sSAiZ4k1HHCQ6T5xJ6vN5YKtGm5AbdMTfhwQBGP7peGbnM9hy3bvP",
  "key24": "3q6AyDPSS2VBPbujGbtmjEtLifdnZeVd9Nxgi4rEbw7d4GSdKUG6YAp4Mbz95yYYDW8pg9sqsE4SEZRvyBgLKJxN",
  "key25": "2sQhBKfEDaTf6Tmc75MmTzCg7KeqqwD5CXnSy2r4QhC2AgX2BtsDdEzo5au3WcU8qgtPbH8mGGX7tvrfF6Kqu6tn",
  "key26": "3eHbkFKhx9euz2eXZiWjyFn4dxthb7GjSb48kU6tQ5PMQXbwRyXRRWMy5d5zpeHBEBkvq2gYPWB6KGgXfjBnDuaE",
  "key27": "4mcXmayaeDttNpSf5bxbUNXHS9WLt8AptroeQ8s2sCCxfstq9Jpz8vEEjpJAjL9tfyBCuhNd4TKienAYtx1QBM6E",
  "key28": "2B3Tc2S8NjCy45xgP7bBuN1cQSRWsGTNRWZ5eYyyVZy3Vs6ud313Cg22XsmSMVpNUQfzrSjLF8DFQuCyhK9nTCZT",
  "key29": "4ZnCt5U5YDHRMrzzt9KvE7HBbXG34vPD7f2dgY9pr5UF6F5zmSc41pcn3z55zaMmoZPamXuLcYmUsZ23i6uMpWQH",
  "key30": "54fLaeLwWnPMz35hqCNdugdQyXdYd63LdA35HQWmhZmBbMZxceq5tYgZGobo6v3EUpN5URZzpJS2zMEVvq3FxaA9",
  "key31": "2SG94e7FHQwQZ2LrWwwS9CQjwZBJVjspc2utvtkYQkZobdpSoRQwGiAvFeTd3wP39ua7eXKzakdbK7VAGYZRrzBU"
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
