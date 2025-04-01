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
    "3XyzWVST3c1UVaiysNU7DMvaBq9nWfEYto7uzfvjtaVwXht8uWyumYH8VQsEgZaW1HajG1fSR3ogBJrbSJ5UpyVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwiL9DYuUpRSP1Sn1SGKBsxqneEWB6VQ57W64gkYZnCT1Eiwfnyy7wLoknsVG9ash7otbewa5ovq8NaMwatDsco",
  "key1": "4QYQj6zwfXvEQSS7GCx3z62pHg6isK8yiPY2upHKo3qpzEW64PJGr38xuTLMAbQiFbggyaKVTuHWq8QYZxZMYiRk",
  "key2": "2i398gjsh74h9Y8QMPFdZCxicDR5bywUPg9ifof9RkP5sCjj2CfmGJgNbhanigg9mnGNEcxhvqVzRAUa12g845hT",
  "key3": "41StSp44ZoLao73NkGQT2TNrdgVn3oo2dgrokwTLEF3onhNo3jWejVVLmD6HJdzYiYEbLBVyJgpSatP6U8YKU8tp",
  "key4": "2txLfizUUDQfUmkCNBLN5syKGuEQm1HW5z6yk6Qcf2QMW9kWMyxaidjExS7FaQmiwnNSviiWcYqqGmjdisaied81",
  "key5": "5mNpRQ3k261mPoaEQHNAWYNbbyiyyNoWTmZzY3fnE5ip6Kkw6Cnuw3EpUe3BgLhibyEgTMTKrq9oFu96Z7bA9aj7",
  "key6": "4n9ividVHFGEJcFaqA9huGcgD6bhueyfnWecM2y9AYHCbmud3WNkVoRuUt5cNu61xaFdBuiNL6TqyqmvXzfSrmEB",
  "key7": "ATmPkxUxp3RkGDjYh9PmGhxWaGmz4oU7MFKBBTmhDjgvXbNX9mUD2GxnsTNjLpLsvNsBys1JWy2MYtwwrtKveY8",
  "key8": "3hnckqr2tbD3hsSmYPTpbYAVTorgBzLgozP2gZazbNzMBPWDwBVYEEthXXELdpa3uYR6rRAYTnB5J6WzYNC2QcWv",
  "key9": "5SaURsjYXUYZwzK7TUnXtYtywSuiKgMQw5cgVuVmB9m6euqp6C9TAKbtdicyxCmN3BQrDk6t9fuqBFFoNWn4RF7h",
  "key10": "4TZ3LmqCvroeb5d43orC9yFRHpsxJX2s2X61j3rnQXwwCgCoV783VErxxqiL5KW5XNXVg13DW9kZ4PfvYpep8D4J",
  "key11": "4TgmHryNPAWRrjs2SuT2uZnj3tjGYHHRod3aXTRhipm96oxqY8gzkzUd48dU63BWy2P5H1zd8GVwweKwq4weAGqX",
  "key12": "5xftrvAxjd6iWrheHNe9ocKJnJF5T4yaRH6ksNFU3FgXJnB3NLFxyitJSaCvsCdvVeKHKkLGqGzHhbTKD1btgLa1",
  "key13": "4oVWoSLV46FmkBfDYbXpPuMbGspTU2g4B6wmH7kq2C4KGTqvn15G9MeG9fSXgaQvo2NYxwiFQCCpPcqR9bYLhmCy",
  "key14": "27LLGeU1Aq3djp5yJrSrXRyCXrWt8V4nFC7K22zpjQTfa3cQVmu1H2W1A5gn7VMAkFKhbffH8neL6FCRF2WDTcyQ",
  "key15": "2xMaS2XHqe1AgYq2cA89HgwgEv9uHkdt7N6JMMebLP4VVoscYYeSvLkcqqHUr9jLNeoDoN7hPLZVMkgU8XzeiWqK",
  "key16": "5MfCU9vAiMGsQwBkfNgn4K3CoKAHP27UDn3T88qWFCfgW3BFxv6Mg8wnfTG7Zw4Mt7nSM73EAJ2xJsLYnJpTLBR1",
  "key17": "4tTLgbZytJYhnmZSsQd3LM1Y5K5RWnPqbNWDsv8SnwCpsDC5eWWXS7yPpxES6bRy3okTG1SmHTtHrgec6ghBsQVU",
  "key18": "432Tto1mudDsZmgojv3WoPwdesFnfWWsXupPchgKrxTPXsu3HYGGf46U53DTa1vrE2VxJkjsmd4nTayPzbFHmbvf",
  "key19": "5UmYf9jbrYRBzqt61deeTgspDeywur3CHfPxs1QppJF2Dc6LEwmNA42mbiP6Q6rcm91icpHHK2dR9Trfdx5qGiC3",
  "key20": "2YUN26SPqNDU9ER44sGz86xUaVcaVqVEvBfwi2JUcQhncvMcchvwHeyi5hHq9tnsXeFRL7fHJ1MV3MiJJV7RqNRF",
  "key21": "4Dy3fcrJBYLndvEsix4JaMnMheTLcgC4SaeW9e92P9eYfMfJF8muFKhxZaYp4zCUQNr1m4wTeot4YqTat5uvpLiV",
  "key22": "57hX8wACBvRprN9sRFsZsQ9xDAeoEUfZD9DSr5xfjRZtwEWD8WnJm9HcsLB5Phf9j7e7ZgaWXosHzvWeDPQqNvnJ",
  "key23": "4dM6cGzjHRG2s5PAJk5noTwRKghC6MeqgZsdBp34SMSxo4rNUHESX3wrohwGsBzmEpFwGWzcgSCF8ro2BSmuprhu",
  "key24": "gUVjBX916Ws93hSFgnmPxSozztxYpBQs5mmJzaUvgw5WZnC4HSiLoH2WKbJzNCCsvBKoGpy16KL8p4K1rQSPoVx",
  "key25": "2P3WsneuBCNGMMmHvoV7m9iqC7a92SYFuTnTS37XQjwne6Fex6ku9isZvgpoACCcD1u3Mokmky1i12FaQqakdUt8",
  "key26": "5witCewj67EWWWiCWWkU7DzgnYkdUsPKxXYR1d7jSi8rdcbKeac2qMzL5Mj873irAZP8yPNKMX6WZH72dRgwviUa",
  "key27": "4tdb8m4pEuWvoq7tBq6UjAhFKxM6YNhorfitmnCQjDwBkqCt8arJ4wAXH7sW5bcHv1e36kVkqRzwUb3BYEhcwAJb",
  "key28": "3oSGtq16jzXYGNCbhe9VWBE1xLwRpZUaiufZSZgaiAVdgHSBnUZoXSFizmDov6TESwn4LkBuirnC7VaF5vgCmkRu",
  "key29": "bMusAGnaxJhpAV3ZXLpZLvuGGFdh91bRXepdm25e2euD7GwhWWJqA1g4HE9arEUZtXAoWAkRC971LWRNYqmUWCC",
  "key30": "Aa3kjioR6g7pVJWK2DQCdSPp7UTrn1hvWrWMLNPBUUW6ywhGvfWcRfUyKn1jSArHBbBgmgEcY6NvLdxb7J9brAC",
  "key31": "5c9UHfzKZYqYESfEJDCtR59FY913wBzF4k9cPJ9ENbJxHx1UvbA5LCKhbKkjhyW6pZDg3QG9N9raRx7CRP7TvK8v",
  "key32": "SCEEA2ttca8QHPnnBce3FgvUD8xvcu5Z2sRydetoewzXmJhgfJ7BFH8eKbrExEw4zCTZQhYPF5jKTFSioMp5tFw",
  "key33": "pL2YLrNqYZ4CSuG3F4SDf5kamUnRGNwnq2MCmrP2nsxRpD2HQJDW8dLWZdDKxwbRZGU7iYycxsoXBtnT82dZw3k",
  "key34": "42koWEQDAePAsx6ovsjWMCVMPUaxxeP5ewsYXob3KN82ZWwaRZCUd9LkTyuFjtS35QD1swtnEzWqm4KiXJqr37Lb",
  "key35": "5XS1HXT4Un4bJmLo3i5tB8uXWatVNqCHB3mDGKaG6C5XfaDxQAfH2ajzxeyW4iEXiRdDxJhrf5qsJ6GzsDkUZBk5",
  "key36": "ABk1TYYwbsHLprvNPXwG4v45kVsV9ZD9ZNAbi16WnSn8Lz1D3LRR9L9YgWwdUipXAPxNYSHbWNXw944CLyKSEGd",
  "key37": "229edQbhboRrgTXbUEp9iYEBUoDxT9gY6knjpq17Es5QcbJ5RjkJAy4LnTHpDbj9C8VnAHGZ6MxWcAXiCeHczw5t",
  "key38": "4YEke33irGPocJUkEzaGVCGQzMLBwaofb2fe384PaebhxMabaMANgiL4SiQV4HcK69tjSgJCidkT6J51K6gTeTfM",
  "key39": "4FupEE1cmNZkmhWENu5TxJnxa2vdNGeRMuQhUfLjd9WsnQHMs7c14EeQHMZ99xb7xW7a5M9QQFuyvHejkf4sKD7R",
  "key40": "5nFvAHhvgCwJc7qvT8neNfiw9vNUGXzRK7aDbfbXv87u1zM6Nuwn5vh9u9WjLdbDtTSe7RkUnhb6Z4fnuACRpyzU",
  "key41": "43mVbkmgZMYpc8iGnUGcTopHMSD3m5DZLHopKtZM1AyqzW5YEsXmmSWh5Jpkp4kFwHxcPosxgLosNiVdWehBkmJV",
  "key42": "3UL36xAUJfoHYkr78vKmH9we3anBn9vBa9BJCNbrCzW66hbFwfsGPi5J9zBDEYfK8SfVNWnYVZs2njfsaQk6UHvM",
  "key43": "3RMAYP9SFaEsJMzbb5WU91dJVUfHwqhqq1KwGbyygB3yPfARv3fxLivmVEMqLWVqGUbX4wgYfhuPCZyzTihhqMru"
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
