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
    "p7KEmwKi9WPUPfTrQV28pB9ohezqHRzYwmVFK66CdNkbWxCFnaF76iPj5WApfKKHPFSTyLV3d2GrpBVmhW6UVzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsEeuPDzens6sZpymg6xqqudJtp3dRRBDTdFq2Xgm9JG9Rxz1aGPQMwZdyWajQbNhims2joSGJeXeX1hiCLHcYQ",
  "key1": "sJwEaNjEWz4FbDRmoZnPsftUMLk2YE4ghVAyYxrqZAd78nF3VNLJMUpsD7Sgsbr1pQ9L8myY3HKzyqrUQyrrvBU",
  "key2": "51PjCANHESaDS6Vg8M6dMpdUdKXo1xY4KnU1JYfLtZrFoEPzmSKTWQ2qu7R894KMSAZA5mTvFaEmD7VZKJwH2GJu",
  "key3": "5gNu8EGimahx4oxxrauMr3CqKTvbrAuUZGcaG2zmh9qw71B2wK9v89M7ng3C1hjjYrSpDETv9t5SaY6b8vdCVAVq",
  "key4": "fbXBqNC9GpNQWXCxgkSR8HRSyVv6eC1J6DZrMrDN9zPXy7vSHaLz9tR59Ey9vzucHD7GehpmjjKeVDagWJWeZ1J",
  "key5": "5RbsdCrpNQDXjeBZuhtBnNJUCmJRkEYi6Jc7FeiZDw4bVVEdpSwudgZYrZv7kgUVh15o9QVVyoepNyT7wMKhLszM",
  "key6": "2AZMbm4AJ5zGksjNNKZ1hL5ycHYXvwtco4ae5DU1CPnzkdJTUMYuTP1iDB3xPUwgLwNgTvACJ2Phi3JFpAx7kitS",
  "key7": "QXnbwzqJK1U3QrCTgGEwR7k8hhzgzvfBsTmsmcBYoPfdbd651k3aCFvtRDiCyLdiymE7ba6J6F2vU4RtXkL12ZC",
  "key8": "2xSnSq98S5Mm9Po2eigHmNMN5pinDZAbadyD5tu267e78Y8RuuHE9wfWhjBZ6StNffwAvdKfT1wn7oyaNSVe2aiE",
  "key9": "5y9tXYPt2spc7DLa5JTKh2ioddtzXRZVDGTenNN8JuqkSpSuccfxU42eCukZE8fV1AzEkEJb1D7erJSn5qhTvWkq",
  "key10": "4TuT7zNygvW4aojc3pUmoeWKceHy6658RZ4yzGgHqzRJPavdjnFwCR5kntc4Q3gQozAxM2KkKsVszjSQc7RtjiCF",
  "key11": "3mhLCBDzcHBbKwAAeyQBEELPZtGF2YWR7qtQsmMHFWFjBuGVBT4Di2pmNFctaWF8suy6vSPd8DgXZisjk6qSze2D",
  "key12": "5zBbxr77qTnCX5FRj9jCQeDRoX8tdQcoEBJTfootgao7a2pG11fZkXCu4PmQjiktmu9ABQYXbpFsdAb6CKjyhxVH",
  "key13": "raY9zvfx7E5913YJevh6MjreVWTo6Wti8ZsPCgmTry8zX1NTpEpXPA5eX7B9CGYXmehgJXg59HjHZgakAhdiZcb",
  "key14": "32eYDnYd5aJDKfkNSdEW2BrMKQTzGnJybypHjjFHKXQXZnMcSew5WhRSmipwqULDF7cFB59r6xLaDFc2NWEL1hTq",
  "key15": "4eiUQXRw6LXCDQxdnEwbbz3kxMfRFzgZUj6942mzX3koQ9vNiJDRmHo1spVe68CArgE1c9wrjzV9Xk9Yd3zC8YYb",
  "key16": "2AfkmaGmEJifqhVfb8gFEME8G6LFsrdYCmumJJgsoEPV24Qmu6zFPSbt3MmYJvTTcikCnMEDtt7JcFEmEHNKciE7",
  "key17": "4h7YJkGPuyT4tWLXhJb1vM45uDDdshsNRWyDY8hCE9tBDFzBpUXuMhShW3RjANrexsRoYmrVCLanJGQGFeaMLUfX",
  "key18": "3FHkyg3bKAnYMC9ffipx9KhGKrAMLf7SD8xd5kXgzWEUuXG3vsugnFN8pTkoCDUfThnuAgrmHRySdyUpdbLWxpEo",
  "key19": "2HESVWiHgmL1q2Do3Cx5thbPRY1g7yPDMSd7F8gLqvCY7zeLyQTrPfFRAtGgGi9qS3shTsX9rjeX1obBNK8QJzz3",
  "key20": "4NKCZ7PPScPFZxhajt8pHWMWEjPKv9Lpg5epHNPAvsSWk8muAcNs2jiH6owJRw6Udn5sJP4hqeGXiyy1Ddxvzwgo",
  "key21": "3z3jbUbgqnmVe4vGE336kSXSPognS1yAY7cnKQuL7qFNe36VcS55EnUKCNpFHux2yfETS5z5kLJGUNuTQarsjpNu",
  "key22": "2G6sEPi3YUU4qjEhjNfjzriVogdxcnu6aFsMtXQSoxESCbTH2JQDuKa8getsrKxZV6dtqYFTBd97Tcb2dCpoD8ia",
  "key23": "2R9cZhNDTDqiJeUfGfv5G2zQCJE8EshA8Q352Rxj3u1v9w8NqMsTc4AnqC8p72j6a2oRcNz2eJQJnf9Vq3fn2qxs",
  "key24": "3UZohQs3tCyN29Zm7KWoSYi8CASFWtoT6DjcGQYRrRHDtDzfbKCSjfw7KYN4x8Dr1mfa9iBbZtJeVepKxRMtvkhq",
  "key25": "NPSGiBgaxacgzxoNBCkwcjTkdtQ6Zw3ywWfSea2DmjADpths9Q8PKm8t7Bz2WRVXv6ypX3wgXzawLnaKaj9bPGp",
  "key26": "EEcBs5zhpQb1C4Q5rQiMMCVLSgyM323sbKCWVJkfKGDswd3pm6ifzWGGYEeNga64y3YtjqRBo1v11iXmQsFzKev",
  "key27": "5DstEBQFLES7U9mLEe5dei4wiWTR4aKppkPW8s685a7UcrtVKDEKvC9vw6KeWjmFnybP9HbVLzyMRodqovyDedQq",
  "key28": "3J6jZuvKvYnQfzS6TYitkhS6c7u3zaiCcu8RfRosGnBNWB9N7kMiMebgybpjoJq4uxF8Gj8kKbrdfHoRktrjCJhH",
  "key29": "5pFR6j2gkdjitQj2QfbWUBrS1ngQumjAMGsz4JFjCaSbkpk1a6ZkhyoW87LcpQeK6HTME53wmYfTzt5sQWZzjskr",
  "key30": "3rsaB9VTcnUnLBCyVXB29Bi8tWSAymDdEApKKBra6pE2SFSqoFbPY59EopJsvSJ89aoqChJY2fdvFAuJ6G6Qsx9V",
  "key31": "3iovY4Kcj41shsZk7fesosRiyXjiM8RHoH8NrKzQb9f8KJhzPUZ7yGsS28FaYXnVEBeo1xeBBidSUN4VzDKWj4vK",
  "key32": "5UAzbrC2Ek2cT5bUZaYAiTDW2AGY1VH6n3WgtwM5zsmAS5RXm3h1QBQHYKSR4qZJQRFP6MnU3iQuAJNDwevskyxg"
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
