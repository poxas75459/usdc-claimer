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
    "5MEnVWDnyjWPM9dFAMMzo3enLjL3bTa7GPupqsRoJ9C5xwieh7Td4K1yDiZBicdi8xYt4vnE4e61gpP5qXz2pXcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZSywmn4N7nZPzreDypzYL1wR4mf4jngdzZTJ7AYN6hGa7N8GX3EiefSZQ79AjuNK693q2LFJLfEmG9832JqBBEq",
  "key1": "3DR4mB4tQsauHNXQg4jL5339Gbk2Venwsozb4QYKr9nJU4W7wNyCcGgWzfAf4RPUZsEcjb2uNb88XiBS9Gcdd8B8",
  "key2": "31obh1tQDMhfkRqfbhy8MZrFzkyfgLKo9homgzDKNYZ9SaaF1K3xtwK45mnpGXGMTo5CeMsTW2E1RpnPdyEuyFKt",
  "key3": "5fM2epCvZBafpFnfEMp9tv7ATLFQfHEzamei6AAMAWRUPqSFCgagzMShmgKgyymdfdNk1LP77N5NPzWNF3U4Q1FX",
  "key4": "39bQuJ2mYiQX9ah54gkzYncLPueP6ezr5GTvcowY2d8rP1xr18dmBi6ivxPHg5KhjnT6dKgST2VCevKz7U61Rc2a",
  "key5": "4Rx6MHqcbSnZXVMs5ijo72g3yJMS1sycmigsW1jdTsaNwfk7fxsAhTBfYWAMZrpiE94sz3iXnYJMwdDUioBc9zvW",
  "key6": "7vyuJufr5AFidqb3jes4dXuu2sdFNoGXcLLGPPCEdUf3F7bzBXoQAWg3dpFPQj5r7L4MgbNAM4u3gN3Nrnfhkbo",
  "key7": "2m8bQnoKDrEDEGmV5YNdUCa4St5qGP4sGmRE6Aq5CySVrb5rmAcQT1k7P1R2f3ys75HYaVJDSS8mRnw21uBaCd4T",
  "key8": "5kiuWafyjv7YPSHND8WhVgMHUccmPjoGtrUXEVhc1T97uQBMxcMFVy3vPoQdnvg9GUmZZiBvCZL3LtUWa2Rt9gYf",
  "key9": "bLHxM2L6gheYJz7WESRrq8vdt1cSWiPqc5Tx39HvDrNA2h7jj3udTvXhTS7rg43pP47zvBc6FweroytEexL1Rda",
  "key10": "5xiyq45rFGzkN6sBmEGxFBi6MxsyT9kS6Uo7jNzWG2GYrh72KsJJd47Aro7mnwrU4zee8WB87g1pjAAe7SfzfMkQ",
  "key11": "5sLB72hMDkKS1eUGXARBjCbSbJUeYL3BbigMkJyjHgW3kXLx4NDZB1232bxQBXHNAWaMs1EeQB1Fi8Q643GTqRAu",
  "key12": "5DjukhcvC53Q6tio7WL21qdkUP9CMMUHJDipxUvxAJJ6ANVUztVh6Y4SjD2PbztobUyDDjGxsneT6aG32GCbimQT",
  "key13": "2sQaa5kPz5yxFzLYxLCvkUv3maxdDqv5MsiBQXxRVsDpy7MVeKJLPmT28vzK3nBqDvwhbkxeBAUpNMMmczNiY9Tq",
  "key14": "27X18ykPrHT5NCYeAX6TsDKzxK3TqKabL3txGg7pRWvfor5XkdvKm3htmMz4BWagopVrxbH4yJ7JNjsJQFTJYCrU",
  "key15": "43CYXuA2wMSjrqzGcPQ9C8EvkwmY5Fy95W2K6CDNpK6Yq2bs2PNLpacNn5bCZWPzz1DQEtiKvKjfiu2jbHp5uW8L",
  "key16": "3fTLKtnYG3qU8X4LiGL2Fci2vekkHatsLaYWj9nQmFVEAYSDabVs4jFpfdjGFq55WdWrCsQHPiZZEWTjMxcCRemJ",
  "key17": "4kSXSUKKnaf2EA1RXWT1gAMFfX6Jb3EeFnjsjxnfP6p2dZxYDpzBA54X6ueTBQnrcHJB6H5H3Awegf4B7PnTYm3v",
  "key18": "4ABjRTNuaMRkdNyHimtb4DgQUwtcm5jjjUj2HUh7HMDiaYLMEmcX4oYw27YFMXEU3EtDWQXHVrK5YocyAgUtieNq",
  "key19": "b6CsnoCH7ZZR69K56yD5sLptTdK7QEQnCnbVA9ic6bfgrHd1xnAtFr1QTW72hY447Cf67EJbf7kCRrug6XQ6eEM",
  "key20": "25TY2Jf1hcCvttgWpwSA1uvmrF7ECiPQ5iSYnxTvxQUtiAxWSUG5kQKHQ5DGeaaM2Ga93CH8t5mm6FYPqhLWKqLt",
  "key21": "4GUdiMpWbw4WgYMxRRwa52CpkFTGcqkMcSW6ox1UDbNESnRU6zXnWQV2sX95tyN9LBCUosqVTGLbNUtrgR7WTLkU",
  "key22": "24sPBmm64EV7v5QWZfAgyb9Kr4HLH9qDBZLxFKDj2FFhV4iKCkdMTNFqf4Y8LdeFAzsJSWcDFgPYqB1VpYPCJ5HH",
  "key23": "5c6Cbkf8p1G6S7RGDnCxXfMAFjZE1h6TLmMczGesC8R2VHcQTu5uk5jDi4x6wNx4oQa8jUbM71SFMfF3UMLqg2tD",
  "key24": "4GiaWmSEArLBXuy12khzUrcARY5uH41yNpg3aJAgTxgT8jAesd1JYZ5nD8Q8kewNFGiGqXbu9SPFut5APtY6q8NK",
  "key25": "23oSUokRcjeAw2hWzDD8NGa3XKWu9gxVbF5Qj9QTcKTJp8ZyAufW8GmafaumqXCd2ez8SfueNSMXLYa7JBdhZ8we",
  "key26": "3NsrBj2v7QgCXv94eQKGrdh4yR6w2VCAJHRsDPgQo9tp2ErBhzjwVzUvN3Ecfdd2TrUiyicdgx51YHDPf2jAhx1R",
  "key27": "4af2hJDw75N23zQGS83T4LhLPAUh8VSAn7YB24mtmhjmfcsWmSe1cr2gXgB6RdvfvhfJLoMT3goeFBtQUpfZzf42",
  "key28": "3dhAZrkM4RPCELL7GsDbem242E36Nv452JbMKNq3ra8ekiHheSw7aurVnETbeZ7AQqG7oFQQXXAUCMJb7XJvLsGN",
  "key29": "25WWNAgKcSgpyCUzcgGTjzcTMbM23HbQH5G9sJVPyAe3cq9N7vKMGDFB8UAffGWcpbV1P95xEPEJNWsvdjyG9CCn",
  "key30": "4CuDKXaQCerDDu3B35qRR8CovC1hzwSmxoMWVbQRk5PwfiyT6W3T4uK3t1C4rBk7KQwDAbhCk7me78c3yaTApckv",
  "key31": "2Z6Zd4AdAtCic3HZ7SY5QHMht4Sneysj1QsuUoW6ypBEAoQtXUBZShG31ALckXHWJDgeN8AoiuSijyQbHhTrSRHg",
  "key32": "ygsZoGSm8HK6qNDre93q43S5ceLM2ikAdBiY89G13pmAquNc57qGaWk9SoQv2c8XCAz9HH98wNRxfjurVZbFXqH",
  "key33": "4RFALombvx5t9dJ89uxuRKzydCRGV4XVJVroKDEDiBwtZLSpKLscMNuN5v25RYCN9qfS5yzog21XyY4j2G5HaqmK",
  "key34": "5rPYVrjthGu9nQBEMnB3zbnT8aoSF2V3GNGZMXFLsTm12LXmQ1PXqwDCD8d1Xi8SNdnUzEi4LzZHuAy7DNbLDj8s",
  "key35": "5cbtqLTDqLrrUryeYsr6sKFvrrySPJZSJmp3smSSokhUk26bhw5EjLUFxQFYpUVwcRwTzSR1TQhT3yB6y6eG3Dpb",
  "key36": "2T4QLd4mxWzhyxfQJwCDcYcAhKSDKfsb5aJkgRD2mTGumA5cPpCzXQUbEiKeCJdpSwWuJPy8LjGG9JiKyCTnn6jr",
  "key37": "24y8bULhxWnrjyj1yksgthyMwC1mEgenncPQFSUG2yQKuHz84DRFybUteL41vAR8J59cfGrq9tzjkDHwE9CBv4Ub",
  "key38": "5UrdLRyzokyGo3Kct1cCvpSaBeR96EyxDg8fbDM9K85ZpaWALSv4LgSYuidydFLAATPzzfZ6UmwVAELmjXadpbfn",
  "key39": "5wqyDP3PsZT51x4u7MjcXAw8MPhYJNkVpToggKw7RkonCRh4QCEbrvLD97V24QWF1RHDU3jrDQdUbUskyeNyGeBp",
  "key40": "2xesHyELxhup1suTQzEbxhBZxsV9ux4cCC4ygJTLuHi8SCpCpZy8cGUYzS49WhVMgrqrpSNG296s967uBybKnvLG",
  "key41": "3Y8bEZeZad8vWtKEJ3Gt4D7iCp4CnNvJrp5kpe51sJCmTpH7PwtgV4QBQA2ik4Sg3ZPf7d3nQtpb6mngau3WCi32",
  "key42": "2ae7uKEoJPZKroDado2DyMVgNvBbRCYJC7LKBau49grrQ8jNPPqFA7KNQJhd8BkW8MYd1JWkXjDnMqr8WwVEHT56",
  "key43": "4CNa9f2GHqmQzNKNq4zocg8czeQnkLUCBBQVQ5wytPxTn8RuzyHZDq9uDsiDBnwR4BSe7caCnWqihiXiQJxSpAkr",
  "key44": "4Nc2YmHhn78awpjcFK7GrENsGdNssV6aa5VaxmTQ6WwK9tXJtBESbhXWv8YRHLjdjNpfMkgBvW9AtVoTU25XuPSj",
  "key45": "BUGHc7WwtXHq2g7Phc3gQFJUHADJPwsRBN3WtCk6bqL4YzBTjtg1yW18MiRszm6KprFP3LVrNcFQFLWw3bmQzDd"
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
