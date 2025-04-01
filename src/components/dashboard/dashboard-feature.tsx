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
    "3XC2HdJC2UhqzAnZkFhHyUZMwCWXunNQMC1PsTEWHwjvcLgg9P5w5sZi54ifwUYYAjqaPZ2XJxhzqzKSkT5iFiZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crDBMCXTzueWXTpCp1rY3iJJeAxiPD33pKMpLXLthKRDEpctP7eitnfSfqyNZjHtBhNX38RdtdmAxfcaEunjavv",
  "key1": "jdnEUdvFVy2veHJBjU6yt5c4A4zgL1V2i5WaxQAfYiint4JTZSPNDBEG9i45a7g7wkvs89Y11QqY2dBo4MTHVdt",
  "key2": "qp8pcwaCH6sEMDAuUgkKM34NfFRCijUAuYQp4eajHuYWnBfAm1hvvVccFQhsBq3xQZrGz1DSmUYTnGJKUNhagtK",
  "key3": "4so6SXfi1mqK1DSrEkEyywui914Cjy6Z2GuAPSFWyntFxDeMXgJLjgPEGDf7zV5fEhcuPE6Q6tHoyQrnt14nYLQM",
  "key4": "3xGEcPwP9niRpGMdpDMUmp6iRsmyqVxrP2wWRGDg524Sp9CsEu5pHjTpXRkYFhU793X7RkgBb7ZjhXK1HLWLQexn",
  "key5": "5EtMUNEznYARwedgMJt9J1ZnFmQfWraKKCQGrjqZV48eb89M1k73eT1avP37vYJpLStPGKkcZpM99tTDD1Q4PfWe",
  "key6": "5c6uTokTFZmoTNkJS3VRsorsFVWukUzLEFBWrvxJT9HDoHjKa6CAN2aQ1ZEGJ84cxgCnWzwi898xgoMrctKQKwLE",
  "key7": "4s3i9pAjyPEWN6PWo2xPScZHoiv6MQG8CGR2Twm6gBtoopGJavo5nyxXr7icTEVhSBPbMUqeBwxXPjsp8TVd4nxb",
  "key8": "4XYgRQW6vWuVp8wTKvuUJwcGpSqtfJR36FVQ1HN9uxWRUk2SushmfjgtqhENzKrCUVAX2QMAiF4vRtHQeVoqyjeg",
  "key9": "3e6nTXtLhYexu2oLpJgnV26D7yNt2Gc8MJLMYMKReHkuGm5FpzepKq9vdLHXqM64AB6XUAS5UnNb2UhxNPW2UNcX",
  "key10": "5Bp4fk6DX22tQG5SFSqySrmwN7SjSY9HRCp17iknQMLSttm2dJHhuzpdTqkCjp1j5D1Gn5hDZyN7vqdNyMAqbS8S",
  "key11": "4E1CV2EzuckxxMtzkn6wwmnKeV6bJFr5gYERnn69cfenC5we5CyijzxJrppwYeA5DZnitM2ZKmdDRcZo4WQZETCg",
  "key12": "4z92di6T3SSeuWtPEGXTyvCKjndYnux6ZirHZHZ5PdGnqN4y3SYg9VMHAFFfwkWxmVWBAjurnFE9PZZRvPfpv49P",
  "key13": "4Ww64wUKgy6cmWHMnAijJXZjdcbz2n2UnRZgwVSFCYePepudYsj4MVLr8xfvwPUuWeNvVTZ7n7UQ5YrNgdfpZuB2",
  "key14": "4811A6AVtdBdpFRn7QAyBKEU41GFzMgpm9SmMTJMh161Mg8UfTkmVWSTDfimZDsi7dWTWjkrSvBRLsABRYwt2Tfm",
  "key15": "49qqzzvLmsAr81z8bnwvLv5839cCpaobMZshg3VvWMGsBxqAowChqdGdH3TAmtTexDNA4hv6aWvjRxGEm1J9Mwv",
  "key16": "3YSZmYJfXKz16XaBb97KN5mfpJYUVATnqV2Gt54sJPs8ytChENYDFhNSTs4ffwVjYWbChs4vN3MRVH8sxZuu2fmS",
  "key17": "5rzbpEikeUXUyBmGrjmtc2MiKzTR3ermh6xAGQ8uhFmvWDbgg4Qd54xRxvEnios4mxEmfGTfeTMd1gKWAgx5PeL4",
  "key18": "3PLspGxZGD3G4SvQwpVPArndatM5hby3xuyCjpx1pQoB4oCgqdPVcQxTysb3X7usd1wpxfAvMkT4XM1irDyFXVhv",
  "key19": "4RCuic1Pq4GpEBJJyK8SBd21KZmhrz2UCHR8oJjV3JJVrC6xzSME2LdXfRufBFk18o672jwFBSTyyG1XHgx4yvHT",
  "key20": "2cpeKvDVTyTF1s7R5KsSP5RZ9aLXdMmEkrqJuSbBtGSHDkFe1XQ7RhJYCjoEGvMe9b6x4XJwk4ohijpTjN8zfshC",
  "key21": "5RgZWWYeo6pYyWVmLbqBD2MBF9JF6xEaFvsDvcPpQidcy4MDkJLonxutCsPVLdbEiSejxTARt9cvcZ1yXHbumrW",
  "key22": "4yjLxNaDNf5JzLFkV5A6vQ4jFFAjzpTSjyyHEopJztd4j6sMmDxqEx3iEpDZGWuFcKksQo6QJTXC8CR1EYqydNyT",
  "key23": "223Wn8muLDuxaMuHY4VPYyAmG596Lk8hyCeEqsDUr588frkArvEFpyd3odi3f2uEQnt42hoJ9b2qzPdoRM9qevjV",
  "key24": "4mSnpdagbMSjtTRGwVngFr8T3jEH4sFTqDp4B2MpXEiNj6MRvaKgzJ486eBHENkxrkwCAYwBiQLCuSKTeeonjJXy",
  "key25": "5KQnHiUTUngyoVFbxBCLKtkZ3E2j3a67KWzLmbng1yx6Y8NFNF4k7JTxLLx82LHB9TGwXLc2nyzqmLjaAk1ryCAH",
  "key26": "3bKQds3hw3rUniQUYtex6svJg5RmTJ9zoeHxGqHY7D5h15ZJLbjqv3RAM5LgcpEq8d64TwKbaNaExKAWBUG4xsmk",
  "key27": "2KXAzDpPjdyPQ8mxJmtA3KDjpnkayjrsUtkmskKg4deSGqunWZbqY3mfAtMrdnJQTzvdpzjeroGGk4HUYqUCpCeE",
  "key28": "4YmqyVupfhp673bsa2qKS4iMjAbiSJMvT8eJ6o5AomoCgAH9p4QMQ6JCgRSoAPGCYGtPxACh97a3jwB6upEiAEZ7",
  "key29": "3EmGB3JyYxdFe5pfrnPhRYYQ5JHZ7DoHWiQy3Rwe9tyA7rgbr5nC3cmF9tjYfZNisfWC5mYU4wu1u7XV6SsXu1a6",
  "key30": "5dUh43hHCpJKqzGpRxC9sD4z1asV7nCqkXTD4aQCw7sBiMjv57NvrFLxzSVpDBc3bBLzovy3R7oZ6fy4uj4ZhUzT",
  "key31": "gxG4ygU56aCwxKsKSL7bm3pwbVk28Db7Kbx2Eoa4htSXc3KjfdrUyyRWAR6iD3GsD6efqgfAQAZfKqrZDdecJEn",
  "key32": "62hiaMqKLGWVcPchaMbeYnUs8D5Hf4FHgXqhbLQzuiyW2rzftZvCPVepMSCZKht3frXgpNdRogdU8ut7hXSa5acU",
  "key33": "479vt4m1rHfYr25rvTkJpoAPSV7V8PsyLz1Krs5QvTkiGCdeRAUCGHRQhk4k5RydJNyGRHXETAMwTZiVgzhwxJV5",
  "key34": "3iUkDbvgZuyebmc7FJ74Vx4M9diXqxDvh6TDPfHTbcKzh5jTuUqSsi3Rr4Wdt9euAGT364KWyWBwN3cfhJcWQQW8",
  "key35": "5Zt4kujRxy8xwMJLexB5um8c4GuN11rjKboGcN1VD5KUMEn2iVQMgLdFwi4Wnzf5oc9o5SwJfGHsR5YRuhKkeT57"
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
