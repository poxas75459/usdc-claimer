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
    "4FroxvAgZFdzwLVAxX3cLB8PfuLU7PGgyB6oaw6S64YXuLsfk4J1fGCjn4mgpmmQ9Za4Mve51kUVHZ4cMsEiggCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E52ZTs62YvGbWS1M5VKV8H9xms4yfDkNRtr4GNvXoXLuWBi8AMhcvNwHy1SkhXF8ytmNne6ZqtwTuEb41GcUWVZ",
  "key1": "waEb9AUgHupQqNQ5HRtsatEXErPKC74Xhdpc7JN8Pb6J26NeQ6LHeT1fb1vB81Wq4pQnVnvc2GWS74iCrewRxuP",
  "key2": "5cFDUUJCrR7ZhZUcvzNkvFERgvWLmPMcwPrtAKoDLFMMgBHGF48WuYjL5j8S6efADLFdgekVm5WTy2MtrXwSGBen",
  "key3": "44soCjaTDuLG1uX4XWKYPNXnUpE1mYNv5YYuMsG2RPcEquWEdLBRn6fhrgoRzy87dHnP6DE5uJLswiuMXLBr2NDo",
  "key4": "4sJ8mttbedvCSrBjpo7KTiyJ51n1gnzW67Sqa9Sq4pV2EqB2GvbcMKwh7z7tYUJEbxPjQPaq3GcurSoEkFWcEXg4",
  "key5": "5d9WkuxGxxt5gLiFmSjp1ynU634tQwGkgwNCAm9dN47z1Cmk3akYAdzfpEqsQjvcQexQtv4qmgt6n8JxnmMMt2PR",
  "key6": "27ThbkK2aysVZvu5ZKUoHTD34ritMP2QSzpaJQzjzzH9PduCsz2UEGir2QKsTCoTMKGrpn5y51utojyQVNn2YzWQ",
  "key7": "5ChRU92nwkCQFpFxRs87BoQUhMcm5kqHvrZ43x3UbsZ7YGDy3W7X46FETDSzhoeAs5HXTm7PUHDHxZE6aDWBXY9v",
  "key8": "5ve7pxE4he7iug3Ri64PRHuzZLLJXKekmnaFraKdUFJdiXy1Pt9N9xMyuiWwMe8Vm5nRaYpN5526Yi41UZLtd7GP",
  "key9": "9E4UStusy8NV93WV5ozuWLfFaZfwtwrDXi2u977tjVVoRFYZPDpNf4jTMWaXz2WAiitEutpwXe3PFjxYK1WAPFZ",
  "key10": "4LSXZQPoHp1WkwLFQsSpqNbSx93MjUftRx28KmiJrUujSAUEiYBZqiLCjH7QYYTC2spqMtWjFh8mDfU1Rjev7QrK",
  "key11": "2V3taQ9nzNHJu58q8W7VjYQQ3MtZ7rXPDmKdtLWpdRDmp8dkLybGRiHAMsxX3STuSwX8Z8GbYswaDkMkQwVyL2UG",
  "key12": "3stwqNpmit7Hez7XoFMcbrhVU9grotpGpJPiFUkQBme4GWuQC1dmq43AwzbqhZ7Wq3bfRTrRqkNyXg9dMRXrWqDa",
  "key13": "61X5kwufeBSKRAciZHsSwGp2rrPbR5uNUebmLqTBaQTfqekFFwamgdBzQnVhBtcJmUvsSQZydmQ5od7kbxMhrEo3",
  "key14": "nwpU9Xjuuqteuezrgd8WZgrdq5smksZmVjsVhFpRN6T4KRS33T8suFUG8fXMztdYyUmAX9kPbcRVoVtGcW1AMyS",
  "key15": "5gUzagnaEuWtSjWb7Eujq3zp3KXho71Kgp9SQp1wfzDdYTzXgEKhZb5qiuhxDyGFJKe4F5PkeJwGaoyjucK5Yhnc",
  "key16": "3UH3eMgo2JMxq7u6ETHfxdmyHV2AZ4zanBMrjascUoYxY4Z5Uyc8sKnWinVbY1VySYnJTpnmLt9MSXaqyGFuWH2p",
  "key17": "LDRdWvqcCtHsP8JNagx71f1g6E6gjHzMbWLZUzTod7x8sWtjVpijjKxQ1esL7frDrz2a9bmc7A8RwdzRGtLPQ8Y",
  "key18": "3T4CEPGrA8xS5iKgu1DZsV4a6DYyAFBPLhXnyjqsD9k5uyTukAaEDf3wWVPUKrzW31oKf9MjdMX53cghzhvSV4B7",
  "key19": "3tbEu3tEtnd3xTjFezMX3ELQqFf2SvswMTQvWWHrTU1Q5NFZBp6YKcJZyLBJ2F6xyWHrC2BwXEVSGdE6M6rSbFRt",
  "key20": "3CNapTN8iBBbngwLURXKacG95h6hK9cDBMAXnzzfn5x3EviEGnpCrk6kT2A4dqk63NFAB8RVZgxC7jTZZuK9Agxv",
  "key21": "4ACyDggXFDwpFsrZuoqUhWJ5Nx6wLoKZQRPa4Nyd3HxFcwMAorEcfTRqEuCyFcQQLLzGESGz47XfMpeRWvuXAihB",
  "key22": "q771qr8XvUotYoxbWQNgZrgc2XXMVsbLhqyyxkitwFbLRLyjMNBT1nMCfkYnAyTLtX7KzVvZeLzdCtkvp1qUDFD",
  "key23": "3fBm2QorcwXoTemwEd1b7BjMA33UR3594Sb4PRdZuuaCasezpufj2Jagjp75nyGaf8rj5znzRmgjjHx4PXmocYp6",
  "key24": "3vCXa9NVmsvUaWjb8dacZz4bJsKRX6BSjX5wcm1jN7q4P8ti5jF6evKL2ce71TU65ignm9h2Cj2t99rsaeHesuyQ",
  "key25": "3FSh9LNfa6cRjj2HKKgASKxf6owta1v5TgzkkKKFcurKS14hvmSY2TGEdQwSx3r7LP7UMuU8kZjyUawwUJaX6AXH",
  "key26": "2wxrYuGQRpXE6FWTdt67BJi7pXyBjNWJY61HEEx2Y2QKSQoihUXhdNJF6MkVjdWS9HtEEBaPi6EfsQVaNkk1SMS8",
  "key27": "4qmrXAvxiGEagWG7E6n3M3KixFLVc7xpgAdXsuXEtYWCUEyYDnfZF758R4t55ng1JsZhSY9mMFmhikbsszEiRvEy",
  "key28": "UnB9Frue6rtmDihp7eyCsem2Rdaz77H4wGbNUbbSyZoueB8DaYgqivQW8y1g1mdPdvWUuVLALZ7PXkXFqB7VMms",
  "key29": "oAooNeEsYKrm9vQW1mspG2Uka5payd55sy96bv5Yg8yJ1fcLQ2LuC1WhqgyKrVVtEPY5CZNym2gNitknjjnhizU",
  "key30": "2dHExbLQCwzz9yAVdcxBWwY9FPLgVByj1Ketg7FHfGdyrirAjjjk69vFSdwwL6VSba5KoXci5asKu3ZiTSvq52Ak",
  "key31": "3XkREEFKmcaKdVPuESoUXKn7zsZGNcSimTuFJfi9ndtApJkxwijToCuEqNK2CpDVqfcbqYsvAU2JgcB2MiX1iqTj",
  "key32": "2av5o3Pm4QkDYz34HRQZyRmBdL8tkxtEcTffRSJBzYmHgWvT3PkvNAuiKnWocThdbix2NsxWhTPDW8zN2zMUS8Wk",
  "key33": "4poUstABZgxuWSGKLfHPGgHYmrywi86RrxWDFZqoz8Hoy3zBR4APXaRG81MyLwUqaZKABhywBYAU9esUpPxAFaEZ",
  "key34": "26GxJ25QJ9S2T8dokMxBgFfJ5hUknyRdysJMP8F4MJTVwimRCUaTfmavVVwqRSEUveu4zSV9217ChfTrD7sNT9sK",
  "key35": "75zBia29rRWtRP8n5MyNCTnxBFL4uXE2AKy6eg1mcc3FpC9ekYYAdpKGHQJCPNPjZVPc1fKNtJE2pBpXxi2Qiv7",
  "key36": "4wrs3e5qHECRXXrVnh7HtR5d2hFbyGvwHMF512GUMHw6jfeFPBhg2VeK99KjRne7BU7HoN7MPn6yM5bZMKJdc6e3",
  "key37": "5aNzMhhFuEkktTVvHc3rTcszSGWJ9ytpaawEFP2Sy3eGLP8xizaaPjN2QgnoC2GvASDg7MDyeqPYy2d3phqPJ7gQ",
  "key38": "2jb9PkC9q92YDXYg4fz1wkZVQptSrevTo7V1cJtJuiUdMyFEQCADPpK1yTrRuMiaENP24HQATPDnbiCbNr329mri",
  "key39": "yfBDptmx9ANHdbdGY4j7NKULfTbNZussNR5eDjRfQjkSGVWjxKzvZXQBModCw1kvXShaKpoTzEtsaef2hLA6aKS",
  "key40": "QmgcmqQCzhX6zGKxmv7uYj5zX6iSwyf7ZhrTtV8863ZGEj1arMmdJ9oipFrSzjoqzdbrrX3V7qk7DwCBuRdW6oy",
  "key41": "4T3FQDeK5CXG7pRzxEbaqsadS3Xto8XhYUg5BZuyFSR4kXNyMFumA9una14LJ6xjmgQFdQfZtawvBsgUYi2MTqtN",
  "key42": "3RdbdD9RK9e17iyWfvA686vh5XwX1CmVWcTMoTeuNDyzuvbE2VsohePihn3d4U7dXJgmY6Ra3ck4K4MqpnsTuecm"
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
