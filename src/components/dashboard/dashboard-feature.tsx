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
    "3XU3iZDbHjxM88Y1FU9CWKNfrf8ME49eYLzEGA5KBXgoqWv3L6E8ErfXB8F7NcbQNvjff43H71SQRnA4sm4H5rMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVWhHkKmkPUcQTSGy4akUQche8bRbjxE2xwjTVF4VodiwVUNJ1CQGR5aEyBZ4epKNoaPe44rZB2KMLczkCUjTgt",
  "key1": "2Ntjs4KpfWBt9GxBVwQm3A1xfhZ1FrRe77tnH5nVCXQh1J4vHbsvknT66FQwEdW3eR4caanVczU4oWmykabGTvPc",
  "key2": "4MGx8JgPqzh9eWKQzNAuuauQvr6gAzYAJPEymVrGoVekHSmt769WHgRxQKAymjPCfp9aitkyusTVYyztk5VmUZXN",
  "key3": "5QgJR9TU1iLJpQZoTRK4cjp2mrw9Y1QNmUP3BvNfWfPKp4Cd5oqhPEGKe2eKdc2TxNinFo4xftC5qvrLv8qspT6J",
  "key4": "2H29BL15pFWeLRvgnhLFRre8Vw7hFeBkMRz6Q7gEQ7A5gstKuXLnv4tUs2diVkNrg6omhgituWgQK37Swy4i5qVy",
  "key5": "4hNX8ZyLCKcB9QQQgUaaScn8SnPvF6d1yjPsMJLhn9xePmFVAraxMV9kwGfKLyaAWiJwGjCrVVUUhvcqa6JfXE4V",
  "key6": "5HGqnAZmB1HSBRNmSaAZvgR5M6SKHFWSZH4UhMjuze2QYrVeCXFKJ2ot6udnnkcjU81w1zMV9ZDEgKjkK1DN1TK3",
  "key7": "44vibuwTkkNGxQSxHrrdsRLndNThabwjBbxBMsnM4ywBDdxLGgsixprXuyLcSwvT1h8gqPoGNFCCG1g2EiGqxaFc",
  "key8": "GHDp4TirBZGHR87kLBi8VdQ5NnxedMz2PqsetQf65H7g4diTHXqFaRNSYfNastbsSKNAXecN4NSw5sucsqSomBJ",
  "key9": "3nbLDe8Wmk7jJipD3z1tDTbRge5uiWUbXKv4dny6wwbMADe3wF1twewF24X2kuVvDEY7ZG83tteYrpS4YXbMkRMn",
  "key10": "2JezbNd9Mxgq3LvU96mFqgKqb4U9jF1iSzhiWkLsGXP9YGnQh1ixmxRRS54bHKj2rCZpxXq8h8NN8kd4pfyQtTaP",
  "key11": "67guhZAxQVGccX6h78o5qFxgVQjdWagqQ6BZTY2q8p6YQh7g5UK7gK8sF2LEL5fa1BC7Kv49VZDjBD8umGx5NWSV",
  "key12": "34MdMpjC7HTbTjarTviFiwxq4dPv26rYBDfTvcF3VikXW4JVopyArvswti6n7aLkXYqaVieT6rPkMNc1EXgEw59e",
  "key13": "3T3ZNrKFps6zQF7d3ALiUVgVxeQUxFhujeZhJoPGsNXVBDx4oCw4GckNmR6TFwY7esC4gnnVaBkABjAJVpLKwxQx",
  "key14": "2T7sm73k2W77LRmF6Km4Y5okfuznuWt1oJNCTjbZ2TRPMZK9astuwTzVZiaX3WUqNE6x6JS3YPJ1c7puR1ZVJpNH",
  "key15": "3qacwqVVVTL3F3Eaf4C7R3k2Up65qUrECY3LdWsCyChrdq2oKYp4tj1byBHiMP8vvMns4Sy4dxvJv7Hi9NXhBkvL",
  "key16": "oubySzazNRyXHc3eo52eFKMt9FGBk5wFbmF6ecXFLVL88UzY6bmLNJ6HSJtNeSRXs9kws1Fng35tSeA8YbSRWDx",
  "key17": "Y2DpR2fe919u2ggys4EmQyuFZD9egNmJAmJVVYB9cznjEExtPz5Cz4hn9TL2rwScnUW214BkGJTwrDPYPotzAHx",
  "key18": "MPd3arTV6XhyPjoNFZXyVeFpgm4zUL4RzR24zP1GhwAjGTxnDTNeUcthERpNTr4vNpxsB4HsBEPdVzZ8uZtdfF5",
  "key19": "4eCrhGkKKm73AFaHVoPAHdPzf5CCW42LW281WG6giwj1wMvzn3uUrAdRHpupS1ctoUNduvyEWY9c1i6DJScVyp8n",
  "key20": "4Dw6GDrFaq49XoJwNCSRYUtnzgurw27jGt7zNvT1CWsvNvfvC2bDBy8UTFaSqUYN6k3kPNjKgxpBKwWwStbuhAZg",
  "key21": "2uPqFzU7S4dXzBE1Ffw4fb63o8GNmNV2S2MPxgDAuqYShocVHR2jYUvEjwS5vBnkdPEPnaZjgFbSebv1bPFVRjUD",
  "key22": "smRsymBim2YuB8Lc5qPNyNS1dvgM4BcAbudbaCDgt5rjp9bNaV42xQ9MSwvXgknLvuRY2KWxv9fgrBxGYPbzGQ6",
  "key23": "5AzMCFe1q4uwcZMEDoRUQfPCe4yZpcsXrAps5UUzwf9BMZgzZjKucaH7TFDgoVYa3Ste9VAFvrNf59kdeWifbTHa",
  "key24": "3YuPiLoKiHTDnQpmtXAp9qG7vt38udgrwxF9bN2iipqcmNUcmJ9UFuEdP3aFLuhqTyr2smynG1p9UZFHpBQyQZu3",
  "key25": "5mEBoobefHWmEHmG3Bj8nG9PrDXjhSmu7VMdxeMNis2LEPUQG9yQTSGV16UtWea2E6LyuchcdnACTMhCMvVsASSb",
  "key26": "yhcJADNjgcNzt5ecfJXRex8xFLpbijKBvf6WUqQdETGESiSZaeH2ngbrXPSnV7eh2XjjNjjYm7o5qP55w9peoLL",
  "key27": "3GpZssA2nwVyVEta4CDHu2CXnKwMLQWEkZtLjsnbizESoW4RvEYhUfpUVLAc9ZMWEoJkQyJ69pEdNJArYKMx99Y8"
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
