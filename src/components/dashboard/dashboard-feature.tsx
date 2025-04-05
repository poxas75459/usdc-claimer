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
    "2AoQnedxAdfZnE23RinRyLv5yQXziaEvbFBkY8aR9oqxsMxQBkEcxb72USD6JbPUbiBQEAMJTy92j3FD9AvYR7zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vPax5Yeps3vH8GwR5MzCUrY5WrFGn6F6YRu2Vhj3LTG88KRHM5GSKGEYAnJWrEJNjWQRE69hruDaCVq4S1Cj25M",
  "key1": "2YYpkTYr8WSx2fFD9A3eAqQTVRcygQ5giWf9qsZVe5uNHnKgnCeqLfDXuRZnRUyQ92JWJ1WEFLcTe3sYRbYcpZpg",
  "key2": "jqXZwhoKmuDYT2E9UUbtSNo5e3n2kNi5FUoxgCLxiY7mswwXKWJ2YgPvrqLDrNfoanXtMdXbW3c9BY1eU8KhuYi",
  "key3": "2XW2gZGgFLp5gDNmBqNtzM5syA7JEHP235FUGQE4FpGnpoPk8qhete7SZHkfoRPPfE45x3EytUHK5AoS98oeuYwN",
  "key4": "u6iCaxadhr9d5LcZcRcghE4493mVwUvV6Y1AH1eiaj9zqLy4canJaCVWJJa3iYeDiAbBKYHkqbGHdsbxWJPTvjP",
  "key5": "CfaQAorVhoNgZSZngfSjovNCnKzvNPvQodURc33onzy7ffpvWHoYVSz63oRsBXArj91qAvrfU2QVDFRFcoCy7cd",
  "key6": "3VyMSqaVC3kWHASq119Wxt35PXbYknAzmRsHBisYKtLSYkJnLE1qNeaUZddznC5ixzzzFYhKPFhzuFXh8vo7Yna",
  "key7": "5zF1kngm8H7UEJP4XGkMXLMt9t6Q8p6QGKUF7v1FK7DqCpGyvusyNWTsAK6nXNFFZuGZsnWdMZKvkaQhUtUc3rY1",
  "key8": "4Sxe7af8xpGgxMhvSBCdKbHc5gwa9JG8mqrwawpr2zU7HfXWd4HmAsH6bQfpPeWgkBMtRwCe5USL4zAdnavQjZJd",
  "key9": "2rdvgujvxu45b8uoDGdsVXRWB4WgEzcs1xbwJaYCv5w8eUJyWh6CEkaLnZngFeMoKccKsfrKzdboYfbeMU6iSL1s",
  "key10": "3Rhma7Vc884SPBmvu4Z6DjZEWA57fP3dzVMcR9ayPQbMUvDmmBbczHcVewJ7ArRUvihVkC5gPqxPFAHoxMZ2XbtK",
  "key11": "4sBuPDp5p7qdwaAADUmmVqg8GLcyiKQ6cg4xYV5s4U81ydfbYttcMnU73GrQ9eHcX3aQ8uTwunAjEi6RfZfRSEDt",
  "key12": "26KH4voPBvfEzjb5213wJHKZboFu9JcPSBqNn8k7DA8UKwrKVtPMgTVjW2hDzQBfKCNvTY8dZkKw7Am32Y3pZXh5",
  "key13": "4Hp7EKBLatKScrWzAiXLdBugx8kKW2sdq1woxEXh436LBcbyeQWFo2dDpYESMQxSwTrZ1q5dHFJaPoxEFGvMUUPG",
  "key14": "4NoN5dSyWZAbTP4VH98teikozNCCnW1mP66QXJLJGprWHgzfwBXtnBywB9x85hjMfZUcbTe2iLTYZUteiisGW5Q1",
  "key15": "AUkDytEDBMw68dDPqEMQXUuS97VgwiBXcTr11BvmuCAWa7h3D2KNCo4yEcrvCAqmxBQjvFeHa4YrctZriEc9Nrv",
  "key16": "4KL9NCmcDnhMqhPCZQFuwbDy7ZntVK1PhpDoxUSG3LnRufhsDvzwEv2XGTSqrGHPcjCBPr4jXFbu3P9GjuQg3d89",
  "key17": "3QETsDWYQ6Wouymcu7DFg1nfzp6Ct45YcW4y3J52CLG7c8DziDq7v7h77k22pB8dZFTUbCWbArvgDWsG29CfUpsX",
  "key18": "JsDhhHC7BJPq7ZNfm5gyFSmaw3oT2qnk9tCocvCeonksctPb96pmJaWBHPpXdxzJhPERFkym34kmpaLjX3S8c41",
  "key19": "2BNb2touaXXrW4mt2coWtxHtzsWXwUSrcLHiZeDQhwuqKH8Zg2gMj1tvGvuLjUUG5bvDqyc1nX8NKny4N1E42M17",
  "key20": "3a7nqHbKGXgpfH8yLDJKtYkHM4DUY4qj9XWdVN4mPNHqbiwi7jrTtFJPdQQtCiMMT69itB7se4A1cCYh9jzm3Q2d",
  "key21": "3wABxVJYypgG6wTFLgfAKUdFBmqjhd7nwfFb1c356JnLYnqVMepqAciQY2shbxvRAVtZjgMhSgdZ5ACxmpSdxAHK",
  "key22": "2ud9KXwqy7V3gEDSvoK5TRgY1fCYsKG5E5t9QYg7oCucwuKEbUEHijd8TBd1nxNHzQKAVjzEFXU1ZWrBBfsB9c3K",
  "key23": "2Widrps8hDWT864md7G7gGGvtgDHZJFVyiBk7LmAda3wPGXR8MFgdw3efakQJYjC1EbnkqdBeLMfZcNTihXHMXFw",
  "key24": "2MK4tpMKhowrPv94PtAt5ETvY3YHBLDinTUXhYKpcFBdX89bGsUQ2jvc2Ge2NoaJ1iAsp2KaX3WF5aNtuhp1rUQP",
  "key25": "uRKKNVE5Vkv15XGEq6UDiSDEqM9ZRLPrnczK6RwHakSdnnRBxfQi8PZZDCet3czAgDeV7cp3YUh1iZciu7TEZn1",
  "key26": "3VWqUKJFq6C37YE6VVpCvg5yGvTpVkYj8KFKNgxdVKCGS7V7UnuW3DRtaZKDT8tDNcRpJbU9XceDZwjNH31fUtxp",
  "key27": "57NpkRJvnXDzwBFDAw4nSNjMffVY5eDXFehGpgmS2rSK6R9LRitrRadTed7bpXeHyAteDqadoR5niWmu6wy92pyB",
  "key28": "5xXYXfHNmyZejjDsyCHbBbqDa8DLhjBRKQdMmUguZHfMG3oer3oCrRxNEVj1TnCdmipYurTBFTPuyuuArLNYei1T",
  "key29": "5s4ANVe1BCP4vShTqrzXpWDoVd6AssckTgjZxHG4xeH6dXMHBxxBuG1ZqFysGzVi6onaJXAv633w4Jw512EgSgms",
  "key30": "2WuWbsPW8PWmn6yBMp89bWZrh3ypfTA6oR6U61wtADvzbcJcNgvJnuDF8WxnoJZeMDv6aY4nFigEvikvCheRyNYN",
  "key31": "4rFj5SFj1DgbJrBXFNFb6ZmZqwXYS3qj4Xwws1PSyUvuQpL8vjArCnK8SbknnopP5tBRE7c1csXAqttKTu5mDeeg",
  "key32": "4oNzSuZLahre3zdxjzuwn7wikQs5KoeeMrdkdvmjYKg5XpK4im4vM8zfgwPTU39WzwwBDtUMqwSyNaSdgChfBLF",
  "key33": "4tz5kyApUa1EAMKD2rMNujgCyq4BAzFMCEkuiXTWEbqQwsaGvF4AHnNBnr3nYN6XXqRfFZFMTQhqZe8ZUJv7muT4",
  "key34": "NKuFXHhhNuM9QDbpKq4CEy8nyVMYgza3x3XuGWcoXEFNMinjUWvxY8QCacG4GHB8aknnMDQCYUFp2CCdtYAUVBV",
  "key35": "3Yp8e8eik55DWuV4xgCRqu6u1kn3LZUW6gAsdPrGkwTNdPgJr4qx7ZgXQgg7Qs4ruDWA7tSfrogaP5uUZH3te4wF",
  "key36": "KLfvrXqMQ24wXM9vjFaTgNfmn9gYT3kpTZGrsgdQL2RMeikVA7owDXNQsZgZeXcRVy4o26rb3rxSMQV7T6GJADA",
  "key37": "hwtoHCoJFdCdGtepFYM3VsrMqgqR9PqjicYtyvNSsgk6z15d8McG4gCzjQdRdJgaeEXeCAegJvrPZ4aEhjMM9Vd",
  "key38": "3TNdrwgRDSFkHoGhAwLjoXvdGHQ8trRh5jDsUbhiWvFhqpcaTm5YujHUXJ3ankzqgPt1Fean2ATUBtSiZntMwVAL",
  "key39": "3ChGtDs4hoPAbYWkiWK5EnD9w3M6jZBwqTkcMH25EuKqhsFd2H4vTeYmGFphac7VHzoWW3tMCSXjTMiUYYMuvtjm"
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
