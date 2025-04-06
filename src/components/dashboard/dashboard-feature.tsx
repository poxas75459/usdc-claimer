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
    "3SjP98VDYFcA1VqYbvn82CsqGDASfm2QR1esYbjooufm214Mrjg6esBpGAyVS48rDMXCfm1kH32UBff87tcdSahm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8jnaDUqEsvHoxyQjn9X27MiHpoouf3VKD9DTQtK1xongq6Xjpvzibu3PFN96wkCUnvA1YcM94TUuB1V2SkKjji",
  "key1": "oiq6EPy6ZQr1RGSkFynA1WQ8NqsBrXX9Yi8aj1MjetPXFoupygMDutMkkMJcnPPWDpD3jgE7pNZTTAMArQnzfCo",
  "key2": "qw7T9dMY7wvRtCdsPoWmMPcPSKGw17oqA7hDZS6jCZAovnGLm3GPeMgtZXveSk1M44QhQmHC8GuDAxNg4gJCwzt",
  "key3": "4MWNrG3ymb72WXBN9u5hovRY7yCdoXfjRufTvdLQ4xLdMfenS7gYV86fp2VZ2BFpnCRH5nbwJqmKXdvjh5CEucfJ",
  "key4": "5cBWgCK3PQ2jMaSsjsfzCNx8koLJ6qWAi5VVEFBG5uSxDJncPBQ2yKoCWj8ddkkXw3Rb1nGfzrNSKZ7JpXjRaZhT",
  "key5": "2DjsiYiZBcyF9W7NXSZko6BxFpHdgcCyPePopRL8n16DbPTuFzhXmPoxLcTQ6P7DpFJSk8XG2acyAribgL7Cqt4p",
  "key6": "67aJW7YjZQGXR4ednc4LnCyFm5nfCx5Qp4ADv1nhwZytrKWpXf5CmEXEKLJ6tfB28hAVrtiPic5iWNnXW1GbQyaW",
  "key7": "65npd7ho1mi9gw4x5po4xufx6H3SAEdcqBFG2v2ayjwc4JDnG6TFMkrbtCjTkU51QmP768X5TymTvENJWaDSjaPB",
  "key8": "3JepBPUBTwjZ8kVtVeRJ6hg7yR2Fm6KCZqm1EgLH3XM9NMJWF9b3wBN3JaRhF36Uj28AZrUBoXB5FtoCdfYD4bce",
  "key9": "QB5gyXBcyjiVZXLGJCDzJAiHFaA36P2J6tigGpjb3ESjS8wesTRzihoE9oCNr7Ca7jNX3aCX2xeXLrzXTYGNphC",
  "key10": "4wGvQg7mHsY9aCiKo7Qc3KeZCp6w9LzDC5A4epYK3YDnSSrJQnru8oKfZKnFw7dt1zXNbayspDtLLKHcormAQDDi",
  "key11": "4bWYB4dWKySQFK4nh63ZrvuQQ2ZAfThD5EFkL6NYvbJahQyyJ9tTEsKmbrheRgW5Z73tK7ef6ppMWL9gtFpiMkmT",
  "key12": "CbGgLZty3kqzBb1cxnY5wXiEA5AL4Tvpn55keZrj7NM9kRotY7gf7gtHb5UHJBytXrZgQkKr8e8JcmpMoRJP5Cz",
  "key13": "294p6TKjcZ3As7D7ujEXybPjBESEcsNxoX54t6hRV6wYCf7TNw9nmVC2UcEXMtG99Jr2omTG3urjQrCWwFAxBaXr",
  "key14": "4kcDwvaXsEuu1Ywqm2wczZJK2mjqAbjYJB3nRaRhpMWhXJvgNXHk8QxMfV5STCe7RhDhUY6jobdoYRvQ5hiSiH5F",
  "key15": "43WkaU26vUZZxWEfma8JpYpXKpSiZPmezgu7iX2fcTvvTiG3UmRX7kwGNJu1JiZKAHB2fxQeC5NgYUZugACjzLWT",
  "key16": "4Po9EqUkVrYUdcMbmAwckPERrqjPVZVzBy2ZaLBQzYjr63bv2cNMGd8VL6G79p4q5W3RwGy6WTDSCsM9oMfGcqog",
  "key17": "4fvndfKjooBdxAjaWrA7AenFAi4qFpfSzKrxVDrkGimyNoL5C64CgxcrC128tHucST72mxWLHxnykXXRHE9JFKod",
  "key18": "3eJDzgeyCB2gK4YiDASES5c4M9gtRQpc9XM2WsCxdwfM9hHXKXvW5kosCmMze5zLzdnNCM9H6s6NR9BJjymyYFGR",
  "key19": "xDpzo9o8mJg7CnhysjcwiRJDwa3ihtaMt8hohAXMXmG6PpfAvcNAEQe7e63p3MromRZC7ph3iGfHjWsvBM3qHED",
  "key20": "uuNjhKrrAyXwdBmPk9ywoctBjsfCcnyXLzGkNk9QQ2RM5L13fyh18ZkWG9N21guCUU1P9hXoMF16C3mbzUni5Dx",
  "key21": "KSiGDWmFU7FxNixuZ19xNkwD8C7YQ6RziSjaBjhu3VwTmgmLfADRaf6LSNwEEXocaNxZz5HL4e5JQ5AhQcaJRVT",
  "key22": "2fca7Xo2ozDtw7fALqg8ZBuGHddDqjYS5vwaw26BnViRfAUqS79yFJLx3uY95FWHQgv6hjejuVRwYhMNuQCkRPJQ",
  "key23": "5FWyKetkcJmZU49ixDC8PHwnfYLFb481gXRjjQtSH5o8f55hKrxPyCMT1eoqvP6S9BiyTnapzcRebhza2ENUs4ke",
  "key24": "wZC55pK7TKpCNTWEp6yKdWPfHvUKUybRTJaLj12mrEJG4j5PP6R12avBJriSjNMVVMHwX94HPycogNutTZEHeNF",
  "key25": "3W1o2hkVzf3JkW2Fb9y4icKtEWSDQbvzYLbjFycDaXzrokKrJvKbmsRnM7EysmSTG2Lo6fx7MHP5EwgDgC6wVDVj",
  "key26": "3Zx9PnYV3kzjn7Z3YZsiX452bpiUiHimovpwfmWCcxaGxcyT1CcitGYdMVpckLUmXuvkyS5L98x4JnUN3fq4qP4r",
  "key27": "3Bx85dBDQ971x4D7jBEzMhxdw83ABrMsBsKhGbpp7FLAPALmUP92hphGbyWCLERVBswJHH7RzVSMh33XpRGzJi3d",
  "key28": "2aEE41fWFq63JcP9ZDzrioDuLsEX3NC66jY1jdYqoeijntLmRWzDjWiUseH2DA5duTBkhnqyQRsXUjAp2SLoNy2N",
  "key29": "3FXriUQ2SbQ386tceBG5HZQpDy5bHZpF51YwVJX4i2CCeRoDV1fnZ2Mc4o37uA1wpGu2oi2SzsyMmwQoqMRFiG1x",
  "key30": "4fensmFH3TTpMZo91Zk5BEvksZaTu4UTG9vecPV6h8uuRaRhsz7vXoVArE2K8LLeCqxG9H9oRS3TTGozJJHkQcDk"
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
