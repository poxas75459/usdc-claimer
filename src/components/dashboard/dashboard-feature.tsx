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
    "5ZRzRF1v525uEKzcEjtiaRSREhZr3UHKgZhrx4N6LaaxcK9MgjTbRp6c4ajLqeRZKhYgodLbtKLb7Mr7foDKEbdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7sPsLMvrS2jvWbAHzmuapYwzHUT5vkaVMA3X4KRPkzzKuADhB6987PZCdNHNZFyukMbu4aBwLNVukak5WKYppBX",
  "key1": "kduFHSP3SZ7DDjaRPmNHLAznzpAfuhBcZSbsBaKRYy6zGiSoyWdsY2Q5NPGoFqhr4LoTHfwqQp1MG1AwzdVXGcy",
  "key2": "4Lv2QEk12TpkM6DyKmYzUGdEmCbVCxAh7E4ye5Ys73g7E5dcvS9iqFn1cwyP46AWWvFFbVPzEQRHyt5zUfdefU44",
  "key3": "5VpCLbUsNNH5oPT4QJayq9joJ3ubDwyGwqVNfVHWKEM7UPHunUssC8Zx4XxMPnGHpGiJLgauqhiXF3MRg5CF1Wsz",
  "key4": "54LMyN4TVD9paQPA3kHAQ6eEnEgHRgKacMVTYmUqZUraMEvJYXWn4Uqyit4Lya6UVFbhEuMdCaLL15xPZMnJkTgm",
  "key5": "2Rou6DR4fQdZ6gUFS74HffScMedfcMF3768FpSumXtJr75iCHe5rewWENd5Xwu1vV9UbTpbCFpuK2WybW2e63xLw",
  "key6": "5DuHa15hLgectVJoRWpUhW5xR9ryvPdmDzXp9Yyxn8tQJ9MBpFWdVcysfAyAZRsHEZyrnRHLLDvVQzk99jK7qVQV",
  "key7": "22dz2HwaQ6bzdtZRdNzpSGc3rkKDWzPgEyvRXAth3KtbKufHoND6RJW52NccrrSZPSs8epUpLn99NETasuxG8wL7",
  "key8": "4kwU6yK73su6uPwd3NKi5CgCLTD4FZKePgTHgcqwKaZ93RS9EbJ8k8Njy5rMRQepa3mEJ4BjHpeYcSKPREMT9xk6",
  "key9": "2ky65JP7ppyZ77yCjycQft9n2EtmqTGZADdfC9dJXkHzVvbEQBx2ngpQLnDcvvsJr4qMZ4NqibgpB2SVvp2AEP7J",
  "key10": "21EgKnieR6RhpBi3CssmUbpfXJbfNN6rJXeMqvb96Bt1x1hHMkB2PUDPkmpvk7Uyq19euKWafr2najjfiZG2SSH7",
  "key11": "3fQ8FHM5E8NwuS783HhALQWNFSWTKA5sqR512xXudeN7aF3LaTwYAoS9zPp1bVxWPKje3FmFLSEd83zHXbfWVBLC",
  "key12": "krU1AWRzQWPGxEFJsGrx4LkQjUsqnnPX15ze7Nwgweg8rDFAfHFmNAKx5NaZnp8hhmTFg6jSCspRoEtk1XfCfeS",
  "key13": "33NSFvAzZLKdjoCaPoUtdQnNUhkfQZFUCKwtHvvjZuLYPd7adqt5v7jdEZTVeEsbqtSXjyfDWkUTFKx71Y66kvGj",
  "key14": "34K5BeNPpxEBTsTFdEZTkm28WWt7VPW8waLgvZvt1H3ebdZt6AXETYjJ42A1iWXbQBzFEiPYxgEGNZdcgSKsC3Ub",
  "key15": "4HXNDTXNkZ7ss8T8kM8hCKkihUKoQfzkoy3GD2iWuFQ1qEBsUjqERjxk2HkfxAcTz3zK9oHTQecYem4u9Th9kBfN",
  "key16": "232EtAubvoV8RN1UUsRopnWSfx1ALtAmCFUwNunr53DHzzgVAdZYzwB2ZNfFZwwfvDveVq8bxhxnZAkS735SYbkj",
  "key17": "E1XzUjY2qagjLoMvpB9vWdPw5TNCGropwF9PHBUTKSimtBsSKeficNF5omNQP3U8hkXeK568NwTUc1kSg9GcLaX",
  "key18": "2VSCTLdPzsof7gYaD5fMXx9skUmM8Kf8HioCQJWwAL5sZr3LRNkAU27jUvzpPKuF8PvsnKKfr3JqgZY8mx34CuPN",
  "key19": "3Trk7fs37SaFfHekvT332s7QiEzV6xmsnsJauRnUB1ESGHzcbv87VvkBfpazRLG4LE8LTg338wfLjf692bGHdLA4",
  "key20": "5CPXdmHqchoVHmjhs4KNqCW2inpVMXiDxSv6c1wgZttfvpcgzjrnvdoe19zx1ETefs7UENsfDaytpneZr3vMYorq",
  "key21": "VzvhYnmBzbU4Pfythip63TRpAnKcYTYdrqfnLvKjz8QBwrKeA3B3f2Z6LCXMU68S5uZk4F9KLRmXfmWj1Hd59km",
  "key22": "jkNEpd5zHS4us6BQUu7DcsbfgdbQqk2gcvFatLgQmSxGgt2H69RqYUXSKuoeqR1kggUADYFpkRgD8KekGM8vFt5",
  "key23": "4rFqMpM4H7Bci2fuNLrxwXmrJw7GFhm4YStj7CBfF5RxMAYLKQ9iFz7JcWxmZMPYGskVg6oFpuivQZu8EwSaRhHL",
  "key24": "3pUjtoLA9k4uu8X9qNTRhGreJvvMkypNXgS4L43f55jJvNeFQv3h1KEphQfKkRjSVMsx7CEmttyj3w3oV6QuBnWs",
  "key25": "34PhrUM7TJpMm2ErWe12sfQXMxEhjtg4MiPUYRmGRzfkJanUDhpMYK7YZEtsgzyvjMHkLy6Uigby7VCxQ2X2sEpp",
  "key26": "QgZHAdbmtzqw2c4c6AXfMY9oEvDxnunoxSS5gc5UvVSkPp6KsdzMEVcvWtYHhHLrQwJKRVQR7E35Vi7WLyqePXw",
  "key27": "3rCQv2jWWjz82Dgi115bMYe3oWDc4YiER3vUWVf1kCmCUQpY8SZhTqM2X8BPa2ruweNkZiA3WU161Uhb4hz3oTXg",
  "key28": "4Gx1hfcjd5ii9rxy3zrfNZQhLE1FyABifQgHrE2VUV2N3FPJ6WSZufnC5Yyw1EVT2hPtDvCkjzKHjd7RoVA9ASGw",
  "key29": "4YAzdsV3BUkG27y8Pw2eEzQfudHKqaC7sXLSPejZWGJEZRbAFpdsjrqiq15qxwjVFTkqKQYTZdSQgQdSQE1hjRfA",
  "key30": "7XxHXq13N9rwXSfpDyeZtXYxYZHdvEQUsjhtmBPteHcgXNBf2ZS9QhUKf5XujuDDd5dPi2pu9DsVrvXS8ncyJb7",
  "key31": "5nUo4BG8vGZnNVR3ySwgJkkmAzjFM577HniAb22SMJzhaKkkaqo8EAi87dPUTpbAS9m9VQBywiSi7rD6qzP1Stth",
  "key32": "2Bx3WzbYTSkjYEcJAJNMMMFfrJ41a4y9tpGka6LrqmdUeoytSLw5mj5mWFawB3S113fq5Svr6qPEyJaUSvNXUqDS",
  "key33": "2ha2pRmJueNAPMoQRQFaXQadWJ2xkVXrbSyNfsyyhfVUi6iKR4aopStVsuNCsNXNDEkkzpdoNXa7zQTAajp14k46",
  "key34": "23YCekNEMoJmdHW3p13DLKNQ21DcfHz754NEpx28CcqPQjExnBoYi2UXcSa3ECx2geYpTGdL3jwoXEsBJm8f3rg7",
  "key35": "7NKzpqqkL1jeiNz9TcDAikPHryogo83voCjPJmMDcBp5Y8avnfF5QXmA4et92KNCjK3UBHGAejM2zAmbhSyrv3G",
  "key36": "56p4PpQMAC4ntxR7QbkNiWRiwHLhfSDb42w7V6yty4XRNGVBmZ4dJUQQ8ihp6qYEX6ZjGHCjA2tpxBrWQrDd6VZB"
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
