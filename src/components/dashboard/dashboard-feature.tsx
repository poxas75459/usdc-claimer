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
    "4FRwGvW8FLYGdH77Y88NAM2VEjr28qfGbBK4GVjfpMFUUeo1QugWs7Kc1GKWeLhQ6Dw4R7bguNRtkWMmgRkMNdVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jbyh7GgGqnfdwsMbZB3zCxn7eGY18qiXugbcpFpFff45dXzwVszyFGVTRMaLgaENy1LKHzPshLXDgjgrjKwTWqq",
  "key1": "42hqZFFDfSLjjGhLutmpMZBSWFpAHpF5EBuf69BRPti1CQVkMUb9fowi3kGTLf5atTCG1KJdjA1nompg1hbggR8g",
  "key2": "2amU3WjwzQdmVnXjYXViv87XL4kjs5gKLsUdr8L6DVr9KBPALUATJD25sMWUKrEGY1mXv4ciZ2JjfKyuqH6ZVTUe",
  "key3": "49VQk1PRwaiDA993AuQeB6eb7cdhkHa51xnba7WkCX7tJuGANgy6W8jRyPHs7XLWp6vvNcSSuGpdM77XMbDVVEuv",
  "key4": "2HAeAEzB2R9M3RRaoKqTwm2nRy2cqojGJfQThn4yvufHfVgbkzWfq2VDQnp9G3EFKN7qBrt35y89Epg6AM7D3S3w",
  "key5": "fYzfNc1Hq2SLN7FQ63TTr9UcNXi2fZKT2fVc19LqvDqdjSBg9zhFAkmThQHWqAMWgUKzfLnkFijGnbphpn2ZC63",
  "key6": "4Jbup4GN1ZqyuY7aZsnJ4VqqVhCTc1PdRB3MFyHQmSLncNQgpZyBAszHS2rGuMX8AsVY2Ftwz6Ph6ysEJPEfqakk",
  "key7": "5cG6fhDtznWGUekXr2BVFkgGrGc1cTDZy5d1zMJCMcnSFisMsrhy38o9CLRwH6k86uFDgafVQgqebiagtLsnH27f",
  "key8": "4x5hmkMVRvDjjYnuzZqc2qiZooQgMyKHr6CKeM9X9QaFQyF2dt1DdLApuJuCy8ku3QuWbWW4Gcp4FSKCCPt6u3qQ",
  "key9": "3B5VVpicaykZrhKVJDUeFukojCiMx1zAqotG7bJSLEDCQo8wTZNnxFABgZGCBNgMkSoxaGUPEQf3R7Z4JcpwVgfm",
  "key10": "J876LTWRDkv1XRTfbcxg9G8fouhC1YxrdcnMjgtEegnRXpmpDFhEUhc12GUgkqchUMLrd7UzUtb5EfCpDKNC42s",
  "key11": "4WZwXifFwQkEWekgUivAfjADQDdYhugC7dPYGZTNSzF4pQzFPuPA6MrejxFQcCxxBKPZYqRAp1j2E6pqroEAB22r",
  "key12": "4HXxrWMkFsoC16gKmadypPWVoy1JLRuv5uiB5Yx3jBd7fQkPNFc85AwbKRHm2E9SrEnHYV3sLDkYAvmZS1di1cV5",
  "key13": "5gQprQSQDWhYDnFWQ3Tt1tJknrKTyWtcxXRtzce4HQkkqFiBkNAGCcUDjV5WZbdV7pajh9hxQbDS3nYDPT6dvCwk",
  "key14": "2pYGrHcU4yLfGngiA5ae4gvxwAs4UxzQqPCEJMvP9WRrVuGXGm1dczJbXYvQ6LEHuEPEmwgRXRNByYNbWnri2kRs",
  "key15": "677btfDkFSKfPSp2242Agdgt742tKfxpnDf6YTWJyS4UtwQ1J1Srd68YkzQCv2iteQhTK9HuZx6e1iY8pzwKdnvZ",
  "key16": "28GDMwh7THpwcwBeybb7RXyTkeR1Apcey4o17XpsUcGTJpTKfHDr5oLGzdqjmeuuJWUgrb2a8sRc9bpodgC5fvgn",
  "key17": "3edjJVQqU9weycuZ2XRu4QaTKfHcggLevUpeGz4ayrFhXK3StCwrUJfNJfpisFV9aZgjxMCSfWygSt8M15JtM5yx",
  "key18": "4WgW59WH2DrFcmLdqp6upoENzHPTFVft3bPg3B2CKAHNk95jKoqndi8oBdA9tDRtiD2bkz7mWvyTeH6omKUesJPa",
  "key19": "3RJFdSKijX8L4dJssPCwo8MxTPkra1PcTZXoJVNXzi3pyaqDhzVC9j5zcHeny95BrPH6coVqbJbjcP1UMtbAzW6w",
  "key20": "5DdJ5vy8bcEBQshzCvjaCYYDq8cvzwF98AqeVFkKWdNLHdKrQXsMMWERdmzD1jwVjVdm9uacMN7WPDCTKfmzSwsU",
  "key21": "2VLAbrr6TJKoRxsKM3HcRr9yjwFioiMgYecoWziuEQU5VGEywtcPtmsHuH3drNxdw3oAGJMzoKfhBZ6F9NtwqVih",
  "key22": "ntM2pwS7NZ5wYUf9LecChpeg9T7qbmH8vvMYh5VYEipB2JgBGbjJ8xLnAunbc6CEfFaabMtbefpBATojze7TfqN",
  "key23": "2xCRiZvi1AcSBs4LbUpj7K9tRW87A7yLvjHW1NmUuJmSarUKN2AqPQ8fedoLaFTtM5pgvaxakS6SmiB5zicXkG5d",
  "key24": "2iBtMwktq8WJqBAwQbdEFKuuQYQ3BbEwPBwbkqarQeiMGCyCuGYb3y9CTd9S7Z9XUyv9s4x9KAr8bBR3QADHZA66",
  "key25": "5uDaFbtUaQnBmZ8CEJ9NauYT8RQLNJjvK6bgbLXpm82yW8AayiguSNSwcT7GtSrYGht5G81rwtSYRYHYCsNV2X35",
  "key26": "5Q1XRFwcANKpw7b2ZiaubUz79wqdR4Dk1Dssu2k9ed3p6H9ovipEDe4wGWt9XeojznWaRif9wPPJhMbMdjtimXjJ",
  "key27": "2coVNe71RtTF17mAQXkZZGn6fBjyaML486dKa5JpeqvHTJGLVfSQxHJYaTfFAU5yRdpzSZTYpuJZHiHNBQjD8FzA",
  "key28": "4KxWiUMcU8SqnP5z6hLPVZ3Bww32kYB2bG8EbkziWS3Ca5FzJ3WJwxAqK3i7NYzWGE1vho6LE2j1VT7DAMo8N6uL",
  "key29": "5ryAFWU5yty7HCvECXert8goiN2EwUrNFcvpAueLjLpUMn6zVyD6qUpQVYY7MMvrtcV5tY2tgsML9VngchER5Tnf",
  "key30": "zBcJKwvYtC33JrnLw8JqeNTPZrqHrCJU1mxdPSGwmfpShmMAUj3EKkLwdBgVhNuggRMG51BSYcrajh1MGYJWJbn",
  "key31": "4Fdug5c1HBVjDhaXtXr9gn8hVXvZo3JRxRDm7BU7oKm2d1t9JRQtCeuQ2J9xRsp5xavFHxfsSEzK9b6AfUXCBKav",
  "key32": "smyrWYHRmiDbHWnq3XqPrqMJxiHo86Namfckn5M2AtQ8oPAGDrdyBvNb3ktqeAncUp6FcuZSQriGMrFkYuYR3jo",
  "key33": "2JdngJfBtoHgwGEmJpzy9iKL8T7tN71sS1VGYY43tqBYLFx4KXQSwstATCyMw2bNF3BwnF5fuVi2q6KPKu9HjYps",
  "key34": "YUq4e7cMftEeW9BmyPRMZQD6E1HKreDVxDvaqSWHpi9b1bC2pw2wufRTGhSFfVGLqKekXNYWhpCfgVfaPjj2wX1",
  "key35": "3beuP4k4GCqfmrKLVzbwdQKgp2H4qmwDWYBMbRPAAXf2KTdyepdQPBvEbFCq2Q6rPsVVfWeAe8bUbWUHnXBidwUh",
  "key36": "4VWc6fXRYT8zaHxjDJn94sGdXZp7WR7Y9Rf48LFBxrpEB7ZUK8Zp6cih3rhwtLqYPRXRt6c2UEtf2NCA6Evcvvto",
  "key37": "VBd9ag8Nj3Sj6zwoaUY3ZjyGqr354LtmdpgAQ7qHkNVdZeFQoYBg5DUXZAXu6XF8qxUJzCrGFfDmY2iT7g6KVuW"
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
