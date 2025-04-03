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
    "5xx6vgSF3EzBRoKVX9928qywMs8injzteCpekGhvTuekXqe5aPgGQ1PHsZiLjytMLdNtaP3jn2Q4wLDxSQV5Jirs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woiPkjZbCF2v2QZSYsobajKuF5BGERbL67GpdPERWxrV9cBdALdcocDKkhQaiKQPSbnxvZP4ZH21ehhJaY4yhCo",
  "key1": "5T7HHJjrDcJzrBt54hYzaoiWK33vJqqg5YCcERRLuqCuHjPGfZ5XURbUX6qMAYD8nRT3ibrrrnmF5RxGmWZZW5Ke",
  "key2": "4uT3NZhqd2diVzkou9mfmVwhS9MPauMaGfPC2LYVw58y9WrqhcoapoNk2QDCrSBUJA5yA8bZWxmksEPV8oeQKbKT",
  "key3": "4bZW1rcTpb1fccDmFitTG6J5a4jsH55ta3RpNu8AGAT6n7Y59f2EF1NizFmQEQdGPQntGDs9czAnVLHjph84ZP6",
  "key4": "6176u9VHCyKD5r4zCaHby9jZnEd3zKCzPfuE59Eb4uFmcENVxg9FYt82nHCozK8cRcCdRRkL9RfLEgsen3DcCiK6",
  "key5": "42thxdJRghEcEqn93yRvD5ACjBv1SYJz2m29Xobs9qC9GewBEyWkpDcyUg4VUHdyDm9CozMSr7DFeZwkqvq71msB",
  "key6": "4fs8wfmiyVgDomNyLuCrE7pyLWGMBRXTGt6GwamncUK4o1wBUk7H3LxA3sDTLo2N9LMcNMbrFXzqDLT6a1dxPNoX",
  "key7": "4iyyCWXRHmssim4oGF1SvdLfw6qb3ssUQyDmMtE1oTBSLS1bCB91dTvomimHy8XNvJNYQLXpJP7U4EBmRWPiGiFk",
  "key8": "EwhoeFoVQsr4bpXQXv2meDCSLzm7NnxRMn5Vui4WLHt1gED4kXnSc4fhVugm4NpH2zh7x2PkoDAEmtpZVYMjh9m",
  "key9": "DBNqQcRGAQJ2qEfxi3qHQahAJ7fxNMc611SCEk2Djj8sa48cU276c1jgUH2F2kVjt5fFSP5FV7B8iNiRBiyssV9",
  "key10": "215LBPdPmKCHb8qCiK5jA6QEg7zYHXGa22887gS7fQEJMEoyS3KXho3Fasyji4myLMFMSQXgNyp6wdW3x99yNeja",
  "key11": "3PJxkC3R3BxmQ3zUYkZ2PM43SFsrt4m8ugd2nauzcyumSqt6SBkLLF29y53C7np7DX6jLJYUeBgmKzk25xY5awRK",
  "key12": "4TFYPKiHzrBcN3peTERBgg6tifpgGniPWQT49uoivy3nkaMo63LT23CxZVrMmCY5PmVKSAk3NsNERAk6Th1Bt59E",
  "key13": "22VoP1TZj5nSmFyag2b7MXMDYWB7MKSpNxXx1YTN27veE3T2TDjxZtdBySgwB31ACLXPJ3bzKTAbiWGd1MhkoWrk",
  "key14": "3qjZtZ1g5RHJBmXgaH2FCN1u7PFhkSMHnGwsCTg1weTtQHNTfbSptUEZpTEooCHwxaRagozUUkmVQtQ3NaXiQnNj",
  "key15": "GB2b7DyVXKEQh9qnL1L1stjbgVEVyNkUTrVakT7HjbXSkjcAv5bjn9myxtcdXewhvYabatjAqnHHW9CNa7QqYCA",
  "key16": "cDbau11WymiJGBjdhyJP3tLNNJK93XNA24VZhPRteSN6Kzr8JEVJRBBfTNdWN3oBXJXmtW4koBxFTHbk7on61yF",
  "key17": "arXjtVYA5wPgZNgtfyFCB1WgPCeNoWiyRNyrbtBp99eHpYnqiGwdN6N2AAo9o6Lsgn1LyQkKrN3vHe33AqKe3Db",
  "key18": "62SaLV5RryNHD5G4C5wtoFjThJsvb8ApMJVs6jfvUwWyAU657s27YCvpmZFyDRLvPqUHEZ4aM6nxozaPScyXDsmm",
  "key19": "fyGvdWfHvgkRo94TdD8E6PdC6qaNCehiYNnjnnCiSFoycQFeDtEhdkR6V2g2Kf91YZkh8Q3SRtn8Fuk2kFWDUWm",
  "key20": "2st7h3eEwTNFU2xFZ59RW2tjYNxLNvYANPpD5tduvd9NyD8MYGgaBduJedVcd264uhWrAM8vPFfDZCnMH38gxXdX",
  "key21": "2hrB2fEL6yxL8vEaQcF3TQxLYAdNJSoujDBCnqZn9f6F7nBuTKjWTTfuYotvPE2Z674SQjH2VhMeKvsLNYrxguHs",
  "key22": "5UbNeJTPzTdb7kzx2FUqqFbw4EZNf3HaBkk5GWycbuCmhZsCKvwCsGsLTR64wTEgTjNMgwgK62aYYns54ssGMNry",
  "key23": "yXi1ZdghKf1ku8fihEFV2yVLNpcC2HfXog5Kncj5Ws9EojPJM5Bdvrb21oShvJ6kiDFVvJSeHn8uHDLXBfscJJA",
  "key24": "37X7rP2RChe9BZwcZChYz8yivFpRv3UH3fNWTNY1EomHwPS1YDGRp2847xh9yacee9cFahjMxnbm185DxnX2avUy",
  "key25": "ztRPcstDPYbVGviUFSEWEW6qW4ngXtcvo1FE1q95kR9Cfq9RaMvaR6UwRqMaNDeevF788ELeTLpetqXCZDfLSQ7",
  "key26": "XTA9cxccvzgDbuHrKX1nCWMoj3FKcpwjfLTEt2rpZ68gz2jpuWch2zeob75rHQKvcUK6oPtcCpmNjBbuqe9N1EG",
  "key27": "tEf5bf6ZaY9JutEtBKFMZnBg2iW3UUjr9nsHCBGeCVZX2Mu1AZFzvswTNkGLjZ7e2RG6MzQH6Pphctu8gwNWhoX"
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
