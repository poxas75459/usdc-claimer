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
    "TjnXFU7Vnb9rxJ5NCbZDRieGZ8QZRfsTw14c1bbuqmT2aCjiordPrKA8SHADVyhbj6nD6zm1EfuCmp9hevahtnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oW3Zwehekkz4m68iYtF4ceSJCAp4a4PXwfeMptMHDoqmZBpRuiv185M5maXtbXnaLmmmTHBY8hBk7hdS1iZphmg",
  "key1": "3jqPC545LjVskhAwK3XF27uCZX5LCF7FbKgF16TJw3DURgUywH84DxWeVR2ayavmxqB87NuQcwTMXRAPjEXhH8vW",
  "key2": "NwGmv7b1fciSHvQkgujaw5J5VWyDCbyKH6Ddc8uswXGJdtiMUnzb2z8qPy6Jzx7TMBQ4Rzp9E6QwJ2eFybsprgk",
  "key3": "3W2Hx71k4WJfuUqPhnC6pDPrco4vrnV2kUNQ2J2UHxWban7GTaWigoF3A1LEKMpZ6RCFUNNmg2C1MzDdccGGffAA",
  "key4": "4kuUy2gyhav2kNPcLfxoyJWNZWsob4yXvtuJw3PfJnNNoxiWnqSEGrTjKnvkPEmzLycYxmUffsLtwfHqTn8i65Hf",
  "key5": "4VGncAwfCNpE5Gz81JU9GrL5mEk4UvSasMRJtaHfcq6ewzQbe8sfAXEMzhYyvyAaB61JhCtR5mYonF15fibn3JpL",
  "key6": "2yJRiJQ3mbaYJVzgWLZzm1vBspGUCBibv465ELrxRkgdGeC7egjHxKc5e2R8KeRMVP4YCdAD5DVeCcT9iPaMxYpS",
  "key7": "j7p5yH62o455FQWQwq98v4fDorecUDTHk4mzswE9CMCSYVV8EZE3KHY51DBqAKSQpKhqKNFiiTo6tqEMWkMjH8x",
  "key8": "NRAhsoni9tAWC6B9WVQ4pRj7vLX69ReCjJAqXSizMm1oofmttJ8oxU62urp4ujLm9MnXEr84LAssE6nD6n8MDw5",
  "key9": "ZBxvuxBweb6rCYswGKT6ANasMquZiEgCaDCQGCiUrL2yNcH4tYEEukWWpqGckr4fEgkEEwuRFsDByAaFc89NrQa",
  "key10": "5eA1XhnRXBP1TKrnq3QGk67QiWav66PbssVRkonVFypEfxfauNuPEpU3qnUfaBbwxzVHcwSGxazSiDCEkbN1nCzt",
  "key11": "59qz84xwNgpN6cEHkEvyWRjHJaxXLJ2zcRaneLVoqXjv4iNJn9urhNoqbCNC6zqmubmKbvqhVjUYesAdNBt7rjV3",
  "key12": "5zZSrSH87fyWFAwEzaTMcDz557xhL7QswtBnGi7z8aaYtg32NieF3mLCNpbZDA5gcbYbvevMP9bh8wVs7F2GKwLV",
  "key13": "2pC6pNBwhUXhjAqUKBnq6oFh4gNHNMzVXVA2RyFe7nKxxEETMqixyKqmbhsdEY3YRnWmgNojb1PKzAkiRp2jmaDU",
  "key14": "Av93bjnmotTM5qvcb1kJjFsT6HUJ8Qd3CuAroNybEhnJ9B53gUMnkUXedjVVP5yyu6dCwXFfc5oxNmeF4tZww6n",
  "key15": "stA5KZVf5m5mvg4iYNBjBypPdKw8Awa13hBuWVKb2cjsnAr7U1twqgcCSm4LkWVTApnnUJwDH9LXV7AwWxW2Cix",
  "key16": "4djxSMSTXHV6JkEJaqcNhXyoqpgCYC4fn3DeaHJojgNs3rK4njyfNcCMdawfLNGDidKf8WhVaofmGv6JkSrdS6Hw",
  "key17": "23PaRCxrfASxt397bPYUJJsXghk3e3EJMtjYBT7DmTatkfaUqAvDofZWo54dnL3BRjG2rE8tvaptxemLC9xufGNg",
  "key18": "33r3iaXhTGYw29VdDo728LVE9h1Rfu8ufG2HQxyjUz21iEUxiakkYCEEVsbwMNwsyqAB2SBJVBycanmTH8877S15",
  "key19": "cWLo3NnDWrQ912iMMp37wWhhvoPrFuaj3yjboSGdqcRhRTwP7edZQMs3BAof1gSCGkRss84hKMRTSSLTV38ZDiU",
  "key20": "5MiCdKSPTLvVdj2L5ekm31Y2bXEfUQEFn6GuRV478FMbMWdS1xY3723d5gVRopxAJhfMtiPBtHi1mt6ECxtE85rN",
  "key21": "3wyaaEnMmohRJucT2EQVHrwFAwoBnSTpsMbRCtJQdRE445Yda2TNjS13BPG8yKnueQkhTd8Ts7boXyp2mN6TegaU",
  "key22": "48E5bHeSRtwtATpat7PLoMye5rMX1hDmw3v4M799g1JaqWrxwX6KAzQgXXFBptMPzjenaVbc5HVF5zDVwDjPYhd6",
  "key23": "3UM9usGHDoJnsPgvmuxvzzNTW7A58YH1rcGyUngdsHuqfKXuz5FB2sfdpRKiDytP4WvyicaMEiRkrxF6m6y1WZR6",
  "key24": "eo366LuZdhBsCEYoanLpWirTsQsKUjTecVKDhHi7492XUbCanz7FQLdgs7PPbj3i65KUet9AbbbJ1dJUgqM8FAj",
  "key25": "xNGYLMtcpGQBdiuFNJz7y4xwoqhSzcxueBjdGmmv5NVKsvRVnUcbmML7pNM3xUgDRWABAt1hFKura6N2jFkjiCC",
  "key26": "5YBwPg8Mqn6wSpjxPm49nQGrGMkNsYsMJCUQ4K8PobmKwow6dCMkhUQQXEBNkVHM8skpkz2jshEzE1cs5wkgLTUX",
  "key27": "56Siy1VM7ficnCUkM6SV9wNVL1Uteuwas4ixKcAgx1nMtHXf9RB67KiLVsX3iUxTDYFNPYysYMa9ci1PmWwb48J4"
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
