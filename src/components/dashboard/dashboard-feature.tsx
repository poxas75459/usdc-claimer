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
    "5HSaPDnsXBCRoRx7Njgx4wpMvZSRsHL81giDJpBh9hozyZQ5nBGhmJdps5uDYi1gJqdGFgtParUdQv23nLouJSQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Xsu28wo8XXX5sjALZLzrfA2PvHCeV3FMBqzYDQx1AXx5zJdG8DxkpfbqCvvHwVVWogpuxxShczYoLGHkLAqnRn",
  "key1": "596qzZvNtFyKmCa4kDFGMtheGKrNE4GQBNA5omX7QmJ7sb5bPdNk62vWJiShDEANWCZit9xRLb9J5btRXUuMZQsC",
  "key2": "4D4An2E3CMsFFBLvb1rkNdyBxMqKGMbXUBC5TJmSHTP5vQQEU7zFSu2d29fziMvQG4sWoPeyYGajjCC59yervLHr",
  "key3": "5S1vHSMcPpB7EYRcG37BsgYZow1mgyCboweayxf2WnuByFDPgDQHBVquB66HpyxiMx4Nb53Be8Y5FuNMef5yw9Ra",
  "key4": "2zEZYWGeLDLEfhJK4BWLZsvDTAfqhAN2YyY19w3HATUw6K7SEpeJF5eTCxug1G6DJkuZLPBtqkV4jjZyn6X6C1Dy",
  "key5": "2Pt2UWPq8XF22NYW4p6w4RNEkB5x7GUfSs6rgnrZndszFuVVMFbzM8wZNqjMpcKhcdCye3UBeCdgSabKKyNySrDy",
  "key6": "3wo91N71DgHW3KKXz4LvKfWEAVTaFZ3tmNemZb299S2CtvgsJu5hgdjkm5DW5hZexuKVmoGBXJR4yRq5CP4Ajgre",
  "key7": "2Zkiddeu9GiLGysVWhhMSKJLsdFxXMTDE15zfx4JiooXPGReuvot78gYJR1MbPr1o6ru6hYR5p3QCH5dvr11gEZm",
  "key8": "5bfDXVpcAp842QBFnw9i8cDfXUqUD4DF8RuVNgwk1rYeoYugLjzvBGHg4oqbMUUGAWKv8reuCt5Da45SikDz3PF3",
  "key9": "4gi8gv8iyEzSFKY5QogdxF7BzbowgxzYRugSQ2rxinYFyVRDKeNQhEUJUXa2UktkaFTNMTVXvuvk4ZDnasFcPmDe",
  "key10": "5A3w9TwPQUW5vvitBYH9hia7fK4Qa1JNenye5cKKfadjuBuaYCYSiqQLnzCfnhfCQfJtGJCTzMPc4CyHhgpKEz9n",
  "key11": "b1R1zcJsMhZP3SCkmdb3hek4QZrMoXR6jrh5yKvJgjBnhN7kZh6jHgmhoZmerbKPm66jmByY9TMJ4v6EviCNWPW",
  "key12": "4RbtZ7NSTW9vqDyV95vgP4TzHR82d5dc5qjMF2VXfc97PB57QVzUVHyjZrZFyVgTJZVkKWCc7xKpq9ku7rRj8FJe",
  "key13": "5Ch245ct1tywQNxQQPaBVrcmVhPxbWVXw23nVRhDvWoHdtidj7jmBHg8P47erhnDRohh3WgrWNxoo1DubGepwJt1",
  "key14": "39s5Y7rH9aKK1ydaKU4DTnhmTS9Wjc5JJnU8kkEziaiYjF4uoBiV6dnJMaS4ZBP8PbVEjGZTwBz4yZmskUJDUt8b",
  "key15": "33TZuf6SUyhQ2GU5TyVVaPmHah5bBfgoFSBtcHCsZcEkXbBh14GiZ7693FmAPUYtHeetrfbK7axUC6UBP98tDP4D",
  "key16": "43wGLvtMbao6h5KR4ENK4FP18hpmUXGqMyKe2yJRgMQH5kufcWq5fG4RRnVdK3encYEZSixnZ4yk8uzysBgk2TNR",
  "key17": "5kehY8QHdCrLwUiaaDmhqrzFRhjSkBdUuLWDHJwJVSKHR8vGZYrw3TyDkf1598v3WAXwAPcdmXvzoP8DyQLyayyi",
  "key18": "5Zgqvx2dQv5CZzr4ZwoPcLAM6JKS5277VGgVRxbGjHMN99YTVaUjwvtVfg6aQSetkAh19LkyfY2Lj6YBwZoB3T7L",
  "key19": "2LPZ9wSPbyWNx2PP7sFv32E4JBEQjnnoB9aJ85uRzMr4Mxmxc1yvB9fDDNdYkYXZpFi84KiRptXJyiARLGAGALCt",
  "key20": "4qjRTKa5RFxPy1q7Kqa5B8dHWy8gSY2UhQ9oDRFTjczQd251BtJsUAVBhDbp5A821kwTJ5NsqZaeRRQjGV5CLgsy",
  "key21": "2e9typxJgPSrbiS4vVjdAbHVd9S4KzQobiRpyih1a5XqkoyCgP7LhUhcr7mCCyNDh6FRGMnM4jeCCWX3F2mQBva6",
  "key22": "5bnYpzxtKjwdmSKjJ4DzsHtKcdrb1s5HZg2dvou2Zw83WSfn2bAfY2QQGZT9y24b4xhx2kmzokqyyHUEFMSEK6Cu",
  "key23": "4Rf7ekYY5ADL3uuKgqdxmFHMt9DtJtYuVPQAvmxwgVCByQLHSwDnWLAA8Co8HvPgACSnushyd7exC9HNRA2JBaa8",
  "key24": "2p4jA6qEXGsoETHLSAxCLeu29nYezEi1LjToa6K5KKWfQvwTrACywLt1Bd3doBkdcgpRi1WTvN8dAZN7nodmRUPY",
  "key25": "uztmx8U6HgGZaQycJuL7VKRxn8ktULxBJioqBYThBPFCYVvepqyEM9QiFgsq1Ae9sCG4obJUUBAwcKzTWM5FyQe"
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
