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
    "5FQ77aL8DPHBFuExMvXS7MuAGCQuVnwy7isDpbcxuTMkEgf1tsoT1rEoFCRSvkUGiXhAi8PtHF76f7hGwSiDHQGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23dWcQsNqQfYfS6virDdt7F1cfjs6CnqoruBgCrXiomebHTsSMrGZFoc69QKYSrJTBMzUFtmhq2EMNtryR2VjV5c",
  "key1": "2f9ZkzVwbNWjo3xEYFXBT5i1QUer2BTJauCWZxnU8b4pAB155C87qHe2L482EkQzTXCEqA6jjBhdqVaWnywM6ac7",
  "key2": "55jsbQ9f9LT2MMr5CBumwPwQR79M5ek2VuGouD9pGxeC6ciQnp4vWDEr49zxT6mce4jHuEsX52yYfgyk1hNbXAf3",
  "key3": "43YVJLLDk25QLvqXV87ehq9oB5oVqMHMBrToWTwzh72j4xxXapm1ttEfWZ3t2E44NKsn1nNnQ1Z7b5aUhRxakbSp",
  "key4": "5UDNgnaTrp1TVMGkxQKQHJyms8UtKZp9gvF74f94TRHLQ24iANAFMM26KPELecTLS7sjBxaspguGikya5KHCkvZW",
  "key5": "5vmJsxjsarYrm9b8GUT5kFLP2Y1c1FMdeqGr6BmKyoVgyKYDEqGMMgCLYKEjbVF1hUD3jGFqmDGvvhFcE3Ug6itL",
  "key6": "4maCq9f8pi2CX1JyFo97CMEYFHhzKyZGobg5c6erb4Y26dSweCyxBsPPs5XTdmUYAGbqea4yECmvtD3jVS9Sdyjd",
  "key7": "55Rea27V8AMER1dS5VU4jERegRXto7YHptgW29Zg22fmXPKqx2mvWknkQVAzvW4m2TFN8Yy46CYg3gzxYXJMxSM1",
  "key8": "3M94vKQWhtC6xWikX5o23YQikGNozFi9jJYXxY41sA9eAcbstjrwvXGVUU4sqipsnWmsLo55aMnpmb3tcj3hifSt",
  "key9": "4obKCSGCGnkJy5F9bzTmscTvQk4FPLBTDUzTS1zPrbJ7cqz6u6HAoAs2Zn25cwomRvzHe66bnZsjUXX2wmH48z7J",
  "key10": "bJzeMegXXtDjwra7ghe1RdqnsJSsg4KSgXfMyP4Ym7QozsYdtmi7v2SHUDDAawVJUH3BBmmvryoQZxVUQzh3mmz",
  "key11": "373Ad1VDmiaUnHSDTYgEWXsMKcHvFFFadEJJAXzy1M5ugb8Ehfx1e4v8CUKmSBScAWMsshBvFgYXLMo2GDHieegH",
  "key12": "5Q6Qqe6XfapAzELTaV5VA6QiXduPAnm3xtQ4LjU8KHWEcKUw4PKtT2jaETGdi1LTTBD9Vw8PQGUa7AEtEmGPy8BF",
  "key13": "3hY763v1457CEmatQ8xWESjsAcpyi9SP7uf6mV99LXkktkcexG12RZy6Xf15U27wdXusE42NUQLyMaFhydcPhRES",
  "key14": "2FENwqqhrn3pMUxCEmwNBFf6y3c7WgFRHEfhGiQfxyFhu3tZu7Z3uTB9QGsKFAYL4U3m5BKdvi51KyE9h5X2T76X",
  "key15": "5EwrpTzCa3NE7F5EJxYfAksJLY6hZDvPpkhaNohKYnvjknpLTobUMbfuybgnKnvRgAaCMoqAeKVx1DrioDdqUnDV",
  "key16": "5idCQacKrHzBZ4gLFPoM2yKcjxSiWeEVevZoJYbEfHhn2cCZhqZuKCppGKtx9RRW6BQJs6HBU1K32J7FEmTxYDZK",
  "key17": "5jZJce24hi28mtberfX5HsG8L5m1TD7fSf2kgsGvs7Dgwc9ErtnvHYfwaj44x2ZdDaz3s6KPBQ6y6gsbpC16qaxT",
  "key18": "55JPw7V4uqCs3xF8seJRLNhp882b2huNeoB5mDuE5aqw7JTGMWA9pFmT4UXUzufxVSKjrJ2qxZ91Y4fUdm48BHFB",
  "key19": "4JRDruQBUK8PLk4UFkF8KZPwm4nu4QokaVubrTL5iVzuHdxB67Tk7jH85sSVTH4yt8o3aHaxMKZrvaDVdUZdfBD3",
  "key20": "CyQ5nAetGYvNFss9exrceL5XboDZf3dnuB67P4aHX4PTrkN3Q8y4wEM1ktf1s6ix8yXvEmh8opZ1Edt2vpWQ4ud",
  "key21": "2MM9RAqwYQxGqqMujG17nTBzGWE68zt6N92KKdjZA8SpV5kc375xpU5aVmVCG5XCgJhZGwvBikALWoV9J5519p5u",
  "key22": "CidwsgoxoKqh9BVDLsU6tQD5MzMsk63C6UwCpHi2soai2GPWvmT8s2mcJGCwuqyQQD6RCXZXMqaNTECydoYdczi",
  "key23": "2V6tsMrMuBLFxAVcjkx1KrVn9kWtvUwk96sBeeCTWZvoBFM5pyZLjtKtYgXxR3EDDWNh6GW4qxHUuGdzUHTWomdK",
  "key24": "54L3vFCaX3dV5BLTxbYpYQZganmfKvJU9FLo1qaoN4WnNnHfdWphc3JUBKp8P31ywXgVDGsSxVaSCVLoEbqScL2u",
  "key25": "h2BEq11eT2Sqj1cfmMHsWSMGYYPmsxQ6pVCPgT85F59mXJjRRc1wBRfMLD8bBdU7YL5mSPZ4fGoJjNtCHj6rqSL",
  "key26": "2nfPoACseFDP8PStPRpafkMbGzhjPK3c2uLjqLwkpn6tkeuC5gN6VYe2my9wxZYxcrx7wd9UjsPpkrGWNcuoPbGP",
  "key27": "5MSv8v42M3am7EcZqzY8KLgLng4dRUd1XomQNC9xrRUGAnbCfgfiYDHuqLwTbxKYikRQDmcC545MGB645LmvXYhg",
  "key28": "3LiNxR9TDwWjTPhXsmf8isqxKBJ3Wmb2GGpoUU65io6eGSaF7JeALwmbtmPsJ6MeVE7wfEa2TXa9gMASW2gq7YKg"
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
