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
    "3YrBH64zXL4QnCQVnS7Y5xak4fup9XLfkuFoPzJaKdodWzY4i5RX4vkywdJbQCgqK4LCpSTSEpN7tCK8mzxmSDBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6CA3ER29EU2qrhXSFvx3TJUZHY7Gob9ZcTkVgQcADSkHbALE6YGn6vmZnYkAeUKfM9GxT2NDn2hLDLrgPYRfEu",
  "key1": "5pqEWAi2PFs4xAPg1rmneVTYbmpipesMYaA87w92jDRaRjyyk1iTe87RqJ1MtK9PmN69ke1h9zZfkNahqdqoFsXV",
  "key2": "2FK46Yd49YYJN496CNQe4Xh6bxrQVPvWkdBs13a7uxXJUvborQ2NQqDuQStNEW4pdG2wqLBcAZh2GjbXYYijowzV",
  "key3": "3bi844NDBosED14y61Lrrz4F3tNoLPH3AziRdbC9isQ16Vir4uZj98n6paTJEUgPfk6v8mwoDqdR7Ac7t6m1oDmi",
  "key4": "42U6W1JyhaCHnMNvL6xMTFtCw3L8fP2mkxmxnewDFwYAzM2zvDm8Jtb2VtNfxE37E4yWTZcM5UzqGh3XLeX3kSgw",
  "key5": "3pZmqcCKszmHVcWR6h5E76bjAJcDB161zrWx4bLAg2uWxCwLf2ZAbsBDPRxRJnMHveTKHHXwoecPeh5HxfsvHrd8",
  "key6": "4M6SjcodDiMoAAe4dzLAjs3rhynCafp7SxvzFdLPogjKdWHZMyRdr9NM5ecWZ3Phy7mHivyjVSVt878EKw8fR4Sr",
  "key7": "2MrvUVHKtkHFvfZrRzMkWW16hpmtFnsU3f8zRc8mQZNBEJti1dm42nVdFNDbfpTQKVqsyn157SshMDqdAMdioUYs",
  "key8": "4G6bZKt5S2XAbNSG2m3Fquosz14XsY6wjJqwbC6Ybm6X755cXR45cESNiK52g47tC8y9jsf4aPnMNz2u5i4tMMJq",
  "key9": "572Dz2AMZ3C5Sozvz5Brep7z8zynQ22AeX2otjguGwFPqiQwdaufxP83kKbaGUmGokND8EquwhDZqL6CSGvtbYjr",
  "key10": "4NxbKJ3MVgFNcd6UdiXGB6XraJ4qmU1Q2T8WfqbVwj5xf3Wjt9qdhZhQuN5ddyFe9s14vBR1M3mgEAZUH97mmZy6",
  "key11": "5d325igzTb9saEPC2RVh3PDBkPrQJTXRBjzDBdQmR8jSUomzVEvBS4dUERvWWWiKQR9QXxBpENohsRPg7aytZS9H",
  "key12": "56hLB6AHA569vhnVZGcRpPCwKZYVh5FWXPmerJG4Rd4fnjAedC4Eemy5M6T8WXNv68JSAhy8qjNzLYsdhHoCRacF",
  "key13": "37uyHGj9p36WcDU7GGiaR4TmZqTDhR7ZmqgxzNbQ9y1Jb8MEyMroXDeuB1TMtCDNaqAha2eKt7qLES9Fp8JfqQ78",
  "key14": "2YeUKxdyjiFSknczG34ALZfvsWXKegFoUGL8ShFEK6E2chiRq5SnuvpyfMAxtivXdNLuTAQfguG5WE4XLtS4SsNJ",
  "key15": "2JSqsQEHHmshBYXZDEZ1YbBLZ2HotRWpqSmfkcXN4pkpSiGkjAtcZUiBUaAuR9a6GmPeTgMbKAaJmhRUU2XcbjX8",
  "key16": "4hEAbts58GbTbUPXPWBnuNPXdYFveptBVvQqteHZ6FvvJr2i2WqJ2T5Cjr3X9Rj6DAdK2cNZPg7Yj4LWBb79Rdm8",
  "key17": "TgYx6cS1qjHLsWFUqXJmjgiU3EhjU6jYJn8gJR6hsQsfYVcbkstr2WC7smDNK4SLuvg6jfdJWbykJCZESM4Cod1",
  "key18": "SmVkDwtvT591sC8R721Uf9cwXM4BeuWGcaUSnYjcrRUAnpkPzoBaxqKyvBAAUsMTo8DsWe8zecJvwWLuJV984DY",
  "key19": "4ojfpjRyo57w3babYNuF6sSPR65KhkrjnwAb1DA1vyfy3ASLXs6r84tYAKuEwPLo26gtrpeNiKpoCeHeYU2Haisg",
  "key20": "2k5yK4rGHioeAGYumPrqxFMjxWamVMsYJLmRiJ2ZjsyKYQbqxdyTLnpfqJT6mpREe2DYqVDmmXRCft3X2Bnay5Sy",
  "key21": "dt6aTgTseJXsyTphseHJ1j2kVWhzeuuUKm7SFn3Eonqdu1VhgAE6VFdNsdhSf8u6HFE83FD9ad9aiaXwmKbZXFA",
  "key22": "4riNUPjqhCD9wRJspTgEdUU8NU17RYXza3Z8nmESB78TrDccg84ChCKMSdkxJYrQujDMqnqbzgim16L6v43wFJpJ",
  "key23": "5aaCokznZfuVkohPqnt71sVsX8cyC95yDSemFnsWJm8kTvFBZgk88dKtbVMdarEixrkPZLbQnffCHrgdEvtrf2dP",
  "key24": "4qqhZVumoYYX2hjafDWEteHPMbQaG8W1182gL8WjSVU5XskPKWzNvb2KMKKk6NRKjU5cRh9dgSmG3zLjTaGL14Xj",
  "key25": "5TmfuhG7LZtt2BrtEgrskZURqUQyC85HrXtTKCeSmh6nvxY9uby8v67bbc1EvCLyNNALWCc11L9JDk3tXry5pjmQ",
  "key26": "3dvfVbzBaz949dRFcpywBEB8ywqydqFdiY4SWopq1xZmECHQ9PQLikoCbQZ8RZtrGv22cqgu1DcoSXz3TYmQ5hC4",
  "key27": "66HuGdEbt1e7DLFdcCPzta9ihVjo8ix21CkQDsGMnkqjJtzyeBXb8hwqPDdAbBCYmUtUnx7P6yyrm2baMzyMrsJb",
  "key28": "3FjaFfneRgU46Va63apfMMJGzWmCJQ3oajPqTFuPPHgpSbrt91T4ey1fuCykr5UYLYfADipX2SUi9wpYn2mfSDfA",
  "key29": "3144rC3xVmTkHt9VgQimQNJrEHTKi3HhUfoyJ1HY8tNeuG2SobA1iiVXbtkMXyGhB5zSf3kq4fkUZWJucqrD8Nzj",
  "key30": "3WJaqNeDvpgfBtcqLhegXpws94QX4eJkh9D8aAb6rRfEdRRvV8AzERcKkSf8rfc1kGPvxQAET6XFBL4qNQjedEXJ",
  "key31": "nPK5WgLVjsx5qvzYCzTwEP8xgaoQ1ngTyUyxj8zdfFFKrmQh661xxV2oUL6J7bg8qaNg8woAgU7GmChWLd3qJJz",
  "key32": "48r1s4QWqtp9oSsP7BH66XnqQKGhWcgZXy39b2W1osyiA2b11ooweKEMSspiRt6igvp5doXLRGReER1ZcwYYCEDn",
  "key33": "5x1Um1s5nGTqGZdSf1PizkiatweZjCENUfGmzZev4oxRPJVULxR9XMgX8BnRW74LZrCNqnwNgJ4VzToBCq8jtcdk",
  "key34": "5ku8VBfyiY5hrxvKtarVSjL5dG6AZGyA1ZCDETzmePB5CYP6XAkomZmHroEE19NJi3mBbZp1qiY3aERVTfWcKJzx",
  "key35": "4wUwPyo7BmtzhiockKSrzdNhWhWFg4WvqCut1Msdp6fNaJzHMAxAQCj4PU5ubDrzH4N5nb2B1XEJD6x1tAC9MXG5",
  "key36": "5VJktdQjUosGm7hgvwm2BeSgRzXNBDCR5MGvzPztm4NgetUN5JceRWY9VK1EbUk4jFFKHkfsepoUyGvf9a98PSni",
  "key37": "3xYqDw8jQAAoL42iVyDjhA8tHwVXUWiQeS7z3Gbebm5RTcvfD4EFE2tf6aURZPerUhqoNyPbuxK5cuZ9p8sREb1K",
  "key38": "3EwNJCYruHggpnYPJbMMBuR1QLuZD68SSBjQyhZVLZwVSrYBtKUHubyAn9HbciQkXryViKuPp514VZasEnHGqHGR",
  "key39": "2sw4uDAkHxj4B2Nzw1ot1PNxJt7CKeDoawx2edFBCbeLZcufMjB45wcjXKeLns3Z9Hkpwv2nyGfKajHKU1NQTsct",
  "key40": "2Zp75cJMKyWWxcZBBvAGqzk8acBXqeRBiB4Xu4qP2Qrek7uDBkkccpTH7QV4GYxsqcNKiWcdY3cfHwNSFz9pPAwc",
  "key41": "4Th4fyrK4MVN2aG6u6pVkmy8weD6v53yvzGkPBtQjWTEUy7UoM1QWebmU4eCuTLB2bqVDb3s4U5YPc5bWHyWwyRN",
  "key42": "2U1xPoZoz9CC5j6wABUpwrWEPP2kYHJ9dGuUa36JpWohPYLkK5cEhXbR82LQU1nAP1MnA2s2VWHUV4wpjeUXx4Aw",
  "key43": "vD5xCTWQDndZLmQ6k2RGTfA3bCCRecNRHcMg9WVFLVf8Z4NMsMztWVqSjkoKJmzTPZRSkohxk7gurjT8QUqQuEQ",
  "key44": "2pBdy7E19BGQkGFjwTqWoHhLv22oQPK9nC7DSAew8vH9g9PKqDx2ujuew6vd87bV3UFXsm78z7b6FZwYMjaohtii",
  "key45": "3kuVA7YimQdb5BGeVB48L4z3eqADwoAfFQ4DaX1yyRxVoGyjuEqQhLXTdkXkpcKF4AXRhqmXDKmGJRN11qzHp9Xm"
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
