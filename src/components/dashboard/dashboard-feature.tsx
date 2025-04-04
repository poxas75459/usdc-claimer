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
    "2tUycgfmopgNfFtJ5ed1w4zpoLVrhpBFaV44KQHudk73KD7wwNiF36G6iusXvPPuhaEqKEWMdoE5kJGNsaetdt89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oe9GQjNMksFJTmktT1pTPQGyG3nbbidAbUa2QDoSsHbAks3TFbKwHR4QW52bVfcFX24oUBWJ7vNsrF2BixsGSpM",
  "key1": "67UCfCGFBzXZt7CdEh4tnEosXaKziAo5Vadhvitj5WDevgkvg4zpmGrn8BayeDGw1jpQXM13e9U93o1CVu9wd5rn",
  "key2": "2KvfM24C4hhuVu4mA9UakeMTLheqyqV3vkBeFi3mYdoGA6ipqvCP5PPqhoWuZA8r9EfUuae1YnueirS8MkG499oS",
  "key3": "UewYuCsnZYf4YpChBx9g7oQioMHtWJHBn9TZxNdNcR1xATQS9DsxeAGhBZpAUrH51V57RGFCdpRN1ZQb9wUk8SF",
  "key4": "2VwW5Ka7reDTzWGfMPYG5LQxuUvPm4stV85B3z5HrvtqJs6KBNSh7zZrzJxenBBfFA66rvz19PJNuptGs5agfoqq",
  "key5": "A8HUu2mi6HP3ZnsQhcBBqBK6oxT9rFBeXVVxx53DScMpC15opAKXDMEqdaZir1rWpnkRxwZxrAUYrdgTk4EWDXJ",
  "key6": "5ziWzYWGbMSPTw9R2Liivg7NoHW3K6UFGWHaGiDNiwRxXfQceKXvkF2fYaT4Z7j8rpU3aeoMpsZ5QTPEeGfweZJQ",
  "key7": "j9mxUbnzbZ9mA9ikpWa3jkN4J1VrnoXJ3tYaHzcnKXzNf5b6aqSuUnsNj7zdiVm9p4T5eV8BjGNcY1aPgQrTybR",
  "key8": "58biBxCQBAZPAYdiMB3xFaWtE2736WJnHfLe8dMdAZJTyG3qGy2j5zL224AJSagB4twDdCsjGveKungaprjXosfm",
  "key9": "54CoigWYnXZomSmM8AQF9hNJhtT7qW6iZMLvKtzJo4wphxaREyifERNpwrQtTY6oQfgjE7fJ8kSfQhQAbfAgBHmb",
  "key10": "2M4EPNAWbPWjaKnZoBqLmJHpzTKSqzW16vSCc8i7AUAk6TpyEsdbYd61k6BxtqWUwiLGJLj3Tm7fXpDYXKn36fPQ",
  "key11": "2VdttwckKNersnDSffiKpTRLXyQXNrHWtzqBw3XEE3GD3XQtgT2pFQrgoVJqspAdxNEgkLf7R9cmoxmtVeakLENi",
  "key12": "pLbxL63b9vfipwiUsCFaekAVAxDtPmUoSpoVnSmBstphhCT5ZKrSkiQ9vzsqxCHWgwehbCm8dyABoeiDtyTv11t",
  "key13": "NCkE4zmUjBCauxXj575iMBYBBeh74FfZ7bqwaiRgNdhsxSo6gCPWETj1Q6TqtLhVkK63zQdFegDroGEufBg7nZY",
  "key14": "546MAQqiA9gS38WhXYybC1YVJkJR2mboSbAEntfekjRHHHh4hkoUoyjXYJpavnco2NYBF6GFKLNRtodmpe1xqTji",
  "key15": "48T3Ta1jM7ZZPGM99QHov7HXeNwgM11kvGHGP3YeaYnH1Hn7m3XLAfKsNgcnvEgjAhhrGYKeMGK3BzehdYR2y8KC",
  "key16": "5YLbxzV1ZiftxXAPRZLRrECT3s6vNDLQMXCWVcCVz1iW31b6HTBukXeTHE7anvCR4DymLoXFo2o6Vyi2BbzohX78",
  "key17": "4kiCtCvvBKzZxV1tYcCLyM8QdLWy7Skh5MPjBQQzVG6tQmYXyDTDKtED8vNQkZzMVXW6Z1JEq8tNwmbvfg7KAVxL",
  "key18": "3uNku8VYEm4zN82Gx8Dq4PfkXpfgidDDeux6xYjgCBdwSmqB7bNx2VbCvfCnbi5DC9WexS5xLr4LD3uJdZiu3qe4",
  "key19": "3bMcjwpHCBehEo4QNuMEiRSCB3uATyhuySYnFmn55aQAsGQyDFZLKpqdFQwZmAsUbL5DAjnUbYuJqRnmUN2fy3bf",
  "key20": "3YGVCQkdmJQZMZy52woWMehJUzk3aR6LZ2sZzSTT3oJ6VC4xcUNbvJTpW1GcnvCBWAXaEtcFW6XTvE7DCd9UvkwV",
  "key21": "4f5wQQAxUfDxyqiY5Aoe2uDr8Bqhb8FyoQxrwcmm1MVEjjVW8wXJWPRA4Q87bUZ4EU6RsVPnznQohQsLnDx6fpkS",
  "key22": "3ECE93D6NXXPpRHziNQtDogeY5LD8LQggW6AH7RoickDY8JeUZn41G9W1BsS1j1Byeg5NFRmShuqNLJqe3J1KPwf",
  "key23": "3ysJXaUDmhZmfi9wF941pGeFRqhJxXuxgTZAbiVFAAMbSn4KRxbpbux7TL8wESidRX8M4fEdcTjsJMLHREPh3WTM",
  "key24": "5HxBHtQV4sRCXVf1ZLDPYmNX39gNeyspbK7Mxc6Ai38ZbWWWtUc8yhj8PMzyfBLopdF8TGidbLNhMvp761gtRq7m",
  "key25": "3dNFQdCopdTKcqsGEsDdR8YYzUVaCm8FpeV8geX5erRdFtv8qKWQUeU1nGRawHeXiuGg35r8kd1WQA5KsrXJS8Bw",
  "key26": "5tgLtAqVqVowmm3eS5WMH8jZ9ZsUSQrm5io7dmBZLE4Mf18cCRNsnG1vsrJWJ4tLx5sPzmVTK6hHre341WVrCGVT",
  "key27": "33FA915xnadcUSoixFQdUCHsCN8oRkYKTUizmCzbeDAe1oTQKF7S6FnSX6hjd6BSmTS2HPSMAYzgRspyexWrb816",
  "key28": "4BeiYQHku8N38wSABRbRLAgG5knAE6LbpiZiUjcLwpSyaxHcWPcbraK62yBzQZv5ZqRwiDWHGopaMZGaWz3VkwaZ",
  "key29": "5HvTaB2bBKAm7P4LBoF96RibhdcwYshWZ7Kf9cKWhN7eakueHnQs3g8G2MJ7mE4gaqF92GL3K3DtHgK5BQn2zBAS",
  "key30": "3GrWAPThVQWyBPMYJKDbyo8JeE4BHtYPZi1AufSiLyVgaYsVZatXrLo1LpWRPNJ5MHJDarMkTUWF9KzJpQ4UZGfP",
  "key31": "2zKrxqmJgVdP3d2obL6xLRaLhNuxxDpZrMQ2ZbHSpnrDSDhMNeMALTMnZLkk8ehGmgNNQmWdg5UHf1NoZXn8h1C7"
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
