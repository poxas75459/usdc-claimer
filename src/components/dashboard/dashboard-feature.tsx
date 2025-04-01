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
    "hgQ4N9UeA9zzNqnHPRG9pZsgfQkPr4ddTeKiGLUe2P3Nas6DXfekCFX388ZZwJT3aK6VpmkjA9abv5fLP3RBaUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52vSs8hxD831ruJkfZWWd8A6zxPdEJRN766oenf8CSHEuvbGD1L5x6xDfAL1ZViR6zRyKBxPECaPejStkJpwsb2t",
  "key1": "45jMnJP6TQQXj9n6U8h2kCrBRLwQ4tAReYAvk7zQhjTAzAXwSXbWg4FatFtYbwopJytkivtscLKnK93SwUZfV9BC",
  "key2": "52KwjZCUiKeLNsy3QydAm3odWLVKwgQit2VEB4Zu6XAgTLn9d3fnVGaof32eLT2ppruoCZotDnzawBF9FbytqCE4",
  "key3": "VPRAAPkmyRUpBDU4vTAM44RZtNoaQuvyB38f8Z6FHeYuuSefFhuNzpVWcqVxgVn5T4N2rp3hjxFfaUe15Qc4ePn",
  "key4": "29AmvvvXmsqWXzhiLdKvu2Q78ivkfBkCoWoC7AfxupGa2qJd1ePCAWMbpSKvrkQ3XDUFqsmSLdmuV2H3nuwWjEib",
  "key5": "3EkoJv24WNoQZBUJ1hKyCSpSZnPV9ADTuQNJSmmPH5pUvxXjJYC6sGTehd3dc6PCb8km1BnXRYSJwZqyLiU8wszx",
  "key6": "47koCW8DvNqEGXhjJ8ekiedLuytY1xMnRhdJVGfDP9pFCt7rcFnKg84pBsBdLCXSZYr8f1pjfPCcYQs9wcrMiBH3",
  "key7": "4S6Cy5AGdbH8BTF2ZZPVocmmnZkNhF8bBkrBgudGC17uQKhL9Ea2TbV6BZSSLwkyRbYV1L9jgmJASYomrsw2suxG",
  "key8": "5pHo5niosZ5gJLhhCfeCqNLDhiqTkWzoh2YSYPXbGyKGM7k9rHfZANYVkjLWofEx42Jr7G52qMRVwwW3fReB3d2H",
  "key9": "7oTGTJH9VW6127i9KJH6FTyLJcTgSqHXa4VNP273ih8fQzYoyzr6BVCaQ2W5Xc2aaY3rYz4MdAyGPntfWyLwVjV",
  "key10": "3qg3BdpEKtQB9XS8BzEQkMUbmZhYehWHudgL3kNYA7GMPsdb4HLxZwx3GeQdumemArjWk6td3UsPoZvnLPAXSnG1",
  "key11": "4CZAewo3pZnD9mBYjcuGY35MD6bDRnJMS9bpY1fZqHGehSQiKHCJ35YCpykLorUyujL8P2peV2mAGaXX33hdcyf1",
  "key12": "5GKvJgnm4vApGg48jRnErA2eqwcWCMrokaMkgCaS9e8jS984F1EopFAA4o4mVYiFEG3Yb5V9GXrHJwrpz2HFFggo",
  "key13": "2kb88S8SJxKTCsv5nwyZzyBuktpWZMUJidZazv87HEpEEQZzwd7MPNnrxUxT86LPpgAp7GYTvZS3UTLEquxrk8gb",
  "key14": "41b8yPgbaqUQszY18y34xFQsgj9xpmaGxTSyAgCckkJRP2AwJb4vpZEM5BESRPkt2KXpAZkKEWDNpCKiMYZ41ocP",
  "key15": "4PbgS8Rs2iYJpyWasZuudgRh7gzKjpKfikKq3cHKrZCaobFjC3RaGSLoN5MbsmYQZEgbnZ6MwpMPurx47o3Zyusb",
  "key16": "4SzDBjDeq2QfRDBZwD31mihvFWssk2UAFfco85SwziMFUb84emJpqLN7NKugVKRLNvWBxREpknJRvjz8kTon4moX",
  "key17": "nenTzPYMuuyJ97r8GhkYMc8sQGx8gfMjenWNBJ4L8d7d7QFH64SnZFnXAXBscvMUyzpLSZ3Q9Jbjvy5vRegwPdS",
  "key18": "34EBDwZxeU5B6yoss3Zzue6hrDUkd53tXWgc7nPmWP1Wgxkb7PLAN51PTpGbPRAQuT3UTb17vE3AZWxtD3kTyS5p",
  "key19": "24dYTCufwXewyNyCe9X3NTGpZhiYQf76BfeDu3X2vsgJbb4Y2j1CT5iU3wdY77U2EujuqXvhYz45aAn4ADwGbg4u",
  "key20": "MSNPViZSwvfgzcCnf1kajGtH55ftWnZUe6rdjgKtuqe1rMRsMCYkjPyd8ecHzat8vud8tfn3yKBZqgavGCLGUuT",
  "key21": "3rFVhTPUtmFCGkpUeGwGatAFEyiqxJtGTTGSn7Fvdcuqa1J9moMxcXTtnUoaM62KgA3XLme3FeD3NE6eVGyGsZ6G",
  "key22": "bxXEMkRGdYdfmr9H6CN5D3jXXZQLWSH9JPS1NoU9YVz6bhzd5L5Vn9mPAWUWZqaLbQEa8skSZma2dh7x7dz9Nus",
  "key23": "2UqZVoMLwrhQRVM3hZ1Yuy5XFiGwa9CAGJUmqVH5pobdoj1uquU3gUZbqcKKpjrGbBdA9RS3iN3WoMwyZzH34WcR",
  "key24": "4TbNQYNhcbbFDmqrnqAegPHKUJXXBCwUpFkn6DYvcVgnu2zn7nvKUg1NYXNghXfLWFDwGqYQPmQznfJuRaE34Rt",
  "key25": "2vvCayWgDJ3VtdHndcUaBPABfdqQQdhnrXBPaxgbdntxX44vdJWW7DYTgxN1JRdkzpwAJsF3YRUiX7VXRMLRkiWJ",
  "key26": "5sajzrNHQ7Stqa37Y5if9iTSkKVjmzPWgF9WPAUskBZSGor4nkzgkJyLiw9UsxYxftutHvv6v8iXXN1QxCjqRLjt",
  "key27": "5Yk1QsM4Zc4vrFmE91t9RhxmZ1iYH6VE21cAt4nU4c38QLGRiDK2F8NrmzKMWpCobSG1TmoFsK25JtrAVqJR63qY",
  "key28": "3xRhiNqDdeV842P23S4zaZDNe1yqx8xtQvNGrjTnMEmkaFfm4FNczpv6Q3KLfqnGeZPFPqmK5EAhdjek4qJef11M",
  "key29": "2i7DRKjAqiUQVhmYz2RUFbEVG7t6ZNCrx2pngAwGQJF5mZ2Z7qYAkobRxev1FphmLVkaEXfXbYq2QNMwKkPMiufF",
  "key30": "4kbLJ2m5cmuC5pQ84w7uooexM8GLyp55Dfz1MuKBcbDdJUXGCtf1jntKAnj7vdWfpFUbjawQPnKidp6AuazC5eyi",
  "key31": "BwTEh13vcwpXvGFfwFZ84e3mC1iZHi6pckStu9J5Mz1d9mfJpd9QLggd6USLeKqcLXwsGi8UZBPN3eCVoMNYY6Q",
  "key32": "24REZ8r3QupzF4cwGMtybYYvSpkAPQJQvjwEqVRtnPbJggNsV7vSY7ZKSdFQnP4hgDymWcKH4c77JSmHbZQuuFqa",
  "key33": "edyKodJ4KJqLd3fGjxMucZqg6UZ7MiJvz9w1zVnLvcVUTDwLqZbxZfacMbywjvTBjfSVVfySVHgFGUGofb5bTK4",
  "key34": "fFkHtwsACAvxCpC8eFSGxC21YRiwYSypUGGJGh96ZyRaGP8kdmG4JL6dWmytrsn7vFyY93TvBKUAyVxnNjFSuZr",
  "key35": "24S9S8QHG3Yp9tCPNx8fav9CQLKQG2quMi14oUUDTvZitABa8R3BzYmdSbrRu7pNyc6goRUkkcoSHoEXtTG3LFaf",
  "key36": "22ecyJuuSeJVcchJ2C5zMdpmzNeogLTK6FHXw4uWfp26st7kjkmUDPcxZYZpvaaGtt7qZqRp9Ci17Qmm2fSbvtDP",
  "key37": "2H5BD1UokFiRvrKTjbp3b4EKyKrxKv9Zm9amTiSAZMQYBDUqEGNUvngU9xRb99VAU79dSJBtDmpTaw7EUtUPBMAt",
  "key38": "T26cB5UTufNChitGqB9Eu9tH1eRe8o2UhR1EBLnsZbkuX52DzPbmifg4Ts757JmE45C1vkp4Gx3XZ6KwGRU7G6X",
  "key39": "3oy1YSYbvAfpdpQugyUMu9cEJCrbQs6EWuGKheGhGm4D5errS5BSXXM5g7o1FyzsENZSyaXaj25o8fiX8NjXQb8k"
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
