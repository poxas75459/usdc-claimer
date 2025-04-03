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
    "qvyp6wVBjhdbtQPNBfw9aRY8xcW76V8nsXFfGynpsvoSw7D2zM9ubimkQxcme2zb1id3JSddE5tQ7L6aDT3rx1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ewra14nANWpfGZUbQENJVC1h1NbZTc9RcExu1MVxroUQRUhFiF7ocBF1VeVNxoLgGxZkDEmRJV8up9df4kBMvf",
  "key1": "3XM2cG63dFUk6He46CNWQEwBW62sey4ZQzA4SwceCgunV1ASFS9rprUHrnJS7kBZ6K9YuS47DPi8jtBk8cRk3mfv",
  "key2": "319CZ64wm3Krg7X78FvKuTekfevrJXQqkeyGs6WFJZsZ1AcBL5pjgXtJSQFwuG3gk634vntiyPxuRpP2kUkPJrzf",
  "key3": "5skxWxxZXWRCoKspycfXGLF4eMbX14hvjKjBYgDKJTTYwh3fWe7MAhqhg8XDkK8vGWURMXXR14TC4GqtrPMNQ3NV",
  "key4": "2iWLEq5ecBGmpgs4BQf6qgTUvDSzp7jcjyiaB3bHp2eSCXuGgGRgzz1yJNxd35tuf9XuYLYdGMcST8GYuN5kDwF8",
  "key5": "27TxycE5z5cPRmo3NcF3dYHfw5Kn5UCreArKz3yCkRM16nwX8WJvzBuJfanwmemreiq2ojR6irPN5VxYq4vJCT1r",
  "key6": "488NGxyAEZiLGymmmBNxdoX6fu5A1kXeEdSGnoNF9FfeoF4wt6aa6s1SW7s1qzGcsnMfiipaUcgr3Yn9yM4uGBpK",
  "key7": "2dwbjt82oG4n3KmLAWasvV827t1mYD3Xmw5s1y8fMd5A8gzKbTqRfz1oCsqB9Cx7ufWN1tiqSjpjjq2ZSqBLfY3b",
  "key8": "2LzBj97N7uMr2MWaa9Z2Z6kTGcKWLHnUz5QfNageczWWgioVVkutTsfy7bnu5NktVkw845B1ZEYoHpt4eBe28m3u",
  "key9": "4tNc7YPYLDoeMFoaPkGhqepcD6refCitVV8NNGHMvPsCEDJM41r4JiG67EKs3g4CiMHRAUYuH4wu6JcHj8ibmU7c",
  "key10": "5ewDxPoCKEQMNnQ1VNafohJsR5MizhWJGuBXdeeaxRDkc74nRKvzFWU8RTFYWG7VUgWX2XY7hxu1A2X5pC5APecW",
  "key11": "59cQvYtxup15CWdaF9kpRGrdCQLYj9yS7rg6S4QjRNEK8iLbCeeXfjxriFntivZMQiy6P6zGAkvVFySCkPM14ebj",
  "key12": "5vifL2ruQDdZpS8B9FsmwuF7o8T3R2HgsysTCCWqzfcLzdufNRf6zM5S573H162gJoKrDn3KCF8SyMmv2J9GQGRa",
  "key13": "2uB3j2mXJYcyqUdtw7nmNLQ3MpfpryR6ZDxbv9cmZFrTNXz77PASWp4q5QeDUYsuBNhnKAyLGCiPer7CvW7yrpaL",
  "key14": "2Y7ZCjeyN9zkSauSvtaHhg7MTsdE2oqxrGXYDBePyZHfpvAumUnfjBTWxJTyM78YBGPEtUCznmDndg55ii1WVKeu",
  "key15": "5cmp2BakAJKYwsQMaYp13A8oGSEq1MuF98R2segAM24FuF86gHatX4GViKq1TYSSZXS34hXtzAi6DGBMTWfFjwci",
  "key16": "5MM6HWPsofv4NCukfBw9Q7LHabLyBi6uYnKdiMBNJ65g7NBafaccwBeosEXfvY7baxQ5LAkuvb4zyq5YV1biiBa",
  "key17": "4pcj5Pywxm5dpBoujvcxKimS31AW3cmVerdUFa5BB1W3spiUn5EBugiBQN7XkQuBJjyAexjd1Vjao21i8oxBx3up",
  "key18": "bY9RejGwj8AVSCgvmwzcCDfttPPiVdhqkKLzKCvK83qcC53vTCbux4Yt45x6QtdFjoaFkTUZLPuJPke8qQvaDCJ",
  "key19": "4cPn8YYvmn4tPDWtQwiPeveiqurpg35pVNFyUW4hGtySnx7MXbVWapCAzBj7uE4vweqW116ZWm44FRi3KJz2u76w",
  "key20": "Jxp5PGAoSH4kkvToVYn8ZVtechgY78KtdWcUDZNykAV1s7NTWBqxKW1v2pn5d4rEQ4GcPUQW4b84sk1B2Kqub7R",
  "key21": "3g4Bo2LhqjxD8QrJxCarkU2RAHfC2SxjSTLb6fewynqVKeJAbpNcBuMX9n9rxHbyXJQfoaZCwyvR2mGadWgVReGK",
  "key22": "2yCRsBRBxrVwhwms4KciScPrdNyAXMb42PBpTQ3Z4dG61jYpv7MryAaB4v3nWBexrWYCbS326wStKew8mVGQG5fL",
  "key23": "eFwFfsCitBSAte8LXRgkeUpPafx6xmk3Ex69hMMPyJSosgRXesr585VpfAQ4J6y5vda77Yw5ntAuCxDgx8asWBj",
  "key24": "DsJdzD5qKdDTzRrKGajJ9pZpmwH2zUuizzt9HGBcNY4y4Cq58uLZuJZdsPYnP1TaLmdYcdE2mxdBmiPdz5jD22a",
  "key25": "nKWPqggghZbvn6cwwDQpYxkLiVfX4CojkHBNT14RiQFH2XHS14iyBuj4Ahd1EzBxUfa6wdSUX7hPPhqfGhg7odF"
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
