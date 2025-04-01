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
    "aDEjurRDnJUcALVuL8Tvv3T1ez9sNHUeUhE4Kyn1iDzRBnqqCxvLKDSpNiPM8MDsuRFn4Hendx6t6yNvss4VstA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUkw8YB3vHVXSoK5xRd6zVbtR29Ja5CFgp9rf68twsc9n2cHE3Xy93qa8GVyqiB9fhLNSoDzvmHz5koABiZiY93",
  "key1": "JK8U4T9BDzbsGYrUcMMuoMi7yQae3qEoS4pGjQgcSU5B8KUHQ3SPauwWecbc6oLVzeGTkCQPE4tYZLKokyVoHT2",
  "key2": "5ZHFcUw25nbfbfGnSh2spWAJEJqKsTvKbkc2d4AKKBV6QuVvdZe72tyPwnHUNS845zp4Qa8WVAN9zjbTjzRmnhhJ",
  "key3": "4e6dPuXNifxcvhNKW54XxjWGVHFecfG2vU8hrCcJ89JXcGk3TefSeFrudddyLoEFaPNeHC5KwFT5NKGBsLZaQKDZ",
  "key4": "2fy96gsDbwoxXHzYDVwzas8tBNcxhqyUyKVJqmbzt5WndaCGDZyXxp9KcYLNNRP4qcFUsGVW73je3BNAMPtEmbFP",
  "key5": "4ddNs285XMbSjUypMbS4U3DHQFSMbWXNM7MiF1JogR7RPrbDF3WELUXyKqgvpuuTkG7cqPTea7YFZatnBeu9rV7J",
  "key6": "213hGZY1mdHUuCa2xUs5xAbuZtsUjiPfWuiNEq1G6YRwL2SHhhszwq8icgvW94XwAP1n87TMP9ksCCGQmwWq1QdB",
  "key7": "549uB5kLuVeQmkqeuCYQRs4ZfSg5ngfByB5o6YSKbghRxrWVHtc8bbfMRpszvraL2h2Z1WrqG6y22kkW9HQq62n5",
  "key8": "4gohugTPnN1ygCfATkF63ZUtSM8WFgtQLYuWQqLr6dhFbXVnzq2tB5M6qUT4yggz5bUUKWKgL8MKfHxUkEddi3xY",
  "key9": "4VnHJSP6HxiK9TFdt9b3iwVF44uCtL4bJHJGFj4sZaoH2bxYWutmLb9MobEWDbs53eMRQH2qkJr2Wud73xdAHKUu",
  "key10": "yk8C9G1BsBqEgsPEooYezMvRURAfUMB54apdCFv1uHm8gedEXsmGd9yxSYB7gALkEqAwqTynuc4jGNbxsoitaWy",
  "key11": "vSWVGP2mxRzwtwwoCcZTW4AYbH2qX9rY65K8iPw4269SSeK2SQma1pdyQfVJMaDRitxRTktKoLDxL9jFvuE4BeH",
  "key12": "3jbKfJe17YkvpxSn43GnS6DEgCXrzkAyN5fT3Zy3AZnY2UTJeX1eBmXRaLgbDKNfFML1G6dsg44ydyDkuToRRgrH",
  "key13": "63Ez9J3eeBShw6BZN6g4oUpsHz5j6zmYQ9iFkLjt5hh9gq7fW9xbmnmBeWxSkWMbdySvgLiX4S87yiUe2V3RL4P8",
  "key14": "5BDsyyQwn14qhLGyHwM8SvueHYfLfJnDq4YSU9Cn1X8W1bEJrc84FZNAyPWuep5gvux9SoFk4djT5YYSMyRmLECY",
  "key15": "2EnSkwzp6Q7eQfy4aCrictmcahyPQJ7pHFyj7iiyDXtVPYGZWa2ppRMCADsDRaopSfLXRrVyGeA2AWnQdfDZJmqU",
  "key16": "3z1bRbXHTvt9BQe5GcCjGyM6MVSc8VqcdVnz7Gsos83q3y2RTVD2L9xU1aqCow5J8C7BR7KuHhSrPUdjD5cBJZiN",
  "key17": "3NUtdBLCYMvCYaNVnt121DtEwQZKNu4dw1pCTi7gzxQgMt9CNvgBKV9sWa6tZsv4ZkUyakC4KpAV93U1oJe79pA2",
  "key18": "5YnqYeXADVTS6WMnUUKxPUqeG33nXj4iXWHDhTHDXptYFFkS2zgzzoHVBqAYMffzh5jBHnN9nKukc4YwvD21z9WM",
  "key19": "3QFcvexiGwX9dXXP4Tr4NKvYfV48FyBrcFhPWD2tc9MjFY59tAMH6m9AdxErH1Q4G7fGXUMotWqycoKUbGK9HntR",
  "key20": "4uZQUSGWxqtx6gKsodCncG4q6u6cryZu9GaYmyD97jx74Up7sSs9yPCRivFdohNhSFnLhc5jpLLfex8GLkfXkdok",
  "key21": "2TPYjhDHLynuJtSJHNUAC8HijkDBmTbLPJVHvn7Qtag7UQSL9fTPY5mZUqptLL1YwFTeyumV1LkVD1kX2psh3AfW",
  "key22": "46cSisTxms1DmXaJZsaPrKHhEKk1XVrgEcXVhEsTGfbRWHeqbeP5gZSuw3P7U9QFq7E8J8ZsgSj9BRuyz7bEKTE8",
  "key23": "acMBePxYwvvduwjFkNAsTfjBRMZZvZeRWgmg3UabQoky5oqzdT3u3M4yoNZFWqr2DzjN5oCfCUWMEA3NsCj7x5W",
  "key24": "4aW2DVS3gRXW4zbhXbPJD9YSAqKtC4ER2ndRUDGGtnfuLq4CxxdkWc8EVwGUT7YrjDqWRkFjPu4VWijdJTuRXACj",
  "key25": "22CfVeJMiA9RaWKGnem2hMm8ih2AoLQLa9TzYpPr3svXQpuskuzdB6YTWWHAvdD53Y2eDD9niMPG7ayaNiBxmAov",
  "key26": "5aCsH4zqmRNgNCZLpCkP3y1uJMz7ntH5uu8Sio5HaFBHemU8PruMo8Z7HgD2iVBkHCGNEAFRMkwJvTMyBh5trS45"
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
