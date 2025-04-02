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
    "2e21EGUX8WyzyQkgZuTMdZF84EZw6qJnThcAaQNN8MhGk5UMdC9Hy8EicWmUcGhhtL91J5Ytwy1fC1mdBhRQWfbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M56bfZJLVD8YPe9huRcjaFeje6vBdygYQ6pHrgJ8z7CdMKJXrRQN1PNzwRZAskHhD4dVdPCnFRcQqgqyQFwRxCv",
  "key1": "5L2zcA8rt1SZTm3nHp1MKiL7hsJkMiPaUiFHHQRrKUsy222pxHREir8npuZxtLLuqNziAUtANZtpEA3HgYPdwSYH",
  "key2": "4X2z1PKwUfVqyeHkPgyY3kf75DFov9Bd5wpiN4jtbdEvpp4u4sXytw4zHzpxMXmiA38776W521LFAMbn65j2Lxn",
  "key3": "5Ui6t8NN85ARTxkx87rDr5fXjxkorLHWcjPF8JhypBmnbK2L9HwKhRx4AhLQq7bPo5hEu1tfuPCEWs41sXT8B4Z1",
  "key4": "3HbuQX6MJvWuMepzQGwwgrm2K1cGmNL4fji774mp9x8qXszUii2Kwb5stUJeChiUoFYmWrzoV4PxWNtVaw9dWTGM",
  "key5": "4UWoM36XWxmBqUCuNfFvGinijqWdAgwJdJLnCvMVaPZjoXhTir3z7a4WBVepwZe7kbLcDjTQnXSRA61HY1xX4acZ",
  "key6": "21MAKFUj8H6oUddjeB9KLbUYEN1eox15AA6QKwhJYjspsCRwRGEihqBP35Eyvp4BQRfSWBR9oShUxkH75txLnUzr",
  "key7": "3aTp6yBUVcRP22z6LczTfBNvkXvAFsQqkpqRCS9xx7PoycHsJMKzRPHpcBT3o3Kd2d6NU7r2bXDAcUJYGDhS5VWL",
  "key8": "57MPir6nhSv2RKYm1cyPCVEiQDF3j6kmtCnH2ZyvQBwzntHPZiVYYm3myh5gbfCRo3GyrnyL5719xb5npt6cM1Mw",
  "key9": "guT3ofgUKX6ajUGr5ZaUfFciSkkiPLccTh7isyF8gBSXAHAemttnH82NB8DnPEuu1Nyo42FA5UXGphyvBjcHkQ9",
  "key10": "4E9WRRtrotzmWutxao6bVXGpcTgZ4cesP33D1AaBUSA1qx5pCLKyeK8E2pkSCxQD1gJ6AU6qZzC83CpYScVeX7Bw",
  "key11": "4YVBYFjSw7EQwAAjKjbkv77ZtoWBMftCKDLgSFvb2rtuyUdGZZTgpCp1uDrHb2HmeaU1Y3NzFDpZ6gKrziuJKefo",
  "key12": "2ZJo7A2Ha4QntfLrsmaNA4MUW9gYz3NJN94MKRdVLioD6hMxwGndxMwnBufiT1A1WCckPwvSzf2o4soCybn94WR3",
  "key13": "5h67PWNxcGqjiq9z8AgEDV3DDW4EZjNHqT2yoapeo8JguPm85o3sCwtYQfkkEJwCqbzTR9EF3xXVAkDSVkFxEAAM",
  "key14": "5GN3SQYgVmyQiF6EqDop1jC1QTZbHKyHzwh3kDeR9nAe3XSnSy2wxhsN1BKr6qGtrrwmfXznMNTmxU4PYM5o7Ym1",
  "key15": "3bKqYFkiuiJBq5KTiDjuvYHfnK1CBb4YztoAWQt87hgQXfzbd2bwX9HajdWDcG2wAuuXrQb8gBRpJkhvwSy4b3qD",
  "key16": "5Ri3ABrcbKMyGjsf43w9sR6XfReEShzQjZNwGCaWUZj1kTC6RvfZMR4E23jK3Pk1T99ytv7YsZQDSa8PQsUha1C7",
  "key17": "5SL1zsibzG4AqmE11VY3VERD8HFErn672fbQuYP2Y5rMRgaqqZCJBp4iSbae82y29A5nwp5JAE2qBZnncESDWqtj",
  "key18": "21gohyLEgSy93Cnqwe6AX8m1vcPo1NNSC1RuwAihwd8WLJJtY34LVT4KbPYBCVs4PgL47UXsxAAXQf1LaN6QGMTZ",
  "key19": "4JyVeXWnNwWFNAw2naorjWUMHBFD9Ej4ytiaMP3Ue7HdDxooEp6mN9QprFqaRT9HNaGzszbScvX154oESAkQrRxw",
  "key20": "2Zj92sFCRf1LRHGm8NGoMRt64YXWQwEFRe9QSpgB9gSqKxTLRGSX6zgNpkz9LqGtKNzeLxDxJqZnBqYbujykm2b8",
  "key21": "27vHgNvxRVZWqg1vQPmb3Wz7Bk8RaSFSE69fhA739hx64bVZ1KrbWwsyip95SxdJdU4j2d3u9j7BvR6Trdeib1Qg",
  "key22": "3bd9xnzpYXZectjJXzfiGnXKb1aimHF3s2C1k8aFy7DcTgp97qCStr7FSP7zrpFXJf19qAn9J54KmYgubHvbt7uX",
  "key23": "2MRECDJo2U2Xa8cc4RjEqdPetHXt5rfkTuS62UF2x1mfoukyythjnF3JKiZuUbjUyAc1aWSwh6y4RN2cUfU18b1B",
  "key24": "5Rgikg9BkKXLeYQ61bzZqQa1dGXbfcv6sWFbnrqnmweirZsdfMTLNYv3HPuaoQ7dNe7PUu98FpJNRifjqKEUG7S7",
  "key25": "7Q95n1ryzanok688a7DbfKGYvzsi72wXWVoNiHs343v35HZ6yhFbNbShD1e7VjHwjDQLCMEHWHhSAkye8YxnoEr",
  "key26": "4GpdLqzfMkqVi9MV2vVJPkaJrcc9GGEiW8C6akmcwKzwCNbR26XEp5FMuVJHAKsuEvACPS8i7v2H1FEytTFJqBe2",
  "key27": "2Bb8CB9TmM2u8sFpSWA9yWygKj32mAn8GAmR6TW3mWfpLkPHEeSDYhXwMHqnUyePQLd9VWGFtgJFVpdZF2o9vTjV",
  "key28": "58M2y22cunZgqZA4UJ9c4HevyiFVVEr5Jz34qa3YEvUjXGrmYo44crAd1sArNuQTTZGVCui7Pboh2E86qSLT7MZ4",
  "key29": "48LWVY1c5p1qL25ixkZYT4xS8y5r4aGJHC7KhEGj56QStuwnUh3BcH9nwF3B8VdwofFXxfuhENYhAC7d2Qeu9ZSi",
  "key30": "4zUAyorEsCffkNdZrEbswVT9kFLcPbdpvUcFEr9ftAMyYKBNfGBNQjMFtzhHG8nCo6H2JmWyMhBLpuDH1NjvgLU1",
  "key31": "3MW66BJmfnfUDRMPvbeHCDk2USixNaa6WM1Hdbf4nB69KpEHWkRZ9otWQ9nwWneVzFBTzsdq4sePVjWcocg9H24P",
  "key32": "4PQ9UcHeXCKo6146yNSYPbxEpcYb36ocMWVXkH15QAwe7h5VR1eaMDqCCd3fq6G3XnXH6C6HxAKbTeo4fwiqLzZ4",
  "key33": "4Yi23ffQPR9vP6V5tPCrpanuuHnMezQZN5TpnouLBeTHHcwss8ZP1USz3MYb3meKqY96xf46yXoqw7zgZNgvpFLy",
  "key34": "4avWSBMjzbTx9sGQ7vev3WWMV9FGE79H7t5DEEJTi2tHsTPmXu6EZx8tz5YMb196x6Y9nrrar9gJewUVSUkyYcyB",
  "key35": "4gLXdDPguKn276KXMsfDCf5E2BdwNPtzdpRhqL89j2fP5FnsKQe375xbrmERAeDXfSrxiJrzggbUqAZE6KEcyLu2",
  "key36": "5ieeNTcYBwNCk6WTLsEhcGvQns465XLZ12nQ2paPRtz86xAyB9cRFsonfkdQaP1QQ8KjBq4RYjVxgmPr2KZ1CJd6",
  "key37": "5jzmxkJdd66TTVV9FzEWDKzHXEr1vnHzp1D5XvJY31fPhJ9eu326cCGT7wFQyxp5NgUrZnrfDhi7B382zbRem1im",
  "key38": "3QfUroEU9kgNAxi1rMLBNQ86g2DHgMAQPxAbvysnfKxHsT8otJWYEVZjb18XG4uBiiqc2Sjt5V8HVCsw81F4o2xW",
  "key39": "4H2XN4QwjMX8NEz8gjophwV2UBkBkubJd5G5NchJKuMufXwzcBVu1f5dfUXaUxS2RTNQUAqZzJvnpjUmW2Gwrq52",
  "key40": "2aGZdXCZJSbmaeVXy7jZixQDzWEv4wynzSmPAJspdc5AVUwzz4XagwqnxB49UPfPe2hsAw1X77UrfUnt52w6nykX",
  "key41": "39F7tmRwSVd4o8wiPrrFmuaCmfVB8SGxyoE5AhLTRLpwvgCpFzryM8WL5otnPPhD6Mvtjn7HiMdRpjgzy3LMHqnm",
  "key42": "yndgixkH8RJJmSSggSRzcLiUF4uQwdASKFpn3YQHCPC5ChgkcVY5wZRP5Z4tcpXBejF3a9StZX8KpPBruc49bZd"
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
