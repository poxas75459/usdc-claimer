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
    "5f1TDRMASByAKUSJ6U4hHG5bjF6ZaukeAmahfNyW6eLBBsXHrZ5LNKt73woponVRcfw6xmAJf4iKSbgeLrAV6kZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pChgxEHLGtyuyTfHsEpT2LvqRfPaWRQU7fvY8ESuEUb9tHLE9hbyQ9ZHMntZfJPGiSLWzQSSEJ4ZhW3MbTc7i2E",
  "key1": "5pMDE4s7c1YbcVcEue12BGZubautqsUjseuzyuMz3vsu6JLzqira5mQ8aVYUvwRqDLmYkwjGbv8cAQUiyTCXza7",
  "key2": "2zLpX5hrq2UX7NRiKRciWuqvVdjUYLnnBfz1Wc47m6QbKakJPDpabvmXzKRshqt54suY3WSRgbTWEJFCSB3raP6Z",
  "key3": "3A4ZiVYXxnxrM9Xuq6Abi3Dci79isRwwQGCiw7iw5THL7yLXXQEuHtKFG3XEqEqWabGDCsz55qK9Px67hYKvdzqd",
  "key4": "3s8hcnMAaYWm1iKCkVsgUabBDCbxGmrymD2j8fTmpZmPewVG8Ejvajhd6V55W1H8frCkZXrkU7ph86QfN1GZzQpw",
  "key5": "2n5pMtGN5gKmbdVfBJUp35xhnwKpNowW2iG819XC8Fup18utP9tus1nhWD5AeJnxXZ5Jt1iLwtj6HW39W1m4UkaL",
  "key6": "3iZzc5ARrgwp7joVJ6oFoPCGfYy5WKUcDREEkVTuyyNu75inBJpbDMHVqVvbFm6tZMnigJ4HegoHNf9Xdx5wn2fe",
  "key7": "4cvBCSw5KMZWoVgDXfTU1s33LiMrH9RyK9Sy9athwLMsWpfXdHn1Y5meT3m2tj7myF8LXjtUHy863gqcQYAEJ8Jf",
  "key8": "vgYg8TuF1JzrsfmSBtifufnTJvSfYDRJbRP2r2zRNisZXFKCfQSaiBF9rrqVSSVeynA2SZ3sWNYma4K8bjNEr1c",
  "key9": "4Zm3xKYyAWC17SP6jvtpCay8fGAPy3uEWXzk9hWpwyQk3MBY7igFzadKHqyfp2kzSMz3qu4DcwfroGCDVfiV6hCa",
  "key10": "47BvnMckbNhmitwVq9ptr28yu3hbZgXh8XrsMXSMpeBDdy8wYzQ7fBLvC4dMSAHwS1Bav9ved97b2fd1zawN54ww",
  "key11": "2Z4nkRdyqxM8PCKe1pN6BshsWm32VjfWKa8GLvHQ8djN1Cex9rY1gVrAeqadRp3adaWdA5iuGuNS97GuQrwmYUYn",
  "key12": "3TrcPqGyWhjeoE6B4kBaaTCkCbcJHgA7fLbxFTJuDRxMsK5HRe9jy1BV7cNwNp6RZpbKgbvhQMEbopon3Zopiy2U",
  "key13": "4g8YN2n1mPz8yU44DjBB1n7edg52NLLsLPLhBU9anbYCBiMEBky5EcCuXuv4gt2pGC4TGH7ikpFbdmSjpx3BrQXz",
  "key14": "2JohzbKSSFcY8EgxeiW95GPHqS11ycHG778ReEmN37mkVPuNLsBtVgZ4ZowNeUdRqAkx81449d8WQKAZMgfeoxxR",
  "key15": "4PbCne3bFstYCVkrVXQ53T6SiCnYWCwV38SeZTdvHXKQmsW3zvK9jsT7WVFLpWbT53bbDXJrXXBXwUPe8EMsu3Vs",
  "key16": "Gjt1CLVwE3sPrbTwftb915hjbAfNpLnAaZsD894Sp98or1VxCDVHrrGwCdcdBYo5qpgwUDLXv527R5qAmB7xvkW",
  "key17": "4MnwxMHqN6kJzhiEuQMmuYXJX4oXMWH3kusw8MXRRiCzUR1TYgZAmJC4VLwr58cWWRRS77VAWkRHabXBTHFkyhjW",
  "key18": "5BfVnwZ3db5USu1DccTVMP6Qg2dxErDWW46aZkiH8UurgJeuhaKo6Qxnao6LwgkTRc178EZNQJSmGBSQQpvbpJwk",
  "key19": "2yMSuA2hHDxQZDja77gCyXpDsALVR5JqY72sqZAYALmMvy6fo2TCdUfFgNypQGfv64ipDCtGEKEriK4kJGxRVEBS",
  "key20": "342k4ZzktDoaJQGtYK7Weey52dDcYCoEnxzZvNyHbFGurfj9ceKWBs2eUGzEfXFFLUfgS8GCaMnkxrDoi7X4wcJk",
  "key21": "2dK7yRJ4vWoCeY2qDr37NCL4NdGj4WfEdcgXRPiFdCBqTBtkJUSPj8xhsrLQEEJR5Bxb2HJ4B4vbLF1FUYNrqQtm",
  "key22": "2hG7cRCDMKgghCqSBC4enb6am7waVzhDXkVtVLSDAXerRKRoqD1rgvxX9TNnzKFLHyNiqjaewjH6GhzhHMfu3ikP",
  "key23": "qRSnFYPvCi8KaPHZhADHRziBPqk7RtyZAskrNKtFE875uDiMHNbc6fK5YHhomKQfqW8r4bvkogF8U9hzX3keUGo",
  "key24": "2pNHtxiHjEu2WoHVzSqu2S9CP6UZ3g7qLvRPetRsK6D3Dk92RgtmDsC83gkjPAJ3PCYfZBxdmkzogJFbFR5qtNBC",
  "key25": "2p1ufj5Mr459JBAoXtD7q6hpbZ1cKHw6zZoqtCFrUedrsFQ3DgkFXLrGf8zY4TTQYuYxG5sHWi5qXCPEu9ku3GTM",
  "key26": "sqXhwiERknSCTQeErD6zfUciFFpH3RoHiyFtRp522ijAzxsMwMC23cLmsCr9UEj7WzhvjVUJTHYYdxVDUv1crYM",
  "key27": "3HPDMBP2rmDAPn3ZGxsJiW3ouQ4LceQa9MR8UbEgm6yYxq2kZb6aeUFCVCpo8P6S2WTGBCiccSGmVqbfJ6HBTx9P",
  "key28": "2NngCyBrLS1VMEye9hSY7ibQo6RvFmq2fAc2qLmmkDcuzCwraJUAN2BLCBAjQFPb33cnQ4UG5mys1vGUbqmrBBEX"
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
