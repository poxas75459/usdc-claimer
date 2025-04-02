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
    "4rDku2tUHjagSsuTvkYvGjLj2dT6c1WVhkK4KQhDpyQ5mg9cWHn29XFHJkee4CmqyWgUaXrvSKkZBB7wT8CgVqng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uehsMBsZVmyv7BkktJEYzxgRgrs1o4w5jCH7h3qRdH45kaVH8a1WXkHEvLTDFF6qhUyKrfH4Uef1fzqdHgMQeNm",
  "key1": "33ZUNZYBz1b4MtVzYdYgsueP6LBHQR33xd99rDa5UvpRRZHkBwZSKQd91FbVoqNwtLRwQG8YNv7zyLQentP5j1v8",
  "key2": "4m4pUuwQYz3D7pow6UPipmTrWqYetZ5PhG8hNBGveAc4VLWwoq4d28VHQ55JaDuarusxM3xkVq5xHqMwKGZKcfqx",
  "key3": "4wYVj5pHiVghdWuokyYv2VsVzKtaeBeNmLzAQancjdYipKUq4Nc8tzdouM2xUPbedFqrm9a2Hi6ktRKxGxbmLJ89",
  "key4": "27QaC67sqeQs6UuJxBWzdaUEn7cD6wQPj32eUaQQC61u6kFLgLYzN1JEi3fnM9cjXDdNQRsS8FJboG396YnN1dw3",
  "key5": "2swUCkxPKJoyEMBBA4sAGVWvPCUeAuLCcYj7my5y7baEvx1y4e271s9ZYZG5JU2j9RC7UV3M3WRH3pFEowZKn7E9",
  "key6": "5krYPAByPSVHbJYx5aLE9Q6uyoEq9LjgwTN3FrBDehM43Rvn4xTd99uqEKxQbWRBJsiFkTydbsEnEpE5TmjYCPdX",
  "key7": "2Xt4d4MANX5Gepv7D6RzkFMJ9NbvM7L2NN4eXb8jddsnuwz6UyjbkNxEnmt7rqP1rDwxJJpKvimaNjcQXT58z8bF",
  "key8": "4b7vK78MwHWQQoJ1eT1VkAEMCNzaw8DHXeqTqyqXbSpQ1kDCLWRZyJyZv5NYVDRpKci737Ms2A38PM728pwLd4sM",
  "key9": "dbFzspPE9gKUne4NwHu3WZBKuo4Gda83EfAxRCAtd3ApyaWrJtSGHT9YKbyhYnQbkgpmAo4jCWBRrQWpypnw334",
  "key10": "4sFXBeEjgQsq2EehBznLmeNRLtKt8mscNAocj8p3KR4qzSW2SPypybtt5rnFTJPiyyfRw7q2WDErz2DcmqoVyD1d",
  "key11": "5Sh46tJSCKfMd8CkqT6ifbEc3tehoaLQs8h2c3qRL4Map6uDPnHY7Nwjv4NC79e78iHoFu6qiqepoAETygmNjyrj",
  "key12": "2bZnYFcAndqkTC92eeHeMbhvEYyoQtNDX6pFVGCF22rUEaL51wCc8oQivd4vqdzqcjEsnaqi8k4JTffXsMGUvL34",
  "key13": "3LuH7LY14Jd9Gtpx1swLsdGh8F6ztuy3rET1nv5DrJj9mgSrDmYtHPH1v7t5XiF2dcTRKmieeXzLfgv8H7QBE3vh",
  "key14": "2AKr5fnm1sowXosCpc1Qt1TEkpxbCsPY3e3MoLLBcZWw4h7DbKXHwCva64AaCNVMQwknhgVGEQSPjonkVS5i5E6Q",
  "key15": "2NxeWr5rKZknPiFTWdu8vvRd69y5cqEiDmmRmXZm7EziK62xi4P71rGhJNA4Znbu4tyzBjXE2AtbsRq4h5yxUqRM",
  "key16": "CKFhBpnFz4wVvfoWk95j6Axg2aKkTtSZrkc48ExHxkqj9Bcqh4VS9gGRXAh6YQ3Mjt1G5KBTMuvj3veWWZs7bum",
  "key17": "jJghLh6EhmkoysnjiP9JnAb6MbNVMZirHnJfqgsuaA2Ctdpk1V8ufhVBvy3eHLLvybSu8Fu4MCit9syZ2FPqUei",
  "key18": "5REXyBEj9izLravKsbZAJjuwvPM3SJtrLSusvec2egY69NqSCicbbDKvsDdbWK2dCWs7y4kEqq51zgQSipAKvk9r",
  "key19": "4wzFNRC5DtENXx5uPnnyB768nPeaaCzkcB5fhkYzpaQfyNgSooHFPBzkmv7xAm2LJ7xsFfuFHCdh9nGZzq1FVUoR",
  "key20": "3SizJpMG7Di15BAqDP1KL5SAmnyC71oN3EUhfDoaGzJyQCEDAJneKzTjBqj8q1xkjr8VDrJNAbEvi6mWtCTCfNpn",
  "key21": "4eCcHHZ2aiKX64H2h5RzYQ5cgDiGWuwFLa2HYjp9WvwhiPuynvdKGqHG6xhuXjpyfP1QLDzG89z4SEasPDz7Wfe8",
  "key22": "5B39aDsLiBEHzsDGoqvCKd9tYfSp9UHTzEHuMzsP2qCC8EmngybUXgG55rWztPBt8fs8DXQvPdjGZusyhAr1zwFs",
  "key23": "ofEFayfMbkW3YFsGUZ2ZzicUd4swb8kf9vPKTa1VWoqBXP78ozfaWeHm35guxUo9m2o1o4KxTJwW9nhurmTQD18",
  "key24": "3kQaLBPnDuykyGYA8mQhZZ3qBBE5MYE7FY2yviaftwttbLpG6qfU3ZNKNBhLAHxbXDqbhDEtJuSbMP5K6PThKa8N",
  "key25": "54xZ6k1aoc3mPfGQUbwfWvBTDHzo5tadwyy66eSZ1g1TbcttpoKPLQuR3etYA2E3t6VbTnyoJpo5z6NuTXJua9Sk",
  "key26": "39T9MrJEsi4iRSyyjmdSVEfLFZueDz3c8Dg3kVJyv76LvjLtgtonNLEu5iEBJ7gQaKtzCgpXK4NWkFjD5KZDnNT1",
  "key27": "4YTqChJAuX6Xy5o5WQH58myA3SHdsPgCjJ42SpfkG81sBUknkYgi1iv61b4zvF78r1bqY1MLCBfzhJ5DTznhqQ2e",
  "key28": "MJe1w2NdfWHw9Rr7KYnBq4MJu1X2cJM4P149qPRvoH67Fa7t9SH2rWJDGMTWBHHJxYstH1hcr3m4h912QeEaq4z",
  "key29": "2fhAUjztgJqAFLV5MkAZSkoyDUekoEBs769U7zABfqZR9aeLoEhYjSpQnjRhbdyZYwUdYsPk37zqV1M4UqFmgvzs"
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
