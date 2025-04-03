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
    "4W9u1TxyapR4cH28G7HqKMQjqyXFVojZawpjLva8DL9nQVMzVJNhZt7vFxG5iuUvVXECsAeNbCUmvPQpB3LgnDiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KfC5zNu9pB5qYGrnnjJKSGGRFWM1mkfA5RZUqnzpXTPX7HTUNyZ23DNq87yjj74E9LVmfn3Bfd8avi1eAb3yZQc",
  "key1": "5TtAr8WEcMufshvbZV9oJZ8ALKmVeLLwc5UM5Ebx3GZBDjs6F8RH3CVYv7pR3syfyTrus2XjgRjqvEeuaz1CfzDx",
  "key2": "3A13CCKTwk7oWM6hLyrRChKFoeYAnuAgvVqKG1QFkdZd2HnhaaLUQ57YdN4xs5ziWf1bXxPDykFJkRcTawJwQisJ",
  "key3": "3v8qCHpn2eX6GV2A53Gv9yuKs7hSLL1X9uWk3McdfAfLGQcwByLzXfiN6hBpNAfWn814jAWHZt59ctuFEi5nitRs",
  "key4": "4uCiB9BYUp42Z43EKKjKj7Jd2GcjmhUG1QzviLCzbJoGdNv9c4G972i3R8LJLq3WFdVtwLPcWbjeioPQC666ZNpm",
  "key5": "HRcxzF2WRGdk1hPUUvLFEb1r1nLiiji8iBNHJnFBCrrdjQunUAu2Fi1UhfdhXDrV396YjrqZGRe1Z5p3jbyBQg8",
  "key6": "4gcrKdoP1yRE2EUdrh92kEiSKbZxVLehPQjquQeCtcMES748tSqWNkmZ4otdXjApKSVPYwmDZAvVvcLejgsMKpAH",
  "key7": "3QLNTLUfHbawZnszjPjdRKBtYnxHYs8MTgVpiYxodvVtUifQGjah4xrzzmQpGT7RQAknSjD7KjR2bCE3R8apDTmi",
  "key8": "633pbL2pu9AQPeGgmmqsA8EZj5WDmqbM84QrRzS2omHws3Wnss3R4gLep4gHRKufEvP2Epvuro1H1dfHyCKbQ7PW",
  "key9": "2U3QkkYBVArzRPqBMaCTbRK8No9pPt4dG9ChVHQkuxETxk5o3rXeoAK7z3DTEMDmKLVA98KzRihWBVkpJ3mBZB94",
  "key10": "62Xwnu2MAW8qtfzk2asn4qiKDfgPfiz9WdEgTSRPD5wBjR8LMuTuHgMAd3Wm9RQWSZ5RFVnoR7oFMY4iNkabjLBh",
  "key11": "3MdRLq5vMdLEqi6F8yJTACqCQMZLMN4afjHwL7Nf53cpRnawnXjjYUnmZWV4PQ2Nyza5eUhT1JwG2nUKHufFHstR",
  "key12": "4QGvnEp6Zd3qY53bwFg1x9AR2vXSdff5rmHPcQHy39LhSRZZ8jFW7AMf4cMoQjoDBzm8jjFBwjWNivpDfPmPWyXk",
  "key13": "4ymxh4AHzGpMci4kwBa7xW8dUYeukHVNex4NbcGLN2yvhHW1H5oNX3cGX5hADjodfXyF3ZuFyF6EwDNvL9NfTvRZ",
  "key14": "2mQ8viVEKiWEFT9Tv7QR3vbFUsnfc4MjtignRbKHtth9snNuwG94dLkMcELxtpXAeeTbE5PkbimwTkLpzeBTrWe2",
  "key15": "2e3aHyfYwE7J1C8upW3rtsxBJxFpbab5yC8EhHowrCiW7N36QXdUwmpYpgm6JEiFDYb4ARuogn4zpojyDeVLVDA1",
  "key16": "5CCaaaahBQHxi7wWnXGfVT7VwC4P99Y2rrGAtepWrkxTbNP93bvbEgjgHgPoThGZMLrPVM5f1WCBaR714z9Q3RzT",
  "key17": "3bLL9vG7RFzmthAxfWojAu5TVCKuZxDJXBL8cmMrYjMLVzwwaDnr92JCoQAwBoTNYDzLxGiy5bNYxLaQbco4U1FR",
  "key18": "3D4zJRGb7GGEeLFJMJn5SB38csfZ6UoAUqhR2xwMoiqgDmmzsYPFKsTSJHNivsESvNDfCNiJ4kPu8rdqWqG466gV",
  "key19": "jib4XvSaJxHttYc5BBcQJQQzyD9rMM7gHKAF5U4RzDT53JSL4q4G6dha4YaSWQuSAj39TMMz57AFEse8gaZmQUG",
  "key20": "3QjJMiQ3qW4LtrkCtsgmjGyYWmdhuY6GgeuQavu2GoJAJh1aMYMqMMW65ypdaRzemWs4vMKxJ5awbHjeEwGwkusK",
  "key21": "3uivhavxtwnWbarurjp3bjtuVWJnLehFNMkU6bqorjVgmYVEjq4znRTZi4aGbZuHoLTaUCZTGjc2o42k7QxyuyEt",
  "key22": "4wQphjgi3nVCAqKurwVrphDXzhPaGvxWeCw6sa9eW8zwmtXFbJqGijrpWWP2ayX1eUavXsA4qkDonefqZfMrgBXG",
  "key23": "5s86Pp5GACPjzeBuk9og9njVmMAbJdSBMvL8SriiQGfiCa1wRLFy6KK44j4osYN5WYroFuiahAmij7FY4Ynch3D8",
  "key24": "c6b7mmzKYoPT3JqaLMwZuzgwaiT4KMyAicqFkLf5doRjhxtMCZ6w3YGRp2Tvki7rUZ4NHgbiqT3gPmcFtBnX9gA",
  "key25": "2xJRYboBHsqDwLAqQdEDRMmENF5PdJKdTxAY9vN1TYTrRNM9Vo2hRgyTwXAimvwrwV7QNsF5qH6gMBphvBBxw5Vr",
  "key26": "2YEA6gHTgcQChMa4bFV5gft9FEXeUEzrF3dgWXaYEh47uZrCpc1ezWNf25jDr5pVAtJBD2kC2ESHJqN15fwetCDs",
  "key27": "2wQ5wRitAPPkxb6N2JcSvtx4cs1oDEEsSE1wSAXAVDGRbMZ8SdHXNS7D1kYuFqnU58oQk9MUPLkCYjwWujmn8JVk",
  "key28": "2XFBQQJGfAnXaSegETistbmYDFUE4XrpBCwZN4FXUG4uRQ6c94xDLPnGscwot3Rq1XwmeY4EgXoJYx5Quggp4pvU",
  "key29": "5Co3ACsJvAEh2trJx38LAy7gkKGKY3t6SC7NomCzULGjZfzGAn8TEcAXLCmhru4mdAicgumUkkudqmSrzZrinWUd",
  "key30": "2SrBSUhxL3m5moMqXu2qMzVfdMVMvN3V5Ga8EVc7uFEjQ51S9XS5ivGNXDXWTJPZFNC3F14iDd4jRVRKxApurMSS",
  "key31": "3bjC3d2LcuaXktynugrbVWezSiKbXTPFCcG2YfJz2wJkNLx2oWhJFRon4uUCBb5j2xifiYEagSHLoCRgX1ehgwT4",
  "key32": "2qbUjLV1QCfLBTeX9dyKzkdnrqVZ8TL8unwNCGmWEdghQBDo6xsMzPVcdcf99fxEYpiEA86wWSXRo56Fo4nGU6fa",
  "key33": "26EaJwfeMBZNENc5gFYUXbqJFkXi1h9GKt2zUDfycwSp6444PjXpyMzuRNFwMChcicbpDodkUaZTsLbx8baJ3vUE",
  "key34": "3Nro13P6rBhaBEmDCQjJfDv5cRQdFx87Z3QXKoiDadtBq6tXHtd2aYTqLnqfTae6LCWbF1vG4zB72Z36ogGYBtPd",
  "key35": "5wxQCcXdShUL92LHupW71C8XyL8T44J7SJDorpURT1b2FtpHtvxVGwbsfC9iFDSMykSWZubN5evamGTEuKVCWkSD"
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
