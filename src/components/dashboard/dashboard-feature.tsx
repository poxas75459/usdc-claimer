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
    "19n5uPmBQjkkEnaN5xUgqihQjNim9cRQ8mGvfxLTcBjdCoDCygm4eiAKUaujs8Vms3yuUnx9hBrysNGwPCqqCM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMJD2wTUnQCBU6mya4vJg5xzvhR1DRTb6jACCqLrtD7ci6tK56Cg9o9ymMTivKgWNBp5cpMzmTcWhDaFqXKkd2Y",
  "key1": "7f7Btz3fSXf7eWj1pAShGpueAgEdtgu2imR9N5GjcevtrtDiuyKG9rSWSrhShbb98mtJWEn1oSJFjg8xKuMaXtX",
  "key2": "3ZUZJRUUi4uBv2wQ2jimAm6Daucs9pTebUmrUU4EYXnK7bAzLWouadzPgbLFmjjuHYRPGeXgLamcCo4XkfS8E8Kw",
  "key3": "3NBsf1MiDpm2ztgYNnKMfFm6qHB82A2D56hHQMGx7Vx2vmsgi9K4VngbWSG3D9CnMfx8KppRN2VWMQ6HyK81w2Hx",
  "key4": "5Jb5AD5x5opnw4E9SQdaMfTx37gJinECLRDi4Mk6wFXARXCBvQvhsc1fVHPuxr5eGeLE2QELp8BL8cEtkKYN6xYC",
  "key5": "7hSzgpuq5P8hHH9jTQreZh6VAqhDXEQe2W7JaLefdryCHnmA1rhhwyzvu57QjcbJ4f31geBW2SpEoWK7pyMMJwY",
  "key6": "nZShgRzT9hc912tWQGbVBSeJnEwcNTZ8cjbwCCSiaxTtfgPtGJPAMy642BnWqNqEySodpskQW42tY7J5GSuwJV3",
  "key7": "5JWfSsPBosae8G7M3cQXb9bJJK3b3FBrkFV8tXZLBhdtfGaVEj7pz6CFvhMZp51p4D6ZjEMSZPpYmEL9cdX9DQNe",
  "key8": "3WZX42TWKK8775fDkQhC58A954p5vwvtbbbG6kZbSRjic6sQFbVwZpdzBSqZv7Q8Fn1kdmkVAF2ZJfeULYh2D9dk",
  "key9": "4kpMK4GetqDCq1eYGmrRwedDyk4ZJ63DoseZnBP3qSnRCc94T6MWPgea8oVBdjAkZ6gkTzBQw9UkhMp3KAh78az1",
  "key10": "5sAniNjiubw5yh37LBJ7Kt1oziycTxqF3rUCUAanFasomhyFdHqbPgcpt47XxxEdCkFBWQsXzZJB3uyzBjzEsajP",
  "key11": "2GbvVtVy2vXge72ahuohFLDB2mSbjaznQwK4zMSdVxSueEuYvJNR8tGmzfpqgJLaoMziXS9Szaaq2Y915Le7NBJP",
  "key12": "4t4zVwxzZJaqLuzXhMHsjH6sX5ommuNUbFbtWQEiHZgEFYCdeVDHBUedhSH45zt39oyQzAt5rSvzxGVyKXktyuXE",
  "key13": "3hqDKJ1DqZvJzFmvcYLGzjvthfufuuBeHG6feMJey8jeb9HShhkRSm5W4QqiMSX6tQjABnkV6pAvGc88NBhSXoB4",
  "key14": "4V5KuW1apN3QHc8nx5Zr5g3RYFQ8vxYG5rzYCdMz2EqntPd25fhD1vcbccFq5aSLiV4wkLzqQcu6yNrD6rKoFTXM",
  "key15": "3Mq4uC64FMU6C8sdXLqNqxWWmEAwsVhX1XtNZdZg2HAWFJeWFHErXiYvXnd4YsNm14wM1snrPtYNJJDvgzcVkipT",
  "key16": "3mew2RJqRQJXnxqaDZ42hZomf9WNzxD3PxKQwUgvR95fiKRGTu3KbegrijJCMaEBJSnA31nSSkXceXo3CdcUxWKf",
  "key17": "23FRfjMpQusaSKzNkwWYRm7ky3kis9aBgNTLqw73CXJFUUVWsKtcKFBmSFCHddrFEwACGSYRCSHjjtR3SrZEe9H8",
  "key18": "2VwZ5gpTvD2AUTha7VejfpCfZYimSRH5azGjHv1vbRpraqYwFPAa27GNjoUEB43y7QSF2yW2orW34eTouAqwmuuA",
  "key19": "2AJKx1Lb16E5cuDJFxtrwD4KctBGRKRsjCRpk4S4CTB1hZLjLMkrZtnwqATL27ccr9NUw8TdPtMscPKFvAcz7J4i",
  "key20": "5tn3PPUsbj4gAVAiZqL8BMJLzjcah5nSVXpHC1WSijyaR8r8Z5sxFCiKuXRmnoK1wBQtsg6LiKjFBQiZs6AKtYhv",
  "key21": "4Rdbsmxgj6ekWeziMnkDgms9wDF714NyR2JMQzAJaYFCGPjzyQVpMq6C3uh7UZn6JLi9Jo5DHaVpEoqTxDMskfEP",
  "key22": "eKyFfCoYC92hQcn4UNhN9uVKtTLemLutY1cbTirRi9yVLUHpwMuMJS4ABqXZT8d1cEjNjPZE9hw9KkL94ydLi2a",
  "key23": "5omGaXCPb5ZQnjpv3VzzmBetErjDu2npZqYi7b8K5o2ExdtZS9GzMLead4Rrvk4QjnxQZn9ybWhEA9eByPt99FND",
  "key24": "596ERYXkXB33jLHNEaEKja3ic9sp8b9nVdhqJ7977NwgKVi58QhDctYqceig2UCzSAv8eP1FHLLkwbiw4X5pD4DB",
  "key25": "pAKXhYzEy3EXmUFCVdS3cMiVSdppWd2HVzvucNVXRbyMDj9D6dHje56CP2o6hnaaVYAeD6AdnjMaWwukx2VEcoS",
  "key26": "31N3HLkHYnXt2VHQAGsFA4oJYpokW2NWMhQrcj54YbxarEUpjdumzoHLf1u83S3TJs7hX6XFKzSn7obL1kn17W69"
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
