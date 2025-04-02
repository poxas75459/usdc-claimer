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
    "5BpvGD828vJor5qCbh6ELm4ikWTBfXLSvK9egab6SSLb66A7y48Sm7ajfzaojpd98wjDm8pNbZhENJoKiAYa3zLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e82bXzPDPt39iwYAppFkDqapCjV2JZNQZ7gdxSc6PDAqEVugc2wkMHwiaqMpvGfspTJi9uhcZZHa1KJWGUXjwP3",
  "key1": "4PZbVMgUJ9wM8nVA2cEAWhPVM8A7sabjmbPSWgizcf62Z6wemX77kzkHPFR4RgMQsSAMhHoMV6nAHpkpGYSbHGaR",
  "key2": "43NxTxu1CrWfL3MoroAiYx6qDa9UNYtD1eMyDrcwoNViYw5QATc9DdYuitpvQZei3E1zB1WXDHM4ydxr8sky7C8W",
  "key3": "3uyiitBWqyF6fFcHuFEW41nQqvWQMWdh49Bw5W2HkS6x91cZ1Mr3AyLPH4kXAgVS1F17YEQ51KVYQub44Yfn9ErF",
  "key4": "3vS2GPFM84kmsozbWs8bzP5ixdmnUVwwKMiFZLGv1m3Se1g59uqwhifS3iwWyje87cR2jXkxRBTfcVw6LPugP5JZ",
  "key5": "5DGqCeeMDoLaBiv5RhhNfvQpAoCJ6hNGp4rYHWvWGiWkYmSt7mFhi5JypqbJWzmKg1ugrzLrb8cAs1yopHmwqAtH",
  "key6": "9rwWGjXeWgz6LG6cCj7P1GULat5uFizsk28BU2ceZYbAqbYH5KVXTcQCgnLrT9pgUibhFqnx11c1shXQ6hWsdQC",
  "key7": "4Dv3f7YDMVhUChvRsnwYEt5qPgUBvi5ayBYTxNa1hdtyzezeZp3meQYeQmMBdMPCPQyypx9auXULAaR3ZitbMUBx",
  "key8": "4mZBGoDbbqd4pTGUBTW93JdpKgkBK9crsAVw26XrPpHwqwJCRPweJaUNd42RRtNdtfawGd3dKbx3vSx9YuVsiy48",
  "key9": "oi9Ndbo7JLjj6zHcH5XGTkmaM27nPqBJa31v6NjGQrN1BpoSXYtR8meqUKA1GC2HLuDxiC5s7vgeMSRtQ96VXig",
  "key10": "4L4whrx1HnT37QixLimtpjTRvAL25PAxYeuUENKxUUkgmD4oHG6uRqeaxF9HSzVXiGb26NaDKbo3iKm3cs524fW6",
  "key11": "BGyUv3jeEemXSw7rddbqGWzh3m9Gh669qZmruQA5TeFCXwuc9JK6gx8zXwNL9oLpU68Cs2sxumqfmC6jqt1BE15",
  "key12": "5EvwtZcT6pkWSPAwnEGewAPJ6grKohqoFjyz3toby6rT4uFqE6ZBYC48q2fqMvybCxrRofzqh3VmNivtm5rjsW9P",
  "key13": "8zraJg6dQAEet44V9HrjcdmqbyLHCUAxzQCWGJn69dyDLwUGMipYZJdgV8jsM7VKtc14HzSLs5xfGrHja4v7a9S",
  "key14": "4swuymZvZGZyLPrLsmfRNJttY4R4YDQFavnUhgmNZmrALQsJKV2XWQnUUdmARj7AkgEqvsT97houzxikjLDyAyCb",
  "key15": "5yfUJtktr6QZgNZYKWhbb7yQfaCxVXkcadBrFkf9xRD7uWCKkP97nXuLwvdgbo11RCozQ8SgqUxKMjLDBezzvM3r",
  "key16": "drgZ56r9qZS4ipWs2b3VSVcXKUrZ5V79nvjRAt8R2ZaZFM1T2bk5cBtVrXiyHvm1Fe1k4CgVs9cNybw9Mqw4bk5",
  "key17": "4k2Dg69T7fnJNzffykr8MUKEjb8pRoccs4JievwjcCogfScFJpygM2YHAw4MYbQtxxduYnQxNWqSPLUUCWswXH6G",
  "key18": "HZTTdYGdABwEjKanrQEjN8uxSi3Hzcjdt6wZzhL95vkoHZFygQZENxzV37wTZonDK53QLovTSL4D6b3QJJeaund",
  "key19": "C3AYY7wdYsWuhn7B2gYecbYGy6sQbShXPkXexoMpXxm4cthVibrmgE6XPvUbtJWuyuDgHZZRPfgrxarabMLvz8p",
  "key20": "3r4Bmyr3sx99mbUz3vpDj3oU3oRpofpD7ttHoJffCdBnxAfs9fzqk9zgxNjv7JDWDkwZD8eJADYc15bmrbx1LsTh",
  "key21": "GrXv9tLqbrrvayYJ8Zs38nZXBPMCdtYjieT7tsuT9L5V39KM3PACDYZL58DxDhRcBfit7LhojSfoT9fBBjy8fCu",
  "key22": "58TKeffybCCk8bd2Pvcnng7qoHGxbtJD8HFR4VCM2mdDzGU9mfAevfx9LAD77dgnZkaEaY3GK9MaEF11zGnmP3d9",
  "key23": "4ckwyan44AJM6FHKgpELeJLqaEQoQxN8K4ZoCmc8kUvcdxjCS1mn1SjyFeKi46JwMibkcCzMgHSRVGp7zkL5pXbA",
  "key24": "5faC3Zgh4tpiXYPCZqSU49xvMfxXweAJJ48XknP8SkmbuKXsPQeZfkTr8igK7F7wMdv4ATuhLQRgJvjmifNVKS7d",
  "key25": "54hma4e25ikrPL1hUSZrErbFXoaSGMGYgoGhsLtpKmWcGYNYR46jLcqEATXy3H6nnWMWCBDjGDej6r5gbFCCFUq",
  "key26": "2bUWDxGJC3wAaBTyxFkra398SKRutowEHHkahXxBxtG2Y9pJWrrvB9XC9v8pLU94kwWhe8cosQNE63zZ64qX9MPP",
  "key27": "5xCqpn77xuom3uGdXy648norAsAWXqoCwzsnHD9R84PUuE7t77pj3P9YmsY8CsL6LPKjMqFd6KhAzKfDiUK4Z97f",
  "key28": "5Xr1GRNi9fk9rzDvkvXbXEwpu3iwW9GQ626cbcbEikimzbsLkjCWWJL8AkZQFFcNbSzF9bYwfEDpkijDb5SbEdkK",
  "key29": "5ioNyN1M3oVzWUijJygJViafUYpEFxujgkonZ7Qb1ojfZChTJ7Z3AFGCBnhZaLQUYLGUAqTh4mG69mafJn147KEc",
  "key30": "3aPwPQ3MYEAjRACTtK6CXqvZzKaezUcnzqaXBVbudegjbFiNoqju2WNURwyEgDNURDoALetXX7kQBdAK5NJmUHpn",
  "key31": "5TM4aGFLUUYGSHiKzJyU7diDJFeYkN9mC8CbMMMdDrixETi4vGo8zS8GVtiyECYJzzbPasrnQq9d2KtJD185HyGm",
  "key32": "46JJrWfxYt1euyQbGfKJ6nGhYWBNAgqj9z1qHQTAS2VwZQdk1JeioiQb2RkhCSAvv67WazE3BMWVUBF7C8xQS6zq",
  "key33": "259pGfr1WZYiZbL69oh6N3jePNSeN8niaRpA3mm6VDcz1WUUE1WV2YVwKydQfqtXha5x6M57gFjzubemsQb9YoDj",
  "key34": "4DeexdmEusjJTpfpo2p1ke78FzBPzCdBeGvrMm9UAZeg5E7eVESRzmbZFQs1JAFzqHnBMEWYBkvgiPpqpb68P5np",
  "key35": "57Z6tZhPo8cEMszqd9gRyVDYLeJ6rXi123vRV39FboDmMcsYiQMCo3YVExrhdpGfzqc91KAp6rML4sCezE9Qshr9",
  "key36": "4Jy5BnwzbvH7678Q3Vaz4v1ciX7XZGhHXwEM4tUne9DvBusH8LsBJkFWS7DiEDD8UHMApbCxtoEyhpmDfH9vxa34",
  "key37": "2xfr7tiRMbtBNcGw8q29abnMyRNSHt5igESck15dCNy28s5LD9n1zkVMbsbg1YvSD2Ax6zUB7h3zuJ9AeVgYZvkT",
  "key38": "Q5tEWJZRBGdwBypwAGwWe1BxwfxCyMgFkCWzzVHKchdJyEYEc8rNnHPW5Fx9TEoutKJ1vztUaJEsLWbdcdPV37K"
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
