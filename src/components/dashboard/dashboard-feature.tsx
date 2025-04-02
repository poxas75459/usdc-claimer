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
    "SmJ4vjyFEjsQ199NSUpA5buZJKfYLH6ajcS74RtSkbtTTtjYwiDrpZP8bgRjVftBvPaqYu5f67xK8vRCekV9Ems"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hasViJ5mFQwSd2YYfHF2FH7urPbnbb94PRK56sQjyi1U5xFuLuqMGz3yiaUhwVQSLCxAySyBF6uS6jK6JjWsv8G",
  "key1": "5fGJiaFMQR4rn5b6wFce54HDuyqQoWwFRijM5h1XcMGp7WuYA171gyLjadoGwdUDCdy25XvhrvHdBmpuyukeiz3X",
  "key2": "5riao2ciaD4o2UDd6sQMXgYuEDPdkn9c3hQZ7jcVY9X5Zsvx8xK6iNH4vjP22HUzxbWtCr41NiHT887pQ5JpkKNF",
  "key3": "52PX1SXTwgSbNTb1bHfvgeTt2XNFzichQh3XPKTmpfoRTZRK443FXxmdqnAkz5yWB6scQkHtB8KnEeWaK42wB42q",
  "key4": "59Y85WpEem7SMpcRzDZmW2FS3QqNRZCCAS9xgGSW82AQRmfqAWKsh6yjvMJKzcp5G8Z6aYEUWbxRFuLf8arFVbCM",
  "key5": "4fC5WD9ygm8tfh34mmZY95oLxQJmW6NspMvaRetSiytKrhaQhbw2a5dr4TVEjewhJA6Bv5DTvMKAXJWManJtwBtY",
  "key6": "2mHjQyCKAmRj1rrvpCbpMLo1QJBfRDdvH3uiLTNfYAfyHSYzJC5Gihhs2b8o7H3Lo5Brb3vhJXjnACEQADTUSi43",
  "key7": "s5h5KoB2Y4DTACuMdPAcDzLPGx4XCJnaBrE79ZaQ7M3jj5eXXxFhU4YGJjUSfQGG4Niti2rpQPic1anDzqsvwAx",
  "key8": "2jXobF86i7imQ4jgoZ2KwjjzYVFf5dXiiMjHnckGudszX8KcVYuox8sgF6y4szscryGHK2WPLXaUpuzxjttPmokH",
  "key9": "4XTXnSLVNtTYMuW6mdXmV9eEGMzFtqBMC3EE8aqmabHiFnBCFR7NWY5bYpijixayhWKm5of84cJpkwW41Xnb9zUj",
  "key10": "4dogsPqXkBo5iw2L86ovqgtefMreFERMyo3ojp5Hq4PMkb6uhjTh4CzYYcaCteSrLyBYTPwExXzjhUurKZX3oN1k",
  "key11": "3rhHF4zJbiFhubNeDnfviJcuox2sfbSCy5iGkysgVxRHjx7zhY91YpgGNoruv2DUPYMUsuLCdwuqCrCgifmLLMmN",
  "key12": "4gADC7ayMeUVFqpe5HKcx6EiYCcisF7SDwXoH2LnAvN4qqWnD1zDyPx5ga8PBxr5prBLwByEVZvACfLdQEHy7Es1",
  "key13": "9HpKPLogweGYYVsRmGuKWPxJaXbTxukakpvmoHFAgV7aQzb1rcumroBnXF7s33oLfExp9dxKTysx3hLHjpkqNJQ",
  "key14": "2BPSE6iPcdeLJjb1cm4y38JR7QdKEAEccHfXVMxyxXAmadBwVjGSCQYccqQHnsa8sqHhN5tUWNUou7Ya3pW13tPB",
  "key15": "3pR6gM8YMCC3teG3UmgtuDGHhyukj1ZoAZT7bUcjjoTmSRaZMNieCVPj8ZnSMdHDRYabe9JciGXie5LWwBfbS9hB",
  "key16": "3GekrxZxGy7eVhCT3cfZtJADwLDHQn7AZzPd1ww6X1tnXUWMLBtTsjdhpbSYX94vibuTq2faPoeugex93pW4mAc1",
  "key17": "Y2QgiDkvhkEbqRF9KoS6jEgG8cX6xaoUby3yWQbfbF4tWXrFuJgmBMTRgfVYpg3AsqkkjKUg31ynnPAMGarpvnH",
  "key18": "DrZCDXw2Gz5YEV3rgziikJXnTceArR89NwcXcKNXn3NAB2XwNkgVkuQ6eN4xPQcrPniinPRN43JJ6p8voPG1tmM",
  "key19": "Ar4LRrygPeDxqffUqWBusvfQmFxVtV17dwibQEpMLjdW7dJAU5cMUtK2pro9hNix6hRtU7hbBLb7LyQ6yexS4EZ",
  "key20": "2HkQdGUFqya86txTk4jPmeDWEWaM4GoEhBVBLMufjJG1muF8LuHbRnuzdn6iThEgg6FcxC4Z8beQS6iJ1meEHbhr",
  "key21": "21V1SuUJVAgZZfGuE8FuywkHmKkM2egQxzbgnukY1PPt3qzx7UdyPYk2yJtgckcHudz26qcnXLSM8utp7YAn2LcP",
  "key22": "4fmK7oGReRj9rbW4MVyVZmnmb6YxHoYqP2vSxtcsTjctwaBsY18nNfKowWJV48Dr55YXzVhnK9tLhLSGbioFS4M6",
  "key23": "65f9KcXgnm9ERpdjkzAWATGeUeMkJG7AHTXnaTiNQuYPRy3dBGbX3TZkDP4NkemFEyGYrwvTewSwSuEZaAvJNxiH",
  "key24": "2KAeA6qLKYT9jXRhsmGAhHx8rrgQb5ZLCH2r94imYMwX485tKpZcVF3xoymPE5gR6RQB5xQdxJ1p5GgtV6Z74jK2",
  "key25": "3JHFoDLHkHJ2LcMavX9ApUT8iM9WsRjceA5Mr1JJTccp8sLLSy2TchrkYAhoDdP6FKi92kSnAZwdznKBGBmr3Fx6",
  "key26": "cyNtFGWLVf5j2gHeoHBCQf2csqKa4vJNtWm6WreVCg5DsY8i8ZmfuyzTzUJPvmvMevvAY8CmCZWfVuocnTBBZr6",
  "key27": "4S9PVj3iSKuHn31UpSso5w3SpUjd5cceGZ4pKYL77bmPBobH87yGoWmkV7FVPC9W2eVJooUGdyugqzr6FcmgbfPa",
  "key28": "5CgdynqGRBAQ3y1pkUWrzggS1pjRnft6DCJhk4te4MD5LzwQnWbsN8jw2QKWJtERMiqF63PezVDiAFDymWaPj9KH",
  "key29": "3QZUUafKFWeu2GrHc4Km4S3afwH84jTpHsXM6SYcNxj3R1TzvsCZNSYxQY6Ng3yAsJqUEyuEbmmtCdzMxR5Ddt2i",
  "key30": "4QfMDWB39QvpCgnPnksCioAV8bHc4qh5JhWBcbofA2PUsW3kceq5JAmRtSof4uyfTYdL1JG6ChRyCYqLAb4cv5bm",
  "key31": "5DCUHQqXQQr2b8fsmyMfUdME7gq2bTV87NRchu81s69XXESiVHWkxx9RjvRpr56S4oepR4Yobm1ThRVDUx9Xd7n5",
  "key32": "5LWGGqSwdXwixRxpFoL1xJWnj9MWfihCRs8dk7WqL9Spvg7dRzQFamCWszfZd92R3x4zrh21FkK7awTzNXyUtSJH",
  "key33": "46DBZL9CefRLRKVos5gbeZrkjCC1emNcasNQgJiefXD22cZb3xx5vUcSmBqyCjo9crArgbwho6zPvVNRoCKpGXQf",
  "key34": "2FBezLSop5FNY5Gxs4UaPyMGhxic6JXJ4wem9CVY29mi6TW4XfVicKE4ESEyDn72panmQLMdVzrkjrRqWct9N4v5",
  "key35": "zoEn3csTDNg9Q6PzvV9YLJXZV6B7fFs44XfLet3QZrot9Ruy42twEpMh1Zg21F87KRNAxitebmYKyqsf9z4PT89",
  "key36": "3L7x42e4yGX5QynPS6AS8EEm5n7UthUAArmVEaBGGm3b3LyeyuAE14ACzHUo5kcDGtqGY9hxX7JLe7xh1wKx6NFN",
  "key37": "WcVWsw2ovPSwti3KW82qFPmaVGKkTegXkkNa6aarEZwj64CV1KizdZTDMz5W4Xs2ChDmTnvEGp3M61GSoB7FVng",
  "key38": "3gBmXL4qu327CPNUqbLbbFJLoDQmwAwb8e2fmfNWUCx58Wir1yzxzuFHp1iPtemr9ABxmdkMehHcLpcy1uUtHjYe",
  "key39": "2LnciUo458WckfjAbjAGQJbLpUnaWcChMcwejdadrGmQ6y8HuqBDKw644gHskg1TSjQgNVi67iFTZimbMBUPe2eb"
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
