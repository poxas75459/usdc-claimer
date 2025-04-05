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
    "541oUSMifnbt2Qi1fpmP5fF4kAfx8Jm22qPR35VCteRGitwr6hdkDGxn6LxzoDRt42z2ifzQR2LK5reqS5B899p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EaRoDWFA4UKdV9y7gDTxkdtWA2VidwLQbmMPKikhgL9CVeTnY1mwd9rFocysS3SXsy314s3cN8njAik1fjiw9kM",
  "key1": "4ecKFUPCqBwf5SCKUZKmbJhvJmkm95stpQfKVBdagdKmkT28dyijWqFCRXLGtpQ1voM8tNTHNBhLZJQoNtgusawJ",
  "key2": "5aBR3RtyXSQcSgSQJwPcH35dQW55pcrHgmvLKvNtndau8Rz2dxCxQA3bNRyDBo6zSL4qDhMx6V3NomefTbAY8144",
  "key3": "3MzrwEWQjGzRm3yMBmAPMWg242veFf9jguUBUtVCPBxQkQoW89rVMHWd9Nhd6dqEmqpxN1xi2X7DAiz11swBj5CA",
  "key4": "49BHgidb9USd1YYEu5Snnxui6TBWXV1gTnPAKSiGX3hZWu16dTeQPrbY81ZAHkDWzXW93RHr74z877XmNZFxmWRU",
  "key5": "524b2Uu7kUg67MEW1xraCxKHWm34yHHzT1RzssJYJbvXG7WBU8CwcMszzhsKaBD5sLsTHXp9D9mp2QjsivZhhonb",
  "key6": "2s4t1TzmYaaJ8TdqJ4AdUHRrWBcvW6K1RqU1vwYhe95DuGTYx52hT8axayxKNgTj9MCSFe76tzgozEWfVjhMaTTk",
  "key7": "5q3t58Tw7tqxkzTNFDc6VubEbV7ZRfjWX42YVYqwCGbJsfWeJfo6Bvfgo1vTFiWnY9Dn6CPB8quavjaRh63vH1J9",
  "key8": "1ANZ4igYWD6MHNJmXGamnPa5DvSzY94V8BhmQjj7bGDDBSzdDZjzRQfsrN9pL7oodo4S35tQWemvzgBoegVC36A",
  "key9": "2DYZQKCnFnPMXRr3UmjPoZ634BdtxsrQ3fkfk44SGmCuvPuJKYUDbdGHR6gKkvxqNsifYUpKonebK6unu978SUkZ",
  "key10": "qPmBmKDRNpzW4yJFnNLZNbAtWh7Z5atqbnmmF5A14L6jPYmPXVhWM5V29J1F1rs1nPYdKquLsvU7CUnyJYZ3ht7",
  "key11": "5y6tsoNikk8JoRZLi8d4agHbHbdeFXddMZfcFRQAJxLoGcKjW59DfujjXHRFyxcz64jR3gdT2Zazpir1X2oPQHnk",
  "key12": "2yjdZRXum5SRzuxWL2yfzywSMZ7mP1v1W42CsC3i1Lu3mtUdA9gN9LnGk5xkXTSJZbtgETgSSNQ5xmvypg2su7qX",
  "key13": "2bJpz2a9GYbHxVDmKugF5kp5rxT5G7Xb6VcwAxyFb4L93NLvCJoYRXavEbzYNfiUEad7j2iuZbYz9qA6LB89s59j",
  "key14": "62r1MzZfxvytQuNp9TRCdNgWemN12Poc7rKHoatnUBSQ86rs3GNEtpXiR7qicHCYWWrue8ouSvWYGrmN1GBoP3XH",
  "key15": "2qMbBoszCpU3MsPmmNLZ4EZWqnQgiU5C37qGpPp3dXK5w52q6YjPXKQJYZpkJjWqhHfJftPxaje2uKH17BpCn9gT",
  "key16": "5JyXhmnXVpZC1Ss2X3U7au47Jduceji4HU5FQMspgtaPte17Dmockx529QUBtGgdWBChCBFyPka9vpQQmeFqZzUJ",
  "key17": "5W6X95CCzKKPYAs8shp8F5LbAwcQvAWG1p4LsxTcdbPBbhBmPUnKJ2r63jSupTwcAHvGyr2gpmWnu4Pqy627LknQ",
  "key18": "U1FoAs9RSJWpcxAhCUh71QSuy21Vb8BwaTmJsuCEo3mgtxEAsDEAF4kNpDJAVVZLtGMuFporZRPFu7r6jH4BKq1",
  "key19": "21rw8PKLmyjngz3eFFjQpq9kZYrr3VhAGQTLX7hMkCMaoxoKZYsf1xfrXFVe3V3ZnQkf9guCYojerLw8Bw6JCJJa",
  "key20": "4qbjhz1kcoq4kEjVsBTW9ACQrkwZcVb73r9LfZh1kcCaRCUwCNfEevhnp2faboqqiWSf6rjZbMBbVBxWcUv6fbBx",
  "key21": "3dDdSyE5kkBdoeAYbXtH8FqU6jHg5ACVSopHTx1vuCejkYT2fgdScHPPsegyUS9DMiVNpVxsYsqc9gXCMk4ta1Cy",
  "key22": "29QrcF8b3FEyxCopUaEA8d7oo8erPW5SZawTMRiKCA7iqaxoSXd98rthTQFXPEJuy9bkDs5ns4PNyU2BoNJzfUUA",
  "key23": "4sMgFFR1VQPrk4ef5hhpuy8kZU1Xrwm6LzYiyt4BmvUG1xkrDsqXYrARuk8431KC2hEdZDA2MBKX1ZzhAH7EJvFx",
  "key24": "2WeKXveGSMFa2j8wpkTXU6J2BP3HybiMxEiUz8RGNg5b5NbFgd8V5utEswNWM2FmYnjBnfa3hqizHDWYx25qsAX2",
  "key25": "XyNXmowipKmCkQmJSLbwQFkx4zcuiVTB9poCXtzuj89oguHRpHWbYoEKUmAt8oMerwmVu1otW4CbDPXke56hCJe",
  "key26": "4z88MdUEiWPGsUgm9oqvaD4wNeJYHH4hQ4jD4Pc2Q5m1BjArwrJvehUM2NeYzzb6eiwa7DA2XxJaeenUr32NEpHW",
  "key27": "ga1eWP8SwVasKDsyvxZ484zHBGcJtDtShNtDpHnyLpqdHN8hEjJm2AWeYq6mQR3vWSdgehwMBDznhWdbXT347pj",
  "key28": "2EoZWZ2z5cWxNFFDsWVkzh4UVSNcgxMEqDwgcYKGQPDuQfHbnm54a5S5ZiBnhfT6M6pgCpurdYZ1YAUwjFrByXEc",
  "key29": "63K6VtDGeSN2fP2yjqcDWvhC1mfE7yqHUv7C1B2ePzadvLWWhWdip12F3JgqPkHkEbRugkdZQg9QRSoiTs5Hyyg4",
  "key30": "3zgWVkJDteDhc8L3CQxpC9AF3V4QCvrH4pcNfz3kzvDh1MAMoHUrPqt9cYpCzm6DEe2qTPqxeT6ZnRqoACCSDkrR",
  "key31": "2ARLsAqhB4MQKC6PmAWgPHPHSKL7r6Yuqe4cpKbzJxvGNGmonhNXyfBmLv5YDwpv4h7vmg95nUWSm3Dt9ViWDRTL",
  "key32": "B7R7kdEwFdYfrEotgoj9F3KoGto9JigQTWXPq2yKQaH2oRZZ5E6iRvhh5XZjyfWtgRw5DTjeEsvK8XRejzt1iKk",
  "key33": "4FR6xAePkHmvFyhChYe788bqYfhydAWzV6a1qnrJWkz8BJY8GYiVgPRp5qUSqrTPHUd3J87nTvQ3hVzGCmk73syp",
  "key34": "3yTMDbkX6nz1yYZovkNJbfdhtTZWyFur5ptR2rFjRGQNWK1xVvR8jqwgq5Cgkj8WdvrfLuWgiqWGhpcYaNvzzq86",
  "key35": "25qvPK6HpK2cjNoEaT3vVN9YysdHHZMujUoNo8eAFQSooPfDzeuN6qr88A9YE5NCyYWQi1CBWE2eGhmDecrZ2nna",
  "key36": "hdbDJbw6wUeVVYVxuxrjixCLCKHT2u3SJFCbzSFsR3g9CwhAhNXbsXfTyhsUi25Eu1Levgbw57hSZ916FW7r6fW"
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
