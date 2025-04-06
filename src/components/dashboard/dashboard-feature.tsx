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
    "53ENTF2MNhJJKhMzwCkk6uYRwALbWKB3G23FWwMSkTu8FgGGMoZdW6B75ZKHoCddfJ9eCdrR2hyiF4n5ukJVS6qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4PAUhicRWrdtxpeXW57NTDJhuU2HxsZ9uk7xKTxe3k9y1RYKfQbzxkQ7o5JJkfKTVDPKZFKAnfduKDkWPMr2g5",
  "key1": "2rrrPrG2yiPJrgKRXh6SWhpztibmhQ2qL14Ud39PQATLnFFAGDDuAwYAsMuATnEpCUT9RfCnZb27EH3kAUpSyxVD",
  "key2": "4DbAsqpLGzzvsAW7KcqZTds5fzbtsD57jLzuR4Y4SDyfz52ErmVxWTkF1we6mtucyPg3Z7V6i3JxQhjAQZESoAw7",
  "key3": "48SvURpB2jHenWu77rvpL3TFyMspbpfHA1bTdTVb7bsqWXF7ay4rX6MaTaDqTq3EzHKNUHZPJq8LQ9bkiF2vaKSK",
  "key4": "4VHfSCd1MuydCnJnNeafcCTnMTobpKztjHF9vNsHNmvAoffH8NiCJVvGipbaUAMW8SbAn214hc5aiachJJGir66X",
  "key5": "2cB62nbejD9B9xkMep3tE4F7DsSYGdKjGQnKxL4enntu8xBMpSJShT5SWD1RT1ki8prfgbjmw5vAYaJQbYqrHgeT",
  "key6": "2xqcMK8z9TT71nNXPWUQSCP9mtFsFC8VD5GqLMt2fMvjd4DjnQGZBF2LQEEBae1jFAwjnDSxyGcGSzwuLoy9cm9t",
  "key7": "2YMHEUP9hMhomXVVTSdmDNVtu1zsvC8AW48z1nvfH8i4XGXb1Rq2LhRrTZmZNM3oVa7NymhTwA4DmJR5txEEQ1o9",
  "key8": "5yFApPrsZ33joe3rJMLTXxyM4Lsx2UBKyQBaj3zejU69SJmMi1UD2Gny8Apfu7T8PwhwkRNamUa5DZerp8CcA8aw",
  "key9": "5wKMaAvHV7ZEsvSkAdw6mbDTCijgBc4icZ4qQBArB9yJmfkg4K9Gy2Whh5sXw5jhNcaojcZMUDwGkCNwjqZSBZpM",
  "key10": "3ogmbfpA2jqCZoqHTkF9FGqJGzXYNUnToghSN92rX3aCeRgW9F9MwdaVwmtd2UNsk15cqwS3tqtfSzy3HsbPbPRQ",
  "key11": "5TsS1zedntFjYqHsvX7gkzgTKDbXQ6AAGfMjNtyWpkLsAiDNp2VzTu2mjD6FPU9tCuCg2ZQUFMdgszHPoB39kM5F",
  "key12": "31ozEPQ5r4HX7mCjYnZLmrEHzwXM7FjEC1hQUvsvViJHCFa5XyAnhdyedySqhWZhCbEMWvUHUEzZAcCAWeuEugMv",
  "key13": "4bjPR3b3BfY8PrdDKjZx2rJ8eFKeMCazuMH7Ude8PAtNaDyXU55XqUZeLM7NmrPkp5hC48VAWqxdDARSqc6wYMPJ",
  "key14": "42tT7FQ16gG7g6t454Ug5XrM5mpnSaoXioKdTDjWQfuT8ppZKiUqUxv9DKxHhioKXa7aqeSs8psnmLFi42U5XJwH",
  "key15": "4vBvfGHk51EkVbsg1BM758bNX5JRb4z7JG1uLwpRrTwr15HCW9ZtEEs9e8cMR5DR8pbF3NYS1dZDxMMEL6VDWYA2",
  "key16": "3Ge2jzgX7Pkj1Y7scNB5LNSRHv59mJnwik4zjYWYHRJ61iPPnrJH7kSBpzWyyXt66ijwLFuwtJXgHRHXGbSykvML",
  "key17": "Kp9RvdjtdRPzt3eKaUTdMjHne3Z17So4DSjrM7SdNLW5T3kfHiBJb5oAixKVmaTdgtzoNL6X6DYDzzySZ9CsSY1",
  "key18": "4jeFfDZE76Go1XksV2VYCi3EQwMwLu5hbuCMor1k4gQqLtbshvSWeufWmSj668QZzhauKFZfyqooaNMRBxKFrf4h",
  "key19": "3iWoMcMz7RVb8ZKY7HVVZQp8BcT9MVCpdZdQrZaSzRBnzWp1dqimX3B8G3CbwoUadxmtVKK69jwywLMaKmKWpqNH",
  "key20": "5Bhsy6zsAYvUZVUFtWbAxmJrxqejhcSw9kuaccqteJVWyuNyK2ieokELfWH5EaRuNycDVjPkafPNcqhHQs4y1mxi",
  "key21": "Kc29rAC9S1yf45fAUYjzViHzEXpo3Mi4F76QEycB2QwsLz3ae8jRd73GZEG6NM1J8q3JUa3xaFLibBhtNA3XHYB",
  "key22": "5D6cKuYEWJ3CQu3vbnunyAeQWfjEBuTb7UxAbtcutVpmvRZP4tzS3SmQtdjsSyGmcENftogv7shvc2dbhDG1EaRQ",
  "key23": "LiTUMtGExMjatgrCbpvzY8mVWuDdTEqPKwdGJBYmstqUTQDdHefXJLXhmsukpZ2q19Ao3XyFFwgZyg7dwqG2E1n",
  "key24": "3rtGmLB3N5kUE2AWmfcn1xgn8ouozBzDjqXSQ9Kz64LvEDH5Lf1FdY7bApnASUd4G3axGLgTHtddZPZ8w423EDJW",
  "key25": "fFYijf9mvGqdAg7r1GHobVxxV1ALiTNgoTZjNQnwpmZQaTofbBW9zC1BrYJrpY4pQbAfb1tfTt4VBFhvdA8SXct",
  "key26": "2Xotm2jCaZq1raWcjtKJb3TTHYfFkL2vhPuk1LzztzbDSKFH9z3HsHNZHNxZRLoebjzrhCR8RkR3frysncKRV6N8",
  "key27": "4PDu5L1cUmZK3nePzJXqkUAkh1V9JKJrtJN4GS4riikLt1fFCbcXKAVvqPfvtRubXgcpCzsQZVByi8ocuugo2Bso",
  "key28": "42M9j9s8V2CV8WPHsGTwRKWd4mtPYZ2nvqmdZDUkNmTXpXX3mg2c7NT4QNwgqaixQG5bz2bjuu8e3W22QowTEvUv",
  "key29": "hneWBQcat9ZE6Ntvs34nqSoaNbJw5gioEiKC9RjMQaLR8QsVU9q5wq7BgVKqiotVrpkc4M7NrEbMcsGboicRj89",
  "key30": "3CiLh7LXkzxcQvADFUE9Vd7gHbFU9JHXWFs4AUXwXWq6RVx9fy6dhMtZUQ1SDgqqPyvoS3HyZnQhQjWgr4FN7YF7",
  "key31": "4E6trqTBNgxZcZarmT94pW3wRub3EVRW1iJCKvA3FSeKNyaUBTABiJu9BNDkevMcxfVkrfFzw3SB7bPzLK2xLaEK",
  "key32": "59JectrEKwBSjgpkSiXioEesVjBKCBaADnsHWJpW64qDaQZLJu6e5huwmMGrjsB4XbRgMSKHxFduHNSaZD8YSgST",
  "key33": "ihJxT5FrEUWhKhYai3EoSaJLQdwTo7FXtMWmGbEb1vrxLfwzGppEdHWov6ewv14LEF1cNSxFAR2Tn77B41KzSXZ",
  "key34": "tSFovUVq8NyNnDnDh6qdpgdg975CdysotZdpZsBsBy9qcqpj3H2FhZ8unW4r95pfa26EcksfbKQ7iu7ueW9ayTi",
  "key35": "4KLWohReX5iL8EUwatBPro8bya8RwDRFT2PSJcaVfM8D82ntnMkYAsk16Ypxaqd9zpVBh59YFLZ7Zijo2LHMNc1K",
  "key36": "42gXoumHU11X6ruMUgiEqFUFc87krmjjXxfSLV5v9U185qUjZoTGREgBPzcf6zsBR6Z4Lr2DBANSnzFDjdfTYWRy",
  "key37": "jdk7RtzzZPx2kRrdkwmAiwTGrNJhcEq2n4mB4ErEwwpQL2FUs8Mmgy6oEC8pfmcxEqPm9snfgztChZ4BKsmjFK2",
  "key38": "5Zq3UH6bhyZULdGLVDigCscmB8BhaD1iGwi8XmL6nMaVoNnbEnDS7TzmDRUbjiChJtPX412irdmmFFymoPQGTUxh",
  "key39": "4V16v6xtKMLefZycqYuVjgwGXqVEDDTTfLg7knGo7NLvHMwnsEhRjCNdCZWYmNY5fHsDv1CCsv9FSqHZKynn7chi",
  "key40": "4bnSVX1QQWfRGRsf6zFuoVBWnMKsP3ARHgjHU9fN1PaXidFpJtgMgq3N1fEfkeLMcMvBh8tMj8Vjhr8VfJEz8Ujt",
  "key41": "4XkhcsosC62E73Y5VXGrsoZ94mqcYmetjm5tNFA3DaAFDSM8wcjGGV1bmhvFUFRW6LYiE17TcWpvPSsa2TmGP7fn",
  "key42": "wB9ksteZEujMPNxmUQWbedKq6M8Zaw2wrqkhuEuwugnjmaGsA1d6KrzR9oHiTsf5R9dnvhRnVPQzagZrh34LYry",
  "key43": "616V24cM3ekmQbbVGvUh8DgoXcrUtkG68QVa6Sb2EjDddFh7VW74ZTD8mjsH7dAyuiD42mjeWLr7sv4Jmco5iLXn",
  "key44": "9UpRk8BNuW7Nbg58yQd7nRmTzvmpumRSaFxctzd54r6ovRiZ7obe9V21DURZytrN55W2zi2Lst2UTiPeJ5Z8sHX",
  "key45": "3w4UH2XnbPBjSG3yu6JABVbHQuWVtqfdDwe2huajMRztRwtg8UJ3DsT6oqFKmF2yeXafhhZRihnWLYMHzbWtjziF"
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
