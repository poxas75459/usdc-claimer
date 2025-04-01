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
    "57cF1DrL8bvAJpsvBhaDtz6N5pFDuEpLCn8EyAZMhPuDXE8VA6SmANEPV3bnRLbvdRyY6AXZ7QThDM2YdRBQ7aVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HYgJZJWEuFsTp2o7PPRYiDYCvWpdsyHw18CASqcyu7vAotd8JbApkUTzWqTJdnA2aHo8ktikFPJuGeJwiNvpkp",
  "key1": "bkFeEmzunZdJzQo9JU175suoZnuqwyF7GpZ64abmweZriJAUur7fXmXtoYvC8Sgko2ucDYh7qufcVeyaSXSUDAn",
  "key2": "5qXnqajfnBEZR1iECGq29kitCgR9uhhewFVeFrGvgoRPuazX7841CTWByRG4zMQLpkJoXcUbU75yH6gQUbzFszBv",
  "key3": "2RVp8U6TH1cPZZTC6KzxyCzzKuak9sCr6NGndvFzPeh3g1fYtcvpD1M3Cf7hAZ7VSHGLWrJrC69TAQw6yDnEzgyQ",
  "key4": "3WNfpvaSdcADZJEHmQ15cckMFzgJfkuaLqtAPku5kgKUsp9YUbYfEFumJm1yCsoNLe6Srxwrpk9kBZ76CzuqeEsq",
  "key5": "4mCZPgkaEbeHUWufjJdAtGdp88eF8ySn8F6pCtTMmKHHpB4qUXpG4jpHrmTn1CRcjW1EGznCqqYsB3Z4TScj1Zvp",
  "key6": "3P8vQ2MnZQuU2ZaoWEb4jVTdtZuog4cor7P7Z69WUiYxdSLwLffbsHz3tynqmZGfJHHinEBanuYPDPzcNAtDUWzQ",
  "key7": "5C9tFdzsumiKG7YbDgqZm49Wb3BbrsXiifEwmurJRLP6DtxWGU9iYTXuFSEqWxe2tPK9sVJ3gbeuzbfN9MSs6iGt",
  "key8": "gfzRuwSJFqs7Ko6rJfk678crg8eVVwCamz39yMmL6ujK1W2ZBZSicY3TvBAt6wEZ92C795T72uigwynQuVkEatB",
  "key9": "21dXEbTw6kYckFwWPSybJETEfubLAnyUoWr9A79r56YFwwyHu2tZqeWdiQKkUpmLZg48Z7HjZPnxCqFLpcqkDEhk",
  "key10": "5XdPwBiET5q4xALMgwik1KaZjeoDQMJTpTWoWfS5wnXCmAgABosoaN1zceq7gjNQGtFrc4QsZ9jVy4WDBAAnEfo7",
  "key11": "9jtvCbW3Ri5WhAeLMnyv93PGx9UAC2XfZnqW55HkrowkGvaWiqzMm4WHDP4Twh2iWeCViTX6PrhpmLHg1LsWPHF",
  "key12": "2bmkU3nW9wZcZTc9MpRU1wce6wVvHjufZq25JDxs4bgmr8CfxVtKoRf3bZ1kicgm7oKr6dPq4yQoDL7mAKWi6xC5",
  "key13": "3sqQ7pezZqvB8oAezbE8HJvNfbzzo44Sxshy2uMt9jCMvoktXQfuUAwrwBq7mymCNuF7r8KFRQYHr2CQoKfpoJc9",
  "key14": "4zFHeKeApsw6izu1izCRfRaicK1G4dvmrckrQVJgYQAbBCcXg7kEpwwqfcFGWTB8Sc7nvPEdLA4WWEh16ZVj3ya3",
  "key15": "5FpGiKZ8iu5QtU6XYdNMK5MXYV6Wma8R9gRmXsUMxh8Fr3nMWT1pXySC3njPLJFupKon4Tr7RdMKPvbHHnJjHJYM",
  "key16": "4ccDWwPjp7Dtqf8BbyG9gocbvbcwEJKQXRYBELYAqF1wC6Vz9pqkADCZfwcRBZafq2bUNi2SutcqY5DRVaYQKKfS",
  "key17": "4Sd518MQacrmq4CQYrFPPJwYCACsbSfh319E74YxsagFjKiT7nQxZt2XyWCNMjuiceUZigoZoVc26DNbwgLqmvA",
  "key18": "3frbCRVRYTe83DkYFhw1sxJZace28kQPJ1MjkSeGSew8yfhKuLqGiAkj6j6rg8uYVWBnv9W33LjtZ1tHH8jwat9Q",
  "key19": "31xhopNoxgcd2ax8rpdfBcAsdpDpccUS257DzBsqjRKf6LzPaMEd6a35f7Vsq33Th1wnAQb761DJph11ZGi2scTB",
  "key20": "2ushyDErpzUZnzJwucW8sn9Ke7GssERAPH9anEiC4yAXzibsHqgLX93V1GKBgogn7yANCo8dD4J84Qv7AC8kugrZ",
  "key21": "4Fi5P6bDbpTzUPDGdfyCF1dfpnH6LVU7herD1K4rWJz7uN2xqiCZbJmA3LCktjXuA6HpvG8KGZbHqLaHw4WR9Qzd",
  "key22": "3EaVFDnBBPSRZgoopCAJi4z3BdGCgKLjPE3KWuYVHngiMU7BaDM7DGA83yQie3iQpHGpHhsctRr7ukmEkM1YEK4d",
  "key23": "3CT92ChqPqR6JRU8kM6hyMpsqCSpikPDD8YbR8JdMFGy3EyFvLMRAwP7BozT82sXwZDvuUos9EHx5Wtki7aZGPu1",
  "key24": "cJfwXXhu4U3iGay1aVtC59AttK4n4zD6FSh78M5odieJtdV5RK8iJNjdygoFk7W5SNMXCzmX96MMYZ3VScyHJFV",
  "key25": "4bAF2qHwPVgmoGweVaXAREQ1P32YLxNSLzcwsNNeaNm3rpDBttk2mW6krVrABRAJPjaVdhFH48TaKDpx5qEZZh8D",
  "key26": "5M3vrHTAPimHJWhU9qfBffzZfqs8HTUo4yuaVfK44VbKFNPuTypuW1uBLHJ3qv4es1pTxEZprNQQFaQJxsykBCXk",
  "key27": "3VGTPWtwccZ6qwMVxw74YHzLv5WzTvyT6qC625bB4PnEYYMoBcC7sDMn6T6T8iEgRpvtcUZvJP8GBJxPimbJTyfy",
  "key28": "2JGTgVcMQygx6C2V7m7NK6SwpEvzFdWo6nPmvjSvZaatakoSnoeoFcWCU3pheVDn5c6KhKEg8A4jtdy6PW5U6vut",
  "key29": "2vbSyVKejDBbW68yUb5By5mgW7A23iQCuKQteEfQ1io2gxwEVJN83NUfKRmaK647MLWQABAiFMryS1Cx5gvyxnjM",
  "key30": "XiJnAvPfC5YAZgypGNETkdxFeFpZVnZxgURQwYedMvJKFoBEk1wSLx7CFahFHoVUpLXfygiV7tr4Yx9hUmknVYu",
  "key31": "rgKYTMhiLe4Jx7FvLDjiQk8urdzMZkjiuCwfaVmBUBmANta23nZ3Y6ytbYCkekdK7HytGh8nvdYLTdePnaqHyYs",
  "key32": "48zDjEgWMhYuH7EUuH9c56fKwdqki5SQBQUySfZ7osgbpbWRiz2FvsBdedpDFiCtVquK3Cxu2nagBu16joEy5qQo",
  "key33": "4JEhqGfcvUwcb8H32xp68A1KEeFYLyMpfFqg3nSmT7pNNadwKkszTEHCSGf6GkqQcThKdC2oNyzhra6mxAGxNQjG",
  "key34": "5MQgFue8spzSQCH1nbpAAymgGzeEW2HtEDNF9z6q2Ja6NMqBEnmNsf2p5d7gTsvDWzaFopU1n8yg7RWPAwpqLSwx",
  "key35": "2ceDS3hmrw3wX2K6BDeELPMuMEaMJAvd2V7Mi7Dd4GN2cMF1HHfruiP39Vq24RzvDwmGrSaVz1LeBxK2BKWVzQHo",
  "key36": "3Ykvamiy7HG1kTR27NyxJvsyv2aGzxh1vGypAuQva1gYLUtAUk3G7gnRafpgYhWjqqG7mikGZYRHa32RKLHH2vDn",
  "key37": "2hFZLFPr53hKcdXRv11bFRkEaYNkjtxuvcBRuTGpBZaZws6HcaByBf5mBw2daBbWQ4PCPGwWRKdQUpYy11K975Uf",
  "key38": "2CQmH55rr1zTvJ57QvSxra5FqWeFnBUUEUcXqsbv94NM2pb9MG4cR9sZDrGk7doRvbV7E2pUYf34qiGL6kM5qbxQ",
  "key39": "4twxLTYZEnWJRuSCfT6aDyRRLCnttY88F4uUxyiDzBiKPMAWwRswZ2HyCHP4tiLs63BmtMxMfjReXH2pqBFubUXR",
  "key40": "3oS7At7vPTGFZdXydAj1RByKGPnLfmccHfdNsZk9EBemXbJxGenYGSaTPEc3SHiEE6WZbsPnH4mX5KcKCdFdpAp9",
  "key41": "3NXk11qVPKaymjhuBEwDTnPwBXdk46Kjw91sZ53SwF9kqmnoy1iVj2z8h5AVCH8gCpSQvztTpso2DhU2L57EVqCo",
  "key42": "33vh9Q1rxCEdEDyXTn4Ws5pokmjCqstfESZY5r4GWhMEqq5GMu9qnPn8jcZFCLCiJM3KXzfa7KimWs1jDpjSV1hn",
  "key43": "3wwFMipkGikKVvdcnyQn5mQKnEPJZZLPQgerqbApwFc5YQzTeQYuATxmbSVPPkGDqsDYCP9mKs9wjgxfPWXZdCGc",
  "key44": "57refSWjVDQXRNB9wHWprHm3tw4YfgtchGF6pQcrNUQSiW15GZ3kUP8UGrdp8gdCCsYFh6yjgk6jLTcoJFfHoCnW",
  "key45": "3VNpbRoN4ce6jybPv3LnEZAuqMoeF5Tvk2ewJgo6mF2eSJ3Jm22T7TTwjAG5zw7jgeFEBq1SzLLrdtNs6RzFVL9k",
  "key46": "zy4PdStBL6612YuM24skqX2mA9k6mWhZA6AipHTQpR1GBXNHJg7bDTQv2vKgV1bBWBoeUFoYP7D69NvSJky1Eyz"
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
