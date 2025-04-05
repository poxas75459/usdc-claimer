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
    "5vRjmU9CQvygzas43qr8Z89oTr2ZiXBfCB3WXaMrsPA7ysMHCkBd8RhciG6cxKURMD42PqeLLh1hKfbH2hxvasEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24X5g7cUFxztwuDWhT8gZqi14c9MnWewdpTdAM1Q18z1CEEzrSbB8GFkaVHMWURazpoBoJQDFUSrv2NEVzrQXevb",
  "key1": "3amyJtwmPWdStdowchSrPkNbiDQtPT3YopBgRpkNGDwp1vRG2o3fuH1TQ4TmnAcYF8vSx2m9JbHorD3eyhnDKgbW",
  "key2": "2XeaaXvCVc9zjahufB2TnUN6tMVox6scbES1A9p4LW2JwQQKPzkE2JTQZmJgjSsBte4LxFybhUC3AEKGPb2PoMh5",
  "key3": "2gmjrAgXTUr1pbaEKzFMAwC82fs5G4WgDwy5bmMUYSLbvjAns8BTRqdx6PXnj5W5MW8NoAUhvc7cfkqbdhCXn82U",
  "key4": "49ksM1CGTqLmUqMiNnzjhRsF72zBMGSUdYgPpvFZaHxgECgJmXUReu4f2hi87KdBoxpzxswg8n33pEWWuxec8A1y",
  "key5": "3mEByaje6iTTJN5Lf6hTHNiv2xm3fv2tbJZ8eRbYgWvFZNkcGqpcL5E3dZQ4rYSG1amnGVhCpPWrDxBAUJVBSAKt",
  "key6": "5cgpRcRXFYyZJvz87jxvf15Sm1EUT9K5zNfmwDvmengrPMwAvcaSLK5D66SJZRpxosjLT7s4Nxk3Xu3NUsL21a5Z",
  "key7": "f1QeN3Y2cyCv56A97FwKYLf3LTzrzkgYxLdjiVkUN8NccaQuzzdw7gX27ARDjjauRFgA5pakAwhR6ijPSQWrosT",
  "key8": "3h37XKyc6cxsbTJz1DsKL5JUjf6SFkVhVShRqK1tZAQLFMyScPWryv3F2aK6NP1nWw9ZjEP1JPCJxQs7YwgYhAK7",
  "key9": "5RTBUhQBn8EiHb7qj1Sda9AH2TcLTYv1A9s41ubgWtNUYeBnoMoyQKeBte9Tcau3LYEB5aQyKRX73ApcvdDP1skk",
  "key10": "5gaYFEX9xyuUiiLd3FCYbXRhqrChRzUagiuPi2VQiKAci4nnnKNebGqUupeUeWw3cAatVcZy2JFm8CeVxzhTy4w8",
  "key11": "s7xcGyU4nzaYhY9YTY8mtY8yfj4owaYWpGcdjkSCwDwCXcmCdaaaguGibwqMS1YaznUCq2EbturX882rQoj6sxP",
  "key12": "BcWzAjY7TuP1dryzCqMCw9XhHE1VVHLRATSPV9fBzUKb6uLkHbPFzddM8ntrbJqK7J9EdBV62WATT7sBqpgs7ee",
  "key13": "5SaEBJSkMeKuCyqM7ABRPzNLv7eux49eBnQB5oQ7jY9xdLk7Z8RbAEg93ohApWsvVUmRtRBTUr7su4rjK7xfY3jA",
  "key14": "54e4GwqJjEkKvj88EGw1Tt5XbhNc3G2VnhT2SDaA3wBfhpfaQ8rLe12oRT96tmzook1FPnhPC4rrqqDxnFe7pcmP",
  "key15": "4ZgsbhrW6Ham5uzEX6QS4StDtbMy9paovnyWakyVeh36MY3y6cjkZY4A5V7q2hybUuVe8mzGzVmc2ucrddbyrXBY",
  "key16": "5ZKJLD8U6EMPHumiKb4UnUMkuvQsfxzyLqcULqwjoK1dvdqwY8N4LB4Ggg7mhUaposin2exmianbqUZcNtdvgQaq",
  "key17": "3XpANXPZQxr32Er4sMPMBnucNFGy3QKdoiQ4XhFsLHQJHcbHA8FmnFnN9WrjDWgviVKGBxxJq9kGJ5Yf8jBh6Zag",
  "key18": "4rWbMmA4h7R738mJRg6fXfw5dxpJ6dTK2oMcLoXzHwnzHBQsm1CZG3iMqbPdQGfddk48SVxWRDVVHsjsxbB51Efq",
  "key19": "3NFCctT1vzMcQGPJgqD6TAB5NDVCuMGxt9rC3WaB6qULK4yxsko9cqtSZpGsXg4ZMPEHMDdVLcitjtbntSNLHiL",
  "key20": "28yR4cH9BXmeZwXRdeXYhxAQjtTvgyNy29Egx76oWuiZCmsWKA7ten97YQePdJV7MRZrs3Uuya1kK8eQQ1QXgj6p",
  "key21": "5BETqpcHg1LZTaDZADiaBJ7oVb4LXhUCjxhPScBTQARxXZtsaSVgLy2bB5mgd62s9kRqbGH8rNtHDkD6ZmhogYgo",
  "key22": "3sU9gGeL6RSPSop3q5KfBGniwkDhg5mbYJ9dXNxy166Tw6zPKaTaQMA6o6sNqDCp94CQFq61t87UH482235LmBQN",
  "key23": "5G2beAZKsnBDwTwizDnNUpbtiJYJgrqtRSHVL9iE3b2A1ayKGVHNyVjyhAK6donzCGcKSwrjWeJro7cb2Z3TD3Wk",
  "key24": "5v5f2xYwXUvoi8uaHCGjXZAuxBuUp5zzoW1MkmoUdU7ufksz7q9j9VY6hGXL97FYGb7ETP81L15cY1gbqHnvB4zq",
  "key25": "5CGuBTj4XkaPDViHgAWusao6ozJ3SRVhXwfp3LXE3EXBUvKFHnzR2hX7xAgL7njjMZe9X8SYzcrFJF4wBDg9jUDv",
  "key26": "65KqAQ5mM4KGmdJC2CWdXVu89KMjiRLcDunSL3UpG2a6qhQCyVhV4AvWCfWJd9MjrAWVC8rxwP9cxSZjj9qHZTxx",
  "key27": "3tsqMVWxP8v7G7uP9edi79WArpKsfJLtmBKsQnA259X34iVbVwe17MF7PxdAXkpjUyZ9XBCXrfTDAJafRtLhnUys",
  "key28": "4sVSTU5B43B2if1exCupYtC9SnjL4EtKHp4spveP9E62SfT4t4k5mAx74EaUDuR2au8x7uX2PwdxKep8ew11bfAS",
  "key29": "ogHQ4DXaHWebdrRxP7Tnwghw6osHPhz5mLU3oKsdA2jPTEu9FU94LRx22geDcXTmyLFffhnsmLKENcqYKZHQSsC",
  "key30": "2Dn8TwUVHbet2Gi68BA69LSe9QvLKAV4hYeP4EHT4N9tdbwuJwa4zjCG1bCYbFWgLYuQ4QXNGzAPpGFSCGrkaifT",
  "key31": "4ps1xx5BYpa66mqv9t7y8NgPuhn7smkCEqF2BSJvtY5mFhH1ccHW1FGBxsSZUUkL5dgFs2oNjX9Du9f52EdJnCXc",
  "key32": "4E5srmbryY3iw8PC6JoL8asDuwKgzUtXJEj7K8FiubsxvgJKHcVrNR7x3G5KmZDbQciBGNPzrSWSFhFshaQ9VxDk",
  "key33": "2LTDYVFbCwsThL9WXJoPNiQRo3HYM7PP4yPcx5Gp6uc6tpfCvN9mrTEQyAbqot9fWX9vNLxinspNPrQGbekW45xs",
  "key34": "2VQYwd87UkyKpKDiRTgiW7eRrGWj6FP6DsrAr6JbKiQftJ6FXhc2NATY9ePXE1xPHxtywd16WrTtNu9RV8csAGcx",
  "key35": "4Q98qMPHGxbQnd8fvNpzvZbeXpGPkjWn8TgYHk9UmLwse36upUHd43xFbMnwL4nBGeLaVQMznNX9p2qHvfMVprfV",
  "key36": "46CVcfFZcNyB44ywCpnKNCaz78P8qMjD3Mn46ryuKgxrS7eGBS8AFj8ApJo8ufswrXjeCdXKJUtFoBdxRnExZhPR",
  "key37": "49tQ6ER2UJueuoFzGHHYWLfxtdMjsQFC2QPTwZjHYfLjN9koKMyhropiA4VLwbHLNrfuZSAuSyhFM2hZDknWcDyW",
  "key38": "4BQcgVDo4PkTbsMThxYfb6dsfcpnj2b7aDHR7MGR66eU96D5TqEkSNrNMfSeyRXAawBeKtxFcVqqkJaVeaRuiEFR",
  "key39": "2BxCVVAb45jFCZBwnDfSWgG3dTwGHi9Y9B5E82eEGfq4FGL1TkRbGSQ2Bdww4WHQU9yPrRgS7KV8EXJD9GPu2J8W",
  "key40": "34oEygZqQSNS4oxDBZX2wPB9ZArjxw7iFydgABiKWydY2R1MKZnX8M6ANoW6tzzt6cjwL8CXCpBmBiEuDb8AQWk3",
  "key41": "4d5szhkFqF1sNxYKoYbzP7nay8Wk2RCWmxDpXBvfGhu7ZdYqqVZwXJgxqWiW9wArsnoArRV3iBfYCpp6kARAnfzN",
  "key42": "2aUdo4oJWxDVKyMfjki7L31PtQNLFVScwrMT2tYtSTrRbvNgJX3UUPQrHV9sLuMXraEso4jyFxiTmtaRVTzDeZDr",
  "key43": "4HZuMD3uTFUxhgAeaAP635Qwwj8Maq4pwQh1kgeJkeCEBtdB4ZuvKamsf4JvfmtYFaBrmwiMZ4igcJ8bB2oNDDbT",
  "key44": "TZcGvLdto9Fe3G6MxaGhM56B2LGmgKdYRGd5TS4iS1661rvRPqyKW7UADxGkNehMskgkWBaN79XEGcJ5qCnMqfK",
  "key45": "5hXzy7YgrGuGjwYTYJ3WhywfpPqM2zQs2Ru8Zk3M91T32JtiCY6HVwWkPjWnNay6w8yb88G4e7L2tLoXd16bK9ji"
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
