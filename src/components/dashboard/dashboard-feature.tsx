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
    "3eRp7VMKp9bSF2CvJwQnmBN7nh9cq2rs57shYpMV3BmHhkL798vTShFWreKMX6zeSw6agnhJhF1CPPC3FesnaFkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaQWECfevdLRfeQJEG5HKfbzRsUmU4jbMTDjnKTgxMcYiKonifSLVseXsZNfEqYFZRXChbiyM23xnni2Cnrjc2b",
  "key1": "3ZwSCaiJkja577U2qZXxP16mw3soefKuNhrPXKBiBfJA8tLCHufSUt451LXpX8dV9SvC45DE8KNY578F7wurfCHD",
  "key2": "5SZ6jb2cwc843Aze7KrQN5gXjEieuKxTP6NVGiApWYryuepty1E7F3T4qJ34cD3YsDtysTtUPCK4K7LVnQYJM2ME",
  "key3": "2avZh7Qu5A57cmRJAhufeyfDDaPXWffk6cG7DSdUnHXAFtuEfAnqtYg9no5Rh2bYHSX9Ai1Gt11VyhA2d8g1MraA",
  "key4": "2sQtDbRFTpvcY6rsEX3ZGds7xqHB7U7matyjbRnDNmPb1xEi6NF6hc5WFUib8BjouNdP56w2HtmQaTZ9BWVTuDHK",
  "key5": "NHh5pntzaXTB6UTcDrFXXQibdMSaP27TdXrsHWyRc6YVeEdFE7W9eNVPwQbNnWjZT24fXJF78z72yPZ3KK1gGjq",
  "key6": "3ig1ztm9iC2V5aNi5NiwjDsLVu9f4LBbf3eJ3Skyjtx2qwafMNPS9GjXm9UUffyniQteztFbRARFKNmVJbeuPDRE",
  "key7": "2AJNcv1yC2hQqNhfynPhnvA1Y6TyFp4mLEGAnavcKJR8CaHNsmKu6fRRjFpb8ZcGqGFKCv2ogmp5NRuMwXV4ZcCg",
  "key8": "3Hgob85qQmiXT7FFQQH8S9V3f3srqNsH4N9TFB5TdspLBugyqbPBrLRuKKAxe9CDnmQPdvT44RNUjQg3vraNZKpB",
  "key9": "54K3gKkcFkcnFLso9oNcfjj5hzM33zTJWtaUYJsJvZNa5ninP5ZinJ1iuvwaK7cgz2rmtPafV1E2Bj8S95hx56DK",
  "key10": "27g12WLNUv2iArk5fwk12pjmL5pQbq2zE72x2tSoNnZpiLtQ3UEHVv2hatnAqWn4swZwAzVjbt3rkEk6B5dUNynw",
  "key11": "3ZSNs5YxCiGHEeAGGuzHxxqiRZVqYG8vP942JobGWskHncKQoeBJ6ZYZsqHz6pgs4gbXE5iCJ2VwbMexNqAaAgYa",
  "key12": "3Qbns13MRFsfyD6acrWGo3NhLwWoyBU5vTUJGDYtVbVB293xHgV55biiyqYA9iAwTmZp9VapQN227XLJjFkaR4bh",
  "key13": "4n9UWSvurN1k5zQeLGp7W2BhKyn9d3QYNpnSCtwP6ignG5tBHDE5ox5dpnSosMbQFh3xFDZm5RoRmTFxn3jAuZL7",
  "key14": "4TBRbnCEQGbnrN4bZFD1EboH8wGebVQcJt8ByYpWutQAuNPBiWGeh3DeLUCT4TSduFED5wk8A4Q4RVgTD79F3sGw",
  "key15": "5J5gXXtyKntmBmkzswbFukm6UDtdoS7SmQ1621Vtch8gcD3QC3TCmMgRr7F9GcZB61uwjgbZW1PV5HWix6Bpuudp",
  "key16": "3xVYmQPPgTpkK8owYWBaMHzHFUDvp45CfxTnYHprrJajFDxeSLabnfZroknBgHs4h4KS3bDgqJ7dF5thEBQvzigm",
  "key17": "XRLMuo6JR997aG5Yb1Q8VfPmgqzSg5cZVsGjxyukghHZzTEr6HSqzX3UvNjCH7kS4FCxpDb4NcKTfmvN96N467R",
  "key18": "4fwskevUKVpWhAEnwU7PQgn7N8WjdgHrULRekGqV5X5qdZU2QqvtwyJHDtKZ4NExsyJysiXg6th4YTrMJn3EGDSf",
  "key19": "5DLX3H5mGDXaJqXzYE4PcHCJYgZThSUVphEqPAprjv7wRqeiUvEbHi7V458bGAGg8P3J6i2c56mBDDTkBPJLsX7o",
  "key20": "5buh8oAmTxf7Xc1QZDDhcgfvJcNMahkaTm9FUfSHXz8AsxnH63aL9vPeZhbZj4yuxR3yoQnWxxszrsM3un5KRNq",
  "key21": "5xsfwdtf3EUwEAUqG6Sduzu4edEmdrZDoFdWsPnfJAr29ZCzuJAAjNHVnzST9mKr433ft1inEE5Bu12mH54Hmvsh",
  "key22": "322LXAjVWhpF7EWXd6svXKTceicFbnxPDurbT9PN2eEXPmvWfbyLk8mpzQqoqK27xsTVCUVCzvXiCb85KYQXEB4z",
  "key23": "55sqGQNtxVAeqG2sqmrthTHynesta9xVJy9UZDJbiLbVcKA3RP8awd7BnXn88UDZHzykCP75vkWfGpcYGLdRGzK3",
  "key24": "3os3WJCrpjDbPZop8kgTF6xnFckU2SDiHDnhEo1UVN8nVZ2Ds7N3KkudUhzpGJQzS1gURga7Y95C4GX5vckVwvUu",
  "key25": "2jH1of66gVizeHjoDoF8eMeW32Fno8bSUboktZ6RNjE1df38wE5KQZNUihb8ivQ7xjh4wSxy8aYFWKxqdijfqPeK",
  "key26": "5oHrTvkkYe1jcWbHXKG5qPukLAbBrc7DiHskT26BFubdmz1Wm8BopQYwSFKWQDq39EUcWechVwa8a5N5ezhT9UPo",
  "key27": "sSzLaLNnZWbe2oMHqRberqV975i97ZgLeTGd2HLjQRJDMiPPPVQWL2u3LsEhhgWr8sgNRQeuanu69R4Pmz4Ww8Y",
  "key28": "28KiLBtbpZYCQNxuCx6tczC282JsJCcviVip1eWbQkRUWCqMuF46f2HBEVFfphZG1wEj5VN6NkpepAyKkjRvNFQd",
  "key29": "2CGCuG66ih2BZphf9iUsRjVnmXGTjufQBEyeNbh3mvmeugaCWBzJrow8EXVU1AXyNXoa9PXmkc8xmwqBb7wZH73r",
  "key30": "5kREe63eHeabLMayQmbXxRaSdfeX192CjBvkLWPa3t5P9k1vBuGJ9SMHMQnnh65gHAztgVLHRu5MhAUus7qXej9b",
  "key31": "4JPXxneZSvWqKs2Q4F7RcZYQf2iZPE4s9MM4fGnzQ7fg7qXMZ9u772adVgwHo24fyNch26hJrF5GWXCdbrBpGJsb",
  "key32": "23XRa68yrQQraSAMwFNPfoQL3hNWdvUFYXKsQjucJLSaNhZvf9FCPPYkpPYzS3UVvWW8RcaN6nA9bq2ZBZwsuEyh",
  "key33": "5rY1fsR91waYqmytFARk3QA8qeRBJas3YeVMBGJYYszPrgb5CyBW7p2Fxt2r71JvJ6KtyrFxX1H8AHVjqt8SCXSo",
  "key34": "2bUzhpwzdHkhJ2HRrsfX2ScXzfWJdXWAGqrG4T5Xt9Q16bsCix1nEgRrrVZ5fgN3JKf5W9bsUxNBVz7ZsyoTf5Wu",
  "key35": "b1UTqDP8pLXKGfPY5NaJAoaftWzjvtWFxQJHgoSURyTjgQexuNpk1ELfnFYEU4FEzhU88iuJphrPmSsWvNAypdW",
  "key36": "3gX4PTAJhUr4NSLaDCDqFeDydEvvt54BPd965GfPkEcZjyCZhUDuawHoADHv7RiFcqT8H8ecADK5AhW9Hkw8hbJF",
  "key37": "3dfkwy2gRGLmkuDXJ8QxtufFHntyqLadUZXnuUe1442GQFVC4doiYs4EFGqUjb9cQBExs24vUNTawDLbKgpK2je8",
  "key38": "3d8qNoQ2Td8z65wp2Xx8n5rP96rJ2TpzfAkEEhEqzodPyEFPyD1G2wg9gd9KEo6pYaWxtpnvFemAkJUWhVTk3hiN",
  "key39": "4dUADhqWFb1oRd29GbWwLzLZ3SyiXaHVvSn1ctCBK8jHs9feoV8SzjtGwBLU5vGjfnhwTWTZ23HRVjHuqFWJzKAu"
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
