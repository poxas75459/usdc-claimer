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
    "2a2nkEdB6t5PTaPKx5ut1po33RWnbiMWWbTTaQ155Cj5nRKYtDMNR6MK9vSmkpfmU1Hx36NY8zoD8DXq8rFYASLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ww8eRPKMjbQMGEyLsr8gMYFAqvekxCZbw2wixUGdqekBbD3LDyQtyXuSwoFJqvP4CuJvp6dUmEANSJzfBV6YCHy",
  "key1": "3hmkH5rExrJUA2kxs2XksmJMXUxYbKsY8M5eGK83C8zKeGoWu6ZYt1MygMQf92UdfwMPtjXdfSnXBpcUfiRBF76Y",
  "key2": "4MfoihRdDi4QetGeXutS1FBqqM7t34mjdkkwQkWUf3yGEBiZkPqvPTLn4FGtaquWyeL9HjBuQm9T1mXQ8AeSokCD",
  "key3": "1qpmCLMuGakmMa9etqJPJ58EnVNJ3qCPn1dg2uTix8cEkJuEwgkFUFXWujF2YrrvHbbe7wwTJr3EDAywR3SZmtA",
  "key4": "2pKXsUKaLy5pEehdJDx13Ne7GCXJ1qfWwPxscZw7hbe6k6zAaRAmrDSp7DabZ4xhzDuirSnG3ZmPnzQSQ8R8A5wj",
  "key5": "44xSQSqEUnsvbkkMpnzsGkHufXi2o1r5tasixxVFqHqVCR2V9b6qxKJeqcr4aZLYUSKDov23Cp4XHj7TA5FBUrPj",
  "key6": "4esMbMTZv397wCxdtWkCYz2gkvUdouhsJDxGmzSTBW3PGBA7Q33JN4XufDfmdMTPa2ciRAevkD66oipTg2FENNVd",
  "key7": "AU2SoaMdeeHGvTJdo5gJTeHZhBcZXEeKWWY5UPBydWwEm9kEbH5vSfmqufWSs5B4jheJQm8CTVSrxuhcasf29Pu",
  "key8": "3HpreKqG1jA4n86BvnfFdZECpmFgtHHZ1mY23kkAcHUC3ZoMaTaeJ1RcjUBewFF8kt4UA6ZoJjEg5ErZrs6U29Bs",
  "key9": "FiCkyvihue3bHK7qFb7xAPv8gRSswLCixHp78bWmffFqWNn8Jxww6JauDY9oGpMZkCr4YupHe4kAYrL8US4fv5L",
  "key10": "3qtvXJqmDDrj55xyKDgMNA9pta2fKtYCsZNwTQteCxhhKdGJVfrFR8odxxvHmj6vRKvQeE5Tc71TvQs7PUZrnxap",
  "key11": "3XPxmLPPhouMWReaVZhPJyA5WCXmsy1xoFRiipHcR5ibgEo9USGCzMy6EUmUdgEpxtmwhhGDQUHWFAaWaniPeAZ7",
  "key12": "45NMty7XmC98JeBtNXvBw1Nr4hDm9ETdVQkByVRiw7RABwKJezjh5nPDx3B9WjmAySfzQrCdQk6t1ynLmyWZpGqQ",
  "key13": "2cfzKcPcigRRsNsx65L96VMHpT9Z9izUJVRKHcpDXW2Gibf6e4REmzbZD7SDvYn9pNhasPDUxprHgXDWR5FXvSke",
  "key14": "3jbEomQ3KmKSKw3NsKSpjR72XVviFGiSmBxar6S5MHq4zdFrHxyKiu6FhKBfRdvv2dAXVmqzBiPcPMCLPrfAdXpk",
  "key15": "usxiHZLQfxkX99DBa8QHcLkXAjGp3QuBHX2Kj1VTYAQ1rW2XkFtMiY3oKG6andngSNq9UtykWHnSQvZDAXtu4La",
  "key16": "zpSJWLsVxRTfDPbpVBfzicqQGZVehx3AKht4wP1bMm1D1FzULJ8R2LQUVa1E1y6PM8U2tPZXrd76HyC4PGG3gVR",
  "key17": "24rukDmqWZZpeZmMJehQNxD276xsM14h6tPbH228w18cqizUtA2RRr6ciccT8STe5weDwb7A9v7BbnDAHw5qA7sT",
  "key18": "47Je9Ziqpb1auaWaPw4aEKPZRRM9frxfNnpnE5h1kZ6hjMXiB4KYFPeXioBhUXc27tKfyXBMea8RMF7L5hhnpZtF",
  "key19": "31Bp3aGG3TDsWWtGySHk9bZ9JCRgYDGginrJHRjjpNHEGeyd2Ek1r63QrwhAMeQXW4QXA7mrfvNf9SyR1VkjzXk5",
  "key20": "49ix97LcAQkwgwJt1aBNYkcpAVUCJ22xM6JeGydCScGS2RSKC8hmUaFJSMs3z7b7zykhXArKnySWqAgVdH913qgD",
  "key21": "SUVN5wm5ttYjGU2FxH6wp4KdpB5xyfva4X7tPEGQm4SX9zpkrfthYoJeqcnXzboPPiei14uHmwHMR3PZx7StTq5",
  "key22": "56uGCwnnrvrSeNv7q5yZen53tt1aWi2FhPXMf2axFJdnyQWqQg9hC9GLno4G9PzLDKHYh4GongpKcJyNBqQaC5ud",
  "key23": "249xKpHRFm2Maga7BYwp8P5U6cZPtLr33PLE3asFTFftXgiQGGz6r6ZLG125KRXshTWJWzbMs7LN1u6YLxTWEy9r",
  "key24": "5D5piHutV4jeuJbJ9iJXFXRVqzHjN4nTbcWaJQSJLpR9YRXhcouUBm2yienNyEnTXrCDQ7RSVbmCXBJDzZFCYofB",
  "key25": "5jYPgCEHE9k4jTmesvoPeSrTpVC9AQ7itK9V3kemgnTsMDdgoWtwpYpJwZNmZyLb8QnBXtrVzuoikMmaKVep2ymq",
  "key26": "2m1gR9Rh4q78x6Fbf1jjFRqgKWTWBrzkrbPCA9B7h7TefAKafhRNQ1EqJGEqGuHaURewAseknht7aqpFEFxvtzCG",
  "key27": "52icg5d3nYkN3Vf2pBLiC2b4L5uLpsgXHfuPFQiVs2KigWKPG4nCRgQoosVxFoAmLXvoxFuxwiSY4Hz6Atyk1p96",
  "key28": "2DjetP6reiCAmyhsTP1sjzjb7cZuvaUG2mUGz4iFcoUhxqP37Ze7NX2FpYYSakVDQPESD8sa3pz2ZLzusdyxULTr",
  "key29": "458ZejGmT3zDmQdyccxubjYrVksuYAwYHJgTRGAXdP49VugnkEQTaMyAd1s47CNWcNPS3DGS6fsMqUmQsmULiAem",
  "key30": "2hDdUWJgX1YKFePJ6r2h9UBNHbJqLH7a54frwtwi9YdG1EKF4sYB4R9E3LY4FDy3yihTyE8hT6yUUG1hszfK5Y5d",
  "key31": "2zS3BYHwPeBGMfHHzsDrmQFaM6r2r9ykvaQhAoqB6Yu9m9Hb1jLkif3RYf4uPYY2GvLpnFaHnTuub6nNDzf6q2gV",
  "key32": "3Gs8jc7GhZ1LAeJHaiHStEYb4aNLcSWnkmvoioBf4JAM9MwzU3G6gKsNVxNWSpANL7N2n67LDQyhQU3vzckaM51J"
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
