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
    "4aeNT7U6aijLaJ8sV5RiUwLQySZ36ZXg4d5mdkMZsHSyxNeRpTJfPbdzypkM6yp88hNchfV3HPPxzj2vHxCbQjxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zkEqczNX2NBKtm9AyndmxcMfCjZxEoseEa5qs3dCWAN8w2jFcuPoCdbxCL4DzjeBAs4SdQF2P6SRRrTEVaZgLMb",
  "key1": "2d7s7VcvFHSfdiX4MiawRrQdSbzodusKwziQaX599SvivrYmrRDNyeNE46HHGVth892TqUhRz2jJH13ps6oNsxg1",
  "key2": "5Bki9Lqfyvy3xwGu6zYUQ44NSKonn6hDP49xs89dzq6NoqMbfPkdpn2djQjtzcdmN3EWYqswLYhsCXxQWRXCZzRc",
  "key3": "eQWwfHUDumqHvAJCfWj1CqiKCBhxoMRcztiAtAC3ZMbSEmHptoV4Ura3zo6uFqfoefsktmScNztJEE4SjpxjYRs",
  "key4": "3v3qKCe4WKaph73B6bkcacMG7RhJpUAx9HHKnGfc29U3u4xTnMHC2o8Jx7XM9zuvwCz4VfSjeaHyk47zuG2LtTWk",
  "key5": "3Fn4bSbTuPdUD25TsubXibpqRQ6SpikfNKvngUuxgPyk6hkFVxcwJ2Ccx7CDXBVy4pPcZ6wcEasv96DB24HsLUVx",
  "key6": "4T5jt44Qg27HhzzaUGZtBkk6VPPchf4NvSYXXhdRTYs1vg4H9Li39ZRpPgKH8e3jsEpkgDddshAkbk2VZzScjPuG",
  "key7": "2brZ8d2aSHufFHubuEyqyTPDb75pyUXmDAAXiiUjahezyRXthnbaHdX6B4BYZEewcw2Qwfu4ogQLx4wHMRxRUAPV",
  "key8": "2jHt5PqSZGZeUrDk5cb3GpjaFugzzNrZBrHACZ7qkCLW3Atby6TY9hNEtfJoE8ZRM3fxmLZgdBzbuUsCbwhmeuNc",
  "key9": "x5UiAgvj5pV2NWGy1vhJrbUE3mjvi3ajPMjWFz7GVocK4gEwVGiPkTiP6Vb7zi9BrnmBhJ3nxVp8VAbzJBksNFo",
  "key10": "4S6QLiQPyPBbEQoekHXgd2DEvzYwNrWoUzsTjoNqEJspuzieoWho2mfT8t5TJ1i8FEFFpdkmVaZrfbp7N2XzXFB9",
  "key11": "5P22ZfEGeKqBQR7bZfTzNxcijwmxf292odxdcw9bZdKGJ8PUPRPWU9ZRNi5qkYThis5TcHb6dkMdDsqBZ8qfgENZ",
  "key12": "5pDcba5RUuTnNVZsR33gnfD4WW2CnZdRy2rJ7mqcqMJHNE8bPBjsBDHQitZZzVX2dRaZWj73VrqbKFDy1mnT8QjG",
  "key13": "4ccjDqEknJAUpWs8cMYuqPyJkBYMa8aYeqhzyG69rKQJssX4VEAL58JnfqLE8E31uAr38JcU2WmDFxVwvmJHPVYB",
  "key14": "V95ZXcddbCjQK5FCwmm7qwf1NmoACTWvUujhftjERduNNFFxEjuWsrZq7Ynr5JSvfBghLLKg6nYDiFVVStmbeG4",
  "key15": "52K2bdJTWJySDidj1tkMFGbyp7shDZFP4hYJE39cwF9R9AVXtpZfLkra3b1e4ixC8yqM9LYa1MUibNoEZ5s9d8Ri",
  "key16": "3h2LxsAGLTBtBBrKK2cEwfdQGz3MAguZn44bxQathUGYBpzqHHuFppQdfuE46CkUTeLZRbXcUxWNiKLiMtWd7od3",
  "key17": "VUhiyUNbov8wRyqn3m3BkwcfRhUhxVn1uRXcwPMZfp4nFDV1PyRN2pvkoMVcHfT4QSxe7TbmnHbacH77mUzQV6Z",
  "key18": "2hKcdKHa1RuQ8DWiYiAjx15TNpsEvoDJDCqKnMxgG1zbk4Hojh6HTywCMzbUD58TftLK9ADtzeSnV3SA4raz4DaV",
  "key19": "3Sg9PpgL6u88k53wvTbeK5p9qUMscmM5bgREMjp5ieERyEf1tD4DGq9qXADyVu1pbkHHKi3GJdUXTeHLmo2fYjLg",
  "key20": "kNWQYTV6zstcY3pCEzw4AG17NAC2uLdio5d8XjcfW9BEZhEru3TJkvfoamUx9zk4LtVGxBFDc9wip5oSdZhbDmF",
  "key21": "3cAGrQYJoN3gaMhKMcxMU5Xetpz8VbYyPEwo1y764nTkmXXAH1fcPYZ8UxQ2WHdgWgpSxGt2quX6ci8AKYonJVhd",
  "key22": "TsoPBrFL65v1HW8np6QTBwNFC4TVCMkmHSXceAHZiRQXzyFbbFA3c6a7v1kQTsr8BKHoFJb46gNHxfZGmyDmVtV",
  "key23": "3vqY9YV16hJkxNq3SoQjficJrGZLbbki57p5YwNWuNUgYMiJGER6YkyQrBjMFKpTSC2XC8nXg3y2wn8WVjeF7Hig",
  "key24": "2kPuSWv6zLGjzfg1khCF3NqxohbnJTSBNBEjfhtU19B1kAZSGMsLMU47dvzti4FPXRK3hFrSzrax6XpcUjBjT97u",
  "key25": "2moKukU7ZGwXF3UcvjtkxHo9FPepyVP5CQZ15ruHfa5J4T8jTS9GEpUDM79EPBf1YDz3kqBSHXFyaSD9mDfFukow",
  "key26": "48fcvD9mE8Eh8AU9qpcpP5YPqp9XyuTLMGcx8rQT9HZea2H24E5wtRKUNFdww873knx8DRPgvcKNKq5FHkBed9KE",
  "key27": "2WWuemcHqbvRcBk3rtqfcn85ssWCuBouUmFiJCPTqdTTSqq9mwqWZprqafxgBpiTQPWcbd6jY6wRdYoC2opcKSvG",
  "key28": "ybM2ej5xuRJRhom424gc86uPCT3CCcYN3Tf7ttnLu26sZHBSZNqYwJZAKfmTm4PdEFDjiLWzmdP72j3fs9eCd3b",
  "key29": "CeamVcWCE1Jh8KjZJFwgXPe8Vdkkw7ymrqsnUSZ9rsNQdZFrn1nPadQVp5XCixar2ezD831rFucuRvT3RhS2rgk",
  "key30": "GrQfFRp3XSzHJybTAzPE8g3KG9Vn31AvqGYyaWedUxrSKwshDa3WVvsvK7LuMYRzJ81EHcYgAfbSghRtw8o3B1N",
  "key31": "3WsMev3HVPiCr9J9fyMMxbPX6mtubmVcizzxBTcMs3V3ZEtfH55ra74pKPzSbwG6SajmdVVhUB3PmnuZ84HccLRx",
  "key32": "2DBAWAHc5AR9bm8s3aZxZyGEpK8rKGxanW8MWSmyYYKBdt8NYm59QFj6nJMwgnguG8bS4e5LtJAtscUYSyRYBwkN",
  "key33": "4zmsjXZ4ksvwm2Zz6a5R8cNFFQyPkNSjW37ueCshgpsVH2KBmyZthVFyu8j8qgPYHHZMnwFZMKw61JCUqEdtoWNs",
  "key34": "4jnAfRWQTqTxznWK3nstXyjA2eLZ73cBhPyqX6Qamkb93WNDcWC2f74w9ge8jbsCbkb3sMBreRStBMH48ydALMAJ",
  "key35": "3MK4sDr6MfC57oZSN8CerDrxYnF9QRaF6Ug7RquQnHvS1QsAbCXhuhpRaoFroVNkp8FzNBAv6PCVvecARBsfGMnK",
  "key36": "5hsucHsDzpEebN1jhAq27hqRUGaC9VJXHihp7YtEwBUdF5Ao12qWSBt98KonkkUi6wNKihk7k8BTfEg183DoJcd2",
  "key37": "eyaP6zcQDsyKfxUPjEdt3wrQc3JFaTnBZAnbXQzcsS8iD15fYCiMxnchz8fr61L1owUm4kMcrwJB44reqmMBzyF",
  "key38": "3egU7wozYLKqEywZwTkMNv811SNhRAMdMevgRpTrNj91SsoUJdKTAijYFQD6SEyJGQVasvb3uvB6hRPDoaKpXx4",
  "key39": "2UPKqzy3r89DTqbQB8pU91wCvPwkhYXd7VvhX27zrioXS5C28Qp6kBNYqtkMAbZHhCLssFeUn56VmUyqU7Cu6ZM4",
  "key40": "5Bi5vFvBfZ4xfjv7aHdFqz6PRThtFUeQEr1ryjTGSp1n9TnTWrQVGpeUeKgG4yubGeLzMeja5hx5UiKcnESWr2Jp",
  "key41": "4QHDMfy54XnJmwUSCLtJRcGhS8noTX7oTQMJQg5H3eN4Laumo9NgCzTKhWiEcXE1hERoKGdetP9tKLLN8caBoYiL",
  "key42": "27LRzZdz5aaj7xHyNf9qawJC3fGjAYX8qH7iFq8fQBZfDMJHuGM6LcKGfzxhynXDWmPa7i6RVXQbNg85vo5NX4Hz",
  "key43": "2MFXZrMtMAfj9U1RpatVBqVEMHEuwizvvhw4kVhbqxdFAKv9jM8yGyACx9BcVnxGMJKL1Z5tvqzRJNGetVcLXqSe",
  "key44": "57dyaYHvHqKGVWXJ1e37D3rnTgDjuubcWFCRGc3ST4HL3dJF1z8HGFTj3XVw2y3HZSfuQaSGzM7jp2QjPz1rBtJg",
  "key45": "NHkuXZC1TU5hHT4NDGe3Hoft9SdsuYZWg1pDGmrWJVfd4rZ6H1yxRxFtzruefSR7sameWcfuRvvGTTJcRtDsK9X",
  "key46": "2WCfBmxyv22fQ2wy86ymC73DqZEEeeMmn3X89aYPci8TJVGUpiBgZ3aFB3RwowiBkq8iwLu3pf3LT33uGQVyMajT",
  "key47": "5eX4BeSdJgMEDV21b7u9gE5px57nbaSEoe3TxQm7F3Z7TgV8YtDgSpZ7waA1v7YF5AfGSUtLchbp6cxB2NV3JUGU",
  "key48": "CnwHN9T2kMKAQDBASDBk9pV2Yk9czo1Mkkxb3Ujx162tVvZi2tmi9jaefkDwsyiBgYNXTdTpobFd3dL8vS4QeZG"
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
