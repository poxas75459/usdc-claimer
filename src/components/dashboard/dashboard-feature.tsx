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
    "4s29bXraCWL41rjXsSQNbcFsuxHMCvdPMyQkqkFKg917yRsgjjWNT29CcismHyyUdWgHj75XJxhcZHHnoboUEn2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49q7haG4yuiZfWehBm4iTdZ4WsENeY33Wh4Yif2xV4PD5WF9HSdAToEbPZFvUxqoeXMgpugrFKUnvkWuj7tNqJie",
  "key1": "5MiXBdXG1GtDQ1SoAmeavjhUULD6auzzyWyw87b75e9NehczF4J4pYKQeAqfDHvQAPPz95Fr1g1NPd9sUxTCy6Fm",
  "key2": "58fhEHzR592aUcUs27v79gbV5cejdvqca8s8tEnaQ9xSV4EaMRNHHGEBDFcTH6abwcF8C3yMN28eDKEEdgJkfABq",
  "key3": "3fbNr8n93AspDQcXmUoxyuDfmZ7dJRPdH1Fna6bTbJRpoCWyYohxHgBr5dfMU3CqysCd5xmj8B3Z8Gbrutjq5oDJ",
  "key4": "4ZKBejmkgoAi6oD75hDfQi2dxHWWhPFxihgBFkFTG8UwUkxcbXyEnV7noDjoqLyYVvaFZrhQuFoHCr4hKkirVgvo",
  "key5": "3vgopM3GCGBCCwPTdxxDMWUKidMLmanpR5z4aqjUEQqZEEMnW4835jNJWL9Qtqm5MrLs2rj93F4VCQe4gjhb8Eau",
  "key6": "2dzFgLmPC4EHska4E14XFVYfVqQ1vN6RejTPnBsu8gACaZvz2BdMSZudhEJEZkbKFfdzLDhAAXixK7Mr1P8E8MRC",
  "key7": "4TAHzz9cUWbNDbj5bpodxbgn6jK39Nr7kqnw7oi5UK8v7oGV3VHmAKLMHpMxBVVKjm29SkhfHVwFuiMvQcuib22F",
  "key8": "4rGYXVmUsJ1AFT9HiaPP1aEUQgp2ouwHwpcnVchar2dLkKs9ANEA2mSp4ybtgYXPFcmuFSHYd9i5qgp2NwoKzn4Y",
  "key9": "5HEaWzCFeLwPQVXU7ocuUn3cRdFXMN5GCDp7Xw9sa1CcZdNaNW1Bjq9DNNHG5ehXgfSTxtr1gvxXg8udFodvd5fH",
  "key10": "2E9aZkcZpTS1WVc28PA8PQqn8HtCxzUDxoRf5zFLgWjmZ4reLzbyys7fP7PgjkcCy5Q3vkM5z7mbmsCY6YKRTZAy",
  "key11": "5fkJdBTSdDPmfVZoSyPzcYw4cuSZbWdnrSptH3ZYtK82UCaseuRowNBrAwqB3Gq643XdHnDHnWMfKP4a1npkU7ZZ",
  "key12": "5QHqWvSwhTBcjwDA18VLp3yv8kPsiD7FAMbFUV9vhETanG45oXT1SBiLKh6sSXAETYqotE1AVm4tnGduuvkycr4k",
  "key13": "5JDweCWWBoH9Q6JhVxLQHno7jCfPJejRjXRGQiSqAHQSHr4cjQ9ZZ5SPzuBF43GKmFb7R5fDF8fF9HJb3EFvAQ84",
  "key14": "274cCDUFHp9ze6o66ASz8AtoBFqCA9L1M16AZjmB8W8UuWJC1MDEKtVYyk2zCg4PuYTiBJ8YMysefDAapqmvh1kT",
  "key15": "2EHbWF9brv9WovZeKXFkwuUMSCnCPDVBppNBxfBQnGTNf99mgPeXzeDQPfL8GnZZyztthwyxo3WVDL6KieqGzyjZ",
  "key16": "5zFuidzc33s2fTyGAyMcRgNENJ8E1uDGf3K2CA8BNooivNsGNx4yYsrExKRxQpZKAGHPGtrABDEmn5x5Z44Hdtjd",
  "key17": "54ttrfd2Rh5HzTMWFveRcn1WRidretU6ARffnXVhMVaNhEbqAMB72DEpFzLQ1rsceTLdnQeR6ckkTtT5aK5m4ucE",
  "key18": "5Ss13i4YsJctVNyqqq8Tc77eVdzeTcLfbMHe7Nwzg57VqzL8Tt4F4uuxHBGyV6KPWmwdGKGnDxtfbJs2F18kjq2s",
  "key19": "4UxNohDoQNP9exbhJ1CGm3rEwSDKmToyVDPZmimqfUTGvhSzmeHT6KjyWCMf3r1ibqQ2Jm5j98mnhbtRxZgwK2iq",
  "key20": "3GaKhBS6ncDaQ14cLx6FaMwUYTsCXnqP9PapauuBDCR6cR29NnjV9boa2BsoWPiTpWvG7NEmyt9CjKFWox1AA3D7",
  "key21": "34qrVTxDg8JgzbjC3bTL541cK23Z8DbejGrLt4zVEWdjZRyk1fE9gcUZgfruevsLSyVa1zyvJBayVAB765K2hfBz",
  "key22": "3AmTgskfAkqmAgTkvVZLcUAqwdeHaZp1Ggep7r585q6Lm3r2P8BXMBLWrFJX2fbu45JCv1Fb3MtcCDZ8ds8guRJw",
  "key23": "5UuH6hGGzd5Aa5nZJMQ9iQddbryeVsxp9Urnk5FWppS5Ni4nRZwe6FgS2K3w4RrnMuRfr8CSnJxnvzpa5R1ytHAf",
  "key24": "kXnfm1BcB87eyxvFw4BKvVXsgLDLjLiGFb5xqJ6kS3JP94N73jBTmkwrm7XzxjwFF8Fqnc4gTZXK3uxbqrxUQH2",
  "key25": "5CbxVtz3aaoZJWHNQhMzXdUGyGmvLbfRJyqNnd45Ch3YxXWdMQCWMG8hikkzgcJgey5WGvEJuZf79ht9whf5pdoC",
  "key26": "5ZzaxeNb678pPXr4RH93MsZoLb3NrYvp552jaJK7vXmQNJ7Ys8pkmXx2ermcsj7FZp9YZjC2e9HSGbexgchUiKjV",
  "key27": "5dGasiyVcrtkroxVkC5d4nnjbw9wBzMiCr9Y5XSxhNTiuALTUKwoJCybHYCuNJcrQwWVCcvP6UBu8YiHSweGfj27",
  "key28": "2NwtLMowuWXgGTPhbHukxcM7ZMeWmUsQdG3XnN6XdLWmK2hjg3AcCQAoA6scEQw5hrsKsLGYLVwjebqbUyqLJ9U7",
  "key29": "2S5XaC27y6MSCdDTdQFTPn6qkcCvdxjSNK6x2eWdBTobkuLobX1hiPGWospNMY5RxFf3JVweJhbCmjpaxC4CCghH",
  "key30": "5AzGqd5rLP5NjgnQffnf5CW7haLLjyAN3p9pnkZddVGAD9N3NvXwzuQkLW1Uv5PBotbgtFjGSy8Gwh5Dcxz5oyc5",
  "key31": "RAuUutsVQoUejYxKdcf6etknMKdgGZKd7CLsw82CtY215btNroPNDN7LLPH4s7LRjDGtnHMHUZ7CheNzuZMS2r3",
  "key32": "47s5PVhuAujzSRW7YMM4xHnDNsZNywsUNzc1Qwic3jr8Z9YA3gMz5H5qfHuswiHJyfnCGYaTrHVq9C61Dmx6ntLP",
  "key33": "5WwvK9aotCw1kpjPbGSABThAMXxuKR7qGz24jqopAQRpPxxDkgcECwnzAkrV3e1S8JwEnPSsfJFNp6og2KfDL2H9",
  "key34": "cAHVtnryPuZHTWV9aa1dGnqafb9CNxyuq5EZBwaSEUqzGcWwtgdhVCcPpCqLqtr2tk671PTRUy8oGSgrj8oSLXn",
  "key35": "5Mwhbojz7iaF7Gj2PwSu6HbgQrHCMjMRXEfaSb7rC1TVvbU6BrkMAM6oDKsNrkqXgqT7vay2gktqZUB5Gs73VaPY",
  "key36": "5jyLnBu3GfpZAVQ4NNx56DDPNMdBEpo1er9dhibfRY78SgRXEYV3KaRLVncCJRkjYLYY7fyzxXp68QDpV829PCdv",
  "key37": "VnmLghdLx5meR1R9DKLLnEQ86AVJR1TSjCXW7NEMTwfCGTq1vukjxDPJ7GzzPqF97AtGjTEmMPNXbWCy6YFb83h",
  "key38": "3KN7hB9JdNB17g2WaEh3w7kqTBF1aWZN7tmbvG2VKqGuqBRujt1k1sKSdSQa5thRYriJ9Q2PpcbdUMw294zi9f4h",
  "key39": "5pB6XNPizmRkwrkSpqszeWSAWzJMCByaFUwHy6WKfVaXAohYWnawr8m1zgajKZ4eGgDgkTxHUEfxaTANuR46jbM2",
  "key40": "3itSWSB28Wiz4SL91bZKexFoYUAZ6YucfTrEFdFisuPj4nByfYQm19miah3NDjaEHJpLc1Va2U3FjVqyYQvVNKFE",
  "key41": "3t5Jm9x2WyjoRFPbE9vWHEt1egnFrZeejn4GSv7HkaTw6mMq5wmvLHKt6PaTzcFcRNqK6zNQbZCivYpq83FbMHWW",
  "key42": "2Dqsf9ZTTfqqZrndLwCgVpac5sebogbEbRrrcKm3mvYrmwUDqpeH7r8hKYkEhkJhSiDPGJ23kLucNQkuoi8KatoP",
  "key43": "38NHtUbtTHRmwf67doLFs1LifVVUN2BQe4GNkBGyega3y5yEDgfiV2D7XPKY1NodWWCMYs53TV42Y9TsqsHaEivW"
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
