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
    "4rLf1Vxfh1hpnTWaj2UMRiTRcwnWCdjjNVQMMobLoYJbxPhHCZVD2EVM2oMZ2HFvoH5ZfXDJiieq6WTuXrBjgcr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpaQA2esETg2qm9y2DVLiTzWez1edhPCM4JaoiutvegGiQ9qSoNnQzQYHFU1JyqDMKtBvF6ygn9ZeN5GxmSZtV2",
  "key1": "2TA8LJVaiCXcA9DEuyGdt1pnWhswH3jKn8RS8rh86fB4hMTM2K6Nomfvbfvm329pkMzdsu3QZ4wWy7XY4ZGxE1nV",
  "key2": "4UpjvQVC8a2LAksszPhZ1gsXQJUCtUozsyK87y4XwVLGXrA9izzb34ag9o9QFAeB5FvvMBMRrNd31gQ9dWFrPEDn",
  "key3": "3Kjb49mqjHwiUpBWHo4XSCxHWZThfnyYf1qTFabbryczUqU7CYnqtuR13W5r3uR5CTiCCb1R9oFb4eq9aySDEeDp",
  "key4": "5NRtm2p1VzhosbLTAT2PTvU2GJueFHd396TNygVrisH3DgHJFQfyUVZKg1NsjwxsC9KnGvkUCTttnxmffb5t8UL2",
  "key5": "2gmK68Kijb8HZp341syBvVmTQnzZ6EWQCBPxd38msaw2x9qb8fB1UsYpWyZxMBQW5GbVRZWVLbk4xhHHkbKfUsn3",
  "key6": "5igdzXnSYFQWW81zT6F2frrv9QvxS3yMEe8rFkTFDTEZZFMnHnZJgjpr8imkF2BSx5csXCSd63811soJNh9Y8t2o",
  "key7": "26T79dGzWbSUZLzEehomnUxyxmcz7x71JeRWT6MXDUxSK2B66Q1cpWa6SQ5UGD9981LXSoCg3jSfPmZjHFRoQoUv",
  "key8": "2e6T2HBPJobNC1j4PwW83LWShiNncvkbU3TvwC2Y8GUQTtka8dxetBmiN7qS1amF98wPfr3FkMLnDXjtEdRLNXaj",
  "key9": "5NxzuiX7AmFYSZLujca3eMA4sn2WZpotHUa8fM75Gp8KE1AVKU6sq8QtJWC2nb4ZeswSp6GgNMQvomaWG5bCPj3C",
  "key10": "3ztEhiTCysnsC4BocM6YG99YPx6dhSnm6dWem77giCpeKVQF773aMMocnZZtmVRa2dHyUurED8zvFz8M9f2Boi5i",
  "key11": "5shfhNk1agc12pQS43x8s69AZX85iYKSoiUaSSo6fqwkRSuWD6Ccw1HzMdEMApbB53ZJtH1T2C2XAG7T7K9qUatP",
  "key12": "47BbGdMdQF2fy78RQJHQ2GiLAGuhKW13w8qi5MJEJ1sRn8rF4TzAqsCaVhYvDCShf7qiN9Ci69uW44sx8YbSiRiB",
  "key13": "5u1RzchQiuPHPoHz4tqHUuog8C8KLKaFV9DRyccFsfMJWmGzuGKw3HjWM8yRcP4td8iNzkesPhLrguwN1ofh2LkM",
  "key14": "3D9AG2ghdh4xzyJi9YemvAoRwQa2rgE52V1L43K9ThF3HXG6f3wMWPfvQznbs6A2X5dWrXtTtNNFxtLR2BTyjFsY",
  "key15": "2e4FZ5xUggxMazd5DXegMmT1XM6GJATh1pektanLtYi9FKvwZSDr9rgAyqt9Y9ZpkZj98hkcdQ7TqUkrNHSKDCGP",
  "key16": "61LHvjV8RBwiJCxr8SA5YKd5RyCuzXZdyah94tKZY2sQ8n4M9muT3hBFodVWgaF15FwtTHV9nxiDCBCzWTa8Xsva",
  "key17": "3nX7ccY7Yx7h4cQpbBHrn9uLFho7vwjdks9F3JEMg8nj8F9f16iaTUNDyx3qeBKJ4j2wPEHsJo9ySnH2tkWx5CLP",
  "key18": "5AJscLD4mdUzwhFigUt3UNFzego2EKDuFKTCPfLTrpyWjwHsdwpwibxRMN24TKtFyucS8Shzr8moDnAExb49goCC",
  "key19": "4mVqj4ipU8YbkRmNd9kL69E4oLVpCwRnqcfKyA3WdLTqfDPGNy2Uh9eDyeUetuRZKZUKbXknmV3tQyhRayYRJnQG",
  "key20": "2BvX9vJEzEcoNzhrrfw1JNs2sNU2bmy84DLb59SFvWMenjF5gMaByWJB1VKuoTkbvQmGcYXEdNhD6t3y5DrwuTrn",
  "key21": "2LpeJ7tgLxND5zXndSm4xTKjdmVo81J9HBGCJmgosvodRpzDurqoRR5ofRpspQSfDgxEGeX1kCuWHWfsNwotocyV",
  "key22": "3oSW5yV3242ZTQ32hrghWHyUwkGEebNWpd2P2EfSVPHFEBy5EnNNWcpY6UktjtoEDFxCjQ6qx1Y3adpE2a4C7ghT",
  "key23": "35MRimdXmPDxNC2QzhnCzmXFzSLomNqdjD7Ba7rU1LpPaSWZwtrRArQmz2Tx1i1xYuDcPF5VN1q6NHEz8ys18rk5",
  "key24": "Vmzt2i9PUWjG5uoeyVSXZLNx3HCS5CyEAWL8DovDQqYdJbuPN2455QQ62UNA3nbTsk46aRotSBGQTKvQWtaQa7p",
  "key25": "3gvrk1nabHQyMBKgcyczT2gFpVUbKdgn6ZpGogbx5TDy2wP2AWycSU5M2AdhhrWY5UbPGyKYJgr692yABQYxddYP",
  "key26": "4PNcA4e9ULSxKM869V3rFwaXM9KrWaSjFG3XEGaCw3owyC2sMZNEzANb9RoAjsteVzgKEuoH2wQNEWT1RWA5vFPY",
  "key27": "53E1pQHEyiNWRTma7VhZaq6QbSEgQfXgrAjqykxFbjFxBxViyUbydWRat9dxnNWkVArxYtZRcweunvXBzdDLSVow",
  "key28": "3gf2zQGKK9ttdGiH7AMdQnFjTM8TfPiBFszEXvtKMfZKBLkH1hvZWXUMJHRAqyhDTF65sJBjQDFe4atsY1beqBYD",
  "key29": "2LFGBR93fBRqDixvRamJEW5GovHmk2Zayd7GBiLf3WABwe3Lkh3vKs7oZVzuNGzTzosCokbf5Y2Y8E4oXEGjtTHS",
  "key30": "275GLtRjXoNtfR6mozvbf4qHY4CVsuMJ8R184YYe8QJkKMtzYEna5T5WUoEvULV7VMp79EQbBDyJBcZF1ve7uojm",
  "key31": "4x346JxAi8TBppehVoJZeC3gJ7LSQ39tZyMXcL91xLkXx19AdBm2seWPrCwCXAgnvf4tPdcTr8H8dnzy57dyGNx4",
  "key32": "tDsAQ2X1sKHvdDZVKcoucaYRoiiqGwqg2yztCfyCoWDCuPQkSH8okPTdXfdvHnpbwy7PPJUryGEMLyCKgNvQntD",
  "key33": "5g2EmuCi9UBfgDkic4Zw7t6H4jMhBVgCHQvDzXYQcaWtxMbPvuMa9TAiYnkwZp2Q85H21ESdE2EAASACuBHZHsG9",
  "key34": "2Jxvp2A63FK4tkmmkKUqifkHC74SEhAM8rkCFuDJFvW8u7KDtPa5Kv87hEvAujb1WTBko1AEQHn2FWC6aJwP6Jq",
  "key35": "5fgvVReXzC3CMZics8jhBwY5Swp8Nq51kF8QZDYioKGSA9L1qxCWNrW84e1XdziwC9QRRVXH8mAdhHYcRz5K1PbW"
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
