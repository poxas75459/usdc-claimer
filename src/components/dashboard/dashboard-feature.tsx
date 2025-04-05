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
    "49KpWCGR6ZFj2kwRnyYhdPwQncnfCbwy3wnE3NTGpuGM6jecySaFdUskUSsuiiXsfwYejJNhdZR7V4pqVF4AMeuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36o9BxEovCzuoB5Ybme7arF64Hs85nr3MUixXLvc5vQu79CrBJzLgDAHNzaAQRvzhNDu1EV1gi3VKMCWPeaHDxAx",
  "key1": "MnC1HBFw9UhmPM5Qjb7kg1ckLxhuw4yDZ8KyZs5hwT7pR3zSDomTxkxCse4ZW7X9ZRAXUunGrD3nY4ykBNFvdLU",
  "key2": "4hKtN4e3HsuJJNvNjgWGEVrkXLJ5PDiGUSbrNwtb7m8Nmxtert96fLcwRomKA2jqH2csEXcVsJrtLcUaT6U7qHQ3",
  "key3": "65fFgyAjQyw2Ab3wknn56ijjKu6KQ25QgmRuJnKuVjufhoorZeiDyf2gMbFWPnMj1hQJysVSchksjmA6Qed1KVQi",
  "key4": "5YMV4Rm24PAjf7LRKfcFq7wm9CXeirAb9WuCo3GZiG3wJbK9QzDS7sM95ykuUoMWyTDrZsfR1jhqGq7MVccY44pj",
  "key5": "2XkHG8n8AdFvvfhRjH1kCi2dKCJsx82QXuA1w3RfY9kX6PVeVwXJZG1LCoonExmHu9SAEEwUwKQVbBzi6Cv7yUmM",
  "key6": "5fJF1KgaAeeHzr83KuJB6ywJFH7cx4V1Wdwnyygvt1UE6jTJaTS7kqrdRuEqsKMn4dGpSWQcswKMAXM5ABadepCR",
  "key7": "24JBW5PXgjQHG7JC5hLJKUqL6c5hukbKV76jwCeUXPPkLJi2NvN1SLwsAEc3oDxTmipmN7Y3ZHWu8h2VKBjCRQs9",
  "key8": "3uJxafUeWsy7QySa8WNFsJoyifjzteimFYXmgkaciwoRVHtW7MMb6X2BFBkq1W2CyXdfS2JjPbnawELHKMPp2kdk",
  "key9": "3LR2L6EWEz9av16JPAN6XwvAcWqDt9bfLgGZywCtdpn5xJp3WAJTqZ4C1EhxB4JgjrGGCPk3T1CX5fAjNFsVqtsK",
  "key10": "4PApYWdCoczkxAsrtkKx1sKuZmAVMJtuHrQqoc7Dspa2AxK7F24BLQ4n21oG6ZJzUwutLX22Jqbv1J8TniKXNuJN",
  "key11": "26vC897extg3YjfLJ4xbWJyXGKvEtYL1TfdZ3NfByQ4CyRYtXQfNi9DiL6ykCfHkbKjBmTmRKWYJQ6Vfhcj7V89Z",
  "key12": "2wR9nrVv76R87XeCcMMtaLbmagytVMvLA7xWivF7BqnSf7dsnP79FHLvmrMCwRWhRxK6DaGcsSmFVhDuGzLdYvkQ",
  "key13": "2yUTeKshoL5n1wE5G9DSHh3v2X74ZewVTos35fVr2zpmjUpsPrrFrb93Dmnhsoah9NMupAvJ49V14WRX4AYXPTay",
  "key14": "3o9WC4tPVGMHvGwAAJJ95yUYLcCSRD3d8kiWkgQ4JPUxnc5kJ2jbKa3b6h6H5YmDJ5xRPPNGEYyd4k5LEfxVowD8",
  "key15": "3EPfVKt7mwTWGyDT4MAGBxSS7DZEu4M8wEU1RhP3yBcdGkprj6C1WzoTytZGCMpTaR1EKdSuMrrXk3ZgzWkkTLRH",
  "key16": "65mYe7yH3p3R4G2vAuTJeUQ6pMcC9TghRjCvNi2vHCaZnLuJoyBtotsSidpSmvGkskvdQH4V3R1bi9ANwL4n1ijq",
  "key17": "5pH7Y7SR4LVaxvEBQ1Sh1wgwkvciXDTB3C6ZHbreLDz4tshv5wHeybZ74kUiK5ED9paDWAQzfgKsyasddamXZbia",
  "key18": "3ATn7yBaKeg7nvWmtY7EhbKHyiCJseVCkGY3BKtgNzT9EQBU1TDYjRF2g48ekNYmFhWJPpxdKx5aPJY6GxLXUheS",
  "key19": "4Kbxas8Epx9oFzDRy6iYBZqHL7g4L3WfQTTNZFyfrbR1S4hWjCvphGK9QV1tNi6WZAxSFTUd3RM7FM8UyCWwkJkB",
  "key20": "4V6XJea5Ly8tKc16WmWXHuqazCZXa4N2ZDsZvvnGZVpJsgVbbMHQS2mxmvzFH7YHLsnnKgxWxV6iJpaUJzme5q6n",
  "key21": "61noZMRpFEQWGeXsSLYiM8pN2C58wLCKCLfvk2m8KLbakjmDprbW2YpSLujfVdjbEPswSHpfex2mGX5oEzeiQc9j",
  "key22": "53RJ2kCRQ469wASLW9p4uHmcznZRJxXca1CJ2DAd9BjyTr38djoeAHAE99k3TPSHvAoea5bpK6EJamESBzmvsNgC",
  "key23": "5FvVyAMZkbCBhKMBVWZYE21Atr2TSzPcmJF7jFXULirjBucHvNTKBa7kB7wSXEUS4h6Ga7gGsDQnZiJbJ5ZCBfrw",
  "key24": "4h8g2tdqzz9tAwXqnTJWxxvHDgTv9wLYL9qcz4EMDvV9E3qzRCodvcLFGx27aT6XTmhp3ycytFM3GdsZNW66KiUL",
  "key25": "5xMKPZCCYr7n2V29F4FZq9Qv4n8YKQsznxDa62Ncx6yqv9Ec3NqPYfMboXPg5LhGTTk5tqr91HVy4iH73XFH6P4y",
  "key26": "4aqMhDWSGUdNFU7gA8FsDYeauvX5EdkDSRwLGwnJbjfx3FZczSJprSd6FmkeCUnbAYwh7vPQeeBXe2yd9zQFKhBh",
  "key27": "4NWnQonWGi2desbwxj5Ufi2AQFitsd9xevjBV5Bb6XopavAyrd66LPi5C3jJ2pEVdnpiYHBxKREyCAatA4xocWrY",
  "key28": "3jPHqo2Au4bXG9oHwS6me6JEg2FZgwdZkptPDbgaST4xT5mYbLUpfhip8SNcN9qh1s52fXXekK5Gakf3ju1UdVZb",
  "key29": "5LLbHAGDiUM7rdtReA8JaPwWwDAQD6Dkfsynx1xFJvtdfn2Q6xZAdpYnU9MDmMh8VV78n6aFxa5W72diUoLA7rQy",
  "key30": "5gzt9Mj5h2WSKN9s6MUCWSqq3ZntwS9XYxnPFDg2vf2NZRiQXjb9nkqEXvE7eXdB5q5KTJmXWvHsCQRkvRyK4mFV",
  "key31": "4qnoZWkRFTX7vMvrM1tPVzgZL8kYDMr8k6m4bNgAiUHSVhJHQofg69GvcpA1tCmgE7YkSdrQBbUdjKf63ucKCCEk",
  "key32": "4ZufqCZV7498irsMbQ7jWYNk6gBWFoEdGHciDLJHAU1ULjvZezPj24to2LQEAV4cUpcXz3gsXe2T8jbEpPQ2wXCb",
  "key33": "ge9u3w1KU5GbFcsGEwgFzCavjDXdJZhJD6y96SvRyTB6bPQRRUq7AMCAuaJTEnWR6SLsEPQeTCvd8jdQNSy1dRR",
  "key34": "4kHrMAPh3rVszMCoDSn69qXkFxjnUtR78QwhWrkNzCtMGBb7vBTc8n33NCV7WEyuRRa6zfoepic7ZkPJ5n7ssvKx",
  "key35": "1AbH2hMh8am6Fxvn25h3Vtgyj7DNkV4phaG8tSkk9VRWbzXSki4gnigGsuoPAxCjVKc62xm6zrzR5uttXKnVxv8",
  "key36": "5qgN8UG7GAxvxfsoAvHF3rtDuiNkJDDu2WvaeEKXx2yq3nAUoH87aeb5hwKqBSmJxCFMJpJnY6imHcRNmEQCsTj9",
  "key37": "3R1zfeimN9YC4X4QrvYBh8G1rYkRPL7ZenT6vM9qypZW3yhpmLvCjpKknMS8neXtrLN7a7nXYKCaXYTamYaP9q9o",
  "key38": "44cxoNaWB5YfUfnfwpDcvK6vyigoFSjrjheuyYHFuBhVT1oZKL7vPj27eiA1MiUprCCfP6dNNNAN1whddpTw1qEw",
  "key39": "2xJPXHw1UHYXM3nzvARV4nXs16egB7VB3Rqu595o1W4PchCM9WGL4RHQ7sULB8NZqhYJUXD3XminLxECDa1pZMzS",
  "key40": "zCqXMT3FMnh4jh5AWnBHyH4gnvYA95U5eyuSYekLpmTPu4r6VRw2K9FRoX2ns8sAMTChjehDf2stFKits5UaTdt",
  "key41": "3Df91i5gGwsLF6NWkU2YieRpUP31BiUkovEza8mK5LqHRXrgT8URriozZ6VDsK5oXk8LCbo2y1oBSyJEU9UkT2gz",
  "key42": "2cc86XdDKbcAvQJYzJSwWEfs653Z1m1kWGi9C2vnbpcZqdpdTMVEycR6PskJ2dxyAL1WTx63G54hrGtZV6Ckumf9",
  "key43": "29YHnabfMWcg8jRC6bpAaWHLNPRRvfUJMYdaN3FsBEupUkiiKPZE6U3VyzEQRAqmB1ZTWEbmX8u8be87Fof4cCR2"
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
