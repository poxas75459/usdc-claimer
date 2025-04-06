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
    "5BfrtKXuDW6FtFnTKjLyAEeWvZ7S3wYN3BuBu9HNopzjFZhU3Q2gaWofexrrHoD7q3PLamCssJiQuS6MneVUN92Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TrNdaqJoMLZDTUuANcUQP6o92zjTUAfJJfvAp9JAm7UiDtbgSB5XmSsbug67pA8b8eSteaFwqeJPK9S4zRVeAY",
  "key1": "34b2Dah9ZgD7cCgeq5qAP1EvChprSrG2XKSvBrnGJLLVEsxooTS96TPQfiEQSbZTqFJmixXnbZD2AyKy2CHLHkwX",
  "key2": "3rbqEnCvGZHyVUotXpHBAsdQwRAZi4SHkggkAvWVzKdRzPr8q12U1YdCC7PRixqdZnp8dGBsb4vMvmuai2tNUF6",
  "key3": "5fhLeSUMGLTJU65hmqHiu96ce68uv37MULnkEJENqFfyRpr8NjCQsm8yFPSF8L8DrNtivwry36KacNfkRFFc3btt",
  "key4": "3sqaBzo5yuHq5rA8cug22AvuF1ABpFANNQB74LukGzgyZnqTNnumLSm8uChRyX6BT7gpAuF2J3vrGsE3qZ7xEEEa",
  "key5": "4EoR41oPiXqH2z5eGgFFR64jtNnKnmdiiAEuQtvzuym4tEtbjvCueeJ7CTRueCSsHqXjUGsQR7mBcDBWD7V2Tfso",
  "key6": "3DehKNH6QqKMkkQzLqT5zDjxPZQfxdT3U3Xc3NbjZG3MRo85SvkUSigo3EpBVQRXUQbNs15JRV7BQL6igYxiEvo8",
  "key7": "4vDJvsi5WvFTb8T8ejgtX4RXyEobcu44KAPf7RCjVay8pnAzrRhqfHDFy8oqgR52QUVJrQ1nPaRqhkX6UTnShPxd",
  "key8": "21NB2SDSq2Spm1dchDySS2hSEUcaw2JWsTsXrg3wHUBxwaUMgcRGNwREmK13Yvd5z7db49TVuXC9vb9oDKuB6gkA",
  "key9": "5AwfLnDFvPDujE78MziyqV3BSn2wiPHnzZuTvefX2Mzzu9vf9HuZvrXtJDf8gtshZW2vqBhRhU3kQdhqzCxLzUD3",
  "key10": "4fmwGUkZq5sr3G6AFSFiVNbv2tdoeAirELRVkPpA3S9D9PLc1K2zfC24v8H2Bt6Ge3VeZUPPzfv64DhG9bxYYL51",
  "key11": "4XQTi8XWN7Kk85P9E9gsNbccKDZyFbu1CWdFiKLCrsUr5QKSAW2weSk7Y9ZN8xssBcqgANaBzgSV66XxjpysvH1N",
  "key12": "41e3V96kXSYmzKq7ZL2g8X9y1LPXBjudhp3VZe6HpxmqR7dV7fX21hTnFLVG6T5H4SZYgGK3PGbHUTAC7oz8KhQL",
  "key13": "2fmD4ziYhu3WFecgPNT5zToJpBx4vEjdS1n4qLZKtnazeiytam4VyjEc8WFURSLsxuyPT4E6ExjiQjDoVay5mHY1",
  "key14": "2LkVumTViNYR7hU9JiWtymCSXwkYjATsa16GwZwZwr1Rq6bjDSGVDhSPncq1L1qhbyfi8oi4ZkjwLMchCQrPbgCY",
  "key15": "BHR6oMwa4QjuNQyeRWGzzV7WKhEzRHQyASmLNxWEEVrsESKceeeBt9ggHEPxC96YaXU9eDvsn3Ld4cTGshStkE5",
  "key16": "3Tu2GRkxd8TbQimsKsQH5rL9DGfa5sMBfS9cJCEtx19BU4u4S3rDRZCdo8vZoa8kUCECEiv62gYHmJ2TADwciPg2",
  "key17": "4qGwevN7VkCyMDuxFZWB2qrmu39YLSxLToiYSyGwQzXYqbEs3shMj7NgqhfsUoXgJ3dQnSmiKNZb8bNui7jpu8n4",
  "key18": "6nfGnfk3JgTA9UVEBi78tyzLeqgJGpUwKTKK3rFmzwX4tYQLFh8mr5pBYYLMhYiyt8DbFJs9vfYQ2YtrvCQtTxP",
  "key19": "5fRS59Ab2sa9BBtyQsC5JnJPSYhm6Y2qrAog4jgBXTgHR5fu9HWfquwmqorKviFt2YCgF9pSJtrNEybQACVNMf9",
  "key20": "3yiuUiiceGoGD4NVwhGL3CEptZx23G4uFe2DkRQLTPKfQTFs9MCPfoapzGPbcU93KsZMjsvKsUjs7o9r6FR59aLQ",
  "key21": "47E4rgcxCd1gUjteKdnS68t2DKzdarHZUka3RqYowHDhX1zu7CeqmhEWZdafK59syfe56di7tf7Cx7pm82by7kh4",
  "key22": "5aqMd9gnsyQKFcHYsweRfyAQPfnb33kMn6vaPSd2UcNc74REutaqDgmz5gP6bGc6Dn3WuM1YqbZ1zRooA9JwCvU3",
  "key23": "ZGMYddREYMHD7aM2BbLzGm6YSKqmCcPdQZ8MbSgFsoRXDKQzmquC1ahdtM2RnxXDo1TrayQPiWWjFWjHNJjMopf",
  "key24": "3JVxL8vy4Zn7MHf1uULkF4LQE3KTayJAxjMd3a76F1JJPrenRfrB1sDWjXscz6PrkssuzXgU4oDDqDXKDAmzRgvt",
  "key25": "3wP1SZFJa7gocYAA5jFZ4rRNnk5KmWudps7GR63XSvWibPDcv8LYStUDEaEmV1WrKJKxa9oUfrTCQZFyf6NppRVz",
  "key26": "452LCe3HEGe8brqKM9fCs5jqX91kZv8TkmQ6gNNrEPedqWFxmaEst1NwP4QnrFddTxw8gLVkNwUosWi813K4vBLm",
  "key27": "4u2KiYuC6Qd4Y25ed84GBmEwfsQUdPKZxLrnjE19Yu9KedLTHWrZpoBcSokpzZXhR92uiYHxH1ZuSx1ecavLr9kx",
  "key28": "5wGJHFZzVViJM1tU1YxU1dCb4vjpAGMsjLigAxtpM6psfnuCykHeVaHzm9xzUreeer74dPEi5YAL8hRH1WkZy3hF",
  "key29": "4hKpsgieMxYufck2jfGaDWA1woQMe4Wqb9YjK7wwRFVeE7CLBKDCPRAEH5L3Td3y7YBHZKbSB4jPpXJkEcV6ZiJb"
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
