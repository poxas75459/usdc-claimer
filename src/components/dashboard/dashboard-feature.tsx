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
    "5N4VabBAJBrbEmhDB8GgVg3XB9YFs7hnTHrzLvMXyzhgntPyn2XJc9VLUE62PkoGqYcQiMoWw1iQnrsDR4Ca68zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVrHefHHXLwc5URn2CYpiHAygYQi3wphbwoBBJsbsYfgR51ucP83FY38vQWjA5kN4a2BPBaMAehndtV66rni3qt",
  "key1": "4fHa3H1xXkzak6Af1kokDT7qQk5xQSJSh1kwndnHB56CksS2yBCvvRdNpnsuXie9PKACX4xTciuR48Rz2uurwfk8",
  "key2": "58rgSGyTWt37aJ8ySdoWS5GNDDxcAvimSiZN94bQ1RkWwDFKN8pzWeqorvK1j65eyBe7oGbMvcoAVoynfCFiG74y",
  "key3": "5S84EnjqiFXmP7ai6GPio5Zo13SMPgBAuttoZJ7oFZTVqymAVGnrTHP8ioRGBcLWYHxHWJCQxYUxB4qxbiPXGiB1",
  "key4": "33Ez7ZUrRbfT5ETTN8mYUdVfXAyvJkGEFcewk1g72W852T1ocPdawHLLzmCRcQxUS1U1YvPxpkKtXHVbPBGDjx7W",
  "key5": "3QBraWCqny2HyKWVvKzQoDvMgZkMTDSx9c81z2QCTwxdkwiqbF8Lt4bdW5qARKP7FUpUm4iT8oVZxXaCAAup5wnt",
  "key6": "2qk8P2suqeo4vM2WchtmBEHDdgaEWNXww7LtWx93FVdP96NzKdEN47ivjMJcSYGoexHwCuGwb6DXfySYBF3YL5D2",
  "key7": "5Bc67WzmykjNmPhpyytKfgvddhyP9TUUcKAMSpJooEqSSSYkFKyT8THdV31T7Yt7p2H5HQPGEygbjucifwTNgUoy",
  "key8": "dyNvcG5CCSftH7zqaABCFy9547aNfwkbtRcE6g2w23v7eMKpm9VHnKRUyH7wLWdaTriTEjVvhU2AmPPyRLRspHz",
  "key9": "21BzF3sLbnjMxnDRueyfZKSZTiMTpP2b2MbKuXdcCFP3URDrwCYQYgsRKQ1eeDdyh1CPHVsnt9HMcDatDfESfPRZ",
  "key10": "4CUQvgHDhMEJBPTLa8JTCkcjmtAPXNKCbEM55rC1fJygD7vNLXP4ijLdvmrLWQQ1Rs3XZxaUGwSFWz3oMBe1Uaup",
  "key11": "5Jn2mg7xnBn3tdJhasna4tiCCwEfkCsUCftbd2J1qMm53RdW65DgrYpssu5HexZLsvaKGBfDHCEP24NvvMLDomXu",
  "key12": "2u5zd9bBbYBEVKdszurxx73pbGQPXPivNuTaM3LH5EAa6c8zZNirNRKzYk4XMA5R68yzG6JbcVajrJ7dwRxurnTG",
  "key13": "2vikJyPXDH6wrZFx4nSq3qgDSTAPDBAGeqCBbXZBeeaZxpncNFyDYikuRFrgsbfx83QQHzmYzoHtJH2XGx61SZji",
  "key14": "61JuEGpwj4tvuG4JFBpDswfr7WSdFQuD8qmbG5oXZmCpqcfDrr58kqasjLZUm2YHL3F3iiwGy5i97RzbKYayVWue",
  "key15": "2dmxJZLzFqMYtvekTohZa6EQAWZBVNzJ7WwURqR1kFTHdho9cK91t9hV8vH11jE71n1ryG4PxkxYvPpLRVZksaoJ",
  "key16": "5iocdooah6CFsBDS6obMfvFyWhZ1qQw3mXr6ejN7LaM5o7Xo9yRvtEixG8hGHhmeTgzB6qYKL2qtn5HxPNeduA71",
  "key17": "2kHc1x9FWfWAQo8MQASp26Qh2LniijHGBpVttifj3dUgJx24EmU1MhWNgs1xoqMi5nVbHe5FXv1uByLddLhh9tW8",
  "key18": "KzE7M1Bbijkc2HcA6SeHQfHa97XhAxaL2e8CAJ9cN4ZxMWZhPVRY9mfv4utcT3N7vEBnMiPD7ZSDsxuCW5dE5C6",
  "key19": "5bc6NHsR57Up2PzMDGZaDbyGHUaW5gWCWSbCtwytRPoKqpukJWLWcGTde3giMHcXTSUYqD8sPj3RB4APd1RKmTLB",
  "key20": "31scv5wd3rK9UwbF5UHHDWbsbWLhAH81SzseiZK3e1u9CjjS4x8G7zV7XhwL1297NEGm8u8LatFFLazHBVeRtW68",
  "key21": "4ZE9WMpQ2UBG75AMTS9W1xwP5pxWHuv22v2YPTWoHYPrcbJdjRaa3itvJzpDNe79CEQ9vGzCLM932pZTwvVRGFjL",
  "key22": "35edaAVvzfHVk15rjqEyPmDjfp3ev3PpxmNXuyg8Dbt7YDjn3xKFjBwUr9NHEsjQcrw1SnZVyHgFo5Eogdn4mhgM",
  "key23": "2WfVEZKdV181HdJSqxMpw2QbLQPMPmFFMnCT28JqcHCqt5nMbF41QpCH4H9eMEY9CdXbcBw2f294TxjVUFoh3EGw",
  "key24": "23MkzAiDCDyRECHHs1TF3tbrGPhNLpz7MgmqLGpz7SKTsS1WWxk16VWawV8WFm2sehvhqce8fmFGRSkhru834C1f",
  "key25": "5y3DEKgypJa1u8M8BJBAdNhgH29JLQ4MUz5L7Bpj64eA1gBtMBHieGHSDvvnam3V4bpd7rNFqvn4RsghckCmacxJ",
  "key26": "58qM1DxYzTMfC7SaEMNt71LNh99FvV1zXGf9EJTARwVXAPKhwcC6mmbK55VzS31HbTgFDVs4XN8RGMRwys33LE79",
  "key27": "5TxapRyW4j1LbsezPZBaYazQg35HL728B4MQxrKECWwp868LCRB356L1S8HHhzXRaKy9t1G1y1CGhqSf3rG2SWyn",
  "key28": "3n4axA5GJXRWRoUr2Pdhgzwep3CQzF9n2MH5pG7d9GBiHZKFSkwApVwiRkvRLPBcJRxZvi2XpvaCQpbaUTKuME9J",
  "key29": "5HXG49YaoHi3eDEfKuL18Va3YxBCG2iiUQACrpDEPkLaWh4gkSHx2xRxAwJqjua6tu7b8g9QRe3pNHXrWBVyBbzU",
  "key30": "STnbFdwdpbMftXTcMw5aUyFAcmumvXPJ7g99fHbMMQZgdwejYihNi8UX3e4GZaGoYmjyt3r3CDHdQXvknaEkw3E",
  "key31": "2c1GdFxFzdHcctneHLYwbTzUULLrFEK2sPaP3m6Wy2Z2nLyox2FdE3fXwtuZPw5s2xEktM34auFjAosCmiEqKRbJ",
  "key32": "3CSKjF45EE16Ap89bFEX3V25ib8Zo7Cro2HM9HcugUtbU8jbWTqvbvzz8PJquxz4ZHGFPK8PF39jt4vYyaHLctYy",
  "key33": "2nd2WwKHtrbX7dNZFCEyHEN2NX1DGMfLWv6fuNxyTws7ELTxTzuUebEouHJLy7jwQHGeKAouaS3Fkukt6VQB41CU",
  "key34": "4SW1yDe87kNbUqXg4Ux7fe4EjKEfaimL34KhJCRU96aPTG3RUkycpqVjvA2ifDDZbuFszrkdn4Jymp6BrNk21TLq",
  "key35": "3WvUwc7hg7x5KE258PJbRVEDDmHeg18neNiXQUyjLx3k4GXCPH6XV1tc4QhkNHMnUtqstvh4PbQWe9FqphF6mbAj",
  "key36": "2wuzzcy1Y3aoz4fwe8Z5GTs1CWVCFcG6E7kttGdBRLxJbEnMkCFbEFYMj5eBop3t3wbRGaWPqXBg8LFbfaRcQ73z",
  "key37": "3T2qjTSgn5G7Bx4yXJPBvahiwkBHQFbAjXAVkUwPxabifHfTfBSdq1jU8D1rd6qgg3k81ZiUeURbXCWoWPozjWQS",
  "key38": "afAYzUHdpvMqJedAV8LzWqTjs4W3s3ZnwP6Fq1L1wSvHq36yKLWUeZNBNnksmQuHkwKKUNMEsyW3QyU5VV2LUNo",
  "key39": "Mh4Dd59EAefoHLa2MnNFH2ETtnxRH2ndthu7EMi5RwyMbekQianx38Mb8bH43QE8NzqEec594dJR2onGchD1zcH",
  "key40": "4BoH479ohsoKtA7jj5rwXBdkRWDNYBW1bQoQzqsnGny747CefXFpn8tdXqknH41MK94aEUM3jv73whHwnL2US9MU",
  "key41": "4x4LzPZg4z5neioetfEc7G7CbdYRHnsKjCZct24YwPhdcYMtY3UFvumynQUT23veuRL53bBh3b284ii9qpU3RTeC",
  "key42": "488h6kMC71oSNihJ1iheXGgyh9u1XQ7WwmVgyWLoz6ef9oBarNiPn7fUCvDzeaiuBWEBB2hhQo1BhrZTALhWGomz",
  "key43": "5zftYSo4o28mPS9UikTArYqBiiBMSXySyWThf3pEokEyuXZdC5NK42bJBzrDiUMSgQV3Q24Kfmc9eR4tAkHSXVEr"
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
