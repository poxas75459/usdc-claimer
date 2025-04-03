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
    "3z2m3ZEGZNvieH6fQM2it4wGPB1J7fT2oaT9gMMX8dBeJvo7AUpVgjwQd7FM8iZkH2TJwMLnFAoNC65CnjbVkRh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edz72MUuLC5ETyxnGtmiF6ndZmoRVA3V8RwLekc4PrtHFa3Lcv6rTQeyanVuy9AuXtscWiY8gfhCDrgK7cS6zYd",
  "key1": "4SLjwuh4fFg1tqhmhREdGEK7SXQChG1oBQ1XbXiiXQkVfw6DVBCALz6akxjBjALDRF4rDMS1NNehviVYrRGBi6fv",
  "key2": "5sjzVW4sGKoLiLtNU9Ap1aBvZoXBatUgnfCou9MC4KbbS6eP99iQQTPghmuMbYg1cqK3z2nWezrwYwy6w8z3PvVW",
  "key3": "2erffKafaZGRVVL7VmbKak5Af8jHYKqdsX9RM49myghCjQUUesjcpLzNgvpN117Fi3Ma1imHCX8rXBqnmrPyiSJy",
  "key4": "2qj7RxZrH8JMbEvwF9rnRABvWqodwYh21R5e1hzaZoFF6v4jB6FnmUzMghaH5VwALAUi9XJhXD4JVdjGuDtDknbn",
  "key5": "5pYqBqnYUp8GzaKqqQUGU6fe7TryW2pf5Fxj42YZA2kUjsFbSapW91fEq7o1uYxEFdbvTtvT62HC1PP7SBPQeoAu",
  "key6": "3XYw7EVJXKTXBqSwE2jz3eNjmQgcWP2wPJm55avy5xJdZKuU8T3YYpgVNJoekh82oZsmmL75sTPrCbiyHYRYALWm",
  "key7": "w3epFZbADpZEN8WR6jFk2AL14iWfC1QZngD4HJVvz55bJSUTvrmpDF3XRoaCa6BpRyK8ZUmS4Z72ZjL4pfZ2LVr",
  "key8": "5d9pjA2H4j2txicxzMVg6cQx23QH84WnSFRrMxBf6529XmbB7gnMu1NKccPDyh7XZFc2M9gxihhkkTbhJzjDpNce",
  "key9": "2zdJkURnL2yUGLQGkH6LjdHXa5hnLrjNinYz8gim1bfzt5WN5QfghDZMCVmfmT4y8nHtE16Kcj6dLpCLaJ4gYAeB",
  "key10": "67QLm4CS3VzqQGD55GoDjnaZ1ZGe7FfUgQrHFygAzocJnjBsPbDCtoCCjWiqKCDhtgoy9yCVfzXSVAGXmocv7RPH",
  "key11": "3k129ydS8oXeY9cdadukQLUk1Sxuoy3gtypCPaRwetvnL6KGAHNy88dUPXKoMhfQ6ogsVBtR8xuvDzSPdyKg2mTM",
  "key12": "5R3HoKCEFPVBoSVmn9qqdx6j538S196AB7zUb6fwSHB883zFQz7S8VKXFwwviQXRYAZmUp4v25d62njcNQUi2U39",
  "key13": "4DdZcvnbeo4exneBuMS2z3DLPde1XnHywMSWPzpzkJzyHGuAdSwh7DvxmyRbVRxVsN1GeG9YWdVCmjQ746tgMc9s",
  "key14": "2RY9QsYBBydPeZX4Pfoyru5VT6t3ihLjb64aSVDHD6r6Ut3BdbxBx7KuHGtYx7VFWpo9WH2ckm7e8hEymDg1roUa",
  "key15": "5tJY5gTJZrWgh4woNgH1ZFBwhSNqpsoADRav5TGpfHbMxRhVFz9BWUuQ5YTn6RrYhNPjCMFUKkvrQtvu9jBfkaai",
  "key16": "5ATkfexiRJ4423ix9Ba7VyrdBQWfEhWqdS9x5CJqKgBcaTLSLBFDFMitLo3xgqk6LUw3VxvMJ56bJ85Nkpd3KeQS",
  "key17": "uDjXgTwhmcN3wbxzGrDScK3XrTimwqT1bcuzb89wSD4bp6QAj3QkfiUDdJX3wwiwFmtSUhiFbHnAMiBotr4cGnx",
  "key18": "2sF3XhXRt2Skq4Ya5LjrMqFcET25gagkKdWKMvrWAyDrkgZrZ8w5QtF1ZEBcfhopKCRX7DaFLuMZq6aBhtw2bgU",
  "key19": "4oxzT1QQTWux4S33rY4Fy44LmfKXAUZHJcisqxsY1LPJKKdmasABSYR1KrN5kfiKQAdRTS5yURC6hSMsUo6JxPSk",
  "key20": "2mR23QZZCTF9dF3ka24jjhjj8e2g4S2oau61UzFvQRVrtcPSR1spQBDGkMUDczGjPZtkWdW1G7a2oYg8KuWQqaoz",
  "key21": "5qjAjozvACUyxGuGknYeF4WVRe66pGyWWXVAo3Es7jSe783maYKHGsNCGX2L33GssTydoGfnmZtnr1sR4uMd9UUr",
  "key22": "3yb5KipebnsxhJZadnPcgyi9i1xSmst2B2GZV22m2MHyihS6Gt5HpPHEs2itxBqfYZyDhTtr6mNhnEdLbv9zkwL2",
  "key23": "jZZmY8vurMsHyCFaA9bKM535Tv9FanShKgRFsNFePbuZG1Cz6J5kRdDdtRvuGbSrPM8mkSY5Gyf98f2u2DWVadk",
  "key24": "2BU1rtY3am5CKHpXRt8BGXV4ZHBAc3Me9YjsFgaJ4ZTQwg54XVx8gebvyXbp6knvqnciqiPYuRHPd681VembDKAB",
  "key25": "3eHTC38ajUivoohZ2DMZkhLLLFJx7Tj2i9r2LhABGY6DtT6UUQVZDq1GjeGCwcGNen4Es5LMcADkRotMdLUHfPAN",
  "key26": "Wmr7meZxPpKApHmRnA64axN8bJH9JPAu9Ur2SVkn5MGnWk3ywXN1oysNoN6emozUwM2JCZn9uQBNG49LnsSgJYH",
  "key27": "2FdLZaqHKhXifLTaLCzioZ2kAQVEK51KDWNGQX5StyzwDGDo52qJBDzYdL5cPJkkDf8J5mG4q3JZ7w8t7smukNfh",
  "key28": "4Lv2ggbXpySrQWq95VyrCJvf4hNRECV9QQ2ixr6vkmDZ3kdjjm3Buds4RatLfeAQJ2PkA6fWWVK1Yzc6sbWqXJiR",
  "key29": "5vyC7SVxUc2JmaifyswEJMZKDKvvu3Yy8TKTYipnP7XJzHDaaHU9SVQSuYpwYYeYLbhxcQgCfLh894rnqNT8FuZ5",
  "key30": "499GqiWSMu4poFGXzmwYVp3vkrxHaofiEHkFE57rCh1T82DjMR46VC5Lsy2ToWrGutM6ZThhotA9KgKEzKgiQqd4",
  "key31": "1ELuH9KsnPK7E6Suu5jXctxceAY8a7k1A4bWKTjq33ki5FmWkh4686vGiRokk2HHYu3AAmSLg4yBgutTdChiKFT",
  "key32": "29HwiKbTZcWZE6ocCKEbxzx1jKpUbD7NecuJ9mXzHGakwMD5d4ZfP9YW26b7PBSqVdX9pWpMgGwjBDp3gX1efbBx",
  "key33": "4TL7auETfZnVgtEgt8jTq9PSWHUVEWsXzTtm7U22JLX3MLT6rtadgG9aoSG7iqVNTDSXiQ8zrTH5EiY7ySVmegyD",
  "key34": "2bGWMnzDgNa3Crp3dnXMR71pHePmeeqxRPTudS9bKuhnjUkvDhF9MPRmGJPM2xPCm1QDRr51yxLdoic2452XAdy4",
  "key35": "4EbcAEh99CM2B6PDC3rm6orbbtYM2VsjZjUHqVEJL8cBsN9rfSJd2JNs2uPARP7j2wh1pEfAWPNz2FqEC1tWnn39",
  "key36": "4ZwvsL7uxdkRDdKDZ81MT3nNkuFpkUTggByyVNu6JerPZW3tZj7yCd4dHG8NCcjbgeujPktv6vniYe3GCqNkjJyC",
  "key37": "3zUsEFuJuUMNRUxvPq1XDdwesgVi13iyoa9GDtCe6Vj1hxtNnKEtJY694FaSxWJWK9r9QgnTgPtyd5r4CKZ6DK8W"
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
