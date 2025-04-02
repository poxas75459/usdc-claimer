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
    "4EKX2yHDwgVicN4FXe5zn9cUjCpskUfLK4v6RK9oh7LuR5sHHXPgEDSUabZEQNKoJmSavjoy6LyqvA9Dv8GYvrKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8UWWS2SnCwx2EZNzjtwWjkdFEXcZyjLKZTqn4rpv1cx3nYMyCMh2F9r1abBtbXMYL9jpgQoGycR8Sfiri7kNAG",
  "key1": "2KHKqnmaki476UHdpeJsiGnVhpbDvy3PmGZNQPgSEFoEvTfrEx625bt2gKWvS87X4FFRDTLENwUmbdJ6CyuPQk1Z",
  "key2": "3VpAy7hUV9cnaGM1dvi3t82gt1HTQN7ijvy9iNAn3dzih3aUynY48jxWmFnnNt9izByYDvAM2ejMjVpi9sjLCWch",
  "key3": "53vNRpqcLVYcJchYp7JPM124wtrAEqY3YukUQbWdrSESRMZgAsr6TCkXxx9uJyky8RHnpEuKK3oUXKnRfv5Mo31k",
  "key4": "4EKaGh9CNhKHtZgZLkcM7wwTqziK2HfaEhPwq36soqL5zACvksnZSzwb9EGFEyfqMPKi3WSzgooKuNa1Y6LUSiBo",
  "key5": "utNiwqBqyHXMnHyXAzsCgniSQ4xbkqbHsQiYsAXvrefkujtsrYKqWwRJffUrZ66zFSgjqB8VgWJc55kbK7fFMyR",
  "key6": "3kiy6wkAVrNBc6GJC1wdcBwbEAHH8psU8TH7fSyYBDLthEJQNCGpJpnwjPWqzKKuUZUzKokpB79v8vPW1K66MAdp",
  "key7": "5XATMzo7eMZQ3CDR8uHDTZSRiVke2uDrAm5oPGGccpEm3VpqNErxZDzSuXaDcJt9c4spgN8YJHj63FyvvwoFNZVa",
  "key8": "2ABxRyZGEoaZozs3Sn9ECs7NJHFtMVeXMaFXe9JoYbuf6T5AQWRJR5gHE31S5wPijt9EHSz33soY3pfMXFwVTuL8",
  "key9": "395VcT44ABh5F9DZRPnbdNB2GQAffdNvNoLhYv1FVoHGDz76way2C8s2NTwNXTMUb9JA91jiBr9S6vyfUenkLb9e",
  "key10": "3Vy3tDVAVhNpjsZrWhfA8sorXEFNB1SsuSRnPTbHBdgfah7nmKHz9EoW1RzLuneu6w6xe7Ps9zPVhDoAQxomEgXM",
  "key11": "4bX7HXzZsprKsu83ocwNukoLH8XvS7tuQGhwQSLkJBjxNcNEBD4x1jGZ9Mo9Qnd8pJCzegDKeP6AcpmSL8f8AWbn",
  "key12": "4tJBpiz1G9dto8eVr8h2LQ9gdMXcpaptpLK1LWfX9nRXctFyPi1ysbsJrHR9bgweRSwtomCKyNLX91kWQETTe4Ti",
  "key13": "4ULThsJEEg4XQSj9V2SN4j6VZSV75tCVuenqW56xJFwbhpVUYiK5bNRQPnmDnXfw6Z3LkrSbzqAFeksvbawtFFTd",
  "key14": "3kisBSXnsu8Eg5aUGMaqXxj9WwGzQDX3CMRSj7VYHn8mpp9qkprfhWEoQEufxDsTVLfdvUqcypytFo9dv2JLkaxF",
  "key15": "3JmsSkhm8V7RqrhzyweAvpyLQsc5pHd7WLtFfWjLhF7tifdMNdgD3zuv352yQUgCsdwy7mai3CngGgYfVVxzC377",
  "key16": "GRyRBqtfBbpKUL6bLHrtereMscKE9HukXrZwchwPcoLzha6KJ7qb1FVdaCUXzjtxse1gTkHBn34jvjN9Lp7e8bn",
  "key17": "Yf6s6RWyJEWDq16pP2FRbBM1YB6Jru9J2xiZnfDrHsnWs2T6ibU3GEY5KCskcPX6ixCXwcqupYNRSbzfh4Yh29g",
  "key18": "5fHCopMny2GUbbfbEUsKoo39c8Z7GGsBdwJ53wD6YRP5i6bd75YBHtNUZVsCp16BLyBavr25P8hXySqf9Ad6houM",
  "key19": "3fe2asbnuraXJR9KHCVVBnewYUxXF4ysrWgpZz6yPJL53yY2YVA8jBNNtXkB77Ns6AFYruWAUp91NKnYJWchHxf4",
  "key20": "Cy5FmBHTJYWtijxdnQKjm7NyEA1Er3tffyjkVcuu8bwobPZT8p1QKF3RTKLtko9GXBqfcNuofPa1EKGyt2nxhRW",
  "key21": "5X6N1tfkymK1zCUDPiLyP47VUBARdMbYp8QiJNM3jQ2EWCjzueCEkinsZQqdX4TCPoNecyqRk28cfhRY4dA7pjsV",
  "key22": "55JEhgg9vK9PLXU3zw9imfDJz2oTizmgTBvFjdfpms5tSrXL4Udvroq1wPCAtuwrhHTDxaEF5Qz18PRnGqjoo8SX",
  "key23": "5VNQ8gfo5RZRQ8a2asUhRxqi27TKTDWW9T3Aeh7SBD6FufqBrLQRjee5eDeUQtCoPLu57R8yQNtR5VJa8fDXHe6X",
  "key24": "4S6hgx5WYqUCNLsMiH8uDrdbPLYY2YkAsGAuXpw7NdB2kFbFc5J6WkTuusP2LoQd7K4S8haWaP9xxs5uJCLoatXP",
  "key25": "2r9jm7CBvnNtmJT9EH8bQbgHsXAfcpAPv2PBQCasWvqryPgQRAPBV3eqAJGpooBZNUVR146d4WgLWeHdxCr79Cb2",
  "key26": "3hgM9nGLAjLbbsM6AbdZbTvevcwvno1xgr5ztdg6nB926MtCEWJbn5B4N8sVwc9mVGsugy1XdRS5ddQ7ZtvfRm6M",
  "key27": "Z98yYjTMaBZQvXJFjywj6wdyoQd56Ef8Fx3KYWvCLShusXAbTrKDk1YkNFdj5A14aHpE1NMvAYEPLFeDNwYNtiy",
  "key28": "6hDAdYFSvMTXsuwoPMeohHxwiieGS7RLTiw68bXeUiBaKHKEdooNv5UgEg37Mg8oNzuowBCRrrCdxcrtvnzSG3n",
  "key29": "4YQNT6LWmbQ2keuh5ut5tBq4mm5cvfmx1cxHSuN4bXe3S6ieubPc2dvLdyXJDNp4fz54zWraQxt22ghGJWdSysvT",
  "key30": "66CiYHvYBBnKUReeoVoUmx6pJeKxT5b66DsciwroaCr7sarZD8z5CJcp6CByEji4PZmsdc3cRPfqDw2ZrmtSD7Em",
  "key31": "32g1FK9FqbnL8ESP18awhyc4gduW9Q3yXDkdp7SQLTGDD5w98qZuRLjwq4SW4EinW74Nzt6vww8svu4sLr5JnVp3",
  "key32": "66zTidQKgodn9Wn61Ck4SADKChecGR1UNaFejFRYZSSDfnuUdScHQmFJNhUcyNWVLKTH1p5nUde3J6fFy1joqYnq",
  "key33": "28WMekkvy2SMBNSYwWV2WwiTKnMsMY6YL7fd4J7A7Cth21NQpBmMCVaFGTvbxSGpe3CPK9gv42yjyLf8Dv8wprXd",
  "key34": "2aBBqf465pQDdunvSASe7zXj82oJUYRvyiYFz1pLH2j9uDr3CDcL1yb5UNGo4ATDNKzdfWcf1aNaxfJCxPBjceZT",
  "key35": "VWdqjagwzWXA6U6Nz78fosbbspMDQNYeEc2dz8ygLJy92nTtiNYAxuKpr49eCtNbq1bGLuDdL9guMgmEMEmLkrq",
  "key36": "5kHRDiG2gczfL4fZdWMJYcW54KCXSXEL4bDQJ6s4YQGE3bvWncJGJrznwdk2Cr1sEFSDAyMiAeMsc71j4HdrnyU1",
  "key37": "8yGPaD6aZGHn8tE87bF1vtXwQybm8NBPxnSMnQzzVsHWWrNKDwnXYkpSrXpV5LtHgCGUa4Rd2umWV3jtHzuj5F7",
  "key38": "2bCwyVUz6ssMY5YmX37bEgdLKT5vanCW6Zw6yJsEutCFoDrVWMjYjN8SyxiqjcKaqiQ4LDWARWekCGf5AdgkygSd",
  "key39": "55dnzyTkjZqMcC9GwM8oZiRKaZavnZFe5xiQEHxyBV6RDswGRQZXngoPgR8LQCJ27x4KSjnWvvmyZeSB9kLPgvVL",
  "key40": "2ZbMMRFFV7SnVGJp5ZPMqGtG7Yxncv3t3B23HAYrFNyysXHnYqLV4H3akMQf28m51wthWKeJuE3TtWxEbufn4fcH"
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
