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
    "42QB5u4csCyyeEZxjAHZG5qnHCoAYEA6za3YEpvZmiRHiP9sJ5WAuj7Y7ngZFpTDpVtRkqvfQc5yY7anKUecXKNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5toALX6evnm5b6Ymh985m5jCL8SV5d4647EkfwtYqtGEsQj56iaJhyRGxgRD42QhnyxmAtuNKwqiKbXuLm64KWLv",
  "key1": "3QexsuWyVkX6CE1XYPbMq5e4i1e1nKZ2UvQXHi1DuCQgSxQ2Nia8HxbmjpPbtHFdXUr9yGrWHo2r8CrjjxXDdmy9",
  "key2": "5j66J88YYBCF4pHbPQvP4yEYTwgdqAzo4pLEJRjQFUQjPWhV87y6ay8yPGLYyUYb1hzCR4yfXTaUikfTPPUzrSfQ",
  "key3": "5fCn15KU3m4oFTuiEcNabyYe3PUh5D4UvccT31cNtVvV6gg8nsLkwHDZ6QWMDH57eTy5NFkFdtE8Tr13np8tQWro",
  "key4": "5R2HBeidXFsAJvEQD5pMBaXpQ9WjqEBe7TQH3qEsoYpP1rjv7tk2igQ3qUzQ9kpSUuv1AVWmaMsibBS2UowCb4E7",
  "key5": "4TFmAg9FaeHzJVRuPBw3WdfXU1NxfhYUXa9NXsWHZ1xD3EcemTS9xE1os3M3kf2Z8gaiHDMcBwguviuFmuBbh5Up",
  "key6": "91L8uTLPfx5jVin9w4ENMFei5V8GvmivFTP5bM1entFBBbvuUQEWhhjWNs19MTdDb712evLm2oyvaHq8EohjgJG",
  "key7": "r61DjSjuzZM8b5oJUJTpfP9JLPxX55diR93FVPiGrzKGYH6kSqsk9FLHw5UD92hBmCrtn5sZgJ35vK4DydLCD1W",
  "key8": "ExHAvgd84LicZrQdfbPVFMdZ6asqmxtMNTanUs4Gh6hAN36XxGpQq6tqZmFVtTRwGYgsXsLZMY9quNs3WVaKcPz",
  "key9": "3dnxuCQqsM4eGTdyzjCuKDnRaCWvFjAriQTqKHRmrNEibZiWCYWv8VgH2qZkwGVkLa9ACy3foRn8kV3fT2UJE1VX",
  "key10": "3BCea9VkMxQijJNXRaqFa3gSBQVd37CRFVG75yLSE7dZjaBCVHbmmYF3KfQ6vkfYm9t33xFWrzcA2A6nRa6K6Ky8",
  "key11": "2Bq7RL5TLBTnzHGZMx61TUJCdCaARjwf5ytPwG21CXsRSXM2c5G81yLJiiji1VKo76jAwQQgZuN5bqULBe6QJWwy",
  "key12": "4z8sYjToHLP7XxR6R1PisxDBb4NehhMftk7mAqRj1pPPrxJW7RdxE5nHHdxEy3kAUWSVaoCWVCwQV5iZoSXgdWeA",
  "key13": "2uHo4JdKfYu78Y7hmVzhnD1TYTFX7GME6i1xgY3UeMJAgbjFCMtRcZBvJCoejATR9aGvoKCGeuDKSqiJ4eQyborz",
  "key14": "3gYBtppSkuiHvLRpCN4dzxbeLTHyzyb9HhdAdQiaDfqMZ4X3ec1QQ6uT57ZPFba4DvZNnThMV3GN2RLFjiEbWnu4",
  "key15": "3EgBaQRqS3YWbSfumRmTCsARU6hVaCrhdfm17PZ6JWdmjYUecGfsKZQb9dxwEALdMbKQxf11Y1dpdYC9ePzpENpe",
  "key16": "3WgpGw3oJqAXXcQwGkhQnqKwk5ab9v6PjgxuHbhNh4pdqWhVdDzayJSQJbH1oCq8bsTaENrvPA17qwHUmGDtCEp9",
  "key17": "29PamGdLPgwZMM8pQPByhMz9AjaqENnB3NqMywtez8whrFFLXXiJ11nnCuJKYg64LrnzxXxkaovYwMv471T8FxyM",
  "key18": "52Mc3HSfws8XnyMqpgQtkYE67NkqHcf5iYkM1MMAW7MYHAg2jdvp1MGyPdhFE95uU22x9T4jcSCPVv3apNCDKk3m",
  "key19": "5KkC6h48wxTmm848KtJEGQheFKRQi3eWpZcZNyEHLZGUMzQ2KPAGZ5MtjonUkC7e7br9pAGDD4EbKkT2zxhgY5MC",
  "key20": "26AnnyNZp8TH8QkzpdKK1PJHFVfZc7wWSyXPzP8iDCjkDqb7cEHBTUkKp12xmd2E5SmUY6J3MDrPXUbupuW9zHCe",
  "key21": "3D8W3Pb8eQeUkLVnbrHcspWLk93TTFLbBBz7jKGQJk2ak6qxHXGJoBNrUdordoeXDFWvz94Ldruh2Eo8gVoaxy9o",
  "key22": "3fDYzaNstytzuiLeqYkbbtZ2EkTquAeKRMDBCnnfvj48pbCzAxqvUWto6VXzVkHfqy7aLECuGw7CnUQthBPdXy72",
  "key23": "Av3ZRon9Sjkh39TGqo7KbtF5BJnBr9CUhwX7kYMHw2sXkzbRP5UaHD3GeuMgQnsZrew8dGbWXqRj9q75rHzbtCM",
  "key24": "26cjgBkVpn5PhMP7ZdGdb3ibfjiqdCxwepn4wmU7Kpyi9CHJvRLyUJJw2Za5NxSQ2JUyhnfgM12fyQrRdKzSbVQE",
  "key25": "2KBJVLxHGvnnrfYwzXTxzcMcu52kQiPrSZQdgLP2sEfdn6TvaBEPrFMLHaJZVPsN5oadRXjmeqGG6DpBgwhc7kbN",
  "key26": "5u3KypEZ8MN7h6JL4xbqoZH7onyPaHE3gRQfD4Hgs42Mzgpwd2stureqk7PoTEvkDF1jT6Tm835wYaVJ9JH5cf8H",
  "key27": "65JBpdxbEnncodvaai1E8Lu8jCuWDQkZPFw2K9YiLo3xZ2B74pgGLBqGQTibWjq8U1xuzk1KSTbptt4XE6mxpsvx",
  "key28": "29xjYL6hApmAA7d3LL1sidFDbxmLYvw2xfCx9W47hh6JWsxjL7dVzUyxEQSzJcrY1xG3fu8KjTx2r3mXPKPW3Fzm",
  "key29": "nT1keR1PvQnCo6iSgP31o7pGhA3wvau1Rbk6hW8jLGFXjFyTsjPUHm4Q4Tm54Z58oQ5sYGiRFDB2hnjrnk2vKBC",
  "key30": "66sonjboXuBs51fc3YNRV4S3t2dSqo8XfA2qn7M5YHLadyqagauUQ3i2oSfoY7tipEBrkfMzzbK44kHV3DhSStPa",
  "key31": "2akBab5TEc9eXvEdNVsbrHEPB6Nm3GVsXUPTEUGmViF1ZF1LekbSXJrTTTrKhyBrs9g9k1vhS8uvUHfyomBCaWbS",
  "key32": "4RK1i32yrAWSmpiUZ9cKJfiNjMngaqSg2zTPiK61qZCMsmTPGCM76psw2sqvqntZ76cmcfHbKDNurNq7BKMv6jZv"
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
