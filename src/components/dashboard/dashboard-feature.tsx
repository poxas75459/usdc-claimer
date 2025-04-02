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
    "GtRT6RKLTLpMieujjTpBWQgaUFiqZ1VpsuTYWtEfbtw4dsApM5QdgBn1ANodpFhKA3MoLaBozTMqSFkb14rk8G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfYJmQEpDoaEDNEWZoSQy22dgs6LTi2QLZ7udfqpNscqLbF9UMiuhdBG6WjXjGsw55hLmnmMiuoa4McpEUjFZC1",
  "key1": "2R48EwsAq89YpZhco89kWsBP2Ks4nHNz1bdojrZAgLztStKmLzt5Q5ZqbTGWFDwbYm4bxAcMXJU9DLGAUffh95CP",
  "key2": "5wrvUomo26aNKe7NESwksWCiKYWzEmixjRGNPLgRQXkno4DiPuRuGHirVxxJ4VPVRiGfShWfnu6VEWtYU4ThcbX4",
  "key3": "5FYYUjMh96snce7dbttdxziTYT7i8d8Wbdt1FPaS4iAEi6n4bz9WgqPzaQRasFVFpovfAppqbEQMnWvTDTx9bSJW",
  "key4": "L16DTK1Q2rivbGDAr9wDHi6h4hDhQBsPaPCJ8pTsEJuBNerNoWHWnsb7c7yDdFVZs1e2G6sdgfGzufD7fNPVh17",
  "key5": "2AHB9UicTshS9UysMkDMHVU4nsDuZMa3ymcbffGsjgzLs8BFkG8sSJqugPvTQUZTMn7QcDdyZGT9T1GTUEgELgdf",
  "key6": "37egWBCoqwh1okwyHVtjYScL2a2uVdej9kdGzXqD8fN274c1p8w1BD2bEjkRFMoSvXgkEch6Yvcpz5ppPajytdf4",
  "key7": "48yQa31fPgs36KDkUYoEpom4cBogt3rMiARkSamqSjPpbBZuft6tt6FyuFNJmqG1MjpWacvzMwRcjMXEqgcFjZ73",
  "key8": "5RuBim4B14vjBkmAKconETLHDw27UwF7UuckVkW8F82Xkw1H8QGUaFzvG5bsgWEDfMHfTkrBCVqRNLxc2qbffFcj",
  "key9": "5PxpJNY4ieDrd7zMXm5cVhnr4tCTW9kWLYofTnFgKoUnFUK4zY5dQrsfztDbtjLzRcaG1DM43hBZTym6jbxMDGav",
  "key10": "2SeZaepRVabXQkJYGeh897gCzeC69Qm72dfX3f4LnPzFLYzysQ9h8fRWzNinqvFdb8xS9Pn8dCqWoxg1pgR14vBg",
  "key11": "2sJnZkTTTcFLxWZLeYfau25mydMcCJqAFEA4E3s8tbd4XuFF59RQXEBEB38YkYZGF6JyzCKnGqoL9VFiaThGBSfP",
  "key12": "25FCnMxNAS7Pu2AR7R676PAwNqoLqrBai3vLY4XCo5p2XrPLDEdZkGSJUSvan62Jq6qX4xVR3kHFkVBACqFK9Raq",
  "key13": "5ZCYdjEm6eeRMeKVcvod6h5zwgQxT9NkrgAon2sfCDRLy3Nfgg8JBFCBqtvwiwwSqJE9jmBfP4fP18NKkotPZYkN",
  "key14": "2jutnTA5BetzfrvXC22x3hKpSgqXPCMjvNYV1oerifmJyPpdVEz6NPzaqiQTD5PLT8mMamhi8Ekbcrq9sxC9UM4f",
  "key15": "4oDMEyWCkR4UP3Xid7EVyJpRFzNR33tCh2pAkMz7LFKDg9PBQjuPcoJvqn2m5koB4ESTcPcVpaeuMcBQSBTUK4Y1",
  "key16": "5MDBU4qwewpAVz92oSZCeByVz1csHtJh6FmuRmc4qW8kcK21TMscbjpgXUgmsg2aW2xYjmfNpfaYkbUm1dunKS9H",
  "key17": "34cpKtsEoywmV78DAJ9ts8dcn3VBtM9b285FbjUZH6SLQuVfid3FjTTBUnUzeGqcFTp3SeWEvCkPx9HRP3XwqyS6",
  "key18": "fpPCR38P6R1HRxFoFwMQcGgAgtBtMCjciEuG7ikg7egcLDvmWqMPzq1aXuyDGksYadvpHeaPNBSzTDJqp234Vbz",
  "key19": "2zWjQcXTewreoMhL8UxWVuDSGmweHBwfDt8NHAjYdFEPEVibNhqPkVBLspomLzEVqDbddwtE5TBWtKW7oqivKAfu",
  "key20": "45Kz33JoDAm8NJ5gxp39XZcRWwqBAB4QmxGhj2aF4SFkF9G3or6sJPyc7dsDQ5Qt2qnjJjcBVypGVYq17VTge6PC",
  "key21": "VYXsTadP1edXtaQsxWWri82esLhR9MsFZM45NVm183YRtdTk2zMPausmroKpnMiFQiskQN79Uys3appijUfYMPU",
  "key22": "CkRvi11kSv3WropVZzGKC4TC7gG5XtJoKpa1yQf4UqVEkVV9N74VQ4bipU5jJ5nSuWZP42wvf1U2AYyb8EG7VRP",
  "key23": "5TbUGB6dK44q5sSsZTXxuM4b1Z669kuU332BjaUUrQpSbXYRjg8GaCuJGkQwo9geUwvywYHKnF7rkGpA3HiRpwTG",
  "key24": "5ucCzVXLoT8nZBBZpErENKByjMCNv8LHukv3U9mnRZ8RoymUVK4bER4JX5jjNkDSDNpxbBV71YqvzPcWAAcCafdP",
  "key25": "26iisNCec6mSvTsASG6Kubefe9SNVSffotBBi7k4auoPSsJTX3hoWgtM8rPFF2V1Ay747EJPRyuWPkW9qydcLaTu",
  "key26": "mnkCVYQdEm5DgNK3cFauBuPaUdEV1UXNuZuMPcoafwA6Cb3ZAYNZoRveVCQsikdgJeNnj8qPZ3w7Cu2LU4NyXUB",
  "key27": "5zpmKyGbpQTySMtL6EyeHRzWSLsFLdqfDy1v2RQQBGQqg3yRvdfVQDmsJuWdBK8ziD33mj6Hf1oomBN8QU2TY4ZJ",
  "key28": "2oxnQG4BdeXF5cEpeAnYE6YvXK2gT5FMjSAJpnHrD24CgLxaJVxWzYRNKzXSQjXkurnTDwiBRYgNDC3i6sYfH3nF",
  "key29": "2BpCRGacCVdj1qhdcc2Ru6U7Vn6ACvkCecQUPetGrcHcgCa7sqRBZRjS6Yr1rA7dK9gWShGW9CBE31aw9ED45GMd",
  "key30": "3vWuzQFPPzpzZuFWKQ4W1SKHUW36QCYfDFdCUaLrVXBRVSXWiw3HA4hifCzRyGm5Hgj1VPJEN7qcZfHRzRhBxMo4"
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
