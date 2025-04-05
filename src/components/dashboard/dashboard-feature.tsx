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
    "2nVpiEReERY7yqKSPg98c2pgu4ZMHsib51DX8B2hL5WA8xK7QbsFs6G3sPdtktkhcYEi6kDUbxfoKvGf12ncHt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZQWbpsHKQvW2ZA9NGeGk5ZkyeAMAjERrRaiMmd2LrzYyAM7huUXDxvp9ujoocwbDHwMkzq718DPG3Vm6WMsPff",
  "key1": "3fmPawSDvQWybHVVXZ9n1dJh12Tv1hqCq3TmK7xc7UknjyAZ7PVcnXgLsgyUaUKDUpKBUp5HL7YZFXPuxTcdyuWa",
  "key2": "29JzjLemV85hZyNThiUovihFZtMC2ueb4cjUjJPPtDHqyBW7N8QS8iMpifSFbaS47gyK1ijcnXEJk4ucpPR8AQXJ",
  "key3": "2M7oG2ycZFHXSpVyBb7XSEmM2wMd8BR4epYUPJArozBxAU6NZUAcktRUKi39skZ8LTcy1DKanb3MxeRzrKPvymFQ",
  "key4": "CRQuffFCZBUohY6ejBxz8SY149Qc15QXRZjeR2yJV1Ks8qmH2GvasTrVp9KQxPip3k9EkwuPzvAuCKu2Po9njV7",
  "key5": "E83woWK1NLyWsEjQccKhPnvKW51iNZS1fsdsktAZa3JAb2foXECfGC2UxVVge4uF8ZJPGXn3RuwHrMnVju9Xtwf",
  "key6": "zUTHDJnyfXLFUcLoGjeQZzSzj4XNUqZhBdthdmZAKVy4ZtjWU8BnRzT83bAB1oAgPFEh3Hz7MbsWh9tuCusDn4x",
  "key7": "3WTcdtr2VK3gnQ9FUXYqnXRpfu1thUP8P5Y2yumFC7FMGTNLk9d7kgVQAS8Grnr57nbBT3nZMSSoQrG6M8KN7HwB",
  "key8": "4EUq2NojSkGhKZSJetkJUZyVuFzEf2U3coun4cw3qGsqS9mtAHMjCsR23h5Y3HERLPyz8rMrK9TyfSxwQDGL3zgh",
  "key9": "62zqa1iRxS8a4u41Z9i246rkAga8pYwkweufCqpnMpGS1UdcZZUjSYMps7HCJazsmY8Hr1qjyFyJka9bkF6ciwMM",
  "key10": "5wjEVrtumonGm5GkmmtUDYXCyQ6oEJfiB15qvPh2NV6r31V7UDsbr251EYnd1heFC4BETb11ZpKgjGmZpm6SaaC7",
  "key11": "3Y99tn4PwZUd88AP1XBLeVs3hZDz4H854SdCfw8cCA5ogsAzjzcEuc7nFWstoy2eSA9cCYTz7cdxzaHrd4xQ4dQ8",
  "key12": "5QhCcU2KoM4cVLvScEsyZMr7D1swg6sqw4yjBAvukuTCr4jNpoUoDwVtCQiJkZfLVDHYJQGpQumu8zisycjqbU9w",
  "key13": "4RBGd7VAwEdm1Jw1SSDQVRYzdJb5V92nkpGHam6Qjs9awA4gZC8SiZkewfabkLCgK5cfRSTPypVmLF1acTP795F8",
  "key14": "jhghDS2o8vtUtwyiRF3QxsioarBEqHYPL8zjenJPTWjyoDKrMLNukZLe22WHdhyVc4jMTPgB8ZGXZTmxrDELNPd",
  "key15": "3dztFxTH1JK4puHLVucLQJ8nccTe4CtK9AbAvjZQtqr4oNjWSipTLdPK4cR9U8LDuZH37ESuUQoqY3Fsrk9WZGyd",
  "key16": "5omqxyyghA6iWQAYdXJAHQdaadx9WXaW7sT7aj4z6ec9BwszW7cr8QWAuN9cTx26rVaynCfd3JstXBu6RGXFL4eg",
  "key17": "4jFbwYMjAcJ3cw9ZoX55CpY5sGFiUCn9WGNQKsBgmmEJRsBRDv3XZBfxxTdnUbvGUtqPfUgDUquJKdH7gGiiy5GX",
  "key18": "4NPDs7T2xBD36VcHJg1zY5bpUrXUrKTupycVs5WCDacqA3PCpCHYhWTQrAAXdtmkHx5F8Cr777puUtRU4PVFmzzT",
  "key19": "4SW3XpKNjvh2oJGJkFKxjMCw29f1xqa1kz7Y7pGgrC7PLhwYCnB6T51HVJCg9hsgCydDeJPc9BtmpYqcN36Xf4bt",
  "key20": "62MRShM3TFtvgH9fmCWnWSqCdzmSx9gUvW4zn6WmZgnbJjqUPRPqihcBiDCB4ZFJM5GVTComaaVrrr67QFYqMMK6",
  "key21": "2kGiWc3mzWbe7Wk6mRa8Vvr8bcpntbCoD8Mt6Z2XazNrQ751pcc1XrjgrfcY4x7F96Sw624ccnDrbLgEuAU1zUhu",
  "key22": "4i4EiWmDYXq9TdLUYpiD9JewhQzQWtDoNu5FgrVH4rN3mQwHTNWxJUK6TL4ZULB5oWdqSKXc99SnDckffk6iSNBe",
  "key23": "5xv3ppxTBcw9M8bespWgsEgZSEEZSg16yCSn7jnYh8jJGtjQAY2iQLf3FAiS1tR1yhudqUMtSV2qiFawFa5HTcuU",
  "key24": "5BAdimEypnBayDJEERnzNPYMXrxpDvdKn2EARm1rd9FJRKAigTxUkfRkVrViRYsKrY13A6BkSP5YU9PJD2ATcmyE",
  "key25": "TF6Doj3ct6HACFi51CQyoVBd4cW1SMnK7MqX3aEEAGUdQBZnPaaQWyfW7HeRtfZzoZd99h97pZymyQYSnmPWR2d",
  "key26": "9ifScQhvEWCpeqnjuynw7efojRD8ui12g944XgAQD7UzLZcX5GMEHcYPhTEYETneziPRUr92BrmoNMpkSh1BwH6",
  "key27": "61RwMLJtr9ryzgX4WkrjS4W84F7XVBN4kWwmzqUVJT8ZxPMm3GQWYkzjjtsj344QHDyfC6gnzjDQePQ7qfYcyJTg",
  "key28": "5prPMRFdCQQN34HhtXzpN7Z3ED9m6Tq9T8Mbwwyh4bPrgZ77qTPT4puuXLzKw6T1vzLDMCjLzxGtfuaMQKEFHzLY",
  "key29": "2CAH6BgT9Ai4gGaFCCrVpeo5bv9EEa8qzXBNeuvKfxBRHnfqzbdzVkGYvs9zZvSzpiqgjhXtNHqSixzo9txP6gaL",
  "key30": "4KEJLeeceTbtQn4kfUHscquexwBmFqbg1WCsMLTVsG2pVZUXjXCouHdfjtzGzp5bpEmh1YX82JE3XdSiNgcYQvWm",
  "key31": "52bzYoVjgzTfcUJMZ67zLUL5xGC5qgQNn6iF9R3bCiWGkSEb1SJTm1oHuogqshV6W6wGUx6gCXcEfQb3ocmWUkzg",
  "key32": "3VQM8wmXQUrZuPTpifGojtSznRFoKZ15hC9irKgDRPo5bf1yocUFVMGQgf6ksoybs61Gt6f23udq8GVKKCDFo867",
  "key33": "2unngWKSaFjnnrvzkgVBps3xvaRmwhaKWfBzQKB7MEFbfcrvBcis4RR3GSB4JTVnBd6WwR7qb9KnTUvRjyGqn9u1",
  "key34": "31VGVHRK45LoK5yDf7qaveuZErvbUziExjcNnvcHDkKy3Mne92bqTk8gvm8f242oj5hby5Ww5AkVT5y8VvmJHMzC",
  "key35": "44vdaRZGCWYrPJVZGbD2v6e5QQiGbC8bN4Xjich68tgsPiHJwWb1Cw111oUeQPe62xmVfGrm9m3VTEMofDL3zNsb",
  "key36": "3oUcq1ozLfj3xSWdrFiAYMn66PjU2JjCKrVetemYWUw9rGoyoBuS6bVUNRYZUm4UkcG2EvWikmaakz1tjGm2EM2R",
  "key37": "5ZMja6bBmtoyw4xpY7yBT2r6GCA6cVSKjnj6XKVuZpmemLrDq6u9upRJoKZD5VknqhoFxmo4qWSxx9uDvc4UmHdb",
  "key38": "BjbhdXXZJgBgkvPxU73JmcdqWkJqsAg13bXmWN2tjpQThWyToHLAxAHDGsEGwRc761bDN5e1oPdF9i6GkHdastQ"
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
