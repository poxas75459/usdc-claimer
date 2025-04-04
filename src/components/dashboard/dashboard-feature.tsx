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
    "4uSgMX4CnMpTKNHAD9UEy6ckq2KnbwjRp9e6LtMELytmfd4fXPbkfMopfYJuzj3oT221rzn7cXtZBMyHf8v8GbUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqYYGgTH7Aund3iisuvPMb7EwCz4BL9vK5Fjq7n5KvT3xzL9JZm6uBLC146bPL2SCH2nvVbRMfL93aEvXYpUiDh",
  "key1": "3FBv1SqigdqEYQWyhXvHTjzfwhfyzDKn8enV1rnqC5cnNcAcPzYKLTgV5j9rsTzogfREdDGbtkA7bcyefPdtvLFM",
  "key2": "3uUY4MLULEwwkYu9qkvc4UhCVcYCaTgCnEpPtGx92NSUowQcbQ8U1vQYthTvNGbBZoeM3p5eKsg7WjNwz6t2TRgg",
  "key3": "bcbnwKh1YwUwoVuDKRjFFvpU6GsiA45vaawYazkM7RpCaqWVD85pcGd2qXdqTdQz3rMtv1otAce5533YX5TGToX",
  "key4": "4gsDNzaJvGdfq3oJf9kBsvoeSouNhS8GBZY3E9Nb4dfjk9Ep7nWqKpGwrcB1PQFUkkEYXZzCB1gY4DcQ5Cxzfepf",
  "key5": "3rEZg1AxP6RrbZzem2oi9ExJrHSNNmais3gKvboJeqZ1wF8vH6RDBfHucHe3PVos3P4MsKHsK2bL7sQFbQ5cbrpJ",
  "key6": "3v3dfzVHMAQabK3iXEXGYmoWTPehKoNmgMXiGW7pE5Nso6i5JHwG8YzhjZa232x5EBy8DVvyoW2aXhZRonTyCfi9",
  "key7": "5589aj6y5hre8GRwLDnCiXVHoYKX1Sm53b7YMWnVUhtawSqaF19RtgeiupSFfQyUiiuDDAkA4KL6vujnzuNcmWhY",
  "key8": "4bERjppu7FDtfAbmVkXoS48LCmh2Pn5ebijRMvdTHumv2jggwZHf8A6fE9Nt1t9FCZYC7saSWaLMEKxmNZCvee4J",
  "key9": "4S73mbQ6fdP1mAebrm9ctkoVReXDSg9MmkptTZ6kq9agHmAhxqKM3VFFhGiUovqivnEGf2c7KZVN31grokH7wco6",
  "key10": "3YypchmK1PmrZW8feoe7YsWoKGw9hgUUhLHnxexoCkJaZSnMqnVPrnV4dmFb9dAyHTfcGCEyknDjvhDQ6FtJkMi7",
  "key11": "G99jx6dMLpzvSMeCyaR4PYznee57hXWPvoSC6xTyGpiB3LtDtyfZ7yhGsg2xdY77xzWYg7iHXbFPvX5NxQaYTny",
  "key12": "wSJUVXj8R3hwQupBR2TVB92fgisqHveayPfgTpkGGx6zoPrjkm9NLEBJ5cqC8F4N9Juand27etvhVXd5PtyFKok",
  "key13": "2TKm2tkPnhsSUSoR6SHgVCsovbRsdp6TwSqEcZwEFWFCqwb5jWHXFneqmNRsRPrxjgSyvPkJbvdo7V4Sb2itpTUv",
  "key14": "2npJvrScGZKQjTGhg3u1hqptWGqUVvCoMjMr2d82dorzFxYyv8FKCRCXuqMieX1NW3YYsL16Ttrsnf2X53MNqbd",
  "key15": "64sMdvCgi1jAXeU3TrkdwC4buSAnXmmPXgFvvTbhbz8rEbrYtYB1t89y4ck8bxZRmvSvRvCYMdfmpjGmdfXDmA6d",
  "key16": "3jF99ys51oQCxH2dDpaH95TsXJoqh1WK1qc3AcSAJDDhAg5qxmds1vgGgVZhZPKSoXXY1sVF113nZCupaLPPtRUQ",
  "key17": "227UFZfAeDZNbuiXwfqCxDkgvsYEyYhyySYvStNYft4WvmdDSVQkiNjtYNfnQBcSpGY7MC2Gi4zf8q5RcAZPLWGa",
  "key18": "125zu58XUXCQVTT9PQhvBKHGe7jPu1YNLetkycnBQqKC4oGjCx5qPspycU2Tc7bkEStDYTWsnLUmc9JJd83Lvara",
  "key19": "5Bot75S7st5oj3oPZhCj3ceoeaPtXS8ttDY2jb196Zun3KEeKntedTQULFXgMjQb47Z5922A3DGfkWBWNRW52Yne",
  "key20": "3UsR2gjKLivtZG7aswdDhMcmMeee9uBxXFZoWEq5dqeVJvZ9qfFyqNNikqxYTWaQHAJBeBos2MiPKbGcfDSTkpVe",
  "key21": "2RRjUQiGbHNyYwULX8j31PvrBxez1tFfbaqxUcv7mJzmXjdTsANH78ZUAktPij1jXj52toQPe55HKmrtNBNBuxrD",
  "key22": "7XACmp8QDSgPQhdyPQUSk58UuJ7KGtxRYTM3vcvi2zqL5JRvyfbJEWjpciFUWRMdWkWEA83yKBk4UK7BALG7W4h",
  "key23": "55hUxcLNxkudymam7CPed3PRsU3299GpyhrvrG4NFUq6nwxBifLogr9YzrXEFVbWJHzfjHxm6kC9MR1HYwLfQSHv",
  "key24": "5VeeoqbHanDeJrJeDAw8EagCAQhFgou2FcWFfKe4vR94EpV2aqQF6ussdmPEoksoKPHaKq67af4wWxrtbgeBRxso",
  "key25": "7HTZG5dijTbENNAPwhJPzYretv1UzNbaDsw7NNbVyPe2ZgsDa6UZhL8EgKTnqHyd1Ja5bYSE6mz78EihHbhjhST",
  "key26": "5EyueLsVQP2TfbA8oGDNkZHdpxwUXQ8nxqZuJ4rsjJNoxjKQuZERroGo7BgMgmB67jYFSHGnuriKnvaQgmqm79yb",
  "key27": "54tdbXp7MjwtvPZnhiUg9yFNtnqTCJ9MjM1drXzf1JnGWtdCA8UxMj57W6xyLAZe1g9AREdhMGE9SXLosEykJxzh",
  "key28": "2kNXyrWVDRU8JTixgn283ettPaLWZQpoJ6Lv6oBBKtBcxedsaYgzLj9tZGSnXyuFd9aABWB6CDqBWRgQkyEcJ3rA",
  "key29": "4gyipmNbPiMcnhpTTR1v9oi6hpHvGzpjVBTTxJ9JBfR77tbDtKBzEeZZ5sw2BGDzyD86UvVcsvGWp7V1Y4hNjdN4",
  "key30": "28gBuNdwQmVP7PTGe1z11Ddy1957izMiWtsi2Zei61g7nSgMvR5KtgmE7TTDRVQfEJJmqFq46oJG3z49MYVw1uNa",
  "key31": "2ucAXH4f2fsSuHytXCHBQ2Ne1f9SDdiKmvB8ath4va1jCsvEKZciaZTCcMLJQgnQUX7mPsiTr1oWbVRYN3o43YLX",
  "key32": "3akMhUTkCJ4TT6ST7ujcagdC7gQ5jjeDrJwdDC97nCX7YcuL6NNuGs55FUjhYUM32G9aFzPgr79NMvH4qo66kBNT",
  "key33": "4VqYy9AnmqBCv3HaApzvZtxJdwEqX4yDvSJxFFb9czMzKtbhKEKaoVSGKmfCGrjDBK2yBSDvdcgJEx2RpQMv1iBM",
  "key34": "cjeFbbSoiWvCiK8hp25zC6Fo7qoTnZrNR3k6fkY5NBNVpVY9hhW7JyTLKBL6DBoH8KKFFYjCffUeZbzAcbg4pz7",
  "key35": "5Ug9EZF2pchEfjkkFxh6th4m5rFNZQFwo41PE3WbyJuTvSAc7oW62B73fokx7jN4JyGdjdEFcqnpcfWjbZtYtKPn",
  "key36": "4hEpw61oFB5Kav7ixq9FY6wpXdyJTk88MQEAVNDiqngmMRu3JHjgoJX7U7wvXEj44PbP2ZpwepNogDzxaCbvTrMC",
  "key37": "3nmjsthDQYv2rnGGZj4jPMbKHyq4V3wAZAUuVv37Y8QMC3pgREcTTYxGJrGN3Xnm2TSgRmkw1RfV58qwYKWDkmUc",
  "key38": "VCRsSx8UgTVNTuejLfdasPKifrDYnbi3KFgqLHZ13wP3kYcwLed4Rv4Snehm7fu95P9pY6iDDeaYgGVfuaPNCYN",
  "key39": "5wQcryMrzmgx2D2comhbhBrT4KwsPZNAQKq3kwbCiE6aJCqA9FuZRgn4qwfeB29Mbe5JeDisnLPjMKcBpPfHcPqy",
  "key40": "5nzq4ecaDLt23Nw8q67doQu2kPVcdEuv26jomRCUGeheFsCfKRR6a4VHgjFXd4zZyHU4N7bHFuZtcDGQJV1VfzDz",
  "key41": "2s2JQGeJDnYzKuxwpvpTW7mxYtrYdkeJEpgFgxYo2Zysngm4iqo6UaFt65dZR8KNj4xKjRTrhd9Q8PXm7XQT6pW4",
  "key42": "4pBWnLec2EJ8u3ExCjf8Z9zu5YRjH7A5xrjAHap69SRcgiA5mUZZGmcKPpt7rkDD2MKLPQ3MoLFYhwvUvj5Q45Gs",
  "key43": "dhQuPuVrvyPSsnNhEXq3fcWKrHobsbbXwebqmwyD4r6gdZARMApqZQz26k4RTkmRCVX38t6Zfxyj7KkhvRwJS8C",
  "key44": "XUjLnKVQCG1ExsgRr9doJ5ALJgJ37DCfui5yKHfW9WBopXKURt8U1xxZC8aPxq1uebw4sB5vC7wHYKCLzsVbZzW",
  "key45": "4w31iL7qGD3EpHqAGfAxrvBzTPEqVcv4QatPDA4Bc9Tp6cbn2tMDG798DoFpVdKBiHGXYy3mRJbqg5oeAn4NdQb",
  "key46": "nzPv1efVKZWtAGRSG8U24RHiipJqT42YoK8SaViDsCCq1bueTBw2GTdfiFpeY2Y86SkkNLf4jzv25U4hMoEsvD2"
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
