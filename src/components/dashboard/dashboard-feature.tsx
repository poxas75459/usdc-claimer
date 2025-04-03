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
    "2khE13vtH2dQYpZ8cnH8926kYFEAwMHFPNPK4Yg8TpzjU8i1VmKs33pkL7BNBRH1JFaTZyZaSauiHx1M4Vq2zKKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VFX19BiNWJT7PMnHxtFAwqHL4arDN1Cxa8Cm1HuYfVnz9RHi53M6FjFMekChhRjMJdwtJgpUrVjAsciXvVKAyQD",
  "key1": "4QJqvtwoLVfz2i7FCefgtJJrVosMyMVhu53GCCub3s7VYtT18xRBKWF768YutKxcngVABUu1rKNC1sH8JnmLmJey",
  "key2": "39Fd3phkqCxBizPZixBAdSGDfE6Birn8RMKAgq1cRR3XXgWRq4pZHXRuVhm4W19qr7A82vNUWSfxgA9bcyLrezwo",
  "key3": "5Cbs2Dvo58kdVv7SA89wp6wtW4uVfTuD7Zj7ejXYAbu9GawqsiB5tbcTuPQ5DKKYiQbzxHsd3TZSDDvXLCMpPvie",
  "key4": "3cMDZU85Jk7sRHtB6TS6nLpZMkjtLTcUyiHU185KXxQfNf9RLvbUo8Z7viC44Yd4TTT4t6PAAHNkrXsqqhRCL3pJ",
  "key5": "5CDfgdvEvbicHJgMCkG9MCBUZ5qvLnRrranhw9MMy9wyehp2CsoytNgpiMATszWJtrp9kCs718NftDQNGDd8QgYQ",
  "key6": "4GMvAo9i5a5FZ3UywRvmiNb5mCZhzq3fJXkVFxNAtAGkvZvdV8arZ5DQu31f1eqPYuf83LBtMAFmNYCCZKYgtCqB",
  "key7": "X15V9HR46PAjP15kkCo9XKSdSLrEGZ1u5ki3xwJqXyxxJyJwHop3cN6QMrnGKhCMwaVWj2sbfcrhqJB6g9LHk95",
  "key8": "61TkScrhKzFf8TQButBGbNZ1EAScfZQhEfaSercvfThUp9aMTMXXcf1xrYFVYckSLoxTZ5VoXCT97sAsPwEM7yjY",
  "key9": "26NdC3vuneqGp82aGjE6kjyAbhCY28iPuduHqPNrTUAZwh6hgwnYrtyHfR256qn7s2ZwFanu3grqUQs78kSBXpHW",
  "key10": "5271aUhy38DsZiqr9Qsyf8fNMqcBB1ijfRxNcpT5hxtoTJ8T3BG2g2cr776HaJ8bGm7cvViCNrkyy9JoSVjdJy3M",
  "key11": "5PuXU6qcDD7kZ6VnNqn4sWu6LbQwSyLoKWjV5YTZ2JGpG4bBo4P8XeMFWBh6xRSstjFATqscoPLxiZNcz3hRX3ps",
  "key12": "541JWbBwseib4XGVc1f32Ffp3A8GXMGFQcvBifLtnxUfzNbbLFdcMVNYrxCUWS3ZJ4b8FQEicmSMo6MBvaGyVyfo",
  "key13": "4SrGBDaX9KNeAWGfhv6zastYvQ2YPLzpE1CbVXHBsSNY1mTTxZN52hJWQoyvqCfaYJ96owLWd6PdgBH43LMsnxQv",
  "key14": "64cFC1mwM8jj1YMCKMxYx4ye9ECKjRjENnQQj9uGXzJ5bfZPdHS4M1Ftaqbm15Toq1fMBpor7MSA9pjHWbnhL41a",
  "key15": "3Hk2JrQKAfDCT3NMnC4SeRoGKUdLP127uqf845YZXMNwtkzAxJ8kRBZzDHc4mTV9cmAHY9gb6Sb1aqUbE6EEaWpw",
  "key16": "4vB7apucifrLWxgwrKKLh6xurPeeonUthHKyQRXPJ3qCHxFibeYA7QB9tAGc9sLWGLGfRyo1qmrKahYL36tHkCgG",
  "key17": "3ofo9UpKa9hoNowTRyHENn1Gv5orGRbPPQGEbfiqcr9YmuAPCTpZVKmmqqQkCwP5RgGDC9Dfg9a2EzPY8SyszRDe",
  "key18": "33WeCMuhBsbVL76oiGEJ6uNXGejK3VDqymvKu6q7BPLZx5DGbShp7mRcZMDjBkrYXdpNZAEZh7isJdbf4dpp3A6m",
  "key19": "4JzCMa1pkaDYyfiVVi5MvgKCtMacJtbjMVdbFbX4YtNAQ1KnKXoA8tk7hj5E4SjNQ1bXeBkMwhBnR9koEyzYFonE",
  "key20": "5qYp4bCa4r7pGhgS94ebWJ8ZpaVXMP728YqRDcWzK6DhdGLENKTm9sLo2fwyy1g5DhdzGTtEEpf6hAX5X7mFvcb2",
  "key21": "5LnJHu6NFQ8TpR2dhxGFRnmLDketzYWR3vXAi8JCrkf7VHdomxqko4Q1zNGyC8Xa5J1UG8WKG5cE71WNDj8GnUoL",
  "key22": "33BLtwFbyUndx2TzSPjSPy3Ju9ZBrgHYPYKPyYSjTm1gpWwYA3RYsh6QwEjmJzduMvPYFUSfuTFHVD1Bzn1Aa7Ys",
  "key23": "5MKtNfNgxNTjNrSQyFCM4VpouGEHZjmZUS2ojZz24DYueSBM7DNFug2jkLTdVZoASpo91j4ioGjw78sKPx5Gafor",
  "key24": "3L91ZYC6KJH4ZH7YNFkaej9gyZhSXuVZrP5JZn6bMBrgJFhQeMYj5Jd1XuXHst67SMLhDxdXDAKwVye1g2qnwwXR",
  "key25": "2Y8HfAugrG5K8hak31BqwVP5EvYEHE3F96ah6B1gbaRZFADA7dELpvUgRFPgfhLjshshXpe19qMdjh1W5ZSV1H9L",
  "key26": "WttisaZozhQacNtW3ApSjMekHUE3EcPFg2ckyYcjXDKEMEshQhhfyERa1sfRENtUqmX9v9brkXkiTu3Bn82tZYa",
  "key27": "3VWQ2WMTqNkh39sASkLzc1b1KqWiXRLuVpxoP5D9QLox7efCeTs9yTKpkGDfYtpJLZW7tchXfFd3J7iAw56RG7rM",
  "key28": "4QxVCSwuviN38BMxuiehs2BWzy3BJUwvVAPL2jRqZjaH9sKeH4TFT5UYywquGW7wYoJXAFGKrygF1VL4fbsVLNaL",
  "key29": "5zqbE32KDi2wfQgSs4wZ5CX6TDvqZTf118PSSqFW62VR2yW6Fyd4Kg77hX2ZztsXvCL2syXU3C2b5pSrESamPukJ",
  "key30": "nGptsu9dK4H146hiK1EVxPTqyxrTHZQ5wKKmG37h1eNK9QX9jjTNL9EGb7vmuVm8KZvwY3LPDxBr5RwphSXrgaF",
  "key31": "Ayp1Hn7vugPsKoskaya81jtCA1oaVS9cYepwLdJWEVr76fsowUHGxCbguVGbbvKgxNPBA48Vn58iRqMkPYstyiY",
  "key32": "5XJw1iNJNF2JDRFsXReDK3HC4bKbmfqrz8xUAm8rrQ1FtXsoh7mFhsyrPCXaodN8QqPRA9MT9RktJEo8vB43TuKF",
  "key33": "2diAiwEMtwdxVie8ik5uHTBvdTYXkJFANQkqvy5u4ZryanD3Zs3MwNSwhDZcWnqNY1V52vto6HuaeNe3NtjHkSMZ",
  "key34": "NQSKapJ7Qgy5UMeyvKN112ZUGtBYwNN7Xn1XAP1TaZux6fTEX6p1UyZesguoKJqcpv1gBLYu7PJMv86afgx4yde",
  "key35": "3sJo1wmpDfDYdfncZA5ZuvfpdW39ibV7o4cbZo3GPq1nWSaJuZ2c1jUEAyuKfceyopyaeLeVgvtwj9HroKSC1QTQ",
  "key36": "5uYfUTfs6hjTgvXUwzXgVmLfPU3GtVp7FJmva1oFPk7nxNKNF8XX9p9f9TUssv4Dj1ZiVhpGQK7KFHRNBxN4vyq5",
  "key37": "47zSjvVjqpNHMg42haq3p3fXUVyz3SbRAEVvZY8fiyKXSoskQNDYMAHHzYmpYpiiujetgWRC5D81fGhpWHvuTSwf",
  "key38": "3hgGjZwBeZnxuXYunK2ski9sbMwxjVSKaiAcBTUytW2YPr3bUKo4KS4b55bAQ9sjug2vcoPVRo4oqxdvJjthfiJ",
  "key39": "UR8X9TVbRJZFjTe83buRuxJPj7Se8AxXQQiozj8ZpBTGKHDPdVJyia5EBXDF9AH5DJyeZBooWzGYGwYNQY7K8sB",
  "key40": "DYMGseZMxGF51w4bK83f1D1TRsZJHJGvPrLKyTFwS321ruHAzkwvo2s1QV8qFXSjqVVXgLBFSXtcNj7nhhtihax",
  "key41": "5NT5zjGxvJKnVsnS2qr68sEbc1aSGf6Nm5b2xEHMf7q2RTpUjqQrxd2xvvHXgvjrq7tHXkRc7yTD4B3GhHq4XQme",
  "key42": "5zjikKE3otvUCG2Ka9ep8ujf5EVXugKnYRWg7vrzef93u6bntyP5tbeJ5UG5S6x6Xxevo6daGD2iVouWffSP8s7r",
  "key43": "2U2ufRMZwLTY15FTGFWAhkXtBh4fi13aE3hDaRsXoQUH65vn8KnsLigSF1gprDGNKEFZxSzyVMFVrLNv6fnXw3ue",
  "key44": "5VpUbiTCf1H1AacvFNo1X47vkCxNZ6yWfX34jEqqBdmcVoh3miexVkwMpN9v5XiLHDDUMd3AeL4dtujyuFUNQFhH",
  "key45": "4Tu4pVzFLUo6mucxbkRHsE6yARQBNas6ok6VsTnttA5vZaiej3sKdMYpz8yf96Rs1JMsbaqZpPmcs6KCuD4hbQpJ",
  "key46": "2ts9QvLwiKZZ9d2ocaBP5MoN6YnRpVaVLxFEGyHnSuaMCyUWDDn3ekrQWpFAbzNAc8JP3XwznkZHiUtsrPUD41YC",
  "key47": "wWJCWa7ann9aLBNk85k2k4cKx41bavap5DpTokbEqM5JAQyzWFYchw4fYCcseVqn9bQS9Bd6qWfZhSNHcRL7P5h"
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
