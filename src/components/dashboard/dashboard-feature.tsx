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
    "5jZVkgnZQBA8tm9vwpoPqHWKX24LWSNYWKYtp1fptDFMaJaU69SWt4s3yPHRWnFVCXpBSVyNN2UdEuVXmbWbdo75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUfuXELaD1CBJnRhms3nAr6gSo9Pb5ivSjJufmBCYZdpM5xxjA3B8wweShQrhTjMFLQ61zsra8QDxKzsqcdd66Q",
  "key1": "4LfRMwkmBicpT3yJYLYiD57A5tj59RZToLCgnJzMbt3gNVqVm86xoy7zA2iCRsaZRitAQPbgw1MCDHAZTtnn38GB",
  "key2": "3noLyxePCk1vrPELdFHpQMZ5aTQ8MYqmyZgpRxLpauvnSgZhUyiybZquxbqtvmNJtLBxNJsBVmNCFude1FZAwE64",
  "key3": "5HBxLcSwdytuBTcYyefiQDZN5qJvLj6tjCq1zT5aD6M8iBnm8tV193RR1A4XXuqFVXKAxkuGHqkwdnrsC682w7gZ",
  "key4": "2XSKcobUss9RPtuJWBR9zRbBXKRvhxn2PZDpPe1A87npTsFSEHhme5mTxePYsDztEJZRwfYPhhfq4oCZLRBUvC6N",
  "key5": "5uqG3GXZNXpC7MgzZr5MR1ye2PhdW2sUtAyZjVEcJ6RHC13KkrpzMUV8JQWAgJKVN73UAwKBgbqE9UGSBVw95VSQ",
  "key6": "4HL7QAaKn9QMgkQrtj1g2B3tCAa3k5LoxCU81zqcNbGpxRoMTm16VFh8Y6XMvWUVZtrP77RX6LgjaGZPNDWoZbnX",
  "key7": "3ReNCpUPpjCnZS4fYSyY6PdBYhWS5oiLGJJ1yC9q9xtGSUvvUc9xytKafWuXhSqVjsnxb2dHqEtHQnu2r3oF5E1Q",
  "key8": "2q15NvhfJ8r7MjQsMgcP6BpfugqW9CW9ngH6rENP1iuEkn3W5rzYM6B733gMD288UnZQerfE6RXWWbisZJaPEzR",
  "key9": "3qur1Cje5bsMKCRfGp4x62JyFoggLbd8izPVEuLQNb5Yb5on4TpxntvCgPXnC4YXFB5ouF7xPHHQdereHwrVEBLo",
  "key10": "3bUFmhyFmLMHcYfTUZPWbaU5axjsBvF5VQ2qnPy2fvEBhF5YFfB8FGFqmiE2jD1H8d1Jy9yJG4nDMKEy6e3jR6Co",
  "key11": "51Jf8Ni2kgCHRsNQ9S17mFCK6ZfNbKGZ6M6k145vG6tnZRux55kded8du1XYVW2WWkWTDDpyf5QQvbyngUfus1zT",
  "key12": "4pz3FUesKrLUGHQBCo2wRkC44mFUT8wHEQb3MadCzfCbrS3L8swVq7rBYzL3KKbE975tHxPQSjt5hNZoNE6d88CJ",
  "key13": "5Us3oRuSrnfF5peVaTZQJFJKq5ap2AJDUnch8dwPgbjnwR1UHQ9u89c6Hcz2u4jSBYfZnk1dSJqCytejXwVHUCMR",
  "key14": "wBdCt3Jwmf4DdyBTMWWg36hUdoKRyX8SZBvmvxyR8WGXD5otwMnt81fNUX5MNm1kkUYpL4xZpTXFSbqcetPX1t5",
  "key15": "62BJAkiWayXsrt4VCZkbCg9h3qfzMvKDqeirpBufpiXbAbmWouEanQP6Q5pYrdXiwKtExkV1NdNwt5EsAHP4kTwF",
  "key16": "29XjRe5nQ9FtrJCt1jVdWNigCrXSRARJ6PtLL8NJzkmKABRpefWiVMpgwhShywZVqf3QTLXH1AWfKrdc66rWE5vJ",
  "key17": "5r6QuoDaajjYs4uiP3gbTncTsUtAMYLMvQMq28GPVqL84Spt418kfJ1Hr8CsmVt5irAGvY9Gn5oRBCNP3LgsVy25",
  "key18": "2XSwMCh22iiLCATg9aqB5ULjSZmSTC9WHyXpRoTuVpcu1YYjDZnMFzG8kKVi5c7RFNieS7vXsDdvYKu7AJPdL7ok",
  "key19": "2Uo4VJ9bfcj2h3kHNWDV6ZhVMQfYV4diG3UmPkV9f4U12smpvZ4bMvY69t1PMRxVs4sMTXv88tTRAEG6psHZYTTb",
  "key20": "2A6HYvxzqdRqyeQ9PbY2FTLyxS9LtxA3p1YixRqycUpGAzcygnqQg5uXtJB1tEtDR5BEMsosN3iigom73q4M7i3X",
  "key21": "5Dpeip4g342os4Yj6Axb4Gz5Y4phcwcfuTFVfaMmS1dypwV2DkQRQZkyDN5RRj4gb8JWXh6g1rmUTm5UZusK5TfM",
  "key22": "5adS2x5chhVka7GXn1k6LQuV3CYhLBrpCgGsNe3xa4qQNzo7frpVSnqAe79RVkDaxLaJ2V424vyiD7HKd5a1LNEr",
  "key23": "iXppLFaE2nbupbHUcb838VXk3VW5iF8XTWc1yZefXyxY75Jcw9WSzmVfJwUALoLKbTLtTN3UdwUUP3qP17BHNBs",
  "key24": "2dgydiCafZ2Y1WKqx4fbn9fUzeU9tXGQZdqBZd3r1X3YTgdiF8fFDNvq6fsWbMXcWaY2UMTCw3Ppagc6euhMAKwk",
  "key25": "FJLk1KiXAMfeXfo54L6Bg5kk6NxvYeMT3qffU7RjxAVcja6ZqcvWb9Fc586mVHY1Ph9R517yQzVGF7XCYnqkjsL",
  "key26": "4tTxjEYvyPXFRz1NZ5PiMdoWdEhr3736sX7AjxujWomHbmKbGk4HeJcbw8ZAFTrGteX5VmWu6YEH1KqYm7zTwZDN",
  "key27": "5C6v3cSn5jojcJWw6MaFYbT1rBQsCZ2ZxejosQQ1C444RhLQL2yZyf4Tc4EPXakNHTd6QvizFKURh6aAKP7NqYcq",
  "key28": "3XhENsaPH8VydfpDRNj5p7AQhvgt6GtUxkRetAFmwcop7pxLNWyL9X4BrT7h9dTs6dekLTTn4Brj2bGT2NjduZWJ",
  "key29": "4EUJpshWikcNpYVGozuZn9dA72a5gfUmkJFGpBbgtjp7MD6HeL1Q94P2vWhmSnXPpLtR1beiqyfqemwAU7Uuqspr",
  "key30": "4VLg6ovvoyaxDi5myPrKWoQhke2pqFuF2g8G8whwbvZ96YzraA2o8NHBJ9QZq85nAqZ4aAwBpasenEf4KBd6LBSY",
  "key31": "4wWMXFQeKwqUjZXr5TurHbyyRK9hVMTRdmxyGjvbvHmBG7bJMeQRhVGQQaHQzbWPo4Mtd9wEPRPFMCUWApiM5zob",
  "key32": "2XXxfVgmH5MA7cCGPrEC66VWX1ZEEeZJ3rvppkpaUJNrjzhNXJ84PXmBqoLfSur1VCZMXhdA7KUEmFK7uUrmxqbT",
  "key33": "5r2Shys5p8bf35H4MC789oEAHcq2P2GhQakqsB8Kk5nzLuRRLyFUn61Br7KTGHZEjadVbr3Xe82pA31x5wujEST9",
  "key34": "3caUPkPaQCBy6iDkTPjmd14UmdWMDjh9DsLYjbirwVHFncPzJkM689wSQ4UNTNBtZuVq9WJ7PMq8iwhWfHzUnFhz",
  "key35": "2pyb1WzwM5gX9USNpCXLz9QtWxQmxWcrens4W2MzjL6Dyn7jaNmJLs5Bg48AvmMZNSYLXYY9SAyw5WUJgeS6YrXy",
  "key36": "3m7AkSroRanSxwhZAmZQzmVZVbV3QdebDhmyyxyeG5Hy9b7WoAknHrfP8oZMyEtowUY3BiCUZTAXR8axxMdo4Ldr"
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
