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
    "5g4VVhtahCjs6C6NXjpjd8FxkES7JPKDYdhkTqBwCfHUAsYUgzhTouEvp9iZ6MbVZJvyvbeATj8a3YyUg31WuWjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3tdyPcoQjg6pS6SsCZwUJ8YzqqrVahD96cATJ6aVzjrfjcBkTpXXd1s612AhVSezhpf3DedktpWvBkX1uHgP84",
  "key1": "5UG9kivBR4G1PjVpfdRzCtEwtFkmf2h46wSkgNJo9DCJ1VVSY9Hui9arvhCndhVPL72ccNKVRT8sBE4aX82yL4iE",
  "key2": "4LUxgcz6ccadtcLaCqoYEuWFdDQ7Q5C89RMLR7oLqRUhR6KCLZoSbivMNNSjNH4mCHCJcivoHKijm9iTZ8Mx36fQ",
  "key3": "2Bw4TiWGi6fitMvCAZQ6oXWFiwBVTQ3sAJugfQ1KMC4a7v7772EHpfywJxXb7r7HzqKpi95qfTRxw8dX15jWKSCH",
  "key4": "4PDBxAYig2QzYPBw9bRmR3M43H6mDX59pVNKCY8omdkvdgH84FwwRVTD8pAh4B2kNWM6zaVFhY9r5UxmG85nmsfF",
  "key5": "2w9GYxHUf3yFKddXNuspPT4VA77H8jWZVS9qkQbydFV41EwjxdSqiLwqF2q4PJvBYk4W8ASvgQgz5Rp6LetuyhmU",
  "key6": "3gjeSV4o7V6EUa5tEspZBmByHh3LdvrmMsoeJ35NUzdQ6Y8mUDcgsS4uPRVC4vUyJoE73weCQGjqjfZBeCHCTg5j",
  "key7": "5nRjR4m2REWaKcxHYFkDPiwnifCg57XZu9bzS6Z2XxRVqoQmZrxuVtjTadJaienX9hHb9Nf5655AvRRtnw6ea2eo",
  "key8": "3gWaFVEtaCwZZ52pX3bh49D1BMKL96m5DbsGxsAzzqmZqscB8KjTzfThAVNPMz6RVYCQsoG4h1Dys4yXcSh82rin",
  "key9": "2CJjWegeQ7HyEKXQYd8MNqs1MEr31iWXtgnLymGFxBfku4ZJqq13PEtZHnNBtLv7SjfD2rvWHGj7c3MSoF74hJwV",
  "key10": "22fcamNwVCFwSqXkD9AJAmR1ae8721DxgjFMfiqwAsK7FPNBexTzz3uhtVbdRsd7oSp9hm5mU3moVVdW9Mu2z9pv",
  "key11": "5cxM52i1BwTrWMhMTK7Z8ZgSgkNcwgY11PXQojSzG2VwdtTqgrEKWCHCrra49q2j4NTd2JjPWp8o98sgjMGoC1fk",
  "key12": "41kMhu6L427Zw4itu4Pta3tGWpRS24miosMYYi1WgykMEmJkeqLoQpbvpiaRVzBMmaNNCnBBHHj6e6SgqNFMTdTu",
  "key13": "5suFvB1mN3DL6JUMQwcPRWBucbLTiPsZiSGTMK1HAXTvhAQDt6zRidwzFHRgBrNqcZVUvQANqLyETX5KcdcNDHzv",
  "key14": "x7FSU4Lq3HaRRA6LFcikjgkR7KZ4HuqV6maUMx221czFqoCGgXXLb1a1rrDYghUySiuM29PqWfDQ1TstH4WoEHj",
  "key15": "25yzTgZLyxhtxYayPokre2Z3T4M1ShYtEqoQdLPcZAJPPzVeTb2dry5yhGQ2QRUo3izr1dUnUMuszj9qgofJhyuD",
  "key16": "39v6eYN2GkyN5H7dcFSJzkUrbq8aUA85ZxQjkfBZkZaxpWrK1DUt5eQA49RRqGtaCStKPaeoD5m2wd54kdL8zz1U",
  "key17": "3wvTiEpNKV74Eu12VRAzLhu2p1RXwykcgGEC5rupd3sym2SPrFSm93AmPQ7GndoNBjGy3qoFiyiKWw8za16MeQhy",
  "key18": "35RqZaDnV4Y4uKv43B37oB4Xy2cfqFm5VJkcKRSauGEx9g7GVMC7zi44FpdU5yhLm4nTaLLsyu8Cy9DDCkr7R6cS",
  "key19": "5pWUCUJ16rSVXnA6kb8fSydFFNPqagFsFTvieXyqKu5uxuP9NBiCLYzrEGnMc6LUS1Hj9vuKwV9aL11ZDkB9GEag",
  "key20": "3W1WtVboDpLcfS3utLRdmEzCsFFndnJPyKgKqYGo4fxm9nTJg3wirsym5yEazfq4DtR7wQszyjoaf2bFpySHqzfN",
  "key21": "5EB8HAdDmtx9ZosWFTcKsrvinrN7PqtT8xabjsXdCtZVxoAbQaygz36kLvWb5bcEL67XVepKudD9ZT2FptCwHSi2",
  "key22": "5xULxm7Qg15r8uikEktzw8r2dTXJWViSkLCyxBiF111Y3SXEp3gkCtZh3FbfgnVgxHQGArNVpmtsjeXa5UAM3BT9",
  "key23": "3n8C1NEbH7JkQh5CZgsHDxunTq9guszV5RZjuvqRY4shwad9ucMahDBrmUFvboXMA1iZfDaKn4TghyP6bpviqdnL",
  "key24": "2vULHzXaXjCW575FTJWUCzxq7czHnoHvP4cQj6oEKzQUfEm657fvisHoE7bHAeBfvHMFe1Y3KZELEvgLkM4dG36G",
  "key25": "3QbpuLUwKWHzq9ZC5yk5tMLsnCTvAvQo2cajxJSvbSQwUBHmqTBEpqrf4wVzoxEE5y7GFdnesZb8HxsZLopjAnYd",
  "key26": "5iYjR4S5GyJWMHRTtA7FnwctjA8yf15DUR3Y4JSP64x2x9CUXTCQqE4U9nd9tuhwBGiEVmxPG8YUumRYKQLFrAY8",
  "key27": "2PjYGiMNNzExBrrxrJefnpkP2KWRFcLd6S4Eqj5ASN9fPUhQhKonp1hyKNTXYCznFsqb6AHGtJE6WvLTBgoL2agN",
  "key28": "6CSdyknV9q6FobaKszriN26WtzHEwbKdoe8MNA9FJh9UXTXfe3kFjqBvVkqZ1ybRNui1Qmmgomj4FwuYWMgKD7j",
  "key29": "3ZjJi9dNoCAPRsWdEw4eSXEUnxGWUe5PhRPc8SifsmduwFbzWQF4TVXJxqGtSCG9fKoPCMBHScx4esjGgY1exbMH",
  "key30": "4EMst74HLsHSa1q6DT5c4cC7DQjN9LHfALhfrTXe91AopLZnXNzmEfSxvGrbM2rDXzXXBAttu3jWiokMVHABhRMs",
  "key31": "49Qyxrz483uiUmHpsXsfXmHrYTeu1rEFEFh9EjEHr8XHnkF3VLfHow1fpFPFy4cVmaMgMYKHaS44sqmBrrykFvHo",
  "key32": "gQWnDKzFvoQEeJymqXJxREWyRhcrUYFWf1VquyrTGvaCmrYvxqkKAFBc2pGsN8gBFp5btdQv8ELhpPY17tA86H7",
  "key33": "fsUKNfs8QzEPRsAfxt3JSKGMaoii6N59SVQ2fW75rUV4dEQxfgaSubGJ6ybFPH7RE5gaWLBUvAyzRBzeZsc1Vq7",
  "key34": "4aaL5UD44YnSactdei6hFBnJaT9Zgj567DVWV83AzEhAgd67S24SRDm5ggpoxRxQzMpRmwGHYuuVLTxDakvRnjBn",
  "key35": "67niGEaABSerVeFqxjoCVgHqbwb7qwwuEp9xAPFfpsrf3DYAaV7SgBgqLudFpEd4jNXcbRfZaYbwgbf48epSnPmK",
  "key36": "4t66msAPQDXY2mvQ5AF9y18e3KYX5XakVR6ArHJaiu6wfyzEyw5sG4x7UZdjsLxhUv2mnzehCGfRLXTcq2A3fAaZ",
  "key37": "5aqZQYD8dZkUkTpJ3hWbvysKSNGmoBXaewbuFEnKJUFpQ1z7a91AwKBCSRnms2yYqqoBhUKpfG6JavQTf8prLDhG",
  "key38": "5M6i8CJtT6gu9EPWEzfYZJgwpGwpHCjcPubmKFgCCwoLRtzRCuf3MZYmKoipWQw2Vxy5qYkctLakcnrn75xSNK4",
  "key39": "ebAAH2HsVgeHwCRMFurbhCSyowkRiZzSacNX8GP9CEPoW8tJzTNEc3eGKAqkMiFPNyqMxKHxtJRrxz9sp5JoiFq",
  "key40": "2G3Gqg7PRx5suXsK8nhqWWYMtivY3pwMM1axAyWEBvEtuBPAznFsfoBgkc4KBy9RFwvYNpnytERU8fiQmCQZC4ZT"
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
