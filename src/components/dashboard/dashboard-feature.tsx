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
    "4Tcurx5TsC8etqP5Hu7iUmU6FCyQF43UobcoBe6ZDWwaesQrf6Tc637b44dfgRsU71GwFNX4CWtCYAt8ghEB4Seq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GL7BZsjZyKNHBsDBvRfFmPdDFbbVoxBFCbiH4SwsebwGFGJPcQxDJypNARczXpgoDGY7aWeZdFtwSnBabmWoRaR",
  "key1": "226xGKXLpNXEgfbtqLjEZ9ukNddXQEmX9JaDEoSSU7cd28A3cSYuCzpW1VNpFuQu1gfPmDeAnv8HjLWVCh7A5XXV",
  "key2": "aGRUVEC1dsFiCGp8NiXTXqa5BUXAaQBQJ2cHiZ1uyDkaZRENkHq8PumHZJkmgiH4xgE5L8uKXEfnPTHc2mgbMHj",
  "key3": "5bkjzHr7gxHUUC36X7XiTe8zC2bZveQpmnsFModzcucnT94mALyaVKFEML9DsRAFxGddwvK2e6UgndWtgGNt1z5U",
  "key4": "3qSTxybAnXZmufcK33dvUkKurJ7djJXseTdvLypvpVbr1hcWNMAm8hQqS6kzznvwrPfo6TvPJzBaCfG48HgeztYk",
  "key5": "5Qfvs8gfXF52NuLJPLjbPccTHCdrFwq6JBJ2TNASe5oD6BTVYpymnngxXtvFTbZVHJhZ8SQJeR8pAWvpQVoGfbUp",
  "key6": "2sfdA3MsatqEjoVjrUmNr2V5DdrnU8zFJrLNjLMJwXFsK8ea46VTaCbGf49Nna8jv6ChBPtyYisDRpKf78naYdnD",
  "key7": "53ehRugaCJWtvzKucFCCfWFzMUA3CmDSrSfm7ndQHA8kNgHFg3vnCAQTsM57Qe41qfYprp7drvZKWnn4Rd253N1e",
  "key8": "47HYJGmkMkBbiQBLzicrjAbWomvY7RmCxGEkwMFk55ACaK2Pqt3nGrfdVLfMdCUbWYRuVJgkHK5Rie9VneGjFgXm",
  "key9": "2wFc1q9917YWBfQj6UPESwMydxzuaBpTeQhgjbyi6RpDDYaYVQjN24egTCuVxYgJjyfJbBfdRuumgBErruBgoN67",
  "key10": "47nBjkWqGxAaeTMYX18fiup82qHx7CpoboNUen2R7dHYQUrFoSkMwZuAnQToThiqETvucG6waNi1GcF7fazhXgEB",
  "key11": "5BposrPHUpJGorSpf35nP8XVhBfKyz7WKadPndscfhBhm1S6mxonLcGf2tMqYAjAjF4gmmrxvkme1VAKyurPK439",
  "key12": "63X5VeTFBmxwURYNyYLmYW6q5SSE4NxnKzVADuEDd11FVV7sRA4m4bjg48bb2DQTJ3uGyGoQzoXFa86a6Fc2wbm7",
  "key13": "23uGTQnNM1fZA4GcKrYtc5hyJXf2SQDuuo1YNEjkquCDS9Kr1L2jt1WishpEKGJLRMSmYFt41ghpFHKy6bN5YuzM",
  "key14": "z6X2sAGqhUALSeazYFEqzNjQ1ffZUXrYBRjTJwG2ahe77hM3YvdupTc5WDy9EFvotXiZTSgYQCRZaNioCGGSDCE",
  "key15": "2A9Kqu9xN628jUscNmf5KcWjngZ3kpyGPdzYQnw7U3Lwi9pjTMkUB4P84kxHMrFwPHGKMAwJ9XyefHaNupKGmG4M",
  "key16": "2PJYnbtLaMsn3J8v99AY1waa55ZWHo8SyfbnieoUEuhSexaGtTnpfcq5CoamKvseBe6msgR3GcEAhZtbSBGhhJB3",
  "key17": "2oSPycmuwYSYd2gPSDVdGXJN5TegiBtCUSgFoWBn4u8tVzEvGtrHiWKGKBin3sd13UAL4Nu5ZdBieBYbiBUhiuYj",
  "key18": "2hpGCNErqphXPuM4ULJw6qKBE9DVk3RciaVo4iNehSNFJrsvg61zhTTSw1c3PcVWYw5DZiuBqR3TY3no3mr7pXXn",
  "key19": "5W6SchaNge8fLRRk489xYMRWoxW8xR34F5M3rM3sWHRhXfxPjiBW5uMZRVeWrHUckJG4JeTjXuYo99oyueKvsvfJ",
  "key20": "4cA9oMjCayXTM7zgABWfTEds7EbKhXjsoJ852xmSxF4ZCrjh9g1qNR17aAJuk4eT8M4nKFBQwFNMtSoD76PcGiGt",
  "key21": "4DGXnZxx1JF6Sgapg5wWSsVw5Y8z5T2hUrY2ay7CoCtRPts2CDcGrjZJFhDWBvnE11ZH1vzGzDMYyuVXjVHFDexn",
  "key22": "4r8DriEpeCvWF1t8wNP7U1PucpN65iPw2G7r3oP6hMtJ2z6YHShERNizC393d9fvGYJMMUmtnZ89m5h2yoCvG6tV",
  "key23": "2qDGCPzaQrXrGAFRT9uFGgh2EES1eGQc1RV9gnLrz9u6EoYW4YcfofNNz2MsVET12jtwnJHGdk3EGKnEAkNXGBJY",
  "key24": "2DEiNEuyzSB3YS8gCxJbcXrz3HyF8hRYkSt9w8dWvn7yHANKxSsrebZanEci52WYgjwmwumciB37FBfDb2wUALQ7",
  "key25": "4m2Y3Ro7dn3qsmS8R7K4AEzoZcVL27gpRo4GDxc4vGTWuZETcgEnDbSpHMckpAYnUsyiNseAn9acTHRqef6uuq3N",
  "key26": "4h3JwqV3XPs6G3WiwABA4SpwXzZ86k3uqSsjr9ZDXFFuU4LwJM8wdaQU2n4woa2qcQWRXDQycZhj5eLY3vYTHfAH",
  "key27": "33T9HA2RJukXpf4DZQ1a3JM45JYJWhJCuS5S38obAVMAA3FZtLbEsu6a2G19VpesdwV2DQZw5sV4PnUkSY6cTE6N",
  "key28": "36SBQr71yRfQjB9hb4bVmyCMuoN7L9LCykkb9uBDZptic2co8uiXGhYwebxRMtnih7dFBFNJuWQxcgLoyULqFBSD",
  "key29": "5u7GZAwwbRZFGBo2QjRrXgHtxyv6jHhjToCShFhvqys9BSKT19KsbxWDZ9ML3pYeJTpUQqLjh7t19A8F8qxVmJgw",
  "key30": "3Jo4JEHy31DUdFxADZr1MJKCsDSkK4385cd7akvbbMkDUxFv7NSqBYktarfPU6ivYsyWqXhqBdin1t3BSjiXwoJB",
  "key31": "4d2zJr4uuKmgmAxEMR5AbcKJtgeiHLYZpb5iFZmmVyuAvQsQhyUUc4uK3vXR8KwxZDDF47ayuRnppqk9eggyqEGJ",
  "key32": "617vb8eAvr27jjupZeE1Zji2ppGiyN4DX8hHUGXucRzjZPDnwN4fkwFEgCqmrshaymamL6bD9YudwTs9GQX3cmoe",
  "key33": "9Zkauo6am83uVBo6LW4xxeMBNtQPBtuQu94m37NbAxYkp99yiSJ1FLkR5kKTcj9t63N11cDVy5PddiqacgJegna",
  "key34": "yrNPT4WXBFbHxUKv4XxXWMXnnFbVpuKhZ59SL98Sf4mVcvp7UwsK826NPz7bshkvsHHbwmeFYuKTtU6xCJMBDmE",
  "key35": "5xQSqs19b7Yy2HzMa5bModGLDEUymHUo7CgSNXPDU6RjoshxahcdteQBpAKSQo7AYBM9JdvcN4PHubqqHX7rPHmD",
  "key36": "36PeQMTNwduj26pgKQ3M1QZZ1Hi2Jta4um1NmtASrVdVwupsoxqQGpuESvTVX2Ry11qwtUTRYrJDxYnU4W4LPCh2",
  "key37": "VuXfeJrqpBLSa8CsaNADnbBfoVhQrNAqpCsKwctydZitUvefiFFi7TVmKwfjfqB95Wcf5cUEtkxQNLvtopbUhCp",
  "key38": "3xSyHTArsLAgPyp5jckALAfuujrhYKJa9JPXpyJEzqHej32NsWJAgQPQ8zotQFh1nNBzYPBc78Sp3j2tNsvDCRDz"
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
