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
    "4F3n8JGfHkqM7Q1uz1mLZ39kJyAWXMjQ7FLDe6jbqBE5JyyoCNUBz7jyPed2AaF4yqj5VuvuxgVyCKmVVpEZkWMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365JQBqeTcSJTmNGZCqbmBJdGAss55sahJozkxRHdkb5A6RnkHgV1YJxf4DzcgNcAmd4GtRzFJ5HprVKKnD2csHu",
  "key1": "4oTSP94a5hKSqSGFzaiiEiwKftPUBZApFWQHmXz65E1b4WHBUoghNmjKCgdxtYXk8j89C211wDjyV3KGYmScZMxN",
  "key2": "48bDybqBq11qntABfkC7QS88FmcBiNbkH8p5pYSAqEQ9mTAhRyMXkzx93b2W2ZNhTwFSCCZ2mX8rKE3NiHZCvHZ2",
  "key3": "bd7dH4fGGFxzivuMGKo6K2KyPriXZzYRRfMnyDXfM1bTmMXkndoXUEWmoW9db1v3P1x1sCmwb9HRyAvGakQNcYA",
  "key4": "25LVPerv5eRRPrpQoZxcVAnRUipu2fvSRyYUjRXXEcaqdH7PiieU5g6JjYG2nwivWPfYgt5VphMFcpYCZKtMkcEZ",
  "key5": "3W3mAHHBnW19GyAj54EhEaLH3hpng4kJaC8wu7Wxg2WCeB41a1g2QWoT84Lra6Vw5bFmzadoJNoXgnpgrfQgww8A",
  "key6": "3gaQeGN3Aw2rK2r83fd7YqeMNocKErQJKHXZ2P8kktiNpWxfjy4cqpAdLtN81RWkez8SeDpBhb7TyYAPenuRHMvf",
  "key7": "2St2UMUmjW9yPZ4gTMMcYeYK5wh6kxTdMxmtwnTrXtqSXLJ3NR1mzx972WQeDVoNp8EF4zr7wH5eiEDVUpeabXi9",
  "key8": "4m1vmFHYWk7jbhXPswgE7V4WBp6Cdp9dAEdsZsRew6nzsG8s6k918Cz7jqFbH43cY8ZH5QSQ3TnVfzKewuBB7wwR",
  "key9": "BREx1UHypWKJe9UhVfFC7wHcUgrWwTUPvcEEJj7p6cJRbxuQAvLeLhhmUNEMHnjbxQJ2hGA9t9gwB2jn2V7dG7M",
  "key10": "5iXBxoUXqhJysWTTQRHsGpZVvBUoAd4u9ox2JDfo8XFzGZAuE1ofPvuFqhV4QXNCgodhWVPWhSj7kvKKy8DZinzG",
  "key11": "2vvVuGtqAESe34MguED76zV6Lcz4nvAM7DmyS4gyDuLVXDH5TcCjWgC8bnkGn1gXCijwpxZV161GeFPk1wzsYBjk",
  "key12": "smR1SPEUHjqEWDwWC1P1zn7nbULKjFo5LgTmc4sfa4mYuquVVhFk7XR8H1REK94RweasVAS7oXvxSrvQn3Q5x9p",
  "key13": "fnf87JnocmoqF4Cs8xW9vbKN9mPRXCVAb8Kuhv8wLp8hxKxFNMdaYznquEEXhYxkMHLRRWsqPgEuHunyPzdrmNq",
  "key14": "5HEpjaCsKftVRJzJwzT8g7uf2QuA3wLHdLnZxroeU3LvN2KegHd95RJGiC59P2CnhpSqmagiVm3kENaXcHiPMEB8",
  "key15": "X5wdgDQMYUoboxiKcrWpY6pZ5Sw6HvJfz9xwMpB9DWwjHEcW2toPqiJTknErBBJRV9diJDXUJejDS1D4QtsXXpq",
  "key16": "2nawFxXDQGB16btjeHnQrg1Qx6QTx4yz2xiLKqiY1wKgoWcTNe9CjqRUBxTwbH5n6SSRLtKMCmQbbte5rq1ifo6M",
  "key17": "1TNwn5ADANJX6jF7qUL42U7An8nfACQECbpvb5rguRmt1JccMc5jZv2mgz55EB6pTq7i7Yob2FyzDaC8KhgzsBq",
  "key18": "45jrjqY2e2PuCmYBHELsLJZ9QANpogGWTEYaEbVeeU2TaDXQFL5f2TxqM2DLciv9MhToWeSNfx96CqMVg7pkQBo3",
  "key19": "gWSn9KcDvbuTKWVPbqdWZxQuiNfNnkQYpnrUY5ZxZs9eb14rxVvsWyH9YooXA1RMydodNiAX1r2A8bFTHZjCAyr",
  "key20": "5uZW3VL2Pughs3xYFs8eid7q2ih4rfA4BvPpVebrzDCv5i7D9Mm4MEXL8VvR33ZvRMora2nRmZQyiiYQkNeVr7Tc",
  "key21": "5hUPz9Dn5M8VQVbAFhEqdQvrw7ncHta46bkJJZP4CrFTLir3KVrxXbppXMboDYBTNgXns3127DdtXdFBRfoeSDE6",
  "key22": "4t3bj15PLSd7uXxjniVCoLV3WFKntw3hNf154fxpzndzQbXUvccQCLdETXFsJvQH1oJc7UNkHoiG3e72HzDGDGbK",
  "key23": "4nNcMQ2X8ZAFaXR3eUkXhMvXfXWKMiFWMYqhUn8JVAeXFNcuVdrRWhYgoZeKYLBSRbkwyCZWZcS4gu935n37mFJC",
  "key24": "3Cg1GAfvyRpcKgkcos7HQ1z6YTGJfBMm9JAQzReCKjF8ctrSgUbUGX1aXguDQXRFEwfRfmXt7UtWQURaUvgCnA8n",
  "key25": "5dAskvqnCEtwox8WnxKxYkaRntmVhhzSjAqQZfu4bEzJfZxvLpt2Bga6zCabZcqugiiJg3fNUs1bap31fKgzcD25",
  "key26": "PYi5GytNvSLveqhRnSmUwvjtKK1brTnxbs7FNj5kK5ZWczcsUuAbH6nkc298dhEdaBELMdHDS3WoKEvZMCg2RFp",
  "key27": "ax46njZhWveRWiH6QA7dRDzFmWubREpPByaxGihBwq2yQo8T4ej8sCNRAYeHiA4tRmw6n8Wwrdg7mNmMVZjZdWq",
  "key28": "371W2AhUvrrveuD9UopecJDVecxvtFzJHEsyX2TPGvxoGyPtpRVHJKGzcijqY4MRNk4ZKMYbjqAAntfTN8PxncLp",
  "key29": "5Z2LUXmdGNjWbKNzrJR8nNnB3dPDcUK37MpRvja8qK6WJTovntstncFf5oARkdLaWaiprVKfg9yCPvqjJuedesrq",
  "key30": "4PNbj4PD3DTc8tY4c3GwsQNyApAVBxopNq1UKLkNXAnyQzEVBvF6Jkb6gdYshPnTe8HmKzxeGkmEH6vyjejBA33n",
  "key31": "4r4AsY8FeUdwidQ6P8KfWnHC8PqHtnYTZQ7fHGsymifZAcBXdfZpuyuA265WiffbB82G99iRByjEHgXZeBgXxvB8",
  "key32": "dSCuXPgBBQmb1P4hHLvLCwUohVpRJN7gK6S1gr8bVVdn5Etqg9ihRTZMZ9dBmYFEd1dBdYkZEbk8iYDGDGjgaAF",
  "key33": "4xsM6z47x4YnWnZRHxPjuEm9MuanA4oDKzXGvW32a6utT3K5JP8FuJJsvgaXg5vco7rNHUvPWyB2vMcUJziZEZwQ"
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
