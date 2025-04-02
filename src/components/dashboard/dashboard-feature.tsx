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
    "5mEufKrimLrNC4eaahFamcihgjLidhGLNHjKKuMErRKMPifQTPQmpdg1fA6G6T2UQ7yQa2Q2nhcpBpiG5eVutVy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPRCEYDYW4F7t6z9DQseTHGsio9WDkPLKkBWBmpXMg18GnBFEajGVHSTMY47YUmYGeoF7Y8zsvH4MYnBLaSPipX",
  "key1": "2v95aucEFZ5YXsYjMo9nspPwvt3To58v1cUdCkFdf2cBWazpEhe6MXAzY4jehj422TXjWgFke4NvFbXRi4FkvyYA",
  "key2": "58gVeEDE4RJkzTq9TBmzBnQtjaGvWxcWWMZM5xFU9VCXmYQU4ExY8j1fzA5yvFcMxgqM13zr3E2hcP4ifSw6FDCj",
  "key3": "4ob8nPZujoKd6TwD95aqonAAa1c8kFMkknz9g7QW7Qgf5Y2DKv9CpzqQ99RsUC7MZk2eC6DGPx8gcRgPA5NLqyYa",
  "key4": "5NtgAP8wP98y1MProZeDA4TBEFH6M2AmVeihpiRfaBVVRRkP6wZ25PtWQW7sRkBCYLv482g4GMinhAxELobQ8VuL",
  "key5": "4bft6dJH29tKsKQGDZ4Szh7vzGk3bY2Yo9Dixmj2sToYNmtnkKvnNjJYCia56ynXZNf6xhBKZt5geAFTaSYuVP5x",
  "key6": "H2vFSryHDVXZ1GmrbeXA7JKdmcKVMxhK9MMFGX7PrpkaAt9qHm1BUzbPnDtpKnMcfvTqaqYsQLg134LbvSyjGk1",
  "key7": "5AoT7y2XEmPtAR8ETjFvGScTg1eRD94BtVyx7LmjgpvskXcxypCFB7jSwSBXGeeZ2hLwgLvBYsn4gefdb6iRrQgm",
  "key8": "4XVQsvhm58GwmGsbiqfuCPFEApk3iai2NU44wCTQMyNRXYY3eGF6zFEc1ANykYqq4Br3ezMNwiyUZZPjQfWUvwcJ",
  "key9": "2vdxeZietMUdFnSajBu7X83gXGRHwi3EfkfC6s8b8aXErLPfSqf2DKkZhv6sCeoTUGkjYDEpssorE2UCBsR7TcCK",
  "key10": "4EB2GeXBtJrXigiGdhNUdcVyzf4WdcdRBtk3egw4wBEamrTdydMc6NfcjBj8FgNwK1ew2FrusNgUUaaqi859a4T",
  "key11": "acKiEZyhhbf3p2CZqbyg6X4SYGjq1ZVJwevtaMfB4szCQdZHK7aa5tprUbSedWANdws9oKgMmLxyPzRXhREPGUb",
  "key12": "3BxCYtHD5jyiWrRnvsuRmWGtpm2NECCin51CiJZ5foPziYpSSLTkmjg16TbkAfjUfeckUVZNajTAhRDhjeAugxFt",
  "key13": "xeeLmZEVk9aJY2VnVMB8nvS7FTwErfotS82HMRWaYxoW4y98QRAvyMff4zPWsJeCwk3kFZcRFaKjYDFT8NKFPMn",
  "key14": "37bdeXvkHu2MhWU4tDR4XNabQiMSd3mygX5hJgHoJ5bGryCaLsEon4uHg5Retw4DpgEmhoYMDzn6SqfDSinWv2Wp",
  "key15": "qWxTxw37ZDDEPeC3UnV2WGFSZZWjnjDPDeNNF24uYFsQ8NmwsXR1Nyu43U7RGDhiWsE3BwuAbVzzyTcppREyfsv",
  "key16": "oYaWcmVmBQmwJnuhZs6YmiaQez28vmEXLUqzVD5rztc7oq8spk2R2DsfBDk2R26PcvKcLJzFjGA9CzRmpHq4B82",
  "key17": "tY2J54gjKF8iiF2tZzDRmArhVroQbHDHhN1vh4u3ayDhxvGW2yNkRGVLQqGTnF7XMXnMGtHZ5LUArAvBmg5nLik",
  "key18": "3PPk7wRp4pijUfMT26bBVCnMeMZ4sQJyXoTQCBW3cznGeFZH18pi2ywmiBVgwRh7KiLqNtRz8XVR7U8iRUN2dJos",
  "key19": "4FtevLmXrgBaZVTQceXdCfccBTqaVFdj926dcASQsY6UP11VFbfdx6KPUbDfWD5b1Db1FiVxcH5kPv4eAER3wFgR",
  "key20": "2vcwZL35JnLLMyLPDMipQa9VJ5aB9iT1yMrQeP7r5WiiJU271ZYgwfQUiey6AFwNeu9dcRbRrLmhx9Pn5uVh9LVu",
  "key21": "P3xmAt53HXdGzXCAx2ThVfwuPc9iqPAtAcsYAXkvJ13FKLJcCcw7D9EtGBfNc6EejXa33tMqtNsPQHiEroTay6q",
  "key22": "m1Tye9A3EmUdhCpeYfERMCERcfQhM9DpucsSXWbyJBhbTwWWf8PHU2TtZibSssCkCvCeug9UMZEpPmwWtpyMj5v",
  "key23": "2Li6TELGgcC5okxDyuh9AXVgAdEh8H24C94QQmf6y21poAm1YvSAHbtV5Fv4pVuFQS8vFiaFQzW5Wf2qovGPZWAu",
  "key24": "1MjL3RTrJynHaWycATrnGPn1Q1paDHhsX6pe14TUNWJUKtbsQNJ4dZGzKksYUwczDbShULN5pDnLomE7hadhdZD",
  "key25": "2VV9SirpW2af7StWzLYHabsZkLQFdmGHP7HN8K66JpD7TZq1EzWWXXJ8mc8ba5Sg2wdxMg1Q2CXZpUNXM8JadRsT",
  "key26": "5pgRmeagAFskwo2aKhKCVVfnzjvM7iAGPFzVQjxny8Y72ZdaAcy2WUZeZVD65TDQ6meXo5WHQESTuShCkAGK7g91",
  "key27": "kcB17SdN4LfY6rEo4f8smbWewe2bdwsp1uTWh3Puy4sZfU6uS26K1nCGxfrv3Tsg48Q4CXmiFwRJfDBWK9eagyy",
  "key28": "5yjJ2WjWS2YqSN8vteCZRBfgvfDjenNz1u32rLAn3pVNCaXgF9Es9NHAqE8JhoRF8znMptQTB4kEB25nWtFoUajM",
  "key29": "8K61bh8DzSfJ2BHkEAzKp3iFsXZzWv5EVAHnAHgrb7rniMs6TCazz5VztArREUj4KacXZsA9jdRWK7otPEPQhp3",
  "key30": "2BSNVeNYeBZk1rJ76Y6aCkqaJMNSBDV9Hk92pXTFHxjfjkLrN8AA4VxitXotcaKecStmsExUMGTABPhLyaFxgjcA",
  "key31": "4Zima1EUDRVMpZkq9nVHUzLdT6gby5MMg6LkU7ng84jpEP5xpy1khVRvcTVJaSerCQFLyJjhCswQameBxCBqXzdU",
  "key32": "2F2WnC53Eu2Bv2H1RU1NGnnpu36AhSj7amMa5PkUEQL1pCpCH3T8JmhH3fwGiino7nAaaBHLxjpHUcbru1hbJncc",
  "key33": "ePuMSscRP4VPHn4FGpd2NR9SU2Rtjengu4vLzPtjR2NfbpfcKEAgYii7CD1m2MA1b1iKC9qCntDhtg47WhjjJk6",
  "key34": "RHnvnW9eCnN4rtiikP5rysWj3GcA9BjYH6eTQAtS3kgwpMzTesEWbYdDWy2iT4hfhBW977LLBfqT6j1pvVxT8MY",
  "key35": "2cLbpWMdtCvc1jJjD6wG5veHLd6cKgjoWimjocgMnBQ11XjYqpTg4upW9ARvH5vcdoSCdHempWz7R4TMEdTzFXug",
  "key36": "4q4L3Crzxbv4uH9q6VJFJNjYU5nKpiTzG54njMFA6SAavE29LHkjZPM8f6VZBYJmARSCdzjcJFfyGV4oMtbmhvNo",
  "key37": "2XECig31XFAENCneP2KowbFq3v29qFDF3eUL7kHPz3t4ziiqwx39xb5ENeFZC86MNpvGCsHzNZhybP52R2zyuMsp",
  "key38": "66b7FaYdNE8XeKuJRqxinTeKaFhwA2zki63UP3zNwSQrfcFAjvmmEhfzvL2T7VWdQUJDKx5EUaQR4tYFNtXwnSRS",
  "key39": "35xNmreAPxBF4KCtq7rJ11NNPLsMtzXPGe44meC7gA6xWa7ZvL55Ern6RhbEuR6vyVCLZZzHu5XeirG9DpAHr192",
  "key40": "3YRGJxRRm6TbpMBrVTfwmspd6y2fzmXFFwnYmCRWBhzV1xpbcAEGYZUfsp7qoL3J6xdB8DwWrehLaD5DhpVqzBTF",
  "key41": "55MdxxXeRQkUey9Kt984BT9tuF2uNfuprF9Khvnv5usKC1gLXGDnVkdYZ413pKb2p2YXw87x65SoKkJKiGieXZiM",
  "key42": "a5GcukFQiaqRCfrxko4vF3BfYhJBRMEnx44wSrk7GTmkM1mzDgv9BCouDtdAXGdp1D7Ss8XkCzZrLtYEDbGYD3e"
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
