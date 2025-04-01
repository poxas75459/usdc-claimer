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
    "kHHS9m56K8EtTsgU1fJ3iNUFTs7jrrZRtu7X3G5KLK5VU6iiWSXJSMaLo86BpkbmzPL7Bw7ktP58jKPD3DwSEq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAuj4qvFrtvwvLVxxmbu2nv5VHvnJ6Teymhi39xMNpYpYAwc1cdafK8xe1ijyqVpjco6bQ4zPhDTzFYAgY6QneF",
  "key1": "2CtL6AwH9m52iZd8efaKrA8oyLvANRCPY9hyEH1WXXjwfVortd5iCnUgsmv3U2tUKub5ys16MrHc8o9nMMGByJ5N",
  "key2": "3tspaEvVRetHCPSy8zq4kSG9bFfQNQtwezJK2BGgskdUBZPAVf9uUHU13ifDHS7bj2rjtAbUwrGbkFg9tLqPaiov",
  "key3": "3V7ZsAyXrBjNTUWF7jNaonMepRHczjhCh4pYraUsfcFoL3k8xFPNsAbTXP38Du2yfGHTr9Tkp3jpzuFxQwVYvTYY",
  "key4": "NvXJCYDUCCwnqv6ojCRcvMP65w4eEuEfUpcmeGvRWJHbYKNy3U2ajVgJr5wuRcLbEdkU8a6o1CWCUZXmAzAw42P",
  "key5": "49b8iYo6VmSBdndqUSgkXQQaMUcpRnPw7eVt5PV5mB5nXG4otdZh4LdvN9d6m2rnSWt1FsXtPR179oFMLhDRbcja",
  "key6": "52WeTCLLTFWzU148XWWcZMGLPZfDeA88ghgiPHLotR7yYmc5gZtwjFFpMK3e2bSBxryZEWRqMM8VTr9pfKufMToU",
  "key7": "4LSLByebMYBZTMo8MenHo2pmULg4b5zsJAwx6WxqgEUxeYf4EdiPeC31MhmgENhRXvdcwEQkkRf6BVLfNjyfNx7H",
  "key8": "4MBmwkNPmDXtcLL1vnZ2Xm4z8ZTyWuzZaFjM7g28gumwbD3uTdjxrUmg74QbtReX5ziAAZmQBuj1LG5RaxknbVoJ",
  "key9": "qUBwrbX1YuLiRjSHAPPTUvUrjAkTSeP26V81V96Ts2KuhPDmY8uyYFsNeMUiKMyssLNoBRUkvdXQDAyZdmatVLH",
  "key10": "2iHE664d1v95kLG3Qpk8X7eJGumT46gFrLc7VpMcBa7XdeyqXP6kQ8iCXvwFYWPS8LdJbyVd2npt7N7stjP4DwWW",
  "key11": "Ev31ghXmhT4hfuWBFTdjNWBHFojC5zCNqMS4LzUH2a1YgriaBPUJArNdUBnRxtf7x6W616RMCPwUT4BFRTwNwY7",
  "key12": "28Lk4KpfzZcSTsa2tBCFbZNnSdXaEjqsbUYfmGTw6kJnrDpRByv5BXMfRZ5W2H7LkFUWGuRaVTTjzTnBqHiRgJa5",
  "key13": "2cqdVRGuvg8iHbBtMknEG1bjZ6QKDnNHvvUkySbtM5r2zV7Peq1bzEzpTxY4KXcf92MmwqapRJcU33gptsdKqPu4",
  "key14": "Axo5Pq24vvMoaLxBFYPef46uwpQPMbvkTJnUyyqnmQskGjj7XeHaZ7CWD8qpuCukXUNmNV5Hn5PTUfw8XGMRgRe",
  "key15": "2nKhR6Kg19sLck7ar6AcEwVitTefo8vRGnyLipvnFjWxEMzoeb6ghfxnyXryhBj37nW66PVHxw898RvhRsee34oP",
  "key16": "2RUW7CxwhxarhUECJSjgXFySGGZ9QYa326BdTVj8wZyHsxmdAMmj4znKbnWNbZo31YS3ub99Dsf8D4xbaXwwQP5e",
  "key17": "3eK4Zt64UfHhxjxnUVWBdRw2BK1GMzuXsRF564g1Q2qvq6YhJhDdPPTsfEcxEL2fFsvPBrLnxrKPCNzPUrGtxHRQ",
  "key18": "5XqLEt2o38wdjKjcH8S4THGv5MYz4cAzvJp8SZ28TonhHPWE53JajTjMPs3FNuJLtNBEGFH7Z9J2m7swBFE4n4Uy",
  "key19": "2DFzYgDunkdjgJyGe5Yv3cvJPtoHwWVsq2LiLCf58yEX5JjTFL2hx9KmGhBEHSAPrCm7pbCuEip5ww3GcaBjCBX2",
  "key20": "2B81Nr471D3pZi1F2MtmToCQgLZVk7EACr5TqaiN2iq1ognGidNmftWMHTCRvCmSnQ5Ziddidobt9Pvm2Sb5FFm7",
  "key21": "3R8Fob5QdX3UYLWw1ZdXzPonapfbEiRrentHnHECJu6UwFSS71ar1LCV5QipbV8CYV8b9vT7fh4KBpGXAqxztWiT",
  "key22": "3vDacqu9m7wLXoq9LFJZHGayd7a4YCDTKgqHFMrzUdPRuEA9quCzpiXKM4XSWrhu2PZzxWNLFDWho3DwEqw6Xa4t",
  "key23": "ahyN4uqtp6AeigUB1SXcHG5tv57FDf6164NRpQH21hyPX1oFzBR4UAKBkypi6JSPk39EEFxMpFYhzJekZc5Xxcq",
  "key24": "3Gr7RGpcUJeqp9S52LgaKkXMAKwAyzZsH764MFUsmvtdidXrpcW2qxgYHcFRrYvHpETHAmZqz3osbP6SZJVdLBhc",
  "key25": "5wVPvjvviSpqVYr9jN3L4bGEv4o4XYPzcBZrEfJ5NhK7dttCF4j9j7q2tpDxU3Ndd1dw4gMVxQvTdj5whsbKKicv",
  "key26": "Qj68AEkthTKZcUrZuG3W2vKHt3LFm231twJMiqbWFqHXeYyonNyKmbVh3FxWSFvgooBH8tXf6Vzcg1oXcnsuxq5",
  "key27": "2AnF9LpDXKXbPfq7s2zVbopZA7tCHfouPWjbihFkdDrZQ6WYCK4VPgQ3dWGoyExusDNhxbomtUxXDnHk9MxR8h91",
  "key28": "5LQx6dBp6EswwyDFqL9SpwnSxtBXxYBDFbj5YsLMoUZ2r1BdHaXGzijjXNqPdXyGu6Cfx4R481uqhPJYixBMnDAL",
  "key29": "41JCSDPgAYUH8LVw2vcEcqWej8hsHuycBe3SLdXSYySWJp5mtT76hGt54W8AcVPBGAqEdP8uvXkurcY4Jn2Ramd6",
  "key30": "oJsxNq4adS2NT1H2da9Znq3qGYTQGTyQo43dZqALUUaTjYxs7EeAMBA9tcb5yZBjz17tjb3GXiktEwPSXG7WPCi",
  "key31": "38KxrVXbCMdq7WP3cZTxpUVWBqfKFUtEND5HgABstzVu5momTxiK4hQ3tqCNR6eNU7cZdn7tpxzZrE8S15citANX",
  "key32": "4mkcKAz3wqMkands4qeSRp2w95fsYdRekcSRpyAsc8ufMcP8X3VN1NqRyjDZkAFMJ8tFGeTeeMtikkCvD6gCtWeH"
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
