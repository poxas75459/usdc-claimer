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
    "63TqdBMXEfiJevAWCgm3gRzHdHrm2VfrwFuF8mGx4qYJKQzL8gZSsUZXBUw2V6N6f8zBLJ8s69fQ2V2u6kwbx3H4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzgopnRM7KeyuquMRvwGNweRuobq8uyRBiWYm65w57b52dzm5YdsPVhoHh2YuSWvqFuYezM69ByFg4BFpDNYqAf",
  "key1": "33eZrchUxm7m3g5LnwdU55MQwz1UDysCRQc1gz9136e6sW84ruBEiGLHZNhtTWpdjY1RNCZkQbWD7efDwUaAsY4b",
  "key2": "n6eBNGCN5ucT6o3cCKWPXwDw4q2XwZxAuFd8119ESojqY4519wNm9oTuRUVSQXm5EbCMDyLk85wRiwWzagYUEhZ",
  "key3": "44WgVMhF3dQywXSV67VVfCyc49TmGggraREv9xGkAKcVNNL2xuGVzxkRoRCMb2imi5iCC5XoGmPCeocgEgqN45FC",
  "key4": "mxEuTNZfDxzkAuyp4B2CvZHTVMD4XGMeh22VSQW5xk8wmrZxfGkVjdhJtUxSwF2MdYKV17o9QP5ptrsJxNxyCJZ",
  "key5": "3m4435RKXqinTZYdrcf5rM6WcNgMK7JcgteJzGPZxKaAf4RLYAvpdqhhQzzYijrfp9FPuiFjeFPnCHsNCstyH3DM",
  "key6": "FbSBx1pCMzhsAe6cXxtntAKvAiKdXsqvggBUEm92cYWA4W2wL8rxawjXRCWJ47n6gDBUkWFSCJE1tSWrVcw2JoJ",
  "key7": "29xKApNBWjEi5z64FLm947qaMXJ3WkdPrUeyqqyHTgfL5MUHhrhqNhGfWxadLP7uf3WEZpqsZuJttVPA2ZQXzh9D",
  "key8": "36vuF7Q1TgXkRgKWFJzV6pPNrqChpGbaKdrHUyZkcZEQEs6TUnREzaEmDKPMUcsgMWks8yoBaS7dDKgcyWbYDftS",
  "key9": "2dX8sXyKTD4xDcDGahqdrVuutDPfXQ54BgwCk7TP1nVgU6kvCce4RvG8PHQEcuzytYgWznA3XBRZJSRKoURPCeUv",
  "key10": "4sb2vWCJqGq8KnRxHhMS3h3ky8eqT3LoByrH9X8L5FaPhLmp4a9nWwfGrdYq7SN7GfDGwQd4WFS3BGoFnjsQNVUv",
  "key11": "5MYS3g3Yb7uFsX1SsvbJAYVo5Up67imaqZcY6WUvoKzzgUWuEMrTBMM2zmH6stZvA5G67Xb6zxwkZaKdPabnfRXr",
  "key12": "4Y3SLUhmsFmH6gXETYfPw2qTeye2QXgr5WU4dwCxEiqP4e995mjH4WqFHGGR4fnpiUrEvEeWQYu4x61jgf4drRAz",
  "key13": "h22EX8AUcsf9RHRN8drBmj5BbDEb73DY4H5uq8HupsJ8jBMt1CSZ8QA3wRWu6hS3qxKJTnKKnRPw1QNaL4HGxFe",
  "key14": "2bwqMCP1x7VddHcvoAgFxPNc6hcYzgTbT4UgkM7EoSzfKz6o5Tt2ZySXBKyzscFfPKyuERrHpPdd3Qd5dhhbgw43",
  "key15": "4WuKQwt1wfV9x3r8agJZaVZqWPoFoG7dxHiFqRpQJcYFTc33fAkYu8gc7NvkPkAaHrJS97XB9WGRiJyhfj3RJ8R2",
  "key16": "2DtAmKxWX5WgAX3zVfwoSMRnhw4wTr2kNpqoTJa2XBzy7quj1NyA5doXMXVkyJEbbTH798jh7n9U8DZVJoDTEtuW",
  "key17": "3FmC3gU7s377mxo2q9CGbSwKDeHqRvidanWfNqBN8s9NJ6ttvss5r6a3zRrbMcMn7c42gTJJnnCEaSH11RXEbWum",
  "key18": "2MX7GKQb8pypcKQRAaHNVhmPH6AUZpGodqhwTSaTUw7dmWq5V9n2PD4km4YJTjWiBgCHHzjCvdvTHwJGAUWkZydz",
  "key19": "BKMYcsH4vtGoNPQnj8cbtRfsY1fQrj7MDNFPHkehFNpsShmkowx5RAjGTpgCC8tg4xXgUyyo77fPfvHh8G7oQBS",
  "key20": "3BiQ6U2SWwWs3qjwR59TTqHVaGcG4aCYbiW3c5Ef4UdNxfSUT7LFRv5TG3EVENivX6qEttVBB1zGjraoEx2KLjWM",
  "key21": "3Mcq8LSHwFGUnfmV2cxuaXGuqzfAuC9fPzgd5SRUy8nKaxTxA9FF4D44HXU8LjN9kBEUt5kn6MxBHeE4voYeKWps",
  "key22": "yGa8GaPMvDxj1SUZS5NpFcLKkCbN7Vsfws6UKXcnXyDznUzyFSPLP7NtHrHS8hor1SVjdFs4Ka2JSWmUjAacjGz",
  "key23": "5SbJJt2SAXhXHHawPdmz3xy5sFngen9ty5LWhMefqZxApnrgaKS8qiF1g9QS9GcSaZTDYNRUbngS4ziMjGudyTvv",
  "key24": "3SLhYx4uaZDoRg22xQumUvCfz2vADW6cCeej5HL7WpbF12YXkNSDC3NoMDn6jhrUZ31VVasv29fRE3XkJN7bdfeZ",
  "key25": "3ZCsDGRaLUKN6QGkBCDxDfWtwnjaRh1S29UmZ1zUPouHWv3b9ZwHMKsC59wQCUvuVE5TaswbShVAYiB4gibpKa1W",
  "key26": "2AQqL3byS9mwVohBD9vAcVEQVthdYH6swU7SHK6Jm9PkNytTwi1JPLZXPsQ3bSXDMs3qRJXmJrFyaWFLC7HyUwMx",
  "key27": "odnz9d4uh4dmXrn3KtkzxYietGfBsUAi2qs5jTea8aMcRWvbjsHDiv8Pb6zEdTdtXArExps5cdjR9Kw9JmFoALq",
  "key28": "5jHsim7qf22md86xpKGYuBVicrxn4HQq3zb7r7zRt9miuCcX8xH1VBE4bAfGQHfTdqLVEjsybj3LHBXzSXJJFb72",
  "key29": "3c8WGDehff4kpiRtR4ewtkkfnoLZuxo9Ty2MJA6rfUoqPMETopaWaAvf3sqxziDYdW9kZJSJoWTvaWkzGeXKkghC",
  "key30": "29NxouqoUybSDSDdCVFgjc8tVMVgKgFzdtUAPHbgRA9oTyDhUMwYwaq4f2wjuZHpA9UY3Ca56WRMjo5LpPVgr8Vj",
  "key31": "dN1dLQdDZKpYzCimkh4KnR7WdacW7jsn3f64d2NCr7rwjKM3UvfUy3E4Rq27GHiZxmhyrdzXuXCpuBgha1PJ3Tm",
  "key32": "4x5Mn4PqM188u4YHygW3RsmQRVAG4SY2tc2BqspGcjS67GN3pHSsdm4ixUnSc4GbF4HMh5Vvnpk8GhREHkia9gZx",
  "key33": "5LA7pdPGhgzw9bKYZTcGmUU8UEzASyXpjLXGvHUmk64Jgt74oxi9LpPemhvBR5SrrgHqcMy3H3zz9RueZUVpfGJZ",
  "key34": "4Nbh76mg8DFyjSsN85SPzU41Zt83DMD4weLMGoVoaV5sXofhGHm1mY15wFGVmurPWJvisdT2TtpEbNerYxDbsDx6",
  "key35": "3rC4u3jtodDd1ng8uKrP6bN8eXMLHa24oXZdb8zzJmTWjJ17movcZ8mima7fdm1sZfyDiV8C3S8rT4zJnwPf6Jw8",
  "key36": "5tL2sSwkXMx9D3VR5Cy6AnYs1rC1NXNtGnvqVSCD2rPY44rwmxjTokpCyABcUPq9R8gsW5HapaEumNY8tjYY1b28",
  "key37": "do3USNkiCeKdyZ1dyNCACLgKK5WXcUUw7YCrUGPQCebHBQ5cL1N18oochRAaJnqEgDAS3S86aMjfrM136HBCpos",
  "key38": "3vZsvG2VDcskD7pkvujqZS4WKtaDuenYyNJX9N9Rh2bTwsJQUDbUpc9XqJmEBS2ou7dp799CRDvnSAUJPiH3cfJF",
  "key39": "5tkPtphptdMcirjYDYoZmxGuEKkxKeqKvzdu1XoHJ1b27sMjSz9hsY5ZAFe83j9zCeuA98o74QCkUzH2z42CsbT",
  "key40": "5K6nsVpbFhwe2K9hiNbkdEkXNMwBJhSc89Ecq6jZjQReY34nmPdByXibyBQyBExTFzVWT1fTdiWV7VrfyBd2zY1q",
  "key41": "2iq8z3Y3Wwapa26v5ubjQJTy5cN34PakA8J3Nfqbh1zxZksfnwio6pYmFjHH98A5DV3KtcmEXLumcPmpCXHSH1jQ",
  "key42": "4MLfTgouHEArtBcV9HyFx9THdiHJtuegCELKe4aKPHsoY6CWiFoiVDkKhxq3u1StT6o23USqYioYC49Jv2UHgKaU"
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
