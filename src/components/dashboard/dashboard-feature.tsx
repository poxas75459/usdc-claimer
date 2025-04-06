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
    "3AwYytnqwtihhdFxQs4Y6PTcrvfL7d1QKqbZPEQNWc1iZw3DYun1qorGHG46T9uejtejRY9cFW3rSF7jhVZbL5WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1BBJMkRDLmUxjtTKGxUQrC8gutvd8c25MWc3ySdWP75dHrhYjCbbrZ8bLafPk84W5rywGzjHAbMbHbk83sEgXf",
  "key1": "2Lbw3cU6gF14fi3z4gnXFzwLsgaRrQisLFwmv6H315qP9JnzP2nyEknke1mFcesuF23hHas8SoP7nYSGQavSi3GF",
  "key2": "5RpW69zYDyMMsu59eqYMoYuNCedXkJcsNEwe9i254PkBxNoMMe1ymbsaG1rwdN33Rq7HJNwrCGNaquB6eP1dbpUb",
  "key3": "4cjArqoNjfCPAWfyE7kd97f8Rgce5BjNzfRYczZQRKp1fZ5rpsFsWDzo52zSJTv82ixFusgVqNiZvGVVmgi2reMe",
  "key4": "3GWz4pG84FsQsy1qp1eQMUBK2y7RUwRmkauZNe4oMVwdLzaC5dYu1Az8rvc7QKidTAT3YLSPF5B8wVexatGz7RRt",
  "key5": "5VJF2ncG4chMYjAZ9vRtMRQhBAsQw192q4UkeFCrPAGHod5QgSTa1pa5N6GM4h1QbesyVDfTiNPQqmRdK8PczHGF",
  "key6": "39wd8r8yqDU28tQvn7aEPc7VnqQwZjx3TEW7oKX5DpELPWRycxVoYgEeaNXymDvCkCsS3wm7AhSrvZ7jbPNZCbf1",
  "key7": "5LrMxBo5VagqyzkFMDzmDKW2ULDskATBiAM7AE1SpMyChKb6vu9hj6yxpQLHd8avv6eURoy52DRPhhp1SDU49o5d",
  "key8": "4AxQX1ahxDCuav6zuxartnDnFRaP7xKwqH75vizELPXWiADevFuP5DXRBSStr5nbgzF9k5xCc9cQSQbc5xWYJJZd",
  "key9": "4RbHUa5S6nGsg4xzFjGqbT3zGcjGnQqsJf8CdVBSS7f2QfJ4UBa4wx9TG4Ns6NTXgeiBHe7BWRRqZ7W53b4HJoBp",
  "key10": "292wTHVJuwyXek4yWwGFdkEmK624X3EgAWQQjusX5iYasZw3ociGSykKnPggLgLAnUDAVo8UAF2uFpAesVs9Zdxm",
  "key11": "DbmEXV1Sk8mvLFy6JJ77obRd8dnNuSrgN2DPCht5VKCbcWv8qRCUbhKSEZscrcLA48HTDyqhW6JtfizYpSbmsDX",
  "key12": "5xEsfxGYvMzWp95bShMDPnUz4ZLMkfiSs9HCPvXrWB6wa1romWRPtWR2eXAQgHRWCbgTHyDDMV5LmrVkbxi5BX5z",
  "key13": "56vRmj7TTzQi23PjXB5yzTG5njE7HTPKECw1YF28gVd52xqeT7acL7BqEvarhYQjqU7enAn2veVSETLFbdGpQa39",
  "key14": "4BjP7DTm4if9eb8kSAimDj4WYvnA5F8yvuvssgZsqMRp8qPxd7cqc8oMcLi4uuXeK5BGQkUoc4ND8j2cxp69K5wf",
  "key15": "hxmWT6368s2tqS1XcT9crAAN8X7aw9kjk16mjeeYncV568v1N44gR7wMsJfSj6odxKXjDrSdnFCXzNkkUw43xqJ",
  "key16": "2m1PHd3omDvP5RsDRaAwDxjr8tJwWbi7722mQFhuom3P51eidpHzeqRnXrcpMmP6BKCyr2r1xwmeqAVQfyQADLR1",
  "key17": "2Eu4oYzwNb6NZwVPFLDAsg3BivNe6GLmPviG9bCb8QKCP8VWq9vauqhfFn6f6MsumT8asiW3h7ejUViYkACRmxD1",
  "key18": "5ox8ud16Npm3RQwWA4kdAW2mUuRCbrjVKHgsKKE9oR8mHZLQAjYcabxTg9tDuWA6C8udYn3TnSBSQvrf9ej5DwNi",
  "key19": "5kyy6LQpC6WQhyMePbZmkxeeSxmCRq1xVkSSjkTmdsS9ugWW1s5DEhGpE5JM5yLKxhvcVuehEk7ijGSpfPi1S7WM",
  "key20": "45rgs3DNzaniRdosCkPDbeJTCWzrmgLjEVu6PzMTDZp23qDDE1kBevrKEkPiZ2d5iJTLWMpMBLzRkgvezULRuERW",
  "key21": "z3K645DdczzTrR3rfaaATNFTRm2bnSkieQEqCoSJ8CN9eqTxVEsthqdq9ZF6D83cobfRHHBTPeUjVbuG8eZ8uZ3",
  "key22": "2yB9MyHDJLHpeWL5qnbxTHY75H3KxvSzmXMrmUL3Uh2XhtY9s3YaqxKxtQJ5NUXH6Nuy7LxcdmaA3UAcdABdbydQ",
  "key23": "4gdR4e5xJHAQdopXr9jtG5SsBLa3GdwBZoXDq4wf3oyHfFSvqrVMoJLuAkdHK4b5qz43hWLWqfVRaVgW4SdYS3GY",
  "key24": "gxumLLAgVeiu5DUAUDUkqRPEoJnG86124pdGrZFXb9DZRRMJsborEjeSzHALtvxEwgXKjoTNXATbjXFxXoU6WCL",
  "key25": "4VjNpt9wg1CApNQVLiJ5ii2w5vpNJmyH7aeCczFBgMrFioN4hyxKj7gBBrVo2powfSm8J8FXN6TKinzStarx7UuW",
  "key26": "2VMyWGrNg7ySWMntLnjrKMQQ6YjTfW7xXXm1atU2s4L6MNzRMnsS2obNjzw1GiGfXgsdUV5SXJMyrdbQbBsa4BkF",
  "key27": "3bqNM4FJApQ7oEQhLd8NTfaFXSSptQGEQYM9gAXmbzJGU1BauJjKq1WhUtWBWZBpGoNqcynVEAkXijFBLbuN91mh",
  "key28": "546V2tFfpF1kq9Ce6scGyeUK9hqJZtDbebB6W1PiBBaDWsu5ZvPon9rs9Qown36BUEgBfKNTTJEW6PRUpYpbQF16",
  "key29": "3Nuqu1r7n57c1tqqbS8Sc7J2d1kkDKNP6isDBd9NLK8y7uAgH1vVZpL8VUEVAnzq6zZh9ZSMNB3Uv7dhK5RAxcRT",
  "key30": "e5nkgn3Ec76GWMibfHuu1y23EofzumirJdyFQybC8aY3uBUfHs1YZGuYgoWNPwQwMLWLmHwuNDZ9EHTsT8dqHDb",
  "key31": "5MDiBiuRb8nC2zLJP8LvuMVYsC1CX2G8WCcCSQG9R3rgCSVFcQYmekZ5zZ66k7LPfDcZwK67BBTSBpN5w5iVkrzF",
  "key32": "AjGt1sLjtXEhyCgXPoDLyJtqfaNcKfvetKzZLXUicnvNcXXQY9UAJ2bqPY4MsZHQpxeoNEqd6WzUz27HrujLYQg"
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
