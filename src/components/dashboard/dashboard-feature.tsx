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
    "5kpy9XjNsvuFwDe9D5bfDxRZZui3kVw3Yoe3yKW7r7A5gQ8gM1xbkZzFyEEQiUzK8nkixWU4gNYpWm8jYZj4jpFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U423tiLDz9DWGCiEYRnG4p4Ky9hsgRp8zh2ckcvBkoPXL3PeCp3dzCtXib6Y7PHDqb9TDsabPtmpkAetghbkACF",
  "key1": "3vm5ysMAd4pYZ5ozHM1c9BJVF9bHUi5XJWhDawCeDhYnNdnCeS1fgxXCAN9srr1TmwkpHMV5dZVRUeLUgn3hehpu",
  "key2": "3Ur87tyebTkgjcvXbzCcYG6RjMvvyA7F7DqfytfGQ4NzHsdQvAMHAtLUiy76aGQAShvWjw3tpKjM4o9GzLMdYZYv",
  "key3": "ey9nEkwSUU8X5aDXKQnX1oa8x238qXP8zBJ9TjHfHghYwmdXsHjonLu67e1KVAEZZRFiZJgvPgJkXKVuEF2sqyk",
  "key4": "3FusLZvwHpqXsBzU3AtP8Rgwba3JqwZouiC22ace2hzcb3jRbMnTRVyV5Fa7ExjKRicHDevcouLKydJojd3T9bHz",
  "key5": "3A2ki6Q3LfvQhxB3yRkscM5K6n6H2paUWesnf8qH4nC9Qsxvf5ML8nyNQ25b1hgJ4wrn5jA2SsFYz7t8mkXjUFNX",
  "key6": "5g5YjCzscjjBHVpr2ujquoKAFktsxXb5kinRYHHMXAUYngnAFUHrAzLU879eZbc6h3UWikTLduUzYRXT4am1xvox",
  "key7": "4MreUjmV7QG39FB3MBvjH8tsspaCEyKuF4gJAJu4A1iCi8XshJxeru118CvG3ti8mhn3FHP6o6ZGT2hrwhF7nEdc",
  "key8": "5ZnipnFFtG5nm485xc514nT4pPa2iDgxGCxih7X4QMrt5mMcHkaME7WXzWQzYRmQ4HCkPg7w4JQWRbBonSSE8Wpb",
  "key9": "oypKeXHr1afdb2bfZV3spTsTuZPUYr2cwLt3jdfyGsc2x9GsxniBjkavDnGW6LkYnHrpzPjHKSPWxLCVP3qMwVs",
  "key10": "atVMFzinFB8PetHrNDQj42GwUeGReBfwHuCeZKFx3njmrJHAZNTahy1X7EWnxCaNfedy2eJLFG3rDnS17CJwF4L",
  "key11": "2EoKuvPBHqjcvsZdh4Z4L9j7MFxySH5VeCVgvpnedpPCELE2VMWZaJhrpvpUqDe1yMXN5E3rH18AjcEXL2LjWf7p",
  "key12": "4J1AenM9V6FGiMYcE1Ho7vjsJ2T18xT3NGZrSqYwaF1ZGRypue3iK2BxkYXfFPn6cgTe2eTGLwBxEHaJEB8r45N2",
  "key13": "2bCYFRMJJSrsBVE3xm9S2hENYjTer3QZXVMVack7WkPhAYBDf8XbCi16RdxYACS97MP3cS6Nw9gdxmTYqhkEZM85",
  "key14": "cyPUtwZJYUnv9XqZxutGREeXiuq6Kpbi6225GRwwCU6PN4xvCYXYQ5yRfrUv4zCYx2uMwtMy4h7sWy4bLfnAZ14",
  "key15": "5bzEn6SP718HQYDuTPJDYybqyW4mZgcVjduJTrX8QQjxWJRj1Z2RLVQ7wHTC9y1E29kJx8aELtWPs9g7NhH9WGTB",
  "key16": "5JS4eWYh2KGUnABzGuvBPkTBqMpFPZgf5H3Wh6u9ktm9yBfx5F2JyLEnHeQWf46KeJh3AzefsAr9NbY4jtZBtxou",
  "key17": "4rBRWcX6N9cyo2gbTuqjqfbuzTknJJ5uj5mP4hfH77vFFYsTYXPeLMHWyYwee7pBpEHcVyFfTrbPkgq6TPSEVeBx",
  "key18": "2QM5TqByBF1oXjRCrJw8g6saJ6ikHh2pZ2CyezGdKxQHQ6hPsRxwF6CZWCBWcjkdjFSko6aeKvWPhe9uq1qb3QMp",
  "key19": "5bbvQqhoeBtniszw9mK35Ea4Yt7mwa1y88FpKvMHpozJjNqnBfAuZ4McwPzzykVScJyZeS8bZ7pCXmHPVfrD44bw",
  "key20": "UZgxR7RqiFm2fj2X8A8xDZUdkh8CZHeAAyzgfmoGdDFH3Vq9MedF2YJ3YswZQ5FxHAoc8mxy1JH4t817PfxjA9e",
  "key21": "2ou1VdaG8MZxaZXBMjhy7UnrMP6ioFnZqnRTcqtKhg3DNqkZHhJprkN5rsFqgGbyXDSdSxiWhPmCRyGWrHMNfb8i",
  "key22": "E2waCP9QSpynUJfVvSwB58QMfmh3qJ5P1DRDY4ABLVoub6scNAcfC12SXRZG4g7BYu2A4qRxBKAbZ3JY1WJh64a",
  "key23": "3LGJkcwMAmypKymGrUUCqrkpiAjBVvdBsgw13iSBKqUk8JKLDVcRPYkPGHKCDCrNpYSGnbMGr3afR8Qav5GxZz3N",
  "key24": "5fjzguAoQsN3Lw9WD5qKZ6drd8GUxyHPEXmyz6oUmfeFEt694FhNoVb8tuC67hKmbrfgYzqeaiyAmoxEjNYNqb6h",
  "key25": "5i6dKer9Sg8sBLD6x6Yv2EaDjXeNh48HP6X3qSXLrp2pKYrwakEZJnCJvKNFHEZyk7HgNM6vWUTbpQoTbvFgLn13",
  "key26": "5y3md2tdS62pNwn8CNP9Lea2CRyVoGFYNhPKEZ65rqychnkBZwDjcGZQ6gWmeGRosvvzt15dGeqZWBS661fp3TnF",
  "key27": "4eRYPahe7rL7tsek6YVyKzFXCubLDuKCukGvNQPEM6oQe3r88orbqrs1jYcuS58jTdLjHhCVD8L26dieyNGAKchX",
  "key28": "PJZa7kmYCfEyWQZBz8rAJci5oKUq1Q4cj8V3cLXKRTUcDPpL68iqoe9XrXXrVPwASFfxtSFCdJELqeJ8WRN8Z3d",
  "key29": "2P6CpCgBDfpuXa6KG2wMwyC7JDbmfzyiPXcFLtBsdfs8C6wRqCHDz5ZeWrE3VZSoPpyyWv1i3JPzaovBr7dJFc1g"
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
