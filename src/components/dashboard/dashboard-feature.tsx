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
    "dwb1ZKLFXSSEUSqs4UjEMT2po9iNAGsLoyYvVjzVHxQtCCGjeHkorte5tzTW8icA74ZR4dp6VonZvrCmAUrd4wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MN4hagdMPBYNUSJs3fcUf3m3fihambtq9zSmzjow6vD6Bksmz7QDbfz1kbUdri6JPKR5WYrfbhp3yWxikNJszL",
  "key1": "43F799ocddfbGyiFp6dXyw7ooqbFWDsQ6FTB26WEmgzuNrPVkqHqgbmW1F1u7ZutbeesZP6Ex7kF2f4LYi7E7enc",
  "key2": "645tQ14vFSgH2bNpx3DZZAQraRsz1ggS3AwkAKVxs3wwr7bCgnX5JUe3KapRhNpBQUfcut3MWNhbRyEYBGTkdiDk",
  "key3": "5FGoqAbaZwQ9xmQ7VmCXoVJ6TKnGrmwVvnTjByxRbb31ffughGJjfDnKBnj3hiSUCvr3JV7ctKa6V2dqLoF3GkQL",
  "key4": "iTFQzHsy4TgNoz3ZNXwMwWRKswdtvZwCFuUDAUiSyrE1Cr5tjukF1Un8g3ayjA3JRGU4GjfeaFCqd3QTecRVGM9",
  "key5": "2xLa2jKPbSB7iFMWSHvpZqFJxdjZcEhWD2mLXz2Pw6St5yiUocWunkicBUe3BpjAMPwPqN7de1Bxki8wfZHcReet",
  "key6": "mjNDxTsmfKrJEReXLp5TbqgXogkf8EqFNak5LLHC5jR7NGxxGGvZ62yzS2Wat1EUKzSfjmYozSXBQULEX38dy5f",
  "key7": "63tWU2ASJZYk1BCKtZ5Wewp4VdWYc52HUhKV7t4oHHzZJijDJyaCpyG39Gu4CwZ65wEccBjYRAnMredWdb7k2etG",
  "key8": "4BnEo7KWuVvrMPxkhDh7WaVzyQGQ8tTNYVTXpehRcU2JazyXSedMEE74Lwmv36BHiupAdWCnY2bL9BtvKZ1j9odo",
  "key9": "4vm76T2haUxx3S32vYyc1bwtujukAEaQxKRJX3nWKqkTiFvtE1xXQuaEUP6PzK5Uf98pRFB8D4WK5BvdYZdY3GWW",
  "key10": "4kLCvdbMWH9xJHNSoXeJKgLfbGNKuoRG2JzX7QF3MULfySMTgNc3gvXuD4S2dGkk5KmnvpkXjfciz6532oGH7Gw1",
  "key11": "KgbPvRd3dxGXRxGryLj8wke4K9AwcZfNWHSrNDqBHTjHaTGNWjnk7ndWxNcf9ouBg1L4n4B6Gj9NfJDJ4SuUNMk",
  "key12": "4easEH1g34MXBZskxuQBiAuZznRoiQjCuYv5NS9cafUZSQeCXEvXeb6kyjDhsy7UdLrJp3EN6xAbyG9kKzYigELx",
  "key13": "xpdgmtFD5kkKvZqVzzRuAQypyGVzCFyGngzMEw5HSx7hWDJU4hSUo6byszrPt9ZrK7z8kFabAoMgsSAFZDSE9LH",
  "key14": "3UjMHAQntzzMXfm1sHLYiKpWTW31saKyVYE7SnR3ioeEq5aGqdp9nDj62TqWGT1euZdwhBVDbFcwjCta146QACoo",
  "key15": "51SiathszC9CyPyhp5GNRhhmcVVyM9rnUEygczTymidnxctmxFbrQBuWvSJtx5QE57MvWXnLphWqrhW2AA6vM2Jv",
  "key16": "4nCkNinUq1nW3LtYzQiEDQCmpaXcw6RjLHgpt33BehZmBZugnsQVHvHGnKs7Bxc8b1S28RcsWiezKkJzao1Adpaj",
  "key17": "3XmY2EkP3mqnu29degH1LVwQMfa7AQpF6wWuCSjLUX5NafVjAPUGjbbQ2aDXdryzPjKsLTvB4uPJeFEuxb2qFawp",
  "key18": "2G8b9jWpGoMRLQvsiKwSzCfAvXeELAYi8gNY1ds2AJFjYxcSsakAMMVdRXNPj5aKxNkqKG9cHy9hXcgyQE741cPs",
  "key19": "oo6heejB7s3PJLpWmNsgfEVmuMzMdhsfakmeYo19TrMXg7KxAGADpzFvpkspWX296cSve8411egc2B9cgAnDUJx",
  "key20": "4gXPbCjzcm1r2Da4UGdBrCze1nxeEuP2JQkfETfCV5mTYCiT2LEmxXLdxxEq9WVArhrBbChRJDs4qifMNgY83rVi",
  "key21": "4cDuUt18cfyBJbTA6drYJF7Wk1eBvRjsn7jadRNW6BfFJAc2SFvc8u2BAqA2FKN4WjbaEkRmtkaFT7J4En9e5R3S",
  "key22": "4WKdiSRDTA12jPPZZiP8pu6Q7DWGGDyrpTssHphAN29tZZhT2wz6kWYXwuXJhavSg7YhUCfLBbctzkmDY7X6HiiR",
  "key23": "4PfZvaDffQdKTKshAEN6HTNgRRskQEu3J6qKxA9sVua5FmWXt6bAGrd4kgLdpq1YC5M4GCj3mG9L77SDBTUD54TW",
  "key24": "3svkraTDsdQ6yef9iKkqm92pvKW1bYxsC1EojKE8fkdR8fmDJZkxBsH5S7fejQcXJAg9HAoe1JK4huU9uvMLoZDJ",
  "key25": "4HpT6UfXyDBwRtAX6j5rt9dMmiXNVNxWd4qN2t4k5KqyRefhw5chAZ6aKhNiygJE5ucweJqPTuVwtsGa7vaoMHjM",
  "key26": "4CC1kNspK3CsQpzdHd3XFAcSwFDB6yCeMjS2QworXHRs2v37xXqMirmQYTT62MwAALsYmxE3qVeFHXVFHB94ZvR",
  "key27": "5nYjbsh1pVBdfwV1WLHRCGTm4Mbk5R5n8zmnQSUS7xVVwtxbtFB8iZJtYPRGeYFniX8UqrVVLGpb54AFP4DPuEKv",
  "key28": "4E1RTAck2Dz4ZFVTYaktMC1kwzuhLvZAwVL8UNKTdU3VLuGeTL83hSS2UwiE7GHposQLpewVDukFWh94tMjdEdDR",
  "key29": "4AgNoaavTK5qDSBNWCDQbyY7mqn9iMvL3CX9nTHTxhEQeULqHqFudzPM4Ey2Cw6msExV7aVrhREfiU91K5wnZi7L",
  "key30": "57B8CNbZESUDcan2GHoiuEi4kqJ8mLpBB3zfj4DdZwmJHARUwycpiMqAWPrbVjWSb8vza5MS1PtHx8BDLMhu1Pn3",
  "key31": "4UdfN6m9UYmi6s2mhRoVxr6kcPrNnQz5xA2W49c9Msy2JsEYQZA5sUCEkcwWhm52ZMUYR1TXDCPcWovznytpidoA",
  "key32": "52ftzTC8ScFgDyxuE92nwayJtN15STpha2KLRsmVAmeApCHveES1nN7LVSSWRK2Y5XGuJgFaXGqTVKXFY4j5MyQD",
  "key33": "2xE6vARRKMD4QvuqzyrCnbomLezynbow1hW9HCBVe2tdSCxoavQXS5A6p6Ac69cty3eELP8iC9fgQiriKsq53Jgo",
  "key34": "B5p7vE1cZaKE3iDy3sRpyqb4AiXyRoaKMK5vQN3718HGe6rMtQDfPhFtHfSMfip9jDoaHvdYghH3wVbFq13ZVDd",
  "key35": "42LczUV7EH11rGLB8gyX1f9roxeyHs4HEd6sJiGTjSmGR8kGCMTriZ6nnmwqnAbNRFK7LW7mzuejftAtKatUW3vr"
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
