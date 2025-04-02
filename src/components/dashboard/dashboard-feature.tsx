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
    "4qJCoZhYAoWvYbogQ5bm9jbcP2FLS2d2AuoLZb4yZfYD2Qhv4EgvGy6eDKqM5w8rLh3nDf5nywqKWkGq2b7cy4J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjUp6jfNq3n5omEAupc3Z4rStXXJk3bo2XTCVG8A2xVDYFVBD5kqxCgFo7oQEQS3vfShudtArYmCy3rUNsE14iC",
  "key1": "4epv9wtK26wxK6pBKGNK3hvQqKz7XEkFSP2JRQPrwRis8t3eXoGy1cRi35iVo3bMNThEoVfbTGA6XZHNwsNxbQh3",
  "key2": "2GtGmJ34pXMSM71ZnN5gF5PhoAx9e5owq9sryEvQLkXvKECABkoBihHHu7Po6XRdPvHU1PoNAFfpZmVxqUamAFwq",
  "key3": "3ZWZaycxQpuZVB7K3dgCqMLZPdSB2LDRtNURNoP7tsw9aX1eW8e8VQbRsihvmXESojTHNWyU1GVZVY5uFafbdioM",
  "key4": "2boMn6378x6ekAB2c4UJAKrqopmBc6x1q2gUJQPzBNKYMQqhKPL3td8zx6XrhBzx9yQZAsmx2ZmSnJz9G1b8fxtd",
  "key5": "27jfoBArCnhp4QVKPop8J2UuZN6TCWjKXWLoVak8SWECoPorSsUikUhUcKMB87CZXp8ehtULKAvoohWBoyGdRTqq",
  "key6": "2swrEbt4wKb61ghrzqNmsDsuGRfV1inkXZo9JSSPPPpJ5VsHLqwtexCcPCE2vs7oMjUHiKQ8dwT8nsT8Gg2KJrcC",
  "key7": "2DoFU6ebxRFzjUAKnLMW3ArKSzy2BAuR1G5TQLEFaSZ1ndEmGAuhVxWWnSxyF85bvNw5Q6bJipMuGfCcAQtuouP",
  "key8": "3FPrqA59WVFWgaQkgpUFA6QrBsozz6pCbHzEvPSFF1tWk5spGCrHyBkHdytiqSXr7iAmxwFqGtZjdREeydCGfo6U",
  "key9": "3fG43yYgSwkbgYiUccojR3mGegYU7RDPqsjXFdwTfawTikYYUgryo1uRY8LYV9otQnrZgQ7mqWtUzA6P6rDVqpPY",
  "key10": "3cLr5ZqNdFkPpCJUvZi2YPJRtZYZybQKsCS139Z2m1U6XsSSEswkWdp2hd6QWXszf15RAQXiajgq8SBv7J8L5fko",
  "key11": "2BdbpaTAAqLN1sWiGfbeinsUVbejJt5KXbtvDTXghLb17CxSgLczWJMNU8xwL3QZuE8C85ae1MySMELoA1NhEwhV",
  "key12": "8w914PMeU7UidPPmBSa4azsE9PWUVr9b2iPj1fTqPYes1wK5jP3dK2BhYH7ebubrfau5Jui2vKntvuF3bof3Pmv",
  "key13": "5Adf8Lnz3QqnrcKuBH6NjH2hwFvNjFRAqUQYUufmEqFSy1PBbJaMVzgnEx6awFhkc4eEuBxtEY7eUC9Du6VR4aHE",
  "key14": "4cFuiDd3uFLG2xbjDnR8Nz6E9TLUUEeTF1CGtJsQGE4XnJNgSar4k6hjXdArMBRCsAZZjbtkwBiZ92VvdkaeBEzK",
  "key15": "3qQPumtjMX688G3YX874JZUix4cpna5vgomSipxh2vsoXyahF1BsFu6jeLmAbxrQoG3Gv4cLaFmynrSLzLgN6j6n",
  "key16": "JDNysggNkaDNGpkbnMR5V1qFiFc94MM7P4WQptQQeGKay9hZEDFuBoYkFVoyanDJXZNyrABzfSS7taGSxjB1xr8",
  "key17": "28wB8EntPBmXhTg2oYsMNQ95U7UXXUZtKQLJC2NU9rMEzMUGFMMNgFi11i2jdCt5RGcZRWZmvmWVJ56RjFFcUZoL",
  "key18": "47KMVK6zUeVdPs3p9SarAtP4he4pdS9HFx9wAtyFi19tWWXAgcCNfJQ16GDM454CtgvCJp4RVEAEEHSNK7APZLYP",
  "key19": "4wq7t9Fe9HfsB7YmoyJZGJTrpFuXjaaWF3Zb1LwgHRQy9kcq5GTeeqxtvR6pS1o6KvPAsGkBmNcNfbUCujZCUQFV",
  "key20": "4zuSzqFHGuvXq1f5CaujADukzb5KKaTm1A25HxAub79Z4eZrNYyj57Gnz1PS9WZoEphUzDKFd48rKEoJdszwzvfD",
  "key21": "upfjD1mXtmAqiCV5zmWzkg66xbUBzTcoqh9hgvaTWnVVhukMC37dwjUgvauVBvf5TMib5HY5AZ8TMLXZnSeWm38",
  "key22": "RBSVvSpobBjjcxsNdyyfXEGeAu93BVxsjEu8QxGWcgoiGXzY8CZ631SjnccAVPGzTUUuerRygu13UVGYNaVQ4CY",
  "key23": "2ubweDEVV8pHyd6Pp5yPVkvivzuUhYRENeMLW8YrfHaJtkxmiC9e5X7m1FAf8YVSBZiEX15zsprwniDFz6isjnGk",
  "key24": "5R8PAwph2GAbzWXLANRfjZp8ZHbsznXjMqtwpft5tshdSWJMf37LBr9HTyoomumVLjgMLx1rJiufeMTfqR7AvbcP",
  "key25": "3YAJyqgQ1KdvqzwnjCWP5Dyb5M4ePr1922RYchWEEcKL1SjURrxSJHKCBFjLSBBLFziy41swjxXvYAecm221MSqF",
  "key26": "KcKmKSJD9A4PyJUTPGa6YK17uj3W5x2K3tchwEGbRtT4XAzC9oxxpJbXfeVdEaudEGcvF1zcxFWbpGMACiNjXDK",
  "key27": "2hbhGYLAyxW1wrPzHKnDMeb8rMSe2cqBeCCKNa6i74zKxMAEMRMjbfJVSyRnci9v9gXRk9dFRrLcpUnE35wPJrpU",
  "key28": "4DQksTrW8LA2rH8Xby1rwRHbZy1CaAPFQ8RUtdqNVer1n2tSrXXaJnCiCENRDo7HkQj1BG3yUyWfKkyRjjz47Tfz",
  "key29": "ich7Tn6QiWcKMvjixSUR9anubgW9qKqiHCdMWm2px5gwAKnhh5GBs2TiTripW7WhdVSasq7M5MQR3SBGJQSYBuT",
  "key30": "2FziRApN1guqKwDEnk7xapam1jtjbKuJjQjnwpNEYTW5vqAjatCE7QFZj8ysPMJKmtRBWNbGwwmMHV7xF7sawqeS",
  "key31": "3Bznn683obyrJFBw61jQfYFMaDkLh8wn8jLWTnBGajoGpqNiJjYsKfmsG98nZiLDe27FJDmvNbYUBkDMJV9kKsZP",
  "key32": "5uErcTaBH4E9AsX5GLMP8DXSu8CaRHYc9zA84UBiw5XXVcSF1sBbwqLNtBEA9EhMm1FTwaXpBproUwxMzjfjayXd",
  "key33": "3he25tLexqvBRnD6ScMtYDB9ZAZjAQi92mGnP4hSehDQvobj72AQwuGYNcS1Q9JMSC1Y4tTq43sCNsDwSnbmyLKB",
  "key34": "3hCbkK7QWQYUicppMZQABKwx7wFMBHsVkRoNQr5w1U58tnU8XY3cDE6KbCnQAdPhsAhZPwPj5FEvtwGLjesz26uJ",
  "key35": "2g6HC61ePyZJHmjvM9ERiCnSexJGhTrKqMurfpkRibxRptX7Xc2xGcgu5QEKLoaJCoQzuuTExjVZ3De2gUaTWuE8",
  "key36": "5jaS88cqU9gZQ1cHC28b1couw1VbEevcaGnjvxFQJbXN5a9afCGq3vYq5YK9qtEefboLhu5uyBSDkqpVez9pHHiy",
  "key37": "5LUpCT2RkuyXUxnDrNjkwyf3Ejkg5bczkVadKM2xDGYRRwSuU51YYNq2rwnBR9m2Nnt1K3EWm1jKXSAeaXFmS6fQ",
  "key38": "2SWoqaAWm6pymkikvv4ZuQhFK8bxDSLf1Jz8KT9a89GpKuHrSrs8ojBFvb6dXQg6qa5RKxxP2n71hhb6iiii35D",
  "key39": "5wWAvdu5KBLZ58CQFfEf9NcfR2AyQuf2HUwS18P55UrPpMPVCAapP6DLs2ixd6PZBr65vNsoVMduK15wo6fLGyn2",
  "key40": "4gnvSVcA3xHPCbhc7uJxnMWpnGBcEsdXsNQRAEPzmrio5ekipmshA1qsPSUf9zv5WPgVY9tAFwwdZoQ5Lp5tX9Zs"
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
