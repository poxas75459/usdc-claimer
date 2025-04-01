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
    "5V7bbDDcgzvD9H26X1A9HX9wFHYeh4hV65HovANGNXv65LQyFDYqLqoPbui6YkwrtqUAfh9iFUsvDroHMU26ni7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqzq7dTG1tn1XXRXc3WQpmvD8oKMEtW1W9P1Nbf3B3viQNfWHAJTPrva9xEjgq7xihHoPDJq5ohagCtSb5rDBe6",
  "key1": "3y3mvrdi1c1t15NU8RtqS6WRjC1HQQWbycYNg25VRd1tbJrV54789oTRt435faqPPxox2owB4Ni1ay45rHGvR5bg",
  "key2": "4KdepjeACk6qvjxDoBzkUoHKbtmc73vYro4db72xyCV7RkGwhZgrRcu9TZ4qpC8ShTrPaX8QGwfQVgQ5GWXD3MuH",
  "key3": "yxS9Xw1z6mXisCHH6dXWC5FJAJkDLo798z6g95erVBAVVcNuiGTYc5JmXuJc9DfyhVktwxYJPeQEAg7CQGT667u",
  "key4": "5o7EzSyLBiLGBPFH9CYHDTs4Utfi8L4Fz1s1G6YZhx58noSzAo6ZNCUYcsMR4mqrU6rVEYQetb3cH8Jby1tzMAHE",
  "key5": "gAdtRDLsLVQTjEqTkJu3tqefzywfBnxMNR46FPJfyvH26V7ZaKbeoPNT6S5St6mJDgqR5FjJ69A32FqQeke5mC7",
  "key6": "4yEL5wvwCMAtkFujLhtEPWgSirDUUsprq4mC9KQTcXgt75WUMj5EaicbMYvz9oXSZkRmvgNB57yVZ8foZ6kFzrRG",
  "key7": "4pu4AWvheK4S6t6N67h8AcSw6TwnsqMQFQ8UvjHC1zEnmZQUDdaBK7Cd1JtECiQDaUEYa21sJAeSuA68H8sfq89i",
  "key8": "3fgx7sumaBQ7EUrAzMkEeDNrq844Nd1KXsRQFeLRdJMMbtxjc3gHbm3n4xJa6Ry6WSD5Q4YgbwGXdDLVFKHYCrSv",
  "key9": "3y3yXUSRzyRDLC97xpb9TvAFQxYsRjiq53MPNcGL4hyVn65y8CHQpsAQYyMZ92vE7rkaKFAkn1tbjXF7249roN1B",
  "key10": "NdYrgp4yvNxvgqiJqkHTYZahxSbM4YmGGsJttY4VEntTWQjYdsL6SPnMpePdGmH4rUBEerer4ahesAhoAjKsD6H",
  "key11": "3wbaVPP7nQvUVa2b32v2saVEeEkgKukk7swKrfrADN46VZhXwem3wFw8w1Ao3Wu8yhJ2EDM6TncDqusfyMFvnjTT",
  "key12": "5PUX2Tka34zSQu6mjJjJm5LsXpinoMzuPGTm8MDtRMDEkAWywoFq2rfPvEuQsxTqfQTMACTD19roWyHjyoU38QaT",
  "key13": "427enGPgXnK77uzJi75PFpRFWBb1XXPasasvrvXKqSTWbPc79LmTchT7yNXMuAQ5kmFt6pLZH96Sdg2kBwBebfwe",
  "key14": "52mAFSZwhUmTTBNXfcpt8yewgGgQWbCP1kMi6DDCES8JxnW52VG9geEZfY5XM7wY31f7KsQTPcX3ecyxhD447j24",
  "key15": "4TQ4eEC4v7A6d4pDHBBS56rzZtRXiNg2SyHJVvQBWVTtNuFdjtQ4n2ttGBQLUN8ghHm7hFbtsrm5cyzKgRfQ13QH",
  "key16": "2RvdQ7NBS4a8UUpEiBTRwH84CvFbojvfTGUVm58P7ZmyDPqZyEgrx8cVY6rHBRDP65YPChskzTLPLBhmHsfFAK4Z",
  "key17": "Kis5dtbZ6Dsk9uQJXj3cEnzqAZ8dsbX3us8iZxqzxoAbrHLHytWG2nXf4WcMF2jX9KkUmgkj1qwsK6xbHwt7cHn",
  "key18": "3ADKyAtJ9oRvTsJTe6Cid9bhZTyeQzxb4a1KN9bPgbmRnuhZWEoT86q2vu2TCFfnNfzLSrx8dvamQRAE46f4WzfC",
  "key19": "5X8BEedUSHXyX7Suj2SUL42KYw1ykTxVaJcS7Nrwtd97WQpwkFdMsgPAbhqBsNU7YvmMsknZNh9366m8u2c94jM",
  "key20": "4zkZhMzoRW7Y4GtnVn9CkEqtSWfmo2ZdL2VFoUJRbLungJxZr4hmuUE93oFU33KdoESW3EgpTc73RurYWNfbt7Dq",
  "key21": "5nKRpXhbBHtrxMFzPEcuMPCvziKYySSPpipJ6xEFdSkGP88LRqYoEn2PQwLG2wvH2c49iDMuovW2Qk2b7YaY1AvA",
  "key22": "2Zept4bTon2mzQTr1rcw2Zkx3uFfEDuof87KnRi1i6RVrBW5QEuNSs12d8NunkFJCn7Q7Npn9c6GtsVitHW2waQ7",
  "key23": "5J6U8LewucjcCXvESaFySRCj7dNwkY1YWM68RPraSHFcUm36dXRJNx1pkQjwm4TVpdqGi34Mz2EbkxaexZU3HmPW",
  "key24": "3cE7vmvmJ8Xut98iwqZaYixnoDivxwtNULZWMRAMASg9QNWA5DQRxP95TpfwCjdaSTfuF8wPL2WFpCSgNSG1om3b",
  "key25": "zwpf6dy8GdgA6UDwRKX4HTDpqqZh2bVxTJXguwwi3pfHKt5FQiyU31kU6j7tMA8NNYCz6DxphwAVSXakasnqBJn",
  "key26": "qyf9U4DbMD9w9WmLTrPihnphzyVthFw5miQaWnbX1vD8Z9NYb3g3yWzpCWxRnpbQ6xkYMJLMXYq4q8bnr6sTkMJ",
  "key27": "2gWXFprQh4onAqV7hRdhpKgpBr7p4zLmhVjitFBgHkmHSUkuCUC1ziaVhhPWodRkmcvNP1xRnBo4ta2F5D6ciez9",
  "key28": "3pdWqwS7rgWzerPcT9cXfEUJofSjMQTpa5TCh76rxk1TvWLATbaLdGbn2goWiDDQvmq7f7h4fr96qgJgYtZRnXCS",
  "key29": "52iD31CZyjaE9jxDkxFKKXmEmdLaSJFDxDYre2LgTXuvp1vvREprEgTwrq2wJUq8N2XqLejDrcQK3AGQwDtfWbFy",
  "key30": "38X7AX12xH3FXWcuuMazNxqPxTmCnoEnpXTMPC9TtktLQYbCf8UotAAVzrvTjTbtCTGrxjQYpThV7vTCUEy6BL9f",
  "key31": "4wjoLd6u7R3zyzUPtwTVRkMeEcY9F4ThoobkhMtteP1pTJhZJNoVkGGfDZKPdYMDP3iDDZmnSkCgpFV4mKfNasVt",
  "key32": "4a5J4Fpd3Tye2gHMtLjR8mQWpz4z4CcN2XUGMbd2FkPJyTdpjeEqBYytcumxvraQXJbauZ5XArcYEQJuFdRvtBZT",
  "key33": "ov1jfrKoMWBj23mWyKN9YxMWQv3yC8yP6ZWZbYuZCPWkvGswcBWXSLtq4AZAJssv1YHxLRADyaALy7VWaqkyJkV",
  "key34": "61wtwDhMG9JDefAFaVVZvsYqcBmyTH56QHCJmGo8HL9t37vppTmvnAscG5qMv8zSMsDUNLS1AWAXuUshWQHZse5i",
  "key35": "3vvREcGNcdxk1Fa3ebcGRRoNocjaX2yrTwb7y97pnVShSWFPusGRjgYXQfWoA5Ek5WGNDrcbGeoTjLuqF8cYRibH"
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
