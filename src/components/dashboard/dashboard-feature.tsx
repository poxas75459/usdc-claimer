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
    "4Tuopfp91sFfCfA2prjEqsphucNL3jb759YkkDdosoJRjSZTAnETjqPP9pNq6JEYxKe1mRCpJb7foNiL1s2wJAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzVKzh8MWZPoGKH66yFhAvV1rKY2NNCDJCEvwfBFezG8J41WUsiK3EBvE58sq7tMURqaQQ2eCjq8tXTLjtfTDPS",
  "key1": "2fgYhm3UoEVWYZrVimoSHPMV2puKK1iovB8CLje6ot9VotJ7KRctVEH7jy66sS9oh7dMgWEk55EhiUn4mG4wdhUT",
  "key2": "4GDsDemsphytfeA76zNBR9op7hsvoS8kbEBBC7m5EDEadTbmmNTByZYKKNKNh688iQpp16thtRJu4R1uMEJWj6dM",
  "key3": "28aQzEsja9pc6ho8T9Vt8DW1CT4pdaEswkw98QvJ9ftzL6tVnf2Yuz2FmMaBaWqSncRFvdsU6bmTF9d2RXYsgsPP",
  "key4": "5kGuGXPhLmSJ5oeXkiqhpmNBgE2Yi2VKQiyFtR66baKUwNbV667WrejTemsLxWuPehDLvUKdHpi9gxj782gUjjzY",
  "key5": "3bEd91LyCbTaNWRJoGHcAr8qegNRFzNEeS81FiwLTcwykF1o3rWUsNTXg3cdEPdFtUNSHLnHqwDeeWsS4BwK6DNs",
  "key6": "3rL4NSq1M9Zf54LtxiNL3vdoPummYQ3eZdc75PLD5j7gVBfiSef86eQWaJ99XMSWX5voMhWwb3KAnW1ErH1DHbP2",
  "key7": "v2xJPURPHBrqfyk2m9N22xu3qaoKFsiF5Z9LEDTXpZGsQhPQoGyPVx4hmV2FRjV2ZeeVo9ucbTxpHKru7cEyJYJ",
  "key8": "4QwPg9qokveGzTE1ftZN9pA3ZZN8BMaSFwrg68yMMYk9NPDx7fLvUSWFs7hioAgAsgGmVWQz7LzcJdmnJaWYNeVh",
  "key9": "4YpkCj3MtNdS4popE7F7WUY13ZkNZ8UFXKMhCPPKKWcSdAtgCVStHGQKkRCEGJTUeyVPQ5gV4whxSoEajLwo1HKg",
  "key10": "5VgFEi6gFa7xBKyHb3RU4XR6GVDCJZU5A4eNSdb4qPL66sGxJex4Dqf4wqrkHd9fKjvmsErjNSu4b9gqJ8ymxNBP",
  "key11": "4jhZTDuyNUgSKhXBBJx5cmHJhZCsY2xpbHz9pu3Yf3nT6TmngK48e6inV3xqaJ6Zbeq9h33vx8vcgfALQY4wtmV9",
  "key12": "4fh8DFpmTQh2HDbKridquYwQ4MxWYWxtQHSBpVPAhvFYa33uTAR6NJFtouQd1abSJREBckdBkA3FsqCmiVku2Qxa",
  "key13": "3qg6Ysw1HBjkitDJWNKTiDtxDePQcRzUMWGgySsXvpeMvLd2jHaUaQxz1SzJ7jbdkw1UuhjU74WSrChEp9nd9dwy",
  "key14": "5uaCkHa139WpYxtjwL3HfV2XgnuKyxbqGauvVTDRK7CNwyyksaDZt3ye2pEo6epmGtMxgh2PhLyXS5fjJSMVzwpL",
  "key15": "2k8T3UeFwGJz46aoBWtC7ZYFxH7VFfKTq8MFZ4Fod55ME3WMScKX3yT8J9QmeUpVbNk9Ym6JHzhuGTMLVjbCjLKu",
  "key16": "2M5U2iby27d3139C7mxaiMQNQLwfuJmn83EA8iMrhJsbFUh116NmowVA2k3NWHjNMTZXg3uW82YLkS4hEr3uGEna",
  "key17": "4LG4AS1LuixC2HpdjUHegPsUToMF4CYodPDuxwmKV8Deinm8djvkcEg9i69m3DVyUD4vVUy2TuaLVx3FCrorUDdB",
  "key18": "5sbPMPebSRoWfzfi8H6of61PAFmK1Ld6UAHgD9Ea5TB25XbsAQpKrtHH7dgxTRQqHxPsZvsLQe4q7h9AqPEDJPqf",
  "key19": "67hp3Dfa2emccRdDdz4xnr6L7LRATHm77Wjacm3Q54j9zwnZ8EX2yBMFKdi4Gv3L8gJdVZP4UNcvT5w7dE1oYiLg",
  "key20": "5CASoayLVFDn6Aj6wRBAysZu3MzxtcoyHcLzkqKcFuFR2wEGHPLrWgfB639Hu4qXXSxhQKidVqU3KaVKCpbPYgTY",
  "key21": "5n2WPxbcVK3akK173pSHzHoKRt1aUNUeYi4WDe5Vn2kfexbuoSfgayVR81wDmknnPeQxwegAVNRm86kmEE2WfMSt",
  "key22": "3hztbKMiAsqBpfQHwZeEmrvsHvCqSjSrAKAGQH2kTQnrBsTASW45z5WqQGyi4oPDxe8ikWbZmitT8PRHnPuNxzKb",
  "key23": "2ThXUD9ATSGf2ePfwzNHmqSZQ8ZKojEGineXAP5JtGXNMnSD8R963hvVXoUVJfh9Tx3B9FfUBjgT31em2ofzJfko",
  "key24": "5cbCSkAqzA9ZTgEgNUU4s4mqhSCQ5YC9s83g3WWKPEVjQCBCMnuBzeBYH8G82iLtJiMZV4XqZYdzShEEmbGLrdBh",
  "key25": "3fby7UiqZCT2tTg1SaLSjpgbxSGwupLkwTW6byj8ZV5faPsE3c4v1JgnmUKHVhM8TuWwSA4vg1VgvmqxszW2e45N"
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
