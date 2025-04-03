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
    "5eVKskLo4CVVtfpgVD8hFSn6xZ6dvRwVtwe1uAxKFFJUUx5WLJCdft1tphYSCaVzwpBRmGpB6XSnyR19PcZqED62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZxiTez468QW6BYHYzmA8aHzaBgQ7GrXu27bxK17Uh9FzzWWNuss1iZ22M1Mt3h9o1oArNZyLKcfHufndhHrMnW",
  "key1": "2aZNGdzeiYHWvar6W1JfJ39UcogctEpfqtceMXnQts4PMkxnSZV7BXBisp5wHHP6tupg5R2Apw1kWYZXZ9qFzJhU",
  "key2": "dY8YdpMJQYDL6C1Jy8456whWfNbVNr7tPo5JiTbnQj2ehpTNfFCHTTaCr9MeH7DhiaeuDeo9k3A2q8Lg2y2cTjr",
  "key3": "3rvaV1GQaaRZnXJNUoP48dv46eb6ntDkgMnQfzw6QnsrRiss7p2yXV8QuGSP1Naj9EMjy4URjDWWh5HbBgmSF8jD",
  "key4": "491UEfU4NEohSBfMorCcUM58jmmZwkTTRcHD2G5S5jZQTFgDR4ndg9QN9yg3VSopJUaxKWvGMNS8PkELsvhY5Ypu",
  "key5": "2cYiyrvKd57H7Saik3j18znEQGv3msDVoaBeDUJpUH9V5RM1uzK7hCeCXEM9BgsgpEyZnNewevE2nZAgLw6tqcrh",
  "key6": "nvArB3jEywmkgBbfgED3SK6hAbzp1y9TwVDdrcMi55eovom86X4PHV44S1hTaZyfZt8M46soHDki4X31iVDfE6x",
  "key7": "uBVonsCWkstZZ94pL8PLvLVRfESGEJY7LGCQUyseqSFm59HKGMkNoYq7N2Y1ozYJ4fviENwab23fex2jNStJNXr",
  "key8": "52ZBaj1ypbxQQzwHgWyHYifUK2b22Wytv8s9eB7AvZRHzuY5Qb6uCrw46mGg5MJods9Y3NzCsD9AAqHehZT7YTX6",
  "key9": "3dMnCg8FnNcJAsmaXAj4J6ZLd4iyaLMWXt3MVTgKhgfGa5jin5cmFLM6cjhwGk6kZm3NWL852AUgqP3VYEuCarxi",
  "key10": "ya4ryKyUwJ4gvffeNGYWgfTb5AQqj8Mfvh82ksWd2pnNbQWvebVN2U4kbb7CmYKppP4MQekBXLmuy6GWf7CLM2B",
  "key11": "45jv1NLDRGJ6GoRc5aoe7L57GzZHStoUFphWu25VVxwAwiLFVMEmxj46zUwdD5ZQ3QtSzJTgtKjZsZhjR9AEpxFC",
  "key12": "24yPS4ea8geSFYbvJUULFJQgQekmBVmbcpy4JaMCRuNbv6Q92RJbzjCdVrpj6VJywrJDyTFRYdi7AZzqkfibvnGB",
  "key13": "3x53kQvogpuuiePyFerZ62KjXUeJCJLcMNk8V6inV4H3KohTzCSTyLJiaNBxuQMrwmb1SXRCGLX536idihxu8S9S",
  "key14": "43qUdVqK5cKtfxbra4nsK44mAkTJnMCSrmZVvXkCcJ9REhmc2KHXWvmaCmmsmK7A3ZS293HLoTvRKJQ4D5sRxdYg",
  "key15": "2ZRxaBCGkzxjdsWSriwwQJzFGaKYzQ3h3ePVn6fUTw7P9HMGDArcuehH6QnvY2EJH1Jrh1tkkLVYEeqbz2rwYXc5",
  "key16": "5AjoMRNU4eNGVNHQScA7GtZpAu7wor5kFzn32yGRL3RmZ35a1PN4eeWWPTJj4V4QRUbuBKK7rhMwmjARiknJPn6D",
  "key17": "QhkuT8cvSasX7FFXZodBzYAdLjj7tV58nambinNTFJstzgYN319kyQsd4TLYwB7RCSNjFfWmuGepjXXvBqrTqgB",
  "key18": "213CnrDb4Vcn6pudFAfmj9xQAEkHUzL5wnQAenFfCF8mC6aPgjafQxMKixBr546guBKrAckDWLkQhR8zRpi3bQZM",
  "key19": "39wqLFrQXvGNF1D4q434VpSKvwdHkyPoXUoE1xRxQg9YZbZsFcjzgvip1xAnRvTAaVWy4JzGDbpZgSYqwQEQNDSU",
  "key20": "5nkkLnSUz5jCz1L5F1xuc6coEn9MVxXcYT4i4uSsSjPDyxYBTnxesbcmBnDF46qmExCQMZ2r1p3BYoEpczRrRZeR",
  "key21": "3VBUaPaRLoXymo8H3qjHPYS2TuzpQje8d1G2pC8AvLSUZQT4ftPz1epjhfrppEByq1SrNN4THZcE1zYxZPRzoSiA",
  "key22": "vWxoFjPK8cVgXNj7BpWomyfzhDCAxXw4Fxiij6E2bQ39rzuGtddwCGXJXeAPzpjWuDZbcJtxUY5joR9w5EgtmcN",
  "key23": "3NaeT448hj41XvkdPCs6KBcFAwyMEJ1ZgaMJeVVtfzKBGuMjStLAgGTLPAtMNoxPNjWHhEV6NYM2oVEDZNhu3PsF",
  "key24": "5mMT5gX2J1FubTA4fqqWVhLeLWPeDU31PFNF3wHX5HVqcigCc9kqDABuy7s8uihnEUXx4XMYnimFrjRYvJzhcfKb",
  "key25": "SYxYpSSoUxPHoXjsMpMFVGwGHGjjtPP4iQnDisxjggM6VqQ5ARtStD92Z2q3Fno3GngNTrKDafpnCbtPNGwT6Ff",
  "key26": "22AcqbeRy29Ksan2t6WqcoQBr9QR8RQu5s5sW4KbYrPkJ3MMUUJCH97wnNUxhxdCNrt9wBqyEc4NjFfwuw4K5mKs"
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
