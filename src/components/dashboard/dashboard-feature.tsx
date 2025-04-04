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
    "2Uyw5qG5pnyyXGsNDsi5Wv9vJgmr2NRtNcR3EnttDkWYWZDJ5dxTN6imeGfhgV3bt3YwJ6FEnD8BeFxsv4QjWBKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcHJRhFvwGHL19EeW11Wjz7gLJJJkry7iTaks5PdmGpYpbkzjZNx7bh2Ae67XDuSJkYN3xnWb94xk6rSbHEruth",
  "key1": "3yiwnHGZb6TeVusfdd5JWzdWnaEdutfKddZQLQDo7R2CgkXQazQM8xmVQL75ZoBJdj8Ya8Eptm7wgLV1g3JXq8ew",
  "key2": "4QY8UJj5JEmGpWHU6HYkiUDZZ4JJqrfxfjkXAR2EJA8aBpLWVUvoQRnPAj8exD9LqN7wHXweAEiTGm5hkK4nK164",
  "key3": "44Zu2mNcn75ozyCSJagNK3HSWca3Mf3b3sBkdp6rF51KJ7NWori3FQ6YqzHTr2XRESr2inkrbfby97hijiV4YE4X",
  "key4": "5XhzBP4kDEKaBeYCFzUrW1abeKApcaMTeFgRanfJ2wfrjk9mtwS7T6ioypz6sDaUtgsjsZoH4KSsPGYkHAEGawxS",
  "key5": "3LD5fLpwqjTLLFKzqQ19v4xFBaQebZW5YZXQzvX7P9Y73V4VVHeWpCoExwYU8UooaPRwfWzLCYu5c6ALARvcwt8T",
  "key6": "4bkryKzCuZwLSBb6D3igJFZXcJpo2fCjFZVrHvQgDSHyR1uJ3kcPykvKoRUMrvEgLcRijAjeW6PbatgSugJkTsGj",
  "key7": "3oxU3CtQkNKgJCCgEHX5uhgi9jJJMSAdCT6rQaH7VjEb9e6BC63z8VWoaG1A3TYrb1We5RsEhpX5VgnsSdznzU8F",
  "key8": "fBGG2jGVTznDSuhRCwa5wgPo6uRQBkL7wPGoUQBg6VKUmEJESidVKFVtTS72PEBYkLTwRZ9uZYP543uK6v16Fp6",
  "key9": "48pgDXDkSPCWUS6xpU1Bp4jrsjWDES4fzHg1ygYK34pSyWNPtjxYqqCBTvkAMgfMaqLYPV8sR1j1X5FcyeyVZXq9",
  "key10": "3A2nG2VK6gq2ccvp3Dwi2iG9aQXmRxHXFGAdSCEHAffbRi3QD1oFnDTGEvfpVnKBGLbV2wpFbXXKdGr4KKU8VSyU",
  "key11": "64E17mBKxEp1kS8T8oSNXNwmTubZkVusGaWX3bjucEr9t9GBivdabJmnaHuBkbiNRVnbGxRyvkM2PQaoJiqQ9VA1",
  "key12": "3Qg7ggDM3bnqAkdYBkT7U5fsSCSjXrvJzMJrARjj1EUxCq8ZDeauqVZG4oniMfBQXAVKoww4Pax22aHBDN1u5pUa",
  "key13": "662QdT1Ti94BqzNBeQQMDCnbxhee4bHijSbNFakwBn8UNRTazEBV6x7SmuKPbYqnMm1PsKPTfpeKNC9bdKWx43Ne",
  "key14": "59zrFHKqnhzKTS2jCPm4affKNEf4L8a8wHv1B2LzNNdktx8dCBZaYoZbj4gVfUmRRWHtvzhWfYWqQ25eigyVqfAs",
  "key15": "n6ttDDUXduEbHf9BbuCjKVQjJFsmqCWjTLBxbBMqrvBZyRx2UP514p2CM5SHxQjEVsfvtC6UuKRdYigSZHswXjS",
  "key16": "3kh1t8WUE91aYMEnRdxLicx58zAPFnMt7CfykWHWnYxdQVgzzdME7Jgr4EmXkmF8UTGMnggPvThhsabMLbpX5TsW",
  "key17": "4QN68t8AWdfVsJYRcBxXSCJDSQNTu6exX3eJxWKJj3k35YZvuM64A2ucmzvsB4CeX1AFiHwdAd3DVWzRywQtdTHA",
  "key18": "5Aq5qZgm8ANfbRx8u5gwbpbt9CD7JuTt2Gb7bRsdtwzzZqVv6dfqCJVcHqs4dtZFCTRpR5tqcdZMuvJoPGgBf814",
  "key19": "55f7rprHrpapdEyRc7hTyg5hvRwPBiwthJS8LshsmrS2nsmdW3FFa8YgdD9fKuQnWxfqdbqPcTJ1mzqvsfrTdVpS",
  "key20": "2Lr6wXYMdKagnJhGXKiFCdNvzgoJhV8tLazvvqDbgmd1XaVBV2TuXGKNSQAwirkSbaXV2wASqmmAjJBWPGwgSe87",
  "key21": "2DGhtngi15fLRj8sbf82pBE8uGmKeN5AkZvSMzgJK722kVfVc7upFue2UvrQKcuQ5w8UTctYTwpgAEgFWFL6BrZA",
  "key22": "49FLxrYozJDgbegtftavvJ1tUyzdwZjfdYYSUwMqxgibcHBVtckct3E8c4UjvMj2GLR8asSNhUQ5rJ2M9B4ksHz",
  "key23": "4nwefarutrRS1KfBq5qUs4mVV5N9F5BcPv5HkoMrPAbg84cCycxfCX56dTaH6jhPpkko7q7vRwYKkYDSBA2bAxVU",
  "key24": "5PqCFtZrJqLEhYqKw2xvUDXtye2oGYLfG8tUrwotz6xnwzKD24Aw3jPm29AX7ADNEbZo6T6AnBzR8E2z5wwjYqX8"
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
