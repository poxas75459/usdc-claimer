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
    "2CPt5VjG6pDd8ofH66oMygaQsEv2NSY96AW2VKVhLZi2rtmNLed3nQWHpF7TyRDxWnbFigAhcQ1f8ysuiUnrit5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sKfDHpZH7DUUzv6zKon3YimhFzX8ZAuTQzHdNMRvmtZ4Q25vQF2MqkC1JKgp9USFt6JC4Ciamx2qqufkp5PbQJ",
  "key1": "3f8AJLHNbk4Fe1UcJmTRPiYDizD6zcGPbTG3VQGo9DBt2vzNe3Egy51YoLSQP7LdrR54TqbQSK7xrXvAXsNtqNor",
  "key2": "42y5pW69xeWoMHzRE65BzdbrM9Zb5uJ2aJMd9rWmk8TuEWsGroXrY8MHaQSkBPBLANpXBZ9MNGn8EXeVecmYduky",
  "key3": "ifszk9n1u6KuLWqCggvrysuYpyvUDrAG6HufyAshbLeefnmTfuA9ee69Z7bP7SUmdWeB1JEEydsFFeqnq5gD3Tg",
  "key4": "5dHoja5c8JJGrjZ1CNhw4c7A5cv8R8BXje7a6fqUUYNcigsuMv2pu4pA9wDLNgRHCzppHAJ6eezjwEDEisLSz5eG",
  "key5": "321r9PX1PKuKvxrwsspwp96KpugyVGrznohWn4PM2buV4hY6TYrbRNmfiYZtJWumZKJ3FcRxAxh1wBN74GeG22uR",
  "key6": "5ExM4yeFhy3Q5BcJpjxeL39NG8QoUUZmkZ1sFHpqfaKqjPRdm6oWKoHDpkJYBYsBegBu24kpKYZ4oxh49G88dXGx",
  "key7": "5EvxsvszYhjKgAQTvCmZa7PWGw4h73UoYSazouXTjYxidfGDJLNEfbTuz4hrt6jZgyTVvoRKkGutLcv51g9xGagK",
  "key8": "2pDh6maAXnfngVKFnFsmWYPM9jVTP8h8fx9x41RcVYe6QFZ2uR1RbZnRFH5aPH8GpBPgjtqZ64LTjVhYAN86T97G",
  "key9": "23gg96wRHcy3TXTrRqyQkn2KreQD8FGjrwDdDQAVhCQwk9hd1ex7PhjAgx88U9rLC1BxVuJuukM74kwiadxZmkUX",
  "key10": "hHu1bd2nMYKMEuNTfEkh6V1C3uxcuhgxDzZL7gT9sbSVQyQdMGFmR1LoxzHS8WVK2MD82AyBq4YeNWA7ocWUFvT",
  "key11": "tKDaAMR7jFvYmYGg2B8RimLPzcjRauMbR9WNt14ZTtFFP4hte8wHXWHmf4hawmSFtgx5AB3uQQV3uaduneFj9mc",
  "key12": "459eiSuhLvwrJWLPV7R5pNerLtDF72q1Nq6Q39WCpm6gWEqBLuN4ZfGJghRmGMciMyGgsTHeFYuEBio2EmeLLqxd",
  "key13": "3XSzFXptQcdy4nkjRV8UXm1nPVQopNwBmaSTtxtv1MrQCgjkDBEPua8vcXoV1i35EvADddDp1fD6vFmM9wqBsePL",
  "key14": "3UuvzTkBFT38rsTGAfgwUTptYv4uk6VdATM5BR3iRiBxEF9Hh3LXJ5YrYGM8ttcvqq9P8o8GJqLp83k7kDG2vv6d",
  "key15": "3op68TCbvbRLRm6yDif88aJ6LDxPT1mgWEb3YvrWBHr1ZRFpTYm8xNCHvYM85TUGicb5gX2HGQo99HVvCeKtXiQ",
  "key16": "25q1DwbNtdjQXMrLfycCHqqCCG7aoUqa5LX4fCSco1dZArnrmVyamoCsauHaXAHBAf1aMArnjTEka5mdeXHj1zD2",
  "key17": "4HwFrSSM1GpAEui6vyw6E1Dvd7kqa1uWB571orgw43zLevp4K1rrtKaRdf89C82z8mKNxhzdAUQGXu2eWpRr2QAb",
  "key18": "5zPTX3yEiEg6j8WAYiXiwd66WmpKThF3ZsoRo9ycVckzGrDmNCzcySDQzYhuvwcFj9MfneUPiBkrH4mxj5xxtDRr",
  "key19": "5HCDR3HFQ5fkfG5gWpjRAULSd3CmwEYPfJsiStfBGG64izRzHmrvEUyvXvwDUs2SBSyzaptDLBS2s4Tatd9Ns3WN",
  "key20": "36hda4vEKdqT9fCYLfDR9ZWHtRJNoh2Goobv2TdYVjqAH65h2L1PnyWo4FKxDrACDwHxdUyzaLSvo58UQuYmbhKs",
  "key21": "pZggELpw8eudHU1VAyspggn3HN8sGxQXUieM7y2tLNWAqDPEGgFRF5xUUDyafVNX1HXa2MMkovEshUc7qDZYjF1",
  "key22": "4W8XGA6v5Te6E8AKyN5irqrLG3AxNCqEoCPFsBmNsp1JittzUWTdfjdmWTA8mnLzwRyqw9pL8ECdyohXWcCMtacC",
  "key23": "3BFoVv7RSFEgJS2GvMFqYPnU5Hj1HscVGrJAtKqvQdE4tJpuW5jUiRdfxQW6rSnzFx8Qt5f2G7NHxbKPP5Ev3cSm",
  "key24": "zRuoEFcGhK5CTJYj8baWKsoNrTjxvqJRaoME17ageRbHVRiMyBv58WXd79YJBsabUQxkLW16ae3jueLJ9aP9Wid",
  "key25": "36fmK8mZ8Ate7GGR3fpgvYRYsoY6EDPAAgv8yyTstNRgLVXBF2E32mP5GGfYLU7oa56uTsrrBfig2bohLjeEcatH",
  "key26": "3aWzjVjV9mVxmB27CTAH5pCqHBQvRbUwy8ko1HuPuGZHpvrEJwnTVZV6FCK2hDGr7LhkqgMWJx4dULYckCpP1R4Y",
  "key27": "2wzB5dXqCandGjXLy99sW1uSq9pPn7Ey1GsqiQBdodBmWMYZUYtd3pXT9CJ3tdf7byLVkgnXmtbLtiikeBrPhUMU",
  "key28": "4WwXXxqfCcFeFbnd6DxiQAhWsKcPKbccYdLdfR77YmWcxPfdsH3tUXGR64Lqga3WfisLGsoa3BGupVvYkdumQvLj",
  "key29": "2fJ1eC8tFD6LyzZQ5FHWzPV7DM3d6iEA2hZ6ZvtMRXp7P6A1TnSW1GQsK4vWvDxt7RXUobdLxBMmdvEA7KjFJWXm",
  "key30": "55KKHG5imX9dLSHqSQtmeeX9XUNg8w5yd3uQJQQ66m5UDHmV85UCrFfQ8H2fadidwhCAkNRDgixXrcBNfxi1uuMS",
  "key31": "4omLKS6fHUvRRMZjBdJWdufzfKNJqLU1KHPBWzErptUkGTGW9tRNFs5Yqc8ZPuF4iKZaXZQnbNt4JneEYH6u7nBC",
  "key32": "3E9pfqP1PGsRFNd8dBfq57umhhu2dJRJkjNZerebcapmc5AN3uKLz9ZMsq8hvBBqTumaX7ogQSdqQ6MrVPvW6u4c",
  "key33": "6hNDsd8XXXxrmW57W1mjH4JVPoy13G6sXto4cyZqhvE872Cdj83fqfpWnCGxPfkhZDeBRBMx5TjgcQ2s1SPFJuc",
  "key34": "26cpD931yLdjh4AMQq4yitADK142kMxatiZAD2PWFzkQmAhLRH8Ltv7TZfYP7W5LEdufe8jkVsQVf8Cksp7wBnu6",
  "key35": "ptNeQR2GVabzpkvBekkVJNahSZAZjcCYmaLypgEhamuTk5Bhney8Dmgu26GXTGMpiKdAf8MvnLvtEZ2LcUSA7GJ",
  "key36": "3Geu9FZRRJkDLGibLfeVMDygv4iY9DCitSDYDeWQ1v3vYGUzxMXvQmJWwNNnNR9k7MzXYMSzWhjRHK2pboN6nppx",
  "key37": "4n2WKPFJtwL2SNQYUsU8A6fKgvqJQGzhTjkWBPr4CbnNL7uc9ysyqGDYSYJykyQMQe3SdXKLySYSeGKoCAXHt7D9",
  "key38": "3KnodsAoiuLjNZ9FYDCPF7ZCkX745x2aHrfYNy7gF2ykVLtvb1wjuaTZmcN4dLtzBGHMYkutVU9WtNZYm6PHpYvG",
  "key39": "5LGgpymdsiuytbn93tHU1vSNKt275WEm2QQGBXYcxQaV7Ay5XK1YuqtFgk6Hzk6nuxWxAtqAmpvFtcdAmocKNwVh",
  "key40": "2JZSU9b3ru8NiTGU9Z1knrqgUjSywKcaqeSGW9kXy4JnvdzyniD5Cd4zoyCzL2P4MuioPr4GZz29iXGcHGPBY3SP",
  "key41": "4HDrpmRkie8ksbeWQb8aGvwb5KUS95TyW4hUQHS2RoufThbx4RK75pP2YsBshqrK6eHc1xJ8i3soGdaqqB7RpTvp",
  "key42": "Z7sSjdmn8qUJbqgG9wkgHdGcC83Fhvh5Z65VNK8Sm3vWpSVto8htkJQnkKugWW6XxhYLKsNLAj44A9ZMqrUEx5y",
  "key43": "2SN2Y1VYe5U4ybcwfSg8PgVPBnJZz9cuuHxQ6tR5QYuAChTzoGWoehdo8e4GB3gyV83nTu2bNNdLRq6D1Wwi31VS",
  "key44": "oHTCaAMdP388UFTJ1KZoF2FYJXvXRM6ZKRL6kcfquCkSNpmBoCowJ6QoahudBfBomG6fAcSLtkXMKidsSgsQeLo",
  "key45": "2XDXopiebUjuUaxbqH9ZjZKXm2puFbx3p4ShjG3ReogVzdS4N6vM8YoYuekJJwic1iz7G4gYwKooAPnftk2tSSHZ",
  "key46": "3MXqHsDDSpQT1QoZz8s6P7wCYtDbWTR9GYwCSJ8U25B7SqBWYek36qhFjLJBMGEhBD6WZXAkgkihs7roiUWjvZDP",
  "key47": "4Yn98T28PkjrSRMwAxY26Ro4ghEce8DL6ERryY7DoLRMewxvH4eNPzZyF9aMoeTHZKkLa52TAKxHvZHQpfYsWz3b"
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
