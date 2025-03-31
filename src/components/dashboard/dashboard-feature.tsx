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
    "26UDFsx1UyRvoektDjbxKySWLXQ1usSUBL5Me1GD13rr6pYrHeVzMGo4CHCckWTaYW3PRVgVE6uNoru8t5knAkYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JpQQrE1UD6grxtcUo6PCiCMSRp9Dhbb4JKhrgAcgzfuqMLyyhezJxWn9mHuwDzjdUdhgSt1heERHiGB6TsZ5Jo",
  "key1": "58cBfc5vmR8FbdSGpt2iQHEWrjgd9e5MudtXPBCxSepFjH2RpMLpf8Qm2zkwYPSzpeEULbYKxcPDF5v3yyU9dtvm",
  "key2": "32AQWackRCtCmA314csgRst6Lb5jRFc7er2kGSbpzKtFSCquV1GkhpcdWPG5yM2tWgPxTKYASSyWzPuQmJuNQQe5",
  "key3": "5Vur1UVBFDfRPokCqBgVo4xsc1E37CVNoXzMRyMBAXoC44n2hH3TAFTWVj3y1AyhAUtn4Tne9DQyCbR1ZQUGLH3K",
  "key4": "3odLAmkKjgg5LGUuSmz4vSY9gEx99mvEiu5B5PFKz3SrFJWZ2BggbNiq9AETKDd7NzYFH9AzqXHpLEjPQGLi1eiQ",
  "key5": "2VnMQ8Qx2yY5PKpnd1WV3DLfNhNfiXgR3ozDo99VvsuDMnLfAjrJxWWTcUoYnRZMAEV9R4xaYFJeBNmkKEPo4WPn",
  "key6": "2GG5s2dwp5gUncUaeGFifUyAtqwA1e5csBViALkpucmB1Nf2GzGH6szDx7fGsXYXpvxueYt4DiPikjNekV46dFcX",
  "key7": "4V2eSsYHDvBM7Z2ZvaKQAh8P6G1vQbC2jPMTofNttGicd1SKrBNzsbv8YvcYgddX96NemRw9u5NmEYkCHqsmmavJ",
  "key8": "48gWnZwE4GJDdfVLctDqzpGgBZ3TX89eXcHy6JsQVrahccgkLHcXzPi2BcThCueXZ9Hvzp1jTSeqxaLHFf4WcVHq",
  "key9": "2BsG2WAtjLfkvS8jXs9efQGqGLd6j3bRu9hiywLnAi37W2NGWoxnMj9jbmPRcuE9CbVVddZPkdZ1z9WXXr9pG7ih",
  "key10": "5x881t9awaCZd8B2tGjUhfZzo4pZNw6gEx8Q13nTUj9oVar7Fg8Ke9HCnda2MjtBN8Cc4YAdxPbdpvfcUTbbvzBq",
  "key11": "3i8QJ8HTjzfHWZKAuXmzGohuxb92r9aUdRFB8YXobsRh4pNFhhr1LHzgs6f5ufBPxDyRNopMDBgMFZZiUSXeGko7",
  "key12": "58go1dir6daFkLMiBxeKcp9oF5xhV9pEPdHwKNSdbgV4Fez62SrawBsAG2tWPQinBm58HgcEL8grQPgmGaESuLVd",
  "key13": "2FAtfFV1qj1mdYZKg2ZwuTQgRWUPMcQsC69ApPZUjg7WsZUnDiyJG7qhptcJT4LuvVTLCN6V9BaWKb4r5yuRSXUT",
  "key14": "5vMuCsDbCEDDtR2xvBniZ5g8jENFR9XLLkNALmSiDNWU4ifwjTf6QFgddzmixmd31L62jqbd3QhnsueSMTNfJ42b",
  "key15": "5tsaaH1F3Pd8g3N6vxSNRytX4PFXGZno7S8daQBjq3qaXPg6JCdZBvfHaES1uuTjjJPLwTv6sQWLFmoKKABP5mRy",
  "key16": "83RrNyPTkV9XpqUfR6ihmgL3gynL1WPaojqx32xCfrsXyz7AW6AwEDeuDjGNBPYwWn2xAXqDUJivfJGgvaDejD2",
  "key17": "3Sryg6XS9opFZVnaH84x3JkQEXfuZfdZizLnHgkFx6N9ocpVsaGUSGRURgS5w4Z5hF1DbsnmVpm3QQhkeEUs73BS",
  "key18": "sEpFmWZ3GtVf4Ron4UQTtVvdfmT2x6dzabWaSarHSk5q9wo5yh442g8PAggji1GJoHS8C5ipbymV98EdxLFeZQN",
  "key19": "5ibyFKR9NQMMKih2SH2metmE3viVYizBYW3G45jta11MCPn2NXTwEfdN3cMyqiEE9CwCp8W1hm1tb2C49e5kxNGt",
  "key20": "511c8SCQZeL1ZUBKAErxuATVoFxLvjigyCPVSfRCc5YFMDCiAaXdKVkBLqVD3mRXWaDD7cAVbf1cYKUSG5y3LNCP",
  "key21": "2Kdgftwcpcdpq3esbw21uVqKkuv5esMvNmpCN36BoVGjn4jhiJtj2RRJhkNKengRdvT38qkpRNJ2YFDM1S4VtD9B",
  "key22": "5tJYu75Jiw9ZkdtDhobaADFfYp2TDA88UzWx1GV5RsebNz9z2vtLJpSb2ihfdYUmYfNT9ZVqPQae3QeMv3F43QWc",
  "key23": "3rctmNHxUG3A9qdst1ztBi3Y5ptCC1ZaXn9B5ayv8uMvXd4s1vdFqc12nbAQ595Se5BQG2XqBbxf5amyMCGGrbiH",
  "key24": "4dUriVDC8wopjwEiW485QoNBF7oSEetj5YnSyF4mYDZ3GARY6QgaWQqA8ya9CABs54X62Y1CVtL6aLSYNxeq3aAe",
  "key25": "4RbCh2VLVWSexumhyri49GEC6QdKQgmk2AdRjCw99WY9TAx3etNTMBweVk5WPvzv8VpUpu5SK51wuJm7ZTCXpJuq",
  "key26": "3zRNmJ9BNSJFn6aD1BXuqSQ5x69mTGnj3sMwQHDa8DqavjcUgLwymqdSZkWjskAgUgQezpPcckajxSHfS6yzMpYJ",
  "key27": "3uMXjg7npSE2pnMj69iXvMPqayRXAygBAfa5bocEmR5kqp3U51wHbUvrGfMxYvMBaPbbxWb8p6yv4t1cmgPQEyii",
  "key28": "2bwmB38N13JidcM4vRi1r4L1NhmGgK4XEufScjNqPaH2b5WrirxT49FaRuHmcXLuowwFLbsZvRptjyFywtv4KK4f",
  "key29": "3cgiTNddVuhwxWMnSG3M5DbD6dod5u8JwpqU1Hzhs4xfSaUFBWpPeWFf2VZSdidrN7xBJZseoGqC58B1NCFbXTYm",
  "key30": "5K7wJ2uzjEF8x4E9wZRev8JKVrJcXxfbqe3zQn4iSktitGeaah6iw6GBAkBeoTH1aZDcjYJBAcJpkpc7YKcgXMcc",
  "key31": "2XdAnHxmLJHfT2f56hDGpC8Fs6iDnDThJF6ZQUionbN1gbogB6vCam9djMJx3BrRPRSVuLHwa2WAo3Gca5tyrj1",
  "key32": "4NUkTm8WpN9PvoWcNcmWUYRDzZEGzwhjYRAXQbXG1KaDyfjbCgC32ff9Hu3STG9tG9AXhiHbGSV1KzkNKgGBoLAo",
  "key33": "45sqDRrRNp8BZCaSZtVbXBRWWcGkeuYrMChD5nTPYsv5quzGx3oaJxuyRREa6cJsseRtuobeta6vjZVsusnW6fwJ",
  "key34": "mqjmJrso6E1veb8MkuURvYhigZvb79EQo8BqihnPx5XJiLoLztJxUZt3HRSmRyvoi2mMswWH6izcYy4aK8Hdup3",
  "key35": "3Hp88T7wfj2rJ2GWwmC9nTxg4ZqFWCozhDMhs7X1ZA8BDZa15EQGXTAocdaeJyMnQbRtmdEsak91WjhhkGmnndA4",
  "key36": "DHUcibcTZJ1Nqj4fFdSGzcYUjsvmL5e25CWWEXT9iVzWfxUFUU4pybHFBkDuXKFyqF4zWU4eTCm3ZdyKbL7VXNf",
  "key37": "3VN5zwqCBwFcJZ8WFHCyWAPUtgLSUoQZc4KA7inrMHt7AF3mS1A8fLZYG3g5xLUSAhjdkdrWvPS8sodHsTrin9km",
  "key38": "2qJnmneQrnE9b5ZiKRa5WCDe8FKmXKHTziAMZu2D2dyS1fT2C7FRqj19PwqCvVNqSirMqfg83K3PARYFKj1uMt4j",
  "key39": "Rb1iAWMG1MYwWxJanUvE4oh6MZb6AAVYaCEThKDyA8CM6BGMopR5mUVymGLfaEG97UK6kHWfzaMvxteNSpZCQ4R",
  "key40": "2iNtLdRbwNvwyqr4shM2ALX8TcYtNNRNZYJCngBD3zvHUifZDjnFrWYdygtZ32iV9h9hru8unRWgAvretfz3f3wB",
  "key41": "3BhLKkWZwjBdFL3Jn73Cw2gmdzPfRf9ZPwJC4PPH6QdbxVc2SyW4CVeroGFbYrK16pRfg5F9BGbxqPb61Jr4XhNA"
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
