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
    "5owFSPxTgpPPEs7UyrLf6hoMZQk1mEoXzSe1Ti5mfBAHiShUgCm16XLVt6UHue8nYPfhJHPRuJu1F8vM6C1e3bU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A99L8k3QZWWYj4SoxXyQmL4miorgYYci49hBL6LKkZToBhCq6hyrvXsMKGXFa4fV9w7vW3ayvG9Fh3q67Ntf9R5",
  "key1": "4yMp6e8JUsGZkPGovzcGRGTUdRRzPg4FojkmB3noYxFV4tQJRWbyJikLmAYkQfme93ZfjpxCvp6fwWyHgKwMswEa",
  "key2": "34aEy2Xr3PLZAVJJvUwKVBqRD3Tzr1KjtMvjTC8fpKNAbCyPQfXVNkjji1Y4UaospBWAJBXied28LzLESop3xW4F",
  "key3": "ixVDEjuarwyW91fEDH7rHJkh6RTDDZ7uZLJxA1UD5gyn4ySDJhCPWLZisjHD6MQSTjnJ6FtnxyWH9CkUXdjLxss",
  "key4": "58fVUiT4ipGRC6RKsP9vngf1hLTVkAZoyQVHpBbj96ELk8giLRdohbeXohPPECeFwW5XZY9BgzRPnrzPHZLfR78n",
  "key5": "3xGmbddPRguFza9sJdMypWvPbH8tkxRJmQaVUpuHobRPdZQF6aTgwMhSB8aaDFQPsDogYJ98VUWGV4Lq6S98w6ah",
  "key6": "55pdSCqk8TZP77xGAVb2N7pHiQU8Jbh29tFEWLdnTvzrAPU9uRgryUxMp2wbs5K8DyzWvSPapg3WYsGT75Paf6ch",
  "key7": "WXLZJbxTQBQDZVLauDQ9kcx9Ts8gyLWx6WiV9UBe1yevVKFKiT2ceL5Vz2dMTACb4Hsv6EmcGXxg5AASi165XyH",
  "key8": "d2CPPJW4G3vMSsVQMM4sUJmHm9WcsBC9WbfsAvZdD7mcig4oKphMDpnmHSUhcQ4By4RHrtHohm7Pfy5yzyJdpN7",
  "key9": "3mjBD3wTYNBEGgZguMtkZ7C28eCBkgv2CQqDNfn1mtA2ur1uyvnkJuuq4wbND44PZovPYX72awRDDEL9ey2jD8Pj",
  "key10": "56y2cQo7PXqCd53jiyakDus9iprE4Jik72zj8NkKfsGfPHPGcc6aZePS7kqob95vqwmwQqRDrJzK64J841iWYt9W",
  "key11": "Rr8TUHcpQF8BNt3SjcJFa6qipTjLcwkopk9gEgNMczZWsRJcas2EsXSTfTUS7VZDMXhgCafc6pSpUQ39Gsw4Tse",
  "key12": "4Yi5ywLdkW8pzFTKvgRtabK4FXaKFvn1CsWfugiX3T1ixxqr9gNE34rnWkFTWs6BZf7jfDVCPZFxp4FEaKSoGeed",
  "key13": "51YeYnDWQauCsPo4gaPFWWRBDL6kT3HHAKgCR68tiugjgBXnDwbw782UAyqD8iy4m95jsqHg8WkSKiM7tYVYYEqd",
  "key14": "4trgzH7kP4WWfqmXN7jfAJMkTMPr5VaSRaXXFCnChWmk8TZ62QqPCrBF5TrL48RxkBQVSwpRFDDUFNGe5bT2euFZ",
  "key15": "5tZMuMLUoxx36CJxdCLQ1i2AMoDT6G1DSQS1azVvtis68onF2aQKpoWSNJtNZNpYKbWciUaoqjjhXvLY6effhoZV",
  "key16": "2zftE79mFwPZgSkAuH5SzShLhhsJfthNMB7Gc4tHwhhQvfxff3KUC9u3TaJuFjd4gF3RBURa8evZaazkLFtXtAv9",
  "key17": "3WGunLyVp3of53g69rVUeaNdkftBAjrbQNQPx84bpYHeeVGHsunYz8Dyjm7UCMck5KCKVYi1wBPURxL3YTbsjzP3",
  "key18": "d4ceQenCCvJuXTYPGnvr6EC5rzj4D5fC8jUAtL9zodrt4acfTqizXJuCsscrgBtdmmrZfMtosLKzXDNjGNrAKV4",
  "key19": "2LqDTPXgXpPPJigLHKegsqMZdVN6D78gVozpXD6wBhAQqbLsvZvKoTp7YmTQNc1UB8DXWBN6zPHAgkzKkCPePHZy",
  "key20": "5sh5QBi9BFDwY3JV5roWeoy2mUyMU5J6bdzERtbRnaAAWF3iNb7X7Wiexo2scrGvuLKLbjKAW6zAJpNjrZQdChxB",
  "key21": "DyBcSYeiZmdaV3DtVxDJrhmKTBmV7gaijQNk7Fdu8X3YHSmZKosfpZMJynbvJwYmJtVyYzqLw2DFyF53ceH7BJP",
  "key22": "Z9JUHmacLMbpGEgFSKxBSuKx6f9gJYvwBSELH1iAyawqJySURiWLPpkqHJjgs7FQh7U8f5Cfb9xUt3Nt24uvmoV",
  "key23": "3A2evNHoo68kyc7novpiimPg1MzuB3qgLHvdcxBDoY5hHjkZhsGEnptAR6dsVFS94LhNcLizN8PeYp4y7Uc1uEj8",
  "key24": "63xUFAtqRAx2vge3t6Sh78xWX3QHuzkYzgjoJdAZwFfD4wP1NNM3QKPWPgMChVH6zBjU77yzknj2Wq4sXxRmbjMP",
  "key25": "2HpbkZkPqUPGKQEtQPUXnZSkWB5NrQs55hwdsXaoR5k9SES2VnyhqGaXaC8VGTs6LQtifJf15yoPeJxewPnM6VU6",
  "key26": "hjZVapbPSbsPxsq48qwHiPr8FZhw1TCszeXgtQ5F6tXxbqA9n8FYeaCW98ScjZS3PrNfrV4T91vZLgceLRbaG9W",
  "key27": "4V9mqBqgHxdJCkmbtxRmAgSsSXo7KCJZCSWhHGQoteM2A8jAtwQt3yyYT9mU1wXW3vkXHThtWSdd6c9rkm1CtkHp",
  "key28": "5ju7f81Hn2QbSnpperxiM9KcssY3efpFqmV8FjMG7ggTfg9kbm3BzhZBWmrY6rSnW8e7kFdcnP8qRMck6ydnLGpB",
  "key29": "BsHEYreSzFnHYpF22qVb6XjmEtcGz5P5xABDXmzZ91i6LsM7ZzrV8N8Pwentz2WTEa5ibF4zfzFqqhwMj9poLQC",
  "key30": "5ksBR5K526Ra1QqeB3ywZibQEnxSoDvihNKfS9P3uN2hEYDmsdPTTnks58xVQsuEWV52BsqxME7iu3Knom22eTak",
  "key31": "41EqQBxHKmNVYkQ3d5gbMbqwqvAJHC55uEquaEFAxEHetL2JUSpVe2nJHCuJcSKGrAjojVw7h7chy8aVrBzUubBW",
  "key32": "2MkHLWyuvQvarrv57mV7edFqbyeESwtfwGz1i78H1xqno2zBDBxs6JfVHYEX25qn5iTqVh9moWCdoeyK1sM4wPc5",
  "key33": "3mTb3ssXass19E93vbisTFzfzC3ScCi8YDd1MayHYSgcqEcq5VrWMetz2DtVR8bbJaWDC7ZFrR8NgFykC9HND2PG",
  "key34": "4cYEbYENW5DTSjZUhgbE4qJE7sdYLHhKjG2nsbsFVP2edxzZJEZe99rHzJjHvYsxeenzYZbiaiwS36YKR4ETvT2j",
  "key35": "4hqjvV3eqE4rs2RchBMx1ePPCAJByE7xhQiN3rU5DE6dBXPV4i7wg7k9DdNM6ieWRJjjLjDa7hPs1g7nP3D4h23b",
  "key36": "52BtP8vpDQ1UGjewD2VMh3PJxWepuWRCFxbgsBwgkrDLZjcrpQxU4cX3jvJ5wWrjErXhh3s5h3cZ8d5dPW4ka35P",
  "key37": "wjeYmwr74hhu21rv5urzZJMXZ6vuiY4QL2eqZDfiQgsZ4vFLQRhQoPu7Gk5BCQ4j5mi28cyLg2MEZemdkG39Wz9",
  "key38": "2D6kzjcpw9gepghHNwarSrB56sJEiyXtreFdCyY6gQkbMeodPYeCFSyuzv2R1xe4WLHFQ1cor2RinXpkNWPNFTXn",
  "key39": "2bgzDEfMCxsVHBEiXZiHPiCsWd3LdJEeZt7MdgQhtxKpqd7tw5VcKaomdxEJsS378vWm9PQXG8TxWR4uFZXjioQH",
  "key40": "3e1rUJLYdW98SVjmgBT3fC1F8rmFuCjsnnboGebbEW5sBMuftExmfWN499SWBHFjkRaik9h4bUet1WxdiiEjfqMe",
  "key41": "3roiBD9Dj23MwpdVSCd44udgcy42Qs3x3Km27gu4L2KfDJyP2Nrr53RyptNXc5Z6QF242hpciHz5Wj8pWs8NJuqC",
  "key42": "D1ZDRNu5uYPYtXWVxK21VCnzLuadkMV3N6UrVc8LYDvQPQZib3zf677czSWAPZLiax5azjxPXgzqhQfYgmF8g3c",
  "key43": "gXsLPQ13cn6TfvKpcyfFanCtPtCqYr3EuFyB9LsyLGTXMC24X6KjcYZb6f427s5zAHVMeRb1AZM5pu2tqrvXhqE",
  "key44": "3h4WMH8gNmhQCCydZ7s8oFhbnwkkqeJszV3TYiGTs1vF5GkxYGNvcuJuQQMmDHi2egg8AAUuYuNie5hUfobWh6Gv",
  "key45": "4g5c4xmRJ9SP3kVyGeuR4NZj2oRDE6uz7yANji3h2DdFBDS3Qy17Dt2d1rpRk5RbboHBmHpoCRnwoRC5SNfwABhe",
  "key46": "hvqysaxixbsn3Y7Y9gFAoJdr11CR4DiXoVMWNHQfcitF2Tsyyfnd4N7R8grj5MjcWmGQna2PmeTZu8X9iDioPZP"
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
