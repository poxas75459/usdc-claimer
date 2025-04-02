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
    "2ZizkomptdqiuwGk88rkyKR6v8hVxyjxfArXUSDHdp7PSNPafsiaw3hB7GmFaj4j7xP6CYCM4tnkT7oVX7SAa53D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wnt5SZdQ8yPR3v4zYTMbumi3rTGsbsoLFk7ZW5utPJigz4JGYqafJYRKKdqFi2HAy3cNQxC7g5zaE2kCzKR7zfn",
  "key1": "5XYEnQCcKKpLrLvi9sT3pexndkpgNfHh1AYM5G6PCih9XP8ycsfy9URPemLxGctbKdTjzDeFf7dNJ1L4NrugRxMx",
  "key2": "4K5q65LQ1nJAhzYsb51zo3Nehxn975cMidFuS6iSsZa4Ghz3wAzQVcAqTjasHBv2RfEp37LfnkssABQga5MPZ9S8",
  "key3": "5QZeqnUmeP35P437i23r2sGXk2WbRw28mWqa4BaDoiMv4RApAnrGcRbUDzzKNX3ZaAatc66f5auw8HPYqn8nmVRq",
  "key4": "4CCShW1JehQ6MiWKWCgThZRWxVUV1MfEBBqt8CFgc5PbjV9s4n58WgTSKRseAyTY8AihPm5muPuzZLrLq6Uuuxaw",
  "key5": "Bekqp8avyB3ybMQt7u5qkyCCSMhzKh4iBbHrpR9uJMdYRZtCfkGHs3vxAvz2KGik24iTLCJAAvY3k6movMLkjB8",
  "key6": "4vHjiFXkg1jQKU2eTvbokVkbZmDym7fuL1kfHLPCPoCruS3bqNMZCoLNw24YREMhkkRHxLWnmwjaPfnatsobFGAP",
  "key7": "4FnC1SgDXsVwEQ84pthYFDKYf9rgmSANu6qpzcBKBQaLwyHxHcWc2KcUvqjjCTHrymnohRyidbyWhggEfKuj6dma",
  "key8": "2y4suJyRLkJgE4Br3NweSfitWfQcnoq9NJB5MH7cHjS6TerX7ArTWMindypEZhkPnvXrgxbZck9bhRAofvRHS9Hz",
  "key9": "5NTSema7JxxTWR8MktCQH9ZCwMT9hdAUeCCQZJjuwRKKyYdGHD9HvgiKXgC668HLYGBfY3w8MMsAgzZGdHEpuWgZ",
  "key10": "22pKFB6rxA6TUBKgUvTr6BAJ8LGqgdSLzjr3FHAQZ5v3phEFQvRcLAooNMMVPobNjqM5koGnbtxyy6aZKNkYV95b",
  "key11": "3hTHFp5wRhXKtv21E83u97PLQpHSMABfTpqReUxc5h1Q2P8qBjHHV2nrWnK48PFdxwht71coGNH4ELBvbHXQb31U",
  "key12": "62smtcJjvtwMXMZCREkJSZ4jVNPqG1avQzitnFHeaXk127Mxw8kzYTeW9gF51mt8wAkvKh4mUqRx7hBs1TGiLqRc",
  "key13": "46YTJbJjwcBCoCHZZ4RvMmYNDUVwFRdaFrnzmrV3GQ6jCfKcVyfGiPn2ZgDhA2ivHgugC5BPie6qX6EQdJwtwJNZ",
  "key14": "3DhTEGYYzoHGxwVkMcpGv8n3zcWZoBpeAiDcYJpc1eVAknxnsMqsvoJSGKqfN6BJS53EzpunydePifQbhGeMMgTH",
  "key15": "DhaUSFH6C6EvBq8uBBwb1P1XHifFDQ8kBKxLiV7qaEbRYcSWSj4TWRUbdVeiVffv1dCSW3Qpz6Vxne4ZvYwQXzA",
  "key16": "23Nqwu4ZjkTbBEqp3U4G3bmSbwvTJPugowb3H3bVVG6WLVRVsnzdHoQaFeVUmUKSXU2g2dENbsGa2ofizguLNqr5",
  "key17": "4R8o1yRKQDrADofsuu6MfrvFk1fJ6Kf1z7Zzc2SVYrDs8PQVZ6M1mDeoWXShqqtZZJCwYDTWhEkH8sZrMBtqTn78",
  "key18": "3pJcmyvqASxLdiptmKjzWBKcEmeNp8c3mBG9qARqLPpW7BK661Gt7Z3nSgJZxHb8jfA2Puo8Uhd42h5XNRfzBbNS",
  "key19": "5nHst3Fi6TATwqwUktwMgf2gg61dQnog8zjGYeXcSyy8YcF391Wue5Qj3iLBkyx8NAr6rwjoAdWsjTTn9vMEtp8m",
  "key20": "562n7tYmrCBgsdZxkiBSf7i9mSW6VrK9G2knXwmR8cnvQvADtqACE4gm6NScxf5qG9J2zDeRE3XPFeZVFkqpgdzV",
  "key21": "3AFFhuj9MsTmJmwmTrfWG2EJ9si6fSoBvcS8XaGUkkMoqShQE6jU8s7W4bC1eXoXr1k9brwxbtdbxHu9oCrTesk3",
  "key22": "5hJxGGJhYoM1P9ZU2zRT5dsAZVTnZNmz5GnktRAuydbtB34g8AfiQ8z9eMXxKJNSnWvqyg9cKmf8tUwqk9qVGL74",
  "key23": "5hg6UKu98uzwVbbxGZe8736ARNL9G6oeHs6v6EPrV3JRXUBjtK293dY4KJtrVxCtwHY1gkk7heJyy1ELkVHmnVzW",
  "key24": "5tvMKQtk5qLPWM66L46BY1pboy5v9szfobB6QTeZ9mXCVBNGW8n8x6BS3UQR6FTyrEKWazG3K76pbetcn1Y1kca7",
  "key25": "qBWtQPu8his5kGX5jmS9AnSU5EoRXRJjepF3okL13avCAUkNMYKo1UUSRu3gdFpXnSMFNCpdLDqSMi5zyq6AKZ4",
  "key26": "5MEajyYSh2y2AzZimGmuaekn4CekpvgAc7BRoQUEgUw6eh3Mmv3uHe8AYkuSneB86kETdbC2ws2MDeFbC27QF8bh",
  "key27": "4cTWTaXEtt1DrvbqNcA8JvuzHNnkgrDppBnW19AookEirPNAoKyTe7vwtq7wbTneCxpzcqZwP6La2hFPFqmTfxSS",
  "key28": "y15TMCE4QfNstkaD3A2vUcovimzZ9fUXZYgdZ3qnuX7TBrD1aiZJJz7HjEuLuNSSgWpTbx5FrmNajZPgh6Uy6vm",
  "key29": "2L46sHXsfE5z8Vd2LocfHqc1muAnxs2Q7LwW5QDvQwPXmzRVQYQg9LyZuAUiZm51fhDQwmc7yFBk6sHrD21BXrox",
  "key30": "3dMiZmLs7q78ny128RovFpzvfyGknLxBeFE84TSMoi2xW7MiPg6vwYmSyhziX4cBA8Az8fPLeRAmfLdGL29n9ThA",
  "key31": "Y9zcMp1GVaxZzFQnBiFfr2BYcYr1u1jzvv8PWQof1PU123cMxFqB6mjX6WW65hpEYD7KiZFqyDgvdYMBk6fLBAo"
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
