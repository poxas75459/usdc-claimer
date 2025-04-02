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
    "5Wutfy8Q4EMaDyJyauuhEUXyzYXdjBC9EW3nt5JmdUPDFbfSHqcvUHqj3oiXqZko5B4UjPfFFaXyPSXcn1TSVDyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQvFAb53HKorDsy7m17fZmUD5tHmxJbgiRe74gShAcPfk48ZfsnbikRR2fz2fHJM9EHzvzZ1ZceZy6uftbxUESb",
  "key1": "56HQoRC1oRC4fw1M2hZ1fCydvi7F7fW8fRGc86sFsNtc4jkgtbExyYR3dtbEfgSuwXQQjaUmqVsTEqYwuqf5pvqA",
  "key2": "WBkejevhsLqyo52pifM2FZ1iz6eDnsu7onneDYbrXLPqjNfzauTmYkkT6r2JnEG1PtR6T9BHo2tji3dki5543H2",
  "key3": "4dUcQyRDK83j6pJLE9U8zkLg42C5eoASiCT9F5z2tNATCwV4p18e2BefXQijeQAYHZtFJ3YxU8FrM5vjbeW7n1kp",
  "key4": "57arb3f2srK2rgrJVm5qdmES8o7dKGqA2LASnFhhGgTG5u8Qhca9TeqMnKKiVS264zwVHLF21Y5Nf61dPkkZVkXp",
  "key5": "2Ck2NjwHBFZ1mcz6e37sikzwshKnA28mGDwrmz1dhq2deLhNBnQWEn29Ka39FRN4B9ku5XmjXdCchQmAyYhzCSbe",
  "key6": "3cXY7J8VjcS7FbND8v1XPnqzouauWxXuNZS6qB7UKWVyzHhe3V5175d7mK4AxVseMXVjsKM8ebYDas4sX8skdWex",
  "key7": "3oYMogL3ZHbDxC7Mxc58pfVipkLTekJhQ3ZiehsaXpnhYqriUjjW2w6txzhHTkhTNQgve9TQmdm3DKidYfGEGb2Q",
  "key8": "2YoSQhSVKzkFZpE2ipa1DPoTw4BhizjDSCuwg6DXF8FjpvmGs2B3RVxr76eNwjFmJCNjjwrAsnotsb5sqSVBMPJv",
  "key9": "3ANnUYH5wDbkN7D6KB8P29MRSqEXJMb4JNwNu8JMRUk8caZiUkHdVhAhbDoqRX7GMj4HA15Lk58YD3Z56C4fndCj",
  "key10": "3Hu27zAR4WEf4kFVhKWZ1ehN1k78QYQht7uCu13jXUVEkUE1SmYjCBbSnA3ja1gUNWVQGL1R7vAkhzoU93Ueh2hs",
  "key11": "3Z7BJMX9NNGgzm7RuVppz9iyRaDQHUJR9KsGBzSLz6hKcEGuLpcPURiB6kYZzDXAyjoCW5xBA7pUx24AZDt5x7Ci",
  "key12": "U4F91zzoftKzeNrzJwZzJ3KpsHqe1AM7febdo7oUutrCNeR9S67v34yz2aefNJRLwnfZVMm3x2upEjBJr9ymxa1",
  "key13": "5LVe7X3jHvHeRw8aWXBm56cwV7wy1cigKqv2SLqqsGWz9MUkCihfuZLJ2v3hQxFhRGN5DuWL368cwExfSSwst66Z",
  "key14": "5rnicQJ4ip7saNQ71zCPCxiWZL5k1hVukJYqp3wArjRBXEHEWjtabZWSMn3d4bAiA4qJQKKQBE4NWHnt9UcRu8L1",
  "key15": "2QeM9v2bocdUcHWRVjK2izGJgRMtCbjnTvdwFdzWuWTrLejfdCx2S1RmvzcMgDook3AwBBPgz9AhT8dmXqzvCxHS",
  "key16": "2Wypk5VrQ2S8QayNi4fvNx845K9v1nLuemqhyPABqNwf9GGGsJoGrHPVehgg4v7bMDrV4SRANnAPNwsyGStBYTUX",
  "key17": "45QAfWxJ4CLyPQMf6dBoQJxUcovYWzHB7YbwVCrNS24MPTmQfvZsQZUxgEn6RpcLWXDQ1XqCUGRhzraPwPqxo9ML",
  "key18": "2hN3v77edQpX3eGuK8K9kKq5X6HJ9ETz5vjRgXGfmkN6EdAG6eBKV8RLYsdk6UqJH9gdHYKmJbGgpPdmyoQmeFnB",
  "key19": "22YYNFCVjrTCgaruqFtrb9Co1Ppk26oDt2EaWhu315imGQGZJdbkujA1FEE4JmBijbzcHv4ip1weyk3TLMgU5zD3",
  "key20": "U6Zua9yRywkcZVUyzboHVaQq8Kvr8iqbxVcTjCiy2wPNJWkHi5js9WszJk1nX2HEcTMHirzCyJG9ywSb5YNrWmy",
  "key21": "WEeGf4pQocNKemThSR3CMrcxP5XVbes8WQNkJ5MzLgkUsv3pbeCnyM4i67zmWJhsyf7LmuJuFh9GjoWDZ6goFR2",
  "key22": "3Luf72cda3LgVFbtNaxGWDcAAEuT37BKNc9ECFkgba2e8szPiad2c4pkA4Q7jkkGEkazZ67CKT7sgkoJUTw4s6pT",
  "key23": "3eQ4vWjXEUGEpActfA42T8SNkqWD873QaaSVg2EFPrScWBnvcEtXveDWtBwAZ9rLPwyWKZ6xxK8FVRPeH6Ye1GRL",
  "key24": "T45tQAvz7gm2UjjqAuB1rri1GEZzsUJHvrsm8iBrqxZ3h8ZPgPwQzCk1Mknw89iTBoxoETniupLMhxVW9wxY7vf",
  "key25": "3NtQeYsxwhNtV5iZRRU6LQ7WozFz75qm8JYKg8V8yHiNS8Ao3JAMu8EPv6D1qeUeMXSrG1n7JwnDD8gsxQfKCcLB",
  "key26": "5kMMqi2XCenshuuRBk9snRfic8n8SdaBUJzNrr5APFT7oPANiN4CeNWx5jy4y4Av3aMoYZ1RsCEamRpsHMdrHCQC",
  "key27": "5KCkPyt7rznoDXRYjQuMp9BqXSJDjAfJKcKsesGLna78VZGMSuFcUckUPtDPrUXEnB3egVEfvtg4EsqDRF925nx9",
  "key28": "5yZ3bRvt1Lqcxen3XTygCSPthZ1x5bHJmUg8MMmqSgHFPS6R1HBcrzfFeR28vtwt3fdnpdPfzmFxWQAiwkWZAgsu",
  "key29": "2ezuW9ZzvBrc4CSefWyuoZFcYeorQ7Q63Xvjb6FqpDj6t7MhygfmAaVpoux5gcj4uZMkh5K23chbK9wrhCw5WyFh",
  "key30": "3sMQZYbqKHth4PaneFTnYmW1gSecFE7rVHfKB29wKHVuj7Mk4J4886R6A7JkKSxnaBcvuWt74E9f6G6YLPPYvvpS",
  "key31": "5G3ynMv21f8cBciQXjxoHmsbeYAf9LSmUyetT69XehjN27abtqjp7CXJUm6xT54BM1FqKqFeRAi7YnWbnGQzAPY8",
  "key32": "31kS5LuJADzyi31BbNGmo32nqgC1U3YUjfXJXFUxKp7pkWSFdBKWgcmTw57NcJN9aDPxRT8iXtr8gnraRr6NKvBn",
  "key33": "3fmwQNLf7cBRYdNnm9RDYtZogsDdpohk5rChRBMvUE46buFjdb4RQBFtM9Z3ja1mRii38aDcxMvXy791BbbNKZ9s",
  "key34": "2iqxS3SvBGU9GBg9xK1pHMw6J7fFMamwugMCus2dUoxEjhneP4cqeghBb12m3SV8SiVT2RvPdJjN5S7bNka5fYDr",
  "key35": "5Po6rGzKZtfwskwNYo1BKwSfHV76TJcrz1HwSkbopKz1iwhEdCZzPvNud7PZo2jb7kKxurjUgrJS9FFnPP6UF2LP",
  "key36": "q6A6dcPkjKes7enckufsfwrK3CnCGi95LRYPdUa3z7MVi64SmDsVS2uhmByFWgHGuZ9RGTzY4tgVbk12x8qyNYf",
  "key37": "3RDZcgoGnMfjYoZfkcJHkTFpEnrAAjo3WsoofyycRBt8pHjNSJB4eyofu1jsNGMPpk5JywtA57dm5NoGW1PgGiyv",
  "key38": "QK6Fw9SvwK7wbiMmWXxmzULGEKiqm1mp4tC5wdeqzMyGbWw4pfdeJouqutzTnMpJz3FvKAKVNzS6j4eNNEnQK4P",
  "key39": "5J2yZah6jgVp98QyGCxs8iLYavyqcaD52MYezaWYcrbprXqghTTc5M2X7Qx31QH3u4tN5UXPReJSdzpPreZaiXVX",
  "key40": "WyjwMX7CtxuAbTougRq424tJnYZ5p98SksbymNC6rK1RC5iXFvLGHXGGhmokhJRz8TmX2yMK1wrPULjYHRgP3Rm",
  "key41": "2PpfQ9jWhUVCPpDddQDaf9ZZY2VzhL3H3swkFRk6naGpe3EXDY7qiy4cyy562Lz7UyHu8xSeRmg6xv6gKhCH2yMw",
  "key42": "frXrk7KLXPoHG4sBVWFHMms2oTZXmu7bNAH73Ck7bUcL3yJmdR9x9abUrP75E1PmNPwm2sehavGCUrKvvQPF7wn",
  "key43": "3PCLoFLFt7r7gMRmRyFtU3b6Z98efkTTDcvCyuuFfGFeqJKpRFZa58HPtYfCzxScfUYWB4rSGbka47nFHtY9YGSJ",
  "key44": "3CViLbPbxY7jnWjfbMLRMiukue6vaqqkUXCjexe4gDRxsa9EmajYcDLgQYK971LYDnVt5XpadrWRVaDbvtbEWNMC",
  "key45": "3ESuZUbh61zsnjpaVe745haAniU743rB9djU4fC9dn3rxsnvYmkyBteSu2mhySspbnGbAY5jNCNmed3KetZcJH7R",
  "key46": "2Tgi4CBZQCFgmAkmnWuuG34DzwUxMVemb6XurXWTVvuyuyERoJLbfGouZ2EV75gSAW2jfcFr4VXD62NqaEGbdGjZ"
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
