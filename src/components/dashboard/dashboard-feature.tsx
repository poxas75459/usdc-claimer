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
    "sH9ikzGzeogCsVExk4MDaHfbaaoxwMfqTY2UX8sSKnvaCQbw9vAjShbgJcsejHjvbcDoKs6pxDsRj3LhnFsAx5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNdmXfU7wiZ2LE9y6AWbY8mnjzYWwTATeU4e7FC2RGftiPpP6bdQeg2Yj7mV9USt3XH6jGqyd7yydW1gzhvHYJi",
  "key1": "5vcuoq2dgsFfPZ4hdoN8hYsEF21UGxZtB312k4h6AMB5QcEnTApEweScw3GDWkK8Kf2euSwC2i4Ufy4ibWqSpJLx",
  "key2": "3dn4TLnFA9fTHW7pQSoza6seEKaXXbAhii7Tc3ji5rKYLxSTmKgmV3QeSATwk3V9mgu6aTUPG55MmK9qG94HNUh9",
  "key3": "4W9kZbbEsQHAuAkq4yDuLNEVt2acFQ1NBUzvvJ1mQPxb6xKDrwrxFh1QoFmWrz2jb6GAafm1VgC8T1HnnCGPT1rg",
  "key4": "56T9eoFEBHanw5amT6GnkBKV6Mac1XVLgcCGPc1iEszkrNAYanJ1bBS4VUie45N3gkT7iBmTL4hAc7ZGqEEkCk5W",
  "key5": "4RH3QM5CWxsHmQmQv96FiCoRUb3nTR5hcKDTibQmDu8ibcTQT1s2tQRwCDcfPmdBx3NhtBNgz1UGLr9ykb3TVFRF",
  "key6": "4jy3APWjWt3NKHd3wYj4EzrYTPRoq9PzamXmbTTYEVqSfwoqrMfNdoNNiKifBQHrUU7XGJV3MKgFccARA3dJ5XMs",
  "key7": "5E9EMnimkbvqqZpxw2wVhRMK2naNTyDMgvMJSsyWBbR72U4j6BQyJ29Ts1jjpn3njTtADExqeBX1b25t4NZPq7Yr",
  "key8": "gMq8WR6vzT78vUfy91H7hEVLRvRhb49PQutm1LYgCSBnyJ9GotxGyAExuYCNX5pP5m8k3GdRi1DNUFRCUbaNW7s",
  "key9": "2XZ5mteNcmSKWQ3zMcYNjzTpYCRCqGgfPJtiTZrvkGNM14UWRkbxquPV935aEf3C55LXCeLab992P42hxF7hmwb2",
  "key10": "24GYgSHGRAzE7DPpUHDCYCJTdz2deS4tmKKQgNJGUE8RsDb4ajDM43JH8Nsu4P2pMaSgPtfmMXfgm2K77pwxg42t",
  "key11": "5H1dNGJ4c1vzEuc1EgGMJgoQV24y8SghP2c6Lv274SBD7LErKgoEEqMp7nQVsUYgqvNwk8f5VrSYHuT2KWKtZNiU",
  "key12": "2iioqcNBCqR2DrSuToAk5x6pEmutWwvSXghADVtgTry2rELuZEyco42xc56MekdyKRYRJ4Eze4UN87MTshv59xBE",
  "key13": "45c8raLGY394bXwRVSLWSx8A4XFUWaFPUbkDUC8nWgaDf8VqLG87JxNDg5FEsf2bTjmk9bbsEEosjwnYswYLLGSt",
  "key14": "3dzdn4WGacLVHWV1pCyj4DhNYnWBquYv1zXh2cAaTKtY52LmHeLjb9sFTfAArjwRGrBNghvnpHEUz5W6Z2gWiuNp",
  "key15": "3QNXr9FRxaiUUnNBmFS2EawqgHBY5iiQmB4QjJeRVo4FnhRxiHwYNR5CBsF64UKwsPQtZhUoY9TqkyidqXQ66UpW",
  "key16": "RSikEAcLqNmuEDtqppMSXWcA6WNur5eLkA5NA4UUR8wiVHsHBbKouYyV2ovcUz7oUhBP3b4qttwPEgpDGuZ3sZC",
  "key17": "4orXRafXiP2mqeA9kX78Jcb2RHUahghssWbPHUrnz1ZcHxBGqmR7bKStPpSRiTQCLzrUoWAdcTKtPfW8vR6guqTd",
  "key18": "N6h3mBfEK3Jakq6qBdF66zT1AZZixRcVmVaJLNwLziVq51GsTtFYfq82Dbi9GCCMNQc1GcajQ1JiQevpNbdRj8y",
  "key19": "4uW6UPfkjdzVWkFkJs91jPvdXC9ozBEYDz6osC8xtJne4aeL1xdD6qkdopwZTWSQHV3nfxSLq4AJ23JmZNz3sgEC",
  "key20": "5LnY2UH1X9vFjvWBV9GamuCsXY8aCxxUT4ovK8VpJ1dJietKNLboM6mrVuQRH9Sui2z8GmQXL2nLScvCFaZkbzoB",
  "key21": "5MXN1E21SmxA72f9cuBpLb6vyz1PNWkG3W8nipcpGzP3k8x9skcnMPjPRamtLVoaJxmZJ68jvtSooUGfuyaYCk5q",
  "key22": "2Mm5AcjWRrunf5RHAzVNKb42kPUp7ojgmZLCx3D7tmbFfaCyP3VUC4aPVuTJznsbqVrT1VBmNe21m1Qzamz46TSE",
  "key23": "5Za5KEVcZWLgg9o7R7nUDp4KEmpd5rtcqCtxTAFAG53kjnNdzoRoUCSPhLy1vs7p2RW9cF37v7gkB75QiFMkqcWm",
  "key24": "4qc8Rqygg9dx6uQpd8upRV63qGkth36tZzK6sNRUZwHJsjGWUGWwLcP97rwTcxFx2A2WCBUQWGHBiMTAC19vUoc7",
  "key25": "3DawwtLc2ECUHAEds2Qprb3g3hShWurzKuXkgC7GySrUSFRSqoambygeBbmSmUpvwp1LAumWjfWSyULKGL6xGw81",
  "key26": "33bALy54LUybbYAydi2wZNGfutqeJztWDS98WhGS63cQbVDNGQM9hMhWTrpkU1sShHMXiifHqMsb6zb9jwMBA6dR",
  "key27": "36VRai9mA4wXRSogNaZyv5567McawmGKzNd3su7TYPhLaN9qfrxiz8XH4NmKG9DjQkskcEdsBpGiraTkvDNhZxHo",
  "key28": "3jnJzkp8d6fxnxpQstgk3rUkcrWVLW9weVmpeGNTcnUk5byNCyt6ZvYQbkJeBAWTTVZk3mASvmLLXm31P9bZkHer",
  "key29": "5A2SHM15DkwCQc2PesCwXVw8cXD7MCJTjHr9hZWzRxKRPqs1M85EVgZwJ2sLdqUWHnpxxaiLU5Fnte6s8pRrHLz6",
  "key30": "5zrrvLY4zTjnBh8WsEEcDiEBCsDXXEd27R3S2CQYQs2zNsgpiKCvVBfgbVQmQSsc2qWrRM2NpXyhFob9Z6SdpdbX",
  "key31": "KaxM6i2d4kUoifsFe6Yr2WBSdh7ZfjyzFpB2EhYRMy8HDgJQN37ENJkBSWz4u1F2rpZrhG65JQH9jahZ9JzUMqp",
  "key32": "2ia2UqvkiwP3wRzDXfPhbyfhgFNfsubbrXLMrgQ5RJ7NErSLK2p1eDfdgZe1SLFVQ5ghczBrNnpmAdwR9audiMTp",
  "key33": "4JrtFdAjp8zgGTfjZkEYMKnh3aFbee7YAPxDCsZsms7dyagSYX7ihbGAghV16gu19P6rMutq36XgCY7FovKH8UFM",
  "key34": "cY4NvGXpKz7SSfWqwJ9FEHFUs5HD97wksaziLzQ6ZCztwxNsra9YeCMehrjXv7gZcnqm5i1fPkiQ5KxF9nJQyi5",
  "key35": "5cLLWadsFbNgJbZo1UEbKgV1gU8apnWrk5uwSTsLh1Mh7EwknRuxgQZJKatbDyCa6x6FP9Pkg1k6cYyWJsNnjk6i",
  "key36": "2vUkUm1AEG7pCeAur3R6tQ17yADjtanqBbWwbcPE4zGoenJBtmAHgydPiHXPdq6aXLMwMWaHi14MXn1r4nu95mFX",
  "key37": "4G15gXxnVpEDtFcACWzorVRrvEDSJnrSfg7yzRoUQjZF33vLByHaswMAosRnYekttdd7fPLTPe8YAosvX1CVYNMw",
  "key38": "2tA5eBPJJNNgeBmjaikEoUi9Nbtj4h9PoExXcCeykt6Ah6W6bVVMF1NsukAHossNfFHfKjsTBZus9XA28Ws5mDQr",
  "key39": "DJFcF7n7wsxTcxpUPFiHBR2ETftSJLJMMo1c6WsgQS2PZ8d3B7NXSSVKQLAdg1CZGxGnwVVWK6PBi9KEjgMzMH5",
  "key40": "4njcp5DDbHCq1731UZxJUmz4WM2YLoQ5h8SeUXdnvJkqFAdXPJcKvfi3eRfL8wQQJ1M3Kd4ZuLCHYHMDQHtHNMH4",
  "key41": "4wsMQMS4GXFQKNb92AYUQg3HhRpC4a3Be1BPEQAJdPUqV1BazZeCHkiwtYP6hvzWNDf1q5bpY78ZYuyvBWBVSQQ1",
  "key42": "2248CpZDEB95niH16y4airMhG7YK4e1nrC3zmefz5d6KoptVgRv7pSGko9VXVVUk27cc9t1FzLMwvBS2gZnv6vgc",
  "key43": "53BRT7CFPteBfKGPhN16Bnx1K45xRt5vbrgv2kMgt8CyTD9Rpmr7emZEx1Z4iqdQCrTnTyFwwrUCzVMr4y5U3KYz",
  "key44": "4cJzQDUECD4NAL2JXdPZQ7H63ivoTzDTRHjN7hqWnbnHQAJcs4NtcYMN3w3c1eQ6shza7y8kTZvAStJnPZXcNcuB",
  "key45": "5vAzoYLDZNRGijaembeptmcoQTGhryyvK138bVhE8Cbor8L1AijhVbDQv5PtRJoFj2DDUpd7paEg1c7m6VKfNXeq",
  "key46": "64i79BUhCiLLmmS1EyqZTyVRYTjZ4tx5yHYJZYcacGcKYs646oT5ZZm3R1Mhi1VhaRW9F5pkdvDgzMpCchcy3g5s"
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
