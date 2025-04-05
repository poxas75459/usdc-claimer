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
    "2riBpNv8yXydNNjLsTY4EcwYw4pTbhRptgfKaGHbwwC9LpMe7ioNfDGwWrxHHWnoUMSk1NnjwQwjZoVrztL5Gg2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LPcHUvyqT5zuxUzbK1WGmrDJemFCw82rphNmAt25WHwfNguXAjXv7ycnNXZBNQAk25NqC5Wr46McLyxBZNMQ8gg",
  "key1": "2LsrGks2aRtEPTRMF5s3THNJtjEwYesCXhLiK2Piaq5b8NAc1tnTvnK6U4d84Ri8o88LCwv2StwZuNJmDhDSR5hr",
  "key2": "g1maWKjqFYZMZa8XNd2cRQE1ao4wcCy7winmbRE82sst8i2uhQrPcbhcZPkZujFvFs9WiiZY3K2vSM5recYzvxS",
  "key3": "2W8q8i1tPYQUX3X3n9GHnbu4FDAVDtwfDnFuaB4nPc1JvJnjLKWCaAAobnk4R9cXFTUNnLkRX2mwqQEv8cp6SUdF",
  "key4": "xQZ5iqxz54SFkMe2RF4NC4Ep1wPXbHp86D1Xgz2UTNLnhfFLSiiGZPMWWiupW9SFVgBxuZW3bfXSL9So9fhfoGt",
  "key5": "bApsLMPHmHBULM5ngC2SRyb7xXPXeoqB26Vh363Loum6eoXXhSCVedJvtU7WDgWdygdgMeoDchnQpzPCg8Uskk6",
  "key6": "5iC9VkgmXREX4cUwKV7wiYiqK3R3nCv6VWs6VkLgydTrHVjNkoEcnFv1V1MZU2peb6rR5qczCeSrbmqifcjKxffV",
  "key7": "364ncbW82SLTztj7BWTbaoih6jm11WLVFw4eFsBuos2ZxmF1t8UMjpfu2z75r7Yb6CZgftFfZ3uzpjfd9SaUftwu",
  "key8": "2mhHiSD3ysks8kKmbk7Gfb1K7Wdd2VihLWTeuGAjWEfJMVr7KbhUjHTus9U4LDPbXywBQ4JVGECXsRT7mQjpVwBG",
  "key9": "5YBR3UcbqQLQFUNUyPsFKAMCcGyn918KZK8wDr5JSQbEBYqj4FCkwRMXTYyXvZMW18v8bx8Tf79i8SnmxPooBvUN",
  "key10": "4vVpvujox7cVTvrtiB1eLJ6fXhTdzzYWmN6on1bBZckQZHg3smZEs2Dqcv8MpsTLDXHEcjGxvidjTzzRZmsHhGdw",
  "key11": "3FDDrYMAJDVw4MT8jowpiK9gUM94mHpVngNhwddoHPdmu1RgrFAXBTkbqS6s6wqzfdoizmC4nVT9n9Yk8vPWyUTh",
  "key12": "2t7wSrGLEBaTfGXkCnEeX2ybezvwFSjhfDynPA9anDqVuzivjvfCWgxYQU7SoaxxvrwN8yYdeEb8JPcyb3Kqs5xV",
  "key13": "2wvH4CBdzd6jtwbx3DN7H5mELZB7FwYVtXuo4tChMKiA9zKnxpspMmeyDHoh5c9zS34w2JN3dh423S5xEPmMbLvZ",
  "key14": "2KuVw675N29pyRxuVQKxg8mkHTt6weVoLmNf54cmVgKevJVWpKe8dcedpvAdoKb3SoyytfrTLQ6WdEuu7YVRnGrq",
  "key15": "2HfF92ngdCpf9ZjhX8yCktPsNYVCSrK2X9GWaVcU8HRMHvY8tXw7MVLa1izwZCmvLErBvrCP5pcLZ66aVNnFmgVa",
  "key16": "2nywbV36W37y9ymzrpUfU5qcSnLruGqrMaGeXY79SVxKcyDnj6N6T2hREx1dw8xu2RKneddGee1ukbPVqJw3pnBb",
  "key17": "31JEVQtHethF4eqZphZdg4eJwH8DxFjrZkjwknkXAxdQAMKV7VPLykMcisTTdfsWjTte2ZCeAq3njxBUFMRXTrkR",
  "key18": "2WmksDM4ux5BtmSD5ppdxBuKu4BAZqGebCVbCxNVmy1vT7QbxtKg7v1LQWLBcTs23vCfmo7qKwpJc8mVDBc5R35A",
  "key19": "a4ixB6tebzPuGe6JLRm58zmuXtvLhtJRvvUeLq75kcLsoL7L9ZyJshr9LUhqZZ9ExNwJiC9NhmrUuaiQ3DRK2nB",
  "key20": "3BFVF9bVcVDZZDsENAu3rJjcAJgVkhkXrMC3gBv3xXDkoaBniRqA5euTvQJ4B8K9ZGmoQRBFC1RTdA6wv1293i8Y",
  "key21": "22VW7bZVRKtSiGEBPx5QPsjCN9nL3a8MwzUn852crn1hFLSHwpri2aoR67ZBBWXp2E6LhQ1rmxSB7MCC18aK61zs",
  "key22": "5yuJrQwMcb7eNpfAaVBAnX4dwujPgDcUE4dtXG5PMrgoQDnmS1uwC8WzoWQwBPNH7q6cXfV2931dC7dNDbqVjx2U",
  "key23": "35U4RZWYC2fm4QM7aHJbwQ8xyAV13Bnpkc6VzCjkhhgVg2wyqGDkxUtD3btwA98cbuouqkE4TUiqah7J6jtjfhLf",
  "key24": "3XGN8fRX36PSA8SzZs63kPLmXwFU73Fsc77xtNBAirMBK62QmoTHLkfHU7iWNaSx4DB4cLj2dgtzuCoZppkjdd3Y",
  "key25": "33LEnbD373t4KRVxkvNU2QCtc7KbH99AjoEgcTrYXXeidDvAZVyuyn7f9o7NciREWjzQs6j69X4RunPAt6AhtbPe",
  "key26": "2rSz9k1RxJnJgFQ6BSyFMjy67wUQLnKf13rhAA95SMmXajUaL7zbT9qkdr87JZyKLe3WASsM4RfqPK8x3nYs16Mq",
  "key27": "5nBiuQqVUCDPAr7DUKWybspVVgsFj2rsNhFRsL79SNRM2rD9HwRq7oucMyfneGJz2LcMC2rcHLFDna78cpJnKFA3",
  "key28": "2iZehytewjTimaxcJFZDnn3szGUF5UuN64UdRZpijC86FJ686rXKN9uDTsvd8NQKrJ2L1SnXfKYxXmDKWe33AZ4W",
  "key29": "61xv3chS3usuPHMTpujvqqWqrubzqSGjugJNWiJGsC3Sw45ZbLudsiU2udKCVLwcgrLW5v8pLDbaThp44xwDZPtj",
  "key30": "5bT9LQWsQoVuBHJWXzUAP53KFhyTfnEgNEfHTmuA7bQL1j3m4Vzx4Zh8ibBoufLtBvR66zEYVSGpz6JB2EqM23nx",
  "key31": "3FsBmci3oNk5QLFkPweCTqx5AgzveXN9Ew3TM28mUuGmCirsYvoavo5MiVb4w4eh7ALFS3EPirnp1jHTSFQzKApm",
  "key32": "2ukxH8xaxyXS8eXEcJum7gcu7z9mgmxLbTEM2cFgeKT21jJwbkJn8KtgRwgTuaqfC94UGmjDZddXCY7sYoSJqVMp",
  "key33": "36QpYDV5NbnotJixqVE9Yroa8hB6Fo4u3bMbW2bpXrn1tgV7aNRitf57JaWXoP5Nj5qvViYD9kxF9SmB7Ra9i4bv",
  "key34": "3dm5fzPokS8gbSbNiE1B9ytu4cteq4i6BWQMSNRXJvnE1NxqEdtmkBrS6MxpFcGscRt3Js8jPsmU5jNsLkPqq6BJ",
  "key35": "4JDVd9dxGGfor3eUAQcduYeFrQaPUXQG4ykctg7bU9XNQ5f15XxKnt38LUzXSbAd42uuvKZbGRDpPq9ZUSptT5Cz"
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
