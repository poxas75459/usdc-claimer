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
    "EycdjzmadZiYxENgdRkPBmpFE7ENioNnJzgLHKMHpY2ob9mtxYQwLtVEaAGJYcYXuwQ1PYSwPgvgFv9Gv9cuqjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jRTEYo8Vmhi1u3tws9xXWJYpPhhJhFoohLCVvUaxy4zr6zV59vWPBDfrbXZVYnAyQF7n3GRWFZRRi2jdHzU5d7H",
  "key1": "2kx7hkCcTiSEByFNxRorV55TWcdyNd7Qr1dTrayoFRjaJFgkiqv8wzML2CPnXD2RiA72wjVLQf8i6oVRbgvzBgWh",
  "key2": "2Pw8UbLiADxcws1v5vyttf7abh4fyjLBMgr8GyWAeogJGdRVBSiSeujaAMBaXfEBavgXC99GXJv5wePKK5r71K6Q",
  "key3": "5kcHjhJCJdFh1K4p25TbTWL8GQ1vCecy7rb3L3i7ecN5anhM5eT4XqMAQC2sNvJkthU7VQ67Ka6FkLDgDTYYjPRc",
  "key4": "3WLJTL9sFkRZRC4puGsCBUqsG9rsxDLAHrQCaSpMpDeX8DQnLWTahMoVj2MtbiZitYPaoo1EvGsTD4UgCSxeBEGq",
  "key5": "5P2gTjJoD1SMFuVwdJ22KdNtqs3SwJ7YyaaXkDGW9858LFtepcH8KQo1MtcBancToYaVtUea8nR46FjxjWRsouXV",
  "key6": "3GWHCsUmEypHwy1euPbGDZcoLTALrMgkbaxFA7T7avotuRFnVRgb9XoAYowHULwcTQpZzM67YsSZEkrg41TZwGPd",
  "key7": "3vPwTRSmCLkw9tRWH46yCADFEyYHa3k8TVfvLguhSopVgTnXuxeSVA1tEUrYZdkWAySp9HUKtCrcZqaymSH535sU",
  "key8": "671SC2uwQz1Di9jjwvDioz4iRQVoC69pzgja7ME5pCMgzNrGNpEAkQfD3xYiLV8QNVWfZAombjQXjWSioZDkqPMp",
  "key9": "4JRxkJS1memR2fbwwsJMnTMhEisBZfvSUAmFFtmEEcbEgiYPrX9Z5NBZVfCiaFSmFZZjKvDxGYZ45ut1kake3PAd",
  "key10": "4SJnDiyVCr4nEfWjntkYRAQw1JFevsZcGP75aG1JjPWDapiup72ELKLnJWX2J3Qox7hbfaxQ34mWjbdWC4LosGzQ",
  "key11": "2jamXQaEK3NFPvVoVYhSYXZ4bNsCQRP2XzkoXaSDRYWA6GxiwT7Af1LnHEUFWa8c99QM1NHUVTwnZZaiEws4qY3y",
  "key12": "GNyRNU2dtzTGGvB1iZXpdFJc2kGgJHD52eyDbvs3VjkbVRjw9N24vnxZkT6cYCqW7smtHxKQW5dVcP9zcsnZXq9",
  "key13": "5pqAgkbSpVt9uZGswkCfSwtQG51oRMHJpumJ3yCjLReMpA1tCbZDe7WinBzVSXHCPYpLC2xBKJXtFGXjhxKj341R",
  "key14": "3A1rKTqUrQ9snwFFQoMT3oudfVhNxNBtSeHwvBVsb4VsxaDpa252f5s5MqvKEkXhoN75HJKNn1nDYp9BZP5pGJSH",
  "key15": "EGYV3t5Qn6LCNjZc7F7LiebD6P33txkpqXSfZRNFJdRkgzVKmqv78XP7caDbDA18zTeJJQXfnDAmWaUs1Cje3Ye",
  "key16": "54J7kVcAizd8RH4QyPW7V5mKmpTX8mbN8aU8Cwiqozb5WbZVKyT9g5hcvkj9HCPA577r3j3Qa9AEgJ8eiCtJsNHg",
  "key17": "2BVMeqeA8CSLJqw1EzoxGFXWhc1XYd1vQWFLQYfMEQTHTtRqQaQ1RtcminWpQrSCpQbowZuMc6ZHvmNvapDPGvFp",
  "key18": "4hu2Eqg8Mj8udprQM7byEfoGxpZr9gRTgkDBaToCcyr5B4EqzW4qcaXWwkFyQHPVPTrXkiuMaHMivtLCJfbFEguA",
  "key19": "4ZMQzYNZbLLaq7GXEmjze6RWzTYaR91iWinwUDfHZm9Qt7YvsobJVYzGnMAD9tbPpfvYUqhWTmC5yGSVtixssfsQ",
  "key20": "3ENDBVsfmmr5Bb2RBhczX9dCzTXJTfN41Y2RMGPvjmvrVoJXRmqR3mvdFuCaNYkKygaS41VFSHGPBqcaCJiaPXbb",
  "key21": "58KBdNcY92KwJf6r6w2dLqmzsfUDtrz9LzxjgF7iMsLxjD82LksFN5ShoXJvLRGWHt8yQZJGwz1sed5qW6LzczKm",
  "key22": "4zBFy9vBfgGxVy8pmhn3RS5Z5ydaCHbe492oQoxTbPeZwEd7jHHyMd5dTfhj8MR5xXznm8Hb8YDy5azmSDHGFtee",
  "key23": "3kmTkYmULiDVLrG9yqnqasSUNrz5hqkKSchXJsdKMQF3pb2fmwijBxGG29KdmnnkZGTDCWrxvvgLXMc5K1wRWf16",
  "key24": "45NUXLY3tP6mYv49e5BQvRuLQUeo2yX24W3LkL5ATLWYSFFA1kF3vYzHmpsjNmYtXfBJ6rRqia79oASy4xrBUX4R",
  "key25": "2cssZgeNPJVWnGhDFrhnFusXVRwabFZi7JbjgfKP2ZZGrydFHu18uzfcB5xWVv2m3Sv6nFcx2KPtnL3sbbwsqHDE",
  "key26": "2tz2spCLAiNYYb3Mz6YTgU9EMgKg98LYrmKo6x8k2pVXzEhPPzgYergnLUjnCia71SXkFbLe4yjULEZwRXHwDMJT",
  "key27": "56AkBMW7YVWf76Et65MAU6r8ZHanAJqgH9txHztXcKn4hGtnpT5zNdrooxXXbxFWxTptjHEkk4Um1a1AB66kFZiU",
  "key28": "2GTBcV1aR53hwnty8sLhx9DjVtj1Xw42naDvunjpbMYuqGQpPwmHG3R1HdbBTMZjeDshkS5X14Fw6n5eJcnaED4g",
  "key29": "3ogixdsaeKbN1776oDyrSwzEfPXcexqkbA6RaxVMUGgqVMfNbgNxLXFPSjfhhfe5Hk88jBf3gWSDyAn7mHvgHUWJ",
  "key30": "3WdV9sgWd4DLN1hm4Nutm7bStGEf7MeZEZiSzWD7mcMia5KCAaLQZxPofTsLzQfWZ6RPBRFtoPvPd1DA1VaY6kwF",
  "key31": "2kpLcARAaMuMES4s6YAPAYkP6ZpohTRiUGkJyPib1hbjaEprdKdmhhJYwZ4ijURr6fsGXpY3iytDJ8Rm2JuvAfKv",
  "key32": "4wj8W5kwDbz9QKJHycjduzakER9QqBTavJwZ29ZJL2VAiEHPHdUizDPgKmQNhsrTry8RkY9v7jsPCJcWfZSmfwsT",
  "key33": "2NkAUCTmFWjfcFRh2ZuJqNkCPoNtTW2Sfnp1fAwTUzv7piQDXzJTikKU8nbjxaSvgddffUg9sL3YsSYpM5eYHEDe",
  "key34": "2aYUtJD94boYZLKzuSCkJENAmjngw7GRvUj4sS5Pww1PRpfiixAjtb3gvL7YMmhyo643zYi1k4oeLgWwEYhywfYn",
  "key35": "5bcAgy7YgrFDjLaKDb2wGqyTymeDr32QKdCckyQLBW4x76WjstNZ7dk1DRog129WcG8X2vaqdpcMRPFPVYD7s3HQ",
  "key36": "oQfdtdZLRmC7KXQTP45pbBBHw2zHQVfEieQCmE9wou2DoeAnh8KKgWPR5fbs1wd1xL2BDKVoDLroyB3PNwZBMyv"
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
