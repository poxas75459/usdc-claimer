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
    "YPtE4xs1QVFDmjQrqttaUjch3rBTq7VWRJ2g8nKcBXg8xLX3u6ATVRZKfkv29bpBTPXW749d55UAYtLto3T5Bko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWwkk9CVndMwzX7gh2oPfP4zD9pK62mkcmfnn97ceT5uGFL9RgM3Vi5fW5YTMqPh9RJipeySSnLti2crRCqDAiS",
  "key1": "3AeGs7h7t5j6wkJcvcUHBgKs56Ma7sGWwZ1BCepasUCdY3yamhbDVuD2gjb4JarBouyWb4cbu5gwEDfsTTcbbpqs",
  "key2": "26NhGp6roT4kW6oEgYgr6vS6RFWcaZoRJWiGHp1N5hKRah4ZyF1JJGrZizorpsa7gniLA557tUxY9C97hWULh7bf",
  "key3": "26WCjdPpDxYns2GieVswvpGPVYfQdcAwH7rG2g7taLQvL8HTQ6KvqWPnxF2xb3jxSgRwF1YLnYPKTuskapqL1pKH",
  "key4": "5hkbeznJ8rYjhys8L2UC7uUPR5SniScFcsUz2i7VL23bpCMrXwNCRZQsDYR1iD4X2dFTCCF5yU8CoYda49JsxNv",
  "key5": "3Zw3BnHqoHXkNrN5LqHQFbkontFfZoiQMD9daUYNuSWw25Mc9zLrMVbX54YenLf9hNT6yrCQKJ8y8vX1CNNrYkdf",
  "key6": "twv1BZDAh9SxHwNaAGgGcSDTPj2dhoZsBWsvQSquL4LJFVhn9sbY5NgRy8LWVeeSB9DHQxqwouoaexhmV7N8HCu",
  "key7": "4wsaFp3Brpbb9TJJgQ9k8LthYtJyNvL6ASAtqaxKRySUYWPeHMq614pB5tcRLw9PW9JrYHtYDXTxd8rhCApRXQak",
  "key8": "3dCzh1f6cktbq9EhVa9GGS1Sc32y3BmGvAeGHPA9FZ4kSQnVasbFjjo1WG7zw312bCLAVEsewLeT7qQdhXRhA9WJ",
  "key9": "5rz6zTQ4LByWsVSMNhajfUrannZ1Zy5G9yQ9eB1c4QNVAj5V6q1ffAq4UndrGrv1UPzFJdx3VkebUgwg1bVciwCN",
  "key10": "2wMKFKkHrn37E291dCYXJ2Ec6DkpfaRZTjCrBpFp2MjT8y6VKLpADt5rj7jQugkTiCB4DabTgtLDjhespcf2hECV",
  "key11": "5VaLR2zxMC2CFuAYtEz9hQywnD76PqvCJ3wyToaP8mtv4SQBK3oXo9YQ5y1iiZT79Enjib4f7Uv7ZFwtpoqZrWDv",
  "key12": "3BmfLV2xy5GZuZRFGCZmXabnMfcpLvW769qp72kx6jfVRH6qPbutzi5YxY2Dg4gbgMKTJmSwwLNKjmCSEjMs2nBc",
  "key13": "4wn9aQcSSh3tvTxW4jCnraajQpn2aQnh3Vt6LPkpkocKQCuAyefL8xfrppnnut95CgRpeE1dGeiZgUipXZmn5VDu",
  "key14": "8tkFN4nqsY85HUcRmhxayasTd68F9XwPv4BUmEBYUt7eWCGxQqNj28xbxRMcmmRpUZoXXH4K2r1Qu7dszahaofL",
  "key15": "ZBw73BBcv5vcGQVxYNmopaAv8USyjN9QtEhEB5Tj4sAJWZB5ev43BJQ9AtFMvSAiUSFuCCsaYJHyueovPpe2t3X",
  "key16": "2ZuQvzwo8bNZy2UJCD4MKPmY5iJKoXd9P8dkNDWPY7Jrk7YPvosUBmEjM8NW8XZUiGxwdbGJDaXTwBNrYve72qij",
  "key17": "iwMFsxWkGuC2MydE2SozwD1nEM6otqt1U8xSAqLT3YG4SdTXdFJjbkWGQ9Pnmw2w3y8hjvuNrxSn9r3xnnGoft1",
  "key18": "5mxKvhDMiywbsUjvwRJvpesJxyjaTYQ8yRn4rXa1eYqXsJRYZXuibhMAGCX7gnBCtDwQvkCumfKPUZxQJca534Cz",
  "key19": "66Qg7JS61opVE4YgsBMz4CGaJ4WrPLCYGGan7vRskK9movd6SPeDpG6Lc3YCXp1Mrp4H1dsvEw44EKnrPZXQ9MYQ",
  "key20": "5ubh5khJfqBvGpiFWA6E3ax26VifSjmQse1hrmKdUGPY1X6NkGGus571LLaeFWx1ZK6wmqwMrqQhr4tVkzz74Q5Z",
  "key21": "4rDXC3KET5wiXpDonnkzFDrJxF5rRbVqDSwdQoqg5JDmi6cr6CYCkw5hxXAzgLim22J9HKx8ccYUbnQiMyyCFH8x",
  "key22": "4Z5337b5HoCCnxA3vt2FhrinnaqS3bNYLescu2Kiqmor1bZtL7C7tdshVs8xHBcFMpRAt8JqTtvN8DN3RgSna6GX",
  "key23": "opCmepXCLAe8qBdAEDPcGo5xmYujoH84YVevP4hDmpgPjGNYpNvyCtRgMqRXKavVd6oEeTUKcFEF7n3mEoh3A5c",
  "key24": "63nGp4xyUuobZwEAgoXHffbw7zjunJq9fNGs7gZMDihRqhDcgvhXSiPYmRa5nioHgWYN2Xiswcjm56JagLien3NE",
  "key25": "2Xwn2BHoMagNFRFMzniW7rgX5gKJDYmmgAX8PpquhxQWniMdmDqQdHna1KHiX5d57Vd7hptcuCt9c4btNVjvDywz",
  "key26": "9EKaxFzNHVppScvFuBs7Qod7cpDsJABFnobmdcc4pta7MUqYWjdPUD7kCHLKCRKc6V76ZkF3c2cLrpohk3pTmpr",
  "key27": "8CEXGzFVPrpyW67zfyt9bwvPCyFhCCtW4HosBuj2Por4qMhMSGyxJbP1rRwQGJFSabjxR7DMLiyYry8nPGbBFJq",
  "key28": "KHLFk2vZRJ5tVjQGoH2BAnN2AyNStob28Tvx6VoBsfbgt52QFnL1ZE9i2bKdKdWP5BSsDoTUYymqM3dndcBL86V",
  "key29": "3L3gGEr7kFJ2GP1PVuCtu9RG5M4yiPZQD6zvh8PjdmVYzHwjr9yxa16RtUdR4DGH14ApexNs1iZh6XFo4Jom7dtf",
  "key30": "s43yK2QHFAYyQmLvSjLdA5uRsgTvGG4g6Pee65s3Bo4yxBLZS2zkBQC9fTpMfZuJyYca218v1y4xy2FRBrpCkpR",
  "key31": "3tbfQvkx5h6iX6yCLmLfaZ872bRTci98MihVcKT5JsWmtjZJDFefxk4yr2LHbNZAru4NHdWVYmTPDEUufZCLszMh",
  "key32": "dkN4HPxnF5CHDKniEPk13BQCjmpdoVGZLA3JZEbgxj6n5aBaQC4BZVJzT4ELeaUgiB99kEYvY2YZryZQJAW36EX",
  "key33": "2gaBBgu2zsPcWQyWTqzpuRk6YSfUZ7yG7iJnrtJCqmv393zbkGk5o2bCfv4bUcrmudaMD1DFoMeaSkciL48TS77v",
  "key34": "ZwirtHJ5W7GXiB9CgwADn4uFPCRNiLg3LJBWbd7JBSkrm9BotVkUq9RR3KTQ7oGo326TEC4anmBvTGw4kvUb2r9",
  "key35": "5chUBUyUNgKp57nZ3mLpyBbiKftBrZMcmUrN7qP1vYDprb8ZnFdARvC2wWSJzy1SzD33pY1Rxzz2RdyQcN1aMiuR",
  "key36": "5a7PzTKRkQtLVJDzEAasvyKJrFehL6c4RJc66rNfY656BBtVnd371BvkJripWoK412UYQ7wAsNAJU5ShAgX7Dyum",
  "key37": "2cN4C4cCUHs57CpcyewscFGJo2ZLU1UqDCifpoHaEpaPSKxN3iZqzso3FahaRL375414DixLg5VfrFhSzJqAsh5X",
  "key38": "5YL3wbFxLsSM83fKmEQgoBnmmUcKGuWH31kMGZLR81CPuXnM6oa1bxDkt3mL2gff1DpgNShtu17WQmDjAENUShgU",
  "key39": "597DnnHSxTAjbx8kCTLjZcDxnN4M4yhJDareAwN9Bk3afHHgMaQjZZ7K3UCgG3BKsCiKnMmKUFZcL5uLe6Y8T42E",
  "key40": "4NrYotwMa9yxDVHDyFuh3m3GvdudMS77Ytru88EEdFkV7cnCABd7LqYxLvaSr2QfpwiLoJpZDFom1MLtpPPbiozP",
  "key41": "5sc2JXD8JXDXmgiKnqMGhLQS5Jeu5z35oLbws6eVx5mRg9ARRWE37TJc19wWtP6HgwAz56eed1Aroy1d1innoaXu",
  "key42": "3g9ULezicveqj68ssHjp8TVDidHE4GWbVjUS5jChsXXczH3BXNdiVLaotTNVrLrj8WZ2RNRYAnfnnUeyBShEVkqg",
  "key43": "2ktJpw4YPX6rp9tKjnbenhK7VN2tAaHxE1zGFsjKbLsBcwR8x6wcDHdpeQgftxptUoNDPtbxaaDSVYWPsx417gwi",
  "key44": "G4kH43r4QmFSgBd8qcSfgpXK7KriNYk4bDmSUYufWbmKaJUvXGGM2AMLZMbmeNJJL4PLL9AZZGfGYtrGnqvDfzG",
  "key45": "3VN8jsVJ2aCBkDdNuvLwwUNeir1p9hf7Qf6uAAwTfj6X22Pu4BEZuRbFZSj7HVsxE6ksZNRNiAJunmB7eGHqxcQu",
  "key46": "4amqrzysYvPiV7GirGoXRoBS9QDojB4hdCxVZpZoxuyqrBvTQiGFuow1LmRnftSg257kwSBHUm4dgrvj7pwxka67",
  "key47": "VE8KDymjuVmaoeUfsgwvGfb3DnrHAZaexWK1RGhCGwnKU7PioAKBcDRh4ucT1jaXQByUY6RZxgenZQFu7SGMJDb",
  "key48": "3Dj6iq6183t3F4hHFiG34sCKJXyLymBAEckuKAuyPTBWFESpvnwpSU6AekDduaByiVFvghgKj7wKmXs6ZPkeCaSB"
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
