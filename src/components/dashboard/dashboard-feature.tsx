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
    "219myNiHPyihU4UZNx3nDswx1SW16w77oBoYZZfQQXqLDdWgeyhrSBWPNXGejXL8dG8ktj45WCMmDKc8heaypL8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fquq8fvaz5rmAaC7RMDzJWmPMvw6HfqEeKsrpdxKAo9dFwE7CVVuwfK77YGeRcWvZD8TQ9rBX9Ge13nGRbotuKS",
  "key1": "5MKR8SwEzSHnAWaBVXhY5jtbw8jChVxdiCHPbWgmZpH1kANP7DwJxNe4uLQmKZTxZ2xzamKc7kgCLr3DKWzCw7KR",
  "key2": "62VwXgCSb4CiuaFZXADDEDxFV8v3KKVbRTGm7Q5ERobRthT4oCkC2PWJMWjaRXKt33wHDBc5MhEPHsxTeLkghLtq",
  "key3": "23sWeEmMPRooKS8x4eeMJAVxJMfB6Ku1WsXLqm18MgjWvogPcCZwFPDRRGMhu8rjpNcbVaco5qJHKxGJMAGAYtkZ",
  "key4": "3idcHADHMsL7WmF1mPhdQKp7fnCdrrxXBwDeBiMVMgpFzfH9DnSr8Rs3jxiKjE7puZJ7DHEqfj3SjA55a8XDSpnD",
  "key5": "3WLazeF5wcN2rV82hnaiYXLeNJWaUCFvdyToKEGMH1RsLuDRS6xXKshDE2HTecv5bJskM63xMwyQBLJZyp4QKRcu",
  "key6": "2DpEJLSBtQ18B4oBGNKRfZWQLYDsvxZ6VMuUqEkYj8mxd6bcExVzFDZVq3zQ7Jxd8UQnuTKhsSoLHatLuduCDsY8",
  "key7": "3uHHSoqKUhbAQTTsGi3iCMS2Wj1RYwGZtn1gAZsTu6puxPpSHTTPUnYqea1djudv4AP3cmV71KfB7nJG9kxMmLnm",
  "key8": "5oh8VeSvUvukMdwhRXmGXAhNKYsHBgiHGBassM5Ym2xLaz5us895n8kTfDRGWyrfhLtHoTVExxwj7oX9gw3aYJPx",
  "key9": "2jPknUPYvmL6GewZusboz6h5nnn9Y9jqCxV74FnYwXch3HRA2jpf2NkpX8xntB4J7ji3jUD1JRTHeF3Fn5HRVY1A",
  "key10": "2XpWR7oi73GJsfpsY42j77aSPosQwD59xixVSJ5KbeoVPr86DdNG4YinAcRwh98nhHoFCv4LDpobXX8mfFn96oLX",
  "key11": "AJc7F5g52pVfvBRJdc7kMyxGBmHryhS8fsK9wWusr75iKUGuMXYwF6GM6C4LZXXBPJ3i3n4kdgDfzFxzGsNmNgr",
  "key12": "4gwodjTDH77mqtJfc9JQWFPrf1jU12CFnqYAC5BMYSgMbUtW5zGzcbAgYYDgrHYqyCtGdasGtkRJRgyHBFkLXQFb",
  "key13": "5J2YZmKKZyUsDP125NDQz81gisFGr5nxixiZCJcNNFtbiRSDNFNi7QxUm6GaCDNxBL67YmZH2bArjoU3VMpBf48M",
  "key14": "3ajFKE2tBH8b8WZ1hMGF9DDHxkWsC2Md4UHEsHGPA1MpJCkqv92b6JU6yRranNHxc3kfHfrf4CQP4wD6MCGFBJBK",
  "key15": "5PZU2fAHC6rxwS7KssE8hoGrxB5UpyAsjFrh8E8YFFSLB4np84mqD5XqtU9gVe8Qm44qtyqwmtyayPQzV5xGsGc1",
  "key16": "4vzhqAQenDSPRUAbfkfrqU8ghaQZtaiBWrN63FjpVocJ3GEuCGLywRjMHUA387uG3c7DCzAjTbhCkrbDAPbrTpaL",
  "key17": "4yuReRBM7KZSAyL9JSVpwTTmC7LmvH7KXNi8NifAk97jom8V1C1h9JvoLBEEEkyVsnHpnHJknVLmyMVHCiXEUwUX",
  "key18": "2YTVY9KNENHeFKGARGx4NzBAaZfV98sr65q47pACRFotWkUp5m8mZZDsmNzbhCqdXHeYj6P8sdWTyEbd4w9uAgeA",
  "key19": "4TeD7eAWJshSAMk6NApFy7fBcb6Q8gqPmTpMPDcbBL98bSnYUQU5mcHYtQTuKWe3AVmKiSPyXqjenbiyqDQV7raG",
  "key20": "4oB88aM5iFKtaz13Bo5jcisCLgmHVtQGBtg6t8RYh3TBfamsMEtMbPekV4PCn41zbXcVeFb7h8nAiqJJoTqp62vo",
  "key21": "pbZDHqekgYvGzXxBKjwmnRPKCUUof3xD8W2d6o56hcFk8gRH3B3m5PCjft7UNQawt7tkh5xXdjA7eGwgsWg9tit",
  "key22": "jJq9dVHYtZqr9xyQdG6hoJ2964xMqKi2QDXeHS5Rz4Sh76TccFvP1DWffU6agsrvtzwq11TkuMGq943RZAEvuzw",
  "key23": "2ThG9uVAWAuUdA6xGfduyhSUs5LtUa3wsSA896zaRXFWPYPwrQS9wJrZ6pPF8ddjEwirdFV3YBVXzSrS5sE2EzLp",
  "key24": "5DjotrtzTDosR4V7Gm8KwN6LjMNae3hqds8AQwuwBQVcY8EY67bU53UgyA1kRSw53rGbETejumw96KJXtUV5qDDp",
  "key25": "qgdKFep3dr5yB79ujaEHCWXo7e9c3ZLLYZvucn3Hhq2nt5oHPqUNgkG9i3YUGX1Qo2Y9ZCySGLyXQXdwSL7Mqsh",
  "key26": "Kwm6rPuutUvFNFWwWNJMtyJZHW3dNg6nCkB6kQVerJQ1a5DitmME7Yu5Z5eV2rPEaPsFSDjVGJA9un5d3GqaRXP",
  "key27": "XpERct4Tv1B3HPkHmYMzLHoQ1kXmy5Rpz3hHgoCRQP9Lnzv8Gq45vkTJqYE8Ngj8TSi1zKYSRhBDgajZFU5FakH",
  "key28": "Ds5USCEysM6xc3RMhAAyw1hXx3ipEwFx1jTHpdvr9VXnNCgSKbcvn1UhbZ78iykoG1wGoWFzrouAUEXq7gNKZ1h",
  "key29": "3MSA9Dj4WiVhioyNP5o99kLoF7FDzbdSXWVPCvJzz7T85UZLvmDgoEwhjMe3dRuTW9sVwEjCKBmkCZo8jpWpTbp3",
  "key30": "4j77k6PCQsdrvNUpw2iXUhgPMrRG7a4U6WkwJRFekme74mTuFkfyJatHVxsoVrdwoFvHdMTAGNYkD2JFXU1tM5oM",
  "key31": "pMWuzf7Qp9R3RR9y3BKGre6Vy8r986YnTZkgvG3azDsEcEJTBseY2LwF68LEn1Zd9s7A156uJvffdyL8exd8LeG",
  "key32": "br1Ym88KHJ7McE2XrHsL4vDvpmqY3HZ6Chjvx9zk3cndrtvE29eNitTKFPmihBqqeAQVz1rKTDpPXn3o8MuZdX9",
  "key33": "5vKwmnfoyr1v7BGiNhdXNy6MraDZCtRhPj5Z5TqC22cns41xRQw3XjooYYuL4ihaoNWEfR9EhBZxWmSno4nWPzFW",
  "key34": "VgmumcFSPQkXUomCt13wfKhitKFQ8K5Vp3giEB6GwnrYANDd9Ze3dtrMnXFcn4pfKJuiQXX27KHw5grKUc4BtQ9",
  "key35": "2iZezns8yvixcJmjJMXJCYtFGhFMcYd4VmGL37zjHUX2C59Qmd5Z9UR4RJLBbjRhc9XyUsgE8tzAAQwMQBjd3UQX",
  "key36": "5hpdjZSxrzCuPxXTUZSBDRxbFWc6TwNTmWvBHGV7GtgrMSE8SoX3EkcLhJzhn82K8Ej6REaMmUfnQsFhBFNC3epX",
  "key37": "5sLBC7jfnEiv4yijAWKZXbjpSksGA5qVd6ioXU9eLhhfQCS3Ktp3iBSHs6Afg7CoCHBCHnk3dqkx4nAApVPHYPCW"
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
