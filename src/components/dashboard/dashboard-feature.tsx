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
    "ZuYcj5YRSjQ8zUHtxCuCfeyHNU8dCK4ZGZdbq4NUt1eLazj3i4DMtVSiFMvNBZ6nuS5qkKtssnneqE58x4QN1g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duc8m9zdkf3agTYbRipGmnVAAwox9N4BQezcior8qwkhFT9Mzyr44JtM2Xvr4ZyXcczDAZPv4WLNYDjysDWiQMr",
  "key1": "2BXp2zKMr9kGHLdwzL8CPkbVc66wcJ6NEpCCvVCKf6fzgVLevh4CEc1VpEVMZmbNm9WXysN5tYnvDkpwRvJPNLF5",
  "key2": "51Mz3YefDZrrtEWtfdcXkWRrzUgNHAgZAkekmKRity8hMYeXJeCbjnoCXFfE5ruVsC8dAfAhRRqnFM7Pm7wNEmnE",
  "key3": "2FZAgeSysQyYheV84KPqvjzt5Ja2FK1pv34mMVt4HeqycYNdjuwUcmeSsKh7vW1PSZiafVs9gLrFS4zvJHVVrzZx",
  "key4": "5fNwXBETYhKwefX4kJnuFcxveRQ28ASGZ9WRoDyFwtc8ASjpg5iaYcPWv9p3Uf7Jc7J6okA6UHay6MaWWdq4MH78",
  "key5": "4XphieAGPfG4EJrrjvJ1KPQpNX5YnkwGTmhtMntYi9tGnAmds1MfZ3uBju5HPs31WPSnWvHCDR81GbA4ofF7BXEW",
  "key6": "54RJM6egVrWS9rSJJU8ucTVcpsPXmtEuankJU2LaL3KYEtKHQQM4RoYpj6Xrj4XHh757GXmANoA9cxrwwh2K4F3n",
  "key7": "ejUUjohGUyzBWo4bxGLkKPLcA14CwBqoKWpmR9mCUx71aFYawtFuEYgihSG14aZZSuURE6c5AjbCpFFgETxkf5Y",
  "key8": "43JgiMKgci9vNN61r7W7QnrGP8J2Dp1kNMv16LnVEYWztoHGwHtAcyG8aTQFxhty5YtdfhDrpzPRKNC2EWumfh65",
  "key9": "5PEzWKtG2VbDW83GD2iYTYe3c22YZj9jvW2m6WtqnkbZAZkciD5TEaAfG6C6Q6y4BfScDwKmtbsSYLqJyf9wj2FJ",
  "key10": "3Ek9M7Vmnz4Teebj2breaHXLHrJqPxZiuam7b7k73jjnXGApE65z89HXpY666enVjRCmucQC3PJvbCzw485porui",
  "key11": "4JAfxC2TDkvRcDyBTv3jhjxYjBdFrjWrRdvs1L1RYXjr8pewa8wV4fuoaaXKq4KPQ7xjfxi3Jn578oS5p7csJZtL",
  "key12": "4xWe8cbQHkU3JBEQNHe1kaw8BderMZ67Us3TFjtV8A6oFQduDQryi3zmaSAEa9TYCKiSNZ3fYtgmXcS4AM7s278",
  "key13": "5aDFN3SLdgnRsMWi6jgzksJwk3fniNSHvyS3NUbur6EPKkT1cw8E85rBNa5gWirk5KUc56Euv3eeMvLhP1uB7dgU",
  "key14": "3HxdvuGRpN2Ajza6kgwd9PB8LREVpX5A1XMywjSzWNgVTrospLiFYmiu93GTB1bhLQoiL3KrkWk8hAWrHtXaZFcC",
  "key15": "5dGrKwLHFphQieRcC3pdEiU6Y89iceMABvzCCuJAUk68ggpjjxi5p78PwZooiasmQxbBS55LUr1PvFwT9su7A1XE",
  "key16": "3RxheqHrLF7WvnbZruWhMuXLDuh4nunuPdeyTaFbgGfRe2ZmhiBhvgErSVrJWavqs3HSosh8ZG7nhoqMsr2jvrgD",
  "key17": "3ho4MqHyEUw89iZzeTmbcX5svtvxiUrfkwvcet9VKjfTUAiJBGroPzjWUen2HWTkTqQpdB81LEbJUkhfRaJwWg68",
  "key18": "yyhiyXewBEmXdQxXtrwsiwH6htN9UHJeoYbDYkY6rdp54EpoFLGzeNkrttsMLvnsdFNjBydBpCrUjr6hgwRZHyf",
  "key19": "3LEy7CEbCKWEnXcowgFHuLDE9SuEWMr9kDwxHUXF2FzVMxaF8dsPFtDvQWrQii14kbgf5NyfbK57jDeBaqiB81MU",
  "key20": "KukEzgffe7PKUeb5C25TBBPY9DbgVLnRRejLCay3LrdQBgdB7G7c9wJVjcdhE7s37segXyoS6tr6gZmeKNFe6mA",
  "key21": "3r6DRJ3MhrhNBanUyZmBeitCXguBSHQ744C34Nh5sKdGwLf8JpjRrQqdsy2s4tgCmbzpZRbfQrNTBmbTuZG8urZb",
  "key22": "3P78i4S1PBctRc1HqBYMueXbZCQ2cP3aKxEbWB3x6mhD9Zrdqyf8EQ9LBmWakhf1jouSoakHYUurRXxrTDUySpxc",
  "key23": "41UEgCS9yTH4D8TV9rQNBiUQTG7RMy8Y3oXJ15XaFuBnFuXHBJLKyq6UKdzAVcZyWjC57gQs1SayUJcAY6ms3kuN",
  "key24": "3ZqnPLqAeK5ZM4ZN9XCENmmSTCMa4iP9trhJ2tko1728JNaRzFXBZSEqqHQzs4mbiEp32eGs3jcYGTp5TtsikiGr",
  "key25": "4s6dv8fqZ15xj7ZdgSuaJpx7u6DM9oE2b7VZDqas3TSSnQksjML693fat3qo6BnaXeF7VV9Q42QPhdoerrLoBj52",
  "key26": "2PK9SptrhESJjq2Y5dWjyN76U1CJCbaC1BLAFeM2bjgBL9QrCVUBZB7qzfbPJ5713obV5uNrX44zJ23Ji1rRU7t3",
  "key27": "27jn1idtxotaD1jhyeptSz9FjsVPcUzoapsTU1fKoM5aAEqarHRHZr7Ewv6AbLecM3PGRNBuDKkqjrLN2qcmTAMR",
  "key28": "2R9nvVjkRHYoHL9p2BcPUAcJ1c2wMeTJBz3SzuDxBFCMNyingZ6wtnfqe9fqZ8RwqdE4abkP9K6XnA3NMAmXPyok",
  "key29": "Tgf5V9umtHPiMcv7wuqVVnSR3cVnvXW8XhUkV6gHJd7GGbNtaZupBAaUo8GYzV9r4qMVWqSAo7xHLGo6zAQfaB2",
  "key30": "2PVG3BhPhcYMdnAfcSkNWYotGfXiGQicSpLDnbsJW4AbzJfCiJv8UziFXwFBZvkjifFMEx39pWqLsBsDKLH1fEwA",
  "key31": "46nobeo1tQnDHbQw69yFakaEUYLFaDVV7CbHqxESmFxkmJSZBt1BZbma7qgSLW5TeYak1LGWzCTK7J6hwv3w9GCM",
  "key32": "5yk3BMb7nrpacyMY3XtuPAPCHUpXb3pr8tLmGVSC8W3oxJpF5DBj5sKsTmV1sTCrDmYtrPjBBWsPyQvGjBbaT6uL",
  "key33": "532G2Qj2KyMgjtVv5TshRwRmHivWd4Y6kkRJGHZ3KLnzrxGP2eZoz6qs4PhgdvrRi4LsL1w1mes4YXTD1LSCReew",
  "key34": "42wE2R5HRQPNqu28S7DRVcje8uWZsfmxSsQugkE2qqdqoqyxFzNoPe2U8yLX3xPrHuFpyAXdDL6RadSfG8QefuJs",
  "key35": "x8Sv4QMYENXsvws5VwAwN2aNmHVKVwRRSq4perzhhkNfYewYwaiQdoFtb5SWeujLcouDDVJ5SkhPwQAbqSNC3iT",
  "key36": "5QKuJx95zEqDb8wB4PFZkzjehAnVEYpvdmhFNPqkDD24yKEY1BKcUNiziCg56Vh252CUoa1dsCK7uffd4SAgcJEJ",
  "key37": "4XegYJKrnQGrBTsLMrHM6uVN7tFqahnjfao8mwL74iqKM1D6MEhm4HsUb8QDNvxxG7YpS9TYmroydeKGVQvt9U5G"
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
