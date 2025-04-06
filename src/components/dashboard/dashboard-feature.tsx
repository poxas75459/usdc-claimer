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
    "3w9YSWpouQALYwZzR61bwstXaopy1h15rkTio8CnuUwt9EFcDUfNnTRkx18z9tY7QuyPZPR4h3oZm9HbHg1oKwqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6s4UG7aipvGFVsqiYNvbiRbzNyMqq885uwetkHUPQJ15hCfm8toiRwce6MnAZ3LKDSNbS9K8dBe3DGZWvREMPK",
  "key1": "3oFHdQrp95yUkh6ihDA1UPoRDeWQ4Em3TQ1dyirULvonjC2diLroid8PbVXHdJ1otztziuq8PMXjpgY32Kq4GAxt",
  "key2": "4kUe4wV4a3ZTb1MuMNFNqgVGic6TYW4kpnYvKoHyAv4wHemXghh6UZqA61DK5ADqMF6tN6RswAfgaNHwuPb5vveJ",
  "key3": "4ZTNbQgT7DrWWhyfXc89GkFxUtgv2N6rcuTQkh6vuK93r7SUcgnG5wtKVtq8ae8vYvgFQWvQqHAWrcSHKoYR8Zk9",
  "key4": "4XBRFhVCcQ4TyfmdJrxYPBTC1ShAqK7XX4RD7DFgs6K6CjJnqYcU4JAFEShC85QQwMJBC6RYmR13tHpQXnKpuqJ7",
  "key5": "4T81ws6GjPCdFduSu6o9eBwoFA26ssR7yxbcVtqtMoFPQWYLRfPKKo5Nhq6nQLzHVQJNGvdMTLCaVB3aKTuQa1gZ",
  "key6": "2owav3LWMd7VgmL6JDKzKEozef73xTbiSfxA2ndoYAB3NLsxDnXQWX6oqy5VpMLfbq3yBhU2Jz2YxnNLygTvi5v7",
  "key7": "3MVcSaSiGFRBkr3kJSdek8R2mH6nV3KJ7VfsC5HVjQs2vmHHWNGd2sKB6bCoUmF758MBsSrNnjpbhqwGRAyR4uHj",
  "key8": "39ZpTtrQC2bjYQtLcy6LRhJsoZdHUk1At6744JUFu4EWbwrq2MRDVEvEZZnETbs8Pg2ZKPiCnr4CHTcpTzGHWb8m",
  "key9": "KY17ny9E1GSCCw1soxyvqpCZNDuAXj4Go8SJ1u55iL8eBacHAxD5eBf5u1w1H1CQKUCbSSfNwpZGp9vff9L4pnS",
  "key10": "U5D8PpWNGvyz93y3dJqTPAsUHH1wxYooDokngWjeLnywTkm4UZWos1cDGFog23Xs3s4E1jvcXrD5Bp4f3Swiyjz",
  "key11": "4VW3xT11tiBBTyxKJVMvQ8kGoynxh6iEFwm6d7hZpMZwcnomeDtCNHTVSKefAiFF23KYDiPXjLQVuEqxNQANgxUD",
  "key12": "bJ435WdngidDjLfCpyumNpDtfNHMEvWaDqhwV7BbxuF7u29Yv9rh2kAZxMjKGckgetXhuycvjYg7RFGKfeUzxFZ",
  "key13": "2wmUgeWUM8Ens5GyWEBc6UoVWi9h56quHAHk7Aqh4XMLbgthwmG3EZttq1sosduGSHS85pXZNr6wKz9uSxa6uDT4",
  "key14": "wuTqGHp6yWwwnYkXRcHn8NpZsspPAWX2WQbYfPaJk12mKVgur4hSFNWkcvgakWHo5Tbm9ve31efi5BMj9RM1mzB",
  "key15": "4MUzRHe7F8DWkKSi3AhFn3c6X9e5jax6j9njYkSNoKkJdd5KpwMbkC2p3DjDqR4AvgTCXB24pGpCKVDbvKav2zZC",
  "key16": "y56KD1zyHg17ZAtmjzSrLQgsrhoScNteyiy67DPXVwRahgHUSPGfahHR4diXoQuuszou2tij4R3PifhqgEVQYGJ",
  "key17": "3LMgNQSvv86muKtfxdnpxSuBLsihfLhwPa5s75uKKDFoy8gSSV5723uYSjae8MXXGrGJ12aQXwPw3Edv3HToPUGn",
  "key18": "391kfj16T7yCX7DhVKGgJXshNFnvWo3Jg9R3LBQiXiPCv83eN4D5TC4DfyrM9kan7H1fTFhvmFQ1LNDhoW9GcDM5",
  "key19": "4U59q69FgGhsfRA5QkkntnUg3Bb4o6bxmZcDECP66taSuAUDSEzzaRNZY9JwrRdHoWXrmCk4Sp2UWzkE1LoWMjra",
  "key20": "5cN1sfJPwraGxUBqrytQLSPuhevn3phHXJcfHrCqeoyb7AeZ6BFSgxupiLx4hwbRbi1kKD6wFM9mB2PyXaYvCMaN",
  "key21": "3urCYjiNoSeD7t7dNYC1gPFMfQZNuc5oKqibzD2YWpm8e1nECSx7bhcV9ZbBrQsXV3c4jywF9AJdNXmhMFJQtycH",
  "key22": "sY2qbgY5K6pXSRPMNDCd3yruVz8Cr6hN7xb6Jk6dcKvtJYmxF8diPERnP9GtpHtaVQVKcrR8EEtM5nSQkAG3VYi",
  "key23": "C7n1wf5i3DkbGTUdL3GuzvPEL7zYCVd3Fhbj5X1vaR7PCXCJE495ELs7hPauZf1MiLqHWD9MkHmoMhkLshFFRdg",
  "key24": "5UU5TxUpttGzrp81eEnPrWCjUQxU5YrCdu1UaZeqQjjbuomao3YSwDzhS9NrnGfWjCmJqjCtjEX1yRYw7uGSCJ3C",
  "key25": "46sQqGwxEATJ3ShmPAjHsZUzVxpBCPKP767Do2xTGw6Wogt8k1Aw76vy1sCiEDU2UQFJ1xXW35yvnBSKfRksyCtx",
  "key26": "3ewL8RgbSdtPFDY7QXyssk23hn7KQsoF8xuDRLDKHZpWAfnX8SJSegrBe1eLsSrURRdtAa6QXmPB4deDvnouyNxR",
  "key27": "3UzqADG8NDQeKaqaCSvjJDLt1qqxmGHdfaVopPz8gtLUsfsXUnBr6eJBXfdwuzkncR2YWaRFMkWEz45jpuoe8xVH",
  "key28": "3XneYpurVFWRjxDf2HSBwiZnUTPaAxyWyfvs6tGUhCS11u2fydSa9ykZvgu9ESuhX4J3jJkjJy9oHxNGnmSQZzqD",
  "key29": "3F1Q9DTuW2yiDt6LFMUF7uCVRuuyi8viDLL5LN3K4eS4fG6x4WPwdFCJEF5r5yhftqK4oVFNqAteoL6CGqb1ybYa",
  "key30": "67T8Y4Lte9voohCVeVGgU5w1znpyKyXGje2TbQvNPzi4qh798pdsQyuAaCd3LNwuAWguiyMf797iJTncejTtw89F",
  "key31": "4jkgP6Cm2myanr26zyqMSExtaBU3o7vigWkTc8im2pKQfBsczKTCCRW5nxh4dymeA3qNovbr5JaiRMpgjbBUPuCU",
  "key32": "4Pbwab68mSLjZkNJNaCm1zaHMBJm1mWcxNvWGDsGeHvHLFxdAp1SV7ZDySSsb8woNbTXnawKP89M2nptMiN6p3ex",
  "key33": "5bKS3hhJWMwRa3Suuo5PcPcjL86TkE7w17CNNVGsvbF1Xo14sJo84z8h9eUxRPJt4kHKadQfvR8PK9GgTC4uEr5i",
  "key34": "5JU72PTzLDAtXvxtKADLTj2fn6hsfnXJaarWZKWMcdZAvhLsVKPcwxHNDH8ZRDrw3zXVRd5utRk6BhctZnDJJAAy",
  "key35": "3nqkd1QGEzPiaV8H4MSao4BC28KSmsVQ5RuDTKGp8J6dSX1gLrkdtAt6gC91s4XxZ15d6ioEceSak75Gmr5YYLXc",
  "key36": "44UKU27XX8xexrj1R1g13pggarvG5WhSGJ3UNczUN1hmJ2o39LwMBPC6pu9Y3C3iny6VNfhR7fDZ8f4vpLv7afBy",
  "key37": "66Y6fHrusB4XGB2oKhV3t5LHdW47MEDhWTmt6xz5C5tCbZGi8q1Gjp51WdDSzxMiSTHrF7teaGBFYPcw6WfDFeP7",
  "key38": "5oX4jYJhyoLjTLzzMVE9udU3js4Q6fM1hKKKbq78BwSAmPbYC1CfQCFAegrHXTa9AinVGvmEqft6VRTXtetxfAZZ"
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
