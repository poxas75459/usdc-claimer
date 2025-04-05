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
    "8DNhLKsi1xSvJUoAhRuyupb7VQmERsLwesxaYYSbPyrZBo3QvHFrLez49RFHbHjbfcW6JHAHeE43baquuMeUxza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgK4ELz7xXxLnwmzxjUis6uN9WMChfSKhYx8BGDtz1BfoW2d5am86JqXNHBGBCqV7AaTuSgQp5qh2kJW5apkeZK",
  "key1": "3hoQCj8t5ab8tcq22mTqosPNrXzSikv6yMSfnnvYJBScwpN9EGg2XzdRFZhsJGZmoj6qpw4rFYbgWYLaWbeWkJgf",
  "key2": "3GZCB3ELsBhnvMFooeDH4ov92cZxDv5bSBYfYqokKadiHGUfzjaswcqpYAvxzFa2U3V4UFbngPoLjB8jgAwbCya5",
  "key3": "4NHgDaWCCGtF1AX6CcvQmxi1ZyJzTDwopesFM1T2WtUdRwAyqCUBwkpT9nPMjVXsbdb6ytLakaD35pBqQ8hkcGKe",
  "key4": "29XjBuaRnXPdZbTAbicejJbzoRzAr8rSCDC8wAA4vjjHtA6tXvJ6XiuNDZ42t1dTe7uN4rcFhCLjjEbuGAjJYtq9",
  "key5": "5kafnJGycvPUxCrocgBRQnQXkgf2PQFz3P2gtjTjyUWqB7JJnSvV8PuFcrJLJam7LWw5pKbta48Qv8ntTqJXUhKc",
  "key6": "2Sbdpfq87c5UQBDiPHdNGEK5Aozax3xsCzdu7W3NzDSwXQUU1pd4JFoxVNR5Tb9uh9MeXjcaitVP15NEukGdHT7a",
  "key7": "25oZePd1g72t1XdVNFSygDKKPL8fujpRGynihLmU8geUGh7AnX7gG3eQ4HPCdHLRdcSt38DCgtRC9HGZrs77x6Ln",
  "key8": "4iRo5iLkXoXXHPyhHJuxy1x38MS8sekuXDtHTE8HMFKpUDRpcmrxqQDG49rC2939YsNrKmSCx8L6vxSHVoQ7mbii",
  "key9": "3AWooQECmHyYfUBcmR4vn8ruCRkaMd7zZ8QSHa3afUSKLzMbAK4utMaaEH3Mg324PMggAydcSJ4LnjtbvHCqYz8R",
  "key10": "hmZNxKhAH8z8KDNMxeiKdpohxCkscUfLNTw93sRBEqjtmvCCRN3X7iPawMhBNjhoSQcW2vueX1Bb4kg2hEw9jDy",
  "key11": "4Q9A7fUujYLBTn2WcjeJvA3PZq2FUP6XDm5apRuUDwveGxG7Y5MmvYWL2TatrLQE9GT62QgLAENK55Tv4H3fB9jf",
  "key12": "3KmJmvfnCY6EPLCxaEHRoMSKzR5uYeTosq5gh6d43NJMoxGNxaqkr2KLRALXK8kLmX4sPePPspnGBZkU5qq7jHAR",
  "key13": "3f6Do9CfG3aguJU4jxf8miMVURHfHstX3jwopeEYv4Ss9GtKLBHipzpUmJoS8aLY26aZ9HzruVQiLfkwEnVSZUrG",
  "key14": "5sbghgyEPwfxYcUc1bQEbQc1qh5jvswVixUbXBRuSEoSKxrtfmikWsTEZNwLXse3h56NsKbChkxBBNzyDq325eUp",
  "key15": "5fwwdmisRsJPnmW25GRHALA9LjBGonncT47fja4adq61CgXvUtdtXw2MqcqjgjpVv1PXCpWA8adBWyXqeQc2nQcB",
  "key16": "cR4WG8vPonSHYqhkiLebyzcMADHVqRfdyLQcxiR7SFJdsxktcCPxkx2KquEfqfjVzgHcdKkmUkkcpnveBcpiEgM",
  "key17": "3ZsKMGoZGpXy3xLS6KNbbq7dXZY9FoYBdif5RKE1YeWGT41zrdjN1cAytd1xWWiTMixAnLdNEUPyJNf6kDWbAyMu",
  "key18": "3ihgUKJqjvFCAMfs4AMGF1HCXwH3FbKCLn1RphKNQLvwMLLZwGxnq2WXS13SKtgvoNpzPRxvjN8bNmWmEYfSrUj",
  "key19": "416tXYKAeGjYtWj4Uvi8SPNP3rF6FJGLrq7J3UXr2bViU3utQKG1LshtCtSXrRjCktQ1Prgah3GzeprrdjSjZyo1",
  "key20": "5RRdL7kLfvLa7aRqYLaX5xkz95SQgm1S8gPMmoACv4Ubk5p6v7Nt3QUZVcgq4W6afBXYL2kEVa8kU6RhZFfHFm7M",
  "key21": "4Bvxv2616R2HmZ7SrTEdSaPhhbLEUxxtcjFshc58ZP6RSxgrnjCsps3SmkE2mdj5EggLtFNjDVD5WUxJ9m4d4R4N",
  "key22": "TAkyu36iWezizX7PqwBvEW4G19rjTT1TFzP565BJs1vsUVLiTGP7UxLtGku5LUVoyGMZ53UFgM7FrfhAdLttrrk",
  "key23": "4Gt8BLkGEZ5ed6eShd86q7w8SWjuFceAJVSb5fMV2cu6yeHHCBnvwM98XBbXg15xSSQpTgZKfx1yF7gvCNBCcqRj",
  "key24": "3FaHJvkPbGoo6P11jwkivQAw3C1eG5PWeXi42c8r4ev4ZodGDYszzfroef5tkyv5h9SEP287omPxACb7iuWfZSJG",
  "key25": "4pgvFGvjjxT7q66yAKCQo5EAEozac5ZaYmJqa39sZUZQSyfzG8gw7oTgMViF91XGai2qrYtZY2dboFs4eS71AoyY",
  "key26": "5QbmLSGc6vz1NGjqSVoRBZ4Nw2r5J1r6kspWBGvxLFSP4sFh7KuY771FaudUnbxjT1vXn9XY843ySNrMZ25QNudp",
  "key27": "2J3f8Ze7JEedypwYsSJpwsZtDs2xfA8X3bNk1dKA2JjKvq1v8exaE1gbUCP98voMbfhJJoy3MsRhwnGmAo82epqR",
  "key28": "4dgB55N21fz8k3eZTLAeBH6uFZkx4c4Byvhe5eNturK6GrYM7sWg83sKxKG4FYbBw2xTxw7SLtZaKnhWBKHwCUJ9",
  "key29": "4cLomMKQwv8pZWiN1aCqizoqY4d7DymU2GqTfB9RMHiVWwjNGuPAdgwKycQoFhgyCcrr7ptumYGcHxfhayBeyr5n",
  "key30": "2LE5ZgerA7f1ossdufsJu9yvXsDKvS6z8kURtka3bZbuW2rsVGHqnLEfsCgjFK1YjRrWYbEi1ny6QEgfjfxWERiU",
  "key31": "21ati1x5ErdnHRrksYMfMKaC7BEApjQcPtL3ZUfATyHwvMjaZrjxRNSjjKVpgsi3KBeUcjTCPtygJU2rsUuNPWZ8"
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
