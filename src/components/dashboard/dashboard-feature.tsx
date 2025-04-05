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
    "2h9gbrDSTvwrcJfJJh895X9yqVbpA46pFFWspA1ShhcqybWsDyptDBXTMThB8vTm65TL5ctQ2dCwbsXzYzCsg4KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSwhxvfPW9kV42a2cnb5nbJtjPUy4HvQk8XR5joRNkE2rHXYuGMskXJ3nNczjo5eFH7PCuQw2o4qvbrGopeLGRF",
  "key1": "4criqJzF91jUdkT683Z6uJoTcoMgfGBGdzeaDgu7RWpQg5QG4fYhhiaVKPNqpMhDYPP2Be4a4V5MCJKskRxhzZ2o",
  "key2": "64MrGvkgwwujG9Gn1diHV8TCgQVDnj3eVsQhhr1h5EpnWdgVcrhZb6tRbayDbnLhy3jxuQS9UyzSgEoDXCRyS1Ng",
  "key3": "5B41rase3gyncpiXf3SsgMW799cv6dnSWUMU7cR9pJwispZgwH1GRE3gX7JugLapwcUozDnoiuBKRucqKX7WXJkz",
  "key4": "4vK39nYvCiYtP58R5HLf492ZsBZuvmG68whfTFPGu3usRhynxgbNQwtg8LMUYYNnESes48uSp4Jz1Czb6L44vX7C",
  "key5": "47YqwV3ZHTPDxZ7ndcUDz9bmVtgYUN6YbLPEfwgNPeuSLRkNkRNB52RuDkpFYhXQJvqM6Pcu8UtACkKEWHd4fbRE",
  "key6": "5bCXoWDaKs63G1VrApnJ59Lp1P4skv5mkKaq8CPjCSPqCAw6LEoL9wJbGWxxHj2jp2vYjNpMPqqFJgrDvhVRCWSA",
  "key7": "632Jc914kGJvaHzK56UHwn2bpujYzpUWd2PL7bvqnyyVTbNyNCC1hYj6MuctBbbnt2EQ5vHzQCqoSYqVaZ1YVJ7C",
  "key8": "51VHGDVCiz8aSTXQ2edhsPLJEoRwLudsHpaCF7j1BV97EYpHSV3Wx1sEgzP428u5S1eEiSYEDX5ncTyn69dShpFJ",
  "key9": "2kcNYE1eep2oGGZALGG5C6X3yDKhBnd69CPggSGBscvGeU1SHp2xrRm4wvDUeX8fBK6KBfLfScnRBqhwNndQ3hhr",
  "key10": "3GJK6mzuhVoKUsycrmBgc1kip36U7oUgHeNgfSZNhbUny2NdgL9HpjWvDUAEC4NYkUXknLZGuiHq3YWmaZaEZcBy",
  "key11": "3Z8Rme7VvUa1xbf2vw27DnxcC3KCsHhCtYgks2NCbqRrqRG17sXm7wRo8L7jC7YtdtP6nfxgL82cduK3tjLCSnLr",
  "key12": "2vq8QFRMMDdGABKreBH8C7Gpz1d1v8hnKnJHM34iHCpZ83zA3yV43iaWht7TWy5T9e5QsmVXU31nzaF3okADfxRf",
  "key13": "39zcpRyoZmEVtrufverXrKG2ZYvwdUgbarsdaCgRHP2ob8v7RNrMM1wJdPaN65FPggtig82L93jYzDodJGWZkSnx",
  "key14": "3M3i4c26wNnP3GVATLEcZjei7MY4Nb8eUtBqXZPa8DeTDCX2TA8E9AW5X7hiECZEvsoLzyCPMWME9ireawH38CWT",
  "key15": "4oG6KSQ9raCpvNprCagKr964xfgP1nRpcjdXCQg5DeBqdFNZoC8TKu6zbh8NBW6t9CsDPQXEgMTrT8o6htgUvTgS",
  "key16": "4hMcURKU9aPF6rXvPCkG2eUBDScfNtMw1KzZ7NXkXCsnAiP8dMDqnk7aN659v61MkHA3x1SFTvgAgWVpM6tK1Lz4",
  "key17": "4n1PfdnX2d2mFEUd6A5GmZJGRYsv2TzpHeu8mb98jrfAH5a2cWW84YfhqeS81HzWhYug6rEsUtkr6T2UMub6gqGN",
  "key18": "s4RtxGTQMq9kHZDwF16DRRvvuyd5zs2vFddBqksb9A2mFLGLuq63N4Uz4LkPk3QhqtBW9yeBfNo8Zsor3JFiNQd",
  "key19": "3cj7gjQqiPL2QvrWxK8PqwC22KVwWQDEcgG15PA3pLsifrUdmbRxszvFmdaxxQJv9hE2dYkGmhg2SEgmpMdxswc3",
  "key20": "3qgHfkFD1anw1gVAgHapnVVkd7yUs4udwoYXWVGaCKmhtCR7YF5PPtBdNcsS8TSvjnZV2FhoU2yEsij8cg1mBkWz",
  "key21": "3pgoiqBdqiyx9JDg2TsGBnrmHy8EdRerFbCPe1WpNwEB3qecXuAp1MxQWskx9UL58KgWEf9VM6gtjXtnXoqnwW7g",
  "key22": "sG2uZzap1svageLpV6nH3SuXXs8XA7ENvkLy1tasLdB6HJULDNQgVGZbHAh9rY4SqQnLeKkKcnZAp6ZBmsMWumR",
  "key23": "5PoRcytqdb9PWhHw1CwmwnF2rWH2MPikFsv6r7w6bQ5R9i6mKErxX4EB1XWmC2jUvm5hrDJYqhjCzwoSz8g9ry61",
  "key24": "2MjfLzd4V9H8WhpYqtG2atysEsNgQcEwAEDY7pTWACXz2bstPrBBYeFMsWjgZ66b6vLrKYVR3i64WUZiD6kLBfbu",
  "key25": "4SfVRJxDv9bDEXfGZgCgWFvQrvrx2VS5qG5D6eCnCf328XCWhFGDcz1aPj7c5izcrPMa8pRiDRYUgCQhDTsjvPVo",
  "key26": "3VRFZhbWzpCHHjDB4hnnQ2THYzkugbs2CjKYCA8rAtKoo38m4mv3yaW1Gx2vk6GEv9EfoabcnY4QduJhS3wsmfkw",
  "key27": "36L4D9mmtaW6cd8RgF4dTqUK7Xur12XgdAmWMQvw4FVoLN1yGszd9YMCoNvKArZoKeBmnEukhNorPYSwKTuHTvH7",
  "key28": "k4ZBtNV4587hg7sSPgkGQdKXYefXeMTnhLC9pvA9CzaR5yDSJeN1dzzHvhiEvHgwE5Jwvrh6isKhNDfsW4b9TgU",
  "key29": "5CSL5W59mGNxLZoh3xcoozpxZSYBLgwDKFUhDDSJ38MSAJUtku1MjbYtAGq1BV7D6SzFK6WyBWxbXhfZBNSbsSVW",
  "key30": "2zH6ekwPRfRXbp5VQmYg64nYuXJw8aPPcLwxat6hRDy5CHkZSin1GMTmW4AtWU2yWkQqnKXu5aQVdhTFEyRakg7o",
  "key31": "L4kcDAmvkg7NGAZMR4jpHY2rzC1Xekf5MpxZwEHXHpFSR8fNqwpWnXZ8uqakH24oEMMoSLiL1ky4y6CFwGR1pUQ",
  "key32": "mjqzAKoKYCjNrMSUf84wWuy9cvKvqwCJzqR5dKe5hR3SWdHHPJLKkmjRVJcmcLRiUmWH8nF8UmBmo8o9MS8FdGq",
  "key33": "25cAtCkFF3gzGPvgEHW9nmifNUNvBHvstfAH25vBJFJLJEMRVgpniED11dNKav3qozZLawEEaThsqyyYTVDwM1tw",
  "key34": "UPmnX4u7NCXbMvpaoxbPh8yjcPfCKPCmpcspB58GTwoxqP3DFkWXjaezkBorkdv9U31CrDFsYEPKHEzzBo8rPWB",
  "key35": "31yhVMUbLvJzfDwiQBTsEa811E895FiCU6Lb2zboupm55vKcMmNwvcCw9RLxVRRX6hXMPqynjRRScr2R9sfD8gqN",
  "key36": "2zndSmcv9mM69SY6HA7KNbopa3q4m5jWNDJt2HeXVEcwZhNUxp1dbakySbTK1QR1wPG3rS5UC2m3jXYZuzF2KkAr",
  "key37": "2u6vC85MUHGBaUZew7SA4bLACZVfVFgeqAb6ZAUNBo5tAeXiaCYQAj3nork2dW4RG35f1Jk4MwG8MYwvYgxo8bmV",
  "key38": "2PPr3eBJWqfP49crrQAPF6fhqJGjFbW6a3w3SRfFa92UMMzo5bYigSDTtWp5Gk31XkLTLxyugD68vEASMt8pRtjX",
  "key39": "5AnaHxCb4sfT7qRSVDkTxtfRaNxBysPB3LYg9qjWetaWzpHmrHaABVPN2v92o2KYhXEUSZ5HGSfVaFzD3cRAuTa8",
  "key40": "5AkK9jM5sPbURWN5FNhbC8gvTotWWUmB3FGu5s1QbMhyfuV3DrAWCiw4HmaAoX6YHqU6qK3EbA3SBK6u4Eox8Cx1",
  "key41": "56XsErCRQ7AkVPToa6z4Yzoz7buxkomX29C5rZjWtr5n4EZUhiegACCJRNTXutEQGKEbuuuL54Br3tsZFNUwgYmW"
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
