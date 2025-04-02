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
    "26FxGd61SCXfidTQvmY4mKTkoXbMbSyMCmXmK2R8y3BWRdh3kTFviuXZFporSNynHckEeXD3p6pMGXPKjMwRCPDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nxfmakzkxt66Et49iSzBeNLw5hxoJvEKhNDP7B8AtYcGSxqRPkh3veiZMJcTxCaWdquRgmu2GW4vjD51pDCLPf2",
  "key1": "5yYPYew3Z2dBEEDoQKgiiruaY9dybVTF6oZLu4zeKhYhM2JQTFvaTUrVSmrDsncNgFddj7np5bxd6fnq5164mMHR",
  "key2": "3HmeQLmyEFSpA3FdDGAvd9jUWQmLUuSpcmNahNe87e2pm61vKhzwb7ETKPVmLZhrtWHvLcGzj4Yc7Kfkau8QVVsF",
  "key3": "4iHz5GxgRTR8rwZv4LhwYxx7nZvFLJd4SF6voedxi82Yr8NcahrsPgH2dkCckxUb6qMTdrZuzdauGUtSxd95QgQb",
  "key4": "zqmoFwD6UszgmCuy79ptyFzQX85rxRdMP32b2e1UX42tnV3saXuUvkvSAZdjXs1429mFSPwNpdeeQ5HTNVwLfj4",
  "key5": "ng4piNWjQZneSUkYEukF3ECZbcPQiqsXCUzSFWTZeC25CcGfrscgBtLbbkX7xmLneqwV5Y23Fw7NX9P19LvKZ9S",
  "key6": "2Zy5mUFVw3oYq6KsdbdSwTGLrs6YtEVsT6F3x4puXqiBTKmiouFxmKgWj2izVJKpVszeryuUWtbnx5sfVzVLc7Dp",
  "key7": "5H7KLQ7hUjQziuWJ5k77YSmTG56AN2AvsP9KZPJHfyz25fXZowkxMWcFdoKR8xayeEv7xznBGY6SDdbYpqSiGW1m",
  "key8": "24SbsaUK3tD5MeGFdbBEdMsgyyLQiBiXRRWaUyv9BcvYRJS5wUycmX8nmUuUm2DDT398Yio5oJ6KfiXd8vTGzpsA",
  "key9": "5iRKpA8GuCa3yqJJFnJgsSEzhBBow1SeF8UfgvdX2tjZMqr2miEPEo3ckYjpnBvBqPAzsUeyoet3aNTk3bMr44aR",
  "key10": "3XPYVzqbEfCYmaXtpfn76JgzsqggHV6aW91yGCq5RDiNTjbHTtxMd6HJsCejkpgUp29mU8d8F19dJgvLbpTQNgCH",
  "key11": "4U1HGHhKVcTv9QnPPRBi9286665hM9YThHgVmf4Q1ruMq9VvXnLhRgNYwCmzEHGyEvXNggLN4opSgYLceCJipi2W",
  "key12": "rpT5eMHUAuvJSkZrWSvvWnVbGH7daWSsbk9HWXw8NsJgVKKwMWBYUR3vYdKjoxT3DEBnm7JeWdvjS3ggiN57HV4",
  "key13": "2wJnpqKUpkwaUJ16cT3LFRVJqYNU7AqaxKvK9mDtKzT2dd6H6waeX1QX8iAsVaMfYhKFBtWkf9ie3GsrNrGMHtxm",
  "key14": "3JtXFAohUqU269bQtCstBxq8w87kaPfkMgwxCMrHQRvP3ydobzwUynRTk3KjpkhHQeHdE8a74W9Nfrwu43x8kKKb",
  "key15": "4DmjL54fcw5aGsq1PdKwg3FDzr1sUgXRnX6qK3NWahvDXXXhYFrT2JKmL2desHkEvYj316CJwXXYdVU6m6nCWwUG",
  "key16": "2ni7V1tXAwYCXRYg84CyDAVA2gQsaXKaDXMpZfC6ERBtAk3BubTwAooEciMYXYdooYmaPKv88o3gRevGqvi9EbkN",
  "key17": "ZeTHQJTDtfm1z5Zj5tYUJHP4BvfwrGH2krUfR9EMMmnjATiws4tAEidpvS3BAJ7AHir2VyqfyUuwMLripxpMLpr",
  "key18": "3vnPQppszBSJyzhturcVJ3xW97SSSgQvdJRAehRyxW8tpnwRSrrYqERwLPiCsyih23FZj2o6WhsErDHEWUSCL9LF",
  "key19": "5A4eyefbBFUbserbox2YoQ9vMtA6bmguA1AqR9cHXtHFENuV2GnMkXmmTd5RkZnV3ypViPabyJFdjoNoFgRrofRg",
  "key20": "4QbTfi6UfyCuEFSpZyfwWtHP5E1JWwhHUtheKQKNLF79er3AbqupRLFicCyFr6nEWVgTyYiLxAN5eGPxY4ZfUC7W",
  "key21": "8sCF8MmUJWudH96ejUPN8KrxzDpxWgNwqdCCqz3WzFdanpChBwATk2ehtNTqRcRLJJX9WoPuzjL11P2F2GHc6QV",
  "key22": "4FZwG6HbUmFdC8Eat4WgCTwRBg9Zjm9nwvH3yGBfTj67kz9jCafuiWPwKVaCR1Gppka71opd18QjFy6pMroaGnhv",
  "key23": "5rXBiKohxbYLxKJZyhaGNK3opytqE4Xi4pqYs3xgfCvhP3gaCe78X5fR5LBcg7qwKPyCaMtf2hV1jnJM7EvZcAhp",
  "key24": "4zFWc6FM3FLixtLFq3mu3LS9VqbfkjRvV19DhYfywGwk5p6cn46qBonV6mP4zV8RousriUMANb9Hu1xZNfZPG4jw",
  "key25": "5Hm8Rp5HmwxMotiquruWubpUTeHM14MvtZCjiQ2G9tzND8YBJDFwkwnnbKJsKsZ3sMTvZqsXZieFDtacRRj5c3HQ",
  "key26": "4Y5V1xjEEMg5mYakhQRJVCgLCCH186Yfyw4JBwJMuxJLXfgsQKnNjPB6656QmwwinAW62UEPkLHMDsEbVBRGUPZ8",
  "key27": "3ZKuvdGdE88G9nHwMq5wtzrb3Dwkq9p2yY2WVS7WdnYnwYx9whGEuD2u1CwnC4UVR7oaq12nybh2srKYToSo4yuP",
  "key28": "53MigBwvuSMvTEC8fR5tip67ECfaBnozfLA5o1SdUrnwycvUGKPiHumyNM3k9mpoHrDeH3qQdRQXW3pfKT3Kknbs"
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
