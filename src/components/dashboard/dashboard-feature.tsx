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
    "54zxRi4YhgwY5o3GsSWCoNmegQQAkAFF9UVAq7cUDQBsCznpLzjjLS5hMVikwWLSj8y8NgXGVExgLhqyz7SbRS6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emcxNbNWA48nxBU2BhmbCGd2fdMeU2oYzcNXi2qRAtmRxAe2PBbrx9AFckHoMbdvhKCnXDuyZxYGT2j4fMjyU2f",
  "key1": "3CLWaVXnW3nfsuU1SKywYoVBy4rwcBbA8pQadv4o7P1Ng1H1MHAwFKMvzNd5GhSmVDVWzi5FPmhGT9f4hF7ukr1g",
  "key2": "4KHtFoZXBzWQuJ7aDc7x4NZnJivcL5MFFH8s3cAZ2kLe6oHG9ySMAbb1LjTUu9WGek6icATqR2Uxii46FNVuvHJ5",
  "key3": "5fM7PLSDHyXAJewniSsnQaRYyZvzpGSiEd7iTiRWx2HhUFLLCCLdznLob7PuSJFc2US4o4JrpB55qRcwmasaEJYU",
  "key4": "SLiWtRxXMZcHv1TMeZUTFUGMH1xTkfPdzuVHbdUyfsXmBVXQe2ThHKJAW21PypQjG6isWUqUzNQ3qE9wk5QNvik",
  "key5": "5ZfWnkrr93orWS1VmWD1Rkzkjyv7UMPJHywVhg4yXptTxAhr4biujenBBG9mtdbJLrkTuoirmYNHYQkeuTVCMgA7",
  "key6": "4hNymftGgGrSXi7jQ3DmW93XK74zbv1qCwfoXQezPs1VK7JLqXgTSf5cjkbdRMJiT5RbrpHYqieSit7EbBZos22g",
  "key7": "3MM6cqSnKYLSRpxgHUiL1ERJXpEb3jJvGFdyCDikuSjtmFBMYopM481Y6fMom2VKbaBcDi24jMReQdE6iaKTsj9S",
  "key8": "2FWmqvqQoKs5xbg92Jd854HJaMx7BpyhP2KMUSG84Rqbt3jEndX8TgFeuCfmQbqcvLhNfb4L26U94bU7MLtCErmb",
  "key9": "3bjmYd7DaEmyFsGdB6GtftSjhxkCmDoxuK2iVSsCh6L2NNB3yrrRqXarPYHRJxB1ggArPstnG4wiF9smaAjcR75P",
  "key10": "uBk4vWuG1wJ1CuVRw9UjvfTDXCkCcgpeh2h8wQSWgzWS6vSuQU8XwM97Xy3UmJbbCPLajLVyRcSh15eXVXrY3vc",
  "key11": "521JmQxM25tzUrokSV6etFbcJzwEDeut3MLfo6Jhue2k2NKnoZkAPy9d3GBG85yS97XdavxddAiBCpGXKZ4H6n8h",
  "key12": "3isYez5mXM6bqKnHp7FXTR1RUyGEEEt3ygkzkrmTVP26fJVWiWtJsvybQcGFtoLF2P5x2pvPEDinh6k2W5FeToMN",
  "key13": "3HjQUifL7qW4q4mzDF2u9x5WAMCG7aTm8AjTrttXppJpJorvQyfco54oagFoDHgdkd7onCjiR4LyXZs1qiwh7PWE",
  "key14": "5Dc1mJJNRPtuDBpaY42v8cftfBabPHtd2XRibLRp3dy9SuVaobzHDRWSzErB3rBCT4MkHXvbizFk8BTfbwe1uQpL",
  "key15": "2u2xqkL64YTjZHvnB47Xo9sy1ajWQT1AWvkPUgjjBFjCzqnRGKqso7Y5FskZuZv8BdrKKwTnis2PVyAq8JUf1D8C",
  "key16": "2qLfmEs6uTg2U18f78JSugJhbqUvPDD3RmE2eA1PyWJ3Y2LLcBLrJvLMN7Xh5wDFF45uXve248K3BiW2sTgzEEHR",
  "key17": "4u1aqKzN45xG6Kjy1qtVsPDq4qJkCKRLmX1GCTngHyYp9LMhJThzptzt7hSGB1VdYgkvFQ1U5QB2hYpvYXMrVbnF",
  "key18": "2NeDRATv6dsdfR3sYqpGcBVZdp9j1To8QeExtVzPndQgqJcfaeuuWRqFNoMyP5Hkh6vT9VFaCa64e2YmLL6hrMDe",
  "key19": "4tw2c8iHNcsmHAm6Nv4shyoGbzwY3RJCs4dGYYyTBVb2UQ6Rh5YcBD5BChkyU7vXHjDS6bms6dWF7dN2uH6wiBdg",
  "key20": "5vEUW1gugPDsfDbfoymUmGKVjqiprdv92rMLLegFAUyRrhGQGAehxDZ53wx3kgV6E2EoEv8ohcVBQj6RjW1Y9V3P",
  "key21": "kAG2MZfadkVJ5DVxxQQmhJ22vRLW5GR2YXXTMSaZ71ba4oVt3nhHUBxVweTtL6ZFUvfLtgkE8LJkSSjaaixox9K",
  "key22": "4GBQHiiQpqDqwgUoojMNpzP74ytvFmpfnHCpT8mcBJZc72B7hjnZji9v1MUAfpgENuSLWaVs1cNF48xoQNFErwvi",
  "key23": "4pxuiG4Uy49sGLcUAFZBxfPVBzLiZP2noXxMqzaEYBneq48AJkNhSvjqZGRnLGkSNavNJLSwjfojwZAyfp8Ux3cF",
  "key24": "PU6HqyA1CT8WV7igzgYr2Ut8q2tJM5EvM9ycmhoqDJhmnBWh2Mh8FtKe4e7QhiYRwYgFxgNP1FaciVs1uv1fpLu",
  "key25": "5WbAAwd11QCPKJ2PnFt9twWbzo5nyd2VjfgiQfaZX8QrefpPCBgVvuZgEYbqdi2ZMkWy1Lj3nofDrwoy8MrzMXyL",
  "key26": "3MnbmoJLAqo9WrAWgjow7bASmpeMuUcz5nS8t41aj7dixUh64JzBhaeiz3j3qX698DMHasaF8UerU7txZDQs4gU1",
  "key27": "37Nedn6pwos8n4MAJ7pKeWtYqURCpSvMAF8oQw9rQmvnZDzUW4dmogERF5tUnW2nsukp2VnVHrMW9jbMaeeJyyii",
  "key28": "5zGaCqnsfRZx3eRoZG1gAnXg2xd8VAunzWRTKAmXLeCfTBC7qVCUj2iyHtgtFUnR9QXV7Nkkw3jebfvAtuaHDBea",
  "key29": "5eQV2SFdoJU14pEMYLP9ndYNyAHiHkmEtkqRJuBaBVKZcuoFQEZT6DF5hSqnzkJBSt42FzwVfbxk2YyfBeRP7Zcc",
  "key30": "D6hsozhBKHbzmmPA13a7UerRahHxJy8niAL8nah1QCM62j3tdsG2ENt6jgJexTvD6Xq1HJVv5Pzk4LE1PEbMURD",
  "key31": "5xTqqyhgmhWqJTs4MJmGrfiLYHU5V68y45HxEeGpHnvs5eHR9676x1tFGuYmv72whD23vgHZw2cpsFCSDXc73XtB",
  "key32": "3oAopeXo8CNSTSxThQsjpg4TZLug5W7Nv6nkYds3tjpSKyfQAi4mNB7mNbTN4t6PV5BajeKHCqfYM4snscqfynVU",
  "key33": "XBgqPxNoTnRrvvkqGNLkHQALBPgF2NAj1fxuD9BqETKxtr271HzEqiyiV7kNZFf5zSZwJy3Gk75XtweRdMPrXrj"
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
