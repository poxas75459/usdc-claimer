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
    "AKYQoQa7GfKSB828aHTBQornc1kKb68hn1VnGTMA9KsY88zhXX3LjK9cBijoiLiws6UoRbAczJ8LHhTG1wDgNy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296HwpaetmcvdQhCzL1Qs3Yr9dcvb3gnpBy2jRpgvzFA5nn3fT95e69w7mzFJnjMDDZCWKEFJhQG2DLjavneFsLm",
  "key1": "5uL68a1dX6gEAfFrE2Ke7q4viBpd3w4W3ndpC64r2ksMtr9mbACWnJkcRCNXv8wYo3fiNTNZ8KpN2xm6Kixztk8s",
  "key2": "2CGH3c1V189dKkzM33yYFPMG3L32eQPUeizTYExiSQF1w1axJHQzd6f8KSU1e13vWfFpdeDqy9AZXFodRf61YtQh",
  "key3": "67UvhkiUEBn7PNdorbAHMnK6SjCKSshPCQP65nayjTyFZknMdmpNyJJddbZ46gnAX3C2XPkeFiSwEwmxXFoadwgh",
  "key4": "457MXRbzGpyhtVRDnJcC1ixssGE8y69nxskkJbArS9UWNLccGk1sChK8Fd7xisao4et41dM7fWe7P433NVuuf3Qa",
  "key5": "56o6tkfeVsb3QZiovcYsAoCfftsGpPiGBfiwjCbjXARTCGFGdqz7di4TdUwsNKZLrZLozhuphj2b3RgE9sh5frfm",
  "key6": "xXKNSH3Dv7U5gEYZGocsBWAUyzSkWKRj2bWHEEibD4TBysMN24svsDFTjhxKU1q89nkZacicWgFHovMwr8f4ZiR",
  "key7": "5wy1PoGxWaCgxqoMt1hhfZKqMUjHwQiCfJGnM82ZqegwJR5rKPicrvCTQLGoZ9ym8DttMdnkZCXGMVc5Xdrcw9iU",
  "key8": "5TpiKRitx99Rdt5AxwGGW6atKGHMsxneG4FGDGtztoXYEch7sthKARkgm5D9kbedcsS2aJY3eMcVXNpvLQd8XByA",
  "key9": "363rPXykEYp3dYuAzESDpSd2eJ3GhP4wdSjSd3dYkYfi3WmYiB17cZ3ddPkwqRxhhGNoS68x7CaBxHTmnRFk69yy",
  "key10": "2TvYzYz7cQuWXQ6Bm4ugyCUj1hggPfsnhzp3HrQMsEgGkhEKJSc4efMiDFhb4i6bDpEv7p5cZDcBss5V7UG42E3s",
  "key11": "2irBSZRv9ikikP7f7VDU6KDyBjRbmSpoRHmuhoCUf4BJnn3vbJZckgYzzHrQqhCaJ9euxanGRBGZbMDLAvgU11Q9",
  "key12": "4gNnAbBQJ8KWsnuBdETgBrsad5aZ57Rd2m5DSHeUKt1K3HcZntE9Bez8GLouSTTHn38ZizEurwavJVoqmXx6EwcN",
  "key13": "66VKLz9h3aD9Uj3Z7EYoR5Cw6gVAL1EMdmb2V4qUGXD6bSGEAZdU1ofG6hBsf7sKfDfZmFnEMKURBtja3PfrNw9v",
  "key14": "27G3sc4WGPZkqgccprD2VjtYzcFQCpvcPk3wvRApJ27imAt4rsnU9ZowndwdmBdAM1wnxEn1qjGVccnQ6MzVNE1f",
  "key15": "QHsw2rUNGUTNED7BisHqTTd718dKFVd9PTfBWpvUAY3odvciLph71jcUbetjuzHpER4RSb7TRUjRE35bCBP32Dg",
  "key16": "2DbR5iU4yQfsXF1njtq2WN4LhuzhCXKAyxN3WiYVsacSBEBT721nA4ECc3EeDp2UHJTMSLzvfrhQPXHHhoUGfwRN",
  "key17": "2AeVkha1QTN7HDZ2WUyJgS16KLBkMGAfgtBq9ApWxVnrsgBVhhh82QgG5AqbNaQGoZ49wGtRfzR2LCypM16vzt8y",
  "key18": "4AvmDEeW2iMkxsmrPNaxRrpchGvNNw5ZJuPzyVEC9CsTU1Jb3WSNQBdAvd7P7rbeMj8rM6aqkais1pzvhj9Q1dPA",
  "key19": "5RB3yCbPwUcfBLcsPEhN4UmUGD53gkTNrKraByrKTaa7NMxKYzrXrQfn6DZPdchH33xoN2HQcDRb1Ae459MA2BP2",
  "key20": "2Kwsn5WLhQEYY46TEyXzXZ5tJfFccVKJHkAfzUnXhTHfatdF4N8rwvefD1mfEVu7We2Vzy3bBNX9BZbtf9VTSTP",
  "key21": "2cHKFCtd5ypEeyD8nuG7oTDa9eHy2vAbiJZEiHvjHvvkN66LRAZTQSkdTxCCqzcKgdJMTtJJ5tfZEeBduDfjYoTv",
  "key22": "4WMqrpQWGjTv4xL3DwxB5VDW2PukGuv4bucK7EYZsVZTtUam4b3KCjFf1wJ1eZQZbYBh11C7UTC6VuM5hGRTCWjG",
  "key23": "3JRAEMTjAgESGqogDFxbXUziRuFVmuHhy86W6uSJcGj5vxrfHLjHoM9BjHRyPpN33Dp1inAgt8GgXwKYXtshHPP4",
  "key24": "2rjhk8mNz5m61jHEdo5oPngTKLp8MRHZF36pPWUkshhUDxoLZyhK3zxBZ4NJQNJNgymoHyAYJhuKWcgtrUBo4Lrs",
  "key25": "2mZxbuLrxCjCnCJW1mqMTn8pveopc6xcuDKSvmizsRBWFwzjbcFRSt1HXSX2nFdWt3yqh6CtjRXY5m7NFV3wks8H",
  "key26": "4d873fDLKG55ReuV4aV4gyqt3CHiod3W7FVWmFu4P5bqqRx91Dzb2c4fTBM2dB7emjVWA9nFtr8otHL2idDgT7Wb",
  "key27": "JP1z8rZ6CFX2RrrU7pGWmgje6YjYEAP5s1W7QRbYC1vjmbC42gc1ZehcK8DfCtLczNdff5WLXFzA68KbAi8qE8Q",
  "key28": "5TkGfoGDdrKhY4djmjuR7S3CPSFb7ETKYc96tSBnKS8jucLWaB6BL37VyKxqN33XqhmDhpK2JZGfCvMWDPDb3aMG",
  "key29": "kwj8FC5pKttXgjNnY4AucjfEjsBvDbhwhGoP6naFUS8r2vbxpmLRbb8S6zE1bovHwr7moECUXmVB6UvNU3L23bx",
  "key30": "2jy3UL14ZqMQviDHMS1JCKmY4jXgcd14QuTZnX2wb5LhDkj7iNXovZues7YQfiY8EVxtKNunZy3NbwxXdc9pL2CG",
  "key31": "5oJyv4pLgGEwbiwTe35JqxyTCveJAT3oPz4G2nrpUdZws8ZKf4rxUKAW4SNQ2BFURm6CJYf9yGaWaWahq6tTUsnd",
  "key32": "3HZdTCtYKmhGqDsMxmWScrvJeDRF9WpXsHJYKAZGQkLs3rXsmNWFZDFGa7dYqr63VcBmg3Zi1fJ4jYk7cLxWfgw6",
  "key33": "UDvvsC848HaEFNX9zXYBmJNdHfr8QPyecmmrfQCFkByfhaMDca8A91ESXW3M1uj6jgW86EKzozpRU5MS7vYQTNU",
  "key34": "4bkeZ5qUWnZeSsXxMMZnG6QRsPs9x9zcdXog7MhbkTVeL7xzxyowJA4RJYQZMfKaPKb45psKpVBcdtT8WKn6rhog",
  "key35": "4wp9CQLCmYJLTpVU6QdFRMP2QCAKtzbz7BoDm6AZp7hXGf9dG31eqBmUergqr18GWqYN1Cu2uEMrA8ucSnw49oBo",
  "key36": "528e41b1ZAYLcf27vWToxfBX7Gs5NSoY6AvwTyP83E7tw46HZ8ck38vCJLz2KDQUZt69HpeDJqxydyNbY7FFFDNi",
  "key37": "3t4FnuKNv9N8n4hP33jms66ubLRaUgRVrcF48NLJAHTPERTbmA2XqkYCJ2uPvst9k7KMQR3tfjdYKzvTVQs5MsLL",
  "key38": "4477Fd6sfPyWELYqLpmE7UjHNVeGW46Fat4qaumLdcPMAeqdPCSzQS1rFnVupoWzTLJqcmRYF3XGPwKPXm97zv8Q",
  "key39": "5KopooZTi45EmaEpzYeHNrgyLPJBiTfDCjFJPry2YeS9EvFWEQb6jSqWs9JhFct9E2Nv8WKqCXQRRPzB61S8ifjL",
  "key40": "VcdP6k4Q6Bnvi8NqzQ7LC1Le8pBNttGWSjyEUoxdXjLvKMVhb7FqLgtgcghxPBLfGetdJbWUvbNmnL6vRkuz777",
  "key41": "5C6JWQURq4w1pcinLdxDVxgMBW5oAXxeUCguox8QayZNc3cosZ1KVrHa2TusuzPTbHqBK6tfdMfEjBVrXFKYXhLA",
  "key42": "5aenK3TASJKYBqbCH9NZTTJZVdy3raW1P2N4itbLtoQ8Dkxf7KAoJ9HR5VawM7zXHWp6PA3pm9xrjSZJ2i9UAhS2",
  "key43": "4CG7MNyPE4YRth2c8S51uvp2H2ueuC18tnT7QHh8ALUioN2EWaZq5BBn2hBh4nVW3rGRZyMkpS93PH6n7a3mwjTF"
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
