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
    "XZMQJiX9YJ1nsHC4ACaugnUNsNFTEYYURRj5ERS8vDdvyBVS7BZDpcP1S6qREnWhTe8kHWHQZA6NdSUt9W1Sdit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Up8t9Fb373aA5z3pDauqza6sq1BJNvDqT7SKms75e7F9LtK5xJMRf6fzHQW3MNJcspe1oextdCGxMvHeEJF5GA",
  "key1": "2UVXfiJZdCaAf7ydpyLHwq4oVyx8jEFqssWnjZKadiuWS51ENTxrmLoc125ot846eoiTNqYJyXs649AiMKkc5VnJ",
  "key2": "4Nao8wAwPEGE1oq6vDmFBP8AjCfRtgVKY9j9HVKCbS9W3ZoN9pWuvWTrKibrTf58KmnM1fei8ZB6ZRr4k268Qtsh",
  "key3": "YSmRj5fSSqrs5ZLRFcEok5Re5HuVETS5XTBQB1nxr1ifLAbe2EcEjQiiU7CLtZxrbmNT8bdaAwgE76aLi2XZV5u",
  "key4": "3NBsFFA9Q8mBrbafoawTEXgU1h6o5SZTeix2FFdMCsDcUgEkihFubd59NxnyyM2t67Ho5wWLxZ5zzNL3LEwVw5Hw",
  "key5": "4N8gmDqkBhQ3uGD73wyjDFvj5SG9Pwoc3vvqvurLWawp2vM9rjHiRhASDBNCK8xyP3tFqZ97K3kXFBerCwixZTbN",
  "key6": "z3uH49dAE3FbULH1jTiRtBUM2PkamgZTMYJFXfraL4DgkcqSF3NAECyYE32B7nacwcgEsQuQoGjQLYPQbXokGg2",
  "key7": "4fLdq4m43nNbd2TDL6MXFhtToDkSotpD9KvgnMVUNpzkpjRwLLrXbhhrytNdFUYTMsJ4pFRMHU9r3XpkF4mmSH3C",
  "key8": "vrnm5Eo9Uu2R7asRJDYhMhhWU4oQPwVu1PNLrqW9WS3bq9AbGzYHjCLNfL71pAjumd291UEx7S8YAMnWvj85CJW",
  "key9": "3KrSH1Pk4eKqGHuiySnXjm3RDLebFo2hNMJBFkZ3bun8pxm8CrrQALRsQXjpxABPX7QQygonc9FYABAisREpy8Km",
  "key10": "42NM2La7nftxvRZMSMXEEhoNiiCjF4tbbGTyXwduHhkkiYAsxaJZJAnkaAFGD3d4BsmhjCFqTBC7mmx6iHnvEsQ6",
  "key11": "3qw19wrSESt5EnD9d4QLoio2WB9JCUAtP8NhJDBcuu37FcxbF8VeJrtfRUA2Z1sYfkfTdgBjfUKZhP9V3Po4nmRA",
  "key12": "2pgy6YQdVDNnoVyinJvgxYQYAk1R4LjtVAP1mD4wBL4UrXkj5GfZwdpnXZBEFYMwWWSVuYFZKSoitM2J1U2Bw3fs",
  "key13": "2166bgEfdQgPa3vsKRRqGxXLWjMBPShAKYrsm23NQUV5CqMrN9yytsjMBpbM8xYndVpCXjQWRQGB2ALdB53sKD3E",
  "key14": "3p5kgHr3j8FH9nTqhFRwKpE37vanb9vfBxQ69ZcKB7t6t23MJnTvb5aZauYzjNW52nvwb86PXfVJg48RJRaw6pm9",
  "key15": "2iiumn4oKzBUDe7stiCoVZbnn9Unsq1MsxSkgfTgGBYMScCezHS3MAqPCeb2T3r1WKStccsgqs5A5ZuaQMZstNCX",
  "key16": "2EAZA3hVkyqj9dhbxPhmaBWw31GJjBssLbLSUjki2dD2hujxy4Dz6RFUVR2UsYdHuLMSUnzjE5J5SaJswGWqJoqG",
  "key17": "59ytH3ZMLDzNDnj3QAHSxACSAd64dCfYX8AY6qE2nvZ37bJyMEpJbPF8RYr3hojMD2H1Xi4SEoSwxaLqw8oYaMfJ",
  "key18": "fFncrDiUDhzN6Uv2kT9uqnQ3yrV9vhhKc3jRFxCHVZ5Hd6SJNPSApT2yiP7hqbRmVq3J4ygjVNtjiQttT5RUgvu",
  "key19": "2WuxTNfe8hQ9ow3KUCuzWuLf5xjSP7bSbeH1NmjJLthiuv5tT8WCqoxxsmYgP3PSS45Da8FhMZaRe8vYo546yhK6",
  "key20": "64qNtqvsb9gaP2UZdVz4guV4fRaEPLUjkNganwCh1kz2JoicpF691EiRhaDJjKMCRCwZtPLnykQVV94xC6UDycHT",
  "key21": "2bPNRgQxm1UXkV59PX4yuXwWoxD5RKB5Egadzy2YbpmE5yhCqc7YeGEbmFZaZDG18omzPe2AdVJLgXxDSQ8KRFtf",
  "key22": "2uNi2hCtakC3LuBPt1ChbzLAyAoTfskjwXAEDq5UF4MyYCJJpTPDwciZPsMniZUdcBNSheAWXcwYJsb8s6cU3ehc",
  "key23": "zUPhniTTF7TmBeJG6DcoRHAnCwiz8CuaXBdXmiRsyKbRFaLpKDnPhQnDiuxgHvHT3VzjfVGAWWh3t19HFQQzN7g",
  "key24": "2GqkiDYucFjfKgq4yfKcaKKfPRVuMumNfbEzDWyhaaBA3P2pVLWd8sD7tvSX5GHa9X6gdBRqBG5qN5MGA3hhAeuG",
  "key25": "4VML4noqgySq3v7h3D14iG1eejXMYp2rbiZk7wpsAeP9xbLiWEbrAu637ZZr81HCg1mqbfHReorXnKU2iTDD2rev",
  "key26": "5oTQYBNDy55NYgCs1Q9FyUWLzCNMJCimZHdMXTSyxqTQ5aQUnP8WJV23MRTYiGBnPfEtZHXzNs4ibumWiAhuq1zA",
  "key27": "2nngJZJGUYbnvupSvoDP9wpBmFiWvkB6KNmMTTKrt9Z9KmP86bGWbqwUCz4C6CYJ7st5papEKkVJRQyLRCqfhsUb",
  "key28": "iukh4kP9irdWQjhE5iScgBpMtAKfmxCFmE5JS5xghLN2GojkkxdwjMZQXg6bxQiN6WdCAZwXHpYvqKmQJbBo7qN",
  "key29": "4sEDBAYnwURm2DJeBdgr6KUzuoFJu4ekLMDjwkVdL4gaTnBDwxwXpoQHky5h5k65Xxkusc1S7oXzeXvUVSEZk2Ru",
  "key30": "3GTCFSqUQQ48XhZm1usWLhYQt8WHkS7K1NDBGCjRs2q9sznVFNqaUvpzMh4rnjhyDp8i9bMtVEtc3UB7tGJbNNZv",
  "key31": "mvBruddjrB7NjZMQkzk9uBAeoVuCYDwwZxVMSkAzLAWRdktAqs7u4MpUF4zSDAeUxtaXCzfSvFWwrQopJCoj2Tq",
  "key32": "452to5uwz5YocVhK6TF1XEf1SHTTyjpac4r7YnfyP58DGAg5f2UXfvsCJLm9Xbp6oGQHGjgNoJTXDUrvJ6kSyy8Y",
  "key33": "BBz7drBAZXHBuVrAdVDf24R9keSfBy5qED31vh4dyZY3LyA9XMh9FFc5PscmRKdG6XzWTPfSvbtXzgbUo1vxsEW",
  "key34": "3Jb8CXDMReA58APhz6kqxXDEh9SRJuS5ZkSoqZZsDpS7aptEeT6V81ceAhwwKU7ZrPQqhgqHWre2HRw1xiwjRweB",
  "key35": "UsX6nC6dGNDv5j5jLbtvxhoDNCjCpMVaFNdoxDgFSR1x4YLJYNyqPRBHvnvLnRky3VdbmrHftnsBYch21ZTXLUC",
  "key36": "4NcNXT6vdWhJcLnPbRAqrm3sBfmCLUNubwCUoYiuMFo8TK2F7oJeDEsf5GW1mN5YmKMPPmX49oJ42egaxRFGod3d",
  "key37": "2B6ocA3qrCDxBcbeDTThCPPV1Av2xueGCqrK7ULxShcQ8w9TjjLNAeD6WuQrvKi3Jbfn33XsjjDLCe7p9nFxioXG"
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
