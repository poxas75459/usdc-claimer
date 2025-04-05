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
    "52TkcmYPx7rojJrtGNRQGwV7tZmo6dkXP66D8HtRGj5XFLiSRcYH9kDT8eJXuwCq4FdhqjuBwof9b2qhSbcgp5TB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nodFbESBNZ9fmtbNjGP4Y1kBary99UAjRS4VjHpqSfYMjjdPzt2KtVTGSETrHbUKGT75dvtQAcZSKaEnzdnHy1A",
  "key1": "5PA9gmHGfvytfVaYKiD8LkqDNTzXTQnWdTqKTBPSKVjfyFGD8YnVCNr256v8cbyyotzNB1VoqL6f3Eh7kzAetjLM",
  "key2": "h2rRKfPrdwhwjjt8i9uCTjtFoajSxJr7FGsKYTLgKQ5mbr6QerLCkEEmJoKVB8DHMTZT3DA3X1VFTtKMa8VMhtq",
  "key3": "ALJ6eWAT3ViZWPqiCU5fZNpuyydwTG8DFPtMvndXVRUVBSg9JXfrM6EtcTAKdzjEBDueFQyMVqATfdDBBVX2bqx",
  "key4": "5XdtZ1q2dv1Kcq32JTem664EAtTTT9EhGrp5ssPCYZjpbjcXRUz2SZ1BV9Le1uBGUPHPCMa9p1GVwtGFmAGT1rdg",
  "key5": "2XomuxQLGhcjUNV8LhkMTdvDv5ahCu4A6VjCphqFVedYc3xpr6EA9LWm7y1nph7q7ndZ28P9oUARsgGagCE2EUir",
  "key6": "28wQgKGYYVHKVrjQp2Vw7gyuv6jmoyKRao2u7udCjGAbRvzYUudbbppv47tEQAZgMMuKkEL5aE6mknguDAyi9N3d",
  "key7": "5x4cD5rL2bkrjBvZVaBdKd1YuRo2e2jYcouWtfPSqsHsHoExWczCN2BHy3NzoWZATraPdeTNWbCHUqPa54FS4jCE",
  "key8": "3uCnouH7mNKLKKt3uD49C9dQAgAe635myXfh7sjgRubExVrytCz8Jw7JjFY8JiJH8Sy6YNQNmFLstRRJ9S7uM5vW",
  "key9": "5QoqcR78rz77RjGZTpPfeyywcVBx9JHHiZzxwJfN2UXPuWKJPgxf2jb7yTZstBXnvi2vAre1mQPPvBMj1JfAXTwo",
  "key10": "5gptqss7hxvb9ygPFcT7HenpaibKohBr7EXkAzoJuowT5xaZPYU6gwC3HmMA9vXBA4iPYS4h3FbELKVH59RP3EeE",
  "key11": "zmSavSNWZSCoJ6nKHRHu4PGNixsGhrbtDNiV9kouEoHDK1vK1hqUAf5MaGUzP6sPVA7UaXCrWpfc3bxfkrroS1M",
  "key12": "GcuSm6zPj2uXtWqo5D3XYXF36Ykmv5Ud6xRLrTksghwRLix5v76vJQXdUQRpv4grLwqRgVJudpc3qzfw1Tih4Qt",
  "key13": "24cdS9JWL14QynEpbgABBcJjELbrh9shBmh6fNnovCyzTV4xdkaXXePs96AU8aasesxvWuTty3kS1RwL35G3cxeQ",
  "key14": "3YnZUTbuy7VUSuRXdTeJTZGGjDnd4nFMbEb8CeBxv1ADMCb92tVnB7HgSnQagviukMiym6RzWo4fv3gKSpBxX2Gn",
  "key15": "7hFHt3xB6kGsGMbGBpSokrEkLLewooMtEMptFXG1vyT31FF8QfTcAo6VMkv1DfCe99hwN8GPYegoNaNJJBxmAbe",
  "key16": "357uJUFDYFxhbGjZysi8M9myEVnix8j8titLaq8srDZdhyKC7NjrGP2nvBZJLCLXz7iKi8DTJsSJs8X8ZkBbhtsx",
  "key17": "5WKcvU4woyDdzqdGh7qvoNgYci1pnUox14LVzqKVxzA7bcTxduiLCX3UYTMsEE387rLvUWktJ9NKy7ZCGXwN98h5",
  "key18": "5DLHNXzwSFx63TAc8QWxxGb5pLx4FR7ftXnsbY1LGTBm9g5hGF45gXRnmNg8H85V3iKN7UoswRrb5ZSXTv6rs6om",
  "key19": "32X2qpRnHrGAKJUx9HmUg8FGB52L2VQu46LFRugiB1eB6dPd1pkgW5CGPPF6PKCixWETG8rpS412Vwyvsu4MFYbu",
  "key20": "3LvwzfE49Ebwqfgt8XJ2NvvStNhio6R6et8x4bsrjdxi9GPzwk3eRyxnWjLcJVCrEbpPVXNF2BEcpx21mVBXUhBu",
  "key21": "4B3NT82baY1EUxSRujagALDHvrzttq5VgCgW3i5hk73zB1Ada6WhmBgAmDBASFs2VSKrCpFHnviWYGjVKiSpg5S1",
  "key22": "2TGssjAtqpEB5YdkhiMv59ezMk5gMyq8SqprQGSdaHGqh5Eo7p3Ly5hjqVn4XJypTA3f2Gvsq2xAb6kWrrVdJduj",
  "key23": "bMR2WFPrd8NDt5x4XZ53kMf6NbGQNZXP1etR1fSyAPjfksZZJCTXFbbvPhSWXCd5k1ck3gMYoAmpz2bFrW7K5da",
  "key24": "4BKZm8yieGgqqq5p2Bdf88MSbA3rMdYp16GDfEm8YsQtXPWc4hQmNXtPY48s14cdhL61QUuxxCSnCX64w6QjVMnP",
  "key25": "3UWj2BYagYAVredfupkrwe8FzwrEGRTxDKXTMyNxZA9r3sUrtsxjeQAPqyR3vZcBkaQWuaWiWn1HBwgZaqZ7Gpvp",
  "key26": "2E7VEiMUX2LHLvJJCniUJdXguk45NcXWQR6kVyobGPiBePT1Do4G5jjPDMyXEuxGyJa7Pv78kTFhqPvCyQexceo1"
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
