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
    "5qZMxEUEPphoaWHqW3KvYDdAP8VKp3v2gcZoB3sVR8m6sj21qdwRfnQBH68qGD4PCGCXn7VdXXGctwKrRfPvJUMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxytDXoANaLpKfdmBSmcGpjDT94FANZuocxDEWPiRLJb7dk8BB1NPJy5f9qe4EpePfRuSt92mgug98t78ay5FD6",
  "key1": "3gAc2Hu4HTMRSw5Fqi363BGYbStnU3koZxaq2CSnhkKCguAVFCmHFoTZgpfKJN4uRgdwsfV3h7JjQ897JQ72qYu",
  "key2": "5MrpSt8pfEUsuSRepdY8p4Qz2by78NmxT2QqT7sMPEL6F1bnUDfwyZT59hojkynqZPEMeHvChdaXVAFkenFGuYQc",
  "key3": "4i6GsNAJ3c9fY2z1BBcFQGKgDe37wFjACb6uFsGHnkSWWHb1wn1xwWwSA1HeT6WmamYsf7cNz7aoPvZ6QgPbtQqu",
  "key4": "5r31F1xEiT2v5bVbbYzYbrRaZU9finP5DszWDTnV5Nng6WE3r6pL2TWPyE1qT5NV1FuQ2ZjH6ntneHWuFmnCF27D",
  "key5": "2C88kSgjHURtFJVuMPytXnh8j1NvhZ4zHT2fcJ54N9rwTBktXjvYjfzm9ivKspRPpvvjcWkmPNKC3RtUWsQvtBzy",
  "key6": "4ySJDjtGWsqefCtqewksjGNgg464N1qwYcd5Jhd8UXsckepGck3uPhCmDMYdMqXVNpnMF9UDAyhZgTks4f5J6P1z",
  "key7": "2uAoQL7EoyZSSR1gSbsV73LGkjGgf7CEAM56E5UJ475g1XUwj3nzm2DihvbVRFJ3ENYYeb22tEip8PJNA4kri8Lz",
  "key8": "54ARuni5RMeXfHDRcSPRjAryPXTP19xe9Uo4zS3AupFDhM2Qei5p9hoJQs7EZ9F4qPdGFJUueN8WVax2VxGTeLnS",
  "key9": "2dC4daq8mxBtmtN6NzQgNfV5Jpdg8ByujyKRC2SQM8joQpFycxBVytQRBzMrW78K1erWGDwAQaLuJXjii6tBnnb1",
  "key10": "5XL3Dnd2HEGAVjDe29uRPUDG5wpBLj63E2E4nLp2XhjiAdZhyCGjeTtX2WgtCAXB1DgBfKzukAXK9mtrfM5aR8Zf",
  "key11": "4TTNoPtM8TFcy3sVsvxZ1hHxETTG2hSBMfVzVAYdfHM556uSiMMEVGy5ZCt9ALTqVTLnGiWMB7zSnEWikZFnikYK",
  "key12": "2CSgLcrSfgA934nem6suvU99SfkNmd1LWVDVKo5pwptyG3bNw12se2ivwJmPD3TsCiRa8ShE2YV3WbFtk7CNc9Aw",
  "key13": "2gymAP7L4EdVCmMacJPw9cyxNVohxViLuZhnUpgprpcGa7wKgtA2giJ9b9N46CrqiNwYdDw2b9pCzGBry1buNh23",
  "key14": "4uDdfvY3cPngAzetM95fd94mz7CskTMk1ouTXNqV3nCkwNB4BhW9rPNcx5mBW7gmno76DZZ4nmz783uLUkzcxSxW",
  "key15": "SuTLrGYdX8eB2s3AF9Rf3Xh15Adj6DFFeeWmU4k7AQtMF9yi1x1jE5V9oLU97TTrK2NUFPoS5YHQU5gZpKfih49",
  "key16": "uCu1dn7W2Peo2rqJruZFrtNHyDkRze81M9Y6cKBY1Ya376tDG6WooYa7yWCmsPw9mhi5vHisB9bAh2JEcaPd3qE",
  "key17": "DtU38sAVtiW5o7kCpsmX5NnJSPvmXbtKLuqwPAPNgb6jMH16cq1xh19ag3x2KdsR9z6n5HYFAxeQ72U569Tgmu3",
  "key18": "62QJcS6MherXzChoAngchC1wAnD2erN7Atohc5PzXCqmuNuFPFo8M5NDznBzUNNfXASYhkFZipXLRD9fhZmAahLz",
  "key19": "2ygWcnnratzCoCqfxN4LNDwxPhiLqrcQXbSc2peA7iKkGJLLNFbELCWYq3EoExAfhqDtHzny4TSTopepb9DqLrSu",
  "key20": "2CoRFE1g4VDamwewY1iTA9yqUDRcFyosALeWqD3BRxYNcV46YAG9isSg75AYESJmHzsmvUHwb4zJfRnaH5LfAJwH",
  "key21": "2RuqhtGnS5KQXajahwCqv6mPUtWY6c3Db7gU3a5Gc4vZvoSEwvGrkfbEC2yaCqEoEtnLMpffGsouJceVbGx1ZZfE",
  "key22": "Shaau74qfeby5bUASYMfHnn48seGaU94CXt58BK54M4Wr8h8729wnyTFkBzW9hfZnVkoLsbHoo9k6vZhR6kEB4X",
  "key23": "2ZTW2ApbAcPMtw9EPbU8NVSCYXyoKb8B4NBj9vmV71QPCkArewaATacYLqSQNUKBGkLsa7CyK7j6gCCCJJzWbx27",
  "key24": "GQxXCXALLzN7KBCH5rUj57mWC1asMzecsPaMac6VvAuARguGaT1NQDgWcT2SkVLdvWuPytFPuzHDWezCYPqAiFu",
  "key25": "mVd6s2xqELgVtDXP3t3dYBKFcdgJ5tDzaNcLcX5E2SaBgduK3bb4VG3QLUXpLLwq24VvUhghYMbQtPyXvWatqZg",
  "key26": "Frx5tLSQ6nX4PENPBDsfgWJL4m9qigGyWETEmWiG3iSMSDnaNHnUg7PK1HisUzYHoH35zCCTP379wKcjfvy2VXh",
  "key27": "5PXmadkoGHN3Cu8FQfXjHfAdC9xc259nAefNJxzNoR1yZBkovoG2ktrrqvHJcKJWYGE4JR83B25AyXMvD86XWPgL",
  "key28": "3XSn6BteU2tvjeuZXppL9B9HPJJ3pDPvbRn267UuKNs7XZTVcnfLu3mrgKUhibyE6AJMPGeAzsLinyA7etRyHPMG",
  "key29": "468orYJigRbh7etzW3zo8T7pCm18Fp6JbztqJ34A5DdAyQESVcf4vR51GCYn6EQ9RAf67ViRb1jCcCC494GjZhvR",
  "key30": "2YtTa7pqzd6Z2BDT2pThw58RZ8pSsEzfqnJKFnGUnVqULXVX6WbaFKftjFki5pQHodaxw3F2SghXoUvoWaURjqRh",
  "key31": "4AHijcVPUrXD5RGv92S5BZGRGhNYKnLKFS1zyFcWKoxbsTvJcHy7hyuw5XnJXJicSRURZ34fJLQHQ7g49pcGiU5P",
  "key32": "5i8uUHD2NAHTR9VvNVD4EtVLsVZBbUP9ZaL1oKgTKWMWk11HWtQnuqcu22vK2Dp8SSjrHhNhPnX5XZxNqDoLAtva",
  "key33": "J4P4PHXPrBaAekw1gNChZMkaiYSdhRy6Y1cEcERVcnbafLbFcdY25smeR1WnGFa6CYET4yqWX8y128LBs125kw3",
  "key34": "tNXAe3qRwZoMrahsBEBA2mu4fe3ArC1F8YKxGKBA9AKGKKKX6JCs85uX2Mokc9Qy3KTNKuZP4H4zXiQSkRKyiPB",
  "key35": "5BPWiDa3M3uzVjfBvUaA2QBGki2KFGKW9aJMUH9KYkqssGrrzU7vZhUTYrj8dCjG2sJvUMnNwCuhWUzXUBrnjtKx",
  "key36": "2q8jxArgS97pV2wD8cgFfroUs7oz9iATU5vfub36qMqj36MMfzymPnHagkSiEvctGf7Cpja6Rm34p1Y14qMSh9Rh",
  "key37": "62oXowwfkxQAzzdiCc3GkcgkXwagFZHhmLFfEDvttguCfMTHojgDA9HZK36x48XTeoapQbge2Lttnt8yWbD8YmMM",
  "key38": "42vGNqqxwo8YRNBfkuMtD59aEagnZpBNg7H4jitEjpJYvcYiEHzqE848SRBT39r7wutc5YoXPXTHH8saHVPbwjMK",
  "key39": "4vU6gz9dapoJLZHwftwadzojUwaorhaqDZtHc3BdvZJaSXhMwGzuut3vW2b7KCasTp8U3MdrwFLGbYw41LF9L8gD",
  "key40": "3sLQ3thV3dgMUUQKooDZ9fdAfcfiWYDqN4dDdjbPdZuRJcbFUkE3dHN5bhegbdPjZSiHg48DrzwdT2TbZFTkVgj9",
  "key41": "5YGCJxkEjjfnN7U1aAg8QFrAWpFfPNVXYHyr6rDZbbvaXW5AngLPp1seF9dwnn25eefoXtkHe2GXzne34TBHQd2L",
  "key42": "x3rVgEcdmFFCoqK7fsocEheMbK9TFLtXRiLwDP7oubouXXp1YDksCpwWGS1M7iJedFnQLexYBiA8hWmB7kpyZ8H",
  "key43": "37yRpXzK3qojKGEzPxuX9tVZ4XLjC9SpTuLA3rqLjRGAFYjVXdMrHUbwvCeb9XGHrLbY2wyzCk7E6MBMgrUpgbji",
  "key44": "3wVxkjZrwmjKFZPDoGXGcBHG8r5Pn3KHvKafi5iXBFQytgsX87XRunhywqpc1ynJca7WwDZMkoAdC6pvDMyZKgMx",
  "key45": "5woJ4kVnKRZe4h9Fstpv1qERurFRochMv45VWdW2uaTpEtc3Zf4GmH6w5uPbBvsR3T4iJeCdJH5GG7aZrcNYgsCm"
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
