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
    "48MxG3fMGCBChqNgmejHSc4aPwyQivGupDyMkHqwxMPKtHG2A3TXGqEh57auvbBNa7qafocsLQMgrCaQqav4Kbi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YUrBpzGtKHEVea11g5PZCm7K7ifAXAAkWVfCffQdw1kFn17BN2NFXbU7So3YM5AiYdMRnYrNGcHgwABf4paojP",
  "key1": "4K1joDsAfL3cKF87tdhZYscAoiJaB5eq5k9Y9QT9X2Qw5Q6Wy6ZQnKdNatfL8csucfEfK9LBg1zu3KdCfcFGrVTZ",
  "key2": "3SNrD25whCRX7bZzYdUGHsf9dCPCqjpnCJKe84Zqo8UjP8qsJjrgb8FDETX3wBP66P5MHZ36tbswRXVRb7JRrqJD",
  "key3": "2meSxPaLHkGhy3YcXb6weuctiRpcKqtYGyRV1isgChqriXja9dLqhdcTusoZqQPZq4ASTd2kDLeamrit8sszBUik",
  "key4": "4F9c2VY8C5jsbse4ULNkNs1M6Z4f9fxjtkkJn1o1m1JB8iST35WZLpJY27kR6B3SGgktAPk8FTykJznvctecULoL",
  "key5": "2QhKfc35gpmBLUpPNR8LLfn3gV6Hb2bA5rkJmHL6xz9yWP6CUqiFXbjVSeZiUYgAPqBmfZFgAjC8F795d5n3Gwhh",
  "key6": "nDew75DFw85hytojPGCQzrwpiGruAnSBHsdNfFzw7N2PQu38HDJU5YCY4MjRKBwQWTX354Xtr5AZhXEHSd5b5oJ",
  "key7": "HGPmv4TVUrgUmaJ8MR1r5SYSV1oqMzZktGBrL3YoTCdnhjtyDg5rAurKawk5ZGqtoLhSeDJYXQWntJqo8rTrqbP",
  "key8": "2yHvyPjzP98gXmbmFwZDsyXpsdTNguJ3VJKiACDnudGaHw3UfYpTNoAmWEAUqi1RAVZwRzjwU1jHEQsVvwP5jAMo",
  "key9": "2mK6tjM3ZdNUkUUFxqtr6E9L68bgiBBcxee46B8BJhuNhytirnihvKGXcdR1KeafTq3veaCpeRNhCCc9Aw7kP4tt",
  "key10": "5uLjb2W7MLYCHDVxnKvrRoxZWKrGKUMf64RHx2smDADQPMGu3nvZZK4DboGvoiF7iwBK4WiA2ACWk45R1FMfWWrF",
  "key11": "iNwAnucw2ygLvReyzMjT8T54QZmY2mmZp9BPePw2DXLn6kC6pkuVhV4HCHu6XutQhe2zeQknVU9Nwmt7ufSFqEQ",
  "key12": "4WxCWHh8bsHmQaVDPYSSbE7wGtGqA2rd2PM3Hsia1oeq9kCeKRfzM1hFcXhbDk1aLDNYb15bDcBAfUeLRea6mD8L",
  "key13": "62m34TDxgVQm6PMaPv8zaJfndKtbGve16qbL8g9RzLav6RfZKY8xrU6kh88Cch2wHazLd9KNziSkTFd9VEQm688K",
  "key14": "5CZZbD8h7XHuhofiqQMrSYDjy6WBLL5qLM5xLR6Y2FrFRxoyqhi9i7PBh6XtYZhHHK8PwDSeGEGcyeLD4hVgrYCL",
  "key15": "2TeJQCdKxEFDzi3f7ULnWpQKRG5dXDixb352u9wJL2KkrvNss51Ma1jLmJFn6WTSycsC4bD2UC2VqP8iXyXtEBUE",
  "key16": "5ABk6DhbKtNmauoBmYMvV2ZMvVcqKz741RDBbba3yeiSgYcVAkPUH7EjLL5gcWBHskGAetmiPacxHpty7eMa4VBu",
  "key17": "4Hxsc1PvR6MK5PHkYdDkkzzqfXMGvwUFfS4kjzJbGogiAQFZMVrsL4sUypQQBFLJSoiksM5UFGez9jWgGe6fEanF",
  "key18": "4WZW5FGVMP8fLho48ppFxruaS1z5cDLpYcqJ64MGF7v3VXsdtDcHz24RU6YAJ2HCS2FoV2mLZZb9t3ni9K8QvXbu",
  "key19": "53caaBB2kA4KmG82myZcBvuBCRn57wFBDST9FSqCzANMkkWAtDQKWKn2aqFp3cjhbJrkoWWEEZKMijePbDjTeZyq",
  "key20": "34NhfHpyqXZYgrQ9nqVRJUP9iWQ2H8PiUB6MwiPMz7cBLiUVz6PBtDXpTt8JA6Fx8kfnYF5WQXLwFSDHZpwp5zte",
  "key21": "2nLDQvQVRAPoSg9CPvuWvJGwHL2Qxm3DtqYBT5p8agQRo8XduivRmm54U6nuNw8yJK8Gs5iMVbMBFQpB7LFm6h17",
  "key22": "4v2wSCiyMEgoFpAfqUoeCwkGPDKVtCyyimrX3QLDWNkPvCAEfoY3EoDnaiMbrq2rJ4DfMoJYk8Mt7hLjsWyUT2YR",
  "key23": "4pyopXAA86T4SofzdBjpTJfFDBFcNd6VBCskCH8D9DKWpaiyjM9xWQ8ssosvcg6BgWt23QgH58XcaJ8SFXeMiJbT",
  "key24": "3wtoXcjwaBKNgKkDxBPFGnK3nGB6oQfdTQohHVgVzxpSQ5LNxoRgcq4JauUMV9LAnFKxEVWhwQ2gfp1yV652VH9N",
  "key25": "2XYSdJUsP6LHg5zTVx6dscNq3Dhz7ucHQuJQXUXY6tmRodWG2NmRWpE5YAAZFCcsS1H9HZmMQPvaB6pWNiqZ8qiF",
  "key26": "3s3F9fGZKFWHRWQEX9xP11LgQjG5xjkXN1Azi6JxfrVLJ4aX4Jm81asPDQ4JC52PYPfgs3vrAUpjFRqpLqPne4or",
  "key27": "4LurCeWnfcz4o6zoGRyxfVE8JZcHtTiK9As3MNt1swZ5gXd8AnnMQtq3x8NnHdT83bikoyr9SCu8uan5Hq7MrBut",
  "key28": "5rEEm9iNMEobwLpaUF9nADwGteDqjTXdPH2aaE17mczMCABUTJMvHn7Jz9MfyzxFP8QnPncxpyEdUTBkE91GGxNp",
  "key29": "4uJd641sHqk1BQpZYnRd7BD8AjthEHFBHMVs14NQyuCKWZPrERUcfeNtoQjKvYeDQVZ6HfYqNHj8K9TaRz2Q5ShK",
  "key30": "2aChCcao6rB8tPbraz7jMtsvCnYNkk4JD3Hb2xBsFLtTDEjkBp1LMMGXsbodypFnkdRy8bjfCCPMufRtAWcBkxHJ",
  "key31": "5xUTjVHkXfhMhmGkevg92Lc62qDMNfzKTWAJc7v5HgHkN8Vcv9STFHHwdkVaE63MWBUJdeFfwDYfXTidqFHWRYrd",
  "key32": "5ZBhTXDNBVuyFxMsoRTzbkp1nLM7ThSXChAuAibBHSeMUXoQcxGsUFKxiepQLSc9nJVL3HeKbB4uES9ZdYvDTarP",
  "key33": "bmXLn4yvPf8CH4EbwvFUoKLijarrCf4FSXTzq9CfYegqf6MUJyTXiWP9sr3aoqidUjoaEjFH19rmz9fqL3yNNMZ",
  "key34": "34oCmp2bniRzyVuPcUs2d4CeCsdyS4QFshEbtXrt5K9vsbxKEfrcq6YG9XqCZwcWVK4BtZyipsS2zHwnTbHsTprM",
  "key35": "2ntRAVoWtR5d2CWs7VQdr9QGMLmm7QpvAi3wC65mW7JmwHdXEm84uwEPozRKrzgwA5ABmCupjHJXEw5bAbZppUME",
  "key36": "mbtomcM4FZmns4kyz6koYUbwPUcidAjUdtZ8jX7vRs9fHHygLUhuMFKNxqYuYLCT2Tue6wNh8ybGSwbgqttuSi2",
  "key37": "43tu5797AJbWFRQLjtKETK1P29mjfoGZLX3GWWP1fjdgjsMxawAejNEyLm5NxQwYCZPrpo1VDSHBHoLyUVCpSk1a",
  "key38": "2m2azn8QWPbPmTuDF1fHtCB6LUkpDgzozQoheCWop1f5aV51AZX2knMTpdcuZ6uYF66zbcdi8dawCAHhM1xb59Jt",
  "key39": "4gvUGjKHRJLVFuWcAS5MyaFKHEHdSrBJ67arqiLttaGdTzLepGDzqAT73JggTcMLetYYQhewDaq7qj6L79fgFq2Z",
  "key40": "3YtMocUQYFMmGp84YjTPhBeKgwEwowWqBEh8WnLwdebYKu9QHpWQEqv85HBd5fWRuCNzsyi4R3D6wgfM89GK2mCs",
  "key41": "38D6NDQbSABEsTEedTHPjeHuw89cTzwLr8MQKPuN2RkVg8VGZqyA7q4uubksLjVi8ZgBdCY2agRzQzNnSpcZqhmN",
  "key42": "2qX5y2usWtYdB2tFzirEjSnjUNAV46GfZfrdfeqUx1jjQwKHRNhgB1E7sXrD26ujxfjbp9R5CAt6BBFz5ua4vk7x",
  "key43": "QM5j4XY1JVT5V3n5m3Tkspn3cpVrP6GfyVzQkepHKyKxy3abBrXrbMGVqbhaorCy2YAJSxhVzkTZXupuvndWpbi",
  "key44": "3hGTDzNdB7wFK4Nqc6TVZrcQRFfxBKiLksV9MqFG7JF9BLrTjJE5gYstZXBTQoCi7HYMacG47E7Gz9J5UrmpwSJB",
  "key45": "kfcz4JrrLfES3Vo1d5SciejibaU17j57bEfDn5g9Cc9b2ZYjGFTfFiwuA4mfcX4KfrEFubbKSdYXZmWxzbARu9t",
  "key46": "3x2YosYmSqLHqSzoBMUvK9XcDNSie6q9PC46iEmQtCvgRufXLoEkqoSGPNuHciziASscuESfRmmSbLDhDusCbFS1",
  "key47": "3q1gAUakj7AufLDRKmuAWNFCdT2iQW5Atvo7BdXd2XXxVzqitaPAsktcV8trysM1ndYM1SJwKSVh7Fbo6SmpVbEm",
  "key48": "3Uvf5DwofG51EVt4eRXLsPUb6HoNjC97bCzbw3ZZn1xJ7p2XtjLR68EiVLHUHgBzdX86mWVyXMxLfYL7U4aPHo7d"
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
