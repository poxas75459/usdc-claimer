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
    "2i8jTzGjkQ1qeaQFBE9HdXLgZj7C8QwBiSfGcD8tPkMVfuUiYvcBSWvmxkg2M2t2yqrtNwRcTDkTwZUQMYxHKfnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLLBYhkEsGz5oqdwwpi1PyESQTC16QAMxir1QBGKpe5e9bjVun6hRKpFBY4XT98gUaeiQ9FCTGNTMcDUGgqMug8",
  "key1": "4R9Jcq5aiGaW8rcCCoMXTN9TE7JX47iAPs4KzDDtcitrVuid4AUev4dWq1eLnykV4cmp8STmFdKQ4B9uRA1AjcC8",
  "key2": "vw3QSkdNFXs4YbxgtjjewKxvWAPfgky9fPUuuXFTaRTjVZ5M89URFipP3u322fTDGcgbF5rwQLdguFMqTa7Kb2X",
  "key3": "Lf3QErWGWnphcCSiWCFyPJBNkR6SpJUucJ2SQejiaT72KB5CrSgXBVY7jEJRt9YCv7BZsNK7CLcuBRiKCuViAZU",
  "key4": "63bQKWZhvcaCwrAUPDNfCMftzekYwX5s3dDfn3J2hD72XgZUrqt8Ym9Z56y82QTNnJWfFskYBSw87BTeiGmQKR6e",
  "key5": "3967MyMpNCAyJCLDqfeyDSU998tgowrMyLjjdpy3fbN6DKu61B6Snrndc2VqDEkqjCUqcfUtoh8aiGQHKarQYj7A",
  "key6": "2rxd5wwN8CwLRBwTQ7qCWHPQNwzgUGiLvMZRfJZ2RXojTuKohyfArCF9e3s9HDLDGdwEszui1HHrhamEhunYkfn2",
  "key7": "5cnLyfVXX2icTAHc7RuahAdr4YqYkhdnJAooaHaq9ZLcx98Vz29eoF9o7hcD1jLGcgkZB3Cy1MTPvtboB9bwSnmi",
  "key8": "5jSuo8jeTzBfHeNUGmHqXYzcojwMnVb21drNh9y4SBe9pJe32CkZW4n5LW3kjHfrVLVjSMMDeY2ZKSHt9c7S1EPP",
  "key9": "4ZfkviderxAmkcaANFxpywrTKChddKg8RUWzyLAZkVoiQyv9BuZLdZn6N3oV81Jmey8jamP5Hjaj47CFbaZQwqhU",
  "key10": "4TpGuNpbKZaUFGPEzSLtewYug5wvjRiDvtCqnjAkkYJnwPVXHtzK3tbA6pKC36W5ZPAq8r86JkfVbXuF8vEKjgid",
  "key11": "4pFpx54p6ctnU7Ai9k5DAbi618bok1Kh4CWsGrd4ws6vgxCL4tFNWnfaTQXkizX1ti1E3XfXV6fRc31ezxq6B8kj",
  "key12": "2KHDwG4x1ZTp1pGskL22wvMhqBBmU4gUN9dxr2n2848CJeHQdYGAo1AXf9EQNw8DJB89p7x59V8CsP9iRZ6FwCSk",
  "key13": "29LcPsuZRbX5bdA2kLkMPuJB5rzMQ7UsrNNa479NWQ3mV3S5mXsQsq7S6CQZvEgKxDxnmiTMyUxTgbzjzjRsdBib",
  "key14": "63pnKcaMgtqkat54ak2FroANcjPzvDBYmxMv9ugcF7FGPkF1aEgceD1nxWGdTe977Z3ceVErz5VJnxyn7uUJ7bCv",
  "key15": "5fiauLReqfPtz3Go7DyEEbNwi4mekQCs4KjWwBepDVif7kg31VtwTkUbMrAYhpT8MQn26Yyioytg4kDpowQ4XRZt",
  "key16": "4ehWWpu7yyTayoSS8y6aDpAqBCGHkmabiHUPNQuNGmnkwZ3Aicv794hzt16eCrTWjSb6PTmgYUACjerVJwt8xtab",
  "key17": "2kvbyrBmaHQYx52QwrBRj4R6FLT1txrd3MCYwNDLA1824iN4KSRzvEH5uCJGEzkMF4SzDoHmNt2NJq5pzXVbfsKu",
  "key18": "8HDbvWWEgAM1YEDM67ark3YAFbisovY2cqhEVusduxtyfDkGBTuD5bTuGBk7iG8FLs4B9cjMiZKCx4vnXhHtWTS",
  "key19": "2XBgSpzNPsQM345CsshK3zgH8uAbpoAGWYQKaEkGsq6JZyKtTpqr5Z9nujc2pBYFd1d5BmyPwr3JNToUCTCEAVT1",
  "key20": "5wFFfXXYvSVsLSUgTd7R6aXw1AqL6rSKj3DQfD8CWvoKUybSf8fSDJhMDN6kVaF1BkWQFWcmg9DhVgenXDnsHQh4",
  "key21": "2eZg5iVq5oEc46rJqHjk9XDqMPzdfFWCBob6qVoaz8AB64HmGEEkGVBmJG6Tirvw1wY3JxrQgsRXNhhWieg67wtS",
  "key22": "32QCp5X6g5KXu5GhXZamb3nRrrJupdi1hZSjNc2wB28RR8cKMQ1jeSaJeHzaKSj7vmsxJt8aoqxDMNaTysRKY4ys",
  "key23": "2VGVofUAV1tT7zRuyXwpbCMHcBWFHXMBvCkGGbfKCN94ad4BxxMyZFyt9szstCWufsPNC8WbcPhnzAhq2QiWYBt3",
  "key24": "5dAiSZ1citbiisEFZsznKoYYR9ZoNS5sdxpcsFEKN1h7mMTgGEa8XsmNKW79ndRJZ6T6EaH35hNsrciGMDjp9WvP",
  "key25": "3CY72KMubVnFBUcrkzdATVbVeuB7qCJgVuE8FE3B9tAZibYNcDhLGQWmsEVmi7UjRNXRKwaLoRzmFsdvVRHPSnpC",
  "key26": "2kScajWnRf4wrFoFtyFEawRPgn86u6av3uE6q7gTQtTBu18Jb9rMq5XqSmHVtBqurkqHiVv2RFANWwi5TeXV3vu2",
  "key27": "4485TuyQubcHpSCB8t4drLNVG8KoHPyQTSjLCjKV5zMCFcMbyHiyYRuiuVv5v3FV8xcXBQQv5tTGV5yH5CbWBTp3",
  "key28": "5THKLhJQivp9HdizE8LDn9eGP3ZsE6rT2gPbJeopMbgi1BoGaJkkuLdiwtm4urzGGFvn46wVJaXqUZY7gujhfiyC",
  "key29": "5ULGJrfCeJynBt7eTsDD7kfwZ54Cbe6VRWgwjeWFa2LtrmUzXxwXNK4eJpM6US3MY4MF7knjzP692NnHPu1D9hWh",
  "key30": "2ZGunwBekKKyRrZZxPQETfWkCxD5jE2fRrKVpKtkRAumyc5SC81DfEh7NKWdrewTLZwcGUS2oyXT1UrTZ94fCtwn",
  "key31": "Q3gdDMAcDewGX6shPomB5GQwJ2jCta9JEqfRrB1Bya7C5MuKeZ688AZ5ysG8pcgiukF5TJj9GcPPaY1WAS8yLzR",
  "key32": "2a6hHkRzWCVo5RxygKd6tcL8bmkp5jvDVvdMEZVkbN2N51vgUdnvVg8fYDuWdd5QYDg5yjTdRZfv9XKFdBvVoEDk",
  "key33": "UEmfubuDrtq3mKcJXUC1TDqjTH3Nc5Hom4Hu2pdnzm519mqtuNw8FUJKjmGTgx2VxGDNNv1TBrFRgi1jkcz3uCP",
  "key34": "cFTKvKLiUMNL9gsHd72FPKBZQp11TaXx9ZpBwQut9nKbd3auhzToKcBkyf3o9QBu373qouDdyF7TT6cKWspaKZp",
  "key35": "2mrTU2zQBXVByhAx5dodRANUoir6aYXZxQ96MgA21Vgj1o475TLMxsTUcyYXfQ2DB543samjutuCDW6YyDsBnF4m",
  "key36": "3if1AehjsqJggzanRq4hWCDGXyFZ7birx94DRgrvq2KS89pjmxR1oG97UaoBURH4FMA3HZR3Nz6oaU4fTuYLXRNm",
  "key37": "LvzKWzRjb32DQuqqgXy14yAAji8V3hgoEXsQaSvyaH9QtBBNQEqLeYA7Wyumh6zxX54R1C3JXPRQrnMxf96XJCF",
  "key38": "fPf6vd11zngGzhYH8aLyDTHEwMqTK6xpChHWFA4aWtBhnAjx4RK3oYPiVKVcWfD67wTpBgTiSJirMhutESPQ6pK",
  "key39": "36UTA6Ns5wXfDHaWp7zJ95GmkL3b7DsNjnk59T99v899iCPg44StT1rEKVS6D7JdY739ghdbp1A5Lm3G1jLtpy4e",
  "key40": "4dF26t31kG1SbtjZPPb6nrQ6sf9R9CAKZ7rw5dXc16eXTQ5prip69v38w1qsLKHqFkcpLCj7NhwjW67QkQXnT23N",
  "key41": "3Wcajp62Eo1B8oB8g6372uoMaNBMYsutKRJjGkGCyyDFrf7jwKt4MLnXSGQZTdQbFzL9i9hZ1Q3gnTJBq9zoCqXe",
  "key42": "5uRu3SPHmHdPfMkaaTvJSWHcp6AaP9PtdFW6cFm5fhGtAWA2J2RpXLqvnKdKpgMpfdB9jrg78Z5bZsJEMDQ8rRpY",
  "key43": "3dbsrmPvJyNQA75TTKtN2fjnbxif2CVFdCHFHkSYqJA4kVmMFf1VCMYHEjkfSxVRnPKE98rAWhFw7p3KKLLMXnUZ",
  "key44": "2Pc2Hxym5ghZn17Agfszc5bYxwZzUcsMc8JF1SqXuMbSEGH4cKT48jtJiZLY9FZeKr2MoCaTUceC31eAyabmJZZb",
  "key45": "4QvqULqFuHpthrANYFiSu6TkU1AW6viPehV3akFCoSchmYP4HtMJuywPjYdUd8geU2Sc4MAiQP7jhZqpuz8wuWg3"
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
