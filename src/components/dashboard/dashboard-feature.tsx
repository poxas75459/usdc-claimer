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
    "2Rrp33b33tVy8bRHAyD7p7tN5PfjrN8GY94iiHNWevZcKEndjCjSqGiCRmv3LnHQ22v6y7vUJx5tf52K2F7tG1Wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwfVphqagEzmPvckCnpQ7yuvdcX7hcjPePtcwCCW9MY7ZGAWKuBuRa8XgH9FEPievcaavVUfh8JzKT739R24QTp",
  "key1": "2YbQuEiVUB2UKBLLKoALhcbPPTZhHjUPgezR9tUkJXQNvXHGZw4exqqVJW4AsUCNqzogJ3qoixE9G3Uea3HyBkzS",
  "key2": "3XsCQWRAp2WievUwGsEq5tAAf1gpctYr6uM6iuY2FBMCLh5nzjekiYpNhAxLAcictWokWihnqLd2pqsAZKr7VrfR",
  "key3": "2AHtTytUvcDPWmvDzMmMj5W1XNS1v22mow6uyUuQbCZPs47Gcff5eeeEaK9KUAMCPPnbRhfE1Axq4e5XCJH26jcM",
  "key4": "9FnLBtdBpoJmaHW69y5Eba72XYjghnf8dL9ykiho6CsXAPCYi2Dtb19GPpnfEgUouDGRjwiuEz7t1oP7j2pfL77",
  "key5": "2xCLyGUWWjCAYNSmfLtE23uEPtsQmJPcJZAwNpfNyrR1rgBJw8hX4k47UNbyM1K1kdu3UH4SsqV1PxDKkXwJaGzs",
  "key6": "3F5pyWAfbVaC5DdFuiUMcKZ8cTPjjwvPf8QAkbYbtCkcPJbWV9xi7rJr2KpNMYz5iYj5Gzrg8Wh1X6C87fgcQKbG",
  "key7": "5vrJ5Si8UrsK8B6sqQd373zL7nV3mB8JDGhkXPYktFXRyHgHcxpeUrMsgbX78taX7fZ1GAmRp8zCpe24AGupAo4f",
  "key8": "2uymDZ532P4MM2KSPzTpq2NpD2rbHpH8WKJnyY27hQprqWVQpPom7tXd6ZXL7sb6DWURpszPnWFRk3SWZKXeNVLb",
  "key9": "2AjeLyRvKauH9dhgoFWDbNqPJBf6C5r9eC9phJyzRuuZckoiLSYsVq44Exmcx6iQkj2WAAZnELfnPm95jiomDTKe",
  "key10": "3CV9EFvxKxZGi3FqvqpM5u23vT8mZBCwj55vtNK9kfyAjVnku6kXxy9eTsCQpnbTXoohtpPHAjTceX7p3bEEC7jF",
  "key11": "4MSjEEkMoTybKyWBeukKLx8YRfxm5AjkJEPhUx9PUxnePJu1i3mcBpeyooA46wtCc32oLggjYq2yR8jxV5ra2rdW",
  "key12": "5u55LSdJfeTicTxHbpDdBjmSuLjhDKtrfHJKAB3HZtM1dpQTNdHMoC1MjpQL3FvaUatRrgQp4znhSEVg2h3UAsJK",
  "key13": "4ZLbem9VVSHa9XoBWgg3hpFtxWqhxwXJaeQGZTfHwnmhuurbC9EX4iHq5imnRkjYongArHxpU5j5TgLerjMARwMA",
  "key14": "4YfUGSNjeBNB65Y6mZknAnJquoTPewnnZdZEnxwK85S4z19rbVz3EnfvYWjtJumrjt6yQ3VWRCJoQcDXpShragAz",
  "key15": "5oXnzz4XuNbKCyHrgcMCahdfTzLg6M6ZaMWaEJxoshDWq5m95GUAn1jg4Rx7Cg3Q6tZRQk4geqnXuaVGQHL7uwqZ",
  "key16": "4ipackp8gQhzjAoyicYej8iBR4QLRuhsWtHXtvRJgNyiEUEzN6uV6XaSSc3PPcm4up1PN4wJBvTYjfEbtw1XJjDe",
  "key17": "2dTpnN2Y4ov47khhxeCKHbDrjeGdnV4AzbmQk8azJtVYmRzCPNwQmBVkmhmDRh11U4ptnrmtz9PMnoJrhknjroo6",
  "key18": "5fibDyXpWXcu9LnZLt3tbLnXuPV9J9oM51R8MBuM4QAhr3oAGE8ioxdrKtNCvLWnqtaC3yNBrTi3Ggy5Es7X4qDK",
  "key19": "5shy1fjcG3vVbtaPNi6MCBxA2Jhc9tzRTAGBr6etroaU2NxLoLNxprvkUnUbouNoiQDwVPrqo3fgi86AHXKYC1fr",
  "key20": "FaxjZLJY7PH8Mrhgg1FbZrTyy9fRvYtKh9DiCP8RWT6bviL9thwUXYhay3iApE1ZFGsB2Bojni2Lpf9yxVjV6Mb",
  "key21": "Zh1iARqBSWKsbDYNzsC46PaagfME8tDSXoReVbNsvMGSHg45c93xh5EpGEfW8UtCSaUnv1GeHnfZe4pbQvsMVas",
  "key22": "qenfhW9rzCgnLScaqmTLSoqreqWp93ZGX3urMwn7CsQtKz6hfaFYBDGH89KMppbzxFZ8WUv5WUFoB3mH5vmfAeC",
  "key23": "2fjZNcUhAQdbUctuamD5KxgFNoHkZQQbmK6wyRupq94khMKcazXyjznVcXkN1Qs9nWUMFuNJLH8PyrjT84Pa5QXu",
  "key24": "BrUAfSuQb3cJmVQmMJNDuswz2R8Sz1KS2J8ivY6sxknXzvRSdXCHjcQ5sbawpouztEeARUFfgaJ7x2xR7RTaCLA",
  "key25": "2TgrS1kFUDcg7LT1gqeuddxomB7WkC16ezzRUoYg2oQUdRgpaQf44c5zcNMTFsgMTyeeB6es6Wky7nQwujfxCZwv",
  "key26": "29cr8JaYTWpWbkfYPhi4Duz5xkMf8SguNz4oEVyrWmnHNGXvHMzvgmWmP6M4i8WYmnsJJG3S8TJsqkhhKEpmEmjC",
  "key27": "1TG5QirdWspKeHcKZWzH7gyJp66pdaEwg5Tr3MqAw8jZ2twH7Z9GENaFPKkpym8fE1NCtsBTe8UoMrGT8pt26Qp",
  "key28": "2mYzetxZ2B5CZc8yVVTwmJy676tALUYRkLcGq4oDxwezTGwqk1JaqnMgYY9VHcR6Akp5vCYjBwHL7wrJ6trLDLdy",
  "key29": "352R8gXHKTuJwCVQGHTdqsSKPosthFP2NU2qQsMDWkszS8Gr2UuSzgRLW8CYRHfiozVGYBd5byjj625dC8uyAWvP",
  "key30": "5K1BVne77KbDs3uTKZUKSNN7f3eRHXi2ejyCM2YafxpzZERFjAKLhP6ovZCghYZf1UCvsheR8WMza7CbZCSkrRHZ",
  "key31": "3cboJyMLgXP6B78jTianZzXBDnYM8jpXwUi6RQTj2s1eR7yT9nbhHdauTArAdeXsKRMREMyLLBLX2dGCePGzxf9N",
  "key32": "3coraEKFcBRYh1jpKkafeKmPKw4En56WvBBVxphkzW84hjbkoQftuFYX5xDTmn9TVLz5peYJTFswbbYnQj3DCmyK",
  "key33": "5M2EhZzx8YKeCxdUrKtqMneQ9buPBFN74B7zPrNz5fiZd3p9EA61jg2zd8NjTXyj6dHij58ysZw5BDURDrT2azSF"
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
