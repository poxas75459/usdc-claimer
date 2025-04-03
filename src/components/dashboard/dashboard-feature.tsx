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
    "2Q8vk88TsbJy3Sxbvf7kdtSGzeXcSubHVEP3Kpg66odmmb9HrpLqNjHhYNbG5Vgb9bujkSRKBxQeBYSF9aRhQYUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfRax7c9YzGyrzQ5d9wJU4RpehGkF3CDwUEyr7vH7373Aq4thk2ucgR3mQWvbLSxjXZxYLyzkESjjuQo2MSNTxQ",
  "key1": "3cy3pJiTnqe2xDcKyDiqoNiaJBi2otnoNrokQu7FW9QQPUQgyobzBbFof4X1Qquf9bXYD8dEeRWcyV889oaVFjz2",
  "key2": "5LRB69YoHCK1AkGhiC8ZWGgLNT19A7NE2K5W6QupR1dPUbUnmr1xdkEREed8ctzxrThqVZZhkcfuogbnksa88go9",
  "key3": "2fL1rQejeajK5zCTY77eZ8kmfJ5tVQ4vAiqzFENoLUz2qjDC1hNwuWwaChJFBMacEQWecTgjbsywNVZEvoUCF1w2",
  "key4": "3Mitpoq5bryUWXybHiaSUzRjd3NvojXEVcLG71Kfw4yENcLDuj8xJogEYXjQwpYX6jfKLxUoXyyHvQ1gkd3dZDxL",
  "key5": "pqsJJWqYzQYezcjaCKZKuN42bqbbPPjUEsyDqzEHftPYLZgyQGuPvgHF42jqdGTWrTEsu7g32xCPRVa8eBPDAq1",
  "key6": "5amdaHg4kiyuhYS6Qt5ZiWSUrEuHcQaWVQCQQv7ipdJFX1V5Z9f1t88MYNzMzgeCGACkyaix7LVwrM1zNcqCDhHT",
  "key7": "2JF5rSBFJZ6pReH2XVXxdjCYJu776nV5dqYyz9Jar9ho7WJj73P2VThD6n1nsvnoJaaJ9AhkjNXm6Wg1jUtJ9zRX",
  "key8": "bjYNsEAkLPuFuz8tMwF6gF7xJGnLH2axmDp3z9N4evKTu5RsCK4NUSWQJL7n8LyX5W9C6K4akPf2CruxZbat7C9",
  "key9": "3oNuqyiJ6GNqkQtUiTXYKyxyRF2zcb4JGu4vDtLVkTpMskEpZzUicNsmr3W7SzSN5Rk5xK9XusNu9NUY6zqhmb6T",
  "key10": "4Ue2ugrN17m7WzPVh1fXAFCjbkS9uk6scPwqaZ9UxcohAYrjHaM8bNCVw7S2ffwz4P4p28anBdPxoPfxmaCGbQtR",
  "key11": "4TmkSpmuJbVNfANU23Bgfm7B6C9AN8deJroRW4QzxFZ955gP5H86YxRuk6JLNhyXCWnkX4rSqrizQX7gwcmK5TMq",
  "key12": "4Te8ULYuHQzS77gHufshY7Akpeo5CKNVBzjbL77831pbUQcFvQC8mVprBV3GWCdyfGFw1RX8YRnt13yzo7AhYjXX",
  "key13": "4LwbYS8kzTTWFKG83HxpwVNZNhYgMBHBQ1eZNk3jo5aip2tYVC3uEgCoFwnEk5P8yDiQPTqDCu3FvjMjp5bFzNwM",
  "key14": "5DsAAQVaseecKTt75rh8cG7b541FCx54BiQmky1U4N7BZUYhCMTYckfms4Z1pw5TRcdDXY2aAWZoWXN4hrTfpib9",
  "key15": "2QRaiMaEgVH7cVKRpsNwe15kYZNiaAbB5jRb5fgLk23V2kNMKE2tWJJ4TUWsDZN9b4E4KcfZoskXHW6ndoUUz4TN",
  "key16": "5suu9xabZCe6sK6tKQQfhmZLt5Hzp8g2N7LuUJu5EtSHrW77AjxiXXgN6bp4FTLMvn2As9YLca3TiRReFvbojGY",
  "key17": "58ueBgRMHX7x77iw3H1WEmuuau1KZFb6n8RDbJrYaD77cQ9mFidiY445e7uxnt3gq9bSAsdLjArUfXWN5oRZtkQE",
  "key18": "BA9RizAV9UHxXKzD2T5xkcinHruXT7JiFDCVVAjh7uZ13EHYh6CQ3uHDHxmDr8PFmcnsG9Pf2w2VpMrv1pVuXYN",
  "key19": "waMwgzFobDGsvSEa4WgABRYHVB9FwXDR8XNXewNvHKyHL7MiaPHQh2tjkC9EgQg7jC8yFxpwRdGMvPUEpKoUwdw",
  "key20": "xHcbHfcz6CtBTeQJqkEX4pcH7BLxZMzwAGFy6rEsiRpzSgHKXgMoF3csTL26mQfMrDJvTaEy5n7WHekywEHZCJT",
  "key21": "5qfBwCUJEhKAUEMcdGrNXHuLXbwktkGDMpX8scN664aegZtyxdwoVzjJhi6Zx25S115hHBX1sELWK9B9BiTowzGz",
  "key22": "DMt9RxJwycnPkM2CmtQC7ffXeJcnD6BSM78StfexdPJUio3mZ6EQnH7pXj4xJuPZupfLJdvKGMc7uf5cmnaLjAp",
  "key23": "9BFF2cida9URi8PHJfCxqRTCspKVhK2maauXHu2sDq9vc3PGnZiHHcMBJYd61swRh2g7fmwxy6MLei2HJp96xSo",
  "key24": "3y8PuzPs1GLo2FWxdNWcxmV5sFvDA9rcgz3Qa3T4WpTJeSefjPqHE7dCzxr5SPgc1FMGScQ6dzqCFXxuWGTiiWqN",
  "key25": "32cUzZf3v64V1yibLjQTuNtWQjmcRLnEoY5fWFQVhVHS5zRFd6z7uetDo7pHyhvAAZD3uRQviySuTwd2cEAQS1jN",
  "key26": "JycHXv8ZwgFdM4mWYX164b2ZyWizUg3FzwJqJpeqKmGvKex58nq9hnGb5LJYuduCDpW6GgtJcSmiekpX2jJTvVt",
  "key27": "Y6FbStQxwGVy77S66TESuXuE9n4yGpkAAi3ottNDqZnqzUE6LLgdc7dx5PVrNJi5R5m2d9fwtBCEMPZLhCgqT9q",
  "key28": "3Hjfh4xpFLxXuRiaEn3SfkLF2CtvvnqEqULDVdFCZfDLEyJvgDG2q8v6kgbTq9yAKrUW9GMp8v9JJRxC97zH6GHb",
  "key29": "3iSPof9LdjNhgwJWnwhBDecQ9napu4A2mKQqr7MWVLJh1rKEbmLYfpm4VZUCDKhB9guWLz2HsmJZwuR4bPo2KeDt",
  "key30": "2mnTcPi4CBLjZoc5FynzuJy5vSvDKveJpdfGqJPz7sJinFjQdBXp54koCftNhy9miLQmnSpnp8LZNyjoX492piXg",
  "key31": "25hB1Af1DDNErAZhcrsJkUgLahsCiGK8FArdYsrZvsjoBRoHz74K77N9jzfEsLMdZP75hVsvqMmzqNt3zdG2Rire",
  "key32": "5cLiAevVxXp2rg5LWhdGNx5WhXRonnYzZBpLidVFX57oX1vmyWdQFgRAqPSSU1ueerQdPTddLqEfaWb15oGLkJhX",
  "key33": "TfyZ4KAF4M9GcBTGBmFmFzayv8YNGjJoYGCaP1RBR6YnSXcCY7s5HvzjZpt1V53Gu3wB1LVQRV84ZRzdwpQdJ4f",
  "key34": "5JHGyFECPjn35ujKbJiSCEGK1qFrM34GFGx9Xig3dK6EZMiBUYtC2uW6rqJy7NENEP1a8C6WacizwyYpnChgs1vK",
  "key35": "3fpQYNnBonvsak7MhoGm8BPjUJsfmWP6zDBqP2UnaEvzF2Uy8RQpuqzqYEghKdSn6NWYDEXUmT17LpRs7Q2SFXmZ",
  "key36": "339KX2sLWf6SRTinTyTwPvkr93SFwUqBpAuhc72Xu3CCvj8RYJzHByv3anFYgwj5tZG8VsXeLeRNpng7aZNXv7qC",
  "key37": "2ZLfqw4LSRLfB3zg6Fcmn383K7REQqcJKRSABU6utCf7qAoEC415q9PGSnJGXRxWNTvpVFdnuoPfXuucK6p6F35h",
  "key38": "4aCCHqCs8dE6xE1xabGkqrMPUJ3WAMpSqwYn4iEU7Mzdm4KoAmaGwYRiPF3w6N6sWEgL3y75sXJjmApNRbEmFk9r",
  "key39": "5g52Ta9QMvtSTmQktL7XHNb8PidDAAA5shUomYVXjShSjk6ghEPCrHf8gWXfATqYEnwX7fsgzy65s329BvtosMUS",
  "key40": "3UzV2CRDcFv9uDeghdrtW6yim2CzFsbAwJJY3H9WbgLr3zmArk2KTnveB2LjerKSFRyPVny3eHQKgiTRbUT8omQa",
  "key41": "4ZweQSnV9Qk5cJjH9pGPrDjHrvNJNoTAZiweuvs4a2oA1bUqbojAMVV2UqqWEfp6ynsatTw7jRx7BYZjjDHFHdDp",
  "key42": "4AEBsDa5jsyAQTvQ7WUuKDp9pkZzakMrJsBxrdpYrCr9C2BLqSxiUSvNbDpSTQQ13xRnKJamJJdT3iJBtTjASXiG",
  "key43": "5uEoPg7vJrBjkTeT2C4Es26t86MVuTaQ5b6Fc8dTxmWx77dnVtNY9QDGADDTStMxWMCAB759ZPfeZXQgt22ncqez",
  "key44": "CSxytMobEXsvBLwWZRV8NeSkFDeB4PDh1MUqQrxmA3MXzR1h36GNWHuCLBZ9epcURwm1ngQbYkiFEe7apGQSwGS",
  "key45": "4UbFutNjifGNoR73XJaHCRjKMHKAGV2XmPwX8joe68g9GbHtsQ3udQcpfHR9xs9TCTvTRvSEJrZu3mk7L3A7kWsF"
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
