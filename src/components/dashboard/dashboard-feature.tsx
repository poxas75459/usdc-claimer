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
    "2dp6pajPpbCPqVCaYDH3c6GjvwEqMkQahnhXi6URt7bBr2RioirPgf4gykLgzP72ykhUuPYnPkRa36qPoBKm7Aqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33xtCxPddu39ATHBCLW9Jig7rQ7sg8VDNmJ4u8G6jQ66JHB4GzcB8txWh7FmFyG4FjpLM2iE8F3RaQW42FLSUrZ6",
  "key1": "2Aadeuf6WLjtgVNoph4MrDsM9ADE2eoYZZ9zTgVN8WWmeJB13iLuJd7VvmL9w1npRxEXLt8YesbKG38XzGz4z2wi",
  "key2": "2sgHcdJA7iVAPmRVued5gpZz4jDK6m1snu3tyjL9HAVXE3nFqapYsP2fcyGXpe1SWMaZqxLGxz4KwkHTAfCAPNBg",
  "key3": "4FfHPzHDDbkAdBZPYhaK58rDxPHjzVSirp2gDNDFpvXho3u7dKdR7UBMZkyd2kXtwpXbcBnY8BW8wuY8FSirCt1q",
  "key4": "3UXHDBTQ7ixj4yhCiaG9Y7cRyjyBCYzSWegmmmX7FUBGx4EahGcUdNCpTN2V4obZeNLVEDEmUe29vBUaaPBDcxdE",
  "key5": "4CZDtmkpawR7epvh8uFh3anjdm4A723kVp5F8zaPr1FUrZx6unykDAv4kAepGz3nCHjz9hjLjynMxbNaJR8GJD48",
  "key6": "36f7N1bxkoX1ceXkb7Y5wbPEQJTz9jhCxFzi8rsHhbqBs25VS9ADCHdYzWBCwShRqRX25b4pN7GoX3qQ3SxDkaUc",
  "key7": "oqcVhFZubjTWSgK1WNcgruP3TVWEWcnUJbTvotdJG3X8akBwRuJ3cA87e9cTRWtSadohGNamQWwqEcjiAyuNvyB",
  "key8": "4DSn4rUHdV2zFA5br9LjqBZrLgYUxm7HJnpbuZUBmLyPqsDGxwAVxHSHqM93cDy8CCppuMYGHgnm9x2J2tJRgcun",
  "key9": "3wSewNUzcKYyW5Ar48FPHYyA7qRptT3CsJEtHAsrCRVCSjiXiMWTuNxf9voDJqdHxwQd9YCzBJTsJiJQyhR3Zd1K",
  "key10": "dUKgKN4AhZZ8zpn4DTDe3pwttKFnto7TRBpGEotSTMupESHzZxRxWqSaQWci4Vk8Mnc8MbBX5nGcfdziHMxrojg",
  "key11": "4ApvpaqABUn4PQNWb7GLjktA8sjgWVvETUsMkhwhbvhpnLbNkqgQaLPZTpAVMqXj3Pqb9RvJS9N5CqKo5wt5RAp3",
  "key12": "2RkJyWYLnxbcrxoKZKy6ysTuhFo1kBStKUfwzHNdeSDByaeZMNispMgfRbbT6UkyDqWThsQC79pWUDFsRSQ1Txu2",
  "key13": "FV91Th7dXkfCwcdXqYWJCKtsp3mge5aLSERVFXp6juruLNjPJqv3b4L6Pq1TnLcykZ6WZVzEsjtxUuykyJinnR4",
  "key14": "5EyywBoQd5hFBT3YvE71mCf2dzfGvb1QfFydj6qXbceAkSfrdm9bVnLnc1Jw2ur2LxJdpPugQBibe8nQEnA7tBVo",
  "key15": "2qFeqLw4Lmx9XdygZiTMRUiBvLMgBprjvgzUrURURzSNxQftziLuAf5RWUf4gxzRU2ZSDsw4MzyQehpfqFDWs44d",
  "key16": "n263LuaXxfeAfYm6WKsyAbm88iaMjU8QYDBiQSmVQYBRGyUr4Uk6zmFhLPWpVQu8PHX7jCdxp9CrctcHu2DC2ia",
  "key17": "4G85xc1dFL629zNGeM2BTusMKmp9zGYVe5CBEXPpcNjE9RWPXQeW6xjcBB4uhzZnjmeWjBwheMtbJ7rAou7TaLBT",
  "key18": "3v71Dbu498LeypmiJS2wXfHeEhQcs8MXnoPKJYZUhSkz3yJup88fyLkSFWodKavoNUpbPMeGCG9c7ReBY5Et7YaZ",
  "key19": "2UsbaTU6zSh7F1MbNmA9skZ3FiVJnnHn5jqxcmGtXkx9qeWfHTd3tDrDdqB88NxxCvvS2CFkFsGcbiHfcXkkKeS7",
  "key20": "3y3yZXYJu8mDsd3C7wrX95oDdAY8S31cKPRasoravFaz1pbH9R4LscDexzKy5qP8bFB66X27CDF1RWq5spZ4shc",
  "key21": "UCAbHJaKwb4RDY83Y95Qst9PArJ3jBC3KNKpDr4655CSnUiv3SpsFcpspwmg3TPJ5o8mvq7vSx9q2VKUp1TWXSU",
  "key22": "2umgGwD3ATXQfTnx1UH8CzeDiNZkmTEiUqppUi7pKHUwPscc64yfzJ8ik79Aaxp6eTr1QVmvjpzH7HaH25BL3qQj",
  "key23": "4Mm9wcqBEEmW8Nsq3ktAtDzmCDTQPGeeZSvwgJchEfhChxKBneBHZjs89vxmaYHmrGJXhNrnFTd7vzJozHGgB28U",
  "key24": "5ppzihYrZiibEc28dGj3fQ8uMEnyftwPqivjkRqLK2ai47cKiw1d5U54oGsL56s5prALZcARUf56y5M54Qqo6RXY",
  "key25": "mh1d8D2xtMzdk84zo1MA8Atqb91GwttEJdkkwr4LeurQgsoGSKo6P5qh1rMA46mkqsAvhA4gCmU1iT22jUxnQj7",
  "key26": "3AkojJpDeUV5TAnxUA6ayyjb2c15LfwvHjSMjmcji4Fv1HbABR4XnJxwT9hfyeSnaJd3tRHKLdesw3WvegXQSzPB",
  "key27": "2mPbMuKHyTgf98wTCcpr3qaVv1yz4ynyBNJPHa2sBdei9hCFWEKNSQp7TeHk2ioRsE4VsAP2N5uAqbLjWP1iynDi",
  "key28": "3rugXf3GxYh5SK94bnSgEi9TMeJr3cEveWyg4HrEo6mCQB1No6ob2sUmi9762qWgDh9SscuHuScoh5K7VNQDQVHP",
  "key29": "oU8AHFk9JDbGDj8ZCEVB1R6SHyHTm4cEooHgQs6AYE6PWEeSv4hprv7tbcQLrv1ygCKUc5eNefegLLNAd8hP32X",
  "key30": "uadtvjGVGNFCeSMRw7q6dTn8PfwHNukjK6eZ89XjjBRDqkf9bvR3P8sunGsFABYS5fUAPQeT9Uzq4oB5jBs9r69",
  "key31": "2kZwrchjCoqpQyX35aMxsfNGNwRLKbavPNvKLC2mpLzaDeakkoatS15ArfhPGLaLXR62i2GzWBgAgspch8LnYKhK",
  "key32": "cjgJbRsdBnpPFK5WAgteipSqdRLjPu1yZWHQB4fkbFn5ViYGw6TGXx7ybQdMSy3FGkCNF21rbT4nwJXR8JNhDUZ",
  "key33": "2crNmKg39rFM6J2PAexaYxpSCqXu5ry4iYYmyajs6zZJEWCg6DDFc3x2JuMeYCENpJZXErJRgNnzBm58aFCq95mU",
  "key34": "3M4PXbwALsqY32BWY2q5ctu3yZbYt5778U9G23jtoAoqWfwNgJn8SSHuaSwV18qNaxUuwVocLUazMsqnsGVf3L7t",
  "key35": "FZJkUBLJvErqd3wQqPMUP7Z68ARBovU5YohENFHhNDPPQswSynb1UYXGwWSkWbmXVbnBKdpygKJ2KYkYhzDf1rv",
  "key36": "2hDQ7pmW3FHLfMjWRg9apGaJ4N5WC9dpU9MfFGTUEVhpvtidwcqJsHJJXCCBAWybt5hWMHpK48mUm5ChHruCj7jz",
  "key37": "5iXv651Mdn3ULakg4ZdgGxCCQzw9ujBos7U3fRqFT29SJgtwj7WNBb3fTZq9G13w9CgUYHuvvJ5Lu1upAFQEKooZ",
  "key38": "hUx67aMNQAWJU4Q6L6gNvTxKYZFindfSR5Kk45UUikBd7bxUXem9HjduzNQpdoym676ZfuxyNiocJQn6CnUQMcE"
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
