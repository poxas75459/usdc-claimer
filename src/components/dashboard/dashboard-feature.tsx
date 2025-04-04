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
    "2zAUNDicCLtPNFpefeAyRwt4WRM3o9EeNa42HYUUqDXa3HPn5Lxstqawb6jhH1bADbyyRCS7MFvwX29GKcWgUSDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXsGGh12aKRBVxLTznbyqaPZ29nvCMHbDPs9ugxn8nK9BRJ3CUcv1kp1mPcphFogG9QJ7pqekLAyhGd3igejKyr",
  "key1": "36qYBux9oQDTjALi6BbAU3faXi5qXJZmPP3RJWrvSibV4VQicEoS2dhoacziRycrkjxUCDGyvdXiDozyaEvTdPKh",
  "key2": "2yhccx4oPSr5W4V7UU2hsFYoEtWbstoeVPRoCq7rSgtbfESXP1Y7gbteXEtMNerUC3Ucs6x5khK7cz36xxeAxf2f",
  "key3": "MmcsUs8pAz2Fp9vpaEahDPMUQy8qfRGJ91RQ9pvs2ohCA2CWCht5NqNVvcrMrWU8gaHtn9WcswmoWEfzsxhVSo3",
  "key4": "4vKyMFEcbq6WfYsaQv41nZfhUrg93qZXeu8LubGWrZeFT1mSPCaz5JtpNMeuMqr33TxS98h3AnTNJJdd1XmU828o",
  "key5": "4XrVqd7rrJQT8HWbP1xjfsAv4cs1VEH9ebyPoJSBDiERf4jnaoSGBcujdhNV6uV1FvCpafxxioTpmtNVoyTPX3D2",
  "key6": "43Z6BizNx5b46u8WvxyQzDBgV2DJ5Z5Fjugub3CYUS6Kjwjrmqmvckya5i1GifwqcNf4RUSzPJ8k3d4L6aB3nUP2",
  "key7": "iNkqxmtRJFNqnthEAZF3pjVNUSGZJjK6P7dgbW3fKpNk1i1AqD9kiZFPCPqAbrge967gFBaxDYF2ydeXHaFebN7",
  "key8": "4MFgrDUy6EaeSVEQkztwm51UQDoQrU7rpHUE1jYGxkRDY8e8D8UMo24Ku37cRtpUy5jwbUfqJ63Ms5AXpKbb2maA",
  "key9": "3CGhyQ9YK4c3GYBY2ZJGuPf3i6X7qRm24cb4hXTvhvEsQ9iSYwyCrho6tPEsDFqHpQHGoS28T65NcQf3NjmDiJue",
  "key10": "vaj42fkRHc7kRARoNhd2k8X1aeUYPbU6qF25DNzkrfyVWJ9oyPf5K3pYRpm3ZBJASeQkuL75ZKGLL9YjWpAxFgt",
  "key11": "5tCQpwTim9gjMceV8wswSSKt6RAQxPEdKmi2m6yyc8Hfbv19tLrucf2TugA93sPM9kDyqqFBtsiV7pvbHE5H8Mux",
  "key12": "4XFd8wCkADYtLABzciquHjEVmwFVPLPR1NFrZgcNdbwcdN1XQDNoEhvfJEQA26chKvajWwXz2ajMW2jQm4yRkrku",
  "key13": "5ATzqCoBE7wHAkZHHratT5MbmjRVCCFq1j59qbFa9zAckvgGYgwU86e68GPcGPGHvT9JhogotRs5L3pCegLUCi6E",
  "key14": "3K9LEghevodXNdvTQQiXP5mUpud6WYMw96CXk3tSuJr76VPFTeZ3KijvvsYnRnxraoS8iTeGt6bxpKRZGgWjfjWT",
  "key15": "4zx5EPyvFbNSoDdn5HgtEFDmt5zN3Nz4CkiqAKjjygyV3eUGjjDsbkzsfNmJE5NG1myN5SN7cZb9VkYYnR96aJSu",
  "key16": "3EQ9teAwAFTLHUbzRAsnDDsy67gLSemvQ3NniYxHXwSFGB5Q54MM46JXnSSgN77n3CjhxLL5PXhJiapFCFr4THQF",
  "key17": "3VeBwxjnL8reKSor9gkbg5YP8QGSncqHDEy4QDBghqLZb5m5mBQCMXdikqKRdgT7TmaTpBZpsd9GxBXCPwnaC8zw",
  "key18": "5naSBG9KnuYqXtgMKqaY2614aR7SAh45k6FfDKXRWdJRmeKckVZRjz1LZ7Jx4y213qz6rp2MqTnnc3D3qh2J3kP",
  "key19": "4tBCSCEtNF8jp62ifJtovno57zgVVUWAFfdh6CYMCFvkgfocnUVfhdAvvnANMTEAgXLzd3FkXGe7xBEwLgXoRAuE",
  "key20": "5ZmXrKeQZ5gBLGYsBS8QV3m4hD6Td9d9QLZ9NdzhZiQbsTr6xfe1Z5TVe3XoUQofBt14qx1fG5RCBefwfo9dZ2q9",
  "key21": "5AZAHSW6RZwpjbojYA3inbhmLJGuHptsaYkVxq9svWNrdTF5Rq4qiv37PkVEa6JGJAyaB7UMsEc66VjRVoRoj2Ln",
  "key22": "3DaAXf9FiR5twLE6Z9jMJLM4SZuMwwZA6sfVFnoYP1EWY6xH1kGwBecVmGaK32753EmXp2br5av3vYUgcDc257vz",
  "key23": "2zQXSu7xLRxuFQ9sH4Xv87VRC8SnBYrw6sYXLJaatsd8NWQKwxU3HHd1wVdYqNchSUjBf31eNqfQeRqE1XPVX6Y3",
  "key24": "2ru7DUe9hEyx5f5FyNmipHnv1zGzNCqLc4DmKKFZwkBEK8UpRcjFnMjJPBiCsTVbrC8eMtUotxMwLcjujFcgZVcW",
  "key25": "396TqKzKJVLDjoW4QqfwpdNLa484tZYqosMBCuChoxFPGkQfmHh1hSGPPnRGWRJZrS1Bgkfum3dtZbhX8u6nkdqY",
  "key26": "2ZjaeK44fmKWUCHnLufmNwGTXGYwEgCc2UbmzG5YhJXm6DAFyorz6LnkSWTLmUhjxCXBRV5zrpGFMVXTki1mNXbY",
  "key27": "5AjTybXfvupArqVFHUsDG89Bjv9xAxF8iEx3rXGbXTiNz8jmY1PJh4m3V78P1vFzpsR3qsRiJWFVsQ1pt3w3UWw3",
  "key28": "3F9E5F8cwxFutz4BRLjRaAtY8XNy3fKiXGiR2wJUzSxGk2mEgo938fDd2qPzEFF6BQUqW55oqRF2ogiAsmXPZMDr",
  "key29": "4MJ6UGxhaLSkjzKQrWGfBcJKasoSVVJqKVJ2DQNhpQyRvzcjNZdK2oDoeSdDc4JRpghm4rx2Z7FW5FuHiqayA2e1",
  "key30": "2sdL4fsVWYG7FCXcz1E7WtcuhhneC8ysxHkbXjigX4BPi98EhEjDTR5YxUkau3cRZ8wjRPi4c4sbLopC9QQf2uPh",
  "key31": "vH4FAxNESUEewR2cbf852c1smmTpBmUJcaFaLzgcCrGQ34UytJxHeZ189aCY9FZfZswXhGuBG271xZ2kYYyFcYa",
  "key32": "44wEvaKPmPTjx8n41QrhWutww5zoKSiKe2capKYpK8nnj2M7L1niuN5prm9hghBRXihA9PfmKWpfezXd3icT7kXN",
  "key33": "2hY5n7fQLs3csQVsQNicL4Kemnz81hNL3bTXaCom9QvtnHMbQ1oEiC8jcBamQWmXUjV9ioYEoAJgx3xGnxkdipi2",
  "key34": "iTtU9G8NDQUnYH4kV7TScBHbPZG5czH58uhZggdS1DUEQz4HGApMozx6BxvsXmCD4u7Z6Z3KoGSRngminhjutoT",
  "key35": "4WwY34EBKG5q3MHd2bf4MXmFD9mmFjvBrWbztpk5LKEAwZ7cbd9C67SF2EdF8UR7puxMh8wpetYzp7oHdZdeXqjV",
  "key36": "5BbPSD32LgvjvRCzQ8cqZL48pmoDWQVcFQkafh8MjyyghwSCxv28G8H6j3FvCndwk1PGQLMY3rPzf59mg3d9tJmF",
  "key37": "4viVdqDS8Vi3xpN7p4sqTpfD6FRhLRwPvvo27xU1Sc4Pe6ah1LG5DJVi3GQ8PNxTe5vGV72AHv8fba2a6RW8aGiH"
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
