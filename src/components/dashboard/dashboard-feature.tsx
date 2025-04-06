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
    "X267xBAqgcmXLmwMTkp3TieksPKTFFDgMA8NqQX3g8QcAx8wGbAbXbjHfLYYidvVFtP3HGN7EQU8WcQoc6wYQr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jfo22oKaUHQRRLXsF4eTdXmk1ZTARUxBLGsJ8ZPTs3RcrzmKcTjkwiNnad8A6Z2gpff9zkhBPQVAEbKWsWnRJWX",
  "key1": "2Pjt746smEwXXw4EhNKfvLu4j31mnf5sgmFUEukJ2SrEhYBRWvEKKUq3kUaV6jCm79sfM7Xps7DJv2v7bvu9EPoU",
  "key2": "5fyY72VZLgTPavrbGpRmpmYek88fuZsEavvbJ4yan2HScX4NwzDfeMb3bL6dAuBDQAjoy23cGsGbsiRixGSTWrqT",
  "key3": "3szeeofF9ABbKPS8VtyTKRKNzWWR5SGF7D3RCSoVVD36kQ1vuWDKGfg2ysjxJzYkMzEXzMExHFemDJJ7Nh4CqW5X",
  "key4": "1jeKVNbxeozXdfKFNh44JX3Vjc9rTe1QzU1vrbGMBp1GgeyAosmm2eTunc3BRqB515D7hShc5zCeAfE8y7DX9D9",
  "key5": "5dUqrKdnPriansFMfnEjXzUje66Kzcsk4dT3vUzrdv6BmpCLw95braLtvXvS7WXKFhziCgTatkhPCtVJwSjwQ6kZ",
  "key6": "4zynjrmwNYsDEs8FqzX3cU2KQCZpiGVLutSPFqpFKQi3V4kT4V41kcL9noJyxBpk2ZmtDq9SrCx1Ejh3eGuoNSZH",
  "key7": "644bZhJGd8iHV4wFCZyw1XgDsW76G2u7R9eCyBDe8KPhgxrATdy1CdLjpKvRqHxytv4bj4Qj6kKwc9LeD9JA2efK",
  "key8": "34aEgSywfUx27V384QRnZcTdHev96XoJ3itvkFJfStv4wmScDQhkBnw7JJ3nfHAmfAyaS16KqhipcLw1qjbU8NEz",
  "key9": "53YQKJbUPjSqSTFhyYdqNb8ZZdMJXuABehgy5EQvVBxpwCqcvrhyPoEnGNzXKHZBHVCKNvxRUmmHBBGyFFkjhMjC",
  "key10": "4aM9pci9HHrbhaafVhwVKzpgDTrTxrr49SSfnwxBcozFCiLMZuPXvhg1eKcKCp3RfgNeXCeK8zvDeKLhMAKrn3AX",
  "key11": "QooNEHFxpUMoXbbedNNFUejQTEVe6qcDWp8FgEoCCcs2YJ2r9p4WWEqHgMnSB6PnUCvSiRqCFwxHHji2z1qu57u",
  "key12": "476ihUYVVLBGqJTT1rorfme8jdnQ4DLr2yZoDA94ybacfHwavndn25BMMKj1L1Y4E3yr9cfGRmboF38Gey1tvuTt",
  "key13": "4RsGBFwHTZ81Sgcg7Yg9NoeABhYDLJG971fGPpRjPdM2y6LtEBu5NUT8VXLY8zr1ZoGw8tfpT4HrDpvUCMYUrk4R",
  "key14": "62xyNMC42ChzLvGu3d6zmVXKNhYVFQjAkAwHQcEPdSoGmxbycRiNrkkGWk1NJ6dhAJEAtgMneFmPUC4TK8e8Qsf2",
  "key15": "2u94fX3AACPiVZEJzUubf8DuYgy2ZCnrqJSPH4tSwELrkNM7ceoWK2tpUG5HRFN2yMVLH9N7m4mYKYLU5Uf6hGTr",
  "key16": "2oVPoZu1gMXKAZNEVNp93PeZEpLye8y1qd5mJgMdE8nMv89eSLm49JjGQ5ZCWvwTSTCDWT9P8YsG8XoeFHk3LpcQ",
  "key17": "R99xD3jKKXeTmftmmbTQZq4F3UPojrGFwKmxc8Vz1xodtRCBsGKNfZ7M7rFzBvb1bEmTFoyAKVZuG1WMZT2uVQA",
  "key18": "3oZVvH7vbpwrp5buB2xkuqmU5NDnQkcMoa5Sm2QMc1tAF8Z9ufGWZc9yE2fGZefngkW9MKukNEbwqb4pk6MZLRx5",
  "key19": "5gKB6EubiB2iQdd6Zt8mbrJsGFawMZZWARgXfLpj2rdyDrLoKLKUX77KGiViWdvaUwSmLGPbJrRg8betZpmyAXH",
  "key20": "D9wvUnDu9DiWG2EYftGL7QLQd7FrKsxJs96VjJAfGo4TnjfzyqLPAJHb6rAFH6JrDrT2WBazQiTe8u2hmtK7tZR",
  "key21": "aERKgHhGQg99Gmayh4zYuZq9NwG18tv8x4cF57V9zTcxJiwn58XXbFZaVCoaM2hFdFY1Um417nriU3bzm6utUL9",
  "key22": "3P1JAnUiC19dAwB9GjA1MFq9Bi6NbVDxR1GTXPnHwY7V2r2y2cRyADd2kkUWe68UYRFhchkPPc7FwpJy6qBYRAJA",
  "key23": "4LbgT3bN643JJ6zgNNVk13zhTXyMhrnakwpH4vYJHcVQ1kP9biTnkeU4eY1LdsQGSVGMVDhmxrs9dmLiMgYAunNH",
  "key24": "4jKMBJEBtb1ud3PWwgKuEx9QrVfdpEtjDw61jx9ZEHqcRsdzUHsQoYJU2hzMjPWQTh4Gt5zanprk4jKt6ReaAqp",
  "key25": "2cf9QwdimNzMnQVgDZ8a4KbCPHCRTwcJ13tCHNQLGEtJQfy93YUDRGkJMhMAATJd8kv7N6QWqu1pUtufR7M1W7i5",
  "key26": "VQoqURh1B9UsLjso1Aqnz6PvtrhrhxyhwFX4NVxXrmKt6dLfoRrn1uMPoKXpx3Fudp2UareL17ji5ZufPLMQ6hd",
  "key27": "43faFKdaE98rzJM9LEdEgh9QhNq3jMWregL9JFHrt9LChAsirJLyj5XmcSZeMZXVyqLBuVdEzWZPrtdg42TNThxb",
  "key28": "27KvxEAqUtZDW9z3FPebvDTjEY7KWTzNqcbUa9AMCMpzwTrhPvJnSSSGs5jWJPynDDMoGLru4WL26Kso2zhnSCyB",
  "key29": "4sbCigYRJT7CfvtzWZvhkz2cqA2n3BTZa6BuY1X55jFqTo2PQSmmagcxDrNyppJGq9UBwa6VD1cAwDwRXC75EVf9",
  "key30": "4S9i54SqheUEqPEuL8z6VAkVa2Bwmrb29i3v1crikBnndU5e7Wh4uZ3GLTsXbHVCK4z2VWuyBHB6bwuCV3dL4GRc",
  "key31": "5rGUEqN3YGAeFqdDeoYSkMLu3RTJsYAbnEAMz1agwxMvLFtYBnp7RfQeD5KLnQWoWU1jUj1z1MAs7ak2dGA46rQj",
  "key32": "3FeyojhdyyEYGHbz5vH4ppZP3B2yxzdoTjwmEtvhGXJVKhYR75Py7m7ZV8PDaQN6MZ4F6Cfj9rgnXKeR6AQ7wnM9",
  "key33": "3w4AmhTnVPVVMUd1gAzNUjcvHPjLSo6nb7wy4V7QzsY63jjaD9HXjUQdJPsqTfLCFLBAoyugC1sphmLzy57pGM9L",
  "key34": "4RfLsXDHAZYbjWQmvaB9ByQBfa7ZvPSKiTMGG9SgsW4XBYSoNoBCja93BCGwXxbECWmeqVrAjbBUyNHcBXxmgodD",
  "key35": "4S2kscqxDooS1znSgsv7s1o8iNvs2dqhSCEMJE5CdUPD5tjB8yzSoysnHy7d7MPv7Zdbij3m25RePpBySnNVMMkg",
  "key36": "44zmNZAX8VUGMGYBw55A5KwZsjd4mkfK5UD1NExtSdZTh99DRGJNCYfRDMa8JyFFMsxN6quQrGaQ3TAC2khQ2G2R",
  "key37": "2wWXXA8are3qcymMGzGJStop2w4u8wUsp7oTxaxcxWSZrPiEuHhESFR3cDySf5engTXS4deQrnu2NbckuMbSFBd4",
  "key38": "QBELZ74J3iLEdEDCcWecvy5GyP26knMwPGrf2wcjwDpcR8uMvAjq51eU4er5yXtuBgQV7oJqB1Kxzvn57kH5PoA",
  "key39": "51MPxDrrpHws2mNxp7EA3Zr1oMCpVCAuV8AxQoS5YUtkfJQy6zsi96wdxufnFYzBHLd6SYcjpJxhTR7sV3bDuRsQ",
  "key40": "2D263hWBf9oxrDPLVtkAcAtL4amSdrfpQGebzy6KoZhMdGgcupMccKJjokPxLE7XMuUCQ54sD1D9fcnvND4GvvKS",
  "key41": "57Ke9eyWLq1WdLennp5zDSHn73BCnXSPV2kYkTup1xfibrnwQ6tG6qcDBRAGhjug2arHA2r5LT1hfietoqNakUbN"
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
