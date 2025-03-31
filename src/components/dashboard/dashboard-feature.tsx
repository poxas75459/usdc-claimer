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
    "5kM6x4LfQR5ihTUJEx5jxEbxZXQZBMkhcK4MK5ZAn5AeZoM5rHU8gnrgUAJZ7BPcGqDbfqTyw8DcxThDa4ix2Q7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxAVG1ecmsMwDHfU4R5MandiE21kRa3mcQqa6Zv7zA98h3Hz4TUtHrQXepRmcouYSf7MR7suUt9aMDCMC41oVuU",
  "key1": "4WdLBHUf9A3ZAmFrMjkZM9bfXvz6fAWFYSgEDytoGy8umBbsWsdfQ7UcgSUpugnVcNkeDwBLCRuntJ9TtvnLKW6r",
  "key2": "2tGxTRDiBBbj3D5zENwGUkwLsPTK9aREtrBJ9yU7mJqnzS9FLNZhQCykYm6hDTt2sSrTe24q2Q3xw8u9ADxZgCud",
  "key3": "CrwpGRYSU6aD3KC1L46mNKp8Yc6KTPPhNckmEgFNZfsRQtYA52fDKysiGHsSuzBdDPX5318yDkgpQSNH2CySWfu",
  "key4": "GkE67K6Jmu1ExUJqF9xkTfaFWZ2ycFjuyeAcnvz1TkNFo7QTu5skcX6JTjK49UaxX8GDx6ChKAPDuzbSL2pcU6s",
  "key5": "47eShfEzxcztvChmMCKgSg6Cu9DA8VNbTpN7E6bwMU3Q3k342htnXhNXyu78N8PU5FdJmmSLDX6PpCixFstvMsvQ",
  "key6": "5ykx8aJ8gFt5n4szH9aa2h8Ps2bmoybXrqfwTxm9bj1SrsRTkQGe4byCrxtVKsBPjy3dPKmjJvTy9j6APrrMQRNL",
  "key7": "4ppQuGVH1riiQNXjG9iUpXKo3za3ynAAmStfmsGjRvsxQb3izGMQWX88ToNP53L6G1ok5HcQqUV7k6nXNSAa4dAg",
  "key8": "VWr3USgxH673fsQwkf4fNZ7N1aGX3ZNJCUvx5NQDd7WcvVzAAQW58MLRJyUhzBMPruM7wKnyy44jHf1GqqtP7FV",
  "key9": "2qF6gY3AuoFdvjn2Y9PXqCAnVkSw8U9ELzirv9tJMDVkVK2dXomNXshsgFCBDocUusPgm45b4azV1AZCxRgNj9J7",
  "key10": "18HCNiErfPPzdXc6nUFS2RekKMm8eQPBtWFGeTkPor7NQi1u8o43FG5osR6grt4oJzNMRmk72WddtGCqCUAimdk",
  "key11": "3ScpVgqDcSQonEiuswdJiGtMF8qyXZQhCSRDRzjAwtGNqYyjJEXmWefefaLp9JNkkmULisTVi11ZuS3m1byDtfLX",
  "key12": "5iPAv8RDaN939myR2Fe8nMYdo2ipLyq1bbE5RDXS9vjZTFyMVmNRnpz42T9ZwQKoX3a2niAHqRohQ8nFsrEhZGGH",
  "key13": "4VijWnw748Gq2VEL76xz3BA6uM6g8mEbqsZnx1mm7T5wsq1bXQHWbfw8vozP15EVGcBGFjwpLsdo3eydwSxW6FgQ",
  "key14": "4C8vnjhAbEnrmUceD8ndB9aC76dMeHK4M2jjnrEhkiKnTSdh9uU57e2pEAArPS2DN2VLSptp9Q3gSJ2bGAKepbWk",
  "key15": "Xx5HzCTADa8ffrteDgcaS5d4qb4UMcSVcZiH4Be53yrC9eR1RvJjctRgACvqrnD5e59Dx9PuuJs41GYXcL5enrA",
  "key16": "2JSfwDzbiVFUHkLYZg66oCod9wRegxdhAxQVbLvG47zkK6MapvE7rCHL1Q25E233jxv44UbS1Q938WMoRn3qcnf",
  "key17": "22GJuCQ34HhnZPXj6nPUC3rPqDXvC3usuioquhV6wJfoVSuQaX6h1NKEpY2wkXDsQCtCYWH4WYmrowdCQ9nuEL3z",
  "key18": "2ysWvPz1a1aow3dApxUSAzbPJzvs1MHnnBNYVKhStk68oRBE1eGgCA2T1ZwQYmbqcpxJR6ZmTMxF7Q44JrYLPPhR",
  "key19": "4XAohSbbKsJhbaVwq2UbEgo4PaoeMUoawF2cPstZhR8tNvk5zkYvdrPzWEJ7mMtXJAjZbAE9LArUQ5z7UHpbxZD7",
  "key20": "4z4uuUpJAtfEboYhxkUTpRetjzZc9niZkHEVQpDgK8omNAaeVapmycHkyQvas6amgPQp7RQXcWMUv3eTqH2fkRoK",
  "key21": "2iMgC1cWPuyhiwuv7BRZn3XQHSmEUK3jLLeDC5Jt6haAogQxRhARTS8De7S7zYjA1eWb8NC4v3bsM4AV1pUHuGYf",
  "key22": "4dcVsdUVUMzhLVfx8fXtXcnFBB9nSFYAxvSuR28kh6KcX1z6xqqjPM1nyeYQ92YTCvxgCLAbYQzPjaNeWYPiASxF",
  "key23": "24epdXMaixxEmBfurohDDfM63RB5hpE6ToG7EumrTt9rxWmqvno2w1k5nge23n3pwc22ZW5HBFmoogvXRKnecGbv",
  "key24": "1zizrj62ECyxTqsspDG5PS7NM4imVK4btMSGWbUV98QSF8mmoTZGwyM3te8WFLgFibTENbXBeYv73c7xMBdoWdm",
  "key25": "w9vzZTbsc3tNswzVVrY4BnMRbQfrrQeG48bnzq6Uzh2v5JSfi5XA8XhcZeiaBtxMeRrmAYdHvV8nTzoz7h5Cmjr",
  "key26": "2Z7RbgMNXiqatkpexeP4nwjGyouHcKF1Q4Msp3W98mFtr2LKkDB9HbXpC2Dj94zBuP748jFXCHPTZLN4VenrTs72",
  "key27": "2XuRX9qcUJMXp9gs9dmdwuorXnKFYugEijepUwwStbnMTiTMpjo2c7N7idZL6YnVAfiznfV8cNu3Luf7Jr7UJzDf",
  "key28": "2CwHxeJmx4BrVe4vzAgqjqqVbbqV9hbjPoygWJYVo5m2FD7jUra6unyRQCUdpYdmWB2BwS97eBZpDL2GrbmimYBi",
  "key29": "7nDLb8rwe8NLNT3UmNqFdrnSysTDkt3PNCpVpQY6GNoZSqrLujd6xYW9fSjQrUv7LChT7oKQowDjmw8WPbpqUAq",
  "key30": "4Tjc3HKi89TpUqBAzPMKTq97xYtsNJvrdUrDkryHqEtR7mkYogrx9F6tkigJpK26BqW2dymyQSoHEjQWEmUAFMmZ",
  "key31": "26zXejShM4KthVWBFgLyJcAWrqwCZ4v78oVGRoRvGG3kSYcrp1AJ8Ph6YR1BTg5KBhtdDGrVETR8uADbNJTxiswt",
  "key32": "2jDcZM3ZiBiA5Vtt8nAy16P4J3LexqY5aU1VDFTMXjRcZbvfFbAuPYS1k9ihWjb1nMAGwfd9p8KWrQaUUPshmCnG",
  "key33": "uvwudpwNxKFTsTKHu1XoD9dxDR4zg8pvz3gQtpaxTh2NzBtpJTBwdgQvP2EwgJTyojGjw39ic6GoSJSBKVa4NHQ",
  "key34": "2zsKeFYJ1rzWGoRhCcazTQoEYsxVoNHNeHsLoGYSbLiz89Hrn1xkEQUYZT3qjPVm73qGKnc6hhZ5wKT5Y8H2aKLX",
  "key35": "59qykH7PV9n8AU3SBZQw3ds3Y5jtKA4mUdCuWAx4FcQbrgR3p9w4o3XTm647dDXH3ZvRxkEZKNV3Qk7d2nRGTF7u"
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
