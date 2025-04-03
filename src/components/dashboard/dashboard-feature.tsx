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
    "58hhEZKwatABVLxKVj2pJUnKiBeias6GYkZNFCs3fcxvCHpBSB4eH2pSwShRXvktddRdcAoXivfTxSnMVY71qzGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNjcjkF9n9SELVUpzvgNtqWU1KUpUuvKxTdXiC6nF8G6yRyoNQ3jp6kCqXAGxPXXpPmqUG5V47tYy9sdGGecDdJ",
  "key1": "ZNa68JKGodteGKQSGJYXEsNEWh6mKFzJztSLWfsdJxEQvvRmT7YJN78hTt89JqL8ZTghdxTPfxDbAKte5RkuA3X",
  "key2": "23mCd6Vi4fHJC7yNByKrdgSme6o1re9Gcs5Doq8EsxAvYoGGsU7gGmzHqrVaP12qjsyXpUvvMfcXfrSaRsgAN1rU",
  "key3": "52RmuJU1XJZNf6YLrfQcUpBiVhJLALiQT5hQUCiGzMvM4e79Eua1jveJWrqztAyZ6qZ9CEzsmVch952xEq3FY2oZ",
  "key4": "33UeB17WiiQchdNDvLKkMnWX866fjgU2dyhL91JFvzDUbqLFB33qBzDg4zYacwyZakLHKeuNTA7TjarcUuRExXUx",
  "key5": "29zWGe2hJ5b1maMXbs5kS37Hyooc6BFc6Got1E3xWXTA22ovW6Vn2EgSgeAmTyZf3PRWReBQP8ow3h1C2VroKMR1",
  "key6": "67iq53WXp1ZyX2CqTUcjknSoYb9rHhyTci9QiVaMTH8Tym367x8n8g6ZTLSKQncSqDkKob2mo2gGgj8au6CKvRjG",
  "key7": "5PwsL3vhcPgLirBw97v4fvBACRyEajggCDdpg7K86s1LaTWqoHF8KcWZJDtZZaQviEMG82setT2JaYPYtHu3osCc",
  "key8": "5kNJyG16BXXgv5uUTbLxJgoMceAFsKjtLQ6KJHu9Wku9PiPkpy3WxB5rT6xHNkhnsZTYe2ydr8opN1QtMWmm85rF",
  "key9": "2LE391SCoDZePmMG81yHo3bkx9TgSmPRG5mbH7LtTwJHsc4asYHPsTeTgtjXANExHtW6m56MC85bjLw1wmmUSUKg",
  "key10": "2pjrabmTRuBk1Nj4r41YqrYVcAr2pPsdVoeqSC4zQ4v1WrpmzvJQK73ngzB3JhHvHwMYwLexaX7Habw2wqpfrB11",
  "key11": "39wnXBEEZR2WUVN6BSJdhWcKUfQLGjxe6JaHo2Duc1AW2v4R78TWS5EqgBUFx2a9t6iG47hX6vaeXvUfQe7NNvwT",
  "key12": "4ZLH3W37a3SkDpuccyGKoYePvyxoU6myps3P4Hys5p1PeCQ2m3v6XuhDDyRHZxKQW6TQSNHq9UNANH2McVMKZ3R",
  "key13": "2LZe3R8cxa3sZqMsN2nJVmA2f6EYY4iU3qFpwiEtY5ZZUbWct45AyYMW7DT3BxTw6JpqZ9ZKFjUtsQM4CfSHJD26",
  "key14": "3VJPCTepoMFbnxUwxiBWFXsf2nNL1M5PauWBHB5CqX2nmeeNKS6NH25pHtRSJmJ7CBPCRiqe4yuQ2BxUa9o5ZA2c",
  "key15": "2TJEtJ4V7qwn72RPf4E2Sn8DFGmv2TZAhEZdkkthvzUztiirnFpshCH4mXV6VNQ8DmWLScA9BqYPFK5XUbLzcmJB",
  "key16": "7vDZxV8MKa2YNjN5qCShKn7J2YoMoeYdt72u4U6KX9zqmGipe7ECQzLrMbrxS1PdpveRoikutNzDav41tghjam3",
  "key17": "4mYaYhot3gNx2MJpP6B3URu6XeVEik7XmsUGG1jz9TwLWeXjfZk8TgXYakjEn1MLXYyJoRvj9qfUqdjgA6cYESRb",
  "key18": "52xggfF2iCVGERfGRLBqTv4qp12fMWhm7GktcNtH4RGKyuU54k1f8zmVBAUo72FvcogYy26JxQ18K9kVv5xG8sUr",
  "key19": "tQ6S4zEWD3hCYT42zitousS6dcULyCHyeVNXskZtnD9bzFyoDi63HHVfo5aGFi6X8v9zj6TFjdcNQrmjXJayDKa",
  "key20": "5kvbxguzp93BEuQKQXoymW5vrd5vxvuwzFWqSLKRmrFTHdaQdxvroYHVEtEQX5RWckN58HDwoNsuLnhUkmMW6cUf",
  "key21": "3Pep919b9UhEjLPbgcsVxCQtEEKw77C972WwoCD47dPTEqHD8NZ4soaB3PoWi8pdcX4Mj7T9DVyjpLDfCvGURw6b",
  "key22": "4ofhbNAKDwLZvhjgM7ionV1LPefpePouph1FELhg3SQZ4okPgZBHPWvBCTrjQT3LAhWoYYtMLRmvwX7QkaLZWLAW",
  "key23": "4X4pHgCBHj4EwUjZe8Hv33VQGBJafqGx9kbhVdYzZweAfRCEnepcEnaN8jutXraqNKxJmtHeDSd4WL5GPooe2Tcr",
  "key24": "5Bp2h554FMi4J1PBfVumNJrGHyjkEdj71JGMRqmL4QpDXuv6Vt9kfAYsfvSWfobkPnN7r2bHMy4Kg95Md7gHrGTP",
  "key25": "5vwvGLq6bp2Jg9Ay2Lm1NzejdYkzPcEubb2616RoQBvdynqVdyQYnRmM7S8DCFg98UTzZgd4CERseCTsuwLEsX6W",
  "key26": "56qbj8VMuhrmi5UruL34AozUQdnpVRyAyPvPbcDHTzuA81s8m6qttjpQ2Qxh8oWazeJce5oGtgK4dMWLzmzzXGWW",
  "key27": "5ZsZiGPGq1uc57jUUSoU26nD21dkFaoBhfKAgWyczaMxg8LtXWihbZFkdLoRWSwseEZyMTN5owep1AEnD64WTLmY",
  "key28": "4p1VxRawVE7UrFjgd3eJU6vxkAzQTFB2A6SJnpzUp97t7uvirPvptrd9gSVVgAUfjcFJ7m4A4fiLmJ6NzUCpkV5N",
  "key29": "REWoR5Tw9GkxzjDVWRLySgQbZdK1dXEEcd764VFaQZhp7aiFSkuiw4bh4Dt6dvv7i7qR6XwUck5HjwdL2Zr6KSJ",
  "key30": "979SQVbvKFVhF7J6H5crZhzFocK7GdV6AP56pTvNEH8hUdL2v5E1Vz3m8uGzsSeJwgBvY8hbbj3tqwPqhH5Brd7",
  "key31": "Vea9Zq4ktDK67KE4deyBx2z7i789PW4PMbdWPfjHg8bQd7orXtoykWktWKVNfL7c3YUCofccXjJHYWQNRNeC9ke",
  "key32": "4icmPiczZ4J8sKso1SjWwUfhhaZ917hUQJfqWTk22McyszmW3zMWKnTjp6ZHLSfXsFukfwAGhVrZC8q8WBApFDBH",
  "key33": "2kWihZKKqoqtMPDfzcHgeGH2JgKBZ3DjrBNyokcM7GjpcjgTGRNCGht7N1km79YJoznsMWeDTpctGHMkKm2gBC6Z"
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
