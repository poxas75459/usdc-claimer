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
    "4jZMpcHmH7kReW6gL4KbM1ee3YxoVwNZ5gdFpEEzF15hQ5CGdX5e75xHHdbV5AEbEDaEuhCGT8Bfx9GUrCTamTpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k54auzj6wKnB7cv6PaPXX9DqhdA8o1YC57GBwZoioDEeoxsQyZJxAL1qAdVK7AYxqbNKGCWuFXeDZzkeAW7kwMf",
  "key1": "54pmSeaoQyYnCYC9wF1BSkA44Dv7vjGoMzvDKBoCTL12nzikAcFR5juDQqe4tJMPHErzEAcAkvGg8meVqfDvW19m",
  "key2": "4qHxjTUMZt9hYDJuT8oVa9xAzhC78A58hobnk7DAxeQsRV4CXvrpnLDGtETStDEWQXYQ3iptSkGgaXsv7t25sSpy",
  "key3": "4dstTjwkbCGLioCtfYiQs7JMEij3TbojLCEFcQCDUCB7mwm8NwuvLGrxxbhfUDbNp4fkXvPtfeRhywHt3YYMANqu",
  "key4": "GDQuCSDxvhy3P6J7cfu5ebFAC7TSfSCX4wgLJHWPJboZPDur8EfBqpUKJCt6ay5KzKmxs9pBt9764n9bjV3cVGm",
  "key5": "3vzPQZrusG5fqX7Z2WMjmQnsSkgGmBWJwBLmxVWmmY7UAw7ZTMP2FjpFKTqKifyRCKKFDhjodWdih4o2R92jK9X",
  "key6": "tAm5eHPcybK9MpvNshYA5NzFdYcAGGiTqCfbpvJZmy7UhU6pLhBTZ2poX1NH8kohWDf15iiRPALLzBskkLVcsYq",
  "key7": "637eQdvoW5FUYSk4sB8KsMgsMdaCcM3Mof5izwNWjZketwor1oMwmFEJSqxmLsvmXtvXvLsbyj4UYLr7MJUc9GZ5",
  "key8": "41yVzMGUozw6sxs2hnbC2Dk129BoMZWEyeVQwnn3hmHjDLdUm4QZtTxm3pBG7iB4Doz8u1MazhGQkNMj7mgYFJVq",
  "key9": "24jXCVtKdAtKTDY8yWQ3hbfC1thAEsVnNytJVWRnxjad4sraZa1Ai8GmHybhZCM8Her7pDCchmEocDGZWrsdisX3",
  "key10": "6zYsccfTyLqdc1dKZbL7PDESVqDi2H49riNqeU8JRWU5SZCBcNTYDJ93qBc8EiHNsjQ5N3fsYQkC4M4CeozfPMC",
  "key11": "txpANoe89JdPLXbgFHV1PR7dnGgKoqMmw39gyPpzb4AxmFaEbqLCsPv5W7xfa7DW2JK9GSsG1wgewxL3R3CMN9N",
  "key12": "vrBSGSd6hG74TaRJ6JN7xoqUBFTaeoVECh7iT4vtsj61XpaLyDim7uy27B7JEZZQVdsTnHgK4WSvUjRzKYhxb6M",
  "key13": "51toFRDGVhxibobE9LQzyqKQHyy8z3K85zzUXHS16ZGsqgHNHH4xy7ivjzUZjCpVEa6zPx4Aywh7GfGTp8TUws6f",
  "key14": "3Raje3NwdouZ1yqDUbZB9y5Yj9PVFhm8PFpDgi5J4zJ4YGRebJE2pK6CbEVAz3PzSKN2YsFgcmrFafLrsHrniobL",
  "key15": "4iS7ShA3Ld4HdRrRa36Rszefw3nn3LsvZFdc6iESJJZGhMsxsv2yRU8giemE867QxKQNvc1qVxmTkoyzeZgiByLm",
  "key16": "5YFEEAYgcS1jMBsP5fHpp1gwpFu6HzHUAUDBtubxoQS49D3J8F3zz1PTCrDkXURTcR9HTEkwVgNq28tnRFQv4MGF",
  "key17": "5NqQc6pyzQ4hBtuhhq36fuT9LhBpznpfjewyG5mtep87aWYhffY2na4AGnYsuP4EJFDgrqQKDw1nw3Sxd4edJgHj",
  "key18": "2b8wYd5QAgA1FcS8Q2bztnPLgFpnfV1TSBWeDgrwX7s6sDNFnZaXhGBAzMry2JxmS7MmuaWCXVwnNBRVR6QNacQ6",
  "key19": "4n99pUVFjMcH7CDrj9R27M1e8eygsuv1caZsFing4UwKd2g4t6ACkFuQi5bW4eY15P59Bd6TYkvDpe895Dija2KN",
  "key20": "2T3TQQzAJpRV9nferSzjHH4Q2pub6LadokRXKbJ6UJGrQd4rGcCPdrGhsm1SvpXmXvbritoEaWuJP2LZ5tDbjrFK",
  "key21": "2x7onetfpcFKJNiHVVaAtUDWjnMQrMKfUegHV71qzcMVqdJKA42Xxp1EMtAa5v7XejpftwHoiAsn8us1xzWJbqX7",
  "key22": "39HrU1SLGrqfEaqErusjbpjq74gxRHQLtMTU7EGwGVAUDpNL6fEZZDNtqg9bFovmduLYTynaN9jv7NWzMhdwvxLv",
  "key23": "5gr5KRFCGLRNcCi9wgSTvM8XnNYX97cwJCqQVeURBCXjdp7Qes9MhuJTqqhrWgtuUBVzuDoaSPM2SJCxXph2j79f",
  "key24": "5AeG4zwafJsSwfL7yV9vXy7T3gZ8T1w5xLhTrvkHhdJpdmnqqbHRmru3f8tbVbyS8GCdu4uCUoRu9HUe6rLHQoMZ",
  "key25": "5qcKLoA78SWYjFgnELJ1V7NUP2cnFYZ8RuCGVCRpvdXPYU4YuYvTupEa6gyNxQ6tKXhew4yQhZwSmYNjmEmWJWeM",
  "key26": "4LHK3mkq8qfbf5osCcVhAYhp1q47a51ajksEYfarcWaB3xe1BeUi56bt3migCG6Mqti8j6sdasMXD5pjo8sf8HqR",
  "key27": "4cRjQ9Pg7nMiUNAq8WPyWbL1GvVuZLVZyiUfBrLhnsgFwCrHfRNMNXADfaVMAMzhXhoq5dnowD8jfoCtxXu5J6Ca",
  "key28": "CWP5Ss7FmfjDKYxRzSrKupb9c52kC7bd8kAqLt8BMqQjcSexgXNnomMiMxfuoVCYmK9ZSg2FbhbHFsLMssXJmmw",
  "key29": "h6LjytNokr8i8vocU1cvLo84JgGFVo8Rxmv3pChAyyUMW7iDbVxEnZmSvcywZjvczMF5yBiznQz4xUDpnvGn7Cw",
  "key30": "5wbNaZ7NTEW62EuaYXr5h6VQqzcnSbkbe65NoUDZqccS3C8udnrhk1SdbdBc2yqo3RXKa1p8Nbbq6P5Nwn87naPp",
  "key31": "3DHZSBjX8RAbCdYjbd1WAQjwvdmbWf4wRSyqkTfuuWyFk9Yk6sdusyL2gFgr2T8CBk6mkw7pWKTZRukDrgMnzRnt",
  "key32": "5LyK2bbHBMY2eLq9HAWBWthcdHuYgMRMyTqkoGBWYcn3Xc6oEjL4RJ2nGt3z3hTvfm7WPg4rSzJtfogbUrcvbtLb",
  "key33": "3mK2BGzn7jYJJuecXFfsUAPJquRoMkhYwctCkaNZJzu4ora1fdJ3H4gAWFJAyJrZBWbAakAVTFWCbvHxBc5x4yaW",
  "key34": "4JJTgKoZ597b2FUDhCnt1z4uNMiJ7wpMYoJdf8Wk4oppaMPShQKPxPfQCDxPr6fc7avWyyyLtd1v2zzjEybLrBFR",
  "key35": "32W8x9iztErfnc5VigDQLMGrQejCcKC5PJ38SdzA53nfXT6R6mgczoXGRBT3wUdmPuDE84Xfix5RF5wXGyT1csF3",
  "key36": "54thGMVj7xFSF6YjLKGJV2yNZBX3uJkHe4MWC1sX9idKbkdwprE5YiE7QK18BPzLtBzK3yZQgipKqwejQFVoZXud",
  "key37": "3F1BUMZmQEiQUJEtn9W6LJtFjBd5RFQTuH49E5FXQ4m3aXzSvaXv9uKrGQ7itHZ8v5Ppgf7Jcm8uWEWnMgXYnr7q",
  "key38": "HdjEFgbjMAwTWF6cK1SakKkHrt2EqKcXD1pDYFJuKNkFz1VW4aodKFTwXqD81Ro6YhEMQtMRP9iC7b82qyKuVBF",
  "key39": "4Aad3VGL3jLUGETY2p9LWG6gNnd5kB4LLAb9giN1NNNjF6PZxyB5u7tsdpSTw7VYPMfbpk6TEAiKn6ivXvkgtdrE",
  "key40": "3FzQZY4xsS73Bt5jofY39SbmVLuvbpmy4U7U2qVxw4N5rKP14VvuYc5oTtx1Q1pvigSXpq4jkvWz9r2JuR8VYfqX"
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
