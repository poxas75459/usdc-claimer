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
    "3uN49RrzqwhDHpbvgbFuN8MBuTf3LX1pdYPdnZzJgNzbSeX1Pq3BtM38zZ3D4ix2PMLfTxNC8QmWeW2Z4B7n7Nnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wU74CVt2zenpiMnLrTWfED9WDwAvBFdnwKWuRJ1pgbaTmwBPP9KfTk9n1TKuj1Er6h2qpfoEuo9FrMPYMrCCcmB",
  "key1": "3iT645fdbpQCb18vDjtmbRczwwMmnyQTu1Pfgohmz9fVSWZWuDaEvF6abE7CELiwf9GLcR8Q3ZW6Qtxf6WxaYY6B",
  "key2": "YWjSZ7PVmxigkDA1gEHRFL7kmpisMH6XDfAgfwdfGefM1jzdRNjjpAcVhfWMEzKgxU8QFzd9zP4FTq6eqHnPK48",
  "key3": "W4qRWpuP1A9LrtfFo6vV3Q76DtFNp6G7DGQywRrMm8JP74QBhBsYAUSeV41fLaQbFSBLNJ6aXwDsZw4rVQ7HFpy",
  "key4": "3a4x6HqAC99nT2czcWHxUmqKbLVPheAb336NeVgwS8LRDjmTU3z1WYMvzQdzsSVkiGxFVaTnVMMBteBd1bkZW2jU",
  "key5": "5GjnbzkD9PqEiXxwUvfkhcciEZTMXF1Bh6Xra2PkzKSYJixL2onhu2HRdCYdmFwTRCBXrGWSAokNvdmtswwRGgPp",
  "key6": "4WxnqPfCMETPNmjpM8C3XSHC8whmtpaLYM8oomp8m4rqqcFeGEscNQJKFyNDTbnTs26PhNTy5mAfcCKiJvciiuN3",
  "key7": "3iP1brEwLhxGnVg9EZDH3R54HBFVyjfDahSzqaVMhHiPfNtn1LbzzB9P23s9XCfRmfViixezUgrXFf6aTbwdtjaS",
  "key8": "KDBxik584xQYx5VWPfbtVppqQ4CS56YDhYiKbWUKTZ2fK1MCp2MSii3pCN9P2r6gp5CssAHvZZnpJtpn3hbGgJn",
  "key9": "3qoNtD6rimVebF7FuCEHuGi113UuL58tLdoSnsKsTKhPkCeKDdxnkooCy5BNhnQCMfTcZaT9RWveNY25DS2pcgNQ",
  "key10": "2b1WpPC6bYZ1Qaju2xETGaXaUMH8kKs6f9URWX3j3Ee9azAdsm4R8VCMTXKNAseamFNVX3ZzfcL9YnwezqSuKhEL",
  "key11": "2H8D9e6R7LqFvUDQ8ZDii1Tnzj9JGWbsWbtdmQ8WRxATKikEk6gDih3Yo8xeJ5JthFpGMNxLV2YRCwQXg4L1krE9",
  "key12": "3129HPhJpW5kVmU8CY8JGhATDzgZ7UYT8NbkkhEKbdx5ozPhhwCU9d1BwRZ3ySzLkFb2LoVFmNCRRtZk7cNnYpdS",
  "key13": "EHtdWqkNAd9dxnPtG5giPUaohQxKJJySZCB7DaSwLkCumjhkReJ3PD8s4RF9drSzJATGJsPmx2tqZWNfkqxJjmv",
  "key14": "3Q3YBkVDuMNd6YDEmYNoAj6BFmbVziMsE8CWHRYjuDsdsxRgAWo8k8xkZUfrLkWgQP4FskH8jrS9nCFsmA9sR3zr",
  "key15": "2e2TVkzdp2hB6GUKacYJ2r5umfqt7YtRfuCCHskMfntvj9pxGRRTYX9tQbJLLL6dZhKSbN8v6vRB2MEFQhccLVqn",
  "key16": "2uVhT3YmRojYV4mf588DyyvyQ4Lkwdn86Xms2cXsGxDBdY3SfGgMCuL8djSkeq6r5DCgf8sivfD4weJzX8miBBpE",
  "key17": "2zTPP3aJYi4U4Xe83fkUiPJK3Zwn7ELjaMV2ebMaBde6dhe3YJYB5QrEy5ufMkfmsPuUtVECzPx3oDbr9XaYQNjR",
  "key18": "4GgHRwLYnkseAVQFyEMGYHJVS8zs5MZo1AcFev2Wi5f8WvoaU5pmYvsbjxQcku5YfkZWHpBYtyHNiJ7zqeU5LYzB",
  "key19": "3xXB3nz4483r2cVry6KsSXEqs5unuWekDf52JHjjoMhmenvUjpWmb3gi33hG3aVZs2zdc8PtiFeuSeVakXZDrV5r",
  "key20": "4UpALamvnVPfwQd6JooMBcQySx17P8CYWP8EDFuefFU51hfq5NwF2xXP6oQMrsn3vbZyoj7MiUZViGFNBkAeNMyZ",
  "key21": "VHuvrsEA6iEgh2zufxHi6aQEPrqcx76dqMPjmerRrowkBErKzBvkMsvDMq2HKg5zLV2WAzavTMWVZPU92snmkv1",
  "key22": "5RmjNwcKiFyHYSGMy1eDfob9nfNcEz25TdjJpiUBgPugDhZej1uoFGRVnCkT6avb6U7Tr9Q2vBP2JwuiRAvwnpmV",
  "key23": "5Kpux7EXYTQFsrZ7jnnUUfnSf81m2cSSqsTRza7wfDLW5HTnknzY6VEa79LX1an3H39GT1CgXMdaJfxpdp1f2Ccb",
  "key24": "52CtWkzJqb6TUr3PMhnvbmGdEcegHVwg5M3biWxXHF4ghCNL141hQnG7pZyKVryfWZ7vPZr8aZK6ruDJtbzuBe1p",
  "key25": "5bTGwj23kCri7M3sApMb8Hu7cjXDERP2famgmhBkBFgj3CWxP5uFct9jcyxcfbYGPyDaUyXfF7aJH78Vfj7Z7J7y",
  "key26": "2oCTttQQnLHGNUp7aX338QvuFgtuLT4ZroLoM94BJKg1PgnWxPf6SoXHFNfyfKeAfpYQzoQg8mjhnGcy17gDrYm5",
  "key27": "3cpHaBwVxvobGAMczX3MCRnRSJQp1TDDGczH7yVWZiP1v6CJXsQwBbYRwcPiTy322H18eKwjUeMhb9sxW4aue6SR"
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
