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
    "CGWFmQua6pZf3GyWnS4KHfUDSVsW6fodMpgpdSueeW9Ahr4JRSbHuceSuUhi7SzLC4Qt6iMP6RsLeXJAGXCoTJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nitiBNwEXt7rSvkjJEzrMji4BT6AMCbACMMqiMMR8PP4U2io7Jj9eQj3cW6SomiVS8bTgnCco2yK2g3iGNLKpiX",
  "key1": "2XfeQjMmXd1JAsPH9S6HhVkv65gmwQzppfgAgAVnVJ54RBhn146UkcXQnNaXDBmNySe94YVR9kTNK793SGfMXQwS",
  "key2": "4QYEVnZ7WpKbqyc4XAdmm9s1UyRR6UUT3hcTyRmUTMPRfL9u9inp8epDFcAG5jDUiD5s6wDqFTtcUfRme9EEfgsT",
  "key3": "3MgshtXVqGEFqAimivxpEooYzHVDqSJZrWa33CTYMJ2Bo77FBsobbZnKgwfxvbzSHJ6triDyuyZfAeDtquwxNA2b",
  "key4": "2C2JBRbcWpcsgw5k1MyDaLwWykARHigXNRaFTfhCARHdTztquEGMjrFRrTT1w2GxK9GKszj3JTkbju6zB1FR7F5Y",
  "key5": "hxWaFWFxap7AVTr4aVeZgBynDRuyYt7S9EKjVuiLbbGQKmJfpSF81UWKY3rXiexvms4HrNoAjpx49SxJzuLoPYZ",
  "key6": "FWZBtLBAyb6rd5Ai9daVyVzXR5gQ1sacZfZTNEYFpxJmSVx3LUeQyeJdWeDFKg2WRoMHaDoWwJqtdmaqjzn1hKj",
  "key7": "5gwa7FZfKKj9HpLcconfSD49vDDqTfn8oK2dzq2WzTQDYNigmuYyigzTvYeST2YLCDpv93PedJc8Uaj75DmEDCNE",
  "key8": "5d6ESYGkvn4Qnvdsban8qUtjs63U6f5y7z7uKGDBmjZY6JXBp9xyHqLJcaS88tKxKPMRdo4kC1jLX1EdCpKgMWhn",
  "key9": "2pehQGdxGnbVTDubkLXJNgZ7J1MCUHuiP9MmfXhDWV2Xo5Hs7SmqyqxEJqUgM2a6qX7YZrAmxmUXgXEMk1aaJvhq",
  "key10": "4KWDRxLk8ytf8dCHfX7RYGWWpyGJMwP699VkrrqQxxXAefXDCk5rVUTXyTr1Tkr6UShvHf9eh4y2YJiKBdyF9sgG",
  "key11": "2qUwUo8SyypsdB7yJqK5jHQnQcHis96H5cDRQHNBrZjeTejAMkBmoiQLR94vsmLfSaNsxYTAyg9wsagwqQAVEh5c",
  "key12": "kWdNuNL9hsD2Jh2S1TBqqbEc4nUGfDk43zHv3z6VbNUBNqgYXftuWZL4np6ySD3Y89ehdh3FTaEzo2hAzUw6urX",
  "key13": "2Xts6JotrdXj8DDspuWY76hNBPDZGbyBwMefLuEC6URReZ4hwqYsAqGieLHKB3sD3P437k5TbU2nWPyPgJ2RcdFs",
  "key14": "4NkEHkrmMEN5mAsZtC5tn1K44e53NSVTzxbV34t62Lk8AhosLeSWio7899dTF7UMiJS1z8NXwhLNtW8VEgPQFRwW",
  "key15": "51EhMRSEYFpYtvJEa57PiZ6cdzHpPRPSweLrVRkxXyqpMa1wLNpsXxTzpqaH5BtfBg7LvEYCkw75PtG2n86BEgFs",
  "key16": "hNd2FiFRu1Rz8E9nuehSYpqsL2zLNYGEmfHnkAT3KhqRYPLfaXY9MaVY7YosyqwL6qDSJbHf1s59qUeiWyPJkG4",
  "key17": "62UoMupTB3hv2cPH9u3QJkSQTDY941vatynhcKgw8DYnmh5RCAKF5UrgsYsixxMtfnhpkEpBq57zryxgFZZGzkC3",
  "key18": "2n15G2LUVFJB9DvJwFnN8UBgDWjxwviN9duatoef1csZyi6RFoDawUujXC4Cd47xM5ciiB6rAq6cFLonCFGT6chx",
  "key19": "5DsRG5TCEUVQ3J18GNG2qEQ1aYMh9gKR8g1xY33VtFncneBYzDHFZa2uFAqKRDPp45euhvCkoG22pLDXB5V6WVsa",
  "key20": "2Xt8LKXw9vXjzb3FnT4d4EeT5EyDJqi69CrtpZEvmcx9cbo5Pf1PEzZMq7wNv2cgwsKCkLB35rc13UaYnMZsUFNG",
  "key21": "48rW8HYmDUR4sqLbqNvzJRiKK4VPSmiBrKGJBPLjc23JYsB99TnQ2kJ9GQNcrA2pccYVQykNGDQQsC7NQSfTvaux",
  "key22": "2CJv6dC12JCH1URg7GvCePWhxRPkzzJD6wy1yqdztumKnpq5SDg76sDKFK9SC6r1zNZj9voUJUCKszEUkpzHveSu",
  "key23": "49B1EXkUqcP6PuxuqLJMLnCL8QcyBg8ZxVe54QphJYGKjTe9B8AHH9EfCPDpdcWMruBdG2t5U1W3mvQxE6vENp2g",
  "key24": "4WeCXGQ5iNL6Ao1SgaSRa6ki3U2JgXCw1niahC1u2wQnXPqKATmgc2ZqYzLjZFRpzrw1jiWhmkYZx1bznWvMZxxe",
  "key25": "3Y9RdgnaXVfXYNRvxG7DKRK2ELxHALy3AQ8oDHKzq7F74MDdcskLLW5Ky4RCaKTFbQckfXExAd5y2p9Gn8nCdHdU",
  "key26": "3KQx1tnyJBtqbUTgf9GDwN1jYNPxgx2gKHredN6EWNhFNq273db7VSdvmXBpqJktrz47cdUaXMJhRuMVqbMqbNkm",
  "key27": "3oz2bR4i4VVJChXiFzz3RrCBxB6Et72VAfTT6V9A6AoTMfVvWrtN3xyen6FANHMkaVK3FTxY7mhArB48z5zXfAaR",
  "key28": "mBFL55VJNkMNvR6gV69w9En6ywPoaWDNSrB7qgcXnPeeUsg8G7QaULdZfvTCw7Fi8TJL4XfTMogXWtzzoLtfRwW",
  "key29": "32X2H1nEHAh6aBjZ3p6GemDetuwiZwrF2c7KPRLDvsx5xmk1iLr4J1P5cUwEi29SWmzJ37aPqPnWqEdpitP3qEqq",
  "key30": "5t6KZALkFiJy7gQ2pxaENdeVrxMLgVjmKyUj4jMhyYpj8SRebVkMBYSwzvHVyAXC4W14CbFyv8YSs6hojQ2hYhB7",
  "key31": "t3yPmAQ3yX3DkrHq7mErSLDigAepMvdCas5GBfqLgyes6LNncjvqUn6k9JVX1x3WiZz1SmKQgXWuaAakehPktnE",
  "key32": "294KxoNoDAzmD9ryx65BXEq2hznvTjFnYsC2RfMquMWmC3WevDEjCAKnck2YNQGpB6QpaGLoySfNVxwresYbMBq3",
  "key33": "3qPwGmByus4BNA4dt34VrkeAWMk9LdDez8CcB3VpCWKySbGTaRuGsn7df93674SrPGsc9cHEMsPS8nGWtohB16su",
  "key34": "5YoeLYhH1iRUfMzv6MAD2jEHzNKpgkFPpxQihbRYZYvgECgKBTch8WEEZiMWwFNNUCVRtMTDsiP17QPLEMRV93vR",
  "key35": "3iuokgYSTBC4kxsRRePbJgxaArvhHqwqmnpAFEfCvKXkqrJeDeBXNyDvRUSAdoYcLfWFWWNzaHsriedYyQE3u33g",
  "key36": "2T15dprZY3QucAfNWohd5QCCQ5dvXwoFQ549Q1zDU3F27hgqxXYjP3XMPqxT2jRwPSZjmgGvNQvHB8WqRgp7fqnK",
  "key37": "5J8ZRcugpHuSkPFGYb5cpctmFFvS3KrZMGrxJj4mMht5CPfWKwCpznoSKwD9yBnnpB4gjkAHk1Kp4aCHXoj4jG76",
  "key38": "2ASb9iSgyVfjVb4cb6DCQ6WMAVfT8UGzx3fx99jLjYqYNj1UKSjc654wR6wjexoiduohJ9hwhAn7wS1uugGoHgLn",
  "key39": "5uhNcU2cVxPpyio2JmMAMCGNByAt68jEcXPi9eQ95wV1NeLojnwWyenYvWViRTnMMtqMTu2ZsP29SonkyHkZiXLi",
  "key40": "2xTzwtLff78YSdJr7agxZNGZR5E1DNVNsbMqqY1ibq9ycxnQYSEfVwBZzoaisyBjcu8gyfLScMiSSPB5HeuFnVU4",
  "key41": "4bs5S9bMQ4JyjhGD2U7gP1rTaPxuVRxrYD3VVhA3nrffsr3aUEZGSQgzYrfjh8fcNjq6zymPuXyd9LUnZCgRgVNZ",
  "key42": "25j9HVTjQsRTi8oSHsrdY3Rh6GMYMz1WyV8QYuaaxJiyeVj63GmBC5JSvUSPvj4NXhWy3MrCeNc2qS69KfYi6QTP"
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
