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
    "2B7ktfF9KG17jnHEwWJBmq4ZE3kumNKGhA1d1FV8XDLTQGQ3HxuQXgdtnY8aopnb5uupEFrMrBLivLRNeFq2kwn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgEKoyjgweMTtZCKFySzjYXS6DUqG87on5ni4dXQxaCQc41bCfCbnSFpCGQeXPzcDdFpraUy6gi6UsbnHJbgVHu",
  "key1": "2rdmgJxhsFekHgnCpL7C5NFVYKLxUjVScpH1yUPf7tLPpnwQ3qnRoBNEQ3N7B4SndoxM5qyp9vpvE1ZYsZyGpyQ9",
  "key2": "3tWA52hpqoaCo8nBSa8TCPwReAZKRoU6GXwr2Du7SvLTAiWH148q6U9NpJzTSWuJ9bcUh9LrD47bVaaFohmRdtTv",
  "key3": "27kDKNaKdPcauQapNumrb5vPQaZbjJwhBZrvKTpf5n3GzZPAYmk5ui1eHr9Ji68YU23hq4D8rSqpH4uw6ShUCdGE",
  "key4": "2t7QtuBS1r86VJNn5iLEdMW6DVzgjuBSp2hPor5RoNuRXZs2XRqK1nerBoQNZ7fS5pGp1A6MHG1RAtarMXjFD6LT",
  "key5": "5pWU224KdfowpvGdpyv2Hzn3vxZ5WmPY4QXnh61yGqanEAXG2f4matoCu2eJpNLQf2zdNVj6SfxxTMLxwhYEBW6b",
  "key6": "4Xg4j5gKUo4c8ebGH29RjBk55CRrgSBRg5THhfiq85hF2J5hCMjaVdBySSD2ttq8evTqJdtWUsCB8z9dPX2ch6c5",
  "key7": "jCdHz1jDfgWjJu5pUrd3cVS2nuSVKEWSQv99uSJx3DWfiKQh6bMBSUzaBgThzULejKn3GAdcvktwCRqMqazFX3e",
  "key8": "3epYeA1QCpFnMqcgRK7uXdQ67mEc57PhCbhyrvY52yhP7fCPU1jKupHN8sy2xqVG96Vqx8HS4k8MbrXMFzmpGnax",
  "key9": "5WxSsruPoCsTP6qPHVN4pm841uR9tRT18DjjeMSwCCz6svDeUKbmP4fzUYxdFEVes88eeGRnjMJMm82bNp47E2Dt",
  "key10": "3PYaGQ4vfW2Ak4iv8ECWo15KoH7FvpHjWeUFtPpgTYT1pXYPwgSgpzonja6QsUJsRRwDgobtJte1bBHggD11nwzn",
  "key11": "2ZG5K7wJjgWVgxzHzkscWqZzngD12rj9vFA7HrxQcvZ4MV3EsYCLfQVvcY5GqCnJgbtnYdWe3U5CNAhzS6dehaX8",
  "key12": "3fgkdx1mBzSNu5NFm6eHLE4tvdiyeT529Ev56biEovpcoPBH6szw6ZuY59Zi86TizhsaDn1Ma1aAysdNB5VMgA2b",
  "key13": "TUkSJQdtj1a7AtYzjgcFTRUmYsz1GZrgvcyUG9ycWaUdq9xENWGykg26aVSXePciUx48DrQa9YV3ZpWJtQkbLwY",
  "key14": "2W9YiKWJcemekEMTrfsvqRkrWe2qAaUMczUzjdBGdeLunKUH2aHonbXMgt4Niyr2cD1aNVBwXBfhitBptHJLsiNd",
  "key15": "5L1CmBKLWCuHGN6wDo2XixvVA6Yi5KwXybBU93bbBYjifBqurqWUuzyLEe7rYvxLC3wTkiDSpZHV8GVNZyYFaGa2",
  "key16": "4utArNdvpWBQb9KGjwRLjUe3C1yntuCzJnSV4D6c6ungrn5PcMUuTeJV6oHv94dUzqQ4vZKptkKsjTndjvUpRXTd",
  "key17": "64rqf3ddG5Biwyndg8AStMeskFZy6fYAha3erbyrMP7MY15pksYuwU7FLQp4grWAp73y2k5hKQGsLJJeuWQbm4zb",
  "key18": "fuPtJx4BSaE6oC8fEU7yxpZMXmxkyvQkrZ5TfLU9t19UfGExwLeP8ZAaNZdFzQEAwxKRtyo4P5g1JGBKRXt9kEh",
  "key19": "4it1qNw2i2f57pFsuFF5fKcsykc78hyuh9qQdF7cNuch79cgPSnYjLmsAncMzfbyhD7o1km9Vyjd9RX23y97e2Ae",
  "key20": "58Scrbtk3yXJh4gMbec92znZevn5eJZPKFjnVxRU9NMZgupow3YBNjZnaVjKzf26fYxyc74tQua4fVpnsgqR3M2N",
  "key21": "5jSF79CfP8PRC1EZdrdE1EDjJKoHQVDRn8nRz4wyitwMVo4RowQt4BjAckWq383yvEb41pPo7t1bBEBb4w3py2Uf",
  "key22": "3Zh629WgbY7iMcsiJ6c3YBwDpGyveRadopqJ3zxgdazLnJQjr7Kqpa7gfjnFYMW7sgESPxAwrJFz53EnntE8PYiN",
  "key23": "Z27a8fioTKc4hN7kptuPR3K3JrDrW8KoVNh1GW6bxyFfs62bSCpCmwzL3XnLSQx6wtuNMECb68ox8ETs7UPWwAG",
  "key24": "xFFAk8LjawRyeHvcTHk4mwBa95TTYc7bcXe2YuoZPMgc7K3yEcxRYFUJKRhqSvQUxjZNdwnCwLsWTN4orAfrpPr",
  "key25": "5ryTekfQPTb9TfmtU3czMceAEpheJW3V9M1crKigP5xf48gPy6hFwwCjaAtUhQBheMrgdzcpynbk1uCvA9vVeqtN",
  "key26": "4D41NNyVC8jKh9c9YssCvrt5giw9YWb47Y1PWjnBr64i1AyrNKhmNVeGv9ki9E2ChCfkBZ7LFS66amqBdsKuiedR",
  "key27": "2uKrpnumd61FSSgiVeMpyJwcBsPzXaAFw4vgEc5Ew6wYePSLNPuKWMTBoUaWiJ86ekJdukHRKpi6NrW9NZ1zRQY3",
  "key28": "5jahdwrRBHEHXSDCCSMkvEpH7eRjWB3fsaWkTKQ8YaKo7SpSsdpZbJ9sATUbsZC4sEVWXumsxi4oN4CfkJkzxbpe",
  "key29": "2ZTDVBidEtkChFwksEb7Bb4MaNBHrfKbPqw3aMSE8PfQYdgE5dADDxGFX93btAysoGAkpnfoWjriSme4uZ5Ai3Gp",
  "key30": "4ZPwFVJ3UGfonqw7B2dtBC6kMaBZQJ1rRoTe8q9zH7gKmpDuDfFq3UZj5kfRywCz5L1P2Eq43kQHG3DUXmo8vjHz",
  "key31": "4jRwt4i2YN56TwX3iqpjuZ4v2syBVu9X7xNi3e8Ty9opPaJ6BYQP9eWbCPPiYANUrKdF3SXVtTp96cJ36t7Mn8GZ",
  "key32": "55LUN5Raae8b4jtxVa98o5qC8Xw9RnFET47cAzLdDKLKfGopPzhbjRfNL8hsMCujJbBsiPnFUz5fNPyFpGMB4CTs"
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
