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
    "3dcrXVmtT1UpVVaa9onca8ncNKvgfMjjnJZjCL765Y2JWLXnziTwhNQeg92xivExMrKHWd4rJ8c6gy62UWiUfvba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZRsF8rFtLQPQmPXbkeqajZCvH1dayDFeoMYf35LAFMknJVaWHtHGFjq22HwoXWW4jzeR9472Fnb4wFjEPdt9YZ",
  "key1": "4DpTnubsaVHdpC1TEnc2r5PemN1q1ouqQ4aybrqCpgmUowmRm5ZZGVY6x1A2L45PQSf3MEbD3B9o1qQArFrNohyt",
  "key2": "5CKBkTiQppFR22tnz156x4e1PgP25jH7j7yemQ1y5f1fGA4NKo7uKa6jhQJLaaxV9zDRsW84YSjiYP8fXy4godFj",
  "key3": "67RErc9ZSat9YnvJycfhagFj2Umma1mVWqQrAw2pBgQmvGSxCGsBH4PuGVEY8JS4XWEHpKHsVYxJw6ZTH2nvEi7Q",
  "key4": "5TRAhQBErJZE7rwCESRmkFcc265bzMvkhX3absphDFcCZcNaDHQsVSVFcJX6nWqGLk1UbRsDTWg3kqbQbLh8V8bz",
  "key5": "4yH1r88vsKpUAJzm2CWvUJJ7Kwm22vYZGKRj1FFVA4BYXpXHq8Y9sn8o6QGLmKiwzdTk9U1qKCG7c3kyhhZatZ4X",
  "key6": "4PLFvyph2HKajKGhFksW5cpYEXa2FHFXWnbNVU1H72UVeGuHH166c8TejjrNiJLkcwQyicDwtckWzuj4FsUrJdrw",
  "key7": "3CRDn3se1aheuhfUpAtS5p77uN8rrcyoD6jeg5XrPfTiFeM6eENYnFXUbHVKFGNMg3v5ws19EhDU2A9pRs37SNht",
  "key8": "5CRP5RSc4CdpzANfiCE1t6ji3rG8XTAZeq13i4CwxmiR73hd3EiWLZ38SMtDPo6wLjAX19eNNM62AyaqSj3ZynNC",
  "key9": "582Bd11CoPYgq7zoMwUx5fFdAvyhFLP5VgWZdqyBvqcK2Vk4jENKkA3dyh9PkMEx4KsfWqjjQQQuCv6JRyv9Gc4n",
  "key10": "VyLPmwz9GeQM4J31PebcxUiezdz2NkA7VGtstxJ6GLJHyEfSwQjgg61JakU76R7ymTtfr8YgihJHw4wVFnMoenQ",
  "key11": "5hx3PwLm8gvuGq8v8rwhDv9tDEz6wHXjXywY79eA37fc3JKG3vQvkasiTt92e8vUXf9XMFfhBLmFZo6GWPx4KcZa",
  "key12": "3rmkUsh7c1qcRc22F3ec8NSDAefMP924KsH5gqGer9TWc9vXUoNkqLWtcRGEgRjC7asxUZkRFcqMpPvPrWNxfYcg",
  "key13": "5PqpSiDX8guGYkkFRws3dDGQ2NF32xLe9tfcPviGEaSb88g6TonUQaBreraKQYNupBRxPQXHcXWMdgbDNcdkDxLo",
  "key14": "2dHezwyRrxVaoQ7HmCHh7ddaCkwKt6Tyk9NuPADwwDB9jmf6RsmMuJ5HJgoEP8oRtBeGZ5PQ7zqnhyCKrxxpGYsG",
  "key15": "47t1q59ooFsspEXrxmXeCX2Eby8NoQS69fzdP17DPJzTWhLKz472Wj6gTXR2gpXu933rPKHv3QfcKfPrPNtGA9ku",
  "key16": "4rMvwWv8rtPVarLHJdGmERskroypVUSXJEPsEr7Ta4z3NFG883d6Vb1kWDjhpXvVWTEF56G2cCd2iWBgRQa6wVPq",
  "key17": "XfVAmnsK6MbJLXb22fmYmDGdTosCmVYApQHvU7nWtZ1KPC8abqf97j7ujtjoagarpizfPXbki3LaWJ16AEDN2Mt",
  "key18": "2QHLKEtGKAZzgGXKNAhQKBugekS1aTXhP7Y1f4uBe7yQ2zzP1s2AEPV871cV6ofw9rPUB7qDfnCHzEwzbXzPuCAY",
  "key19": "2wNWLQQeMzmSiNVidpRfZCndEfegTKdMoqbPPo62b83qGfcqhmPRXPCmPRayYWQJmMgNrMEziJTTgqQJtR8EVY6L",
  "key20": "EnSc3sJY5gEcJvyzzAsDQa2nenhp7M8wzXjnLpwxFL77PAuF3MzE8jxugLyqoXbDNtZPnrBG3jJ8g559Q3ezFtY",
  "key21": "59UpMfQdW3HZgN22BEKH3k3rmywfXbaMTvFAspquj7bUNcF8bqMZqg25aVaFHZCauJUnbPhiTM1M5KksqqfHMXoH",
  "key22": "5ugtRF5Y8AvoepBxqWQNEVpZjzA77exGEu94DSBzbthfpSNKdJ4cNGzgazzeU47iegjaYhktxSQiekqJFpxbGR2",
  "key23": "2Cygj7Ds749M7CbV14wsNFtKxm1eAH5EQMvmJonuBCeortdReTpRZJpzWoCPvgCbJ1N1wYfdeRJ4mCsKEcTn58uf",
  "key24": "2gP4Cj6pJZFon7LRHWKWyPvJFAs9LyGpMoxLDNBtm7rmC3Joxu3U5VFENuCGJ6YoApWgRYBosfcLo1TVW8iTzyDL",
  "key25": "3qMeGDqKPnY9rtbfBxJuLfkfUyzsFMmZkXYuyMGRXg7PmVRQBoCvGPJCmyEbBburxesTMfTWC3GxtfTCo1HgMQwL",
  "key26": "48L7afm8uJVH3AzX6cDZj7MyybC4V9Ym5rXeArABceSyFRxeKpcCzvoe3qpq8a9nyS6AYYEFcrYymF89s6oPyxCE",
  "key27": "2Gezq56AzZhPBDqgPjZGZPuwTmZgF9Uz2gvk5KD64Zp7htzAvd5vf1VcJrXCCxQrg2bWoRwGHcF52gkQnftzpvo",
  "key28": "zaUJYGJ3KTinYktDjSYrcF5q978Wd9J7Yr86LEP8t4gT6eyTE4zyg5aYqqfbEa5MaUhnyFMabiivkE6vNV3xEa2",
  "key29": "4GNa9hm4ZcUvsSPYrusxgK3UTje1LFUqcSEnwBVEvib97ZRZyUcZmESwuxjFrWg7MZiEc7Qhuz13PEqoVQ7NxLBC",
  "key30": "4e2hawoF9LSRF7iRPQZkLvVCPdfKyFX4wqrvm8p7WQe8MVairMvfpqXooWNfivynXxwi3mMkHo8ive6N39hQd5F2",
  "key31": "3vkGqEM1AbDPhYSMqxPohBFamrscZoVDDHcBix9MAi27miA56ky2YrEBmvUkVofLWMXNpubGi6eRCF5Wn1pWgfde",
  "key32": "5QkuzAqFyQhWXpkrQkk3Ps7u78s7yG3US1Fsz1YtpGJLe4A7VXLHVGNjQSZ1TicnKEcVUvM2U1UZaLyNBtbASULG",
  "key33": "trCrcFU5ouYd4URXARHb2d98MDsJVDaVhpYnAJLDJL3pRxyMWAck5B2mL9hEUj1mRmHfmmq6BoJrQchASJ7MCxP",
  "key34": "2c7LDpg7UYuFrguFVeAvaCoHjqBftqsbSGUp1NUrVRMoxeNs9auanJGuLKrBsZhLH4ojEeKV8kxVPfbr3NNGfUMP",
  "key35": "4CHz14Ao7UquXHDt54QrkF6ox2xx7SbfpNHeKm6o9N8xL9dJtnTjZRg65xdQaNfbSWFm6HGynpgPhYs2rcz694FP",
  "key36": "nnUZ6YdaoBqhJeNgzdvDbr4sqtDmzK64nZvVUXJPbv7ff31g99rTDF7SmhEkMauaKNNXvvf1e4JcXQJ2Muv5yBL",
  "key37": "3wGJK6XFC9Mndccr1XuoPkTuJa1TUkT7B1WrJgJqjYqphQYQyp3N3jGhuhPV6XW46pDP2F7ZW214WxT4dq5gCxYc",
  "key38": "mB3xx8gVLb6Ebxsryg7BtvLr7CMAHdQpqB3k4YYHFsz1iDukatSjEYLRxYPQ3xExc47qfHJvXV9jdptToa1BHWy",
  "key39": "4w9ruJWbgZnBFRHPKfrtJAu5x9YER1hvf7mjvWLkb3nKcCMFTaiUmpY5oj5JXMYbn1JruLQRSqjvdUp4bkAZurxk",
  "key40": "41QPBrN7p3x3zqMTp72ddqFUfc2Lo5JVZQfvHMD7K8ffoYrDfbbu6f8pWXHkptpEqSGtLjWLL2tCfdCkcSUVVaYB",
  "key41": "Er2dRYhxpnZUdCVkRHnZ6BpU6RsxB9v6s7Jv42BqtSGEQJdpcYsqmz2BX8jHU9YBCMSRbLfeQHd3isX34bCysxf",
  "key42": "5DUSHLESto4111pfppkVGJ3K9fpmW6dgRQf5j4QrXWVebtvDH8QWaagN4W7nTm7QvGVeyLZGExSztRVKFK3MFWM8",
  "key43": "pjJomhmAUKmAhpUAFMx23ahRf9p2VJLyxLN9XAPr6vePDgx4xriH7fLgkX5ZSKUjbJPZiLCrJo59DSq61BaXx5s",
  "key44": "4kbRjJmakThUUm5ktcn2JaMzYS9BVMgcXwHYq5QcQZwCFbz2ewx9W74LRMGQJmLRAUFHadBtBDiSqwpMLNnYfpLt",
  "key45": "3FYiyJTE3pFZ1TNBfQWhc8qSHeSZMhy9FHiVEaLdXjBZQgDAS59i94d5B8tw13Y7ny7smAWc9HvWgZU1XY1YDoCm",
  "key46": "42AuBuVtbPG2XqbWaxMRMtbNAMRR82ZjqByHgjZPXrsBmqiU1HTxjicJ7hMXPptVuHmG8vyvpRHShRXFP8qbVPzN",
  "key47": "GUn5m9soFkpRnhTXjbe5p2oy5MzngQvyPKDfEJT6e9Rpix5dcZ6yN1i6gbL1tztYAL9yWoHRy2qm6TSqXa6BdZq",
  "key48": "27Td2UQhnzc6tPzWQq4MPC3cedkJ3eaDX6GAF5aoSY7XVYPJZVdPj6TBpiMFwMgDjvwkiaUc8qq45WHKPyR4UEnf"
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
