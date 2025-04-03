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
    "531bXCZkMhr17DmBXkADfK72jkSF5VuJWQCF7EzcgCGiPKnUZP3xNuKrzoXNoKjAYh7XwArzsqFUxugvoS9G77UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmJLW7w8hv4HbMWHs9qGKCR9hvPN8XEw8HAMac1VQQ4JFhSrhGRmxetLGtvxC7k2hrhstCXTBQW6JbsLhyTnk6g",
  "key1": "5wLkd26oeWiD6a8e9XAq4KgaxVpNVjxZDfiu36TPnWUVRF6UPcSbJ9MDWct3DfaV1U6ActmPJgNjQZYKEQfhF2YP",
  "key2": "2h8ydjaSstagAQuQDcESdvMhCFTQYpb767fbveqGkyyYRoWN149hBYNCzGf7imEiogwhJ5KHRFmpkXR4A9jcdaeJ",
  "key3": "3bL8rqyPQaU4AHxjounBujdL6cPpLNrykSMzXZvMEQ6xVX3nfv8sCNerjwCbNvucSvM74hNpjgAqsHgHi7FobgEC",
  "key4": "5hdZTv1auPTSBvHSv2uVXLSXuTvtbwBBvtF4cUDfjzh2T87ZmRDHsoUUNTCuCpmCKLKVpHLN3ZkA2BdoE3DnP2eU",
  "key5": "37jXrZ6Gi54v9BTssvtP4QPay91vtdFEF3eETYshUX6ZR7QXTLG5gVpDp48GFuTPSDJWtzkTQQCQunKEsBnvY8xP",
  "key6": "5GiN9B7H3yTgGQc9ScGY7ZChQfU8KFPxYrgunGpM7YW3wj8GqAqeWv56pCTufrvo8bjHMgfEPRNaxTqRzArCByUd",
  "key7": "Cibdm6icqn47ZhRPHgpV5Bf9vak4ZggZkvAPAFM3hAgoCwDybyV72AFAmpv1vY3oQJLskeAe2wL5hSUu9ePoR1z",
  "key8": "5bqnVnhGTyjXKpaJe8oCvN3TGWmL4gsGsuwsL7NUaEsAhJxXBxhswoJtjaKuUA7arqaEfvig6u7RRUgUauPt1Nt3",
  "key9": "3yQ5jbFwrHworNYyvzV88KRyz2rViQWbYvKmfgAjeq8ZyE17GA5tc9nEZeb3eDE4XRgoJqgCgoGwcc5uwpt6r4gv",
  "key10": "45FDozbD5VZ7TEpTw5hJkhGZiUPuLFJYsE1QGLqGRYxEkdZEvsdSG5Q7d219gJwiccpFMpxR8FPAPszcL3dVPCMr",
  "key11": "5WodduR46trgfJx7SVnWE2woyDuRhdygSBT3syKqYVUNrg2gSxVmvChTJ4LReTQsh5NXNVRSHnqULLFAKVfnNYCi",
  "key12": "3U7e8Rf6zq18UTQ69uCEWqgAziwoh5Q6PtXRjC5P2i2ERMEvsC5hqiQjRzNhwK6nCLhgwntuGyjV6NLsAQ6gwwx5",
  "key13": "VmaGX1RgFG41yTGCsevztmEkr1ji9bef2WvqkKRm7rw8jcH7cuxnUshhQLspib1bpzR3XpZggxN1ofvQHCDP9B2",
  "key14": "5RAAjR81jzU6KMG1q5YjTZo6fbP6ibBQLhmeCFgkvKt1JXuUxwna8F5BGqwDUQF5CqwBpfivuaMrNKWAf62AiBdc",
  "key15": "3GSFNQVJUiT3UnYkWENMdmEsdpKh6fjQ937DhHBSFQk4Y2cZ7BLJesJZRs5cE73a3h7cW1ue7eAKkpfGgkSxtSUw",
  "key16": "RbddtXC7Nv5GFs2LbPCbq1Vum9ZxcS9geziDVcpxP4QotdiyMfY7ornxSvuBWR6zoJLYemgC6CBNZDXvfXaYQAe",
  "key17": "5tJWZFEjaL3S3PJEwVgADwAcfA314sUbDiT4kho3xpdbQc4CJZeJWc1U6ytHKmqTQmcMpFushmSLhMHykgBHPfXX",
  "key18": "4xZPNG1wtPPuMSkDq3CUoyygEmo3AMwTe7MdaXc6XYG6y3QE56Ftxkr6V22WAPPcMyWf83ucNLsDmx3GBt621eZ2",
  "key19": "46HrAyKYUAjxgvxq1i3wEH2MAGQmerUidjRhujKvjPwci9qR51e4yw35c2WtiQN366JH6FBr9bzZawdgaJXdtMAJ",
  "key20": "wWVrsSB3CG6d5wKrLB4YbZ8tJSKYXZCvM91ZgYwdpJykk3Vh1t77kKccKyom8gMcgpohCb19ufjJZ2KYfADdEHW",
  "key21": "2iCLtRcLoNPCTM3Dhw4obgJieYT8SCN54Yv1WPjGDvjFpwzDXUFEGFwd4bGZrHgYof2j9YT755R25DwHDRdGnwbh",
  "key22": "ezRysL2cM87V5QyVQ7RUPLVHDVopzwHEypzyH6NZDnThRLwDjV9PX5QPKymFL3QDaU7s44kCVdS7rj4Gyi8DjiQ",
  "key23": "kCtcEH2XwxtuCEwtept95jynUs1TU22idwQ5R5q2i8HRxYnAnRu4gpQ2Xs9oppYEJjNGY6pZFooq4XcCuL1EYPp",
  "key24": "A6xFQDMetvLBACHP2PaqV2KSGkdVTb2RhkwHed9vNbbRxPzWauPWfDaxggAZaV8NV6U1iRoJhRBZg9G3SVokwmB",
  "key25": "5CVkUFg6d4vvMsnZz82xh2GvMRdKcRhAz3HjQdw3bVZTK8LE7ikwPXXJUM2NLYQ1pWsFQbdAMcEXhKXaGDCBbmKw",
  "key26": "5nuuoa233JPfL6aFDc7UYqrB2uxfW8Jknvyh7mmvmuFC6d974jCu51dBSdfp8ogbigk3s3RnUv9QhyrynoUbUzYS",
  "key27": "56YifZy3dvm8Aq5VGmUwXUqxpDYAbhuzmYZ2tdvZxKyU1HkPBMEt7b5DZMEXK1j25QNP5a62HyQbtz538Y9kBF9d",
  "key28": "MLTpP8aPFJ7mPXqeq7edXBWEDPApWcMmrPZ3D6aAtRtS71SxK3eip7PM5NwbxU9vYLQPeQAvcyL4f3erC42dnUW",
  "key29": "3etj9mK2yymdommd8t2bUqDg6dj7bLFdiyBMCMMdggTAU3PVaZmfcRoJW9VWyhnf4WS2Lvi4vJc5cweCFViHKBpC",
  "key30": "5KQBkHebBR3rYVqZYVF5RKopzPL9vcqjk1ZdLbs4VueEcUHFCNejyqgRQUrc5PwGnYiCQ6pDAU6RGQZggTVSSWVX",
  "key31": "ZZf3GcpQGEMKopMRETBSBZgDZP54J15JP5i6nVhMEUvws4jvFgtDBXKuWADKThjRq2MDoBTfWkqRfFEqD6D5AZT"
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
