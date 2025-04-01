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
    "4XYjwZ3XyntLiM7LRA2H4bniqcF2hYWYc2pu1bWE5jrhxeYGpuznLqfxQAkEePFrhnsMAp1Up9XQraJoNBWRX3JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrKuvcbRCpu8FEMLF39FE22mTeJdQvwK4VUa7AGzeVG3HzqwdhBwxHXFYR2h5bG4DiAWPXqGU8atpXESrKB2WA1",
  "key1": "WbextAEQwC8tSikAHevosCQKSHa44k9if7BNMxARDVx6f4G9cgwQyLwKK1ygJoMmj3RFGSqisV7kTchRnGGyECx",
  "key2": "3xZbpocQjeCuZHaErr9Cc5DU8gruocjNwrbgypGh254BkwdN3KnyR3KMfe5HqD34sqmmH9Xm4zDvTSrSrFHdxsH2",
  "key3": "2vAzKj3oviz2zhcFaYBEMWTHVDVYFZV7RrLH7skCDxCjbeVepUNYEmYz92AXpLn8noCGJASQmqKepKsxXM4anS6S",
  "key4": "Abaab3SZ9YagPqUu2ijNagkN5vwQV5efcKjfAXbSSWoxBVYmgDGuB7AqWuYzLZ8foZsNBS67xmfRj5HjA9Jdq3j",
  "key5": "3XBpZHxPBEECianvMdxB5dKBv5gyg5h1DmWcWD3iTxm8krMKpwBC92FAzb8eMwhKqR9oaioJTrkxgztTfM9bSzeP",
  "key6": "39u2DQrGAQHwE6z5RzA4pjDgu9NKjEkVFuDSxeDUafTqBbz8F31pCFBAaeEnKkMdravACoFN52McKXdQTFDEWr2d",
  "key7": "irSLBRXwRr7uQSj8U3Did7zKG1sWmaKv3K23fvk4SdRUBEya43s4GWJeKfv6nvFkaWFDQdqg222G2eFARaebgyt",
  "key8": "2Kfom4v4uehKi4HQeTeqw6pNZbY51hoa5mph2D8dPD6i5ND72QckP3qarP4GTYwM5mxWvjy2Smx6GgFuUToYga37",
  "key9": "3CuQEqLvxpQtVSBUaaYfAxW9hJgSgLqkoQ4yUs3BWqzQPqEt72FTk3nHEPCuqCd5Hsv2EuBv8GEhQbvuWiM3D8Vt",
  "key10": "N55snjjp3purjA5BLZmaYAdk8FSRCTCpkDA3QxLnb6SBSPauPaRQKNK4PeWSvvkhoJY8cik24C6hQVodkVjE5uL",
  "key11": "54pGavo9sTT1aHDuNx98hRThhPmG5f2r7TcBFEsJhMfA4LHiQ4CdpPh9GJybLTfs2qi7fbaYYXBcGTRigeiLUyaJ",
  "key12": "4A8TPgcgRwrwwHqgo68A3KH8oj51TtukaSDmurMNTZfkKNGy7w3y5kGmTc6NQah1TTpUvrTkgGt2XNaNFFBh7w6Q",
  "key13": "4puKxmvgijiTCFSrVfJ7PGhk2uo481ozSFfzJRs6nmdWf4FM7jkWWyjsELJhxLi47AJcZUTnKZrWSfp31UR9CwxP",
  "key14": "4TFFjSZzdRuGPNHViruyFiFwMMdehLXanmYnPasrVWcvJ9mjfQ2J93G8zPKwTc4UTHAYpSewUfhNkKk66efd3PhP",
  "key15": "3MVaynLgVbF7k9GtNT4ecrQckUEnJFCtrekXfuDuVSWUEJfvtvyVubzrah73ar71dRpHVGJhBMx8s8P2WxwXyGCd",
  "key16": "356QYPLK2VJwgbDJcvCBQxgn3igtuU7JAarN5JZeQ3SNYwZZn7iXeGuqmsi6JJUBC4buHzmQVrson7cYYioGKYji",
  "key17": "GY1rEg6bLL1gKY1b1RkxjEyGz5BoKHNaGoPJE15TuFimJfQ1MgNNn3xEiGg8PNTM9fACmDLavvWhuq2uGtBPdja",
  "key18": "5CuhuyJoELtK1eQ4shAKGxsKxd1wo6pSAkxhG7xpxhfhmBw3tdtj5XwuxPZ6AbNQYU8iC9p5SnMrtCNHgQxQBzP7",
  "key19": "3jTg96ViAw86Va7um991nnChMqQdDr8BTPcc1XmS26TXdLTKiXviZbqFRS4VJ7Cue6q18DokbArrPK9bwb481aoB",
  "key20": "41kmnCDusrouGriceink5RLe1Mqi2r7hnwom1Nn4VNwDxZmL8LQaLQu2VYaFayLMzwVQmpUBUyFuax1TAdGKqZ5L",
  "key21": "4y9P3Q4szuLTbnQQ2GqvvD9CEhqDyySV9NJbbuYcDQkr1br3H7pgKeVVctz4GGKYRGBW9EPyD1rXwCzEpTXummqZ",
  "key22": "EhQmGW8n4mEYFr3TK7fDm5uhxVKnqFaXK5Zdx3dimDJoqyRa2Z4r97n8idPnLsDkpMHBULDWaz3dpDgZ7632pN2",
  "key23": "5vzoYMfyTrr5F7vaujM3nzCrp3s5qn8um6GE2R2yhTBFfeDsyzsf5ZUND9LfSwkNNWHqSQpT2PCRRFjt5VtAp6rT",
  "key24": "65g3a2GxhsRjMFtQManv2TKgWu1oGdZGE9BRysJppzqBk2tpoyefjPMTHrxkFrmsgBqHYdstBmnu6S7Rr9v8nAYq",
  "key25": "5PuYt2PuArJaLYoXBUZ4Zm5Gpei6bTDPAzUyhxntY3jKZ4ZJv8gRut1YgdG2quhiKFLRfKPmtyaZD2jRi2xrTxXt",
  "key26": "5SmfRFyayFq2SSWeVCGFbiQPboZoN8dYLZA5qKYwkQerUJzQggd4n4jxp5pbUQySBZhGBm6TF23FwGwD7kqoHJ9m",
  "key27": "5VJGxN6vd1jy4r49k3vnRJbn3z5RK17DZebEdgbfZHbVs1NjSDDg7YvnJDJ7f1TsYnq9Z5tak98xVVpkJoSMftTh",
  "key28": "2i4cnCVupsEjJnoSKaq26xvRgqf3mUXKcfsDf3oV4zzVTCRW96hftktq5BfDSzye3hMoEjpoZNTZs5Ck2U3keyzZ",
  "key29": "2jktMH8ZnigEz7F9tWqoP5i5NguGUMJEsRv6xyZCX4VuTyu2Wd8855C4efFHHLibTTMGQe3kS9zFC4F2V25sfGDJ",
  "key30": "31o38n7eb5kXK3wSxUD3XKoTTrLgjqRQPEwivnyLMjJ91f3KB47BWSXZnXdCTzANkRZaseUanmUgzNUaZzApeAxg",
  "key31": "2Jvr8ezSRTuBmnqnFBzeuq6fCwtqssfS2wB7JSzALzrZAg1VoD2GR4zBybJvda5cK3yK8vDDWrT2cH6g2fGrGgc2",
  "key32": "21CBSoYCdXhPvQCwnVxTXc4ybVBdcp7dezgZh3n3ozb2xk5BkT2pBo5vjjNWCfW2dHezsuQFmhduhyqnxKxSjcai",
  "key33": "4v2PD3mHTBKtR3cDjP3aUDZJ2NCZjNjERPeiLHfSwM7ErNbxXUUxYPq6K9MN5rrHPe1TCM97FoqPgf14NPffYvkL",
  "key34": "53mPh2tcFVmFDhmZWhouzGEAfqr9Zbmou3bSVCfffwGB3cCqUR5Y4fDCn3xeFmyUnrVSGju7xUmYrxaPfiPdVaMm",
  "key35": "47Dt97JtWygzhQkALXvL3YsuWQ2TpjCHv3JSBNMtFPVyvh18Jn7cJBdy8QYPvMp3VJmb3ajbWhqZ8aedPAb7ybgs",
  "key36": "vHeLrUMb5B1u6tb2JtfRuGwBc1VYqmKwnD7h2D9LF4a1dUtsktVcMBmBzjJmCzhG9mS8ZsCPLnVrcDRW1yz3nDq",
  "key37": "3pD86yBaDMtJ2W9aZtGhyaMATToiJNTKJmfRy9FjDXoj4ygbnhtnyGKs3ahiiimXrjxzMFA9HRL5RAYcykSyzyRm",
  "key38": "3YhLa7MKtuZtmQk4BM4afvLF7CPfDwjSvUvtr4By4YskqBmVMmPR5fjswFQyX9jvogEvWRNfwkBCMh5nVTET6xrf",
  "key39": "4fC6a2Bf1YddW9J8KCTvmLeRyVtApaCLK4RVS3VnkPq2MnhoNQCsbsD9v2pCnxUUwtE8ERxVbzTkmkn2hVqPs1o5",
  "key40": "3kofAmsTWfXGRZqTiUS9n6F39ed7cLQBhRnCgHyJHsQFNSrHX95PiiiiQm4WfpCoZg93S4vJdf6MGMgbSqHZFWeg"
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
