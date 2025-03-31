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
    "4iFdzMH4H42ygZkDf2LubCEq5vLrwMSCzhhbSEaXkosdwKCEzGuxZkrHT3T4jrqSkrQgjyptEZybHeZN2RPH9cNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSg6stPBaMWYUbYvf1S4kUrfFnSjqFjYmfdeooRjJ17KAyZxBqLfWfFDjD1k6LDYLKgZMHqLerV4SH9f8V2cSht",
  "key1": "3wA2Fya6BLeYFdzp9yNG3fvPxDf1WcVtTUHcs5is7VuW3mJVuzFM2kf9EWWof3wYjQHgS7nPjWHouPVwa1cEBGxU",
  "key2": "21krfGostv8exJsdZ1T2uyxqwsQN3PVpva2DbVWCwM7B7NLUNFb4kv6aHCaCerVHjYk2EcubTvAmcYrGc84LddXz",
  "key3": "3vToeDPqMDjHzeEoV7w8X9EvErBoPaXF7Eq9ExwtqmV1DRmXn7iaLc5ZBmrqC4emVJvXnVR4rfJP7S395dm8Ztym",
  "key4": "kPydEqHGeMZWzHSt3ezHuM2VQN8Vk9z7LSAtdFmWRWmgZaYy7Pp5pTirE2LA9Gkw5sg55evRYG9bJas2Zi7fcVD",
  "key5": "5Ze8qTnmwTzw5Q6ZfvGUZaNpypCymUPY1jbWCGc7VVUzrF2Dsd855gwbwgfxv8f4tQZfYdQVsN2fzwZ6f5sno3b7",
  "key6": "29QHHUsvegRfRwbW9yyeoYftGHEHKC7tobt7Z8gRURzyV9SWg5UKD6U1KEnrGtLnKjr2RgyUNfaDc4oP5ECAW6Gg",
  "key7": "2eLa2NuhYQbE75oid7hzwqtZZnrG7VZmg3Fx59uAWaizKALL5AZXfA88pSBDkm8yft4VJnoGsjdEJrDnpLXKZm7C",
  "key8": "2vYGq2qiktkVFr5SMfggsVka2jhSECqNyPmGKrJekWaUEmDKhSFRY4vC5z6EK73Tnd5ieYc2UkkNDRSaLiYKH8ij",
  "key9": "35ymP1jVERpgpM23iHDTZJ75MiKUwrMRSMBaC5c6ZB5i2r7c9WJ4aNZxgyWt12SwrF7PwXTTmRrxLgWnrTBi23ux",
  "key10": "2a9bmi65mteBXNQLndyaokLcCtwmnc8Vw6X1tCP4WH6BwNDKi7hGkzEjGDMhwwL1yweoVJU5JUro9jzcHGdFJyiM",
  "key11": "4UKARTkvVEQbZ4Y2mhmbufkEsjoqXqDamUh2ybwNa1eFuSg6PWcwnHxJFz4uCuCFVMigLRmeXM4sCYF3T65T2Y9L",
  "key12": "5s3rJ9sR7k9kdkkHu6288ZBUbvna9h2Tp23iU1a5K4ZEtHcdQnymtGHSqpeoLndMkMHRGjiXBswqoeeuu5yvts5W",
  "key13": "tKdQDLbtftkBmRKfQWBJkK68YgvudSJciXMwnyJhpiEgvBCSU7FpZaxDGDbsQC6G5WFQAu99X47K9UraeK1cZqi",
  "key14": "28tPy8ry7aTznxCrbHdoMSVUYukuWKiZAsHxFWBaSsFmxscKVvr9i9M8mmNDAyNrbdZF5sQNzHvgWdJqAX7PqZt7",
  "key15": "2bxhz4Qu1PzuNguq96Hd24n8rPS9iUf2pg6CwsBq53PLPEY9x4hJGyfwWvk4bBM8zZs6TBXYsMVsfmTSnLWAa8k2",
  "key16": "2VEneh6YvvkHHTD5BgZj4qds3XjZMxoEfDvhxRWzzih69bFJuMiNiUR64qehszrF5qpeoeZkcW4F2HZqSeknc49i",
  "key17": "3d83FD3aK6jq7qcoxogtBtrjJMKxFQXqt18wV5e4CPKzUJAr265QpWL9SYEgaXMa2E9RTc2GrqSzWwgpvjUUpxb3",
  "key18": "2SR65msgfNPpMa8jbPs2sqpdNkzFyCHh8qQNZhgjZUweY2Lwj6fcL7i8dmyszrdyQGCAJgmHVbnew7Byko5RFEdM",
  "key19": "4msuyUibgKGZEh52aSUhJQtw1YqmUZ3WnB1yFQ8w9TXvJ6WU3zdhbW6bt7ay8k3jgyxaXGbm1ECSSxdQrM1mr6u4",
  "key20": "3C7yiCEpfcVVXtk65pXQ6B8QyNrU44Uw7BP6kyipD31NCqUDprHHaiZLzVgqrDhyt1ndEWWvJupR4iupsRejaH6E",
  "key21": "k5eirpBcsXzctrdTmMFiTh8KVYfSMN2qHurQx8K8KTPo3pLwyJv83eFEMsVYJPiFvHv9mqZC965kGDcE8hdxqFj",
  "key22": "2kzTRoZsEPqH18FDgwPs3GMqpdhUNeFnxK3kXKEUP3aTjTZ9yXV3GKPYV16GAppk2qRaainfzD8X1ANjcN6w7RQi",
  "key23": "5AjCu3X1g71fUeNzjzTUmgN277QJ3WD5Y2sjg9GB3bFYy3uVqmaHx51yTdzamQKMvhEABGW29KRjErRTwsfFAFzB",
  "key24": "3ANANFD9aGbQgHLHxTYsF6yyytcdGv4avdLadrXr868LUaCX87nrFky1bLaPuY79GQwqhynaJ3P5W6bNmNWaJGmU",
  "key25": "3XV92H41SN6a5bU2p1NfeThXrR2Wg3prtkCcpxNESgr14rDJzw9BPUJeUS8eH4xkp4gJyLr4xSXxVibeNj9GFTRF",
  "key26": "3cPwwir6P8sYC1kYwhgb3bymL7SgatSPYq8Zvsg4vHwAxN9zbFQGJZRMTzAnkE3YPWeFEzKT8vr3AD6aKbmMeGzy",
  "key27": "3GSMozRJdEVPbYKnjoyVT5h96dt66g35K4Gz1M77wHL1B7U29KYKqtcwH9DpVqjZPJj2dsnZmuY5J5qHtfMydxV6",
  "key28": "2KZB7qP5htujJJHanViao7YJSi5sfWzES21pvjK2Yebh6KYESEhvCekayd36gG869M8u2iw9JGe4TsyP9BFBSR2j",
  "key29": "SqbnGYbrVv6EqRXnJFUHZ7ioTHQVgJdR3GmLhdQtofo3cnoSZ3QWbJgZtWwPZySRD5bL8xosVVLX1y2eUWZY8Wp",
  "key30": "2kV44BrtxuQT4pxHnvzjhcvSahwwV9KtdceEutrkBM39VgVcFXx7DNmsZvsrWZn1TaXDLRCgeMSvSoUhPU2SoXgj",
  "key31": "3j7ceJLBTzevZGuWG7Uzppyu2Jswd4rASivZoz1t9G7aKsyw1nmeH3E3eAtQY3yNQRJaNjhphQjPvg4ywVBGfSCU",
  "key32": "3LgvjuyeWeiQQaEsenM2bpDG7v8WBjbTSRJLdruTGLWKtzoTxvBysAbaGqmSDpKSPNaKo9EtTMFAAdXM2yjp4iAk",
  "key33": "5YfnGgLetR38G9nw4efFoLGUSE85rVncrASmPn76fpiV67RyR96fSo5mozmxovVtXqDqLXRRWZ9Ewir5jRBP8VT7",
  "key34": "3syE3LKkQpT9Gp5ZkvSNQjbJKfzMrAspMdh7YiovzCSC9zGjiNou3dZaA8ezHAQQoC8gqzrvh8tbZdKyU64TDKqG",
  "key35": "27YRLk8P7UpboZbhiArCK1mt5PwiT7Z16ePeLxj7X42jntay6wSdpscNW5YHhEXC1LUuQ3McYKUQNUFs5g9Yr4xa",
  "key36": "5c9MZZaWn1epJTquNGMqPN5aaDJRDzu1seYHu2cgXUk9dQHntjhT5rHse1XBKtEVf9ZWuHbU1eVYiRb8hjRisair",
  "key37": "T8uzFkMifs8t6obxNrDKcswf6JetwUhmK4AKk9o2v9zvLQNa9pT8iHCbHhbcdnS7VsVuDXZkRzZbYNnnVRKGeMz",
  "key38": "zwx8wC8VjfUN9K3a7q73RavXDMkG7RP7y9Kithn6x4RxW2P43nxsJ5z2t6X56F7UnM6f634rZ5s1BF5BiMATjBs",
  "key39": "5PMh2JZArpKLCWh2Ar7wS4QdgnZhqAFVZrRTSgdoSBfGW8Zj91nMPK9Y3Un6JiysQvjW21bwjYnxxbdzuh9z9Aw2",
  "key40": "2PVhztwDyYX43Ye2D7pjveMrZJmQ14EiKkxc6aMFBp4EdhAGQNAck33EePK3wbYUnnQQzNL9XiKyQaJzgd1qgAhZ"
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
