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
    "3Z79ujfhPkTyrPDqHyV798j9gCbResDnnLHS4uDPUnRxT6n1TUCcAdNnFhSz8gtwnk5GTfA6Lg4nLuu3ELKameHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFVjmmJpGZ5Zg6gB93VQzDCJSM9pN4YBp4RBQJkJe9xdEQCdeuSwCo9gEy1wApxwRRBofHCnFceSjEmfcpphnvn",
  "key1": "5ZAZmtab26MqESjzsAXBAteDJypPRyXEk2TvQGsDFjC6mvXGue9D5GSWbQmU2zuzaW2CU94j9Jwey7ZS3XkwG8qT",
  "key2": "3egzkwLQSCkhjeq5pUEyU4iTyVgWpC8yUDJ1r8nHrCrvQQp4h8fiGZyMgxmgF3vN6yqUavda6aLaXgJLetDiEKvz",
  "key3": "4CCxALssxkBRVpFUcsq4WVNDDqw9fusAyvwHz2MjEPv75po9TJgv7ZNggzSvPFNkvHLgDzRtQoWEDvVk8631VbQJ",
  "key4": "4gRu25su7eqEKMthPL9QS83gSkngbhg3XoTJLnuZ52T2o5rfCx1oZarusmUu1yk6PV2n57yQbg3CzQiFaCvc2Hfv",
  "key5": "JJ9cZ8ZL1HppiaeQcpwKsJdqkMmUd3afSerV3QryHcQ4HEHgGN2c9yCdxVbgSULsfv3gsvXrjbpFJKL6kRE3uXg",
  "key6": "2JCWv8sLZurCi68DUTzmLnzpR7qrBMqHmAPawTDQma8rnP9S4yy88pd3cjUu18AsMSRESnHUqKEJJsz7mgbcLesy",
  "key7": "5PEAYhLzMUhM613sPuHynVv8G2qUnH4oRjsowvDjBHqFpLndoJAZXNSUoMUaVM39zWAbmtE4agFHUm8KdfgFzAQa",
  "key8": "2R3PRcyr157XEV7cmHAwVcgpLquf63ajUJB78pVU4sEXSJwf5qeo5MSC8Qjrr2Drt4WzLsBAsu46QQJi11rioSbk",
  "key9": "2Vf4RySXiBjdPirrR6aiCPVMhPFDcDd2NXV2w4x7dn4B4K4wKhBVRruDcDW2txWxAg1pqp89rVxv6xMmaHPNmxzH",
  "key10": "5bjnGtzQfWjvh7nUwJdP95Nu7g54BVDyqQAJdYLKToQrxrbz6k5UbLPW3QP3yDtH1RQqyRsE9jBy3VCJVG4fytxH",
  "key11": "ZrLNPGuaKp9xyds4cjqBcYAMm7gxKbgb9qbQH2Sdp64BFrV7GawBhqB9SPy25T8sjN4GtZd1HErBdRe1tM9KEm9",
  "key12": "2pz2ji9ZHJrVHvPMmkRuJo4KzipUiNJ7LbZJnsjKdEzD4jSe9A3pFDkW96Ls4yeiKFqvSGUpJp2vfkY1oZXRbvAS",
  "key13": "5VgHXvNjVTMP8zhgmYrRi5VgNoA3fBFwfXUfGCEViuL8aMLx7CZ1iEprFejuwLrYBvd4J1j7SBQBfpN2Bw3hVmyS",
  "key14": "4GTt7oE2whuHXizbqBWZzZGhWydvVGCDAZiz7TfL64zqcxfnMSUn6LxDYLCw6tDtnJ2hSxGXjhTtXUA7JEnzRyQL",
  "key15": "cnJXv9pBqrhv5KfB8mHKfTg7kbfcnMdpN9U3iZh5EGfQXJLB5SkxpcbmsdVZtUtAjCg5MoQNi9Q9aAu9EVSvJcb",
  "key16": "2gikjuHYG4UcVoxKtSPBh63WHdUysNVrvdXJNKZwsMTcAaqD4igHzksTpg7YVqTby3CJg3W8SdiuQR8bHc38fb9t",
  "key17": "GKBZiKHvMivWrPCA4dzU2np8212aSc5tsGdAP82UaPJwf2uNQ9pHHDyqH8mYjwcjM7PQMMEXEaqxKSoJAEiia8R",
  "key18": "5gp1atFDYarh3KRYgq5QDRGRfAkGTR45DvazUs2xt9MHN3K6LLV73TdyGSiusFDugkMZrgsVE4Lbfrvawcey17Sv",
  "key19": "5TieaU8NxTBxydkoKjjzDgTXDjUeR2HCDhFATVx82zoVuMZ9QS2wME4YxSmRJP6q7yzr9d31uXHhH56caPHaFeuk",
  "key20": "3EoziPmYKpGZCJgfLELHCTA46ThvRX2xqjczqudzkGNZvCaAxGrPdj7PDU4JzzvNHahsdJr1G8QFn7SrnS8uQ4bs",
  "key21": "2Ftvc6Ay8gBrf1qR8AvnGdRZ281aYt7jHtEyCri176PP3Wqn1HqoaDHqoyhewBDF4e46JNjuHzTxyjb6DcjQatbF",
  "key22": "4huQ97QvMCeyND7uTBQfjYk1LifLhLch5gfLsjLE7GZZP3CCUF23yB5Wauda432YG6b3kdWgUwy261dYMufJmDvt",
  "key23": "63UbaSXJwpMq2RXjTmLvLSE264wqtVGvXwoEEgj8uqG2X2uBdoQAAAoiYdZzpKA4MVob8CWSruKfSBG5CjtLkVBf",
  "key24": "51GKfDrcBSeQKzjFxeoBTREQHUDQGj7Ep89LsqnNBDsgvUct1ragY7tnNEdwXT8Vdyu39m73gFScS5PtDY6r3Cxh",
  "key25": "1HriDkWPo3neq4DSHiYLoZSLLRqayRob1LUboERixEYXrUouVzpHbt2hVpfXnybHy7GGWScZeQDu7cLPdPoFtdN",
  "key26": "2VsZ1EwTWUZF2FsgLEqs8ZjsTQYPTbx4Vp9ARU6F52Yb4fm8BvnasAxgYkv3eVvtd8tPq6z5pTEDYnnUNVmo6dSb",
  "key27": "5zrQRSBhsBhy4Csc3VRghHNFgvYVTDhPkamqCxSdnLmgmj1fmkWthtdrhnpfXoMsdcC9J1fG4V77ZDR67fkmYyvH",
  "key28": "5YJF3v4bPQXh1Dy5QtmivVQWmgMSwtXLL1AtdRmwKavc7kvrDXjWrxCSWo7wWmwRrMYC75EVpkbAtVaeFDU3MvtM",
  "key29": "4QwWv2s1SZrWW6b99N4T2yHczhkEwWu6fHARXJF2VXsPp4jkCsK4d9Wq9xH5VkgogmThG3McvedpZ6ZKGDVXmm7V",
  "key30": "5t61tUJu94F6CzvpjXPXKspij6FiNczFqV8qXFaEdJ4KoosKrpmj6ZWnV39MhyqSXaJYummG2heHCRRSygDAebCZ",
  "key31": "3kTERzU81P2y9S4GAUz9v8GPRi3X6DgmEH6uySoHz4yw8UvYUyp21Xsnoes2DsAKZediv2NwJxKdBjAiVNufVM7d"
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
