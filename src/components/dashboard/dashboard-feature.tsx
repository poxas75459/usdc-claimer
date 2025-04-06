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
    "2UF84EqyADDBqeqM9Go5vPoYF7WGveHQ91FzQNh9k87R7tSkDUAoYy9tbKUBA2jEY9dANcvpZp98Y55pRiiqqnFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNcG5pCwbtM6y4MKdGUrzZRwJgp253ArENW5848yWH7HZiKWdsRwvHp5xqttKnFzXrjoLsaFJj94ttxG2kLMxtN",
  "key1": "2Wj68KuAX9CEDGTKpb53DWGuL5XxBUM4ht3RrBKc2z55DMmXn9UqggBErGk2jjUCW48VBKUdU7ZqabPVVbRzebPj",
  "key2": "5hiYH3ayWmuWMqRefjMfGUr3RDpNftJVRmSSs3zdjskxTGRhZGH26Udy1mP5rzr39DJJNQcWYAM5pJnGj3eaYbpR",
  "key3": "5eH6HXCPsmjajQEAQPvFiDdMZpR5nWnmd4hBn69ag5iFMqzAGVUryybrvF3vvPkz78AVMvqmZc5tscQjkrpozN6D",
  "key4": "3mhPeRnvkMDejyzCuHdiLrK53ompBxk7cTueEgLHtgzb2vPSXdVV2yvKaQqq6TuoUBYAqFpfecrCmCBGnSjgYSeH",
  "key5": "5GK6DJcZzUL6d2pexccs2eAoiYYLHL4UDwoGgVKPJJ6AGiyeLvYXRicecp7CxuuGXnPU78CL2QTFYExqDciNT6ii",
  "key6": "nfVrrwJcXvzBRX8cpAFJ32E23C3BrsGeXPMQeXV4Jt7YLymt8mfzBa4ipwNtVVEK7zF3A5fKW8VJM26fBpiWj7E",
  "key7": "2rWrgsf4SjUv1bWf8fYq1d1s8GP51SH552Le1N1gfWmJwPUh8c7bLwMsZXxRM51JpM27EHXwXkgxWhKqmdmLKQAh",
  "key8": "3G37EnSW2FCf7nsN9JKYYr14FPDhCFpRLQFe2UnQYidU7jMdx4MdVodQFdHXPrzV43Nui8YHx5FgVCcsAKFfovUa",
  "key9": "2D1Q4UrHSUdPzUv3ij9teQjULYgK957CnYFdnfs9T7ER1ryuqihApx258QedYxikFiP72ruhyk9G7GY5BaGL6PeU",
  "key10": "CjZoePX2RDmp1nzyitbnJ3x5ocGHPyHjgBkucira8yqkvEuBpwTWy4p7pu4UMmEHLnVVLTAg5UqQvD3zG5oJ6B7",
  "key11": "61unTakzFqk4rzYa4oshujtDPvCD9dkUkDjCbs9BBdsJ441PabU8KbAZuCkvpb1v2PifjNSrPv5jgX2J4pZeRUaB",
  "key12": "3nMiy5cg9KcdRcnnzwzxP81cG8JWVTL2JAirNtGoEA9sxYhFWmYZ3Dm5T9QiamJPZBpLWn2MEwBBxhWxSPMxdeh2",
  "key13": "55TJnfUeRpxxaZXuFQ8qRcVN2yoRSxx7qdPSFgUWHH87DRW98Fzzdg3zbX81aqkzsJJq9KfrEemBeCUQV5LgdyzA",
  "key14": "5cBZRPHa3rHtn29DFFnwpqGEeNVWKb5dRvbUqQ3TwxDgs2yZg3M8Y9GikP4PRMu7jBqXNjf7FVtSDe3nGappGoWV",
  "key15": "9zFqQahiC16mei9s3BUaQToJWJn1GGrGj5CuE49pjzfYctKkQnpDMzFbbRQcbL7VgNfnDEjr6Py5CeD5KcpHCg4",
  "key16": "5wdk1Y1iMcDDorKGvxTG2sPtxePDtKXaYXEwjNSbqaNC6BrkzKPmpFJ7tUr4B3yZwd4r9tx4xKRjC67oA1Q81kyA",
  "key17": "n6gUNUdKednRkPVFGoKz4HchhZX2XEnfrwSz3ZHtuitAoPzzbLeAtgDE29VTB57thQ2XPfDoteDnBK22UTgjQ3x",
  "key18": "4nCBH3FZ4MDNSay68VSkCnpXqY8sJUHnCdJKhjCwQUUKsJzFjpLWyrfUeg3VNfLLa4es4iuE5812Mo4h73MREe7Y",
  "key19": "4ivgpX56orZjF6foJBLoqd3QPJYC2AFzMX8KAKKNeV1LHxdoQwAfc1T6gGcqFP6JSqDuGVSNem7pezCs3n1RxPvE",
  "key20": "2WEo2bFZw8s9NtpHeYBNMu2FHocfvPAzCKLk5Sgqhg6BTBAmFG49MTbR5N8PWqbUoN8icryjwXi8933KEAgYnSTD",
  "key21": "4crN2wiPPxYXVmJHN95Sb7xjXjmMpRsfsKfdNz5LoPiiQeQPmWz5HumFLK3Q7Ycd5FHc2KNQ4zsgUG9e2vxbgyK9",
  "key22": "29FYvvciWcWTDTvpLHrjtfZeQku59QmaFZsKjB3KP6zRDACTRfruDq9heLwrhqUqoWoPsRq45jDaG5bupWkcLaSi",
  "key23": "5RLmU7xgp1TJsVbJE39LvzMShNFBcZFt4pHX9VrwZV4xY4ApFyZG8Qd5uR5AypJcwpdfQK9D8K8jZrzf3hFvn6rq",
  "key24": "4XtUrFJJrNEfy6fs2zJvkkwetBEvMUEDXcnbx2e8tScVxgyxME8hwKW2XNih7ngpfC3vxWSMeRaWShhPx7U3wQDX",
  "key25": "4ohuo2Pi6WRuaJWnX6ZV7LzseuMVb38cB4LFXUMGd5ZWAwRkXukgjB7j2MonYjYtVeYfH6Raeb7qu9QoWiZjQqBL",
  "key26": "4n22aLDntVm3HySSdUGhVtcg5K4GgoVsi2Xn7BXNHu4Vbz8NmZBWBccRwSFVjM6nTwg9iKEpL5qRZF1my6ktmSAB",
  "key27": "3g7sh9qThB4R84bwPHDSGu9r3Bt5qHjdPKx83Giob2RkDz3ZLpdCDfQeUd3nqLvo6DcmMhQnVEb6teH5RbCPLs59",
  "key28": "5SEimgzEKoB62tNGziB94ZEZmx7x2ctVy73szANxi96J8NoTtsH2LMmHTM4Wr6ii1nPhUR2f8vE8H2FQ2fBDRXAJ",
  "key29": "3smwiDgi97xyc6yuPz8boSVWaB8YgdTPxWmsH45n8oFuhRPi33k9DaNeb28fnjqX87BYqLx9Vw55VYui4pSb5vy3",
  "key30": "4U1DQrvCPKYa1uGzLdafMJSffSHh7tVpgdVs24zxywyan3bp2TMhWT7BK6eaxTbUZDz4AoywQUKqxa8tL3Hk42d9",
  "key31": "4gx3SfdGDdSB9VvDc3tPt6o1cKBatfAdBUQ49oygZhzkHonBjz5cz3MQnUqnDsJLSJnGfnB7LZpprqCu2MJLcUK4",
  "key32": "5qCTkLyVNaguUeZpquMdQ7xUUmLVdXznV3rCcXLV19n1ivbcfKt5LGG92DVqbhNets7AsLav1qfdGpMUxSN9JEUM",
  "key33": "5BLeaokuG89aFrB6k48h2Cep4hzez6LwX2saXVhcba9G1nyrGGp5WhYJWdgnix9AxKcboy1LHchpTReFSkRvv3Jg",
  "key34": "4dZWgK4fXqfRUeBzDmPTWKWfhP7Yc1E7BWyAR5Du7F58Eudng2Q247NyYFtjDfJet8xALdfmQs6KgHWEeas4tfFe",
  "key35": "YB4xAx9JbDqBQgpZZ9TjDtnyUymoswwovpBCvtT3sSCpDpgcdm7nqwtRzRJ7VNu3TUiUS2Fu1f3o955c2uoEako"
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
