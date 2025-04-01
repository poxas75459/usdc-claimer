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
    "5kRV8LUFLJFByEsLwmNy2Kamh1bFZB5TxgkPza9zRS8HbFz89HXxUY3jUMQoVpWN1XAVwNpmBxpSjXZfo2YzPT1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jFu1Sq3fZT3WFoWAEEF8vyYzjCJm7YEk13BdnHXQEemQ77KpbwoH7YkEDH9w8Z5Be3xFmhJfCySFbUBtakGayQ9",
  "key1": "CsXEWWsvGuUjmUJnZYK2kGey4Ag6bPH9CD8NxENhMyVyaXZNip7nEPZhhGDotsmkfHjjEHTbcXbm2fZQJ19TYdG",
  "key2": "8TtjKHoQM5FKDfg7j7zLqbCFf5nPzDzCsdUUXw8NTqxKx52Fwy1eKj4sDk3g7b274YHwmGHZBJQXRMR2osVZXub",
  "key3": "5NubVmMvfn9ENtfyUkjbhVN4qBxZQtMY3jhrHQpDvZjNFjkz4ced2Xs2EnMbF9EqkzmzRAWxfEcLuwvfrXxntVEn",
  "key4": "2BAoQD4jMwqpMU3mF8oY7Uh1zMGkrqAKDyMxm8AwXUZeGtNn19yLev6pWUrz9yH5xPSH3eHLHSu7N6r2vep3pMdd",
  "key5": "EnRnPewuEi6tdxs2erLLbJ5dQPpYzoNsm8MwBc3oBRP67XKxqNUpysAHGjLRZ26nZ1hioeY6mARazA8A8wEtDH2",
  "key6": "KXTEJ2DbGKBSG5mZgyvecpyr6gT3brUUyc5eXnFMjWyCS7TPhZVAiyjbGe49KxpEpXxVtwk1fkrK8QQuq9t4ZNn",
  "key7": "5bpBuBF6Q7NfcuQvq6CBXKtLQMpens2XBJ4ygvtRC3MLeHxmhiKM7489Hby8QMCtv7btpmYEggH6mPkLpMCEaGoV",
  "key8": "5b2hQwxwWeLrJXzpQjXeVVhTGSSTy8yDSpRwGHiTtRW3DUHW2pusUYV2vBKFM5UnkskL3nSwBPV7FyzsAR4C2qN6",
  "key9": "3xTP8ANn92p69hFxmqHWRyrB3diy4dPjUS7YqrDqjN5nJH6MjXjLY2QoUaEWSwejAELyvwv2vGefSnjNYkUEeXff",
  "key10": "hrBcHFRQTdxSifQKNMSdigandHwyUyP63AvfRSFh3i8ih923asNxooWg4ookhTc9AC63JZ5Grw1fFdxubfwFWYN",
  "key11": "4ngCx7MziMSZy45QftaZRMb4VgyH3vVPNSJVQRNDG33ST4kbe3Mx12H5QNy23LyNmRJW6F4GtkgoBm7W3iqhqZ1b",
  "key12": "2P2E8JS34nS8wBWtALYJR5EoXhD7e7Nr1PX7CvZzW2zjqiTHAFAL2Ei2bFJm9CawNiAoaP8Ma6qXaq7syWH1iRE",
  "key13": "2qGkKK4zgLzxMekA35etZvHRurM7LQ787eu1h1dsro8aECPGB7gpPER8i9LY3kfcVJaKDkqYVRcnQXjR7xQemq5",
  "key14": "2z4SYpwyMQbmeeXTsSq9V9jTMxtDGHRMFvkiVoDBDSh6p7xSrcqC8Af9B6PHcLDakzpy8A7SEjuDWtdfkPR8Rkqg",
  "key15": "24sv4GHsdKCrZxARR3yHs3UtEwptj98MiLJdWzkNwYi79Z42yzSNLDBc9mPHMQD3kk9DxHcjuVHwsbbyGTwfe1cY",
  "key16": "3qcc3y9vAUM8wiv4QivVk3FrqkHsb8LA3p54tuk7G9bb5DjUf1dwwfpoW7f7x2SYo22BHkypLQbNDdy2EmGhpm6n",
  "key17": "39MzsH3JfEuKhF2RFFVcYDAhHY3y1vnA2h3NHzdRc1E6R4m1XMrFcvypHSQHJKMjSxHQgyASNn4GZsp7DhagxHA3",
  "key18": "3hxcd2scAX7T1MSwheJenMe4x8uDApoxAfJgxT9omFCoTCek7RnqjKnBE9JCMifwHek4sPy1exTLH1uZeqG74bYb",
  "key19": "3vqGymLNQ4DkBbZThde6vBrGvMmyjpYnjfQHRpdJMDe6Yshwb5S5Ta3xcvMMYLaJxGSs3cYTiv68ctRJtfH6Dsff",
  "key20": "63bRfV63DQYmbEjmqww8iGqN6MPQraz3zdfNdRVHReANcawKpPFRhWHJo1VQvT3uDt1gvYS2Sp3eQBGT6aNYm2Ze",
  "key21": "3zgj544UvaEM4PUEEg7xFb17KcHFtuJbCAHNe3rDs1dst5oy5EKH7uJDAGiX3nVQEaYoZRbZGycpftkvMyCEFazA",
  "key22": "5XHVmjB2GmQkyWrUtYMtTobbveGZJ2ohy1YpEQeJhhxedMPw3krUi8soZKdRVzdPR6NVPEgHbF65gdr99vCB8cET",
  "key23": "63XzrvZBz3TBqa6ES7seqHcNV78fM55L7VEzjo1NbBgHsCZp8YL2kXuzn11RXXuQZwwuPATUhPQAXY1ap7437gaf",
  "key24": "Ak1ehEynEdsGwudppZ8ZsVcunikJn1rKhtLUzgkmeNkmaAreh1bF6jNxas6NoxjmnDPXUjsHnvFrH1rRxuoJGFR",
  "key25": "3CQ4TbKdJ2LuAGmfGXnDkGNbjdNhi9sQzwNKbvYcroF3E8ihik5UzeBEoP2gr9sSS55aL6746xEbJpkefrEYoUSC",
  "key26": "62Svb6Fudr4fNVGBgMGgsdit518p5xtt9WMjUueG7AGAXHB7jurBrpjdQfR2yyfgqk89sYyoyrN2gAhHy7V4u5K4",
  "key27": "4S6eDs38RQ6FrbRMK5m3Yb38tHZYTCo5YXbPqqT2k8kVvXktKCYJc8Gp29QgtMWhGLM9apKHWgtvvCj7pRub1ee7",
  "key28": "3FsyoHa3g6JJ2w33G1zANnJ5t5kffpnb7qes75pN7Xrpbf5jTGMAKDZApRLsyXr8T2JB21bwY1nNXyJyhuKtyr1H",
  "key29": "587UWvqVbz92HyLyYq1oaZT5CqyYnXd5SYJ8RsrXCdBRt1qkr9FpxFwFDyLJAiisW1oRUWgFoUWM13geh4WkmFGN",
  "key30": "5xELBEgMHmtxA3EHfWGqip9Fv8VmejChwP4jH1XftzWFs1AE1vfhAH2t2DPgEXNVjkRP53grYzRWtk8xnFLEuEgr",
  "key31": "3PxUh5Hwq6STubaQbdLFZwAV3MqDZ2e7amgAoPvRxKUMc6Qyt1BEwRVpVk8e6bd6KQYLBV7v4gkPnVMXiiHztmrD",
  "key32": "4yapAMF6FFhhK1ij8ojf3wi44m8FtSiapNtSwH9S1BxCoD2CZFwmaYMntkZCxCQkow82keWH2vHinePVmd2H9FEy",
  "key33": "3UZDTgaLzzvEuABVyHjUyUuAtwCnEfsM3HrKmaPsQrt3XeuuzHCGtT8yAkhs6B5vgcQwxhGomzC2G2xNQ9douwyM",
  "key34": "3vxP9DhMRPjHi8o64ZNQ85shqJEtqi585ZGWbHfLKyx6DYiWZMCU9EYmAUjA362zwsCTKBa5yzpSZGUnTiTs9XQx",
  "key35": "5y3RyVNAS7aQsGVXXio45fpdDqgJ3AYaw4VkFSVmHXaZZfrr6fvnsd267CY5yYHnpdx2vrge1VkGYYzPe7at41wE",
  "key36": "2d89PFHonVVg2dotJqB9QruJQukd775sXGfsCZtCmX82jyyBbMEBSs8a8MPNSDTwxBXNMtBpaJWXH81XXcv1zrDC",
  "key37": "2WZmp2rx9qBo1AyobN48B5dZgeyVAkLSKGs921TrmxdY6Z3uzWxPmYqt866UDf33C4ArRUDRUVc5xVgWgnkXtdw6",
  "key38": "38kMJm7TrtmSnH6MdxjEYzCFvpe5Avf5j4VT42vK8qLiiYcXowhFfunrZHkeEBxFmrV9sNNC6cLrBvMtVbHxhixJ"
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
