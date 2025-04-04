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
    "2aiapAjSMSHYgWQi2K3s3nLCat7vCm2Xac8UtqpAukUrcaK7W3rbjboZ4zWeghKNJ2gej69JBREyq89FH8AaJ4QY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGpvojkW3WAvKRGDHwnvTLSrJwdfD2ZYm66pSfToeWneH63cUAnkuweCTbbjTorhUx7xgVetUkKhvfwjpJLPfTr",
  "key1": "4tch42AyuwLcAeHvKRnDtemsmeUeYwHfTKEmZexeEyPbirJVftSgog2U5s8vCpUnPJ7995ED36N7xcaogo2rKpzU",
  "key2": "5fjN6Btp4YY6bAd5Vs3jSCWBFx2nyACBsQQS2QRKUNx2ABfABsgbLe8278iX6cKdi5VgG4HCCYprLE9SVt8CXY8m",
  "key3": "5VzSjqSezSogyJdXjEoF6ZgzixeLTwYjtsENNnrxk2Pwb4z3JyjC3GSHUKceMpkr9dJAxrAD9qgkRMfzAMDb7QuS",
  "key4": "3Z1sCJyYF8GGKYp82Zsc162t5VHNWyDxeFJXDR1X9rhqnNMFxpDDsGPQhvi8wdaDsHM1CXCcLRXdLgGtG1nz9y9m",
  "key5": "2BuKVCX17RHy92xq7qrNq3L89SUD7LBRHLbvNSAaoaZbWwyh33WcQTgfJ76Yt2k7ysn8JeBZQ5DyTP3bXRfcEr3m",
  "key6": "42QQrmrmZffoftPtYmhEneGUZbhL2G9TpbqtrPEWxRFjQncWVoZDFuHsJKSJkjTtuP7JDk7ydYtdYZ4KUC6PWDnb",
  "key7": "nDgipYV7xpwNk6tGiXGd6KLsEYqBJsMbi46ios2ttKxeTSQTJVzRoar6CTdznVDZv7ZDZ8f88CoUwLjbvvy88kf",
  "key8": "2KGeD4MKo8XCUogdNBZmnGxDmbeRfHpqgLFir2voXw4sNGXJ7r4VdGd5kmxs1YWkBsKD6rAwrfy9y6xWXZrpk7U9",
  "key9": "2SbL4U2MKfct1ohmBMx1Pwh2Z48Ry3ud9HFLySDkhtdWJdKR2cWB6jphsPR8zJiGoGTaAK8pT3pNLMzbikorUP8r",
  "key10": "2rbiFeTNmMB7EbxLtKoKJC5JedMhB6xY1BCqpnHAtDKhgqZdHYDoPuvz9AksgPTmBGZQMZRHTbd6BYU1DoHjNTj7",
  "key11": "316cJoUNwUHxYBDCNHNHKxQRqWYquuU6NuJVbrqtdXMZ1kPYmtQ16th6YmXPWZJY2R22iVrHYzhHt8Uap1kKu8eq",
  "key12": "2Y1p8Ctper9bc4iKXGyabxDK1YxmpyAM4RzzLj2sQog8kA8g48vqGr99WJpoobQg72MUTmE2BNueE91BAN4NubwY",
  "key13": "5g3yPygFLaWLm9BHHvbc2TABphsA3xrSuhXRPEnaaLjrmPZi2fFDxSuJz1Wi2HsS7gAUtifhJPCS2F2HHxUemTNT",
  "key14": "xaj5L3zgYrXFNzjVdzuighmejrDxVtqp4yY7AzEFaNn72UyeubLvhuDuX9krp3GEu1sUMRvW58JSNLBFtthz9YG",
  "key15": "Ac5Qtqi2kinb98s8K3HXx5eha3XAHpFKdgQd5Zaujf26DmzYURYUtY2G3AqufyhMZYgPoY8U4fhqcbfZCiaMEBb",
  "key16": "Wt2MGPYVkdDry1aRBQ1utfFSxgsgvxQRdvynTkCtAjMAzkL8W4w7dsG1M2tgjVacXqd2HxPcT5VaqN81CkNv4o6",
  "key17": "5Bt5zAeRuH8PDc8K6hHVsEZP3bhkK3mKbJB99MztZ3ApGzxUrHAHuDm29Xz83SovSp61s9rL4XpJVorRGu1mjKG4",
  "key18": "TdMeBG2T3HsRvtbSjBqkoyZLkdV6mDocVKcXVrYvdwRhYh391b1kw89hMQ4m3SqPC9auHgizHXNcGLXWhyun6ag",
  "key19": "2vaiNNGTdpgM5khgG5BjopmCFtxF4hHqSc1FtQiNN7iFR2SSuEHj5r9ZfstEJWWWRDPB1txqGUvoKj7KjETsu4da",
  "key20": "3QUgrzRC9Cr4aYmFXCNRkyxUrfbd7VLHT3iJVqozuueWr8k3mCakUURRGF1Fv5YLqqxknQg8hqjMvGdNQpzU1vjj",
  "key21": "59iFcBg9LKhp5Wuy9cgCsL3Sf8tXtVC8oh1nG45NvtGzS5kExzvQ14mYJYdWiGyrzNrjcnMGB9CxRTYNU1pdvf4S",
  "key22": "47HbP5B5aBEAjvDEh8G3aZfpCND21QMkfq35UP9u8Fx3YdPbH97c9G4j2i76PWMrycuu32qJerG497tjZdXA6Vh",
  "key23": "5DYe7NKoQdMSLRhF6Lj1JwfFVqZaGav62ejf31Y6tJe4P5aCafLwXcUy9sELmuKr1f38bDEJxGAkQ725Z1YNdhJf",
  "key24": "5LYsCRCpj8aPJJmHC8EP9kBPWrcbxqDEp7EPsBpxGEDkKixYddFmPoUyNQncp6AkN6A71yvu9kq4EA54eD9uni4J"
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
