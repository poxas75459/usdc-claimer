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
    "fuBWWDX79rC5tZ7rdMhJWA2bCZnvezrBhMZkk9zGqMh61m83S8F7LvYxkwNBGV4Phjak3DAMis58FMRXAaNn5od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBesp5NSN5HwKDw2SGyAVSexqvFghDmAp3pYy1GnDeupHLaodyaLoWn9enm6rigwZUSdH2CkCuvg6BmXY9aBuwd",
  "key1": "1mZGhAN7PAaeASbRnFNT7BJ252frxRvBW6pXhFja9EjdRtPC7mVZS3TM4WqvBsphCQbFUoPQLwnt4mNZMAPpDNc",
  "key2": "4RPKX7mCYfWuWVhuk96YvCkzNSdFc7qn1eJxYgkgjYU5fA1PZZBjD3VewU4sCvTHfv5JfihUa5sC86RDWwhrmkZg",
  "key3": "47WCHQZ1TgFrkDzkweP38CVxCgKiqpN6V6EVTMhergtq8tkufJFkFBeYSmCrTPLyCaW9yP31pQLdL9mCeUcPJEpZ",
  "key4": "3pAYVmFEruQhYdjHbK8Pqg1KzoERUu9mKctiC5VqkabKNrLdj4YbjC8PVXYgh3VgPCuHPuA7B5vLj24Q9kvWhrEt",
  "key5": "bf9nikD69zgzaFm7UYFXvm8u5umJcnekMcKDzn8v42fHDkcYg4ZeiTCogiBgt6G5XtWgbFMfGxqxfUSzb52YsrC",
  "key6": "8L6zpjUsoF7JN1xS4JEouBoQCX4pgfcXufHZZvrF1F9NMvUrm34Q4VbBZ9DRtpwza7EJTCcs6RAxFyB4tdfDGM4",
  "key7": "6r2uJm8JuYPPQRS8ayommbz3JyXEky1ED9fLSCFPsAeHsddGab1K9hvi99MfhwPQG44Si56AihwBX3GJLDFy28e",
  "key8": "4hbPxKfAwhHwjbrgkXQmNWYugdE2NHWtbpgusKSokAxcNwKmbsXJUCPGRJBR3HNfYJPgdiD17hbzVsyYWcV5DizQ",
  "key9": "3u4iuDn9HgEQQYmcBYM32ivkLUgWnDoPoUbkc1MKtsB3RddFqdsaniVW4oMknDr6WefHswxgBBNwduY4nLApwDKb",
  "key10": "4ecK714PjT4m4ikoe6UFEi7iGY241353YBr1MxUaA4qTj12feeeAoxe7RERG4BqRCKkvpfa69dzuCEsK85BkoCSi",
  "key11": "2jD65EXjq9noVG3EDnpBXMhSf7rmBmYC97XqGZ2ihuXyy3scbPrYKVLL7sSiDtEESmqKF9mNrinmEJkSE9KevzqF",
  "key12": "5pwBuxd9ZftVusSJhZDCRu5ubhyguCswq1heq8pP3WZXSud4EVQKJGtJkv26UuvK6aRPxf147PE2spiYdGdAvVs2",
  "key13": "2szsLiWxdmukEARJkTfhTqi6g5uwVXYgiEJNpbRjMf4r6qsNDn1mfYqQx6j59ZnCpix8m5SENB8gSdouaBD2rBJF",
  "key14": "3ScdY1s6S58uq7ZQwngWQSzxStifkUAFgdnYMsYCVpM7sMoWGsjAtBYsdpKceEtVhcmQtbSCFmRCrn8inSMvZWEY",
  "key15": "5eFY6uAyb8tCERF5LpSDdpdtQ8brxmFAzTTAt9TcBBgYmCrWESrbfmQT74nhrDU6koUo7kr3BSeAXQddsahXAC3q",
  "key16": "2ohAhhpZ8gusfZ9ViS4fairApfKMhLjemkXFv4s6KB9P9u7Jx2WZuexrRgyRiZ6qk9GckSPoGJic7CYQWoCow6vY",
  "key17": "rud8iEui7BD6QcMwnLkn9o5gKE7CgieBwTbAVPw7gpu7bFNSjcjJuvRqM7wGS3hqxynnGFdqKQf6MS5GutezyyX",
  "key18": "4LeVxyuJahmrY4Jgwc6QyW49V4N5X54rDGhtvuSW48bJQ78ApJRM58mtmvo4cSmLtopi1eK21jSr3gyFoSBeMv9Y",
  "key19": "5J18TTyRkDYFCCN2C3zJv6fZy6ysAwbTsd9tki3kfryVUQmYFLKyKgamDfwP2YL2owNmcNV8ZYCrm1U6dpqgdHNG",
  "key20": "2uoZ8wEGxCjTmez3HkTcdJdWSqi1kJVMCUpZkg54xauFFA536SUQi1aBSvE4skrdTHYXfpB72YCiEMYQhJV1Vdug",
  "key21": "5mJ3BJDDoHMWpmuRZ6mAAoUEPK29pEEX1ELN9nuCwhBwqpmbPDkxc3AeJuFy5YKGbCUoB9YMFcYZaMx9zJ1SQh6D",
  "key22": "2pXxvFojaRngr9rhNMvr9BCuyztkagbR4fpAPmbwxNE6bbWFm7C4HtFPgfgUYsyvLXiwurTQjZYbn3FszzVvUGkh",
  "key23": "61YUNVMhnHWcrH6ozVAJmwBWQJRSLd9VpjJzSUnqUQPVaWRKpQGaG4YvMaibymED68sbbxiYBLkHqYQC4UR2Km43",
  "key24": "2rgiNZDkxX8ZsZyVUqsKZ2AMS1bysThgSQ1EiEnidHiJPXULvH8KfdhfxU2eXCJ1aRUEPd6UvwUTeDaD7iiuZWA1"
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
