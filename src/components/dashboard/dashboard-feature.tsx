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
    "2Bq9J74Cv46mzABU6h6mgQsmR6WcJcPTNA37RxdG5tp9rcgogtMPSDkapiAq1VbEBi5fGfaCPMoD74YHfx3agawW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g2uS1Lcv34CDenRtUXz1cQCsA6vwnfZVaXBNEStAsxHVQJjjmGCPESUrzurR234zKnVnn3bMkgEhd1aRfDFycKs",
  "key1": "2DLi9Gut1mVujiDhAgPc54S6hwy52Z69JwzCrezuVCNLd1nygXj393A2kozs4M4voezkmNrGJR9wTrq8zNtd22mB",
  "key2": "4mh6yzNRM13iVvGJBg6ZfU9a4dpesCW8YyaZkd1Z19fYor4r1HotYHTN6Twyb2gDoUhW6wpq7VUgTU4nydRJBgS7",
  "key3": "3B8kRberuXV4Vb3pHKHYPWMW2bdFGW9jThSUfkRJ3gm5XRBHmdUCHsd3bu5boJSHFpwqejuBTaZKTx7giYk5xm6y",
  "key4": "2BduLrYxARcsDHYRemRqtJ1DZHu27zUUo2Cf1jhA1ymT5WWujxN8dmtML5ETu6gYPsJDQwxDC4n2rm182jRHgZxq",
  "key5": "4svQTMigtYh1t99vMHyC9f4FvNgkhBDD6zd7i9rDLtF987n3vj54kSkpWvJbfDgKgvJAue9tmegSRB6dsLs3bPFm",
  "key6": "4zFykNrCL5SpB4r3KpAr6XXnEqNHMNpM9HCJakFgQZJaNgxYV69qoiG8GLcqXdFURmwxFyUk16FnFtwxoBZagmnM",
  "key7": "4PbsRqEEFwu9w3Bqc6v3ZBLMyr6SNBmwWxfCiGQb46pSwEQ6uCBFyVaqxbZS5Fq2KVbL4XUQn2afjWNSCQTKhd4i",
  "key8": "2vZzt6GB9MmcdBu7UMcfCcUxQ9E7mipLgxUfaJoRf2LXK94s23H9TVofjYwLboiidzqPwhakp3BAMTD7w3utf6k1",
  "key9": "64U75Q4qJ3S8tRnm7LMBRdWLJcZBShwqPrvSrE4iS9suJkWx3r6Up7uvP1MCnHUC1KFJhvoePZw1ok5hQ5k6DxMC",
  "key10": "4agad1rdgyas7hZNTk1UgNQzGDJETRB8mN9E2hynrPBHrFr681vWB5DZ1rVyPa2X7T3uThGyMSFTmb7WCyJXHqVA",
  "key11": "vm7SsJ15bqEK5DjQLXspCoiYAjExiP1SRzQhDcXyEuWPTKAThtHwNMEjtorDXG5eV3gJFA6bAR2f55qjcHfXcDK",
  "key12": "2bpd5Da8jUMw6EmbsyRzHNryRLGRq3tkEHY6zEmEDUo5bKxfymM5F2X8o6qAFMMWYKMcrTd2tfBJeBu3G2bMiWrb",
  "key13": "2bYAFBRREaPgCoqr4jZQvXpGS4Y5ftbzDQqUYUFPKdZ3yj8jNdWUQiX8k9a5DLFkAVyTYSur95vCD8xPcPNxV6u",
  "key14": "4pvVdwBXbkR1NLq2ZryPy8kQqiNU93LyiwEkoKyz5PNoUsLTXD8nAGim2Nai7RHRGnRo7bQYcvQtiXWxXj8ZvfJj",
  "key15": "iBLAGGiJ6mx5rGUD1AZmJWpy6a61GeCbP1uLX3G9ow8FTAmR51LATN7NmV74RVGiUsd5xrkSyv9t1csvedDC9VV",
  "key16": "4fTF9QSrW5hPo921tZAz2LQtvfQnD2maG9nAzvM4yTrt992S6NBkTpRffPYZXbsLmVwFN1PCQM7PXpeU1tFqZcMS",
  "key17": "yTZfcJmUEuNqb1ve3zXpZgAHZhe1q3BEfcQReHV6eEBJ9NKGx6E2rXBxAcQZbH2EpiqD7pLn9ke7VB1SWUfwp3r",
  "key18": "2QeFrytjj5xnSw8v6y2s9mPgusVqAWs38oViwaq2fRb4mD2FfqSkkVMMvTGHb56NrRMbo7HNg1hDSUhKgktunrjD",
  "key19": "4EsuHuP6L3r2Nsmwd8xpeCKhakrLRPa1qbaVi8Diq5ytHfFyUfAqyXZZ8UTknthHPBDbjGseumJd3iMywHCEBo9h",
  "key20": "5SEhCqG1QcERvibkr8oHk2Wv81qD8H1tv8z5ngBpHUujh4BT8Zugm5Uss1kR8NRUG8QLaRBQKcSg2v8hD5rUfEEr",
  "key21": "5qtXUDC3Xik8rH3tu2JBg6qfinZWmxCj8AWseyHoVMGLZm4Hm2c2MLdDHNEMvnjZhrS5bJeFtWBxpkbaGs6uKhaB",
  "key22": "2TSjkV4toTN9PAY14mmX7mdQHvnu2yzpDoTJYcyNrLwouoSg8buLXoeqte9o3CkKryhcs8HTyfFconYZgEJzTiLF",
  "key23": "5gUBmYxJV9oou85L3dHHjnhMNqNWVAJakvewf4pdb8d26ZZNzVyyXj2VJ8Na7oJXA6KZe4FHQ4MfGsHQDZwp591i",
  "key24": "3cfPq5FmzTwouKY8meZfqK5UirNZGikNuPiEFR4tGSwheCSNESoP9SDXYpKEwcKZMuEFyp2m8NjB23Hm73ZMWJet",
  "key25": "2WDxhs5tFiB4844Qgzhy6DzFvJo8HQ3o7AQUawifQcSGEbXiGcxn8G4uwqG3d1REPcvvYXBNkB21MqKAX1xbnqL",
  "key26": "475yps79V4eVrUbPkn9ueWmuM8jNeKuGTZoEdMGx2qWu5gmm1W7xXypRo97MhV9kSXKRuPE4VRZPGR9ZpKQg6WyB",
  "key27": "FokT5vStiahwUrxiaZxuBHgpkkxmyFQSeyBQ4gcgSJbfVVhj8Emyjb2Z678pFdRhdUukMfuMJPcrenU1wYGh2YV",
  "key28": "5APxn19wzFXYEUBs3CKdVmnXTJtjmsZVbSmMq8hGGe51ojb44tAmuAYwRVufZrfURNtSW7rdJB6fenUDG31cp7CL",
  "key29": "3UmcgMHYPLEwkrRh2XvDKHVnfgDrUkwxfWbjKSbtMDSmDFZoguBFd5EFHMDWGsY4RaFgYMrqEsAFt6ruRGRKLDa4",
  "key30": "5ugKSVD1NU9K1f3PFvjGG5Nn7hAVsMAn4VGNBFG6Ky71ZDMSWLNJsenh1D1GZDRexXmhkLw2B8E9Fuf9DRkd34wE",
  "key31": "UP3L2tTqg2MpUdygKB1APswZfJkPC6K2QDQc6YnwrPatgJcUHveNX6nUHDr65aGH4JfpYjRXzaX5AcvYs3HTkdB",
  "key32": "3vokoZRh1aezmeFwpWkTGjxCDoRfiK2bnvShgmugz7AcC38yjm1ANhNzBuSyyp3qpwsb6seghUzMBjnPa82BMS4m",
  "key33": "39sepSPzZqcHzMAvaiyi5mAJ8HjrNDoxxmYPqS9CkdtrE1fpEzD4kMaenf4E4GYPYWQas65iTmyMkHgd4JWDDD9c",
  "key34": "5PRi6rrWA88nKz1bjR83P1uVVsS8xc95J9wrRPXEhNJcyN8kPQGVqNYx56Ri5BH68g9bRagC6RrmtYQrghFFywph",
  "key35": "3P2bD6k81e6dE6igspupPkC1yuGUi2iAjt7WzjvgmTRFZw5yUPgAwzw9t4u8RfnKh4J1GDR2CqjrCZQ6YpgRcezF",
  "key36": "4c9KhCW1PN8VZLq3pR24mPNjt66tLrkQXmjnQP753KB2ktoPfu4L8tcSbSn8psLCn29WmEQwFtC84F2MX8Gd1DuX",
  "key37": "2GgAYN13YXq89nZ9J4LGsPXkHJoSjKu5HvqWCjMASrbz2CxmjJbW2RkYNQ3u4DXuP1bhqHD9WM1X7eJgSovmQM4o",
  "key38": "2hKD14GiG7ju7vFeos7MBgHFmZivV71ZXmNJqhVm1vXUDAckZUyeZBZJg95jGWn7NJsWMSadmYVyJYmAACB2XAgD"
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
