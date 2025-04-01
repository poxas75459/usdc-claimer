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
    "5p4tMDXNUPZcNBB8tYdJj9tQHz1egHAwKcHgdNNnEi6EU5M2vhaYAziHNupk83qBbjMPKTyZ8zT1ybQBziTU6WPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HM5mgv72YzoYhJCUpLGDZHs1hr4jADdfrZzewMRegqkvSLT5xMPCw9RugNXvT81vUwKNHvevPjRgExwtzhSoLqC",
  "key1": "PRkptZ4Y9FMBh3po8jbgd9ojByB9XbCkHYdYFgeXuokYCxvWhvxzFQ6pjEEEifwvhu9qD1RkC8n1oti2PxnM8Wn",
  "key2": "3wkpKqvEVDYxfUZNwZMtFa66n9RukUc72ZoEiyNhzHga9VsGNUmgTbKLGRtMESzHZCbp5JqrtCriDQxuU2jgGjCu",
  "key3": "4g74XoGteuML9oM6TTQFag9McASyUb9DKTz1b17f46X9VCP46TE9pzK1jjD54JkxG3u5ouJeWVw5dZ6pJBp8snDD",
  "key4": "3eu1FgcWfN2q3kAzscaQ9F9TCiChT98ZhQCQfjSp6NjXjqcZzJra1Admjr7eBW6xVeNfP7ea7FgQJd2kaDNxmfVb",
  "key5": "2cQWEUnqrHsHwfXbY9HQfcE5Y1z8UxqpWsUXeYnkUreo6eerB6FwryGsx5QkGb9cAEWg6qjpchAyVgu2N7MXjhvu",
  "key6": "8aRx7cmB9MFTvusrf29EBdxJwYh6rB8Nff2mEoQjvn598xzuctWcNTgPcdTwZonnV73NutTkjZThJbxoqutzTzh",
  "key7": "qfyobCERaa69gHc9tUKRgRxkRqnP5xQsFN9NhKQCyJySVQ4VtTTk9gfRBnowsPs9sgv7K3AjvYEArTHy1kDE17m",
  "key8": "3FcqXcZAynoE2qie58kRTsrZdtYs9MEMhMQ3rHvcvDzL7j1jgdsfrATfWgqEBmADhqWDAKQPt5VMGo8ndkFk4KcW",
  "key9": "5RtuF3ACeR9KNQ3dXsxAdZ5csyEfwsXtfMnfA1rNr5KM1hQsKKRXBZ515H7GrqF8fLCXtMr6vWn2149GL64h1jyk",
  "key10": "4UvCPGhxxFep8a6kvUgW5oWS2JvomsmveGegNQX92WTk81YzowvSWyqBiAXiPdqe2yiEFsTHyh6cSEGPJuc6i6Xp",
  "key11": "59bUgFxPGEe1zzbai9EirpuDtbKeJh28JmhKaBXWwxZtRHc11peyoVNB9TEktf1XkbSMjpviBGekyaEiaHKY8jPB",
  "key12": "2gn6aiFnwDWfp3em3tKLEzdfHEmRu9ZXVynvtbUPsSqozqgxv1XfdwHiLNyN4wT5EMLAj5uj51BySFVXn5r2yszj",
  "key13": "4PZmn879igcFckayUBSuwGpQVgEZ8a68gnMdy39EfQ5Bw3h9THF3zinc1rNSnPrUFFMjw5YHdsXZuaVNX3wMecu6",
  "key14": "3KC3fU1xsuSWjsh6pHFMxeV1aVPigC5tZRCJn18g7UrV9wa2soEwtEJ5XWLb1UXxsAW57iR81Ua5FniDNGcS6wG9",
  "key15": "2wyq2s5gcavRf1vStMk8eeHC5sbyXqtdB28Gaqfc7gWRDbSFkVrNRayQ1R3rLGbd9boFTYBhaURcK8Cizo2kgSTL",
  "key16": "341V9ntQxfD1RfW64Zp1mX6nMKWz6b4YFeZPDL84sAumvRmqQhpWtLNFC3Hc52D8UQDzzze3N8Xvcqa94uWBNgZ1",
  "key17": "4VMzKMpS3YFA5UPwp9RCeCuLLpjnkkWy8DTSoNKZHw92ySwRHZ3C8YW8wwaXdRZRuTnQzyvgTJYPeanLyXMhrz7e",
  "key18": "5bVjb4WMj9ThSsXnxn2sxELJaEHkR5k4v7LGjVvmteCRJVoBXikpE1zoQrCrLAaDEjtHqZUXawwdYURifHPWi2gi",
  "key19": "64x8QoRaChNENdvJoGeDQEWyBKmd4sGukMfMtpT3EK235SmU67sQLLP3BESPVSHYXWEa6oMy7m3KXvUw8YeBYUQe",
  "key20": "58pHDhhzyiCPu21AT8qLY8PEi3dbStFeeDut71KB4MXyDP4hbdPjvEwxHUGBVfEMJkACrtMGqaJ6aLzPXwXW9uGB",
  "key21": "5w46DWA1Bk3N8TLCnX8u8yJCkUa59KcbcxjkXX3YXvDXUf8p6AvMf8y3dGNtUb39oV9bjR9VseFDUtjwavgyzV6p",
  "key22": "4mdoywF5WFoWDk2ZjcgqNLvbnjoGtZtoVbez1Zgzp7RRBDJXs9MJNFTANRMbKow8TyEXu75eay45trbEUxBUWDR4",
  "key23": "uxcNoJP9hkENjoD6o3JScsubApoVXXbsDUQhzXTfYrEVuiusdc8foswpAoaDL7RohKCmesTUUUqcgRSeCQRTEPo",
  "key24": "rCY8ekHMpVZrxLEyjKGGHB2J84hPeR5uThD7mF1BheLsPugbaqmtXrmVTKYADqwV2pA5erzN3DoCuiBcdTsNu7N",
  "key25": "2mQrCNxhNrBrsxUSE7fom9n3dVQau5QPkSsc34E1NEBwkXn14bZiUE38S6zx3K9jfiihkVypFCzJwGA29Y9d2BHs",
  "key26": "4qJQvFRgbMXd16V32EGmryxsRrtQr77FQCkUmfKroreZ3jjfsyAARJZWCmnbzg3vSGWoa4WCaJsVKpxu5GYD1f3J",
  "key27": "2aQdia8KP7ESX7bjGAsnru1rBb1XN55m7XF8btsiPS83mkW5oXtKoscTkZTenWhGrt2ECdTNrJw84DE8QpCqiCyS",
  "key28": "rJ9v91TCsqNcgvf7cZdAZj1etDaQo9qvmZHDnre8HTyFdkjuEXGoziwY9Gf2fU49KdvkB1YbJcR522oXQ5iZc5V",
  "key29": "28nw6s6d83NCjm38qk3jw7MBwoZf7BuNGAKaEgRU35XmujUNLRwEjCQsdqdcgHtcvU59w9yiwWuWW7sNFLwPG98s",
  "key30": "2wkKGohuoTiSx4QefgekruthZYyaigsN2Ny8tfekRE1A5kjbhZdCSJgHERwNwr2XM4cvTHLyKVr8a7xaWYdnbVTS",
  "key31": "3z8M3YZt4EsteL7ByxPrWpRfFv2SzEZHTiMHB6H2RbkowhS29SKZFLF4ezmo82i2wVkjEpkr3ktcAYBhUoBJn7qf",
  "key32": "2sqaemUTi4xq4GBFSfcqBHxGC3Mk1GdCW3yJkEcyWse3AgnRgzNrg2LMC6NZ41zHNSt6fnwmKPFwbSjh1JMmDBPK",
  "key33": "3LJadu8StbwZzbSpygJFuyqnYXGrGj64Qt2HfNBffPGUatwoqvLAuLxTfCXWAef49fP25wkWHGW2E4Rt1zdLYgde",
  "key34": "2Etb8sV3ngDz7cJs8T7Xi331eLDsTxHCX1QEnufoedgq7kZkUDLyUpEaqjRFJnihUPHyHvCpGbfRb44cW5XzrQM7",
  "key35": "2S39EimWg51tfQDADtR3t2RSGBWXVHmXf2YgZktg4mUZBzwG86We4UuUdz6CuqnPh8tZKtfYwZaEZWiabmUDdQ3m",
  "key36": "2C8J4Py8V7mrd1jVksmWxXW7UVQyrfHYKeHRKezUYGesQmr9jxjb3WuResnE7r79Poz73FYdfzVLHynEPCAVyGch",
  "key37": "598KfCD9ok84CPj2MvhDsMJFExisxaWaYPWN9DNSfBTxbxSBLGVwAAhpqTqxttxxVrwBdrs43csPBcS7QG3egbGG"
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
