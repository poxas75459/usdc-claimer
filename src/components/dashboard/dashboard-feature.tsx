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
    "22qMCMC57tR4EMS21fgRSgfCSZ7EZTcTz8Wi4fQpv9u4t54Dz7AYLZw26i1BA12UHafFVpGaWE8SRwA13x48zkuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mXMoh1RTFx8bxbw89zckcPBe3bq6WpxfffgNESznypnoJRMvcEB5tnkC2WUHTHhwpr2jttyB6BsPHCg76VgnQr",
  "key1": "4uDpvMKa1LqMv4UsAHa5FSCXknzgCt1NYhDg2GJ7aTfAHZRe5WWXm31EnrCks8sLVFihbQi6x9FW3dB1Vwed8obG",
  "key2": "3wpUdSPLQYupwGmg3R5nSh4VRwzqV2NV77V3sFKqQTZwiJLfCACFbNohbEZMwRHtAqi2s3PGoH2HAdYWQ9wFaAxK",
  "key3": "1Jcpj4iW4y6vi6yGBaFbBp5hCQUerMpPbFHVhEowpUof6Swz14sopRhqiknKadYUvV8iM47jvEJvjc2iziMn5we",
  "key4": "3N7criJDEtHjYcWe1ZxXkQqqDFaGudi96pVBaJbsPqN9bx5KrjVa5uEoVmKr7N4BvBRpo7NZxyGQ8G7tGBKtfEEg",
  "key5": "2MYZujEh9uhocmhv7jpRiBpu3YWpxGBz6u2vFh9DkSeUEHj5ddV3KF2cWsLjvRz2pLVXBQdMVePwtzWVy3Pmgyb5",
  "key6": "5V5NoMsZ7sQoAG6NQU4vVRAFA9ZUMZbF9ZXpPp4AT7PG2fcveHgrCtmdRofiQqFxhGnHqaywX67UTwzkQ1FupTkM",
  "key7": "jj32DgKM1JrDCh7tpvojmDRHJf9xe81oYKHnnbWRaT8Ret5uG5MKLAL6QDE8YSrER8T52DrT8bNxnE3bkfe5SZZ",
  "key8": "2QARv1SANFb9qpvBctKUCFxyJJthLsAxS48UHUD5BsGrbKmptxZurTPGU7oCj1FmSUZZtwVjxPpExHaNoNqZsrmm",
  "key9": "1283AgAZMiuoEFkCg8EHqTcNwxoXZwHtwUz6SpqidpFsJrYyA1ozoWYGpGEXNc1MPeGJJrZNcsSSckLEkreQuDwX",
  "key10": "5Wsr5LuodWRRYvzbqegRzzBQ6yBoGLwTMhUwLntQzGRmDGXbDK3NS26Z5rBXPhMt4N41msY1bncGvBmgD143zPKF",
  "key11": "2soZoRWp4M5NUYJvPKBZ2YTMs8t5tC7tG58L23mR5rCkg9rQtKX2F3gF4SNmUYFcENro85YTES5JX24nZAXaXCdj",
  "key12": "4WVCScdG6MUz2cfMhbPJQiQ4dsxjZZDpCSfhuNUT9JxYSd1AnGX6hBHgRCd3iNiranupujbbpwbtLeJgCqXyprSB",
  "key13": "654vomwGaXPTs4HMVPxBTvzehqcaY2T1pTC8WLtLUaJXNVKcZgek7JtbjUmDWzhJGT8NMHguE7gxwUUSyLqpvucA",
  "key14": "QTFZ5BPso9JBLxGGZbPaWuF122ZyX39hDZQDUKVSkDPJgPpDL2TTiXq9D8neTdSthuU9Cc5tnYk9vk8TqunuJe9",
  "key15": "4b7pTiRyy8D1vFTqcFqfMZB1fbpvWx6Y7aiZ4Xr3pdgzo5NtqyX6qhjaqFK4omwyDXBJ7TbBQ9urVzPhrqSYfpiE",
  "key16": "5JKatNyWLGbevcNm1ZJdnJyYiqVxbBYGJPPf4ZaxvSJLBKA7ot8g9XeNG42p4KXPeYifsvEEJtJMWgi4SvYUeZX8",
  "key17": "55S1GeH5g2oVJ1LLq4aCMj4bvZSf8E9P41P34YLVAC2yU51tjbGhJo8csxdr3iAdXTrA5ZbmdmtoQBNWDY7yKcvq",
  "key18": "5m3b1ZHUihVtGrpdTEguU9GpCANdPwaKMN2bWZ5prRCvGLGFtdYYNJtmJotFBt9MVA6tt7D2mnHY8UK7MghGKZLn",
  "key19": "4mGMqqDiQ5YMfP6Z86opPhVUGYLQo7MhaMGE7W9p95QtzvZFvD5FVoAyWsBDvpisAwgW8XLWAgNDiMk5RhJfLEoS",
  "key20": "2XgDERMnKwCdRCXhHywNss8DtnnbkDhWbwSEiy2Rq1J4Dk7wEYYhCP9mB1DNrRQ53EZvMJvfr63nThajPhEnh8io",
  "key21": "3GKm58g1Wvk4vpxCqrWa4XxFdTNGStP7sg5WMg9aU8ET3TCjSD93Kg6put22TJKFC3Gqv6KAdM7dG5J7gn4FrnM7",
  "key22": "3Y5WYqKj5Hr57zc8pAsRvcNdT52PFXV1MbY6xeeXLrJbM9NxRF92V9LcHyoG88fWTfeVM73HPbpFLVC5DVK3rfxm",
  "key23": "HVHF9ZPrnkMpWNDtA275vik195yjVmLhGn7gtfTmKdSU1i5U1uPYE8diVZACaN9dfqjvaHiHcsTJ6YZPxPMtHgS",
  "key24": "5mTibyuJcxEVE8tBVNwAiXtXQ1Zc1GM4S6qkgZyds68sThLSEb9c7XAtUSPsMmMw5LW4bZjRjyYNV7NVutHEaWE3",
  "key25": "5nf1Z7NkG46hMDVxNnVrY38TAp1dPbRs1qEQF6nsGDrGtcSCrRk9zUnW53fKQA4khjN5ryS5p3CTz3hnmk1oe1rz",
  "key26": "27dfgUusLWYRP6H7afPupMdgBupSF83iqdYZxRnJN44hap9s7cxNh3mnjcvkits3TdbQnjAZ9V2z3j6P447byWLm",
  "key27": "56gupRJZWiWh2rjDzm472rnbGNZCCM98KeJzGNPSQNE9bQsWkZG1PadJd82Q7rg54ojhabGxofg9P4u8jMLwF5Yy",
  "key28": "31eBMmXV3UhbMS8LWR1gWUW9TTZKr9mK6pKMMA3X5XovzTrFE4XMMTET3W2gFZ6W8rkVoWKg7a8K2krTvghtnKdz"
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
