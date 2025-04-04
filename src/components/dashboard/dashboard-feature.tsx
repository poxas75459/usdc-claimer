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
    "4VDS6Fvm7m9i6ecr2MvH4mU4WrZvE6ZJrmRn9jh8J1mqDbkur7Wi66AvtxEUfMQwih7kRaS7vuNCEJoPTvsghKVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMNbknC4gNQkxThoQEPjSbKWs3eL5CgKrJ7ekbj3891HBCX8NvZcYBfhVFRZuqKrgjCzTSNTdGNU2LV7SNqDrAm",
  "key1": "3ufACrQCL6SDiuXFuc3qRVrJpMgAk16Mig7rTEsJWyNn3TRLqYz6dhwHu82PJ4SYh7YsKnH1zcgSoi43HWdLAb6d",
  "key2": "5Y836Hdip2Z1YBxrjw7bE5v4YDEQxhc2pJr6vqiLuW4U54CZrnqX78yQpq1JtN2B7QuVnpJR6LWZPLDfGoWPMYaN",
  "key3": "47E42vZ7yKPpNQMeZ3d4rm9ZazAex3YgtKBiZ9u2bqfMkVjE7MEKBtH2JudLhgyzhGUjjMAQsDKNRhnSmESpeyrP",
  "key4": "5gB83vTCaKo2trRg8nzSCJ7PGx2CXsxQkfuTnsJ7eFW7QrCUfva3MVEb1c9duGF8Jr2SZgzk5MuB7yaVm8ZdmkUM",
  "key5": "3z9DDijx8ythsH3pY9gxceHTpxMxxV5oMvAFthtiSGtZxVUYC9o6QBK3D3AA8CHHSspPWScpM6k9dohT6pThCPoc",
  "key6": "4DPAGPWgqU9qVy3K9ggCPTf9Sa1rjifGAnGeMrDguE4CSU2KRPPPoC9CUy9pwePeuLeTGS5RctixCC38DfwjFzs",
  "key7": "3wrrqx1kj2eF67umNEotfibCHAqdUNVamtKdqVJ1jiY3dv3qe79RZGaeXYUyNSkWrogPQKNk7cUVEnSN6zfwnPrw",
  "key8": "hLjZZcQuE4FfcbGXYnekmpui2zvwYfCSWRXQQfbtsYQwGNRypp1JMbPXTH6vBDrzAp59h8Etk3Anzi9PWkovK5N",
  "key9": "4agipftE488SpHLYayu5UB6iCyLdDZdRr1kJcFzHd9CRUyE5JQXfLFyt8DBY2r4249QbkYdgdgm5gC2HdYy55CTB",
  "key10": "4bo7WB33spn2m2ppWvRgVhnw2Xpt9GWVBfiBj7UQ3oNu4QRa3tj9kFZKmPFaqWv5AxgNiMHFVics6vzrHu6Rn19U",
  "key11": "2KvTFMzrDR2SEoS2MDgeZJdv4qMBJ1iCTUcHoSkzGxcSF1LA1e3fRHFfG7kwdzGtBc4bmkR9MiYuPbPRRHouwRQ2",
  "key12": "56dLBHTxSzbmatkPbhewXu6cX2d5UqyBU6cANhddLYUMUdw23M8i9W6LNmniKRKozbZ4NkDye7bnxDuZ7zLESTWe",
  "key13": "3vSFW4ppEdXyEGFwWs5A8yYWfZTXDhNReUom3Q5FtmZ4H4qP37px1WfbrGi8cVVV1PEYTCptUhGmmBUN5jyyEH1p",
  "key14": "5MXN7cq6L9htrhkVtArqKgt1yjmmCgMYkjozrfPJ4Pw8BK1o9W9ZYcodTNVCvRv5yEvJRCi456swkgw5y7HCCam4",
  "key15": "3cwFgRdnzSS7DwEJ1KR28PvinCPVB6BxnyiQ1mTTZbnb7p6mbFxm52Gy9AE587tTuVPagAqwP5axTihT5aKZmc1g",
  "key16": "2PeewGqZQdbBCfmcKYwL3Bgmmm8ARGiTc9xsWBx3xi2uurRhrt5ME1NCRiSdMdqmEQJ9wgcJtBW8NNMQX4xQGvvF",
  "key17": "4wVzyEJQdehEiBCYdfuQ9AtQNk1QQQgodzQBgGUS2xvdh2U9Fy3DErudnsJqdVCKQWRxMAdtLza3hTHM8WmLtxTe",
  "key18": "3Yxis7Tu6Y7u3rx2DjHawQ7oZErH6q2LrhpJz1CPuJDD3gqQc1gTX4v28WUb5ktM6K2XVY6VsnviEGtr6E4xqfzQ",
  "key19": "4g9gHaoy4U45t3ZVQqEDJ1JcyvQ4rnfVBoSmMweQybswoRqTWExhNyeDHFKk7UYAvztRocKNqWejt2hHvNcPrjRV",
  "key20": "SpMRcX19xDbz6h9DF54AaukLnvhP4juVDuKLANaGcBevq1xTewcesJ138o4ToV7ihP5YKEmFrBhpWUhuR5MVtey",
  "key21": "5ZHmb4rLRxALUcNCLDZDwroogbY2p9wCGdLFqMwRSgUt4gAnEY5dnBUovhzZs6PLukVdoWJkEFc86xg8FTNZD8TU",
  "key22": "5cN4rYkiDaXjdPCZKt5VLV37m7z2uzwWsDweQ27E4QMuhUcKEucDovPAH4Rpgdn6a54EJsBiNxRLYTfXSqMxvSHD",
  "key23": "2UAW2JAYhTGHaXxqDdNtsgewJ2sxKeVJ1cmWQQ3WmjBzEkVirKGKZBYTr1eGnX6KND926KA1ANWVQkMxsiZBTvZo",
  "key24": "38X8fB6q6o9StDkYCh3zRwavcNVbpanKAcox2aL8oPZVjbotodU2dF5P1817ET7DnFv8s3FvyLKQAWSFiXkEhBA1",
  "key25": "3BMPAdAM67kkQBLReQYADzTync3eGbn3wFutQ5BRQwA5oXEagTj2gg5o5MNBmXq6afc9GeDA59MKv2vjRcXS2vLp",
  "key26": "2A98Nv3N1HMTYAoVbG77sno8LeKa7sz41h2PGL5C9Hm8ApG8b34E5YUR5roY21DHTLfKdZTnSoMmibamgYnaaPSi",
  "key27": "4o52vm8UBSRrbfoQLtGY8GNrKRLAC6pyaDxAp4Fr9bRwwYE1EwuY3nt2ckgZUVBb1QxCf8Cu6iuJKBo9hNEKRT1X",
  "key28": "22jLfZtpmWHph5J3Jeaowu3spYKgEvPVVNZhmEwvgtU11wEQ9LpjYRgLLrgmeiBGDNz7pBoBReZDPmMKVSjvjnS7",
  "key29": "3E2vbhaCzvNFRK949yWvTjra9xGr5pU5ezS4UzUoEnY8rMQq6o5bT1WysT2bKFgnRnyRMSzdUyUnJd8FRDf51co9",
  "key30": "3vxvGxgj7UDEZEf633vhmvdX152Wb6kAHk5vcW25eVPK3tYJvVevjrdruQuLZyjNGYaH3nBNVBcJrDJdA6djMrzv",
  "key31": "UxsBgz9aS49UCa49sDLBm3LGD4Td7yY9EdRRVcg6AUf2VK6n2hB68yLQtVXj6zxaK8gLVPKifBL6J6MpEZU9v7b",
  "key32": "2vqAocBaRhwzX6oqNSCBjFGNQ837mxjxtPLUuAWyxzi2wy52Lrd4LtxE3ZjcyQ43tTLirfgpUGNpNvhSohHrxjTu",
  "key33": "LdqYbbJ9EPVtFdiwWZV4rPmLD3yhnpY8JAPBRFUxDXZ9MAHAEKzzBmhmP7di2QK4Xb7th33xXFc45ycqN5ngTD9",
  "key34": "3Lb5zTtw3wDvhAyhzzkf6myGMHQs7J2ghNxujvLUgt9WC1SAa2G5WtNc5vrCyhDEgaCtY4TbCiXnXeb5ao84zkdR",
  "key35": "53zBoi4x1zjoRjbnx7JQHG9emiMnCRQP1ztfpaZSbC7ePjTNChZNK9ZBLoUYpCLVQg7xV3SAtV32D3JNsH2oaK14"
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
