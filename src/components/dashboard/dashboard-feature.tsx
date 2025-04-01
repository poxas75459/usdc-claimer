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
    "4V5y1nBugATHJU9cBnNsRSzA2jtSxzi1cBVaGMcRu5AU9PcChqSGLpLH8VsNi8rpfMfLni8Mnrf1BDwCBHk3xDXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RKVsrHNRPmHmB1KXnnLPiZGWmLasuxrpU4keBFLQoaLmHCZxWCtvm7PiH394KXixichqDiP2kSzLhsZLJQg4a7",
  "key1": "393tjwZKveoH89JY7uABko17D1sKoecm9V6xUzvVSZfZa7VniRC1WyHMW6UU7KMAyZy1QBf68c8FxVD5RQXE2oQd",
  "key2": "4EZa2nvyZEeNLiZhj3Vmi4Nz3Uw9omaAC5YTQdgPthiXYjo3uJ9sKFf4FnroBnKyoZxbujdYA1bwBxyP2yB49BbA",
  "key3": "2GciFAdmcqoGtuJC66xPuAfSAdRRDBrx4iV7dhMAGNVzSfiuBGghE69QW1Qnt8gSihK1V2DxZUdfhacKMdSMVCTH",
  "key4": "RXZEaCbku7CfCTA8PdRqgrV9g2RVWN8hpn6p2aUr9sDJ1siBr3uSKXonrrZQWmSEmyyEkkMpKdvG6ACU9CQwQse",
  "key5": "67dW7kmmyKAxZW4fVe2iKcCcxNqwLZ8g5vi6VfviDV7kvDf8Bn3WjtQM2yTp2HrXpFj9ccSenU4ZmhpUdoNwBpfg",
  "key6": "FS4eCi7rWGnmtGrEEJV5BGq6PmHopyCXMQPyDjj1ZyxR7gFYKCUoSYfHennMrewFZ9U6k6GehSbAXeB63gwy86L",
  "key7": "4k185aLKZE1DTiR3zTcvoyZ7bLrxqaCAxf1fHVejzd6BnksU7Y9vD1YrwXjMqx5mLiMmfPArBPnKFk5hzhm22UKh",
  "key8": "4zC686P6kNoy8LL2RgRLLtcAT9HLkbzPj67BQZ9saddaDFAYE5zVr1Gucq2WqaQSXBttRztiEiPSCHEyEo8mh3vP",
  "key9": "4eCi7k4JRwJdbBrWE2ewmX5qpadptAP1PfhjKHtVMSMPMmnJ7vfWPdmi2uEeoK7JLk6McCASSX7ScZS82jimEwqj",
  "key10": "5WGdkWasEZ1ZopcAB5Etf3fj27bMyyXt2HabBgh7Cr4sVfC5RTvehtYmSJTwKY2UGdKpfx3RqN4tnskQFtNTMZqP",
  "key11": "2yrZsJ2qSWa1rfLbQiRFcPYyaLNsndVeQWEankQdjLpRrk6suvJCRf2h7jaNZMDrxUaj9cP6EpsinAMkr5bQ8mvD",
  "key12": "xq8dujbGqsWQJAtT5vQYKsuhbg7eWV634XiaceqzSnu7oP75QBxS4kVgDceHuJrfYXJRcTBbMmmU9zQ96nCMxsV",
  "key13": "2QFupr8WQ1aWKDsVy8rd9NDXHe88bff2qerykk8xpa3YzdW3Dqi4KaspvpdfRNorExVtaLtK7KiLovg8cN8K7vEp",
  "key14": "XuGczATAcdJ2AjzYtYJvQQ9Sehduwuxe6qM7DA7GWum1YXzdZLu9yzvtK7pNpRt7eAxFhfkDcThphXvsTNvVZ6B",
  "key15": "5iLj7z6tvAMG76F1psk7n7nDbQU7LzYMpaXQNNs8D2TdXiEVcQXtME3ZmEM6shMW69G2CPwL7EXx6iedPV1n18x5",
  "key16": "oQxp2SjTEJJFjMDsH3gVuc8XrZ9Yd7satdNW1qFMmgij4L44HBd3dge3giJUpW1Ljo2puhN9FuSwTcw75ypGEwK",
  "key17": "3qjC5H5sW5dXb7wh8WFh9njn8ercQ6t8xGAw6TcAe3fRTSAD6AnQe9BAxwWJJKA4RE9oHofax4fn5SrBdpkLDxF",
  "key18": "1EhA3eUsMnb7zPYmNswgQm5ADWYjivJhXS7fmRzSfimkJ4mGHaHsLFJ7bEKgH6WbGmSrwxhCVK7BSy4ta14rW8o",
  "key19": "4LdV4jnKs6ddgv9ovTzpq5eA7AwuxSrS5eBzu5ExMXTTyLTCocusyMbMqK2gFFuq3xnHc7AGSseKTNSndy2d7Jvt",
  "key20": "4hhPogU8WzCpm3ivNtL2bENU9Hyu4BTwZGLrypLVK6s52ZLYDXmMkJLsKSsew4CxC2ZhJEQw2H4vJtfCiKGFrJ82",
  "key21": "3A67NAmivn7umwkGYwmBpckigbMRFNWfgb5izZbMgPRGHBQwd18uXXzfRjQ3qNxGB3P6vfHpAji9bApW6EFFDdHw",
  "key22": "2k7Yd37Md3GB5ySNVu4BAw6S4Wp1191ypFzqYnDhumvZrbVYFQVQvZxGx5r5mxctE9jGKbehmR6zpY8osHisz3uK",
  "key23": "2xBh2sptAQuRVdMguEjtujGvRiGg2H5vKVRTrygWJv89vcZmpFrWoR3PTxUavq6A7v59sat7fUi7Tp8fst44QoKP",
  "key24": "op9Ybji5tbAb2AV7PK5jiJeevcJFYopaPYRUbrLEyvM7qd48c2LDNuS8FNByHfiN3vfymdWPQJW2RThki37YEVD",
  "key25": "rTGdaba2rENsjUgGj1MkqTeCubHBs3vTizXoAfSBpFq7dyYbxoZgtVRKeLEjDyEmbxwBRBGdwkSfNew5VZEr6Vz",
  "key26": "592dP2AThuh1j9JLFXZZZHZjKC27urY1BNM9S2xh443erdJEY16EwMi6wLJmMXALNbLjeZuNSW3oNADUruLMvj6L",
  "key27": "3kV1vDTK44ztD89VdJLApgCT7qHPFhUMhDfMESvewq91g2SMfT4VHknYKebFe6YCTRrVa1hJRHqiAKxBEDR7TEMh",
  "key28": "2fUx1p1gTzmwFEZhLNqjYdivs5XH6oM3aL2kzm6iJUtu7vVH9DzQNWLQUyLWFT6BKuk84REqvinq3mJocr6ZPRbj",
  "key29": "3hrj1iQYNdEjy55YXiwTj7GunqK1oPhiikcsKKCny9xqAC5CXXRGNZaU3gvmVHCFBFcnDLAhVNv7G5tgSsWgePEg",
  "key30": "5wbtvcgnmA92yupGFTFoGdSfWWZq77juDk28AbaRiCWHWEHHoTZivJf7aNrzzk8vY6XdhPWh2sbRit6TjHPr1aBV",
  "key31": "4ZLSstZc3cM9s1BS9xDU3geXJuTSzSDUYHAPJtcpfjbDeJrfEn2L5Neku8n12ig3R5vUgtFs2NfnvzDQTdJxtGVB",
  "key32": "45n4yuGftDCHkMN7ugvHvf9fVQwxxTcFvHvWsyGgGT2S1XRo8dukEjjSmUTJeBmrhHZ5Kx7chR6tRDFih54oeFQX",
  "key33": "4eb5xEh5tymL9ahjyab3eg3ogUsxdwmKbxsBPtGeDvo7qwLVAUYmQfi543uGvoP13GC6e1LYRQ7jGg8nkNC9yi8Q",
  "key34": "4SDMye5MP1UXNx2QAhTYoARZyPGTsuw9PbPSddxGfWpquf5HC93m55FcdF5fJR97j68QcvRbeCCWNpS4qK6FVehp",
  "key35": "4tPm5UyKf2Qvu5Ng99tfPjkgDagbTC4pjsYxmaSgc14ZEh5X7u7zRsTFWYgqupApGXDvKwR9DrM6uzrssQfjyoUy",
  "key36": "5dSPMdD7MFHtjkZQERfkhjTiQgKohqRwxXG6fQ4iMBzhsEgAjv7qGcj2pbUPNncAbsyBoxwBmbdAC9eeVTVLaDmS",
  "key37": "Yittr2mz1NDkuG1ZsHGwFrzk2MKE4W9YLzX24gUAbUktzfDgwTY9ES8DzAT4TcfGRXdGawxrVaAWLHzNdZ5DmMq",
  "key38": "2hd29QbmTaL8rZXJ2w8xrvLSHin8Aa5rGDJ69j5QLYdAurpejn4CzFLhaKuApwTCob3Af4VQS2kxPhTjaw8ok8ZQ",
  "key39": "2cm8wr4B3p7NQhjhcaVNPrQW8GM3rVX1outeNegdi5sr2mY5bgu3AFkzzCjHMP4Jb1ShVkvAjX2Ph1KrCdw8pN1Z",
  "key40": "3kao33sJVPnbib5AQueLFpZkxrv1Hun8gpLSzf3e6inWgQDaTdQH2bmcqdMYmurS1hjtVXaaCVYrJ1QWUsi87kYK",
  "key41": "NyA2Yh6mkGR4Ta63133nt4w68z3VnvbAwdHrkcP2dbMzqpndRW7KD2e8M4KvwKKeuPbrZwfUYuYLDuPD6R8VvTv",
  "key42": "5R7y4Yf8YfZ5Vn8YgsxqfKA4i198Vi6c3UyKymG2Kbsm2dd7xssdwSxuQX4E9SfspSiU6X5zcVXwX1tB9h4DTZ5s"
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
