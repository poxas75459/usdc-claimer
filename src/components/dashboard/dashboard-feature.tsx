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
    "5xsfh8HHSXmdUotdXgmE1X64KMvpLhxmEyZN5iS5yVWEhNCUGWwSGxMFEweVaZceTinmhwGp5ZFT2GfEPiyzEjoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37m9ZQtrmTJcpj9fEddyu9SABwH5dRP5xCcsuXMY18MMa21ZzkT68eUVtB3Xpe1uVHYfSjF8P5cSkGzhrYf8oUc4",
  "key1": "62yfzvoykzENe8simQcxaXAfPUvc2PmZEjSA88ey539fZNcBRVJqx4pvZ6hcU2RoYJ1dT912gKF3CZYaxt332x6n",
  "key2": "45Jb2FjpY5PcwgCLWFXgYqwr2qbT8vvPQ6iSXh3Z13TcV7Ghe195c3koLutBemUMwnRZZJyNSeDcGQn46E1QCJHk",
  "key3": "2HiN33WZaGgyMaCt7WSVgdNNS9MueJ6cQ5V515sXNP6GAeQkZxp1Xz8d6JaFbmhsd7VdeA6vKoMZorN5tPMFP9Hq",
  "key4": "2h2ekpN276bX9Do7VB1WsGik3K5F87bcYPLUNmbsDmt18cbKfVvdmwVtGoVg77B3FSMDKpSGBFXUkX3HnbZXZYUk",
  "key5": "4q45qcseZwsXP6kHohb8jdmi1qqM4K8ysETKSkJ5xv3Eq1LqutoS4pHc1c9wXWiNTZWhco9VY9xZeTzVCNqDarzd",
  "key6": "314yfGxz81eXeZGc4Q6TvvxqTmxxBxm9Z3ZeqK7zn98QvJSiPfqKjyRfFfFZgwSBFEe7pGaqoCgjGPxpe46smqqG",
  "key7": "hoZri2PXa3RPgSazdiezcHvuoinp5r4ttMVK5GS2DmHbpVeSt7Ej7EjvUGyWECMJiHVFiwFFV3gNmX8QcZwuvky",
  "key8": "5vXR5x1iBVWWkwczGJmygk1Axtm82qwsDYHT549DMrAcnoWUNtHBD7a44S9w62fJ8F3UraPDUK12hdEFPFVPmFod",
  "key9": "2XptyEgxmj8bJADsQWNnMrPQ24TaKeCyFHHLLyv1N2XyfkxxU44RR9zQXoF7D1VAFNKsATNAYHjePpd4cy1epeSC",
  "key10": "2AGAGQoXG7DcbMkhpUPJRD5WKrxGMwNF9GxsL3feZ25DLS73GVLUUFBgDRswhmfW1NdNNmyoZmUPcfCpW6okgYT",
  "key11": "2juycnBgtJkuZysucDGNt7Pz8LdUjT6LKYcrK2Eu8k7nkjyeYAGaVSQBeok9zD4ZPVL6GuH17cyEqadnsXSnRvaP",
  "key12": "TCxfZVvZZJ7mPFXTCbbVBznKjxw5TqZ91ULsC8cGfxC4RCauNhziE7n1xKYsH2YsnuVdPb6BL7FDSZQhedmPmgP",
  "key13": "4g87Y8WoMcnuF1wS8H1TbwCD5Tzn7kgwjQhET5LqmV1hZCYVHveDeEe3BJoi9wqfaEVbifX1PKvEdXcFoqinZmVT",
  "key14": "5ZVT1tLjj5CY1vz3eX9kjM6zL3GBPfwGppQ1k4V7zfJXTVzVyecETAzcK7WcSj1L2GK2s5k9tDjXf1MxfsZgRXM5",
  "key15": "5qtbCFYQiCfY1CrmTSsQ2x3UpeVqbbaV5istGUcF9XAC2WfTkB332qSYVLJwUPmdqqTcEvhUXVqrYC8c1GKVBUG3",
  "key16": "3Mmn1GFpAouoEpFsFGkKGcZ4A1fJ35Tvsgwc4cBAwM5UK4qTmhgz7aX6WEaXbkMhc98DkWbHKDjdUZesRPYxo8SF",
  "key17": "3D7Q5Rr7CJk8vKinckTPanUAAHWFhLT2teBpxgi8fi2bpFBVu5rWnGKEcjQ8uc5NF2HJb8XZqdu2feGVGHgZAsgx",
  "key18": "3Su6apMpSjJLGWPNtVGqgoZQbpAt5yKjAJmSvxdkxia3HYW9S1VNMQAaCixq7p7cH8svd2dEVMT1vfY71BujTGk1",
  "key19": "Vzux7wxfTmpiAgd563jDeduscgyF826A3Vv2DyVW18nG1H9CVjJ8uknNB5fAPeJDcibhBBBW9gjoUVQCYJ6byza",
  "key20": "RoD4eaHR7TjYA7kWeLwpKGFovYbouLyLu426NXVLrPshHkEiUD3d6Un9f5REy7TVFD2vnJqtohZeu9VvGLD68VA",
  "key21": "3aoScT96JMoEhZgfRfCRcKVM6gYCSHCFAcJPtqtNTAfjZgfB9fcibCwwKpq4T9NjGorDPfg2B7p1sAXffqAeiucQ",
  "key22": "5orrSbzdtBxngy62QM71h48HKYqWr9ja8bdSM1ZuVTrDFV2YtyxrQeXneti1j7rTWfZrA8Yit3XbifFSDAWLShJj",
  "key23": "638eiUPfgLGnLbyfytUuBjYc5X3KrPkR7XoJoUSvSxGbvcNezhvpcN6wRU28JaFeb65TKKL6PYWaAxHmGeApEmK5",
  "key24": "wQ9QgnMGCbw7hGueRo8mgidhJQMw2WktGeAdFNJm5imTSZfPBhmF7Gr6HHFRAhzYsjL41pBN3pS2VnvDQkL5vn2",
  "key25": "2DcM1uz3dhWfAq7K3itAc2MgVBYToYnTtNUaJ1MTyvCx7PMgTMXU3XgoRe9Vb6ws6ju9Pyi4sMRRYyoczqCiRDBy",
  "key26": "4qQiL1FcyyxPknJpa2DehDe7NztS8TTqshchzevYDaCGoY8fg784v68ki6izjjwUcRsTndkEZ14oNmTiSGZ9RToA",
  "key27": "vWWDEuS3KNopmKLFfpFtB4DZF7SK82ycvTcXUXeeyWZxutSjctMebeLvb3jxidLFvSP9jjYqXY6R785mrKTwSsf",
  "key28": "4JwNj8DDaZpvdMsyWMoLD2QPVnQNRZUJ9PUF2nBkr8n2bNhkspSN9Dwa7VVo7aySLfY4TgXZEKTWQzfW3t93wUfk",
  "key29": "jrKj3PDzSnDB5Y51wXEfXqb8Gc7yMUzsQG4dqiKXbMXHjKXZPuA7NLb99Y9FwZYLZrNks9jdPqZHKJu9xBmciCm",
  "key30": "4iDaHqiyCdFvofEp4TujGgqWBB6iuxp9WmzzQSGJ1BothGCKnSUKwbjYVLYpam7uVaTF79WBDweUFzCMXq66vEiK",
  "key31": "oVNsbbxKdSN1tMEJnVcJF8BqkE8E23xEmrfi4kVL9mZdG22VYk3Xtjrpwtv5Tn8C5p4cdqhTrjAD5yWx7vJXRNR",
  "key32": "3uX8fgsDP96sDByoxrAXqHyvqPCacS7rRgEQ8aGS9jEQ9fE27WHqKyugFFXAwzxr7mSv7i549QLiwZdVQPxNNoaX",
  "key33": "2KgtqupRDtgnAuyuHjYPQB4413Xs8gwyrdPnWCRegbZD6PB9HXocp3B7hPNYBf9RZZr9EpJpwKgfZRQbi8wVMz1u",
  "key34": "3xmmG9nHBeBZBZJGhWg8D2QAHdvzLnMMn9wgmFVW5MQwqRrmSuDXorTe9nYurfpLrDz8BBEQno1SJTcBLhVDvtJv",
  "key35": "5UbDDiixc5GRtWZRkof44LzNDN6XBhAQ9n293spnvQKDR4py2NMMWhbgysMGu1xjoEfvozNbBqVbSWEJNtZdFXQq",
  "key36": "2e1Nm88YyJgYQrnNAH8gGxjnNpNRHU62VTgonjutpoxmaWW2NyCNMn6QK7gonVCaDdbgjpTwhXxaTJE4gFMD4WoS",
  "key37": "5Z3uhfNDjajF7Zphc6UY6bkMYMguHtr6i5zhpQDRrRdqEp8zLgAv4zWDDJCSBkXFSL17SWnjkdFhtxFxbSGcTNxA",
  "key38": "2tSMw1MNZp2eDcNiyt6xxiuW6o9nK3KbQwkCoZcSS6y5jYcwUuU3P1f77MG7A9k2Kz2RuGKQ57uyLYURE5CX2edm",
  "key39": "61jRtPJxEKepLppLFqeRRd9Jiq1R864xwSbqnn67PN4JdQmS3hfMhodw9DvDJsvorTSiwa8zpNcbg4rHjg2EEBSD",
  "key40": "4FcRQrebPwc4taAoytnJK94avGvyAsNgSKvg7F9eYGzwDzMJ7sM4uDKVSQQT2rV9CW6sSDcPBhmK4kgfkbkey4SU",
  "key41": "V3jpPsykybGtsZGJ5tW8DzR452mDP8yyw2wQ9pKpnpnypVgKUF2djqZsxSjJJ4uqFjfEwHTgU5WmrhQMKjT5dTe",
  "key42": "2fKAxhJkDmYh913WcCFt8Tu12XqAXUa2RsTgBnAdy12jUcuvVthrNSDdtuQvNnxCzJWJwq5S6ybPMyq5Xq6dXXsj",
  "key43": "2gS9ToquysW2vcMT2mHAbJ3TWVJRn5omDgyYhtpuULgEUGXsSRwuXs5fKqYPRYGMmgykjP4mPquPuPhV2KhvoWHR",
  "key44": "1dzSSuXuWdvq9JppyWA4rKGbGVjREyHPYZvKLeqxZEWN1xSUYpzzVRq2HaRxpcAxBjM8jwjhBTfyEUvBKQGQrWz",
  "key45": "3MmhB56MTQhCU1ACWZGzpPdktRBdEH1BjkeEEXvixYDQtUu6a9DqiqTxo1SALhNQhnLa3URHnUvn5wsGkNTfqjnz"
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
