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
    "da5QdvnZKgsMjRdMqPRAWyN7bxhZCcypnZTcnNv8HazZAReedPoq9yRyph4xLuBCZPzTwnqoBKvsJmNrmLMvZdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEWHaopxRJEb6G8qvpGABVH2uBbJNcmQhQwMu9TqAGf1k53qiEvbt1W8A8tVkMrCYUGh4y5R3E6ro21NZ22Kd65",
  "key1": "4WSB383JXwuKAbjCLTBUmsZeqaHcv46TRwdJM9QSUyjU83VPS3Q4PkinqtSVZDMeWT5tmm53EBc9Mo1mqwtR2JC4",
  "key2": "3yW5B1pb437xtB1BDjwKFfSJmMZPtY5MwGL8XSYUBeX2wHmdyCxcffHcn2AeufT65EjM4wnyVjoVGBidk3AKFSNx",
  "key3": "61uGif6Rn34pqGEY6CdRiJEZnAJSKpZG2uBQQorCjcNAGHHYTc3NfprHMcCr6V16kBtgToXAqvt3x6CSCeFpfrb9",
  "key4": "5bkbHWfnX1GhBYM2FzEKPpa9jfKDVtHxnpAspDW2vA7oTSo3FNdLFedxroR9aTSXV5EnesBUP1T92EBh1cqU1uLt",
  "key5": "3jWte6GmQobgNuxSSJMWAzaUiUQgxqGco2rcNf5whUGqd2Y3SS8xBPDjSdjHYAaerSCJunjoeBfQJyXytPosnwHP",
  "key6": "43j5UTNRybjesJhDQTzS6zumPe5ycM9Ru68DonqaU6uN9hHGWr7ytsTZkUXp4MNPvjYa7fyN7JGwU6Zx7isRhfNM",
  "key7": "5pXuH3TY2JztVYtGkF7nuXGHRsuNFN6S6L4wC5g5xP8Rb44taZT6M6oWUYjFXqwkdYm1uxxKamNLgE7Q3DUeKGS4",
  "key8": "2T7sjcU74Cnrg2juvEjiJU9a5rgBCC1J1KALUKkrikdV7TM6YzGrqP6ofm9qUeAQ8jtkZAPi2QAZUY8ZB2fS3iy1",
  "key9": "d3YtGKv6Wj27ihYKvxh9GqDNxJguj3KLoTwV8QVH85fPM2W6HQdYL3KCvHKy7H9q5qBX4oG1R7NkxCMzqGVjYKh",
  "key10": "5EWpHnzHS9SgieMPWQaKYCjCo8recBVUZBDqQVAbtgwfyh6CnatXZJJAL673vvm5WvNJUgJZxSPdVbV9ZLbmZBKe",
  "key11": "4zuurnNdhZo84nwMmLk12qFgBeFd7MCZneA3gpCX1ThudSVGQAfRdLkP45eLZxmQ9WmNsbY67xEyUfHzq39wCnXq",
  "key12": "3DdkANiKcCSbJekfPBtPPNgBct45ZBjSZd5ppeMpthvRS2bXa2N1Z2bbCLFc8QqXoXTkGe48nZAzHrwPfsvsc2SZ",
  "key13": "5Jx6Kmxja7XXnExB4snXmxDXS3icm7djjBpWxpHkbrD7vNcEuFttg4UiPsNnQ21w3AHap8rTScwrZAKL5PCkvXSM",
  "key14": "5SoRKowGhNbseGRHoUUpXzD58wsZEkXsDaucEN9Bc3EFcYUeuFxNv3mQTy9qmr8NYmUJAYa2b2vtZbDbyVCigGLU",
  "key15": "3XZBrDgxwGCFbZsENfkUCELBj43jTm1cyDFTckhQPufUtLxvZydqsHKUuiJ58yzGeudNgKLP7c3fgBzrhM3nSrGf",
  "key16": "TVi9B3YyofLaUB7ipaR2NxhSFyNsqvQXibQ32EcLydnSapjT5MaczVcMM9MACK3s7KvMHuwChVweQ75iK6FuCvg",
  "key17": "4empoEFcWhzXDXih6txFi6nyqXdhucgV3xoAr3KKKWiCvBQHMQyydZoE6s8QiDVzuxCoMDc5UzGq3MjgvesPD9Vh",
  "key18": "59jWhMxPUWifJSeuDLvi6eLLj61sNJ8vxyKAo1oi5qA8nENvNXQu8FRc53ZDGH2yqmnfSeYkRc8h7VRG73HV3MN5",
  "key19": "5ugciyXTApmQLX78p2xRj9tmfKsAPuo9ZKYX5BPFVN5yT8CjfmN1hRp8VN6McF2wzBMtnMQbPYXp7jzoHaWd8ckS",
  "key20": "4t22T7sHugETYu4Daw81rPjFncymdqVj9jynqAAXDpMrkciJkRZCA5QorqQxq8WnS6ZZvKkQCCohRftXyz6howde",
  "key21": "336zCQCvrLjPBNRQM7HAnWunMeULTXCbdBuN2XG27t1NSrUyV9kjfw2K1upP1EWYbWm4uRRw7Jq5f6nyxh3c84FR",
  "key22": "ME51pGukcfLhrv22v74PVb43dpQWLqTw2Djfy5V7iTyRePxgvkQyV3D7UCGhepnJhG8YGPi9Ad3CxYZ6QZqKkvf",
  "key23": "22YioieZ4dggyRwXpmTxhJfAy1uCGy6XCBTY6y5aTqjRUAXDDHCRNVzLFeSorGEuKZ3kYLgGefb5eBmtMnpVoMkn",
  "key24": "4dv6Paw8WrCrGTsU9bhdZ5oNGH9SZUgowtw3thV3zgq7eHPQKmEq2hVreNLanPDDyDdoyDfGTRNvqShriv87VXdR",
  "key25": "3twGk9V6LRfhBSouHGivhKMPMDDCUydeKj1RXM5LF83SBwNUNTiahnLiS6LZ1wP9eQ66Ak2QpJ585uJXUz15yYRQ",
  "key26": "5jwKsBUNetUfoU5A9J6jzf8rSofufKSVCZTeWxR7rfcL4tYCfpNfmiiEnJj3d21NmjhK515Njrmf2DtXbNCYL6dY"
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
