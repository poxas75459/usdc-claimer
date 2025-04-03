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
    "4swpfARrTTifAgGhthWABL2kAqY8ijQehzqEB8YK9sPEBFTmChXy3e87nfUgtsAr7VeAJpdu6tbDCP32TqBs2CYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkLnR2jdC26yL2EDTtFwNDqhoroURbt8BZ2piUM3FBE42jVnHi47chwUQJrA3PL4WY95oGDkfzJ2PpbPnYH4ksf",
  "key1": "dPuE2kJE2PQ3HeZoSie5uey9Mgaf93gHc3GkXvScGn3Qu1exGn25q1yKjADXbhhy677XF9Zqe4JEpHzZQibx7rS",
  "key2": "xpGfpAtXYg81xGJFdekTNrN6sBUHUS49X8tsoFJjyqe3mhMzvRcSto7P3TBzeAG4q5yMtduQkgLgCR8BpRvYKc6",
  "key3": "44jUr4fte4nckpdTeMXy5s8xHwto5k45f2y8E62Rpj8QXvfq9ChHBH2oQ9pbGntAh6JrSCVqgbcWQe2XWS7WCQu9",
  "key4": "2icLuoawmuCuFSYaDSip5W9nvXxvm7FAkeNjjCsVzCX9nz9K3GTs3dLwu4ftVZ6yjdyoCKdK1ZXyGzKw9qwC6PAz",
  "key5": "1PWx8fJ2M76CgtYBrxhSfq8BLc8u5ts4oLJCfKQmYqziM9V2PZdummoATENiiEG6MMUzmq2jpxJdvJyuJtrtov7",
  "key6": "59yz4d7yBuDwk7AuJbycoAftbFwSUdWLwho8sxLDjCzyQTzPPwK1kCqcJSQfE44SXCh9xtFm6htxH17a9FL2LYvh",
  "key7": "esorkUqGrVs7HHYPVLq6mrasfdh38cMPs6eG5wyKU5EMa1tWpC8KgfUV1wAHw4ZvsjsBbCypGDtLb8jCt4Dq9c1",
  "key8": "zywPrkThQNim1aene2XzeaXSN9N8wRSgjuCNTCDsRuxXdoTbx7JmtK4aVB1RzTe53xkXsevfKQgiRhnFcU89VvD",
  "key9": "2b23gpPAe9EbeDiixMNJgaRuPigv6cUUHKsDzeRKCZUhQtBcFMYjuzsaKSuH69BtawcRvwMAuqiKuorbBSgKBDgC",
  "key10": "wnfyY3uipmovZHzDEb9WLwNGVyG7BCuGmPizRKSaAXh82W3Z6VvgfdwCxbiBxA5KQRhHxbtz1754Co77wMtAZri",
  "key11": "127NiawbvbtYvykMK1ZMQ5ULt4AbHB3MZjmEZucLiTCoEFp5QzkPLvrKsfRfgTZM5gfMFGQAhZvPhNNdFGUyLUUm",
  "key12": "57NxmQB3wLKUqrni3bKvrTtnera3eT8wDW1eFLiprwKmvdrsmpyGiAYD7Mgs3i8jeu53MWPJSynVgj8kWmSfC3HR",
  "key13": "5SqgLfv3vqJxDe2c6PrPdN78XyQzfnnB48qTy13pXXyaMhpFC4QtXWkpKjmY6grcyBQiYpHtThYPKd9GbzpUdSEB",
  "key14": "3WDCe7Gjykqxzz5j3kqNCbqAD1gzDd9BjcUG5ksyMYhYBPTe2JmWnuRNLVN6uC3qpZViPxT9FervYqbFfob2WSJS",
  "key15": "25eYXUeCeLjeC4z9CjZ87pxcmWSo7GqUEbxSMK2WMS1PxTLU8ewA7zkDYLKk8wkmRoUXwD9kp6LnDsWBgPDiy8ib",
  "key16": "rJb2KXzTY8FuWCG3Dr44n7UMkMzfoDY39qt9txcJsAXAczTh1c5AwtkfqdXuxwEGq3VeZ45ZQHjj1d9kcNacfYZ",
  "key17": "43kw3UuTEDiKU65efRybRaCzP2PNUE9hyH2WWEsoDZAbQgsXW6jXhbfkytqKBCMVb748RtaAfNdzNbiVtHAYdUb9",
  "key18": "3Z4DeL9YgHgULbvT8bp3vDf6mgHw5vd9b6aqCjT7TURj27eepKgSyJKkeuQvREqa1eKXw2mmUFW9ijfewSSZHzLM",
  "key19": "3t1hzmXi4m3SrQJAcwQJQ76qp4YN4ESkrZgbNoJGyXDn9yY5vw3eAz1yx9bD22gy96j2pECj4BZkU3rMqqBGxCaJ",
  "key20": "5PshG7E1GaH8n28erzQrTwQbDdrhQmYmF56bu1zwHfSi6PhhUFkVPEShC5t1oZzN5bHu5CiVZqGTi9s7ShX4TePd",
  "key21": "3Bbvgm2EZvcgdqnnVhZUFgtbHhubWopYHXytiiFQzSnnPriaS4BU2WFv3hnFE1mzxaHSCGmmtJCimofJyHfubrWr",
  "key22": "2Yiogocx4m7t3QyAaLRrwN381P1rmatH7PQXf2H9Y5iYdvj4JVfJ76yGe47EbZsTU9Qu7AL1rYUaiDToR7SbxCHG",
  "key23": "5m1mPvdQzFn3Vbipmdm4BTDcfmS4xZ2nZ5uAZvKoAokPA19f3cVkaoqMtBM6poW6vE4ieER38spXd11PQsTZnzVB",
  "key24": "2obBvAFxLYh8VzEJJqef5hcg17nSgi8ACEe87n6YNzWP49pyAcZhH7Die3aGf4i93t6hAVp8qcTK5ComAwfwKce7",
  "key25": "tiEU9R24qjNgVR9nUrRTox5zd7Nx2SvZbB1a8daU1yC2gDFd4feKkDXqZuLQQrDcHcGENN7KTne3fEZwXpcq2Vk"
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
