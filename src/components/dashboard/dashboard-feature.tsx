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
    "5VpkqBpa7HhYn2eNcjQ66323ZJohUbRAaTwJzRCgovDoEfapwuuJv4TwVztDSxQkb28abqsFcSU3MYL6P9mbKRFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fy9u4yaDBK7zDY6HuubVZy7ApkLmu5rWLZu3sHVX5ss127i4s5JMVtiPfrFExZxmfb3uiPR1mw67hkPQ14kWVm9",
  "key1": "5pCjYXsEEdYgCfkCx8CafAUt2YqdzdSr43RyHBAcAkC9JxTEaeiuCeGsWBjDHMPQCpCDbbW6cK1H53sPnfe2T73w",
  "key2": "41LMeTMp9AuVpmxHQhZbyzbknUiY2jiFEbqgzJZxvuzEdCu1Jr4aR2ep6ST5HHBivttGupCuNGvR3aA3seKAH8et",
  "key3": "53F13KJsd7PtUhYb2YampbKRif8wnhjzzBTnBu5B2K85T5WUDYtpe64isUzNK8VgJFTXemqfuz3GXaQxeSEruRFV",
  "key4": "54ct49xam1AWKpDaqjcf5uKySLLhk2nN5LuaTz8Mm3etvs7jGGssTz4hjPV5PuLoigGaXuCbD4v92yETcZxigLHM",
  "key5": "AMVTfLt5b1vcJCvL5RHVSzQ5AJDQGVqwo6RGYTsLr2G43WgVx28AuNoAVREUQv1pPDDE86AV3yU6cAwbm61jTrg",
  "key6": "3yPGJ28FSiQManBGELuGPAi99tWxm1YFUYsy9ERG1HjRWcDGTzaWaoVAF233JLKQxV8LX3JXPeEodc822fmQ2bcQ",
  "key7": "EHepWw7rPpxSKDmHansW9drRF6EerPCZGQn7AHMrhyR47x35YW19qPpc9qaF2T196QAd2SyjDSrR8oeVMdjd8r9",
  "key8": "4jfBK9giyY2Y6vztk5uGmMRN9TdoYJkne38N3f4CKzQSZXgXAyTyarHuYoP5vyzBoXZiZR9YciSJpzZ6fRCujK4p",
  "key9": "5ERMtg9kCgarRNj2sBDDEXDMtozAqThnSyQPbATZXnbbUzumR9XYUmYqDMuG27LzvMxsqHY6RHQSb259eLMigDM7",
  "key10": "3vkS8ai8DrxVjwB5BTuFhAzguSquNi9gvtG1Li46kSbqhGFfFMSbZG1nmbbd1R62NoLGdei1fxPCePjUmJzfmt8j",
  "key11": "HokDSU6GMh6m2i2hNzGqGcoTSv9bECNN4cD5aVLAVmGd9JchL7AAK3DKokToPia8QPGEHcf19VEVcBk5S2LJv6N",
  "key12": "5XuRio2mozTCjux9R3nzVQfDRRP6ZftHpEffLsmT58fn9SS5jwgt1wsnFVpXM3Muo9pbydY4vHPqnEhoKpBs8YeQ",
  "key13": "5dhER2BZRERaWhsstzw4Sfcco1WisUPub9BNGTiUM18KYzjQBbRRDPAZLiaHyVSWgjbXkw2oHyU23dQprsN4yg6W",
  "key14": "2mUh49FQd2ELZEreJcEY7ecpjf5Af3Ry4qHdBqhjLrKKdAU8sUXqQwVrnVTn96X3BH589vHdPjLTvqnpt9ivKmDA",
  "key15": "4QArwVgvANHenfCGv9zvVvi5sfumj56Fu2w4fyMzFm1dmVfsr2exUncGHEJBEZLxfbsiNXYNjquU8j56uSRFDpYC",
  "key16": "3JN61DppjTbFxyRiy7Pm4BZEH177ntkXP1noikucE2PhDcfS9zE4MLUbWCpbnYFatnJnkkxQrF4sWarq8ueNQEc1",
  "key17": "4iFNZWqHxwJhbivU7VBjrNGnNGPzCu34zyL95NGKHgmLsgxRS19SPjMHn1uTWCB5BCH491x774vYJMUk99nwe8Xc",
  "key18": "w91wcoy6u4Ss2Lwd7oUNdFASTvZcXPXDFBLo72vyTe2LdRpBGTsQdeAi2fmjWoQNcsWZ8q7gWvi78Cpm9zwwNBm",
  "key19": "3DtU1gR9s5XTBfZnQG7KLJzsFQoK2YjV7C4yd8jkMrFFsAXwAqiixQ98A2QNv6oRGh3WM4vqf3kHVVXYk9oGh761",
  "key20": "27Qm5WwH4tdsSBdU5ZmeLusC5K2hwCaYgcVybw99PgH9aq1w1my1RxKPeYdwdzPi2b6KTEm1qurAp1qaKXV3yskY",
  "key21": "jLJUJYaJgY1AZQwPC1sj5nnMUCCbhJxrT67PeQG6ACRrqg4xtp2FGs927ezdpmDYurrkZBq7ss9wtkqsYsKoJNb",
  "key22": "48gMAmK6RK5vgRNVcG49zab5ebR6uRBJRwKF6TwPkgAqq4htMjQxa7F7kxRLMN64uXPQnNFiLQqMwghDWVYz3Pz6",
  "key23": "5Qqhx8fMEuacyUhW4gFKSpB8WrLVWGcxu3QtQu3j4SuBQCP5hcFr2vX3QtiWBU9rjzLj2dwQAS4iw4Kc95pvefjn",
  "key24": "2QUsDnxjomggBrFDRQ2VrR4AYEWJVF2fY3egxz2h5n3ajbFhwNscBHYzM8ZjCRfs98F8nE8JckXtk5WfBDzMAqCB",
  "key25": "21vTJpCYWZ6JDSUHD1MS8MbBKijtwpYSWPSHacieHdqwfvNtHx6sG4Q6DigiNYrYiJDvsBhCgwsgBpbtzRu7aVsy",
  "key26": "5mmVrABGQkvHyXhBc12KMQA74GPVDsZqHS3eFC1rBfJu7FBgDw9JCiAEQj71kYosU5FbRFoUK48mjSZhSfBjoW3y",
  "key27": "5aagEAyMcFgtd1F7yPu8LxHaBVEJYRt98ggrezCMm1ZqbBh6adAjGRKGkLEXLAZzw3y6uEsdBD2nQ8GA9h13tcsu",
  "key28": "2HeVa2ZeGFAFrYYaWLoxRDrGo4Lc2SwPQjPLEVe7fv8cZbRczFwzzLPuQzVvefEQSnGtG85jDawHsHSD7M1CsnGe",
  "key29": "5YFd28geAZNk5W9VN56nJSYRxqKWkdefZfpjTxpt7YMxbSJC5FWmZi6DnA5Y3ifzKpTTzcCjnVbHhNmFqzF97baE",
  "key30": "2Lw8TswPGxx2PDRrYaTdW1bV4RXVHWwKF1bhuTbsK6TzKwkdfiZcAnVqGabeNUzi3w6cm9GYHyp7Xtr57JmKTyGb",
  "key31": "5N3BKDNCFga8aWP6g5TY1746DRm1HPdE9vfSbbXS675PAuHGqjB9WTcqBnCEXyGufimRjRiHo9mRZMRRUvJ8XCWC",
  "key32": "5qvAuTpnN737sfi18M2pFWALKEhw6jpAsjwFLWCZRxm3mCgD3GScs46UtkRQAN7tf3vPVP5SWFgZpGLM6YD37zAz",
  "key33": "5yaKrn4YAVK6WK3mqwsGhvoCV7A2vAdgVtSQMJ5PG1vQUf8RbNQr5tySRBQ88pXEFSNDtkJ3Zf1r5af1rGrfXcSA",
  "key34": "3J3i5hBA1V1NSWTJNHePRwE6uFus7ZgAb2GqfpAc3omLXibp9wMG9z7yB2doBTSq7oQmNCEPrmiKH6BKubb91LWf",
  "key35": "3apvvrK2gXWgwLYZm5RUDRSZByV2c4SibC46ai2edcv3Y7xLaPh9QDytKMjLfijKsYe6Sw7j2QdYF3CnZ32g3XXS"
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
