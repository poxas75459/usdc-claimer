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
    "4sr2rPS3vjHC9L3C6i4TvETYnDu12efagfVDiU7Uuo84ymJ1mHmG7ePQzzog5y219PaGwCbU53JoJAEeqNxpfhgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCwbzFRwP11YikFuZusBAeHfzbeWycs3a2HYryixq1AdQDNzrfhz4z3S6N8rUN1DtQPKkeVBU7k6VpSbwA978ut",
  "key1": "tS7j8hMqCAZQb7EkNF2WbU5ugGqBYkGW7pKTtw5PFhgNEmsJ95rLi7yzBmSpWRqQyUy1EogFHUNShxBQMGawRmR",
  "key2": "32ycmhGXa2nZhEBFsKa3YRQEuCjvChF11rS53Pa4dz264BRFSsrEJNEAShP3gFY7qmj6imQhw4q66f3kzNm42V6",
  "key3": "5YG5eNuovQcXzJgza6GvxpJhXoepnm8BVP4rLVzkK6HJNcDgoTM6baxLBKznQPq7paLYD38gq3suLhA8j1NpT7mE",
  "key4": "4SnweAoppWVMnFftWe9WmUboioUvcXZRM1HGRJA84khW3c6DcqUuYxpGYWj1xet92upH8imMHYQ3ctef2u67axPT",
  "key5": "2oUfsGmswJBcpnzpJcWicqoPFuzeioA2AmGGCY58WfcnnZorLkekXLCbw3kyngJwxGQbd35NdJq7hMU1Pnnm8Zyw",
  "key6": "3MnGgyhi7qGqSv8Xv8XsozbkoU2gJo3fXxmGQHh8TBG17nUTgejRJfUKs4jBNCm2mMB6VmdN11rKbRTT7PhKxk4B",
  "key7": "3tSJ2pKPpdHctnRxVp7hZVdm7fVqPoMC4zrVR9TfePCAaWp1iv4UPrGkhfyYhBRuzorVs5uad1JB86GkUCdbQRnK",
  "key8": "MVg5QA9rdNLVeBCBH5wBECYcoKtQxzBEFuuDrisGyFYqwQmQKqMCT4kjy2t7VivDS3giF3qG9STzEgeNtwwY5JH",
  "key9": "4RCo8tj8ENjVrUxdc1msnSJNNYJuSvxMxGKiGjcNED7wUnHC8CiiCcPbs9vf5qFAQGJQVfMFLaRuLkFxxYFuhY5E",
  "key10": "56f7mXaKsSz45DY5qWMJzrT2ibLxmV9uzVhaTqhRKhnpqYEZp2ojvTLXf3xA4xu2HYLAMx2aAABgTUFf2w3mawji",
  "key11": "3XGY82sCJcfip4ybEbfz9rZXvi4GTb7TFnumS5iR1nxg9XQNoMeegE2JYpqjxwXiYr8jc1BVG1CS3nMNQxpHgTC",
  "key12": "3FzYYcqbQrPE8P1WCvi5Nv1xUJohpZdX931qrjtmUjXUo2h9Knyzx78vP9kisVLnn1fwKACGPS7mUNRqcYjBZ57C",
  "key13": "45CCaW41Jsv5ZgC81Na7fKJiREbVsz7hgwJJpD11jRhb73FyAjkffedcLcHrmSqhRf2ykrCbiFjraXaiiMcGXcJw",
  "key14": "3yHdjhUrodFcMUMaqEq8hStra2hCoQnFojxcYdzQfwCDxGMj1oeT2rwXcckXS6ZpPq4GxLd84thwursKQYrMfWNs",
  "key15": "56ErmGLsHL8kuJphMvhqS8okASsoTHVmM63KsYEvvZQ6PEZ5himFupSrM7ABGSr4GRZknr1qM88JprN5ktjt2d3P",
  "key16": "CdSshWARCtSaA6UiPyhXCxg9WmJ2C8RAy3QKWp4YVG19cMuXMecbkZj9reV4eC4PiAeU5JJVoh6YPj4mLxVkUvs",
  "key17": "5WRZRz8iWXPRM3Ag5S4uDaupiwQzMe2p8cfQXP1GaCSZ5LRJ82dAFQrnzwSFzihYqcEQNixAWUkKznR5ZwWGdW1U",
  "key18": "517snWKTo7Bja62hvJd6VuS7Nuwgyj8U2QCeRLrmahVym1gEomH2zNqou5Zmcifm4aHoHhKvCPqs7U3KTo3mSfri",
  "key19": "58cgEzGCqn47p8MVpYxfo13KqnDMoNJTKhuLPnGRcWwZYYq9FFzeUUKGvzWevZMhvB7ojA58Ezzf21dkkXrzF2TZ",
  "key20": "5cqWg2htuiG9Kna8KRHK78vWUnaZVJbpLTr3dt6Tjq4Qw6pwRFV96AKomvFHcJvbi9JYjFbwVLo9tpbodSnEuWcx",
  "key21": "5zFgL5SFPAkahMa8jkz3ZwSCaMP4qbLuQkeSchaVuR8FdrVEnwsmdEcYpZANonw8Qujuw8ijEBQEYgfrPReeB6qe",
  "key22": "5rv2KTciJ1aaJUE6jWVyQmqvVbuvR8TJBpWmUcd5wpztsFqDry4M4q6CF9ZAg2w8w7JiQ68xKJ81c88KvSRkyLt1",
  "key23": "5x3Gre3nPPzTBimR1ygRuEQUDcv2URcD4xywZA6JJHMv4AzkNuDFw9ksjqoHyK8z7Uqsr2FucSgTqHe9SCneLoaf",
  "key24": "rY7ZufQ14vX71aeKTEsoHRM5SWmLQvusv5CdomRLBLcpKP82iSt7BNm3HAhbWbtmSGpZsSk3uT1TQc3nhgeuxBK",
  "key25": "3sefJkfsXu6y4yBRoHRmkMAbfnUuyXgWVZEMDtNp6sj8D7hn4abRLvu2Ae8TJnkVMGqbdJz3x6CgX6K7KRqJ4cCQ",
  "key26": "4UmiHKXoUJ9bZJnNVKnSqyMeinEw8XbW16VfWy7YwJw56GUDxam7n85NcenXfafjSykisnZE9UE5gZ3jbV58GhFW",
  "key27": "cCkCcNteq1pP94nac1UySMjHieDX2BLKtST4wC7Ldfd7biHYSDH6NsnmLGqJVCRrpwUV1FxTjcAcYA6SZNxUXCT",
  "key28": "229DVS2rsBSVxxp1nCUpQFWwYgz4nPX8D8dDjJVHshrKfoNTnJKSQWzCjqPSswPBaSA3mHvA5yBT5rHUDvtp3VGK",
  "key29": "4fhXPCcN1XLPAy8nfxawhsLzJ8ww7sVCCWG9hARecfpHTbSjoZAeoBQjF4smNQDKdh3KESvKWgTxnG8cHK9bYXyJ",
  "key30": "3CbD4H2SN6YcmTaQKvmEXXRHyTSLoqPwLnK6fYiNG88va1b149rBVGXpb37QqLeBkGXJakejyvToP939Ct5NHWeS",
  "key31": "2SttGHA2ETT3LjWr6rznikgxZFoDrMoskt7bh9VDQvXiPZFS33cnFEVLPV1FBTFnGu85zh3pjXbWYbZBFD189NzA",
  "key32": "4KddL4jVNcqRkdgPFC4eFuGnxg2fVMzUjP87mchjDt2Uy8C1cd6UC2YdkHnXnK3yDNPB6tNp8b8XQrqDe5sp9TWp",
  "key33": "GewK2QUkFKsWQaBheCJ9KukGQfSY6m5VqUF5xVEbPqdu5phHq7DeeY8CRyNeuvBHtevWHbcDZiabQBMcywTchHJ",
  "key34": "2g6C1784wFt47cxoLkbiMi4sjzxhTXJoDuNYvtYRK1Wm7AgBPFMV4bUi189izR2CKP5KPPfugavVt1XvR63MoiU8",
  "key35": "2w6j6Qr6m12Ux31MitjFQtoaRFkxzNp9wKEMSG2it7qbaBY4c5VSyzmQE69uhRs33dkoH4Ush6qvXJqc8dSyoXyc",
  "key36": "3N7hdj9876sHftGkgzXcMtuGRnyi3cexrQWVeBMUtrirS37wVCEvCw4kY1MPB8kCkh6PVPKSwtibxnmVscUpcjoa",
  "key37": "2xBrveSfd4BYGCn2Z7EvzM98YwDkV6jmbvdM6aAKcNg6ULEtU8QW1vjYu55bEkeuhMiH2u8Eumhs5qBsURkARzmN",
  "key38": "2Vmfpn5BZ74th4FpTR1hdWkkkheKRg28xehRorSHyZQJF4iTgqtUH61NS9Hk4uYaA75w76dpATii2BFx5ybAt2Bs",
  "key39": "SKGqn7eNFeXY4sABJQbiokJJmVAbeTCo9teJmTjdKyrtxXFkvCULjhH4GAMtTWQ4VPGxyivr3fAfiKJS9Zkbitp",
  "key40": "4zvNV8r1TiwK32DSK5UQWhdQKPZuUpNMiXN4494Ft2DNck4mK2k8s2grc8C1pvmRWyLgSdqjruaQt5a7qYhJCwW2"
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
