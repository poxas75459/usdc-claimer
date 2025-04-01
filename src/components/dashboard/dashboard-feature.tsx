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
    "2mxSaWQoh4HfLznxqNtToUcJbyBYE17DkQJvDLAkAVJ2kFGLn7UujzFhrqpsLqWSEiBmd2uerSbbhVL2eqH4dg7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sf7zNuXUjG11cXZ4VNbNaHvxtj1QkgW5ETTitdzBbpcKUwFpxu54FbfW9ve7HyfTHE1Ffr59JiZ5hv3x3DYSofu",
  "key1": "Aeto4iRCVkqVT6L4xFZ9zqhtYVEsydX8Dj6L1hciSdw8mhZHte5AR6eUKHQ1csEozeyfjJTm4hS7SkMBM5rPXdc",
  "key2": "63dXktCghS21SosQ7i3mVa4GWBY8nGS99DrApqywXWpZQ5vjTb9AedCE3UKyQmVziuJXVu2W5ekZwr68Gxbsbghs",
  "key3": "pogbES4QotAfJUbKo6kpDL21sAp41f4A1LuegphvXNJDj4nv7ccgULECEDibNSy9j3bLG1HCFFUFZUMAEyZBW1T",
  "key4": "5fkZtWufutfCJRsiZN29CxPPN6v7xctSxVPX3QsBekT2L4QfGtsptmwyGEfHgDxb6D1warctgtEishPXMiVtCmZG",
  "key5": "66HPvAAJxR2bWSvwcSAfJQPxpzctEdxyakEPAFeeJbAgzw2uEU11oqZajPQ7VxV1mij1jHMyne6QEmV3Pr7wn7cD",
  "key6": "5coY5v6rZCcgt4ur3jT8oyaqKk3amf3vCDPeoN3wJAvJWqGTFdqHZ6GteYoMzFsL56e5Bog8qGKSTiLSeQpDHpvf",
  "key7": "YpDbhXU7KuXZdVmnyJxVzniin8UioHrRgKNjLDPy1oSXtcopsFuoZXyJhm59WuzWPzjYAu2WcHHcyioJd2suwg8",
  "key8": "3bhyGFXbD2BTCcT5bZYHLXmRrc3wrtS55o3DMDh7rDpUr8SSMFeXJs2qwrAUcy3EajBzBJuRMFTjBz2dfVRvgni1",
  "key9": "4UsJB6ibWddC7crFWBStBtG6KnSAbJiRRnhQUJaYLkXy8SXU6tJioaxUG5yf98D383z86rMZYAHUWAs8rBVbCZaK",
  "key10": "G4P9CpixTv5caPudUr6ihTAX2zd5RKjoa6hpUToMxG4msc8Zbhkmd3PxWXENXXukGeV4k8F9ZeYpTy1AKrzNK7E",
  "key11": "YW9mQqRAPFS7jQzRLthbHrD5K4KiUPMEFqXHPiBZECW4DyCkGXfYNWJRF3eG6MB5TSE11Ft4VmgGymcnoY6bHTu",
  "key12": "SA5eGnCeqwT2fgvzhGoHUXG3KEU8Yx1MCxck7LfLD9iR4m2S8r6XcjUBwvF3L9RTf6FFFSZNyeddm52f2eFPSr8",
  "key13": "58QRwcN7qmfYpgmRs9m4HFB4YDt7axNtcJDUUHF5GEqVgrPGMRJAGfUVn52xd5q68KrhfGJXNGicGrKvLMan6hhg",
  "key14": "2Em7APPhpMZvopURQjzJPiBE5Ffc7DL7kopJzFs6is7H1gGSsp1JvkKwdTJefvAzTY6bt8PxX9kjyy3X1BQfa63u",
  "key15": "27g9V7X47eTMRdjcmVyR3GS91h6P18y2WWTqdaoXhoTZGaJGHpWYLPG3Dcd1PNyMyjqEqVjmtmeTQa6wcf3YcnLE",
  "key16": "2edU4YgGooWLAcCdSEnTXAh3iDZBp8y91a2N1zDdbTUXtShc8KQkUqd1zMChfxzco74ije6x8TRYiXnWhvQ5tVwX",
  "key17": "2jENEu8FpnTkW98eBffSntM5XFD3aZ6hs3RRhCFZQRPaXVKCcFVNACAB5HMRwCMMfH13Av5QCYNMyruKcwi9NeoU",
  "key18": "4DRAEj6LDtBVRLfnJZvjrhYbs4LxQwT71gEUhEuKkwfg6VcAzsoiV1DNCk52kSsuDg72mTD4mW8AFKgzVCyMoxg",
  "key19": "3zDKJmqgbQo1iaQN79G8HeLkz5Nn2JA35j9RkZfB8DKL68jBXfWuFGNh1f8SdwgUxc98bjuhTPmGWw9n2KnQ4Ues",
  "key20": "2NrSgF2TVCzSbzeUAhBmKoFDHHuXpAk55wNUiVtcN3dCSXkyLak1YjWBkVVAHLmckqVqeECKyFYWRSCkwtH29FbP",
  "key21": "5UjurhAHcwHo2WmbuF7XtCW7gg3rCt81ZTaVMpHK5Xtb4N8hNLe1sp1x9WFG9T7YJbGF4A26xvSLgef99ew3J1rY",
  "key22": "qiTxgHJStxyRAki43LazZhFuXLekjuXmiTHVppNuSiX6sThiRFVyfnnepGmXBawm7H4v3hLmku6ZWjBCuiq2eBw",
  "key23": "5NNfD9ksKjwLzemUWtqbd9YqP2pYWkidbQ7iRfHotTTj1wJg421WHRnHr4Lxr2RL5ZbWUmKZxXR6vHAXJJHU5dwW",
  "key24": "376DfMveQSZ3yCnYK1YwvHmLamvHs5C5q46BXWjMZYYVyRoAHEw3AGWTonvdcC9v6cUxBHrubSWRkJMSqRJkzfGg",
  "key25": "2wQCg21p5npEKtXmY8iLbVJsyjcAn1TYszw17wjdLk1hf2gw1zGFepMq13PgnPbTGLBDseD6RtboN7vT8V1vvZEq",
  "key26": "2T2k6Q9Ck8Jcm7H7Ya1GervYsN25dz4Rs5boyndbUs2rRYuVahPgrfVWoh9dQGFnt7QWumtf5dGeGnoxnduuHoas",
  "key27": "4HEvnwDTwUF1DAGkaVijMkt6hwjxNiCdAY8reW724KMJV9VTYwug1SyB2zxPDR5PXDuzk8keZeMTPyJdQD5hTB3A",
  "key28": "5WaRYXmeocgL1auz27JuEZhtbSGHtKmFPLYyt9rQdx2RoEsFcmLwA9NmyDeeETvBB2s3ahqCZ2WV251XdTXPrWQA",
  "key29": "5voFJ2tiCcwo1B3PWaWo9mFWrCz8uUPdN66NYA6Undpn1DhZp8QDcNgqya3m76HXT3yfEN1JMg4ocz3YKoSGRLc"
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
