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
    "4mjLZqs9nTvyWW5dQvrNpBpXRcckdFuEkehsLH2wMdPxHY68NsA4534YtcPPTiXenwyhAQUiPSNffFvjC9iEe2hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBomwVwZKcxgTWsfDWoLWuVdHeW7cirWgM2V9VpULpCuf3hTahCr3TdFGw418e4dmMJFHhAhfNhZGs8FxAisMeh",
  "key1": "36c51WdmQ7ETxe9fECQjExfpCBeTzQWCt1bJkATtsV8TB8nUuYr9fEGgRmu5BaQGL52zmzXVUBzgcrQHmjiYefEH",
  "key2": "3vW5QNbSxHLTM4U58oQDcREXsnrrXn3HDckfQrXyB1hSTs6h4KRhqqLMxErycHBbH4iA2istmKiPDYGxptX2qDGZ",
  "key3": "5ienCRSVYHjGCiLHqoMK5mB8jKbGoqkJVaAGSPN3NmZWonwzvnBkiochmdB5nasDqejANuaH5mYM616iZVnkwctF",
  "key4": "2z11KTdN21m63ckaWehhM4ZdPVwybbu1s6sv119z8pW3tpEUmjzWUtk4xw8cxBjeKJwgEe5TT1w1G5EeL436mrbs",
  "key5": "2e4VpQtXwqFkYRq4FryQvSfSEs89owdPoLdvu7356xUnzyZWCLXEiHJwG9mJtXm9gS2wqtr3VJyiN89jrgvQ1Ftw",
  "key6": "5QofYM9Pzi3m6TXqPuEFoHt8PgQgUCxZ7YkhfdhoZCdJ1D9eNCV7F8znNyq4sXWVNmTpv66qdh6baVt7SZVXqur2",
  "key7": "2w4DhGUfV4TD6Xeh8aPv3g9AAisPq2LeBK3ZJh9H624UDRnHWwhaNvk4SPqbkmFnwm6LAaZpSifuKjNeuzb4cmXY",
  "key8": "2a4UvjDrMG2yxEGNRq97cH42evdGvrpD8WhuKatMAqXsLc8PJXSg4n1p9DbaiWXmkQ8x8te1h9eFu7E7C1EiTfta",
  "key9": "4spH74V7iPucTqrwvyECkfPBBJmWNBa1p4GMnc9T1FXXgcLdkmz2pNwEUPxHXmH7uAd6i2WmCdPncHfbQPiN1nbu",
  "key10": "5G4L8qs4DmikiSKrph3Fxky3kkLnWoNycuy2vwqZAHQkALMo7Nk1g4XmYgxsCXXQthZN3Fm332sYrwpepWsChRwb",
  "key11": "3D74dTm99HU7tJVbz7L51qgtZJAh4om3S2LmwowbcMjuPxKb1bBvhj9naSph1uThEj5q5Dv58eLPgs84D67aMT5T",
  "key12": "36SaQwvKx8q1QojpRrB8edMbTtKS58wmtvoUycy58g3SL2e1x1fvXU6DC5KqavtJ6M6dKJiepLraYFXPRZ9r5CBd",
  "key13": "5vFNB1rdd3AAaywwW4w27vdux5JnNK5RncMB4NvruT5JPGYiqTXVkmHdcXgjhERKtxESL9ifpzGvQ2bAni3ZwH3F",
  "key14": "2MzQQdMgwmK3D3UWwQEGLZDybQzHcgN9PXBgUanH6ZZXqvPj2Dd5qGps6AWNLdKhzkjeBajhXG9pX4B5DAgw3rsb",
  "key15": "5LXq9aRY3DdVffEs6u1RMaabHWnWPPXsDQP44aYku2dLXcCHzFJUdV6wEJz2uy55wELsSUFh8JDvVJCMZfD6AKnE",
  "key16": "B3EuNWDWKAPs5w5NaL7C6MrrX8aX3zvV8fL9SGjXd399M3wNKY5p5rYYAWNWcgXUm7SoD2ejSLmtdjbmsjUQAuH",
  "key17": "4SZcGqywyv1jogQicvmhnWe6zq4HeDDZRw4tDk4yj9S2yzU8fxZAdk2vfvD51SjjaMYSb8vAX2otFsFTwDteWYZt",
  "key18": "4Dwo9Jfm65ur1ctt5Ey2JbS1V8RGtkA4QjSsGSb2k9zEHR5YxoFq1eJXts7NGRCNKPge81p5EwrW7GF6jNXVavKB",
  "key19": "4b6xoswE9WsjYNY8LBpprrLm7mfmb4s8m9QeF7SbEXqqHM2DRaoaQD1MfVvmnBVkMtoKmw6ytY6rXKSYx32eeCT1",
  "key20": "51htKMho3NyMqCbbPhfzgipp1YJkByNuWqsb2dcmUw1Ys4t8ZW2ufaoNZjXPaXYVVoCQaYjD9XmxUY53pDaYN2iV",
  "key21": "3ghzGx6sqJrMyQraVWpx5WGdwsQ2HzgUtk8dvLgKNvgmXbGbFPbmphyhDGPhg66XDrfom2jP8wAHf7Ka9fH3nUmi",
  "key22": "qaqFVN6Jhz1xXq2ZxmWwzSiDz3YqS311PhhnNbhV832ZE4XWBj8gVA3ZF4daN6iyPnzH5auAkYoJy25evB7Wv5X",
  "key23": "2592E1v4Ajh6YbGYfi8vHy9Cg64bgj4vLhU5KX3G7QzsnDTL7uLFVykXRhu1N1cAhFj7ZbsGqcE9gp9yZqwum1xp",
  "key24": "41Q3xKFCEX9jwCz1j7gCKecsat9sTmvF5Cq6mRj6ruWtxzgcmq89w8iB2CvruNjSXW8WVEtv4h1gu8ekw2BR6YuQ",
  "key25": "4Nwcg1WCe4vFeEWwcfkpreJynVe2EbQcpTe3ZDN9NYYRyrneSoRe7bCU77oYciYpSNvj39H6gZW72kwrv7ae5YTk",
  "key26": "3Q8igsrEECSzTJR1PrYzBUk5BJoZMpLRW1stbWjuWt9kgs72BMtZjHFTRJAiq8t2yDRsop3thRunTjJ56J8WCLPZ",
  "key27": "2k9SHDZfhRdWP9m3fk1zk4hgPYV8mtY1ML2b6tZ7X2yRoHDL9g9HP5Fx7K5FEDr2noPbjQ6MywWGebhN6Y4BJ8L5",
  "key28": "3hQrTE9aK66XfG8SNvaWzxpSE3a7jovzx2Dt6tJaNGBk4bN37JTZhQTvbAbDxg9a3AnRQEavZAbjowsybig41bdF",
  "key29": "51xAFo4MnQ5TUyE8Ua8NmP48MCtaAu8pzwXVEu7bKGjjwq19YSChnWHfzegt12SnX8j7q8GD4W4NFpRsgt4zg7iJ"
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
