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
    "4uaaWrBV4YJhcEvZNFc4TFpBBqFazwo4WKjipVkHA1J5P5ukJJbqefBWpEeCLdEczdprfHbPUSzedwJp1KHGBVsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVxaGMNUNtieNyVspD9Xuei1iCi8Gv6FbXVnRrDLyPUgwnSkFSwJiVnD5GvmYHPzaCv3DaKk8ajHACjiAsqKWTg",
  "key1": "2cxUPnxbdnD8w8hf9cPPbn1oKuyjdTQ4TnLWwTBs5H4QLoDs93pVSrdhURTmKaoV1cHPBBJprrFzdFKYcb1i94tQ",
  "key2": "ifmwHhrRn5pzzuyQG4dsoYFm2WEXb46YMKPk2a7qQy5T414c3yWcxp7zhASYZtHntEiyquFNB81VEcF5iDGZN3M",
  "key3": "3TUte99PaTDKsADWEWj8tHp9noxPD1Pq17BZ51GRs9eA8i9wqM6NNttgtVuysBuiXSCrcxP1BXxYpDYCFNNArbSL",
  "key4": "3LGwaw47dg3ukPyaWtDeYkHx3D9sif3EfBNSgTdtAeTEpCknzGomiDUFxWTzhfTiFcFPWt55JkkcJ7ABW5ux2rvM",
  "key5": "2akM4XwWjhdeQGF74knuehVsPhL9SpAcih4Dc9BCs3Z7MKSCwunCdrrZUMkKxcE8NBSxrneFPS5ANR9f7xXDhB26",
  "key6": "4ZiUS4u5WywgPBkK8ZgnvjYKN8o5qjYQ82PWxzUpNu4dTeH6JUvzfr12UtcahA3DCDMnmFvka3AAcmrGSAs66j6Y",
  "key7": "3nqfoCNPSMU32e7h2fRi4dxjZNh2R9U7GwoLnQWPqdaYHZFA32YLEzoT2bcUB7VNb9Q9aTJcTVXRBnM9jkkToSZf",
  "key8": "Jp9ppnvCfSgErLyGEuU5Yq3akWiBq94CpB3VUHh2YZDKm7hJkeZinoK1ur6Yz8WBaJ4BiuTmXAe3Trvna8JRcY2",
  "key9": "3sT6dRoSMbgNyAtYZAYy7AdWpMgmbxtNy5eS9Z7cRS7J2HxDfuhmCFEyjVK6dpwp9BsN4MNqQjMrFG94cFXyJHFs",
  "key10": "cr1Qs3L4TdgDomqaPzrLL8UvbGM1oPuMttTmbkE77AqEWjSQcBLAR45EC3yyF4E6ehRBmEN8dMiPp55ooNWVrGf",
  "key11": "39s9XffGGqqoFotjFi8nUpBtmJoR4PrhZedQi9mQuJ3dcBPSDVBHTmRmShZZiZ2kWcEnC9BAKn9mSjBVX1h8hEGS",
  "key12": "5V357eBbqX85WRNJkc9PDunztAkyYTpNBvx3B3Xwo6W4BTCWu4oNVkngFnFh5CH8WZhAMXwTBZRifSvhpyfGS3B1",
  "key13": "633bU5m9zRQvb4NcgTVjpVGB1n2cPcywUYEHybCJfkRsDCdUJvrEASYF7Zh7rdETy7ipVHeYvt9nwLp9wv4brcug",
  "key14": "4FvU1mrHUnqfjruLUbLEo55Za6SZ2TWJQKWJsdb2vaX9htG66BHVFT3paiPrWmUnA2JW1eEyYWH2oJEp1RuDZK7L",
  "key15": "43r1zPTTxbbN2qPmP5MZ4vPYsqFZ411ArdL9kZJAD93uqa1zckWPM8iznJyrCCuKVxWTNRAQeRR3zB2ftLYkknJp",
  "key16": "57ytm5B4scGwiL8rFb5inFkySNdyb9TiVPvTjns6XTsSyhLxyu6wUARHgFvBVwABQ3NuYcBkvtRLDLgjYSQGoc3D",
  "key17": "3P18D8dD7S6MR2PBtnKtvo8w3ADyLiF53dktVsE5x18MFtkh46BRqv9zwhNLtorXEGbZJFi5DGfEdvPqKRNfGkNJ",
  "key18": "5kAoLZEJKdbdEmquQrGQmv8rzbsu9LfSAtAS7iw5AnmGGxaFyGWAyNkWerMQy7PfAsRk4DvkYAqa8dHbxjpi8kj4",
  "key19": "GpUe8Vt6NgYouRNskEE6yXdo2Ran3CZfi5mJeQveRfnCuj12oTtaeJLKB45JNU5URzGmTwZ36xcQe5mUpks9e9Y",
  "key20": "21iqj8HJxGK4VoeQ53c8L94inLgLM4UPBStTTop6DWRn7x62tJZKQXx4gh3BmUg7xwxE45xoAZZTv9Ren4Az4LKQ",
  "key21": "5MDKb2dcgM63ggfWscQEZsj1KE4mJgACto5mKqAgkd4Hk13DwwGJtdv9UyGZUUbUaywzQNStMeDVtcKNwqNYTeEF",
  "key22": "2miPNoLnvUfBGhsniiXYHkaVbkVuU1Cb7gBWPtvwCWk2yctramnRrmjAM6Qj9U14vvGAaddBDuizBtyXVcERfbWY",
  "key23": "5A1URnMqLFN4MrDMYRpEGdDtHK9AkzbjUSwEZogMnBHjNa1W5zy4Fzn4y72qe4eY4Bpk6D2H7Z4eNHhbuQigU9m7",
  "key24": "2qGviPi9z49c8bmqSUwT3YRJvpSkqN89G3DRQVVmHuVJjAaMqWWPmB32eweQRePGqTVAjCnJLjg4uYZsLcqUbEJj",
  "key25": "PKAoFK1RnUVSoLQp6vM3hQ5K8AanBb5SaNrL1vUr1Hd28jvi1gndb3xz7QcDoKjzPFKoPJCx5aQotiWY1VMjb71",
  "key26": "487ZN6nDWzAAi87ourYvmJQkLT4bxwz2uSE9fS2cMGnEzdyzKxSh3MnhsxFUL7u7AjXjLhapzcXjLct1ziTm79p6",
  "key27": "5Ku9gETKuAry5NMd1fMiwezf6Sa2wFShTnjQmVTn9ohrw4rpE2787Pmu2sAKaN9t9K9ovP4pp9tWtpX9vT77Bree",
  "key28": "65xBTUDPgfCXQqVpNyJM8CfH8E6N28ormiEwmsv5U3vSq3CJtCUCoFMd5QcrpDieJrB4UXhdX1dqzbYuzy2Ekthy",
  "key29": "MpqD6FoiQDnbKthGgT7BZHYdDpxNGxwRnoZtvEzXwZM4Y8jYra2idzcX7BLxLsqbs1Vm4YqbDrxBShA7i7aTPAy",
  "key30": "46ubFicasFmx4MxooxaPiFVGuX1qQaENE78zR8gjiiaP2iRnMWERbH4WLprTsMcTpZVTzcTQEf8Hk3aMMGwUVjja",
  "key31": "4z1v6P6pQF9dU4MkoUEGXNg465M4e8EfkfT6UjWqX9SvaePZLEAiFGKXNtd9CdR7UVFf3s9bUj4C76rNk3TFQbEN",
  "key32": "4BNtRzkcPL8kdEoqqCXyjpcqEofXMFwW2v3jt9TAYgrYKMLzr26gpPjNduq14GDWXjeNwPDoPXDzHJbNtdG1cWCY",
  "key33": "3mJrryWxJ1SbK8TcPu1E6G4yM4bCbJLTUnEc6avRpHGMWRDUeeavA9Cn1y9i551t8P52DGRjEWsLQ8FVsbr6gH2v",
  "key34": "5yEY1xV67axSocZQDM81SErChahLXDVxEiLrgtpmR8DEhkZ8BnvkfBCSQnm8xykwuEFDA1iKbNQAgNN9xM52vCZn",
  "key35": "5c7vuQXBDJCFm451LWeztyscXMWrex8XVPmLt47Vth6hnkSXCYDPEqcRxVhDuPkTRx3V2VNYNqnYuy9jjT3sNSdv"
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
