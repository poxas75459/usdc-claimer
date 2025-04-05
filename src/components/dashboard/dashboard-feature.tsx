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
    "MezNXt2mvnR4tfS87pruXxjSYLgHMmcLa9cxYtYeziFrRCxZjADiarC1rMPTcD2Aa3L56cwUXjoGkaGJKTY2Joj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g72SJmtfEfmZuktahtb2RrmgrjCbABLKSzM9owePyLiLT1cEaCjy9QibKRGe5U1E6kesxDej7jfsMNJnAYpzqgw",
  "key1": "42z8mKFTNEJxjEscZmQRFuUQMe1TGPDVu64zCphFYnyGySQcLEMzaNu9LkzYKaqcFhKCXw8HNb9ozBFSqfPFn7KS",
  "key2": "5ea1iSNKLpqAG3GSKmz324usftFMAu5r8L41PX25CKiaDwpz4D2ESjdXcAHGHBnpUv1GRAP1UsNXH3XoBz9K618L",
  "key3": "5bYHk3BHP5wbsDKNcdrpVGXyPDFjEVFssM5Cgu6rAxkka16XCEtZUZdc7aAtvY1vVusCpRMj7AjPeH3x8RT26JUA",
  "key4": "4rTZB375LyzCamNe3miNp235doYuoqqAEJHBVCsvtZrKSyANoo6kf3huYBFQxmqo1MmhGitEfedCDLByCnLS6Lm",
  "key5": "3Cq9UYjueuuZXm8Z3rKubWNksLdAzYFTMLKYEAni1kP8d5xGF9Z5bGft1AHA4yaEbp1v9Zsxbquv4bh5mLpDbKAK",
  "key6": "59iZjPB3tjiJffYNgomEt7sRqyd5HZdFf8sp9ii6AL5BvKiP4NTB1fAcKV3yGXJxNRZWbDLHyVaHRJhQsf6pq9LZ",
  "key7": "3LTtUFD47k41FyrHFJLxAToiiTfWz6KouX4wfB7GnSuJuHZH5SfMf1VQ7GiyJZLDeyqTWn416kCPcjvmV2ZN6wqa",
  "key8": "4SveWmgJjjobUwP5uVkPSXFua2uWyNWXnCeGFqZmd3oRPkLoKGLeaGhHYpUDpYmvzbn7DvtX4LusksdSzwZaLr27",
  "key9": "5iR3eHx7rNuXfh8uL9j8FGhjxHEgSkshgNK4CuALaTRrLRNhZWWkNPPhTf6SQtZvtELAaXU68LyqPvya1NWKCTbe",
  "key10": "dpwCtMtpFSys9CkeCCMcVtN45VnBS1adHXAdx4Tz77j4GjCiyySQ8e7iYGwb8Ca8mfv7Qshch8fVacrTVT5xGue",
  "key11": "3hXAxQn5BCMcZZAiJ3WRtTXLgBN1AW2Q8ChJDoySPfno91ZQWnCJ8ce54V27D5LR6xgwkAscmPRYyfxvoBwtEaWy",
  "key12": "4oRMBLmPX2BsEjtELyksrFcnMCCDAwnQrtaTjmcaW6YtwfdGE6KKKwtwmbAyfJ9TsnhxExW8WsGFuS7B2LWD9mEM",
  "key13": "5b7QVejGRqV3VuJW7BJ7QY8hDnx2Hk6dzHqUzupi23zBiiBSMs8p2RWFykwerfrHw7K7cvPwZ8jNkCNzrY1tAZwZ",
  "key14": "2AbYMCHhKmVWnkx5uBHutyPXPG1SLPCFUXqodpR48eYWREv5QmjLfyGN5Qdt8yKFbBKukb69tw1iadMKZNX5sboQ",
  "key15": "UswTpAjLmm1hcQ2ciRpUugL9omwZBAMgYZr4EYkQX2h6WJaTZAVgZaxHUb2mC2oiyVFK9TaUt2b1ybX9RWz5fVT",
  "key16": "FTitfhugNgaNGvSZRSMcuXiMUMi7vkhGWB1U1yLXeyLBuic8iz8LkPKEtLvn7u6wEnxPUYueAuzz7EG6Wzz9qpz",
  "key17": "3fHeLrea1cfoHF9hxPRy71Fx53BEDbdrdL6FeeQ1pw2zDr1KuXLmfup9Pvt1SLRGR7boRJRXiqQvZGnCRYq9SCDv",
  "key18": "4gAxNUNqygfcMLuca6KnVHy4g4xnEWLxYh1baUGtPCN2zuGgvftEHsY4jfZiFv15s4sme7zSqVJJZcWH2jLyzSBT",
  "key19": "8cJJbPPgoCDUau9xuS3wvjiAvgDTa1n37VzcoGqcNQXgENH1cCezqGiNDhfX6MM1bbHYstbWf17sLFMcs2P2FBe",
  "key20": "2fUHh7JKge2qacxk4LwYVdFWyihVePgyf97wsq3X5tZV2HMh8WbS4ULsEzcBZA24GdcYckBfi8U51HHae49Cyrec",
  "key21": "FqSk7QBG26QwjYo2SqWDVCyVaeyWNEyDCvyrB415SctCCBndGVDa6UDvxUwiAeGaToyBjFaVoRpffLAN1aYkQv7",
  "key22": "5NktypruwibJepTroKdxSnR1JnX2JiNyA6JGuuAiFwi3o2Azj1a9xEjjXRwm1GDYcGyxQkEEiWZYWcnJ9GsMXAYb",
  "key23": "r6WsH5fHtkmVTYsxo3qyLuaM3y42iXMaUCM3eeYFTrur5AT49u6NAQUPvqrj1V1JFnnmroejPxeNvy9is3DUQ6Z",
  "key24": "3DZfQ4j4LQTMjQTVpCQdsCcZo1gXeSDGHaZzzB5VGq3VjyxmPEHhfvMHSRpg4KfPFTFaqzRFs64KnhFWEFnppDn3",
  "key25": "5Z8oHVRY4Pvi8wDavZa7ibG9TKqFrw73aZpeog91ta7C4JBBNSEmNcbZFADn6XBFrQQD5mVgvgwsXvcfG2rr2Y8r",
  "key26": "4vc26spBDmWEtei9ggGdbyfRrsD9FCrsQpqSeW23zVzAsmiQByBMJeqGNLATcK6FW1iCrrvKJVvsX2w6FwhUKfxo",
  "key27": "uUnkHZ8C3kA4LeyP9drrHHp7gMuH9iTvpuYTKZioTNcrV4sSJbX1UexkkvY8mSnxc4yM1ShjFRWFG7doErmS8da",
  "key28": "4kFQEtVfpz7y6vYKY4V9Q7LMTZvV1evaikMaFVVCb7eSYSbUo6icp8vvhAmFQ2R4Ea6PjYt9g7CYiEoizNBUuF9f",
  "key29": "5A9StFSJunXea4LXdB2ahwHxCbdfng39a2omnPDW26HvDKocPpdcLExmPq41KQe1HC4w4kiTsz1zF5NS4JGkpxF9",
  "key30": "3mWQbZuDSu2uwS21Q43QmEWfZhev8yN9pyBEppW8SnDtnGzhMvPMKv2zfpXU2oERvbsqiPsuAruQRu2oUMbSUboA",
  "key31": "5sHSLb53tacpckvmQQu62dX3N2SM5aA8zRqN7m3rcvgMYyPE4i4uAUudLqspVupqdab2tw8gN6ouoeZFD9WCotiR",
  "key32": "2ktF64FRguRTh1A9k3ypGKuESiEe7oKuLmAyXiivQeFrDM3XX4A7MF1JCVQ3HePywiCd7uuGYxPj6Wknod4Vr1R1",
  "key33": "2CyiubGVeGZrN5GGR2GzuqEdfnMfZu6JS44NASz15Jidb78Sc6EwVfBi9azEaDfbr6DaDeNzp2dZ818ALbggt3oQ",
  "key34": "3cnrcyzgZNcNd12ZkpMN9xCXeDg58TKm2tZ6w7FV78c1a9PbJ3z6abWzLLR3DAiwCUT27LcKRyyxFCkR5DbbnSZg",
  "key35": "4UyC7Zd4vcihu1STxkEwgA6GDzuSoQKwdNVjFNWtx2SVPiMyEHGTFyqrQB1M2eZf1HEjek6euGyVxsCEeTcjxKsy",
  "key36": "hxmYyh5EezLSXa6cr2atDxyrp4GSzMrBzv5hqNrNBv5Piix5kpP6Tp3LBkmCeNP7hGG5u7jwL8NtJPepMxTWMdt",
  "key37": "6488PRqkHMVe5duF77CBWFh2BDjLwzELFK1Ym2V8JMBckxKRx2qgp3gFBVPVzjWspAUJNNMecffTq91mUgQLwjUD",
  "key38": "41tqQmQXUiA7Z7WHoM4hWTJyanz9NnyabkM8hQm78cUQfMkuv6tjC6u1PxHwSxHRku1rHjN2v2WzR4R6iGBdBGWh",
  "key39": "4HNwJwPxv5H66zAHzikkFft9ruSV5DUofTvyYH1MbpShdqh18DCbRk95zLSSGS1pZueozNcZfpdsNqPd2jSMhG1B",
  "key40": "4bm98q1rFMzrQWA7y2DeBRbSKekBaSLekMyTa5Sy5wi3EN29jqFWf3tEcmKnggVCZZZ3RcW57K1NnuW9jA68hcjS",
  "key41": "3dVE19MnvVQu4djuF3EJZukd6iyQnSokaWSYqQYkUanhVeHCeqxrvzqPbkedxknaGbbKwonACEers9gLSPY99MJP",
  "key42": "342iTXDe6kbWFVAjRBxbUjbZpxHTLVFWAxyH1AnsKZQZcJK3mdj5FZ5D7pDMchKexcFxuHnyUwdHo62ZG4Nm94gE",
  "key43": "8Cdvyt1Kfr6bx1kPPGq15gK921R3esDw7dMEikXb8FT1DGFJoaed4WSqzf8qx6vQMaCSXxUJakUEhbWBMgGJuVT",
  "key44": "86n8axdKr5nQSFJSpTppQJoYPAfd6AzaHeZRQr7Gpk7nNroyJtgAMJ1nNneCvRuW2qLS9VwXFNqKR5cPAXaC9pC",
  "key45": "5wnS3pUXigcUWZfqBFK9e2eh2r6PwWb6GGHurzXUAmWD1RGCGbPHTMDY8RBDUKjMsdcn5fiYeNaMeTGA2sozdmyv",
  "key46": "5ZRYEAjecnR19yBrk8aUVtmn39ZTRusjkkoGjiJrSXqRemfuXjGnyD9JE5nWXmowV6ch4JNV2757YjFFpFuzXnAw",
  "key47": "4eFvHaX9mqMPxV3JWWFp1yJntHQXX5Tyg7inLKGt1qJJ54KgbcvKcLbVnccWpQbMMFvZhNhWD1jzihQ4x9BvYiae",
  "key48": "4tfHs9ULFNCu4TdWDCbyxuGKe4sAMzoBwHwtu69MQ39HhtGW5QQu3airFEz7eFbiZ2KX9LwMQ9AremaZC9PsTVHw"
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
