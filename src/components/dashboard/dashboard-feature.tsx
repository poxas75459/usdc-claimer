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
    "5wBqYpE4oPYZjWeC4mx2pj61iv4eda5Kqj1e8NeV7EUACwYd3CjY7fFQM3imQ57ZJ7LPAbBtdbEpm7bMw1Jh14y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h89pExAErqhGHoa5PgBxQt4TcD9uVj6wVW5giHW22KgtD1JiJXjytPYM7ZSmbwSzmWXbWhw7f4TtZF76wo9U4Y2",
  "key1": "HxX2ASMDUWZUJuqyho2EUsWaW6egpgK8GSnXXL1s6VwDkKfcZHSgCNtrkadfE8m8gYh9BWU5M37tWUPi3Y221xv",
  "key2": "5bndeH95oU5RssAm2hJD9ipAZABVR8k8RgnamwwcMNMVJwyzXsqWdSYJ3BNS6xpx2nDuiGZdx4Dm5JinsDQfcByf",
  "key3": "D2ZHVzg9RX3aLmEze7bRvtgVEMvkWYLSAgAD7wYMVzS1MX1XxJRTntXf14iWa5wJhD1sJTSebKSAAf2dL6ctcAB",
  "key4": "2t1Y1WdbHcUvWDGsYJ7hq8ER9W6yWXa8E8HVWVL7EXmjAHbp8XszuogUeKLueR5isPC69KVXqfuYmXrNDSZzMq3f",
  "key5": "54FNNLXKvjEXri8qzx3feidb7w7H5RJmsTmh5eR59g8yTecJ5uNX4eMRB6VR3GBos7JRiRgzVAunTNyauQMvQYiK",
  "key6": "Bh5qJK6akYV45gm4yjc7ZYrpferdLJMaBtRxJECgftfpqMFYrwQTdDkEeenJK1YYgyCugf2UxTQA8pUxVAg82ib",
  "key7": "HgB7u25R9qoGoKJuebkZGQmgH4vkq1KT58d6969LH5BkKeAiGTUGQ8wYyHMVcWRgcp16cYe29mH1XY2kjumMj9K",
  "key8": "46frZcbXEvqbGvsxckmzzvk12f2ANgMyV8w2SYbnB2826zUgpKLKh4FNPVun5PeC4oRiLrrpHR2dYNwdtxio16MW",
  "key9": "2d6qM3ar1Gb8RSn2kikquaFvC145WbLCSJXVxyhkeDHnJf1GwBVLjAFuPMZeniwT2zMkDvpZQtvgmTc3U1GqY6jW",
  "key10": "8RP5CSbp9vTmHhvNsLjtJB5YR1Y1MLeU5Pif32gY7FtZnt2obADtBvbARw49CUQP6G1LvYgDYWtvxVEugsJsCQh",
  "key11": "2sqXq7knyoDdABdR5cPkYMoMoCHQY9bfCVxPakBSTcEFTazCpkNx5H5coDdRprnDWX2jc564kER38utt29ULuRtW",
  "key12": "um9Pc4wsfQVpYvEVrtV5XUfgxtsZsxq1iQmNPoMne3KXfr5JhxtPkVjVqRKdMmDNtRykdhT8i1Gf6KEmGqaS5ku",
  "key13": "368BtWqrKRENz7Dgciih39tod3CkexDXpX4w2yNoxiSEvehbnGWdUPx5pj7K3HKkFx5CPHP7sKKdN54T5WcXxAHc",
  "key14": "67ThWu6UGdAfAvLBtSTfxGSyZcTUL9yGs71HAQPvPv2HdGqgYs4Z2QmPzmGD9BiuhiCL1XpMufRSxi7HfHA4tuP",
  "key15": "323JWccYhrxVu6r2sNeyExAGED6NuHBknsWgqpCZN9ZZCCQzdqeeZB1dcjTa9Tz1yr1xnTgVMdr93o2Qw7wJun4T",
  "key16": "2953MrG5GGciVdyoLHsTLXmJU9kDfKKpgqA9mJMSXfYCyDbWwvhx68vp98cpWvG4w61qEfbqhYXYBeqC3Yhhup3c",
  "key17": "3uG9M94xSV3yqTCirip8UQmyYTHEpJQscUZj9G8qVX3b33HxwhbwUqyrxc8k1tqbumkBCWhrxztniyKYEZwFaHic",
  "key18": "42fHemPmBF1Qip7iXjEiAoHBsJjJn2Am8TdQQekMGX33kCfPBpxLajtUu2x6qLvwKT9rEtjQvRxKKmCKo534yXKu",
  "key19": "2gjtx99Q8TQWzEy476SNNhMaKP2gLNoayBXkUfEzU8gGu4a5ZhDBF5SiAXFBqieZR1p6JZiqXub5GmxGRSPt3oue",
  "key20": "3439tekFgdhoX7NyUs2W1TbxvcziuFoCdM96Fh3CuNWirtppdoj3yhUWZUjeyqZZDhNCQ4Na5SBQTn51TPZWbAye",
  "key21": "4rwFcqyhUgUANsTGAtNYJT1Dzw7pz2mCYYwofboc9jPPURHsmAvSGsZuBKkCnYLFSpjcUtUFMtfiDbzocXZ3fLzd",
  "key22": "39KcBwsSKW7jsVSqgckX8QLPsM7UrQQLsSbGsthNFZmVQpWfjebQD3uvqaWBB3ZibJ3vVyqbj1pxffXDwmmeUW4E",
  "key23": "32bt67KR46HG6ZjbMUQ739DfkXBZwCEdPDXFA3jnVZYX51KNYKmZMVUeB7a8FPDVGAA8eRRJfgTX3QaV87PvDHNh",
  "key24": "2QchKQVWq1ZmcGaPiHZVhKsnxL2v7XETqv8BqwUM6pXS27YKDgvn11W8YQ1PKqzBZdvj5barLMsdWme5kBcqgHjF",
  "key25": "Hic3CYVrDDEkeXQRdzWYpFbfKheDhZFM151Pa1HiRwgPuBNuTiQKCXEktWXHGbPVwMtuFMiaTbCjaP75G3LCcxL",
  "key26": "4S3xZiwXJfFfGg7D63WSngf5eKJkVdsTN1RWdrUgd2XoVNYLbYwagp3Un6kRWPiPakyiopNZnKQXeQ6jJuUGx1i6",
  "key27": "Mu7iGK5UxSwjPi1UyewXDGXPX7syM9AEkvmLEGnC77zvRJMAGFJq9s2zBWua942oNvNTBZTvvwcTmL2rSo83Exm",
  "key28": "238m2y2SvrMawMkx6nxQ47pR7fqv28fvT3KFqFGZbRgMg9r7xM47UiKxCgKaJXQaQscfz2zA1sLtYB69UiGfkzpo",
  "key29": "2PAb4t2g7tx8KWWyQ2czKVaVsvJVVfJSkzu2jKzHpNC45cBVEuXd4M88cEeUxjRYK8HdEotGbiysPTWSApLTaN12",
  "key30": "5wBJ53uCu9CkQD9cEt8iGpby11k8NGu8Ec13KnwUaHANd9pGsurX1nQjX78Yc969ffawL8PzH6sXjXZncBBTCh4z",
  "key31": "21mgJeusiTKSCqTmDyjekTDS5RXr84o3w7ccmsMqtCPpVGQJGXVTGq6hxR5EhsZrW4u9yKKEp1se74NmikLG5Zq9",
  "key32": "4mg62sLRVKmvg8HiGaS9YbffwSgdTedmuwseEKykUPwEcQimkBE7pCELm1HcW9yiMhhFTh4ACFUYu2zv6BPap798",
  "key33": "2QhFxVM3mmkQCJoPyEacD9SMiDPDM7twnnLEiwrkuympDBvMHo1U9zkmiSRf5TqWdtYj6zNxDpoho9ueJoJZzS7R",
  "key34": "4o9nz8YSBUZJatam4XeyiAmHgyVPENcadf5TK6oEUH4oACoBN1nKVGr6MTqPDkEWkw1xjrQPXJAUiLQxm3LHxtS8",
  "key35": "wMnSfoNw9b6ohsU5iQ3eQodioLWYoTJYR7VvGZacfMo39TkvPMb3SseUrG4JEc72FbttWx1989KLAQZWokbVtCa"
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
