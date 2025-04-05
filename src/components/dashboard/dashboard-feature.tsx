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
    "4y8q48cswvFB3PkuNMnr8JXa1pPPXSzqFksyJpWbVeiFKJMChumWwsxw6SKqng41hTXdViTYCmyczD6qrkBcnQFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZh3dq93yg9iFCbd4Modt9v8JFnFLH3CPwCAcfHaeH3yQvtkRruAVmedGPqpvo1qgdZkhLyDPhBdXXBbGRstSSE",
  "key1": "mDuYetQmd7LDrMowRK7jf1YqVEr6MNgFcmGEHvJK5s446jt2egxqyzzpM7SHASkRc2W6pKMkDBZhcXiPh4wcGtr",
  "key2": "3EBjwMyNnvZuCGSVRHJMzG1gQfoaZK8FrjA6sSKwcbeQd7i6grn5sBSiDpaMSBCL4vLcYC4Rgjg4kVZUjMorQYsY",
  "key3": "5fXZQ4K9E7Yfw6bz6SajXv5y27d74HHMPgfHiDijdTK3UgxbaxVfhxiMYYatMy9AH6k4YaBiqvvmjigYCak6ruKW",
  "key4": "2yscHY239KB4FrucAXn1tuxxcN6vaVL1z4U7ZpBy26XAux73Bkej9QWo2Ud1MUmJJgikUf1s7MRH4K5LcjXNPYyd",
  "key5": "5BqYCdShZhSxpCpNkJwAYvHEEfYSm2ZHA5AfmGWyUoQmeKy4qqUsE4tABKptS9Uik9rohzLUedMfZdaYA58FuzFs",
  "key6": "269MMFfwqYJ9eKPD8YF7frTd7TM81tN9pdFzcnuBjBE6Z8AFo3RRnwkAn65utaVqpko8v15i8kksb4boqGnRuodU",
  "key7": "2ic9DF5X8BzC6hCkNcq5B1DwDCxSa1BkT8AnxTsCBFkgMFcYor4ztStzBng7jJSoGhjKb4smDkp6KEVCjo7oujCb",
  "key8": "34SY1kb4CEjzGfL446AF4QfqituCb6pQvcHbFMkkSEnPnQy6Hp3SgBFuCqNf72FWjdjc9B1QehjR7czFwpDfSYxx",
  "key9": "w56a6AqiqnaAUL2W4op2cZwyB2PsR2AkUtcFy5mGiv379w48txBcwLaeNPHCpwf5zEtUD4WT5CJGJENJ9UKURCJ",
  "key10": "ZhUVag5nstGqgPbNGxGGDyXn5xQn2xEz9DcLZDbim1FF55vMYihU3ykPLH3LC2pCWcqGP8toorr6GqsSFoJXcHG",
  "key11": "2VGWKNkxNjQVK1pZPgLQPegAgLBRra8khkWdAi6ATxiLSpeaEPeL9n9AYoaSspG3nnQ12Exnrtvm3BfXdntkizfZ",
  "key12": "3LiR1vzzM6KUg5hdXJivKKFi6EcDJBRsyff1Xeg9HvqYbN19RRAQ5YeTBugmmi3nGW8qaU1quaxsRinMZ7QCXZwx",
  "key13": "4cv6tz2S61Mp17NzFgLFS3yvPFF5fcNQvzbZh42McvmPH1VU1EnZVjqSz7GZK9pGAR9Uc4qwyZj4tasaSGtwwrR9",
  "key14": "4wysuEhRYBDtx5RKREMfdRXEzJCK25pCVULjEyZK8vAFFQBpw4ZwB6stXGEhhizz6L6fUoKLa3BXgN22QSJuJF7j",
  "key15": "2Qi2zxKG6PmawTj2rv38i1NixmYUhoSQ8J5Z35KgrUJh1762T6znvzTx3TPsKejBktjoFPUB2wVjEY2aWfmGSMfe",
  "key16": "3ak37sWuMHw2YPZSJhBCPRrRbMSRbbNagdSG9oYCAEV4DDNM9kfj9Cn4N6nahT31HPwskuR7rus8Z1Fh1YN3h32w",
  "key17": "2pVWEzCKwTbW2Fguw8q9yAWgqiJwFpGakrNXgZycHwqFSbDATTdL6xxPMFcbrq5pXaLqRLtHqCs5F3cTYsfSXui6",
  "key18": "5BJ6oa2oVKnsXXqSuMCuCoVpG7Pdb4vGdAo3Ddr3h5pUh5pGY7K62EY39P1kuvaWjYQypLnyHDBBjFsJJhaLATbZ",
  "key19": "9LLvi4iBicS3mZDDTx5rdCmPNqgwe8YU8U7FYD6WcJaNBBAuMLqvCGQxwgbgHVmCcDJwGip9MXKqRCUgzNrcHn2",
  "key20": "ti8wMz7gNzB5BcKmsk7Ke3pBmJa5fPqKF5garMXwJXyfFt7ZN1HGD37dnVW5VWSK2PVnz9CAXxumAAFuKD9PmFx",
  "key21": "5iqot4rP4v18kgP46rMtL3oTVMPBNshn7zmHBR6YnT9aeQYzvJhCihvBSsKMHtpWtGW9Zmb5b55HWSAzT479bd2F",
  "key22": "3HTX9xteKTmLPptBAJ4kPMi6ioANSaMqGMU6BSM7fdXUwUeew8uK7ZMBByZ8quekwyrNLhbv5cedXWGysMLHzav5",
  "key23": "aUwM5JTJSy2AhWJmgSsybw4x8kKjTcsErdT7PpJ5YJbdsBdFEWK2ivYcTbzGbDQwAppfhAKsXHYwzuRt4s9CY2A",
  "key24": "RZa2uA7NYiDCUKSj1YWScjPqhCWN7davgz24aVUqACcmo4q7N2V4rMm5RWSawVhEsCXZn4VzrvrhEwyX3C9viG9",
  "key25": "4SWAX6Rp1vrTa64i8stSazxWDuoFLMNYmZBFdhDNmgDANSaQDAcwxZFmnJSqsp3LZ48dPFVGNXJfuMm5qikzA18t",
  "key26": "UKFxwD5Jmt38HShqEVsG1YsAtesaX1TmoLJLJNYHDupYVaTTUyh9iFQxAvxosLsbEh7728aM1ZyQ3cNSp3h78t3",
  "key27": "3dbnqQQUy9UMZ84f3NhWEDooFMtr2RwAUafxJyG7TyfaGGQRMGFDyMAL89hyFwecGCbQ95atTShuhAujY3FtLyoD",
  "key28": "MSxZwcA1gPhZK791JBQGUdSpuCwSY2NZzzuLxz4PQJ3xuZT2rtXy6FrUwEzNmfgH6zQc1fwHAVmQGejgc32Hoai",
  "key29": "2McgPzSwJkFnyRkoJmP7wYsnxiXGHCrkyVtz2WuSTmRWVQHvKHcrfWMDYdfgapx9QcooafFW5fXDyZF6E9pdrnTR",
  "key30": "5qjbugQDwKNGyFK2zNu12CiQtvubnvKr6jDE82HaAHx49PujWNn94Go4kEMtKsb255JjdLmCWNBjPVCPBh3owzN7",
  "key31": "HATjsqJ6PQBvHXtCYiQ7uR3uWp6hRNU9UA3GncY71dWRibbsBCwoJdHjTxGaMgPTeWpqGai8qTiTiuTV3wC6B3y",
  "key32": "3kXDi4PMB99m1ETyVgf9vyu9DFc5t92mXN1mWY2CcRhYoEWDvsGGt2LFkNbiFmn63U4XTBrvx8wN6nLd2r2fqH93",
  "key33": "3H3hSBq4UTj79sXcBBXTwrtY16XgotKws9QCdqti9hiPfv4YFDeyUthg7Afsf3H2sQro57ttnZGtcpmPtS3XiSh2",
  "key34": "55vejTmkw1AjcAv47KY43QcWgebEJwVu7hcH5bpqzr4mNAfC9crKAfxTmErVRaM9NjNgy5z5MgQocYYT5zegAFtX"
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
