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
    "4huUvnsVq5rkgkMchZencuD8fhvnnPyZSGPLSwUep4v9kLKnKWMU6VCa6tB7mpTsjB6LVXfk6AqEF6fFYhXHNF8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opdSZoGzdEoQzeTgnJrg3BA7PCCY7x5eKqKNM7aa4fpUCzANw2esF9D5C1XNpuyzU9mScpwi3c7AA62rb2ABxJ3",
  "key1": "5Fp5abXKyyRm9QPSY9631auAQpjHvm4nFY1XcxAwvJCnpd5ezEn9SmyvoTMTvXdPLCuzzpBn9EVTFhqqAVDUciAR",
  "key2": "26mBRPF1EqjoV1PXw8g4gkanB7EpFgQQw87JEzXA6r4ahGZSu2pJxWJS4S9Y7JTHw6mAq5B6M6MpyS9PiAm1mDm5",
  "key3": "4r8ocVFyjw4E3W2e8dFjCkCpzEfZfiE1vDoa3yRMqqK6feBBC1EEKxMP7ZSm7JXUdSqjMY6byp2moSzM7d6rCGDF",
  "key4": "5oWLKktnYxfSJJgpqStdJrfbjokTWPAQ8P8sZHoPnvUERWPK2qqTsYR1pDc3qPfbMj1xV8CwJdUbsUk2qdKXBuYQ",
  "key5": "3hgMWdn2mKuQvwvCeZQJQQD6ydVNiFKe5cxvZHKnR3Sc6LUS5LBAn5JScq2i73PMGEBhYL2KpE6gpfN9RZJ2xa3P",
  "key6": "5pjVbCzcx7DYAJKAX8ape7WP2cJv11FuCzoJWMPD1Me9KQXsXtHfP42gAYbJE83LJUwnozo3U5tjzaD4JdhfB1q5",
  "key7": "wjHhUr1wGRnhn6gbzoEcqtscfZySsNV3jn9qouJKq852YW9DHA2TsV9TRb7etzBezjgADqgx5DAi7ufrzTAvM4p",
  "key8": "2uGiwJ9fpKq9ZP33WbTbEkf24aCru8fLrLhqxadhnbNXZCqYNgs7sWgpWGnB9Ku5uzLuaAtbWAFjD59bA8hFc6xD",
  "key9": "4yToLdaCvhkU9hvJj9YBDG9H4T5T9ZPBQrCCkZT3N2dpigZiayruQszn81DeVm7S4ZpaC7dMU5YsgyJ8PRRuyEhk",
  "key10": "NKPGbnDD6YLNm9gXEFixonDhMWhYyvRpi4LgD4efWCd8wAQPyU1fnuT3muoWRCeuZ8GjjQMAjr3dYSmBmEszKhQ",
  "key11": "63Ea6TxFBmS6tt8yPA6FoxdQTHcahrsCGbkG1aNfgTFmCiSnkyb7UFL8ZvotTEhDMjBAKTEXoZ1CcC8ayNfY9Y7H",
  "key12": "2gPpbBVVMeewzDBWy2Q6Ztoxnt1q3qWQyXgtCbDaCBAewZFgjB9ZjwRQ3t9V7NEXyNWYTScfN16699xkAaDWjAyB",
  "key13": "EkCvNShDmdgn6nfL24rPSkPDX9cctvPW4Cdo4FsvatNRjmMMhAsMgND5AjMWe7kyx6YBnVstdnoPbypsgvyBeJ6",
  "key14": "4oqoTuwYqrAdVMphCpJDNphtDjTiviBpdqwzRem2Wb7KrbpL3nbWsC4HvichykDhrieCDTxDfH9XFv6U9tP26koR",
  "key15": "2eGDK5FBrbRmwSxacPH7Qbd4RA2AgCWn8MofdNNn7sp18fNFfyeEWUc24478PVGuC9KxtCZqhWAofYVe2THXVDdM",
  "key16": "2W888rhmKp7qQt3cRvKwKAoJ9xqGmVbYJySmGTkBg23pzruK5MRin1tjFSNAzK7hE2DpzNoeve6wKM4eGeJTeMQx",
  "key17": "Y5v53jMHkrkhqRyEwdmDGxsmxfDZ8jjiaupRFBB5x52BweCeQpvmWwPTSSPxQ4AJ4KYnfeoMMy88wt4H4mViZ83",
  "key18": "5efvZPHLE6Btk8HwiFU9oWChyTwGXUAq1YjtSkddzjy2ARy8WAdqKg1zi4GGYTiw2R7EjkLnf5Yb659cx9iNhzvN",
  "key19": "BN5ZKaTi2ZSkPHfYSxdiMVR1NiTWKRhNdvPMqGcPGMvRQqD3mgY3trHzSq7NwBaSCk97os8qV4ND3a78SQatPKq",
  "key20": "3oj2mRd2ySVWGq7Rsb4RrtYHXBSb7zMFUetqJxtHxcyG5svyVCRvDC7qY4fy9EDULCn6tHs3h2zj7JZygpu7wgNZ",
  "key21": "3wUr1uoBymw4P2xXk3S3NTDMg3xGgLqbaURLZ58GKu25EZvr6pm3M4psW79qxqgJnWTPXFzVYeoTfNP7DCjS229U",
  "key22": "C4LRQ3nFieg7kDRoyzgYYi7WWXhstVt97aJXQan4anh2BfpLy12Vpbp6on51yuoyhbDbEXJzBfwqNbpcJjnJNCj",
  "key23": "JBQBsQhqxDDznprtfK75D7pAdnCsdXYTKh9pM1bqdnYLEDX5Xw16aQ2Tdq931qqWrJa6hm2Qw7mANzz2CoUg8MH",
  "key24": "5vu3FUWkhZDpDzTR9AgTjWeugG6m1FkSzraN34roKsw9a2WssCTfiJF1Mt8ZDbPXPcr3hauc7Z564ez3mjtGhLeA",
  "key25": "63TL8SNyHPZUfggi5QTTiLwQcmjyGVuuWaoV2qNaYJ748mF9Ak8UnTi2LmSLdT3za4wfNUYSZG3zN6Uz6yjSPQHw",
  "key26": "4UZj7BPo7mZN9nCcS6GuN6vsUWP1Yu3G95zHzjsvQroQgF8WpDDi5LxPAz5QrEH6PwpTNLusyhTu9THaFTxiwunf",
  "key27": "2x8wxJXjUXEQ4D4P3GkgjeJKsNpjDRLDJXvaWeEqkxzWey98T56tMdmZAg8oM3yztTcqKurqgqfKeeSKyaA8FpMX",
  "key28": "5DmD55sQaGaTgpWpr3tNgdX6BwG5XmLP7jCREBypiNHGxcW1DZHqJKm3LjysUrrJSs66eR8mpKjmtWXTgziUoZT9",
  "key29": "5EzB3xpj7XrnroVHzhStNNj73ndiNn7TSrkZX8Af5SLwFUoKvUhY8ahxEmVzJzENZeNmGG5u62mSiYaZTZnzE1sC",
  "key30": "2Ey8fR7yhBKfkUybqh6cDaMzg9G1eWfc1DoxwAAiYukuCVJaVfdhoQ7emrvKstdbsbJqTfTnr9nh12W224PJF9Uq",
  "key31": "67WKCKySHivNv6CFrjgrds8H3wFCbJsQ79xymB1UwqFE2wPYnEuoDnVJTGvVrhTo814fRyJsZeGBKaSe2n7yXTud"
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
