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
    "5EiPoAFSNNaogCqh8EvyWzLeHuaKSzNbo3NVvmopdRZ2k3HDEi567hvwvXEmmaPX2kxTPHJiNt8fgA5Dt5MwWfEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B94FmXG53DUPVDzuxnRvExsqrCQ1XV1RhEkNHPaZE9JTuzDaaftjb1wEZFJXPX2kCSQpA2XxuoawHRiJ7C8tR8S",
  "key1": "3eq4gm84JoUUGihQDMg5xydSbtR5Hmquoj76swv8TP58wdJUffuuLsthLbieWfGL4rogcQq6srFRdAdgjDLnSXAk",
  "key2": "5fdcQvRMkG4u1jvFL56iRWKQdJ5D1wY4SreuKhSeHVg3cKPWF23Tja373HdKdtBYwVSgCngeNr56DJ9ZHDzvuCKY",
  "key3": "3B8cuX8q5HTTRj7hZCUF9W96oMRaFtLTAhCY9irppTm4RHi5qTmcdEeYDsn9fXQ2a5bMVkQADWoEmPvJ8xbeQX87",
  "key4": "2FpwMDSEi7oqfmzGZq7X6j8U4GFNT3U2NbGME9wuxFtNat39xABZgrGX5ZQiHcQXdEBXw5Gmd975n6Kct29oZHRe",
  "key5": "5tZ3bhGZVaB2WiGz7FRYtFK5d8Urw3Vw17y5t1niA8KtxyQu4x6XBZoJKRdsA1zyZURNMpwNSnzP6RyaKiv8LxdF",
  "key6": "miJorY7E36h74gYTDRqf4qK9pKAK8YrnrdptMkYgJQZ23kqdh6NYzbWfZhq6i2db7q5ppF1tiArGiubDnsz8ULJ",
  "key7": "g52pBeKAt7vhFG6RTPgxWtAaKLXK4apcwRFrFhPVy9Zn7cMTWQtFMojuWKegaazHTkmVzaREi6uK2R9Sf5JsQGE",
  "key8": "54bo1BJtUdXtypcyH4WgLHHRgS2XZgCSgKiQUvkc1ia3dWSyGDmA4mJimKNLohzce4qPkiiCQqSqavF4P3Savswm",
  "key9": "4Kdf5ZBatfLWsVpXEUcsJkq89sVaoaG6L5XFP3BRNutStEyamoaEri82xAboJWqg8qVR2Swoqv4eQ4FwF9fe9dGF",
  "key10": "p5c85hwaXAuaPdBJbh4ZzJycs2PgER6MYeHxx4abJmfkbhhWkM3WdxSQPq3fXnvo3rL3B3DywBt2xD5AWn1Tnf9",
  "key11": "3GhAGRAUgnwjHREzTQEcQNxWcSCAxHmvAtLXPSTpQnLC5iBw7RvwVv4Po1LoPb4YMJC4bLkB3WstHpm5TRdfABGT",
  "key12": "33bdS6fBzu8mUJvkVwHmvkQVKmoByAenNzztthdMVqCkVp6AdVfhmda8Cyg7uUoq9DdXKLpepQVfJFpPDgxPC4Gy",
  "key13": "5E853Jz22Fen5mSF6MpfYhtykFxFa1kVuTPB77sf33gQ22YF61a64GqAdF5t8DitwAmG9du179Rrgo3umTxhsJLS",
  "key14": "2pjXXcacccFJWkTCvk51EFkP7iNk1g48jMwyTE4DEsNtjVb5PycJZmPd9vfmhzGGhdAiDpwKLCMqRhvpypFhDB84",
  "key15": "3QBosJviQXj3vxcST7t8H1RLbxjxNkvgxEeWzNEjfeDSvBhJZj3ZzaEmL64pJNbq3pCMnbKcr2pEoV5eWqQN82qu",
  "key16": "Uru5ZRcCSUaNW7bhPJRAn97DDym2p1VpFzZt2pT1WDTyNvF5H9YqGBcGLAYKsGPHMFfXgJkoizUmSByv9cKb9zZ",
  "key17": "4xBynbcWwTBagq5i2W3HJw3oXSGMMuw8BwyzR3rfJ7FEbUJFc6M6QjKqa1yK21KJWqbZLGy3iefjLyNRScA1TGrU",
  "key18": "5EHXJgegknTXMjyBKpStGz9pUXvoyJYHWtYzzGQij4hFnVZ6zbtMgjC21huPAfcVpSPaixtbdbbajXkMotLDRebY",
  "key19": "5vKkFuNxqZ7KGCNbsG3ZfqGdkZo7AkmgFUZ4UCvv4oz2KxwP8gXporE9HRdoq4t6LCip8BhH1XapywqpqDAHa7t7",
  "key20": "4PZBKCkGWdyVYZZsvbfdTQqdiQ6zMzmocqZHjhCgBXBn5wcQoysvJfEm7hDBHZzZ4FpKdnWPzBaiMBALaneLiohA",
  "key21": "3GkQqEinP3nu2fYu31rNkwXqN342B14jn1v7Xdckg7zVCW9ELZc9pCobjDTnHtq5TpAKbx4yisquYMFgfi2WNK61",
  "key22": "3zD1obDKnCgk16oGaQd921Ff4WouTazrVHJ1BDfzsxCQPeahp3FrZtEzY6x1YqxsdMkgo4mKKwzTeNd7xVh42cWT",
  "key23": "53d58rKmR6fpsNtdTEcb9VTn1WMxWjgQeU5RvNqmaWMiJFbAERSDQ8mAXTcnmWii4wg7T3vGEi9mgZ2gSBpEWUaP",
  "key24": "gKg6zTSU1c2ZruvA3rDMpw7Kk4DkkReB5pVNP3re5Bbfbxkp8GZ5rzvgGspJgesoFypn7QqrGg5CA6QnZKfutuL",
  "key25": "22wfcahNujsypt3yQWJMaZ2sP5iKiMsXLsQt7US2eJ3jbjd6RAVmHbdXfmNb8Doy75YaQNwu1wUyXparW5qf5NPG",
  "key26": "unSTU5gTRQy6aiPMWRrWy58C2AB8k9FygzXyeY9ErvQDHmMnGwVbBBjAkaHAqFvdoqjsUNTdT2snABrQdYcdTqa",
  "key27": "65uyeKFnsKXPK88pJN9yy2BKNPu8pyF3veb6Cyz3R1unrV88oF3vEpHb8RRZeXwYkyNRsHrkGzfRspcUWVb8NbZv",
  "key28": "5jbpuhJqFuu2XQaiESbiugJDTE6jcwirSMXjxSkN5DvJ9rQFVJcqCgMy8vTuNKNNx27XjnMx6kVzvBCPVE8zLACL",
  "key29": "USdrdCoWf25Z9RFYJQy4icAgVgDAVxHqFRTPMhcKEoXq9YERUnUotS9oAyU2goXLbTCofKetYHDdp5b7qrTCL4F",
  "key30": "3QjW8uAGa2qXzBXjVm5BjgAewgzqFoBksWL2UpfnMrMTtrX8SSyiQJrPQN89aHAWNgVQuEW2gNdNXa1koxhwiVCK",
  "key31": "FVEx83jH8yBsUSa2KZhRDmVzNAhs4CNfE4UbcdG8mEo3NFaN6ESfd9J4CCyeotKMobpQAuo1phJkNeZwm6KujhN",
  "key32": "49sYbcf2LMEWngXzZtSphkt4SHPcv7t1Mr2xpc2Kkrq7evTsc65C2HbTmzyhyySUQRiBNYWLTHNqjKkextK3fxGP",
  "key33": "acv2CeSUXadayBX5C8cvx4gQ4LdmsjdPEqY6jNa6YoTEMNah92WmM2Q9C8zPKarMwX94GHWuFTStsNA8XTHr7QQ",
  "key34": "37iQqfbPqAyj7zGnXCQtv8VacqKMHKC8RhqUN9z8iCpPxpEw92KHeUjkHxNh4CGHtHSKHRDFp3Me7nQL5mMJze6d",
  "key35": "5KJoJwkNDty7Ha4eg5hRkfYgZjkSar1vNfL5DWBqq65xANS5VYZfPTwRX3x5Mj4vrqYH2naRRkcYJN8W4GidBreB",
  "key36": "33B3U2ikb3aEZ7PP7oeXY1PmgLmHXgJDrEkswpaAZ4FRf3pwraq6C5W28LAD2SLxXppQHGRWS5gCrZ3im21xqbTg",
  "key37": "UJY7PetmhbZkD4nhJkDGg8Ev8pVbNnyvVDHoyLZEbUuURW372dgpaRcVveXkXP7q1hmxnkBvazsDUAJU8vSyFA2",
  "key38": "5KNZKmRpfjXAxbaBKzzSe55w33NuVd85khMKLzjcQh9RfzABBtV4hTkKmDXSVcxFMnhVM9PUEsdP8LpYMxeEdBXJ",
  "key39": "C3FD663hHLxPuuCAAWWMrkKf2u4ci3fS7AXTkVLbgSAybM7D1ArsTJ22qXxcQkSr1PQZcakHsmvtRDjXpFWmL94",
  "key40": "4RSs9FGv5XzM3RicPmXPUQWtCdbYbNvRJovRCdPt3HcxtC2eujQ4MrDYqqvb6EUfwtLxLSVAn5NPhE2EwT6cHmgu",
  "key41": "RUeXf1g3fbddTPasZ9h5hkCFA41pXDf4gPM8hXz5KQAQAi5D6Ru7AEzqKaousdVYNoicvqRfDMEBPUMeccbvpuL",
  "key42": "24rCSm4FXCThKgibfe8KLAShjKFNQgVN89B9zQBmUjhCuuKcVJHwhVh2S4kW4Qqa7jJ6qXbeQ3c1TExwuV3gzquy"
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
