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
    "RyLTjm6E2bGZR4NDGD3fqjdVZFQnfoFLZNNAQNyXfeeLA6HQM4Ng81qdmseD4igoPkWVdq7cmoJAeYrSRwVAwUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23h2bqJF149h7T3cwRskeRWDS2bgrCHAp1BNee7A6vTe6Js8fdkmEPcusHPpc3WZmj3SrBv4cVWrnFm1pmknQhXQ",
  "key1": "4GSwgCNzPRkhVutroZUMaYLuVRCf322UcEw4GVT5bZ2JbAtpTBLTFJLLfFVwxwz2Muzegw1SvqKSjtEacbWYdiu",
  "key2": "4LnX9FRX6S3mhjtzPBLPT4bv6iCT4tf6FSiTKx4729b5YVrVUhehV4CsonsADM1VBFwQHk1a4UYxGmDMiNvZ6LmM",
  "key3": "3MWm2i1S7fYqLVoxvAUzAt4GTNm9thgP3Qf1421uvFfm3n4mywehzZwH8rmeJ2cj8PLaWTrWjzMNMZm57hEbpX9s",
  "key4": "5Lpw85fzTKRpSBcaWkdbqGfRmW1U5yj9Hd7VrUstxA4QetCgs6tubkqPyndm3iyjJQa4DaGdVE1WyTiYaawuWiUj",
  "key5": "55FRGhGPL1GGH274tZSt8hd68YXTTJPdenYU4BCbpUZdh56rDN8ruW7HTA6SdqPdQntnC1JQyjaMQLrnykU6uAp2",
  "key6": "oGPfAkKmvWtdFVANroFBDfTdpjMHdor7FGnseXnwey2rjHqMaAd1iHRV97QVJ1PaTRy2E2p6bxV2ShwChJ3wJMX",
  "key7": "3vAFWFNtoTMZ8tdYYCPAQoSP7sNFP76VtEkHd3fQ34MZXga4Jyepy1gtt46N3nNnHcD14Fxas5jr7AtwcHRyuN7h",
  "key8": "3GX3XobBdf3UdNYgFuZY4nnbJ3oMX38hxCjdrzNPboTceLmQHCnJG5jkoTai8DwDKxNFfmNoqNyNvnScNWgHB3Mg",
  "key9": "5axAhrHJCD3UoGy4Poes25ivGoAHPpYcvQgAmceHS1d2TKaBNoUtoT7GUvy27dwuA7B97oFpzfEunavmYjX5cNXE",
  "key10": "5i9d6aFgfBe3JNbr7y28ag78ai6Gf6ubKjAMNku189k8tzTyPLZiapVHPthYJgyP4mwTDstRn4xVLDEVmNx8k5wa",
  "key11": "66NTcodoiGtoa6esCUvyVCQUeiEECwMXH7hfEsNdfMUesmixnaJzvRFc8XNN3muK3x87kwuQCmSxPEk7YYgJzq42",
  "key12": "NKBBwzWQNWEMAjPp46nhRWiRssJz6M63nKHmt2Y81Yf5qDn8BPHNLktTJX1YPEkpFKtBfvuShR77Gpi7xKSFBsp",
  "key13": "4EijBgvxSw2SsqZ8i1w1SphqEGpfgVpSNHca98CRoYmyuiUSoq4ZicDkVAKwBacf4oYZhuEPkuGttD7dixKcJeA2",
  "key14": "26VZHiaptGZK2BNeBUxEtKFSxVypfggDGLqsXZokrcGzTmW8VaGV3ppojq4obSvdAMNAYRS9eX14MtmbPq6tuHTp",
  "key15": "2rgZJ3ogvt5rCd27WKbjj6KLujLmweenjXBsTjtsy97MAwZrBqXBHVCzbqd8necPq3QMhZ3Jk1daoDPD68hJheDt",
  "key16": "3kAetVNJUmB87YUz8Bg9bKHQngsPG2XCWSACUbwua3XBQLaqMT34vknPKjfJg9oYhnfwbSUWKntRM56ngAXtCLCH",
  "key17": "3zNXywPi4bnwrnNczE5Zvsd5jipFbqfBWXMeCBWP23oCc5q6hRq3sT3pXvbJ4hPBvuxWXaasyu5pnJsPNeoGCP1r",
  "key18": "2wCxigwZDRWKcdWn2KwCUuUN4pxJJqiNsBaYwL7To4zNeoCAYgJRMDjZiB7gfhcgXTGkqrHX2dvBRRMd7f2G5SYD",
  "key19": "34v4z2vVVptFDgg36HcSGXSAaycMuwmuQ415surTMPs247YUFfEM8LQbewkMP8XLLJyPkBHamfuHfMj3rFNoBZJQ",
  "key20": "4oD1p8xDFB8MBu2YPCWXZPAKCgsmQsCHYvrPmMaVhjBCZ2oEUvpPom95UYHhUqCXTzYNbrZ9H44nA7sQPWoGEtFi",
  "key21": "33d15XULDGMrwFdQQ744dRfbZKgZnkg4bgDQXKoW14kUtnzgWkiEhSR3TE95ncWJJGw1kmjfuLG3HzEGuAuD8cwe",
  "key22": "rVMDFGa3jexXM2XxnPNTRYNVXFxymew16SRahaV5PTidzhGrR1ss6i9kRnokK1PMnmu4mh2acs5wMU2uo63oD1x",
  "key23": "3RUKkCgSCSag1ow3ahKeMAf2t9fu9NmnCQ7VZNUYpWpKvevCTEvXamqaRRsTkuN57n8ZxkmhENMjmA89ksQUUYte",
  "key24": "2MaRCAnDXPADgPJWFPcutFQ9FtBnqKkR6QXu6Yh6Yg2HS3hBzthFj1xi6o2AKQ8ZrsDCD46WJYWDdq6Er2zhSJNc",
  "key25": "58NAftDY8Yi4WxcNtAA24Hh69jf1rsPv4wLvnrpSrF1CkrwJHKUkSFhKK4jDtABhuzZT9GdgL8EBT2whYnRu2X4",
  "key26": "2padMzsWriemk5aP16KDYbeqoaerpHYqfw8hcqqGW8TY2ZCwUtvJdX4h5j4X4FNSKAZ2x9nECA1ywWL1fBsSf5TZ",
  "key27": "4se5EJyWNfp8ix94k2pkgyLqzVXXHU4bXHcJymRwUvbrsHHeo3HmQ4be9Wrp2KVaKcLUX7mkEUhcP1kUxyqMjkTc",
  "key28": "5F5DMmSFTzgxExCZ8xVcnPv9EEDYykAPFtNvqUYwFbSYyBMhyXzhHvCrP3FccvPnjw7anyjLB1V37KSZERbZ4Ppu",
  "key29": "4jxsuUy3K9FkKLw61ghHHZMCGAWJKvPuGWmq1pLuUASKG3QA2iGrzmjKQfEkdNA6KhjgFJbsvFSHdES3KiwYRpHc",
  "key30": "3i9eKEDxeyVxekU5mGZh8kayqaVivNi1Wfdr1xR4EaGpiHtVq7jnyC8Evig6hBN2TqH31eajvgXNy5y6rVK3v2ZN",
  "key31": "anHfTzJUyunNx6sqUqwTwBkuSvmtBu72zatXNq4HdnYFYeVpBU3w3eWeMPzwVBp5U3UrcN2B4vGbvMEBoLKJVhL",
  "key32": "5ZJaiprq4Cqu88kRVUBStqxEAVgvDWLdNizb8fAaN1TvCnca4S78GCqjXxpBbhGzgxeD7YVK7YtwW6hySV6TPUm7",
  "key33": "2RsKfpy72Lz2nKU2nzuB7nZRfuHRXf7EiSXjKNZd7L9z16he3J7cXt9zNroVUYCF1HLUK5nHphGKJc4Sb34A72uv",
  "key34": "3QbQf4PDAhEGHzNAtcm2R3xpkaiH2woyAmMP2BYReRQSkVZGaKFRpEuQ9xdSj7NTcMCBTVQxvcNtDTdGQ1ad3Y8L",
  "key35": "ezDqkUHew1PZokzaPrZEov99cxnZmDN7cbP3HZpwabb5s3upKw4ZVKBQ97yNpKbNTr4wb3tG3CMSW287SRDTvhU",
  "key36": "4yxo5SXn3UM9Un3iDpjjprwoVHXaPiNqkh6SnvndGnFHxEAMwWYzf1amDQHozWHCXfM2Sf1WdofxwbzSryrJrqpU",
  "key37": "4pPynSd3A4U4B4k38cdx4iUFbyMEVjYixszNzUg61yb9GdFN2h54v7yFHtZTwfVH2gWSvLqWRyePyuzTBiYZaYnG",
  "key38": "fRaDiriKxTyAkCiaC7LgrL6brrkyzTuNHV99gFmsPM4uWbc8iiq8EAJk7pUcjh9VZGoqGSpD6gqc1PCxP3qWpuL",
  "key39": "4eoxrDJddRkgRCrtj96cYEWCAywXq7QaGNDSf1NDGKx1agNTktRA9ymhmpF8E85xtpjTMAGobQT1BqvXGkvfpDJt",
  "key40": "37uBPDaF9AEwosso4T8EbRax5VntBtoZXeZ44b7f8BpeRc75pmRw1h45mJakByjHyrEr1Eiijuk2nNugLZjr5XWZ",
  "key41": "2M3jLi4Ticp7iLS5u2GbL3LbFUkebw8hMCw5AWYoRjXU7tSCAFWu9oecvTzYC6sZwQukxFKXjzDXhz5Urfr8mBb9",
  "key42": "2xXSQACgSHm3fVWVxF51rpNht28fiugWPRA2Rxib84fWo7K6wrWWYRbCyvsjqB5yWwBnYjQJSJAGvL4yWPXj6Dx4",
  "key43": "5pctrhXx7AfKExp6RvM5KzhHZjtsMGsvViRj6TK82TiGgnY2G6CFpr6ygyiCjhaXAcyFbGLwyVcTjdu7r17ec9yf",
  "key44": "4PeLP61SkVBjsjJE1qSSvS2Szk8tL8EVQz2VGdwywEnkYqzWUZBgMLszgXzmRPFsRox4pUw9uwEReJqFSuTTwL4r",
  "key45": "5nLE9TsQPJpCDYZtbkqxY24s97JYMFUHUecLX32LtNThv42RGW7fn35HGpAk9vKVi88Fq1UhA9NYg7BWpPbi2Y3f",
  "key46": "4AAmx9wQbMhNN4trrpvf5quFhJrddcH6SALLqWnofWv2xC2NK5nPtmbMZPTRF3fseYTVaPMXyJn3ffFhCLoxWade",
  "key47": "49Bv4eon8vRoSAbCdGaWBZy3vQ6umAkBmnJF3j2soJ2dYascEmEGUiYcuj1mpPL5Yj89WAAb3p1jQ2vcKiNHV3HR",
  "key48": "3heReA1K9z1S6F6Lb7wBaFvqRzHkz6hGxNKxgVR7oLcrZBcbRob1NmQA96hMfChZKmB4TySZTSmfp6ExgWhHGiEV"
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
