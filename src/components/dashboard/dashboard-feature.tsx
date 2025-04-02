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
    "5mUuxheXUjCKwMDvufBGiREZY6xW5awugBZaSJ8RBu1ni6C4jzhQs5R8bQaUNES587RaEoiviMW2yBoZakKT1XoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7Mkjxnyuw3uZpfgGn6nFXrYUbVGxHefZZw1MNNDk5fcmUVnNDoe5aUSHE87BT2ALKGcwhbFdT3Nn3g1x56YH72",
  "key1": "43KfU5VYhdmSeRHetRe6PnGFuUmQSxfF1aqakZK8pWYGVe1Zvorihtqguwc99UUAof1FPcaagQ2tn7rzRrbxpXrQ",
  "key2": "4PNpdQZLYrPmKwY6CQEjEaEhm8TypKR87cAdXTth9DYu1GL2geStXxU8oAqMzWLboiNEuPaphW46Jw7aJ2TTTtHK",
  "key3": "XRRimVupNW62yCRpeoyWk26aKgFmjTUXDET8HFQe2KGzXuXuMxdKvJWcauxAfPddD43YZv3ueTfDJSHobUsV3ko",
  "key4": "5sagFLYWdYVkNJWLNEdLyTcJApEt27pZfx3GKRT6Wm1W5hzgeU7TTrTLoh3uxqCqzmCfkDAuoLU8993YtSD3qsbu",
  "key5": "37GUHXnBUNCWAdPuD6xDwYgEtyFcEiN9AA66D6QE2B3PMmaCvmR2vLHA3f1jQahNNKDpbxeZHCoY9QPsipsMttwf",
  "key6": "2Kw97PWtJWGvdds75xPm1bivbbktKqToLjwKBmpUxuPsv543ya1Uc8bjoGnyt4edp8wjih7cppJydwGtnedBtmyA",
  "key7": "5KwqGWMH1qtjPTkKNve328kg5ydo75Uzm4eiz7CEGjRn9xBbyvE3GGEnssW7L6rK8pjFKqt67p6vHowiAAMngPQe",
  "key8": "3eT56nYc2YABcpSvPx7DKb7eNDR7Cf6tLy87SCYy6rdkrVqR9VXk8SRniFmmHtXZ6y9bqE3KSf9WDZxPLH58HKQt",
  "key9": "67op9Kh35SKpKeWdmtBUaq68mUPktvfqKyLUHE8mYyofcMnP9h5HYgUreujq8tYxbeJU5m4M4PqrS5cQzuWomHnq",
  "key10": "2n5mKE2rxhybqCgiz61LokiUFuFycV5DD99aTWz4E3fxH9xGeoBJ2Cx1NiAe2AXKrh39T9LoAZcWvMC1jTxmjJrP",
  "key11": "2sPUcgQGBUtdaDDUiGLoUCji9dFUFZ7iT9TnXcS9LKSosAYZyvH9qZZquiz42pVdhfoyyYFCvTTU5Ub4rz2T5HCz",
  "key12": "5mWnnwU56p39JDZvLaES5aEE9QJx4PC8YaWzo2V5F5rxBHTQDsoUoWZ2ACEp7Ksb69GfEaUpqCZ8urX8jKXm7wzx",
  "key13": "3FJNyYz2d3CrvMmoX9owW25J4LsTYxNnomUvg5aLJHedLzZFVzJm2tnNpDCCf6JyHQjXHKd9ez6BU7pByhygKZP7",
  "key14": "aHCQorYwqAieBzR4weJUU4McU5wby2L8npkVrVEQkuut2tjnh7ExnjSjhYMaStcRcQCdxotoFK7adNudtSaLXxu",
  "key15": "2e6rrS6ZF9ibe83o1GXKQbAspKx1vzvZq1KN5xhGVCdqdttWgkxJPvDiTTMdWMTw7y1cSKKeAw7uEUGqtRfspzy6",
  "key16": "3XTcDmw5aokmX3tUt5nbKy1V6VUsYbR73VeyCCZb4RhiPsZBTV8JsSEPMJfn639Q3p6YcTbB2aC8wTNX5sR5qGhH",
  "key17": "474B7HhKyVir4FasWBc97BJygu3jKPfwG7zXAE2tih7AeXpy1PagvV3EJfvEYBayN35d7DqCiTzGkpVzW26d15Q5",
  "key18": "5FzV4U5M7R6LghMPQhL2CnoFivrXLhnhc4vZmaQFsGZtiy1Wnicse2Hx6RBw4nddoj2f32UMzszp1Q1US6NjwpGf",
  "key19": "2dBNZRfUisSVFztR2xXuKKC3JEVFXCvmHv7FkLkn3f16AB2kcFCdX4MFf5NrbywqyekMStatEAqH34F2ED3JyRh9",
  "key20": "5WEwBYWKbxnqxSurGrnnhUWmPZhBKST5Ek8dRrp5kR8zVTXCYB1zc2ZY37KiqqXLPc9t2fWhAdt4yWTo9B65qpkj",
  "key21": "QYRc47wbJ2WTpgRVfDX46cpn4jopsgpQMEhEpGNzymzcEw5FRxFbv2bsiBABbh4JSQyULGGV9n9iJYHF1FrWvTf",
  "key22": "1UPpsMJLgzk4uSvBQyNy9QN1iidyvAuNJyfKrB8prmzTJbGvYwyGBvbVi5q2s8tUCmursnhFL9VPKkkpf2fApZs",
  "key23": "2Jtkfxwa4TSkRMcmHvjxbafoRr2CMmCeMR2zHdLYmNy4Ks3mhP3uef6dkTwHcHL2LoTKRitYbf11RDcDjuKwm8br",
  "key24": "y9Vx2HyKspFoV32xvd9zNwJE7bBbMaPmVdvvkraJo6KNfikfGiGjU51CuJ6guYA28aVM6eXer42UGL132fNHnyq",
  "key25": "2PEQzRWaTXKgdii7YFAeL9WE3hJupPwStnXqeqY7qJeLWMsWnBoxaekzQkaqBcgEvfY9ZvUx7XXfwc864PGg7EE7",
  "key26": "4zNgAip2zwpp7ZsNEGSNMwaJMxVvhwWxLQmUuLEjTMRooeooEiw2DRuMBPU3RDR9EKPLXdhELQJ4NRKVqeFaWd1J",
  "key27": "TG5j6rjg9J4UNYXYRrHvJu1Q1tmrfyNwbwVzJrwb4K85ZreecyvVg6eFargmwkiyuCG1TjtKoZ9xJ6jszKTBBT2",
  "key28": "345jdCaPVGaZGnEHKqt9hwGAsTMJVsT465etQAPbu6CBz7NNvqqERowaDDPPqu364Kovoi5AXErXgB9Bd68CU46X",
  "key29": "63VvE6zsQjTpEULLxGBhjNbv8c4TQyG5cRXCdCHpbuS8zucDt6HZpp2aBqzgmjPjWFCGjQHSGBFXaJwu8EcXcYRr",
  "key30": "2D8Y7CbUis2D9gZa4eZut6maJ59iZFt3kPk3dtkqVhoj3X2oT2VbkxTerWGPq5ZddniamfQFja55drqxYhjF3PeN",
  "key31": "5JN1LwXeSwZN7VKy1XhzBHzqkaih6w9tn8J4ACXyocHokSTyWsXimqvXWeXY7nLYCNhoQJd9rtLCBiMKyR4kD8Re",
  "key32": "4MC5uZgZxA48YinzkHywqUCg559B3XD3FfKhoQPs12oMtR2rxJWiNUq3Ma1wiLv8QtPzdaKmA4Ed6kikngVSd82w",
  "key33": "3uazmSHJKEy2sQHrcfqun93VkdooEQ6ArrxDf6NNz8PseFuLvKXLTcgS7wd6YT5yePmHMxXP6hcNLsoruSQUMEjG"
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
