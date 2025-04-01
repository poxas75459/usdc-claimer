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
    "4Nqs7AXxxvpRoszNE2Cmn77caduK6YAbQRemkXegMPZfN3em8WW4QeotnawHp3adHZiFzo9AB4xhnTfVzaYN68d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2koHqK6J3v4Hf5vZ8vgApqbLAWadDapTv2fv3i3GMhARrHf9KuUtCgFMv2oymExXP4D9go84x3dseXvt2ZKJMHME",
  "key1": "5WTRML4ipKV2h9aSoVwnb6CYvKh5JgoWyGqs7h95MRDUQrueQF8g6o7Dgzos5ndQnMZ33agchKfoLcSqiegsk89x",
  "key2": "2RZxy4sSkfC3YNUWV1NanDpT5WwvNrjDDxM4QSG9njaNG2FswLmTJjuDkXc2yiCcqaKoZdXDtao6rWgbLVGocNgK",
  "key3": "3ifFJMXZtkHfezj4uMcGgZd2rhbMkkTpvn7ou9E8QMZaBjFApzue25D8vjgMhytBAJkiH6eTiUMFsxarQY2vWDFH",
  "key4": "tJqpNkebDbsJn1b2MqX8gdPZ2NfKCQSioyERbqHKmqWBbwZEM2jpVSnJyhEQLKRHv4Sgowo2f9m3ASMji3EijhP",
  "key5": "4gPmPM7R9vZrQkBRowhNzPy2PnGjNvZx7y69vkHyphNS8sQzYyHEanTiVQ7axwnvXmBfjME4GYMG4TbAL3H3LWWm",
  "key6": "47b1Rd9MGTFfqDjkiAskQWA29kPRGKTBDDWtfNsx9F9mvHvHqtvFiubQyZCpCv3G6DYTFdp6H2AcRdVvFbRHwzkr",
  "key7": "2AUZWCsHe3S5Dssxxjgf8YXmPqZxxerFTdnCjrfMHRqJcDUYwAQqa6ScBc15VQN4Hj4cT1WHr255osQ5CUGZvHrp",
  "key8": "4sxQCFMX9HcHLfuHFsRVoDgKR46PspWk3ieZkxMk7mPbdh5LcMWa6h1NHfBsgbfPaWwQbE5bpuausvVqANLYjqo2",
  "key9": "5fKzpMytHEYAwPzW5pog4ictdi1bv8vMmETe3TwFwq7ov7s1fn5RfKSo56rxdWCTziWmg8wg9BX83JwW9xH3DUKN",
  "key10": "4XxY9bbfvWcF9hgt8iFhcftsVHrQrZjs7Bkk3ppYqHW3xCmNjSYib1oqmkuchdcrckBtRdDRBy52kkKSjwQBiYud",
  "key11": "2bwAiCua4NrZwod1nW1RUCJpeTKi8Vf7MPE8ruh6pQ6BbyExM1QqXQ4HihyBc6N9zg2ZbYgFKSy6zi3D4hJapLSQ",
  "key12": "4YPNL42J7bNVfKMjTMipLGkWsGRQKtbEn9yCvLroqd76fHHcMD7LU55LsaAsW2bfHgHQBaHvA9BmL4gf9YNEGPji",
  "key13": "5tSEgdaQEhkS8CVrybDj2SCSGPwas9tuVUD4CyKaDe451DEA8Nm95LLbYecK9DGjWpC123yCZmhN59VwUsuR8CDV",
  "key14": "4zXqAqTwarrf9jEesNwhLRMSmVfYaCXLW9XpoDGSRKFWszRiX8AyAJDeJjwgMGAUzgJLMcNcGN9XEcXZCUVTT6bu",
  "key15": "Qzt7t67xnFBXHyU1sHend12v2H4eW4pSBVMr5FuLYDnLZH2b4tJ7nuQLRK8HeRwJ2tV71EqtwPik28xYHzio8pg",
  "key16": "5WJWJBMhnkviYKDWWGHCehMcRBEYPQVj3w2gnvx126a91wNdarHnsLbhF6nrH9E37GEGYda9Y1aRubFDwM5Bct9p",
  "key17": "5Kt7ftC3EASFAgzBCDxPgfoRC1sC43AmKgd31wVaVoM274SUfMSPJSsUf7b18LykKwFkmcfgwtyTLQ8MzK1tQPVH",
  "key18": "2sCxKZjmk9yqUR36puVP2KN9YqBoB8LXK33jPiEpWs2HgwX2Jf9AfLQ5ZFDHPZXJHkMMCwaJF7Bp5wCtzuHgKN44",
  "key19": "YhbXbZohPmGXCQ7VuRrnAGtQGkJZpmfBp8c9hP5gxKv8FAto299pRdWR85ncGGzTpApxCnXPwwjo88pxCAp3knJ",
  "key20": "2ftmhdLgaHMRMfzEGfxYcjf4E4Uvfm7oc3iw8S3ygfnHHvaMAyGWS6ezHfrBC6Ggp7keRqXjoraDd4c2i4sRz76X",
  "key21": "474AHKWM4dSYq5zwLRSXkBCLmkz9QGs1szPth6wA4DsXgE3wfK2E8Uksmdx5N6n8XrcM5B6e94WYRMTt2XcffUTd",
  "key22": "4hiCNmjgJPwB9QDuQtc98PXq81H2rtgbnBsWdgdDNwiMNFYx2Lmo7UU82UVdxLFZQQ5D2xfdbyq9yvZ2yfVGcnXZ",
  "key23": "43tqyDXPcmhZND6jSdr4Q4PGp45zpqXQMyXr9aRYYpDHxeScR4rx1ZXrCFuiaVBHq8egyXCL3X16iZGtzskPqzD2",
  "key24": "2bDKDKTE9zuj3XfXDHU1CARsZbfJfjypEUFobS9JYzVPDipJqy14Ch5yZY4Y2A4ZGCsTDmMURwgq6rzta2wx56Et",
  "key25": "3rsSFYBSy1PUEGBVXZFLVchQgSU5hqyR1CfV7VD36JaCvdoZ8cn8LbkYpRMKLoRz5aDPnzbppmLH5D19C7YNLQVP",
  "key26": "3cyinuvadTW61me6wWDYkfR3wtLnCmFHPQHtD2Dnsco8PpidqRbL2zATvYdzUmcfBkzXwRoTGd3Vi2THcGfi3oN",
  "key27": "22QuU2zzQkGa1ZmogGWcEvFm74xzQVDiMcitYsPRBME8ybo6DjNyd4hapdmSHnvZZGW6abYnakiMJUKLgo4NWpYv",
  "key28": "7tLiqSKA1jS9uZ4nhorwvcVe3dbR6bMjAU1SMExfRjqn63qn4ssF58EDBcz1oCESSQaLpA86GLTErnk7kzfLMbU",
  "key29": "4ugTaCnRqeXURVeXZZkAaWNNKdCXmdTDzyh9JeTH7F64W9ZbQ69SsYLpjYrrF1i1W4tRfBJoxLvdtT8sPQJhmsDi",
  "key30": "4bgwYEPkXncfGM74DXBygZeL6QHBB5S52Rm5E7CLT63BxTB93dRmgoHd7Za69sMQXCE5VehSb23dBesPHs2Pfbui"
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
