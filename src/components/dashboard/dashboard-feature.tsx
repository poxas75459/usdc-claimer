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
    "5VZVK2ziA9zEfSZcSy1ufm9S3nKKzN3sJVMgevtnBQroFQv1oGiMH4wkkSkveWJKMJAP2xjAwoJzgb6v8GKqjL2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXPgonvLuc7j7BVQCNsLgtv9dM3LCGJiyHrewuAtK22hgAtNQ1WkxahBHw6CHav7ZGWKsSdQqbmF72v8m78S1rn",
  "key1": "2cYkD5E55SNxSskB6VFT7hyFQXMtvt1dv2uo9HLfJ8Sd2oSGfDcFFPHtzXNEAv3pBPZqzh9V2Rmk3pHXK2hvWTNL",
  "key2": "4XZCqSMcfM5ZpwtUJ2pLU6x1zpy2heKSLdHAV6Mqz49nJNpKGKfUb6KnMHY9AnRVqGL5wXNRmwxou3sYsL1SHHSV",
  "key3": "EXKtqMLp8FWqnniZbMpeMbzXLLDAgrMzpZUERXxN74PgxaQ6mB2fzA6kdo2jgWSmohqGrfwHKZHCv7btDvGqw29",
  "key4": "47sh5c2DW8Xwsg7azWPtxL7F1TxJdWKbg41YxEeGA6FuZFFBWKEEugLGWeNoPCGB2YFXJoMJhfZAn4FXqqXW9gp6",
  "key5": "3mEYKgHgcT1jtmqc863163ckTPS33VPbfXdY1qyGmYLLPcfah4VjVktwYnAgtheEC8K1AoDXPCLi7mc8bi5uHt9Y",
  "key6": "xCrzxR6zPeAFAz6CTW7uydrgGmgCDrUFZz1oF1LM9d5yfZookKYemvw7cfQL8bCpL72fczPruie3eHCBEySPyLn",
  "key7": "5f32Vkf3yffJtKruXXoXEgsGRPMRatLCnKQG3gC2BaSoiRVPzPsLR7H5oHRdoXA7AZYowPrGHpQZmEjG52SS5kio",
  "key8": "2ANzUrXc1nSjQDumeLRDmnh7qPkxQQcxrQajzC8z6gdSApmYkXYdASj7cfzVs5sHxPmC78ZqC9yVR6yB6DEuvcjs",
  "key9": "3DfCTCeNR7kzxnAmrsDYXvsR9BGvfyK7aFKHQeG5cs6KUA33q6oLHoH7EyuDqzjYaDURT57AHr5N4DDeuYQEeR6F",
  "key10": "vfHUaYYXCSxuNTLnzuzNX7MEAFXx7ih9hbTYv5wSx9GW8YLBH116jLsKcSJKhxngUu1hRhNLcVbNcLoniuYu2cS",
  "key11": "3Wjr1x37mRVd7vbZ2CFDS8jbEt3SvBApTLZqNN2Zs59Q1u518NNUfvpNA9uHCaz8jcxKYotEDTbdtaHtAWBSPHYz",
  "key12": "2H7tXTJuWf6dzxDHT7a17fvFo6tpETV4eAMN2bqwoUPFQ7CYUrXWekzsiyfGfdy1guDquaissruR3vzAQJbcordv",
  "key13": "2XjKCUpmGs8xKHVJWCwtAR5ReFz1gUz5Kxuis3y4a7AyXoGCKDiPp7krGMkmSYPWrbqAM8nPLb3R1ahJRz2ycKaT",
  "key14": "Q4AvoehXoN2B5qyScHFTjG3ebUDgwJgtTfxsSPxLWL4qMAxBWMYx1VBaifG1FPqBgVix1uW42KmtZSTutWYHuzn",
  "key15": "3bhZGqWFGK9Q2Xn8xSXSN7DN2TX6Ae3Yr6LAT9uQisnqTqqXffuhqLeUnGznZJKqaqhbkbr68iTAZQxv5UHAH9xA",
  "key16": "5W7NPvMmKasHghcUuza8kK5SNLT3HJzCoTZhkyKXcMgFhsqVjD5PWQ2pBW78QBGVXtwQk43NiPkGXz9s5613A2K6",
  "key17": "3dQ3fHmt3jL3ULWFrgWuqLCjQZwfFfRM6E5y9djb4CeLFUNpJ9ZAVQek9efUWejZjQBJDjyL4BwihrxfjfHvPmkW",
  "key18": "5bhn6YxWFXJuX1B2bmgZTCFRAmZQSKhQrGkUvH7QvUd4NAnfA4fZZdkXZTaR2BRAQnRcLwNdxjdreoVYL882Bymo",
  "key19": "2JSTiPw6Z6Qn9GN46fBMYidNwAGkmk4eXxivPUPntnXj2qqxA5owpJZTSP3uvNmEFMPwjXJgHWyziCqCnJ2GQxpf",
  "key20": "2Tg3LsovXzUytFu6vW9mycUwk5gLQzF1tphQp4PnJVvrQJAhYrU6CkEHTdErghSntBjdaqfbGD9njgRUJUXdSMhS",
  "key21": "3VA4E3HbdjjQ17h63gZHrr2anFbq2JJPN8kSBh4a3SWe2TMZXCgceo16jW4gNijmZiEtuFaFb5MrYNNGXN6i5hyM",
  "key22": "2xax1gJAjN22oEhgCJTYwGsfmtWSF3HPXT9QctvQ5cxJuUM7ih9PKaVzdhtKBjyQFDV2T8o71WgHRJqotWcC3dqA",
  "key23": "47EnbYXggVQVMJHFJfdx3Xu45germLXpNG8dYYQNAdjd5UmkjifDfQQ5V6yeQQLJ3hC5iQDVm4sXhwHwmJeRohD4",
  "key24": "2z8Bp1rcVD1LHAQXTgyFrDYKL1296qdTwG5vCgnJZp2pvDJuz6MSZSTdsPLrmzcctG4Jv5XiNVDS3DAJEnfNxyit",
  "key25": "CNYuDgrUo3LNfs2pjFUCE8WE64deRV9RwMF99FKsGmXNZu52hQAAmUeiR3ZJf46o6pXk5wBeSJHm7gnCxuzQjdU",
  "key26": "3xbyYJto1HufAnNR7xfsmY1Qj9Njx3AGnJVXJwbB9LFHHH7CoKSZAanbQLswFNMDyoLzrjh2b6pbt4RL8vKtuKk2",
  "key27": "2X8PJGUWKk3UzWNxsaJmcppV4y3dPK7DCEiYrA1M63LEyZkyDVfXAzH1idG8JGsnvTpXxF19bJRdpCUTHcYH87Qz",
  "key28": "2AnMBtcVyadbupiJ9V6Wp4JiBifraPL3gfd8mehGUf72rpF95kfugE5xHByHSiGRfesB8ErY93pqskDq6iSodAYw",
  "key29": "2pGEyjDLs6tB25MpbstAzBiSEUEvtKBohonUYPeNqE9ZwDMxXQqRJ5yP7PH5h4LFM1yq8RyeQnju1eHT93JqnLbR",
  "key30": "3Utx31cuZgqBB61Nrdm5PLHxTQ88SXoX8TGyrVeDVpMaTwpuHTDLgFCk6tVraUXS8UCKcGAXL4ekiwtrVvusAvpu",
  "key31": "32dXpN3c5mswE1pCFdcXBme92ovkokX2o6XyGBpx3Qpe9dDcykrtdqgK7CTw7VUSebwwDf5azhptB75FNzN8pFpM",
  "key32": "5UxTjhpRMuknpJr6qYx8MTfMmQsMddYToqHrXqUjQFzshygxMMoxg9wMxsWDVqNm5K7HRED16dnKYCposyLEA4dr",
  "key33": "4yifaR335rNZMV47YuekoTuhQCWxZVaB98LQ37puc5F1LM5roVXWxZXWvD2mB3zHAEGV2Us57jjiwjDhf2EQLxeD",
  "key34": "3Y7vq1JFCDXMxLTspTrUPDk8kgeVindxpe817NuS2K8Djj4MFEPnmSVbueMPpVhFFCh46EiJNxNwTMdKFuKocH1G",
  "key35": "4Q8vhgdLRcEDk6XBeSYAzX8G2y8disRsfb7BFNWwy16LU1cBsUdhyGzTxnXaUaWA5oXUD1sq6siquuUJKUmQZ8mr",
  "key36": "5q9CuFpwUBX4v3iufAwnV5npvVrXGzjNHE5s9cztWFm2rzdNYs9rYMPejpmYcbL3d6VKpoinYnEEpjawn3N371bJ",
  "key37": "3oPMbRFdMycSeooFUC6NbbonJGBuTKdAC2xJViFXatNPXycd1KXJruL999ieQeNTpzpUTVNkBhgqfBETBdfnqZpT",
  "key38": "4WVTqFdH6LWMVGST4cgW61YLfhfNByuEUhgr9E3Q13q7apXoDVjUXaouVvVDPp3i9L15QBMFnC4CfKjafS5xwjzR",
  "key39": "4G1nG1qgmVKeCVmkTMWHH8mME4TAsVqqTN3oYP3Jn1Xdp9A6QHppPtvPYXjgZaV6Sw8Pn96TCEFQVDBkLPDaapC1",
  "key40": "2nKM94UDdSgwhvAAYwHsjUyh3Rzbn1xH1Bgi5hsDNSxwwCLQBRbQfW1mH4t4GNueaKc2dTzptt2PqVcDCk5CRYYC",
  "key41": "5DxXPjW7QR1Fp5hUWpaUCQo5fWpTTNsLRpJ3kDHt7DskLo46LE2GZ9CUv7LEdEZ8bXJUH6zJgbQcfidJgtDiMafd",
  "key42": "5PodNmzhUMQ5gz2seCUjTkCwYgH88F9vcFGKfH7qKwnVE86KiKbmfgGaBrwaHEi7yqMabfQBTWuAZFGx3CpHFgPn"
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
