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
    "38GG7bsZw1BZuQMAfWggajL4cFeYauSNnb567rpSkHmEs3HiFbgw7tegy7FsKAv3tuXz7cfbyzV1VMzkFcHxHHTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JYMnh44uuADCVvtgFixV8HmZY6BBAueKXPxB5diWsMEmjpW62X1RwBzctt3H2SdxT2CSpvHveacGhTAphPrYrF",
  "key1": "5HrKXMfLy1BrRHinYC5JCtb6mMxxGHnL5wtcdnUkjcgQiWHG9uj8Yo44HQqyybPpaxFsFQjsqbSDWRcL2XMS84LU",
  "key2": "Ek1HqgLtLXwjqm9DnXZrJ7EUJE5HySRZg28nmYDyvaJDVyQinjg9Ps5RxwaqzXetfqUxzGpSC7yJhyd9vNdMkwL",
  "key3": "3H3dWQX1V9qa1xapYBSQ774vTA6fsiqcA4FLswmzyv8N54RAAMA9oWCfhAQyGeMKyuBPQGCkFKmjo1rvHKk3bJZg",
  "key4": "38665omR1a5ahSi2MMAiVGpnPh2pBrE5hJDLLJiSbhPdT9CohaV9oWLceejnxjbKJFxDBEvwLGZnHaPWuPWZfLgS",
  "key5": "5RT56grqmPZVDeyjnriMRBWbgfLS7TgWJE2QWKqWdWtcgprRZCmPZFTYB5LaCzLKGcLPswmozR3GpguAYgZPJ8gK",
  "key6": "2dDJa2qQ9AcrAKexvh4sNKganmr6ezAaADV2oALG2r6H1RYHXGR9tqJo1c1KhAunbgKd8aE7qUwhV3BQ6PFLQJ8J",
  "key7": "43U4NdryZZCUBgwYjj8kpyUQYFRMa869pEfKQujSw5SC98JBJMwzD3PsKi4v3uQPYFZFVqiknoKjzmAGauo19fbf",
  "key8": "46jvXqNF8qXLYwX4vsug4kLt7uC7UAfBhvv4vvVdScBpzaatE4JALkFE5yYQifxpckSgxq6jC9Uvo2fXoio5qDcc",
  "key9": "3xhT7L2WFcjCXPyFaYoBF9mkzofqMHZxCtLeMCh8YtDCgcWQiDZRpuVZ2N2PiD86GtFeB4ALhonL6UQss4a7rJnx",
  "key10": "2VzkVyodXyZLBtcSzfGn7ynhhVhnsJudW96M52DAFYdqQrfjNFYWkJS9igKX5pbE1NhZ5iQMD7LZPfSiQZbMPLt6",
  "key11": "3afNwA8zZAWU8tjRAijhkzuSTxma2ByhCUpbPtgP5Dyg9F9ZZhPUCFceDGPN2UgEVD6jGze4YE3hHsVSirA6KoB9",
  "key12": "2EfSXEhtoLNjdmhLBXvKfvSiKpc6QnokJQJEjhTeisUDPDcHxQZhRxguBJVmZmCzD8K5XnafBPLmhTc3Sr8LLFxC",
  "key13": "2aSUG5DQBJNs5nSdf4g7gpZ1tcZfYwSDDnjKorUVQj2FoSi1Lv3fQEqK7zscGGA9EJoGsTnJ4oFqghnX4KQer1vK",
  "key14": "4TWgJXxkbFZpnU5Cjo2RQUGXTRaykWEJt3FMFS5ybFuk2whThhsxwcgcfJBboErxghKDBhC7T5BY1X1dksAJdSDd",
  "key15": "3wpCNtZkqmi2Zw7DsFREBKUj4xd96KajU2Qkqdgun6irx4EGqJ2sgqmEgBxLSCojLxJ4X9Kgsha4kM1eGuZUuy3E",
  "key16": "4ahcGd6bMN4cfWCoTfdLkLXumFtGFtz6bAUtNLzDNXNwvU5dE5pDVauR8Seq4iFXdrFG32Ezori16XitupisdXrx",
  "key17": "5EBDFvrHVm4ynHwcUyX4yRqHbh3J1RACuRaawp9kjXPewoYtkVSNu6SmxyQogZqbCjgXgsvASmZMgveEkWXkYye3",
  "key18": "5LbiN8HDPtukhzfgzxVCC8uuNxjM1DjXF7BSD8zK1E5HKTVcvx6NFdmPGTNdd1cEuT7CNV1Azu1hiWaycg2xmfcR",
  "key19": "5rDJ7bwoqYNFes4QjhHKQYPcnAQjXtMFQeHd4LiESq8mWbbmpLMukWdgmCMghMEHqo8mMRy4Yu6J3PYgJaTERatH",
  "key20": "4Z6YyxUAq9JF7W2bJ3Nbu5hj3qMpz3JNvC2xPAyH9hL8XVe6vU8s2gKGf8S81TLJDiVmeuKmC7Jt1vLjhjQqTWAZ",
  "key21": "2FRuAnz8zPgrmZDKmKEwcPPhFAHFuE1VLaNrLtCQB5vK1S3T9uqxHBD6if6PPFDGLSFHKAJViTKDPpNwf4Fsaitm",
  "key22": "63UrEvcf7EH98UQdi1GtgwvGXZMnfGcsR56kqasNdjdRdgFSnM8huspVUUVNmMP1t84vbXW3nrH8KanBz3p8usfg",
  "key23": "2qsrm6C1PCJCPYqrxdz8NHKeJbnWfPn7e9Bc5GDsfExMZ9rKaKVHukyBvxgDjc8EyAzRTt4oUM476Z78skDPmvMX",
  "key24": "4B72W5aSEVh6oozrRt3y8BafnctT8SCRoGJkTbECHzzgZWBs5h3CZH3iqvmbUtuCxDEDYFy8dLQ2syrP8rb5wjZh",
  "key25": "Dbk4tmBcvqvUcg18thicWynVCRrsVdDuhrJ4n8tC2jyph9XGXoHPrQTL4CcrjYUJWbJ4uSwSoejKZJ1tpeDmRnH",
  "key26": "2eBW9EWXtqAjYPjd26yTXTYFUhrVoy8qsissE9r9NWVPiTPNpX9x6qNf1vHWsxwQeSDjYJQGfa6jAMheYFXR4WmB",
  "key27": "2Zg2asCnFqq5EyZWZqPU3Cf1fEBUWJ9iBGpvyFNey7WNm6T9JJJirC9w3CNowzD997LgtM7ZS1Xe5Yhwb5FTsstL",
  "key28": "4vypZeuj2kCQqQj1P6pFjm3goN6MqhxkzxoYYSKHHBGXZw86aTWjdq8Kyets8xkD135cBmsdEumyafrpVc3cPxn5",
  "key29": "4XUEoMDJCoXdSBHoRp7qDLsUPdeVxshLLghHYTriq81Zf2FDHUNC3c3MuGhMpmJbBV5Mqte7otG5WAPerfSeiQFc",
  "key30": "3CSmsWYTwACgzrRAnjL6oRdxCsJd6mgmfrH6uAXaFmbUDJDW9A16GCxUUtYCHy74xuWdxfhaVyeRyFgXMFGHW6Fd",
  "key31": "B3S9G42NzZY2mf13biyuB96Mq3yFfGQ1eJZS1StauHrzzWqn556VZXaLx93vE6dyUufDvakHaMGzcNAZMtWuBAc",
  "key32": "5kfj5R3Aqc2S5fmJ7WEYJFtTn219d6qnHAfYBWBoABufaTejL6FozEAJ73xKLdfFnzWyBt8QVwXATYwJAmG85LUb",
  "key33": "fNriHYisYjJe7SvxBdcg4gv7D8enjJ22W3cn4EQs4W3K9h6bdAfshxpmtpNPx8DNdBndZbocwiccf2TLbP1dw6Z",
  "key34": "3uYFegq5t2Dap5XGMQWBnB9GhDAs8o7M3eQj3AtvfA3x7aat4s8HDz4GdSuj45J5EspvRhc8Co7fUPmascyxwvBn",
  "key35": "4QL8FY55nt58PcRX7iSvYiuQjynfHzATsNJQex5Q4ouzQYRcoSGKrE11uRe2o8i7cenACYV6DwcwGWkQXrxjbpzm",
  "key36": "iNxG4Xkus6viLrer2JrbZyEc98SNAHebjDiBVGZDSq38PfGK2aXVNsm4VJf4BKpGmCTvuRZQUiCa5yTZzWfK6Ap",
  "key37": "3oYFY52FFS3joEeRm4EWzxf6FQDLPpetAfmcuTSir8KmmfaCtBEgZbE3eUEN7oMqjENRnfXTDB2mmVuRViDzPkU8",
  "key38": "2fPfUQF3SKrscra2q7u8hA1K12PvsCNvobJNMAZJeacEcaER92qAqYMEd3UcjNJqMnE22t4Pbvy6PgebrcBzsJLt"
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
