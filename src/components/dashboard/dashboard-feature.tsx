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
    "2NeDNdcjLURJjqa4aVGhrvztWZbvw6uuZcL7twb8NmLZZogeZCWomDpvEeY5xtX7bRgekiUYSqac4sj8sW9oPhVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kdd3N2cvXaeBwqChyyvn6FVxGDmRBZFLzZsmRxuBxy9Npo3rGmdNVQ98R6xkUg6uFPHoJpyTawQ8vc4sRrtkmK",
  "key1": "3Fk1YvJUnDP76bbS5Vi99CtrsU7EBANnssPybEnvM916MTrwCS2AGGbNbWPqMyBCfmsEp6irxGbXeLreSSaBUwZR",
  "key2": "5BwLGqHDFHiGn51bMnLdrbaHfBEzBfQsE7UhrQGGfpCceGb27g5ktbs9ZWiWGYNdqeqDzxnTt5Etiqm2HnY7zF2U",
  "key3": "61eGbAaUSCLSEZJkmXPA64TEzSWtSXpGxKQ6WacnLwRCmkHNYnGceUuE9vgmiBHiK3ASrP9bVaehEfCBUBZvnYCt",
  "key4": "5bCbd4b8xMaDQukMQbtvLjWLA2D6xCnCrFNofvnp3jjYeLtUDpUyTx6djLprQJMf6np5q9X1kpdz6rnQiuGpUfzn",
  "key5": "2xgQobZYf4Y1iesqoQBojFiQHTWsxwNrBW56Jv791aM9KhGCh1jkLLgBuq5esFBD3TXhqKmS5pY581GWuWxpoU57",
  "key6": "4uhzLbufMuwz1VXRbdhbWohu6YCYzRr4EnrFzzBgjb5FSssuZ1n9dQm89EtKDbERtCiSJmmPBZ1U6ao3W6MxNp6o",
  "key7": "4jJQxx7u4jiLKq8G1ikeb5n3y5Zjk5v1XbbftczQsAPnfp2ZpdfLE6L4kyB4kZbNtDZTFq2y3Les2RPabXqg2VZN",
  "key8": "43X7wC47LURemYqbX6m7KH59iTf34NZRxqajkQ9b6penVTW72sLjz38zivRGRRg7c85nn3GXFAvA8Mc7dzdTvvJi",
  "key9": "3zEurEgpWufJm485sKk6TGHMvPcCT37PqXbsK1umumUPEoyy8YSxoqyDafjW1rhhxHKXxf6CeoGhzDQnZzdjJEdN",
  "key10": "57LBNWpv14zKdHxxc7d6K5kqu7QzLbgJdcV3pwxrK4RLjsvWusswqzShyUmNqu8DWYGgzCpdaM9Sey75gFu5wkfu",
  "key11": "EAEDkbXezm2yBbTRFnvE1U4h7zt64MokYMbXx7rhVzNjjZX5jNt7HsmDuHJU9Vgw65DZuwQxeQM1ehz2pAd55xu",
  "key12": "3q6UL2vpvMQs9dT3Wsb5sZAHiXYkvNFQAUxCgRvzPrZEfV3DJFC1eUVhj7HTDejc51G4749QmM4ortdKbSDCCJGi",
  "key13": "5ANpvGx8MKxq3UMYUHS9FwNEH18itUUABMnhaZd1R12zio2CaY6YvyqX8dGLupceYtJEtoQZ7D6cAUaoJLALkzbp",
  "key14": "3hYxgHw64ERdnpjWAfrNTMrnSbpE4k6vjrhFmtNXva4dm5SLQCcffa7c8y8sbMihDapm4YCJ9y4R5F195cfxo8xS",
  "key15": "2mEiM1AwoQV9qApoHe1PJ8Y78viFYS1QiixV8P8K9TUVmHgFFmrjkNrzKwsfCjf1TTYBdJKy1fHR6huLy8kYwGLb",
  "key16": "4J36cerbywKc2dB5SwC8ERkdQak7XiPTRHR4rfzW4XTVo7R8ymxodFUjz1qq1Tz2dh5siRUPcPbT1xUHvtHck9H",
  "key17": "3hoBfL7KZPzHabquZtVCUV5Uq5VoxnCnW7FVRm4KyjBHDTEwGg4ChN5v6uWi4suDZp21k8JiH2jQsEH1mZffeUoW",
  "key18": "2oKB6dSocYMe2XhD6cPe1QKTkSQnXeoBKMMLL5KFwfohsrvz4HHKf2HQi5vLQMK8WxS4FNdB4QYGJzC4HErPTS5K",
  "key19": "AqMVb6DziQbhvV7zYNPdJNHUA3ttiajjfESEhBimetdS1tQotKuxVCzFF78zoUuon5xbUaFB22GnXsfuUctPF9A",
  "key20": "5kxXBuFFxpX9CWWaQCL41a4HJbJnA3K2WV2fjKPnWpKc9zNbCdc2MDYQpeXsCyvCdVH2vkrNfUqiwurcQ9mKigG1",
  "key21": "5xmpi4Pz4fk4PWaDuY6RmFRs4m8fmGaBSrPPxiDRQ3qaTTULqGvZoKiEmMBd9tBBPxHGFtUbocMpNNC7FKYducib",
  "key22": "2FeFZ8TnTPCYZCmoPQcPi7LPzJfM974fpz4vw11sWdmfNCi4Z8ezSsWvobuFbMRumU1EmApnK7LE36APUyARVZr6",
  "key23": "29p4km9E4AMG9HLDgmSsYnPtkEFcT7oNca1wjHhs9b5LdJVY4ggR66GYSki4JyrYAUK9Rxra4pGnScnhW15GgzMY",
  "key24": "3T8CBMYMEHxcFK4d4DLvT6BPTiWgPMwbPN2MdkSPVpB7vrXzkcFXMV72pv2MNCxpk71pcVFKFESRePXM3d6jtNbg",
  "key25": "3Mf9rmQ81tsvgqEQfM9g9bbmmtrSTL1xKuZDTE9Mx1mW4HyMEFpS47ezsVhg284Mdo7iyyoyUWLkCvCkf84BLYR6",
  "key26": "3ZXuj5p5vzgEhXCKjT1PhxqzuDptHLAZQ3XPhxsJH3931sxXi1dthJi62yeiqstWwS4xkEEYbp19nKucr31xoYs1",
  "key27": "5g5P84mEBkPNWUnorb1LrmheY7XYrLhKH5gRSCD69saCoYE9GrCniDuJ3nWHx6yqSWD8BK3wfQoXvXAHQsWHKRo",
  "key28": "5Nt3woBcNYydbatRM3ysw7xbje85wkHJsP98qveyc33V28x27jLkQQu9EWsEx2PnfrLJkCkFmuzqXgymEvmf4jJg",
  "key29": "kXxSzJGDsr9zriwLLknf43142YVSpH46PAK1FEmTa3qtHvb76FoxxXqh4eSAbsKAjDuQYhL1chKk5zWjq3SQP7S",
  "key30": "5sGCe1rogJJhBReizAD2zKWCeEu9eeoUDaShU2WoN74xcYcz1FgzRmmTWvY8RpYrbgGtiNJnC5fnA9ZY7PNEihqz",
  "key31": "5cw3tHL6yWZaArug9rV1zkKeU5zsHN5XUMuLNnt13N3gsCnu27yG3jvJhVCNh1w6bND5rHRSfA23VfjuKiWU6dHp",
  "key32": "5EKvJwjEjWD8SoewHQz2s5mGt9qUXLmJvpVutNNnYUgbSj1VuZ4quby7cH7NASZsEKzSXQdAew6MZK4BP62WnjnG",
  "key33": "45HaFr6NFLFNXDkk7Yux3hgJBfSB42VthJdFLkArxaz3KgbPoGvJc8Wri5FXEJZ8SXHY1YE2unAMNYNL64idEfJg"
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
