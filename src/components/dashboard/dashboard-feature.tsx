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
    "bQmEgQGWAWPLBcGyDot8GLQqqQBfAXxUqpzjUshkxMeikUm2ZJpdvL4iUP15WdVZhSvKSLYU7A1K2AAc5ELMYm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZWqQL8FveaZwskcKY8RkQYTwGk9BayN7iCaQLFkL97dQzetohNythPLzrteUyHCTJTnZvU1YrG7AmDjZXrWvn5",
  "key1": "4MbS9eDuYURs6mwu9oF1oTrMDk6Vd5HQyR7vqxcHLT7kzM4y2u14HfhpwvaYpj25HFLwqXca5F7LLTq5RvShBEjj",
  "key2": "44XSNryGH4C87nGucWMA5m56zNUKh9ioRcu3brskBihG7wSbs6WKo8VbvknehLWyNG5puV6hLYVH8WZFXckxuRYH",
  "key3": "33xeg2dy3fGNbeAjVmddNrKbgoTa9WMnegtccj3irUxQ432yTJR3WZr2aSKSxVVP4Kxh4gLspYMHjjQhVoaaCjFt",
  "key4": "3aLhV4oStAggrHTjQHCrV2vifvupF3nJMZi9XCUDk494UX9rFZ2NJ8z7isNBJKP27GpAXeKsxmnuyRxu7TSa99cp",
  "key5": "5qb79FDCj3du3UnCarQxkfUPiqiuh4uaWYEK24QcP2Nfmh8tdL7KAy6URvm2RvpUtFWGdVdRRDjZvQ6Zd8J73kUv",
  "key6": "7UpQbfjGRiheEpYzNG4e5K8938Lofjv4cc9AehwVnQB82C4qu7Gz71cUBa2jLUx4jyGiw6JsuC83DCFxjnM62Z2",
  "key7": "4qebtaJCS2JuKEDE5SEkXzYmkD26uNWBgCnZXdJSbz5FjnjPbseDSDUgYPerufz971brbvSHDYnpAxMT6csN5jy2",
  "key8": "1A5zqYHvST86Y65Cpm3KVaxS1f3Lkz8dsTuqS5npNQngVXgnh8MBeqi5rxitdXAK4ngQriz7FQCADVqEnJFSBAY",
  "key9": "E5t5GhULPhwTSzryPi63Te4hAabXntsRRXZJxVw91zZ1nQoukp11HcbjR4cRD9LpNCUrpWM7jxDRNQeZjojgp3V",
  "key10": "Zyn3nAv6GjsMHmiMKKcc2xLZpV67zJS5g3Kkk9EpTUqApdf4oXDcpPdV8H8pzQfG4NoPFUMPHojNwh12no3hmGu",
  "key11": "2JxZFtCBTa6rVv7yc6t4UEesyZt8EAEcPj2xH1kZ7EBoK3RzXo641HAHLdAuePX5gCe3LLkYb9EWoVuw8aHCpK7w",
  "key12": "5F7gGK4uZPYxt6fN7TGsgSRqm5tvJZVfKhUPrNrmtEyWxyiMU7SY3xDb2QwvJvzjVsyTLt1d7Z861iGQ1fPccvMr",
  "key13": "pXDyRJp1ygkkqnw9rRcfton6n9qy811pzH9K8ZUM6MFU8YUB52StqD6D3oKgSSwf26CGEjqFL1AVtAQxQV2towp",
  "key14": "v1nhdV2qKCm8rAhH3xWsxkc8fFPVcMCjsaUsbXo5dNS3kB5ncrmDL3XjRoj1A3B4av5wMvps9UAS8efUKx4ssLc",
  "key15": "jA1NX4n9DcF935q3Z4SQ2b6z8753rDg7pw8WVBUFNAWzid9bANmXsjhbPrhteun85QVeji1JuudPM5Zn287uJLy",
  "key16": "2X6EFpE2JyniQoc9WbbMptjPaDLuF5EHYweo1m2ctyb7b9fB2oXUSkFz83wcthXCaFduttuz4ebyaaNCmKGGokJp",
  "key17": "AJgzSjRCrcf4nZrLKybo2SWKLbL2gafAck5f3rDZXcgekwTWXMMMQBrh72kL18Vh1XBhfMVCToN6FrV5kzMX1Xw",
  "key18": "43ayJrKrnx94W27Fv6RwRmCNAaS6GEG2kzHkdqPFGvgsGZNRt6YnDFJvSEjfBzWakPWdbosHJ8PBKX8nQxQswT2k",
  "key19": "2FYAKBpdeKVcutfo5Bu4Gdvb6dFBiWu4aUB5zeeKmEpo2rN6UWEFUabBzvZnoWaZG3V93avE92hSb5xKGg9HtQh6",
  "key20": "2bwRwTBXwwUB728AduADzPVvqHwHZAeXTDWK9JZuY9TFiYKzdzzTRALYSuNmvG8psZCvuJNN71NsTNKQuP6cRn4b",
  "key21": "5rF7jcVRLfn2oe951ZPaC7BjfgpboKf2dMsxuZ9Dj8jLbYBsAMLr7nLdCjo9EJkRs6Bm1fxpYrGh1Es13gV4zA3q",
  "key22": "5HwNu6mGqTiUrAGreGdhVHexmh7Drp9EfjMQzf2F9XBBwM4VqGLE6TQpNZ9YWHkcsDmzjEQpuMgURDxdDMm5vQ6B",
  "key23": "3cZjjkPypA1F1wUn5UG8LEpKUMvZuRNJSkXDvi8y2iG6sHnYCmjbRjAhn5De66ECdfUj1xd8EwffVStkAzHCYDXB",
  "key24": "3b5qoXn3wiYLksLkjws5facktbQeMu9hUwnU2GcBgh3Gw1E2YLpVpaF8Hfi4nh1fsRpjsDF9CWG8q68ZkepHm8t",
  "key25": "VnSKSHRyU6WHzTiz6QwE9avcgWeoFf4UhowJbBw3F4gBgvBUrJfFVR9jFkkJkMVYd1Nj8SzYLieYEtMW4ioPe8B",
  "key26": "5qctsC4pB6ahqtLMAWaM2b34dKwoGHnBz6e2WiRfM7AWD7kiDGoGmin7Fxvb38ZkuWBsgrm3ASym9eHyB3XXFAW8",
  "key27": "56cKGnqkjmKUmhmCp47JFFVkbVUx1fXZZhNBdJAeV7TwNgbCCcjNMMq8aT4Hy9wrCJgm6XQEW7h2cbwZZwKVAbKw",
  "key28": "4MFPeqXcMKUoyZ78ketKw1M1A6dJcjd6mxKc4oTtYD1qEQMis4HmzUfg9qfmasV1fVjYi5pqsPKJ2nMXqW2MW5ZZ",
  "key29": "5qV9T3XrNfNJy2wCyvvzjTsYBi7bG2pDArT5hzaq5CFRHfK26AkPiZDeWtHfp4ajXn61bm2QYktCaPXZsjHQ6vQT",
  "key30": "2JTXa7Bt2J1cih2AHZPKU7BpcCoxExXNpLcsatTzHaRu2pUrkCETXZxXiZ3AF6vRHo76tvmVo3taqn9J5hEK3T3u",
  "key31": "edwrE2p5Xjde8oD5QN4LhB6oSnofgaGCCeRbV72nZWk7kbQ58pxB4uPbwpNTiZABG9zb7AAhcSswDeiWzgrBJUE",
  "key32": "3ZfzNzUB6FeaXSa2JHCdYA2ePpB8U3ZYSTADboRPq3nQWLjSgK1kFjQ8EfeAvARcDoxqGBFvwt7jr9ggfGgHvqqU",
  "key33": "21mfmzSXpxExVExjh7ud5dKGFtQ939rSRdveHBxQSGkpMzkKzifhjLPDTEoWziMr6RXzuHjmvvc2RZwqp5iPW8Ue"
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
