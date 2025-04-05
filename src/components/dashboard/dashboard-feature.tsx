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
    "2mL6skN4Q3XKVAv2TXCopXRuZypZoAsqgJbgmjmHUupc33fQoYA1Ded1qxhH6BaUSJX2bqarv6jAg2FX4t1FSa8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aAA1ZUofQzkfAbMmjhfK2U635e2CQFvqpLPQMvBgmgEgVrJhFgCaiG6R2k9Q3hY95Sxec8vMaPZmKx6zEi8N2AJ",
  "key1": "5uMZzCt7P6KstTPWUeYm1btnzVgcdFcUFeqMEzDtHV1jM52CHV9uDWe9iPCkEuqnKxSH9SsEAsVAjHXFZNkCYS88",
  "key2": "3MKV9euFwoVjjbTSWomkAK8dRMeraryg9nKvpUVLvRZGmksyrq4C5VkFuWDomQFk98Kap4dnCMgAHBuzN3mWDJtA",
  "key3": "4sCEaZYazqioCpDXuJpxWAWwMhQUrd2Wiz5kU9uwtJHeWVMKdCfQYUTXSQETfxur7iNCnzHcxz32FEqsB57jzqEn",
  "key4": "5bR3UtbbwyNNLbZbHNc4uWk7BksbaY98Lf9oABNyWRmFZKXEVhiEPFvZQZv5HULKtpirUkDy2cheAbTUCUSadBzy",
  "key5": "3oo6i8nQnmo9SD8C33rgpfAZvTStuTi95aLPRvCHa63KFnuihub62V9zPakrpdjXwD96yPrQEgKBzJjutNjhGCrs",
  "key6": "4ZEEmMqzFXfp9pVGBsdYC9ZBEQQ9LeuSHgaxpcmYAMMhr4bRFAUXbyP5KMpdN4nT8ikKiSomCPzZpVdnr1q5zJ9b",
  "key7": "5iR8Wz2vFXbrgqfgDc7ZK6VutLC5R79ZAi8w2HaV2cgfMZK4TREV8LYTRUX64GqjXJvYV5q6D8xvP2k4VN1p4rDp",
  "key8": "FykQUtXdgjfWgQVXpPtkfferPRJjbrgjvDHgFEYCFfvefEAJgn79paVDWLEixXG8haDTU1UoTQsgthJeYQqWExf",
  "key9": "APPVQY2RL8UnrKeTkmnGicC2dsfgDW9nZeE2mvZG8pfLyqzADqDXZBBYeLXsRc2pDp7LLecD2dneWgngqfBZSfq",
  "key10": "5VBu6EUPsN2ANtWHQboZPckA68w4yWSr3zQUCARb9yjyHRKLUc8BYe8fkuKv3opL7hSX441jUEsTTDngqonWxstM",
  "key11": "32xMn4mhRyaQ3brqvcKfUNHddnEFEb4J3xAUQi7xn8kzUmux4W8SvZ3uEFxRUfCxeYQQtPum3fTg9A1nT7pKCi7N",
  "key12": "37s9bEaiRAUMWag1nZEXrtk5cqK7Ld6Ca7D138LrGD96fxjc9tQJ8kKwFy4ngMz16MqJYPNBfam4xk3amw2Exiu1",
  "key13": "4Y78PkP943WCKcNNmzdvHxRxxhTCH8Zqq2zjd1qPUp24FDqHgCgpJGiEBNvrTK5KCLgngjz2DvqPGjEPrSPc4XNA",
  "key14": "4hBtiiTC5gVxNgoKNnjMZuBHG85AAyZ2Q93EXid8NXeHJ6bfMTV24UKcGiuvCE55Ne6DiQqAcvnT8zCZTSt2prmW",
  "key15": "rsytuDChvXMU2iVEZ9ZtRRD2kWeVUkuu3nr2tGazztREWLG97cxsWpvKfeag31k2vPqpv5mPB8jJ7rtiQdEWX5E",
  "key16": "2pF294kg4XEj8S7n4YgvjGbFMidxQFH4zBcwkyvcNjgJXib7REoZHbwRYU9D8uomjN85XHuxJ2yrMQ2SnBw7TZRw",
  "key17": "3w86vMCHabXYEZ3gz6qEWd5izJw5ETAAgkkKDwWFTQvXMn5hEWSiwafbm6QRXXsn1ai68nENcdKx8DGjDcenx5Tc",
  "key18": "5fJJ675iUyZLbBWRfEM1G4Vm9LbdCcLkxGViifDCjBEXsJitbhEgooLLGMEZ3qbamoG8quExHorNWFQqWZ4oJyzM",
  "key19": "5ZfhaGpQvAmER9bJwhUanEjFbsqWFJKp54VaW5GKy4EthcF4NWBLKboMy3RkR4x1TrBbACuydqmySmCKboX2GpRV",
  "key20": "2B9rYohfy3jvS9BvowvQN5EmPSofaiDjARFxZRHSdZQFGxbJ4f9ZDUatDsPYpVPoLha2y317c5FdrpeMe7MExmA5",
  "key21": "2XfGYEgZb68dnhmvuhdbbx6Yu7vExHSwCxCCxj1wNXKpNpEsaF8ksKxRpuFBNa61cpgovf3c4vtDqDrRDNF3WeiB",
  "key22": "46E2A8LezD2PsQxHAPPtT2d71MWgPSJVY1UX9eXGG9uoXhLu8n8VQ6Pssi7AZqxes5rXrGiSZAexh9cjSvJUiLgz",
  "key23": "A6PX5idwfFx2iERj7JzHpbRS7BVehmcvobrDmcP7R9g53a47Vz5jzWX51M4HDQ1itgmpGkh1Mc7vQqfikxWxDgp",
  "key24": "giveT2PD4b4JbDdVvbzkVXBRLhi57uEPoRBzB3RhaempqmHMKL1yu5fr4j8ymGhG4KNudvKjzr9XWKTxwtFk6WZ",
  "key25": "3RAWJnvVq3qdnGAR25vKCZgCubCQ42YHAzRxLv9jtvsjjhnugZ7C6JiWhzwZyY7wuBjrKzF4N3EZuBRibSMfMneA",
  "key26": "5g3ibwqCEA9UfVKULmccwP5LJKWg8ZDvSa2NWtfsX9LMUPT3qw9QyuWEQz68oQAowbuv3qUvBBkWKymumBToG2YK",
  "key27": "4GSj3xK18hjafjHdqz9KH5Dcpb6DYcSRxHe7xLEuxftuG8GedfNwq9QXcVtV8o4VjgVut3zck2hQfGw7kJTkNRX8",
  "key28": "2ZBvskUQ4LQ2RADaYK6Cj1S9pxeCRZru4vxgySr3NRWnnBCEMfyf5HqN6T8QrDgFbaohYL4NReVYb7JHs4UcnZD3",
  "key29": "7vAXBCrr6LxgxgjXXySgZP74hMNjAt3RZYFV1XwbZbtgtTEraewq7Vu2JznqNrLY95Wb2eJDiT1T8q5pQXJKzdk",
  "key30": "5Fws9AH5g6L3WiynDv4PMndqbRuLiXLsg7bHombJmww8CQ54oU2c9qrYTAEwoRK1qb8m7NjwXQiauZuM2KN3XseN",
  "key31": "3RQ2DHV83uwHnqkU1RHzQ8JKfCGLjoSQShyVFRHApq85d8cQGYby8ryEaJhYm2PmSbeDFW76ncsJhUZfcmsVb77X",
  "key32": "iQzGLCF5CUUpbq8Q981qBCaUDSdLKF4wvLBMRPf5DFV73yKqnVqcQeURB7k2aVG2nHA8A7smtrEqzBVqMdPzhVV",
  "key33": "4nnw2G8yaQpoT8ALZmKziLSsKQ8hHLNAgtVJs5ucTTTB4h25wR385cyE7fveMS29g7G4nWw1EiLbYakPThjucE7V",
  "key34": "37sBo6SQPKZvdHsrbxEssa7FwLHhPU9CVM8VQmi5mmFJuYf7HecJeA4jF7dAuuJBD5rM67gAtRXbEcxY3A1w9j9A",
  "key35": "23pWfsUYbqsxNGhnmZ8kyUTyjAFTb4zr5Ywi7s1ojJcwJfTwW1Vq4Lqg3w2UFMksnu4L5SepQ7hnUmkduCraUtut",
  "key36": "voEmX4pny4pRvFtURjsimwc2DtaN82ZtL84mpCdzPX9FJbCJSFMvu28XXj8t2kjG2bDTmJ42B6SHXtEi8eeWUtq",
  "key37": "4abBHp5Ji2ZbF4HeJQfYXFPbFkXMRo2JafLZBd9aGUfGhzvBKk7Ve6gsCZF1i8GRpPL7NateccHfP2gV2kiLXjwu",
  "key38": "3WR2U8yEUUkb7za53so1a6ekAJJBGfyZyM8Q6BxfHGrRdFjJNTSQHHtG6haUygLWXFvzBKJCBUymAydVfV59MkLU",
  "key39": "2CGm13mgYsH5M34cQYLjXSyH9p6Cj1THXNJmyKVkm1htmd9rj9a8426eWCfEg7wkwkjU58Pggy3jYMDRFCtMwRC6",
  "key40": "AH5EEppAaphAvu3kF1kWu1J2L9ik8breRqm24DUPfs8vdSvoRc1twWFnWEyrfPA8RSZUefA1CTKtMLAokpAA3aF",
  "key41": "5JahyTnRQna4EFsNCHSHQFsd2Cs9anD2hF9nmmqzXux7fLrdw4AhEpDNRRZfG9qVfhsffDV3d87AcprxqrjBHQ6h",
  "key42": "4uK2ddoLszK1dofWfzZPUyJvV2Sb1ZVRAqh6uDy2RCh7pUJSnCcWpvyUmfDKRmCV913bvXJb2n8WRs4GDJrPvmSS",
  "key43": "599iTzqhJejicbsPBaFqeKtDQyK4hL4t8Kw9tYdEECrCNPHZ6b8H8ocQHVvHkiL2oNQYs4HX41erQc58cfipfE2M",
  "key44": "3GySkzKAFKYdhxWXeg5GPorNP6jZFALMa2VQNHgcTBnxKfg3QJZdbMpzkxbp6QubgZuqfrXkvkrNmUdDz4JL8Jom",
  "key45": "bB2zTgJRtMGTddtMqerp3yfvqPk8P5L32KfzJGEsxpwpmtpnxZTYYFQoCUbUxwYHro3smLoVqUKYGGcgqUWk5r3",
  "key46": "2trVrFTH3jixsSwJ7xX9YTX6daLtRgSXUQRLkQX7yFoY9u5wTEQumubHPPvn2Hnm6AMiVmmYAQDA7d2v96HswTRg",
  "key47": "3iN8kQdB6Kh3BYsYwicYyTbWiLBtzfK2uCRkhRwa61TBX4Z2qdqVPGrnUrTgcod7qTeocuPFS5rC2VuYHfkzF6RU",
  "key48": "3YN78LTVzzTE17vJWs6CFjw8XQ2T1Aa2V5DhRuWanTAU9dvwCGgxSVZyYqzPfSUD2pmduZ9MvSg9Vg7UBseC3Xby",
  "key49": "4kxMAQTEmhLvgvZp8XAYnrL8qowpDLkmkjsqsdbWKPKuY55zfiyj6xWZxTjwngQZjfhhqbZ6N57qoDhJ7ofgjZJ3"
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
