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
    "3brJMDAjDgSBtiaxRLndw9gpa48YBBmN5SvnRoT5ZBUq8uXw1pu3VM7cqiuMjQ9dQHD4NS6vjqHn3idBW2bk8UU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTBHadNYwRBkjAY6AW2wU4FU6KWuygABgs2kSvZeAhCpq27m8SzaY52UyvdLrifsngge5GzvJk61TaugaLnGMkW",
  "key1": "2GDR48dK1mm2aLgrQRghN87CoJ2yWJZjiCaeNSnBqY7FkaBVNsJLS8JUqn8M6L9WsRSVEFbyqtNauZ1RsDX74FiD",
  "key2": "32RFkiD4NgS2heGEmPnD3cf81MWJ6GBx5LVUenQ5AidCNRzeP4X4trrWt9C6QVeLioKGSxNRLRd6RLuGKobAHbQ2",
  "key3": "48ccfG7u498S424RCk6vV6g3B135iiVp3B4sVCqqoN5Yq21SdqVXfZtZP1mJUoL9vA446gUfKE7JzMymAB5XcScX",
  "key4": "2Zo7BedHj4ADna6P9a666ACSAVrXZHLDMicxDxzkUAnkMtwAh5RkoBM4smiL22yoUV7jjQY34jfrdpUQ288wHuU2",
  "key5": "4vxiVUmSXdBspHTzapDj42seJJk57YLPFw9e62QbK8W19aXrPj9P49MFeD8tgW7iAMWZ5fzkG1vVDJruXSzWaR19",
  "key6": "2DTTogTsd5f98AbhRA5ezBZFco5wE64YoArWh7vAKGa3aDP6GxdCeUR5o9VcCooYgXFXGVBj6F7YQkh56La9zAjk",
  "key7": "3BniE5KL8Sh9gPc743e4G2BZfn6xhs3a1hqWnAS3zSyNicv7cUNu7x76g1L9ergCLEgcgWJ3YkGTxTvLsB23oHns",
  "key8": "21SKNFBD5nVhLivFkNhv1iMj684QMo2RcpCocr4QaAdP5GUgsdGMsUEQV5C883FVQGxymVNzSAafYWXsF93f55gn",
  "key9": "4Jg9dLw4bMoAyCq9u6632hietVPjk4CKXpTqMa5hRdB1PCCr5ywUZFjPTXecbem4daw8WmsabBDVAZ16s6rJLP96",
  "key10": "3adwLYA5eJFzfEid4JUB2Aqkt4DcWTqMJ3Q1Ni2uutmT4aY4FzrV23cxL8uKP3ZHryCYD6yggj4FwcfPWEWpimvE",
  "key11": "3ZZVExQhwWAcrUoTxkYwaKHJSsDAAWhTQCXuMf3eBUgaz7EmaVqKDMCtrSbrDPhyDbDWb6uKryRGKK6xQaccKhn3",
  "key12": "5qNRzZgzNMLv7cfnnwxGnCSUkx4u1yPymSkdn1rq4dQhXspxjRcv43P3GfaTWfV9CeALd1YjstZTgNJehDLR7Evf",
  "key13": "33kyHVi4FrXZhfYQ5P2VfJZitaeuLWnF83zdEfBTx2mTpQXXhTRhM8heK5Dk9mW2EEAoayCgQx3VJfgptn8WfQDq",
  "key14": "ErcTabUWkBCvpcJXBptHQkPfLFDWk6CUw9G7Tq9ZV8QSR8HfmU58KHc1Rz9Hbn21QGRiJL2HrDWazZSDs8vJGwu",
  "key15": "5qeTZZr6qV4XcFmJiUK2oxoWpeqvvEcnH2txb6okbxS1Kh1779pBqazdTnLkTn9Pwsn5n38TLazS4foy3m2WYNma",
  "key16": "3F2tLdZtjn1QvDPWh9n57oQLd5TFVkxwYYGrcSdV7C3ndvm33eLCaBRGQMC3pXpp5T2Uh6sLcshhA4M3BfjyM6K8",
  "key17": "5sBe6RX7opT7ex2nt9cj3XuHTwpuZ2o322g4tKxohgnhC2gG7hErt6xeLU82KfyoTG236v1qzVQ3fkBMn64TAtQe",
  "key18": "2wce9dhoEJ7jLKRKCTaHDPCnwLy3T2tYWMDCTf5RQSX1X4UdwK2dWb2VXFnaGgUR7bmAw9fe74A35HPzvMEdx3HH",
  "key19": "RGQeHuAqFZAG3qKFxcWfy8foNQ9RbdD2dXEAanohGypYL8xFFZ8pZL5cz7QrV8tV4bPDr51grT6BDVSyG23Akh1",
  "key20": "4N7utYFgcpz8WufSLRDdPrrYMpV74CcZPZRB7Ty16C1Da23LQ8Kfy1WJJQBZPx7f7LdQ4btNK5Gc4SAwaZFngwcX",
  "key21": "5M3fKWf8dtgVKiKbKxZHYN9XD5rxaHXXNhCFFoV6GpNat7TiMk8JcbyQpx4A3ncX2G6PrFRLjYGaoCxxU1FjxQ8x",
  "key22": "4ayBMGczLExzg6JruL7j1yBooB9Ac5jvHNyp2kRTKK8Ecs9Z6hEa4ErVzEPMggbhkDCVSUJ2iYCCYDcn8KgfKJaw",
  "key23": "4pxwtFdShsSo2n86m6MmeWbwMnusrWaBR2AVoY48LiKvLTJ6L65T6sFKemGxktmSnmahX1XLqrAJ7ptjotUywyBi",
  "key24": "Hx3aoN3y4YYnhQsPtPwqH2PntuiV2gb7iZq43jTP65FPPQTA6e7nvwgDHucidQcc6hjv3Que2Nf1tGtK4VL2QTG",
  "key25": "UhX9efBQYAn5fKjvdxYoztGi2QxDSsaB2b3Nh9n8CNjkjaiJWmc6K3rQzEEzt6GCS5SQYD4yjZ5yWLhvQfwoVB8",
  "key26": "4owF3QksE97fKC2DS69KuU9qdNBMm9ncKC51gVyKRiemiyFTjyUzGP2nDhSXBixVCivQihH2oE2ZQJtro4ZVGRk2",
  "key27": "66WnM4ECgeetAoTUdesEDRBBV9NqQe6FLknbVgmBQAy1qtMNMba8XwMUmmrv6RgzTxbKK3gqCAet4UY1echAZTUp",
  "key28": "2aqfHrsSihyKM7ws8ZAsm6dQSfRL87i1sxhPmLBLmsFHNtqb7bH1ioPXcreweySUD3GoFDyAKenxCnueaRi86nme"
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
