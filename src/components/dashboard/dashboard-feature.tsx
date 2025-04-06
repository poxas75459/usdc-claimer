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
    "57TmAppVuQrTxt2o37hVs4MVq9FLRsAAAwVCDdSD5CrCbVGRUoP9q9wCLnfW3hKc95uZNGXybY3y9hX3TTpo9d9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3soU6mujLTPuGnC7qHHdUsPK89vcSww4ycyWiCdcuQfxkZZuftev65gkJhQ7ikzp7RMvVRjBrqwbnNPbd7JGnTBe",
  "key1": "2mo3UTzHf4bJc63YuaWfErtRaNMFQCRc9iNdHENLf1QNapfne7xKE4cz7TESvrRfMKG24EEZiMEEZJNavH26EWhW",
  "key2": "GMsv8eQHHic4ueGjxnfDFRkFoq6yD3X61U7xeBX8cGkHQdukSKWjBnsjeBnZC1x39gEF4s1AqY6ycdTCs1F3Xj9",
  "key3": "M9jPhMMHqB76ZrAvRMynWs4oq5qDYCdV7AD413mp8XY97Fts3qvy2vduKvHBDhVW5x2z9D9oWaegQDjN9cNikQw",
  "key4": "3GATzWem6TwyMr8H44JjLtSWVpbttcgYhqBYg5jBa1cSyic6rU3EGYoCqzyux32pip2S8CXAoJJ8GyQgEBvkLtbU",
  "key5": "453AfBEfki4SUsJypsjt2Q2quq4gkNKji37rmNG2d5WZqHeyZhZSFtH7J23Ee5CqQ7gEpBPoe1aE67kmS7DhVGEN",
  "key6": "4yRoQXqTmhMv8bGzKoHmu2J9bhAT4o7YFfpvAsvsKbykWVS4LiurXqtqE9m9TaLLff63PNfZcQJx2ioMSgeUAJX7",
  "key7": "2wT3STvgHi7Bk19nqMadfNwzhYVjiT44mx8J97muybNRbcsdaSLcomEtrH2H6oTkbwdAWwsUh6MrJwDo9mL16p1d",
  "key8": "W8eXjAXpbXfrEE9AKLyd1iFUBWHvox4kvzNPvTe8S9FjfZtsRUwHa9SFLq9PUNtFeAVof888w42JZkR6hL9KXHh",
  "key9": "4nL9H6SxBbTotZnwuf8thX6Na2MmnJxefWdzLdwCrH28LGX1st1eSrCiNjjy7yGd8LBPPwmbnU7HAFLbgwenWWxT",
  "key10": "4Eb5UP8RmREv6KqQ9AYGUpqtcnpk7PVQNKy3NwPYZfzFdTqjszmCLEgQRHx6mM54HKf3NSnntFSQwq4Jm2ahQ91K",
  "key11": "4A3pyHNtCGNkgXNt6Fyr9gRuo1sPy9C8MLERhfDvoDHRRrhgRpMkMkyyyN4Mqw8igLqZagHZT6hX5qgx9vcXvEsJ",
  "key12": "5n4qqJDDRxndhkVmWF9rZRPnHQSXiQJzg2tfosF8H55jrtCeVbvNMjWcdjzyqns9yr9Vb3fFsvkMF97EuaBgcWqB",
  "key13": "565h7fsXDYqBesqGyS7dwomNZRQxEWULmr28mdcMfwejbErWGMKbMje6UsmVZCT3jeAjCGD5DN5X9MkEjhopPJhr",
  "key14": "65pSmHsABEHGYJ8AC6SU1saWy2HZzAWX9mxqVHRugQoWjUqUPPEJQEkqiBGSvBuSTrSHWFVXUKwRCBxqfwFLL5mv",
  "key15": "4WZtsLYybzydvhceqJJgiCsuynV9GRJFqqwtz8YBsJoWZ5rhJ8qbHc5GqDzkZr7buidMwBAcYTV4nhPp5RH1DcoZ",
  "key16": "2qWcHfFRtYfgvMq23UdeJjDWipYSmxZ39sPEWchxFdGQWjgBZaYkYPp7DnMVHmZzsLADLoXCiPSKUPGkKcPvTmgq",
  "key17": "2umpjiZkEVe1J1mokrzQ996PnEh1o2HaNUWfhqMuyvbc4fU5WWecHRTtyFXrpbyyxndyDnQpvY3psSi1RBrAXhj5",
  "key18": "3kcdVaJyMnyGCQbUqun1teP69aj9hvw6MaVYXyf3qwS82gHHc1vfUj8ZSkT77o29PDXJW8Nz2QLvz1FwfHjtJer",
  "key19": "4BH17gEX9pnvr4zhoQQwaZZqHDHb1n9T2y38FBPLwQPUZArYoYn427s6R5JnqtiyGsWXADwsvx6CxQmMz1XwnTq8",
  "key20": "47vJTz38FoZ5zEd5yjD9fwxF6Kic6DSqW8XZmvgH6shiGM4VkgNkyZ9BYbqxqW2QQUTr1ehK3bfiMmYziAKYbKKv",
  "key21": "6VoBjGV7vJMH8GG7qYiXN8yp3QbtnPgWpEUwfkzX2z76euMB9nirngqog7w4NaTCAtFrc7GqSGyGZukFVuCvWki",
  "key22": "3BJMmCXnNp2BwB6wMnWofQYv8ngALH8Bj89fQhGjAegAg9Z2YW3VPhFyPAXT6DYghDbwMk8c9BT36QLdMkyRohAt",
  "key23": "22JKNUNEzKR3eRYoNsGz52iWtoCfjpLgwxYbRc4QUyBZCqL3jiqyZzjcadivqDRXnHt18FZ1mFJTbWNCqUw2peX9",
  "key24": "2etU7DDUEGN7jPDcDr2geEC7uFaGhH7uSqrVJuZcAThb7KdN74CXgUq3QaggDWzarxrjFvE314KJwdRYpsqgKf1w",
  "key25": "4YUqiqnVVERZK5G4CpPxxUymfQtmzSKHQmyVN19eVnAGKcZYAibejmM7KBgCcaEkzbYiHSM2wpkjVUis9mrh6ujB",
  "key26": "5dghuP9jEA2w7EdFaxJQhU5s5s3kaCwt3f5teKrc5jYSNFhxagCBYcURNsp5JHbAQtLxBjoHPxRxPNodbDDavMEK",
  "key27": "UuS2Qdkh9Cnr5M6kq4kKBWyfRCsuLknvm8s7wxTRNSinNCbYjT1v6pifP2jgoP9cqYJLsNqmzrwcp7wq3oDAF8R",
  "key28": "4XY6cP53NQ4Esn6NQLthsu9uabdCif5MKrg461mHnvqCkyrbTPJdzP6gWnmQ5CwPaAQtWaDrfx3GfBWwvzVfD9qV",
  "key29": "duMrAkuZMLeta2D3pDKexdBSU4N27zLZxGfc4cyPawLGH48NcUnZXDxGqLqU5gaepWTeTxgrPX4oJrjXMuCMEc2",
  "key30": "MFUVedgRKtjSGCvcQzeLNrsh1AAExvXAJD9EhXR32NptKoaMKXGQYDGSGGE2i4Bp2UBVGhXkjnRjksUrNdX4fQS",
  "key31": "2mdEktPMeRnq7sF2KNsC5Hfx8Wd4Kz3F67iS5zQjjcQ5s9biANP5Zw5xtguTuYgPNiyb5rCKyiyWuvvja93ZrvE9",
  "key32": "4X9y8T92btbbC3UWcjWcZZypf8EWTvQryfktTgdjm93k3dcnxN1UrwTffxqNBEWoXSbaq8uz7rwNpUXT4cWfvSjG",
  "key33": "1poFgcWxwS9SoNpE4XpG4zRWYQdHrQmyCTMSuokXdL8VjPpcyhjbbiqZQKuwstLnRnVRvPg8ZgUXeVvZ5NngVcV",
  "key34": "2Cce1yh2MXDwUbYcgM5hkKbDt9QdyKtqSUhvbCUiQ2nC6SN6t4785bPkk24L2w8ZfhKCkWpC2bxMScpypoY7Y1PP",
  "key35": "2zNf5xqp8LWRoQ2bh2pXaVcrPWKe3uff4RMyCzsxstWVSW1ewQZaRdyjJ8U2ZnXBTpXW7SvwWyE6m3CYivnzYX82",
  "key36": "4hUiUnWuhWhPTu3otDv6S6b6e1Nft8gnCRsdprBLJHm59pmteGPNy2dHEkbp8SbrcLTC8NANREyDm8axvbuccUXi",
  "key37": "2TvsQ9nVHTeXTSD6niZNi7bKY24Yqi6dFMUBSHxAkbvwLtEvALcfaveib3BSqJ1R7u32v6K6tkwsFP5H8MQHjvYL",
  "key38": "4TYpG86EKhqm3uy1YrC8NgH8dpEYDcpbNvkCV4uUX9GM1A1wExhaqPzjvGUgdcRWFGyuuhBMLQKq8RNzUMYJDEj",
  "key39": "4s4o58v8HyC9oTAFzmcuaiAmR78gczN62WMh55yQ8ucd5AKKzNXp4VD6oSHFNAkatep9W63LvZJuVYZfgDwocmpd"
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
