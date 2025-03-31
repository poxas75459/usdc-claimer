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
    "3oNrJegDj7B1qM16wefrNcgCmUTj6ZbSXMMK1SiZBoLyr64CNMkcadSQjzQRpvBbvMjKz5rZrAc8ksHB7E6ndwC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64KpNkVp8v7UGcA2CcH2YEtonMZ18mSSG6xqwPPQTvb8Z2nwtGqFmts5iKfMND34Keif5YwvouStaReotZKaMeDE",
  "key1": "5tGhJP8J6rMbSFeD8bY5GK9pV3QVWN4sQjircr2vGbZztYtDLNWdBUk5STc2WikpbU9Y8Y3eh8uwpiz2FYqWAweK",
  "key2": "3MbJwHTfaoExaZ4oJFX9Myhi2mGMTFFNWkJ7hTUbLUYARQuQZJdigaRxB5Vcu3n5hWqPuH7PaarSQe1PSnLtGM8T",
  "key3": "2sX4muF4a8MGjRvMjxQR7ycMFSVCfSxZ3rDtpeQ1G2Wy45NPuDzUHsiqVMR8dJciYHE1UAM2vmnDkrAo5EgHGKyj",
  "key4": "55Y18GpK3HEoKxCbRpXwvFdinH8NNiZaxsNc9pNz1XdvHkF6bZSffPKBKD5uKveeayPSkAhV9gfRgQ2DSE7CwXDi",
  "key5": "29NXgsFJFBYnLecNASw2oWiUBj9Vyb4Mpi1FMBMkshEMHng3DvTW1Nd1SuDiMPwcU1M7FvNLEVnsaEbLqPuY5sfm",
  "key6": "24BQ8v6zBZRkFJHkMuEp8CSuxgoY1oji3k9tMKQeCPd7EQEc8k9dVxxBmXQeHxP1m1PXZyhXQFafuFo2nhZNAsQJ",
  "key7": "3MxSZCHRPrG6jWBTdtpVfmEgX15dUn44QL6uqfkQ8cFwUfMQqKmR7oLAKEmwzqzZKfFYxK2CftjiqRFcDATu4mWC",
  "key8": "378zD1Bg7WPvCnXpKpvhHdov2oLNKmceEQc1B52H2gwU6g2WMk8qJGwkvrA9fHwc677eRZbqnm2cZNJUhHsNXPLn",
  "key9": "3W1fhCtKfKjQWnU5RU3wdY5RMPsvpavYUDdPbazCwpHM8M9455m1AJzch52ZQg78gmJrVB4RghwmhWQ4b1XzFRHP",
  "key10": "5zYfn9cHaZWUmCQzEw1t6rcrgsokQgkiynrVG51GGSxktGNmUaMTctP5ndJGjEbPQGaApaciqTYERvQ3Kv14L497",
  "key11": "2aLjU5EYDSiYxQ6cx4nUNB4FTVTWCFuLrWTi5w7222A2KafeDv7ycFsvppmEQ9usXMPGCzAUt7cfR4UdYfHa5KjR",
  "key12": "bbXQiCQHZGuuT73CBQfYZztXimqYp4wCdMWokjcwyFDuJwkJ33cSA6CyXnntjT9TcXCT7YAtbKHdQVu5D7WM3um",
  "key13": "4aeKTBAnUbNXwB7FioA7Ra8nVjKToAUte6R2jjfwEfWNueoEC2W3DmxxxDPfBMBDCMwYZptAYKUpjo4ibTfw7aYZ",
  "key14": "4Sacuf8zKScNJtSWy6US6ZP5iANqoTKqDs6x5UbiN9cgcP8pgVijVz1ePFhb4iZpzUMUzP5zqcwsKv1sFycDJ2b2",
  "key15": "y9xSpyteUpstV4secNmLco81aVAjnKYFdFoTaQbVndZsPiFeNfcbjG6AKPGrrwmMERjmLiteC8JqW1GP6s4Npea",
  "key16": "E7LwcDvoHbs37tzwhLXe8EqWChvS1pgiVfSM3RKFXzRiWihbtzijhXsk4cTwUXYbodD7UQVTXwx1XejVf43pVxx",
  "key17": "5Mrh3x6RnAudTFYee4fF8zyTfxixyPV8geVTsNwu38LExs2S6CwgvNusfMzKCNKtH86btAcaXAvT7HKBHqHDoyv8",
  "key18": "5RnZ8nALX58FpxBmXH47MULBQDtSmjEajpZHn58u9NsH2L7rCWQH8LwgUNANXTgXLYMvJBxvHmFySkqHykXZWhJq",
  "key19": "5ojYCMbTkCLfgbcNgbcf6PirDnxTahiGX7H98TKbkLtEnceYUDGDdcdBA7FXdNbakKKUHzJBjCExaHgeqjPrqLe4",
  "key20": "3wsT53Ev6ZjekexiJjs3a4qmLteWN8UCmuce1GZAWkbRHL6ygSEGo2opDz2RVvvEtt6yQ3Q9qyd9KDCQmdkYf36p",
  "key21": "xmXs2EczWcDC6tp4hbiVPEcQh8sFtfRUbREmSCWuYsCqyQWxn2jkzF5vozfxaoSNroXXBy8F5xB9UBtXpXqccEj",
  "key22": "4EXWffEtAFXQLiHNpF8x27NfEkE2tLB1tfMc6LGJnupeoTUQgdK8KVVG8Sise8re5QLcAxxHggfnkXevRUPbq3UP",
  "key23": "9YPVFTwZmGUTHaD2sUj8qCutTWvoYq2KHw8iQKUjoHQ4XmqKWjAhYWcdywMYTxuH2bAgEEu8nw1MhpdtcQ5ivzc",
  "key24": "4NnrHfTH4fcT58h5Kc2dey1yFhs7MmmBsPd2XfWWvrLbHs2ohzbHk3tnDazrFThJLPekWD2r2Gq4jf2NVcEivT19",
  "key25": "db3RNVb7rqaZM3xCnxFcD2CK1CkHkegsYjcNhJvwacwzNBLz5basnLK6avE54DPVYNgYz3ebHaKGELeGKaFuSf1",
  "key26": "58FEiwxSF8oJhn5kLUG6sjNEsMzKRXS66LmKqVj8bXSaWdkoens2S1NK4Ww3CJXrjzjxWVgqHsc3epCZdkDcoi2D",
  "key27": "3ixnGrDwYA4Zk8J1XC79NYL5KFQEeU7EYE2fvqCH9uwRDu3npbDYpdmUTdRTTj84GpsSvidtxwpVVq1YYgQzDTHy",
  "key28": "qjqegmWHvHcrhr9n52QMAbPnZ9RwVcL5d7eRMtaAzwrpFYCcM9VoZhC5u4jToSprXw5cYZWGdu3jyTcrLRpWdpc",
  "key29": "54KQjRFWsGFUhf4prttScD5n4jB4nJ88J39AsBZjk1CWyhiFTw2RAR4yU9HcMskaLv6abvBn1g1NptUhoRX5KUiC",
  "key30": "4YYqMfA9wM49pXHpn4A4UzDyVkGRSFw33aWoiGoykRaS4EEhfVxXwSHk6actR2kCBoppSpk7hwuEFamxcCcyRh3P",
  "key31": "4AiU83fsnmpPFtyR4VkTfL95ybLZHckkNyNECVgmrb8uTnVXmbMKYFn1LxYg63kEbF55MEtRLGRdJhUwhKL8xAXY",
  "key32": "3G25mGgK7BHLmvADFdbcAkQxzZbRQYXjTZkNND4jrw356KDUBCWSEMKNTiuGZ2b56mHZLshDUNc7XgNPNr33ebsv",
  "key33": "5bLSfhcxojPpWkN5eJRDfKVaJ2TtqBg46oXEKVaSm3UhpXTmLnoKgvtxa6vWT8SFjdZmbV2fLPqJ1TnJ4xxh8zT4",
  "key34": "5YsyH7pdJPd22YFZdUAvvyAX217qAMHtjTXor1x3xa3xcucN3W7uM73WXEyphD9xocuCwMHrB3ENk8Gz5hgqtAt8",
  "key35": "5rHw7EkSNMrcQKY5cCAa8m5s89iJijCNCwBAxswePRGzXtn6a72tAerTBL68ApTdmYP5XhfK9VxSbkGbsu49XHnS",
  "key36": "5xa4xBZXxNAHuHU9dAreM7Ek4rnHzNXVS3tdqi2kjW9CQE9PHw9c8oBEuyuyDkfrmfyCr8h1GM1dJbSMr8EojGCP",
  "key37": "5eNhj9J6esr7yWq1KMADpsFKemiHEtZPZbuZdAJP44wgXGH1gTqDeUFjZGcbubkrNMghPvq2VcxYJXqKqHfErshc",
  "key38": "WhLE6TQSHq2PMW9cYJpxzTbVCUowgJakpPvFpTNWFeZ8hrTb7ZViZ4FVVkNnVjbLCf2TRj2Bn2MfPpF4JXEtUsR",
  "key39": "5YowVSbf2wnQ46VQ3iZQnMYZMiWnM1RajLhwMt8a1ht5bZsJLRSQtju9b66rVhrZbi9MFtkGtJzCjeiGVhExJv7e",
  "key40": "3LNEwUVomqdwUrvg8YURCNSvxbDnSTSqzuTeumQ1udDxNZhaLg1B6XiXyakbsJxmJjjV2dHgwjKNzxp6cbUBeUK1",
  "key41": "qpDnhykUpD4mcqp5y2EvXHF2MzXVUbrCXVTu5XBBhX4Je8uazxtz9sLuDvKN84f8YuP4Zna8zK2CxRmJFrL98Fm",
  "key42": "4ngsUgqNzEcZzJj6qkk1v8o1dJDA2v9y5GpoHL15wi6dAwu1mikGFcAbaDMXZwRfdJLkGUeoLV3FAT93nq6779d9",
  "key43": "2o5CjftvgFxieqstCsczbbLvYDSENTXihkkLh4bByfzT7xKHpuXST37Knnzr3UzQrDch25NGhHtibwt3b6vZRHps"
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
