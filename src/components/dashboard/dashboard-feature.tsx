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
    "nNEEHxRQGt12tvRxcZ6rf9csDCAfiHVDHoUbmps5HznH4jSJvAwLrSoX4w2z8TDM5f3SGLfyWQYa1EgmAbfNnAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pS7GhwA1vpFiR3uzS6hWZhSD7sGh6qh7wAcqVmqCvg5ZDu96baitXD5y7paKTKpgbfJrVuQaqtunBfDsfErwkYM",
  "key1": "48EK2bdovfmCK1DPetHcPKgfuoGWQ1T2E3NPsusHvVUuYgvGic6bvW8qtjWCvXCLnqgokNZgPxGb6tcDthKsf4y7",
  "key2": "2nKsvWTwiRJv6vVb3wChnkQ5BcaWLGnSHJWjvDUofYdPuT8LGWKJZMTwuJ37XoxZ3bQLfTem7zhtPsd2baYsxYAi",
  "key3": "5xVKYmk9qTdEtk2NAA7fVS2x5ZbDwQ4J361QAYiv8YimF3qLrtfbcNhNPT4Vj6YBU316UHbGbB4Q9EYKKnQgewMS",
  "key4": "4PxCn9e5he3Ke33QySuGkcdCQcNLV1UXiY95fkNYptLG2PQptF3jQXT5p4RA1bHinEzaqV4r57AeNMpRJALb19Cp",
  "key5": "3QaGHKPwMZ1zuzDU2YqRRBWZ2u5eS1q3hrTfPg1r1rfzKRqVFcZTeRtJ5745xygmgmw3BeLZVZSzYtNciaNrCujN",
  "key6": "47LuHi1DCdCv4H6dqPhueZEFuVztZxMasBG36kCPLM7Niw5owcwRw2kj5peFA3vsnhQdZB8SqGj3CLrRG9FyPqHw",
  "key7": "fnM4xx1AX3BfZp9NDDLggjZZKJ3p9ntguNZnPD3VzF99wMAiw2xYasnwDvLK6sPesqCjc9724wqF6hZA6gb5prx",
  "key8": "5VpTFj2L9QVGqugWEEx1UKn5TTgLTHx4uy3hXGAbkJGoiPDYqxc197dmW8HzbAJWir7jvXGnuuyRFTpzue2GcHKM",
  "key9": "d9Res6iNmw1CqkwLrufFMPZc1tFonXaXyajyWQYvzqpTtonybLaQr3PfLdNjbfDbL1W8Vs5NExvLftNp9Ze6nwC",
  "key10": "2RPgi6DuQ3QN6MfPCzDCe6PCwkZn25EntWNk82CZsd2V79aBHSzMCetrkT1DN2jru5DxGobtaCut9cgtp9ifGXWc",
  "key11": "2FxLLhqrqoH46n9TDAk6uuSpr315ne97BzEdWfNqoXv7YGz7uH6h5wKGrCrTpxMb3y33ZTXm5LnJzYZao7FMoW2y",
  "key12": "3yP64EKyTbVq3YLBFw6zDpVDg91cqscRPzDrrZBHAJQzpkXiqjM6cgif6s3uRxVsWdXe3UsGT4vVhL2yH2NpVyUb",
  "key13": "ZBon6VnaGfeNNaBenNVGEMoTny6StZ5i1bc4bicHLDxnFBd2XWd5jPC3nYzQHTxZopYfGVtgxTg1U5VUFVm2jWw",
  "key14": "3dDbMqJZX3Vfm1zDpn9kh4oyohwJ5b6Xin45L7DH8h8pAdAW2gfRBuKU5BBqHeimNiJGYLBtsqcEAJPR78kvwnsz",
  "key15": "46WmN9LgLcEHBv2RjuxgG9aufpjg1Y3cq8pJ5MiQdgNp2VomfVKZ7UEwUcWVmLj9XH6chXBYGc2hr4BAsVpzgQCr",
  "key16": "2C6YYF5HMnLkmwY5jv6zJRqt1PYyDpFHAxfsa5CwkFRLE2fRz73Uxy7d6YroXySzwJRnTwtWDvyBEkj1iv39pvAG",
  "key17": "4jUggst72eZmbyJuwAjmjFvFjah8hQiVzN1xGni82Ah43Y6gHagy8SjYa1nAYPP5H8PdbM88jS2mcGPUjMwAWhpD",
  "key18": "3MuEzyL8dDhS6zdMB7Yk4xaDbfft8ZBrxpLjHZetYR1RCPckQKNjBvCMzkn3RzcZ9hjmnpXanWqigxjyGLoEUBZ7",
  "key19": "2LNiwmFS3iHXx7cRLcVZdBYCdjcW2n2pjL5i7SdHhkxN6kS9MiHocDA8WMcMU6GZKjaAFaZwEoWPto2kcG3pfvSR",
  "key20": "xxWP7behfuTJZZK6HYtgNLPSpFZzSYMgR4P2rhTnKX4MYaoCmQnH3Av6FbhUw3Ry5dAzgBQDjUmdX8Z7CbHntjY",
  "key21": "2sJBdjP9C4sucQKAb6bSKEz9erDQHHkfV1pmAqk1zFXyyJ2qWPua51Jb8B23zXyFAWTp3vyYrz3MSGTKkpPBHsYh",
  "key22": "5aVHE2RxeUyEQwJLgS8EaPx27RQacQNUvWXfVeiCKFAG3GjhQGDZ7uv9SxNtRWbtuZ8xaK7XtnDg3ArjnFLd1kZZ",
  "key23": "4rz4g3m1RZZ6Ce7Y4vouYBBtGGxXKDFj9DD8vfsLbCjSZGL3MBjqkqHmvrWHkTU7h6pKTNHY1kkL4HHu8uriqTnk",
  "key24": "3qHP5udasrDoKUAeRRAbaC2yJFzKVJ8Vr9N8zTsJDmHiBY998E7KMyUhUBCyYvit5x6WD5ou2nxyKuCyVgNX3Cqy",
  "key25": "2MZmmC21NDMhnQbKka8eQP7tmKAmEesayaMie1mgQnxsuHg46GG8pFLN4JkSkJeuVtU1PPwpt4ipV9PLeasTtaB2",
  "key26": "66Txv7ZvSHbNdKzQHzbu9a2d1KHWoXXQ7D34ca3S7SNGRdZo8uBZzMijtWvaX3hee9XbfES2krGrCdGCaN3Fq2Gk",
  "key27": "3A1KdfFZTSqKkA3rrAVyfsemxWvvTk681Xw4cJbJCuhfCtwEZSDWKVvSE1Pm8V4EmuqaUCsEqihKcRNyKP5NGqwd",
  "key28": "p6J7hoKpmsCJzg5ycoRPyQtuZ8cfKFvDU1zPswnbF2MJ47eLoihJ2hp9etcYyNWd8Vkgq6NXRz6A4NdGjYKqT3g",
  "key29": "3rnxqKbSdjxjGy8dftYPc63Tf6otCj9C7aUiUV5zLoAJ5Uj8gQRKHD6vbBmadJspvjbKF41Vy3X4ThrdtUDiwmyp"
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
