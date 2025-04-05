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
    "4MUubxgfJ7EiTbqsSwDLyBz18iZs8PKV7cwtGduyRkEFSAFRHPzFsjaNdj24sniJGRkRcyEcrLoKq4UdSEu68VjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8fncb1M59wqXW3RiDSBVTgYZwcKVA3xZrRCVHKG2hiUwGfNu1hYLBAJoi1npqJ9XBeNKG5R7vPxon7wKdiMBqS",
  "key1": "5Y4ya41Cu2Cf2edPXbTLfZCABCwLePc2hFtZk9bJAU3S94ZdiQRpVRvdHCMRPN7FKxzSijziKfs2sbvD6aq9hoAv",
  "key2": "3WuNWt7fsei4MHoQ7pGH3NUranvVk4axKzQroaW893Qab5qm9XerhsvHhUXYrquuNj9aLVxnYsnaD2K3bCAkBHad",
  "key3": "3XjPsKLrvKcaUHrcFZrfw9htwQZZr9MqjFK2q6QQZspCygPHGBkKFFFp7LCTcuvnDpAvzg6qYMWk8MD1XaD7ryNe",
  "key4": "3BQAzGeCHgPQjmGmoDXsi8dPMV1JNTRPUuwY3L687B9LSYS8XqEizcPfjRLngkigW5T1nvWR7SByh2WfDf5A3Me",
  "key5": "3B254NqvYQ3B2z33X3N23C7vEKzwu34rCk6oytcbrgsKtJy1TPrJEdEL3LrfUJgeJteTZp1Yk64aBtDhqYTcx1q5",
  "key6": "4Q7tnMnkCfQXYuBkM47rnAnqTjhaNPDf3eyhxAhunupW959XhVKgdD4jRQ2WHNxggjnMnv6EMqaXmi2LjyoHQTHd",
  "key7": "32u4PF8RYJB65EGzPHafzRtN84SS6N95wM7Ebk3zSTS6DpporZiThTcZYUSLb4fbZf1K2QxhyvRCJ8pHcgxut5H1",
  "key8": "3nHwLzUVDh7FDoE9odazsCe4xEHp2dExakuG8NekCFhEdBYxeuhaZHzvFBk7GoTRYQYt9Hy5xY16AkBo4HzY4qid",
  "key9": "Kd1qSkKUvWRoNGFQ9bYZ9syCR63xTDnFdEJS9NPMxT3vtefVbrmgGF4hjHR2mErpbj9WwvNXrAfvGZZRjgUBptz",
  "key10": "3XgnZfTtqAvbf9qizPdxfdh2dnvR2Eu2N2LkNUWWCdqc6H4nQ7sN4vcFDRNjVMDM9eTbTrP5wsokdu6y35ysc8JQ",
  "key11": "w2N8hzyE7HJrFottPoYHQL31vqNUUjqWdLZMf818xY8YoR2Lza88zXRo7tupEuUgvB4vFAVPuAWE1YowkapZ4cw",
  "key12": "3ohYMEP5WctTHpfEiN63YAWWiiuzt3xpe3R4wgddPUaCFyYPsAabG2AtRtxovZKzdhtWvNAhchsMw4VsX5R6ejAW",
  "key13": "V6vDYGSvXHdx6SVWwGkohvoAoi5DJ8kuLeYnzCgA3RvpY38pazJCQELdSZy98t61YzEworGSkxQzKNm4QL5coWS",
  "key14": "2LfqxXwkC7F3cid4WgcNEcFX49rf7MWpFSaNWdHM4UkZFicasJGgWPMzE2rwKW3iDinEKHBeDcFuaksS8EtoS9sc",
  "key15": "4WVP1QTeD5Q5HsmPxQ7QCy2DeRoFXmahYSm9NN8qdHp1sXKMdw5KJUSdzLuGguHmuncUrfvfJSQs8xQdzh7rQJRh",
  "key16": "oU2P7QaKzE3ypwiz31g6CGafD3cCdUjqUBsvAFT7AmcBuWY9H4EwzfUUR674nkVzLDFyWYDdAcPdyC8NyJGh6Lq",
  "key17": "4Bgc1fe3euXNBygExGR3otdr1eNjFfyBNa3BpwTtkHR2UxZ5JBZHxJg56tbwSNvc6smBKSysq3qmrSox187XmnD6",
  "key18": "MNcxdik9DLTDLuUucS1GK6WR3ZRrtH9T8fxTU5G2vy5E17tAXg78SpXX8GM7V7AAtuCkqyzz1MARhXtAqCdfS8v",
  "key19": "4V8Czdm3jVvJFtftbMLDZvi1XfwXxjmPvavi5XPMAtgaAGiXh6hfnRaMtVQ28cP5J9UZpwW6EhbS932ZDr4RyUst",
  "key20": "2LE34R2HBLRvs5kDByn9vwfTaQL9aj78WyLzeBzpmxKCKfgH3jfHJNTHS29aNWTYuqziKxuhMaJccvcf8Mi1W24M",
  "key21": "44iJ8nSmt1Pxzk3S2dwcWCutsjMsGhUstKtqKYQXLNavksQ9eai8MFY7GBFM8EcvUUHPJ9mhpur9hyFTUHFxePR",
  "key22": "yfw2WNnpf8v9EY9NKk8wptgLjcYksbpXzrXgTSVr6DhSqeHpsnY8WdQUB7pY6SkrKYecLmHCcTe9UVG6z4KVGnt",
  "key23": "2QEsXrkCa24JpSN6f4rCVmiELE2Lh8mRaSD6SwvYVKaaCBvjAWAruBeDnZj4KjayWdZTB7dKF37KCPzrKyoSTL5w",
  "key24": "hwQ177csPunJ7Uc9YLBDVUZ4MNNQqrZpz5iYwRLh6PUeeHinWcU1WEBkNz5Ju4YUyakMt8aRUM9dSUvFkXMcrdC",
  "key25": "pPeJBDKjF8PegKxLte7JdCJpgoqT977VU6R75C1Ytk5nMP66y3Tt4KoGRynmVMWcXgWEAxAdm5oS6ksHeDazFXL",
  "key26": "5dNfKrAf7NE57uBeK9bK2ZtgQwbrPnZF2bok5RiyndiWvZQdMrF1rbPzSsgJER3xsg2NgZwUHeNTx1LhWFhdB5Er",
  "key27": "TZKLehtNBcSWMecCD9JeuV7qPPN9cpyZBHZLp451UnLVAnNBLKithWTcs7P98KTnzRvHhJxEfJcb1bFHUYrDbKz",
  "key28": "5GH5ebyZgJJfX8gEpnWPyhW9UKm4hUPNw6NoAsWDAwub3NKp16VacSsj68wBDapp4q1qdQsw8Vs6Hzfo3miNUVDi",
  "key29": "TAiMi6UJik4Q76TdPbB8AWHhmtgQ1jakadzT8poLJeNGcoVtfr2MjvYwzNoormdKyMeC5HNrZq1K3vnd5dZZU5A",
  "key30": "32EjV2wH7pfShPJjHNeNGUFATgJsanU2pTaQgq5DWBzMFvWhHyJXq5i4RC38nGPMv9TtjhCkgfuoBkuKMP532igY",
  "key31": "3tfBPCU1L5tYazeK9u37zuGQtcaHZq74GQE8Zr339XF5rEN8mFq4cd628d7bpPieemWrBHnsXgYEmV5wJ1SgqB1P",
  "key32": "4xDZpo1y1awKEKKJPyqCPBMJ1JpyH7qoa58vgfdhsfbzX5ZRbL4bfxhSN2kJQFfteBb1bEJUEH4e3vMJCmajFsda",
  "key33": "5GvZp2kFG56orgUAvZHvjYVmfp6SDyk5PvG9ffeQ7XmS3wGTSe5XNuCzdyB7jafVfy4UPxuFmbAvBMPfYKnZezxL",
  "key34": "2LNbDv6BZ7beqyTkefoPMfszJ52W19YZh8TJDAqhNgmm6RmAGurgT2qNPY4H9n6pkyHDCJHGE6ducfvjetQqYrsb",
  "key35": "48rb4fpbbScByvmg8BXv9vWpVQjsqfcMntqGQFXNpto38kGb1AnK5oxtu1rgPsNxaL8YiGwC1CHo8XUh3EG4jAjv",
  "key36": "4Z2ijLdKeV9sxd51BhdrwGtRYnfKJJZUBCB8K7fJmxUg5UNX9LW7iEaay7SdgVx6vKicsetnFGYKcHNM4bXMtPbz",
  "key37": "2QZHv2JazDXTbpCzhLqQmq9tJZC6jxL8XxWbzwVhqmA16Fkq4UFfqifrFvrD38QAPhEHbiXY78okcSVTtqRSmsAS",
  "key38": "2gzCGfcGHXdBioawNY4jyzR14aeypXpjZwCgnKAPQ1T4QhoHQEe1qBFSX8hYah1JL7VTyFG3Vup46pUJsq9Cszaa",
  "key39": "57YidXcmWNaVUB37eHgsyYvivA4V9FmS4TUfx9cZ3sgqXMFqCo3QsAdE4Prvg8kQuAodZkUmMnX3GdSAvoRfaV7g",
  "key40": "5n4BqP1epN5bLFKryzAdKAuXBmAqChwJn7CtEf2am9NFqrmGSTkQSm5rtwnfGzzSqBFw54iMYgTwxER7Re7f11bc",
  "key41": "5vxvuDNBA4sfGRfxgNQB9qVuMsV7wAWJvBGYJVx9PjQdgvtceSLahEp4bVE7hwdWMCT3kFfaWueVVFiP8Nh7Zuk",
  "key42": "UAaCb67hgi62gNk98wbqW4UHdnrsEHpu8rovZdfPPhq7BHbrtFhGmgk2W4mzFzUduepuNzGjcQas7PMzwfZFKsK",
  "key43": "xa1F4N6oRW3SbjkYuhoSXorg3GRKTg4s1KuAaxkXLvwidJ1TPiK25JGSZFjRHfxiJ8NBuTEfgYxVU5aK2TBjmgH",
  "key44": "29yo3NEcq5EmtEvQfKMrEMosxKLon9iqN3pLbqZU39HYxNRaXzFFXLx4WNq11eXHTrRZhokgFDkoBdApKrctQMSo"
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
