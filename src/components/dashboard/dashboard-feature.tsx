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
    "4Dfpxkj9hxR1KEeX6ohqFY4b7TjvFVstxE7BtVPfbTSxiMipqbKtpN9g8cD2pTJGJFBACa8q44XUbVEYfwPA2jxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NZ3MsBBYu3o7chm64yWgGVcrurdmv7am1BPADHJkEeQY4sycoW6reLFrxQCd8CciRoMpSNXPVxWxw76zqeGAHn",
  "key1": "PTgUdT6oUQNxNFH1NYiB3Tn9byWWwErMH25kCmPMYAwr3ZDU8Jbu7dXjJT63T3Q2dyaHZsq2bUocYXST8k147jt",
  "key2": "25AfmFHbqKca1ZeEWD7FMF96PcZTSTSoYXbtibyxpF2enm8KHLPZ5EmR5fYTcfVGfxZY292itjhzUPvnrPhU5Pzi",
  "key3": "5N2rkFZUVjAfTT2ZxnpS4HPdK1zwWwY6itZ7t7NMasLLhEv2tD7rmG4TjutGxAGwmhWpmR6BKsaVqYZZrsehVLgx",
  "key4": "4cKY6o6AZVEmMTNofshaUt3Qr99k4FDhWhkG3L8ErQGMMYLV7RxbDoBS2jke4xZU8AqQqMUWZe69iiH1JeZFuaJg",
  "key5": "5h8aDsyoWJvb87cwqSq2q6hs4SddEvtZEdpixec9VpeW6M1HjkqTLUYJXQuTveAKyk1waJMMek1Y76R8CfK8svsE",
  "key6": "3rQA6Qha3W3esduF9x85YxFxMfUSEvKcXpUrPLVzGD93ATx9v9VSTAMWLEDTsPdhtdPwz45X5ufxujcYhyy5FGzf",
  "key7": "54aVDKwskGJbwk3wDfRfY8ambUrtosPCz92Zf4QdMsqYXuRS9qFwo3Vu24GJwzQ6CQgSULNYtj5XcJRDKqxhe6Mx",
  "key8": "SQk3KFJinV8kTkFTiaHUbqRCGqbXk14d47nFxJ29vgkaMW7GrCyAVmo8c6K1KD1qZKEA74LQceFr8XX4vsTSko7",
  "key9": "4j81kKAPrP2Tkdpwns8PWpJ5mQmhib8R5s8ijMf2RLDRpnMqwhzdcwvssFM7qCBKAnfipizGqcNCYDj42CsViwwL",
  "key10": "ovGHbwPPfCArbXA5bxsktRT9QjLaEc94vFtsE6ogM2npxvcmVE5TCH1VNw6f2xd7zCgaPksXTGSfUWcEVpKZkX5",
  "key11": "4N4rFPgf5NNR3sPdVja5YPFuvFnq6gVGDVdK7YFYEaNd5xTkWdZYRqUcFraV6sVopDLEBjtubrk5NQUCVGdQzhF1",
  "key12": "4UcCYjvw9TmV9XZqUVJfMnrDFp1BWeAv5xGKSSZysczKg497jBYYS4JcTY5sNs4VQSzehvqrWF1Bjp2HwypAiUsm",
  "key13": "55JdAxpgnEzazpeX9HcCRrXuu92biyb5CosTKyyLiXfoxAhYMjq9LBtumxDfoNPApaZsJ3drP6nqBvxtd7ZDNaqL",
  "key14": "4PPKkz91hEU2bEWcaLQ2vdYg7i8GdBtDGdQYtx98vKVB3HHqifsJakQLRBPsF2mn5Qe2N7HH41o2Zq9p4F7L39B2",
  "key15": "4YMAJu8uGmstbiLiQhsHknYD3j2Kdu1E2vFcYBBUxKdaP91YtiyRSQUSoY1fYu1eiuXcXrRUhLzdpvW6vAwQgHaF",
  "key16": "FwJT5vn6jWFwMhyz4sEcYe8AXnjzdwvkbJMdEJe3XeYB4SiDFaKRvEFS1QVC2rHoTugxNWE4y4VeZjb76BCVz1F",
  "key17": "5uWbdZNZHtUvWfyn1m2NQJJAjg2zzWwgM24eUpDtvzMQqEhUTG79EHTX8pyD6BnQ3ZdZdKqtPsMsCVLKiBCVTEew",
  "key18": "5ZRKMtkYuqxgqAdbhC1CjpN96L19GKmMv772MZy8GVPjFjwbYpw5tnKhDSJtKNjWtt4jXNKowXdLxyHkZQW9P4Sw",
  "key19": "3G3yAD3PnYm3EaNCg2hP5RgyZNcrEnuVZY2kfvkveDjFoYhB1srEJohx8zNxf1mXbi7hPdzBehaJsH5jYa4bikHm",
  "key20": "YEFXpgvCCxrzpVP9T8MVP91JX7WLzHjQxGtcz6B3wK8MianEdCmXRcBR68TBPkpDFBvtyq6Ay8LJNbgQVKGeFsj",
  "key21": "3Fz9noWqv9v4QMgVhcJNNuEmGPHZsVNzR4wr44Dq1k5hVbYRSafgmCu6phVxyW1WKWZWhptvD9haJENc41SfL1yH",
  "key22": "5iyaEKSUr6tkWmWYrFtawH6MaBfV5ATEHc1CgJRMqRFzWtyiA32ngjhuyRn3Q5CpWEshEJr5bHua1zMX87WTSLCQ",
  "key23": "5TMowPHAEdex3685saFeZP2GMsckVUo8cHyq19MWLCMZcW6QTtiSg4LBPsk1nsWbS73cWk1b5CmBMAv1UVcaknge",
  "key24": "4JKHBMrsmDa7eQ5auiwRAxuvngs8XYVwKndJZRG183XPVcPSwynmi42iCpcXWkcmmwGeztHDou6DhfM1vGxgrQRY",
  "key25": "2L11LkJ179LRNZqS4Ztnj13CLgohqGUJ9ACst4WjP6W7Vc5evcZtWDCyghs4VzLryFwLiJaP33xz32FVd9cTUKgs",
  "key26": "3qtDAANhf9ECMn5H7eFgGSdLnK9VQgreSz12UdUm3xhh22fzLi4tDoLwxnoKmZE918gBvKnoNbKyscqXjD2JdXmG",
  "key27": "3XAsw7gaSjyCEXZeg186FWEo6NWcqphdmJo3rWFMi3U4xhB8ynz6nG9FU8nqanF7eCSDAY6d5XfSkYdNCvkuaMCP",
  "key28": "HMVAotymskYemuqRCF2D7HnuFV1FvamtZvLok5s7KCAUihrmyJUq32GBmh4jrpMDEWg5dh3n6JzUuvTcUT2hTTL",
  "key29": "4NVxEGkZoZFovkjecG6AuLaKu7Rgov9kBXM8ix9BtYnuQ1PvHs1karN6eTpv9UhW74trgh7KVr6YUXPBhAEXRwMr",
  "key30": "2uoh6AxqMyWN4f55YnxY9Cr3KokQXoCF3DSrpYBXdMAvBqiUW8kBQrXVqfCd2eZtG1BVvrVnXdqHRiLdR5kv2KDG",
  "key31": "4MASwK1SPZD1qaLqyajd3mzXtHUA3mn5YzGKsAD2RgnNL8vdVwzWStox1M85hXdQeZPztvbBLWXxotC3i4DzrJUj"
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
