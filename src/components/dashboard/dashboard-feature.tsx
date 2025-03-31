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
    "3uB4fGyjTwtiy5mS6WsgHia6K1dFaPGDgfdLKTnYyThEmNVxQ9erLiaPJ5eEFEmosNe9pNkZp3wXirHJrMareuCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdsxfK4F56knpFuJZZXge53p5fR8RWAtYq4BjU8Q29JrSagbDoq2A58soChW3BSWKZrUBku1Q6s3JyEDt3bxEZa",
  "key1": "41CgK5poDRnDWh4UMpNMm1WnasLnNPrZdUgaSNbQWpk782zBfuxypEiChZ4851pPd8pGrNEsNsTcUY37DCoWbFp3",
  "key2": "2kLRt9w9m25eyf4AcasikngmxXfAy2WcmfjdVKszwd8y9MgJ2Gw97JA4JPVeEKRRJxQYuZqMypEgf5mgqickQQor",
  "key3": "3VNkqF5S4Txy9wFzxedEDcRBMcjivC4pSPeSWn8RquTgCCEGbz3addbaeX3VfugGvXfTDvMgmMs2h3jBVVcJGpjD",
  "key4": "9pLUvzMaT9Z2fKhQ71bDmydPSamSHb2FZdRDzfzakpGkehux3SFS1dbEjVuCRZm6WvmVn7kmaZEhpxwqVPuJqeu",
  "key5": "4WshhHExfgrAnr18EQDKw7Asu9xJG584S2jahQz12pcaWgLGHqS59de546aYp7YTbFk61QYCJX5bicuWortqBq6C",
  "key6": "659S5CYWVSf7Lz3Ctj14Vp2KJP2bH2L9JkwL7PyyEQ37c8vYnSt728mUD7mgWY8CrMaJsN3kbbFBvsVXu9YMaibk",
  "key7": "2pocrmyF6odxgs2YHSxXpqyzF7Z5nBPc63K8vzcToWkChLpjRPmrcZLkJ4Muo5frPxwKK67frh4XeV4Kozpn9zzE",
  "key8": "3uZbpzDB28K8VwrLinxGhhfYHymVf4rAtH2UDsGJDR49Y668G5MqiR5rHVNJJ2fTHSzYFUoMFcvr5nVoBicznLjM",
  "key9": "3kDvRPpBLi6ou4K5MXXpkgTsPQK4vNJNxHNuyjrR59cESdfGCQx7RRAnDTSdQcmYrdbxZQrmxCKMkPVeFiguxmVu",
  "key10": "4pqhRHoSZEvbZ6kB9wNE1QCSRWj8ebGBN5m5ePzWCU7HjsntckFyJDBs4rhpcqQ5zEv574MWpsCT6sHp1N4gosrM",
  "key11": "5wUmTGVsQWfSJNgDDp4pkRc7ijk9mZbRM6eZqUMN9jS9rA9UwgJ1gcTbESuoZuqbcYZucRSLSz7XDm2d7H6HNjXF",
  "key12": "2Z3rRYV8ZiyD5sdNaDbkawaDBdLuL8oampfQQoijUiDEgZNBgVvHjTAB136M2Jy2zoXLMtLcD5o6NP5Ae3D8A9Vs",
  "key13": "3tz4sQZKCtv7jDffHLZk3kh3M5R1B1kybs87Rdn2Ero22GRG72XTJepJJhwXQSYzN1tj71gkkWE5zo1P4ddpwLUE",
  "key14": "33ARKjYdc3LjrY46UQ1pWp1ywndruaFho5heBcU3yvjjSvWkPQLXNTYdNfLpW5mchR3yp4teMp3isB9uC7HDoomX",
  "key15": "3gJ1PjS77dMiAtCgco3cTZcfyJBrHmmG12x5MwQWZRsn6jKhjmqitvHakryP7WfscS752aMHsPaPjfwQkn9YZBtC",
  "key16": "24sXBWV9fungbj9KVp8BaqbaabGgFejsT7Ek3eYDiy3AAUXP9JiGKEmXTcRH47PyWwdVDrfu5odH2NC6bHpw9hY6",
  "key17": "3Np5a3cKfDpes2owpXinDyBhMRWZp3WHTHVvKqGjSXPrLB4meMjRkXvWit5zmmXqiN1bToYvijybHZeBomWKqkY3",
  "key18": "5Dbp8qAj3BtFgXFj6nFnghTdhFctSWwxvWtyHVq1wch5pWQspKEvP93YLjnw3kHXbF3aaHxF58tNDZZofQSexT1F",
  "key19": "5hpdGSikoyyAtkd7rhgrFjoKkN5qztj2Gdkr1cXnxTMHP8BrrqDkSXXgsKR8k6BxuxSgDsZQS4nYwtuHzN51BzR5",
  "key20": "648Td3afVuqvzCLWXW1mPsNGXkQoDX8DB7S9XE6rKg6XojD8ha9s9VuXWEs5s316tZJVMRiw8iJ4aZHYba4FaRtN",
  "key21": "2Kbow66J9ZCP8CmbwoVrxFCSBmXe188A5LRBJjUbEq1CCvmpFjU8E9zoe4mC8fTaaoSKv9Gkjmn6XntoUBoUcy6y",
  "key22": "4QVR28NmmuEiq4HCDSkaHnsdUpBCuohiUeQ1zAGf4tW9hN55XBBZZ8zaKvnTyWkcWuY4fHEvsW3gPv97SbF5bmLw",
  "key23": "2AmCmVfhBmfrysuuC6dyGYkDU3EUxfP683vcCjhdKDP3eP8BakRksQa3dcxSxzSbBz4nVRLyaRAfKPsro9eKJvFJ",
  "key24": "4B3xEwYxZBXMohBkyGhB1JRzSrG4FKZDRtBCRRuPDDzfJipUvMYC8Hmjbe4EpEjfGsj51C4e9cQbGLdLhrTLpDiz",
  "key25": "2GecHJ4ZSpsU1bUPQ3Cta2z4vpoVCfdcxYAMNdkhzrd4TZn85AogdTJ1HSPXe7vjB1govYarCciVu7yNmuq5HQCZ",
  "key26": "2eed2645taHyxUvq899zQixZkGZuNSW1hcxWAnMT5XUwu3NgKsaaxyv5HGjyk3W1GiJvL9V3jmSfP979g5ZwjSoR",
  "key27": "CAifCqrRcXCUUr8uN7gzuzz4wn2AqC1GgVpEoiZ7bfbyyGGrA7nzRyXP9nouLhpRwxvn3rRgCWSDUxP9b28ghMn",
  "key28": "4AoheoNNEEyPEH8FN959CmNXbzV4xNNGtp1voFTk2Drj2krFQS5rteKFiykztT7M2KnJSgxyfSrjTLnx5sDthutU"
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
