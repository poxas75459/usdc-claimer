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
    "5s5gAap6RSH7TRdbdTe3XYsoNQTXtVSGq4ijjmXnQ24UaqDT7BxuyJXRz63MNt7K381Yz2S4vBm2f9HiEXbXMCEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwchCE3zTmAL6KAMo5DLkBQ36KsFyk3h2Ubeq9FCXtzcQRdwHjaw3csNtt3Nb9qU5yDjNDqA519dh1MCGps1Jda",
  "key1": "3gMG9Gp7Fu34x42URYvMCGELZLHTpjfjztboxGjK6LoLHn8yuVtU4nXZ8uWGRZCmm1dtCDCsJ4HnxemtdxrJX96U",
  "key2": "3mDuGCPB8T5CUwjKZsyftE2DmHLyr6T7Vvzbbtcpf3Lqsjayr8BG1nBGkbnoCn3vNLnD99nwwci2tqFDDJoHusge",
  "key3": "4FcX6tPyMbPCgqWg12Fbx2uuGNqNygm1RpKsaic8siscgSJGeMsKWKLahrkzmdnRapobwGYheXJZVzDSR78Up8Pa",
  "key4": "5ET98GGmnHBfp4pa67ppyiJxcBPuCUMxJKCUMWQpZbhzZfHpX5JVAEGFbPVm6Edz5v89JKhKRN4vCkQsZx66jEUX",
  "key5": "GcKrReLGurALsabnbyVgYgmvz1qdFfGKQ6YQJt2NEpVtwMqGWAbpx1XFSbsPuUg4V6E6wNBKom3fiuMyiHs5zWr",
  "key6": "423itNZqUHDVxsg4ynMryUZgzwuMDx9qiM6HSPHXdiKFwUiDdDek36vPmvSsPcxZmBYfyVxxebAAKHWHW6dtSTX4",
  "key7": "4WaEnnUYux9izAY2nEVwmNvT2okFtSRh8aLsLj4KRcQDPcmmTJyMjHr48tcT2wxFu7aVpx7e7Gi3UJ9BrWafVmNi",
  "key8": "rfN8KPPYUpXDjaDfhmdnH3PCLjUKcs9SJN4mysrX8yLpN2pB2B19eNj9whTsYrnhWzU6cf1m1KQMrBhw4ra7MMk",
  "key9": "3gnn96pF7nueKKewptWKEAnc2eoQ7twTTTGFN1TgawPY2FYyMXxJurKNza32vyUkZo9rfpyQdJswFNRx3CjuGLr",
  "key10": "5sQKMsGiV4soZ2Z5fo3SrW7M141b53Szo9Ch81yXR9zkGkoo6HF8ibktzeXRLAPnTPem11KYsiyiwVQc38kuKBcJ",
  "key11": "5id91xRZsdKJU2eJhGxS5DuvPV5k5j6srPtByMQAzvrXghTmepui5yDgK5jg42Cw3rMQRyHZGo4YkPsCP444JgBf",
  "key12": "4GMo8ZToEwgLSVeGjc8Gwgw3UZ6uT3stSmEjbaR185zE1yEjz1BWNusoyK4c9mX7v714aWASpdXd4xJEXgcfdv9t",
  "key13": "51PraMLEpBfUdKXnz5k6YsfQjjuGfxAujkejPyims5CrALoHanoapGH8DaxWh6UfCkb9FUbEWZvC2eUM8gQKq9Sn",
  "key14": "2wqyChRWv45p3kBSa1ZVgc7kbt4fdGD7mmTGeTSCkGZPrnHEvvWU3gs7VXoxvrsqZuaEoztqw7TPcvKpxHrFYJ9D",
  "key15": "4qq5rpoXDHHEmSmvsk7JfMzLTLvkTmZopuNZDABxw1K9RR8PqyYnYaiU8ei6WvgbPkS2QvVZu5Hr61yeHK5nKBxj",
  "key16": "3n64x3rC9y2sENUYjTo4mvy4BaNLxNsnekkEqtHcLwFDGtTe8nXgCNWvMoDnLzmMJjvEea2SCvEMU9ymVX2dwLNP",
  "key17": "2zFLsP6HABtaJeR5TEcbbQpYdyJBp5kYYKb97qSPb2nArGvxViLsNekZf4QA9djjxj37SmmCAMGsDbhRbgSKu4Vk",
  "key18": "58SFp1Hx7SPERwTgi5vZuMX7nHt7ceocgKGrDQ7b9oewFGkoNDun6eSAwgLhDBj8pJM5wc6disfUju2HShmX5c5y",
  "key19": "4NCgjfQjaV2yE6F23dWJms29U2a7vnfiyZzhTXdLgN8uyo4yhS1nnenjM9oEgZr1GSs6mE2Vn9Uqcz8FsRuoRohR",
  "key20": "4nac6xDiyrecw8sNSnq99vs1Xch35o1aiqD4ybvg9CBKDz3EVbAxSa21ARkrp3Z6kGVqvibU6WMdSfXt9ieAmnCx",
  "key21": "49esrVK8Qm84YC7hfL81fpQgubr5CaUkKM2SxqXU2S7RRs8DoeF5q2drcwbjmNPZN5oijve2aSC916iWH3BX2uQH",
  "key22": "5GKCggNxF37P43SHxjXfqRh51eQ7RJ6T6APeqo4dyiStxprcWbs7YswojpNv2UVgF6TwFkov21FW9bAii7LAZ3eQ",
  "key23": "2okLXqHJGpMucPDec5TTb2WM461JyPZSDvHfaoKvTWPNme87r8Wrc5yqTLrAPtb6HWEYAZrbD6GmoGUmnMQWHnhq",
  "key24": "4wXgAXEkUfiFZLU8ArRUSAXnTtsab98Qnhw817xQTUXk1SscyTzaXvtYoiNjHP1Y8HtHnR5V68Pm1SzCVhxYeWhC",
  "key25": "3o1xadGajeJMPBCHdrbnZYz4Ngta7XZ6gpx68FC1myeh5wXAErRRzXv1osEqnQMbkru3ShNTuMz6xMC5May99Jf1",
  "key26": "2ZaSuHwH9EAKDQ6sgnwMnx3TW7pRVsccZqXapx3BVGQzcuJWSjx5xX5n6RyVZ2Nga4u7ymok6ZfzFp3ruJe3Z3Li",
  "key27": "22fNJMzZGE1mNjF7RWScuN5uPLvcHQDotUzc2vUxqbapCrAyBzisLfbX195677NLGiYVke9Z89fkvycD6nq3egyu",
  "key28": "H8o5cNJw2Xa7sdzLQWENYfMGNYf9ounM4XqZYgBYaWeKzdZF4wZed1JRcWXC3HhmbXXPE3CpUqcBVzGjPyb1etx",
  "key29": "5Gpy5We3133q1sLeLpyvVXghsr85GP1vXSCY82RbLE9n9kEJWYaNPupYPAAUW1W1YqdLkGPedzCUNNTdsJXBFtoY",
  "key30": "3ZFW7FGWw26caudJDGwLwUJf2LgpTQD3K5amLGuiLKRq1b1hvtnibDrUWsxtei3LcXhS19Sh8bEao1L56Kvg3ocB",
  "key31": "2HvNEigXdWJMuW27tc6hGn6xs9nZfyGpwDFpHCR4NpbYoS1TSFREwFvEcVt4JLgR8RnKWpubR6sEN4jJYFsH37nX",
  "key32": "5SpnThNAKpBX9xxuhKg15NU9GTaTUpGvFCxGTx3A3dMz4hnhHqB54uLaDu4kcxLowqoCCaKnPSKJ55ZfMdakoGo4"
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
