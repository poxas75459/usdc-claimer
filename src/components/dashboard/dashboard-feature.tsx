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
    "J5GrZgecJC3x91hEvVPqfJHhpMvUfyuXV74cVT4ETbzX7CgMjL8xkRBy3peCoNc5EMptXYMJuGfL3koCzap11ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXx19mp2cP419GohSB4SCiSiPS1AC18YXjv7s21GmpNmcE2geVjA53xLhcaaP71ufZfsYjFw3iRQAATdrKi2fUT",
  "key1": "3CizGm6D1YW7GkYcGvWDdq7gfTdKq47PntFo58EC56zhvPAW3m4xJuyt1nRf5abE8JMw9DSy7Zc2RaxpM3MiTtjR",
  "key2": "5ssjgnNBpVx94xPkjZaPFdGaEHFxCNQmq3MQ9ZFmCdR5SFqYbemWvRuzsEUhfbzUah9sRddoTitLiuyVGWSve31m",
  "key3": "2WPFLo3nRz2gnedAuRocGWPksZDdMjtnjdnKvTjyyMwMQrsVC6SNS1Re2UnatEh8qJHgjkWLywgbbrNfjg95xA6H",
  "key4": "3yX5bTUqHvQ7H2QRYkznPLA6nb2x6nDqVDzJcZJK3kGen7YRz2nhFncv6zXxNzMr5S15SqvYtWqshJxuHngz2HiW",
  "key5": "2H4kqsR3RPVTnmC8uAFfZc5UV7kGhmHr6oJWVjv9VXtcaocxx9GxFe6G7KQ95GMe3bZn3w8jEVKY6XYY5pMXngc7",
  "key6": "3zEBHsZCSWqM92wnxtdCu4CP4MhjsgE9aLub3C2Ra3EbHdeJRfmAy3PDj1i3cz5n6ExR6kseU1qPUGt6efeiTjrL",
  "key7": "KruuEAzZQYU3e8ubmDfz3fefZBRjvHcnLqP8CAxJ735UEb3LmZgHYLDVp5vYuVz32smz1F7fmHLfTdaM76Jaci8",
  "key8": "25YD8Pf3dUWZWqYmpErdg3fQrBnhku98LWfiJPnQVPcKVST4wpr52BwygqkX3eXGmk8vDCSh8haG8CQxQMLxYpiP",
  "key9": "4tRgJYMTLv9TL7PhVNpBX3w7PPKkJdiGugP7W583HAbAoj1Kwb3M9xemXqb8QLTPusP7qWBPy2kW6dZnR3PQzRC2",
  "key10": "4Qr1BiLgL3pbDWQF4VAHnAuK6FhgAQXvS5Rmyxku3ZWZpF8yv1vMTNZVYxVMAbHh7oSQJwa5A2iUWNrK1r3a1Bvm",
  "key11": "3DVvhsFLP8tmm7rkkYehuKAPPbE5k3temFzbD9agqxns3WcvZZiMCkNamiapCLEUaABDsezdUMjXioQF1cga7Wxs",
  "key12": "4hKkePvWPCP8vnMjsm8U4CiGV6oBVjbFmFHcKcuVivbBb6sJXDXvricfVPVECTUpubmHFxGbg8mZaq9vS4ooRauj",
  "key13": "5Fot99855bmQieB1vzKszGoVVtxskBDqdkSnrcZTx98tgc97pVxfkJ9e2AB7quxnX6yNdVEPTC831eP45hdTpKW1",
  "key14": "3kf4jEpiZZq1SgFWJnEZ8cK9GKiChRPWq4ovQt1E97TYznPHrGKUWg4KfLUiV5byFyA9prb6BSkuzoRXQWHvSzPm",
  "key15": "3QuZJiqUef1z2kYjbQgn5iSijKS2qjBAUKx6HmjQ4kNbivW6Q2NsJc8ECFh2uTWh98beqVYmXyLPmiXwiviJMb8Z",
  "key16": "5ZTGzcSBrX8Zap3BzQ4neZdWuyWqeA6Ghw7LEdZ4KnyxuugordJxMd9JqKdeaMAZsQtGoESy6t5xTTKYxbXCYhPG",
  "key17": "4qorcEa2NmBDcjC8dcZUT8bkT4d7ACzDmCna9vXQsadmdNMiXczDwwNtWa5H35rdbcXk4F1SYJKLyKMJ9j6TmYP9",
  "key18": "gazeqHhq5o4vNnY28caUiVZMa68PBsCqYs3WgHNBZANf7u72qg9BB5yozmNXuY9p8sNy6veotLqcZZBYuyFi79s",
  "key19": "523AGuMmmnC3t8aibPUwvpffjpyuzcLaJ6YesHHm2ubJwzJfSpMVA729NBByUpMwJ559ioiffX3Q9aV5F37fa1m8",
  "key20": "3XhzjAP9vtrGpokrFJxsCr6Yz21QgVf71nx36zuT4ewKk6M1i6RNQ73fEVdAQ9sHiEA5tesQWNZsSdYWQny3BXmd",
  "key21": "5GrfmdU6hFUmxT1vnejrGxChBsqCRTK66rSNQjuGNNPZcsPC9Hzor8tHa6Q7hFTMYzLj2ApMZwDVthXqveRsdpwp",
  "key22": "3TiyDrK3Gnvx1jQyPLCviaL5sPyX8M698scdSYmK574BBq1RGxXnaN64RDCbw6jtpwdgGoN8dcgmFxf1xama2EJR",
  "key23": "2LX5H8wnrvh2TXK82UM6E4mESoLhRyTXdzcAtSQkGdQuVcwP43opVe7hwSWf2eN9ZqYmDgwaKRkMwHwnfp5VQWqf",
  "key24": "CJ2u2LC5vFYzD6zFdn3Vvx9zVGB2LgRHZQFKBqQ4qyGerUb8Z4ct1zs1eczhdQGK5g5XRGxMqzZ38L5ZoD6zg72",
  "key25": "3tdEkE1FUxbxu9dK7Vz9UBVAuynVGjPCCf3MNYAhuhS1geMzGoc3Nven7vPKwb7GqFSSpez5cTynjRvvgUxuxQGa",
  "key26": "3WoNppuMiYoqsJuTdGGnTHZeDpLTPZGfetbRDpmhPYedx2R3pS3Vd5cJhzZKNTtEGCG4XFLiLNEGJv46bgEQem3k",
  "key27": "cnkCvMgVYznohbDJ9mvPM37nCXAwLo6aZcp9LQnc1ascq1FT5EUSWMna5b181sGY5C9TXMgypM13n3g1Buy3y5u",
  "key28": "2hb7rBHtM2ZR49N9PiaiUXLVRm7qnYBVnjpsnHxx7KCXXyH3pKxnhMZLBr7awGg2McrEHJCQi9G7CV2r2NZaqFDD",
  "key29": "126X3pMzBvCmeKxH59zsurC7wZTinZvWKKe74vZuDSUFuQdE2WrCToYDMgpeGJkm37pf847dAyipMzSZabFRyiPG",
  "key30": "oiA9iRF8x2eZrZvDSLVEC6Zpi5rKEC4ySdzATUMiDK8xVWdKAmwyAZccKKWjZqSNe4HkaaMQFHFgQGruyCC7G5x",
  "key31": "2wpkoGNJ7LX1RHGHP1UAp5tQr3z4CdyXYEnSMjNuPrsW8DoiSk9SBbxoLd4cj4DUYuYLEnSjBCifYY62x7ucbTKK",
  "key32": "34LWxzKo4bjLXkzbgrQ23e6sDR9LjaNbTtDYXsfrLZ5CnKZXGEtQAPhHNYwjZCJ1YCwpYns78DmkCRgGcUGTKUpw",
  "key33": "2nSM7Z2FguaPCzQmBHT61wLoYi3Aq8zFnwmP8H6TCN2BKp9vQZ9b7r4eT5zV3fSvtuF2MS2WRc83rpf2zHinxiXw",
  "key34": "4Snaf9GpE9dU34Znog5wCVR84zyTeB3PmoGeJpWD941SF8mMVpQrRFemjb82Xxm1ARzNijhfAm3wXdmosuJ9Kdek",
  "key35": "49LFErVxE7e4qfbQbXXKeJx1hz35aGFBZSFHjpCN6eg9d9Kpm1DrnWG6M2gCWG5ok3PhGA68Umxww7dbCvPCHQZJ",
  "key36": "4T7N6yBczTu99sjRghCMQxZdhroNLPBDrghwhTxwQhrQmAf8stsmoNSFfNwtKHtBYTTEBBu4r1k9jMZ57R5zH6gs",
  "key37": "2y8rek1P6P7Y2f4ViX2WsYwhLt6XLkku9Q21oKPJeKJLVoVwhB6yQhJ6wUzGNHSKcoWH4fEXngHgHp7ntM5zVHPr"
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
