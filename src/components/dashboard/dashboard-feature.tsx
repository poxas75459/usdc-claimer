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
    "2k9CcBc3kgJ35vwTy1uNHjmZxZkZKWQykYpMjJFpwg5rpeLyhiyKpUypsBRjwoufECqkYjcsG8vKnnHwwrq1gym9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Su9sLdZaPig9GaJQFCnNrHkkWMfrfA5qJe8cWzvEw49z8sqLE5kdynqmBxkpq9pggW5XF4f2YG8AvYeHepgGV81",
  "key1": "cMAyeUHm1sXhP9tsu4woGGkn1V4axp4UiayLYBuNfb2JbUFgCRrE1gCCk2yrdKHAgEwyHQVMoYn37QeLJf2s7is",
  "key2": "5Knm7hHW82mojpwzCWc32YNK1ZxwjcTfAp1BxACbjAX6tPnC2td4sYhXqBY63gXgbfo6PE2RuHo8VRV4NWEGkinD",
  "key3": "2JZ4g6RqXR7Nc4nXiqketCMXQLZPLNcMh47xrVBQT3E269cUYgqNxM27ALkiaxvSxawijVmVJvfBn468FJwpr7Eg",
  "key4": "51DWzoi9SXtd1seyQuXGQjynb6JKCya3jkaAy5t164uE8Fc5K9TGNWLj6WVoeWFjPNGLX8rTMa5vF8E2RTpen2BW",
  "key5": "5389stobUQTwWCrc3bHow5za4oXkYXkbynGM3kJFkJSkhyTidpjZrDbHd8bSCSqVqqxzfNtcaKeLot672LKngyUv",
  "key6": "61xcqUkJeb1XBA5QZzkcZPE4Zncyqm2SFczxHJfg2czcpRao2g5YnPkQeVyHQCUZBJJFVsdDyT6Q2FUR3dzHD6wU",
  "key7": "44xf43WqydzNw4U8oFCHwzU1qyMibm6269gesgm1qKebGe9Fb5TnmBLU7DjFQbuRnyszNfZtWe8y7qpQpY6mt3cf",
  "key8": "3vhVTQjhxZgUvixBTALf4m1nR3YymEwWrDDB6zKZ827jG7C8vqXRt7Ea5yiM5WhbVFZShgnfqDR1r72MSgh82bEh",
  "key9": "2UW4QUFEKVqsAsJiLXMfQArPLx6s1BK4QiWyQhGeUVFKnTMNUHMipmzaC3smni2sHG5NPuV7uaNp9aGjeQ56PfvG",
  "key10": "7nQcgXe5dR2kXwoSvboWmMz9YQZut1Grmu73Y422qb6mp1DF2Yb6yYHk7w2VZ6n9TxK1LxmY1sF7RUJr8LzUhu8",
  "key11": "66xuumAa2o1CCS6F8eoYS9LBcFssJrQv5HQ2yniVTevUJ2QP61MJsNrDaYxPytaX5ayo7rHjJUeyR4GadwkVExz5",
  "key12": "2PqF6sH2wWdqeyoYFLf7LvsduVpdpR6MRzTxcETr6oLXYXybbdmKhS46xbKm32ujXQdGjuug9zyifCPMAEQjZUSj",
  "key13": "3BJcbHS3t57X3c3HafaRTuTM9NN9FkM4Pwwfu6KwXaEWw8n9EQbJn1X82z7fD1cCbgKqXNeH7eMe4Bh2cxu5e9eo",
  "key14": "32aRPBSovf6KctGAVVDm3KCBNBuetDvQuDKRwptDvuGMe2pWpu5wXSn8ncdDCQi191dpK75SpbDf2QNpH7BgapKz",
  "key15": "3ZURFPiTMZ6KHMTdrv1yLAYJoL1e8DrSveeGxzc41UEpj83UeR7pbsRqyuZhphpB5kixCMbvjU6U8B8NtWBLkSud",
  "key16": "242k2y6XsshSjvC5rRoanpPkj1mboDC7T35TcicwxfxN3uJDjTjVyohTy5t9dqenzpydvK738m2q6CyqzjSHrktQ",
  "key17": "3mwHS89hL2QH6qmnefMrgGpX3UwAKjPHCUczUUUcP4KbL7gsZo1jq9gtzyHMvQ7cSVqUwF5hysmNFnL4CzhJWgAK",
  "key18": "2PXYnBuAdEMBfjJfcqBCwi9bfLj8LvUEMjSXE6L5zRRdfpqgAqFpe7MtwxSK3Jqajf7eY8Z65rkCotCn4UiyWjcr",
  "key19": "5ncMbNxVkFRybMyuSTVHmJQniudnh4uYY6cKVmvjokYtTwgvyC1Qi4wSWeZiD9xsE92JvDXbtPifcCW8jRBcqsRH",
  "key20": "3RTQqjNzLbTTC2rc8csavC4eRj9CiCiv3WzqAcexCdPzdtyvLusDLhGMYnA4ykFeWHsTGP2fvHe6vBvt1dd1viPn",
  "key21": "24tqx7Hea4NK9QnYve5ymLMJ9yfK91ZGpAhFSRNNbJ3fqUpA4riFeYCgKazS37MmLHhtntApeP8PgCFLxsRM7q7E",
  "key22": "3Ptr4a5KHmCYo1mqTXQ6zymUgzaQF72JKbsVHGnrNTu6ZRaM2isSrEhvJAEJP2eADsQAuX3m9YzXDLSYCHmzhEGS",
  "key23": "P2BMT3SR8cL9iMbbLwL9BB1zgxoCypQYePgUErzM8BT6DcxCxMGxZtjRaWA15i33VbksrTVGMSPqNsRqUZFVLxn",
  "key24": "2kHyGNk2SnaEQesFpiB8VCzP2CyHAKJMT8ABp2VG9acmTqE3kUMkj8GH5SYH1vgbFxuoCJ29BbrYNZu1kRnAeAVE",
  "key25": "sfzdPgCc7icTZTK6k5f8uVMVswKHSK1sGDvPHx4b3GhYqzEajWbzAjTL6XWQP9UUxgWU1RSikMnZk9UAUoDY2DL",
  "key26": "4ijUYjVEjkCsNAsVr61ezFeyyh8cfbGfLcRoYghW9iDDV9qHjoZAUn7QNRVCcJ5oZAhD92omZGk5oEhQSSFXM3WY",
  "key27": "3EfnsgwUrr4KFfkf1vCvgJPRrxowji35KjoVpsZr9dW8yiXjG12XyBEKVBQrLFFYaEHJsBgodr6dUsTo1GW17UTs",
  "key28": "59b8mNR2WcXa2twCCxXMMJrDbngRvyEfyiJoFuqxLoGVgScbV2PtjnaoSS2QkenWput9Y1UAxDXNamyw5PWm63LN",
  "key29": "2kj495Dd5Av2jpmitKerBo1xsv7jQF96yoHM8dgUhEcU1sqbCFMWJ5nD7jxg2UcVTjyXmeB5fvciX1qpJ4YZxqt",
  "key30": "3q4W4zsDdr129fLJ2T6kvTK1Ag3VtdQLHdKajwVwNp8steEsqvKtKhK2rsxjVBeseD3VMmDXy6VMs812w2RBGTiy",
  "key31": "3fjxsFJP7oUrkxNzaakbZiEMd1ZBUT4J9gXXPfLAhyhwRJkqFBTB3S2r5ZQGNawwJb9ouNeN3kYud4WTZFC1MpR1",
  "key32": "4mujSE6vXVriQnGedy4XPgWJEE2T25a3GWmVDyVRgsa95LGnhYsRWvjQBkDm2wWPGz33ZDeBYWwj6k9ibXoLs72u",
  "key33": "2T5cK6qK9RY2cQd6Vtniv8fH5S6pvT5g9exa2MmdnAfAEHiSUNk1jZFobkxhqKV8sz8Htdcmm4Cyxs9PMSF7K5ow",
  "key34": "5TPqyHvhx4mTQSu167xkp3mQf4icrUkoxUSnYxAMMbaEhnrZDiPvX1w51yBfgWueo58AG6WjmNYhhkVvnoyoHUfg",
  "key35": "4pHiYi7Ub8QXZnzKpFAikSVvEK4UCMa9WFfJ9aJ4RvB9Vo7cRiY84JRFsjueQJAeh9QnNAGN1kPTEWrz1viKsjHJ",
  "key36": "s1WZenWsYAyB5hWDdgCCu5jNuGgd79L59DVDHB4FcdVHTKT6JyETn1CekzJAe1UAU38ABYkn64mGqRwcBBsiJFs",
  "key37": "3EZ37ohVPWQhBTKSwwZuSHu6eAxt68bp9Y8xU8cG7fir5PSVHD8TrTHBjX6PEFh8LnJhRkB7Z15iDjx8jao1c9hx",
  "key38": "66ft3oUq9kp6KguZEgXK3VpLgo9NoYNwYK6vDNuV1EMzur9wykhhp1qwr4rjs16jiDi2VWzX2yXDFsBZek1n8jw1",
  "key39": "GRYbVTcc1sWrpcDwDzQvgLurkWer1CZiF4Ffkt4QBNZbYq8msHx1ix5NVVVdXx6mjFJmuWKMbbD5FF32LKWUJ2d",
  "key40": "3pAQGSUkCt6Y5x1hXew1ip2QsvD7GQsf7rDw941Xbo7Fis2qbaL78wVdog91MgM1qb5kyovWtwBzXJLwtT9uLVKj",
  "key41": "3iBhAru3syCiCAdKPmAqwXF89utBXCMpj6RLhe7U9CmbMT6TPUNLo63DoyFpTYHbsQACzj1iNvhiuk5EPyJMUswF",
  "key42": "33MdB7h9xSqdhcNSPdpnj6WuXPosgjuiAkuBk3UjQzMAuDBXmb4r2GU4fRWamH7pXJNK33qf3bB85V9FpGpM6qep",
  "key43": "2Upgq8U2SRKzC2f8aoKJsBEf4hDTxqWzWcGAShp7Dw5G9evPn4vxXFBBiXLfZKe4NZuY6Y5hHBbjL7n9Go5jRA52",
  "key44": "2kgMxCvj4AbSsKEF6r1LnhpE1voK6CpjnSGETuYw9p8scXBnbvPyBkoAeDdnmK86xFrNgcmWh6dau4MgUkg7VLH",
  "key45": "Q2uqEieuRSAYYBWGmCSE7234Fff5JYCXKkaRiwTb8TvcD4BBMobumajurQPL7nuNo7uQ4zpVVZKNGfqnpnEKdkQ",
  "key46": "5mc2FjcDHsBpqtuMZP7bmpwCpFA5sQLAwFYm2ZEyjBNaV7rnvTeXvSy1v3mvMugftRnm673DwzvN7WpcwsRACAXC",
  "key47": "oatWjxx8Jt2S2YHPooo5kiVNRwFm1p9M6P29VN1oB6b6jYL2vx9opfo8QaTEE4uFCFkydUWsNUpcsdHwjmYLxHv",
  "key48": "32ekLgBzVpf6yt2TCADwpGc1gR4C8zouzchQjXGQFds15JvAHWkRdx6T592k1wQvneFHk4BnKo2LKjBeyYzzXQLy",
  "key49": "5oxamieEweJCScKF1ShWHSUiCr4x2njvSstQgS41T47Xfzej1gNE45iRUm5PFUhLegZxJi2YKNzuMZkCA8eFc4Qc"
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
