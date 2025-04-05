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
    "6hzJK6D5UM9b3GkLkxX2jQt5uoshgJnEvWh8cNZ9QxGjt2UpEM2covefAsuRVkXzcGHSnamQ49QDVuwSv1SGMH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mp7Ekr8z7sz3ngRBjvepL6WioRB5zwXMiXgDmP5v2hc7RD6Qi6KGaX6sn8eFkgBCb8Xmqj5AZW5muybzb3i2iAC",
  "key1": "RDPCYWY9ACbq7a3VSf2rww9gPRyf1Awre8b3GE2CNJfZrts8PDMDxajSaCzsBikTt9y5rjFrXWzEBU2iF6Ri7XG",
  "key2": "6qr74UuqAY17wMup2hFC5e34p7A5XXrtG76BZFMKaeHk3zVMtAxLF1zDHibBiNzdfqAjXoPuSc7ZjaQo2n7YTQ3",
  "key3": "kpfHjFvtbF5Q9wTaK98eFRBgcUXMf3h9Tm64QH6Zckf9bcndxyYgDjzK2dJg6w5ichM29PF4MzfaRdW678HqgF5",
  "key4": "2VH3K4ocL8EFsBMSE1daoJHpxKXm9qAF3neFTLAQN3hJjf85HBJX7c3p4bkjiZ6Hpg78SDUrCfhTg6xkcYc1qv37",
  "key5": "2NJ8FNhC1p15mtmVNEMr9Wf18Z2qNQ14bGSvvtMdWhAnkvjmdJ9tFUVqsfD6jRuo34xqzKyirqofmTDYfhvPag7b",
  "key6": "TkYR3NiYizva4GQstMtcanSPJ1TbtCCbx5Tzwk8UjkNHfMtgYqrGuyASeVatYFgJQ2iSSFqNuzuRZ9mENYzBwMY",
  "key7": "41dDCgFVfJsby7os7AK92diU9g6tAtj1p3k99gNbhxQEntMzbNMBgR3LRm2TSBC1ekSJLm2hRZTpKES1TY7CbpLi",
  "key8": "3KvTGZX5pNGQLMBzdDdPNXgHdEQhHTvS36Sp3vuEnc5G4r4XoqsW79zqfz493LDTTVKPGPvG9x7zL1ywUeg8rVyr",
  "key9": "2FCmVsPkVjtr4M5M59DJ5ksaKadvEX5oJpcPvhpwvzGSYLLRm69MPKbWwqwkRUfKUHECAPHHGj43NAhawhgJ1kf",
  "key10": "nhj3b1Yh1bx92RrFtdJ1EtgopVuoMt1A5yL6ysAPGjM1K53wXneAfZpn7uYmVAXhGRHHg52zUBbCmnChN2235am",
  "key11": "5pDdGS6Ebb8FvapkvrpWjxCpNbvFXUP85W1Jg8Pr2SBQTL6okHoV2U4RfjRPdfK5GUGnegfsja7WodaR4PHJyB6c",
  "key12": "CtoesdTFMecj2iynezFMmFQadyXFEp7b95EgnLKRsxV5cTNTysfwNnagaFfWsX1qV8FgskJm3rK6tsCL5z5NE67",
  "key13": "3dbS4zXMkhN2nW5dGqEuYohwrvgN94e1aNmgpgXFDxFcHs6jsEhBZcA8dKkFfsyzEBG1h5sxwibAUgb78mPdWJbf",
  "key14": "39fzqyaC9tS91vjAiN6o1SWfWXyJsvYHEAPx3TE5Xqv21Asm4trcouvtJ4zHix9QbbaiijMA8Ue4JHsyZETjq2rZ",
  "key15": "3MwUs1FZTvgCQsc5kFocGuDxAkpggfZoUfa3q9QuHGggkW3BuJaf8VZcSTLWyKarjdNuQS3HVvG2RLLmfiuDKyTE",
  "key16": "3DujBfcmUmtjU5u4eC7sZbGYnEGtHxXeZsjwhL9LtN9aFetzF3WVtbU8551GLbKsy4FCbfPTWYwgpBS52ozACeqn",
  "key17": "5ESG7YuMkqGwwHzQ8bYGpyYeoYM8Q4K8qUWFhvcm2SBNpUGAH2nec4nWY9NLskTHXcHRw27vMJQzJ9K7XghFcPAS",
  "key18": "kziwvRkXGhvEJ1CiPVEsdtz2DZiqZeMDpxPGWqASBpA3ZZFpZJGRocdNmgyXxLxRQLiqYCQJXX4F895wEhUeXkK",
  "key19": "3CWMQ3ojd42yS7gvuML8hmqN4cusfy43THe7tVkuWRq393kEUG8v2W6V5tLG9RsjtZBNvmDFdobqTBqzrAn896YS",
  "key20": "3jxkiJQ8GwWBK8BWHYKtmP5AXrVRUVxtJrXvCKA5jK3a4Y42SvTZj6T5dwxu6HZmrubi5FQ3LFbV2Wf7kcx44UJG",
  "key21": "4MEChdAdLK7NV9zXcwwXxQWmdGtb26q956VP8PGPT9bydSaKP7chZvV1hCwZ6GghXkcfehZxXqEnBF6H3qojiU3J",
  "key22": "4MuVw3QoZxq5NeeMbHsttWqpELagscJPBD2kVexwxn4u61MUHEERtAqpoLecSHafeYbVhPTwDromvnSS95C23mY6",
  "key23": "3jpV9p5UTFzrfW4vwmFHeeB3TWZTmtKoo6twqE11rS9QbLRm14gDAFHzk56SECGTE391J3kSA4nmUjDw8bm9mEM7",
  "key24": "6MgkRhPDF3YQHtwPHrxmTpNAQTyBqMwv6NWwDc8nU1iD2sktuA8cLKSm3zbwevz8Q2yS9ir8iwAtLLRgmSE8JBS",
  "key25": "gZaz2a1zJSFRHPge3m6CVqngguehLvs3us6QZjBb4fj8PFMnbiNGiZfpzBibYDBPz71AA5nQx41cXt9hFBYLcu2",
  "key26": "RMnqBNCtNqvQQAaTTWFKJmG3i1L6kDiaVH2aa1iQqTjjyA1akVgrZYN62UV7a3o5Q48B6svb74zFPZEb9XfHFjV",
  "key27": "63TXX22NP32RioGLnYheBsQxp9F3nxWE76JL59dfyTDSj5ASEbiuRH3y72CXaBU1Ckp6uKETe8bm34j5W6fc9Fo2",
  "key28": "41VS353APaLfKbMqBGbftE82aMhtqGJbk3Dzh3HDUa43t17bjTz15agrxmbZMtYHkC3wGQAtDGQRiEWB1axYuhQe",
  "key29": "58f4ryamAMekatUiyWi4iDGfJ1KP62t4QqtdVfXekpkV3UPcRGXZNAWZUkHEneYy2P8HcEnN1CuGB7z5xwKrD7fW",
  "key30": "3LYhaeQP5czdXv4iS4ANiu3XvQGBv1MoQ84TZpQVHvpdLZGByPEM6F3SkvrAsELj3eBQejRdoUBTbQhRC6JaG3yy",
  "key31": "3Fu8Qiwo5BMDoXxSVTq9W9bb7KTNkYwTCwwqWt84UN24J1de7L3XJuf7UXtzQz8pTBWiSz2CqaNMseXHZY81DRcb"
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
