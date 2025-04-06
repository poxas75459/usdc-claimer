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
    "5U34N9KLhRd4PDbTf8pQQT1EBdpDVAhkKqaHqoN41zBiwyGi6pfueBsXWFZrQimNuLDtsD1zWhfLuLK7jsuCT3mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7iTUdBr63YokSjThXRpw7kZEDRdUuVpESw6zNvzqgWi5EUU1h5DWq6pyaqRSXc1MZWgUdsjQos5cDGRr7QakhA",
  "key1": "6TW2b88VG83eSpqAqC8STaA5wUpaC7LfiqEPUG9gzqHtZeGtLBCfhbnybsPReyL1mT866BaTfB6BQvbWHNkgKac",
  "key2": "3CECr2CGpypKRVZhP69U8vxE6mVf7xUtqKKKmvniCJUrHkqP9494ngShbhv4qmovsmRNUetzY3VcPAZhJLrU39nr",
  "key3": "dq1rRANWbZZaCgA6tj3bNw3LUnDMXLphZWkfiLmNb41SLSsJFdLS6L2Kwk39kpfs1Tnc9jnAdMfjNKP6uxYi8aD",
  "key4": "4WMHDNTraxZv3nrhR2XWnotwpVwB127VgFYbUCPa1CobSitcEv7tN6EookCP3CFnh2D3TxWM9QCFiyUKRRNHWUEu",
  "key5": "2GwYoqcf67tkSLpF554nLTgSQCTxFdS35QemqjJWUCqMehPMw4eHTD6dLnpJ3Y1mSP7q687DGcwTGcnHEFbNurAq",
  "key6": "X1Z2CcAh5913BnamyNPUN7f1RPGokmCtSiJGCXcr9Ayjc7u2fMjiJbiR4wRhgXqJZADekFhHLe5WbsGpvBtgrXt",
  "key7": "271mLzUEaTDegBjSTqLz5Pf9hwmNrYrCKLFCHW6Sczewgf3rA1iekfE4UPtRDdcggvG14NWGwy2667cFYK28TLWL",
  "key8": "25tffFDqctKngpzLiku52te1fB7HrJi1gwZD8tDWffy3THhF9n32JBQh9kcawHRPHt8U11AiopfYZ5MQa3i77SDJ",
  "key9": "G2SBEiW1Ch5knwCdGx4ktu3KuZ2Zfpw6aXxr4ncv4NUu4WBRhuPxtrHikoeh9tgGYHheTRXRAj6WhFGyuyUHZSZ",
  "key10": "4UBTaN9zuzLLERZor5hHMnv7FMN28Lk6HXWpaYThPKoVfp8WVhaYBK5SGig7pAAoqQ2DNDSfDUdP8PDNAbJ44F4x",
  "key11": "jq6Ut8vcsVAaM5veF3eBPetwFxWj9ADdr6QiPpe4Dk45qHWCEepTmdz4TBDzrAQpQbWXyddFwG2K9aWXAxjCo9c",
  "key12": "4VygUZFWXu34DniphkdZB9xJbW4LB9vjFgHiQxb1d2QCCWmMYUMpfucogrothvnsf2AJ2PwFixsJ8TA2JMq7oGGj",
  "key13": "3Tqd3DSKD2xn7i4bFkw4kxxMwT7Y69BY7AcrhzqDdXCX6hyBXiKURWd3HsQb7mjdpiWdBC22DyEGy9JdDaJRKuVS",
  "key14": "4PmV9gy1yhycngmy37uHD35rpfEECk4WLm3snj2nnKUieUMfsSCy5jKck7kSNMUCAfwr2UVgpM5Cnf6PMaUCeDt5",
  "key15": "523gBpX4Y5fay2eBAGhV39QgX6zMvrsohsUMuQ6ABFd4gNtWVAR87TjgBt8t9RngsAKR7qAkSkh1hkKRTFAi9Wgw",
  "key16": "41uXBJVDnA1m8T6JAJiVx35L4aVtkPAWYzPDq6AmCJvsf4v3b4HvNuqXbw7ia34givXgvNdV3dXNpo7BaFRFaqhp",
  "key17": "5TFFMfGxzSFBdhmZk8GJwzkPRBZxrk25Lkn9jXnhfYZJubmiD9AtEDKzr1RgCmF6qzSMoDyrP68GMnpVMs8KDZUt",
  "key18": "5EiHQp3KAp1NzjDU5LWapAq2TJnxowfTVD9fPVoc4grAF9rH5fERjpwyttMDWvRMK6hyv95F3Vx5xcRo4vjkZd3U",
  "key19": "HmjVHwPBi3yeMT3SqLGYfivLa9TUVNBSD6xa39kakm5gEmQHRDa85TjwkohPiPEhM3gPwPVyMTq5gx3juEorjQB",
  "key20": "WLNBPtDaQsts3VufsQLkK5ckLUVBu499PpZR9NS4gXuzRxo3s72Lg29YQijy6rZG2jW1gpBAaKF2aPgWSRY8drX",
  "key21": "4E3fLndPctEdPaCufiDMmrju1jYkxKh1rsDcrxEs2geS94SHuQsYRvUV66kzGGkJD1gdd3ZQwvC3NX87KQhsVFv4",
  "key22": "3Q5rjgUkDmqu66ZVWLkLxFi37ARxzyogkCHzUHmMSMDzgJe5zKM1xHX4aNcsN1PTj6QvFLMSwP4wrp34LCbLU3xv",
  "key23": "Nyrfj8qEfZNUeHKVeUjb9tGFsUaKtLPPx6ixv5mpt2DXjJYuYfA5CxPZbcvHF4Q1JVSHanT1cWRDbTpgTJqWGac",
  "key24": "4MfXffjNxyCeHr8q6NvgBQKjVJimmXnoZy5Z7LDboUPfQxryNzHBNbaV6TG2bUrB9eW1JsSFTkDPVGZLqdRL7WDq",
  "key25": "5umj2BDVMQ2TuoPGTuEPynt7jqxKrZCUqjF62fsWkGYSNJwagFKuybGcSyWcSkBrVsq33biQCMUSsUjHpoHCGdxQ",
  "key26": "VM4rqZKHGEjgMzVrK3GEjCLXux3Ze15p94uYuToXdgKYMRLDx1uTDxL6xrmkfNzd9bZHXP8e4dYiBMcwNYrfTaV",
  "key27": "57w6t498KQNymasm6C15PqxDFph6qRG2NwW53AGRyKTTsrV4TK86MBecz9SxR6RMeJgLLe9trk9mVQVLepa4DdkJ",
  "key28": "2JFCzAT4ExtDRXu8MfaDw6rrTke2jxFQ3CXvPjL5gzVJBkZL1QpmzJeKn7Y5ymT943vMCQtjhneEfPYmkMWvTKMq",
  "key29": "4ECKxWtYdbVSnEEmtzHhmhrwnZAYr8L4nGc5N9LkmwF27jsRRu88mZkxjbBRWdN3YWbE1cQwrJZWFtJNb5Q9GQPG",
  "key30": "33pzLE232p4GtNxcMUpgLdLKwwgVQncDmzK77WWo2fkS6VxV8pcQZGt5H7qRJw1AXdjBVjK5KzBRPE22ikYy9dUD",
  "key31": "3MUb6PMcP4ySsea1ARsQ6ZmKYUjGfPUQLKVPmg2i56SH8P33JtZMg53MqCQ9MvPMr2CC18dLaoQb5BxDYN7cLKHG",
  "key32": "2Vd5Hq2fqSYiqG858fHLcGGqCyMaDd5fFhgf3BN5ryFYpWcVAperV2XnDuXbnNarD8Huhxe2r3BieFsc5Ke8wPfX",
  "key33": "3AxbmNkt7s8weC7RTCFfhmLtEVv3yhryZKm8fmma3x5hVoPeDEGPbZVgNJqQsz3sihUsECKhqaa9ULHJ7K4JPZCE",
  "key34": "2kVZpzGkX8PfjocFiNYvRUWSwJ3j3rypx5PJC2BJebSzxJf8pfijr8mzUaBMV17iiyA493zB3t9NuirDG1EpJZM2",
  "key35": "g6JM8ps7GZJdnpgyEKi1VVaa6GCZRacNd291ygHXho55h95D87W5sVxTJAZAv4HTYMiNLmQDKeqLu3nQmg6Ajkt",
  "key36": "4efpCT9YCHaJiMMfX3yHxxjyANw5SoB3JEVxjj9sTKagj4KCmekBmLkscQxT2LbmpWBQDiXS63wyv75mMh8vVxjo",
  "key37": "3eFfJ9VCpxK3eHHXoHyPXk9WPgZB8dGTuhNmKb4TbshNnH4q3z9kcV9M8Jrm483v2orTeYEZixKe16Eq61bRcBMx",
  "key38": "N4vKsguwynfPXgQQaxDNWPzmxhpPa1GYwtyPigj7rycFYidyh3CERRmYMMge1aZffWwX61DpNvsGde15uY9XvdN",
  "key39": "4NuGkjJi9qBELfpG4UCy1ndJmKpkk5anU8UYZgxb5kmDug2e5ioHbMdTyPtA5Tif62Ad3rE8py2rTK83VkaXR6r4",
  "key40": "2Cr9LzbBkCRaxkv4uC8Pwji8Ay9MRVvmTSw8J3NJzr9SFxb9tBp331oRg44pVJnVVQ3rTUdJfxbay7EH7utiSNat",
  "key41": "5qpZpemCGoSJGptpVau6KqU5og922axe93CxLiHKWe2YGVoQ4i9aKXn59KmtcUsZNbLwpnaCwUDkrTXdTX7bvTeg",
  "key42": "cC77LDPCTjmnmj7ushGNymzZQbE2ynK38cLGCFZMWkQHa9dYs7HrDC7xPnGa6icSJPPkL2CtrYMzWo8LRMQqxmZ",
  "key43": "59ZTDGiMT4CAs7ir9prfua9UQMwbbmNwHNvGqo7JoRAr65rtNmSumz9xz8c3zEJY3FH2dZ4SCMWk5iV1P88GeuY5",
  "key44": "5HFmvVQQMsFv7omUYmniaBcwaVQj4ieU6JYrxn43USSN1WDqVniCvKW7R45iWAZ9Xf3CEFkUrnXkC2FMsVSUGHAR"
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
