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
    "5ecw5xWrJAzsK7jCuDp1WhdtH94aqLA3bDK5BPN1Jo9SHD1FSa4Eo7fYuabC2B3EMtqY3uUYuYSmyhjJ66jtyXsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRSAbxFdxxpuezFA5Tw92Z9KVSeQhbDx9V7v987iaUmKGJWAsesFuRchHnca4LhNjieHdDZV7ygSfHFNGEEA5pi",
  "key1": "2anehUZBcETA1B4va6toSo3rssnh8p1A1Qd3ebg2oznnLhZSmVPkknnnDuG9QRPMdhw3bSJJtWYqKTw6ynPj4tok",
  "key2": "vR6yW1jEiKMy1gYh1V4AeFutWPKR36ysPT3RH7PGMs1bHGFwLWk5wqd5Xaa7meBspvjs4wJ2ZPD1cKtj7aQNkX6",
  "key3": "3Aq4gg7gro9sRZE1fEeZrfoiMMgbQydmJexXrT1TwdN77S67EDLFUyW1Xdkmtx9HCbdY2X4FXdawMmAhVuHtASL9",
  "key4": "2936vY9jaLyeVG9NdFyqXVeFQbich6K4CGv2z135EEjVose7eiFKr5SPsVKzRBuge29GVgLDTyHQCyDo8oMw9LfD",
  "key5": "3iwgVsVDeTTatRxdXmq4y9GH6grK5GyKhk2hgZ3HiUmSijDk6rJD4cFbicLENJf7WHBCnxKHjq97PEuqh9GgoZ6M",
  "key6": "41Hdyvd8M2FXC4qSZ4ND8vaKB6GqF7JDEtuA47hrBFH9edNNzU2LqFn1WkhWaee8d89oPD3RtpNFE4ENBY2Jwev7",
  "key7": "49ZnL3xxV7NLKWkHrTp3g9EgZQJpGL2RJMLZfJbFek4ac3QyMSN5RNmWBepZRtSavmVoHSdY9qPHT2f8rVgKQSBH",
  "key8": "27j1gfSGoaADMJouUkHtphG8gUFUsyeq5CmHytDkNJ5Ju3cpK9CCB3ixpHg1p776RWcSM3gTZCriuuVTFQvhUDZD",
  "key9": "5zCDsG1GAwLH5UQKxURf6meuepSkyR59SHzgiQvBmN1SShE8idQ89AwPxj6M3MJuiqHeBERkvf2LC7v1qy3kPZ4q",
  "key10": "E45DYeZY8v4nTzrE4E6Ae2DF6Z7D5yyG7WB3U8vtFMR5wzBYKUXPdRf5mNKnEScuDqmHtMLge7BmbxGh8omdzK3",
  "key11": "2KV6bXS97rrk8i8Z7cNh3ZLakbepAX79AHznT3RhTT2ddNEmR7fnFpSQtRLfgmrLBS4fomXowdyxqUDipbWjh3Mv",
  "key12": "2LpkzQBZmDEFrmw1kkZFV4phiKU9FKdMxmpJkwJRLrfY4Gniai5NLSbKjJpebQPkZLamhRfRhkhdzPqG3tfhoxtm",
  "key13": "2kC7ipcDW97yaVmtA5HMYRPsWRrdFXexijy8E5Vq5jTmKXo4Sfzr6eSBcdhYjucELn2LALgmZcSgwMsweqNrra4P",
  "key14": "7Cv5qXhQUE7oRyoegwbD6wsVNSpfnXG2UZqrVJFHpc24qGNJLgVKSpri5bcfEK2qarQYzfhTJuQZSKFDJ7voU5t",
  "key15": "5xdW7KQxyH9ge6RPgudHJhTdNQjyhDKGzm9SarrSkpkd8EaJngDc414dbjVehptYhzGspoGacYNPB7p2uKher6R5",
  "key16": "3qwHLod8j6XcxBBiMWTMjKwEM7tW3m5BJAVEZS74QsDpPPw1isKfvaZYuGYm1HSuhn1QcLA9Ef4hpFkxpcDaASQ",
  "key17": "3yqEJ9cFpfvMXkEyYVYtz4PwuaiM9ozaUQ3eCdhm3Qw8wez9SFvwQ4RqpatzM5igvBuUAeSkhmFPSrBdVDKBjdv7",
  "key18": "55doDfDzjkjyA9JLRuj7aT43ikCzqDiaChbEEJ6kgKJQKLw3eVvqUWR94fQgn36t77uYmarWckgT6DRDsMm5cnny",
  "key19": "3tHzn9EWnFVJvRgC1RGXBbkCMtoUhfU5qZqqQEUbsb2kfAocTnPuJ8NvFoyPXmv981Qb7sRPGgVPpHdCA9HqYYGH",
  "key20": "2JMfA6WeDczGjxynU8vDKbfqthpCB2iDmDbmFT7Xpty5gbsMNPprYBBY1uh3VU2AM2Tx6KYotRzn145t3UpgeXYy",
  "key21": "3jgUWmySxgDy3wfYvedCp97iSBgsuyRoCSb4ZajZw5Z6WjiMYuDwAr8ocRJfdDG1egx4B8TvW6XtAprrLWpXQRZG",
  "key22": "fQjGAfuUEmEBQqCTj6cbT3kPud35cNJR1aWzNRvPsAiX7Esqd6jRu43Pr1Vf1XrrLYvDTe6QkLryzZZCP5WGi2g",
  "key23": "58pd71CzuGw31rQwTHBLadt2SiZwDhmEzMdfG1bcorqR6Honr64aqXNAR86mhLeKzYyp6gWFkPj7kWTDze3JVnSY",
  "key24": "Sjf68MGnsaqtt4Do3vN8RttKidEx45z3BteAU7xqihXrLhjrx9BWtfEAXtYRrieVVdLzYzyYS9sGgD6ABnHhkjQ",
  "key25": "3YqmCp5RLsRYPdcPahacsh62Rp9FGAM4FHWi9adfh2h1EopxSRA9nVHcdX7ToBfVuRKmSc2eucWorCycBa7o9xpL",
  "key26": "55HABGvy9iX2nQetaGWwGBns8FfZWDCgnsZunZyYkmQMYwrnoLQJ4okqmjJ86wNNQox5f2NzkjhMTS3XfRWERkPi",
  "key27": "dp5viRbfJd1ikiCEVZAMWL2KtNH25gw1ShXPHBfdGCiM25xffdhVpjXSnNxZNqfE8MK5QiYXURhCyuqFmRubZ8L",
  "key28": "28JJDQTYD8hCZi843uQWSLaMhGM5C6rWxWR9cYFd2TtRkPqsgmf85X2gFRCUXLYqqyotjohkKvrFYnjz389KE6jr",
  "key29": "4tjsD6rUms6eY9vYSXv8sTM2Kt7v3Z8gAWAcUTEhHFL5ZfS6FLnGngfGXP4zYvrxVHZybvDs1V1dERh35N6aV8oF",
  "key30": "ssRz75pKYuUjVvkgaxWxkZVnXUgMMSyLNpvn3rqTeqopUyv4atfW1NMiVQB5NZSg6Aw3sMsW5PKthMLnVKzdniZ",
  "key31": "2rjfFYCu6hbo4FqcsdeZx8fAWD7b8t5PMohNEraJUBeZPc8Ko2RDU5bEAYh51jJsxh6gefMiCTSA6PBCt7ovuVVN",
  "key32": "3g5uuKYUS3uHqUA91ab4Wy8bgJvGRu4Epk6JDzdXRr1G3m8k7vn79FMyK54N7KzXoRBRhKyAL2R2rmb1gg52jg7B",
  "key33": "BKKPpsDozK7so2MfhfJYGw2y9kfBwADJ28h4WU9Eq5PHPwFpU3GAPxuP6vpTjXELYa8d93MaUmiQByGWHzfz6pj",
  "key34": "3bpu8FEMUd5HJx4vtmrVy8f9NTMDURnsTY3NEEkvtbk1A8dgCoZ9Nb6M1KHD6kGC4sEMJwGoYyHRWGC2kjGvxxhq",
  "key35": "5FtW54uZ9Cxd6zYZdJyhbiywSotBB82KeQfCFj9mns4Dt9wpsTrbCiyZotDaG5gPSDmRfBfRSTF8bYHNckEKkXvv",
  "key36": "3mA7trrzJ1E4Py8vWvsYswrRv4gjktQ7XRHr6UG7uXLrwbkcNFs4mJJC4CrGzG6hH4tfBQEC2e3SCqbkEn5kR2bB",
  "key37": "6399bKm2sXnMbKtxTGXoXsf6Xm4QvbuBwgf1g5ikL2AAyvfogxVWxTDRzLrmfRDe6q7zFJevKUMwZC9qD87HMVun",
  "key38": "37HL2uFbQPq9VPPfyTPnP6ZYuvmSmkX8XgJNs8eHESJqutp6ipqiQZ1nB6Y6Y6ngjRC3enkUvc93TeiJyB4iJJ1E"
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
