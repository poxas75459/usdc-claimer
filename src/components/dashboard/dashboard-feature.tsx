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
    "3sooGXB8HJNWrwB3AUMVxxFRfXxEinpkbtEVV361FiuMZzZE2KrsqMRyqLWTy1d3HcsGxs5x8uXmZC49p6p6DeLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sf29GXuHfvhD9ydvJeqzAAaQPmxkszATNZCf8uoXq7V7aN4oKYBMcLjjdjHuiyRBKcXsoeHwcvSx6DPi7e5Un3x",
  "key1": "HjauQFeKgyHUuUNqVS572gacjEVLXbgtECE6XxBJg7E94niqbjrgHY4JHxQEBLd1qRtjYoyWKvDbGMsGnfw3VEs",
  "key2": "3Yv7VZfFfxS3ENSSZCfcj3db9PhskxH1zfzLw5TBUUjhfa5VWWFvoBdq9H3tvTAvvwd1PGSd3jTx12FURvx5xL63",
  "key3": "HF4hh4kLqWgwaGuk9mVbWq6pHniHqePLo4ug4wPA3VxF8LkQK6sKNxyoEEqUhLQfMxP3HVjMC8sCbkio2C2xzF5",
  "key4": "QdXy8vSFZGd7NnXFPosLGZkZTa8REb9Z7AabxQo1X3m8ch2ouJEXxXSaQRTL3xR63XxwSmotg6ARCcFGqVZm92m",
  "key5": "3kCTMDGBRHoEWMrChkSQ1QEfA9hJNDbpbXGR1zEDHqSXuTPh4yczht4iwB58vwGNgVuTd3bVjN8X7w1j4AmPMxXD",
  "key6": "3MrMxyFq7FLfCkMusjYVCCSYX3EZWb3pK7WTKvRTFoD3NEHAhsATyV8qRSRQS8vAPzUnRk9uFxvRyuBzhZsTFTfT",
  "key7": "3VmzgyL3rjvD4UFA5WsCjo2N1XXoSjVtb4BUUgWvSvW4tkxN8BLVjQz7nFFJqQDvTfHHm9v8M5a6zKdNe9nSV2Q7",
  "key8": "47cH4E9jrNa1PTNbVueYMoz6MsVsjZMzT8dcsKRVWU8gje1dT7KE7FLgF5VrQdZWQH3DtwDDDwCUsr52EYs19QJm",
  "key9": "4SFe1EpE3frhvYnoSqGFK2BxcPn5QQLimw9ryV88L3m3e7BCxWK3ZpY9SCoeYMkxcpL8EbddzcY4mSkbmhq3p48M",
  "key10": "39NHM6jgjcoQoNjyzfmojVC6hNzZbDLgpov7S53Yt7XBzctiwgFvsuHCkd7x3B8rgKjvQyGKGAHgHiX1mQePQbf1",
  "key11": "2apdyzYKiqzvMgce3GAKzQjBMmi8mJjAjED4py3N3Z4vpZUfLo5XhzS4vzSnP6SN2K4pa3efHNEBm4XhfQeNQqYn",
  "key12": "35rDCQ9Ard1UpicyqQwyQ7cuhy2Zs9femoDwRWYi3ZKzwejJLRwfX4o3bWNzWpzQpyAJTBztWkuA85EaHBgnTMYL",
  "key13": "62pSPAAVW5vkJdo8t55fUFg5vGe7BGjWUmejzhCF3e5hVyr1LnsaMQ9ZGZAXm3ZyUtZHKxUww2rSsuTanX3hBR7B",
  "key14": "46wapDLs6gRjpmH2mwhnpzpLFJReqd41NhRCvsmrm8tyujmeSmuV5PHmh8dTiF2oBdEviyePg5yUZCew4rCM9rBq",
  "key15": "pjVVUXpZ9rxqp7UVR1ZeLZf58paqGobD2oV2xwES7WV8T57WTaV23B4vbunUA2S6incSrmKfuw8E9qh5uSvDUs6",
  "key16": "52WvkL2xcXtmr5QsVDxKFrLspvAZEKYkTdNS29PVHzkfACDfGmFgq2fq5faNpTpJvRHYbd9GjFebzqoxDqKLMiM8",
  "key17": "33KryDFyUrUz8t6azUc984xWCus6aL61Mh6QFhDMN8tbAETriENNLo7D6ymEdNebW3TyHiqbEU3qD5FEBsHXFXqZ",
  "key18": "22dkLpkEa3hKHqjPcSDJghGTw1A1sSvKJzZFKWKK63bpfdDeYQnztkyn42CJ9jTAM6i3rU8VhDCSbjGksR9wtnxE",
  "key19": "3FkbHbNm1xyhErzdhYqqgzxVG1kYJ6ovRPDUBVgRuoCVGebeniiDE6fBEzYsu1sN88ZMXxbH6GbUGDm32WSiGkCt",
  "key20": "3VrLUfd3Wtm3jKZCb5zc67h5Zx8muYpWQR8P1Vwite1HZJrMLsFw8w7QYBrZXydFhZ3177ehnmFu8ZBgryB7921x",
  "key21": "5FvfAttrXjTZKtg2ooyFKgGEofG3cVRUuk1KxrytRzf4k3gKq3BRNvtVU3mqab6M6j9K7GMnZ74dzUpBPDQoWsH9",
  "key22": "xDKSvAp8cpuMLreR84exMVHZ8GKm3WZLXPYMiS5bzdCSgRSStGFZqHuueSKuNJrs31TGyd3csYXSBJBqaBP9nE9",
  "key23": "5xvbrmVN5BT9b2vn89A4V6tdSvmpEPi6MPezWWdPu8vscefdbe1vuEDmYEywvRqJyJv8ouTCZidWqPJVD7wBM6Qc",
  "key24": "3Y1gDTFg7pgDNCA4wsT9Rx9DDqwYz9HvhttwLrL2HNHZs6u1QEavqyWrbu15Lo4uWnepBpSDXtchyLcEWgwrqdrx",
  "key25": "2vVnfT4LaWK55Z6DT3aB2aCqm2nze8YvdPdaViCZ5j3427VpFrXRngfgxGA5hgAr3U8PTu3neqCKkCQokVy1HmcE",
  "key26": "5CuAYz9dV1zHAKmP2u6TtbTMM8CCuyLGVdLVP8Xi4CPr6WB2u9nz5BdgTCrLFg5GXn8YQjLAzJQaXaSzR1mJmvmT",
  "key27": "RayZbGQqx6u3EzxHrTA3qGbF4dCgXHZz9MjQxjSsPD6aeuFxpqDD5wvGLf3GNQ3kPEatDnZWQ7x2eXNepoaMWz2",
  "key28": "5rKQyL5PbUhhwV3vjxyTX3eMM1hZEcpzFHedTnUERL8sGMrKhQNKBh6783wQv4xjefmJeaLgcZ4KgYfCSd3nzRPq",
  "key29": "5MehepRh1VQiJT6WsXHtkHW7XxVHUJMf5tSa8N1Sc7FEvKVTEwqLDkSgT47r3E9vTZcQHoxywLfwLxfwmjU21FgN",
  "key30": "23AdSYb5bJc4H2FEPh81o7QqgdqLDr4Dd94EBYPCDyUoFPNqMwfV3UyMZ2fHrrqLiujsHv1MbwuZfSzj1TR2H5Hm",
  "key31": "5VpjPjyjerpLVSu6BeCmY1XUcPMr4uLg65D7QbFNeWrDCHetw4CemrkZZwck5BZPGHQy3GnjWYizwcR8THc5eKnE",
  "key32": "3tVv5fR9cUct3bLTNrP35dFLtYW741SRHz18KkvA9uKYk3NgpwGDopjWYEeoebHK68xxBhPPqybAGnojLYgtSMEH",
  "key33": "29V7wjiFxt1v4gUtUbzHSkceQVD2xjeSFvye3bVDPkzYnNHf3wNbLXjoGa6ta4mRE2u97RCDi6j4rb4ZtzpprBJx",
  "key34": "4vv23aS6ewJyBLGRST38p4F8mQWPtZGscZNZx3T4vonj76KwBi4woN6vABMy6UMvobDoxgcvDhDNdyHDDgzbkjKk",
  "key35": "3ZKTgm9NGJsvvmH6KengEW7SzJhFYSDBQNujggQvJmYAv1M5LgD1J3HE5qjKX3eKbtMJhc985PNMRPeixpYTtfq9",
  "key36": "3RWrqUp2Gqb6Wdx3fgA3BEZhznEMxnDwLc1NYnhWEjUympCa4Jr26VugAkv5VaWhvjwE2gjoAMjcPJog6SVi1iLs"
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
