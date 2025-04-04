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
    "sr7pNBnn3vi1KQ1Qvpo5jr8aWJrFjPH5YvM6N8CyNaXoQ9XMasxTsopC4oqHBuQy4Lr8VLQqhda6PVLVymPGCqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQRaq3KqVu9cmp15J2hc64mV68DY7KZQacG5TYkdjBREcqsvs3inhyd9DGtHkLUcgUrS5EXaKUAQ84QiZR37mfo",
  "key1": "w78Xkad7Q1K2CmC1DQtehqrJ6KhgCj4SLC4EXAsa7VciRC4R8cHKpjRWnsHbut1WZdTPpMmJvZ6s231BUv8h5Ue",
  "key2": "3WfPoz3QrADcaDoxVDYQDevc89Qno3CXRV3djAHc7aVczZDVAmCsE76EdTxubTeFLYVXvJTrvrgToC3WdVmaVcxM",
  "key3": "2r9XEN2YerXWyC8zyt15HmmXXDAgcLL7SSUkKS1UrKRF2JD8Jh77AwUHtzuB9PxnZShCpxzQg4vdh49wpKf5AAfH",
  "key4": "5CvMtxp8Xzahq9kWtAje9uE5BLp55xFZMz7gEnPPcMXpcaCXJLazMcWp9HXGPYNqnMTsLsg63EpfBvb5Vv9TCKMU",
  "key5": "5vPWBz6aEPmiYusadYJcN4gwuADgiPp1WCDTRVAJqV12RZ3kgJj38bbnSNBvzKV2unnTbzAf2GPwQ8gqcwHMqUkh",
  "key6": "4Eh8FFKJAE6on4Q3z72VZWxNBoATxCiXu6vvYsgPUjDFA2VTUY2pYp2aiwoc8fxdSf98ZLoqTqKwjLyNVLWtnf1T",
  "key7": "4Zy1xQ2x6am8FvfwwnhDfQdGEEbAkxSTJDcqweWjgwY4Kc8kQo5i5XbHpDA9YnR9NUVwjpBLjjZCj3wKepZ7gzU1",
  "key8": "3vyVbPrWe8b8rYgTqEvGWE9WA9nk3nPfCXQ8dD2Cm828AA6staN6WTKH3Vat6qxYT5xYgqSfUQYpdR9GcuK64vKZ",
  "key9": "2VdHkbMrcEPSQxnuG2pHzSNsHBiaxc9JGW4g3F8MqthbYZhkG5LLFv3b8Wj7nCykHUT913dYieXZvscqsoKPydsN",
  "key10": "WszwyxUL2TTKSRFip4r9U8a9NzpEowP4twWwz3nMNwRWZ3HD6JVPC6a2Lzy8Cr7mVq5TqCV1sjDG4XpBWtcQMwy",
  "key11": "5NNWe2FVXU3ywoNH2WDgJvnWByoAjow33vLUtzdvsQDAn5dsxHiTppMuek8YVt5kgskmKvXfEWmkJPJkddfFmfLY",
  "key12": "5K5zz2rcsMeQxPpZ7sXR72PnmTKNdM9Di1Xk871Ckec4FYHuwk9qG5qTFSThvVtBtcWwA4kYzwUo9AVfLR5BiYgb",
  "key13": "5zY699mGuj21u33AVVkk9LrWcn6SQQjsf9GVeUgUTypGjuhNRMLmHPooAKPkKeZHiTS4kK91dnAw3mXsxoKKBva6",
  "key14": "4M1yHJDN28Tf4jUm3ECWaT1rqu7aiwqtnRm65R5t4QSarq6QYXg2oPtu43Lx5imoDTGDzrzFzZWGAp8nzC7zWomk",
  "key15": "3nnZ3jXYvjyrSJ5BS2T4KCx5AfexJzSoCCopmJVCBzXu4gq4aJqxNG7GEDrB2AxDAcxQQKUsg47Q2AMvvaPhtpwG",
  "key16": "4TEEVeSWeKbWmSQkGTGAeZry42HU2uwz7xEXwCfw7WwFcZFRofKDDZu2bBbJq9gkYgu9dgTzTTaCWiBwzhWp74ZU",
  "key17": "YykyXRxdyu9z5jo7YKiUvdtAHssJfVHDUumYz9wgaoWETGDtqJvMzsk9Maw8333tRVBMbvEJGGYKmbT8wc3efxT",
  "key18": "5QZui8MiUuMjrNJsWKxbLC2gSVqpmTdWWm7JkSRnmN7jnANdREiSmKyqk3rvkncv33vfF85jzWKZhz6mKtCk7rd8",
  "key19": "xvgUmFdpxpu4zf6JzL2NiKFW2Fu7rjSF1AK2KKiBLVrXmazruAyQFqkiTvArFM5WujytzQm2vXQdwzu2AHXsiJH",
  "key20": "yUAyRiFajKUYAFZWzsgz4i65bzTtZfXeXznmJtU2VB5QchYLgbZ3amX9pZywzr4m4BDwAyMeTPMA5h1WSBjWhQs",
  "key21": "5LtHGsAeHG5CynhzFcAGuejK5hwdm6EoyQ25F6FhTnUQjgYzeDEDmCpBtGeM2yqthozj1efyGETr9RVnjgHtdtNE",
  "key22": "3bgHYw8f4QqoDdT5TRQT1EKFriUYnVpBSMM9i22FvuAn3XLLHxyUHMYd57bhE8boW2JeKFr3dp1fcbHhq6RvxLF4",
  "key23": "2xgUkTCu71eSsqoxCLWYgNCsaqMnMpY66P7YoR3n6DdReq7CK4Fn9xKD7px1ViS4tcFDGsvoxZtVHsF3dMor3NiF",
  "key24": "55f1gs2hQrCdUMGcHenJs6jcaxT6Tqx4rWKaXETpzbxWgDSoNPnqgVLaTXGu51yn385a6kfxj5hCKYNTzop1tw8L",
  "key25": "5z9MEnbEhqgVWvao1zJiote2eF3qc96agg7DZr1Uwkt1hHp9f2PiBRkUUyGP82zQUD3pcxpRX5sDNBaRSiSh9zKP"
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
