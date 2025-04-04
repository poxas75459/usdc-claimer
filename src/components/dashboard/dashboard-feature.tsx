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
    "4RQnHfUCUQaW3PJyJVYx2powd4LsukgwXP574toB8UPyDSzYR1BmN5SoyPy9e3suiCYQgwpjTcqw6xFgoRTLd7ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N1XDeMsncL9kWXLwwxfzH1KC79p5r167bny7HuqeXkrMLvL8mbfKfEyT7hUfve9uajpLhsewrQ7Ki9oPkfU8oPB",
  "key1": "2r28cjJLzWUh8y25crtojndpg4Ev8mzYBDEYnH13r2kiq71kkAHBa3KnMAHLWE12dGR5JwHU1hv2tMnCJKBGpkwi",
  "key2": "3LRsD96NVujM6U4Lt7StXnbFqqd4Rz6MHjo9TXhqMtzRe7ofTr32FYwx9nQM2iegVQPCVDRWCqSa1LAmZsyZSeuY",
  "key3": "2CvyoAXZsxuPnNQ4tATNjnUHAUMjzR3ZkivUsdaY9AZBisGjrEYBpFwq9j8pQNcY7q3bEQ2XqFDagetsueUHh2gn",
  "key4": "3utDwaugQp6jcBJ5TkTgLUxtsop1Kxscb7XSUB8m4Fuo5QNEPiZi1GrxTfvcez8iHGivwQNriimswoaGMYbeCqGL",
  "key5": "5TvZShUoYzMnSY3vtVNiHfY1zhaeT34AFy2pqxJmH53jfKU7nAqxmbTYoRLV9The9cSk6R8ouGopkVXSRyzsZi8T",
  "key6": "347vWRD5HopTv7AGydJ1n5KUwtvq9vTXfNoV6YpE9TYt5ZBEC2bGpbQF2ovghS2WaEjiu56T7XWWyWfbkaLGC9mi",
  "key7": "4PDjxB7zVHdeDq1XnPYgBAaQCEdchVJ9nvHh9wMVhibem9GG3kBtTd9WAnrhPJNr5zR4nRLqpq4YkVkr2FVf3mvw",
  "key8": "57hiSQ18PJRsEbRC48jL162mBqpYHumZAjhtBJrjMHtWtu1XG4agLtg68E8Q5MVsZv5Tds5bkrGNbdgmdo2CrP9",
  "key9": "3hi2SYVakYCqQEhPJpBPQ8ewdwTHETB2cXN4wBfTUL2vpt6n7qnoXKKDroYegR7ocFhTQwixtkmUjAXemg3KXKmz",
  "key10": "5nhnw2P1suS4VtPsu8sPPu44xGPQtHaM66sqeZJtDV6RpKA9TJFSR6zVwLzn2aixmpGY6xwJpQZgxocGwf5UTWNm",
  "key11": "5HhrB8A7TqDBvX4fBr7ys3zd8sXcGDAfk2DUYoeC4PD81ZyKugvPy6dDDx1fwgDoNJsCwZZosmwtQj8MHHL1ud9z",
  "key12": "2qJ37yaYcrCxAunX8NED46cd1WS6tBcZVs2PZmrXNq23kZQNK1MamWKSkZR65nVaLtQYRP4LG9MdUyQLqRZHzzkf",
  "key13": "4Vra6rKkrXE2g4CK42n7BJTwJHCJEW4K7Q87RHQfUFjvWzELr44rKLmqJgxAaE5hC5yhDk7tdo83vYWLxNqnh5KH",
  "key14": "4hkrDsR43oGpk72Qzm8oRnS5hZDNq1i5GkkkTfNNQvYsZ9xG8wXkKvJyf51M2efmbsn44Q7t7rwqujVWnTxnBRK3",
  "key15": "3bnXFAnegerA42TRhso4bYLd9Cv7McRPmpXiutrhjhk97r8snUumZEM6dPE52mFEtdAYqDKtAqn3xAUmdqCbejYr",
  "key16": "3k2yE7j6j6owFZGaBcqnPJQ9TEyrPpGKdmSG2PiJJ5bUnnZeRiAtFRvc6mBjf7T7Zv5wwNWUBRixjKRQHAzsLTHh",
  "key17": "gyE6VAiqUcnijbHqyeqceSZpD4odt84Gm2CEdMWK695kwt983yVMdKKVUgXCcuXdKe7CQPb5ZAtatAL21f5G5su",
  "key18": "4G4dqUgNQsQJDepiz7TvJHehkjjiazpFNN6QFHqB5rV626uqxPJRscgy9x6r7NYhMZNfoNfMUMdrADMGqqBpf8nE",
  "key19": "5ZP5XfySGX1ix92X5CiqxJJizqfdDW9RQo7rnczbkNP5gVyfH7FosoY8vMyaRD7APHkoYGgAaPPyrz2j5hCHw8zh",
  "key20": "hFusrEZ87DHuRoybuhN7RLG2uZJVH5Cq1CdTzXU96EZxTyKh7VXEHvJpfUZCBJoi1wxQ6EwQ9hcq6Fb3C8ikwsu",
  "key21": "5dEdHQ8yiGPTPBAGscvGrA3u1Uaq6KzTKaSHn1owDGmnZLUHREXkKyvxfVTRfJThptkwJJsMiTFUGkcnuiP7CXWS",
  "key22": "4pBoc19wcAjADyzUzEqNU6NDNAN23hDPaV3up5XQ67Hs3WMgYYdXxTk3dpakgcMLiYJLEJRDdY4abR69bfTVv9XP",
  "key23": "4ajV2HU4sCsFSo1NN8fYiqi6jixhWBfX9bUaGzNBCgbQRM9EJw7kysVgftDETSVh9NDSuEKe1CcrfJMJ9ir4Zzur",
  "key24": "2FnJ9RLFCfR4dcJmxHZuzVK1S6mXjCpc73u5ZGbkuZ3PXfao1c6AFzf51gG4mjUPYqvEQMFbBVpEVdTabRSZKr9X",
  "key25": "KPGNdoNSHP6EEwiR3R7XBEKtC4BMez87uSrZ2LFUGFmm67kKworWLj3Vr7AnTeGjNwbiBET4nqYXThrU3nZm5eY",
  "key26": "2QrmLd2dg39hTRzJSQ5QazMgGDW26zfJkGNLEV4sMX5eyDMqcciZRz4iikf5AdteptxtkQ4a6jpd4owztMggqHVY",
  "key27": "3rZujx5RtfdCgAwuVPraWybotVodFQCErwvycp7WWXGQapXEFjSHaUkjkLBeaE24Dk3wVUgQK6VDnh11K7Brkxvn",
  "key28": "KzzPLT4iMePqx96nGgibiSsJZpcoyW1hz2SvpmX8EWnQpoM9yMQPLWqJh1KoeMxdE6zj3Um29kAUhUvsMVLtCTm",
  "key29": "2Mu5odNciyQD3fUED3YhP7oaJoF5StScF4gJVnhkCXrrcWLzWRzDJp87aiGrAPr8geV93tG9n5FLXrQaNjbCLN3q",
  "key30": "3em9Vh6p2Qo7Fah6aA9kaBrfS3SQz2hY6BhtpBAJg1SKAkRDeukBfNbkronkVSdQrvR3j2di9NGEtf6cWL2iV6TM",
  "key31": "5HZhztF9DLfUKBCg5ZUfSKDKaPvJH4RNpGDhxtvmotFiYvpWScTkta8CprpDRbt67nwUc3j8DB69H37m7JrEz9Qd",
  "key32": "2UwewF4Vc6YraJpFYSRHHhZA7wB9FnWte1QMXXtM4JaL3dFjFDQfkkMMPQekejiR3R3X8BZk9wuYtGtHfp2yZrV",
  "key33": "34vrq9BYufiGjC7xFrhZzXztv5JUWHN2BveBA8YFT2PSixwN7waVMEqUd4piTUJBA7AcA44HY33ouW1HQCHnf6Mt",
  "key34": "4y4V7phvouh1Cimk9MRavoPZFqxSYNSVcCX26pM9gkMjAJMamoqpXGozjYRWGx25Zs9azNdrCDqJ9HTh5HPXRHEz",
  "key35": "1Um8k43bEVxjAkcSK8a1jpurWWGL2ao3W8bbaHgsZTmFWrBy2mkrjdSeHqAtj2VQYJs86R6jf2Wxzmxmy3cJ3ix",
  "key36": "ZoXrRgRCnhrZBMbS6GP5u89gJETbwaryEP3eaVDbgT4qKmoFySm2xMPG8VTSjey5y3dvhUx8SHLPbKby9ZtWJdk"
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
