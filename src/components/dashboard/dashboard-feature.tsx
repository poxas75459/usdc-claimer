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
    "y8FpbiCf7rTGhyBP8rSznwWr9Db55rZ6Se9PRPkUTp17qVzoY3A5v9YkvbrGhLsXJARP3h3XPR7Dnpig4MA2o5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3je5D3xpzNo7b999EmJKmh2uxQY67FtS9b29NrhgswanWnYrnR8kZfiwFyjRC5kzTun9A4cKWKn8bCnQ2Ad6vtBn",
  "key1": "4ZUv3UYWFXio3xLetdMpoB9cMzFPSCTEjJZfr92Ja92bJiryviQJzyi5W9z3CdqcAc5PnCcdMvamfbDUgjcRNQye",
  "key2": "2mX4e7fo6jaRMMLrWZkEBYjrpBf2UzGQhT5tGUsXn9qjJwWx8j8mGsDLNG45zcLeGwYnxCc3ewarSuNXuay4jN5m",
  "key3": "n388NdbzxVz58DengTTNYnP49PDqxmNGLs2W4QeEoTHdHuZ9WCLA3GX5DZdKbWnmBfdF7gSo89eXimmB77933gB",
  "key4": "5pGJMxPbsMazEBzBCV9tJ4Q4aF7ikh9mHpRWCCeMGN7txnt6QZtSn9CA8ikNnaMkofbRgRKGvqFAH5famfd3vndP",
  "key5": "gsSyPSrHZgoBigdosB7VTPxWcQ9y9nV35nb6CyVkEDNs7MJaTCVygNt2n9ye5naRVi7n1PdzvdMk5YRcUUq2Jw3",
  "key6": "4bAZ6GPCrJtdiCCt4Vbx8cCZP6FHnSW3cJXnGnwUSgnjvwxNmodvMqNK44oH9AqBevdLL5XuNoQvRqb8PGSEZi2N",
  "key7": "5UtAiicGjW3corYHUX8TpLAid1YmrcAv7hBEUMZXDuUANhbiHcP9ErMw369eEKEhNnnVd592NbVN6iAPQM4ApuRU",
  "key8": "2ZHarPMfmiz1H6FXNoNyvpN3Ppj6ocXYikLZNeFiF9dprnasW9PFzcartLzhFxE4e2wJWGWYxi7sBwnFiXHAFXHa",
  "key9": "2vpNSmzQJo97AnniZKX5v5ZvcVYc5v4jq8cDzvbDuWcTPM3gNCcutquLzU5oGBVW6TodhDzZJhxQNm3qNHsBnY7",
  "key10": "4znveVib6XPerfosUsxKPoTjZjNPRVauXeEbUUB6e1uNUFvagWeAvQBhDHnExyjRT62U19gCan8avHUkYCxgfn3N",
  "key11": "3eXKdPf8YKzWb7JEUKJQMrAmwtddo9yLeoFnX3jxqZjyc4UDJzCA35HW1gkTLTgfd5H8S77wMyiywWAuBifMKent",
  "key12": "4mvudcF2drzVwPFcsvomAMPZ8WMfo8TdVHhyUwAjfkTBGAwzU6WecqTR1J1XhA9jKJJVgNiAZtC8nzWZrDvBNnVp",
  "key13": "3iJgLxeS6RqyxWKU3MqKnzs8RrC55jk81qjp2Ay5Cv5Xx5FWet46DpcXc1ZB9E4SGEpPs9R5RMY1V421gCXKG8Xd",
  "key14": "259isLpz1bVwoVPnkqc7QeZdBvXT9UMtrhKe4NB81psShhc9Je72HTG7XnaoQFqCGA1njuTiijE1PjYWoSc7UEQs",
  "key15": "5XECdAJW6R7r55R56T3mMcL9dBz58xm2JJm5CKMLruzzMszjAvVn5jmtuRZ2hW5qZobA1ibqBAnJ3LsUmCCz71bU",
  "key16": "5DndvWRcMG4u5VAyLQRoza6Mi69os4oXNHnzg1mwPFnv12JQsVx4VskNP8v438StJspng8ZEahxJ34KJaN1T9BMC",
  "key17": "37FcTKUJx5MvV8wkEY3xng8yYLM8BFe2v9aTZSiPX28NSqHS8NgpmA4boQmdWM46HM9UBMhWfVofArnW6gYxFWLz",
  "key18": "wWftkfa4xWFXtormy889dYL4fFrfgdz3m3E6WVQ6rS2SkE6Jeh9oLcZ91Y7QiAZnMVk3KP4eWdrB9BsRZnicmdN",
  "key19": "3Hj7MsB2WTYmvLAGgDjk2DMDyn1SpBQenm52UrP9DBp7vXjcqCQNqURoDotpJsCKhTa8oLDhX8G4fgs9moZJjQa1",
  "key20": "3hTHaNMiMwwnuE6FRdhe8GJyqWZ5fDy5DX3nek2DYApBx63hf7FsEJYpFFm72EeYTVDiXZbWPsdeQWZNEtobZDvZ",
  "key21": "53D557871gmjagNwFdUGLSpQooDDP4ZKcUfx5USMhJjAUYrsXxuQhjFrZmpWqX31jNGj5qPRDXpUWh5VzaaopDck",
  "key22": "5ePUwCP8WSHdJWvBPs6pjRdHZoKJA7bNfT3a1Kwuqiu8wn8TGj5hbkS7P7Y42GHetyRkyxUmFH2k6ASiqLrTvyW9",
  "key23": "3TzQf5JCjfhS6AfjzSBG4J4W8w9KmLbv1b598BHtQk1jBMqej4qoUMufCQGURWQTvt887KEX3arE5FzcQbHsr4HK",
  "key24": "5fqTe1DnV3pg2Wk8Nm6yWCrB6rtgtyg1GT4RrVYQf44pA4pm7yQvXqyNdK6PQsNm8KvNFnFFcGEnB3StnhnMCqQk",
  "key25": "UAbXGHX6D1shqP4r8akNpQKDeVYYb43Ncu7oMCHnLDiktrW5rijFhtWeB53FqdFgZdQjAPrJTCifi1oPaKprVii",
  "key26": "2A3unU4NprW2n2KG1hrmk3Mfm8sob7Y3t8sJNJ3mmagisG5cWE8q5x1pGkBpE2HtCJTpVWuHPxbvuAFjzxQYaPw7",
  "key27": "5e9USakYELYoGBT35DoYzjFK46EEkgtQoCJaukrECRLXmA6F2uw5XXoRoe2EZfQ3rByQJpq5fGg61LX2GUaE1R7k",
  "key28": "4KWmcyMWQWNDBdfrj94t9ShriFBh4tTqLPJCqydnJiQcnwybBesCD77q5AwW4jyG25Ma5UFcRbz9qVbN7rbHpbsg",
  "key29": "5ry7K3TfwFCECcnjAnKtGoZ6cv2LQrNbexyDXNZmz2rKabJm1K1sik9J3H4TEDQ5pF5coZ6kRncFDZS5YCPVUXJh",
  "key30": "3h3xbJps69L1meT8RtARPNhVfHxE9WKDZzTRXqjj614gWy8x3AbpqD4YM1wKofGjmWXdbKSndyr8euvwm4TDkwrr",
  "key31": "4Zg22xrQPTTSGfxeZvRAMd5NVMtzVM5n2kpfrDPmjkbfyqSHuDkrVRA3p9vRi1oWkJPEj3WdeYht3jgFTemW2uQY",
  "key32": "2Fbu4kGEqetjysNhdutVqyeZarVNMHbvhhh3acKQtE8pcpncti6FDPvtY2uE2m874UTVByE8QTW4DvnNxvohiN9r",
  "key33": "27EZnMtVwPvosFodzaxkMZhpUv2Qw52vafkMSzFdPgEbuTjhKEf3KxFeTfv7hmvbC1K5WanErqCZht9WUwcNJyqU",
  "key34": "46zPuXFppaFsu4bqXzEUEG2y2JViXNrcHx6aaZvAZx6rPNv6NZikq2f79YLKwoECxnEw1Y5YH425beCUG231BpYT",
  "key35": "ZtjyU8ZoeSfk4yRQ12AdgDVDjQrNbXaKW7CK1CRuV9fDFQeLRuE46Aoz8BZUvjXGq3dbzirZ72SHATkHxyk6qW5",
  "key36": "5anNQVUSyT2xzJjia2nA8Wy2jQxj24VJoK6M8KZ82gnBvctHgwWmBVd5Yma3QBzWukxA2y3EbJuEqvyr9fQnnods",
  "key37": "2tJXN4HkcnxrLeTyYDYTjam5pX7tk3ANKQWcyLNk4YCt2u4AvSeyq9BDgpTMLyrQnsZPFg4ussyW9tTo5pYEonsL"
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
