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
    "39GSUKb5u3cupM6yCRRtSQDrpXUTQ6g6wLvXtQT8cYaVPJnbQxX4gHNaDD3RWtDXDW9sKq6BJ6zJSmuTehSXLGAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjMCKdzcpHdCAGdC465adcgYYEm3dCvSvGkTt1Dikt6PJNzvsUVdWK6UT1npsreDzYmTHFypSJdRJ8yH44D4mUq",
  "key1": "216uwD7KrBGik85Aq3YSA6jpXa3Rz4vUKBrEucyyDwJgNPJhbd2GE6pwZAVaDNNZJH4EuPHyyDXiAawLgdgfRnFe",
  "key2": "r2hwZ1mjYPBvev3ZWujuxnoSE3qYFpFBDAeeK7reqXpFgAyqk9KP5NP48QXuhF3pa4ddWcFaETNKMhnfSYbnLcm",
  "key3": "2zRCGCaumM9TN8yKFXRsd17bgNGs1PjmCHAiDwiChJvabFRJHunDDPppSTn3G5rGTVUHASuxPxCFaBQhfxGk59dH",
  "key4": "4KxdgNZfY7CujFzyBiZA9CizuLTBCEY52m4VVbXXa4WU8gKXpvXQq15FwKa5Xo38Dc4EPaLNJrMG72PVV5ZHD75W",
  "key5": "4EoupDzVProWfvsxNa1Jp65FhyuXZ2Qn9UA3rcAbGivcJs8rhuzRdrg7URijvZxgtXt5L5S6wg7FLcUmtQM66gPV",
  "key6": "4zudJi99hSsGL1eLj3SyMdKtDcdpQ8w8TMtuhBHi6iF8cNjtLE2AzLkxp55dDFXtxZkiKFJ1KALPrs3EaqnQTHhG",
  "key7": "3ccwzxtYPiR8brioTHwaK26AfxwhrBrHhawGpQi9QSqczJTrEpDPnkAmJLNYv4TLK6twRKXhVGHy195Pex3szYZP",
  "key8": "3S52KgycHpjqX94T87HAomjpCP14dopVM5evk7YBxQF2WTRja6CjbiS18UkXJhGRYWTMWJjT2tqFGSgsJoxezWyu",
  "key9": "2ddzWLFdrg8YwAVDFsMBKygS8WkTVrB9Y5Se42sWdHMsMSfTL3XHz8x6iZj9rQpm4C7pbpqQy3YHDzTREJ27WR9w",
  "key10": "5C9uCztp9Yo4F4S6TLqaCQU2YEFgJHoL8tuMCVJwJHzcSyg3vftPPbCoiJkmqoySay5NEjjkPga7tZxucZUToR3c",
  "key11": "4XAU7jG4iYPBgAbDZ2RZi928dLnoQTsvH5Xd8r4oo75BiLv18MQSGHox8mV8J1cdmExN36aATHQXbAN2Vccjjj5H",
  "key12": "2MTfkHrbTW4LBuKxpYqtmcn7D5FfHAKMmExRjXj66Va9PYMeZU7bFjVPDg4Jiue6YWWQaYGTm3PKedZV49HJhhJu",
  "key13": "63fM4VVDGnMnpzyB1VaKcySNmcgih5xqbBkkcbZMgt7oFPSMRfFJyadrL2ectEXXCaX8CEoq9aJKjEiVN9cnmUwz",
  "key14": "3oYdkaZe3iQWEpZuEFKYJYaxAtdinZjB81agJ7b9kKByARyN262DTj4mFbFpHcTooqQ2f2rC9jwn7XvUDgU7bYod",
  "key15": "5vbEfVmN69FkYTLkxtTYCgXDkWzrWrKAw5UQz3X6ow5GMVwNKRfzKKukq3HB8o4oi4VjwQz4AZHBhnv8aogzgtCJ",
  "key16": "5ruSde17PGvodyE4KPWWuKoMroAtFTkwCZUGdkf7v48e7m24s9rACPkznASkPG6jD69zHcaGoY82NMwh9ggowVSa",
  "key17": "3yLAhDDTaAAKj5TBDnFqc6CvpkCVs5bCDvwVN3k58o35VoRpVr5BZuqsYCLgGG16CupAbjHMbb4RkJCPEsfPuCBN",
  "key18": "2BbeiAATCXoXMAAs5ektugMFvCPqVuB8aWYEU4sgcXYdzSERQYacmoU8SJHYKK6tj2ewuxpkQrXW2EKSWyuaLXZY",
  "key19": "41LHNds2DxvXkkyCLagTmv2cBKuH299EoegaVQhEEs5qmk6nWFEmKqPiNKZVJJrowpf8PQKod9ehyeTZgKi4TXXk",
  "key20": "3nKaZahVxN2U5qs4yVL9eXSv58qLrQeEsVWXAorq6ULvoz8PQ6AyPtd8deiK1fjbMP2AMygcfPUxCFxL7Fm4ha5L",
  "key21": "2guowNFEN2W3QUSL4SJtqdooTyzAZgyLcn6kD6uVCbgHAEGAsNtsUMgsDqm1VK9WuJ66kSzQqUQmU1jQV8ZfBsD4",
  "key22": "4PFD7Ef1eymdfuaCtN5iebK9jDE6HujahV9LAa44nTwc1jmL412ix5Nn5yWKqeNJfLUeYf67oiXnhf75LGYfKnd5",
  "key23": "3mXj8NCMKj56mtR1pVjgJdwaqhY69uoThuHob3nrZ6Qvhh7HAQDHXfKueZvRG79h7DrndM6iwndSqAKe9CYfjic2",
  "key24": "PXApio6A3zVMRk75zQ7CQos2p37QxeH7mYQ3FuXK9s3jdgEPqGZqQwPgPZ1mhs58pcx52bc8WRNKDBokD6fzGBZ",
  "key25": "2GG7ddzc47XKRyBtLU7fsX1ZdZKUq98tEvEcCCjXEadgbBs9QD9Vjv4Nkd42oUnyN2JDUE8T6H9rBBUTLqjCPG7H",
  "key26": "Q3qHEhu1n3mWC5QZPbgn7y6mwJCEsv7qL8Qyf5H7GoBGGV6Y84p3FLTaLuXeRwmPy6YYTFpWqT9aQ8yGAMNSxRL",
  "key27": "5MGSD7TqnoNumTCANVaXRp67ztsyCdVNQep2p3PKGQv6copsyB3WaYQzMJjkqVYG34TAvdohkUEuAB66PZeqy1nv",
  "key28": "31Rw5YukDbtjWqCt754VY7GMANQPyxhjmm2sqh4mXFesLkiXgVXBnYWHycMsUPEqw91rJ9RJ2ohb3hqFmUKdkNiu",
  "key29": "ZM9nHF8RJv8SxUUbxwWzYHdgTxJKGV6GWAgZFfWxYD3YedDt5K3ALfZB9Witmh6xnLSgG3zMyuFcUhPCCPEqgyr",
  "key30": "e7hSQq2oJzBDQ5m9UrbcA9RoWtyYUf64bkCCyYSWDtMXUbvP37UUnqrKB9ZZVjpCkJafT8PSZeToLd73BFEvbpH",
  "key31": "n4gquv3jhHrQzRNyvvf1xQZCoUcmgZNWdrk2snka6kzoyHnMXfbD6N47DjYeecg9B6nqszeqBQ6NxUSkyYnJX5G",
  "key32": "22vmc9ngwouhLbo4EH9hANPNgvo2NQ5uPwM6oeqG8zdjVaKF7bpHP47YcUsh9fVf3tiLpXEQ6gErUMpCskWZMDuR",
  "key33": "JopmXrfN9jgEWQycSqG1EfEV6mf8MxMTFUB98usHDc6A8umgUYyrzX7hzv19dyNhaLNP33gNCvqtpNRepgVBR2v",
  "key34": "55XLbV6LJXx6ff8ywsD5or6fR97USRkRvpm9Zi57xin1gbNLW4QoQq1174UwerxBKweKjx26LT3KSEdUZ6xmshuo",
  "key35": "2CefPtVUnntCNcB6paifBjJWAuZpygErJ1z8qxs2EDnM2HEQS7NbNGN4k5nX7zsv4Z5eZ8FHjZHwTpr9ivWeNPUx",
  "key36": "5QXMByre6D8SCvTPcZUVgBS4EEhmkrSoLB4ekCGAJbhXSJyLxew41Hs2fyAPMQGbfiLmG77BwoDtsmyMUjS3ghma",
  "key37": "3VDB36tBckyqWvxakvvKuSUsti5yLeDBZbMyfP32s3FzZJ5if8KWiQy3syLN1ZvwUXzZyu3riS1oWRUHYe9H3rwv",
  "key38": "MEb3V8PTTynqSESu72EVVCYNZ8ASv5nX7GEvpGw7FFr11DvBNF9BgfwiEggRsi3ZKX1375cqjyhp5sqgPYMt7KK",
  "key39": "4juyUQ33w2MWsFFQND9Dfv5wNRJbqeTphwVFCroiUfUcT4aB868AXDA2xtxZWyUo2FHvdNnjhoGcAbjxjgQr4xff"
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
