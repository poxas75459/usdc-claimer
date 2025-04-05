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
    "2gDuZyCaF5tebEVW7ZdsMvKepX7V1aHfXNgYGhtsjakdb1Uyqord4qizgwz352rByuDhEwXQbpqVc7UaKsDg9cnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYNFA1i82ruj6E1LPPVjxmgu4Jgk8bfR1BecqtZ54YoR2SPDnqVG8gciNHNtYu5Wrn6Q4x39mn8deXt89PKhaBK",
  "key1": "4XReonTuJbmfDrboxeYKGxfFm3jiNnY19YWH4sB59bPEmV45Wnt6bKp26vRSLcTS7ckJKbW1JzexHPvzyq2WWA2j",
  "key2": "2k9GmiXc6F3rjV199zjEySuUeCXa1TpyduEnygp2W9qBHUuH782f5zvamxN5MmZ6uvLWyBrBcpLVNpR5yskqSfc",
  "key3": "4cMdw13pJtWktcxz33gTWa5TbEUVUayzF4EsGFwEvEz2Ck6xiee1kYNPPG53GNbY5eBcxa581PqzS8J1joJSPXFz",
  "key4": "q6o3ak5j63zgFpS2yrDUJozeYDvHjNodHCUdvEMdhjhVbx1EQ8jsCk3LmrabTix25DXAsw7MSwP9j6npisNEzYL",
  "key5": "4sjcawTmNgEp8BtPkVSChGJYMw9tZWEV1kqr9BryyPFys4nbCupSqNPFQZhaZkxYg7o7iMJJcTkSaGX79Hh1KoGb",
  "key6": "2bti9KvPX1JUoj9tsS1HSsj69NZ19MgQR9wPeuWuDS1MTnUX6wQAbQhLNez1Vibz3Mvjeea3Px2XsbS2ejfXpCoa",
  "key7": "21sWkZL4r6bFzvQVPeYjnLs3HWqbpmxzj15uhFHr3pxaAB4jCHxFoyT5o25hTCejqSYTZnwzV7NUg4SXD2bPfnz7",
  "key8": "5p46G9AM5Pput1S9tCupkzGQfNqvCCpmaxjQjNjLh5j7SSr4pySnEuq1YKnuw9RE6K4JfcSQT9WG5CCodxHasZPB",
  "key9": "4U9hFVowDkNzvAagZuLVWiPVWuvTHE7hNWuNu6whKNKkXYmPXzUjSE2MQpaLbmTTVMVwW9AQZPC6cxKqZPJATyfG",
  "key10": "3dwFcddxNdKMPtLVMsaoHhkzin6bruKSCJnk7i9TVf82gU6hAvHiAp1JDkSgiZh2XJoUY6TorrhxvrGA7C9zg2hJ",
  "key11": "4EKtrGP3SCdiM9k4AEk16n4nGfT2MZNx38CL6tMpG6sV5Xc9sVQRjtn8PdA5jcNHWk6x1kQxH4TAXHf4XKgJMyZN",
  "key12": "HBgPubQTEfvtbjMNT59bMk62MdtZGhfFq88N2ZAbW42gMXKcHAYMVTSUmsWCUZNvcvDmQpdSHPafjpNuC7iYPTb",
  "key13": "4ryaVfXGcVu8vZq7D65JdEb4S2rAT8L3DhKkXQ2hxrcoidrBFiEqL72J2mt7bnANsoeSH2aVpewRbSdaeDCs6N4v",
  "key14": "5okQeKb4z3ddVBtFso8rvzXoha4L4rgCMrDgjZXddSnXRn3LQFVHAVT3zTnxxHWi6hGqj42tXozBzUGcWAeLVVpc",
  "key15": "5crwGvCgLGWvm19u8rRP6ScLx9zjFWhyGrPQkvPR7gS72kzqEpHz2XNzwapJ3Hu7iyGuu7zSoBGgE1KrVPFRUxqw",
  "key16": "8voUUFH6A4UZ3cMkcseSwWV99nJcC8cbHWMKdaHBaACyeonVKsZr1zs5Foh6bXBRqcBuYdSmE9EAr5UD6JtQrPo",
  "key17": "53tCb2pdS2BhJqra1GkkJYM9osWpYtXS6ihokybLKiUXsT8J4P8APpgGiCMuQmpQGPtsu5XxPbZrctFR5JoXehzA",
  "key18": "3DVkUb9qYBL6zPNhzbDLLngKxHS4N7HKg9tm4SXdwf28vE9CRWgTZBwrshorLZ7mXJGg3doQVeAMQR5WP6GSW1vE",
  "key19": "5AzrFXe48EQCdiggbkUvC3Fo1exgc8WmC6s3ZcDMjToMCUZ5zrvisRVjGizENR9kjhS8ZAfGVtnC1WKGuaJyK6Vi",
  "key20": "4V44kxEpSiB6rLoi4mAARPrGyEs558h8rnqHgJ21JsJSg5E4towv9ux9cY14HRhfXi7zgsCzirjveEK7cKsyfmYZ",
  "key21": "2jADcAwN8mL1uesDfgPobt8QfWaiKZYDugXSLmJsVsBm6YNKYsq3ur2Pf1nceqz5pxUsDMS5fNwqwU7kuphydv5q",
  "key22": "4f9ph63s61y8FB2dWKgvCe6UfwbbCoD21ATy72zwNzAVPKSW1VeH8qpa7WheQ7MLhBe9QPPjD7yUVB6J3spBi2HF",
  "key23": "668qKBwu45B5sPWnYDndetWdms8Wn8cM1Wx7fn7eKpDpP9qiQhZV78bEPhk2N8DvhRGfY4yLS5jLyAYEAx3eErdE",
  "key24": "4Pwcd7Mpynqban9K7HC5krDaKotCzKXU4DxkQcnwLjdqozq9o8LFGqKL7QVoBVKrMwNqFwUsG513fUyKQAXJ6svQ",
  "key25": "3UkrSv2Xp175mA4xuiCrGAvYyM3SgrpJbgcKhobujqFVUPmFBdMwF8XKggnW44X5xkZa4MRs1c7YEE1Z1Vu5BbPc",
  "key26": "5Brq3yV2j12fEozztVnYjymRjWqB3jLFQYPUbYWNsvWCCRCFqtwFwCt46vYQRtP4yzzKvoDpPbvz6Vqu57VUPZo6",
  "key27": "2PdNL684Mz6JpuAZdGUvbBJYXF7G9rCMGi2p5Ghi3XUutkg4tRhzzDX6WJe3xt2xZ6UwDAmgJgueXCDLTuZt1RcK",
  "key28": "QKQr1UE2HBF526EwMEd76v8chNQNvHBSNeWv1TTyQAc3siYKREqBffKjU4va8NH6gMsppxY8ePMu4y44AuUhfHx",
  "key29": "3UuToH7PztgopYy6zZy3EnUA75sy9HMPwJJ5PA2TeJzHAb6G2pdbStP2ARmkKMF8vbGuDKzLmUcSK2DgeRDgy5Cq",
  "key30": "3Yuwa6pCTpMnmwQawbzBjRZdwCygaCwzAADEqDKQDRwauSD3ikYJGSK82TDgLtTqBiaKprG1oeAwGvmzpvqyRYP",
  "key31": "fv7w2miXs3ZPbSYqCDS5xzBVqz7UxviZp3iW839DA4xQNcMW7NJMjgiXUza7FjiEk1STGxMgcVbYUHMfbaoL8St",
  "key32": "5BU8GoMo8bKLG6eoL9oDDoguQEEfwrZD8p78JEeFnQkKQb7pxPux7adjZupupXVuNYn32WVVrmiX4xxtpX2mHSr",
  "key33": "38pMp7uJUDhJ87XVQFv8SrQNbbba2TN5KZkbdjR9NxYnqi1qKY4s3GMktEyK6kj7T11GmrP3YdyHm6MiT3sz4j6o",
  "key34": "48ra6mAGHcbDpieSjGkiAp7pv7mZwzrqrtLRN1ygsmmhQ7JR92WoPYBgTqbNHhq27WMh4znsWxQhAsaVT19CsSY3",
  "key35": "VYEcZMKxA4PGs6YYhb5ctpYcDFi9mjZmN7CmXE8aQ3S9W2cXmNZSdpnzXEbzM98VgJMpkCqSLde8eUsQYrQJfsC"
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
