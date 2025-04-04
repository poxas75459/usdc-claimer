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
    "2RQogGvQn2hbWDV6CS25NXxwxMHc7dpJweSAiuQV8pJ9eq718bT7kFbCcdsHj9XYdDj5dvCjNWARTdxbbapbLAXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRL78JwpnZ5Grhg935WUaFW84SwDobi8fRjUNtYYd9vXTwHfm3RGaxpj2gNQZfgyJP73Y3k2C44H13AwpoYU8KB",
  "key1": "NkxwAoAJNbGWyvstHbtdaL3JGkqShgkUYyiJuDujkj2XiEzEKffKDphSA3fqRLPTUZjecjtGEcG3Rr9yB9zGccZ",
  "key2": "3BFdZiXmkgvjaJwtuMc1LX41SnMbHr7ec41JBBhXXdC1AWvgNDDWfD6uV5nR9YAGarJGwvzwaLdpCL49w7PkHEig",
  "key3": "26P5Q1of4h5wAms1pLD8QiNNfJQ7FkwVRZHPAXc4uoJ7UiBtDxNyAALDqLvhDNxQf5EcwuBta8QKxCd2Jr9qT8Xn",
  "key4": "3HJXB8ke1XvihPzHTnJDrkczU9Zx9iRuiZPy6B4i6VaDG2EqhT1923rPXw4iKr66Kzo8w81G1HuSxPyNhkma2vnE",
  "key5": "45fcduk8mMmb5V9fBdf62JHQaJwovBJfAQQdsneo53AGMKbY1ztH35nC6eNVynTKbkUyj3MHNxi5bde3UjdphkfP",
  "key6": "3adArmDsXR9Qfg1qLeDxjSmbK1RT8ueVE2s2kXsS1DzU4nsNX8MgsRds9kSMQkPuG7j3adJNjzrg6gxC8hjbzV2e",
  "key7": "gqMP3B2XKdDqVCFnenaY65jKcC8aMVuvSL3LKpMdApPSja1SFCCMWtqTK6VjtgTVYX8hTGRu8YqMoQUYk1gMsjU",
  "key8": "5G5aYKvz74knJbsUiLmNsGJpDFC7D4LF9Kshc12EKHFrc8yE6USMm8MoFbo81BuDogKaEib4pTCg6LsVVFUQbeTq",
  "key9": "5XhPj954sFfEDKnfeGx8VgVDu6VNQdMvAkC5q3HUfQdV5A8bQeFTZGETJS9XUNtwnSYNNMA6Bbjo72zxy2HaXu5s",
  "key10": "3RxDxyn3g4Xv2EdahnCZQhHrBVZzo1onEPYDcx8ZQAnaZQ9FyUAhdiiJhiT754F3yWbPLHCpS2hGBjLBfLXLrZpj",
  "key11": "5tg5HAkFEdqSu6H69cxK9eRWGosoEHCPV3qHtZSjtRAC3no59U3TcD29sxjuRkr9mSMFtUHs4T4UAeyiybrqLNDe",
  "key12": "4NC6Ee88fwXyys2gGSK7yxygNa55mTiKiFoBTNjn3WBoDxp2Q2CgK1nj2CeHs45P9wNynCrKTwFD14BCKMz8REHk",
  "key13": "5L1E3iZygCzjVs6Ua7xfhYz1ffFYdxmRHHo1o3N3PhrxXVnwgWxwdcPJFgJetB4HXaatSeJB1X473HyXnm4JnF8V",
  "key14": "392tjDVtMgnNLUsP3CvFuz1Ad93yF3b9pL48yUmXPboxs2KZZP1mGPKbxxFmiqxHohRHwgo92TACfR5URcEPcZtz",
  "key15": "3EEezhZGZDp2LUSTBTRnRLHDCE8ZXHeQhCKvSXpkJphqxK2jBwQgQYLkK2muGmWhvJMp2tbngRfMYp3j97qapXxH",
  "key16": "emPLJE9FGSKDVR1oF2v7W4uLSsruVsJ2JYLDtKkLzGh4TnzDWWuQEAbTK973HbvVgkhFh2requtvxdh3KJKjUEw",
  "key17": "2UtPmeyJ4pkump4s6eREGRbJu3NL197aZaVgMFMqX6U2oFJjF9DRhmSwzoahhB1AGRfd76GbbDADxk2tZKKndi1N",
  "key18": "5NwxKfpqXoa3ArXH3nHY5LSgXuKhbdPCnToHBPVtNzLPBBbKUBdznVAAnCNmZhLdAR9uo83uFNYMLpNHzysJFMq3",
  "key19": "5qAdaRctJdzEasKJLVcA7KokHH4QSQNUM6yLo45izgvPxQR8poAMbRHtnn1j8zDiKpwd5rM1uxYeMHw7BNFg6H25",
  "key20": "46tNyPe6vkoaHGptED8NTk5P63jJqz1kiZjfLV9eVwu2Tu1Uee1MXKw2QbhVvXnm4eYvncDjekaPetnkeuo1e6Q4",
  "key21": "BNSwz6nLhExbmU5fTxmcTstgCmFtYPAuBMMKBk7yHwEKGgyEYGJAqxRSUK6Pid2nYMfaJzaLfRjemdfWxcY9EuJ",
  "key22": "3p5B6AdNBGNVjmMTCtmAa3qCchWWswx2rDWfzYvSKqopVRytNtoUGLMrq8WhQUTzZfanBGnjRwo8kmjcYp6EWu5o",
  "key23": "4roo94g7rspETGVoaBaLKdLM7hBZN14U2TrhP25ntMysgnQrduwKwtp7WFxjVxWhYaiFepte7XuHDetUQrpxgSSc",
  "key24": "WrPscS9izncHRR3eJ1JMqrpSiQXLGgcH92PoNhkrKCigDKyocamuuMZhFdkiwgvUx7HQJzGxztdb61Rxoa4FSn9",
  "key25": "DnrEd7PtGnw2CHi1uFrSMnSbU8NRRMsF8Wr4Es3kM8N954CC5u4wRLNsVTzAM5M4jjeXXNH3LAc1zyyPFrSEU7Q",
  "key26": "fbWf6DLWusJ8fw8rPkjaU7bGyXUXLtDFSKA9PvfNvysphrbCfMJuGzy11o3x8YAqumXcGFXZUWgYZAZ8DNENCVg",
  "key27": "67GaCnw3HK36rvBeFcNfNYNw2aoFAgcLsDa31NBorRAMsAmUMxmyuYVE6Aibns2jyMnjcxC69oLbN75eq21CvZ7g",
  "key28": "4PcFzBzMypRySBuiZVio9GzPLF3oak5FW42eTmZj6pUii4y9RxAVxK9q9Myp4xBV5TnhsF6AaFJpknwXR8RN9Swv",
  "key29": "aeAkRq8x7XpvSxNUvBsE82aauaSRi4mX4JQw2YzKNbaxDRzeN4KubcE1yyeBGHizJzycD9JbrFPCAKHvW6nuJUA",
  "key30": "2BqjwNxQpkTBALL4gv2gQuUZp2CAUey3GDRzfD8LeVNUcvP9ES9ibFW7iXXncB6wWBp74qqRMizfF7Vg9gq1PEdB",
  "key31": "4CW9SP7KWi4aTEzZA7PpZFyxsAqe3qfWH87oNiiwJRT3r312VryYKxgBV7QtM3Mj9Pexs4wSw3NvEpeCJ9f5KyVE",
  "key32": "1psousEatDZduSY4e99RiV47h6r6EkM4RMaL3pSW1hmSoRWVt4jzXj98xNZKno1CXsHiPxjYRSTSn85VaFB3MGS",
  "key33": "4oevHJ7BH4E29WVgAC2gNNd3dLqCj6V3tF4acWmknaBft8v9peA6RFr2wdr55FoGgfVNcgSdhd5ubRcQ31BA4k75",
  "key34": "3HZQhbck8s3QMYHdT9shMVEzt1LvWSVXLzpdYm4dzntKkt8g58TqYtJZy6vjsiCaeTXQ153GmYbrdzyb1JGvHM6v",
  "key35": "3U62Pwvd6bHDuWExj763XrBEzoRLYrXBCRCBaoQQKp3TmTv7sUqzNwJ1hWhcpuWoaYMAkHJbbQ6bf8VzLEQfnFZF",
  "key36": "3w5UAzyeB8NssSLTXrPhDkwMY4g3DfXsh9CBmZqPAcLmJL44KgcVCw3brzCpCWvg1HMWh5nvibebYz7edBsscHJ1",
  "key37": "5N4JbK9rsHTwBhebfiZKa6cTCYq74hjJ3DzoxTdidXsqKF7WUtDHTHiBVtGfu7St8n3AgsLpW3iKsBy8TcaJFux4",
  "key38": "2Qqk3qci1khP4eGMbxgN7K9y36DB1BuvVYXMKXjsxkQUhVoi1A1TG1eG72v1RXDy7iE1ubXmnnp4oes3Qfyd8pDS",
  "key39": "4qmVxPjtQxLbwwEgFkYdExzRzMgAgF8mDYf84ExJ5rAEPoo2pPUYtuPyNGK53a43AkCeDCDVzjGuqJNEhUVYY7g9"
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
