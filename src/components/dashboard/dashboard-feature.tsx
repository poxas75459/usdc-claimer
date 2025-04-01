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
    "2Mdo18xAW751punnQbQiAezXiVmCU7QhiaXjmsHKShXCHqrE3cdcgWwNshP1mgggAWp83tYKvJwVfu6cpuyzPK7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpJ4qcMmND87ym5Hh9y3FTi1eARTCJsBdSYepCDGTkQa8hsDc6t7DGvKrJ3SRhzjM2nGVbVMLa2FP1LoRLEgRwZ",
  "key1": "P39z5jsPD8iPEnQNQrqFMAiTPu2rW1ZmNfm1ttwqAejCzmUqCkvGvigHmp6rBpoJJHktRTQ5indXcEes8Kcyvao",
  "key2": "oxLfZb1iR8VBiQJQXy9evpNWZJh9ziL3hymARUPVfWqUUBtqSQs9bnnwkx2pMa6MdwkAoZmCFuXFZBZJgQXVYQt",
  "key3": "SEojKxEiBRvMD7jrKN2djsCkV2kbGfDLKSmP925h88uv2cLB81yEgNrb3SgXFYyZyqE6sMDVJpxBc4RnQww2FKb",
  "key4": "YYWxL7WtMu6wZu4tvWHZ51JGKtiPRa32NHxG8qsh3Q1NozvBVNngw2eJxriR8eDEszodvf8nQXLYNCkpoYzEWKW",
  "key5": "3ydhjrj8t9xCmzirCZkWGcbS6otHyCFhw1dF9QNohnELqcyeFpff28eCvccso7QjMkBZvPzNwJLKn3XgXv8ZGQic",
  "key6": "55xraV1J4kQtrxwJz2D38ufPF3fiosVPSv9VrCga9zPHJrD2yfNNMwn1wyE8RB7HTrpsMsaXroh9ovfGEcEjarbG",
  "key7": "27KqRTedWeBr2VzoE8WfvLqQUVPo78qBuqQ93hu8kRBg7pwfkSv4WDiTDbXuoyfSu9XaVVeRny1VMyrjHyjNw7kg",
  "key8": "59r5soJRYricxfjXwWptyrVMiKxKY6aJXefbVmoAL8bKWjLCSVjN4EuxsqpyHiNS8GMMESPUUMKgghWWC9ajW2xx",
  "key9": "4ThCSvBp4AcaipXq2eb8HDuR5GgwkKofbcsTqWuc9ycJUE8cyRrESAZWT2D3mnu7WDtBgHH95rmL4z61oPwKki1T",
  "key10": "5hgMZGJ6tbenqW5fgLcg9i193yvL11ZHqqk5tpAReqh8hdqPzgvW8TQAt5FBb3aaZw3F4xb1HX1kKQvaz1P2Pcof",
  "key11": "55rfRKFtFF3XYJbVmnnCqCup5t2Fgx6vRRYEqZ97SNzL1fPCQkuRfmyoqGTidcGwV95tN7KY36PfxtSJaejwtNv4",
  "key12": "2uaAVjx2eyqfxDGHyzTb72mEaEWACK1WVDu4rQaLtSNCF3w25mrKGJoiebBPBHCNmwkw5pipTSureRQeSLGdy5iJ",
  "key13": "5cpj1PFfzpeAQaqPnR5CrtEfevrzqneEFPo48ZHDfytCiGvRzncrEkiFk4yr9GHwNhczC6ac78WY3JQo8n5Dve8t",
  "key14": "5jRm7cYRDxsCeedv9J6Sd4p6xvZ233aTNmopKgis7Gsy2pzT6ZR5hNbExoS3eftiCUx5gF6EsdCihaKcZh6h19ny",
  "key15": "2eMqb3s819bG9r4QgULJKH4s9fnDwDmCHLvctZkjVHUAbSuMzU9anbCRrYRD7KhPe6oWRZZV9e3NCyEZKVS8EJN5",
  "key16": "2ntPkAdYehY1t1rybuduBXvjQxzNsj3KW2M626eqaxbn9XdeTb91FcxWFvbrKkbFWp17VdBf4a5aK4gqZko7fGHV",
  "key17": "N8dBT7SkbTNTZFknppXLaKptHWq6yT6gCHJNTkpsBV8tLRrEz64gLviezrbJ7wBZtyxvoEbFNoTnenoujoCF8jV",
  "key18": "5hajEFEVQbeS6MBWMRfwd3uB3wWf3FDYYZDw6CxHAqNSiQmxA4TZgdysxb4xe3V6ZcPWmN7ML7KqfR3oVNxX8rTu",
  "key19": "3W3HnX9ChRRq4Fb74bG53q6bmjixK7Fsushhhb1R3XJBjqQHopBcsTrm7y5akHQarFADUqupjoE3YT7dat1CkSxe",
  "key20": "9L7wrh87VQiUgBG9KPFZQQp1r8FBzjyFw9bxmDdCUdvfc1SAFdspDW2p74hPSHcgXfNSudtMTGhZQgD4eSLNSHd",
  "key21": "67R5nCsAecnRVbV6y8EFR2z7tT8BJKXWQbsh6ocTCNewFkvBRhzGqVLnPDuNgV1ztPosMEmy3WNPMFhJy8oQT6u9",
  "key22": "2e3PNgW82M18qP4zEHr1nvKqKiYoTv3m8oBiHFeUiDdYjaWfhz7rjy9zcg9mqvQJ3jK86mEpDmtj8K891X6QX1ng",
  "key23": "3v8paMdaAWPyZKkcbDWJQiD96mvABMttsF8EqBvS5YPrKFECUZDez593LuqEQ42RNUY6aEzGw3WjLeeNHniFiB5n",
  "key24": "3hhAmuVK8aYdAot1S3P3ZRYimSZ4NahHXPZ2N9Aj4dnmZ4ooZ6AHo2qTg3AKTD55ARpHoDZ4AHcQ9gbsfLrnoYuL",
  "key25": "4VuMLDSEhZes7TyS5M7fEi9PioamrJETjDdSfp4EevhVQcC2qVQy3gwZFjTg8nK1HDaL9XZcBxPrac1n2j9iCHQk",
  "key26": "X2xTCbagJQb3R9SU1vVkJ8ND8xsCxmAuoReifEpRNd7u28my5NjSp4URmdtF11N7oauJnstdTTe7fWjmn3474Bd",
  "key27": "4rnK5JPuC26RW4oBLVttS5fjZWfuJAYJY8AdZY2mKUHrLoK4iK9kt8zz9FgwBSBEomUZhsZCdqNwWxEA824ck9ts",
  "key28": "412tNJMMNKoAmmUfW1V6Sup2TizHgwKnyHJUWqg3gBrDN9NakknVerEd1P1xi5rw8tLJRDEphLhHcq7EpYMXqezi",
  "key29": "3y6kwfcgb2veFWuQLY15CABP42zgWgMu54UXuNw1GQsnmwFqhDP6Pdrs4wCTZY4SXBiwNYwhaKRv7z2fKeFah6uM",
  "key30": "XhWvyDfgBnjahpendUP3Pphn8R3eqvuC3ZJhdoTjq57wt2zt5jPh9BKJ1ZJbtJ822CX5aNzPjw3jjNnS52bhbYC",
  "key31": "uV8z4ZxuV6Xdh4VMcbAD3hpUYYj4hJcdfh2rHVJRhq23mfRt5q8zExVwoB26PHqxPBLi25UFaHwbRy3u8TSWQmm",
  "key32": "3ouHfLpfKjVTPCkthpAyTEGaz445i2atRD73JCvcrRQaHtYGCNMd1XQUTQf31ZLhG4ctm4JBihZxxnUD6vtNoTk6",
  "key33": "SGjVLieiD5bexGfzwQSkZtS1gvJ8upbnjU94QtcikMmXW8eHX7tkVkQsomGugASdDSG28GMKuoJV8Dsn4W9JqNC"
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
