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
    "4PZeWMivciUoEeUXBSE2Zzc9WF7mFEeCe4xo9JC6D8CkgCpwyE8EX9xaY5376TxF2h7rWcqUvW8gbSF3UeZa5cNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbjJTBUvKtHj5wNV1Re2mXsCFUvYzusmRExTFGNJKk7AduBFponkr9ozJy1ptyPtdnVLMg782h93YYYXjWD3jAC",
  "key1": "5D3i54BHDnGeqRvgd4LQ2nnaRP1pxd42Fm1N1fj7tiMQQK6kuVJ5ns4CAhikoyhthy2eEWsdBxHwPYafkWTTer7g",
  "key2": "2XkTk7H43VusW8y1cPFB3NbcQuKihuChM5FCpz4fcLHh2xSw1nDyi1Cadzfecxnc3kY6prToZwvK8WZtDQVb1s1a",
  "key3": "P9S8urLXK2vSzFZHGEca1x2wBb484CNRmFcRLnjAjS7ewuwqC8Ymw4yo65j7hFnkDANzjJ95YXQeGh9s2zr7iCh",
  "key4": "4EYaDhAvrTuBFS7ktZnFrtLK1sQ3xGa8eZiqXmwZfHn6zyRHiuQcPfcZPZ5VRp9NwhMmNu4VEb1kNRJ2yxgfZTQY",
  "key5": "3bx1haCxR2vYSuumQsiPLmYyjqF5w1zF1xFTwaZ4W2rjgwnoKWXcejREWE4x17jKiPzkaPYtEFCr6xfmwdph3KiW",
  "key6": "HPULWkgjutbqMQ978geQ39FbPzv7hAE42dx235Sx1zqGK8YQjdYqAxJiaWDLUNduAcoLTfjvFnvX9TyckBt9yy1",
  "key7": "3Kc65AEDJw5V97Mop4s6YhahGo62dURShGsrRBpQn3TzKeKEe5RJYs1y2a22iuyVZSTWeGiDx3wGTkZndmHqLfrC",
  "key8": "2TNd1YDZTVtUn5zyZTRpjEVx9ejADrmMA1sMUu8SdjYGaTMbhGDxbGPu7BhFGA3fW7w3ieL2TZYEiQkJXHNLJJf",
  "key9": "4x3K9DGCNatsGaLXpFyvbXUi9nx18ArAieLEhabLwSG28FBKV6skKDgQZnWibiy9cm5uPvQbkhaZq4Q74LtheqfW",
  "key10": "5G3sHy5uPzMUbnrjKo9p2qaEsRgoqSTTTYWXnbYWHbPjBCZw2PNvvk1CHa91fXexyqDpiGUw8J7BYP73THFm1bjz",
  "key11": "QCRsecFXsBrzWWzqfMCid72dFnTEDkGSHzPcSm3y55LpH97Bhuu15Ng87p371Q8KSZaFtKFwKDrjWn6JPphygn2",
  "key12": "475sNTzNUtSqnbnA1SxfvdtGgLq5bPx4ErToVkQkCUpMPtSzhPApeem4uHX43NRhTRqBCtdtpFHsBuuw85XPFkia",
  "key13": "5TfpsQ7mRa84sm5XLwsFvHyjeJgfowL7AtiXuHbu2bvw4z5qkRUZXmeK8iCgdDrpdmL3JqtHYQKXAeo7fqekudRJ",
  "key14": "miZ4rL4bhYLnYGBTvdJtiBahqm4SBGRoRepEQRiF3risv6eT8YnCrPAPYYH57LpcTiSpndGsdXSzUfryXUvTn4S",
  "key15": "5oyqwKiRNYxy5WE2tMAq7shytvaHDpqWFUac9zAe4stRQ1PfhSa31atw5vkCZxcbceiGRgrwov8653519DRYEeom",
  "key16": "37K5VhSaggSZZEKp4QMCdX4itMGJfoyw5QKtqrdyREpkVcaZUNa8ySeQLD2BZ3X6af1tMDHiMutUBMcfH7ZTVQPp",
  "key17": "5ho48AREYNymGcR1nYjArvwAZht5r8nJWHKoCbZ5GDiHnga3iVLw2y3Kh9d77ZcZusiPe9C1VNMjvgaZNvCmZvfE",
  "key18": "4xEfXtwWQpg62ea4eXFhTRS5x6MoJsBq6xAYem9nF5zg24cNfnPxgtvYu5CKk7kJGEYUBLkLesPPrXSxzqdCdPY4",
  "key19": "4FLcHra3urwUTWeQ8oFRWtjpYL7ssiMtG1nGUfVMmY8PujBahGC11k2Vhfzksji2968EguE6EqNu2i9BYGkRQgcG",
  "key20": "tn3XwheSgW9fioVbXYYhADWbjbeapzQf2MdDdxBNyABj5Zfs6mnSv1k99oxgPyeitm465RBnfamZrkwm17QAN7Z",
  "key21": "3W4t2kKSWZcxqNMUMdHmJNFVbj1zfN6eXeA29aE7FuWWSiFvRVwYffLuXFDMeCQ1RkUKMRkkSb96tx3HCHcxHgmc",
  "key22": "5MFqXUkJxzzp5pbsy8yb5z8uh4pWepQZj5oqnF5JunpKVgh1BRP2iHSK4Wv84zUaAmVqTcgXm1X32x7cXAsv1pZt",
  "key23": "581Rbs5LZDjTsbKQGya9kjTvxyQnY7DksCaTFFKVHKEZ4ARbQ5yZDMTttwWLdfvWhNzFp4nk88BEdB8engTBqDwy",
  "key24": "41JqavK9ki38xezFRA5B6KMPdo8hfnAGwG2NXwoYWbafbD9DBaFEniEwKPvrZmzjjrx4Zhip7i5PhqxWB9f11GFD",
  "key25": "4MPwSi62rpU2eVnYjhfASvz2hpzaxm8jDvVb7KPY8f5gRTNkK7G5MV48dWspQ5U7QQ5jUuMPw5gh9eWnuvar8QwZ",
  "key26": "2BdJiDrvLMFwqNo2vzz1bPFDNqQJEgTh2dji5u8bEw7s7SBGt4Nh9zo1L4jE5DBFLR3qp6DNUVPho5qEtcrJapzR",
  "key27": "4PXiXhJf1xhwWzeYPohCdcwnymjh3W6mpYW9qmPaQGMcnr5SfCSFz512SJZDwokfhVkJ5Bu3iCtrV1NG4CU8BUaY"
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
