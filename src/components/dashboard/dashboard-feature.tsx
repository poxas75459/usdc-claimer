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
    "TLvCSo4jozh8MGVb5W4R6oEh83udYP3odXuE8Fj1rFoHZyS7JskU6bychMHBGxYn7YVNCc8mmLGunMqN7njQxBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67TiwfnDHXJHtLhHwT539aVmCDDfENLKnDYHrh1ET8Qm2zTyELCZCGgu1JuBueDHy2rsHV7GDbjL4ycsX6MaCsNF",
  "key1": "5NYcsHFButqgJGkuPxigPDpTMG6s8pnYskiFgwrcVQNVFuvFe1fK42wif7HGmYk8YaHjdR2m1hFPfajMYJAYfN8u",
  "key2": "27Cjt8iVPPfR1Jojt3ZEchtk6pS7P6CijL67c4hWcvNaUVfbhiwrLwkRBaSZeNQsAFwiPSoVH82937cSvhq7nWE5",
  "key3": "2A1GEMGDb767veUvtKdruLrNGYmUMoUBvyNHn9rn5Yt7aDVqH7rJBcbrVFhcnVFNxvgyrwpevR39jinXxtzzitfH",
  "key4": "2r4xtT8mREKMAjgGudBn7axgiAZR11sWhjJe286pe7eprsTob14DXcPowRqsTDCCk2ymgpKWN8Lp3auugGvpN3LW",
  "key5": "BJMqAWRhW2AbDvab2AyigtETKjkdAw8KNT7o143eWPKTKK36XjRVtfsgy53HXPXbbQJPEtJ8Yy5XyisxKNDBsK1",
  "key6": "GrFsd1TJxEfNf8Mgp1XmgT2Yu5e1mvuwTNdvK9eQpVkXcBJMCGwtvDM1rGXUaUNdfsm6hVRESFrc7S9RmdGUCwF",
  "key7": "42NUdFTDa3H2ywZP8tMvkR3urESdfp3jG9fDxgY8NumFjhihthBPWxRtADAST5qjXosirZ9aC8T3gFEfeN6qHmy3",
  "key8": "4ajnu6uFTZySbQZRND7RWQPc32wMrH5FGdNed1TVMT7ksfvhtJMbUQRUAHigCFY9RUte4rPzPsJKRygypypxnW47",
  "key9": "3Jk5wo6nwCMfLcdNJcPtMGX3aNXPaPTEbYrgURAd9PYfYQv1BJF6MfiJ4QB1xBLsjkWXHdm6mL9njeRXeQ465uQn",
  "key10": "3VkMkbm5H2PiB1qw5gJwAiRvWyRBFtRMeMSf6RF3PBvKei1NmKveZP1KHeTNq1xUcBSe1tuQGra5N1ZTRZcMyM9M",
  "key11": "3k4urq2LLrPiNHbBt8ieQNunKm4U2bp2orrsn61svYKNpGf2sgKXf8wjZJbh8wPpQ7XLxGUTm5Q5qmL4rcPhBqZB",
  "key12": "5oGSBBnPVGgeKcPDsHs4cHk3gFSpij75jut3RakMq3hpxTWm8oZ59p1NbfZi5eqBX2jodaAPNAgcHM4CBcCKgQT",
  "key13": "t9qyMbC6zUCfiSNXyNejC5zzAXXQi5ngAGcT9Rgevpg4ZixvK2ZEXBhW8E3SgLynBNn5BbqF2E7pWrf9zF7Te6L",
  "key14": "32aSHyiMeeC2H9pWAaaPGV8ZPakkPkVEoVBDyDrLwV6JkyfoXhNsYRuY3aWeuGhttKXZsbfsvudQV25u6mUFFCGM",
  "key15": "5jBNs1KZThoQG3bRVnCua7hEwBNhxCCTUHopZeXeWEYYfCsq46BKE1odYCacpnKqLwhPTShE6Lp3dN16Jjpr5G2y",
  "key16": "3wirfSVf65poUbodF8Wi3iDC8TUjzvyT2PV9Gi5nLPLm3nAaesjGfAawSCWNKNJt65UvHkm6wWnzfUZGyQyBoCr4",
  "key17": "bE4b3eyShAXg8rrFDVvVgupsCEqgo1ZdG6tD9i4Q3gTnm7RmDhsomeJbsFffAwBzhkxe7suR9HSFJh42tNe8KyM",
  "key18": "5V54b9LBVLmBBByDGjoJ299cqt27NAACPrDPYoU2cxa1u6CQQqsRJobWfbLEVofpLJpcH6GbfXv93wSm1mKXjqYe",
  "key19": "4aXHW2PYzeDZB6aCEaZYjRY9YJpDNEYuCamwQuMwWzKsyBn6FBrnFADkoXnQxD9ezZwgZKBJoBVMx3EXTuraCiUm",
  "key20": "3BoGdMtRypReCTA55WfQ6YnAg2PbmgQ2TsnfWNdUwmg7U45CjvLySDe7y6EKFNoE9jEbMiDb3MJ8sWDobsYdAiAH",
  "key21": "4NWZsXAF4H9ddDVNUtRXyr1ycG1L1o4Z7vmh2iKeuk4ywxpXmLbnMosdrsF5NhkETtpxDppyiMqsjh8t1DR6JZtE",
  "key22": "5y9FE7ZX6QzU7Ywdc8coL3ZFJZt5M6jdnmKhDhjBTUNzXi3pRQE4XGc65xFx7i1tQAcovCqq6KnPSra2R3a6vh8K",
  "key23": "4jcpKU15USDz858Pf4uWaWv1Bu6h3Eo2CjAvQqEqzKrZNdQgb11p7W8dPyUbo4fwNm1APVh6ErrKECtNmpHts9ai",
  "key24": "4Q6e6o1tN7iM51dUnTVSUw6KCNf2sQt1ZXoq1z8NkdodHmxxbhT7yydWC93puiumsAaS6T9kFpqUqGT3oZ5B3Vf5",
  "key25": "2rnfeNvmwMV6iVJQmhDyATNYScnSk5WyBHc4h6CjvCMY3UDcugmYhiq2zwiQxkYcFndkpBney2zfDadrEq8dZepQ",
  "key26": "3gyj2BHryua2JtGggKPAGvaTCrVRbYM6jfrWy2tEdfwKzHQUkPgJLVnUws7nia2yqd9i9cKE68nBswtkP7X82Bkd",
  "key27": "2bbevrkx8Q8rEBst2Lqgrs3mWAo7DXifmD6Nd2Uru3tGjYLmKbnBkXtZTAiPr5yMDSvcTjmMPeDQdg6GNo9Jfw8C",
  "key28": "2v72iRS8GXtGof6dLPnrNdngLkqqTrmsJQDBkRBP1go1bEJxrBPMdZjdx9LsBENpgSdE3rx1aaphUXBoQQbepLJu",
  "key29": "2m3t34exfGcpip5KAU5vTtABhHRWSRys7uX8z6TuFvSSJENXX57pTxzpRsCfAaPJPZEciYAC7GdsQKeN61tN5UFt",
  "key30": "1Tx1jWgGrk4cniAaxDX6CsWBv6oC6QA4vM1VuWvjLiJ864HaLyK9Ghi6F6bpZA2NTPeQRjcitJ2PwwiKrrnKHaK",
  "key31": "4LxDnBahAFADejpgtW1gubPCtnNzGwQHg5wp6YqGe7mUGYAuXpfcrerCEfKWbfzVy5ZDkTskGpvd5m7TpZtzs95f",
  "key32": "puX9SxjKWRz1UkSroc7MQ8oaLB3ku99XU83oaXniXjbjMfYmG3pzBmsXWqqzecm6pfZ28ub3YQJSbovKg797up5",
  "key33": "96AZtcBW8aVmax6BP7kT4q8jk11MPc4n3ZgYL1YJ6g8ApWrnEMUz9SmgyZ1cPVo7y2wZjddnjkXJYY5Av7kVjo5",
  "key34": "2jBR8zY5gWKDM261ZJBP8U6UVrPPDfa6vzokgG3AzRUuXyWbEEcgaH6ff5E4nECwXiekvfm2ScKRRVaekNnPWsrn",
  "key35": "2yYXxuvsRBtjTXW7drNnvmBFZx3AcRA5D32SnvH7yW7icAnfG5gU5Z9dbXnLHWyyiyb3qwL286yTfahFDrrXDG7W",
  "key36": "xyegp1JNkh3irxxuvjBpDggy9A1hsBFPbe25VN7AZdAY5VJVavnLGT2CTwfMAgdcc618a9CZUf1cL565dSVbEZd",
  "key37": "2cfX7TF6osLUt5fS8EAcN8d2aPVwT8KRWBkebUW1ruRkNGsYhzuXbLcNwpZqtUAZ9RpeTcHYH6YrQpMWeahYStfK",
  "key38": "4HZuC2tWYD7aJkLqr3tEjkPpB4qMmHtyrvjLTrHmGJkPswuW6AKHGJyBmwkJLx7va1kY6zoDHoe7fhJBaeb2W5P8"
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
