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
    "35tpFpcJF8anjC5keK2S2Zjg9czShc3CrjiFo8JTiT4dXAwzKSgDw3vxYjST76MuvuT2fURQgBDppLvcjBtLbSbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42NM7myBtdpcuvfbMzDdTozFgvS8HH28AcXBXiEbNaeWiSTKm9tQihtmZz5CmCdZscRAPzRhYEL2nxmPtxdoNLfY",
  "key1": "4GJqwJpv2ScxuTNc6kvPFyLdDtGKhHsEWD8CVb7By7CWAgy64NCbd2fHqzH5ySC2tyDDMkcg3SjQjpgSnUEASXdq",
  "key2": "5a4x5aNtoMcHCKM3PAhJs1tw8KBorBMvFfsBAy1DHfiMVpnHpUXMm12JvD3jbuCECHubfd2iE51zUTCZxc3pyjJU",
  "key3": "4DfsQGz11LVbbiCgwSQKmffxrR13o1xHrdjy3nJrTPzJ8k92WPiz68TQge6EXwJaMe5xeAydvErB1xuZov6n2pm5",
  "key4": "2oWNhY7mk98DC9QSHkrFDrCFvditiebNy1fgtgMwA2YapPpBHSDQanwdo8mX77yG5Msr93NWZhaYsmB4o1XUoyhL",
  "key5": "5qeVxCZHvRC7yqy8m56puzFqUSgiMA7zoQJmMWQMhBCWT8dPgaqyjnc9CBDwMGG2WvQDhecjmPm6JBxSG5x9N4Pr",
  "key6": "3i9XRbcU7kQdmD9x6n3MNWWSkZuXhFCJXwZskPcMcFJgy89GAiF7tiEpZxV465sQt69vqri2Ljkcsn9bypDdb8Ze",
  "key7": "5XPPWV9HL7MEmH4EH8V3QBzfjURcXASeiRPK4gZ72U5T2yTe9mgdGuvyggZTArspVoyszCW1rzjy5Epc3hsR9R7T",
  "key8": "5tM8bbvr7n11rodrDWcxpuxq3MMYoxkbniX1ByJRmijYo5caxRtyofrmiu4pp26832WkDEMEi94cfXtjJLYu8prH",
  "key9": "5ARafeAUGtcV6AP9v31tcHDeQ2KErvupiKKoJRQHFt4edLD24qkvS2uBG3SZPCVsCNfqqT5mz3yWzsMxuGBGwy3X",
  "key10": "26XyiyGTv2KvBrN4VJNz2WCBjCZziWzYZjXheUeJ9QTrNnu3A9XRku2GJLa879vT61So11EyDZqf7m4s5BE2nNtB",
  "key11": "4MCLv1jRqkpBk4svWUiFbBhcNVM5qogajHJgDvSbsk3fWkFePJSeiiMyoN3nJgnNYs4eVpSspZXdb1iRUuDQUbKY",
  "key12": "SThYEfesAj6rHnFUmc5MjNDUAevGqB7o1JLKjYC4fGdyq273ZhhXkfG34X6iKou1U4yFcPDuWZoDt1Bca7zyRH5",
  "key13": "51NUe4ppeUvfTf9DX6WRG1v51SXu34kSdj1kNb6VtyVb8sGPupWEHbGqfQinzBXn7yrta5wbTii8DTbSZ9quJ3Ha",
  "key14": "58Q3Pfww9Zg9mLtBPcJm5bXFNVrTd6VSdKQFUyjbGe6LyLAtFniEaTrqiezuPGuBwEUZPtP7k9Zohf3dcgdh3cap",
  "key15": "3xXJCUCQNhRg4fpXQo2717k4Ltm6us6vqXthmyrdoVVD6MpifEZdXcD5ZJAMQMD8hPMGVEjDx7anZL2xjrM6Fsag",
  "key16": "TwQhuLTQXxg8yYS2AYXVEMgLkNwKd8kx6P3p4K7y5pSur76PHAy1kpvn1ojD96iyvxwgUrMpLAzE11HPJY5yQVq",
  "key17": "478HmGVhbVtqaf19Y76JQfo5PzQwkZCnqUKVNS8eHZSRnpkF9t62SEPJ69vEibSv4LEoa1TmE7NsSdxDpCqN54Ed",
  "key18": "eqD42BBHcXwds8mtpeiw7fFPwuv1BF8SJGjVQzZNdp6FPpf8EjpN6C56mndEj2NFMqCMSqigz3dKp7qxgJRfk8y",
  "key19": "4qKQ8zAtNzaDDnjqSJ7ZCLpr3cL3pKtHYTxauG1ghhzBU9X9yjaNmPnW463VaijEC3pFtDBvjiZrS8qJAqLxjJyK",
  "key20": "32BbVj1D4yrQZ6wkBN3ZXng773BFd9CbzbB4FhEGUZ6m8xQJKhELZDudLbZkyhNKyRjbYg22FhPqQMhJjNuUFkfA",
  "key21": "4AxGRjHEwVYWfdm7TY3wgSPyM99W8ydq5cdkEwNBdx5N9C1HNJ28DWzaXdLbHEezbXXKYxG2S5acFK14HP2qkNTm",
  "key22": "2KKPPFCMxoqPakFh9k6GWw1Z2ZZMupU7ypY4vdiLShgyiQZfSmuiaMDbhpAn623r51rFrRYinVguNNmWVMKjZJLn",
  "key23": "5AogpcWDodMgq1Uv4B78K8VLHoha2hbjozQAEYMA6eEiAELNmMuT8E19DhbAroGhi1yGTtqARgKeTuBLu2Pvud6L",
  "key24": "5tcHubDAnju8F1pXdSqE58TRLBbTUMRPp84xsZYmTZ9msjoFpafRxSqsWZKW4NUCqJDFoKjiFxjcjhqr4NJu9ELN",
  "key25": "51gwdzHQ465gxWDFj3LKYj1s9W6gjrYre8fZnpLQETMvrqHYyZHhm8z7CF5doYsujoGcCYtyfT4igLCi6RtMLsDW",
  "key26": "C9QecgkzQCntVrgeYJWPqz5xxaNvmiWVfw8qEz1i7A5mgjFraXoHikv7tfkSqwyafRKfwGGpYz2pY1XXSpcPSa2",
  "key27": "4YhthY1am7zoamGDSbydZX8bd3B3y6xHfxDe6hwvzP3uk6AgS9hMAqM8WHotWEPKZovitUEJ25Pdsn7DrE5asx9P",
  "key28": "3eRPNSK9MU7tai2ZudTpNiuUv4BjAuRi8h1hAPqahQozkdZsJCNvjr6C1uje3PuUXToeavtxRJxBBEa6hpgXtMcm",
  "key29": "2asTGgKBca7E1Jv658Syz7nb5awstKsXSnsh2iBEfR9zgodAVHyhtoNqBLpvXD1sD7ErQNQbnbFTnpVTjg5d8cpK",
  "key30": "2Ro5vxSKq6q6RKHcALUPiCCTMdDNVHbjS2WdZaekHyzCi5njagDkpxJ8LFB3LMSa593H422JsPDWHGUb6uLZ9MME",
  "key31": "3gjjydGQSFC5dTZHLkSAaE3rLX6NNfYe5GEU73NDbLsHLPQo4HhSvFNu9yhX74gvz1Uqmcq9pCcJ2vvcHkBmGSgr",
  "key32": "ydUs8wV41qF6xaEM7TvmCoAFuQE82JwRUYVDEDXoKPopNnBy9eMrSRTQ3wSV1MnpB7peuyXfrVoGE5kxGoVf6yv",
  "key33": "we55P8G68Nm3bBrCZYuZ7idoARvtqPQkE6q5JNSDM1h8rJnpn9cXpts7euCXMY1CMxZy89uZbhnX88yQ7KrT3r6",
  "key34": "4a7rbQdk9UFgALWt5dBJGL8rXRdR81hReen1s8vtWuw6b2WoJhiRMqTyeYdHt2KbxWourXYTErSVsyGkzTEJD2J3",
  "key35": "5FDsAphQYTstCUJswQGJuAPoCkzkbCoXLGqunpiSWELSFePCcmB9B5CYwoGnDa4YqFM2udRq6Z7bXFrrodRia7Pb",
  "key36": "pf1PuU5vY5ATzh3NDBjhZwvtGgUWyq6mYAUg87VrPnBEW6sfqbTW1YDMbMXxoLMfpe7dwwZyizuqExpBiXqrE9f",
  "key37": "3BCWTqM4DAijFRBLe2tgTUhed2iVdaC9kHgye7fFagYVcNwYLmiRUkHkXA1ptaVjeby2r2Q4pntWgmQYYJCsF1gs",
  "key38": "2sebu2Y68kDtBoqG2nYsryKuNVqbBQXA9McmgFbAQACqJmRGjtFFQrsL5VReM156No4FMGxeEBR4oxQSvWnLBdrU",
  "key39": "QxExXPPWRJZnHRV8ZEtyMY9kEnQTL2UtzJqmtLjY6itp9CL3CJ67cqBzHus1jRow8XwErFmRKKg7RaKTm9PLV24",
  "key40": "UnicP8AzYQN2YbMkgUhv39wsWrPZ5WzombGQdyG8md3sEXdy9RHoKfbYQ1naRVfarG4DwXPSnuq8za2epEatLD2",
  "key41": "29hLN6nsrFQ2xeNBFDD1C4JK4xQWNBFwH4HcJ8KzDqmdfShzymT727FLkt8qHZqrXCvJ91z8gdC9QqwSYoY2mZkk",
  "key42": "5EoQuK2ZqhYx1UtwUiMctguciUaaAHWsXmpezPfaoio5a1zsUCMVDf68PWEgspSmLPB5uv8qPj5q34VhmWix8cuc",
  "key43": "4bNFj3wqGKm93bjz3ze3AvT8cnW3C9CfbiNA15mB6aZYMATDuLEiLfkAGosJxHK2dNFn54p9FRPJ66qbCdeprBMo",
  "key44": "3cgs89dnjnqt7w5MXtJXt1rffKPTn6ghtZsskJt23qLk2x6xm65Z89teiHq9UYz8K36znVUQUnK5MsKmtkoAiAvW",
  "key45": "5EUi65PVRXVLwRXbiJgXTc9jyNBd1Qcd2P5TPmAWXeWaMgW1zCvcYAff6R3RBcGNHjL1Du6MwSaLFyYmpsV5Nj36",
  "key46": "2rr7oVHELQSasqdbMFx6gXmCbFmY1Aig1UPdbM5qy5BRoHYBeoCYA4wkga9GrTxhEnaqq8Fz7QKvDtNGuWWCVSre",
  "key47": "4FBtxY5QQL5yq4vakUrC6T2EUqkHeYWKqz1N2E1fBsjJf6XKzW2RyYMVwGoDt6u5qX7289hWMGtaGc7sXXfwp6pb",
  "key48": "3oStErUvVqEkZtLb9Ygp4eyyCRSZZRoyUtTkVVPueNzjx3Pb44vuYCPvReHAuY2WrYsFg55DPemPC3ZN7eDMfp5T",
  "key49": "2PRiKwqD6SGub2hhzpHEkCywrzomdzbTkUhtYpv5FXqDaXXPqZn94rCKpJUhVRYbtaXAajEfBNbSZxPsQ12wtJXg"
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
