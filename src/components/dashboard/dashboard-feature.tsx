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
    "5utjvFeVKcpgzQ8dYkJEPbmtVpwysNmwHFhFgethvef4rxpUDG5YTLnZpC1NJZUVgd9KkphDsXBsyvL2J8zUk6y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9x3umxiwmLFZp9ygN18vcSest4o5ahuzYEwMHxVyNVN2sSMGDQSBPSwu7zE61RwFh1eLZyrQ1XVWYGMxAoFN87",
  "key1": "4QTUDMAWSLrtkqWdRPe1n93nYjSspPN6PD1pYFdVMikrgX7bTLSeZkYA15LjXJYWV9D9e8E2bz8jopvc79eeaETs",
  "key2": "3vRCgpYm9tZ1eEdieZnxtW4rBbK6ZnWagxqEVyx1W7g2p7aQoEP9QKRbpZRBrbxnsuLJNWvv1MxDKBQMLonvxJH2",
  "key3": "5N8y6ccNuFGTwUQmWgznPm83BP9JSabo1ybsVicKw7SiHQi9wfH2TRgE7ckTVMJc7ZaZYp2H1fMEUV6LwaujG1bo",
  "key4": "fej6itYfZxganf7J6SkTGi1Ux9fRMtQUwsKqiKtKW2tLDikRe31VkMDqbmaKpGRhVyMZDMfzCirQo6LP89kBFmz",
  "key5": "21NRhk47Rc6na22YGJuwCCgNHR3SZUCVvtsnSBSsSm1Uk8YNYLojdN7tMN4VpvLxdepC93RjVMfaHGWhwSbJWfgR",
  "key6": "95wxkv9QZ8fRYw2fL9785FqQG9NH6VpeBDKEJLEmi2bbURHCxEc7Lyokfv1ruoQxtH53KPzAmpjtdq4LFFwJUNm",
  "key7": "5p4b49mqn846NBgCpZqMFWfjfkVuVpumffBe38UpCTH9bGAZcKK7emSLbm1ZRwP1TezBn5TN8Lt72r3aZb3JGHUi",
  "key8": "5xtHcLrNEmYviob9Rv7RRc6KobBapcqLCf5bWdbtBm9EQEMuHjWb7tZ46RmvGppGhrWXz3byhamd4hviX6pmMDFS",
  "key9": "4f8ZNtR6CxZLJ8TGf6DRUL1RmFV3PnoRHgUVeUVxecxAVB3ySuyXVDMhcC2tYfWivmBqzT7ydBCUzmshgWVfP5ae",
  "key10": "5EXB654cP1KVZi17PfyBbvVkWtwQRBFjmtSpNVCSxdCmtSvNfLub8P1K86CBrAcbfSrXyKHxDpNiUWfk2hKjUkAk",
  "key11": "vSqqT2thURcaXYKBbTYtjLZaVjaxXHHLP2YHTxH6iiCxZ9wYpGgDv5YrKFTMkgfoa92MVz36d61g9covHhECU6A",
  "key12": "34jKBbyEwTwPuesPEHKCPqeoLDQ5iepkhxYsvUKQ2hHrFZsLn7bscxMa42naB5WvU2VZCyRQAHGhEWWkWqeRjp52",
  "key13": "Ec2E7UAJkBxCWEfRujofX7LTrx7Z72CwJ6frTo43Lohi5j2MfSNjmFcJt4V39s6nDGCco4m9MWQRKyohwDwtkJ7",
  "key14": "4fN9h6KVedpxk8jfQ9WD9er5u5Hwp9hb99ZgHv8MHT5RX13gBAuwSL5qhb8T9gNvijFyfDfGWnXBe9rn15s3npjZ",
  "key15": "2GmNB5DRGrfJzRCVGxhSn6q5GPDqDt8nnvitQugt2gqfjK2nDaDWM8ytJWvehHhWj5e3bzm4DJ264piBY8oPjtqD",
  "key16": "UiQHDQUCnZ1fD5c5vHub7UJnnFCMwifEsn2kmK145UvrNRRRcJo8uGUa88rGXByBsWSnn2HH66i8xShJDcqEREK",
  "key17": "1wLoT39bdD6EVCEkEisTWSQxkFgxw83Hr7BNwe4wdUmWmQKGonhwMVFqUHm9LVtyFLpfpsVxpjc6rTzsc5gXgTL",
  "key18": "2TF8R7CH813DQKbKdsGzrCiEpXaKeyumwzFdEDsD7yRaXbx2NYCVewRu4wx3db98BfaPLohG5oUHc5SE2pCVE9VX",
  "key19": "5eSLpARKnGQX6tJupdLoxyBJDJQhkJHHorbkSGm6htY3kS97SHUbHnAPK37iGkS7EBSZ6bJuMvtzxszkMgwvpPZY",
  "key20": "XqkC7mi2LCfcipK6XAphxiS2kxkJJz9pQbySAjxvXdNQPV5PgBY4a7jbUzsd2kKtqxuxeVA2UuAa9r18XZSTCna",
  "key21": "51vHxG4MmjyGpMD1GB6QooZoNGG1xc7DXdLURHhwYEzHSQroE8Sig1nB6nCZenqeNcAV4zxKD6YZi4MmpiVzS4E5",
  "key22": "cPzeGKX54CvJEUPWBFnu4TvokpVVQVp3EaxyfD38k3QUe2KoPz5Dh25H2eKrpUoBAqH1fwJvdkuMPddUBGiyFxD",
  "key23": "25D2SBZcshHwhi2nfmiziCzURqzw3x7UgGeaGyEdv15TXcCmV5tkBCqJcWZu6mGTyfbmperd5UWdFagGqNcUMcm1",
  "key24": "4wk6XA1r25qRVqos9Xu8Sm2jDDapx6DmiWyw5EqaC8tkhFvmwgU726oh8ocwU4J9R2pAe1yNHU1CbWPqraY4QgaN",
  "key25": "22ant2e2xgYgZZZJ2J2WxN5aUFQWvmyoGkZzKuZXvN2DSR7E9D4542ny4yiusxVywcXchXBXRExViJb6nRsJeAX1",
  "key26": "5sEhJBbi8d1MjiNaAcJ1bmbbQDkXTwPV2oGdgehuyHVhRa3Bh4yjUvFXThDq2knf4knXADoHWR5NKjgDvCyfA1A7",
  "key27": "DEzsrVNT7yhX1k4MEtThpzsfVqNnDxkW16XMBgCYMaoUjtyW5VvfVvt6D5zt3Joh2iopJSKStefD5YcdtTr3mAi",
  "key28": "2dduFapTHFgDVVJRzvSeRUUTdXCqbkjxKKw64xG2uM3XDSXN5Nm3ZacWqgEErnN2Voi7EKKREWXzW8EyALCTzEY5",
  "key29": "4QSQThiS6sy2gNvS1gUaBBoXCVu9bFCo7PoJFL9DQ6nX8H6yeMESTLK1QD6pBd3YEm2t1NkfSr3TfUevHhZpVdAc",
  "key30": "2aLhBbr1z67wjbi1JrZ495fm29BNFySXjan3AA44JDboF4iX9RdaTtb74gCedN3kxtKKSzKjvkvGTtjRuZdhyJ7W",
  "key31": "4vdkno92jTsA4PGktTuofGoZwCT34SyDRqkCc3Y4eyt8ufdeecpXwudcs9L3ao6wNF3EkVtvg5en7ndhqtpjwGey",
  "key32": "2Z7H79jkX7tJ7dgNLa2So6RsG42VdFjHkUC4zVr4c7CRexDv3TLNsEZhLF4GFefoRZ8FdsiF2uBEauSUKNCyMYTx",
  "key33": "5aDEsKE247xRUEnn6Snpk4JURdCu7A1kqk1JRYhsj8AQYHnQLiMxSsgLnt9adU4rvjKMV6M4FxgAbXJjhS9QSPbf",
  "key34": "4ARtTBQopZ1ysYUbt8ZD5rvU4e9fVK7xyMa5zRKhhwuF9Tz5ibM5kPTHWc3ihwjGvpkxjRDG728TBj9QSF6RYhQK",
  "key35": "5X1g65op1QS88eWfK6nz8miEqW4wnMb2F1x4wbb1ohq523wERbsireXyqnzZEye3ZuSDztpZszQ8D2TRpHtnEfuq",
  "key36": "2gTgA8Cq1AdMavd2krYxaLFYuYG4W1Jgn6qiJLYSCTPFTzamrQDaXq7ayzkP8mrtjjegzgKJw43p5FUrSu6JnmKF",
  "key37": "3x39RAvcVZFBkKnuA66MpBbcworei6JH4TVovSCqnWtFW86ToPHc7c2LTnCJ9z1822DcYGMSeGhq8sNTtRZy2ZTS",
  "key38": "2wiE1qSaYUHZgxD4kR2o6BCX5Rd4P37K3Je3YcPpwfyyeC2NT2jVcC993Szgcb5faARwG9NzJM1kFpYXGNEPEYiT",
  "key39": "3E9cVoErqFUkfY536zQKpBQYAoGD4cqpQ6ZGaBFYUFsp3X4SYpQDbWi71wRPWLA2bXZ2BsnbbSqv7EjwWGudyR8U",
  "key40": "nxT27yH6SdbxFsBPD6nsoQrHLJybKFqQMHhvefauNfvj7nn9qw3gjras7KRgdkNbhGkj8n7uh9ecjoR1cybW1Zu",
  "key41": "ooQv62xsK6TPLUBMfXqu1jYcC3ayWVDDXXy4ir3LFVkuBKXGepmEYxwM5rxa5SC83CbAkM4rCrUcF94ZccNWzA7"
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
