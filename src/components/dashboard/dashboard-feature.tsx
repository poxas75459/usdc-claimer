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
    "2RDJNYfA3w8i3Ky9QXXbyjdAtCBgTAfhf27ovyz9yXwHbHcCe5DG6LthQkFjwGecGBxBYSgvvKN237TT926zdJ7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hkfnD6RArmcH3js2BtUC7eoCxFyqw43SVSM7VfjrZxgnmDH6vNd9x3HkUt9YXX4zbVaKng6LnkpKuCkC5XZj13",
  "key1": "vMLYXnEtYvaXdqzeJc91xeHdynRhCov9sHggKyp2Hqg8Wq8jxSWwqkyV3WrBzmNeYuEk4LDNeqnp4vE9U85fcof",
  "key2": "3CzqMdSVGfeF487jkLm3q2WZ2EroTc8qoEPgXnowJffjksS276H8HMetJY1VwtrjZrZpTrhnbrfnbETkqoDseaWq",
  "key3": "2woVYrSghFwgGzqLNy9bstZFH62dkpZrgzBbdSPNXnd5eyTUGVqGibXntHW21tVJoe8TmToG1r2HABnDcPUUc7ZP",
  "key4": "UeiM1WLdVUaYygHvtTJmJVU2VURtGWk6nP6DnpfgwjHXEWJERzwxqMyZxUjop1XisFAYjiQDq4iEpFpRoVdZfLY",
  "key5": "36MTMEYgXqHKjbcMMQdvLdLjE9BesxFtLRG6R1TJuem3BQTdAm187Gk4vfR7wd9JS2YyqivFEn9h7uXvyTdkdnSv",
  "key6": "2U1RJrx565FULZ2PykZufU9aPuxEtu2ZbkDfp1rxUHwYSt6kVhk2JYmtLiE6fp5cGN7kntgq1nePufX7aFdgbZah",
  "key7": "3SrFsoytbqgY4vK3KdxN3XcSpBTkdRuAqbD4EWr2wqaHRnTgryZWSJdHWZV5RRPnLNxtSkBVLmXPhhfmeaYEgRfc",
  "key8": "3BmbT4jpDUH94N3V6QTFKL7CbfkvCJG51AeUUz1vxr18YQjjfNyuQKzPyd6JDFMMh4iReUAqZfBawPZeZcg2LTsL",
  "key9": "2R5T6CqfaM5UqoJon1qdKvDtRhsZZF7rcXJAqeA16m9gSRbH2MAKPFacXi2r5iytqGtTTT4eSXjrWPgGJmLRLb4n",
  "key10": "3MLksf6P9NAyN2nTL16XgRimNPFDhE6woN6AqqE9ddJMxmfkoeLq1An6tRUC9FAEQXLxpq7bQKHXTrM4Whmr1U1y",
  "key11": "3mHsdicXvd9w7oG83zfB4DbPZr8r8hGym9L2voqZR3bmSDbi8S24hGvGW9Vj6azY1rZk4ZZm88CvVNkELBctxfQd",
  "key12": "2rU724ugmbCALdoiNYDipXQ3p4CWWRUhVJRQxFcZ7uFRnk4iGzuqUdijuWcdapdWw2WvzAcuaY7nGJ9M9HFSGtWk",
  "key13": "5RB9HgwjAHbNGgKEWNkzzxxvVNe1vdbRSfKdRMw8obkZ4KQb1gTDUifJKnXtKRSHiyN2oXGWGx37TCTdiB3Ekyt2",
  "key14": "3atDy19VLZeZQ3KEr2uRcK5qUEoaCzsuZGHN6G2Wo8yWqiTicjxvRzVjZ5EgxQR3HkbtoVkk2CL7u292cEJ3Mhmn",
  "key15": "4BNHS3MuewWtTLVGv2Ad7EMKV7xbc4p7BpbTwPMC4oyQZTHQGzSsMAZy38QjmNvdkpsgL4GGF5tP794w8W2gufsN",
  "key16": "66vcYE32w5cMEdsQ3fJLCTLsTanxPePPuMoAtfvL4gTfEdffi94a3nzdqt3oGB7hX2gUPHhWPieQvQ4M8iQhgRCx",
  "key17": "AQMDgz7fjvFTG4H1Yj3YEjVGtKWzVYZKKU6TXm9e4hStz9coQDSFUtz8fSoj1rkiWa6tscDCfqs32TLheSH4tnq",
  "key18": "NkbUGZy2ZvD18fqYvM1xmQF9rMEHzrH8HWh4qYi1T7pf1X6Wqcrhs7V8uu1fiTy2nQbox461qvSP26Pbxrmecmq",
  "key19": "GFdd2v7nYmiQgwWTYLxptWof4Z7KJ2VsQq85TPqgz943vfzszD8mQDXSytmz7HFvnwN8eAdMeFNuRvYARKHpuou",
  "key20": "47KF4i9HM7wFyt8CMAiKNrtCESk6Zuy7gCAKKngaTE4Raug81B1b6k1SyLHJNAaKGuQ7CjPguhxRK88Wmxv1Q3o",
  "key21": "5nRpRDs8gV5Pu9CD9Ls4m6A4KuvRK3DhMicJTTBNiP2Dsxu3Bo1PicJCYrTkvVYc6xq1FKG3midhSfcm5XaHV7oZ",
  "key22": "4uaqoyb4rjsrD6j635zGe3GKCzYA8pwptqXHsKFDUaQ4rSVWtzdntmvWLEWnnQVqVvzbhCHjPGHLumf7sGLo6BSq",
  "key23": "27K7Hz8RVPouDPfLivCB85zryCFfauYp5iMXZdrrR4uP4ZodCambjBZmCYBsWUGzQT7pv2pqB3HLRH3odjemf9KA",
  "key24": "48berA2tbhNtX4JbU3ArgB1XV28HuofsquKJ16XG3VtF6NYBzq86URdT5YcDGui15K8kqyZGNEGqM1KZHV2GTdTa",
  "key25": "2tTSYBFjPEkmZb3qeo35FeKzKmwZftyuWeLtqViVV5vATBTYoyBubErJhkKQUcT7aAkPoTsjPeDETydwcqksuSE6",
  "key26": "NvKzvHCeHAB3RBwo7WybiRmBUwNZAGkYLL86x2kyZFaSw5mfw2bzoVpkqLLAQYvyobaypKfjKDN87m7CZfnZP3o",
  "key27": "3DcEWFu7ygdT4zcBuXgCtbZASDxysn1YMvwLGAvjE3SDKA7oriKz7BYNS9fhtKXQ76PDcak9bHmsozivsHSsXFGs"
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
