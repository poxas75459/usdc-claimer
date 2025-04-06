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
    "2Eb3S1mRSf9gQhYZfuzSMvJyDzQUDmQCsdd75rRVVpg29CvpLQrKpw3Ar4KtP5SCnV15uJ4QZtConJAUJM7RS3pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSERZ6kWSwzqeAZtV8kN7fAaEeRAwpgRSq35NtaPyhpV7K53b9JPCfHAYdTgrdEqL6Ms9Qw58Lt1y5oL3YcRqBh",
  "key1": "5Zg9a76S3QXiNXJb7YXsGCqDHidqnG3Ep4oyurhpwsthB36d4cMswAewKQXoqsfJCwzvYoDFG8ibbEBEFFNwsqQB",
  "key2": "2w9fFmrbrU7xReG7xyYapav4DvNgFS5Zo5Nv6nTm1EYN7pYtbXs8zFQ8F44ZumvPvKtAmoqYCYkeLXXFLmQVcoui",
  "key3": "4fLcLzZ3KY8JqrNurqDzTAYEzHmbHvpSHbdTmKBTjFCPDdKBDvokM3rx6BEogPLPJiZ74F31h1HMNdSVFNXGqk27",
  "key4": "54Ca61V2SvwTWtQySYq1cEe3brESbFiq8SAdHXyJ8HLf8KhSnTG54Yd35Hm3EYQu4JKpdgiYLYQd6LvhfBkB7jxu",
  "key5": "5rQ1wkDK8y7iNDMFLHD1WdP23KEvhFtWvyuqaaZsMBaLuxZczmpcPPt38JXh8CWksMW2ARgAHXL5W34z4b31o8TH",
  "key6": "2QjnEFrTwvvSbdeQw34YHDG2cE2P4qNKfQ6PvoeWw2uvyhRncg86JYMvHwBnkjDm5yfMBC8HAUewCDbcrDCY9ik9",
  "key7": "2eY9PVQysFyVdsbvmqxnD9Lo8abv5SJ3ZkkjTjRpe7GyhdNaqUsZcmkXPA5hoYWngEUnsS9h41e2rg7djTNsoHPZ",
  "key8": "2hWpXrMPfbLBMPBDiKqrZW8EWtGf97m6JsznZAexupZvrepQyyT9hBbtd4Z2CKKTPPASFvy8hdYHRvV7xVR8g4fS",
  "key9": "4wh8oAMvpbacwYGgou8FCxrB947LGzzJd5Q38BwfAeFKLVtfkGCfwXeaiVQLJuCG5TLGbD7HMKyEScNtBFXCy5u2",
  "key10": "5v3G6Q4cyCc5YiA2m963FU4bv9QfT4tVdZwdQ7Nx8aecPsE2bguPrrDbhLoWwPqTDC87HGQMx4Wy3oMVCCwmxB6p",
  "key11": "66SBZiQmCAZt3J1R8dwbfbCmek1eiQZgAiv1LJoZUXjPbFfTqjmQ4EybPix6sASEqdZWuRq6LH3Lk5Qv1nU18eD7",
  "key12": "34TDGSJUQDHJtMemYNqgbbc4paMPS6Ja39j7ot79wPMWvrecatnvn6o5JkqtZSgzFfqm7FKmNm4NJ6LGtRSgNjTc",
  "key13": "3PJDPDbtupDyjL2KtpCRgFHdcNVnLursbX37PejHmUpt4PeSgRRfjY9qbQGDmQDQSDYN7wEDofVKd7XP4so9dYZE",
  "key14": "31s3iiAHkAsa8GSXAsFSmynhayyMAtC19LQ1CMVx1PtecmqvqJW8TfAAQFYyBxejM3s4t8RrBgUjYt4sHt7Qgjm7",
  "key15": "54sPEGFiRe8pWRdzQZBeWFW5rhygV3sq4zJGT11BndJAxczqX7RXcTmVv6rUXVqrFRzYpZryDJv5hgmnb9EQqZdR",
  "key16": "46aHbZ91H22iiDKUzHAWMR6snumY55apLzZyj6noza9CWSWWhjhHf8zjeLXvJDjSmJGgqYPBd7bApQceJ7EsR4Qy",
  "key17": "2rPTjGNqiPzoUfsf1RsD2CaAchwHFGg5pXhcnhNbrSTo1WPSBfkLkRftHFw1Hqxj9MGAvH9gZGM1v88G3TYyc8RE",
  "key18": "2evXFHFDHV2xt8mDUceas871aeqdNf1nCg9n1yRsUx7jqQ3NNNKCrpW7oQPAdHvxkwguXXyap9msmc9Ujsxmb9Ff",
  "key19": "39We6cGYBbg28KLgodJQooV3QVDBhBMXnzrXwNFZPFi1C8f8KsNQVZcL7Guv5dxCRx5Qdy2rDay8zRQvrCmEdQMR",
  "key20": "5dHsuqSmJ3B1VwkhYTWXqXzpNzUjiUTnXr4biEmMuyUMqbszTHyb96x4aMShXD6sRTGb82Wco574EtUwavBhEcxU",
  "key21": "2ancy9V3sXijGDjPrJnWeFNawi667vYbhGcgvHyLr99npKbbKsAqHoE7cmtnK8n6mjGjydyNcWqTr2Nuw2qYGvB6",
  "key22": "4KUz9rjimwP5h5pHYkdYgvKjGb4WAkzGLcnGTZ8GcebT5xyPuqyGDmdDUsxw8BuTcSapgfLDNdXB3KUAfhTTeiiC",
  "key23": "ek3ogXicyGPa29N8VuBwV8ziFgfVhaq8EMxo7iFv6aZjyA3ZggedqdGKoNjQ1bJ4PqzpYbkcADQLbyoAD7B8Mco",
  "key24": "31R2aTDk5KsT6LgbLWykV5ipaFhFSuWBA3oxt8TXpfKSeKLPWcPJbGPNReafEszQuv3L1cg6kGyH1y3T6BSu9Sw8",
  "key25": "2e7J51Q4LdoQVm59vKr1GczqtgWZu5mj91Cu9PL6hbubd588vVQxFyCsqUfGBPe7V4Lwf5ZoYk9BEUxqGD8638X8",
  "key26": "3uuWkWLnWHBmsT4E4UB24K1Bg3Jk2Nxw8JYCPtRpxQdNCuVHu3LPZY1WTQVmd6pRfzvgto5LoX2V42Gne61KkyLx",
  "key27": "4BAYyQCokeU6EqeGWwhkn4sCfiCU4tQwgD2SuyQj2UgecRj2ZEv4pP9Gah1cnYqDaqNVjYwfum7gGf8ncNPKpRyy",
  "key28": "4LrwZXf5ve874E7EoaFGBu8gTigL4HhSYBHSHM2C1QmbyQyMP5U9f3rwarLUb9SNGZixDbH431eysdWKajZGFUkc",
  "key29": "tRx2YL4uoui3SHyUYNPJrwimuYpFEkX1Sg6NZoqYm12d2x2kDG9BQxKge5oUnrhMNqvPUgRC7Hij3fB53SzLCYr",
  "key30": "66PXg7YySx2HsetxcDjfusiwys75gWbhxMe1p6UueK8JtxbvwLKB4MQaYECkkbDDNe2WF8J3AwBuSVfkWGzFrkhm",
  "key31": "LKNGqPebYW8rb2yS78zd8Xn2QXhafvSMMifb7Rxoc5p9powJeayYyAJ4LYXwKrsDNHmhqpYbyEcxbYQGhKd6FbQ",
  "key32": "5jy9LCt3k7S14WRVdzAGWr7qY3cvYjUPHnDKVL5BzCGeWkGSiWcBeFzFjPNgDpdKJRUcFYwvr52MqpTremwZXpna",
  "key33": "4dNj31hWkNVbELLRH5JeFhPVJ3YoE6ayNwZp5BpRyiW3Lo5oGW9puT31VoQWaBcXXQWRzpGTcuGCD7FrqU6tpci9",
  "key34": "5vMyDG9PKG6yq9K4CDCvmwNk8REcu9LfiGx1aHCbLGJVDhedbD2of5XhmqQbf8TZrRJPUVeGoRC8YtnLspaQFwaX",
  "key35": "2sscmzo3UvWY7T3aPzE2ypRtLQbPYJghVkDUw6BTtyyhRBYqeraBFSjZj3FHbZQMmWJPuR1dqYC74nTQVGJi96sN",
  "key36": "4njsCt7fNLbTEYX2Az3LBaXRGpMpZaMyWfwY5ATi7paTxTuakY62TfwjJMpv7TCCJUB28r2dztyWY4NJ7UKDDtFn",
  "key37": "4tNk3MpSmaiVms8RkgP8n4Mcekn538PA6n2ZtH5hKKkC37PnzSLbvZH3kvVbs3ziGNkvTdnV4Nnxo6msoqhFH12r",
  "key38": "T3H9DrfqQ9L98XsaHiB8VDC1osb8vBxPqwgsGF3GGW3gtLc1c7pTHKkwmQj3vkB7R4YCbWnrspYreLyxxP7vYJt",
  "key39": "5K9zHRYGvARkVhepRFV4sBEv52j7HzAdtnAz9b2KDsa1RtXqBFYyJp7zQ2HPpt8D4d9u6tKSipQashzRAQ7do9Fb",
  "key40": "5D47y7uC1QwquXksj9wKW1i1muA8C2VZH1M7EfkhSiHwGNCckQE32UjhSoN6ywTcCwHojzSC9mRsQcYxcgSFXzQe",
  "key41": "5oszEnhCfko8s9kDK9LHqufvr4Yvf6j8VCaHNdxXLTzaRjBGo8QCyJBmeUeobzL3kk8GxHSbCDGMWqQ4envQCLTH",
  "key42": "3xEC9XnkcnTvT6KKhhfy1fzrUsk4dg2ArNT4jx27G6P332dCT2Wu2dixgZfLnWD75vS2XrwXRM9qDV1rG5HyUunj",
  "key43": "2GAtkzWWP8ZB8RCekiALdufrc9rQBPWqvreiCQhzAuPzsrtSBaLXfSyyzMkJMQKxddpyAvaJ8H2pADpUT9D1Sc2b",
  "key44": "4v46sqFS2joanG8DTVV1oT2qZNHrKQueQeq73zuTfwk8eQmqfrG6GrWL27gLRCJHtFCAowUhwDFThEXvJVQicuqV"
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
