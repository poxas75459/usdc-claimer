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
    "3AU8bQeiMecRTwDKkG4VJGbivMjML7QuwoHBUGJwK342eMX3gVmbirvGtH1L9NiPrx5k3T82xvvBe1KyvYb1grU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQRu3Z8hk1LC6cckattUtd89yoQvnBWxqqNhHh2WbjiG1sVnzJMUPJcut3q7ca1Squ5QG1GV3sznLXSroon8PYX",
  "key1": "3zH15Pypi6ho8Fv65qPnQnFLRL36unkWWoacYKD4uiBs5F7FNL9TdGvQYok6N8F9tAxPuRksPhnhmRbnVR1hQt3c",
  "key2": "3HJyRosEqqX5R8t5b8YwE6VZaK5n2YuQdJ79wrCQ7SvL9Pq4HUnWXN9bkYkAJP6VVukD34vtUJGZjfbsjUCkWK2Q",
  "key3": "49XDxr1myDLSN9zNbHzeKnig76bJs3BrBARD96kcGb5yhkvUepKwaC9aNHvFvbScVJyAgM7skV15QPaJzjozUskJ",
  "key4": "261mAP1WQCbz4Wt3em9x8fhGZkbNnDhafTpHxu1AVKTJrC6NAujDoXiB2XD4S65CYe1x4o6yeWVJiqMUk9M1NYMk",
  "key5": "95JkYKkrMvPBFvkTgQU8JZayhaXSQnULuoGrCu25R7fFzkt8GjLNEtExMSDCvCsCHXisu51NvALu4oGXpqD55K3",
  "key6": "P9KDoA5f2JQvRwy411VqaBxxuafEDkgT5aK4Duv4YDN7kpskEnjQA2ywhujxDjoTLkZ4CbQagW335T1pQqs5LRv",
  "key7": "238kL5ZCGf3HdCZMZmoUjVLZ6LSRK9CTxVFBEuqG148zievQunPwHNCLhPje7YHj25ALEUNwgGZqKgTGZdzWGcGw",
  "key8": "4zZpf4TSX1zdL4vgoxUQFUp1KMLANC25MfG4AduGEFyZVsRgg4HCZA2SCpY1ET5r69sxzjyhT9rw3tdsgvrKg74L",
  "key9": "3povcfvt5CDztyhLvwbAgcFBJ2Se2KMYU6NM5HTd7ZexkqrD116bHqNqJN8ei9YDfPxogqEwptRRRLmv3TDMgGPn",
  "key10": "5Zmb3rfXnxP21a3BT3c4gWu3mkXvDsszqNCPz5MQGk2zri28jM3T5Gg1RHkSY7Q9atLPKEKjSC7PmXrQDB79sS66",
  "key11": "66Htwntn9K7KFAAjoUC9G7vnDSgxHbnNVcBotddWyH6qdxVEZwHZtzn5pNKwFtadrq9U66C24r3nbfZW8MQBpV3o",
  "key12": "3ypJ3PPhmXuauMmtdoF2kuufFi3KthJ54kdPkZLLfHuqC2xN44RfkRw7ZwCRXvxx3r82MiMCyUmkKa1LPeyGMRkZ",
  "key13": "5hM2CJXHtZJC7GSkmkJRsoVAYp5THkiwbr8uJQx8Macbr78v3YCJdNtLFqtvSV89cEY81FMjw4Nn115FuEsQwVHz",
  "key14": "vAD1DmXcL8gu39tpEooULohfRNi67BEo84sKvGqoj183ju9SG7PMxFe3D2f3W7MxGn5W3EFM1wZrTKe4Xa2Ys69",
  "key15": "2zDkCuAcrdKHKjhZv4c3VmLALCLAahdjknq2U3Yy4vaKML69jx57QoSieuUwX9oTh3iPg6VbfL3KB5YRe1MK83Nx",
  "key16": "5ge5rrLmVeyZRmcKPAWzHtBS5CXQXmR73wcJ6Ku5hW7d61bLJLd1tXDpQ5VLVzE2muymDp5SQ3ehZL7pEH8kg6f9",
  "key17": "VLnsegxtKXJmYiugQd9SyGtwwbjU4fovW9UTV9UAbETT2vyxy9fDRbuamWohCcFKKHCJaSVDgHcxTCcWoQnrUDC",
  "key18": "2az36gShNHC9YQa9cen4cTyS84kcXejNS2Po5dEpfo5sXPhEWkcYEN28z69N5Dg8JzfeNiXjTj8C4LLkEzdKE5Fh",
  "key19": "5JeMna8Pv7QC8ZxFzBqwMEEz2SnkpAerEb88SDNEha4x8HruhaSCgrL9h3N7SXxDsxQQXxh8wf7LQM1VyxLNBTaE",
  "key20": "2G3cJQuUAsTPeR6WWLuuGjrtTcYm5fcxRWFymb8rxeXiFpnWPRkUUJr4oAWLRM1ndLAjwFkKorazcNKmqxuqK9Zp",
  "key21": "2wVzyrj656dX7KYmLoQDNtdsQewLkY3Fh7PQ7ry8xELmMKN9upneapQWLMmNHeSVL8XzTaAM9VkWbt6M6wHfAgyj",
  "key22": "3UvMQp8XqKskaaqa1DrXd9CB3sCyq7R3e6iFYDdAqBaQugcUMNKqp2eGnCtisCA1ycfKRBr1rXge6cwejrqKg5q5",
  "key23": "4P9RrkJoWTse4SDRzU2dJbbVkHqtnrXSr8ASP3q9PPaQQ2Zzq64V1MvLLyvtj1MXnS9wpnLzseFtci5vxAViT2Hw",
  "key24": "Da5mUnGqmSRbHoCSxrxaDJk7tMyfhJgurYwrCcsnRiwuY9osLhX9u8fQn9qhjzPsVzsXGPYeJgyeXuLo7AQWofP",
  "key25": "37Aid3dH1PcXFhQfxC3M3UvEYVGxGjzWrCesXYpzskB1hUz5Ec9GpaHf63eLAbpaKkrtLKuvJshrs1MbHuBeDbi9",
  "key26": "5jzN4TtZLuWfJ89eur864b45Rnk54VVnjbDPCPJvDghWAfsjSVpqhFibebewQa56Anhup2wnYGtRDXzABGubFYoo",
  "key27": "41iULQy7Hv4R2Lm2r2CfVGCRuH8zu7bHCcUJDUKocCKWX4U61S7jQCBHhEdiseZyFrkrJbcFoQ6U8WwH3cnrLPaY",
  "key28": "4NETWFx3Cats54o1SPXmriAmphAGbnJc4QPYnrZFtFuGGENYMn5MfF9DPQbQ6dpS6cH1Yq8P1XNuecEkz1qziv1y",
  "key29": "5eCA9GPnPYMK2ziyQtfbMBMygqPPF9oaezhx2P3nKsNJgN3wH1qvbAXgSDKTJdg3M1EHfXsyDRJR3agzJUoFzumS",
  "key30": "3eZiKQaKAT5wtxroDPZpssakQie6TRJz6prQqV25x3GtpVUGSh8McS46FMFM8riURSi34kNAz7dm6VxDom8a4etR",
  "key31": "3LgQBFwt6TjFsBopSGkriDcAYF5JnYAheRnd1h5E7N6q61BaEW5SLK5MCfhdRSc3Wf3PUCjMtHukHoBNS2EJjstL",
  "key32": "2zv7LoMEFWPaGHaVKyDapwc3wNQMbFujjCnDftAfGdRW7P2np9qj64UFTBZvWvdfowgC8UyJTrCKDqaPE7xLu8W8",
  "key33": "Wwfcj3U9WHMufwncgTVWmaX7E1WFbfAvNkKPkdvW9sHnybaMtCDu1naPaH12mZ6YWrvyWF2jbnSCKk9pG54mdwR",
  "key34": "5VLauSnWC19k3qKkRbfq6YCGJDC4yN2VstZHCziDW35bh9PZ17NtsgVofCAzKWxHLVUbQU7MqVKb2PVV72aoze6Q",
  "key35": "53p8N6TgievJ442B8YV6sq55YafHrk3cL3EBt9xbv44ECndsbeEehGskBV2V4MhTa6qDzLTzYUBGQn5E7CDaWuyB",
  "key36": "2FbA43dMepJNz1Gz1fAeTHqrvKiJ8UZBSSizjaoQy4gA5nWEDBMrgsKkJ1SdUfufoYJ39hZbqxwE9NFPjDLNyqcv",
  "key37": "3Daz2B5nVfdFxwNmCorPn6H4s2i3mJBYsDCspJikNbSrkZJqF7uELSWiNhm2FYHyQggGHq5zBCwNzBcVWCu9ZmWd",
  "key38": "216WwvmwprTyysKpra2iGorBH3JLMxFBoBP16iwUEC6XVE88ibUsezm8kgAqR2Bk6MyK7eh7hpu5QuiMJHaMFk7c",
  "key39": "ypBhqt9t66iAkYF8YBd8f3RzVCgKsgb6tgqcuPLmPi2sLrTfpr8M6xSXQKrprv2KJhZVurk9KhYjre4aujgqZSA",
  "key40": "4i5DoJAicWvt8wKfwbW7KQnvMiAp1hEUffx2nPxCJWraNiVEf1F5LNNCdJHB49ZvutnshQyYnUGtFXfWRkmieXFb",
  "key41": "2h1fWRE8zWdRRgZ3sPoUcW1ossHd279v5yC8XwHCD9h99Y1kLgbF7rGa2E9PRG1ReW9qN6YxvfCPEn6GCd6JWHXn",
  "key42": "zuTwiotzX4Kkjkyqt4NqzLQQCts2QV34tgGp6KD1pv9xWEKkGirRwVb3HhsUePD6jTF4F2YHCL2BNQp5RXAD4Vp",
  "key43": "3NwAJzTkqrKjs9Rko1dg4Deb5fZTFkgy313VY9r6dikyrabAVjtnd3EeFmYBqztSurggVQboZxUAB6hBeQaFYKan",
  "key44": "4Yk14uqdFUpSDPJCiDAFWEkMDAY4DXG2tPP8fUMn7m1HKZqtmnKBj9wTsuRDvMPoo1i2cMFetLRVgtMbr6q5t57U",
  "key45": "4ed5HecWygqoudr8VkjgCi6nbxjeKVgPp8BLyoc4zKwR6AmAKkiAftEqCKRRW6xhZcFmLguJEjH9cTTA8oA35Yqk"
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
