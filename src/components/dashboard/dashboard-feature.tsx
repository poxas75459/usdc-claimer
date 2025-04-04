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
    "2YaMnHsLhcr9ReQ59uTLkZAzbiRYX3BMXmmMJiMZx6ekKykxXuZtcQfe2KL3k82sHxDi4wviPNComwBJtJfzTk3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQEpjs6oB6DRwQNtbehxrebfpbTkWoFo2YWQCXax92DGuYHfQMJHZdE2Up6Jd1Y8EN5TqAWQmiVTVkt2pmKzzCY",
  "key1": "4uPfKt44H7VQWMeyuZvMCpayuC24TiMLjyZ2gjnahRV9QzEL75R1PuLjp66TWodXmbyen3MAXqznxxveeEgPnGAE",
  "key2": "4Yv47MXi68YZb8mm2EEm42zuzB17GaYeAHKD46XEgtAsemtN6zrNAp8MWYrUMe34bmi6HSFxJpuqA2HUNHZRv3Nm",
  "key3": "5XKZeWc3zYzHDWbm2M2ZMUdpB8YT3aGn5NBiowJkTdLCqFDtc1mSw15o4apV7x4mhBMDtYVEYTN6oPLScky8Khq7",
  "key4": "5WhohdnXiqB6nLneicJbTLWeKrPNz6s4J29DpU6iA7toUcWmbPD9XMimhmbCCWXhE4R5FcUjGq95X3VvWUM3DbfW",
  "key5": "4xpZ6UUYWi65cf99bTo53qZdDK8Lzfp84L6cmEdAXzUv7AGQxoP487f2hFVzG5tAJcpr81uHWk2CUNnUXor1DrT9",
  "key6": "245nB38vJfFQwvBbBZnkbZEXTs3tgv5jLbAMwunZDmYS25fXmyVukZyAU8F9MYPuDk96QaXBZ5bQpVYinLqCuqvd",
  "key7": "koGxNQpjwSMGZSa2H1kF9NxhmhdrMwSd2bQRvAU98FH2BYBKRKzHCjg8ko5C18SRU8aWpRPqkunkzqPZVzamHku",
  "key8": "3wnKm9op2j2j12E1q3uyzF9jd6siyBzNJDS8Vgrf3vpPXKfnmVBa5deNfhLtuECMPsbcmK9Xg97exUMA3FK9DN13",
  "key9": "3Bo4MCt5wdsuabVZsoLZs3oNg7pbxerhoCfrPVrheQnZ1RYCFZHJe5mhnhYfvcM72Qv3CQ1xZkVqmMwZWrATvuwG",
  "key10": "58XF8etXujVzWjHijzatm7Lkr7iMsJnr67MbDLuniY2ck3dSEV57yQcpH5o5GNG4cWZPu4mTRpPNTxya1xZNP6Kh",
  "key11": "3QoDvsHL8dvULsqHXaVLiwof8YzuxRAsr1n1W9UhND1PxRPsDg2CdgjBYEDHctUsrHKM8s1hh4tuwgAKCDrWatFc",
  "key12": "5w3AXvYaS62RJRSPPhAoD6mvuCmt3tSQLerYRc89RFiG5nfsaaBM1svwwnEmYEGhiJWwYi7YCMQi5dQKLMhWVGqD",
  "key13": "4SzMyH6KxcAhUDmLUsoXmjFXjDgMsKTcqxdAPnSetQmPZbENSUKSBsZzP6N4NmmpuzMqJVknpXyw6TZYcQYYZiKh",
  "key14": "5yDbSc2jJbswxND15ULe11caPR8KPubmuHf2HmJRzZvb7YrVrX8EJsQEBhJZXBp2KCJzpca6nvuVjeNqi6tCvcLq",
  "key15": "5dDf7Fm4PC8q9MXYcGV3rSXLze9TEQco5UQaoATScULja2Pn9RkgsFDdCD3w7yTbM8fAuYFc8XmPNNqfeeVYByfi",
  "key16": "65XLwPyDy4sggtLFGhyXAcavTbZGVXMadQt4SVKMvBhFeyKYuVSvWvPFgaFEBgHnLxC99nv92YHEV2b69jjiYEnj",
  "key17": "8CtUPTgTWaY7jZmkcDHeP1SPpPgzYtf1TxHDrEvS6Ph7AUjQYhZUKLJTig1kqH4vRNra97vRq12k9wGokvEnSZS",
  "key18": "31BseivcyejALqYiLRC5w8afMYb7R82uBk4yWW6M758QdnjfdgoWWkVfY9c5LBGmpM5WarKgsTQ2xHQBV8TQgf2A",
  "key19": "3n1EdyS78ergJyZKedMUZfKvrV8fk9JZHYNhNpm3sSnDywZGBUfNrabkeviGMv4aHLinekb9iJtiJyF59xrq5otP",
  "key20": "3Pzkpz9Q3pddw52xUQxYDgNg4ufPFeoaD5ZWDNG3RhqAsYAUmdVJJSfdssNCfxLttik7dTPGid8YMY1XwpxvsZuk",
  "key21": "5MU3K5AmSZ9CeSxankSEgVAnzRMKfReCPmpuMuwCpAqhjtQGcEPHamqzo5DUtbFVRS4dfVPGRQB5aDLx75B9pC3J",
  "key22": "3YsvZQWtGFrifDCn6t3uEs48K5y3t5D2Y3CvfMUrpqWfyBRPZBHqgpYaNT8rGYoqzKgnFHHa26xQmpLPFYAxZYku",
  "key23": "38KiEPqHo7Td4VWsBo5rhVuXjuQZniyUhrF5XU63vQCCopg5ywjWDLvrUiZfEg4r7uqUqWdxqaDSLg6WtEkhvhU8",
  "key24": "tbu4qMeZ5SfaArs3Y9W5DFQHz6wgDhkUYTvvrAxtkgzJSwwLzbFxD41FyCLhM8SadRFrJCetRDnQxsbyJTDwnVR",
  "key25": "4ojyrF1tEKhfihDisSu425Nat7oHWZ1DPKLkwEgQGDtWLhnfWkPqnZnB2FL4q5khSST3d36ftoyS7rHbqXFU2C7J",
  "key26": "32hVTacxreZAnQh26rovA25ffXn2SwjC9QViDjFh9tm2pLevWTa3BXaa3HHqFSUerWndXxX1r1bJgTMQFstgNbck",
  "key27": "stjhrF9L51o39xBsMPPoJtWV26e5zVjTkVKv2AvibpmDeSkNjNd3CowfQMUUaJE9v5bnqVjdJaqeXYgB1T4F9sJ",
  "key28": "CQ7Y5EgGrrKmnLNm2W56M9Tc2aVa9ovDdez9wjWsZ5Hag66c6bq98ZMpS8FK555guHEN8fE1UMFVmtzgmuMtxvW",
  "key29": "CbtAFgihEF1kF7bJv8KR3nLdE21ChmzoYRtv5rvqG36iHM5iXCgKDC7MjHb99tW6rUUSSuRGyvjS78wNg7Amdbt",
  "key30": "4VybFaF6ECfjg22Xx46pWw7N1Wexy7449xsBPUc2pGmb36pqsiSuH1E4Q9zj1BaHxCLXK5v3Pq8hwTJUzDokoVBk",
  "key31": "55vFubAvbZr7G5e8tF7eNMCpn9c6Brk28Qa8nXnnFCW7tXaYaXbYLMSRby7ZD4K8wcYK5GaBn3W8YwSwfVvut7VU",
  "key32": "5FsYh7pXrfpTja94QVALsn6Nc9rQjydCR8yR8QjvA6jq5xhyxYA1BwKHH4Tw9298Ernyy9DiJZCHpvYmVQP31rdm",
  "key33": "BC8sqWwDRu46Grn6MDWEbivQrSrgHG9m1r3iggEHANZiyDcGYmFpA8pY7Ry3JeuTvh4WpLyHBXhbDwcK48SfxdD",
  "key34": "4UrjBUEwfH4SyLXfKQ4XmJbUMpjFDsEybUrDk1xE6WzAcwCZFSJYdfjGzq9CuciwfDSB5ZVUx5dTB4EGoMdReqKh",
  "key35": "4WaziTKq4E6bjWvvCCib4nAERGL5e3N5RMCa8wDjfTuty6o8hh1F5PSk1j3aTddvQqutKFR6Qi9AnYPLHyhvFwbR",
  "key36": "59VUc3x3S13TEn4VArakWEY3aUFEidf9jzSDChmDrE6w8hwPi6FchPfprT8RtJVwpANs6WVvGbxdE2k9jmWpqVw6",
  "key37": "5gujo7oa6WXUWLS4aFt61L3A3wN8W1TMXDwbJsCmukzfF6yitAvvgrU6SNe8NqsxKtiyJDssd3XPC6yfkmd9bL49",
  "key38": "52KFSRUkB19wVeNezcpUBKJH63ok3EuAbp2reM8NbpA33dRiinRMBrEKX4hoj8sxvyXeFXNR72EGMdfZzabbr4GE",
  "key39": "3RW14BSXqR96oHuEoo1VTvpezVkCML8QUMz7TehYesQnpTrhgEEPiPqkfghXnoFnF7ew9WJuo72WE1TT4vCZF8RG",
  "key40": "4uNfkxyPeg5v8ets8L6DfJZsAcy1M794WtX3aor49Ft1vW38y4jYwAErXiSx7CwmwYjKbW3xsDR9NUHDPFiM8GX",
  "key41": "6aSxLokxmjqpFLmoRE8SyMmzS8aJ2yBi6RKd1UEpjk3jkPmQYKjRFp32znbza2xwiL7ehQK5aqL5kFG1LxzPjh1"
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
