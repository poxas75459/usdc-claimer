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
    "pBFhxNA1kH7PPNBs354RME9tZ3vnU7jBub1rf5gZESkWeMiijFubxAfpdxcVB41J5HotbHnaMnYMZUBWb7bMmMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44k1TWhZt9ofJH8oKqTnhsQcatsCSxpGbPbHUuEL8pyGbevHEbK3h91yuo91EskAVWxgreSrDvmQYWz4aQ69Qdtw",
  "key1": "3k3YFG4oDSz945Hw3qUE5RCHoPaydyVGHuQaMWstE4J69RxYQ6XU8q1wSoJvBdF5ZxCMqEBgSYAfow68y6t5Gg7y",
  "key2": "SeXmP3Vuva9rzWHpyaEjUtTtZGc5MhyJNDLuS3FwTxMmSC71PSq6AH2fAQPrXJzpkmvTj8577BiZvoGkY7Zf7Lp",
  "key3": "3fUUv24kdg4rUGfwa3J5W32UkmCiyx38CENkvafpX5WCma65AtPhkSRFqJTcNVQhvzyAcaWPujRg4Q4rdyDTKkiu",
  "key4": "2uB7rhvHuBDwB8VREG7jGkNa7jDGqwJpmRVbvetZRbngY9AscYPbG3eDixDUYHbM7BEbDUuRcrTCPuxZNUukwwH6",
  "key5": "mGVL8U5PMK6A7cHW2piKxhGUjXMLpj6EvmrkRmYQkJzMp7r1pqujBawwewFJbdBRjftuF4fVgQJAtmM3xYWjBdW",
  "key6": "4g19tQMiMbAGFJLyUyurFg98pCtZuEXDvTAByGaLWtkp1Jbv8uXevq6G1jb3WqwddwV99kG7eoB52gSLTHjYWddv",
  "key7": "3yFNqv8SLpHUA2wYLCT7PjvCzagg8TsmGUE6ChLehDjtxTEAsKVCRQTHvKxTmb6zRGwybAHcc1Pgb176S3weuvuS",
  "key8": "5DiceFipWLhqxChKqiCmv4DeFwunSSLDgeLAjz58aT9Rz5pLKuHEcLTvkKsZ6EYeFDmKM2x96fLpcoFv8FNv7CS6",
  "key9": "4eHfDjbLzcqLmC8n2UeqjUVdqArP7UgmMqt2HbWDAphLYq2CJNAWiMXBET83WBhNn2PzveRgBzHhXAPqcYKY6T5y",
  "key10": "Sx4b4jF2UADAnUokuaLfi93GBgQbySYCVPdv7s6UVhZnxmaUox9kbb2RwCsBcsg6A7br5TVScvXNH12J1oXGizk",
  "key11": "2CdyZcUbH5mEeUGPho3GqWj5pWj1WYcRsN3aU27edUiDKmW4ohSvRk97wn7bLVx1yykvxGLsujFFNK8qYnajVvF4",
  "key12": "5heq8EDSiVRNdy2FaHHZnfx8pjTKgtemBi1CCxALYVoYfuvrRMgH5wmGYB8455nBFXP72QPsPbNwMX1AydzZmNeq",
  "key13": "4VYigM97WrVZDjxd1zMJahbJJcXzVjJPFtUZjFT5q3wRrZS2s9aKbZLDfLNYVeCAdshG9MgEZdDjmydowPYGbUzv",
  "key14": "QarAY89GgxNNs3nxzJAE8iPYnJCPxy2HitqxGgHeNubWmqmn9HpacyVoX4rKUAfvszqK3epMrhb1pYTVre6bJ7d",
  "key15": "3bbGzKKN6Qyu5maGR7L9GQJFEYEEVDKVFJNHGS4ZniZkZ4Rr58r4XEt2siMaAXVroeGQ8ye9WWZD1dYSpLVMqUTP",
  "key16": "3rdePUEY37zxND8V1GAbxmhNEEcQjmU18XCkg873djyVBqqXp19EEvESr56DZpQvJwrQTvY9jtyKMEYKpHyyX7mE",
  "key17": "8SaG9nfhnR3Y17cTA72jPt7aUABzNUSDg4khYKJdMXCiw37EVALTRUN88A1FJnSa34CvTmWeg7qEc5Jsx2jsqWi",
  "key18": "27PEzDEDeMttx71W8XUR1ikQLFHUhrNy8JBHWoP8p4t3zuWbFQDtANr7SLvUZpDfmNoch24yzpwuXV2nYoseXb3s",
  "key19": "xChoWf5AicTJxJ7qYFh89Xjy6o47SyNG7CeQN46aTDGvHk91kKUpfJhhk9c8e94DUSmbNtHFnex7nFhnxX4SMSL",
  "key20": "21zpae8dQbfHGVZEyrHcoChgyyTnywJ748YPSWyc37tjzpYDXwur5mZm8VBXGq6cRAQmTKCJWWwXTC4jZVBtxQFE",
  "key21": "33xhwbEt4W71yR4QtKH2iP3VU4rMi4dv4WKuhyepFHPDhyCVRPe9Doe4S1mzuZ2zZKLWdaofXzCUqG5NLj9sLYrM",
  "key22": "hmP2jrsEeLSd8Kn6Zyjf7rGemVBXdXYSRrNgKhdpVbKC5WM7nfC3jkfrQPxShtwpKZLpMCKQ199zzvnsQgthz8H",
  "key23": "31W9GEjHECEMpf2ztoSHMJxiqSz9SUw8xriwQUdFm8pEFHRncVVmhZtQ45fqqyvtYEctBbUgCdWZLRgd5Mtj5H3g",
  "key24": "oNe6UFjNntxVyskWgMTrvZMdpuGfb7ia14Ur2kWZffkx5XVtQ7f9JWc4gqQdn8Rr4EWs7bgFHa9cdPeR9vv6T3y",
  "key25": "4p6pU9oHv52ytPV9fHeS3b3ucMgniCHSDtfwZhNJYzbSZckkdtarT8Tg244bEydhc7Qndp4iAKMi2k4mEQAmri1V",
  "key26": "5xysseR1c5MbpkBs66FUASo9AYwegmekoMcigEw3UPpwJwBB1ipvGm6JphfXKVqmMx2umi2yq7xsmPzM8JnzYFWP",
  "key27": "2L6wbiELqfjhfBh1GCvb1XX9LR5P8nqQRYGDWrhEkDz5XfZJfvjd53inEmQbjUqtZqA53AmbrApnHbxZpRPVv3Jp",
  "key28": "WXKPebKqHtgMTswiNdWqAhBEqveua88QRr39G592ETCdGSTcSZ3dVde1ntKgSEwfURfzVWmawZehoaVQxyLukLD"
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
