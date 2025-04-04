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
    "gxzLEWgqUCnuANdJqy6uySWQ3szA8e58LWcze59EoCe6NWVACaBn3Dzc61TCTvUAfBMDRKSuoLypvwyCEb4yvbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cj9GGozvPoPYo6c5FAQDedqaL82Azue2KTxyhFaqihoKgPsGoTKN5EsJ6Q2C9hxnMT93XFtwsiPrD69TjpKbepK",
  "key1": "37MV7UzbRqNSi1uXhx6HuBNdKW4LmhXQCkaCvzox9H4dNMGQd5etngBKgRy5GJzUhBg8U6JniHsVQg63PKBLtS7V",
  "key2": "5PtA3po55BGt41TeTunc1PxejHFF5sLdjM4r69fZRms1wUzM2EYTJLEFbZYngZ8kbgwTRq39xqS7xhHbSmuNDtPg",
  "key3": "MMA8A2zjDqdadmr1sZdSnxzbZvgWMcyxmeJeWeyFsthq4DPtWai5VL1LzKewR9ktk5jbfkB4CZhZmzHkMpaCg27",
  "key4": "3uAJ85ihMzQQCyfQVhLgBR8PcP7SmVjxYWPXKhjCK6k6NVcMMRPSaRjALU5jn2zPMDsSrerESgpnwnk4YNCfeayb",
  "key5": "4UsngFUnquauLTNd3TSoFU7ZugkA3Q9cA9zmiXq7UPmBzSxpUYVqPepM8iLTYnxiAme4W1XAU1EL9ob59yTYLLzE",
  "key6": "5ZLuSTxHdmHcrmF17b9tzXwiTZEHkmFk4jF6PXZP4XismYMLvjbB3jRY8x9BBowbr5qLerq27jCZKLfmQ8VSAHxm",
  "key7": "61DbKrw4RmCWpqjUx4KWjw6cYVa61VThraqevHiz9x3NCZvmZw1DdbgrrMe2LYcEMx3PEAWFVeuAc91rkiPBMuHJ",
  "key8": "4d4SreaXSjtwek2h5rPSwVL8nLdtBUfyXLqZ9PneJ3kY3DuoWne9xLFdyQoXWoUjqLqPH26P1PZVtwmEKxB3y8fJ",
  "key9": "5DzFnY6m91GU42m1YjohpF9R9uZuiV8xntjJzh34q3zoBJLLjZt3nH3Biwc49T1tKt4VfSiZyenBncEVeWQtLP1L",
  "key10": "228w4ciFmtWT3Sfr91nC1C4KuCZKRUGMPaECmEaMzYU4g6ogcyDLvj9GgTgg8WXXbbzYG7KaPABjoayZU5cx2WAu",
  "key11": "2waEgoX1P5m3VfqTpTKkKLYSF52bEYs3pLi9hs7362Rq7NCzHEpFL9kVyKprhsjNX47ATDLwkWMu9t2DEk3b9kiR",
  "key12": "3hhUdvSPmRJPVPWpQgahHYJdJVDVwtcSws81AscGiUpZwk3xkpHFN7KhYkT4zmhgVA4HUnFDV3PLzW1dSe8ciZVh",
  "key13": "4atwSVitNLfxt2cGYBL4cAQcEeQRukXSKHN4bP5ZYdQikztoJCCv6wgWPvekmQNLLdTMKqnbY1ub1PydrvUwwawf",
  "key14": "3RjGMbJihEnmRvVzizyJcKTDZei8y5U728J2cRN1UhfycWgt7H2SVpAh5BV1v4Lz5YncEGKUz839RVTfTMCBC4PA",
  "key15": "2RxcZDWz9y2BzvxHwyFq7VNjh2mkrTvkFceLFBeWKVc6MgGr3VrfdK2Nt45KrxQbb8hppXo1qh3aThd37n1jRH7V",
  "key16": "3L2xfpiLDtkkSJ9m8YsgunMimrmnoeBLEV8NKFTX8d4VbUozq6BQLiqiMkP8ReweJeqLmLkibQ8Au7boMrEnymKn",
  "key17": "35DEHQpPJ1sQg7Ty8uRoV22ezSMdcfdirZZxwz7ZaJAB4HE3iA87oHggVPR9ejqDkiRTMZVTzwvUbbCbfXkwAqD5",
  "key18": "2fHYWoGj7BBhjMhehZz5JVDuwT4dq3bTeM8kUqhB2qyvS7KsEcqUoPhFZpkSpNMpkRbPQoFHds58gVSdkx1HfTyx",
  "key19": "3FJjZqEn99rdzmESVt9xRJs278iKXz1JunfdWTKxat68nC3z57qisS9RJW72W5MBicSHXNvFN1dSCr6sdzBPRTXB",
  "key20": "2HqtiDaoFANTbrRASw2NmsVy3i5T7XYAfviSZM2K8gCU6xWRPJUgxtZpLVDETK7zsZNVKmJxiMdRnTGaSiaSeSht",
  "key21": "5v7NtfLXRneTvSoV1r4uBfDMcxJNRwRzwKKo9rwBymZ8azzYEaDiK5dxKvvvHt8yZysLTFsZyaACVmoZjcYYjura",
  "key22": "2wWfJq1itG4cASJeJ5BFiumBCQhwsf4J8BcceCqsPenu2YDa6eYtsj959hZ9vWV4CmGEn3163q5xcvWF1w3zTem",
  "key23": "2YU9Xsz3WyEGnavEumtjhdg5aG1pgFyLoaww3w7dBGf7FZPuYNV7t47RSDap7RqYM9mcr7Cxm96YKCbkvq2Yo8bN",
  "key24": "3SwrqiZdGCZnDNAnrDBjZjYXRLJJQRwtickegMBNn1pzV6C49jomz2Tb1y25YddfqoHTqpeYnHVSKSF4cxQgH1BU",
  "key25": "4PPPeMgBfazDPQ4PDDixmrawUNNvCBbcJUMMxUHPFLfiwcSm2XUkcrnQGfA29MaHFHGGqd9LKLpnb3L9bdgRGoDu"
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
