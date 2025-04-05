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
    "5EwJNQMSiJYp3tnXqJ3Uk8C7qUhmetHoLvTH7nPqepMbaV6vnM69RzJJYi7QXstuq7HfurUvzbdiWYpQ2Wy8g9yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrZp5XrbKX9tqAJhUizRN5y2z21rrBw29y3ow2BBKWgZvHgWm4RLTGA25FPNqmH2T8g9qLnLhWb9wm6CzNDZNMA",
  "key1": "d9yeSV6TWyvmYNvVEmiEkF87WkpcguGGZLQ3Tz4jj9X2We3NzxKKnAMDg6ZJw51XrEVCruM5TG7Bmn35ngoHAnE",
  "key2": "5HJ35GraXBWopp8fF2QuZESYeykpTwLV8qnzbkxHFWB1geDS4C94hZLqDRrmBoJBQoU5BrFAcNJrZbVKzS1pQmpj",
  "key3": "53Uj3iiyxv1CxBCVSk1P4WVdt5msJe23Vkjcfst57AqM5CUq14BMpRMkKq3cmP9zCH2T4CBY5T2YxTRoVDkF4zUJ",
  "key4": "3a8BG1AZgqGAo6Ei6qAQxAMwBDh3usLYNC7gYKDMa7m7GWwMYXiZVr6bCqVt99Jr1Vw6bY4HmgWw8HkFE9yuiwhN",
  "key5": "ZkYZo4WDr9ryfAJ37mSrC1rV1WeToJQo8k3K3sroeqFzNuv9yBju3bzCXxiEDUcpt8ABvFDnYBGufQ8yZRUkKZR",
  "key6": "2eSrURrLDGu4CQ7Ub2SNYSfjfgSpnE2wqx27Kg1BztmobJCS7fTkyFnMNaV6HAfyesD8xQKRAcpRtdJDTxFtqDaP",
  "key7": "5RPtCGkmmfizP8XnjgCivv5EB3UJJq5QMcnxQXoQNnBhfiJbsorpPbsP7cDzoQ63NxKnuMh1Q4c3mUqHUbeXbuex",
  "key8": "5FEGV4TeHxLimdoCkfCE5Tc74LZFshj8PHms2yKyFjsnWTQP1vZk4r1bUHECubSbRJ6iaxDy2gpNWEJWj3tFeALu",
  "key9": "Q3xY4KthF6xJeAvRJXg5jxjPDc9U18iuqacHieVaTHaafVdt5MkJvinkFj9PxW5Lj9W6nWzFybvEyVmStzynsze",
  "key10": "2uG5rDR2P2tNG3tjWyv3vGepXoRkvEo3ygjoarsyvo72ZrXkKkkEbPLF3cWadPbf15XhApKhEoetB6Qh8mj8nwMN",
  "key11": "RPyrRNDc6kSPMHjZzaSLtcukNaFfkqyd4VHvpxWq8FL8fiUqno1ruayrMmNW6yZeyQHkt3w9ZHoowoLzN5sSzsT",
  "key12": "4gFHMu11aLPgBxVmzEVVZte36RtznrQDxZyfh2C1y2TcxQhq2wx8C59sd1pQF8keu6StCSdXnufEgwrogTdQEAew",
  "key13": "5MK2AAbBuZhudZHSKiTBEEYVaoJMhQpboyQtkqeAsZREsoucAQTArtG69XfKmXwsHp3G8j9jejd92G49NXw2wkKR",
  "key14": "rigPTGSeFGi3priNWWqVwv9jJGDzF7Uixd1UaTHX9StN1SzpD4C9andswbbfwg1RnvFXmBcaUkEGLV8W8bG7EsQ",
  "key15": "5bV9hiNsxibgaEZW1LHPvPj7BkY8ZMNT7LTFew4dfdA6tDR4WjNo2EsFgq5vW811NuM4um3w7bXGsvTGPAz7qsuE",
  "key16": "t6yUvBDfpgr99dZ8M1SHBGNDz1NXb19eEZeXccttC4cVxMansYv5wncCwoHPqTtLwfa5K2y6mGudv9cXUKzjn7m",
  "key17": "5NqFVfYsZyPVMdfgoipd287Hhk4JcxqcdkHxbgRrH7y29cA78QuEZCKkoFeEx3mDK328KywAWC9gJGRnTXWo4gJW",
  "key18": "4Lw6dkZXe8egezBiTa86aJ6hMWQHjTGWVnQZHvsPLjQTSW4sHZ6eQSLwQFFYDKGXtnejrx5icvWePKSCE73ftDez",
  "key19": "SqHs3AjDmcCpkmpjAu6dohxMWqa5PShkh6pNHwPy8YYvkhwcvTbsQawR2cFZGiT9zKXSRrYaee1J5XnxMZtJq6R",
  "key20": "4G3ydUmj4vgdT6vRe4gE871U7yKLqYiFrbW33KXaoJ4sNcRgocREgTWQWTLUEQPVnC1w3F9biUuT7Fh1VJkmKPxH",
  "key21": "48ZQWL6JtZMjEn2wAXbvk14hMccoECQovBajiPZw6wK2uTHunjZNRdAfiAeoRTE1W4ce5s22cLgLqLRephSQ61Cs",
  "key22": "5s71AA69W84Zv2Xk92gpcUSoSmvp6rvPrnwpJJGKgMPdeBJWRhNYRSCv1ypX1cwjLLUskwM9PjNSji3KhQGEgNAY",
  "key23": "44nn8EFGpG4WCbdiE8Sn2ed8FLTEsY6uP7fnCxftHCNK8c3K4pcGZMYFpme44wwcujPfc6JVYwBQ6FARx68SwsLX",
  "key24": "4H6hLbzfH7wwUczaV2xbkRAhBsHUipXvwr6ctHqa3fr1WfEm69gpkbBZNb3ypWJ9bHihtr8AWuyjYfNGtARiNgF",
  "key25": "3md6JvsbC41JVGU6DrLPHKrswZFqJkdS8k6EYye3AQ39bEfhDqvTA8V67ZzWREiSCL7ZXY2YFTuyZSYZpUQRJDcL",
  "key26": "4bTZeMa1eWkCPiGxhqixWxXUBpJ8qXeXqB8kBDn5zq3qzfmPsYtwj6MsPNui5n1UyppiZUZWZ5ot29CGgSaea7mb",
  "key27": "4AbtyaoyTVMKQbmeyxPVxVnFuva7Fc5fhGuY3dzZcWtHCHo3U9QBdMF26oFyQ5HWC3JEPfbTseu4WnBARPcZHWqj",
  "key28": "3Ao3KU4avWS8iihqTYVn5AnJHPLUjdFZ48FkXUTh4Mn3pkSfFJHHijseXmNhYWVGENbU2zqBxqwLvoXyNVLN3JDz",
  "key29": "21SGkQ9vmLdJW9cC9a3HDgsRt97YCvo3b7xDoQzZMxdgKohbrr6juKFmCrixpvc12YBBkjXgMggZSDZ9xzKGCdSt",
  "key30": "2yZMcN8VJU2qqBu8pyyNnFycZPCowJUU9EdsQMUZegdV6nVgWyGUqEF6r15CZctoKzu52ojBaVBNoA1TWBz8DhNp",
  "key31": "3aur8B4jUsYdZo2p3DfVgQVzSknNi9jfYp5meUHMLje9ScvKoNdzE5wV8Z9JUGCfbbnKQTEQRpUd7nLauuMDGiFJ"
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
