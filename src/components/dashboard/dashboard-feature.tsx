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
    "3ifY7Mvdx18exEKXL7gcLxtK8HwxaLze7ePDrvZM2ipgRMUiNCY4hcmCc4mQqAdN2gCBapgMy7ESQ55ovNELgDd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22BinABMmvPHAfC6xbbbpAiCEhkTDPWKuumhM2YThd6b9mbR75fDk4H17hJGMEx5QvaEFAoEF3a3mdJJSThLiVPs",
  "key1": "2UDKU4g1CBsk6MztdnzD31pvCqft4Mb1cnTMAVgYiSHtkg9GLyWaDCuBEL5GZWKEMu2XggVED72yBbspsFaP9TQv",
  "key2": "2HW1GeM8NxBL7mdkMM8RhyQfjBhtTE2R5jnXTbv2z6JnVXmrXUr5c2DVfDZU7xFNPqAVp3BsTBmYovoPe2tq6niS",
  "key3": "3Q7gzpmPfEVxpaMkaoGY5CvtyAnQw28B95serT7Vb9XZS4kxMsdFP2uUZaNzQ7VY1ziiYYx2atHw3VPVAcgDExa",
  "key4": "5rcHCxtQDPSJtu5SFAJ6sKCocKfpSMw7NpKgfgmGu7o1gYAFB9VbAuA6gj3UGVExDR4B5wMmdm3XsfAGtcABCezn",
  "key5": "2tZoRc6EYaVTbYX6zFf7HHGNPaYUg8TMswNCGqBrX6MzngAH994G7XZFyZpmtZeY5F9sgKRJ1K6BntzczmQPr8Zv",
  "key6": "3Ej4xgn7ucZET9cbK17gLS8JNUyBLuA2dzuaTNcQgH6H9pNFTqBtV3iadwSz99T6DVqe2isUqpuBVr51ik2MSpi1",
  "key7": "prUeczHk15HpMA8TVg3rcapVezkyxouzBrVc6G9XCx9a9QCuTWQXb1zD5j6LwXMukDVLBtSLwMbxxqE54hpa3Rr",
  "key8": "3bFboirPPCTsZgBUrmroNLQvLErqvnaRBDxGMHjiBKUe9UBNgopzKU7kXMxpwebkdGG38BEexSPrDvwBqpeiTTvp",
  "key9": "5xXJXwWk7RNdLMVY29P5cJbSWgcAec4h5FvzqjVbu43cXThTf3zignGn8r8A8yBqJVZj9U5e8zMdShS775rgu96b",
  "key10": "3c4PyDbHWRsBfkw35Xmx5MCpq9JnLkkXahxE2PbvLNpc1n9VyYey6f5JhXFFc6YkcyoL81BCyiYzVbj2So7pU4VX",
  "key11": "4BaTU6ihZJBRhpxyuBUrPuSiL84X4uCqkTkfctsqTmQZ9YdtQUEYKuoSHojR5oAgMy4Hfb1MAjWxDDb5Z7JXk69k",
  "key12": "59iEPfeddFEKhoL5jBdJpoNVhB8JYoPXSgwGzLzC3Ps5NjrhfQFAWwGCEPvge9wdHgg3aG3wjYAm45FNxZZSNS8K",
  "key13": "2gqoDo6bdiqnNfCKYrmDtpbjoyQUGekik5hNkGcyFpz4ux1dkop8ca23R2Ge27XCxPUYbCmHmRT3631FkeyLPPwc",
  "key14": "XDqJN9Woh2qEt7KsSJ6RB4L4cMjWuMSCjJr3H5EMxumxdrwQXqgXrDwGRkBqZPGQBGtqjjCXD1hsx2Fj5x32qPy",
  "key15": "393fvFZFVCqJLfbwGbQaNxkiekzfJdwgDPe2M2xkaDZKSBgbd4Xjg3dKrB8PxkkS1FpD3FRiABZUQMQkXTntEJ6z",
  "key16": "67abGJXWRcJwsdgLnMfRN4mWtVjAzFBxi3oMP6LpqLpHcVBFYadNsPc87jQkB7tnYvna6TraMeXuE9YUwPkRakyP",
  "key17": "5pVkXdXKD9tq5bPQg6N1fT7Pp2TVtudfywUJH1xqTByeTaZQ8CKkavquLE5AgRGm57v7JCU2BDFAR157SCpkw6E7",
  "key18": "5kMNRNtzHKeMjBXBmrAUko9n5VA3viLF4FxL8qZadZLMy2MMFYAzwi6AjXNCFVgvfDF1zCfNXwpU7wMvejHpM6SG",
  "key19": "3LRhmFSvi11qGHfBavZWg3VPTcmhXXaFXtc6Vzx5NU1fUrrwgZiyFH2cgc3ZMrqJtouuiNKd3bbM8AbdLbfesqsH",
  "key20": "5XDK2HhY36t4jkShfzSMRF3UtGyETFApWo3BNXEe1sLAVNPDRFkuoM8d4J1tyGsimH5iyjnPS981AxShtGWWKCC4",
  "key21": "uXgMeihfys171PH2dcFEPKpjdjc4WaqGJRhjiTMeDrkVtg6VSSWPLhS687bmgQB1FEELyEn6pRkQ5f3wqCi6Gzd",
  "key22": "23DgwDw5oHV6wCBJao3L422JRoNS8V2V2DiTmVng6FL7mTCWafJtSGaZuoXyY244Dh19oBCS11L9PfhAopeRUoMG",
  "key23": "2wwwQF3GcLSN2pYoYze6a6uoZVj8B8eZngo42DqutFumzZ5m9NYVc1SZCnpgjiw4yvNhJPzHGvHCVaLfN3LQ2N4L",
  "key24": "3w8bZsgYBsighLiU5npyYj7pEnwc3Xqod2vN4w54iDmPCdiiFTcGHxKg8Zot6rDw8JUK98GcbpmnBrojDCJjF3UJ",
  "key25": "5SyXndjUb2VXyxXUrTQX4REjwjrey2Z7UHteURydWkaoNBcg9NBAHyRtfpiB86t9pnUc2EsbGReqATY9ZzJ9BLEs",
  "key26": "7KqxYpvNp3scjb6o3JFeUKcGQ51BCcorecmtf5mb1Gn2HLNjsaRmFEERfsbWNyPQQ3wWuzknN9qBZiBe5UqfkGU",
  "key27": "28FAtDeBFF7uex9Sd3s2WeymjynZ9rsuf6nGzTsWumbyAyQ13sMAVtbetbsZEXkWzdvJnw4WSM1iB4btcnLJBNon",
  "key28": "2uYKqAnsWCgUZ8YDDKcm7vCVFahUNLYVxjUydczidRUsM5EF5CaZmuDUvCKNkFRxR78Fcru4iMR7JA4jMp5FnQsk",
  "key29": "Xiax8HUxfsr4otEgMAEA2dQm5Lr3dtRfoLitpLGjsafCBYiGtixobSu5xGkDUeDqG3HmxPrw7HwX9rkJbWr9bDU",
  "key30": "TVsZBcikCJ1n2E5cdkMji5umJypeaWx3rCS8HgUhViZrLKBuYUbGhCR6pz34ScreGTXZrHoyRMcb6QkmUrZyUa5",
  "key31": "AixNziXtgo6yTGnTqzb47nsVyZXHCwayPNso3ioiTTge1v1DiZ1kMrLN7EV2aqZJEkNgzDLTDSE6678pdAEimto",
  "key32": "Po46XU8TCzPDVEHzHZSBf9gv8rp6HCBcDniPSZq6SsDhgqDxEnXWpHYKsCYTmWCNyoUQq6ShUr9EdsPuQM3weRQ",
  "key33": "5EZdW7VV1UinWmJ2e758wg1SqrxD4ej9V1wZB51wAKLnvFXJBaP8DyHe3CvdoGbqLouhvD7g2pzUTJEov4FrxKj3",
  "key34": "27zQ46dDzQn3xhfEkZa7pgB1X1kg2BXcreeke2Fa6d15EZCxsxdSdQEwcfzGx2ATF956aFNYBDMS7pMsswPhcRBH",
  "key35": "2nM22f4YcQEWHtWDdMijxxNyEkhGhUDPccSq9CeAWHSH1maB1YWR9ZMkQtxKUJUDx2QLp8WdRpEWdj7G9ycWZFet",
  "key36": "5AE3diouTwPV3iF7ZDtjYd2MYt4DKGNar7Q38NL3RNhVVNkSpPPr5fwbXw3Z5J8Yvi7FbkeEK8dbsAW96dzmbYCX",
  "key37": "2quP7DEkgKU5jSBU3BmM6AYcoja4YDZyfS2frTWdfqrHg3p76SdUs7XRdDTqJYrmHzszJgKHu9NyghrM8V9qrL1R",
  "key38": "3zmZkx4aBPMvVTmLqGyc5Nxv3evQYqvFABVMtw4GD9ZDEvTndCFheeVbo6SyVCV6BW9NL69ydbq62ok5KqctWXEh",
  "key39": "3LiGTPqB6sSi6m4ECEvQSzSWBZndsVkrPyd52wnknQaKADh9eN3KvBpm8RVTm9LtKqrVz3JD4jvu1KFrGzPyHjf5",
  "key40": "2SMJ25buXPc2ugZm4fr6FUmEqi4Tfzm2rfcscd1SBaDDn6mxUVEzKkTeH5iHSBGQhiE11eWpngcKRHKUQxjAhh9r",
  "key41": "518owV6DDqJMTMkdVZwHsY3VzLpJCMCHU7YfnYf7Nn16xxKtgyDLdxyHxmGYze6VkNvHKJVQy5WfuB1Y1dhyWFAo",
  "key42": "43Y3JjfNJYHH6SBPxsYm2aJpgY2fdxHrzgrsSeKJ8NPJZpQY45U1j8tfXgJNfD7uJAKdaKp7b6LgrFsSdpPopT8H",
  "key43": "2DKX1prijX5w4UsionYaYp5CSedim3h9M8PLE51gVMuWndMNRorUGB6YFjQjDWvt1EmytHvvxW5YDeUW5m21tW4u",
  "key44": "5P2NgJxBYD3mPBp66RMaV333cnwfNxGkFTBDQx5VADnKqU3NuMXPXhMs8Y6rB2ag2iz4S9vy6U5cczyU561gSBwr"
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
