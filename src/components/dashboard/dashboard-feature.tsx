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
    "3L1MbCJM1Kge8WX2CUd7iqhcq35WhQPEiVvX6prsGpS8xF22CqAk3FvQkKRHjwQrDvTYAs533e8xwa2mrphv4wpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHcUdCL25Apzt5YNvSXNFF7Xef7qSWfMD7QqmSSSZtajDuSPsmkHxGNSqA3LET4gVshuXVnV7j8FnfGrJQ8tnV",
  "key1": "G3U6wvfPdEbMWu4yysfq6AywKnanXJDVLBQWk72vYafaoP9JdiXN1kGh4ZLseSPJmPRZpfJp6wkCMJ6fq68qUyv",
  "key2": "5U5xBFoCpU8xqbJpgxB829nCffjCM34HXB9iNYspyzZdEPscu2MueCaZvne1MjWUoAqCN5Gi4cKjoVBYqKn8jybh",
  "key3": "2motLa1TeWXkgsEov6kHNkJ99BGgoxWZK8FL7NnCJebaoijerfCsQpEUbsQwZTseyw48cAXRoj9T4cqNqyLVanTo",
  "key4": "2XoxKotBJTAeDafp6X8TRfL67i44CXRiwkqcaMgV3a5w3L8kgcjnvJPR42bR76MkvR1pUvU8ZRPz1nxsRR54223b",
  "key5": "4WGKBeDzcLdoamDJtt5wF6sVHD7McEzK25BMirJ7jjd8bzFaib2LqrjmscjwFf585FEKkWaS7AWC29uCwbk6BnJQ",
  "key6": "4kXAQCLRboR8wcr523i3YD8WscvLvhNG2hKywtHpkWuqQQkK8PJQGsWsCBuSMmQaQLfzkjkZyPHcgWUUwqM16MyS",
  "key7": "2Cf4hjZsftFvpG5UfLCuFZAtzFXuhw8TnB5hFJLoyEQxmdiEZYxekJ96KtDUCFxayq6WBXiUtFU6HtmpoEi1BMZw",
  "key8": "3DkXUrP7SaWNVigVMpHvWgs4BiQPFie85bX74UVifyiSqQX5dcSqxbtwoumsg7aKKc1ohcw7KVTMvv4SS1m18RgP",
  "key9": "44uCRNTY9sWpKK6MfZyJQRk2L52j7E7V2mJQB7jCMuWKrGey9mYCyTHoaVPYwLZSZ24buZkVEi2k8juD5K1raR6T",
  "key10": "3emkm78x96j1hGLhQ2qjqA7i2ELstdR25HUXZVQccRcDcxmJg5ragjePsS4kHSChr7woLY6cxnpUPkXk5MVfDP2A",
  "key11": "4ZQryL5aDJjxbzwSys7jChaGcKFTYP9pdNhvfWEb5fniBQdYKJRVGoks5snsCwY44eArFoRuxaJj8ThTu7YXxRtm",
  "key12": "2dmsH6Yfb19M2tS9WG8KKxRVNTBVpuwYD2msL1jp5wEUQs3JjvMepnsg3CHCkLSD78DG2ZhfYFQy4ZuE2EUBrWhL",
  "key13": "3now5cn2A5cdgZpQdQkDC6EtgpZgApApmN2CwEzNJHxmge7jAPWFmNhj5ZxUD8wsEW6FWL1SH6JaHTFbD5S1eUVx",
  "key14": "Y96d5j9S375q74sMHcV738t2b3oXtkaUfvUjKPa1uiKPrigv4jFd81vjSU3NCQFkB6a3QPfQsRdi3iLDU3GbXBB",
  "key15": "2tx7o9DJWcFnyUVtVMPNZsvH169p58dj9oYUZa172EYGbbanwS3gi2JpxxpeGN9DUYDT3Fs7i2bfwefA886Cfvz2",
  "key16": "PU5pcQVamt8AyuF9PpkVPWWS3qXaF1ddmVeqrE2MRRknPJnEdWmDNck1rJ9xFVdhd7aCeVtquXcFWNbLowLzo54",
  "key17": "337HYdR9Uc7EapYZGW3ijwegnz3icNQprkaw89z3Bo1WQGxHPrD8nWPknDoQ9Tiyk9XzHyvyHijXkR3TJ3Bs8YrS",
  "key18": "3wbCEfmYKwEugYRTf9juw3o92wNPuTriwL2jfJzNmhBWSSPh6HNtkabARfkumT96DoRGTWXEYUUpReRRHzht51hm",
  "key19": "42oQqHoAu5VU4zq1UuJACdRHNkusTbHiJf5ont64xFG1Q8m8sxpU7KxnRnz3JeowTpPUhStxhqEaijgc5s7Co12P",
  "key20": "3uuznbPYEuf1ncyFN1Tn6Hevc8p6CzPoncZ2faSCvcroogqkFKrdRTK7BhtWN3SdA59wcTgD4AWNeukkX83CgvDs",
  "key21": "42CDWzZeTEvjNuMLDaUZwUqftCWwjZEBL3bcmz9yADTCjzHPtmyPhyh3kC7fhmnBpp7L4rmNTpnNvuS8dfRUibxy",
  "key22": "qBpUDQ5XS6UBzMZg7sVE23sxWzH7XfiwuG52PPFxupiEXs7veU1MAVCbfyBrP562wByKpb8PDZmrZnbHdWTcf6J",
  "key23": "4BLZfdNkKNAqj4XzRcZc12zKRqnjQQA83eKisABPXuucLMmv9DvLB3TJ8YQkFsEfbfMFmJe9sEUUpMpo5N8HErka",
  "key24": "4fYpYBKU43NVNboPUrCJj7PdstoHdjbWHpseSx9NgwM8UjC6bGyWfAa7JERbvdFQ4DWacVjJBkG3oYi2YbcbeeqA",
  "key25": "3U3Jf2sK2w5SZBbnvo7GzGQrZDX2yFTCMCTUzkhyXV6KdEXXgZ6R4xj7Hyicf3TLXZk76JiaDQznT195NoCmCjhU",
  "key26": "3ELEx3ZfSLtTLJcVtmHauX8Jbeb2mXc5ZW1AZ3cDJ7cp9me1tgGAhMe1D4w7c3iwYdmYa2oFEFgQjM1BQuRFaVtx"
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
