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
    "5iZMhYwU6iFwtRsn3zeLVwEEaeayUanSUxXRqBZtGNz4B4EQitjbkvnG4ekZyRU5kEPJPhJHeqaDE6a2b1zfzeBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJ1vBxpXQuMtbkcWGawk4oCpQVFUyzYhayt4s2Q4tMf2L7vzRtUPDDPKUQfcUrwTvbp6yxSyg7A9zxifMzxTkRW",
  "key1": "36AfBPKszY3qeHNHevXgXB1iQvE3mWeMkz616sn2w3vaBLxRtvozbbajaeottVvxNviokYZPa5PJqQWKrVeYekut",
  "key2": "4JDXnHDxDEAhjJbg1t2ZCepHmQshFvNxGXJMZkMifaTwp5qtyRVimtFZEfm84bss9rdbQBJ3JbmKb4qXJyhpGqEf",
  "key3": "3iNvFHeoGe88JxH6QGzM5dkR9RF5bn4YzRzCVip1RYoqiqNPG3UV8EhMJ6yr6VYYunYxV9c7U9F7B1dr2JaRh3fk",
  "key4": "41SnARx5Q9UhVyXk1BAwDETzoqvWnrpiYPqdWpsGQutsvNPYJutZ7mg1QMpZdiQoaogA7P9rd1156NUUDBUTBjJC",
  "key5": "4VpcMHBdSFchnPUdzuCKa7Hq4VBTrARaa9K3JcuJonvSCSYvA38nHjpdbMKdWb3wSCkbXcyz9cFqaTB7ogYJZn8o",
  "key6": "3AkUW1Y7Fa99Y6ogDcU8zwmQsGLSE4Gt2qAtD8doYDoRwymPnua3Akd1SNTuCgTo85LCoAMBsJw1tZGyMxERw7Y8",
  "key7": "4yvq3ub8sNzGTZG9kgGGF9RPNM5BjPaR4CsTHUnp7VcgyrWcxHGkDhjQPSb8MV7YgdfTv3KKkGbkD8XHdiwtLoF3",
  "key8": "2JArDyk2ohK65PbCm4nLc6oRy9N6wcNy8RQVjyaiGVqaaq2S1JJ1YWgi6nfCzGDMHhEnAwMDTJuqxZBb1EoNUWtE",
  "key9": "2gNyC7rZm3ry6f8vJNei85FEMHMepzpXH2oj44aTDXTNFuhXeN8jXFCDvzpFZEAZbVTpxzPr68ZVeS3rEe3ebPkW",
  "key10": "376EK3Va6yPYVBnVxwEUHYKeA1DLupfmvJCBVRo9WGJgsjMX2YEtW7aUxy6WdGfgUYDkf25gRXkFAq3Qdeiyy7PD",
  "key11": "VfjhJeQhSy1Tu2jtwvsXQ2E43xNGukWVLvCpGnREvXsMSeQ3ibTYV4X6vHHTesqge7LDfjoYfAfHK4cqZK8d2KP",
  "key12": "2XHyDuDWu15SX5as9oYKRyCuRnDNYW1pTRVmBg9ijoXLUegZ3GFWF7PQyTsVkauLfVkT6hJWXJWbTH1F1vguo66T",
  "key13": "36ZF1PvpX9PyvggotjjaddKQsYzVjJ4ZiDb8rqgLhhaD1CHhKomT3e65WJYwqPhtc1Yd4wYgkSBY4BRGtBRWEwH1",
  "key14": "2u9mpCupQiRRdRXSY5CPRL3d5A1T1tmuvtaF1hvPZxchcRi8fyqBy7w99G8P1UwRZLBPoirxd3kmvk7qAms1nSKc",
  "key15": "ZaHsTqRJRAFMtBwEhC1fW7AkpcN4XrjGrYshQXix7jnGybH8CVVE4ypfUtnGjbUJhptXwDh99nauDsF28PeHxAh",
  "key16": "5ahxacJerCvEJb1Njdi6uRhPBCMJEHeWC7XdNhw1tZgfyogUp4Eegmd3kP8eFYsfF3f6jUkMaNdzAgRB3jTrMRDc",
  "key17": "3Q5UkKvMcz8zQiB9G3GLP7yTpUnf9UZCvN2GrmVvVDNXt22pnvyABqS5oeSXohqte6tvyi3tBTQHhitcwaQNSiaL",
  "key18": "3VnXgRHbdjYFiwqFzGnDUAFYhM41pzjBTqY927qRcFQ7PmQx65MJkJoenreqhPQSpCiQMeMHACPrKaERFYJPAw85",
  "key19": "sQmvVor4XxbepRXZ9VvuvRCQfH9najZeoo8voJERpkPQBhKG5qfx5uKZVdcDV6u82XS5opZefYtwaqgPqJheW8f",
  "key20": "3zKv8YyRa5keu6MwREPeb7n8pKZG282GJXsKKycaZvn8hF5PGsF47vpVuyD9NADc75Y2qCwCr97GVgeJEcARepg",
  "key21": "38p8PCjM7Zanq2Whghys5ipQZFPy9degscMZLzWNthYUMvTzoCoXKfrHsaRnnDrxoaUhRM1FGznPhY9m5a74SXGq",
  "key22": "5a8C1fFa6XWz5ZME6v8VNB3qEB7kEUqWAJK4jrVanAByDr7GHt5mHterhwzsJKeAdhqAyhCw8RxPSyVZtXBE5r4p",
  "key23": "Jfto8qQNX6oAWEmzEcrKZCiuY3NZ8NG8HxiPcm7skTuPMXjomzrcPqEhqrTxHjAQrLEQhT3cSDTG1X2dtLERmut",
  "key24": "2kCcgLp5npY28am1xNoBNmXBe1ZHCu8koyJ3dEftMGGtdEqREA63uvx8ZMxRgrXKxrFCeX2Brf4r9WaZhJCqnZLf",
  "key25": "n58MvYXHAtErBRjnXovmiK9VJXYqFNvc2Z12Jw4X18SA725AWyaGZnbN7PB4ehDUm6jcrMWg4qRc5qLEaWJuEbH",
  "key26": "3Y4515kSg4rTtMnxRe5QGvky1twnqGVzLHJLxorz1Avhv63wbEmx1RamU8pK8sendHvFtY6pb5kmrxcrNmY94RP3",
  "key27": "2sFP4reppuD72j5wkf8NNTjjuL1qE5bKwWqFRdcm8qV4KYMZM1nRNPK76qajdxSGHCCQyBUdL2GeHrhxSaPyrTkb",
  "key28": "2xxxpQYBstJScqqFKVhU3orqmawCbwtirNx7812dE4uQxRVE5jebeGCTDjzRXoiFobsK2Jd8UYyV78nYRcAJ8imj",
  "key29": "3BmanmuG1KGu6oCDkQUMF5VYscm19fY7ppQDQSDQCh1WXP6MD3RtxLNRD4bMTXUwZqYaELAURWm6GweiMWjAknoA",
  "key30": "62qayAuL9mi7ENcF6EzS2c91akGGEToE1xDFvPTyhZ63kdz2ar3Udadw1XQxXdLp3XWWng18tKJ1KSBNeNt3phBe",
  "key31": "oH7opDJDwM3pvNW6sGQoM8n9HdqjPs5i1hARM5Nx6q6YHHQNB3gt6CL392QqYfCYRAEWfALGQsDQa3aUMM2HX9r",
  "key32": "43z3aaMpRQEGBGfUqAPHuL6jW58pJc9P9bCZkgE7Q59SNHw93BxrmXZLHfpc23TPBXXd6ABL12851NPC4L9UaKcj"
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
