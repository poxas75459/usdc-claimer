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
    "35mzvdkgVCu2dZ9U41DPzLQ3PuqsFFdS8aDAUXJ4hSUmdPXkkWX3nyBmSN6KB9mspevAvnKirsjML4AuvE4mG8z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X74FrpyoqKeGxghV7d7uA7p6oezePapCHLP5aX3TTKx7hJqHup46nNGGFyPeq8XJr8zoPTYEUSHTFRutfWF8ihj",
  "key1": "tNahRWYVU1xE9gsG3eHqB7jWxex3uV8MmyudHA1N7uDXTyvoZxhrMn2HKDPayzSgs8aQWZckB8bA6eXW8dXTpWT",
  "key2": "xXiZhi4VmqP1G1G4VMUpPu8875d8zJ8FRnqcTUTFVf45WaLhWcYhybVJazQrSSExBHfKGvrg83hwSYoakdse192",
  "key3": "5ANBZt7yjappB3ZpMYwquozRXZ1JCX6qdjAwUU7E3LiyUekh6RqcopTuQjXWWN4wwsPL6s1zsxUkDZ3SJ49ztjZ9",
  "key4": "2Chv6FNeqkR7LexxdWQ43rf5p1iJxGVL66eGQijvgw19mW61mVD513TysUoHKyRMtuJMbG8Tm4crrPSwUzVpgRht",
  "key5": "rVbTqawfK1V1d8WDd7p8MxefaoZpKiq8MzcbCcKthmVJWtdmkdJMDB5J4rxVRYZ4fjTK7FwUmygfPnErddNjPCA",
  "key6": "jbuwWrTuUFhrRycAHiDzN83vdZUXtsRvAwT36KM5StHmu1bfoyaCKUj3qWz5u6PJcrnkm8TuCBGQzpuu3WbFtSs",
  "key7": "268JjdzXa2dBPABBPLCUsaqGvdHkKJjxokzZzcAdt5kzL74mDF93Fjc4T66UN5kFUvwjA7FfToFefCfstbgdyo5j",
  "key8": "4zQQ38BFFpVYo4Eo7rVQ4JNgzk5H5kHXnKpVF2aUNgHdHdSp3MqFJFevCQc7ngMVBB51sMMXurpro9ebBmKEDHjb",
  "key9": "2V6aHyqmsqAGVz76sXFmVrkwSXkdgTxekdRSp6LsLjEnaguqRTqSTsbi1nrBuN6oBZktRb6x4v2xqZ8KAfECUzgB",
  "key10": "pguBqxCXvPtuVA3Q1cQ1AHWPAEPefMDcqjXsw75ALH7ttu3rYqEf3XKxofMiW27N1k1VG5SoozVNuTNEkupMCiw",
  "key11": "EJrN3ctcN5HVBZieaGAoB6rtd17ahhFrUC3TT4KjhuRq9as11uMKPC6XZpytE2bYk5CUjEx4j2tQC5cWTrAyfjL",
  "key12": "3twDiMXQCKX4bv3AAaCuFb1HLRZacVeWE2nsya9s2oNx8Yun2dMjpwcbc8sKgfTxNMkj1g2P2jaD9TsSAzWeEBwA",
  "key13": "4QMrMCUEBbSe3zyUZpDqw4Gk3Z287jrKTUWBhegum3FNRiLj46sFko8A2zzrpA4DtBdryxPidvXxuYcFJjxVEymk",
  "key14": "4JB5eB3jvChSCspanvf5GKMEBv1EzdZX8u9VM8wSMJBVC1AzZmGmbade6GUE9yjtuGHJeVTCY6tnW4A7kPrHP53f",
  "key15": "qTQZpNTQPv8cz8KQDzcSkBAP615vJ8CsvykVWHAqneXrWFPY2HLS2ih51JKZ2925Tk7KTfiNaaYwwPAiRpTfoWF",
  "key16": "5QAWQuwTGX6fvsuzwedgw8p5FNte37kdweVmZsao5XjwwVxWcBhkVKXmtSb4rMSeYeS8hEQokaWeu3Z6Mad8Psg4",
  "key17": "4tstkmQtPzWNRBUR1szZkCt3zhFefHy8LFYaQ8vnsa4hYbqXhEkqEPxBXqpNGvgRNp5HckHd5CojscXC3rT5e9gX",
  "key18": "2foxYHGQ1eGrY7Q8MmicYghuA2DL675868PQX8YnYZ7GFNV9wxS1ycfym4QdVydm35EysbZhAQMZZmNigJ3mZrKv",
  "key19": "UbZ6X6ch3QQZhd9X2VzaPxXwhKDBSxgPfdSsSmpmMPbkpG7Bxge7esTWd3ooXZbcEhwfGNpMRYVQM8rysFU86yG",
  "key20": "4h2DZDMescAGWj89yaFhagKZfHDREnUMrEnm1ExKSSbnTGnnAAqy4mxMWcUTbMrFEufBvNpvnYu3UMrNYoPxaNsv",
  "key21": "2EuuzLUhDSfXHGRbmzn1kD7QtLtG9KMbQERymARUfK2KDLEkKTmpZbudvBZiVM9PC9QmKrzgBiBfxKvdd2B56Km2",
  "key22": "5nFYHCaSXS3jmg6vBay5W7RuzHwFgAdj6rjhkXjipNRQoZ8iRQMCzecdrhE69gv1wnSraJKj8xBU55n4Qeicodyh",
  "key23": "3vvJ6QM33fuA6kUqG6mLtk2rbA1BvabboozTXKqhb3RxeqqJPAkfcpe49jNHfQe5xizFn1FZ3GqnwbQtEyHQQWRs",
  "key24": "2qcQnv95VFmod1hqNU7unnq3rAu1ymGbYr2dNkxg1GXzAVRw3JmaXhmn7dbRefyV3JpDCNcXoQ2oxLDKnfEp9N4",
  "key25": "5fxsmv3RxGqjxzNUGnCSaKYMwPdBrSbiRwisEZLBwtYbgZYfYKvtsLpkL5ggYZro9LpaBAmJ1GF5cDxp2H33UHcQ",
  "key26": "2Hr9UQJTpwW6K1PtFNSh7RY7zBwNbE2ZAvvoCv1xQ5UEUWN2f1vro8KSyuAhCsxUHT6epHUrffxK893a2EA96DVY",
  "key27": "3XEtNfLKpVd7dxKmvevkSzrHD5KzFjoga9D7wUfRsrB5D26Yoia8G2wFwnTsTFE6GbNwKY1uN2Bw9SWvPveJavrD",
  "key28": "5R2JMMqtuC6T92Qfq6MwCYybersxFvFiZ8T1Y2W7E9cGCKWptCvTvhBRaUo4J2ExjTxtU1fAATc5M1QzSf5s7mhV",
  "key29": "33JZUw6JEWdAAsNxURZfrPYi2HxscBsDhSpDifDhemCLTKyqPH4RJPCuKapXJuyRQPWERDgT2is8dWWR9Zqq2GSJ",
  "key30": "5H7sd1iBSzaTNxWoe7rNj7CSLJum53uJhRSjgbgV92Q9btSM7bLC15PJUQoDpudrHAU7gXoc66KY2CmMYB3WLFnb",
  "key31": "gbgxK9Rcu5kjeB6pUKpSVTqwwSxEYhhA588qL111oB9dbCLVSGe5QuYiQVdPfKjsXrrrB2LHycngymRDbWFrVa3",
  "key32": "39tDzhY6kP61eLrWJFAeeNrXjout356b2rbqbYMv91Buj6cxACq8sPusPw9GPu9GXPEsLJGgYzDEi6UgJTVHZz2F",
  "key33": "5Gk7ZzVrrTsqyqbs2yYr8c2aP7EdLyV3At8M8c322cxiycMiFMX4QvtRfNYcYYPgJ9Krwd6orF214oimCpmJ1pHD",
  "key34": "5VKnC8MyBcHCmySVoSg4GF7mCvVPu59niKyWjkouEAUkeQfXJptfi6PuiYeCwy5p9GRqahYynE47PCD2KVNm6AG8",
  "key35": "3Y7YU7RJ1B1pxu3Xm4Yutbi7FahM1tTMch3yvXiJp1VE76P8x6ELDkifTR1DRXyQo9UQUTQ8w8gjDLBoUwwxqAma",
  "key36": "3nZk7uC8R9oUbe9AWrg5hX4LRyYE89NYjP6f5bQfRYcqELYFyfC5EarXpmFhHCFQkr6VXXuNxy67UmGKZKSMs7DT",
  "key37": "37AdeEX2b6z4Z9SzU6bgC2DMMYLAAcpPG3jyz4XUngW8sL5f65eNUZ6eWftsAvbD6Xu5H61k3EsbmCkaUf7rWWcD",
  "key38": "3iviDxQW87aoyb1NYAx7BAVoTrSj4rk8ztTfFMXux9wTcuZ9McfibqDmUsvFzNwzJVQTrFdgy7MzjWGyw7x6jSeW"
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
