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
    "2pm78P9831LRJHMg9pfsmrzrQiDGZyed5Nm5v3zwzHjd4phUxeXQp9XBPtz2q4VJiBnvQ2bKHNuPeKw5GbLANfbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTVtKFkXQHxeH3wFtDvtikE6Ycih8VvhYZsqt7f43t7YmUkRYqKgzYfFcocYEL75HXhhsiMH8qA2g7QkotMoxps",
  "key1": "2BnQ31uERSanHDXgPMSE2BrSqa4aGmbKn3HwDFt4CfrPVzrVX654BVsw3yBLSw7kb9HQQ4XmEpcZbcKjpmxrfnuA",
  "key2": "3b84mXNX9Zm1URgrVxxvN6dcqv6rEfy4MZRPK5KwvdaWRyZThexwFb18MqEVzoqAjDrY9vDtPwrUrdP5HV2PYaih",
  "key3": "2mGZpQgP6HT4TtsDJd8XFhSViUawHmASdtLHtL6ApTsNgBuc6nQ8eb7ZzHyPe3SQ9TUFhyXanG4Mri6d93fDoHip",
  "key4": "3M1Qv46haW7mDSQGMwpiD5ketyM9yEKHnCaj6K3t9vo8F1qqwFjcm2uSebQ75YSamiRpPcvT7uqryaQbmNgACHZ5",
  "key5": "5Td5D45gsoLmR9BAxQbW8ZfWhZKZCzxfSh77WsAkDpNCfBD1TmRmWjrdtfddbnaV2av5G11s5WzCcyWYySFDciC9",
  "key6": "2omvFYrmCLsEWtQqzBh5p7ir6GX351XvF728UYYrnKAabD8W5mYQSTfDu2FjF7Fxm9Gfhitz4bTvefznAcyQ3zyA",
  "key7": "274jMZzyaDwUL3rFaHFtw9dbEVCZHak8iBzJi4n8QxpFamSCvoRouFy4m2c7s92JfXqTmLg9KPEK6xh3uXfB2nzN",
  "key8": "3MYgiezm1xQPo4ZtckAoxWui5iEAgbmzVU1RpM2gVTK36kJXqD9GxUncGKE4Dbg6hA7t6TVCR5RUyNNQnY1gdag3",
  "key9": "CkhFFqiwLKhW4GobH3P35hG5bvmEMAWvCUZqBNDn97gvtd1XMK3uBjuwD6CPUAp2rA4Kjs15dQZ6ZHRsC2hDo6A",
  "key10": "61Dw21WX9PkfmxagWoQVSonB8oaiKzP34LMD3iPJvmAhxEkevGtiEa2HrnMohNmBaEbcjPAE22DbripubtY1F3Mv",
  "key11": "3bMe1XaUUMvgbTZ8KmbMtswudwWQQu6KNR8WDsUoNE3EcyFiVfVTGAbTK5LXtguEeGpwpPgDnADPRJgNg8vEadHm",
  "key12": "3THaDYeP59C9fc5urrJfQXsdCNUoUo2qaegk87Uk6qw2fU71g9z7tXZWyjPABsbHxD21aV1sxWrAVfxByGxXKELa",
  "key13": "5GYUgZhVG47dXnQWTn3BH7pqhf1UgSrQgEHZpe1XA6nc8PztrQciaM8NUwpQ4WbmGPv1aWXLhukdSMG9SwuYyxfS",
  "key14": "QCHDQj8FWtwcVJhx7Va1kirZqsKSbewUBta8jhkR1RpaZhpfroQGzctQaAgoZDNEQmhTdTyex6uNtKwqC6Z4uwF",
  "key15": "4mNeDtbxZhbwbFPrY5LsHXeXS4FExQpvrjiP9VeXJWKzS7gBhbsgyAEGR9f2S3MJ7u5ggDWCMYnKmKExarobjSdh",
  "key16": "5BY2eaXARDp6CsTceX9zzGBsD2BNfRyCZwModhTYqRihgPi8tGiypraysa25vt6vu8ufEAancMnXRSbTtiTbjvNy",
  "key17": "48UDUb3mChvCJbUc6A6aSAUU3WovD3eUXe9gFL7Qsa1Z76aRH3ZXRa5bxY9yWdB1QyLsYVkn62yvLo7ZyGkbLeXN",
  "key18": "4UmQiB5sKHMxEhz4J5ARsQ4xnatJHggHXTi1imoBh3ZxRTjoFCjpCMLPNx3kuUi8XSgXp6ZogBBpJ2gA4CrzAzmg",
  "key19": "eHmYLKPxopx1NfMPNi1dUYmXH1SrTdpJf7L82UwbTyQ3DaSynmMoKcEfdzvaC72URwqsV6xQQMK6GzZS8gAznfg",
  "key20": "B2Nu3xUuWp7qsBkhgVB17eBaWosY5gR5ZxpVHQVhYhrtL8MCpX4ePHubRZb1p5FBv8DPt33NsXd5RJKyKr4aVks",
  "key21": "3vnpw6mXvFSQ6uhfEuxKn5oP5mF8B6hTCooeHBusTyzsfKBPGz18bu7hWo6wHzJqEYVFpdaeVR6dTjmghBUyA2Ve",
  "key22": "KQWDrGdLRebWdDFhWUZSa3SThRr8XWF4MyRoYQGLtFbkgfgJ9iWuNEwGUCjhCWQoh3rdGRVer9ztY2a4k65QRVw",
  "key23": "5q63dCTs9KLN2KbMbcCCbf5TdKVJyY9cYR7m8rshwDsaoDh2Kn2cY6Ar4cnBGPPQjAL39FYVemdBnWX9kZ7F9LNA",
  "key24": "41ogPGojFpuck3wwndMyPqHSEGj5gpv9ma2i89oXqqqvSFUd58o6Q8hprzBqn6Jj9NaaiKqU7sXihXYkUZ1Mi7Fh",
  "key25": "4QzTzNGsZoEmuTUsbZn2vXLfjCQc2w8dvFwbENTP882iBJvV7nhFC3EU19K2ccjLnCBQpj5tRtEmiMbMBCqkEL2E",
  "key26": "3Sdo799v2Ua57jHSL7AYMXnU61s8zVHvAeTj2dxWysARXSM1ESVKev4T83XM149J2GkjKsDw28yj4qhfdJfziJJH",
  "key27": "cYDfsRrzHwUnjhgNTzCvA67E6ohP7rBF2mfvoYgaNBtBeTg5yh1YzZmbJmapJf99H4jidNj6jStLkhhF1MJrsRe",
  "key28": "3CY2HjDVsVVCWzaRxTanck5S6TDoqQXCvJXgg3rq8bNmqN2BxtqqnaW8NW7ph3HUBASdFGUGLuAKCwbRhU21famt",
  "key29": "5WAMKe1BgWS3yrAZnPvcHjjxey9wYB58e6zos8jfcemXjKaCgsP1hdqk828UsA7UxGthpQ4rK43QYgSPfRRZvBPn",
  "key30": "2Ny2SXth1Z3SU6qTVCXVC6gJPXL2pFTpB7bNRixrZdjtdPQv3cTahEG63V6e2vQLRhEEbqRQhMvpH21fYnuRj658",
  "key31": "5SZwKkEom7Gicy77gsSQphUGN7H1BZXxMuvCg6pBdgqWCbnvowfkBntVAhdUVcVpenyujZET1V9rzNVQGhFbFuSE",
  "key32": "24B7qQKMXgXf6uVxPr2VzQCvpP2vciR7wLEHshXbGsbjkKH8W4Pqygof9pa6DPUDGp5sDZK4VZg7UajSB9W3Aszd",
  "key33": "3TGbbSUN5LUFpVKCv5YtRcUK2UKX2WiYVmQJQKoB3iCan74SJjneibrxxannizppHxX6iatJ1cDGbtXYchcnCj14",
  "key34": "3H43cFSTJAZEehyYWL3MJTdDYaxWF21CcJsCy1EPVJ5DUoX1h9iESgmPVa3CRLBkQBuc8y6SRYvFxqBMMGvc1hMC",
  "key35": "3rUveef7bhNooBJrWSuMu3b7gFb1Q225tityRn7XbF8tDAvjqUgrfifAXQtSAeE2pxUoSiQXba43FWeEKpCZrPmH",
  "key36": "5e2ixjxXmoRgCWLTuz8t1ymQEVAvfii5yrkuLXGRp7hweRve2KQWZqFKbC4hCTBXs2Qf9VLvvrxiJJe6K8fKkQjJ"
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
