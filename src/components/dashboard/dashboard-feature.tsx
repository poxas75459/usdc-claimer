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
    "46zaspSAobH6mfkDZ1vkweiWvf3SBX2rPfaxfRDC1sWbfGT5q6n4w3tfQ3kBBQRNjJJ3xrR4wFpB7HHm3egsgD2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ZFDi5RRXfwW4jhHiUoU6LUnwXA9Y81AzrhejWuJAbqz5XaMkAAMVb4SHRNECT4xDyfh5K3R86myQvhzGDDtJum",
  "key1": "4PHJPaQy6YvcbyeemvjNVG47ZeJ3th27dRNAPkC5u6kbShfDo1rhtzbaxiLuuXFAVJhe5Yi8HYZUEHi2FrCzDc4Q",
  "key2": "yAYUixwETSYEkn2hxQXR2ArSmsmKSvgrRedtLUnqaLixEQW6UgMig1gvrXY44KLjR5LJAjWARWsYZ2rJbGCPheU",
  "key3": "jyv2J3kdA8fz6nWJ9wgA6EobWYzdcAPZesxGJpGshazs3kZ6qumKravqDpAPqke3r2YiVL7CPoMt8UPERN91CjM",
  "key4": "24tbjSzb13nsCv9QAY1qyePyNqNny7PCwhKBTT4zwLD45Gw1f7EZU8STJhvzZxgPsv7Xe45EAZb8ZVb1tjAQ6wRJ",
  "key5": "2UYcT83Fm7JwinQmy6FugiqGxBMSJoyLA9p55Xn1iLWuYzkmuicBsHExxGu1FEecCBkM8uTfxPmP7zKZ84Mc3kCf",
  "key6": "4VJbRD6hU99VRWc7fdgCZke7fxnMDhXDnc33R7KhpGB8BuurWyDychp7iBVS5migzZcjMadmv65aZRVEaR12EChE",
  "key7": "3USYHefcpqt55bRu64NkPxE6ctK5csKgqQBdahxS1rzQVvEhfiQ5i5SsMyc5cMYB9mgNXEfXjBHLaxCt7FDi3GhS",
  "key8": "2QHZqTBu6LzWXQrnnerqW6X7Q8snAN9YSJfRFJjR8fhHcRsf5hLaeoH46FWvrKHc3gW9GacLA6TboEqoA3vZMtTc",
  "key9": "39JqAbypT9NGcKuZwvjA2Tj7dnMnZAzZt3e12qBrkMchS85y1zHGCGC1c2mdpUeK3yRENbZkeHJkGzn3nR823JiA",
  "key10": "67ZzMynBmvfM2TXwGrPCvn2CK15JuTM8ArfPkmptRFNybxBVSvEjbdmYZoJGvtq3cSoFZw4hz9zg5humJB2TsEac",
  "key11": "5sYfvcdRmnRHiH32KKMT6G4yRCzXKrAvc824ZuRjAEtS1r6VfJTiREAqzzhkd1ZuMFGypkAmC4w7ScYDCpNcLbYL",
  "key12": "5FcQwQPYjkSFjWabvaXqUaoC9jS3nmvQYbmsUvbDgYempQa8fUJucKyiqvAAoxNQVSUwYwKaHotEXqR9HEWSPypR",
  "key13": "62hRwUFPWhurp8Xmo3TR4qFfjrfprHSw1bPG2vFEVvE51URHWotfq6VN3HNg83nfud2PhZFxcL2cD3e48ZY6Dbn7",
  "key14": "46JPYTymvfFX4FcaasgKkbg91t57B4KuTp6d5sLrmxE47s5ZGxnDFuAKXfVXA7buyLNHfmfM6VxXBLBL343qQX3s",
  "key15": "2FxuDA15y9ueDDK3Edu9ihRSpcA7ak2qN2ixZSPbhnq4vaz2qXKjLoeuow1TBmLaGMe1ksVRNszRjBstxcrt2SK1",
  "key16": "VknsnahXk3E7ssuyBgFoWpQfZzUq7j7nMeccyvhovZfobyZUqV3ZnDw8jARMz32279gMMq9318V3cWaWijsoAed",
  "key17": "57LTs3AUn6EtahKg9YveLhQdfvQicvtAMS7AKj3vFLwXKoJWQij3Rbt7TqFv5v1SJpg2qaYaDJDRE5RHRrDj3kvw",
  "key18": "2GPiSbnqjd1UzW4mrpjafnXLrwC7neboUiVkmcTB5oVKYPf5bw2ekxFP2GMNVYQso7afKUUvu8z1yYLn77Y9MQFE",
  "key19": "63FUU6WaZAKZrRdJw3uBgo8VmRTUnCiMgQA7hbdncTQ3m4Ss2d9okW3kDUR1goU7wFD2qByGks3DHPQ268rJ4J5f",
  "key20": "Ti3991R9L4z5jQ9qintLZrT5E8xC187YDQ7oiizcWgYcxqoAQXW43hCn3E4wg4i4QxFF1LzA3D7tLahdJXDkg7u",
  "key21": "it9w7ohVYrBn6XBxitN9fYq4E6zk8R7YUa62SpQMRN8BSYStR6SdzqcJ6ZJERJzHL973nb25HecAt5sB7w9JRXW",
  "key22": "491AUvjKqgE7yBDiD1AuihxdH5t29Pk9jGq5emxaTp4HqsHGym4u2cNKdfjK5uHC9NREB7bR8r2MFj71bbETJamZ",
  "key23": "3XPJvNHLvtzCpqzYSrVd3vK8sKjSDp8ez575MbT9hNZi3RfNm3mkEaQJZA8NYFoWVu1n8nDi9rKjePs4RU3YApig",
  "key24": "5ox6viW2Um38yZKnnBf24ipmRVbHESyvR7shXgettE6qEcWD7o896i74M9hgvFrCfjqcAWX5KsicZkY3KwvMw1Rz",
  "key25": "PbYcFMGPReByoD3tvZxtTwcpM3B37xr4aAH73QzhTFBTSCwv4jqmSwNXYD582thVm2BVbCdwX2Fsq2zYfwGVqpn",
  "key26": "2a4CLHkuWoHMNpFFgjGdLBjbbK8G9vZPZDFiZ8CJWcShK1GKzhGxGSxeZ74NfjJWhWa1XvyAn3jh8kPZkY2R1fBp",
  "key27": "2ne4GDdUAwGor8iB1aQinoJmfzEQPpUMjL9SfmMcuh98H7b8pdvSr8QgaxtA2gA6VmbVpbpfSuACTFgsXkcrRPxX",
  "key28": "5Z1sxH8WQsDCAG2zqZQAHMk41gt9sgYvSMB8eoPnB1QKumdC9tS4Di4HcXKCCuYBKT5rTAGgkM6spBiV6wiy1xKb",
  "key29": "DsvKg2ek3gPHWpJECDvj7FzfpU84gNCzhBCbCS95RaiCCqEVaUWzf8R1M5E4jcgbh9k12b6hbowz6MQSVTSkkSo",
  "key30": "31FDKrF1ewG3uXVKvKHT9MrigKspND4wz78XfGQ8MBMQHkUF5QmyMfDgbf85LzpZZ41SMVcpXhXie88UjQWjkFHe",
  "key31": "Dwu7YHEQV7aATN1Dj58mbvWqV1rboYAAWBiYAyq6u5UWh7CKtD9xnJq8kPw4cRzA142ctBG2MHzfUQMKmSXhdNa",
  "key32": "9pfXKGesyQ7bjPW74xojKgTzSRPANA1zGhCvKFyrMcBsciHV6Fkvbp2eKik39xUX4Lhff9PnQWUQ4NfA6sLcyof",
  "key33": "29mLNRy9RakLMGh7uFiU8ncExVK9puE9wX7Nxi1LN1zQH2Ec5rChq41ZzvfasYu5RMd89MLaUUqfJND27M4NK2ZT",
  "key34": "4z1wTx52E9JTpqjusVieBoi3dJ2GtfYUBuRF5QXv4v2LtqDShhhrqHZ6U1551kCY3Q3Uabg4a4rUBM3NCiJPkPgb",
  "key35": "98iEkB8pq6Hq34ZdYy27odxwQfkhKvr3f6k7RdEnMBAL81v5mWJyKG2wdHUuHMq3BisQj8sQb6zfd91M3QsszrC",
  "key36": "2H7kBQ84krq2KfBQmrzvtfvNg56WKQNs9r5mMntYcM1Nu3aS3H9TKvPYGSJC5nUStcedYRLw9BBLVd5JFt2ZcBDt",
  "key37": "oVwJRWRJb9Xrr7Y3WadnsgQkNLJkHwgMX7SambfyQkkh6hChKkXZu6uH2pPKxKX32XpD894gCqjsWERnaY2GRBM",
  "key38": "5Zce92TTPFU6qHq4vwRLiUbKnCEnNUj86uwH8BuZvF7LczE1raTGjYDiKzg1wBHfdUEebEJ1G6ZHw8wdKMcF3HtU",
  "key39": "UHT6AEfJXohqnUTLAjhgWDpfu6zBgcieu8Mm5KRRgNtF1S56hpzPqxQTEDzmip2N1aL4rH3UxKSPoLPB8omc3mS"
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
