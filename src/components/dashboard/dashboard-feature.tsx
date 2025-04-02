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
    "BrjAbVughWtKq38iQowSiFPmvJwMwTBwYxDzLMd92XD9rELvF8d3jqi68qGVQah3QsmgdWGrfJMoTVcg8CJ3mtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4upzeUypUpdS4ed9zNh983Av12JmaCAMMqwXaeUU6t4kHrGEbTpdcGE7nZzg96r6zEtuC8ghGPcZJBwSKnxkws",
  "key1": "3xsEQ8QPXQwz3XaABRPHcaNqyLyKhNb6RJkvLPfhJ51MXnKKfVohDr9cTwisX5AgiAswk8zQodXpCnjY6XAseewQ",
  "key2": "bZKtXmPyA35gQmS3tdRDt2Jbz8s9SwGbq1REHWW8Uu1oEicavYbz9HdaaX7Kswh94aeDpmhgg1MbUaRbGsq8gHz",
  "key3": "2LQMvSypz12X14cpGT4nMFJJbmDPuKoKd1XeuTxk1PzZ8LsR9eUpoAWBQwBLPx8MCgGqCXP2nSHRVQEBsSFWcRBo",
  "key4": "3j2CQexkYMC2ukUZFYLxyqxjhpJhHaEbCiq3ucUbYmyHWEXCDQUHf6hx379G4GpRBG4Q5hEoybAbuPPqefoPBr6Q",
  "key5": "2vw27ve2Mqhx8qgYGBTWrB3cgwPKJKc3LXLGAVX8KuTY1Tq6vxwtUMvG9MYBA4YMPcEm957zBbfsDcHVxSp8Hv2p",
  "key6": "5YcAd7RBCRzzvWTsehesUUuUekvwbk6Ng8d5QyujYmMWeJTVhTX2FJDnSXSNdiA559v1qdf6xKp69EKejkhUDkZS",
  "key7": "2ujQMkUccJJE5tgdLRKAEprY8YPWvuiXqnZT6VdcfttFDTJcJe1xaC51frAhpmxecjfa6FSndzGTy8h3q42nEXuM",
  "key8": "5rP7JWqkqTYd1J9rhqu93nzAyXtmQ4waMLQbeK9jZmwfVH931J5uUcSQg6JBgrEJJUryVvr8fJaTyagyHVefq15u",
  "key9": "62nqTivC5oXAHLJVgaMSMuMZyd1UxFbUSMm1eSULn7cWtpY6V2KGe8MR8NXUzwNuBzhdaxYkrGTx7fFvHddq8xs2",
  "key10": "4kzHvauwunbhq7JiL35X3EDgv5W4HwWGferLZ4TGANSmp1WWnwDwFydG9prFTcSZY1MXR4TSHqdEG3yz8BsgUuD9",
  "key11": "FGDEDZYA55j3UzvJcCF3JdPSo7Sq3gHGs3oHJ2DSJQocTDH1wMb32DETdkM5j4eV6kzFFi44x7U3Z1GhvuebjDi",
  "key12": "4gE4dL3hCaNpxkuyfKtab66N2o13eiJ61umbVdNuLM1EKxkCXY9Nu4C1KS4RauFmkbe35DAce4hfzUUvycuJXBGB",
  "key13": "8bTP8dxVMfuouToZB6v6eLWsuq6HWayJKqyZ4fTtkXWEZu3sbobMLj2u9G2NP8gh8x6BTAmD4TSg8DwJzFMWh67",
  "key14": "597cFCkiTpYYaZfw76PnhwH4S8u1J3PUwxDozARMbejb4PkGZAiRTozeSztHQNcFNRXi6LkzLoiufzFWrz52TJtK",
  "key15": "GHkEwKxv94HiFxXECNbjg36zVZzdFNKbi6PmswcJyVbTuLhiPEioPnCBxZnyoiYFHKsq51AkFMtVrZWdeN544qH",
  "key16": "2jLpJWtUhNW3dYEYjopruAuy77ryTf2FAF2v7hE5gHkd3q3KWoCoK7hcGPyits7fuGEQjbxDYvrZqAU7a2gUeZsa",
  "key17": "4UyzBk7zkL927A88fEFqXPBgwetpD6BYnN7FEwM9XwDFji3BMwcATJUHYVZpcgKpcxNcfs1YvDpSqVjABiWaCP2E",
  "key18": "LjswRt6dMKNJjR8sjMcgGALnFArRuLyVVvVhsr6Wu1WfpFBjF2n1ESS7ttUsfCuyh1qWCgbq38CUiaYBQB7Ahed",
  "key19": "4CPHzUevUdKFt9vmWmkXxJjZQUvYpo29HvFJvccYXiqhPcDmxkW9vHw1csoTaHX6z7ouyUX6RKnwyJVCZvEdmYaA",
  "key20": "2vti9Ypu71DVRDj7pRdEU1LfN2AodRJ8KemAP77buCWU8ZnXDaWUKM1ttFmba7qTvxicecR7u8nMPcZC5eiWvFPn",
  "key21": "47mjxxBCsibHUov4oB1yKr9jcyDtkNneHzNMGY5UZpJrCaqoFc4ZhL8y8UwgA5GJHaFTv3NE7MXthkeQdsKyCvvp",
  "key22": "292BCRbpNVPRbkxooqUiBEV5SrndHKJaWRxkDr7BZB4iqs2NHeThkATqCvMYUqJ78qkSuYCFX4K3T7LAGQUx3qDy",
  "key23": "4kQC9dUVKUerbKj2Jgv1Wjk9YgtLrUPT194akPLCGDn4yf3he4afb2f136P7LWqMQfcdV96fu8MJthcMG5DSCb2F",
  "key24": "3ni8AB54TRkof7fv1hha8konbmwCFwvSpuqskesKhFifzjJJiWbgMhhZWt9Lk3NZATGeLZAKMCoXJ7xppMEEaUC",
  "key25": "5Q112UAegSLfyQTids2KCE96nstFzwkvhsgAC6So4kgYDG8Zd6UAY53qAdPgfktKL8UJc8w6vEYX5dQsL76LfXQD"
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
