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
    "5iyTjm3ggw68cseu1oPxoS17ahXeJfc5wpesRSLZfTtQ2k2X7sNNCDWK9m1BNRN3kRi1qq9hw9jLwa4ZSVArQrkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xq596QtAsgGwHc7gwijFZa9dcg1tHUZBVYwgJ3HwfGzS3s14CyrQJGY7NAkTheivoMdWajjGsDd7dsbnu3fzi5m",
  "key1": "415FTa6Wczyhs3BoRXuEZgusLCtyDf1SBET33WofyXtRodwoHkcXj1nhs27A8WDAe2P9GGEXEUrTAPSs6gBYTKJM",
  "key2": "MSYaYUF7wDzPJPbSbRZAExpMAmSuVEzYUwFafa5jDBdmgQmd9nGrq5mJYxFiGHpgdMg9QhgksLPf62MHxPxszq8",
  "key3": "2rVS9qERrncmnF46wj1nXups1roPtxagxpJ78Gnm9Y3eitPma8LY9EYTMHxP3WHRFdJ1nCcdqUZQhvqK25QJCCwN",
  "key4": "5Nwnq89hpAGq8VKQ44eZc8EiDRWbK3TpvSa1DG24zVbo2PvuAV1ouMaHEWufRS7JXGEya5QnyeFPXq9JbEZDHQxN",
  "key5": "3aZx9uaEN216YRnMtvF3LtDEAQBJwCtZsAi2gJZ6nTKyzLQtZ3iLfN6akE1yZPkQMy7xLW39MqwJNWk5wSckhKVz",
  "key6": "2a7nJJ1PFyUbyKMWZD2wQimsjvGiuFoNnpUaSrAZVdhj29Wf1xJBpQ1BbXbURXHUGkt6G85zHj3LBw5vrcPCgi5S",
  "key7": "2crGmndDukPkJn9xjE6FeCX6HMzYBYVvsUmHkQq3Vq6tK7CBTPVqp4cPsrSt2JcDmqxzcwVDu124fax4Nw8GqwNY",
  "key8": "DP654D9cDmFkwDeDTrri6SQR6HshDgy6pBARb7L8Hosc8SgC6RLpLa3PDTpc1eRidxT1VELWvuy6uefHqNKjVsC",
  "key9": "4wL6uLV2h39yuu8g5FvDx5zSQoaFeczmaBniiG5cJiS4dh2dZVcKxTk5C5aKmd82AQ3Hx26ANT85VyskeH5idPh",
  "key10": "3gfUpAfntMYeiUM94G6EvacKjz47JTMtFzaTAJajRsBUXYEFxd8c3fULNqRzeif8gSZiPRVw8CcGhNxSbavnfsJk",
  "key11": "2Cxm1ki76dKwvMjm6JqYpLmfQ4KSreXAsZuxFz2gg62fAeQucFQTy87PfcLhsiuu2Y12nVSEqnM7dsDnF2eSSGA1",
  "key12": "8NbHJcQ2w4Y2BXjWHXx5o7VmW5sNtVaCQxnyJcCQQJfQi9cfbLdzfNyGGcezcaCZUcz8yqCkYX1fnDBjoND8NRa",
  "key13": "szckvPy7xEiE1tPzqhntdBU4vWxQP99KCVEjSJzc2jXND1CjV3F8BWeNZAFGhZ7ZBFAy6NZB4axAwaYajsqRu1w",
  "key14": "TTzTNcBEDzK5zjPaRBLWMTd9yjGKQZasSF195iTxh2guRmgT6EUyD7aTsGBsfC1dygobhioXQzXSZ1tGcV3C8uy",
  "key15": "5HxoqUeE6869uGkwSuTTDPTTWyxpZpUu7P1rsiUTTdvWFR3QkoQbyMdvzd25hyPBGHFtUY1kPvr9FAd3xRsvNXsr",
  "key16": "4UWGQfa44Fr148kCaADU8wCpTUNYxRHsyrP1gvXEwbzuenfjNUMFJEVrsydnSqigucv4fVYYkkx1J7xRGmWiT977",
  "key17": "5CZTKQrteoW3A2hXtczXQUq76CwnjALTdEpeCt3bXSsS15LYsi46dve6rPMqLQT2An2uixKR9DQKAP2sf9rd2E6a",
  "key18": "2TecEScgKoS27NirvCRtFreYFciuy9KQY72Xokvm8S45oxMVM5AdhEjuwbVaS3D2KDHDDYywpFT1prUPZd1HXsip",
  "key19": "4NePv1GdgVZFBoh4dcAJywnDPRETJQDcyVP7gzNcgJ8U9NdJqYsvW4wcoD9ahb42LBHKETXt1eS5ZTRBEZVueXoV",
  "key20": "4qWg9Xdp19ZREfhUvhxGy9STYSNYZKMjpnCxErjhceNHxP8UbrQom6QxtkiRF4VWiY55bFSCNPHW19QLTiRQdPVh",
  "key21": "25vxGS6yN2iBUKV3Lex5tY2ScmGwTQVuNtzEwfWhUF9fr7n7VAqA6JzhXVTyzK5iWbyCcfkHZPLi4aCJERYNnPvg",
  "key22": "3cUjEw17yzLCnJDpnGmeL1u3yHFtMbeAYer2X665QAvrCyez4QJnU8kU24jRS1MEM5ssPEMvjf1iv4c5M3AFXtRt",
  "key23": "2APgAxNKtE4nxWTrL2SLmgoVnHh2F22KGPZxd9XybcVz9btLQEoj8qEbbBJ8pEmrQcAVThHWrNaQsSrapupXijjQ",
  "key24": "3jf55sbop7qQrseowEPrErdtk8oc4PXJWAEmogyBqMbgqemEwWnuHbeC4FSy7WR6dzV5cv5NdFbBPj76qKdPg2FF",
  "key25": "3kfRx9SejJPZnWt33VmP4TAhhsUEA7E69zs2s2jhxEkovQohKvoV3rS5ZFeQZk7wnYvJvJksSMEbMtq5oLJpx9mh",
  "key26": "61mwkaNh1VcyB91iis1kS6Y49kp8hwmJCLqmGs76KBsvhAJX6nSVMY94P9FQsRD8rvAZeikeHLfWrtCB7pwdmVeJ",
  "key27": "5yp1gGrhiXX5rtoKHhbV3k9KQ4M6iyngE6zZvWmSdRztF9xuPnrQA2bnqH5EaEDa3fffy67gUJojXgSRMCRTUnpb",
  "key28": "64ijZL5vbZ6fjyhjc2aviESCeAMEtw5iwQkGoJEhWhnYQLtAkNfCsL34mDjy8468RvET1VvSTs5wPTTSAiVVrmAo",
  "key29": "42Brnc825MWXw1H4NBmoirNxxnsCiU2UQYhcCtKiYo9h6u9X9EUpjvffD75VZP6G4KKKTMRHpDJS7zR45dFW77LV",
  "key30": "5G8Qifaj1BfJet6tcPHTYXtHZKYga8PRiHs53Z7683rvKBLQr9PhJ5nH3UjPdsK29hsXXfeL3CMRFH9QY7YAfVry",
  "key31": "5zhvkxQEa9FqNVTcospb2Ku6VY9hSXtiTnWx77WMfk7FoUVvjQP7pFWE9JRkDkoDaTy69qRaP8iTADkSg4RRx9je",
  "key32": "aPmpzzD6tcoEfrYKXqBJToS9DivHnDQKBvGHbqxhQEsiPSuG4eXD9PuqohBms4hmv17rVVCudBzZ4VvPBZJ5FvY",
  "key33": "4BkTBqWMULwCLstPLrTnQSSULPUyBdv1atHi1vHjsycfV8vrcfqe1T3RYctji35HyE4vpocRUX6xy5qBwN9aet1t",
  "key34": "2B9ZGBG5LXn8GeWPimhojTaqwvcUAE6P3HGY3uUULr9WeeQ5cknHSMxdJUQhm4tpCvZUnHgi9jj3ncjjfvbSdm1n",
  "key35": "54Y1fyFcuy4g1vLdJttJSiAEVYTwrigKP7RJ79hBbNo8i1kWLFnL9NcVK3Li9rBwt19h5LBKzVEXypaitjvsgv9V",
  "key36": "4resDoVdHgSpfnr4sPEE66cX985KzcYDRceWB35MV7Z53NPdWA81eS1bcjptrfSDiipTXaPvcRivkC3UV1d3dA5R",
  "key37": "3THmHoB2AbHqHwb1M1qoFC7jD7UxsBpvd13HMM4dAkz9PE9q7Zdnu5zKMqkyz6xJcaRArJk4eBekPxAspNddg93F",
  "key38": "zgQAci1AQpsdUzTW7hVDc2ds8w2pSrGdCGMDAunLTt3PeJQ3FNbb1xRfzgjaFaimJAKisQTnfrXVzdbsBbQU11M"
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
