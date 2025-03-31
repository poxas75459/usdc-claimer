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
    "2XyoxHmQXUtkdPZcH6DonZjEbXXXsuSGfv6atbzEEWY88SbJQMtSz5uAEtkgFjkAC6wojK3Zb76w5oMdsgkCmdnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDg6m5qmENA5PxV6SRNY8pfPpjoSWDsagtqP5RJRCwhEtk5Y4m7w9qkfRzgPpJZVXLzGMLyZs9jE9JiwEWgxVvL",
  "key1": "5XCxXuM4e8F9uoP8Eweh2S3erEWvuvwCGbFuUVbGGudrVrgkQJNYo94RYNoiBZgvMDJtEiiStttMeCzXEo35PG4F",
  "key2": "5gpBNXz8zpsyPgAihga9Yd72LEw44Z6R46oPWRHvfjDTho4wDy7buXC2dndRytvk7xUjRUY5u8eJoABSfDFW2HG7",
  "key3": "4TxVeDGC6YpWHxSBFtz8DkKeSDW1y79PTCw84sHp5ty7Q8CmFLMkrxfoY2geiBTgtJ1ze5b9129tymPc3fxcPgcd",
  "key4": "2QvMmjTBc7gz29axkfkK9rdaYxQFw1rpyA4oPmgMT1y3rN948i2HabCqVBwGJ2he1sF32uLhWVK8G3R7FCHbppzB",
  "key5": "4PL6Ep5pjpSVPe1fA8vWRvaZYG51go4LCbPe9dzcrHjwYaEn43ZrFPZi9pctEPsMZvE6Ur2A3HTyP9CJQTyYFhi6",
  "key6": "4igppxqgKEdN6tYzDUaYKFGvmXnhT1BLreKQWY9C9ViHEehbEQqJhSawPFqviJ8N1P3xJuT5Cgt7fzSVgfBquUXy",
  "key7": "3VN5mM8241Sx4chRdk62KThm4JvJiwtoihvpmXDz3pmZDDU29Mavbr7MyvM4v7jbziLr1N59zPMJgz1pVoQMx2s5",
  "key8": "5Gq8fFfgGMn7ufLGD45uQZWU12mvDERPkoF4WCuyeKKrj5KsnpMtdXoJRLRDv54NbubdjQMceYCHqmWBq6vroNi6",
  "key9": "2hVv3fjNx9HWAD4c4gJpcNHnKf3Rj7Ltr3mSfubejYzAAqAkToBsBnHsgx2aggrzG8g6C7wLPbZvf2Bj7FDQtYe4",
  "key10": "2niEwYzLRE6gf4b5scSPSpno4x1CVHQHPBs18Ljqo3sEv7NKN5KZrGuzwTCe1izEXPewwGmRhGNe41szZQcCjgYU",
  "key11": "2a8vsHKfKMUcGESHfDmMqzyNhYdy48x3e5as9DqPf5UsAzWPRSS4znPZrnJfCrtaiTpF1sScUkkEExt77gcmS7ew",
  "key12": "65q6jRh5krsSDHPfBHbx2ok3BGBEYy8DDnb62iuCCfPQdhSRRm8aFKopiXjshmAygxdKgrLTBkEKDSPbikTKV5VJ",
  "key13": "64bJriQVyrF5PZZ8D8N6Fa2rpHS4gdGwC64Nb84271BJUdjUBG863LqWW5hTPvsgbeEkMWvudcbHFP2M9bfFnW8G",
  "key14": "4RCx3FMZ45hqrYZEy5ScaLv3REokpiHd26grvY4sz6AKfbHMCsPBFqmGtntYi7Vgtws1aFnrMVy6QCpp4RhrZgCm",
  "key15": "XTq4raKJJVyJ1RUCqvvNuumWJUb7heW31rYgBVqPQKTctyRqws6zEhAJzmxq4Shee6oZ6ivzvFj13tdGtpBhYaD",
  "key16": "5Hb57Ftcs95iECvZiVFsx8q1jSPPoxPBjoLcL6etpwsFGrALmN1avcpDDbZfrHn49QcQ1u2ausq4CdNgBN4ZCB2V",
  "key17": "2T9F4a9GnuDy7QZ3ozx8q9ZtVKJscrfqgxekdzFVJQQRqXUcqnadfNpMxRFNVJQ2x7Ln4T1jcfddVEP6xGzyPHPs",
  "key18": "2URywzxBpdFw9HFA2zyi1q51bqAY8BZEra64KhryPT9cc3CXbfX1yzAMfi6LZFo1Toy5Tz65YpVTeGVLVkFbc3mJ",
  "key19": "3ueVcfwC4qfeD9NsxTBV3iWu2aoCU9Ld5Y7qLYw5V7DSYxdFNjr2MEK9pAdd2RMjNYfpsHY4iaqfdLehfV9mgZGK",
  "key20": "4UQ2FM1MpgAZ1KzKr2jgMKCtKF9r5NZMctPhKZ91W15tiJPUBABLkxspk2ewNjoTdpFs7EDDfXQwAxgu3CR4UV3m",
  "key21": "5zNunZCC1pvRPGkMzjmuBUzmCZ3c4x61P8UVHvoRzoabuQuNHBVJXU3N5vr6hDqZiSPKzTuE9PeSVK2PPe4mKYKT",
  "key22": "4yJrgVYXTzWMCScyMovVXGkTjKsvrHorvWCEK8DLef5PqvE2BzfCVNGFvRGLpu4mDXA2ucLntkBaTGgo4vYqLCEp",
  "key23": "3FTqnBfoXn4iR1B1tUoU9HJ8VWaXiJfig1Zmuf2hEDLfDHCTFKGuK6TG4sedk5GpzWVcT6Nwfos2StqcHHS4WyLW",
  "key24": "5yQTpv9pcZsGrxMFn6m96sQy2zLdc8s6VcJR7aPcEqauxVK6ofA2v1AjvSdj2Re8EYCu8455diXyLvQDTfBKBP9p",
  "key25": "xhVz45H9DHhRNdih51ttpJpY9mD4Er5Hvqa7dtZXTpJQJKfWkJRNLeqTJW57nQT2UpQqvLdQCZjnFSaGKfYvJuo",
  "key26": "3TLy3JM7qr4ipvXU9CgvLZNXy9dGVcXndsofsiwnMZ27DVJSGbVQ3qLzR7jmw1yjbFnpa14b8esNSEftYkCBpiSe",
  "key27": "36MZMBDBJLdDoMHUHQ2GzzX5Q3teSi9G6Ld9LaEfHH8mvRW4aKF1gJFCgFou8KRMfZQKoTBRkFrn1NyW6d39DWuq",
  "key28": "4xFfFFg1Mysx4K5bfBGwWe4KWiKojvgRtcXebDC2LsRf2k7jCzBgMwk8dFJAvFdF9a274daxKeYgVruPvpnz1kW3",
  "key29": "3RQNcvyzRfh9G836TSycfKNFUmpitcVB61uoqS2JLscei7DaHMdy9MAZs1a1XawBEFiR4fS54wa2LqixygBNkBxw",
  "key30": "2aZTxPxFmEnW7vGKtUPM9suibioSXudYsJYLpzVUVA5rceN4YxfEn4Ar5MNgVtDR9yZVzm2ZAdiVRx6XG1djpzDG",
  "key31": "5m8avr2K3s8sR9QkpWd37cHXwYo1SyiWW7cmCU1pxiANtaLQGAnQJTzBGttejTFRMKsu2AMipeNUoySnV68BCY4D",
  "key32": "4e1EweysfJniPzegTanMVmjgwtGh9C24MRmPK3jyp8pNzm3rDvZZwUBBzKcEtfAFmJPxRwkJfyt3VxXSozPSNvnu"
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
