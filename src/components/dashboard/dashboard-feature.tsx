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
    "4KxhCbgjrjRY1XbuZzDCtDrSs77LW9M7RsHCKWgCpkPM5UV8hAvwXsg2E2cN67ZR3L3uGj91wJ3nGXYPn3P2inCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4UpZFr9HsNUTAepZQh2ienQhL5k7B6i78jNcqvgXZ6iDXLUAnJGdCvpNi8HsUvSQLGoWN1ukAqzAfMhgL7Lvha",
  "key1": "3jL61VJLEatHhCGuQ7eN6xRYWiFWzpkSNaYg6jorDuxR3GJzLSCj2dmgFnX1SyNWsvDAFQKQZaKmdyUq3CdwycM1",
  "key2": "58sDQT6tEXLyeryH662veqVrjwUVHhuayqrshivdyaEjeAdf8rmL8qh8efnYfEVGXPuZsTuUbuLzPbv47jAUQVvg",
  "key3": "2nNZbFKyTajUQJEJyN9rXyfKiyXmERVhGo4SuuqneHwmq4jdsNEamfF1h1JJQRMaykatBZHKgfapNALZP9gXBrcM",
  "key4": "2ohghPECtCGcXjBZ4EWA1q18v228TZoj2mvNb5LEx5NBGRVfVo6KXLofYfNnT41W2aThRr9vsnhT49kxHDy7YvUL",
  "key5": "2TLqoWpi1R8BbP59xujHFidHX61f2TGamqfQ8Uh13cgppUnrLXLSCnkpbK6agi22cLA9aZgHAYei7pH7Z8giTA5s",
  "key6": "3nyfkrjQHciRrFHzLfkhed8t4imBgKXVP2ZraKtENzh6fqrDdfdHRsxT3bEgv5Uw7SmaXvEwgV92gnUFUYhKWd4T",
  "key7": "2PQkbnBBdM6FWQ1nLx3D4RyJhAPYY9zJTXDgGKmmHnjBwf127ERVkPQXfzNL5XfB1cNLcsYCbSTZfBXTLEdFTY4C",
  "key8": "61dVCAfX3ed6crkfzVVHqaBNWLfww2LAafoUt4GmG1qGGJTg2NS985QXiWg2YDxaZsN3SkPNrrYZK2Sh1AoppEQD",
  "key9": "5oRRBAFuvtxPJSFEbC629vSNR4EQHUABkPjbzuXQNSSGmQnJj3GV8RfL4A7hwLR8voWh4AA44HtYqro4yfmGSrVC",
  "key10": "4viET6tGk9q4oS9xvgKBywJEsGDJqFPgGzuGmjXDYupRv6pTZMrEMT4JrdTFE568xBTqNLVc3Fz3fBfiifEbam1n",
  "key11": "4GLjRtnseEZZ5e9GkPcTEUQ3We7Fy6G1t393wbELWdnempkTwmVbzHFxQiL5DwaL6Sv5xokZBdtGw7Uuz8HDeg1L",
  "key12": "zY27ahPGL9xhBhrEtkiZTExsvUzt3zNHWQHgi6PGTk9biccgjMfFVVhRhRG6YWm78uTfYLCTwL7Pyst5kzdoKi6",
  "key13": "3i5SSYSAdQFN9hpxaB6xxp72w4pW9HJvuimRyWRrRiQMizQqUeSnSF1bxEkyjR9JfvZ2aDX9iRRoTT3rxDfUiSXb",
  "key14": "4YwJRVKdCGG7YG1YU7r3fDWxw85EiUeaQoRaDSTDk9ZqqBd58Xx2KxMi2UcwyBH8jGu7bPWngPn4fJ2YFeB4B3E4",
  "key15": "2jBbmRuwoyzkVXV7hNk8a77swwV2d2VXsPaRssfgeP3MCagg6i1dFNB7a3wgF2y8uXsNaGDAgxgHbddvqgxPqR4N",
  "key16": "5iFdeZmkgbe5cfwp293snUNReJzPivdCC9PXB2xKbqKtJrNddQiWgZ8TTpy8cNTtmptWWxXmPDxKtt3ov4ft8wZu",
  "key17": "27qnPZTDbKpGf2cL2AgMXhwtTcNnEjgtQHcDexAh162y6NzDqT5fLVa1w7XRxi5Kh7KjJBPLb4wqMaJ5cAeucjSi",
  "key18": "4HDseA2kkQt1hRtgFY3KdUQkfGPq8SBHTNeh2tsMUp1qqsrBXdc2UD8ztwVWD78FPpkEdTYeeVY5mqMVgMsYxiNh",
  "key19": "3pPg11RCwBnbPmZ6tgYwmRYJ5TB8QQRMhcdWLx8FdmVuiMvcK33gHo1nAA35NVnATzeJJHQQR2H5Ns8dFivCrheV",
  "key20": "626UayQ3Yn3S9RMcnT2drsWuMbQYfTQBXbh8nvbCWaHguK5QGYvwpqXqYCHLkbX3ZxCsAfpqYyNdGCL9rmS6REbu",
  "key21": "RAubY93QM7RkbhFZXia3sdNvWMenBYFaMAUsFH4r2sWirVG36Gqi74XE6RcavykCYdNbUUsHkhxV67VNfYZEYQN",
  "key22": "2WeSCMuByFiq1focnVygZ3LLpRPv1EnWbQkptvCLBPyMGxifyRGsXXNNWeUNrG7oA7QFYN5Z1yyfKtYk6Jnk29Hm",
  "key23": "2MnUsMRs2HfPpPbJGop1pG9Re9ZWLHzXaLHjaK5ghcYxVy1gpxkrCHfh2AjFQ5KkyQ67v4EEUae3XcXjxU9Z6MxR",
  "key24": "4RBxo9PkWRMNsyRE7n1D9b42ak1pjuvHEhrc5te3C4sU3TW26t8ASHefbe5CNhn3fDLxmR8URaY2AoWjzi6zc3SY",
  "key25": "4b1o5MAstvU2bvXLZxzZqZLvao82DNvPj53vHqnZkjiWtC8hoasGn9z7JkhC2fdjQYLeo6bs3yLodrmuzfY7Saua",
  "key26": "d3qdVeNMm7UGeMbtacLzzz9WM97maG2fcrTAFxji68dKbbkHaxstPxVfnZy8TdwQvbVG9BBCCkpQFGZxHRaGLkn",
  "key27": "2xaSzHUZauTc2q1biSt6yYkR14WUCs9aRFKpY2mQCXVdFLHT39z2TcAhy9zci6ZewL2F4jUuqLpDmXytYrqut2BE",
  "key28": "5u32NKLk3pXw3N8rFoqQ4ub2t9DXuVkS7KTtXNUJz4VoUxiCsXNBZztzAkPfthnb9ZoEkQzgFBkjeuyQFpn1CFSG",
  "key29": "pqLctLVrbBXW6boo4FMznbt57JUdkF3ryxNX8K8izWVSjXEVhvTz6GHGA8TAwqfCHvn3w8v15ndvUto8NGZVKpD",
  "key30": "SNHBEvnuPNKBqhvqFkaVdXa6cK1H5NJJtXoAyixx1ssL434MH5fYCwbwySYfcKeX1Av6H6fWBLTicA7mLGdXjj6",
  "key31": "4xjMvznFHKy6X5yW11myKeTUB9CNu2TFD94AAnJZB7HazKxvBdp48rh2daCuuF2xxK1qcHRYPtt2kPmoWFSJx6zE",
  "key32": "5otfyTbDk7hzFXZhvMRijkzHPa8higgqeGS5FzKCno9qiDWCZMFzKfPpQEpC2iTzka99U179LyRJdLmYT4gN3oKL",
  "key33": "39gk4GuLsxNRJuKvZk3cmEwRF4DfSvNMga9hCEop3WSbWXvxhHuWqm9PFs9ANnHPYtbea1AsXhEoyTYQCTUeLsVE",
  "key34": "AzUWJzGRfCmR5NXTNnXhiZ5HoZaoqWZMkj9jj42VeuAkUoPVRAmwjGmWXkpRfME5oMYRnubWAqwVpcFL4VMeLTP",
  "key35": "4YQLknGi7zNvJaaE5nRWEnWJxgqK8NXcycMiHf39LdtZHw3B3UJtwroowCNE3G9wk5U1LDjYhLCsawG2aW39W2tV",
  "key36": "5Jdjc3f6Rw16CUx2dHvbHC7sX371h5MVeiKgYJwFAfPXkTxg7P9FxTBSNPqJ4PJdhQaU3RriU69eahkyLvEGMLta",
  "key37": "3z3wefj6jdfLQCGcwmuYahENQARwCVrfNNLWWtMqSpDd5uPgfx3D4wYNq3iFjHXyZwmcgJoTtjJ9kf7ndx7nApxU",
  "key38": "4kquTQMvoKecJ5WpMNH2pghmwL6gx49rm1vN3mjY8eghp3RxWzcA5QPnhAJ6zqXZ1DHx1LCoSERYt2jUbG84SmB5",
  "key39": "2iRaqpvmbLUaDx56LJCpMSPpqEraYhFyBoJWTxKjMejFcNk8vQoYkvtnDNj7YR4KvVeFmgwygCG3KCgTYRKFGpLS",
  "key40": "3M5R5oCxeANtAx9hN1FZUEbiktcC8ZoxGxXDRW1h8FNNoBQwxdZFHLEvDsoAd7ZhpRjbivGoAxxcSRGKnTSkMn6T",
  "key41": "4v7rscUEMLVgpU32QFpwuLgnyH3XkSZVi3JjH9kJacsXbnbiaqtvCECxEQ49u2UmZZJRBTsTcbyx32RvoiyDs5g5",
  "key42": "3ThbdKkyX1k7XqsHLozr13fQPEsMTFqrBwi9n9a8agcSwT8sSeXxAeXJVJ3nsUc96mgZm56snjEQwBLpHdWVa951",
  "key43": "2CZRnkg7N2Uz4biADNiPEKmNNohoZpMcFKoHxaSPs17HThSjomB3EedMAZTrUTDvUcqCPiLGViqZciCHVNRstjvF",
  "key44": "2zHNpeebVeiLsFXReaSb2e3LCBqvQrNKPSfFrRkyj6FmiCGzASgks9anMzHUrYQuB5cQz4FuJ8aqeDx68rQVt1SS",
  "key45": "62LTArt5zUpNqPjCKagRecCbpejwd9yXnzTkucUbVNKdRcqNpvpruqmpwzNqhcqGNV5fg53ts7FhQLeiCrJQ7h1j",
  "key46": "4sadSstEyPHA33spvauAc8fXPFgvqMae4C8pDYRqR5Z3nuB4uJxGGwkdmnfsqemf1ebr6tgYganbUovbkzGG4TCB",
  "key47": "4yeGsKjwFAxWeXLnWc2se16V1qLTDrxmecKjKXjma4bSvjWQmE1euk5EwMA2ZLpMyduAW3u27C78dBSqsTQWc61R",
  "key48": "5Gzx5qALKqsfK8yaf5tkLkRwdDExRncJ2SV8be9sCGR31zAYU4eQjPrYKVm15iK71ePt4kKJntAdcedbcuDR2DYp",
  "key49": "412kdsBS7t78kwnUQHcShWDYSuAQQqjVXLaCtcWVVeWiXh5Ae75sLGYyRUGNRanwdq1uAKTha6xbVrcuodDXdHRi"
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
