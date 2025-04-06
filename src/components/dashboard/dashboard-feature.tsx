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
    "52UzQxyQNMjBxsyu7cDuXgH1duws3D5QsmNpTNSuzPyLnbHqemGje57wBN9TWHZNojyxXbKAUMS645x4v9bLh7Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeNJ1BRjMESJzLx1XF7JkJV3wpiZ3mmmN2EpfJ9FJe4UQWEVy95p9wbv3wXr8fvhxDEQMTG7KS1oiFuNnAMJ8mN",
  "key1": "2nuRCkwXi7PJSWZDdNg6QoM3Nos5RawaCuWBhBKfbXLd8hDG3qEBLvwWH2zLFaaErYncUKxxabYuypAnzUbxQJui",
  "key2": "4NMNGnEKYNMtvfruxMzZRCwk5XkiyowuJ7iYcKfrChqa87bdwRWGLVY1redaskaM3ZpeBjvsuC5bnuubCbKL3BGU",
  "key3": "5eFuLeiyJ82oCbEbiaBL1Ch6P2w3Dxaw9PN6Ah9CWpZznB4v9DVwcMh3UajaqWfwxBe6THGawW2ZkPNuK4YkbFzD",
  "key4": "2vTrbVw8uYi4CLBNo1ntDYne6vqBCBmcaHuUrTfdiqLnTfXfiKH6WLxcjxpaCRJChB5cnAjH3KS2kf6FSJvkmh1m",
  "key5": "5GE9k58rUAdNSUsnpDm5z682P5bSnJPbzkQh7tMBT7Lgvb4CMtcmRqAfcrWzZ8XfzWY5e71RCwCWsyGZBibDdzYA",
  "key6": "5gvjbqD5DGkftaRmLHDd25Ha9Tvu8kbWFQqiv6XD1qQXwV4H1Kk1p7BYMJrBAwQNZEFqCPvdy8gvFT3CeBu9RHqC",
  "key7": "YeJRkMv2BsLvDf9nWwx35iTB2vmXq7UQKGU2YcpLxrJnYG3n34y7865oeCWNTwcVuj9EdM1Acz8nfPfxoxp36o5",
  "key8": "4smYwz4qidvn8voy5Ho5rodws8KHbLvLwPuAThj2weNCRCQeFTw13v59xeUniUVetFe9Dns1NRT5gsjqmuox2n9u",
  "key9": "2TeHiQ5wyayry8c5n5mpwA2iFdKwmtVbjiVJ3P7CbEzXNxbBBShPwaWQsikV9PYUmjjwH2dN3MQR59MNzhGnmjjK",
  "key10": "5HYWDDA3zRHTXTpddEzWJGG11HGxpj2a1FkhsADDAemtLPXFdZYidpbeyFhX6adUEbBghotmN2R2GT625NWFvHRN",
  "key11": "5aMTk2bJiu7jgEHHnvrxfVET5z3xoJmNvyLnyp2Gbq8hskPWueGXyHaPHRgvTPGpHdGwLUbjB9e16vN3RxHPoYUK",
  "key12": "3ssdhtTnj7YcQcSktP5tob1LFPp9zoyaDQ5FSGb6KttfhmkbsTQSSmyhP4qgeT1mP6noPuCetBo1QDpC5e8NBNJd",
  "key13": "4wDZni1BrKHbU9uujyhjyBjFjRWV9GXog9sHqn7qe1RMtwmrsXrstoZgYnQbmMtXprHrnEgpMumizCq2vL9WnsfQ",
  "key14": "4kTsh1oeyRh1aULqLuKVKJghBCD8XjdJ3kbnKZpvw5Qd4fkPG46PzHyKi9WJVcdJy8tjfZ3pN8SHJ6B7YAUBgctX",
  "key15": "4BgDAsetDp2yRWS7541GmiZURFcpvhW2uEmkg8nVE4Dm15QLpAYmqsKc3ruhBdPfQf76LkCdEHAGzF5Wz3R8Te1V",
  "key16": "3f9mudK1ysJ1XaPbx8mUZ8GWyMUBfGieh3E8SDtsmqZk16PzWqwJATRQ5VJFdRQtcshqjUdkr3op1yJjRrfxcbzC",
  "key17": "2kLZLYcoAgeeBbcEt4oj2ePnoUQYUphCjdTacZFBoBLxWRCuomiumKLBgi55eM7ysmLsbMViMVW5ZMXdPe7sAgGC",
  "key18": "3MfARpYtCqaZGBC3YfsBhfYVkLdoPRJgs2uh9RuQGutnewNCMncVat46PmJxgsKsZJgHz84CKxBqDiBd233jLWe7",
  "key19": "3ML3S3uH63x7nCyzDtAvggxmNjLnmKXVaREdCcjNR1KtbshCZtakx67o7NahGW5uhy26tvyrAeYg5Ph7Khi5QYVQ",
  "key20": "5WYR2eLmhihy6Z36Zq5ftEe3V1gPCFGix2CyJddNo6BwUuP1NWYCeGs9yLVNho2RXbguhgHZmtUnJhs6vTWxzz7s",
  "key21": "4yF6jRWwHKzyQtV9wB48tBcddFnCyjSXpCfA3QvzajBKt4BPrZndKtZNZPozBEbQDwYbg3Z3bYELmbgQYGYjH5br",
  "key22": "5hg1N4kCsjjSDb7mf42SxJNdGnBLmkuFAT6Qy16BrnkmA9iheKa1jdPoHxTSc9GYepPMVQvLZ1EP8z5t5D2vaoLZ",
  "key23": "28YF4raBLTcSvd7HpigGT13EJtpgT1XUCbvVeZaTe2ka1XfHtninPMLH6hRSmEQz6ByJue9w7RTmtjUZb4yMxg2w",
  "key24": "3zLwk9J5UkkKKcJNCtqJvNbmmWCmHHgac7hS8wzm2sNne9PWUMZNkYEsMYtMKDWzAFpWohnYcLcKbNaFf7fkYupi",
  "key25": "4ttR9X1kT5CHa9cdADpSEnjpYpSTqphJWrwPZrEwvg7gLhyvqVpT21kVskydjjkwuqffcx8YkifMKcxTm3SC4stR",
  "key26": "4SkYgWVcaEnppjUG6Dez8oG762VDyF5kZoSwTFJdygQU2E8wZjDb4No5RPVW13F2q38ZBsHbsC9BwAJD3JcBD4vA",
  "key27": "8ggiVsFKSJzDGo395QcxN938RGLbQHjTjByxRcgxhfQTibT9Xuh61AKyerPR7KrhPALBaknhkZsee9Da1U34D1p",
  "key28": "56RFqRb9Y7ke82K3E9AdQH9ptro54jkB48eoE4EDSKXzywdtRGVZxX23LWGbiE2zvJpgabKLmJ1adC3WdWQX4Zyn",
  "key29": "5YDtB8fVpEQmpH75qTsjYU2nvXYdhtA73eeZsxgW3bPsVicN7rBsE6kySEfcZh47SLskkzpnBLUwFXqLhf3yRn6K",
  "key30": "671NuRrcnuay416yPtd6yLNMgj8mK7rnBS8ukMLLUYRytHf7zaPFA5ykckJ3Y2pz25zHE3HFxuezM5C2LQMPuJ3o",
  "key31": "2U6xqMX6SZQRb3oAQoAhG7YXTSzyuWWSu9VduFGULBAKqHNqLWGdWfQC9MA7DBtSFCxjWwWcZPqMYETTNfyJus66",
  "key32": "CLoD4zwCVbKHN1Lh4t4seMVVVGjgYyQdgGoYUJeuDrfq3mzQU5dKAL7rvkU4wHseJ1XjVszg36bPPb6NwkJC6UK",
  "key33": "3PfS13ny3iuZ2FJydaAK2GaCgnezJiLAWfJBVyWBvCKbuvDedtTYtLUajX7yStkAjg2gapn7QjYdmxCubnRwhosF",
  "key34": "4EECN6FAKA7AvAg7GjSwLkWXD3PqwUUpygvD8kdQttQ3hynnUDtsgmZxBFzFdz8XsHDpu6qaERok15KAxiK1jzaq",
  "key35": "3B4H7zcbVGACKZwYYackoxceomW4NDWPN5gezvnBhdc93WZW1vmzw7S5uDfYBEm6VkJfnifoZwtdAx7tWiYAqMBt",
  "key36": "5y74Gik8kUaerkopbYdvUf1QxBAKypYYdTkZZfAFZ7oq4fWsRR4p8QRqBZin2g46uDmXzkvy5ggzjx99d1aXxzy1",
  "key37": "4od66GQ17CdQD555Mgk2iTSpYyzJUi4UouR62nSTLj8jzthtwjH5x9b9vvumvnKSNTr3uffQNk7fbrKi64DomEEg",
  "key38": "55Mqh2YvGVEDm7Z22Q4JX2zkzDYSpPf59E6j1wq1UvwmHmkniwpwjPkVtxiQs9wojoKbNh5tn9pNLTrawghfh8QJ",
  "key39": "5BC4bvkzBvGwecrhmX67up9mTzQGELXgwJXTvaVyDpsyzV1ySzkuWKeS5BG1SByqKxLRZoeWDuuCfzU1BsB7ek8H",
  "key40": "4vRspPBLdxpTJ57tWrnDmJAJbUD4Ttx68TH6WVtCdB8q5QKuxZVusK3ZVMwRs6fDa1Z1ZvVWiAqGkeRMdX2o7LW5",
  "key41": "3CBEx6WKRvnDvCUKgdJeFceFFKQNxzxWLdi1Db1cTt47zishkh48yADmNqcSSDMY83CQZHwHd8oi57wY2PUouFVP",
  "key42": "4X6jy3aQpyuFzMSGF55Xo3ZZxcAH1Cth5H8SZrRoAxjRe6zAbarTt9yeGcautVJjwD5yebQy8qtNfP4SGG4eZFg8",
  "key43": "4hnJDvZvTCv5aZByN41g5SEXky7w4U12eaQGvMjaaozraFX26pncAPEdjwbZa7P1yhQCmwnJvKQZwesYnwmYzYpm",
  "key44": "3NniAMmaGEzuTz5emiLtCXMK7KMZAQJHQ9RvmMToevwj5GG7zZCqZgV5ZG8i6fFPhtpwm7J3q36tfdxajWv4memR",
  "key45": "2duUYVQ6Af4AyyLuq7pU2RVTbpKhGVpEuMauQ5R5YQyXnJpPdDtaRjUWLXKGadn7nAUKqQFUzpJ5k97Pifo1kikA",
  "key46": "4LvwpXSKhER5zryQxbCYqCUbbGNm8Au7RsNMrinodaMqKbNAnwFhbXBqCRSKoZCJcywZDC5J2FuFLiAwtypqFuBj",
  "key47": "3aqRbxp1ZefTSou3iWFhLZjgmRbWgThvsQfXj2oUSFM8qsE2n2sRhAcUVdwe7cXbR9EABzHCRwQFkTkZaJY3fURU",
  "key48": "2bdWnW6rv6pGfGkUGiSFExNooDcriXQ1imJra3Pz77xbbTt5KQ8FYAfAgwBTPjJkmEksFJCABPrMANdGQbAoTPbi",
  "key49": "4d2BCRAfVzKVJgWzoyjXQvKJqhhvviNfnGaYTz9ufXAhdsdm9LueccCq9nvdS4kEzASiozhqekzVqLwD4RfPByqd"
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
