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
    "2gtRYmqWPkgVBftBtdCrew2ZpZZETJ35krgmHV26K9CHmCQLUrUggHgy78rkRF6VHk2jcdZBHtNeoz8PQjewtgXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuL6XWTNbAzR788KNc2LRPKxg5oBwxdjLg1iRBCWpURGCBVgESsPS2bev9aoTmRzu5NskXo5Zw3Z4gk6RUsWDYS",
  "key1": "2uMUnzojcymH5hZGYoJxeVbApnKuDDV7SxY5FihtbJmmumfbQw6KokfBb6W5mftKknNiJgY3x33ybbY4JrvtT54b",
  "key2": "4T9k2bYrf9CCLDboyp66H14GFsFpNGKsxeuGnAsgaP1SQqYUF1SLQXfshVip5Sext7BrXi8iaCYXN5cBTA9jzQ7Q",
  "key3": "931rekVJeAKvHBsN4Sd3e6Ce3uUorZCFCwhZy1vXnkjeeT17DBethVPPz9jqZT1YbAJbkL8pSU9DbYpf5w9kVVr",
  "key4": "2g4YSzmTkVmKjcueMDajEVKU6dCjRu4HFeWcSbmRjewbz3VVa5A8FkoNCh2WV3h6HCAzMTxW5z5vgCYjyNocTooQ",
  "key5": "2aCA9y6X2ZWVSUkErPsbjQtY3bYPCmh2LXtHHeoNtZU4hST8kCxvaVZABwNHjbJjqjoHKeAyFcq14gUmdMZuN4Q6",
  "key6": "63E72XcYCBmaX53NtB7UfRw9zVyc6mW8A81wwBppdbqAkR21DnSob4cYkAu77YGLB3hkfsky6CX1fqAB1vwC3JqW",
  "key7": "2KNayocNnX7sWFk9vN8aXdFQHu3kaGNTLcFYP9pQV1EaqCH2r9oqKGJqAhKPJZVkLVZ4srNp9afgQZyriGmPfX7L",
  "key8": "4TC4ksF6SgtuftGFrUiwrkWaUUytVUkEpYnkzcPDMRuegsfknHpactL9teW6X6bPfw8WF7mDqqhixNBbYaxmu2AW",
  "key9": "2hZUz2pXJ88muES5ebyB3ggxBMTdHLpSb6ZYhVVs7d7Yyve8YwbZSq3rWQhAoWUXH1BLW3FVRyTattBA8GpcthtS",
  "key10": "2Nx1z5XNU5ZbZZGq2GBLhj9hvSmcyh9PRU9b7Vdo4nRznFxu74x4caySfV9ehU7ajjks7qEvwVtguiFwW4isiVQm",
  "key11": "oA6Q2m7JdQ8DeFsH6GzFZS3uZCVtinf68PueE3wEXEtMsrvbojvb8bFdanrKRDCwwuuYTuiNuTh11SoaReKTJLo",
  "key12": "3BW2GBd3i5L4gwYVwNcgnRqsNkhs3a93M2fJnD2VPwGQrfK9Y8xASCw6ZRRgknCkdZ5ZhD3y4rmrZAjfjfU6LKJS",
  "key13": "3CwPR24PRsVEuTmNzbhdv4YEkco2oAqEhGNKXGnhhx7adjUojjKqAJYnzGhJmxBywXrKCw2qbPV2XCpgrSQRdyoM",
  "key14": "48XWFx1wjW2YPjPHMJdZ29E7UYegr37aM7tDzKYRDdDjhDx3WiWCDFkAEUsNZt19GwJwFouWPYMjh23nHXUGqiBc",
  "key15": "5NSfuTJfugYAhcLmHVmWn1MbCVusxAjDyfPKYek3irCWw45o1nfYBGF48iNQ4vg4s34Rew9P7qb62tna37qFap8U",
  "key16": "5E1tFNobuQZvSvadTSuTbdgff47WBkmaqE7Q9r6QNCzKH9nALkrqGaeDbAW7fvnSx5KHd5ev6dGkeXVTZnVc4CnQ",
  "key17": "4jcob6DLvbwyeftvxh6L8tQV1tjRHbSRCPzdVX1afNyRiGZgo46xmytpa4W9sDmjnXdtremJk8eLvofmSg3tDzyP",
  "key18": "3nMmyLqGTrmdBTn2TNSmDNBgf5rHESkTz5S51j4anDsKDkCV78UU4Ar34BweGdFPaU4W5ZTcsJQhDjH3KNqGYww2",
  "key19": "ZZmNCFcrXQ96macrxgCJdwgSXT8WdosqFj96dckZ6MBAbrP8ZjttKumUP9N2bjhbjB5jr16EoE8q3iSpXvTudFA",
  "key20": "KvDGtDhFizwvJHEyyorUaoF9jenYkFVpbYm7Za5dWHo8Ci6wCToRpidaHX5ooBtspen1Qgrg6rm7n97NxzzpqZb",
  "key21": "3xUFbC4RMSt6hdPE3zfDzpwJDGKnrTyyStTztt1i3FYzgdKDXUnGtWaKBrGnEBdMQTRjaeVZvANCqfmTx2aWMH31",
  "key22": "5c7FF5mRzeHHu9FWz7Roji9MXDoeBZ9tMsRNF4uLrcYE1wMdTZY34RnR74Pf96BRSsKATvBSNDpsAo4Sjnysuw5R",
  "key23": "2Q3jiR2Y6kXkDMhhPaxTe4Qpm6j9R5ctRCCyZxQYdbTNw25BUYDVxpVYqSiDCXy1iTf79PYMzvbHDWtSxVprmyoh",
  "key24": "Hw4FSKW7NDHjAmp9cv7ZMe8pPd3ve9Q47c3dv3eF9r8UFFWv6p83N6BFWjzVNHZW9eozrG9oPT2ZdguBEcE7yWu",
  "key25": "3RtEzQJYQoiAeJ1QTZDfPALxafJUP18wNqokYnSocAmkHqk3sUdePMiahSdUnXJgt1iGVM5STvaVAaMVbk6crtt3",
  "key26": "3kkqJk2iiQ4JStnCUrABpCdkoaAg5hs3d4MLusjcnm1xaq3gSQuhdE4HpS7C6LFBsWkh5Qqj8Q3KP7zRw49jvLrs",
  "key27": "2oNFzDvogkzCwM9w4p1eeaveqnNBZabMR6fC6swyye19QjsBLeKpxBG9Ks6iZa2FqzZF7MLqNyVzzZvT6ZZerqur"
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
