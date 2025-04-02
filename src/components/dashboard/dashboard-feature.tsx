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
    "iEoLaopAjwDi9QnpVdvxYv3Dvvt64fhaSoqop5myBTMBSnBErz7TTFWw5FeCLcAwjFBtqeaZuBcF2DFm4EK9CoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dBgbVGke4XBK8kgME497aWxqW8degBE5jALDazQeB71GevqBTCqVjVKdPju1h7N6hMrYXWonfeyDaswDDCSGfMr",
  "key1": "4kuqp1wWawrD3Dusixwdme72KYdNQ2Bg87yRJTA7RNVpBU4n8arEUwq6GU8o5d7bRoE9kGu2b74jw3JQpQjkVkGu",
  "key2": "3NZY4wYikxcwC6TWYFVXjM8TPDHUzVGcdz8o5dtuqGd6BfKJWLZCRr4QjB3K2KekLuTYtgf3KP8sdPFeZMz71Js",
  "key3": "uMPc275GHa4Rsvuce3V3WKrmmUMfHKK6CcpvCjvfuHtChGiJUmWW1mgmEQyUSWvUemkHFVrTVdbECp1ZR1ambes",
  "key4": "kCe9xVGAMq3wJFQh6FyjiJ4PNqjf4TaJkMfjnz5rahcHEXyyGXNDGzVzjG6Ka9XH3cfQr3n6GT8wxY3CHobmEzF",
  "key5": "Wqk2CvaN7FqSzSF5vkHmv7DtU4ZXBUyqLJWLKFLGEaNhhori6Fv1N5NmQJx4pbktoLhAZrJjrMFprJNjukLuLoh",
  "key6": "4Se331vMfKTM7GQf7EUqr4NbQQrbaKJcViLHy4RCjrtTSSPpZTDAnpxG2fgNTpoyi9JSi9FWj6X8vwMPZ3nz5VmW",
  "key7": "2WrznW2jMJSzjXqmeYhowBEu5VbJxAGQ3ckkPzQ2cr4jskTxaNGSqMwVMVdzXDxJqbHM6Nb6bhXZopb3pvTb2b4H",
  "key8": "6378aPyYnKhL2PmQX8384epJi8wfYsEuSfyyzEKVs7EEpF6wRS9HfSUJAyggFc38x4p7MAvXPXxohkiH6uE5sXvL",
  "key9": "2Yha5FFoAywoSCA3JArnG8EWm8UdyJaH4M2EUsbi62qMP5baCx134da4DTVgJHZbyLPZmNk3mirmjpw6fpps8Gcc",
  "key10": "3kQhY5iAWzD4N6KRZnPcaJyMNHH9T7GXzkNUX1rsv57yK1BLYwgdmGTknTt85nEFz2T3nAcy8hiqWHEnJw5KFFeC",
  "key11": "5HHnosnVAnhcejpnPMii1ABkuDGfwzaBZZNXobqqpygGe7tkjYJFq5XzsocdYYq4Ary3Qey9eUCGHfxRM4Mc2Emx",
  "key12": "5M4onFJ4tWt1hnYa1vEnYKib2siWRJbWzAA28zSuovT6sLAfUHZe8eqBVuwF9QDHLTrSZDihQsSC1zVuFLTFpm21",
  "key13": "2PJgeGdJPKGGwZY5Zv6u9uPeQAM2m3TA1rwZ6j9G51k5MK2bQx5CUWW1hfFktgYGLeoS5UbobHtfuLBYFitZsZkG",
  "key14": "nsKcpZ7xL5NTUwGXxDVBWfV3GpHVRNE8sWgqYrcfsmj9kwo8ZZ9bPFdCDK2W27tH5k2MoJUj4f95HHrwJH1hQjx",
  "key15": "5X3TxQmURExb5c8pxAUsmRXnrLSRPFKt4isbBA8uEkxRGWxYVuS3RQBo9TWmSgN6mJhGCcHVzs7DFXEAPSqNd4XF",
  "key16": "4sqXUH5iTEsS9UBFmHpiXNgSfRfWFg4XmguKxZStUFKXqAABBztdihrV8py6y1iEpQjqkpWkBZgFHyLmoraF5s5v",
  "key17": "2NzXFgpYUdA2ZjEdWmY1n9yXWqBSwZhupkwoyntwafj1ftaL8oBSgjN84FeUmwSomyGb6tYZ62L6NsvSwbqmthHb",
  "key18": "2t3vmsZ9v7Fgv89jeXP6U1kBLrqKzUcaXrmQkpB2L8FzsMBbzNCq7htq5VkDvzFhzYxNF2VBfJeLeEjTDci1GwTi",
  "key19": "3zkixkmARHTmzi4CTmzu46k8CYnFYGktmNiB4bB7zuQCtawthBjCptW2iMqHdv5g9GLip5EkcgjbrhNfX6qCJXJ9",
  "key20": "4iMNvYxNkJiuAWwKWXC7nq8y3Et4fqwBcFvzmAtMpEaHteGuQfS7dQpdt12i4BJ85m7Z6neKiJzDqbNDjGTMKnsn",
  "key21": "2AZm4JkezWDYso931HpwzPiKJqtM35k9dCReG898ePAztBaJzNegTbyoLf5RvtSsfrGvY47DDY2Q1HpMcXh82Ra",
  "key22": "rAWeu3a4Ry3ku6YDtxvebDe1t8qRQZmRKtH2t32Cih812xLr7noBm5DkDMQcJ5Q4FFnX2g8vYCHp2yuDEHSJkAS",
  "key23": "A65KFgQfFzC9pHN5MnMNrR9PDxwJXrMo6otLkdNiRdWv99L42z5Rb3ojkWHiPLjmw7qB88t8bXGSPn5YJcvLuBE",
  "key24": "2i2baMoq17NufHzLcff6epVHfs14gpM3X2k7SJsTRHp8o82GNUe2oApKnLVZF1rgBbKV95cm8Mx9P66vYv8a7uAJ",
  "key25": "2PfwG5zFsXEzqMLd3PtFqXV2J9V9GoGks1Lp13iPywXz2fHccEVjds6D5VdpP2CcF1wnkFkEGUc78vi5JgDC3EEX",
  "key26": "8h1kPfZvGQnPP2sMT7kZMvQhkdPmE41tS5bgRhVHoejcwqXH5JcNjXcexkGxJ77Lvfm4w7vESsFT44sXbsSsjcQ",
  "key27": "5hyhFi4RHSCKCbqptUQtQFYA9Mu7C6U1R66YwymckAyjQ7vn6EKvkrJ442ZS2dqApVtaVcCZf7Gy9gDbYSjCSkK3",
  "key28": "4eVbr8vabgVGqkkJKCBCVM6PcFjXJCXcDjPDR5u5rTZJSQWpVJMK3kYjAr1Dtccdnz2mmKXG6RxNSG6NYTmz3VeF",
  "key29": "3iycyLPQtR4frCvSPqu8ewzJcNQyDyAPcC6mJfvbgu1vxbD6JzXGAn2W3z19W2KX8wFHwoS9BH5k6rfawB9gtCSF",
  "key30": "2j1r82cNw22eMfHiK9xjmxnDVf3pG9Af1TDvxi4TdFK77bn2hx3WQFTPaDPEix7b9U8p2Py5pwczYTtQZJ72Y7B1",
  "key31": "5mDGG5SLBNg6eZVPor4ajnHaiymrdxf6gfhKz61AdDK2S2rg6TYSNoyLsAg6Kr3V8ikEbdw8P2stj8vWnYCsDd89",
  "key32": "3q7hzmfgW8zdH7d3JYac3BXGicGjUhrVwJpD4WiJiF4kgE9S4ZVGphRn7n9dPNJ2wRHZFzVA7nidekvzmAjqhz57",
  "key33": "3gQHXdYFF9BA1vQwwkvtWBeXXtY2HnxEaHKh5pJVqDetWjwsey3bfJnyytf7P8Pu3vFkJRQerzuCuXhhcT1hd5ZG",
  "key34": "4xibXQykP3s6oXVwGhUcJVp8QrbfhAnjrFuDY6FEiJTAazqi66XyVHh986c9w3L9KjTdVmf4jcr6YRmZ9bPX3AXn",
  "key35": "2gSfxaQatUT9H8rgzy7x1ZcAb2C5izyZ52EGgMdjyDUMN7A6RN2urwv2FwHphZeszJMnoUB6rSrT8CpaKNMcuYP1",
  "key36": "4vmaCGHBYkZNJrjR2XcDjuZ2hFPtVEXs6vSmPXuK97AN9c28sZvyKAUVkaBJFs4aJ57X7DTBW9xKWMZyZWZddcGq",
  "key37": "3PNvDF2giY9iYrqRc6i6iYP4iZfReE2uaCu9DYrGFnTW6XRxXbqTcQ212oQRiXqMWfkt5Q9dEFCPbgRF2G72BG9r",
  "key38": "4E4nkDpLxn29F51NMp2WrWavBmJpPRix47x5UFTVa47UsFne6Dhe8b4i9cWdvLys823bAyQ1FV4eD6pEDivToain",
  "key39": "63gN75jmimy423roE9dxmYT6mbgfj8pGUDyFSvKnnss4zBsVPVbo9Rmad9tU6wjq62gRcxJoQZYHmA9oHY4WMPWa",
  "key40": "52pkhTJGXPSf4LHrWKmmZMYXaP4tnn8asCEG5KqgrZMg9Yhctg6TkeiZH9ppjLFv4gfZzttcpfsiKbRzKbuYxCDn",
  "key41": "378XkxvDcGkTFpsWxHbg4tEBE3kzPVNLCzBtZj2YuFFaierAC7qwytz7p4ynybUNPH2XWcNkjZuLPH5yJBhNjCHL",
  "key42": "3qRoEFrb7LTt2tC6tZTb1rofAcdxHrb5KVwGusoiwCFSGjQr8foYyWQGt7LHrBMcvx9PKCVzcD53xtS9vXbitMZ7"
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
