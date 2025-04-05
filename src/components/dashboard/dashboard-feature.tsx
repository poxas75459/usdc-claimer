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
    "3fPMiditYVwK821XabSRV6TEFzknYGefAsCJBSVbYGxiHbJGz7dvsB6XA21K8FBY2ytyu24cWPJU4yDNEmpouMdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMnjbLnEdZDacSrFtYDxxzafmiwrnSzvD5XSi4YvVaWhJudwce3M84n5zggyUniGSgox7gA1qoCz5zt24KXg4Qr",
  "key1": "3vF4mAaZErL6iVop2B6Wx3AVg5hVKVzHoLXiPuxHgLhRTJpVZfr1YSX5HxMTW3nwN7LkAMWFHnohA3YrVQSf1BJs",
  "key2": "QqETcaFDSGST8PBQDMhsXzHWjmAgsWpdHt26JxYVeBKtZkPx7Avwuzmxn7TNX83gLoUDeYMGHfUykPWnq42y1Ps",
  "key3": "2eeYx7hsGbFNk56Wn8SPgKP24GveJSgy2KYyX7U7KjSwVJX792Ymfwke5Z9FCfpS36zm1qVVeeaoYAgRMxBFYQCV",
  "key4": "4mMSzK5t3LGoMaDhtzswnFteYjVL62W41AsDaLbMdpe26WA7ZBVbekFQHam8XPbRr5YzsS9MSrmgGRAJafNMv7rn",
  "key5": "4n2WJpptaJKq1Vn7Frmrvr3ef3boigqqH5UbgR3RL72FUL99D7j5X69uYs1YLBCJLygBYm2JZHSPrHwVD6BUyH7v",
  "key6": "5GgCLYygMNDdvJJ78QLCpV98dQvrSWXmTV9GnBUELRPqMCBmWontZJtQSTjbXpAnLQH8o61g7hJmk8SHD8buxyt4",
  "key7": "4cnvmLPZzCzXiBLLPiKN9rTT9DK7HSGpYYyjWquHLkYJJDQBsqoUZkEMLTXLphobFD2xYY8n9ndho9Ey5tH8Q1Pk",
  "key8": "2nBQ7hZdWRsUaVRj4Y3Mo7TdAbniwNWF5eozD9dQkvSzP5sHsVgp9hYNUpB65yiHLHLC2QLAgdy4SUsLxbL623xm",
  "key9": "HaaDbiJEjx7qpEM7rx81NAm7xmfViZyJqChSkAHYRFnd9owUjPY3fyVx3gktrLV8eHJ2mxNvBbzTefe8mk6tSny",
  "key10": "51k3F5GX3iUgfUZRD16VvrMyJy42ExJR5vtTCuvD6kTRKiEW8d27zs86NZXX32weaq5HrimGKUoPkH3xnCaBN2gA",
  "key11": "4wdk8FT2iT7sfxYabeBVwUW4fMKBEg7R8rVmaYMmGnXjQbmoos8MsEGLYUVq2oQN1QNH21qBkiiQZDxYjVt9Vup9",
  "key12": "67C63pQ6vkHotfFNANUtjC4h4xWHHmVS8vzXkf6W6uu3HBwwQd4Pzoc16TLAre5XcRQdzsiaKMwLKDccBHjSvpZt",
  "key13": "35BNbmK9hhM47iQGs6G7AszzcV3sg3joXUfjDwg4KSHymqV4ojKbCnZQYkm8jjNM1eXjYAfd3dCDXcgyPTr3LTd6",
  "key14": "2tqiuoYUNxQPec2FJ53BTRdGjTCM6Ji82ErfSgmwYsdL3m7s9yY16SxLpBkGpu81aJY1jdJiDamdi2PQsQNxP5y3",
  "key15": "bsqobzFUzhGpteeguXSFCwzhVDbQ1mFbFnmTsJEFY7Y9UeA2sUo8wyNSymmPkAaTu9XcWUL4rLm946D5Rf5Tgi3",
  "key16": "2Mawx5pgzk6QDsp46wiRg3LSYwyWSTRG2YtkPSxV686ypsY8w7JgJLG7k5Pq9VpTZQwUQtg5uBjqQHSUcjX8TwF",
  "key17": "3zMrvAVSHVVKFuh32v4mS3fysezbZZtgrYN8DU4zSWiezTCMRnBa53dnk1GeCSANKd5b3LtyeGRDa6DhuLVvbgdK",
  "key18": "4KJhkZrv73CMB1iSPfRhBmR2jdZF8HKoAJ5M1Ws5k5YeCQE4uh9PC62nNvbf9zSpuDkNczkn3Zt9Bn3sBydeH4N4",
  "key19": "52UScxn8UPuBRLWMiyfNDUz1irbAGChbMs2n8486wiTwe1VkYPdfdoJesxore8GKXsypDPkMMypLKVbKCTyX9cMa",
  "key20": "eQxPfDUogLbQRsuDiqu1euWoiFDdvaAYXZuTm9F4NrY2KuFQ6gRyxBDRpc8CTNyuuVeUa4cBMTkGZwvo4mFshkp",
  "key21": "hcTKkaU17Twv9tvNd7pG6xkZjE9iq8GDZ5TR6zFbEKKEqwRiN3SMEwLYdyyqKA1fqf3Fu44jAyWoQnoRL5gigRf",
  "key22": "2HhWxzW2jooYJUfdcSkoLJ7NLivGd4ajicVPBuTENpZarHEAv79Yv5GjGuh4f7sSgzMqbFMKYjpMuMvBudcu55yK",
  "key23": "5nRB5cSf8X8Q9rAdWefzWpkV54Z3W1TALCYrFPjfEbziPsrLTLbTCvedk6B9wFaQZqGnvcppVZmzxq73XPDTp4zd",
  "key24": "4WToSR4A1TRytQjudT2t8No9ftK4Q8Hw29qFjYe2oTGChHbF3xSejTKp1St1EU5mZLGXKKoSSeo9PT4kybS1uNsD",
  "key25": "4KwSdNEgEmC9dqDi7zHKmpY4LnM4R9RZRVJQhqXWbpDwT62wjN7Yr3DSVzpHusFED5NRuqsGEFEPdtvZZc41xpfM",
  "key26": "53DvtoKZzAECDX7dZiDSyfXwti4dZeNZ32C6ViS2TQYJ8oFWMQ71rU9SUpPbrAyXPbx24YUSMw9Lcm6oemFVmG6a",
  "key27": "4nbvUn2Z9SKeq7JqgHsXLx8LP3Ecm5nXV5wDNiDJNv6fH2o6ESb6fzhN2zvQUSo9Z6WTAdzsBccWAMZ2yHZVMroj",
  "key28": "3XDxApDNTLjorMww3sy3oaRegBKXtAtcq7UnkRz9iXhSi98deckiAjGpzND2NnfWvuJrQHQAbDPbNbRmxCudGyXf",
  "key29": "4hKn6FCCUYvvmcqTJWPRPhHyZJepbQ4fam8NJSGKy2VVJ5PudhToGP5YVxRx8rPqzSZN98QPps74azwJ9gRg299j",
  "key30": "5YzTkfD7xgAUdWPPwBuLPkYYg27mGZB8KmiruyxU2m4WcfZVEQmEy73UnVY1kpDb7p7jBLWSLHG4xsMcRBNNFPrT",
  "key31": "3DGd6fi19ePJnRAGHan5Q9UnxQv7AoTzhfTvp6qEvt32kj5DCGgECjE3y8dr1uFEPjZkgj9DMbb5qPTLgw1DKEXG",
  "key32": "3jwhfvpqNhjZ8pdEHttLxR4tZYcXMXLsn9dPdKugYQowHdZ1y5VtfEphuiMBRM1weeDecARAeDE1UwWYEkaUpsbt",
  "key33": "2QTYpvR6VoWMCF1W5M2bHyCT4fy3s4poYp7r678v6RXh6YDfx8zFNVsJuJyBhW23TWFP7R5oMRBQA97GaDVyv4mZ",
  "key34": "3UkcNSok1dre8Sdv96wXv39X5v7WkuMf2bFx3CxxgfFBaNsDXpeXtbk8aLzNd6zNmdG1gd69YczuwJ26FyBCwudy",
  "key35": "4QFVzqriahTHwdT8hXv4xi5NyPsa2kDnwNF6iGvU4hFnKzMEnobcz59jasi86ZJcFNYzUYPYq4F9ad3igobmAkRF",
  "key36": "33Fegy6eSw9W1NYW4CA9Tz83CJxVa1H5PqCFafyqqQGEfsvxEgn3M7jUEoFCJPwMwqYP7oA1zXJHiEdNv7WqasJa",
  "key37": "y7ozCj4HEu4exAw2UmykF4fFGGyaKeEdjCBuUs9JVxu6Hp2p5pFA5rrrkFDC1GbE3s2oeAfqacksJ5CtXdgYTMS",
  "key38": "2YrDCirBRGmzo4YeLdNxipDuAYReyvUQY8zTeoBSVGSFD7Uv9DgenF8XsEYf7RhaUwf67hx7HpyHvioV61r6EMQ8",
  "key39": "5EVcjzsRCM7EdyVdKT6reu6PsqRUA4RcAEi94MTuSkYqicZ7d6LizLHDzMPKAtXYytm13VU9NPi9YUR9vCvcZ6bc",
  "key40": "2xc4riZBzqtzYGJsx6iuFCP7xzEryHUhac3cDMWUXqcZontwLx2Yv7PpNQ2JesjMqPfwxtmuMWYh6BT5Ev4QHBwY",
  "key41": "3VJTZdt6ypq3yZji3efiyr22qMybQNj3HERnWLcq58zX6fEYunp3gqsi1YWJDSYrgjj14h2nJvF6kM3nH3PVkaTq",
  "key42": "56ujxu4akcgPy31ArHqrZmCnAZbcKkbZfLtcvcc6nt3oXx8FvpCUmyZa1F8pGY7mBwepCCfwGZLNn9q5hXcNpuPr",
  "key43": "5xCrQW8by2nC6ro4hhRWLXJeZPAXor15BZx3ev7WYcKYLkvAprZEWifCXKga8ynL7fPRQ1MvgzhWyLWQ49vSUdV",
  "key44": "mDKG19Z5wwZL6gfrRsAxBPibDm1fh6soEYxwjVLTUpCvwF9wJz68X3kqaVZYq8hKT2Ht4AB5EgGbY4sjofp7uCP",
  "key45": "4Q8r7rPGAHfsxePWgH6eNGZL3eqQRQZc6Z54JrLM9RKxbQztxkPP1q2A1fUasVAW3sExNEynFraPG8oA2Xe2UM4G",
  "key46": "5htUYYdb1Y22v7T5AFyCTuddpB7fKzoFzQpqU3bAtZxU4tns4BEa9XVWbGgmuCYcreZx5Hw9jwJ2S4jXKLUJsB2Y",
  "key47": "31dEXp26e7C4bsMmpEJAcgWpz82xTAWczkyb6yYda1puxw85PSmziyQYvSgrbkuVUwKALkKdMLs6HivjqbzYp3YP",
  "key48": "2HxzZPpdgFpLr9rVrtn4e4mS8v6oPtvRN266B6rt7BGP5JrgbaNjP6qv3yW2CR9ZNBfBUN735wJpEoCSzfiYPPeP"
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
