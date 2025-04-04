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
    "tCxmuGuiwHQvWRfVJyQ4kumBdwnt82wLeJLy6KXfqKPNj6JUHTeWX8qVwUVU6KUw13sm2zJF3yKsygEJVJUssvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9wQ4BYxMH77Em2WPpX6GHzGY8VmEjnqBfCFFKnyuRGU2jeSYkiaSGjPBmgXVxVJXuBVfRzW61mchW3U2oSA5Vk",
  "key1": "22xqPJrwCxHNdAtwxdN2vCoFdJRzbwtD7M6SkgBJkAeZXGogXzFa65sViZCCakDh9EF4agVa8bRbJfFFSJnxzouQ",
  "key2": "FSdLoQ617cryrQnhyeV6uVeK11xrLXnxpVXH7kkVHfSHqpK3MTMPEW2euscbEtKRs3eViSB5ZqzjksZ94Nnk67e",
  "key3": "5zxR71yQ65gwoFdZiY67EDySe2CNzeSG3AgB6Rsp65bh3hKpNMEc7q1whVELeHoKoJLAGKFBDbV3ZWQ8hq1RGQ4X",
  "key4": "3kx44zWtPyMHVwPfohUkMBuiKayuQQ3LJzHj8JuTN8iPs9FpaEPFixCAd3Cz9pg5EFfNerydRT9wEiEnw3JbzGTB",
  "key5": "4gK7Cjb6T5mkmAkd1wd735ZwcjSZ4NwLaLNRgPucG1xcbbbTfZxBG6PzMKHArApWK7cvwjkEowPWkQn9UXgZBFZQ",
  "key6": "3ksHj8bV2aoFfJJiuNqYZH85Ms2bTuUyc79Xx2sgi5LafoHJCriQvTF9M9rtK5LEtrMDXqyoN6MFEfmq6RgvLfXb",
  "key7": "4Q9ABaeoe1WP5EqyjsbYcCB5TEVJqxaYUAhCmpjLHKuwjvcSqP7SkihR4khac1Khm8CQVbbjHPcZBCmUDNijqygm",
  "key8": "3fRf72BVopeZE57PxHiDVJRc3DReqUijDedAztYMexC2k2Rp25Z5JNAEbGGset7FMkYPG1pVqUZoa6ZXgsjNEmZw",
  "key9": "5GqxG5i1sJ2zjA294KoRXAEeyUUq6ytfGzzFh74ZJq1Mzdpr3BmZUPPNXEqTxsUZ3Eq4cG3w9TCNzgeJxigjA3JX",
  "key10": "2FyzwhzVFseXF44x4K3D8Pdq7Sg1PBvYjqdaR2DpLhwqqCGTKMeVttjN9q4QkqUc2zSncUUswS5UkeRA5tqF945t",
  "key11": "3herEAkVHQD2bCznSKuFLQmpQJS3w6AVxDSBe5KDvf4pwjAqVmhNUeAbNUptNztypnyKsAodjXP7uSTKyp2tpXEJ",
  "key12": "vAD2uDLM48BoViZggcPUQ171MH5ze9LeNhe6cuhxZZnCEwvhuYb6KZDDcaTe5FZVarsrdzBhkZP1BZ2eQpU9pWj",
  "key13": "4NaWqiYztNHFDCHLFoVD5K7H9YTa1wBj3KHuZdPREc4iuu6xJ6WQBCjq9116cXBnViYs4bfcJQhUHueZHT5VAG6m",
  "key14": "5XarwUbCaW6i6WbX8zdT7LPCoiHfRx8W3DjBf3QgLjM2wkXZCY6H2UrMhQ5KRHNg5hk9Drx1vscUQtbRbioRnK55",
  "key15": "5vqntaPHe6XeYYJtadhvveGto2Z6j5M5NSczhBpiM7KoYGYBzQKUEAupWVKWc77ebSc92AsZjPFyGXAfho9YjdU9",
  "key16": "4Knwm1GmpxLySSnofxNHFfTcZchLdnszdq9xFxNyuxUM4Db9Ug8LgBm4zpn7EdgCTRdP4gFrcoyf1gRkrUZhCM1P",
  "key17": "5HbeF1ZzPYUkXKMYENmH58jiGbJg4Dzd7V1KVPUgjTUiCURB2zn7LC4odw1n1qEGxfSFkh27qf2gfnfgqnreNnnU",
  "key18": "2Kno2EUFqTFvExA5gWi9sgDJH78uK18HFzuJU8iEMYBFoc1kTRijGTLvBDejhy7CQTZzEtJejWt7hiUU7e11MmPp",
  "key19": "5h2Mu5noMofAgsN7Pn2MXj5Hi9wHo8VwmMcYCkG3sTj453r51uPVNMKDyCJRDG9YD2vb9oyLXDoyaFZsQvB4U7iE",
  "key20": "5KefSbJds2tpogeyoLC3k8QgrzU4BTXxW82xpXgvXTpDKrphBWmE3W6ybAJLbirFaFo4a9wU6uTXPYMqmqtXQBUS",
  "key21": "2B2vNq8q19ra7ANVyYWXfMLibJz7hWXWLUhd257He45uhcjfBStpiFihNK28pCAYqVnfRfggsWLNm3U7PewPucAK",
  "key22": "3EYmPKnFwEKcwiSsgsSRXd6ZRL3xZWWCZVWUX3V7wvtzpXcHH8etvtbsJpckVWnycty9SWRZu46HzKV71NAA7qa1",
  "key23": "4tAKeKwTUiqGPrhdtAAAE9QpzSq3w5kPLcyY99uWNXq9PyXxupJEVjYGxoie8YgAac6XthSbPiiXAfpH68HAUNe",
  "key24": "26A6ckeqLKPWzEugTPJk4DuEySWyHrJrW1ua6nZjuy2JCSwAGMTVvBrM3eqA783N9N4hJDvtRCTYpVstGSEFVWX8",
  "key25": "4rDmRWvW5oECPLu6qabT1KnWEyDJE7wbxkDvfprDgfGDcinWqXSdjohrw3a9KjmKJkfBzBa6nTjkw9rHdLQYVTQT",
  "key26": "4CvxPGTwaBA73muBcaFgCR1hJJroiBGaHLr5j5HQDaN58sV3k7V3naML8BfvyiDFEwPcpBYTRkw4L9pxnTWhpfKu",
  "key27": "2xAXeTkR26uQs6PRuBRP2aETYn9KT4gzZmwVxU628Dpm7rAgDdpx4zKb54bAZD6RF2CKmyhep5KFm5L9bL4ZFpHJ",
  "key28": "3pp8MsmLpizhNckzu8MVxkasgzUArUhzvMkUmErad1jbNhGSQPdF1jgASg2M9Ljx2t3ykEFLDogQXyh2KQheizJo",
  "key29": "FC8MdT29wMok25cyWbYNup2Sxataab7fWkqNShrh3PsU9E5NJ1urYUxY32BShBJnPCUYRbWZVNxSb8zZ9Ns5T6k",
  "key30": "hFW2nEFW8CPfAqHVFARok1dvjuRp1vAKouWZUA9cMzo4aWbAGWNGHKrCcBS2a7ACnLzWcd28htUMi9bXWjtFzcY",
  "key31": "4bzL5Gd77s85dJrKNpsHjR2BgNsmyKzhznH6GRe66ttVpNz17hjmhqS9baJ9wf4kDiKmHfjxUFt5RJ4m4iUxgcgi",
  "key32": "2u3ofpuZGkbEoHUcBe2hLTxCrrtudmot4dUfM4vin4azBas9Gd77xCc93GAkX6UdXqriCqjXK4hVj8NSm5ctJ2Aq",
  "key33": "4xiFVDFLCC2WfmRPMHBjwPV3RzXAmW2VpGh4WQipzgGZyJiHz92njfcSHQBBdPPkkxYaEfmpd47acP9oM363JYUj"
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
