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
    "3Jp1wrHDzY77jACepYEWZ4y7XDa4y1yfKgr79sdbj9yHZ8RSWMGMwbsS7fuU2KvFWDfbaSgdEnxihJaXTANpoMcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukM7ix3DDaA8GVJcKZwhgPdWiLNrTGnv13HiXcLbyoqTd9JCfZzCfH5uYVtev6mnaYS7GpTCrPcrvi4KskAyPVL",
  "key1": "2VXGSYpSEUd5QSmM9JMPwd9zw2MDgBK4TuZ66mUiNYC1UvGzfPJQW5QGyr7RR3rmm7BSFnVDDPs7SqZCtvjpwmSB",
  "key2": "2SBk26QJAhKpiMpV1ANNkMz9gz67PKkQY4NEb51taLa7L2wb6vDifbevsHfJfs7CLDpm54a4WTezBjEoSnik9eEi",
  "key3": "bQPLxYknj1y1G9tQDH1ASRjSUTBMXme78UKYf2F3UcgFTCkk1XreJ3E5F11WTAVpe35YA5mZ6znipfzHvYS5X5q",
  "key4": "3ybTSH1yGwxGsqQDVYVg3fLcjW5CudaAbJtjrvmL4BbCLL7Ph2jmQSr3HrFys7fQLnjwSRuhwgCAoVLivH4CxpjN",
  "key5": "5RLL9ZfHVMPMPDz7fn14KGmES4jGVKYoxtM1ofjxCEcE7on3yGX5nxsJtycH7dTnZ9A7f4FancaqvgeVPhGHqhxL",
  "key6": "2UEphKYouJDYZS8GDc86muHFarKfLHTFsMSrPJfbbJgLPRYQR3jRXZBicKG8wHQZytkVG8Gwp7KHYhdYVZzU83cW",
  "key7": "55P9QPXSWiPXZuZQWA9xRWvHGUtXbwr3GynSaFYsbnuGBsnXDmeGJ2ig6hUaL3TFC65GxrMxmUcZmCHujrn7Gn1b",
  "key8": "4G41mfhCitp9snCrjJYXVvMuiWVbJ7xxysDfbQ1uNWSiVYeBYbpF1M7JbnqsRSNDyL5CZb282SUYdthXLdT1Goak",
  "key9": "5zB1u1NQ8LPzdKXufUJZAWbGyYzS65FQ8HEEnNdGA34uv4Ycf1JRTfeiVtYcJ2esaGe3WQKdUZUHYkMeMkBy9AD4",
  "key10": "5qXXW1pKMWkKZiPEeMZrvaJbQhK6m9AkfHRJYHqktoXU9bvq6e9kPghh8hRnzB8whQ9QSnUVVyV8sAH9TayfuCoP",
  "key11": "5avDoagqsAVbecCpXJgfsddbhjonRBw25BX9wBMcxFqJaXJgG2nBeD9XYXzGRAMzqENASBUNUYZEnnx3dVZthwrD",
  "key12": "3ZD8qxkxe9P3KBpoD4pLjU1uf4Dakw7n1TXzh8ae3fN7A5Ap9nX4PNv7mD5wptdTWWwtjq2MmK3yPWJA19yuznaq",
  "key13": "2Fcf95qVY1UEMidkfuTfaC2MgRZ2L1E7biePYP24Tir4GxnaDXjcmvpE6Yw1VywM8mCEUBvSWyJMNbbisXRnJMGq",
  "key14": "5RTKhFKJcopLSM34iDsGmg2pFu8RYLQvqoDm4Egv3gfzNsrumwa9Z6dzQYRkPutsXzTGiXcBqCCGb7MaSEC7uCkC",
  "key15": "2hDK2w7Tuvu6TkdRRrU8PNpsYcmwFHKz8q7rPKwtBvNuCZnDz5wrpRMsSoU9m4vddJH5GrBa8uocMXEYg7Cmbpit",
  "key16": "655tDp2BDpXQ2dnkfQvfcLkzT8rLj6KBpTHkqYwKshEo2ok5himDSjnZaR41etXkfptEa26tStQekmupPyeywhUK",
  "key17": "dU1benWNqin3CNv1sd8wr348UW7aXAH13734iYQTt7k6QZBUQTHvfuFoYEY9t6WrnGWFFLnFJ37SCDXEzLmnYdK",
  "key18": "YA1UES6wYQf5siQSyxpkMtPaQ1cJQ9GapVbBHeyXPsNF8aHckxBBYpgCnyRTiBuBpotKCWhJFxDRc2NxLWoEd7F",
  "key19": "2L46fBRGJ8yBVqfFG72MvDAcsEk662RKgMR5ZV11mAjxwTZNMyU7yzxNPtUXHGUFjkNS8jVa7GD3hRjFLyCeB9dP",
  "key20": "2tqhWouYXZsDz34RuAyReEqVJfh5WyVgZBFQosBRNh1ksvjnxTG9qZnWbwuydEtxRyjYWWAaSkWdmfgNmuSyMetV",
  "key21": "4kbd2iUAUigxdgJ9FmQKw4hdfxeejhuZaGRzC6D55VWVoZ1c73akTCUCZycUdzqvminFjtniqLByymxa1vYbgTgt",
  "key22": "5oEVNKwAd6riAziGAtixbCob3fh4oMBNvJKY4US1bGsfMnmToWR413LTPwR3XpV7SVEatiDfAQhgdJHtBE12kCh1",
  "key23": "3tETbApoirWsJgXGg7418S8zA2JbAzBCQFvyENK18QwY9iw9ZWDU25VTQS2bXz6ioQF6BXvxUmqm7eU1WAo1MZfX",
  "key24": "2KdUM8qtzqWJnyvXDEVg8mNyyK3V47x5duHqcLEVaWKu6o8Ksxw2a58iRDpu4PnSmzgpSf3UNa5d2y74fAyq2VLR",
  "key25": "LT6XEkP9YiCyZi6EgW5sWwCpV1x75dPBsPEuYxVPpJ2bXtcb2exsrvbVbRBfAZJUnUoTXFvMNzZp1DSrqZTnMrN",
  "key26": "4Nhh6UBz5JQsYg8jbREDi6nCA6uSoDX3uLaoABMXqR2R3t6gaVQd4gP7yRpLNc6qFanWLAafxZbq6ekuToAcGqRE",
  "key27": "3R9ARGCQpHz6EVmjw5bkoq93E63HZq8E2MEzA3U7UN3aCmG1XQm7p2fQSLdcBcugk39quZdmF18DzqZjSbnSnnyn",
  "key28": "3dErjdKNBYTNBxVxgAAq4R4Mk2GFmgDbkL7Sf3eP2HUB8EMHsg1GM26p7AiBqsRoS5iwvpbRNznK7JyRnawtvenn",
  "key29": "2YgH5HpxsNXGmCJF6avqMhTb8e6giHN1ggTGFFneqA5ugwKnfa8rseq6ST1Nd9mdahpRjYcqxuYkY6mYzRHctyMi",
  "key30": "2js2cXwBSom1hR4FGTn52nvtNrdmXoZ6zVBrXF6HZFdgHZHSZ1cBqAUvS5HUeDw9vbpyNEKk5AKeHX77frYMLrCS",
  "key31": "37KRoxhUEaaQ4Ca2ffBLVGw5jNBkr6KuaQWHL7MoXDdAhB8BpkKVZDJgsx5m17H5JRVZ6SY27VS7QZXqQwhEBSax",
  "key32": "5ZiYC3C53CfEvYWd9Q6iDRpDRbabxTEH5YdRJpe7RNei6dxTntsi2Aj2EwzAuUowqjELWjdb7EoZkVeEfWcobgqA"
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
