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
    "4j9VfB9shW8is4guz1KJHYaQvc9C8iuAhz8xjnKYR11NKSxo6Au9FfZSqkfwnevAdncrytjvUBM2cqaEfoxD7GAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrAj4B9vZce1jhZdjEVxRnEB143oeS9wj4YveRA79eWBov9rU4FgK6DLoNUNUJkxm4sTW6AumaUiu5rZAFYfqBk",
  "key1": "CbQaM3kwj24GG6LDhPB7m4YXEL8umAcMQJX2cD9KfDbqxPQN4Q2TvaYHT9S7zzS9iu5eXCKETS1V9iePfhuLXf4",
  "key2": "4XgdGs1S4qtrGFvj2jXnkBFCsPiN6tdHRw3u7m2Bx5mHPMzXZnuB3rKXWh68NM2kDN6JVuvEWTjkNoBY8g8QvMP1",
  "key3": "J27TK2q7rw7WQiwnBPe5DK9dD7Su2zynmsbsCJouZB5XxaCXFguVQkf62QuyRDT9qkEUowGYbFWogdWSV7YjQUb",
  "key4": "BEYesvhThxgQm7WmmCr2GhnJUwK6DkqH3UXiqPgUG8Xz7GRPS1wzrti5NW8CcZu7NyTH7ZN5wWHwFTjFFbczUnJ",
  "key5": "5yuyxTtabtJfez9YC43d1ay7ipxFqytnq1JG1vYXzWnUWf2REgKcDDDCEVcGowFwqEoGZD7mFUyGkocPav2F6XAk",
  "key6": "53G3FchVyk4etTrBzAtLu5u2zvHv83dYvqKwuDJvJob7Qm13pQgv1YUMG1NiwFmddxF6ttNAW5jaS735cPq9F3vt",
  "key7": "2uhL6GcaDDGncWJ77CHag2z66rGtSFWKn5QwWY8nJ9VxGidDNAS96Ps9JhPowvbrGSNfWn8iTBJKuhWrsaqemvQv",
  "key8": "kXfpn7Yfucrak9wiF9TC4Y9JDSaqjgVhZaTaayjCxLLxJ4HsTcKLVuNW3VGB56SQDY5U65ZmJgDtKCiEXh12Amn",
  "key9": "5zsK1nDPTGHkpp8iQHH2BnRntKdJrRrjmA33rTRTqsvVAsLN5qZzmnTrk6cwwrTc3zM1vCCjwvZms7DPBkeZzYAC",
  "key10": "4sXEWrYxuERdFSNuenhXSry5EhgDzN8hckXEm4cBvtfzWvhCUUXUyyqu3KAg9APKA8stviVtieLBMQmdWRkGMhRh",
  "key11": "2hBq22adErpzuK4RnQTUw7S81svR2Z3bPXUcpFVj6h1uPrhXUqN9H2pfr77XJvp8GojDL1FAgPtapdqsTKNTE2d7",
  "key12": "22Ueysz33boLRwR3eheAZN7P3EPc5jU1Zve2mzchdeV28B8FnLkMSfshD2CYtnhr9ZARzya7r83jFWza8WkUaXSb",
  "key13": "5ixGLgkFgzcP55nCByqJKsrwaqxuwNAar5GCXHL3duz6zSARAqas4EzqLyLVxeNp9SRxyFz4tfRx4bd42bAYm9dP",
  "key14": "243C5JZvvHSgyz85nqCQtN1TFjk83CQpVcQysSkko8hmwJ8pAqUzQBowym4VTttpzt2V7rtFeTVopgUTDzgLeKoy",
  "key15": "2oVFi333eJqgbRpKNPYQgWtTEnDjAbqGrdAQ1Rv47o6eWgVA3QhFxQQetkkqEkDFuKFesGTh7nE8mGnecQhPnXMA",
  "key16": "3YN1fa92k6TGBUMQsyYPaZbWgGG7D5LbqRJwTk4aneWapP6fXqnfQJkLRw4Yv15MQe6c5UVDQnVu7yH3QCPdjp5G",
  "key17": "3UStDvsc9mjQeUdJGuP1tzMQtzZHnXYsCYJRbqx4BUdbeT4g8hyEB32xU2Cu67eqvuiNuFEM56bY7G4rz7qbqS1H",
  "key18": "2HocP9R5mSEkpEgsucgpS2Ssy3EMstRBLT7FYbHPBr5kSK2v2UYgC2DLyficbFFNUhLeoKDnZuwsGwQUCa82jTXq",
  "key19": "2VhVzcbfSpmHNG52M9zQhgLzktxQFuLpF9goGToDFUFJRjotEszjB25JyM5rnukLpLsP9heVmcqxjjL9tgkpErQ2",
  "key20": "3RocXTqznL1rsifn68xdzbGXFNVWPXUnsGoRMtAqym7xwYQkBeQYZkGpgGHEat7x5qZhL7yJ8nahR3Z6HifjyPfQ",
  "key21": "4n7SziqjCecsrmjq8gcvAkoT5udVyEzUm2MjXYHZo1W71og1tAUWeniioLjE6Z9mT6vXnUfdegRmcAhye14TVPaf",
  "key22": "2mHDVSAeM7yYi773paPi8s84YSMQZHFxxqJFHhELxrQx7YgvpTvH78z68XvpUV8RoWtzGevGRAmVpRJbmXhwRTWi",
  "key23": "8aACBVmKMQcZ2ohGCGVjjp6pMj9huek4kiGuztSpgNxJtjvBh6CXNQy1bABLER5bhAko2SPMvbotssrdaF565kH",
  "key24": "5aTpDXqoMi96QuEc5axE5MAHWJu8c4wrFEUetFyKrpgJmB1LyVAdQ3aMi6LooW3qyxcWcLjeBXq1dVCXXgLAUVAh",
  "key25": "bXr7JgRkFbWaWYcFHWqTr6JiUhjvAMwAAWagW7W8HkG4FRhHaPhkvkJst4HqRLh3xExVNZk88hdZEr7zue6QSmY",
  "key26": "4sPVf9nhSkLXwGagmDVoYfpRjvWUaAGfESR7z6quhHY4p1BDoQvnwprUN9ZG7SncHQ2EbHCx1de61AC2j6isXods",
  "key27": "GGMZfmHTVXVTGom8bGfosskJ7tzW8TScCtdGwXxRvt8YAedHaWNF4dPer2YQ7QnAc8yprhFTXfM4frhLMZPiwSk",
  "key28": "2EK6zS2JR1a764zZgHjqiWkoj8LdKpVHFcJA4ZYueUaF9rse11S8fBUm5WeqYPeEM2JJxLdrCAdctBouUGSqKSKk",
  "key29": "28ACaNF27RxzTtSesf9P1bgta2ZsZpAyrzZ52DxwqXqu4uMLNXH7DJpmFwdXux5BxcoMzWS2Tuaw2BfUkV8jStKo",
  "key30": "5TAcL7dLWyewF39jfEkgBXgHr17a7zWQACscVPnsu77LKUk2FUuXVgQ44BydSfaSxpQdzQsGwGsP4st9CKtJQ7Na",
  "key31": "5MMERCiWk2S1m99iV95qsfASwKeYTVjG1ScaWeb7eb9bDUhaekCA4cwYqBDSMDACrmQ2vfizMuuwV7xfZkwWEp3U",
  "key32": "2Zvj4r2drK1VGv9r8ae98ZjtSWSfBqUw2XDMeGAzoc7Xn5DsXffmSseMo8ZA9LmoyKNY6ZnL3FEXXpqDhUwfrBbe",
  "key33": "3XdvQTr8vC54KXy1RZYpYoRwrh1sTM4CpW7rZPG51VmPUsF6BMGggydvGtZG2D8TWxbakv33yg9SLCqppWbCaFUY",
  "key34": "2GgjbeK5hoU3fVDxnrDTUb6u5WDYYWACpEoEg3LTeVjZuTFeWeNCCqZLnUmco6V7WrmDDLnwm2f7ffvWVrhP1qw9",
  "key35": "4RSXw3uEAGQ8mF6estULUtMXw1TGmTQciQvSkzzaKjQyZZgRKykvk8rrbac7nkiouxWNRBH39q1QRSc4Jkm6sTtr",
  "key36": "26598XV7EGf8sGEP5UifecNApFNNmKEg5oefYeuevarJ16zwCdKxWAqbopRWQEWnipGLjKHSfsXz1Umhm26y5cgo",
  "key37": "sPePvcV67eFvr7zMwQD6qqtQ9TbJPUwT9dvDgKa7vm1aBXvVXFdaRbgs3jJCfMNBgiyKsiuvFFbRizbjCjGQ1rd",
  "key38": "4a7myVqCX7CUzK5N5HSNsnA9JgCtFnM7R4yU3UF1iuRJab82f7NrD4VriWpcQ7mr5NhfFasFwhM9wY5REtgnBm8y",
  "key39": "335P8dhAJDWYxMe4VACCta8bnU7kHrnWPfv4Bbc7Euf33YM9a7qYUEM9MGwX9ULwgtMNu3gSZen2SpVv93z3jGm1",
  "key40": "tHXJ7Dmp2rgy1kZisiURXo7AAfRNnnRMc9SnidRyXVjvVLqA9c483QUufEXRpWtt6BQmdfz4HqF2jmPDzBwQUi6",
  "key41": "4fHae8R3ajd8phLoiUYcsmfGLgQCxjDKPaUyvya5cP25MBEa3w1fLUScdEGGNhhvmm55SdQiikxwnZSd9CtJe6qf",
  "key42": "3VCLGdFTozDsVuY2WUL3EJKb2cuaHLfwbai3sYY6wqX96jmoatHHgzbDGhNofP5vDUmM23srFFC6hswmAxPaovCH",
  "key43": "2PAJZ3iSGJppmjHAXeckdGozBY4b5GXXC1W1LDbS6GmTXGcfVvoZiGMtDn7vLEwYigY5nrDoCnGPVAZLPvjhPKXd",
  "key44": "YpVYte7JDbUKDRYnKSErYoP1Xewbuh4Kzp4tRgT5o21EDriFWAhdaqWkPD3U87Mi1QLkz8z5ofyg1iNHFVqUtZD",
  "key45": "5QxYs3H3xyrHGqGajfo1kmvsUVxkzFGHNPUrEmmrynUJdjgpfMaw1A9MFk3jV8FoL3qPsKuDiPeF3zNkL2TUVBg2",
  "key46": "2d2w4A2hLYv1ELxRwuGAzUKYpHw6XXjum1rEUS6N5ydEF4ULV7qGyX9ZTPTbRLSHX3WzM89n6NaJgvbgN1FRUbkD",
  "key47": "4zV6pmiLK1VvuxDbMWCpmWyULNZnJXVWo3WDHdkrc81HHSeQEY5WeGdFB38up4utELE3UecVG9J8i2yhL8X3CouE"
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
