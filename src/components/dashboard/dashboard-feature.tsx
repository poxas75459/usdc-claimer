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
    "5o4tbviuEmP7U1w2jRzVtMySbnyb5zgcck7WeRuXLeQigXpGBxVGk74CoC63Nfdgqz9pEsFNiddAmkbtZQSa86QQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ro7rTCK2UDcRxtR59A9vmsMZKcMgLsNCs7SVdp9SiUe9zKfsKBip6ey4TxcbEP8FRWgAgWY4AqQSZJ9W7mS3afj",
  "key1": "5K9UgKNeTejwTnPsUkNuN9CRZtT5REc7HQex7TwJ8mkPbgSNN7MMKHNE1Qa591QBNsbeL3GUCKdBq1gm5UJ3V78B",
  "key2": "3XJvxQ7Ub7qXNVjtSn4iEeB7BgCfrMxTcxuLoPsxs79rtRPDB9ZZG1Hpg6jMCSpJCtNAYE86eWgtaXdRADLh9MD6",
  "key3": "588thvNhChZoAJQExa9YM8B5kuw7zzYESL8tZosKYdkmGvqNRx886JgmDf8cSmtWdo3BpFcrCgqcmZvFBfzoYzZS",
  "key4": "3KWcd7Bz6DRBrFrogjrdjVM5NazJLHYauoJSbderc8pya5jLPHwi3K2t629RrqEWMdTf9Mnd3wAkH4qYZ2yWXY2r",
  "key5": "4G8FTLya7gnnL93qobVMBGkNpRUe8xkXcQshJeAp96HsR6SCNbpKTKNPw51SYdM6oNwcutH7V6z7Y4KQ99pMXx7w",
  "key6": "4oqaFxjQNMkjkZusxRVuu5aSgUFKZJDBz3iS4wgT5kiFAh7hzcpSTSPjrA1tZKvN3QPKzycqby24vUsggyCttUWp",
  "key7": "3AkA4San9b7o8zUBAGKEtufkDDxk9KSGcqJwezYCB9RU78De2rgNRuvaP8zXCTwMteCmo9Ebb2hftnTF9mUwUrSD",
  "key8": "p2M2HbWBoPausrXMRSf52eB5DjKwH8joQnacZzQnMJQyV5zBVWgroKwbM9QEdH8ChFjJhfDPnEtbVPUeCdivzQ4",
  "key9": "2ApsLg9obLtTCQsZYXfx2erybDnU6CouLjMonZMRzePP3tv3y4ErgLqqmxP7yphtUCcPRbEG2EgXYWhbtXuzj8xH",
  "key10": "4a46vU8iEgYJZMomnnTPz9oHcsCnq6pPc2k9p21MVFYBFNEmmkFozjoe5i3VWsgWGp86gBegRT9vxRtxbtcAKthw",
  "key11": "ihEGwV4PErXDrJxzDF34gpqnQ1rDzkgx42c7eMEn1EL9JsneLtKChqC8TgKMyHV3rBXhfzeLBsL6kJ8LMJmbCNw",
  "key12": "CbhNbWcAmmUaHuuNWjr8gHDUUst2QPdhaYiR9cnJ3ekaBQnkdBmdec3Kk4qXxecnDZARRuPhqaub9Yxj8LP78At",
  "key13": "4vFTMbmBXPWB5wUCnifzctgwxTTwH781pkx1TnwZ8eWgR2Djv3VCkzrmuUmyp85cDKbkvEUMJgQoaa26uTRYMzvK",
  "key14": "SdnFMX2gpx94mhRQErWoSJFtJoSzf8D4Nm5z4BdDcYnXCqkq9tGD7wdtbeMtGKwPvq8JPbYiDZUssoturEvan7n",
  "key15": "4xoQ8uDCBWTwJzMXX46CvW9toGSEWv1kZ1xyjEG8AjTBHSuUzYwh2doZAYaQNFtMyrQJjRwhdak56QivT33LmHjh",
  "key16": "4fVCkAsAfREBZ2vQ9ukmGSfqyCYgcvTDNuTCaX51TxV5F4Afg13NuN7wCZbACxKX6sihuWH8pRCnkXbjbt3bES1C",
  "key17": "4a4KRwPKnxuYHv9oH99mUYpPJHCtxRtfZ9xxVtR9Wq8dQTf8AVvLc8gWaxo3VfRE6N7J1fW3UFoywDgeEYfiNfMC",
  "key18": "5M271vJNs6o8uwH8GPy6wnKhaSzfW6AqN3LkA8unzggHtq744XnaiQqkvv8cJHJbtuq9EmyRmVyack2qiQNZEGTz",
  "key19": "4rRvk3XKKJvNE592twJVXLiHvgHAw88z3mAnPEkUoUNV4NE34zcJNpkSWvz2QGDvZMpv7v9kD425XxwmMgbZvib7",
  "key20": "5g8f8KGa1QpiTdPZk2vSufsT8hBcYXvk5DfFh1zKrXooFqk4aCuptBE1YUJ76rbHwuZAkqHZxBY3aLaaiVJp62Bj",
  "key21": "3nv4usFQkaLxuZ9fDCpx4kmx56JyfNtqRp2KFgmsd6VDAuuGR96B62seno5CKF88VdRRqZWrARQYWLuwUEAgs9k2",
  "key22": "5qY6JiKwNaGuNf5WfjpCkG2gy81afYYV2cbjtFssVbLqW26tQZtFLaFjzH6qaCkkroGRqMkqLwMJtUJQ9pUqKsMd",
  "key23": "5bizDSVa175zHypJ8a8HCghn8jJqeoiqJ9t8HJfAfD2nREjByWd9BKkTJcrzeJrbQ2o1F6NHGfQLDSfd3CbeWKar",
  "key24": "38n4xTwExJacdNyz4GKAFcDaWTZyEohHu9984PHwBa3sUqWNocHa5GmLCtn3UWyELuGsZqeGUVgLCPXHwWLTeJf3",
  "key25": "52wcry1obqUxqAu6VPc5Jhj3eHMB6TcapuQ3xSADeMoW86CqrpnVVirKJeRskbtvzp9FFbiercUjm4yUD7MZGgoe",
  "key26": "63xB4h3fjGR73dY2poi9nTqTCrs3fVZoAGq72H68aFGgNKf4HXB412AF5cscS6HJNXvD6GzqaCEgNkbdFutMzmfd",
  "key27": "4mzdQ6s5Lbbxx4i139S61ThRy2MSq72ULyDfp4ZKLTY3y45hb6CCpujvH4Bi6RPyn7hWjCj4e22ntd1JhS4KKz3x",
  "key28": "2yLAq1t2o2VgdG8WKFVgNNajtRcaoBrqpZc4SFeTc7dTNr6Fqa97iCoTnnT1fQvRce3SRJqRKRdipkCs9dDcVEPA",
  "key29": "47JJkefYnzMt55vkFht65Yww6FsXsiGqYx9c7BzPpwLGDMg2m61Geyz59RiyqfDewA2x3CgzSehnh638yhQjr4SW",
  "key30": "5PRTtd8PLskwMXqrW9FGpX1k4y9yYzPU5ATd4v4sRfutZ69AXEAUetwdUQTtYKpnhViiiJm924xruXMdffbxG5Sg",
  "key31": "2CBF5PhXhwiHiXs4BqEdUy4T8mYf4zSd8yDqe3eaZn2EEiGT4v75EiB1qVtjHndARNgZVFZFjmQy3baNSmTPBAA9",
  "key32": "3c76S3mFo91jgisoZAnQC7j8NcNhzFijJgYDEjTRPAujYhfQp7GZTZUapaVG8zuFcDki3revdQRPbhPkejLUhRVu",
  "key33": "5CWo61inkuwpxiLeWYm8rQ49rYYWtR1r6aTa8uPXkjUcQA4eLMHj8Pwkf66nTtER2CgAhU6VhAPGvHnxHLBEX2nk",
  "key34": "3sg8bRE5LrTaWf3dDopPx6RzkXiS8s7SH5Kf5AVVj3uMXhScMSQWnzfsmN18kbXrFz9pyBgirSAnVHJP6dkVLfh3"
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
