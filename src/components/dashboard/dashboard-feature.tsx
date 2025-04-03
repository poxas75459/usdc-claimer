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
    "3iaBT2vSaLCNBttgeMhDzTUBywZyPUTYHnvmHEPPxzczkG5cY6D4edFFqzS3d2eFyFQMhJVeooD74kPECSsKp55s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ij3g1Mux7CEinZGQijA7zzbWFDi1MGjdLtxk5ecvse7pCobmsfqXzcbgL8W46AAjqiaKR6iA5agjNVSr2fNAEic",
  "key1": "2cJogkV5ct2wQrHyPei1SF74w9erRQ12kfHtnXbHjhNDnodUeovUauPwGmr5HZmucNcRNyq1faVDY54CToDiueFW",
  "key2": "4tbsK2TB4TfkamyrPiG5FVcthHtUKECAvvga8j7HncreeHp4mrV66EH5zyPccnxkj5sQPsUjtPGqdVsnouuxmDEk",
  "key3": "5j8dM7WxGVUWez128MGphv2b12VJLiVXED3nZ34CiWMpgrB6NCrdECgCK4YExc2QLBVBxXsyLRi3tsMg83UCgzho",
  "key4": "2F5crmVfhLXswXg2ZgnLzxqaoHf3yDRvM9oGPEVN4KsQZrTUC7XeyozUotUB5y6CYmSKwvS42k9tQ96kY6doKgVu",
  "key5": "23KVo2iQfQNJHogZKXkeX6EdSjg5Hu5XAtMrufKF17TApu7ghiPtvqkBYvQiDcJMtGGeaU8AhGi568peRf9FbCdd",
  "key6": "4mLHtNm9JGBZRdJWVgPmTxYs53vj5JVmrsoWW1kYLZcKUPzoStYPKiuwjteujA5FCKfQz6YZUafrVUY8FgfdZCP6",
  "key7": "K876Lm2Xbi6iN425qATg5VAp1XRZUSYCkhAQp8yn8LMPgF3fq2V6Upfceo4Huhx5Am1wZgpmya2ZXY1jD1rYG9E",
  "key8": "3WutaP2SF8BKbKoG2NLvmJj7LqFjw3TvLVzCkW2xQjbxjWbqrPTJj2cbbuywswKYWZe7cLq5Q587hDuXsxS59Poy",
  "key9": "5hBT1ZzKKjvRavLGz2Azpe2MpMYZfw2zTFL87yj6JQgudVC1VczjjpiJTKsR165R8XnTzAXhooB4FW3dvCD1k2w9",
  "key10": "2EH2KnHxEFFdNuCTT6HTyqFGeE9S2Cd1rJd2T1537CmkEyaoXXtgasRuStziDz2dek32eTx6uDgPhw2BKw53cHgo",
  "key11": "5E4R5ZVUD8sc1A8rukzDBSnYhRz4uPabvx5X55w1cCWUT3qGft17s4MtsbPuCfskmP7MrZKzefHmC63mKfP374wd",
  "key12": "2tTB2qPERAQ5d5hSY8EkyamdpiwmNJf1MiBAMUiYk4iAfH56Hys4oEM9dXiPnsjxpAeT91cS9nLwQz6CjwrxAzcV",
  "key13": "3vCyzLS1SAfrhHQaekRXgBJS1bjpiJCx9dxgDNHNJPKYPb4hCEpcMaiccSeud5fSRuFV4UvGgh3q6figcMimqmtL",
  "key14": "5Bkm3QCndiGXmQgspJVDo3tGHsbvKuwqCfxLoSn6okBSjv2FrDXdQNhGXSq1474QYKknfVesAABGZj2efHAncZkx",
  "key15": "Dfp5Wrxz1EkHMQ4noVrT58FSSb1Tsm9ixn1ggXAKStssPRixfBhtCHK9qCD7daA4JXeNMagEFpCg8UAcBwNjLS1",
  "key16": "4g53Gy7jrRS54bg7Pi5ATpbZeQssYoQeW51TAohpEbL7fm44AqTKkzNbURjVrv5k6dVgB5pLWedrSKv2cXmJ3tr1",
  "key17": "4JuqtqN8UYZTyud6fhyprPtpSUyxXm9WDDi7vp7Xc9PdfVew5tzLyS6CJwDCKwTzKKgbiB11D3FRNn7rCo66hmUQ",
  "key18": "44SkLJW5qT2h2gmXZ36yYfD2EzyKDMWR8tUq2XrAGiEcZQxuDDwSwzE6AnBSTQaC5FGxkBrFWn1vZ9cBCd34PMah",
  "key19": "2oK3wxxgYj5TGqr6u4r4kcgBYih7aXVVi7H5KoePnAV9RosCTHihqqHEwSeM5rpwjyNCwzxVM7PoxHUhSHpsCciZ",
  "key20": "48Z1RcZF4dcjzkUg49B3P8GVVYB5FjEQUjhYNWXQW9i5zRVFLrx9Ma77JNeFaSr6BdAeLLmneSZXk5SiMwtqnGhV",
  "key21": "4DkVFz4Yn1reNkmdDWKZVy5qxfKDF8YN9GskCLYWmcEBogSoJY3fVKc1cMGeDzqEc4rZJjns9sTvzJcE41gDdFPY",
  "key22": "3PASTzNkoEuzFbbdKNnLgCA5hcxsxvA5pigWd4pKL4wZbiEDW8kqcXAHCGbx5s9cfbZDx1h7Pu7cp4Lrv4BsZVYZ",
  "key23": "5busxnei7Du7jSJycovswpYHHGpGmfHppZrXbGuKmVRmr2MCGUmxdiKG6kL5W9DDMnGyzXwdZ6m7Q9SWLsxfiZR4",
  "key24": "3aop3p5LHxCSbGsNmU2BSHhuRptxTESgcSaPjW82FQRbKL8QjqaULd5AWJz4bQogKEyp98FPTALv8nRiMzZyQg7R",
  "key25": "5pa1yfBh1og8LCGZ6P3kAy1FfdZsGuyBA62ukrL441H8oVay8LYFMSUQ3hc8ZaqWKDQva2Q6ugvXXHNZFFqRMnxy",
  "key26": "gPzcKJWyVVs2XMzDkPEVuTc2ZfrKbjkBb7AGmsMY4TePPq5TWMTAEG3sQKuYDTgQ4icN2PSMg4oJm3MP23pTBSr",
  "key27": "4ZSF9w57EpYTRSTAm8kWBnLLUNUA7Dw2uN5K3hmaqgWoBRMiT7Qd2Uz46CkCXWGn1KcxkmqkGtukx5jEEV6Tz8tg",
  "key28": "MsqTEfirActywD478vLvnzcrGg57re89E4h1qyhqpVc8yvvK8B4PCtL6pYuWKTXMSMHVKRWd7XRc3fpVhNMiYcM",
  "key29": "41dcvXvzCiCf9YUxD5DD16NXTF2yan2R4yHbGkR4nTfY2MaWXhj5THnmDpiHtnScZpByXzy1pS4qwtYPXXevVJuh",
  "key30": "4Pt1PsYYiqwC8t5csw4pAk4myjC15gs1CvrDrcbL1RV69MgXugXKfXQ26cdH6MmGyX1zLs4TRsn8fzmeUhuZJewi",
  "key31": "5CakHYcwokioKHEvvavqwkXYKXn3ApZ5E1dmTxmQgKEuf2AAPWeEYawEEPV29gMCfJJttqh93JQi1XeRT9JLDaqJ",
  "key32": "3edALyo954WG35Pr715UsQm9oFgm2x17uLV5o2ahRqPQT7QL2Y8ZQcCTCALV4eiVtx6cbQqE38qt3VXgsbs26DdM",
  "key33": "2DUWsMkC7WV69iGrGD3wHwd7BJK174UYAKC4RKMXVmZbZnrmMZjMc3CiEuHwcFKe4TJCywHfk93R7NuXHZ68Fqg4"
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
