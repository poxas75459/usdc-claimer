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
    "5ECP6EooTYqcNhWd7U8pVuPdvgrPg1LJeMpMimRt5KyGNTkFwMMHWE7Acxfit1ZxSC3VM3WDaG8yTrJu4eCHyce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k32tXAUpBnmJnnwBeNfLfKSyVHMzy4g7v85sEhQqyRS5158JLLdtTHV24SMzxpqLRLJFfndQjaw1jWQYL18wZMA",
  "key1": "2jNwpXFpbJ7FwqgFgjFEafZSPA62dMr765LwWwziwzo1N2TRnBDtCJJnhKp66VCBh6FaVJurK912bC3aJZJtAWAR",
  "key2": "jToqK2DubrfpmG6f4CHGAJLWzp3E4GeewVgeiJfG5oGEwMjQ3evn17EuC9sxyurfZoSzNdkVqe5c8y5DCq7hQuQ",
  "key3": "64dWS5kawBxbezdBUNgWsf89B968PtQefuRcVYrXEuZgATw6DRHf46rYmjf9DNFANYyeJByrW4LTieWbD7mdVPQT",
  "key4": "5v7sy7tTk2AhVQu5n4JuMkMzQ7ez9mrKfP4y782K7y3T2wdLP9WP9TSJfeTDZbyToMBYYvsrjGDJgAJZsBCPHaUc",
  "key5": "3QpU89F2VUk1hPaPHaSxuqpAEsXk4APzfsohVZRM2QdykdSEq9BrYU9JEQWtG3G9MXMJAP4UoDnhqxWjuhbs8mYT",
  "key6": "3K4rxVGiePGwhg3wbX2X9WniRMbeE8n8hX3J7NuoqDwdyJwCyv8JRSdAHtsP5WPXxkU8bS4fdt4h4dENp6Cxcau3",
  "key7": "5UwGqLGo1ddmQwt2MMSRUxxznXyE3fDyQAo78Mn5TM36jpPSv9E8cmgdJP7oe14Z3iszjvfC2hs3gEXyyJJT3g9F",
  "key8": "2RKzkBm8ata373erJDiiqZWEw1jUcRQAg4Hb1rYxrMgvGdjbL6MBhJo9NCDSrAiyCQGXc8VX6u4sYhepno4FQa6Z",
  "key9": "hGGxkAbTvKFPrdfGMRyZ49rgHvE66iAQQ9fmr8uaboHw1sxnFDd233nvTj1bF52TNwUbGqMEqYNJNEA2wo3HQnX",
  "key10": "3QXnQLdohxf7qVMP7ZqLEFnsocWAy9sC7TJ2SfiNwLNNzyrfUHfgbGiFfvsFEKfXpFtfxEJzaY9NsEHfFpQapE4k",
  "key11": "5rHxBgM7ZG5MPBc3BgzWCQjtxDmyXxrzpWddU7X55No7ggUqQ4s36Y7vLfBfUYUxDocT7MrBqYjeHqB795d29H4n",
  "key12": "5NoJTgk3JwmyaKqGkzFCxTrhXobrftahunMrTYjqCLroCTD4t3qDTUFckMTBmqLWemWnvk9eDfTGdLXU767f5PXT",
  "key13": "2EKGSh2uX3DgYYuo5yhNKc5QK6heRCvA5mpNEaif2Tgm6jVnCHS3DW1gUb8M62hTYewcvhcawAecfWi37sHbHrLp",
  "key14": "zXeHaALGA2E7i3DZ8cRKAgqHAgRQkThFcBF2ZSPpwYHczZ9GzKniZFS4NqZ5mL2RDrr6GJtRtLxXZLd3DJysTUf",
  "key15": "5YaCnhRGQhUJGHVTq9c4qXQAjYR2jAH1mxXSkrLArtopXiaxtjSHpFm3iuNyiGo845NTgKsPxsH1h9wvey64rwE2",
  "key16": "Rcam7x5hwFjiBPLZBxXAmsJjKtqP6i3NgngTxmoPRjUD9qVVfWFLWxepjdVPoNkr2z5o4Q7WGoLkx6TWMPNpp9F",
  "key17": "2vq8hwaR1j1bKJcbL2zmyGwoozFUqrjniZCkpG11safsrYUhE4uBVRH6DQqBcYFMcx3kzuDNwrLS9a83BZWUrdUE",
  "key18": "2JCXVZbCaXFn5Xb1fqzERGvSojrFm6WJPm4DhEVisf8inTMDobhcRP9ETqUmAGFMSPcqF38g2QRGPrm9e35H73qj",
  "key19": "kcfftV9hRbLN3Yq7UvZe5QUnFBRUTcDoeFEmDdG2xYdtcx1pfxEVpdywTCneCgcmGSxWNXmq6dS2GLX9LxCNfki",
  "key20": "VgYecwUjw2hLtMZGUNRHwyX13AkjrE62NCCHTYmw3DD2QBmY3QEFhFaZUmXKwy8znBmgDzvMwRdvpr3g15ofkWC",
  "key21": "2wtzB2pMD5BaHSERNA3Ra8VhKdYT1QRAHz8KzjqoZyuzNRkb2EpKnmo1pSmsL5SjtppoBjnHCp5qGona4x1vDtrg",
  "key22": "2Awfsu6jQ2YFgrHkpem9oV7U5DafQkDweTrpCm1swoMomGgFVoBEjVMKyhbAQhtzeziNkVEQ6UHwbBnUjLGoZs3X",
  "key23": "5q2kQpusG7271SUinwLcMHCRKxvenexbyr7GUPeNbDZ2LFbNFBZBupiTmTMJUpHhATzXZ52hquC14Qocg1mPWbQb",
  "key24": "2E7soFEXypUi9t3UD2F8dM8D6FpLEddHBSXLU5ACCp43b9tzoEbs9e6gHuYa5aLht5Uw4vrVw9A7y63sN5PBVCJe",
  "key25": "3jutKPauXK4PCTU8AwSsymzHuNSss7Xvv21WLqcCCKzd3SDYYYoaBNDzEBFmUSGgGwBRiC294iUinBAap22H6xBE",
  "key26": "61a2pt1XKnCLeZxS2Q4QyScDG7J3Nk11CvjJbKm9q22Z1nweFowZnuspuyL4NFU2Tv9CeD6JoTuVTssm8P5mNpxD",
  "key27": "YvR6zjdVVvKNYk17WoWj9BZUXRaRuN7cLY13vVfJMe54vxxxDjU4WbpVH9r2Q6Ltu5J8YcjnEdP6FChFUdf7Gtm",
  "key28": "53NvuAn7hpLGoqbYtpqWDsmjpbNhNHnMegpeWNWN8tci68CSwEkfZzU6uSZwmtawRu6pXRfsju4fPPsEKmKbnTaF",
  "key29": "vCzLESBJgpT7tqqcJYTrEFiRMr7EpnWVYPrSqLArAYcuJWf4ZNCwd4h8uWjrpKcX5VFVPZNhFZJrLoMHjBqn39E",
  "key30": "5HZjy25ik6F2Zt4oUEAjdgaqtAPjR7gxsXZH3S9wRPdFUMbvEvXW5rB95t5G5dMtrbB1i4JGfCGfP3EFpLAw6A4S",
  "key31": "2NqdY8JkF7kGJZGqoTUrBLZfT6xa4ahemtu8zD1iiM47ize9ky7D6JTjVuNa6n3YLZ14bRW1CcEXP3myDKHs35hy",
  "key32": "3Nh3cnuVgYuCbEoD5Wv6KKsZ4JvRBf5vewYUHxJSwQ1FvgVTQKSDUpKninyRbJJUWMGssC23XKGJtEiG2GsjeZrE",
  "key33": "XRzjhmVQqu8EgAKpixx3W7Z2eLaWn6EwkqtHorPpHwVGwhWXbLos7fkLK4xW7fHMpEJ4F1Z4TohkXFJUBLrjrRj",
  "key34": "5NXvjaXLRH7ZNgpHRwzP4UekdncgzfWhJBzw24FE7kaqS4qYCrq3kWWYCGqnq8BovbiWBJZ9YqDnLvev9u21zwwY",
  "key35": "4tJqKyzWVveMVpF5vqF8SdBmuQAbpXGHD4VUNQ7yRLaGci3yvFyskyHvWVccMAmkL5yD1YGi7ixUnUA7Rg6v97sD",
  "key36": "5o6zgbiVfMEx6682Nc6do2V9R4F1hK8Wagm7ArTpbGrbHGqgSq1ZuFboFmsRjBKgX2EbYCDhY37pCcYvAFXQaUQw",
  "key37": "2axntjyYLzYJZaG1YQ5mJnVAThpX2boZ7gkhHT3emmip9DD3wcNnoisDfof5APumbdCrzB3N1exCaAbCDo2g2PSn",
  "key38": "2Lg3t7kevtEGKwVtxrDaWENwxDmDqtENvTzkk3SDUm8egyFN1wo4m3GpFkEp3NsNb5adC3izmpDNTGesNXZ7DdyT",
  "key39": "55sKjp2xoAyZt2cfV3Nh2rNDpZLZtJudNhLsfWaKJrkJBdw41vuLr77juR6ZwYF3VZ1j8U4guLo1PXP12PGM9FXz",
  "key40": "2DHPYv8oYUPX4J1iRswsLUFNmffX1ebTxqStuQrhy2dCeb34Ujo1jZdMqk2Q9EXLp1cAG69AsSmN25Azk2Lbc64A",
  "key41": "UratUrHh5R3S2os57FoUmS59sEY7SDpkNYy6djYmHxRJouEHXKEb8t88AZJUaorPtEYmM1rkC47HedcoKskpXXM",
  "key42": "ryec4koYQGApzxqNpzEVqUxM9zS6rAZBCXnXmJ1NoCrm34TsAuBhuDKaqQGdUp2En94Bv7w3CnL86zgLAAg5win",
  "key43": "56acgi18NKzRcB2VrfusdiHuQ57ukcuhP7vYB9HZdXQD1Fr1GE8tqRqFswv81LrrXjKBA6jjuNvgsNHv9hAbFYzE",
  "key44": "2aFPMD6KfoYakrbUDYGAGQjd3T7CmxkrrhqS5LxarS3Q8aavyJVjzw2UZpMwWBtb1sULwbqXbLzZFPs5bXaER56d",
  "key45": "4i8VXG1qPeD9vosMFzQ1jhBbm1fghypLhnkbHpxyZag4Vbk2Cn34XPC9PU2RhchV2iKPPhNN1PGobdJBKJQHe5dP",
  "key46": "4URoV9ypJf3rF9zRe3fR7LhsqTAuJUosGyHuHB3TkBQw6MQg4dcpbqoF71zZgRLf5qiprVSaQD7iQnXbjJ9h2TwY",
  "key47": "39j8guDUbyRYmb2BzZ212L7s5g7kMey8QBAt4fh2ZftBAHFJnjEWXKnq5Pj39e9SsR6UMYojSwWBL5QqPY9XkMUT",
  "key48": "43Rv5UFTJ4JWye8rGbf8WebJg4nE3r9CTwL8yiTTf8zuJvDyWuugDH4T9NUvNvCh93LhuyjnK9Zk9Ssdc9amuo4Y",
  "key49": "9NAfCbZLmvvU6A9QcFRZJ4gmqEXzXMZNfKttwczQR1Wta2rNDfrM3jQPdSovKRFcjTpB8UryPv7qq8XsPAmhAk1"
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
