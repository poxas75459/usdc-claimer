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
    "26p1MsnoBm5ciqRnFdVgoRhSGW1gXpTNCT6P9yXdKEx82iiWJ1HKZnma9mhaJNJpJpXvyiaJp1uqeFyJXTEoYDXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6K6FXqAtfdPT9M9PCiAYXAxLjP3TsLeGfuuZDau98gvHEYw1FvBnvF4kQUb6sPrUdwesPXXqWYN2CTYGCExEnz",
  "key1": "3cjqR1GasayEG1n5NHiCSoQzS2mYzm6bPjbHNTeCCZX1uxGCHBCvVhq6695LZjR3FXTyuDQUuAUS4md8JTZ9w1UD",
  "key2": "4dVNCnqsA3aCw56dDi97Y5DoBeSqq8VumaWzrBvNdf49o9cbtkiGhWVGYrg6znXL26Qtszdrixc3TTns5ScTtUmv",
  "key3": "4eMv3gjb8GvN3dEFtptC8GUP9ks2gYSpgGd2yeasiAWSGYik2hzvvvgJmweygq4sNscpuRMeuepaedSPucHWxdiz",
  "key4": "2nJJiimgRn5X3KVmDZFpqQbqcJGPjAWy87gS2VCSwG148rNz2QVPbL7NoTkfoY4Ketg9L4nCSGpjTHLHWUMtkwAT",
  "key5": "2aiZGXDstPPUd4Tod4yJJCj2Xqeo26e5kEVd3yMN85DiaY68t4AmuNUGnsQzQG6K9CDsq3y8NMK1HG74MB1kP3Ya",
  "key6": "C6poSiWNjXP7HoxL1RTzCFC6qoe3znG3BTRHnLLTjZZdSLvAnLZUzmmmJrP6h8Crb5Uks9muSvaED57Dhjpn8gv",
  "key7": "2Zyc2DaogzVDPrE7ECjTntUeD6XJhhkFN72M8tR9JPc2ncdFb4ptkzjRtBVqnN5y47RtJGKgCKjtZny9idGLhXvr",
  "key8": "5JYyfHq1W3BbQAwQsqxUjcpjDyKsVPkVKn36kVqp63pKV6oBdj1BojP6zfBWwGhv2L9U9wyGP9tYZ5swrK6D59e6",
  "key9": "3bDA5oqUMH2fr5vRd4SUG6P2KrBtMwUPZqiD9CcvT8AqWHmNY67pywkrFXBrrpamYudLjJSp3bKUxHkHNcgUVksu",
  "key10": "2T5wUFam9gC7fWWmjsjH4mW7EBfCeCbBdKovmgCyGesxtuimUrtawYh8xX7PBVYeggNBZnbVr3hfEeciuvP4vBgL",
  "key11": "sdwEs6GQ8HofssEBpeYd46UQhDK6MsXV948oZcMTUUmsmnuVZz9gVTVLnC3zHXG88KdJieQpoxNUYdY63fKiJHz",
  "key12": "Pedc92HW9GKkgfWwUXzsvoNaVPRUpfuj3g7KzwY1sTysHJ6nk4VQ7st261LsjQL53Wi5kYdfxLpadAFwQFfcP7D",
  "key13": "4vAeprgaYLZB9V3evjcJV7Y5WmVBUNGGDQUin8fQDQxMvpHCmH99Pgjy1AtR3RSd6zJobMLCFxxfmizqXbT6yYi5",
  "key14": "55udLr4z3aDtcEAvCNHDDrEjDhVbrZCC4FPWuaNXKXuCnzotXRXUL89jyufyy9Y4MnYVub3D3KwaYTbemstncwEt",
  "key15": "PhAWKEhGEVGMjBXQACdGUwXxaUKA3hMQWnXDGQBHY26Zs3C9WUdhW8G4mLPQ6Q8P8Zyu6b8ecfmfY9j5tTqa8Nf",
  "key16": "N2kSF513mQkjHcmrFvHXpf6dG9f43CZ81BkjKfdEkZCtNg1Fg5isYqgUSFDVd6q4zAcEz36G17xLegZ76ocC7bm",
  "key17": "3fGfnxg98LTLLMJy2wXumpPgFnoTC4Eb9hHPqfUv1GA3CWDWgZBXeCgn4pyrvVEtYaKXGCERP795AoEg5muMjLFe",
  "key18": "3SqGTG1jNZ6416eDiYuEhhgMC1Bj2Bbaiz4au56q5Bv8FUeBgsWUPr9Fx3WJAQjNezda8znQEVveVH2Uu6oWcTE6",
  "key19": "8pwgNRxUxFrQWpvwcf9QqUe2CdWTG8obrFSFMfHEQhvFpkt6bbmWdvSeihWLStXs2So7XnL8PMyE4g3wQyWSzMU",
  "key20": "56GRhoYtTfKbFV4MAvU5ZBURzu3JVEyMBioEBVNzJwzyf27d7ukCzYrMYMooAsbxfZcSa6ZHv7BrJiFoCxwxNRHc",
  "key21": "5chEroFyVuWnS4Rr9gXhjFhoHevmbuDZWfpfjQDJoB98ec2mQy7uHcWLFyLwDFvsxokyzHm6k24uu8Q5Ev4p5goD",
  "key22": "3n53BY4R31GovFYFyWG4k1htocyZ6QWu4wK7ECaPUhHwjs14VN9NBR7Us6H7q3SrxBXaEw13bT3KToXuNB5dDX3z",
  "key23": "65Qyhk5nQMfs2YaXnUBX9zriQMAzz2zF9KyWxVwHYGcNrBR2NXmKaez8koGjvaG2KX7x6sxiWcHtq8BfcFCV7ou4",
  "key24": "4aCJW1KnxMPECq8KqxALTcR48yGT1sX9mv3YxLYs8tVUR7EBY8omzoaYvZXQcozy2EU9qAtrvVJLsXADQrr33J9R",
  "key25": "2NSm5QxDYymTbrPuGq4Y9VLAWFMgAkaYWm8uTkLKpkqZQgKRz2oGspx7aEDDP9kcJHe9su21uGDUzWPfgyeECt13",
  "key26": "ahKA2f6Wbbty6oVKcc2ZDyaMo4vpVTwB31U4xAxCQBkgeMzhTDijRApY7xGa5spdHjbkRvTieuErg62yrcabnqU",
  "key27": "akPvMKXteVdhEcAZN7jXyGimF3YGF1uwK4H5nFB2z65WjGFuDSZRptnQ9K9ccJwa2vZrfmJbgLdG9pdao6wfjD1",
  "key28": "4KCiqWguZynu8hddRWUBCXaGhmFmg94WDLJhjWmmQjhKWbYJsgyWpzbnuAYMhheoeMxEJQeAsvRPQY5tEWpVrkzj",
  "key29": "55xHvo3T2UE4icoAqVZ4zS9gYJahqeXm4LFkGzjEk5bDhQdP5Ye1HvBpwCnmN74fh7s1xU3vSvTo4FimZMrH9pN9",
  "key30": "t722CpVj7HEygawhzfmtYDmycu88Nrf7kfobkjC3JVfroarzLqmg2BZdccqAfeaNu4F6uYpvaU4AvCSkJvv8k4w",
  "key31": "4hmrji1f2UoJ7eh3TgDYcgsp1Vwa14o8fZWbQSgXkuKLXkRHBd6MdKz6TuPDMM1Kke73e1qCTG34C85WwRJ1A6aw",
  "key32": "3wCPPxcBouEJcqhBE6xw9jUoZEukEkzT615ztgJ4L11b5XBrxh2drftCSuUTVWuK84VtgycPmVRUrCyQBpBPpTNn",
  "key33": "3ZMTiTGJfvvcqTKW7gF1iJjWvot3PYbHJjpYM6RgRmQGhdNb992A75Wg7zCpmyKLpKKtrrY9RbrCaKgi73oeuqq3",
  "key34": "2WgVmnZNK5THixZXoEUdGRkAMHneTgmMc1tKBV5kw7qwoa5XKzzNciSkzcpuVTK4t2TmcyjvjQd64mWBtEFFhAGb"
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
