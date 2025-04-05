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
    "3szVeoAk8VVt4XbuZvnX4NcNDXkEgMbPiAmNuwiMdwSzKoz7wingFxnr3xw3TEA2cFJcAf99ngqqWKFCZgNJRVDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2cVEvbsuNLMz6ta6edokoZHKa432xv9QrfQCyBPDV4DKn1AvSxozkQDfcmR1ptaoGUACicb8CrdfV3cK2fKGgj",
  "key1": "42Kt9dbUmKhQhJw5LZfqjobrV8Z8k9Uir9oQ8F3fEMAy62VuBFW8dPU25bWxrcURiY67ZFwifDfABpPXTR46hD1A",
  "key2": "a3c7wxp8EtAa3mbd4uANf9mTBv6kocax5dwmf4bJwgW39HQ1ZM3yQEtS9Pxv1YP1Xor3umWVWhwzDd3WSDSA6gD",
  "key3": "4qhwbSX1EpUrNhgcPjZmgWfeKR6otTbiw9ywyPvdv14cAUFu9WMv9BNU2fbdYaukMuvcXz6MHDjGjKc9QoH3YLUx",
  "key4": "5tH9zqxfE1NofntXvoiF9J6fizXY297fK7vZLRWr252pCUekaxUTXk1JbLJAZyztYyjCG9cSbyzS3eNUnnXjgUsj",
  "key5": "41z7a6kGuyeEf2XsRija7jcNV5oGN8NcvN6bKaqsm8p9SHTXLPJYZjZqGr5ybVx1XtgUuwo4TCXANPi7NWid29jc",
  "key6": "3fCDrgSTwmEXS7qnZkW3UNBWjYx2EuLfDfFS6yekV8Cz1MsXfiPKLE4AQFe7inFEfQyQhWKMjRnTj5CiJruuf6pT",
  "key7": "4DVbWUBWMj4FVGF292rxDnd1qiCErv8433JVgyNFeubPyVCFdwFwkzsT5wzJfAxSVc7kXLjZn8Hk8KBW7eF6yex4",
  "key8": "43jmY8H1fGTxxXrdnXudtUnQC2ADT5xPSXt7MttWbUjBHAwaoVcyFhTcv9QF6MMfzB7EwszVdTpNMoG6MkrnpDgj",
  "key9": "3iusyCYCXo7MyiDg4Uxn96iMiZBMd8fDAMKgs9zzD61XxnWRa3rmD6Br3Gdh6CenJHWSTBYftRA1VY7kKCT6iF75",
  "key10": "1ePusfhHmh5GWcMVfEfXW92Dc8z8NVQLfn9HfgAhhfNyv4si83uE6dAd3B1qYWVSEnh4Tzd6VeTwpsSsjZeFZvb",
  "key11": "4jgoE5WAnavM6QgTt8P56PssenWDFjv9uVeiZgXrGom6Zfk8atZYWcsEe5LKRv32ntm772EqB253aGuAJQbdeaNs",
  "key12": "24WxMQgjVTBdafxMZCKu849kdydpfmNoNRq9eyB5bwoPbT63cR7r2F4F7sFKCSLD4spTpttxA3EmWGKQTbeBRMHZ",
  "key13": "2hbfTUZZCiZrpAJWLy5x4oHQebufbR6dnhQyEjxT8yJDhqfyRX4p45MsAQwCjPuRxrAyyZVM8LrcdAnUsSp9nq7S",
  "key14": "5h8nJ7U5drvRHrq5pZ6wjyqw48P5Q3LDDFTxbRNVDztKYhfyv9T4iGEsBzJAHcNsYoNLpB14dLqJWLiRop9iFzpV",
  "key15": "4GcyzYfdJUKikAXgVzDm9uscVYgzdpjKmRwMVqyyoQzRzCMvEGMuu5rRxSmCsC3TJnEirkxV3c35q6xiaTVrNM97",
  "key16": "54P7AAahYKqcrQox5hsWeobzEpA1iJ3PZK5m85CMay4GsEen1YQY1UScJC9r6TtsJcBKj7WktjgAYLScEVW3vpTA",
  "key17": "wSGWWvcDSuRETK6yBDzfw4H5miqydQVxAovsSBwvZ8QKj4cFsLKij4n1YSjXQwqMpPYfqvhu1QA6k2NvycEpvab",
  "key18": "eLBwMyKLDseERrMjg56SeXY5wyW26XGbGJS4pFh3tynj25KRiS39iREV3u6MvPVqcYBb37kbNoBG999tNqaRECw",
  "key19": "5gGeSBf67VWDkgXz8eYMer3v38ADZLw66HuTbXRs6hwWwmRPZAefmWSx39EqgHZ77uTCpUSQDukptsjiRSQFGkkG",
  "key20": "4eXSaHcZsMZLqTYAdaizCHnvEznK4Va9g8GXzWaUrYNLXnTAfBZAK7i7d46YZ2aUqDiskStGGpujE2A9DJMXVbk7",
  "key21": "2Lgm4mkqpiqnTdu3VggLSvMxajthEoVxKkS4Bet3sA5s3AH822T2vg2Vr6GFzpyHPZLPnAwumZ8PzKdjjSojwtDZ",
  "key22": "2V6gx88AZ8iQo5DYwRrivxdbFW8eyoKgtAybPx8ggckkYz7fRSik3h6DsMHxzBMwY9vgQFZ4cfRFrdBwwKRjEiZm",
  "key23": "aJGKdsYapGEExdBmL5KXfegn5PHoTksbiG6LZRPgHJy7jjzsxMwnhyEri7Fgu9uGZx8iEZ5SEGSy97m556KQamP",
  "key24": "iNV6mah4MPsASbpSCths3e5bSu32qxMgyoiZjN32bcxdG3PwpqL97scsGfi5n3rkoTkS1HARMqeovnBzUeywYA3",
  "key25": "2D1jQG3C9EomqJJiNpekatHgcpf38QtyS1bAeMcz8jrzE2CxTSFXKrk1dPdyHuG2Edwjd6mtv4rxH6vgn81knNfy",
  "key26": "58Ww2sWHVuEdRUEyRLfJeYvWxg432qVSauovfSWiPQw1Jawo9vKxzEBtqJxHYPN7iVhV6rq5SeaZaT4Fv6gjukMp",
  "key27": "5v6WwhdNShhnu3QLsrUjPKGYXVumPJY7eR5exPgHXoNoTdsg6Vv3BSVWsFDGG1g9ZoPC6qTikuEMUxkyuAAyYEc1",
  "key28": "3gsvCT9QBeJX3B9fcFa6WiAwD6Amt489aTmQKnVnMwYMKWwxcgLcFets9vxtgPUHaB1JkGVo63RL4MY7Avd42cDV"
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
