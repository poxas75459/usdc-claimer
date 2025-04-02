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
    "4dBNthJBy97Wc4jiT8r7rcxuvuRL4rH4VCE3rHNwvX5GWvJRzsEPK4z4qRUgNGp2nwVuPb15nzHB4AHgf6DvgMFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zG1MvARTfipmPe9tNAPuKt7KdbiiMjNKwmRXix4uwWi2D8x9AJt5RG1gz3fjPR2JkmZ9BGQk5NFf4Y2tnCuyuhL",
  "key1": "rZttfCHdXzBk4ELohTgh9gPy7uL1PshKE39KA9M5F2tJm8GGt19Zxfo8vD21Zb3stHakNxHrPH97sGbsQXLSweD",
  "key2": "5paSSVq4wRtLrQb1rUh2DsqRUeR5YCE6qKmEBMBm9WotK4KjEg9NqqzeDiR1tjzmwVDPzTR2as1grC2XYx2C4Z41",
  "key3": "3a7ZPBtmN925VSBg4dTfpSF22SJESMTfY3UySZXtSadbiGdUkDwLTc5DpsbkfjCMX25TGcQkixbQsJiABtYfut4n",
  "key4": "PMz9bLuyExFYC4RhLimjiZbos8F9kmjXfHzBqbBTXH9hSRAGqmbDAW68xNNsp9dxYXs8Mi2PmFqDDjcFZqk9kF5",
  "key5": "2BSmKPKobLqG9tuFJqZALqxZxtH9AjBAQTLHz7dwwbeDP45AEn5yGKwTv9RBhmtEGpgQaQ6UG7enksRCta7MTkKm",
  "key6": "PexvNsmQtXbQNeNgvwP72tFizRL9QpWpucwj1MVz6pMf1jqseKTCqyDtgVSf8p2damYj2uiMZH4r69DiQibxLhP",
  "key7": "5iCrZF1LVoRX2BoKjzZr8Rac7tB8KxhJ4zRgxp8ax41fpH9NvvTJwaVah4HEZ2qykPHNgrXxxkWhzdAujnL5KX2J",
  "key8": "4okSS9WYMDwU2hWVAVrMgg9sft9ny8oxFVjGnPyoN35cjXMpcbXgdYz8yTbYESjKA1xvdwVvTwNt9cZmhGgdcvaR",
  "key9": "gBpomFabotQJnSP749FzcFwqSFx5eXz5Kv9o5Axq2C8U7JjK7QBQEtUAt8HnZPBroV9NEr7gyuXhLRHPaMGrEG4",
  "key10": "3M1VaErFdGiafedTjhLyd4BkAwotBFHX65pSq1c6P4M4DVJdvHw2tsPhALgF5xs7gYud7V5kiz4GsqUaS3eWX61V",
  "key11": "41H8mFabpz8kHwNCHYZkyMZpHxkKPeu5MyS8PqqCNtoAMJ7hqHwswsCmfnfdPzp5EDZVsrW4vhaENruqEj2s6V6a",
  "key12": "5cCZqCeUQGyZGPEdXFwQwBf2YE5dMD3qyapCDNHMoHwd1g9w9tmtfs3jzy3kCSjyUJa4MTmZNUU9qdfDCSGKjgZ5",
  "key13": "23fHRhJKsGbq7KjbpE9D3UUCmRMJ65AmWfHv1iwC6sRXoDwGYW19mCpnEjcxxaxy8jY9KXTqdXGUZC9n7H9msXGK",
  "key14": "5ABnoDUdMvFrHJJDhyPubxf8V8DNR6L2CPg46snKh7xnuPeqfszRAdMHAHqomQnbcgRx4npWiNwQRK9Vy5uxbYbT",
  "key15": "3rjcrhwmhnwrimseYpj5u2Smea14rmkQXDuCxuxKpH7VxtuzqVJYkoEdEP4prtU1dZynVCNKe4Ydz8oVDD6cgLNs",
  "key16": "33o9YfSnZzQGiRSXBXkoaZvGtSJS7DGmgzX581cBvZ5wABwzi2wWSiHHVToZZLo9A1Y71YtUahWby1YC5apRnL69",
  "key17": "2UKJEghyuztFiTpPC3H8tPcKAmoGMGJ7Qtu3pVNEGKf1ZQ7gwmcFnSHfe9friqPCqyhJeAnvEH5F9D1zw2cE5czN",
  "key18": "23RvqqPQUxEPzsUYpuVai88G4mT9DY7f1JWxR8eb3JF1eEQJpHqnKE3f8iFanfwJQX6GSJsyMkMJ4zPLMkaJPpu7",
  "key19": "5GUThxYY2U3D8cKD3AqBundFERo7US3kBAWUXQ28k7CLKLFMxGz8EQ7GuMiLzS5pZvW1GEVFuPjnHbuDunSE7kgo",
  "key20": "3qvpVfKPHwpxH4m9JHSh3d9nLkArhXNFnPJ92pk2B6eD2Hcf3SavBype1mLkFUSuaJo41SH3bMFVk5rXqyYQq8g",
  "key21": "3rWyRbnPpBWs52dHQDNcexG6ZK2LUugfmyYMohiojf18eEvqEKSFPaiDNoQc3UES5TZEBFVHveE2yvEhDaj231ph",
  "key22": "3Jc4sf189yRmyrnkzvHsFMjmvmibqwn8Cmqo333VY1rUa5KSFH4bJbWfePj3NxsPJYzfg6ztF44f2bNoXK723o7y",
  "key23": "37w4Uzh2Bp9jcDN5ntqbD1QSET4kFAVtY5pgvtMAufjCEue3Apeu4irdxqpwMZ9kez7eTbjd4g8GXjLegthgEKD9",
  "key24": "4EoDAkyVLx5YLXwQuHQ7L1UdiDWE53z5Q1HW77yZb4VWrnV9pBrWE3X1Ug1rzMvQsStXVxc79LbuEDE6Gug7Hb1b",
  "key25": "3LmsyCZRjExtMmBdqvxehFuqFMuwLw8sh75CqSFkDjqEFutEcaYfUBz88R8i9L531Na6PVtYW4kYbbhHgF2YRCUC",
  "key26": "5HN1cHGVWMMADioFPvk9T8cqKP65vFeVSbdCfu5vC1iC5wq2H1girCCAtFiMvpu2ecLRHE6dChsWFiNzkovZe6GN",
  "key27": "44svz5cCkiXE1e8uTcWcohANgbQUDJNwmCrDyrNddVehaApZ2VqfxRdsKjyeKLNL7SBocYykDtTyFfZd5DWcFqVg",
  "key28": "66STkvWqkiwTXpdH46qVjsoSFLKfpfzGceKZsAjypgUUZqXULCRvfbch3faWBvTVuvgLpQdRB4darNvCSk2knyJJ",
  "key29": "4oCj3PfTpgEThVMzvHRThutTbukHKAcqMWZRf7wUneYHdjPdHEyZv5yxu1rDeZspMMAQ78rxkRXbiDAPNHjZsL4x",
  "key30": "ZJLzfLUqCReKr6MB3xW34Uu7x388gcspXC4MjFK6XPw7HhrE173x8GnbssTPG93x3gr5tKaZkZAddhLzs62aB5Q",
  "key31": "5jWxJtvev1Ne6J61GTPRAHLHsbJw3zbAuwLWk9KhVKkKDNqEhwjxaGZpQoYGRyXXfNDcQmzMagKEA8wuSgGEbX5V",
  "key32": "Qgr3LXeDbmtTancoPKupXPXg4CBaYh1SSCtmjMSsAJKirCkDxBVc8JWWTLxCjAT99WJxM8P3SAhLdqxu9owEBB7",
  "key33": "2iLYTj7KgWTfX4KTyErv8wK89nMS7zob1ct4uXZVnpX93i41kNUoaUtdpzCcdP5ByVvvqVmotzm5sznEUuqNFUEo",
  "key34": "YtTTYu3LRC8JPnmpNpaPKXmBJyRn9JMSYkp3BiTj5f7YaKge8unNjpMxh3UXJLTYYsC6ByoZ48CGdRgdNqEZAQV",
  "key35": "28imgBxaHSvPLr8Rn3Q1Vz3YFGNhSRMuQBssyb18HjHHBrQKweEu2iDYt3QxdqUuARCavRPxVvQrGjojyGEhixWB",
  "key36": "qWnjjiK4kbF1KYvidP26XpAVA1iVj15iC578hBYQu6niGcDV4gZhdSrwGBYU8B4BjwinZnjHczchsN15g7PBcCG",
  "key37": "3ACj4Pb7uWnQZLWKE43CGDCNPdFGTfjpomyMaxuLTZiQXHshHw6xzHuFYbmqEdvcjr7mTEmDofYJLbyNv9QuurBS",
  "key38": "HCeUMHDTk1efeHRNKztGoBqMjQMhvsmDd9twdJze1qNo37uLXM4h1XFV6dEt2gv1G1BonEiMSuwDkaSBhDkxYNw",
  "key39": "34qztRgjSJ7aq6fToGhfhQCUKYJtCKNfQSPDP9KDuWoAtTBJVgeuJF1yWykQ7Vs5NpGT4prvfz6Qw3GJg6M6CgEk",
  "key40": "5LXGTUXgEiKKWAHETG18MNpkpGRRC71c3aRxnLUK8ew4sNWCbYdk6reM9ThLYzXV6HdG5dSbt1uXL7d3mi7Xs6Gt",
  "key41": "2fMcQiHcfJAfJ6orz3z9GgtMGPXvxzo5LDcQvZdT63hKhq64eDWRBDcfmzUbVCn1jDZ3aJ6y8VZVRXgGoruh5Wnn"
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
