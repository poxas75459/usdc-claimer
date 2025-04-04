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
    "fJCcFrQWucPKrmoQWyvnTMxGDFd8mfA8CTX7cmT2Z9WjmfXvxmUiazP5BD916Ca7Cr1CdkKvJ6A8L541pFEbhL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFcksHR4BCAaQyEea84PQ6pmRvq7gPfwkUEq14unodVRpek5NqsT3753WU71jsQVVDtL2Wzddr8Ur9MZWCgWZv3",
  "key1": "4PYyYXpELJFsrR8t9efVwqjSJBR2gCXVbzcEmNMRuj1mwqkrrDDnFxCXHKr8BhV4S9J5kmqFibm5VNUqRCpPpUgt",
  "key2": "czyQ9N4d4jJ1WJ2Yj5shiBZUykTfaJN1Q7EGikJwU4YxLY8Som4Rrh5fEowjGEWNQ26E5uiwgdnweMEdPoRCjtE",
  "key3": "mLBWFb2DaPndXxHG29v3hu4FRBJk6dJsmrvTGpi23xhm3o2dB7hbQDkapCiPkBSK7XC2pco1LqRGeNFrHqbxdyW",
  "key4": "4t77DW2xt9mZ1deXMfrqfsUHX6mKjDCUyeHQY6FRL247eixYyGx3zGhhzCJ26nEsNZVcyaNLuCh6pBz1fQyF4Mwg",
  "key5": "62fYmVsyKYwvhfpePgRj67Jo6JFyTzmti1oPQ8Ldw5DUTVrch93Zr5Y72efR7shW4CMj3RWpeVZELJihEoSgJz9J",
  "key6": "5HEoxtwXbDbLmJyj61dcFZJJaTWnhWckoaZBU8sHyQkXwSr7NkJ5A1UM6EVNvdMvKmrC1Z1tjsoFHiSjsy4Jr2Ng",
  "key7": "5a38iTYBeUkKUu9y6xShPP1AiHXU9MHFSt8NLuSp8Vm3dv2Uwgwwr6Ea7fwdJby6xPNd24EPcuJYdHBsud6aoxAM",
  "key8": "4QeRTEbE6fgoFyjrzohc6KGMunBW6XracPofD3YUH8s3vpYYErGNU65dHPXBbDpbTd9eHDTndqcfUkfbw46DbA9Z",
  "key9": "4q4TvnVGtZtYnN3WE11dfQUYJN3psFdQbRdaR7yZvgHZSMdc9b6USuVpUMEnrwN3Bieva834N9GsFBFSU3gBxkDC",
  "key10": "2GLb6crfY9PBr2m6iamL6tYS9mt523TGZk51pztVP1y4eSvZYWLE5Nmp5EBhBi2bzFWDrhopDyMnkW9HRCSwGqna",
  "key11": "5tWkjyiUag3X48veiqyCTdcXHLmHC7i8u3Qp19xS19iya6AFQg7ycg6zWLG96STx2gAuUPzrdzGVB7EFUU5nBKmf",
  "key12": "q1zj97BP5QpdW7W2Nt9ZBd2H3kHTp3wFGJwCYV7VtNWzdVHgWRLiyzqJjoSxnebBHpP5xYeeB1zM3ikKK6bS544",
  "key13": "B9jRRGgE84Sb4G6oNmW3BLnK3cj6mRN9UGqAoj2s4iURpN7A1Wx93sgPxNUE7pn2P6J3ZA1UfuQwACb8PHKbaeG",
  "key14": "45HVqVZnztNm5Rx5cv1kzFLRAR93zNEWkZStF526q3szSbHwTEK5PLjqDmzPj3CVz4iE69jAxiQRufJx7Un1CGeB",
  "key15": "5zjtNdpoM6y5uVbg7634ospKmpAaKMvNpsWdAwB4bup4uytfN34XXpJeDp6QB2pF2tRGwjrinmYnbcCdEzTMQVGP",
  "key16": "2ThAALPqNYHQQmBvZhT6nsbGnCH9PU5Chbsv5d21hmR4ta6VpvW6n583hVa88fxpC9o5EE4Q4ExNsT8FjM15h2Aw",
  "key17": "3ZMoRzy78Zo2YqvQee2Wo9iSVTdgG2yZxEadZ1QeT4mTWLMCDW58AUeB7Z5j5bazcqM5WEepcgvVnNcoFwbs6Cqs",
  "key18": "5GZd6siRFmLMaq5xo87rL831HZZ9LM8BUpg4WzeUQUp7SkvBkDybqkEynjwjVGJgWBTzzSHzkNPtbqCG6CgjT53d",
  "key19": "3QZvb3KwgQpvVAXgoaFbjBBjPsWyBysT1NB7GEtDWc9Zpmqpuki9rLbknkWuyRgXGTu98tNH99VZg8oeGojrTwcv",
  "key20": "3pKorRTNMEG86ByZqFch4CLNZokHoK2raFpGTG95ta6849FbnpvbL7LUgkN6dBefGUZ9FW1rTMVZzUZww5TMGRqA",
  "key21": "2Bhbx2VR2afebXy5pSFDKpsPtNAQ1RGEQ1cfSUhSWBy3JbPWzkp4GuxBVT1nD3WohRppTYipdV2MatyTBDhcLnb6",
  "key22": "2BE5vE82MhEB4p64pQVnUTT1ozJN2Us387uAgYKnhNd7DfyH7kJnosNj3iaqswL3SXSwQXpQZpHRiwhi6BhYH215",
  "key23": "3anCaHHjAz9hph6WFKaCNPFHKb31KHHjRZeY7Ujq7vnkSdQMy4ji94VAMMAeo1VUop1DMSU7stvVpyKygCH64T29",
  "key24": "9ebH7pfKEoYhPWhsVkWJDCaysdjE6hHr756iwZb9F8Rbb1Xm47oSQGVTPsMyBKhzCt4sSyto11NQCsPfAuHz41g",
  "key25": "5Uju3c11TKjq7Qy15jZfbZwczfvrrL6i2Z2pqURj2p9X7xV7q4wvfWnBHtBNDcMKuWyDdBRHvcMsinRbiupDMrds",
  "key26": "21xCKgf2i3Ewx7htrPx3Mvfvd36QLqEmv92pbFEk3kRssEgQD8fiJvrYKnUDybaDunLqNjfPbCX7RAvbsyngampR",
  "key27": "64FNYQCfEZTHfrX4BuodScFAJJxFKofLmkmaWF9iDLNYNvobDgapjYh3hnEp3LgkM18joEtfFXzNsYiCR8HvYsdk",
  "key28": "4ZUaVC89wHLUmKX27qzXzCZA1jZMxFuggLm3pg15iTZpWfotTaVCbxiQfRzcBQG1Q5RfzBnakENPeFW95XfvRCs9",
  "key29": "5TwF2wYkPZTbsEpFBa28YqZBYWG7i3ZxKP63JTodY9Posqr1izBUJaNdnN1ZmmJmNQzWcpY6Xqj9qGeXAkcWA9No",
  "key30": "2kPMH5LTDsSDPSnEyNT5hwrd7Pj3H6CnUSNgik15repCUqZDxSgSj7VafAkjTGxh8WLMabtXevyfRMdbEtbrZh9H"
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
