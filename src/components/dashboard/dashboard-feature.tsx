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
    "57G9efKdkvJ6av38gNNMUswNqcF8tuZJf9x8CAimHH495Rf36J4fRu6vqVZi9VWzheAD9LFexvHm75dDHNyh1PoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyxXbj5cMzJ5LA1hp7jonzLcZvNH8uTkQ7JmUCTcmaWpP59BgjbMFfdfAJCCpPaVXzBWJSzAByKMYxjhWpzotnw",
  "key1": "2CpSPLadGnDfTDdZAVoZhAj8yQpqqxoWaoF9Swgzh3HPjREi4BfdekP4Uo5Xsd2MrfxhYcFrCy2uSVzSdNzAifcn",
  "key2": "53wxZUjVDYH4qCotrja4Qst1pEJsJtWFXk4sun8ZmLa85RZAfwrd9dZkTKvZyzh4mRCzeCbiUdiPskkVgc5pKeX6",
  "key3": "24UdZqnHjgAHuAuyr5KvRf9bnBZP2X2Tb4ukxZr4guQRtWSztnKeZzcK6u2cjC6smGxdEYUeUFj1wE3yFBemBuUj",
  "key4": "5hcBG8YpKusNZY5VFiYmq88ezbEgFnbyjzRcs8S7cjAhnJ5yaA81FJCKcXUSY91bCDfgRv5D7RpouhCtfQTfdZY6",
  "key5": "5kWN76QuHFGWcFmCYcgJ2m36zrXgnY14VX7PsfvWJQtu9ta27Wp3LxtWpEG1MiJrU3YMThDseodcfM5b7UumgT2d",
  "key6": "2wGuSTL8fekFA8JG93enGDAKLyokkMvgazeRJ3ZCrpkZqedK5psdR5Zgpq4WoASHCUyMyh3VS43Uq2NHEPWmhBRp",
  "key7": "3D1LdCv8ZWh3omfqfmxhbQDRHHxjAYEzogXkeV9eyJThhjKgdAqwMmjFXX33KtphdVATLvgntpFQ3Jf3yTjxBRhS",
  "key8": "dX1kLmvtU1HkVtcmN8YRGHquXeFKuUxvBGfF7NbmrhV7ob7UYyG5jioW56wykEd2uiUuNNkgbSs8Sc4dvPmJ1vr",
  "key9": "58pk2s5ycJhFpiqyHbQUZTjdptgG5KP4wDnvbGmFudPx1uuWx5Z4amF3chMGzYHMt7ctqMCgjp3uzYwy2vWtHUqK",
  "key10": "dvz5rzUFh5ugCYY3j28AfPwueqqhDnw1rPpNHxr83mw1NkAeK9sgbZMGZfu4QgrBqSAy2QDAWhpaPZEsGfhJX8U",
  "key11": "2sdD7ZA6myKmMaXR9CHVzcf6pYpwMs5fAngtPaVeZAyai4kv7myGZHMFLmkL9DP27su8MbJJUbzbMJhZb4QPmUwt",
  "key12": "33LSBrwmcT29J6SZ6T43aX2xwvhyDQAA9YRypiTA5g1wc1zLTkYo95hBB3XNJnoVwg4pGd8kbugj8NVi5RAho8Eu",
  "key13": "wdpGX1saNYCzm6xaFN2ET47moJhVkt176J6bLVbteHhFDFzsYVFHyak6kVDCh6HKbEmHDZm1Pmm7wtUtM81fy9n",
  "key14": "4fkny9KMUFZQghKpUifUio34dfo6DoQkW7cvwxFbtKG5DhoqfRsdcma8E3PjBmtmVa1LpStDoYkbVQ5JndwHLPMk",
  "key15": "4gcHWUfx1rSXdBjc5rdK41AxJ1cneLMZF2Y5Q46HKanJekqpj1A7zbkPfrADvhpeyD6LPdx8QN3JZMr44zXscoMk",
  "key16": "GDPEVkEoBpEBJUtWvFdh8nCt8j8dmy8UwPSEZo9EkujiYDBH65xxTestSmjP3M3wEmQrBSg97ooVqyosB7Cnzxc",
  "key17": "15u3ztFFz7xvZHwSEmaW1NrcULEQNEF8beE8DqZ2rep71BZLYZ7gkpEtkv9Nhv4Df5chomipQ2JwzciU3ZsQgFD",
  "key18": "3Xd8H4VXGPwosMEF9LRBQbnZrDNguE9tdTt41prs6Z8FkqSHyBpi7B5S6dSdSmEXM1wNVVGZcaLQrFqXmjti2GLs",
  "key19": "2vLAZcPuYnwfnaYR41g9JgXWc3NQfAgHNRJLtThoydfCTN12vDHAGovat5x7FnqyEc7Yywo1zQjfyWh93M4TxGAQ",
  "key20": "3rK3WD6dFKxizy2WyV3XK5z9FtVx3RxafZWTAiNtnPZPii6V1SUJGBzkMptp44cUSoEPuoQxoeMCmuTjLRZvPUXi",
  "key21": "3G5xdhWoNXSMzomYcLV9JZTVD4WTksgNV7eA4oPEpoM1n6S18T6tHc6Qg4x36bufXJSuxQTSsapGEPzWiVpmnztX",
  "key22": "2FG14fY8qLiHm9N8Vjpjrigp3miwUesWFihUUExmoG92Cw6cfKAGEcQegFkgx47nsWr6neJ6To8MenKLta2wEoew",
  "key23": "5pjNYwNykVK5aMtwzbNrik53oaN3xntSnihHH6FqyihFvYj5S6j7wXhRgLEnt2omGqsBmHzTkwx8k71GZCztTzuh",
  "key24": "5RngesEmi4Q7nFpB1j8JnWqpXE9c547CkMcbNgtnMk2Ysvi7Hw1oDR267wiC35nbciVMkFgFFzk3v9SF3NYTnmQH",
  "key25": "2jQMEH4BZAiq1jEhK6GRndRSVguUN1zyaGrMpok2SsRBDyizgNoiqtBPi6SDq428UPjYiouySzQM9hLuWBkJmS8k",
  "key26": "2jzke1wczygouDo2BBVMLmxKZ7ioAi8MWibeaU92RuFcKbXwAYG1WLmSxQzdzmfJApktpMyC5M7rdcgup8wQCwnD",
  "key27": "Zr5i8hPch2G2nZZBFUS5o6FaW126pUCLoCQvwiFHrNTTLpUbyYEtkWDru8BGPnyo714SkZBJpbDgR5ZNZ3sn8tg"
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
