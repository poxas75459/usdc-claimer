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
    "4aujmXgfTo9H6getMCsZH8kR8fpboTEMY2bitccwAqAQHrn9TchTLZHeXQCD4h9cyYVz6kYbkLmK5UNJG2x8kFKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efZYzu6kPJz7qDs6eccSDEj5AvdAkaXJp6kvSh3HVE8gh5NCZf8FRf1WzMagYx6f2XdWGdjM6xfWWLYwH6bHP1p",
  "key1": "2HXYU4ryCNX2z7gPpqyaJ4CYnoHXuerEYirExMdZxDYshVNtajCJfquUuChH7e71FCJEtdcQorYrypSiT4mkN1dJ",
  "key2": "4FNmxEN59e5tKb4Jh8NfFpJSkRgBdsnkK4QQk4qiRUFNLB4k2RsDhWnzfV69RfuJpiDwahSp4ZkREezvDc4Qzd86",
  "key3": "2JKeQnsNRqszxg2mbcPpJLLsXc1N1brJgVp8LYNG3VJa8s32pq7vaW7v1rWwbTQqrBtmNbAtgFhD4rPvhVtZjXRf",
  "key4": "26D4g7LdFNkuw7eDxYnixuiBHdHc7zj7KA7HRAtxGnGJiknU9tm7DYG9AARRaeR18PibQbUpGkPUDtTb4Pmosv76",
  "key5": "2oSqVmpL4HGJLuf6z4WSpeK61Xq5HJYmJqrQs4aJxRgUXZFXu5dPK4juJWBY6TL6Y1bcPp5nJn6wyX9cLwyUyDKD",
  "key6": "44mcAxSEHbqKxPkZD66vSFgpcAmo7XKp6ywbHmUA9x55Hade1XPaxgskEShMG1HUGqPjm4E84Ja8hvzbZbrUphFt",
  "key7": "4voykTaThMnXeuYfRsPdkYhyoNKfSQiktrZ7KYWt2tQ6ZfdE3Jp2iRGNFQpc518onwcwFZaC2yrDmWsrsn2aA8pZ",
  "key8": "2pPuPiA83sweehZEUBq7EmhfNsdGHC5TEbHrV66TFHQURMWZzFznHVPk7nDJaUtLbuEsRrAj2nNyiwf7oj4jSFXX",
  "key9": "kYMKGZF1QWCZaTHoWhh9pURPKppYnPo7C75YuDCTa3CHqxe3axCwPZeeQ2AMETHhAXmdp1XMQHx5vnvetY7ryw3",
  "key10": "5L7KZaVDnv1U9iPAGZzi9qp8zYGBEKz19x6szZs6RV4UCnSmPUCwYLeBKr4SFogqS5f1x6Ex15698h7YGZM7Q2et",
  "key11": "2WHobkdG6PLYCnhWUURuLgAgZhHxZfwRCebAt2LZnc1oVBRYsUDrGf7ZseJY1E8GxmBKxfhYjdpwEcs2sEma1sFL",
  "key12": "4FdGF2MTPDuMoRgUma68RKcUMPDsq5KfK8ZaXFXeFHqW5X6kBbY9nhS5VDrhihTSkJ1GnjddgWEcXL7KyU779ZM1",
  "key13": "26tFk1w6RMBu4ZFz3rmsTCzf5uu562B8z8HEc4Z75SxHAgDtwWeuh3GUbTxCmsCbCDu8tnjmmKrku4asPsq5qnQM",
  "key14": "43JvxBUhGxyavaXGDW4aShBmq7jFWKnyB3BkjNyro74wLaxramLQaCNRyvrYxR2H9rXMRqhYWSnbCZAnSVNo2iTR",
  "key15": "5nYD1tVPKPoRbWd79FZ4r1yfAka4feGRRW4KN3cPjC3mpHkRvK6QYVV6o7woDoHH5xZN8dPFkaa4FXSBoXB1adqW",
  "key16": "3nDUFEbmpbRLXXXDrzJ7SNKjoejPqzbGEcWuoiENvgiXrX3yuPCvnUfxBjnvb6SzgThKoXRQXfBZtnr6ZRKBT8Pz",
  "key17": "5JpWdA4CADCkYufcM95T12M1yPqm2KuzafGbNnBFjN7nhumfakajDmwgKLRu9tupu4eQwMwRdiw8y6BqdcrDFmxw",
  "key18": "3mwJ5KZLsuQSBL84v2L639gWojf5zXMPxuVoV348gAd6JCXBFgMHk41YQeyp3zTBt8ZsRgzQiPcjDpZYUfaFNoTr",
  "key19": "3JjvbTDsXFATwjBf1pDAsv8QoRXBc9KbqrNYnEVYgh3jrdCzvoVLWwkhNGahFWtJ2HKt4YR9VGvbRr5eLW1z3tdS",
  "key20": "E4ct5rFRgzdfsVtVzsBgBNXqTWjewUPCrsx6ZDfN25HKyvheedpCEPx98DQHoKVknuQMRi71Dxa253dm3HRwFBN",
  "key21": "2YkvA1kHrxckPi1bowkg2YznyPiD2EDNUXzPcgrwRjwVqmfK2m6pXpJpVSuQmvrWv3Y4g6fimE6GwfUNBg52yDtv",
  "key22": "4spRZfnuddujBmtZXSZsrswBWxXxzXc4foY5tqqQbKEsJTjv3GNnSQy7UV1u6nfSCep86pqgVe367iFprpuYrQbs",
  "key23": "2M1u9kkDyo842tS2mzUTBVpSGAyXuk8vmPpTPVQwN22GNC3cm75vNXpe1QFMRkBSY8pQjKkDVt9F3hd8cHSUsigM",
  "key24": "5hJxZtcwEC6AfJWEjSNBxBKPEnGpzWEiXsjwHMD2aaWRMAqyeYkQkjWW63mfFNBNUyyTQMMEvaLXq2Vam92ah7Z4",
  "key25": "4hKhQxJz4Y5u2rmbjcCX4VazDV16c3C5j5gbA95ESBr1ZVSCzx2K3Zse3nhnchQdVzcckqaa4JJ6mDdvUtui9wy7",
  "key26": "2v2XLzJ7CdzWtJJnViZneszcXvihyMVLnRBwgsEqCUZMdTT46cjUF4HmXYMm2ehnkAB34TwewwHVvoczy6eMijiY",
  "key27": "5NqYdJBTqoUh8BDsPB2T5uXwCZkTrLex5Z82pw1Ls2s2PzCkWa2YHM96ifZjBbYL7ki3cdhBudcetRCQCB2Yi2FV",
  "key28": "2cXFftRecE58pNhx33RVFHvWjumfBf46ZNpXQQHZqBz84kmMh8rBm9rZgQYnoHeLYSN8wKbdga25CzR5cqfBjyhe",
  "key29": "2NJbrM5AFKfsH6XtteMNGJUqanr5kDdHsA9V25YoUe93phrEKixUfSo45qB7g1Wv2bD8RPLNTgxGCBikJfC2wFyW",
  "key30": "5VFyWc8QmnY6EidWXr5G8jyeaV2bo5ybiLgf7pkNirjy21MBV8BGjmi5GUNRkVYtis2expqFZ48PJvijmvoSp8ex",
  "key31": "4e7tkEECiJ9XdvE34Kk5ML5hoAbH9MSVRGFUCRzgLQYEeoenCoegV9e7L9e85HW3ARpEw8mFB5HeBUn1u75HP8PQ",
  "key32": "441LUrmsWq2q73MhxW6j7MVbjqji7fxsLGRg7mEQekP1NTyTGvW1cNZYKMaUWycf7V6EKbcD5UL4XJW3HBCPRFKk",
  "key33": "3i6VoiHn8JB1sy7igiABRAdh7c9fVdf1Tqq3kC5EFgsTiKDKMpPQWwyPit1mvNmxbjEXnRRgu4Qx2fWo1sdRke3u"
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
