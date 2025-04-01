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
    "5nrzWF2mRMuB7VkRqQt3fvxAkxNcHsRSFBfAQd1A7zVFMa7sY5VWQsejaKgRDgibyVanzqEXAbWq6Y1QY6MmVwjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GneRx9E8xsujp9n8W2ctKnELjvYzViQZZcE5p7KcUCmrpBVVdaWJuqAwtQz7d3eGFS9MgTsacxM6j7TJcrhYZd8",
  "key1": "3t973Ar3B1voEoJa8tnft5GKXyJ8TasWbeBmQ17MkBr9DtQBSGVALUQ7Lp6Thj58VYnno8pjfLhXAQpvt9M67xcz",
  "key2": "3bE9p8TCzHha2AakoAMH14VjhMc2iGSaJJCb4ea374fueWbHzELkYDgYFeHgDSzJV9FR93o9xoCYnRdrUhK36zZ4",
  "key3": "4cm6S6xNWkyqBj3YJasbBr9i8PyvxWvSZxUVPRkdhCpzBYb7CroASCKsf4WkzuGdRK5ySVbrtzzVi6Ai2bvtrfjn",
  "key4": "5wU82y2PMRMWfaL4WwBmiKuaC6SfhxmvDxoaW3dic2EGECUv7wkhdfVkEhfHVPJbjhpoJ94F9VgKwqKXdB4KU7ko",
  "key5": "3MMnEbTSrr92LV5Q2ZoNjuVABzUaBgs8wttGFx4Hkio8g3yZhzgkLUPQfetMzKYjVe7fMgMHCknr3ytSBcWcoGW3",
  "key6": "24RB86k9SsGv91GqY3xYQZJs8bxNY2Zf6X91MjUV4musyCdKjHpi234C2WjtCEpA36BbjYGFXNKNxsNqQ5h9KHg7",
  "key7": "2XcdezaJvfTyfv9koG4SFgdMZHCNrfaQzup6UvtDPmG5cUkiE9BdsCjte6UQQGETNdxdHiKjhLrTMeNHdSbuHD7d",
  "key8": "2cEeUaCdeWPGESaXrjm2bexzarPBkg6J1Q8jhhc7qmHsK5g3fnm9BjMtUsx598uKNJio9RznP8BtEurmupfuy12j",
  "key9": "3fJMbCgufQLZ8Wyxyy4mdKKduQRd2LmNLVayUuCLdNTk2qn21LXUkSV7xpVhgTwE29PhzvXoozeUP4XyEuQTpRyP",
  "key10": "3vwtsuGWwMtZaQ5hPR7YoMKRXE7vGC2Y8DdwiypJyXKvMM38M5pzXqjvioEty5An5i47DDhqzLy3v36QogHWqFV7",
  "key11": "4iHoir2suEjDrfbtvvnWUzUugSnBenPoZXUQ66ZaNEW8VbnmFXxRuPfqNdLaKeFgWbWp2MdCMb7RbAKBuu7WnbqW",
  "key12": "4S3yMJfXNUTVodcfFt4gwW96gbsvp3BMcDik9jw9ZUC4gJkZE8nMddzuhQEb7rcUY17xgi3x3GL2bB7BpxNbFkhc",
  "key13": "3o9mQKbqBmQCJaxxxFZQdmUc3qQVkU84d71ubcSj97KmQJ7EfJgbUa93bn1pGfn6VjZoW4eAbFL4PxVjpW8D17LR",
  "key14": "dc5a5XgDSbAboghA5u1ZMaP13oZmMZYCifKXUhBNdTffSwmspYHXYGwMSBnpS4Wh3vXJjy8X27CCGareEXH5sqb",
  "key15": "5Adfy7qbKpxCYNdoAKKYyZj5BNgRBtEd4AUKHQTVKKBXH1gukrjntuACBp6JhycX1twGiyRpCHXQDfYcQkLmoBmP",
  "key16": "4h9st23EyWE96hVFF7hPyvVRsR9FzhSRx1dMfhfws7v73mqeGzmEWbhp81mvuCsmGohCDQPDE4gVHVko3SLmL174",
  "key17": "32kthdyPguYurJQYngcMUtGHUHU5kYm8ktkmE5wUauzGTd5VxEidkjtFhi8thSTEQQbvdbGBtjFZMCGn4rFBDZj9",
  "key18": "f5Cyrs3XoXbWQi6ZJ1c7UTQq9HR4uBGCyadUDAuAZVPF6N4LF1ButQHF55XHoyCDKZ6zJX6bbNvEWF98Bje3KKL",
  "key19": "2Aw6M82NGCYvZcZFqtLwWV797PyJhLyqLEL51ZkuA7M3G2LaGy4HyH7i4S4eTw6sygaBrVNap13gQHn4Du1eVCuC",
  "key20": "5S5jsBgSAWRThjCt3CxwJZMGLf6hgLNKj4eZK1vPpmmoiiaiiMjBZtzdKfBW2tYnMYyUteo6sHeVgQsHG7B3gJUB",
  "key21": "4b24QNjWg1XfcCWmFbE3d1kVJGzUMgh6CmiLqDQCPDw3BiVCgKxSHMMCniUEyMH9umZWRq3yJtZ4gip8RMVX3GkS",
  "key22": "5EhmZvGFene4aRWjT18KN55r4nGniSPpnUR5KkNmAB6f5ZnC3KBLUY9PZT2wUYojaUwwtDSaYoBHafzNZBn2XQt9",
  "key23": "2pLEswQmwCRKu2e4WFfG4mofGX62WQPya5iRzoSDSniS1dvCgbXxLrbzvMKT799jSyTf7U8NwmfiSBL9DkDs7B2x",
  "key24": "2NXVMJv8VUeEFKSqb5pft42eEjZ2APAR469QN9beaAuhcGNuebwn7f7wSSLeN8keR5vJSfKkhkkEhsP9dBR2ke1k",
  "key25": "e4qAZU6mgRYQEoyakwesAF1knnW8g6ZshxCG1kCNtLxkHhbEkpEjUdqRLQ7PZxLwcA9i6SynDZpxfyvMo6m1kLL",
  "key26": "wF8ABX21ajYrLLjbqA9qofBEbxdZ3N8wxbhBSngAEgqLTgxGwdZuLKbfXuu488MZZgavPTsHMj2wgdZxHQpU2bi",
  "key27": "26MqYCLoi537DJsqPvR8N1NudNzjVLFFrvNNJwF7zhU5SCfzzU82jxNiPkaLVFjUz6fqqe1tRGcHuXgcQhANDaDs",
  "key28": "36nPsJ2vibMHZTBm4M1dapwBLX7Mb88cqDW36guvhrsPcsTauSpCB92zbC3fzJzZc2Di91KrvxDCeVeBR8TLEZFA",
  "key29": "3ZaDkimcNed3ju3iwMwUhN7jZdnvj1q64jqr3BHFqryUMEMbE7UBX8PgDrCW3xo3oafim3zNXa2tPqoLLrkTMVke",
  "key30": "4FShmSVnHRYqfZB214neevnu1YtvPQkVYfj6akuhoPUCS6Bwg7VRqspveMSD2kkYMDbjfKVP4RmDgXggB1p54L1J",
  "key31": "E8VR4YiN64ovPsViESDDHVBx21hsARpQyXq1avemBc8XE9ACK5nTVXr3tMr8GSSXUq5jA45hiGGqiwdrcz89UBT",
  "key32": "4LHq6t2jpJNdvwYBAkV2fS8X4sTwra4NXkWBhhf6uQmrQUoJKSJr2wijG86GdmTvV3h7nqwQ8EbhifG1D2WJfnrK",
  "key33": "4YzJstHsQQb5ddnB2XQvxgzcbZJw6AtfAzQvRZwhqKXpkyN1EteJRkMaWwkxUm9y8MzZWFWVk4w6xs8kFC2W5gw2",
  "key34": "QbocxnAbZRQDohDAZZquFT2KBHKQPSpEud8U2cXhbeP85YvUmgcy2nN8X3Qrnt195F55Rg4f9sr9GX7WPL1xNT3",
  "key35": "3NZ6CgiRqqbbqWLuqkaTsQjxi3HZycjbjTAToRDVFjwq8mwVs1jxko5R4T8AKcHGjfui9ixYc6BVp94zo9XjuADy"
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
