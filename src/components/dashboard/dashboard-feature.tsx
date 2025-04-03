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
    "5bJFu2B9XPy7K2DuicFxBrzNj6mXnjGxKUXepKFo9AKrLGqPMysFrUvRkPMnm8eyF8PJs1NDmFit1vWkEDSkuj4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FFz9NsChWrGUoEgAvwr7F7pH8mzqiUt7vc3HQMTtJJkQKgp3pUE5Fy99sBLFU4reVfSK3aStTPmg1KUQUqkUJm",
  "key1": "5qvqGbwDyoEZngcbwaHzacn3HJXa38kX88eqyG7XMbPonqn1efQp6qmrwUE5bHHAgBt6XLy3aadgFibQHXH48GR6",
  "key2": "3kVXib5rp8ufcs8QsnEufN5P2smeuFHq5XXQVVsRsXJrEjsr6np7xfotFqhaFKuC7hfrCfRnjHiYuCxHTFtcT7wV",
  "key3": "3zmfCeaTLjmFXSAscgCF6QtiTiPfGaqZdT32WzRZYvhWLZ8M8J8xbbQVyfNn827jjv6spC6L6yYfM51VVnDpdEcu",
  "key4": "PPTrBrku8YS1McDMLh1h2Y7RYdUKktke1VvNS3h8rPZXQp5AdfD8DpEaSseAwhi5ARtGjK28fwwRammQXc642yB",
  "key5": "34Zq2TF3E4GKdpaXKnfWigfE56bHpooxyVB3VHxmMeVcKWTeiiqQzPJfuXBTrjNAKVkLn1ieoNXzQwBdxggxfTwv",
  "key6": "p62oHCz6qEEEGuqyMgxedxo6RjSmLMUKLMNV6LJU4YrphTRrkArzXr7kPgLtYcHpNFJUJFBPVkEXE5U4GWRYKxr",
  "key7": "3Bd2MZzZBy2jJLEn6p6w8VJVAXZoussSKgfrTLgcwMHQHvbcqgHWDJovpJKj5qmK1zai9hYfkwDSbZdmPw3Rdjdg",
  "key8": "3RSLZbQoSLMiT4ug3unYVG8BMoRSLhMUgarzvJsK6ZU2MKkYWK6maf7YH45S7vdCAzoUF8mjTjuidkJSyfEHE45k",
  "key9": "3X7sXRcm9Lb3bPhF1SY24JRAYM8ZiGwPksbccU7xqEoitMrxMrSg2X3uCTm5eVX5Y5i26PgUqKq4abSdbyExbTsG",
  "key10": "536CKy22kLJG4B8ufRYbZt6o5VQ6UiJbrAnByDoetrks9J1U2rBvWeQm4TLdgQmASeyQDEpA6Y19bzxkPdchnyBt",
  "key11": "2tCoNpxtwJs79hqAW3KgEWJf2NFTXpJXrvRdP89vADSbLtHduXLbCaAgET44GF4cuVq2gNhxCkLG2rLR4rjsbmtn",
  "key12": "Hp7GprF7vJucdgMtRAQeMDoXFf9kfVQxXXcYFrwMksbweGDP7JcK6HEZoE1uk3tCLMGijjZDWSqFFXhqfP5aqTN",
  "key13": "5ZqoXqtbmzC9VvAWPot7u1AtgYCpTHBz5PVgc5Q47N5HyQLtuZ72H6ubpxCUz1VM8riqSYHWh8phETzEX38pCEbH",
  "key14": "XXDQbun1cbhmqbspcad32sj6bZt3npSPEgCMRNRFQJEXAgjS62aQCG6MTUrfepHJtsZEDRW9hCUsf2LA3TBMLxD",
  "key15": "5wEzBYwYZA48EZwA6LWRuTQAyXTDRY78SEug2j95hynJktmjBNySuVJFDqRP9DpYkX7gu8VHsSgJ5M6tahnTVPox",
  "key16": "Ni8kJRERdiBf4jWAe1HNcD34SZyeN9StjHd1y7k5Pq45C7z68nqHsymQAGBHqCFt5hr4fVh3obiBTc8RN5nnqww",
  "key17": "2HsLQMMSVmBqMqTbWr2obRxp44UNKvHFQ6jbPdLqGyToRWNzrtCQzrMRJTuPqRrSPmeN4fznDDNo2bjrWPvkrTX1",
  "key18": "3UsXZTqbZMgVVuvrUCTwVpFUBaVs8VUYjrcB6GsjnJZWCE7neDmQt4jTupTWT4rFXPX68vr7fghkmfga5xdKod1T",
  "key19": "29YfDcDPsfQyjnQmDAKb2dZUbeZHme9DL9ASdqasj3nVjuM7mHXawijJQWUYXsrBanj3D21GHndDvhzyEunUovjq",
  "key20": "3JV9kpFxjViLpo2dSK8yGbpUsAPxogNjKL3sGmkhmK8M2YAAhiEUivPkaw3Gz5S69CXNu98YqreHGiQQDZeHM9hx",
  "key21": "49d7S6STxcNsiW63fHxTe6LoKx6CUJqtyYeoNYfJ71TPo1gy5DmT7JhZ4rr2FS161NmHhbZTffzRNCUWL5JcKqWi",
  "key22": "5Uu117aCRnQFcnFhpBaa99LXLBaUU1TwajCYn1LDpTPC8ezotcVFz7MXekfknXYpVMDB1X5gVL96zGETse2CAFtb",
  "key23": "3RiYS2nLzUTBkfdf23ijWK2S1Yo5HZKsSbziSaPZ7HkHyTGET9zMrD12Ff9o6PrBaqdodRNnfxCXBYoDiXYvdmMb",
  "key24": "CKg2KvsWGP9Ynzcj3CLL8gc2weTHVkmHWK2RMT6UPw24BgEwx1qWHtWygAzBJm6x4kc4YdMpwpT6oQmBEKEqGfs",
  "key25": "5awZhNeyyKhwKi8GMes72PqnwA7Am99tmy8BnavgpPxMKBLkYW4K8gTHcYgfhqmzLNibbCkcKzydC9Av2zEumY6X",
  "key26": "3K2iq4jwNnfv1TgFeHbmWpzyRxcRxmGTdjhWr1QDjNoDHsFLpmuGH8HdgBFwMMSib7i1Y4bibrNnhL4Cao4WHYVR",
  "key27": "2QZFAC1Ud43K7vE17E87YXZiyLCNXpJvVXBYFYm8LqswcAfaKxT42jFGzYCRGps2KvdubyRfs3yTMQfFYbrTqgjN",
  "key28": "4uqti1krkfUUFWaRkyAhBW1dZPcLZBdNLFExmsX4SLhb1nMVEHmBggRcb7NHiw8HdZuiCGGKRPD4S6Dvxwk1FmD7",
  "key29": "5PWFJrRTdUSyVSwus8UJmjoHkde2fHtFrGRntYHGoAzMXdVtvD1MjYmDGRc5ZuE99Ryi2AHrDa4owfUNxodvDg5w",
  "key30": "3DL89gif5psj6WLd63DHXDYbWcAHeukemY6LRd8yH6iezkFchnihkCusSUo82kJ691pdDmwwDeqzUhqQopqD8z6j",
  "key31": "kZh6ZnZQzXpiakNHzyUpbP5c23F6JprTTYTxc6bWCfrLS4KggELFPWvdXyVs9QKfeidNXCzyadaeNbM8XUAn6gA",
  "key32": "aLbQ8nS8xfAU6ySRfzNym5MmaSQ3r8SqQRJuKveqvntF9R8yxHwovBocmn6RRs3WgmuwZfHt3xyC7S2gTKfRWi1",
  "key33": "2cLEF9rGouG7CpAAei3M9LbfX4uEnqqSWSsrWkqddpY3YdVm62wzjuHFzN6rhexuqqHzLVh97wRSTkGv7heq5ram",
  "key34": "3kKBDmpKpvVqQYJ63ijJmzQAjbnY6JARujxjk1m57URWgAR8DD4yYwFtjWEw6X8iJhDeDbYpF258gqpk821o1FG2",
  "key35": "5cTJSWik1PpaaVtABcxwEiJfY1fvbP6oCKaFX9mUtJyT57T3TSdddagffGBq8DKuGHSAxHjRdDS8yFbAN6HtidXG",
  "key36": "4RBQST9HDfD3NMCW5ecTufNQAB1AdKzdznudom4k6orcWuNvBsoCq1HB2RG9xxsJgYvDwmkrwrdtpQtdsMWccW1i",
  "key37": "eRufn411QNBo1ouABQBAQg9PbAX4aZw8aopkxDbCX9Xitw2eGQU2D7TL5yNQ5PWSED9tbnbMpi6mZwZwZ6YxU7b",
  "key38": "WJ7wUaNsCvAe98LfWLwNtDQAT5fPqovjjJom34kZku97sdMqFHE2URNSFnEJVuWe8ygz2hqiNV6vmsFS3vE8cDB"
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
