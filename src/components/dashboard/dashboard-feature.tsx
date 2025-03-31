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
    "65z6ZhTnEgVnc7a8JGXvBhm9sEsmDUwjwfyJuAkLVB5woiWB34Ynfa4RBbHXLxViG4NJG58HAvwqa1wcD3jVCvcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D4xRsryXGPdiFj1nFBiYYNfmLBK5PZ4GozR8tc1yDumiLcMKgwuTWAuH9BVih2JHx7CfXRcqEiiyxFmp22o6U7x",
  "key1": "vPstqK6dGt7skJGWxpQXL1f3L3Z7xYJgVd6EiysVhXfNdpTQYvaoAG5yz68FUrGodRxqsA3kF5DMfqCzEaETawj",
  "key2": "4gsHLD2j7bKH3GbztmNwzKJ92dKD1C2sMafAwsMinq38fHwa12wQ5xT86SpQRoWDKdkEZDxZhcmVK8bXAFK2SaMu",
  "key3": "5J31EBGGU1AtGnw3UBydF1dGE1afuVwJcghG7SxFmLLanmjd84AkBRs9GLQV5ej8FsL3DT56KwJTpY4BdhRE8p4J",
  "key4": "2E1VbpzZGQER9k5LGmepAPw2DabaMQEtnsUex3nC9V1HvhBZmzPbsFV3YkiNPHuJngFqbob8eheBWWGwqLQi4ogo",
  "key5": "49ZxLa8hwpkKcVnCv5FuGjuimu48ALw1oFrWGFqRZd7U1qbjiCwjR83HFNcPyUij3Gw2aveyT6xZGwVUF9wTDsFx",
  "key6": "4GZKwJntNVmg7T4BqdwWioz1LMoYdCHiUR2pJokymTiFTTkug7BDHTLnW7TeJVJhvH1KaR2464ansDNoZAiT8UA1",
  "key7": "3nQPZXJEaA5RbHMGfwf4wVsUBoGvzya5GsVKk8ikjCBtG8pYT8mQiJCagmT9xhjSPjiwzGKxc3cgEeByEhyqXPda",
  "key8": "2ahR8fxXbdQSBH34nbYRpHB1Jv7EQUDUUqAmzw1WMxxPg1TqemYUAaRiXVyCzY5ntYyzmWeK7ESCCScZu7hj8RUv",
  "key9": "3yxBFCndRw5EH5MeRhWz888JBCgxEPJxge7vshi12BZLn56CxevPK4s7KtC2WDjFkGfrCDZd9kTWxkxn7XVVch4N",
  "key10": "4rhbSPSBRi22sUPzcQvq8gqiZvnLKM4ATdpQbKkAefWyze8wkir8Pci7jgXaiK7V3hSGXYE5EDYCYTiPnFyQ79Uk",
  "key11": "5Rtc9gJabpzenPwfqb41XS5vjHfqNrJLX98cp15y2PPSjQrxDTo92jgMDzNJGEibKEfLLwmX79yDJWS7FkW6gP1A",
  "key12": "2DWjeKycsahrKndvPR5BHtgcE8oxASyDeE8FVFmLvM28nJ3stTfhHt814iVVjAN65ah7ioLcQTNePvSGW2itJ9e6",
  "key13": "55Yx8dRH143o6GWg1KK7txpif4RQDXHTU51pJ2yQGLqVnY53wLJNugVo6bWmY6SCN1NMwSEBaSLNi3uARnBfm9zp",
  "key14": "4N1aJeekdQFTgSdPTCXW2xiKXQYQ6jYhxj4Cw5ZhvYiz6wXCEDhfSTj3js8MyHK9xkyJKGDCtDYWjgW8S2R7UYE6",
  "key15": "4zfDJKHGEJiHuH5vfimGuPZCrdyfGPGSUSJsmjsE6hFG9d5qRt93Zt6g3xxXh4BLas84cjjDXTdSdrqFavuB96Zk",
  "key16": "2gHkWCkeU1zGrkrkDsfBaQAEE4snpuWvkVywoE5kcud9BS1nztx1qqYsByvvtDoXHB9dfTozibh2A2SKNPe4bCSp",
  "key17": "4jGZrQUywfqb38qYGbkVWFLbpGRA5eQkPVn1wYiQifoeqs5WLRtckKGgPUAN8j5umjceqiJUqYqzxXH6kR3gdG3W",
  "key18": "5LopSJx7DQzzYw6HzaKaBRiBZQQ4AUHL6c4p761PaqjrxdHjSDpGvGSHDnnHbFQQYnAVQQRxB8hGm9jw8tkFPkiQ",
  "key19": "2XsMa56CAwNbE38weFfsvXwJX1yC51VnFqXUw8zNLwQBseT95AZDxH1HgWhmCsW7ZK9vw1QE78C4XUBFt8BcJKgS",
  "key20": "vKEs1bX1Sbap3BoE66cRRxvUSUCF7jyX56HUP2EaSTVNETDufTxbjFrJzLrJKbjtj1RzeEaRcCczY8xKT6Mv8zg",
  "key21": "WnE4iCxFQa9mgNbTDh5PwetbgoFyg8eyzUciaQtTGRogp6KZ4Wcz5nocykZrHLnh84gXCzQ1Zy9NEYiiQNLBahj",
  "key22": "anr54ZsEBM8HLQTg3H8kGsSy8oiNEaSqCJQRNUtq4NBYqPMNc4o7ntjRR52kgomHqKPPbLUh1Ny8yC6RidTUe2L",
  "key23": "2BUXZB8yNinksVDgMUmogGdvinzirKvZohT2XBwmVgotkH7JQj3EzHUJgmVzEmVoN6xAitFJHfVsENgnZ6a4d6GN",
  "key24": "2UX4AiFneyJMpdJvmjHKAbwwHNybhPHkyL7UHqbXNqNjREs8YbN999bFMeVoXcZkz9ZKeZBqozZCGHPwhcWLUrZq",
  "key25": "5aquvBms9pqFg6c4BayYDCfngH9aMjL5KLpV6NQDakKUTdbMNvpJ8LNt2d7fTCXJz5w18C7LensBPD8Y7EL6LPiW",
  "key26": "4uyUSkgNx7LFBw9DziVEKQhPmYqzN2jqCryyoHsfzrJakR6HPg4AFsp6SR6f5uSFUJ46UW3yQDk19h7Pn7Aa2RT7",
  "key27": "5C5gKTbmUJBt6cHPijyrWBTgYkTHGvo1LkrV88S5YwGjCpqYToQ7ghNGELtrrJMx3S64mjYFW6rJhMDcv5eYgvGF"
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
