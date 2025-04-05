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
    "2rAFJsRBts1Nz4S5YPyDEHBMH12KsecDNDLs9k9tmoa6eXiF3ezr2MDZQa5cXLPp1sXExzVPRSCSeQ3GuY1HQBqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHkfkY1aoKcxhJ7wZevoMArS8i61GE9Dk1WkhV8WL74X3PEhk3SaC7Q8yDFvB5d36BFFZx5B1MjGhSmuN5QiKFV",
  "key1": "2q8Lga2mZeSezaqjEJxTvyQnc4Ex6pwyK31ey276A7ztbh51hVsfDvoN43vyBLDErTyuGjpJfsWRhbmVweTBNMoc",
  "key2": "3eNYNg51Hoae1xqSAS9LoYmDi3MfZprGDGxpM57Mx514d66rqff43ef5wieP7SefbpRNBr5Et1vTck4XCVNCMQfG",
  "key3": "5vbVgyBeBti7Rag7m1XrL4Uuxf5o9Bb31Ps7UcdRK4UoiZDyypPLN8Kx2iA36vxMucsvxjf5udc3dD1e2BBWvw6m",
  "key4": "3wqXA47GUdLJ357qTM6Zx1uKaDRgPYe5QbaZJyJGPSBULKwS4yoxUGpaTYfUXUXkQuny4Hr5pqtvSYfajyiGs8Kj",
  "key5": "QY5ed8tHxogoNVug8d9LY6X19qyWfYbCmvrD16LSCzF74KHCx6TJu9BLkJLvmCpzqiRzmNfePar7RmB3B8tXMVw",
  "key6": "3DngrNtPdKnewGRM3E1BVRmDipZuBL3XGdJ9NXjC9npcL6RwibZPrKnonYYuoe1MQFy7GTTbxHvzkUR2JYHLop6M",
  "key7": "Kh4spp4yfxjXqrTVa8DGgXQvePB1MYLkBjxFQsBGLoRVz8q3hwGWdSDrzRPJE6h8nUpErGupJzEzobs8khECyxP",
  "key8": "UGJKdVhgSnMfamiGAT2g9N5TqmEAZeHQKrx1P23sXLaTfvDFyKNGZtjx5JEq4xexg2XyQGNe3vgCQKaJmNTFxST",
  "key9": "5Mdq5SC3NUXAm3jtPQDYBhVYCUsSc2Bxkewe5iqtEhi7ASd1mgzhhjBrQc6NDP3qsQAPWFmqNeMEc8LEJCcJbXyt",
  "key10": "2Loq8ewBiwuy3KaGNLNjKLwAjTzzThjQwz355gNr9ZbprAhwb5MDG1HigwCXmCmhNGGuXXtmcA2TGQzggVNM8Pqu",
  "key11": "dNsWK9SrYQGSqq48db8WgnAgAreB3vKbHBaLkLC16zTTjQDN9gJPtcxqHoohYLsc2NajfDbQ9FaSDFaLPHEBw4g",
  "key12": "3vtQDGSaGkUy9bB8vumPNK898kEAr4zvJvMZHN7VczdWossJJncLWNyWSM77uPr3vx6c2FaqhB2Dxv9kiux3qwdt",
  "key13": "4WKsm7v7SKnKTtgXAbo9o8z22Z47Rh5eXbTfpaDMKn8HTvZ8GoFAeBeCetUn8dtDMiNVRTYwHZApSA1rxF9r7pVs",
  "key14": "2RTQoWVXJmkWCmvMqjJ16XvhxF2KCgehzpkovUPbVj5jL8EhaCAEkr1K3vdJRTXdpPfyFqJLtrxBoNAPt1yuEbjF",
  "key15": "22VTbYT12hyycb1fZBgybG3K7SfTiAfhKQgzzi8GpQX9sBMWUpr587Zf5rZjyjCR6d54Bg9N43ieXSepjYtFSfAi",
  "key16": "2Qd2iQg9HwHoQ2j352QqY2a3pNLg44yCsKdHEEgeqzjLDaU4nAzPVRkRj7msMwiT649GcNtXkJyZXQDpKCjcchPE",
  "key17": "2v12SYFgWna5eL6mgtEJWF53FFqod9mgaToYNjt1C3AZkNQaj4grp1KeuvVyhwZyK83zjtXSC1VnYMH1yC9iitgp",
  "key18": "3VHaPebtEM5uyNkz89E6TQe6rvbhDtxycLAzVZKAsDZUXu7psuf7w8dtF6ZCDGuV6bb2Q6X3vHRqEpXgYMLT9mfs",
  "key19": "5MbjdCtjspbqLe6gdnGsreScovaQtMGUxpBLsUfyPq4SBi7XWwfJy6gUZ4WoNRkDSEn4Bm2PDKJKari11yV5WDmq",
  "key20": "39V4FvGKxohEK5LtVbtS2FUf9ni8GMoxU5FbQXLzjhrutWPu7nqUWwLvmVQqZ3uTe4J5YTBKLEcuK892hpLF2kX8",
  "key21": "5E238jmM34aX8f4HPhoAt5zPBUZheZs9BpjiADybDxCvrn4jPEmMdmhWg1xRksi4XxYgaMUPYNFE9fSEoqiiDww4",
  "key22": "KS5RUj8wVt9L2Rujg8VmKVkxm9q1fjJEdCqUKMZj2wMDCsPtb2c8xdEQfKdGaoVjcjAnNuqBVi7p2dUE2GTWqBB",
  "key23": "meWxS9tfxo2idNfhNcicp8eSMnGZPjS2K8A8H6A9CEDU5NiMahBXGTo3HQ7cVDwbhVXSuau11niVU24w4cHArcN",
  "key24": "647YqYH62Q6weLXKnxfErN92g55ZbWpd7g4JvE3M4Z3JPtYBLV9PuLUXVPf8QupXm6zjGB3YGug3siZpJV9hwWzi",
  "key25": "255ynSTdpLWHJ2i6AZbon3sop1k63vBT6xKVQuspFxcFktLDUscVMGsv9YtQf4x6yjwvRyQ3PkR5AYyjgy4VDsyx",
  "key26": "336iGpg49Lwnq1tAJVv3XDxtH7L6DhWqG1wg9jVGQUG2PNWyCwca2jUKRUPibszfZSc82PwuhxU3mVr5TJxdPipb",
  "key27": "zCddC5AtNhbGPXHUc1S6Mi6rihfiK8nEGX1LQryGNkJxYArxF3xNtw5XM9NYqmmpjLfHgEgPX39BAQv4o2LC9FL",
  "key28": "2US1GKhbvcdkrfHVU423qzv4hauqNJwimfwXxehgp6a7QdWNs5PH9evjikvqkwThuBnbto8AFzEXuQ2fbwoAEQRN",
  "key29": "5rAQM36DXfzuqrsRWNbuDJnKeE96sAHrJHSg3Sh6GXmhC3kHnkd1hdJ5sdom6F2PyhRhbYQLAJwk5sMbWSfJNEN7",
  "key30": "4TNu38Kee3ZzMAzXZ8q6cu64719dEdHyLj7MrMAjjwfWX3yTadf4s5o1fYtUEacYTh5nGKvRZoNYSMSm7xj3AeLG",
  "key31": "3JKT4eeFp9em7LM3CkPpTRGe7iq4QDa72vhTjk5ACe6FLd76FQaeSX2FE5AcuStAkGcXS2DRfePQpBRz6oZP73nm",
  "key32": "34ELJFNi5KGRjGxohjhvLWWVuuSb2r9ek8SCid9XqW8jiXEFcNaAU82Gz8PYf7AzHxHPnD1tmUSMWroJFBUYRvt9",
  "key33": "RrZ4SiPncHPVmajp6jz2fBuSqLFFF7YQwhxWw2Sb7vByV6GnZjFd8foQjYQRjjtR22oWUzoLGNPqR7hPyPcS1VR",
  "key34": "34hdoSbYDGapvvcWcZSLZ1xvSwwhUDrHbGY9Jsh8wQqH4KSGmxrn8REXRjUNVrFNgB3WoDGncwbLyRQxTNiCmti5",
  "key35": "5j6ojP4UbbUFk1xqNPJhv4jddRWBQVNr4VVvh1jbcE2JSYievuJexnsKdDeHDgs9ns87J6vsGGrHeKifWe4rVKvv",
  "key36": "49mPcPMVWV2gt7CC215sxz8YYqM8PwgrEiqVPSCLe9PXestAWtUkUmAhgFcDWga1RqeibLRAfPHTyQ7wppHzpjw8",
  "key37": "3AebL6NSwrnFrYBQFBVjJPdpTDp8th6RkvPN7Ydy1VReijocFQZB8hDaWneR43ZwKigdecewvxPxkJsFLxTNeKMX",
  "key38": "2Myj1Lqb53xpdKvWUasFqjQsh6UQTgyqBL6mFUcCJ8S54yrp3X7J28osE6sBjYJWxpJqoUxj8q9cWQHFFnLSNDg7",
  "key39": "3PER5i27rUEbQL5wYSpgSuz5B2ppXScr7zi3nRpXu4FKt7yztdQWJAPKpWnkvM8rnuYMsit21PmPuh5zWXWoJsMk",
  "key40": "47H2qSHnL32XvsWCgZvCn9hBxqutnS7VH4DWgKZhcRRUweZCHXXjAq4ANvHHRMSXyWQMmtjb5DFjz7Xtcfv5oLM8",
  "key41": "max9f6rFHwMkpGKiozW3WWURgJWYPrLyJnshyHjpHFVrwfcJEq1GmAXaJTbPJMjJeXNFvcY6xLDcvwSDJ4ftDK9",
  "key42": "3WhKFY7MXxXM7mS2qPMLaodU6D4Aeom64yaTpMFzGPyvJX5s1KBXKwdj8fbzvgL5h1hPMnYoZBWDccv2cU1Wgbic"
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
