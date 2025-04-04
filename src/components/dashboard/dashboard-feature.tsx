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
    "2B5MZ4kQiiGzrw2HU23DpEjshnnxoPidUAwEzhuXEetEDtgd2GQAiLKS5UApUX4gEuh96VTH5bHtXchtNLGk2ZC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gq2M2QYumwWPADU6q22Xh83TdjwHFmh5mBcAdfHXMY5KRbaU8EM2cYTSgLsnXHMs8VL1wEKKUf3yaKPgRTxmQwM",
  "key1": "zJVaqJ79HMJbopsaVZAwhK8dakPNVP3iU1mB14WiYMtxeZVj7huU4SDfCea3q1XibhFxeaQpQCuZFYuoTudX7Bc",
  "key2": "5aCdYQoFTfWtQrReDH2zVrLPMRTvgXEp6HVgjrbouvdjC8aF1zGq9cd5pbXPMB8YCFuHzRRoNeopaMpmbWco1SFN",
  "key3": "5Y5FcExtTBuqxf4ZQSkKgc2HwVDhM4vJfgiJGbnCUhNnZF7kkUWAzX2t6LrdthPuSCU6tJsjmnKfRftsdNeTRkSx",
  "key4": "3HDWvngiTNiXBAr9fNViYUMpMe51C43SbpNyarJNn8HB4tQHggbnJfKzoco8P2uf2kieYRHGz8EyypTTkBxddNXZ",
  "key5": "Df6tWsSeARqc2kWiaU7Loin7hdecvH3WWXv2chP1vXMJRw87rH6X13Gd1sj6svyS6KRaXhesLJqrkLUfYyUfmLa",
  "key6": "PnZSBHGTuJeQcHMpgmdbCfeAhvrkkKDFKtaosc2o8saaFT3p7C5BVCGfV1qGb98uMqWwta3xfhEPLwPgyf3dc7v",
  "key7": "4otAwN9EFYDxwVJLfQWoZg5JCQWnYjHbEycLozv7HvDas6VDgRSLJw8dSDxi1JfWzTf62RZDg6iuE8EmpD5dsbcM",
  "key8": "65vdGVvsoiQdVMTus7nteFurWxvWkny9ukM8NgpCoAQX6geBkkMbUCPKwNNjdsUWuWwoh4AGMD7DJYW1A3aNKpHx",
  "key9": "2iZ45tarRv9Ku4zCoLTTircgDBCr4FjPK88ppXYtJxE28kP4DP3m5dGbPxLXJJ4QLgDmtkjhmLXBeYjVLznaLmBn",
  "key10": "o7HF6UvDqFMVm5Cx7FmLBVtCqpq2wDka1yE9BvYhfdggwQ9EJvmbJ9aSiKbYaYgGZ2DQx1VAmhofu8PK53S6NCA",
  "key11": "5RyDW2Z2Ez5C5gVsbKuKKSKxR7joFvqHhky9Sp6EhX7EbfpsBxsT763wK1Nh1TtVCbnBSC3KK8iouWirma8fqqF1",
  "key12": "5XsmgajrPTo8RnHtTEsA7ePxSdqGXYCkMyT4oPEddhqN16dS2ab2mE8FopYfsXUzCDff35VZ2oSvdQi8KrbZgKVG",
  "key13": "hqmStyJaVFmKRdFnuHWfZSM96eqtdWoj8KtFUqQTk1DJEVBp6pNWAjUswxq5G6gykoxL76c5vL1CxBNm77Y2fQh",
  "key14": "3aroXYpnsC59DYFirki3omkC6RP89xtKKtKS5EsfiGydN5MieaTmpVQyRsNA49bgoAi3mW8BYyXUdZDfqqkHQLz4",
  "key15": "4TVqstBY9Cw7xm98Hn2qxhiawkZMuHvrVPEMWbY9hWDuM2fA3QasEQcZ5VHJuBmhxpAsxCpVTKDhRm3TwBGtdWpL",
  "key16": "49KQ8EkSRKYRuyDn8Enji7buuWbPcLR5osBpBhCieKowc47hZv61YCmmKi2gAoNwg6L8Ht5nTAUwguizaS9mTs7F",
  "key17": "2YoSp8JNkQKBD6bT8tYB6Qi3XMe3Xy3qiXTGEzFX5uBmrsMjkNt1SGACLUP9nv4zBs1k1dSP7C3mRXeu4eLjSbFL",
  "key18": "RRL1PZFXm7F7HdGWknsFKxvP7xHnEzJjGPqnBzWR3ryQZdhhEUPv78ECv47zxEHrhTRviFh19r4oZu6xax7X3UA",
  "key19": "4W4wU665vpVpMEqH45QFTRfiBEvLmJ8vJyhWySUvzMEsL4DYkWBrwts1sPfan8XtrhiVGgf3po1Q6EjMkLmUm24k",
  "key20": "2EfrpK6tWMBt3cA11B5c2AtJMEkYGKpmK7fqXFW3cBne5nDTHxxA49m4z7BDkecdrLn2HkSP6ztxCEpbHw1jp9m1",
  "key21": "5bJJ15vq9YfmFXecosnwMmfpJdkWn2uBrUCzufLXGsRVs5EdG7Ddw449nM9oiJxgexWAddPfRguvRvBg9DC11hAh",
  "key22": "63Kj6x2hs3aZbRn2bxTD8r8S3UbMw4j1z6BNLBPsP4vKxXKXnMXHdeFKgRNXhYc9UooMFSr67WFoDMUoWusfsiYS",
  "key23": "kpWvfEmusWDF5AQe3ZNmLcCUCStueNj4tqrBBPd49QVNDjZeq1GG4ESAEEY3rEZCCSturKFG1AsV6t42Zvg6mBP",
  "key24": "2N2VDRf6QhMquJh2fMzQ6LMQo5apskQTSEXDAwtgh85xFpNoSomaSJBexMzVWeAXWza1t7pyTFJEvaELn2YNi7UB",
  "key25": "4rZS1FoL4MU2coS2yoVbjeiT7XwycJcZkK8kNFAqWsXvFABdJyY7XfXx1wnKouxDvHfCPYjXELnRXBreiumhbqq6",
  "key26": "5fB7JB3zY6fP9WcefyZ797XV6JBDWsw9KtJe51gdfoAwz17yNigBPg7AQKGBgY8N2nPEyBWumy3BJyAvgmXoy1x5",
  "key27": "R5RNCWuxCiu3v9KbNoXuBKaLHxVZyzHu9eA445NLUqauRmHV1aExrEHFQqMZSBQHKem8xqBKrimzrseFSiaDvkk",
  "key28": "4EgJ4Ct4T1ULPc89hvnYtvh7AabQxwi9gc23qFKTqL76TEsrWNqTRyvMs9uUwuTRPxBDa6NrqNA6MpxQfaGZVroz",
  "key29": "4SgxqmUbewMkNfkVoeGXg1na71JMZC1skCXbGutqVCro6uNsYn5bwGFRxjUPrXubWcXkcqF32wDTEP4x8rVgzHoZ",
  "key30": "3aRpELHsuJqver8XAeGNzeBXUrJUayeJn3bSPPMrwrbREkA8Ziph8zEZmfaiARAKdEYxsfjHp4WjxwHeCpRRtkcQ",
  "key31": "1MLwjrQyHPGaTvkErZz3pUopGUvFZFaaU7rsTHx2kBjGg9HBQcyb9WfByJk8ECRbm1L6kpkZa3f1j2xXFdi7DPx",
  "key32": "2b3bRv5WAmKMmfsKxcdUwnt9Ajyo1KQzdjewksiEzHGR4vo87i1L7Jd7hLfinETLeguYVaeWDgPvihGPvHXW1v3h",
  "key33": "3Fzjv4nxtWQhvGoQQF7WHggYbPsxiWTeD8T4GVYNkaddDyWqMKsqwoMzK6gqWJGrF1QgPBw1TEMafZwer5roRFMk",
  "key34": "Fv8pdAViZSWyqfXdaudwa4c84d69qe7fb3DUDUwaNa86bFFYg7KQbndYmnbjwCduzdDQsA2fFPqqkK8wpoQvamo",
  "key35": "4R3SHYgmoiR3AwSpTrHyJ3p69UDLAuogqc2vdkFtyeuHbWSd5jHHeEJoJdRhgfCKBXKSMdFHgMLeJAx4yLgFkE8Z",
  "key36": "4hyBMgKfEmsRmE559W4g4KdRKYVHQWQtSX8ddYBppNSCiB7TY3UtSiVJbK7icya9HVyyEJJJs5MmtovyMCHyonaW",
  "key37": "3WDdRTjkRnr4JSQQgsJe1R4cho8muNNUDjmrsuteCrnWHQXo5oXtAhMrnYkXKft4h8TZ1uAgEM98TUdvGY9jaypg",
  "key38": "2FGuVPGJPCbie2Cx2ARSdiK9gqVtZZ4fTdfpe6GMfN9MAZNs358zWzSLZpqyg7YN6coxTbH2L5kyU3qqZTsphaai",
  "key39": "2S4gJzLNZk2Zz4xLJ9wtK9ptafYYMvRmespzvbrPHg4HBJYvos2CaU6jcVNHXRqwXDJzWSDssKRNPpXa5JD14DCt",
  "key40": "4u1ZMu9GFgXf79u5GeQ7Pcsa74ThmcqgfJVYUTFcuhWAxxf66Akmb8jGGZ8fEsJ9prroTp2SnZdQuU2zM3c62bBp"
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
