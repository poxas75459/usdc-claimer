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
    "2aVFYdPssqqrKxwsXazfuyMeixzyL1giHA823AZMRjYDadyGB8UttNuMUF3df4hZ3EmsbjVUN7VhuxUDv5YG97jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QerVJkFFhpcWEFJpPjQ6hmR7Z8KooRU4RWD8qSpYsXviqe5zrMKsaCnp7zQoUskXw1LQFnJKHhYcVFYsFQnNRHs",
  "key1": "Y4ZjDP4AuaDervg88nywHHtVT2ET516XRjoeGBXzBqmHgEaqFWauDPYqishjsexVy2tyNZtjeZ5f5tKgk7xuhAb",
  "key2": "4iZDiK1z86HU6s4odRs2T9y5EweQRPMA5TndkvmLEq2WQJPd6jSjnm2EZ3q9DFpsJumKBGQMQfBfLroJbndZADDa",
  "key3": "5UBXV3tK5zMuN8cfvXX3LahPo2YoRK1n3zq2YXsPed95dSoD9gHpT2NKn2QtgYMTNkzgPfLpC1JdJtktgb37jo4M",
  "key4": "3DgCXZ12mK67da9EjTY7Kr2DAozubwzp4NC6w56szDAxJSueCCg9k92C61nrNr6ZLcmvZsqUKPFD7mYbHjusTFfU",
  "key5": "3zjVHBdTSmFABVWsrCsGSFTRDMzTdiG4RwtmorLHXdUpfrPQezhYwzyKSR8woNuZuShjnpxGX1RVyhudqR7MW8co",
  "key6": "67YtAAmUXchBU9wScvUHfKaGbRWKJbiW6Rhpdw7QoHk35MWAWCoZHfZhBkXKNMjgg9YEVSWdFMZ813ZT5L5R8NcE",
  "key7": "4KMvQeBABHkCpFdxqeD9d9ycXkJQuAkqjezbUKct7URCfqKeuDYq3kR5CnUsq9dCFdtqNqBJHjFacExNSitQzt2",
  "key8": "3Yre2Ss7GLivcAHoTi7tQF21MChfgCJAyTBVTK7zHonMWpiySt81pcBXTsYkriLL2f7C9U15i5SSKfBj7vTzrfFp",
  "key9": "3SsS4AZcGnNEE626hzrDKx9ycveWGfwZTwJMDUNHWqpToTx1iaqpARNYvRfJ4RLs9JfJK7LGocnuPccHcrGQNBMn",
  "key10": "3oM1YrUcwgwgKjq7xKY3DyYss7mSNAbDpgHQbjzDwi7MKKHkTND8ZrJXosHiCQHfRgNVNFPs1fyLUxczCEYXLa6r",
  "key11": "35t72X9hespuFkqqD99ePjVYw9ZYyz3JP4gG5Pea55QUmC6FyKg55KDydNUDrKz7jVEHAgaNs7envpeNP2WtWXok",
  "key12": "2wZ4XPSeaoBNbDEY3Az1LqN7ALz1HjmLxUWanegVP5AXqxgnTHLafs3vi2E2e25GCtSnj1FR4XCWLhT7VXY4Hx84",
  "key13": "2Hfh9bddK3HiFdPifvXJivMW8VQxk8sYeyx6xiFgSELLkxfHP2ctEvuYu5yZrznNhVr5xWvDKApV7FmXfG2ozP7t",
  "key14": "34DgiWHzupajEgsSXimx5DR6RJgABPr6KiSUqP8VaRzr8adhHza8RWCY8Y6vcP4uxAhdG14Ev4GeoqpTZznkrqPd",
  "key15": "4ambSMPURd6LNpkVzSLHLzPvGMGG4w8RqesHYaxAqSDtw5dyYKCCig6it7zpZnL3CmYVZPRhHgTZ8iYtZ8mfbbBT",
  "key16": "5wxzd1sYTnytqBXcNM7cZEP9dcLamapavsvv8vQ8Bwu3dxPMLF6fEkgvaq2qX5iK3vQcDpWurKjjo76uKUQwpzW9",
  "key17": "5Ks8tmppWAGpHKAnBo99dSPHw3gfT2Bntmgm2QCMav5NiMcsf4xyaSZdqkxJzdWtj3MCrDb3qxrNi74YhrZ5H2E9",
  "key18": "39j6GLS5rPc6Gxoij9GT4FN9FDQtEMpkekBjPAaRQtGhBDn3UudjHdj5aQsk6ScMaPsCv16U5LHRRnpJk1aisEGM",
  "key19": "2f41TBYoH3PG5U5Fvic7Vtg2EbZmXRxW272DycUYYjBuPK53uhfQTXbr7BpJZQNo8mcb5NKwuF4ZBKKwQAFWxmRB",
  "key20": "ooyUvgQCAHJoEKK3rVjEaM7ep6JvXXBWzsgUgJGxiKy7WCEn7cuhjw3zxYiaZt4u2SaxxX28rDwncUqQyCgQqcb",
  "key21": "2YJhAnsqhyejMWfBDSX3JMsBy9NbbzVvR413wvSvgzXApKAc3fA3p2hnM67g8cfyQGiZFt9QdxYsmUfZoxpdiPVo",
  "key22": "2UPiHZAxaVW4N4U42UNnui2b8mzqWVYwBQwkQCfdvoLuCfeMw2V6L4Mo6hQDjLV4xd1H8QCDxSRquHZNZ87LCjXd",
  "key23": "3EZU8uwmVox82Lkjx6cB5hCjDNz6VRr28S9faqNfv4rLokCdZtr2ozpopX4rT6G5CQZyXQP9nndp3f5fJmUgnwxd",
  "key24": "5sgogwsBeZQhSftS7cewWqJeAvoVGkhsGZXmxyJNgw32h6NjmLph2aosUUE2gwfrzZ8PiuGJmXrkxYsnxhNceTpD",
  "key25": "SXUZGH7Mgx9HVJdC4VxhJtNq6jCbfo2GCYuxWuYs4g93o2gZ4HNUr7FhhFw4q4dyY1PqRPESj9ZUKrSMor8h3S5",
  "key26": "2a9ZSbQK6fhDD24DkdeK6AejLATNm12YXo6SDcMTA5kRvWkaWKGgJS9wLcmtHobAHRSmoGv6vaWedFdh4DAhdREv",
  "key27": "5tbCNPVEFGJ18KLv3XqKWGKrXhUvqbNfW19sFT2jjwWMDEvipJDG4EkNrkCC1svseDj9V4SRQAovC7kx9SkRVY2t",
  "key28": "4wXe9ZdyKpqo2raQtfu7Abbz8k7rf2J45yp4RUVfauztXmWhCy5yvjmRraypcuwdMs6VHK94F8t4k7w5vM9ipV4L",
  "key29": "4nkiibuT4oBAu2WDNviviWoW51QpwYE2MfJXvYihya4zX2YGpcDkxVi1YSb7av5ehpsDKJVxsHWq8vsnn4m7NJhk",
  "key30": "hXRL9AR8hgcgbU6Tahz28jizhLYNZXM6TXBPWEeLKrZRbDYBqk4dMH9t8j3qRrF4W6eNDTejqmNwWtjA2u8pUwx",
  "key31": "59vRtiMdnoFZWVoeZekYCqJJqKmrC7gWKMsDyjk9x8z46J9ubHVHa747MKuNCx3Ht3XEhxUTzd7UuSC7RHRFACQT",
  "key32": "2xd4XY1nK4BJuAbXUo44Tru1cmCx5f2xBL6e8aRkrChbPzbxLX3vuRGK91snRWoJJKqXzcP5LmrX4gDCMpLe7m5q",
  "key33": "5Qa2cTNSK8XkGM9cACntcHqYVtaAUSomcfVx9Nn79VsQs6WY2ESLsooNEQp1guVfgaLRSTYBT54MvGVLmPkFD69x",
  "key34": "3sKPGzZ5piZ8YPRYVrhJpnCRhhesk4zHbkQPn1gYtdfVnTYYsLt3bUJ7g78wK4ufh2usxo2Ko7oSqvoDswBEJxnB",
  "key35": "66WbUvjSMjGn3bFLfC9YbVUXVJTsMk1hMQRDuRymb8PWN9Ep5LdWT5drxWYUf2Ut4cd5yki8CJap6S8CqX11oK4w",
  "key36": "1HiKJPbdcAAgvjSwo1y6ekpRQz89x6VU5SUgdGFWsLuFjqTBwSfhLqm8XQ7j6FKUx41hkfhEWYicC8Yjr3EcugH",
  "key37": "4hyprAznibiqi8wQ2zW5fun1LYcUxpDJk6UsxVbqaBgdmkHpxjawsSnvYohfzpdNnwTMEZnhgwVoM47yFXmpwvSq",
  "key38": "3bt9a97A2dUwRKkuxTuyoTUC2TCkD61U8Yp4wRkLikvb3FeNXEZJfy17VrJqkJjzJJyjM9VNfwerWfyW6ycgdPCu",
  "key39": "4CGSsdKfPnC2UJkVMUTZoANEPwW1auxZQfXVce8qtowbzd2T6ax7aj4FDwRtUknhsJ83DT5QG1q59sA55EKZ6n9A",
  "key40": "2k8T1riCSvXtoBzjG3bnSBDrdgm4D1diGPUApARteZwTor3wrEDqi69JAhwzZaxJFQPsBMJczGfyYH92FcT95vyw",
  "key41": "42skbJ27uc22BVs7MV7rfDX2EXFnsN8YJdctATMxkSrmdget8GbbCUvowkvc41jJDBKwrKSGYQfDhL967Dyq3FeU",
  "key42": "5vP3EaVHiRVoZLDakxYDs8ecajxK3tMx39ar3r5N7AFyB3EdE8Kvp1KexAr2hbCkEsse3Kb4CSCrwn17mMJrTyv5",
  "key43": "kBDVbZ9avr19krDHvDvE8zpsp7ZJNDPQTtSGS6od3ibQZ51jhMKqncquyhXhJpbi6zvYK8drwaddRpWrHBSeRhx",
  "key44": "Gv1CSB8Ppxtr44k5EnKv4NXJ5HKKLL2zxPwAGRYWCXVZWkWUtRDRN8CTUSKEc4RXaouv6TEa4uvtdXpvj8D5oS4",
  "key45": "1C8nRwv3xE4EwjZBgGkVauWJLv7ng6SY18strtdjU9XcUnHeJRDcf5MrtXfM7GfSR4NjPBK76mCDJQDYnNLXfpT",
  "key46": "3fTz49Bu3Vha9KurW3S8M8zNUyGwLnmtxUN7QDU5BTBo78RXAbJLDu29L6WwPLb9SV7WevUswYKeEPpJHFH25yU4",
  "key47": "3YiT6EoitUP1qSYJTs6DDLRjVKajBDWeVEJy8JFbYUjEuzLLLnNnJLfn614hEuNaEATPSh1hkoqNCpboc44ycfBy"
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
