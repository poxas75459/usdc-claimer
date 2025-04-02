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
    "qRb5QKNjUDH9AYuKXWYFXU7zm3jNTFzW4KLBouR5phauxnb2pRCZ23e1nuXYDr2Z5ycfy5bFqGnAzgajJQB3YTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3savb58Tg8KVF4HDvPxcM9aPhcGhTBGF2xK1ivN8AzcRm5NHR8RM7RcpfhG9PN1BLsRkibguXHAeXzQp7kJAzrTi",
  "key1": "5t9m6uoQ2AcVYy6Y8L6ZS4VvdgmrEvMktreu2affVnEfZPunu3UBPMisEYqRUfZ6jt17DNetfKCuvsCxuLrxdUoC",
  "key2": "4jPcky4WbZnbzGrtfXFKitEvCf4ysUY3Uk4dxzxXrweeJywc3cWDTth4nPRMVPXsAMza2mSDNXfUmaX1GCyookjq",
  "key3": "5e1EsA5CoQn4ARnmqdkE8iKk82wfpYj7RHHatU3oQnNp4oYQgpQRn5qnjHYdBtzJoNcMP1XobwYsgB94eHra7jZR",
  "key4": "36APZzjUNsTQUaY8nMH44wyFFNfLLLkJegGwo8C1paZ9rzma4FWRojkSFeuomiN2UynfrjhDGE9eVyLkMsbNooKb",
  "key5": "4mxBhdMvRLaHz2erctDuy1tRzQEUsP7xz2tTipSyutNM75Sko34J6C7T52HDPMMX54JRsSKSw8WSVfxBngHmhSDW",
  "key6": "5AdW9i9NfVc2eQXXio4FJFmTqh1HK3UY7TcWoJF54GyN5SNXMBbNXtmGDE1rRjSXrjKMkXD2xjSh5NZjDE3pZwUK",
  "key7": "3y6JTvEnMTyLY8f8p4nydhpLY7E6zkjaWkJN4d2jZ1Mtt88R8x1cr2HbZEHpXKksUkR9HjFSVK1jdvCe6AStoXYM",
  "key8": "3T2uWkmVwXCx8P7hGL72YAatoS6iBcgxXeSfR1frwbZUvaQDSKF66wBjA8TPZLruHXn21NNSkzJH6Q6xu87G2A5g",
  "key9": "sJ5VgVUojpeqPCDM1QmyiRPNunvB7F91mveQF58KzjA7Au4H1aP8dxGd3zxeBH2KduLQ5dgoipKDzfPFw3wwBu3",
  "key10": "51iW3ytNh5zW8UQzvC6aCUxmgDN2bHgVR4o1SsefLzVVPr4m4ihP63VG8GFob4z57jU1wzMVenreRrEdq2sMKm1w",
  "key11": "3oEjwKrMDGnQ4Nf6APXk9utxbHdVYzDLsNXyE3H8nMCG5wpEzXatKuUZhXvaLUmKQnXwQqEBSVQyzdN1ZKWXrPCg",
  "key12": "2yABdZEz1BUWGcVhg5WvFcPjNQsdeAY4Wg9uHCCmZ9fHn586jPoKStC4uECPywo7wGNQvDQZ8c5ZQCB31qAuvXsz",
  "key13": "4KJRzBggUbxNS4KNQg8Ys2DBDxL7UsXrSETDCT1rYMja4XYN1bZUUZs67wt6RcFrwPBUJiu21PtFP1ZbiDqKSY2z",
  "key14": "Mw5KjKECHx7H4VEsKvhtB7GXKUHRuAfPF6fRsiTrgWhMqinSKeH7XM3hfri16TGj28z9xw41GK1okQiEVh2wiYf",
  "key15": "w9YxxMW2omzJihyjhggUhht3ekv5M6RejoLNac33MP1jjwoaAUk8aHt4M8KiVXCn45PT42oUotY3pukRF2DKkyz",
  "key16": "R6UA7D6DSBa85Ji544PkGfGNt4pBSpTqGYP58tMohgJ9JxixjAxN3PvxywZUwrLf6NnMNs9pr4LGZSPixxJ6oEb",
  "key17": "3mA69dpZYxZ3z67PCNiz1H7efK6PUTFAW9jjfHGWHh3i71zZL92F8jA1f1zWveCyMwjRu24tPKfPyoP5YZJ5hnBT",
  "key18": "3aTcbuA6TrLCM71JqSdMijyZgFPZgAAB9REwzxeJU8KA8D4pG39CHTFRrmbmgnA9RoAMw9NPsxgiJszS52dyTsjz",
  "key19": "2r4hK3eMYDBEzrEdg24eDie1GVg3UoerzQRxg2cQ7ABraHtEEvrgPMDhJ8M2PK2qLDyhKFGjR7pqzZLL6361tC3u",
  "key20": "5w9YzpL2ucfHArA8XAuMkxPCLuHiYke58VQCMY8ja811PzhSRs5wzAGJY51a46u4B1n9sKTVBEKtuqgiLV5bTnzd",
  "key21": "dS8wsUaVXhhUC1vwGEUFQ14xFjJDnJrgU7rS7eHKWwZ8VEukewcnVtrSMuSpW6cYtcu6CdCXaioLUBqFVKE36AK",
  "key22": "4stxthsLUSggxDfgX1QkzvvdBcsa1fipgZ2PwEEM32pGT2iRGpmK4rzcUZW1LmHnfHJ5zi2nDcbNyJrbmdp13Npf",
  "key23": "28qvV13ErBr7oS7VCcz9LzTu7pdLZfetKzfuEYursL3xbQNzFb1eo7PnLmbZ5tvwTzDWYbRjQHNMdfw4r26KGUF9",
  "key24": "35qvhqjoAf54hedxYVJVc6DnvCnLCJrUvi3wHNJPeMrxzUypcwjUAYi7vXueMEm1CTPmN255DMwKFQLCXSfoGp4P",
  "key25": "4yaiafdoN2nyw1ox9VdUNZeuhSP16RARm7QRwR3qo5CLEhfa4QwrUdt3TUQKhNh3vDapfQ824GXESAP5r4WdFwQm",
  "key26": "3KjcKjehUmKgtRLats4tnt6YtgfqVoBQpnRxHbZuZ3TSXnJnux5a4DBbayEnPZgGwj8oXVQXX5L89WyzP9UXmm8U",
  "key27": "SHDVkUrKPCin6BJpM3RaFf9bhfWPNgE3RJLCozhWVa3PMfymGoxdEUYY7TNnCkFedsZc2NLNyrKW4oL5kVg4TiF",
  "key28": "4nSCaQH6KRKzMepycvujxTYB6Y5g1arGX9hcMKTX2KrLweXCFWy2Q89RJu4PYNtN7d6UKQHdiQNTTuWVUjJ2wicw",
  "key29": "2peW4eJrJbrm2NqmsVPGj9WikUJC9rsjic4ei42fryz4LJCh2ErGgZeo6UpVYvexcn5pE9ZdHf2sPJqdWiZKUJc6",
  "key30": "xdWF4NMAQh9wNYdZp5X7q41PkPKzSfvMyndbtkMf3BNAysFNn1NffpXybVo4WetDDis3vq4QXRSo4h52MJhHkjq",
  "key31": "54uY8Ysf6S5iiGGjJDpuv1xmDUbreS1bHKkt6dXt2S5WM3yotQ9Zo3wJq84G7jLz8YcZoZTgnP468HJtPaxyHepf",
  "key32": "2Hxdn5A2PNbCW9f9p9asyPWM1ybgfUnyYH8juhXJzEe8zqPXJ2ksFz1Ym6MEym8B1mFjVV3QKjvoV1aK8A4pxcmK",
  "key33": "5AgNFN79pZog5JQk19Xay77qoxhHLhVPfLw6ecJTvhz6XzxDm7jwoH2R2Q2UP8vvy15WUjrG7HXjT5rhgAKxwXYf",
  "key34": "2B8xZxhCfCM4JSKQAnPBi3VBt8RW3LEbyGbN5NoxNeasLTndEHRCigyx5A16y3HU7KAFyaHCG5Gx8yngPZrs8FoA",
  "key35": "4xmYjBNKhNPmAuXYP7KzJ5g1LWumo3DEykD36PnhwcZZwgzvur2Qfi5X42KUwSjDf5Qkeu3u88Kh4fYSzS3AMzQw",
  "key36": "5Wz5u5jPp2ypBgSeitqj7Mxzwig9yXAfnXWLnrwB3ytcEqCiaVSks2rpFnifHYbcA7Ksp3iRnoXPBfsghNLAiJqk",
  "key37": "2oHQei26hp1DorAYMXVqZkJKCP8kqZCnE1MbniaR13w4BMA2BVJpStSsCixFpCP7dgqQh3sfCmmUcWvr5ugAiKPN",
  "key38": "2tkqkE12r1KdNauD2DA4KfJNpKpy8LeSvqaXGAtuLPmLV6icMq9AEs46XgTXyEJCy2fPeZ64otwrZYJxEx2Rn95k",
  "key39": "4VG9ygfhqJVoRTUBDYk9j3Quj7zoconjxQfhUDQDPxkKSyn2SdYds7VFbysbTCfF2CpL7GiLsomDC1raK3WSi66c",
  "key40": "4PYXcf92viZEE4BSMC76oRx3ASssvuAaZ1nRf4M7VreQrcwazAx1d3z3sJpksAFrwYsF46Ns2vaEZnjGd3BhkUaf",
  "key41": "3sheyZCTjBcW5cvtKD6YbAsbD1WFAmGd3dP6evujAdag8AkvBWmFRMsrrgJd29pYHr8LqBETtaptXtTYA5Jxfz7H",
  "key42": "63mKC8xEu8LWHrtkVvK6Jee5hUGBjfo1ctHa7fSXzvSKxijko6PyFXkGJXtiirPW4XsogmBQ8WPw4hhsP3WKmaJf"
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
