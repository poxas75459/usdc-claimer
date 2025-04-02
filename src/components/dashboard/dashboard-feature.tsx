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
    "54zmhVidqpLWqfQbW7tzntufU4HRmvrxU61K8aEwjbjSmZwhV2SfHNjKvna8cdpAa2a7c2nMjcL7uja66iaB4j2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTremU5fvb25JV44VzL7XehykXdySQ7z8GeHyWC3WfAe6azZ2hi1viKWw4KmGv2mUCBHtxcxsqnNTWWYruDK4Cw",
  "key1": "2nUYrQZqkHhMQGS4Wy8C8xwjR7bLgGEQDYxs71GwA7ZJG8dodZZf4GNvReF1VC1uf6f4YpKhXoHSGzSefvKFCuJk",
  "key2": "5ScEbjPPgAzrN7G5NLnAV8BDSMs7aMCU1ucAKvpYgnPot8v98cbniyyseQ4ggBQBU2dmET3JXYvkjMvXiBXJBJPp",
  "key3": "uxbavCjJ2zjqHtTgGrryxhCZxwETTr7zADuCz5iU7DDGTc519SNy8ygAvG7rHu6PmAbjpDGdoGooXHQSinNMhHV",
  "key4": "58aP2YUPuE41ttgKkGcFBAMYkSBWiJ7y4jvMTzXikB72LJmXbBRm7fpkVp2x8RYWa9WDbY3eBXmo6VWvB5rRMYfj",
  "key5": "5UbXRiBZ636EiGvYVCdNHPgUtYCDLPJGpsFZjj3DrPo4svyYCxJQrF4eLR4Xi7VLH6X8jZWCsyDJnks6og13rVBN",
  "key6": "F7CWh8vwHJuF5VB4FBnqy3baQbimLhpajmjE2DzSy1YDEjcthKfLuJGyGbN95B5aY5SjXDAg3dWQCgu7WCHKSBm",
  "key7": "2MRY7sJ6QmLzU2xmy3fcob7tCeKbH7oLczX2Ztx2nKVvJdB7xZ7UxosRVxnhezSFQ6w8RNtsFadYwrWNpy1Z3Qez",
  "key8": "5UB6MM2Q85bAi2KK5e99JXzeRff2xQ19d8rpuZzvnG4j3pd4xN4mWdcUWseCio1snc6uftjPavyrUQhHYVvngoR6",
  "key9": "5SsU5ynKamr8QLczQcetE1QBrhQDD9pW7ums4mY3XwLXxqa9DyHQTP96297RKyD1ReQ7ELmMi8N3E5uRu1t9BFdx",
  "key10": "5FWu1328YY3exDjcZSbWgaE1DsUha18qLDkHKw2S9SGzC1ZppHFss6adRUHu6evoxVRSv9BjH8FK5YrmuGm4waf1",
  "key11": "2w8zQMpY8bRPgvnrc2FqcsVxnEeT1oXUG7SApF8fceSmXbRZ5FoXnChPesahuFueNQ7j2naL6F4EiTUGnTVXZGQ1",
  "key12": "5xwiaaXMg6j6tPsNxfmNNwfbT9a4Xrs64vzDk6uKoYodN3HgPnjSz21s5oR2vokDSy5TkWBrifSKcq3sfgvaQwyS",
  "key13": "7x69gXDsdzWhbWTtBprV1xxBJGdQCkFSEJpsEsioiEFTPMBHeE9Vk5nGWpE547UpsSbjUmwUxoJdwC1mJXgbPBS",
  "key14": "8dPGEGsM5twAvPjK1zCmECok5K8oQACtYoospHebGugFi8fM5o2oj7TV41BZMUpAfRapKYC3TMH7NanYmBTuhkS",
  "key15": "96dMmQ6bS6DrTmZznsFXEEmPhK62XX2iJKGgEVLUU32H8sBi8EYsV2s6ihNGgXcdEUmXz5JBCxGc4UnGQix1pat",
  "key16": "2eTbWVYvXw3qjKa1oLHzicuMApktCzj7GYmdjk4pA3L4RYFeNxwxSpp4gaq1yubU3phDG5NwKpNAefqk2VURNFo7",
  "key17": "4dkjfijBUqsUSVbWiKx5VDjSecamLRjdVxjUPbAKB7J9uTxLGctW3umV2mfARUEaKJaP6g7P5oJof23Tc8ZxFxyM",
  "key18": "5eNEcy2HB8S5N621Hz91JsoeGnsAfinBj6zBbspTsHmjD4ycJNp8DCtjKN72DmBKhDKT9mXfebQmLAMVsDgsyMTm",
  "key19": "4oQx4acypJyg82se1NYHasCjYj6xysMMoAPRHpcCq5v3cmHYy23qnAgGaGYvG1GoKHTjJYk6yM83htuvFU2ureY1",
  "key20": "5Bw4XGdcFPXAzaCiRykvkuz8dCQZFNDJxknUw8KL7xWF2w93Nm4QuH3yxTHiNcaJZgZgcBL5U9kbSgMrmFEgCzvB",
  "key21": "DF6Q3nQefYzA2z1hmJAVTsAHqLbeLsaCKsthedcbS4hfkVZb6GPf29ftLy2Wt99ZTiiowCHvWFd21v1UGQcrDYi",
  "key22": "5CRVjMQwvjaTHg2wHTNhVDuefX92B7QgJq6cMs97jsdMQKBwkNUiKVWv2M6sBqbzPxgLiF68d1QSf7xPSGk3pv4W",
  "key23": "2bB5sfTqy5NyDX55JSMYvHfxu1C7edPYHyRuDcyMJf6oVNwtVPqMZEYXXWNXRbYojyBJZQJsTaWcMJLDNppVeZya",
  "key24": "3XGLLmuRwpvvbqh8vZM4FRsbP2vMoxxJj9dAm1F3raNUxgo1iEJaE1HgHrRM8BYHbc8oMsKGU3osd9f4DdqsXjeP",
  "key25": "2EsiNhyDLYqY4VGVP588B9mFPmfVgqr8wvBAA5rddEWuS8HADzEdjEVuC7VPPPL6bYsF3CmLorexLxxxqjxDHKd9",
  "key26": "4b1HKiyrHwNHf2cR75z6vR5h3CMyqmkwgnL4XvATtL1nL2Je9kxp7vb2rTrbb3ae91uqdQkP5161eP5bA1JMwX97",
  "key27": "3hQ2WApfWishLNArD69r5MbvtFNb4M2jPoaSQMU2GVse9s7WabqFwiJfSpXysMJjKP4vSUZTq8VWAQCmM1nPGPQr",
  "key28": "2Q8wm8nidTE8ZnRndTfn4AP9wHFx59UFFqFBkjdJnTKwnC3vkYqryW1ZwCeKuDZan9FYuYeWyBiddzV7V2Zrw2ZB",
  "key29": "4qazZ4yt7NEjKhgVgJM7zc9CDosAKtYjrW5PYvhcnQgGEiapQ5nxN7ZMYBacV3GVBkFxP54VyZP5UnrNWBRt71N7"
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
