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
    "5Tj82enRZSXdLSWbW7n9ShoMXimsaoXJQhv6Ez9G7hjFiDmaLoSrANrsz1h6TTohTbMbcJFjUYVvtUGT3KBcGBzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CmaraGjabrSiZ2C29biJn6PAj737d5UgrZSmYRbu46gXvJNVUhhayVijjgXVJwqXoMD3miNCHHk5Cyj5zEnYNwj",
  "key1": "jKU7f3FtGPfix8VtdTf1p3ok1br5Y7FZ6PUp1Ns7MbDdfwMcr5veCxkLrxUTsLfY4ZxBhnM4SrPZXx451ufAbk2",
  "key2": "3fvrsgaZgg3AU9FPoBzg84zmkdAV1VT6tJWmzxsXR5zRoKMyKUSh341tiikcYamFYQWdwyo1ty4HoTfrhd7BLw7F",
  "key3": "5XJm2kCQMqJtP8cHxoeKnZ1arBzVQvkp2sZRugHhvGPrqfu52Qo9SUFbowMXAXUj26CaNbMFKSzz1aWrKzRsr15X",
  "key4": "3QudRjWQkHwTHEuo8YaMWLjxEQvzPT49Te7RXM3vyxuLicKcaMLBNQLV1UsRd7Hfb4d2kKzArYeSnp3Gop4J5mnu",
  "key5": "2qdD5UofVLkgT8E6n7DmQZEsd2wF5xtbQcQrS4npVKSd96z844Myms6EKGHrDaZu1bFpm9jK91x7cG9ezm4Z2e9e",
  "key6": "4owch4PXLfBrWowYNxTiaxBF1qHHsbdyrdUSp7Jai29muUDq1kxWNtkUjvXtQ25QNNj6aCFiTAzQ6NgKDoxeutfS",
  "key7": "4425Nf3Yh2pRqEyPFvnkKRbkpw93wYMgSGJotZuEQfdoUQNf36qfHLrUZLuufHParQBTGLrvxshyTMoxrgD3M3GZ",
  "key8": "5YJry8YYFB8n28rSDbgxVVST36trS3rSZDGDsW6S5GFnjmeJbjUVW2KwV3dZHz48bmuAGLD4CKCau9q6Z1XSKUA3",
  "key9": "2rCe6aD3XhagnLRtkbfHptM9jseBGvegPcQYjKU4VYyYeM5oMppb34nxAkSfpRbzqUGQ3oNtgPVLRTD9cD31XjvN",
  "key10": "66qJRXHRboXatdRKCt8ox1kPRvqqAYYZocNB3n7aBGZZgYAk8W7DXYBiDczqiCVjCMQB4eekhNg1YMfbBj5tn72Y",
  "key11": "5T5e6pwTALvdjjoc5cHp2ghZkSjbPjPaTxk4BzLkaihtCUprfwPfZC6Z6nk5x4qVgp18ad4izoEswn5HZXjLZRZh",
  "key12": "5vR4VsG68zfc7tiXYoSEdrLsTpQQxXfsXgTa3ViWPewh69yMhwSv8vtXsdNCKgfAvBLRHaUxwm9i9PfkNg3D9b8C",
  "key13": "2pEeVEY5EJqSDTxZkG14vkztV6iHZ7mHrqbkQ8USb3UVzA35vMuCnCvTX1tUUjrRhLZah46i3jAxWJ3uqYnnw8Dq",
  "key14": "5GPLs697LV1LPej1z2JATcJ3QcVwoZDwAJwUKZWj9L8pTHKnEBG84qtrcNaC8ViSoqqd45XtRRv7sjcYdx1xAmAH",
  "key15": "3TskVxR83MhzJGexJKea1xxez1diGZK9GkxTdzAHTwecsZ53Wqm4SoWsixttiFSyS7AtkEgFbwjkvMX8nbjGDYUv",
  "key16": "5mLQk5WHZvxELNtLG89a8ZqQKNdxarjaRAXf1MyvdfU6SSgL4hvsadbHxaGuCb5Ksv2R78yo9MMwiV4HQTLHMQ2b",
  "key17": "5Fjvi1PzcmuKG1EeLS69gc4bMGNTSdygeArWp1TXTHKUVnusBci4ebabZRxN6XkZkb6BUxX64JkgSQcmNGQkFgbc",
  "key18": "2CnFCmzh8DWPkV5BMx5FzymoEXm9x8JDUdn6abCgT3h2nqH6NfH2JeVshtoPCdopvjGTQ2E6P7xDzZC381aLgu7e",
  "key19": "4ojPovmoqsgp1RzqGWLvhCHTrb3tVvXLbUGaxXedJcb4A7SZCWtvKuwMn7KRP3y3Z3NE4LquRkCsb4JvMbKj84rm",
  "key20": "67bckQMewaCprEmfZNQ6ZPSdrcjzAG3GgyUUpLwVcDhji3fqbB1NsP2r5UCAD8cHxx9YitJVpDJA8t695gLyKBFr",
  "key21": "odc4QLVRxT7cfpiHBur4zMwdMvpWjwNYj1FTnv9D51k4d4nwAYNu8RauuvrxdshF77QnK29QxA6YUUwpCp8x7iE",
  "key22": "5p7kg24UMwGmrJELhAvHefLLs1zV3UUw3SEF6SNMTtYQqqrSbSD8zDaLGi2b8dzptu8qjbRNPozSkPJ2JsoaQK9b",
  "key23": "5FR6DQi1otH28rmaFhNjWs9MEtqbvknnksVPHkVxyb1NJs2NJWGe8LqGzEg7RfHMwLq4saoqkrNRUHeCxRXLpwph",
  "key24": "3xxGoVy5M6cdWxghuE9sJyPhDUokd6vpxaAss6iXfRgMCcfJbbNKDe7rgHDfKcTK3uNr8GA6ZcaDCwU5oUuygSXL",
  "key25": "31QRCEJMXigmLpioRDXJ4bMMw28Be4X5WJVNtpjN5orhRkW89vwAPQBAGcjMqSW2KubgE3oEqvdRJKCqxnXfLuVT",
  "key26": "5v4sJqAjnNLdwbzBjLGAsdKSrq3G2Ayx1gymfTnQrdLm4TBDooD3Fkc8AuUbCyo1qLtqgBBq1kueAo1AzvSXCFoi",
  "key27": "4RbganWnRVaofT7BAniadrwycMYdrTjY1g7C5UMiwMefFWdZjDHG6BLmvJ1z8h923ezka9hXTv7cburGX46qnKRT",
  "key28": "2aTHJviQM4AhLvVZRMnBMbbU1P9c9Htrz1Cfx1ge3xKCVWxwxYEG5h4cSJ6JNPvHFE42izMoCW6gT8ZyBYuAiBuR",
  "key29": "5URiKt3hQVY7prphk9oRERwF6mr2B7HEqg3Q76tx3bWgtry3mnJpffCRRSLXXe5s4xCoNCYpyTaBu94KkU4jfehu",
  "key30": "3rBapcJNMEChWqcUinzPqsNVc3Hs3GZ298zCAoAeLH68mhc7ahxsntGzURNDYuxvJeWdSeEQMxJBgoVWuFsrbtUb",
  "key31": "4Q67BgnEwUrSM45W44Kvio8P5dyDmk2en3drfgNXaEByPMPRUK27G7MjM45qZRsG3pWf7GW3Mydwp45VXxqjNpba",
  "key32": "5pERKtMvT65eBbWUXaXvcSqSsav8pkxsWGasXFBkbDMpkVx5DphyP2EQhWMoFSBwYAPqCzvCxpdWvc3aJPpAP28J",
  "key33": "4La3aM6VqLEwCiMzRoxdL6Dekg2SziyMtm9MiYA2XAzw1BT9jjBGDEvJNuqhJycQWna91G2PSj85pWFSoE8cAY7C",
  "key34": "2HgRhiSyz2Kd1ycefb7oSjU9LtiU3JR45fpwEdmWqMyL6FZjW78A2ZZ2gC2zKcnkWmcQnCPmqy6Gv33vK6fFUL6c",
  "key35": "3uicNjHCtnbkkC2EFMcZQncuCzC4fi154rwMYqYokALygMg2uoXrYBQHRv234DJZuwEVAGRWX2KbaSoAov2yCzVf",
  "key36": "5t6bfCXQidYgkh32Rt3653jM1XGgvQ5828gXjjftMLVLzCPBLsuPsjAthd1ASAE7g4UzXkD4rnLUtBU6LjKpx3jA",
  "key37": "4tPRdXm2D3kLwTq6hx1eQ6PCd8o9mKRU4MXygjPmo9SRmKMUv7jJjie4Q4vr8EsHc3RVQdAFMGVxP4wcpjX1RqCP",
  "key38": "67k1Jp5uZCDwoZCTFZ2xUgqv6p8EvDiavmMbYDWoZar7EoDY797YLLG6mXrVyDNxoJhqLFaN7mKTQqcFyo9bnUb"
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
