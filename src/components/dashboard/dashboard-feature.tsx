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
    "33U1jezKKvj7yY5mrP3AvKH1ZqFqbfoFehwpFxnkjYLZm7Q9ZMjg9fnyUat69wEz34fpsFkRVUwmf42g5pFdbeu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiTrQHQqnTzxPp9kNjksfSJZXRC2N5V4CVh9yHbH8hutj8pAZdFKdHSbRFVx3MhnVA8njW8jSrpNB2uYHoieRoW",
  "key1": "27H1R5949cDokB6EceyPSBoYiT5dKi2o9uvdBjBNV2tDvFNCDmQarmWSxTCeyE2Frv6TDNMF1AvSoAPE4YczEcor",
  "key2": "5mCv5TuFSHjDj9yeNLDGrGDr1jaW3paqKv3wDbPeyCZXFYT9PqkeFTkxnn34zozyZQGTrj51XvEpCeqcnuigdTBx",
  "key3": "2HvviwvFDJkBjrj5mJv4hJ34rJ43V8xqfmkPZELFoX9nHozRZL7E5WM1tPqntdse1opAbW1fWDVKDW589AyxojUW",
  "key4": "2MJ11YKuzVEpyatunM9ofZr7tvaMvidFWDXb7bwXAq7zshj9xEYcU2hBMkYo22VPRfGQErvPJC6ZZugrqt4bK3u7",
  "key5": "EBDnDHfBevTA7EUoP1buDjXbAhdhKvnvHmCEqptPt3NrEYbYzMeT4L96hNuiuUCtDv62wkCrVaxT1vFfxWvxTJD",
  "key6": "55G1p3ycvEhF7PsqrRoS7X3jAC3FQbxy39PtSCwFGMhRoSfE6fNP3K6yeejRFZ62nCc3L5Cze1RSKV4DeQJMHKx8",
  "key7": "55twzS7omwXmYwh21g25azeFeeHesNPhkGmZCYecVA2Cw8o2LAnnb1oEBRhhWuuwu3MGKq4psf5Gmrsr1MpMFNJn",
  "key8": "452popPFMQ7Yhm4C9qL8RpPQHumLVqwk33JR53FckAiQRReLfcTG19dTuZzvQmmUUmfPMfZjD6iABnus7ca9xxMj",
  "key9": "5LWACKZPGHzuKeupLygHeXuqCakPdKa2tNfVg1KUwGnKFmjh6Kp6M1p4ft4KrADK9tggPAEiesK9oJrJFXfzSUJ8",
  "key10": "3USKFTdCR4RKcJcVeb5LUDtVXtLBiXgKM18b3tJcAwDBseSrC9kTLSRdwjdWrpF4cMedYZhhWw9MyfvrKbQ2WoJd",
  "key11": "2bzG5SZNbmcm9dx8nguPbmqtW2XcTSrYqRHyqhdBKJds32JSP1UZYsAe5USpMDSTKJure6pdibJXRpXgbz27RABe",
  "key12": "foD7sZTaZkhwZPNc6sTGUxshxB1SavASChhx7KMkqRfLCcxUaMKNEhJZh6bkLnAoferXXBp1UTcnQVzdWZhBHAQ",
  "key13": "2tBv8jwobfUYhAN6r1wZgmJWhzUGeEzVWwCEtEMhFw8SEkUkchRUYa25f1UGAtKmg3tdxUSCcUq5oBV8iEK9BeUa",
  "key14": "UWtJcZMQczfkQ4dPLAQZXZdMbbSXUQxR6TB64G5tu1ZHdW1TKDfwPrc7DWiWszyM5BT2B4jAFiuFiFiURFtkBv9",
  "key15": "43QGFzqxnVYq4PFD8FSoRzGVNDeKJHTc7cr5YpRs6tgqGUW2dmc3YBanx7Ug9rtdGtscLpnrhmSQcJpXX38G6ktU",
  "key16": "3gubCZMGHkyGz9qi3BngZKNDBDMyrV8A7pDaaoQ9QtxhtVa1H6HDUayst7uoZmA5C4uD94BpuDDvRTH2bqCfby19",
  "key17": "5QanYhBrdjCA1eeV7HpuV3BmfafHqGERxzym7e8BLTcuvpPcMtcctCifXkqzyNQmxvHnKZjqyh3Cz6SDdQMjNmJo",
  "key18": "1A4zj8j9ethKDoCaw2e3jcGTRk8GBVgGshJxLc26a4rEkVTiV1BwPYYb8GoD1m8CkLDzXyHpeWGcqGZGUZKErdu",
  "key19": "3g7EpncJwnDXB1NndxT1TrvPaem1491L5n3WTRdc2DwsSSUb4yLg1psGQmsRqdx9HH9RdiyqXadoXfgm8vtdDxjp",
  "key20": "5UbE1v8EV19jgt39qgT6z9NTVLtH6yqAKkWgmCqmpLp7AdN8DtjV6GJApQrEW7TetDNHebeFFhdBFtPrTKoWFrxX",
  "key21": "5aYMq5K6x7EtSpVhugfzR3mCDb4oUbUQY4rNJ999w8U8n8Z97vvGpFuxsEuPRnXFYQCp9BBb75fUYKFcGKjcPWch",
  "key22": "5kdMf6qomPtTEKv5a21yPpiTR8NebXfPWpFAu79ZYmqhuGiLGrShxXB8bdzVwTcS16Ehu6q1Xec58g1f5TpJDbKt",
  "key23": "3WmHzUdcUet9vkQtrg3RzMHA7TC8rztB4TyFXWmFgMRqz9WDE9QiKwMwY75f1JXi1R4NmHSAofoKx12cVVVvhSSR",
  "key24": "LDByf91SYxSMCazC3fq8LYvyJcjozmuqNFxqFXn8kmLFs95BNmqHNkMt2oUDqdH4uuv6EKEVXar75RYzTvdWYvY",
  "key25": "3fPKF37HWBz13oyLrdDfz6Dx2mMEhSjfYdZdrMw5XFmfvCK4ScSuxL78aiYUXB53dxY7y48UCjrbrm732tG2FEbn",
  "key26": "4kW9B4VgZ1AYwVYptWLtvjG4SXK4fiqdoHbX12hmA5vYsBrGk5UoiUvZrmansjQvTYFChPqKgEx8JpQrCTGARLQe",
  "key27": "3w7bicdAkBQgv2qks2uT9xU1p78NJqsawTqESjk67v1evF3Y1ZKYNFqjNQmX8sVwAi722x3mTkzTaj72BPaxNgct",
  "key28": "2unvhDEvsxskp4RuFfotzRG7vaG5enHNFdUEVXbHFdiWjPxM4NwHNDNtQQ5f3iQkprsYhGfpUNNXgshM3ENWjvRE",
  "key29": "3vuRe3irdA8xF76M9v8Kp3x4V1mghTARde19JHJmi6mUSkSLapoU3vQiVB7F6XBRYrdkrpN39fg3ctvbcT8t4Rzn",
  "key30": "LibKp8BhhrxPg8hVirHQrqvf8gzMmysMdHpiNfGcKieNsy6JUCoSyr16PpeMnJbKXNpHqitPA9G6Zc226d3KYYS",
  "key31": "65QjfETiZQzpQdS7FWKPxHTeBakvfrMYLufnqKM5S4vSCPyB9L1GkBGWWwYsFuz29pXjaYSgh6yVkNtoGifB4Zeh",
  "key32": "2KQhkkXC252oHRiT1oTRXaP28Ui8Tm1EXTXyxzGv5ZRt8ohbBqg6FF3bkeFJH2Re2mLXqgzx7QStNPNewZ9E6WPC",
  "key33": "5nvyJhkcCXEuUjYiKA7qQXqyXQ2fCnYYG8G1DSvttbpW5ipo1kPQAYajbsgd3kugpFWMovx1Tq6KSU8LzZBz77Mt",
  "key34": "3ArzDKfop9w6dHD7xHb3991akmzDbfsJZyjeJj54LofugZtrtBV6QXmWMcoW3vSbgA2pHRpbFqACfxjs7MYMNj88",
  "key35": "2ipY47LJP8JF4njoAMktaJTog9HTtcMPcfsdVQrvLmCGaQpbnucWwXoLqD2mFwc6aQQySkUYPBuEbX6T6KRypFQ8",
  "key36": "3SK1H9S5JLF1F7usC4nFR9D73pmF6nF2GdAseaWE9n49tmMSfJHA76a38sn6eKDNdrHQT9SVqqjdjq9QkTGVnXTh",
  "key37": "47JDYjsAGtXKWXRVM58sHEurHRw7C7YNcNVXgkQD1rrWndiUAeLEXMPNrNMU3ktyuheoT3BEvBfh6VGN6mRF69hr",
  "key38": "5rRHppbENVjbsMWbAGgke7XSPq51athC7seFXg2JtPK1jmjPds3S2JxVT2sEeDdxokTJik6k7ViY2NYaiSYzoRXh",
  "key39": "21zwoJoP82d5gridrSa22HCb9hz2CAifU4KrKPatqS8fAkYhuzpaG3S8JjhpGyhvwDPvdJGefu3o9sCUMx39eoHV",
  "key40": "61uTGYDL4TNW4GikUUL5xLt3d8KDXoH4w24DNDBQFFb53Pi8wj11vqJaxjmDmiy9xjCmRw28Z6XaXdgW1tmNmZMz",
  "key41": "4o4HqNKKiG1n6p7uBXXeLjjASpFoZY4LwmWwqRwyMtw6Yon9doA5Aos4QXfFF3RwsBSMxmK4WhrRN3GWhCbFuSoF",
  "key42": "5wwCbZrDpcQJxsZTm3LU8FAWNq4dE7GZCMRCYgAE2yhS5kUqGYmQk7vR29boxGPb8DJCzNBhh8q2fNkSLmwhwSLg",
  "key43": "3PWzMWXGkHdqRRMLkEb2q1WvZnT6dcndTVuRACRhkxhzapE4JV1EasVhbzdWsaJaYTHsN2ewjPsJnJPqXkHjWxZM",
  "key44": "4m7fLa94YcbGeYchPJ71ZBp7RjwsXufGiLZRi3wvr8Sv6D25vd1EZ4XQVQ5LBYwJttnn81QFxCrQqhHGUpQiCR2p",
  "key45": "TKysyFJQMRb3yA8ZkYBC8zpGGkYCiYXQSRZ2WiHvc7b9U7iSFU8sEAeRYmKFzqTs3kd1Ws41anff3iddviEUhnR",
  "key46": "5fTzyUFEjXBD8BJUA6wT9aSYvEvw9kwLjT4hwP3eFV3ZMdCuzquFMxY6LCgEArpCVGs42MDtoG7yfEPojQXQ1vh9",
  "key47": "2Vw5zFFvAj5rF2og2nFbWKEeJsFmz7fCNDaAZo6EpyHt4ezT9aNRHhV6rLhcnP4Zuuh4ysmU6cTPpKBtvVU1ZwJw",
  "key48": "3JBV8UXT2oVC8cpACbRBp55sRqL1j6CESF2bsPVejnwzRzvnTxCKBhUHw4QZyBVQmgiN3WtVBtk7Sf1unzJTMEpV",
  "key49": "513HbjWxHvo8o2aFjoq3f1B6NU5AUqznSCTZZZ1F2xXiz7JvPeyMtz4jdFxMDue9R6QvUxf8gzBf7iCBTudzkFss"
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
