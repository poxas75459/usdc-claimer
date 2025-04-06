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
    "CQRTE1euMASAUdh5314WJwvBZS2XZFmjP16U77j6JghwyrD563Y93589uZPPLJoZXJ2e1gaTq8H8WJ2g6KjtPGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRopD8RcHapQEWVhQBmmmCJsigw5exeApfMBS6mXsz5wqPLDxY8DXMofK3m6Q21JowynkbMvvtqcyckmbBo4sMC",
  "key1": "2ytDF98RHyDzuNuDm2gsQcSR3KebskohHvhxaoJcke3azXBAKd7Y8SHNgxvY6wwqDeTKqrUahzu5w5TVeTd6wPzK",
  "key2": "2iL2RNjRGAe3zT35iEM36Nv5AWN4X9gyjaZDXQ4nPq1Ki3adRb7HTaBjWtz3r7z4PKRVZqxiczu7UJqtbzc386hU",
  "key3": "3sTE4HqDZn5n7nkoDv8KnUZUvvLPScQ1rzwfYEVDcVJoaNEz7mvvGBspZu5JzGjS4rzhjXJjmWNRLSjCN6r3rKq3",
  "key4": "4U488UiqLoUkfZMRL7wNBgcQ6DvdW5ND1PGJwWZDz57CcZugydVb2naB9z5mGsUaMZBJSqwRiG38JnFaimbrwXtx",
  "key5": "3DR5b59yNhSHnQD6hxiMY3FKCGGT4XsQZK3qbL9HXZk1BtSgBiwFTkDJaaksVrB2gkzH9M2GKMb879rXbp36hTTS",
  "key6": "GSgVi6YSSL8hE9q31XqLZ4q2EEsNpLZUaed9wgAmW2VQL4QJddVAZnycTxuBqFZuLttYZcDz4f8gd6qWqjM5xfv",
  "key7": "24a27tQ4ZzHpBvHEY5JAemsqp2J2CWAt5KX5P6RiSsorEbNBS9ACkTLFTzTPtF2dM56dx5dU3FpLtBnkR6vrDiUT",
  "key8": "5gro5kLmfutyy7fa8NREQy3pqrFq7WSY5uh9kacdqtXVg3DFR2NuUaopGx9vGK56jPEFtnCVY8dzNynvj6Z1F4QX",
  "key9": "5HKzdSMqLsSsK2MZdH5HtRrRcwxGzowPLV5stQoeti1CayZ6Es4b5US7n89uX4TG8vMpt8SPGdsz9Pr2LyysMBuG",
  "key10": "GwnKj1aC37bH7kaoGuz8uqs3msLtxiX8sWuP2wXxLoZZJJ2PUJ7HhhrNQQTjzZq92hJwmiFphxQYNk1k5VRsGNC",
  "key11": "5BBzip4pRNoHc5BD6iEvFGTBv9f8xnzFsBUwyg2K31FdQhqNUh7LTf43G7MHhGTDMrRXGVWWigzH2sJjSJMPBdt2",
  "key12": "3t8jbWT5wdVGnyt7dDgghzNJ3LApNkZucH9Wx1VXZiYiCaKFgx9x49PRt1bQGFo3PvFM9btDwPGzswNfLfhANJgX",
  "key13": "5Y74NawyzsCXEZ1auXB31MD8zmgCAnumhCaUMdWNuLoV4a7C1iN5EcV2juvuwYg9x1n7vN6kzE27vVjRp4QT3Vte",
  "key14": "49kkjJ4A7xwzuBAWi3em5JUVHygZr1hSeSHTrRWetpKUUYFcy1NGUywXsmYHV9E6TjH543PZtSnhXq92dM5E2vFX",
  "key15": "23eC8LtVbuzBe5e2Tmv2V3fprkmVdXnDkTVwM6digfJNfZuVcWMSMQJf881QUwEnWB9xL2vNi65PU9UxMQDb7Rtw",
  "key16": "wShjMDjFuxSKeoKtWyMkzVCjjWpKSn9tDo7o8cew64Cc7L9FZpqrhRH9CWcbxPXGqvCXrqe4zc85jWBPmyjDpAp",
  "key17": "4dnBzBoqrhpZj9uifX5F9V7NN1M7uf5JmKPMuW6wCnVU1LBbVB1sRtQ6hpr74KUz5gLqLCbXBo5bNSqSj2UU5pSd",
  "key18": "3SuQvNyFuUEHpLU2yeLkvsSDdH4MnjnqLQRD1UC9wRoToXkVAyJrhNQQZueqeYUkyfwvXhPEPgiXr3gjvBrHHUdV",
  "key19": "4wjuYb5YqCzB6DJXnhUPg3Ts8mLBMzcJTV3MjFTTUTE45SPCvpBnZos5ZxwuwHqAa59UUz5o33FRwpMmUTGmDSwG",
  "key20": "4Hj1r8YcQ2Dcq41zo7JdHXUyTCNcCxShPw2NJvpwxH3C2wjxbkaiAyAapksiEoT1iKmxffWWqZjYfwhBsvTYBzks",
  "key21": "pjCmYy8TgfELFs9Zn8o4PgZ8F4wpao3aPMkbWi91z6LWmWB8QBwK8CzTTsmaS5ShmcaCWUqSG8KiRekh4fs8MHW",
  "key22": "22kYPPj5zKSho1tJQtY72NBfoAgGUxxZ6nQ5gDD6g3nq9vszPXeh9GuGpnxTcWsarK6VC25tj7idZmPVSyAXvtpW",
  "key23": "4XVJeRHytmuummiw7APn2Db1sYKcpfJADuT8cuC69UeAeVugdtPEtrKWJ6KFcoDy9JZmYCs87ydU6oGuKPzJbEaA",
  "key24": "65vBaCrrLy43zXda3qqe1VcrVYgZa5MsS6S1aV89qpN3ZF79ZJrAf8NPAWh4MmgzudZ7M6K95PxPUu7j39BY1jKb",
  "key25": "2ZgPnkZz3GticsFtTNZ5mZL2C3v4MqKwQQy2HM6WWvd8FNjoXYBEgsTxYEZNRMNqJB5z937aww8kTnRDSDbgBAba",
  "key26": "5FtTqcdN1SPUxamY4vEUUEscMUmmmbdoRs1MMksNWiUA1yLbc89TdTvG6M9sYJpcfCHqR98RwEHAvFYEin3r6mgX",
  "key27": "34TB8qkh14xWtFcEV8XgwwzndfVFcSp3bdbgYbukba864vWKBdUHcBr5hcRpwCurev1UKyE9GSp4TWuUKTUZ59Qi",
  "key28": "4EfxpEygVE6hTCDeMxnzm8PDwn8KYo8xg3pSJFwTQfAN4puFCfKMjKiFSGQx3DU5ErxKyPQoHTEqAwteewJrStEm",
  "key29": "3ViCrg2EHAdBjbaJU4KhDFwaH3o9auQYf5pBCdKQeoqEYocJntmQgAgqXooyeb3B2b5hpUdixifdkvBpAq9qw6Aj",
  "key30": "4VrDbKSPv9KzkPkn9c5J9TCyeeeLkKvCvTXuCU7VUhNjWEye9H6xpUbdQrbSJEg89PC8KCBBWtywRadPhrcpDzVT",
  "key31": "5fuTWA8z62LsUem6BgHs7ceF2cenrwnQaoSasSiNpNM19nRUyZqh8WP9bB4aA6UgKqhUsyH2gQARVRK4HqjoKHiD",
  "key32": "5hvmNX6zb2BQu8CHsXAQguVrZnkENL6jvdGLD3esjahiJ6Z2nUdNgmytmYU4MsMxeErsszHXFpF7r3GtKtx2dYqa",
  "key33": "4fgQEqb32rvkv52ny9zabcBUgFbUBaG3QEtUGR46PMtpyb4Cvyfuo7fG7LQRr46o8eUYuiscF4bphRxHUboRmWPc",
  "key34": "5GEuoBU5XWFFPiH9jYneWyg5YspeyUwzVoLqYagZ7sPNmUHCg3AzQG1smScxF2sbBCp4WtTPcL6TV1jmbfsiTAPB",
  "key35": "c7AS29CfjHjcfMjRZLReSRtB2e3MAcSxVTPUJvpKsPYfT51qs2ix4aWXMD38HjH7agQyPHwj79NzSY6tbGG1SqU",
  "key36": "5mdfkgCZrmCds5Nv4x7xCN9yxELu61R8zhfzce1XJTymYvk7pT3BjcLFxystXMuYB8HVA4YPoeHH2q8FDxAZxTeS",
  "key37": "4dmmXJrM9ASXbJTvGkBpcWkwhfsPBDjtJb2zYhTZCTZijV25pjpJKYQDb9frzk1ATkcHNmqkV51KjcihSE3BGwmj",
  "key38": "474daNFm8HTy3qfJQaWfGfh9GdVriSnK14e9MX4ZPHzNoAQ4kGExeWpB7PnHq8yHgr1pEpFRntfNaMLdyJtR8D6E",
  "key39": "6dz4nkXMyVZz3cCayYJ1vFJPRK1hKx6itRPxVc4mnuBuCr7yTtRMkiqfcLP2R7vnsBbEP4dZ39UShjazXA3Nv1P",
  "key40": "hudibDxrhVWpXmmtww4z9igeKK363o8q96cZTXuupR39pmV5Eu6DkzZ49LjaN6p9Je9kazSAQnzEuM1DGsJajdb",
  "key41": "5PENATjQEsnvxZg967jPWDeCmwGGNdM8WuNJU1XyrzmXFfKSKDiNWez53JMH7ycgX5KaTHZACYL83U1zK17Vgsdp",
  "key42": "5vFEBrsAC9xDG945qgiWAVy557NERMktYNkx2r7s94HZ1bzkuMpeFrF7DzbYRbeoihi7uGzMeJki8n8CFWtaaTyi",
  "key43": "49eA3dzUuBwk5bTYaeb8CwnCEMzyw8kjBr2LM1vaUEd5fExkXBoFZdEkZ6hCA5DsbLKvYpJUcCxGYfQzNuZLdvsp",
  "key44": "495aYJEm4WzYE6G8S2BowEr6Zu3kYDiJmBUZCbgD3ASstfpd4DxXJPDeKFBpPdJBSZkiB7dkpyubYfwA2o4bt8e8",
  "key45": "2Y62SZACAVEMDwBbhGqQVYP5hRWKVS8YToWSxZLujNSA99LF5euVu2EgHjfyuDBN9Kcpy1mw6fNAULSFH7i597Eq",
  "key46": "51dQ5Bp6QUpupVKFF1D9nsZ8Uzoypj3bEKVLm1VHB5vnXve6VKwDJN2d8F6Th2qxdgrJxE2btbvzBmVGHSQJ4Rzi"
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
