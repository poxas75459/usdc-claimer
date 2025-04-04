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
    "FjMYnaVN2q4fhCW5aAmy7rXwsKSvjRdYy3TzohaGAr5vDHRe6JNqt4fYjnKCnQiMrBC4rRrKm3N1swt1UxBB1YX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iY6DUB9HCmDjSycwsrXLNnWUjGmkxrTeXQUhbsvKvDxFEfgeCB91YjGSfdqCeXLDe7QZmTsyyrKihqqchqZ8Zkk",
  "key1": "3jwXKYxgqE592TXtsgx97jjz4FZadAPh7n4kxvUTQoeqBLoak9jSGbd8nj6X89oPAb2KPL8Fb8E4JB4RQuhkdaTu",
  "key2": "3NZ7KtBtJpSQG1uCKBAvQ1k6MSoKuB3U19sgiFDncXgQj6fJ1kfFFiAG6Hg4Mtke2Cx8Cu1uWAUmPdctK3WQqeSK",
  "key3": "PerTdgDyyNbZ9AAvoENHaVLkpViW7xuERBkDa1qS91uTkMYCDePzPiJAzsPddZ8Y69STbtrYjMih4vm5yYVhLex",
  "key4": "3tyDomgDeqPh6YsydnzcUd67oxYUx74dNVDVKhRKwMn9WMZFZjdbiaa3gsa7xGarTVwKjB7Qcq5VXN9K3Ma5bwBM",
  "key5": "3w773bCSgWL75rPbHxubmkrfkZTXP9SLp28wbKpr4UzMsfGq3vWVW1HA6tjKR9AkXdPFkW3YTQLU5d1ELqu2wtuS",
  "key6": "5W8hVhrTvwBEHrgenE8TNYA6Ksk27ds4pzpZ2e8qhGzKeynCMYU4CiADENJHdg8G4tCeA5YhotjE1fswSAoas454",
  "key7": "3KyuAguJYg86mh619EXE887khJwMWDSYxbFVUed7GEcZivxkemRSLahSx48dbaLqLQg5N3PESZJVbBoz8T7gsTaW",
  "key8": "64744oh1r4cNsNkALUFWsSCkZ8ziArDLWvaCfv71Ek1twZaaED93ZY4THjQXr1u3xF2vDKCLXNwLb4gzXfeWg5Ae",
  "key9": "4VsMNdhEja4rqSQH5LixVZ5jq1rH7wgnbFZj5nKeoVxKnfNywCjeHLhJPvjuyenN7m9H4Q8AiXbvqUem54N9CyxC",
  "key10": "21aBDDv1pMZYDtebQuEY5F3dQ2GwMme8SuKP9he4mG4ULomBeRFwi5hFnWj1eL4J6cefr4aBKjz43CCaUM3bdALg",
  "key11": "4x7GtBEzg4JoNRXAyUyys3Dj1DhDmurSHGJj5Zbbm7CHzqmYk6jyNhVUqVXtqRWN73Ezk1FpGZ4sV9rZSGFvUA5o",
  "key12": "4LD8ZBGqfgyGWCW1USCm168BAUuC9enqCMXXaD5LE34wdtcm9gWqgFZCHWGkm3V7hKWXP38KwPh7prX4etKFJ2nc",
  "key13": "2psDFs8GwNpza1LWiz9S34eQq6xP8kwRCRKFhb7is1sMKoVgagaaGxYqNdWRUnr2GaiBkp45qLzz6uof5e5HqThr",
  "key14": "2ew612YUNiD7aCsxDyBZWLcsmq9L9HcgkRd2gEbzqwzPzTMcEoKk6AZjQWf2jNb929gb7wvGtkfJExqpvik7vyAt",
  "key15": "21KF4tpk9evCa8YoKuYnH6GaAjT88wDtqdx3DgcAXf3dQAVivJQY4FTacx9H8rvAa2USYye36U22ym5SxP3ckM4o",
  "key16": "5zCGRSFU7DVDhPtVXNQ5JTQe5gxdBzwrii7cmmgFPcHLTCwyqwMQmm7S5pbRoSMxbiizTKBSe3656SUcegzuDkvs",
  "key17": "5AEErEw6meSQX2XzQEydABjiE7Yz1TJYdF32hv9ErwPppRaqQ9ti9xvAYoyW2PxQ5SfqDDpVdMrbLER8J6wANiW8",
  "key18": "2VRgsFMErkUgkZYJgAmTx3tkftovVk3iwdCiDUgXsWPo3kr66aUTw9LHwWZRhBfahgK9SpzaMM7sZZAVTtdGwtex",
  "key19": "9usAH6Hf71FjZ83oNdJPQE7r3anqxcgS1HnpBPkRFnAKKebpA7Cut2G6ZudpekmRa16emCgzmzrMsQwZxMiiKry",
  "key20": "4q4oj4tT8xvespottacKmEdLhgd2dB3JJgW6Rrv8ue2tXSPNbwUQAkGKsV91Z7jAWEpEBpuQ8ssDhMXUDhqz8pyC",
  "key21": "4zENq6rrYZrLYLiY6f4RgB5QKmoLvXYHD7oRzCbQ7am73BJvn8xEBamv2zfbzkVTpucHE9Uv7TmYtrpaUtjjAndz",
  "key22": "3qbc7NY4WXamd66pfsn4Ckwqev8orjsXKRzCCxNKbpiYhbgDr5DB4yUEEaYHou9ivjjEL5kGxiToZvx5imfyBrAe",
  "key23": "335mXwjzTny2SjnEBXwPnKFdALMRcqXxuNXoWH3fnF2n2QVffmkX5UhgpNwmJuxVb69zcwciVzrX9YjSRS2xzNR8",
  "key24": "5N7cTcHhRdgy1QsmBEXU1RoHataSKgdsW1SukPagf2pWXLBRZb2PAGSg83sQJqj18GyHV2VMhLvzXtB9jwzKYvqU",
  "key25": "44RRbpLbaDU8fnJhhoAQRysihHopyzfkzuSYRJ2dhmDGw2jX5cH6f3KLzo6m5VKyBKydWyjB4jvi8eMsykfcPX7K",
  "key26": "5dpr4SRB7CCxJLnhpGVnzZV5DAB2gYZJZCjRttManYEjd7bbFP9oTp2mrEGyC72WXR4W81LTS6iqVbW13YsxfAtA",
  "key27": "5NwjPSjbdDi4aECLD8hiHHNGEKnFYDBAFs5RGtNcXFzye1dGgngPy1AActnC3nkgQCzVNvbwxRzHSy2sEyRDadZV",
  "key28": "51SiS33J6GrA4foh51Jr3XbKMDxZjKhrnTeFvwvw66qtCjdaagF5CZs1qQem84qYvstHeuLMPCJMVUWm1YE3VSk7",
  "key29": "2Lw5WzvN1n1ZFFghqB8DE1vZchXCZBxR828JpcDiKZi1CSe8jBdeGA4DwNDX5tEM5Y7WFGU3e6LkH393avde9Sez",
  "key30": "3zZ9VPZNndjTZ7CJ4gDRiKz8W78KLnkagsCiQbo84kJGEh86XV8TCqcmZah7UVF3uGvSssSGfrHbyqunZScmquYS",
  "key31": "35r7vJXBKWFp28DScduWGgwRGr6UsEUv2GZRriRBPFj9T9DrVBCEGAb7m3kCF4w5L58xAoALqeX3j5R4yrAfXa6h",
  "key32": "5iLoom8dTWzc8jnPGBUiGT8HzWM8r57DNpt3Pwseb9Z8aqRoLbKagX22R4CZTn63Ssf4Sfp86A9EhfjGV279AgKf",
  "key33": "LHQP4ZVauogzyTUgzvejHXi4MQfEVCP2ZR3BjRQvB6XcqM1AXbjfTrc3cDGhx7FkFSZpjaBW7T6ckbPh7nKbm4B",
  "key34": "3sTTLuYgGytSNVsdi726FqJvZmUGn26nn2yaCxv1P6gPQ2du9WAumqyBx3NpkmwzscoRkFsic1B8Cex2QPWnDY62",
  "key35": "4Wbx5cuRSqSoWd8RZbjxkXoWnHBKgpDyC7kfsVkSrNKTWMdzjEWEu4nfyuaEUchANc86ewEfGSCXTwE4sKR8csHE"
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
