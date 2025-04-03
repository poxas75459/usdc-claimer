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
    "5GyqUfjhzSu4mtuCs9Q9UEc3t2mV1ZjjnSFwvnkPnVR7f5kiY4TZAAgv6Fn9kYE4H2m4ujQBQmFysXn2bw1CyeKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3iC4H2cjSB7nHiW6quLmccPkWguTFG86ioqa6FwVJmU7PAr1jTz8iQXQ1FcSeZRbcEDVMtpGoLEEXCpMu6otsx",
  "key1": "esNrWCDFo4tb3iB3iH63q43Vw6b8u4kQfn4gUK5wvEaekuGk1Vn9qh6FN2sFfXZ1i1sW5cTpjFJ5XiBMQnTwUPk",
  "key2": "3s8AreUb5Q9UKeiNTtkGXHwPKCepRTXm5Fudp4DKPNJN7Nm2A9Sw1BWyv4PcborijZvFFtKjUx4E1g7D3QzmRvks",
  "key3": "XNj53Z4C9BsgSATbqjuvE7v8PhxhqJEMK4FUCt8RkfEfTL7ZbKYsxdMfMMivywank5wLCzfysePPSxPpD1zE2Sh",
  "key4": "2VPp71yCrw7RwCN3GZC51oVnbN3vLAL1Y4YMQbUd3AqAom5RPp3dL4fzwoyN4xdLH1YGP3fLarTurr84E7Hgy93Y",
  "key5": "5tcyYTSgYmgpCPwk5uQcAp1ZodG7bD67h18Hn66E814y2op27ohP5oh2TfMQ1snjh7jYsJquwipPY93qqyrQaMvw",
  "key6": "2xzWdvQ31GRK2X1eFDBz8v63cbJ7P3yioMAGqL4szh1Ua2AeStu5gsq4vv2wUd1ANawUu9vV71Rotqxrk1ZmP7zV",
  "key7": "3oYVurNK2qRhZV2rjWb3aGaeE1msZQsh8vFJzqsZpLwLRPJji1PxfJGZJsxKGq36FB6MfaK5MAXgG11HymMdePPA",
  "key8": "5rGW1AuS7GhGBfeuSF7GgXLs9Uc82gYwk3S45VZpGnCfNV6LXe9od8UTQnGL73giUQrQqMtPPkuZycExvnkVS9uY",
  "key9": "dMRt77Tnek4CeWUpawyufxg1TZAL2ZNRupGYkaxwbXRMHVhoGk8JJvY967iQTQtxGegSvfNn4ZRmqeMvuaxFA3k",
  "key10": "3YK5pxWRWSygYpC75s4f9vopfEnRDs3fhV8MoMLrZyy4Vxf7JUDyVF9jTSGgVAgwchDf8BVZGGhi8c3TV1k5kW7j",
  "key11": "4SBwxrsobsuaJaJTWxotihbwma2KhwFjFgLp2bTzMfwBAwQwjZvX3aXLjuGHUhdPJiMquBGWPTsT5s4wT4o8v1ta",
  "key12": "5PzHQWBmKTC73EsHs7BzoydKqufRyTcoctpBafCa5Eg7S5LF3Uod3PUakFDnbXFNRNQSqSnnWr6pyjm9Ey3R7Dru",
  "key13": "5ADbkEWzZt7GVzh5Gq2jpKzcNnRPZ2ehceRFRbwEruD5XPCEGsnBa4Bn6vrdzxbgsJaP5GjwmTaLRAWQtheN5MqJ",
  "key14": "3B3y9dWQ4kBt3cL7HH6Y6sq4f4bpzXAMZ6gphnCzAgt92rHFyMwJpxvxP24UGRBW4FpfyLJ7ZW5ivpzqGBjpRVoG",
  "key15": "4LPPokTfXUALLGTkD5RZaw7S7JrWardqBFLoezqgCvgcMFho8vrBtEyczTdYFjv1LusJZbdXkaojm4rW1cvzpYs1",
  "key16": "3KWnZWHnKjFg6WYVkybLk6Y7WSXeNX7y8ZxabgSkqevU6N6LfNa7sUFWeixriqo6NgXrg3vu23s5Rit7da58Zij9",
  "key17": "2evowpg3Da3EHrEUmPy5dW5Wu8CZJDw5ehBf6hh1nUKFGeaLN74prkVGgELKELPpnDSHLK1jcRMcJKEoYvDo2QxE",
  "key18": "3Pf622E3SUSny3SuDd1qavon7o3PnpGrGwKRZgDDgXqLQbtFWUq9nh5nXtHzaEjBT8QopQx7kGgjQM6iQLVuez5m",
  "key19": "3xHYA9TSPjdH17QSn55QtSdes3Pk33cKPJygDTCb8ssxsEKDkR1rqy3RyvLaNySvmjQeduQP7gCT74TGd8ZU2DtQ",
  "key20": "kxJLooAcur13LpkebRtqE3JU7HSYB5LPsRGzLWrJzyYoZfee3WWsg7gYQm1Kv4tJAT741MWHFhp3goqZryRarCo",
  "key21": "5Tr2ZTo5GnPU3H1Ah8FAycaWTTQrUpMUMn1uTRPijoggkYUJVTiJsAxLHJv7uyZzaFBm3ss8K1mFCDJooZPX3XKT",
  "key22": "Ri4Da1X14LTcaMF6NeoRM4AmpiwvxXoZntA3vECTZDcsfWRceFGNAcEfqAWHrg6SRAEdWHFmKBJHE5Ao5q9ai4S",
  "key23": "RSNurXajaVF2UdvbBFmTDwHnjz9aBoBPhihRu8PzniWqZ9NVJ9gzubazUm1yekcjxoXbJToPKH4YehTSYocAN4b",
  "key24": "3Bj1mQA5wPHVUJEqNfVZmQt9LgfoqGZpm4WUxUU35GPAX2Z3FUHUqDcp3dmptjaivRMc8ExWomvu8Y2uY2hY49rE",
  "key25": "3aVhTCY16j6u29kYKrF8JFqPRyEHxSwpZzmRZFu9W88U4gaJZmbTajHCEXZF16pAbEpbGu9sZX5zQEJpYLKo1cFm",
  "key26": "HMEgZKbrynNE4s63prTzT3E4YiyNWZSWxE8XNfvGQ6tMZ5fimEf65438u7KmFyNsWETyqCo5pgBbKSaHmvv7CZw",
  "key27": "4gZAgfyXA6ggMsSXcdM9XxzNy4LQVucxZneHPsbSL3pxL9ZpLCG4umix6jekf1Qy8qi5M6ymxa4tBDznLouF7m6n",
  "key28": "62kyCLASAipF52DjkQ7tmkELiSez3xuHNQ3gc3bW9jUByS8pstHoyEtVzhjf4WFBA2uthhjhkpBdYZqoLubXfDy8",
  "key29": "2SD2vfNgp3p9pAJDEnQeQTtfZw3vCgcJ4mG7UscFBHPsU5Y448anbCLztPmVZxm6Tg7U6D8CJBYLjZyZ5QBnsYTk",
  "key30": "3ZF6FASgMXq87EicsSEB3phYKjp9XW9xzCYEaMxvJP2VsGinWRrcKSe1unxDbdTmAKFiuqMq3nSdtMbadT5oUZrK",
  "key31": "3dDgDnRD4vSpk52QbW2Yubz5gSBhKUDW1ouiqNyYVL8CC3moJwcMKX2Hi8uNd22C9bkRwPMZrZJz3enzN8F4xmdU"
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
