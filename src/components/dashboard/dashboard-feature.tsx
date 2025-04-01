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
    "2C8fHTSmWdKqZP9fj8NHEiAX92eX9P23mrzoMQ3iNmQHW61XarqZGWHJy64bUnfZxMD97Q6o9wJaTg8Qccb6uU3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQWKTWzSpYKdfjkcAupsLXF1GKEfgMvPTwFaWSnUX6a6E1roii5iJ3yCdvd4T3Sofj9M8cmUMmbBjXR6XFZsuHt",
  "key1": "3bsFj4e2PzGbcN5JX7oYrUkc9rQXRjMtsUuP1U7b5ks9kDW3oPJ1HgZDL6uYKKCjCyuJfknLZpRUBxgYhYtKJv3U",
  "key2": "W3qft2Pi56RN8W3FqwYzqUCLPx1avzoaKPcM4poon4ApMKPvjhEtcZXsnCGwGHpLJLnv78D9DQArLmDeuPChN5d",
  "key3": "3sx5n9jHfoanzUudAtmZ4Q92QZxgLcD2S2mNdp3EztGwkCAsUpeT5RjR3wBTv5vqMiLAJwhqrLKFLgMWeCV1R7sc",
  "key4": "4GEfVs1vpTKBMT18XiDPrc7xiz9SW121e8d3q3LDKRniLjxiDsWawGEcXfgEndFcbscKjXEBVLE15JHBTUbM8gV5",
  "key5": "5NA3AFzCD4xdNPBPnwXjJUjPCvmd2yWeiKFo8oho8e5swkjJWheyad7k4RPziwFy2aJQknFnbwXmxsLzs2arabjD",
  "key6": "5U8ET4qGzf8PahpAquGtMi986PGUKEvw3cEhoCWtjL1HLewmmeKJvZB9PTgcwnwVAQa4vsDWHPwNnPHmPbBfvpw3",
  "key7": "3GseqYfUdFeqbfYLpqVywXLTLousXX3aYbx2sXgHdB2iiMUjpZuvCZf51uQUEdXWWWCX8B6Np4VRfEVVa12RsAvo",
  "key8": "5yRvfiqge79Pz4ZD7GLbvUL9CvmbK4nVwbTdTfp3MrWPAHoH9XReWoGnzmcrDXMc3NCkjmLdKgvaTAcBHH5uKHbb",
  "key9": "35vP46rMhkT9uASeQHzFpSZXbZARLn6GidoJttvhDSSaUNXGVGXUsbQThLNpiVpv57t98imF6rQs7aRBo5jJVabW",
  "key10": "593Mmi4aQt41rxEpJET47ZT2e8YA1n9hgn5hJa3YCgwmntqr7g6vNAsKWVSwawxZZcvkdGxRuzPiiS8aqbxUErmY",
  "key11": "3TQ54huYkpyRHXLiFH5gUBP9jehpdNTVB5FobKxooJ7j73fUs6MMFhsdzN4GX3TJhH72Gx4ciEunz5GE6zCGaKQ5",
  "key12": "23Xm1t2RHZHqWU7CpHQdHarRBCmyurfwYJnMXnuQNcmgsB86MxDLbiejudAnYVDku9RajtnmyMembEsiwnhjyDyN",
  "key13": "28dm1Wu9vWFkk3b3HNebbV457tcsGcg9xRXjCHxbcQhgWbQeNncrcXSQWBWoM9VsGGZFEucxws74V9E8JmetmXQd",
  "key14": "46J77Rf3tpCVoUPTGWrZge3Z6x64qPudc6qZbPHVjoZ9BgRvZPspW3TJxpk9eHW8cu63mrVqqb1TLQtum1pdj8JK",
  "key15": "2dNuQ6H8pgaRpoFfLGgUfuKDJjvvT4j9r8GnA9e7x9XijAFYGpJA7scqm5yjkjHYkuZu8QoHSF8YC4G7LfCCFRfo",
  "key16": "2N2TKoF1Y3UiEgGpmEzQDUxWJb9FTB7moHkVa1naJCiRkSNSEDjj65TYH4nnLDRCQJbEjnPsuZ1QrgKX1dVs66JS",
  "key17": "3rddY4nVghyBMwLZ2uhFm873961nDLnGaH7b4RLLNGQuoLvZaoua7RiJ1H9ix3qiDWpbx7wPJzd4Fa6X3pzeEfYC",
  "key18": "pLJRVAiWZJZexybbyfRfXuSFGQXHNwyC47wFvq89j2oU7kqGRtNppdC5pFCScE69NXbrFFT51qLMJpoBpFRtWfM",
  "key19": "3PrNycPtA24dUfco5gkpipnf1S2ttLTij9EiAmmPTDfbEidNkrhUesnVksXKJ1KesayTNeZA4j5hpauDciSMNn3u",
  "key20": "XjPHEffeag1r666GXZ2HEqQn81mAyY3mxtVuGEf9126TfHzgb7vSJyAysw7yVziv9zBrsrCBz1uZtfQ1PHjraJN",
  "key21": "8i9PJ65vee9VvTEBQKka5qY5qbtgh5zmCLHjGPcQHEsamzpzQMXAnFumwfYFcqzYZhPffmedABKC7BbebYnhAt7",
  "key22": "3Nf5gA68rE5n3KoLQ2dNUTjj1uiy54nPcigBhdqq6HJdtNN7dUVLw59iYumH4pDk5NZdPPpyvExTm8uaNxV9WiiG",
  "key23": "4mkMsw9nPGStkqBCQsAGXcibCwWzAsVEeb7dQUtLv9Xm8sxXZBJjeLkYnegHSNJHcLcjotbnsApCYCyGfz6XQamQ",
  "key24": "24ponUoqanaDbtdpkWypyW6uoHDntHkRS5iBZXCQQiuEdTTSdv9sXCSM88pi7xkZvgqCYS2DykRDVCVBJkNDRz3Z",
  "key25": "aYLMHmLenGKhxLVxWBBjJ3xiP8wW7D6Md8fjcsZuEWqrMgunMsd9ztpoWwTyJ6p774TkzuzAmwScbvoQZgkYhUd",
  "key26": "4g4zrzT5yvNS4dUMzDLVtqhrc7u7HNiv7C1jMNUzPbaqqDfd6v4NcrRaU3rxqhujsjscHLWKQrC1yseeopbtjgmr",
  "key27": "2Gjiie4k9YszXewL9FVnKkuDR5JqZaee736ubxkwYUuMDFQCmu3WpiTga2Xz83x4Z3DLvLp2zdnVmquSM7Mhnx9B",
  "key28": "2vEcjTD2eHhjUwsmQRW1JEi4j3aE9hbeq7CL4dQhEDzyKsfgHfwfh65JSZrCKpxsHJAPRdJeN3ba3wWmQmxCBFWY",
  "key29": "sTCRsJnAuGWJFX9FLfkZbmPQ1pb3mZ15TxteuMkqCiFmJ3eNU9cMVp4Ro9qBGqkgXBuoAubdg36HQG9UeT94EcA",
  "key30": "4s2Yyh3PMfgpVbfJnU1tRXaWG92udh6kdZGc5unDXsiTATGwoinxNpf6TcjRJHviEs5Wuc36Ghy7zPALrXUhspj1"
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
