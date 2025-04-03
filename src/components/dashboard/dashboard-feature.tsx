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
    "66CxzeWij8Cf4HGvXmPdHbpaHfUKLBBrCtVmdR9oBWAFYivvHkyFVDwrYAuzuU8zWS8FgQLiNx2mE8n8o62QLD14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeDMKCSoQw4Q5yyCEWCxFxDUx2bVCmKM1UkEWMBptKC19ENQe246MFbUEBTmLdvRcCT3A1akqKRunm48GTTWbgc",
  "key1": "CV3Ukm6RZLWuZpg6heVuHh5okoGTKRWfEXWE6RuhRarqHdhF8Wz9K3wjffHW2q8AFrj8tZb5NSAiQuUt3W8fGwL",
  "key2": "36w1F4hpCejYsFNJL3rKo9rmZBjPxm7etT26JFfwGVMkhAJgNjFazKQgtqiFma7fPFX9hKPD1Bp6pg3x1B5qvqtP",
  "key3": "64Fjb5HnH8NE3gmxPkB7p7nzmaVasdU1jp8rQ9R1UqCY1dzyLpjgy2cwagTgmVVpAsnm34CJnjrGj65nr45Dk2gq",
  "key4": "2185ktTRVu9DNk9Ty5LWzu1CbdwrmF6hCx7cFeDNLNukNYPZs8xkjLLBpFRV5qYByAefUjfPc3yFngFhF1xz6K2N",
  "key5": "3PxnQtLgaxDchAuU1tR4QGvMszjx9nTFuXbhs1XaSRxaZXizxWaWfqPbmhT8gf9qjd7ZLCjUu5zuxYgeHVGrRsAE",
  "key6": "3yrDRZn6xmajeY6D4xFgmMUH4R13VrVptshJmi6Me27ssTQvfHM5HzGzQPpQAvRQYk1or4wBkpL8T7QN4Rz2T5Vt",
  "key7": "49afrKxbvoEiwTrUtcARAj5uGK6ApMZZ5xN1WKJLPF3vHmokzuVsKjZavq5rWMgv2oppaivtGKjLr9UKKgPCd6kq",
  "key8": "23vDhkCkuZ5UN3yPdyxCGP2ZD1HC26PUFrnivcUw5tfUxkHB9zQ3H3QBJnDK6cfUMn718toqghjAzfXcBUpCoJEc",
  "key9": "4AQUG1HpMsDmsNy8iDFkXM4NYdUjx7SY4aGjSRcxrpBWtvUEVYABPF2NAPviRXGAtJWDGqbec8xJwias1VyuBiq",
  "key10": "3qTgPTDtyAJUW2JwBtZ8gGpHAFVp6Hojm53b1pWQqqfs53Ht7hJ3kYpfZQmTypgEhPEQzLHGjhNc7eSnVwHnUUtb",
  "key11": "DP7bQu1QF8oMsb5NkghUaqzza7MK5QJifQeaYhpVVzZk92fZcjmXHV5Btz8LfGmmNXg1UAaPNafp9Y6FzyDDE6J",
  "key12": "3tujBDu3PCQ7YHrFoVUtWtaycKoozFuQvEnku55YYkQnb4mn3GEoSqrWHfiuXe5GmHqbTB31XrYQ5878REaYx6wF",
  "key13": "4NyHc7fezfWDEYJuHkfQ6C3YdDY7zRp4qFRu2X74eK8Fzkx9KcAi9NiuiXmLgfQS2yEr29486M5wGTGvL95AZ79d",
  "key14": "5VSTbpFhAM6B2jgNyFrBxi9xidoHUbh3NkRWNUBn3SMmUT8mpigVorTKakgK828Ya9xUiJvxRxDpPwCrXLpxh2dx",
  "key15": "2niW6CHvbNcu3VbEyrR6qSyNi44B5Q9rrn29unCrh8SVE9WFhYAGHDp5zFWpZXdGxfBxjTdxBfov4m3afJeQtaAk",
  "key16": "31DiMAiB1RHfqvZM7JDiz9wpB745RzfAS3nFazvTowLd3u5W5qGviiSLjpzfFTQGxRpnx9yKWi3eyJnnSiEmddyH",
  "key17": "2BEFBnvosLHRoArTr4Y11LQgY2SGFSPttxh6sYe9zADvAEfjvHKAgqbiqt4ASSB1Tt7V6ZRyhgcF435Jn8UBdk3w",
  "key18": "5Gk4a52zKvHZzWyRR2geWvVRnxZknuLVHPiGJNG4evwUdjRFS6vJ1kwZGcWGAAtcgfY3S3gDG6Pgd3h523inWwxU",
  "key19": "2DMzQLopHfvgoLHy2dws4dBopokUsDedNccgxH7UDi8vxgTs6VF1HBRGKS3uPY5WCdUgfgeh8kUfChe3DDpcosgW",
  "key20": "5Cmuebwofq2k13mXQrCG5dFY79ZVtt7MehVmgFQd9wAePcXyHMK2LFQFeHCFE3LFkbEeoYpgtWWp7ziM1gkChfRo",
  "key21": "5KDLdcNinpsUn1t3LSFPedDvzCTcmEjyBjZpWLxceSb7H5a28HGtB6g3v8iZwwTuadA6421RA9TCcGVZGushG4Uz",
  "key22": "vntZGRcAYLA5RmGBSoqvJ7qzBhAiKwJ2WQLDsyo9udHK32eKydbtewXgJQQMfnXTEudmgUchZrz3bUctSsctmWq",
  "key23": "45mx8MiBxyFqJ7vP1AUgc1ysE3XKRnXaAASvaQJ6k95mw2qXWheVqCe7KjtE2ga9nfKDYZ53S8rrC5j4m7JEcqUK",
  "key24": "5irSKQsnXbBEHrSY3qxeg9iM7NZbsAgWh9mQCYdMwkRkoVemuF24AFy1aug7tcJNwBHMeXHcLfrGwTY71V9hK7GJ",
  "key25": "aEANaqNfkJunaNBAvYgfQxUq6joWLWGpPV7JThf3DKabacDP6cSQHsGFvEm9Kst7aczzXuxYsootAdrmBkozj8f",
  "key26": "65A5pzbu9imWsRC71ZfUSPW54b1Ujd7pHisUBnSfBKTT2Sfam6e27oLhuzjQHYT4L38Y5csT9RXxXCANhWet3rmH",
  "key27": "4dvNZ1pLx9NK8Go6GWpLkyukBTcovEas5L11dpa2fP3UndT7PYWWBQtVy8SAFCJeRWxnz9m8x67LYLfpQdEb1fGU",
  "key28": "5TP9C9AYHbBXzCXNL8s6AC6u4GXAU9m6ckox3QB53YkRNPLdVHP9r5dqzjtuR3ASLv4rcshHkDdgVZhh1UksKW3p",
  "key29": "21zHWyBfC6r1BudnYzULkkRi7zR7jSHz3upD7utk539wwm3Dw9GewSGuWoUqx5SjeArB3UUeSsg6ie8bbAJZBWfX",
  "key30": "5b377yTFCCMbtx21QHLG9iY4ZNAsdkf4P8Fwyuag8m3jypjnvNP5Au2TvyvTzb7gQjQD5ssnpR4B2HsVmV2DeWbn",
  "key31": "25c4d7ZTYC1HQtj2zjEF7wQ3ZwmHu3FbbvswgahctNg9rLWA8HNems6MawJiZhxLvi1W1ktBhPaeLkN65ebqs9Wt",
  "key32": "4Pb7ncLnQ6UchNKBLmJD7MLE7ALyBg987ArCjGhTey4G7tMGeZ1HFf2knDPWBQANKfzDNzoWXNFgokXJeTQ8gx2g",
  "key33": "29JR6o4Ck6yNhVGz3eGnDshNN9qm7dt2WfAcqerryijYAhJCG2oBftq81naj49s2MmxzXbTD1ZaToiHPom1JhTos",
  "key34": "dc1dETLvGaD96NTU7TGQRUTU3y57WKvR2UGSUSUnriHc3CmWWPQ15rHngKj5CnoVzt7UiW6Qr4L1itiNYmzp4Cb",
  "key35": "5vpXEF1zi16eiLvdkLZR1j9kxgrNb8xJJYv8WszG2HSU7TnfrauAwNTirYrXXC9NfwzFUnrtUfApabWfoCbrMqZa",
  "key36": "AGM2ibKaw4Qq2t5xCT6dnqwRxZYhRXH1L1rMt7MuSdf88LsGh6J2x5nkfPULAR2nSpNaKjnTYHGFnQDbC3W2b3q",
  "key37": "5PZ8swLaKv76Cepzz8iEw8QxBCej4wxCtwnuRueYV5nKXJpLfih2kAFZe6Ccq1EjYFm2toRgqoRsB2ujcaNCbbuo",
  "key38": "4obJkDHu7HxXCF6FAy96Mtd5WXEwcyP6HK8z8jdi95bG3rSFkgGWc7328Y7mqAk6RCHyWxMRsnCPxn4ctkzmHdm9",
  "key39": "4THuGSJuRcGxaaKfDMdNkjZNg68cFrXoPNZzNFRps6rJdFMhFn36djTnr6n3sjv49mgcVvmKhbHMNTcETQ3QA8Pz",
  "key40": "345a6f62tP4kS4ySHxmKAYf1HkDhMrV2hh547a4LzVMjw2ToJ5K1wY2n4ax8xpNJ4pUiCTmwHX5Gjc8eQeuBwCg4"
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
