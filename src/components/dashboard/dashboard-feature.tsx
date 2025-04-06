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
    "64r7vNH45N94gcj5wE2Q4YU73Vds9kkBXYfXjVNmAt5ukCV9JVbvQHFvP8PikrapvhAETgvU6Vf99QBoegkEGsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCSNpGB1U9XAjLbhdzFcv7uubnhih1hfu7jyAZehTyMPR8kb7ASLouPF2NvpoVKkUxFNLraNAnbaVSQMZKav4Qp",
  "key1": "65AYVEcdSwtJy73fyMpnKJyqm4p2wbagTcNpyKK5dTbcBBXNUjJKsu8DNQBenyu97FxgauW7bXXDGfFsD4uGp61S",
  "key2": "5R1faxzUCp7m7grzvLbQzWjeKaC9awZXVdANCfwx6J1VMr1Y8Bt4184EtLEDwXZ8Y9ma9UrhwMbHMXyYC2jaqfDa",
  "key3": "jmuS4JwTsweGfANS4VSZBGkuP8tvFEMozJ49K1XWkZKMWhsbABMayU68ejigGh21BpvsSandEW3PX72XGRkPrS9",
  "key4": "5SENNmZiBuQKT12jhyASKgof2tdphZ7aKKnmJTDMHo9aDRipDMMs5EEbFY4SsF2kCu3pTWrzAW5qzr4FmCPxT7ta",
  "key5": "ZgpVSFCJo8Ah2qBSNyuUL2fVhgtqzcQYE86xjAxcUnSb8s2fvybcygtUP2LH5Uh7CwmEvrJDF3vwy7ZJjz8AS6w",
  "key6": "Dd9WS3HbpkjdC6MQtrxbvfwNUtoFWAi9VDqq9YGXgPgmaVNv4n84nXPQwB3y1vSm5vPprhPZcJDcHKVYKX2y5kR",
  "key7": "2QZSVzKaXByP2KGfUMHLpg3JN39avhDnEdmsP42BT3s4R7q4bctk1GThcwWSu4HyCUWEjfyiRiSQBVb8QJGoX1y3",
  "key8": "2Rn8uf9Mr1LKDCpwJ9auJfdfGKVGxoMDX6He6PHZi5qC3oiNe9gga78k8x5dzeapZZ68TumbvTeMTRsEjWZKu6ME",
  "key9": "3S5FZccGUZrMqZ8tGvYhD1hW9kkCyPGemiyM5pbacUGf4BhLgov34uqtnhYQDYsEL5iWuRiLLTQn9mYeHGXRjeqs",
  "key10": "5Fji1n34YA1x4p6STNCCp3aMbDsV5MLhb8vMoqzLbhizw2G7UPJCVEaP513WM8kXcE7xeiWmimebm3zm7PN9v72J",
  "key11": "4Kf9rx8nDLXq1DMhbTpkCWMi6YzWF3eDvLSgu4suuffVjGQUH9fKbSoUonTWwBvHN2GTQMDxBnZtEdHaw9qQj64f",
  "key12": "3GgaW2rw1UdkS9sS2rPQ6UpdBxbvh5tMKSKEcDYEAVApcPLk6wXdz8UixSV7ArSF5Ku7nJrwKng43fa6Vstr25mE",
  "key13": "qzdx6bdZAkJYLCjX69arH9jqe2g7ngTeKAvi7cWVSQ6RpVwdX5tjJJ6FiD2C93H6wWgFpKeC48J5ZEoLuexgWq5",
  "key14": "46kEViaHggTWp514HNVDnVVWWhnhcDhYwyPKeV3nQzvwSfPRPHNqJ6r38aoNVk2S8e2MVNGvYciZXUEjJ4Fc8u2v",
  "key15": "jNbJ8bThFotaKW7STd9FreZ9jA1DUyA9Uebw7H7i6FJFZ8BQ6ep5bYTSy6oaVeqTpfTZPca6Y5Qph76JuoUFH6k",
  "key16": "6ts2VbQ7RwUzJPhgoZNp4UJb5umBazAWjNFFedQTXRcU9ePxe8zHyknfAZRvuqNH1jCawwTDSc9ZnRxGgnvaCH2",
  "key17": "4wxZEhHFSC7X9A32kqcefG2VBKSyjVR6c8zCEDsU4M7rXeURsA68p6rzXFoxseMt1eGpD1cNk33D8qvC8VdpfcWZ",
  "key18": "4WaGcwE4kqVDwsvYWpckNCDXd4E7nrxkuggzZHifL1ohX6BhmgQBw9a5MRFSt3yENNKA9XAiMi8jGXFKnsgwSj6b",
  "key19": "2uAmEWbQvCkDhXa6KmWhxc6MKwPXzx88NqUkQAnrvPqNur4rVSca6pRgFEVzxsLSKeTjirPd3NpV5NUhSbcoiR66",
  "key20": "FF4FWnYRAyJF9GKHRRp4Pni2YEJ4LRaTKs7ZR8PKVnm9VcSz6uQiSCNbJF6bTfwfjkZvMDa8WpEHojCigJgfwY8",
  "key21": "5eRsWqd1Bter6ZT8hKBjL5vcTsXhypHe666mtsymiq4kESriG16SzQujXhdzr48trt9FDbgLUK3XbGxVw3zRwiTJ",
  "key22": "4xBGf9dqxWApCrbaWy8wmqsSsWWtzvZaHcndToWrPcRRJB3jbN5vW3JNEtbyDZnrqgGLQgRyPTGVngFPW9WWJyeK",
  "key23": "h45F2yimSDdGw5VaqXj7WcEUH4dWhzT9t1ZYxnxd5r3R71FEEDKZJJdnSnFBJuAqMpjjydQYseM4dLgBrSMhEK5",
  "key24": "quBaUkwXT4MEJEPFigZ3TPZUJcCbWRizYSecHKCWbcFzXtxyfesLUETvo83fZRNhP8PvwCRe9VPwg1rqychJMRc",
  "key25": "4wt6PGDycSHT9huToGxXPzGSBNHgNyasRSBGGp5FPzPBXmtvoZkZdndtYtNHwf8q58AsZRQ3rwVGoJYRnhEGWc9e",
  "key26": "29kW89pj8SBrP8HJaEbdN7rDfjMmrjJRxTVvJuCMe4f6hdhhigNW1zoKEnHHzjatBDtaMPXZquYnUgJ7DD6kcFVr",
  "key27": "44ThvdNMixjC29couhy9YCB1x4bDMLNqoCbxoCsF7CSHqosJAXRSs7dS9mGA9dDWs5cejzukz8PQuy4iaMnHLu65",
  "key28": "PYwJA2ErafQnsPV77gGf2XerjFLEcec51zFGgoaRjKMJjvKGL9kizkt8yKZkuYXprNUU9i9qcX4A36AHt4YXLAf"
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
