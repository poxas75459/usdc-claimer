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
    "3GWBrevNDe4GZxWJFKgYysreG3kUXR3DR8cLgxUTLnbMJfVoY26geUQT1PLWCsBDYs5VieYNnUi7PAAe3tBa3v9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRZqW881oLYfWsHz33LgQYc2yC3C1XWjA3NncX7w5G7653BtRbQ7kHoj2XYNwxFC49H5R6d2Exeh42b19D4xeZH",
  "key1": "65CzRmfrFG3gyWEPZoRycRjiRBsS9gjqnsxcxLGhoURbZYjxnrgssXiMGyYc3BUZJ9YXhhR6GWYX6UQMvJH3G29P",
  "key2": "xwj4kJNPrnGjeyzvTGwDebtMdVo8exTCKjTvB67KSFXNtsryWKRuV3CQFJrTkMmgNckGKLbVqULoxRHtSF6HpLR",
  "key3": "2vPWace6qzU3Wc7UayrzJMoYVvnEn16sdaZjKJge8Tp1mjKYdHVCqh1KdiZQNtMuPB2kWpeiei6Zfm8zTMx912oZ",
  "key4": "vcXiWsRj2FJN8VbsCMzEehF7oU22rT6XD6WqTovmjZtabaPgmY7p11oyuvxXAGsBpAfnpSL2AgSHqAabnX6F3uP",
  "key5": "5cXxE89JagXduk6nFWYQ4bpKGGic18Li42yZyvu7drzCeqc1oFsHWXFuV96dRe95EGsTfJXF63KNsKgE6fRbYmdt",
  "key6": "5PXEXArZUwQrcR7YaqnGPRRnqZEKkAzdBwjj3qY1ZK8UYdFzdVYkexdE8yRjymLuMqBLXtaRTDTxRCMgT86rH2zR",
  "key7": "4xcVv585sJyvmCxNsAjC81pgNvjmQa6bRq1kLv2Pg4NjpmGguvmrJUWHdTQYnibCvdKrCcmdnJ125bczDrpR6G47",
  "key8": "dSonS8BkejpzgydE1iPapQaGZYkRSpgUmdGBpJdBmTchiZEgFXSB7GuVto1DF3BtJGTpVgkw2pBSaMjXBg1YeJ6",
  "key9": "ATfiCRrhS8nfz1kmKpVDheS8HgN4a8sCGX3tvZXsmmC8Jd8Va69uo2AhsQW5ZfbHocDuNDD8sQ5Hg1a6dibszvv",
  "key10": "5s8HoYG7KQFwdhMjFabmx3C6ViKqpHYQ8N4kjDHwPVKwogGZjx9n2dzqyB9dyUj7mkYcWMGbn56k4BeYCoV1G45N",
  "key11": "FKWQDbTs4GkS2Pn6ZKLrRFMJqfvWQhoEXAz1hnvr5AWDJYh3md8Vh13j4U2F3ciARmZX1XrYMHFx8gH5XXb4ZBG",
  "key12": "5bfgH71sbhujfiwpNe2hNtdZ3xG6s8M7Eaqq3wenmKA5ANF3j1amL9wXA8iBJDBxuXAhNDcbrbM5CDsNeHzbugU1",
  "key13": "2QHXpJa2AU7UxZoMrVReQesQ9eyAULH8wG4B2JZrmgiH477PJrQC84UGxrgjHwCqt7UHyrKKHjDjj2HwprJXSg92",
  "key14": "2VZTYiHdTFhggS2KkzGoqi4hVpskK485zUJ5Y6CyVyXaQ4vdZqtg1gMXVJunStsE7mkDo4YLo4YNJZiv8ckWF48M",
  "key15": "5RMTPER9MAQrNxQ2JKjUZ2Cg9QgX42HatjvGhWw5nkZq7mbz5NmskhfX5RRrYWstgdHfUgu1otnX6FKug2vguXcB",
  "key16": "2qrMd2YpNkjanz92JiizUjspGMEKS81V3cXLg1ZUyNQrSLRo5VFrqEapicwj8B1oTB3pMGtuRXZmyLP4XRcxSfaD",
  "key17": "xP9dZSrBv3xwKyejXpSpfNwxEUgGSb7Wywg2NjkwFBW28fc8hgBbMmRgJE3WJgUBdfgLodPi7DKPWVoVRsrJNWz",
  "key18": "5tjakMCU2wgAgaLN78NPm6NE9mE1wV5ruyh97PwXdfxudysarn8mq3HmZMeNm9mfosVjtAozkCksLLYsEtPsxv7k",
  "key19": "sC3kF1XzvUhKj54eJUDwDAcokQZN7VsyV5tUR2VkBmuEZcVgBidk5NQK6GbrUWXi5aA6JSPZLj1aKBwtgnWhJ2M",
  "key20": "3YddJR11BwyVpgkyFzFsc4Xbzm2m3kiNqM3N5SiQ5X7U1KKZP9x8EYNSUuhdPnmYZkkhzzDjGKUDhtaQ1Md6J99Y",
  "key21": "5uHMtg7u6mPpaDZzJRnJCSEkSJAJJYxNAv5UuyEPumL9V2XD2x4PJJLNqbz2zHhGKmvixDzK9mqWGqCt3GhzwwdS",
  "key22": "46w9sBdREMthtbAMXJigTq6xf6DkqrF2LYuWBSYovyMjyVYmGFxykjY6xeWn4bqyQXuiR6ukxRRkySzSUHwdWVsv",
  "key23": "G6AtZun1Zvu18vWbJarrv21LscdbraisvZF378fUCakdkRgKZSn5izGMeFfVTheSqEHwmLmkvAVbcxVSskiViS4",
  "key24": "xYaPKo1Q4D8CnftKuXwhF72WuVjqtpBbATqw7wqW9uewFFQ2a6kkz5tvHTop8SegxBdxmRxm3bv8jr4Mqww2ioZ",
  "key25": "2g6qvrffnMtkT3Ph219nt9kv8YnRVpeuE9V95sSDRLfG9629HdGx5hbhaaqATmVLFRPER5D8Qx5KUhBrM3z6Y84K",
  "key26": "4SBrkJdE95288mJ26iJABifzZqg5n5pWt1FcVwK1Hvr1dCQCiN7SZUzFgaKHhpPuGQW2k7FEMp9whHVhr5zvyh33",
  "key27": "2UjJtJC5y3VEpXiB8iVAFCBrUiQ7wCGySurz4q1sHTknsygFMDKCRxwUGSHUMpnU59syaAQsTZR42M6s88xWphYB",
  "key28": "5BCPNtx69ZbiVEQtMt2ikb5UiegDUkfcjdNT2gi3YvizK23hrXEHytDyQyVH6N5BpfX8JpaJXswfX4rhUnr8ZM6t",
  "key29": "5tczou1WVRwDsErSB7HhxTe4TP69TXH3XyhxvHLZ1dUQn2doytfoojxtriNhAue1xuuscLrHFegpHmmWDUGNcQ8F",
  "key30": "32bXgBMtDFNE5NjQzoouXYNEx3rtzLQ3fGUGgF8JXmK9mfbej3Gg1WDiZqcewG59kPgNFwFv6TKS99Cxpd6M7trY",
  "key31": "2VSPwmGeJQhdMwm1Rn2p5PdyC9cSppNGyFWDPATJrmfmWRsvwDzzbDZH4FXf6sSjJ8a4rFYvChkCXWnfPzN4ZVqe",
  "key32": "LWKcsC84Vk1qhmEM62dP4U72XcbML6sdA1CKipkPSS9yUd8TKRtxNoR4B4rfSRogFDVPv61PX5Dno4FfXecxSV4",
  "key33": "2yRZcHwa4iWjVw694BipjQMbD8tzGTAC5aHB8oFnUXKVixtXMC2xapBvhtSbqmVLEJUfEAgwcQyHFPxWj34KHb9B",
  "key34": "3CpgQRpJjgre8ycSnGXTkTnVEW9kEPNRMEE4Q87zTGxnT6R9nezXzmLkEkk7aeAq4HJsBU32tinXnrBuoYKNpR3",
  "key35": "4NHndB9HhXY1u3t28CYEYYxuMNXuxmgpWqPVbNUbNg7xFpz2skb7pSWScaVHj7gL2JqG3irBxkCCkrn1TgRc1HtP"
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
