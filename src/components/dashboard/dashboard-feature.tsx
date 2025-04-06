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
    "51PSgizstqx4QJU5Fd8P8REJBeC1PZBqREvfGoBtLhNYs8d3uD1AdRs9yNZoPzhWiY7bbjJ8Fa1upMyRFjz6wxeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdHxz2s9LETcUo8sRfXsCbsPdcMh2BE5ekg5vVCpE21qfzG3tQFknKJakr3gBmdoUxXPmoVcuRLZKHK543bWusp",
  "key1": "2pcAM3AcjjEzj3TqCN9zfGDasSWubDFSy3qs6sSrT9GE41gHgWRhkhbHyTt5ZKFpE5VzWnxDMbeNLgL3bcJdFytp",
  "key2": "4UsqtpzHWFUkLRANEvdVSKa5X3E848HJTgfHpbshHmLr9bp9GL7JwjGsk9RN2Sf4jjNpzgpbsDxA9ybxwvmRK2Nq",
  "key3": "MnKV3fRPuAfTwyuP5vipyi6vC6oMLLwbw8Mmj7XKjXUgCmBQBwzrb3tq27Ga7ffXzNSzu7CaTCAaeV2c1YdSWFh",
  "key4": "4JAdDazBWjrF4V2trpyFvMmcnGzXqCuUi8f6BCzUwGzsHvczfZcGA6eg2CUd4pRg9T7KynX68b2W2FLakQSfVM4E",
  "key5": "4FHhmuUzALhtVPxHN8JGFkBLDTpwCMQaGtinqkibCLgvFYfxYFHQmHe8TGhV3daFzTJESdHXKPcVvB7Jf79KxUJ2",
  "key6": "4UT4GrDhQtbtzqwiTWqQtSC9NgyF8dTxY7D8rKQZzB6QbpiR9jEaWHTkk3UEvZr4gr7uWgF6X6qjMVxyrQRcQxCN",
  "key7": "3XjZ5VVMmpvCK6Tqqrsv5mhLCYX7qxQjvE1e26KLsEpvuPKZBzPRyp5LCmzpy1Mn5q1F4UnkyVEd2rSAjXjRSVPu",
  "key8": "A7sJvvDW1wSQysP8cH4BhqFV8mtwJd6nBxL7TwjhH7Z7gHyJEJd3YSKoebzDnQoSoKJ1V9HQ5R7d5zkdkjKHSH9",
  "key9": "5E1wu3xwxT5Fhj8GaPeMjSKTvYwssgzZp8vHCs3GBr5LPPh3YvQWLjduZVxPUTMHaJRoTFo5yDUQaHny1cGE84LE",
  "key10": "627DRtoeTevqgEFq9NwLmiPUQkCtFAL5WhJKrSNgP3onDWDP6CAeK9GTudpNBWLXG61HqcbQxbZZiNwym6aj9U8D",
  "key11": "5foMR6SjPdomCiAFbkA1xG31AaXpve4T56kN6WZcVNQURduU5aF2cmhSFxazpDMVZt6UhWwLGkbjThM9ZjfW7rfD",
  "key12": "59Txi2CGJF66Gp3nHJU56S76gaKNoBveB3K6YkD1LX1wBN9yx2t2LoBGBzcdBMRsnsjJupt4GArpZ7bkF8VwLRrZ",
  "key13": "4idzBBuuZWWGZc92P7cPAEaxRbV6xNRokA9NbJnD2v6kJhWCeZpH4Qy8tZxnNkWdzVHLQt222XPARFwPBD6SpUgR",
  "key14": "4oQ9C5CuoJjfwu8rMZ13QKMbXY8puEAtWFz64vMUM1b8ecbPDNHQPvGhkiPp2w79YbG7yqg3nFp3c6KgrkSD85MM",
  "key15": "4QR2kpJQEJPBpv5twyf3zBajK6bjYgc3eq14AQMkWUCMmzTE29mXe3MYCts2oEYJzn3Gn2S6aCciRvMA8nZFdJ1i",
  "key16": "12A2aqjjoozXwkT9CRmtg5RonDPu4GdhmyMWmkpmctWH3rxtAwnyVWh9bg6SpL3k8VAnUuzoQQnSBTWH1q1fS7ZJ",
  "key17": "5M7yCvAS7riwERPJgw1d3Fm2GD29MCBxhyqJqDsHpcgjTnAtRu54FkhzHeHApXCQcbCx9dQMahswViTvBhtQZYZC",
  "key18": "xLP4e5bTFYvThsGk34ADH8jtsXdHGLxmyLyjfgAzDVVRiFJvM7ptd2nUs43jPBQXhCxmHxa6TzdQL65FqZNGsNN",
  "key19": "581frkU7dbPoC3MU6jomuJTfWfErTyM5zzqw1eS1XSywsSwQdds1zB6sCuzcjrDFzQYS1VN6KuqLHb3RkFZXTpiQ",
  "key20": "5MX7jMEdr4avwB6T3cxWRRYe8r9ccPNroV4Q7sBdG12nY2tDbQTua6e3H1vyB4YGGyw9pj4fDGy92GFdf74iEQ1F",
  "key21": "3j2ybEVbT4ZsYmUdXDaucZt9mhCrPteP1Eg6nAPC1aJZYjZCky3FEsZQnVVFZc1C1gDLV2XDtfhjtzBfepGu6pqh",
  "key22": "Efr4hJsvbBfSeBkqGqrthYWg7yGQxhpYqqVYLH3wXrM3AQ2J5tUmQdeEQRr133JMkonFoCoap5JovwvTF165Hd9",
  "key23": "3erMEpvJREVCbPJ1Kse9CdwD9R2QR6xNYf7UDrxGo49pxvwkMUUEdbgp43qiF5ymMCMtsh8M5wBW78kfWXMUhCjR",
  "key24": "vKCKcjDeAj4nHWZDbj6sm1a7Q5EgcqoUkuK58JPiWxnBmcbEyKLtyyPcYh27tH3hgdTxP2XS71jhrHqu7D1tgpY",
  "key25": "4ziWpScXQjhjqceD13e67V16QGfu4tLKsBbeTsxtTtm7pQ5GXFXnr3kSQfhEFMdNxKG4TiRosCMrxATASsZPUyGa",
  "key26": "MSzqH51KWyVUpTWGfGWFpvUb7P4x2tCqP77SGVfpjmMs5dDk6nH2uR2quDoohRMegJxNPhJbvhAHAU1ej5vzWMH",
  "key27": "3oVQto3YjStFz5cQdjAhmKDn8WaHJS8noHnifXxk8y4zK9xEFNc2uu7Sf3tHaWhgVSMUkYH8M9HoZgTUFC6AjPHN",
  "key28": "oFfQPTEvNm6eC6gjpMbXdfLmDABhLuuKfb3hzNcDDf4qPkh63jpzNP68Qbu6oKujwWFPFjDFHz4SYEB2aDnBfEz",
  "key29": "21kdcz8QMEJb3BijUBDSjSwWQPYHc3Qco6MVovd9o2jwzT16FvgS4Wzp8UfuSnEERbtyY2gH9AFfuh8AL4rPqZK8",
  "key30": "4qgnrJwv54Zi7npnJv42mBDrXtk8Krsapn15iSJaJ8Lv3U53UGcA7biDLnLqu3Vqq89zBJ535m5PteoLXZsB79y9",
  "key31": "5qR6riREHRFA99HUVexvR6Pt6fRgW3mzxhs3zDdjArdsqoHQXAPhyfvzb57fkbJfgyCCzDsDgbUHAsqJC5UkYU58",
  "key32": "3iZSyr1ZNofzfyHoffncnRfV6wr7hxTT4EgPDKfTrsKLbbJdUBcGzPUCMXmED5Ku7YfCKb7ear5dxKUZP367yv9w",
  "key33": "2MmYTW4Vwi5JErvpQ7ntH2DNTVqpw746NVPP8UuMtdRecq21ER2989QsN8PFFnmEweRboYGqcYN1DSh6s3AGsopr",
  "key34": "2oJXjheU3C3KXdvCuf6v4MStQJtPPGLynBJtJgd8zYb5nZU1xRBpqmgT27tqivgV6727rpmbZCkRNn2S9C5AN56D",
  "key35": "4Aw6dMc7VPaRLEdq95vBUdLaFdhfxmUrZdbSR63p9zhEKoHvPkLAeDnz563MU656dVGq6PNn387pC91eyXzbibro",
  "key36": "5NivNwXsLHJCEY2Sbskvhw8ShGQnopBSw5fbEeJL2khH5QT44kJxUoC1ihS5zv9ZLQEqJAy7DNNgB1M1Gv8JtbsN",
  "key37": "5bjrD7dhZiB4bEkmbVF7NWdv3nmMVPpQqAHXdSxtziA2DQiH275D5QLAZM3vBzKtHVCGmV3sWjVuD8J4gGVufwzL",
  "key38": "4X2avguKYY4Q5FMgY8fNUxcSrihMfuR85ht55BsKMC4tX8MNTt6EigNeSTPE2rEdvA6KopBe6DGEA4shHC3Vacgw",
  "key39": "3tEsbrxXDMqFqzVdtrg7DoULFTRNfpQodHfsSMW1LeMK4i2WBj1HNc3waGvbhckbx4GFEB6YXhTcQ2fQtjCPttnU",
  "key40": "5v2Gieaj1NhHThXRxrUixCLinyiaMuDAbRBN3xgiPrsQPvkad9mRyKQX9nzS1hxTPf7xDMyfJLs6ws2ZDvgmtktz",
  "key41": "53geexgpMGNBU8aD84c1QPL9r5aPSUfRxvLULCEQMwZbetKzX9wYVEKFwQQ47F6Gb9y33S9Gk9qomBdkZznz8Nsx",
  "key42": "51gf6yCwJXSZsWkui1xpdxQcbfGcuQPhDGmZwUZg1wJh9WBMaA5MhmAyuSczBo5vVQaXAxBexrov91yLcbsLZ4ky"
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
