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
    "5GvK3WtuFVbaqQiGMbD7emTY8aQhUMNmMWdwMD7jrqPTeZ2JWcFokr5CLhLqY65fPzdANs2nASPkgwcLtbBowE6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxDgeka4JP5tz2DF33Cbiyp2v4QSNVBaNS1xZC4JKXapsjAnrvdGZN4PS3nU3jA5APUkc4F29cn77CCdsM4AhRe",
  "key1": "1h9XVK3PFACMDbo6EcmkLai6Qo3KLnNK2kumP4BNgi2y6wwUfHBWZ1cckRKnSpDLDkQa1hRQH1vyXpSKj6Pvb6G",
  "key2": "sBhG8hHSNsLXhcZVky7eK7nore8K4n868LmQEz3cX8vHcyLiw8rmevCZzNAujr8kwd1UER3pj2yGor2UvUwxm7a",
  "key3": "3puT2P6NZeDzDt4eiwxUad8xi6HHqRdtY7QuaqeMnXuWXHTw9Qxi7fLgg19HxifNTk7Usd6ePFSUsLjAWUV3PEoq",
  "key4": "4ZgneQXoXfKDfwhimYnpXyix8ixGxvE2vkRRNSZSWRRKdvUVqyo8s1X7rTAfDvi8WVjqRmwhFifE5xQGLKHLhCZS",
  "key5": "3jttwPzrnDpEMpmg4cRacxR8qCSzoqQ2MhdT56q3SQGbUftRfssPope8YvtVvbNNxZ6Dcu5gCAweDRJr8ALWimd4",
  "key6": "3oGtVGnifT7CLgFDsTcsT1rZpxLy4bK9GYAi5ToaouAK96HeoUtyJAHneG4PWL4EGpF9Q1DSTjevwLHUdiJ2bRJC",
  "key7": "2sGmPSSG2VaGA4gqw69eh6U3ETXmd8qfPVronH6p3rZMh7i5fvcFzfDgGwkAFWif2Sp8TVsBH4imSkGbVAeWXfEd",
  "key8": "e8WBxMBYRG436YHdXidsKYNaF6H4u2UfdywVJbxyhnYFwG2fhj2hjfxeGjciNH6LrTA9rNzshgTfdFYaSkk8zLA",
  "key9": "3E3x7H1LcRmNum7bsgTR6ywKJ2nevb2ppvhMgvYVJcQMRVceN6gxbqbcZ7Vah99jYpcJBq37GjTHZnYoay1RDyjf",
  "key10": "39ePuk73QVwxECB54E1QndGhtamULkvfwFnPeL5r5dP8PM77t6CmK5UYDHjv8HxVmH4KZfGXLZwJhwMnaM1P4CXc",
  "key11": "5KhfC86p3qUvhdrr9mXyMmncB4Lg6HxbFALuJVbdzMCyMQUNoHb3mZ5G8vhXSnrUoP9Rdg9vsPPncKx7TYGHQgA6",
  "key12": "4yBnQG6iEovQXozzBtGt24ovBFZKH9SajWZVdpfH5XN6yHascTdcDDuXHf4D46ubMsEf7DEn5eemub2fvMniVaZb",
  "key13": "2MLeQknqoaNiiqW1oPNvquHH4ejAKHW2XiTvFrmmQAauuQmpKJcqaqFdkEsUMUFsW4ir3xzw2aWs45tMmtxxNbrf",
  "key14": "Ud2f2n6rQVSivwDwqwiFP7w4aGp5WnkjXbgAAMUtAguqNUERf4ibCDYop5gKy4hKhoPdzfgnbuPzSzGNL4CHbW2",
  "key15": "3UJJzrAJNHhoiBM3wb57C4xxkxeWoAG3hhuCSjP1HVpDzS4MfpFv8U2sry9sjmMYrx2WuWi6nECZ9hFYWx49bMgm",
  "key16": "wEniQmcmQ2mA3skkxP3tNRVvdNpC4c79qo2usvQpRqJp2BzctNnN7CfLmFmBHcZpFuqPGS8E1DyuyiyPtKmqhpq",
  "key17": "5ZgXNKeMQRwSh5Awwm4PP51huZxtKiZkT1aou6pSarXy1yftwZk1TtjVvkgxLYqmChhMy1pCDLXmfLiZWZk9p9kY",
  "key18": "5AXQ2M8df1GqYxxcXVpYTdHKDc1XqUruoX5AroJ1XicumkyzKko9itZEvfJPSYSUPEe5PaDf3n82azf5DXGV1Gry",
  "key19": "5GrCjfomjUhDo8frDK2yJDvtbjk1ZHkM9yRutuYqXF5F5hMQ8eUPSwhSbdiWjLaPpAJQa5vA7uenp2y7qi9vda97",
  "key20": "5uxRJergFusuSRg6eR1mgMj3M8V6gWmqFiC8FusaDZxDKkyCrMXRGHMEJ99xSqc8iW7MGjFPjNf897fLAPBgMfXN",
  "key21": "2JvFcPaNorFGdTN7Q4Gb5or6MnhikDaQnsheErXaUEnGS2uMhTahDfPC9CjsJQoofo48FNYDMdHif4rZaoA7qhck",
  "key22": "4iLqyvBEzkpFJi1Q66wupyhA7RKzJyguWDzu49ThNW9MMoRJsFRp2ULg74AGDKnQTxGtciaexEsXGUt15FHz45XD",
  "key23": "3jiiiaNQRixLcBbAkd1PTyRoj76Vev6ipz9qXDuJQQcrDDdgnzDXdCgMi6Z2Kq3r9jjPvHG7sjRwK86JE3YzKZK6",
  "key24": "9XBtwnj1sfG4Cdq1sfVLadHoWknczV7Nuiv9WrkpKfhJMbtawLLAJGfzRygoLEmVT1x9sG1qffyHHTBjrTQzqfe",
  "key25": "56fs2YEHZWmMGLrQEWny9jms8q3mxGtRL57dZqMvaJCXtS9Jw64mxZjhcuhWqF459PuBdhPPTpyMbUBDmHxvtH1Y",
  "key26": "vMXhtB77kG3VeTgpBE1eB1gwwWBYhmkQE3RozxoU1FnbTb1d38gxJLbUE7JhRba4R7Sh3p7Pzu3FUe4z2fxWQkD",
  "key27": "j83ng1gQ1vxPsiSTZuckjQe1UkhYDbJYdPqYjNdFfF4QZhyZWTWLAUAn1ZtrBhP1ytTg6kPGpjRVyuV7bTNC3gS",
  "key28": "3oVUi8Ya9QZSpR98NZhq4hbfz5gSx9Gg3opAFkhjdw8W9mNTvVn3LrJyKYSFDrHUfeSaY9sChotFQvFJDgsZDW9d",
  "key29": "5EFJEbJZT5yRoRPjnUxfQ4NHx8gGe3ZfLCWehJvmWDsSk7hxfD1KPLNNC6Q7X7YLEPuEQdepYUmyPExiYznMhsQA",
  "key30": "MZxj93Kkx1oSTyuuG9C1gUiAot5ub6HeNYPWTA7GfSG7H6G8KNGzmCUZtYPJ9Fbr96ZPDbYScKrQBZdF6T7GDaF",
  "key31": "3T9c4J6hUQ82CpWLMH99n36cbryc4y25oadLXqQg1FHfaamgufS29GbFQTXrgoqQLb3H3FnsXcUknHoSqEAj4jr8",
  "key32": "2XS5SyCu2ncgRDs5PUb2G354YoG4KbUZLzpkTfq8FXSa5ZAmeFQspMU34LYEaCyPjnMXaNx5ZMKw6BvUnjpdt4Qx",
  "key33": "XsMdBSPXSUpsgLKG1KT6GZbmBDwVRxiHWNFL53XHZA4MktSpd4i1eEu2MLmsTYp7aEmRtGX4XHmAYZj2D49JUSX",
  "key34": "5ZkmwP4GWQc5CQPLpQPEk5izcfRNWTt6aR8gqzwYgBCgfTxCpBo2DGvFSwcNDn3Zyv1ttnKseFNjRUJ4jaotpDR5",
  "key35": "3AgpuBSXW23undWS6xmUV3QyAuwTL5wpZaa8ZRwMKnkgRzun2zptcvXbABS1qjHXbvZvYrriLd7sHHEBorFqhKWw",
  "key36": "524ZGsP95FuFVxsHBJykh1QETVjug18yXiJLC7NZzaLLKkHYvb9tPpNpwcycQp8AaZHvMVJXJtuDqReqx1aqeNLC",
  "key37": "4xw492YMVP3EdAdkpL4SUyRrsUTS6H7QUBf9mWSeJnpaEtpetoFeNehc7SK9fo7GRQZrrLVgvgofg1WSzJB37H1i",
  "key38": "5zhoysU5563GX44hHkAYQ8QBipA2opspYW7Ty4JrRpt6a8QZRuJ5uewAMcJxsGfh5bs3JsKznkXX7WBAvpZjVjcE",
  "key39": "64moXkrw5ZtAuWTD4VoGQjFai2UeUhPBnpHnhbwiZoo3qe8GwGfQQ9GApPN8BpNxZxcJm3VgYztW47LwbT7mreDd",
  "key40": "33LxWetcJsB2ZcxrAjKKg6gyiaVjS1uDXmN5Ldw5t1MQ4sxayWD8ULJ5w7FvNJhRpeMtQBoniUnUUfy5fr18mApR",
  "key41": "2UxxW5Yw9V7dg2yhkFskZ9e377ysYKCiQfix5Dapos9ushLzqZ3zzjLhq2hBjQnkczbMfX5j8L1aYiEgD1m1wQji",
  "key42": "mmwDL8xVK6cAVwTRiTmSogu8YaNfmusCvxnk24jeYmVSRSTXhMGFTf6ni7r4oyDHkyWqQ7qJV7NWnxqJcXExNft",
  "key43": "63e2E64fhdoMCLkocNJNs3YdBiPabbJwZhLTcXKdKZUsza8GVMsGc1y8Br2HHgqPhjaiWrrwfr5vKsSumGR7oDBj",
  "key44": "57En6odiiq6TEiZJSbs1ykiYFMo9Y7BDCpSfxgWENYHTJhgn8i92z4SjuE5HMjU1qHofvh9wzCiUEWDjFRuPaJan",
  "key45": "2YjxQwW8UtHeHe4xZ9h6Le53FXAYm1AujKYDqCyr919NvRMchnESWmiPDMpfinzJKQ84kEH9jadcZ1mCKe1HFgh3",
  "key46": "22MagSqDhe9X4rbDGnUWdsPiPZSVUdb2PafEzP6xG5yUANtEFJvC6FAChNSyH2oTqHnTUgK5a4Nk6ye2ncsEREkW"
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
