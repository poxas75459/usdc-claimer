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
    "5HWFs5tTHC6RVoc1kj1byazfnGxz6ttnQbVHSXZ3qVP4xZg3nxpscmupVjuoKeEc2DjPmXnViR2SLUgYid3zkQuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WMXnZBQkWPh7oEeojPf9TMvXbtnjamWCC7M56aggQiuBhLPpL446f476Wcf8pys5gSsuzr11Rbfw2uq7XCLxiEb",
  "key1": "58sJC5voAKCZWNcKWnKdpQoaLbHBhdx2uF5CNsHb4gWFtxPKNrmXGXPmEmcYrpN3mvKyFNWryVgBAbu46JTmjN1K",
  "key2": "2KRh5M8cor6WNgtZLYETY3totM7FmuzTDCD5WfE6bFnXbfJ7XkCfH3ZecAPBmoMRaBqWv1SHsxwiKevEZhSzfuJX",
  "key3": "4HK6vfH6LaX7uNFHsgw6PYoy2X4cYfwkH3zDDWoH829k7rewWUuGHkwVdJuJAgWDDU658NbnyZfqCh76KGwZct2E",
  "key4": "3KQw8WVZY8wgKD4Yvrm8a6f6GoU52XRtoDmUY5qfJW4BpbqEk6bwpvPf9BypgTWtwwdrNTSiAeTfRRjN77uHvep4",
  "key5": "5swt6mF2P5j3JFuKZtZBDd3FuuiXr2f6fxxnuRiVTbBUQZPQzbNd9XMuup3vmCuhHnPMjx5d4CAZnzyYJWCxUBaM",
  "key6": "2PxMFWyV5sDEuPvhr8MtyLho8gNmQagJChaf4FkspgfYKXwHKSPcLcC4JxUNesFLmWvYqLaJcP1wdJNxUKiSKyei",
  "key7": "3hcWSD2qyEt1mSsHakbatQFS9J3Uz9aYbZR41DEjaxPF83mm57QNraWPxNb67WijURzSgfn5KCnZQZYkcenRS2jR",
  "key8": "56fjRUYiGp5QA3pa5wcmyfKwGKKukEYeKwUXbEdehhtRby6mWWMDTqWtgJbuz54YSw2bpARRqjdf8jGkRAvVJxqn",
  "key9": "44gS6Hw8DsdXtZrxhJdgU6PYc1iMxMKzrq8VfpQowoxaoUHcAVkR7K7djCxAUsoYKZ2rqSFQd57M7fqBWkKuctBR",
  "key10": "4FWZPVZgomvohL3bit135YVB3iyzpKtMhhoxUmiTXxsVvQifxenmSNma8sLcSuH2XRkEW4XSotsZggCg8nKFkrhJ",
  "key11": "2ovJPCAgHmPrr4zwQYjVU4mjkEvL9UWqNBgkCEtmRPHBju8b8gFJ6zL2RBya3jZPu7i7Li8kexzVmFqVUv8Kcs9K",
  "key12": "3PFeZRR2pCXXU8D4jueuqTDvwWv467P6cTVKcQjsUHForRzZqAwkK7QKdAqqSYyyB65VaRzaQJXxCn3cT4MQE8Mx",
  "key13": "4uPvxC444PPj7wbVeZ9HUoPbZgpn8Dxh3L92abay1EqsP3VtkemK6gaRsyZLpZ28VCW9jyYbJ7P42p8ee9A9zNNC",
  "key14": "3NDj1KyZNvoBvcjNLsCa4yVngGBTfxhkuM1BLvf1qdH6Pgax2ddvnXhpb22zwUhr4k9QNJGixd1L9kZbFBm6QFfb",
  "key15": "2yAA5BubFY5iHkJq8ZuobadW9uRqHTcZDr8YSuWtLkHX6ofYN4efyPUZ53hGkkEtGG1fsD72bLeqMmLf3QsfA99u",
  "key16": "5RGVTGyuBizDY8mLNrUeCHdkskqmSaMyw9LVGKeUXVffBgWio27oX8UueprksQB15uXCok1KusfvqnBqYtHpmzCR",
  "key17": "45HWRd3K9fay5HJumbFwTKMnZ8kzPz6qvSk5m7LJFtnpnBKUDxDwXdHpTg176gTX6WKXMLktv8xwsE2mNnAMvNAR",
  "key18": "QGjgffopA17MGntcqpXPRY1xpgHZRT3H8D6cxDRBQDFnYwWgypeXh32XmLjFiN8YpiCNc2MbiQyTihS34ZSjoPa",
  "key19": "2G2vCc33ifDSFm7ZGkrSZHCGC6rkaPKzof1RsuBvXQk7n5YXbSvYFuftP6rnxfRmnGvPuC8VSkKjw5DcMmXrSQbG",
  "key20": "5FcYBkTvHbbxDfjgBrmC6Uw5XjU3Esh73d4cw8KbwzpoeAyYG9JKmnwRpikK69MHQQ83rQHVdxm8ukubfnnrDzvr",
  "key21": "23dpbJWaP2ZRcMKHaYiwVznaGTgEno49TvmU2mQyEBGALP1niNf8pMmNvHAgX1y5YWesWc4bBMCT7LA2Krinduhq",
  "key22": "3XNNuB6RvdoJsZyGianEUDwRQFAutLSss3G15azuV2VEygbfDWyZFx1za1baF1ZRCeDjmgVapaP25qjJ4tAUgCXo",
  "key23": "3azibUha66Br7Tmt21rLwPBMndf417h6vHdYQMWEdF8rzDUHJvp7urbAdd7kSVXHfLGbgLobDDt4GaWqQRSgQtnk",
  "key24": "DEH62m8jCsSu6ksSxdhwJ2KcHLzTdjM2TjdiV8xrJ9rw8tujktnHKmm5dQiHgJcAjUPbRP11VkrnzaGQrgX9wx1",
  "key25": "4rm918oMhgLwmoengGCuna3z3M9R966XzSbcaXR1BwDYaBefQBditvnnUXoCEwNVAwsW5jwwqXKBrrEsX5PAJU6w",
  "key26": "XA1ayPpWjeeskzimZLBbg8gdpTYU2kt3icFfUyVWWQPNDbmkBi6jiVecoJPbH8LdytQCZyfeQqnDsRywBLPFRy6",
  "key27": "4M31bu3RgxTqcnt97pLqFQmyqfYBSnoGquzaca59qqfFkXp25GjFhJyFu1LkhXUkkGrKPu5mzxKK9XhPpc2zxdWH",
  "key28": "21m1E8JuTMZHicLPuqQU6qnpRyaZTzyeZ6pfxGuYsJMhXAStCz5gq4CMtR7HuNxRd3pikPxNBZW3224JCvhokvHx",
  "key29": "3d8YFkAfWiZCRWDYm4fjJrXSw2dNNwaadNV9V3hDqF6kuRx4KFyVWWHzhQirs5deF38EjBq8wC6kruBdLpe2n8kA",
  "key30": "Y7ezBXUzNngzq98E62zwJzAT7cVxRSYrRtZBk4sN6turaJzzVud81qA7mYoLcorzg8oKvPmZqQ15q6aWuoW55Gh",
  "key31": "REAhTrU9EanqHxM39PX1QiCWSpcAsYJ8zCqbe33C2KectDP2jYEmxej5kC5stny44nHnTc92RQBFFB61PWB58uN",
  "key32": "67qx8WHfRFbDk98Ts1w6Tqxw6FZ9YNbPoxVQMk3z6rqBoTY3NvMwgmuXsRvKnugAYKpo2gEKTY16nQcDyBVHnoM7",
  "key33": "3wbDEdbKpZsTq5bz5xxzdLznuePBnmNd45tCypJyqyskYSVyGjPQDKt3Sjqh4YHwBi3AacoDStHBK5F1FVVzXczb",
  "key34": "4jq771YRaRjZbmxNn4PB5nSv45DHRAthB1TKmuXnR2a4YeTRN4eum7YTo94gFV46RahLgscGxswL8VhyV3trFL1a",
  "key35": "5kkaMn5BXE4HsSFRcnAa4iBhMMZre2C9XVYaRfshA3Za6Y5JWKadFfkqNFniR1FwWYALvbKdVN9PpocqcHtk1bXd",
  "key36": "5fnhzmoUhCk7bHpZMw2eycYdVxxZjUUkKaQZGNi5WDtfWWNUdtBBKur6Y2vShTHtRoWv6M29jUrdG5r9wKzqYArB",
  "key37": "5PjLijwaohHRMUvPBsTGCKKsU6Her4QdH6pEcHP6pEhfm4RsR7ks73BPN3dLJbC12JTNoXFLjNSLLj9ms1zffyDA",
  "key38": "2eQiQjP2X47yD6RTeYXN2BQbznaNeX9FCpAAm68rw1F4HpxDsW4SMmYjG3ZoHSsKiq2h3QcrJKKyoDHVzGRTMoDf",
  "key39": "2GdGTt8gppDyM5aQsNxbu6Khbr5mEaUFodTw9M6hEyhaDWbHNA7d6jfuek9z8w9RHh5yap46ao9UwShparwXDQk7",
  "key40": "3dWrNshNcmgTjLPprhDZwxtph9zhUMCRVuTpcrtraCWfsVpGcxKww4Tv9LpVSnTG2Gs2CgmNhYzdk3iBuPs3TXve",
  "key41": "2mgfMtg3d6mA83oBL4SYM3AYYFU553E1gypmGesVaELCrggzD54iqvD2TUqRaAjM9SDhME2dkqp3ZSntHf6R4EjN",
  "key42": "676GohbWydoyWnTuBMPpjsUbsjFzyskj1dwGTKu4Q7aHMmPFmUGfoFm7TzuicYxK1WKHjFbwVBNx1FVsvRkR7gm5",
  "key43": "4fdSx7BumVNAiWDamJZRVTqzU3zSmXwS7cFgu6yBAmXvjfV3CMVUYujvWWWH5yTjemvRNk6GJ45qC9gNQHzgzUnG",
  "key44": "27MMTfY7EvnSuLR7BZi4vUM1oZWLt45Lr2qJgp7qwMcRp8GS6ePKzEQ6zBrPtdSk6DWV5vU8PvNW7JXieEbUmbr2",
  "key45": "494MrzLeCswhjyCnwEbv6WnjDVMmoMGc7MgXxCGu7GPf4LjVewo2Yza3XH3okPAvWJQUVMCNusNi4VhhwUA59nKA",
  "key46": "3PNfdekoPJgM8PVBasLmT3wLtFASq1ZmACa89VnoHrhqRN4kBxLC6i819dFvR9obW4rboBzEkWrWCGJfxyiF9WLH",
  "key47": "4uGfFLotttj9uXL8ZC4U6uLbKUyRRk9JyoVnzVnbLwbemNQrkbjqKctnHhxNKeoNM323cNu8K4YADumDEvBvoNT2"
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
