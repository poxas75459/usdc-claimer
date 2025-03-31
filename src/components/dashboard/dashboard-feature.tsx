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
    "3AZe3xMtZquGCHG2kLA3oqWkyQGwd7tUq4Qo9wWttz4JzsgDzoeRLGg76BX8QUQbXEzx6KujSq3odLjfpxS4x93k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gpXDKrSSQHBib3wwt9QAUMQtkuWHvruq2nPt8CYXuWLAPXftU28uBXr4DZhQRfkAk6GN6DNVTaRJwV9mhBFWsd8",
  "key1": "4CRgM5PRPx55DnMkSTkr93UWjyLWsf1qGikp4dbpuG55s4Rqhr7XhWw3H7ZZkFLGp3cpjiudygyysd9cMdn3s6LY",
  "key2": "38pcQiZTWS7EXPeCLQZLKYqfDmD7fhSo9A7f2NJRGrNXC6yrGWoyHveER2BPWQkKhB6L5ghnVt7m67NWP2xkJ58p",
  "key3": "5EjCnAfZTjtBFqRZNckCPnkZZk1YiD9CQiCA4cWuPx7gP9c7LyXL6z9e8xcsYsuDK7vuCG68DfA8nJiQHUXdh8LQ",
  "key4": "45CPHaYv8CJNfSkab1YoVowrWixVQBnf5NvtMLxeHMdC1XCaFNSFR9oSUm96CWftiioTNoiunAgvgK5Gw9PKKnZZ",
  "key5": "4PH7HfGLPTnYgD4YVcmFbyGzYDRvNapeLUA4wNWTJ6LfRXNHaFdzuXHkHNgJwbeue4JnDU7ohhR9ER1LimxKSSSz",
  "key6": "5o61WFCUkSiamR44rvpiehoJJU5s3fDEzHEkXEmCSCbxtpsejtjJNY81rKC5i6z4RSxtyuqCQkbHrJuTvoxBiCuZ",
  "key7": "49vpEHJ4pdsQSUTWdTioBjZgZ8M9QTSMpPcjVRFa6x11VrzZLBG8SP1utbxXRfL8eMvzUQjhrQFdNzAcFEm3EvbL",
  "key8": "3WKSyMvT81bHwQrQAMqUAWt44FL5Wtx2YcR3bxYBzuPKrbe6z9brV2SqACcS6DXnMY29WZygcLMh6H94i7nbuGmA",
  "key9": "5hmHp3yfmFrQhrij2wyCGuzaxCAZQLnZJtQ1MGnc9RKuiRKJapnodbf9c8nATpCjuztheaUpCGRCWQrxCTFHB8su",
  "key10": "3uXwQxfy458xJLHddoWk9oazr9fM2oQNVSh8BRF1Q9Sk3EZUjFCWDLf4BrSDfgBCf8xphWA9nwMGRPL5S6MezXVp",
  "key11": "3vNFXkyApuFRoZ43mw7FP3cQmDbaBTisdhwaKQsqDbCKMq1EBbL399piZ9RuKY5YXDStcPh8nf8gwBLGtxK1cYfq",
  "key12": "2PgsCFD3eQfzjQsQPPE5FYezzGipg4KYzZgQxzDxvSWsULJUAxgmky6ztevWWSmBZGoQFL9eckRx64QtnCCa64Ny",
  "key13": "3ZcEL6thcWVkZDq5BLn3uNFdkz4RP9xtHy7wv6i9iXKGQV6EjCpxAkTMLRcXerZwByvNQiGP9QXcD7r2bbCGh3Mm",
  "key14": "3Qge95758M9pu3PnXJMurHtGVqB7abdN1up3PQxV6vBsAWB2ugkcfubRxnpmNa4YsQ2UVosxXuz3TtQ8BtWys7Re",
  "key15": "22nCVbLVfazYmND3c7nJJJs85VjU4yFoQ8SgTxBVQQZM5gjPaAba4T4dmnNgGAxQZFY9ozPZ5Dx1EzGe5XaJT6mK",
  "key16": "2w51CWLguVBeFSAqRg2N1x7ci8z4kpdS5b7BTaUqE34Yz7FQ5CoU1dsBA6nKU4RMezJmoyVAx2ZcrgqQ4aPz2k9e",
  "key17": "2zKHDSLFmyYDxDgXpTjwYcnnsyUd3q8bGMjk2vBKqZACQePVDXCRE9j5nsvfRc6Vmhyez3PUgD3idsBEAV3fk3DH",
  "key18": "3kCHBvXHoqXqN14CUp4LKRxHzjdaLfRXsLbRviukwPwwUmVfAWYJ69aWYFqdbhPYMzPVhtckrJidFifFvyEWuGgW",
  "key19": "3r7wCZphypLYiYAzk9QkeEBD7TBkaQqzn9dQVYzfHFyfHW7CzqZGXXZHMDSLuZdTWurm6SPA5UsPJCAPKqkPBtpD",
  "key20": "34FL9nrf9pPgNNp6yvWrL2kwkWkRYG6RVktpW1Ezk6z4XKHyaoy686NkFG9WCFFKnc232VpQjhkPuCJm3eWyGVSs",
  "key21": "5mLCA89C4zdHKy4b3Ba9W37JT4z4JVnsjtWYVcJVDEzXE1i1NFKU6wLA4jrm2Z2t5TmT5igSkHe4V6ZDsU2EQ6nx",
  "key22": "4YKv6tX9VWuhoKQxF6yo4oNC4ieKQSmfHDce2GLivbtsmUKv9dUWVZ3s4rRQuus3rQa2ALCsYBfVhSrCwcfayp49",
  "key23": "3CKmPGiYsAmXab9euT15mps4nNkWzetL7feT6Eragkpkq1oLasHCDtsug9ctEo3nB3aKryfrtwCKKwBzGYCb8nYr",
  "key24": "4cMn26k2jjgjfGTbXEH3VPXTXRf8ZGaxcbpyJbJyRpYzDuJySWi27uW5kGPg2kengXaU7UkVGYNVmQYMUE1ZvY2Y",
  "key25": "3XVQJ2pLouNDo9MznMYyJtMuXXH2CgGsU9FT4SZaYqFvjkeRVcpRWNM4poxM8TdBmGZsGwALZt7zo9kv5i1hkUEN",
  "key26": "y4wxaKsdWzeNxDn2HMywusDA47r8quPe1if4tS1GVLRVmcNZQbQhfCfvxR3qPYN35g3NFy6U9RysWQGFZ5SZHSC",
  "key27": "2qaSMcD8879bTDKJZU6bZwXG1p1hkezF4muthNrYA1rFHnguCb9yowGuuHa9r7gFJtgbyzubTJsHpxaxZAGCBqET",
  "key28": "4ZU68Y59kD2Ao3hqrGKi3vvnfkFcfNLHQv5woUokLATVUwXXkvL3xGpp78Q2Hu3uAe53bP5xEEb9k3Tz13BPxsRw",
  "key29": "22vs1uyzsoMeGnMusmpfT32GkJSWTLXrRzXYKwTRz6D4UCsCdxiCDqkYVhxBU4LLPw4PDJucksdhgcP7UBeY5CKP",
  "key30": "2ahMSpC2o87UYtPrdp9LBseiMsMuimE7xTAAmoTBDYTUnaNsm2gkvF8yVEmZvNoBhjXgoxLEdu8sA1iHTaVCU8Yr",
  "key31": "3zTUGjx8YaWHjFWPTiYfkEXDmMww8KARM2MCh2raBeZsZcnc51m4B5ELqFVdhoXS8LxQ8xtAxe8QhgzM7fkYzTqC",
  "key32": "sCFjsGsSSv8xvrgLTKRqm5Eddmhr8t4J89WmJ8Dz5GUPis4HomsiQgwk9tDVqKN4qTXhSTez2KkFbTGb1UU6x9J",
  "key33": "C9aSd3w2BfmhoVYS6dCFgPLVNbUgappbtRakmyNVLQCaxaJC92SyzwR9hZJmH4FkkLHcS8sKcCh7SoYiRiRRfjj",
  "key34": "67M4Yzmh39GHHZ26ZvmNwqJR1snkNdZmBjGzTRWNcN5uXJ7Vum6HtLgJMpwo9Yh3Wh9mCYoD8ES8rn1X9fToxpkw",
  "key35": "37aYrg3jioNavnyM9fxAErzCYUZW2fFxWeNgHWc5Eqjgu3ZsU9HmFzvEiHGnfT8T8xbqCokrDuapVCWkoAyVuAbV",
  "key36": "5KZ3kJHbYNSax5SKhA8StzE748c3gZHqm4M5n2uubbC5SgJNr6bEdPiCDTaQbTt6zaJ1vz6Coqqmx36ivM4eiu8u",
  "key37": "3yeJzmd4wFmDE2FKra14kEAm2F5xyGQKUp2FSsqU9ekKYj4MBYyYv5snya51WKfA8fopMEf7tCYf3EQQ4JtJTShd",
  "key38": "2xV3oWhuryzLRcXby35mJxxinMPv5rtcLsmyQ2EBaNg9u2Amwu2hxM3qiAPRktcE1G5qvbfptTEwLW9dnMSPY7ET",
  "key39": "2rjKr7Wu7Nmz3dvwK4wC4xF8jYdcFZodVdZhfwgjaATN6toV3xRtdhJq3VmjVTVyDzigFUW75JzUVR2CqfzpaXBS",
  "key40": "2CWSdvXcm15q2JcBEc1zYXpJhZ9eneGxAfZUgaDmtjhVVJDm7Tk3DLYse2WJF6k2YRuvXKPbtvdaRVNJe8g7cm9Z",
  "key41": "3jF32tBHH4Et6Lz1gBdMrzdPZeQx2oGzr157C9ESsiCnA2Urp351rub4tscTPF6J2rdeGr6f9ZR3yDiRLFe4G4tM",
  "key42": "4bmFLgTbUg4yykBhsFCSeBsGZPiX6rJg7gwBiatdZp7ziphfwuGbXwsdknFWoAdKgJqG9GwD2xCAXuzjNrGNSNDc"
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
