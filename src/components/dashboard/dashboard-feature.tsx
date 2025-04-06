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
    "wLaUWDxc8DzYmpLtDouPAEaJig6mCfMf35VeboVTrDTpBrugjnP2WzJkHXUwZGbyLhc75uVWm3dXboxAvULWfNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCLqRh6JhDpPAdee1CiKghoYNvTwqpzbra6nNwmCzCGVzbd2dr7UBQxSYdXmvGVtc18EGGUBJJCngxzPDiDzW2E",
  "key1": "4LpsBmbkoQxyxTGKT94i6opDNMU9xi3XTxbngs8TS1wxD8pu3ZmCUnVaoSLRVdRuwGthNeZip31UWuTruV9cixCp",
  "key2": "4bU94NDG7foTeEpz9oPEJzh98pwQKLtgoQBeyo6FzYnTescjhMGFQPvkKwrQtffD76rV65HFKBtJ9B6wNW5KJpUV",
  "key3": "4MMw5435VcJrNKvr8psndHNkL3d67vuGhjrFxthCUFM2bQ8a5M5oEKscvjLAyXSCbQ6oBhXKDEaQCfD4EiNZ2zG",
  "key4": "2SnS5ryaZD72x1E1XqqExB5itjCsnLh1PEZjUrQYZTVhczLSi2bUigERYYXhRwtVPvysDqRWyMmnJTvGdUhJFkMv",
  "key5": "2ea6PcQPZtrSbLNQo6pTCDKhB9bFh2bLVXgn8r2GyMsb1dEMNsKZwKVzUC9RfRNAUYysBsgUvcWcg3wC88Q2CoCA",
  "key6": "5QfwZV2ZxiDx8n4evXBSNMYGrJoHB7RcytjZQgFoXvvV8WuGPCE2gEmHPHVSgV7BriSYMcyWFz6BVx1UwfL4cEtC",
  "key7": "3Q5AnGk6wW7RZwYRXF2varkeKLrWRNYoe5Zrpgn1szFBufesxVhWo1o77EwWtn83HkXG6NTFKHD3JTQvcH5RUHqP",
  "key8": "59RH8naCAzgh9igC9RF9oJCdUcScWHVTxzmaUooeJkzW65icfviSqDeqc8czwGx8WWR5MWrwiGj9TVaKCbLqqr2B",
  "key9": "59Ng4MFpC7d2tXRML35tYFWoA1pUgjkNCcVgQui9Qc1vkjASiK6KHtdaEKD8feNXm4BmYpMukbqYsAzR667amJEZ",
  "key10": "2DRqqtcdYANu1UiZ2bURPtAi1TDP3Uy6fnJWWp1nYFENMnFzFDeJD2WBg2LJcEnuStyuDVnwiWrp1KWLarkiwTBs",
  "key11": "3gSofMbtj7RnzeKL9tPHBjnBiAuSFGpnsuBCF9MCo83yUDsYTjFC2ifR416Gvz3HrYgWebrx5Jnucw8pB3GBqxGz",
  "key12": "5HqQDkYJHtVapesBHh9dm1kQ2hzX7Hh44ABig3QtLweFQHVvE3id5yvgqwNBcTcGq5Yf6K6suNuZAz1Hn2M2RXn2",
  "key13": "2FePT13fvsKfgiULajLshkiqK6K2NpyZz2oBs8dRprcnV2ffaajFhiNJxY5HV2RFqDpBuyxV258NWpTDxrpv1Wia",
  "key14": "5EGEF9PWMBFYWdd1r6shYXx4rnpvhbefLProgmwe6UoJcn4JLTwEiKpHpRp9zNke1hVSVzaUhsY8Bj2rvZ3eqkLj",
  "key15": "5YTFrNhMvo2JZfjo29v5EwHqs1ATVGnETB3m1CTpqJtj19G6CMUjvz2y6WNLm1FgesWsmEnyHSm9AodxXZMPWjve",
  "key16": "3QHaWKGdkWzSumfeyRabfxnNx7jBGBZjkrvGFq4XC5mqw95FPxHDL8oSTZedm9qmzbmTtTndBNHM4wETgKsxRXdp",
  "key17": "2U3Fha4YkJ6SnRw2rESx4tb6RdyzaTzF682YqDyCu3VFc2SkwmCZMkdiAc5jnNKD3k4xRzh3docdXzhxwuzv1L8X",
  "key18": "3ZTN21J1PuaeMWXsPX7gSfdk5K9rrvecbFDQs6JUS2oKmpdwkfAddigsowiP7NFzUY2A45SbG8K3PctdGee5bg4V",
  "key19": "3VdssVbFQdRnvY1v7N14nfZ6uicKHJbdcgbezZNPcbbVP9wSpwmFjCXaXgrbrMbDKVh19d2yrDRdMjaMrGbB7vem",
  "key20": "4ow8jaP56AsmfdjEc9uR3QiiSL87g8bNXpTZRLGdaUCk1NRCKujU96P2qvUspacjM1hShcZdzLEbwCpvcPsftXDw",
  "key21": "5yZvN3WxMk1uwNLe1SEYc6wjL9JJUZqA9R2LNr1XXm7y2P55atWgTYxCGPCnrpZH8sqett3jWdT8sqEAnNX4NJgc",
  "key22": "26VW5krGGVAQWK9EdykQM5vTdwSYwBQyLxsj1R7cGKJxqpn3vKntYdxyrp7sSUiYmr83FFHkZB75QRipVnsh2F9T",
  "key23": "67UtvCeFsqjiWDeMLqvvKFcbLTB5GdJqcRoPpRqZNDpxYuUo8ezixg6cpoDAXpj7FNa2k47BGfXkavH1aaNqu3MF",
  "key24": "3ZxVKWdMzuXaDwaybDHkGu1oiRnpqfbArDKaHoP3K1Pfd4UvRFBSv4mjERucSQ9FSk2xQjKBuKRGF567c4YkawCz",
  "key25": "XH9rrNhiCDinEckdXFY8FJcetkwW6ibF4QBYJ4hBgZNqUA8RxuVBTZHCd5kkU4ccWw5Kpop3VByTqL2jfwE91mi",
  "key26": "3sYs7or9jF4JfxCPQn7K97JbTHvYbuAQWK9CYAtrk4L5HRJNP1xU65qpLZmnMbd6g5ni16Gjg5TXRdg77x7qeZzs",
  "key27": "4amySh15iZT6pYyfNrpYhnLsRmCeo37VtMTGmSunBvD5YDy54NUDqtkhjPWnoGD8JQSLJ1AQXNs6UnhSFsmNYXVF",
  "key28": "5mVqxG5rfRmGcWZDbCxr6gUfoz7feJ6iY5KNXJo3ziRWYjAm3NVjnJK37PSwnsTB9rPpUG1Gy7JfFDsu3w1GYBSb",
  "key29": "2ZcSvNMj3YTeGupmM8FfjkTzUob9x89HgbYA8dczzkJDQxdXCfNniJMPZ6CpwwqVA5ngb4NCB2svVcVD57eu7B5T",
  "key30": "3Med3gRpCV3Wmbzd73nzvwELcvbHX2118A7bQmWmUHSYbhsiBXdq9ww5xLhFNfFtTjNWnAogpYM6yscgBTTxgLrc",
  "key31": "66wkJvRfjvH662QaVcjkPjz4usUqE81gDReoYu6p4fPxH4deUisA7FbYCtBRa4EYkv45cV8hRRP23TBMhde8HJWY",
  "key32": "VEcZ63fThyFgxS321KVwwePaZw6EtX9wm1sD4iw6tmxVc1jjp1pqvkTMJkBJew1WVbfYmihoerKeCe8kWVt1T8J",
  "key33": "5fYNLHREKLNgvkZgn3KjeMLvT6ToHgH98Ac8ibfCgHV5JaCoxk2wUJEETUF9L873nkbkC2c8zDu7kHU2QkdEqYUZ",
  "key34": "4fnvh6dAqxgzAV9QtD9uPhciAquDLMMQbw8WUYCuDGikicJ4u2ft9JuTmc1KHYFJpSKquL5paaK9v7G5cSW2UoPU",
  "key35": "4tm15jhfPY1b8wVFkaxXoitZSuZCwhx7uZTBDxkyS8rHrXwPBxtdwbnd3qHJHdpwAWxMCegzJ47pyHJ6LcyygPjT",
  "key36": "2r9VEo49EF7cUEK6fFM7qndKhyFHgZDonnQR64UpxkgSze8sHA6PUar5GUyhb6dSMUzLfpr8kEtNp3ZoBiibU3Vb",
  "key37": "271M24QCBRvD2kguxDypGmZiVUjncsdFdfeRk4PD9mTok4gHuiT2jKyE9WCNpPN28gbxr3craSUpRg6w5cZqnuw1",
  "key38": "3yF6ZDdyEv2snZVZXJQPo7Y5uGXr8KZXLnveZUqmtuUuUEU5jhfS8QXRHMa2PMnEru4hGqiTRhtKGZBsB9kstPNB",
  "key39": "38u9Se9gon2xv7NzmCaJXdeq8PTvcVKnRaH1xGrnviaHsSb8LnEn4JxjEQvveiVjwH9woDBQyo1r9LKs2avPcygM",
  "key40": "5vn7TPyAL9ckbA5RJ4Gb263vAHdYD49mYgxec5EaDj6wU8dz7pd5XS7brBnjziAJhB3CFmfiGLXkeULoLprkVeKL"
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
