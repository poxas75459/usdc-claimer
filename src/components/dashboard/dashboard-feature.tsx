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
    "49kF5CUKKyGdcFTQ7PHSxvhxZ2NHSLXzYqBwKz8SinGHzYi4ZwfcqJXswhUAme8qy2Fef9yhVNqNqguTsrzsHgSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjpULYTiCgbaHWSpLbSxFS2Xx7PBTARqJernPnjbKFbd8uqrJLBRg2qP3z2781UNDW4J85U9dCQg8J1b5dkK1vn",
  "key1": "57EXB99dw5fiLE5Lnc6tobZGuZCdJVQKkdj1fqhtRRFdSNpvJ6mCUredJcsipzKRbhosK7Yur9aemFtWcKc8wNu2",
  "key2": "2iVWHeLvKEAni4hcGqQRnnkgffhosdX3x7j2qY59u2Dv68U9S2epjqLUddukMXw5FJ6UZVU6RFVBcCEjNfVGMrrz",
  "key3": "5ttMoHWauyCWTMKYVQivXrC3Ua5ZC1WeLhKF8J7BDx9c7XQBmXB7HzPkPiyiR87kwRRDkQFirdfxTw3iKevvu1hR",
  "key4": "4gHMBUeXnrqXsTZDbMqZpBbukEpCJX7tJtFpJqQ6TmmYa9vcxX3RamNNd4J8hW2c6EeDozjysJB7gv7NEU6AT8QE",
  "key5": "gCRijFsq4tvYmzhSQw8HCiEYPAe6gXJ1wNrrobtwFs6p4zRwJF1KVeCTnRzPPk1LBaYXMk8pSMaEq9T9wCNQmKT",
  "key6": "5uT8FoWdkhEh4qpmpf4JtWd1ixeDmk1jyDqGS7jqxGBrxx7Tfj6NUg6voBQw2EhiqmmaafkDTgGTPzMwtkLhVbHT",
  "key7": "5CNxyXuUw14MdRkByV7ekHz9LZJsrQLEKSkzPqsKxVTm7jC5PPJgN3Fc3sc1Mdw5vraNLEcgZomH1pSr63wWA4Mk",
  "key8": "mSSDuM2wxLN57Ko57M7dWJKLjAeiwpRiMbZZpDedL7aQv75DgFi34Ez85mAwMj4dFkuvie58irzvqTUnEKdmPqc",
  "key9": "4oMqrDeqjGn4dzE9HwCJ6r4qQ4QTVkttEWo6fNykuXXE1j3q1dNZy4TFEy7YkNJL4YrY95nXEcZZkVErFYnXoAwv",
  "key10": "2F3GeujevysKZaVFuSTLtmMDzwpQftteC4uwuE9RbFk2kWkNVAfJ9UdWhDjytqSGquJ8EZCNZGJAuuD1ZXRmjjQ4",
  "key11": "5e2LD7gygECNi3qzSyeQedPwshDYJm1h1btoyFchhU21Lvuh7JL7VHZdoXFbQwwbPoHU8QBwpUr3G2tod61oZSFu",
  "key12": "4BPULhvWVnkjkFXRMND9xakNfkLdRXhtpFoymJtJy4bYNCZzUYDYDcPHS2tXhYNTwvkSQQAKjAUnp1bwtbTMG1CF",
  "key13": "5GSTGRyWorjRodwA8AK1gB6f7MWtfxFCdcHvGVuWXXQFVL8zumUKZTGwroxPHHDyZSEay8qwjY7NYbi7GATFtZ8N",
  "key14": "3JCfrWoKhD3sUybFwdqERy43DZfcHQ9zHKhr6PWZE3ECcNxa6zGSqavuAtHvEADpNQGGGV4szMPfBE8JxAKG4G7M",
  "key15": "485vQZRFwJiba9NtQwGjP4ekN6TZA3AK8y119L88MqN9o45mf4WtEps7zavfKLsce6NjTPC6GU8Gkkvo7U6Jj1zo",
  "key16": "3h2dQfSCScqRgahZC2UU2u8HouC3EkDxesZM8Sgam4YNQk1FFcjCHeuRZXVHK4B1srfsR2iJBtqPzmBaVtr7EEBT",
  "key17": "28ttLxd6SX5RCyafbLQQ1CrnMyiBMDb71V83AKB8Y4h8wcS3rnL29AJRxvHGDfHuxQy4ckDj9x86smsXcTioSK6Q",
  "key18": "5wD9TTBapSV9UUq7xuaiu3F5ZD81hH6AkSoo59fyB5AtafTeZohRJreoPmADrMvve8bgPHCjtXzKrkZrXw5eCDgP",
  "key19": "5BiKjCEq5ZVr6rJJ5KAWkDKZCgtjXDyuwEyJEeHxRjzVcf3p6ewivKc8Gutqy9feFWsnqd9QWfSCd11wAKj8Sgag",
  "key20": "3TbzhCtBZbmdk5TTzQTMZEoLpzUi1ppoDJpKVCrBoRKq8zA5PQ6hfYPTrpuKioPa298pqe36QNFvUbPPbJRDS85F",
  "key21": "52G8iNBi2JJprbaaTX9unuvFb4d8KUpztiNZgZLscvQxA4dUvqBH8nTBcPdxbBNCF4bUEsY8aHaJ3uzURVxNzHGo",
  "key22": "2HqRbA28FWsvrt7gj1Qfxj9PGHzRR5j5LcZBeCwcnABqyF4i3NioRgQ8EcBczAb9jF54rXSS186KcLP1uZEi2ph2",
  "key23": "4D4KZtd827Z3mwMATxKqTWvxaqwMVawb8MQfQqFj2r1LtpuQoFKWEuJZwdethnQxvM6cBgm6ayoYA1Tds7YBc4iv",
  "key24": "5VGwN1y6KZGtgJQ1rDhnQ18bfd5fMJkzABHRjsqaNi821vViXWHD6dF9xDWntFNBK5hdqJzLpBYPdnHZ6kHmM4Ay",
  "key25": "4FVMNGm2gD5bH2vqt8kwhgthAs3nZYBaeiKLNJcx3cVcm7rLbP5Dfe8B1Hui7MANJtZymP9tXpH5woLBj97PvGUJ",
  "key26": "2s2d8N92gZLSP25iDHKSowN7FKcQy8x4bgdSAngqicUy8ZPfM3bCUbxVFgdUa2ZU62k4xdL7F3D3MppQcG6enUsE",
  "key27": "2PWmrKQVz5X4CtYnAKYxbbJsYsBNrUobWEusaQGLnLM5xgnAwXqHof4TcJ8NecmiYCXZPvfk4w5jcinPYRwrxNdk",
  "key28": "zSNvzAfLqcpwXS21wLDMHiX3aEz5WDcJpwYJeFbWn5zAgLy85izRQCSh6QRuBRGUQjnPfR7rcniHb4XepavFhjG",
  "key29": "25SckJdzoHnxz4Zw3HoCeM96SB8MnNovYQAUeJqox7dJN1CVxhjNcXvvbtBxJjVDt7q2JhKTKik1h5p8HtUsYXzq",
  "key30": "4raZscByuVfaY2rK7WyAPaXKL5VAX4UfFopziwESceXZBKq7yV1qyaX4DvRC2YeaF9PRZMYYauHkUbuYpSKPmZ6c",
  "key31": "4VHnjfwrVVru9jsUD7ea31b7JcPZduUdSRLP8eQARqAXccQ11azFSCbtUo1kNZboCAhuBctfWe6pwU8yixaoQL8Z",
  "key32": "2oaxtbkg6a44rLxGCvrBcZr8S1iinPu2NuMPH4H6iHyA6dTCMtqaV3c27f7YBHkubP8TkUSPMPFgBPLVSetgaVWK",
  "key33": "36P4VCG66dw7WSzrCpAfnyc4Jdpai2KL4UjonW7mVuwUvBgaG59yFQwbfWN5bYfD3ZFAhudhSLZewVSNRo7DH7Zd"
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
