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
    "75hUdvZRmeazhzHR3RXsc8wqdukhoeE2SfdjBYit7ediyJ518AZLytXE3iyCUz1boTMXypTtHiwVn5LABjUaV22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVAMzna4ffEjcGxjhGAginGUaup6stY9vpZtXBsX7GpX8iuRayXvfg5SP6mKgfqfC5BtfTvjdAqdmzecCJ85Ay2",
  "key1": "4NVSX8CqFR9e871sbX8RFEwwUt6AEyRJydF4oqS9GJ8BgY9RKaSEwzAc2Cpu666p7ciWjjxmsW9zLpTDAqM47xRk",
  "key2": "5orgoBTcqNMCUHDBUxo8dgB8sgachSucgUtbvHvyFQU3kfat3DM8mWXCfJrLJHF4odLkqLFYgBfvq1i39WTZtmCj",
  "key3": "63QV1iv4qB98C876eoAhE4jeLLSMNy2KS2wZ9iTwnYgWXraQv9CdzUWZ7h9tmVwPwqviqL3UNBgkSNaJxWJfw4rY",
  "key4": "ayxCeTiRHv2WhF1uRs5aQHe2oPc7vszKichbfiUc2QrPAUTHMdsHAkCScpUV5CSU45MmRhtZLSHCNmXPgC96Du6",
  "key5": "5nMStsBE1mE17SyupZTjbodyr6FiuxTM31aC5qUaGAnfVkc53sGwz3ygYQRj3UWcrBkV6MshfJFsqx8kQoMa5L6n",
  "key6": "5Sq1aQjRH7utXVt1tDWNr1UJiagSZqvArBmA5mzuvgchNvikboQNTTHQBv6uRHRm8aaVZSvHbE8YvZQuzdrnxKnc",
  "key7": "C96pc9Bwh6HbQiQfM2WJHx2M3Pn4Avg6CY2eABBNM6rgKvbmPWerf6J6kUgCWQaDxZK5UMSXfL3VfHcywJPXTWf",
  "key8": "wHAz2RdH8ZZbbEU67qeMft4m9D1w7wU1Z6PggEPtWLFE3ex6u5U5xHidoY48QLkmG1yrTbSURj6xpfvuNSkLNoj",
  "key9": "3WPkyobw9hm4mKsodvtteLsaLr8yCChB1yDwvN7MY5SmJ21J4rcHjNsPCCaco3smT59qRmnF1PyrRCwEjJdhSy4K",
  "key10": "5b3oVhBY2C15BEhY9XUQt9VbSrxNyu2Sr8JoQz4z5iQg13qj5wzS2ScF9ReGw1T5qs4gKi4xkxohPwCz9HJGYgus",
  "key11": "2Fpd8TWmVCb6Kq5Qh4hwDWWePMb6h2yzdzNKpkxmUU8oX85RwTKTMhzSvTRzFNbyLipdmHDeKGsmRMR1KKoj9oaf",
  "key12": "4fKST7E6P6CZg6CwSoZzWvnX6nY3VQoaMADzfRzw4rfQW9M8jZff2kXVTGSrJ5CMbvsnMrpj7Bg8bBqNhwMVx8at",
  "key13": "2imJVP5ocGNUYCHpJAuc4Cy9YviJ4uE2KpVVTubgZ1dpL59TBmHCheKeNJSUU6fLM31kMjYJi19aFENb3EJgdt8J",
  "key14": "4VpTwBU179gd8j8fSYJkERNj14FvWS6Km8NsPH37mvYsSe5YUuNykyVRmvfoFcKAnNRf6noNLYZVaCQh9yK7tiUx",
  "key15": "2RTs76uEbfDyDRDcoMUSm7fqZkuvBkPQuBcYiENCRb1VxJhez5yYKbUFoKB7WJ96JX5Sv8cv8tEefQEQVPm2Ges5",
  "key16": "tEoLyYKUbF78szFcZWsQ4as97T2rU8MsVCjto4WKwbDCpAuhrXJF4YnFdxLVD7BZMBYM9UFDK18oXU9uDKSV4U2",
  "key17": "5zrwhUxRUiuhCLmVdxTx5kwVsKPYcbGhWGL5gG5ma515nYYXX6sfByGqbxHxuk3WKhrYKPSdLPJUZ7fFeBP1YDw8",
  "key18": "3zE8rgGKJJM4wobRw8YtiCjAJS9h71WfGWL7cLndqxBgiAi1XiFv8K4yARHkT6n9yfE9Fv2CTyj2BYJay9uQrdeg",
  "key19": "5YqGEJBrS3QegKeeke5i4CgQSSYrK4K2tyXYmsHiYbZ6FAn7GRN1Df6i32fzPB5TShahpSKSDb8Sm4WY6iSUALKm",
  "key20": "3FSK85D8aoEEUU73fTfrCXVZWYCDS5BFoQX4X6yTynEZf5vFYTkDEYxY3xTg3hBNJWM8aJDiXspuqUcDTRENV62E",
  "key21": "9RN2YgTp5se8o3DPUPW9AQQmmE6a6N8HPZk7TdjYJabPgwq7UJToAQZPBC8fxmDdm3W8ca5PoVRVC1qbNtt6Jrn",
  "key22": "4T1ruYESjmALXLepcL3oRFKP4sXN1Pxss6A9Cnx9gi4Tr5DcB6h77srKUy6vCbVhwy1FLajSbTVfpWaF1pNBsDHn",
  "key23": "41SQikdh1gQd1QWqGEvtF3MWYSm4PE6bMDnZ58YfMfyTnPxXNUFTX6HPAHQ1T7rb6p9QxTEEmFL9L7Z3TGfDWJ7i",
  "key24": "4QP2LH5s1fcKue8SzZKuq2wxwAn5BvN5kYzrZyuT19ny6MB29wm1ncYdNtXirVQ4gSjEwFAqgNWxxxZeSnA9uXHU",
  "key25": "2dNgNcnFtvCoJRGyrzdYpiye19fo4ktCi6DvkNvWN8nCuhJ33jN7Ueqg5PR7xod91pukmi4gUR6k7AgtRndmMu43",
  "key26": "5QhJj8EcaGzkANak4uSeBdTMxBVeXNqXsy4PNRchqNhV3jvrX3RbEN1Rfp4JUHaWg7iuxJuArShKeg8EcWXp6f93",
  "key27": "2JDnwR6fxYSPyAfL1txhFRjuKtPTNy92PFFecxjzGoYbn5UqGsxp24YLY9foAisWt9JexJgZV8JBSMvSznPPwcMX",
  "key28": "4BxYS9xNCT7KLxzeyYdZ1wZ2a9iNqGq4Pz9gZa1dsUvWGvE9KhsZR6LqAMaVaXxrRCPvmrdmH7t1wduABQ1DzQXU",
  "key29": "6fJUYEmenR6MPvj26gnk2hJzGHewGBPejbtPEweT7TghKZspWni3WX5NRVqnpTYX5NuwWPG8LDekcTVneaFTSbC"
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
