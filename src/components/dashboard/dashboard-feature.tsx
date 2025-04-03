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
    "43amGwyzWNNrjLmS1MQWZmNkqRJxw7ZEfn4wSmbDNeTArFS1Kx3AzaHk69bNf6pyT77Jjj2h9BtuQLnHbQnxHEB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3izcaCnwxckDMuzjFs6525P2szqVLF5MxrB2xgdAZ6xh5r3A5SdbFvP7G77tdgrw3Y4s7MqhNJ27CFS5kTvvWTUN",
  "key1": "2Nw4YYAuUg28uWSSnNNVncXkWjNpudN3RtAqt27JKdh8YxTpfKerant6hwjr6aSMTHAzzuEMyGxdFzTryZbNQwno",
  "key2": "2Wk54y4r7vdY6JCSiN7VNZU7vbDzvLt2Skt82TweCzmHspBo2i5UwKauiHmNdws7gWjW64KdRvYFoX5GgHDgymqU",
  "key3": "499qmVpg5DcBG4CXAdNL278aopZ7aznKdwDAaBBdbnr82MB8oiks9DYYtTcBAG7Co4fXPEFgiw3vzkFpHKprevN7",
  "key4": "2snhPJP6Fh9w2FKdu7vZFzARkV26cTGY4R3YjtVyaUzYduutWX7NXGjf42HdmThbrcRhN5hofbJcJq8SMcV5w75t",
  "key5": "2rfwdjEoxE6cy39YTXr4eeBE1NbTuRA9Vy34gozpDFMUQwwa5jCdPty31qE9XJ2nM82pm9orkL8dMbW5s7FWxaq2",
  "key6": "32uk4qtqBY1kczQT2PFdy4FMr9BCHC6RSQAE7tzkXHAREuCio5PfQ3tPa4FTqGeqeNgbHwd6EXBAuA5d13zdAmXE",
  "key7": "m31oJNtKBKqGjaQQe78Y36cXyfbuSgHbgmcVe2puvhSknrL4ytFxPjiQE58qMi4BNRWG8gRkwJijQHLxdUJHtdn",
  "key8": "NJogKAaxtbDvEJ5U5X4uvW7kV1cxwLKyoAY1xFjn7bQtpPH8nmKLmsav6vjbALj31zMukJETMDZDnXcvFwSjoap",
  "key9": "YXvRKacBobYWZpFy1BR8kA1mvBKkE2GbkLFeWVMhPCVF4mToCbxtFcJ4p4Jwq9SzCmhLDh7em8mbk8es4hUjqbo",
  "key10": "28H22aei66pS2Nke9dcXZ86Q2QvDB4oQzZg2h4XUQvmWhJow79XmGqzsvrSK7A2dtFkPzG8oNRcB6eoXzE7NHVad",
  "key11": "3BFjts4GR4HjXfLSTpsvgsdZaUcLWKRN4kzFAkJDxgbRzHihxwPzRNgifkGUSkzSnKTKaMiMoXna9iguRMJfAD4P",
  "key12": "5337k8P37n83wvaoKEc7JXkrpb7aDVQ3BZvDS2iLgfiezhCtQ4aZ4KJgWd6s6V7GdmavAKBYsmn7bn8LspxwF77d",
  "key13": "314LUTSWnKW8THZQUfFGNSSDHvNWG7hEJ7z2HY1vRGncJZLXt2syd3gwAFQ2fb593FcaBdCL8G4tda1tz1m1Cs6w",
  "key14": "4NkZMQJ2iXFsnhaKHLqJCxZHcS1jbKXVDuYjZY59hj4FrkWFS1RfdEpgtDxmBvPbYY24yZdTeb7ULmPbdaahjsT8",
  "key15": "F4iWwyjMLQMLZPSzpu2jKqawAoWqtJzprW5oy2wow9xRisbZCRBND5Y9q8k3YNu5msZ3Ft9a7SvRMzJTqNFgFMr",
  "key16": "4nV6TEqnndXW5YHtwWpNo8KB7zqGKGQYaEvLFs6g88vHaMam4H9CBETLVv5SjANWdiLLW6EzJuyRCa4ekhYTE2it",
  "key17": "67m4Ecz7PCde8uZMN1eBEn9CjLJYF21AV4kTq4PUrAmikRDQyMN69bezUdbhQjKa2aubA6V2VbEidpoSzQUWvxUz",
  "key18": "5JEHiFLsVNjxD1S3i5fJYnC9kYN6AYz1JvKTQWYas89E4CUAGgUHWu3HADqqDGqar9HaBJWFG8r2DuLWe5hvRpV4",
  "key19": "5TkzhoLqnyTxjhvAvLChJSbw6JsJ9jPUnDeeqc5fdCkKf4vtcQ3FfDnAroZnpbCw5waCvyzThysaXf32FMJmLjzB",
  "key20": "3vzeZ49BWjd3Y6wMk4zKwVHmvmmbe9ZtcC8VjiHArycb2Nh9V6smuNZgjypLfTsxX5GzfiB2VaeFXRY3tC993aRt",
  "key21": "2YW6SpG8xp1oJCCyPuyiNWVLRpyomEMX1xzHan34WKRsvCRYpZCAbn7hcsQ31zw7NsEWjP44CQzTU2FKRSgA61Jo",
  "key22": "3d9VDAmuEo8hHfvfQPCC2eN7a8erHdnYLEeyJEmir1UiFztvkPvop6wGXqLHBzkZ7eYaMdFJJ7SsnShB885eJdjw",
  "key23": "dqD9YQQUsJWwqkxYbDsWZPvX31W1ojvYJxd5jHPRkFLscusTZf3XPth9L3urihRxS73R8bTofhuPGc19p31fKsZ",
  "key24": "2sVL48drdsQVrxXZEptckzVu2tpBUNfu8eK3p9FfRMgqhXoEsA4Jj4zHsKxjn8JfVRQt9rFRk1RtzZm99MdMDDVi",
  "key25": "4gYKYsrV1fi9ZQyLpPUn8uooa3vs5J4NRDrMFaWK15qNwTEKj8Tu5qe1wVwHoMemt8VUbNgyt6FJmiQEQCxS5bnK",
  "key26": "rZPgJdphWK8HmUUc5DJrUgtvecPV6gycjGm1ENhJwWyN9fte2RpsUDUCop3G3rktBDmEu1PnDYrjHc3PE5qwh4t",
  "key27": "53S38Yqnz9Dvno9ocMkiKsgMJr5i1pjwaydgokzM9yQaBqyFXyoKqsgGvQPdQEWdPATuaZu5LYn578E3o9xeZDvm",
  "key28": "3tU6tmqXzhRacNpM375DhGc8HfjgbSWgkp5h3Smbo895zAT8ByzoyeQUQs6ni2UqwXSbr7vkMCL8NuhsmhNbUrsM",
  "key29": "HJLNXnUJeqHA1ZjioRUVtnhwkLYLFc5hXYMAZzPu3teZZ1C8ye4voErJXtoZWj2oJsJAKLbXoCxGNsuKqUBQKjF",
  "key30": "2eZKDq716sRNHuqymNwqkiKL8JBx29CNQfp7G45XhVUpkHNWeAUBtMZ3b2iF75Zbu5L27wGgmHGWC2vnnuzVi2vg"
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
