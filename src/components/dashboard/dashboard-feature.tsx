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
    "5a72GsUaBhP3nYoUqdFtFyFqLZx7nzispLe1Z18VPHXqqjRDut9JSxiVfZX6X1AvVjigBeGgmcnt8eccegJFK5eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2do31Q9BaKYRrzxTETmNsv4xMBj5Vby8kCdN18eeF9mjr1PRn1pmU4ZFwg18jjBFfRUbw1zo8Waeqv7tkSBhqE3W",
  "key1": "23mnVhJXMw3qr6gZAPRX3R4RXR1HdGsUNrVGiHVzM3C3dvB3sJefxYReB9bLH2iSkskM4dM8xoWyCRRf4LDmZnk7",
  "key2": "36vGpG8ZbUa4UAoq1Vx2g8z73zU4TkDJ3ACJNz2VsNzwKpzn2PKekKN4fJp1oW1sEseUxxrF828BfsZukGrZXFrj",
  "key3": "3P5fQwQZdNpsxuYG3JHE9v69K7dvbmTHubY3CWURiGfsbjbjLv6tffixfeLGyumpgbkhBtcN22VYuizFomQ3iZDz",
  "key4": "4TbmJ6iQojgmyUcSkTtqXYF4mLaVL2vo5ACDkCcNX6sRUhSLvNwadotGSXarFmfWvvVYybvFq17yDnNBcxMxknZb",
  "key5": "3VTwxAkRcjjqdhB971SKtYHRd2xLJk5znQ3eeWAC45DCBxJJ1sT413sJaB258n5rHKK5D41S9jVhkgcmwRzb2Z7E",
  "key6": "2oyujcAXC5RA9FxcB5bB9Zvtm8BdWfm63UMix5Nn9BeEqK31zGQpvwM5fWj1Frzyfj3E8m8jAV5SBAma1XjQgikZ",
  "key7": "63AWPAV5JNtomL78jcZNCvftBCseh7CsDidq8LjtLxDVu8Jj1CJX2GcfA1wUoKQFGz58w9oYAdVL5crxdcr322A7",
  "key8": "5mawV6et4dL7J22yE4a69mqshY6TxJ8eeuvktQaNvNHLyaSoRSF6tFPNVPoB8AjLQu29TQDPE7BDLXPySg623Mhi",
  "key9": "HbAg8EAUii7iRV1UMWBkKPTiQ1vgtJSrvgkZPZ5gA1bwLAGpSi41tsXY2CkjwF4wS4EPFNAWYAJRkyx3tkW4Tos",
  "key10": "126nNy62FdGXxZbHcSAkLrnSanHPDWYuAwhbtdVDXf1hJXDnXLVA3ovvdQjj4vYFgKgMwQdVZp8xr4WSqaUQq7P",
  "key11": "H7g2r4WRLAxQowYLRZXkJ3mz9RVyNTAwVg9WsoJgCAL2SgoJNyUDXJEfv7Kno7AGBb1MNyYhtHVgRLFLosKU8f8",
  "key12": "uSFEsWNnvx79rNrznJbAcY8Eo28hkfspznwq3Fd3vn6SY77qyucgYXj8NkkT1mvPimFQV2kjcfGhJW6jsX4T5bL",
  "key13": "3yKjXUb3FRCauZhx5Pus5kFBVn2o8zVsCgwRFTGodKAvxCxMroq3nYWmf3vZCBigJrzERcj5UuWxK7jgdiF9vUMD",
  "key14": "5GNjd7Gyya6PXWaE9PWpLsP1x1yoRGudhfYSZb6oDEuwL4KS6CEZmwm3JYEg7afKFKCL3DWQcpmG7f7EQnXN1AEJ",
  "key15": "2vMqPDqDyeXBawQE3TnhxKh3iDPu1q3fjQPgRhExRRDcqYbBmUgPBvTZtvw7fRpvmPfpPNfRmZycq5yQFL56W4UJ",
  "key16": "3bfaNzhHfG5et8VTEQjdu7bCuQ5bhCMjFS7ZpnW7keFcmZAcAJx3nmZKZvnchKkTRprLxzdKU4RHmeEkoUYM568H",
  "key17": "W1hjMG8xERrXQ3pVUvxWU7PWefJg8LNsxwnFkHHy5NGFc3R8PhNeKEc8AhTtQxceye65sQSkjodHE8coM4NcjPh",
  "key18": "5Pp3Kh1tEFw7ExjNgYqiyqdXmSjJvvuFbivtQg4bJyiuLr6H628FeAc9CZpyjHzrcoGSJMff8LCKSUfAqsCPhpkV",
  "key19": "2obS19x7JSE7q4UL4KMv85rUJZdkaFUJBjeaJZd2k5Gn221a9X1SM3Cvtf1EfwF7w6zsFe8tYtp3zqw8WGV7FAgA",
  "key20": "fgEQkhWpaYELUr8H7H7Q1Cdh9hmFBWfBGhcmgeVHvBxvpVjgked3CwvNNHSaM9ZMojTaDSJc35bYqJfJETLefTx",
  "key21": "5t9QA96X6a9dtUTGXphjuMunHmgyNZvLLpqWGRwre1eWAqjPY7LaqoGGCgpYDP3xcN1guo6ZCT27x1YkPJkx5pmE",
  "key22": "36rp1qur3UNUJtRvywovQxgZGmftshvK7MLneWcHVQTFhXh9oLwY79BQg2erVVh29vX3TGANaaDjtr9HgtfmTGoA",
  "key23": "3zfpmmBAduJABb4Zu6PvbiarYpfGr2XMmsPKjanE1Gbg7TK8PvFt9bcBttBuJpt3fiVDhnn6qL1j1EaJFjKpTn7U",
  "key24": "516N8upX89pEmdhoViiwhkUQkwppS1oQBaQ2dTDKStcTgv2JE5yGpd3sckMMGVu4umxHs4HmK6cMB5LBrFpyZBQt",
  "key25": "2kVWYieA4YPUheY4bNQuQFof7zS7NgQMdQCCBnKTfvUsZ9Q6XKRSfDY14MKzzmRdFW7m1jAdeWo5Dz72aXhFhbkn",
  "key26": "2LfX8f82cRRwXri3jc5ye4kzwnTviYM7WHjB2epdBDWRZ5R9PfG4mGryn8W23CpyEQVXAZSCj5qZiwD6397UzvUq",
  "key27": "47e4kMhi8yGG8qLoZCfE3xPpQJxfpv5yTNqcHjzMvavkvQxhmJv7ujAtVPRWGu6xnRpPAP6vU8BmBKKYadbotcPb",
  "key28": "5P2Pm3ULS71UZSkQryPFBD18T7HoqkytEShC4B6z935modQMe9sijcF1q7XUVJJ2shopqb4yoH85PkrMpTnCfxVp",
  "key29": "4YVSyJLpyq87t8nyaCcdiu8Lca5pPdWrM2CQNimfKmyYoZZiNacgJFc5mh7xbEJWzJfQcuCFhKUdbsCv9oxoYitG",
  "key30": "RCp4n4wvXFxnHaC5uGsShE68KV2LyZza5i9PCb8Wvm4eU4zivhzyKjtvemdBaPkqfDADcYmJGHi9dptgfjSwbn2",
  "key31": "2jV49BwSuLY87wNga21APFKZP5dMvFmvzijqJqXxzK4m8AFHQfAUmKw7T9rNpxWA8pH4NTxSgRdNikCr2EKzsaAY",
  "key32": "3pxtqpwzpS38Jvg5q1Mh9J533Y7Gb74pj9fcfMFQKRvFsgPw1PJbAhSbKczaSUWeBBDRA4hQiLDVoQcsHK9FK8xq",
  "key33": "2RKqkmyiN5dHiFHcDrzb4UEi6XZseQtebRMW946mKSTM5v2ojALXsBnWXeyqhmv77ytts7J8pq6mgXRRtek4uECc"
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
