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
    "5j75aXsNv6Z9whLsrSMp8ZDqYPR8yp7rtyCf2ZK3jkwzFiMRCfoPdicyeoFhk6hZJvbQ6ayYj2hjBrGYUh7i4RNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sifP9Q2qcWgRPUru45eT1RaFX7Btny96TW78xWnQuquYnjBFm6ay9JuQwpM8Nb2Ux2iN3c7RGDxkW1BrvVfr5Ri",
  "key1": "58hLsA3xpJF8ZnZmjL8pFWXT8cwUe4qbbPF4YFM1XiBBczYtKWY7PPcJCgkubL49STSCxsYuKzs2Z952MFr3oJMp",
  "key2": "4iTdNGuDHAg7hXaWtKii2VyBTTr6yAZcG4dF2GaJ9FyKT4q4SX1sAtKEgPcYwfQUwi3YetsiL4cgdc6fdRmwThZC",
  "key3": "5m6V4L5GV4GA8VKSX1H2E7wHNkwCZM4s7Yf5aa2EKAJuwXSAjrghK1YMcdJCPCo6AtxDeyBnsZHbRRBnJQG8Uq5m",
  "key4": "hCTHM9yitJLxAMETAMyeJj579Rji1kk1deZ7c1PxVwWKnbLzTg1wH6x9J19LBnpnekBT4Zm6V69U6nxKDscaWNX",
  "key5": "fHhjDh8PnovCXr4brW9ZDKGnhPbo85hagSvbwN2dFwqyGsRfK4SvQFPr5yLH1xJcsDseY8k9Pu7tYUTRymhzmv8",
  "key6": "xZzEFmo2YDi6k39Aj5S3iaoS8pZnqTFheLsbTaAFipvYZp1Mzasy3SXo4hJyHNH8McCNtktRekBFuLYsmwLSgrH",
  "key7": "QxnUidhnRFuZsFKuZoo5AjRgPKtH2aB5CnswbUrkc842Wh64rXKNqq4ednESXwCpLFZT3i7Cz8dThZUDHrkLxZt",
  "key8": "4CGpwgGrVPQiuvu1kXLJET9TpyYVCtDCieUA2SkZV4trWwkA8dZLbaB1bxiigTFu7FwtVzvyEBZC7Rg11zr4L4YB",
  "key9": "5hcHh9LtswFtzTBWcyxN1hYbbBZvNhakRq3nAYSzMig7KCYLdG6pTrcrqdquUyqoQb6en7L63JJDcHXEzNmuPgyD",
  "key10": "2AouU76VAX3v89pfRN3rZvQQjF5N6JHYV5PE34PDi6GupgNp2iJRwJWVbeW2qchoHLixNSF9VX7HhvyHzNuLZHrD",
  "key11": "5Da8cfnMYTK9ihzLWq3oHuBFEVDR9LehDm4rsPEynPBGwMPWasMGS4sYxMgRwnYuEUS7heKLVB6MZh8EZrDesvWS",
  "key12": "5WkrekoQvFLbzqcH66XSLq6hdCoGZMFgFdVSYiSxnqe4noG7AuTWZu1TvB46BwyP33g8cTGqM52BmMJPCd6NheLm",
  "key13": "4K93P72DzHpAce1dYVh24d8RPaqgpwso9CEiS1XJ9pbiFcBYm4JRhYKDH4YPtyYVECnzk6zgLzMBXm84podgbbAo",
  "key14": "zNyLTF8qYqVQZ9JxuoTB6JNGBz3Pbq5AsZK4gHRWhTymXrdCodUBMkA83YU6eS7AtzzzSWG2ESfDUVa7wiDuhMq",
  "key15": "vWLP8fL5dDndafoMd2CSoaCLvJ6dMjJPoeHtUzuzP7EdmQ8Yg8tMwQahhsyMne89Bzq6GfUMdzLSTrNy4fyq8pi",
  "key16": "2VpPy5u5ifz3aCNes4heQoj9tWZ3ZqqjSJHQtkrrsTXVC53QnHWGY32QkZz3kNoQgJbymDAcNC4hWsYZeKVSqsci",
  "key17": "wCaqndDJDN4WPWWtZz5gEG6sCbsZFoptDjmMpznJG8MXVCkSqGAkabxTSrQJutvEpADfRkmU1iMDSmRRNtbjQdX",
  "key18": "2kNdRcuBJUCf8JMire4XdGXMygDMXstB8i33Zry3DfSn9qQn4Jix4MHjbZzc7WpFFNJBXarctLz8RyLniH4CSN3G",
  "key19": "4drigp35rc5Yz2tmBe8p9nMuiWoYjHwuZ69ZBwGRfjwXj2HYzW9NTaumy4bEPpZ1pJ8yNTQ3cCj4JvfjnwfXCoZu",
  "key20": "4fEgHv6D5G8iAzuudUoLgag7bPGM8DehqbXKSYzc8zehJxjm26FM81SXMfPaPRKieUrYA94D7bCsUe5J83RzsV67",
  "key21": "317mnDrDyMt6z98MmJHXtTymUXpPPGhXZeuaB5SjMaKg2jzn9XRf5d8WEdYm2bjpRFdahrxvy2g1M5K11sh6wGqV",
  "key22": "2RyaAvmSadeFfW5Z87kV4Gj9mueyVgYfxY77qveXuPFqtimWT8qv44KZPNiFtrjK85q3fAaJk6tz3xv2yFQAnnaD",
  "key23": "7WTiecGy99vnjPNP94TeAXscKwVRUDMvKnsrEQmogUUpEZUmKpi7bAubu1DqJtn7Y8uEetrdZYDom26HPfCA171",
  "key24": "2VSk2Fw29Yrc7unR3dYwideB7EziDGX79fHFWqmn8VCszradZe5SK2PKdzFwLHbB5i2HWqT75YPcsMSYTt9L3B5m",
  "key25": "5UNZ7JhVqXHBqFqLj2Q52cH6UDoVKytiZztwkSfJYHdTMbqHvUs1V5Lypv8KFT4wGL45wbHksGnxXbTxyXvoyUhJ",
  "key26": "2iCiRbZXLbQCK3W2ec7X42iyWs5YpQN6fZsSsLgyQLVfchgmCqj7w6bVkH5gVTpAHU5yPmZZaHMv5CQskUFQNLKq",
  "key27": "485EPvNTDVYAVBePUjnHh4kPJWyt1ZhiJ1yioJjqZrdq7iMFTPjAzY1ES2aXJSurgBaRS9xGDs3R56WbEi3rePJK",
  "key28": "3S49FDFSdYB2mmLrbWuQHwvWcXvEARA88qDfTTPMfcNLwcqHZ4L5wQtY46Fbu44HxtDN7NZVaeydQqN4aPEEpmuH",
  "key29": "5yaW3HigjTbec6zuz3ftPJnALV9bhM1GwHw1KJjXWWNWci7Dsd6fxzgBJsCi2J8H2fbuwSBXXnumRV8VxoHFKghk",
  "key30": "5c65U7bakLnW6fwJE8EiTxxcT9fQTsCScwswEjKCrcupNxJVFbBx5SpjQwRRRejFP4wcfSKiSAHxrvTuszu5rpZ",
  "key31": "37Kn2keqUkF6yXLGQbsGFp3dzbgHYwDmr8iKNnqCNYHNB2UA99Mfbz6jtoCgJ2wxJhygWtnv977jjS19QG2ywKLY",
  "key32": "2PfefsBwvmUQPbcj3fEFf9pgj2iGbX1U6dtjNU1Jd2T2VyznVsspKsvHe8X2A2rJuKADq6vyBD9BCDhCBegy1G63",
  "key33": "5Z8YbdwijyKqh9RcG3vhhauoLoZDQMGCDBFeT7YAYHvcaWx4wJ4CQy6zCyxNtDDocxGREMt4eoUwiwCfkFbugBVy",
  "key34": "3Apazhj3MixvJsLdqVUwuwRjLHZJFqkHFXyC1sNFj5quFvT2nrDV1PPQsjyPFpbjjpd6ZTFy1oC8qhvg2nFwSf4Z",
  "key35": "3XN9u8wmNdYyf3LsQF4oHhrTPoGkvadtN2TSuDQ8S5orbDmkGQ9Q3TF5v38PWkoKjoqLGjBVarWtoctGY8uxhpNB",
  "key36": "5uk8xdyk7cJEqcV1TuRGRCE169fLjxZ3xfAUUHoNWgAqQ6h1e1Dv6JxNJP7WngkpLTxqJKVv52jJszkdkkXXjScJ",
  "key37": "2fMm5U7xzYTokhKQaUBnuE7KurZVAp8UvVVSLJzEuWJU1gJpuUiHhstoj6GwgnKWVgfSoFZM5GZPHvGFrWoZFV1p",
  "key38": "5bLjxLES24bhSRhr8oFwa6g8xgWJiiW4DxwiZsd6o8we9kJPPEDBiPfwMXe7NL7nsL2GsABCMnTX7VqKMwPP8vnd",
  "key39": "4uhBKhnh4xEM3Aw7tXRKaVSt4BXeU6z1LS22nYjexTfShmqPA46fDKH8c5FV2wq1NGmjFvVsBBnHXnj3oDU8hjtS",
  "key40": "TFGw1D5AVg9sH8YSGA5RZ1w75VLmrkiVy3fzdsTHZS7ynUwYWo84K4n98N6VsqphVoe4iLC3GYf47Hm4114KE8F",
  "key41": "21pTiNnCQ94BKWtecmNiqcRQpneXHztpP6zR8hF1yYmJDPtgw1XEy5QxZGG3j64RffRV5zcWAaaynX7rmProssQr",
  "key42": "5oEa2LjUMr3QzJn5BSDoTZqckVsjNZ21C1yyiWW2PQPHShkMN8itrDhNum8DyoT7PL3eUDf7w7enrAnUFWikMyMG",
  "key43": "5hqHhNZwBZQjjyn4RApsrb2wWM9Gkhoh1XRUAXk2xbvYui6gpbWvnkApqJ5xk1Q4G69xJ6Dsj2rwjV3W8M7TFof8",
  "key44": "5oPs1x7eGZCVTKF9gW7tygC6tXDW1UnPR4V4zcMnCCr7N96dgej8VTgaQ6fa7pmhne1e32NotWkkhJo4wVia4hqv",
  "key45": "4werWBz8DT57JMRnhrwmUqSJcy26LFpWsHa98MGkV4VnRGdq5cdLimH474WwU6yFZnDqtLz2JiQL5UJpNunhEdqf",
  "key46": "4hHUbNb56avXW64xdZPzYf6LGhib6YKMTNdVUo174Rjsbum6vDQCMXdL1tfE8rVG5AJvMJWMAqMgH3PQG8Lrv4Zx",
  "key47": "5PeWx1Fpk5HbD5yFXwM1wW5FjndLbxnS5uxqr6GmvdnEyHHYtAGTt7sZhqZNiQ8d8qME2teFSSv8Ld7MZ2cv4EUj",
  "key48": "32o8PYDvowf33HEgv5bXwKvfS6KDdFUn8cDSyLKwv3LXTgdFNRLyEkHzdTYn7i7SPJoy2LiDtbo48X8YS4LLWeob",
  "key49": "4hnWXirYtRgsT95iuBBRW1oeAVvkrnfKbMbSxGUv9p9wXkajdqRS4nDGh44BGTpYLckz4ctSBnTiAP1LjPTN3ty4"
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
