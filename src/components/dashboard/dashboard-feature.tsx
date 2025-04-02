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
    "2HiFjbkZEb3ZRPensouUyKmUpnuq5BJTd6R6YkvPeBLHvsyt4hL5rwoMdM1rhBzC8b3RS7W7m8hWXV3jydH57NDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUM3P93aATYwokDw7G9PpZ4c4bspfKouqpdzDTwamQnRXUF6spq5ioGH7craAjB3TcZEWadb9yJQyojoZ5b59Kb",
  "key1": "5VZcbSwkytbc6bnRXHA6XMNDNd8Vpx65rhrDsu1mAvVjZGYAzudpGaU6VHEd71t7XJY3ah9cnbkMzTAp8XwYwEKx",
  "key2": "2ok5eZzJXEXd87LY76tQCGad24NmGtaY9qo4o4noF9TQgGc6hqkuqr658vpu69yoHZ3qaMjTTzXoL8813wrhCLfm",
  "key3": "3pUPkfbzGcrfQooAbms5dgcTR47ueQ3Aqgt5FiXaCcmsm9o6eJV6GDCW3h82kPqpd65hQUomzavLaHcPdiMZ8fbo",
  "key4": "447CGtsQ7W3uN3h4Zqgb9ZKMEYvKtCJ2wiTDMgP7sAqqkVwCGMxfMrC23NEa3q24XuYxsFK5L7UN7SQX7EGYDk2V",
  "key5": "4gA9BzYLNx77m1zMGFwpgQw8yKW1iwdtavczsJbuzDgWZJ1SNnXvc6e9SJs9ERhnqYPAkwuuvuqUTc5WWzy4sRnN",
  "key6": "5ZtFqzwdUoYVNvqNNc5cxavkNQ3V66bF8VcqbCV6BNDGd7fMeZBdQDJHAnL5EDUq9H8kMCfusjgQikSkecMH9Kra",
  "key7": "5qLi65V2eiEd1XPG74xYNQxhLcdSidZBLWLLNikjVtZhC2TMCFXkMTuW6rs2WDHUAcFhfRyvaQPmcwARHt7i5qqV",
  "key8": "3ibXUkQTJagAEwU4NJzz7iqc4yPcGBdg33HArDqsfRKffqk3AvopGpYkK8Y17vke3aN4via3uVGABdr6fu9gp35s",
  "key9": "PMWfdngD1VNQ81ZT8HXKQkQECijjX4UcWAAysxzjy8LJvoWk68KG6v2SmVrX2ir4JyaNGJ9ztdAFn5nZJPoyEHc",
  "key10": "5i7ct2rW9uJhHiRLB4iogtxPKUDCHLozyH3gLY4ZGTxYmufQ1yQYQ9SCxaU5SEyZe4nwTZBr2pc1eLsDgZWXLwga",
  "key11": "4k16WtpCk7SQRXifGfBHbwPJ4ToWv8MgWrfYNwEd5cSdWSXQk2inmeNGcqxZoxSmxDVBhGzfojyik6ETWYvKAqo4",
  "key12": "47xDStiocKhrwCDf5oTVZSarzbU3qr2JrTcB97Tp8XUkLkP3yLTmUpLe64n4Sc7LgsdMhNwfbn5tFrAbZxK5HMsj",
  "key13": "3LQSjmJEsvPDQp3KzNA2qcZedQGiUhvy5DjNYUmT52PzcrN1qUTyMVWs4ku1eiwsQs2jH6F3ZgaEjYyncuX5dd5P",
  "key14": "W782n6q2PADZYNNBuctPY36AurhdTJDK24SKmMbZoMC29QUHKigwcfGvsDmGiHjEoCdfirrTGoeB2nnDRwGPaAy",
  "key15": "4R2DNB2wG6b9hAnkgR7pvvdM8ue8zoEPpnm3brmzo8o4cTugK8mPE1S4GFJR59beZU7JkDToyP6Y7c5QfH1Ms66v",
  "key16": "4AtD92qC9QJ43NiRJ6hYnxF2AH63Wtv8bfhtz63SNoQ8qpwfYNDm4Hv5YqJEZx1fAUj7F39sdxmAqVddk7VLG1rF",
  "key17": "4R2EYyXeXbF8UGoKRBV7vVcrQJ6s3C9xrEsR6mEMUNCRHd6g7CK6kzRLheu9ScYXUmWk5tW3mZo1PoPxYLGwdcJX",
  "key18": "5t7RiLN5sq2JYPhfrR2vpGBbhaWQb6AjKdyDE2ksnehPKBrv2o1PQpBkjs79bQgmtpYgUpfZWwnx4LnaaRQLneqk",
  "key19": "2P6vUE7vU5KQhjKYMk6wyQ2sNrDN65nm6DDP68e7u25i8itbJLoYT7P3SGAdpzoedN6SGEM2LQXiFGX37L7oPog1",
  "key20": "4tRL4T7J2k6Jb8tDvqShepWEC1hHifdLhBx6sBwmHywsRZcKZuHEY5NqLjpauMPrUBHExPWHmyerAjXMkE9BDzFT",
  "key21": "3dH24YkDRtj3KRdCDVTArijKHGHMCu8dER6ESZU7PWR7TVLkSuj9spU8o8X8jBVnnFUx4zVTiHXhTzV6RpJYc3of",
  "key22": "56muGG5QNyfBtxVQxuDj95U4gGkVmYxHjyFWHzepqDmQ4ezqEm4n1xXuayh2toV1fp1oquroRGtbu9DjxXtuL6Wa",
  "key23": "rpm4JbZoNMyaE2sd5iWPpHAncSh9yZ5LSbSaRR8JyVqKAZdq5LoRKpGUbnAzYCTJAvbDRd8T7wD6fSaVfwhAZTY",
  "key24": "3iWKwZWw7z3LhpAf3godcUXB3Ld5sbHkEhLuNT1QsBppeL1EmUZnLYgeUTwNUq2dTjEu8UAwXP9Y7j8dGsTS9vT3",
  "key25": "4mLNvJePjnJbKbmxfcopk6vcpA71tXYSWqWxZ1V4tYVUEYGSPTFkHkYQhpzenspqBn4iuYm72GYot2XurhmtbcnW",
  "key26": "1DCbY53K59ghByKTFLPjk3iB4p5bZhiLDehkNSeNDKzSwEa4zcPavb6fSpeWBP22ifBVnEHNjgwQw277LpFh5Fj",
  "key27": "43ZLdbozgma2tMaYSVw9yLyraFhCBD1CfZaxuXeV5qR3wpMQwDvai7W2CSvtB6aGgMPUWM6QRAPRACbMj2EybBfe",
  "key28": "3QyXPc3Ycvby3mT93nrB5QBHCCUSMNuvnc8rzwwWw5S8TpSqfAtRd5iHnAxjAW8kqxHoeZsFMoW1aoceWbx6X93C",
  "key29": "5t8rkjLmYNArbFWpFpsJT4WuQPZAvwrURfKCFxEWYD1rqo3ZjnSkiT5rkAX9CVUUN1K9kWg75PFD948p8yRzMQ2X",
  "key30": "4mZ3Mzz2hhb2g6Jf7XU1h1qE1qdSHXPexvQzqyrmuZJ9GRcqk8kQx25GQoyi3TWxUfs2g9LvPNFhy8G42aZpHPQN",
  "key31": "5vayojKRuiA4uwvfyUx3FCCobqVKjNK1tNyShDQsF8cf7QDGft16QhaUN49w1sRX97inVXLmBz9iVNbUdtHKMbh4"
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
