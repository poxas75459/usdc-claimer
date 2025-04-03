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
    "5EUWTkiyDpkh51vuGPsMiPRWKmB7z6CpeX52RH7ntfUneY9JK3KENSsYKydMcWMet65xoXekXaam5vRFd8RoX2jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Amwfympasd9K2ymSVMVC4RSnpUoHWMwY8dGiTj2eLLkz4BvEdN7vLTqFsjSoLiSyvZczU3uR2EjagyQkbdXZLn3",
  "key1": "2wDbLXxWCQ7cUvDtQymtTSwdzJaBTcbe4Bpm5KMmffixWraaQoU8NpQkKjomnaVpukjSpN6WW8ug9XNH7LRTyJXr",
  "key2": "3YGaupVZYGcx6JBh7oFMeeGWPse8uYVwwL74Etu7VNbLifDXZ8J6nLDQFMi9hwpXJTc3rRegGqpag7HeNbLqca4D",
  "key3": "2LLBHyBFZK4KDR1CQZPDjUtgv8W74h2WerSTRgDDZMXRpWVSFAVxVmfNTvDCiXWGiRbJfHC8CaeFw3t671viPJoU",
  "key4": "3EAamStwjv95KMNwAaQ9xotHTV7nxmn5krQohy4cGXKbBvGLnvg1WjnvBFpcpP7fwWfWzM9uNLJgi58KpjpD4oma",
  "key5": "3ZS1PsCckRKGW41Ywc9mtjqcRRVoRunqkLTBGWNrupb7MFRvjTdJBagVNWB7BqnQpbZ5nQ9av75dZJofHKzj1H8c",
  "key6": "4pp3pWbKHCBPgZm2mmABm5QfFR3gobqTw6M2n1D3mKjrpwhaEc4MgxssbPj1dyV8GLBRd27U3FTmmVpvCANTjQV8",
  "key7": "64tTseAECcWcv4XmyNGtSrzcEnGA1DS5ueJPc1Q26KbK7hF7mK6SuPoBv2HpZ19CUeV2Jp4c5hzdz7r1xexhDPcu",
  "key8": "3BNKteTGdCVVB5dFRXirfy11jk872nz6hhFzHJ7BwvbqYLzhxqCQrdF8TeJRPjcTLJ6LpPkfer3SdRGcyMuiHDhP",
  "key9": "5sGVRLmCAEYz7ufVJDouC9TGXawz9apnphrZ1UkTRotA6Ytji5hVeB9CaMpuoHLVmRJ17TmEo6smjpxKiox7Fcm6",
  "key10": "2KJ2FWhaz1soytG48Yw9eB4PNZUz5bMYsMjGT7XckGVVVUFQbc7BAXV2wKnEjAY1yd6LU6QS6JvVbSRGaWf4oYGi",
  "key11": "R6WMsrAs3YjWafHHktmWmqZ2foqqa7Z1riB7gFTx34ZtXVZCuKUgrx4N9UzHbpAJX2fknhWF6AmKBGXG9sNgT3T",
  "key12": "4NyJjDAimP3AcSZc6nVsVRjGxYs4HWp17UBxmHJXdb1diotT9ghTyGPuAUKqs8KERj6ZbdDHQiXRpMwtErRoXpSZ",
  "key13": "4tEijHYajhm9cacse3nBw1hh62P6cDGeeDXT4nCPJjcYSXKuVsQ2hNF8KGSXoiSZWWqzHBucR5pmmtY2wgx6K99Q",
  "key14": "4FZxsEh2u224kYdkWKLADN9M4bGa358Tv9KzoyAYx1rqNhn47UFSdXcdBgDYVwVFDdXJPRqCmT1ML5NDXh4oG6UN",
  "key15": "64qRvRizsNrpiPfPsBwnEW1CkFAkkmbFwLgKDqHTRZE6hbuvH1DGBgHu9pDZsKfQx2H2kAErZ6n51SwZK7VgjoAu",
  "key16": "2ye4qXTWN8WkRLqi6u3MeepgttES6MP5Cufjxp86xUbYxA8X4qmDyVgiPxktfsGdh4tNSsz5bDpLQMrSRfCSawVa",
  "key17": "gyqudqvea2ekCAXkfxjA9TkpdcrGeZtZQnxaRQH1mdK7KCNQ47gxwsSJtsr46eJpxLTDNazv9YbihtFjA6C3TT5",
  "key18": "4HjjoAiyV8cF52U6sHU9cBzki8EnMeEubUypk6EbZ5PoE7qbLpLCAGrCbJSiCNNyhFhdg3CA36th3XLRb8tkWpY1",
  "key19": "DDQF3gTeAVTTGNAhfuVPmR49AmjQEfVa8Ao3FZrKfEv3AReu1xrMKCbtPWtAymt5WDtQ9cwaKrCVHzHFKDMQ4X9",
  "key20": "4GUcXLL8ALWuPwwpQWGGLXgddmr2gnuwqrBXAZisrJvwTr7f8YbDVpvcrbV1Cvxq85yydwLDJAjrYWrrV9XEReLC",
  "key21": "4QYYtfcVTcrnkjPtdSBCJbfbWLcRjMjt8ZYH5adC9Sf826YakeowNpy5ZGFdi6gydRNSKueDyJtTdjc3UeD77mqg",
  "key22": "2MAryi3eX5mpMszXhczHA2doPFTPxgpdbyDM145C2xxQifJYdBotsrvaQGQXmusXUhc5iqt1uHEFvaGAE7eGefJA",
  "key23": "2X7U8SXo5RHvQugxosS3cmWDwYZJ2Ae2K7hEcRJyBMjCkt75Wg3sW4QV8AucqtMVnHex3HBSvJ9TUg8FCmtVV1D8",
  "key24": "4FqsjETFm4MxkKq3QmDzSQvosjAE7t5EyNvTn1iXwo1gWTsuBafNLyanPWacUc3wPWJjsPPdaWaf9uUWT2iosASX",
  "key25": "3e7JpGgdkNSRtEhN7xVNHAkpF6jAxy71WG7prbtbFzxZgq6MoMX7ZQ1bqrcpfzVZuTsEqhudxYKc1AcEg6HTgaob",
  "key26": "4oc4joXyJNTF72ADCz3P3Z9WYHoBXZ6jtGmokEdcpJrDuiaFixRUUZNFrfDZVqVJGTue62q5SJXnwuHuFWEBehyv",
  "key27": "5DAkyWT6nM9oj1RE2gPqYQtrWiWCUF4mRjoCxMbJ7r4pmbDv79f1aY2aGxjv49sLvLY1LwodqH5ZFPPbae75mHVM",
  "key28": "3HkJ2xx1FEoxypawWMtaoYR1WSkQ2dthw6jpMDUxDQjs2G8ga31TzCNUW1oi4PQvNbrMBcwmgyat6Gq8eE45qdca",
  "key29": "2XQFPF6aGDf5JV6q31zM5VXTLt6976UBXcta728GWu81RzVarDomaJYT6CjVUfDndYKHqCw4BbU1GPDk5FpMX6y5",
  "key30": "hRX3BffujWxmRj6adDityGwraU94dAPWvx9y7h448fhg8kiRgFAuntSwLUkyRakymZyQseWuSzBJNwDMer5roKF",
  "key31": "zZ2YAZCzy5TejhiFaoCTsDHjC2TZvYmvY3F5v4Aaf5zbAKKc8XxGSrrXNRu8ovd6As9eyg2Lp5VMsr2UXDwYpLh",
  "key32": "2Qa6NcunJdkYR8R2wchoQoVaJHQXvZstyMZKeqZVo8E5cqfLBMm8cPSs8HjeLwYg276JTpDwCnfxGAfv21pvLt4z",
  "key33": "52Uvnh7YbvKDAY61hsuDtjQkxgWcLpPGgWgkvT1B47pJtjCmUaJEbNkYBtFFDC9tBPRVx3mCTiZaSPSeDfnkCRcy",
  "key34": "2fjfp5rHXs8iNrtUPpD4UetEsMjr9AV5aL31X1TdkTm2q3ZVrc3FoC9mGA9cnXjhDJ1KVAroAYkzvxTcNiNr3Hzd",
  "key35": "3h9rwzoXVjFFHrjC1k87rDRnhejGxnWibEDPRWB8BMiDj8Z5nPznx7w7peQTjkV3uSc8khG9iVz6VTV1YZA6Emjh",
  "key36": "3P6k2ow9C2Wzz2PdzTYycYYt833YPt4sgyiXyg9raEwU2t6ZB7AkQNE6zC61PkDiwDh384xBrGYw9gVYA8iY4VvH",
  "key37": "5fbNUXXZfKDNqDcEExhccHHiPZAPaVGAVgLeJ1AkS2ZgCxRD4J6XLakvxdqdW6YA1ThWP1SnP6AyCQmuM5tG2GhG",
  "key38": "2HQv2jFY1bXSergj9QXY2D1bUVdMmbwb5WfcewdfPBFf5ctEsTJzUfKdD8DggXqeNer3NvY7utJ3Hy8LKZi1Qkri",
  "key39": "5dx694i7WijVwo9CbQne4jLtNQqA9D4QvG2gPAqMHG9epr1wVykwGt7xi6AmoKgpQfBZpAfMwiQKGf69XdLXF6rR",
  "key40": "4WwHihWiMVXaPQfeBeeF9pqzKkYxFDtPrmdmXhsYNLrRn9De7AGc7oS2igTUQopd7CZrpxQLzW7e2nx1xjoruffp",
  "key41": "HU9h2RFHdUzs3dVRvzwGnPsV9bWfkNRCKH81DCRjHGn4AVSgSryoN6MCdMqSATuc62QtXmchDSSao8LvsHhudDn",
  "key42": "33DNURuPvcn12o3gLyX1jwASDY5YJYmvZYwmRSCn2kZippryq3X4L2zkuXuR5CBVXmMS62Uv55MUTLmoByzenCDX",
  "key43": "4Jf3sF3qiBnjzfwwymkuLSdCbs8RQKPE2cNvdvgYccupPuvUL3M67rpYm58FzqtvicAMb1moGF8g6BqRjDn3qPhy",
  "key44": "a5n4qw1q6DcScXSvJmKR3hu1jGZ4YVEEQFv4qDxQmCAGNQEkA6kAMGMxRRKYui3yeJnHW8z2XKmYt3ZNMoKBTAj",
  "key45": "3wCvSCzwHvE8AfwZEoDUDVfk7RNphRxyYZFDMk68sWwdTMDksKR9AmNWCctWoZy3S9RxQSfwcitPqRjFERSKb363",
  "key46": "5M1tH1MWzrsmaLZdmyHuuU3HeVmQeMXJahuHyscCiUSUMe2taFekv5Piv6pqAzrPxz4h99m2SwHdT9qamk5DcekJ"
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
