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
    "55EMPXhx22jUuNjkGLbh4KnPvd2yDqUhyGAP6bjPXKYqwp4n1teR7bQ5UFQMkyYgGmauyg9bnpb6BXivCe9RvFeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZrVD3EiAW1BaVN4np3tKS9Gq1GULxUkNV3BmHQAABGx5CXAELxt1oB8WLpSPx9dDF2DyhjvpHbWfvPWgaPLo61",
  "key1": "3BedCvHXzPNbz7mE4VXgGsRC1D6XfhS1vmUp9wuPB5oFgur87F1TesWi53jQiZjPUJVgpMdPM5L6PdntESkWqkw5",
  "key2": "26ZeG5bsn5ZoyDkb5eiNosLK1nfF2w1DFEa3SAwJSUYbTyTJwmBsnj2AKcgepuJiZjjMeSE4ktQMaJDHGGMSCYk1",
  "key3": "59QxAnGhXA3wtntXfeVbV5aAey833y2FeAAQovgEm6GXu5FS28fYMeKYhY6cURpZqPsNb5GcTj9TgwXbJrLKboy4",
  "key4": "Hje2UPZzkHD9M3bmorUKSFSKHCVreFPSaaPG2F57np29wf3joWY4oSCrEiR5YPosCRqJK4777i2HSpdCC7AbZN6",
  "key5": "3NhfGnJYkeQLRjqUNX2xqfsx1d8vrNWoFHcgsLxqd1yqwsSyL25jsPrsHduRRB9QZnyaHxyjEkX5wgzyBrpP6XR9",
  "key6": "4Nd1LSSYEGQGALCgWK271boGTgu3m3AN7BMHgHJviqBuSHiBNGzZrcDK3PEVB1nXwXPqFNe8bFtjume7oqR1PcMg",
  "key7": "5243QRYTs1gPVxG7VfyEWemhAk4WQNdQ2ry1uGn5AJxAfzioLrm5HZ1eitPZG3DPguFKeqXNLC1TT75AP5z8MLCh",
  "key8": "2fg8pYkD9CvNHqVSAdo7fVKNWhGgR68YgBiWbEmV9wNpmEB8npy3wJNW9PdvbzarpqXGgteZe1jZymyHQM99br2C",
  "key9": "3WKDgqhBR5Xbd2nuVo81w4hWR23nftqQAhtfFMrQk9yV8ug1HATTL6aV1jENqQSSkD7tukApoEqpG7CZK3JGjDHu",
  "key10": "2E9FirpUSDTv3cfYXQPfg7aSFEusN4i47GHsEtMEWxfNuumCMw2LcJ2UTxYga8VmqEJt6Ut6e5N7R28Hrhpif9BV",
  "key11": "5BqDPUN97SyhcD7mBBzGYfLG869TTD3knrM3aszWxDQFApE5KNLcq9uLWS63mwfFdGeRdpxjWyp2XfnPAg1kAPjT",
  "key12": "cQfSFx6oq35hqqD4D8fDsn7dv7faioCt6AXStNsAXwrtjq3PgShUVRx6ocDr3dNknDgCkKqs5kZRoTFutGEKQFe",
  "key13": "22kXqfZ6Nrn64eFDt4tfdCDdgDXjAQq6gEwGbVXW9MDGdMcPE1he369dMGzA5J6AccpFxRMeGCcZ7ZvPj7AGhhXp",
  "key14": "DhWcE7jRRnRjN6AUpoNE1tPwdWNu5XYUjDsT19cfWnVEYPzMPrrjJBNSQ1jt3CS4hom9gkXwzK2RCcWMZPt4pLi",
  "key15": "48RawUtx2BW8V9t2PCNG9e7txHP8pCF8YyYc3Uemm3kHwBruHgfzUKkyjM7KfA9byKfWhy7dCqRGX5BAsGhEnxWi",
  "key16": "5QDbjmtjJwUWJjLGK7dXgoVFUExCn22iwmFu6keXLGttQiWHK6v6KnVedM9vh1cyjWfXhp5SAMVikZdj75AFhCZY",
  "key17": "5z2ZLpc2PBTZtTkvCnCnNvZSQcPZQeH6qwvpRDktX234jP3Y3fUZteYcKq624cfPkgWPqdQN2WjyRbbG4288UKD7",
  "key18": "4oGE9wpiFENtZGV4QYks4Mc5N1QQNi3xsAUJTaW8FaYnvxwskyKTXoh24zdMW1jtH9FKpXPpfpwQdm9hFcJwQMKd",
  "key19": "8T42DHAguBm3TrF9wMg2tUL5972bYYPMw4oL5aMUuUqWM5eZCR7yB6XYf5u3j9gCYccNGZe7Kfo5kbEUi11Fboj",
  "key20": "4abKjwAyL5VHS6Lh5DzLBzs38YWYHwup1Qj85UZcon9q2v7wxuHudz7aST3vnsz7nirWPAUWzDcx7Xa12U2UbTtx",
  "key21": "3eZCpsxDTCfvx6rpCpGoMXreVbq2QTQPi3zQHjkXmKnWAjgc6niuSFgJT1juxiDHnC9C4i5xmdLACX8XZjPWtXsZ",
  "key22": "5REps9RXZeA3A9pvWFRuucnXakNtYYUSgnP63xXV9LrgMv9ct6VCJmzeUXajKQ5aT9LKbuSptrZWQFR3mCVukfRe",
  "key23": "Gq3w1esWbjrmPDBzxRter73LgTzzqAtFg89rVggobJ19W7MjywEAz8GudtBofSbEmox6Amy6UJ2gGb4pm5wob5S",
  "key24": "3NXYLWwx5q7zuxry2WRHBa1y6TKtz9GQPH71PSYrH6oqy1H5vNq6d44Tu7sRRjr8vE2aRTuqQm8jXsFxXoReAeME",
  "key25": "5AKzyXDh2SQGYurckdzPMLSvhQJPPihbMAPSYooWK17yE3EvqDb7SGDENxdwLUKaAELuefUd73f5F6DHN3N86Qek",
  "key26": "4MYGPLDNuw7PuA6SvLdRf3BxASctKk1xs1T1ur1bajsZu442wpwrZfJzWFup1Pm7zDeAKM5Lk57qwbLrqqmefj3o",
  "key27": "3wMkU1TnE6ecZqL3PEYBotiA7BSRFJv1iFwADYjH737Ya4nTieVoqHYDC9LaES3WE58ofaDYCVhFvRwGysktMyK1"
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
