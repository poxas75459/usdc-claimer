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
    "3c7Ta39i18S6CbaKgSefLYRAFifEEWVk9g6LmYZvrAxaFXHHrJhCvFRAweHPbySvFbm288Ff7L4bHj8X3zbTn9nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ySuf5wfHUcUrAPx1qZNJsWiP2SeDSqCsUSnJUn7DZ7hssqCmzUYGvWfG9SdHUm14tRjCJLh1SdScUNL2XBqtzHS",
  "key1": "5QnoiToe5myFjBiBCSFFMWPqSBEw3K7QCj4WUoiDd1MAnXhVQM2gda4sBnyJbEy9mDK3vd3wZzqmYXmZxjRjicyv",
  "key2": "5iX2qjs2vjfCDxZw8i7f2TpxvLj9dnLX93tMAKhC1eqvZFvv2tWZeCip7vUEYAez6Uxh7cyPPoS3TQf4W22EWmA7",
  "key3": "3CiAvEdr1Vt7BNBLsmvncEemtVc824RUWiP81UuBe9oWgVThi1hhNfziXEVAPcabmWPCRUga9mEeSSox3sRVsn5h",
  "key4": "2LWBpTK3SamT61xC8YgyaQuTGv9sCfQQKF5KezVTo6oUQZEvaDYYCczPFpy5Njprxdbq5kXhWF8XVd13RpgNTY1d",
  "key5": "3iGLYEqyhFrtGan1JhjDAVYPxJixE5VPo2cKDKrCz5XBenpYL2hTMcaypvtJVNor9FG5nacd739TVLUN1gNh3yc",
  "key6": "4rWGpFk1NhRcbnHMu3f66nUu6pdP1PaR4FUEoKF8ho5Q83MgFjrU1j4jC3mbUoQRQZs1C7hDmKYBHUnyp4nARSCW",
  "key7": "2zBWQeZXMcyHJP2nm3ajgp9G9pfBTbW76qUskvJyFVgxa3vSJhKLELpM98vrxf97Eyd2dM5fTryu64dX1PoLQTxu",
  "key8": "5PZxU1djnk3sgULUmAxtdND3nA3yZescVjSbJ1w8nHmPrv5CUEkumMwvu9o2uqZeZa8EGXcraNjoyBaNdqkUPKQY",
  "key9": "5yaSxtqtPctwFVrfQdLwBWSShuz3wPLFwJxWUUXL6KanhxWHSBALH5uVyNLPEe6NuREAAiFiQeTvYxSD2G7GasPD",
  "key10": "5rSzfxmDTbdNcuwCqAcspaNLfdQ76Zt82fkjFoWpNpMAFwcZBGL2LLAHhz1oKNwDrEAQZUeeL2yR9wDdZFvnS1L5",
  "key11": "3PurctLQQKTHugisX6KX1WGJejCJTyL8h9NbQ6hA1kuBTwnRJmXLEgG5mGPQboXQEpML48ninZ9CA2cYrzs63owT",
  "key12": "AgqvPXRWzNwtugimHd1JQ1bFAqB4igwx2Jo6weqx2AkdArMhpFAZ3hp68h5QoGTLiAzi8UQEcnJhfnryv8tV3V3",
  "key13": "5EwnkY8udNMo8QUUrMAjDV1kkfK1BmbaknhwNXUnBTjqCjpmQUyzFpDANvyUdk1jM6iNw1S75szTnhhWPjZEHD61",
  "key14": "2Vx2uxMqQznn9HX7k2KSjGUTtoWpY1BG8zNHdUMwJPCfCeWWXFrzTFWeCUidV5ganQ4ZquX63cFW8eJuEXstTdmn",
  "key15": "5aQhxDojfwofh5yQ7YLwRHWomuVQvy7gUaSw5XLm9Bhsm1spPjzJWp8iet6PjeHHYA66RLu1u6dtoXjbctZoBr6G",
  "key16": "4BemqU9FJrTD1iymMvZimZZcSfAFvL5XBbHUcBkx3K7QEmkLhKkcB7jDA387jKFEXBUeRGbX6ybqVppdgdF3REui",
  "key17": "nmPQRwoC4oryJec3VJt9ThQtUCiDWhVQYZcy3FkNhAcTMbtpFXuQJxf1qpXNqS1m5Kx7w339FizQogdf5gvTz5U",
  "key18": "EYi6FxUJja8TjpFPGApKak7sFfhpVQqcQAfXqh4i6tuRJcFs7BgFF8ug767DdGGiJPtkTi4p3Xypj2h4r8avoMW",
  "key19": "4ypoqEQfFfCEYq9bane5kWaAp6yvDPErSHJxrLHBGWnB2UToWtfmUsX8w3XGj2Q8th24ZF9tjUpfVaFTSi4tDAPx",
  "key20": "5nVrHBfHaD3z4wBSQE8gjzUoRW37BinwFzpUenC3LeKn318YVWwMaSWsh5e7Vb9gAAu96V7MN6wZy54RKBr9Ctb4",
  "key21": "3XjFU9RMoWWApT6tS1inBEtvbnHzRXsgR2tGnoXFzCqRM8Xy3hu2jBxcjM4b9vLbRZw2HKB8QapE317AQ3uedpfk",
  "key22": "4gxnH4FY5vavzEMauwddqRgPUgomLimdNgEBs4UWpTFAHnV1K2CXvZ6XDQjTd39WqgeJQdVehaTCQhsRtpGuDwj2",
  "key23": "2poQjF3xLYcNVrAUkbPtiCSFuxxshju4TCYwRLvpHZatVBH5S91GujEaTSiZH21BBgmZSmPh2JbRsAegjhT7uL9v",
  "key24": "5um4wUbXwJ6rxaqcyq32P7YzcqG1376XkYPanpqH1wJiWqoSLmrBDWTChb1M3ZM8AmubyE6iiEMjWfGZjZrZJoUZ",
  "key25": "5wwE7mR9mxabQHfc2kLTgYUPbmqfyDzKw8kkfmDeZWxAtdVTqRe6dJpEUhy7hVr8eS76LYYt4trvrdAjnPU2JZ2e",
  "key26": "4XEPfpLTFpgmFt6tN5QqsToJMc5CndXgx1xmCE1BRA7bCN1fkpnn2h6gdKgiBvJKQdipLWNhvVaSuvGBHEFkF3NN",
  "key27": "3gVi4paVRKgKWPKkCPhrAUNJ2kYVAczj7NgSPVyaWq8dZczs7K5pWRCZ2DPJL9Nn5k9CPdiRPVZ3z23pwaFiVQHh",
  "key28": "2s1Pshm21Hpr1Q8H9rHjupSNqDiWRG8YZJysZaXfejFj8oBD3G2LchPG8Poz5sLjcsNv2beLWQUqgn13u9w7Poaa",
  "key29": "W2G3CdZjGVzhtKJG1uB6zJanEnBv7rREEjcg6c6JSV2N4Cu8ge13DSuyhHAowj22YxEEFkU3Zk7BAVreDL7d5M3",
  "key30": "3JkMtL4Gy5AoyEBmXnKtD7W6pK1nZGfw2P4BNrCYYzZK6McjHaD1nHDTCpKgzcA4gY638DfgZeP6gq3XKzRfE4eq",
  "key31": "4yYMBmX4qNjYoP7zVL9acYoedSWudAmmbVBtWYaCu7rPpBYdc1GrJ1GSxeJJ9SYGr2ag9b224ka8WfgsnZdcntXN",
  "key32": "31aXy9HUR8GRTXasrezZmP2S5SMrEv7YYuDDZ1xD52jhqn8ZwAcfUkghX1VaWHnbTtPa83yLvWoJ1UmWJjiAKdhM",
  "key33": "27dCTLJvNqLnnjaRDeAHr6sG483iw3P2GJEZaGvDpfo3PURG4gzn4ycgV2z92qeF3oYXjrNYXvH7kWHDbotxJA7G",
  "key34": "482ptwsD7VagULksLfgov8tuYcVwunXrfC5YcLBocJePkac4C6aoxv89rDbjC6yuo3NrLn56qj2EutxHefPuyzpw",
  "key35": "rJ4chyHrGRGB6Ggb88AsUX5vcQrJqimsbY91xGiXRdqHH93vPv1GBwpxcpkoKbbGbtbCLeVtYwxtiELSGJJmfkB",
  "key36": "5UCSZtn25CHkNeM1zJb1vq1ofscgGicbp6Fcv1KgLAbSAigid3D4pNsWqApJJqS3G4fi9FnyLQxpkZMTx2riMnm3",
  "key37": "2WpBxB8GxG6e4KcaNCYShKg6HFDnmQxFgrkk4Fb59GXCpK7DBgZY1mjLvg3wHbnc1vudfRsYLsSuyZ2Nje5UddY",
  "key38": "2yr1VM555DBcdJQWkrzwrRSiXF6mfX2ip8VCBx8miHK5f7XM3VtZFF8GiPoYxghjNZhZVGcUD4bvtKdpYqikh34r",
  "key39": "5od3eFW7qtyyKE1NopDzHL8eSZiqohJWHJkbjyHvNfhd5FLVvZAbyN9XWuUyMZZxpTJChiRrJVEQJKrg43G5ZbYc",
  "key40": "3fJBFpLdst8pQCe2vgH9Q7xeNLqEmzVxNto9C9TMdZ3yNNHJiwixoV5EksMUML9rbwb3wtU4vBFwBzkgCoo1K2X8",
  "key41": "65NhbkY4efU4RJMbZbf18FbcuAedZCRobApSqmqP9xF3qKgdZcs7oswnKmVQ9bZZtnCQNUZxFMaS6B5gtsTsHZa7"
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
