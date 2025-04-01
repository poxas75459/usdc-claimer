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
    "45CtMejvzuyKShUjUps4itE4VQEazHd6CUnYhgQXEoBy2V3zzmr5b4GiWijvPu5Z2kjU7ETiEo9bTYRbXR711fqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577cYVqNy8ZPyJk9cez3nwiUVqSsqd3bcvGP2bp5vmaWKWp4MFRo651QDEQv53X3PyvryfgPDFCxE87gqKzB4YdF",
  "key1": "55Wbp7ucvSymWfzLH1fo9ppJUWaLXjSPaTG19QWqypsrCaxvMK4TzAzqL4U1dStkqEogVbDpgHt5xJpsxgSfMSya",
  "key2": "61z2nrbB9Niek4etsG1bwnQATG6UhBqgvvrE97ksQhfbQhayjw7jP2khi8L4FQdrciRAydtFH9UmiUGLNewMfTrj",
  "key3": "2bBXGTcGMwYsSAL7J7NXfJhiD1CN97bePn1sKRfuJeC71vR9cjAQDxfGxg359x6wPMFjkQ3M7yZQL1WvKB71fu1A",
  "key4": "2FkSgPD257BCCWQgMCHp1vZmH6Jnfkw4bvoQoRn4XyEqfCW6FrEn9QxpbTiV64bp8U3S8UNxDe4DJiY7KmKLvC4T",
  "key5": "3kjHfoApnkMTagPc6M2xwbmW8S6mgSTSVEGk2dbK6CcftaVLZfACrV69rhkvWpTTdZmqsMeef6pzDwaKHvLfwhFm",
  "key6": "4v7qYCpjt9njrfTZio86MDToZbUTEE4EPfqKW5uXE7TyGsbSJQDwuUfNSKsBUB9UxeKcm2qeU4wAjrGgALb6tJiy",
  "key7": "2h8HrPo14WQnPD3GUtpYsBHqb5bVw4ryiX1qR3Ye32AMqkG16w4nAsMSAvYQrg4HdjHd5gS8X4cptwKmuexiunF6",
  "key8": "5tV4ZwB81sfZnfHwTVu75MW5Ta42BEz7GYg7HDW2kb4tbLQRu74xLjNqHYvPziXZGpV6p44obE4qbzK3knY5F4e9",
  "key9": "2PDeMxnboSdS9nBMyaWRCwT3Lw1xzQ67DZoMU2Wmp4M9aFnMMEvAnEgZ3icAiczirhSLfgi6QBXSMk7Wv5ZoFFhH",
  "key10": "DqA942z5KbvpdiirvFRTtBqZTmsxMPtAx4v5JPjt1Kdc1Fv5XmBevJRxwcrz6Eq41xhogjFnzVNHsGWf3pgD2BK",
  "key11": "29i79yoYNJXFeiG9UiFXGW4XB1FZ3QEtTVng3HGHwmL74GEje4TWj9ii1FooGbzQBpEqCtTm8Ggh2qbVJsaJ7qYn",
  "key12": "284EMhf66yzn8iXnD8N7knj4M3Uv48dQXB5AnHNZ1z2Kxhd3VKV26iLYDqBiJHvw9Rrvh2XGHV4QZwDpwhvnQzg8",
  "key13": "5nYDENdR4JxhXZ4oHDNAgG1ajZvvwV5zuaHXMQPt24v9NBd4cZG5wJ26N3oKtF4F97TqNJUoTXMa5DKVMuwAt8YC",
  "key14": "5c9wkdj3conAuzqPeanHH9T48o8r4gJoRcWa6qREttmyEzjvw2TSK5dYkc6tdmkvYsaRr5DLbfWD6Vnkc759BFjr",
  "key15": "aV5uJTa1aQkZBDLUSuJSkx1PiNCfY8uCZ5GusCW1W9ZrmGUrpAtE6Ho9L9yUXn4Pso9Nq9K61fphcQuQqYehjJB",
  "key16": "xMvvJMVDKzVvWuCKA6Czb3xuuZxWxEsRdXq3nwC3h21WAXMTRwbKcQJBsj9h1RKLGdSFw6VskM2W4MbSXGrDsks",
  "key17": "3oMta16WKfoMRGYwpyS5tWmV5Gsfnfr55D4qmMXMTawydxVnhoY6PBfUExeSFL2943rBdKxm6YodYhPDzS1vYuzL",
  "key18": "3wzE53WSc9nuJchZ6Jx1NZzhvE2KN2XVBeodoBqoLSSEvjL7SjZc6acs286dmPtAHFwKSizuK8F4mcsBi5qC4ckG",
  "key19": "2xnWVWgTkhWw8LeUfxyKeVdwysSmqmuUDBNRFASqtRkrkUpLVTSs3vK67EqnzMUQmejefbtBYA2yycFKoQpETCxr",
  "key20": "4vZQbxFoyhBG19q2BFxf3tEBK1t3GLVogTVygP1GLQSntMXSNsxPujsxPpwika3KNRx22Nh5oUY1LLvMuMXTjFit",
  "key21": "5CFeHmSY4QDEEm5afT9nNbqpzmb7LJ2wL3Mh9jj4Q2CeSF4KCYrZRy5QEKki1ha5BmjFnVwcGvP5Q1ngvV8FHQ6C",
  "key22": "2n51jdgb9P16ZLZ1jx5Mu75h3xrVRyizTJfJCep2wwF7gC3WvDYzwgjQWwpHVB3gVvgH1vPf2NC6i9t7vjpHcKsC",
  "key23": "2Xwt92s4Crkq72DjfuuD1CLe5LawPK242okWyusrfD7iKJH5N4X916hV7ic4YiWU8X2NWCnVdaP3bNqzvSoBAKaN",
  "key24": "2NaQN1Bpk597HodzvaQRJCbbymjAZPk8SQL4LjJN9qSJn19ySh9nYGYafw6L3mANJKvkdbf64qyzzkAQ9x5aVo8n",
  "key25": "3LB5qvPgabMQw3yeNRbV9JDTyCnfG61t6yt7CozNoAtDQA1u6XVeHzwMvxKKFFVEsTN2hMPrrp2vysrDCWTAuuHa",
  "key26": "2GprvDnHMoqhPRDnUpESWKW1khhHcvtV38r9dYVU23GTg5ENtnzv68dqBQAepVTTw85TWotnnTxCz28xtiYk87fK",
  "key27": "5eqJJzG87F3MHmf5FT2rCvAE8nKaNo2e5io2ThJyqMNgpXvrZWrqeEchhHs8JhNzcwKADZwDXB7CvjJoDZAkiGnD",
  "key28": "7miFRqR72UZ7ex5goHWUMw52DxjEQ6cTB7ei3itkqBi15eMJvCHTjpcS21XiHaLta4ucE7BrPH3vtvrX37QxXnf",
  "key29": "KnYt9TDPB384exTpXP6wzdP5x5eQapKsZmK8A2W1RS2ydiXTc8prbpaZL6gVZQuNS9gjL8FL6w2fhpghSRTNaDK"
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
