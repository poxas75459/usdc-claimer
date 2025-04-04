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
    "4DWRTFm3YXgBnvAKXN4r3t2SLBfqCiVc2xD85f7wH2NQu9udxCQbraQ5dh8ABYYHjFZud6CYzRMQJaTqbprByxvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jMPaYXmoHhVA98JwKBt7sX6BtNjgkATBxHWjgt4FaAGWVdDwRX1wBcGCx1PqA93kTtNV8LdhpD5kxeTdbVniYyN",
  "key1": "33epF3mX7EgKnTfWTGS6sua5v1Xy1fFW5RzNwuLkDsp3c4t8rCtMKyLt78pJZ8dDHgG8zEph4wyBginbGAtvPvSg",
  "key2": "4mXLuGVU3Q2bMVq6UmhhFKwYMpDq8gDDE1tB1C84CMVWkuYjVzdLJcto4xJmyyyjmowPaV4UPE5hvGfaAeoy2ZhY",
  "key3": "3hJ6sARuxJPSeaS8PMLm4ZueH1gvM63d71PR3zhTvXVj8uvvTzoBsv6P5WQGCFebzZLQCxSg2dH15NMvcCaSSurx",
  "key4": "33NfurRrtZrgbH1gSHoMFEdQqLdUHnxaQ2CRZLrJGGaxfjEcjytWs8HfjUmSXnL8YpAdRVK6kGzmKoXha1YVhkT",
  "key5": "3xCoQM7E2XuWQeLxMc4cBdDkQYtZa58BvqP9csDvHnyUSQPXnwTfjNigGTpDd5bjXtFLgP9Vc6D9HjwcJr3ZyJxB",
  "key6": "32burH7JYjUXziwaTN4xfH8NzT3zhmAJdr3MNNxuEYx1if2YG4r76E2rnL2d4yekPpZc1NgJW8TchwFUm5nnmg3g",
  "key7": "3cn8zymwExLqySqiWxeh1DzV85NYzasnVyBZpZmM11J9hhB5gNDgfvRQEJwpeA7EcaQXTwjihffVSzuZ8DapPWyh",
  "key8": "2nYhtJS8ywT5Jz63oDChSdLqA21kkE7GBL5qYT6MczAhUTWgSRLGwExB22w486LLFgx7iVBwgjCpJKmTNd3YtgL5",
  "key9": "4Ai6UrV4yTzUCNpLGfBrpmXoFneATzvuKWeW3jRAuqmHhusw1MfPo5LozVqv7fiGYpJh34jM3oaN3XyVjgHM7VjX",
  "key10": "5Zq2aQwCk7seoLhSR6V2GCYmA4wffYy9LmkXmNzGxVYKxex7Lii5PMZ8PxtxebL47681FUkfmTZuYMDqRmaRoLQ5",
  "key11": "3gfkAsnzL8f5dFvrvLbDU7BLCgPHfHT22jQdGH2iwAV4Ayx82CTcUUyv2V3dMckeJo6UThqrMtvTaVKPPVaRMSX5",
  "key12": "3dKi1xjhc8DJVchJM5kcL1znRpYM7yum5e6JoTyDXHrtB2JUSsH6aP8mHscbZRm3TqobEFKecUPoaJDhNWFwwK8m",
  "key13": "cBUskWYtmdCsz2bCthEmSHkh3EKmGWa7sUkpq3o27iZ8aFpMXKwbnkk8T6n799uroWWBvC1e5qE524vgNssAsHa",
  "key14": "39TLho7eojVzyVed7DHc2ZJnuF5SxmfELJXnp7WWUbxFX5MgXqGedNQDwHuGjLSAY5VikWzhk43ctzMFxcdaSmb4",
  "key15": "2sSEc2dMvuamWQGrj4vZ6vtK42JqSgV3QemZ24rAyr9YfJ7X3bg6ZDZyT6CL1nbLhb8Er4AwUeUEaMwPTtG8pyKD",
  "key16": "5KbabVQcwJ4A7kipGAS9Qgp8TVbQTd4NwhXDXabur4CSDcdn16LfB31bhFzVBxJTEwezM813HYhy4JPtHSp9myjg",
  "key17": "5Y4cnQQXagLN1HkAJbrCkcQgNdbEQci5uSRGvqYWg9e1auGc8VQg1oqVW7AeHX88SsFwedAUczZHsmBiivpi4wMD",
  "key18": "4a9bPyCgxxQ1VwMm6tp6vQh9RiMy4pvhZEVvW7NJyMJAuJVVoo8334gbXXRVjjDL9yMvwgt8gWydASp4Y23q7o7r",
  "key19": "2t3n6L7w6QAMNjM6G6fDXc7D3bauAAANx13uNCiWPyYhNaZrKum5tgvYC7Aghk9LrUkbLSYdouXzzpsRv6sCBfBu",
  "key20": "51r2WSLp4JtsgrsCwasNzDMn7KrsHa8eYwGHNdpRMRZDPwmDFJ98g4xAddmroogBA3yckqv3PXDHrafhauAnQWco",
  "key21": "4BWKKtwhQQHAP4UaBQe5L6HmhUPUR9vxyud8Ji3p3aYdPEW9pU1tLLnES6dKQ2MKBuSLxhEyqSoERAzxFSiFucMM",
  "key22": "5ETZXaMHyaz13rdRCrXKfT8mGLaVsYJ4XtNAS3L5eCWQsV6YW2W1Eh16oK4s2JbEcukiYTsLWnajAUiY9CvsSSCr",
  "key23": "21Mno9gUyyaMgqBtCGjFTBtookzAC3DuHo7pCg5xtuUcF5Aw5o5vRHgFuBu7gm5CQoyKpQDt2WvYXaQQ5b1Yj1EP",
  "key24": "5T3rDPFUAHQ7BQ1v1MUYg7GM3F4ZL5LUDLGXeyTWA485p82qP5edpQ7ZxU58DRCfdSH8S7Acr5tdAUvughhWf72t",
  "key25": "5HKhWRzWhAfNUKsG6GneD4pZikBJSRKVuZhNhyJfTL72mgiP7ZLNpGtNCKSZptjrByx1MwEZuKQ9rNr8sERehced",
  "key26": "2S44GzTUfpqCJJBErshm4eW5asLvuptwigFyUjWQM3o3cDne1kh8vuY7CitaKQCAwX5bEHv5d4iMa32jKpbXv5os",
  "key27": "5kcrAm5G9cFC5Cr5U5JTnKxLLD69fN92zrFN1riNXRbtsdxwNJuSdkJRz1ztDWQekZf5apbeFx249BEZSPPCytso",
  "key28": "YHTUbgVnXgoqqd8xxTYxLoW55tzP1f8pYhkP7V5grtnVvyZCGXC5XPk2zhmMVnfF7wqoFKFijyDiGYyBtZx6fS2",
  "key29": "5LB29NX6kjNWnvcstk7jwqTWFxaL1rkj4Rgjkg6956ztTTbDsUirUE4GKjhn2Ju87NnoYEfDPTcgAJjRb7A4oLvT",
  "key30": "5r2wEJpp7sZcpc2yaY3iFfUVYaXc6X8ANEcW34LW1m9awvBK9v845Kj5AxJQ31jwwEq1JP19Y54HL2gzn2tbDdnk",
  "key31": "4yguRcDsmcmmUFU2NLaMuHHZb4sTaus8Zp9yYvmSJe4EsU1tcAwN88EssQMex1qGcGUahVGwEqus5eUsgDXzh2of",
  "key32": "5sWHuDcUA3VRnXYXmpj9dRUqeKUgDwEtqxJJF9aazMzzVZ9YnXVtQmMg8UeKHsNf3FPwXxsLmJHdvKHKaRP7Psmx",
  "key33": "3A3ZCPwe62nKnp4FK9iLV3ngdiVS924by2PxB9VZDs8pdBw77VDS9DjTgFDtg17GAz72qrUQRKkXpxuhna88qvYn",
  "key34": "4wSCE7g5tACFbd2uS27fXcCUmKN4bBQassRRA7Khe2HWJKBwvqVaRymzbe9Ebb5w8BPgPgSPHTkHw35LxaJkoEBq",
  "key35": "3Vw2B4wn7Dh3A8tAoDuu1Coa2o9ZG7Tbd5vTCC2vQAoyTNmbt1LSSFW7CBu2W762AAPUREjSftJ82XNUUgsEQGS9",
  "key36": "3CpL2kqWqxesnDSxgmgVK4qCgBE9WBfQ9RNRYGAcjEerqaAkRVqSoXGh6jAwG3HZeCefcBss1ufhgMhGV1BUkesA",
  "key37": "46EfAYyjUMTbzQxUuv1d2pPRuPpSbGw1X368JP2okDRoF6fVBRTsN1K6snouHL2J8UKL3Bsbn6PT6gQxUEfGT75b",
  "key38": "34W7oNVEG4Fepr62XRjufbEYQJuyYTguMDiC7NeB37fGJEUwCNC6jzsdZ5FZg5wpia6NEeKKeiJL4N2SpxA7padn",
  "key39": "4GdaMcKCu15mMdeQF2g52pscexq7GSyt7NNfmsDvgTpSdEXZyABbtEBqs6AB1KJ9jsTqjmf6bMtb5LVtrFXLwSjL",
  "key40": "5d2BiJENQe74X5WiQokCtThvxHnEeEi5r9JT8o1vYbA4fFiUqU6rV5HwAJivmdwEfVfmJShY3BgAGH1ANK4qzRDJ",
  "key41": "coSBS3axX8kRWMnGmfFWbziQ2vRcnMtMHzHEHtoaNLVQyJpWemC6TeGNgMm2nkwxj6P8Tj1ve8pKfApHbsQ5q4C",
  "key42": "nSLu9TjPS5sXxWv8xxxZ6CPfdxhNgA8wMhDN6wGmk4SPMfVSPibftaXAQdWgnostXAWtPQgdbDLqGkEEyngX4kJ",
  "key43": "4QoCTdBej9Vc6TUpiQerDhnByGpfvbpAUmK5hXc71ou8Y6teGFvjg2hxEABEVziHtsUqRJKZXUW3F2iL3twPa18T",
  "key44": "33v78ZLKbEg9G7dcirzngLPsVRt9zkTpPBfwjSqfPSfgyznP5sWLhv5yp8zwHPFxpBdf9ScQ62edgrvyghykxy4Y"
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
