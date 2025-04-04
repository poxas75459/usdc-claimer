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
    "3tFX2FzSHZa9LPjyJfh2bPp2KHbCQzenL7HMudt3nz75vbrSAwPbNgXCzq2SSRsQAqBpSVoWYvPX2PYjshLbBnU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWQFGxGZEf7VzgFsRFV6z6n7SL7MRKMWqVCH5adwNpSkBjzkr2bzzmjXbRzpKfQSHFRQDUaqoJBaUByMSxnMu29",
  "key1": "xWGpg4a3AhuALbbXYnmEn7ogNJ8iW2TKdaWxV3BfxpjRUdvs38wNHrjNVa9fmPWttdE5QDC1fcS4ngsSBvDnmz7",
  "key2": "61iDvzivCTNfmpEuM3mgT4mZtaHEJckv8RSZdtD9BrvzSnr7jcU1i9Cj1jcQiFnmnWjSbqXbquUgPbDGM5Af7PG9",
  "key3": "2AvhUXdyoDBStZ1NZ8AZPDvTLJJm74gSvVhwkEF6TBZHwoW8HyUZW2qA27wgfSTJQ8wGL2Vu9H11QNnJnuNYVBx2",
  "key4": "2zeCrqKmanve4JQnqJxaCVXoBvSLpY3bncFSd48bQeLmQXqdFUjjq492LkssxMza6cs6ekm9FaT2y8sbMDJibmZe",
  "key5": "jimGi2x3SuomeXL5XG7Yb59BBXwRcRkYK5QgtbVmBAcyGvPp1RvKA6SB6oeYQWqcbuN6ZRhWrsGn8ij1TCW2Kpr",
  "key6": "38apY22MWY2HDPTwi1tawMFVyxi8C6gNL5odAC9a8Y4Ssn3h7MJFuJJow5htU113J6HapGVDDo64R9KKHH9VQpWv",
  "key7": "4Z5vf3EyYYiP5LcLutpLLjhvauxtSm6y5GEoL3hpgWT888ddNkyjq9W1cCngiVcHCXPkRpsbG4BMmoxpL14jhvEv",
  "key8": "37ZSM8rshPV4bno4EXWN9QE9amxnCzUeuoBHV2hsDTRRjhskFoKxdBo5Qbya6oLpQtzYL2fMXLtvpgdWMNHwNDsa",
  "key9": "M8YzQ5mTVuZr4ki8TLNbyCBVsjFD3di8Azn9q2ByuYWkvdFpSuFHzsmZV5UmYBV1u2JETUuVTkCcNxdMFqACCnP",
  "key10": "5psApKD5KGeGtBaon94Fz6rSEJuPyrxfy8y3CLduACW8GYMcheas1NuSxnjZ9FsLPeHGKxWChBkrNkrzH24xWkbj",
  "key11": "47RUhNSKteeaxobhzzQoWwKqcmneuPAGxEmLLeGAU4HTVdNr4Y1FYchCtprafc914oV5BBGPtcXAPToKJHKmaQ1r",
  "key12": "2w4FiFdpry6m1s72sEtwS9RfJU5GxuW3vDd4R2QV9kbxpwnyuYuvfmQoMFBJSpAQXbKF5ygkoc8i9Et7fktFriwS",
  "key13": "3JJnQxkKYgmPehy6NbhonftYuUD8GeFXkPbiyghRZSRaapi3DbwmdgrbVwfWDoUjEWdXKvsLZAdnx6A4hiDHr45w",
  "key14": "4P4ke8HnwUERQPzq2nxRiES4Szc4uEGzjy3t7mSLBrJ3u4AXHih6LFo3SsgceoE9Sf8jgyqUsKtR6RSHjf3tv1Pf",
  "key15": "2L6AZPHR6fBKWvvvGxgDrYieMmLKvgtk8J2EBEJLwjiJ963FFE3QBnaQWn324AJaprLmPDyvoPt9kfMqjxwbxtBM",
  "key16": "4zYReo8AdK6q7yWU5KeDk7fBKt93hfk1LFnMe6hbQpSKcHUeuJL2pnondTHSiihf95cJhYokmPhGzrkZzxpmH7cT",
  "key17": "3TKHCLjnbnT2VZYWz1NVGoNwVADRYrR29G36qxuDyVQfA344ahmrCGzZ8fc2LrBSpkCZ5mF22JoUN95CwsbAi6tF",
  "key18": "5zwevsp3hXoZbcCTbmwTnW5NNHPPUtQoxMn1hD6AHfn5UpKBygU1Wb187zYAm3kEKfnWZoWVTDSivMRQjf5eEoc5",
  "key19": "2vfJtcYTFgqngTYg3YnB2dWAjTc24zpgdMsGgvCQAR157iFH1c6aMEDmRMiMrAV9izBKVbfJJ27V1kXoFTZfsXxH",
  "key20": "4PBUexmXwShLnMFhLwuuf99TGVr8EtDU67gSTqgNpzkzJ8Ty1k7TgFbJBrwCmtB4Y3AsHjLSx5JHKiibmt2hq7sf",
  "key21": "64oCtRSezpTr12aBjb6m3Q1BFjNBWRj8Y6bL8ceuXrY1m2eY3qpqpvWMWLnrmcffqXiHegCUTHm4WWHsKEUU43dc",
  "key22": "4tXy8cGJwaULrUMy33RiYMi6bfyqpDQgLCVqvhkzAfDnSUFefKNVVsUVBnwqDm3Jme63E91JZmwvCeNQUaXBY5HW",
  "key23": "4TerPi4WM8o5o6DdgYViJF9cFeyRcCWym3X1t5E4788nfe84ay16txXAYPdLj9p9ZztLhwuM2auk7232DL2UJRuA",
  "key24": "3TSevvjjwjamufpxdhKmzjKMb2PLr7mqvLZuMp3uSnZ7A7LKw3VraBw6EeXBXzCUE1p7xR5FXodzcsjLwohNHN19",
  "key25": "5Sh9iuwFCNdzsfQS7XebK9noQcKRGdrjfMd9acReUXDHyGGE5aQbVepFz9TJrABVJHaKLv1P4G2XXX49g7ivRgUc",
  "key26": "5RAGu3LkvD6BzJq74ZeLF4LrfbwkU13KLqrBGPePaY3ELeUQ5ZY4FLbZg4rckWQE9nFhHarHrpqmM77PUCgafBBu",
  "key27": "3z6Yru4HLhuW6vf7axpvp6FYf2pRavuZzm17AtwW5k3HMWV9x1UoJkQPhFCydgcVJ1GjcNjRrdSMJbCASzR2pSvt",
  "key28": "jA5JSc9W5FGbYk7CE9kYgAnQmdhgBkau8MQ2ZTUHrAK8UQPtXMCoQ9pXZssDpNb2qaHAWmq44SzzuUUDMq4C87y",
  "key29": "2NUgCRaHNVSXmYEsomym3iTq23hVP91gsSTAMB4SvqavKivVtj4KZYuhwcv6hPhvLNhEnazLywt9szQVhZsWyacx",
  "key30": "YQQzQ66DmJkeUcKxMf4qwP6AFfiNrtexEuZZLWLPAyyTURvnXht159vNmvJHTsuWvD3sjM9qRFmK53sKmbWf8zn",
  "key31": "2bY2LwvshqDaSYJgscvNwgLLiC3R2QiEmR3xQfYwN9VA1ay6ttpvaB7QMahMAA5YgyiHnj6Pj2UiYX5ZeddPWVJy",
  "key32": "4BR7dDzJKNZa6pSyygACt7M4E37m6aBpdntwGrvA5kdxKM8Sj9AmnPtU812LMyBb6dCHP8vvokf8xmvid2v1BaCi",
  "key33": "5sD29n7f8kZ4tpq11CXCBsHZVvDVkhtFpfLSJjHLT7883XQVrcpRom72bkX4eapQ3eQ3LbMY98Lu28SJMsruFzvb",
  "key34": "3W3bsM9x86snUB3kDG48F6MwSpFvbUw6p5Dsh7vM6EW8RK6eHQCTSGCLDokJuGeKGmDLuEG3TVF9xgpAi2usNLSE",
  "key35": "RpTY2bAQ2L8iC6GZeb8vKaM11QdUhs1nVM5LerzksEyoNcd19rY8EmFYyGzWwnhBWSCmaHMNzCu4QPAihgFnFAQ",
  "key36": "38Dg6pve7q9fZQFMEtZrb9MnLhkgiSYqVPdG6rwhKV3Rfm8qDDVsBMperbhUCXDwuUsADCYjuf5Nbqd4Hk5DyxDg",
  "key37": "3KzkZqPhVErZ9aCvXXiLj5qsrJQNqq4Q2a1riuqF8eddeqPnRAQdQGVyAU9HxSqeTEJb2ogCzjXzLH8yj2eAfg8o",
  "key38": "52oqQRp7fChhyxiFhrwK6cUtbXjyWkBSCg9gywqpm7nBqxnHwodUL36r6NyGhYD47qmU2DtPdtryfMEBWbzLoh4N",
  "key39": "4dY9imxAnyjDPoV2b96odJQTjjRPtNyqXGo6wa5YppV9vxCvaN8CDC5d1sgnUehfs4UtkBT8osXbEqNRKb2A6AuK",
  "key40": "4Xc7rpndwkpfvvYd7TyYpswPfJsVPAced4PRtVufS5JLfaFDzMn4PghsWvQ9oBps65SvAdXKonUFWowhLogYCAzi",
  "key41": "2i4hrRpkzgHVcGWaQv7nharySPni5DMBCvxzFDLxaxh9KCUQ8fhmmSTjKqo9DgafXLKEdoeBhkoEQryfqcAAUyoM",
  "key42": "sM3ZW1TQR4A21k19sHtyhF1z5zB6VjR57vqMZ1AkN54Utc1YyHf8UGTUKwiMndNHVgM4MK5F9HeJJ1Pg5eG6qzV",
  "key43": "pjB9SeiJ2AMdKinnaToPW647Egx3taQe8xSZr61ggjVSLFchc68Cqu7S9K6jieV1jQGAzEeozePDVT5ctRqJs5W",
  "key44": "4n4VMqNLHuiKMxFBnhh4k8DX3iM2wrT3AbTLyUJiijuxovRQ84gYKuL9LfWfMaJUMqtqft9kwG8n9oWEG1akUkUw",
  "key45": "K1qn3WjBzLv9WxWto1ucubuCcvhyQzTZkYVs6JMD1MYH3cbmU36QkYiaa8RHbVjMPZzHLsuzgmEtUft9vYNeniR",
  "key46": "2DEbneXcqWk8yZ8wawaSswBa2eX6jDs7i4Nv1QRGSJhUMqwrHaC5k67x1Wc49VtatDmi463ZNUdhBatiJsBnZjjh",
  "key47": "3hHCXejWXvV4FvbhckPMyEdxuSVjVuCF2H98f1ryCdCEAbiygXf8xaXEveL7PvTanPZjUexRJbFnWo8oTYc1YEwU",
  "key48": "2Ak63kPq65aUyds9povwzU7RkokNijcXfpjnEyPP8mLE9uMEd6EVwrdxwfiZnBwMmdzMmkqu9zhJKqiJ2bhN7Xmb"
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
