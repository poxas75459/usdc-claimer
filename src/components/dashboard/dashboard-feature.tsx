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
    "64KzZ4ShAvt8GjG5z49isEAyDCBddrynuXUxZXbv2VGxTLesGR1zMNeeU5aRnbh4xxCoa28zxU95akc7XUKxXyDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFNRfyYhVXPKnhGf4rU6XZofVzhgzPySa8JXGXouC9nba3QaSCrwJ8zCWvdDukHhGKHyt1TM2M1fop1b3mxbFgy",
  "key1": "4siU1Pr9F3kNkJKjxSreefyreQxwPJ8itfhXkmWfXiEmg55jhNf78MYwSdN6bAEJ5HqYDgsTCnuGUySbsgT7RtyY",
  "key2": "4VkR4wi6HBwcQAjRQdvhLS36NPt5tzFREcxXcLk8XTsa5ZmQJSwTxh8Qcno3A96yatU6Sb1uwW9xbyiYmUmsXVY9",
  "key3": "5ovEvDiH1fiR3xAZ29TJKbxD4twA4WE1oK4QgztUwihRhA6Rbjk7im9aUdCBFBHpyNqQgxzFw1NDNYGML5YJ7GgM",
  "key4": "4bdV2F6sgpZLESr38ohV5P2VyyP8KwmXj5kaEMZ7gc7FEMdmPAQ7dkC8B6ca2RKuguFi9PTRmvvfKeda7zXgAoaZ",
  "key5": "2Tkar8zoJSvETozptfBt5kFovzEU5Vk2BPK5KH7cNZKk6J19cCjgKzEsBZQW2curatsy4yLW1MQZeFMKavhgBX6C",
  "key6": "5wJd3wkET72i6xz6zjx9wATmJcpaeiqvHuhLCgffeZvBR4H6xL7UHn4kPK8PQTZ7eGiHfuKzH3xCvJiHPATUeZoc",
  "key7": "2vnVpSNcSW8oRcQPc6D8Ji8oN1E9KebLmNpBTJogNvVnSWvJftZwJjFfJGB6cCfCGqJJ6EYVrjTRwXoSrax5rjLG",
  "key8": "tdVDLAo4fdcuUUQu8rQ3xjKB6wgxYXa9MFejWhgRwBGfwfYnhKn9aHwoG1iyux8h9ksbA1Cy7oq8mKBFpg3JRcn",
  "key9": "5KLS5s1SAfPzpndnNKZtNka7ANqHQXBgUPFGG9Tz2QEo6wtzqBg8KXdtX3cMh57CmkrvM27AFnqH9ZuS3Uyn7bNo",
  "key10": "EJM2rEfTZks2TVu6eHpk8Fwv2TRMEUU9JN3M5cG4y4BEZNsciydSCJb8CrGK6kfyiBycjmXZBNdnH2zEAvxZhuH",
  "key11": "4g4dHPGjAz6vCeRbceoGn8EhodiyVewm2tL8YHoguDqxQovL8JG3Mtrk9AeG2dQ4Zq8gBjH1isudK5xqhfY2MTr6",
  "key12": "2Aepbn3QEZ3YqopNsVFuznycXVico8qzBvDuyidanNJPtWj1gP8p3PPh1F1JjPtsLZy5Q7HDsNNcYoXStZRpxsWv",
  "key13": "5PajKhojm3oAssFykC3UEimusUWfpvqo8AcqnpszHV6tCDZeP9GMt2HuWD1VmHJXo7jeWsQkgzUtEBrFrkxHcGFb",
  "key14": "5uHvQZGeNpnC3NGqsaobcjaMM18ggC3hwVEC4Ty8fXWBbJRRvETCqWSGiTiDQ1uqWyQPBayCWpMbkztWYSBFhoyg",
  "key15": "3bPUFmDuA5UrhhmDAByKG6pn7Vj7YBdrxbsiVkenLVS8nPa7mnCQw4VXQLuiZmu5giRYt5QSidzyAteapiz4vM84",
  "key16": "2AsTKtNtkX6xExM5pWLDS4zmuaEC7EiQb6PP5RADobG1gNvkKvTgNwC1nzh2iKDb5CzGWTtJW1fi6HCaq2dPJSs",
  "key17": "2kKKyEu2wzr1eNUvwuygiKuLksSHCJhfw7hQXKhK7F6GR1TaMTs4GbJFDuGiaKonan2MVYs44BLYYVrE35armYqN",
  "key18": "2aPfaSZu8rs2FcfBcSxhfsHM6DdCWoXhakxUC7FQUGe8XABubc9SgctiwrrEk5njRtz7QrJC2DY5uownadwSYqPL",
  "key19": "LBXfUiLsUzEJhXyx5dNoSo8WDU5fcn2EWZjdmxzFEZQwC6uU95mKQkBUD7jQdKtLwSpZo4XTkSLrEKDzSUZcjv2",
  "key20": "4pRjThN1Yq7hQ2yzecpHQs1a1WJqMgT2R3wfgArUL3976dHsfmfexgJZMyemJAAtYB7kPTxcrjViZ8t4Uewh53m7",
  "key21": "3MLFaN6cKcCFzbHNUPVj15NMJLPByVNgxCNGq6TwQSJE6vCs3V1KW6YvwVSRejdQ8MJxyNYWVhFiqky3bNgsoM1j",
  "key22": "4RcxnWaH4HnLuZAzaYrXYj3yWaq9kYMTQYJ5UZjcuYHdVtduZtR6Lgovufkm3PNo9Uzf6cq7Hh583Hw72QLav58f",
  "key23": "5S3XpKX5yqRfZbfa4XvTgLxdA7kVowQZWQdhRH5TA7B2QgwEtvQ7LoWn9oWLy5nPM6hWmUnpHkdHfmAJ4FGF9Nne",
  "key24": "5gwHJqaL2ztpEHTEJbPhY4LHkkSEFktvFPfQgvg6rAWCAvjrcAsafbF9p63Bi55BtxQig1dAZjtUE46WJCctVaSu",
  "key25": "2w7gj6EjmSdS9DbSyqNCe8k1PXGVZfP5oMZ7NhYz3WGjp2Pv3jU4aLEouyXo4o6BqBKr3XUPPe2vRakqjTVQFA2u",
  "key26": "4Wf7RndoB1TUbAqY2RqLyKTgTqhX7Kw39uTukffqSex7c1XMdGM658YgNc59ifasAPF1NvFkZtNqR4xwibaa4W4K",
  "key27": "4GuBctPDRmqYpikapTdDDvLKPQG31UBC2TDSZCF8Rm5V5f2F4vNbfWRs5AfnPnTdLkPT3MX8dH4zi5D53tXvH2DR",
  "key28": "3EwAVoqJdWtfo9Ep9UYkcFYT3guV11knHdWKfwU6TjijDEzH7QbGEdQbs7eCyEiit3LAD5dzRUgXPgunZLoKA7v8",
  "key29": "4St8JjMhFZCMs1x8WAHVgYdSzrJVhBbwYuoiMT13C4qwXpMTk8H7m69ST9DyMVnnsfC26rchNZG6Qv3hBfcGnz3R",
  "key30": "5ZtFyqH3uziva6qaD4iHRtvaUsK9ghPuo2Sr6VhNu7fQCib7uo7vWhLLUse2fABhZDuLYTLruCCtgbGj2N1KQpjZ",
  "key31": "J18W3PyvkpiYaBnvuHbPP2AmnNpP6Lq4SkszHmk1G8XJcuadFxUAwAN65qDziLiEt5dJCQtk8vm3xKXcTrMgNxj",
  "key32": "64MyFpy39Do4RDsAvR3KhMmzjHFygkFFgiwMEmixHnPkmhUz38dCy6eB7u8WvH6iASNKPWDRjopyJD1gpFE6gYUN",
  "key33": "3jqHjGBLosFV1JpbaRRGKWpBacNDkVuE6Rv9xdRerHHyfP5ns6sejfN81EY3xYyiudnnRvoycBfsKLx3SCJtm4RE",
  "key34": "2Fg5JLE9nrjnbgrEek9ziFBsoz5vsFPnqAveCMW5jnTJiiz24mvbaFvdcqYVad2qnm62mDZFK3hLE1oevirftrzo",
  "key35": "3nTXhkWhMRa9t9wK52MJEGDNZrgoMpLoSK51sZB5Bk9tPYfXn4YuisTFppTrSkwJKYYoU5tq57mh9hCNbtDM1QhH",
  "key36": "25W958v72rbEAHVgx1hg62kSWuS75mUAj63FvPkZZeb7gSWDcSC7Ky14GEodLJDWkPY9PRvME29afeNxbrSozVuA",
  "key37": "4WrA8hsrvMyJxTjGFFQXru13rVPSDrpufWrVpuFarL6NXBRv29bYmkfgKhdSUdM4QcN9qAnTsnqF22U8dogVbuLz",
  "key38": "AKePwER8ayrjeqULgEEQQmTHT8VVxFPSPu6a5LmAWnKqijEtAnz3ZXxkAcW9UvM4cfiLpA6zF1YkQ1sS9joDNW7",
  "key39": "2zQ9pJqJvVEQpMAb6hzfgjKyc8bY2NLnCErCio5f53x5MmfJDVwy2kVv8roxvKQ3D7NXFgfCtddzZCgjtCCxcDDA",
  "key40": "2wfTRiXFBFjz24Ren1k6WYt1F9M5DztuTEJCp6eGY6Uv6EoBHFjj1a8ZfVZXBV6T3AbwgjoXqj2aZBMv3yYuy15C",
  "key41": "4Z2sbc4nu5jySNQcgTnFEs6od7LP6j4HJ7j5pVA9fUW3uhuTPuiX4X4CvKzgRABAYaHtTD7VtRhSu8EYwyso7CHR",
  "key42": "2cWcwErwz8hcykkesZpTdr31vmTV7euGLF9BNmYFbXtEoX1Nn7tqBhWZzXcdTqm2ShcfkmM8U2FYzkRsF9n7V41x",
  "key43": "67abufV4WLMSScAKofHikuBvhk6oLhPw9rkoBt9DgsXqRt9YQuqR89UqhD9oEXeJejodpjjXtsrTGv79pKW8K6F5",
  "key44": "4whhbzs145rdbgWUoJ34RsZH4FtJasir5vQD3YZL1o63pKpNWZnVyFU7pcHvGL8p4hXkRC6Tn5L4uQ1h86GZnztR",
  "key45": "3jXFGbAqMqtV7fGd4vSGQdQjQmJJYaJtGwB6AWAWzo12jTzLP2m6vev2vEM5EFmwg1vBoaGR5KvRxm73ne1RETmi",
  "key46": "4KZEjB6R9PHcXZvo93fiXZJkGBSxAjYrFaTPsgmjh3CinZVPp9iwyfPf7YxpSeoMz5TryPkAxvfEZmioa3yEwiyv",
  "key47": "2jbqFbv4M4pQwfh26ie9no4k3qxzzfUbW1FVCahvn4KTWF4Mqx2vBiaZrhNixAFRgU2KGjAooiDma9LzivqrZzqh"
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
