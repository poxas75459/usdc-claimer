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
    "24YWXJixDyFgLyQWUqyNz4QcnWsNrkVGjV9Kh85TUABKGEvKdmfwBwijp8WmQaY5aYzUkj8LGifDX7ZNxWzETa79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egvZ8v2ZTvasNgWs5uBuaRoEUrfE6uQuqMNPoUar8Fopxwg3e396wXC4m9faucgZdKdZBpqzu38H8nhRMmmr8hW",
  "key1": "3QYbYLZ7S3Ypuq82zAWfc6SuGdaHEgB4MRKY3H7myJNT7g4beGwpTVPfvuqA4mKwDo2CBKzqW47avLD6fVHo1oMe",
  "key2": "23UmmfNwo1vKSddSnVwrd3Us9wPi4Feemwj2eSDFJmW9atJdhiz3GkPp237xLQec6N8W2cpVogCWCjD8dHugek3v",
  "key3": "31csBhkmA3kbekuSS25BTUTYo57wWRKGKaVVB8Mm9i4yUuAjvjBzgagRX1awKMrM6u7TGakcwruMQzMNbUy9Tf74",
  "key4": "2HFw59h1NdFoYxWzEwMPmaTdN7EcCxj31fyZsMYoZcDkcvf4znxmozZuGHSvYHXFftCDEo8cMizfjAP7adVETuDG",
  "key5": "2cerwYDrwMN7Stck3SmZdHJr6HDXspSvUA1trxTFDPBMy2av95MWcJ71uSJeE9Mk7zRS1L5A9kHS6csQPuZ7xmsg",
  "key6": "4d36EPr9Vz7Y1dY3BFieZoZrSMaoUtVapQGBhKeFLiqexDrBEVZBhHCCvxPdECZAW6nVsr4sH2x1oVxmwCCc77xe",
  "key7": "2Db5wPVHYUNKhHgdpADBavCnH318qs7tWshKggW5kN8Gy44XskomLZkHMFMfzvEZwFCySspjWK4nRuChkzwkYueu",
  "key8": "wRgRtsxorts8wxrgvHFszJqSNFcijhZcFBCLthVH9jP5aSSoTGTRk6iGF7cqQG9aWe82pyVJrGXsCEgWEpEfFtX",
  "key9": "52nK3cW3QN1ixQtFZhPc5pjxx7s4AuD7fG2PXUiecSaGQTdztmJRrvGcsYrxXTSmdbsR6UEUUeFhwhCoPsD2XJ3G",
  "key10": "2qx5AJMMQcdh12gPpnzKUgVimi5JaR3HSQehQw6c5DqNmFj2K8AenFEdmnHb7UNJjCKyZxQtzgZh7RBRrfdbFpK",
  "key11": "3Zw4taF98RynH9UJBbrreCDVx7Nzs5vYUmUxCN7vDfYqKq5TpghzAKkrwGZ9xcGh48Hed6iHJTvsRkaZTAA7ay4j",
  "key12": "2inZ6XZx26MG3T3kJieZRD4WjPQa4aPovf1io23vp6iWJmEPjE3HPwgryYdXNTjeEvg343k4K7AB6wnNXcUiVkm9",
  "key13": "3CKsWVGmjmLEGRmmUarmNijUEiPUAYjiV6LdGSemXVRpcW7pRkMswQxi6xAr33Whtz1YfMdANytQ7Y3xn5wi4uCd",
  "key14": "4QPAT6ZJSjBvEfCjm7RQRAPzBT8js79aLgNSoGRrWXFb1YLkHykbT5csLpVjLZXDbUKG6b1Q2CVLoQmnwRf8ehoT",
  "key15": "3nbzgnU5yE7dmif2uQ8hrJ19YcHscQyurE1bVRbeo4GJPKy2khWHFVcWasPNJ5UhqsAS6PTHMpdhqSWWihRsj5UY",
  "key16": "y31ZCqm5zkX25dmEAcTUyYC5agXCRZ3h7wm4inrkbahPGBCgwvfBx864cpzk1XRgKT1NLbXAnytJL4NSTR64EgA",
  "key17": "2FJe2q9CKwqg7BWZX99isMXvghCwqz2hZxB9coEkABBQy5yQtgQPj3AyxYRGszVEkRu6tFg6wMxC79x7ZmafBFV5",
  "key18": "3JbAACXD6Uy5R8jc1ju7bgdnxNPZ9KFfjKtPhH54v32QdaTdbga81R5Et6So2acNeUzQUpHSNdrU3ah5B5v4XNdq",
  "key19": "5BWNWv69UaLqYh8k6HWuFaSdRqZzcydThCc91excoYMgzhpmDtbFbdWYxdqSKroVicSX8efu1hf5paq14ctwu3tr",
  "key20": "5KaAasfUGryL4Cjk1pHLnS2P5J2bLdVpAvqeSA2enYM2cF12jE7S9SvTN7SJY4LcobtxZMpfQe9qXHiM5Amyy3b4",
  "key21": "ixreifoz3pbhsUXQpAorAYhvqC8mkWKD23vqnpZ3tgt4KQSV4FkgPPPVocCHhCRS8VcNjevPnZ5r96HRdBjf4JU",
  "key22": "YiqB3WvfHLixQwaDDs6hEJcRzYKTe3s4iaFD4D9wYeDz9rY1DqsYAFYezmbQZAfgCnBqE358B2qRTEkpeNnRrvz",
  "key23": "3s314LAswewDS8QUaXymZ14LpfBQsCoULaStVTx6wRWsAZwYNWuEuo33wPNtMFg6KXNMMgkkprZKMJLvWBeo443S",
  "key24": "591HxUnQt6MuvUGMky5vMYzeJpL5GEgRmFjh4seXSv4i1SWtueDXzq3QC8TGVMXxkAmF1RerY8ZN4rzAW2yosvxg",
  "key25": "5VuQMeAV3GYEjuSkiyzJT9gqYSGSH8TTbvK7hiNkHwUAGVHUHGG1jYWyNFNuTNPDZNXNj6rGVw4br5E8vNXFKSU6",
  "key26": "My4hF32qrDL1jYPPLC5bYZ3CN85qQHPDQDnoDJfKTTdQRtJULGnLgwuGctmeNa7Z2QbV2bKRXTww2QBcAB465Mn",
  "key27": "5SZjJorEZMjqQrppqKvazENMuBDkXjcysAv3D49Pv6R3RUv3DB7osqfAEtGknSXGu31Yec6KobTzNk1YQ84QNF4v",
  "key28": "35BJNE8CeooVMhcCY5GBtWSqMqg625xCM8masyeE3UZHWHRtw1pXwWVR1WLMDUjPUwbRKKCZGpV5tYAeGhXcReZb"
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
