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
    "37kgfswJ8aMgTscRL4nAcbqiQp8KgVZzJqBgay3p6wYdNNcyobrmpnera3KCoJzGErzfBebkM7fEDk9Q6P7GrbWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642tne56Ko31XFDGJxpcoawhRNJwQX1ShbSTXFfQm1vhCbeuVC2hfhocei3WEG49fH3hdeRSGAnVPzkhB4jfFAz6",
  "key1": "23jEYx1wZbN11r5iX6xxZjAnfgLCmjZDwJ5uztuEEaiC5fj6RJsTLMvMZYyfFJAXHsDENSBUP6qZPFSEwZorpwh8",
  "key2": "3DeqP7yGVzoBRryPh4Sj9HrstHi5gzaxcFufK6ddCdtHG5JMNXMHxpNMUPh4oh8gLLwoGrVwbd2wrr5NR4woYJeR",
  "key3": "29EZCEj5VxsziXrUMy8ipP9XDuS5KvH3UbyfEZzYqM4bxYu83D3k6XNC7FCBf4fWnfCSiQAAroxUYYupseMjjzLc",
  "key4": "5STEn2A63v3bXSkH9pGrmdee2dCYJWN3TYfMLhzWKLvHngKAEBokq4JY8XfY5xLejCAA1mk6jo4ihQhtMw5DJBnX",
  "key5": "33uvpzjoDzUeFD5tjGpkQC978gzEwG2BuiyjRtwoADcSZ8VMvgSrnyGCDPpZLQCx8bguGCFPkWsTha84tsBdRBZC",
  "key6": "5mpMWn3q7qWCRjf6r2HyS5zJgJv7bm16k6SUnk2p1bVxY1YFnW4QVr9QYsj4oEuYqKVMcXQgcK1LUhD1UCoH5rm2",
  "key7": "3o6NBXT8dBPzNLYm6pDpw13k9rXrVqgAiXYyvcihi3TzoehirC1Y9BLdo4whDTKYUx8JTxM9TuzHCnkczaoVcnXb",
  "key8": "3p9MP13d1UK4Lii1DovYvGGR91We2zJFr2rxP1gpPqaaqvsfE5hZjBPycTHJopVnAK1gHWrrhff6oupjR91By2Qk",
  "key9": "dpzz6kuqm9VJCCtkwjDG85LybzevQ1eqwujgsYY14qGgJPywWhjUdy17rvNLCBfQ6BS2dfxjN6hqy5EtDjKDAqJ",
  "key10": "5Pj9ES68c3na48kJTMegwae3cJeo8SBck7G1TQz9c3M89zxR545CZ4ZNPGP2jxrwJBk1MBeYHyG7g6eyK85WdqvD",
  "key11": "4mrkckdfVqhYcnGYh2WNhpq4WR5AWJTU48uN8iFDszWJ3NSpdpo8qa65c8fmCdetJkrZqBT9crqUFqGFmRyqbMC4",
  "key12": "59dP953QDJYv1cWRdgUR2ETNEhEyrkWkY5niTuLKcuuNrb6hRrT3AAj4mm6u9JxFTuxZmcNEDmfLfaYpibeekc5P",
  "key13": "43T6JdRY4jgXXcwdajsrC9HGFmBxwMocDBQTXaXZgGJMvB2d74f8t6wgW4evpxzrFCogZ6SF25RiscVuySfyWvuf",
  "key14": "2acH4E2PnAPuWgCrFJe2jwNttEg6QEJr1FnqTJhW2szG6WQS7taAz56tHeHVuY62qw89KfUzu9SLcfKeDWDMkN16",
  "key15": "4vmMTTEU786Upo3gturCuZXxj3MY4HbJCT8tpksCvJnBrUr216amoXSXri1oGfzzgSEwdjFY2kcWVLHLqVZNr3hp",
  "key16": "5sJPbkBPU7wpahqwBUbM1ytyWs5fcv1e1ATCmZS3vBX37NS2awU158TCLXNVZiLKG24uVZZkmEozHeH2DUxgCmhE",
  "key17": "2scfHCYJ1g5qiN5cs3mvJz7F7K9NLtUf66DV3DLL31wvEqyDwBtevnEqrpabT9e2RUDrucJh9moWPmpwe9qMzvnx",
  "key18": "5mhn2vQB7CFVQQgvyiR4xxVF8uox6bMyuRC4DrQPNVaFLVZ6kXn1o6YJUhJetWsscyEBGwMCMC2UgHn1xfbpxw6j",
  "key19": "52T9X8oTN3htmPm3MEAwkf1x84BkqHM5E5VMB3ogdVUPSfQE6o2cA4MN8iSS4W5ijPCHfvdWVqEXS8BhZkUsPhqN",
  "key20": "3gxH7szNX3ifr1XnjC8yvfuzqXYAqn2LXo7gHBxb6wyTUM2dRpq9atAmeaaEVFttdyETNk74DF3BcdpDbWV7Bk7y",
  "key21": "5txW5Zco87YjxVeSfjRJReESucydZVANYfu5sbmTLvsKv77sWqhNDtMd5q3QqHrswMMj8fXfZNJPVETGZeR6mnty",
  "key22": "4Ee8ykaho65bJdaAwV9dqNjQv4RRUuhj7LaNWxU6MDxTH7fq8ztBcdSdkze1TYTHejzfSCA3fk9ARCqQU4J2vNbj",
  "key23": "3VNa2KnFvSC1CsguqoiMSCqDLA4Hou3GcrBemmVvk33MWZQ3pCxx6vdH4R578eBz5apcHCNzU1iwhBWyfVAj5s17",
  "key24": "agYzx1mAGXgGRsmWicgLFnaeswWaqUmseths59aCPsejotLrSBp9GigNNVY819tmuSSq8wZxyVWkxSKgChVVx6t",
  "key25": "2gPw7ynCPKGDMQnijVPHp2qcxgUdNUSecahksKULTVLerpXvotDoXJd3SpGbfb6W8ByeSizBVtr75J9Q11fxCi7F",
  "key26": "3JsXzHTKSX3LyNzopF9e9Dz3LcQUGtUfnJrgF8SH1FX8Rj8HsFj9QQGfNNJMa4MmtHkF3pRLpYjHDRGGBpopEnXC",
  "key27": "3M3Uv3JfTd73sYcsUnmpAJuyuWbqqNNpZHzTEcM67wRFhZiASsDJVQ4Hsmt3CzQBf114DKb4DmDgJgwuDF9k3z3Y",
  "key28": "3ft3fEf2KdXd9RkEBz9PhoEoUoWuNJPCVuArfQVE54Z8yfsDRD3EapcCWcPkBCo6UuGfFpriDEfcDGfdL1rYNktA",
  "key29": "3nSXp4A15sSqSxjKeW5oR1eAEPjy1CeWMWZamxJYEMXUKpEyTq6GT2GFcMoPc4Z7QzipPxukKEDcLg4SKMmnARED",
  "key30": "5sFXqKWMancXYChPptrbFpXgLYNgtGPn59zQM4YQrHpqt8hyaFHBeuuWKrneEvBzpYXTCguftPKofbjtgDBX7zX7",
  "key31": "4djoy3ryhKa3KwQshX3GA4sVDmh7tKrof3CTQZEuLvgW1BTDx9y6e1eRvFFpJ3Xh7MZFFyDQRAHrMBzTVAzx1rZQ",
  "key32": "4HtXjG3PimwJ1cT3amovBbfs5eE6pgdWhTHDS4Vvk5oPkcLwWKmdDiXFvLnu7WT3rFj6KNEkTCcedNKN25YjnybX",
  "key33": "3u7HcwzepmYBwyuo7fCwxXv3Bxoo4vwDTaaVqPhPHr6fhgY25GpMy6jSt3vKY6v6bMk1mDfksF8iicpXWUZtVENf",
  "key34": "4xpoHpjv3qoMdhF88q8iFSRcgDtieW8hX9S2VGjQ6XbsDEuUhxPFmpaVb3e3QiBmbjuqxuazRQvrVwkUbH9pkmC3",
  "key35": "3cKmEwJ3MxhpSebweyPGSnMkRxugfE163uBoF9wCVxTquep64tJYC8Cp5Ve6V4dm1cHTK25a6RBTUseCuGsWHdZX",
  "key36": "3BbhjSox53mgGtDAtaEzzjjZ1qBhLgG3Bf8uqhJ7itKA1M4gVsHt4LiF3k9zXvYS18X2LarWr43s7hrEHcux1mue",
  "key37": "2hNPzVj9S4xRUvTaBDtMy46t9eK9sA3Nq7G98CR2gFKcjswxirQ8aW2zq92TVksp1hundL8TrCMpDut6X9H8kJZ9",
  "key38": "4SCG7gHdMDWQp19Yu7iSzzFXZ1Tp6FwUr3VTvcdkoZh1BH4aCkrFpyBBDPEoSvc84vKyjwWVu3nX1BGG3LVgBQub",
  "key39": "45Mj5Gzt8TnzHz1gCDU5HrtPJ5ZvdEwnoh5Biy294Yt2XvFfKB4pyN7Wztipy45NqHsuvwUfbkX8j8woPPmQkhVj",
  "key40": "4QrYa4SGGtVJQguBG6MVp1sud3ct8DLjRmDbyGoB83Vmwpsygj7vhUMKUVcK9o4vxiEfAXvxh5NTEe8bKpkzWCdD",
  "key41": "42hZzTd7Wo68Uy5Z76fW1PV7sue1zZLu3oN86AtHc7cKu7ZQz2BDG52B1vFqcnGo4uo7gb1wWVsZSYMexfs2x7Ao",
  "key42": "ZWhaucrrommy9drNXsWnsh97eHuUPhLqLaveKiBPuJGGUz2rjLoSaNnXZz2NJZo4rZ1gruCyd7Ujjzq3RQRyRTn",
  "key43": "4Z69G8gs4W6ZzTGVVatGoghwibfHafPTaauTUQT2JA1qL1XVN3HJSw3edJZSWptRF3wxNgrxPE1KX3WbobLJTN46"
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
