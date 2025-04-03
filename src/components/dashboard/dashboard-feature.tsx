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
    "ctbieezCHuCZaPLtf4n75vtkunCXUfBo8GWTW6nNjmN5ruyUQwaGUCHdpBRAQxxdmjG1CC84WjjZL71gUcYsVAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zb9ApF8f1pWdX9g8BdtwBhMD7PxM2vzvvwfgZxH5sYP7jopWAA2CVmpc1Vp8QehTFdnB1yxbcsEF95AC9xSdB3i",
  "key1": "2qfwqAZzsujihvkCPAguB9EYy6cPbuvMdLkfvMZHRCeV1N8JVrbhB2K1MndqLGURkkHPTdbSKzDx9DRJyXaF94sV",
  "key2": "4k1xQG4PijMi6jThYELjUN2hNwkvRk5eadSpoJEkwTN9HTjamJohN5gyVW368mbrc1jJn6y3g2vzrDbTM1Rtsrcs",
  "key3": "2tXKxon5BRJiR66rpxhsfYn15cx5aFFZMYhEEHkR6nRD1GnEXoEnkVLYLuSPWWeoNGzu39kgiAayt1MSfg2UyoYZ",
  "key4": "26KCYsj9N8W9AfL4JUNQbxXzLVUa3rsYyzM2XGMoNpgL4hWX3PNSnmyKvaS96Zc4hLMZbsdPaSpG2cQmNUsk3FSw",
  "key5": "2FEyqXhniXvVCqrbkQXuSEUvLo5Dziq8LcU8fkGEKEAW7UY5mbD87FLgH5nu9wgBgWupEka4mT71aogroBVhm1Mt",
  "key6": "4DEttswNpZe6pdA8tgJZ3rRnp13xbj5mZi7VcsvZShrvdG79TAqdXPQysCAZ75CEYC1NUxkJ9MmgUQo49jTw3mQm",
  "key7": "4f6bsTYx33QCifpwtwbW6VJvqJtEfxW4FdjH2CKHUAjW6qappsFNV3MBQHsS2MJhsAeRDrLH9kpJCvxVcuoHcFJo",
  "key8": "SuzzcUm5sx7fmEZKMd37PPrrCMNcumZJyiaZJfeEARRpY9MaGhxoWyHVu8iSEaxryLD9sLXntUtuoeK6JEJb5Pp",
  "key9": "4ryrg8xDa7WoFLcZo4jbmwQsWMmvErnngUFcDcuPHADuprFyhiU2hKCc36RnLPPpN3eHMG8BaVYv5QB84B4js4BW",
  "key10": "3YMvPNW4XAPFxVJhyWzCfpv782cktQZUotqfAeKVUXTziUaPi3qQ2sCXGGGZPy2Jw9f1LBbKZb43M28fpg7ta2ai",
  "key11": "LZkL12DavvXRpigPCn6SfvQsEnUpFmeCRCCqwkztfz1XG4JSTzrxPTSxEp5tCT7rSSEbFVxtT3jVwxZYfgKLhfX",
  "key12": "3zGphse7f4gDqzVDMLFViNfNMUDTiCtFa2oUDofjn3USd2PGQdaMPHC4BdosGoBKj4EuzZLKpvwJT7hR11J6LiX3",
  "key13": "5tK2Uc3Hdb1ranToFVRJ7QeLL2jx1A76cyKxC8Kyj5Ws8XxXtdC8uDzj2j8MTX3WjHW7JJedcCBzacGet6SxKnsN",
  "key14": "5axE3PFFCut1UDewQe6LEB9MuRCbvhnoyiAaff4ZHmC3tGSG5MoeunQnECqXhmK3jDCZgirrrBoXZvniGmmU38p9",
  "key15": "5aCrwMaRob2sBVoAv3bnKqsVyfb3WQaaJ6tifYvuZTeQMVDJFSe4jHTMEi9kAky4WChPvDbyT4ScjCk4Fuia7UeB",
  "key16": "3x3LDQV8n41ainUATSpP7aPefcj8sWoLkkEXrsHzPRu5X8aCv5h3GAQFa5G69qtDBxRHwkvTLA1M15Gkqamcs47i",
  "key17": "3WuNntpk6UpeYu92425AvQerFygQHQbn3sNbqxJRacfAC4Rj5aeoSCycUybFnjpMCudzRnLKRuQHqmtG5qfZKQ41",
  "key18": "347zQhkemzGcbe7YRnpYfYFHZvt7DJddNsJT9pWZSSRikgZPHjHw8cwEzCHZf87XvKY322d5oiCQtr6v5CXQMe9u",
  "key19": "5VgBgtKYRgYSjgpnmcNJgM2ZNrnNRUt1qDwRhu1QriCQLjEAZP3bHsoRt6oGNASaVt8u2pHhWJ2GpeoMycmNzs2p",
  "key20": "4HrnQTcsX91eo3mdaLa3gujHCKqDpLw9qNQo4yj3DH2zuyaYaWAeYnRjiz16NF4CDLsbTHaxHA5T43vYM2TLNVdy",
  "key21": "2bhtuqvkGS4twzqmPHQjZdYNDXkMDvWkgKXFuKCzEc1dZhB25uPSuqJ6TZapBRnGSf7yqVJ2aUQSChAvNqYy8t9c",
  "key22": "38vdx1S9LBiL2RcvfJhCERGDTCgYC19trB5kjcki2m455fCXa88x5XySCiHapKNKcfWC8ofZZn73SmN4YhGPUWTf",
  "key23": "57YMSrByzXByfVfKXFTCYcJ9eMUGThS31eLxUZBN7YmJVzahUoFav4t8MMnNL3m1W8UMCCMnC3DunGt5F23QupXK",
  "key24": "9ATPQ4nVqp3LmNn3Br6mq72fMUbMfcSntWAQUrDad6w1LkSYWpneZq9Mg5Rj8uRSnMqgqLJyURfePmJwEojvaWs",
  "key25": "kRDFriZbGRhsSWGFyuBDSBy9sDAtjh7dArxvtXAKvQYJiPsaC2rKVxYyLqfPPitLzWFXpNVoCq9cRgowyNCC3Er",
  "key26": "2BK6JmZMy7uRz4umw6eVTbQkuQSvoskzYngkkdqdabXADW9TVBybgDKygYAD33HGWQrBmrR6HXvr5zuLm8YYvKFj",
  "key27": "3u51Be2Tuf4rwm9YBRE76wq3JBRYBJyRQTfgCf3r6bxc9HpdKu6DZ4HMgyFTAUe5KZ49J9LYVnrZorYL2U4PXp6P",
  "key28": "5G8w5nkEEzJvxKqT3RmwJwbTKi4KK8MzTujuUwSw6DRQ14AyvQD3iukdnPU7uyPbwYqRHRpeJuKuntb7TzuhBqXK",
  "key29": "2tMLVPyPCkB5hRZE3rah1FcMGuuG9T4RgUeHEHouNXMWDXvdSCowZoouUHx181U8e5YAWopwdA4Af7r7BRwh7srA",
  "key30": "NdMo7EerSqnG66V6g65d2CMhZRZAqotdZGAzrYJCWkTqqvYBzPwhPTrQVZnqWRVZZsbrLVyVg6VK4opqJQchVt1",
  "key31": "71cvvGivDq3mLQ5R3RRFV7hPe9C6hruhhdLM6HpXvJDyxQyXVo7YBo8Qv9iGBVALcnuR5ycx7W5MUKb6JgMH1Cc",
  "key32": "3m6LqYtcd8TWdBY1FUf1TBkiWREb17zLR9Xrc8fe6jByCVacqRvGcngwHgy8tD29RZqSHsFwn3BWvvuW8MLWT6F8",
  "key33": "m7hR9mirJnfUMJRysAhygUFXmALGusEENQJsA5r2297cp3wBxPL9HUSpXmLqJV9VWtQqR6yU2JZzcZrjgminoeH",
  "key34": "2H1AqHojKxwTsZGab6tYYHRNFjeLLkpxaz1g11MGtqYHWUngcgxjnxSK5NNJ13mtTxvf44jJPak8jbTBVrk9wirU",
  "key35": "d5iGKmfbfn2eoj9gCeC3uPF3ACMjGptUZ6we3YfxpSrAV1WaRR3ZWr93J86Paoc2KJ2E3R2Zpm8ZpNy8rQuV93a",
  "key36": "KQp5Kov5FDAKy55UdrSRcwn7ysFL2CpA78dexN6jQ4Rh3kgrJu5PcU4RRfJhUpQphuUWwNXzMVNxWUUKHcA1m4h",
  "key37": "TCA3nTxKNpU2Dcz6g6pwGa63KuUWSKXXaXigchE8GtzNycHspn3ZHDjxuuhgYY38hcFNcZcgiDY41DeaJVfUEUJ"
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
