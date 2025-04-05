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
    "31nzPhsrkyCwu19Cw1HUiFzG1M42oMHQy54LZwHKgzXu8eno4B7ArZGqLhfoAqzuMmuRwzY1nKc23wV3ocLegbTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfmE8xvjX1F6fES3iiJvXfHgghAXKi5r21G3bjz5nS2DpnbJvyCFTreZFSJLJJqjKdSix7uKVmXZpBJGR2bxTaL",
  "key1": "3cSTgLLJJnqZKeqXhctfjENTSCWRSHxTSwZavDSEi9aTMRT8kLKMY5uFx5H9NAwbQbCTdyKaigKjg7s8bWv8BaRL",
  "key2": "4bWyCgLKykJ4VxKoqqNZ6e8kmjdPjKkTHq8Pd84YXrGxXD6gK325x8rkae1AVXumfXZvDRA7HAX3sXMtdnE1de2Q",
  "key3": "2fjbwULouTnpUAz7uTC2M3yogyJY8NRzTeGWtUu6EWRjkfACVYQNwyKgPgxP6fN7Cd1scUd8YQMJhpwwDjfweQGd",
  "key4": "5kQnfE1GDcgqzvw3geuBxqZEH1RH8w8THDk74tX52epZ3Nt54CzqJN9jQJu8LfPZJwhLHgWYVGDKf4gr9RZ4DCs1",
  "key5": "2La95CZf633Co7hD9d9yWonrp2EP9iKfdybCxssVg1fCA9oqSSTAR76Lvr1FCuLPqyyvgddg4FYnpfi6yUvxWQ3X",
  "key6": "29zY2oSmLiJ6eMggBLi9WHTrrgi7HkqjME8MLL5oErzFJVmpqsJhWNhFeVdi3FZUiRBFRwJwunvq6D9tpBEG6BQK",
  "key7": "2BEBmgz5yiCyu8xRNrDZhYGdfVhQosPVJy7neijFMeqfnkAUXnREtrj9eGpZ65AFzENSGaFXTfckhzLNDKGmexMu",
  "key8": "5A1QgqaXkgR9H7mmVwQz4FtCPFbx1CgFcJjaf4x6pEedoaqeui4JYTYuCQJpAqoKfLcu4FLo1cG2VHpeKEdVEv69",
  "key9": "rC1jq6r5PWtLWFQmPxKDLLBiXgiBkBBNJ5xXVo7KS3ntFjv1hU7mNGdLmqs1e4DqNYDCMWCpFFYYkDnrbzP1uF8",
  "key10": "ZpP8VPubKxwHj16UV26KAWTS2oMmyZTa18wgpaBCxnGT2biL9RfVxoEPYN6Dia7e9yrWjjxyVyp7qR52kfmsYeQ",
  "key11": "32yfFwu11U8qv9AbWy7HCJLZ4inHkmY9nvFetw7KReUyPKC1CHe5HHt1tc1iEk9YetS3uBJDzBRgcSV6C2KCQjzz",
  "key12": "3v529x13mpt4MtnqSe2SEsExtvPUCk3JGPHrMfF3YkzNWkVs2FAMm13kMbb3JLDB1ueeAdkGeHJVGw1tJ5YXCTh",
  "key13": "DQNxtpvh2ZkPJBim89YazmR3ASSB399L36G5bdgfjhV9NbWy35n3Jgj8arKJNCFLZfoWfC6c59HWFrWMKRMtGTQ",
  "key14": "5VgSQJ3cQuerfkM58eKLiWg1XBs97LTkaQX8n7CETRTNXQvGmyZbCrjea1XN4nfJcKr8UHaQEN8HcuZxCAyCVLCs",
  "key15": "4pCckVxq5Bq5EG47NnvwQvXeD4aTDL3n8NbZwcFCYMMUaCZYfjPo2TvAWCZvS2QNXsR7U3j489rc5oWcCsMSLsUa",
  "key16": "29D4dX5MA4iUzFQFQpLjzxoCLaXddjrmH7wRbcXqhUTPBeSuqsxLYUTKN82ZsDRR63EsgbUR7rwgRbgbFSrb4TPj",
  "key17": "4788K2pfFai3yaen5AGaJhQQW3BRPPHtC83Grb3egnfzhCmX8vW38EyXFYAMFGcHs6HiBbi3oyqddLXcEL8qE4FE",
  "key18": "2NQwCWKQ8VZPRdBqRfQKXqp8gFKDEGdmGhRpsgJDv37CVAi6DQ2XPkRYZU4WWnip8puMWxSYdY5NvFmH374oeSuQ",
  "key19": "2uaew2pQ1UNBUx9PRJB2wZgaiWZnakTXxW3PevJPafvkjyEPZbyNR1TA1cbezgPjjCHtpPX2nsuicNNQARjaiqYZ",
  "key20": "61SaJtvYdjEQRQoME8uBQqE373Vu6WUv1Vq6YEyJRis1qyNJxAgtpJHuENop5TC21rhbMxVzvEzCXR6GGgCE8gso",
  "key21": "4dKMay2Ly24RgGLbtzvxY9viZmipnXVSu2WGcHnPTZGmVur51gKjR93J4sg9EMLPj6S8o8qi6DShccwJQHzVLY7m",
  "key22": "5rVPivbjR5sDaRnMcdWEnXQtBjCR5T6ckf3PhrdybgaE88H4wnuyutmEc1DP3k3nsnkmxixE5ygd638nERY2XgT3",
  "key23": "2ossPYxXo47CaUpPARa4UxsnF8fDPwnLpNy2xJcWkpa1K5EGWbTS3wwWDsk18sfTLo7nboLjioRoqzNeccEd72t6",
  "key24": "2NZF318ekjWc1ei4euUHDHwL4Tb7untJTFF2THzKJ7oKT8MS3xXEe3r6aGA85Znvwzth1kHeL2KN3acbEh6uy6tB",
  "key25": "3mwZcd9MB7oVv6GfEDfaznMMPnCJ6LPDJcdQwN1r8vMWFzKAf3ucFd4U1iuF4yFvgLdb5651g4nbHsYip9fn6K7u",
  "key26": "291TK75eZaDBDtnesYsuTAUGCDoMvywm4Cm8YDkEZ7wyKgpuHAkXfkhuFKvWwqAStz8fqzjcddwrAbfKhMY7Wj3e",
  "key27": "wgCp3yFmyqLwFGnViQcnF7H11yut3C9b7TYMPSjc6Dza8oYSdstVyJ6X8ZNCyzNmTfqzN2GJkrfNop1P8njhtgV",
  "key28": "57bBE585nfk9LUBmw8bWp3G6LmA1kmLzLQpxa7E27dkyKh6F6Hmo2hpCJim7x6vR2SrCwLn2WLirsBmGCE53jp6b",
  "key29": "3Qz2GSQG9rMdNmr8Bom9xQ9fmfwohbu6yo1wCaEQV4LMTni7BjHZKYuofHeBUx7kLfwupr3AM7TEVsZHsgtkyDMB",
  "key30": "2HTaoJ64CS8GxHHx9jGnDbmPcw8BsRWGL21uUWGHnW7RXiNzdteibLccBrNLPV7w7dEp7Gn1i6YhT3BUfGUtBdJ3",
  "key31": "rijvv5dkg1xvrSCHg9FMcS8i3BoApeKEUZY5B4Cb56Ngfz1zd9Nd7RVYLR6ZvfMUjMzAuRJwScYs15NX78DQ2gU",
  "key32": "o2Fpiv1VmwEQGHFQHrjfJrgLq5eAM8AyNDAmV6GxutwaYBxnS9SzekScgqXFzaKXD8qbpa9vm7DCCLNxCmP7B27",
  "key33": "3HScRrW1Vy8jz9cMbXNL7X1Ze5UtvgErbNeEo3iG2bDCYQ4w5o7Y3ZLngZz1CedDXb82WCoR4XZYhqUXZcj7pcNQ",
  "key34": "2G2NSDFzn4krSXxE2VFfaLDRj4QqhrY6dDV2UQ7orpgUJAKHkuNmMyyt2noYR5BMCtB2Z5ibBN6WYVUKmgz3eb4V",
  "key35": "75f1LV1yoEseyXRtkWe1zzC1wcH8RgDvJN5RJsKu3RvtRnnHnreAja2HPzLMyiYfJfA2HiThpkxkJwYmi3rPdFP",
  "key36": "vDxExV7NaLydBTrYDs4ESTZnr3c8FEfaYreCJUpWECdF1XLjfjUdSGtAkNg9LZDUiWEavSLebfwiGSjN7fQG7rp"
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
