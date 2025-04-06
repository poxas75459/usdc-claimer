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
    "5bJNgv3xWXGqAAS97PngQkjxXoE7jCBbsBtHTpKWBzZKv1y47LGkUMGX5fs46m5XtTBkhq5hMEBYwrDFCgc9WnQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QdQGVEfbMyG4yuiA8tcAJv5WqhNjL12UJKci5G1fYAsURzBad6aunxUeY1fq2ndeDMprcgesHb58pbizZU9Jqt",
  "key1": "3Ka4KT2mSV7WvPmHCaEDvEqLxoW6oxw2MCQ7zYD4ptg8hmFZM9zL8V89Tj7YThBZ6AiXTM2k9bAsQhgENHAeZugQ",
  "key2": "pPhdRx9uNXgHUm6LrtmK59ZcrFv9YKYbmVQi6MRjEnwgwwinV1QFks91WUX8x1SP7idJDqR4zoDaJm2RN6USiMK",
  "key3": "31np63mmkc6FAUwapJ8Z9hS3R9ihA4BjqRdURpqtypAfJouPVeKXRE971gdy16zQo91mApChWyH7XwaKGJhUEXo6",
  "key4": "5hz12LoHubxnxocTmEtpbQwBRFtMHn3d8KaiSvXrgaiB9ihjPQgQ98BStfW6y9UYrHCmsVd8wW6iB5CKxQtx592y",
  "key5": "3pSjUfTADVZQrVPQWLjvfRBe199bYux3uKJGSyC9xwJq3Pu9W9ebzYYxzUK3SR9ZVS2eiHXZS2igvnkZqwpmUDhF",
  "key6": "3QWD2HGufu8oaWPp78KSeYM3VuDLgqE2nozKKi53uJDi5ZZ54xMWfNCgjuUxmMUePkZDNexwphm7fCUzBUNZzBGw",
  "key7": "24UoB3k4e3D5pHZ33ihcGCqfzj18PTmuzhHEj5cmGa4PybxPNSa39MviQt53Z1qsJp5CUxeCGRUUr3Bwn5uAUTDg",
  "key8": "2NHdMKdc3NEBUCd5Mf8QFVJ2jF26kXfgfehRTJzRqeA44mYvGAJFkApDzhvmM1hRGUuGSQ1UVBB4ZPHWW1JsWgLC",
  "key9": "tAxzmuT7sF5h8aNFWToRUdJgo46HqY51rTyiVG3r7SAjJ9frcfvHPb9AX2JdC2nuAR5Pb5YHpez9GoRKL4TXFtJ",
  "key10": "F6jwoGETwP9YkUzD7m4fjbwuCqsSZMED2ThJQbkgi2YYxrnro4G2r7oW3JfLRsnaWs95Kh38ioiwdZwCnW5vEcT",
  "key11": "33wiW5w8QzLCQXu67WozK7b6az7D6hzDDYEMYNvFRGQBATRzTZLSWGFJQjc2Wupn2sZv8iCkMQ2ZFnifB2waqsDn",
  "key12": "4SzRVELzqJ1EPtUFFFdjTabmDkW1tj8acqN8bWYPabn3y3DxXMTM54QusKeHpXnRHK5YqjA2PdYMrTWtgG8A1t1Q",
  "key13": "2hUSFdJR2sWhiqfBRWxirmraT87PRCSkPiyB2fX7aFEkaYnXLQNr4BpZYXqsg524kJ9J3TfHANToiXLzC44Ng9i7",
  "key14": "4BLdBCscsnfkC2BCiwvJuApNxZjdWopy4UusVRjt8dpLzyCWXwhr32LX4T1i88U6H3rXv5gNdXbNPhfdH9viM2WZ",
  "key15": "KwDW2aDkvMsT3m6cjxU3GfhJWmbjbj4zRkeq3HQPSAhjD4bysKWvr6TNiRLtojc7ssG1F7kPgXYpUkHHHj5o29j",
  "key16": "58ge7QGtgHT6KkcE9agZd82ECQoX6DQLYjEq7M2D8vrMa6UCckTgoDm42jvWTiJPwSTk8Rmg6Sm1te4fihekc9S1",
  "key17": "2jyR5b5HzeF6es8rEKBHkwDLV5QXACq62iVBA433YY9GbEJb56SJdVEorsf977XjGZUJgAu9FpXg8Gtsoqu29ELR",
  "key18": "4gAAKSfpiFgStQQo1YFZt1svtSr8awX5mNe4LxyL33mFJZ8aCDgajkx54JyVeNFiGrgrbQ9E86Jo4BnVsAerwAcF",
  "key19": "63SDUJnSgWYYvMZ1WYdv6qxocDQMA76dtX2aiLCB4t7knAPobn5YSTb5iHqBcephz4iy4JPo2HnyZECZiWfGhCN2",
  "key20": "3qQRhgx3BSg766wpmujtbb6odYWgKwybkdkRRqeGLtz17q4kZxTbHgZZXiWpkyeJHK9uG4wNt2pP7kMf2mLvvDJi",
  "key21": "2xPfNLQJvTUGvxJcsDFxfGu2KDDVKPD6ehTjY3HGNCcGkGbN7Tzcx9CG4BDGVLK7DbC3uAfJ335FWWgWJAhXcUMz",
  "key22": "2VV4bqjHVWKmoa3K5RfpyXgCV7Rut1ofevZ4V2vr4eC97FycKMDc7HZLJ9MT7YmDmik2Dok8nbh21734avvEEZj7",
  "key23": "4zjPsj8o6Rvyqre7SGZe1H5F2Vk9ypuQQLgtkT6oWTiT25vnJ1Q5cZVEjoFBbRxHgiJHas6knDhGczu93D69cGLS",
  "key24": "4tx7yofJgwAA92Tn2qxqaVFvj4DpY4PfviBWWyoNYywuXZ5yEPBNoWyG42KTfhj4f9JEgePAGbBupe4gRVud7uqg"
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
