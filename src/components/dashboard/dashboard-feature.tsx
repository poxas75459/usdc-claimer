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
    "4BgtFGmr5ojTupv5rUchEZJb9ukpWAx2hDJ5h5AoGLAtWjBB8oNo3y2MtXNFqoEGBqAdjRBWiNrm4oUTaLnnWhU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tXLUjDQ4U9RinvAhqcMYg5GZhWc5c9YAp6msuBVn5sbLTeuDiAzwPWAZKcE3pSviHuVa9Ma91Khv4kaXGpcvfhj",
  "key1": "2HwBTWbyvdGG4XqcUZaGNxYnPvr5GkSx3mzN22B8iMQX5RbtLrV9ctzCp6WBxGX8qQi2c75KaJHGmmHTMiKizaFF",
  "key2": "ecEdJSnKB2Us7xCGoqNQyyPXoSjfgCaEtRcJc4oCeQv7eU5RJVWMnHRN6cqQEymDo4tLuUjRejoH63ZKvRiWWnm",
  "key3": "41seqgZf4NduNZeG2kU925qFYhn12fSM5HsbrnHJ83KkhsUkDGG1VzBExGgmVzJpRT1KPwBBpodd5LnnHK9hAQLq",
  "key4": "5MM69noUsPG6JFZnqxggd5b7L8H1Mbm3jVtBLVkMTvMyHpDPbot9nJqnR5nUVcRbNLUkUcbptqj99exv1Csnnv9M",
  "key5": "2y6956oXV7LmQuQMMYpaDEHPLTAtqPq2NdVdP68VmLFWsmxymmyLU6CjHzQJrnZe37AMEdaRYE8xBYN3geLnPyV1",
  "key6": "34859TMFxZzKzEbCkEr8frxF4MkENbUch75jcXwKusVsAWP5ptTwZ9mt7ptKAevhjnPS1ay2afER5b9jiaPTKRuJ",
  "key7": "5MphL2FrmoUKTSyxGaqnZx8feFfVHYiA1UF8MC7yL2s3tHdEXruXkZyoBKzBSdoU8SfzFjhhoouZWHkcRXYvTxcj",
  "key8": "38TrEPwgryk2QNECFT2RsJmydCafghtUC6cMkeGfAdvkYNPV51bZftM8fcVSstGf7xGGJHvDo28QPzN2h5fXQ9Ur",
  "key9": "5adLaCN79TAXcyVyTgcPS9GTs1FaBWeHTDiq1yYvwfh42GxEEe8jCMDh8XKPPZtTRgvT3fQcFnUXa5S2a27cusi",
  "key10": "wfow5gDGDbx6tpbG3isZzmug3cRgNGhF8RiwPiwaNPZm7oag2tdKGdVf9482RhXKF39ZSL44Gaxrw4i4qtm9yUm",
  "key11": "2bPkiKMjs1gB4nu27jxS6eT8XkXxPi84vtDXQPteDBFWcAmfcr7cHAa9QKgAzKG5yNz6n9gCdK7LgHp9sX8tcbN9",
  "key12": "3dySvabyYDH6482dC2E7Yc25LsUbC27ar9vXhSMw4XTcptDZkJysnFGXwEsTLGpok67X3F4ikcsjB3sSpzqzvuez",
  "key13": "3qey78ovEMvXRPssrk56F7b1CPiagEuczkGqLFNf4HvmbUXnX97vwSfVTbjeFiG3uH2jtFwrVZs2x74TgW6en7Sv",
  "key14": "2irbY3Acf6zRMqsqaXUdTP4QBtceV3fa7gjwxiASkpEcAwY93EFdGPXF1qPAeEmsr4RUGLhemhQK9bhQbSjZxyeE",
  "key15": "2oPeBX7KnXS8XKVkCqkGi5P72rwYAmUMWGEMT5KfLpuXDhHBhm62LXZtcU4GD7cCdATqUZpvycZVdFMp14onn7pU",
  "key16": "3BvG6yVvcoEP6qbXPmyzozPsBExeedcxssMxSkswPGb3MHYfNCEJQUUhnXrUnPPJmGyaWamQD9b7JZyEgATSAwhs",
  "key17": "28KVPPMVXU1GjLKF7WQbe7jHeMRizeboxQ6YsuKP9Upc8kU7bsVweetxpKA2khAmxRgUCZoscbSHiSepbRQ9nt6G",
  "key18": "611Ca8dYpYRQuN5BmKq5RSc4o6A8cyYHsHQ2L7j6KcRS2NhtX5pgo6Q1UJcpCpRVLi3SVftSHULJd47TZAYfPiR2",
  "key19": "4VMNCrrikoXyF5od4Jp38S7DsDRwX6wuB28YGNEFUtdKboer7kwMoEngX2Q2oJX1Zo2iiSvi1wsQk8iVBSz2xpjp",
  "key20": "5f2UaYFv4r7vQ37DhbLu5nJNumWFXUzfmPXbgHvnADcXFgnw1rxkCJJB84jMURoP1SgP1JVCGVjMkbLgNCiDfKEp",
  "key21": "dePzb5hv8VhofEhqZbCmBQmJvW1dRP2qmEAbLPNdaQ246UQnTHc15P6HWz5h88Tr4Q3cSyhmx726vBrfwuSyC4D",
  "key22": "3CdnvaXuRkzP9DgfnQbwv9Cc3taAf1SmVnyPCW3LpMjQrc8ajATT58Yf6dr4GibG9MiwkmPcxnt5ruR1ypFTYuXk",
  "key23": "2KZLsMM7JtMosk2cCYU571gEqBXyxX9U4VWEFpibMC7C5vMegYfE19LjcBz4xCXrsNAubojX2FBK6Q4yGzRWbBrk",
  "key24": "4vHG9JZkbCoFESEuyjNfxLtKKj69746nQAAfDSW7F2EeuSSWTtboP1RGRbtLfFhxG76pK6h78GPQMXzA2zhsbr1T",
  "key25": "2PBSa2vcJURhkWzNKuBkdkXvUqCSXbVmoxTg9kJcLtGiX8RsHjGiiPCmLPzUvZBf8Ap1v5QPF8FTW2B37KePRmvb",
  "key26": "4zfPxvqt4EmhrFMDGSDL5gQSijw8tX3n9TfysBsZHdxehB72tRzdnYVEdFBw26aDXs1fhHYEzF8nT5bkrh4rojEc",
  "key27": "PoRKSHTKsU92BqCPF4e5DvBLTCDm915uQYwDfuJzhWY4ZcSt1hx5N7DqXx3ENaPhfdZGficp3Z71FTBUBg2QnLJ",
  "key28": "612n9xvdmLRaVQgW9oNajZC2hvYmpK8WNoaNGx4YkbJPZoJsG5ryrBf8CxdLJ1X71K4NGKPFLRSsLUn1XFZ1hGGH",
  "key29": "3WFpr2KgAb1ZGSo2tHPi49YNYUe1M79YZ27KhjiYZHvVHP1ER8RcBiQ44oue4jKTQnmo3HxqTkdCanwrVQZYpiHH",
  "key30": "2MaGJvgtBqCQaEigq6F6yBmdZbCFuGsHGGQsnJjP4tJyo5Bri6cy9nqY2SMT9NCo75S4ZCUZn5EKCgTo4krQycC9",
  "key31": "gsr26GhYS8NMf4J9Hk2CbDDD4mwKtzVJDfgDFRgTZWfKDq6xDZasJ5gBmwTCMVFr6w3N6pPuCaD4HVMtAZBywey",
  "key32": "S1EmnDtdkNHTAgWTDbBWPJsjVFzqqYr5AvVQDZSw5yjoe6p8V6RgrgRFp3D38PRp1iGSEooGHrnY2e6tmVHQiSa",
  "key33": "KPW5LcS79USNVjYhPBZmkkX5XXnf44RuhYpNy41rLDfr1YiF7721DoLU8LU8t3eeoPoDHJLDmeXDdWiN7PFGwtR",
  "key34": "44WdyYytToSDmG2mEvyRUcL4f1DRvQYSvtXYToZ4HD5WLTpAXvU3XFxQxFEsixnASoWxdJFcG8ZuAjjByAn71Vqi",
  "key35": "cPVPeRwCh4kVCcngSDZBnbMzGwL9uq773QqgQWCwdyYLiJzebqcQx1zBcPWeVjRkrqRWyrWyrskSN2hY6SWcC6D",
  "key36": "tZbq5nEMzxCuzcQmrS1h55uBuiFpnuLupvrVKHqcaz93SHFL8KYmwyueZWjkSh3ATyNy5BKPYUTvz1wBF7oNbKF",
  "key37": "RxddRjVfuGNaYiceZYmrF34zfrAHG8tG52WKGfdNUAr1xyC53r26mYMoz2RAuisJbvPSGYtwBcC28VHZo5hUM2F",
  "key38": "5KHnDcvnkMdrnNqqR4tXZAi3CknEBHq35JhXCgt9YSQ7mbpNe4R6ANq5SFPcoPBBzrZYpvzjKYwRNkJ7XGqAtsnn",
  "key39": "2U4q19UJZ2xQ9oxtwwZWMHFSpenqJ7E5qGzRgDPYfLUkKiW3VWYXn9WK8Rh6h3u8HBCoYjzrT1wF7jntRdXTN5EC"
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
