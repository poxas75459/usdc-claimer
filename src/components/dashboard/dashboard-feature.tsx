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
    "4PJ6ACr2HAUCjcuurpmVV9gdgXzsNn69dABVvQWMTi27GZro4hJpL5cqawG7vAsoSaahqPqZB62GE1aAnn6N5HE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39uvBy9mnDgc4wTf91egNq32d6jSA3Jq9uFBb3SNu2Lj4J9SKFPa1vMxPv9VX3uk1pzqCPVF5F1mbzpC9PWftU92",
  "key1": "ioyKyqGjhn6mDnmkoAaJtaQKsjZYCUA7FLs1ddeeWroJ2C7BdZEpYZ1bZe6HncbG46EbmPU6LpASdHQosG3jc88",
  "key2": "51jMH5ujyFe4jssywrXokpzmVCUo1KVGhPR6FDhNi4CcZvuGQfBzj4rZBRnJMd2YU2KWtnxtQepen6sFyZJuxepe",
  "key3": "32c1qvnMXLoj87nY1pDHg8gqmTifnzzrFsWvTGSqRtm23Kfrgusw93xPJ2KynnCVjk4wwe4ZPTzvfRBbqmZo9Geh",
  "key4": "4cRNFmXwAbLi6FzHW2ESx1CXLEa3q6ZHgMFvNwVFn4QtwJJ71UgSaNBQ7DDGWQ12S1WnN3rviz2FEEtVsGE6C6Vh",
  "key5": "d6zhzYy12kh3vX32pCpZbRm7oEodo5MXMvEtk6gCkJyWtqJZKyXCqswnNW3Tsxd9Sx7Eo6Z5AgRcjnqxshh2DhK",
  "key6": "5AwFjVLNt7L8uAsm5VyRmEvkLVJBdfMzgqvNRxGvTunZtYmyQkfhG9v5dJk4bkyowNSk4c2CtSqAHKdiesfYmWtB",
  "key7": "3nCrK8nk1kyQhpzuwgrzfpuXweiykhg7cveJ6basRGhn8qHmcCvSDymLRnryQBiKNDYMZP87jGJQrMHEReKq9XYa",
  "key8": "4e19P6tzNTgxQthKZU5Wcmc7aVvcqB4ym6Hr6g4vWyRbnoTL5zSLhCkiKSjC2hCkrxVNMWGD7z1biJ11VDqjw32L",
  "key9": "5ByefD6yZA4DGZcEteXXJbphycZfPDJWkJjE23TkRFxfQcFf4qUk3yLykKUrYgKCP7eeeHfvmDGHeHWnKdXrVHPC",
  "key10": "3mGbGdzMuyEMTrJE6CBigTTNmtYqL8WcaiEBDox773ogSP9MW8eF91W2SxMrALRrmGhAwFHYbEFKUNXT5swRxJKD",
  "key11": "4KyD3ZbPz2r98L5cDQWxiDYynkpfqhEnpuwZyNmeH2JsUopE16zDWFefHJfeaD9d1pN24NMx9L1AkYUUjdhFye6A",
  "key12": "SLJgmdRdFqWD56xiAN3aGWk7aoi29xWcEJbVVuRFp3Gf13wa4MaCsvSziSth1CjK23EjKaJ6jShu46QKc4KtnU1",
  "key13": "5a3511tosH4EhumsMBdfCV737rZZXHQ25BHbNigwVLe7ugBt8gL4XRYhqTCnu5gbRH7aKHDdFhcEmyYQo8nozkzH",
  "key14": "52fnZz5ZJ6tSZ6vpY2WGkXrd94iPFyeVGmXRLQYHyUopWGtaqtaWdfnM1kcr8kUzBvNwmvNzYTSVwwsj84D2RPE3",
  "key15": "3j1pRoVE6B1VGi6zZ9fMsrndi29cE6HzPsBvLp7fLdN2UzwJpGL7Xpe4pF5QJt7o2bFJEvHFbivLsJ2H68u5BsTg",
  "key16": "3WycEzHEPxrDbE9B42M4rN8s1kaHS5draBSYzVnsUNBoFuASt5j83qXSatMoFBrnzN3exTGJg5ZwAciiLtTyFcHE",
  "key17": "2HSbwKxdCKS93mh1ucBvRFfq8dWbRxNYU75TF91WAnHhxBG9GwUrWjtzQZqct2SKgab7EKmH13DcVjoj2wq5xga4",
  "key18": "aDoyLc2Sw9YD6gTWn6WgtwbVL7hjqKspxfW9ovyn3UVk1vi5pDW5rZRPFFfGj823YgCgbx1P3E48R2XkvWAaeL8",
  "key19": "5DYJ3eVpXcX3tiM6gvBTAJWGnuRzicWLWQWR9o2aCixqUjqNJQjaP5YMzrHn44iyz38VLoJ2VcUEFMb5UQXRkFr1",
  "key20": "2MG4uX6UbD8g9jgcZZFpnPM8dbpW8dyU6bzTick7qq5fpTFfzKzfQxUJntojvS6oJi6WF1kuD7ppA4gWczUoey6i",
  "key21": "w3VnxBXnP48tNERKEFKKH2F8TE1pb6rADS8DF3C4WvDg3jZyY7tF3SwnkVP2rk9eP7P7HsP5R8fHkZNRDK2XDyU",
  "key22": "5YjgLZD7M3tbqqXzAwcAmiNudr4nKcmBCccY8BXn3TkRkiZ39oafKSQNy7kWSzdZA8DhixWLkPPrJibQdLM54ftD",
  "key23": "5ZzMJdL7x8CGXP8gWcXQTUZRvG7QbMejRswCpmN3Hc8EkL8Vu9LpgPk2qeQGD8Cr4Bng2aHU9JMwRjPJYH4XncGi",
  "key24": "5S7DhDxZCLmVGsCig7LyXsA8gLWDHss5iC5x5NduFRN9whGQe5F5sotUwvrWWjGuHJWXLTSas88qNJNFi1KrHLh2",
  "key25": "2KNUaeuFdfVNWNEQF1r18wVxd4hYSgbRprjCKhRkrjiF6hpyyb14XL9MRaDeKLKMysEQ78Tvs5rXjepKSQrGmFW8"
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
