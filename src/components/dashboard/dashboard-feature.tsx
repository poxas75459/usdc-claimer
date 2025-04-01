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
    "3n8LPDPNNMLg52SaqXb4mRyjpJqVaVKvZmv2HGmqHECYjvQ7BDYosx9XkgRDFMfwGN3ZtDFh4rh6ZqoTiA5rtiEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JhyaaV8M9eNeN2DM99VeEMkQzAaMCf3AQ1sGFBSrpowph6kZ1sWAy7oXXGseJSifYJTnAnqfQo5o7UEFENcoux",
  "key1": "dRx3cNt9Px4mNGGAuc9TyFQa6SSeyun99u74bMrg5w5HDCf9B2h5Y1kN7NfaHmPx6mTxc1GcWabwYQnRAScSPeK",
  "key2": "4rU46HNV3J5wQ85j1XcKRYBbuPuDA7FY5UTmk7izSxAzx66FUxt6pnLyfaXXBGPti7FnXdFvUJ8CCjgEGceVivxf",
  "key3": "2dtiwHBhBTaZizbkwtTJvjJioTKqY9wZwumj6MJeSSs7TkiXqnpyADtMs5RqAMn3d9TiJsYb1hWiBPU2bnc5JRwe",
  "key4": "92q2yAtNdzLUT7wfzKtjSgH2Zo1Y7YesMVpVxPf3igFJaJE6dNNTcKhKhp8vACJkR3gi1YhpCk3JyyMA1Duwdgy",
  "key5": "641Mf7acSMuPttVDB9koyD9jqB3Yk4nrdTT67mMfXDGJFzTpg6xcYae2EhEe1TNy8UgTiXiz56UkWYFDSYXDaWZa",
  "key6": "LYDXp3qiLYcekHAGzPrjDn1JzgySEdgWREz819wQQ6Vnx9omVsmcuVfMKN6jZsMQUNchWWv69kmPitpwvevtoek",
  "key7": "6L6C5rtBcwUAfT5KK2M5QWWrVx9cutbeqDdy1uHzz46VhUWBmpW4ee1JBQ2oLWMkALg7k9eZV2HaBdEjwD2SYvm",
  "key8": "3U2dMbxPEnz6ZSsA7ZPXhkv8qYxJF7Pumc7i55AKYB5a2VBSogvTicCuuXq1QJqBDAKJmiWwiouLzqZ4LJZTkMRj",
  "key9": "3pNQitiP79p23qrE1t1vq2nLPWLhBgEwkd2qemo6VW1tDccg6c7HTzYbvZ8XMagzwM1wtntsPyoWWq7JN6FwxSDS",
  "key10": "2giUsDiz91pRB6hqY9eygStneExT15zifXK9FnXa1eembQhNgjqDCeeWSepihiJXD9teLvRxtSVGqwnJFBUtK4BG",
  "key11": "3eNvba9EwmNXpoTHzytBuLU9gYhodCeGy4vgoJSphC1zR8wWMJHqJN8ubqirLsqcyzwySrqS4tEengAERTAmhbsv",
  "key12": "bX6c5oTDDMF7VRgbc1dHmMXL4uQffcKsCotSw6GZm2KWxpUzxJDbwAHfsAs1WtimSLCENQm84t3vA7Dce7fFQny",
  "key13": "5cjAwxH7ZM6w26KABeUd1zY5Q1GaR6rdeT7YF7ajnedATsfQcPPEkUFaf3hesxjqCmnUKK4cSa1oH5EVS45sSMdN",
  "key14": "ckAyPs2PZcJb4Brp3vJ1GLAHVteg9h4Kx47A3TXbjUQTxCQYbNWxakqTQU7sQphYczF9UFq4sMwiMxnrRadhzAH",
  "key15": "3yM5cHf7FonAYPfeLKQmAoFzCQt1VTtLeUxdJ4Kn9Bo1FxAgi8RxMh8mvbFaz13o1MXGbUGjCRTVLq2xVM1b5Jku",
  "key16": "4ze4ZsJ6XERzYz4p7bMtEr7RF1gFND86cQSF9FDGyNFT89vb8p6gh2yvtkSbJDVMii1hfjMEQnqJJ2zmodTCcaRJ",
  "key17": "3jEZdF94WitAromBYzXbL5DRzUPgVuSE6LmTw8v2SCeZay96g9sWRuZouzcj3iM7WLnNNj1pVKeeugEVVswf5qc6",
  "key18": "3sGbSXbQ6gWUtUoHGFwa4HhbJPEmxzsP4hjUQeDEkJSzZsvXdWaR4UmyLfHoMrxB3oW9YmqVkkxhXiAmRneuFVky",
  "key19": "2XeJfwrAm1frt5gaEaDpUToVx77hn6muD5fioewdgbxwGoUFqRLwyujak2U5JnzpPGd7rs49RUQ1vkuKDEpNNCUJ",
  "key20": "5P7HoWECjBinyh6ByLKQ9hxBTqzq4xGs22ptH7FREmay4yyaoEPpEJ5dyUh9qQmEBqApmxeXXb8hQd7q5kucoSrx",
  "key21": "i7AP5QPuBc7cfMPanLd8CBoDm4DDUwNc96iJeeoXwx91VdB5RNFqsqjiM4QQmwtfhmZFFn3QRYapzhQWmfSBmbG",
  "key22": "wqTWGuPYGYdmTDkmxmLFpeZn17S458VoY2Ty7ukWLX2WFq3vGkfjX6R2WeuJfNZvcn6DkaxWPYT5T6ZV5xL5Xce",
  "key23": "3jXUu58gfQpLu8imvbS2Q1bEeYAuYkyX9rBXRBwG7ryQtBSCJrCAH9B36yUYiE7mbkm18nFFSxNdt4Pf4uRDwppy",
  "key24": "GDXK4u61toEJ5agunYgxwXZyF199P1L4d3A5BWV4YUXB6WcCHWdccDknarQ3QeXBzGALaVJqdikwpXFnNQEVPRs",
  "key25": "n9Dz7Hs12vYre1sd5BXsmzWqkDJnmpdmyMsTjnjesKCMBwffFnyr8Zs8EwpHodcYPapkHYM7anP1qeM1cchn1jE",
  "key26": "2LMFCwDSucwvEhTXLYgjeiR8X1Zr1EzoAAa73xuhWpaFPdyLPqp4D7v6eXJrNrmwBaVpmGj3FgE5hMmhTAUS8Gmo",
  "key27": "YPUqG8P3x3UpDiKVaEieJWjvhX5VR4FdGKRFPd7PoXKZNiPxvinQEgjdiQhnhHmQYmSRN6NjJVnERCViCCG9R5C",
  "key28": "4iELRydHwYs1Y5Hh6ABt1MELnF39XUffa2kEzcZrnLCym7wgU81rXTPvsUdHAu69iu1mj9BXuQChcZGQBPBRDTTF",
  "key29": "5NnjhynoTGmA19czjat5KBeboCkmkdgvB9u27ARYVJvNHjMBh4tFGwW6evMyckai9Z2Fscfyjf6mQwDYadrL2Frt",
  "key30": "646zZLVKSAE2vyZ1HHUsoAHepyLpNbAYoXtCa6pY6TXitdiVn1oDuyv3qqJdkiL6paGaXvnYwGfMHWkpogYJmjPG",
  "key31": "4rfSZPUsANTStgf6S4jfJ6aC1yfM1EZikMFoiBGoE4bhCuqZKoogWSv3WNz2J5fBjWsbUJsYrT3SbbQQFoNoKJMJ",
  "key32": "2MiAEa9PpnGYpeS8ai9nNyMfMV6h8Hby5unYPePeuZTFAdq4G324JvVwCx64TBQusX4iJJtSkHK61VpQFGjNVBXm",
  "key33": "3npPiWc75u6g8nLMQzadzSJEWak5F6XzXotMjYbMfYK7SGM7E6wDUU6qYq46TkafVJjzbAxyZosvVLwh3ZqCd7W5",
  "key34": "5kDbKoznfqhgMrJMBHtWMqzJXLZoEe6wN7PhkTk5gMk8VMNTo4wsDsd2jFJX8sqsREZvZC5mCFPARf256wA7Dhm1",
  "key35": "3gaL4hG1ZmxYv7HyCZhVAyvuvk86CMbPXcShHf1tGShGd6qPHATDgJvEQtcGzo2i3w2GpHAjDp8XEdg5XBRCXker",
  "key36": "5n13vbx4qMN7ynknuF2v6nmFinj2DBbmeEXyJtLXRezQrJWSfKsrFpoLUuGCRSHsHXwZA8zM4ryjLBdJwm3Z69wm",
  "key37": "5By6PzAzAXJMj8AjGbS7jE8yQEuZ52nFvX36mdUhHYxb86bRJdNK9wgM8Zq19AQjoXUySJLgmnEwkjreXvtzDXX2",
  "key38": "39pZB2bGK2rDY59CMnQMKtmuG8s3hSzYqEvuzxPaV3dgjfAdtVUBEKX9N35JcbzgoSDHtoeQh3AcN8YhZzMuz4DC",
  "key39": "5YAwSBWmYBzXnyQnr8BYvYPAuqZ11PvbwtoAETAqbrF2md9oJnDLLzVbeQybmCdXBppC4QkcvWc3W7nT3s6pvcFP",
  "key40": "64d5cSrVgPTJrWeH21cn7TWfwzbdjH1s2T9ucmBgsFrpzoGGi6BGKafLQ5GtegHeAugkt1yDRSs7hDUaYvQ1yd1f",
  "key41": "52FxYKsZPPCAatBaKoACKiu6MRrXtFobAnaADF3Br2eGRqgz2CotNTfP832xTLFy55ZhkcYqn8f2mQvRteAUwPuC",
  "key42": "5yEbNctheVyZjm9MV4AHopBVvGW775sUTQZqU82SR8RZo7yuytBWL5pFgngnYReWULzGwZ1jpBMEN6h4CkgHwxwk",
  "key43": "4iqznXrkkySoYa4xmDUi5UAqQzDmxixpoPU3NqwgUu8jobqqxkn7NCkCScoJeSWT45W7yZVmo3x6mvcjmqKbkRNt",
  "key44": "5sEprwKGa1VNfjz2m3Cf5ri4q1V2TZv4E9NfA2MtNUFcTY1iXymuvTUrsVopi1CDe7TRtdfE34xvDRHDkcswDzPp",
  "key45": "3RvCUXtD1T8jzgq2WyFj2fT9BvpmTMfh5HddZs6pzNTrD3aHB7wfzYAxSwcD7hjtPfCiVgLBxzbg8HCHErhKQLgZ",
  "key46": "5tiSCZpGMhgVi5r3JSt7DzAt3wETubGTLPT5NWKBjuu9SjyriYAu8J97xcGbPmcY1gQRNgqNVghsETJQA5N3tz8G",
  "key47": "2Mi6kgGhT9xhWfecZddvK4YGzwzN2e1QCaQksek34wZPfp65uhdkKuZLoazPqbeuqkvSf6o8PnRpYmiPWDZvHNpg",
  "key48": "517AKC6QVmk4qtPU67UPZ5NzeAeWodSH1RRJDuMA1ffbER83QkcManMNPzrTJJqsqDr7X6z8Ra92CQxpKHVehh5S",
  "key49": "4cM6yqjc16E97zWGKRdyAfGdQcBEhqFSc9iZ5H2sXK8gs3v6E5TQidjtKMg45e3Vgojo6wWmFjAB4SKjwMvXUqcD"
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
