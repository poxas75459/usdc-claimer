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
    "4HshsPxUhoHT9VThUYRbq9V6BLGx1TgabDpAJk9Gchzw6og7u8q4bnBs19nqooHeAZniACDKSeuu2ku6PZWgpytd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PaaMTknEJPzxDwgphRGq9i5Kp46Vtzcnr378mDADZunsT7WTYmUPWcZVoUdQjV7SvmY42qajgc6ReMpncNdBP94",
  "key1": "2s4JoCVrgHHb3NEp1wgHVWYgipYRnqtkSaMkeWgC8XJ6Qfqsk5LWppUbw87yspsRiq4o9bVy56shRFa72vncpKom",
  "key2": "4eqyRemdcoFXsMBSDJxTXvFd2Ugu3Fq9foc1AeLVBryVWfwMKRxVYUDT5j3Cm5qcHeaf1aYx3odX8tyyXspUbVWm",
  "key3": "2UuucNd6j35UoNXGssbSFx1JgBxUXwRaQhpNmhCPcyYojYY3JSr5ho9NXUqvJfD67vV1V7tWuu5MFDTr2gEufExQ",
  "key4": "2fMnbg86RpajozSEEMPnMrqXqgRvTuAFHrmbkZt51yWWXyg8oXdyAiG1dRQPuDJHE5AfNJN53jvy3a4Y22LGdyYV",
  "key5": "5mvCMZYUSXWcU6osbgrxNWegBMQrWjjG86mKkzQ2r1fNxQNPGv9Q9TTdpdCcT3tQwQZ5dGB62gJ5fVYDL1MZfVD2",
  "key6": "4PcuNez8s85A8nY2CLdChzX7SgbBq7DM2zX9HPSZPQzwD7rAqVrRumvrZRcj9fkpYH5rWxQUmEhMEF7MWN8SouzF",
  "key7": "2Ds4G8dEUgvk2TSFXEYoDc1V3azn8vEzQEjZgn2hciMowxArZivkrQ5RfMU2Ue7aLG3xZHQ4zsGFF2yp47w8WxKw",
  "key8": "5k34P5jbxWkLTCtmBvbUHxny3xCZXUxRbqvEuF6U8xi25TwqZY7rLYzBrsFwonaZvaHMcV533GZYEqf7tu1NznQD",
  "key9": "33mx9iNMtjoihvhMjPEYjtMDNatTthQiaW4Wrq6ssWZZQvXCbRApzzSRrD6ty7e9UCkusx2BzZcbTKCPrCLZyLNm",
  "key10": "B53Crj2DK7tD4BDkVPpaiDJ6LHGbsqwCyRdKDMkNkGLL7tyLibbmqewnnqBtoJtvtPhWiAFN3ihEW9cMGr9s5C6",
  "key11": "2rmAAducVnUz9X6HQz9wNEqGK1KJrC1vNa8gdobkpQSajonJqttMiFVebWE7DGZUSaRHiogH3XoymVThmeytDuuD",
  "key12": "2oweBnMSVg7E3J98WfdP6oZhzWadjSwcHXD7bMtTof5vcQGQ6m23B4qzMd7F8TA5thqQAjKrshjxE5gDDMS5D5wj",
  "key13": "247zgn1ZsAE2Hjv8XiGNVMPWGMoCFWRCuQaKD1LJbaH5SuNU76p2Z1g8m3qTpYDrZ3ktJoQtkiCKuPQCVhq118Po",
  "key14": "3G1zrHucGis1extCN3BwBHdBH1tRP8jMXe7x6uvYpVaY9mEwQpockMYWiLDguA4VxfGVX6ZKNSSEYUiY6iDuj5Ct",
  "key15": "5toiZrGHP2ZknKx489uqE6hJY1ivFZZdoC3odTx9otmhxoX5YnJS3mu9JoGQyNgYMNFfJpUscC8vUfkMcWNA12Sk",
  "key16": "3Ru62XRiE3y3iZmVYemiBrQ6FGNLkh3rt6isjubCHGBByfMnKfhE2kq4aoCwkdbbnwKDx8YKCJ5rqa2b3aB9JArh",
  "key17": "xRPWkiicUmSafVtQ8zBe9HeWjrkWSTHHQ2Cxnuco8XU7C6jA1brVNoPWYMpAM8zLK2Z7vNakshkCyvao1f5RE76",
  "key18": "661Hwoe2Ppf9xfNganmJ6UY3SXdECBjHzg89v6RJ15DzChsxy5i4wqBBYqEUh2ter5dKbVRaxQcCBfUYeF4R3CvB",
  "key19": "5xf5BUBYtgzeksB85w4G2AGqvsSYAVJTtkAFDcaRQUGzagF4DJY5T9kZpjRfB9skLVDDFLWuc3g3hfsrbPyVwmDf",
  "key20": "48jUfwUeTHvkq1Bg5PYbThcEGzQse7eYmwKB35g5pji7PxYZGuKFzKiktVZsJGzRJ7DxMA4x3bUNyvWcuyNzRgvP",
  "key21": "5heboFR5mJ5FoJWsH7TegaSSjNU5SuFoJEpaXAVrqTvCR7uAW8MhZ4UidhNn8WQMcoqYhfkFWPrCQLFMsfCm5NEe",
  "key22": "3DFoa3xFZ1Tm19Atnn4MEiC8VFmCx7DwXH6jj89uaUDPhSJJt5TjuXq59CiM7s7Ssyfdz4K4MsXUY3gjiNRNgsPT",
  "key23": "HSoSE1vFsQxmnKAx2yNweUbnvQ9nu7mkLuJeenRWH21eHjhfrzJk1R68FXwY5k25APdWWEN6tYUKjyHYjkUFPG1",
  "key24": "rY1zep1wuFkAqC474fy3dJhyexa6ZUfByidk3wPbJJaURXFxNGDBQxyY6eemC8h4PowbPVkAUJC8EePXCQPPdBG",
  "key25": "2SWqh9c8WJgRDGNtdH41exUKwNgnpQLvvqdjh7kwwXtD8K65B4egZ3mnmrRVVy4yRA89Pj6PqvQwnBH4ojuKfCLF",
  "key26": "4yAriqSEECMZPLC3TCV76RYnDY7LqEkrWDi6WbVn6jBT6QAyUGabPBYUpVYVAkC8KpPYZrwLGsjschnNVhYmpQy3",
  "key27": "txCgihhbd9MrqhN2BNQgXsZXvSmqQSkVJ7QYzSNsE4ozukQVBf2KWEE1V8GCwdqzwCNoVoX5RtRbRP5GFzfKpuU",
  "key28": "3xEvNhEk9E2xHLueJ5GUUdz3j6LvUD8A5vb36c4DDk944ycAjfSF7ykAkPb8kBuUzKoy4BEhhhroxLg7ofdLwKQv",
  "key29": "STqc8A8VLFfSGFjikkb23MtrKXFyPFapYRWxTUvi1BHfvNmDkddewCsC3bkrYzJXrALiPZfjNzJLft8qAJYm4aj",
  "key30": "3phWcKpEzqKUKzKpaDDPPWAWwYNZJhmgCJDUhpKiFizLkVyyGAuYdgoeiZfcZNRHiey6N2LmHgr23a6dasexoqcA",
  "key31": "41RpiJ9SfMVE84uQXkbDSrdLdqUxs9MsdxwLshVksFv4Z1ebck9ewoKk6ox4RXNzfGh8YrFjuRmU8jti6mXtcJHw",
  "key32": "qdkU44m8bJJgaJ7pPhXq1hKHK7fZc93CjEVUbuexNNgvLdEhmxajKGe5CJmpD6ZqDzytbHDsTAVqUAU1z5o91Ys",
  "key33": "4XsxjqYxVqdTY4TQohXXmg9osmukVv2HxETsNJ3qU1zk1xhziifAVG3cFwcR4eoeeUQoxe5MqqMsFuWGWRiT3DHk",
  "key34": "5KgUxKMP7zUVjaVnBpPg7buNSyq918GLmaRPhDw5QmwBFaPbDeJbdeJQiegCwx7vECW2crGPcpmmVxoQfPcwkFMN",
  "key35": "5mjdDwisn7KvnL28AYRjZtxHvXoKTqw8JazPHxpunkqjr4nafnppdudXd7w9paeboyEh8RR2NFWvCKPC1UtHc9R5",
  "key36": "5ZQsa7EhHA9qBA1udfUDzr9Hf9gynwpRAXoVUrReL5fzr5UUp3Y3UHYZQhKygJRSAN3ybAHrjahpbBYeGXq94oLu",
  "key37": "5KpmG7ziVRq9Y5JkZfZcH5CHhMtHxpvsGbbropEEswLvvxMXa97Pg8ez8G9UhwAggPK6X7edWMfy5CdJWboBRKBn",
  "key38": "3y4Ey6LY8HehNb1AUW6ibdQ3qn3UNSHVRt3ixiQVPsRLaEzuwGBDH212sYLChfNvbfdcitc48HWA2Hvnz7FgM6Lf",
  "key39": "3hHmu93yCqD1XNchB8pyjWJmtZ3mqdf6hYvCEKEMgtVcdDjQtTHoCgMxUdqyCEfFLndzx7Fn2G6ziXE1UywqeLVW",
  "key40": "4UPrJU8riWUxGPPVNMcyVjFNzMj7NZJxLbLFkeqJVa25Q2hbLTeWprpAktK64b4dQZCBiv4ycFjGU27JCAZYHRWo",
  "key41": "5nVVtYHRKD54xejvgRox6WicB9o6uRB1gbZLiG9vS6CQ6mc7WmTVz7XYtt4dRSbd1yBpBoFLgpmZM4YxWqxho8wC",
  "key42": "4YrE5ZuoqQJAm2PYZAT5f492L6V6PqiW2AQHSGokDcxq1fNAFANsNQtNYKpiuhzeKrADumWrKSyR8aik59v2dtAn",
  "key43": "4cf8rQ6v5DehRdEZervzXCJmCxShwpBejjPoVUsTU2ok6MncMAnoD3asntyXwfrmouTGoLKfiJ2xc53B1M2NRkbN",
  "key44": "oTp4xsUyVQ1cygc4sW6DTzaE2FHLAAF5NzGwgKSSWJqL8zNZp2f2GvDuwv1HpfFD4irktgB8k3SVA3bRWAc7pjh",
  "key45": "5Z84yrjw8ZmpPQXwnJmr7pJS9XinCxaeUyoQUdGkKA9FtMssSVE15jZedipnmAQfy54ruzEcgugX8hPrzQZ4j213",
  "key46": "3vhfyEuU8BQC1zq9KtXqWePJZSP1XUo3FFQ93qTKTgD1DsEiU1NYXcAafdsnUDkWRYE2VQirraAan3ihxqwihLSN",
  "key47": "fwjjDrNDaAzz2ets8bP4UxdBKmG1nNVU9tgLmtQXuALWNHLN1zYBUk6XDvyEJvKZP2jdSdq7Sr9upY3BG8oRvBD"
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
