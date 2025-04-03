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
    "2fbthJFB7BJEC5KfE2EQ3uavAE4aTW6WYkkMZz4yu9VEiQ5BpGN9gSNCxdNbQifjYK29Vbeom5JnYNFW83AGFypm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PusgHHMbWYNE85AbE2cUtBMmaai27kFbyz79m8vP7adigQDZV9SgU7ZFyaUBHS1WegEvxJPYWmGCpDWt7S66z9P",
  "key1": "23ztJuZHHvzk13e4dbAhTMhu9LJyC7jwXD6WhZDFMLbWE8nAbZpnMUhsLcXZ4ZTF9GmAjsKhUithgqER1zaGqcnj",
  "key2": "5H6gRKsYs9C21iNhW8RNTFfaUKqsJ1vjYjSfLBAJtd1ponQaKiVth4DLVefKi1Urk8KkRTNkfQRFttn5fuzCXWnu",
  "key3": "4SY3tBHmt6aPcg5ZJZwjufSLSUz48WnexNxiB8eNjPsMJCkTtkpCUTmCQtqCoseK96RqhdASvjAYis7dWBnqCSxd",
  "key4": "2WbcM9yiu2KivagxVY68KsvB77hzFKgRdM1TYPUfZiiGBzcRc1KAQ9kfZgDkkuUiEd168aF8mYN8pmkbob1enB3p",
  "key5": "5WHoqnfSMtnccC932MoBDXV3Y1xY3mKmALBpgUP2LMovHV2EaU3jhCX6HUyFvk8fJnAxBisyWVcFFqv7zGgbbvev",
  "key6": "3CuWFytycM9VzYe35nKVkD2sntKFCKkw3BA6Q5QHEqzd2U3yy9W9Ys1h88oQVMfBBGrXhVtxNB4d2bLtXfhNT2FA",
  "key7": "2SYPEsTUQ6Qc4QifqzDbjXipsPSAvg9v2eMqBy1QxjSnaUWuMnqHatA6m18uBAKuswEVk588YL5vkYjkwBMrNDmz",
  "key8": "3aiyPJmmd2ycSr1DgPU3T3NBFRbVaffBmYztzReXA1yMwvrURctyD8myL3T82Xbdbjdp7o2qF7JsSry3H13LhUJY",
  "key9": "5Vg1JSsRVM8myxeMVCYeUwt3YT9h6kRt6rWhwDnWgx6oypXm7uKxb8EXwAbN8fY7oKGZ16TzyymHnhipUiE42zLU",
  "key10": "4tbJhfA3Uy6AE5fRmfMtkcGymkut74KUnWaRXX412q4bEiYwxmarnrbrZWNmPhzdLxoQnaf5LqtMc4oYbRBA2Bdr",
  "key11": "3oTj15Y8FV46iNG7CVHYKxTHUAC18bTX2Jz6LnAo8J9GDabrXLUeGxbTGGH4wc5vK8EdhrabJNefZaTLZibaxT2U",
  "key12": "3NUf79eAweT1PoHkV3W7oBKBPjYEwkFp38EToQXoECDBbVrvQFNg5N7dt6uLCkqVS1TnnKsBJiVLefE4fWpazzWe",
  "key13": "3GykwveqMRzQxyWvVuLgp218jEWWpV4uSWdri9DYKFQGGvgT6PqLfhKb3uz4dVtGeNTRtjnP8ibas4epvKHr3Nbw",
  "key14": "333CZrzAcg6ARmDCVnhhsDnuXbgibMV9Z9SrHkZCMeGrmmC4nBsy1kzmtNd4brS79rpZi9zd8W29WXhTABW1qFEL",
  "key15": "2Q1howpwjxoFbsJXdq47bvQNi1qqAuZEwPwdpTFL3PRwb6BuB6ryVNR1W7J2khdehRAgzL9HrWiECMscxpVQwEj6",
  "key16": "2bGzjrTeRDG7JnvcqeCXFSRmYNaXKJKaqwS2Pyv7UYUu9Krq4Ca6qSyxdssiLGChNNNf47qzGjN3oYRre6dWQTUu",
  "key17": "2jMYUTfnY3rQgRhwMGAZxVjPkSwiEqKy87PUxcPCkF5CgKyRoyoeYuj13UivYqgR3zZd5x5XW4iL9MrfXBf6FxfV",
  "key18": "WxCLL8ygUuEqBFYVruXLrFrxvJi4mgU3e5iMzJDNfDgTjMUBvVFKepz6i37WCGVV36k7Vthsw2rgKZGi1sidPa6",
  "key19": "nqjb27vEAjUj3eYh7HrQbZXixjLSzVW6HQCQoRPP15sBzWM7nTLz9RaqPTdpXGzQFay26pLbyjck5MjJbXofuQm",
  "key20": "5KFG3MorhZmkCUi1Dm4E5e6NqPEM9opYqg94af63HSsvQ9rEDQEg4q6kk7JJRF8f9BqruCmWWc4K9wYKRd6qSusF",
  "key21": "43bC7Z3jPeHkJP7MjkvRnnRjBtTNBqXJNoEi7wSK1j8L8BkV1ndo83maVFSQpQ8iQRfAwWFgHGk7TMBDMBuQJ4hy",
  "key22": "3vPT5xdYcsD7sZq1qaQmHrMPX5DpFsYcvCJMZ5pbJoE7XhGLYz52qzkx2G4G6y618QtykdaPozPAtyc9Q199PEMQ",
  "key23": "2gYBgHdru8cdGt3rYxtsocNFSBzvwVKm95HTeRab6m2kYhWWvLePdZ1qopHgw1Q7sypLrtqfub56iDo1WtayR65z",
  "key24": "2zLcwJKth9Xdtw12Z8qxZ3TXSPs11it3Zh469xEwMbuNUh9wdHKAGkYtYFQDqPPWqQz6xgikxRugYEmFNHS95Loi",
  "key25": "5eCvySuDiqrNBT3C999p67diYmCq7pxw4RpYY35ENkZoznzQM2ratevBkwVBn2w5sFDpnWEdT5VSGrAig4HJZAf6"
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
