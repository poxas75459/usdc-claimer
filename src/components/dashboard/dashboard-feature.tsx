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
    "4vsTwhprUUKLfqZdf3JqV4yLCW66mmyG4Hi9JWKaceJ6rELGDRec851mYUWhv9hUsdFpSa6Y8xVGLqn3aGRS794J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gk7gv89derwLFK87iMUeF3ifZYXvigMrCJRZQSGkYZrgSPTECw4fma4JaQyDxz9P2KxLcw4gr3hQARY1ujcGYq",
  "key1": "oPc6QAtwxKVT14uHC1ojtTDbVt6VAtb24k1R45pqgVWQKSmxHZew86dEZ3H7MAdQn6cMnbDb8LXBiWvWAtTkvDG",
  "key2": "2gQoHbSC2xdDZeFz54vij3gA9je1VBXaZMsmmh345gXrWHQbEZxDvxofbVv4MoKCM9JYKiRbTM5KCcCi6C3VosMT",
  "key3": "39MgFeuQpDMbGwUWJFq6tYFky9seskgPVndAaoF7Q6fzzfc5Mw55Q7jtUjvFZfhcHtvQGGnn8P2RXfVLjm5XMQxa",
  "key4": "2WytNVUXu5kYi6QKVh8Erx63KHN8o8w62xWE48pLRsKk31EUPDQKTyUCbxY3sefr8G3kA4YTSJoRitvAtVEDcyAM",
  "key5": "E91gznHHtgyU7iuBZdEdf8TD99864KCuoTgXHmewKPhErNvaAhBjeTo2P5PrjFeEqHcbckkXRoarQLar1XwjYne",
  "key6": "5V1DpS3dxz5QuyRtawh6SJiSEe1ddL6GduTQq6YJeCbM2RshdeNVPSqYdXezDR6KB9pq7HSEoVrsSvM6gSK2Ec4z",
  "key7": "3xskzpo2Fsq2CgUgXjP9Nxv8wVVxTQnRBejfxhdRz7TUxWhY7QeGZsFeQg4SF9yof4F8hYgKxzc6aLF1TbZ5bLqN",
  "key8": "2GzmsSm8jEXG5fEJ4xeB9fcLGiFd8pM52QiiZxv54uWESc7BmTsVQGA8PocUMADARyD2DNqXq9w96kjaRZUx5VJf",
  "key9": "5DVDmgwEE8JG5LR1QTrPieVta7FK8bjAYTWj6QcZuBHeUKN4Eh1ogFrNd8GjoBJD6pxcdMb7ivbY4CtHxtpRBLrq",
  "key10": "62AyrtDVhZpwQ4W1NPWEUvL3eSNhsuEbky368TutpmqKhq73nLaDR8GbAJSNHx3Bcr3hLhWxyiV15njdkjSPfDsJ",
  "key11": "2FVL8EqAyw3xCU5a2meRaB3g7YvW4HjNePPBhRu9gHP8XDnFJv7DKj8kfPfio7PfYCMKSmj8VpTpjARXcmttw1Gr",
  "key12": "3QJUYt8U7Hfy8m92jWpFrMBHgobdZnPjHLAUWwukohWoqHWQMYCfc5b6uA7tLoM18huy6wTk7BXXxX7mvNoPiRZ1",
  "key13": "64g85XdnoLnXuo6Cb965GwJ9QnGrKMtJAj743BshXusb7AxrVdAESfqNhAwduzpAhLetDtPRvXARAN2ie16u1Cet",
  "key14": "4rjz6TYALBAREY9AkQkPaoFut1ZGmdSEGqwJtycN6HP3dwmWbxFErGMGLM2bdn6d4VSFaWsUuJoNksradWuE4h5v",
  "key15": "3zzkqqNbyQUKAnXqFWrjZWntnCrJVwd962ywiTBN2mxXLS52avBJ4oUzEsw7cD6qPz7zHcyqRUSvVi1GvZytRMWJ",
  "key16": "221ck9vCeFxScENQsWdM8wE26U3SC4eiaeaB3zRP8XTiVFzyxZzeTZ7obtaHDwG8TCcdG3MqLkp9hS97fNnBhXnb",
  "key17": "5w52B8QoLk17t9NZppfuzsqyXAzUPnQcYjTimrkrjJgGUuuViDU6n7hh2yLpoWPHJJupsvZCpDBBm3cA58fMWpMN",
  "key18": "3sC6ENjdfx491dA1JeBMaJ5mbcwExJaFnVgJc4ny8mJez7vxw3yKiwGXSFrRhCDPPSdt9X81ppVpwu2d4mpq25VD",
  "key19": "Ausidj4Ng4HVRxxFWJuqKPLyvn3g4f6X62XSigGia1kWYu5xdZqswGudfETbDSHU6Mth8tNH4Xwewk4vAYQFWM9",
  "key20": "3q66AWNqyY4teBi8qD5AGuNKbcyNNNrFvefG43tg46uyeFzvQ7LF7x4SXh9eNCZUpp2XzSvDn8Zx8jmUDRE4WSqi",
  "key21": "4BFMuasp1PABd1GFyj77AqQDhNiaccp14Aj5Q7yXpHn7RBNqjr4MhM9C9UFDAY6BAHA3tPXabE5yjMwiaQPUyZCE",
  "key22": "4dF2QBnpSm5q1U82hzS6sgx2fToV22q1BiVkCoYzWbKnjpxejxykJWgx1D8f57cQAJhC6GogNjmAyhRGh7gRBb4h",
  "key23": "2mPJvo8PedFHuAKhEUFe6QWFsSE8KytHdpGa2GZECbVxo6t4Gu4XEweBr6kaK47myAW2pfzvTke5z3v1iZUjrCFQ",
  "key24": "35cFfBGPzDckDxpBgRbvMjhNnGXJJdVdgkwVecqdz9rEGLZS6xR4iQ7iK5ce4ZcTjaNPm5TM6W4BPeGuacSuEUxs",
  "key25": "4TTmQ4JFbNCfdFGQHEsrwmNtqXTUoftqs6Ya6huV7MF3neJ1cRVg9VH7EtdmLkh22Y6reErK5jHyPwddYSi5tgBa",
  "key26": "mSQeAtHU1eWEqPBCvTNnxdpK7r8MvrAbvky9daMWEqSSgjRnSXy5sWKvQvKxcdJ28HqXfvLyhZ6Upqf1687rvnb",
  "key27": "5xetDvvv9Yii81Wfy7TTv6dmfaTcMGcfPXvz3wG9FG7N4wvDSQKQwijkYEUJGZjU5uM8sHMdt1CBzpvXu4XTamT",
  "key28": "2WSXR6THNz8oyGAjs5cRb2NfYwHauAHkQUbC8xyKJQQUkcCd7oDstqkxw9wQgJkbVmDkg4z2YEXwnwAX9hrqAuRn",
  "key29": "33vh4kHxjaJHSv5jS6FqPPoArAQFc1ybaZnhJroJH8zHgPk6BetT6NG5W4YJUqwkRFAjCEzpddB8Vu8euXCFAniL",
  "key30": "3iw61kAfQixo4epZS5G9Hgmybbf3eU56Q7FCDSj4zb8UNMyG1mkbo5DPfHRoLDrSRkLA3tijZXXhrWHcNKYB8DMF",
  "key31": "2RfnCPp3dbufBbddrExoUUbYjMzm2dVE3NcbC5UPXMEnRcRzBkePvoSRLVx544YwfU93Tc3PADePiTxMYcd3hFpg",
  "key32": "3aNcrVpDG7fznjQeAq7VNHwLxR5GvqcbDbG7zDSMrRsmReXCsCENXqa3oWVW5TH8vVV6vcEnMYE5ckdovyRGBc12",
  "key33": "5VKktXLRS1fh2DxGFmSHzSoeg4JnGMt3h9MaQNsbs5ZgzeQT7PndWGQB4vz3syM4DDq91jK1w5okMneDZDx5BJk7",
  "key34": "3JME1jbDWGGPHyJnND1gEcSBfUUzQsJofgLhLKuYRqfcHNuXWd6ZnFey6rxyuSBLFNnfUfKBbuWGEqeLAdtTjC3Z",
  "key35": "Lt75nQcTHNbXd1CzVQ7cGBsByZ1mJ3A2BRSseSRDoq4NzjdjSGYPwv4MQ6VRVNLH5amb5ab1iDmQNThsEnyjGZ8",
  "key36": "4gkEjMEZPHDZNQw5MNsgphtAcqDiVMPc6BFWtd8z7oddnAXdHft8k6VESAmpjUPMgKwWVZENsNWDX4JcEivEHwPE",
  "key37": "5iU1tfMz1ajboSEnFqZCUcDKaEn4C5AxyUQCqztxoGm1Kdez2TdZfmNEm54HEi6AmM6qmXRkW9iC14Q1cMDTHyYL",
  "key38": "2aLnUxgUTNreXQyFZAGpG9bGqLNoTPC3TXQD5Mkg3gABsbVv52Lz8wvNx9MC6WsbZZD9d6k4YqrsjrZwaaQuu6vL",
  "key39": "63cYds7NNAid6jy3bSRvLcT7boLR8t8KtNv8GgJDn7yiZW47KoJKihMx99noEVrv7NRwNMWSZcaWEfhXKPbZdqw6",
  "key40": "575VLgdEKohegWw8p8qQdhSW9Ln6MPwaYqkVTB1scd9QWJAaNy9pTZ7kh3Daf4d8SVAwYawgtUFtWESBvkpny4cb",
  "key41": "5eRwKjcBXFuPrUdpkDZRuohsfaVHc39xdAcPqTEBJXYHyFvjNN3w4K977aMLZV8No5BWEDoonY72xzFWniTwrpSc",
  "key42": "2u7gQYMoaPEUrjmQp1i4Ao4d9NpQ8ca7cBEb3n9YkJzjBRTyKfG1KC655rTHsZGyKgRpwdoGwj1Jr331VvUr5P9n",
  "key43": "4iP6nNPmK4u9QuyZ6rsRcqx8JErFkVzhzX4VL9BvnvpsBJipgGzp38TgFAFMAYnuDUsz8pJXXhSXBG2wBBWFjyZ2"
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
