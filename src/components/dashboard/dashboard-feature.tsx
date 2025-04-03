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
    "5NK53m91wSWqerVrQ3q4oUisugYWi7rkRB6HUHxApvwLs14F7CVg1VRxsQEc6PJfMV9h3VStbCWFQQqhMLBU6FfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27URLc5fNMcvuX6GiPyXHtUnfYkyST3jo8NnRyJUarThXBeuYKkaBuEy3CR29gVARPmWmonThu2j451qXANXNHRH",
  "key1": "2HUgMAkYj4jUoLAap4A6gj4yz7m2v6Gh1hyPYuETezhL9TvyZ9hYjbGhchsKKbMbg4byaw7Z1jAhV9C1xwULJQMQ",
  "key2": "5VniYUu5hCdiaQVNWSFeNC816JDtKrBLsLaXzA2f7Acr2P6bAxa6ggeDZYqbxCVcVJrYhvx3TjZUAyyNV4X6sKQG",
  "key3": "5hUzsE37sLPc8pXNHp5vufDgEBinDiToxe9nYDQkfm8oXDnHXogjGM6gfJpvb5Grn7tjUEAmMhEWActuKQzxytUa",
  "key4": "GQa53Vtwbw8ysiv8j7S1S2xU1kvYZtgFdWBhtWywENMkJf9yQSFn5LLV1CX5e9ntawkKbwCmJwVCTZCVfmr19rH",
  "key5": "5Ay2BDxYkHh6M8hjNbMYtDaWaTxSE2C6j2Q33Dm5x5huir87CMKqmYUqefW2CV2taPHQhzb2PfvLwu76y9rgbvDv",
  "key6": "sZnb882V1DX1SMgKuYjXa9DhZNY8R1kMd2s2c325KKLngKfMdz7kXUBARtX8X4GUjHHwrHjkj8faUTk15ewVGEs",
  "key7": "TEC3VQKDTpvV1HnRhGNmihBk6dfFYJNpugi6tGjPgugxvQBXrzCTCWeDCw3UpCjmHoCGBqyejXcZj93Urjtgwrc",
  "key8": "5DG2D9RaUbGsFGGGWGNdGqdtuxuHQe1HpGHnZksjabasP5huo457B2KUgfED4nuo7ffdycBssZ1RXmywAuRmAg9J",
  "key9": "3r3rNUeYQKAvg5XHnzodFv4ETZY2Mrd91mN52bGsN2B1RLYQ8vQXvn32fNVVuARnCq2jM3DGy1CeWYsmGeZpTrwg",
  "key10": "5zCUQ276rG1eR812qZwafJYDP6r7v9bg1zNsmcmb3ABXRdnRSQSdfxMHHMjQHHRXQgChds46i2Tu8Kvo2tnkJRqn",
  "key11": "3UfUKkEHm7LGfKVTBBw66eyNyYTihnEXGrNYPU95foNyBze9doUvTenu4pp3fkwUefwbq2QNiStyoZyxtE1hHKvc",
  "key12": "5N4CdVEirWQdSEAK6czHvKYBVTNFd35zBYf4wm6dowaWTshdZnRoXM1AweEJ3dTTqZW6smdBi285NYLaK7jHpZms",
  "key13": "5HoZeHvmsLD4mfjuKUMydJQU6nQqfcJ48cLBbM66d8WWQbooiqNkEwHjtyKUh4UBYQdiB3hvQZsqwdNCqifX1Qd5",
  "key14": "511VvUqagpSeCkjxeCRmyupQ9Reco3FtuXaLoFpfSoxfwNtMtCcHKcGCW9Zyrzt6HEFFNNHnKupeGUPx45jt9LWj",
  "key15": "3a2YZUzy8yosBL3YNSjoFwu92p8iT4cpec8Zk73vArCnH6jANqPoNE2CqoqpDSA2Kxvni7NYfwZJfHd8vWwT7kV4",
  "key16": "2cjpGJGgdwmpuMnuMGkXzhxWm5bLz4SGbDFXxS2SNdzmXWKzTgbMCyGb5dCyAFmgMLhfNEHVhpcaFxArXoQcwKcX",
  "key17": "5TeethtLWwNCeEzPEC2jgy2Ge3CykYur35XDbVNTDD8ojHjmGa4Qb7XMnSGxUsPKZ2gLDAbPurMvsAt6euqtGnLo",
  "key18": "7NrC49G2L4pggX8mjQpMRkEgXZgmqWgYj2dvmoayfrxqeynNXWeepJcBTxAir53easF8kpQsY4LUReZGsZ6Kney",
  "key19": "4P389nyR1EkRELhNsSWRnu1oBen1cUyabDK67UYiARHZ5GzN8bZYEG2ptwWWtFjmfzu6E4RdSF3Gz1hrdb5a8zYi",
  "key20": "DnM3dSQX3uV9Sff1mkE5tybJENsd8FmQbwwf87PEU2KQc2PS1UqbVmYznhkc7njpWQ3MhgPuEqNP16KsKLGpLdy",
  "key21": "3nj4VbznfM9Ni9BpEohg6ATYrsNf1R5FPrfrnsLGjrhwZpfxLX7uvapYokyup34px3tYu7e2uD1e1bE1Zikt1ZCU",
  "key22": "469NYZubqFT2fMFvFhfT7mUk6AKgrzQYPSjvZ4bpo3RfnxHKrAuLuQ7i8jSjTQGzxc1NFowtdVcDaNRrbW6GcjCz",
  "key23": "2V2TCctYmXtH9weD5vehaMARwgZJ3bqJJP8YqoPaer7bZoJBLPNLs9LjVf1vd2Tu2pNpYEDd5mugybarresLCypw",
  "key24": "5PtWyKBfasy9JTXzeszBJ99wKQRWLKqgmrVPRQZfPqy6BemM13yd8U27Qv3zxSsNixFN1qwPZ4EnjTYe3yXf3a4V",
  "key25": "4KxsqpKCxcwwKN1GvfwKzM9srb9YP2pPbijYVwAQ8g8FTNUQ2XpkqGbNemynu7iawcRRWEHmgBDjMz72m5MN7u7g",
  "key26": "5fr2WQhEZ45nyMgrsSm5dbWroG6FDGxnejhUa8TYcB86EKgombDyDEwUTniCQzkmopy1s2c8uUw8ehCak6n4hmgb",
  "key27": "5oKizMcBA4pZxuZPtAzeWv6r12WcL3qoP7YS5bEAoLsVjCSeT84XN22oqCRDU9Xvb1vQWZkKmnVZ45k3G2bK1DL8",
  "key28": "2yY3Cq6YjxE79wHz8seu4fm94zRepMpMRU39bdkXpxcRhabrLtpgsXwjFpTvbLnrLFrJsPFydSZnyCdCPrfsErnx",
  "key29": "3LLTpw6BNch6vT71dBGvMpfG4quTNavhBgb9cZDAA97EzA981JAJnMM3c8rstKdS9V5XE4k478rnuq1rcKrkcNt9",
  "key30": "384ghAA4kew7TVtnwA4KX3FR1s1juVZiA74r9sATwdHik5Th6QcWHS51NkLb9npEuASooENbUazD6ktCdjkpY79G"
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
