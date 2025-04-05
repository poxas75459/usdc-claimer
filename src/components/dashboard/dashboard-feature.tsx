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
    "3gca7eqNtq3P71f6Z8vpVUV5WWUSU5KfbRriCCU9Jp3ompRvR3HrvYbPKjeCRrkyc7pCu2UtquvzK8xm6zHae9KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bvN52HK9rc17rrVYLEjfdibCK3zVk78U8ti8FCeiqgpjB8HFD8K9VWP13kKJUbsjkw21cKfHQBmrionJQkTNRn2",
  "key1": "p9qtWoXvJtks98uXPCTUvcm3ZHg5ToywoXB81hYb162kvsqTz61HZUjuYbb3H8s9TqjccHP1urA5GDep6DAc3Nr",
  "key2": "3AEDau1ZCKPzAi3ViRjeXo5v8NG71SooWiLXkzpE4462ps6EgGH88U5gxnppuHVcxH6T3ae32MtKm5sSTyT13v6J",
  "key3": "46XJH6L5c8qNKqEwNKy273aD4CngSWpWWeBeVRGR1r8mz9t4G9xAir3JN4HxeUr1n7Dm4QHu6hzdYHYvsmkPqTiT",
  "key4": "5RgJF1izAgkvA4qSfrsAVBqP9myiAzKLJ3MYcnwRPXyzfQujuR9Wn2xAcLCPNDy1X6NqjDfvfpcXamaxaJvBPPUD",
  "key5": "8CpXhLc3tGsvBHaD35tsjUtLzYwbWjSKYPDY8PBaJgTW1fmrtRWKAXErMDC7x2ZCgb1gwMDuXjXJdQmYshfk8v4",
  "key6": "2S1VpmP5YiMD6M9yyttRKFBFBp8Z7E5pmeRihHvddgbFr3pMLwaBZ8hYXyPNhN6exSd8HJzwiCcNMg49RDUP2PbL",
  "key7": "2cLM7MDBv3w2QDGsK7iRcpJLpVb5121xMqKFeAJohaVQA5QLpuyKHAnR9RxZVGuX29Sfvn3azxRQa4VDqUUozkik",
  "key8": "23UDmCPb2xzFuH2Vi8MgijC1z6Bm2rFrTKWETinm5VNFYNzKMgUb5rX1ptJ1K1wvuzPx2dodwpWaya9FJLRFnSmL",
  "key9": "5u6Us7s6FPUp11eC3LF5qZWGqGdqzy6eeArS7s5CMjLcqxTEqYtFpWen9WzkyzzZfYgJgf8xtM9tEwDnJKq5Qhbu",
  "key10": "4rWCRRMfPrPpGepKtZWFGbQg5MvPy67qX9Daj2Ah4sFNLGjYCQmdkFpdjUTZifn8kNSc6GB5AUGiqWUaSMFaxrEt",
  "key11": "5EHP2Cbm1NaQj3AYTv4av8pt3LzquzHzTZAz2FVT9UJwhetDa6dxkfddM9XGcpKpB2yb3ZWyPmDGo3EgDvcUMgYE",
  "key12": "2od3vB2VCnm9eKkRRYZ739rbKDEDEqA641ZwBRt27MNVbpzLWHfCJSKwvJ8mDBDkQnpTu2eNkauw4ghkooNtiJbj",
  "key13": "43cvVh8bfehNbmx7N4UEVTjMFFQMWGutHb5v9bSSMncu2x1q1HdF6RhWrvrHYXe3pb535e82s4ZpYpfAdSkeYxp3",
  "key14": "UHiPKqsvMvdB1hhnDL7m6EjkUarciya2KDN2EDW7iUvyKn8LYWjHDT84QpdWTHCnLHHW4Z58zZrS71JUWx4PGnz",
  "key15": "2ed5zg5HrEJnQqpNKoP68hhm1X2Uz1ixxgytSwSYd4FiTRvebDcH5RQVvSuW1hUuAffhDDxfhmZerZXxKGacYvLU",
  "key16": "4w1P6xsAh5mQVggJP2F6qcSMmho9eu6dBqTNinf5H3cmu1SC5299TQSA1qQuprVLYfQ6z9iZ42QskbRY3MtoEdrP",
  "key17": "5kZimyWEaFFS5Ri19NcWSQrGEAvUNHi9XgUSA6x1dutQBkyinRCSUCpj49rkyyNvL6cQQcDsegUvoNmTt7ebjVGa",
  "key18": "4iNyDkfUvToMdnCFwpUB9EcB69aUPxwmcQtnjgLAvULXJXhywvN1KAsy7cdmi6qUc9kFuPt1uzsbtcWa9MJgTghp",
  "key19": "2NDMdDsPfMVtUzepNwcCpabhsLsXXFWqUuU3AWLJ1BGj1VqaAyebDuKKhMHXQGWMtzeAtVVUMPFouizLxwysq13M",
  "key20": "3kvgXKNWbapC2PX5V5xyKJVEcBHtixABu29g85DguQCTijGxC6KAW2Cd1Xa5i5qGW4kN6Y9rev3d4Piz4XuUAAcb",
  "key21": "29JDB6AhDzw9VBUcCkambhjBofM4Mb1dwqah2UEJYnSB9Rfa88kLGzT8KcuUoZLtTY4QGrTGCDQcL8jtPN6rPi1H",
  "key22": "31JiWna13qmdikhk1qBC5C64j8dLCoyYoT25nRYzL6fSmEhashqSKAZJJeGQzzWZm9yALvhVu9JAJkefy45DEUsS",
  "key23": "3i7uZrJ6RfRsNRxvo45sXtyBAhpHsvYn1BGfXVHXHGQuu5vwwV6rmAKQeUX9LXh7uNxLtLqqp5xEjfi6SnuLHAsr",
  "key24": "3Bo8S98qB7TMhYPdAgXm3bVLfvRx2WhczXvLdagBK4SHrV2RwBmLFVTUf3BeYxEBX2sMfiU6W8phFEVdfz2Azx2h",
  "key25": "XNP1FaFHs4j6dYjgyxmP3NBZmbHSPkEpaaUkApaz1g9UvDQYxZeipwXg9nRzBEwbyJRPz9xY7dUH32uLNpewyNo",
  "key26": "2sWJ3EH2TH8rqyafG1azuoHU3nsV9yNZZnvH8mVDRdWLRKuEDcXiiCSge3knUQVjQLmA69vXLDzdUF6eouueLBxd"
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
