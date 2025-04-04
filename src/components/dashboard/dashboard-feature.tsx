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
    "5MuqaMwuXWZmiqiiA2c5MKMTHLsHWyx6B4yQDs45eScaSAccL41tGYkYQzc4WoAA5GPfhCDj6FMUGrEKpfisWcnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ybpp7LHvRqaGNchyi33KpGjmbgarqrRTwhAmR3HpEmkvrU5h5eGnynZcPGRDPkncDiGxGz3xDqoJMhamXh5VvC3",
  "key1": "47NQvxP8kvpfe9AAQDSmJPU4a4Xi9G3t7UqJaTvc73zQp2h9Y2zip3GpmNUztpDm5f5tPcQkyy5XbS3Btix1mRbt",
  "key2": "DpdWkE34mU9T9sEZdeC5tQsR1vArbTtDi3neESd2SwU3y59mA3uxGdjL5A9k4LTnMhikAQQj445dwYEcxX5hgih",
  "key3": "5z9UrD4GfS4ctsedVT81JMYRjhZgqq1BPwSxVAibSv9n1mEPDoLyQhKLrBamii6tKqFALqnsibJTWMxVcPqqapZt",
  "key4": "5mNoE1nMX8bUxdiM7VfcoPHdYyzvR87KN8pSVGxkNETBrHtunujvkjeQLLYsynv67HNxzCMbdPAvVvX7RQNVwvV9",
  "key5": "xfusukMKr3hfRUf12D6YGBUSRTnPh4hfS3uP3XU5Su19R71nrEyY8tRrjXrEu7K5wM3MiEe1bxEkBF1ogUTQ1Pr",
  "key6": "gVu1QCDEGJseBECuKcPS2TiVauPoJDCVvtjtXHQrU8981u5jVJrdTMoxYKqUUhp9T8hqC6LZvVziLeByFeV5MMk",
  "key7": "CkW85R1W5oLd7WsfxT8GQBCBxi8HmJq2iNAmhbFRxqMuARUrMSwuNeXY3sENCqHpzabp2wsPQNv9Xy5y3RsJn7W",
  "key8": "1uDpkMnTeXVNjHz6kGdmqMwGk4ezWbwjW4iKsV9Jkfz7GF8xCnYPoUKYNtfaJ9Ma5uRRknt3Szfh76NEsgiTwZb",
  "key9": "3pxvWrv75rpHUayiuRWrnPD74e54VyrQm1sw54wHZqC1kQtHhp8BhaWm77ihyT9T3dFBmbTPjLszqMhSHzuynzrm",
  "key10": "4DFuoLD1832ntS2p6mE6ECrTmpdmUTnKnj8J5KMzyrcWFi6cWQqi8LoQVhRrm43N4isXi19MBWGAyR38apfk5bjU",
  "key11": "WHpJFkexYZZHhzQ9nWk3uk2FmogWwzcYaunTwv6rDPCjs3K8UVEyYJuQM2c2eaB2TVkZJjCojFppse3wWy63ken",
  "key12": "5gJaktLb3cSte2gZSCcrz4cJevD6soiSDrykceZBeRwds87AoWrciYYVUXHnm4Nw4XJHqerr4N5rt7joqyCXajLc",
  "key13": "5XMEoi8ggGLETmMLyUeVVcWBc3NcnJ9SMeYSTWiDP4KKKrLBdaE3HUiyNoGxD6hT2U8cLj1eBhwEPtuu5BGrmX4U",
  "key14": "2hWJSFsGYyA9tedoiQkjWeeSd1Vtxqv7RC7qhvk6aCddQJrx8y2J6dHaRk7x2Kqo1RxeM1Fr7WYNnd81kNfAuLHo",
  "key15": "65QfsWoFaP2cQBQwATaZq6xTmPSTXvBuZxvNrtFqTaMVsSoYumtYEhccWutuxgPNVLg93EyUduH45Hk5cMH6WW4u",
  "key16": "4RLfuaGPizXBV7xTSVBmRSGHyTrqdG9paWajr1P1XpLmQLs4Q6wfjogDqhSjkAasjvPFdMbFmKDuV3y6UEeTU8iM",
  "key17": "5asqGLSASpGiDGf3KuBnLrA1JwyDuEaMBobErqb4gMg4K3AAY5Jupkgrb4B9ZqzMRm9z62Ts9sVjMNkfuMcoP88T",
  "key18": "4bVCSBhEEajSnnoF9e7EygjjpcZXz8spz6JLdvdXNdyZBwGbu6SZWkbQPTmbhuJbBJJ2VTUVCqGTedWWKPpohzUr",
  "key19": "5YNEYW6x5tFXH1Rjms6ccg8x5EzNmrMPegWQ97wN3rf1fwCe9xZWAvxtt2hoK943CCGoFvfZurstqqaTXaUSBoGV",
  "key20": "4yLb7P25D4yKv1Cp9pSibFLuV5RjYVVPAfgbP76LVXUVtfhcbkRF6tVs6yxVBoFdPLfTiY6mn6MMinESLBu9s9fq",
  "key21": "5dyHVtn552hZVLDNjP1RAgRZa1B769ToBfjh8AguHZLRJ7Xs6BRs7uvL3jesmFJTYmo1dLATBZbKBac5Df5wzvRT",
  "key22": "3c4EJfMXyRxoPG476UYa5VX4QMstwEUqnMmeKV135B1whJYRaaztW7yLqre1JVLmCYwAQvjSm8rdqModcntyXBhu",
  "key23": "5TVwHXZouYrBpHi42Ee8oBByB57S4EcQuVA2ziZdmcET3nMBHQMrVDjCYE6mkni51jPJ38f3sejfnMYrkYfm1j3y",
  "key24": "5aPyUHi9G8AwqwKGfRWmtJXQaZWgALWHUvVgUiEsT3D7xv13RPMzfTSVtyw1twFPEPpVM1bX1rqxRPtWXm4KSQW",
  "key25": "4H6UUvXpuGJt5S6QBqyZWnEXApcbXoxq437bFM6CktMsXrie9Svcu7dAhY78rFbsWrMna1KQMLm32R5gaymHr2Kv",
  "key26": "pvUcv6QKpk98qfX4DBQxzzNn2FVgbhD7KxbyXtt9v3EeSQ2oJoasTSjrpkk3KGmrSwcdpduZdExC954pzTgU9bs",
  "key27": "3vtJPovPMba2CBoj9Vsp4ezuEVsA4Rik1EHxELfCCmthyDnGvUzXfwU5LHk9g6G6C2CEdJzpfSEK1ysZGuY6kVgx",
  "key28": "2xGQ1xF2nLYiqZYad61CJMt96d5TpADXg5xwN9QqkL3wNis6hNNX5Nx5Kgk3ts9vrVXmVakWsVPwjXFh5cG3VdoZ",
  "key29": "2PLNYbycLKWbxXjvzWy6UAYk6DczRexD9hxfUQ9K5WHeGAnUDPSGzRyZ2j5aQajANUp7LE6qdfRgsBmtGCr4vdVc",
  "key30": "2zPQA5ks5MXugKiFukCSr8hkj8UuSv8ycDFMfUw2u5bVjkFf2XNBFsnaw5eZWFNrSTG45kFCPSrUUFrGrfmJsvpe",
  "key31": "3kDjDkbPumw49nP8B1g8utXxdY162ZLvXG6rEwVwKwgU8Pqp8FJeG6y4VcmVUybyygoNCwifStJ7N7RPJR9wjuUj",
  "key32": "jAb4jKcRigtTaWxrWrW2hNzijtxNeJBRDzxX2dNqjgbTLBed5R6CmWB5Jyva8aitWhVs8eih4gUpe7vSyjg5n8r",
  "key33": "3xiMcFRL5oFboS2GPhtgR1FH7Mrofwcc3cVn3PshRhmKnmrYcSwngC4dAMako6jgZdScsas3sPJJS1XVd6X7Zkqv",
  "key34": "59bQNxi27W8Z5W4AruWjAEpAorYgUQTrfTMPFxSjuGZxht6QQKrxBjmCunPeoz1h9wMnQ2YSFcjkxxoGpQEdZEMC",
  "key35": "4hUeq2FaWQDAuMNGh4hybvm4id6n622CuADAGurVuL95tTFz2gxHZYHtXYeitXfFneh4NrhVDVxHuJgbr8d3cYN2",
  "key36": "38wPQnK1YVQaYnyLgeYEtn3qzRNTqMuBXRzHawMysqeY3Jjqf8oU6XakWqCaFwDqMjF8ZaJfxLXVGjGY22gXWqBS",
  "key37": "39MkS7bmQUHwhbqHrVgub4T5jkq1KwPvzRzX7tJqTwJePe7Uz1EKcCVw4PeYLF9EK6CWSnLkhrd95nCc7bNnhDEB",
  "key38": "3jGCrK8K1e5wegXAPgDTi9PgnfPtKsJwRrsV9jNTtYR8qvQfaXyQ4yB9cdpzbCXfELd8cQGukiHtn6jdEWfTkmGw",
  "key39": "2xZFLub2SUAkhDM5ybmFf6Vn4aLwjtFXa3rYMS9YYJHMLV1cLxHosNKwSKNwEHS4ZkLDtnU98Q4uab7dVJVERR7L",
  "key40": "54orEojZyjSCQpENDZbRReXUc3snT3JoNJGTRnUDQ823UxhvBeeRFVnA7TabjsSSvj13qyHDUPQPBi5h49Lyuq9h",
  "key41": "2NRtbjE7PD2e12ggTP2XkzCVLiNwy3BvBt82VWGPf88BAZ4QhpAgrUf8c2VxG8wwyYrtyygQ1mzwgWhwfw9fbAdh",
  "key42": "5B2fxgy6aRiEyYBKsCZCe8NmN4WpZ7kHFidTWxFdcgTUdyug4zabBBMJ4h9dJcwg7zTW7Gb6aGcg7gFESTFMXMP8",
  "key43": "2bihsMHkSRyyM6XMGmg2EJLtPRkyzKsY7xdg4sKJzoQkvRvqnKKtNQwRDzjL2AWDFFQBBsebRpExngZJe34H7zpd",
  "key44": "42DmszNVVBBT8J7bsVqcCmfj6QSBfpXqjBQvwyWTRJD1bVe9SQW6dViWMHnNR4Z2vymUQpyTsyBTd6vCJcsytv3g"
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
