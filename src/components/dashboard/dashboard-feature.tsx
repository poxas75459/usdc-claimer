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
    "4M5u5hFkGeA7GWancmxd8PsSwj65ojvadKdiS27dWrkQEVyACm68tNzftk4NyeQJ5HD9wXP3e13LkN2xkHk7Zhfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SPRELLzqAk9qp1vjE287MvZ1xrDm4geYda7fdbojEHXCeCPmHhbssfhMwBRQqcsqqdNZ1rq3FHSXFfL5Lr5Yz1",
  "key1": "3cECDn83bjcwZm3AjnQtwGJRPjMsTvpWaUvFS9tNPEWHPb6vxaju6GC5APiugsBVZkucpPfv8Am1kJNpaXD38vUc",
  "key2": "3xfXh73EqaQneWoDCZ6xk65DW5xoXnUunGPSZpvmoswUpWXcdqy9BhjEJbBeUTU5ZNkKZ8gmS94QKuem2yAAsmMD",
  "key3": "5DMgwSRJ83t1o31qxL8wxKBKnT4d1rDAnQq1jNmMU6WZUvQiph2syBkUTo1KkL8yZHWZbW9adbi3rU4Qjb7g4rZe",
  "key4": "5dJTRsTeghVkrssaDpuWGL5XpoiPfua776FgzdpQKsRBNYfe8oh8QHGvQawESmF15jStqXHoQN9JTrLFZZxGPG31",
  "key5": "2pkesjwp8URt25cubQBpLCRdfPNdTwYfhfcagUoqP5RJibLm3Me15m1wkeC7nWM1w519D9VaapuiQ9MjwjtXARos",
  "key6": "4paqMQxpi3f7UHbSagCQvYAfJ6qXwMdZi1zfaEv9CViaJjNkgBXjoE4ba9vEYpgnsNjWs2M8xfQihCENZrNusLx8",
  "key7": "5CRo6ima3bXfrJBSPY4Vh6jdeX6X7mjd3Epy9ccJFrFwtGg3UaWiAu7Keu4NJwEucEjf6McsJmPH6FgnEKKsfufy",
  "key8": "2J93SVgvmuPnYUcn5bs9eRjMQ8XSucMHmXywr2ggt3T5pa3Vszv3MaQ9Sc85kF1i74JUFHjQ7QDPdrXZArzyGfqZ",
  "key9": "3P7mjt5a6Cfmijc1m3LnT5JuNRU2xFss2JVEs7ccp15ey3PafoJxwZv6jtmdEPP3LGFF44cKQXkUxWbDoQLsnQx7",
  "key10": "2sRDNe7FZsDqoPrCF2zXmEcGcLUmMrsLnQ1w3LYX8eo9R2bD3FxXiv2Xg9hCZoPtkdbLoVoGx39ZR89EYrgh92Gs",
  "key11": "4wv4ks5xAZUjwhnXaYqZ5uDzxodNu5KM8ZmhCb9PxYb7ijnTcHg2ZkQD6atCm3RqCrpo65iRJq2tYC7LmWRhqrYR",
  "key12": "LbJjPNhWwjsZ6LAGjW1dt1R2C3me3zMDcqcDNdmhUi78fq3Cf5J9x9VzB26enMw31h2st1cCZyp7DDBw7LbM16p",
  "key13": "5owgdw6xqbnniC12wxxLtL7Lu1tgVnxShqsvqKQQTRAEDfXyxdfjbJiwJvUdEmYhVXYcbCtGRsdcRJTq7Gw8VNxM",
  "key14": "3m2VfdiYPhZ5XMf5hdNvsfComF9EZJS6nUeCySiYWVwsQ7Dywp5FUg6J6PqXUu6QKvLr8MvKNdPcAagi7SKiimYB",
  "key15": "4TjjXQFW9MUMpbN6Ceoka216PDgAvxkKMhCBeP44vsrygep4nU7rijxRVHfhU8sM3YiZxENwoqy5R5tMdDjdK7qk",
  "key16": "2RJvJcD9NfPzzmRfEVEYUMKg6KtxVk57vuFh3T8uBDz9s8ZvEXP4D68LzJZegJCvDmzgUZyUg17SiU4yCgAyVGHZ",
  "key17": "ksZ4pQqivNam919YFCHKNnoJ7LZx3L2tkZacBPSsdci4hh2SFjYuvyoya9AwANGZkFvJFNr2uakgLzTVBQnxdQb",
  "key18": "bQrfASFmxRHkR3ig7teqDC4kZVF5LKJNVmetmrJMZUaHZHuYam2sUUpUVY3uZhuhCz5j1zoBtbffoKEdQRFNZR3",
  "key19": "4a6c5qQcyuWWb3mvuBYhEoDtuwCZHw35RrrqZHkhGQHmk9PSPLmgyMGNXQLe95EQT2TooQDtgGSLR2M3Cc2mrFDh",
  "key20": "4vqwJakKioXTjuUA5VjHXQhnDzQzUZSwb3FCScjXmjakAw1xTBpmgSrvZC7efjk3gvAYe5Cz79RDSD26KizsyD8E",
  "key21": "4z1igHJpQfyuawoVxZ6S5U92wNuN4SgpudhvKLjeroDNfE91ksDMyP74EuJknc6sGW7s4UDSVUSSD8gNWKeHPHRs",
  "key22": "5CNFumJhE5cTTCvXg9b8Nw8RjS9PtV4pLPadcvhPEEGwwm5D6pZfgA2LPreDPnH2ByisszLAiTRU1Up6mo6e9y3U",
  "key23": "wurjHorEiaJnQLjH3xjNcT6rLitikY2wQEF6RbPzQibTVWsuTXLEdG3XNh51gUFU14ocWrUcojv8VW7iQvEfCqU",
  "key24": "332gnNEvErqZDr4XBzP9q8vfVGv1zdRXukCuKtStkrZ31CCj7G9ZRVzxXTYPWZWFEsfEDbPHywE3ZsCkgQsV3Q2J",
  "key25": "CXXSaUS9F5XKumTgFHS8W7FJovamJsRDNDgmJUwc2QkuJQs9VAvq8nQCeVoXRoEEtt297g3fnDectaBaN3cMDAV",
  "key26": "2ntDKEzHcHFY9nNSDPi4VGiNEbHt2kQjDYxJDGAF2deX42jhEfC7Yi1j93XkVes6U43QipfLUJeVjPpA2qc8RPL8",
  "key27": "3P1Q97AbDZP87MgfnbdVkPB2A91XxEqEGFJQRwFtSVMDzxe5xzHiBab47KprksQKLUKW3D8XY2E8v2EUkor6a4HZ",
  "key28": "3csmBU4dVDD7jy8icwPFksDVva5pqz9jzC7Djz8vb4RrAFfT14fr9Gs2E2rkjNY1Q7uj58WaE7mSJZ466YBErGG4",
  "key29": "pWiTiZuTmP6eyEDCBgptYLzQwSEhzRwkbrRXWzy3Z4QSpk5koavtFkhX8Yt2ERuVnx5GvxdEXyyq57YZtk9Lk4z",
  "key30": "2P6ZCrQvV84KbkbtZirF6C3sGY7oehQHm4t4YDG7M7pCtQBWojySMdjwybzA6n1B6Lw6aU4RDr7H88VxpYisikfm",
  "key31": "tkzPzRofdcXTEBVcWbM3HEuMczwTWb9RbDwWpHfHSaNixsMN517RinwAtZQj4abGJb4jHqH1FcFe8WjLaXqmqGc",
  "key32": "5msdRW89XA9nyvgW7dGrfuoj4f4eKoWFheLzCKB1vv8XUbXFSzBifkMioX6AnunHJSaNqm2Uis8c2om3Rf5Uiuhj",
  "key33": "32j4rEsicJthQAEpWpfhNX99orehboYGttEpjpaeLcPdYGZ2nNgZ43ecfx9omS7SubE8FiArkVRCUX4qTsWCABwx",
  "key34": "4L6rFoHdshi57YCdYwQ96AtgYRfcCcaqe2pxiBZzqbdaXoPJm1JJGG8LbBWShPNPoNpCbnf95vXVJJcyumbvXGs5",
  "key35": "Ejdezz1T2pSCaRpAD6Gu83PbUhj4iqcTozaQj7bvsGcZH14LaNb4MgabKBKroz6f5MMYA6Cz1QRdzxoQLaitrTW",
  "key36": "AroGPXfxZtvhEPiGduqrTxymRXZC3fqkbDgdbJsowydK2J4h83PwVpfbgH7CJ1BYZh33yYMR5ocExLFw1VFXfWF",
  "key37": "3u9pmsUFWsH5aHMqavCvwnqZxExMEcPxExnWiY3x7UHuY8LQhe268PgWHurAR9fekMZqcjd1cTJ4FiTyk1T8YcL5"
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
