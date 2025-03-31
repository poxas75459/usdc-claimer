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
    "4CXmZwezbTLecHSHBConeDjyY5qHvxhixQiXZBiNDN1Wq41rhdiR7vYKwHaeqotbZU1Dcam8qNDbJ9kV9sp59v9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRxYzXhBHrzkKTkp5XNX6oxwbgjyS7aVDz3zboLb4QbmFCLJEtqXJfDC7seBLJ6MriKWfExmwWBywZEMNzMCyqh",
  "key1": "5WwVqe3HtwjhBcbiq6G7zgeaTtGir53CpE4zUG89HTckoau8naUZ2kqwEmZk4d6pPe7B5H5AG9hdGXTvuktfFunu",
  "key2": "4eozM1hMBcWDKVonsgRERQPuN2bw6sKDCgHBdjjS2hi7XcmEn2YPVrsoQEi75WDGYaFjY699jLjACfBjhFXPsQVw",
  "key3": "4FLNW7Vsd1hWVgmmczn2U2jdxEcG8EXNSPYtaJG7heWR9rTekudPTNQkG5j9TfZUBLX51UmnCsvwuna3vLskaX2m",
  "key4": "2mFMPpudTwVkkC2AJZDn3eiwyP3QSQgZ8Egjyj1oGSnKqBrDgToNAwYyRdEXGZpvNZ8gCJRwBSg9xrKSbMaJuX8V",
  "key5": "syrQZa4ZQ9bHLrdfhfn4FoeHYYS43JVS6FnqFeSnGvaa2KRdghXez7xCGxrrMksS8g8KUiDXaSmYrUnVbLXNNPo",
  "key6": "51HvFf2a8MiGyRhW8ydKGbi36M2w2tNid2DFdsHLp4CHP7qkEEK1LxDx1JbXRY2Y2FAK9jDRNbGGRL6hYqZdf5Tw",
  "key7": "5B4HBQDRjgLDZSnJACysuz46rCpDLwA6avikFuKpqwWY9riVg8rvjUugnn7jLy5D2Fpy1J6VaCuESzHV8G31a2yu",
  "key8": "5BQEw2PvT9sc45Q7cM4HiGK6uXywUCaNAAtj2pCNzchWmitWv4v5bxYh2n8MDFcqZx2QPZUdP9tmjpTrXnUFo4h5",
  "key9": "3Uj5zUnwhjAY4w2sLSo4khtZbbme8KjDns1m25XimaEk6gsu1Z6gJZroFqcB7Giq2dsKWyJw3XRDsdJyDxis8Khh",
  "key10": "5ec1NnmAxm15gbLE4HSMGk3HV1Fg5bfCx4UNqS5CeUoU7WgbF86Qyqg8iAGaqep6nzQmdDq629m3hfz6HXxPQLyC",
  "key11": "29c36T5xqw1jnLfQSFaX43hifQrfDGRiKnEUcC5nN7UfFNDHZBhrEogs6gcVu7kUiSHuYAjELmS2xjqHkgMt4dYk",
  "key12": "4omX6kR73yo5oQ1jvscYUrJVbswXb8pcNbxwr14k4emH57i5L89QhF35Pm8Q1nnB83jWdxZJdZWdn2eKbf72q5Qf",
  "key13": "8hprbR1SGiDjqsi3x5VZYASfuxrNWKD3kuTfDoyzCa1RJeUywbfLPu4GU7SrABHPkyKu9P6xrvmBmu5abWDuTD6",
  "key14": "n6fWcU1XmbJX97cB2i7bGkrEVGToAfUfpPX6JuRB1fmfXag67tiuHg5y3Jczt6P5qK7q5YxA2o25e8y6Mo3m63Q",
  "key15": "2duSEjV3ktZs6w2vJ8LyS4eMPVFcwKMPHYpVpwe9WmzthAfFgJErLWo9w1xxBQh5dVMgnCrbn1aTMSViR4t9769n",
  "key16": "1W9fiJTns2dANNsWhnpHC9UK7wcczJ8eFYoiTjCGXyTZZfqrpA1uaSLVewcfGfo2HoEUoMjt17GMmNffYbMXEBe",
  "key17": "4ZAPEBnXWRzp9s3ePrLazwCTnYbemrtXdCf4BoPZ6wAFdXbwbohURb8mwjikKCiD7VZjorcmC99RqJfRkQZsTydn",
  "key18": "k2dsNNVRGhaYoWJjdsRhY6wxAejSouodvtggt9WdGCbFiG8TUBBProQcZ9Z78sEbFRr3PmQjTKyNcancGn2cuAb",
  "key19": "3BRYHesE3pMzTs57BhHsnfbCNKy5Zi4a9DXVE8WNB21siWvPNMd56M6z9mn9PYCMwQwTRYFcUmDB6Ci6PAJPVYvc",
  "key20": "4K89qWQpNGTpSXZ2Zu9pFy8fZyQ7GygsR2UCZYvg28FffeGoiMvem9sWRKwPngP4tQ4GFzpFBBzrX4WjX4AEJcU3",
  "key21": "4EayyNfW8UccZtW9oW9G99LkrPGmX8hRzv8qPni8gQYCjcSZ8wStAVdwLug6HTCMYV7tLXVnKbxyuSUML1CyC6zK",
  "key22": "4B1vMZSXQw9s6r58P2nwQ51eN3EaHDkGmtxeCeBdzjHbjhWLjYAmJ1G827sCyPUw4BsxDMiG5qzpemFVDqC2gAht",
  "key23": "2tLazD3fBVtdf4gpxGJtv24g98Xdkieztwmdq8CSpfd42UKzFxK8rf16cjWVMiAKNU6dvoMLMRpvPuqWTEeN6Y7u",
  "key24": "593vWvvaT9i5Ry3y3voG7UpeSB3rmKLiTwSWg7yRgQbeRChsLSitqb7Easnbktdr35TH4eCUJfWqsdwQhhhXsCUw",
  "key25": "Z79uFd81ojcTiRiM6D5fcRJhsRYnrnqP2ZYniAAGmuZTQNgbjDE8Mc7wLcfUj1rwQFNX4ke6wjVG8n2PjGXHc7k",
  "key26": "4dsTazThjjqM4J5SrNRGFpEJ62EMS1n96SCubWSF3cwJPukL9Nn6DmXTQPsHXwh79w6Edyprzt8dyw6whoGq3UR7",
  "key27": "5EjSnR6HX3taozzbQXt7piVvwj5RiSw727fRt3vebuvCdGoV8SmXL7y9No8njTu1HzbpbpBbHsFZr6FvSWa9U9WS",
  "key28": "Qga92UVzKESbHTF8nk23vCyLZiRW27gJw89MwuTfyk3hVRmbaUSsDt3hYndHcKZbrBeNhQjuoN69KqmbXviPgny",
  "key29": "47BYL6iGLxNtA98jqBbK28Pq47BhHbHTdyfCi2Wkxxz3xerVvot6Az4kVE76LoDwkHb2moxMMPrrDzBEaiTrE6W",
  "key30": "2AVBmZ5j5sKVNpfR6AZgbbTf8LgwrskrQ41Fz8HyuJM9dPMkuBbXRdiki4X85Fxq9PL4yn7NSr1fqEm2xZLg22hw",
  "key31": "5WnSxXEmRGHCEy1N6ZkXzBYW2sW2UnQKc7tK7KiWcpKQ2mXtLG6JL7nAft6wH5JtHweViq9VGat2jtKJgaC8LDdw",
  "key32": "4qZCA7sHF59uAbeELuiWrGkkoego72zMVekY5wGqhWM6Ri9TujdhFcWL9DK854nBZ4DNhq5d2J48iAeRppzzCx91",
  "key33": "4nQvwNmto2yuTyyHCrgdwrxYyRrVJV8ej8M6iFjtkbsXFkdPKtxiNvefw1e2KVL6wHvmbw2QMaKeZDrzHppKan6R",
  "key34": "45fACRaqNakaub4n189MZRSmmQtvcvNTcfKi4LBv9Q2gR697P8izJXhpxE3M5HWbSERWtce1ZXTQjX2B7KNaPskR"
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
