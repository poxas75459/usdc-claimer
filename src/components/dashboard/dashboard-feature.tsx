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
    "2mrAnFq7zbt6EeeLAbWZ4ADpAoPhKwbmh58buzYEtNCGL7DxTEtZF7WMjqeqYAkwPgJtqeFukNHRj4iMLDWVJjYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCGKi1fsX4BZUe4H3XvkgySioZkpxuboUH5QdYCAZYZNh78F7Mg7cT8UPL6iXTBFUHZUr9chHneWD9tSL2E75hm",
  "key1": "52qZGo1Yso58LKqiDLqP2WY5wyfTynjBuKA3uZtpQTtpK9hYtGq4XCXhMWvKwiTA4ZuWAonA5WMmd6utssrexeQJ",
  "key2": "2qe4XTC9cWoM1P3F9oz2tJRJGc9P43pgyi8b9i5a4nkR6XgwhstickhL14qAb5u86Dzm4CqTCgcTnymtpcnsn3eA",
  "key3": "3NSMuGCBbZ2P8b8o1HnCddWgmPnCF6m3sYnqj8MsdGhcGzdWpqXLxyPMXyTr7QoJyLp65XTGs19cCUdDQqsibUdK",
  "key4": "5cvuX8MHXyWtuurqfshqADUAcJcNXTujr1S1Q752DkS1cGoA8J5ZtTL1ZRhoC7BQudtNfrvffFNfDRBCC1Cf3e38",
  "key5": "52t8MmjQ8HGDxPfQvizvy4BLJpeKG9HtstvJ56AaCbyqFGCJ63ZybM5K5Ed3rk5HHyaEZwSJPE3jBVNh8hnQPYCn",
  "key6": "EgmAxppQAmpfywHMUnyiNgtWz74jaxrX6CmMU6ywJMvmiCMosg7ibucxn3ww2xRkxMyFhQ66P9hH3ETcEevjmMX",
  "key7": "2ruG13GCGUWwEJ6WSaGhi6Wqz5PEaFRoPi42g7DXg1XxuRrYnHJxSiPYaeSJzVFZTCWjF3G33Nsh4gxCV4X51RxW",
  "key8": "5SL4tP9zkhGxicdEDf27fKsZSxxwR3JAjq4EFeXYsStHzSAvdw7w7tUrTK65K6V4cBx3ySxReTxahDspuHC9zhdJ",
  "key9": "5X4BvvpMCasTcS4gY2ZzCtWtUM4jUaVPJ2TtChfxh5U8SW373Z2EmA5YmEaRsqatqJYTRyUkhxndaQhd5wvRPyG2",
  "key10": "4VuHxGL3XUXMFsr3bgVDSK1ko9pVwWt2JGm1NKmLerNd7a9deRWUuFLjoTFzkC3de9xnKb6TxHDVz2Tj2Kummi4J",
  "key11": "3HwhqhbUvJseptbG5HqXq18Xv1BZGbjC5SE6W7ZeoYAadRd9wpEKY1aj8eZvYC24Pykwdc7LAZ5MWT1KSTr5tRyE",
  "key12": "eGfgjs65anwoA1DFxZrsFehThDinozGDkAmpnHwxpVEsWutJYPSUDC6XLDdHB34Wd19RjwgKCHQzU9Lqcsu8TRq",
  "key13": "67dmSRTBcAUisAMcre4UTnoogXRcSXVTUajUNmViNX5PcP4jZEB9KDQkM8NkEq3cHNbWtWnpzpUiRcMw5pdx9BSw",
  "key14": "4fFErwZBP6EtGemGbscb3hjVNLBfaiTnecTDr5Zd3y4kT7JCHpjy2JqfhQUorn1unT8MLCqEoSNVprraKnm7agfo",
  "key15": "sjVB1xfmXyv86HVSkCwTJUR1z3gpNQU5Jj34fuabVQUaDZsQRxBpPeHxFMGRCsZZa15qQt4TZdi1F6F854b69dn",
  "key16": "2ondRyvJQ1qsoQJ2cNpL2Q4LFyySSo4LUV4qC5pXeTp3AUzocJXYEmWAkjozgfHM57WB33cBSSSyPzHVGYMiTYLW",
  "key17": "5Q6Y7gZnL7EVuP2wsxKQJ7FfnQVMcEyTMDY1gEooMc8kuNgb64UbhutG4Yw1z1i2iqog26EXMCkqaGPDjpkg4KPG",
  "key18": "5nZJPVe5fzG1ZSXzzNNve5DkfSSmueD5SkuinhrpBnwbmmdmCXCdsTBnhT2X4N88VUabew9XvGSz1xnPhitrd2o8",
  "key19": "5knzaobBMi3ucH4EBMw9RLVng6opxRGAEK6vMFWhacpc997yVnrbGhksd3XVE2vfW1kFUfthbppNVNva4e3pHFV7",
  "key20": "1bG9rUWhqN3XFdXdV7AHEPekRomAtuCJ15HgALmfhpQhat1tV5eoZptH6JpoJAtj4QVh882k5rDuxtBi3wc7RkZ",
  "key21": "2TLXDvmVLNFzH83oEGHEYnHchPjHqaYwd1hY7rJtr1M4ULeFt1khcouaYPH6u7HfDidhatWEeiz7qAEy1inqbAsA",
  "key22": "GU3bcefnfteu5pFhQKPzM6oNZva291memz3ZZxUP6PCDCopUwRLwSyswmA9hJLjJSa5xbKshiCEsUG5gccxMEze",
  "key23": "2cK6UfgGWK6oKBfX2gN1xYEvrPxrA7HqBxAq2erHChj2UTWuBGPZ4xys99C9wgQYjeUfMg3N1rLMhwJzHLQopnJj",
  "key24": "31tZLPf2QN8BceJneqGTeQrK5dNjJtJ8BBErRqX6a14nCC9x9CC9xiYvxHC3vXNghz5MPJaKBjgZVw8FzEkzCiVE",
  "key25": "BTWjH9HX32NwZn9pxU7fGuM2iPxkVEyw4FkmBYscnKhJ3C5Tpt82cR1hJrbwaWbHSCm8ULmQQngw2W2havHsVqr",
  "key26": "2pSiQZpdEJDqyPvQkLnHNQ7QUtQpE9MEsy7Aqz4qmyLcHZVAyhpwtEAcwUsUXeG6Q8cKr6x698zhGjUqz5FSdHmZ",
  "key27": "4ZFBrwkKFC5rs7L7eDvKafxeszKidXcRGfhA7hdD3b1D97sKUrCa1oN9noPx37svozFuhDPx8fXjZ3nMeehqfv6Z",
  "key28": "3KjuzBSPdFgPq3tKLqEyU2oWGm4EnFjjXvZ7EiDtih1GroXVxABfhDZ2pn4WSnQtPDC3mcZYtcHmJvMPh4mgfTDz",
  "key29": "2Cq2zWjBmnRzepQzAj5H4UCD64agf4ELrZ3dmRAQjs5Q5uXpkSrkjUCYPvpfyB7DaLKrG3ctoVMHAUfb7agHo4gp",
  "key30": "X3b6YZhoNTb5JUCBEvHG4E2bdJuxqdzAV2AagBgtVMmdCHEutbVf5rTeywjJNcXtdeevkYtbL1jzSxDtAfJdh5B",
  "key31": "2Y22dmMPMWi1LEUqRvdLnPBdr1yEMUuXbcTPK1y77VqkeK2SPpJpaJfwfZAtKeVJeG7vy3JXBNcPogVfqYwr8Who",
  "key32": "F6bANE6Y8srPmRSMD7NDPzgfGxFstDkyQhS2GYdEw4sPZy2Zy3sp1yz9EugUa3nWezJUhbvgcuQ2saY6UpUuHQe",
  "key33": "4YqmvktHp9dK9fMVceLCspjnQSPufgox2xtdR7rYjeG66mrewNiS6XiVFMi7E2QA75ZimVkdqZxLiyYLA2V538i4",
  "key34": "HauKTqBJDAL2VZt2a3ojMasPzxqYQzVrWawKahhyyUsbRWAZLUVcceG5Surtfj6RroyYyk99oQ7xYq72X9tuXym",
  "key35": "419PA5GyTmjsiJUAbaPxWRc31otdV5TcW1gKAD2an366zwuCEDKsWH7KLuXMDc4c8ZygJq6J37kjDH4ctnpeyGwW",
  "key36": "27c4RvdfbYRPaNhFwZaVhxLJcDBCuypG9bcta3aCiWmeNHcoNtTAcxWVbvmSk4pSNvd7S3p6h4rrmFBkFZZNGXtu",
  "key37": "3WdBzjeRivTDn1FaFiC48TRg34BgJEJXvH4tAXJcS3owPTA1wGhWYn7gdt5BkAvwxwntEXKU6Bprux53o2h2Qz9p",
  "key38": "2Hm1u1utGcYoN3bRs3Fg49MXTU5Tnij4xcBBJNuJfHPu5jJaD9RC5WnCMXPnKuANtQdgeaozkt7ERJh94M4fep6",
  "key39": "mhMs9m8ErxXkwf9XgprispPzjFtfvm35RWPANhem5iYELJDBSt24sXpjdbW5gm2CZDzyiLzUaGdQsmL6t3fHqKr",
  "key40": "4inMj7LtsREKb2FyYxy3AHJ5Z2uQXiypqB99q4VEhTJoz6shrn1LSFwvmyyh4QLshJrPLbVhAMrb6mVAmmvLkkUC",
  "key41": "vaSFqrdxoPRBqh3PdSbWr13Z22ALYgedoiyRMfQg1HA6kEbxEUx6Bm5MohQ4gkQB8s13f4oxc8GZrFJzwY9a4aL",
  "key42": "NvRoxFkrfQoeVcVJCvYknkx654PyVnrkz4BmibR9bZjG7hyoNyYnMMiSSXC37DfXWWtA6KvZnQSQgE2YiL7nugD",
  "key43": "2pzLWMC1KfEDSyUHMrwAfAHxSdTUe1XBLXnUEBSq2bb61dAsneUiMYrAcWiyNyv1zoqkvt1CHP5i1PPrKKwfjoi7"
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
