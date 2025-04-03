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
    "GYq1ctn9wUniWbwuDoEtorTWEEytLePRENNMdNyR9nfZXVSfUu1ojywsgo1gkVcrCeCetLn9or9Zwmo3pszQb9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFVuPJB8oFfG8yN69jP5eTRpm3hvBVuS1754HNRNUVkuuJ4BQ6JqZNkR1hV9Yz5zdMVnQxCyfbcvDK7cfEXF6R3",
  "key1": "ZZpAKr32rt73t2GL6ut81tezmKeywoVEiL2zqzS8BAeZJAx66Yfo3C7C6xPbk6R25jozJDL4wbi75cU6U4Do8QS",
  "key2": "2s2rr7UoDL1GtUutaJ4UHrHXvrGHTSnPVFXzKGcYenQ9Mh3iFVye1f4ZhHzJgNHiHamTkzLdB6vmYifKTupyyrir",
  "key3": "596ys8VQVotddvrQLwaVuxxkCvK7wtkE55kJMPuaKyih3PCBj5itqbQErMcRRWKzAZbDfRCwDDtwFxfnW4jRorAv",
  "key4": "21v5DbPRLs6kQTUom8n5G7Bdhu2iA3xaNgJxozfJUTdYqR8KyXSZX1t4L5sgWsghy8DmUQXddffhaebSV9VX3u4U",
  "key5": "3UGC8EGSt22p8jTCK6QfT8oSzSQHCSTGckHLXobqEo4NTChraadf5Tj5paVTprLY31yz3Ad3emavVUtFXik79A4x",
  "key6": "585TLbosiqSrQdvrM2Q965KvFSTFzu1aQ9NmZ34PnJ3QKwmcVqYtewS6H7L1RrQVNq9EZdekS3fmU7cgHGuD5YX8",
  "key7": "2bhJmijHd6J7rmopZWgTowXQ6ZiMZGe4M2dKUZWaqkFeEd1sJyCKTGep5qH2zUbetinE1zAD2vr1xLaP2kuHEqQt",
  "key8": "b5G4zbJjPsiCrm1b1gyvGhh7e1V7wBR4EMB9KejoSAUrBXpZEP7AkigLd8XWmHdMvh5ZqMFYXR1WTWea6aMdpk2",
  "key9": "hYHNGD4FHxfbfeyjDhK7iY2FibKzSvJAaAZWM8t7KA3qp8otTsZ2waE3tqSk6g82uv2TcBpsdRApaXmvesZ3Ltx",
  "key10": "2wdg3tqUydPjXjHrzsmfbAH4pK6aqRciQm9qgAvZhU9wxvrPvuLAvYQpcZDrSYcUxXeWKYnHobHweLBLHojiBDNB",
  "key11": "2ssbHaHaHSv26EGFSnkm5AamwGpXUqWKbj2jGW2N7cuxwsM2ophHcG2eo7GHD2TQZ7EG7N8bCb7b7JmTPpgL5c9T",
  "key12": "3gYdZzMH3yVu9HzBar6Kn4K9u1Usnj3Dhwwy9dimpBoLDW2MaN19RhHemdbdMUepN1q4efRhYVsTpDZs5a5tZJHq",
  "key13": "63q5fKj32dsHQUJPW3uYd1WjDg9sBNirk4EMLYzd2miCbnkiBS43ipMV6Rg8CEX3fmLeRZNghrBDULRtCp4N2buG",
  "key14": "5wNSRzcmcmnoLfbyWtuutVnUUywizzso5VZUDWUksWkaXzRPGkPLP4URPZ68hwo8Qq89cpPkFvWWWmepoFH2GwRy",
  "key15": "5tQvhbNq3eKCNekQgF7HatdFGM3g56HunwHh67m1Z4sX8T65jpPpRVbmRhvwLJG1vPmFnuPMpgQEX2xWYkAWSyZc",
  "key16": "oSvgCirJPzT4A51DsMS3HqJPBPojCDuWuNFFpe5qb4aoNC4MhrBKS2koAUQ43fAyme8XwTjNhqk4HZjHVaofSrd",
  "key17": "4Xuhs51NyNKwSUgXuYMYsv1zXn8kyHsqhntSfK7gYivQTB79md1TWGiHVorPxroE9BK6DiJJDkm6GBgQEynRC3pc",
  "key18": "4ad4vhegEgqokoBkpp2hiWU52JvGRJnLWiJzwsDUxiFZ2aE4TbMpd8Lm8XduCqcpysCSi1dLDk5ZM6qDGkJceZu8",
  "key19": "35pgBMsSNLLnBdCSE1N1z4ijRGjgwtKPHJCQvAfcgAKNnaUysm1Whzx6kEDp2ohqz2NbneZEqBD1LCL8xWrukkuo",
  "key20": "4HBD9RspSXBHgX1KWivcFY7WS49vd4PUDxzJ11sNhPV1BRCLQd8BANcJ8k9aPCu6sFKccZ2foAzeM5L1e6ccjPaX",
  "key21": "5nWKbgPX82jVHsfzpGeSowkTyemKcvCh3qU9rr1cKLor111XT77QQwZqLc3mqpiWLLNPoaoRdxEfFLAA45vCB3KP",
  "key22": "4nE8vtVxfVtLUVHWr6JJqHPcjofkQ4e9nMEQqvKJ8eBALorkMZahTbF3SZUW5rDcW796y1S2FMdQrhaWNhEiiied",
  "key23": "hsYqvwcnc5rwykPF1RdFfGz3Qk4t4UmywKvtTGq4mn7aq4RrnWgoZCF5oGswnkR4UjLrnaXKskR6oPEnnf477pi",
  "key24": "5EhBoemhjCeofbWG17hodwptP73EdBxyLJDwXDfEgc8U6vh8XFCQMS6DgcMGHCjGwTAWg5WZX8Ctg39yEddadVzy",
  "key25": "pTTag5nWHfyr4TDEZiCgksYhErywaW39Su8cuWH2XJ9VY7CPfwLp6ZEZ53g3hV9ws6GnSfM1czSBV4ycL5BAwLH",
  "key26": "253BJEc9eDkGhYERb835KLPw2M6wVhca9GFLSzGGsmUVNndEYe3BK5t4tNRpdKQSzsj7B6BiuPiPfwwMot8EUd9T",
  "key27": "2WdVeXWY9vKMCWUS4pDbMzXbBBqkHukqom5CYcHqamZLuyFDwkaxVLJH4Gs2AqFbNnLBhRwyqftTopd6T5uwWtUB",
  "key28": "3kt3xp4uewfKwcjiG9EYGhjTnV2UT3xptA1TSA4R844MY2X1G2J6CF8Aioorm8SidNHpR4bVskS5Dv1kRPpnb4LC",
  "key29": "4N3Y2TF57DBocDTpWd2mLjaPdvokT4SNhhV3guaaYZ29eWTrZkf3VspfpcAtD5gCn5d8pipf7q65Yy87gA8NR1R5",
  "key30": "3PL2EXYV9NkDoTSQTkVSd5jHaVux155a8jfhWAiVoJ8Szo5VnbcEmzibgLRxn4QvYQExxyu58k8XLVawoDx4Pksk",
  "key31": "3P5M7bYLwfWo8XCjefnQhX5xvkcnpma41VKFFob3VLcyosRFU9aFHrbFCJ76KqtkLCXXsCSPSmUgdeEU5AyqmjPe",
  "key32": "2b9o1D5S6pgZsFxpHfMQDLLkMXEFdxWVNpsKkoyapDYJfj9EBJdBGyGBv4QLX6JqBf7xiDiNQJewSNea7wDprqx8",
  "key33": "5HwmSsLaZSTNcUNC2LEwzmeHqF9BjVyNxRUE1ebpdYjPxT72HreswfdB8QWDKDmD8huGbYVtJLA3TXZ4GyRSYazm",
  "key34": "55MrH6NKryD1zJBaedoSewkZ3XsvJZCLsKYFeLkq7Bt3h9UV7Za8kD77Kov2HgPHdiEN6AsCnQxso5tV1K95AecA",
  "key35": "2nurJmezCMnDBCFg4KvCcYxQCMP4z1HTM2zEPLcdeK9XZqxWgLugtcvp2SuFBZJaKNs4YpqNdevzq68B6wtE22PN",
  "key36": "5DpZeHi5nemzMnX8Nm3enfH9p5qEdeSPmTEAF8veQwbDFRkykEh8VzPRSLhQsY65MBYQq9yuYgX6Ysq3goBBEoew",
  "key37": "5ABYWyP92yJjXWXKacnmSTaExiX1T2mWnRL5zXQpfwdHSf7rc2TDabqVYLa8YDAk25jo5ag6kVLYdUwyirQNM9sY",
  "key38": "5VmAge8u6d8LhEdRuzTfQq6TEz4UbvXuy5fYifKNVLcpt6ziYN3ZZao1KZdDA5SJBKNjozcf8f13JVK47KBtRtTU",
  "key39": "LawX18xA1rcP6u9vUPfUsCssrs1k3a77mWL1uXVELRLzPt18LoinxdhtEvSqVhe9x7e9fXtrmV9A5MTGoP35eBp",
  "key40": "4ivKeSf1AzG6fhJ7oPHmtEUBTtadh89vpJbU7ZnypahavHKrSen9HbPzNwwhNbJ5f36AfsAy9PNCeC31CzuzSLTb",
  "key41": "4GJM1UpBGrrDokxWGTpimiQGPygsVCyF3K8225YRnp7xG9mViWjAQVwuNaoKfb1vqkZEGWANXM4a6KCZG8wNqqLM",
  "key42": "4PxL8WBXKpcKQm9iQD3STXGgMziKG11zxnga7NAwJTzoffWYDcpsdd9Yt4PWqK9KYaAcVzfQdtaBGgrVJouCGPrF",
  "key43": "sA2Gm7sn7F91LdutJiWqo2qx4G6RNJk7EUCGf6pVHW3x4Kn7h4v1bK9ULqphVR4s2Prtx9ixcTKhzy5ntUzP4iu",
  "key44": "V2rK41zaJrLhv78wH2wsKktHcGGSxq2HCcGMpyPNSDy5GEx9mYAAmkkZCs56b4m32X1CRTvyu28Zs2CrTd4dxWj",
  "key45": "38E1cChpNrP293wxZ8vTCLF9pnGwFhhKKj9r6GpKABJujpKxAqg2YLotQArWtWdMszjPFMtvcSMBVSeAK3617aGF",
  "key46": "4Fdet1UVtdXKvZnzhAPdR1vHjrq7vt32MwzJRRmXnignHHmJygTgwSbWk8x2L733RAvnbW762NcZCEEj2cB1BLUp",
  "key47": "36uaDzAkAHKnjFJxW1Z38mZVLpBdZip4mfiGeioffD2py4fRcxTKfgptFPdpJuNGeiKkr2pP8eBs8gLhNJ4jsQHL",
  "key48": "ktM1BunBqeBiWcqEjNxPKcHSmhV1eJtmA85wyAJC9Mfv6DvqH9oeNwsYcumQZZzJHJsei89fGTKfJ2SxKtPcSE3"
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
