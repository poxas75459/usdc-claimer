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
    "CU2cAeRCQrgkcZwagqKTgvofMdgp6u7wt43uu1jjpbjrF6nLsFtRrS8hXBfqXsCEGCihC9vpmRdQF6QFxbPftt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517N3HQ5ZeSuWfEC3c1oPc1my7tpFd8WWRTd37GR8JC6Gaqg44Ds83X9NAhCp31C2PXvKWH5o8V1qyQg6mNwCG7C",
  "key1": "A4ZAmNs8XJZgKEPskzRZa9s8hZQHnXvaDzDuLHpnLiBxyc2Kc7G3N3ryJHKGMLFmUWxL4MPMyYHwHDEYj3yUPK1",
  "key2": "4AXXfSRjNjaNjt8De55G5yQRiVmGtkjBYX5syBzyKoy3CoMv6BJR9ELKFFnWkRJ9PHjQ5ULBVVUFMqYUBgUR2BM3",
  "key3": "667DTFWzsGHcwdr521BRWFpP6iBqS59sK5bXsChspAGSvcZj3UMGZKC4GHhawjq6XdbCSpueSQrDHu7HXUZRcDgF",
  "key4": "3ySqFMDFuD5uxpsp72gZ38Ta5od2RK9HETobSmjGdor2x9dE7RSE8L3353CAgwofif9BqHkJNmr2z7E4L7FjwYdS",
  "key5": "DjCCyMNpxydoA13e7hQeYxgAKYorJrhGZ99ZXic2UkBhRRhHriFiUscJZTouGfEsHMZnK4Na9SheiEVdBmfz11M",
  "key6": "4xQQQNFQMpo9H7exF2GGmV4q6drgi88tX8QsLLKxWco2obJHnF6h2aEV2KBEXPhsepuyvhUosDKskEuW1q18CLLa",
  "key7": "3sVHgJ2BQh6oYQczEjMmgrwGF335adXStshCQSaAaM55BRty5A2pr5kEhSLLWEuk6fSVZ2eP1pDcd6F8vpAaxzfm",
  "key8": "2VHr9HE59F7fzhcQ6BfYupGMiSgCC1iU6mWroLmXoAmwEHzsJHiHjhPLy1JmWzALYmGo4C9iQ4t6D8wciLv47rKW",
  "key9": "66BcJxDTE1uaz4kAFz8ySkjYxPDmUgNuA96MTVDEYFeqZHoBwN84ogxvk9edsbDGc63cuGazQz2LoNLm6WASoKPp",
  "key10": "3ukCmyBzRMfg2UyHKdG78GgbAmBieRDxepKEgnio8ppJdjgsYrwkSCXcj74osTGGbfQvqn4CaWx4k4PH8KPChJK6",
  "key11": "4ttYENqZ98Ppd3acKACk9kHrtMbWYPNmXa1HexV8mDDGR7pZRAdbEBBVDpJfiH94PYj63L5CtUQ9tSCj1WfR8ov",
  "key12": "4m5VXrwr8rsgJNS8udZrd7WysErKneieQo7H6PvxfXiV5RUT4K6CWEUFyfZ9gkPQPsNPQnn23gsY4Bmp4kVU5t5C",
  "key13": "28BWFraADyjga6bNxF5qisK3qzwsiJAjFXXwh5dVz7aze2EqSWDjre2CJT2XjdrFS7rMBpcLkRzSBAoCjGk36uoc",
  "key14": "5F6FmWXQrnXMn4MrvVwFQcpTXtLKFUX6Y4B2hPShTsHuPMz2VXMwDnLQiq4wGntw97BptgT4nCQ2JKFS39VhaH99",
  "key15": "318acQ8m2BofujTcPqJhL5VdWSWQavspE82PwaEjvAPKDyy19drustLpvcoL8BkhwPwSEQExy5zf6DxL6FuJNEB9",
  "key16": "MDjPJAHQon9nxXu1wBFdV4zzTJU6GLq1HSmptcyy43R57VfLs7FFUVaKboi5o1o1xu9cAUjVUT5jXEKsSWBo1rb",
  "key17": "5gKa5Vw343TTgwSKjxQFgwBsCWTj6s3Jpmm3kAgRuL2YmkkQypDvgheG5VzYCQvxLAR973HujEgTyeGu8NHq3EsR",
  "key18": "5jCpWJ26xpkuzPfY8vJ8a5YidBDjy7iABegsBHqw89UtC9absdSu2fwxpa39KNyqdEDQQiuxczsfkHy7atF1rVMZ",
  "key19": "3TdkfEjVw3WEhHekvBCMTM9799TdeoUGf9q1Y2zEez9PSXSjkHyGYzZoUXg7fMqvanrZGnJ5Dq1A8ghuFYLLBCM9",
  "key20": "wKxocygXJsKYyd6VjpuCgxkF4CecvVdvmtnoow2xqoNQrkeabjGBFLjzMhReGrVxVKM9YdVEnVs3Xr4gD9cujv4",
  "key21": "64WtnKRtbLxYCvTcxRDSshyC9BGpwbUXhPP8FGRHHuuJ1Tj8uomdWkRcNdMkpgwLxt4kH51f1xYFmeBj4BMbXbgt",
  "key22": "41eP9DbDSp9qQq6yAVTV5QKartzzgDJuxiS85FpeNDChnsfxRzhbHfvei5Stv4tM4UxenPVWDf9TtvodmWgXc4oZ",
  "key23": "4PbWwEqvZAmeF6kFMC4HBD33MqcHrEuGrJj5gBmUvxfcAVVY5WFsw9pnUFDNmPLxkuBmsMBbZkNfzBwBj4Gec4R5",
  "key24": "2ShnHv7VkAyKLgss4RHmFESMf1nhLKsVkRYdmAFYYrWcFd6GR2ZnvT2wMKjkH3Y94gAWfLfmyVaEn8Ra1PLpqwAG",
  "key25": "61qXDzVAUp8LKfqr6h5sKQNi89tGNDBy2fciiFBxiJC9nw73iariPDuFdqas5ZKN2Kf2snj3cS3tsbWpZAdrhLYi",
  "key26": "2FYcayaZcbyqJ2kBbNMTUz3SQ3cZzneTTkgESVJ2HnrziWsAcsH66FNPm1Bf1Pbbor6EcotNotcroLbw3jgGSzYe",
  "key27": "41JUKsdL3e2cQy6JNF6fYAgskQdzp49tNfr2Ky4CKqaBSQ9Acw6xXcMuh5Dc7ogq4Vo5yEWZeDkneAGqTTQVQKok"
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
