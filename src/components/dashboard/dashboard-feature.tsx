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
    "TQZxPqaPoM83bixzfmVfTQbJcLuaFHYS2uWzcXPjfonN1kmjmHmWCx7YCBjBAEFfRiw1KWrX1qGzS51UbxKiR7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVrcza245Udeq7ZCaBnix3iCbKwn5JmdLfYmBnFzko2ohm1z5KuyJoyUuJmFe7akaPbTvSzioKBLoDS3NqEU67L",
  "key1": "56g92oyTv83SKoJbBGNYcwRX1ZVmirbohWnj8xLaY6x8o5PAXno9T9wVxBCSJgUUrBd4egnbdcn4duLZA7GQdSVU",
  "key2": "29R8f6LDtgijYzc4F6aXEyTP3vweCXMbtitVY8t96zHCuLsqBK38TCahdDAjjwyyK2qaEVRyKrhyvxMvf8nsoPqn",
  "key3": "35zXQu38dPK6MjWX3q7ozshH4NhaUxgh9BfnaCQg9nRcQDgCk3yLjS9JHUTgsNFycPdAfNQHQtCSooP7qDaMu8cJ",
  "key4": "3zvFK9T1d528ej8r78HwuE5uJTvZyLhJLv37XP95UBcMgPHedmKuNt31Ho8pGNaNyXVp74pP5v9aWGnifxKC4JXS",
  "key5": "4mZQqDqMVDe9kTqWzneJWjcjkhgfQgzxZDLptwxB67Y72hpNF3ujdbRG8jEVPnaPCdWwxCSj6rt91U5BVGybDE1r",
  "key6": "2zeK77y3vzZ2iGuCu2b27iXUa3YNfxhjCC8JCGbikSL6qVHp5jBWDJjDQ1UVhnQwkqE98JxUUZh6M8kcpcAR7aj7",
  "key7": "661jvG8HQXxNzJUFunAhDuDgyXJ83Z4dVLtgezoP3HaEDGDRyMVxfatnZ4QzLT3DL5UhMWfD1HNUNdRS4gDL3cpG",
  "key8": "4fZJH3bc6bF1pZVeemUWGMBP6JseEvmxsHhkjVitA44utQPGxqBhjUD9Srii2bNtD15oXHNTTaQT8HFY2SvhYnkE",
  "key9": "2iULzRwBYJoDSz7zDwZk4pU3XT8cN4Vv2uXFeY6TMbKXFYh94NN6X6efqPht7xmCQQ1p77YiemXWCxS3pPha6j9c",
  "key10": "5cYUpuVyiVYsRW9YwfDxGieJnxTUux62kQZvKgD2TdAL373LGbbw6TyGJGCiHdTwnf82ATZh12hPDu21qrxFwtRg",
  "key11": "5JefEq79ocErvyVTeLjn5hsfsZXZpkpMFLHbNde1UDgjQGtZLfBZuiFhFJeov7mXxZRVwrHBcQ5S93VzUrqMCruD",
  "key12": "A2By7iajN5urysxmievEQw39Kv8vmxiDZXQgG7Z8aWHQwwq7PBzhWDGj7tie6QECjLFLQF9c9ShEiPNbG6cK5w5",
  "key13": "5fPkBEeDanekV3bkCApmGHxZG9x3jzsMNMbDv1JJL3K3ti4cujn8Yb9Qt7Ra6V7mtC23QtcBNjvw49RwbEY5xNQZ",
  "key14": "3ZMPwcsALYLv8MVEaqpvUNqyRFkVnUpF7s1hCHmnET62SQbgcYjgMtkF7skVKuUkYdU6NhzrJwHVoEN5hd28Dstg",
  "key15": "3JT3ZYPK6raUqxXAHUbSSvFTbojPvNAsFbNbD8t7Epc2wk7jQhKoZuBWcjWkMMzoJFms2CuAKkZEJV12ztUM6hdy",
  "key16": "4WqrJ6jb5CJZZrrQrvGjN54gXogK6QukhfzeN2kLcvphYKssGtWteJ5H4CJGBwbfxwNX5joMTvUGk7Rpi6ruPcHT",
  "key17": "3RUosmfcM1pqegWaZXVt7K3m9Uc37JXHsz1p3LydV3qeKZMtLy1a6Y5t8tHkCtKtxqGaDnmkps1FaVP9JBwDzvuK",
  "key18": "UzYeP636kqKe2WYENb3sZfcy6PgePWbwGUWYwumexZBSb9NUDPjCYq6xkg4qqjumJ5vL5mVrJLGrU84pjLzz9wq",
  "key19": "2YVgRc2bMspjU7xUytRqw4mgFKhi9Zs8w7Zonsj58jw8aG4sfsZueW2154JnyVGPvTYrkWYz3tA2gdgh8aT4QeGo",
  "key20": "3T4YwQhM8CkKzHwC8F9iaSz8aDmEEY9hDhhFa2fyEf7t7qdndZUtZkQ2kARyLpWWHnUNHRngQZv922vvEEjazVjx",
  "key21": "5EfbvYzv9tyVCFAvAkD2vtJLbM9rtBnAXzspGHLL7eqDjUMTYuDadUpGzQA2Hmg9K4hKbyQT8Gp1m9QTZdBHLgKD",
  "key22": "3LwBwHAoHyn5PQ7k1y46no5AfHVQPTaQY9yXakKYHpKjG2ZMZ1nYwnUSgwjBRzzWdEq7ZHyoVyM7xd6LbqRpu1wr",
  "key23": "5MyVNWRQtDULGxacM5bLjetqWQrkmYMYX9XYdHeKdkeVvgeTbKEmWFMDk5Y7M3SzhVXXNe8G1h5UGrVirMhDpnnD",
  "key24": "3UM4kNCt5rXppqubXLD8ALrKBaHgtRhgvbmxpavDtChMSTfK2nWRDDAxpRxfSrpFfXGn3dDxjQs1XDKPSTfJo4h7",
  "key25": "41QSBeebd44JvFQWN7dQGdwKdV5mMRovvReiHeqRh7hxZMHrveZHniwRPw4M5oXnQwYBeZFVb4rp4wY49f49fm5L",
  "key26": "XVpLvAwvkAFJn5ZwsPSGtd67cJr28WgYaDPtaNLbTeJ933hSUmB8c9iw6dcwjDYjdQpak6BGr55Vffw9NAA8C2H",
  "key27": "5qUna5uCKoojQvVnVGG7Q2Vc95snqc4dtvY6SV6mfmBPkbpqByzD74qz2RPbXCegH6bJVbaccSKsLmAm5ViJDQfC",
  "key28": "3WWjaPVEEwJB2djutR4kEXjiEfjBEf6Dvbrqrzbxbnjqvh4iGUeLvpGFns6YfNhnNDbNbBPvXHUxzYuw274azgMk",
  "key29": "4BuvyHSXoM2rfuJ836uRQ3VLqGsRJEE7rcpgpbvxDpJtyxSiR94KqoKjtHgBCcr7Mt3Ythsx169CNxKEyiu84nUu",
  "key30": "4otPyLegt9YHe31UMNohD5HJ7JPTqi9hTao7PoWLnutQNvP7Fx8yu17fTBdntYmdZrdAMoUZ1cWWJefmFxmigSGW",
  "key31": "54oRaHtk3fJHaW9J6YrouDDyzeLzAutTCnyJVZvL1PMxJ8DRsspJMy5pVrmL8eQX5Tn5R6mY9Un15Kq5FPMtj857",
  "key32": "3sNsim4quMED36mi9T62XUSKt2goUEYk1Xh1Dop9aTmwL5AAhF8VMf96zBEfZHQcYpr9DvsSgApj18JAyn588Mce",
  "key33": "39hYgK7auHoNHEYxYztSzRA358R42VgWhSXp2tRVtWo9EgmsENSRvF441EXGE4QCtNiYNa86JLc43JakJ3Axf2um",
  "key34": "3f89CBbzQMPsPd4fyikgJwU5Pu92Cc7vJ9uXwcixMsAqYZ65QJ3EXZ4NjeV1fcP5gNbc4QH9dBNfTpJcNcqRh4er",
  "key35": "fVjbU8us2mTcsmTBX8uuiAdEnavPjGkK3QqbzRRjvS5rGrT78KdhjmAyDoDVzkzGMdLpCEn3ntgtFVVa9LpehXa",
  "key36": "rLjsizQVQAefw3Ra7WfkhC49tTPN1GhuVSGNGCWAmaBNLYKs3NJpm5Ax9b2iYfg9jUHhn97kbstAfWU2xnusxNL",
  "key37": "5NKK6oby8abDKMtc1wkNAUM9v7g2x5cWKUrvqoMtPvTW8EqWRsSSyy936tyMqYuLK8U4KdyYijTVRnQeczZNxtb3",
  "key38": "2Z2A5AN2pCYWEQprVdR65oYjAFu44q4DZksi7MD39MtyZ5ED5dhTgZFqMUatpcGNdejhgrW4sJrjyLgd1JWTH2U7",
  "key39": "1mpqdqNoWiUMvmSr2XdbrxhVWHD6EbZHxN8VLZzXDqQHmPdYQgDz1T8WdxjGVfkrCVf3oS8UPJQxUu9KsxCWqMC",
  "key40": "4APNT7bvd9UdhWSMUSZxJ88j2Qw2uPFdDVe5N58GBbBiei4g1Yx7V1eAMx3rcokTfRQ8nwFqcwSApStS1B7uvHYV"
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
