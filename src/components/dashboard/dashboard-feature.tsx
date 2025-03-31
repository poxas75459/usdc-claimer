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
    "4bqGg11ic1GBfvtVf56TTHygudvrbVCbZXRghtHB5RxMHufmA1ghPyjp1uYbMwpoWDx7RvfSN23RU277L2GoUnLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSoqMijqzLdrVnvXiCNjPvThd4Xc1mofFsEwB12mRHdepvWBGGXNRenQZDhdoiaZ6M3bDZnJZqAgeD54YfjqFkt",
  "key1": "31BUTQHadP8qUUR5K2pAkpENvi74fcy3iFgagfbX5meKRnc3xSPon1F2ipPt7tu6rVYWLF3fGDGQhCi3TfUXyqJe",
  "key2": "3nBk6cAM3ZwwuKfiS2v6vnrNE7zjWbmxVs7WWK993YYjwWYiHpmowfBbQ28uNQNu12oSBVWzorJ6NRgSU6dPosGw",
  "key3": "62yxmDVTPHpw7cghCuKDRVNqTxsXtoxH15DWtS6AN8jR5pdEov2AkiPUHLRT6kcYKQvDPv7EoVNTWhhi6RsR4yPa",
  "key4": "3CihbJKnaHD5bPCa9xJ5KXg6usudMqhze5wQifjG2hJxpEdQv713nRdGEGhtzjSFYLZd8vb1F8wFsEEL2t4adk8E",
  "key5": "pCpTUJZ6cfWA7bmgZiwWs5E3cBTGFhKpTfJUveopwiC1tfi9QBYU93br4Ew9ihm27RKy2Xo8kbJVBc1SdZhbpnc",
  "key6": "2X7Faso284AtmLh8wyN3RCrcYis1ytFjTyeUZaG9BxSo9Q1gMBgEkCNTTaGXGJbeC83FtpeNsgNLiZ3FAx9vurQG",
  "key7": "3E1xc4EPB2uxFcoPYNicj2KpNMADMpJ4HM9pZErfh23pKGA39H8U6TVGPxsr9ACiAKw7qGzr1QZBs469597tKp1B",
  "key8": "56LpMsTNbVrGY1gCZ797jAx7BibRFsNFxwkD1p7pu9r31aDuQReKKx3Lh5xH1pS7NUhuvBecgfDUftMVyPqpFshp",
  "key9": "2uRbC5fq8mj9Sa5Gni7YPogy37LVZhNFP93scqFFgRXguMLrR6iuutbjMvDVW5zBJsAdMx3zJ1C65eFskjYgGDfh",
  "key10": "5N5YjA6jy1ZFv2PDMGpeq9ipji41gscSAFCnnQGS2iNXSb8nwxtxUtBP1DZSTjV9JQ2H62JUvJsrn3bvkKojJ3Sm",
  "key11": "2hTKbcLDGjnBdn1AMiTQB57y8pdBoUvbipEGaKW5EGUJt9wvLWXZ4RFBzaU2jMsRKQ8vZNhwh2ZtkgYP6XV174S4",
  "key12": "4DMMzYUojBGrMbojLa5XkALoebdSKNKt1RuhYwUAk3j6oEVCyFML2sJi1iCoqa6iVrj4M6HWu45rC4h1DXsbhBAj",
  "key13": "27SAoFbEA1Z2RjiqDeBNUtajfaVXcJA23FAGDZBrFPwSGPwXBc1W9jP2jKebnojjCNJdtCw2pFXhLbrwWsUaAek8",
  "key14": "4rVAB3qBM2FGpoFz7yBeGjCYnL7M4ZuYHZFAcZTf94yJvDjVtaw8P9FQFTjpysDFWGhTvMPD91JANyXVBaAdQuSj",
  "key15": "2p1xkCeb2XyC8NdohRCCrHXHvqJWao3xA5HCJe1KymSWZBGkon9K4YYMZ9nkPMrHPkkPEfxv2zUsSCeDZeES9qDL",
  "key16": "2hpX2vcttYeqmMZnN9aYM6S5ci1uM3Hn7ZCaPvpsgLg47AiRfHP5uYQtnoR1au9aXr3c8uaf9Pzr6ViTn7jumkBW",
  "key17": "44DbceWcQ7HV8HDuGEvmgaRamgqdwJuduKnXbcQUnefUEByxLXSf5Sf4rTczPGA3SyE7dpFYv4m35zBYZwgMJt6p",
  "key18": "5mZK9Gy1pKRiXUhoa8BMre3khTDDD6py8tvEQ2Qtb6qt1hnLAzH7HbYbH8SMJQFPuDwUbQprD3dbrTkkozxNXgw5",
  "key19": "35fjtFKm2qS6hZQQVugV5AdWByq86xAj6r4YuFww1dqLKSwRYcgTq43gntrR5HgaqXiyUxP7aTMpMzkJmc8S7BMi",
  "key20": "4FotTVSxcJtHtV1LSEgCrAgwMBiQw79FhtiDTUsD3r2tx3aEiYUiDYYJ96FxL1SKVNS23RdXABiudxJz1FzXd1rP",
  "key21": "4UwDUiuYGvxC2M4pry9y25HTo2NoDjCiprvGcb7Gj5fw1m3vnpq83unU6zkDqhHkbt5aMNyUKuS4BhdwMYeo3Xih",
  "key22": "NVbgo2pMcdoMxs6cMLFW41FcZUHzrjBDD8HTBmwy62KwuqYRr3fy916qvxAm6jHo31LYdY6RS4GzvqL9uRZyvNo",
  "key23": "2RQQu45DX9UFC6Xxab5ZeCeLEx9hnFBFRAVnf6wwDitVQKMSd2oW55mcE684d3usLJoX6Ky2JTiCGULtvS85676d",
  "key24": "34GxAaNn2cPkQAaXbDWHcP3frwRpoMRoGwa92jb6m4TXoXn4XNBxyKjNaSVy5ZipaS15B3VpUofPg3ZGZF4ADeC3",
  "key25": "4ktS6zkCis8TjRxgBYXYytRHQ4vwFgDFEhBz3o4pb1GSL65goVWqfBTwahQzAsEXUGS2Yj84xjsfRP3Dt3FgihfW",
  "key26": "5XSw7hJeqJuXAte7WTWAfnFfTf2djc7FBmioRyZtiRxCQYHuBkmkKCq9UP8hpp4rD5ZSSKEshb24SPLy7b1eB119",
  "key27": "5BkxDL9LkHjb56knwSJtdBqYTXbxEfmueh1Nrnzjn6SL6cM72dkN47CeMdCNv7tMeDJJMcHLDNgedyztG9vAhhnE",
  "key28": "2CpmcJJeYV9znuJpiUmurA9hLDtSfeQ7K8TcbJaDQFVPHJir2yKKsJKiLjY8fW78pxMR5LvBWcvfafG4ejPozDiW",
  "key29": "4r3Qf3Sxo1gFutyJVAb6WEpPyWhbp5jmLFsCyr1Rzw2kyP6SQfRL7SbvXmhMi399iFVuN3nhn9Hy7UVVdiMQaTd3",
  "key30": "3QQaaFV7rrYec9FTELVweFRnWG1TAQv6TDU17Qvx1KWRMf2PJy4VaxULMqpB2TFp7fQpAeZr2WiJddQHVMfavH8P",
  "key31": "wxwAbVP642FhtDzkK1bWTvspWjySudybvvoxM3TYA8xEb35fe4hieuakTQPe5v83H5QLafU1RV5RJWowZGyrHF2",
  "key32": "3mzXkXWTLPBgQuqwDu3wggjzHowY5qzQKzKQWcP2sooFgjzi5LmUPGkCHaUovfjGhwi3SHG2hkwAtsJNmvWcumsY",
  "key33": "5qN6F4ihDdSPVM7mi9js4k8f8qMK7M4aCDnA3xni4KtsADbZPWZfTeDcSiWKcGpHYEfzxJWCX5P7yAny5tr6YhP8",
  "key34": "2HsrGapwjzYQLS6ZjMDGvKaLrLYQGG9uvQN26NSJBs15dKJwoFBjjv8YX9Q3YJh6QGPJt8g8dxw7MDvSFqrAyRXP",
  "key35": "5vSV1euQAryNdMEco6Xo4yuPSKnkvJuDePa5shPoG1CqKnkH7CEAy5cggtJpS7JNy5iS75QW9RoVpV4WjNCLQF2i",
  "key36": "5cgLTey2pkqUFsk9YtMapHDdkSNxKbdN1EM4PeYuYQrUef2gLuHbo7eNKQLZnJ2hEDhsXf8WdkQp8RQbDfjCARKn",
  "key37": "2cH9b14y6T2ke4A1PJg9KkmGHVYmD2gjtxMe6gV4wGeTzMXQBLgJjan8U8Gbx142DaMipWjuP1iLNZa78QBvf6kS",
  "key38": "8GFLXNP2MmAHx7AHVcdWmWNSJf98ot99bF3t8qFfiEeHh2nXAsYvtgnLEdrjirEGcDBtm7nUCBZcwMBVHbU3Y5j"
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
