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
    "3Hj7Qe4EAstoqf65pzqA6QAn8KgraWfrucgkVLHLNZY9DwwuyBLHWhS7Ju6qCU9ssnYoLM1mWx2nSonKUJA6dRV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUmcHXQ2iokM62rWNrj6JPewxzoJR3haTdz6od6BHnwfgHesahrfsoXLjc4AkA3FQRt91uxDar6Q9RS3k61ivke",
  "key1": "3CAL1BRBpQAYhVFQ7c88uVKzk6pPEyGj5FwaBud2t5uBzmjGABUhyvjadtdXkhV5DqYWFdJsQ6rnR4roYS5C32yw",
  "key2": "5TthQiCMyNNMBskZuv4fB4ZBN1cP4i8KGvvyuTXGtwyK4K3sFxasHedCVc6mVUNqS1dEGmP6eXcc9ALputawrwDa",
  "key3": "5kUTP5tcVGDPEEfGCBmzGXPyYdUYtcFCisVDWxxQHykUxUY2wr7UzjuZSrGiErUgvFXBNh4Zoams98tEpX9mkDUM",
  "key4": "4kH81NyvSByWrnuRydJYmpCMnMnrvMQUTkYwvE8Qc1wqdEgWqmewVcvcx4FXAE9gXp9xmphLZaGWJGdDCcWQVmTA",
  "key5": "tqGd267NLeFFSKDHpeLF8sh6UB48Bg2RFoED6N7UvAmD3aGGn9HFTSB7Ev7W9mAWmv7pP3AyAtRVfH6pL2ZkLEK",
  "key6": "5ZVquSgpSGFW8oayTvoKNEhUkNgwNsZEeVNBN4sYpPx1ohxfdHoGA22tSPFHgVfHjMyzt5MkMikBtivBX9ptRRxd",
  "key7": "XCq7v7k8uajDqgNBSYmGJTNZbxsEsDKGuFjpDW31icVByWLr6TqbTEdr7BBHEwp5y4R3qZA4HEXHS2d3R99CFjC",
  "key8": "3N5YRTCHUK4vNL7vECMciYSX3SxYJA4jCCLjLzZMCudYJNYuzVXdhiJGo3jujumpFjgqQkYohvE5r3qMKD5ycnwj",
  "key9": "61FoATKki1GSiL68PZjHG18XnvqLY37knAYGu3Et51dxLGZsfCUUmSjPSDpv3UUXsnj7SFZ1ui1NZ6iXg3CTan1D",
  "key10": "5fvSZrKiVKZ69oHiGQzJbnYJGuj5TXwbZqaX1YFis3RJsVkPu8cwwvTBx54EagWn5eQ4RvzqC5ttiN9j6aBppnF7",
  "key11": "5pR7Zvxndt9aWzzzPuv49DfVqmZVvJw49HCMwLtkghdqr1p7czkAX2M2zVXuSErEoxQpGPN2KSbWkkz4ZncmTpdc",
  "key12": "5bTNQ4aakjpYVL2agNUjqiXq1z2Shza4P5LZhg4vsjsimECXDKWj4MEJZh7GjfiRsAz1JeZid1GHeP6xXiwXuhcT",
  "key13": "3Z9exPhccs76zfYBv4e3PA7EuTz3oRRu3DE7L4J2VisRPgLxnhXTikdSH3RfLL5brGcQSVfp7ujEAr1JbGejcGAc",
  "key14": "2e7Ri3HvbwtcAEh27LCyxQZgkGhCRwMQVhxH6uAfyCGcWqpqwz7XUwFhatNJaZxUYjZxHSbP5ASTcBeXBwa4gLht",
  "key15": "3oENqNiPqvYTqyYHZWUFQN7YT5gXJ4L6D9uNvac8DsxxojkYiHYNFkDfc8KA5NEEZ2Yd57fjqaFE3uUL5Yj1TuAd",
  "key16": "42agecYh1dFS3jJmnQ7t5D1fKmV2ezLjrQcdzMuQD38ZgNXLckRF4VMFVUur3wSZcnXHdcCtHPYfZpvYASQTKBNB",
  "key17": "4NaK6YKrYVeESC54eWewgJqjvNWuC2vTt3gVc2dLUoTmnDpri3iPiqkUeBy1XvMPWtpwGD48vEe28L17aXJ5daqp",
  "key18": "2GFa699YEJFi7wfc2rcVM6A18DFa67pemK5q4Kdp8TmpDx3mQiGFHgqWeArXmcqKWJakb8S7piXHFPy7KLKKMNAH",
  "key19": "2yTvCkduuN5ht78DveyZ3uvMk5ucgvzkAdGYwak9izndEChzUzPbJdJFFWyDziKiFFyETAZAwfeSGjKHm3jHpoMb",
  "key20": "4MLv4hdYCL5sZVHZrYkhifPzkRvFwJ844oVgNR7mrKmsRB2VEAKaEys6Drgm96ABdXAwJLqePHJWuTjc3Axw2UQn",
  "key21": "27avV8G9WM6PSiuoRGj9cm2SgUvzfHekELAeV6Q1pf4PSxNT5aUv6V5d2tgpF9sVBJmNmgCsKYCne28HUpUguqt9",
  "key22": "3YkC1SV96HBU5bqec38dPSyibPsnKdWjfAC724AeNvAKd8KGjXibQ1rTDErAQigYtKLD1Ah8EYHJRPLp2F5vLkn2",
  "key23": "4YEqkqQvfg9a2KW97WGP3hrinLEcxyniGVoacZckamLcRsKXepUmtn4TrZrtTooSTeBFH6FtcGZsJQyP2PsaKYFm",
  "key24": "CxqdqUv7MP8nK6e9yAmKpTRCYYmjbLicowEjgid5tSKi4KwVbe8sbzHnManFEpgkHsnKwk817c9TXnmH9kaRezM",
  "key25": "6WwJbwSoptH3eykL91twrhZMknrmUqbBYoMtgex6MkCnf7DuBoSpF14bm937jssvNnn7EmRjycq84Fb35nTVgJU",
  "key26": "5zp3b7e2sqiZNSnbnY8PZDjUkvbfxrcS9gJhjgXytZnzdE7YEiN6CSHFWUDZdpeaXYQicvVHzs6gg22FLySfKS6v",
  "key27": "4X25k2FgzHRHzPbEg1W78WHiYnSPHYXyr7FWNo55TN1Ve2oSzx7ygbDpdwHsQ1dRw9bZpgxNR8YXiUbvDfHtvDMz",
  "key28": "2SDcmyae5Yj3oG9W968ZgZtH81efTJWhRv3t9ZAdKqiaHvB8Su6Eb4Ca5pcVT1dCkdDSq9zZdybPgi1deZZLxpAA"
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
