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
    "3GG7m4TcrjBSZgc2RbMMtnBiSVDzrDQCe546oS7fjuHTuAVAuu2bvjJsxm1NPLR5c3NavQG6yKgKzbswDNP6vfdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUPJCNa8b7dVe8bfEFARKm9H5GivezCXU9E43SBEMgxStbTtcJyTbC9evW483xkpEafvTrdhTuhLT3C7wjDod7H",
  "key1": "5rbuteg9APby5wQycFNggbnMvJ9UC1LbY9rtJRh3Vs5Yd176TJasxrRdcBZoYifEpaVJQiQeMww8zZW1DNc5U8VZ",
  "key2": "2TKMVajMGdqat64jKZbGkDtVSm9KmzxYE5FRer6jtpjuaBbzE4cDX2ZVUs8H67sMZ9fF7hgRLaraj3Y5MMh9HksY",
  "key3": "2LPwoWsZMXvref2yCrW6VWj2qYnY4wUri77QsgHZzbrCC1dLYreYvePvwfmHnq9esSgv9pvr8iYmJQ3EpcRoFZyU",
  "key4": "4hj7r23Q2nPTqivfFC7ZERyGWEmosnJ8hMtdWMYZCaGkaAicLtsRS6pgwLQ1RN6KJGD4PKSXsRzv8W4pxctf392x",
  "key5": "41zhJZiQNWWkyQ7EcgNCQWhS2PHMbRxexPhbakPuxNXg8CQJ62MKoCUBaJF4i12qQ3Rb3skeWdwn4TP8kcZbEdzR",
  "key6": "5zBzJTLTEztxM7fByRwwzHuMaf7HUDW1KcUEcfFRJ5CWSBdXwFtJxGFGVLRvodZ2BTr5o2B5g3L8cHE1DrbBsdtz",
  "key7": "4aTjg7sfGCqEHjQvwkjM2fBntY5NZqvkeLS1DLHvvFYTaWTVz2v715yUb9MUr1VmYSm8vg9X5wa79Fpg6UHA5mu6",
  "key8": "X2rsE96A5P11TnNeJ3XAeHdiiTm17xrmd2VLb4AYhPzfmTPKxvc72MNvQVQAcEiPTtvpDdVWWAnfRJN1MatFQAj",
  "key9": "5ZhjUyz7Mk6tmELwktHx2r9Yrw3XPFDPgGU657FcgQ6ThjCzoi1v4CTGMMdex8MuLqxUdHmLpgX8CYmVBKzqu4YC",
  "key10": "3Hjfc6GyZS8WQxZsrUPsF9GHepNcuESuYsHMSxkg181aSiRt28FmKSW4Wb4GbKVH6Gqozs5oC3f1eRLosprLXb9R",
  "key11": "3j1siiVCkmH2GwdsB9d6RWbL1C62vF1aMsUcFPmWPSshYqUPS3vRyr9KqWrDTuLa5DzVjZgv1sMTcHgLaYZDsJUG",
  "key12": "QWCY5aPNBByU9fPpwjha8agcfGBxWRHdjqyjSVZrDyHZzirf9YH7WkPei6biJ91ijHihTaGN9ryAxbxTiQGvSLo",
  "key13": "3uD2mxDCtPq4Wb1Vc3aafgRuHJzaMN8b9HwRwBK8qyha6Cz5YGu28Htw1siexVyPmvdzM5joJSU1BMTQy77LcS8X",
  "key14": "2DNzhBEjAXvybMZ332ohcorTrbnQHa2SFEG3j4vg9M3SYwiRFg3uxyx73juG64GVPmeeNkfzCEcNcr12CUb1MXAD",
  "key15": "nbRN2YBFLvEkfQaVgnNJzzs45HxG53fLvSMKy5xRcsFcWXHFttmLuzceMttfy8DEAh1GViG3oF8kcbMgcqD8Tz9",
  "key16": "5Thx4m3KEzTkf4fGky9qff2pBmgmwXHWfwLdSaEJWLqFe8BS6SVJrnVstppFuVEMUECVUsXBSF4sMujdQQ4JUrxt",
  "key17": "sztbSNqzjwufaQthnQaabLGeJMfw5rgW5BiYtj4by2xjJZ2hwQWN86GCQCNwhRx3Pva4LgN9DJQ3L5v6Ja2YXdv",
  "key18": "3sZph1rYoG1g5kSnuPqwCjeGqn1JFnfzuoZFCZ9du7dduSkaH5YueKWdQ67SzdB48GRH5mdkb1Z1UwWrQN9Qvtv2",
  "key19": "3Sg27Yvt1nhVH2J7xy5BeZjo4vJDL6ns4iQAMbsfrvKurcPh5swnowByTFmjq97WjhviR4B4drVuGtqr7rLiWXc8",
  "key20": "3K4LW1BsRKSskCKKrvDb8TUpthHTLb5TJVX12qbTzQLXofrifsh8qebjMqv1T5mwvUukAm6A2kF9Jt3QuAqb8a6Z",
  "key21": "45nHrR1EDUybqCtZ92wHzK5J2YAoiX36iEZr562HKpYWs7gNm8SpdiDoC9MBFsco1sSgbbs4cchm9gtSuVYbab3Q",
  "key22": "ePActpZsZ1A1rpJbpvaxvXaRGybii3bDboGUKA1mnyjhdUk4gL1i3YRRUsTKR9FTFvWBEHAGbtzLDSUDRguKpcH",
  "key23": "3tj5V86gAuRGwVydGf47E2tyxf3WiWBeQE5N1vPwfnnJnBCuiA6QpjWCUBb8dPbmGUG1GcJPFeZUVkm5C6T8PhL6",
  "key24": "5JeMEkZpDYk4dLbPYJoZLe44GkTqSHxK7NP55q2K3t9PGMYAJpLn2hjiGbEEeh68D8yoixCS1S9eAHo3bUnH7K2E",
  "key25": "3W12w9iUShnRuju3KtGo1NRfoJfX2i8q4cT3QSuZRXjMNPwPQZwVGJrSfULxBrHwrmA5Yr7kCN1R3bmZpAtD2Khy",
  "key26": "2dttXCq5vX17VYsV5frpSiDThcXg7ZXCQDPhuFtzUuRZaEsibWeFvbNKzwip9EJhjrmcGQnevmbomsj4v5CGrQbV",
  "key27": "5WLrNLRfhsuQZn7iCFbtZWkpgsT8RPNAAzTfHyW8qhobsPRPdyNykyHYoEdpb2qF4y2KPz1wDx1gyNW9gLNPZmfi",
  "key28": "5ahxcwEVSfgDgCbg7BUw11GRMjV8ZYDtHdbVixobG57CVZSCsoseHMJoiwK6yEfbnT1r9rzm3eMkgrTLwaSp3QHu",
  "key29": "3vobq3NzUDnoRsLvqbJj9ASigLqs23tF3D7nmkP45PqLHdghrBhch1nXskkVBzMZSx6aasPB8cyG9VMHdLCRMf4n",
  "key30": "2k7QRsXQj3AEGLdKN25JUpGu7do4Y7gQJfh3DDdNCMr94D2xUTCLzVLn24uVTgrWaznaGvC9z5no9MxyWnkn3LJr",
  "key31": "527CnFymFBiT2zYn78j6z8LkSWVxsF27F8KFKctpFzUDZomo5KZJ2ywJpXjN9R22ftnJ4VDeP7eWRcAEzbAkm2TK",
  "key32": "3eA1X3mJRtKniXrQmwpCY2Ep8S5qnMTXhHXBB44gnKnB5TQXRDAZ74h8rfATbtxdCYBPvgMTgVmEfmAMkUpx3Ghj",
  "key33": "65TZDKjpmicneznUJuA6hB6XKdK5Y9gwFg75uQ8zT3kV94uqhSY4f6cr1yK9AS5GQdgo8GpdZjNrK21Ko7QhCExg",
  "key34": "36fL9WX1Su9cSgWYEUH4CaTniVREX9y5fTRevaAxFgfxtgcGZS3ufemnMbJRZ9ReSedgrbkYc4bemjCK8waBBVko",
  "key35": "4zCUptcD5UXTyfXVvkLdt4f6xn4XUXYG1iSQu2T1yKpSLdMu7Kr2AQudJaysZtvjSE9z7dBqGEBxVpLS5unZ62QG",
  "key36": "3sayED3xdipmyY59QySdkkr8xz4W3Fv34Ti1bz1WoB6KR9q9aEbFguN6qy5YiEmcuHJUB21jsm3DKWosX3jaGFY6",
  "key37": "p57FinazbA5amkgRo9F22HAQHZxo3biY812Cc3x3PmoUbPNRGpmQvPbrFQ6kEEhhfwNVYiNusUsviJ1W3nfAd5n",
  "key38": "47S3VsGtHzbahTiuU525XNym9GJMqqs6eTAJWGyzGsuVcDXckuUkPAYLpk1Px8ThgXWW6aGSsWYE6c5uu4yJ6SY3",
  "key39": "oPiRduwY495zg8DJkHueXuuS4QvNWBQ6xzobuPRh9wrsHMfKkFZMHRu4NfuwK9UrtvZEfcCMnqwoSKYFypAastS",
  "key40": "5qm5riwmMd6rgaYSYdx6MNU6wcqugFKSm7H8SxLvd2nRumAjDdkfkcWwtW7p5Z7VkT3wfQecRdGqAke2YpPhZUwV",
  "key41": "2VrYpfLz5vs6TQaDEbnvW8vDMWpNHeAkyDeZxq8kVeD3uWuJyS2zqi7jfHBXRfRCZansEfmgNFumwhFuJs1HriPd",
  "key42": "61kgDBiLMAwSoMxHeGfN398F15ghBhsmNoJRD9f4KRKm6VQeWLURg7x22MZNfoxUyn1ZvCEqTtsTizJ8YJDQTCKY",
  "key43": "3p4yziStLTumH9EmD8bcF3Nabpm9wVphvAHetdxP9ocVic8yp4WowPDkp1okuqwgJRp4FhwopXBqEAgiF3RqhAFF"
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
