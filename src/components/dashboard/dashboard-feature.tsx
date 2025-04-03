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
    "2hQjHGNqVL92eawsUKNZd1WBeDVhgFLbHcUYX2xMkzb3ZRudTV7Z7pDwHyaVLiHrVVoqPS5kDtwcBFTxjojcmqJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TnPueVR7663TtvUYPNzLupo73VLSLwiZXxj7m9brw8mrMbbTYTZj9QpvXwk2XUQcTQXSooppmK6HAS8x9LVt45",
  "key1": "2PWWN4GLrhcBjch3HBMANyWYfBNK6kK1yjB72oV8num4ghN2Sn7WPa5dBmXGVe1SWum7My2XVSNa3nD4awhzSbWD",
  "key2": "4xKT578MvnwNRL17WeFHvvVprNoRQw3R3rkmba3vCTpmxLXjwf6fgpZufhnA3VMfDMnoknjXJCJYuFRMX2dgYaCE",
  "key3": "3kq9k7L3AtvZ5skGUJQfYbsegkg9kUWpdH78BTgZaNPnmFU2DvvU4HRhHZyAaxh3s7sUd1oFTjKmVmPRkPDc7Vez",
  "key4": "2pGfduyd2VvDPMCsscqH2SXCc8nbXRgjT8uiigJV73Hi28rdHX7jrHnwsvPBK3m2Dm6wnU1Jt33aYvZKVzjV8X1u",
  "key5": "UYvgHcpbwWHLrzrGyL3n9geSq778TNfH9YKW2igtNVSGVgrQyMkNU7Aa85zYREgwGYGryad9pWCbHdFcKMC3849",
  "key6": "21JTdUycP6NDRHW9GMCcLh65o85CeePSrhLac4BsHgs98UJvSaZXwD2EhbgT28xSWMZ2qr2dW53PnV7WxgGb5LeX",
  "key7": "2oPfztFp4nXQochvVjU2icGwXZujEudfV1tyYUB4tTGM9N1fcbwZjfszmPrS5bBmpQj8gQNG5aLBep9aiwRNo1zL",
  "key8": "jCjkTAjfar3NkeRv2bwQWdrHj7ngiMrdYKTsbXy8JuWxJwsYimCVxrKxgen5cyic49gLhd8XDSadihY9bZKHNKt",
  "key9": "3KEcZDM2EzSVSqEeKGw7UQcRQdirHPDaHMSVi9im8ipNE6NCUeACLamSY6s9TpeJ9KgMXSYtirtmb3Hr8imYQbuq",
  "key10": "48yNVxTb4mWLwNv5XNPaF4YJsaPCZHYXRWgR57Voxxt4oE5Js1NuRaKs6VHbRxRTSys2EBBzCyL9poj4BqVw9Rty",
  "key11": "2gajTje73ukBt7RT9GaGUXytveCadRkeFuvUzLzXtYcguM6o3VUm4TsXjgUV7pZ748TfxVywBfqwUZQd9RXyzU3",
  "key12": "vStMoBiP4q9bQetf4QK5r7YwkSfbGowbfRXoGH7w7hgCoM9JbwBDo8CnorZKA5Ra4VQAbz9scS6Dy4nu6Y6P1LK",
  "key13": "64QbGWBQ5Uik2r3cwcHirB3w9qzpwUrzPAzSvcZM7uRBPaQtWWjKxy4BrCV3se24Lg1CjKmNNvDm8x15BHVQVCvc",
  "key14": "4gTQxAZ8CKTUYYQpVg3gsEAW1CaJYxtqkMcheng3Keb38rCb332tiGmimfTXLSEGr4i1C3ha5NuuASCzV6TPK9c9",
  "key15": "4mBm2jDPncdHe6pJN6VbZPduR81dqFj3g4545NQzJybURoDSgUHXS2VEXUT8cj6oFvN5WQfe7QovDNhmyRrVm57G",
  "key16": "5zFjz5hDZm2S4euaZyuswovZjFeKuNLjktTMTDp2XBWmvnkixSKKUYW2neh8fYHj6d7SsFNHqDkfbNu68eDRFg4E",
  "key17": "29s7MtLSHzp3oqAoCeTGHFd4AQQGUrbyUvT7o9M2MPtSpM3qdvJcEJ55t58VtcLSiKksRdDxo7LZ9PMKA89MgyRX",
  "key18": "4msyXGvGUzKtLvWFDvcDzuBreC96Ftvkp9PvEtJPntUDDG6mwdwEMtSYo84ha2B9B6dtg56HgTNQWpzNtfBkx6WM",
  "key19": "5qZy2P96KDQnNrEoWkkCB9ot6XyynVL2GZKNtti7Q8MhXUzdFt4DHPzVoiiAHnmkunnXBSZiMgBT6yohgkNQW5sw",
  "key20": "2D5um5DQPPBgicmdPXH9irK3oWaSgKAtaNeDPQkBger2pAZa5ZTMipomNcrmE2tcKdowbKtExq3tcMsjaAgVvFTQ",
  "key21": "5i4phbek7Xkw66nEYWo2sy8v1a4ZCrNQFime57b6FHjNJ5PpbZYZCnJnwFTbXSeUwakEVgEnpvZFWaCmzY9SLq78",
  "key22": "3WBN5vqEGSSZEQpD78Nr4PUCvfTu1KgDEomVr7HaG4iWHFZrXi8tUVbnvEo2UYPB4mdLhgci88Z9UmBA6X6b5WPA",
  "key23": "5XQtdya8vMBKUZqyKjmMBivGv5kXCN3DYkj6nnQ177gKQ7fpoN11dmkeAHUh7U87TBJYS8MRpXgGf7dT4kZMixr4",
  "key24": "2EKAbtfbpzQXjH5irAuEBYg5yvHBjK19BKEXYWhqv87VRmdnRBmS9FLudZkRnjvrquAMxuSLfj1apWJbyLYFAEU5",
  "key25": "5wirsRut161UCbTHhAs3hHfy4nfBva4w1W8FoUZUjJ1A6SPm8MJpy8xuZUj76tsAxDenHEGrGLTab5mHXGHzpyss",
  "key26": "5u8dshArW4rt4aH8bt4BzrWkBnyeNmiDffn82egrJMWwXFs7jtp7B124MtEVbVfPHD7wgFbX3ehz4sosURtmxha8",
  "key27": "44MEexY6MMMA9mJxJsvw1oRvrUeJEFXDwN2TjJKQTTATQHhzJFeKkeFnAg3qcJEFonyVrSUe4ApnYru5hEdDUsG3",
  "key28": "5qb46Zfz2rZYvAZZ7h6Sxyug1HgFDBsi2h5BuJfpc47VqHViziqQ1vj3KCiX5kwTmAUPFXFyNnKV4eWdVxGqQBde",
  "key29": "5bjp91HB7znJva5hZnh95i9RuTzZLbxu1q6WPVCCiSHEGnK3cx1L7ePZCPUzRucdfvSkfEzYk6kyP5wEZQagqHvy",
  "key30": "3dn13DGTktuJ3wwQYYi1GYZe5qo1UvjjmybTAZJhHqLus7DBmSoFEfHenwWKfhRYf3nzf8HrVyRi9ukywD1yGoio",
  "key31": "652gA1HjHtpMrGEwBTpA2nFtAc1h2QjTxhkWYTFuMb9CVNAeNEHCwmbTPeviXuFa6xrGe8hszapjpcJuMzrCuJDH",
  "key32": "26ST2CwYfUxbo56gTdAdhS7vd1TJSTczVyvZQNYfCMUG9nMxaaAi97QPCZHpsY7qSfYQujovnxCnyimigKTc7yLU",
  "key33": "57HAriNsEqPyHvCsEFFko4Xu86Pb3c88PQ4z2cN8acGMnB57RzWXF3uasc8Vx9B4qXNPMtBbixcRq8TEB6WKvT19",
  "key34": "35AMzExcemwQf4rzjBaRKkGpLrQff4JFiU5ZX8xegXsWc1NpjeSycNesufYcDhHnRgBxz6eUXfjyeAbvpJvW1ufN",
  "key35": "5AtvELCvhqguMmEPvg7ShWEec6v2PS7k1gKmapa3TedHkEk6TyC8Gjv35nimwAvyhhsnaWNqXJXbbYceHXNb2ToJ",
  "key36": "4xgTDgCHZ831owpx8PuQ5xD4w1MffwStxMvoe4NiFRseLuCd8vZTvGKjvhPJuFyskkdrVyvq9yKHjHZL9Dymo8iM",
  "key37": "3TC8DCMNfNv5kLoTPHbwn5NmJ5CfUU4CEY2fYTUi35j2tHku4oyAV8TcgT81o3ecgiXWx76ThennDvVnvU8VywXQ",
  "key38": "4niLXDsMwLnDhvSYK7kfUGLuC1JMGH4j8qaLLZhrN8Z9HCzTUsw8i7YAsnPxSxMzjFR7dzVyU5axWzrY7wEXTNTq",
  "key39": "3yVDR357BdNFkuzjthZLbJX6RcFjzoajZJajFmzYxgrXjSZqhXGfTdWqDfj6m9HRxV8Nkcrh9dUZBJQxprvXbo1i",
  "key40": "PsrR6zCXDYJWiKh1JJAyACjGiCsqnL1AaQsPByhCtEuQY21mzLuUKQMnvgdBxxkL5WuYabRcXa3bxyKY1thYxuJ",
  "key41": "4xUSnTER5a8XEd3NBydUi8xhXBQDY1osh4XJEgQRpiCWpouuEsrmqfU3HnVvc9Yzzi55xBhAmVoe79D5tReZAxJP",
  "key42": "JjM6wmGdtUZcWWmxWcd4cCRLQi85VHpkzKAdJUm5ucNoZYhnUPy52ULFT1h2J9KXCVNqtAmvXMZQnuzFnxTe44Q",
  "key43": "4EaGrEdayGfNV85pPsYwxYy7TduhUFbCoHWQaMy5xuj8N72jRe2kRS8TJyUKiMpTDi6CYt3wQ39M1vJY1duMuDY5"
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
