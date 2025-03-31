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
    "5CJYGNJeSAH9xHYSNEwRRhJqGthzjf9fnap4XgGVoFfenqNNjdZagz2sBdNjLKbnfJqgXe73gLcb3CoanFmjbSxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMoUTwDcWd9Kb1iiMqeyNpW3nD7usNrbruBNsxbanqkT8bQRVrr5jbyHxA3ZxPhuxS3N6PY8fDoHHvKhMfuXcPb",
  "key1": "QLDc5a7SsCbBk9inrQ3LudkGNZjE2BWJofef1QxXeu3MTUPh1Rk6HZRRCi9rvsmdZQNxFEUHfS9WVz5X6We2jDb",
  "key2": "4JmT6cvLZhNr18vXwikGQb8DFn6WLvwWBTpWxBuqeybsQfBdfdH8y4ovD1rMyMMSzD6LmNaTvMwHQiWba46EScB4",
  "key3": "UDqxTJjpRX4hQRZPYX3H8PjqmsdkjbruGqCWET25U1fsP129QMdVM2bKbwKBoKtmfAfK4BsiXUmN8s8nRAGwb7J",
  "key4": "4dLo1FfWy8TEizykyXKPeAzEhSyYbJeJW5HSk1er5CxiwvdDvVGPt68sAVQ2gX3zGoVHh2J7LEgFHKRWRu1v176L",
  "key5": "3ZpZbheVY5EsYHYDZfeRnxjV4dupy5hdwipPxHzzwsKGqTndYAUNDdUCa5wHF2SSSSSxExF7rCYKAbhJGFSFqaRA",
  "key6": "YjC8pAtmEeuEB6K7jkGn8vg4dYJaSjhdD5norqqyZxA7FSNzorcDuFf8U6TXfBDudgMUmC4NAnF52ELzFEWccyD",
  "key7": "2KxSeGA1D7G3XeCmNw6n14kSr31sLdVU19hnPzuPoEHKwynNoVQ8wCPnHKwBcWHWgxiNL3McJQE5Cg3TZeQLzQaj",
  "key8": "5cnPyWA2Wwve6u1CpV33UhXvjL9vTgYLUs74f7JNbuSADvUwHmZzyWyuEKsfGfDBNaxoxCtYRUVfHLqAKjX5GAjV",
  "key9": "3dMwnJE4jgXWxk9Mv7rzSUv7qLYmzwSEWk8owpmXJcbwfo76D9hoXuMZ75efXYmAv4LJa2mTAtmyb4zb1Gex9xEj",
  "key10": "4gXm3gFJRKsihy3JgBpgQAwqEmmPzefAeMnuDfC7yPrcBxHX4fFP3S5ezr1zCBZZeWXHKCNm3Tv3dTVLs8i2bEES",
  "key11": "4tZeWMzVnjcEGiW6vaUMLjML9NMiieAo4AEfrs2qeHWX9yRj2ZnzBXMsxpLthUbibYHniTty7VbQozd1TsVCej17",
  "key12": "4efH8AFkutJVCBTMxzQbFgJVa29wQkE8zNLsEgYSY9iZDtoikzUbhyoeCb24YoAziiJJzDaje43kg8319G7ZA38o",
  "key13": "o9fFAtRwXfg67TrXaWjQYXiTVGWuiJRN5afdHaJADJjg3Wv4mRBj1YFJHCxuJny3evwheVEG8ghaAceVmwdxt3D",
  "key14": "5h3JDEL1mHoBr48QXziKipoca2D3ybo8WnsAtTjSdzX9U3oJB3eCWc64Doi7tC6c8iJgg5V5zTGzu4XbE5DoCEMR",
  "key15": "2Qb7FC2gpD3ejQX5xNg47GoDP8eLk9z5X8hDwuJL4sQrZkW4faxrDDwy4JvCMYM5pcvyJZTGfJrSzdReaVPLuNMA",
  "key16": "hA3t4YRPDQwGHVFvjUndEbakpgP1cPbRZSHd3xxPFdpf469wKaRpiaaNebjwUbbTGsBKKepJor34vWEPfbtZgMT",
  "key17": "3FwFvTwHu7gBf1j5fQecYvuREtzGw5xFTFpxVHsyasZHtMqfmYKDoQd1FsnntA1RJFR6FeBGBMYR6AM5NxeA33XB",
  "key18": "4Smr86y8QBmC3hBdphs8v2J6SwhwxHgi5ZxcWXgbeKPs7r7ZZriZD2rwLRQUnusjQ9Fm647RUMr3YHVYUDaG1PeY",
  "key19": "57Vrx6hVphoLPtLT78r9Jw48U2wAjVbGhjTiodZr2WfPHNEfRCbSBqUt1a6W6XGE13Dmj3zYuSeiP6eBiWtpy95N",
  "key20": "3SFF6Jx5BfZLS2eSMvmx9Z7ifDMbZG8gmTubwmPLyWxrXw296jVFmGMZnpY9qay6bgz23ZgySnMTmZdn4FPWsxgy",
  "key21": "4CbkkQCSkxRa3xAi121MsD82zTmyCtbGrU9jJT8VJC35DHPTJqazs5Zw8XzL53sLJYtkKYYigUXV1yWwgqCFh5Ey",
  "key22": "4scMy24GtUVSRgcig7G9UGXEr1ptzwabKFD3HZCwHxx4EUVzsiwwjGS2nVxnr7bJrwKKVHRaL4zfgVBLUN9AV5vr",
  "key23": "3xA5kXnAQdj5QGtXJhkY6ikW4EwHBHDhvhJ4kykpuAowt6QzBc38pB6ANhF5YP1SgRaxQ4DTvyjsKD6pUowh6uSB",
  "key24": "5Uoeq2R7KS2gs2iwYfFrx7Ry7eg77hN1ZdrpDBu2oaUGepLAHNX6k9QspfPDMZC7rUJnXnoJYKtWuNVRd1BC3TLy",
  "key25": "4gRc9TcCxJNo84YtSdGbQ9xuK9Pc7RUeW9bPU4icRsZ26dDDfQ6JVLfvF9XWmPJKfkuVpjJYp74WfUmPstp6GLqS",
  "key26": "61VyaTbuCjTXNxurzMYqFSGD2BPKkcyvCpSpckRwbqwnpAxMgyBciRTryjBSgNhcxz5uoPTYSbJANe8w9p7yTqf3",
  "key27": "fkTGRZcujCW48cRf11WRjwjM3iXXvw2zox8h4Vwu49qaoQeA27gkUawHVmuZuTcVMS9PR4FfuYuUvHGTRdqRrS4",
  "key28": "4kTnEAuuniPDo8oYPWsgicJwNEcBCwUZtG92RtJjTAW8XZEsiZBA4q5JqCwVjA45EAbsoW2whZDVWgh7BNLAY4TB",
  "key29": "3stvU9JGkqPWNm7bUq4hyMVBo9jDc3zr97oq74hxeRPtifT9raGvsFHSiYt4wX3xrU4KnKaf8gNwGvWnZcHU5qdu",
  "key30": "3QxG3mRnUfdj8JtPKmhss5aDe9nDBqnp7WZHQrem8hiRX85gi5ZGyyXSEbVXB7GP1sHotH1CGQ3dhqwhsKbh5wgQ",
  "key31": "59eWSL5rdQ5qyHsg1KyDrGmHWTomnTC2dUKd8rRuEvi4iJ2KvMs22XygCE8HvXt5vYvcw2pQ6P9be4DFrWruCpsN",
  "key32": "2C9PLtoF1eh3ShHj8Y3itJYgp71vqga5XFjxn6BwW3ePDmtq37cxhaQjLjN76pPXYxrawbpwjKwPdkd82H5SWd1E"
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
