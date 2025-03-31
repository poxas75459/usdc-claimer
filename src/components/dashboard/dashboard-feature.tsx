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
    "28wEY1iQESzrL9p4XNRV3RatFd91HsaN1XRbwL5yWpSfyYyt1ynoLTWfi4oj6R3D7aiXQ2z2u4M7Q5uwTCeXtf5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KeVEzjrRFBWzUnkTRcYTH6FNehkDzE8og9eLNwQwm7ZBdFC591zCnrr4ByzuajgZXxUNWmA1Nfcwx7SBTquR6Yk",
  "key1": "2RFjMNPxvS7ZQkkw4C2itg7Ex3v2zutjJ2tpDrBW31JUuAvG8W58HBv3iPLxQMteBiDk8CV389nAoLmM2GQmpGtc",
  "key2": "agHm6uc9J5z3DitKdWR7HvEHSENDzqx9a6e58NScX1TBfCXwBZnSa19Js1afF9vngTqyEXsjSV2rYbLtBawCdJy",
  "key3": "4titLsKhxuY648qNmChMwWFxKdWf2xdGjkdLNZKLknUeixEX7c2UVWgmpSoKeArKMhMHgwnYKKWDL2cqv5CAQxdL",
  "key4": "kHRUfL4bWC4PSfPRaNMX9rxUmKEGLuLJ6pnLCypMJHcwUH8svgJYWFQST1rZ8tq6rojkXz83JRxhvTo8P1jQWFp",
  "key5": "2Vh1GFqqRraNHWRi2diG4eHm7u4kRrJrfZ28uM3u8MpV7gXZCTTZwYnEBgnjdSQUuH2F5LtJJAZ8i5oh7WQpRQkm",
  "key6": "47nUkRcfB39J2dXWbdYJXi73higiZmG1LmH7hyLEDMHQMamP9FCfGoDBEyCaokbmAgVKZrRXAMkpXT1YUqkjBmCR",
  "key7": "3vMVAJzbAiJfkByfFfMH7LAPhDJXnCn7uRr1sbm2DBR2ftWoarWVF3b4nYndASTA925UJ1SJruXid9pQ459MM231",
  "key8": "Y52n33YVEykPyHjFs7LZ2sjesMnRFcN5Z9TSdQ9rRWcDDY12GETHPYH5j6847Ts6JwhhdS9gt2uyBZRyetkU9ST",
  "key9": "56hGekBMtg7i8cZxDqQiUhChaYCArXNWufhQMeWKXXrzjq9usJhnpaQhCTxafrimae3BBhETzszQaC3NTJwANhER",
  "key10": "5xLh8ojxJCPKBd5CE3kexVSAqtEDiEieb5KRxJE6fMtfjFsvXzKZo3DzJLmTJUMTfe6AAaYT6MkRveHQam8rWdce",
  "key11": "465QpPxAJv5GPvecUVadEJCA3ZQg1WJxPcLGuDaysGSRvuKJ55Rn8emd51r1PnJsFXCeC8XCutgXTFLYc145TE91",
  "key12": "5D7qKyfwr9gL4YhDzTGpzsh1R2HS1TKEprhy4saQonavKGc5M8nXVZRmqxRhtQJChJzn5EGTNGBieCJMS7gTZaUt",
  "key13": "4LAJdaCh4ss5SNX2ejEza5KZZ1437fVNUAWt2Cow826fimHSb1kdiS52YrzHVp6oSx3MaRZQrqbgRhV7wQHTAKZT",
  "key14": "5TCDnqk2SXSUyFtckC1dQZwXBn6EhzercLKxD1tbaqcaEdiR6F6jLRWZ6szn46ZXZKqvqFS47r2jJNUSKeFq5ZtE",
  "key15": "3ed4ZC7uFrhN4DYFUTiXBWMKiDXiPyD3LcwCftiZszmiS51Hzhk4PAD8SGTRLW3kRziRZEDRNHrptRrf1JwayNDw",
  "key16": "544nxYTkqxbsscmbPqLreaXHPKbUq59EqWLyULxoGjYzNaxgGuhxg5iAJh4NVBbGaovkp39CKHJELfsGSsXHyGut",
  "key17": "4qMuzyh3RjtWZc8LjbJsANt6wZ8j1SUcRiKVSyn6m8cVp1fyBRQNraSAhKmSsqCjtu6aeMzywfXHPBdAMkdr8Ssd",
  "key18": "WjmchYJkU4BAWeidBeUNDzyAWcH3dnQLyrRkyzdqJzaWRHDAFSs8jJQm1NvBXAGUNnzoEN2V1UvgWojFcWvz3E9",
  "key19": "4P9X8kunzLzDTxVAeuPWc9ZUWLsV3eXq3uDmMgsRvvERETr4xmqsrdAZMUad5fb326T9X3mDGHipxAua26JQiJaN",
  "key20": "qehT2KrSKFLjwFqcfmhs2kAHTMUNw6kjVGckRdy2hP4rTywkNf9VoTswXuJqNdKszuNoWUKRsBJ6SzkgruoJZ46",
  "key21": "3tXSfVDjm56XWqp6YxzRS8oZJycBUWtAjqe3nSb12GMpuZhNJyUFu6sg59NDCG5rpDjkKQM5bxQmt14ezHfzB8Yu",
  "key22": "4Q8X12LCY1NuLdEYQtsGexyy1x7WR2Sk53Q68j84MonKFknmdQnEGdevxWZeX83H7VNnBuJzD9mG2pYuFbwFf37u",
  "key23": "2yVeQLe2WLR8rb4aDbjuDPr8GJfhoGsu7Supb7n3E88EbUc6TtGkEUS2XirR6t8jVYenq2XF1Z6KZCmYJoriftd2",
  "key24": "2gP9vjHGUyAS5Yxu5eZsA7tejAXygy1FhXUe9gDZekmBq6F5EfaC6J3Q3PAEaBVG2TKcp9tm38V6Bh3jCGm1s2Ly",
  "key25": "5nyFqdxzxvFxPExZGEwUqCozubARmnpzvR6yKVNjTbNnKZBaAMFzpPAUfVGiGzn4mxXDBk6WJp2keWNXiCJT2dwv",
  "key26": "5su2uEXGXLb7Huhk2Yi4D27QBPUX1TvCrv2ZyaodY2RB5SrQpquyZqkxsCggF71BA9VPWepMJ3RnfHFKeRPELG2Z",
  "key27": "2ttydQ91vWALtFsDgJMRqrytyLxinNf7SNPm88MztVtaW5siCyC5tiL7kVuLZdYLVv8Wsw6FF4qjTc53yV9rNT7k",
  "key28": "3RZYYYUEpekYXr3f3MaUoKS2unJoNCxyCU8EB3nnMnQKFzLP87qGBrGv4bbZs5w3FDHfEyTxhrtTJ74hT6wtubRh",
  "key29": "4j1jq5c62SfACo2wxZr6xv9zXiVciZ5wHiQedH79jY1HrpZYADS3tAVeMq6nCmZpWdzaypJ1tx9jaC8rvT2pbGiT",
  "key30": "5uSBoPdRF6b8q4HtSAYQ93FB5Z37DdMtFtWZiLXjh8H8zbUyzdd1p3PsTEGMRCSxXmiKETUM4k1CdZBG82cZVM9K",
  "key31": "3HacBYEpRnqQTfQnDcFiJ86Xyo7AYSMkxhmkqoE4pdYS7awFecRZ5upJVQopQ8Kg2wBcaXnjBRGRR2B6Nfi6YWFY",
  "key32": "3N7tuc2xX1QXmzggxZPkDZe5gxhA85TVGBb7XX1HPnZqNVxbtV7GE9fNVDZS5gaWSqoHMVwEh5NESrapsxSQffZP",
  "key33": "3X7LyFQjj4H1eLuvsub8cVfpWG5wctC3mjMjXLm6HKmE1jmC3upsQYENZpiDuWPofUh4FWNktoABPQuPMc5adAuJ",
  "key34": "4ioLe3mpzGLj6S5zMpQF8JMLesBzXt7cTo8KAmHJyyKpWqBEPwsVm7hKmmygkcVFquxaERtAjkv6nWK5rYVnK8XG",
  "key35": "3FY1V7vFx1qfCAVEVYDmu5m4KrVAMHdpQ4nz7LeGAP8qJUu74VvPHvxaJteb6jNT1cfLD2vgWayzQFPBynqkKqDT",
  "key36": "4BpPnHf9cRQZWD3fe5fbeXG8ip2Nr9yezZdWExgCYUmitv3qb57xXo6f78vNGGJRuYUH95vbJrwPgsh1waaBUPTt"
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
