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
    "4NAcmr2ef37VqyRfmAUougsMz72dY7f5SHZU34b9j1PKqwHjXE1rZuHRSuaXGp1k3HXCgwMQjpodb4NB794paSj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qbe6ni1NwYGPau3Nr5J3afxUSTA2rZjGabtsorP9Zs7LhtioRH6haiPwii2dACJRfEtisM1pWLapDyhXxATi37",
  "key1": "5YgNpY8sGANLvxcJ5vafnKvx6y3bacSBidGqnG3c87BtZu7srDVx4rE8SVsJyAAfNaoVe2f96gXxJXsj7KvWhtA9",
  "key2": "XT2a7SKbYVGeVELUYXfCYgS3XDjVvMAncq7FQm55bZugDnFMswuJbp1vTBokQ5YPMpCvstyvtbYPaXwcuLwDL1t",
  "key3": "5ytB6kfSSMfAL3ZC8edMF8HcRSpmYRsuCdii5BfEssZAr1PE5uTh9kgqZxfjXk4VQbGpGgx6AJkQmbyePFEZw7xi",
  "key4": "5mkqQiheQsLh3Z5DSbvy9LxTgjNStxP19KhVhiai3LmZs4w2q4Ykw9bfejEFsVL2kvER3b5VURVaxzgkGptZkAFs",
  "key5": "4jPs1EchLSbSXcWN9uHwpFyHnx1LT1GjbF5zYyCd24YBUszFrr8Mmo6NBnxZ35hniFsrYXLTrLG6EmB5fDuuNBki",
  "key6": "4hbf7pfTGNTq1J1tXriXg6QzAZx4p4aKpCkCKiHEE8DwcSFyNcidmxodSrLcxaELJzjbeLeNgWRymgZhGoiatyqp",
  "key7": "5TWKiFw2DQm1SuxQgPaMMFTRsKBQKg7MmUwp9Neww5sSxr5EQmJY1DF2xUwcEUVEZSiH7XDTGH7Vv9m5CQ1btPXn",
  "key8": "4XY5qsQZP9yZV6YZDYThzhxNKNEJhrPVEqcpabEg8KPA1AsA1UgtnhoHsWZsUBHYUk4M6WQxpVFvkWwf6T7Twtje",
  "key9": "KRbttVWSpaZefDsZb1rBR2tsTzCq9oznLP6byEYWmeayCrpubCVZ4JUJ93wvgob5obRLhc7eh4cyATMkuoXfQFD",
  "key10": "4D18bt3ApahAWxtdn19LWwqc89diTEc5LfzWwrM4Q2rM2aseDj287YhyZHbqJhnA54ETrx4FNaN5NExdisZnB44P",
  "key11": "65ghC31BpbJemFQKxgLoUcNTHr4V4JkxoXY9U3pN8WkWAEz8ftQ41xsETqiqCxeQU8mJDC2xa2e6W5fAiCr3Theg",
  "key12": "4rphFGnQqGcWPfKbfMmd9NSCaeUAfVP79RALnkUgj2GAd5FxT7iwocv6H1EDMLChwaf1dkc1Cspsk48YjzfdcCHn",
  "key13": "KePFyPzWxWqSCEVdjrYYsrxCbeK98LhEfPWJ71ZeubyW5g2YcyxyCgSbqxn2hwh3GAcGRk9KiBBqxCf531AnbGF",
  "key14": "2jScqQQtrHDjiffrhVmdE33QaWES4cznSkfvY7nydyqzXFFF7yfLLKDxtDbVHc61rHg4qFynZD5fBqdJr9ZPbxY4",
  "key15": "EgEG5iDdswFunHAygyYv4Z69HHQC84siqdkWwX7mWLwKvvRU5Kt4NJML8FRVfsFwmUanUUc9M34UA7JxGzf5xeU",
  "key16": "QEJZsAYe9J5WxsmBjfmBvqEPnhXNrXxTgwWs7rppvcgLUnhQHKgxPZ5KH2u69PKtSonQViJEcuYzV3T5PkGhAZi",
  "key17": "2adzC1MFQz6UAvMHzZbBPXKPz1NU6RhWjfREf372nsHojaU7uJ6PFvwLHRvRHUPtKHZQWr63DA8raTj9KU2zDGKz",
  "key18": "BG4p1LMGbGDByY4DoZZz3YxzK3bVt2MQevyg2v84gShqscmWydGq1rL86sUXsse9ZQo8au9ZQJdcXs292i4a8bf",
  "key19": "5jPfDRPxdnYj4MDuBTYtuCNKaho15HW85YVXJ25NdRpPc9dVgnoTwbWgmEDsiEdcfP2anKWez951kc44zSmZLD4M",
  "key20": "3iPN1C2ngKuiqQhtGZtrxvqFptSMHjBKoEkYRqeJMo1i1GZHQVLA5na6v38cDiGJCigMN7bRawq6utf18GWqWW1Z",
  "key21": "3B8ovEbYZWz4C7pFZthSLaTHG9tyhkdXBNicGfHn5TtfMCQ5HbbLNf31rw2DktCb1fGiH6ABbXrULVAPxRtp4VP6",
  "key22": "cGecpVZqwTy1WtY5hs2xmLPr9X4w9MBaWeB4mD8mQG8UkyYKRe3ueDNcpbmDXmEybiqaSPnpMU3D6x1BdsyU4xc",
  "key23": "3U45bToMHaRexTgVPBQeb5yd4KWip2hJg7oHLRXe58t2Qu4dQ8AgELV2BoJC3Lb8TJ9AQbvdWHL4oWPgxWWV2DiD",
  "key24": "2odKyzJGxzVrW1taRabKmz1sGo1RefytoN8WqEqvescC86TpE1JZgRjFDVuBCDHzXQFkXXUwx645zqM9f95r7oDD",
  "key25": "4bWE23aucZkssDkedM8WNd2LmutiNQD52udZissmswQoAuqx8Dkr9ph2K5HfjPNQ26Y2HfVXsEVgGVHgzUVnDDM1",
  "key26": "o3ExG9VbeKE2RTKWGFV3Xm7UxFynpnwbTg1Rua8VncHGNMtcYZwPbPHAtYJmWLQQTYZqYshGdLAPcxYPCtuVC9r",
  "key27": "2UkvVGTGQYesD946kc78zYCceLy3SJBFMqdt9uskHDbKXwYa8JqiNc2wmrPTaiMaNFTYtJEBc857skorFU8t1et",
  "key28": "2BHmD3acEKowNV4AtYrVXeKFYaL5NKpGjjBSQ4pb2spkSaVBWWCzsReoBFbnZPgAhGLCPCs5okBUV1mpRBgjTpjb",
  "key29": "5qTzoWA7tBcjK7vA9j6Vav5vFHQPmG2eo72zuejSNnrzTqP5b1P4mBuaUojm2WWBcnWn1TUtrFfd4fCz9WjrvHiE",
  "key30": "32K2RHSwZgEBqbnM6oCFgtsnTfX9v1ckKRTJudBi9R2UEFJY9Wj3MvUjSQta54eU1VxT71JZ6YwSFjojtDj5EWSc",
  "key31": "BakWrNCRcc7FtQHDTZp7J25KMLWpxtzvwDCLtAbYQWL9KoSSKWx5mZmcauKTYyyfmqTJn29N2f4g22ifCwG37ds",
  "key32": "3kgfPLdWqCavPeAvm53SrfF1UjVL9SJy1NdNaELvko5qTrgLFL81GLamrcXcaSiVWCZQXC6Uh5nniiTQyFXy7dBc",
  "key33": "39aDYPJx9iqVXBiCzJmvWu79ggTeLTvkEJVkKrV1byS6iUx1LQngjMdFGCWovMVP7Q9agV4CS3aKQ3p1go9UzaNz",
  "key34": "3UxKYciXePmQv2PzfLKuzV7Vxg88sB75896gUgN1uN5Bm38EtxKs4YnkKLZ1NwcZMyr625RhDg8iYjvtq3wanmKz",
  "key35": "ANmSm6SHRXUjCBXvco74t5AuWPyn7PsuXGYTkbAbcuEDd7kRrfL6ejWPgUpqxx9eq2N3tzBWV3b1HCRoMjDS7aw",
  "key36": "2M5tpVkHComHpJtmnzp2grVMbN86C3jvXQQtdU2PdrAqJ8XWBUcTHsQ4zawKwk7RarFxjYz8jkeiy4GjRJNrhTda",
  "key37": "oD3pMRLXdqKS3EmNVKCVUSUG8gAUupejvYQGw4pHuTFxKbDdBtk6d4aTPb9nejxp51wnpeboDjfYAwE1hxbnr1P"
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
