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
    "4AnodRHfniXfpnS1YTdZefBfbtLZugQXWYBy8oPzs2m6NqiZgfe1CiZyq6oJ8KTqAzLmsmNNeWDMP9V4ky4WGjd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nEEWVXy37cFwxGTJok7MMjW7SicLhsdUjVKnjkqtox6UsTAHUu1Cvwb5crMFFfgRXiRd3HikhoTmkMxrP55fEp",
  "key1": "5CkGpe2tx13bYhktoaXvpGJAZRLWrdvQSYomhG1RgHQUBbNL8oFKPuq9sTWcu9YwGj8yHdXY769A3pcCAE414uWy",
  "key2": "5TA2tPRZBjxAQS82ZSS7EBdd6Eom4MikSTHcbW4CLMte1SoEPvRSJ3ZjPUKGERW1t2kMMootJHYEaDggWJJmnNuM",
  "key3": "5FtWJx6r9zHNLxWRAghgH9mLoERkG6wYT9PFnEk3YdwbymZaVZoaLtSkU22J49tGjzTsvcUCqgfbAsBNcJEaB4rc",
  "key4": "3nP4eqV7xczqwA4rnL4bDNfN2psggYm2LQ7tPrV4uzm3aCgcHFTPz5VwpmYGrPggvuU8w4qrJhYUV4qcBzB2rnq1",
  "key5": "UXGq1fvSj18CGqnXdHe4Thgw7A2p5WbtdZPaDU6N4cvrc9Ga5VAuRKCzrM3Rh74ybzuK5cCgd29JV3tDVLocRXZ",
  "key6": "2ptEpABkXCJ1PvDXMvrXtuMGTooPDX2796UVbJHPeybPHXcqXbo1ViTiRWcoVtzvvhwdj9co1kAUGe3vPzJLcTP2",
  "key7": "5JinypmHRCA4z6QxziQeb3XFo3Ntr2outD1XayuKVUNEBFfoa8XaL9QV9bx9YLj4VPhvwXZUnuwndFETkKq7QU9e",
  "key8": "3B8d8vAAU5dfmDsMfMiQBtY7UWKbdwcR1K5rzYSXdq8odaRwsnMa5oXSHPLDvxMaN4ofWEUDWmDFazpHe4xqnrw3",
  "key9": "3DGGbvcFyUfAMFsbm4hwYiaxSH7DCNwvfG1pfDLh8t5tXm6VxcTfmuk2Dx2toN9A8Q84p4B18gM3AabC2NKaGSm",
  "key10": "iKts4nX6VKWapTFGtc3mrWZUAfJMyD8J2j2zR4o534RyftCiemued3nDUaXY3xKLgcTh1puqp455kxL1Nqkvhto",
  "key11": "3s87GEiiXToZ3CTMqDUDfixBuPRjBWqzyAT1MqRakEV1pxxfojnuA1KDsKFG7FjZKYdvxFYhVACEQgT18mkGVsZe",
  "key12": "Du99GFqFuTU8bnJCM6ABefpgt8VnYwQyBUmoH616F1h4c4NzQ157KSx4sFZKxbCyupZSnAbzAb1gEen4GXdqy8c",
  "key13": "2Kfwdw4dj7Y62f21daVpexW9CBd9SVSKnttmCxvTQhB6mdC2AuaLjnMDZmGx49rGa2jFy29UfWFuEwzNuiVQPg7R",
  "key14": "35F4PFesbSMos8hW2DCdmahnzW9PV7Kd8pxegBVRbefxASDUEx4YA1WG44GivYTmVyjnsT2UVKP6yCLTpGGmKRSg",
  "key15": "27sqh96pzfUjLw4NB1FxW9gWattmPPhzZ3xgvSmBbWrF3JwSMpDwo2K2LqPsqYFkqtUpy89sndAPzj7kQuQ71hbH",
  "key16": "prBqsJmqMJy7qTvUhFpbFTzx2kqL1m71vP1uRwtgiMLxBAPBVmyKjdwwt2QoTP6ZgKhv6qdPRabBMhRAjxrmPbA",
  "key17": "3kc4Ln4u985X7ecsxYgNUVVEAJuYMW4yYQukJtqzofowBM8jT48v4fyap4QgQBhJtcKEANrAR4f9SaeUvvTj9SF4",
  "key18": "4MutZCnZhkiaNfrU4whBM2oLAXzhUVeafkc7PbYBtAjADUbJy2QkYCfoTcRHjaiSG3zWCYeFGrtQKbFhrbrRgQaM",
  "key19": "qmRwmVtMtsocJeQjNSNxWW1WYN4dSPBqvYbgTMYZhXGqEDyJSoUVSYCMuidxTNwpRYsbiidGzH6JhkY2UFMLVK5",
  "key20": "2KpYQXYnRT5mxaSAgB8CLEp9f7yMaNp3v1vr3WtegFWm7Yg39D5jZyZ5uFgapYJxDqEmQ1NJuomajbpfHY8EqioG",
  "key21": "2WdKyx4FmdhGDLLGXMwdEWpT2SrEeAHFbAFyKtE4NiPq9gnPoeAz61a7jVP21eZShUhzAzZQDY3dafYdkvTvTXxu",
  "key22": "634emxNW159XFJyM7Yyx3WLmfp4L3XNj3DjKWoXZqqBFAPqLehbGxFpQboEPEvZeNqTDmvxUra8hhPkAfb3Wy3ZP",
  "key23": "dD5RwRLQxwqhhvGi7Eq9usdmrhfC2nJuDVAWYP9qqcwHNJV2yHjtTGVQvwWAcetcuaCDk6k3tYU4ukodKgf82QK",
  "key24": "LEmyoDbYoQkwVaQURBvPD4kfPx6TBjDZXos2Ery4DuwgTGZY95PDNYpV3KFdUDC1GJZbPbvwgtGsbim2CbNZiN6",
  "key25": "5AEanwYJXZCjXB11dDi42HN4jBBrv195hnMDv2ewG55ooHgmfGkhu1xe9R9E8tXRUaZxbkAzJXNm7YUMnRXGbTYy",
  "key26": "EhDeD89R6sEp5KUR5YLhRvKdVbRPKrPuyc3h6dzCSNBL7EDaxa28xf1bSjDAdhvWHmcKKFTVJda2izkTq8yFveg"
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
