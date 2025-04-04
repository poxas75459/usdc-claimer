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
    "2YRaMQDXHNequzU6JtgYS7TeDRkfhr6G9SCdbU9uXRp7eKfhJ1WWBDpvf3KNFr9pKsR4ziQzQsnvM75HVBpnDAkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJQCcsAntf4nK8QJzcuUkup47kjfATH87St3WuqNYekrnnCLtPkQoHxPEmPF4Se1xbpqtWXSuxeXAzUoXmKi4nN",
  "key1": "WSuZSRETeZr3taYbrQFouiSkYuw6oByhehZ9kvL2NVGHMRvZtTHV4cuUfmYghE1pdqLMCP217RBSZ3nsmRw8qdc",
  "key2": "5EvQsQNr8n96TxXYjYimWVvB46v2LjdKtfbrcWmJy4UkXzk9zHugEQPMGqKdyb6aYuHVAs22DLtaKy7ZDYMk1SFf",
  "key3": "4TQkVcDi6dv6tN4MMs1odtCyctjGwmVGPHmpBh52XHY5xqojtv2EXQWPGXTh1ZVECoTQYPHJdXeKKRuiRhTYGtkP",
  "key4": "3Th18qSA8BH2SW1pvUMUU48Vq92E86v43DubbuqWACB23iE5NVh3EAF1Z32hMrHExEwTKm98zxSPLmEvZ1QY7xtQ",
  "key5": "5QkqaYE6sDWzu9qmCo5uAAWVZdM6BeGhA1e7K3VCquoQXdi4ezwZ1pMdHSukqJZc1xHaJwCTfzD5ckFKpHqsMRET",
  "key6": "2Cfohwk4FAc3Mh4jthXN2kapSBV7CEky7ezD7icCsyKRBfdxyRzcjbTakoRvLUr8eLmQu252YDhZ5bBjrP9qPqM5",
  "key7": "3Z4KE647EnjsXAYtRMAHZKoWQNJDK66spGccd1kRv6mjn6aeooBAu87Yn2Av7in65xHSnKYXvjhjnHqKV4hf4irq",
  "key8": "2cq4ApJxugeHP3iHQo1WJGjwd5wYuajc2Kon5SswYRx56ZdbtGiuQes1jJcAAJsAmroXfeQ7cB1JVrpm2T7ZLpWY",
  "key9": "5v9uV1vivKXYur4EhTJhEvLEV5Xa5yoLiToamM5Xpz2veZitdqH4Ks8aWokhi6J1zDv2LDPVDxmeu3httaRqzjZz",
  "key10": "3ECmFnYkAjgP45cogaGat8eZ8HuCy5AFuA4WYFmEX5Ggc9PbpLuYdWH7x7GGD49cVQL4gC1qBGh3jgByQySJoM6H",
  "key11": "5XG1T2W7bbFPDC2rhcH8qRXXq3b6M2gG7qHWDmd4QKyKhDU4tatDrg5VA4b8TTNnG2CpJjVDAheL2f1pnyWaYtsj",
  "key12": "4KpV3KeVnH895gdpZ13LrM1yUuDWqqXdGt17fwpp6GstV5LwgZKjJv3gpDhF8LNUvzCi49oMZ4AJR7LSxG6X1NY9",
  "key13": "3eGcH1Fv5eNiG5gRpQNoSk4Jv8okGk6XUr53RwynYHqYo6tkdZ2ZYGuWtkugsVk8c3VC6CbUS7kpzDyams1iMJZ5",
  "key14": "5JSfKEKqPXwToGS4kCay6v9nvr66fDYFvJ1uQZzftmMJ8ChhpKaT3useSYoJBJgG65hkfAYf4C1SzctxjasNS56e",
  "key15": "2mQDQdVhV5DZzQ9opzFcXnU6whpwvYM7PdxDvzFhDz6UW7FCjWPjVjqV7rePd7A39HzqpKVxMN6C4mJte97tLZLM",
  "key16": "2GAfTB5z6CSgrSDWpun7BRPjSRGy9rByNkAR8EcN4riuaqnRcqFSUcekaBPV4Ft4Upfp63VZn2zaiuPBKTwtMNks",
  "key17": "3BpyCZJ28tujDcXD3dFHSXkqyDELR9fGo2ycoLeLdFEfBQmRgJX72u28chPhv9XdGG2h4Mjfv41aqyCNMGZHtHhc",
  "key18": "yJUrnGydYCmQ5FRZeb5aSr2Xj1pf1dGtfnUKAUKXX6Gkf9EohnzG9ixbqqTxtKSdDb4dptwExRLKQaLCqw61Q9j",
  "key19": "2zq1YyYNBg87MGPdCB2NQcok74mPNRuXFawxyPyMaQX4ihmBADGJFvqqmomRVRxsuyqumWB7SaQhUUCztdtWkcBt",
  "key20": "2feDQTA1FYd4ceX7ge2tx2LiD9Rj1MgtD8ixw5GQgrksQuT6kApv52pYLzxDuXUkWcSjZf26WCJCKZnXZqFg1Xn3",
  "key21": "4MZJ3oaZrvg5ht6iBsJjJkw54VW3cpjKQbVxRenNFV4TZKasYaFpzB8PKvQXKHUWMAu5GHjzScAurfUjHmZCTqoX",
  "key22": "34N2gs9DMcbvcheBPZLVt4DgT1QEDJwQWeiSymu6XQN8pe9NaZJ36NTn869BQjPN3v8i3AxXRSzm2osfxzEAfLgW",
  "key23": "5nPFDoEbQGd29PoTVaYfrZhqcnuh5HZeFeV7zSBWz861yjgYwTC4esR63QDyMdkFVZGucuokUSswx2YE3ynVh8MM",
  "key24": "XSyMXEdsDGBvAViLseLBGG5GwMK2cFqoQQj1stgyViaGTGKgMZvLUrx2Kd8RNsS4HtRp9uZ8qYcfvVajPfKRDuZ",
  "key25": "zftKEz6gXVJRzQCMmjWCW7p7K62fyf4uQSNwvY3EabdGpzJs62G1e89QUPBWHawA1Tn9BhHsWPesw3zbTFPGBpD",
  "key26": "65E566JS3swxiXcDDQ8WwEwdAZZbccWRznCW8bqc9xkbQjJ4XM6j8Msf8vPJQ7VWkrnQReewFvURKG1zg1xTpxU7",
  "key27": "2cSAcsRJ1mZQTTUoe7mZUwar9NFrZj1tXRHmY6dnp8gauSm7G4PUxZpRXhHCia3kDNTQnDNwfBK1ezZSC1U3yN6g",
  "key28": "5A1LUhZcpRpeNTKvtPC2kedr9SBGw3oicEFsFBf53hJDJWiSe5BPJ7pSpjUDwmNC1E6Xtc8rgCtrWeuZJM8cAfet",
  "key29": "62CBBJAUGtwgJfiGCUPG41WvACLfxQH8D7dDaLBG155ujUA1eB6Vsjz8QaCxRodAozP1xSXoJiQdPAv6KJuFzCub",
  "key30": "d74HAQBP2WQmg4Z29bvrHxUiKahHns5Tnb9G5BkqKpgnAZESuzhLaxwJ1sTUqpRhAzse4kdjLchmQfyicWGorUb",
  "key31": "mZSN7UE7fDRqKBMuvLP5mHxJw7i7eAQ5GtAB9xGuFSRUjZrTyMoFwcapE3hCyA5x8HfzxjkbseaZDHEVMnzcTuT",
  "key32": "itqAdsi4D1GdGFWcrY3cUpipbEKw3UDGMpdippuQqXNFndqr2kkP5aSNJRQVivj7gJcyGRPrnvEG1K53rbuCY92",
  "key33": "3o85UsAWwgEj2BQKhrEG6cP2knzCKkMd8yipyTE8rnY1bWtKXmauKcWHGNp4AHRKtJKAJx2ehrxBaSxswvLUYK3o",
  "key34": "iuvD479RYxr9fr859jVsDD1kRMAK7HgRLG7XvcfDRBoNUrTR6CtRJrMF72zwj1RwRkTMu5mLKxPfXoA7T564S7U",
  "key35": "58dcyxzLgFJwmZxyDDTuoHugPGdwjfDsTteoewkWSkG2UexCwCjJ75KxxRm22QoJp5cKLxQ3P92TVH34mqzWkJ7t",
  "key36": "64gCoKa5dbZtUo33XXBT8HvQGVQgMAzg8ySbFiv6aEscdXGSXGEHaCWbfoUuGpk6458hj8CURhbTrMevbg1aB6QH",
  "key37": "2jCmTfhTCYoXLKQFcwb1DCkyfWLCCseyyWB4BuZU6W2MWdrB9LLedJuVSrnCSqvVJFY7bxHAZM84CwpWhbup7wMV",
  "key38": "4RYfYfZJRnLRkMhvHgZ8YaERsHfLjSxvq2skacgJU7ebMmGtYXGNQmf27iaLve2d5mmJUSRnntkdrY6Z9afM9icP"
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
