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
    "4gW7YSCZ8qppBf23cD68NAW5Zkvm43XatpzZrsQ4qp1cLKTAzdCnhQvcXGKaajuceQYoHPMCs5ZWc86vNhWQoWws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S3FVUP9N1Ddok2MNTsMLyn7rcCtuzw7ubn34eEvEHEBo29W73PQHmLvdmVnCRtvxfkahnf6KH64BP8Q2GAy5TsH",
  "key1": "6GmTVpwR3bNNhWnqdADv7SQkGeVRbWKsM5WBYhVBsujuXnKGmVPzmuxCgV6oh41FQXiJboat75aQRVvBRZRvdgr",
  "key2": "2JWkfM8B6rkZ88GzTpxqGHLTQpqRoctfEWygeXpVe5CmkpckAh9BUhmvsopSPQjwYcPZ1T7fSSF6mn9syfzAqGfT",
  "key3": "49pKGzxS7SUu4svL1pEn9qsrNg3aoxWv2ETzZ2t6eCUyEe2snWeiuLgGU6a7tZPM2VNxx2u1jUdhXH2x9AmEf8C1",
  "key4": "2HQ5qvvdchymSVesYMxsAjiPsbu4AbYGQ3KczAPEvkDfRSpptuF4jsq8LChdyM4KiKHLjkHReFDNDKW5dvBVgPLa",
  "key5": "2c4otX71ifowrgd31BNqfe2zCyZXHnCkXKrGn8JUDGvTov4kDG2V5ZeG4cQkM3SpTCsKwG3SFe2UbMWK5iZHVuJJ",
  "key6": "49tg54YZwRHvU7FES4V9vGy6KEEiZg6MxPV4D7JaLMQnSGHAA3wtUiQQ7Hkh14DKH1mFZkdXE2HKRtTojKLTHRPw",
  "key7": "3qnt4vRoQogUD8pokJsz6qcf1jb1FsLiBQKut8cKAVdV4etiyvhtmenMw3gJXFAVMGYSdpj9fEMKHFDaGLaXKoBq",
  "key8": "QUyZr35cvWshn8kb4HWsHsBTRBkkCxKwexsT3LeCPbfxzJYqUDL4c4VbZEhfapaFbcWUR98UcGePN5sVUqtn5hZ",
  "key9": "5rw7vQtC7oFm8kzMjdH6ToTtYdaRXfDfq7HH7bYVK3Cmc1ZxSLvApsTYsXz3b89aeptvUNDXy9bthaYz3CKAxLx2",
  "key10": "3KeWKWsDRnrj4f6qYvQCygroYatKKGDNf3Z9qQbdkU4SoVtDJ36n1RPeGp6d3ci3c7SPjg9uoBg7M4NVNN6EKWDR",
  "key11": "34GPsSVy11wRJMtk9eRAZzrXDnZiUA4Aoo25TxjJ7KguqRTm6B3DTtN764EVe531939dcUGpHcK471568SoWSDxk",
  "key12": "2XJPX3277Log5ZzNRN44nNRKpkpStMMZoQxBWtgJmvxD5RsTfmrKDo72SuL1z6xptp1Vnq5xmEqftZ38kiCWbKw9",
  "key13": "37kxNHGbgUqxC79pS7kGPLPcJk3kGWPZxEKKxmevoA29LyHr4p9jwapRFvUxZYFMxwjCi6hZMbTS8mSvNSbyuYwU",
  "key14": "28emVD3JhnYXBkkGR5FegEMEyaGttgGXyZcV8UPpCWTmULdctXjHt7DvWCYB14DYaewwgywpnmDMpbqrAQgh59sR",
  "key15": "njNnCH5sgmnNmVAJEXYfNFd51jYnS86p77sRoRdd84EvNb69bXUwxSNFYMCB3CydtYGCTywiSuZqJzh6LQgEueF",
  "key16": "3iGxpATeQoWYrKaiia6RjUWmciiAcbjSePjNMEHXsnPnKAQG6243pgtmCokUHaKsjXjc3ZnsyPeKvkMSacw9d5ag",
  "key17": "4R8BMG6XGGFLMb5L9unMkB9iYCZBzWnC9NnpTmkQQcsEBn8d7ijRwjHYRbB2sB4mYjciEiK7A3AgNUbjNNqwSijs",
  "key18": "3aSyEfQfCGjJRRy5p6ed5RZhJwNdpwLv6K9eD4MSW6jtLAa4giWdM6r3ATsmA5zfWM4sh79LMVRyEx85o21EeN42",
  "key19": "X1RoJThjAGD6c9xbUBhTW74RcLRkyhDJ6sUxUvvnGWbJA8s6s4LCqM27QRVXar3yQZbmcgqRNCV8PLidAYDDwuP",
  "key20": "21rhbmZ8kugtFUK66DstmodeaxGkAxkWQFaVuvKYwBevh8E63TarXHdZRrQkshoKqkVGk28AV1TGCX6YbiWbtwAB",
  "key21": "2NYREjBQz6uRcxHZU5LTdJtdepF3uWkPAfnF1VKc3DkWzbXMWfgk8CFFeS32PUgXPtoqp56kbFiRaWhPXDT2wvK4",
  "key22": "3bduy77i7miP3VTEu2dhdsr5p7arvRNuYT3w9F9Vh1MNaeqehEwjhNFjx8Z4LuoXxgL8mLDoG9Xdi4pLwzuJwQVM",
  "key23": "5q1YZRFhN3j9sfWUcz1GFW18pyV8Wc5phXNVTaxqPexnRewDSyW7KpJqGsT5rPzZEvpQ6aTMDQrhJkVcqGZz5Stq",
  "key24": "CvusZaxwyPgK36Jrdhq144w5cU7wq6yXxfWpn2ec5R8d6UiM5YDeuueanwSa3YuucqWRU7aMjyKFPcDCHC6V7W4",
  "key25": "TqfFqGMjH4FPm1EX7ogSLLib3uCFf2M735hr3w1rzs6mtZKYMEhEFrJWgZVCDecxgpop2xgmJ5g54V9b9FhjDXH",
  "key26": "4rhqJpXq1XPqmhLTXV1X3fPikQ8gquSrwXENCJjn4io9DriL72jayaC449mPYprewwnq8stwqFeNypM3zA3ZVcsU",
  "key27": "br4a8uRo7QB1sBZJKqL2J42SCmdAkvPSuagsAAp5amUnuD6E3ymSynxpkLuLRQJ6KkYqBvXutWFxYK62oiKUpGf",
  "key28": "53G7qAS4BY3TzL7VTzCbcMbMPd79svAYYrYMsFfojAbPSdwfNc5xBcjitRGuK2e79RdMBcnKpRrJEUcnHAm7qBSQ",
  "key29": "4dDriDA8xp6indnvzQhdAPwNYPUp15BdKn5aPbHhoVH2uHEdp6kopJMJLDmW5Fc9LsvHsj3QCZKsoJf7EjqCZXDo",
  "key30": "4oR6ZdjK5mBKmaC17PVrYtdj9bRpAUUSqPGzSxng1mHVcRbvfndNgvceEpVBtwi9ssYqGNX1CrBuT5w7JU35Fvzq"
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
