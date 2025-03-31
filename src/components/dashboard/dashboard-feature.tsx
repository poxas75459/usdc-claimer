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
    "5wPZ8zadsuq8kYhRy1WvY3ZYw7sBxUpE8GEHqY3qfNwEAunnaFS6skCZXCCtygNJPe1e21AjCPd715tgdfFMQ2qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUkHRK9dWiB5AeBgkmnei7vqKpkMx2ztRLxBoyJjzKRf8RFebrBnxDfp7FU2vc9WxxN235sVptZKfVpLZVXRUGV",
  "key1": "4n8YDdThMyNZqXZ8qMQgNtyHRNWgS7iXa2RauSvqq54TLWnJqTD6Yj9nr1hEuM6xaEqR2zEyNETBz39NUBRbAG5",
  "key2": "47MjmSA2rgrKVeuQQwuWRuWsjDvDvqDaRCgUp9uV2VtvmTzJiZJnwJ29XfJiFV25es7UdSxixKiF93R8dmGnCcZc",
  "key3": "5RQtgEmCUJcdLqdRY1CHVnERpT8cPTSneFcGbndtqMCsfZfZXsJeeExTzCRUsrXgAntzE2xZVKrPN3dzjrBeFqjz",
  "key4": "3Sx6s4VLFFWrHLd6KEvCK4H7Fz5FuStUx6puhB6uMEFu6xudvjLQwcY7bnfoYTKbBJ4kKKUi869DGbnCDiy5exvz",
  "key5": "5zhS2gZNSHK9TSGKGNd6QPkkSrbaguRCYsioEqdUHMzRLiiG1imjUgvUh4BkSJms9Wrun1QoUUBwD5kqKZ7k8KbN",
  "key6": "3prDWW66iq8Wqb59wG8VdydBLRFAS2J5s1QpHP5CSonWsZqix1d1LhVJQMzwrjSdBwMctgeNLCrPMRiS6KvdGRb6",
  "key7": "65KvfmcCXDBqBS3voifrciaqEtuJ34KR6aDxUZqQ4c8VjQ92bVZg5Ys9aS9Wjv31rpYayBi6Bg5jku65ZXRKhGUB",
  "key8": "5xJbz9JgqqaH5oexB8TCjXcx9ocHTXbPxmnzmfj6CNhmgsPhzATTMnfjCViqg7dsmCMrHUKcndXXoNjbAzHmPujw",
  "key9": "4qvVKjn3BGubzdBF6CAoRme7mBmxQbBcHi6JapSYmbaSQCSPhZwsSrpxDvRoYa9oeb3TzywcFzWB7w98mneoFb6X",
  "key10": "21zBBLjGdxc24Mhg1krJdbVmZaDqomuA2Pgn9NDBGSqzrDcaHZ3zg41MXWNSdVuniYJLf25jwPrZkTxo7p1LK5RE",
  "key11": "qAYnHL9YaAbDch9Y8sAWJeFdnqtyqFZHDPy9yv9yE53fUzfzqq4DBt5zxK36ZGd3CHLJYV6M84ectd2YdggjTKb",
  "key12": "4WVDLUahghPbd887C95UyFdG4SeZbxk7SaQjw8v5yWEBJNAxTrXauFYj4gMpSY2pPXuVhcq6UHzhVBtZSP5NQusC",
  "key13": "4JNSpt5g4NcWsaSiiT8QpYndtDsP5KepaNKJeZaYv5hRtxozV4wWTBJRRcZyQRxuxpzrCuU2k4EBBjqUZxtuBURM",
  "key14": "2nmXP5eAa7mTTv58ecACC4bX2sjrqgCLoFBQpzLYAUfqpqvqznio8pQWMyBMWBL3Ugn6rG6yYUjSbsw6sjkNNncy",
  "key15": "4zc8ZkAjwxaH2WkSDc882u4HRGRAjPK5fC95xS2gkXteuBzacdcokPeLFN9uYfzYab6Bbn7N6mRdE59wznBPV1p1",
  "key16": "3XuTQ1fNKvfFHEx28sK9pxBrCLfte11XbVfCAMrp7rRpjxNwt2oTrCgUMmxVhFi3L4EHgkjqC7foDB2o6rYy52LY",
  "key17": "53sL3AWGw7LZXEhM78uyAYdQdoUsST8zx2dc3cj3hFD6QusGfnmjfkTuVnuuTnQaU6DpGekyXW7cD5HKCE81LESt",
  "key18": "3dv4jh7j5x2pn9ZHmaXcydrAjYZaAC4etHyCx95hWMGTZkokbuknehuPbHTAnUTc1ZYDM2N7S9M7fkHb8mZsvtCh",
  "key19": "32XgnpUU33nM3bnUPJHJ9e6khikS3jQqx9abnt9VQo6EbwhzbhgjCyDBQHw1xLcgeuwG4EceDwMuT9SwKyDmrZ4M",
  "key20": "48r4pHMNdBwgnPE6LThXy2KLWYXz6weSe8Rwhxh4KRsAyWCwb6GMYtcr1Fq1baiejyG9RpfMhGU6yeguHi5dooqx",
  "key21": "44EdeoXWsQat5dppoacn4CSqUtmmXNqGst6AuHXtDiihSSFKSEhZM1UiiTfEc5AKyZ3KQP9RxhGoqpxdeWrb7phj",
  "key22": "62fDmRQN8Sb4YqPbroVpXgdj2bSYJxb4RB6bU7e8RfXFhDgptwpEX2dDjNbFtvWTPWL1YXncGXxo8qRuCQFXEwBv",
  "key23": "2anMoEZAS56b5dhvRdLgG5fK8ZMXB5RBiAWZK8jd5SRDPJchgXwHTu2sksRYNPCh9yrjgNrNjn6bZvK8uoNaX7m3",
  "key24": "2Pj1RoDMKXmAj19STi5PKyyFfGcD6GW2GhYWcfm86BtDi69dbH8tgq8SAUiHffsncC9qguYJ7GnvzmjFAWgxTfPZ",
  "key25": "5Dy2nP7KDHSi5J2LMUFXVmPEQskdfPyDUy7dQvoLtSvMXgWdRPBikrsqWKCGFx4zpYwu2pq6cEmrQu25NLsRDqit",
  "key26": "4aHUGRibEJSCVSV7u8p4yoCGHKfPNi39PbJqWioY1FU6ES2BCCoEejA84mFw29yG74CxSuTMJewBnGbo1Pchyaza",
  "key27": "435hnbUA75jV9ZCLbWH5Rb634K8aEMGvuma1Ksy3Cp65DrGpu5hnUQ9Ny4NtVPkVLbFuhAhSbqyF6xU2Ds28CwNH",
  "key28": "2tmZbraUAzJybdz1NDTrzXZxUzCNTLv4nofBfSduPPYQTnYuxz3QxxuRvTFo83L2T6ErHbmq7CWTpx8nxna9nEpf",
  "key29": "2nrQKcV4x3iDYBLgtaewbtiM2Xk1rt5pgHquHbyrkyfi14p59DrCBp6ibaqrp8VZ48EAHJNPdJvfbtWCLtPqNXJw",
  "key30": "3M6KYiJvh3vNCs91WFyREoJYrJrz986a9zEPtSwuCWuhQ92rG3XpCUmuJaLSzJXN7XJtFFmWatWesefEBMVGPsrr",
  "key31": "5woSPW3xoXqMDJkeqDpGLiZk7ijjMLa5xZRSEq1EvsMQbuUHUsQRCuxSvnTaaFs8pdLSGRPE3Jnz6prtmTtJdkef",
  "key32": "3ruP39thFJeK8vG1c3WkjChEz4BB1YfmYMmwxC9RhTJoWq4bCqEa38tZyRhSQRSWyR1BFkwYU2Y9JmmtGHqPhdot",
  "key33": "4TEV145Mnbc2hSLfzAUu4uJp4hVfz1ofGAFi5S41ND2YhXowAzLu9egYaXRs6fgbtK9QZJnsP4meZyxTvdLbwiac",
  "key34": "NUTVNADfSzvZgq1jnN9erLQZ6EgriBULosxDsxGPm14UtNqmoh8Ppj25Q7qUAfW5BvhAQWLbA5hPzdXXstWW4aH"
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
