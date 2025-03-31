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
    "4J5dMwfG2mUoSFXGiyfaVRnkAsBjmhEQwhv1T65PT3G8YsmJrfPEPqMNP55nEzG4PDEjzFCBYugLBi35qd5FBHks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BcLvCHumWJQGG4se6nyQ85vDXqYeu86UFmdPoLzhDwDN8nSH8gSTemwjyVR3e7F5em7me6RnDbaKSmkjkr77SVX",
  "key1": "4VtcFEhRuq41gtPukmzWRvCkR25aHPzvXe2SU3nGDhtQ2DNBcZ87x21u61pxMx8UUKEAKzmSvBLEeGbkaNxzQodL",
  "key2": "wxUdSZurMH9TfbLEqK1yQTne3mqKsXYfKgTWzTFRHf8BePHR9TYhd6sgPemVN58KoE2Sfsjr4vc4f9enC4Mw2L3",
  "key3": "4aruJe87DvhjvuCjGtj7pgDPqJdcRVKqLcGoiSxMwXfnSKar1eXL7JqPFrfpkdcwgzy6kAwNTKCLxtL4thnLfXzy",
  "key4": "5FeJBEZB36dXMsxzq5gbfpx5ds2wE6AybZaaD6muSpV3oog5t9MpP68PMAof1sx5wzZYgW7N2CLS22RviWc3zGKn",
  "key5": "4oF2AHwptLWt6JYiLo3YtW2gMmsKaWjADb9VdNkCLNBbaTsNX63c3b4tLbLCUHmwiHzVMtD4am38eagJKobZhjk4",
  "key6": "XzRgqpm79wUfi8WpCEqusjGUZh9yTAJ7M8tJuV86L1wj1yZ9wgaxjn7EiHQB47VLZYNt2ihtoM1gMt5GHifhDKc",
  "key7": "49Aoi9wSNJGkaqAGftpdiUkdFHfxYtigUGqyQuWjiNGid74js6ZiwXDYn2pXDcr95TxfKxkiQA3PdEkVLiv4JRFJ",
  "key8": "3nqDC9mbcyTqX2MH3ciLxDhWEBmMN8xgBL4ASVU2HGBEQNchBtiwsNwyRuepzM8gBnVihqJEibkYEUazaFeuNjzk",
  "key9": "39Q6pc9kFMx5W53XCppJQYdZtQuLb46Dg5MJ9kMRNSmhDTdjMJra6iwqo9QGkjh1yQVwiV1o4Y6ae3JW46jtAq8u",
  "key10": "4GtSvwYjmNzj1XS78Bxtqwjw7Fb7pkjrfSCxke9UxgaQdkXK5xKCywxqWxx8VHpQQKowhwTphriNA2BD4aFWt4tF",
  "key11": "5YdR3VaMMt8ZWNsoPKck7bQHL6pyWaUGbu4U1Uxq7Bz8Fr1rutFHCH1vUruW7DzSoRschTZE4rquWWkXSwyUqbfE",
  "key12": "3eoWKeX5JLyAVV4AgYmaeDxmgmuajeSSgwCc7FpVA4BGF8gDUPeS8oP3NuKRXb2keK321nhSwuUVLce6bXqJMrb",
  "key13": "3yFbPQXb2VPnAL77e83FLn4Xeft1nfvs7ZdqMdcm7KRw4VDTFGnQr5reLRxgF79JzZegMDkXYtMtvTJgGr1fgwnx",
  "key14": "5yeioN6Htfd15jUs4CsqPi8rxskgAR9bvXcD7LTfXHBbFDNvDFHrvKPpyzspANi4GLJpUAuaYK3F1NyWFVHatBzf",
  "key15": "5fmt3TzdAFtCkfM2Rnoz5MBetsfzYyizeJv851gFfvP1xktPUE68WofsdWB2jweDHGVaJ2AeFpyERoCQ5DpTvcpM",
  "key16": "21PzA547M2w3WzhHUjBULakLXkbh6iTfPXnZGtDXYdD9ZZCZiin8VH1arABGanMU3yXSvwyXsqM7Lwo8kAfQSfJa",
  "key17": "5nYVNCKHib2etVP18n7THTWsnD1cGnvJ3VHQHhXMX3XcndwyX5PssmcpqRxeYAGAcKdAvwhnwBkgoVjrdjbEEJ8z",
  "key18": "t4w9mCyhNYaqYrSNFGfkJPDTSjLC5DrYMc1RpBmG9gNAiZ3s5GWZX8BpuCxiQxVhpLtMNt4dWFAsEvk8WnmYtHw",
  "key19": "4SuWg24122DKCF513fnkM5ijc51eMUDQ7CFGLrXu9h5zGDtzXdmDCJX87iAgdxXCXJTVBgo39ebj5oFURe4ZFeQg",
  "key20": "55BnhmtW7afp3FhRKmur4frkZwndUPnFKXp6nX3mSibqHVbDmfGsLBiUCLSoJQ71quJu7WX91nefJWxPHed1Ub1N",
  "key21": "562VTELHwJmUREZJ9xPDhXPoDyzK13qA6V9vdRvxut9wDU1gNLLPmTACUcSDu3jF2pCjZsxNMCfbUasTNPb8EqFB",
  "key22": "5dCfmzePpN2Rjzibu1rV4s9DD5wyHTeJjsGKnBsceEKGD8SgTg4SPpx7tP9mwFiLhgqo9iSUn1BLvAwumftVqcUW",
  "key23": "3WUe37EFcUsbcrVDeFicrDhuGviF6sfDYNL9TWgw5Un6VttkLqFzXMAySHLUkLaUnrdFGPtYdZWunFBPMPHSj9gw",
  "key24": "pDcNtadfpiqRG2ZE3NNzeUhhBECu2jUHmKGDUb5xjHEa1uTng5pRGMaYkQpbRPGeZnt1mBYZq3UekiHbjq3ab1W",
  "key25": "5pA5D1Py3dy4GeEuYULbrRk6CBiXtybMsANw3pUHv1uNeg8bEhFXRmXJ7rB9Saztkh6oVFQumjh8kUmRwVPnC6wf",
  "key26": "TEfRJghR8CAovYqz1psdhJ5vMXaaZzRmVoCJR4vhppFkmjgdQ566PhfmHiUGdfgks618kqeJ3gPfxBEnQ27ihyZ"
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
