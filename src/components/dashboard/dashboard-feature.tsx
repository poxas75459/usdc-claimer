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
    "yKv4X3jw7uEGFXWs1RFDVnPzwCbY8mnPzrPKTaKp2qd2A2CME7rP3NqpjATxSQgBBsePHQFvezK389WefUMBLDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jN5iR6cW1BZWepbDmP11iDWn6rXMSMtXYL3SZ1XK6nWpbF6vEyAJCZvVCjseFsy7LEsAfPwmqBd6X2PLNoVdw4R",
  "key1": "3SvRiFumQf7YhpHCVXnGHc7tqRxDG71HyzsZRMoc65G3dxPVe7AUh4HhfSzoRquyPS1aPHvW9wDZPmx19HoD7zZ2",
  "key2": "2oVURYShrjMohbhUhoCDDcD2582PEXuj3SFADrf4fHiz2UYCSLfd1XRXsQsrWfN4JpjDeUH68aW4bZgNp437Mnap",
  "key3": "2vAjLeS7guxa6FA8JVDt3eGmpbz96CU6LpQgWbChyBiLLANHcedG1WcXVemveWmkbwZCmRY89jxqH3UusxiHvr7n",
  "key4": "MDZ1PMZgVpF1rfuPqQqBE2iBLv7kW5JkHjT88FvVNqN457acVB4DXUMk3eaGxAVGfUQEmfEeT2EHzcb9s1zkpGR",
  "key5": "229PM8mWWedr2QFAwaZJks37j7Dydw9ad6Jqgy3ri2Nd5QNvaD7ySXHTatdPZSJHhXaDadbNiH4smXzZtVb48hgS",
  "key6": "4AhoKv58ShiggeTe9Kph2mEeqagYE4pQUMWL1mBze7hXgqaFFcniLHuLPrLCSKhvodfmypMFRLj4PXDfd2vevnXA",
  "key7": "2Q28qaCGFdazamRZdLiahWnftQBfKSZdwTvDpDCS6YnptTSwpnQ8wXHJ914XYhrwfoaSUR5GbHsUHwGFV5kdBCs8",
  "key8": "273sHRkmqyvMaZ8hbar1WduYcVzC1U1S9juTdznWyHT8TaqNAboZyeukXYGkbn68ThuDhArPLdQBdoZjFf3SMbMG",
  "key9": "2d4t8Up8U7kYLBeNtT9N4RFotjKVtE5oLrurB1b5He8ndcoERw9bKBq4SVSdADWCQz7fmJxHmQUodBtQED9rmVau",
  "key10": "eQ5t5RdVi2vVpxVLXjg89zgQCNo5Eh7g1qmnn58EtAoyvNkbBkthvUndy11wYsSj3CsvBUYNgfCQXkRDy37Rwmg",
  "key11": "4B8HUq6GTKRp3iTMxu2VpADEgswQ8pgGJzupH397YwGqJcoMDmpaeEXcihVaBtD84XQdtP9muvpWsceK7hxFySH3",
  "key12": "3mD9t4nMmNv2wqAZFJUABso7uQFi5BkhsWUmxYJoiqq9CdrZGehf4qGEnGqrGmivfabVrXE47y1rg3ENuQuEoL4h",
  "key13": "5eUHuS9r5nxmhK1ibNgVnz4DKAmsX2FXCoRGPuXAC9EnLWRUEt1HD4umispYAHzRiHJTiKJdatAiA8aPc8sycAAt",
  "key14": "eMDehBR8FTdJnPGFNP1BFH4ixjqtnP3EKedfFyKXWnv9S4H1n3AgeGxJrm9Ge1PgdyN5ueQDfnGF3fnFE7T6Arq",
  "key15": "4dp5tKbSja3RkdinUYAFCMqhNXmwKA1ccJHBr6S7GTgqVnCC3oyb3DUyKJC6prd8o6WV3G2CjNXobWRbPQrRAL6M",
  "key16": "5EkMwhpYyfukfrHizQwGdExiarDhY2vPes5oWXZJZs3PGv2PtmgwYHpjCCmQDyG4M49AfgcWULhAVVN8T8KNYgBY",
  "key17": "3kgRCKoUhpPvVC2cnig39UM9WzdKk1DFpSnkVbtSG1hwpoQnARSFcF1N5bP1KBuKkSsCiE5DcauQiDvXdWJYTkQW",
  "key18": "5Lo8FBnAfi2M2cSyeLE2g7DAwYJJGFKGngrti2mGCm8V2ae4mDTKdzpG1u53xPK6YWSLdJLmuGiQSXhq72ngydaz",
  "key19": "aPgpmSCibcpqrxoGRgR5PBbjEv8jdMjAioeauXZsMak3iJhFVz67s4jtSAhtTgaejCwrNsiahF4DyGNDK368LSL",
  "key20": "4wi5wEkhLeyNFhzv2DjFNsQDFnEBTnRL2dfbJcbZXzb4P4hYJ435nLkoLXDMmYQjqoyCNkisQNrbG4j8jqySsMsU",
  "key21": "3pM91LLXNaeJNLSAJxf3zMnazqaoqrM2pQKLPHWNmrYGRwszsmsX4EWMLLLQqziiu42LKABkWjSvj6Nkve6d6bNr",
  "key22": "Xd6mSw2Rh7f3JsKg2GPXiJTveDo4QGQNxBF5s1nVccmCRnS8WgcgkAZ9kMDSkvD2vUpaDcYou3aptsk5UXChja2",
  "key23": "4VphUzZVk4tRjMzzR9sLF79aaKXxPpHJjAafKKmXW8f216w1hNqz1wHA8M44TsnUoRbbM1La1ua2XKyskT8T25dQ",
  "key24": "5iLPC26NXjA7TtUp47o91hBay7GXcXzLH2ttDZezGrzjmLcbuveBMfWHo4dBdnApkmxYzivgXBvfduQ3RHJfbf5r",
  "key25": "4JkYSTXkKJgeCDhBbShAV7PRToYgXEa5kP9Vevq41BZLsQNXVftwEVZq2rqcuKzWJd9fLHSJZdXZSVEDXFPu8tVL",
  "key26": "4mGkUyu2Ltz72zH81FBnC7WcWzWQd5WKB7caufJW3JUjpMTNVWGSwA42iC3X7XvdGft1JVejXUAsmnJaydehnphC"
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
