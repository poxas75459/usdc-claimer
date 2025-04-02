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
    "2DHgLhZZ1SvEjRfD3nHd5bXdtUFMWvrtez2n9fTdHjFy1FdZn3ZcRCzpaxXVyRq94RaEdZ8QfNEvCc7rKUV1FkN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "goUoHqBfGGcDRKze8QKsXBcDyg63GrdJesTBG6DkXrZJa8maq2b88mFiSTiCVn7JCXUEVVy6hYE3DAMt5vzEdqY",
  "key1": "4n6qYD2XbF3Ek79CVjFiaUt2vhtgvVRRbFadoF3tacLSWWoUQR8fyPSVAfkUMhvpSFF1g4wVYpXvJQdzT1LqQk9w",
  "key2": "4yCY59CP7f3aYS2QvQkzJVc3aijArdMNZoTXb8Hp4LVn5okVTsefxVAmFkGQijirtL8USWdjs3ekp73S4UCpPjvB",
  "key3": "FQqgdMP5MyVTxxqG8A49gedc7Vh3rezpabPZde8F3Qagi8hKSorVKjvWp49LYbKJwK2owJmBJ5LRNrkSFzBoxFE",
  "key4": "5T718JMCxCNijeyh3KXMrz6LiFNcKdW2ubCWY33H7BFrazfFzvPqQQCJG625hNwpfvUPJdS43qNYwyrudGzB26Cz",
  "key5": "7P8CqaXqGZDz4rxb1HSJzbE45UK6bNbaduUUqEgcKr3VRiCtLj8PxCaewiMgZ1HiH8hXavQAaNd4odjLS5JZMGE",
  "key6": "5LfKYKzx1eyrUD5umaPpiLdGhQpGZU8JvB3o5AAgiACk8VjFaL4NEVszBTnv9EW2XcvvUm3XZjYriREFac6jbDVz",
  "key7": "2joeTxFRVfySRML9VM5zknMZZSvsLtaRCwNpTaiReFnrZRBGw9dJrkojZ5N43gSnE25C9Cv6t81R6eyEER2BfxgT",
  "key8": "4knAahR8FeAbUeSQhRbtuqBGg3TcGNiC8HKR9yT66pbT3LkPV6ptcK8tjHBmaR3Cqwu9YP4ggcAHAMuKQJQHz6wE",
  "key9": "LvTRYnAwbY5gwBdEKA5XBnCkRfeTpgie34SMKaAPyHSFqnh7u3uW6nxhkqn9Eoi1RsibAb2aeRYKH8AEsFcz5ar",
  "key10": "3NFB2AC5dTVWvYBpPPjVGPAjthrQbjq3XtaXY49hZS92Sy38WMZHuUAkXC4DteBB1d7Qw1gLNMrrK8bwb3WF1EzQ",
  "key11": "7cCkfHnpgoD7DobcF1rUrCYCcZCkzmrwT1ozywsahcsWPXZneGJNXtxNNcs38iBu2FV35HRjhmvZ26zUuabKaVp",
  "key12": "637nhBvkkJyxH8gGgfDMCjFhdog6otdg5d2rse7XbtCizifuW4ZKCowsdbhyHEKRGJtx88UkJ3pCBgXqaUhh8ini",
  "key13": "4ihf6BpaTyv4SvB2jDApQrYzyDcMeQAHyhb4onM6RKA2dfeLuithhMKTZr3Do4kDiKXiEywF91jM5CnByZwZLhNh",
  "key14": "5868Ss9qPb7cit1WmC8sugnHBkUEUsgHFabXMdvDv3qZQRwarnXo96bb7zWNWg2xGuGoTNnrUQXY6QdWPtyNXYhf",
  "key15": "4upBBWqktqBZBtbSkhUHBatDKPkSoch9ur9kzMLAVkpc5iYjJB2RCmw2Wjw8ZVMyxndxqybLaFWWhZ3K5KEnqnVE",
  "key16": "4Tc7H9AeTzZdgCT5rQZ6tqMMiXayE8auDRZkFzx3toNF3sKhRJLdBK72vJjpi13VHtQzcyPcZM9ZmS6aYQxs5ZCT",
  "key17": "4bxNomWBSLYFQ2k5ZBt6NJtUuN8rDdy38ePmN9NfpF5BcnBL6PYvW3BcHvoi56gk7hyo4BPkUs54rawbUs4cJ4am",
  "key18": "4PxmFoBu2iQc4u5XH66sK9uGHiKS2hMpVjjbhUdzsQuWi3hbHQiJggS2UCTWgJVTT1Y9Khd7YpvDGo4JGWEEbqLh",
  "key19": "5K9i26rRH9eo9HCoqysa5aFk22x5dXRYP4c5UVKpmUNpd9w1FPQESKpjqCkLPEH4PLGuG6xQLNFnf1SSgaHjFhjc",
  "key20": "4NBkNkQZKCdkhLqnY2TDdSD1o1LNNJmUwcRbtHsJpuNNXfGYPwtJUi2ekaQgUUMG2vCKYW5YjfJAd6ScuUdQKTPL",
  "key21": "5kjXtrGRrbnfM2Wuo31Bwg6mYyx7MXPSgbXAGXKhKebWxmYZuTm5b2oxoSvFtdkFmbkHp4zWTqnjRoSXNg8q3BoK",
  "key22": "5cQ8RiHqjTRhZts9raXsaPAVZktAXYLPiKTJAKZoFE8TN3NsiqvEGA6xW1aRYnnVr2CcoUpdZov5ia19LTjYK2yG",
  "key23": "3SwUEkVffWtZDG6mu96WGE5hjT9pWZhjgzyy7v84jdUg9K2CHQ8aaWfW9LssfyUdte2JtjGRLAJsc4nV6ZY4b7ib",
  "key24": "Vxa7mayqHBYWsZcgY6r2PJxo8VfoPUaEJieJK77BJfLmpDWLbjCK5vdM5qvn4dxA2xbsXNTqVxds2irS7CZu9jE",
  "key25": "5MFuVP1hsnM9KkGUxrPbCVptSsVGVXBF2yxevXe4Q31DkXPqMQf1mcfrq4q4KTYJ2f3SRCBAayqPnKmM3HuBeA7g",
  "key26": "3LGHSUhEerGjFmCLPeJbggHdTB1qPEFpFVPbvtLJjDn6ZAhgiXGEmY47vKz6AEm8Xw1tbvoQ7bq9kRNVPVsJgDBQ",
  "key27": "JSUw97PsTqTUh56a8abkujAo4haJKsFYtUuQXXGk7guxHTXiQ3ycEzETYNrHD8D3BafaTRHkRS87ZtZPfmuu8JX",
  "key28": "xWK1Y1nzVEvSXF4gFnmKRrdZ5SbBYYd9Cx8fY13iuQ1YkCRRDb9gdUYdYzJh2df4cEKrQZX3DQ7kzhxMjcZ2JJS"
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
