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
    "41MihNFFC5HutD9dFQY2HRbitYgox3yT3Qwr1uHdZ4rKRtKSQspn6Z2acpei6CySZBMaSTgRyx2HTNCFMAsyk2oW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJw7rKRNRHMCH6e16FQ3JaCpaDv4qZHHsGmcy1YzfD3W1Y5sTABkfk2Umuywt8vE5NRx8wCZa5M4U4Jr7Qtrpmg",
  "key1": "46sWFy2zXQdFuwMAts6uuia8tR7TP9gwQ1Xi9i3RoL3Atj579vXFm3bPj7PGS5GnkRduBeWghNWWy6zFkkg9uC1G",
  "key2": "5RjgfQKukjBBFEmJyf7nq6L95jRnquXTwNwUNktJNSb88p5dYLTrgk65QTF2L74WKtuHJizPXPptW6JhN1iqRbFo",
  "key3": "5QuCLpVPbQnBXdqZzdukjkMqfPi4icAKCvfXGuAeXL1hCAhRrtaTZoBP5m58Ufk7yLd1E5LzhvJUYbzYfdoHUEZs",
  "key4": "odJfWHWxAiFugWJk6czh22hgmhbB1Tr5fDkuC26kzp4wrUTLAeoLi9yM6FboMScssMZMhm9Q5FM3CN4QAWyPwkC",
  "key5": "y4mfSt7SpvCVFbpcL7RAPqvdDWnKh2Q25nQXgRJSPpYi2pzMxzSRCYfDSyzar2Mvgii9bXAuHVaT7UtdcWNMDwA",
  "key6": "3cPovrC9PG17ic9q1zfC4JUk2ymGi2xwAJeJy4A2gQ53rPXUUAHcdK1p8Y8BRRnzjarNNExJMSGiZXHqqwLwv5Za",
  "key7": "3ctuyBSTMxwmsQ2SkpHhVJTySzbVH5h1Cc331j1qV4cUGGDQ9BdJSkhusfmMRBqdNxdsE3bar9CaBchHYx3rH7Kf",
  "key8": "3Bnbx2ReATKLT52zgNxmZkuisjEcPuxVN8c3HMNKMuyKKHUPJvHd8jZCVAEUBJxw1rqG3r5FTdYR8EaLyWkVfci3",
  "key9": "2MyoMRSQuGuWUcawWRvVjLfMmDzu5ftP4eUhBoQLjCpTLUTv8oakVeMCK2zhUGZ1FQDPyRLGoZ5mXN1ww6S7pFZo",
  "key10": "5WauL6XuxUhL7YFyQeDwVcse3S2qePia8mqnVBaWJ9gR9n31wiQnU614k8HzjVMGajmCdQJWGkzwt7uTWny5KUPg",
  "key11": "5BuppPzqUESUT5iXD4frWJtEBeHoVQcjvbP16TKoubEpQGmkdfmzupkanZrQAvjUroF3jAYMdHdaupBCHvuALcxs",
  "key12": "Mpt9hNrJW9TCK48gbceuzedMYWeP8bynePzMytQL9bo4KDFnX3qHRLzEzw4wLHTVUYR7pLjwTJziudHeFdaUB79",
  "key13": "3m5fhnxnjfTzxQNaU7xPDV8VoSwQ3qmEywLZYaLmDJazDKxbJ63m3U9aFabU6E11YfKhwUkKkptcGquoVoV2uigN",
  "key14": "xZDhSv6aZ57tnLw1xfWvqgwrzcwcjy4L5Qf2WHd8XPYe3SsxY8QETXzSAnFgkmTB4xw9yMLTdpLW8q4qYFgG1Ys",
  "key15": "27BHYbpFKEhpcwAiiVFe8nQL2ML7NgNYnhBpmekLiWHZR7ywFPy7QBijyzHP8DeT3yNzYPje8osMHueUPHKJmzqi",
  "key16": "63LJLCeSr8ej9irQSoGe6WbaXZqvy79J42n87XMcQvj1ZKZNH1uoXHHrF4NfViWEuqdgi4zxrHrFCMEN6gQDtuhk",
  "key17": "4B9a5ZJrdumEW5SATKHXhbNrABLBdBWJVHWr92tgGonxJUECHHng95YHwKvaC5Cz84Q7drquBku2w5cNTQgFtTEx",
  "key18": "5WQrSzSHe7v1qG7Cz8amg1hDmMPEdf6YNfPi1kd9SSckEiPzF5HobnSfa37v7zACcahxm9vC5ae1EoRscBLdkeB6",
  "key19": "iiZeq2Euq8KQ6wbocwnrBFpzqhiSm8mrHMcHDMQQ6WMVJHRoQedhWNra7mBvn1zo3SCQssHWmcYqmoq3oycWh8Y",
  "key20": "kuBL6c4DstUk16xuFsFq9vbXNXgHtGjRxUeWDn7rJeRyJfPc3wARDU57jBM3xf9qKgLfBuvLqMpT3wjoB43uwWW",
  "key21": "2B3c6ZR7GtZs7swLYgddgbDXVvP3dZ5nuuesdb4qqWK5wDNDHTpSGSiFtUkDdJBDhMSwzGxM1PWomwQvqDggUNUb",
  "key22": "5C6TJLXcMe7ekiHa6addWw5r8RjWxqiqFzboe7TrbSY5dBLpFmcAepw5ruUWYd58ujWjAWW2Zw51nUKuCL5Upkid",
  "key23": "26QbJbiNMdmea93VwvMhteS6V3HBp2qzg46sE3YVFqPS1eMhEFaK1GFrpE8gaHXxTeVw47uHKBKYWbzr4mDyFZHK",
  "key24": "4JoyKHSMbSf3DEBbf3pKpXFohicuDLA83KbqrdnMr7GhPWTb9GmpNZacYDou9eScVRv1L6TN2sJ2NLmbw4bZonCP",
  "key25": "4nEwo2vdi66qFxasXSqogBxVPYDGpuaXoyG67QK8J4KfDUCBXbpveNbbAeaWMiB5Nkphh4GViuomr16pf39jW3dX",
  "key26": "5Uk5SG2imcHfFubKfd973qWgSovpoZAe8CcYmEaZTb5juq2sn8rLPUQAp4dUQo3zdFLodbGYCTSMQmfNcxoGpDeY",
  "key27": "5FX6BGrF7usSZPvVVdKy7Ldr68eEy7CHohhm1tbmj9YfrhdDtW1364hkXrpsD827mmec3DUzULNH6nXbX6WWBNqH",
  "key28": "2mDyMiw7K9HFic6Ry6fvjEa73cgijLhoHsr7eqL7pb2auFxAJtmyjuoijfCUCBHHBSGx85aKygekWG62kGv9CRAp",
  "key29": "34NvxbQEfLaM6kSHMhUu8AsPLuHjoNpviYUYesshaLtodYicBEEdAe9uadGGUbHkeexSpMK4zop2i2dg4M8yUT2F",
  "key30": "2XkpiAwPQBEnoELeNmStQ9q4DodA5QUdZtEqAbiQfsVQcpYka83BPyPM9wr81eMELLr4pNwxTtaKos9j8a3X84CG",
  "key31": "4SK27MM5DsuzHJ3g4RK8ALU4pdvqnme5kgtyd2qeAJMt4R69hCxLrgA4UCjMYhyDRcysgASfQRYUaiKpsWqrXBCA",
  "key32": "5opmZGVyGxowyC5ShmrGfLs5XjwtGqKLFqnQAdjy7uF7uXBsiLBT5GqpWVXCTKGUMwPWMfbnbEM9AF9QuvJNn3ou",
  "key33": "dZdhwacgBVGJG9DyAwhH5YGktd3mkxfJwSL6ku2UubQC7SeTPwowHAWyF1LpNUPGpz8DZcCKpSVLjhzhmWZRQq6",
  "key34": "eEX8xgAeAw9tQZcLZXTD2UYJ9Vac38GBvR6UjXbt9MVVC63fegAdeeB67jdTKMc7jB1sFtV7rWWkAx2fbwayBGA",
  "key35": "4NanKSw37TtFgmWg21mimyJtVEqMjmwrNFPVLvSJzdYFQoAE1aSGugV436z6q5N1qVTMLLxLs5qgurQpBxL1yySB",
  "key36": "357r4RPNaqUyK45Wmt7z3steqC4ntdr57RT4YXyoi34ZSvYqBxpEB5hUJvaQiZBCDsuDEzMurT3BLp69kDrLT4qA",
  "key37": "4kWP8UZsq3mThKW9gHbAhdhjymdSKm6EjptTm9GGaw6BqNvPhEsdhMkyQi7yn7KsZyG9eTEBS5tuvuhjLDG9PNg5",
  "key38": "2z4TwmAMkdiSPHkU9vHhW1s2qsZy1ieAXK76BJnvMnbdzACiV2YfgAcvuuRaKCEo9VcU62yAqhLndhNxU51K93kX",
  "key39": "3Z5gCHLuXtYUYyuJBeHLG7cuXEBj6b3N56j5gFKMUXG2kq2b34V2BiwNa34SFQDXtxegQLqXCfsGKG84BPRPZiQP",
  "key40": "5FhGg5mg3VikErCg2rj7CCUHfPa3CNZK5e55GSPwbBWbD754PrhiGeS7uKXQWGfHQwPf6QautzcNthSKJZtitwP5"
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
