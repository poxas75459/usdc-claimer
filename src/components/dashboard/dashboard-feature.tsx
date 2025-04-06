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
    "4o7GeMbf57Sn1KkuEws94iWcHigLtnMJ7oi75ausKxeuBLf2TuDVzhuPgWJ6dFo3H5BsRJGxjiXheCzoomM9XoYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDAsU6M6Xc7yxggMyQW3BUQMfBqiGC6osBfv7S1tf3bexrzpE2LPTNVYSmTBKMSN4b7rmmD8R7xNNVo7LpizQaP",
  "key1": "4nCSPTaVcAC9zY7zYT7HTcfRtMxTEYWwhRqtxb8XBrM8BqCkz9uGF2DQnHiWfUfCrtiwyWonRXDFnw3HjUA17EZm",
  "key2": "2cxMD7a2QsqpnK8RSvvPwYXVPy2euFyAXMxx386EgVTN9JGULw9CdqWqwC4VuUuco8Rc7YEfPpZaYEbuh6n3TtR3",
  "key3": "4Sv7Wf5uqEQt3iYuhrqA3FAvMYxCbBaULi6BaPDS2wQigSkHzWbGzjXqAc7mhkUX1zmKHp5AfmMCHx8aTxbxgRJr",
  "key4": "2ND7aErYXaeFQJjQXk8M25Hh1UymwBJ31caeR5ybAZeuNnkArtujxi83EFMfYtdDP4iB93vzcJKyr24XfMMPL9hk",
  "key5": "Fy9a1auHXWSAhYyPxVxDH2NkD2nqTT8dhXfe2wJmW1uKFL61XXZvsbrag3B778gBFwfn4E1JqZm5dztdiP8m18c",
  "key6": "WxYMM3mPLUqNRobv8CY6PXvGxSFyaTivq5bZsMxDqyznGcgP8ALZKJ9LXjxPuPwNpMpEPyTaxXaiUSsyBsieebU",
  "key7": "39u1k7wnr75MdZ4EaFoe8VPDJhiyPZqCUTiw9bvN1XvPi2y4oefDFwXmG2Uo4MmgmjHPWcKQaufatu6jMvZus3Zv",
  "key8": "3MMWPwAfunoxNUEmXwEMgkBoUzJ8b4gAzZqBvU3Gc8pyrhiQh7pth63wGqmvam9QpQ9KbV9w1XAyWJpzH4HzKCyX",
  "key9": "xz95SDBogLWNK7FbA5Pa2GmS5no1g7sZBKn8XBFwZ5amEE9kKxiSmWwexkmAkkWVz8BKtzL4ECZDzxCAVXjz73n",
  "key10": "44942ebkzUXFPYL7vKfu758SWzHihito6EicXe6i3bJ1VoLVnQj4F9hxppPvGvq2TDYxo4y2wHag1rDyjRmYgy6a",
  "key11": "5vU4qHuQt8nSyPHt5gPWAwnwEAT3TPo84ycNj2iHd8LbQCtBiTZEo2B5XCadPEZ9XrYUNWDcBuNsgVgh3zUnjFDJ",
  "key12": "FS3GP5d6TLv22omuZ8Hzs9EZJNGmBnqykL4P2xT4W4uyVDn2NsmzHE5Xxrewn2pN8vseLxJ3hCjqSJMDCPx4n9D",
  "key13": "34x9JN2xTSo4UTCm2Ngdo9oWupCzoGjmEKrmXbw8pdzb5MYk7LzG357uwnG7P8UyeQj18PrQYHyJfGaMZhzGgKHN",
  "key14": "5vTpkX1eYyiJYo67dRbmkHbhrLZ6Nd47gJoD2gHY1kfkYB2pnr4CuDjLrGfMAN427yuThwL5pJZNpv3Byipej6He",
  "key15": "3ujG93Bf4KVZyPxALB1Sa3oRdJLw8aBm7qMV8B1STxwkWuz4gtcWi9PJknTgLxGk8spGktct6xArEr8mJurArSdw",
  "key16": "2c8TQvguaX2tQLNdUsJbFKuaTn8fkCTuMgkjbUKXpxqqcQxqxteA3o4L7DRZokepCXtqjB8x1TQNjgZWCVy8tVRV",
  "key17": "3Ri1ybShVtND7NxGfUshAwJfEoYUSTMYRi7qjRtpxcaMd9yecZpR45JgkpTWDgmV2qTuGJGi52YjpPLFrBCUuiRj",
  "key18": "3s58N7A4nuaExKqe2Z3HRqNK4Xm86VBTxGMYRcan5MCZERCYH3kz9xGxGvvdfcSx3Mt7cJvsrt3nutZYxGesQ8DN",
  "key19": "4BFfcPVUExhtPANPwHDaZLCw3FhYwYoU1TKjsUYRXBoxyrk3sv5kdwPUGMtUAEvqQgAvLDCtkn68FEGH9TAcuSjQ",
  "key20": "5BLEXTTdrgDwrPFggdZSc4uH9BpKGVuDHF4v8oYLu3t1eURnxLwekH6meQAi549DymTp7a8EnsLMDiVnmVRH2LrL",
  "key21": "EEJMPGrU577kFiqA5CbRByEPFwPjGsaY1SR4Noa2SAFfNxst1akBx2D57cRp1Q2L4TkqT9kVoR6f56LtiPPVbFP",
  "key22": "4AqQnpzMLtBcYzhRRH89WQRJed44YTbNtMbwWQAbBiYZQ3VxrKAmvDa6yyhxxxvdxE45QZPmAGStg5v8HFNHBWKV",
  "key23": "2wK6RtbitXmy8dzpzLWp7rq8kPqiPpa35WsVFGQDoVN65c9dQQMrdGZSFvdwfpyBPa8L2AdJXwVgizjK7o9fXRHj",
  "key24": "5D52fgwWHCmXpyXUorJHQu2cRNDkuGxuVqQ2aBrDahAaT67M34Gnpa1KbGXPZRvZjZJGBZFULUMWg1Zwsn24uxXS",
  "key25": "5wbsFDSRTbaMP7QYc1jWCTkdYWPk2fuegsySt8E9MucSvv45haP17TveqiugxMKy81Anbc7dqz9Y5wqQYQaE9G5t",
  "key26": "55W97k14TwJRfLLHi5LvcLXqz6GtJcbT5vES3bHH75qZxUwdw1sr4ayg6rfBUs53tSQ74GtMg9wbx6qJCgzjhpZZ",
  "key27": "3DCbArR6yrWTx1F3GG2bAR8qJ1oKi8DVjZFC1z6Z4sg1d4ZN8Aq4xGnMGGskugko9iyG2wm5jQjtYMiQJDVQtC3o",
  "key28": "H7pQU1Cnr7nv7G9AuyKZ134qaDsq8qpS6og27L5mriT7K8e6W9QFj1oFwQR8hjkmWyM4F5v3QSe1RvsQyR8fi97",
  "key29": "64Cnx93LXPnpaVE7ZktTf1mZLCieCkAdoutSWPeR8kB4ZgmEx1TJM2waNkkuqeaXrsmZgCgek3bYFUVBUqtgwwXc",
  "key30": "2pKWHtCoowwuxjZtRB1oFYjkmibb2f9RH5tSBhcy4zge8HE73sZwCnbhr3h7951SYapvm1xiVYMUX4WDa7xKdyaX",
  "key31": "3MHuUV7zEU3Qc1wmCQYvDv4RV3HtsrfmMDV4Ka3TfLuTqBrzzwyE15xcqibgoKoU9QBAStpCD8GfEPM7R5uYs97d",
  "key32": "4y9KsvditPf1mftZD962LVtmjN7vG23w5TmgC39sP4BNXyxPvRbAz2x24cfyBgKaYWg3Wo1Pr8GuzzBFsqYxBDMo",
  "key33": "4q3Ct4hgS2BpmP5MzYx7pujPruDxDrpX9S9YfQc1Dg7Eb9fzhj7WePindH26ZHjbBnVM2DveKeBvnUw4VM9veFNP",
  "key34": "r4Wermu15vHEb5B3uCgEwaiDEVgrAwmPmpgVudVxLEAqDx9cVfrv7RB7CfWCmcQC49wLV7nFEcEV14KRJmXmHWh",
  "key35": "5otDxF52gZHPNVYZyEBmy6R2Z5CoDd13e3LTTzW16nKksTibit9JXx5oBvBidYU5oJaMDjKR1kqqr2JBc4s4zSLi",
  "key36": "tmtLiMkrzKEFEhnRZVnnAqSafjBq1oGVFFxbuX2zVxeoSTNzKpcNUHmdvk4oqqYAvvHtCu8jHGvVhb9XaMuzmn4",
  "key37": "4BbnAZngM9dW8Udsm6GBMJ6CansinBdL1ChiL3FjGR4SRBGCXNBdKHSNNqdgv8xzjwsjqZ4H8xcmcBQyHPMos3L1",
  "key38": "5vgeGaFMMzFHbQzddQhvHE8K2PLLWe4ZEPUxnTjQwxF7ti3VcGSNMs7ybfzC5jWs9cad4rio6LnNSSjnEzVHQz4j",
  "key39": "5knoQfsrSqga3NMdVE2cAZyfdCBkyBb289juKCrUFuyKQ1e1xWW9zsiVrWMH5W3UjHpWGqzRxQKwSRLwQ9T5Ybd3",
  "key40": "5hKzSEyCaLWypRp18zHBTRvNzjNtg9qxWwMUq91sAFox9UPu1XsMY5gEGUEydYuFhMe1VvaV5PKXFfngo9xm4Vbq",
  "key41": "XGhM2KZP8zTKg4nGt53HghkBBWhLXPET1HFmVPyTnhggb2FodRj3Ac5srXKnXaQp7LJnkhfvxCsuhPWsZuZVcfo",
  "key42": "2NAdZRNXVLTEb7eeMGZo4hhWHmjnu1uNzWBNjbo7AuF1XjpvcuXnkTQv93ktdKWifm5eHsJHJozEVJmsfPEx75R4",
  "key43": "AQWzAxK3ukYwFSADCuZyGzHrd2hvSFuVohQF5hwJJ92aVjVvPtHhK6QRqucAatdEvQAtf4ahKNZk9FxACkyrzcf",
  "key44": "ALLPvYpSqRNshwKUqiuL2E1Y9pM9Yz1GtFj6GDmpT8458eiH7tNBrBZ4bCbX9UFxETs3zfxdGcuy1SwCq7J4RZW",
  "key45": "4ckjZ7SSRhchBLexY8evmajoazzdYPpwRvEQ8r21YMj9oXT7og4JJSJLeXhxxASmMGaDMLSUBZa9rDThTAHHdU1P",
  "key46": "33oeggkHKMUUg4R2RkWsb2Y5knFYuXwzzHsjDKfsKet22eRSnmYNMt5PmxPpRdGJJ4xbuiSbmC7EFUCutDtL7B4F",
  "key47": "3jJGuT5CXTsA3oaGhKSjAmEHD49mjXBTfemcbc3ZkimkGqmqwDNzbKfdNp18u44KsUxL8FqSwHLLs6rSrqgbbMtT",
  "key48": "45Lx6Wc7PDrJfQCPEwvomaLVBkidT2hRsft3Agtg4T3weEZXarjy5zGo82YAw7QfYqKmrngXHK3pymVotJEyqkSJ"
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
