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
    "67EnQ7VnyzgL6UwCSjNztKzQF8nr4orcUhkWDtULvazM78Kzbam1WbmG65UApfZxBD39bimvSvvBWBcCmFqzEbCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wUFoKR3Mh33CnGN4UiUYJgnBRseXPtYA6pFMwuBrCTkfVBZzm58y3KYN326xFaByRiMEG2ta1oyFxndgiAPExp3",
  "key1": "4nTpTzGouyjScHsBxH3wRLQ851BEB8LfLWvamQqkCbbXEeoAroDoyCR6S61M8oaZ6WGFkMXtw74EVXsd12ZRxqUg",
  "key2": "4dSP2NoEcCuZozxdkqUVzjzPfzaSNjYLNAWYpBiR6s6i5B3drFRVdgacyeRoiGrKiCkuPHkNWSNWfLhVBTyt6Evm",
  "key3": "4ZKwiGDjK261uuPqWHmpBpUuKK5RtJRFCY6PaFABZ94eaC971vqHocSjZmf3Z9AyK6jU2ccQVxunuYSRMcpep7W4",
  "key4": "5yeZzsMe9vNwweWA2bXLvzCQkGy8cU9WKcUN4SgsVRCfM4zF1JvFF6DD8mB6TWeneNhv7busLxtmwE1sjZUVZWbK",
  "key5": "4joDeKWvBD3eZarV7x8M37STxKu46fPd8YWEdc8VNvUy3Y7kMakhfjysG4BBC4SviS37xn3XCqoar4F9DfizzafC",
  "key6": "aVHCydKi17griwzJZHPM47fY9EbA5xWreNQY5zBxW5JoBqB8RHRhFiqxUAmz6RxHJAmt3Pp7YP9R63VhRCawJuC",
  "key7": "2Nx1La8F9uHVZwa1BVJUFq6ZbsGaszGEhcUSUTdkkAWeeyoGUg6BJkkDCB7B3f5sSpVNfqMZYc8VMS9XiGL77zFc",
  "key8": "2UWUB6AirF3HeJYUxTfeJ1pzULhnWuZHN1txr6Dbgao85gVKKQbxAPsefpTz2TaixWXnkvX5cSWyusjwDcW1d5Xx",
  "key9": "36cFU9yEQrg7pdcb52nnWnXNXRGkhNubvKj61cAcwnsHk1Bcq6UFtYWL83CYj7CSauJ4xZggA1Lq7WYS2rJigRKB",
  "key10": "3k5pfp1pqXNuRgL6Hn79Sig2nMbtFaPiw5D2ztyMuuwmYjvHS26dGvcHQT4xEYgVHpuaTrXPT4ACk68GK7q7G88R",
  "key11": "5iA9wNHWiLWMnsTRoNms5rP2LDPtEc89LGptpy4LBQh23E7V1ErqvqJkhRCtzRqK49rSg71yEUVKdmyU6pJ4ej4K",
  "key12": "3Y2hnCEZoBiEAuQv3cLr8dJYKM9rN28Ezw17FH6dZZBEyzQp1QWTjzbekfmezbQvtgeDw3kygRmPxkazqk3dNttz",
  "key13": "ESSHerCHEyf7dxriCLwRm84CPFSegnj4pHHuzHEm6KEfNngpLbV682XjHfC4CSbh5vXx4nGwa6v9cr9ecbZWxV4",
  "key14": "233W7qvbqqmZeyBhF3cTyPeLzR6y6GGZn1jRw6E34W6QGrNU8BQX5WQKHTwzPbRUFt7vfeedJ9bVGt85FtUELYXZ",
  "key15": "228f6UECa9HWnnR8rutDdFUWvbThL3RiVnhrzcM845KTjH2WicBruxhGx7KfNudg55af1TecCHyixmT1QdkxxCcU",
  "key16": "3pcvtiWbETqu2A7vJzqeHm9twXv1b3Wk7bdKasBr4H1HDAP4tN9xLSfLipfrYXdLNgvfCsZE7c3c79kQyLyVudZ1",
  "key17": "51dPyX6xvtBb7R85nWm3FzZdi52JEicFYmcfRToZYW8GNM88ct1uuQnz7xrpkwx5rc93CJdAAWsXbj47Cxo5NJDG",
  "key18": "2yDLNeN321MzbV3SZqq3VVu8ueDEfEs6g9q69zUDA9wEjz53wN6G2Y1ADBGdszuN1G7f9fVVzrH2NdT1TVGan6md",
  "key19": "m3KHe6Pzp213sBofgFc4zuawYso3oKkDQav5WEThVtFZR2oCsfs1Xb9DwtRxLDpkpt3BTjHZKHKQvFuLnsxPFs1",
  "key20": "4iciGm2RyUKe4GVijE9zMYxJ6FxZSXHmCs6rNgJezsb64LhjL7H5t3CSzN5CGgeTprJ6oebaPQy1mEvkU8LYTXWV",
  "key21": "4GRdKNAUr3iEUqtN6VNRuGWYospkSNMDhJMG4924tVRRyA4BwrbSvHUujMuMeg6U9Rip67XAuVjd6P3iEtKMXw2h",
  "key22": "2rMsxdecbZUFA5pusqaC9nKyjMP6HugcsysHiSeEWsZohN1hjLK7yLKWBdFTVoKPV14hHLURerxG6ETBAqNyRofH",
  "key23": "3d4WSF7s8Cu87vnUHWmPgeGsHct8Jn9C7LGYfeXw3fURmp2sv8cUwUemc4XzRCvBoEoC6wYy11w2GeNMKGKFgccU",
  "key24": "3LWpUdCEW7D7thQ3mfxeDoqna9teRQuYDEwzZidyEm895T5q9juEF914Ue8xr7ZP942Qio7DuXk4upqUoGWjoEX",
  "key25": "u9X1Hu1RH9ecYht3kS3FzKVmHQrP1KcwJjUgfJ1wE7RH6WjDUYj5UcxPxGnKF2WfyX7LcQEkmeSpjeL6gAxrV45",
  "key26": "66kiNU13zj7fY2ze7FWhNennLedhMonUNqYS916KUG9gTs2q3ca5CoQAyeGcFGrenLwaUQaYcVmjPHauu76KRAET",
  "key27": "5uBSumXCrtW5jq6HWwhpMc2gMY8asp2pjec14zNDQe3PFA86fcfFrsJM2g3AQo5rGTFJ4U82FTbDZjW38pckRbhh",
  "key28": "2n3wXWVJvkWUU2XiYGx7Zk7dmAzrn8t8SKjHbgGoDqTnD1y3GhzeisGwhp4kbSu1fETifvBtFeuDYxy5AXtdPhuM",
  "key29": "5hZCJFiokHNL37W7r7MGZKykLN4vWD1zYEwe2CSSTUvwE3yg2KFBzEpRwPBZzsYKTd5BAM2hCLFPiNTpybDFntmh",
  "key30": "5fCu7oyRKiieDa5CWU229yLUGvbrfdLxbH1odCZCj6ZWDwHXgbW5Zzv8KdzgRdeHKm1dSShndwwmwdwqmL45octa",
  "key31": "5i3vWh3bKyfkpX51mEfqfGKfHTn9S5p9gKKoPcaCmSrh7SyBaccsUZ3qY4e5xXmH8sxMz8N2KCw9FwoTcacYGej4",
  "key32": "4yJJqWdySb5jYPgsCwXUjN8AmEjEhaEy8c6LhXZZQfBxCFDiMdGVeDKmcMyJJ8MCFbvxC7VpPDXqGTtYJnriwtjK",
  "key33": "4EBLH9roB5Bgtk79HSgvHSDTyvEobCYJnxmTrerzHggFwWrse91Yzq1zY4dkeEnmBktgBSUQDY7CcNrCCvuLVWm1",
  "key34": "37XGMHS6KXJu9d3Jp9HAQ7wiAgA3M7LUw1TaHgkwtGKSYVycJpkAZ9Ur4Winyx69F4H9Vdw6K6mgAeW5mWgDGw3L",
  "key35": "56wkijgRQhMTbVBcXKBHtf2U2ohQcysGP23J8aZt7JWrU7XUiCWfgb4Jn1afg9c5VQmCSUhpn24ERNRuycRoAa1o"
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
