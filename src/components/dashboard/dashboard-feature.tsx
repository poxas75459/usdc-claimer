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
    "44LzZD7XDB5r9Lqd2DNk2wpkjd5PvDEv7SRUBvqsjGTs53dUzj9fsirGsZWuAh4pKUW6BccscgsvpjoSErQtDbHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEFaD6eT7y5yKZQ9AwVR9sJaSUzLYk1sEn82zt1qPBXB64abTU92BdsHgmvAH7oSeYTZrrqYP6fb2zYQH9nZCuH",
  "key1": "5Q3oKPVLwXFJQovQbZ2MA5ty8qZmZXYjGdHy3NCgh3VjLTv91aRqTbuFBESnmyjmXTmkHpzPc4BWX3AgvHLhrPQf",
  "key2": "5uSeYPuysYsCpwGHUEHaCccbhgHKj9FGYa38obQKdQg6qApeQMuxWQWm5QmzfTLutRdxvbuVAj7ocCxfjz8bz68y",
  "key3": "uzu2tS3AToYwAbDzxKdVirBb9WiFxoYsLxXS5XWFS5wND7akx5ky9A5W1tJL9vNjLLsviWcSfqdgh5MKdQR2Mze",
  "key4": "2fwdf7dbvhQm9GQA48W2LQ21vrH3Avco79NV8swDbykw6bdH71jjBdhYY5snXDbiHtsWkJosJG9VGgJxdeSKFDmq",
  "key5": "yUVs4bG2xAitTdm1C295m5jGb3J3PNs4NxpLJn7RXhxZFWxYRfX2ETg69FUf8Y93Q5GfhowCbmfDkEs8Tc6MNcE",
  "key6": "DY19zBr2QafrDPa7gKBFy6MCn566CQPZxn7hKTRTbw48HqcoCK17v4HiqaDv2HGKus7Kgm3ME5iGYbfWhjyGSWv",
  "key7": "48mZ3PKmeDKkKmrEKpvZZrbonuWiApFqsHrRQgVxVSsYBrGcNzF927UfEHsawhgm2ynCZ3JhTBn9wSc7CmLNAhWJ",
  "key8": "3FUYLdjiShEUSnBwgzEHPCnkntb6LPBEgUpQokF6DqbHkkq5ztKh4D1rCTinrRhbVL2qJwjeHWCBC8RmZ7Nn6Ee4",
  "key9": "4qjAW2eG4PBbGvpxWL1k8rSL4ibzqdm6eJmoTr6iKzshvYgtjHaELZ1dM2SYH5q9Ga9zNphvzUBiNyYTRdpTm4F4",
  "key10": "FgSqM1QZVhpxQzR9PFrpdw5xEyVktwZQhtPujE96YFNWWLbVPhn9bYcYTPLoxitu4a8NsKj84GrfNAjzJDx8rNd",
  "key11": "283eRhMXKg1G1kmcGeNL2G8mpbis5vwvGktkYKvhvz4fN46JtyMuZvSL2cZxYrRHYoCU2ECyhudc7KozkknYFHTG",
  "key12": "5WXXFSU4Uq59XStDyxEeE6Ry8qBAN4LiYrLkUGCEbYU6Tj1rgsb2znkZ8YwXhiD9eUqHMMp55M5TP89z1BoNo2jQ",
  "key13": "2PbErYcenecMisub72hqu6DyF6TacsVHaV4Mh8Zpx4PEKLr4L6UJVXe8eUfojFLsU6V9myMWCc8DpwmQTD6Ks9J8",
  "key14": "5yEZQMrr8vxa54ceAVRRWoQR5f1V7iMa6ZQ5JptFA3ZnC75YLPHCaJjCLkpsoWaaev6eXYU6E98KirDuq14UJage",
  "key15": "3RG9EXYHPgGAVWXWfgSii1qamjYWEBVTVuGgKa8YgySDvK8qjqcJoN4io7jxygBfubY8D5i6maB7PW6hqDi8U5Ak",
  "key16": "4E8KVK42RZ7UUoVHAHAkCGiEVm8JwHNUKr4KVjxHWtFihFjJ369yWFq3Gj1WbSq62YUZG4A9FsXWNfpcg4yxkHZS",
  "key17": "5YFctPVend2pE76Ch7yytfgtdyfK95cRusyop7WYHtDva2Zjrb5Q4xo5SF9jbGMHLh7Gngpye8Xog1eQMG9zy2dn",
  "key18": "2CVtvWi4H3KHshb7g4eA1nk71E2Eg2vG5xRnCYPj8TgjX1uKHgViW9VvnUuYHzQTuzPaXiR1L2o47FdEQf7TyZca",
  "key19": "pQPe8gRv9nv41Nmur7X1xHBMCPd21TwfekJaGXZSSAakxDaKVXHBeBK9GXidiYQX95c5u79Gqx5bcn4NNcnskJs",
  "key20": "4NC3YtrgFvYCF7iru5AkUfFNhBtqazo1oiYKb36kvxbYRRypF8bxfTB9NzaRk4wjKtDz5PuSASA1UvmmyhWKALib",
  "key21": "2x3qeYz3mD1YU548W65SQucvNZufDJvnqip8c3K4AoKh9YSBwxAD4fttYpYEDLMZSHEoaNMnYzWwBdDiacfrhUkD",
  "key22": "4EhA4JfraqxYa84MQqFc5iidLigEAHXDhqEATMsF6BR5cLAr3E3Ca7LJVi6zjccRvScWovWAJJbG9v6jwyGj189f",
  "key23": "2zCE5WAaZcmuHbwoBYwLzrFcGvLJcBdSEUegiZymeoH2EXTjB3CCMPcFfWJvaBZxqetoLJGYrf4dAjN1aKDHssPB",
  "key24": "5rbDazyN7tX1RqrW7Gycm97UNCtmkAqoT8TyjizXngHZSDz4PCfXR82TAjpwhe4KVdGXuduwmEWSZr9yoeTgsM6Z",
  "key25": "5qSdzzQo89vJ86X7MAcynExn7Bq7xvEmRu2ey1fUTeJmGyHtMjaKF4gkKwFPm4bJChm6sXADHtYdtX9MhQVs76Bm",
  "key26": "2BgcXHzvfDDC23g2nt9Z8x7a3t2XuofUsyYEcRGgjqaw5FvKPWzfrsmL5mik29i7Rt1jfPxBzswqfxh4qPvRczzN",
  "key27": "GuH8EhHo7WRM7FeRsMsH3V34i1xYDEVZCmdhnLQSWGo7G6Hx1aaiACWPcg1PxhaMdjttimjexcYhgTFRDdmkye9",
  "key28": "2GBrgaXzBF3vHQatXofBgrfFvZzG6m15TG9gf68E1VqcXfNBoekRooDzmXKt55v3zr1da51iydKmtKLFNVMzGiXY",
  "key29": "2GmEYgpCKAyucKeCEKzzVCtwobdnGnAXhfREaaqpBWPzaFhQaVCH4wo2XZ17aoB1N7EiN97oUnVFp1FyQ62kSooy",
  "key30": "npJNG2wCWMvivbaV8FiD1XmyMmvpJPyuPxTcNpxFtDpzx7xjYcLEPuTPqPBN9MrFnvLjsCHbQTkJDC9xBeYtbHz"
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
