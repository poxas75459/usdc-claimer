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
    "5jSbHz8WdJ1hF2vMsAxN9btugGMGcJbQy8pWzLvSm98gxGbzZoKbd1iFRdWdzndZyWVdUUnjkv9rRwsiy12ZzH3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6wPorumwGBM385BTaNkx9o5pbNPaMi2kxLjtmioYUeUnUgg54Nz7huPJqZSZymrAjnKZmmF6kXbE2p2pQK7WhQ",
  "key1": "43dfbYe8jteLmJ7NAq6nYj5XWKc35g9tEgFgfhipuChhKpk73xBvE8oJrkqqaKq9XPjs839XVmYQ1rJ8aR7hL7Nd",
  "key2": "24Gh4V1VWHobknQuTTmudrEJ8anATZmyGaJDHAu9PByBCfbXbJmkaVE9TjZrvDdKS3FXFyviGYnFPE5UATVaXAz9",
  "key3": "3qGPHubnHYvcDHDF6CQG5G2Pf271GWE4in1zwG39FaJFvV816ZSh1kWkCQUT8ThKPZcx7KWoFdojrkP1i5vvrVUy",
  "key4": "uZAHyw63L2LEzDxFthiUopjgMGHFcDbQ53pEqNhe3LUZvg8YHjo977ZeR5dtG8iehTa54Pi1Mcx6ifTJC4VFdES",
  "key5": "4wwdeJ4wkZaQkXmvGnCqdqetmxHuSeziuTHYsnveyG2rJv5FZpZw9c4pUvHJB3gTELiD6x4vdvGzMBXi9dmMjVuY",
  "key6": "Re99TbBeajUQ6uPbZguobXFeQsZmrZ2Z4CxFM6b4rTU5Mhrxn8b8qVU4cWVMJSyjM9vNRHnyip7CQjbA5YRTDsF",
  "key7": "2K8P4WG2yXiH4KAkKnbtHrswJJP38QCi1EuJy6RGr9D3SobSvH7ZDJDxkzVoSyUrURQcJwj73DudxwmyTh5pC7P6",
  "key8": "4bWXYZewxzfvVEdHeke261ygou4oUzHShPqGEqcxKkYSn4hu823WNh84v44Bos3bjPxj9XxA6TaEoQniwGKSeAhA",
  "key9": "pgH8hSLs1eejoWbbT3DTfyZHR39nCwAj4gbSrZPcJLcaY3ya5uJn374JbjBPEToifme1dnPx7fdrD8AVCdLZYR2",
  "key10": "4LNcZnFc4SFZZL7tCYNpq8XXABs1xqGiMeHtzJyYtEkiSAwPX88evccP4X5u1G1uba9s2nvsxNMKQCKBUt7dpXgR",
  "key11": "62d8eDkniRWdNc5RXmdjzXZbECumF5JCZDMnDxUdLoHceurdx71q3KtuZAHa7dgQfJoL7tfGwQRvaepsVxt8pJFZ",
  "key12": "2bbXNcgSnSNuBjHV6XsegShafK7qbXijJMoRKc9SXs57D2PwDFoiF8KkTmDdr5dNnLn2dwnPqCCUecFJiw8sobM5",
  "key13": "3Xs3d7hD7LrDH3E2qphsDnqVS3x5YMFMV5pGsXQUFfV9WvUPMLeverVicZyZoZMxvzAieGNxhvPfjjXSMhBCVhkj",
  "key14": "rj4BGcNUCqMXzsVL6aqhiTpVrAEEXUCvjKVqhW9FYYnJjzNbPygS3J86BZebCMGoSMUyCDtxgGpmY1D2o8S72RL",
  "key15": "5WQW817qEdSNQKKUcMmkFnDA7vtBFwe2MVdajcAZwMe6VHfHDd7yrfbTrs8KUrfqVtrougFfvyuxtaZpQdW1Sfdz",
  "key16": "38krNBdLovBy8Y5aNRjJVbjJUpY7sbsAhZ9xQThCo74W3DJTZSRabjaWqN9dDr2As2ommCzLx8E5R9dDFzbpBp2K",
  "key17": "2CqqsJwuYoV1RFTArKUjbrQSUPNgowNJUHr6DzkWoKRgiek3GwCMQJsS6p8CnAdWAn25ZtrbxYGsx4FMaKYK2Mrk",
  "key18": "3x52YPbfUtVg7EnG7BWHdnxSBkQmzQLj4FzxjpfcmN7aEhb9NPQJP8zFqo7fG7ZQiCxCEJQshYJHtYSYjwGv576B",
  "key19": "3zjzEJX3B7BfKzUS85q9MqZzdMptGAriQQqbziFG7G28S4EpTEqM2TFSbFjwUMz8TtLo27GqL6eafUhGm2YNi8vj",
  "key20": "5xCQKN3EVqLTEnCn1EXAhxDeSsAPRcxMaeSKWX2gC2WoLuJb5tvDPpX1G2SysdCyp8HbuL3xH9ufXu6mjJVeSGQ",
  "key21": "3v2Bra8qAGgoBGboa4wxiVMMSg4pDh21aJnUAnQ9HFANXepVKT7E6WdMHYsECCci3qsbcoFkhmjRPxaSygzf7NvF",
  "key22": "2mdG1vC2y3SEezgBRveimxa5psyNrihWaRS7CFQvxJe6adats1LtxTNUaYS7TpxfMgVGk6ZsfRBiardmBNSn2RAq",
  "key23": "3WjREvDFcXPNHa3v8HRRyAraJ69CcQ1oQC7GKvH8KNyrYMuJdqibtUmJBAtLe2gai8RxHG9tcb7xvLzZDJeddCgW",
  "key24": "2rdwWLXsAXUiQ5xmyFCpk3YCvad3d2rx9X8174mh5mvndbQhgpZtDUcsongzQ3cG8aMjPedW7yDdxXMPXtsNR5ZC",
  "key25": "631oKEF2Cp8Yq2wWP9267Ec7xXN5zkbYQgFxUMpZe8PWC4TMC6qZhgTpTtv1ZG9oYhFUNQx7TApdGRgVM2VMfbXh",
  "key26": "5k362PDU7oWK7CNMhthzaq5hv8jARaWmWUw4odSXnkdhcWXvW7jHz4WbqNVT8mPqUdvHe2Jfvk1EB8iSWHiAA7TH",
  "key27": "ukEUwEdHrfVMtZRUgf2PoKQkHSu8rFxTAbSuwXedDgzbtQYK4k23qT1DyLZThKA6y8DzkLfTXA4bN68B6uRXDk2",
  "key28": "nJXxfV57QvJg2FHeHVXbTeVkVMYwHNBYfxWKu6YEEFuoqkSjdqa8A8KurydM4ADdCuQjLTibhSUNJ1Z8DqD7Xsi",
  "key29": "3vcKkvb9XkJztvDMC6VVhhS1XFjRiAtQtnrtodDLBSPMugeT7gjie42RGyhL229ZhzBvcdTf9hJYKYHbczoGjJxJ",
  "key30": "3ijFFfsAPXfDKFuKp27VPJve88QQwfr9jPa88eyBx25UUYzzVbCKvgLWMzHqXXXs7CGqapZJT1hGh7FwwfnuzoLR",
  "key31": "4d96KkkB1cubD3DHQhbnu6HRVVCuDG8QVp9CbDpWBxntHi8DFjvzNjpMvjsCv8TjAEXnBevGKhgPX4Rdxc4u5HEN",
  "key32": "i1BUygAW3LTCCyhENEVuyktcQpsNfHvZxEJrPvEAYDTxjvxwR64hoCdVB9Y6vfS9td9GbeZcFGmZcAdNyLbc6EM",
  "key33": "4Np1KuH5guf3jNwPG7aaCnap6YAC1v3DDa5odc1tKRBUNS3iHPm6VxEyFbenjnmMN2SDAbq3RKwC9d6VzRrUi8XB",
  "key34": "5LPsrd6JWb4kSnbNu2rVHBKiw2h9L9ZiBK2ueoKiNs9U7c53ko77rixnUToy1nVbPtK2SDDkavhHX8DJQ97Ytu3s",
  "key35": "4jRBAeB1EAtifiBE6WViLZPLMwvySrLTxV1akh7SyjEbYzz2URGC5r9sVN2TjUhrbrxEM7BGfsxx6zWa3CkTQvih",
  "key36": "2X9NVC3FRSgLfADDRtnPgK6WHT4gUWvajV2KuLavfTah3MigxRsF6QtQo2rojJAHcjCciKKv9eZiGSbVe6RZ8sTg",
  "key37": "5a4bzbxzdkVDJhhrHd3H1txsaVAqefv1StZboBrB3C87WgK1iYRUTvSgnw5319HJKqsZZkuzxYLgYqdVWMp5n8Fd",
  "key38": "46YSiqnqh3X9nMJb4FVjnxoFMjJps5VUmaAjjBCMsD1zf9iatskLGYR3WANmvKZ65JMKQJoM4yXCuoYeZ7jtZZKd",
  "key39": "4wkqMqcrbDJ3ktnMfEUuRVEnkxdFKnr4Dkr9cZqWUuAchjxiSQMYpfGE9fJtAZ4bTzTUkbMZLEmkY48vT7Wic4Th"
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
