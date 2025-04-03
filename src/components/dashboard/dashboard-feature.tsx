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
    "3wniSybpNPDkUUTTQ39virnu9UmuBbf926JXuqiBfu3xXEst97HxKg9ejCRnLQieGHQoX2vWNVQMgVyBygGwVpYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636b2phqkLfrbafxEmAfoZeqGu482gYFhDVTiLbVCN96XSDh5GXy5yRA5AhYiMyQ7184sj8trMfRuzB3gqjidymW",
  "key1": "4Rrp5bai82MWXUByYpxmdpcN8jUXhzAFJoe3DZRSU4ZvWGn8nSWfLDS4UvVYLATtcSWyQJropbGZUVwRf8nochoi",
  "key2": "3HL32Xf64unYnYvLC2gLMZ3sm2vcAWfPAq7BLhY3pEvwHzhXM22hrnN3Mrx3YV5JXLMwZbzsncSwNs3Wf76tV9pu",
  "key3": "2ReqEcbn1GEUSxvmBkTfikwR1FySHMLwEki2TzhMZZBY3u2x7VYdktS16DZVsp8sKNrZdhgkGMQkUAakd7S5ixig",
  "key4": "3B1fbrx48jDGfSgfNspXtC7WGHFeSUCytZEtEQkPx7FkYxduZt5TRX1nc9jpT4mo2p21fBSxMBZmKWBAHvgjZBSf",
  "key5": "4qp4v1wq4dU5tBhJGCoh2XsUg76hy9kqxwj8AYqknD2D72mnE61km1ZQWC44VpqjpSPwbNz42jKEnHCD9x6NXG9j",
  "key6": "48Ue7DGMcV5mfX7qxW1a7wdAgnR7WKaQ6ZAzmXhzykgw7w9L1ti8wN3a1M5a4VNJ6CPRyshEriahz5FucG4PMejp",
  "key7": "2EE18DD6PYU2oK2PmGbYinRej7ojnmPKqSnWzeeKESYqfvYixCEKiQoZk8TRZdnFVR11SQu9SsgVNWhwoTNLfynh",
  "key8": "2HPVHPuXAPsHs8tM5VGGmgaDKVgRBjXu3TUXiqYuNtHAm2uKVmdvHTqwX31K7tEkh4phx6uw4Xi3rCySwKX9e41Z",
  "key9": "2Zsmmrr81C8m7qvtxJbLnAbAoBwpzqBNUHA1phzjfvZurmt67EQ68c9zRb59HRiZjU1TMGGZM91vfcX2hDiP8pU8",
  "key10": "3M4HJF3s5Rsqc1qAFvvpm7NkomdYd9b6CfQZiXrELoX47vYjYpaqCRPiMWUZDR6Kpy2bzBPVtuoMo4j36H8DisMY",
  "key11": "54wtjCYN75dJEddpNih8SodkSXvKVZogYoYwoUF2x39s6QXJ1uYek7eusJb2yr31p6FawdvK7j99vtvgJTVsuFy9",
  "key12": "67L2mnDYZRqhWx8vc85wjeeLT5ALAGvDaaD3kJDmsCQMdfPhikhVJqHzZYNSGuyk6pFJGFyfM3Rik8ou8vVcofKk",
  "key13": "2SENY6v2j1T6tjeswnHxU7HuvLgQJYPtwe33KdZ5Y4Vfkt633kR4KVNMRPd5iZy6A7A58kzjqyNxPucxRAYnTfKg",
  "key14": "23usMJJhDhUdoUa2ove4DiXuVH9J5hLPzoabvDoLaqjNHRRkRmWyBUV8Yom7tYeG5n1YcivCCn3NRmD61uD1LpTr",
  "key15": "41dEetwtQAqSah3VYskN8CbfRxVDey69ReZi1uMSwr8Ab6tVAASzRMVUgkYr82K8JuwANSTFGCfcmNfBjVJUWhKn",
  "key16": "49weH8YfAfyApDYQT28iJ2YzUyYiTu3ER53LadFxirLjg13sAPNKjHoY1byjP1ZEWcjmCn5TAmeeVBwtgVPY44qe",
  "key17": "5XvhHhE8K5K1tdMVzeHMwKJL7kPwQc5zheSA6CFbvtHqBnLvxMoL9BUZCwYZ8YhmUs9wEBCw1Us1NEayE1t4B3iY",
  "key18": "voyVytebRuUomuKdgkgtc2DcymL6hB8vjyvoN1CyRbz3GavsdtxdwhKETMnpwDQX4KAb4nn7c9SR18RXJfWHhp1",
  "key19": "3gH1UVBLDtqEgA8RfgYiTUzAdZmRcrb51Pjh3odTnM24z82RkXBHHZSXRRZTnFLZso33WFVc6zuyPvNRTKztzatZ",
  "key20": "3HQkQdrGzxTH4ACq4s5ufLWfwvtjqUCimHWqpBfHLHGYAPtYte8jnSE6YLgpm1m6iV5Vmrg7iBZVG7Ya4KDsFTio",
  "key21": "2SyCithKqf3guB7x1MnB8tn8Zs5aCgBHmgNp9eqiqF5GPQyAE34PeXySTjsS4d9PU8ZHZV8cKNvN5wiMZ7jty9so",
  "key22": "iyCyxJF1SmLByqnVYmrrojZHChkN8PqWhzLPtBenNwyHnXuSgNcghjuAAU9vH2B1qc8CFWTuCf7gWxvTwugUrrT",
  "key23": "588Anc3jWh8k6zKExM1bBZMFxYhxMjSBSgeVHabYc9NBLHeMfSKEsALWmcaWegW4oDuW4s5VLY6LNXgmKwDviDMx",
  "key24": "5PCAtBrqNMKXsdR5sj9upTb2vR1c1mXWMs45jikVwUkhpdEVbR7dwDyov2rdXj7UwGUF876DFW2khwxj8kPHEa1Z",
  "key25": "2E7vL4V2nyXVciYzNhy8nrBmDTAXgjrj9Dx9wh2WWyj8rV7cqfZQoQPSzg3cok4qfrm8etruWXW5QAVgDy36BXVx",
  "key26": "51UNk5sF4L2E34dAQzHRcHq29UhKp2pMei5SDcgUEc1tUrarbCw41CR645QwsHpAeucyxqLUu3TUKqt5jHK6uB7v",
  "key27": "21LaF352dDfXQnjkySeVyAPzzvNPbwMyupsUydZ2j1Q9H813phLrNjWN64zTHCvHrKkWudCEQRedSEbgRKc9sSe9",
  "key28": "3ppwRujbMQm3G1BfwojhZVzVYQqUZwdg3LdhNkcCadiuazGTRdzhmEenDfF3xUnKpL8phcZW1qGJkQZEnsUrfaLx",
  "key29": "6154mcGiHx8K1bVWR9zNFFGpYCEiJf5Td4wjW6e22zXqpsnP5uGgZRAF98nJN3sCCRLeaoSEKv5VC4wS94YFThH7",
  "key30": "3uFjeDneFNmmBn6gybHbjFQWPFBgu5Tx4wCcXktyqXYQf9Fn4KHtETZ9uBjWF8jSQxJM1HPw2y5B3jZCSHe25r7t",
  "key31": "4En9des6F6A1tRsBCpj3ztTNnFff8E1Nh1fmETPaHx7tWuC9jsCoJorr9jXN6hxhgWuFiqf7VAgwE5hdhZ9bFjWz",
  "key32": "WtRG1pou6iK1bsoGU9rxmNAGi16S3WzaDbFK21PzjdjM3QjGoZBR2Z6zZPbqtGGvfXJZ2fpfzsFm4pinj665NS5",
  "key33": "4Rcp8c1v7LsATRFAx1A9BgV5qhvrqHvV4en6DZ7UYUTgHaGqmry6Z9a2fQFACgrhqzzCTET2nCt7ebXAJMKpZPeV",
  "key34": "4F5YyEJgywFjRPvD8Pk527rqdVHmqhW8Qr3dcfj3WWfdxPr7nmCMq6hZ7tAB7FNR5CpJUMfsLsRPjEw1eqgUC7xZ",
  "key35": "4Xgv7XrtXhMegaGQtZrPbQpLKTndn2uJRKHNfTRYrP3mfrAGtaeGScAXujKHffqUA1MPGnns9trbaPxnGPQTxi6o",
  "key36": "4JFqBSsC2YNSCJdhwgTHfUh1gqwTwQqBr2b3gLhtSWZzZpdpkWHkPPX3NHMHgZ9Wms6E3gtLP8n5jLYow8PYQh2W",
  "key37": "2KD8EFvvaNosgTGV6Gt2BKufF7iS8q4uuWf4EoAgvzrcGkFwxPr3cVqrYa8CogykfPpvc6gWAZU5xhtsiwPh1aaz",
  "key38": "2VFYvmJopEaYD4JCmsKiQcqHB1EK2vvby9ASg2zUdpSXsdgfKWQxstzKLajjDQxkqbY9qFXqMMv62ju3coZ7duei",
  "key39": "3hwnVE1W48BwEJ5itZmu9eXL3LXCj8CBNSAyFoiGcBiMKrXfARvVHVyyFgEnLstUrRhQ1bHYHDUVfnaA2qNWBeS3",
  "key40": "PkS8Hmqi8zEYbLNeBPw9dNk51Gnmvjr1JV8MvfgWhYWUjRfc2NSZcQfCMi5d4enPcAbCdVfWbaWhyq8s6Hj7j1q",
  "key41": "aWSagm5gPHaKKUFU1gbJyAiBkfvS2K4yM8w6scUgAQPkVPBHtAMR7jvJpyJhqayErqskmKyZcKR2ToKDh7X3ECM",
  "key42": "3ynmTF9pryjv8HzY7k2M7ELbZJsGP1QgpNfu3XC4jL5DjFijh7vTQCPiAGpSLYG81n4wBnrDxFn5D3PYVUXUHg5w",
  "key43": "4jUpCJsrNfZpQ3cM3jimJWkms3PtBJqEGo89TpCkH1219Azj1uTizUF44e81FkcazZYaaqFRdSmJs1D2TL2sRNZc",
  "key44": "5Bo3oenDyKitft7tpVFnXo6H9Yxhz83eYyK3LGV1J29vgEATRukQT9o6myZsHBBaDwGg4tkcFRrosrWMbtfZGbpe",
  "key45": "4h7GeLt4ZqvFHwwhZJcBAmTEFBUNS5a6A9CLywtWgLQo1JHhYFpSftMXecM9wjVyqB2UQheMCyZxwtPLwvzoydAG",
  "key46": "eKe9bokhFeaAN3ydpWBGuF6m3CgxjBWTAhYX25J68syq6FGzWDf7NkSRykaJbR7qMc1JtnMjv8PpbsgeyGGjrvd",
  "key47": "2avfjcvj2Nv6wffsYxoESYuwEFe2EMk29aJWEuFXZ2uMWKH4Rf7xC5EhdG7eJpvvWoLk1jfNkeRPAXPSGeANMrPU",
  "key48": "2mfxiW94gxYZTvr1GHNs2So77MMu1w8zXrhAbPfuQqqcDaxdP5a3wPup2FcfX3PVBY4R2n58J4Ahhi5YuVxeaxDH",
  "key49": "5TftRcqEQEisZnjpi7L2xGj1R6TgS1DpyaBj9oXhAqCqjuWMooK5swibPtUTpuMogmM54fgRjURrA3xjsacu9Q6w"
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
