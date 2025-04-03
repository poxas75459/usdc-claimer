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
    "31Y3hXJYeUiqyA3hmyNVQweRQkDNLjAeiUGjNFTp27es2DB14e4Ho8ebcsWqS92pQa8xs7cPCe5sKyx3APQVgGdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zL58VCso7MEcV63DYYAgf6m5msY6JY1dzwANkEJfgPUAUDc5JSSqzxxrc6WvSbd94Te7C9RrmTTgcrvbyZPUhK8",
  "key1": "UAH6y8fRZemBog2Y2WF2HbdrMtKkk52r8Z12Sh8sfg4qmoiSyybuhJuuZsVwY8om5RfDSauWRgqeG6QeTkLMpBZ",
  "key2": "2xmXqETquRAgtTJyUDf2ShR6HZjPeP9nezkooqCwy6JANGAZEK8ejS1Gcd3F5r9g6dP99TXg4TdqxCaALBLr8PVs",
  "key3": "2yyRFsspv2KwfAZ2vFrwTs9k4vBSJZ82K4Verdk5Bbv3V1ux16aZ1zJuwcc9Rp4jRdMbMpy3NjqWBdScPSKjCwta",
  "key4": "h4mgtn2YrzfMrg6nDbYdzQ9Xfq33oXJfuFRpaf2CsamSwvzkn2K5wwNM5NzNeci9PAMjEyZEn3AsVTCvdh1zgQA",
  "key5": "26N2hAUiiXa8TAZar8wqpbxM5J9KTx9h84QRxUPpncSqzvJnz8ZbT8NVSoWC79SRpCTJr6E1sgu3KwbiEev8QVbJ",
  "key6": "4oxnWDiiqnwjuLSVanFAZ4BCDV8Ev6DM889YGvNrW1GFV2SXT9PHC4F8WaucFcpwBDgmdH5URAVs8keez45woZBN",
  "key7": "3ZVTvxfmNy9MyquBYRHxs6k5mzs4jRkK5FpBWrX3amvKxQ9B55MoH3Awvk6RBuPKULgT2oMVSDh5dngN3nirfSN3",
  "key8": "3vXCwz8QV2L2Eymzrj2jxtEeQSgvv5RyVcwDU1iDuxeZXiyhqCK9zn65dJWynmqAaUjp9FTBXjrjogfY63UywNEZ",
  "key9": "5GzK8y5tdePV6eghbZF2JPT3JyVcfB5tKDjW7ahqwF2LGK9TkNE1HCaBm9H7AcbTABhxHuVZPHH8oN7RPve6Sc7A",
  "key10": "37QJWmDaxACGkQQGgRpTAqXKSNBr8kvswgpaSpQzJWinWtWj5gM3Sk7gSphMKriDEf15joMTwFqSb5yNdsKGHNck",
  "key11": "5P5FCExwDoFkgWpSCYf7kbKfnwzE1qctyrRzVCqg69hzDpa5iee6WavQQVaQC43yDYEZifzDyenzycDArQe7NHwb",
  "key12": "3NKCTJHTVz8rx4R14C63jYY9uZhqhoiuFn4kCmuBGnfxi1qvnvoorA5XkTYsiBUpdCkVyBYXxDHsZeNjQtVwhD5c",
  "key13": "48bSbNQidXuRH91oGHPvuJeQqPSP15z2QJkxNNeYEgNqDWNSn4fRb9imzwhf7d2cKPNtZFfqfJPFpwPWfX7MRSEk",
  "key14": "TgYZ2uHBZvPrmraoz4T2AFZz2ESvGXoBgAjwYfBk9WCCvqQXdHZVmYp97DzCuRABGJyuPjh6ofZwuKBvinKS6co",
  "key15": "5fVj89jWe1hPtaKwt18RRvJN2i1q7ZeCi1ZchJjQdymzMsamN1cLt2Wk8oLK2Y63WiHPqWVRGTyh5rcPDiQY1f8w",
  "key16": "4kgNc9WhGY2DWoJbyXRfw3rxdMgKirXaYUkAAT5VE3vjnSJQp6WE6tPr8VpXxdGf7FCRkayttx9D8NnmifYQjhmC",
  "key17": "32GCtK25hgpcG5Y84cJy1N4rAqU2H6e7FBU8rFR1SpKGuuKEhXwb1cXcCV7Jk7DniCoHF6hczQjXBSwmZ5MTgqFe",
  "key18": "b6GyLHCjsq4BvrVyMCxtRY1jiV9AtYx8LpiJe9k7yN31H9brYwzgQZSiczwrrdBpuECnZaWfSXzWXQ3vf7T3Z4Z",
  "key19": "2CYYJBm1xqFnKWXeQeWjZkTyuNKo4fJMhJCDN68ntc9BdfexpFyzosS6ojacy4jHeLAgnqHdiZKe8u6nfpD73V9Z",
  "key20": "5YdGVgtm8DxmEuxwaGwtLna2QxTtndcwrW5uT8y4Rd2aCfc8BWp2CrjrtCwxe6Liw1d5s1ocv5AQpuaHoENVTQv3",
  "key21": "2L7w2HWEaGVnKmwyELoNbrr7tCsyx6JcTC5frMmfD8LNqz14gXPy2pQJy7wfPp9SvW5CjZf8wYnzfcH7Snb5qTXM",
  "key22": "2qkUjcn5rfFHvrBZrau2Ua8ssAj1JsjxfL3B8KHEPwKN6YXGnpc9kv78SfN3iP1paaMd33mjjLvbLhZBF8nAcmWo",
  "key23": "4kbfLgWvT5B2Pd4QRPTevh5TB31y5NdRPLawjTDB8i3RcKQeBhKgyU4Y22AMjYzt47xvRgnmn1dzcKwNbLkSTKGq",
  "key24": "2rBCiW2yTSqmJ27DwyejXDg95bHwd6fiyfVCF6QgMrc6dekp8vzBp77e1RowofhAGRjiThdWXvA83Bt7ThwJnnoz",
  "key25": "4yYSe1UzGcez5YhpnPkYgQetYYghEeia5fBq1FnzikZrNgCJzyCVMjF2bHxY6Mysu3oXQQsX22brJVXFp1UrTMA1",
  "key26": "2m29xe9AqE1Pet3WPmrV3rLGk5AosKXaCX3yYrFqkE7BEoYDMUMuWeU24CyubwU5z1XoMja85ejj7E6GMn9FvRkh",
  "key27": "TXSRg2LSKoz2n7j1tJr5tobQ6HKDBevCdcJNLVd4w6MFbVWyWCa2592T38mdpAM6JSDe3iBnRU5gGL86MmMHbxD",
  "key28": "2yTkDxwVGuAs1NACi5dt4j4yphrxJADKcDxPaBWPr7Y8JvBcxFqEsDmGwoUPeWnR3RMZZFYxE3NpgFhUzq3LYY2m",
  "key29": "3uD9q5Jd17kxmM4uefnq1CQXi99BLb1rbjyvUWdDzt2HWFfEp4rLVJR738tTZYvuADJ2L6WSTwKPtDbFZUtd8PbV",
  "key30": "3bcotoEJXB3uxFdBDURjbAF3HkphBb9CPGNMxScPPYenLWBVbqNnXPdw1TXC4YHAQUKbL1hhQSMGahdtpcQPjW2U",
  "key31": "2GSTgTPFFkuUoK2a61dVtCRLAHZgGYsHU4ebcJeZoJHTBD7ZVKu3mKN3hVwhHx9YdE46uBVtPfCESpUVLMw8UEjR",
  "key32": "Rqq3WR5tAijzkUAzefdfsK2KRbHMDgePsF5hLDhNsvYfHBBvRwVGCiMfWi7y8DMBXgNAxJmN5C3if8ZTo3LWvnA",
  "key33": "2kg5UqZgTPrBucGDxjrQefGSHkULLe8q7YWonZ8rsUSNKQA93WoQSLmrySsrdTj1Dk5ww69mn6ap6myiF7JMW2gD",
  "key34": "56qsxexdEn2oZ7cRcFd72zJ5L3n6zJKuGjkAymiUxZvNYvXmb3RZskFb6hHSQF7UYakLCkBsa1kTAF6vTk7atjTM",
  "key35": "5LmkDg19PtyMEdTw8izJeNZFZNiLkitvB4fr6N5oLLnptgM4uBVxxumyHEBPMqYBq41ZHzMNVzvRLaDXs4uPWCbm",
  "key36": "3P4hg4bejkqJj4XVstqbXvGLR4koFMPPJ8XdR5465ctGrKmb9P9hB4Y3wSMAvADr4BuVWQwR8LHnqzDJMLFPrU1e",
  "key37": "4kdLeorAQfgWPpwxppqyxjkUEPbGzgPKMnhi9tzMeSfFGKVqeRYxQ4QiM5XbnYdLmnaRDvxFfU47uVQukDCRgohn",
  "key38": "3AvoPX991PnJzYSnp1PAfLtLHzwTHoUUn8GTX65gqdqcdcCwkXacxGyGF2a1YV3S9anfuJD6AKqeMESqRfTUexgy",
  "key39": "5XEdV4WC1kUtA7rVAtMMM5K8iv3D47jwCqqXs6cJPN2j11PjwJL7RfYnEnZ7nwe78KgXv4x4wfFvo2mvQPpEHa2S",
  "key40": "7Wa8GhdZEScBbTZM9oKu7T1Q2gQQQ5jPn31UJ2HAFe7PRUNCc2yMktzJYjWcn56qHYtGf2as2W3usW3hL6ZEcWj",
  "key41": "5hmX45URcMKuUdrq1CCS5MMUnSqZAZL247P1Wm2BYQQXQSwqTPo63hWMQU586WNACoTUQJEnhtM96UzamkUy4U2y",
  "key42": "4J99RJHDkAD17pvf9fvdWco5k11thqSvobihGzgy2T7Yp5sR4NMqvJ9ed7h6oLye3ZzhPrcvuRzYuAm753hzn4D",
  "key43": "2ToDJGPDx7XXtPUySMot25tfU7WBFLU3k17rKb8aAAqps7yX4sa5WP2Zbq45ySAHPCGivDSBf7DPfuL7MvsnYAob"
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
