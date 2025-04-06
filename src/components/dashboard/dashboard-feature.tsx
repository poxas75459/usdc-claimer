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
    "5BT5yMCv1KhAKhrfsGLYN4T6kEYFaELVrdA9T6JWKEzUsctMxKgANL7kVyZoeLQYoxKg1S84MgH3ruR5yXGtKxa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2cmMBicSAwdrDbSxXLimVJgmPa8d4XDNGuN8tQF8c6AE3Quw3R6njPR4fiLUajSmkX1zAN89PjWKLvrs5nXxN2",
  "key1": "5xh7TVw11MHi6sxyKEqFieCCEvoVJz8GjpmLtAJhbWja61n4q4S6ZQ1SLEchVjFfWfhHfoyCjngXHr2jdiEwCmhS",
  "key2": "2RU1SxBw6McXh2sNrrPNTbr3SXmho7o3D5kGLcZivcRAE59zH3M28DjYG9XmcJut2Nt6hZhGwA4GSvZXmzCgcgGb",
  "key3": "3G76vLVB2q5SXNXp1WepoYCyQPYiJxECREtGNFTY8akV28xMJrULwvxssYWqL3xGE66PXNbY4jtD7rK2rFy3kDr9",
  "key4": "64NaLN7nazbXsNsQRrmBc5fcK2waukfN7SAS1hEH39RVRog3uT2LwXf4fpgNcKKe3SbLNSdYhkrVTWMdSqSxni4M",
  "key5": "3HTp8n4sX3rnTrM1VUpE7yoMib63osdtszZUc5aWNof16qL66kvMAoB3HWCGpZ1Sxeyt8m1F3A9bbJxDHpwuMXSB",
  "key6": "627ZAu9AusBe5zBVPj3jnMCvt7o9tS6FHzDwoCE4Fw7aUqLtMUdi2oBpMHU2EZarB9iqsdWNG7owoGuZogqUuFBc",
  "key7": "4VawpxgAc5x3JneFPmaKDHvkhh8B1EbR5RS9qYHh6sKhm43RDyVibxTijKk8KR19rtVrhutoxmnDrnR7sGbewk8o",
  "key8": "jhFNSWeZMHr4LZYS4BHxfGf6ZeFkJnrYvVkown1NihFtA2f8QBoPZ66TA9HL2DZY1PNcLQCNK8hwEnTnsrrHbjU",
  "key9": "2VpGaMz3Li727XwvKsisaZRzafS2YdvcxfQDrihEoWm75C8VkGdcDFP3tXTrnP1X9s47Rm9byYYL669ZAxvdAHKt",
  "key10": "rANA23YJUkuwgoUUSXrQsMw51HLUFM542QoTD7x42ho35snC2RFEh1r7UpZ3NFvVFSH41u3QetEr4tLzq6vTLMu",
  "key11": "42njquHZE9E11rdG3vkH25j5ouyaPUoAAUCnpMRBN12XidELwMx7o47W6diNLhaSAhtNZ1qrc3UKEqkTZBxztGYy",
  "key12": "fpgUaY2JjeodwtEW9tPimd3JhNwexSmGQxRavxGrg3eBD8KXkwTfE6ULQ8W4PB54uBoZc1Vmsjrbo7PvUpd3Y5j",
  "key13": "5t73TE93uppSNJyzpK69GUks1N28HtvmNdN4sA57shN75WK2hCpxwKxSMTbzanVX2a7LG6zVSgD9j5jedtYwiFsp",
  "key14": "4wRM6fpQTvc4FtJmY2AcbPKgRJd42HjLrJ9xUXqo328f2T7WSD69H7R29UUMgP3H5FEXLew44VnCxAaeMvaXBqAn",
  "key15": "42g7sPRS1TAdAbXgHMkDHioMAMDwjZM6CWEqYfkL7u7PkL1rxWgPhyKD8eEk9v7J1YCLcwhz6N1wBvJX3vhte585",
  "key16": "4P4m1tyZpZ3CvmYRuAXDvBLMeBTaAjFMRyBy8vDUJvAuEtKZZi5TtCwBqP62CAZ6ZRRTFeNAccNSXxrhKwNRnY2A",
  "key17": "5hjch8Yo76ndexwsXJuvcrow49M1qS2KNidcCLya4gAwwQDskcLx4CvoM1y4z4NDeMSdCkXZinN2fzXQDuFVTnVP",
  "key18": "5oGiQZekoEQy3BqNw4mjyPKb3euUdbbPnwSeraTdJTfezCNTTdbBC5wXtkB7pe83oR4W5ETj78gCLR8E23do8Zdo",
  "key19": "5BTEdi3XVWQKLX4XGB1xL5ZVozsaZWi8YaKFLssjxTnQMnrKBMBU1C6KYWrHnZ2zUhj8EKHrzbBhDR9jrzjApbxN",
  "key20": "KgD7gitxDBUNqGoB6UZh6WrKNCx2Dp9A4r3QUtVBop9Gr5LzpJ26gC4nLg9oer5ms6AESiwM15FyjAUrPSrFXSy",
  "key21": "Axo78LUe9W9Mxup687VhTCFBGoxHcSK7bNV1azK1YxqaU5HTJr8Hy2RL3zRpfZMHdqssxmfJG4kEKMk93htQBhh",
  "key22": "58ohgMocFBmzCC2EBPoAKLohjg6m9sqDKeWJBTXbQkp8j4kCeoU4jjGHpjWcjJcSgwV4GyF9HKThD9uepK5KqD9x",
  "key23": "EErGYv47LDyu2ueL7dB2rqzzphNLyfLco5zTHHE4DxcFUhNzPjACnwRWgwK72kmpeTdFeB36Sg1LyVcdjFfqM4j",
  "key24": "5fcg4ntLNwwhfEaq16e99NjtCxSdfRyRsDJifwUJK6BdPRuUSgc1aLcy3qnhTYgGhGePgHbu2nL92CKepeSDu1Pw",
  "key25": "3utBx9B3cHQ4ErmQGti2yBJqwBUSwuwgrydZ4ADwKbuWUkai5mUPXSxvHxfFXmpkmDFXSjW5mg3Znn8pbe3oFhZL",
  "key26": "46bzTJYhDvJNFH4zhZVHqeP1D6KMC22u53YcBVVikNr9j3aBZ8if81GJgFzG5D7yb56ruHYabWY7TqGLB5WkBc7n",
  "key27": "3mzinFHMsfUqyGYy7ugcLUfutK2rPTVe5cEk8X9vQ2ZcRcatmD6zPiZXeSGou96r8B8KRjDaU6BqL359m6f6EW5h",
  "key28": "2h4EE6TUQPvLVn1wudMWqEVwBV88YqjR3diU6S4DCgUYsGLYJysNbkKAbkVWmroBzAt1hE3XLPpPnqeBG7GHo1CD",
  "key29": "3Ejug5KKdXA3RVdXPMfipQdZq16asTYy98Wo9mJ8bfqAtiU84MrAJLVLKuCkK5F3B4AxqgSZZuk3dDHUnKDAytJT",
  "key30": "54kDW2dqb2WSqBGw446r8gKrgKkU5gfyLcp7eTsNPcax9H4ZMFMAQ75YnkXtY8UHeZATVhDwhnR2L7KGJbLFQAqj",
  "key31": "2gRKFVHN8esC1rwokv4kXZuYiRjWSTr1WN83Gq1WaAiJqshXx7WwVfo3vqwqjsHHx367nKJ63sUEDg3Nkg9rUiy4",
  "key32": "2D7ZcL9whgJ22cZYPnexzN36yYfw5dHxxYs1MLcFDQV81yjnx5Cnmo5wKEy4tMd2kqTedVUs9dqSm4Nw5Z7DPUKP",
  "key33": "5DuHEoRYqVeCbjoRHYWSu5XU6UVwich2GfqFXRdGjqgU2rLaJBnDvrG4uZ82oWwDsAwPSU3fBJwdE6VrtENnH4ay",
  "key34": "2iU8SndPLxEhTGc7ZVMCmbpTVyYVKSdEycf8tfFD3U6BsYdGsZnPoSnNJfbNC7avjAdj6k46mWcgWFnkPq3SKy1P",
  "key35": "2kEqe7hiqRkmeDQ7h43uSLsBbApvN1od9bzLy4NXtHmDEbbSuiV7CTKwBBvR1vaQmhdn8aVnni77DHaaT2ga5Nqh",
  "key36": "KaRXyVMVKvU7CTmdUnnn1dmQzR28Lh4aKbv3AAuh8Ty95BJAcL4Jssry2gD3cxK4ydnUvPKMfrDiJxLT9NbAi1K",
  "key37": "anVULE1FELd2mwZzzooP9uAKdcDqbEtY8EQihn7w59wzms4nVBPa7JEkjzqhARL8nc2kNajraaDbJaJteRxWDnL",
  "key38": "3aDFjqhSDscp6mQ1L4zj7CojD5jZGNEj5aZ6x9kK9fWNjnTwm4yAAKbAcdG2N7JbyfwGVc9EMA4fj9L5JWLecg9h",
  "key39": "5g5M1UeUdnDztB4mHRX4Si2fNVspdBHxNSqSeYDeD8QCP3JFa1V29JL84MBRRQUhsQDAtQwAqPYVgkohd9yguYjp",
  "key40": "3kkBqR95SMNSAvW2qmL2CFbWTohD7N28WcxURotnHGZM3cr8JL1t4H67iupQnX1ZDvWJY7FH1as6j2csTTCDt1mu",
  "key41": "4xQgM52pnmRQDbikrVufC9HtWYkxbk9CZNGhUrqPd2mcXBbKn1nz38k4yac4CjUNemZPW74WZR3c1Liqc9cYyaZ",
  "key42": "5Z5z11knioC7JJf6KkdbkuAG2eqSbymgXthycRgXzgvAqW8NaahiAbDkKXAhPqkDoAYwMGhJhBeyQ1MgXJxuvT6e"
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
