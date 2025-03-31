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
    "2iBtxAs7CMgZsckpdR4hz4adPSqpZC33Rqpz1dX2CfCH7JiRBkQaau3LV5KKDKdaF1RHPdizbzFifBYhYnMaJuXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TEhK3d7xNbfCQ95AuHAppPceeQDQid9H3oizpLviHzY8EdSn8H3bSSdbmyQvPCXBCtPkDModzw1HCP9ntKkR5iR",
  "key1": "5gKysHvhwhBske1aKNGDepUBWkYr2enxZeTFmgYLKv7xUm5WbsMe6aeAvg1ESwYofgtxVU9TYPVUvbrUrWaSANd8",
  "key2": "3xPxa7hbzY7NfNgxM9qsYKDfJ1ZX78dtxNjqxE9Tkzy8oxaZEeAUueHijSNnRRytvPTqqTr4uX1YBoTAJJ6oT9jQ",
  "key3": "LHbXfzPHFaRg8emDWfszmECdEfz4k6DdYEYiKPNVQrBjymZosoztZtiRquP1UNe9bhxjuBQUnmw6AR9K9GNX3FB",
  "key4": "dAedEXH1wGG3NfDwYsSf9J8SFGGe9WiaHVFUz4RNt5sUi9sgvHx1EutxqpkDmushkkDzS1mb21AP7KcZdXEmsyP",
  "key5": "A5S3hZ1XDeBvfEyTsA5geCvnL95GVK4SAZeGqTDyianszPapQcL1XwcriMoBLMA6Wsh1hxk3d24uKSnqW6USyrf",
  "key6": "5S7N42zcbiMv9zqdMxuzWWjRMgPuyovBKBn3WeLchTqseLi54u96xCCXH6bMHY7cxmxukMNV1JWKkV4qCwt58HFB",
  "key7": "5mYmpRq6fT3iKVSm3ce2Bq5zSwuaE2FUCuutpWcXb75Bca5sBQeggqfdq5Z8g1SJeoCYwLaDUm36D1UDBiZczU6M",
  "key8": "4ryfcg8x8hntKUU5C8nWnHLs7KFtp69kgooARDAPgHpT6n3AAnVBaxEqkfHyqAbAbdB43CdtovX7Z32Gkb7H49X8",
  "key9": "g7rzSM1Cd9m8Gach4iJDfrcXf5yUR2eCFRrW8CkFuiiWznoAmMfSzaZThb3y1jHZgNvkACCXp1jAPJ3sHe1vZki",
  "key10": "4wRT75xHW3uuKhAk8zdZgDUymmD9x8hzH4BuyspPVzJq4b2Pf533FgCYxq8m4eSwQUfQ5sqfozJwaFgeotDUh3Ay",
  "key11": "3CNxU7VRiJUBMkLPjy3udKcFtBcCPYEV5zPwSXmWrb7WeUbG9RbwWLp6wNXnUXFXZyb5kyA9EmkRxRGRG37vz8k8",
  "key12": "55ENH2nZY4w7gMuWoFLiYN72VLSSxRdhsTPQNoFT4F7gj1tMaDjRbDEDJZpYbqbTZbeTozxa5k2bJXRqmkJzFpsy",
  "key13": "4dRyNgQCJvMCgHKfkt2PdNatv9EGUnKAR9RHVba1rxeHCB81raBj7CvDHCAcrZvgc6qd3RjvaYNeuT6P3DKUsSWb",
  "key14": "2e9FmQxiShhUJvzqruaE94d19eeeMo6KDe8vVNoWNJjjsLhZbTrnS8p5RwSzujkZYbpq9oCTygiCxjoAA91EBVK2",
  "key15": "4xeMR3A6RMUYHrgP4iWyGrpUi9EsfKjBe9EjhKtZFzwpytp6p6J4q9QTfJhBfysk3uTRBUtNvB9ePc2T7BAL8MLn",
  "key16": "2CWNygzL8Jnd7XUWGvHmNrGkUd17T5Sre2MfheiuMWkjnUGt9j6zpV4jVD3PGkr7ArRFHbbN7fPaRHTaKQGFPFKb",
  "key17": "XXTvHEx7Yb2MJZSD9xAv8FE9p3uNyDSHVku4weXtd5P1VPnzhw4WNxdZdKDLNoj9d6zbLLDXzufLKFyRzxRJps1",
  "key18": "gAx6gYPSq7PnQKbeZY7NcU9BTt3nfiimnjWcn4CCiALi59M4Ndd6Re81j2fns99Ehg1Ucyi31jXx1sz1SHqBgBn",
  "key19": "3QJd9GoaiZkaY2QXQLWESA919jPSC6bhY7F5p2p6VGQfzAGyJ2tQR8np4s4Jjor8FbFZGiJn1AZGTiUF9xTnXLit",
  "key20": "4MWouyoiNREyy4a9bSe8179mqkqqh4pXXzkgbKfFRDzhPgAuVCepLCenrFjKwaYUqosgPAkSwmvDgpRonQX1xepR",
  "key21": "2jVjbHWnZ4FhUxGcXoP8yZqWjcWXgFfNdMBqBgx6ApMFQWP5jgFeEunfnM11yYDdRBxMxRgtACCzvwZAQUjsXaC",
  "key22": "4fCiPs7gStxTCL3t3dJmXVNPwPYX7bYJEwddcXTuqrzt9Pw6PjK8X1a7q2wPiyJnqjtSSCaRPjypLkR42vCSzfbe",
  "key23": "3gpRB2FnDCCesmBTZRbCaDuitrGbMfXikqPAvjmFzQ3oD9auepYrarWg7R9Mx9f3hHToRq78LcHDvesK4G2eQg6z",
  "key24": "21jQWn6YMgmiDnasskkNQGB2wMg1rHB1Dp1oQQUdMhXk9BfkGZaT5peMKNnkVwnxGWxA67Sy3JvTRoq9b7iCqKEV",
  "key25": "KyoEPPuAiJ5SxPTs8FHjRcSDaFoQHFx2F37LN6ibqHcficoYTdnmMhf6Xv5LzKjDYr8KejPL8HGoVCenx8TAVPv",
  "key26": "46qHu9EVBEp8AfhC791RmidSpHkJ3iMieKUzbidGVuxkTM3rPhgGFmzEBqVfSq2rvFy4kvuYobAnhhPxAtymrANh",
  "key27": "3XgVmKkMDE3sY1Z4Vm6ewPzC67dS4yweXqhx5o6JCBeu7waePjy22dY6z1tFHm1NUFJVrr9VSWpjmDtuESyFVwQG",
  "key28": "5NcYFgwdb9ZmYCx5BcfS9AD2UnAfvhJoxozBbZjqSkRP1k9D4fiop5hY4G8c3uxdtJFRKAuLmZL9Rn8hdpTeTNwB",
  "key29": "2yx8TSmd27cubghDcQhRpWEdMX39hUZ6yMpBuhU3tm2pP5BSNkn2JFovewmBT7Yx3vWYTkQRcEmEx9zLfcMc6Cka",
  "key30": "4zBgibumHhmxdDWzZqhLADdE2fSShzXGLRP6zZVCg68aGPmyRUph61GZrFDwK8j5E5VuTgvs923AiX5NcRM8d8Af",
  "key31": "3b6Vr4wFHMEGtB7GgNDdfcuquXbGkSy9pQh59DuiZwxDDRM6Swy7ErXwaztWYxaMiuzyY5F3Z86xfCQHyNNPigwn"
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
