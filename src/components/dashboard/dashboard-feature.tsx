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
    "5Gv3x36uT5W1b4TzDNqF7P6eoTGmrSLc8NQz8psp7HboWwRGzYiGr4bV9tWqEy41enHTDUJwArhhbbbLbBbCcxgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fFtPjmh84FEgqEWgC4qzZNNr9Lbiqfx4ofCZKFBcSY3xhsR2eN915Q5dWRsFS1CSA4xgT3aZKQsAJEipnb6VtYQ",
  "key1": "5tZN5NkVdVPTueGrcvFuipReYpnVVvdAXmH6HHV7HYApacRJyegQDcYpbbPDVzBcvmTvRkjU4xUSoijJRBDzTWRp",
  "key2": "3EvHXPz8YQ7qgt7aFGRQFG2mEW76f1LWrwCavQsH2qMU8cWFXCQJJCwahs34AXdYoNfmACwNZLiS3jzk8zySLEjf",
  "key3": "2DXGdb4TSCbKwNeRficRnjeb7LdwhyTU1cyV85XUf5o84tpvEzHdU1vMuLdSmCtouKVHFx6e3CoHjEA1ZKmwMVsY",
  "key4": "5rbpasxARKM8bTX6N48xkY2QB3wmi9FpHisSVPgmu1JhWTNhb6eDAygRAwtK1dHPjAr2Ldq4XoVRxMyY4Fchzj7R",
  "key5": "2havLTcWGbuPcVcCjM4bYNmDmvjhVhwevpziX5dqrCJJJfcsFYFK1gdgqxQsSxF9pLKrNEY5FXuMJAGAdmUnQhKt",
  "key6": "4xiitbu8no4SqnJ5tuVzQ2eSWTiNzz2maY2uaH8dx7QTrWXVhdnv2CJa7H2ToyfU6ZLQ2Pn3V1RmCz2vqQzZQ7TC",
  "key7": "4nG7tU5sK53DqGP49HN5ivVqnWyCEXpCDFyRTT4u1KetQR2MuRDP6oDGz1zBB4PAnZE2t7bwDaooByTaEZgFBT3K",
  "key8": "3uDdXeTSUXyMXXwTbG7Sn3j641zYEUp7VDwd1Dgt9NSAvc87TgATE8Sweyu7he8ZZwqjG8cH5EPNf79LCRNBRNPu",
  "key9": "gqgMnghP5EqukxLStkF3xyiNgqtv1yCKeGTuzNhj4bjVcaWQxkB19hSa5Tsz48U5LCCUpDo7A5RBQX4tr3gnwZZ",
  "key10": "3cSFcevSmEYZh2weecXPYjgj9NgQxrpGV96t5oDUxyUeACARquungH4F9x8NmMwgiqnuMzswLb5JxkycpbdmNvtj",
  "key11": "39sUYjNuqLQFAcAZRFk59MtKpkZb7E4EeuxtDZyBB9oChLyW8XqZva4BXmLVaDG6BQKjJjtCCWz4WurVnTCHJ7Lm",
  "key12": "3zCatpDSZPQsxNKPR7bHodfK96ycKLznUqhoB2deXUcmw6s6vF2GQgyNfmHJPwdsyJJqLhuDfNvTi1YTMuas5vEL",
  "key13": "2QNkPbW8FH9pHdZRDXm8ZDykSfE2b9PLyLUR2aUFmbVpK9sJVq5vhKqEg2Ln5aRrY3wccCzzxF8Jbopr2mfva8fX",
  "key14": "4iaSjCjQd6DfgQLFLyTHbT2MeL8mejCBwRhKeKtgka24tM8FmuAm3vK3uRLnSJTRbyXw4MK7Fvsq2AKKJBnbAYKg",
  "key15": "5TboxhtK3Vur8ctp2K8d3ZJVbWBqQZHmsfa8v7tKdGEjmx5ZiSynSL8e4pxHRWAjbxnGjLamxqw5Zkk9pQ5AxJQF",
  "key16": "cG8qo9zokGuHZm8xDN4dxa6k7BY5yaFDeXVwgtz3stNuTTdoJX1anivNH7gbX5E8YVLkeGrMoVBFBFZTqeN46ZP",
  "key17": "4CbwMNzmmEhZHBJtYsUwNBUZ7EDXsgXDnKa95ByVXtzBtqs5wiCXLRSy7cdhFXKtngKtYv2UgZbNVMtGUvFUSsRR",
  "key18": "j4mnQvDJWExVkR3rhoLvrRxbSqpLCKLvAeHvRBoStTvEw6C5JSgcZztaM6Piv1AtWutZpMH8g3VuNNPvSrwU6h3",
  "key19": "4jx3ycY7xG1kAKgRRcxg6x9nrBBynJAZoFx7Gu5EGvJmetzmzNqy1ENbzgEMaPSu4EpqjkUQ6u5TLF5gwYy5NnX1",
  "key20": "2eWAEUYfjw3wsYY4v1AeDD5zsZjzRMfNYXYx7y9BYeafkBf129KYfJdgbuaAgpNieFhZ5nz2fCQMzzscBRiWU4yo",
  "key21": "3zfhoq7WqWzZAJ1Aw9gCyhKmHJ7rFBMFrtjQDRsyjutKAwvFqJMoMJQs2qh9aVeqqziKvMPX9oKmbP87Zf3ubmMZ",
  "key22": "46TUjHjrizU7yABmcSYw5HmAYhSNLuHCNqqkX9t8p14ntgiukmD82cir3vKS7fKiSuvzvKZUkdjXvmTjpCKQWoTa",
  "key23": "5j39QutXaq2t6SD2Kngp3WRzCZbqjRsrqxLRjkp9sLBpzmyx8btAAzzruD8NXsc7gywEtcXw5qeTsnWQER5tzZv8",
  "key24": "3JvQKmwJ5Nzoe2a2rSLvt1qSR4r9QPbhM7hhNNkdBEr5he56zuPkquDB99BQKmWJ7QWJ7YeNySraNcS6q91BFKcf"
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
