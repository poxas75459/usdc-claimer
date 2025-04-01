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
    "4b6PsjU6UNUKZ5iPattpifPYhvvWC5QMSapnaV4QMZj7nxQcAWWS9icXkaRd7DdFoaz1QFvRuvzw4Z6i9s8j1x2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SD4CYqPiLdYx3VWeDWVso91LXgPULHvva1nagr8Ujq91hCxdPHsxaq6aC2G7D68aJxPqGiVbUWBwWCNjS7gSHP3",
  "key1": "SJrZkSR8st92hWdtA3HcftNyhVqazKh5gvhm3Cvku6sf682UPWgP2xvw3nNs81yB2P9L4nd3oVZe1phUEbtpvUC",
  "key2": "2vjVuMGSjvvjhho6zhkWW6J93nDB3HX6XBmCh5kZutrBMpWKuYwn1Fg8Wpcdhgepx7xfDvdRC7eNrNA6k8QAxCtg",
  "key3": "4XYhUxqKVbyeBT1hwyQgoRiHVwVRj94ApDF8JfRjL57F6z5pqQhpi81Ab3FKZVh8LwKjKDAQKaAzMXnRdQnorBy3",
  "key4": "5TqHiFSajaCiSmYMro2RkULGZBNnXDnHNnkQo5YNgegBJr3cAJReM2anCJVHKV3D8Wq21XPwoXJAFAxFhzr8WwZi",
  "key5": "4BvfvdiDuCQixp2t5Qg5qiJ1aovipVBFz8Ex4c6t4FUqg68fQojtcSaYxXUisoQFsqK5UQ9YqAZtinmoF9HKGLsT",
  "key6": "645XxU65KodzVTeQwK5kPk2aiB4fEa7tJPSjFs2PSptQh1mgWFxQZWpFygZczCWZKJXDt2QRnP5LEdSRkjHssehy",
  "key7": "457caRrh8QkLsVP3Py5jSt363iXhM1t9FSEUAPQYmMTkGXxjuMdTdgi5v5jr9VVnKw4TVtYfPK8Qia4i1KGWR4MN",
  "key8": "4DFL65r3gC1sEa3hV1Krh18CvrRk7V6gDFyESGuVznakQRvD55zr15sJWWSBYUxwCxg4BgAV8h8EjtPR12DW45Ux",
  "key9": "3NDXx6GGovYWmmpu9RzjDVrDtZ4DqWkhJ4LeWNiY8HcabnFeP2UdbznP9gmVQiip6osQL92FxCaeLYPT5CMtbokA",
  "key10": "3n7Qc6PQDNALSGMpA3zyAr9N4z9QJqRaSfCExfBQzuiA764iPr9ZqxqazuZFvkB7meQh6FzpbD3U3XAdwcj5cMgt",
  "key11": "2Hn1u7JBCqYBvfD73xLYQJF99gBBehKMu4G2x2xfXNkjgqCqt8x1sLifZ2s5Pp4639BS2DJfeefVMZg47QiUAe2p",
  "key12": "qLkJS6zL4trWcZYKuihSF6gqzG2FQZkMU7QJeEAyyJHdMLGnREL2VjdZw34xAEb3ojLLXJpBuwXyGT86XnRMNxq",
  "key13": "5dpxxk4pjUG1Fy5RfaWdUqqpnViS4gUXEoWXeb8ecRSmagXdtjJ1beVk3gpahmWRbT4xXTdkyR3kNGbkTvYeUwoF",
  "key14": "4W6bB1zGKMeFhHzN9mWvSxzVEijaMNL1ZvMXWVabWuAJH7AxF2foaWbYoMBsbuPa5gvRTqiP21kPqWNxvvW3piWP",
  "key15": "DfQ5QL3EyNj8x9Xkc5368qtzc2tp2kSuMDT2zjPcJpzvx8JmJ7hGuj3P2ydfKiYEBui95ukE56DaAg1asfU8jzy",
  "key16": "4HPDN1rwsFNDtzE9zm6hn5MMJUFJ4jQmcTFu7PRMUATpCVHAWoHmE7vcJqrDPdp7i5XYWScH3UvbBt1YoBJjnroj",
  "key17": "2ZL5vtzQeKVbqbNa5iecwhvLieXBTE4rckEAZnrQQvwxWFMRFvxr9KLBAbairBbJk8WwujBS7BHiza3cZskTiXBM",
  "key18": "uoZFfnfQAmy4KJnmbbBJ4pUzJ17UfAxfrvFGXmnRFzLygWfuxWXXfZDcBVP5Tnj41TmeUAMkE78YYE1QcXFNrgn",
  "key19": "BWbhibs81ViyYY8o84WPa5pFRoRkfCkn9ym7snWwTs7UFJECQytTwYZ3QGoGMtZ2Hx9xhH1rHsVB89QXZL8otq8",
  "key20": "AgYC5YKFER5xNAho7J4eHoSZQ5vVZCUEPaBzsLdziQMwASmoCxFTq9cwBvNt8ctxJz9RBUMpDFY8NBS39h4VJQi",
  "key21": "2xR7NUX811CsG7sHfL46dWkjGQDhqoVy5LNkihJUmxHcK6Vvx6fppBtURBRxS9W4gWUGS35i8saBWuugg3RWkp7R",
  "key22": "2rYsjCTY9MFZWVAF3WQrK4CY5K8LKaTHM26BGWCPydpnCMcSn9hQZLMdNeLxesHbTxTBbEegZqnCjwUSvghcTscq",
  "key23": "5Yttk4oQXk6h5nXXJ9pyDZQcVUpPVj8UkfUpcM4afiEdKhttZdb6TXVoQWTze6UevPpYtjLbc3rcnoDtaSiWqcSY",
  "key24": "LqjKcGzJFxVwkKDc5V8hCJ1CX12repQtWm2R547fRxe7WBLYjbyLDNAJQaxfxtMwBUT99t4iqG2kQQbTXTW9iJt",
  "key25": "5BYw2vvyUFvx17VbfmeJm6PejVGv2Rkaua8nw57ReBBs3E1MoZTTYYm5wV43q8wXgPjhCRSfWi913pC5kykWsKM1",
  "key26": "3EdYxStG3NmaPyygwixdEVjiQVXsZ1utTszKRFFszTyH8iiu3JWBK2WsoD3WJqMc2Li2ynJu56eXPpLHNefcV36R",
  "key27": "4rx2PvgtD95NmchTV1ggjz35vTSjVkU2THQsySdptxiPFTf4i3DH6DGsNgPZrhSF6cv92XBJG8yNq6G65DPuxX6U",
  "key28": "4kYsTUF4JSzNqS1bCNr1KiknHUJE8rXP9whUCS3eRb3bnutwoRA7S1ixaetrbs6aiVsvzFgLRi9SnkCUvi5qtyLL",
  "key29": "4mK8YtC1nwcF6EG4nxYxmySQdC8ahGESEVPjmAmN7VPDkimtLVWqrLJMPftqxrB9yPb2kuMc3V9CuFDE9CY4BsNy",
  "key30": "3c8VMbydT6UuGsMgRVe3LdjiDbyZnsHpBAzCjNcLtjb1MuhrbdzEinPGhnyzPYo6sb7J17tMeA2XaEdKPKYZ5QKZ",
  "key31": "3NPze2hgpdeoQF39Jmn9pHeGPSJk542YPH8QTCtZLpP46P6x8KymzvkeUfVM1qHaTpLPp8Rs3YdRvKYhKYCXMb6Q",
  "key32": "W5nBEwh2W9esHXevranVu1h4pHGCgHFdZmUWbzsvjTJSuxHtbPZyg1jiuikWUa52rMvscPW6H8zkDS7DKu42DV5",
  "key33": "5Za3hdie9GQfA68QoUMdYZU6bC267rHMsf9jMdn1kdUXqwcXfUh4oxPCHyH4AgBnYxvkR85XRthcxrymXmbgG4xg",
  "key34": "4q7BqPCBHmx8suY4D1ZPVLMuJMHHgfxmnqkwYTnFga6zgS2zkrAVSdLojoEazQea6VskqoAF3Mdv2rmo2Je9Loi6",
  "key35": "4fj7RQzYRVYn1MZW1m3bG7TQcLHzQSFWcWkrJuHtCXGubrKzBTydBW47t4vHZrFwW1Zzjiyt9LsDYZ9jvNyieys8",
  "key36": "5FKi7pSzZJgS4isMteiAPkzwP2x3PyUbNqgjXofaQPZe3Wc9VE1cCSWZBsd7Uq6pDnDyDHudJUFCJiqh7hXbedhj",
  "key37": "xd75pztit4mNwGSXxnT6jMxsMUfosvyKv1Cwa5H6usgaZ3ohhdjTfXN18HkSrw7oGMPA4KhfkExhDBHMmq8YWh6",
  "key38": "3aekhUrPWVkGY8tiV6KGN1FXrBo7A5cpAAfvvdu8PAFYpphUdZcH6tM8jtF2gR8tqJQypXvPBkLBZpRfJnoCEdhB",
  "key39": "cTTrAMf1a68r66vM619nBDevsb7cv7UkthFTpF6kyUm6RrYss1XCzpYL7RMr5hw1Pysf3w6AschA7eRmnrYeK4E",
  "key40": "MSvChPbDDgt1hsyhtpHtDRLctzeMjPupfVbwj7cWZrhAiCaM2kFuHSSrqRpgg5qPopMqhtyfLgdAdEEgwJhBsx8",
  "key41": "15VV5DfcQBPXMaW947bVubvvNBGwS1FPiPnJeAE4Ng4mXK69dxjTPXd8z9kNT8W72ZoWjhjLSH3ewD6WCBkoS3r",
  "key42": "3jWQ3UarZRtq6fso9RxtnX4Ms6Bp1hL6tSHwSzH8F7D39pRiBfkkXUCZDBMkVyY46W2BewxEVK1nNxEqKh1dUEmA",
  "key43": "2PLVwyu8FDdX15qeZfy3C9W1FRK6ue82k5qx1MBxuJZruZs6Zodie4VHbbrNdJg4a86X42ZS3JTAS9sRTUf117UG",
  "key44": "5ja4h1eZxsqwwqQSffSwa7vEdQjZt47ots3vd4RMzhygeEkLpN9kPvRbKHAfqmLXYWG5UmGWuTXKJ3YPWMm4sukd"
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
