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
    "128Bruti7sheYgGKtC3CVA1y8fh8cm9vdJhw3XZZXFxrykRmzNu9PDVpcf9gHDMxaF45CfowGyhEWjmEQmqHr7z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mY1R6BktPavumkeG5y2s6p3N9ueTwbQGYLFZLNMUYZdv9K1YuvqU8828rW9c69QMrPVQARWKxSi4fx6tireKna9",
  "key1": "4sjBMs8GebDpn1Fny6bY4QqgxNAq1Kia3hretnXXexsRgKGhnkrV3Kw4QNAowB8r26MehtXtsmS7d7xTLGKNBRXA",
  "key2": "29PoadyVRQxKaChyDxxrrVin8kUHt66HAjRG5fLc5TR78ZxoDGELEk8ksQuReQoJFV4zS8EjwstL9zxbrcEELunS",
  "key3": "2qugvHUEE6fnNMZLcoWViMd6GytfZy2JdZWiLQ4EjEEqnRe6vCyv3g4VBe5FB7V5DPiCXmWccD7YFRX2grM5LeEQ",
  "key4": "5z1bBAVhR1R7i5GLJwPhvr3N6k5eGfwJr4eGh8rMwdP2ms55kKPsXt1MYqnFc8k9ktZ6sR6NxUYF3EVss6VkPVa1",
  "key5": "3dF4YQkDGkwQ8e6Ea3DedS3FW2yV42w2QjnHK7nmAfMXfC8ieceGBENitjeXkD4fN7ez7PxRqhkD79SKdua3AEWo",
  "key6": "3hREpxggQGsSSBgi5m5onRyski8ETBo2rTfEafxBA2yRCmEXHnssuaX8A5oBKCFjVsVycWQEG9Y2MipTsSxAzMYi",
  "key7": "4Thdo3kQs8aNDRNSFRMuz5KLqVnwHUXcrHxQaF8PNG7uYbekMaRDaTGP6mMsQieZfz5EcmL7sYuPevBVs3VgmGv6",
  "key8": "3U8GJt1ZmsyNLBwJDxe3S8m1y67Q9PimgUMMBVKAwuZC68ayrdETnD81PuNoV5xcgPgQj1a2CyZ9zttMxYnZ3aWK",
  "key9": "582RcPfDPHXFJuiCAeLmjxqpUMSpbdHfYnuNJTyG6qas8oFQJCGg9DbQ38KerBrQDxuhhTyNao8QcXdGatSJSdpV",
  "key10": "4FVZ5kaf3tfV4EJwfp6NADfVnyRsTitbXhwt3sDLe8SwsfF7oVfVzx34cjfz7GunjMkbyQuQ5GtEUeQhcfdTfj7B",
  "key11": "5RHnS8UpVTeU5sirUVc54DuN71q4mAEs1tBHpj5Vpipr39KFZ5Wskdp6DgfywNDeZQozGaKyBEekn9xjwwurp7zd",
  "key12": "3yeQW3TWQuEiuJKuRBhtxVqwRNrGy45bMpEiMHgQJxFJi6Us6MF1txqr141db5fNxE69nVh44EbVTxxG6YUaNbKW",
  "key13": "45Wqkr21moXvrK1mjHSF64GRzmy2hJJ4m5uDqD4ug1nqPHWarFir3eAbt3MdjKL1guXzjjB8Wm4QrD9F5755rcv7",
  "key14": "5DLeEELEL3hejXCnFweonvHFmZ59PZfVLwrRMnm9HZebiAyy2fWicRfqZYUphoVnX5vuDt4v7mziyvKRSYDJBaua",
  "key15": "2QnRpxgsxbQgKCUHcKnvoKnLazDe2BZRR6wRjkFnhYvZX9Vt2cVXrFvHa4gp9E62LhpMh1TC5ezFqfxPwob51Cck",
  "key16": "4ZqbR3FVVR8mpCmT5yiYWHQHiEcKWo4s39hCYRXw7YpHhVgLLFzQxigCaYf8qFwrppdUA119jX5QKhFy9URtH9zV",
  "key17": "5z24FdgEfirpcbLuQu3NrizDqyL9X8SopVXZcsNArwvq9kBmhR9XQap4bLMCvY2rw9vodSoSdc4ExHX8t5DrsZpf",
  "key18": "5EhhJ1wBWA2vwsY1Spv9BnkwySgA4D62YCea9Easf1feHjQCYYBZiU2h9zEuWe4R9h84ujD6GWgabdMZpamgaSSX",
  "key19": "C8eV31Jm1bdq7iFvgt9WodDuYu59A71j5dTQ8pQBy99RJpRMyvKKubc86c7eWKp4aGEvcaVN5znWX1nUi6ED7W7",
  "key20": "41fKJcf8GYb2PPpdGsLFFEvzHSbFdMMkDBcorUymBHnVNUA7UPHcJJE2VKZN2w1LZpEXzUnKAHGvv6BGgdcPn4t4",
  "key21": "2ayA1nQNVR83ynZUkpCbJuVJKjYeEsrxL3888BJFBxmpk8GidqtqaGyT3x6Mk3uguHY29fhGUjYWJPdvCeADAXyG",
  "key22": "qfK11bK8Gcwnbu91DkAtbr7HUs3czhfarfo3s3djxy9mJdmKDbhTnUsQnn8FTbJyaRTkEi8SxQEvrq27LTp6Ukf",
  "key23": "34tkbjyLCR59yTMdXJPw6dMKP3ztGrN2Q4e9NaDX4y6gozc5oW9TWvA9HFjiAhFwFqpeDfnC1nSFkCg4QD99dscb",
  "key24": "akR9gDgQ3yS1Hn2CenptqMYFnnMNEfVj6amMA3cJ1PePvuaASzznVmYhawfUEpcb5WSYgukLxmvNJoJYkaUzqH4",
  "key25": "2kfDVcAxEeMkGgEdVb5Q5XRexCMmnt9qPGSKRChmCLmu6L5QPbqXGN9ohsYCQUAaLmdQbDDuK2h1qf4EcnGjCTJ3",
  "key26": "Kmyez9eff1uvG5XtKUyAYzjbyUsXNcbFL2WbdR3heYb8EFL8eVLgs5x7k2twCiNkj49PJ3PAps6TGDbdgQ4fawC",
  "key27": "4GMvexXXsSdcS7ChsvfjALkz5peoFur52mF16NKF4zBzfBr9Dft7WA1ZHPDnN7HTgabkLKbxjwkH7LBHJN2HzmdQ",
  "key28": "4ah9rfqBULAyxVH8d9GZbPEA7U19jLAPiiiGWKYFmXgJb8bGqtRdKep4KqXjwtFB7WVujQVdP8DEpHxvmhWXGdzi",
  "key29": "3WUAMYt5NeGeVrTq5weAoaByMoTCjNNHAG5HiG9RSQPzr1TnnDk7zco6tGcERLUXZ6zBPDqRyaK6Ht1CHsEVY3tj",
  "key30": "3ir2DxNLhhVjm8KPEfSTw6LgkLoPiAHrhZmRXmQguaVRB3iWp3Q7aSNTpfqVSsaYGYkmn1iykywDSJ4dk2eoahUB",
  "key31": "2fZvXtSYhpLYjDT4sdhkNFXLhheK8aJXUUkam3K1ovZjnLhc6K3FNyRokXhBL8gyZnWTsEoZEjEMa8NYChUmcxjz",
  "key32": "DAigVZc6qGb1M1wDP4j6ZbUDWpqwo6CgXfXyBwnmWzKPPc7FNUQhgWTUL96tV5p6FTajD5xhGkLJiBib1DRfJwv",
  "key33": "5H5CYKCwftB9pfyG5aEMvYMxu9vs8fX6pA9Pk9ueiXd4WDQ9JrLQ94Rp4BsWMpSBEyCBzSjihYJugw7VLz5L59Xc",
  "key34": "NPdmjeFoBrpBnSyHjKS6mBQACBfzBfLiJNMgC68pazxULbjfmMFoXDexLuxaEfiU7eEZMy7TuHqGynEydd9xAYQ",
  "key35": "3Lg8i1GQtDssSaJpopthuGQn1MSJBYzjr5z6K8CijyHMoJ782ZuuSRgYGkAPriUeXqSNYKHYWcaAG3jcp1CMb1rA",
  "key36": "2k7dQK8Fm1UpVo43xKMLTzUHbfYG11osUpJ8mSi9ZSWzSqFpJwu3STrALd96k5fQDjyCKEq5Bnod1UVcncyctQT8",
  "key37": "4NouybuKh4wPLKPw6F6RSWb8mjEKJww95pNFGhiddzGL6YKGy9Mxx3jNJ2fQE1msSWjoUarddHFJRLMPusupqEYh",
  "key38": "4PHTZ4nSJUMpGjSdHNQqQgndafABFVLHMDNGVFCBCBJfkWNdzRizypzams66QegRURkZ5cxnvyenFCUvQfGxyQ3r",
  "key39": "3DxjSrMfQLJnjE33CM6WqLNkSEVs1d5MAyV8whcoxbpoZU7bcjTRFT4fRjHKkX1Yh8fTRLqGf33HBaXVkr9KQ8Eo",
  "key40": "5b9bvLLzXByr1VC7rCiFYUKz1x2V6NCYUPVRE833pyjGEhnsoenpmvpoAoWNCtw6c7tEY78bK5wqqWNygEd52QMs",
  "key41": "WenchGB5mCnywjNTs28dHmcrcDnvZoKoyHPxrYuZjGXxcffnKW6odQ5sYxhBmiBLtBY8tcvCpeSu6HmXRj3vB8a",
  "key42": "5ahPzeggPivt3ZzKNgEygnYw9mBSepRRhP8vEzFtyF5yQkZN9Y4wi73VT7vugAmev4yQPEMuQgX5ErLmDUMYEcVW"
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
