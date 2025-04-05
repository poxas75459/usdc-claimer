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
    "3quqMf7FwasNjNtUc6qUKb6TXuBubSQtQa8Eru6joCuaAVAu3ywggt36EdDiZ2pgmwxjyUU25Yuv48jV8u5EuYsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22izfASKpJmLK8suGr7mAWQetbPNdn2KCxSmRGD6y6p82dByrLjxS8ALq5VWwwDGQ4R5WvmLm7X4UcGA2ArLdv4h",
  "key1": "6L79TJFUor1hapVT4RxvT5o3PAaYnCYyioyTSuGQAVD5DjmszFvguhE6TWefsXoQFGYhAWXNnA2vVGMhnjJK14R",
  "key2": "y2yJZnPAXsJ5LLW1r1RexogbyWKvkzUVr2VAGC1cMyFGQdsyVM1ANCEHSesXWj5YYnrdpFubWX3CeXba6vxUSS8",
  "key3": "3FPTT9VUt3JzsCfRDeunY82pPjVWfKz675JsCiPnc58koXHRAiGiGqvZaNWJbHACgeKBZDYfHfr1jMQScK2g9SCt",
  "key4": "4dKfgKy6GRENYAkEorSPsyjsQWgGWKfjWhmPPDVBSy6u9mmnV8sCL4663m19wGk2C12AybrZdoa94aLSeHGwhR7z",
  "key5": "22uRu74P5hEoiNAPNbCCH9ECEw6XXYJJbEFveuHgi5dQsQV72ihTKkiCo74MMkBogYN4eRfUHynuNAfbNdGU1Co6",
  "key6": "hyLyV6sSWBgbEVaswgutasiu6KnWDeAKNaL3wYX85imiBJvd6UhztEU3jv6rnmH9sVVYW3nHZznBLxYDN8XuF8z",
  "key7": "3pDqYcFVUHqeJ2SPmvngyh2uALdPUyvm67HvkFLgbVXgGPKUaWxv5byRyATVmKZjFWH4YXbSbxnmiQjRGv8EQfct",
  "key8": "4ixm6f39UH1VaeG5Qpsi9GSZfxqsTJA8Jg5FBp3nnjPHK3x1P3Heat3VNhvrJo7HxfmCvTtfWcP2cVLhy8Y9AS8h",
  "key9": "4kGXs8mEf2iiweXva4ibPHJQuT2jHRxcUvgyG39FNBNzSHutGHDSMRwG5msdMRqPAJTXRUPLwAC3BwMugLwycX6a",
  "key10": "kikcQXLqN6PKR6PPcB5rjorryJJ7LxSDXZ8PwkLbJZrW8wEL6Q9bkcEBeZo9Qr4yv9crmZ6xrRcpQ2CZ4hk3zEY",
  "key11": "89KDsLXYUNfpYPakE8WL7KQ1QdBSQvpw6y337erSRk65JjJV38HuRyXEMJkcrCq2Unz7CxUCePaWxZLFmSNAtBR",
  "key12": "5UmbzYuRcymaEeuqifZotxZKpGbw4s51SD35EqPqRANYhKccvhktKS8YogRUjW2xeR6T5ZVaaWTds31Ar8MpAPNq",
  "key13": "4tvUav4hWk3YXim2BkM3mieiByQtixNnnSGfFE7H6VAef7vTCNKufwVh1nieQneeTk7Jynwoyh4fnYL2QpTdzdvw",
  "key14": "smPftkp2mZ1JBMb3FDbobDbHtjVVZeisYPN1FhzzSbcf8mfbqyeuqUv1548qJuNSYnM9AtDzBvNhvu6STrW2RMk",
  "key15": "3CdtgZPzNKSaKNiavdf7ZkQ4CsdSq5yN5Bg8Em4o3DAR9PzbaFRuBJ5TKuBgETuNtXbp1Ux9RzZJkS5Q2MY5Rpap",
  "key16": "V26mbRYiGqQz9nPL7x5dyKgpieH8ayuFHszyfh6eZsrxCKbixSy5UrTT2RBT1oW735bZndGQLzzCn9J5AcThfnw",
  "key17": "3B2upXpDNqfPxt9up2P1EAkphkanYuv2TffQMZAgjv1WCQmZkMiuCxr19ewru7MFDY1oqXDp4dvTUtvXcRriig3",
  "key18": "36EP8gb9mDhdHCHBp48RGSn7U5iAdi2hFcodNpkF3D2EB1rmXhL2ehobVd4NXf8GhCoHkBFrhzmTuYrVgErmMCxM",
  "key19": "5sTLqvyLv86f6srctgfwvpzXHg1NfyB89WWvZFQDX59brKbBtdFVAJGUCFiA8yzUtatbHvJrd2WbkEgkFgGFECGg",
  "key20": "zEY6cdMAjQST5Vqkwcr7h35LW2YAAATs6AwR44twSbQhKtB4L1ktDgJNHScazd66f78dfaKJcr23swmkPAa6u9P",
  "key21": "3ncb5o9deVYpYVTZ7RdJ1gTB3pdqNq5dhR2sgw2CFLH1XwBZxaP6zktCdrpzn5hN2a6pAEWzky4V1YYEiWyG43w6",
  "key22": "4wV6TMRRtU9aF3t5Y4fb2FQfXJsbq5BsnKWngvq54b3zYuaWAaXRruCbCDxpTUyug4Y8NMiqwcdeChUBcPmKfDK5",
  "key23": "5LK5C2DacvUfDTXtqx2X6eLHTCvqz3jxc9yoZf8tFNM6CcQ7wEHcdpyPpCXoMkv456CAzJQQG9F9RissQVPTEs9A",
  "key24": "4jnPt9i7hwSNwTUXs9VynKXpi5Q4gznkWbFqD6RGaxx1uvvmbWU3n2PzrDL2H9cHJNXFwQSaHwJjYpDnNSr3nypF"
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
