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
    "2eH3gp5gwxkjKZWDZGq3cckurpukj3QW2LnL6fYRb41s47G1FhRPDgNLKoBV3ULP7w2KYwaxeuZ2JT9raebVxPHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCaqXN8YSXe85sebyK23pLQuQ4SP18UWBrv8SUhHpqez2XJBjBz5dXxCQTe5zU9Q2ZQNwPxqYWWpneYpfwJBBd7",
  "key1": "3e4fd4FG2GZ3CrkWLcGx6wV5umMqxWAzywtBoJgcjT8vXh3oZzG2RFYRXt4nhtV1xX7moAaTuFHCPPpzCxHiZCP7",
  "key2": "ydiSYfirMyZjFKB9bNjHe5g6Sx2oLtoHQZh39mC5mhi6ohwT5Jh7Gc4eZ2XZ6DW5HLMDsdhmtANai2k4BYcortf",
  "key3": "61KCseGVYubYyKaEvottHoQMj8ig6YLQXMvqJy4N6URQXXZpD6657QSTP33onPxWsshDrin9h8txSDarPCiD5Gob",
  "key4": "3Rx9UinURhHXemVRsGvwtmf3GcjUerbVRpg4fUyvuPZTf9Q9HUkXjsHFzF4UESYcTwK3fbFo6dpSyDbnpZnUgDnF",
  "key5": "22DiJwajtPEYD8uXkRWSqazrHdSiPZa1En5KeGSgAPMEtqkanMVTDPnvWR2HfYxZkxMbV9p4JU1uWm748Fq3t5Hk",
  "key6": "3JnCvizcC5vTADdQx2LJzPpLnmgz8xxD8Ai1C5yktSbvytQPxrSLb4x4PYGpsoHBUv2qnCbtDaoGv3BBUPXNSy4u",
  "key7": "c1MGgFCdyFKV5SjXcysry7xHqhz124UpRpZkgaG6pGdnoDsCXti2zWhifiwzGD2Htug1HmxyTALraBsu8XpEb5g",
  "key8": "Eava9FcoVs3PPCrinrRqoJfgDAsebaiuin3mhrUFimo3fSGGmMk1Jo6GfcMrKEAjfXt9CW3FedseXg2kctNvjDf",
  "key9": "3qqAf2pxLzVU6dasn9gXKGEXsZS3EGRda9xG2oVWo34A5VV68aA2usuWFy5XxFXon2WRxPbvRicUDhE5Tu848f41",
  "key10": "Q9vQE8by6sBngT399Z4EAoT8BXGTYXQNyLRB5Wc8C7j4X9PATTZ4YQJrX98wzjWdCmvp2ppXVKF43e7Um6phYMy",
  "key11": "47j9nignv6nHNgzX8863TX1ApM4TXqomZCj9sznwzVjavFjgQn3e3HybW1iUxZth9rcLnXa2HvQi2j77NJFqGzaj",
  "key12": "4jRnAGjxetbbFPJkqUeKFCL5gDnXKr4ssQGcDGvcQ7FFfP9vcCCDqeYtdARVn4H1mC2AS4376boKmcatRp2gJoeC",
  "key13": "4NSDXSJ2JxfLqR3LxuEXmVCwE7ziMHwTQnvUY9FAQHY8H4Z1PedcZfhSqRvYx1Arb6mLLGSUpsAnNa63LMqLgmkF",
  "key14": "32NVk7mFC2k4RoPCYtwV59e4AFeDQ1h3AA4bQ4vDLGm2TGXFcTYv5D6r1ciLTduuhuus5pG2n4mDZzkBA7SLyFp5",
  "key15": "4QMwsaPUFmiqNhw6xWpXHeEhEih5WiqnfWKJskb997L23U5icFdxSDfjgRUBqamWfXGzVFeLH25RWcnraZ8kbqBq",
  "key16": "4z2omAgaBMnSPZW7tguFJsPNEbKLhteF5HnBWyStFc7saaXZ4V8Jkj4Vpfn6r5x8GqmSRAh2FUNhbhSY31ngMNMA",
  "key17": "ezCMkqseLhkTDT7exnQZCmacnHY1d6BsG9hHUnKAKn2fshaxxmKHYnaGZbcPcKURhgd315QYaCsg1PYN8BUqUe6",
  "key18": "38RHraAU1VMjshFNiWhggXX26fFPJ81W9Mut3aud6hTjaPbzepTesoAurZ9jfWKC1zZTGSjnwoKzkR5bmVFG8cVP",
  "key19": "AN3tDGxapp9yhexxmynXYrSvmwm6E27jioRFmWC7XCP8B6k3LEsEsFk7ykVrgxJStatfiZr6PYourf57NcSKmKJ",
  "key20": "4XpY19vDC3hLXSyt3Cpze96bgTmUc1cFZW8JQFDnAEnEi2rb14xTUQv4Eavc2jcRcqqx43Uyn4YMtry2MeZCAB8d",
  "key21": "4hoc8EgNfoaph4uaupPdFd3tCjkLLzDPnK5kGW6eNZVRZXMh5cDT6Vw1F2X4htygtJorWSc5LbWXL2KrDL9K7GyL",
  "key22": "3yz5o1HmyB9F81jjAaeoo5HsH29eghJsHSCq6Au6pM5qGs1aGnV3cKxS8zHYYC3hGBYnoG7sDzAniLUWPEn1V18f",
  "key23": "4D5JsWrUtnmkbqN66FHayJZEyeyo5SwerdPiGvvGYgStJiETSSQaeye72W57B18Km2JoewGhdKG5BXGHCXrGsHH7",
  "key24": "3GBgQLB1nZ2PUQQumn4V7sHEyY5FXkt3J764ArALz7epFDEYhU9caqcNjSBrjWXEmwBu9n9Prnu5syyKRwRuRUGN",
  "key25": "1tvnu5s9Fkea6s8LnjjgoiSWTUBxegBrkwmRaVMmEqNfBgcdSRnmLcpGNwmhdDVHAhb2RXhr5GTEJ6GaQoGSxhg",
  "key26": "4ikSHw9MESyUGrGA5Wg4GQDUpYbhNDXdtArxet3sCE3MMnKKpHC2hS5LapDDdi1MFhSwhJ6gnsbByKuQ4pZiYVJf",
  "key27": "5YxG48rLDmArExhxGqJ1ot9YJvPqBM6YaK3dfaVhrVuus8zXkjrTuzw7vEJPHFVKuDaaUpcru2DKDdL15CKqwozs",
  "key28": "4VYyve3WHdxy9DnAm5YSRuUBNQ58sUfnv1xHD9Fc6T2NC5s37Lsjb4Yhz5Zfx1u9pzG5BWJ3YZMmTQzZGzwU7gS2",
  "key29": "3T9z9jdeVwjJr9DWrvEAKAozWCLiZhbNSMXFaho2eswSayzRc9Rfin3CFJqcrxtQcSu5zSdB9MvBqSENFg2Cv6aC",
  "key30": "3C412693SbgYYp43GY2xdvqpUWHKAPEvrxy7TD5jNDX6fAUdT8cUhDBHGinubXn1ZcWCbcb6Snu7iW2waxEHzgqh",
  "key31": "3fzFCZWqV3RGcR5JGhNsHkHpThtAvh4aa6LtAqxgq1BxzpnX27NcD7oWu7m6Gj1viQeaF6bnfxsCqt8T3Hrk8dSi",
  "key32": "3UhRRwzHuUDjpm4qfunDapaN7uo6qwfNvWkid3rD4t2ZguRx4usm3ZjQXHgFKhR7euttx8eYbbU5C25m9kvZ1o8P"
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
