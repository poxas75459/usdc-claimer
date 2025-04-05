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
    "2wsX9tQrFQUPDaBAGSHAvXdVwc9DYB83ERxDnsfcPrVRDjmbs7w6GhTbK4cWSRWbwzZqqdhHtrDvT7zPC9jwaw9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79kDZe1xq1fD43bUUSWBbaihjNRd3shETKA5Zup6awogtYW5xtcsCaiLiF5q7CxZcDFBEVtmuVrZWBdvfopP9kb",
  "key1": "3ae2FxGc7N3eRmB6GFPkm3UKAYRtrkZhCNsumRGoPbvZ3BrRSe4LoFKQsiqUAaXSbRud1EsTU6g3su8HbkVvyaF5",
  "key2": "4Gsa8iYXuM1wNK4EtbjsC7JADgzarnmyCwx9WLvJWeDYCPdiDkRLFy75kBr45sbD4tqZxhMbmduE64gHYp5mNiPx",
  "key3": "4j59VYXTCe3DftuWgoJ1zjGB8Kzfhqt8gt9vowRztHiGKGaJX1Ydi8NNZ3ojNM84eYAtFBLc9Uc5T8piHnPXdafW",
  "key4": "z8EuUGoTUZwVdYCW6RvpiJvBth21J8HML8HQM8bbKdoVmrrBExZTS96thyzz2Qqa3GWHWv1bwEHba9swvWk6dkD",
  "key5": "PyAypeEpcGZbwWvG4th9i8GUjdwnvsPF4f2GXHyEpAjnK3KvzPug5u2WQ4BW3C5tYKVkkmyRsbotqmcjs51k3XT",
  "key6": "5ftqSXfa3Pfo12KJNvTd6i1fvBTRomsFc2CNUxKXqPdnshKbmiNTMw8cdZKQyWSQNTqCBXsLC8YAhkrmGoDLDRdr",
  "key7": "3EmxukWtDNtsX6Nd9eoSVXujjeaTwr4imtsNnKnGhY4NmZJEDUhKkww5sx3oRPoxPsSYKLDtP82JkpaYkFL1Q99n",
  "key8": "64Gx6ZRTmu32K6f9ozkkbLG6RrQEPxg9b6giGFoxZXTeXSHVT9upXgF94YZx45pr66xSzUfy9tq5HmMjYKXJDg4P",
  "key9": "5hFN6W53gEiqC6J4uppMEaNokETQ56RMFEt2QRMuwrNB9sgoau4jCxgLZCEXKRrT7CfGnLsD9NC4vSBVRB5UqYMQ",
  "key10": "5MPxzYgtKhbFgM65hubZp7Q4vU57AkoWsVe3RkhroWbZdmXt7JSp7Y29NJ5J12Fy7qXZFJxWCQMgYf4KoU4B52VF",
  "key11": "5zPjuCoJWkhMgDe9bCTuyLV386eVvHUTsiiHCRbyyx72e7hRBCvrz2J2MQAzQ7swQQiph25kHBUr2Vsv5hMWFbgZ",
  "key12": "63z1cfBnUvQHTRsJXW9816fgkdvchsrTUtvGPBwFxU3w9nRHRpb38KgEJ1u8fDRf4dHRCiqwL7Wbn5dFxLMuQXwq",
  "key13": "4ytYc8n9RchNTZono793gHRfUFT1CAHYKyXjBApBVpVesRuyU6E85DVfD65DM7fHX2bXHZ5uYrEpHR3o46Acason",
  "key14": "3kBukRwaR1PCNCBvznrYU9XsTxqmnE3T718NwGpcB4Xeeb1YscQE9iXqx1xTGD98XqnfZD28uNZv6rczBWMSCLkt",
  "key15": "53sfYt5LHKzFdP7tkD14vFP81uZjLjCyEsmBcNehCLPzuEVZiDCsa4r8ruEDEYPvQYCQfbFBbbDdwzcwtbzALPfu",
  "key16": "xeontPue3JuE6p1v5N8988EnYkrbb9dnGRrhrSRQW6nPZ2WEmBA96fgTdqKYeQmfMR94Jm1DAeVRFQAw2nA3ycb",
  "key17": "5xe6YRJDiQ9EMHzUdxqTqYirL3hs1Qva3JCfSShNy6d1Gtjf6TPNwMUvTeaYsw9i1EMsqvMu8cmBSHgVyXCUjwgX",
  "key18": "5CrgCq4FYUNbWZ4VLs2C1BjzktXmNHZMfT3Mp2N92xCdxmq4xSJPjPXaJmBfiKtUr6ajdbty5g7j48pjkmWgHSyE",
  "key19": "5mET5pa6FGQeVi4XpShjo7sG1UiY4VNsmBEtttnT8G42r359Go7hUVugYbYCQK5qE311uK1TLkMudUaMq3TQchtg",
  "key20": "4DEQRViMV25MhhbzZr51vfRdFRBU7EHT4BzXx7pAyVrmS7gCEUZfLJDGLTC6rwrkc4FhjGEffWiK9deJpR8fJ4Z9",
  "key21": "2sMjHRD1rg2XXrFndvNHKUJjdczsVY9eGG6Q5N6Aton7KuS2eVNyh6bV4fLCyajAjk2mrQTCTCwtqC7jivJ3XJKh",
  "key22": "4vip367DQxjZmjaZ45FmtPjMbLhJAm9wywhdpcm195qrf3BMZNEPRNoN49gKsqkA9sKm5X79n2WvDeSR9zrXuYPJ",
  "key23": "2cYW291R6qDTK2iTN853UV48YUEJw1bofq2HN9cNJiwixkUTPeLSZiePWGa1DbLHFmnYHfKqskJuYvDWaiV4KXsd",
  "key24": "4LP6U4Nh5Vn8dF5tSJNb1pGasVEqhHFpuPoM8DEbP3VBNU7G9zDzYoEucpxkWpEn9kBsxkoesy4okKyC3x71QkMJ",
  "key25": "5YsFbUX4HsGL3zbqx6RDfr72j7Cdzae66VJMwT1AAL2hE6qzi8bUhAvJu1YU4qc8CNQtstW3DNCEZAtZFP6bGfZ7",
  "key26": "4oFjzDvvRvLzfcsfgphMtTQwahWovwtH4UzzjWEnAkbfSRNy8E599qmZP8QNYcj9VWWndE2kRubewEi5AawwF8Rn",
  "key27": "3UyQNPL7eAhqW2W4qwA5PkopMF3xHgUCi6C7qEAJbSNoibVt16U91mi6PwRFJS4UBbS1JHg9ZeSTP7D9wCDb3iLp",
  "key28": "4jmtzYY2ixpMiL2KtLfQHW4Uwd7bZdYX6ay7GEsDrTCSoXiqStZDAzCCY7PqBGRxdQBgcYnzrxRMbct5tBcZmw3k",
  "key29": "2mDr7xjkp7ZezacrgyKzYSZc1GrXcJywnwKFnqRt8MFaDSKFwfbPc649fX6hq8rvQ74kDkkHnsvS19Cpy4K3GMn",
  "key30": "3mahuDAk4FYEizWFD4dpaVhFhrg8QLm1ZnoE6n3SnMowTisyKXbnk8WH7wjeZ5hX6Nvtk68LdKNqhsgkdgb9EaQt",
  "key31": "3YFWNRoNy6DYrQRy7Yb4oYrd6tKpoHQSUHjfWfVLN5cAyxUeMdNciPUTxhVx8WGu4Et9EYWt7CRQdMji5Rz5Qzbe",
  "key32": "3GYid3eKwhDmPvfoQynhMRirpU91bgoKeTLD2D5kCPxTXShoy6zZa61BU7bE3ZdoCmdtvBr7gE9WB41d7anLBvGc"
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
