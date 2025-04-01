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
    "5mtfkqVAG9cQ41QdFAzVkrCfB4CdLhPc3EgeZzcnKCTNQ1SFfaxphxXeHuBneWKKnkqXQPBnWTpSgFiYJXsNvYA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbDTNC7L2r4CZ2m7cGEKCCzSNjxyBqDPL4ecP233N9vUz5LFyDqRo8gELdsFnsQuANZcNsWJHJTMk7pdFWus2Tv",
  "key1": "2Dx3tXXSH79kRcZLK1p2kSc6UBRBuhH9hUdgn6ZBTnMoeG9TvGuTkVJQNde4BrQHvuPZzqQXbX3us7ambvqRLGyk",
  "key2": "4Vg7tEFLZCNiiZqqYTVzrB81pENLj1JkAVHpz4QvowMybmHHtgViUjBvepJWk68frQuxnXEM9kMUL5T6xLYWoWDo",
  "key3": "2WfjRNGXaM7CsTRAQJiKowSN6tfiBWhCCrfCeTYSckE2ZmMeZ1YmjksAPdDWYJCRa1zkwEvhofqwYbkW56FsNwDZ",
  "key4": "3yk9nREqvcoLG52jL5rTYsR9sfphYF2auynBCdTieQKCquuGbpZm2Z4nQXMKS8W3PXhwtv9W2mtjs1VvNkmr9ttA",
  "key5": "34XUpQjHPuUjc5DpeqpGdcGrk6cxJZKkM5SKUM44ruM4V5ZrNzmWboK4Y1sNzMjCMyuYQMaLxWNr7f8fCs7TuDq6",
  "key6": "5QCUsd65dXTFcjdetb3Rt4yCZADUp8CnWoj2u7GdhyVGwKvr9vsjKyNaiQH2kLERUtsrcac3DA3pvdktaKzMaaa2",
  "key7": "5WA8ZiT8kPNj746YpVCMsP92bpYrqkqEVEdQJYEato57rbtDMxcs4KWXD43j4ErV9QnVBduavPwv2oc1mYYfEBrY",
  "key8": "5Ubf89jHmj47J2UxsPVvDf36HJhPVMR7XP7vwRxFpbZGzeywseAHsdLDenhHHLQGyjxD8FznceSNdcC71SYp91Cy",
  "key9": "3bKoFfrA1iwHwpsoChpKjs66oNoh2Ft2kA91EfyzEN156mKgTUXpNHiDW3Ufu6NQtKeo6FBsdkKLiDu9Y6aHqZCZ",
  "key10": "HL6XbDrpDdqQecfXzGe1KSkj3rykEzg4EK8QpjBZyh8Sa78d58VQhqGBbCyNEqpZkb6wLKToJn1kWdXKdptQQUM",
  "key11": "2PWCCeDNGQ5VG57bbqqgvWS863k7tWBNwwKjgCa7LypcK8G4DFRNEP3tr1Znmrcog3dEPA7pbZk5R1N9WTJbLVYL",
  "key12": "2QvXsGQGnrUzRfQRoXXBZ4fcGCeiZF4VxVduoDpCTVbHVV8hZjHKri7RZa9A57d6ZaSGgJXweRZcQus7HcE1Gm8h",
  "key13": "3sXGx7abMpwPhpBBHqTAKMuFfXjKLYP22vWsiFZVtwn54sfTqpumKAimyu3DLjmazqQkTFMm49ANZj9nXBqFHBGW",
  "key14": "iqLXdtzREgmMRaG15LcQeskWzRYVTY53swJscdfnrQv8w26umVjhbKgfjaAmgUuCAme86GXCQnhqSx5bVKAKDVd",
  "key15": "5aAdMLV7gbry81ntD6bEmAqFsjyrapn6kuy8h1T3noNpqWePTE8Ub7RffRVs4LyTCDn9uBVDGAKzGGtrmHFDcrF8",
  "key16": "4YZuv1M9yweBrprswgrMitw6QU9vx9gLWjpw3ndFHwaCCgypkNBehreXRgsnoTnMeZgrZtJohqDLmBt9vqhMYNYM",
  "key17": "49RHzqbEU3iSx53SY4fJv4pAmHWpgCphpMDcjxv2UEQU6RN17moysk1yiKHW9TsxqRdmu79WL5EL8fQR8J7xtDHz",
  "key18": "SttfvQKbAvpt4GYXPtnKcEGh5NqV8Xqx2sEB44j42CpRrMv9GHtosWsLrdnzRpk4NCWpER7odeBEP2RWJhTQG6W",
  "key19": "4U5btfjCprpLqnkjtq6MY9uVJTWZYoszGYtRKcAF74XxsvCXMTpxAefmoM3YJ4mVTszp5AWrL8P6yFB3chwLjxV5",
  "key20": "4gZfwKPGWLZxqXegCarwCE83kztjroFuo8BtjdrxNdwpzB1uejhaA2MmjLKjHUjj38tAeq34EGuCxVLfhczzs7F6",
  "key21": "31xxXvTabswmyKyqpsJsK9T9uMktd8ErtfijbgwoU6FCU5qreCw1FkuoYvrd8HmcvYDD1PpJaKfbTk1CR4WsM5Fu",
  "key22": "3zUUasR6ugm9VekUiztsYpty6BYP4usPJf9JZv9CVh8aRLfkNRc8cAwC47fkLyWnghUU75doV2DtAzY9F8xTcZAn",
  "key23": "2pax6JmbQs9rLuSqsvRBbEg7jy5bmErdEiTiZypsxRvn81oC8YfZBjPhCyW5V2dqA3SHBfMSiHeBztKU5Z8ztSfV",
  "key24": "4uT8ggnJbHMKD43e2eKeiYe9XtEAUo3R2MZrb78TWEmzYSCFjzr7XtJzLQu2akS7h1dy97yU686G97PGsThwMYRs",
  "key25": "5weruQWxb529JKE5w3wy6634rdekQyCpCnfJcY3bcRipxTsHEefgqE487AYLJ1k4mws5Dn6fSAv52Dh7CqStyVSo",
  "key26": "66RgY1Bz7M9CZ1jgmb6CfZuDm8UvwSh1CGHxdLKtSS5eQFyJsNgyVucCHrXY8mDvdkU4TSFQxftTFrEeM1gRS5uG",
  "key27": "22aAf48VAFd34GiTMdkHGpXvLnN17vXtRFZjUHG49T3fsr6kpdQcishHMwPXYzumr4BemodQMZVmfzNusHq1MNPW"
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
