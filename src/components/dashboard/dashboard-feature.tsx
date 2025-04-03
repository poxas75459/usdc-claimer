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
    "4fL8mhwUD53pt1KKdTQtPn39bzadpF6YXr8JhyYaKACf7HawVWZXDZEDJ6C74QG5qF3fTnrVhkD3QqLgnWkoSPzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mwfbjk1Ds8iKSjAYNzytC8qX2djFmtDNtD7RD8bGpQtdP3QeeoXCggmJURcLUeRJzsfThzKyuHtENwTguN6FWaT",
  "key1": "L1dKzWXwFNSFj73cBgGAz3xcWxa2EP9hozETHiLi1gyHQMrWwpBAbbG9aoKvuruvipkUHAU7cS3o2gfQ1YUPiZZ",
  "key2": "2RRt4pXsW61tyoJx9b9v4GcZzhp2QD9sG1xYbjMrpzyqMPcBm4jYgeSfDw2V6416gbb78dkpGiXdghTHYXFvFz7a",
  "key3": "56bZYgzebUBqhSW7YHLihmaezDUEae1TUT8VxHb6fpfgFrWy8d61P5ihWgesDYsv4PUtNwYxvdP2LY9KZvyumKft",
  "key4": "ev6ZGCoJT3vkqT5r7DeZW7Xu4rdJVtaDavqyL2BgVPEnrVRJ2GpVqG9PHjTGwcB1VQKMMFiZg4F1NJY69Dv73fe",
  "key5": "5KyqWCmV32UyCpadrzVSRF8wsdEkAvmuDzaSZjkC6wnGxH8hEdALLgKDYLG362MJhbLu7g2AB24ujukivipgPKPB",
  "key6": "48YrNJp9XHgrik6w5wkYerpGC1hfCML9nx5gZ2widJCzXYTN6gk8CkQBJ6PY9KjewHUjWJJp3SJ6HwQSc3s11LPc",
  "key7": "5Apj8UW6MQM7iJZNazAmywJwXwBkTrN6j61Rey5kyzQRM82vTwbjhZmPbky1g27ZQMBGkj3frvZW71DrELjGJ8Dw",
  "key8": "fHzg96acD7vNQCapaEGq6MChyH8ym1MvKjZ28EEfuYTz2pJMryRR4pzZEP7pGWduTTwVWYLCNj3cq3RcbXr4REh",
  "key9": "37629GLBhM5eynQUCrDtJQog5kFCWpFiDq8yEjphAxawLKjLqX8N7M7oihHzvEKrvhu9eqdVztATeVuhVcMDDT1d",
  "key10": "5X2UnAgLSVty4XadrJ7ZPWzjJoXkWMqhqwY4zXoC2EEezC46eNV6mYh4uREGkpJRZU1eYsDEf5c79KvP8fRsayra",
  "key11": "4YQvzF947gf8x1h8uCDW5QxdUW7cgFf2TJuhrZ24pKPWGpGArmtVeRas4HK7x9sMRnuVK382Jk3ePLuT1RHST9y5",
  "key12": "2hVtDhq3ccmxX6s2ezsjasLsbKtGYmLPaYRtKrfz1Z9PKkfteQcG9iGVpEKiZMWgw4xdd1ZpNiScVPr228CVodAi",
  "key13": "sjLE64eh6M8JvzUvFAXCJquieD52wVn2joHBuQpVrDi3kekxfGbw86e1SKmaDhRprAhvi5UUwcrJcnjrwaJ4Hwn",
  "key14": "5yxXhVSuSx81qw5xksPkAFwG7LhxjXrW65HdPsdehvt1xVknbpzHPVyNVAv7nzfQScTEgbkfXEDo8tFSR7RF3FN8",
  "key15": "2k68yWkRStXZ3ptKHqjGAwhUBVY55RHYLL1yCJCkp4tTqZjUMUr4qJfy8hGfbdoF1MhJr2MW5txDNtut1xVuuvun",
  "key16": "41DhnovEKTrrCRXAuTQnEhVnSsGQgdumRa9xrxVQYTUQVJ9wX3xbZLtYouRPbQ2aAgA95Ywv2x2CLsoENmHGAh73",
  "key17": "8dxAZBuRF9p3bFrSP6cvvxwoAXnp5RBUmuJMEUifJPQSf9fg7kLcqYTeHkqnUpmoFwYHDVH4Kydk19JqudCYbG2",
  "key18": "2hctw8TzwntG2UYzwLdpFPsLgxDyJJ1A7KAR9iZZtem8zvdbHriNWx1ukJhp6p8Vqm8ENGc98HFmSs6EKVn3ypAd",
  "key19": "2qLq82qzHQr1Ft5xmFL26JSzjbnSrucvNBL8NYxUh6zTBKfY4Xrfzz3EMg2EraDYSsnXQj4i6wN7SsGi7wxPqeCH",
  "key20": "2BRZ7M74A47DkDawfdnVrKyDLQ4wjAT9NJSApvFQ3maN3nGd6Ze1tds9B8jAJtxbjJCeFrW4vJmrhikSgaFtUuF1",
  "key21": "5ijJU7Rnkgbjq7D4i32YkKJc5drq7djjTe5GsjK5LmQRnMVoChHfu8gtxAqJdPhDWs3MmdroKF76YcVnU5qKTeD7",
  "key22": "3hb9HiCfRpBFJetpBUwJatbjF8r8xPMqupHwb1eec7SGuaSpZoouiGKGqfn7g1vaoEwtGCfFgEGkHrS7oJCQkd4H",
  "key23": "3mawxiWEr9PxFFQANjmHdjHi1M1T6JMPkgmbE5WwNxrvhaYeCQYH7e41kxHFUzbdNkL7X1pzFoRX1j4AmECPWfsY",
  "key24": "XAVQEB1pB6LsavjtTKZYU8t5Lv8S7MbDrLdK3PGJzWNxuTpzMXrc1oFtzGwjhHe2Bp9CM9nJfaShX5522c5pqY1",
  "key25": "5WH36C2x2fSsozcT33HXs8hmpzC5eRVZcQTGPfXKq2KebrE5nwQsMbsVUz389N25ksydEQTDpQj7YN8H1ULhZdrY",
  "key26": "m29AW9ZGUpSaDi5SWXTpTUB4gMmTR1XXzTuK6cdSB9QUoKeNYrzmpxTM5zw7CMfkXhDcwDk6QPE277MxaydBWhQ",
  "key27": "3eUjMvqPYTnFXqt8WgDDKVvPC3WnCSrTGYp8YKDszhJtjYSmfwRmSJfWfY1y2yLWWUK2JFfHmG32ctATWRMTRYJt",
  "key28": "4dMmch2KBEDUuiDegkgAgSG2yfXY694g7h6PWHbp3RV9D7WrKYnWWAykoaTcS8XUZpMf7V1JR36NR9yxXTZyW8SW",
  "key29": "3R3HeizE6TJ6ZANn4VxVJAEPySyd3YqHmUnpdu9sU4sSoio6ukZWN861mWRpFFVmnWYNpaQckznSoafNssNhcNHB",
  "key30": "3TeF53ZRTXvoynGfYNJh4SknqVdXtpxdtWoe8TAkUNeV82hgKHzxZdB3aqoRHXBbAstz1oJsC8pGCB6WkCWbQZV6",
  "key31": "vcZ5SdyX9WH3S8u5BFH1zvy8hkopzfomUm8F4zTLSPt3K68dg7h7ESGJUbV18JSZtAvdM5AkauzXFZgAm5JdHeL",
  "key32": "2hLupHzfk61aXpQbpuMSfJepXkPGac1XrPMVwsqUtWp11Djnpvwv7KNEbqDbE15QqfaCe3EmG2C1DV6wJhp1XpVh",
  "key33": "34QWhuwBaLNHu6CMVb4GrcK2C5ibYKaipYzQuDs8Q2GWZQ6THgwD3FfaiEKfFi35P4HQYQBf2Q4yETewz3CrQg3J",
  "key34": "4BaDQWR14keQGh6YtGCiSTjkhN9Xog8DjygtKbsFUD2psKA9GAaBjvmtWUsS6fTRSYqWWdUE74k5u2bXMGcJ6znN",
  "key35": "3FvN48Tx75TCYcciVFK8uZwuhpmsFpqP5xhACLnUhDVL7DuTsqYwacM96ggiaDdUhqobvtzoozw8kq9ngeq6csge",
  "key36": "4ykBEAxGQS7pqWXt8Afri4kPUH4w4eK8HqZGNBpbfh287sR7YvXFzDv1amB7WyDX6TNWuHFJBDv2RJNe1PrzJNkk",
  "key37": "2cwaF7gU5q1R93vf4fjBUce7nDSMTAQ5yVznRt8gWvszYAHRfEAvsq4cjJ1x7qDRQ3HCVy3EaymRn2a6hsP21wdd",
  "key38": "2N5sZRnKBxkW9LmZijXfxwGFr8Bn8Nh7RsDuAvk6YPdeQAVyu9hRuhXKf3av9qCeGK3dMJ2dFGx1jTGBdM9vgZnU",
  "key39": "4fRUneRzsqRoZG4UASh1HEd9VbizR5B7TDjWe9TsVofLM8PgG7Tc9rryqJ3GUPsF2HpPwgYY92CBXDA5Acjj7cJ5"
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
