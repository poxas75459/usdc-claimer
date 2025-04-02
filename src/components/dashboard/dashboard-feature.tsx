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
    "2t34gQ765MH5wL6eZX7GWFpMVDnRNafVb4pP2is259mEN3jsiuZRfnY3qcPrMspMLgeZb6eksFU4JMckHv8tC23Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sr2d7sy5iBfnttsic6QzhNKzxvu7zvzdrNtSj1VRgAP7yfeKgn6zvuAU1bBjPMXzQcAxo1sbiADU1QLH5RU4Re4",
  "key1": "3dwwHw3qwKnVAdeiMozhS3jDJv6ZeArgS71h54WY9SAwfXa3Y5WMuMzUfmL31hkJX8YrsWngJ1ZEFfbhqVzYi6Wa",
  "key2": "5zWMK5X1iyoTGARThAcGdgCWZs3TrEmsWL1Qky4tcwiJFqPu2s7kPszhuVTfP79qKcNeBJBkR4P37LizMKrs5EWy",
  "key3": "mFVE9FrMKfeBJvREgyEsKQCxzPehA1vveJgwHQu6TpFmLMeXxeQCroVQ4sUHXfqbvW3mQxxJbo7YJtVXaY418PY",
  "key4": "5iTydzMw6ZEu5ofNjWXrocpCbQMh86Bbj5CZHWGre3rZ7KJAGyoBVStSvefn2cBHPi3wX1KApzuZuGwPCcZp3QS4",
  "key5": "53psarGdEe4rpapGvbQ9W4xWtz8hwy2UV1oPA4tivv1RWdRJQQkTU9XrudvkxMuGWkVKbjjHJZuzncE4pRwASyCU",
  "key6": "2agWWwZqNc4vjdhhMLwcJSGeTCdbUCazEkj1oPpLff6LLxxgFrBjPrXxoAm9A1USqweDLUbu9ou3jR7tvRbNtE8v",
  "key7": "3PEsjv8zcbCY9ECkUdFyuEN12yCby5KtDqdSgeAA9Yk4RkX2VUD3RH3HUmzhnLBuJHs6WyYYrSX1JW3XkhizLS43",
  "key8": "27a98EcNWftmSNUWkGDDcP6WpvY5fK2xkE7fqVYMdorE1aK75ddTeXRhUFVoBL2XQ4eSFGpzNFJ4ckhEEpKGJURB",
  "key9": "oRHvQSeNdmwDpWEm9kErsQHceC7nHsqwm4Q86J2L5XVSmCWBBucGAFsr22zCea4qzzxnsRgpuwr6r5Cciks6kut",
  "key10": "htVs1obUJmNBsMMWseMNXuUBq3QJdVwBMz4mabUnuAEKewhRQZA3wCeWZg6EgrVXa4wUrdSBQxVdmAjax2z1iHq",
  "key11": "4kmiB99Fpf4huzf6spPg9DdQ9CUbiJrQFFd88NRjhVCcXS45CoEfyrRVuXsGhSWSn5bFytQJJC2KYiJpYSHYwLeS",
  "key12": "4F9Fb5Zs9asGy8JLVnj2n9Kanx2QQwi1dvBLZxjW82unLZ3SwnmRseADWvEaNtewfEAvboWxovL3qqrNJSRViC3a",
  "key13": "43Yj2pMbztVSQ1kFHymPJhSkqUQoxLSgtbp3qX8WCp7uPFFofWMX7pAbadCZCtH2ndfWt1xKW1oULAK7CppEeH71",
  "key14": "3oozwSaxLcKAMrhusaMXAP9CaC2BXwPFNtFRvpnNGwFJvWkjPif6bv1C6nDJwjzMjF369PZzjhAzYZZSb5EcDRTf",
  "key15": "tHiWYFLaRUxXYvuFXy9ZYBQWM4vtv5SyWwRDTkqCbJmb48xM4be3yVwRKvfnUWGjMGX5wzUxKjkuW4HMWoyVfYZ",
  "key16": "2CsFaaQ5e4kRZXgvbkKMLGfz5JaG5bxADmg1u99LANEygvdqTEH1Gk5cmpamqSji724fo7fQbSCuWzBY5BjALqDa",
  "key17": "28HsQaocCZL5Xsy7JMP8DWbXTTF6rNvaP2rsYc2chPDNKaMPMjvxnLzze1DaJznMBqkBT6G48NkCpDwKNk29vSnQ",
  "key18": "5j3r6Zy8bYEdEwwtfwsHoKYZ4wC9Wn9fuJLHhy1VDHdB24NEe7ti5JkuC6UthVuZ2EdBAZDxzF5rjvY4DjtF6EAB",
  "key19": "3sZDhWs6cQENFJ93rPAUJ2xwXYrQN9PgsWyQVNTEJGCyBQzYz9qaSxyKXWiRbiU6YvzZDHFT1TDJ9U3fAtFaKNB8",
  "key20": "38MB7S5XJmeMpUr6kH1PKt1rtF7e8AugaENQRUyx144cLkmQJoN3VR3zH8UJrYi2nPWTwTa52an2SkUecDD4ZZFB",
  "key21": "3mbbtRJkeXP8FuE5VXYBDt43dhu8DXRRhaLZVR5vghqh26e5JSzrqVzDstXuxzQ7qfmXtxncrsAC6fyko2FdCJL",
  "key22": "3dHNCsqMpBFQ41mbrsEaW7ZNoM1a73p5wpKXmZKQH8mM3APJVEaHSPwdJqAfASjx9tcNnDtexczi3SZwETSeEN3E",
  "key23": "2tvRQxTmMLe8joKL5saUkSBBxVMDhJjWAPcM5wQ1YQ67PkhX6wJwvmhryos8d2B57npDhtDh2B2bbUsztYHQvZF7",
  "key24": "2TKfzPznoPWjkbnnZj1V7cQWqfsUK9K4ki2KEzKsHR6TwvpfWjWWqwPztFUwnmyNbA8moSuKd2Srnb6RERW7cRq3",
  "key25": "5ek6H9hU4bwtDNGRTv1AYJPyDHmcnoytAv9kExGg2hJikBYpaZscjHLz4DrrwWBJYVN9Ff2iH1VfmxR7JCkp6XY1",
  "key26": "2qC5Wsq8uqaf8ryYRhAe3up3pf3DsU6ZUzUKTEwppxXK9hTvETKopiAWerwiVBWGkqAqpdfbedQQr7JBSzz6PZbD"
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
