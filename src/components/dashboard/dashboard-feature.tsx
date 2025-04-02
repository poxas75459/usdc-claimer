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
    "5EjVaVoFkGNf39sd3zdcy2BmssCTv3zvTpqrPdjo7XBcgnJgfjiqGyxyTtbNbviZvmarAkZ1Ad4Gg2GMnS5NBnSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtTkTFiwUgfymZpM9g9g2Vhb6awWh1de1TTa5yBLTnqqeWvNTMDXFCyF7eEDjPbRss4rQwnHeWuv7JYevxPFPi7",
  "key1": "5uSefrtyHmt1BxBLdaobfyQRDjzncqZJtuJ8fFFmTrfJhvgyWipUKG5NvycJGn7PEPBYuP5TJZaZ23koQ7xGeUNP",
  "key2": "4evnhdJHTwzgrpWNkZ2CgXGmfNVKit13acP4NP3tppg4zx5FfaxpVDWv9mQ5e3b7YGEm719wb9uHhjhkyq39Tjh3",
  "key3": "2cgBGsg8LbkrQW5nrntkQCciZYdWXosre7uWaEN9y5v99KXQoJYNZ1NEgCtur4jCMJcvReQgEKTPdkET4BL1vNiz",
  "key4": "eD7ezD3Vdoi5hg9ghNXNyCBuRxhEcoTCL7xSDf17WyitKmUoNaWrQTcW3vkVkavdbAmpyUYfQAZcJW1XuxMuERh",
  "key5": "2iDxtRAmrtMLq1dRS1qkzzab3Dp8mRZuHDYhy5wmRzyLuCi19e9RhaQCVXg7boaTiDiNjpnuzLxWn46hCtXBiuZ9",
  "key6": "425DAECiztatSYaor1spahCHMthXvjrzgPQCvhbuLMoV4ePCmVNaaeHAS3K6eJfavP5iCHAHb96xa8kxb6bL6NGx",
  "key7": "4zSQADuYM4onL2nosRg96NwjY5moKVxsS7xRC7jCHj3dBTGwzFKUi6BUG9H331pCQdLBShoATSbuGhvXWS3W7EwY",
  "key8": "2mx6y6KwgRZEQ2k9csVALcZpNXGsYu49VhZ1BxG1X3amKrMGJHWrV6rSS7uKFavksvEHQWm29bJJaPWD3pSvdejF",
  "key9": "4BBrTDJ3kPJw1yycdNuQ3iSU9sp9kUNsF9GMBXg2tVSszacAMdRUjjWC7T69vugJJhywCJPcvBkrs1APPxqNAYkm",
  "key10": "3usrypNEaCjSqZEuVWxUmKc7dyRv3jBuNN5jxE3ev6K66j7tZFMq8XK1dKkWGVscRYA1dRCAvW5CgpnQDBM5uEJy",
  "key11": "3fGzfiYdkzXDZzGkNe7i1rd7KdbtrWyHYqQxzcptk6ouyp6fFcrv8qtpNx1Sb3ZHx1B2d1DDt2KWqob1WnFBfNpB",
  "key12": "35tKmHqq7RToqZ6f8HWNNFFUtz6bm1HpjqbV3nbAGqxiX16kmtakFD564L9KSiComLcdFwpExF1P3RGQB1pFfNBZ",
  "key13": "3JRLcwW5Gky923578UwDZmeewMRTwd2z8LXRcx4FLWyrmsGrQvs3vvpwhdvwrqwzB5Z9pkEKrWofipHXpAta8TpU",
  "key14": "Xi5oQGBrp2U3ZTBE3RA3mJTbCq3pA4XT2ZHSR1W9Tz3DbRDJjqiR22Sgp8XkbMgVmkmgsHH17zvTtWPxnLFQwkt",
  "key15": "BEQjhcezQsjtPpgAay9rCCwKYe152gYjVM6UT1FtAUmceAhudXyAXey1VheE7hDkNSb9dVYUUSYMbccLNUPsKJB",
  "key16": "xovZxjewPh7yHQVf8gmQC2AHDvMqss8Cy3Rs9wba9nsKLRSrwU73NEvkhboQjXVnm66Dx8djnFL4GtWw2M4Y6Ep",
  "key17": "22PwdcHtPfu4hANobw8fYwBdM97sRpyTzWVoiSsgWbWxRQ5WL8eAwNkVP2EJx9HVGWRVzSBrgDsA8x4agZYHbEjF",
  "key18": "fkDgbS4duDGuHxPUoSwagbJkwSRm3BEbwY2zKXC93yUm4xiLfMWE7FzEwQQ1Rucy5VPowrngF9qZZgHnXZdwWbH",
  "key19": "2PcbEA4ZSXYw47JvRQQZSYYP2AbMRUprC3Fia6faYdkTCTTTUM1fkND8QtzsgWucB43wgtDYAcYGJkzK2JQcNeSn",
  "key20": "5mY8nhPUSRUqu3a8pyRkZwRxNu81wa4zMdQSsXTkFiay8K6vqvUkiUZw7S5aYyxAKySGZC2JPzz17GJBqpHvNZox",
  "key21": "2rn8CdkpG8qohZrLb8EVrcVYfkkQvqa1yLjACMnkELPWjXCWweY4UWLg7CAPHGqJqfZoYf5samTSbesr9VaPjhmZ",
  "key22": "3LKGoEFPsANrAXc1SejhdvTMjCW4zrJuhfTCw5TcqUD4FM3KA9J2xs72nBbiEitPiP3mE4rJPPDWvcwqHgvrsqPe",
  "key23": "3cdDSkCXcYobFpxBBgUe5oqsCtR77AzoTXW7fe1KBX9HSQ5h3itGKkCD8fZd4XwnJtQrfiC8HDy5H5q3YCy6vC5S",
  "key24": "sGtCHCwHWhRi3bWEeUcvSTmpDZBhoidgTysMqgH81zs79DD17M9BdqwrCKtqkiC6wBmwfd9gmfs6QVbxayrzY65",
  "key25": "5vpA7zKMyySU7Ct2w1R4UU3mKe8rhwLJDZFbiAVn5SNf1AKFtADNS9pDRZuH91ZrvV7h8BrKwZDmq25mioewd7L",
  "key26": "2fikSE3DdC1qRjBhkeESSaWA7HhJQR4wyTsYeJD5wox5otCsY9TNNfL1p8DACEt6bsniXcWbBE8NidvfUti5tnGy",
  "key27": "62EGGgaabUg1cD17yKY5AFJj8pNSxBGKakW7pdtsWeuDPGztHyjUfgZ2raFbFSjLDfSBkL3k2DKDntW6kSvcH8Ve"
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
