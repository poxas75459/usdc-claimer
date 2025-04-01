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
    "5jgqrSGoMYsxoDmCpyxBkZJPkhSmVYrJ7DrEm8G6tLX5Ep5Y74zyfd1sjLXXUxKw9EyStbjCJGoPenwx2NSevoVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpTGdbqKUQo1kXGybfBThfXEbBhmcbWXmNxX3UbHssA2u49A6UosPknNRBQJHCYAS54fv82N5bxFCfDGAzVPkgR",
  "key1": "4xXRVjgyGULtML2GPUrMQtKwzAnE6io1i3dCoPwUsVVtUNXpyYg2EmQP9TpxmRFkjbftNoxxaqrVJmBP71B8M3vv",
  "key2": "2zWCs3A9awSvzgYJXmLWhuut4qt14gFTHJio1yZv1V3iu6bCMLVeCzhfHAr8AscxCkUYQQrAohxD6ohoxVWjANcD",
  "key3": "23sVMMjZaP3c5NDbTg57aBwgMMYJkEy4oqD5GwMyVFaJEBFKP32XuWeo2S9BPwfHhGJSFAfhAb8f6xbjU1ZAdDHB",
  "key4": "4vWdaD4WpsWiQh9CHWBMyPKz3TbsBdZTAjfwdCjRcGGvXBRD4BAc5vCTmXfeirvjWvgKUMUV2EYQ3LLT9v7Jbteb",
  "key5": "5Cshy1vg54Q6cgFUSM7VHpdtPEUNeJ9kc85veAhoZqJqFcL3jiVB594tR4TMi1PVyB3SRQC4J4JWzQeyHqHo9aoC",
  "key6": "rMBkuDCcwGPrMbeZtUscZkAeUTXnkHJZmvx3HuRVo8Nwm4usXKiaqktYQuKexpE8WqhYJh3tP5P84aL3op8STBN",
  "key7": "4M1EGmeiqL7fnVDwuTUtCyDjeYK9YArSJTTc8XT8wvxmhrPwCpmvEgNVo5nKNpWLNSh2Df6KcGkgKG8HeRZDJRTa",
  "key8": "4tbZgN9JU414KxmXFo8cmoiq5rqmtai4ojPQAdRoeeTtRuVZpLiraF231Lpv6D6Dn7ssToeWhNzUPXbPCcbQnhx1",
  "key9": "4LoK9H1SUdSSJsmHiwqS6Z56HFDLD5dSfwbiDAL9dmNJRh5oKWgXJQfTbXgZ7ibiYo3UUb7gn8bqABk9Jr6Lce7v",
  "key10": "4U12tqr8ahLL5cKiQHPt9dXPgjRpBwRs6yZ3WgnQSsqBkt6qdar6y1mmiAKjXpty1MwLY6BVxBKmELLCnuPCLq8U",
  "key11": "ECAMZMhTjTBAm5nQyrZGUH3Aawi1MGewxRQYKD4ZDedVmfMYzibxtkf1oyb9BhcroHGY2NSRTdFfDi82nPh3B7b",
  "key12": "4vM23w1XNvCPpCe1G3TcJK6N594MR7zSz4ZVAY1M15hrFFzemonWh4Yi3xBaqf6HFXgt9yFw495yzJRyzDvRmkJp",
  "key13": "3CX9gf5tqgpEyVVX35scXej2kK5pyG4xcKffDGNDiFoNuQFnzDJd3vCXNEduRaZWSW6mDCQBMs2AbqwPtFw9SWTH",
  "key14": "8e5HeFoajjsAwwQkTibmpF9LN5ZsV3q1cLLyhMFp7mDfGv4PAMXPtqmddxWYnpLHjK1GKNdBJnv46a39AZ41PVB",
  "key15": "3JjQS3KBgWsmQiU4PmFTBzP3dj1a5SXeBqcdVmWwkGvAuuUgEGfia3rj68tyqaHkEdGHozq2oMHHTCReWRyazB6m",
  "key16": "4fxLsd46KaHuEEKwcRCoMCSnYBLfx3mVAJ9xjBowEWe15cP4yumCQgNmVe8fDEcLucGLXFRb6gULZPpfRy6UgN4k",
  "key17": "usr1YJuZ6kxCzBCPwdiDuTnMJK8MUXwcZxoiSxBqn428APFxzMyZ2UidD44JxSjChd3WvFs4xgjT8ww3WzwNrgm",
  "key18": "5jKNPo1Q1PqxGgrTLGYAepyWN78jZqF9cmugGAcD7M55UDew5tshhQ3ery3vGZ4HUYrawqiR5wwAQqGhq4a6d21U",
  "key19": "482Jw5TxKJNV1SsoqRgrHukS9QLYqakBSiUirGVpcSfofjMZYjMEnF1sjesz9mah6Wgoq1ASDkLfrXgJo576tcH4",
  "key20": "3sxjCsofppvG1mXoArsAqhjuGVgC1k4d2L8zyY8zkBVnDy6v1cmty3rc6d1J3iQ4FjqsRk2vXmgdtV38FAH32kBc",
  "key21": "47mZh1fhTGCpGsNgcgv4NSsnp9795YYTTMtnhfdTGruV712npD6VSxmLCztFy99yVNYzKCtGZBe444gXhawNn4eH",
  "key22": "rpfTonBY1Lb9p3uxzyZh1cfUAKy7x927sEmKEYMqFKj8JYGRrceWkFg6VTUA8rLcu88K9R3e1SGXf3sxczwxwm5",
  "key23": "4SUY3CVSpKkp7p1n2xB2bXY1KcoQoXJZnviQEL8KEk6PrXmD2Ksr5mbtRRUvu71DeTkGQnFDobsLkxyphVfNJmDo",
  "key24": "2VDPzSRd5m1i5gbeNcdqn1o1dHBXVrUfvpzrREqK9gc5NHBaFS4pr9RzfoevxxXLtPdkkQo3ztEtw755xrE8xZkF",
  "key25": "5NaVaccsP1YJcFwMTCcQkEayYzP3cMK14ccfaJBnVtuMLiufhsPHhS6y11qGu5YkPj55qvcodpggvXim3hrZjnUd",
  "key26": "w6aJH1FXgzaHkxAivVvD4ZeAVKegJBy2i4EdGssXBrZzqmpJioYUPpXjmxbAAp59GHGDMqNqMWjWwiA9CzBFtFZ",
  "key27": "4QHdfp1iRtRU5nUCvanEsUtdi9FkxN87f5fuxb37PSd6CCYUNJkr3VKk8z5Ub7Tu3ed8VDhtDXhrbCPJf3aQmd6W",
  "key28": "2XYg5Xa3hyS8aznY8pA6F3xng6HztebG8mW2T76y49tzocYQwuSzaedGcSWLUcTZXXHS6dg2zWH8wJhgP2wz6ycr",
  "key29": "2TtkpN95Yqjqt1EM5pUyAPuRCwjnhyC4siF11F6wD4a5qnpeM7nmeMUzVk3dZM1UXbRREACXkfYFAPzPJtHSpdHN",
  "key30": "wfuDHtMAGMYQahm6EjHuAFvrMFmD7eiefbQ1U3yGkdpL4v3W8v4B5YEH63cp7DbpdUcMWmJXA7YPXCkcAFYYbZc",
  "key31": "3ejd31JRScNjc2et7f8ZsZa5Z5Xo3P4vBXodwGDVrXy9JrWvG12AkWsFs28LBRp96SyTtoCWtGaysUt6ypuoHg9e",
  "key32": "3r6ekgoT8Jc8Es7Hp9fgrcMsdJXgwisrntgDNvrnrP7mduG4qNr4NY476eb1EbMkJNn99QNwK31oDswnDkRczTzs",
  "key33": "vuJqN7TGsmJusjkrW25nZYer5mzJjNpVoQPH5Hap8mHh5NuFXE5mhqpeQdLZ6UwYuB5QX5TGsssMxYAtvGYv4bK",
  "key34": "3LRuNBgyDgbykQ94YxMhZUi3yRzRjncBSvWwXiNArDHUvvD7S1cStt88ANoT9Qx3vscWxaEnCrWA1XUWBfq65qXt",
  "key35": "5bUPxTKbUwG2mdWNpPTJdYyNXYqTy9ndGTno2cG1Xkz2ZEswCadT6wYb4WUvRoRLRBMDcnFa4Q7dhN9t31xoDG2g",
  "key36": "5joUh1PFVYDZ9djWR7UhCoKdqg8nZwQUDUyHxJxnq2pWH9a6TE3bTY4k54SNAL8aKWGFeNLT7rVUaPKLcbyHTGSP",
  "key37": "4BvmoTiim3ZQzkiYsaPXrN6EYhpBbbBd4x2yRGqq5EWzeGy613DkakHWXs9XE1VQdTeUTv77jnyawjsRxawt2mX1",
  "key38": "5SsM6EJqUy3crkWNvm3ingLwuCXZkzxHUdeU5suQN3pSaLZm5hjWMEvho7Wxew3UDze6tCsfXA9bthcfPftheTsx",
  "key39": "49Ko1mJjKLcfnew8uFh3Kfiahr5SDNzQR59DivEPppjHxzTCgB6aeveiA5iWXgRCWsNHjJ3GL2DdkemmVi77DdTQ",
  "key40": "51Tmjset6AQr8h787b9ArcBAjbEDZ2ynqJNywdytrr7emqmPrDVRYAxxLzY3z4vYpe1AYETcjA7J2nkoa5hi7n7L",
  "key41": "2AE4dqGZxTQkvpxUa7NVmS7K7JV15rfLLTnM4HPP2DthXAdtouhkzRay3PZkD1vQkJTLEcZUndusDs73XRrZHdrp",
  "key42": "3btdoiRRzHVfNhseS1HoVtULybTjyqdCUhhKPnvSAF6bQ6RoZZngpf2h3pJpuoFjKiaCbominzLBv5JWRjeA2inP"
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
