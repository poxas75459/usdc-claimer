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
    "5e34GfszrxUGCzimWQnF2MwyJ23eMvpK3DDfvjWotk9XcsQPYRCzWk8f1vSAkAMgQW5fYz2pPkdFtL4w6whGrHWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCRfyXxESatBKXhHH66fjMVvChYBFHVAbEdyja92tmxJxaw5NTdsEz4QkXUb1sTSu2Grqtb7hedJ8Vbrqg2Xd9t",
  "key1": "635cGaRCNc21dC9x3vH4dGNhGFan7soizyaxNkDXkF4jQaTKE4UmjepNHSSjzHuzVYRBuRv8Q85DTqMrVJhwV4Sh",
  "key2": "3jgf7CDHkqYCAzaiMMbJruh5Df1cjKfVBBJbapCD9AzcYH5s3XvPTpdVAuNF51VpQZX8BGctohmrrkBq1QtL4gCn",
  "key3": "t5fDsPFPodLFSqYUWfp28bWTwYYAU1fxCvcBgzBo1r7UH7f7XuE8qyxWTpp8wksFSvaPNvXXqws3pxsNhdcPFAj",
  "key4": "2QcWKodgDMU1B1mB6fVKwjF8xrhsAG9vAsWUTVrFHx3CUQovUaSWSxhKUtPHKnqH8fNX4BDa26PnpQBe7zHXYKUv",
  "key5": "5JAcPUQpjWaKqoo2Ge3BXh7V6SCmoJYAyXaTkeJHyxLDtesX6Lm485JsdvC7Fo3diNwHTqyZGSdSKvQvmk3Yd4Hq",
  "key6": "5xjEhBCEHRGcXgCwtPehH2WcVgFbGwz9CvMC9x99CCGtciqW7zNsxqNuTDWP8ahuqojpVBtxokbNgnAVvRfmzdN7",
  "key7": "4tgad2kXLfrRqyWqtm624wbBcexDJz6v5qxeekt91Y8d322hJXC9rSatXPyoEEzrRp7eFQRaK8sySubjPBKgbwpu",
  "key8": "WPqnziKaauKoMD9HtnuUdgspD8cPmHVeJUachxvzPSSrxTB5GWyS1rCxeZfWpcXHyLnRg1Dz72NcrFg4aiMvSFF",
  "key9": "bYvvHqg1THEnjiU8NQL3jipYg69LeuQVKEs1AzkRH2DMLnPf2VUAbAoUFjUgCUXR9kYgjDwx5NnfsryWcyQ6LJb",
  "key10": "iFirPqsRfmkJvytENUCT1VB45dUkszss2fotdhYYTaSxQb1KA5ZiXtyRftyFyma7pUaRkAqWRykFUriBKkdkZQb",
  "key11": "66izaYgPU9fV4Ce42mnUCD7psn9A8C4QBCTinobMfz1VaHR7He6rpL7pxtpWKN1gdTafSes1Cys5US7j7qykoMx5",
  "key12": "2bpZXEkF7CJas2DNZCPGWFSMvDrj3tixQA7uqPTZ4BXJNyY7R4BQgY1t92mc8DXT9nJMpTyRrrKXNz9LYWA7DCnQ",
  "key13": "5YNdvGDu6taTXdL1iG1sdsccduYt7GetyxA6piev7qY1ucom9Dry5ck5x5C3JBDc3r1homc1gsKxpPM1aeAfZjhU",
  "key14": "5FXMWJmebHTZt2PMcbZ7WWytK89627hDMKhuzxV9bz1s7maE1i8orWyPsY2XQ5KShEnMaW2ZKVoVkB8AzCKhkq1g",
  "key15": "4b3obq2Rn1XmY7TK7nDuFjp7cVshtLZJfK8LHHiw3SdQkCDG2V5JYg7g6myMZecPAkoVgz2gvB9f4QEcL6coArzU",
  "key16": "3j9Q6AMAeR26whcgzkz4YprtsUcJRzM4aagzLTU5QLg6HiuvmPvAmVVJxyuc2cTUppQDR6mZTZKe3ReQBfJxDQfL",
  "key17": "aEvQJ5Vkm7on2iAHjyWbwGdd4jA5TuQFusvLDZqCykQZBrVG2hSTJKCVFeNo3x827ggTWcjNcrqC5n2QvMAFyLF",
  "key18": "4jwmE9rk1oY63BEcyHqSTDnzXMJHvM4iVAtJvYnbgvpWxBZikxiD1VCRSGviEBejXoqfAiL7T8ipmc55tLbkVZMW",
  "key19": "8tMyjTuiFpyZQNy3S3a9wjmcios5LxQA2CASU2UAYtjaGjcMRwSX9FWBfChyVMec2SUEeNDc3wtE167YsqqnVje",
  "key20": "3S3MPWUhPuFJMB2MDeghu9Xtxsk277YMSM7parkRUcAzf1yehzRdL5VDfNkSF2mGSVA5mZ4Vchdzbu5ovh7Zn8w5",
  "key21": "3LatkJzteKpZKiK5yuG8qUGivC2jAjHpLA8BWnBojqqpni3ji9u7DMsKcvqZApnCG1ewS537AkNspNo4sgppRSVf",
  "key22": "3hJT2uhhFrRaXKfF3N85eskJCZuEhqd5VY85U3XyTskou8yiaMdH7qDW2cWd9Ca9BbwGLsf8Rs7uaUHD8iq5jq8t",
  "key23": "5DKQYug7g6XJpuqTWTkXf9FNXMVXZB7pbeXYFwuJAvX8T53gAVAkWsh79exoXteRAwSWrsq1wDyishVms5jqLxW",
  "key24": "2XkWhaySagkTXBsCmH8aoQTacb2XLLBEGAYqZLzPW4Bw9T4XpcLaFP2EBc2xvYods6PtNLCKeefXLpkgw37Nfwcb",
  "key25": "49h5HLVB95YvyC7B1cphhu21ypRkWFWCZKK55FtzftzrPhZwPcHcE2Vz5JPMV9Wftr3HNMRDnzdn2WErUSmHse8V",
  "key26": "5pVkkW18zyd25ZdPHpcYvNRcaigxh5Dy8P2nN3gGDRhxL8DnAqLxUdz5mjKms3LGJbo244CU4ZFnw8WKd6aSjBTi",
  "key27": "4b83pXpG1SukHZGKmtWaB283nTZc6zG2A521FeBp2G9X3SpKSGZtqbmSUWe2uSNVbRVQgaSXvyvNHBDLmfFDJDQe",
  "key28": "4aCe1pmWnh4A28e4AqNr1ThZak5CAdjDxCy2JrmZB71HkSXVCX6Xgcv8yPe7UYjgRtHDLmLQSnMXRdqjCh6DovUY",
  "key29": "261aN29S34Nfvz9ZzGNHB8RZ7W3sh1xsz2e6uDCygaWNWrDWbUZUS66SmK2LCLmQgfQoipGy3HAALshMsMiBzV2o",
  "key30": "5LewRNySMc79UD4dCafxN5YymZ2fnm7vSU4N6LoCuPmG8BrEDXjrjqhSHKwQq9DGevLeXZsnsrJn7Lu6kedHBowc",
  "key31": "4NLn58gaM89ownGBYuJ9rQKqXNzydMR2FjQmXxUgtcnRGmX1ovFYP6a9RZJjD2ZCakibdyfJBxjrPoL7oWk2Eihc",
  "key32": "2vjqYJZYzpNyfGBBzjDzntLTkbdQqa243nZcKdoxdPgokPWNxqfeHps4UrBZieswaNdzJbqeyymJBZCg15PgLDac",
  "key33": "dSjE7HGuMnZZQcDihUZh1YFu7GVosG7XqffxRrKXPPMJcDsTRAQJ5GPueXQ2on1tYA4QEct89sZV8uXXphR2e3t",
  "key34": "36tzVHCwZKao9wAAsoif8RePVLenB72JwiNyNYYpD1BUiWmnd6t1exmPdt8ytWdP2xCXqX5itVYCbCAumkXjrVrm",
  "key35": "23zGUfzUUyQFWDndcvNK1hWdy1N5jtdNVpvyeUoKJyLa6wjMG5ARpS6FoEzmqTzb49GHZTCDoL6SNXoHWi4bt3nu",
  "key36": "TzNzGeb2FcujBVznqCx5Sdvx65Az3HpvvXs4a2jeAdX7KWWy7PBUmJ1ESQCkSxo34x89CPtfXA2qA9E1sKHe1EG",
  "key37": "3MSMoxnYswHjVXWjCE8Xnkhdk7XLz4DtHNHzNH4znaQfdH5ndH2NEdSBf1zhUf2CchDX7bFzKZ7w9g1mkTeBm14V",
  "key38": "Nhos6vDAvaSx7dZ8bQbtZNMz2TGWVQ66jdJbadc2e5cGGnUVbNBRM6z3UPysypiJ6xHqApg9cRNdovMHDdaZehN",
  "key39": "3V4xezELVz1Mw6K35kG49p3Hgje6CS941NkHCTMJvYuu8RAwLHS28vc9mvv2YCd5tT69gVxniEFNJDUhFJXUVUbz",
  "key40": "5kzsA9whmwK7D8KFgDKrRod8df578TNFXvca8xuUthUNNG4TtrHZVTZ4iR7yZGW2SCZ4QDNW9EMDihFWVkLw64df",
  "key41": "4W3KTAj1CmciFCnxtL8vKYsXASVUyHH8B36298dU1xymijB9HtURh8hufmxsEcfp6RTiHW9VmX2FkrfUhdBUPXxC",
  "key42": "2njaDw829mMNrEJKhxAgiNegoMSvw69suLmbdqAuUPxUFhwHPYcCw1ZGrc1uGpNRhKgHnyuRPRNaEkvMCBySgNiq"
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
