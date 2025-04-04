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
    "2oVchehF4vUdfCp4NRVwEdM6idhnaHt2nJk2MYoNbu1AoAQd2CLgg7bES3mW1tKahac6GBAqZ14kJz3B8eUkkBLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Txw24215VsXjCeJHET8wibMND4JeKEviNCGMsC65Vhdo2U1PbN4zTYMHn1nKdJPCFUjqjjbdFZmWtcudnLrsmi",
  "key1": "3YrYLSKkDWSrW9r9w5veopUTbrf76d23aAkMuVhK664FEnJQHLNpQuUizkYPumfsza8erfB1CNGM2YuNmME4zCjS",
  "key2": "49HPpuG1gBFKsjAmm9rTCqsrLz4Absy67j7wY43sDTz2sK3UcSU3EFjxStTkXXhJR2rFm5ryWJD5q2NVbQTY1gis",
  "key3": "8zc78qztqABUSvvakX5en4UwBbvxTSYLJBhkcGYfFgGvJbVXyndizjKJhZ6o4kwszmBMVc2Zw1dP3iHu5fSFozs",
  "key4": "4cS7ocGqCs2LyiSpbNyJeTVVdJ4UP79R8yA4n4z6GPAKzJifDZeiKxdsRx6M85tAST9bHsN7zgkTgqjbPyNdmDUC",
  "key5": "4WvAQivCBQrkDHQSN6tpscN5qq3kSuD5nnBynEYqh67an59tTZNcZAM74FMRXWXosztVWHmYFtoPe1tvLHEC9RzC",
  "key6": "5daX7WyHi1Z3VMQTpDBTX2NqSfzeXbdfHcnLpuBnJa46x2iY1zAx1Pj8iRFHdKgMJ8CtXR1R7sLLbXUTiA51XGBn",
  "key7": "qfxX5wy7HK1GnMDWrkpxGrWGrQUH5PQNVQ99cxrbWUZrtAgobkkiju3eP9EJXvfQLC7fmUnkawzf9tUrZdDbuZy",
  "key8": "678sa1NHstYAdNPJC1eKErgtk6VD9YQpuTNPj4v5KhQTYADVgibg7wEUhF3kpsXAKvpedX8TPVM77WbkW76griDk",
  "key9": "67ja8JTB5VdUqwotD9z6jBvmkPRN5z98RvjACCSoYY2VqduDQaYC1qrVtfCiLVeaUurHUmLxt19LAkkovjJvMomG",
  "key10": "631UmJYg3AiYGHdNvC97xLTSkHFT9wH9xFr7Yar9D7WCU6qQ7h4GicMwqNmTf91NPp8qCJ1Dcb5LLWsrokTamMo9",
  "key11": "2Zr9WvXvFWgcFCWrvsD4i2wHoXMdbrDrTv8uR3dZyKRMbvpxMdgopVRzefCptZvQVWFqE4nASLFJBJwgku4By3L1",
  "key12": "vX1GrNsatiWY7KMoTQAcf9PgG6zkUpF9rU4i6nCon9Ub5yvZFCkQQj1YPDb5eN1U5MacZLgGwJipoWQE6zkPnaL",
  "key13": "3Ptx5vcsFFs3jDFFyo1r1H2QYiqTZ9i6fAE5zc18CJbj7TNkoQyUy1fdmPCC54rzjMrHjDRn3tQDhwsHDa3t5EqT",
  "key14": "3NsRWcESWuwmDGD1qKuFs6YkYkdw9ABzWjSdGEwpF6LU9VnyUBS7DAVaVaBZDefgWGm1ncCgKXfDwZxtFkBhadi4",
  "key15": "5SzqR8hHgxkQtsfncyNrevAWDjDezbdEAV7G6JkLq9m4Nvcg5ynPnBHfoorivgn8Gzeie9zHWYzt15yzCFtaVgtC",
  "key16": "GJCXkRURqmojVCWEGu89QndkbaBZZMGs7fxWgfanifmiYjEhAaHW7mztxZLH9JtGpLsWaJjYTKKPKe6xfp6AwZJ",
  "key17": "4FHCZzzEipgrRNdVC6ZtbbozasZsvfmaa5riWgWQtjdihnJhWTuy8gLsE5G3Yy9PcrMJgDtvEDANLFUycycCyUpH",
  "key18": "2NRLZ9NxK4ehMAjTMA6heXiocNFEG9j7krHEf1spoit6Fvu6hUWhNTZPcK8RZHCuLxAH3VZ1ipRTozmBhvSvzr4F",
  "key19": "5iaVabTixyGedcB8fyxv7VEtBFXZurjjfhFxhiF9CxJATQUAtahcDJY2aHugmHzrhuoxhE3vcYyRXsCZGHqLcN4V",
  "key20": "UdWgg4hwosgk6ri6U3KQsUdDtKej2wNmRvDHaDEfxqo6DF4gudkKraE4617tBE2kGve7ge69Ms9WZs6ziTmwWgm",
  "key21": "5R5ZGLzrLbqu8NTcHPzk5jgAvtET3nVQZD4tRGw2kXQUNqtDWysum8wKiQywcEdHQ2yaLkRPeSqFy8aiymWTSNG2",
  "key22": "4MZraite2FDhB2mBzYrhrxYMhYW1i6CzSb9gcXNuKkMMHHfvFSpJUDBCnCixQ2zSKXwvnmEycrnRCvWXqKXZwfyp",
  "key23": "3SDpKc7MTfqP6t9ivkHBWh4nj4JTw4BLp9bHR2AJ6tFJNkRq9SqxLdb4DZ4bV3Jma9oLFZRuTZ4Pd1epbJJxtRGZ",
  "key24": "2nQRVd52vEjMAeVfaPiukFWa5dvDMuz7pcnb2NWVHT6iXzpyTR9qViLdu3MbkasiAryU4N5h3HC5eHgo5KQpDoNk",
  "key25": "31KqeAdkiRNSVzMMiWEuNMUvNHt5AZdm1xKKh5xLepSJawDEyAAo5BsT8GFmVn9GRUgcnDw1CAAdzRPZ63bf4WwZ",
  "key26": "2RBfbEvfSQpxfAir9j1NiHZ1fjmzPkfVsgQTwLSPn2Q2P9a7q1m9mTcDNEJ6bXVKR3GZqbWVVAGHyEYdR2cjw1As",
  "key27": "2RB6mecgyp5LvNpx4pybbcDQZ2zdoC5Bwrqyri5DEjEDu56fqtemhavBVXnU1bRTTfR9FSLj3TtbBxcghmrgc5fi",
  "key28": "3bPpH8yLcbMD2mn3FXu5ppkEnhgZFjT7eXDpE5ESGvzzTkMFanjDWAx8Hk83VttxhfhW5WP7yS7E5EBt1D7FQkzt",
  "key29": "2QvzH1yV2BW7m9D76tS5LSjz1KiyHWt8WcMku6SpWJxFWGEfDg3n9S2F4cDFZuvRLreAWkCdkr1tKp9jbXicMFkb",
  "key30": "2rM1y3pK6j2JZUEYLXwnEkNtDuMxJWRiAGLUMujMKefHCq9YcRRJRpj9cuSRmjKJEK6nB5awUz8wZ3RCJYAJ4ZNU"
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
