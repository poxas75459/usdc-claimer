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
    "5xQCaV5n3KjB5p9H9vYyr28BjG3cCpMRPhpX9AoFKEA6kGNFc8bwXpSv63proFDompFpkuBzPWcikocvgG72Q3E4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KqwBoHNp2VMm3XrfM5GDxGQMCrt6EJWoBAo4eHnCyE99LUTXLeSFS4P422yYqh11UFkhu23d4sHkxtv2fE69gKD",
  "key1": "2r2fnZa52C5D8e26zNCkxzEGgdaSwKMPiLa782am76eeNK3DjJb2krLjM8BnL1m6uquQuRDA38wX6e594itxmcqF",
  "key2": "3uSTXhoyuN1RZsyspiKaXzf2XJKC5Z5bVKGCqp2NmVzhqaKZE51yezS4YDjJpkAiav8Bet8fMF2yqJDkMVCSP32W",
  "key3": "5bN7fj68EkoWnCE2WCziFFokYTfyksXp5CCyiDcJbYysRuDT8GgCm7HoRwAQ4k2HRparLR4YEzWU1YNoSdGbmKLG",
  "key4": "368eAwSXjun4VLwLcK9XTBMVWmm3oAt9ShUZgJRPeoBKDwJ9snGpV1KPY8KokgicLUzkWLpGsUR1f6XPhk8qLF1g",
  "key5": "4n9uCW5eaokwQYtPUyba1N5zrDPGT6iWxUDUAdMH8kmt6gAXZxGyBHFvgWqe8RKpt92Z3ystp23PKBM8ha4gzQuR",
  "key6": "2hHzu4bUerqWSXhr5rGuX3pGHFMHnEostb24kb5B8yRz31qYsjr8gjDAXhphfrarF2jovyAFyA7CP5u5AXWnn4xN",
  "key7": "iYVdccBpZ9R3SrQjWa5oJgqxifmtfCBexU12Sqi3CAqodqzbdtCu6hG63NwLXo4FUKVm1ZTRMBRYr7fDKVgAP6R",
  "key8": "UCf9nCTanebSc4449mrag7yJF1vecy5Wi8aCD7BZcLxQMUSRkYcfgryMeciLUTVxvGuXyRSVDn8rwcyWFo7c2ey",
  "key9": "2Sj24wWxxa4ZLWVxrkzkvsCkLo9WAReVFZXJZxQC5Eriu4JQgioi2gdssdvcaJkAQV8FoLyRg1VjQ4bLpyJpw8g5",
  "key10": "3GuH5mYEp19z8ekWHJRGqM8Pthk97ZmX4nvkKzadxDEe4DRSGfJZ6sHmUWTzfvTht7bZ8KeVsC2EDMU5mYEBWoSX",
  "key11": "3JgseF7dE7QmuFzc613erXQy4by9v6PApbzh4c5XoQ6vef3cC6niH9CprbfrHyAtBQQBg61nmUVAUNv2dfRwkfBv",
  "key12": "ujxHEuz7X2iiuqxWa7pgBYh19EZfoZL7HHMEDKJ5qz1hxzgU1fYEAePRXu4NbdiyJfwvWAH25YDdS1kgJ26HRif",
  "key13": "KmoEk5YQjzhkLW19d6Ke8owmDYBgNN1GJubq94uWeCxan5tzUZJ3a5ecoYznxC8dvAE85C9bw8gGPxgcgG18NkQ",
  "key14": "3NiVRgrN1LFDfh5KPxHtHhacAcoCrxJG1Jqsj87pyYwUqxSVv3FvJ3HTT9ohSJHxnPFaUwYYbg67L8e9x6NYx3E5",
  "key15": "3DTHdNyKwRQXyR23kLmYGJhEDwaFNpFUFBZgNe8K7WXuzVynVnTuofoyexsjp1a6hii4PcStVBX4adGvR7dLTBZf",
  "key16": "58W2sFSayjRB2DR2sDkTp5BdkKxCQ2UuRTfjJTwRcEx1Y7WoEgVg8Q9wefFnEZUXmGVE1hX6aKmn74PnpDfBtTCb",
  "key17": "2R5fzB6Grij3avDZN9HM6tWLtJTeNqGC9krWSAuh1fhMUCU9wPULrgNAsmkSNtKryxHAYbTbgh961ouqzvTGUqNP",
  "key18": "yYpBWTNRSgLPtfKFs641xJMLRLsnNEsFLxZXsxMzrWz6CEoRcNkFHEV1Z9RE9A4h4oHkfrJyawsp3S1J71cazow",
  "key19": "3wiSk2zPJL1RfXhuMaCL2Ds5QJ8qiHS3LwK1sB8eBocxZtMg54bDuR453VgNvGQMQCyX2bQTQYc5JinP3HJovF2G",
  "key20": "62dtmpWZmus4J9mVGsw61M4ffWPzSVQe5ErSo2wJEsM5GfBmLQn6EiUCdyA3SfdqkEwSJGWGhyDw9UKgrZoRDqcY",
  "key21": "4uTVeTkjD98dUArNXDsgHoNCiaTpfwfYzjhBzXEmUPVQqJB9sCAw9E7epVAz91zcTkmqSkv8wNam4zLuhCMCT2Uh",
  "key22": "3DD5hzLcMHEG3CEvMfd8GrSEE9g6mcxEih9i5ZrCH9PX1XdR3dVPhvqKUUcnEGeVRMvUdQZeCLDxVSrVLc1RwfjS",
  "key23": "4yofFXDuDrVnkUhv5NXWipV2HHyfrfKnvhFSjw4WA7WhAQ7mwvCUaSjmzQzorhpdHt3ELhExhj2DRyipppDK8Rfn",
  "key24": "3fYtLEGnC1zUEJ1WWuLjunC1k73zC3qqGEmmmDS7j5ZyKdbVSD5gptdao6kEe8nX4ZXdfYSgEkmCuznBZEQ8jDsW",
  "key25": "3gCXLz7n6BPCduRhgucxRDQGRhrJfWukzEvXX893h2LZ9cYZrECFXJNFzgJrBqLknVBfYYxSi5YcdhHX6jX8Pyms",
  "key26": "WtZYHT7DRt5onFNm5gxSsdbxVG1Y2EgsuQxVgkq2t7cs19Bd4m5xmp13c2nk4ngZJzNTnfmf3gqvutc8eZueTk9",
  "key27": "8JLG3DxaCiTgE8XC6NJwAVJQQ4btP1pQqxizvmieBayWKZCYfoNUq6nKxur2fnyjLsBFhBtdouK9X6FhqdyJeDC",
  "key28": "5vKMNL5g2KVuz8L78DTvoDZvpQRX2NerVcHEinWiXthGy3RMXBUc2GCL67GY17RmySaVZaagCjY5uFhZQV7xv8Mi",
  "key29": "2JGULnWpmhw6Lc6hPCRkcPnFGQnMZWstNARY68tPDsxWAougyPn1xtxvbgpRR4Auh7GAaQccDTxCmYMTnnHFP7EX",
  "key30": "4K2avVwEDzztt1sMUqwFQWV7tZuofC2xSnRUmrw2fmYFhrdqv85dECo6u44pGbPzy8HZHVKr5FMhCxgQkcREznHL",
  "key31": "4LDvF1fUAPWCMU84Zd2XtRQ79NdkCYkWNSkveMAYfr7wU5TqBE342g1pLgY7ua9cuDi9KXoAs2CAUJnvKinEmMDE",
  "key32": "41uFt2iccF2bctUaDn4SfNLaTRzM9XHTCogiX4Hs1QHabJnegsFTdfqPuX9Shyd6VswxpF7XyDJMmp52HwjBU4U7",
  "key33": "3HouUu86Lahkzkd8hRnWUi3WGLXZSXPTG4sY41MoyzZqzTBi4QVwpjd6fbFwJFXQbt5Vi8hmgD4Cb383scCU6g2d",
  "key34": "2M8bHX2wtq3chdRg58Jsxtu8mrA4SbJfcqqFCLAjwSXreAQSeXPKUw57YnpA973y31S2CzrrmPfBQfk688Qfqqv2",
  "key35": "7CjS1PpAnPNNyA91D7TBocghme2PEfQH7GC9oevxk3rL7t56Jj9T5mbbmdMgBrVoSx2FjbAgobYLdr1hX849RcU",
  "key36": "nH9sDBegkE9wpZYDCP87b5oZ3Q6k9D9rE1PMnqfRcSLJWPmCjFt6LVSzy6TE4QyXBvCSK972m64FK3n1sMN62mr",
  "key37": "236XncNzW4UdoV82xhthyqjGyHJgDNVfV6KPWgfGbdP17sCiAs1xkwVQJcKCe2cbnstPdmPvfhYx6wJEtAQtQSuQ",
  "key38": "56GwxzbZP2xVsMMFS7C6eQygnMUJy8hVGZ8xUsuL6ia5xrhyLXftA1fKHu2hkmpMzuyt1sSnaGKteMFs5rSJp6HC",
  "key39": "3Eo9mLqCKcJQv7EVoUqdp4qhkYm6m9fEKkm6WkE7fvMpqZth6N3585FS1iSDQ8cPULSxVPNsWwwTxX6h5wC3tmcZ",
  "key40": "2HpgnTdEBbcrdssLE11FfbDN9hsXrhZtjz5prNzpfyR7p92h5s3ShSvhS6JNhddf4gwr1xupeic2pZWWqRhS8Rot",
  "key41": "4wAfSSBkdhcuYQ8j5wHZ4sKQ2jLFytQAsbUR6zpzs5eHRDVDUKErEG4j76T7AkmnzZsRwwgTkM2KMEPAhMKfvA1T",
  "key42": "3prXCxPND1KU4xtkcVXx4tNDgy7LoHvMEg1AHxMbgXsiSHfoZZVRj4j6pq2EvEtvHYLkbkzTfWeCneibCaBWTPPF"
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
