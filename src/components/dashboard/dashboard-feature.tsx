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
    "2tgU61sau76GbwttG7uH9GgRSmXTvCW8ExMaxqj2NZ3XLK5mDK5eUWxcEvmrj6xtHg3RDXx4q3DLANLDWE6Miubq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBjoc4Wphk9GrEywbbPfqmrNqjpKNarUMEvRwykaGZgSEHbq1tSM4Cs4KFst5gnkpPPtQnb4fPDguLegoZcmxUX",
  "key1": "3DXuqBaQtPLAKm9cXHux6jqpSL4E2H1goFUdg7CCzgqCdjiXXpa7e9iGdEq61DvAk6YYec2krSZiWaZcurcqtDiX",
  "key2": "29XcziHDtnh46DGEi84CekCWGzM2A3dNkSWAQ9Twt8Mvp2gwdfXEh2UaBA7rmJGgbD4YZYJvGf4ia9kU4qy1G6jJ",
  "key3": "58na2Z4W9RsaQphuZwVggPro1aKTGwsHcowUS5eKqLS7rWyV9pCuxuS4gMvqM6RD8uyAPMbb1uKnU57ofq33dueW",
  "key4": "341q1M1LVRqqLbwVzuz4RnACw2ZVUXspRtvuR1H7HjS1WsgTKk7zGFDBuvK6muRqdhFM1LeripdgzXcCR9vrbStL",
  "key5": "2gMcV1nmdem5Kuczt3f7h9wuoA4ZS4Ta1aCofCBbmuwZKySXB5gYQys5txD7N4aRiGoPBmWneEvzWnEpK2Z2R1i5",
  "key6": "4BVytTJPF4DkK8kD1FkQVnpUpFcJXyXeAMFHJ3kpWSNQT69usdzDMsi2uJ9qG8DVsnspUYvwGvPSSCW3mTYrdo2H",
  "key7": "3mdwqegV45vFqJBMfsQxv93kEcL2ZE1osawFq1JrQ9dMTcdDJn6rwLvA1Dqmpw6o32S6Jc5wxCuNa8kjnGCiYSLa",
  "key8": "4LS5384DgD7KeVHnK6xnngNoVNkgvwAqxsdZxy1iKMHqvg4eMZuihwrB1YxmmXJNPHZCKdmTL9jHLCfDc4oSgA4e",
  "key9": "27jZ8mWqBh92QfghyeETKVaA7gEZx3AodWpFhhvLkxuck7fR2ca3JfgtqSmaRZzrQS1gvGKYyhr9bD1yN5qDaVyT",
  "key10": "3QkRfHd5te62jtjXigRaE7m5h4xJLjwFYoXMvANc1Gk8Gs5cJukkny3j2kxWJmX2oEQ1d4hiMo9LtMaewnCAG7K4",
  "key11": "5YqKVoaYohFLR9A9rXC1NtsVibHnNqWedAwmqwRQpht1biFFi4Gho7r1ijsBL1SoLsrdvZJv4H6KQktNA9MKzdyu",
  "key12": "46ybb9v5bH5y2EK2xSrx6SfPCoCu8hdPPiG5iKh4FaPKZkeEKPuMa32QMHRw3UdTJqxHgrZwvYZBKuipxEwRE62j",
  "key13": "4WS6qxPZHFr1CbQ63kGesyMPvwghMEKDHTcVtfpBXnjrANW6QqZgE8C3Q7KJenpZ9nzqhJjgPxh1u1cN4fDnPFxu",
  "key14": "3G2PwdYpjeswyNWei5PYDqBvrAgKigMGsA7Zyrx84WQo8GtYZNqkE95iFBJZ1eR2Hn6cdNEKrQ2yAU7hzvJzcCC6",
  "key15": "4aNM7b4zdWJ2P6D5NP37qN9XChdCgj4HxEzPk3Ls3SU24uXNaoYJ7ZULYhgPoLPDPgsJ2gtTwDzfBoxZypgemeyg",
  "key16": "4wBHkYak5JgZVHwdqF1PhiqhN2NEwzxJds2zfCY5ZHk5R9JZkLVHbuqquPPBZrjzyQqMQvNVmCfByMbtguzvbaMH",
  "key17": "359XKLSqbnQi56GvoVspTTsXtus1qQvjK8ChDxPAN7E1zTQYhjDs7PFxkPBpBbkoXXCTPVHietSfecAmqmZ1cJCz",
  "key18": "2XHJNVJXiew9oHWqTkGSmvk4bbpE6JM59rS4Py37GGkPtruEPPp4NtDX2QEQrgeCa7NNPnYjG8b7AwuHbaHWXwWS",
  "key19": "2D5pR2EFkerzTjAJ3jkJ92Bya91Cqj9aoxuib9bB9YXj1EAXmH46R9nVBXsC9UDgeFopQTAxtAMu8gLqxUwnTLug",
  "key20": "2KKcWCTAXNiiSSyb1SsANWuG8V849dGigBjAz4VVTpHYsAkaCZLCFu5xqbH8u7hPtZFgbqeN62yEp1WfZNF8curt",
  "key21": "4AfH96f2cXZ8veqDFmToJmLeQUPcaht4crnEVAaFk9FphxYYPVo5Dp86Q8EMQsNBrboX3WVUGeP2sF2p28ZzMQ8d",
  "key22": "3ofN8cn5Pu67V3xxNajnhFWqVWQJnKhMT4Qj2E88RPYXhTTHJvtZsxdv2uaEgKxor1F8ieJCFSVkwcaConJB5JcV",
  "key23": "4T9TBEz3JMp5qFjVsUEBesExf1FNmv3FW7Ny6s8LhLi8sPb9f9ECMhQw6yLHssoXRtmvLjQEo3rKyxTx5b8vJmNM",
  "key24": "4Z1FcQmpBoMBtzRN1WEwzJ1DhduiqxntTYa4D2YFfVu5qkMuJ8LA4LQiDjpFSgGKX2dKD7ipiCq75wNEyNPWhC3",
  "key25": "5SsDAPSHG54E2mJCcJhVmkcFGbqUcFmi1cw2dk9KzWFuqpmXpHwCbjRWxPxQer8ZqPayDxmCJ4zsWePPTGMYxSDV",
  "key26": "3rxDrJENhJtN8to8kAQcQvnhuerpRhcSpNstMD6Rh8AixsPAwb9hVwPrz4tQs4xQcHUFwHHM34saXsTDKa9Hxrsw",
  "key27": "3bfCLJefoeJUy3wXJSqyFJ2pFdTGSwMLpkh7kbY2aZp22iQUiwf72KRkiGfuc2eY161kpWwNwiULeQ6APiBDNRq5",
  "key28": "4xiPysdtSqyrGJt8394YkziJ832rESHtBHbs2U7dhJbLzjUX4e5ff9kL7yWTHytTjDXAASwBDAKnuGGsy1bpMSV5",
  "key29": "MMQoiMSgTPcq5Dki5JNb1rfyv63vMzVVArdD4TztCGbMiMPP5i1DEGh4U6zBN9oz7bN5MCzAwKwwSkcXSsQ3TND",
  "key30": "AffGE8VEEk6W3b1UE541hytAEJ4wWbxMZcVG9D99SyGTybDs7tJwBwdGt36N8jV4AisvQMmu6xmV1WXjUn248uF",
  "key31": "2uvY8GT5JhzkXpErt6xV9rPXf299vju4zFf9PryM7yVZypZwyvE2DReLJMf1GwzyUAKPcqqC7M8agGqYUAd4kTPX",
  "key32": "3TdRWoeWV6L387idNsGNfJ6JdFfATiS889tAuxCa2qxXHaR4bPJCSfW7ppta9Lxga8WzBUhaQdbTa8obFf8QbVPy",
  "key33": "q19ProBo7u4exrXAyz3NrcQC4Q4A6ZEcqMymSk97xMySjVNwoRhRnziVCeULWhdxLeft1MLwVy6BPZMMeNvxz9m",
  "key34": "38xLuDxiiZjf5LUt7exkTZN8sXztxDtCdwnZhi9JrC7Pb1cNJVUaifV53ZrLXF6xwUBDurWTpTHjh3qXbrPPPvJ3",
  "key35": "GWTkZjScZSDRFEXFM6m619NWs1GWUmXr5BvKMJynpdtYFwPvZjBMBZNqbY2HcKZmiwjirdce92hQiu7RjUnHMS5",
  "key36": "55haK3S2ZiPjPaatNrREii8EpCPeR8MxA7NiEGqAy2zkiAUAVtKmBfYQ22avM9neEghN5PvNboscdZoq7DJny8wo",
  "key37": "pZ7TkXtgk9MjHK7Mza4PobWCxtZbJFP1r8T7gopDmZCDEtJHrwMwo8JHd6afWJSfQSLo12cG3njAuCazydSmbfy",
  "key38": "5Vr7stezHe1osoYTYVWySMqGWNvMB3tkt6rDxDoqwiN5JPBuawZRNwKsXxduK7j3ubYxU2qtVNGuizZyqTxLutSZ",
  "key39": "ZoXENR7HXo19Gid4K2Bp6MukCbWnhYFfAmuzuhtPx3DvdrPbvWxt6fwr34yDUjnG3e3r8vrKT2ymuNnUg4YaFsU",
  "key40": "2VyJRzp8HEJMLdouUpTV9Ae92Fhhen5rk6ZPkask6oRjFJWV4CpfYEm3ciCCQzkft1r4jonAjjpX2xiBMgxiSq6j",
  "key41": "38Wiq4BZVETf8e39nWdNpVvtYz4yFZ61rpux9AtHa6689Ny2Mfpu6SWe3gtXqYYLp2o7G2TwaumcwSbavEhoYaZX",
  "key42": "qo5d6hmFky4RJoWfbwopwLKm1JnWFX5ZJzWuT6Jjj6qpuRQ5RZiWWigmdibYgTTLWrHYxjvRzp1qHJLPPGeDBQ3",
  "key43": "4onyktLi7oR915fzPeAb6AUVWrDr9vedi2SDUv6LWDuvcj2orErvRrbPVhyN4HT8q4yaBsVEGtDuDhb7N2pHbowJ",
  "key44": "2Zu9pvkq7jNug4EQ4YdABQ43acFeDQmd9goxkGPB1qBtm6S3izsyBnaRezhBwLfiJ1R6KnpzbciZJiYQXNf6H2jx",
  "key45": "5wuauq6uiJRDqWfTwsoXxmEPxW1s6hxsvT9DjunDaqi1g4r2PSimmWLnr7BdAU9Q4dvBjHVQJwP7WzTMo5ErZcqN",
  "key46": "3DH632hFkbp3R3SpCRkH8LGL8MCWqsLNrzD9yA7n2Bq33PJQM9erZb2yvcVSMtG7FYd5RYJyz3crUPWzqUaK9qjc",
  "key47": "64opUb47FK1X1RzmaCYJnda3vyfXwk6W5bHjwS6nDtksjQaWyLVSKK9Ew2bfxjYDz5HMEvecSZ5ceAY6Pnsv8YUo",
  "key48": "23iNzL332S1GqN6u1U6u7W4W5NcgJA9df1aXBtQs6zY7QEdcJiJBxr738hxrdH7yT1t6R17jkSbimkXDCpU4gLyP",
  "key49": "4Wcg1ZBtij3ppjVH8XX9FLknocMwD2tXhAvScKQjLinxcJDNba7Ez3FBir5BJmY94oDSSp5LUCf7T8m1KBryqxBE"
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
