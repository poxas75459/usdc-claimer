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
    "JwQsfWVyqCqKiw5oyqugpAQTREHEkoiBnXeWPyAhxsJDUPGkmNdX5N24pU2YkP1cqFTqmvwCv6TiKkmcwMrwibV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hhYnBw5eqorrAHvRkzyyEvXhGSJsxJXMnrGTucWZALn5bsofVGBKYp25nP8ReTaudn2gBaCrTSw2AtPy36CihF9",
  "key1": "2UWG9qJRNPKUKDt266mpFy1ZVccD2DNjhiujc7kioqBNwAuztx2wGYY8tFwDq4KkDs89abVLDBFJUN1rh1ybWtvC",
  "key2": "57Ypz8m21cWa1suaJaLcPfoQU28c8Deec1LXz1sUyfZqhPUwRZkK3aUH94Y6Luhty88UntqEM6z4eXGc4K8MB4hU",
  "key3": "2zNhLSUaG9wbWjYhzKL91LV2ZnyyZcnG4tgH7WLVJbuScBxMh6bQLPc2PyN5gQZfP5e5TG5b6qmPgFPNcoNnsnWo",
  "key4": "fW27nB7HhKLMzX7myHbxRDjCdWDoQKQtXKzDCwmcQ2EiCmANJyxURetaUhpP2QVSEHEkqyeK9USnw9dt5zc2NCi",
  "key5": "5YbvzN4MrghQYykEby1VFPj4vRfxjSNLPzr3apitztu361f1HnBX6Dx51wnSnGVTvkjkKr3EsquZKMX6zRpybkJg",
  "key6": "4EFK7XaYci63ordDeHkNdzVn2nH4hMu5wmRBverARTF6bE6xPWUew9ehpUYxFAHykVbkgY34WNDkQ7BZvND5YgT8",
  "key7": "SSbfRMoey2w3e5MjJ4braNr1FRct5dGtp8vuWNiYdGxD8UTJeg3ypjSz2Caf1PgT6SMrg6mWFAgc6ZHAHWWLWTF",
  "key8": "3o2zSSay6pT8wosZChSw71hGiJbF8PqchBYyBHj1jqHMDY8PxkHwECrBeaT73e3PtgP1LK5AytmLhBtUXDojrFwc",
  "key9": "47k9V6mbPoNSJcsPchqsWWapcg5w1dzu6wPSnNepTemzVxc74Vn3kK6FW8EUsf26EX5LhzGUyukQ3ZEYp3Ccp3XU",
  "key10": "qux4xjVp3sR2hQC6fv1HZcs2BM4FXZdZtzEvTN2qoATxqxmHXunSvcxMULqY7iExGPKhFSyn8gDUoJoqeYSQZw7",
  "key11": "42zWhiHxnVMdNAn3UbRox6DfnUTZQAKejxef1M86f3qDtUwMZ9GnMhVEJD2MRTeXyqvYcjzNuVqM4h4GsDCmV5PV",
  "key12": "3DgYx7scC4QhFCdbYXrM9GbLN9W61BrSHZEEwdv1UZq5Bruggsm8aM7Yxz2s6PtPVmd9wtbg4SvVshoofs8X8hGi",
  "key13": "g1Bw1SykSjgpeLXyd7YEHAXfhqU29EwMxKRjEAGJdR7ccXa9mZgNXrdyqpZQJ2NpvPqifrrjNn1pvJjQn6xmkoM",
  "key14": "2spdP1YXGWNBoG9mUrSbkDP3AsTUu216PqompsDxvdNPt6ySv3Ak8qKb9c9gzF1x9viDqf1gLd8QbyE6RYYrXhPr",
  "key15": "3hd9WpmoFiUAicp8yfhtdrJTQwa5EQh8Ycjatzf4qLxFPXwvv3w3kmFuSvdRE8TojUbuSFtVMWT2rqpieHLXDTiM",
  "key16": "jDdN8jDxc3cYVg2j9qXSu6Ao7SRiqRcxBSrE9ZYSnyvsBFVczQRmWheqm3xXpXoz7rtmZigqt7gBbVQraZ3HB7n",
  "key17": "w5RxqQADuN2n29WRRxnHqc46Vj9QRH4wBp3fvdcDhSjp14uH7NVEFLQm6G6F4UgcVijZi8V85o34RAxgxcrdFJ2",
  "key18": "5YRFnQXmqcrGhwu8JZfJVvZAQncS3MM9VM9c5g27gY1D3f1iJSAk7JnDpmAAJy9x2KKH4AmUiFyrukLebtGsMmQj",
  "key19": "mxSocp2w7qmbQk8DtHUwxzgE6sdxRSyAMwfc6taUgrzQ7PTwqnX2dLDG3BMoJAAhiU59EXUf3499MVzN5MyAKpy",
  "key20": "5ZWZGmGKNYKRUZiuD3Lsg2NxF8cBky6DatFQ76jYGhDaM7Jb43Jym1isrpZSPK7Y6GmArzfPeyZfbXG2qmtzSNbd",
  "key21": "VnrTKCMgcLzuNj8ASo72dmdEd7Z6KosLPNLYm9Q5yUCh5ksZYN36SRP41NYfqmKgxD65w4jUrH9RLQfQELHVcHG",
  "key22": "2xGMeRw9rQW8PF13M26eDKoxS5wZLVawU9LDCipWPicVZw2GtzkivCp5qhR3P9RsMDaapn8wwNK5xXY55gPzwdW9",
  "key23": "65PmFq92FMsEw6GXHyz2bVkMEkV7QV7PyrXhVQzB5mMZX99TYpshjGonU8PvLUjAEZFSbsp5SJsfdzC189xRpgb5",
  "key24": "5VTMsp5zkGir9GrWzaf5uw7iLr5MAQZpRwcgYGDvjcgE7nGTLAVxrvngoF1kQJaH6JpAhozsdBKErDPcfxHZL9Af",
  "key25": "2aU6pugzwVcxq46k4K3bj8sE5M1tp8LsmtNT9MAraGJ83Gyruz1A6af4k9AaVhHfZwp1Ak2iWpHhHnfQ2cLBFKsY",
  "key26": "4KQftWW8s1QsK8UmUawBq6Upr5kaDXFZbaK8CxrzmUareSJgZ3KsaCQL8zdYaLskR5qQedoXRb2mNgV49uCTCdfX",
  "key27": "wHdrgLbQAPuupPB1U8ELQk8MgvK9fJB521Qruw5qP4NeYXAMrJKhy1XiBZTpwtba67Cemyq9SJw1M3NcczgEd2C",
  "key28": "ntuFZx7mhMLag7rZJQ8AVxsBTE8StkNrZUAiAAwjQLwhtRrfxthwqNedPGSVd4D2hJ3RYe3QrMGRqGwirx5psEr",
  "key29": "XZYwsnMo2ThZMdezhcUvmUhJjkwAgRwtsjeKAUwvD1MZveigUfRf23946DmCc3RHGdrdXZwTudKiqNnJq3rVRE3",
  "key30": "1X7EDTgDodFmtGiWm14hBAVsomTx4nrucUN3tg2BCEEaRXnHi1N1eUydsntirKSwJWcvctNcNYfYKQKoo7z2MrB",
  "key31": "4xHLxpvMPzTeswuzst1bt5SCRKHR13jNKXdzZHUYbVNtVKZMQDoL1HJTTSq56UtrtydNDdEu454vnt5CYeKdTF23",
  "key32": "2Y5P4vUThykLYJrk5dUsdy26E42y8rpg8YxH4NYLvz31hMJNciNiSVzUb15fUs95F13M6kboTghpmEVtJ9B7kc3s",
  "key33": "44vx9sqvN8iiMxdk7diUdYFc4vehuadFhCn3zyJks85Mn2Mw8e1KsU62ehxo7fGx9EBfE9pg9vrAZ6EZzjDbmFhS",
  "key34": "3iTL6FmiBhtBs7jLFgrcompr7w4Czt2YsS4kbZeJj93DaMjdgZbL1e6jCju2MXevuCtUTpgghX9RuJhqDN5oKkBg",
  "key35": "4DvUUpLwFDrcBFg1NrnDF1inK6DssTzXAAUb1RPXySJ1spnSeN9XeKt3vNenWQ4mUxZZ2YVi5UmeYEzkoMLKGASA",
  "key36": "49Vx9zvNXmH8VtiWzrqAdTqDVfn7KP7qmxfCt7HCk62YBc6XBGd5PszadkKeqM4AQF98gDce6VfqnZsYMKC4kakU",
  "key37": "HCK15jgox74F5fUCEDMzpQyiFyqD7fCV4ghb8jMEHyUqsbWMoBhEmuLmn1xoPzRP6EzPJ9Rpg848bLDnUkkFouJ"
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
