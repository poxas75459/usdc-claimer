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
    "2kPbFWGsQVmJV26mdvvXvHWob3NGsYrDr35Sxxt9WSmaFWjzoX7qyanzWiQjKByKUkFgxrwxaCrkdBXCiim9doGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CEUSDyKq1dw2hSubMeYf8hvFWtDRwj2LmBMZBFcx5YXWpK4DuL6P7tLfR3Cp8XMmikJ7zsXMB9zikRgYvnjmiV",
  "key1": "gXQ1umUnzK4cwbUj19M2yPtpqDiDEGFNMCH1oeTkaphSEqQ4wVj7nBww9gV1aoJesvSJQ1tKgioqhes9rYaGRrp",
  "key2": "3jDDRUsPMsodBU4NaxcNgtk7SxSTAezftt7YwFZdW4XsYfPqx9u1r5V1USSCPTD1L7DsfvGqQ8WUkRHQHWueRmS9",
  "key3": "3Usc8A32cwThesRHj5Bwqyx8aC24AXvtDJMhH28uoq3Fb7uo5Aez7zu8M6sPVzLduQKv8Ahj8rVqSxR9demgQ669",
  "key4": "4PvQWbNR8AY6NdheSX23nRMn1qcS5zPmNW7zFAD1wvnFa7g97HxPDkSEziaPWFFbQF2ULHq2c3EYCxEKkR67MtQ5",
  "key5": "2gvrkKqxyioCf4r8sQXxbbSWVykUuLLaEv57ZbUmyogk65ZENLrAzwRL1YGmcsWLYi5BFDHbFGapuhBHs6a5MSor",
  "key6": "4TfVDB5XN7HEXB7pTSNDoJkAxP8SSQbu7gqu46yNDgPmEAtZg2cQTnrtWPoLdu7orEpdR7w1bpZSE9DWQqCr9cff",
  "key7": "3UcKjaHmqBmbKbzExcJMg54BWVM8ZrNbKc5sK1Nqi2N8FrpYs759Uy25S9MoJ4xBb8psjjmHzV6HfuaYT8fwQphs",
  "key8": "bNV9gcZrHdx6nfn1h3eoApMFYNr3hzvE6Y6HrVozMoLReECbP2eBhdpHcrkJZBNmw5wH2JF7ySQwybGQ7d47kvj",
  "key9": "2xne7VRPfSn4a44tJjCHhSECX8RLMe2tHoryj6PCKRdLhjnPtP95oNpcm7E7L4NeDg73BL5bxN3VEJ5TugWY72me",
  "key10": "5oXoU5NpkzNG6TDmTfgaWjm3f5yCxtEfnSVAttPzzJ7UMM5ZjKLgGXDtVmay2ujhEzMd2trGXSuRmPgBJq7veFdv",
  "key11": "2h7WS42KzuUNSorA8eKJ5CPvkpLECpd3teBVEKF9emj4tHEky9r9eF7JLw9ZMHweEdby6P3DMDLYzZfB2URCFzew",
  "key12": "2WcjWcMweVnRtBWzk2HgSeNBhoXuBPXYEywcb24Chxj6iVzVTah2DwahMrL7JFCL8E3t7BS9JVQJR4WPfC2c7bxg",
  "key13": "5ARHM9WKUCZvKNyZB7cuvv5ZHEy6mkSQWQHo2MzUBTwkjpB9aZDbqBv8MMt6UaghjTqpwhPXg2fFocCJMGFtcnuC",
  "key14": "2QtQXuBFoZJos2vZeum4V2Q2UQKHSFUFs1cqnnG9cKtWG5drLidr4k778JWv5y5GJFLxRyVYU7fgnWcBzftYfHRx",
  "key15": "3svsxAi13podXioXW5pBuBPVz88uy1zu5C2iQ8ad3fzPfATGLLhbrPZFomaF1WzDRwJXyNuKdVF5Zz3NJFZrBLQW",
  "key16": "4NAYZ2CdX2V6bgkDziuYQAaNzhUCpsmomZeimb7vo6V8yyxbStk7dwxVMfj5CU2CCxyARziCaTpFqmyEceqNVB5k",
  "key17": "9AeJrPzh8ma6PH2az2qgjTSykrMPu71UgZXCvua9UD6nQRYzSnohurFnD7Ppro4QyvdH4gGwSXddjzKViPtqQhn",
  "key18": "3Yih1PHRKYgRUvcA76KMkdA8PZJVbgx5gijVKSEWvSLFGFXkybLV4YMTHMQGtjxKPEVRMyN1yjN8NqhyhXZZRuxf",
  "key19": "3f5ZaU59A5bYj8Ysf8MH6FSHREQmr94Q8jayyvAcBW7Ly2wXi18rpgHhvZNknpCaDdQmRwBBwJC6q88a1y9jsQtD",
  "key20": "4Dib6G2qk6f6e1zyVVP175f7DDkXacypHnBdwY9nMApkW86rPrTRhZZGpo5HdFrm6TirTTiq5fvUiJBnAgrZRnS",
  "key21": "4RBNUT5PVytZFVZCZbomqTaQEYbR2SteBMpYnaPs8MNFUYE4X5F77LqCP9k5Yxv6kGPgMxpjPuiWkaDcYZu6my8J",
  "key22": "4dPqLjGzBqKaMNwQJLpow4kxXD784CbVEZrpBpj4YihfZHXWejgSmumyXnz7dAHqk8GjypG5chL6ArpjZiQAx6qm",
  "key23": "3YSEcA9NXKEBnX21mVDBQyrb6YuukLw2StQejFEuTGHgpYXtwuUvNPyMuq938E4xSf1t1HiWfNxdawme1MWJkvqs",
  "key24": "Zn685Eri6EyNbXpV7wPq8q9NyrUw9wB781pR9bXUdot5RxQiRnQ98uDdcJPxzuA9qMwtRQRMNpybjW51PgvzYfB",
  "key25": "3PEDvcPn5MeSXov77k6K48zhpjMbUGpHAW1Yabct6fwhhhxZGM6KYcJj9jtFW2n7jtZSXhiQfyEL4ohZ2Ammcorz",
  "key26": "2addgX42cYPRiiFpPcrK9T1e3Ca7yRv5quKQe5wXty4txgMRX2AMRU6QJuMqLfkBeQBi3F8FvcmBjupfhuGHxMpX",
  "key27": "2EfLRYaWjj6FhWo4f8bTNTkbBYo4ZaczLXE4odViGSot9i9dAcdddJXLfz7qYBKZ82h5Xwm8vXAGNZeKKFXnmnFh",
  "key28": "4VtxVSh6E6q7uc8S6HoM5qupM91iMgDAi25fjsxjgUYhypjsPegfACXjD3rAriBxtBBs9v25ugb4L3JoAR2Mi4WL",
  "key29": "4QVp9hKm2RF8YDjRs9NWQARNHN4wWduxq6tsHd1nTPJDGH6vJ3zcd8smc6BJuTACpy41dUobi1qiJgWA6Uv4gwKN",
  "key30": "3VdJ9jKMEL71WZ7hi6o8X1bJQF24CsrgPv5mGMGstCX9Hdi325WPKFXucHpeXYmPMJsYKRidLGtAi44Q6D7WpbBD",
  "key31": "5DwtAmyBiadUMTjyqCmA5xojFGqeP2aUHdDHjcwKqrqTukTq4S3jdKn7uAGc5tUph5ZT7LMfL2y3QHw2xG6J3SyF",
  "key32": "3c531DMvh6ap71taH9tdsyEP9vRQB5YxHXv4ZcZuXWF8s8vGi2ywJ19EYo3PyozAsXagyLgr8bJvi64pkiXyydy7",
  "key33": "uLp8Lp17yVXcYrs3RSUqKiK4qxHFx2fGtCcrQBZanzWMENxzDqPrhqpAoYZhyzXVANTcSkpBPXLDy15EFUkzsdN",
  "key34": "4U7pHmRx9e9J9ArvxDtGgmGTyamSoem31g9NkHqDXUtvScbcSKkDEeo6rz5oFDZYRXZk22akRtZyxXD3fj6mN8G4"
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
