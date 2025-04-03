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
    "2vsaKMjEoWpELv9XceE22C5ckdTSu54aXKqKd9r4KQL6xbQ1iGELVf38Q2PVHEZqnoxLFn6rqgQtoWPj4iGQgBHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2UCsJqWpdkaYahGxrzjWpeyntMuW8n9bY1p4epcSKyF1XmD2AxoabrkCS8q1uFdV9KucvKAFffHru9uNtZctC7",
  "key1": "Qz2E9FV6i7UXWbbHQ5ZecqAhuZV42M1GirY8qUUfDY4MPxHkTwPEyHP2ftPasMu3Beus1ZDRU5YbKxQRXegqAPf",
  "key2": "25uCS8KqZA7Zq2B2x4inAys4bdvt28JULWTXP1b9V36gMVFDELgUgYMenrXxZrCACm94nEMc8gvZ8vmZM3Y9SPck",
  "key3": "rkQqzYnWvAMGeMHSbiApoqezdmCqE9bSezVpB2uP3BAh8WaShquewvGHNZQUia5PtznCYUbcqsDMP5RAcFS6uGj",
  "key4": "2dX2ibwLbU3NmnvbCEGpeyBRgGbC1HGbpkyQBEmFXfYPUhfFUsj6KEe9yWGq63BwpkkSC6rv4spDFStU2XBJarq4",
  "key5": "47KMVxu5RagfSgMkPZANGkkGE6yYVygmeaJk6tC16rWD5K1ZBpuEeMkwz1xAbJ4Wzhg4D71rT7xAmK4ksA33tZ1K",
  "key6": "JgFQWhAkdzyPtQLZf98Hw3hhX4VXJ9Ar17dK2McDTbRZsdMzcfQL2kWkLns8yz64wB2sShDb4t5Bvnz755Wu2Xd",
  "key7": "4ZUaGijh5cN9W9SLF8NGQkCdAP3wZLkfEivjicmJWjSumWBzSUuXzsEbUv8eFKNVPxiWZrJu8kHNZzUp75yyaCdx",
  "key8": "5FpzyFFszmdQccNpMtCR4cmQYiSP7bD22dvBGbU72gLjwNLFnmdBixhArgf3MbNZgNPrdGPPwZxydUtkqehA796C",
  "key9": "2LKywk45ByNoLyrbfCM6JdNjqCReD8xVNuZnjiRnRm3MEcXYPWEhRE1jmhf4h7TYg9Hdf3yf2ugsJ2JGRdnr9cRo",
  "key10": "5YUmzam6vqCJLJ1DdviVv4PAsmRtr76dG3MMedZ9PfBTJeq1dS8s1yqP2Lnckv6utz5CibgzdE32dgAQNizxb7vV",
  "key11": "3ZDk18eNhsJyCxdvZqhecjFHijdb8RXgXjJhDWSAUaxXLVYs3BjcDVd2C7UXbV3ae464wnPKhyHHsn8iTuacRx4r",
  "key12": "4u9UEygwpHMomERPmjeJCAhPRBz5AXMgmEy7ukCwqA1rpjTmrr1porWQv1rdj5qPQutejZtMWnXLZsi8vqX9dAAM",
  "key13": "3Z11BLJWSNzKyGyKWoQijjgQCfMY8iigcQUr1p3vSymdeNwBS365DcAgT2ka1iJGeuvuya3txXyJKgnasUdjnTx3",
  "key14": "A8Z6QgcapPfV2dcKNJr8ve2tYzHymmCUP9W3ofe6sLYUzrEpyzGKQdSr36WNAxG2gGscQy74P338u3gCaowue6Y",
  "key15": "3L1TUD5aiHcYR4shfhjJ7PMSeqKt95UDtqXJuipxi9wpNXBhuT4PFMe3vnoZ71cf5zhs8ydnmoqwbcDJFqzwmSUd",
  "key16": "5gCCD9APEWaRQGRR26W9S3GLbZ7dtCR1YwVWHDASsjYtysYCRwU9wWzDQp5ChymrUxBTF3o6yLi5uqZPdAGg7gPM",
  "key17": "4C9oKyjNWurSfzNyMAhL2RMTwTcwBDN8Eovo2gracpCLr1hhQ4cBvf8K5qbwafoRDi8x2Hiobaeim6VbsnBm8Beo",
  "key18": "4aq4K2JyfSPggcKURcfUxbkr6mh8Br37KSdS6MEP15KgXA5eBT95FxqYJ6mzK7JTtyuKnjuW41UCsQY1disoEsCH",
  "key19": "YztirdH27kRN739ubwgQrdgsP4NLDqfgRk1S3ZEMrsYyr1B9YiGcJ375FRuuXpMCEDfxgUwz3Mi4qn6ch27hfuq",
  "key20": "2UY7KTiyxMxLkMCsb3WHUaMgp5CQxWb3BzvDZkpiz7ifTk6MRvvAh2gNnfcMfdXbNWdB2xvHWzVZKjvpfR4n666y",
  "key21": "4Eu3K1D7gaByG8EB5BK9ZCWF16X1gweykZRVHU8KMdmEoGKUq9fGdkVdxBzkp87deKtia9sEVvfrJcJKMCm6XB7n",
  "key22": "5swRxErf6BuHg5y5gm3DDk2ZarUgu1sdg5WaDZYXmtRMbqKxGWLCCYJK1BqzjEm12PFBpGreAjsWTr6cGT6m1uhu",
  "key23": "QWVadj78bAw8B2BTSkn87ah4VaL22dnU55RAMgYHLtqme9nVZbt2Jyj6kHy7ciKzSPCtEg9N4tCEmPUjKe2miHb",
  "key24": "5rKHZetTwANP39E1v8SHjd8PA5Ah87HeW6afMNRmfK8BDsdzrbS1p5ufthZbaVtVywi2CGaJPDBFxd8CbzNuTdZu",
  "key25": "5g1Qm2Fdbe4Zh1GrqB47ZkHwJrZexVX947M48HhrHNPv9ucEeR52UmFyHL2LuRNPfUBj27R9giritjh5QHKFof3J"
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
