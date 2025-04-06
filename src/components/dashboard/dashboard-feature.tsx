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
    "664jkopCbnC3eamoCx8wwVd4JcjGiW83C22S9DV5CHyo1zMRvoYScS6WUSM26h6BHwjFyiTCyAVjw9EKACUCtcQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvYJECumzxhAg1ffWGokDH7Vr9kTWFN7PP3Lq8LjHn9JAEZK5q9J7SqEtKztVLgU6dsH6sLcGv3y4wDKdxTPaBv",
  "key1": "7arNyKKB7rfnw5HWWW6rrau7L1W9qE39d2VRaQiQRAhq1Kn9KBu1mNAS3HRwoeKZzN5MbiVsk5g8rPNqvupcMZs",
  "key2": "2MybJHEzvBTBtWLAo32TQ63v8tTfekU9jQLYMpmjHuzMFKbUYZeTBTiCfsferQDZkSVh9XHnxp1Q7ST3bRiTpBNV",
  "key3": "5pdtFi47sMCD5Yo3H7TmcV87vDijJWh6tPPRqFvf1p2HYYPJSDmXN46QtPtsehwPXJzCLPU5UeQaEpyauvHHL6bG",
  "key4": "pvPy9n1132yakLvgsU3kpiULmSeKHEYipTKM444WDVfWjzzkxBor9dNkqHvs1gYKwCtp7hEsUUzPjcRe8RXRF1t",
  "key5": "3sxWr9WQ25vQkeHch5miBgayinzSWaTTypR7UNPSmvzQ3zKj5d8rACaXJa5aN46cfkQFS4STHaVK3MJbsm9cdfhx",
  "key6": "2M5avD67bTkUCHT62D2e5ZomUUTBseZkfHN3fMbtxzb5MeSWzSwDNi9px1ZbYM1kLXCfifVHi6iidM9ncFtPK4Td",
  "key7": "4J4usSYeZnPwSU1bFNZzt7yZwosbUBSmdGFRMfp6ALL655eBmw2RGH3PG4ypdKBJsQSiFURmvctpcRjGgLvsC3Sh",
  "key8": "5kqa8T2tDqUdW24jwXBLfojhsgRope2289qBj5BGfRrFaMz8X771eN8XXDCAQshGFeWUUhBo2XgoXBz29qvRv3mz",
  "key9": "SdmRxWrN1rJr64Ey5djK17z8AkUgQ2PJpXZcNaXaw7ics1b2r9ThFRhN8uzMZFxj9YsduYLGFewHXa653jku4bQ",
  "key10": "2GxbJ8cubowydQ3cSXyEUqNEWRS1WLFigSqvqGD86CZr4mSWrC7L1AwDPhKrq4gSLqHov4Qb8hcUvKmCjsFR8kiu",
  "key11": "KznKnmTfYf44zBQ2BWRvZzXEkBJYtSPTm9XLKG3je5DipmD4RgxSBkKD9RNMcK8M3yMUT7aHNrvsQteMhvGSxFM",
  "key12": "2awm5CFYARRtUrfbRha4t21bN55Y9kG41RPme1ZdFEEsEfurFuKTPYBD29L5UB5mEmYqAhHPVAHn9Qu9RohcPxYk",
  "key13": "4fV8sptHoqVNCrqBDWZNqk4YSBCwVRJvTZiiJjndspCuHHC9241ak72sPyWhEfNztQgHW3V7KjXRYxf95MRJRYgW",
  "key14": "2ZuWSHKyL3Ydxe1gM3ZxB4JXj4FR5onr26TJ4g8nkjfpuHRKxpHh46CyJejZRQsCYCzDjna7CLFAitEzgdWKuMcW",
  "key15": "mv78EkUDTJ1P3jAKVxSERYmGnuN3AHmBnqWuAZbU1ALv7Ws4W8rAWqxSarm4aAyEjm7PTtqa4Q8Yd3ohc4MtSJ9",
  "key16": "2ccawW41zTFiKQe4kvJrQJyZh7ei17uMeksEu4LaQAcnjmGNtAMkZtxJXEzYpicQnQ1tF2LDht5buZSVQWFjnz3h",
  "key17": "4aeaeyiCtJhz6FB6gvJixG4tzt2zA9wK1JCr4KevSxzcrKL2rYWgUCyFqTKCXW79NJrsPm4paE8PnzCgAWJ1c8jZ",
  "key18": "5k3GPMU8KpNgjDDXZxnydjCZcaJt147gdgC3rLiEigS1GYaF7g5noypKaeX23br95GbiwKrmdoHLbTsDA6bPSwGZ",
  "key19": "VwPnRxsLu399DQ2HGYoLkg2Q4P83EDbzmVMiqWCLRNSxAjsxM1WmGUeG5FP1vgwP2NcU2Hea5iSrDNh5mJcDY9X",
  "key20": "GjaLQGuY5LzUsexzK11R7HTYGarjXRr9ajTFpAuD4V691tNp6zMUY1RgUhBZ8Z9ohuiMQ3VX1VV92mpgsCgQik6",
  "key21": "2eqdBmfp5rZ995Yr6Sn5d6dBAaA3edFerwMjibhUg4QC6aNzfrch4msdVR4QBKhLAsjWZPX2xR5SGhrRT6p1dZYU",
  "key22": "4ux1XpZT4EcH5HXTLfjPhdfmptMQBadMNRi6uiCXB7oqzcmfKW6shDfFZfX58Yuw8eEPz7nomZbVn2V9hAZR2R4R",
  "key23": "3PUo8AC6B9jvPaNiBsKoUkh17nJ9emDwPQg5UYdfjbzit8soxYxmKTQ4FdUM45FZAikfsRbypBjr5QuFm2Vdehgo",
  "key24": "5XVBLFb7wBJVGTWd6gfBJmd2FqNs4ZHdZDETHhBn8t6esD8oEby9aK8kBjSyNwTPSctsawuMfixEdbRYiLUknQG5",
  "key25": "2MVZpMBnmEAjK1UEdKZyQnvZ99EX8so5SDoP5JUEQ4Luc89MCqgQbpRA2PBAJPDYgm9vL8MbG8mqanTmJoMVPNEx",
  "key26": "3Gn7b8Z6DdmMU2KzQ87X7KgEZF9Y4DPN7kFgeMn2sAYfsPrYgdKyRqcQYam4dzaXZ9DB5zXaix6XJxyRyn9MCDSM"
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
