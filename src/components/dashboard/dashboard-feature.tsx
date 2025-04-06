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
    "4cm7XgfqT9ydrwXoF1Auwuk8XbLZahJatRmSXGqT6EA8xga2LwFSAzzGRpZ3EHA669MghG1t6qM4bzhBRu6Lz42Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dTxWmCEtdUuLWJSMjBZx9bsXKbeYuKjgqTggiLhtFgN7Dg95DvPQRPDSYYrWkC6fJvgDik7tyyrpFZhwFcb71Lx",
  "key1": "4sgRDT8d4uJo2PqCZyv5r6cd8KbVdn6fQgmkZiESmVaJERv3MaceqZpjxz73FjdX7u9BcRUwtePPJi9FN2yEquoW",
  "key2": "4MGDrnzEBqho6Pq4UE9nf5QN6WQwix4cUtXmTwdMKXGhbpDRWjEfkZ76KtfMzsqnCxMtvDAk1kKefHxpn6b2BfTZ",
  "key3": "3s68vixPEizeK3mT11a7ag5S9s6SZiWF2U9zEvnGCTGPHPd6N8kRQkQSZadYCHr5zQEz6TZExGjgAfC4fV3c5gN",
  "key4": "2G1gKpvL2L6CqdCjxzZCp377rtymZiowdsyPVXXersgz5NpTzV1m1nxGxJ6sbnApLEyzsj1c3VJotyS6fuJLdq9E",
  "key5": "3eP4WVw344CE4dNE47H5hCsmAmZarVt4y6JqTzrsh7Grd4bFqbeGq6ixGSfhkKd3YPEBid4Ekt2wekNBUijBPtTF",
  "key6": "zRgpr7MJQSPhN3n9G6h3zCa4fkt6xAnAebNG29WyzC4rnuxrk9G4KsyiHPkdHuw3dWenWq7HPBKDAThGmqkDxmL",
  "key7": "3deb8nQzmLBKDNsC5pZUmXNe2CKjxPNjZJXHfQzDxJoZw9J7B3mAb5zMgw18vr9Nzhxj6PVboye2Rz9vSM11138d",
  "key8": "5xfzh2aNce4Zx4Ykr1yYhRwmJiigBDMmyFZ2ztTCCzjM7Pyp9hr2HjcgPjWsyzapqSutS6AymneACNZYDy5Po3Uq",
  "key9": "4bk1ys5mYkU8CLGgLjDcApddfFN76jpDAd1MXB1Mqe621YSLxwNkdY1B9CMmR5gCvoPrDBt3W7NXDFcNeU8JfpUJ",
  "key10": "2DRVD335bD4VjdEYK7eiY3QVdKg7XbSx9Pq3JNHsku4pTG2JzyonVJejH61Q5XtumWtnzKRcpk1ZNgznfQZNJ9P",
  "key11": "2c5C2WD8jaqYPzFpGDTv3F8yuRtouR4scdzG2HAMNYmFoam8pNbteWcFkvieMtRM4E2M48FTyDUQAHEXJnGefgEb",
  "key12": "3fMUxjwhGWE4QX2aJeuKrEfiUSR2Mxp2aZrJX6cJQBQEizXwcXchx7BR39gzHq9pWpWFK3MTmRwqC3PQLBrL6oTV",
  "key13": "4HKtEtBVhJK5H3T1NQufcugeoQC7S5tsLTDQVZ9hWKPpdXykETyX7fv8WLbEx99M4F7N11QB7Aq8GuTBChqguVTf",
  "key14": "47MGUQNcvNqUnhD9EdaS7Z3Pej6415EcC6aGJkGmjZBM5dAKUUqyaBh1YGaQmBzdL1YvAat9AfvpKEfK47RibnSb",
  "key15": "2ah6deJkkiy87C9bvf3NU17UhhaPjXJqHjDtJffCoxM7iEc2wx8cYAoUuXcvYcwNhDLRAW3srtnV6auY5c6mhA7E",
  "key16": "2xAGVzq6jYa7QLsUfLM6Z8yyY6tboasFXU86kL3QCvYcCkgbNBDWa1FvVQ1UqpESXKfBTh8roHb9uzxQ87PcJfgR",
  "key17": "52kwJ6g6Dvtch3JZxjeUEcrhNWLS48u1gdfDnk4EyXMMaNtXbyUena9mjTLcyHMf1Cfw47ezymLUZNDNgUk8sWZX",
  "key18": "3bcJVNaaWkqyVmFaxXgjeWjaxPLJG6ivo8BbT2C2YEppXzAkAPba7XGFJEh3HZFzbwPMdDCvFsASRpREBKD9GeRZ",
  "key19": "56eQQWy6CtqdK4XfiUZRpnb27XGDmCLzCgCRBNubnE7iy9RamQGkh7nZvcDseJRTmMhVrxhoyo2CE47x7CE13CE4",
  "key20": "5Lz7pPKTWnak441knzJ8XaWKTisnAuL6MGQ2Eu3v1mwxHtEbUJt8g6HTryUhyDjvCBV52ExhRjbnVwVQgL5tZhnD",
  "key21": "3su7nNAbFn4iTAvSkAVjosEycXU1P9bZTozVDFvAz7UaDUVtnc2SxK9cD1qvAWZDgY554oWCr1KcYtQRVdcRPH3F",
  "key22": "4oE2J1h1raR6NVeuKtUAtMwSsc1ZrdnxW2cTzvEoVr27SbfbnEtCXnJ2oxPA8t63kqz6B5noZC2aqUsrYARYe7ac",
  "key23": "3ZXYjSJYoFKC15LV2FtgKqd6P3zn8oy76YzpiUruKDTZXg9G11gjPq5cPzXkSQw4G92KporgqyNKM1zHS4f8VnPB",
  "key24": "5QSJz1NxY5RxsSDDD8nWihVi6XugeSMkrJhTALnNhAevqmsy5kf4n2fjYHSGYaEt5JJoAkqTx2vBztRRCyktPLXD",
  "key25": "4Z5eAFtuM2gQJVxL9RQHHpsq4DUB843XNMsRQTVYkR1e464aev5W9qR9LywUxRp2jfZgEhvQfnRxKamfPpBJkxN5",
  "key26": "fMscHC4RKZsoj8wCBJA8LMhZYd4nkLoSgX4L9ufJvnZ5JoMfa7sYPabtfWrjK6dbejhC93wGdin6niXzvAec3vU",
  "key27": "22U2tk7Lb9HeYcfbuEJExnRzpSJziZdHrGLKzpprWTrLfrzCo8bVwRrj91uBjoXkVXtMtTa7r2yNsXyQqevmsA7c",
  "key28": "2LoRvpG5wfM4nkmRy9tswUhT16aiNrzgiwk9jQaBrVpsLjNrxBudoNorCDYZNXQCiVSgLMKHyHupwwpGvDbPjg77",
  "key29": "2DHd2dHqaNNzYsuP6LxgDq1mkXeT4v3urx6tpLuHZc9JYzYDWErkLLKqJDLWgofs1shnVEbWKh7JWhjUBieTjEva",
  "key30": "5tLXujxjshRzAHieBNav7zeG1dc9V4qWn2KHr26LgAVgPpahbn5p6p2gT6pFUyystBDwFkyTQy7Y659YLTECBhJn",
  "key31": "4iJHb9evQNXpFQagx8osdXqNzX1WLRNATdLsq5cAXE6wbqFGBiiNF5iFRU4cDA5wCawquEtS8BKf74xBdYfti7Z3",
  "key32": "2KTD6iT6rqNRY8XwWWRC7QZVTLPfodNhvKdTshGvUxgg291frJkU75ssBACYXf4wvVyyKrt6fVqcEtdvvTuDkcrR",
  "key33": "4PotU16vRvuSFpCAHokRnSeAgqhJqeYXNeP7PTi61ktRaumjVJEPJNxuDwyQ1Zee9RPEmQnvG8oYtPi9fXjHZ1Zy",
  "key34": "4kfPqwdQuKa4J6kg2YGWEpzcFvu8tFYDZPjgaPP6Aa1ASmyxjFsSGdCSvsh3Evu4Gw4ikVmYeasaoW2YGFJA8GuS",
  "key35": "44xoUNfxWZBfPYi8ZCFQD3gxEHVijhobHtovBBVhuEFK4PknDCMFotVJBqKeivAuFHUjaziccc3y1cSEp72xV4rx",
  "key36": "5KTz32KGXYojxiUH31X6ZaZq7prZWaDfNT8PJSocG54r69f1stYUnVX8mThmouq7aGbF1REizfH5qEhu6dZAH7N2",
  "key37": "Hqnn6HLqK9UnGTo2jWghms9aDQqoKDJHQN6ZCrDosomMyfdsQxtCG8t81x8PFfEVTt8ppLCdmpLx12bYKtWXbv5",
  "key38": "54SFVFaJbmRNRnSDUK69Jdk6JVPwzheCrmywMis2zN16ppqwAunZ3Tq57Ri1sZYnYFb5WqdnZgketdzSUwrzAuL",
  "key39": "ZfwpXSnZbs3kcd5UYohdERN8tZSgoHNQs5BSxGJYkAHPpjvbKc3Dnu5xkyHERYmyiU36q6vDcG9GfD7BohvvzMA",
  "key40": "4psuEpjX3TN5ozBj8xgEqYb8cJGM2th4ZrmvT3GmN6Sd6K2HUMRTjFRik7rExRgLYDDxAEL6tQsabpv9vRF7VyGd",
  "key41": "4Ncd6RP3GqZgMCUU6a1hH4afFXQqL1LVB4EGqSZKk25C5SJ2bibNLQc9mQ28pBciTo5pcaPT99ABYnM9oRyN8JHC",
  "key42": "2xZzZ5dbPMHf1QSdkemwPQ641oWT7fNMQ4UdnUrhJqy96jaiyDa8tv6KzZwYihYM6vftMfBAeV5if6deYsopZcWm",
  "key43": "2vt2ZBbuGuNCRU5MgAAALoZVRS1EVQasMAzM6NFDNC5KTpVp5zb271SSHX221cVyD2TEHLT7kUNftxkni5C7wGuz",
  "key44": "62R3a1Thh9LpBTJvHQYVU7YrXaoBqphxDHU3RkyMYMbHyLqqh6CmUP8PVkkcJp6pbYDzJnMn9HrDXLVY7bNNZrZ5",
  "key45": "3xc48kCKG6aYvwNDHjZ87VwY7HhfJBBGQNjYmKCVjCRa639yF64VYCtMxyDeFHtQQ2YCJXScmY9zTb9EyvCMjTxP",
  "key46": "DadN9rTgGBkhqQvB4weNDytymyBdYepPGvo8kiPbeHvwfLL4K2xNEwT3S2MxUp4WGRw2RqLES6d6SHbYLxjLfwY"
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
