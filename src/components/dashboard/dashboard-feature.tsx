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
    "3opPBuqrikgyx2aiY4wuDFQGKphp96zyQX8tktSMGZ4W9dkiDsaecLFfff3Q5VQZUkjHTaDtA32XG7cpnGPw4FAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDbbAP38y8QR1mxQxcMTg7UXwPgnQmz5aYeRFMQGVZxrmenohpQ3rSzERkTwSPfLXz45BZWNQ82oKnMoDESLyej",
  "key1": "5XfUvQUShVks399JXikCj3nx8CVbM1qLtJ64myoXCQwnrjEQiHUg43bNHTp2ud7SzfH6Dm4VHHeTLDN8SPysZ6Wb",
  "key2": "5mWUu5oNtktF7GGNPnGjggpcgsHSW9HuHqAX28WtiqGWDhGDWeap8wnHPbbHFC9VPdkm1LNSPqzqLCPSUgaUdyhi",
  "key3": "ENwr81quzbqRnKPanaZF1SdhU6uRep5prbQvkoFmFL9JQEM4VCJLvGkazSeUdk91eAHwbeUqZRvnkXizjVx8et5",
  "key4": "61pmaSEDqgwyJrk5L6LhL3AuKNPBEvRrt4yuYreggx9rKFYChau2SyvXMm8NG9RhpFW9PsTM6AeP5F1QTiwekriM",
  "key5": "8F3GLdpSYwVvDiX5XPgYG7tH7wN6Tsvj5jagMysjdKZc3ZGMwozhLBzLrWtGnc6udpjTsQJty6FC2Cd86vNYozH",
  "key6": "3bScfPkTV3ho9pZvD9nXR9MQEPDivoZ432NAZuVS2yjrGZceA6EQCFRS159JP5RdHJs2u5AyqYJ38xLRVh67bYMQ",
  "key7": "3Fvcn9QwF2GdX2726r1WKG6wH9PnNDnLAXKnuM1SxSffxSTXYTWqHRtApiRXVRif79Nhpg2g54x79dhFraBREtom",
  "key8": "5RcX3VUo4DxghwU4KsFNXiZsJRoDiZjC2zMN4G6GRmqiWavpLfcu7t427u8CLXHcFYy4xhEg6kXBiw7LR5AMK2jE",
  "key9": "4r4hWBbZMJmpthsdjJsf1Jcv6m4ecxm8MZfZuJr9ttjcUWFidSVfHu5oc9J1ErLMddaqGDgtLfns5tCaw5NvEsfc",
  "key10": "2VexQGxWJmEjGmdsNkNvWS8Byo6Y9rbJAgxdXc3fK3vQz8qAE8KDzo61THUKoG1mpAWhQ6tEUYBSQXxBiEjF6iAf",
  "key11": "5V6b68RQqzf1jz5PZaZeMPhB9sFikfbKZWm9Rn8zd5bQqj1yPsV69ongcwwierFF1qFBPA1vUsVLEs2ngp5nSGum",
  "key12": "2VxT4AoNiUeShaLwoH6RTHTHqAhCqTyz8cwfBxeUTQfEuqpccaQA2Aq9Dx1qZayha2xrDXQfyAV9gNHknKxJGKFT",
  "key13": "9VPsEvSD5cN1y1LGozfbQ7uQTF9n9ugsuQdo4iNq2opVPF5XdLt1j1X7vJZhAZJuTuxCMXTqXdbyHmc3eUz7BMN",
  "key14": "2duBvcCm8fmyEXazQtRz6y5HuPtWmqqKwxZjYTyqQJE2T2e5p8vJkzrHV1phvkkBaAaWHqL2Ky8FEYqmK7B2zweC",
  "key15": "61ewbXQzjZmpr2DsaSX6RPU9FSwm7vyxN5RTCSsxPovwfA198SZ2Mdv2JDycpQUrWwUVNsLTESgKvvQuX45RnYb4",
  "key16": "4toQBRcyMpygauWvocjG4sfCeep8K11sh3yvrcjghLpktfZpb2eSt8igTwEnEwDwUFx8jEXGdeYpSAMGVqncDUWT",
  "key17": "63i42v94iFxHxVPoDcJr7hfedQdG3H4A2rjjVm1GkZSd31sYPwDHGAAvkRxf7J6PNBPoKd4U4N26KQ4Rgzv2rpMC",
  "key18": "24q5J2UohzWfXeHHQA2tUnz4RshMo9vb41GcXQeAoJGPW3b29WhGC5ZB8sW631AqNxG9vAS4VsmEMdbUxDuH7tSJ",
  "key19": "4KeizVFxJGMD5GHjxTuJioVx2qeQWwtxTmxTLcYf5whAEJjiXCkVeojGkmJya8nhZkB5Yj9pvUJDkipbRY24LGpX",
  "key20": "49JcuxWg1wq2pM7mSuNbTpY1CzH2ihbTY2JY9eHJ1EvcigkeHkF5rBDDFhKqFo5u554wG23sYqH39tu8mcxy1stW",
  "key21": "4aUFEWPM6U3GMMH4D7ZXVbak4nPodm6sxch3TfnfntMUzp59CHpEH3xhB5G4tgd8ksKQKZ6TpxNQupN5iDvGN1bH",
  "key22": "4APTBuguoEgPGN1LwsZzGbP8c5zmY3Wb6qCvP9cAJwDzqPizigxes2uGuGxJEnmWJrQaAJkuuiyaKRnAmuRDpS9v",
  "key23": "4kQp77B2xZwcqnpRpLFRSb7fy95TK3BY26dm8h7UetmRWMRJ58fsPjCEthB2KwJXSJxdUiCYLTXHhkBY6QhkZCBX",
  "key24": "TEqRtXrRdVjApKbSw3EyWtfsi5XGN3gyxYjPxBYyhqwmGBKDpasAkozgb1jwy6qyYpBDDtMA6GBFXmfUDuAhXwG",
  "key25": "3eEzFqTQn5ta3SVj1KvFMaPe9eFGERMkCrYobfNNB6JygSDtU2TaswVTBU7CDKP2eKk2hTaydbEgffRYMoHM9YqT",
  "key26": "283C7goHCP3NgkFhELawkfnqXJkPwtJ2FxAiDHCUXMUYdY7iTCfqV9jpkMiuq5uypaDyuHcdcUuv33vRUkDbSZHd",
  "key27": "2LiYDaLYA8yL4c4ekZrMA8EZQAHfPu9wKCfni1EXUA5KUriWw42M1nwNgbWRJTF2hP2cG9ae2bAqqcsDhZ9yn5Wg",
  "key28": "KJhDtGAqQSZBWBx3TKrAj9yuimvChTCpRXSt5gNEFMkNMNU39raTc425yqYSHp2bh6VCwi2LJ5V3dCL93WNotjm",
  "key29": "5rxwg1V92iMnDRN6qRwCpnXddpsDwxVoEdgxp2q2J2NnPFXdBpFJ7w8V8Wvuj4DWT5LtXcGn7oe9RAb2t7Rp43fg",
  "key30": "53Qjn84r7NkB9tH4163A1UwXKixAcxYNkSo9UtrNstcsBu5g4kDGmZUHYuTBkASGWBUALhBnuHdJBSJHU3xdqmAH",
  "key31": "3HYFhhRc4FvYS62axk1Z2cDVVe1kMr2tGEWhsqcLHAB7riawAJMbCc86mWZASVbw65SUnzbwC9ESMhagRcHRJd33",
  "key32": "5tLp2mgTfBtcwsdowfS4nh8mMTgzK1WdDaHTyQ9VGjbj2JW673ztWg5eC5BrzPYHGNakMFYHAz2uPm1NBVaoCcr3",
  "key33": "3tM5uqQ8HLtNux7zc4RNetPfiwTjuPLiL7384z4wvYGbRW8d3FuFBZoZT6Yavi4QJiNQb5Td5vRgBzgn7yykQX4q",
  "key34": "5GzjiqMkPDJx5JuCEL78VEwDGPBBAfnZFhf9Xs6e8wtcEkE8PyohbKRUBnAQ7gzcQSeiAKQFGN7pvo5vMG85WN8f",
  "key35": "2nCDxG3NECFcESrpxgh1zCDCQGAJxpB9paieDN9bULjB5CHVvLcCcP4tnTeq81fgrAhKv8F4K3gXHDj3xxte5H8j",
  "key36": "GjAxQtUe2GpTf9VrsNBEB5s2trzuW7k5FCxzwttX89oGTe5BWBw8k8NUqWYGMSc6vNkcjLPwDDJiMrB1Ne9ueCa",
  "key37": "5etU9wXBfzQeRUW4WD8bYFVgBRQ2CNSKTQ5TQEdaGBqwLfma3A3MTGLZYQxdV1VpZxh19TXN4JoCbXXfR7txUaSc",
  "key38": "5eqk4NuEUg85ttXv8ptJdehPuHRwD2aQ9uDKrs2ocGDWpRv4em6X3Hirrf2denCNuci6QoiDh7G41ZqXU9a19p6w"
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
