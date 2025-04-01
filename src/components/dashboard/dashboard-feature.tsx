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
    "5eKycuM2DtueP3Q8TfNp8UhZW3SFuCQbjrYTzNa8ua34Qo8sUJF5qcFZWXg29pvEdDSu7qACDJZWDxs3CzPkFRL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uXCekE21cY8brBYQZswGkwb6nbuwhtXskj7C9TRqRAU7hUjKAqWqFfZFmzvLVHgQUTJox5hs4BTrBqCskUB162S",
  "key1": "5ARszJk6Jt88ewSkKyq59gVvuE3ADpUDma97K1csD7iykaiN9EZuF2K9CortjwYVENe8Af1ezRLgPGRBaTmydFB7",
  "key2": "3k2bqGLWJwPvw582oLYE8VanasNfvbUHXE2RGvt1BFanmbFbVT13JWZRUU2qD5ZBfixGTqEn7vqh3KtuuiJcndNN",
  "key3": "3MY8eMAL9ghXd8NfpDvxSDCyQmpDvoqxFDm5rPSYc9hg3TTAHzN71VrCNM2CiYVE9bS5pJunnVLYq6pUDuanPpzc",
  "key4": "4qA3UeSL55XfxrsikYSaZ6r9A3hoxy48Y79mPAccdfbsZhqynfo5QVZxX28rshS45MDrbYjkUDw9t4kqSPH9Yfic",
  "key5": "2tdeSCUsfuHjgXWMtkvNCKniSbaVpZv9K9FGknmVHJpeEbJtKPpUdgiuvRbP6cziKrQUgh6Qa5vGK4a61sCj34L7",
  "key6": "4AATqQHhCytatY2iBpAD6fTQAJxBuUTPhpALZivPxu7tmymth7e31ghBX5Vd53NN2TX8bnTiwzNUZHLPWj4aNzXH",
  "key7": "3MMfBH8xksNvsF6H2YvvDZ9JQ46fMQUwwgKSoCdQy7Hy8dLNmmmPT6mcYouBbgDa2aqKSx3M7Xot9k8oECUuCbK7",
  "key8": "22nUnQJaDtvcwcZ5bPpRKwnM8YpmX4RnAHZg5zbKfpgEFs6TMFbts3BBaNMMbNNAKK4qncLk2WqoxJdge5kagGho",
  "key9": "473KoaYXxprydq29ZyymWtwaqucufzzpJgzm4oTxJNDrQdbE5QHH2Y4w6oH87bMsJihNGnNKFTmTGdvceX7j7wEC",
  "key10": "2gAMbWKpHhapbMLJUjYqLFvBeZ19F8Gu6XkbqLawYmt1pYGL5h3f3c7Qdvp8xhLaozFmacaS8tUT1QktG4GWEsq6",
  "key11": "41d371xfyKmtJaHVekF4VxHecTPqpsiMgWAE3Pjxm3UpdyorpH6MQmyqKw1VDTcRbsMXRRkmsNXzY7hfdaskq4Dh",
  "key12": "4Ky42kQJPjs2hrViRPZRsT2r7Mf8PcjEd9GuMEDi2BW9BEcU1ieaAdfWLH2RmCHCxWqsyApoFySVurRWi2MA3RbE",
  "key13": "4iyg9gGatLdufGpze8qq1RVyyaP9Vds8LUzrPYdx9eB5FxHjJfHtxj1oQvVp1ctaEFqVP8gFg8osuoc4LqYGL7tg",
  "key14": "3NaSXtZBSPdojAsbnwH6VBK7gXuH98dsPADVeXiyP7Sftj6o2jwGcH3wNZkVPUhrxw8mjE4Fw1Gn2EeMkzSZWApL",
  "key15": "3WMy2qsMp32t1aNo4UThx25sFPW3PJHqeeZRda33YMm5ar98EwJ5ck9Lap5yo5RY3d573iQiPYboa2g47vvW3p9b",
  "key16": "3ZvMdfAm1SYb2AWfmkfzkKsVxurg33dgZjuKJUB3eyLyWDxBHzuaLTxPkiRtHhA63yPJrKBHHfRRkKFEh8aMQRBq",
  "key17": "3xjrF7EqaikTv8VwkiGZDAzxWoUDHpz8GVfJqUnVuwNLzk3Rpxjn5HmzcWDzvQ2tdcxuh8xUqLUVFXK5SCZMQAwD",
  "key18": "TuX8ApQ5D2PLskc6rnbPg2xyZkJvToaHqchwtAcuVSns7HNtyTEhsbcGPksggtvpwZbgdCy8vqzVY8cQxgQsn8E",
  "key19": "5VHKX5Mb51TAjwwFMeBdXmBc1CM35kRkguop4ZsvhDScskC9MenFKXHDxfcwiRqd79pFAEzJkex1Ht1QDbYx5mnp",
  "key20": "2b6twRd1B3sHW979tJcdWUh1wQdmc3pT4rUAa1mS6eimB6dcWJKDqLcPJKuWEgG6vxsL6dYsRV1wTtBKeQVdRSdR",
  "key21": "3MXn2tAcPLJbw19VTCwKa6mzVaFdA6Vx3TpifCxj71vyg7z1utKZfYbHpZGZVh5PZ54Hv65zsBpC6KimwnceiDbj",
  "key22": "5QfNkf9EfR6SeSQZ7DtFtGLPVqjqBxi46viu33tzTpbPfH6TPSzk4KnqLxVr7N1xKqUuaqqjt9XENGbEUjiZzCS2",
  "key23": "yQkGpyBGSEqyAoaBpPgNeJgsB1EFz5o5SiyY2ybtFCd7gBDr75HZ68LdmcY1on4mbQWxVyh1yxPnDucez8kBSsm",
  "key24": "4nWk1L3eBWYxVrj5D9GPLVdxDnXobTKqMYZ2jfxezNGK2e1fF4iAuSE59R5meH6D4vXb29tiwnHx4xav2LUnvCeZ",
  "key25": "4W65LHmsjhNKPWWnynvjzVNCECaTJgugyqkm1YdG6hQL9KDdBr3j4s5g2Ffdi6pb29Yv9qiUxCnywCpWxY9v8EhU",
  "key26": "4F9SxAumkMpdVPNN4EYWLZhBEB2hG5dByMb4KwQv4AmfanciJqNf91HhYEUnF6N2Ti2ZGmxixiLmAiJaHUvLJb9N",
  "key27": "3NWjP3TRcmpyiFvux5d8K889yqfvNiDgke1fiF4W2J6GxwYCGqTfm8ueymkrXZDVaahZpzo4512uYTeEjcoEHcX3",
  "key28": "1ZLznJW1ptRB9NVgYfBP1w3QULks2qXZEgoE5Fp6ybdUHAS4ZQ88tCe36zfzsA8VdUxssnmQDLz383e4Uuby21t",
  "key29": "2imQFqjQYwioMreXsUEGzWbENoEn79NcBHQTzvnwMQ1RuQo5AQ3xDwNd36Tzy8hHFkJnL3iBTPX7pEqxS9nr8Tbk",
  "key30": "5M2KFs6KUvL6ZjNrPgz8V2AuNLR2JUYRaBFLcVem43NLgYHP4g5FYf31Lrgh2Z4KQ6MvXP3S1kiNLg5JZWED6MVW",
  "key31": "3tByfPKKyYaP72U5VsGGmYUh5A5qcF3jZBk8yvXMBrcGiQC8b3u1Ly1wpUGbmjMbE3jsUumNYuKME2ZNMNX1ntqb",
  "key32": "4XpxdXqGy5GZMuJdmgzaF87oSfvo4KvKyZJ4SxajY2W9MMQjHDXdAW7ccfQGyUVEmavNRC1m1fyLtVkfhNGcJkw6",
  "key33": "bBcPxMn1QKAdgKNfe6JyBtJPZt4aggowstg2S911wQmb5bDYLPjHBWiq6S3XrHNg35aaVBVktmhdq8evrNc2NpV",
  "key34": "5t99N9qa9XRqkCdNo48Ya8WVt8vTeFcnojSFXC25G7MkCBS2GddpKrcNpCkpBAd1czYb7SkGaGViLNagKkdXVbV7",
  "key35": "53gnLBLHmPgDv5rn8k1Bfayzyn4rCMSxfPe3weB31jPHxmWJ9ztMDU81GarxN9Tr5Vr78rsGE1WrEiXHRtCFUFfz",
  "key36": "4GVjyeQL2HPzVgepSbdRdeDcrrz44HiMQt8D4PmCY8NBkjvAPJ9Ycapo3gdZeSLrf5sCSkfB4s65Q91RAgfCeHw8",
  "key37": "4ZknsSzC62HNB2Zqn84uCxjyLQ8PixfP4yroJRP9RmmhqWqqAb2sCmAY3MuJ1MJGmAvLhHmB2V9wPYFJBJsuwiX8",
  "key38": "3ATcFtFL5EcnqtypUwngzipboPqKqCA79pbGaurNrNwZhDgM2S4NCQXx22T8yP5wEeGGdVV22Z48PSvaxKAWgFgK",
  "key39": "3CtyZai9pTxfYqPMTB1eybJAb5fPsV4GzkeXtsdLC6799q9Abq9M9nfYgVZpzMv2ug1NgYarmXipVtp939GCKhXy",
  "key40": "3JKvaJWsTeEyd6RCnaBuMLeQPQk8DHVX1dDFowaonfE676fRNS1F7BeBm9gFQ7NZhcg8jednX6y9ZHv9F8xMgMAL",
  "key41": "29HfCcpkQLUZua3kpkQFAW2kJTEr47CqVE8d7yC4vAhkEG86zruDrsdCuYa3mkqu3sCJGhEShWGLF1MsyK1yb5dN"
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
