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
    "4bFVwUHHLfnuALQaYvWYW3VJ7gP4bHQ4jTQHNgMimtAGUjVdSLQSi8HYX7ixc5hBVq7xhrVVJbxagwqK4kDQ1bHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73bH4CeTUfWNRHDAGAvZJJCxdTKNMCuwNUf74riCnJDAomJxH26Y34qV4hgZc3TBdMSsRroZPLfTBi6hszU9Jwe",
  "key1": "2JrnvJUNCBXCBXYwdpTZK9qWVfzhcUAeG41sEvK6PSxTwwfG4G1KY1fpJexRhgewK4PimyiAhc2NGynB7d31bkH8",
  "key2": "3nqnq9vB9aPWWPW5ip48jxfBhw437mev8rFZnhtYrriKnb4Qmn8MvyFYkKNxZsDap5VRE9fuw5WPok9RM9ERYf6Q",
  "key3": "3ZPB5dGQb9ff87ahh6bEHpUoXphyyPfWrkf9S6wg3CbjwWKEG84meN6Z2fMx3EY8iMfHyffu4jSzMMiU9B95DH45",
  "key4": "2t3dCvDQvyPp1vFZag1F3BDNuoL4QaQbEznfVmfVhgdTz5n6fsiqYhqU2xadqwQCs5w1vCqe5RdGLBQBvThvuT4U",
  "key5": "5hkB19xP6ewvFSWax9fvC4VZPbTSwwj1Qd8H28uLPfL41NkN437fyDMum7SEFvbZt2UK51SSSnNQw9RuLrEXcg5n",
  "key6": "dakGayF1xwHBz8QruF4XTeFTta5xQWLMr3mz8AcvdsC9Cs5rtrdxk7zxHmHjARo5Rbvth3DfFyKNRmPu8Z6v8Ze",
  "key7": "4qqnsWUVqAYMWd8tQheczR9pB7s3KkubHPGcWKA6CaRM6Dp17VNGR31tfTCXQoBdTQMLuBrj3Yfyxdxmcr5T7NmJ",
  "key8": "1hfE2YkwuNGh7MahPA6muxgeNoWNRjmzyxznYj12o5gr9dsBanKb8fsvNidd3LH4byCAPZfBDvJpiYnuscGSddc",
  "key9": "rk46DA8JaASZpkopgywojp9UYRYFE7HeiM4YDXQwZBTEW2aW35dTs6Rpg8VuYRZh2SnxYfVfi3EzR7dwnnemkPA",
  "key10": "4aEengmFTjQ9ECFbXqo4Vx1csejrrMfTEPF5XSX4rhyq9GCwex48woh3fp9nbzszPJTKkQt63XTam8Vv2c2XHemB",
  "key11": "5E2H7C3vNyqKoAft5iwJEM6iFPef1RnzNChjYbU2iN7V7DaejJ6Wn6nssPJcCWRaDtAfFQrDt45FfiDyNrMZEUwt",
  "key12": "4jLqC2ZPRAXKHk7HrkQyprRA9k7ZgYjSKioGmfGZ96YZFDUAVJpCGVRVKR1svPLHYn4BfwNXgXNvZm5ZMmEmPgM2",
  "key13": "5EbYsogkhXPpconuxD4rUyV5ytu2YZuGXMwjB4TykiHpAPFHsaVkUd2GFzP8hbmgjjYL29GZjTW7tUPiGkPXBRKW",
  "key14": "3f7m9uqqyexrErSwMF3ABDF6t5XYbUCqvXMkWKEb91drs5orkr1v1vNzrVWqHvctfUCs7LnGjKojn2ypa1WfiRry",
  "key15": "3Mypmcwfnp66LQCet7r4YXVnn8PRnXrMsr8Lcd93AYhJdX2CjggXCK4rGccbiyzeaENYV2Pu6iMD1wn4vi4eja1r",
  "key16": "2Rg1XJs7Q2UKStQ4yoZqsVjSUv72qaec9ff8GA4uLv9nLY28sfy8NhuKWsTQTUQCiQeiuMPnYcxvUz7HUoh7yQKt",
  "key17": "2EDgxUpqxmbHMp7KMDrVnSmems2tgMr1S51R76EHBGctaQ6z1Z5CL2eMo85YXSg7TdFEzE5MtAE5Bsp8j4Ar2j5q",
  "key18": "y4wzmaWtH16yQmC97cMxR6x991xAini1hVoK4J5iP6TCa6nCoxxG1ViwmyCAg2sezeD4oARCZ9dyi87KZ2PH9pM",
  "key19": "3qTivY3VW3Uu12JhH9f8sUXfWfXtM4kkfXyScX8gt8gB55am78XoP2TGfJ96t91bzW8tHLqVH2x4NoyhtkaptZ8d",
  "key20": "3Xwm7cRuAPhBzvBhuuozbnhDadSxFJRYp8fn4cgFPxBSrgZPTRDVoo158y7XbcYoLuRCi2MgBPtwvXTWuVKkQqhz",
  "key21": "3EwKVEQMwkWSSpfRat64SXaiBhBiwRZucPEFqVwNMb2wzpsEE4wGG9J3rc6h2TYzE2zLtVAFUPaibLdFypxqWaVP",
  "key22": "5YirHMT6tnE8eL6Sdg9aTyzAZPbzdcRndZLgHTyRGMbwjMSzAvVjckd4QZD6tM9Pbt1TDHjqpXyMQgvqhuhWvg2P",
  "key23": "31ocmUMPi767ZkqRyqKwRt7Q7gR1my2PnYXQighKV6GMLX6LEZEtbTsXESk58Ya6fYsisn46CnDJ78Kd8aqTifPq",
  "key24": "4xtdF2N5aB2PetNzhLV1LdegfAG7fTLH3pywdvRfCC6ibpKXgGWFZocwdKNmhEghZHF3mD789fAGjxvD4Bz6EzNY",
  "key25": "5K5F1Cdr19K4oVmechptEZkJo118iccp1VVFNww7ksyQXV4wGUwxuTaevbB75pJggq2umqnTrq6tGBkoFQPtM9Ag",
  "key26": "59LNPL34UbTHebyCVRUGo8qruXx8m2gQhViWhjn6t4mUQSxXaosymDbRFtUkW62PZqCHU2AZUhjQi6QMRRR5CtYe",
  "key27": "3i7dqw8uP9JKSVukEEPCfVJieQAzfAateQsj8gkjPqsZYd2uy6qkdKAGGUi2kDLMtdg7yZvagx2ArbdycWSPr3Ge",
  "key28": "669YJNcsXEeXXgRxMj633w8cEsevhvtabK2eJq9wMxjq4XWZrVDGGeqbsT5jX8fkhUb5iGCST8DjrtyrkYEveGEF",
  "key29": "3EcQeVjzgFRonNMXwiTkLqQGKSTAcxBuapR1is6uBJrPayv6mHyd5mocYkstto92MJ44bopsstbohk1oDEKXxg21",
  "key30": "zVFD7RKV68jHJUKVt3pxcFr1GVvA638FUmKwNiGxBM9Miq31TupK3h9sSPMLDc5Ec956v8yLHX8TD8Y36Lm2qE1",
  "key31": "5C7u7p1KoryhoPjQhgnPDCKxS8dhTbWRremEbPsuYpuRamkRg68bsMMdEkzN7eByLihNKGHtbwjmN7y9KAcV8FRn",
  "key32": "3HC3MH89YREhe7QUmhp59FvZ2etBbaY4xsqTXD29u7CJeEzNeNwpurwAvDFs5uuEyHbnMPw3bGah6MUEqqCvJQ6X",
  "key33": "3QASvSaaa5Tp8dx8Vq5GxvoC6GgCF64Q5ozwiSNurMinNTEgD8cTLRJMbLEdLgRGnpo6FCMQY7gWwpvpX4Mnkitw",
  "key34": "3hhPWSv5zf5kxwZtwEEzqZ6Awftt5xGLdXxa7XVSUtL4A1KsYGWV7LvaTK825hNoExPHGC3LFU6zg4BoN9DLaZrC",
  "key35": "2WZdXj2LqfnyqZLttHos7xGJ2aQi5t38DJRDatw18gg2WmgiV5NcniLrgLw8RFhJSwxfw4aGvecpvy3xwujkY5sJ",
  "key36": "5TtWHZEg1e4SXMFnxMawvsVpLiDsN48vSTcN99baez4viyDPRun4MbwUkaKUhx5P6o9eRSY4RDfMR5rN6bzkGiws",
  "key37": "4fTbZPpRBHssC13kDFDySQrTCqMW2crEWS9EVdXdPFcsFASuSCvjE1XVuB1Kr68833Gs3gV9Cjjg8UKymmXMbYxW",
  "key38": "5byPQnHb3D2MTcerkMbiU1ee1tibzqUfb8Z5VhNR6CHJ7Jq6SuNgkTNtnbGCM8cT5R1gZvshXK8TbqsFMWfURUqz",
  "key39": "41bVBuvGHAh9QgGBSnHBpEXgPgiyPC6NZwgsa44aBv77wLMace4TuAPVCKVD1q9qBjKCX5eJrbASLf78z7ruJb1a",
  "key40": "2orwPcHMFKLhoyXuVUPyTz4nGdicBG439ZDK8Mu2zXtMM5qCRYVbrnjC8edQTYTRe6PDrKi5DHi2YMvnUx9KUQML",
  "key41": "2zycNnS9Qapn5jkpFt1KJeEfpeCci4jQNGizG6mytF9JUtGQojEPS8XUeJ6TVFRazkJq6EpjhQYdW8egEn73J6TH",
  "key42": "4dsZfGJGUwbizsV6puS9vQXwuKMU1aUTuAvoEu5E5hHLqRTEKRrdjmS2PZVV9dbaGAhE6KGqxBb1K3DDWWqog7AK"
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
