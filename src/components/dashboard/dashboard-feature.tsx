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
    "4K6XUEB8zHr73ZdDwSirX3ZWo2yKrymskeED9q2ozit8vcn5yJjZVowdrx3xqyXP2gyrAbJBLmfyavN3Ld2SQpwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iF6WFERfZ6DtX21Lz99obSiPCve3GBmdiKAo7ymbU5cB8MFLHiuvnkLptqCrGMsxDbC5286moPdw8C5qNTdktRC",
  "key1": "ULu1SiJpU9q8ExCoAiKohZKQENK7dvUskqF1wBxKwhBFGnDxKkbqG8BxoXXpp2N6Wx2TU4oukLT93U8291B1v5n",
  "key2": "hP21ioQz4UvXGai6LNZQQvNxR6iAo4bnLdz2qAm4Ar7D2ANamZrDSYNmaHQ52ktEcmDmqmL7ZbpuPY3SUozBTN9",
  "key3": "2dkvjJR11E7hQRrvjGh5BJDuW6VjpKqposj63BMRUh8LVZpgFh8VpiryHsu7twY6dtspPVympAGB4wac3UEYARnj",
  "key4": "413YFRV24XvTy8mFKbgGjMNtibtUbzhzYqzsSXzcSiZemAaKMEWrTHLw4cDwLr6Xn4ShpnkH61ehrVaFYxLSm6SD",
  "key5": "4ULWAb6PwpaiWi5Hh1MQ1dVYQ4WEDEyBd7n1F4FB53wdGz8UfST13ks97AXn1Hnh9V2D9fsVCjaqRxDwDgwAN9CP",
  "key6": "2yropeg95YtDxLaicxRAd3bpQXXyjoCD8A96EAdEEUiCwGDFwCfKvrYMT4zuCKApLwEKibsZfBtYG4HRLVX3TWzV",
  "key7": "2rGEMVLrhDGxHcTVQJKM62Vcr18VcnnsKGm5L7B7vxqGL97EKX45EtbvhD7Fefq1QocFtHFMnn5zLm3fJN77hZH7",
  "key8": "KhUCBBDuMfmFvpJiMzHykNbH5ZUAAfyLcdnYu7XZPH6wVA6us3xhEYmCKYWqddMwMbiLxFYgX7wFUD3CzETgJ4A",
  "key9": "3nyuiZr9FpYKUAjjmgzgye8eVJUsvYcgAT5s1H3TA8gLs94FbikUvxJ2Utahr3UYqoz1FEWov9FnRcLoDMdRdQBb",
  "key10": "2C6T25FVuFhMs4MDKrrzizyvqC2kKysHeJhh6s6tq46YhfM9Agsa5FVSMdBpDrUVQcJ4aoRFf6wkoWnbniLZByF",
  "key11": "4BXQi5Qtog9ubVaLK3CNhdX6HnACFTocM4a1yGe5qA2x7g5Dh7xQDXzTvfn5XqeKtPHigPmEygXC9GLKnPGNk3pC",
  "key12": "4sQZdRs6P8J9Rvn7BC2yacbfYaTjsSfJUchK4Svtj97JryxiWapHs1qLdhYz68cSe4ryhH1JYVPke2c4Sfxu39db",
  "key13": "3BhZumBKhUBCBiXGbL7g5f8LrhPLSLMWu1FbbYbrBXHi5RLFTZLr4kXyj3otb9Tmg5A6mFNDTCexsrQNZTk7Yhnu",
  "key14": "2za7mr32yvYPNYndzuUJuoNouiNwNjzxF6weHRLpzsLsEtjZwCCRXNY8P6fLMKcj6W2HJka3RkBmSU8whhH13pJT",
  "key15": "2xaz44ZuUn76JHnyGb5X2H8PeLJ9PYmefPCqKjhS2Enyj9KVo3r4oXRx1WD7HUj1F9t5R2DgFCnoLaXh4pXCRrZF",
  "key16": "4txofmrMqb5r7HRYMTthArWU1YT5555VDSsf5JdWjQC2HL1ckbeUnVxp28ZxuUtMKBCzdSV4iBB6X6PCwbrwnVyG",
  "key17": "2ZEEMBZN1VuENFegFxXxLzYK3gm9xWxLmN7mf4skHBmNPWN66vcKBNxjrPdAX8LsbKPTyTiRfpA9GTvfP2gVKzgP",
  "key18": "5o6vNggjnEywEoNu8qcYzXcRrCKhVCVePNQGLrE1UedzqWQqVdz52U5rLtwq7yvVZW13JRYVMeQpw1qj9LYX6VBo",
  "key19": "65cxG9zesMowrBineaCxeXK2jhezye2cv3Se9d9rEmWKXMkjKt7kdi21B24nMzi5Sog6CXnwgdz1FS62Fb1iN3Lg",
  "key20": "3DsUTmqmHnedzyFYzEruHC17t3hFVCRcS7N7et4Hu1GytU4VyvhJZCPp3QBskHYJhXM1iQ52YYVhUXidvLG9oxCV",
  "key21": "63a7MexJkHzsMobz51voRQLTUxnaayzkQoP5oYfSg728QdyvLpxLFNviZKxxKwmb7vKiXu4fuYX9UApL9gc3zTyL",
  "key22": "2HfwcoPXy8zRrzwX7RFrieaYRiq1pHP7V4JuV8dbUZ8PbsjmoMLHqqTJbcSXMLn5s4xh6L1UfNjfDEvtwPrTRcLX",
  "key23": "2uiepZLF5fjapaxhVgvvKhSJhFbcaU9YuGDwx6jDaejAMKvrw4v7JwcSWDTb3GjtX1MZXPfgNhw31pdB4G3YSwK7",
  "key24": "34X5GPuyD8ReJWKcev641L8Pww3iTMhneAhhWXGkY6jFMZv8gvbCtgP5b4C9SWjjvXDu3UWfzBpZskgVDbdSagrd",
  "key25": "ZZS3uv525XD719FHPLdDiez1EtkAvyRkSR7eY93UCruQ6ERmY39qaAokXbMFJzzQSXbcN6eipZ4R9gU2C6YBPrK",
  "key26": "385JT5aVkxcm49TvBrvVG3nx8SzTihMQmRuFEbmD62rMP8jfbZbW3q37jWCxVecGus16FDUBJiQ4WeYeXe7bSQ68",
  "key27": "4FQXcYp3qr1CxYsw4itgB7mfKgxu9Q32cKSGuE5WPVHkZtAqnNPQEnopbHoutsSrqAFayiFsZAPWdrVojLcCMexK",
  "key28": "4ugKh8aEZZsjoTB5dLYs1oh7Q9jFJDTaMEAh7QMWst9GYqHzrc1GR3z2q1pwNdPpoFXtnWv2jkxXu6wNubYyC59x",
  "key29": "6KLptk1K5ms3KWjXeSW5ye2Bx67gXT6fV3wxwZQFNXbjcvpSfA2GHnPVZSYLvzbjo4oL5CWGi64zjta72iGGmrz",
  "key30": "5UT6E56syKmwHr4F1DwXj8qcwyaLMFEeCxmU1M2upxCXWjNjggpd7Rum81sNBKtESTNEa52y41wvh4WrbUAsVJ3V",
  "key31": "XJvmLNQqeJUVyPoteL59jbwceuXn7eB95c6yzfM4VSCoeYVLmqC6GGfexePJpQYA7D3o3L4X1THCviDSN1CzoE9"
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
