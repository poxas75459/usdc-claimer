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
    "3n77dgB22YxsUrZD4mugqQEtHizqZUQmDAddx7vMWkXyEGaGxj88p5CUaaAbVQV1XbY3VLR68YFBweM5r6RwSDQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dr593AVYzbq24sih5MtFofXTFgiMdZ2hoaeAZS4W2aFMzN77gZdASRdpTBVr94j41JkzGHZ1g7fNsdTHaCe1mJp",
  "key1": "5RVssy992z9ixi6hZVcKoV1xoeBXFLp71cKAoWRdAzNhZFfNt3uirsway22xaEA9DcD5nQNgHdeAG4yUFV21ETum",
  "key2": "3x72acnr5FDeJajHHjK7F3qZW2RTWLnN9piejGttad7QZoagWu4qTRT3sYGBSTaxYuEZK3MmGMHMjiCjXhPEr3V9",
  "key3": "5v8hiJJFQoriHs2erLXnH2Xz2PecAPv3DMKVPCj9yyGsdCCHyDqQyQ9vSPKsdCw5N8qoafYXLJAUCZVv6M4QfjyK",
  "key4": "3MWHbokUcMXrAowS9AsFytoeoKZmSPgZXv66yS4ZswdMHR2zYbaUAuf4qapKyD1ahzikxV24NXrQ8eFDa48d5Pme",
  "key5": "4qBsAVm8bEpgVrTUrTtgLNnZ2zXexnwG2KDaYtSdMeaxJazy4fVWZdDXDDpmkUu9JfHxXKzSLTKhGqE8QBy7SeMP",
  "key6": "4ySepa6JEn3bfKQEx2RzozBS9Ljpmm6gajsnWfWoPy2Zahm5qx3sqFWkuV3Yd66XaeAFfAsTT9LiP63QfdzwHiiw",
  "key7": "3H3r9PZnxa1ZMTzwoeV9b1n3yu9xrmEFqp2fLYGiCLs2rsUXdCnkSBGXn4jyMWx85sXfdx1183QBWmkYoDU4wor5",
  "key8": "2aaMhtGW4jESZYthZhdiD6yZB4AnWnHvMSP94UYWwuDzUBJDjZyTcDnxYvKjkvUyJjn3QmKcZHuN39VKSsNUHQsx",
  "key9": "3beU8es6nsDpG7vrtq9FDiF5QBGbVgkXH2jHyZXhiCYCevnxqHW3AMzJqhPzbF3JtEfEd3HExm2grEp51oWLVg2u",
  "key10": "2Qm8t1GnDy4sSjLd3JDMhufg8kqQLq71uZpMDNLepuCq5jSoQv9FMEVTsjsVf4Avxdx4JF4wkACGibLANbgVDjW7",
  "key11": "55DhFU4hJL1EKHLrAKiUVRAAWD9nkaSrcbwGGGwA5L3SV8KPmZPTPTMriLfT3yakmpQpb5KEb7ba1RFxtLHw64qi",
  "key12": "vLrd6j46f73o8mMydHzvLp5KzpuBjAWuWr3JS9AtwYhjAw6oTaQ7C4fQacgbXuMYyvBCEgt5y4JFiURZpwHCi7e",
  "key13": "3V6GzJPjf4MxZ7ijdtNQbmbyXxeRkjBKd4pS88GKD6EhmpfiE42DHEfoDHHMy9wyuLZQnwUbCUMQv8ZHRM3eXKJ9",
  "key14": "2oS9ux6ZzAfqsEcDodFcZVeeYKt4oq3DSC8fRdwnhxbeEFh5L5Tw39bhBhLAp8spoV56N7sGNYZkYiZDSphxKqmb",
  "key15": "2m1Yno6tMtRze99F7mayLPRZgU6QCgKgRLZbGKnYEqJRtNhzA8pmpd7wj1VhyprAA9ppSZMnA9QFKttVS6cFFFsp",
  "key16": "qLNpgsy5web2GrML4YA6kRidRC5sfhwUVmhR3i9N2cbCMz5WS4nthJJV5dvyXQdxNjr5AdsJ5DytTvrkW8ZvQe4",
  "key17": "36oKY5bAsfoYQ2sqKdCvprkPfhRSbTg6n4wPv4UxcymtCu6SV4TgUQgnvz2XwNCYZgYw2nPT57fiWB9xPqcSvHCF",
  "key18": "2zFWNKkwSrxbHqyLEKzBpASs8noSrXrTjZiXoDgiz1yeascqwJJ1qQ68QFS8zdmxt2efN3BFB7ii8dDDKbTMrXdh",
  "key19": "3dg8UL7mZnBecR5onutgDCi2FNJqVCbM8FJGxaCxJLWKXU1HcoYkJx3wZZFAkdcWikRny4aoCymM4ZgXrTofuWTg",
  "key20": "3BWgCQsJZeW8jutgaVfAGeoqS6w8XZemmmMfa56UYYctcCbuwYs8b8qzUNAHuqThRLRB9Go6CzRjTwmnXFfp2BMV",
  "key21": "b5wtrHLatdAcBWXNRke792TKtgMebp81xcf1jui2Niz1mwS31mvHHDXAWKkUi9F9ALnEpCNzgxahhCUcNWT176S",
  "key22": "5G7uvv8pr81Mcsn3eForVUPn4TGf1oNxx5wWDtobnub8nbzYJh3yv1UNe88jXWQcMDJPht7KKTLGt8yPD1TDVJUh",
  "key23": "2QPdoTBWBXHU8jwjrPpvikVxTWB27NKd81gdMqDvC5sCWnqm6JLYqbBQpSvVZM5r9nD4A2rp43mdUAEVNXTyf4ni",
  "key24": "5icR5LBNhEUf2DEZDdThhMWTYkHHkdzcCr4UdPrgqpBgABfi1U9qKh7m1atFFydLL4dqXJeghevzoL4HKFz8QdxN",
  "key25": "5jPCJdQNYttVtPxi8rxz9q3wnpwi8KMpaafj1gkGVPsKscchviL2MnSRJkPQ1RGNqV421p1uJyAMD53R6HqgEzoV",
  "key26": "3FsEfsLX9ZA4gQKxGzxKaKpxLue1La6tqFxxWcV94Y5MdM5VMBCmL6z5nNTvMfv7jDQat2kiQf4NiDiNtAVt7sJa",
  "key27": "3i5RB3hPY5ebJwLUP687gCavseBi1QpTsZUyzFX1WrTyexNSMNrcCvYWgk9Au8ohd9jDKrDUJMrx32K4m8GaCJ1a",
  "key28": "2isGwVnP9GV9HG2GE6wJjErHBtgHaNnHPdFfCnJEFVUJMJaYWo7bN63noz8fRww47QoaGp5vzZgzrbECbAGjAckc",
  "key29": "5BqavYMNJW3xWwSvKfFkGJWhvSJGby1TcdNwnx3Upk2V8f3LKzRDY36QuDhgcMuSu9jMHasHrt6kFJFZMWAkTJZV",
  "key30": "26TpLztDRmGKsjnKW854qZRfsyk3rPt54cxRAwfxNxdqnRfu8BTExT7WjTPr5LDfgD9VAfq5JYRzhtWhnF6XyKf7",
  "key31": "2WvE9Tg6zfvUEz5XQBaghemFQ8G7PrEyu4auLtdp8cJTmb1CVwUJ1v9KoHmzzEr2rFk27pDoE1arNBvG4tv9JRUF",
  "key32": "3Qi7z12oc9R36e3Pea43MP9NqKvAWFpt3YdcsD2QjmNm93ny9EmEwsF6H738P4m6TSPRHC49b2CKUWBFuqXAC8Rk",
  "key33": "4BVoixiu4fDzWHs1bDecJVGqN4ufxV2b4WsVZfqfS6ZdH7RLRto8MDwi15CoHuWe2zk8DPsWYjFvJGTvSsEQ1RKp",
  "key34": "67rBcejiBQBB5n1ogKJML6dAphnvZbmfc2KSvCsjjrhHXjT9XHV4jVDymP2cDKeytk4drRx1NsPQm4JeY29esKh1"
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
