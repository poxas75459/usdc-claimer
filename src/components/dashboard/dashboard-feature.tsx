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
    "39qbQ4XwZ592ZM2fdjkRv1sMMVUgyqVYEwBDnEQZ8j6A757BTJeufpGpagAqb7Fd5txTWrLcqb87uo49ekCMxWqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcA5eqgE9fMKbj9vWri5ENEsdn2FXejRQLUWbbRtawws5Qfi1SByMKYCdyf24V1faegjw6MbZvXKC1FxCoyCpx7",
  "key1": "22WoP8qPMNqX33739uRQDBkBp38JmSehHDqhF18BKEVZqfTBrMYS8Sz1TkJvZubBJA6Km2edRcFidALJfdSRbeNa",
  "key2": "2Cju8xB1VyYHkA3yYCutdophv1L7TigVcPEk2zTqyDGAYsXpomncXadLpjea1wDDRtoE3A43BxK9jLZxgvw2kfdB",
  "key3": "3ffx85GRVW5H6wqdzMZNLCSdUKJmUSbR4i3WgJ9fc4DKTankmzNAVPB8Jbth1Ur8PTFi1JFWDD1P7g6UHuzJu297",
  "key4": "2s4xAT3WJevjbpwNgeRaLzYB9AKUZrTwAeuF3f9fJ3hGeT7KWgvcyTNWCLge4e9cJk4s2Z7uFej2spxwUj4kSK39",
  "key5": "2oLSLeyMw56z4bk8PsGitiqhm5p7SKn71Z6RjDpnYqRv5F23xLCohnT8g8b7KVkyfqRsg7nsyVi7oCpDG7yMRJLG",
  "key6": "2FKDzc7zC46EvB9fDGs3uQ5evBQswRcrCE55R1q2P2R8jcYue8Wpxjr86YxsU3kE7AKhJapLp4XTNmdioTUsEDXC",
  "key7": "3ybwAZnPocw59qLu2P33K9dxFEQocUti1d6x4SXQvPSYsHocDLxFADBHVwJauk3WZ35MreJxL69CbG6k1Th4Lv5i",
  "key8": "2aMsJxHFSPJHNdVmnjhAvYLWqidiStfYX1XJhtMbQQcbXHit9HyhijX6PojX635LEqeLNxxiF6rsu6M5AxhRDbZy",
  "key9": "2xYX2CnaSpJVNqhhcPFmvitK1VeT6TY1iepewvF3pL9YUXfbxncr1GGiueSC6DnrCqBMDhw11TEhmSWs1swkTkjo",
  "key10": "2rTiPtdu9GYjcTXzA6heafAxn3Xd1CmLE9kdYLKAYaUNdTXnKKw8vhM7tsK1nhP2dEgnPMDrUkGsZ2YXLxNLynkQ",
  "key11": "44ezQ5YKxgZS4gG6ybeCigZL1Rf2XNebNAPgwKrwz56M7ax26YPhKLDYf8hZGxAMsNQxyvcTYUsWGCyD3j9hHsGo",
  "key12": "3UxQr1W7GThvjnSNnPQ7XrKZvuZA7FdpxsRUHApJJy8n1AnKSRgYZ5EQVe8YcEZxgRtWup58mxpD1C6GfYx4PHtS",
  "key13": "SjaNK9bAjyGh8o4Wb51JEWtpwT2bWx1FFJWC6xhvctoPLChX1Hj6S2Kxsaasrq2Zg8AeCPpc15HSoNH6FMK7uXu",
  "key14": "YoT6b2hXkL6Ppmb6HsyBh8h4vxhXbjLSD4gd5cJ95vC932CrYG87r4SVGDR545Krj7g94L8nr7dUhAbatDrezZX",
  "key15": "Ehs3CmkSSeVh77SN6FBLWwE92XD1sph6Bt7yFZYrQebvjCkEXfG4KsqV6o31SVgafbVKaysDhB8v5ZvzxfmhYp1",
  "key16": "3ErajCJvXkcAb1pWXPypqA7jskmofFJzwCkPHU3C9NTXaBtkeE7z8MNfPPHCFV3RQMC4VLk8mV6i3XchsUgquYPM",
  "key17": "66MDVan6gFpNkv9wxwDgvYe3UKcLVE3vEwzt2c8LYtZNQJRABmCkbFH522tVeTRVY6sSHQx6y7qwt3dJM9xKa4J8",
  "key18": "4GdPWjkPG5WXQzDzSLwJfg3DfhxNzyMDpAga5LQLSAcbRTN77b5Yvh6D8F6nk8YEfEn1EKeULXdLsjKCYJ8uTfp1",
  "key19": "A9cSKGnDmNcfvdtdV779Lqo4YjxFoLU5yrdZFog7RRvivD7VMAPx87xahgfztxveKe87vNQCZ5Lm6V814oijSsx",
  "key20": "3T6tcaz1exYSn1zUeW5bTRUvcEt9kDwE5dwHxCXtwVvpqURGSh36xrCQiBMf6JECuKHE3L5FVPji9EuVQXQUKaHA",
  "key21": "4KAkhqxbciqXrb1VisGXfsd3RUsEoEXQsu6JZkgMAu7P1cM6Tu5FJVRrpp57WcNLiE84wSFnpKxAqmQzgmhqk11b",
  "key22": "4yJ3kU8aAMByzL5c9reSjYkEjCkc9aju3cwSRBr1HuAbTbcHLH6VRUEQVrGP2kE8AiWyEKJpJmgKcHNcjtDBkQcp",
  "key23": "538jntVnQ28VXLvPTZCvzJuHnyXvmKJPJEBG9pU76937tUqtLonRL5wRLGRZaoWc9F5bGmhnafDQc316pb3VrPDv",
  "key24": "52Q8p65gLsB3nb6PJ5vaYqqG8u2i3dxsxzusS7ZEoYkHnVBKExq6r3KUk91szHumezQroJFbCNGst11F2hLqM7pB",
  "key25": "34kUcpCXMPfhZH7jDEcB38kaTu1kq11n3ZQSuXckpVaJFoW9Jm7VHAvuKMakpyx1CV8cfLPjQknR6hW4DDMEjpP6",
  "key26": "4Vqxhfyoox2qFPCJXYwVJ3n8bKynNZRNnu4h5dFdhorumTeBatpin6EfJTcbP7aSmVUHCvifPiDcT3omVAdFiH3s",
  "key27": "McAgaiDSc53W4LtcQZNuvoYQnD2TKamqHx5yuCucPdYRazscrJacfdyJdXaTCcaAtwfQ4mBVghq5BdW3Jnu8NWQ",
  "key28": "22TwyFz229WvzBFDXU2QeZzniQqu2rcvzJyUbmevANVkdtjDKoLVdax1tBaHFgnVq9ijX1Pcv816hP2VL5eG5TF3",
  "key29": "ST7oXDx94aLdS8U5EU8jUFDM46F5QJcuopVofgPL5XLjxHL8WWg4jg5scVE9Y1zZdXSQktpvahV2b9h3eqykkVL",
  "key30": "5j5KbEw1aE7thjnNzfwsXWRENwHiN1ojwM5P2VKZd8EFNWDEHiwXJV19538Xbbd6UwaCX51RR4NXReD4WRf4iNGA",
  "key31": "2VTHv9yC6J4FfDNDK15ay26Xx9rbn8RGPYA5ce4kLapLfVjdVnVk1g3hDDuACrSUWb6bHmizwPEpFPb6MxUSBwm6",
  "key32": "5Pi1Aai5Ms7UW3kz4Qp2CThKTLNuJiFK9dyzw2U5nXXbKVA67gbHfFKgD6JkGNxe6yovZCNF2G7V4Z2PGkmhA5Rp",
  "key33": "4JXvb3o3dtBeR25x1LsL8KScE1PYzPivDR4afUrWUqnrnSMQvPPyFFG9BYvEQJ8Vy6wjNNMEXmB9pWMZ8zHXVCQJ",
  "key34": "65hXRi14jVfAz6er7xfBRHmfLbJm4eB8r1xwyuVh6gUTbg86GaBZdQBQQKhGBVAnKvCmtAohb6w2TczM2Gnv6qH3"
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
