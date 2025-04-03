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
    "4h1gH8ANrDysAEASZ2GUPnCn97mZoAt5knZkKQGVCWF8y51PiXXQMnHjuQDz9dBhjqtN3RiKSGUNBayg8UamwfPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhLuSAYk6XfjTDhgkPS55Ejwv19m9rNPMqVHzuyi8mqhugDcYTUzmHsSfFuk3Q2tVeawhAV5eN82jQzemRPFrVL",
  "key1": "sfrx55vYiyLvX3tqAoL4rHhtURd6v7aAVS4BZn4J5PLxiRxLCC3Vspun8YrBSc5fUCtDU5e3DKpm9cWuTMYx9iE",
  "key2": "2s9UH7h7nnNQnaHsKy71nZeG5SfVquMYFM4eNJmtRKRg4PgRyRVdfAAAT5hy4fb4ZUNJmYJQ2iVJJ8JF7zMqNDkX",
  "key3": "4asqzp6wSU1Ht9UoBXm9xNpsa3fDYBqM1S6Jabf5eQ28nfrPFDmiKTKG7ys6aomWDQ3B9HNpR2reekP3hqT6MgbX",
  "key4": "4jdbnfXyTF44jxu4mXqv3Tv1sZsMR48VtZoVubxp49fAvUyr9e33LXkSrN79mhjxjWnHV7CexaZcajTQjctenaD",
  "key5": "2w6eqgjTstr9aP4LDPjUwcPoEHFvBWo4N3TtmpqWp73G3CJic9vUfyTMq2z9bivuYGfDSjpJ2M5LUmA2dAuG4Py6",
  "key6": "4W7MSszZ8pzjTF41jhnsFcfvE2VZgnGXBKxbm56U695B5x9RyE9faGPM8xyGcLPbkVXhoMKypQ9XqrjzeFsSLAjK",
  "key7": "4ePWycPAgSQartCLU3P3vx2Nkuu2yHJc1TnLFvhGupzteCFLBvGTy5Fc7nMqk8Yv9cN3yqC93W4VLjZeLcwwMMRP",
  "key8": "hmAZUKC9ot6xKnNd3FsM7dch7YXfghTiR2LDQguDj9RTXP471zAexkTUaq8yDmPD5r78kKSvfsiUukw4KZeGEQu",
  "key9": "3iWBoMk7pdRtja8Ytv5NFv6SmbsTZ6rRze4NTqzFUqSLXXXNmeQ683UGXP9faRGDjQw2ujNnQXQhEGrTnBvcPVJk",
  "key10": "3c9NSi2jeFYp8s9jnJC7C43enYgHw3tCqQVDL9eJbWnYKNGnWLXLuaEz5XpEofMiXaNSzbDWynQu2m9wHrJpRdPy",
  "key11": "2VSGtzkSgK1yQ6BLs5LFCQoE4Dexj9Pz6LTCcwgJEhSnG3Dmj6GG8ViZEL4jgVhCfr7w8Rjxtk7EUYM3i3k5EANX",
  "key12": "55wQF44iMCM7JVfe1kR3xWXaGd2Pn2sHJCsETg52oEHaL3pSTreGmt7rpPirsPHLiUGTLKGTvDrMgPY3XxiU1krg",
  "key13": "26cPU2UBSKty5LUuATwah4dWuZwRsp7veak67dXUXwoxFtcEQtCWMDieFQsxRnEUdMMPmYYfCiudVYthqDT2U721",
  "key14": "4mpVLSouB91TJU51zxjjyWtUPdjPpzYdW7y6kyca6TWNyL3aAZjg9WsdTZ9gEmVAdnooMvpNhaQC9XcF3sbfYG5d",
  "key15": "5fmX3FTBBjraFvK59eBPPJPKjUvXxQvQ6UKQCyk2jAvRZSp4NRm2qNYkkSmu8f6gMVyscMRsiQ1TGMfGYW7wvg1H",
  "key16": "2WqNbefjfyscQigXAgfuuxM7BSSYeMSvw6SpPVx51JWo1ooCm6fsFsAbmd64tPS71uprcpmmdFreyyb7WzZqjEzQ",
  "key17": "5JbGhxAEUbkkALMyJ37LP3QLNaVb5oseaSqFB7nXpj7zB3UHYQMRDx3nqPKnZPqvopBSzbweTDi1SG2PcpQwKm2i",
  "key18": "WmuTGHWpGhF4aoANfoNmjdwRb294iDyz5cjaWd7MsGcrwvjSNkrTURQjLkvtCbStMzMoVBJpvW5h1WsWi5nYsYS",
  "key19": "5oXrih6a5B8KSnHhq3SoD6EDMxSMuFeyHZTYUNumRfE8ueEdrXeamH5RFSk26en2B7THWC3iApGQPeeuoqJxb9MW",
  "key20": "5uqPy55Yj231F8pkeje7tahMdw8bWwazq2s4btdbnrfuyCZkmBo42GspYbTQkDLjaRVzNxCzvabQAn73WgCoeAzM",
  "key21": "5kD8v5zKtZQUSzPjiYwVzwWsqGZEsqJuLN5SFXfaatisdPatH7hVLS9yoLzvdHfLYGzDmWFn6oEh9d7zBEFpz3yM",
  "key22": "4EuiE9oQ2xUdyLqr9YGvBWYNMXxWJTKFKJoJ2ZQqU1FDT5yhh261whgsthfFuH37sm5AhSqWHh6reLYQhXAfCNF",
  "key23": "4G7vmXuHRGAcXZikpstvnE8fY572ZQbAKMNtd1pMf3pDnZLtyvKc88ZmtqywkRwfT4u6jW1mnxWgqvqgrD2ERX44",
  "key24": "3Y1GzcFuWobSvyyzuvTpSvDuomWr8b4UxVkjanSqoohyEtXHVXTPEBhYwcnq2qg6FWjzDuAnBJSXmYzRbAydHrkE",
  "key25": "33taDLtFaT6JksgsfFesuvhSSa8VNEVRtEaxnTqwzUsaggGb4ra7jyCrYkLAMTk4qViUGAPPkFxUf86fkc1Jsiau",
  "key26": "5eWCt2mauxforDqtp7LgxszSrpNjP43nvnxQsdzHCrqyCc8ADBhZT88YaB3HkzQHwji1U5E2HjQrbx7dnwdfvTDP",
  "key27": "23o5AKVh11EFFyHQoKajTFd2SHzidBVtAz3p7n6Eg9f6iwQCxXMqfuZF4W8ZijCdB9FJLQWmSi3nwuUPBQuMG2jt",
  "key28": "5sTn9NhYwF2Tsza7JQMDDXeWHv3i9NFk48ZNkvY9R6Kp442UigwYAg55dLLVCHG7wVY9jWyfmSauFkmNWKxnJift",
  "key29": "2ePj8ramWsQ8185w1C6Yp8DzsAGXHSYHgoSiZehhfrE6unaMgvxfTGiGeA1mPjEu9RuE8YkYFCzGLnf7yszgRGoW",
  "key30": "64ksZx9Pyp33j43xfuMbCckbNeAbdC6EjCjZy9tQkdiQPT7EC3KjePpYhniBHcg7Fjbn2ShHGfuTECY41GXkDzft",
  "key31": "2iJvBByHy5hddnjqq1FxgCh9cMrWHq6aa4KEpQ1XaAjcsiPTHYhFYNNt53SegoU7kFHBhJQhHLpqHqUM8vBYRfS8",
  "key32": "5jqBeuq8TtwBHccQf2Gy4F1PJ66CCetQtEiYkh7uraTz7KtvEDoN2Q9NUm53JS2EUZEiQDvLZdg6J1dWN3CYhF4Z",
  "key33": "2WouXfpJigcWXRKhP86K5piQgoxQiaioeYGSxHKMx4oYt6qvgxhC4tNm5RXmQ1kBNHzvY7hij6qeMg3yKRbaCaYV",
  "key34": "676LT26CRCJ4dChXsioH3qD6eK1BsLnmsydfQiCm9bBgJN7f6VM8sk2SHRJYLNv2oEZcnfMkoQSLTgvEurCVXBhA",
  "key35": "4QMaV56si8MFofqj2zXKe5Q7G9wq13QjmLpYmW8bUxUp5A9bKbGmPYYV8zTjh4zu4xty2iYeyYvfPh7uKcWoaEGX",
  "key36": "4Lq3ccL9kaJX6Vri4ADXJbPQxWz44vuTJWH8y6AsycmTnhr2YsBriCJaznT5qjV6NTJaHNWixW8t5ezadQrWGiVE",
  "key37": "2bkcGpj5VgPbiFW2FXCAWS1WjTmchqmLni2HP8T3hxf1Qa86AP76th8oxfygWaLvYr8vaqZnZiNsTFfZKZf6ProW",
  "key38": "5HAxgb8Pu34Eo1Z5HBw27QMSVvgURCxCMFT6rdxGr5UuTMCimLyrgcdqGXj626RrjjaRD7517qaTjcyjaoSS4E9p",
  "key39": "4xRDSYHT5j3yuco2WFu5DMDs1R8FnSHAXXPDL4YukCLWC68r6HmEybed4JSrvsoqxjCakesRLbpNisiCAxVGAFHL",
  "key40": "5ECR8riPfyJAwSMTUTELfCsnEcXRJxsbyQKVxnnibocQkjwNzwVC6rGiJPv1D8MqdSQUZRYm3t6amiBSXncX1nJU",
  "key41": "2XJXvwxE1p7SVWce4V6AAyuT1Yp4SSphxTC5UoarmV5gT2SScfmH8kZNcXmrXK89V7vjWJYCy97VKrTjAzuJpYVh",
  "key42": "4DCYtnGDBhCWXJrGoPTB9Lz2z2NVYyRr66X13dfR6LegBFdnvzo4s52fLf54SHWagawURiP7zRQ86gPH8JQWdJyx",
  "key43": "25JYnBu13cm9vyiPosiawnW8HgA9QKTnYBW4W4F4BeHAg1aspWstM5JthTqswH9vAgSgbNjk3XhiaGpvuMAkNnHx",
  "key44": "4LANXQiDiZZEy4bFda2QiMY5YLvTnvhTUn1AQA3SiWHzvNmFR8RCbhQ39Dh9KwBLKLSJv17SNLVDp56RNAMrcZeK"
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
