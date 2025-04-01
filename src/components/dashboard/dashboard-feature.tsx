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
    "5TpcHkzrYz846UzhLEUpiMS4VCCcpkcyUDfVBprZUQQoTusDMXRZgtTVqGmAJpEuz1S5f6jcJG2EY3XGz9kqtSpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21i3R2CDEshSNkbeDAPSWY1eTA8wdewWkzEkwmEmtfiRbhdE1fXnLk5SPUwgpcsRiQfaxStpqiTecxjt3o1pHDzj",
  "key1": "4ixrW9iKQGFHsBxAA9Vfwq82nMpSFp8CWHtCuX4V3zPkpV6WhEcW3tAZb42VJ8gXaoev5SqPMwzjs2aVZactnJVf",
  "key2": "63TviLhMNiG6SJWw5sFKFnxzXJnm9SqT9YpU6sDZz9zvNTho1UFDqsYVC7c4pLznbp9SXX38o5JTkveZJPvX9Vtr",
  "key3": "dfBV9k4z6LUeWfoRBP3PLf7STgZxYNM8uHNViHycU5VL1VeEix4nbHWPvhRycw8Yopkj5NmkVw21pyAsrfckJfP",
  "key4": "3k8BnGLGBBjSPPXbgAMuS6dLtJXy7LWJeykvM22MHHJdMSmj4TUdDkY9rWB1Fa48aDm54YyYwpUsSjpFfQ1tYVPJ",
  "key5": "4uTX3Hr2wJnGZvY4pBJBgvdbDKUioGexPs4SQ7YiinyHKkzGSHbRiprjTGSjfnWLqGsd8StiZMcbszBcpCcrDKJD",
  "key6": "gRdzkbt5e3rmWx4oKf3itNsWC1QTZ1RtWijrd4oL3XptJpEG6rksaKy8N5ra8RpZpzh3tk7r9gGKUvGuJaegWSk",
  "key7": "4ZANmwnNSSbZCnhHZSEaBJPoANCu8r3NY5YHeMJDa1QPEjGgABV69vbEU5xfuNTaxFs4UytxZCp8p7fXBXfXZ1Ak",
  "key8": "53ggpmnuuNxUD82SvacZiY8dhUG8WGWC5xR3F78JTzVfPNCpWhb1jprWWKAS2X91B1WoC5QwCSKRaH3CYwPTZVFW",
  "key9": "LkYkaV7fviB61MRweg6m12uSdTPG8JfDCaUTqCm4otDia1VxhA9ntLovoZQHioYiDfMmTwRgf34RoWeWNem5yCR",
  "key10": "2hmr8X7Bj8Lzb38DtYHzMRDLYXma1gr2AhRFZGB6cZJzUPa6qTigTKse1AaNNQjNbq965VfDnUkVCpexDZVbFuTR",
  "key11": "22WbkAVSU7iRYL3PqUYFG9BBkanLRgQTkQqgyNhWgLPQaarATFaD9JLT2Y6ZDWcWBBfi7wJgQvmYjAdDma1yRMBh",
  "key12": "3K34UhLSjwfSnqCaE94WddXPdJF9uQRh8mbbQapcBdue2a7PHqnFK7oMhR4eia278F128ojb6LuTwhKpoCytV85L",
  "key13": "3cf2LDdnA5vPS317wci7kccEwGPwmWwCCR779X7UHqnoVsyaSNyqmSa94pru6FVSgX9W7sr6nQYppqqbR1SKPUbR",
  "key14": "7ShndmqzTzSC9cnagNYyxyTBVHnwaTKWpCiYNuvdXiqi87cHvQBDZmXy4zetH42bhitGafJZ3soqr8qwy4U9QQy",
  "key15": "RnmNmG1nMmGHLcPAzCsWuJpqB2tEwNG3pPo3vRZKT4kzxkxGVCQiBsDDSLnLVZ6sfnDB4UE3ufZGScbUoJo5VA8",
  "key16": "4UQJoJQinUqRFQc4g4nSRjgtwBcZrFvQGg7mZHeMb7Cya24sXo7uvyd9AsGQLiwNejGVbUAdUAswtsZvYUHaogXn",
  "key17": "47MPfjTbm64UqaVBcxZ9stv4ACbWRjrrHbFBatGWS6xQjn2UNFXVSepmyfyms35fe2yqrvG8MRJjDT9TYgoXsoRt",
  "key18": "T4ntMJyCRemXfVYASiMDVbL1kjU1pWfjEu94Z8N66B5nRXt8Z8XoAxtK728m5zEF3JKuBog9YzPG3tKWm9fJVTZ",
  "key19": "KJybXbRQ8GDrBB4rwjqzCQNp2CanscwyxBBx3cd7SKYVdNobqTzv5EL5Xm9TUkZ3JN2pAswQdTLmAtebYV9FCje",
  "key20": "w35MJRgdurwQi54EB7ruTAFysTiCsjwjr6i1b25Mwk6nSBK9FGSt823uk9pxVJKtE1Zgf95ZiRXMQ5LtcPLnbjP",
  "key21": "5wjkzE3dxtdJhuetC9RJ54agAgN2KMoEVei3R89rWoKsWsovkdFfS5WfGtZ8k4nRbmCXA1TANHDHek5VQAZ4YR61",
  "key22": "4NSKdupG9FCLF482bzrbU9SPm7Pa2uRDMwtQuBQ1ZWPBBSyUTVWSxy9wngn6gMQPnXMRqVTgrFu2vf2b2qQGEGQi",
  "key23": "LZcnrM3auGqSnuAMi63rMVG5ZMEPtFmzfUmTzvfNg11CmxFDvw1XhwypZEbnb4VJLFJpAZyEeb13UQhrZtkWj9u",
  "key24": "4GadtxdnqQTe4VM2uCaRXeDMtCDeYCVsYup5kbM8e4WhYEqeW8gCXM3Hu77Jh2isdpni8fDNKjoCK5qgHRUBCUsk",
  "key25": "eq5XtvmS1BszBj77JrG4iTzY9w5TJ6SGsZoC7tbwGSn2fY3g4Ag3Nv7yhsdKQApgJvJzyeLvNLfirVZBm8z9f1X",
  "key26": "5keowY3cdxbuZMB9aPoUTCTE2zFDaVihwAWrCvhJgPjVteSeQiaYqENrCRQi8dMJhPVzGCfbuga5hamw7uBZxdC8",
  "key27": "3R3ouMAet8ExD1rRAPFtzeZfgpU6wGW24Bt1STf6QEa4jAaftzJLc7unvS3SriCgnZwrhEQ9Y4wZC3fm8u8hGFKe",
  "key28": "4q1tST4iPDiNjpzKnKFGTCuuk63Rd28h6MtoFTtYiEa37kwTmHKjvhu1eUYxR4dGY6JjRxxXZTKzMEqDp4Vw3XJJ",
  "key29": "3t3ZDW82YPnxBhTdG3LpCkd7rVrkvhPouAzmc6DmEn1ZTGFaUmneiEzQqnmrSFMzhBgYJ24pjqm2K7AKrvD9xAmb",
  "key30": "48bU842YseEGJn14PUDPfe2fBAejq3B1dRo9Bj8bT4PHNecC8F4CFCW9LPemzS7f4xxRADYcm6EvKFz1S3a1ZKMx",
  "key31": "3SYr3JF4H6RnB7tHK12Y8k8wWih41XMWsdaUM2dAAvHR1vpC5RL7b8PCXNrGK59cC3bV4iJrnRBgNKEFYsNTpKPZ",
  "key32": "deSe7ZQ8KsJThe3RXRLDoeyLw5UuvDhJPAxE65UajwzgXUTfqW9mkWssEyobRvz5jWm4SkS4FEXqfJQKu8Vrvx1",
  "key33": "5Lgc7Uu1HY8EiTsGNLpMn81z9F1XsFzCpjC9YpVM6MH1mMEXRRrkpioC7rLMzSoW4QNAuwvQtAZpTfEoU1y9yvjg"
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
