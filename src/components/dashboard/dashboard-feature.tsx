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
    "3i32Kye18TTDdesdvJBew5VsWVsYrwtYEHKhvcQ7RTvi3jKCDzDLLKF26nd66NhDRTn1wEHHeckPTBvujzKwLfZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRvgqnGjrntpxAn6MjLajRWQNqMTHaDt6U45FSs5fDd2zWb5w8Uwrc77Vg7ayZ6f84Pu37A5JEfePBTpJSjasEW",
  "key1": "5UvzTh1bBLBE7kP3b4cQFRNPQkHoXBg75eATenb3HKsKCKnmmankR6pTnjCeMaLGCv5WEqVan9ViqbcAuUKtxqNG",
  "key2": "4bWwCqhsrjMyfFDtSbX2MgawEVPkRXEBZ4dPm9dZfhbn8HCriJ6VhdtYQesciCmjK3wbkv9nTLv6rByFY2rzg1ec",
  "key3": "yLBCCUnEx1p6WXweEG3HUGBEUhcyzNvwM53QDZyRrnUh64P7xjDsKbicpmHmVEHag4hX2J5SAsxLLLW4PvQkW2Y",
  "key4": "2ee87trkTDYTVBzQPxEDtQqRiZhazG9WLH3YiT7YAFg5BnmzzCnu91zwNNVJZFfHyymUkxpEtrVdGoWCJqz4wdi",
  "key5": "4bLNgagxZs3A4z9PF3JbXzZSYCELv9YM1d8PbZzDdwf8GgCFWKbvCEBAfhQgUWSiH7gw2NpMccezqCfPtHyCpgy9",
  "key6": "2p5B4UGk6VvJnMPWVxMUz4aJsTXwypZd3QNtF9ikZmHveV52jS1TC6FEDtYqguCPojv2DDn5fWhZMvBhoFeijdnM",
  "key7": "4semAMQdfBKmow3uBXarCGUsaJbkadVTH8dBLSroAbqbPkkEXXufWSHhFMiyArPw3zBefauk45epaJyVvrnJeoqo",
  "key8": "2wduNwekGif4BYcxNHu3LPZtcvs4Dx9SVGpHcdj4Si6rc95GHoov7eagx6737YZLkWju3pnYb3cYoFURbM66gAbS",
  "key9": "3KjNhUhuojDikTgRdFi4sM57rFr6sRyDSwmDzAKH5RWs6FKuYbDdDKRp2TWBJU57iBSAkhdjTtuVYBJKmCPaJgqj",
  "key10": "5o2ujqRDeL5uzjCS8edfQpNknmSszseBhMb9LtHfF5ujRe2csesPKfQH9BY3HMZKYD3CViPGV2Dv4YfHSzN5Baqk",
  "key11": "43uW1BfgSuZfA9eEJtVQwsPJnpTudcvNR2UCjpRSjnR7dNeXTfukMRNuD8JiWKRwTc8WGns2nUJdgan8xmpmBywt",
  "key12": "2iFp3p4RWLFq9CRYa659dTJ5TWcyLBHCx17xwzCQTUdBN5Fwx3UYarZs7eRdinDJsZu6Y9HP8Bo7EewHwWkwHHjv",
  "key13": "4z6vgpRydxK6e8BhMW1CVCf6Fcw49PJ3JHtRysFofy8buWqmJ1zsWzM4DDWrpThCmRtdgmy42PqXN1JaPDJ8aEWU",
  "key14": "5C1kK9i5vLeXyugY6Dr6HCUHPwnpC5NbWp4hWQZNsUpTUTHaonNZTo1XmhiYJ1ibjeKZSbpjHa1QCny57SdmuqUm",
  "key15": "4jwNjDMrXh3wq7PADKE4LHvkPDjYkABjfxR2jwLTjeA5qDyPa7kx4dmD79PsCMLXZTJ2Vj5G3m5E6qzWsSdw5V74",
  "key16": "4z66zsWVJxwQdLTTLppsm6ad61NcLCyioMNs3ETq89jroVZuAUvNSVzxKg82ZBpAMduHCmCN22Aq3doKfVpWvCcE",
  "key17": "2NWbWmF4FPZJ8UhKuhWebgEAE3xQFM2TpKXGhkyPM7e5V6mojoHrj8dBBoxCad2AqLu64bxKtkkrA9TqV8MVpDgR",
  "key18": "2SF1sTREf8yayWAHPkRALM9ixhoqm4Mwrt3aAWwfyn7Gi3wt5jfD1ZMr8aeVX9ECL1nX9SG6ByyYQ28rGep87HSC",
  "key19": "3A4F9aZwKQ5f2sjzGW644nMesYmuYXYJBT6TM3Xoae5EdfFX8DssR9ji7AeMJ5t5vG47GG2bMX6qfJ9dcbVgHJEY",
  "key20": "4oeoCzL1zSkBampn4P9MqdC1spTnTar9LxfRaYdqijKMVJC7kEggfsPt9Q51V8ZmqTDQVb639qcUD85sHscTq3oN",
  "key21": "5gMwRhVTjaypv6Ty7ybQuHEUu9UiALgEkzzJtnUcbrySD5Ee3LhQbjXS4vsF6wsz73yCovNZXj8fNJkXoawewRSX",
  "key22": "2fzP7yzTsd99ecxdMdcNR7EqduU9kcRcwN4mgJnBmzUC1vt9qyGA8GkehDp83JrPwqbxLezb8d2D5smSTDaPWyGd",
  "key23": "omduwiFUTXzh4m3f9XPSnK9PfuHBnw8yiNgaUjEaKCU339z7mgedCJUPt1BzFVcpjA7ftLHz2rP8pjF8CeGBZyC",
  "key24": "4nc3WLeATqUxii7ygN8GcWnmp483fbh7JcGxnGyvrbeXZjRjvLbJL16LQuuZk3RMfj4Em1kt6Sr6eLCVq6usmu6u",
  "key25": "28q6WBgKEGrxtr5F4VswJN5a4EdXZ58jGbS6cpJddRYeEzFA5hYmbKGGSGRXFtM4jpAa29StkY3amnwLvmYTQKNs",
  "key26": "2438Ykrf4DRaoqP7sRgN54MyTW6bznfvbNxSkDKz3RGA1Ur7zXgGaoekuoiTnD18yQpnWzckdvrmoNyFyHn1eovD",
  "key27": "65xA9Dj7XJNTgMXL7fntQqUpWtvtnMFHmkbdHMekPrnStZ4UyBFiKeH9MBCtbAN6jtoXj4eiGpgysYj9hBoQJLpt",
  "key28": "3reBDTu4UJ6qe92Rdh1kVAAgeTY6VM3S274C6Q3WykrYYAAjJePvm3cHRcN8ua2N9dHAyN99Lz2K9WttVseuRqV3",
  "key29": "4oEgADkkRq1GqFh5s3jFM93Ahu8xLcuVHsJexLr9uhE5FVhSwiMrQ79sh1KAyR4oeWbRMf9SYHiDHyr5okEwpWQn",
  "key30": "5t8Z4CUMUQKibyEoVc2iSaefaza2PdYBzAjMXz9kpu7U3iFSpd1UCHAXK28bMVEMTQEYEZF4z3GQiBs7jyciNdLN",
  "key31": "2FE4cJxgCzwGi4jNn27sUTA6krfXKKQBSpSXMeXDTQdTpYtyeY4tidz73Q1oVjWpxmAVTU7N8hG2X9w2H5NRxP3w",
  "key32": "57gXMnTbBQrFsmERMtswrUfo4k7qdTxUpyJeWDnKtjL39cUReWs9FqJZx8xLrQ53aZN8RJy9bDA1AJUwkbCD6Eep",
  "key33": "3kH3TmaUV6zj3McsiWQoLpwCKVqTWRWYPiZvrRh3pRvZsASZQgRJ7dxxqzVbJyNGXiUT8M5w7CtXEQ9KWSq4QsU1",
  "key34": "75xMteBWGqkDpUYG7YL6La1iniApZ6ZhapihFLypyJcT4eqqDEuDY6FitvzJCgYCiSsps8BPfhv3WbNTAquKkUR",
  "key35": "4sx17A18HKrvaio3v6rhK3V9fmEsoXQbbgY352JrB2qA3ahGeSagEgY24Pgh3jJRon1njJLAMb6AmGU1enxnQFkV",
  "key36": "4FgDbj8Fte2i16LY2BM3FtgE2CoB39CgkMinaHZFsMM7Lb4bafYWLpwUfcMnVKjyWTiTahHRP4p3KQ9D3NYqvf5X",
  "key37": "22irw6dTPpgrSR2RWtnXf96y6s9fdmBJRJ4xJVTiZjxBzpsA3861XHJWBaa5PUczHacGjukCrXTuC3LuJiKz8U5V",
  "key38": "2dqf57gaJ8odvJkD5JKCvvEgdU5NxJ5dgmQDYsji2my3gWHYFXqZZ3Pqy9vk6wepRH33rPkmDGnEHbUDSkF1QkT3",
  "key39": "5qJwpKqVdG9AC3TZfhLwdy8G2CDW8Xg23qoweYm5XS1NHsMmvGqzave7FSgbfcaFQwWv8tcpu2Mv3S49wnbpbj4U",
  "key40": "fEJhewEJ48YmgZaRFuQ1dvrKNP8yr7GqUG7Fq1zVamJ6PupYqP6Re2J7eiEj533cBPACjjcyQ96qSSWbvXdS6jj",
  "key41": "2VUSDMW9jDs8MHZzHSTiYM1qPsb2gkT63wGqAsnsLX2Ht5oHErwzSkqANjrMWoS9itB9HVLu1Kgm9hsXFE5np9SJ",
  "key42": "3UthUfPwV5BFZmijzvj9B86wyD2cxveYCYyEAf12Msmo6GEfVmevvoQ2fJ1Enu4DJJ7iMp3vqbqBNFkCnJvNKYv6"
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
