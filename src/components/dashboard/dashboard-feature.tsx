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
    "DrhT8GkrNkm1dHrP9Czm7BWiy4um8LAYgSjVhf3qFQ8qBu5hr6uj7qgDbr3oU5r7U9USiVopt2fWgePREV3BxWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpuM954tAvRyxt1Rp9ZcyC6irhAw8azQrQRpDec8vute9EwzLwL39Qtmyau3KKjjQVy8DvBw5EueMXTqx6gz7uT",
  "key1": "2vVj6wShw34RvrZqtL9LVLcwbq1rKedWN3zpFbhSF73pzob7VehnyW8BN1s5ERcpwsCM4j2mD8eM1pMzCqm99uc4",
  "key2": "4XnuDhWahVURKuo2cTPn4fc5m1mNdqN9GrjWgkRNNNdpz2WGgUFMTQfuDAeC2jwxUzfatix5TJJ2mba4ZB3TY2Nc",
  "key3": "aRsc4MGWv8PGqArZS9AqdMwgaP1r9mLMLoocP1PD8Wd3heU4ECP8y2dVRusBpNHhBGveD7crqTNWKnjxacPrgw6",
  "key4": "z8MP8ga9mmgdBf854GBfHUHpSrjKNKQW9u5yPnfGjeV8bxHaDNp483vSkdXTEFrAkZEWRKK9mWsTexsL4ybxWq2",
  "key5": "SMtS9VJuo1jAXT8gegUEpRm9SoaUxZkYLd9rABVnSTETNHbMq6Yrb5v8d5k6iGF8AGhfsG8T2BM8mymHvao2h66",
  "key6": "5DtcmbbDqjYgewRBxNahRAymXS5eRXGitPXG15FPqZeB8uqGeEPDJ32H6JPiUUAnMkEZFLXQnmk1bd5TuAzEMnM6",
  "key7": "2LhDEkPJjnhRvXhuLKfR4Buuh84nY2Kgjv7kK8WpppRYYzQMGNxfMywLEcyWxwzgv7KH1cZr9gGEKFCoRsymkA8D",
  "key8": "H8Do1pzCLbD33Mh3SxERdBbV4AWa3gnmpkx8ySGh7rnsG9iGPoc1aWSoZig7WqRYW4w85QA3hyg6hbhnyZhkpor",
  "key9": "5HCuGxv5fDZtzUmUYnRKX9xZpLB4LFWixTuqweWtPxah1GyV2igA3McEEdisrUB46neuhtqkA46XCDYHKV2dcG9R",
  "key10": "kp3pqSLbts4gDMUYA5jwnNCRwZkpm1PpaSrFk2Z3c2dYEvoa7MuHFGV57oKS4B6MiRvqCoWLCNefL6dqzEQdHCK",
  "key11": "2TSRzB5Wtivp7GunaSUULHKdgDDwTV6rzcBzZkNKRoP3GqZmHEoM8xT4RtLZEv3ScYHB1TdCMzrpAn51TBCQLUUY",
  "key12": "6HTX5vQN2jifL7Row5JZhQRx3rsLgJU6dj6YECQciv1H1VybQkJnbtQg2KRfHwuYb1n1X1LzzszwTkybz39g92f",
  "key13": "24xzeGL782kAUiyVHsuqLAc1DRHyq1MVAZdtq35ffJTQ1hgeKCdNfTy4qeZTng9zTM92cD6VPqDCkfJes7wfMa5h",
  "key14": "4AdTmLufVQXPApMhY1ch7VyTUkzrUkutwfL3udNpP9C5DYYfFhhnn9ioGTwiVCmb6vXqWeQtaKpm38wWRqUeWrF1",
  "key15": "4LJmoTUUXeMfxRXpiWjCy5QUgGUJs8ybzxzGrKP3572Vy6DADairz5m4TY2NdWM2syJUDUWDW5T4fRhDHHfr5jHc",
  "key16": "Vih5cpVLnPS2LmvVqvjhk1pMoiZrCvjgE1h7GAJGaLqV1b3hr2PQGtaaUzTmZqTuJ6xRT6YYNqGAQhPKNeCepHC",
  "key17": "2wbQfVRfTMnMEh7P3B5JC6jKfoha2HKC5PMZm8PnfEwzn7yDSTdu5EdVKrw94eNdJB6WygZu7YMQV1fCsH3By31F",
  "key18": "53XXTPeWaVwDgrpeQyxkA1ficJccYnJgYkteruYjtHHWPBcw35soWfpyM4gmzUY2oJAX88XUy9LswSfmr3o9cstU",
  "key19": "2Z57Q43kELFvkM4hHAnjUbNmGsexQgNqWdM2R2waCwa7XomE45Ghk6a5J6s9g18J5GUScYmaiheSMkBwkHZfk2y2",
  "key20": "2moRP9ooqiC4126LsNqgwqmF17YTpFAojUDmbc9t4PkN18FpNf3byyLyMmh6Bc545o1y19EUWRY7pYaR9HTZwbra",
  "key21": "59TQ8Ff8bzGLfWe8QC14LuUupM7YAf1mVj3jG8hEnwDabsSZZtCsaryK5uhSXHZgXpg52ut1yoM9dN12WqWAgEef",
  "key22": "4ZspJuWyagp1tCyPBzTSgD3AF9oKiFvUS9kCLAsoug4RPKwAc4iKafcjQ4wemAz6YU8tde31JVs7zsENAgw24tZ8",
  "key23": "u4CTYxdFxcjrkjdaMrUZtg2yGAyNiTHFr9EY4tpK4QenWe22ErwwHqSaTgwoeC8vkMHoougwvGQGLccqNazKNWV",
  "key24": "tcuXSJ6Aw4h1SHuU1Ui2y1Gr4uxXcBEVKZNMS1BwtacBuU7yMR23cAUVuVSazvn1bCYuVE28SLHUANCXDzKPjYT",
  "key25": "2gQCsagpNEAa3TZmbS8rN3nDvCLyZKjBLXQash81nB8At4dctWtUrP5EjSyT8ynbkrhgRpeQ6Vi8B4P1RsdhPkEy",
  "key26": "65WwTUYbS1WWyZUWfdsbL8UYvSn2gBRMedTkGZwUkGwUPxD8WZTaiNXtNXLnDToWV9hKBviyfzbDuBoqdw1GJQaU",
  "key27": "hCkJHpA1DLgd5wEnhs5NCPanEvQZgGWckxyjrHkG6L5V3VHTUrbPknsk8mo5DqRz1Jmn86hs8nneMZxxkKc6ieM"
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
