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
    "y5PbauZNCxR7eutUAeE1EooaxcRokXhtRP89e2wUaoscJautNkq4rV5prWiMxjGCE3tUi9sNY4ucs66Mth55xqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iewNiFVxmaHKD4p2e4X5LeSeqLnkh9G2zJsCLRxiDzk1rLnt4rmWSgAWR8yZhP1KW2nd73KyiT5hna3eYPfDnRy",
  "key1": "4SH5D3wUVMweJHJsJWdXBbdwquKwBnSJdgaEqyfkzoktTNpd9KACuXQELf1f9rGxCKGFFpnG6VuJhpsVFD2aZk78",
  "key2": "s9a96Wi9dJhUseyFGyR5mmQHtL8Z1bvTDDBEh538QCXoFLeqip7Gm6nyEm5HNAu2UiZEyDbvdBmVniV2gR3UuCu",
  "key3": "4KoKXkoVFaYkEKPudBhrCB7nqdBbXBKio3UJaoXnTWuKj9w4sfajhaVM7GHiNKRrm2KPSYpaAxakDo4XzR2Kcmuf",
  "key4": "3FsZsMvQpi5j7mh6t64QT87n5JvqjaocTt6921pxeymzctX7MPNuqcJVa82knVLuchEFGqKqRGwFBMFdAr6ajd1K",
  "key5": "3m855W95Cbne4tuBY4DLuh5NZmwtbR6BcxEc9WceMp3sGHk4RW3FAWQmSprG8dps6BfmqyAo3iZMqXg6eQvLjXHD",
  "key6": "47NvSqyzGDmNfScYdHGJ7nbvqWwuSUfggQyGrTyrA6Hjs2fqtus7scjdfRsnu8LqHJJnXQB8nb3FjpBAJbmSFDZ5",
  "key7": "2NR7kdqzQxTLQLHaqe7XP2onEXsonQ2MJxU4JvjyM8CPrgYhy3dhEPMuCZDCEkmELbpUqeQiUh2LAbU6fVm7NjfL",
  "key8": "3FbsjTBrpvYqmHj5x8cxnPYqEUr8bDF4cJFYY4nqnxJF1ZFsuZsHPh5FXw3JWww9mcqLCuc2SoMrsEHrei43Dbky",
  "key9": "4Dwy3By7XmPu6QSAdSqAcyyzPLqubXVnfW1Q7LFEE1VyrrUnjZEd1tQjgYFjSzhCbMimVJcDNMqxoWmcCPAMX2KG",
  "key10": "4PukusW1qKCPuK2FkEbY1pALKDJSF12rn6iS3dyuebB2JbDaxVNTwMd9wQ5EhEcgFr9GtcM6Vz1KsGkoPAxHPj8W",
  "key11": "m86njBBcjy3wBu69cFnUxGjWC6wfAdZr1RNtZbBMVHxtu8dxxhuvM8SkPjLomYcGp1VH1cESuYV5Kc1ehZoWP6m",
  "key12": "TeyRy2VkTJdgemwijBpDgeLQ3YR2XjpBpKhQWTnFmyMEVs8T8qe16nUa8oXzAko4C2eMzhoqJnSLnYP3ZdwVYTU",
  "key13": "3wVjeq2v3KG82VZAwpM33YRULG39t34PmD7oKyPW7gYBNHe8ME9QtuGWAT4CmxApEj5htfFnjKuhPEC78ixTcMoC",
  "key14": "3r79hxRmj6ocPYjEBuWe9iyXt4p9x7Mxbsm1W6tAcKJwEWDNbQyr9ggHYNUhpgksjuhbgREea83561MMPP7ePwbu",
  "key15": "3dcqEFJWt63dpop7UTLwycW83p7ccV3VjVcfTXi2qizWMk9D8eM8VhKAXABEwtvghha3erihpgThPt8vKi6nYUnd",
  "key16": "21XzkTpBhswoQEGywYCjt6b3oYUYXVAqwyX1jMyVxuDtn5YyTBeXfTjmGEWJ3DXXdWpbssGo5x46MtGYLpnmtqrP",
  "key17": "5rRGd7cXnGdLYPSGgLmd2ft9K5d4iSiHopmPNQFATPrrzVrB8y3U9TQns3dXNKSytDJrmUsexdKBjztSuSTqmsFb",
  "key18": "3D5YNHqtawkKqCRzm6UfXpijJwj69wt6WxmdjvLdmtyb9FKatC8GspXxy2Eh7JynLNqweB1KmZz985KTLfzkgZr3",
  "key19": "5m1eu6aWSLxnmT8m2vZrHHVykPCXXQPp721RHw68ueJ2FrqGwcQo2vvdWYbo6z1kFMfGy4SXHZ4pJcTMm2Ke25DR",
  "key20": "4xgddEieFGUizspWokGwpUVCGjGGc3G8XaGvkiCzZrUWd82zWcd6f7rHJiT2sHYN8DT3i2C4caYiGq9YBWToSLa3",
  "key21": "2SiaHuv3m9jRwuTH4nd4serXyVCZNgdcs9btAz6rcxcwyVkyP6edSKoHGyDQc1Dj2AD7y7dHhbucKoWy3mUB8o4G",
  "key22": "2JEfVfnHTaBGXhDmfYmQfbQCqfF9DTvMeV9xhZ4RAHfphHri2wFsaBitdsxGcRQqoM41eBcYBSt61vXXYWtjAmWU",
  "key23": "5fc8fc2qMomMMtQRMoStCTTsxWkdcYmTM5ywmXtTjMU84JLigaK2fKFLJYJW4ESFJ5zaCPXibXqqeq69TjE1c4D1",
  "key24": "5mtVugvovw9bvmevoSLko9A9qKvnNatGB7jGJF1TGSVsfRXuqMX62YRKgRSYrmzmrfz6abRmemo13uwgmcyEVfWq",
  "key25": "EoXF58u2JGhaxmgaRRm87utuXBHrLS5Lnt9uFx2dtYL4URsARyq9goQpdf2m8wyUqsJhKAZvJXuFxGuCKZzKBrs"
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
