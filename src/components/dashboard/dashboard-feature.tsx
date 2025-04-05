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
    "53ptqXnpmoV8UijouPz1CP6LE5RHhbBVTmCFwwZ8cF8eXX4KwqdN2caAT5XKTZT63yTfkzNRBHTndbd64rjRYqfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WNcA9VqZaA3uRhWyFBhPmrSAXjB42KvULbae9mnZhTWWN8QmkMYVHasXFU81fo2Vdndd2k4LiXVmkhofNx7DYS1",
  "key1": "5juinyy9pLZHig6SkdhkVehKsobgmjjzgu24djEUNXEV1S4TC1qZDQzLT38rqRCmKNUxdaBHJGcRiwQnu5xThFr6",
  "key2": "4GNQeWc1XuQ47wvQwiMitSXqJKH8P8CVEAgKuzgGprDnvfpsLJSbEWfoAjZrJcJk6Bh7NKivPv85VsCJyJAm8oQH",
  "key3": "4yUqvCt43nDL6VcqBy94LzqQpEzc21Ze2bQNnXjVZCGGhkjvRkDUjyVwV2vshiJ8qJDTxrdrsQKsuec7tqQ7yEAU",
  "key4": "5qs57XqAYuxsNFxVrMTG3g6xkz4SUKhxmobPngvTc4oMzwTVy4fj1PSsMb5t7qJKceFjCrSCGF8RmLkmVpQkS6Q9",
  "key5": "5AnHM7tDQDq7AS3kMd9g6senmncYwNszgcHco8kNmqYmUQj4ndLiudfFJL1zz8TWfRZwyeFpLJDH5RXNTeE37xP7",
  "key6": "2FwMv8X7K8Ldcn4EWRpDdn1WYa6iC2q53PhNgv6QX6ACttMUVodmJEYDYuPJs3LitLrFz8BrFMzANndzAYJ9HMN2",
  "key7": "yi79yMzu1q7dTdwEV5Auofy8tz5urF33f4WYL5E712LW3aAYZHcY54w3NBgiFeht3ExPgthXKLGC6iJMwps8vzj",
  "key8": "4BQTWvECcoDw7Pc4GtA9moBwyCfPyh1CoLzskctaokMQuZE9VB3378Bu59EEQAakyZujSjdACV1AtzUR2KqkU1JB",
  "key9": "5ueUqYbio6UEEGqDXvgkDVtNFRXnB6Q5GihCvzkH3G2hjGGE34dq5RJXQWdBkCqR6WZLAfPice5bbbHav2djjdRV",
  "key10": "5TR39VnE2tJcqQRWPUniepnMQZdCXTYxdUYSs5tj1kmBBVVLzKq3GdMsGaFroAGqU3arjugn76iHejG6Lg5Fo6nv",
  "key11": "fw5ySdh7jETmoZ6wSB65W2hes7u3HWfwvSZzj5Hn33xtpkVizbANTnFZNDtxkTvFDLypi4PXDgSQg16vcXNm7Gw",
  "key12": "4Zc4jngAnNroUgs6fyH59cP5DRLdMv9NXi7isPZ7paR2R1sA4Dsa58H3Th6aikTsZPjEsSAJjCnJkxUEAAX39vdy",
  "key13": "3LonQtxs2vHXkDST29jo5GLaYwmJknTgYSYNNgYTTZFxC4bB7SjADAt3gsyEQ69DB4nkPECVKKC2gHymBdY1VNe1",
  "key14": "46Md4k7hRh92nKYNRfnR6kYPhn224M3K39HjJxjooctzePenMPyJXB1Jn2T7RhBsUwqV4gz7jTk8K4LCZbsPXWLN",
  "key15": "5BMUgsYtEq6VfDrFRP6dGdoekLLo8AYZsQAtMfkvjRUa9Dt8hqBLeNuKN5HBXh2yGxkKYxjL8ELYndQz19Yf1sB",
  "key16": "4StWpurLL4hHvNrzcXMd8BVr2qD8JmBYHTJmFsPcTsjtFRT4eu4DkmRAPa1HmbL2qMMYLWVkWMtoQjFXBvUNNfT6",
  "key17": "23vc64fqiRmEv5yPv2ysd4ZdcmHfKxxr3Qz2VAvjFrBQEu282YXBKA3eFdiaXm8wcrFHf6CFSsygV5NjTJtmgPUh",
  "key18": "277LH3tSA5RoCcVQroc21T4mS1Gpg4BALaj2CKgViSJAHNhqqjJoN4PHgc7zA4tegsZ7H2MGpXb6asnBgapLeMcw",
  "key19": "koJURChYwEQjuTKdjNj4yuK92hhujqCZeonUJtKPQV7SRiEvv1iKDGceLJPLsHTEgypacZUcBBrTA96nTRT9yRL",
  "key20": "4MPVjRhCQwQMFoKbotrjTwYQVoLVjskNLJdakgQVEnogCHFmpNuFtr8J9xrJJL2cEUAN4THMqkE3KAkYT2bm2Er7",
  "key21": "2iUjZJzUXV7bMvb35j3Nezecbkn39qad2XsfYkqNkjkZWgmFsWAVX8Qwrin22KjyWhcfQv4aMSAqdreGY8zBWEN3",
  "key22": "3JgdBboofXhucHFpDwk6GgD8kpBkLZF3yipr722TijVFaBWLEqwxAbUWCPJDbLbCoeyqswfMp7Ss2fT9SyVAfeBS",
  "key23": "5N2XPqiBCKBHD2h6AZcDur3LH8vHVHkZNrUfc6UYvE5Q6G4ZzAngSN9iVqkRUcKaEJ4LqxxKzjNmBtweYN3WhgY7",
  "key24": "4mK22NdxG1fYW1LreSWcBPAjKTfTQvJ7NBh6jQ7Yanmq5nbknhUFJLAVKEG8n32jN3TeMdsBDqCg6KCpg67xFMeN",
  "key25": "2t2UPgfCstgWZAixLizVHtsLj29nBjMiwSEF99Wf4qCe2awPEmJZKWwkuyWx7XxMoG11GsM9miX4m4caW6a53im8",
  "key26": "5964CWmZwz4hvY4Xc7rCENgJ1qJ7j5XAnyuRS9GJ6xB1sJmU69WqyQKw85XuujvBHF26w6kKoX5tWNca86zpz6CS",
  "key27": "3aBizCnp7rvnaqSQrzHKY5GDweijP4ny3RCfJVYrKAhp9g5X76zpZt6bt5hsDxyi5ysGV8d2gdhhNq6xXsdY8sSx",
  "key28": "4kVzwPTRweY8Wc2XebgNAg6QxQYwLF2FxhBRiAezsKmGiBJiVEnQuQCHtDKPYt8NmVS8aRUWjJET6TC3nTNAwZcs",
  "key29": "5cSKXGirRh2xw9cdFXREfRKgdx9u5VU1xyATD7k5ii3dKiES9YHSA36SmBe7jK8QFVid2gzDhNZCyPWeeDUPnmfD",
  "key30": "4dsn2CkNVXPJYM3ccoiZWU4Eqcu9CnhJTBv6dgLbRyfHBzChu1ZTttTNQmXvw4FGnMYWGBU9mFu5CSE3Jbw6Uq3V",
  "key31": "23kCTTrR9KUZBpUEn8mKu6T5qfu3nfoBzAD65z2DJDKzPKvvMoU2aAEFWwki2kMapaMTqbhy2thxyo1LVV1g3tGa",
  "key32": "EQGdKfi6USGZBTGeUpXBrqh7nv1rWZkCHmhymMi55SV9n1HpyTsCeU5Gy8ygDNhdMYUbXDSUaYtSJx6webQdf6C",
  "key33": "5RbwJ2eY2crAkzK8Jt24VzSCbPnNis5oJ9ECWj5H1e3idG5JTGMUAKtbagsmYC4G34q5owD5fLefpmCjKwv98WPW",
  "key34": "21ZfQPXtNnEBDjFqewSnY8MDYpK9gkQrMwUj52e5HSVKgQR9rXRbxgLFzEzpFgk5z6gaja3BCxqRCNo3XY2X2hvb",
  "key35": "2qtxZvvhJd758ULoCMornbyifhZEF2CMafSKePMjyeLoLo1J6Ls6vjYqb7zkp7Wf6fH7z9pmFgvMyj2TCRwB3kKr",
  "key36": "64UKkrgfcKWGYLmzwn9tTLy22x94RCYDZbCXU2tv7DrNT5jDTPS7nqhv3bBDFGnmBJG3VAW9RfxR7rmBZrWeCdHe",
  "key37": "23fqT2oE79ooDfzGMPviKaNyb8q2G5Pj4Qync7k6uePLQwcZW2LMvYi6vrY41t57m2qkQEmi5ALn3yQu4DUTEfD5",
  "key38": "aywvVbzsKLwq2JWdA1UAqaCfuJXU4HEZw2mzCRFTTFQG2C6STfJ8CcSbEyw8XVkn3rFror324VVG7mZ4uuFK5nW",
  "key39": "Gz5H7ryy93XVTrVSefmvWTomb28iraxf4SEP7Xi3JP11VNf9yVJ7sMgonB19T7CVvsW5SYNpxYX9eMt1t8YhdK3",
  "key40": "2fx8VvJRmY477UoMawuYp13WZHZtUuBByzWyQbCyc3SBLWkCJhhgR8sW7NteDELbr4iJSE7jwBzBzMtSFtuMoQNo",
  "key41": "3RgonWV9etQdezyMx5zLt1FR2qircG7kkna4wz1yhurfqrESvgJsX2Vd8RSHxHkoCGu6gmzwHQjMw3bAWAFEgWaJ"
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
