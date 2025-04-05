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
    "5PHUJB1c5DeTnHzhcK2LNAq5WSczdb2zGsfrhkr86dgH63XWPRa6agEA5GsyWNaviEoZxTcNdJsyxV8xDA25iSyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDnEhadLYTGNMUCYSUCT4fp9GQcUDkrdYeFLZyKqkN3ntCjTw38VGUC9zoJEEkC9UbDVU91TXcnJ4Y8uainsA76",
  "key1": "4Y6be9doyF9bQThwp2KiWNUWvst9m4VhUA9oqqBv1PZ38nWBDKf6j96rdBPWR4ZcRhT4fWzR9wP5qr31BCYiQciE",
  "key2": "5UiHLBbEzcK53VQr4GJ1HHn2PBnrqEE3iXNk2fxpjrqzybHPGUr2ayPgh4GMRihNgEmCCFLJ14bEnUHSLBAzyfCv",
  "key3": "5vavwJVPb24Gdn1m4aN9VnTXEDtKZLoBYPCSEmWmAGSpqZ2XBMVXKzxgZhvUHjvtdULaBey8tM4WurWvKSH1Cq9g",
  "key4": "frn2M7p2WGGbdkvBYuaQAeALEjxqLXqFcV8ExdxxYKMpQDiwmRxXVPvvNWVNFhYBuFQhUGfhtw2fhBg8VPXBhco",
  "key5": "3gzhXGvQpbtTJ9mVqYRwCHddCJnjTBe7Pd3iqaZvwk7FzSEK39T4t3MJgQNUvUcPFE1Z9CUfFHkyVoETLQmKVDQZ",
  "key6": "3XNfo8kE3PBwhp1a1fDPtEph7hVAqHEtD2s5aFiuGZPKjLqtWY9EaBz1Xc4SsbMi1RYxLYTRmzfxVUg1sb8v8ofR",
  "key7": "4AAM5KiPJTcwUV7bS3nFiAQvPw5ttSmhNvyfoeoGyCb1iFWp38ufe9B3uxmKdmnfuJJ4WvqbGfHebow66fQrhbKj",
  "key8": "4wisqaafP192rUzqWYxB4zntXGEEE9M2SamA29APvaW5oMRbeFUnJC5c3ExsWiJALcDLEKz4AoxjnL71UJbUwaWo",
  "key9": "3qQirJmJSiXKA2KdQZUS6VYkSw1hrxFey23QQ8ZqhtgjtdrDoUEw7jzLepieb6nJgy4Eh7UM6bX8XSwRAeDwz3DX",
  "key10": "2WeWPVdprbjxD3hQX8VAhp45V9Z6epa4PkKn5TRkiEsadJBLEQ4QcJb8hNBkcppFW2mLp7CTgkViQtn8m8n9YosD",
  "key11": "2QvauS6qEdguRHnGRfzpnQZRUnUSykuXAnP6kUquETzJZzR9QXvtrjqA1dUamNpu42RzmsShUtmSbjJp8n41yEPT",
  "key12": "3rQ3fts5b961zZErFrigfYF7r4sVV7T9GVNdaYWTGupnRN29Qv9LWDWryFdtf6zJDog1Mxnmqk2aw98Fx88eckhx",
  "key13": "5aGiDnj7AZhBNqURf84W18KBi6CC3vo7bZzzi9XsorUPxW7LHMs8mK9oQxhzphLizDRyc9aM29CcE4fyjxeP41ed",
  "key14": "3tBvKWRwuvpNs92HrwL5Dbr3STYmB3vHFP9ejFNHJUJrEsFqdMxjXhj1YjNLwtvTL5NoqCH8pWzL67CB8VePJYVX",
  "key15": "e8ipM6xAJg6XVcmHTHj2TQWx3wtZeCNS63pxxi2PSYLqGTmjtQj6oUQx2ykD4SpdmW9FrLWZ6x2CRQ8ZzqwTd2N",
  "key16": "49pGx9D29EqXEEP5ZEcKsJ7WEcmFa6Nw4tmNBZ29gX3wZAUukczuUoxxJUJi7Q4wF2A5ETXwemerbfCsCKvxEJWr",
  "key17": "2VcBkipMQedqvUEPQUxy5bicbMrYEe4qU3zhTQJ7XqgVL1uKXGs6VUx22WMdpMQ1GiRcr25Nz3sEmDrbMS6h3Xog",
  "key18": "5QXoHxS4hQosfHbyqsdiHVtDAeqs3q9n3YMh48raBvQZ6jzMNBbNip7fj7Prg9EU5kTr7KNWAZa6CBu24BcHLjN",
  "key19": "5eaqSmVEnkxa3PawmZE5TrteCqNyNRZCE7bxPLVXEggz3X3JByo2pjyQ8Pj2AJY9NB2tV1KkhQSvQLp3yRkGbLzW",
  "key20": "22oNuKkkv6Zr6R9vVFaHHnBQKjn1sByVxEZ1NuKHdgiResNCvgMEcpMFSvjQPknASUafnNJHwMEcv9ft5gnpEChX",
  "key21": "3WmuKxdVFPybo9S6h2xs13VjBsYDarhS78LaRsLMfEoAnHGhoMN8sFafRq9NG678kwy5bzwLh9CHr1GRCKGZGjZq",
  "key22": "Cv9GNceFxMKoaBH7THS2uLQYY5AebEiQAwBoemVXVj2Jda9t2yfsWmX79jZKkwfASyea7wZc2EYXrjrUxTktm2S",
  "key23": "4dgs5YZjxdiS9gFdesfitZ7F9zBCueJ3LrqGqCZ6yQp979W1ie6vmVM9F2j3hX74L11dD4winGDrQaH4NwQhr42L",
  "key24": "4W7TNQRpQRchZSLnvSxfbMWzdT9ETewe1FPoNte1UK77v85zi9kRqy6eDZur2KftabGsE5k5m3zaVwPfqLKEFaDQ",
  "key25": "44o9MvRr73i21fuFDuczgK5hA5Vg59jZP5S1xEQgtxYBiFiExZEzoqB1md2wuby8ECGnghLX6ZpKjQgtNDyFfd6Z",
  "key26": "5XCAWzwp7fU29XskQDhWFpghqMbEZGzaFGp9ZCA9BwfLe8P3o2NfmaGNy1mJkYap43HUmxvj7FY5Vpp1xSeEY1c5",
  "key27": "66KsqsmpDSstfuNCJvNxkeDHBmXTeJjhq5QuFPdbuabGYA7bay2Zd9J6VbFRFtiF6L3cV1ibrfLrcPwUEWRZcCYp",
  "key28": "3uCfsNwV2wt32LwGY79yaeNjTP9tPdwavQ3wYHDDvdS3UeDzPdHWX35Hx2XsJJAkNzNwSKf48NBXycfVwGv2P1LL",
  "key29": "3J3bpJUunYmdXeyYTiWxW9L8oa2CE4geeAmWQxFLVSYC6PxNTxTmKZVEmzCBkqCTy6SLZZuwx8veUFVVF1gswr3A",
  "key30": "2byHAE5YQ4YHwYy1fWeWJ6Yf5KmeyLqs1HN1Mx28Ggd4sgyZNVx7hLYcaCkyjg5MeqasFxNhnbWqDR9bcM4FGxzk",
  "key31": "2d8dzgNPbQYfEo6bhCVEdtBuzti5uwV3iqSphi3mMVP4VJpAbyCsoGHUH2oYWNeN52qpqnugCXtMZxwbvEYNfUo7",
  "key32": "5UFPtC8fkcmWMisFMmmPXcqTyuqNUtCqn19gwP6XaUz9EABHfW694Pdb2vPEmT9PjAie3bADaodXLxrD8S6rc8UM",
  "key33": "56gwibyL47jR55nDrQfvqRUvdR2kczYvxF62vkBT68VcSNtpkDNZpVacqcrnVPMwzDUq3xHF8t3FFmwkw1Ha5zcN",
  "key34": "2RD52zoLqFsAfmVctAGj1rsCcgHmKqn8V3g1NLmg34snt7urwcnkox5QAWvtUnW8GZ9kihNpoEXVLk8mjLf8RNR2",
  "key35": "nfsLpkmKZFfd6PphyP2L1sjbrcasnmRFQYon2JZsq47FH75smSVqDZVKZMRoxfAoTGUoucScQd7D4cnZBxiHrmy",
  "key36": "2ZMDKB55bTqdQVrTHs38ouH2DLQ5vbuPBVT97ZCyrE5nzTSifuz1a698PBgmRrv4n6DyP32bXr3SmBfA5txzwk1w",
  "key37": "j9vBScsBM1go2xSjrQvDnM2iMtNRM68nWUoNYVgfapz4Kte27FFgjK9oi4RgPkssKQicugYVp9YSCLQpKxBvQac",
  "key38": "52EtWbfUQXnjPUQBdtCbjVCPa6fQZyt6FCrjJoxUtPYBjZz1C7KzbpcF2gDHRr6839vjJym25iYW1GT3ojTNt5zo",
  "key39": "2Z5y3gkFW5UGQx78UuhwmzNf5mJTNad9PRVrjeJr9APv5E5fxa77NoghfFsLZ6stofhvprVQLHhfJUDWg9XfMEhv",
  "key40": "2fmYCPHxAcXD8CgpszH5hheKKkEEQ6vLjsukMkUTJkzorXy8VRfuPYbCihAxif5qfNhuoyfzqG3HhKfiEjHkrpAy",
  "key41": "3yats5VMQGdtVXieVeRv2HqfQWS1DCfvXoxMwy36jZ2PP6AFXQvVWGz76v186KVgnTrZQv4pdPTbEwiTLRxySLhX",
  "key42": "38VvVPSpmUmw8cqHdSAPNTsjZXcPYqxuEsBzggiFH5E1s695X1JY2P2DfC1eQx95Krn2SwRLyonTJui1ywcVWvoB",
  "key43": "28Dg6x3mNbcQfrMLhTjCCfgowfqbM7vRRuzceML4viM3rxSo9c7A9gGYmTQoXQw9AtEjJ8hr31prUEqgU5rHBSoF",
  "key44": "2H1JP17GCbLsMdZAtzJcEy71cVyegzqAfwUaVxAkQ6QNWuXX6FeYap4KEbEUH1KFtA6dFhCGDbYj7JHJ1i59s76X",
  "key45": "5oTo4qsRYr9quUr4MrPN4A24EaufVwUiVsjRZDsAa3RdWCqM5TGsBdPNDBibX8LP2PyrWszZsz5qKnUwpz9V37rU",
  "key46": "3wJmPfJYhgnkBrhfNxWmdyFjnV51asEwSxVVWgvyJG4dHdnD1p4gHhSLgFPj26xp7LB5ghKi3WC1M4DJNVHGq6QR",
  "key47": "3YcrBGEfrDwrpP24kn5wu3uy9bnrxyDajN8YNFYRY7bnCuz5DdSbuidXGSVnHBneQPJpkmLPv9NbgorJVrpAkVvM",
  "key48": "ke36wVAxgLE33nM2t43mUNbaMAE55KGyAgbnQMkWCm8RPwb2P8um51jFVi9LU2Rfg7QaaPAjGM2UotHmP774JbT",
  "key49": "C7vRrQAuLhYEGr1W9QJHsKdWD5YNHnAruMYaMogtfNUEjVJtSJpGGj3KEKJ1ok8LaUhN8SDrc5bBM739xLNnW2C"
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
