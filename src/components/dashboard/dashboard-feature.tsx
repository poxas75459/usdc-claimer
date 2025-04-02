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
    "2GjG7hRWQSU5jh65tRnrApKrYTqGvL3bGsGQTMH9VMn3ZvS7qxJ4BZR8GVAHHkdSuiu2UguK34t2t9fepSGHYYXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsfCUxzbQY8WXEowx3w7twqcVBDwBJ3Rmh9eoQ8BcACASfd3kFHSKg8SpTaoHTQnttNQQUB6H3Z9WPGRejEsoPW",
  "key1": "4qMtXM4232dk8CYq7KHFSbXjZDGZqLngKxywMpa2svhM9bEWMW2eEPqy4qBwry7YfoeeCzaWN8h3xpYrv22Zz4Gi",
  "key2": "prLcjHdhsEC7i5zfAwjV4ZMwRAzt39tK2ZLEqLNMjdqQvZEC2jctvqj9zKiynG2rxdgjeevTrYbzvS7S6RZ5aeS",
  "key3": "vTNf8n2RqrLfXigh2sNjQKiESS1CZrY4hgyGHUNLayaeEmxBBdgFySNwBQWA8DBWPCZoZ7dBv8AjdJUaocdhMSr",
  "key4": "3chTga3gZ7LrmnGyh2nMHCVf9VKoD23F63vYE3FgN6F963fc7wP29iH6Sm7QA2v4V21mPoc4TUbdfctmfrmSFow3",
  "key5": "57JwkhkfEHo4uH5a3ibaNkvRS9jNgti5b7FknFUFVLVcuSau7cMiWyBx3Q8u9rSZ4wQKQ5aYh7PtYx94dp13WDC",
  "key6": "5dngZ9RkiZ98GdGC6rxFZdBUSTmHuwLPTPwgtP4ctCREcfJEyWJJMqg5VpdF7jtKeovCDaC6wSUixgVRUS8Pz7oU",
  "key7": "4fqL4j1kYJM1V1y1mxZaSq9UhTj7opSsGEicBmCn3N2VJbqfN8HB7bZUWo2fspeQrTtWr8oQ4FnAbwfFR59Pn7ot",
  "key8": "2jTKgUqPdRC83iyTPxe6ACuPXFBBPrh1xdxstfHJRYuypG9kmLjxdpnMfcHmKAd6KYDxroXexxMCF9wSoKs5bEck",
  "key9": "4kcPgS21gahwgcWvuZZg4f5wLgRxxML9C62ojz8EYcFCPwijqmGxQvBwWYuzFYmJdck9mYY3bH1dempVjfwbsjgy",
  "key10": "3TuonEMe1EQRC4D9dhFkRsg4agDfqRwok8k3Jy4e1uFMzE4DczEUABV5ACLCv1L8RDf8BoX3Yf7hEc9DJzkbkQ9m",
  "key11": "5D6hxLAH8tJfZNnPKztthFAmiyRcu5MEWMXyKU8LCwM2xULtrTvEweXFbLb7nQYXRPLWusgQ2znQ21jV3Qpcdiw5",
  "key12": "2wBmgC3qjbd6ymBTUrnfH8mRXLEDQbSEnEQyAioybwA62rc5YhwFRa2c98p1DBVG6aCeC3rTyq3p3g4NfRAvqde7",
  "key13": "5SPTDhiLVHEyPZUUu2vBdJQ1srkyqZMLuZYjNm2oPL7Fv1Cx6y4mdDFYHittsTHN76pNdHLjfCBHdZtKtAhiHRPg",
  "key14": "Jshr9v2ZwVHuNgV4B3huyWPdDxGDYiBTL26mkLYfE9fGNPEkRFm8UViiL4fNk8FTpfChobkpwkJ8ZQbHVgNaM6h",
  "key15": "3dj1eYAxCbriu8Kwx5gW7KNRx3r5aJMU9WuyJouCniDXS1fvEsagMx2SZuXErzLyYRtLtEGgry5X7k1khq65fTaC",
  "key16": "3AB2pXTXwb7MiNqRWLCt2GBnrpBV8krvZM1nG4Z9rrCWLKHDDnzDsEJ17tFem2Cb1fB8aihqViaFXUcfbUbHao8E",
  "key17": "4av3Jeean1KWheCyLF7gGLjRPzL7VPqMxZnttb4brdA2hrDB8imHjK1u4kYysLkrBqSrno9xu7tTXn7QPB8fasjj",
  "key18": "49nMJqPzbY2jaUUEu7VHndiejYHpkhsqba8iMTJyyeARPetPWJDSH1VT24ow6nuRNyLsqCsccpd8PZGgMJ47rutu",
  "key19": "5dACXqs5YkdeQMZUGeiFnuNQmQBdCFdjsucaMzsbHN819imqbG3Vqzxey9LYM3LeH8DENeL5gJdktFZ73T1SzLbt",
  "key20": "2BopR114kZcCsjgwhSTdbjYyDZ8Y79BLVdxAPkXcMbsSnPMSCfB551Jdmka1rZGTpZqaHZZwdVPQnHwDh5b3dDQ7",
  "key21": "4qdYmBRasJGSbJfX6wp9SsRn82kpNPVQyXhMKcPbyG6R13vqPt4FM3F9kuhmGNaoLhCxqCSojk8AC4tCsgfyDFVw",
  "key22": "kpAVknshKPyQ9ibUbCJ8M98HHLsy6YLhRneZiaZuUJQmnLbRMD87MxfzQJqwCwPs78oA8nq6zATveHpnotSmZUU",
  "key23": "4rESdBfxnWFimfnKhJRs1T4yrdaAiVNB9Tg9fwcBerQGGWFC9gNQ3Vw1X8nzwjBipVqb93diaDJ8mzLzfmrtkDXc",
  "key24": "ZjQU7bMuxexy9omQivQ9zY2dkXxfXYyYQZZYpNnyN3cs4DQ7EBr1CNLsTUJv5ih4Pnv6EcG7UurZsDMR2qRsE8w",
  "key25": "JS8pwWFaj8o5J6CGZ1dmhSoMqEh417dJjTa2N2jGLNjY6f5DHeS7ouPDmGtmai5JUmDsoxZUe25xiJDox5uYTtu",
  "key26": "3higXX4DEc28WCyKfQ9ErDeHNimiUkPkHaCZv174PVnhvjQL9mwRfLVtShQ7jQKBwE1VUxWN8yg2DSfzGXB6zuTC",
  "key27": "5SNA2m3iQR1VVvn1Kk2SEsXM2XgV3ZnrGvk3Xesr7WXy8oEtWzSwkqidzc4w7zjf8ivngbGMapDRsyEYGAAGRXE1",
  "key28": "3LAmLTVBWzEdQEBiPZk2WXwGEUr5dG6RACw7yccTVjHm3CVs51DNjUkh3dg7ADgeXR3Cz9MtPDis5bs2DmtPFiT2",
  "key29": "rAZKVn5FciWcQq5HnqvzZNcQmJnGSLppYoij8UDxx1LNkeB19sS8nsQtm5PWXe5qY4HAPdXquGHQWMJzAJc4pM4",
  "key30": "5SoL4zSnrKxvixW91ZzjJSuRee2zYgcmD2tEDBXgFhs7GpyxH6UtVDroiXbuFxqsCZo7FFpyHiNZHcs22H923Gyy",
  "key31": "3wBce8kRp1ycQgdNcYBcKtDfordhP88oUGHRW5FbQqN6EQgyat72sAeuzMZzQAyvkiAywE4XewRK5pbEuLq9MGYs",
  "key32": "3b8KkZZZyb3yo5iMH63LM5Z2F9pzwyT2Nte6YkrKhk13EMjQ7T2bwvLKM7UhHG5jt8nGqe91EAn6yGg7b9qieHey",
  "key33": "3hWTBsAnMDSDjmDUzLpcdFNMgRk1yYWn1uWoGMoWs6CbuQuDsjyVDrbrAB9EwwhLdCfTPp2FMUEQetu393NuC2zM",
  "key34": "3DNYBio7NQo9NLHnkEBKi3D5ZDa5T4vsEn2htSokhWm6v6P8aiMVaGxQXettkELEkCS3AdinT6xuCeMUYtG7qR5S",
  "key35": "3ZazPYycmaqWsLzU1ma5FbFWvegeFtUb7pN6GaZH1mxPJV8aqxrMNpTybNbnWou9XV1ydksY5LZtTkRQzjqjmVZt",
  "key36": "2RyjimtUYoS2sioSykhveF8zDp8EdhdnkBBRzaD1h3sY8ZVSgkiyS3E8Ka4kMMV74sMA79VXnSHCsDwbf3sEYS5F",
  "key37": "5oDjDit6xAvfbkQ9Fu93yS6gHk28ddt8ne5doYH5UWrtFqFL45pYfwGxD8qVKR2hr4jsB3Uko1TLdzX1nHSYHJRN"
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
