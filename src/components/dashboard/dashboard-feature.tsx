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
    "4j6opQB3nGHRTrna9Bct6KW5xm6TzVrcB7tU1WD6D5HkVc6ATeWDefkTA8gnPgs9tWzNYYNK8Hkh1ip1cQKiNc79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1Akx2LkLTdKKnc9g4ZuYZLHcyngpv1RtBSVTJXjEaZW22Z9Ry2TrUgRqcHr6bdeVn5rda15mWFJ7A81fndJpT9",
  "key1": "23GTj4iHWT84kZWVVdd8cYcm1AjJSoK4ttapasWNR1br5BCzJM6hdpUBYC1QpKCt5hBbo7dBkFXzfVn3f9CyaMPW",
  "key2": "2MwXjNPrsoAhR2y4B1t6LpitTGXZ1YjDFRBmUrMbchF7KHxbnsuNFqyumbRGhsaLXjLtBrQfY7tsJ88Vbjhn4tZk",
  "key3": "2FasoyRdvQWSCoggJxBKz6JZk4YgDei344ZVLxcoAe9wysJivqQV3fCYWUw6sQ4BUh74VB3ZbPq7xNfkPKxWaLRS",
  "key4": "2yzkfeAgsy1YBbvrJGFxvwYHReLzGvpgrrEjavUuedLwXi56ee2h25Nv9GngG1GaV5u6BvW5eQyadoV8ZcNBSW5T",
  "key5": "2TD1oEi565a5FuAiWyH9yuJiA5xdvdtwVX5A73ULAa4NEQ3hNQJBGsbLPvaHbmPusjo1NfRpKcx9fRwwT66ty72P",
  "key6": "5mHiKSQBeh1fpNM3VUPEg8a33am1PhpewXCRWqfxbpGnSG3RwjUC1Bk7ATeGebTg7PVASdCH92KfYgJwJkBL5rGV",
  "key7": "2ghbRKe9X25HekNmrctTq1DwkqLNGhfHFWfA7DbaeRfSB2Gq8WcZ3dSV3BYcxi4g1arAEt9xs6w3j2NvRn8zz687",
  "key8": "vtUTopHcKLeEiGwR76bq2WpDe5cLkQoxmFCcJKMNfMfoasgy1RYj5kTWQLG2xadD7JbXjKrzHxUu7YUtCyeuG9o",
  "key9": "2bKgjfhTJ67RN8PYj8hddkTqnkEVdg47ZbidR3GSPpKsc4un6D423pzTyJYuxpyL3HLxYBawMi99g1GaVKQYiito",
  "key10": "2hzW1VpVGAfZTPG5YjKeRPLnS3qSK4DVnQ5QPdpbwFArDV68kzdZNF4PMNPMK1iTieMEWLswX7wcpmVixfeMxPWg",
  "key11": "4XjjFgjyqZv1tLXLgBBbTpwNRWv6hYjmgkbd8MiSi3ivD3Ggo4NUQkTJd4XmZUGPLpTh9TwsQvKC5yBRz19S4njf",
  "key12": "24ZqvAqDriUuoHpDoHm9V1cppQyhG1Ap7N36ae6mSyZg3153oprknR5gM68W9PmKxRzqtbbokhoopeiyBsFvwfbe",
  "key13": "gneAtGYnKQaNoXDtGUjtfYZbSfwYrhax4Zo5utV1Jd5ea3zvFL17WE5UAe8FVEDyKWAJzLTiLmtRQF73ASfdBdZ",
  "key14": "4VznZTrfnyCKwTGe1Lj164oSMzEFtXVQgQjnJSjXDVpqvbj2mNFR6ybcbR4oa973nfGpFEbzw2MqejTU6vnJ8NrN",
  "key15": "5wYKPXeY8xh72TtVbviQsB4izUvrJxVi42FsuddbMmTMZDnFpzFG3atVT6K3iSTtj6KhgCwSxrwcqD4zPwTEDCAg",
  "key16": "2bp4eKuPYLMYLis9pQFUuvpUFfuWo8myb93RQrHBULPrqY9nyVEAmaEjaisiigFx7Fz4m6sWvctFZQUKbLr1tB5C",
  "key17": "3yy5EjCAKDQKtcAHCR45vLwPzw42jrkDXhzscBQh2H8KwRvxbf38gigUfbgtUUe68gchKCZc8iLVD7riQ2LTUJSj",
  "key18": "286NC9ERbfztKxJSjqWCSaY61EHChTxZC3FkiQ3G7PJiEbeTeB3eg3tfPJR9Hw5N9RmBP3tZ4ZgHjdd3MbfXboAU",
  "key19": "Gn3QEr4L4bfoXBrQxcegbkuw5ZYgWTJqfCz2qTpBa3s9t6GpqzgXyw7CinbCjHCRXM4pd9Q6KWSDUcaAFHh2sou",
  "key20": "3H26eHXz3RuzuELR99PA9YMu6yoBNcKyVaRDcYLbGBhco7ZQwAP7yvawryvAoPn6ZRXrLhpA1sBdf8KSQxV8HY1o",
  "key21": "5KTdg518o1V3Gp31AQbyWdCEm2bdh2QtG5qa7dZ8L8ozjNnkH98DNa3jTBjrUQLvDuDCNEmMR8AMutFEvyyQNyXW",
  "key22": "4N2zPPw72avYuCfDnG2mvCVBi4iLowdeNW97KejQbb9GbXkDqw2PRrkhYSDm3N7wo2MAR6y9Lm78EHRbu4yqZKuZ",
  "key23": "2Licr68yYKujRn5oFNYEZ9tebxtmCwoQPkWUaKWUPC5hnHUeuJFAbqwsMVxKMKJqZdSbipRHtvEYaux8m92qhkix",
  "key24": "5XWGuzLWD3UGeHWn6fLynghaSvopFcqBVdUz6yoGLCpiHHaivKZVHFR8Gj4XsnFTchFMcjxRTaArciU9cmXPsNj3",
  "key25": "5qSNATEm9ryyXakU51PattfCTNJ2WctnRV1BheBFgDc2Jz54KrdAoCT4CW3MJKMCecPt1cA7MQytT4W4frmKUgVx",
  "key26": "5eT8yDncDHD3T898nygC3TUxAUYK37Psmu51drnmLoX7geMj7EWSzgmYR96g4yT5MtaLmkydv7FyuXESNnKjgzmD",
  "key27": "3mpB53oaaFdvbcYrfZG5JZSNKUwdUrRrHrP4sxMGVVKHRw6rcZgGAykaMg7DtpXLVW3VxTAGpnLAAvrKitrXsYFN",
  "key28": "3AAceN7taQ4qhzEGAd1WfuLSS3UyTAqidboUb5rdDGFBUfN9TYqB7HKJE2aiTVhwp8YFrrXUxszw6Ai9we86UX5J",
  "key29": "4LNVj1vZgPZv2Fb3SFNxZpXmjXsJWvBLtF2rYDViRhAQo98ZiuMviy67LVnK4kpZCgHFamJpNbFRg7iyZq7wd9bu",
  "key30": "23sCrueV48oX8hcKWFzvYXZcByo9vmN2YNNPiCKzjskDAsBnUvhVepdeugbozbaktQz67pkywKZK6x5mn2Q48agW",
  "key31": "2dUi2guuJVXitW4ptSLmxX2f3obRH6NnScCQJeMgzTKMtuQLanjqmn6ruH22NvznyQ48KMLVn4H3xrSRgtk8aMqv",
  "key32": "3EdR5U5XL9j6q97nmy4VFz9FoU6aocLsBoV9S7mf3gzrXK5LZ58De7vd5Vn6BWXXJzqhB5FrwUXvRYEtXMcQv2gk",
  "key33": "3HptyJtmEDtV8BfR9ezj6pXRpUrxUdxvyXNZyaCFtNwnqjkTbyJ2nsAoetaXpgJr2omhJR7EW7Awrat5cCkzHL2U",
  "key34": "2L2CUWwSocBGV9gWEAtgmGhHLWPWFHm9Dphk4ccJYu8HNp2qjJkF32BCyMdf9NACkT7BA3emmJF1CeUCahd1QWUK",
  "key35": "23sKuKm8efYEXikT42Gzi9fXtvJvAhXNQPcFekZsRzXdRr5hw4fC9itejnNvwmPpJfsN7Hr8kJwbxx3REuWVWWUx",
  "key36": "4MUP6bARTV9xvWpLmfJjid5f7oTUrkPfP1QjEmBqSqTfdaZJghuwU1tgCW5d8K4tBY5E8qVKxdejb1jBrdSd9hdi",
  "key37": "3enyawSpWsZ2sFDypqBR8KcGTeqcvSQNvLttC1SemhbBKySwdUaNZpZipXp7cXJtVkKSSAjBe8Mtns2jraNa3nKL",
  "key38": "4AQ44Xt6KKMd3g6uNbkpLPfvxZg3cnXwTmgsNJfZwPbx9rjZMgZKMo3hUgMzADKjVPS6V4SnXpGihQyM1NgfGnQX",
  "key39": "3Em9xDwKDySAjSRBQ7Ftvh27GWWLEFBTCS7DgyxamzFJ7aLfqap4dWx3reXt3iqrrMZ3F8TkRcHiJSikxPnVb9Eq",
  "key40": "Gs5bab82kmAVdP6Xnk9iw22u4bcUohDByEivADcmG1UASP93tLZD3ZVDfTJJKN7AVjmvFaroJemhK9rfGBxKT3i",
  "key41": "1uEUTaCcH7rn5NXXoXvDyRQiMoB2gpno1WnLFxmK14HDE1yoAwxLKzgTtYHZwKXQcYzTVY5teiAA6Dh15TzedhE",
  "key42": "5xGQ5NZKzapcXM5dskXoH8REFo6KcbrSMA2PKvp6eeFiyLTj5WPbhAMBTF8x9kND6BSDZ2KfBgV2rGTCrVrm28y6",
  "key43": "5H8sfintfG2AjrHZx1BemGEBqp8fekjf2yBdJ4CjeYAmvcpVFZCdcx2dxuB4GwxVawMbb5rz99TTvPKxwjUmrApr",
  "key44": "3oU2WGeCg2KLYPgnhRw9fJsqk2iAnNykdgR6nCC5pa6nybfDLNmmra94V4Uk4teJqcoTU4KHL3dVT5v7BWMLMCMM"
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
