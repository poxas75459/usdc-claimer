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
    "5ddtp2ztzi1N49jfxcf7zsEbCnaUS4urFQLXEB2H9U3tjddvYethe8nfZoJrq9yK4ZvemYZt3tdHK5p2T9LKqgRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KiNndMyDfUs8kyf88w1usS25PJ8tTGbLwqNZpDXe76gxFvBoZAFCgrUwdzxQTMKT7nawNahhkSGWRmjA82WyQYT",
  "key1": "5ECRDnrmFHiHbWUjCWAUCHZMfkh5bpR3baXSx4FVpWfFoa8QYr84kCsosjMVxZMEMLLRHGn9JhBtoGKNfJKXyGg5",
  "key2": "5mU9zKcH5u93SjKL36WxhuVDjRzPoRybfQyt6RL95fki62eercbzuLxW2SQDRQ4K3K89veu4PiG1ds7MikTn5ARp",
  "key3": "67GxU5dxkyAwTNvNVHW3E5RA2zAdp6GXLBmgAK91iwVHNVwYDRWpEKdxkB2u7d4G5Czh7GLfmeC43YjmDy2gfvsy",
  "key4": "4eV97pCzNTvDdTrpFvVK6wVtETMHTai1TfAy7kc1ZCCGNfF4k9ZfQaMxKnpCUVBPrik17Rt9WyCeCVNwwWEDj49r",
  "key5": "3RT83ABwBaSg2eRWfWqjHRUjNWkmgWVi2f6WUsmP8TfsLeQL5zrN5Aw52LrdHpCa7Gd9FKrpS13z8Gs8JhorAzYh",
  "key6": "2vV76wz5hsvLkRhh8eRztAYZ4fzjAkCtGPifZguzBUSd9p5gECQxUh9UT7JbbhbGhki98rJK79e5P1Uwo1BbQchn",
  "key7": "4pKRrfPKS3mv53aNJPjpJHjwfJheCzs67rpmWq3KJ28fVQiSa7nLpahQcKPc8yDiF3p7BEfXmQXCwSfjZhL1zLdJ",
  "key8": "5SvkiavVLZkojSBxuikNKL2xbZS6FLQRy4Cf91LeVXhMriRdihBfUzPjV7seY2i8Twjnfk3jif6YDgNj4UT4ZEsj",
  "key9": "2ut6jsyNXmAc8ce2EC7F9mw5JodfGmSuEx19M2tdYA45iRtPGRYhPThRVK93rnswqQAfaFkiW3REUrKwPMy4smsZ",
  "key10": "jB8PRDTHwtHsY67PKZZUwxkjnVmPed42Xzcdooui3YRztrJhmUE6nfzwbjHvq9nd4bDWcwfJ1f7MvcQHvL3C46y",
  "key11": "5ruHs4vRrXM9hyo1r9C32nYALsEjdWsic3aLpdSYtUVTtSQdfMSWDmTd46MkXFUdenpSuebxC1oTB4tgPPHmSwwe",
  "key12": "5eN4uTk4ifWfN91cvcNvEmgd9vCbprr8G8VT2Ce91QS25hoRJj5igXufem5QGb2TmCerKU4NahSgcVVBiPqFLMyk",
  "key13": "3QZYEeSodWqQCYtDyLdCz9HqfFqZfKjcrqseowxGJJdbtM4krJ6VeioNDAaoUk4UUxn3nTDaVkVSecnLJfhUi8sU",
  "key14": "5WyqxannJ1Bgbytwqppq28xiJkgEzB9AZoyzPG4kpS2ZLH5abbRJgtvc1ATPQWQrXVHkfcAzDj6kNbuprAnaFcop",
  "key15": "2NT71bBiDPm3eFbMT1jHskGqrxVNqMxaSAaDn4PTo1vPmyZAfxgdAePUXcaFk6aZpsNRhmMkbLc6KC3RDhN8RsSC",
  "key16": "4HWyttLZcEjLJstD6YYgsv84eV57woHL4gsoP7HefwKLdK1TZq2DzrYJ2jUNUJGry5wqyShfuPTFqTzNpgETkpwb",
  "key17": "4QCesvPHgdZKDmodPhnqbmTPjcMvFniiLvVf6kAyLDzduLqyrukxyV5y5wQeDmruJ9haFmhWyeyzxTXaTpPhXJnW",
  "key18": "2ZCdmebufT2WURfmTaj9JRpuiaoDQNG9LnMkCsMhbJtUsZcCtFdsFRmLdMA5BbMAbVHa3o5DjX8nmxoVkziSxBei",
  "key19": "4P51Ybe7CVwjXVxKFHgdHcoPcE5LGEzEmCY6ndfXRPWKqAZHHCpFJof3wMvyk2eHTbRTpkowAiyJcRdnwuhqSY1f",
  "key20": "4K9MeE8DSsoQ5gc7iZdpqD2jiBX67T14uZ51Qm6VAaTj1AjeWQMKppQqBmQLZF1zAQgvctAYnjipVUTW9YFuaP8X",
  "key21": "5aTeEKB5DM9Kmgi8foQTgW4uSeSD1wpRSYLAjwQrCxCyv9nMh6FhERGyY91e59DPFUaDY6Eo8JZSTytFcCd9sGry",
  "key22": "2NauLhKksPf7niReZ4nAjNwTBCfGgoZtdaDXaHsJhhme2DrhLC7XbPMEwFeu7b4ZprPHQG8ZmNCuqTowWYz3mRee",
  "key23": "2et9guGkKgjo4j2NbUgyhsg3LKe2KdDEoattMw9ARqFbRPqtRycKpWBbT6TBEQQkMw11dHrKk61tfEUZ2SYhw2fn",
  "key24": "24sPjZQ7H8BUmupqPX27ZF3NZfqN93jDHqPtMbUZNZqMK1typUg3Lq8CHqUd8kBvX4GGc6oUn8MxzkDN46WzyEjY",
  "key25": "2JZcF9PuRgdgwvsXK46buw3RyeRpeHmv1ocByitMNX5eA9KPwG8LFzoauhq8NQKk5MsNUSga4sStztCuQ2RY43ak",
  "key26": "4pxyUj8utpzXeRENwpEu3nUohF6pjhZbD9PHCQx4FrxBwc9XFnhpAG2DkRcWzb71VEAdm9t4LHrevVB7bcERpces",
  "key27": "441gAYmgKbB6LnMzDXDfNFu1hPxmTxD6wWLXh5jCV3vyBzNia3GwEvsjUFWYAE8L2sS27NgJhFnH9RV3VfxqBRdp"
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
