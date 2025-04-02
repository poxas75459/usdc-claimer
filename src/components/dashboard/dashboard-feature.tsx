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
    "CsQzQRqm8YtyzcUXZkDXsEmtSZFYuX3a4BQYqSMsZvzvJRFBMFnHUPmviBnAK4B3rDUVVyPwZwtjgeKAWXyjSVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYVWg3YUpziZjHvvNffT9jZ7QxTqHnGp8T4ubybJxHbDFZ9PSfnwpzNHp2S8WsTyuWRkEU3Lk6ndAazBfK6V8gP",
  "key1": "3tzHfoo7qXXHxnJp8yzGp3onWSfg51sZJGkao3UNcUWqUQZ8es3sPLvyEwN8zXD5BXVphLnNzrnETht2crH4mtui",
  "key2": "5ahs1XLhg8VE7HPrNTYKj5BtrdeH16ijZteHvG331v7ZcJoeKYHUC9CHhjiQ761WvSDTMjmGaesVUJu1o9Nn7fAu",
  "key3": "4mYddLZHgBxYcyXSqiwvMEXWJpsyjYaDjpuCytkbERcZysm6dxfvCr7dmpAQpmmc8ZbXJVsLULD7fAxqquWDkkyM",
  "key4": "2BtmnPijLmSpnB8xoFYDjFkHU4NQqaWxPMsxYnW6FxX2hQ1pPqY5azSaL6Ak7jewYjK9uMdD5KMEmS3Hyw7skc2E",
  "key5": "3PnCHQNqpw7S53reQGpb3Urdr78qEwr5MELP845V5HSBP89ZMqqh4Bp7ucmPP9be9J2gwvHEhL1QXY5q5n3YUFgL",
  "key6": "62SFBXx7F6HwWdhCp7ocnMMJ4LtTyvCA4CoZMxZebfc2oT7BqJCSBLCeJ6VyHahK7PmtQsvrD5MTghuYotHJW1zn",
  "key7": "2wG8f3oHRMaE4C5UxYcmDMWw6c1xarh2GDsVHeTfNKTTS3ehUoavR2FPUUakz74xJt1Krsm93rMzVXAcs56VpJ97",
  "key8": "3nXjmkeD2pjKVmodBSN6LCtGrm7SfuQ63THboAjtFFRkdJcGa7oP4bVD5xd66cskRZa8P2T62PPmbKv53s6C1iCY",
  "key9": "4u4ZiNAmz5hMezkHZEvEBoQVG6ZmLYFHG6mUYrqkdU2encHhHDB4GfxMaL6waBMsrW5y8M81LMono3XpepuHmsn1",
  "key10": "21TSakL98kibJuR2dA3GFTLZ4AeV2tUp5dKpmx8XW3dehf8WLifYv4PkTKW4NP453PZWwqRrXhYLZvmn5nnrnkUf",
  "key11": "NcZ9oNwPyYs1Z7AY79u5KZbbLsbNHyvQRLgfsoF5zH2xX3Jv2eWzTPwBv29Uw4TYnyiQeg9hvNUfHonnHM5kyzc",
  "key12": "52tUhFtjCHgSRZy9EMKScySXpL64b8vodAm9sfvXGWpjn9eZ3sMXHWtuhtKprUK96q5hHiZvLvSTL4bAWBhtniEb",
  "key13": "3wSSPbE9GCmtAoXUzib9W76NP4KbxkhjMyEskoXQxXVtWG1D91qtNEL5REJjF7LnRk9EECgUMmbMkkJSHTbjCw21",
  "key14": "5iMgiE24KuShZy7qjBPuBXXhzuoVsJSUWdxzPDadbThpB8nNGxkgbf2DQ6yX1Yv8WrJqwXrE6JGwUW4uj6nGndfx",
  "key15": "44MY2DMo6A5r63y1gpKyippZUrpqe5R4GEwTK1FrDg57LSEL8ZE4DaLCwhZLZB3qB8QJpDdtXquywuedJvofGxda",
  "key16": "2DCr5TJ7XqQsNCzf1rRA3ARUMn7ourFCe3hsefpp57oJ3ZR83uSa4gvSrFJKBpv4TU8fLEMbEs7hzha6ajosBqiF",
  "key17": "8L62399wjcCqtyfZjvUGBZxYNRzvmkKkVYHZg9RmDuzU2TVMpXsk9aHFyAJmx2U9rvj4X7SXUAcu6YwWQcphPbT",
  "key18": "59WgMNqqybwbxuTiPCY9oUVdXj5YVdWTiTyspJMKVREfbmrBshzMFaSPzd4Jq11x13XdLnAV7gmnpQUtTcPdHXEm",
  "key19": "2GohxVHGXtRJNwVXNW11XakMHd1ufecBkYGWWeWxFcqJFevg3j8CBHyAKv6P7ybXBBcosDZJf81qHfF8gboD2mUB",
  "key20": "me7YPZAQ9E26wEFYtnjvhzrdkWd24Kk1rEgPCu8tiS9TzMMP2rP3ELf3dw46k4bRjiJLVj8QJV4kmMgv3WPGh55",
  "key21": "3XBkjpspvmYesGrcPSRGKc5gJT1EEmffZXPoVvcs7vpAMq4Tc43ZqFuxMAy7SVfnmUkTYg1WpMoJaJGef8SEYveP",
  "key22": "2iajxcEkmdgEwotyeYQfoZbfCxgBfKpz827K84MkRxfPzVzt7nnofR9uLMKFiXhpUEq7npHGV7VCPv8TKauURk9X",
  "key23": "2JwtawNe1CW2X4fTLqxXeovtNNmY4gjfSyTeHQ55sR9AWGeMTNvSEWzxCbV16X6BAAfmr1b6eXNHNjt2Piwj8Qzk",
  "key24": "5W33scyc4LzZmK1FWxsXJWnDVNhzsyZkV1sa1jnSUfLnzHHAirHWa2B4uyYvXssXXLKiVa3rPyk2YaTyyjob9Fod",
  "key25": "3C5WXzo2aRYkNBAHt9oQc8RhJ2KozkY9Qu9ekXTmx2B2jCsFqc1ank8771xnoF1iVb1YN6SQWV1euJ7A7XZZsHj5",
  "key26": "44vz4SLoPHK9jg6NoGLKSoDWFYtuKcsGiJadfPaxcGnjme6Nn5UoMkBNWJjGTVAagDEBc2vWa2k9bogudmwi7oLe",
  "key27": "593TV6GNHUcswCQjiBBMYspKLrE5ey2gKn6dBmFM2QG1MJLQVwbJ2B5r14PRxnxBLd5MVinbp3yXMMMg5ADq5TUE",
  "key28": "4mpZSxusiJ8Fz8Srmacw3TxTnUuyS1ZJeZCrs9GqfAGUgvneG566KZ723ikDwpr8z9VyetovxcyNZzWGfLJadc4d",
  "key29": "3SzDcqvG4mAoR5pR6GyTQoG9mTm9WXxXduWPiywDzV7TMiWJc552DparYrEzmbswmikQNKRuh9JGSY13yTYc9qcK",
  "key30": "4BEtogvrpv4vr7TZs4e3ZAAeMT2jSFFW8PreVzomGgBZHEYLDdkvnJF6m6rCG7uFb8RquegKD5bdiC7ZaYT9aUtw",
  "key31": "6LwALXygdSVV3eZb6JVAyhGMD3Df4BS33dMSAMAWV4ffuzMTzDdtevCPtzo8ToBcruMpExtfRaPdvsYAArzrNe1",
  "key32": "3CwEXnyGcHQpsahSHy9QKYtyrL2cbvhjzqPQapnacw15k9TUGK4yP4AL4x2mDAnzHduPa6FZqtSjCr7LspiRyVsu"
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
