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
    "5KRy6TH166FMvjJg4VRLQtgcHnijwMNEqszRy1C5KDkLgnKw17qeVBqCPuWpdu5DUNtyS8PWbviPykZxiK94LWDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQv76CvTKJNcPuVMof7UuSZAjoBGU2TNsqYJVbh9GrdP3AnPsrMkGAQhxwTdBCDr9iC2oayyttj2Tox66NTvsum",
  "key1": "21xTUPbd5XPkEHYjH5BfyqwfJmdVUth2CM7yQ3TcDJ8w6SSz9ktAgQc3KtUrsM1325pfkjMFfdN31GzQqv5bTEF3",
  "key2": "2fC3aE8X1fiNptDr2skdNATg87FFoJsH1YrbFsXqE4LukuJ8rsbZvir7u6wVhRBtcKNxvoRpNd3Px9H4tG22wXR9",
  "key3": "53Z7kZnLe3j3PHTFPkGxAyMpqT9ERMRhKo3pJHbs9dcQh4oJZg5AetUvT4RPMmFBKZ37WuoQWfQLpJcL3SwV13YB",
  "key4": "7TANrcw7SRpjJRfBDLDJ7WvyPQRwFtJhm4VJANhfmNdkmAknYaxedFqs3Vn3SXuKzaTiBeGackmSfQ5dnxpNgvk",
  "key5": "4WnqEE71exwpJr5xVgDAT2PBr2CopqfC6KJWd2opy3iNxryFtK1ejVL921QdQ1YXaCQocRKqFQNZANYLQejguxxg",
  "key6": "5jusX39hRkwS7hpFoko6JynsKXMnPsi2EbAiUSfFETWLDFvFV5q3XWmCzbX83QJ3beHwcbzAPvmZ3Hsbr6CNc9TW",
  "key7": "Qvsk1KLTSo8QrQ3eMBByMo2ZJA62Rx6HN4yVtVPm27bDD1mAkob6QwKPbHxwNiQViBq179xFg1QLZawcTpzkMuG",
  "key8": "41jxWxt52VW91PqcaAgogN76waNZ7a5f5n28oYmzTfNSCTVnPEcQJkaB1Mmnhj6hm8Gs5W5mfHYTE279Hnst1B8s",
  "key9": "67hiQhMtASes5YfoQPXay7kAWjMvkopzLciXtVywXUweAAF4iifk81AM7jehRP8wpp5nbh7XvYgTwcMM4o6YWuPg",
  "key10": "4TqPSxvaK4sNPwg6xRxeXHgv6UvRyEWhieJWgodWv6NimDAtCCqUz3GnPZuhBBXwNnBaDAywfRTPustEto3DE1rr",
  "key11": "5vmN6Hc1MVBRquWisemb9Ry8fAKxTJEGdqCBvqv1SsuFsTexLr7jetUbCwsfEUorhXAqcHmW3UgG1FAHyNp5Fku2",
  "key12": "5pwgsKjqqS3g3GP1tDjRci9LUUEC2u6Yhus4zLo8XdDKcQMm74nhakoAkanb3KfZBxXg9gtsegaefNgQauxhGH1R",
  "key13": "5VhoZzcq1wZRnuDX4NKsqJmq862uU9JroA2dEfHpMAxGiCnaYKakLxnxvm1FWYYJTJtV5KofJzE51N3WM7147Ufp",
  "key14": "3CVK4vSzfUDqhuvBCz8hr5Z4nCFM2Y5T39KjGCBuJZ7E9cMBt8m7P9SAoQwdmwGo6EjE6L8ZzYe7e1nwtvHdjtWq",
  "key15": "g4L4CELCWPNuiD3Zgw3b69495nX3ExQXPtFBbd1J14NvQ6ScVF3d4PXhBKEVJmsbW16ZqNo85QQSyQ7nmCuRuvT",
  "key16": "51SLiMu3j3U1TKiJykRdz5iwey1haXbExhhf5Ua2KvyBQRLW1rTnGi3HfaTpzxQW4DPeSkbEJ6w4StbC9kpNvzfo",
  "key17": "2hUbx5dDj8Tc9ZHB5iUakyTJqK9W2YRNodL9Xjb9eDXZD7DK7c8G7PyEpRpmc1wGg9aubrS4iBVnxu4tKZwWimbZ",
  "key18": "5bM5zZaJTLDg3Vcgh9SDhjArPiTFjRKHRvmqibwBKZDkkMjG1MDsHqLaKzZ7ZnBnafGWu7xv9H2y2niFUu1LvAcR",
  "key19": "5qMUL6nGTtwHBm211HgKfEqenDoJo3AwCiUFF625hvr6k9yEsaehj4ouM1AYBUs6VJRJ1Vbdyjn4XgJXzGzszeKv",
  "key20": "3UxoquWMLadv8CArFac4jUgKL2t2VMSbFz9hZJJNL9VEtFVnDgKM6HyGpsBz4BW4eW3oqLmn7cZm6hHxTbGp87G8",
  "key21": "5Z9ZLDiZhrucgX1FqDsVFoC2cgVuDYM74DuFSedanJshmqUVHxBrk7L96DG5wUEsBDxPtYT3ezxFNowuQWHcbYZP",
  "key22": "vEajPQoQNYu812rAaVUPy225KLt7q3UVGHn15BmnZtAwaYjp1yUQcA4oTuchkTCpJ8MVzq8t23rZa4CD96MGozv",
  "key23": "4fPd2GMzZBFb7t5AcQgamSbRnnyj8gSoEgBvPvxwZCHmeYLyvYfXSujULWNZvaB5SxYdbgV997Ug3MSiCP7QHyCT",
  "key24": "2FxMpAMpbUJJA7BeFRwHLsBKyehjBghpYmQhkQBavKaAoo843VwFnW7MjK6GXsuLzowpGDYRRy67okhvdZ6bSB9W",
  "key25": "3Bpk8ttvtYypixfDiJ8L8CJZitaR91nJ8RQDGmFyn2qbo8WWEvWaWE16VUnnkyWg2KG2YTzuRgBuZEXgmHm3FDfR",
  "key26": "33dUxibKMQFUniRY6VpFQKfH96DJK1JX3SBbHTrysWX2YxqA5djTFqE6YnFLSAnRwScfHaf53dY4XrChSEJ1iFFM",
  "key27": "34DinjWF4sToFkTcXjHBAWoG48DmkmSxwWGYMKptTJHwYgcU8RD6o35uFEohhViKU531DdtswduEH8s4A12dsSkB",
  "key28": "HhST44Pk9NUgW2WDFgJSdvQNj9YU2anRisX51nYd4Emw6n86SDcdKHrCSoc3hCAKbQEbGgpXDUAcYZZqz9QkGbi",
  "key29": "p36Gj3XScUXCGVo8TiK3L9GVtLUrjMe6R9db59foPSpEd8e4tbbR6k2Q8qTN5Wg4cx3A2YR665Yv3Lu128eVYkV",
  "key30": "4zjKdXPUUraZfzeUUvLDUo9rWxKK3Z3SpTTTCsb3YhgWtAY8v2YiEhttxDreN5sfii11Wvh7kyw28FLxNbAumXGW",
  "key31": "4Nu28GXkFPZsueK74hinutvYnjgZx2wFsT1iptLLJdKyJi6HvJ2dtAiN1RXurJ8qRAJFLUeXZUUJJjDSqDDHiqrB"
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
