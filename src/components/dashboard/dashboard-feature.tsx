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
    "5NY6YgQ3B8VDLVK73Cw8gHTdbxxq76DPrPKGP8ojbZNSUf8UtRHmuUJyT44MAduCTEkRjTxRZYZ4TA41pt8oxCbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFQSq1BxKMxKnSpbJC99ba3sjWpeZ1E42fctcybtJVaQsX9DWTGAP5ExiXzozFKuB1xssebB9ysi71Rfo3Dj98J",
  "key1": "5UtJVPzdRGmD5VbyzRtUdmLQ7kDTK9KeTpwfnbYK5KeuZGw9NpbscKFPNdMiiK2xYLS91yP1SyopV3zEBbi6MtUa",
  "key2": "YgBMvYbwQeANCf391dmySQoejqDBz28KChmwyE7nBm1fByzDWqSKSkofos53cEK34vmZDi4qaiaxtswpSERMp5R",
  "key3": "5Caekw8LACbCAFcDkG6zVxariRGSFagmwRMDm74LydbEttdZLPdsU24hwK4tRkT3RoNWsqBDBqK3VP2XMW74yp6b",
  "key4": "3ffRF9x2X11VPik8P6TPeCUfWPLkcZV81xa88ZWnxJrciiJvKhRiJA5jADrndo2rctEtoS2niGvwBgCiVg627uej",
  "key5": "kncUDs2m3KkLT4o7Z3qCEQDErTFQ55KpTxWd9qNqtMZonYNQoS2p98LGejoKmBYsnHPcNnCEceo51oBrVQVm8ZZ",
  "key6": "5qvxMhagAgW2naQaAyx14sbrPrnJW9KwAmQSnzZebp2NuWLq47xUSwp2Piaig3tTpNEZpeNYqYQ1ugMjVMzAwYn4",
  "key7": "3CxnqL2i9mxt1j9TNnc7dFTop2yBxU9DEazq5XFaneFVpwDhFYV3JkcFaEqD9QjmoPCSDdj5maNADxWzXB1AYviT",
  "key8": "439Fh7tFgWEJoFm3vBxV6fXkYAAeZsFwqKMHepsv8X5yRjokTgWHbB9GABEXCij7jS1R1NvgeicJ4bTGdQe6yAAQ",
  "key9": "F8atygJ5jUk1sp3MkcutmnFqJCuMLqqYPQZ9oKyFXtWwJi6L69hmNpyBJ3bdDJYTksXcSg1bq1XwpRKBcWPnXrr",
  "key10": "5Pg9uVaaUQEkq11t7Q8NmqsKdC686G9kTEcqvJYNoSXP8946cLFg5RbSxvuD69Xa7igNmzaoZVsXgceMGJMGB714",
  "key11": "4MMaqxX69JGpFs4djxLs5uPMSvEDfKetMujzUEdy4NXotvaXWXmjuj6rMkYyQHzdGUpq2fcjZpYJq5GipCy1obug",
  "key12": "3hEgA891xNT2oaZive8yu1fzzZDFiwmTRzMfTkvwbH1r7NNmGr2ZdoeqcoyBp9LMwWxgMi1WctR6ecvYSWG1iLAg",
  "key13": "47djVJX8cvDcS9yKtepuJgJxjMiie8NTMeitteC1SNiiRwkUz4jWrLn1vgLrfrymk4k8iy5uPG8GnvrLkLGQWmGM",
  "key14": "5k3vDfu5RPsPhr5puZLUKsVrc5zEcremxw4Y8ncXbxq9XSDQdqpE44azgQtV8fFf6ZMfizjpxdPyv1Hpf36bAbgN",
  "key15": "4Z49c6ewADiYzKpfbyA8sewidBGmkWhq5Er29EvAzkhHRA98ZjY8Lp5vaS7za8dGRzhsgnWbPqgABhNfwH1akzNi",
  "key16": "2QTyJX8mmEY733EiiTvu7mHVovNseGAUi3Nse5He2hjCitA4cLvqhzaspeamw1rT35kAyERcojPukGuLfSgimJuB",
  "key17": "5hjKgr1JPdgyEb2ZesDE7Ww9PDf3oQWAwASAqyPCMp2uS2R1jKwPioTyG45SEsgg2rTnqybtBEa5Ze42si1KE6L6",
  "key18": "4utzfkfj58FLoyE65iGzfQyfkrzdK5dJhJrfNzmrit9wPKM5QSF82WQHmvc1zeKMdomBeNzQdwx8SPFxXsSMRsKo",
  "key19": "5H8TZFtRP7vD77TVHnQAgrYmEaJGaVBHuMxbeTAqSMqH8T6UcPokZnhGYUfzFfMNoJjrxAN68gCKj22XekCKJKph",
  "key20": "64jXpScUnPNDgyEBsaJqK7nW8ANtQ7gL5fvTU5gi4YJ2WktKf1J3u7J6x6FQyZmVpXSUjPVy9HzFTko5EzzWCj4L",
  "key21": "HdsbyzzEjDNoZC5tZB15kZUyKw7TdgogizE3FeDH8JLkrHwYbBNvCDafbDsZA6izwPaWWPVphHSyEzxGBomxg4W",
  "key22": "z8vgj4CKqVfJVxToGzuBcKbckvFr9dATVVDrNcSKcaGXVbfdHe4Pj2x2Bpyyd4ATRTKfJhsQd5bHDxgoz5aamXA",
  "key23": "5VJyNDQmopnVCsFVQM6kK3q8Tj6my249iUUKX5J2z77dLRt49h61HZ3SnkFfFPk2fPnogbLg9BriMzrVUDKfSeFK",
  "key24": "5aPXixspRBtDYP1GWETh6Qn9nkrXcU8ny1STxp3BPqdp4ojVTvzwd38VhgrmeBLEvYQiRq6ZeoANPGRpWu6owf4B",
  "key25": "491t4ef56i5KQNyYJTAbf33zng1Ldw8o2bN43QF39N3Nk7MauhphnHEV5xPAiwSjNVxZcjKP3Jnr6x2rVeGz5xFu",
  "key26": "drwaBpGE7xBgRbsGPZ8QrcMnbasTywfU5cE7NTZrW45t9Y6onswjU5LvVshS36JHDBjq2aAimZ2VxnAcFL1jhfH",
  "key27": "2DiR6ooydfkmg7QWVnhJjnFoFvLk9BYCYzu4AS89Z1Dbo2KS2GLPzGk4PRy2s6qJLFevRVpyf6D4zcSwGcF25jF9",
  "key28": "2Tp9oPEq25Sjv4freFZwaqF6W2xeQWLCTkuEDZ83BzapEFKQy5pF51KS2N8Au5gN8GEwoozCK6NMaYQJBmG6Pffs",
  "key29": "33xixm42abD1f9PagPg5KChQGRJn96a54bKpbTqjwgojd3BKquwv7UorHyF3ehUZuSW6MPug31d5rS1F4PGk9MX",
  "key30": "3Nud4nQ97fZWGGg4KZaAJWJWTHqXTmie4Mpzbr7tyWVFtMJZXoHdYhxKeGB7ySEXB1MwEgBoUT7cK3Sww2TVWx1P",
  "key31": "2MDTk81i8D2og1bAJAzcjRE4n8JFJVGyAfwqcwvMvEmkHWPx6hsYWEWG7z4vWJVaAvN4UsosbijdvdxvnH4JNiwK"
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
