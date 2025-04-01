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
    "3EgC585kp79fu3CHu9gkppebFJBqmjdTsGKstjPN9ayW1B31jiv2d69mWYKmE26g19MJL6nPRpyx46L1Tw6T723v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N1D5NLbuobJfvG15TLmKqrU6R45bSvQKTEZZHGuNNi34bmexJfQW8FyqSKcrZZvP6fB7d8YxxPVb9Hwd2QcnkP6",
  "key1": "2i4SxU6Wv3sUvYp3D7kf96zsJvy6iCZ2nt8efbTWwe8rpcKYa2mFy2fgxAyux4k5S9RJpW3gK9Gy1D8P4Ld18wd8",
  "key2": "623QX8aGytEU2QfewksmGEDkJNQGy3r4XccckX1fNx7pQE4q9CWZYqNQZGqZqsjy3bMYZFxMJcgvMPCftnVhmAqq",
  "key3": "3hgG8g819QNAg9UzmPexfqHZp31z2CgggX3z77jBMYtWAKAaU5Er6omwzJPToGTnByQC99xqAZrV7ScXLHnzPpXn",
  "key4": "2KvymVGrJBDJ2hRvJ7dPgsreWBbgjLLUfZZYhcL6Yo1Dpvv1QwASmEBzURnwS3pULtb5jXXLGWfo45cztxj6Dw5c",
  "key5": "4mWP9xWZUStnGAzN1ErtEPX53W74df6ARNxfrH66HK88SqDjTzwzdBECDNeCepC98CDaGBA5E2kJna78gP8XuC1P",
  "key6": "2tumWV16ynzdLiLsXx2NA7s7xZCYQwMjdGvhgZvP5yJaNhEguj7yanHuLKtqw8z9gUEmKaXJDZYUQf7d3BtoYied",
  "key7": "281Xi9kQGy4yLAZcaoykcXM8Dh1pr94jqQcE1gk8FxChdENzXwBAN9ikDsVfSPAqYHin1KpUNGkMVoai6KzVSgQc",
  "key8": "4furCG9CW5DNbTBBCL85ynBs4fgLB2BLnTKA1b5soJnQrJ6EXmauke6yFrt4NBeux3KWhckxr88WoHAwCrPpvZsz",
  "key9": "UjGqT8mNRTzj1FGKVv3Y14qy4457yfAQ3ghFU7knucQsCaahf3Umu6TAFok2dLitzxbjYRXyXu1scbqtQnxMjRz",
  "key10": "4t5qU5Zoe156EQG8ZHyZ2LSV15HPJmkEbWpRWLuQ9Fq5caPPT6TZvKDN7QKNJsnC1seM23ceX8VM8h2YAiv6hDjH",
  "key11": "2DeysHkEkiNj729XZWXEPaHUUov4e8aeb6N8izks9c382HxGWyCYspkW6RqaFKr6BChQy9gZZF4uWXGdTqpdtbsJ",
  "key12": "3zZfriV4htbWCVLGsjRoS3KXakqsPLeFT2dMFphrBAAa3UmSxrA3JmLeteS85pP8Q4TL3t6tAR7zYzwvDTMa3DE6",
  "key13": "RHvBk6m1xtAcsE95M1Dc4v9PYFnJdpgmkKXo5zKiByN172kM6bcVpN8MxqoLYZTp5e3Xm5kNxaAxzFBCs7uxzXY",
  "key14": "3TBmkam8MbPSFpdPx5QqNMi6LHmnpVp1vgfNfS98tkFdHb4B4xCTrFSedb1jAJ3vKvmJLsghmmF26rYhzcdfuCFk",
  "key15": "xgt2XKphZrCv9TUsQk2tWidv3bpha8doCTNYE4TtZ1rGek7MubDxcSRW6VPEVJT7WKtsuCz4teY74zD5C8J3Csa",
  "key16": "2Md4G4AWBvdM3b2TD2n1Zrk4a3ZCYaPfWkXxhoBKNqdN54QcR7iDCBi5RZDsP7jobM4D5EdsRiKdupKoes4qagCn",
  "key17": "4k1CpjXsTVdXqE5NaqiBr6nSvhutcy1M14o4uVVtXJCSiLUFidDXJ1fS5N8CLjtickhXh852oANobw6z3MRp3FPG",
  "key18": "2jWLwLp4q1XfuBX7W4VrwYfs6vmULvD3ZZ4Z8sGFyPqLu7dn5Qj4WZMufcEqBz3XDNEkRkshYBasmQ8BhFdF7i82",
  "key19": "4YD8WeyqGwqBmQLw6v1itn817rsqra3uJvBWp9Y9GD23GXx98UHwo2kuYBG4Fhd8ixiK8SYUTNoHJDnjgTSGYpQR",
  "key20": "45QTJ1o6FS8MY8CqCPXp2dvxsSGPGWSGmbgSZsSdv9qDEJemVsB1h82R1w1QQ1LL98cni6FMGxTa6oaFKEHhJBVE",
  "key21": "2xFjE3mrUs9Ex1mfoby3husSG8HupSXEanKFR1teGGysX5bry3fFJxsTy85E9Lwa2tHCYgU4azYaBY7AsQYDoCLj",
  "key22": "3jB2MWdtAo4CNyuemG9EKyDSnBCXjtedd1jDHjaVLvwf932ch67Jkds5hUZCTzKezHCNNr4ZFj3nu3hW1XUPXFhs",
  "key23": "21pMjo8rkubRfe3gVh13bKEqiDtbRTQc6ihUDWxMmNJ77LXY7wF5Jxn4n4RPF1GMGJjTFgNp8C3WjtZ568B3c2MW",
  "key24": "3HLaGv72EyioPMLFCwHPYYK9MSzfAE8b4taratgMEnTKzieHe4MKGTo91BKwynMaYZm1ooaR6ev5Va4dd7L3tHWs",
  "key25": "4oCk2oGYxg5ouvrbmjpHThnsqP7ag53H43QyZZKdopfbP2njncxW3d8P1WH8X5gkfqugh3UUQmuv9E1JFBr916Uo",
  "key26": "xooqY2VUUzcKJFJRt9zHJY7ov2rt1J2AK3fSppPd5ennspNt6bmDdxjwzV48vMePoZ6dTdnpTt9EthcZvD18ftA",
  "key27": "2soiTy54VLget9qezfyBQy21j39q9odoqVdLst4JmyerfZEWE6KrW5jcXvokp9LBwCnARtmSpQ2qVmwMZmhYnaL2",
  "key28": "5stTapGapUAJYLugm7dRLYXoGtuQo5u6Ms5qvYncg17xmtuXwHnakouGjALF8uHw8bmZG7LKXhtwEvbhkcBUaE7h",
  "key29": "3Jwu1JEDn1aB24W99CVp32GNU1KRiTBEXbH5oK2Z5vQfB3axVjsEFsWCTY3FnkVvam6t5kPjG3QFiYxafsAXx2Xt",
  "key30": "4vPzqCqSRvZ7ZhacAJ1bu6BSj4WGPLuxWhCpXPZcNgUshspKDufiBYie8jFNZ9zkj7RJeVgep99bMdSv6nfVPXeW",
  "key31": "3RqvkH4PyjmB4RCtVxP9iQKfxfSpJysyd2oQXYN5M3auZdAwv7Ty69xvEadPFvzxbnhNhDvFugBQnqfyGsaP5deB",
  "key32": "3P3Wfji9YzhgJHzgVrYKrJxG2FSB9FCDme4FyvxrsK2RJQAvu6knRnZg652HjuXaNr3r8mC9hR6UiYyHxWATVAkp",
  "key33": "56hwBsahK6yJwUUVwREwhdP5KyWY9PY9VijvGb8r8fSmj1LZ7FwtVJ4jRtFVwvZXq2r77tu4jjdXdXwhEgZkAa2K",
  "key34": "FTcxRz7LJoGoNcMYz9eEC1d6TZMXRe8MSCBuwFGosEVzFdrcx2fu1dhwkr36F9QdSFXiCtxkD8hzYBLRR8tL3Mc",
  "key35": "4wkScmVAWpRphpbu99d8jTa3fYG6UfSjtGpjwGNgPBz6za58iBbYz8EVt1mSZV9UfPt1bHTBABeLe5hMWWm8ioTm",
  "key36": "4anWfvf4ZkH2afvML44f7iL8Bq8ie7YntubsWA2DR6334g2y7By4x7uHZEBoPdpxbAbjG55Zpi3UyaERcXHQtakM",
  "key37": "2b6UA1mXHYhXqs4Bqa7MgodoKt1zMvjPZGNKW1vZAr6dobcYUFNJzu5bbnU42hd1P6u7XqqTEKTev3GUvZs7ohSJ",
  "key38": "f3fRnpc61N5YRN2Ez87AvE1XMs6aF7Gi7BxM1fVQZNkbcYDym79Gxk8G3PRBfo8uaYWU65qbqfNcrTjjvE94zVZ",
  "key39": "2eYWwopofdZZuJixQqnj3GdEkp5Lwngg4ihc7qgNftECcZtbn7y2zcacaKsteeRXKCA6ThE9ANRgtoomBACkvQ9D",
  "key40": "WpncBzigUS4NN4HoWaTLXBGdRWF9zdB94mDdFi7PTXHeSQcvyCoXqDKijNv4dWscCksv5edWvjcKpPf1u3LHfDC",
  "key41": "5o1gMPbpZP1NVUAwFAb8ohQzS9UVwui24muouuwzwo5DvjFJxDYDZWbiCTYdVVPNFCi3tN5Pss3AZiE9uDaWddDC",
  "key42": "4aoSfnNZ5BCf98H9exKS7Xc4FyUtJNDygVqHbHH1sJDjNhpiKZHZfvNWFwrJcT9cQ81nkZy2asoYX8MZ9jK4pqDM",
  "key43": "2sWx5EL4j9ievvsVosMzFBCnWRUxqWptgsQipqy1aFFGY935CQ4aVUxnsTUMM4UsytnDRUXLfF2DrKHLtvCBwUaD",
  "key44": "2fcpYLy728V4W6dWwTM2bdyQ6vLDh7rxGReA4PBAQ7iqWZjHZXDp6KJjbFv6iu141x6HfTgWf2XA6AyozTsb67fM"
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
