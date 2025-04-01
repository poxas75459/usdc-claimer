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
    "3PvaaoBVC83BRi7uLhLX35QCuY6truENmrtgki6iiaKDSLc8iLsqVdTf4AwMJru6WnG9jNSwwo57bD5g53phXm1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TKvqqfp1dafQJnc7t3DuwzPnveBchxHZwL1ya1DMZ43xRoTZhyxgJDPNxJZX9V4vZFm4cMMrjndoHFFaNgypwq",
  "key1": "3LvMPVwdjoDL1dbD4vVZr7mmwJ22B52B1rPRKK4nkL9iSZ53KQ28ghyPQb8rba1UCkyj6MUTspmzyXD4z3TBzkWr",
  "key2": "5CAQui2HB1QFVm33VECMDHjaYa17fYbFLMKJJ9Tgu8dhS6aYF4vfHXfSvYzepTJQfsLD3wCq7CQTxZug1PRuszU9",
  "key3": "2fbKRxNKm1fK94g5vgEMFzzeLsutfitTpyqE882ft4q2esC14YsfuAwafxXhHSSawLCMbZd6C6eFp4YLvmtd2kRA",
  "key4": "3H77aJDDr2M5SSiCfkp9q2ArSZMNSfdzaNCLxotpgzmQ4qCqX5ejVqFz644LyV1JeM8qrbn9LzMsMjHuBNF5w5C7",
  "key5": "4qgZnAVVRuvsy3suPqteKDWq2jQtSR4R2xmzjd2k62vchYihQBRw2QkRvDmosWZDSUYfpVMXfKZjGeV5FkbD5U8o",
  "key6": "3UG6oyqXwEHZyiHWo9YQc4SCYgzVsnEBPLov7gQPdXBr8u487kMFr7uxpwuRHnu7zDAuRFPmG99rWK3sy8rP7BtK",
  "key7": "2z1FVhfs2E7Boyo8rjgawpbvcwAEExPRUmmhZTrdgPKvww8SVhgif2roU3XerJhH4RfgQE4DZrqQfkRQbZeHZfww",
  "key8": "5DKfW2rNHov6CbSonSVtcAi9DzSe6YQrBtsyHpi92BVgXCg2mkyKPzaGd6sTkA24p23BaG7NKX1rYfieGQdug48W",
  "key9": "5kdu1Rvv9nbVMXnCo6SJFpN3pMQXhFxeiuhvL5DemrB1zg3h78amiYUjDXgMqVHww6xDvMypwpAzJVq3GdYquRRP",
  "key10": "4q2MbZ3DUfoXAAgSKfCthubZ72WF5oGUwcXJZCMEcaEYRqW4d3juCZEHCKS32jAJJNwHuDaLoYqzagsKp6TD3RNf",
  "key11": "b8pxDcjhRGZ4E4sPybUzyb2YwfvGXLDNPoQCbUuBFs4VWkCSF7u5wJQ5dBwjv5E2joo6RQd8r8tybB8AXkyZ8mU",
  "key12": "31hx13x2Ez9WhjvhZmnvbnVZ18tHgtGFLdQmp9Z3cRu4LJpxxLn4Jj7XC4Vcc7mJw1VVifscRuARo1mCjvpdJgob",
  "key13": "kdoGG7gqL16xWPZKjqYjmejb6rVxQ9BHDCs6EccQg4WcLFLMEmgTMk6xxNXevtgaxfVfksvxgkimdGebxwWegtK",
  "key14": "oiUDrZKq9DNNRQEHaXqNv5sniaquWq4wDCzp6foRW2ymRePG6Su81s4DLygjkT1XE3tjHagHx1Np5Wtd3WzC7vP",
  "key15": "3VRsVFCiVnCZvZonrrJqaM32YnkWWy8WoevwtcJcK665Lc4c57t7hhQqxUUpPYfrCoxsp9bcQRPXg4YKF7wVNRSs",
  "key16": "2JnHnk3ebwo7fpGK6WeiFTxhFr4bdJ2t8EuWDDwMNvqsVS7RKMycrHxRw8Saf8WxCeEQ7KdEwdZKkfZqVf4dADDh",
  "key17": "632kRcnEyPk72D7c3Dj1YZvXjwVNhrVAsEeh6qYDRwFD4dYjUnXUkARMTQyU5zuhMaCaJitMD4YhFBPhWkT3Wm3s",
  "key18": "3ta7QWaxDyrG4R5KqrCqkUXopEZiBvghykLURQdzstpyMbAKryAUJdAzeDbhVNvXfdZyH1DAayfFFvE78y2ijt9M",
  "key19": "kbfk6yp35uVDGF8wN7HEzX1gszsCkoBK1VLwZkm8hg8PJWmCAZTMBwyhAqqeyuFmapmx4tqcoqY5puMKBwpe8oS",
  "key20": "4B2KsTo4Ybi8HcBHVjHSBJn3hQzy9vRbFEmCrtXjDAWRXEE7YMFBiea2QyPYCRVRnrjSQ7UzvvXScqUXGeV1XGw4",
  "key21": "3Z9UXsTvynkU4NXHYzJtLPBPPcdcSVqDCNAPNeos2Lj5e3xxNfPwS29CKQPunqceWk7EzkUJPR4y4SMNDSVTUKhm",
  "key22": "3K293MQsGLSjvRkZc6iwyv9mJn1LFJzxmJ55z3BN45HKi6np9zf5evzWAf9Y9jVFXxVpxitoK2ag7SDPhd71U1zo",
  "key23": "3gzhgPJCVpyk4MJDND1ERQysaNqguypxLjQ4WNp1pZKPzFRaZBiC6W7Lt1ZuEARUpmkWxgbSswraUvw3u3NdSqG4",
  "key24": "4XGFtezfwanoB6ZbwYdj2qdEtV8xXkUb9gDLpeHtiCm6PfF2YHMAhguUwbK4tugHd28weKoVCA68wouRqMB1sA9C",
  "key25": "4jBZGPwUTKa7pRNnYWHCKAxBCroEXqt2BuEyB2roEA5LENycgtyBd4Eb67f4iadHkqWQHJ3czrkfERYxcC52GMLy",
  "key26": "4LdWKNuxCpwGno1S7D24R9uENycSiePNbfah2yK4DWLf2VG1hSELjLPisc4MBn5aNkNnDZxSVtEfMMiFwP49eswT",
  "key27": "3Br5ztYQwpFEMkGsqCcui8YL2erRHv7XXc9JEmPptQZgf45RGvGLyEAwWMj26DUCGvCyzDBSed3LmCiQJ6uujKZL",
  "key28": "8DjsNjfTTYJ1X35gEzc8PYkULzHWnEHKykdEUb2bdJPoyG8uPjeZsFVq8xfowwRpMXEpLtBpgzhoPc9HXC4NEYU",
  "key29": "8jp2Bn9UGLoocAMPrMpyZHuVQDJNs4Q7JzUw88xKexsM4bGyzeGn45kQXQJ5KnZiDEEzJSeWRNWcKFuWFZGBfYG",
  "key30": "ojquTWwNQ9DRezqGxQoPeoRuqqtepQHQSBaj8mDZLKpyfM2wMPTtNNPeXvFUv46zGsjvwWmyyEcGwBeC4HwhWuF",
  "key31": "3k5ChhYwtvcSMRP7KGc1PuLbbGK4TDfRiqyWcA6DkKmPnwyAKY3W7KuybqReF5ZdDps8KdbFYa3dWYQ1qzWGy824",
  "key32": "2e8bum1fWtT3ceR3uSYQcveY6G8xfMZDxJhwRXPwhDRUM7rzHwjgExtLh9oW3pTqSMRU9SRnPzP8FM1z6dvj7eFS",
  "key33": "2xxfJZ4HD6SPxhTu5F8tuhpCJKC2gjKtGj9ek7aZHpxRvJHE272Kd4J8noT4pHwmfeE7wtcjXSajh5VmSrgWT8fp",
  "key34": "2uRyoXMHVvfT3gfXSNHYaRY2rTVZURX5CRLEA7vV585eRQVAvHoCSyDFAejdKjUqoQTkBBPmqQhHHbmCSZ3zQCyZ",
  "key35": "3XJAZvZ7cCFCuN2V9nd2kicQGsjamYnb6YQCiqKQsKEed9YEWPFF2NzWLtVWk3SW74k853YSscYDwPxakqjkB3kd",
  "key36": "5U6di9uZzAujAzJ3bYK5cfgofdvW1LYpWjYZrfXPo5RW6TeAM14MSC2eFQ51WhkEPBDckxbsSTPe1MiqAk3JWD5P"
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
