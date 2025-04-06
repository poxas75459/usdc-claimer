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
    "4Ff74K3yopcY1Scc2oftdB6K34ooutFmJ9Fyuzn1pRyFoUbE7ceNfMJCTDz3DMc6CFFDHcZeoZZc55xRsrSMSbeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37kNT8cuys1dScqH4jS9HZWQYNwkfm84kc8wzM8RFsnTs9ZmwNXxXoX3VusestBQLA1yTtmMfNCL7iUvfdHK7wNV",
  "key1": "269aQUXrem9VxGDX7gHbheofEWNvkp3GREfc3H14bMK2DSpNbzPisKYzVzsNvrU45th74E6U4K9cQsrSGcKYNTa4",
  "key2": "2FnQyGUF1iYa68gEaWpsJfg1bDS3tMpg7MMDRQhWvndBKJjrNzogAhVQuvw9iZLPWzFE7DFDins5j2Vu18hgvAGr",
  "key3": "5jKuHdr6U52bcp6nKJKKg7nb1VVdxquD5aTQJCmxEMYmJ4QgQ2Tqy53kPqcX4xQ7oUN7nsSkz1UgqvXnycUVJ6Pa",
  "key4": "4SoZCVLQhhYs3rbnHu8YydMp7ADnv6TTRic6SNd9Dcw8y4iu4DkFJoVJ5f1RorUq3uY9iMfq58M4ikYKtR1yTiRP",
  "key5": "3Ew1DsqPdCqdV26cjZ11nm3cUAkCTuWQpC4dj5LTLHNLp1Pqn5626rAtPHgF1QmvH1eXnKiXQ8LxoTzFTYqf7WyS",
  "key6": "7gYnxg5HQEt7Zx38KcYg1icxxsR4vdzwYANqDYgJ2zsS8FzfZPFQKiKtmTd4Y6tqdJYzZit7PJhg5VkTxW9CAqi",
  "key7": "Pd6iDYzDi3DrjGFHSvVkUtDDrzHL1mzZy7x8dxJfu1JtvADQxt19eSjRAxUpDa8xNTE3k7pgEy153SvAoN4HU3m",
  "key8": "2UEabNXXn9FsENb6wp5T8XaraecN9q1WeigY4qK3k41NEoQj94hdHJQDrgWyHh5v5QVY9o3KW6tVu13XBTVxxnY5",
  "key9": "3FFyscgP62SKzPd35RKyvdpKYUFZxMX4XPJvevNXFtQMeMrVCiDGf8NqsSmBHPHMYqmti2q8Gh7nTjZSrq3sruut",
  "key10": "45xUJjD4LhXYJmmE8HbkK8iL2oN7HLPR9k9TVdPP1m4aeYEaC57RzyLLaSMo1ue9kCvAzdjfuyZYJzuqWfTdQ84S",
  "key11": "4uhPPf2oSWoaRiDdVA5CitMwehYE6Ray93Gj8qBbvMEU2uhqTifKsTXRe5XYzXpPe1yFPBrfYrDGoCdLpJz46h7P",
  "key12": "38cyCry8MzBzpdcXEDg5XWL52tQZTcBvPAkxAd3DmJj1ocxgGabVq1CpzKMv1zxm7c1PCFt8skUGFukdamdSTU8R",
  "key13": "4tsht76quRybASAyyKEWEx3maoxXQyNHXZceaajJhtnSXJcA18aG1NYKEoMSsKiQegnPGaMfTh348nt1PF8q4UrB",
  "key14": "5txJDwFbGnGCsBXkS5KzUpLxmMDVPJVSn8fg65o5qwK45XRkQBBcz3jV7JfYcrE6hw9MmiurZqAAFdmDvDJfqy8t",
  "key15": "4cQxkzNRRP5wtHkVhnMPkJUkpQmp1fPYTcYuUWVcuud7HqKaKvKeaUscXbZDqk9tvL7RNNHoDA6BEUdhtuTWmJSs",
  "key16": "4zAYPgsc9yF5453UepXGLj5aMTnAzZsSbx9W7r4duhGPN5zSVoqyZa3pmCVMxhfThYsWb4hUDXhn16if9CKAVtTy",
  "key17": "juy1Lbx62z1uVYen5ZCjjqrEbXPBFP6uXe578fbizrueDzMuwqhCJ4akUUeeN5GEoqru7kNVvog6cbbKpefnfdW",
  "key18": "4cXtPcQGUggmejMFFfXvpnVQ7hQNEAUZL5ejbLiM65SHUdgX2icKAnqfVVhnTC8ydfDEQPQutv59cJxbfqFWaKoE",
  "key19": "auHNgNVzrZdBqza7mnueAR5YBm3LhEwbB5MXW1BMTiaHeBTqUQYPbWAqMpFzCzE92hyVbsFrcAgHHD6wGE1ch6z",
  "key20": "27gmF7pcYPcisNjqkvXnuFZYzR5etkb54wSubGMDioLxHx73bQ8JTBo2jZZWEeRmouYknZhkhrq8rMYzXGFd8vF9",
  "key21": "5Zff3bquYCoXQWrCNW2ngBjGkyoY8pjX2w72jTkC3jSE93QhmVjTCmwcckTpB3eVF3y8b7VMmtJMRmRZhGbSkMws",
  "key22": "Bwrgpk2k1ntSiLbN7RJFpoj65L51rtFVpRPpsYB5oFGVtQx9UDvHTPFKq7vyppVYXjWcDWRVzBAebErufz4Sc6U",
  "key23": "4ATTXWjnyJbDsMg7o3MHChivqnbupQfCg8pVaooZejWhA3PW3LVAJscp8z3CSysPnG5coRVQ13Q95As1fHF9L3A1",
  "key24": "taktsRRffiBSfLiGSpS4x2PrhP9a79gPjReucqRTvhkUPLBKJLRCyM7Jqa2wsEvTowSxpp87rQRbZ5YDcSHowqL",
  "key25": "5bt9sVMs4zsxGxU1htp17wrNLXLDfbYintxfsg3shdb6EBYVAoFthMgPgisEYgNwwKh4EpNcKKdgV4FQbsDwJEqL",
  "key26": "4m8DJCHMRWRGH7uLXcu2jSkznXrpnJawaE6HnWQooACMaktsGWW6FZW8oRewaVBi4Z9ucoXiNNJSEFkKh9M2rTey",
  "key27": "3rscxBRWb825TfVc8JdV5aanPPdqKYwbvbW818Lh6X8fzx6iU9phykY6Bs1WRwfmZzNGNURTjmM86kuV7tE64zte",
  "key28": "5CTXiXdPxDcb4SLQSX2411gm88ndTWvgociUs7cnChcaYScu9JZYshbvc83JzhyjS8wAU1551wgkcPckoW7Mw71C",
  "key29": "28FJGfeGLacEhNWhm4HE47oaS39oLN8bEJNkCLYLoUWNPyHzQSV5d2GyKpPd5PwzcEkbdBEazYUPNzCN7Rrg21NE",
  "key30": "4ZWU3iYrBf7YvzhCtjQpynwUEhXEuzF41LENT5QtJHc7Ui78pkZZCrnjcErvU3duSgYhK4DLMuDe8dYgoNP6GXHF",
  "key31": "2WtKjmAjCMN8ueASWk7RoG4qREmUYQuTYLBabsWFchBfB3jFyZhZVYSBUyHrCKQPaesW5EyMeMM2HyNyDxzcWin4",
  "key32": "52ecbg612H9Rcjx6vFXrAfranxFjvZRpNwmi1Eop2FP8jngSFDu8C1YwYTNU9Qi3UE1xGeFyitn6AQ6f3z7LvKAL",
  "key33": "3THWYpfiDhrWxDhiXk2uKgDmbVPUQ1USmyhhkGLySrzpbt5jtapzCG9BxXhH6bqGPi4sRT7LRSkEmXuTMTW1Wbsi",
  "key34": "5j1CgWPEBuh1HHQ7pHu8ChNgiZWXhBbE13FBvAGGYcgMJrNeL9pxj3QNSfcraVvsNFtNB2zrveBcBqRchhx7Pj5d",
  "key35": "4uKmJT4gQEWpE881UaCvZusPtGmf9NikyJoV6QnJq2ozkBqDuKipgChUhH57DuAva8HzTo6wEThNst7YLSzGXdor",
  "key36": "5L1KtV2G7czx4bf21F4EYrUf2Ntyengmc2Rc34iQiLtfH1GUq3WQZ6tqCiUg19X12hsC283vdzWFgTDNPpE4DkvU",
  "key37": "3LVFrTa8bzEB6onj76YXdJ7My7mMpNWMHLaNdFV551Ujy9VpspsrWRr1AF5cBfkDsGKhtvJnEL74XMRtSDoC8r74",
  "key38": "2xeBnU6qYpJYaHyGPBPfvYuBUGjy2pX1QnU2om9bxqtAiJrFFiGdMXhUWRsN13DYjNugnVzakH2wREhMEGr17q1U",
  "key39": "PerpwKegD23mLNvPnj96SMjdc7gerQmxycUfzuyB5A1TuNH9Z9hBsVZk8coZQsWh1HwfEasjA6EN7TLsKKQNjYj",
  "key40": "DHmD9D8QefSEhNdvupno6R4Pbz8pxrQLCz25XNYh7Njc7SubVxit9e2driVff6gPBeRe2DuiHtVvmKrCXrQGr3e",
  "key41": "34Mc6WVNbd2VREBpMt283dLLgz9UFxvZXHeX5PdPbiVGZHnhs7QWXX4nxZT3d3HmyBcD2m6SPbuaTUsm8GEh5DMF",
  "key42": "3HcCVrkGZ8Tk6o5bSiUo12w5vUXv3USZqizarwENCG9d2iywKpKnFAdEKmF8wUV9ck3gmcVWKQDZia3kTWZN9W4A",
  "key43": "3ag2xfFYWDQW3PFSKcJJT9Fq8mCSXLWtU8U8JR3xrnSiVFYXtgc59bPSQeFGn1QftYgxJrE4zWBAQrzL7iiNkhdF",
  "key44": "2FBhRTdbbPHs7xUK2iA9DbFjrf3hDyPtxDpdbXThwH3CnSLfAuT36ZyQX6GfLgzPexm4C52iF58LExTPQMdxgS7d",
  "key45": "4vvTWa6GZqFwjNEpGjAkYq2Sd4BY6Zpx7QqmMY7exFqNayYUfT5VRjQNbooiqZGAoZ1TW3QVsVGcksRZB9ogZkCd",
  "key46": "41nobST8KWmNbgV6V7WWGBvNLBxzXqhfFDbARYHeRQ8XFL7zu4dDQyEGbsfSLJQM9jsnGXr4p1Baa889tcWGzdUv",
  "key47": "5S3xMDpP6qTD2ShiCgpKsndcD9Kr4TsjvUz6XZ3wsMaH4DdjEhjUPhZx6rvNELsBghwxRV1fifCwUBStamy61t9K",
  "key48": "66TBdxyocq9BXu3KSL19EQiMYeCW6mDL3ddRKuuLxnLu7JUh9k33oyYUGaJwkCkhV31tvmyYq8RkHZ33vrRxSjo8"
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
