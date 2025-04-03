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
    "5RdJFTETTXpW9MhscxZHGVoPE7trhLJ69HCspfa8NXR4EuiaPyzTydXBWAvzt7g73vENd9564bJDKUfkb6KqGkTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sj9wzVfAPDNi4SeTZ4Egdm1E6cK4oSZzyp2dsGAmPhp2pTjvDLMeYMGuKFoQ1sEWweSb1ZC8QyfxSWzbKRFQVJR",
  "key1": "3FVuLx8RNRXKxk9b25x4gbqkAB4T4vUXCjU7TyZbVmujbnYXsCJ1ufvoZoHPd3iTiwQhJTWnkKLiNuCLR3GmVRhk",
  "key2": "ZKepoDKMciz1BVQf718DEimWSTgeUdZPkNWDLiXp7CRpypxFHJBzm72G7vfN8seawbUva1n3iCHrbz8A3tLBuLD",
  "key3": "REtNqfhNyBQRYMEopef2jQxHa3xfUFWLE9zWo4ETw9jba1UnU5gM987NN9P57iu4hdDu8oDyNjdsqNNjcGBhVxa",
  "key4": "4AGfCqMpk2ZMtZkbSKvFmzvLdsk9nXPJGN68d4qXEXE5pZ8BXDcDDYhQskZFCA6S5a6mDvsCeajant2cPTq3R8Ya",
  "key5": "wHaNHv9SsS6yYy9mxVzqR8qbqPTZZnrfkuToqaufqSthg4rp7D4FTZ4gwnConXeTbJmCHMnPtBqyovL96GtiSuh",
  "key6": "EP1a6xV7sWhu6kQhPkbw1w1CbiySAGEBQbxq1CMH6XvrBCBdZKW6Xr5gtSvwYMP14NW75qNe72RSnJJCDxWSNTv",
  "key7": "3WMVQNwmy7iKjtVApUWEo46W9UuFp4rRJtSBCmr8eYLK3W1SaLfPMwyBuRprscCk6gK4yg2b8Zq2EjSB4bvtdoiy",
  "key8": "2DpYPzhuwgrZ2AYyGjNWQaAZfa1vWgbTsDrMob7jaFrrMHQPNJyj2zd1s4FkPwztpNHYDAqYu9UZdqTR9ndFTym8",
  "key9": "53n4nup5WiVt5tBNxEFmpWhvakEi4naSRvvVfH6muVp2mKLhnjS9XuatX48nGBedorZooZZSLpnh6WbiBWKDnHFA",
  "key10": "fc5XTDXhhrtfRiF6aeaNga28m8keQs6KquKTsg79Cj7QkdDYW7iJHpRCzj9HjhF1sKMrFBt8ujnzykGmjmj3uzM",
  "key11": "42soJP4GZPBo9fPAqehqGtNdoCqzy7tsis68CHMJ61DshJoV5pR7C9BtWSYYQJsgdeddcBjz7d6koWnA3FSzXcDy",
  "key12": "362rpmiWFHztv9FQ4hpSBqyWiz2vytR7tDf8gMW4hrHrm3KArUEc7RkvdkcFiQs1P4FhBKWWn7NAwZGx5Q6z1vQx",
  "key13": "9J5RkpNQwWMSHjKGMfAJoSaVibagQJXRJcofXxzKGisEkyUVp9t3ENxWmze3jtAwbpjT53BhzMJokzdwW24pvKD",
  "key14": "4FAczM3qa1MfP8Xhc2FSHDbqA9vR45FYMEazpA7wCwVXTkzmAgPYmyfhkDrTziHw2rLKTn87NrhXNCVbjZaeq1rb",
  "key15": "56p51E59pPqnPR4cUqdZJEDGgzJKn9Lz9fpqkrip2cbLAd1oyySqRR3VFDiPSWMTGN9nGornCgtNUmivAAamHzYq",
  "key16": "5qfGuwPRTyChrTHpHEgcPY6m6aYAL19gTV1xAQVhQYW5e7qws4psYpteak2DNBPn7Au5UPortArDqykNjdC44TfW",
  "key17": "54YYXjXAtDZ9cFVQmDfTEwvpgBiYBKqSHACfsxQk96eyqusCXzekBbn3QNK22Wsj6F9odbYCfTkKLq2uEPP1JFv2",
  "key18": "2dSk4H6qzR9i55tuQf5KPXZJG91yntR2RzMbc4vujapUxjM29zXxd7UKP1tXhAjJYxJ7jvtk2KPPu5NmJNtNjCuP",
  "key19": "4MnaYakkHYEeo3t36jZK1xwctoo1GHDh7ps42eLeCgCrX7bBSRv5VKegXMBt6KpzFTC2RXuRwMUEu1DHpmAheHPT",
  "key20": "5RPtj9bu7Vz2bznnamD7hj7a12ioC1P6PV2ixkqT29KN4TkkfKYF2CfxS7wJUuaFLYmyBDENRt31iHUuQh9mvo81",
  "key21": "4bG5k5Dy1UJHbPWTDRNfNPqcgLxBDGfhbLRxxKb9wyge6ExwtRwXifRoMqvAS2NsNjNUn3NH2iPkuD4vMeVx3id1",
  "key22": "4NzvLo3SaLfTqhTLvjnrz3sjfut82Yk2vctCe8uukM4qssBnPyZ5dgPFGGphkFMwjAcnzVwKwiLFNLx1HHivttpS",
  "key23": "4AnBZGt8e7sfE87C2WoD1Neqx7wp7TFZRifZgCWoYtWyRVUVCTgCPpnDmsugzeGLheQfjbsQNLkJqr7T2aREiTNf",
  "key24": "66kRa4LhQj5VE2Lf6h1Cpa3LkAZPchV3HxeyK7SBVugp43HgMbUBxaaedhMZJ1mqTxRb3tZsNsKbN7tpjFiW8dwW"
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
