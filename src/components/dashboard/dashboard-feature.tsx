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
    "5Kkj115tR9Emgrf49AApvXxt9xke1UVqBUL5TM1Xy89RzNSBj1nwJP6c7g6ydRvRCgM6T5SLebGD1fnz3dWrPA6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ypbuTDHXwwX768d1j72rbSuh8EU67RMZRT2MmAnBgP1GRjyTz6NcekJvbzRGfzPZRPKwHWwxR73bXCpRsWpGS8Z",
  "key1": "3D5zW54zgPobeqvVYTLcrxysM9rsef7MYeD5zKNKcAuwciAvfWrLMf3ASeamZrx9ENkT3ichcoVWqh7BQYvwe376",
  "key2": "3n3ePbm3CUAZ9hQhG9LFTBs7b5kKc4pq9un9Y8m6cvWFh8nCP2Epkv3Sod3639JJCA5c8kNDAwJDZvJjQCR6PDck",
  "key3": "osXCa3PNNtssnPoLiGyKdr3XcRCBYGd6ydJYhSaJ7MT6zwmrieMvqBhszqswXhRcQdJLYcpU9QygNBvwtHUzwt2",
  "key4": "5pLHod9F9TQXS1KUrB4VPxojAtmzZ585aPeGhv68isemxhnpBgVn8soimKVt44RgEriwnft3bZi8Uq17QQowPqyL",
  "key5": "5gRtVuH7mFWhK5UjDUkuDcU3pACoNGQ3aecW8EtUwNB3you6p8wBXng1e1dsLkjbJgiU1FSULPYtNL2pW7Tt5oW3",
  "key6": "5S7rcwAUx7k5pgxeM2571wNozmVTiBndDvV5jNchmDDYv5A3WeK2CXAAmZKQEMDmfphoj78NzWRvxgGAnvsU3GNZ",
  "key7": "3G1fXmBHbVdmkpyRfYgXksLbJQKpXcUjNUbfPJzmcVFGU9BVrNwcQH3R43moFxx6E5kubJxGnSmpTUj3wMTUxN1q",
  "key8": "5kQmPkpD1GC8XRsXKyfNMab86VhwpvUVbYMSKVTfFtsdxTaHAnfThXqH3nNh4midAW9faC1q82CGHcMnr8ZtqbRP",
  "key9": "3Qi3CgqsC7gERFgCWxKDUiXzKr8CrCLTE6udKUqqDkev27nVjVnLDSTMEwFeEWb3aforwjeqziBLXppAqYuoEfop",
  "key10": "444SN4G4MkRzf6zcFQobpyorv38kocEBmAp3c15A7AQdw9EDmnLHPFuj4rC7fmLAASN2x4e5NhSjY9w4qa2tJTBg",
  "key11": "6QqDi6hi8NbYMS977XfDNCqoCvk8ReRmiTJQnhSUEyxgUAoqzripxNTt17t49MntVQPvjoaCz224qVYzPdeasBV",
  "key12": "5gK5JBgDqxoPo5v6CeAnXCE6PDBT1Zx66xbe6qjCxNpqRLMeY3AXUJuZAoixhNUfW1iUZy11nETYfymqYPfKrLoS",
  "key13": "5R7fp5K7AUHAnZkUroqUmBKE76TaC8NwV5tWPv9SQqk3fXRywL3FBdB9A4ZXi7R78JtDKWME3BEVyfBDhsZPfiKj",
  "key14": "43Unj1cqWbCyS9UZjgZQxUpERAExYcQEmfVxhnNM31ArLEk6WSkzXTgiiVMYdCYBfBNzADvrPbZgAEDcb8qfDwV1",
  "key15": "uHavDY4NVRgVGFjdmaBKsz6BikgBft8E2Z7ma722DoGkuQoNcUDaUNiBcokfBo9u1HzJifVRCCnYHRRsSdWbDPH",
  "key16": "gPt6KN67bSm45oNwa4xiV9YbpQNDn9zoR25sExc8zVnsRRNLCtckPys3WTGDC85HvXdmJfdgQbdZikq6q1JM4Ln",
  "key17": "4eckNNS4qNAnPcVFkyR3S4tjTzZm4Fwo5g4gkr5QFJnuVNBy1NYkMQSVik1Aofau4p3Tauq389wtm268wVhkmgS3",
  "key18": "661Z5BsJzgPku9V9GdYWzLWKU2Eu6VnXvacp74Nc5M247QstqPgZqyksnqBfKnSC672LrdnPozc4gvPbj4yAVNtU",
  "key19": "618XEaRYq9mt9J4j8heFPoNHMArVzJWMsdrSkScKPTPJpXyFB2W5SZP2NikoqPPHR8iqUzUEpBEMFQX5x7WYmSVd",
  "key20": "3TitXxdefMLjY7Xx9DNsyVacQXdvV6L2zt23M6iLn8xiA4hMkLnPt6jSciUrZp7sdjyNfcoESiLboLQjSBa7PxLY",
  "key21": "5FTJAywV15YxeKZcWDEbE3AhivH4iH1HMYS4pHw8G8krxmqs4acLx5E8GZrUq5W9uh9jq2avrQa71oJdsBZwS8Vf",
  "key22": "4cTUPuvLPoFMx6SDp4gM3BhT3p6hFznSShQtNZ2xkdPCScB6YakxUpMzxyrr8FZ7WwoZXxck1v45JbxGHZMLxyFT",
  "key23": "rGnBon1KojhdQ8nqTk7ZBq3vqc7WG8dNB9jcNmSBF6hDzrikxEX8ANcg1J1cdKceWdvr8BPsDAynUTBJQF76SMF",
  "key24": "4in6D2cUda177jWVXuZ8itKRLxxVzh8SysPg3KigkRV35Nj23LSFBPjM5UkMc92VQMp67r6LyxT7yJ536RxqFBuA",
  "key25": "RzoS3GJk2SCHGW5fm892uwCfJAsZkoFcSyS6U2TfcZSKqJnL84YfSP44WVUMvq8EoLtnv7Sj2pGAbX5hA9YvmJN",
  "key26": "2JPextMdtmr8QwhQpJ4GuQ2EjbWwQNSnRDSQTcF92WNP4NArVdoWLnLgwLqXMdSHKrndX8FXLmUDC1szxd9RV4Rh",
  "key27": "4kvDJSxDJsGndNwrUXNFfXtFwcBLdRykMx528jN63NPQ4n77Le9Jcf7mX5jEVRo3KUqvkFsYESiMEfzgN2g1bg5P",
  "key28": "3vPSjnk5vzfD7jeQNA5DJ7QSu8s4mJi4q348qBxhcLvZNxQdKoX8v7FyrpwYsf1fLZPVmM5MtVGkbPZkgLzuzwWC",
  "key29": "5R3ckf255jJiyUQSxJhznn5NsMPVqhkNZTXZVT6B7BowEc1ezZpKCBPAGNVfqd8n9cP7kRYqJGqbBLLQv21dKCfW",
  "key30": "Q7FzT5LRoVceRvoFhH8s6nqXxp8iksxMh6SjWeJhqtZwdwDVWdeYVB3uSKkg7zKj9job1Tjpn81yY25Tn4grnN8",
  "key31": "3e6YueTaC7qRezDGgggQ5h49TC1U5f4uX7MsBPd68LWAB1f7w3GEdUcUPU5rT98QGqeDgAgoHbPyiCAoYkfedCgG",
  "key32": "5ATPWExGqkbTnHBrznTCgUgTqFKTVdfx2EhBBEgpbpQSEg2o1L1xgkwYvGfnymzjYgwPFXaEvmVdsYbzmtzhbR8X",
  "key33": "3tehTfWdyrQnPeCPr1qGPX82VR9R5sr1fwsWu18w2yZknFdntarhntxY9TYWewV5x6y1vAVZuEj5R2MQpzd41GLg",
  "key34": "5cMU9fz6MLjwFWMGnyuZdTDJKYtgdL8wjj8f5UxD8hAJF1HYLMgZDqhkygz22kCRSEKTackyv3kjvyK9QDGjvzBz",
  "key35": "35uRvTJqkuQtFxmeNym8pDiGGVynphduqVidtRgwxdP4dVKUpHThT3JREavHMx3PxqucqdRSeY6ZMmuBcm8QCuEG",
  "key36": "4a6y4a2wbXE4Leyz95cyFMYA8aTUtdiXXoqztRt2cJv9fQNYjjyg1KYrWQpPQPjVsDbP1Zwk9bpQB4joELeweYts",
  "key37": "3PPSBPeUoiiMGg91NUxDpWUW2wYJmnUr6Htkb5sebWQ5reme7yDjQuUSjQtkRmpuT2UAAc3CQPej81VwiRTChRs7",
  "key38": "YPiDThAXpnfanFSHFoiim9PRDUZoG3Kd7T3ZdRLVCorchNzTTC8ErukyGSMPNxHvZ2QMok3HcSHuNt7nmuxfG5H",
  "key39": "5nrUCA2dvJTYu21bHorQi1z7RKowjiXvjwNhry2Q1DzUmhy1X6RqtJ7iQSZ6twHqfSnYiC5ZpDiYcrCTKReCvPs7",
  "key40": "2Px5aSRt1sjJ9QkUP65oi6iCtLDm8LZKPTc2yFFPksKx4SKHE6TuacX67DuLXAtavvBbWARAQFai4oahSjoLnBey",
  "key41": "3c2VVu1CCdYfBzW9Fxq28F2d3A42tQooq7EmWas89FkMNQRY5umXmCrEL7AKerbtL51NqoiYLj4AU4SrgwPCaHjd",
  "key42": "Uok6gB5gy73DU9gBX2Uaifq8PfiHScvAqnfKH8gxkAUEfqC9q8aQgqLBZ3f23qfiVZN32tafRq45vSZn22hQuXg",
  "key43": "2KutcTNLwEzKiFKKxRrkJorb7debvrMCthqxRJyisczHTi6FDZ1y8NqDH6R8cBVS2bn5h6HgUxTh2Dydavko8JTJ",
  "key44": "e9v28yg5gWvxLA6685HCGBd2DXJohxaD6hBif8hLVRhcbiMC4N17HqbZHFVavW7AJAfqLhoGz2sXrZnjb5j8jWz",
  "key45": "2mTeUutz4n4q1Esdj23eHUMN86toz4gaZ39rMQfG6o5owNJVT9NBuYi7dHwYT6DN26PVt71PJAHmcLoTLqbaweb5",
  "key46": "2h8NDocY1mVHxGbfZZoJ3JGAgMJGzt2pKruaVhemiLfa9kk698xSgNNmk8hBbUzZezoJSaLVLfdJpEvb6h4xC6Up"
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
