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
    "4iBajDnFdrM4f7KoRaodk4VdF3Q3L3Cc8dv4DuexLVAspqcaxNc812aTeSqWntYSsGbNcNAxPfvFqfVyPH8nqdZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21uAJAEvfeZEV7jzdaq7zH1SYf3Rcy5Ybo3wKLMEMi95rrcx8o5rBT4sCkVhdZaacxvmZER1mKBBoAgNmPSVhitN",
  "key1": "5FafBFAdfUc7kYhc9xQ9xgLdhroUPjtAYgdEphfEtb8CdcuBdDe2AFyQ1TdGrAXzAVHtpDjtafnRXGHHiWwiociL",
  "key2": "3aU8zM4majTXj73yxCKYYykr43jGBJmdWgFHEqHunCzYTj9AEY1m6zNP14Cz421EFRKB4g6bpT5DxNyWALsbg4LH",
  "key3": "JSZ5GPGPc56UPyYFRt52TB7nkCWgvqd2cVx22dG9YhCV6VNiU5q3BdgZmdnFbDMCoexvofjmgVoUBCoEU8Jjq9s",
  "key4": "42HLJ1XryiSAEJJEg28hHRbr2RAwBW3gh54cY79p13YiC7CrJb9bn1UhC1rs9PWdcb68EwBj5DnonXEQEqRQif8z",
  "key5": "55zQpmT4hGzbfAmZio7DHiaXvdfQrbgXni89JZt4A7RvUcrtLCGq71uPNZYRoDWTr9hQ1xvCdn8Po1KPkr1JZBRY",
  "key6": "3spPNhU96wFmXAWKbhQQ3MarKp4jkBvAyw1SEtAvUhxLss9GD239ZmfaXPSKxrhn2pfiRmfnQyyxBWgiMpRAQLsC",
  "key7": "26r2VTHyGA9X7fxNvyRxuCxceSav7KyXH5q9X9Wodrvfcmy37A6pGF1KwqXvJWTdk8AL7H6SfsDWt3NGWYC6GbhH",
  "key8": "3o1A65nkFixqBZjrJaYzgRrXQdbDWZHgxdEUxio7fGsuuvc1hQTTigMVhAPiKHm4VkyidbVd2vaLx32pQYoD3VoF",
  "key9": "ZMBmN2yUfxnmKjgMiexheJ2hYgsjYGByFuGG34BdXpf3jNX6RvLDMPYqDi7PyNJS2h4htkHpHD5D3czDxLCSLUH",
  "key10": "5SK1dtRxNK8N2mhd8gXukuotobDpttADsJdQvvZKYavJnhrqLR2oaAxmhz9dnRQKgGTTzCFtDqTiCUFa5YUUHJdL",
  "key11": "3QPcf6v8SUzg6oPP47BVYYD7tuhqVRL8Mpcte29i7zJuYt8AkHJFz1zjssVoPNQQSnWikpdV7tVyN6w6R9g1hCEe",
  "key12": "5TCJ3ptyCxqAsN82iMZ5r7aSaVA2vA8XjQW8j7LBYXVBPpMLxR1Kxj1Ti5XGs7DtU9nf2maCfSutfcTNZcCyXfaJ",
  "key13": "4V63cejWmcEBjjTzWiYe6Jo7tEEFXYuK6YFEFSgGUcCmfexkRpwTDhgwS91Yqx6Y9mkZFopjxyXRK9GZ7z6nYEK8",
  "key14": "5TmYGzrokuTHYifjAFN31WLPknG97MmPgQ2y9QrwbMBWqH9VtFASdCKeyABJURMtBoGHo61TKqcqi6pHwNvPWNW1",
  "key15": "K44e7RQKivTNDatecZ8aTRXDndcBAQaPATnoA3Nae5aek2uDmmL2uj2D4MeXpYncuqATEh5NeWguUiYvLQ3jpL2",
  "key16": "2akP5Mrm6bDryB5q1361A5ET796HZ1RUQt7XLALq8hyKPTzR9q6GnL1HupScgonNQNGuGF6raGPsZYNWZururnYk",
  "key17": "5jqBvuEDCDqXH3xmgmFHnXYVdgNDbui13EwgJ6QUjnDxcPAfvG9xjuzADXJkMjRvgwnop7qQPvcXkk2TVXU6ZzCC",
  "key18": "4vn6QXG4WNGJkE3TBUxdZeFseEHudgw585MzFtn9Q7Ujh3T9CHZN9EXY4jAamNWGHK9uNiUDPPN7TQsbFTdjHk2Y",
  "key19": "57K82HkXbns2QJhAmUKSJ49nVVWkzpZmf7JyoeK4CLx3k9JzaVsX47PC6AkNqG5iRbNxAH44G9Cy4yk373oQ44bX",
  "key20": "3HvnHh1Cutkz5sr9M2JuMVMdJ1Z27QbisQtH23ZiwQHECDC5evYfwmXdAgEWevDLsGKDrWr6LcwhekCyYvZoCCof",
  "key21": "2cV4NwgbYW7ZarFgUricYigTDmVWc1uPvxmPY99QV3xCPdA2ba3fswEP2edvuASNG1GxqQ7KgtzeCrtecZAQQtEh",
  "key22": "51YGUFN1iAVXT7ztGibpXZkzrphyHURkSd8MrwSJQpCa3XnMik7Nviw4iSWjv2PH8Pmp1LcpVgD2qqbA9gCV8urT",
  "key23": "3nTniRbmo1JRacDUtmt843JdbF8SHtg3nV5ku4NN5FEdYSbnaJw9QpppAYEibtYVCCGWd2rosntAEPpwbv3n6ijp",
  "key24": "5ZSkvWwrvxS4PmMhd4tQuD6KxKvNu8CTKYdeGNNFQaw6LjA5EVkEShbT3hZ5CNdwvfsEWGvzwTun1d7yPDZvSiVU",
  "key25": "5BKMUZ9vud7NVq5W3qSxXZihp4SdyqywVKbxK3B4SW9edvuBczRn97Do6EubkH6uqjDcqjCTBE2skMsdsof6JXgs",
  "key26": "4yat1Hbn8vdPEtNu7SYasMRoNBuiL6zTB7Gxe9wKASuuiGewP6Gvitg6Faree6cHzG7pwvAAkRiiPk5HKss6daDi",
  "key27": "3PAwEpQjw8c7QMwmoDYQ3AxWQ44t13osai3zP5JxsBRGXkyGqnXXgNN9bme2oAPb1fQQE25GErZY1kqreG7MZgJr",
  "key28": "65yMT1wt6pBZy6147MN5iHdQDZZfe1PzaTLpFDpa63q9ckcbTRFpxoGHBGBuuX7W8ZbabuPEoWQV7uZYQGgMoRGb",
  "key29": "2i1jkh2DC7NJWtxoY8Cuqe4DGNAeJj1mjVY9vvPtdRnd7Qx6yPZXfJa7sQ9yZZBpRiJ3EM4pa1PrnC9kHZRTnHpW",
  "key30": "2BHEbLJ5Kt3CsUzYG8inzMFHHVEjxq72dZaA4GZ8JeTefcsJLH8CfCk4BxwhyMYW1gTgRUVTzMoBwDxSL9pXsDaQ",
  "key31": "3EY1PFNWigwfzaGm3uydwfFQSjyQMtgcd7QnRkjQKeeKmyD9Dyhe7o7mpMVkPshqvxUBJUvXmMLuKLmCz4a3YQY4",
  "key32": "3vUC8U57MZSBTFwRfy5XGWStYav2XC1hbAWLzqNqhrKmfDJyGy3sVViQaoV3D8wkExuTaAWcurxQiCKKUGU2t6gY",
  "key33": "3QQFt7jhi3cDUYSUfz2rWEdUoB9TvutwbD1TkpC6ppXWFKKdGGgccZvGg7NXuciPQJxwn8pNVAaomiBLtafGURYv",
  "key34": "XvTi54imtowpWotYUFXGKJVFpxhQqgaFJeSeDSbgzcGDNfkz9ET7BMrjZ16Bo72UzRheWJYWZLhR8d6dXobRqX9",
  "key35": "5RMxPqbKncYTbK4V1zXAsf3G9nqmDuYSZGsCzp5NBPDGSKHdPJXNiES9yV9Nm6JXwK2iA2j7nwT3McWm1gAixHfG",
  "key36": "4uGUSHFmzmpoFjVUcprsMqm6ACMNo9aU5ZXUkPrQyj7Q1dpfTfTZon6GPzhECMDbXH7Q1Niffjp1XhwvFKhGkUMs",
  "key37": "4CCBEiwkGqQheJh8jkkYWWLe1FQmKapU6Prw5sfY5yRtbJLh74NWZY44sJU18U59UhEkyfgYhp2Kad523MtGTcfo",
  "key38": "23cghpai6fyppVHhXJ6q6oLuVBkwW77vzvNkdrW6jxGKVpxKDzDMYNbYpoR87jgzT1qezE1iZxRH1iJ8uZEGhSxa",
  "key39": "2fT73s998SSXJFbdsxhvLZU871VBK5Sgif1HnMXbRk3fcprnEtCkARfHTmMKT3WWRuzBq8Ya4YyQ8Lk1YJE7Dw9N",
  "key40": "49X7VRgjr4GeJ6o4kJ7qmdEWvEiJZiMWHo8xDYk6LwcFS9JcdCRG5ZUXUTuteMJ9LjbVKTSwr1HCoVn7izPaY7oy",
  "key41": "2jVyejf98DQtxKFEAqfmEGboAZcG3cf77CMooLEvnFvmwBXhmWEyNYL3GTZ4YYv1mNF6DLm59odhLvR7sQt8AJBL",
  "key42": "3urpYDUCoUoWPcgwCreXG93TmgwuSBhBHodgy9h8t8Sgjbo6Uh2c1JFW9bj1hzzmUMwzSPhNgF3RJVfSD9HDJvup"
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
