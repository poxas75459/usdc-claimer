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
    "5xUVsiNAzcDCg3aMbSqAZLnnQM9EAPYK7uQx1yN2YMDHtMnk8xqVWBMRwYzxpiKTyFgwAa3uRCn4e9AazfVRiGy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXNF4RQyiyetLpy3xAedcgqSZkLtsMyznRfYUXyvSWbzLjifLXq97xvdhxjCy1KHXENAjdhV5N6V9ZSpxUBTQRm",
  "key1": "3KPEsAvPNLvMb6JDddn5xeACRgrggk1rD8fYHNjgjtUPPzZK9m6nDzX8ToGirRgTTDuu75u8jqXdFyy6pVPTNmSu",
  "key2": "3BcB1VDdBu7pCoQAE2t82GQc2zjwJSmQu8QiYYaGJ4kHTrJ2wGxSn2qwXXkN3m3Pj6dKW7d6WqFrsuZnnU33vLME",
  "key3": "wvRZxRCgZsbXcharFSsFS9iNcoWRAxeNjCLiYmkKykFFCwYZYzm4CXq18StkHUsjnXDhPf4r9CvURBv83oiGPXj",
  "key4": "2uCo8gPmo83e9ckNEytHvH4xK1dCNAKArQ5bT5Mt2qMhEBaPwg9EDsWpbVotYdnEmyMU7qjXZtghmucUDp2Eszep",
  "key5": "4o49D7mr39h47gAT6aBS1TEkWnGKNS2jMjDYrPda9SC9D6odonwvaE8bwC9j9Xfwf5oZMLxrjN67UkohPMQ1bYC3",
  "key6": "28E1f6cWt5khNNMJbmiXhMdg7osQdJgmHCdeypqPrxsXfJPu9JTZz5vwfWcXdoqrwcQKVkq7FSrzsbZuwmBAVEmp",
  "key7": "9PiZA2SsVrKr6nWgoqNVcWrPWHUggBRgeDxNDHZTwCgEYRaCEfjBKp5uMMEVsxXHJ7KZEkWz9FqmsRyf6UZrRo4",
  "key8": "aPAw7Hbv3mRWSAwruDiRsXQ3kSueEkxL3r5dWfQfzc4RrTc794x7r4oKr8msGxrgQrfLq5v1YE5dK3HzqUVTuad",
  "key9": "43Eb62BQwpVpAbGzu7uatzd7Q5i5sPR9kQCVgEwe627ABDEvWe3QiMGaFph28RvEConMxW3uxspGnUBLWPDpifdd",
  "key10": "4EvWxGrL7eHm7BYBJVpcQi2MfaR94jPFwiv4RBWnhFhBDkkqTEs2HF5az5L86FqHghdTfebyZ8n2KKEiR9CWjQrL",
  "key11": "3h8JE6NcayUaFd5kieJp55YDh4bnZAK5XazspXJJ7y9oEF4quJAgrdPFjaq7DQpfBrvYSszqMHfAujNj6kJGKWfD",
  "key12": "2ycfM1dV8UzzrWMhBcs7JW1GrxvdrFFSzFyWtAkzNotYaqFaVq69SugUDM4WyVRx74jniqvwAr6srEaGK2v34UWX",
  "key13": "24ZBX5Nvu1RsUxKu7pCUyqWJKxFJYag4tPwGdzyY8U8hRoNjzrsZ8H6dae2z5sSQwUt1BckLHPAQGuHgbBtast8R",
  "key14": "4E3Lm9amnv6QPwFfP6PoSv1juFXr8qmf3yn3sdGpUazAvPatyU9nbNjjApyPKisyScWmgL3myatjjdGE1cYo5HBz",
  "key15": "2nkUSzr84ShpfdEDrJ6pLv9of3csJ6R1z7MADoTmmGgbbwGvGyEuRhQz4vVWFTdwftgV3Qf4BYsetsM58YwiTFcM",
  "key16": "xVBo1xfsrJPMXdRqsHunoNDoPm9c7JkMYYM9hjzn87PEsUVHCYUBcjVeAyaxrjspfQqQZqLoxJqep1ky2ox7pMs",
  "key17": "5X9mSfotpr3QGkGAJszxTfzSFfiJpmpxWPLTwnpEA53wTvMamjnqB6x9sVnyybVshuCd2buEA1LdJgH534dEKW3X",
  "key18": "2R49dfZrofxiiHU81psavDCC4RY2jkMHMiTbGmLCZWmmdYivVeDHr88jAVdovwuPZrnJp3CKrhVBKtcd82GQvEGi",
  "key19": "5SLbJk4a3dUq4EQFFn9RtFdyyahtps1xujTUUpCeSQ4xeLV5ZFSfYLsn4g9hPgPEbD2KrEgRrYWYvs9vT1QcfJ2N",
  "key20": "35xTPQbx6ba9DatDNXaKABJMdEAucxM2mbXYJ8T62zs9oZB2YEpUptT7xC47V671KB9md8HwvKCs2THW4BXMcrVC",
  "key21": "5k3kicGByfDcyrjKQEuZsFZkENZosVtiDAjysjv3tXY5EkhxCy1pr6hHN4655UQUUQiZGSjeWPh3EvbKxxKoVcD2",
  "key22": "YZHMEXNcMcMAzCxeFh5qH1j2WjttuuVJnsuyH49omkq6NMK5Y3RCzSjcjxntFabFwGe91eJTAqkgTmNsG6ChuiU",
  "key23": "4f4XX6EbGZG4XtkbjXBkNWfs4erRSA6bhmnL96CxJxtATwztbWX4Yh1CZqQ1NEJ5JoffVoV5gYmnh8mHcxaS9A8f",
  "key24": "4M57ui5YmPdvP9duJZeDCz2Lxv68ZDd8AXSX2i54QgbWkjcVrrkv5TjJf9JGnrg24YJWq34Ajpr8kdnmNJycsePT",
  "key25": "3HBwCap8jR229k1cc8kCGY4eyaZMnbn3Xcu6s4xt41dAZyiXGDJ8UBtPEfkGXGqcpqJmiL3opdZnk7znr8ngasCB",
  "key26": "Qu4FQv4VWkiaNS4uKjJRggWCzNYYqqfjKZ5YJ5wJiqV91U1kVmNGtrRGjXvEJqbauan94qhri1gb3Ry9xDLjYvk",
  "key27": "41sbq3gATuusZKfXqJ1ePiY3hNjMZiimE68wfwZipFC4mZCU9bdnSXnDJSNAUnQ5bTT87iiQqE1rH48KVnbTYGPJ",
  "key28": "4oYQyJfBZFKTikzZkkzrz2QBvbZX8jdQPKKVCeBfoGf2FVHUYfhSjupm6zRBQBj8jPZ3EYKjwfckTvoAu7qN3DHr",
  "key29": "2oK4gbbsEMejyoS5GUhrsybNUp9KhTmj1EQ4Jx8vzLpMNvf9iVmiztDtntz9tykDSc2ne7dusNhd3m584oMAR2xM",
  "key30": "4gNoK4YAEqSqAJFNNisyzQ6GDbC4MiZ32njMFSsXqiPhuzgp3VBczq5jmK1zzxGy7ocaxwzi7YU4vbBf2aKx9GgU",
  "key31": "4QkaHvCF7rSRzVcohUkeLpfpVnVWg4XbEFXtFGTcrygw6WzTaqjLR9Km1yvtyELbySo2ABk4b7FRKbkX2uYAZk49",
  "key32": "3HnzFsRfXdbTK454Yxv5EABMqTsnAiEyu2PAdrKjyWMzpr4YRXnoGBLYMvN6BYtwJi76bAthVEAnme3iVAe2q3GB",
  "key33": "49CxhC5bDeGYf2EVv3UMkwhq3rjcZzRGEU1W5cYBmSqjMuVY3wMTKBW4uA4E5ewyMnTVxZaZkhFRUyh8PLXBEU7f",
  "key34": "2Z7HzF5bJLCjMFNwBzqjoL6BP3SRPo9AcwqRf7C61zmZnmt88qDNo6thiiRrUp8mWWHuDHRtFuXR37TVnJN7FTvf",
  "key35": "2jHFtgCXKCUZdSUbjVV2b3LZanDwdtkNDnr4qXJh9Ci5e1GJA6YS97vz8Xk6aJ7RcY9sB8LkkAZNFpXQpdYryEWR",
  "key36": "KhFf57emXsdZZzEmNDmAdou2gHN2677vFjAEfKqS3MMSgoukPUHaMDwBiTZzL4Tf9vX9PT7psk9c8bDD4DfAuNm",
  "key37": "5pjzLb3gVCD6LJoj5agfXJXdPrcNayYcze2auQgMdqhvkb6vC3CN4rvmmzgbJS6Yz9p6ohogXoHrhUs6KCNf18W1",
  "key38": "3chjE69rj1vYJejRwSiDmXBuuWHV7GYiNR5iqPNBzScrkf7amCikMnnNF9EAV4mnfAuCMrnEJ1MDdA9ubQSMjd6J",
  "key39": "eE2poLhg4qWjgjkhQedh6dUNyNF2djnD4YH5JaHSrNSG94k3Can8sGi5v5v3CxzyQ7oregH34MdA2wsqucKJXtH",
  "key40": "4ccBZ7NY6diYAv6zGBUcVyQkwGcCkwLtX4CUjCAefx5pYhSzEkqvP8u9PMwJ9jcr3ri3MZAJ9kfYEVYF5YF8eDXv",
  "key41": "5HiXZVY5RKRiv5xBALtJE7fyrN4wKnd8myoNNppaWZ4W6nhSvSaBTFvppLDsswRkTUhtd4ff1oM9cVjxyzkXy6f7",
  "key42": "5KoPV3AXmYHLtqhvFqQ6STy4wqGNjGkiiQsjXVtBqdDZYHd8FLQyT1Lj5CaJXMEP7QU3uNrbR7DFDEhyAPkrz2sd",
  "key43": "3W2dkfGkVXM7iWQcMgkDD9ViKsvvPbCmp1KuDHhfeAtE6LAiu8fRE7WCbfcGNauDt35WkxvKsZsG6CzQux6NjzUX"
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
