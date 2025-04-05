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
    "ZuMgDj9nosgRJguf54gSBFCc4WCYdFwQ3QCaret41Gw9VnsxqHhwQPNNEAqaNSNHL8pfuDtTHVSATGT3HJTz8Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8JdXUs3PvzwmUybbKnZrwyywzsgzXCkz3dVNewvbB3NJDrZBSSVXxGRZrhWMoXqRPhFGZHt5uGbmeV3PXAdxHr",
  "key1": "3hwmCDbHoGjMtAfU2ZFvteWw9BPZZZN7kNcBRTeHLaCxPqVXZnCHFrTrewsYfAxKSD4TQvvgerNRqdFwprNwCLS4",
  "key2": "3urAdXr68iqowRprNDXtCUPQqFU97hNxDg3ZW8ULqBBs8L9Gc8gxkbFESCUbbAjY1VHdi6E8aPmQe4aiUzQxzNFW",
  "key3": "tE7SRJb8murMBBdkkLzjB2eh5PVJkrkX6rZ5KgGNk4UxNcYgHrbBCFLYP4wHUomigsTinsCjD75KHPJP28FABKH",
  "key4": "4nmAsr8Njtf6198zrC8u2UsDSqJ8QkQaQHfqTmsKTeYpkNw1emWNkec1AwHAiSzce2y9rJWqyCtp5sv79skqN7bW",
  "key5": "3KAMfXqBgVeQdCPeaeY7vQJ9yw7iFBjpt5LuphEc4jCJTSemphBdNMfFqabpPLSYs74K25uiSYiFDe3H4XRvSA2P",
  "key6": "5eqCEPX2v254z1jQbvV4gqCQUkGho4r6BFLK3cmCfJYPLJgfC8WHawMnXcYgLDycNLt4EKK8h7zD5oyXvgZwNwz2",
  "key7": "4SD9eguy9YFnssxmWWpLEzfeZqFu5otuMALRjABeeeaP2jB5DSjQYAoifHCW2B1XVZra18wQmuRVvRupLqBBbPbp",
  "key8": "57b8gZomQUsCWEUC7YgABGauNbxMDAu2moiPwtUayMw5bJZqcqRA9fToNr9qgRNiYwJEBesAqn5riPAmhMvmsCTB",
  "key9": "2sGqDawVb5d52Mjqq5aETcwZhp9xriQFYdyCFojqLQP348XgZoYA2WddpaEUeRb93uNXET93m2jYXKxvgPRBHZ7",
  "key10": "4FGtFqmVF4Mo7J7pvcEc3Dqa7q4jxqEQUoQPkeR8jghyfbdGRRUZWMYHW5x3RVCbq4pAtSq6APMFSQVjBWanxA3o",
  "key11": "3c9sVywJA6UXD6aghaBwKkjVNRFGtpN7VsucvQ3cPqfZ2rA2SArm5PpWEDi6vL95p9e1G96nSg5MggVknbU4r2kj",
  "key12": "5rwvPhHWrfzFHjL2jQ2rmTqXBL2etCVZwBdF2a5TnMsvcVGyqpT6aX2zHCTesNkFuNpqX488VQ2cc7hcEnfUjVLY",
  "key13": "sS7QhvE6xbWN1mjixBENFfqTU5y2f6yaLuqF6bQP6E14xXpPLgaYTHidJpAccd3nfaxtowk3xr3TtUvBNYxEBvL",
  "key14": "QUUC5zZET6C8V9ptmSZSsNY4UbvLUYZN1PsUtEMhRGwdmuT7PwUWejdbWvRbGM72wYvn9bjEgnt6MWj9dw8k4gr",
  "key15": "2sapAVwadMMtGk4UEdEXz3KTNgx1mh1EoLoi9KSxCMrcYeeo8QsgoQo7QJAQmiX2Qm1sdPZFU5YDyRGCezfE7W7p",
  "key16": "2XTkiStV5hHsFaGFDUb7tZAG7SPViBjN7SQMExDmCabPpn39xPDvapyPpsJKma9L32DC5FWrAfSFoRoZjo6QgcLK",
  "key17": "itJefcpBkmk9hKama3Z6KfUcg8rJv6Cs3vJYMbmVkaSD1qkdE1dvg9ZBGVTPLtcdLs39SrVskPcecRGRdrkpqCv",
  "key18": "64882p9ckTgYUnmF2F6KuQqc4a5fS8RtvTkd2DF4xpmqTZ15jttTpGNNWgWKDZdxJhZLWHx3ZBSEBd3Z8EioAn5n",
  "key19": "mVmB7PTBqSVqs8SssMvChPtYs33VkLxgovhFjZqpqGfDYgqoFpY2A2ToH9x45ktV1mkY7rte3uKaSH7bUWKTd2K",
  "key20": "5ybPKoRdW8nzGxKoaDLruFEUgDfFaKarsBBxkJDMZyuGj4j3UKFQnQua58YSQQ7A8AP6nDWQQVjqvGmtvzkJbJR6",
  "key21": "2872XErN2wgrDeYPEgWNpnf4AycpEEjM7JGRi9we4EPtBkCYekzo9yJZJeEoqiMuvyjPc2YKitgdfE2dFAL5evXc",
  "key22": "5yAowrN6U1hR8jENLHNtTnUfrXNCbSNfQL9mqLM7UuxfKopLxqnXyPwCbgkZBZhUSrJeNDkUo5gq1VhqVy2pT3RZ",
  "key23": "4m6hkqA6XznQa9ZaBFvDKkNRGyb2hTcQCDErFbzvZsvVEt88e6L2A813zGGHzm2T1FEkr6HJrJ1WmhPh1wgm8nxD",
  "key24": "QDnR7TKZa19Bcitv8MQ24iyLPwFo8KuSz1J5fWfSSRPDRSdJvpn1Hjrz573QHwSXzeoxZ6bbdW1bS2VRyvD2Gtp",
  "key25": "3qYED8Eqoxby1SjuuwddiFXQhK1W3D5GNwp8Y18Saf6fABFy7e3gwH3irFoPdxmg6CEhhfRPHxX1c7kzAsdk6XYb",
  "key26": "5La6AQBpBESjvx1Dk5QEmSdUvofDXcB8dodRFo6WXzyEFfs5go7WeL7zFzWTFEGqeQRuh17hWnFTGoxp5cvTEnvL",
  "key27": "TbPm85fNn5uUJFWXydPe4UDPCnz5Gm1pkWWFQkL3ZhM9HgvYm88gR9G5NP2sNHSp2ey4j8j8tciv59CKjJRueMg",
  "key28": "3QnuZNhdcZdTPWEzpkmT3afcc1wvH7Ah588dacVdWdQJjJyJNBRfuTVM16jHdSPgnrwDNGpbgB9zNiv9krdoNkEp",
  "key29": "2UWmiaL5Cu65ob1fjEjj5PeHUDP48Rv6ALSBiBttnPaSwV41EzHddrfTYtvqhHNZYD8686LJhKxmUh1qeEpdp1Fc",
  "key30": "3kEwq9SSsTEUw9FvDsmnQRtKvdpQ4QWcwEHq1P187nW8PFUWW2qwfT8RWeLBG7svsMFCd1f4J6CP8eg8iLM5hAYU",
  "key31": "3hME23K7DvKT1gWYFQmRcJJLGZcZj3PMoU8DTo8MVxPM93FQ7jDHMUyFELBUNEXeA2Wv3TDAP3yCYEqdZWfonW88",
  "key32": "2gGX9QGz2aFoLLYk4k4MQZERrisAi3b68ova3Hv6fmYFRJHELvcP3xY2y7NFa3nE49LQ2qLvPCXTwE3ojwCjsLoy",
  "key33": "594A4YyhMDa5zHMdNxV4ifrz8cpArtpG56tLo5HZBnjTwfbFPQ3xkLuYzdgVb1jPYkQwjVxKqHhqDcvuhyg944Mk",
  "key34": "5ArjeTnMMQh8EXKq1jPh4BBL7NuxVKoA9AvoB6AYJ3cKHmAiqpEMmxFyrnXNmFnS2FXotYzuV3vzTa5KsGed8sfn",
  "key35": "3c1VeTxUKQSEvRgKCaADoRzFqspxbV8F95WM5eD4emJLaxzYyVVXFAy89kzvK4bBNQ9VdSTiXeYoSoSbLVAgcz92",
  "key36": "53RuRVFvesctFRp3fUojarY4dWpJ3KfbXCTMoqycHWFPHHdRzEq9qXstQ2UCri1Mxy7W7zR7yaWybaFfrMGPaEUz",
  "key37": "8kYHCUcUZDTPYhCmNc4D77v1oCqZeCSXtekqrQpi2SDYpEzHo2RiUJS4U6FAqLq2Ab4SaJDRtwgPtdcGwJjX4rt"
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
