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
    "5LDZSjJd4We4AyGCUb1geE4cKtmX2skejW9qHuRQGw3SnCUS6yd7mMPdsZ7oezJqoqFidvdYmrFX4dQWD8LvmuTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29mnkpYRU1eFiRP3TQF3G4b5k4jZH6DQ3KvQjA9HJZbcFhwLFZAjxDnB5Qs48pMe3fto9AnGHRUz8ygBRvdp7KSd",
  "key1": "LE8Ep1KKQqpEtdjq8rb95H2yftF2ZLkdpVPXWkuo1PcPp3AAG7hGc696k3F4cYtHdzSdUMz2CfZ7KZQkkhRmgDt",
  "key2": "gb6ycH2FAdhZnoQkyQPyBYTY6nPi9E4Do6JbhjE1eg1uWkDJApKw83HYg859CLeykAdbxCfCZe3mYC5CkvpuNSv",
  "key3": "3PkC5ohQwcPEhyamWEYCRiSN8kJJMjxGJX4bqQsMAoWb6WeWzvPPCPdEjWF3xtHJyaeRrSeU37UxDu6zy5giKmFa",
  "key4": "5RgQPRsF4zkzzHZc4H9T5hwtT8qfQKXSTKE61q4NyfniMXN4eVBBdFCWHm9NZQjbcHA4QGHbk5vnSG5cXmhJuZwD",
  "key5": "5vKZMjZuUDe3zE3fMYWUsXjs7JR61BE4eVtFU87owhoySoV49BXzWJSyyzCmNdXBbNw6ZxMe8htuLRFzYM3R3yKW",
  "key6": "mxGa2UikXHHsmB47dtnFqmqkQrKuMfV6rnxwcsDYThULwnUJ2NEFx6aH2ib5adpPQBVExHVdXizc4pn4vf7pGfE",
  "key7": "2jAQ8TBgwKReGEYxsV94f391LaH9sPLvwzJBTtSb2AeTFKx7A4uL5mng7maLTFGHPZvZGQTCR5uBZ7tMtYxHDMfF",
  "key8": "2EZNSVz2K7Q9PPxSn2BmMyAYJ1vAExffrzLttRt26CMB6XNffjPSSJLftbN8khvmto4KV8RxSYqGZDNgHGXfb5FX",
  "key9": "3XcabiAi3wG2DxsdHjCQX3xiTDeQGZzMwtjBXtECz5iAEaFbnbqxrfncfGCYidUY5h7atZY1HJJyESo7ASvnjTqo",
  "key10": "PAEp6n4UpkWeaibrSxqqb1ndoTh8fVaHcfS19MwtTJfuMova2drvfS6zSoGW47qVEqUiFLdb5Af38zTBDSn3ShG",
  "key11": "2xz251eyKTg6MgkC9TgWD4ULQAQSX9ZEnPS3Aecvemtca18iqEfqweMBrTiUXfYvwLGhTThQRiDhXqaD5QFZP2p1",
  "key12": "bo395z5BjWBoJfjUPCFf49Q3dGNoPQ7ApUT53jLhWGzWbgzJpVtiZ2EPBQKFXY9JJH5CGwoWYH377QeH3qDq1M7",
  "key13": "2KYVmTTjBjUhtAebmX7ZsiA3pMbwqRfgYrsfyAkx8Q84s4gQUPcUMDsVXi8aJ4Byu8tAQ5rGodpBdfBVvDcpsodM",
  "key14": "3zDx4QpJG28CqNkRJw1nDzXpSRVzJyhW1pt9yRicoGtipLHiSxLgAjqh4rDDnPq9ipQnVaYduyUpGiSHVZc42Yzb",
  "key15": "5jQgy3z2qtcu7GqZg3GDd1MxitckBhKufP8nazkkKTGdQvEmoc1SNszJJq5xWNqRjkTvpuhB6W3Tc6wA8FZpkq8",
  "key16": "4bPQhpxehW4co1E7DHJ1oha3x2cVXb2fJssVMSYUVJo7g15PYLdmKcBHZhufoJ7vwarpxgNAP4Tksqb6sZ3APsH7",
  "key17": "2okaupbJcqwyv8AMYRaYvSEm3vxHBz9emEPqJC8QXYEfq3NR2qqdaRY5U4LZ1WHTpcDVtjfDVMuppX8Q6yLMNNy3",
  "key18": "4j5jzYuZ7xxni2jJhU6vTrbXAwtDDYQP8Nik8SCruLPh9xAqcWBvRqo2iWJTP7DivHP1AshvNtasdAYP6reqW5dq",
  "key19": "iyxB6iJJ48YRwYD7GKeFsUsv7SXcbY9NcD9kuUHtNPBFesfpWVnTcS1HPgiG8hj1wvJCZPiisMLSzkAjTsSYCz5",
  "key20": "5wwabRHVwAaHSL38hW4Ruz4URPxoJW9Y88V3YhTSQz2k1tMS2HMfA1Z75xS14aPJPsdngVMBNTyTVcG1kXRkJLQW",
  "key21": "2aKwqAw9LxDAMHSMTFjt5aMgfPMm4UQy9ftWKoNpg4BnBNYT2TxtTbNZnG25omK9gtPCTYbhtrphA48tLUXuFf8n",
  "key22": "2PgoR6vsDVUxPYKqN2vdb7GUNeVcexUXyPmCcNsJTyjn7xnrqFSyUhAWUrYStU7vQje3ciKwbE5s3FN7RrTGkUUp",
  "key23": "442xTpUZX4qqtc4P1Qyb65CAUT3trMDHifQoD67mjky11Eh2iYujikNEB8ATjEWg7KWLSsFKrkLdbY4RnqbVTNum",
  "key24": "2vpokbH7Tjkg1dXfy2iM3aaf3qxfSMAhnxzQu4s3Z5y9pS9R71Ye2LGFTQzwYmxAh3FPD4fp4vcCbSkFEJptKBrN",
  "key25": "5pBt1jupQBNE5NjahC3Me8NYgcqp9EyWrs2LS9Auf8BA8PEGfPsoRT9d32kAM8ssHmwjfhg7RFZbwqqi6DXV24x8",
  "key26": "5MrPvVg4f3BY8Rrj4nGHSboyqCdLYxxUD9vnd3DgzYLeghqoaFm1QweqTVGuTUNDstDgj4xkn2wAacFGRWAzoyHX",
  "key27": "2rSJvKkQEeyG3NTPDnaxKHeh3hjiCpCSan1LnWm2GyGfgyevHstcEn7ecpuY5zjz3zhTP6dnGgRCrsT3uSs3oQ2S",
  "key28": "AXDUqQt6vDmDowLJS3EatugwUviZyvXqHJkk3qcaPgJJE4PYo1yHUEJdaTk2f62ZgcZcFT6Fw7MVTyT3YteGZiz",
  "key29": "31XLYGaVGCqYG4R5uhHTBeJqVHKngfRdSABafxJDvb8MsSyyN8nha95XT1hYZNr9qBWLdsksmhk1vJEj9jfaV7G",
  "key30": "3EcExqyPgfkdgPk9525i3EBamHi7cZ83zVKsVggE7xkfkuVdTeedsfwtAQCEZgeKo9Y8dhqsyA2oojXegZTqZ5J5",
  "key31": "2zBcqFJw5QgTQJU4jXBFawtQRCLDKEx5aZyjeRBKyqMK6z7MReK5jUzyid5gmF16a8VuSX62Wh3ak4bcBMLbbKpG",
  "key32": "dUMjdTysxboZUKpCN1vsibGWDkEwDoBGBCuiJAoSxtQhD22DJHaX8euNgGdcaMVjV9F3yxEqVC3sG6vLiu84jAg",
  "key33": "267aJihMBVToKdNEQYxZpC1Cq5Skm9YNZbabWwnphxJe4psBNsoUcF3tE6Xzx2gfVxFMqFyLm5AVbv65UVVR9Ttf",
  "key34": "9TqmZ5QE3sHkG9rKDE7KfLLuSY12LnQ2gHc3VBGzvURjZiYkPiJZ4TnQVLhv8ug53SNfpSmtBC9CPJH2iUHKsJE",
  "key35": "3WvkbBXsCSGSVV2xNzawC6KebkF4ntVXp68B5eUZUg2Fxyo6CjNzj9Q8zADp7myUj2E7E1CJFH3Kfd5cWy8LQi9M",
  "key36": "Wd3s5Pa846R8HkYACSyF5Yd9ifLzjcykdidWBjLsc5YXXkkc9KvE9BhtTiGWBUZ6ekmSPKBytmxaMBf6rEfa3C6",
  "key37": "32Fa5P4f4fSKD4ou618WSSWYAEBSbtpiuWD2R6Zu6GYdRdHCLrVYDG4EBeFieX2SjPuFDLLiRnJZ2gq4qQLuUuZL",
  "key38": "4pKfAh1BEqDqVZ4ytBRazfdGUuMWhXaf9qiwe5Sm6xfY1gf7Z3jYyZvkH7Gwh9oxtv9C9p7z74joM3c4rQUmXaxH"
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
