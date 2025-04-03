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
    "tUNM6QonZwRwR4m5aPBYb55q4cw2LTBy59sLr2RbSeHMSLKfQ481CqbHHNXarzjNuNfGj9V16Uk1UKX5yqj3h9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TXPoKf2uBgsYb9F1tseRRGwyhiGuBX48rBRwjr99wEiD7vBVkWgvQa1XFzR6R5iihHAYwjpnreJA68hA3F58tGm",
  "key1": "4TB7RFLofFcRnkTZJzRnaFrBNaK5K8aj8SKMPaJCodRJesMhiHQtyLz2afP9aR7V7m2otHHE4HhG7JBJEBZopTyj",
  "key2": "54KxGkze31Lg8sTosELvBRevwVauTSB9xF1JqjrVjD3ZH3V3MaknveCiHgPDx7x2pYdRVxup8JzJYQQ3ZvMXaGF4",
  "key3": "4g7gBVFkzPGjtduhxaqoBRKeaECw4BHvMfgh5hvcdvgZDyrAUz6hBaGwbR7rBPxtEdWDWwiiRomUxTzXNvEwqenN",
  "key4": "2T41CvHDkoAZdsguD4FfeewPWLRqeQaHTE4VsbNyurj8G4MtjJXGp2VsGcQh4xvKSSf2EYsFSDuT1gsj1Bi2Fan6",
  "key5": "2kRvjHz2EPGcfA3esXyBNZ4m3Y4rp7bLj2sFsqZbT6Ke52ofMH4ruyD1ikz7CZFucUSQcZ2R6325V2GSkDdoUmi4",
  "key6": "5KLbMNZDm4czzBnErJhBZssaNhKvTQocHbKZmB9SKnudRUNzVePirLJtZB4iHvW7yHEMsnf8KR94ZGcKygmJhQip",
  "key7": "2NnJho3AEFvRLtFyXidCFUiXtPqkEm981g9NzqfPjejskoxxfXtK4cxZZhF85deJt7Ef2pTrpMqKixve4Wyk9f4H",
  "key8": "zNgnPd11UDJCwH2Woi2MU6dWUV5y3Xv3rQocF4AccsLxLXxaQRUVm9HhsaohxjNEGqWYratGCW4AqSkiz7DNHf2",
  "key9": "2M8aJ2gnq4qSLwY7uW1rbsFycrrwD1B7zMNKw8MJm5g9ThBfCy69bxJZK7Vc2tLDm9QqfRpPqo4eoXV7jTCBdY4f",
  "key10": "5mHtHyQFeZHSv5N8MfbZ5ek5pK9wB1EYSL2rBZKXbPtmV2X4v7uuamRFqAWVqnqqYPmjBiNj6ovHXJJhBrSW5aGL",
  "key11": "5dApdofZA4ohKoVWpNZBLNXPWKs3A4ys4d6qRBexx9syMFUdDdGBiZ5QvWmCdtp1BpDENgDJLh7M8ZjsJ4YPVMjB",
  "key12": "4PbhdGktLhynmptVhpkxi2qAAgfJhQoNT8Rq47Hzo1wWmuq1w97AYbDraQ4Gryiq9i9DmbqZiAQPEMYahQrdARKb",
  "key13": "5zA6jGbgvVCSFiHi8YR8CW3ukWhpUtLkyVFQ1aYEY5HeNhQwrAAqPJZtFK1sw3ors3VpcxSGzieG4jHSVxX216ku",
  "key14": "2dCFtqt9cxuCqZBvWB6uCXpZiqxS79uBWZvRqbXjgkkZeJw9sQyZbhH62TCGB8MnaFtEW4k7TgNqaeLfC1f41CBz",
  "key15": "3WBnbeH4KogVVtesZw35g9VrfsBYFDSMWz3Hx28zFLeitESGhgFw1ih39yxQ7BXgqzdHzSjTiNSMaoGNK7GTrYWG",
  "key16": "bEkN2uhKD3FwyvTJmii3cQFAWoAxetfyTtCjFYGzZM9Me7op1PkVHQz9vn1hhdaoKrA3g4XM1WfqegCBz7ygRVd",
  "key17": "5B7WgPp9vFsr7f2A6BEm2tn6g2JyzF4cqpNWtb36m3s5LLFvZaYjb5vjhJFG5zCpnho8rwE3eWvVErHPCc77kV2T",
  "key18": "AZmKAQi1YsDh9cphdFS26dYiVSjB22idM943AF2mVFEPW5mciTMDpAWGvzdaUBs3wSqNC8KoM8UUWxQoY5GKedy",
  "key19": "2a8c6ZMNJVi3LPErHm7vQaKsid1phf3KyaWt6kTADKnknTfrbMWeXVDKqJeihsavL5neWv4ZtPwmT7CHdw2ruDnC",
  "key20": "FaJZTrmdAPKYcFQkTooWYCruCAZ24m4ueMCaGuPLpyQyJoscEp4uMvF9u58mX6vbqMhDukZRdyRSyWy5sM7FbtR",
  "key21": "3h7UAFsK27dTAs7BMCDRRKzGULjxVeXyTYYYp3DF4AfXffhWdYLZhyi5iCHCGdHHiSZbnpE1Udn5kFBZhto8etiN",
  "key22": "3TokzzRUm8pgyPQb6GyiHTR5ZyHhVjaqHAw5x8mUpGeiufdT5qho3D1wed8GEh6Ysf7BAJ6cneaGCxuJkTnW1Wu5",
  "key23": "66ZJjpZaVXLq22DwqkNxNLkgfaE2UfHBBGB7cNJHdaRQRfP8e2VP8Fo8Eh6LZpeRzRumir7HGS6dAbKKCR1NoHwS",
  "key24": "3v4weNsPGCgjoYQ2V2zxKqSzZ6N1xAa6AxhGKCvgF1yB8QZNDzsn917zaeMkMzvb2F6d4qtwJbdBGmJuFJtL4e9W",
  "key25": "5wYGxfeBFD4xvs5KGugsJvvYaujPZwrkWh2N63C2ciGp6r3KVxh5S7QkLJsignrLwiHLK7edzrjZxmcfjR1jbrqg",
  "key26": "5Kx6pfQHVywAVttPA61uLmkvtxtzurYCm6bckTbnCn983xSpmVgT5CV5fet6Es5fJ8A7MKxNT7ngDtiKjZXJX5K3",
  "key27": "23YvF7N6PjSsNCtP7F1LWAKnvKuUMABovzeFjm4dyMDuHTNVYymS41pU3Ta3MpCbqYzveetihnZH3Qz2vFm1NkBT",
  "key28": "3RCZe7q874GZk9tzRfetLygG4Zkfs9RnCRHw3rAxgqb3cjfn61myqwSxBo1MuY4hj3dtQyjSr8PmZJpmZkTrFYw4",
  "key29": "e1bG3QJ5uAbZGGFKVUKw8RHmPm1AipGmZPXm6Z3aiKvjW9oEpNGFvp3FcdFFms595by8EuwCVAZZhvyoeX8szqW",
  "key30": "29YhR84ft1ioHY9tpL1PPxPuARKh5w59Fo9RsKBggVxMgy2w1824U5auSqjzNQHUf7pvfp64rS3istWrkh9nEpdd",
  "key31": "2eezb5yLixQKENezPEP9eR4ZXSwQDDHmvxfLPzqiE1zG7JAfw7MQzfhjUWexeSvLDZnAfJQNC1sm574Qm1zBM2Q2",
  "key32": "4FVdR6UoY2a7M24BSRyw6ChL8CiSTKkDiD3BJCaXLKfz8MnHqWqRnVxQ475TqYLuyfFotyQQKJ7Y5FFhoRYxriyp",
  "key33": "2ge2awLP1oqw1BuCyEuTzEbtZuaHvkiwMXVFuQRjEL6TLBkhRS5AtQBXyEtUJRBLmMhsRSRFNJXxy3r84pqwcn9e",
  "key34": "4iwpQQcgDzAfZLh7i714QBduSfiKjemmxjrTT8J6egHa2p7wZtYJ2EanA9wxnRR3RUoH8jUEzzKHvpGrSMyGHkr4",
  "key35": "3dgS8S6cSf7yybraL3y65dJZRFakPD45dmWGF4Zj43GTzCaYxM8aQnDCEXpVds1SPrcUxBNCVUGFhbTgdVVA4Vg7",
  "key36": "54jvrA1ZfQ49eW8Svjf13UpMevS2XNumhoQtpfLabHDuZpi7abaaa4AZ6CvbVKkfhCZNeBUCmbZPUzhDX4AtAg8s"
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
