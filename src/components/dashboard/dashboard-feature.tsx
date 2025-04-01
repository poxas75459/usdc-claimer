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
    "3fziDB3snBESdbxpAbphejZJkjC6PShNCdjMMWrearU5cWe1JQaeiMpKPyjtVyx1cvo2UNgb4JcBQ6JiNyrPFAsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qaVFhZNJcmsKdDV5WtY5PoSSE1Cv6UJCiyuiKx2YEZTiLvqj1qCFaUTfxQVQnmN4VnSyK4MHPPbtttm1yeyRPxG",
  "key1": "5VGYntkktmgbRYAafahTAXe94spa7vUKqA9aTRq9pGxZSitwarBbUpaFH33p6N8bvD18gZn8s4BXqSMRuwWhTDni",
  "key2": "4zjtA4VYAbrYJCgVVLFzh2Sn2C9scM3LBiR1FxUj5qMY18ug71Th2m7FGiEqjaZxbWosDZVodxB6opMAqLPw8gGt",
  "key3": "5kXfLhPbTbpY4a4Hmqh7cb2n66UmcqRfutEE2g4DnTTB2tMnXoBTsCg3tH4tvjYwHdgpQqgnD3RWw8vv2h2xRFqW",
  "key4": "5N5B2YcPa3J3JcHZ8GTv4CG5P6VnDSv8XzKKUQRaSaSd7HFAHQDmhNUL6bszsS5X7tTbdT7XKTo1FuHRUPMY5ozT",
  "key5": "4pYuQpAoJG7YCNcnXf8cgQ5TupeexMczGo9DsxVdYxTfjaXjvgjC4kwoQmmYYfdHCP6YogKwRUQak5t9ztnkfUGg",
  "key6": "7HEEpZDq6LkLdbAQpuyzkkXAZq6gVsKXMG8bBwDaRoFGLyQQwyF8kQ29PnrXTwEiUW9fQEtDJyi6nbi6eiDki4e",
  "key7": "3NrGcqrefcqHNNy8ki56FBZXWwZqxDbjVYptT2ugrowbgwFhJSAL7za6F14VfEq9HegB1wm9wP1abWmoViA6LenJ",
  "key8": "h1SS6wSqkmvzqBQPdCruYSJwMPKruiAE1q6hN5HQct7d1iLhbXfNqs5vtfaxJZNR7V1hg9x7Yxyr5WDnmireuKN",
  "key9": "121J114FUFRxmrQnu9rbiPo7jvPca7vHYyFup7ZKTz9HVbe8qViq3Q1MWWbLiktkk3YuzPJSTnCgXDwcRxHUuDC6",
  "key10": "55eVExfvQj7B6qZ1BsJFWEYJseKnpbrpqijH7xatnH2JsPdwrzeUCchLxRXgVdihkdJ9zWsD2iftwDLTVctqVwJa",
  "key11": "65QX2jejE6DHUuXcemitnuHaCUx2UFdXQg9vvV3cjJCSPbRPRnWfqQH35k6t4xwhREpSTM63nEoxoVxfNUyeHLCC",
  "key12": "3ugi5Cwezh1vjk5PwqrSFM9BcK5niDKrDAS5fRqSgGYdwW1nyD5d2m7Zq3Sm4JPNDMcKANStDDz4s7UyCm96XaNy",
  "key13": "jMygKT6VtzLgdzpfR7n5aFHdTdkgJjBnQmYmDhGLS4jeBN2Va5R6KMEhzrQqKnNFmS2tuvE7q9i4NNVQvd7p2EC",
  "key14": "kPpu8BMiFDyE3GfBTteRUSGQhnGHMCiisJpVQtiT7cqkz9MSXWPUA7H8KmKhFqpUnx3FkUzBxvNUno7QmRYd2Ao",
  "key15": "4XFYJFG4XBpdB94zSBSn1xJxZqcF7nfLEHrpxBBKMm8A8XVw5UGa5RPGHvWUjkFpzLQ7v2APbCkrKLftPFWxvn1j",
  "key16": "Ui1vsdxpP4F9XQ5pVoVk4XXbkrPkfZjULkx2MX1eFAz3JJn1eCatq6ZnMVzXRYVSzXx9DeaAhdxisRfZ2QXvQ6f",
  "key17": "3gtBv4oHLp8CPAGYqgRNbd23q6WQrDqPhipv3czvy5PoCzg8B4onRgBZP15Q4yw3oynWjVYyDt715xqYrZ2t2oLt",
  "key18": "2zFNuTFZ4VCyfwZ1aP1czNWVmKfQ2U8hnT5SZmChaFm1qyZq9FXtLmgBQz34FZskfeZfrpjZVNe4a83G35wYu92x",
  "key19": "36mFAoywTsp8696GRENYqM8BTstpd2srUocfNAFbzzdsxmBrCtNcSBvpjHAjL8CZsDLBmqKkEstA3i4W5FQUG6Rp",
  "key20": "38T1AUuNweqCvZrAMXkdCtegnw6sSGbSkPzgNWgmUDcVKAqyxqd2wbVTbYor14zf7DzEh3k8UsxhYC2RWNunYNyN",
  "key21": "3HqJVd83QSWBMiiHMoX1eA1mVEQxo7mRF898SNkWiounLAeahsYEC3ymtvVbhWasSVygUY5zYcRV2jYfLFaXFdYN",
  "key22": "kZxx46BBVPT4tjuJsoVd7HNFt7wS7LBobqCSfG7Y6NwK9dWrVz1noT5RHGLg3Vi43gDaWPM3RGxbkpZHsrKM2A1",
  "key23": "5xHcvhfFtRbVX4RDaCQFYbMhvH4kqNRPgqWSbe8g1bDwN6qwaeWUEDdoEvVehHSx65kDeiQN5kBmB1g3FSPjWKsf",
  "key24": "3TdpT8JTB3psS1kUVdHSA93BYVoivqsPArxkkc86KwUdaLNVVJnpFNQWLRdVDCpsJj2j2isazLThp4TMVFSLkNoJ",
  "key25": "fBgiKP9KM6cP2cmEyTb5bw68ZSizUSwnc2Fc11aumcM69xqh6Nze8tMpUvpeoETxPGByXV5DDATQxzGLeUmMxm5",
  "key26": "La16QadpDGGr9i8C2g6tAw11KYUUzWJ9zbrynJjnUruRCMQuFPTkXyTHucxm8m4WyvfqNckvrrgZF8hPs56J8eb",
  "key27": "2bwxE5yEgPhrzgzfyxtTz8yALqueTxAPaeiZsZioEAwVGwK4no9FW7hHErQjLi3CprqfdfNSfdcjCCbMsvJPxdFD",
  "key28": "5kQWNDwoPYJRTjAgjqv6gS8Am3Xd9K1v5iRoKwkrNykoib9oK4fs15JMLS4GPgHtcy2f19BwJTpwzaGsTtL1ygNN",
  "key29": "2V3to4YYFLQQqAfnvPowgZoZEm1Z1NLDrAeSetzGJUeFTw2XyZgGr1K6U1p6bfJgz5SjbJconcno5X8NsrBnifaM",
  "key30": "5nCQLaiZ8FPPVZxSB76JohAe39p6cPTC1qwQ5HpybGKJTmTMfwa6UpzdiLs8GhM5TTxN629gFBcvLSfETDZbdG5S",
  "key31": "2wJbnrdpafZJd3Tck6szrz16uN93YqemaPYn8VtkBWo6j9h7ALtcgTNTy5uPR1VKzGAjwwxySJjb6fjAeN9qEdya",
  "key32": "2ejWujivjonyiGTsiLWCo2PvwUoEsWRzzGX1ZJUUzS2zb3zUe39hRsKFApa6jB81NEHK1kwbD6ftxx2NXYngML8o",
  "key33": "3FEKZNAiR8zk1goVcgzSDdtNFwN7W9ZyyfhBspnQ7HskTQibiFe4QhbULYxWg9AYKJZn3JdspMF4wnAQirRU6PYR",
  "key34": "avdRptxVWGrPz7jyQNDBDxMUaiEaJLLGf1pZje5H3btmiHqkKCgJrL4uUPysotZDActRmGhsA2CZqRLy1b98D77",
  "key35": "4X2PZQgJ9eGHCNCwYL5vHA58uCNKwcT3U9eSFfXUVoSAxua83THJ5MNZXpmnofKjZJv2txc6XMeFumCWeEqBACXJ",
  "key36": "2kMWPJqNwC6q14j32HqRrFdmc72kSbfxqCtpx7Bbn4zRpozL9RwAtEz89jruKTr1FWEQKJU3adWRq5h64EeUxrwP",
  "key37": "3rv1zKaP3Z93vx5zRjkP2FTBwQMZ3tJTdSVDVtfHtieGXeiaE2GwqtjrMC67fLWCXaRwoDBkRNtokydSxF6pYE5u",
  "key38": "5nMBm2C12yU3UFWu5LSbZRJNtArWBGsWGuDnQYcwLzskrmL16E6LhaJ7sLRxJFuL46V82yWzf7bPqdQK4DsNauU8",
  "key39": "541wLjvATcigP57jScmF794EjakWd889msXPReN8YuHPMCX6kvzgmLMhXKbLQqmaPYWUQh9a4FwGhdagRqxrmsgw",
  "key40": "3nwChfmwgVHoY3dZeoPEhFWvcP7EYfajn1AjAiWjAzhdNEK91uZPNdqpeU62RqjQgWznrJBuYDCzjiARVEKGNK49",
  "key41": "GYErfmfvesRCpfqNnuHMxj3yRGc9rT3yzAohbQG7LJ1GK2bkFytzi3Ni6vsewBJGNKmwxxpKntPqFe5y4AGrBBB",
  "key42": "4UFdfAviLmg7qgNMYE4N5rTAddPqVDBJBnsYHnavFHm2fM7wUAfQWRypt839x9PDDzDyPgs93vRr8DhUGQNcustm",
  "key43": "4T2TYd8ECqA3wJXKRrNxRaP65DvhSEHor5aM2Hs6T62LRdm4DXTAknHht5NVToBA4Wag5dFGY5BGe6giV4C74T3f",
  "key44": "QrBNrS89VDXrUVD9pa2kJB5jo2csTkmuCAdpjZTUVL485EA7KCp6kXBMYffB9K1C5d1Ku8UTErjRHbjaw3xDxPM"
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
