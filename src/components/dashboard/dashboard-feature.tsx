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
    "3eUYjtSBUrrgNANZP7pX9bwuXxwpRzAGtvEgnKU5BsVQWVxHJyrEbwM9D2BVytrLaFYwYP9A5VRHjyZBbXqWeCAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfb8Mqjaq9iGzojhPNn5kqaXdKwnNRQxe6kUBbBH2xQz8pEqcDWwtDo18Cz9d9MkpqzHUiZruCAAaZ8LF5jhF7n",
  "key1": "oy6hYJ6uRzQGDzsjny21UKi8xmo6S8efDxoNxTbLUsFY3noYqDa2ghUVu5mF9uAas9iHsxjWC496rwTvQj1k7yY",
  "key2": "3ANLwJX7R21iDCoen3fzYKNKTqdVGb7Gr3WA3RktZ8v5gxRFrThzUZBMcE1ZfqHTf82vtAFeCkUSp6AUqBx9eBrh",
  "key3": "nbWUH2mVCwzutXdafgwsbPgMbbkiKyxZuBLU4udjysnbKLsdpVSarcdG7PamJwHVzwXAnYW5MYS7h1xtp7aBeg1",
  "key4": "3F72o6q7TUKmt9uyjKZj98AovFrLhdYgo4x6y3X29WCbxX83r3irLkooMA8bgQbZsA8sCjPPSFqS9r8ZQBwhkKPa",
  "key5": "5nS7PrxfMmVXorVU72xZpJvKivkU1XrRDWXKFkH3qbfkqahfBW1vHgvWKUy4xSFFCz42t1JdQtUji8yBsx8xT8m3",
  "key6": "5P1gdssQyobQNaNFuyjqsRgjWa6tcNkCpH5ZqwALeqTfw8H7zdpnvp71MXXRzQf8kLrYKitko3aBdBXQCeuR8aPs",
  "key7": "NhPndE4oQNQzaVsdS69GuZ4N2PYdbHC9wJ2auhb9ZtyqGB1vQ7jU28V1YPFv8D1MSKbL8HPY95NnmYRh36JChB2",
  "key8": "3Yx7NPaf1wwJmwPXUgkKivYBPf5CwjsUicK289mv6kjYvBcoS5S7sKQmcX6bQYcRNuAvsqU46hWQNoa4RKWz3E3e",
  "key9": "2joofhqiV6jmkuKQncHhdRoDm4uQQCKegjQMyeDFN7wc8m55iXJwGVhccaRrX16MYpqNKoZBeJWpVKE1AN1QpAo5",
  "key10": "pjvNhEkVhAadjzYDLpM2nVDaMbVxko5oLSXFaHMbT2AQQYqvDpvy8fmVLKy9h5VizasckFKX3oZUwugQGewR6tK",
  "key11": "2s5ey59i5VAiDQwUJCyBEy99d3thZQRAhhHFMGgT3HdXA74voHYQ4snCcCpPsjyASUthMbeUHT1SVmZ6ZQGuZuH2",
  "key12": "5oAW8A5RFaDuEK39ztJrUmbtZ3yEgeVzwJHcj79fzT4S621oExPZ3utHcN8ZS4SghQ5LFxUkSYUrwwB8LbVBBUmf",
  "key13": "3vbdHLSexZFqwcLJn1AwYBU53XEhiwwaU3LkDyynnyATKG9dCbjFEMh9NeuKW3ytTYNCJFeBUjeEtFMoWZaBe23Z",
  "key14": "43VbrLoS3DnyjWWdWNJ9uBQeCDJpDdjidMFxkv3c2YXAiPHR4AkjUKNWhDVkXFkR7xqRGQA1YYXJCKDujv51HRBP",
  "key15": "36s8L2RdQt1d1W7SBErqd72qfgVSy9cLP53gG5BvUXf5ixKA2rpAGF54TbAeXgTVLpPUTNjFPFPgXjE44e5ydLN4",
  "key16": "XPp14GBp5251cNKwP4yq9rWWSa9zCtTjfYQoH9BKpx19stUus7EGYUkR8X6FHd1dqfwSLeSBo467zhGYLamU3v2",
  "key17": "2DJjvA5S5D7RfVtCX3AAFx9YpaavWGF6NnPuEfUy2CVqwc1S7u4qmu7BQ7pMthm7weUsz74dqaY3T8JfAuvp9aNV",
  "key18": "3yreGk3tFYikuCdxjBH2Trnfu9Q9FANEtZjAcxortuPCXhBTRHS7A6bESCRwF5xqpiqEEau6mFgXCtxTgvSEDsQE",
  "key19": "5RYGkZq7uYw3gxq7uhxCvy58BkWDtDc5TpKnvFPsNB9AcW9av3msV3o3TFofMqWMdG18wG8qmYjHtMjDbdnnFDjV",
  "key20": "2oTdNBhqesyM73tMgckVcraXzxhKfak26tJsbe8b2YkTNQRREUeugztTNcP3rhNdPxaJYeyhjLsRiZ4FmoqDybw4",
  "key21": "2uB1zD8wKf6pPELW95eJoFjV85vZMNKpk7YnYfUHqug5jqxamVtEuiFCywBL68Q4fFMRz2RthxdGjUZ3n3NURXvb",
  "key22": "mgpAtP4UtgVL8VuhYm4BLVrxpRa9vfBjJAvswd1fw5TFAFdLB4cacnz95aJdWDhMYZqS3GvEKjaHhDgrovs6poc",
  "key23": "v6q1ttRjeBda6rDdSrMujhYUsBtQMnXdoWoygXvqoZ7LPm87hrKPcSqnhgPfj3k2bAL7c3GJychBUSkkbnhTHGg",
  "key24": "5SvbizLVRijEntq1uB5zX3VdHxWEAx8YM9Ej6LcK5oV9VBT8UW8kK9UcQLezVqiTfKFR6f4Q7LCwicaMcNFePBTN",
  "key25": "344qitdVpY1f4LXycHASXKM8L3bnFEGfmx7nxNMRpoLCtW5wpTsHd9KCeNBMn9Ni8nr78JSe3mpXrZdRDGmSNtvb",
  "key26": "5sA84TVejLhE3QrFCT9RXLBk78K4FVk2ra4wC6P9NsxXyycD4qFGWfBkvFVK7ggcMEmbZF9WRu8ovbhcmi1uNYA6",
  "key27": "VVw8gK14Kx2Hvbb3EZph7RqY6AoyPe8aSvAGS6bWoHRtG3RyWcYJqjiBU9SYtc6ueMCUTjZfc9LvCBVpZHXvvLU",
  "key28": "4fAHrCKgsfg1G1aJ7kE4aTfKK5jLsCHJntAgvStdkqdbNaYTRES2Px83Gg3ZMpNEnHdMJrbW2m7gSw4RnqD8cDFS",
  "key29": "eutCs3kSdAgvbjaCfCnjZX6RnN1RbMSswLwUKaueMmoFtrNAeqXhZ4WEPWUDmeocLhhgm3Uufyu3pW9gajKxXZM",
  "key30": "31xrxqA22GtSYEXXSmUcQTdMYCKFfk5j1X7YuWBoKt64rxpbzQ6aZMeu6xDDVM5ebGCimuTic3vVU3DUdhctcojq"
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
