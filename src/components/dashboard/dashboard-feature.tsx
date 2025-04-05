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
    "32RGtoCMQqicp3AA4ngWTNZHLKC8TM2GL15eHQy5eqtTyarNyf6hFH3azNiWRBZ6ZtvLkapfwi3eocSqMLfUYJ6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mEE22SqC5mHAyMwcmP6tfARMk55kUKRLJ99UyFrUDmzpUCLb2Fa2RvHpgCv8myS37RVUi24a4Vm5MZWuN14B2VX",
  "key1": "e3pBDNKssdtHcxLLjC4oXov6zLfvBYDFC4mbqz33mBCV1fGzDCHkCuXKgegTCFvpX6ALWG4xBgBqjykneFfQZkC",
  "key2": "27G4PXpmpjhnfHWarhgV9rcfZtsoqA2hrJ7jbHX3U2zF2Z2HUeNuA8rmuaAvMwqKAqYPkFYzPLrid5i5waKkndSR",
  "key3": "2QwNaec9Mcw91K7jAi29e3wU6z3fyaNe9sTYMF4eCNXULyA43BTcwryYFg3JVz5bzK9A6bhwFa4XCT9J6KgLaHKh",
  "key4": "2EELCNh4EY2gzNj7UpTbdLNqmvYqr6jMSthMrgh1B8Q2abNHmkdwMNbD4Pud1S8tpQKBUTtKpqpoCHJ1EBySyrAw",
  "key5": "iKBRaFJHx48co7itX9U9Y1kjKHM8PyNZ23T7ymPAmXBh4EZwfJLr38ESCxRHPEXhZx9ZN6HRT6wm35QAQQ4qBR4",
  "key6": "444kY2Skoru3pyNWWSAfG9yftHfFzkSqEETDDyYnKWG3L4W7xEGGo642aAhupm7zuuWN8hnggrYtbDeSNq1isVyX",
  "key7": "5RD389eLQ6yL6HbfQZPAzJDokGq9UDGX5hwQMAGCmNi42cJ3Gr2smTLBe6HEVVEGnR45Ep5vE2cFeD2cKBee3TSa",
  "key8": "3xBHrnGwdhBsSLnxnvM5SgWwmAj2ZHgT5FCLCmX6iTt5hsYEG9uEVEBdhkXYmPXLtUWsu5a3Z3XzxKnhpCUJsLXF",
  "key9": "31EZ1SFc2E5tVWVqAr77zv8Q7QcPWgA7FtUu3Sdp4mAFTu2BcJewnQc1V6XUyX3ACjScbj3f7Qoey5XcyhcYZFja",
  "key10": "2XWiqreMSEtrsnTvkbsVessHw3mRc3bBiAndgmdWVPXmLTePLJbqtvYJgNZfQK63XZD3bZjtgbmUptJ8KeqocQRM",
  "key11": "4kppGdxzLkeE1xQh8KRpX1GWwRbco8yMfZr9Pyqay9s5baFEUTqffZWCcHWa4R66QUmM9mwjTeHNcPBze6FdowhS",
  "key12": "4sjefuGobQ6qtFmdEEie7VLd17sjWsdRsM9Zq4A1G6Me6yAjAqsM9d8Tup1RH6Kvqs3LKQZ2uos6ybX9q5KM2ZhP",
  "key13": "5hctoyyrL13AxYCGfREtp9jizp2MpYiKDbvZCB4zDa5rxuTSVFX8jSZp4RCzCbnkJmgGcaLBMECbqqw7K8p8P22",
  "key14": "4Md6LGW1tWSXYRjvboUEePDYpCQo1H1jEvcFAneG8HM4kLRLMAwJUdnokaGtpnk9BZFS4rP1om4PH83U3iuthQpv",
  "key15": "25ocTBEKzwKjeGqpYGgbnzYFVPPsfzV7BrJzq1cpANEuQA96GDvJPaf912dFXCaA2q7AKu16BxZNFJdjhJACsGv7",
  "key16": "UrQtFQfuf5Jp7UcXmW4CJZgYRBaA1dDuU5C5Fbnt5YY8EPMFiGCk4FuMNBRBuQryoXfpQJmoFzohDg38ohggCcS",
  "key17": "3P51z7Eo9oGSgC1e2vcbDEsGa9QptwYuAHQwEF55G8PRmu5cWTzZQFANCfYewNcywg9H3itFnQpSGEj6EVdJBAEv",
  "key18": "zNQCYj8pRQPabofzL9BNbgjBLY3uJEBpZRHJBZU5XX9UHCifjQaezZz9FDX17beqHXk5JvAU2JNchDQ9Nef6her",
  "key19": "35XhQ5JYDas5o4SkJ6aQTmydp5dEZKbnZFyxjeDhXeYHBM4MEsEzga1D7hRPQzNiafPnza2s87eKUnY2fZYEmtNN",
  "key20": "33F9FTVd7Kg6EiMUp9NyedBx6Mfg5ksEbU7j4aE5NVa3qb6BJf2dkHwS7DVXKQ3PJkXwCqeYgrhePWJdKtExnUQw",
  "key21": "397xFgqXqz3P2dtVa6EN1iFYMa1bZZXpjBBGfA9acTZPNVDbpE5cmwUdRQTkztaP53NLrJGAYdbQ5d24yeTmhGqB",
  "key22": "2Rrsx2GNCSiXf5bwTgXmXmU7QQPcFymv2YSKvwEyNs1vdMeh8pDEETVxe97t9PAW4hFPskX3QULFUrQHKcVegZ5s",
  "key23": "2RxuzpGzF3U3pnGPFWAEwbZXNM5Dhq2t1DW8y8txqvT9Httr2NKzjRMDMoKAtpRJR7cHzpvRp6qAP8r9zDqmxjwY",
  "key24": "4MwYAR5qo1TxGuThcWamyKTHBUXcaAHcF3MXsLW4biYK4McP8WMJdsDSzWxGhCfb5EoSRdg2gicNtjrJHHsVQq4x",
  "key25": "5txswxDjD5mHARZUim1gKgWzZaLq3Ymjtiydxh7Y4fs7qbkFce9ubvaiuRh9uF66xfBJozBdDgUmXgFGzMcNwakD",
  "key26": "c2g6zCxu6dFtXuXvJRqaGTkhC6uMZ4my9KYcueXHCDBr4X8rrnto6eD481wfYs2ekR7DZG9n3E8FhiZbsz69XuC"
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
