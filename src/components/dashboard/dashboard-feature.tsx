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
    "3seQASf1fKqypdHFD7yxUunibpEweQ1Y1N4JCtywqwV6c4yaQA5F3pf5HsAVrjXWcm5JXHaepenvGopELcAAjerh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpZhsbjhRMSK2fL4imtNWHUrwhsR1XyQpW2QxeyeabgA5fqEMawStm5CCLe7giHdGaKBA4JjHCSE4gJZ2QKoWkZ",
  "key1": "3LuhL7uT2MKzGnps6TLexNsb1f8seRof6NvSMN1WqeTDBk5QBcDqzT23ksmWETDoaGLvHaaWihW81ifxrungvMUP",
  "key2": "5xnX6mTASiTCyW1njDyBqjv76sW1mE4wfXFB2JtQmsDmnoeNGNN4b1n9RwF8spfEBKBPG6gJEVi1fmWGFbKd5DoE",
  "key3": "jnPSKAEJQbvnCZBRbVwPNFWZX2SGkhtEi45Ui1pDn46rMduEFd51ZUhkADL3iHNJqVVog5ACBtx9fhWU15NpcCZ",
  "key4": "2zxwgthrf3gkbBHYHK5EoMz2gjy8ptRydjjiG8sCoZkagK2cqVYdCTB2ABKT9FtRsR6jHTe183s9mbK1kTE2crC5",
  "key5": "2egLTwc6BLwmCSViUN8h2SK5VoetFf8f5QPDbRmoRaLTqL14fwMCKEzRUYtvzoXHBZehNn3zSP2MnmnnSbo4UBMw",
  "key6": "5AHd8B6rfNT82uPegQvYiBoGB5g4qR8N1auM39qcESGgM5c6fKghA7yiXAbG2aVShcKMygFu4Ms3NafyMEatQa3G",
  "key7": "m2fd2TGuzvPBShz1Gujn8YSTVYq97s5sWQsUmvHvZt8cKEMa46q3HFYHPgbbbofptVwKpcdeagmXtNbnJKoaSYD",
  "key8": "2iCYbt6eNPcHP7wmzFxXqjDrazEY9jhbz61BVozpWHPuNoHEGEmhQ5sEfskPA8UwPGBygPibdiYQxbtRkPdBivhK",
  "key9": "5twmswvRbu9o28ABviDiheXjrf65m7zStZT7HQnyxKETUfVps6jApJyi8AoYMAjNdVZSzEG6JUqAVUtFB1CmzFFG",
  "key10": "3k8A2vekSrCWUHm8ZDeK6ouW7TvRbtudkazuqZToWNcAFBae7SzVETYu1V6rj3yWTrApc3qdJHVuh7JWt8dnbUE",
  "key11": "66GAWWBqto1nX8MtqwC11d1N8jAefVxRqv3zoF64Cfs6nYFKzT2URPCYzWLBJSgDSUq6GVi5bH1sqoE4TmobP4Sb",
  "key12": "zHNA8nj8HRMQvUGosn7Z7DR9CKf2Mjvf85CLEoEzryTQ9Lh2nEVg6m4tcU24fnuiBN3aWADi8XeJiaPnTgJm2Cy",
  "key13": "4Qv9oz1ACn1h49JrzsrRUnBEjeyvjrByQb6Wv8cbJWpzHiHdjDC1r6vGodTv6FhbWUEGVrzY4JcydN2zKxkdZD63",
  "key14": "2x9c9q981vMtkCgczdBrktASmsNf34JCVub4xuNABTbCZiTmMyrCFvWodo2DPAU2SZvoPutVm7gpTEJ1m8xTrzKQ",
  "key15": "5AzBCLE1jCKM9kkgBdajLjT9MHopUEwdncHY2DKbyCCki1EvuEVHWzRfgTacM6gDVi4Q59xdFqLBDxxD9emJWoxv",
  "key16": "2zPD6aPkLSzCbY93BbwQDfB4CrGAXwu1mwzsVseGmJPv8jhreXokcs4cmiPif5ZCgVDrkaLPYQkzyCbgfFE2TnQu",
  "key17": "5XPzHmQqUyY9sf82RX249bxiBaYXzCNTqeTRXpi4cY2JkVMr6NXHRWkLAKVxNjmyiZFLWaJsTNgF1x42ueRijXTS",
  "key18": "5cVBV2Rd5hvJyTsbD5BstaEDajzV8uXADwS8M3u14tGVic6LhKd1qcqoXLmBvTwU9ERDappUKdkzWWdHmge9spy4",
  "key19": "4iHozCV56kKjZedrHCQwmyXL8VUgCFoNfiSnLsUoVtBEaVn1UXJYbHjqtApCNu9651WthPvSXeSrEswpPqTq4EeU",
  "key20": "4bWJ9YX2x35ertiFmvPBgYxswiJNR89HuEZauSr5mvUdnmrNsbCG2XdwURsET7Pv2Kwg7LYrmjHwCG8VTF5NMgMd",
  "key21": "umrzmzCphXjkzYc8xYdf6Ve1kznp2whyUJzo3Viko6Enbpeh1XZKfWMrkBKJbSvexkTXpo2WAmE1NjJFcS7W18b",
  "key22": "55Vh3PHhycJzMPqm1KzLhjtTZDuy41J67fC5qJVRkMASA8NN4VX56bMmtJgC8Z9oZaT3B3DBHhbvgtVFeef7Q6pN",
  "key23": "4NqZZjELnzDT4v23sDF6wbKyXsMw3MnDmohV3nsGGe1C77snjZp5NgxYQpUQo4dTmGACwFzJApsBBKXSKstgrvcV",
  "key24": "ptGVfkEDtW1N15jxz7rVE9ko4t5Vb67hN7GSig7vQPSxtcSo3hikxUAM4ntMz3ERjxPhUZMZ76pvnbjqG2AD4xB",
  "key25": "4mNA4dYedzZPhKSpJMv7E99K2SWPAkexUh8iY9hxUEhHmVZWKXnvmXzpsjPnjASZRYGnC4bsUWJqMzoA7q55M1KN",
  "key26": "5WdSxyDAv863VGgF2jPAb1DY9kkzWPQ23kw7uQxaoiuyHAuvsKFhPnEHobyC7hu5DnAoQ9SHMtBwb5bvon7soner",
  "key27": "3VkmGwHCQibAMQoLZReZRepfPGVDGeUiKq3Lg4aR5ZRiMNgD7RERgGVa9zJG9szUAHHjkWHhYTxj9MMogokitKjC",
  "key28": "5vJopii6Cer9qh4jd5M9LWv1amoU6E4SLM6oqKfM8CqKQcL84WwqCnxm2zzjNQek9arGoSCo2nH52AweSGj1NxWq",
  "key29": "5VnGXqitdS2Grxf5wy7chgPdYa9JRjRePW3kGZsymauY7nshvPksynhMQGvoavLRdzcz4u2V3k3ZryzjCQUYTBvj",
  "key30": "2iA5WVDnvmxnwtfhSBB8KFKcFpcRuABnftEnLp1UVMaKeJwKtzFbsXnkLN4LRY6Eb8sD7thYiUL1mkvdsE7sGzAD",
  "key31": "koW2ZAagp3L619eceQmXdKxGJCnNTBn3KxgzknHNj2xP3VX97XH7PCqbpmnvPochGiQayBjwRbJpZWmAHy3hJwT",
  "key32": "25XjvhpjAhhPdNDyfZcHs8V9R5pyL4HvTbDFydwYLhPt9xJvTmGQ3iuzxGLNecQdKo6Yy2X42tTsWcJwCDRdF6TQ",
  "key33": "4aJp1m8qAWED9L6pHxgBmXEst6kjdeuJ3HbPxmcbV51CVYJ58cFD4A8qbcJhJNyZdacz7T5Vb9RdNbXKJqVtnVWJ",
  "key34": "3P7FG7jgmYy4HRHGRhAVHgBwtXE9bWSUQcWyYhGK2z96E1BsyFB9vhhX6t8Lh98gmxohNwsexAvnfEjb2QW1d3uT",
  "key35": "5ZcTjNsyV32qXrgxTyjgQkMT18Z2KLdb7KdMAJ7MsgR788r3jEH9NTQYH2VaXSd2ynWDcSu683FeGii1vwGjN86k",
  "key36": "3oRJ32kkzRU33wZrVEpLJwPa2cUMvpe8C5WhpQFTB9q5ZqsfvAmpReHCQDmvE2jQzGybpgBUdSUv8USfQ59ayvuL",
  "key37": "J3WUnfzDonDNm6KpiWCgJa4WjFduiTHBiMRdfa8NMPk22mo3DsegjuuQi6DF4PeZcAqZned718VJrtW2bVt63cH",
  "key38": "2VaeD9DHkbz4ZRjeUvdMkQotYGJUdJVRoTj7TwH9hDaTyjBCGDpwfiMTjF3SAxMc9HcaAAoPKfX9HMwtJaYYFYhu",
  "key39": "4EuqYCqAgqoRqEXy1G2XVPpVis4jLdxp7kfNS6nYwT6HzurhFQiAsiEgzYSg8UbgsRNtCvqtVnfAe4UHEaTCCMss",
  "key40": "4TtBYZgfxEjKFWkLzPmY4XsreXTKrzRmXJE3HskWSRH7FaSiLnXB1af6dg6aSRwK26qqk4GEcaHfG6wCHVNbnsH3",
  "key41": "bLi8uBEwn3yzeMBaz4y7PnfVDUAZhQyvxzKd5j3jvU5zyu9fCBv5F7x6NmLBSnWnd19vdMivf9SMbBR9ac3jEZ3"
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
