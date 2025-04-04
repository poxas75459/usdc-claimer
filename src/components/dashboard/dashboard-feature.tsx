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
    "KJ6isxBpZPJ2ZkvRA9aWYyg993TfccCLNWgVd94fCXCh4Dyfq6RV2PfDTmvckZ4zbUJ5taFg2jX3Fvznq7MctYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ec5kjmwrdx5zn5ELZFhNggXhYzSEzGaWEC5cdmZKaRk9jTohe7pscJ1pMXRWiQhE8Y6NqexKM8wVnuGrNf6WTvy",
  "key1": "3rK1Ge2bamh1aCcVkCcbnjLgL3k1wGygaPH8j6UCVZ5LSnZX1VABojWRxDdLGEGPMVxdPhqFDpSzepSpPR49sTKf",
  "key2": "3E2f1VNYsTdXpj5HKEA2DFQji7FZSyJFrKt8SBdLova4yphukBDimEUQE5RKzjJZTmpUwg8VAa4EzCzHh7KqYvfT",
  "key3": "DvdadYT2NoEbY5MujdCe8wyB37qo5bJQHzRfKEtFJA1XaqgGxScV7scCCjYHvVHH88vHSw3U7umkzwSh3Lzkn45",
  "key4": "5FGR63387aLoeEVXiKq2GXk2VJmg5gxMk41sXaRQ4bqNYQKoCd7TkiG5advSFZWX14Eu74BE8Tfb63H4BhLTTBZb",
  "key5": "66vnFAUuSCvfD9WaALesuW8h36cLTvxJ1g2TBqm2RbFsgBXhkqfG1BTq36Gw4EdYriEWzLEDc2WHjLf8ygTgPKrZ",
  "key6": "6ib1LrUXhG3qZtaoRnA2CbcFHiguV7eZ4kxa8ky72QjKwodnLehDTDrcArey2w7G9D5GzGaLte3sL2bzF62efgf",
  "key7": "4ZstQ5bDoXiEbtpwzq1HpmFYLkXCN8oqHL8SLhNRYbpBcXHNhz64qak9UCY2ChVPxYvk1K2M8c9MJR9EiA3DEJ1A",
  "key8": "2RZ7foGycpAJUWEPgzyrPN4e4pqLSx35tY1doVTwZsS3VREkAyFXERrEYFZrA8LR24Cnh9FYPnyu3Uz2sqaVpcN6",
  "key9": "41JvDMjakYsUFrPVfnVjiacoZJHJbFCRMkWApsaNzjsjTxRdaFBLuAmt7k2xcQumv5Ct6mYkzLoPR85hXbmmjH92",
  "key10": "3vdniBy9giiV1zXbHKKCnqV1xywz8Mt95Y3SyHCE48cgfthaeAL8GgjQns3LVnRHfVcYs5xxkW7bSCXjGTLd2QjU",
  "key11": "4S4KHjKeFVhn47o6iTbnYRMWPotN6Zq5yc1cn9o7snTX5AGTjb6NoikSSDYofsyxSYmAbDLoideR6ek3ZxxWp7Db",
  "key12": "3cJ1GeQ9PD52HVb487UhuqzScDU2GA9Wsk8LpHHAu1GurZFRDyLRCchqdY2J2Vpk8j87evyK5ULA44cJjb6Jh2f1",
  "key13": "4Do1JAgFGV6SoccsDiiFpwzt3GUWBn78DKY7o92N7TS8A1MFjQrko3m79bfM1DWrE2RaGDWL56mm5iYYpFvCvXEZ",
  "key14": "5bwoC6y37NzGof2STXvrNetys1eQCrBi1euWyHhw6ULRMoNwXBaTxQ6WBUBmZDyU9h4UPcqjWp4xD5VoPSpXcP4C",
  "key15": "3P3Fm32zsyA7H1WpaNhFr66kSFWn9RBbqqPZqPxTjyXJmZXZ7F2J1pdmHne1CqzrG7Xhc3Armvt4Jj28roKu88Kz",
  "key16": "4bZFzbA6zd9RN5M2mq3J8RLbsr6ebu1kztZ7m1LU5Qt9beS4e5uwrcKU1TSSKVtK8BNvDXCrLxZECVznTCZZoZ3z",
  "key17": "2YwWy6x3fvpV7rZeKSXx7AxYDJ34GKfYENJRUMzZVLBYo4kSgYSmjd5ux1NRZbNd4eE8Ytg6hFzj7tGNACAVstFt",
  "key18": "56Z6yNSTHvy3hEZuBD8yWvVdUhemuxGVdajjVXa4J238WcCPWhEhZ5HnDxLdmSquKqxBVQamVgp8AcafAJwD2s5H",
  "key19": "2GxRtQem4ny5yUzXDhz2Z743ZEFzfTUzkVEscm5ToYKUW4SX6KEuS2ajbnwj15PoKUZJGj5jcPvN6mgNtM5jqqJa",
  "key20": "65ESqVaCQkpjmsqdejCK3Qw8vSeVVVjqyPe1DuDFXu98QtPRBYp19RSoZR1pMEyEgKhzts9zb2L7oXRmXHtFMk77",
  "key21": "5BuP4mrHEMtsxgAEkrpZrGrvhWviBrRt22o22Wyz5mJXH58bFGtFCEzvuyzqye7ik68sgy6Cs6LqKzJxHXw8SiPn",
  "key22": "fDWfsdu76fr3t5j5rQXtUmwC7tGHVJyczNEEERtYafeQNeHpBB1sbkB5sWSjpgnz764LHfMs4BiKrjEvccy9Ujj",
  "key23": "4bQ2i5rUuDaEKQRsJya8KPZAmrNprJMc6QqhLHYuEcGnU7Xkz8vVdYyJ1sAhChUtVq53EJcBi8jaR6qyNBc5FXuT",
  "key24": "J5ed7pD1qipcV7KfrHf75xBDnWYEqzV3L72fe6iPVtEGkb64LgobnHmtrNm8xCvM8qDTeJUDmdjF7MicbQU6aYy",
  "key25": "5YhrCHtndyy6GNd8R7MFwDsS1hyhKGWTPJeXdmimjcwXvmCskmGcieA5uw3x4cEvm8VDcg6HXGmr7cj9YUKx5Q9S",
  "key26": "2hQJ48qR7RTuMXa9VaL3N53EZiZxngWJdEm54Ex25HPwM6Jwhdbt27t7EFo1TizDoQWfimrpkDQABHc6Tkq5Jxp3",
  "key27": "TFLDMijHG3jpicRJpbAa9kyejvwoEwsU3z5cFCE4jMJbidMDBqsMTqEabWkzuWJC5F4RHhGPepFaFknFxFSCxFy",
  "key28": "4MUinR5xwU4LyeHbhf1S3ip4KTTpFLyWeUAmdiyx69K41VEde7yrzxHNJGZo8j6XQ5wr7RegtEQejX4R2n25NbSE",
  "key29": "4DD1owTKDtoT8hAGD9pv9jKj34RjzcGGDZR3qSf1Wn5CdrK9iZS9bdwKbW5xnbskVqyUq8AbY5NGEVjnzdzTTNs1",
  "key30": "5iUJNtH8FFaFNrQm2MayFECyFx9axNBmQVJWyJ7URJDAvena3ty8H3wc8moiqaKsBdw4EXiQSzaGCwD73LfcHYv7",
  "key31": "3YYb1gcQdxTjDax83cc1GHnhrJNL1Xp5Dwjh97j3wfhb4mp7v33ft6X4xLv9uYMs2Z9dybjWbwQDbX3rXbfVRnaK",
  "key32": "5JoPonfmbWMS6wGV571YMqN3bh58dcxBj6J3eZPQhNnoLsFSnSiRJNDPS2xRZyz1i5XUngWswVqXfK2JvgLV6iDh",
  "key33": "5r3tdgBVTK9HwCDEUdkXkP1jGx8ur3V5FCMbdSxtQX7PkG3QcWUi2SyJFyjnKvJDkxLvVShE7FUbjVGNHFtdnF1D",
  "key34": "5Rsjz3o1Lc8yUohanWq2ap7pJE6n1YzRn9PA53WJscYnSFx9porxjjCmsXfr5FTBZo6fL6hpEivc9Xm7rx5k2S3H",
  "key35": "2T3U4mvV9p1oxAkrHSpvG1a2y5NEYRwGtn9TtkPTiLoSnvNWJ6qpu8Zk3GT2GY8kSNs3NCGRurxLLnqvA4PB24ZG",
  "key36": "Q8CTeWuic35BZhzxyycTdVdC9MbY89wAd6qUZMCoJurdHg8hEzWWfb4Q4tUxt3TCL1dJgWqP9PJGtCwX8mRVSmn",
  "key37": "5qSgxWDjtTDTUcDT36mRmcpdCcdYNZBU2F5CQHMZURn4DdmeugFtTXBcpS3Ca2RXcM3xSLCc4gi5uwHL1FQbmzZ9",
  "key38": "4jSB3XtTxJYS7BQ6vhinTvgH8TCqbmrwRAQHAYcgo1mWtYVpc6qVuPd62rWU5NTwvsbeKY4v8x56UL1b5Nkkrfiu",
  "key39": "3tGdcMqoPeH3nAiff7vpyEKZh18471VY6p7p3oiuSGd19NkynjiBYZM1MzLvNgfMDqDweHWZm94nG7WC4UeY44oZ",
  "key40": "2mayX34rrfX4cmvQ5sa4az1cYkY9aQ5m74f2agtt1VDcgWmeMed5e6ugigqqAmkuvimZBNquN8TtF4c28u3wP2C8",
  "key41": "5gvgaUrnuCH7eqYXsgLocXwPFRep8Sm2Q7Pc1zAsM6bNuRWCrNWA5oitUnAbqmZY62Y8yYNuaJ3akArX49ZaPzg9",
  "key42": "4YqB7h4GiyaBf6MHy7x7MqD9nfzFT8xnTEJwFKYYzVZaboT5qBRYeH1VpreKZNYrrQFwB7dbaKaDHgn16LC3DxRw",
  "key43": "2DfKJwjma2aeUFvp7DENTe8EZiN5iVhDzkZXZMKnmC9Q1vWS3HWqWMFgHQ52xxQL4QuwhcPbUfkRCPJJCu351e6o",
  "key44": "NZdMWnZBYK1gVz5YhShLdmJpNLjy4xgF5ogo6MLpNYBqk2jhtsewHXUS5rkagapwuiNYUW8qJbGAjJ4U62fwSRD",
  "key45": "fvCECEkvxKiKCPxpMu2cL4d5QfXZ6V8MUpqDUw4MU6NyEJwgUeZ4o4dwAB36a5rFFdxTywmsLNuawHPXVQvxiaC",
  "key46": "3zgpL4fypzRdDcxN58f7zhMobLZDHNNouBACHwJR1rdX6BBeueDdmoXgEzUiwyH3bTrmMtKZNW3QGeDfjPHbjJTm",
  "key47": "2iS62hPXuEjPv5a37WNCRy3FMtAVUbcSm2Pc2oaxiUL8hcBMeNqEfxgkaAhXn5DhxMKxK3bwXuhoj2k4LwpgWCek",
  "key48": "tU3wod59twGb7mPCYbg2ixo78ErBt7dZPZCFGDw2nee2pRQTHNUuaNSz9ETNdSbqGazi7mYvEQtLvz681kYhZji"
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
