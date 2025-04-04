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
    "2jMrezyd4yg1xUyGTXK9JyrmeFAbqZbdaqDukm41MKPM3fu3sLvuXFShpHZpN8Sv89LuNkkbrY9dDGh9z7zKYjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGtz2s9ggJHHLhUNnMQhehdgSiqGc1n4VTY3sf5LW9GULFb9nkxDbqA98AV2byaPBfZhthvSY7nV38mTtdzHbEM",
  "key1": "2TRneJc5KYPVpCK6XzcEBKv1YbmVihxmMAt5LtCmFXFDGBV9znhinn9eihXoq257suj3T62aaxkSoN1fPfxK98JG",
  "key2": "45iLWpvr7J4bvTzArpB5Qpm3UzEmuwD3My24CAH9FubFgqDPA3vGsAek8Jvghoe9CSwR8y5pF3Tb3iEBkuMR8w26",
  "key3": "WhcrxVsfkre6AJAdxGZ5sZBQUvpQonFGzW3omZ9L3ofm8z8k2NtuDHoEVw8zmLRu8pJbrzi4ZMoY7e1VTZrvej8",
  "key4": "4fBnPX8BVWGF6KaqBgb5KgBou8Avd8ij6M7ReJruUshxx6RP7MRy5gmA39ajDyBxjVZzSrQbEeVhvnq9nsBrETFv",
  "key5": "5wxgAm7Bd12pDpekEQ6ba4FvJD5xkVDW6CpLfxKhLi5hYD2fH9Jj4UFKk1A13GVEMfYWiN6ZiRQ7z14y1Y7rRCYa",
  "key6": "5DNHazaezpPkU7Yes6tnCputPVu2EQ41onNdZSeSUDdE4BaAhpTSTsgqXTpLb4W5HzJiVz4QwH1eBgmE8tpUmspS",
  "key7": "3rSas7qKDAEPeNZpQKpLta1oi3Aea14qU5sB8vLEDKppBZ9Ufb9nJkgMFDKd5M4HyjgfWxXNjX57PfNXrVexokcb",
  "key8": "5jNUs7ShZqA45w6Vurz8dBcjp7xU6PA3m5a61dNVD7moEQLBrMMM7Eu6eH8EY1JYf8sLwYWNzrTQaDChtaYHcdMJ",
  "key9": "58pPuLa6615Skdzg2f6Cs9Tzstfh86CpgTUu1zgWyKyzY31MSGXSiws2BLERToWATt7RqGLVwhfMasgpgnNunVCK",
  "key10": "5jJP9WhbA84dzFgWNp1BWZn1Tfj6mKaWu5ZGRgE8CUVY3G3bJxSxfTr75corS2FwAFevssCkZdR43xzwJVKpmY4u",
  "key11": "4s6Fi1ZdnYBHceLXUY1dpEB1yqx1RFiEmBtS2qyFkYfs8EFMCgzpBwo4jjb5fyzPm434bsc4jjxFjbJXbS1myoXw",
  "key12": "3RuVSimLBUb8SnBb9Hgr2USFtU6XeomrxJ18vHW1YUTqJnxdfopYwHRGbUdQ84iorRYUTJrj7jfq6nRRvqdnP81i",
  "key13": "2VikVK2BWfAwdzs1aJ2Mmy2orgvA9QAwtA2njaaVH3nDqErMoYEH3KmNKuBXffb9LMML7BFWUVYbdpwQPtE9GNp",
  "key14": "3mYYqwcjPrgR1hXK5BqmPgpB3b9aDZEgQNECJPPdx85D8daXvBa3U7aviWTu6mrRwg2Ds3wmBGyGGDCaKLaiByhu",
  "key15": "437Ka5RriBvZUGdD5rtaN2gWT8AFaTmJbmR6d9ExDFizRJp9MY4H7Hqi5u6on2g6CakpmW71D6kyoAtv6pKNqeG2",
  "key16": "3BWKkeTPaV9re2gAXAzSB56VMQnD8SNcqGpwHLiEJ7p42uqVYJ7DCpvJyLn1T2nGiCKFfo4PKvh1qexZBvHSRrNB",
  "key17": "3B7TZ82BfqvejDQJCfbiy5XmWxmTrdcv644BUhYmnVMKjrfzr8xnSyFGJEHUxrnFTrCwz82Kwnp6rfem469s4cgV",
  "key18": "aGVxLgQzG8hUhWX639MAjzyaZ1T6RqYszfjxTrY7JiX5b868bxvKfYPTJyrpgVnMk2Jgs2DeFgpXwTheyoW38E5",
  "key19": "fv5eXDsxnmnZL4umLwhYrKzdWocp6nf7PrjuYeJk45gocqLnibsCezXW9YV9cyAFADAyoK178PuhxSJ18tK76H9",
  "key20": "3rm1jSWzfpYRHY4LhKN9MYDPsmZnRWanCGDoyFpaxQbhneAwAzj1ZXzTAMgvNhbyNQCV5954pbGraqn4zYSMVMQR",
  "key21": "4CrKmzLJmUYg6ECmNYwcRn9egxA9sb7vMwUQ5D3vs8U9XKK7bzqRx7VFCJYvNX43nKRBpoZxLCw1wS5xtuC4MXok",
  "key22": "546nnVAo9XtWa4aHiBQAc1a8AdioSHpWracKBFNkXrZejgCSYzk14fVfNjmUxDAxc842g9w5J6qe7v89PoJofx3p",
  "key23": "w9VMdB3KzUYsWrv9Jx3F1szX4c7DQ7dTe1Hf8q2Q7FJE7J1hYaimc5KMQBWijaAwA2WrYCtrSEkRH4i3Kt6TkeY",
  "key24": "2g8LoddLibqhJdmPL1uSCDALK4Qf8chzjuv84iwBX8oHf2L7NfXnLQRtgk73stY6nc3iptxJSHaZJVjh5YN1sYp9",
  "key25": "2kZiiXb4BJih2SAitebxdd9gDJHQ4rmAFQ2sCu9wtdt6dqAXUq4EtM25d66RaEBDjsQTRSNXunqK6AAfkKzNUivu"
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
