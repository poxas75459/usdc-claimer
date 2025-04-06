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
    "2XNVZfBSz7cs6DhN6UEn5Sna9MgyRPB7RhEruQQsQMVr7JUnqyo7oV3BC5xErGuF7NzBrMdzcDfFEa238rtqgQVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217wyzWoevZQi5Q4tza5vXf2thdmqGApr6Gy7bBJv1VxzpWpfBk3ekv5e8YeiJmMGiBmueAVE383LQRLzGBs4kAj",
  "key1": "3uy7GFkXtve6GSk5Lu8vz6hjTRG5GfaRDGeVBhKcQzXfMCBNjwRHAgmsKSodiGEpfUmh4PypiAsr7GsP4Kf6sMpD",
  "key2": "5yAAW2TW8ksLX5pziNQtACiF54swxsFpx7N8ov4vuQPEohx9aq6ZEv3h2oH217dXN2eVojSgJpxwCmpDVgpLsrtp",
  "key3": "657kE9LNn7iJZK2viH2oUDG8QKNuLU8VbFd6hMo7xx5pzDcvfF2uTQNuLjC5tuPdJTmmG6AYVPDiTpsStg5Sc3c2",
  "key4": "2kTcADBbJXijvt7oMBxYdmDdM9w7TdPbkX3iFvSAAPpiv1hUF3mVZqrEYu9YCgt3UYH3Eb96wPWuehyZgyRYLTyi",
  "key5": "4mpXQr3VzPYzcLLoa65mkhTZJsYgo7P5KvsHf6QQHDP9qGKi6Gm63kaFaSbbQ91C9bfCMwGF3tHPQ2BQaFT3kBDy",
  "key6": "V7Rwb6F16oQfjUUt5oTL5xrV18czaHELqSXGNyBAyi5yHpBFehv3UL55izWYrPvqi7EJE7RxfF9rWDxoZj9bPEv",
  "key7": "3EcsUBFYHhigenatBXnxvL5yndj1ZXTKmtBFcBBxKcumd9qGh7K8PVXWUSWDvwHwq2S7v2FR5e2fMboeentsnKBB",
  "key8": "5vXnk7T8iG5yydJv1UM4YTpvvkr5Q4tSsRAypaiA6rDrCJXZRDYB8nvsEpRR7EDkVv2vit99zWavFA5JuLmmf5Et",
  "key9": "5u1mjBgcYYXRLvAbiSM2Rehi9DQQsWUgNr7yW5mpFLzsnjUJSuX2ekGfwGqGiSsY6SkMQZXnRy3qPBJjEtTaxeHf",
  "key10": "4pSJ6FLd6QMfgKumDxtHZ1Y2aU3gt4UAJu5YUWAPN8WaE9FuVDAJ6r2NAKMDmoDFPVTMqYneEasYthqCUeXwbPP8",
  "key11": "2CDi8TEtKsrDXtCFPUbqVX86nY85mbWjiwWEvy56hsnaGTAYRBv1hNkSefVtzRu45syf75mbzqmQk5ERS5KnSt8h",
  "key12": "31sB7QdYJmsUFeSTNnRH94b9UmJhEj1w2eHwpizJTJGxDvgddNYTYRyVWKGHmfaJvb7C2DUYnR4b525nCSxvVw59",
  "key13": "3MeRjT1WC1iY855A8N5jChw18h2S5WB1zCZ49sqPF4gbp92vNJaeGYGqXFj651bcwDWEycGAPkoB1PVWUbSNMSm5",
  "key14": "36qFAbfuszgXPczvbysfixngLfvoyoh3r7hTCw34z1yuUXCoFfo9WwrgUJx2HPERGsd9kF5Bo8mV5DbRtcw9RVsF",
  "key15": "2mmSxHtxweqZrU6K9mTYFQMM67jQTtCn2Jd1bGweyGMz2M1Hrb7JAYvLAxDt2VA2DekdsgXY7RoCZFbNVJhq4oQB",
  "key16": "2apHUJLz1ahSrFzxPLWQC6uXAtsW2mtjJQw8dmrfBXzapzZM6DZrR5PatV7J1qeVAF5cZHXH7uueiY9FVzBxLzbW",
  "key17": "2eueWRk8TNJ2gv2kYfwYn4UJ7h1yyZJARkFazXSN51HDtYvPoZ9fbJTJnJ4geWTkceE7hz3FLZzL87qSnxRM7DU8",
  "key18": "23oyNfH8VZZqQ9vrtc62Br26tFAerXWt6kH47xjQSfxrcSGB5EAQoaCxPbUGSPDYd9LgXFoMutdNdfpmww4JxZD5",
  "key19": "3km541YVRxaS4nnuCbsoxPphnAvm3t9mz7pDheCBhjfB2B1RAVRgbTX5jZLaqxxz2sk9BVVmrfVvKkif7bj35vQU",
  "key20": "3tpL6kXLqfZ2TYM4TZSioWm9UUo4z4dxKwXNFRCxc6eQjXuugyFLfQizmUVtXPoij3N463Ez8gvXnkW26BmFt1XY",
  "key21": "34zYAMV47QNFb75kSj9CWqoyWHsfR2syr2FVxvto5hUPPdb56KpNFTe7zUNgGAGRh3rNqs5HozFnhNfXb9J1xR79",
  "key22": "5zPoviWHEaqQqwjSYHtp9W5ZSsR6hPhUbsCr53PESyDM9gAozTBUm4hzMUN792APjd7sjFMz5P16SvB7N8wfYn3T",
  "key23": "3connbZoutZHBjJthNXXuW3qppv2povNuPDWfGkdxAEJeMPr4WVM3RP63vPiXmxYnLRcjQT5rCrMVCGQJmoW4tdS",
  "key24": "4zd5NrW445HLjU13BfgmgKeBZmx9943oyNpDA82eVzHm3XBiGPBtwXxQGh212mUtSmvJ4TPdjMvTGPZL4ZzqR8EL",
  "key25": "2WvrkoggwmUjLLE6dtuznyQ3iPUH3qyVjRUjQ6DqtFqeazonpSWSQ5j17V6jioigLTmVBdxjsko6MJGcz9nadD7i",
  "key26": "5MUsGpbwXBvNHDgWbdAXwJnRSEe92eaiNsvoBSHspuENgFn6zrC1PQWmgC6GKijpaERBE35zAdLx7CHQeP3XpeTr",
  "key27": "4aj1ySJnB2Fk12PjquxK3PmrTUqrEwFFScgHA3XWDN35B3H1gJ3jitGemByYc1cvAZ9C4VZLu3qmVTkBAr883Vqa",
  "key28": "3ZPuuDneoX7HQsSaxSLGz7J3dhVsmxjo6w4EE2fcmrdpH7ofqJ8vmETgJmiuZ44ejoieuPDgGynn45i1N5Yiqqbg",
  "key29": "5zeoBWLVrUopmtyagEYm58Jh47hybLHCzY4Sr82u8KsZ2j5cKRySgqfL4NpLw2wEKz3gXkBoiJCrWNwrU3WvkWzw",
  "key30": "cfeRqaN6U7bfmnhDriFTcosD9zwbXgBANygkVNnGFTkdTshrUr1YMAYkh7Fq9AykW99t9Rg8qvMJACRG3F8VyQG",
  "key31": "f75tKdoQGqBiec919sjxzwT3YTN6kMixLZUeceQMNCD3fhkq2hMN9uYZ3bBHiWWwWKD5Qt3hkWL8QuCUcFGXZuk",
  "key32": "2DZUgWNnPFN6eyt29mHZ8DJ2DSP4qGhKhg7Sk8DSvBqvYzwfDwGF1au2xJKhoAGvqPAWyN4xz1QiJudi8YNvZ1sE",
  "key33": "57gdRqVESM24r9YDXdqDgt36jKA2epgXzs7HWDJAL9rLek28wfzPNga322ejEFtzWNSgmLQh7H3zqQahCwvHd4NZ",
  "key34": "5yNqjitGDdr677KCN25o5B5maWfxHL8uyjucv5rsAwB3rCeS6DEPPZZEmUmNNFcdidAqCC9qyNTAztj5odddh24w",
  "key35": "29jQ6qNebrB7ZbGSXYorDvfXt8KSK2V3QKQ5xyebUqTThxccJkTNxDaqkuGMTi7PfPdNjww4uZxYgmCKovfjWdSL",
  "key36": "65Et1MSb4ufd9kUbHZS5YCKLf5c8yUwW4ZabFccjr1w1YknBeV9hnxu2WqvLB4KhFGRWMjjtso6BcZuVJjkRvupe",
  "key37": "387X8H8v8jrT2S5A5Mg6EfxJ4eDdN83jiVSQKSqKjZpheLbWCZbWtP6cmX2MWs1iJB94PYn4xQZWvFBtLvuM1zME",
  "key38": "3BkbH7RRg1M3gX6SwVevwPZJGH6ishNpHNZAcDud2d4XH6PzqfQesy9BewybunEv8uPyezRuxfqsoNdPDDdmCGij",
  "key39": "3fy5iZkHqo9eygdajXos7MGq6nMp6xdQTfx7jGUfXR1W6a3A5VqmtMZibGfSW9DpctjLPpJsxGR3V5TBaZFHrxmG",
  "key40": "MwyweaRJLvKbqFFHSBgVQVNPxbMBZp81kV3eEaK6Q3vDHM7fQiwyVzKZmXZ7ZKgep8H15vwm9Ed6yCK3NhYa46x",
  "key41": "3gSuxGyW3s8XeFyXcAgsaERqDRPvzS3owLuBHFficw7ZMMgr9s7LZoNwymWGbpg85hwwnFsD9nQLpC2XFFHiP5og",
  "key42": "HSCsxFz8wHkj2CTgYu169ekERr7AXddYoJgXHbXbzdzndUa3RzSKj3FPWTwmgpgDHe1YH9CUoBskNBdBTcFSKiU",
  "key43": "4u1rTRq3DBLw2PKFdR531JZeabHtvfmcymVdJH85fSxccRPfcb5q6ngY14Z64ybFJv7WhNU7TTdbw7hN7AbRULjJ",
  "key44": "3P3BTuHfZL98vXbdvz22m8hzY15TAkhKj1Kkf4r7qFCK25hdDqPT4Tr1ThqdsuyRHJLV1ozGbr7yuzTe17fdPRTi",
  "key45": "4wSK6pL6CYeD1aGFCcfgqUQKrTkZJXHCSwkPNG8XbYiu6WKwgSQMtHHDB4V758YccExRNvvCb8t5iyqbzwWgKQzw"
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
