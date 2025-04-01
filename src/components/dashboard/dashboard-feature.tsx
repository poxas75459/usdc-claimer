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
    "4KQAGDgw7kUgMAPNPWfUngnXvQPJX6Ms595RuF6bfenG4HjoTp4jKjK2xEacUw89Gfw867rthoDa5YxPsKu5fAuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHeu9jize6ioSDeoATJwEMk7K6tzYqaMvkDaQFsHcvNyEAUK1Vckw4ZryvmrmcR5vfVBsCczKc84QR7aUNBcEq4",
  "key1": "VC7oZyWfRMsQZRCHbDxiKqHhrKcBbpNhd18nYuFCH4r5thAbLHiAba9D4HZfwRPD3HPN9xT49JL3JE6rVr8XaxX",
  "key2": "2f3LrbbfjfCxkGaM48Q7U8o3MzFo7xBorss2JYMuUgD4ffoyrxHHYy7uDRp16ZtkqtFEPaTw5NuqCQDFvusq1NTP",
  "key3": "mpYD8wah9vEx5eThv7A1BTBVDEQFMSjcfbrsHfsH3FEJPp218umQ4f1frJYM3G28si61yFSe6YkYfmPqnY1kvK6",
  "key4": "2KydnvY74S5HeTJ96Ef63hbxaHjxPUxMBCaGA3Vk4FByZBiRg6P3EqdN4jsHqXyGCa6C5AzLnj7Ga8435yt44Dt7",
  "key5": "4sPikC6Svj7CkaNbSYnHMGrTQXKU8HxvQGQqt4rTgvixtViv2fJArhst3JkJwdM57ccNhehwdj47BHRaxYHMUJ1h",
  "key6": "4SaRm2wHvuNu8UguHtCjYPeHmWGJsqQh1gdWGwk1iAv6h76ry8qqQgjB8hCUYZvaMEQr94o6SXXc9qC1RczrSEMx",
  "key7": "4ddqSRuYMNDqjBQgFLe29EdscxMY5PiyxS5ydCi4q9iqWG1cDsLfi9334q6Ydd8xN4kfgBXheWYLVj3zooJHwmhb",
  "key8": "2sN8WJQ9s1LhV7jM4dw4CcGCGRXhWiPp91YnamVtKpzjmD1E8i8rPmHw66BAm4J1ynbH145XYQ6CYnWPsqcS7TtJ",
  "key9": "h5tCaiprRevu7kxCMhTEZE9TeXoes6CGgFhqfDcDtExaurGTV6LG1MTJhSQdeEczU1ypcw3Zrsf5E4us7P9kceK",
  "key10": "2x8Ja55FsnkFjZkLoJnWs9wzBShi9uRMW4CuB4hUQsu3kJ5KoAAumG4FarCdBhUKwAEkKcsPtCctKh1sKKsFzodY",
  "key11": "MJu7zibFYvyY7f3hjxqWJ2LCRybpuT1N1z3hEPD8QoTmYHKx26U5VQKL1ZKTJJKuQq17UyCCRA8tRiUvFqMHLMw",
  "key12": "4mBUxNiMFaAE1dQz541C4qGDAGF3QUQcZHyhv3XjAzAnPqfhnmaA47tw9KrRvgb5yYn27ucJZrPRmcNigVChooyo",
  "key13": "3LMfxmyu3p8dTWqvihGyBQAs5otRjA9hLKYMG6byjS5Hzyb2vnD6WMop8QwREkgCgdqAfteLrpuSgMqcTLYPEDEa",
  "key14": "KcHc4cJjxdLxbi33C8XfCHvEzL7dUuLZgLaKmTckmkTauHNoF2txwQpj532jCt7nYKGaoCEEGtoekQyDLuEF3jz",
  "key15": "4wxrLi4uXEkRcCKcP3cefTXK2qRPDUAyx1QGu6oQbQXSiV6f9bXb7MkbYeDzkM2bciJmgSMw9h4NZajieCn11G93",
  "key16": "4F6rABh4mGSH84m92fWrdSFfpejeXUPGeen88aTKkmsm8YFeQhoPUjRvgPK6kYSLtKzYDo6M2bcX4Gs3xnAWsZ2d",
  "key17": "41YJYFsFARmJ5W3brNb8QCaPnsdxVnCmotFjTKG4AtyYneRNqwqj9CsZE3dR7uyMqjUa9WSSF8RMNpHKohXTUx2F",
  "key18": "31WpuyGQhg4uYmjzWeMA5nsiBRnqcRd8F98oi6SxbLMvD9LSQKbWCwSbTmeDtBKBrjoizyFZDReqhMKMUe686aPr",
  "key19": "2Y8ts9UieGZKZNnFPvN75t3wMQKaML6L4YR88ZKLtn1hLiJL7gsjiv5eV1NKQ4AdG5QMKc7TaZcESqrRxMMQ9GSF",
  "key20": "5KoodahmB4ua7sM9izj9j5w5ek15FcxCezd37tEzAyET3VVmP6tcKW2UjhNQQddzBS39ZuhWjR7gzjpryH7Z3NNr",
  "key21": "4ovrayNwrcmuyXexF6pVK7oiePnmrqgVz2LpcYdBBDRwUrKXHLBbMqWmt7FetnqQkHiuh4xqxVRe933mCSPk45fZ",
  "key22": "4sXXp3r2TWfC13SqZhCzECguUsznNK5mzyXcinc5tkuTKuyvCRqmm2Nn5oTJa1YzM1Bq23wp6x26JxgRBHC1vNrX",
  "key23": "xBFQY98tK8o4v7SSjuRbTmczB2uGKkHpc12qMjtFwaxsH3vd5dycvY2r56LjBokRHyFXtU1nkxEYUNdMcwqJucs",
  "key24": "5geEKZJUCa6ZoiQyR27cHzkDMcMJuqSGss1VQhTnM82kaChBW7GUzK2s615Y3We8hgNtpMipYsT8HFB9dWbwe2Mp",
  "key25": "37gSu12tJEjkXTP1gpBtPewiwQcBM4qYZsJH4ApUBN2cVu3521Pr1RT2VyskK14xMLZqN7bSGhi4PQ2JFHE83hK8",
  "key26": "2MvSBmj5XShcP411i2AiCMst5wMeUx9upt6G3nZwYu6wCKtH9NDmb3vWuAQsFYxfLLu2rj8bBF154ZztMGjcACKV",
  "key27": "jfnXi5xznHd7ST2nC6xsgef6sasDjPhSsRdm9k9Y71CkPAb3HXLWQaE6AvwKjoP2UdkAHZ4MeewfY8F4oktTtDX",
  "key28": "5z3gL4fppze9YKmj5fC6b3j3385foNbfoQQ58Vz1ZhdnXPR2RVZ4k9a1oVymSGJWYXChQ1cybkatUcFMNZsVwuAG",
  "key29": "2mh5xTLQJgYyWztQyUooDFCd7WJSMgeomP7iY1wCvxNE4GqBfjDamEGKuEZkALpYwThsRjTwbD3PzVB6V8wbCSLQ"
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
