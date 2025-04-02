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
    "48sy3DWsf57HawG1tzcLzXJvFhsj8PVZnFtXEeiGiNT8EWzfXNJuRy2yERxMzfFCJSZD9yQ5Je6crHuuNBpNj66i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hqtoNEswiDfy8NoeZ2oSf5w7qvkNAKPVwYsoHuufWNL1AxuMQevmzGWsKbuonpWsDkYA4H8SxkE6smiA27ymor",
  "key1": "58vdZw1X2pNVw3oNQ6ctMabLpwxVvzZ7Lq8NqfygEWjk2tkbDtWVrAvZhYDtQ8x2ohZitWzNRsauuCJ9JJscJran",
  "key2": "4dZPyHmZ2agoGWucHZJsUYzmr3DjDQhtq8v8zUPUGeFTEAJQk6K6kcHtxY6zrWXzmGXgJBvoggYddWQKYAgyxJYp",
  "key3": "2auej4fY4U5vJLhEygRimAPTHYo8TCRvhwdsn4VZSYkkYvEpXx9L6JbejrTYqupnBfktmyvSEB6A6DcB99S7izmw",
  "key4": "41VrLUJNxdd51nmXBoYVLTxMipnCoXapjGvH16Lkz8xuBxJtcJyJaRiq53UTQXCTQJ9dKYhWnNCDK1ycDzDG48Tu",
  "key5": "oSzsWxwHMRELqTceDiBxjkzSjR1dYgE6K2cdeVLre2fURFDVLCDbjebSXefoMyNDbCR6ywhPuk1QShDjEvJ3eVk",
  "key6": "5rmnG9Xb3FSctNGixzKPNqbGpaTX6DH7JeNyGb4AtGnTbdpjxUUYt2bvyDcFw7pUdJqLZ2WGwc4G4LyMrLidvzwT",
  "key7": "3BJCTbYyfihNtqR5qrxXVgmu5wzbDMSXN2ixVst7fKr33Gf7oEeNF9eQqjx2GVpURrW39ybRAM4bidVVV6KFUtKR",
  "key8": "5tLLCrdaJiYR3WBSi45cd1J1vuknM8qLHtZrjQbL43zCX6MsDtv7zS2nniqJfjYvvrfY3KqSEGn5hQfs3Kg7bpHb",
  "key9": "3qgrqcBZnBV39FDMTsucm1RNvCMv7NBEC9sd8xb6V4j4L5WWJAmNq61enYFVrg2bw4qCzLpbZXrUTNyeisPAfR2T",
  "key10": "3uns3XEW7u5agWg49LVw99cjBQX1LrJ4AQF1Ny4db8vAoV2sf5paeodqifFsCjpw8sHFBGUCsweHMMNSzTT6VN4h",
  "key11": "4shFZBjmfcdTj5bbK9aJsT6PVzeFHhGE4rcB8uYtUscu4aUmryFbVVVPSfKUioRg2kwzZxcHMPRWD7NdGTPCJWXP",
  "key12": "5U36hRDnQDUcBaKNV5ajUWrJonzHyz1yeNjuTjcS9AcMzh1HPtjojr7AsRrX9MHuAZScHR9nu1hFvdyk7bGmxu7q",
  "key13": "6136ga3zkE1h3LBayQTLHEP38aRagewc2iodtxrRE6dpSQatD6QJ5n1LHdCwCxmSwtARkJvSa1Zvqa4wMw1V9vRn",
  "key14": "2vcYeJcBmTn2C9157Es9FjQs9xXq9bhXJJjpCxikajsDnUYCZvCeM3YuLS2N3Kuyo6FnVy1bqSsgETWMoaKdQ7tH",
  "key15": "59ZEQ9Gq85RHuEJ1rHHg2aKZKDPjkfqLAEqwsmWBLzYVmpFxmaNKNs7R2D11kWbkUTWATVWzye86nmvzZn3ZxcQq",
  "key16": "upSFWzYnQvDVQQiguYFszJT56cLMCyMukmW2Kst2yiBarSNHuNeN376fzoXH2UGMeeR65YDvi54o8vXnYQ6ym1U",
  "key17": "53ZbPutg7wzidbcTMQF6KqBUZbnRnfvoQoakN4coGsbzG4muR1ThhagiUCoEXRa5sbyDHm86DfNHRLYWQRmYAnmM",
  "key18": "4J152kYWypoKcn68KkeeEUgLMUU7NcSGksNt1mrfBMY2XWqHNhtYXrqzxLU6VBksUnfuEAk8UtSLGS33sNMpFrap",
  "key19": "2wH26oT1zT2GD54A8b69cqasDYwK95SApLNHTDFvhXrZAN2EC5nmRQXpew9n14hR5x1RtET89GT8QMnwmivN8XrV",
  "key20": "5k5Zj1ibKG7bu2m2L6T53g61n3cymemWFYp27FDWBAyhinToj12aWxnnNfYps2JDehMC1fh5sUfwfUfJN5rBCv8u",
  "key21": "3pZW92J6Wh22mSHYmJAwmjfvkhcL5ZHkgLHvARvWFGFuyqDZQuxY17rxvDivLECGQjdmiwNtCAaZL5btdhengmb9",
  "key22": "56z1uFaMUwPDzTvyRA9NPN5MhJaT1Xyo1GwDXqjcpCzBd3eb2NTEyLpfRTvVLnkERr1Tga2QgB5DEFoyERjiN9xP",
  "key23": "3gRbytUbXy7vKspre2CuRjSNeu6GDhi4HKyx1HqUvmDfHpYfhgeinNawpKcjk9MXUHTDrYqxknPLeRn6S1K6Ffio",
  "key24": "D3CQBd7zhL9j633JBRA23AaoHWiWPoHW8WMZo78ERhv6cfBPmmEeorFngRm7skKKBAnJ1CPnjDT8xLRdWuBcVmC",
  "key25": "4qmNfpCHq6KJCDEuw9LzKALfLVY1ptto6zTmJdecBaLrom8MxB9F7AEnByhD9eDGTxvKmXTyerWTU2stjCkmhT7p",
  "key26": "3xTtY4XJ7YMQTHFb2qHC6RMJAzh8jME66ALFrR6E75rFFMzjXAp6jnEgLi3efL7L5z6UfvBBXVPFHXzpckRUra1Z",
  "key27": "t9TLgCn7m5x8oLHJuG8iifVMkEk8GPw8qX8s4BYp3cch3JZcnDqeL1ZYtHNvYgxKZkkYiRQAtrjQij174ea1iMn",
  "key28": "3EoxYE6QVgGMR58NUgLqj1Hn6Tia4Z4aACwE54caQdWm8i9i4zNADLVJpDaq1jxMVrHgqK3fEL1fEpyeSpQZfX8n",
  "key29": "MGZTjdvQZ4yNYDwHnUrcvcaxepKsrV8UdGMAzmqLfaM7RGNpxiCatF3HD7RrQWpFS3JzTkCoaJ9GfALJDcTGBFe",
  "key30": "2VZkWc9j5SMBRr9KgeWY6pRupDNzHFLJWrLvWVuhSrwGGvxvv68Wi5ZDP8kpDn8Ns6eMEkf8XUEp15fx98HE4Z2s",
  "key31": "5dvJcJaYcgFkWeEEGXGuyVnCWYX48Zq2DwhdPPdMU97B2tuvZHKvEKSBcUror1YQVJJmxaW47PzDei1CbUZMNxPt",
  "key32": "2cXw8JUzqvyhMqeGVehRXhvmmf13tePuDwCK5KzBVjRwLhUxRiAj8dtNPGqU65KgVTD4MF5xy6VVNiW1jMbKKwGJ"
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
