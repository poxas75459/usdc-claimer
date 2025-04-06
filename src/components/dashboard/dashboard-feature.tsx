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
    "3kk3KCaKpVLe8odYdDPkXdM2hKVPBui9AZryCfmc4uwqEbR8hUQvLR4vaLTF23ALNWBjiuYuNDCMaKWqFkHcs1vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BJAmPcWiFfBLsetzzo4TuN3aLz39zmjxVoywwnsPYbdJaScjZXctSuEVfyWyBEKJgF5SgVre2UKbVmgwsX9rVV",
  "key1": "4kLuKrxGcNubvQ44ZcKCvXNj5inQRBNix67vp8qUCAYnm9KvJBqWYfTpe7iDyvxhDYPFPMPz6Aif4jHdjtbtzUEs",
  "key2": "5iEmmLPVd2UExbZhgZESb37JLYyxE8V8hiyCGqci9krzecme5JNivjn6s9A1PUF8htTTtSLYPn6zYNpk91fRCwfR",
  "key3": "2jgSWJvGPoVtqFrYUBWo8pbQSx7i9zkZezW1JNKJC3B8SHSteD7y5g9VMuJSgmjTNWoRPin16P2vMTmL8uQVb8zF",
  "key4": "uuJF29nkkEdWRiJ4HhoPX3U9GMSM3yEb367ZVQbecxmdRLX6ET8hGKSEzadKLa8Rf83KdV834qy7sxgfexv4NtR",
  "key5": "2W2RSD8Cs7io9NMWFNPR8uAxvFuv2t1SWVxP9nT3YsEegF7A7Zm9MUhdLV6ENbURyKGj7EpAWv2xx2hGXsLq9EBx",
  "key6": "3Ch3bcJZn6i91giLn2Cr3JEqGVS4h5YzsycBP8XufhDztomMVwWMg3vx6MaAjfny2188qJCZHhdEiDjVgugmJ9Th",
  "key7": "49G4Xtyw433WrSpYnkb2mJ61VkV2v6dNRwRxGrdEURZBLWUqTpABncCwNsw7TJcrgZk7Kzz5d9vAxrzU1twvgKx8",
  "key8": "paYiTiXZL72F4RWQC9fRPfEaY5urtwvvxQsE13ghyS9z2SifMBg97g6SXDKr2bQh96mcgspE3w74g9kPJ89e583",
  "key9": "57H5rKr7CEBrmsfYmAfpq1Ev3PTyRg5QXm4erRzNY4PtaAqTeGYw4v5nuUxDu7Xi3zWfg8EGFWX5nWf2mjqynfVq",
  "key10": "24GhbNXAuubjYqNyJmUNJ2tdk1MwXASoUPxPPDzV9YjQaeE533vXzjg9AP2bj3BwkqgT7W5noVEU8DmEgEPkSJCp",
  "key11": "5WK15NVWT5RShCZ2arhZ8Fbv6sArnysmq7A2ybYw8s1zHdnLP41F7pBNjMsSG6ZDj2PBaoZc6SxMe23dc3t4Xjrf",
  "key12": "5LwjjjWRVegfMLW6ZdEbFPgehMjDEBbmVgJ2xrzHbtVG59PM1q1wESFpPe58G2AAYscUGwMAhb66Kna57zJwCJYY",
  "key13": "2Xa5H5tkzNAcm74fsieWDMVDTPNTKJVWVdt5sxsC3xuoR36rpngxZzfWKBuZpsfinNEV3km9745ZjWjEGnX7HY9p",
  "key14": "3c8t7X1hPvcBCFjsPbXzqwsLzqWLdRuWBTAdN1Dt2ZEULPMUJozKBWDcAH3iAePu6FnKqvfcnkDWkqtVVqXU8Kjz",
  "key15": "ExiTwdjpPitbdoUrcgfkCLBAa3h6wx6SnUu7tJ2KBJznP8EFMyzcKUgyeJyb4mEVGF9kt7SDydLnpepF9p3FGfc",
  "key16": "3KFKsAsu93uGZQFpFuKr78icPnN9aTk2vJgeuJfcZderTdb4dxkpph78i2UzxF9aaXPzDnm3wEbVS5nQ2avaZkBG",
  "key17": "2Gn3LkVoNSLcxD5GGFKbkGAVPB25W4j4f8XcbYnhGPGk1KGjESapmMim7zbgfaAkkMcR9y9XpWvGNyihfcmZPWek",
  "key18": "fGRsvXibYkptmeu5KtXfrQNuBRfyJUcFpvxtzvr2Cwvd8uxhFxhZHfrjMA4iWVY1WkN2KkA9yiDqZi8xbxYgDT9",
  "key19": "5v19GiwGihM8KP2bVHBrQZJurAcXQUEnGvfj7iru7fY9fNgnNCPVhxErfpSseXYizCAdQXb47XGKBzsGy8irTgLE",
  "key20": "3JvEuMN3Z21pjoRWLiSADdQEvNUZM2QoDUNoUu3Hrx6SS4ifyQqCiD5wVcTUQFAF17XHTLQSny4ockXksu9GW6En",
  "key21": "64eWfkjDLoC34qyu7WKPPn3c16XWgAPVFs5TXtkckDBaXX8uX9n2N16eALgQ2UH1hfg8tBkZ8awr2WhqCpaAa778",
  "key22": "2GFuRRRFaxhfTqNMdtqBbQv6vomGYurXs2C8TfBjnybppNMjdPKkQ5bRtPnR5bszadPfzRv5MxTdfMEPdUQTv71d",
  "key23": "2cVZF2h7h1dzT433TVJrsyUQYaxHY4yKfZx6EZB4JrsWbhBxpmgQNEtJ41FqpGjHQZ5xn8dRWddyMHBoPfjCtxJo",
  "key24": "2i7iToZqazLDm6TJmQW4e3d6Zv1Ay1boTRTZnrWZ6ZPGLhAnywfEYnCgqfiKk8mMwvhGXwxQUEJ3dyqnxupvjina",
  "key25": "3WZkbjeM59y3NUpyvFXpySWq6n3ngNYtnijMJUHnSm9k1X1CbsMW8m7GLr4GmhTfAZQxi21P2k938YAvAB8Cqp2K",
  "key26": "5XVk1q6Bfr3oxxtgGpAfEtAjUnbTDdKcsUJHZGsEqjYZje4RF94KCQLRKyERugxv6sVnqbhKRhwpZ8wGLDrhseZ9",
  "key27": "2X4HmnqmaQiMU14c6Zze2MwGDnLK5qCmo4PAfGXHe1SBk1fLi1B4hTDvU1ogUP1wsph6Fih5qVJGa1qi6iiwidmD",
  "key28": "2gPUc3MvxuS1KrWYf3afRJmnHyNZ12BDyT8fs5YYtVv9FywrRrnA3gqFBE53KQju49iLHM2LuW8fVM1AFAHpTSfv",
  "key29": "2kHNCnSq1cV3zatvAz89ynpxMWR3goKxpjwBk2wH4CRsFxtuVbYqwVkptMmzEpZa2ToUoBmwRuL9EEU87is4U18n",
  "key30": "2jZSZxFNY7rax92K4xtsMCnLfmHSYeKDTHYU39GJt46JjXrzNgbCkVnwmdr1TeN4ZZcG8XVvRBsVHac9oaRC1wZX",
  "key31": "55SWV2s3cLFTNWXrHeQ8oYHA7tvTZdAPqVL6Bi1GonkJ9mjcbr8VHkBLsLDLKDyUMTxJriuo5ig4qcAzKxcZSksZ"
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
