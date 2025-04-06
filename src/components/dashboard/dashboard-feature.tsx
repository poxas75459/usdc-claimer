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
    "4nyTqjiXn65ZGr3KDzJ85YuXYPyyznAHs8a4Qe5jS8TW7y3n6VPZBZU3waQrQiUAY2SgqkN71QtbqdV7XjtKQJdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9NmvfFqETE3ZW2P1g94UaQTueDCVYH1VsbURfJsuRtjrAW99SvUixtEhhXdeF8UWqx9YCbnnAsPcA176tJMgtH",
  "key1": "2dXG5HNefuozRGjowJKgpBWsFiLU6RA58FgBcMXzg31PVdDTVVMwemVu6rPZomTaQFzwYL9fNcHbCizeVri2sAx9",
  "key2": "634zwoG3iDYw943MfFBHNxSEUoDo3i39Eg8s4SjCZCrXEQ6AsbwEg2n7rdzmjFX7HP5hUivTK9K6WBbocjb4qKcc",
  "key3": "3r38AmiqTUydJzge3EEx4LPdzqCeKdiuA4sjWq6c9bMPbwZG2YWnAC9VSy2NNhknkvpsZksDXcgzYyc9RuN58GRo",
  "key4": "2yBL2vBc69qY82MiSPpSFxzKA9wMhPRPyDE6CbDL1stEesEcMre4xhhmGz4H2bExZnojHaqAw5gfMGQ4bmwQ1YGp",
  "key5": "guW13XMfv78aRiyvoGtSe9MhmvtJdGF3uoeWDYBUBq8E1jv279iXRHFvDBzSQ3QNiDCTChVDZhNPqyU5WCJ64P4",
  "key6": "5LbbvC4ncsPpDyaJGjdpbi4Zgqpk6Qe7PiPV1mXPJLNPyTyusTLoDZ4tHkkGzeuwAE15FuznnQfEv6aWzeqa1Bza",
  "key7": "2t2B8hbvWpVutcTLtyZzwvDCUJcahLjMd7rjMKfUDNm2Tmk1Szbek2tRFqh73mmVmZrH3Ufe8AvNv2vV1wucLu6e",
  "key8": "2PRE6zRyedUpm1j8WUERAmhivQWdnK5CWdDb61d6HtLxSnTiT4JNiADP3CnxwnUkG14hNx4xPmaKYyNAdx6tnbNp",
  "key9": "3MNuALXqwxDJmXFd4bbmumQcpMpbV6V9ncTrntCKE1qBcDwFMY3kCVW9i3b4tbRnWuHKmeGTekZoEJVYr3xGsKBS",
  "key10": "3PU6sd7coLxmsKFqhfgokJ8h1Jxi5vUnaj3d6pVYLZ3dSSgbKYyKnUWnnoi7mEbZ2eaA1Z5ehDRFLjfydySByGwk",
  "key11": "32FHnLU1reCMJ5HqcKbPKz1s2JUFVtrFqXstYT61vVxAM74staPAA7jryD2X7vip8foSPUnBxE7SWfTKgQMjfyG4",
  "key12": "5ziB9P7geq6wcgATWG4cm2BWLEQBdCCsRPLvEgWFoT4XwDE1qr3HohDgMFVhHR6APdBqLSAb86TUBKTp1CCBBBvv",
  "key13": "5XfeLMiTNUGPHkg8XgcRkKG84cFJ5EmdEv4Q4Wm8wpMNGEnUL3QxpnYVisj9ZiudzjzUqUew9S5bjqoJNu4UzhQ6",
  "key14": "53QcC1rBE3pDjQQK3MB6G1eqAdAXWpAKCJJe7LLmCpisEWGjdbCWgHzTkwp7BrDaE7vSNdfJkybWfv41iaePJvBv",
  "key15": "5dfcUn3UkS3Ztq8RudcdNBQiAiuQzGETKkkbeoXAZWAFGFLdYhcyAXpU4QuKZZAsP96fxTSa2yPSvmbDEwYVYb2p",
  "key16": "9YkpcGpugFiHfkPF5JHQLcgYjcHFCshGFZgRXTznUzhjdetNj1ey7qAeSZSfoGGnhSHAStMPwndPiNTnhaTouPC",
  "key17": "3KTtdVGve6V9n1yTvz2r6cwQDBU3VfVYs9bvU8SKoDANifcXsndk9hZF5EVZB5NCXyfD9VmR1Wf1fmXX1a1B9CCG",
  "key18": "9YeUsyVPqqcBJBqyK2jJgUWEZY9GBtexwY8n19SkgxdUdie53gpVnzHUXALifcfbUZ4hc9Dwvzz3ZA1G3wr6GYp",
  "key19": "5Evb6TXbLT2LfHu7KHHhEUsHzDzMbbenQhKxK2yTXFhWudhZtCWotxDsHZ3zEmKhcSofWmiX7rExFyHdopXH3Y6T",
  "key20": "65bErLJfwNjPkZvuExV5RBzexdw8NfdT6QmEgPrtf9PHpqJkPfqAVjxrZm1NKgVx7GVWVwUWHXNqTwLA86w8oifU",
  "key21": "5y6o9BvvXmr22ttPfpTdNmKM1kDrQRTHFtdsmZLAvU2hyNKUK2hsCRuoczNxBiCq2Z2WgqcZFnB7d9RaPJzehRNU",
  "key22": "3eTbMpZGF6Js2huzH8cUit6m3o51YdpTSBx1UngZssjKYJEvdZciB6e8QXK98U1WDQhvmTSyfKnRjw3nMF32Tgjm",
  "key23": "5GL7UcaeJFF5xh8Bmbf6XQPFWyFfD8GEJxgFCWWpe7PEwe8RBS65CV5iDwLUVUei7yfdULDSeuY6Kg4CbzjZbSD8",
  "key24": "2cefnLWW5GRsH9SmeiKaQqdbQiCJY5kf4YEs7cSZTYnhttd6Loj8AnQoNqpapw1oZ4HEoKbfdngSBQK6DXjZFTL",
  "key25": "5A15ULnt7wkogzCAhvHdinLVCbT4gWWrvUA9B9Ttju4nvngNffvrdhXSVMgywysX8VgsdDSTEzyoKgtxx2kUDpSN",
  "key26": "3ZRvuczKrG2YJVLsqGfytJnYjHLufVWbxEWVGXgtu4EBqaxMwQiTS9ULyxVibANQyGkY6D7vCmaU8CR3R1vcDBdC",
  "key27": "616BtW3KH6knrjYuJL6TYWBhMQCgpabyAoZ6DFKCyiYiFxhq54pxJLdVgYMzTXFcoUzHLBuGsyqXsPrNiNsEQMVd",
  "key28": "2eWMVCvbwSAXWQPvHENiuGExSDhB6enJJFvuccjAfx5jxPwFSdRA88x6o421Pfb8bQqFj9wRUWxTYP8ZxwBf4ARP",
  "key29": "3KSYRvd1HssdBRf2kLogbd4JhPg68coG66uw8yK2wqY7sFf75gjVP6B9AZ9op4RFisDno1FJNyy8JpHq2L6ajVEh",
  "key30": "4wDizkubVWrvHaAVaPWVG46x5fJdFREnRp8TNgtYuvhs3RGR1XWJRawD5m4Bmqm8XWWEeUSAZsJdaSvqDZamfN5v",
  "key31": "2XFKsMYqkBKKiyXkziSjHtCBSKRmwDFPkUxNhV8hnKhCNnsEETM8v48k1tx5KExrU3cjTqNeT32n9GqcLxWeRfiE",
  "key32": "62EaFJydCYRFr3eM13gASa3EnnPs4QdidtYdjyMakNw47GLAh5j4YYFycMcXwQubnCYuXP4LCV7mMPf4tHG12U7c",
  "key33": "49VeHfkGhtyfziAo2yxybvs2iLGBePcevydYXMojUzTQRH3pojL5Kdvf6VbnrPStvFGuxCe9AE6o7Lmrp9u3xHXH",
  "key34": "3CdRpErSX9py8wHJgA13fgJP2cKwSpB8fvkjwAzFCuVCYb3ox3EaRrsNFgB5JKwPwjNzJaq82Hg2WVyiQahF8BV1"
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
