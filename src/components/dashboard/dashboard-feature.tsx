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
    "419kmFTCjv3SKMXsUJ1kjcf9Ho8oJhNCXg6Br1nRB9cKFF8nFRSSnMGp2otWqyqcihT8PX5ETdyPZTXaeqNgZhYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7QS4DChAp1L1XrsrMVYUA1d97ZuQjnqLx7oePv8HdN8fhpusuG2c3MhVQqvqm8PL7ZLLeQ9Guj7dCKnRWMVxxb",
  "key1": "2fUPFuM9zwuyY3ZXKD3qnpnooe7HbEzYW7EJjkWX3ZKcz3sgH3jRd453uKpi2mAS4BouuzZegSJZonm7RAruLik6",
  "key2": "2R3CK3pQ6TptiUeYULjwokQYUYJ6sSJwNJfCtERnNvsRCyrpAhSrSP6WiS2UHpQpFG7s9icNXWd68MKiNvd7Tc4p",
  "key3": "f3V5dUhUuedmMsavdbwBN971YoxFYxAdE56EBvc4saEtDr6Ax3fVYNnYbrUVzwrgciq2DKmV5gF81yHGEzw724g",
  "key4": "2swmPdv1EzT7oYGtRF6z6uHLBuy8LZkDqBLyjZmTmPrz3ezLRhb8rtsvAid155hKnLFCT9zeLYJCKgnUfzwD7u7n",
  "key5": "3GJ3o3gqtFjWGDfa41cypv7n3fdrBcsuSska2bi5eMHGyNHQ6hGk7WmiU8ZCMBcvYggjohrhffqSLTruvJceL1qb",
  "key6": "61LF5cJgPjiNThV7MbhANtTrfifmCCQ4XUP5Dce5v7N1iEWejt21111oPwYwLSL72CQr1ScjHpAt6GDBR6qTzNxk",
  "key7": "4uMiQJ91NE441QeAyeDrWq3i8XTvjZ938xpSZsTgUE73vw6f1U27toXgisNkDFr5Jeg8K7NzuSJcQ4ZyrorS5eGg",
  "key8": "3sovfbjut5pgUY7yidNsWocNhUzpt2ofGXuVYbLL1vr9n24ZQU5KmBVDASciu4yr6oFzWU2vZZ4tcYTtbie2eJZj",
  "key9": "2EZSS9GQp5ujvP7oN4NLTNd4N3AotbKBJMPt6rdjpyLVC7QRPfn7yQ3P12oWnPzcRAdiAaq1rJKwGo3Hrfg2qgUT",
  "key10": "3jUGyJKzpe8sdZmFm7jx8Vk6XMxkG7Cj2gcB7N9m2RTvBbVUUk1UBsYtXroS7VtWjph5aRUqMhcgwuaBzETiXaTQ",
  "key11": "52FmFMXKWKxj13Ee75TfrgTXpS122dr3qDRGe6swU6nuccXJ2jbskto4TZ3mnjBNiW8J2w1MM6bo9R5cd1jamy1z",
  "key12": "rqALNEHVayFy25Xkkn2PPR1X9htdVu2sAJuTYNE4xGZB9cP4ZknyjX3o89NS23yx8VDpseL7aGGcid9X7mNQh87",
  "key13": "3vJwridLkvj7MnDK7fqKHv3gwT82zUq5XUfDedxnNPSRvbQWs6PLKRDiruK4AsCz3gYX1Hn5WB8TcwfykstAenha",
  "key14": "ny5FeqNouHHg69TfgS2x2oDyvWrjdcBoVGtGoJA3cZVPjYwCC1t8cPQrvZAAxfNjiNfbxHzbfkBVFnA2hSNZSAd",
  "key15": "3jLG4kzmUGTU2QDjFgKjormaYRsS1aGyZx19gM4C52jcE3fcZ89G22AQ4Scuzj8FdY6eXeXVBNRioJXzXh5ibWBF",
  "key16": "3zvgYQy2SGJzNhQjATzKKftb1q6xKrRGEnu2xMBxJ77LnvuN3x3zQBbWgrW78sxpBLrzLAvM16tT5RtJXr6rmNtz",
  "key17": "3NaT97Eq6rWPS2FpAW7KMMhBg3X1YfxzEsg7GsC6oJtyEeCnk2urxhpn5mF5dC3GiQ7eZfbD1HjkSM5uhA5WEiqw",
  "key18": "3wjshvFsdqGYh6rphiXp6kE6FsnuP15XgsSxiBjN1tnL1Ys7DEGjFp9tSFJmBnSo1Q54bjFMUppuD78WPyRXYy7B",
  "key19": "41G44VztphR9wTQrSptSzCSus4y7UTRi5iHtg3oYgACcqL26fEoMgUxcNvNoRameVg7KmArfo6DzXDguqPKJkELD",
  "key20": "s3jQKRPfWADwCArTa51TUCofZ7Z5LK6U49YeNG4fyKbrEMbZJjKQVZ53cQr5TbjoGVTvH7pfR5or8LNcVtmreRg",
  "key21": "G6GcNbr9hQHzEspLGzYNkGmRtAPvufEMf8NehVBRUk4Nh5tqEpTt4f1CiPuJo4PQ1CHhFwnvJjCXitCMJcU3sLw",
  "key22": "4gRpLSDJYax58rPYiLoSE1SFcBo6tReQ7YFTXt41TNYCFgnHMPMyQaUN8N5z2rU7iDgLkSmX4CkH5LC5sFsTxHqW",
  "key23": "mUXJUB4QyD2aWHbpfZypZNFzo8XdSVwAapTXSWsh3AbXv9UhFxFdFGLnpqkteTrjsiiC5p8ns7u1e1vYjGR7gAc",
  "key24": "vY9QTYWYvy1xdUXZZBVWqvkrv8JB88JniA8EAY38rdepsS4eq5L97sy7ZAnJWTMgkC1pxEVLY2jwYF8KNfxHizA",
  "key25": "53oX4Q2c3U38qHgjWrLepLs4WvvP9f2uLHJrnDi6DTbcDjDdXifoTXtpkThpN9tyoWdQdYMBHcBKEFiKcDDqNE7p",
  "key26": "2hTuA5n5uVfdMjXBoCLnLAhk9CdXyjya24nxBJe4WStZDcN1DVJoXSdt8vi8MnbjjEZhTFre4ro6rHiH2bLctZVa",
  "key27": "4durGpLC5pro4QJZLJRFxKXTknTce9NQqwSd4qFwyjupZ98Lqi9RqcFhK1aXGiFrzKJJBdEiP3646j4fqMLQMnUu",
  "key28": "uWDZQCDZAk7hB9AgUR2EgpbL7KpntfK14N5opEbiGuvvPjMHp3mGYZ6PsNbJrQUwirRZM7RJSG73TzBMGyVBfsF",
  "key29": "2riFXRHskTcFCTaiDih86AyX37kFCsTRWGswbGmJG9aKZLLsPov56VY5886WyUVXsTMia7boVg24i5d9BszKtygo",
  "key30": "57t78uSWwBpTyMPRdyDBjdsKagpgXkrQGQ2ptfqhtKVSyq82JhhBQZyTYmLB54bPgFTTVUoRSqCmhaZ4P2CHmqH3",
  "key31": "4ZsTbyxmFn4p59SLHR8aB85wJfnWF5hsMHTAZgaDud7uvCqufCJ3PeDCdEtJTTuGX6Yw4C6UkiNBSV8YVAjAgtVT",
  "key32": "2MPwugDqqE2oxbVzZXKGXUJwsXGk3ruwSkkNR1TwRwEpiXkhTd74Lj1hSXuNXswLQogEMnR6K3WjdbJS7Cof41fh",
  "key33": "2r3CKvM1jb3Q9FdkbQrLVKLNrwxUYackXjHgwg2HQyB8csSghbqZcZ8HVgekkamzZMccag6dH3WQCHuvBD2Rciph",
  "key34": "2mp2rSqCAxvAzbtf8z8WQwBiK1S9RPc1TKfSX48FQotQRY4WPpA3GbSqmVg9SxquFDyhqB3NqdaMgpPwQTHsgrA",
  "key35": "Xu3EoFsfAtkLJL3qhqr5yASf3cmgiAjAkrjPBMaz7fU47rEBiq6ymtoh7M6n3fgC2Aq3xzHJbv3vzpCpEW6DcNh",
  "key36": "4VtMM2f9rfX8NYpNotBCjggGBwfexc9Wu2beZNGpozp2UWHHLKiBLDS68LbWJBi4EN6h3XQLWuFzxB77Uhipvz2Y",
  "key37": "5arWrcXAJG8kt3JPLdNQcdBkVyTVQCk4UhVN2Q2mABmRqrEjujYzQhh2y85Yb9Wzpa3YYKKKP8dJLCeX84v2c7jz",
  "key38": "2NqUMXCcygSneWYpKwfYCiiRrZ4CjRWAbvh3huNQArr33mAjuDVDCXBQh3bBvsMFHCk1VMWbSYn4F7DB3ESyN1ge",
  "key39": "4Rv8p8KLBnrM2PoKtb5mcFj4rahWJaGupLvnuzz34tCFHMsLQBqhnU2exAPHwfD6YBK1TzdZ458Etco1hh1cSHtu"
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
