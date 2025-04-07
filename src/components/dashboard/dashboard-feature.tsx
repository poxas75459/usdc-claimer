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
    "239r8Q6pGAHa37VFZiJYZFAdfqEACSFW4mC1UEunU2moS8npwwr5PGCFmynWifZzZSjxBsFxmmzJDgbTKHE6YmDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXPTQ9B6ZuC8Cs53Fn1QJ5trhWWM4ztpMneucf4tXh4L5zKD3619bNt8XZnnrwSoQCm9pXUKooMrdirznB2Dehe",
  "key1": "ik1pJMbSBGQMQUUJ4LKuWeJLujLU9WjBn49Htv51RsMj5dNJ3ZmPsXX5g9GuRT4UGcwaTMYi6nfV8vgHhYD6XNv",
  "key2": "4H9ki3XK2rUrCCJ6DTNKgLJxqBbsYezzcXdWruAfm7E3J9f2aJENTcyTnAxe1UXNdPEnc6VmDe6NADGXwq7CrTXF",
  "key3": "35gr98Wve7DnJNZn9otGxY1T8sBskLa9SdEiucEu8G1TDTTbG9XbAfAmeZBx1rmEPw8BjQhCZm8LRs6r5gcMsuKw",
  "key4": "376qtNPZJwmSb81agTpwMQM3DszE8jF1nZ6r24VDQv9FoE1MSakSQrTC99EShFygXZ8k2mPAWCtD93232uS6GzYw",
  "key5": "4Sb3ZzQEMTAusawyFvaHnnieKA6Lrg7iwEz6AA19oEJt5oeS367CpwjUcASTFgMnRx9fjZKKx9feNGmLj4ggy64w",
  "key6": "GzJa3Ri7G6nGJjRRxmmAsxds4rnxgHgCnYqCz7z8Us9Me6B4nRiPn3xGt8jFQmnQ4YGmWyRYHwUWWxP99iUEs5R",
  "key7": "3jJeAZ8LUL6SXVRNDNxMBBkh5xZmgxmumGB5jS5L5sKcHapYH3yT3cJjty9S3K5j16Yh3wqnAri4CVvF8j54SYmP",
  "key8": "2j7om5VwvDDvrpY3HJpGcqmT7uv5G4qKV4KXr1SiGxRDRsmng8fZfFkXZLnUi8qRdwkQN4ftZWQoraa8Vr6kv5an",
  "key9": "k6Qcot11SNCgU9UVUCNATqkAbsunKL4CHDpwsCqfCnmWk4gxr5dRu2BRB29sX7n5ecGXzbyeZRUpLE8PN7vvjDm",
  "key10": "T2k5QtT3kzDBCiuH2Uvk9dEFFW5bVFuv8xL36T6fwU1dhUbkudnFnAHSGGo5aKF9oB1ecP43VyEQzqvan2DHUHj",
  "key11": "585MXmWmExQqKVvq55wCB6xPz47MWXmueHepiTs4smXrYpfMx6gLyeAC1QxZmhHtaKVCoHprNRNacFH9w8xdwopN",
  "key12": "s4ob1dmeZKkjWzvZKhgaaKXP6CVeAJpGAdVbB3zjuiZzbgu1EJqJrqKgxFYyfwTSUqPdm8Qeg1SABkLQSwfzDz9",
  "key13": "3ckdBet8zNsEJiwv3gx2tsLX7FvkCxpNvE5arhuaCAG5wq4nQVckPcYFeG6quSnSicBpgbcsWudsu6tXfWae3PDD",
  "key14": "4YeFayphZs1mVX5DAJYwgd6CZvbTp8gQxU5a6967bFYgT2xfvffRSJCciroyAWJMHUvarSpk1ZPfYNUmcL6VkHPa",
  "key15": "633nvQAaP6Y6wGzkeW2L8vHcY9NAzBLT6VLvgqbpahD1rkPXNceG98zc5CyTBRyrFQ8UedmHxpJzoxs5CdWTCN9p",
  "key16": "2TpnePtbtWg2eXuqXFJH3dRSt3GYF7Aqp6W1GhYXsvKhEcnJJFgSDsCcMWUFihixY6EUEFuFMnYmnVxkQseZDHe7",
  "key17": "5XvhCiNZq3uvyTZmaWxbhRSgd1WrBBSGqHEZmvaookccd9jjxbcaM6shFUH9eCidRbG2tRui5LAvAyCTzpArva4W",
  "key18": "422CfnJRAvuzWcCGqqR1CmMKrGcR95cScNzsBrYUiVppTi2xW8rHLPCEBANMfjLz41DDRn4DbrbkCYKpBLmrtiff",
  "key19": "5sS13eDc8yV1d5sXjKtrkKeN3tNFL9je68Vkmtv4aWsMLKMzkfmXRWPnXVstWsyXrwEUoJywikXq2F8LR773PAWL",
  "key20": "4tjj2kro5e7Wupfo616uTyYUDBquWT3unqCYYrEGdmdZhg4TYiUYkUwCmdMDi2Snzqi85gRr5eNZt2rcgZYwzyic",
  "key21": "REra1YHpJDkph4VZTdNBYKNQRHNuAsgEmYX669bvaCBaAgBzPTR8TFsFH584jQsJouke94rTRUeQyCnpqACHoot",
  "key22": "3da5FPo5PDmFeP5na38PZqUEZatmcaqgTfKNpdZt9BKBhnvmQPC5DKBrVp3mTTFjQZVxdauZz8XGMJpMchVhYAP6",
  "key23": "63xRKUiFNFpaLLc2sphvr5WDrnEDM9SSfCJvZAVq2KBqxQUcfwQbcYcjp1JG1isvowURLh8z7VnTCmfqG7siq4Kt",
  "key24": "5HW3UuzjBBW8PZV129xKqsZpQk3L96Sk4XukbkcEuCuXeensnFC9Dqhx5EFqJwoZMdYzw5sHynamGDbrittAtMr3",
  "key25": "37jWf9TTGKHcgdPWYXakgwg8xgsm1isxz3FSdfGTckoAQYBmiW1RUL59Bp1Zf4fado5ujLcitSduMNYg8zQaJrLW",
  "key26": "4rT7qYeEDdaZPksuK59hWuVjnWX6Gwtsfr718RrcXZEQNsAVr1ioNS5PD82eqSsoi2tLcZMwPZUvzx6TjdsyKrXK",
  "key27": "34VMoi6huHMTLtUcchUop8647FBhfEDUUfgBCz2X1gpJC6A9eQau8vrckHFbjn1YGoeH84T7rwy878nuygG2tumo",
  "key28": "3AvXjNXhCPWgUeg4Kps9NGnKdmwe7kMqYP1F4jRK5nH7ZLc3fsS5tr5yz3Dvge9JoRh1w2aQt1pzXVzyFKonRrzk",
  "key29": "53dphdpvzYHHiBz6wPqfciwRHUHrJmKWBGxcNJdZxRCAnFQZiujcPGBfGjLQPJr8sraENjvQDjowCJDtSFag3f5R",
  "key30": "4PS3WK7DRqcoWVWHuXeLmjSKoGuYTFnEXjKcPHj8wVt5CvyjrH57GpSDRTaAqM2jnfEqpF9BbmuVYFbRmcovhsPd",
  "key31": "65QLb1At2DGYVfWQz3DJwvqzadYwdvtzexsz7GGRnxeC6RWEGoAswqgdCjKmAwCu1RtkjxMt5x6jf4tBRjuSr8Pz",
  "key32": "5fFJBuc32apKD3VNSyAWXQFmeLg4ceoVLV4jNwoEbCHWWKzHbAQ7zNGV6NQ4FqAHGyD3mxxrhBaHJaYfxJnWLJXu",
  "key33": "rdkTjYcCmjimSobPWbLiSCbPBsLVn8FZLUSbTvnkzxeMopfgYbScqPkVyaigTrMduW8YmkbYvnGBAVHygQmcsgu",
  "key34": "2HFsyawcvHpHp1zYSbn5ZUrrw43X3Doa4rUjyZrGJ5wK5kgQr1xCZs2J4Mt7a2FzqRUNt2pwCKhpdLXAPNQkpcGr",
  "key35": "2u8189rJe56yc8rVGFgESYApQfWxh3uMmpq4pe6udt7bQT1Hct5hMZt1pGsnWwxY6unHzDgowzc5uPJXdrYuG9PD",
  "key36": "4v53B4CcKrYDvTvQvZJ8Qzyig27J4VaL49Wj2VVMp1xXqHPNUVWutmSwy79ya5pdhNt79CTGR4VAabBQfzyDienz",
  "key37": "48WvGzwdqfY7F8ja7qK1e5VoWTXwBWCoQmZXMEu9W2Fg8nTFfwDkxYYXADJLATNfjVuF3J3NM8J6VsLLYSpTpKcQ",
  "key38": "5eF7j6UVjEJfvJiTjke9gB6BF8Nc21zsL1Gp68ge4RS2rM5VaijqKkYrUkUEWSbVFzCVSmM6xUk8pER2w9WeQfq5",
  "key39": "2zoV3rjkw9dcxqfbvgEjiPUyMAbxZ3E6nwpxpN53ue6jfiadheuQStA2WB3hEqrA96adT9Fv2broviN3tzybNMsY",
  "key40": "5wSU4EKEyz3vqR1m3DqRugjpU3GxSUQw544S25YRjk1JMzvk3JeY9w5WnpFNJT4Ah5swwTueUFrn4j9TRHuJBS8o",
  "key41": "3YoyEZkJ8dFGZb3zNtmn6QXP18tBmj4j3tWvRYQRJ9DTT2AZL3oDjq37eKVgYxkwCHtVTA3UR6jdeHpxE7saYvg1",
  "key42": "3wNgx7dFXLfgZA6FYDQvyukscsJNTSJQ3iJQZCv2RaD4vTaPHkywQ5PmE4z8vnWyT9fRx5ojtixpkEEe9QGunS6Y"
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
