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
    "MDFsJdE1SkZTyNCBaAQxLqKNbyYALYFcWs14eXvBw96zmi2cZcVeq5BsmFHV5HbHKfiUKxqpaKep9REPH3Bh27i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGHARLmNsmpvsBuTCcFfUesbqTkcgYGehMdhRNfZftg2gsRZHR5NWvnJRaJf4hJNpYenQWe5gw1e6H4ic4cqs6N",
  "key1": "2TLfJeiqBqiNG3jHPJ1e8M7u3dNKeAoUsiHZi1WqLRS6hE86ZQEaoFWsf9WKVYefQDSk3JcRkhNQXdmesBubeSAq",
  "key2": "5mcN7PDfYUykWmU4tYber6MTvhV1tjn6EMUYPHHuY7kqwbG8UfnjPL2gowRAf2ph6pYbgQrcnu6fEWHW3tR1Vyw",
  "key3": "ocP2AHLQVBP5ar5cZ7bLWJ1Gs1D59TXnj93E6pcoA1kUDWHYhxQ3YhqtkQgLUmGJzji7J5ZxLgDNhsWrZzVFb4X",
  "key4": "MAmx6ynNXy5HpXTxn8Cc67ra2CYLAAUkFnDpuf16uSLkLbryRDTVM3JhoJP45JH6ZGoPJCPebEtXrnBSYd4UL4P",
  "key5": "43L5gv2nfXd5SUR66oJHnuv3MhJWxKNj6iJmjdT9JTw3sPA2cak2i7sUdwpVZV3V1Umd3Ka8LpGevx2yvGShftrm",
  "key6": "BnxQ5m6TGS9JmdcqCcWnUrg5eCj3iXEaeX5AvRPgwFA5MkdDCsmDu1JpCxrUmhYhNQfGc1RXXhj9rsuLU2JdFGL",
  "key7": "VyZyNHsHuNP1yuMa1EEp29MpDELP8Xzegp4WvrEqkk1pm2nmBiysuEwQJHUgUgRR5piwZvuwQH6o8sZQDSMj1jq",
  "key8": "51RvPLX9EXqwUK43Z6gaGunwUTB2L7aqeB1ByJcenq1zbt96wHTvT39F2RLtHi4T6cP2T6yRJrFtiEVqE4b19TsY",
  "key9": "2MFoNCJ18A1yYEcTaLq4rhXkMpb5eHovjt3EWEXDHFHTybBLJg5YiqzxmkS6RRo52iPmzNm5Xnr7CcG1PBMwTUMK",
  "key10": "G2mmVTVjSQvQ99gmK5FT5uMUUFgo256iPTiKgFtxMLVdCKQBHDsaAVbmPDGTtX34xmdr9UmE1C6Tzp5pSN4F13z",
  "key11": "2vmtRHvL2PgsYi4Z1eab3TYQacr2JafnLd6ETx18gmDpN36jzB3C5yDwdX1GEKXYU8QCEu34nDTnwRSLMH45zJCR",
  "key12": "3BGuv31nbKKG6CW62n9BK4AsV27FS3rvMqwNhDs22Vrf7qfo66zMouZdQFX24mz8hfoSgaCzQyTCMRG63pWNaqBN",
  "key13": "6794M2vp4ipq1wZDZX8jP4tZHuoi6nGjqiWvRFFqP3WPV8idY4pjWHJuNu65yGL6zZLXVcWPDnfAVr7r3K7TwMfB",
  "key14": "4hrmszJs92PdAoYDS1EbvWENbzUbkKEX2YfytUc65L62cZp5akGsAVFdVy3kWyV9jJejR5Z6dDQEZhiJb1wS4RkF",
  "key15": "2Lb9S1asFCbdVKY15CSGhndUEEhWyH88bHxb69d9gTGcWmVST18R94DduwTaBM7FThAoRMmRGd5YKQbPNufFxj7o",
  "key16": "wwCofpiNVLFKz4oVyMWY5md4zvyG8X1xvZyCNZMQq5McLoLgxbsSTaPACnWhG5AnN4utKZuEmUHxreRJur7gWK7",
  "key17": "4UtK6Tgt6iV2q3N6AB93U5ykCuVe5mvQFTy7DNhvghKmKfVMfR7GPoFaZXdJpGrSdyd4JaF1e9tvL74NyC5q8qGP",
  "key18": "3G48mhU2aiuvE8VbNkUeoX6pDk6sdpQrWPvxZpLRkWoVL5F1Ra2wo4jNmU5PE8JviQW2ZmTCSyL7CFEB9F3uvAdg",
  "key19": "4qcZQUDgKL9rehb8zBGkQnSDVrRvaKzqFeRwSZiCta24CLeP8xqScfJVzZBByd5VUdX6Cwv4TwgXBHmrZPTmPWnH",
  "key20": "U9rqdSkQhqUy9jF4pBv3dEBbijSsUS3WjPPZHHq2xhJWgewdjRkcEe9uxwXviwVxSvNpYbDZBxc5QFGvkW9TaEJ",
  "key21": "29x6qUFekenvtdEd2xCmBWNVAEJ1wHGTKHXBBFuTkdVSQUZ5CoiKCLW2BBZMJ5xsDwguZTrf7YJCBdRzTRet3aih",
  "key22": "5KAifqWYDSMLdaPpZDNtd9ksA8L4CNdkSKERrdMY1T7u5tyT3TVbpfN5zch2RD3UZ3ELmwrcrJkRKPWKRQqEp6Sm",
  "key23": "7nQg2LfuSmSS3jUmC9PWkiCSG169K5ucfbcnWMSWW219Af7G6cFPa7p8DnNnF2gW8yrYrFfRXFrywPy9QNaZarY",
  "key24": "CfERW82AnQMhKpgUL3xoPRV6LNt8zPzobUWfpTQummwqSphRQPaLVY1GD6mEAwdkR9qiaVpLtKCDNqz4ZvjSAt1",
  "key25": "2957Lu9cVAcd2kJUHw9n9GeEbFQcLiX8xopP5CiJjQxWhkva24nMBaCHt7aroxszcMs1Yk9H9TGXBmqfTGjWETeF",
  "key26": "59aWPsBgsUod9A6gzqsdzj9Cens84MrWn5xD3XpEm741mrRFofLKdhD8WACMxqBFYpnuH9bXASHj9KMCqo7cB7uj",
  "key27": "4YDJP8qDgkBhjJGJfuGVuJ35UrLGTex2ou63SYmHxXodzuzHrHwvKwgxxerrWAxzYhMH5FVuxdoe4qjVjitqjADQ",
  "key28": "mx3qHCG5FG6qcZaKhMoYBiGaMh5jyLVYhRaTV958UqPgnQ7Mr4h4HfaDW5rxLHTe4AxfSNem67bSup3ZzmfRTzB",
  "key29": "3Sux3XBVpLUktWqqQQzy4T9ucRfYPQsFgxMg4jzb2e7A9UDQSqLdgEZ6RNkMDeAz8kAfuaGjsNSwMpUupWiQK5tC",
  "key30": "4g38HCovKyMSWuxVbuXnhriZTPmoXScw7Q8UDniv87Mm8WujsuURFiLu8Wk7fgDuepjKUZjPCiFCFb2vikDiCaAR",
  "key31": "4LHktXQSn4z1NKGqdojRE84Pmxk8YUWWx9CGEc6A691JqTJ8gYRugExKPaK5Z4WMnLkM1hyDUmbYBWTjxyiK4gGW",
  "key32": "5dTUh9PTMi1HU2tBD92nYusAggdQdpQMs4C8e5ZECcSguyM36B4bFXuXwV2663oznX1haqfj8ZFDyhXUVi1ZfkRT",
  "key33": "53YACoWDMLVgXSDtRpqNJ4kmDAXdeGJ91GD5uxMfU9M5kzHZV92ZhkxNPeKiXCCd5RGtUn3EJSPNGjTAEXqrEWiX",
  "key34": "3tcVEZLhe9iAjG6cmmxGWhqDTzTccgeUNCcEUzWa2FfnCtz1hopdC428Xn4wyvTqmobpwDMmUq2aAY5y47A28KiX",
  "key35": "5AmXHUttaSggFZQDoq8nLNDsMjcyrU7T9Ttkt6Q46wpikYJyxEfnsPeT95HxWVf3F6eCbktbw7PJ4N9513Y3JC7b",
  "key36": "4ScgsWTYdAPXUJf5g4fBqaCBh331V9197FZ6bhjwCxEy9E5hTV7Rt3fdJcbyiYLgrfxptVmP4GXbbcB22xYaJSKz",
  "key37": "5X9J2Kb6q5sXmEbM1U27e1SAzvX31AceztbjmA1VxgyEFtN7PsHhmcAyJvmw9rSSV4FNTEm3z7zuP63udRWbb4fh",
  "key38": "3QJjMFv1Gbjb2XPvsWQge9j4EiZ4hEVcp4kJVsD5yNziqFUH5zNnruGoLSd8W9SzmiMzsGxWByTPsKb5G5VbGGiB",
  "key39": "3HYYVnYoRQntGWbVSa3XAGfhBgWMhUAamX4XMYswy6pyHWhVsXgWPKgRsH42UppZ4b6V9ypBPq6Naft1jR2waoeY",
  "key40": "3xyokZXqAsjqCnbcxtS79HBT3gkb7vaaJBxdTK7HDWuwpLmTQ6Cmah8zt2Y81x3VnXhTguvQFWiBfDJ4AYfBt3xk",
  "key41": "62AjvV5iHUAftAJKMfCHjNWEGdvwZLmsCmq2CpSpkRpNMh1YwwVyZ4LggDNmHDEE1GsRYfgsADPumCYKdbteJbas",
  "key42": "641Co4cpHn4Xh9unmhpMWgzyjdfKaZxoGCBWpvABGc8Nf7uo2zENygVA8LaqenGSNF2bQXQuGfstYrK1MfrZ8oDa",
  "key43": "4HcsSE2cjNbG9sPe5QWKDw1oDvCx3PVmbrJaT3SdHeyn8os6fdTNM7mLjeZy92LuqY5p15imxgH2gV7XekYAqQhk",
  "key44": "3ppPkswJwnfPUQTgJM42pcvRMF8bFyno8SZAiprTXPa1TSojhUvpRrMBWsobgWZeUZCady6TgoQSpPurMEkbszh3",
  "key45": "38RjCdDpwxKyVq58syZaVtY2GXn9kJsQ2hXYag3Vg1vcBdSoZpDqL9mMsEj9A7WbUJqQyLW3tnwUvLiA43WMF414",
  "key46": "H8VxY5GwZMD5BJNY6CWMgGtnGSz1kFJ7XUmFKGkk3ojRLqhPHCt3y3mTZb1X1WyrgZWyKSkGexaXR4fbLnJTxGf"
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
