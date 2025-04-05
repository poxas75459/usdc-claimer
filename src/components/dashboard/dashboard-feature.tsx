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
    "3Px1GgHnLnJFPNSq7F3SBw5o9KHUski6mVn5DfC1PFn1zrCbzE3ZLNtcgZAmccJpbZS2WTTFRhQsbnzTVgcWzjv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6XaVbRbMTRYBZNnJx2qwQPWAvCNvbfJ1TUE6EPFusWjXFHCSLbSPb5YzYNsvVsLGzacG6ZmT9oZSkF4T3akeAwJ",
  "key1": "HJTqZotUCqDNTzK6Zv3xMgZUSwAu6nR5xB9WiPGsXmq8az719mL72Gs1ZnP9eMXkZDeq3Lc9Jbj9xfn1kEDRyVd",
  "key2": "2NYLWBSH3uCr6G2BaTtd9VRwWogyPBjHbBByWwptzXR1rVGMToedvwLrmhmWnUr99QHenRDFr7WmhicVv4yXSEtx",
  "key3": "SVvRvfK7bbFRQcse3ZMoSLSEs3sysNnnRbY4L4a6gowRrQMirTHw9PWXVdhz7ebeLoQB5DgLwDDhwMKzWGXC5Lr",
  "key4": "4PYTs3Y9BVgsyzYn4XBCKLPK81AD8yUN5dwaFty55FnsK77PJGK7QjNYKbpbeTmFmiQAtZKnRXASG3Bt2KLMaqsB",
  "key5": "4Weyo9qkme6KURVCZovtMDH7JkhvmtKif3ARHqDQUEhyD4aPbdgQTaSyNVu2gTggvMSYuWvtcbcFmCANzoD4Cs5E",
  "key6": "3m9tvq7bAPvPwrJ2vQXMpkXPrhjg1EipfdgdpHBANaWF7YAGiCyvPQdtsdKdVjHsM7efUFfRL6FySXpp3ysGJfXj",
  "key7": "3LQneDohQ4BDXQpmrxpMp4bc1hvakAuSn8xE1YQL5jYi9N33MfAvmkCEgTeoe9QoGKHihgWEie6wjK7iRkZW2iNL",
  "key8": "4G8hgWLLhvyXuGihw2ro7smhYgQZF92PHspf3fATZiTiFQs46eM7ZsqEp9w7m94b9DRMU4irkcb39RbvS8RXMGYp",
  "key9": "5HiYb49EZycNGu3CedpJ3gtFhMt2LLZ3KZDEV8idiVdcesLywMvbwhgaTKhg2kcyDiBaDq2R6iRSaweiArw6CxUs",
  "key10": "4RKsxg3KEYGQhCzrwCeWyErQYyKBeABVBaN4KsPNzH8YNDfVi4fYNHrT2x5bREH9jNbAeBwWMxYMjuxeHuQ8VVAp",
  "key11": "3EqVNQDJaPCmNiVcfa7oiXFbn1zs4Se9hDcR6WTYvW2H81XmCGiih9X8v6oynQ5HK7HzXtEdxs3Um9LcxJYoL6sk",
  "key12": "JSZWb2J8L9wRk2MLoENMbhwhXi3JxgnnL8E64EtDWX9Y21YUxyfEmDvFCWMPKkSuxuKrvqj422qw8cigYeHG1wU",
  "key13": "2J6yc4dbeFKgVJSStkgQMpDBq1Y5QisemxFakU2aW7dDPTDY6JmGQQRkTnpJYWP5a1NM6zRTWqTnwFWtL4KAXpS",
  "key14": "5jSFuWSRRUDKaP2tT6hyF4iNfiqowE7qmDRJtPD8xnwt4eQvVXw4HDDmAiAn4fses4MgBTqkY4CiNvNe3NYaQ32e",
  "key15": "2Q5cTsdrSkQu9EUEwfDmiHz6RrjVGV1HnPjfpcF1pL93syiKhQgLTkh3NfgdDcKAb3BFfAJv1vBFBaejf9hALmqK",
  "key16": "4v2uiFCK8tVAtE3KDSykzwp9vwAwmCAq5X5w9vs4i5AP2AEiXqZpmXX2DxN7HqSmUbVhZUH2ydGpwLkmEx7WC53o",
  "key17": "5DXaQdKsg7pDDCzZV8JzsTRAmhcyBTcj6tBnN7sRQPwjS4YDeBWtABLU7jxAdjKLp6qRKmoGhJLMVVufs9JYmiM9",
  "key18": "mjsuRdavbW7B1ydwAJ2rpu5x2Ax1ck6cyJbkQhtSv1q4JutosaHhncgDg6CHCA6AESsq2uWYUmAEMckVDhikRgo",
  "key19": "59SVTr776k7SMLMp91P6t8VCYZzW33u5JMzQsjtHmmfCEhmBMPxfFc7xuWspZqCUaT46JU6GTYuAtayt7LG8y4rn",
  "key20": "8T1jiV2AGR1PgAhy1jWvYujAKupU2YPRnRWGYuFxKsnrqbWjHYxodutELKDtub6CmcvEHyE1rt6bpcM9hyupDcn",
  "key21": "25AXU239swu6tB4xAtTE5vaRFhHjgVDUZvpb3mAp5ruSio2AkwFYkF549W3mHmShosRzQVBGTgSUjbdqTrPEHNcE",
  "key22": "4F1i6cN24sbxSfWv8VAbVVeECUPiUsdvWFZ9dk79up7R9sJJyhUzioC3XbR18UmCqic6orsAzmDvvjcejHLK469z",
  "key23": "3eeUiQpGuhCJyJm5gCiFF8JyaTPkEyjdoxKD25y9fq1kQTVRVYdALpMNspZTQv4CbcMgj4A63bCP3vNXSPHt9XJV",
  "key24": "3Ghxmwq2dzPY557GdUwG6fZhERwXEvqR9Y5i3NsbV4BQC65urTPLcVZAxLRcRPjKWR7gmyJHdnKRfjq6tcaVVCfQ",
  "key25": "28zxKwbL5LwPwsxVBMqXT1vJk5YVFQANhSREeMM1e9KP7AeTjDoe4D4QvftCMqsKBekUxfkX3vd9FhPHoQNwF8yd",
  "key26": "2iqtonjQUzrLbttLcyaCU8x2qJcQ91LcrweR5wkJmBqn8JDwMQfL9Qe7uSCuotRQokyE1j5Zig13JbKbPnitW9xv",
  "key27": "2Mtz4VPBFAeCmF5DUHEVwxDoSXtbesNhvKpby3RdVPHQWZBBAZzKXrdfHvd5HRjictDCGnWhZSqJWAgAHCKeXJix",
  "key28": "4YvLSEZkZf9YcMra5NdjDqamcA2bCU1cAMSDoz1zRAfcMkB9HjeStEJswD5ytFUgVNXzSeHMW3DBSeUNJWG6vbCA",
  "key29": "122en8sAn6EuVLNE5T8wpvvjbfnA1ycxqsAt1d6CWySmHTCXSMgrjUCWDWE8h6Hyo7HqyEGaHgJWxg6d4h4wEqRr",
  "key30": "28WvhEwxZrqU9yXPGhAvofwVXDP6q4AmGyTAyqnpcuuug9NWGCysCgCjjGdadFtkZXkxyLP1Ffh3akxjAREUMGef",
  "key31": "twNEndLpYv5TyxgRbGvpLTCmew2T7vcJqVLaFXxscsfzPFtzms7pFK2CgqErLtKCSZs2bWDz1qdbBgjqquWtoTo",
  "key32": "2qpYTjAfo1QpLtW77RJcBxKYzSkCrQGfnNr7K4qptwDJKQAmN2baT7t38gMm1VqCu6m2iKCweoG4htLniYg5EuXA",
  "key33": "2stYtpEFf61c3sZFQCeniYoVLjx6DKMnBu3cnhANLnxUS6MgY1AdrsBEgTicoBeLecg2oT8s14FohRTmPiGYdyu6",
  "key34": "CaE5EAXGR5GU1vJWArUqEQGFMvADnraZJ4ymYXAjzssYnduNQvL7JmAjFwnXKLGbNR5tTE1RRdg8F7XWhpbFicA",
  "key35": "2pxiDNMsxcApdVQdGqQCjS5pD6XVGyGz7cho5B3JNcp3RvubnnfocA3akQhjsd3chqbGqsc5SHDBxBcFW5eNogqo",
  "key36": "5wRAjPmmqp4TXhnxdmpUxkWHXFJ26HKaGFNFhAWi7qasN5u6i1eXoKn7hztybFgCvKs1qtFZqvF1NssJVRryKKAq",
  "key37": "3CX5Pvuud3sqE6HHM2kUQYaNNQXAVF8XiEWuXsnHk6fVQyU2EmUrfLWFQkpHPCTbefGXdJpN9RKhaMCAQ5c3LrBd",
  "key38": "QcGfiF1ad1YNjwT8gUo7SmhZ22yPZWc8Q2RL7SEDrAdFCtV7BiegyEudDH58HEvVrZ1LVW6QoaGbKQQSbQacBRJ",
  "key39": "F1H3BcvbRqkRE77ePzi9R8QytcsUrsVbRAwAvdsgy5Z5n4eai3RG4RMarpMMFMZEvraEfd7t1BDzPdubVnFTmTp",
  "key40": "g6ao5Y7WH5RAQyQDmeyWxTY7U9MfQKBXnJKtiYoDzXn5A5Fea3twgq9xT2g635PW4yhqmURupwMDbdxvX7H558P",
  "key41": "bHqEGtDJi54moNpEiymhZq1Dwt2s1FppfUuFHcV7ZgS9QUTTBNn4GwWU8W17dDg2MsR12c9Y2xosfz51hYThRGH"
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
