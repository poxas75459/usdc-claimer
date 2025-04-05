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
    "FU9jxokgDMCFWqL8diWnYpkYNmgZmi5deqzZd71VhCabPazNkSnYL5YML2T2g98L9Ej2MbdaagvRkP3WoUhGSwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQnwEb4QrrgzfKMYsHKcsokcxcL4ccATNBNMCDVvuvYCbX4qvwuVn5eWBaSUY8decLG7cCrb7iNeNeyRGLEoWDf",
  "key1": "7VCVwJUnYFqdYmcF5oLJnXqfCovWk4pbHyEhR6WVxcvUsTBrFaHikcxv2EWh8HVA9qM7HHSaRbdTUG5KYoiqhE8",
  "key2": "3HJYwJ7ioR5zAgXdK75dZdHhfGp32vsS4dzLB8vFMN1wrQZRUAyz4Lzo49hFaBzeUuLaCLnukGKMEJ985ag44Yx1",
  "key3": "2UdittzMtHr5cny4sxWEysqrjFntkWzvgYHec2B7Wg9M5MpvKYTybFhcy2G7Gwv6NCvre9BGLSfrq7dEmcqgfFch",
  "key4": "5PYXAU4Geh3ZN4xxkAo3svCLxityrKji3BTDSegBTYRRcXYodWXC1NHLmn5myAzvT2TY24sdUuhhAZssdiNDTM56",
  "key5": "3w6ZxDWx8mj37GCBEEQYddkS6hHZoZ13pSmkYuDCcsU781HZEFz9puybuXL6f9KWX96EdAGtZfj2CKkeQM87wedh",
  "key6": "4gsfzS41d6PdPzMYgJEvT38yHMs7UjHN3DdfFsC3sFbe6TQKppUJDfC1N26NqiNxPfvWgb5dKa89Ydc5CFNRarSr",
  "key7": "kzQ1hNZu88z8kCEMmAWvBZ5fUBxC693Ey5BigvkqqXmpCXjxKPZeEaC2zGdo4aPv2JxaxDB4ggHzru3bGRwJ5Eo",
  "key8": "5n6SY6DV323DEWyinurejM6biFkWzEycGxvijsVqsj2PFgQ6cLvHpnXRHche8GTUkvZkjwLf5NMMkhHjumrbZdD7",
  "key9": "55YTmgrtLwBWHzezex33VLiTopL68dUwX1euLivRvvQUhioAiKtWuQGd9TL8LE1sv7xNqbXq1ttAxV8sredFP4n3",
  "key10": "4d6YKiCZd2WFyh1hNc6n3DgNiEeZv6X9b2Awis3EmxyDSR97WPfxexg4VsejKvB8B3nMH7WdkeW8UU3BULKnfK2f",
  "key11": "2UFW3taxYFE6iPMrGUpxFTZhwYbFaxpR9Ct5mLm3t6NYXNnuQXuaeykkCVqD7KM2Phi52xA1N8CCBLSyfNfug3Jk",
  "key12": "441QeTUV5kMmN6ARtx87tJG2khFKbsRW2ePiJ5b4tjWncfPVNDN6JNRM5rtXkgFJ58p3Gpv7MMwG2Lbd427DGmZi",
  "key13": "khCSVuiZme4HKQkD8qgQWi8wKdVdikGTcxrN36eVJAWmi43W4xjC4w3uSCbyMFGmdGLPPK5ezrsKjUsTvDTBvS7",
  "key14": "2kTCjk1SWfuSzs2fpwBRUgTZnH1W3SbgM6Jduy5fp8ChtX4bvrK4Cssfx2GySpJJbt3HvcG4ZZSQescvoH2BBYxt",
  "key15": "54Hb9fDx5mHqF1NGmfRNbHuK5yE5bTwb51qk1LoJvw4exznpRwpuYUir4xADP4cxbu1kbXtRaXHjxgbeh1FQuy2b",
  "key16": "3HiTcFzkAHYbBJrdrrRSMaD8aCVWn2wHkogkVVZ7i1eE6Fj1rnU361iGpesob4bpGb79oAsTVJQ28RQ5Uw5qi8wT",
  "key17": "4nvemvMhacm7RktkXvLf31Xz3VDJeXZb4R1J9AuTKGfDY74iRDDLLg22VAYfVFbon32P6DrAYCr8LZHoAhaGHUS",
  "key18": "5sKpbS1RYek22aqykjjhNzSetkAcyCKfi5J33MQGfEi2FrhNAhe45EKCWKTynk76kZa8qrVR18TSbocqScmPwYbg",
  "key19": "4vqbvmSNwWNncgULRGVkN3dAdSsXjS8VXCuTWvS18vedCAHbVxmF1HECtqyTwHEBTkViTGNNqLhc9TAaU9FwS3Vi",
  "key20": "52GXBccZHXPsw7GYFgSknSYGRjwDQjrX4gppduAjyGwptDnSo9vJ8H9ZC7RiczKD7Gy2KEHz1B3hUB4DcMXww2mR",
  "key21": "3XDWXtnGpQxqgYiqD3v5GvPbc5YKYbSZjLpx7nEb76Kj9qUxa5M9C6vQezKhtRaZEeL5un14Rz2RK87CAKeMpnzE",
  "key22": "62p7LHoyDud9D1U8zMuNDdj4NGNq8yiCt87mXDhmH1wuUVjv8Fe4C8k4aaQ32wD5WuHtDKKcyXphkoSowoVqNSXB",
  "key23": "2wHNAMPEcHA83PzXmEct6ymzSF2HUFRDzL7Si6DpXZ8crZQcSngRi31ic9247yKZeKrqbKXm4qgYpbMy34dgEfcn",
  "key24": "5VronGLPefjqFEvkXmJ5uAszGykMuuTdHuHXDq7BbCof3HDkq9P7vEGvJXNxw855ryYNgTLTzthRxwtcapnjZ9qy",
  "key25": "2ecvTBWp7tkHfm3ast9PH4gSJQSvcEdhDnmXKHzHArvJgqJ2rxJQ1kcswPHBzZ8oLrM9AmtNePy8Utx4efwZ4kWD",
  "key26": "2UGuQLpjZHvxAyGsPYydJj5yMmH3QYbWLSvU3JKTyQfBUHnGPKqKCV4SRKXUt7U5H8VhZhUHRbxw8sSrapGvYWXe",
  "key27": "3kczMvsTBZgeX2SZKdRfhEQhHZV3a8gtjHkKinrhVczYVwkopW2dteZ4FfTshjREufUFTYMy66RdkuFdzgqhq6NV",
  "key28": "2wBxvPBMGUV4nTwKPPmQ34gbiiWpB7GKUyX5tjczRCwBukguwXfh8dtWEvxB7EoYHGhPRv78SXnmFLThaFiCzBjp",
  "key29": "3HSt84Dyw3UyuovYYzWFUXoznM5PbkAGfxKKyiFX984Cue8JsHsZwDNXTwtc2c58RdZqu8CXamFujPbu57ce45h8",
  "key30": "25QpR5TLT5HqSgcxNJRZhVJdtiBvWg6kgkpDt9LFz2ntZX5wP5KZCAWsnUsUchqrtexqstrMa93xUtrEZDxQxp8e",
  "key31": "CeNLymzdziqVUCBXsMmFBocfo32niJdKj267XRLGD7Tc2YCD7d3kCpx7QKk5XNTFteZR2PbwvHRfaXCvKvC3PuL",
  "key32": "2S9nBJeJEKa6koBFf8ZUeDRrUgNRBkqxgPGxoVk3Cr1b6rCARzxStR1FXziE1TNgQCohSnMab3MznLq6r2KE8KML",
  "key33": "3JAf18Lx6eWe6UN28fh4vex8wnm5AApsbgMA3tJnv9BEq2iKPg3q5hfvpxYCm6xJim1GHo5DPhXouDkoDLk29mLV",
  "key34": "4kxKyqP7pQF8NEA23ronWakYNkA7bJPARbqN8ro3KDCC1YNaRCMFD2tpm1YokvgnrGYGnmtyEUdiUt8yZyHjHG8m",
  "key35": "4dmUY7hXSPnz2JZyFWamDhdJsA9J65LEgM8okicBDgpZwHn2k2SgswKmcUdNNMeL18uuEp63SJschnvBXgRH5qyU",
  "key36": "4xGHk6g2eyLXUFVefNMLJ3dM4bVzjzea773aGyW6bw679PuV6RVVztxBXpe4e9H1wjMqpLmcb6azFbzzZfs4eYuY",
  "key37": "63uVxvwu7i8QQtK2HnAZ4aqVMffUVkjmrkWSF3ugosvuNZAfW6Co9gRbjcaCunBE1kxfacMjB4YFCfXMai2SNT9Q",
  "key38": "2tmu27Nq9DkWsZh7y2JiseBpVbQA5Etx5qGQVmqttKuXLb6P1GpbqZMYZmNQhzV2i2antJdfcqGN3EsBDWS47KRG"
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
