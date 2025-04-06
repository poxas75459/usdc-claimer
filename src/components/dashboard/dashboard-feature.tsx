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
    "2KcSBNqGcmvrkGCbz2H75x6FbGb1ee7VHKvaCu8LThVxRhqVSNWYzBU5uq8B7yzDawkM6psJdUsqpEhWyWZ6atws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dbr1PqSJ2cdPSgUDaeL5qyCzXjmLjXHXqBdWoiCc2vkYK79scrd9sz2higD8Ji5fuNpfmKdNre1Z8Fuyaycc6j8",
  "key1": "4B7KefEboep983LXSvCwjAiqdSLKBFnkTgTcdhpx8xVW4GrsgAevBUC7vMC63F8Ez6R98wgbVUu6P515AtB38VV3",
  "key2": "4PGeJkVDCbhJtQaYdLjbDab1BobwQmKXeezdngfqqAFqZdixvK5zpwJXS5wv3LDjJ3bipEYcKcPo83ciVyd6SNQH",
  "key3": "4EQVRYFxnFUi1AC3mbophhbXEt3fKc4uYyu75Um21KHF3SqVfCBwoAWuLjQUUMNBLDUQApNFh6jCNkABmMSvabYG",
  "key4": "4UziKpDDo9F9jLSA8bzA18EhJKrjfynNch4TLeCTNfwRgEVSr1a3cTcd1DtxHfCd1qWgYCvhxsnq5hgiv3ECYJv1",
  "key5": "3MfkVWmeHXdCovPvDgEA9LkvyX9KySGyokC1mUpg1thJNM1Y2BseoapGkWHzg9daiNFxDu3Nb14DLufidg16QSMo",
  "key6": "37aGQcedZ7pmVLh3TWqk2RMzX8jDneUkDin3rCoFtDwHKWLq6pKfPxvhiHfgyTEu9RPVwNjFb7W9Fvh1zhDDPPq7",
  "key7": "2MnGF3LNQWi3ambjVrYv53kKpa3hvvhkpT1EAQjeyxakjcUnTpZsqnaqGPYvnU6KapjqHxMHDyuPjtCgJ23JUyp",
  "key8": "2RJrNq21FFUKfhSDDquRF139R7xPd6T4gehYSVcGduZG8DYFbBZA2kanUDYBeb3Vi3iNE6pdG2j6tbkZXyvA6tXt",
  "key9": "5S4FLgfzSV3mcPEVxJ2RyCeJYnQWNxDqMFBeDeQkJo4evwpKQEHHVrsMHaGPEKyfuhzCT2nYdyStfTgfm8WK9aoZ",
  "key10": "vGJxUJMVdHX5Jcq5G5hAGwGhwsK4Abt1sLvWkrSnC6chnz3ta2KLPRXX2bJ3toW75cRfdijTwXC4x84Enij1cpH",
  "key11": "2Wg54KoMxQvPXTfXm4E89w3umEEVHj9GfDJBEGvE2zmmqeWXtNiz4BX4xBj5uTg9k7EfFL7Dtiz3ckXCckbVAyoV",
  "key12": "4o78UoJRTSYByzZeyg88JpMN3hd8MA8LGTzamZNeZhw8ykD5wqk1CXqdL1feANEJzWx7o7Ga64gLpD5xSKqDQyGh",
  "key13": "UgkLvShgCnwtbpR4srQUVF6ypFgCtbvqJv1UMNNFztGqShLWT7TbmPSLPGWcHa2ACVUznVjKSzKResM44Ame8XY",
  "key14": "5HDgR7Hu89TEx7gfJNknsF6ePjQ1q2FRWAvjBwaZzbZrqcqGmhb8bpP2tBvLs5EvPrYDFy4QNQeDqzB49Lwwt5Xx",
  "key15": "4tcwjoRcgipb4SKWKp97wJfRr3GEfamrzGpGhpsrWFkLZAHpF1pikX1TRCbiCAvUT6LpgVWkGajzgABM2yy5z2JX",
  "key16": "4o5rF6ZYtgvXZtdgR5u74bXcSQ9ojtjPip1YBiiY5UGuHsh1sySKBsF2dPXWjhnUNXvtAn1N52AeML4WwhyQJifH",
  "key17": "5LyBJ18jy7h1hVNCQUhn4kQn5vQHPMEjHkv11trxH5kKhJQQsNvCXGTxubrdJCRwScA12H7FMNgSS6TA79WcbgiT",
  "key18": "576ZKp7MxrR661jvpTAaLduAB36aJtUc4be2WNrPB7mn9sU8cVRtxZ2buptA1kZcGyFHZuZsbLTuiiv943oVE3uy",
  "key19": "7v1TMUmGUy7xaShsRFwbET9v6ao2KDdbxRQEUz3vwZ4am2pdzWnkPwMtkULvtW1vJS2uozTMvzRqc4GJG49rQCY",
  "key20": "3LnR8i4RJJQSxvSWMTa4zebJ16DZwj27GwBVQRW1xZw3TmhuUQoVji9cSPjfTwCrqtsQK5TUhHWfSvMbprU47rqJ",
  "key21": "5BZ3QpiCWqTKTPAXsz6DrjvALrcHQiWPvtiQA69MtoXm5y3iNwJ7w7k75JTELmw37xYZgCzf3zu6n4yrbVcsZyNQ",
  "key22": "1Cq8KoDJgyNg1MMWa83axJaPrtkV497spdTSCPguj1AbrM7vzG4WVPFPV3NFacfxdTU75zojkCGUdxYR6DrcPU9",
  "key23": "4LtJNmDwBxhbk2S51t3WNaPRc1HStG2AdSv19RwXS3AuQzKWM1VQGdWp1Jmk9KgBBehmtq2msZ5s5xSYHN2dKY2x",
  "key24": "2Gczu5cWN9MJ4uy4u9hJTxzuFeoyXCdVENbzqcS62hWZaF4Tm3dcVEHs8ixDutSq1c14eZ16MNgMp6d7AFN6Wbnu",
  "key25": "2cTRB8ftteDVihY3MRFVCxgj8gss1fhqvKSsj3XFy6qozW3iQTwBmLaUtTTvBsUcJmv7uL98m7Pk6RowiQvpnZmC",
  "key26": "49kSkubCsDkGT3JvveTdUvYi2Xwzz1PehD8VzHHewr4ktzfz1bsyaUxe3w4YUEzkef9BmH3RnvTPfD2yQNknMFsy",
  "key27": "xrhZPdqGWsTBgFTa6JFWbUMQwbNPdZi3xAFXo6NQAzjyUrFMSrNzEt5hUmBw5sptK9ZehWzt2CpcqhKcjjXUF1j",
  "key28": "63o9XAEwCff41KNHBcmxXQsA4BfAZbxwmn47VjRUkRzupktDQahLuH5g7do26B69mZxHFCD7LVZir4ChPQCRSrHD"
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
