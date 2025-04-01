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
    "3vE2z5fCntBcthrnjukSzivektJnivemWD1XDhv4uBb6ipAy4J6yaDrbrRVPHhp7neLcWUHMYiZfeLWPpv9xTtcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DmupZahQ4NLqCvgXdVHySkFsHkcfcLDBuxShuUJK2vVyMnihUFYgWnGsdsxPM6xZ9kkseTVbe5xdWK2t8ZnXqSi",
  "key1": "57fZ6hxQns2XFuSGS9GW8os12ZEWHByWqrjmCrwtEKFMGwUCU7dV1Kekdjht95hR8QJMXa3yMeSqBa29xzFzjzpP",
  "key2": "37rxs7NCW6diBbPy6TEPXGyR8JMY11Kg77s6ehhVrdCt6iP6hFz6mbYtf1RcvMwrFMmv8ab8ArugiGKSPXBswKVw",
  "key3": "3mY7qziYu5T6MJF4SrNfmaRVTFsKjChAitM7sxB4zrMRJ26Adr4VeRKTQ64aDYoNFfRWL64ghuca56mUcoz7VbCo",
  "key4": "2CunveCP6w1sgbaLuiapLUuGEiv6Zo5ZtzDpWj1sLNC38GXwQCTiWL9fH5DUQSA29KQqQ31pKJZdMzUkvkKjHrMQ",
  "key5": "5specMvoypPCUhEpWMGjPMLmtCG6hhRzhjzzekE9HTacs6SNjbAYFDwuG8pTy6GWEfm1gK2i7Lo4ieLDFJWu35uW",
  "key6": "4zztzfmhR6dx4vDKSMqUS6CRkz2RMEdnVjN2ZYwR8jxffC5tPhYWGSDzENXfBwkwbp7VtZc6PCjQBjJido3rB9DY",
  "key7": "67f6gSDRJPkcaWDVnLsMVhXJELeM4MJYoQvrNjnZWtCNVcPd99v8KmMyAvGwB5YJvAFcdg689HgLjV4XcfQx6PV7",
  "key8": "3D2QJArPZviBN9pG7JUDfzn96HMELsWVQFUTd496qCJTY4DAXTjKVQpC1ot5HE2W3HGVKD8CQj45BtRTZ1eVyL4q",
  "key9": "2YaWBLrswC897i2zjNQuqoVL4PBf8uhn1Js2msN7v7L2gdogCnnYUKBCgmuLkJa1UKicSw6JUcmpNzM1xjtA4yhU",
  "key10": "4JCzk57bumRJcuvdsp8svgGZBHJHJyqhSz5RpsgkCiaCRTh9KkzbpNqRexoSeLreTmwkD4iEhp5USmDM5Zoz4srX",
  "key11": "5ydBmQE4KqDqqDjPfqtKZGAu9MFdpTY4ZbER6ZwKMd1D2e9LqiS6mcV5F7MWvt85jRD5Cp2qWiE2q5JpzZUoVsGL",
  "key12": "5muQn1JMt6gTd1KtTMici1BUQSA1mTwa7ikpmGhhFqbqGSRfEBQqsxkoGkkyV7vLQcaPh6CA1CSvwP5TnqAMS9NA",
  "key13": "n6uHdZWvmNRUKDxSCdxEEAANH3szQNNs21SgNuJHV6qJSfbg3prYoxzMBZ3MrSgaJ6PwFH3Zog91i7qKtjpqUd1",
  "key14": "5dXPzo7oQWWQLLrVFF5Kdi7LPYopNuXpBL8yXc5o6e4vYSEAv1ThJr9VBBXpqXsokKkVDfsMzVDjMvmNiwrfQU6m",
  "key15": "28Xm8gUKeSgYYyDjbbLKz62szBxNWaHfQerHMcq8aS2y6YJpUu7iWbo3XLLH1vwfNKVxNvpyiYFRopghm95oTsPp",
  "key16": "3iu9JfVsUdHCVySfX1dKX7U2VfeUq6NLqjJuHSVsLa1eqQmoM6E8WiqqyjyAowBB1VTcDiRCHjQdsXBSikj9cbeU",
  "key17": "2RdreGmvYYmeNHbDxazo6P2HYgtmuJ1MSyw2E3Zp4xFM7HJzL9Sw2yWxatwmrFmpWoBm2Gt56HK4bCEV5UxL3AhA",
  "key18": "3Py7zw94RKSCVLaqcyYRyN8FbhzMn9FQrBvAJo8i5Uh1mRsfsW3Ac3AnaaoKUzgnejRzpA6BSHZAzmspefpnD51u",
  "key19": "36Qb6qrVoz1msm6VZ9UhPjV9pVj8ny2SJ68YKCSNDuyGQyATBAQXGiS4fAU4YwA7fjSv8cwKAmvS7Y684zJistBB",
  "key20": "423sBh992m2WA1X7V9GQDrpDJpp8G7FYtRoryTmK5LYuyxhRcPRZ7LYYQTHHhKyiNu3tZ9upYbDEUppvc1YbBTYH",
  "key21": "3DEC9mG7W4YojUJLowrwfYmc3FsHXPMpFtv6iJceNGsXYotC4Nb1juaijaWdXTY6fxETdJZpXMAyV26QMbfWnR8r",
  "key22": "E7BusG2JYRw6uUwZN7pnXprvUXhFkZskiRDWuPNEn8N2typim2pNAjFeCrgfrFRzLAjN9MEGywYoKSYTfMBL5Vd",
  "key23": "2DJEoesrfLrhPP65dqsoBzHcmQQCb6aChmubhKDzFZ68jqQSkPRzkgW71H695j8UEgJMtg2qQqbozKrpE52mpi9U",
  "key24": "heqDbKd7M39gqrySS1jxYjDxPwcHJgcxSNZjDmAQTYGmffLGCNzTEk8PcH8M91HKt54zXAzQrjx8srU5novARSV",
  "key25": "pXvsi5beNWjDH6tYX5wmMJBtcFTwXa5zbMwKGPX5xV6ueKjb29VmGYQ62Lp1iSg2am2JWNZcXN8RSHKCCpJxi8S",
  "key26": "4W92ZTYNtDiCbfbMMf8NfTGA7ATeHUCZQZDiTM8hymojYHfRppzJka6ebeNZByXjMbdVtSbeAzDgcn5Mtvh1wdW",
  "key27": "2V3MSf6rLW7pzk98XbWvxoqeJ4Tb3s98MEvih8nhncwstH8ukcGRsYWtin32QifoDssWbpX4YD4cSU7vg9xy4YqH",
  "key28": "3PuhK9pMsRDJ9hHrDnuJ4LP9zz9UhC8gfXqySMuoz9BUgfiVVwNEouzYLzGKq7YfZMbDTDzTU58TsBy5kmb4nnkL",
  "key29": "2ULootcH1nnwku8zkQneX4QvPwkvnQD9Nuqi1wbdhGkT3bbFuQLyhXXwwnuo4zjbyVYCUxVXFMiKQsAWNYr6FaLJ",
  "key30": "zDzEGS6Y6Vx5MzrwUkyopcMHCrb8HauT7183RvE1utENVCgXK6TviuYAR4NAKDXhGTVvG3nmnAj3M7XvwV7yWwW",
  "key31": "2g5RXkrz3swvExQbX6sd6wDNxH1HzubzgTVsnGjcV5mHp4MDkeQFMbMAJWzpdRjo4y7p5ovxdsUKS5qdSrQGkttp",
  "key32": "2GzQ3xviZh3U9ptsFh9zayU9YWBtBNfq6TKDWPiGrfYizLqPCPux6LCRcqWpeZxj5wKDbwqYb6fev1Q4VaEvVrdT"
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
