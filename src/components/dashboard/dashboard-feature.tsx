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
    "33z2WTDnQLZkxpp9bZNyntum3bCjZMx25vgX4n6QcVZR319WXFHfC5BVfZrLdtcXv6YMjYsNxq1c8m4mNKHCjs9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nca2RMnb2cHKFFgNwBKqRHaWCKrs1eKhVRqZWEF6CUJysQ4YDsuE7YJtedtHBRmV4MBMtufUTVAbktr1irt7bt3",
  "key1": "3g1Hy6t9BFEFFPniwbYF3HqZKBdpXP3m3tCTtmDiZuP8NBFrpmL53YfFZavCXJU6dUEBzfKWEs72Gw1sEyfBWVBm",
  "key2": "3MZRmpJyyPQQhc2EvV673UGW7LhkE61aZEXpaoZZCPtfZRLeZzSjHY7sZz3wwaBvxYaoypF79UthMtgoLK9f3x1A",
  "key3": "3yWgBCsRWDBkb2mcCA9PrJ5Re2xMYyYRE63gMxFUE5HFDkxwxRnpNYvzGdZSzvrxr8WygQNJAoVJUkpXS3ooQMZb",
  "key4": "49W1tqHa9RXNSWAbr9Pgf9fT11XwvC3B2xVsj8AvkB1TK6mK2XWnugabJDDwuVSA9PK14bNuJxWYKPEkJAdiQmQR",
  "key5": "2rTUzCCTXagDKJkyqtjf6f6NBZCMJrDSK3Jx1fcdXyZtK1aV8cxKJGtStQ53pqzoNySwnByjoQLEntVpeRkF5hDG",
  "key6": "5XJthLXbGMnZgzaLr1tRKAyFHKPoj1kXpuVeS55aXg9TQWZicpfQnLQShSz7Nt2SthsHoMjXKW8MasBySr21rWHP",
  "key7": "3mh7uy1P23yT7w1DMcdXTFX3VRRoivnSiZZo1VV9eHbnU2rzKf2VSREpseRATfqCKkZ7kGJDHoHxSbuYfS7VH4Hp",
  "key8": "tacUebm8Uzxz3mz8DtzSeEijpUpRFkoyD9tnnvn1QWLpWERmTvtiZhMESVTdTnpLaG4qHjgq3wS2Sh9qVdnjSM5",
  "key9": "4yY1AS8MpnvkoMdgzFRXpm57Q2iFSir2XkRkq1fVqh9KAJakjs5hxzPSPEX2F1QgFLSNxaitt16iYeCShVVxPXDM",
  "key10": "5qo2A18TquzMjgaEzLrhBHTVCyNsNHqkJ7WjD4bBxDzZsoe9rA47EE4PURK5TvuQzWGdbLskY3UGVC6ZdhPugteG",
  "key11": "6qqDdikd8QQkw5uD5ckWjQBrgWt48LiZPayCTWNe4DhBW3SHdxTTPSCMuey613Kj4U28W5hStYbCiP1YV26YQ8C",
  "key12": "5sprFgEKMwMDN6h8VwgfN2PKX19HQskfV5CK9MLPVmHmnQdpXVyLXvdjV31begEm3HMANvYwy1noGeE5Pk4zNEQV",
  "key13": "4BQe61cgpZXajTdBug3uhMCUunvDUdEAX6nNcnPHeKicVyGPynTJowzhqKqpGvjUnMoyDtkxg1ojBRD2K5jB4AX7",
  "key14": "5pd8YP9P2cKiDRB7Z5vZQnEcMkmUMpAq5DAghwTL8D1jxrKWr9cbh7yQ4WchEpCxCZX22L2AgBLeZgeBZ7ayDkGp",
  "key15": "4NZUs9DxWKrs7XHxohzSVzyVbDoNK6RJGLnLpX8BUostqFCUN6ZG3jPAFJbWD9RBoy9vQuxnn6z8TSsbWyCG7Ffi",
  "key16": "27ujAN7Q1iqbLXEGM8TmC9dJ5fJAVfChifBoEKrCofmMiC6yYAdY6ytPwKJXEfoTBqzSZgwnNJn8rTLzPG1sDRyN",
  "key17": "cBDagd9f4uiHpUH4fgbHWMWSL1EwRY1xUYVe17k98ExQgR6ewKijtpPf3wABax7j5dBvinxmregHxasfsmBu6Dx",
  "key18": "4C8aW5HthUmPuWijCotBYPpdKSMxGsaNEbXCVWg7k91sBwMQV7EwYhvzbWMdUXDjYRRzB6QhuQb5EdjQiJiQeU9E",
  "key19": "2YdpRBHhSnQBE4yKpmxoCG1zx8q3fodKmYD9YSYJxiHvycMjVuz62x5YKT7u9D7neeMvsG4WN88hLAQw1vgLJVkX",
  "key20": "qxAFSLhxaxZyoV2uQVWsWNwHMtpicsNfzuA7yBGg6E5xAyYheTpENhSaVz6VFbHVtbER3aMycYZofiBNPcVPXyH",
  "key21": "2BSZCVjLiYZ3qA78HyMwTuvAE5PBDm6rqkE9sKJvyiUZgYELfYFjyMsD5ZKACbFwr1fhxrroVrJu7EzxQgX5Bxwi",
  "key22": "24LLNy1WAndasEAfX2Nu7cT551o3CNGvZhzfaoixWcBPbPeJhN8Uf5rNwrWTtQcJzYLvg4r6r4pmb66d3u7niKLb",
  "key23": "22BgLGVo7Gaqg8SbJBcxjJGcy5YQp6Tis4VMtrR3GR6yC7zsmx2yf147vzhWE33F3SXmyuCY2yHaq6RpWfUBCQr1",
  "key24": "4QfgqqDT1py9tRu8pQXEkmppNJ8bXHAaobkgqQ9sjQxs4GbGWLCygEb8bqHQ7qUdHUNei375ESGKd9BHgSphYhhe",
  "key25": "4SWdoYZCqapVrHHYxciVCRisrtcJodsrZ1o7NfAyKwQVqpL6wH78BHUP1X7n8H9eAFrmJnWCwkpvJSoeKu3KFrjZ",
  "key26": "4yhUSnnueemQHyrbNnDpeViVhdBxnxcvsGJGUjpNYR4McWoeu9BrRhyCDduVE34GwWY5Hey3Jztg2CjV1wijPSEc",
  "key27": "4dexkGWmPKtsmki83R6M7Q7ZCAJQSjRDNnNyLzDSHquJgbygZb66SkK8GHoujT4MFNgWFymFAaTczicrGG94Mp9t",
  "key28": "4CghQoevbjWGF5HtnMabHGh1XjCWCAFvuBqLJUidUfqgsirDsAhFDgmue6ti9g1Mx5zttXVXyiQt7zPcQrWTApxt",
  "key29": "dALsNazqGV9TB7caJF1CJSrEvRDQmsSZ9m8zaPc4UGX1hXm2b9cK8gn7YHktBZ28xxT3jqXBkX9wpZvo4TLE3Vo",
  "key30": "3Aq4wFNP3viKR7nDoZwG4L4CvpWvoUp6xwnZnBixvLJG9vbaYVYpaJNNwvuQHAEDTda34YNpCpjH6fmJ1EP9vDuj",
  "key31": "2ctaB5GF8zNcob53jm6J31GkJ2SgUVTrS1uffAZ3v4cRdfJEYQTGFkwGGAe5QbSrjiXqT9EpEv65jnZ1bdc58JAw",
  "key32": "6ryhcPWVLWJecKGuzNbvpizzohTiHP7oX8S2RjchKcr1aDyyxqjLXLfyKx2ct2wB4D57deKjMcdUn6WiK96Msqy",
  "key33": "8GteFN58589JoV6LUhRa6FJJ8Yp4cpzSXxmouJuZjpN6nMb7apRcXW1Mc5V5CzTLbFHDdsryxwuJRnSwZB9y341",
  "key34": "Hj1u9SpyPrzWhoexGG8vmQjavKdszAeLxVL9j6SyqhFtsAoSktPhvptwBpPF8TMbzqyCjVP2QyoHesQpkqQ5gEc",
  "key35": "6xAXmH26AQMotf3nojM3Ac9Q7dCKQ7Hw5iZ9SPc3sa6FwEQ2321AKCLMDAQ1xuqKFR5Q1Amdks4CkLSkpBPouSb",
  "key36": "5V6vRjoZgTSyMMk3RKtr7xRpGa3DeApQVBX1i6kUSF4J7MrAy5Hn76zBtXo2L3XeK2gqJCS6RaGDh8Siemc2zT4T",
  "key37": "G2sUDq8Sqghkz7br5aZ1twmujkL9ZSJqTbS9w3oB67iPoeTqN9at1sZhDy2T7Mi7JwzvvWwMob67Vi58M5MLzvi",
  "key38": "3sUYB6rJ1RZMs7tAFdFpdLB69bagFf9fBhMrD7E2dxRyCkW8uEzTxgRNex5DERS6JtC9Y1FqtNJSRxxbmqhkevyS",
  "key39": "2j8rppGuwb11tjEyvidaUzCyCRtrYqA94BbbHxcaBqbECofYXuTR58JZEnySryHsScEGK6YGNzjjeWiV3pSBneLV",
  "key40": "5LSJYuHVGfSv9WAkpCRA7QFMoS2RFFXYEw8ZyTY61NZQa3PKHBEtJjMjcxfX4eRsrjsgGJbme1FtpSvs2XixpbMN",
  "key41": "jTXs588f95NUAj3B5UtHPaRfPbrbB7dZWDhFFGexE8DUktpoZWxQ5gvSkM67M1odQeaUsd3bk6kCYdDw7sSVoNd",
  "key42": "2GhnQUkM4vJYuRq1WGrigLKn6Hr1kMWMEA9i5hQkXNKz6oyE9nR793YAWeqkMmndgn6Vb4GVS1L3rw3bscKKNHPE",
  "key43": "3PDZfFAUHyDbu7jW6ayW5qLsGHLuFBdWG95VEytfUVwMWBgmPZcuUp3JK6KHFYVbnJY271AVhSLDvBXmpRRzsxAH",
  "key44": "5rF3SEnFgBybitXgoVQ6b1Xx9sBfiAiYfLCNh3QQ8W6afY4eCHLwVNjBMtB3RaZmAhgJaPJBjXoUHx8Fba4FZGr4"
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
