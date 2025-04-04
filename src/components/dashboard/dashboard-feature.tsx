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
    "buyES2PqQfTVH8dP1fC2MBsmEKfD9HZ9yhJ1UiQmCxyznvmvbB71Gn5NV2Morm77LZ2qkTqb5hELD3apKbNHeQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpVZBa7BZZhfgsFVvvHC3GG4GzwTQqWCoSE1kwBzY9bmEyUo6ktKQQQ9ngC6zToKNNWCaqLz6nbjyqDQLnp3x71",
  "key1": "5xkkBYPQa2JvjYScuRytpSGtvXFQS88ybcGiA5v9a4BP92AFPcFy5HC2zuHRiRduiY5WjKckeri9JnJYtHCkuVHc",
  "key2": "21EuxSnbffFmpD1ZxkpYzJK6ZpiFWnPVKdTx5eZ8qp6HVqLC9NS3bXZc9NjC18XSnbdzAFziUqESyK7cmPA76DZj",
  "key3": "4kFQ5q25g1vsYMBBYTW6PTuNuZGJorv9C4oFxbSv1krz37Mwig433SYgmTS19RwUL1Pb866nPAYPtbfcKPwjuKmH",
  "key4": "3ZRi5kUnaVnyJrpEd9R8MWPvRjo3Qu23ekbPdzbidiQqV97SGJbRmaDuWBUbgpZ9oa36pTSojXkyzuk2eob3pSGa",
  "key5": "2QwbZFMzRErzfU3gCBHbe1totEERXq8aTyodZhh51pTxQYxnbfW1mKjaZvofL6eNamubAPjjHpfSjrQ9TaYus2o2",
  "key6": "5iYsx1HXvTVW6rsvro7dnDTbtnYZpZSEAnPL9znEiUte1sfTmgKfHmHSPBcuZzzAeb95hstCd9LyLzGmDJsPqcRC",
  "key7": "4uDFMGMGVKYHdg91USULBNsZC1pKcLW7degVvHF8CBmQCb78uuW9t9hZiuLrqPxxRv2VfWDDn1irmyQWhroAKtRa",
  "key8": "shhaXa62ohAVRaXFtGoQvps8qURvtHc5dd2X5SSKZq7uurJj3LRM4iwHnaKF3J5c6DWUx1D79yDrvtu7XZtbxKZ",
  "key9": "2PyXcy6TUWYqhHY6dWw6V695Siey54xC8useKck7Wvx3SDtygGdGv97e5yeXjgqjXw3QCndTnMzGkq5r13Cbrn5y",
  "key10": "3hiwwFpG1XBH6fegBHfqSsS7pdG3Cx2vvv2Mb2bs9fpixW4NoWVbTcVtyaEKe1hHJDo6enPVVznMC8vpUKtc2wWz",
  "key11": "2ZTVp8bJCiXd99GhmGuVGjm6XcA8a2Qr4v7f9iCykYwvB2w3NUPZGMc8vxK7M7txwLA3urKCsX1ZnJmVFziJUQ9x",
  "key12": "2U9ocSn8mCbUDzad4H17jBnderA46p69Ypa2wSMVb3J18MiBsGujAZJTuDoWyoc9NmcGcLW1x2j49FVRfjNy6hrn",
  "key13": "5DCKf3DncFQbK9HjFAsZy3mn5eLuStXch8RqWBUYpZ88mraxFkLecbLcTLZtJS8zYmf4YjDkTJThe88zfpjRoPY1",
  "key14": "D23Ns4zanZ7d7rbdzAxpvAtcJe7zgjtTMqKFu1VUjgApEgBEttVDrASaaWrW9ddVY1zPKV8ScfFNp9QLKpdTKuW",
  "key15": "2fmitne5RXsx9wrDPaRvbMMge2WYeWVBieaPSWHpXhJXmKff3LVge5yutn1DD4LgRG3Q2WK926JvRFohkjJ3qjNq",
  "key16": "Hv7UowBH1cfuoVaSre5AyYqLgmexdxpkSpCQFT2zvncpL8WyKMWcUBb3Z978vuRHyH81AmLp1Bh9mjzUhkKwf1M",
  "key17": "4fhxsqsYXCy36ffUTi6DN9ZXUPc64jK34JmLPTXY2XRwdkhTCsAcGj7BcjLKhNEZChUDxSg63Dgsv48gpAGo8gbL",
  "key18": "3So8kgngSj3mUM2FPBo8qR5oFBATwTXsArUTrCJQGhbkcZBXUdPCTjyn8AZCHYtQ5nznHsBNEGvzs9JNq9e65Y4y",
  "key19": "3SavEPGzpKcFfVuHFc7o8hjXunSgEKKQxTPSdFgghcqkP959RpytzRwYs5QZu8tqk5zxg73ajbhiQwzi39uhuNR5",
  "key20": "3PenyamcDtZCe7uJ9zgrverSmv1pqR3PRXM67FU897w7NTchkoAGcd1rv3QeS9D5nnCJqQdp2bgkxbv7Uu5JF7T2",
  "key21": "3y4GJnLFMoNdt3MBxLwtNbt61CFZtbU56UV7bbEn5eqDUwXY83JvDRVuxDG3MgTTiLoMGqa7cdXVLdRiiY4d2FN3",
  "key22": "2cvtL3abpig3rM6vP1GeEUuifcL2uXQKRnuHCX3oDHEEUkBUi9UPfnaAfyLmqiHAxtJQh13WAdzrNJsUJEjPi7ti",
  "key23": "4Ss5euPnBAxPnrjbkCCVhYP64DiwSFn2DoL3WTsV1Cd7omN6zTD2thyFKHaJX4jh9ZL3AJ5gHqUvQXxpar9i5Lg8",
  "key24": "4oNWgVBsHSajcEyAPfVVghdHKqvPHH6NmyQjXn5Nyu5XrApPwo3ndQoqgMGPhbgU4X1r3fXTTGKADE76b8oqyhsn",
  "key25": "3KX58EyBoLZP8Azf6yAqvBP9wJufo15KjLHEgu9DJZtev3ThFKdkik55xxNQe81fW1jsNasj8yjZjshn1p1MbUSB",
  "key26": "5wYCpUM55ngkhF8fr9VL2BfdVqq2Z3L8GKvSb1NbuyQMc9QAhajErQ5fNmEnSaUjECm1sofiwmie19Cs6zcvEYJ7",
  "key27": "36ftJ2EkHu9LqTCMrsfJCe6Jf5HCZffFmvGacEe48qt6MtmeWAiPVB1r2RrU11pKrhNaeqkFYkz8y3peB35mVA3B",
  "key28": "54CWqyVEfVkEnHdQw8KRB8s2xzuqNcP4iMGBwbddcBWhLKXySavx6Vdr9RG9VkuKL58pqJwqELUDkGVaWVDebiav",
  "key29": "4rjxTog52j96ZrYBKBqysaCaXXk6jRoYYDjJMBgCPbdHBCB5KYTdWshdgRvLM2RNTAieKAsJbFnsYA1x2RRMCvr2",
  "key30": "5TQjgvDHwxufmbB9HiRkeGgyjUwnUzi6nWE5rPNuHMXbUu1RSMcPkQsPoDAckeitg1TV2EJiGpAb3rXbwVj9dVka",
  "key31": "3ZP1EhjYht7ayVqTUspBj31unsMkx5EHwpLCSLME1Nv6yJZpQAyWBhdvpNJiyXnvh9AgX28USYW4ao1e4Ay8E7iG",
  "key32": "3pECcHnnLCQgqgQ3XCs1ZjXKo5CeWETQS9R8MiBnBMrc7y7NdUVVzFDG6LrCvwM76cguHNQmF1Avx1dqp1GMTozM",
  "key33": "67LtYXJuwyAj2gd27tsYq9M8SozxRS8U9uHJ86hLxbKxFWZuDQYy8NQ9Q6muXG2Lhz1zx6LfL2a4b9jWFGqBE3N1",
  "key34": "2iJTorgoay6UFHcSXmg7vgVV7H2FDetmv4SzAVa4a3R81kvk5ZB8hGYniqSyU2srWeodrNCYnrfr8E7DmcnB1fXM",
  "key35": "5NZXhRAf9XoNCkUSEf9jTcfz45ne1bTAgxNL8fhApYR6pn4rYmpLWbcMcsnUvsBV2uM2FFqmB3ARbqt6U9CEzf8u",
  "key36": "3fNpPXc14TrDnTdu3oKSwTjG2RMSd6mDWskoma6ED1CzoMEUnkghpbaZr5DMvqnJWbLK2sMJW9CaWue4c8CMhBCT",
  "key37": "5qtdBtjqmPEWfn53ZnEtXx27tZ5rKNJqcR5RAFkMdJVaZHn4qsB9t1JTqV5tE5Cg7PqCwPH7DjM6e8d9K1r7ewUQ",
  "key38": "3iEVyv9neJn9BRV437c46MXr5yFHTAhumcVSodepMVWNH86ScubDXbyjVQ8KyBxFs73AjXgaDiJDb5TtrF5eXDyH",
  "key39": "3Pv9a1k6erqZFKPgVrSYKJuMk6fAZPswPQupdqHgN6f3Ru7QE1pZnB1thz2A3afmBA2gWwStnAE4LMm9HJnLBJ2R",
  "key40": "43aVWc1NKSGpaSG3RY2LSd6LsG3kY7gwn8iCaQSC4wx4Afo7rZeXbu7QTjjyouMkCF8pPCxTo3j7AR5MFUkXDx5A",
  "key41": "3TK8vFUyTi6RNbpga2MW2LCF83h41deTRqvdvVshU36Ffhjwo37Xk5C4FZVgniB7cmmppoawQsSozCgdZUPjfFRP",
  "key42": "2Md7p1kqobs92ok9pxmNZpA8uyfU3riVjKgCF71XxWyq57vXFdHdDJAw11G987PLKRgKAp8saBHWNhhSwSwGETZD",
  "key43": "3AgTEqq7Xc9MkmVTkVa55AUgTqRS2QNynAmGJXZpxQp1AwNtSPexuXbwDCea4fnJJQLtpfZ3tcr1ykoimEPvQuGG",
  "key44": "61359J4TkRiqkgQfQJ4bqvZhnyaXVuKodX4ZTtHVnesjSCcvSgxgeCet2SdWR8xVjhsgmbP8GK9qJVtVqHgbN1JT"
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
