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
    "3v6JCKuGHXr4dEdriY8mu35xQY6J5jX6tRuR99eDpLv4p87MnvzupooKmbjwvVaoZEM6hycaYWRq1ceTrXNiRmoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bifk5zumQdefHssdhJTWFqWtuxD8FWnqiV14MLvFKHQTnwyxjud1SN8DyveCTXCQyBhUarRxV5n2yshReG4hV3B",
  "key1": "3K1Pc71AmpvVt5pFL5dD5x5P25NvM8AgWYooAdGSTDwrXXex7V8ccbSHEJ8emPvZPXLYKtJcMLiUDHEWTGeYRiq4",
  "key2": "3RNvxFQ6yam93EudP468AcECvTZ6qCXCkc3Zv13oqypAB4NyUsz7LMNxWbSLrs7jwYvXjVLKkw6FLYxETvghhUbh",
  "key3": "3TM7iCWgqQyChmutdnE4WtF7iPvch26YYMVWE9322RAggW7Vy7pxYoj6hxzRqrGGGm2gA5zPfV1qZhB59AZsnuFj",
  "key4": "3TgoNw6Xyt2rpzjdfDcBH4G4LMNXxdobGjzVGtkWfbqA6neJW2YzFonwYFLrgvHLGHtMXsDyoGcAGbawEZWMRVuP",
  "key5": "3T7G4Qdi1SY44nY91hL9EhGWZi55uzTzbWt34pV1JDdCS3FKi38sKBc73TTi1mUT6SMF97HJmW5fCMvyXVU8SsvH",
  "key6": "qGWX1SJxvCc4JbKNGnmPBY9FUcG7fi86xk3WP4xvTMSiwRsv4U5Vxoe2DpjDQTjgtj8kd5y5ZNqCVzJMRuLSTQJ",
  "key7": "Rpg7MG8raDdkgus2PSFAnwkwBvN3bgDZYBqCNQetQTB8uNSAQWf4RReD7kEEunGVFTKLiVazrWJtDoD2xjZtQoF",
  "key8": "F7EnKfanvaQnwyT9dhwYpmn1ixhgH1z5DVvnuXXNYe93gi5dD6NEi5ec7vwkssG2FsMxTAz18neCEduDWyuQokW",
  "key9": "4zzapUDA7Dj4TgPGoff3hvMkjbdXwHdAsSfSSWqFoZSYRFdJhvyeiuz4q9FnKHG6AvDE3X7Qy49uMs6mvt9hE3v3",
  "key10": "4vpgirs43miv4EojhX2JFGkKJAUDvSwmZKccUnvvXrrx1mGBestse5BV9GfzQXXTSPEJrTx3sTckzAtTZ7GFWuMU",
  "key11": "5xNXG8jqW8wDFVfdf4uowtjsh698h49PLLsTaSXsc7JJ2e3FRL1jUaDqMMF42Kc68w44DsmQGE624zJtzeNA1sJU",
  "key12": "65YGUJC9vC6VzVDEoiuDoyBAz28tDAf1huL4DmLQrkmh6H8wLKoVTcVuAxXqWfvRWhgkpXtsuRfQ5GKhAqBoGKnK",
  "key13": "4K21VjrKCDMNUvPyV7ipv59XtxE6cgXmnH5TvV8xwvqYCa6mKoDpG36SAV9YLN8SZzpFougMk6Q2v3pDEnWF7taw",
  "key14": "5AmWBEwSnPVm31EyCHA7qK8Cp4hkbaFS9kBVLZfLdaNytfpgWhHwoaqxnm9ZJPmYzR3wCY76VWaK2BJSavwBaiDd",
  "key15": "5khY8yKRDVthH2BCA6xu2DdSPi3yhirkNRRxLmbfvwoj4cRuPsKHxkNjN25RB9L6A6cPhusb1577fuKna4UfWX7o",
  "key16": "342h1Na1DB71XN6HbDCC2oN8VoqaLoamuBaWFtZtBAYqrw4fL6qjVWjYkebvKSh8L988MBsWtZGJtFsBrXiX6NcX",
  "key17": "3uSwDgEysBfqsk6XA3XWiH4BRAvcqSo27ePYdhWg4SNu93ZuKaMBVp2in71cPz7DUYG87V7Tn1SJAdTVqyAfuw9Q",
  "key18": "37pAC6x4jdtCxm5AkMrHaAiavxdStvA6rUiHnL4GazeaQ6QSUSvpfW5ziSQPGvXn3zD3FkAqG1b5kQU4QqUJx6Rv",
  "key19": "5vftn7asUHhcVHyF197CuZ2keyrFHwT681dSAoDd5rFeLp2bPoSqSAJ3uW932LxhLSXK8hczWhZRY4ZUP8UmKEar",
  "key20": "2Lph7GFdHywytVFBx7j3gKpKEoiPbsbRtBiFPMMFVV3DdJCU2mGaYUAhR8d69zPfLv2bJAx5TiZZdp2qggAKyfBa",
  "key21": "2PStos2XSjuAxZu5QgqADCSt1RU9h1tCEaemLKkEXJSANwPVfUVijUuftGhAASMB8JzSPv63a4W8tnTCjhybsqNk",
  "key22": "934PtQkmCYtMdP8sPEsqkb7Uvxc6sYa5xECRaTZax43MB8txUbZDDY1oWnaD4EVSa4z7HVCVKuS5Lxi2QN6QzZu",
  "key23": "3NvhgMZwtSKjdpf9z1tFvKY8MjceUTbXszc1MM19DMRBpZNTivAe6w8Wd4Yf8xArNPPxWiXu3zS42NDb69J7XdVi",
  "key24": "TvMJWRAK3HUNLfFzTA7FoRWsauX7TCq1jY5sdTKw5pK3dBqtArdZakFCe4CJM8i1PtzHB332BXFUWEWboJk3Nfh",
  "key25": "S5z1h696CYbN7MLsToM8UwTuRAkLPGGCW8tT9FLgQwjkCWxQJoDGPsX9CLcMcppXK7N5YdJrxD8eYYWxwZjhLRw",
  "key26": "4Qu2F3LuanBPUPxSX7V3gi6ThkDAQG7Nd9hETeMMHZ6G1LST8eLuL4DkkrsYcP5aMUMdrxjMe9oQggEez4FR4gQa",
  "key27": "4CbfxGW8ucRfCq4gJD9sciM9ZusN7threc9cW2zcBTkGvWwcicNsqvLSkedQ5gjGsBCk1WenTji4viBppxpyhCN9",
  "key28": "3HEcAqaVtPrhxdnj2X1BAN4n6hACuKgrcXc4YHTZ1Tm3hixXUjU8JBBCpQZZ4HwxcW57JUBHecBuX7yHsHLS9LLT",
  "key29": "3H5RGqzLcokQtPS1emp3BfabeXsu3jMRH6XG3JnXC74unngDs7Nna88KfPX8e7RFEHWWJnGBk4Zd39UH5EUFrz8s",
  "key30": "5v7huGTDGRrVcG4hZZveP8zRSyx1w2PSSNmQvrCvmgKVdf1RBttpTgDapbrpvVEfz5xKvE73R3vkqe64EjGxsShW",
  "key31": "3QyQdJG3o7t9hxWE6sgFw1DnFEcQfsZBaP7UQQuCZsjQEigdicz7KLzJScv54EgfW2ySmmSNovPcehnj4tNZEzNf",
  "key32": "XueMsbbfWwPk2ye211DxEikRgaU5scqWEXtvSeAPDz2ZKEGEzPLfaWkx7JGd52HDSsDvXndrsGLAGjPNgPDrKeP",
  "key33": "4LHk6Hc6eFpChqGEH6WEWKWUwydy8zGNf2tJe44aLAKXD4iTgVDCRvHYS4eS4H2JZKZmyspP4oh23uWTZtHiL6bW",
  "key34": "jTGj55ERaDsBrnXk3rN3Vvkn2FBz4csN1vXAhu7i7pvcY1V35TCHFw5934tYGHX48F35g9Z3vUMPaWDTtZXDPcE"
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
