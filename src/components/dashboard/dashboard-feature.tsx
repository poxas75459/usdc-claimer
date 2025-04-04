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
    "mJbdBrEK5wHDwvTnmyiXt31LjjjzmGdu92WW2g2wybpdCdEzLv7xSV4avbhQBNgk9T4FzQa98CZU7DoJsZimu7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKNXAT38UGTWv9NUp8Enh4wmh9ezPce3GWFQtrEgKiBivncnBenBFBSwxt4kJsTd48viQK9ebinyXuKirx5Pq2M",
  "key1": "3Y8gNzy3eXusN5Rgj24iuR3EtUWPfME9rMiW8ayuDLtWJna6is6DgB5VLL2CJGiptmNdhgopze2xJ3y3qP4HrpYF",
  "key2": "5xM9jPmUdEUhF6D7cb9G9pG9bRvR8R9qyYwqEgUMsDcm97VvUUq1Fs1XP1KSVyznZPHwGgVZq2EESthsdSCwAEn",
  "key3": "47tnBzkXQVqW35YMYkhR7AiNMFvLDSHg5JWxp5WcWzX1AnKr2wityj3XUCS2Z4xDrzGWMXs5zudFMLBmNhKFSzRV",
  "key4": "35BtA1BVWTgJQMmaHVy1gXeQdttc6FY3Cg2LqmY7ZbNTupDygXq1ivR2wLfwJi7hcLgBQe6uNdR4u5KqcuJpbc19",
  "key5": "3xkVJfFE2LaXuikiE26dU2A7NwnEbiYCRnZd6XCSTx1XEMebe8TQM3iei1SVxChRymryWY2PaBauDcKvWFp3696S",
  "key6": "4Ch8deb6NaH3NGsfexGZX5NW36y99rRAWg1W7vRP2MMMuTPnqKhXav2XH2shRPSrmvJpHGFB3vnocgPwAABurVwb",
  "key7": "2PDVE6jer1ejrDyVya8ikta85uZo8E5htDLuGjgngAPVTEDF1bm4LoHxjQuKzxuXm6rMCa5ot88LmQor6MZPjnR6",
  "key8": "64M5FACWqhwRm3ye8ejBxtxzFZD2QQnHYhy3wvwvdvR3PbGyz3KfcbVbrwdPiTkcJPcTmWA4Jadbvp88xQ6XAEsw",
  "key9": "39oBt4HKEnygfGjX4CCg1xyCibMUUGPx88HG7pSbo4dPJ9SCEiqLmZvZtnPXHvHLYHGBma5YsCjKor15pR8CkSKb",
  "key10": "2iy3D627nKrZzkVemcduw91cTueXZLsx8sVfhktHvkKP7NmrW2dtJMffB5vbQxrSJ54DMtQcjnnzbKzLoDXQFmZJ",
  "key11": "5LzYWgeh9hKCxzY2HHakNDe4Yrfj17SoQUq9DH8AEdNXiiYeh7RpcWwjgsnZYvKjqYRMnJKrnQrBYX25nrk3uyzg",
  "key12": "4s9DyYiJBPLZWK47T15KqpwNYGi3rJgJyzQCDpt7cU72yfXVti7SVPTxu3SackWxAUS9fZKoTseiTYYBMjRmj4kU",
  "key13": "uceTriHTvzn4YJzPXHsb6QdDs5mm8JELAJcTy2A4xytXjcDNcMX1t5vn5ko733BRjaYXRFj2jxRHc5Q6yNCMBiX",
  "key14": "26T7K1zYRg5pTFJBQjR6hPQ6CNvBaY9dPL95RrDdyPkerFUQEr87H2hgN7mtuNKoYoeE4NUKTNDLNkXaNcLHeEVy",
  "key15": "4c9y6NRKLHoZfWg91pGdgH5xSNHRqzNbmfeVTSTKveVzuTW9nmZxserdwC8bhDsoX5mp6nha1sEYD4VrYA9iKqy3",
  "key16": "5s7TAu2v4kt3nXq6Q3eRe9HvQSQgdDJfjS966g2qrVgR4V6RhaH3519ardgZtpe65DTbgo19GxayHXp8TZDmfUYi",
  "key17": "BS6vZ1iEaxRLsaKz6CfU2uuNHrfEx3gmDTs71kKAc2fF2SswvbycRjwtDdMPa6x5D3i3FXaPg65ktBo5m2Mp7kd",
  "key18": "5XGuKHkUttswkgAMc6o3y76m9N3ZQcX7fiY8fP3D1F9DhWYMVhUnBQCYFXnpob1UyYm38MntqZJzg2EVhjdNJeZ2",
  "key19": "3ZtiL5FxcNxAJ7xu4kk2DwKjeY3BANdiMCqNeyDfEaSstw1UNqqDggei6fRZ4hn9oE5fZaf8o5cVj86VkoF4AHMg",
  "key20": "2v5AmriLDcCAKNzBxE4uSnqUgpUCmvmUEuKG1UCTMH54mkYnjSKFYDR6Y6SKXU6SPydBfBMWJCPbtFAHDj33RxDv",
  "key21": "2uuGzXZ89Nx1f9gmXKxJRpTQeExWsMFmspfh8655qVpTjSoTG95jkPnfJU1u6Da5j43tMwdSMbDsd8FshnYhdvRp",
  "key22": "5r4H7rjHq2GConDbUhdxek1kwd7HNYe4Dys5EESpZog6NqcJpo6iRTetn1MuNrnv6RXdGQF6fxVifGCJeYQctSww",
  "key23": "5U3S8GnfQfu5AMU9bG1qCRPjCsGbezAWFFtsT3qHNvAiR7bxjH4XXjCgGKrLwoNPFFoqez6LsTSWFZS4rauG8Qif",
  "key24": "5QZePEELeEYoAd1s5JpEHZxL81Ya3JwGgcbji5apXj5GKB1E8TrzSaagMqjZsWYWiThA3FgamL5ayHTbteFmfbA8",
  "key25": "4nhtyegk5s7jaSpbzzyWsqFFHRTBxfaimVmRTgwCDMQw6b8Y2npDGfG4beYvqQFKdLfPyV5iK6Zf6sDZiuxQhFrM",
  "key26": "5k75U6kh8jG2j7AnZQuh7dkpq9WNyjML7XBLfs5Z3KwNmRXsqC4wpNamfP8D2EZSoGHQ4BU1jCbgL7A3frgVxFfv",
  "key27": "64E2wV4Yo4gkW8vPpSN1v3fVyGPPZTeqop3nWQ7eUbdaY9f3JjyenTSirpTYZop4CfryYH8vyrBQhxdXz12wGs6d",
  "key28": "2pMgnBzF6ameybtkd15eokBKYyXC2Qco4HZK4xYPo9tguc26aBsXKsEaB57DGoFrbuGPQEEzUS4dZiZEWzhjXLJ6"
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
