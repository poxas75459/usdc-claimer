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
    "2PnD6g8LyYLT6xrRMzrGMWctXGhQatQC9q7YHxSCx1n5wCQN84cthNnvPWVeV2JzpvPeCZoHeRfE2ZPyAGBYpDWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wi2RNaXY77Q4msNiCU1VwaEKn7JCXmJyraMkWq3g7iaqsUe7ghCjsrWyVzYUy5MKgJDkgRmZ2s6VUHnvjUqFPoy",
  "key1": "2apgjbj69e8vgpc5fP7sSvnsdT2xok8YX9dctqcTMQxNLYEzoqL3qSnF8NcBTcyR4ieXwCdErsCiSujpGxsXLgRK",
  "key2": "5DSXdTH3Whdhy5j1u62zg7Akp7ZAWvRAjKphKsNckKmXQv3kHfmKkKHaGvbQkyZNxDg8pGHixDm83vjBRsfqKF67",
  "key3": "31ufomD8kD976QEkNadetEwz97SUZVPdfxPzFn56WTqNFxyN1WrkPTtdGh2RHGGFWDVfyK1QaNceN34BA4gYM8em",
  "key4": "2RaoWUhJnkVcbpzTifhChHFkvXXx53y3tT9LKujUycvhDBJq9jXNAK9StoBUbXCRo9Z5ZaomES7rgWxyofWibipS",
  "key5": "4HUj5cDUtXW3xXxpEec2KAp9xfuWsoUBDgVzv5BHWwBzpFj5NXchVigm5L1GrmqRwcA7BdyLHrNLh5Bec3wkuWod",
  "key6": "5fPD6KbzrEdAHdXfejHxkHicRwojrqkF8G5vbFDrqCUs4a9o9Ywb1jzNbt43BQ4S9YuE33kSjpiUmybAqDU5H6gY",
  "key7": "2pM2iCsL5vw9C8oeFo3AhQuv5YHo2R5nuKGpnYRoaxENFCpSkdgV6Z7jrE8P8qQ2pA76PLPbxdPmaevgAXkKtuk3",
  "key8": "Yz4giRjf3UPRF5eV5GrfP5e8qodpK9fobw3dnmaZrYGTEzbmNdG5ZB1bjg67WRDpGr12GJtvsTqU6okxpnotkkm",
  "key9": "PmtTZJWqZZXpG6SkbhyLhwcYtrYrpDZL2EL5J73He3VciWYhFrGneLhWLJfza5WJP4MuMeTuoPhC6RduqCyrsxX",
  "key10": "531P1kCNYyMMPRJJKSpNfqYxMPMc5FTBxeZPHWqvwdMdbYwPkaAQ1QPVZGGnf7N6snkBjnXacbvsaLhJVJCGYw8H",
  "key11": "5jeMyznvjMUvqLYwuoeJzyyqw8RktVQPtBEqtxHbTzmrnohbZEFrjUjTbaqaXhodAuQFxksXjtsukzyn9wgdutw3",
  "key12": "rKpbArLXpdRwREgHwoyHngo3KSAyvAsmnonPv1G5pQ8oSQ5eWWYkgXHkJpHt7F39WyXymaTkY6q4cddZ8o9hVXB",
  "key13": "4fWrsiJ86D8sqnrJtHt4i1LcMNccTinZKsmZS4TZeEvWcZDi645Zh2hATB8XkxeMqxgjo5nGZLJXFi9XBioA9Sf3",
  "key14": "5SS4LnEKNsQqH677qxeJwVMearGe6h1Dts1c92qpsw414UCp7mQybpsjYG2sHJ2p6ysUrdwQXsLfn3fCe3UFQWA6",
  "key15": "4u8TiEgXBUqAy2FxnKEmnvtLtki5BWP4C6rf9wMg8HCLN2FXA5UHCt5H41a8gRfx8ewBA17tNgnqBrwte2cQQ4aU",
  "key16": "4H5sPzkDryXZLj1vNpnZ6AizBpnmL79FuYeDAuSXcU6BUu5AHMqnijpELxYUBNeN3jkqY7PUrRn7hjPUxwsb5bsJ",
  "key17": "32PYVcxpWyoVQim1aJy4u4SrwTdAso4kodtjfauf1nbjpmcZJxfdmbPFumZbLsMRAvJMVmjnZWR6h9ZufcDpMhrs",
  "key18": "3GQ1v9Jt1Na5GLZJCN26Edvw3oidJpmsRpP5R4X66UNdp3NceD4U6rzqKsUtVkS8qwCQPUHxxqWJHJdaBsGs1gLC",
  "key19": "4LKuJQ18vkU5ZxVZU4ut7iuPpi6JdnKxF6cdGFUTELH8AEF9nhvcNoJgrStzoudPjjmDM4zHAkaN5G1y7woQJ1j5",
  "key20": "5pe1EjKK5JPiio7kdpuh62tadgkv5maFUGURVS3hmU49ZhvuEsWuYDLv1EDN7EBP2yZTJUjLRrk32ZKCS3vRpNUH",
  "key21": "5MygGDmR2XtqtzAHXLUhwoQeESqg2hfZAPQgJL7TnA63vs2XPCMqvXWe7bhRAvd1r1uQhxtc8RZA4j5CBjWG66YK",
  "key22": "3qYD7hTgzUtc2Ldh9Mc9CtKh2e4Pvv68gtvSTGWtwY8cDygkmmRUAYgf1py6c4912LHzDDqnJ5z1mDsKfLGSJY5E",
  "key23": "5BuPpQQY3knE2xk47z9Wkb81mufV3oAQ11Y1FvgVCFkodYn1Ybz9vZxbT4r6h1qN6Frdr6qAUP8nHbDH8xbSSSHZ",
  "key24": "5ySoMXiDqPDCPx1NTbm5UXENguYBURPXYJxpNDPz3mAYfRJuxC9X9uUnLjC1TY5So2fx7Y9PMebHRoYRzjxPwV5H",
  "key25": "5DKvkD48FfKgz64dCZwzcD4A4Qpo8aKeVKLQsa3s8qBz3DcPKQQzqA44LxeCoWJiHrqL41j5cNHgrH2PU22zy8VA",
  "key26": "4BFnmtSECZHSGq5CH2hLjysMpEWadBU9smoZ2QEcQ1PY36yhfTe32vVN8HixkpNkey8BTkaEWeekGyJEuVypfr8z",
  "key27": "2LTLSdVp11JxEyrdqm3b41DnhigTeHN9CPCVsc12UWYWQqeaJRtHdFgRFCz1HhdrbwGnhhjuoepjJ7pLCcmzqjbL",
  "key28": "2MuLMXQFBD43JDQcXjZAZHA4NpyNJTFNano3bmrbpAyAdy1b33TMPwCecFCUA8tND2yWkjdNzwpzi6KEfRZh7tLc",
  "key29": "5GzbyMCRp5ghxBjjcy8xvzYstKsum5jXZgX8FX4JvUV67jramXET6BteCa5988inugQug4hhaBDsqEroqqYXnP6F",
  "key30": "3jeGjLpz4yJAQXTVa65cNxC7kRHqC6xbcgoHFH9Ar5a2ndR3zGnwDKwtKHkoPXW8JcU2WYCDCmY26ZELEGqCiR4C"
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
