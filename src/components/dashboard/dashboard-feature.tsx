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
    "4tnLphfnxHnyLkj7w6pKuMdb7FFLnDKGxzhJDHWgBvcc89q2GJtDLZJXmm1RVXDVgSYDrmMjS4zoyHd2nvYRk9vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmq24yCNaDbztNXdBUFQVHAkdouaAeAD2kmBsei34EeyNs2eFtioK9CsywapAQMrnxPwekwjmw1UP9kCo4wZbF1",
  "key1": "LbCDXnfvXMiUV4ztWf4oWTiJg9gpB3kX84ie41FJVfk9cQnxLwCyoNP3g1SEdBnRZA6ExzSswfgdA8dJfVjigKY",
  "key2": "476uqVLGKVw3CQQPRVHEoJLw567yatuSLNzSshyUieTmC4VbeGBEEAAi128ZVi957zUGd1e2jrpnYSAtAqCLAUsj",
  "key3": "4xNxj4on6HTCWSC7RzEdyHx65qUJ7m4QBeKytkmSfw47LfBbSjkrTNb8sBoEZtfqGPffkK5ae3jEnLJhqjy8X6mC",
  "key4": "4eG7Tedztssecr64FU5GESKQsH2F7nP7udGsvvZEakBfaUmHzTCHY1TVFoWdfaYFnXntMHMJGyxYntp9bZf7Wi6N",
  "key5": "3bfudjmndegssHagb8kbdTzipdk9saKf77armWsKkhzyTjdmst4MX5F8bZeyfJVDeZVMakbQx5ubiQAcwC7AKKZ",
  "key6": "55nBS7QaEnLdPbksa5zp4AuFQF5d25PsAtX9yisKzZSaPMTQstWSgDghB16zfpG67CLyYNjoo3HKkTp4MXfDSHN",
  "key7": "3dz38S4Vmph4Z6WTVn7UNeGmefvZ2gR6FjiZWoi3syif7CR283Tonma3zQs5X6g34CYJCi8WPwHUXTR6NPKVR8Az",
  "key8": "3RRVVBsbfQWYx3WwxDPLhyUYspmfAh2NoiG9RUDjg93YdYf57JJpnySRQcyojkYBLXGLhxzKiPX6LifxQ91xtYek",
  "key9": "126f35pn6hnSnajSVBQQP1d8KRkDUuNwPbyk2kk42ztL3h4QYSfft3EVwp3g4exNFZpLfuUvaRoWpKaxfEey2iFy",
  "key10": "2uTUoebn5Gc56CShxqB2pbxNvgUAhbV1Yzo1Cx8RQrD2YugY85ccmioDYTsEo5LmYbiNJG59xXbmtc51wDLJLWVL",
  "key11": "PzCY9AKTqXd1w5Ga6ZTGucdMbcUHyppZ1nMsSKJjNFpvrHc3emByqQ6qeYVRhyoNNT67SQySJ44uViqVYUwo35L",
  "key12": "5G9UqXdMTV8CzXqikdthjiimh1trd2gxwWF17qABhBEMTryVVyi8XfrENJ9wcpDYjDPLE2ADej5EMcXsnCJQzugW",
  "key13": "5ADUKDjn541yDtxvQDXLFM9GN3weDbBA7PXdVhYZrcDRHwkWQomAmP3uWYHoCUv9UPnRMX2veCLve1muzzXQdtUQ",
  "key14": "4mfRQVTvzLTpKrLYRW4D5LDiNSUJnjeMFW5T7BuBuvee2Dp54amoBwyhXT6knjhk1sFyAoJUZa8UzFyxVNcjrTBx",
  "key15": "5P3Uyq397VHbdp5jx1Ku5WJRkC385p9jcarTeVNRpEE5M75V3HwWsyZYfd9G8tXvsBT8aQ3ad7z5MJVSftUVbbB5",
  "key16": "3XYvxh9eMps5XrfZ8Jtf7egfDzU1TsAp7DXpnZL33BYYXXeJuMch1PUwN7MAjh7UD1oJNGJ1NWL5mGKsDU5vKwB9",
  "key17": "3ohXABqPQ8eexmsUBTAAspRvG2LjCTn5QVFuvudTjnpwbvJ67aGwaHnFFDTVYAfB7MQHUzAJCtrxj26nT7JNUif4",
  "key18": "2Xg5cCTPSoCkTycgG64Qtt11HAmoPcbcuRxWHv8rES4EKhY12n7DjPpXKQ6FmQgCxMmnL2EJX8Gfaoq9mQgDGdN1",
  "key19": "3dre4S7sxyUxTkoRw3eWzFNGDX1DXXGeSMHWyfALKy5oa4rpdmwR8Du247AC6FkThL9g99GfHErw7A53JpHJo5sK",
  "key20": "4XGm6o9jGyxVC8LjUkcvw8nBdVntjvjAnC98tbnJ815WQxnRbCLpXEGgat9QUzcpmh99xT1k6GuPvBHtxk45JfoL",
  "key21": "35X72rNJCezdMWW9cyquvWjrt9oSQ3C8tVQ2z6mkTQggwXuShinfnmDg6goC8GDn1cWNt4X1UBBH1gs3QsQKY3Zv",
  "key22": "CERLT9ecDU7VkCioH7TR4YVhD8qfbpFehqX7oEUDWnpCWjxwei1xpHEzq876FAyJRcKoDFnHz8rzbR6rWm2HUN9",
  "key23": "xpc1VbTrH4rUchLCK22AnYft7Q8U9qDRMgQ9HKiJ4iCCbqWWXPsDhfHAEeegKoZ2TJSVrunWDZPLs2iGDHgdEvt",
  "key24": "2LJUpvQ3gVVy2dzmCQU2iaKBMQPaWEjWAQVD1x897vHPF3rPEqzsG8tpUPaNquHKhiT4JSqTfDxiqdcNJVrQTVS9",
  "key25": "49cSjiPRSFVw1vnh8GNRKM7X4CfsSFjc8FL3Lha8LH9Sa6U6eaAFVcWbDBDjAUj88Bpp419mq1RDvwfDhYiX3wAN",
  "key26": "AfBPA6J1qzUC4rEJkWQtS6y222qwULP6AaW5GWq7juK3i6XH42azSWYinezWLaR9zr1NauNQYjwotNmWKXjnk3i",
  "key27": "4RagC5r49o3pCt7oM3ZbSAqAgvZpBoseoDrvUBpoqPy5TAENnRTnwJznorSqh6HfDq24aeGNPCRDqt2hpySKNZwc",
  "key28": "5R6hh5FWeLmbhZdq2h2kc2yTKLJTd6Cb76d7Kb3mX1RkZrZ7skvzK5jFxRLuPtwfXsYJrnHVQUyGRgxnqC4PrMkD",
  "key29": "2x57kX1aGgiDVV4Jd1tCiwf7MBUXn85cUGMSV1R3FRYBjrk6Tj2JtfQ2sZNpSP9LbmJ6A2jayXn9gjVvgweF8xD9",
  "key30": "5BxpfNoYqYaUavdjh6wQECQiPG7Duj6BWmXzXA4DNPYMdd5wM2CmPjmz5bDdNPRkPpCGWGqa8JPr8YQfLUktEauQ",
  "key31": "3PK1LHX9oVuydKx62WVGLrChaYEm9ADDnRHGLeyNXF52Vr98q6tUpzhGjGmpSHMfK4qE9LYwASSAtdrAuWfru1rU"
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
