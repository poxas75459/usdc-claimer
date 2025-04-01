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
    "5M8vjz9pMEdQfsuafy6Wrgu6bT3myYZG8gQgBi3KuiBpDoBftJDDR8qKppLS96NWEgTHG8VRtQsU2Tv8LCBYUJPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZGs7iQsyXL4ApJ7pBFKCW8XABbARDEyz8PTrzEXFFssAY7LCjTzxVLVfYZBFqgkW87LJz52xrWoKuxPsU71Xkb",
  "key1": "ShJNrEFv4tgF1GGcrnFCBgNNPxZi6af5aMewfSvAs7uZuiFzQxTCWshwty6u4y2fG4YeMZoQRkRx8uqJAPnSYeo",
  "key2": "2ZQFKZu3RhhpGNLwvLRUuErDiHwHfHUJxXPpz4eG9krvhUbviNmhMjxWCLodmFjYrKCcx35hLxonHuLPhfp69vSk",
  "key3": "2Jw5c6o4kMGeo2mx8y7YsGMaj9aLazzXzKgU3E95CRYrVSdP2TPnGccgenc6PefGbgtL7QjmynfGnBP2XFAEbW6h",
  "key4": "41vc4UtKNwCjejvV4KL1ZAihoqiKqN2zRj37kHoCXn814qtUSJHEULUAhWZrnQoiE5n2foGcpGkH8ZHSJ2TbDcvi",
  "key5": "5HWY5RfiNA7ggHnK1esWgoc3cGCWNeVAg8q7vDfTN8U5LmzhVxYunX2g9fEU4ouUagRW6JLU3dxs93z1sGq8qZJu",
  "key6": "2w9xyXaoYKhJhS5FzKZb23ntLqBaKBPnLjHPRtVRPVD5megkL3Ua8Z6XgHBAAryw8vhaS4A2utaY1Cjovi3aFrjg",
  "key7": "5qPTeFtoqyrqLdvqs7DVqQWyatqhrUxKzSkzPmLoqRjB41LPV7pN4V6c5jBXZAiihVcirQBfHPQhMHFi2mQqSQoM",
  "key8": "5xPzS3FmWimeJn5MNT2NaEHrjJREX75CeK5TQPUaSM7hZdsJ8boFutC6YcBYeQqbGrq31zDWxVfDRddgAfcszpKW",
  "key9": "WCjTU3t8nfhpQzAFeiKMqMhYNrnGjDgPoUZdbe185gRMf89iFhK3VyJ6bCJmhNFB9oevngKnPHHv4Pr4cAD9uNF",
  "key10": "3KUa4aTFWmq3MbdZG63gRVFafLt8diGeDSPPk23qqZ5DXh6C8wWZ8VaVE6UA8jt8E9gbsqvDxPDMJs8Y53FGD8W",
  "key11": "56uofhVZKViz5DgHQnb8E5KcJL66ahY7DZKDjxcSAoJQS6faJTjQ4X3WTHP4SYGRYH9iY8CjKnpEyJDDuhPX8uah",
  "key12": "4x63z6cZ3yAXL152m3bz4GMj53E9id8tvsDAXaoT3nuy56vuZpzNVatj2JWNvRAEekct9DxD1XGUft4BNH2bBxJq",
  "key13": "4ibvNqZk6tUjJzPPNkSFtyJEMioiPHfe9tY4zc5c4i9ibFvRbH9jTFVykAgC2uapqd1KZrjW15CEa2sr92A1JyXW",
  "key14": "64LNcymFPUxWAYWum1fBZ64UZdHosgzqrjepx6oJcxAQV21J39H8as76GpSVPt1GTizEwvEcubCtdCNSTNvAoqYF",
  "key15": "4P83u2KR98zX2XEUHxrNy4mhdt31CLQwuNKzx2wX7sqwB1EddtXKZ8q9LRaR9rR2trDpTqPL2Mtw6o9Kmx8vryK",
  "key16": "3XcxrMWvKYuhyygBFLhB17EHvRdFbsnNbToCPR7QKk4kEaeLdANoAhuyiLTb2mLPfduc1Gbo1qgZgeepygGoCCVa",
  "key17": "GhTSkXdfqokNvH2kHvVEupYnJk5fhBArW7sNXvR1LvTnNfa5DYkpSUKU4S2KrobSsMzeCqigb1iQidesNoSy53w",
  "key18": "3PK31yVss84gxNuScMpY71gwB1fxyspfgguzVciHdn8YjGKMBSVgzyhH7id4ejCRe736RcceoRFnhzBZf5CK2Grp",
  "key19": "5G84f5UFvNCPeyKihs6Esuq18aueywek6mVqpi5mP4ZP6kWEwxDzLqds8v5DPqyadgud61QPDceW6WnVHT18r46u",
  "key20": "2hXBCCSXSkEJztQK4GPqWsK8YyNebo4rcdW2VFdYGGoLMQV6iXb1eHEqdHmDz58XSfb84jVqFjfyz63gTSsvyKLq",
  "key21": "2sh1b69RNanhKrE47GKJjsdUVMvdLuo5RHgMd2jBvphmwaALQdvYDWGCtDR6fgEmpU9Jwq3tM5gRnLdVdYVwuDch",
  "key22": "4Uu9CyHDnz33knUGwzwbd9RCdQjmSuRexnhSexKF9jkYGMYhozYsSvFWGXSnJGeZzuWSs1hbaNZ55PcUrs1c1VoV",
  "key23": "zaJkC6vtLuqDSNZXnN8rKjtqVvzdfiUnKZAyK4EjmN2Jcc7QgF9EUxqHm7SZKr35SiTKBHH4L4HL7Ki2Zb2QYD1",
  "key24": "5jGRrGy12NBz3Awbd7ZAzM29ZBf75ekvbJQC1RaDtyibDi6Lc1nYMb9vNSkjQBp7V25egBBbzhumH5RPjXtiDNFh",
  "key25": "44eJCtDn2xnjRGUY5ZU9VUJHpW9ApJRn5GxZQaZRXrEnyNuhJASv3HUzLdW3cKipV1U1wZWSZvERf4Wj71G9oan5",
  "key26": "5RFNWNzkC4pWhkRqFDUJpCPKmqQDXW3DWtkfzbYqCpCb5zA9oXkThUGisS3XT1pkJjjHEamPCnJ3VNER1NdmgZ3q",
  "key27": "3457CYFuzdzmWhfRTmazD3ZAkSZYmc4qtYYcPweinjy9wBPLhvkf7c6XTWiMw9NqEXhHau962DRCPrLPhxnsaHsb",
  "key28": "4EXs2ke4HDewo51FkAhu7EwswMMruJhrWgRBfbhDgJwULF5t8BcpTksuJQBGocyTGqqyFh6QTXAjmcjm27PXvNNJ",
  "key29": "3RxLNN7LJPoqCQUThSJJvcy2YR4yormKhhxu1wi1RsubqoWEfJhQGJYgWAZK45LpZDzfZVtRSQPDayBViFNTqMqi",
  "key30": "4NjrPyjypZa8geWq4xcgNZRfduBneU8ZueC283XoS9ZqbqBFwndzoosRfAmuR7q5Ly5fBPGnGHQYjWhQkNiVsncw",
  "key31": "5Gom26KtQRtz38SYvxs7NnG6ydgNocYHr2LxbBi4ZAxzA25WK3d5HSSh6CxmoBjCtXrsVgkp1xfbUS2953pMWkV9",
  "key32": "cxqeX96o2YU6H87Ae2Z9smhLCMDaSCJwvsk2WzXMP6dDDS5ndNQijbpT1BhUT9r4izQwkAm3Zsm88CTkTzQJypm",
  "key33": "3oDCwminLwtnpr3j4CKQQjMb1dbECMLXY35dkafBBtmuVBCgkS1XHAYqdwDDaHyYNMmeXyG39n5Bse8NPPzdGqs5",
  "key34": "2Wqxz6shLtidnguruMdWEcWjHdrxHSeX2AycijXs2qnUhmL24BaRDSXrPiGKF3WhKsJumYziF1nzLj38CJXJBHWv",
  "key35": "5My4ePthpwYKwBah7taPvcDpwna9BM1dR3GW4Nb59CiuSxhE1VB719wy9nD2urrEUqZsg42PNN41sQy79o73A8yG",
  "key36": "5enWTX6sgLtbGdW5bDTNa3PdJCrFuKgH13JbfadGRKMqCnbj1rFUoi33hJE8qNq4iqCnQM72n8hXtFtXnUoxbiwZ",
  "key37": "5e5X1T9QRdud1xQPTz58gaapfea2wRZrEvjpWVuuCeZa9HM7YAfkyZdpyt8RKYv8oANcQ6nUJBECtrrB4ESzSR6r",
  "key38": "2DwZ3qDg4c6SL1d6sEfVy59puguhWzbHC3VwyoosPVV4udByDo5okjFPcqmanpiaiDF95sej9xS5MCcFyRRaaA1y",
  "key39": "4tPWWrfWFMwsWNkPLmb9uPjw6pctNCxf94jUY1F92v1c79iJ29p9TmKQie74biiXDMJrCEkemiirChXaikzUZSms",
  "key40": "5cvWuVEFeHgz294YCuSFecMDzA1bgZMpt54KvD6ezMhELCFU1xPk5mJWsGfZFrNW6FzUTobExzcXsQ2nt1c3BDJW",
  "key41": "3DdKJJmKNCZ5Nh8RbPqzfe6yqgM71VPhNPfj5WystMcBDZ9zpxxmPoMs16yfoQKhURJceSWG2K1pqWYvSeBSSH66",
  "key42": "3fnVQHaNysrevPWUpV7xtu18JkiqZNCKMV3oZLH4xwk1a6XQCEfjqDAdiCKVgQELiWC39vyCZmGRnJCuiyXZ91BZ",
  "key43": "aFiHbQhXvY25Sq8S1TC8kVc1eBwL99rEYNLvM75m7BAhzaRchp7HGUA1fSaDQdHwGRvqbfoY1AVHW9mggwwVofU"
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
