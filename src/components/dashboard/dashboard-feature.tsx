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
    "4donfVeceCyBCcvzXVEDvGotUrreed1yXbFBWaRAwPnbzYcJTNZiL4c1kfDotyhGmnHbJBrDgngKbntPDgdC5quU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432G1xccygzbBrxC4xHekR5k9K1TTateD7Ssota7xCxspSmJjJb6n7q5vKmGaqZwAHBjPua2xsiZxHsbErvWYADP",
  "key1": "3FxJCWbVYKsFogkscaS2MVupUJ2bR6iaNFfbVGYi3nns4QYDMFyK9DHcjoMpqYipYAgGWQu8oW2LzwomiybHQQ9V",
  "key2": "2ZRKDCSgT9wTM4CPD6nC8cKiXFiRdyJyHzcfq9YVHq41WTmfFPjqBfoTqPyndt6SsV4AUq9bfje2oYob5CBNt62Q",
  "key3": "4cbmsJyHFPRiANxnoTMXmdn4WLLfHR2XHA6CukfwYED8AmBuAuHZH2DvGoeegNFSXMHQM1r8xN2AQcXdMVvb6Pj2",
  "key4": "3Emn8z8uPvCUktwG1tVt2JrcfQMWFXP9qjN9gTn644FFeqyWgNw7VPqtGyvmYMTGJu1Zn7A5AwkU7JmaKkLn7mvF",
  "key5": "5hfYhzNQ5YXnh7zejKNQbAfK4n6yFhcyGTKG46a8CRUbGsZ8NmPcAd6nwLvmaP75WFPq5PeY8kuTRt165cTMSC4A",
  "key6": "sXh17Y4TJX4wYyztE8xWVLuXRaxxTicyLKt1LGJt7Tm3zFY3dEuFRZfmE7SoeHDsMQudiMnuTdjr8F6eYVWa6QY",
  "key7": "3F3UQGQbnMSG47kYVwucWaYTgQtfgunVPaXKoHPvTWyXSMDoLF1CbXpUUdDifXKaSqRaF11uGwWhiTSiBxmmtC9A",
  "key8": "4u6RNyYmGFaLxjXeGh1B3KrMSNDUXF2oDcsB6U9de1dqSxgYekfz9ZsuVR6bSjECKFnxqk7ch254nDBAohZsfoHQ",
  "key9": "GruGBYb1zRLuavPTg61xspmBe5Hv6fm9Ap3GSDPyeJpT4idNGfu7cNvfi65N3JZsxcQpRFTD7J2G13Yw5PWkujq",
  "key10": "3uyXtpLusJfPR7iH7cdSWZQNMC4zWhbAhZUnd7rK2TR12DibZ6h7TotjeRBzPXERywFd3EKeewKdoosf2SMDzcZr",
  "key11": "3NumkLQADwBsHTfocJsdRMT4Xc6gn5SigkatA3rwRUukn2cALduwN4wHA9pC1CGKJH6mLBmWdwWw1px3zjYmyDkJ",
  "key12": "217ifKGK1gFsKqwpXjovX6PdUF9pUBxbuWP1ryUUsevLbM4nEo8Lnr76riCvpqrNbSi7isCbc3GGMpHwPDAYhCNn",
  "key13": "58A2B1qiPoKPRcnqHnDPymf3C32uL8rErf3koBx796xnnDZys3p2paJyGC7F4W5KAEZnvXScEMUS37WeoJ2xLyrB",
  "key14": "5629PXX1ddfSZ9hn2kDPXCoGmXbXJWGFxWTw7wuPLfPENvxopdkBfNqBhiuyWi54VjYcrQu9UPwyX3mU96Xmmj5x",
  "key15": "2rMfPrP57ycFb8jGNWqqoQJsXx8bp9bqhHYq5iuTpMy5GVGximLp67LCrh43w2dsuuRw1WmGLRT9mu8vAkRJsrjY",
  "key16": "4MKue6A1C5aA1wSKXNYbyqcDTR3zF8HbrQhSKmqzkAbuMoc9tQsDp1PfnA6MUzYvtAZTCECgjRqR7cWhAirj4dAs",
  "key17": "Tp4X9jyR8AAEh8KLwHLgJc5g41HucrU1ueXztJMq6sWYwrvsifbsBvTo8RPhRM53TTTpeTUBBXTSyamtAVR1sU8",
  "key18": "2T6yeYqbEnzacFhRffZnV1dLsk6qAKgWwTRkDVLpnQsDA9QRzrhdm2pccoSeuQDeV1PL3E4w1ncwYzrERthbordr",
  "key19": "LS7vmJ4UD9W2f3HAJcX2BCq3Zhu4GF7FS9yo77RwHfwZGaxdq8jQ7PbVVhTbm58tQ4h3FvfnnP6974iijh7Nx9c",
  "key20": "2jqvFwzL8QQkBDhqpghvoXT7zvQde53F3Xei9VnSCL12JUycDPBPcKtuno9YCwoXvtdCDk12PdAyFjj3jX1Ukove",
  "key21": "4CPpzBHHxPdui2cq72WxWwtmuGKAbA1LjWzb9ZPnx48HdukTCcwZsD68DchKBEEEPPzBXUghqccgAWwo7BeoGen6",
  "key22": "26Q5YZSyr7dFTGBcwBJcKZnedwENdskC4yhuJmZ3dr2fp48UnZkP4tsjDK5VT5tX9mEZj1mxifB68nfnkggCvfUz",
  "key23": "5A6S584AwzKEX4QnuJY1Gbpv2sL4MSFXS7qtzEo9t2wvkVusE4G6GwJS8rc6R6MJzK86ZjLL3cy7pSxYKspQcrVs",
  "key24": "ruES6dhHKtyYqp1bYDq5wvCYfQiU9qfVgR7Gnj3BUD3KhnGjCqMNgWkByCFhQfWaFjS1WbhqRcoqcVBNqmFE1FD",
  "key25": "3cAkaoD2YEuQawE1pAUmL2nctVLnao82qhPudywv9Q9ct8v5zbYH2CrtuSx56pPybpqRJYcjUJBQ5BLtxF8VcG7z",
  "key26": "UnWnd5imMu6mLejEjpodsW94B2a3L1pNHnhgFyPosP6yMGjGgdecrb1nqZ99ncFFp41ReWQEVEcdqBVDyqh25Mg",
  "key27": "2SGHXSEDbPjXkQL7D78Pt2uWWkBTCebY51nqQ4hZVVSfTve18dvJbAmarH4AwRqQdmo4Cobm15JbzHpGpWoz4hD8",
  "key28": "5QQsuRZBeivjes4dC2WUQCA5VhX7TwZfCUB1M9DTnjyaGRc61iqQp7vGNEjtsA3iEcvggbGJonGDiPjMKAHF7EPF",
  "key29": "3he6ZXySuKHP8mNKR3coojRcDzzfV1HXfESBcXaCkdPkHZ2BSCZGsSjWi6Ydx9uc26bupQ9B39Ug1ABvPcqAL6YD",
  "key30": "5aDwdRjXRQUpD9YFjuQqXnbCsDDXyA48LaKb4rL7EXP91522cSXAvW97U1qb8DBhzCn8MiUJ4fduvFbqef2DhKcA",
  "key31": "5ZSzvykR5Jt7YNjbr4i2AwaeTbCNftsiFAJyoZS6sp4JGJEwfPF9r2rPuzGBBbt4koy1Vwrkj2H9uDrZtgEGPqjm",
  "key32": "2aN1ouiK5rfLLAesVSJZaf6tJJkNtvCpxmjrcz8Ar1zY3C3nux7ADLhTehaYst9fWhMsacE5ZNkJdXG51TbPZ4at",
  "key33": "2ghSFmqRS3VBhJG49zivfoiUEyzxyTkPeQZ8J9hVcnLLTbrQyMAKfid7xFMSoVRHGAe3eL7bDUKsH4t8mc7ivfR2",
  "key34": "3WKnr3oGoTimFVXxE8tpWECLDVF19zudercL5Yp9jnSv8ztS14vykENfo49exZFBqqDcHeUEHux4eYsq1LJSyNe",
  "key35": "3fwMzbrQErqrx4ynucpTQ2g2r99vcLmdGokpucQi4tHNFivqBaXkLFZTwfvQT6Fj1u7cbrFvR2dSuJAjB9y8Y6xo",
  "key36": "gVNGNjuaVfcmLc4uaPrYo6YUNPv1BfxYXHepAKEyYmRNmE7ZoeL1UxYNZT5erjN65iF2aNVkKrjsv5RvkcdSWaD",
  "key37": "2QBVawjJ2qrsgfrD16yHDU2ZjmpAJcMTSYqstFNEKVSgS3MS5kVxTrL53VEw9JpReZRj1Yxa5MqHAXScrvSoxrTw",
  "key38": "4JL75sngE7XESL18z3WkHsBJ8dcHd5LVsFfyQr6NsmFcuEqW6xP4KsyDN52MMrsieLwryAt8weyF4QGcKtAPLPS5",
  "key39": "2rF1qLWRgSgVaMgUmfSj4qmoEmwWoskCMpJAN3h7yNhg5foQT2S9pgQeaU7D15K3CdNQj6196d8eufzZ1A6rk2RT",
  "key40": "2NorirrZWLCATd1CNP9eHWqPiBGFHSxEUhTfujxNSHSaCJ4CKme5qvJqwqVX1sf3fvbMRJAaDWJ7LRLFJwgHXJ6R",
  "key41": "5Yk5FW65Jc7d3odWHoDUviQ2esxbRLMS2r76swB5Fq9bSqagS7185rT3qdTo82yByjBSzYroR1AqPC11Wp8WkkH8",
  "key42": "V1HvASgP36pnLSq3mKB5sFQe39nhmFbMZeQdvjzhjrY1sUUTjNRcVZg15EXRRr6aieQzgNpeonk74YzKeXFBnZp",
  "key43": "3HiZgtXzbwz5pjFVAYmUdaGkGzA1FoKdc8FHN2mwH6rZPLg6nBBvrJSp8dHzxFF453ouEB4DGPBckVnr9Srv3Tt5",
  "key44": "36RnoYTnFShFSykpQYpZoD1KGyzpKT6Zwfjj2FJHLAnJ9gcN9N5QkqSRmkWTJfeR72WBx29kUBsSuN3tZ9KU5H8h",
  "key45": "4uP2geqszQvMdxEbGeTcnbjSs8RvyWxG8AR53B26sEhNjZ4S6e4pLYkUf9xTkTQJpm29UZH8gh6VYyR1cW4EsQXa",
  "key46": "41xNm3YNfBxMDj6RiXRFX965Ns6y4tKWJ71qXTHior5RykPKq7gFVkYJ7NhMkkCcJ7tfobEAoSdR1He6YeJHcdt9"
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
