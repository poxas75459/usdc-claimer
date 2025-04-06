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
    "5o1rWnF2inZEouT784pJLVFxkhfUWzg3YRJ5jRpU6wxwvx1YLRyFbc4XRHxbcF5BKAuRuakHCdzN41zDsvtegWjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHCWtPqo5LtYv7PZJ72pLi8iw7C62QKQqX6hUEdPLgqyHaHadxQxz9sEunpX5q31QU8c8bAVsBCFbJVWaASDpU5",
  "key1": "4jQjbodD69n9puyyxW2mpJh5rgBPdC85uHMxAJcn9mf8ens8QNTs2j1gDkq7K4zZ5FhSm5VJXnJUWnfkAQj7bcKn",
  "key2": "3utHmAdSPvfBnP7BDVEGkiFDSPZ2ZM73Lh2tAhuHtBzCEGCAenQm37pciFDavEYaMiQ5YRTTdKKP6faxhxAjWg5A",
  "key3": "2dpqyEioKsJC266jbMoqNVaWyz4K15rRxAVah6XcHNzYhHRZa7zm4APiAWK5a5ZpoQU8Hqncwks1yrfQ2HurFsmn",
  "key4": "4FvFvQkfJzLN38TRZSHykfcU8hjv433B54mdZNGCH2xB5JB7xtb626tVgTc3kgqPeqHaPGzLFfD5DJgj5Jet8EJN",
  "key5": "ahxJk7dq9WT3DRQSTo7qpirCNqD5hea2obJSuK5j2d5h7rZygCNaXosRk1QgDDPX7iRSqTP8dd7ngoZSMCwzUby",
  "key6": "5Gsz5pHALnMBNTKLLNyTSpD6134bx9ksEnzJ4MuPBDLdB71naEghTmtYpCqtiyfFWjSujqH72r5TAuypMipm89sM",
  "key7": "iuZk7ez4JQp2LT95wuMsR1SYUKixdByyHiN31E3cGbfaJMSD34BFbBVKXPbJfbjTBg2qB1zJxRvJFwh6RFGFkeu",
  "key8": "4HQ2E2S75foXbFxf6aDEfFtU9LRQzJP53iuSCoDcqefA7feCs1wK2pqMxxAqNnWE71rFhepDxwhSbxYYnNteCcP",
  "key9": "5hw6KcsSCLatyhDZFRDBXz5QZWx6vow8AsAvgpMMoUCb4y43ZrUg6dVCkieJQwAiDpNpGiQT4nYd5d28aeAnEYdf",
  "key10": "66ps6tPm9uckDDWwMv3oy5HxiubyDRZKMxMDKmKomGiQEDREZgT82UHA72WFq2zC3HaM6oQxrwErnNKzZ2JbAY64",
  "key11": "56BByvautQCfwTbmowvtKX5WF1qqQStC35ZBXdYLup6XUB8SQam9xwxuLDCeouGs4tg3MHjMwg5ZzGw3dAugeoUw",
  "key12": "2WbjRiWzxA324CS7eQYXztRCZGVmThdm46cPwaZ9vWKMv8h62JrwzYk9sToVrjFCoKHcE54Vd6HPosjNa7Q565rQ",
  "key13": "XrZt3T9SCpEAENYnNQW5Xw4zMF48W5BqLE6gGZpqYnutG1JaWmCMMvG6xM89DPonL1cjSmduWQdUYgt2fhqGzzj",
  "key14": "2UFKFPr1rE2s8GNPUDGZMnrkBSWVbRcK8FiE1TZaKirEafzGEQcrH8PNBXiwrnpak8BCdem3eX3p37Y6B3fst4nG",
  "key15": "2qsFV2Ev8MZSGnRdi3Mr6hE27ETeKMLiFs4UovJd4CW4t2BpauVU1SEABQ2xCSA2uyT9cijAc3K62tuhGNp1SXw4",
  "key16": "5nFDWhV36odrZ87Kk11pEAG4PNSRRcxBPL3ZLpNRy4LN5peNgevQMbXgusGYHgdmeqomgEoF5GHpJak5EyBmFwdn",
  "key17": "42KUjaZhENt268UBBP6e9UcXrLscgBMdxkWZuuk765oipwYfbf7f2T548eK8Qe1BfkfXnvGNjMq7FX319P4FTJCE",
  "key18": "2fpKXCoKZRB6MQxZuPRmEEoxcxet91RqcSoeBi19AgdWXYs8rprVX8PxkjDqC7Gu3mXTmpRZWDDenQCgBjtFrmsm",
  "key19": "55VCBiat5JProLuiksBfwEYPVp3vg1ksH7JwD55yXFSZgKopia8vKyhcUPoeP65t8sx2DcbretX3p6ZNLEFGoDMa",
  "key20": "26uABsanq61Rjkzq7ttQUfVEPQBfG8T7SBpK54CnGxfVhSLu9d8mAgqa8VkFEXxfUAhfSdHsALL2s5p6JYr4Prcd",
  "key21": "5b9Gh7zXcxbTfdYNLUtx417SwcM2i3Tx4vPmEHhFB3pq6C93AeJZJPMVC7qGGJSmdGoKxLMNPcr6Uedz4ZzMDkQ3",
  "key22": "5HQdjm1aL6L5EWMohaCdUdpBTVEgUHKHdKqZWNb684oSJHiYN1B2H48QRogq3zqKtXGpsejWPs63k3QuEVA6jgTD",
  "key23": "4fQTBnDjXoyq8oRbTzUQo6bFWKhNHpMQmUpZB8bia42mE8KcCmgSZt7RomgkL3nNCdjVqdvRCkrWQuAqVb8MDooT",
  "key24": "54NEUqpfAwmR5ZwJWS7wFVrFXpNs85eZNG2tbfEgP1cSvihqN5C3EG5EP3HrKzqKEe48hsqkUkDeodMYeDNCue1a",
  "key25": "3pipxSM8idpgcQbtg8z35LoXP4vqBDyothSzdNY3TzYHr1DNUMNFgjBLLXtn9u1dLckAKjZZPJ6Ept9nGHJLegcY",
  "key26": "2zAVhjRP6WT24H4EcvceQKgNKBwyA2pm6LMrrVxtmYXC7HUMq3Df5bjwiZLhnyjJddpV9TiqgnTo65XY3r9XpGzd",
  "key27": "57HwUjYaL2hYpuaBWknVhmcbSwjnWaah3Pb8NPFfU948pWisTLt29zijS3od4E5emu9x85h9Tyxj8ZDU7SxjJJcD",
  "key28": "4o6EvvzPpijYtwENtkrT9QTPesuD82gRpBYttCUFCMTRT1X9ZgkoJDuCx3MoiYTmVHJZ5zyUe43P1mQGr4ntxjLC",
  "key29": "3L9u71yps3VAz9ta6vxYvTRHTuRiLTQA9dektrUspoGc2FRwFMkCyhYG5LZmCGgEY32KqTEYF8bog3zar6KTbSEh",
  "key30": "kJ3FxT9zrqfr43W4dgc3oCuEiuMBYmiE2jf3nMF5RLeZoi2i54EPWR9KNz5iBb4DmxoynnjoLi9irdL9jdeHKPe",
  "key31": "4J6jE5JpUS8D87z5DtsxKdyf32KUSvtzFZ3BS4yUCQQj8fT4QwouMEVJoJSdjq8zPxsqurZA4CrVjY3CpJT3m3Lm",
  "key32": "2tyHw9eVHDW4fr8fkLT4yFogFfSd8AwvKi3jeaAp4queDWyLxUPSp3oGVeSiuNX3KCQy5hvc62JZMtpXiduTg1ok",
  "key33": "2E8QvhMWycudNQkhbySvRTVyPjzM8yi1AVNFQ5aDEQLoKhXcdaxDfk97SaEt2PmvMCjGDHh7HVJNA9LftwiHV1jt"
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
