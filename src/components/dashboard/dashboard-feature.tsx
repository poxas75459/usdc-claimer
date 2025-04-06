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
    "5NqG1FwUDBBvU994qax712xEFk63cxEXMm3kiQvmJgDsvc9ePTbLZyJT2xQpU6P4M5sbbX1gwf24SzdEUDLTWFdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qyux6eiMshUuXoWvh9g6zEGv7fT82zrQtnN1B8o88Q9HK44Fe2gLPX9YiiLdYmm4Zebfv54FMFPdUnkdfTczPgy",
  "key1": "5PVBdM227JmJM4txeuwD6NAosDrzeecGevGQ2PSy7vJkpsSWYdodS7kaZgHzBhfKvWv4Le9SDWkaw33q2UBUeM4x",
  "key2": "3TJ5iaqy7tsk47WzRMgqgSdisaDuZMisCsasns1nZF1KZ3xHM6jcjVKs8KToGFhxFE15LWNmfmdy4JrcUKzTLD4B",
  "key3": "3aG6SLhBQBTTPwtBsTX1C4HuXNLqNTRUpfcycFr52TftxNZyQaHj4je2DvhdvbKsusxkim2Wfua79fF7wh2PbS5j",
  "key4": "YLbQAt3P4JA3HZEPdf8SAkh3M21DnecQwGXu9dn3MZsAZNPtmKMKLDSqDv69DKk7oZtvWCruaoEr1dNjZvuTVJu",
  "key5": "sKNf5U7g9PWr9TmHyygupzuzcaAWE6ghMhPsiUkgk85z5LAnkL7WGwuzDtsYBGWcqfLA9Zs1sRZ8Ar8UBaiymwH",
  "key6": "2DXKcQ9xpA88yXipYMN8DDj4jAkTGduTSa7dqLyE1RqsapWVUMbekT36ttSPAhY5R2WGdgRxpiqQmDBPotz8LQ1Z",
  "key7": "5oNa3LsFncgqn36WzMBM2qfpGaPHT5eJVLYWonGfQ6cfsgcqnukhazowk3ihMv4VytRZrZ2kYSub5DDRsB5m4fqb",
  "key8": "3ryQM7uoVkzMscKnG8pp2mocB3dPaLVZfZFLcQGATV5kwaMmCz46ArCZcLmt4MzoragzB7WxDLubbnxbJZRBv7zT",
  "key9": "5vrsjjJGVV16RjPXwe1XYfi8VesnNKPWJyvDWQkscicbheJncRkdnqSbHiJGu4coRy7kH8Pd5sM4p7gGyZNARra4",
  "key10": "5JMVk6KS38bvCdVTJ8fSse8cVECdZ62duWgC7gso4nSJcsVdGU5jPUHdBNKieUUqFreLca3LErfv1ieN42P1hKDw",
  "key11": "4mHJMWDqaCFVJSWANKELvMKfRNuqJaCed23K4c1AmFCMvjcLGWeirriB5V3ehEU2D9JNciyh4GVjqrsNAvAQRj8W",
  "key12": "32RBohdfSTvmY8NjTCzXwcMK4JFukABAHczSUpVkXZvvfcdFCMuNRxb83ddhA3MMTYQECArywSVLg8Ws4xNrFz6s",
  "key13": "3g54DVDSRDWKDmWQwgtiahzacYnmwXtTRCjN4zNvMbyhkfUWeH74stqYhAcuSHzfJHuCDAUchCyjMUM5pPSArAfx",
  "key14": "3czS6r2FmaehmLZ4ubUVJ8tm7HsfVGTixW4jFntSxr53RC23kPrgjzog5H6eBX6yjSnGE8sa8C46C63tL19kMiad",
  "key15": "5JF9KN7N7TtsYUhKpWHGkvcaYfK8VSSJbmMASK3rSw9x72UDhcohkwAPF3dCzQUVDsccv6hbY97zn6jWUXYGXdk9",
  "key16": "4ZE8vV71SqDUzf7TTj5vv23VXr88U4UTkcSQYThNKxEiJPUHGbfswkxXeS91toBFiLzH5Vt269vSPA9K8FSv1dmQ",
  "key17": "3oqva1XuZGa1Rv52gUfsz6dfwjc72ZBCVqTr9UiXSq1ukFumBb886r33mduw6zPEed735wCqLhTEBCJuv7njKys2",
  "key18": "2RfdGPuRSXW1nBw9ceTv8bdj5qG7JUumQ7oEtLAGzMdmeFrAgnDf4ufM5TXtDd8Dtqw1jbeRppN7D9vBiYKbWmgJ",
  "key19": "3uCegLB4Eoov8WZum3dZEp31uqn2G7D1x3yXKZF7c71pY5uKek21fiXZncJx26jAXmCYy8GTdY5jsgHLcCZAdBkk",
  "key20": "5d2h71eact26TmtQQwYN92FQn2wig14N4dYyJQKMxnTh6CTApaE3dKEVjP7MCYUKzRXCwAXFy17n7oLbNRfJjxLX",
  "key21": "3fgeM4Vnctt8XnZHC1nwMxA8dyHGj2zA3nKjQNgTkSK1soh8FRh2akjyQVrCEFwPoivYEc89LqpguQW1Nz5JTRrj",
  "key22": "3pbv7Y9zdLCxRqphC68heTKH6A8ppKYFJkGzSfKTmhDL2jDraXU5dcPegJW1nKRkAUo7CPETykXiiGoWuyokGSp1",
  "key23": "qYohKULF4Sk2v53hNwWqdJKQjGvcscaTWzK2z9iP6FywiB6PTM73qYkZGvyLaGPuo2wSpfA5WAfZEwhaeA88fom",
  "key24": "vKP85kPmNddrJApCdhMjgXi761tKAwQfsC2ZzWKaKXZZgzMjK85X3yhgJfK7gwndGY8GutrwqjLL4gHL1Y23jXw"
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
