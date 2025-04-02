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
    "5quRYV7M6V8MvzMdbbgektRo3ou1AVw13YfaM1KBQv5W3Y1R4KEZCWieTYjzbJSC1Hiahjm6uVRAiuyKaqyFgi83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xUrsA7tCv6tyxaKQiwD1tn9dXUZCjaju17YSsuBPBDHSJxPvkk9Zqfx3exLZXYj1pLMw3UkRC7FFESGkWh5tcRB",
  "key1": "4Ru1ggs7zNG3nRiKmzpheQd57p5RgztwoFWdWg8XrPNTDLiXXrxCVtfQovZrx6AmDhfrB6qZgWfMjzmUcV9eDYK1",
  "key2": "2ShMrg52yW3KFGq2ovxdo8nRh8jDR4Ay2EDRz52iBXAVHrwrcKYhPVabnE4Ws92CbQqcvvopfTiPX19x1sxfQTAi",
  "key3": "3HR7qYR37drthVyyGHQkpZB72id3LYa9KzosLhWSXJ3HitQiD1vq6urrH1mxd5ceF4EjV6rxmxiNDXhgDgvXXisJ",
  "key4": "47Y97WR9rMyKtXDCs1fMoqgBenS2tqH8idNiSpofxisfxqv3ms4fSi9Vqs2PjzFU7URYZajZALKW2AYrRnd4nHAh",
  "key5": "T1UzLbFoJReZpny5dMmBPzxs3CrB54ckn4Ctk31VZdJLRZVc2UoKuZ6nWU5fWw7v5LN3UzRgqVR3hMpL9AtHNVd",
  "key6": "iDnT5yMJUhmsTXiXJ7N6s4uNpNS3JHrQZjAjbvnJ2LjkrTxsuQXBAXoa6Pfue86SLZrjLbwGavPJHzrR3pjVse2",
  "key7": "5spR8RaYFUyrSt4SvZg4SCTYioohphcj5SodooQQZibTSd6z7eU2VY2b5JUF7GwPW64JcK3E1VDPM3sAABKBQqAL",
  "key8": "3GS4bB48sKnXRdV2RFwALUXioAfNmRbbGtrhRxA1vx3VePg5ANzN56HjWSRCah9NXpAu2SFm8aAYhBv84QNV1si2",
  "key9": "5aXuuhoSoduJESXvX4kJUtUrtk1arSX2iSbvRkhbYt51FC7838vrj5GJs9Lg7nw2mrcCu6KaELiZkrz2AKDyML7J",
  "key10": "RVxrtZtPbmQLZVMMitp6EyEmqdDJaoHQ89ouJpjudxUyWAhgJehoFmXA8LMZe4NGrvVdPpcydGPpF8rRAH7Kjsx",
  "key11": "5rWB9igx7gKGg8QVPLMpsTBxBf8Wtrx8mzwHvXoDFjgPFhh1RsbuQD11gtQ6dbfWpGRoV5KiJruV1KHejhRf9Wqj",
  "key12": "4unZWaiivrVRPx8yedHyd3QKMst1E3sS8SToUiHRYR4SCD6XomXiYUpFUovDBS9uXDu7UakTjWdDC34ngDqKQt7t",
  "key13": "2aGqofMnBr78F1R2UVAj13oFCjjUcNJvtuh7p88e7HgAEVvEioqbLoAxinCWoQYBxXVBbwndysDbs5xxhDc3tv1E",
  "key14": "548PSvCu4RHRLvwPJLPBmk4kebCGc9GqM4A3X12v4PRKKeQFf1XKszGp5dbksdrpvYqoGNSZBiuVSVwjKzVJcEKr",
  "key15": "366CGwNYncDBdCFfeKZpP39oWPvAtMY1YXgscZTpeWddyAjXR5wgiwEpLyP6qc3nApa39LJrD4CkuXf59GyJbQ6S",
  "key16": "2VADL2KMx7ShvGzQKXxEeyTuVzb6Lsw4K8MuEHavBKWD3JD3a8mtLxjon28FcVUWhCbWi2WBUia1qT2KLnGCqcQ5",
  "key17": "3Ab7gmrQJ8ZjpZMVoCafgZdSVkmR8Fj2cfoZursdw2r4bzueMPY6XRYsDQ1veu6jhcxEWAUsNqHSpLQLaRvkT9Rn",
  "key18": "5k4ULGL88WKXCzzBPeB15FfHsuxmBiJ8W389Ew6fCDQwmm8u5Fm4RdPqjXTd46xbFrDkNeEbPt37LYUH4m6AfWFg",
  "key19": "2DpxJa6ZoXZ5G9FEpjNR9UTAhoPrSSY99aiqCSxUw63zkaeAVPDK2idwyf8LUfVjEEmKMeHPnj2H58xwMmDpR9GL",
  "key20": "4frny6fuEgmSRw9hapA2ATBj328wzhffe1iXFRBRjSbCs3dqU2sMG9QgXDK2caycDoVCaFD5gyig1PuTQS9ZPtRF",
  "key21": "4MfC7UD1kb5Uo5fe3JfTHbcsLsdRnCJ9mvkuNF3XB827Yk4T6JBcpr7XPhxovkHS83dyCwYqkW3Jmqfzq2qdcLwo",
  "key22": "5KxMSix3DDHuGUcvofzyF2aSVivtkTnWWJNA3oUinRCa9V2DTQdgQCqYMENENMoJmHMqAUR9bV8Hu2w2SEvCBzSB",
  "key23": "3x3poEKxgvEbSQ7eiXReU9tN87L79m59jGaqmUk79gmAhTZ3DorLCk7cFMiVCAaWPWWsLgzzpLRXvsRq18syUEv7",
  "key24": "HvKz8CYbJiZEmZh6HievwcoRBGrNuPGUxE1Jg5CSUfteHW9dbaQLCiaW1BfNM9XYUKNf7XqLa7AK6cCmvqxPrcD",
  "key25": "3k4jwmbMEehKkrjZiDks99Kgm9tzBRgk4R7hw19dpRhp5zX9VXHpuqNN8C8qFQzwraRezgzCrDsaSqrJYWcnmnu3",
  "key26": "2Wwt5DjEctUNfaUU488FRf4JD34R5e8YfTBoB7A9eyDvnA9BYkhKwrYj857jK61RUaesthRzvEfgQGzSmAoU5Hmj",
  "key27": "fw6EzwgquqpJK8BtBkcvWE23n71fWJyWYFZFayYNhsVshFwUyCdht9kZbQFV2Hs3MowEaAiMowEE1TW1j9ebdDK",
  "key28": "2J9F6yrGs4FrBvAoHcZU1ARyptDQX4PY6fmL6GbQEevMd7eSg6ftjCMRLkWnPBZomdaDcQSndQpMZtJm65fRA6mi",
  "key29": "4HU7Y5FSBrASC4SYsGMtTQwr7HEp8WmPCGd83puHCZeEcuvNKNKSybJZ9RH1R6d6piJr5HriVtpud7hV5nVxp6zG",
  "key30": "4rrzkpBdXFjoLyamCxFD1DdW61kLA4TzJxi9E4QLi1wuAhrbKqqCLwqTyFuLxeswkzgZsDRnzYGNa8auc5YvJ2Uh",
  "key31": "4YRMDvnqddkwc6FAuYND8oHsBpmgYhgXXGG3fkMiptDDLHSQDwNA2CrKM8FrDP8eJJktH7AKC3YU2z8BU5YBXuJx",
  "key32": "31FYBN5t3sZDrPgEZrGSvFncvpot6tcMxnz7fNpd3mUto4NLwroJMGNjbcHqqapubZ5FpVBjzMB1nTyxFaB3qCd6",
  "key33": "3HVLFFr1e2YMJqkKxeiUwzfyGsSVcgG3gc8pfFhgNHwFjrm7EUbDPeLuGrL2FZMnhqarbv4K5YxqYRPQZyPhbzsp",
  "key34": "3RmJf8kzq7SBWna8NseMp7iPpg8uAQjDUREbTjQdunoeE65t1xkihRSUq9CFxq8FKYe5CXKTmofzmQ3PG7dLRt5T",
  "key35": "96nZAFMjxCjyaTX4DHZxEJFoJ6HEJGG4yceFCyAjRqm73wPNFupgzv6bJFw9AdSW8JeDkVpTL2wQ6RPbwm6ZwKE",
  "key36": "ai2onkn37JC56Pxsy1kuM6N5GD5RdCwKpEG176CgPhzLWCvWxZdxMzvDaEH3HnhmpggknjPNtJYq4Fko82qJF7q",
  "key37": "2GVanyL77AGU3b8XBTw11PNmLqC1MshhtZ5zhw8LqRFhbzYanj2sk6gz5Y4N9dTECTSrK66wMLXzYaTqqKtUncPk",
  "key38": "DpfNhGWDQJssF6DFn19Bm5zJiDCDS4i9MYNmdWAumxdrD9AaaGhfhD8kvetpH16gqpqQHzgfJUrToCBoMn9hCyd"
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
