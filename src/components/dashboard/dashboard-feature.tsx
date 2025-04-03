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
    "27W7o4ZJ26cFT9iTZwVdtDQ9iPUhoo8tawDUHRDrjkPtZpKXC4rME2jgta7PcixJLXXHgNQiXVc83r1cJcYFpyoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcSPFKsBQX98SyHzW34pAjGShjdoDzfLLXgxnCGNLUdsECCgEZm6PyPSde2RsympkAR6YF8uTjWitEjvJcL5Ccz",
  "key1": "5ymVDBdDqNvXTTUgnpmk824eKhYS49Hw7pfhU2piDtMWWPMsjBhXuRD6mdaBPyEV7PxP8ZbbLMnHgtNKH8EsGQtz",
  "key2": "SMxRNiZapSqaiditpPFkoqrT6k1oRqszkDapLU7jsYHiRka5Er7SCVRcxzSQx6uEwo2SdJj9L94DYPmxxUbpjtx",
  "key3": "2XmFuApXvaFTnzAUmYoqLSe5v6jTU6D2BLxzKdvsaLV6kGNn9BAdC3gX2uNwB5C8iSc37F7hfUsw6zFzMCaKATzr",
  "key4": "uucPZsPb6gHKjVgww9DCN4441RWbdnHWstFtcQWAMWxm5LB3Bzvcpbs5PM11PgXRP2jGhAHtwXsLkndqY4d5fBR",
  "key5": "nLjPAXW5hJgrf6axFs64aiJgwHc9uWmPy9qD7fGfLhE1HBdDPX44rqVoGXYeNB5ioLQmm9Jovr7Xy5haipTF1xp",
  "key6": "2YoJTUyLigni4q2uiUvMYg6E2js1nNVVc5r3xyeuvN1Ua3Z4Y11F3t9hkSkYmcYa5XYxx7v6pV9hQtQfGarx1p1y",
  "key7": "2UAFqCgo9cC7suh4ar2SyQDSXgFKk8MZ2g6GzGeTWfuWbz16KjNBJmPBvmdwumD5A7QebeF31eFjmVmsouRTr3xh",
  "key8": "53yLWBVyBMUKjKYbqAxQpthY8uWAQsQteXAWeqpzKsAYTmm8BiFySd4pFFi1DAPZuyPYuKiVBV69HRZAYvSyDRHs",
  "key9": "5hxAznBDJG3XR3tPr5yLR7XA6PzfUAZSEpMyehSAdbpgXYso74o42aNW3GdxMXk1Y4bUSC6Vyj2knZa9tZeme26Z",
  "key10": "5dPFJPnS8YcvytNAbnvtqzj7MtwMqPg6z7zA8FEK86merXLWFMcGdv9c4Q9x3AdxYKr6kFcz5sKjD3c8GWziTSSB",
  "key11": "28yC54Xosrs1ExXjKs45XSxJyuQsyEo133BDFzHYY4hqdkawLQ5wPNzBU4xG5kFwNaA6NXkVGCcgxF467vv2rTuR",
  "key12": "5JXxUcMwnfBmsTWi1StMhHrUjECVkpt4fA6VXHpKJmWZjjwCoHaxMGeAqYbDeiLKG2LS3eAzR49dDce2zztkjgsB",
  "key13": "5KkkBhuVfdAk1RBp2FKDXnN8y4cbhWKcXQ5J8ufqzgfjqaPcnpNiKnEm4RkzAB65HQwxUAoWKdD4jNnCmiRM5SEu",
  "key14": "2RqYTAZLWr1bYh7v7YfmftGZkttc2H1x7NJqc9U7skHXrh15bqCf3Lv7Nxvrhfr9rTNYCr24r85pxCnz1h1NMcLp",
  "key15": "5mGgrg9Ayo3CEicZFnKJ1mNTkSFP8gkB7MaBPiMgKaPRahpocBAWPAxuis7yaYsRd5BSkpgzQLvXbR4KgbEKQQPS",
  "key16": "3PKgpVt6f15U37g34jJjTJfqiPaUcv8MUCLX2X1KDbNyvftvGzE7TPgQtMpaSXp1AGCv9gM9HyB6zCP3TLMQ5DBN",
  "key17": "4uJrRnZ79vUKiePhZAzvMgYTy9LCn9gxXPLq7mYQRA3BcUJiDCXdLGGPdD428HfDQJyvz4mYHu5z6yM1xq64sq7z",
  "key18": "3sXwqLNmnVPi21zQfdiuZRcw8rt6Hdq6Y4e3cU2RYuRU4SjGrgCSKmN6J8WJ13M9n9GKG59yNAL7e58eNkUpvLs8",
  "key19": "2NkqunCCgYdanY6K1zFuqkTiXXtyj3xvAbmdeF5oqzCTXCNdYoRHJDdg8afxbdKUXDYD7XQkgz785sPX8TbT2HPh",
  "key20": "2Kw1Kmh5GAk3sUtYkDqr5Zu9SdLtEL1GeapDLcjcLWu1wdUnfFagQnWF8j41qLU2wHC3USAHmuz3cBFzsD4JspyC",
  "key21": "49MkpQ9ithzHgeHmBGnEckoGkau5zyWcbavFGncWEsMZgVhgS4cfxzkQbALpjx291EWgp1sAucKjVXPK7kAmD4kC",
  "key22": "2Cvk5gFZ8oWzNQi8RyxCraLnw1aUEY1A6NWszzjKUZMVMUYEEwug83nJ4kkxCzQuyGH2T6i41SVXHHCyUcmMsX3i",
  "key23": "4AK8byshYSGSvLAq161XV5drC9eK9EnWZNXwmQt6TY2WCoP4gAmuFBu9Tn1migAtCSRKM5QRHRTqSnT8ZvWFRjQn",
  "key24": "w3FuWmPwxUHLEPqnCoWdjHPBMhoLNxcBLEuZFgh73ioshfYsPyUwg8guBizzESWc1wKjmRjhRHBH62JQNACM7zo",
  "key25": "5bQN5nsm7PDDgHvkucdaEnW3HaD5mrVscZNK1r5G98WQqGeZBHJNvRsduE4zZjypDvehSmRBaMmoNBatxpuGz9ND",
  "key26": "5p7S1Cu7XKHtzRHJyd7kHNHMQfebqCRJX23eppmbUBAvvsfdw2eAm6RcS5G9VvjW5d2d9QvWwmgkxP1UQZa3VsiM",
  "key27": "ZwtXoD9q4S6U6fo8khkf3hXZKXtXNQfvup6uZmAyVu7u6DFw1xNVBSPmNBnk4Z7R5P5pmBqk7thXudqFpqbLkXz",
  "key28": "3vQNB1q2UFhZ9sCK58FsFNy6TJqVCavLm7QRmV4FAPXZBFpsXMNiF2PcWCwTuGSonAwFqNMYX1XHTYy9vdvAyizA",
  "key29": "Z2GFVuvKndyWrfo55qyVTEQtHTmERFChN1Xc7NvyHSBwm3yYeZVt6BNJ6PsJpkd1hUEDf87dYeARyeZiXLkJ3Wu",
  "key30": "2cbMJVCD5hNxxAu4WQ7YU23tR4CGPuGEK8ZqwvDhTypktFA3TtFiKhDmrKhLP6YW6Q9z7spusxrT84XEbBEAoK32",
  "key31": "fEnQmuGQzCWVmn9gWEHwmg17FMbq8ggvwX6caiZkhg3Usn1LJVFQE9wkbgnYmBJYw1tP3c3gZQnQDwd8bB8unVR"
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
