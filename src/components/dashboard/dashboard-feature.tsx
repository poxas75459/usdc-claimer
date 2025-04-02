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
    "54a4drBKFoyzXrTyi25jkKmyVH7o6EmxPTKjKWgLu5rtMKFoHfvRvViSHyNdHxsVZpLnfqHaXsWNS282WjCF1Cnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Th7ypY8oreHPrgUs8kQ6529PuYgTeBHEZMEeY3Mqj4rvr9jDS7YCq44Ao9P5JWk6XQZQsd8LiJjYktjeRQE84Cq",
  "key1": "2o5dFZWYJ5azBigWvxFJDA3y3zVCg7qPmaZvEy2Dh8up6NN89Ee8Weu2z37QLbnQduvKjYZTTMaeL42oQfGuZbEg",
  "key2": "BapXT2PS8b7CJzCXojwhdrWFa5N1tyzTdTDCZYjQyeWvGFixjPXfhTANYco5ADpkxyzQkCim5bMQEQtC3GPvQQT",
  "key3": "DhmXxBoZWKQB8JZgmhgiDJrxAgB5TGeBDctbR7Pk6S7ABAdjFdQj4yKwma1BcgU5jbMkzB6Lr14yXyXHoLFHvjD",
  "key4": "4WKHhXEett7GF6abAnbgQAFmdPSjQLn9XGB53uHCPQSWkvjUjN5w6ctGBxgdrH436qKak8qWh2jmj3gq3d1JtjbD",
  "key5": "4y4fwLeiJj4ZNGXWVtp5cAqb1yCrEuCN5x5U2rKpZnXj4k6i5BhuG9uVTutrAJ6HrwxHNrzHW6Wam9rd6Vc4YVys",
  "key6": "xEdCFcWSz5kn6DhTHJfaBbLJxrXGNZDYDjUb4Crb1Sd1ojLRVJe6DqxADsnuZ17Dk7K6592WtGbrzn5ct3y8w5B",
  "key7": "4LWSFyvY9F9L6jsZPsi5q5ZYTBXxnMWg6PkTu8MUZ3oKTNRyx7CQ6xb1RTFQWxjpsVgNvTHw8xWe8Ryz7zUj2XG6",
  "key8": "52rqP8fp3Yc9uCGt6gSCaVHyH8tRr9WjQ8CReB87hoGwJKEWeQLAFpycfrBE38f5JbktL4Ey7uLD2o14o9CUTdvN",
  "key9": "3WtPVSchCqEKJX29KGKZDnCXJ82sWevYsevSVPmCusRgXv9YHsdaADAbRJkhoBrvgg5UfWoZ6td4ygQP3rwnCAsE",
  "key10": "32SDbsy6VRiH2KnFtkYzMMJuhckCuSUop2Fvb6V9v8jhDony1GJvbd11qCqveLXYXkSXKvaFdugLy6FVNJrkJdPV",
  "key11": "35CrNPsJiNVDTUCgiJFjFKJCos6NsaZurAKrW5voHE4WHwZqaWahfKXXAgUcw9VsJBXj6xJndXKprCBqT4pPVG14",
  "key12": "3DHYoN7DSTsmZ8znQ6XquXKBiWrY4PApcM3XezUpqxPfna2AqLmcweiQTTQhFZ2ExfYJGsU9op5xbMGnd6YJoyvN",
  "key13": "3kiTrB2rPS52HvyniQbmX5Vjq9rPHqoFR2VdcVP2HGwddBt56bvceLuZsUkTteNrd1uqePmnMLGzedQLebLY2XSf",
  "key14": "2stXaXM9inSj1wwxSyVY8GADdB91ZcrmmXjCcX96tj4fvjMrL7SGDiBoe188NiMpM1MMQTGbggPAKkMv3D8eDD3L",
  "key15": "63bJ3AcNuZYSq1hfzMJWuUHEjGXhwkXXtLQ547Pea3AcQ6rCis5xPdApWXFhrc14saRbAejjAeMT2AFfCvcgqpds",
  "key16": "5SAaNomjPVqTw1FCkfF6zUDcJ6DKN9Uyf47rQcWt7ZAiPrViPPCBh15aZuLfRRMHDnEA8Q2WYtHgmYAqD4gwU6G7",
  "key17": "4FdTmHsnYandMCtVmminkkhsaj3FbqzWnJq5wioyLZkNJCKBQkD6FXVr4176kcHLMse2uD3QWJYqHJrJWL3ReRio",
  "key18": "59v2otp397UfAcw9simax26MooMRB6WDLh7hhyeHK2PyTCM8wnDJMrqcgCooHraAxfnrnB3DVbze8BdzwgMQeENS",
  "key19": "4MSaPpJSY9vmtfqPYjHJDsghgduc7hqJh16pTDdFSxr8tgAGArQyz6UEx2noE9NuJYURYsKTDzkHSrvkxuRkG928",
  "key20": "QZXM4Rj4vXaGVTB9618ZFS5uJHTL8wnWgmNUbVju9p5iJJaSepxgad3wcmkE19qwJyMg7ooQLXviQ5mkUCenQ3t",
  "key21": "42aRKegQsxKCtHSysSAbFDgsJLGFVsNvLj1ARnDKRbHobtn3m44hybu3cm5J8mKoAJqXe72dCJsky1DFpvSmaNAQ",
  "key22": "4YQ6rwNgqcFdUsgdjh8buseqNtEWhbChRztczTJhjrPpmsW7CwtAQpZMQhCbyrorGEtJ6tXWHQ1ohbQgrpcUG9Ah",
  "key23": "5LnMni6MqNrT3RhSYGpBk9SZd75BC5NvxGdsu6CZ2dmkajfEhKG5hkCreHg8F8eVRaMTjwH8WEdvycDrWCGbfj7o",
  "key24": "fupA8zfFDUQF6SeCPyPXDn7C2VyeNLSn4nta38js1KZbPazEtQxr7mwDJkTiGg9oDMFYtDCR56vyrWNZS1VL3cc",
  "key25": "4ZeX5yDpCbmZCeqE5GFp7AchvNNWJT8QUfXNvpiD1RZJeKGkdTWZa4jdzgKmGaohgwaV6TTDDu577ctVMGaYgYmE",
  "key26": "2UZCkUWsw819DddtU5k9WPibjrYCHxXgYXr7mXdQp6q9LrceH1tCAW8yTbtnbsNnEW4CumnfD3nAFj3DWqusA9NX",
  "key27": "4FVKBtwpduC5KcLtZdtugopXTS9aN3cCifXC3DLfTKRabkqrrfcs3ZSTa2J4XpWy8YQEECgEpQhgrTVT72HgE9rr",
  "key28": "4bjDPvjEobopfh7RTpf9EGnooV3dUCBH4awjU1AD117xCRch6baSneAYy8BNp4e42XE2pGq3EBfcwgM7A4PuVocc",
  "key29": "24VjVq883PneLshPK7p73yoCFNbfKZ7qQxkMszpeeZn8Cn27968MkRg3gmLNnEv8Cc8CDtYgWQcmvPtCb3BAZ696",
  "key30": "449zZXkd4meLBscDbBAZEJGKkDKn7qL8nusCkPNdXhqNDCLJJzQHEvTbvqr2cLWseJqFBR4A3hT4zuEDxqEGkEqi"
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
