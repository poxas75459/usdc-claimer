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
    "4EvaaWiDvzC8FxZRAfVGWhHFQ31mKMhjTMcky8NBR4zye6S48SU56mkDyHNc4fb9Vp8AdUFXw63esNWPqu5rbWGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ucppZ3qRUdqAvEnsBFPdSr4XhU6S1rm3wuwfs3WmCvjKcJhrfQZ6Rijs6FrSWwrHmMN8BPSGwaCSEsrfsbDjzq",
  "key1": "cUrWRin1Anrwopeyb7u9KwYn33az18W51fYpawW1iH8P7aHgTrsrn4yvpbeAi7WEXkfP8v5t2bTVxykKehpffCh",
  "key2": "29eKL2TYdwsqwAr5YukLcdZaoSSfFPsMfHW1zEUS7nJRrQFXf3rnWwtxfdY68cVmbM8R5XhzvAsMTT4RNrXtB5ke",
  "key3": "3aqUr3oeVgfAzWAsNMY5JvbJ8EKMhHq8XXn1Ja1A5otWAKoWKMD1FsT31zJYineDeZSenx9RpsGCuMkkzEP82H7W",
  "key4": "5EWCCaruAoA8iqrwHg9Hp4GWmcjAnBjjLCAmCxaxjm93R8S5x5Q6ac9DFtvUhpTyszVbE3EVCsGez5v8faXLJyT1",
  "key5": "58qD5CeYMyNwJhJQDyaWfo43QNUncZYCk3a97EJ7QXCg4ZCrAn8evAVGpzEErNjW2KNJr5hfbgWVeFNDcn4y2AXg",
  "key6": "5WTbjZpMaZRYPPiF4xhi52DDNf6CDXFizcXYHCo7noskaLBacUJXXUxTdsp74LDCSdaXNDe2a46G23GsurxVstba",
  "key7": "2AqNg5SjbNLBM1CcDVLegL7EuETs1upkUHFh6ERVgGXxyVhVM85dbphe5MSFahQdEDWaX4KpM9MeHz6QD8UFF3zg",
  "key8": "45JTYGN7itMzxMypMphfTfx4owXubJF3F44kT2oaCYSPCuKEg2A2buX27E5b3NDUqFEBBibjDZUFhErxmjbeJZqV",
  "key9": "3np1iL5Dqz5JFrXbUU16w7Ly3ABrvp6BbAWg2ydHHPo3iMJ8bXpWGiguuDjehNHM2egdAfvrfnkb4kxHXS8gEsdb",
  "key10": "4srasyXyh3TBY95uGbh3cfL1A875KqddGowPs3vPBf8DAqWyCeT3MTCfmE9T2bnvm6mZStUd79etGmHmf2t4c1ed",
  "key11": "2TAzjqLb44iR3TdbkZkCD4FdGsK8dfgMbKqP3wMh7C2FmLFBDy8tfkiYDiTfSSxwmoaxL4QTvKXEyWiwSxaAC4G5",
  "key12": "3vijgCabLw335uYBoyhHpxNoFsBPKJjnxyDqEmoVmHHFr6oPf2227pAvTDEcx6pynRTwmnjup5zJAcf3LgXoWABG",
  "key13": "4L8hXcs66NE8YnQwsSgDJdteFRA7UuWqg1iRaR33acyjFe4EinDdHwxKq2VK93TkNhq8LBA9ajBeUT9yXk3PYwsY",
  "key14": "5EZLp5ZBHHDNwpv3wLv7GkbUNnjiJTRQYGWqxg4TYP9EjCYhGchAiyiT92p9mMEPj2CSoncd1Y51yeVPSxC7CuMb",
  "key15": "2r3w3iCFCvF32MY1JUzqNaQr9a54UzUY6eX5hJc6wibaooro9U9NG24dT6BH6wbaLGfCGUULNzcP9CKRcTxrmZ1Y",
  "key16": "3xKtXf882fnsUtpQF9u2KKSyGConGMpnxDCzDBKY5jdmLLJQqjfQsDo9uc4Q98W4gCmFXkCKtkbXASRXXc8vqWCq",
  "key17": "2Eg7M5DcQoSuh48xoNUxgrZXxFFuVb74HjKxgwtQC1Z44eRcxt4mY9ehuNx9SsoXVYtXDKbYYjaXApKFRDn65HFu",
  "key18": "4x9kvh7xbtNc9GkrxnyDp6t5uNPvnZsputjfkZjysDxGixfkSosWq8sz17QJuqwpf9TfiuaacBGCXXpyfFE87RrR",
  "key19": "4AncTnvFhH3NLnPkZd6Rjj8JhqSdbWadJqvMU16jZKCnsrmJWyKdSiyUJ16AEVxtNUAQKPgE1LxSL5eJNFkdKpCi",
  "key20": "2b8UBA1rTUwGCwCR53Cd239514DCVaANxwYMUZrB4GBtkoorq5VGDNi8qDSS7M1Vp6BR3q9GoAeGkh1PYvdZTMTF",
  "key21": "4hSUwmxTT7nVofiCi36AtW26pUaCpAPMPqRrLoDtkPdQAjoC7Pr8mhB2AywddpbaDNJsUhqm7UtBPhKERhoGjAtb",
  "key22": "3sd5EwTMwqVrp44x1se1g7qr51Ve6pBEzjapdFTppouXvD341iWDkXKCKGhjjriwd3mRZSe3hzDmtrYgyFwh5ap1",
  "key23": "4kH9oXyW7y8WQPhys2jV2mhCxh9WnSoiFh1BFyFGhKGDp5HibCmcxg8yVPtvmEDgwKaUC3F3S3MML5LdeVcahS2T",
  "key24": "5Rg88bWUEsXtqGWyEERg6QP65PiS6EmabbjgoVTv6RqB1UpCApxL4RsB7LTE1hwVwqeRX3E76YibwRJvHHFvHU2P",
  "key25": "apiS7ct1tjo5rm9w7pJx5QpQZ15HhJDuz8p8QjNqNSC9eAdQ8oQBwb54TFaT7drGgPf98gixaKyCNLCghanQQEw",
  "key26": "4DsDeArx5BN1bpYZNcKVruFXXSW9knQhFc4UFrY76ZWem4k98Ebfmk3FC6p7kp59Unn4TtEtsp9psB2iXXHCD8ga",
  "key27": "NUS9q4dTLx8MWRV9Rs5SigigJJX9HevvB9LTx7WmFJ5neXx7joSg54iWGjE9EwbSwH2bbeWdRQUwZQj6U8zZFus",
  "key28": "4uBRPKvoo65SdXcAHVo3gBLWeZSckmxTPxy4tiQhozy38bFMh1va8ZQK5yPGykSXnvwHr9Lxh3V6uwLrcPHeHGnL",
  "key29": "5Y5yKeBrqkbFyh3NQEsv38wmzNGLcRTxndMF9KPBMZxZ7ZmT6z4VPDXdJnCn1aRmKK8GYumu5g5xqSK3ubdGHU3e",
  "key30": "2e8CpUs5juLDXkK5pwCE1QkYD5sVxLVD9jfcttWykj3RnzKvS6fDBAGeeuCKxLWw9QYVeBKCSWwLGx7mWYMvEPVh",
  "key31": "48dLjhpyZzXL72vqRCSr2H1HuyXeZ4yo5zgyFyJVgjZZRo3yXKAt17h1LRe2KJboPMHwrTcQbpnqgT7TQWiyVhLm",
  "key32": "5q9fb2AxiLBsDj9h5Vrvy1CQV1L9maVNjRMHokfhS24twHXhFCYq2CdhN6cTfkHLz5famQmXaWYphfEurCBtNMxo",
  "key33": "2rTsSbaVfC9w1Zpa38dzMibdeuZcM9uCJWAW65223bJqsAqNE2ZE21j8G4UvbZVUQnHrY1noeymFZN8AN2UhWswN",
  "key34": "2ykwkXH83Snz4UjsHmoNfkvFsurrCCsHs83CcDybwjzoB4RV1h7k3iGP2GQt7S4tpVKBADSpDbbVWt3JXisFXKFF",
  "key35": "2zCsPCcpJuJY98shUjN26KhdoQBkY1AXafTaFJqhFrYCm6RnCUufn5spgpaWtjJmGaaCb7TsU6BAocWrCVzq5Sz2",
  "key36": "tNYyh1p9cvAGvgrRgDUJSSdNofhaajKxN3ZfyW2e96XjKtCfS6dZqgW773dicTz7wnUMD2LAZEs7RBDvQnC67DA",
  "key37": "39BW4wZQVVUzD3BzsYbAofgSakt7ES2XAB8p3PWw2XY16dkQKgemibPVdSaRxkW5fQdLn7fUmtAmpFduX4REzCua",
  "key38": "4b1TNQb3KvHR9SGG7643rvcho6H57f82cmc6JhbMfC3Jfz119aiQGWCuncvQxTCbwtnmeBziCQfknw7haYWMjEH8",
  "key39": "2uBfo1FYewRH83aWmKXv6fiLzAinfRBx1AeyHoEfUicPN5wTdtqPMmjtgWyY1edXi4kuovBvUKtct2JQ9gCg4BJC",
  "key40": "phJY6wZ7j8yqpkpYFJuCxhRoTekCe4BtJkce1kgx2BxtGBuhTUwyfbwAzvvJJEBn7Ug83SUMeb2EHHNBL69NqCq",
  "key41": "2ENDpptkyCz8JuBnF2pJbohvtgVAFLiMQQGHd3mFG7yKCUmnpAbb1Xcyx9JAJX1LwaRkGZ8hUHzCBPQmaXokx2ww",
  "key42": "ZGsmZdehJm69hwGNjz6PgzCn3pyP8SJYbuVawZ7jFw9PPbNEWBwdF8N9pMHbtCVGLUj9E8ezRoa5a5JVftUXrjX",
  "key43": "2AiztMAa4qjda4PPCmw7PqV1rauUEJwE3DWadBKGJ76TJvUAj8kEa3vpniKtVLH6UivUavdZ2LPC1eGaivs897sn"
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
