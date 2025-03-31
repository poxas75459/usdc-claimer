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
    "z2rtUsQZAR4oKT535wcn3g28kVY1EDaGDUcyyqPLnf6N6Ys11JkQ6WZWxzkxsCXPkXvYtp1GNUM6ZME73QfweV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LJBZ8sSWVJVbGkHLv6qLNf9RvmQK9WYFTum4saSR9cEqQwU4NeGZMHVC4xvupTMBGiPVq52S4bHo2XdvfV7dKNf",
  "key1": "5DkMvuZaxMWJuDZsuVqrnpzuJfrXx48KmJcH8PVw874F9Hs9iopY3phLugmbLPnDqFkYuSwYuFwv4af5n5pY6duK",
  "key2": "22YgZKQaWJ8caDavFh88rriXNUYr4YbX64Z2NpaqDDWH5UKu6Uo3ZL7WBSmGb5UpHjaUoKBDP7qppCMukrFQNSBY",
  "key3": "fiMULE3zfveu6VWve6WhKXUNMuAH9tsxkssEtaPtT4wzuPFmxPqg91MXxgQwoSKwbJptK8wJc3zMWRsVawiux1z",
  "key4": "Te5okUaHYdA87bmhczvHB2nYdSemtfzSBmBxzkxrFKA8ChoAHKmhkE4UR56N1EmZNamLndYbjrpWEpdip5yeacM",
  "key5": "3936GieGGBaaaHE7SVMZDswBaZXCcFxYYQkY2ySaYzkDc125hZf33uoP2fMomYeTyo2XgFVxeuUZMkWiccnjjFzR",
  "key6": "2Uaoj9TgFiZUa8ZHbQEceMLYLM23WVoWuLcbwTUPxUfxPrkB4ByxgRbn3JJPaST5r95NJzTmyBUgzJNU3N5FJ4GG",
  "key7": "3tbmWoX8X1sUHCiWvE1sr25yZnM9oUVHNYaSEHBZSkiz7cbYcruCB5FmwNZzEqaJiJL7R1sFoHrpyhBpQ5FMF2GY",
  "key8": "2ecfJ9z7cHqf5gv5aqkXZANTavw6yW1L3BTFoNoUdkikPEYYiaWYR7ipKq2NVvVbEgceUXn7enwxLuqy7rvfTS8e",
  "key9": "4cP9SXrPKty9dYKp8uBw3xwwNK5p7YBGzLVKRsFZp49tZL3k1VoLUmtcK6NaboJ3TxrRPYpxStwmhrNFrfKY4GWr",
  "key10": "42bGBoaPH6WkDnPurbMfJuxMmY9SVgBWMjkqxjs1DXCX4kSYv2fW4wSbAZv2qixUg9NTsmeEefR1Auf3oY5zMwvd",
  "key11": "j4HZhGPnSURGMZpLYfWSDRoQVPuK4KRLL8c9bG4BzvVRHsFhwveLXUzGZo7yYJ8WVh2SYmif3dV2BRCMHQD5Vuc",
  "key12": "2TATR2Ud4iWj2emVkm4a7yFdhsB8oM3pKg5XfPPhWaic1DSCuVnomTUKfn7L542HsSw1aNbUtUSceEEVZvYUBmvd",
  "key13": "3KY5SQYcCDpHVUv3hnx4UBZWugjRCaW1kPhMY6oTDntDDQJTstT76QTW2u5eH2ndgibygLyVAcVYokhNVwuR3vF8",
  "key14": "5JuXTDD64ebb7GyXRPJhEWcr4NbLs1tNJjaapm4SqNBvmeRqxCSUNtZKccMwNRUW6pYe1pRJBXs4R3wSqyJKDaF3",
  "key15": "4seEjMncBGhP4wtt1GVcxGD7vwrNmu4AbrBJ5uvX44FG6L81qCMJBPqE1rXXn7ErXXkAWQq8vNfi2CkFooKCaKdW",
  "key16": "mSFj5cwDxTVwqFcUfEMPtnf1fWxcyMTYCQDsrckAAz97i2Prp4qNia76GGuMo55pDuX3ibqEQSc3NK7cfpbuMmo",
  "key17": "WttjCAQyaoS7FdW4oMoQXcaLyMYqErH6U961aeR23KbCWyzg8KH2q6BPBvcNUDY1gdQhrEoeVWWdoVrTmZvc8nM",
  "key18": "436mjMcq5dLwN93t9Qa5Cq5ocnG6TmcYGm3pzF6sh1eup4tdbdSdUBAhs8st8YPyepyo2XU8ktmT7bRe3nEiQBP5",
  "key19": "AVnbBQpUpTZuUw7ePAkFJ8FAMLF25h6uY3bBZSKzbhcEJ9D1KmtKfJ94p3B9YDgw6c3GHVeCsqWKVyvmsZwSdZ9",
  "key20": "5mESwTPm6zV7LjkZH4BJV1RbgJdmVi5CbijwB3gG6UfYg9p7Sy5RrwnxawhtZB3c63ghXv5hVf8ARDj6MkrkDT7p",
  "key21": "2ELTjaZgWbUNYjeUrto7DDpKDXdvQghDXYrBikPvF4w6W6266qBLY4HX5axuagrXw413SDwjTJja591Rur12hYsp",
  "key22": "3bWUK1WWjg71uRz2cuSDrfr9cbCoBtu566T4Nye73YpJVVKsMw1dcP3Vi9XV5f3vP181vGpzK74SotBMdWfr9ep3",
  "key23": "3HT1LVzowKF3caLiCfLm3cEhKBbPkSd48LNsFrisB8SV5JwpwLg5o6sL3UQ8LyiDBByTkbYf59G8RFsDnWcE2R1Z",
  "key24": "2vF1x1SPERyN8XmyvGpthNWCMsVNLmEh2fFQ7xGpczFJFEPqftx3PzXGexTbKqXCn6UucC85EbW2MHnJWpR9Legn",
  "key25": "4Fg111HBK2vZxQ5eN4KBM19guupmJ4KPJugMPKnDgSDNVnULUVFNStJp53imwKKTAUt9NkEhk8sykosSc3ui6b9M",
  "key26": "5F7fKfLWDtXN9eEqYJC7vwrDzDnGVCBFLTtcyF3fQrZcUVBXggwaAXckyAegLPCY8BD2qTzgeF28AMxCsWjMY43N",
  "key27": "3gX3FgFExyjCwEvdiKWKfxKS3xEMH2WQddtekFdY3cwAvEoJj6drV2vWD8LBHC314AcbBKVz8hbZSSBwnBuwq4FC",
  "key28": "4eV1vgGqpydKB13eVKHwGMcm1A7v5WhdapJC4hJag5gPRx5cKrvJ1WYTcFxP2ev4HJxdLqbw8VQADt23zvrtkbZJ",
  "key29": "9sSVytD3nwNNLqFxYVFG8KpRypmpp3uCpqdczXNM3cTqiNETMYBLok1kRv8CpiaEHyYz63WPGLgndgHquWfmiXZ",
  "key30": "2DbMbAHWgzk4t6pbU73tbzgggwZ65b7jzvKfW2reDinmAh9dAF8K1W5ZC3gzDoUrDq8dT2B3djiDVU4UnLd3ku12",
  "key31": "3kNDctcBiY7QKX7VxZbzmhAXyJGeVBArDVtRB9WUTHwcLCZHSJ2j4XjX7UeA7GLmpE4VHsSs7jFBzyqsF4Rx5QZL",
  "key32": "38uuM5uDoytjHE5BkVPPHsqCTn47iDy9ZvJPDdmb6LB6x7xFRJHaHhGVQZZMTCYinF3s22igaets5jKZdjXWympU",
  "key33": "34umDU3qDZx3mfWP3CQsEitpGnmNnUTALpnqP9zQMDpS2Yd3q18QXvZQZ6HpeGV4XsHzCX1E1mCN3VVsLxokTrzN"
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
