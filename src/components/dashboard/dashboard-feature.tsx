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
    "3E5FVyxWB1xcdJH5SYr36HNfu1KLDeTNhTKgdZ8XNdkueMR2LLGvJWse5Y69RMosppiUEcRaDXboSMsijjrMe5xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DD9QfcP9i5xUkMj4XsKYA5a6kHa15U33aqqjuV3mMHFHJXScgbxS7F4WaB15tc4vpXVvfFFJNxtnpd6dkZze8Dy",
  "key1": "4kpAUYij3uR3A82cewqhS1Az2dVqzY3r9Mb5yJiCnfNKELtkVGcMTX3Cf2cDNzbrmDLNmo3my7cyrmF6nC6VGCnT",
  "key2": "61PyNnuT3j8y1ev7Af8fCdMHinTc8SG4bL3y4FY6MSJyZ3jbdTGmdeDkd93eAL2HYxpWzkFiDeYroeYdHbZycyu5",
  "key3": "ooX8A9BUoCFK5Aov3AqjVpyNj9A5e74NpqZNBCjMaKbqKmTWcuzFNNAb2Gn3GPr8nhdrtt41sJTKE9jVYfSuKSs",
  "key4": "5Nyxc21oAUuHSdmJgYxBiWdDDRoQUcJfQyyLEREPPHvpLpEL8X3vFJM8dhL3oVZLej5ynDUwQhJtnXABLDjRNxdC",
  "key5": "47xrYoxodn2XYvnLsnBaThYcE1JkQUxdVRZKPz53QhFVWy54uLZkMa8RkBfDFnPPcQoCpprqm7gRbXvm5atVFp3q",
  "key6": "4RiDnPUHjUWDBvX4DWi5a8JHfSAq2WGkcBVSvbihN5FPJKAHLqn9vSNGrDE7ffD8pjppL2hW2E25zFXXXPH5gppr",
  "key7": "5oVDymNxWP6S3CBbpCosErLA3muvYZoq3epiF5NgrtAE4ywe5moUUG2Suy1Ds86ccZnWMCJheBjiGQ8vUEoGVPm2",
  "key8": "3BFbCjXYHX9MaNYVK8SkYaFG3wW9vsz1K9jjeH7TrBn7m5BV25bSUbSdpg2H5WmnxbNkWSJt8DwcwNSDaPtmiq6o",
  "key9": "3b368Lo9vvjSBZbhaC8aZMAPM4XxFc7z7isMdB8X69mTVHmBNkhRXddW2VU4PnF2z8xuGQ8PqyMdbGZhbzwSHWiY",
  "key10": "2e3SkqD5fdkuCebH5cEs4Ldy2dN2yZNHhtRbHMqDufUrTkpzPRUXw8rL3CbefZZozRHAJogibiQWjGyM2MzRkLxD",
  "key11": "5pnDDr8VMR8HoPFL8hk6fxGFgvwQXt18j1F5AXhFRBi4zBhiCpdLX7xMzoeywtq6tuWN5JoiLB3EEA6n9Mgmyd9T",
  "key12": "3pYDcWbUMPiDDHPwQcFA4pXZdz32bCdD1i1yKFfpUHMBTWufJqZ7gzVWBGzTw3hdkPiYgm2BTFRvwfKiuJgsbrSK",
  "key13": "5yH6aVfduH98nQ9Yw9ZU5RQsJKQrskvmnMM6oPwgqmQ8HNYtxVBwXX1kUqBHkZmwYKYqKZMS7nwpXj9n6A6YEaaT",
  "key14": "VV2e3vZmuHeFeCRWQnsvdRZmX4mN4egqc7kvNJQQrXSrKcEH9n6w2QusHnYops9opNAAD8Zd2JDikwX5G7qPbeY",
  "key15": "27FMNR7pWTidmCfmQer9BFGpWheT9gDPrtu97Aa9G3T2qhzKV3M6DRrTb4tVQ4jqMKEVomHjG3R6BUPQRkNXY3Je",
  "key16": "4iwqNkPBWBrnisR1ZS1tz6jGqc6wuLHJJQwpAVcesEUNcC4KD6E18K6hcbhPezNKD52wXW8cKrSjQ7mCdUFUSTug",
  "key17": "X8YvPVdcMZbCXArQb5B5TXBCoqLPrYnTSTBLeM3DNuteJJ4Ko8PFynkCryvFj7LApBuAASAeXxPSoMfWoPQvRGq",
  "key18": "5y5EbbUMNhr72ayWXWehD9bXwqTGgEt5vQZbqhVcV1yi2UKvw8s13gin5eFaWKeW1jk2E4dTAM3gwwQNi4QgM1mP",
  "key19": "4iRtUebAQ2S69nVuAfdCMHZZEbuRDJMunkgycy9pHa8KYn1ZBBxrsFd49REzyH38bpxDU8GkHjkEKwWrGGvuomXF",
  "key20": "5rByxpAmeqS98fGAJGUY8pPSuF2tvrroMuAuHNZvh9SpjYKYmy4cxHkVzxqqjhKrzx3Nvky9RfjHkXgFyVKxh3zK",
  "key21": "5EBFrQhCa9qy8GWDREK9YR7BpCfa8TTBdjacWnkiB6ZpTQoML9EyVQoKpDPC1svzHzEeS271qsfTJbPMXXW4XXfX",
  "key22": "3RvwFPwgs3p5k3XyuecuYJXkmmqGDm9nA2ne6knpzyDjXrURGarAWf3Qmv5UwhwAxC7YfC3YgjXYN3LRWD6DupAq",
  "key23": "3APbUFJsFDMPQ8gaubUDKaWG3NYnRnBj4rj8u2uPCfxuxX9HZz8YCXx4jZaHcyAudGVAx2foRjjPRQcMbRbfuJqL",
  "key24": "4wn1HhfQJCqRUPT8Lj5EvBXsRmF2QM6pwQJFPuVgNmy8xyjoHUcgq3RZQZj8AjjmdUjPXYQxAtqx6AEsRqYB311V",
  "key25": "47kphg5CjZr5iacSC1cKTgu1Ruhi72ULJkGzvG3NVND2w3796z3gt5wsSxoh5mWwy4UJ8Zw4hp2nWjo72aBfyhvM",
  "key26": "3hTGZJNLhgKFiu38th1P58oeNeT8uPRigF1RamRkikf7raxZ3ww6zdSDUad5NRLysrZvtJsrkwPaGExbWACzqMQ9",
  "key27": "5cRkcyJYViDbneGPdtfim5cygcitz1CkLRrrHnzm7dyV5b1ZhTfxfMd6M6MgYJGESDvb4FAE9wxLjb2gHBtXiUiZ",
  "key28": "49xQY1yLbWvFRJyFqEVu26ZfEuENAvZftW6hcJN9qwa2GEyx7iPyoa8pR7GEEAvSxH3QC5LgLbhzJm1uqiGpwMDb",
  "key29": "2D2ewWse4JbjoEKWC3UtbraSv2FugrafStpjvqh4X9ScRDrLRiBEWanjACCMFSEwGqRxGEhW8evwpSnkNJdbTYdY",
  "key30": "Pmxg2ec272YQHp6HXMbDSMv8yLssNFTCxGHfCvoUXFLtc6n3GKRpr5Ua34rheWFHB9nPr7SSUYX4gre8ZEYmoz1",
  "key31": "Hc32nkesZZByWUJGDBBWQJveiVozkECYGbMfXNX9Fpr8jqbbhMLCLJJZRsuHxs7xaBtvP4pbV9uLJELoqQ2FdAH",
  "key32": "5eC63TvQ47VfLiU2iUwNt4j14gabJemQb1qQh3S8tvMfBqYuhuGTfnYv4ZcrpH9h9nZVph5UKvynt5UNXzZU2Xr9",
  "key33": "5zDJ3USr1hnqVYHEbC5dp9TZa2SL3n9csFi8ZbQSga9U9DAubbvAKNVyysH2BwudpZNJ6irkNR1un3B3ndxHLoAn",
  "key34": "3BVSFgKeRmaaREk4viZyritJad23k6x7qMGz6fwxWQF9hXKT6T7ZXKJLMdSoqkj1Qtheat2bMMoeaokjAiCHjKd8",
  "key35": "PCqJbGgmuoVzubaasgcDf4QAynxGRbbXRnTpp69Qp9gRJh1zSsmVuQDKV2soMWkryD6aKesV5RumQP8Pg2yY9px",
  "key36": "3m9yfY9yN3HSCYcNwFYdoVNZrCj9yyK9pyeHfiCrFqDPDggsfBVQpeFeCtuNztBZ328i8zMUqaWgQCXg2HeKqZ4D",
  "key37": "2Qm1oNHfHcrTbkk3HEyuA8xEXUGmJwRGeJTg92gQvWgpfSVcSNbrmPAuFtDKVx9LCb5MZfAu9EzXLtBp7E77mqVK",
  "key38": "2YX5aPB3iJFA3PfE9idMN1y1vZajUrDvz7swMYCLqqwQ7cpTbpb5gYE6HYpovQ89MryoMdLyHmHJm4ojBmRKvKkh",
  "key39": "4DhtJ7BiMCREDCyu7kPCRQutuEhQaTWhYvZmmdXELZgB7mA2e127GSijciaqqyP4nMCGxSWRycBGGELrzrasrKPB",
  "key40": "4PeYWKohMYtiCmRc4mmxeYQBbe18KvpprneFxy53wByRSJLybfSv7AM36gA9D9L93ekzN88kCP5jSN91GbrXLk8o",
  "key41": "ST1Rvs199uRD7Be814xLg9zsv5GaFMeLP8t4E67B6fQu1dXmHCn8mqbi9ojJza7mMMsYA3HdisHkLrocWKb3CQt"
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
