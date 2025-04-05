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
    "2R35kaY38UGNDYJKBGxNsUaaNnumFifVaMFAe2564vNwgQvLFoSpjsEMS2RLdqCYvxDFCSAtbbBUpeFX4ceWDyft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBMEqxB2yDEu5JKXbcFURkusdMDFyXe3GHiW8qzTMusLDd8aR7r4k15rvu7jW7PZ16jTyPtbH8yGer2dePQvaC3",
  "key1": "2LyBJe4HDdFbReQdzynzhyub6rTz5w83CtLkdFiRrAp3mR1kMbWpzbHN1YgViGtiEWP7Q1SZuh3HXJ6MynDZFLtM",
  "key2": "LQRAy497mhVFu61dbkXa24qVXa1GUMjrFzT4YHt1cSGRozYD5ioQPGRcK73VqdpANPbqzKgPqAxUyToVTy3sdmu",
  "key3": "Tmvn6RnsMeFKz5kZdajgXo9USh5jsJWwaNQ4Cbcz3gS74YdgopussrF3qxEKaKkZNhZ21RiAXRZ5qLqsCyj3vUb",
  "key4": "8xb5CNY2V64EAGc4oVumS38oY9XktDdXWUwq2dXTWwktB63MUgNPYasJuW9juGxAzm8cjV1HdacT1X8sHqh3xvZ",
  "key5": "4U1cLG98zHmM2odnAYkCRNt7urg2Q8mbWju8wtBvwEWT2nNUo2uCEa7gNRM8nc1mvuRRiDsgzLahLd3CDSW3HgfA",
  "key6": "29AvAcRYpaGQs2P6GXGNPeJuHLBY4kbC1CVrLBEYJ3a7aNmw2mmVnXGrPBvH1jDB3f75yLnynYf8ngmcsw7rMZE3",
  "key7": "66JrpaFPsSj9H4oWq7QQoTbBLyrmFyQsoRVtQH7bnPS7eJq5zq47yb8kcnd6bTmXrLePS9QFqty8e42DKzGyAabs",
  "key8": "4imLsuPFoqdGEyT4tJNH6w7yFQyo5pFFyEHoHaCiYqqXQh5rCh1Z6eaNGNG8KaKTLPrbHB8S4p8KVuDSvn3DGzFs",
  "key9": "4JTCm6i88GqJv143Np6s3zYpuPN3h8p7CwgsuEQSUWGXd7jNt8Zzb7KZiz5Fpp1Lg5VkCGa3N6JuvXjGV2Lq18rP",
  "key10": "3DhhtF6u4qhoW3puWReYhVRxeuYEHfudgCQ7mQaxp4zAFmeVHR44xuKobMnJpPaMNVuohiHchRqh2hqh2EwbKBLr",
  "key11": "3BN1vXuurENaYmxnwqBi2dtAAjguEcXqVwMB3ArbPB4dg7euPdBAjH5EXnheybx3mZfLf5PS4Pmvvq3oPWftZEK6",
  "key12": "3riyQLJF1gCqz7MaxaRHPDsKNC4PmrfSxB1qYbjafyHsdQCY9YwkMnPQfKUFrdTg4s2VuRYGKQSepNzKX9QZAXZ7",
  "key13": "4TF9UV1G7gNgjrjPaH6eixzUiPGXThT73F3X7QwnXkTfSAwZ7SA4JN2wj4HjnrWEypzaTS9xEcdctkvYdqNyuBuo",
  "key14": "4iKfnC3eiXukwmr813WZRCpBvY3Q4TKhQru6X4rNZAddq6511EBGzVgUL1oXbfP5qyYM3PKtys1SHwanurEF5UPe",
  "key15": "sFwEiP2433Wz7GDmkJUZgrvRyYQWC5kLP2UahSTwv4bE4QbsLhF28q2PJjS8RjeRwaLzsrqzR3ydc179dbYTeh8",
  "key16": "3J26bhxPXKVkHcHiEsHSfwkrQXTZSxuYicVSPWiu8Gz3DYQodrj88QXQYMtVVeFxgNFDoMwQ9zMkt5TcBUQJaZYe",
  "key17": "5dKYCbzr7FMXbuDySPA2PzTycCUYXkBrkEoQFxT7suY4tQsGb4TJJC255twFLPrvFJYN38skPRyfxGc58FxHftNV",
  "key18": "ErDtFz3s9eyfwztJXMeS9rLyGFAzZNjwDN1QLD5EsrREKYEKFGKic1B6tthY94fsCrKLn9Kv2aHj27TEspwxcY1",
  "key19": "4gwYPQJZHCAzXT1n38shpsHBSx9buEojtKBxEREimcRPeCmPPiSFkcRD3cmxQURy9VdPGibvnjsMYynQedDth8ki",
  "key20": "5WYTibmLiCyf7wa6iG4zyagzvqaeip5y38ucJWUfPhnZqvVpqS7ujKYrsFbbnAKnssFVZZAR4sGTyk6BKvZNq7zq",
  "key21": "32U9xBspTYKKmocpsxaF68UpCxpD892rm2upX7goEWm5KZzdnuVQWLaAesTf9adF6VjxzKgukSCofxDHEYVA23Q8",
  "key22": "4RXnwVU1aJuXkA12Lc3p1733gDGhz9wJJ1ikdBhktFHGjfYjfcQ5FcUuNw1DUT1nTU5ehEWe1X1G4WE6LsHdvdZm",
  "key23": "53kYRRqQjcskA8xGKDvjcA6R9DU7KxR82k5dsof22HSZ9uesaf9crN25QWuFstkfUDxPS5D6nhWruAatKJ8JSZeP",
  "key24": "2pkixXBLrPXZnLzsxGJv6w7XYtSw4jEEGDoXPUdAcZ2ZBKWZiKVpiFdDSYcG4TiWWjWQrq8xBBjtwvFmNXXZFtRo",
  "key25": "3G3oMesYnK8rmZEoL564pEKc2pHqJY3RhukSBLkxWgZi98br97x6AjxLjXkEA1yYcsTNxqAh5GqjhzarhgQYtNX2",
  "key26": "53HjmDYrfSXtB6UkJqs36A2jKSv6CkZoAvCxDwWWBx9yxCT5yA1JY7CeRuUG2vMCaBBbgzHoHbD5sVBqmsQkZBw9",
  "key27": "3U4e157Ht4qiUyQ4ucB64FcTo95MAiqBubposg2hN3SrSYQNhADffvuhjSAWYq16WkNJV952aL2gbTP2Mj9TLFUN",
  "key28": "4KtzVZpSzNxjMsCQhtgd3Xax3kWs6oNnoZc5mbzj7k3Zb4mctWZSE2WPKbyfGefYHVyGJpcusSnqFgQqTEup5TM9",
  "key29": "63mP32bwQsJsD6oUV7QpPzf8RddSEY6ddyJSdRG4sWtLxRo7VHgP3fS6RmEG9XV4CStDDHHyi7ffbx2162zFLnPy",
  "key30": "2v81mnxMLcqrqc1QUuv5L8yRcjAcqdihr2KEJPb1gzMxxgmZSf4ghSLnzfRbRHACuWwcyd9qYte2vy66G3fHEugd",
  "key31": "2xAEVJGyyxjKkws97iWWt7W8E6gaQ2XY4ZUFDSvNquJbBDroKH8BCJjTFArwXQCJxFfqEjjQQN4SQCgWtvKWNjkh",
  "key32": "313AurMvaR4efLiUiCRb3zxydePLjTKMb72vyeBagWQvajaN1NLqBfSKTvoG7JxvBupQgXyM9AWaeJGmaY6rcYGQ",
  "key33": "3imo8LyzjgS9SsMo5yefJDz364xK3CEy9AuM4vr2jCjJpvZH1WHMPzpt1zGMxEEdZk3KNZGXNAfqfotM1YNJLDpR"
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
