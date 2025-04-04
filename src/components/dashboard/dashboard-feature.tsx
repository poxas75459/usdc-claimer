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
    "2gJ5ZhTUpLo5P8uvSCMoSaUtLViczLybqDzUFoDfMSKYLZAFJ9HwqXJHE51MH1y1ZtYeatARUczmfkqTqTuEQFMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DmjXik4KQWM997M1ufZUbLWTZEHRQyUgkhXwkD1ZS5GTG3MQL9PsFcoFFrZpjz89UvZ3bcMjb6CFiM7anoSPdw",
  "key1": "2yCzJdDv8HCAxbYtXckgEYTX8zusRfyxsW8FN87XPbTmcMwj4o5t98ju4Fw7d4B9CC7qiJ7kziKhjsTCNnqMiYXT",
  "key2": "49ByEsdRrivJwhYTVVUKrYYPbMSofgszF6uXL5iTF48k5sHPGBp9v91pHJwfgHSi6Co3UfmK9A4uLmb7poDqgcCL",
  "key3": "2F76F37RAY9hwKXMdfGBFTLdKz94ym6eNSpJ1GWPCAHVpZJfKzKHiw8SsK1fNNQdKEazHHrf7wye4oU33C8ihKiU",
  "key4": "5AeLX4zb8zAwH9GNWgWn1kyhwQMN1XvmuHNjjnxqJGf1tbkevN29ueTnaFzZQE7BAZKYCPgzRbNcUt2S7Bd59WWx",
  "key5": "5sx93Sp8jArxddxADRb7BNrMVrg55BfR2MhsWnzXbpdPJEBeRGSjoQ7V3p945VmabUCmJZnVYg1uHfJu3DFAHbRS",
  "key6": "66J7TJRiyPT2C1gy7bjmyM9iphbqiNRGGCfp4a8MsrnJ7k7EkZ9Y45KTRq9Ny4hYjkZMvKatzRecPHrXw5tGt7Nc",
  "key7": "vRbEr6SRnghmFe1NdBGTNkhfmtVQPdrXwxSY2V1WTTF6GQsfw2Jid39VKqKHnMEcfdvxiMLf3LvaLjf8AzMgbTF",
  "key8": "4sqLWU6EzBrDGspgHFyo1GXFKBDzkR2UmAAwgfAJryK2i9iJUe2RsL6a6uCyTDnq1CD7EZYE3aVrrDiAqJCWcTw4",
  "key9": "Tv8hZZgDuriy8bcJQDDm5czFvaYBRXSLKw4Ahezu5HgN4ycgmUL9Avd6GyHCsoeysfFJaKtAeDCcRWKGmi3yxV1",
  "key10": "3rbe4bNzh7ZcLCF44c2kEHn42WXxTBVbt9bhtyHyKynvr2eEAYfocR6isiYWyzv1eQ6N2pcHUXzti1bNawWN8bHH",
  "key11": "4r5Bor4NKsRqtyLuHgwjza8txUYLLU4LYLTZbuCE3s8zJSuxAUcKQwdTj4GJWeSQjNPRcfjvMq8NBJhp2j95W1T5",
  "key12": "5rjKujz9rZeWcgUeXZzpYCHP8cY1eJxwwDnJNSqVd6i9FKAEGGW5WnXH7df8uD9E2vtBTmpBwJZKcCDH76xLiEQN",
  "key13": "3B81KRuqiHp7nXErrCq74furX5ykKqPY1RbunC1QqbJaT3jrffgxq1gitHEw3ZfEASuJztUz5GjEDZjUxo3WkHwJ",
  "key14": "5qmkq11Cuc6Amy1wGP9f43u1GZg3EaxttMbpgALFtapcueqNsJzqV5nyqaMFe7E4sQjehxGnhtSFFNedGzXF7Ug5",
  "key15": "5MqWcaa5qthFmZ7PEhFR8sPdDKz1CP2uJFtC2aPPsgM3uJ36gKMVFbuavcLRu7BY2mnu8WRyHCGjcPJZ1uJMKfUM",
  "key16": "3otE7cwG6DpoLhzZjb7LNnzjRpkq9rxiMYL2bdrPy4zKwnLpCQfJCu6WL6C16EvpB3y1SagKh9u95KhQr6JHiQvU",
  "key17": "2xomr6ThBU7ug2BvWDnUx7C9Z5oXd75peTZvBLrm2kLWiG3wYwAWbruZCcyXr8xQ3V58geRiCFqbKsRv7imcdZ3X",
  "key18": "4Bu196ZELS8boeY8RkgYJKZN3bHmejTFiVR9AL9k63JWgWzndvVACqBGumdT4jUXE5rYaUymPKsgCud9DEfVMp9e",
  "key19": "4tsbMQaVDGkkTVG1pn8PF4rd5i3sqv4Xf9Mcqmg4ndF3nXjmpMz8q4beqgdgXmsjGeVYAvUzCP5YAqjnPiWQioSL",
  "key20": "4EhfTd12EtbP553ix1A3uJC4gyU2gYtLZB4bsXxTvECYZHEsdVRE2xYkRVdcD2vWqpu2heWt4SkwesMH74n75v42",
  "key21": "2J4nQhWqYsuyE5QShaVu9nibiNadUqUcVT2MntxftPp4M25BNiXn7tEMpefyMRRMFZLb1owxfQGnwMtow3UCmV8H",
  "key22": "2CApXF5QRRm1xMLQnHJPhnhfYhy5aPBjC27jQ9thSQF2pH4YX4abAHVz5EnQy4LF2T2w3A4wyv22yeRzYVDis6FC",
  "key23": "2D4n9cUTPLxAUe7vSz5haG7692xjnsig3aL1kTK4Y5ArRfCD5tiFty3mdg7uDBJKJ5uxyCZRP1a5y2xrPTJag1Zz",
  "key24": "3mrm48WwzP8vjqKnAP6euhL9F7xvEQpbWixM9DecztAZ72BiQkxYp4MGNDkfZ3Me2JLahDJXbtsQNtXsBb25A4bR",
  "key25": "3cM33BG3f72G3H8N5UX2Fueqw2myrhSRMwBQrHV8NHqP3Q1wMZGxp2CnGYUQ5rTYGdYYyA76MdHAYLZ1R4vGYNXP",
  "key26": "2rFcx7EjKa6CEbuY9e8ufLymrdebcqFKFzKzL7mBG9Qpfd3GacJSaYocEtFz943BsqZMcm6XzaxQKY1qMADMAj52",
  "key27": "KL4T1RJctPjUMYgeNTuYLAySs6xhtkJNhsXu91JEvkX6FURF6qMjrWJNsazyiiszjV296shKaN41rkhJ9mwbQx7",
  "key28": "3cEVy7f5siKAkAY5CojP1no3rLgfaa9mZner6UC36EqGkcWWvwzucfjDV16HngRzmNiB26hZNvG5dHBDE823upLE",
  "key29": "5a8T6Uivv9W6u7krgwrfpuXhWfT1sHdq5rwxcwBoyEUYRMBqghuZ4NJeznQuY9xehvrAA9BKsYyFJ2UspCbmWFCB",
  "key30": "3Ur2NDBLMHafVEuN8JzGFApFQbQguna9ypFRLTcQMdG35g8wP1nGEGU7TWSjJ9YE9L2JuMv98qafp7Zr14QRTJ7K",
  "key31": "B9X8pHcGQbB8Kqc4Y8gbcLfZDYu1Sn4SQMoeSkm8jzQ1HTx76aqF9TNQL6L2N2Jwm4CNiKWqyhWfxy3Kx64oDg5"
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
