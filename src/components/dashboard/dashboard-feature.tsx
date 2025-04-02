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
    "3aZXw44Ds9EVaSrtwRLczn7kErHuz9XLTTBQtX2C3nSeCWcUPe3NNhbLdg1MotUK2AU4CH9U33q6cDze3XBh9jQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bf4vzDWr3JgkjgiDv2vqm1uAKDTaypqiCSc73dCiyHuLVyHiaTKYY4UTc1bC46o8nPTN4jNsUwgytjCtn3BsQMU",
  "key1": "2DHApAx7xLk9rPfnvgenxw43Q68NxrZzQsU9q8ha9g92U22gwTF2NQb5HXy1TX68BoAM3wAvfsA6sjYfLvQdSWH6",
  "key2": "HFfL8zcxu6LRUVTNbZB7jvxafsdxFoCgV4iHLtQhNnB32c8HzhpPsj7SJc58JASw73GxUtEaVcGPBho4e3MHSJa",
  "key3": "QvsDJpuWZ9sqFStqH6cYTjMonQv4S6X5PCcYE9girN5sSK3yPEKAjdkFnLCARCCSiHi47wqXvDSKbfExnPEKrFM",
  "key4": "2spffqHDgsqH7Ex8Sb6NJxrSWb7UXQ2ZVZiueShsDiVgjWGVYdTJ7Xz7fff9bBfg5sEH9EFF9mJ4Fh5KwWGGp7F2",
  "key5": "FGVWZ8mgt1vAes2QYLREi22uJU8Zybp3Ao2vjimgX726HU4QnQEbG3qTmSdxQw1CrWybwUYHJF8R1Dp9ibxpJEv",
  "key6": "4RHJ3X7PrD489m4XcnpKQXzTBiaKau8xmA1y7MoCRfGL1n1PMc1zYdTNo2tUNjfZJSfWBVP4noJ5iAjYHtim4tnA",
  "key7": "4VJxEK8tZiyFakfE9BkhGDq7Jz5AVi2a67AA1bcbvC261f2RPFGoD89nB6EcgjUdrmocSdn6MbfA1vT5HANJLHi9",
  "key8": "43btBFB5wZbyEajFAaAeKrzAxdp32pwq9perBJMc4nHDeZovPwcrPYkeqUbZvnzNAczNi1c3kWuS3UX2pJd6RtMC",
  "key9": "31CR8EZH5fp1DnHV8HCr7pwBH9aE9UtQ3eVJiRay116qXkCKJeabWbGvRmXvoQ9B6FRNDSwV7QEBKT87pEGnnywQ",
  "key10": "26yD8qwmVt9xbWUvCePHj61dG85WhS5R1iSg9uLoiYRYeeREY3yupjrSA6kqSPDsnLcmp3zRPpUHc5vYULeDsJhZ",
  "key11": "2Q1idLTC8YyZJfQ6kVAo4JVT2WhSem5xtbccetnAfhsmb8q4GXvHzwDdD2TUPH3N3h8uF3Dde3MGacQmELVE7QDy",
  "key12": "5wLA7V4GYYTLSkwmtsnD6bZvGTED2ZHEMKz1jbYo3gbCdkecTN78xzUY6HatHcS18yo1gh4Ty4R3VL42gmW9xJuc",
  "key13": "3MEvvx5VKLrvLCoPuiWrRskiNwrAxMeXDLbodci9irrztY5xaVUCxrtXvPrJ8UUxFCcs5MFqjjnZErd4hx1C8WQP",
  "key14": "4KW6RLn7Wy4MCn9QjMhub6TJYCukRMY5yY8FhA9m2nefGxcA644NN3ttBcLbL5BeJEew1CHF3EFBd1tMEXAAvx8y",
  "key15": "5Wp4CAsBmNzS7SN1z3NHLVH8HrndmnL7zGSsgD8YWAPSxegzpA1PvyhqjnrHHhgJx8iBrTpT6yjT3oaBWFowtKyx",
  "key16": "4p9UHQvqzAYHm4EBmQwTsfGMDvaN1G59YjYkCjvL3mtAmt7S3X6unAgu3e4Rrqd9RvTiBam2Jhu4Ad4qY7Q5DRoL",
  "key17": "5Yp47bv18KwLA2yiqiQrign6MtEWoi7BtmFKohiKzU7b9hfiG8H8rMfn87LAkXteYcCikWAL8ypU4ig1zPHX1q1m",
  "key18": "4yiwBMJAz3ko3ELwzikSH6JBZfRP4T19RiVvF7Kbv3xCxkDNna1X7Mpq3jwocqWs9DEiw8n5Yr7QTizT52idJ7XC",
  "key19": "3Zmye37r7bLZDfm1zzhuNR51JZwqxRqUo7SBTd762P8TUF3efUBf7mdpqYe48Yz1xpjE7cvSRJwo5pGGp4MQdvEy",
  "key20": "3xCBVxK1euf8DKgUeSV3S4ob1wTcJ96h4xJURhxWziMHVsYz2RuBRjTDRJ7C8rBijw7z9WFdaLCqkmeuWescCnc9",
  "key21": "2511rKHqSheZbreFqYUbbHCksNRMZY7BQb1yVobxk9Dsok3CFx6YJ4yzuGdwvAJRYdRMWZ54phBzvoLgYTQe1zhX",
  "key22": "66nbs55AKuWRuq5Pco6mvJF665dJb8GxCMJA8NQk2ggEYAF8oANs1JvDrwPnvoagV3KLDJJtQFqttPvxvfHpU3kW",
  "key23": "5UbHUufEwXKjt9UHaYwwx9XX4AAPJvnw2XZobsrFAzRZWvhGxJ9ArXNM2Gdtgi1ENnfdGuXfCZ8iUwnSYmnRVRvE",
  "key24": "4LNgTarBxbKfMmqZ1FdfKgNuKDMuSYAqCftpmv1YoNdBuFvY6Xcbj3KVytbP56TuAcaL8jrmotMA1p7VHaX7HzoR",
  "key25": "31hfQ1SAytFmv5RTH1qr6EjXsAraAJLDzNrghHq1hjxQtvgw3BEnPQ6fJvKubg3ihJWkBFCNRK7Q4ENqgN5mtziq",
  "key26": "Zh5sTtq98kYhyB3KWFr6AFpwkRN121xMbQExjmB5d7uncCyDydkGfNcoLxJB85wEZQHduVSHqCt3oNGYB5uUdcy",
  "key27": "5uLyyKgTDB3dHthAFYbdYfEtrZHYCtMHEEwW93J98mruzFKwuh4XfWaWGwzTe6D7DdAZ99KEs39yKa99ZJm6NDEo",
  "key28": "LEYXap8ckd8bNTNbjodanpwnTEicXLYsXdZujpNFx277q2Lvxjhs9vpBiQnUudrLa2GDccqK7pJa6cw2RmrTpen",
  "key29": "5fKbfZa2gKUTQVAok2Gjn4TvhNkwbbZo4RA3xHxQBTZf78wcULujXeLYdDanvuPiVvghrrehvWVNR8pbJNw5ZvNi",
  "key30": "5oYhFCHzYRnR6mcLWAyCR1GRroPzWpmPGtgnEdUxGcnKvwy1jJKMHxe1ruhEG4t7tXSaLRHHLnswzoMwXfVhE9K9",
  "key31": "2LgF7DgmCBh98osbKz4GxAmNz2ngCmKzsTg4LGfdzMbT1kVrQRAZmxp7Qxzmtztt76d3Bd96ZpW31PyhR1yA4CUs",
  "key32": "33TUzrYFQKqXkQubxzrPPoiczaMWahEAq4pJh1i8WowqZYaMjzEPzeZYXoGPs9C2szJjqChjAVgGYpxA3fHxPfnt",
  "key33": "SGR31zis5Ds6bSCCXS1mRjgw5VLMPHHMGTEnZoVZbh9GLq31RKoaCtgoA6PVxxNujxcUTrBN5RCaBoHYYgJA6hi",
  "key34": "dLQXLpubZY1jLJyNzbRHWk3q7f63qAFJ7nQRiLpWu4sNuBYiVZs6d4WQnXQ5eeSbz6ixdkrVzKCR9pFH8DgdaBR",
  "key35": "4RTJ7Bxq7iF3m3iURBac126jGHG6zyyVD5yraXskxVbcbzPMGU5gPSTkdEvSeHVtSYndfwHEtF48vP1cT3o59Dyh",
  "key36": "59HQKiHJVETLztgJt2xvKh2eZBxXgq4yGFkhYcsjWQVaVP1a62DvNgZMXBxLE2ZTAPPkittLWUqTq3sQpczrNr1D",
  "key37": "4xwmYKK6QzsxugjmxZCy1fwCi88nw6a4J9s7BhjhtJVNscWTxjY7MCGtjeqBpvwNTqbZMswy43YB1G26smQW2Zsc",
  "key38": "4ZwcjsCjJN2Nti9c8Ph8BPBSqcX2GBFfVo6MfTwm4GS7Bwy3bANDNWGMXdqJDseqx8VnKagmoHoqcwgtfeTVgd7L",
  "key39": "36ouSbrv8ttYdvGb4kWiTdZbTBW3wHo7cqucXJmAGioh3Z1HUDryUFx1NbQ9ZnG23pJjMfu3Vg3fH9DnsfkLR7at",
  "key40": "3gWAtvezUQJA57JYSeP6FR9Ledj7W6t4JKdHYaC38iQAMybsM4m5jgb2bvRNd7TqKvsAJpGQTqve3ighDbii6xu7",
  "key41": "5BAkJQ9UQ99pAuMb3vtrh4A7fDANfiH6KFnXLAM3o9g4QrR4i3TT9yQtvLcnRWuRVySsG4PhfEq4Beaw3E29RYXT",
  "key42": "2hsbSjQAHayUR49ettdXe3BnYhZzxzr84oNkWRNoM8yCgTYzC2wYLF5V23DUrqupKuKvUKp5PsmDRt9mMnwUZ2Mb",
  "key43": "4yGtQvVQpVjtC1Ji7jsNmimtynyQKP9GSvxVm98S4sgSCxmNrwNxVzjNNx6PcPvUHamHaQsYm8Eb2HCqwEisbqZ3",
  "key44": "3xNZJUCm8LwkD9AbiFyRoXKYLCsovynY2c82XxBqVFdC1DHYU2CWsyWu9hPJxKwAFd1Z7aktp9P9C3kVyH3XjLqY",
  "key45": "KXYmaHMqKGNiRkGa3Ehmq3Y38Q2N4cqwTHEMqf3pUBG8H69t9XnCffeSZ4TnWd28J7PARz55PzdKLaEBz1RKxx4",
  "key46": "3sd2jZPHkkt7b8RksgodKCoyUDBnDEzngLG492jTi6FLF3JuiJcVqgNSgDQES1QVfaid8YuLtrG7NaakZH5F9P7d",
  "key47": "3FAeZj21ezMNmnmBAGRbGvUm9qnMxmN5QCBZntuKqifhcysRaqmCyFCisLDnMu3Hbd5Tx2Q55PSgn9vpTXpzLGyM",
  "key48": "hvMcPWZNzLATSqH82CiJ2PP7k5xcsrQ2Juu7XEBzfCXnB6PHcSgMSUnd6eMZfw95CfXwezJmJN2HeKnQ2ybz7cC"
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
