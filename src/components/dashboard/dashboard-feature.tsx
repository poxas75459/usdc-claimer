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
    "5KBu4KoGMTMMVPPDhiNzzwdMDqZR3VREcERyqUNu9qG1swzsHbaKx7XNL8w7aka8F7RP9AcGJgpXQsWggoM9TTuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTCDLaePDzhuKWkDgzBt31YED5mw3dvZDpgmeVVcbb7px8KoeKgPJQ77hd74tM8FJy65AVtZcaK7txUbuHifZKZ",
  "key1": "CibWjLzCeEZ9ydAdxfkrzQq8LDBHjbNSRMQpRsT4mV72nEy2UMrM5W2Fw49M1dkEcBNm7AnQ1c5KfDMBg3i65q2",
  "key2": "51c6RXEUMzgn2pKrEf7C4rsnShYMNDhXgzxLcd6QZefQfZGMUd7abvi1M3SgsZu5tfbXyiVkUiaM683cmhXyQRWh",
  "key3": "3Uv6uE6ECAps1NajdHgboCZdj8rprAmXAtQTiBj6ZBoQJMAUDnGYJbMPWaFt9kwJN31GU6mzaWkC5o25pEXiugFo",
  "key4": "5QNJgANJPLhNPgGvpcPAeVLmYFSQUu6WVhEYuRVLpGMBWoc23qUaQMnhT8UXJRYe9hp31vnzLkdFsZZDm3Kv5yNG",
  "key5": "3GdKwuWGExnXvm3EQ2zbMfEiK6Biog7AHTGh2fpGbkd1ZHLkVZQgybomvgxv64dg8Lu5295aeuprCT2rzwjXpMbk",
  "key6": "4ALMCY9PVESxws5VSnmnmaN5GiwmQeW9r6yquF5bRWhRFayGag9Exjy7PJoeV3VajCuAd1EQVFYFb8miDFzD7Kdm",
  "key7": "2hrRfJHbWRj681ZCVgW3EKJDZZVLPwQXDek77K7FmhzjFuV7ucdf8KKTHHGFqTwM59DmcAPSmiVME3fcJXoUDozc",
  "key8": "3ek3qnmVDrRFhBEXQUbn9tFyLVDkLg5Kcdox7rUjEafFNPDzjSdNBJ3vUoxxCjxUFSzyjHDwdNqqcbqCZ4mqYtUf",
  "key9": "MWVpVZywgMfb8bHjp6rtFqGi8PWUqvgTTFCFJcFcRe13YCdf5cFK4uXNJ2X3KDSovHV7cc76yTF8VZs66Cqz19c",
  "key10": "35FQwevB24WpgY9jNgTQJEnuBeMH71Ct8LSPA5jW2PibtiWqiudbr3ZV3FjoZGWJ5DA115nuc1HSHoYo4Hr9pJvT",
  "key11": "4L3WPjcmvypjfvVw2hYx7BDRXfDwGC6SqregCRmSroWjeyd7iw5aiSAHNS5CinsiUR9ngLzC7ZKVGkEQKiWqALK3",
  "key12": "etuU9dGgK5kTbg8Y6Cvmm5xMwzaSo7RQYejUE7Xb4XQABJLNuSQvPKE7EAnELsg4zSx6QutpCpazPA67jMkXnwt",
  "key13": "33T8u5m9sbGKbQdUeGp6B3Qf5TinugizJR5vaabM9Gx7jQGjN2LcNaDSassizpJEBnznFAoxHmLDLvFYQNY6gUZa",
  "key14": "2U4VVSqwvik95oSxmFdWrekoHTyCk3aX655Zsbu1PWToKxZ5YidZrRYiGY3vyRLgZzMhK66qdVen55gauKwDW4Dh",
  "key15": "2CyL3qm2iUbB3b7EWsbuBVnhDZU6q4rCeG2hGJkbgChKT359i1phdnw1vnP8aRxbfUn2WufBNKCMXbnct8YGvzLM",
  "key16": "4C5DWDr4swMmVmjyM3ov75HXHLqUDKWQjypm6Ac5PdqwrcsSrQo3mDMHjuBwTwn6nnz6PVTuTzkHvVXqi5ahWE8q",
  "key17": "EftUFDC4mEjwCXC6nTPr8XWDHkVRdCMHLxSbVmps5rShay8FJCBtnBygckEknq4yXsi78o2vNzU8G3e6aTbbcLK",
  "key18": "FzYfHK8Ss9m4CxGh6r2a1j5ZVfuWoL9KwMq55LFknYEKLDm6AB5j9J1kCamukt8dJEWXLS6CFb7r6jbVxQnVbHH",
  "key19": "3s8EyR3fPBdtRkd3HR5KmKDjsmJJYDWvMskho2XsUkQhdVD2WataKdvi1EmqJzrLqfr4Z2wirrzBR9k1Uf3SfYYK",
  "key20": "5JpeRbX8ZANaWgAupJReDLxLv9qetLRkp5ZaCE7utD9kiFH2HTtTTYzcB3v4VhdoWu6WXKYjzvhkpU2iQKrpMjQJ",
  "key21": "1BE3U6mK8HhZPsyX8iFA9HHkequkHourHY2xY1o9S64BTqkN7kSXsaXojSu5At4YBsmW9MjrbvWoKjMd6anZ5Yh",
  "key22": "9nZtjveQGnra5DWJGa7FyzzfdcCiH6hvDFbcRry29g68qAXdyDHeW4FkdGsdwWDAAHa51QPREMtXniXECF89yyg",
  "key23": "4zS9qMdMirGxgZMybRzZHCyD1vSbjm5eMeaxHSzWq3Nd5BTnmznZTJ3VbMvH4Bn1n7cw9MFFNY5FojaFwnpt4xK2",
  "key24": "QAcFqcm9qvjJaFenxvye3ZQnyAyJpCrE62PqMCizsShb4thB9ukb5a1cQTnyMffHPp3XZuMjtT3wpSLt6t5a4ok",
  "key25": "4XMT3toDHQ6sTjd9BucAv58evfLxkiMhPwqLenTWZ7ApptM5NYNziugPJWRnkpkDnKjL9nUUoig3UTwnd5krGzXu",
  "key26": "4tyMUgdArUaACwr4x1PYn8WmsuY9wKJ2hxe1zG9JJUuXor7cKk3ZimdaYFDdj1dVNfN3VT9M5NUr6jzENCPw7tXw",
  "key27": "2C1AZvJgEa6UXL8DtqFxyXHHne6PqUganQnyNd4nnWw8znVM1bVes6hK7tdghixE9nujhoSBbXgcEhsavL93Ey6n",
  "key28": "MojCR37GUrZgyoWNbFESHra8dKZ7joboLFx4P7h6yBxk1Rrr3HVpzrCmD4a2bws2arzRZagR6FDBNhCdC1JJJDd",
  "key29": "3BZb5MApQZhTQMK5yT8Hcw1MibCekhu9Q6xDSNz8ond7LN1dXUFmXKKcEV7cPZgkv9ULP3kY4kem4b3MmuwMuTdz",
  "key30": "p8eddp9ZCAmhqBi26xytQSdMPYQGxGxBSfKd2xozQd7LNtV3z7hcZhgiGfEJ2KSTnw6GDCTEPbyskqHJESY2QTg",
  "key31": "5p4B1uuQ3FmcTo3YGrwPUiyqdcqFi8NHY9cahaR9siZSvVLZYGutym4rwoFTSvNssHCeVS65BqE6xvD69hNiB1tc",
  "key32": "2jpiLXX8frXKGqtxGN9hodAQVXHfXJSHf411TQvqVtqkVfCJCQE2799TmzQaH53YB335HH1kr8BPNVCf8KPw5yTL",
  "key33": "5yrsQ7PXAFaWC4K1dTGbdNmEczV8ExDmSnMSr8eEPhhMyX1crfVAMfoSZQFKqv1AQ5pzuXDTsPyuGTvm5X3b67Ss",
  "key34": "YCahfwLaqsV6XGnTrtQomJMueJLfMWmV7Spk3VoXzTrqcqeQBbqcAxwVgGvYpJcqdwLSEUNP9tMmQ15of7cc2DE",
  "key35": "tkxkAn3j1dtomEgt1VdWfk5RU2pxRifPRSAVnn3bAwiY5FAeJoLLcMprNemqNRmSs4FF4SpsbuH2rxEn772bHC2",
  "key36": "2GmnekSYf8Nrp7AYc5WF7h34Fzm4RNKLD14NnYoRgjyJQoMA8Yq5syK8manwBqz63tBeJf11cUni9kYVgRRoDfen",
  "key37": "5MUvrQSpA9AXxZfDHEc5eyTUG6mrJWkHuiVbU6GVaZYYdXF7PVeRN8hrRjUoZ7B8bz8xSJCYxm3TJDPbracXbhey",
  "key38": "448gDcGVr24N59WS6xvDbPCrM2pKSc3zaW5FGTk6rPqddBWnY4DyzMm3HDWHg6FwoU16VEeKhmQ8vTrPPksaJ18p",
  "key39": "3sVHY3vDUh7X3ThbbYebpGHTCUigbizzD1zh3LMae3FQ8b8fDzoqsnnPcoJwcyNVKegD1cHvzwuLCmZMFSPCwGY3",
  "key40": "1KRV8GfQqSn2TW53pCCJZq8Z8k8dd7orXFa6WQPHB9xXqAHqy7AX743p8WNzXYQ2vEV29iUALb5UZBGQg5upQYj",
  "key41": "3XvaRmmEqNV4Rd8cLT8DQJKS6Mp1SNqfV18D6AFvmGx81JdhNNUsHfv692ZeNAC8Mp6ohNVi85L9B5Y8QwQnQREQ",
  "key42": "28YBrPcCLDyPPFBj7qqb567qn5YSBdv9nGUUuRNsHb3XJxPn6Z33ySVvvtNH9y7qfgqD34XdEG9uqqp7drikv6Xy",
  "key43": "2W12hP6qKjx4cdRonb8Uapn44XVeAPXWygZqL9pC3WwBHvatuJD65NP1G1qG5Mk4uT7E8rtYHUhw6uYuBkoBBqWL"
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
