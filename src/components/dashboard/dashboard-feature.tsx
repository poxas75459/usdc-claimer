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
    "5pw4B11hWxNPbXaMzFZY9U1zC1B3ZYaqC39s4WppGR6yoGA8XxP2BLNSMKR5eiTmvzFqDqidacHssHN7zCeZ5z81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5wvaEwiKaMyyjbGXmnaS9NcGMqsH4TAqAjN4q1ZkJg2bHaiQ6MBE1m8nss1eALf4n4G6KXuzVrrT235GjvyCBt",
  "key1": "3PwNX3mK7D2g8U1XJuGFZh68cwTkd2po875D7ondbQjF61GgzTRyNDNvDbjXgreummv19zqB3tLKkt1iQFLkLMBR",
  "key2": "uEKb2pGrNQXf5ZjnLGZ1ybJXcmB2iehTofbnZNTWdQ42svztaokWXjGJHtbxWrLcbaweSDCr2fq3SmQsPxkYhaX",
  "key3": "4Watg9k5HJSgk2qYSeWdm3dCgFLQJv9DfDBKdE4Ew4U6XhCWZE3rEjCeuiurYVnGN4QDdAA1uGQTzDF7QbASS7SU",
  "key4": "4uUNix7WpQdS76fPUiYFbN8jVfUNrEEzgDWhYwote2yjzVas86U111KAefgVUufQyRcro4LZgjK4mDycxoMPPKUN",
  "key5": "3JkxY2Gg3AiC48vWAmWcQ62p2uWDB5TUeeB4pJ9opCEL8dFbpGgxHRFka3WanJfR3tzhQLYJR3ScaewvZWxJyviB",
  "key6": "4pUgtyr2GLMKRTfehRq2j4DKV3VKof5LiyPZMdSZs9VQGjq7aTNecRixUzXys1wDj5G7pTmETSGSvLCbnmEHPxRD",
  "key7": "3vBrrnD51NkwPh7ULtgsJRkb5fDTmnM6GEfPh8L3mzDSAPCt7nafsp9Rm7dSnzGMKz6fqqtD76LAyMVctWa1GsK3",
  "key8": "5fCWQgPrKWsPfg8LPHCh8F8xvyF5KUZTHAjgArCKN5X6KHic3tbDCHaJ5pRuUuChraebkP69Rh7jF7TaaiueZYN1",
  "key9": "5ZxJfkjpYrp8ZstsRki7XmzK5QszyAgGvf4gtYFyKcavhQGbHnxQ5jeEscN29cYKnc6fcakMyy9yW8xaFieJUJ4d",
  "key10": "2sb9xJxqUeNMCwf58ieoLWbaf9Eh6CqrFHFN8X25korMxtauJ9APySphfAuq5iVr8Ko47qm5TfG3XMazASncbXj3",
  "key11": "mVX8XUmx43XCXYic2tmgiJLBhYTGAse3niaN492wdn3DaeHpd82SRED5GnEVQEjPDF39AY8qAZzBcGhV3k1kDPK",
  "key12": "x6tLrgdJWSkHtokzcmqMsHoHis4QqwnSSj8fyeBCjgQFrZfsjYWaWdxd7CyCEoiMzLyEPsCTVqndYeMQ15aYUee",
  "key13": "3JNEdYQSqMa9hs57u6ivcMJEYM7UsF5iP4jsPhg8PqotiBj1j7nKLj7z4eDzTGZ19AQjv5Ax3PU26gMum7n1syg2",
  "key14": "VNJnzGWGXAVd2z6fXYVbRAc7zxJgi1ozZ7yUEwgq4obdKPDxhBJRKhKV1oNnqpk5yL14AJTdwuGgGrHYJBeSKj2",
  "key15": "92brFZtMfkprTMtgPmGd46rHdiuPDhRFGxzyAhfrtcDsFz4LKsw16xqpmMQk6kRJ5fienxRdTs7LQFfpCaXhcvj",
  "key16": "43KZbS73GZK3cH76qKx46PGABdQvzU8G8NpbfStZUozaU5NYFVv2MnhkW5rsv8dNGTGEgPRgpZ9KSuPwTxnXHodt",
  "key17": "mpSdfNPgTWUWwF3TKXWRPkKw7sK8AQrpFhPLVLNE5Lxuy66oTdLu9H4uhE61Krw5cKKBhxm3y8Xbet94YQmAaP3",
  "key18": "5mXitu5weE4cKaijzZJ41RHym8tN1uainVAdBBBN1ZdeTEneKBYqhrTxPp5poVBsg8R1o1S6VoivvQStCZmnAHJQ",
  "key19": "4YZWAK8WELrifp7mSte4TcYnvd4UeAqe8o5mqiNX2mNDGmrTzKbRZWE4NhiEE6rkZ2jr76CzjnFxNgAyPjrk99bY",
  "key20": "Mcock98pMCEpHYPJuLdKb24Mdiyu9Kne8zgsRa4DAMKxM5wVxVQTfC6NMZ1mZPYCFck427oSSpL2vcUBc8xC2Q2",
  "key21": "59ESRkLhQ1K1Kw8tmoY8weMTwby9BoTSjV5w5bUySiVC53wK2PDrDWRDVKjBubjPUAbqXrir7kKpVriMc7KqrnCG",
  "key22": "4i1huMG1iNn14sx5bigBamCfirVwZFdY2XUQpT58wK292tZKmuzchufehkfiwb6P26oDGtHFu3PNEZYrTvejZigH",
  "key23": "cp5zWymCemUx4sZqQindGMJZg9nydabSjE8Qd3q9CCaNcJeAP3yykq8bZXrMZN13QhW1ea1nn41Rogr99J7vGKW",
  "key24": "37pntMv5ASzuDqqtcyPLogYCwxDUSR3GTmLoPseAL2CZz38gfk6AocMgboKctjdx7xXxQha9vzHD2599j89UGoNs",
  "key25": "5davXNRypXYY8Ze91mQMzpKN3TfWwrCzp2m37v9AeupwhEsHcQGXumxeupvd4oyPsWXUiytRNku7wefEnf7j42dk",
  "key26": "2Hd5ndf1Rh226rBj5TYHJpxJmoxDwkW8FNT4KYeoyMmk8oyydh6gorawVGfFGHy9Y8ooNLXFR9ij1BFpqEx7BrZN",
  "key27": "5Taqg4MkRzqMzffWvEeCQWeuAXHK9h6P1QJH93zujWUzY545hayUWMPji44auuQmrUjxiWxoDYGhd3ET4KQjar4L",
  "key28": "3fE5kKEbey49TtPa776my7FCkEJ1TxeFoemi6ivZ5ggQKawVVuq6h4bkDoVUrrDG8tGDtvkiV72AgiMJEVEqLmQX",
  "key29": "2Lw8e7pGQcycsVPjEnaffgDPvUHmNELZCZdHNSZi868c9MXVDyxsLLgoJ5Q9Ed4puArSZmiGs2D2z2jkdqXSXHzW",
  "key30": "5zbjPyydxwchXuPZz58u2T77VUz34TNSvK9jkzD5ALrgpqepN5MD349JrtkrD5TqhAz3jTEamxWhhV9AL1RWGisS",
  "key31": "dJH2FfknkH4yKabD3yjzvJVJx7sV32F2iYSSUuBe2viNuYgUUsv9AesVpYfB3SUxeNBX4dNaA5Dg2Rp8TsELE9f",
  "key32": "3AftYyo38kjHvHFm1DnHt9Qxpx61ze4fAcTj6W5zpc1ymfjxVXAbyKpxhkARbikWySqxbsDGV9uFE84tiSvKye4A",
  "key33": "dne27wnAsrhGvhCtGn41qAoQf1ReMS2BC1gMLHM35h6ga6mGiAMMSyr33ciLtXb1J8R1adBbPsfr8goy721Whp9",
  "key34": "5HgiJQMiv4i3jDxMRqm4w88NSyJsMM3r4TSAVQWdbjRG3hN5F2CPJ8RxhJcrFv2qZGPHPsQAeoqY2bQLSXYB8RkP",
  "key35": "fh4CivuNMPeBZTYX527okpe4HKnia9MjBwFaQaCD6fNuzSWcdr9NN715EK4cCnD5dkfMF7skQ33jZvW5aE7UCNN",
  "key36": "3WypFCtfev7GuLrpBFBoSGktFrazDYRaRv7gPUUyLVg8uqzve3b7DbcaUuMm71uBCYxj227Lz3adNb7L3vX93GXE",
  "key37": "4rVLZYLzExaWKUgpLTpWzBs5QexxagjRY8fnkeiinFDER4GDaspZWTM7xCesgiK2LvJrdB1EXNircYiEHcF7bXc1",
  "key38": "3VTpbvbPW89LdWbr9PYqMxdXTXyksSFWwYoWYFrB2kLKZNYX9vxkVMZE2M4F6iEVE6TUKWVaRqzfxRQeYV3ddV6s",
  "key39": "3k8NKkS2BGgUpJZhfeF1AjX4rmAX4DLkBA45ZcdbUo6j2ZcpEiEjyPiiw2abcScEB26PAbqaufCTUWcXadaK2vPQ",
  "key40": "KFVFxqQdgs35DvttJES6pceWFp6tUWzEVTWZ197G9DiHyAfJfVvtC1XpHuS7JsbHtSAGsF2EndpdNGidXDPW5BB",
  "key41": "jf1HUKbsm3iSN6ddFHKL2nHf2Eed72N2hP8bfdx26wir4hsHTxq7W6ppry2Bk1Vwa6vvtjdTnV5wVMf4HRbrjRs",
  "key42": "JXEnPYc9uj5z3mVjNdWc971CmZEXMeo2Jft6ZzA58KM8x4fnjjQuj8HTo1RpUjDttQLzj1wbnPvbV9GhUBfHQHS",
  "key43": "3rQkzAUGifYpZp2fFrYHCXSecNdrsN1wvJ24Q9Psnf1XdknkDZ9CNcoMsv2c75gDcckw1tMZkUUFQ5KohnhAu2Ux",
  "key44": "x1nEDLiCx5C8nYhBo5CGsakXXZ4GXadCfvWaAW7GybgcN3nUeZKjix5BckNpziAtBAoCE1dzWrTxAyi1jLZBwzi",
  "key45": "41z7JPYr3wjq8WEg8gGnKKAasZaXpnBnVQ2vwNVV13WwEnVKCgjc76s1ynnZY3vFLBGArF6iogFNYwP6pjwFwoyJ",
  "key46": "529VQhSn9wEFrUfgTaJ83Xp1ny6joogsDvZJN1JSUfnbSKgFpmimEMJwZZsjWG7h3krPNgct6QNUoQckwaEcVUun",
  "key47": "49Uj6h5g2pESqSvbDoYk4mDmpWPzbQYR5s8LVSxDhzuCQoL1EQ2mC4rNv6LqYhGBDakji14AnzAmST3cQKLpBiRz"
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
