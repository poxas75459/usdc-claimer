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
    "3EPpNrAPxjLKpZWuf6Fv1LNu9EMBLFedCho1jVpzB6q4VEBCVPjcd7ud9f8N71apPJsv4FAYczQruUL29zjKcvcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzDFxCSbBoWfy7wh9XkmtNBXLA424QshT99ePVTYnYPENJ82yTctXAVKrUg2K5stxWJMCL5GQmPV4ko5iYnC1rT",
  "key1": "1sK2aftA8YcDuCsHneShFEPrZeiPHvwH5LpUWv6mPVToKEEyRT4FSnbPXsh3XDFNh9fmqjneebY7FbQ2XFg8uCY",
  "key2": "5uTAx9h9ZFEfdWazdvuHDRFvZjUEzrAKpirodKkNTiCddSTwtky1axr2HvLqWRBssW7yT5s7db8zQ2eKdC4iPpyb",
  "key3": "M2abdb3suxEMtLQPKstTWGkpgiohXPKYCmgS44swHeUJL4HUCZd6HG88zUg8DVhQFMgCXi5p1atzUSFnugHYvHX",
  "key4": "2iKJU3GfixBkwBUMZMqBdjBDiu6NjQ8BHEZwd9N6UwVPMdSPmAe44kr9UkGUb8TmFV2gRCAuv2gqNf4QcXDNiXPE",
  "key5": "2r6zPAVkFYhdZRJtYWr2SY7hc7y16kRxbbj6Fa5AzhcV87tZkki8PzFPSScrNUC9JXUeCyoJYMFa4r8NLxjrn2Fd",
  "key6": "fpKrbA9RJBsatxVPMbb9wLkn95ZcGNCxd9QKXvYe8ifgCUrYFqFmjC3YwTFsPRmABzyaVmQs1Xz1TJkTsyHVtf5",
  "key7": "5BGg6yTnuggL8ufno4rvFM3amnvf1iKXaAEJK9aZseWsbpJPC2vF7BnSsb6PTcJKBDDFmf9Ue3jLu48T7tP3gDKc",
  "key8": "67boAmSEUSSNq5KZLF8pJTR7VwRUbzDgXeZfBvjnEcdrPWgGm7Z3hBTfxFLLUz9Aj1ghNmuVBEyjgT2UzcuKG1Cg",
  "key9": "3iB1mB43FpkfDJs7byLjFcP8ifCKcYYY7KpusbTnic14DPyaGDubJptcgxUoK2eVX5Z6NobbYrHnr2Uzjpf3HZVr",
  "key10": "52pW6fyUS3amNcKdTJTWfKb71DqpQ255EZtc4YiMaBTFuNcJCKUo6QrdWprZTQdRPV5uPS4KHoR5TUFGtjAMWrHK",
  "key11": "3uxAfk6xuJpLbCUWYf58aQqgLf4moZhkgwM5Y16DnQTt7iCAt2L6SU8FzCKPUL5Ag8iKzHXmtM9cYTfndmMp1noc",
  "key12": "4PPSfJoAYzhx7ViYvcK4WDstr1RirsM6aKQcR4Zh8qUtm9LYzob6Gy6V7iCJBKJEgawgFxS9YjQ1dwvJ2wN63Axg",
  "key13": "54WqyvyJsbe7F5JrC2tNuAKBgN6vXeHcCpzQanNmxDUDRA5aorybBA7wKbBZEGhomTW18WcnB1UreF1kt3h6VDnj",
  "key14": "cSzpcGoHM3ans7ofCwN7E3VDKDoR5S9YfZaocePY4f31FHZYJx1XoZCAHCG5JoihnYerNic8T8wNDgwmmJM6e3W",
  "key15": "5y9HQfwsUKiP7d4NEFNeTnkJEPFWpUS9MnuPVnetZBuLL7ngwWfYb3Q83gox1K5Q2N2FYWEC7VcAaJ9JfQ8dUemr",
  "key16": "3D7cjQCgnxxFvWVW49Fx3kPbwoE1gZWFESVLy1n2J8C9k5rWq89SFxH65A3eRn8Xj39pPAPcfwXweckMQ8PSGRYH",
  "key17": "5zbYWEou7X6Mi9ttP7LsFsJDXD8Pxjzh9wMZ8BF9Dd4mUSJsamguUVRRStVkeEAZpWWQufBGE1iwVA7Fb2V4Aw6u",
  "key18": "VrGegMQUCWuZV5UY58Dcb9HdSc4bw3YDCtEoUA6N5cqQ2afPx9Z3ySHDLNipHC5sJAt68vzrw2hxp4REUaZRKj6",
  "key19": "ttqzBLeyR4iuqUDKkHGEtyAQ8KGUJWGUcXD8bqdBCQijFZGVxzmNWou5PbnJujJ6TRSiUaubaDumEL18XeaZNrx",
  "key20": "63auJU8rwFmiSrGipoqBfusrqS7yNXbVjiKy3Tb2HYhavVd5ycFmG3F4kn8tKmoQAALTkuUsEpsU5hvzAwHJ3Eoa",
  "key21": "3ykrCBGQTakguU4u1aaKAyenEWNQQMBTZo5BKWTMreNeq9amkZVuUs5emqGx3EuZpcBVa4UehDq4YfmnQo3UUyev",
  "key22": "2jHV6Lb5XsBzoVrN9zzbsTgT1MbjX9PbsqmXyzX9mEY5VgtDX7WBCsUYm9KejB9tRbeBspBHv8yFRPzH6aKznv9x",
  "key23": "5rYBYn3AaGuJQ1BXFPTXa2qM1CTrGCSLnEGDnx52YtkvPBNnHWCH6iMnK51sL4ED811gZYrBKndnNcYztUHGMRzc",
  "key24": "56cCx8ved6F1rDspkKZv8gKtcrCCsyd8fcxZi1U2zawQCxe5gHg9WUqU9XKX3UwuQVWCFXQsQrjd2P2vTuPqUSCj",
  "key25": "3QUJx5AjJS2odsRMJvFLdxLk9o4qtFR43iKp8XAP6GFZUVgo8NU9gS6Ta2onSjSmeY2BZGLgbYVYXKeAYU7KF1HL",
  "key26": "2pDyjAkbM78JU4jeX3SFW8wdMEYdXrvp7y9EVL6TcFMSW6XvUVWUxbVfi43ZUX4jGZ5ErNZEe4FwdQH5KrWitfBk",
  "key27": "2VoLfrhfDmmsxZynn1iVSqMCJmVCDxFrZYnyRuW5T8HkobFmKXXoKMuAKtGFmr9DdZdVBGrYtqWZtJjP6QgcdxmM",
  "key28": "4wB4V52WHvPiwRhRLCs2YHWyZ1ABwDE5vvgUK6kiHDPRsPTkK3WYSQxjeoAt6fRYU1Hs97uGmruN4w4B6KuN54md",
  "key29": "S2TaYrkUgWcuedoH3HpikPDa2eFBZeTt3fGHdJLH8jNpb1cBy5ZW5GCSboTG41CyCaq5J95sC4PsbngzJKQTM3p",
  "key30": "5VuEjx7eCZiRXLdZHfKENsYX1TyKosCKoAdpNL5XDdtnSNW1WT8QxGfebPUTRUhTjejSkgMmpXfUzJLHFTPP7BAr",
  "key31": "3Sie14VdPN7Yv3daaA9ba1TbtfcXUrySRNSumWDUpNpJqMz9sQbWDqP7xAkPQrzKacGRjKB2EE3UsaBMM2B7YnFY",
  "key32": "4TtvqybfJrLZQv7TeLeXTQMcAYsQPGx45hWCH47RHcsqoGARBpeyy8VnQhSgio7fRHLH13R3pin543ZpVmB3FMch",
  "key33": "3kBn1r3ZNDoBtMPrdeUtbV8irm7q29netUXkzu3Nw3SJTAmjx32uUYpgiumRj4HQMavCRcCW3N7eNju6UJF7WBLt"
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
