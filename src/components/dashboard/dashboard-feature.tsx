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
    "54vZ89T4EMynhcgKhxKyshHdajZ679BgcjuWh4N7vtCw638mF1sjqF3co7vYceev2XThxJHrQ1pNBqss9hYHJBcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AgEdchQk4UqYVPmYQ4KrJmByzLYnaetdm58sJL7mTLJyNw8sAvpwUVAQr7vrT6HtqwQTSkX3386doG6YMiNcps",
  "key1": "48aMa625LQpTRXfNA2igjNLbcpLiFK9kdodUx1ew4f2zM5pXixc2b5xNX249RfeCGP4FbFm5HPumKUAQKDkSovYq",
  "key2": "3S6LNdvwjYKNekQ89cYN89cmENkxG73qcpJ26cWa9YFvMksDL9qXSR7DgcKb8nfUR3ov8nSuU4XwZR22jQn82kAK",
  "key3": "3wG26H4LqmDXgEggfQLvFadp9qCWMZcED4zvoG51DXAkAKkjqnYgijoGMqECs4fKSCQW5tXze2sW9dgBB9aFWKfT",
  "key4": "4SFRw2pjtPJTanCUxqPwgppks8BoiUDVzrS3LksuQY7uL5mXHzbstrAYHzRSYeU5Pp2nqqSiBoHVwJQeCESuKAHK",
  "key5": "3yRA5wt8dQAcwbAfwA1xzX1NtwwdM1LadF8hL41EYUkKGcicz7gZary1yN3K8LAzMjr67tmkj1M3hE7qWDvjXKmn",
  "key6": "4Bf9jhmp8bboGheQLyXRSwd24BmwsFfTDWvBzWfkHPNiMpj7ZuCBhkMgzBYyFbv8xU5jFHgdxssR8L3QvzTvnNJk",
  "key7": "2wUZDiF5c1vbHdxmJuRkwp1HJNN3ZuFaZpGpJDGbyiXum7WgbKSxeqL8RGDyDMCco5ZjdC3frWXqvB582LGHhemm",
  "key8": "65iFDjDfZjuSSRMapEF7d3p1jaazNyLmoi6yzMnySt6NaAkqpkkBGASsFjWBJ6xFZNPnT9er2JzKQZFEPnB7ASqG",
  "key9": "4Hn1Cn12zaFBpCvEJRJcF9YPXeRymqRYYgVqHkDq7mqFKoN6ztuXhMNgsnMy49FWaZdjmjZd4BAuYTDGME5b9oeQ",
  "key10": "2NseGrpxo2CqjVJPuq8Sp27CSQu9gq8VgiG2JNVTpZEReN7SY4KAzKZ8tG6eyySxaQ4cFaCc5qmorbGuqAMRsZDf",
  "key11": "3ujBc439LEYk5YKrBttZ2rAytr46tYd4NnWCPXuL2wDqV39Y8NXZAP5NvzmFt8S3zLSeaARsGukdrNuH9xuTzE6c",
  "key12": "5ewpwLBqkQpfWFYP8uA6Af2fZfSkiAay2G2SCyTix5q2yATyN7nsZJ8LgNhffy8si5wp7k9sP2BKsmyx1sun1e2R",
  "key13": "3CWhXqBv6zYM8QQeoTG9TWNdY4u9W38RvnW5eNBkM5vKecRzTqXVccPrHE4eekByACtRUHCpKXCsA5NGYhpTRyVp",
  "key14": "2kECRLxoPyTtLtSQgb7x6U7reACUx8bQnFj2qbzL7irxyeiqEZbkbDAdYLo5st7xvL6BiZ9vWcxMipUKLfiLkRne",
  "key15": "v52X6UXqVHPToZneyrP86ATPfmMrNLduFchXpZ5N4yhFV7x7ZW9qkEBQykSJNHh5wmPD4uiZrjKJbcrDvZ6Luig",
  "key16": "3yTq77VAbUitjYJQC1VSP7A9EhozdCrAdU3dvVgkk7c9UTY4gZ13x3eENLnB4R7yvM7nwfVNYKicxC1rPnFxB6iy",
  "key17": "5j9sTosxw4q4H9AE718xHTcg3zVmNFWij2ZWJ4uVNJPSEXpUuk5kPWtK8pcMzp6c6CS69kcfp9Fdf5RhgQdMhXMh",
  "key18": "5YJenRko4feyrUTB1AWcY7GjLYdeoVuyFjAzoGCMKbqRFVW9VPGrPTbsXKrjfG7NDg2QH6eqnjdSLwqcK4oipgwA",
  "key19": "2gUJmQqFFEoHvXJcc179qEvEW7s1Lmo5gfJu5eiGVDSr5VJvZaRzidMU5ogkKSUuoNRkAhGFanSCrKK3JuoTDE48",
  "key20": "W1KiNQmPiFyrW1FPd5FWYvoBP3h1VUtN2XSTNh2x2Y1kwNs2DHUkMbQsPwKQ6VvdpZd4STM497xHSTWWeVuHi6m",
  "key21": "5VmPqK3wyU8TyRzHwnEMACp7ipGFHgwYcfrq23GHcWHRWFJPi8fxRdfnKD74J9D6PDWkycMe6qyab8D3wvwix46H",
  "key22": "jTUmQmmWLphR6T6XPHap9fzv7zFR8NA9rALtHuDTNucmjCi1fqbxEqvxicB7HtWsYBtdiScZanoYKL2dwVaWSui",
  "key23": "43v6rvwzzC1jWeZjBQjZt5e33B9C612ZcQkdG9M6sgrecfBZj95wpFKz8m7FLqyr9kSwqPZWeqXC79DPnU67vkMh",
  "key24": "2NA9PKRB5aKtHJM7uRhKAx6xm8JmtzWRdjbXXgKxrWqQPpp5z8BY7w8Wq81ian8GbaowkhZSH4E7cg54ZMX8CcJr",
  "key25": "5XDmNqPK7C4qRZfeFkQBWdiQJuLeyNaCdSxN2HD6EDKcYUQhNvZnYwHu95Dn1ayeVgea1LDNZ5jNebtqhWFbKF3t",
  "key26": "5zGSAv23jznLnAoTW3V3x17X71LcmtX8oACHNszgosSxHWcmCbCNeoLhoCiQZRCGDMMUNtvoGSpJrmwDNqzh6nky",
  "key27": "5R9Ni5sef8Gb3C3ZadF5pFnfMBL8Lke6wT27VYs66aJGzFSrPSyEtcbwPnefCVUHF2e1qC41nYP8sxh6soAv4rKz",
  "key28": "5jCQo6qyamu2LenaCxVpSxpGhkF2P2y1dswRLnVyKpZF2UbkJbuMag2awG1dhRDCVvHuEPo5vFjvFb2JPL3uRhAi"
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
