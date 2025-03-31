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
    "5c2bArCedt43k1TAw6C4XF5kJscHT2KgqT9jig9R5NNeZyqqSoormLgksxfJzrYrrxbrmVPmyvuwYnc9B8bWrjYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PFSofMsUs5aVocaT3CPoFjptrJ23AR1exNFyt5kKFQn26psV3f12ANRCjHHVZCBjuCRGre1znwEqKmDP3zJTgV",
  "key1": "3MPS9ktbvib4Rue61Sh3rok5hb5SQrGcEzPKsCCPyxgypsfzg8fLN4LX6SLcXcgD3f2ApUQjRjK11zyxFyQHTyqM",
  "key2": "5A59aZPg15EoeSe1Y9GyhVxmzCLuYg7X4JFGywonC9SrZmVPyiEaP8uWh9VCKAdcp3pUj9gP3XG2Aoav5prP4CFt",
  "key3": "PCGHn82SGhAfXgKiLZZAFsQ7z7qQTExrD4M6hKFJikf4aJxC2Hn9GDikmpwFGYsq1QQ8KceFNZpamohfRbDBooB",
  "key4": "5S4zD6jrGj6ecwCciAv7o27v8iFmzJtQMJn6YtkZ3wp7AZaGC2bH77FgMj6foY5eZkHKH5dP5oMFbGXUTEdj65gv",
  "key5": "5sjv6xKfZoTg6xJ1DYbke1jJ3XkLUcXobHqrz8Aav4L3gPZwRSNwyYZfmmhykjqmqc3TvzK52v54z7T2A4oVBfx3",
  "key6": "4aTmNEEowJrjecbrF4V3yEHbDmx67BCRYMBzdf5j8TBMrytXG1nASErwAj3spEpf9FHPw9uYXAojVujrK9388CB3",
  "key7": "4CMvi92qkNwc9Yb5ZhYPHjWJRKWMd1JWnVbhD4zBVrC8jEhKauyMDQoqU46cupKWWmzLt1gakarkXChk9aotK5xg",
  "key8": "2HsgyS2EcpQCm4jfJXN1oZvx4A3Pv4usAhJVtqD8BNgvNtfGaYwX5uTNFGtb2ts6Wy6v9N77Nins8rxGtoZnZvqq",
  "key9": "57BLE4eaXJ3Beta8A3gd7DeCEYNG6cWrzspEznxS5eSBp3JwEXG7XnTM5kRFRmMRh2Duw7iTnPR7mC91YQVZ9BXj",
  "key10": "3tMedDkgr7RMASf4hGxLeyy3fmYRSKSZG42df2UBriGo8HwDwHfDUkjvjp3U5S1KPaskgFTycg9QjbQt6735SA9o",
  "key11": "eRpo4BS5dx2rm8tH96axwhonDjZ6sbHSTkDDqHXc5uFbRzZNWDsM8oKVvLfggBCCAsMX3wfzX7DD7HJaJAxKqgd",
  "key12": "3gJ5jqhjHhBv4ivrbxppwX7G3fxGfMZhKdiPQi3dUPzx1WND2DifzhSpk7JcFu4Q6GfLmbK6baUuykaf2xJByGM7",
  "key13": "5Mmx1uufVG5Ru9X4SqpPAwf4F4BzXRuTmfQPciNS9stNWFTXbMXnpPuex52bmFFmmKfZfSBMpTeq9i2ELwXe6zjF",
  "key14": "64Q7gKDCCfnNWdFdg8ucVnUsNvaDazvg8ryubJcM17tyV6eeskGTDauMmNrZ1hCejv86GGa8xLiqkpn5136UisHK",
  "key15": "5R2PhRDqrooBT5x1cuvCKwrwjF6G9ZmjvrEhJkGHBt8rXMEBun1U5gwpppkjnayGyqhD8AAmr8UEFtenxspXyM9a",
  "key16": "3MUYZxk7cw8VFK5p5rNGZLyvwk5RXyBkGzk493htFZrgHEA3NPSEo9TxTmmGZGmAz8uucrLgDYUh1H3wcCEmJZn8",
  "key17": "5QFEf3bCPUJf7trQCx8Jfz8wSe5gBJxzvBgcHiKZwvxupH7yctun2nWnDomwfCZr4KT9Ubf13NEaSXoJNnG3J8kJ",
  "key18": "9pRWF7brabbNdbwSYLywh8JEMnBR4wDHuTzUNHWp6PsQBa5pey8TeLNzKN1GQsaVqTzKA2VZqukEnvBiDE9wg5V",
  "key19": "3dJ8ZLko66AJDmD9K8AsPwXDui22S1iCyPw6hL5FTULBY2JjxBam1k7W93RoryEN3doTExa2KEBu6KQW6L22k6X7",
  "key20": "2LkJxzCnLqmhMfVvCfeNva2ixGSziRQEB5Cz1MEXAgHwZ7fVCqqCK42g1bRpU1PPuD5mofBVH3Ve3MvXH9B3LYV4",
  "key21": "3w28dQAyWfUEkLLebifptfHXecgzr6tWjwXtiS9qYSMWe4tprkHQBCfC5kUzN4eQNoJtszfbozdqdX5xjSGXE3t6",
  "key22": "5gWpKoBTLV8P5W1km848LNYLz8iX9VpLKtCrY9tvsWFxGha71F6zvNSGQK8syiCu6RJ1gxKjEqq7ktPSwGvq6G4L",
  "key23": "2SyewHN6QNo5Dk7Mym8bkcE2z1x2zpenWpHWHjXz7JwwynHx8oe2UPJT7m5DgcR31zcGguuW5DLmfbHdBmGuzCDF",
  "key24": "57HZxKegtXoEkmvVogWsM8Yjyh4bSHQYXgM8jwPqXm2hm7NJW5YtHnBb41fZgBbqo7aAmhuWxBohMLfQG2ihyDyH",
  "key25": "32Moq2ijjvhjfWayG5j5V2wc8EPKY5kSH8HntMkzTj4PqPPLxqJrEyemeXFNWJhxrCqfL2Uxa5BA3bDDRruyhwbt",
  "key26": "5hSeW5moVD2jSJ1NgCUYhM1EJPcbMKVzb1n8NFiQwjUj9MB9zPdmyd8U6Vnhn8zTPk8JTGC7f5ojHo2W5Sgoeyn8",
  "key27": "igqRbYd1Z29Twi3V9Ase3VJVhfq6u8UVB9iaijuSq29PozKgxypBQkk33Az1eFgPDZYukmwwWuT38CvHhpgQ8Yg",
  "key28": "3E54MUm9UiALNiuJnckS6axcuceXgbpbieLuxyNcDUH3XyPeAjebUozQpwXED3Fn4dxs1wryyLmuBQu63ego1vsL",
  "key29": "45wGr3bXGHS84hUkNQ6sXyrQBJPW8nAK5dZ1Fm4vBFZz5HimAoB1h9yaTy5o9VJXecxvmgFEU2fHBHRRBZuZKrt3",
  "key30": "ekVCMWmWWvJU3EtW8P2PAU3AtGYfPXpVjMkHBdxyDcXCtFPggGtyuovRsXp9qmCeQCpmrrkZRQd2RCn3KdADXSK",
  "key31": "4k8a92eGXARfFf8xGoymkvtemr4NNw9MNuCe9NU45JmBHawXGLhBv9vCz4BwgRR67YWdoJfYn3t4oBxfJafsYnq7",
  "key32": "py6fvjAAiEK23WVyDfi4jxCrqBynUeXvAPFqfM6AeyunXPTvs8s1su5zYsUUXH4rbruYF4Ta8EMSMT4ERVPacJG",
  "key33": "5X2Nigx1gcqe6h26Fcarcoi7u6kzvQLTXgxzxTDydMM8dJEnRiDjfHogwWEZwhXeWXRkyUvfiB2LGHSrvn7RqyTE",
  "key34": "4rLheHPoun3vKdADVpfvoXWBd3sR7VoS99vcJzKgFEL7NyjypE2k9FPQv5HQbsX2DDsYcc65RcQL8NRQkRDGsQH8"
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
