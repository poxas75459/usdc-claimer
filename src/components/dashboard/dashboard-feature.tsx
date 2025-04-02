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
    "bReqYD3MP1bY41FXMLyQeWNv8zcLLJemyuthtGVE8zFToi6E95KwA4aLwfFqTi5pwsacknWcMVDo226Dxrste98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtWnach5sGH9Fg41vzpqrp3k4oN2LDH9xiNWkoDVYpJfvudUnXAqPyqLJQ6NusxBrTyskzZczayf3JvxdqKKGGD",
  "key1": "2cuy1H7Uabxb2nZvhTuYUUpvb8dNXV7JpyHXHhr7HVpmmGJqBNSG2Y7fRMARh5DpcxifdoYJqTmLhhZc4YDuSuqQ",
  "key2": "4jTjwQj9D6Ri16D1azkWgCMjDPZZXecKvGd4bT6HTE6ufdtfpYdbCXHGa3DriofsNuZ7xiVn5FSWszDMkVtUqXQ2",
  "key3": "5sFgnXqacYDWwEAH2WwMFxCiYvpRQX4PfBAHZUFn1PAtkbtJKQ2kPcM8TKoNqpB1bRSfiobfaCVBQj2UaiGD4pLL",
  "key4": "dAefKqBucHrvFVAozcH7tK56HeR7Xf4RsayKDhEHbssVmgSjEEhiAP87YMvhSbXRvT4Kiir4sUysdwgi5Xpd9EB",
  "key5": "5jkvRFpPJh33vM52VSfYEoBkNCMKcMVybn5eWaD5tSu5AmeCGr43m7kdNLVCCGAnmKWyGaAYuTDpohiXS11LXLuY",
  "key6": "3GnfCNfcXfRpyvUxu6WXFtP1BWQMRDugoFqZkCE9UUVsZnE8SExZhwVF4PteHDi9D6mvgvww1zNazDY8twtfi64H",
  "key7": "4fJ1j9A71wyxiKrTPY1aLZhpMWzTKQBAm1ESudNyj3PFBScJaGMgsTNrPEE2MSGArrpBG78sPoNRi7uMGPGrhrdy",
  "key8": "4LJASxYSigQ2BzVFkUucHUVTJZeHohnhmkGhiAf5DUF9htxet7ZyrGDiQSwZu4gnHbmKtZnyRRGipi2msPgq16c9",
  "key9": "MQqudAUvwbW5TQB33F4h2kBacaAMFS1vhNKkdjpzC1FunT2uhXmLdshxKy5p54Bm9QBPEoBiM7WF9SBr24wh1kF",
  "key10": "2BJ6B2vpMpSF2Md5bTWXzs4WAf6vgVTEGeT2vR75YPG9LM4KRWAEXKZGL9usajV7ein1r2mPd896ynetmj1xVWFv",
  "key11": "3V2YksnMvXvG7anEyeaaYVtJvntkxHNEXoFUhJLueyGNjZx8XMbkUt7EW51cwq376rAsNDq1g8Tc2ub3QNyKweLZ",
  "key12": "3gk43o6kd4sBGCYTvsJozV85Hr5R7ZsNYgmqTDnDKkCAYaMt45YZDcwPZzFiduTWdbCi5DbnBcVmjSEhuoVS6Dpp",
  "key13": "49aY4Sr66ZfBkqWNRnqM1Q9ynEsPRvuugQMgdtsmSHJCyf6Bzu2iUr5svVhBtJ7HJch3qAH8E4UZ6dkuXCjZRFCi",
  "key14": "3gFaHkmPDNZTAknrh9FdxGZ26VFmKjwLf6yL6a5jPCe6Ptcfc35ee9VGErF26zFWFH3Tf4bUmqCCUDE9GZoVeHzf",
  "key15": "3bps5EQGdyBv2FXEdTKiNnnoG4oLo7BkZDi2eqQgPpYpxtLg5VavCbfMUgBqFV4dS2NT8r8iiUhjg1E7cdLeF9b",
  "key16": "5yTYuigKvWqseq19U11CXbgKgQGevVi1kSa3Zv8jsZRG5fb7UvxkPESbtuX33nrpFTpNmFudfYoXACPW5BhyEVn5",
  "key17": "4zygEaMUcEN8Nu9XVfHspzQHyBDMDAkZbCoNDqjqnM43JFganDgp7mA2jaSKWRNoiSCXKY2TM3s384iqgNWeBLiL",
  "key18": "2uoT1SxXUtpC4mGZVdNdAu1B7Sqv7oXXLxbeWN2YMTaT8DvVB3WBKpVKZwBTfgp9zNLZVdS3VrtNvnVFLcqXmQ6b",
  "key19": "63FpMRj5giyGogq5DGkQ8jQJqjWxZoHmsxC3ZUyNc672jdXgTQsjabBA4LPfgRJWp71ipXm1qFd8pthp9zGzr4JR",
  "key20": "5qKjHP4q6SX4Qh713ecWTkeaJAnVYGD8z6xP5XCytmizVaZNEnsdkeK1QXbsv6FPEg14rLEvDV5frUWaJg3QLrWM",
  "key21": "3LmMCeHWuYBygGJWJQAwKHnzVc9DPVL7Z9Do6gxweMiVPgktg9v5JqZLBb2NDdZGjLDPyCg3ULaGakjEKFeiSpVU",
  "key22": "2AaLA1Vzz5zcVGHr1agt48jnxrHxv6fzbsLRV3YDGg7jxYYdMeTbc85EQLKu3fgckhojXHX8MmStngBLp2rK3nJP",
  "key23": "5tWeAmbKiBxn2UmMVsWVwqjwxiryWJ2AntjeW2oWhfHJnidWXb8Mokivn9LTMLZ3ryRyPaMu3qJALrWR4HBj1zrW",
  "key24": "4Av1eHv8DioeSLJXY25mAdV6pZHe3sb9dCAmaeqpvL4zSmXAWRKkmXdG6mExpDid2UqNeqy3tuBcL6aQtkrMDUcS",
  "key25": "rQEDR41jFiLWHi8kV8f3Nt8sZaZrRDfxBTAHG5Fa2q2dbYmcubsG3to4jfNgbwiMikNHSETo1qcSj59gig8KdST",
  "key26": "4MpUtduQHw2AzD4oecgwaaiNMT7CaKbFJmBWqpS9tExR1JYK91DsuLovMuAZQp61CjGds2VsnB7P3Zw7mUkU2pPT",
  "key27": "4fzZkZpqjqozA83qirY7mB9RaLd8Bd4n495buHC8bDh6pgTUzVzZc92DEXbiMtyG5YBXnny4wMEr6onkx12jQeJG",
  "key28": "5foD35TwwTnTYjeZgXb5BvCRRR1a4yhwofJ9Qyr43RN4WjjZZfTEau4EXA2tNVrmxFAekGeWsXdkuPZRvaAfayYN",
  "key29": "2xbVBAnp8DzASHniekvrbAderjRy8Py4iWaZjHESVXeRh8TrS9NVk5nDXwzmaWsHUbG6t2EKSP5CvbyrESmRYp64",
  "key30": "3WCHRyd8yJrN8Q5TTYCJQ95xKJduiJ8gB3MLGgnL9RMf4rUqtKhooa3bwf1MKGBYXWiAqnX7kNYES4b7QKRNoRs1",
  "key31": "31RHv5mgp2gLNgQzDAurFUNXaGb1xviqtvKbSCZE9vTEJLBh8XyCowcCwfRyNneGZkyNtFsyj9LBG9ME7BonZrbu",
  "key32": "5PrUHWtt1rFt1P4nTtZNkZSKL4eZcRDdXoqDP6ttBYne7goUsRXFRjzSmqMDVUAcHxtrumkeANZ8q6bEqsp235zB",
  "key33": "212jG3dokeJ1x5F66RP9oQWN2Tci7HjseUWamYhhz23cvstF1ZRPSVaKGRCpi6mbrPMwAmovSmAzRZcwF39cg7K1",
  "key34": "3GfpnaXuFVSjHEhmDiU8YPHvcHcqbi2Qb9gtG4i96cjnS7fNiAEXRLzpHwE4eSF3QubBu1orLrt1FhoEtkQRKANJ",
  "key35": "66Y5uZnR3UvCZqdXxzAsBCJFuhnyjtzSon3Df7FTKYr3dr6121NbAETGP6PbLqAaNMnktfmqCm19sfGb2s2adMW9",
  "key36": "QHFjPcGtRW8YDTJKX7sdzYkdzRBjE14tK5kogHC8mzWZQnK5cJhtzq9sRbohymzYyot8mmDN5dsScpFnZavWe6e"
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
