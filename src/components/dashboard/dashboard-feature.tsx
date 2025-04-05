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
    "4HRtWhEE6DR4e2tvTEiFnBaHPhaRpb241onidfLzR4kwDpCddpNqBHX7Znz7U5213GLPjjyYz2GfrLUVkAUs5aU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJPJJ1RF1vFjSHBZt1foanNKXBrqAQ3JsYdkwNnoPxvaxdPGYVyd6ypWLne2XrjPrcx9KJbe8TcbZQtk3vRsYTB",
  "key1": "4xALn15RbAHfDdN7jzFoZsxNfRho7XbZGBwpDERiRoCXqj7tcdmEnpzFfzoDWZnbckuvB3h1VH8H6SXp1RAA29tp",
  "key2": "4Nk4f1KMTE9YXVYAQ1jNjbHU37kpHUrqehni5ggDMNKuuqSFwRvPeLTSq86n4LhRbzUdADo1XFFg6SkvwAVNeLDn",
  "key3": "52594gVn5uXmW5S5sEe7UqrzuaQJ8psD7bDdVj8XPCy9x2cmy8Bo16UWc1oSDnRnUtvskwNPJTN9fRtmuUfYyJmR",
  "key4": "4TvxTE5D11BrK6NCGB1QM2GnV9DqztR2QUKt96KwuVyhZPwxRQoMm2exmzQE9F6As21H2j3SWwvEU7YBWN5v2AJ7",
  "key5": "2WSq7qeQqst24R155FLVu1K2y24WgdZbH12EGetNgeXS3dxVHA5CU8yVwpLDq7gmZzmqmJQcvRWvmRSYcgQTyv1Z",
  "key6": "62VsN5WCYCn5herMPrhAsYz3VEAXc6o1V9MSUdAxNvaVNwguccn5CbQ4rtJVckALFe16sxe8wWmk2we4kxqmeZWq",
  "key7": "ehL8QN13T7ubw32EXnYqVUKYjfQZF63hrjJWVxeUYBJpXzbo6otcdx1fjHCsEAwDR41qsaECaivBytWUTVVsVrR",
  "key8": "QDnP2e4K1ugxi6UvpiCyEXCYiancpQhgw8pm61CrTHZDWojaZYDF5YuK7D3ADSL9r2P2KFRM4vscsDgR3yF7zmy",
  "key9": "3MS5ix5meduR69TdNeXyNexBFqknnHsH7285vAVy9HrjMmSUsDxotpp455GrdXBK3aMhFihbqFqQLkZZnriSjLyQ",
  "key10": "56zSdK93du4sD9gEssYXzDfvH39hn9iWcfuZfgErqGMvC4Rp14yKkNKyVAeuVFhQiCXTiMfrvkWC5in1E2DwQQf3",
  "key11": "2UGLnk9fmKq3RFJJzF8vueAqeBNDVTGMeG9EZoeDaLFVdCrBGwVWRV176CY7q8mGrjEWKYMi3Kz7E3mBjMK8wUum",
  "key12": "2erNq6BN5vr5Kdo64rTVBmRaKgE279HZ9VXQ8sDG2TF17RyhyBcuG5A7e4JqUGLaf523ZAEyMydT7EbJtqfzmvZ6",
  "key13": "7okawphxZyATvzNQUEwu57mL4TxQMJTytefrQAU38QFDyP9r5tEBxCRZJDxfEkzVg3PS7kk6EVck6bVP3rngXhv",
  "key14": "5jPZBsLZPfXHa4KMqvEoA7scfvBEJgQqPQux8H5baUGLeY2QYmmbRUxPdf6nKm117UXRS1wkBxHe8NuBCTDtaSD1",
  "key15": "4ZEijMkbBNz7ueezqrpATqVzBTtbRAwf1ss1aGVjkq7AETHyGZTqbMBhrpKSBjo1RbGnfLjZsvyBGCiqF7XtDcoQ",
  "key16": "34NQF7hMD6Tjc5tKBXkcCMvz9C62mYD5ffWQppNK8Go3AUAp7z8wahSs3psqEiio357TpJMPS7Fke6XgaDcZRBcu",
  "key17": "26LEuQafAJpR8uctdVQkJEd6aPiYRUYZQH35phdPuEseBFu1f1zKdiyW52sBdaqw2gtY7Y4RppCff5KaNeRTcdh2",
  "key18": "4Be8wS8puNabVWVPuUQsUhk4CS472BdQUVoBhna3Ms5bVEXfKu8LK2NXycYzVc4gQQDsEYW5mpi86d8udPt8TzNx",
  "key19": "3xKcDKmAX9FZMzk5QmnkoszDXTMySjjdHjVm8Wi5Rs6p9m7q9jURGzHS4S7ryFqdsUYUSo7U6g3gdLcFcZPXeXCq",
  "key20": "VfefLhCXKUg8DSurB6wJFMwV2MMxbtZ66qzmVASDMketK5uS7qVYjfL4tKryoWGzXLCXgm6dvdjiDZ2GUKKAyaX",
  "key21": "sdL6whQEqTQoz3ohRHX9Z2L4RQB3wGMCgZtUau9y1yBpe97VNx4tJdcB8XzcV4HYoQw7HtPNJGuBcqMcEuxF9bR",
  "key22": "5MV8UHVs1HHnRW7vDnwvyRqr6vPTPKxa4ADfTrdxiejWtKZuL9fXDf2fAqYAxhA5Z6QfXhHqvZ76qemGtYqBBiRT",
  "key23": "5VSVZkFKZLkYv28XCm6pcBiLswYJSyqi2rLdiRGJntJh6WearpVRuSzN8eCYEyYaegyBmuw37BFQmRHVRe2GYxBi",
  "key24": "NtEcN2jCobu14gn2CkVMg2epDkivEtN9UV2YxNnViGm357CKFGSRfUWUrdRwYSZHbgfaYCRSJugnhouAvazNx3P",
  "key25": "Pwu1ERY3s9xf51WkiUV9JZQBeQWUwPwfZ98KCmyfxTSCEXCqEXVaWHN1nHhBnixNf7gDNr4eXBXdtWV16W7BEtp",
  "key26": "5Lvr9WENFp94PBWJZwNyBaa6hGFtq6egLJiu546TWzvtzZziuXXvf2Rbn5T14JfpYVYFCogkuNG48QfcHWb5ERVe",
  "key27": "2b7xTMumWcBwCTthLgBJndLDApnVE7xNHUZ37spTDT3Fhervr132sWY97bEWbKw8npHMuBpmaggCwHHhctuTJngX"
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
