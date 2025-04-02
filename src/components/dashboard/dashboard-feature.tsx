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
    "42sjsmW4URrcwdWz7wzrbzLXdnb4TaYBUF4cinuFphNoJqEWyGTF3FUhpbTsuP33JWbvKMrfJYNXp1jkS4HDtA81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MX9wH95t3zmJtU5yhoopGNoE7Yc596YgxsKNgED66YDW35nMfE4zCp6imApK2DpmXrvXiVxxTpPff6wtbhW8aat",
  "key1": "4BKGSNhhx7qxn4wAAxZm4R3QYJLNLPDp4g5nApqUUVyMqm5edc5SUBmCLJtKWiMbPQ8wtqTGrQrRYVNDU291nYCB",
  "key2": "5K1fPrJ9iZJgeMpCKr3AH9rVQ1CQmpN2AB1BzV9TtCfUztZfGJbHXQtNjyzjc4CKL8GPFTdyJnJhpdHV2S34fXFx",
  "key3": "3xWpsRxoaUhuGnQGXH2Zx6dxiy51YhTzJrGWkkjeE9xMjF6uTRJaWSpTfiBUzhm1cGEhRsFCkgCqDNjjRK6eCTXU",
  "key4": "2bBgWygzVxs156ySazxZJPg2F1bo9UaKsVKRKWLGt4qPDExkGNWugmfLmSZeAGgHvVoABvKRbp36D3j5KuyRXdoZ",
  "key5": "3n4G4ZMGh5ziv5QLm2YheWiRszd8oAuWoCcdkX2YiT3qTMGhjkz4zUgKD7iVXQZrCbZFfmcFS7BnxQoinwV7WKxE",
  "key6": "84bRz25aRL66CFaXMo99LoAddsBo1WQZExwkyhusntHGC72A1SUNTd8RhiqwRQasngqbc38D2Dj31N6SX4qivGB",
  "key7": "Fp3UM2NZN4y4g6g7RXRpDtCDgc85vCLQ1qX4SR3qE3FGTggFNo1yUjdCQA2Ws9SFasUJVxUhj9gi9TJmc2cEBpA",
  "key8": "6geKVSVm9fZCn9tXqxwDjgU8dpGHdrZygdRjRAuwWYLTDtcdbjAEUVpjo6SKT8YAKcF3VvA6jF6kAoEQfWheWFC",
  "key9": "3jwmNWjUj4LxhTmA2xUeuK88fg24g7zacbyv15DQQEmo9bvFmezpS889D836ACDdHqiaVw3dv4JhJvaif5GcSRyk",
  "key10": "4jn4q5wAhwGnmbAKyYQ6PU9w2K3DD2Q2jzY2XdL6EYcqsdr5FqYsm1J1hFMhaceQ3cXyDdMecohJNxtBJZhXdTdX",
  "key11": "5G3jyC3AYhLYxviVJKX4bARpswYerbrsvPzrMWc4uSSuv8TyT4rXZVAAMMcatdhXpt1crhsQSBmcEbHZMUQZ21qC",
  "key12": "4Ce8Cn3DdFmdCdHseZMKYsagGiVER7rBb5Dze8YAaY4T3hSyUmcN2BSySLnW7ZQJw8mQtRZccDmgWcuXQK8C2CMB",
  "key13": "4gK7DNEjZz4F2DeGaSnHfYMFZK7To8xYBuFUAsKDLicXi4aRCHehnG6GBzgZ4D6dBx5D1xa5cFuVsoK97o1JZfcA",
  "key14": "67acuwtoCkBftzxhGn6jRqjUd3LhLTVtQLWVn3KhnCPFyYPCKKQjnsytzohcVkPR6Y8cWaZUJs9pgaNyk7D481od",
  "key15": "2tFTm953bAahyVKHefoNDrBGfqymTgrRDqnPASTBs8CQJzoFJYT4T3mpqSPzjxUHAdp4uzU2irTv6WPP2P3fAZdn",
  "key16": "4Ucrhdu23WVoo2s76Ah56gMn3EcHuxrsDytdxy5BdK2mheueoKhwJVwFhgnFye25GRBPEZ4YEoFeb9oaPpLNoq2x",
  "key17": "25bzQSBsL2A5MrSum7su6RMjCLgG3EJx53jv5WH1SeJAQ9gtYapw5ax9dSAzDhXMai4G93YnyKLiS9WfxSSmTR6e",
  "key18": "578uqTLWHyNa9Crgsqfn6qbCZS57MJ9AcdupAc6euufbtjy1pckppvKn8Y4RyU5iN2CzF82tnA5LSywDu384fsDJ",
  "key19": "2qcnZ5JvpZL5fEyKMBSQAFrbmkoK57QxthNUdve7nLBXm7iykCTFXxpj8RMg7vAyvSnCv8JXPRjuTKHQX2cAN1WJ",
  "key20": "3PXopDN1qa2PsmMEMgv2So7ijgWxGEPRSQ2CATbkjmfBv8nEz9qt3x1gM2sJyWC82vWQokGkCnWh7WxgYC8GovoX",
  "key21": "4343fKKaXyDnHc1N8pV1tJ6wpPMG4uppjCX5BaSkTVtDreG26TqEVdewe5NVehDJssSJSBQXKG5JkUahDUcxw71g",
  "key22": "RE5JHXrDacePGmfu7cLW29MKHh9svQ6RGYc3QQXTM5r54PGDME9nrzhHiutYBCrysuUGvc9a98TFcAHXJurhkvW",
  "key23": "2EzFkBuqVZ9iT5XsNqXLGApnDM9H4pSCGArNd4fedj3YsbSJBVpdYX2r7KssJ4kYAbzRbnWfckyrKK2fuFtZsUMq",
  "key24": "53WaMZTUFMBJQ3vdVeHCh2VcFssDB4yCDXD2yzHtjhMvUHcCa9dvArPrr9WpM57TDZU7FQGW42uFyjCXKdqxPYYB",
  "key25": "4QEKxTAWHjwgtF7pRg4ehiMgNvaMDkZyLFddMGpvLSbMPPTASiDeaYGBq7V45GmUQk5ixRyG1uk4e8Fy4f6QGtd8",
  "key26": "41PxhHbAZwnLvdkfVeeWSwVDcFpVBEvA5dDxBPbCovadLwUL8mncN8N4M8F18pVciVkwh2Z9hrRZvPW4jCYCP1YC",
  "key27": "37G2HJQt25X44TQdfbPWg18ANjcVdWRWkJZAFT1u6MVyCUX2CJU29vb3RHYe61ZHo2PmF5dk5h5JnhCeixkgH9Lq",
  "key28": "44eeHtZq5QWA5TefjUDnbUAxHiCqGFTUHpvpuJMuLE9drxBcWXKVg85j5XPU2Kva1wTmEWaKxJNYE7PRsYqEJeBx",
  "key29": "4NvXZY42urDxTfeo7hpnCNFN5W7x4rMd8dRvHh5AkWPg7Pwjqy3ttcu1k86m7aqvPyydhpdtMy99RNMkZ37kWw5e",
  "key30": "pAn7fgHLiZE4sWrLn7xL2j2WP8GBsYsQSio336iEjvJAuPZUKB3XXyfczNtGt3N4e6GKssU6mG4A3bYbartpvir",
  "key31": "3MpJfVrjsjhQCza8KCCC1MwrA14dpoDgLuXAgkf4hRPQgcvaoahvVq1ir7zWDRjVCQBDbym27rYcqBXDrg8ZpWp3",
  "key32": "2JMp9mYti4SdGDpPUC5tffPVUZU5doB26brdK1WxZGETgaHX8PMo2PfnB95E93fBVW5HwrFgB8UQ9u2K3sbiwgNV",
  "key33": "2BMx9REaCxxyiTEycmMimv1qqQvxGBbAhRRNQw1vTLParXg6be1iDZK8tVnWWBpPvJUiA5nogsaNTBa93HyN1n9t",
  "key34": "2nxoB2Q74KFr3GDJE86PaBTMhbYy7VgykUKiJgozHavmZiUR3Ey8jLGhHSLHpg59pGkZtXitgfX4sq8R68xfrbHD",
  "key35": "4zjyNNA5GG1kTSV5JTWbGht1isGwkysgysvuBQZTMPY7Ai64tCrxNu2YPKJ5P6ctqV5b9mLs7yviyXFZAwt38Pry",
  "key36": "2eTuVbMhJSaFSWwSBpW3R6DVK6DR5LBvw2DgSW5BZVaweAisQY5oLRqvv8j5P8Am6DvxcNV9s5apXzbzDNFJ3q8E",
  "key37": "4SeXsWE9xQ7W561XUqzmoWQrAysQiSePGvFG2trH7CG5F2euzaFwbfitFauR8eiRCxMC3x9ogoc6MWEaX3PggA4P",
  "key38": "476vAWMZQsy4nx7rq4jWhY5UcR3STVTG2cJp7S6hYESn6GCs8KQwF5ZjpkTE2mA22BPHHT1LUHnxEmtnayHFP7bi",
  "key39": "5gWsJP4QaA6jzUcQ51yz2va63RRwHZPURjmrkJS6xM2uEaEEsZX1xpdrYgrPe6jz4zM2dKWneP4eBkLUB62HduSH",
  "key40": "mHCALNeUjgfSsC7Gn8qzttzG4uwSLgHYRfz9nnmC1U1bcWq8GFBuvogCnYfKZhCBfjX9p8J7zLoKoxVzsoajTGJ",
  "key41": "45f44nwxsnQh4uLcELmCqLuHWf9AsAAgY6Nj2UcUQF4hL7oWNayqMTaK5ZPWxEc1WQKakUMa1XKG4qCmWJ8nTKJa",
  "key42": "gBwo2RBoydHrJcHtxpANh4yPqgxBuS5FVTQ2oSLJeYpCFu8yS9isrx1WmgK41LsDkcXo2F4SpGW8w5wqFBBKxAh",
  "key43": "45z6KKX496XrxPeLpKkpsBDSR3LfxBakLweMoNGiEzonQd8zUoCibAhZiY1JU3prG452zgBJeorYKaZtkyUGcKtB",
  "key44": "2JvMagLy77xe4JUQHdLTipjZynqkUVDgExqhSejcfvFoazxxPZqZVTCW5ZaC8W8hPE5vvq17WNhYRi96ySLGF5m2",
  "key45": "7cvPCXbb14Q41wz73pjpyfQ3xdH1cFAR1EjXHca61M9iWSfE9hDP2gRF6Ai5HDU3qVtTu7UCEPLLkYhX6aLpa9t",
  "key46": "3R32EzYk8RoRyP7fkQtXMpSZjnNnCNQ13dwNXDsSmbToSfhQmEwpCXy2YBVQRVzmnG4MZ2SUeyQezSu6xMs7TaKB"
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
