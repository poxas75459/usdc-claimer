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
    "q6F1fFD5KgJJUaQxXVJSYEKhFFoJzvnujuhKrFSrp2oLCGgJaHqYwPHUjV8E1jWepko2hoCkf67o6bY6Q7up8LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HhDWz2HctXmFsnVB9RPpAdZpSnokSdRSXSU7VLTeTdVK9jEDjPRVBXfBZGLUjBZvunfzSHfhpjHXVo7CF3mAtZ",
  "key1": "3BtocUqv9KLqT4DUSJ5BMF3KPbWeBmUkVLjWhSMtWNAxx8Zkw1yDbBfyMjJ6MiwB5muueTrzLMCY2noguHaapmo5",
  "key2": "3gkJgC1EyLyDTTSd2kiiarWXNwppsECEQt4U4kyNNiDTm2k1k5YmjjUi1tdHQTuy6k37spnz19AjyhDUnLb2jDXY",
  "key3": "gyvR7U6aRBBnzMZcxo9rNegKYRevaWSkxf4mcjqBrorVDXtJyMp6QPDyPj3cBiY86W8P9LywqQnetuLqtEqP84U",
  "key4": "3cFxTTzEe4c1MsojHcmVc5bbqLfqH34gsxxz4ut9iN8F3vvUxeUAb6PyATRo459RWFoqx3tZ79cycvASH9NdqtbP",
  "key5": "56U6Qer2gj5yPdqHvDsRy4WaWwaLjp1jUcAg9NYp5tbnydHcoaj2zk4BZ7jPEABEKuwkEMxTfmkzT9F5s6Q28mJ3",
  "key6": "5eZYERJteH4ixL2PrGh6gKgMoWt5RMMWEVsiAcSNVZgduRc2VSoCHCDP7riRnKfzRZdcTFL14yoiJEFRKbMnejv6",
  "key7": "2sSmzxk4bofWUAXNZj2rbnysW2R8PXbR58RrEmrUsbatX2Qa9F81Rf5sZP5X7rGeKmDFEDW7PNoLfN7YakFUAQM3",
  "key8": "xyhYEEkgperAJNRc5zgEZDARuiHNg6k8G3QWcKDXYLUUW8ws5mwhEC8y1FVfMrgHSv9iXZw5GfRAmaKQsJkqqPs",
  "key9": "28kD95dxjg6sFTJNwjRS7ibkgp27VJy191ofyqPDJdjE96bzkFUZHJ7KY8BeNkB7wpALc4Rhk5bDotr1K3yJ6gJm",
  "key10": "Lu1xDkx1gDiNuSaiobGJSRbkq7THuF51pSTcSZZJ1dWs1uhoRv1nRraA7nCdatvtXKu5fSM1axfonsaaLTu9BMG",
  "key11": "NWjtNphVN6C5zpNezZSTHMT5GXDW4BtXvR5jqKuC3KDidf6TfqdoT1yBWQeYs54XMkNfzVZfG5QpLgoDP7snL5X",
  "key12": "vdifqRTuPSf6eqBB9DTeT7ZptpBu5qbFvtXysfwKfWpmBwYRGDUKAqghFyChwnFUah9vypyU2FhQnhxhxVJLERu",
  "key13": "3HZWxogjWADMi47bvXw28eS9bo8gTNhh29gXqfCagpBSTjhVS37cKtnjRxF1WfHrz4jVP8CXCjxS6LmMk8jTniy9",
  "key14": "3FMk13S7AGZRgpFEYhTniyedAM2sdEBHFzDj5xiqJsWs6ZeCkdbpAEXhz9yTt6cY6USN1aCRHtnfk8BhpL7VeQLn",
  "key15": "3kB4V6t31by4rGHJvo14PkHtstMzDPVSuWTsjTmjaa12RrcGsf1Mxvi1cT6D8UYm5cnDBhUY65ZNT6AAnB5yJnvp",
  "key16": "2CUkVHBREGvH7iByNvLuwcY2tCnJJqCMniQNNPYsZKsdbdLbbvNi6XSmJYg9cZHJqQrNuCLDb1uy4jiKGMQtXJEQ",
  "key17": "3bSPN4ZKzeY7utuiK6GrUxWTYk2BcodQSnzNnEScbDJDWW8HfZAGhUtPjsz4Jot9om5i8EfwEZM738ZNbXQPCfuv",
  "key18": "3MDHRd59rr23hSgnerrjDmsfy9EhbR8ZzcoE9VPUouGW3P2xJU7N8nphTgMpBLUCcJyn8ADYVaf67aUX9atQHCSi",
  "key19": "5r47YHWohZMqg4oJYTxV5bjXA1AtxPUFgRRxiRc7eQ8cdkRtHM4kEWTEk7c6a8YVcAqt4vYXz9RRWN7Gmoiy4rjV",
  "key20": "3xVVr4BPbfyVQk9CnX2ejU6CV5bcYNkjdbvWLyjUxMosn5DuJL7Soemjx6kHmSduusUtyUhmEnJCAgeedw6eRTj7",
  "key21": "2VyuNgYyKMr6kzCy46V4VcTDyWTQrzCvE6KMeYnxkH46XMXY51mz5MVDjbGuH3rwLaKfFFE2PJmeCjrczqYVaxZG",
  "key22": "21ajpc2vySfybe7zD7wxMbaQw8eKi62n6bAPeEPrpxQmzuT9KX9VNakx1iG1MeBZXtGKeDgdud1eCJC78cnfmjgG",
  "key23": "tW9S8Vra88FMoWeAnt5f3jebrid8khPagm5mtxA51nrj8NAaiwXX7w1AEa8RDNrqYwLw1GpqtMiNazajVWY7tTs",
  "key24": "uByZSyMDa6rK3opHMCHmtiPfBAm7M2bJ2UUqpYhXniTcn6MyF5DzRXTnsfX3HjNSgmMkPvdky6QyXV9HV4axAXr",
  "key25": "jnGUhNrnduBabvPkd2dtW9bGGEZ57Ez1GDTnot888vGhv9EgBv5QMsf2wttvXN92Qyy6hbxX83cBNXgmqdtVbw3",
  "key26": "5nwvj5Ub3t6Kba3rimHQyKiJQHenr8gLTbwhaCPEy6DTSvunZSDEakXRkaFTZMMzgjJEzeZs3p2DwDtAFiu9w9TG",
  "key27": "37asc1sBgbPuyyCCXV2M8RPNa1He4ibLnuwV2HRzmgefpRExNKbZU4emZkMCh8zLWAqBA7aUd7Wg3BiNCJS9zdjg",
  "key28": "5ZqKBp5LwVKk8Gt6dGjECRgYVzFMcBqMW32LPForiUk6hU7FhZHtTBJitMsBXpBvPYjqHA9HEQcrKdWHZrzyXSi7",
  "key29": "3natQL2h8mVSahtXxiKbWPnsLbH3QMUNYVsC9AyqF6zDk7AdcW4amtpcWyaT1iuhh27R2NASkSzotZdh9oTYnwkE",
  "key30": "5Jb2ZpMWCjr48NA3jmAa1pgd5LoComERLbfgxr8zTiknRB7wvRqwCpoRewWHo3kjm5yJHXr6h4LRASv5kp3z9eJW",
  "key31": "5z2oJ7sXwgUaB3dFixzTmhNDwunKz8EATbywU4yfG3R1zhDCWuvDHxVMu2SG4XgqAqrAfUdUEbqpsubnj357cyaq",
  "key32": "3QKC877SVo3EueHVLP9Tr1XuJpdDfh5gH8hqX9g3P9QbUnPQw1KQXVPBQxrgezKfSbzspsVNNpC8x7TjewbUwSM5",
  "key33": "4pUebPaQ9GFgZ65utoCMbjZyrXLV9kegRuLDDe4tcpLT9P5JEm647zhG9aj459ysMdMutrvYsnxyG8zUm4PKKxZi",
  "key34": "65sAWyuMAdXxNb8MQeXFazXdnUXBQHQfGbAARMsu6d7SwkcjRo7dCAKzu5ZqPAUU9DPpFqrYNPqEtyvLrSDGDzx2",
  "key35": "5tTsRweoZSgT9SDWanQFqQ5bc47oGTQwxyXXJptJW8cXaDmWKexTZ78c1T67tgE9LyfkY26WedisMJ69WR2gKRkh",
  "key36": "2kfGE9QQAjM8fnb4pyFi179JiCDhG4paUFv7HDS3b5xJeeGTKRTiQh3QbbrvvhyT2ERWRy7zihsG276WAKGkRQrC",
  "key37": "47oBuLrgRDkBF5bmawDY53K7XUfUXu7NgYmBFQF1wkZiiMFpKwGM1zd1AqMHADQPFb8tJRAxzmnVuNjrRLxq56WY",
  "key38": "4EtoQwD2PNXH1tc2uidHW5vZQA1SfRw93cyRNbYfREWHqDXx1JARVGp3ed4wYG9hv71fbcxN26XijNxtH95nrJWS",
  "key39": "52SzPYTfcBkKHas2PgTB3zYBNf7WRsNq5BuhjGTeXGjZS591soSroE6WkTxdFv5cpQ4BqDaZaFqL9UMD7ssyPw81",
  "key40": "5LELsPAz3uimKrX1HCosiS1tncBp7tNUM2J8zJeZQtWhjmrtTv6nnXyHVR9mrjvsz5s7rPvssqTtMEaNc7YhPa3G",
  "key41": "oF4WB1Sfq9RtroBkygXCrNdRX17PtDcYppawsciqHUmv8dHw4SF6d2qgEMh4nYWcUY8ZQ6pyT6ZraebdnTWhjcX",
  "key42": "65PevPN3JV8r8WoZ2vyhsrWtAhXoD1v89VCkj4swfAaMUzfyusJPSep1K28fRGTPWdKNaZXPFewrDRAVEwn82pqX",
  "key43": "53nbVyhAC1jAExD97fojRKBswrN482cW4vYuJSpRn5BQfaGoEutJ6eUW784dcX92M3pnLZaWbmiGABKLzrad9AvX",
  "key44": "41ZCGdJJRAMtVsCJST1otit3RHjKH9NoBei4Vw2bgkXzZCCMignm9AYyq18c9L1P8uLKXcqoVj8jVxdJDFsBC1Pr",
  "key45": "5BXGv2ioK6TiZA2q9WcQn7u7Chfo34VnHmybwiDqcmBHyccDKpfEsGJJ8V7cQEhMj5hkVCsf8H6KeS7HTzf88TuM",
  "key46": "491T5WBJEFkKKR8dQWD6UtVv7XfnxqrrdN4obmyLzrRgqV4pPBSE2w2BBV2nwD8f9HjxvnWJytMBLHRDNCkfi7eZ",
  "key47": "29iQqNShLHgfxH4b2MeZY4Nv26KyMedL1ksHhozjZDzhQQMsu4ZNQsuyq8AabFbTPX3pYnXP59tZVN4iVEzmFkqN",
  "key48": "34iA65TKF52waGQFHF4XpJA92NVUXLGmgkpqn9XUji9cHLXuYyVmKZoVDUkJw7KFDQs9Kbp8qtHuD8s7v92kcruC"
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
