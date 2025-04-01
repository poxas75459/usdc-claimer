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
    "45j7Mxf3FvGHbHJbpJpQQgbwJFzWzZECATJtKHKN3ihWqeLsPXXL6VM35iHM4zSMa2AydbxV6DsPPwkfWCHfVTdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSK8DMqGsFUT52FWnEp6QwE7pocspE5jDKNzC1Z69Skghys5vjG2tj2Jc5NLDLYGhgsh2uVekiT2H97vwbTjzg4",
  "key1": "4SzwWbyAZunYEbXMcW2wJwoLCqmWorKGCimwrw6XdeV4gS5Ko8wDGvmhbvMyhMe2ejfUCxnnuXcRwijZP2LcBBjq",
  "key2": "42zhW3a7tPBH4DBxoZ6b7dSTkCxHdCUzAhWMuhx49PR1AKEuDBH6UvAx9fUHicKu46Sn2XGMediFQfA1ZezUmpsk",
  "key3": "42M5ssC7TP4uTYEr7sNKYfa6SXbEiMrHY1jhF4qp4arXmYztEP3zGDxW6z2QGnyERNHFBkrVQo2ckSxpY7Q9rrvq",
  "key4": "4fc1LhhifYooJopGGuja4mskDp9tyYTV78w6wEuRssBi8UjnXzoVeb8bFJTWp7SS615qZfz3AoKGYUkFf5tAKsF",
  "key5": "besztr3dDmBJuEcS3Xbjvb3kqxAL4PsAnMtQHZqTDwZtezREFQyB8xW1gb7SJv8vC8Hmf9uPWhzSJXdue8DDYuU",
  "key6": "i6KKdL1vG4zbVTGvFXEpBDNmHamT2KpEfgup9SVVEFuTRmRJybqT4JarM7X9MpFg8qaeveapyKez3v1RdLBWVnB",
  "key7": "35p7qYUujzLtrfVeoKsMDi9CVp2yuN2Ug7zzpAD6whGKaZD8XTWRDd2A3EidyFHkCLQZSMHUXrTRXsZFCYynH2kL",
  "key8": "5eodtygs18GU6SpfcoeUoHMm32jB2QYiYD3vng89n1yWD5iPqipchWKLv7sprWGbChWLJvi1oKdhgSjjS2s1YBrj",
  "key9": "2zUnsTrKkZwWxj6mMbZUzgkMULVv8GT2QaJU2sBynUdwUBPHedfHxBAmyXeo2vHvdM1xntJCELGTEv7WZrPG5dK2",
  "key10": "2P1DuRucybTnHupFb37kTHX9TeTG4eqS6RPGLxENpfEsNQkLyBYkbb58xb72SpEgLTbu6b3BD4Fdzwt7Wchg9fnh",
  "key11": "31b8gbDs6TWjESiMHgsMuZzesWz3Gju6AaSDCQRjAFa6MBm36oXTrexf64GMErT78AkKxHsEZLr3H9SkgRcyz4q2",
  "key12": "5NvdxG5K799H4uV4tMd7jAsyzTw52GH4JKaZkFUjeWgUx95n5uhvR71r4mLDGkcZwEQPqxpUS6yHTzbcKtihbTAA",
  "key13": "2KoiBh2byxWNnZjzFmKgeVZyShAaiiwGfJ57JVTNmpHbsG1nk3zHT31kv3cm3MinatESfv918DrfaFgqaP76XKXq",
  "key14": "2vk77DwSAwJuDzmoy5AEdz8PeTXwHnHwtw696vaieKieW4BNUQoN7d4Edi7S77rQnn8xxTWNSfQ1gLp8oKVwzgKt",
  "key15": "2Cgs1zCn3ZHypi8TLsUan8kMqfxDEoyh939LNcp839VMX2T2HCKGaKjCifnFzFf5QcCdKCT4sPKNmJbnqiBVzwdD",
  "key16": "2Fp24osbTunyYzgvvzqExZ7oEjwHc4NoMLDqxD8g47Auqnpf911KSU3rVE54jAqPWBjLx3ca4xaRmins227mY3So",
  "key17": "LHUJMNVhBmknFihBBJWi5Zjo1z6TXWJPHgygb1jcMmnqX9xRq2ZLG2kCN6mxmSjtzx96MYxLBorB1KHo8iePD5V",
  "key18": "26YY3sJcoUr7tBMcEEpWwm14eGAkMmdN3jkoZPBtr2Lpi3bVwuioUk1uCULhbLWTQUUqoTY88qhGq2KC69BasqZ3",
  "key19": "3xiqtn6vHsEpS6hwrxoH7fNnimbekFyRF9sRFsdKUvS34UFeUED5R57ZJCknrHfYr6WkCegizSbvND5wQzjhmLyr",
  "key20": "5QDrDSTPbYVAJmAXTJsPYLTah3gzNuMiR1r7FQJLupW2y7uaMLE98etGPcAse29ffwRPRRR4ueADfR6yZ2iPj8f9",
  "key21": "LaLcDvUtupniFNDgwETJXy3h2ovcrV9Xbsh2WeywGg5y77rM8cZtngUjyhbu1BinW5sYA6GgnKryEWwxR9SMqNY",
  "key22": "UEg4dPJ8ph57xpAe8Y6RkJDrimMknwy4MRCKTnmf7vk7CccLFwwTZMiatJm9dvPj4qMDS7U89nbz2vUi447mpuA",
  "key23": "63cV3Fpaono1DG7oNbCveKpZUp68ytpZxgbfYHkx1omNUX99VUpTeUN1o3yKM7jTcJSh8CzUjWzAY6dLDeFEQdSF",
  "key24": "2eZ4rhKT8hak2jAi5E2RCHFzHrs8KZ3Afc1BqUL1Bg7ddWMndNR8fBYeAMsE7qhjRktZDo54Gt8XKGvN92ZnnKL2",
  "key25": "tu4jaWYrcDQsndP8qJVqdzyjCAmm3rzYgpoBvDCSWrTda1QdjZMwmVPPT9PcB5uJqb2qYgxtko8s5XiZ51VYyxQ",
  "key26": "4RSXP8VEgGCJhMDetCF48aftjMgYNh8ha3WH4mZ4SY9XssRfZC4WRxqLcJ199HRhXJLvbhUJ3qqCfaXJNmSJhd8g",
  "key27": "4tzULPMBAgfLRZpAkSzr6nW2ZpTHfZvzuicsK3tFfpJcDrE8r8CkpnQiU7CUPkLUnyvwB5sHqRUUzPmcc4y4P1yQ",
  "key28": "3MBh7bXxsyqfMVmy8iZFERiotipu8c3YWDoT9qvPaoP6prEaj8BSLg6zrNb7jDp2JAaTxEcwutD4is7GC8FdoxRZ",
  "key29": "mZRVSHQYWvoKxkbscbgwk5TYFA2ANdyDmrnTaDTJ4RGtdHrrGDGeQhS7XQB4C5MPusVVA9VVP9r8kRFp53AifPz",
  "key30": "283HMJ5wBDB67dZEFZHt8UHSw1EbWK69LWsbpdXhCKFGrUJ1YLEfJrjErbGa9DV2AHTwHZwKmpHA7ynjTvRjahr9",
  "key31": "1rmpivaF2JM5hitiF5XmJpsjPtn2oE9oD3GEVovYQWN7mVzDzJDe3h72y3ucJnxXrjGQoscywZmCgRFLZZgtAC8",
  "key32": "3dEEcu7zEa5NAMFqBFPmpfRwL3GUb3csJuRheFZJodqbgxQPKT1KrDmqaq6hdZSpPJcxBUcmz2KQM76EvxvvptpR",
  "key33": "5gj6GRZ9WZXPofQYc8FrRkGyBwwFVmtWrKP2kvq5memzZmUAZjJ1vStii3aPsPyeaEzVasNXGaAED5sUjt1ftggn",
  "key34": "5j3xFdVH2RZKchaChWe2THvWBJj1iUX4f4PuWw3Vrz5zTixDzZABDHpaTAdLKJuDPqYonm3Px3WDDKASJSuuEnhV",
  "key35": "65vkPZLWbPP8hc2R2xk3txVEp3YMamCRQVxm7zhz8agP8X27Qwqz7nuWmeFbwgZSnM1FahARbKidcdJjbhPZhnPG",
  "key36": "4etHuiE4tnzXzSiwjqHzBA5JxbyRyiGgF7eeyNSyjncc6opLQgoH8nRW8okMLgiBsMXr8Q74JMjs1QLwqhk3XHGV",
  "key37": "2pTcBCMg3Wac8MPVShKQ1eiQnL95dcaa1LtAbWyHiGEpeudkqYEBYfgzWa7A8jjbPAmFBHS5Px1mBcx3JnzA8jsB",
  "key38": "4SwUPe1x939fM4cezg3qCnh4rp6EK5x1xGNXqTXhbboaDCCsx2mmWyvHXZ4oLvVec6WNJtWjJJaTSoKoe4pdDshJ"
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
