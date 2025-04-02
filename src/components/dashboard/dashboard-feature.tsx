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
    "2romUZNn2MeAmDkQfGNnbhdqb9wZEZFncA6zJME7fJe1YJyBKkB2YFXEE33rKyuLqy4KRcXGX3k1TkVEUedtdKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DJMzuVpfEkK7Coofy9sRrfXtaY5GCKq2fgprJHFSKqExs5mDYEPZGXKoXZ7kfGnZw726SxSgsbYaPYXgwFPuKG",
  "key1": "3dTaAMyRecUdTE72hKArnNhEo4TktTf5pnq5no7xA7ZBYLzWn8BXdmCyxAVhjQQcNSAcHGw8YHSPGj4TXMuWmE4x",
  "key2": "5maaJ3guNdeSURpMtaYSHN8h6zLaZyJxL7Si9MsGZWhzRCYPMcqs6JqAEL8pf74DMdfn3CWFL2p9CknKbVpnvdfn",
  "key3": "2iqFUgJ8G2iSVohFrezNKkbEYAoikHszxG8Gnuj1GGTvVttr4QZbuQH6iRqDKVvvnT72nGb14he4N7sca3ipJhHB",
  "key4": "3o2nnPuQSQQ1yYXRFkd9vghUZgyufH6PbvGdKYX3j6FbhJTCgCJNQgNzzYt6xPTVRwJvGgqwG7uqDZJCdGVJggy9",
  "key5": "2z8x2L3mQ4Jdd8oX5sFDMwPvsmAz7AwUU3G84zarhZkGamBrEKbfzbe4bmbAsd5BM3ZGdrPd7e1sg1Y9cq25umD6",
  "key6": "BsG6nWDQL8UWd5Zv1suDTYS4TdSt7ERCRCNbRNPRgp5iEJ9jgiS4dPHPRMpbcyPR2pZgaRG4V1CPPDRY3CrKMyc",
  "key7": "kTtHiZWNKyY4z7UxAPpdGAW11tV4jm6sbwz7pq7pykmFhSYSYXhGSmPcN9iijrn3UnsZp4yyPBPFTbH3vPNez89",
  "key8": "51s1cbwvvAWEr4o7HLiGrtiivjnjAcEyTg3NQSdMem7Pho9PW7qXhbV6MRoAgTaomRAD14kJrEo9zxFXfdKJ2NH3",
  "key9": "2nwwwZbyW9bueygfTm4kUFkWvGAg2c3QjybhkksFLM9oPk6aMpp6UZFP26ncpEEr36tXGt4ehRVfCGLkuF7T3bu1",
  "key10": "jvjGneNWzpgWcJ7ycXThBwz7dEpCAfLkZK5rafPGXbodMhQvtM7Wtw1zjMmxQ61rfbXzHfU3k7Qob5dN7k2WKzU",
  "key11": "Xh9GYRhiHHbeqL46esWtdofwzPXEYBk4dvxzVaykCduyLCECu57o7Zva4oUHZyZz1xNGEt5ebwmsojGmSfLcbfg",
  "key12": "mazvjW7njw9w5zqqBrM4t5gmJuUTqDmgEXSERKmfRAqv1vDFPL7GYPWdLSHUQuTGXrMrCykvrG7o3JNZ1PxmBik",
  "key13": "4uMkZ4AvkoroMDjzTjYBHXAaPNiVenc8KgAPeuFWPygHe38dbVzL1No39Tqzx46oQuzRNgNUXZApjYqfsBgr5gc7",
  "key14": "cRUiEBKxQXWobCmZ1TWgbm4wPK1sDwCtYDTSD8icZ3syPksgWrSJzuvnxBfFjRWNymkWByz3uJJMCUAVeSPtmQ1",
  "key15": "GoViDyRBfT3P4RD47sfJVbhvZYjjggQhc6x29vVA5Pt9eKc4goi1hgHqDbtoLmM73xsF8fhM3RQCySGDAebYvjf",
  "key16": "2zGCmWeP5xPV47vBdFFPTQRZD3Uq1gxizxiTmYp2VnhJGmyTjWVNPk8iXHvw8iEWLf4cn2yKpPKATYijxWra6Goc",
  "key17": "3mpZXUCPTakbSh8EN3xBYunkWtXWBsdhxuhtgzxXfnAfB1dXM1LAqzVFsUD28W2qqQ1ZdwTYdDRR7ysVnwCakiDk",
  "key18": "5bGq9Ufq7SqT52CChyyuzqDQGkpFHbv9d9NUsLJB65jZhgwYTCw9SaLAoJ1Uigr6TY1LEcsSBy3U5rDFgJDWcnzo",
  "key19": "4F6T2Vrmx1EV7SBs611A5QBxrfnamvBGPtQz9TTPvHBXr73ee3fzQePdoKbW8LT4zhdDmGkpGfs3uqQLQcfixyFF",
  "key20": "34csaDydJ6GeaNA3KCvyD7KzQCjYqd3FkK8Tw1hiSTiWcgFeGtaZ4ViAxJEgJcxWLPNUvyZYSztqDqVgzbyZ9RxG",
  "key21": "SzAB2ADCjwx5R9Pyb69DWqYuZ58LqKjYdEF8LutHVSsbvHSvofFXJRkrAZtpQ8ByziZa5QvPTk2qdj9i2vsFCWD",
  "key22": "2ibajsxCmAhhLFRUD5745Qnit1631jDcTuNs7GKv2aAzzKCtYhYXyAb2nXAuuDsibAC89XLqCu9h2iV6dmAzHtdK",
  "key23": "2b7epgJEVD5bn56kywqqNGMmAqTUUiozRW2XupGErYTiwnY9r5yU8cdsLb73qSm1AKuZcj5hagDhovLvYn15bQTj",
  "key24": "1YgNgn9KYEULB5C8YiQs7RV8baY2ENuR96nbGRxwV8MFqK9D7YFwXSKuxc1SizLCJyvb14oRiNEeLfnNksgwm2f",
  "key25": "3FUjdhVDAcPC2DmFA9wvNP9tjHaagLawP7GMVaitoeawpAGCYQbxgYV9AdqH7XvfXwcDz8MGqFby1r9dEx8oPbfi",
  "key26": "2hxXuTrbM4FGQnFq4TTRwHMvgr8MnYs7ACFGct4GbvSyMiQd3Vha96EHH2KLMfTcez2LJxoKoFi2DE85s8FTSV1s",
  "key27": "3FH7rpBhabxrYr21X1MyzWbUeTujB3MtsrxnWcucHWFK433PgGTMBzUWn9zQcJCBRGprrHRG4VASPMZ5WWVJDaot",
  "key28": "5cKEutfYZMEPqzCoQVV9RBtquTCBXNHGN6LYTkK1be5Ux7QjznCBvfVNV9Xg4gdi9wNon1vCKDeVepqrC6pBWCqJ",
  "key29": "4fL3abkg2jJsTDqxSmAcysSXhPusvmqW187F8f5w9gstguBbsk7GSbUNfmNcdM7458C1A73wqk3GTDXeiSpDYwjY",
  "key30": "4YQS9iFJ5pvDUTcHR8pB3aXd7JLxVCjSrksomeBRe6pdowQ8UKDjnbMN8retkwfqDobyphJ5kUuv3pcnKGrG1jF6",
  "key31": "5foCKUizs8oBwfeFhxwG2MQAt7gAWMTxKM8KfMLTxryH6Gn1kLKyL2CVPFdtBa6y3Nf4ZZiCERhJSeNoayZyNrMx",
  "key32": "32KrXSTsmSw4jtczn1u5WRj3cSESic5hBD4uQEBGcpPjrTwCQUUTxwxFQdfbxW4ZTqHY2u25gGxAhk8KAKw32wuw",
  "key33": "5qDRU75B3BnKpHBWWkeHfY9VQ5moGXTeoRUUGMgUYY1wLeANEv8jugTbq21acwEtGT2v7TxcizAb7NSTcS5Fdfjp",
  "key34": "nTwASVoJnjGTX2gJfyWQzeoDgTi1HHav2kK3TjECcTKUUDypvGs5PwWipzwFNYwovrnp21yXLRGvCMKATjEVEyA",
  "key35": "5vaB3Ki5d83rKwrUG1ZZXXWVR2DKGwU64KKpkFfRVXiQCmg8LuwVFCncHc2hfJtDWCNvvLSSrkbAJDTpqnFJqs1L",
  "key36": "NhEvvztUu1bpPBZuMB7dm7qzQWXkGma37cy58rA6EwD66psUvx1R39m5aVvty5x3EFUFnzurMRE5iJnv7WDwkwU",
  "key37": "5AG2nrRjdhVRGVptgnh51Qq9RRmcJBfucLfUF7i7azT5JJTZSXJMx3mZQcYymHXD69ZqZxQjgwV1DDXP2J6yWZNi"
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
