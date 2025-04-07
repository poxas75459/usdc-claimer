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
    "4MtCjmYEPC3B1Z7VHm3hSmpLJnUZstALj1vqmyqDtj8EJvtZyQMRVdoXJ5EjiETB1URXL22WFrPHCKd7LpetUNZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QsXaLkZaJn4WbYHDLM9Tn8ZpWAvLMhGthBTrWC8fsrmBhpamgXWKD4oNVbiPjoq9eZNzeVLWfxmEVPsL9RVnPu",
  "key1": "3EF1U52b6SuFGqQDu2RuouwqcsXQMPa7QBWAE1qHXr9G7HxjQcBkRaemadwB9c6jEY5FSDpNjZF1VcqktcijNfWi",
  "key2": "4aP9auvEH7n3LfSVg7oKfJdQZs9gaKp9oQWjet6Nt4hcczo1HusQvkHS4YJqyckPPJEjRMEJbFDNWv817tkpW2Qe",
  "key3": "5ocvakUKkmqaWzpKrFaQpXk1JwapJeS7e3vfnLSYun68dJPj3ks2W3wkLe38NmcrsLGC83SQokN73bPAS2buEhee",
  "key4": "3JgKk4FCUgnWV8qumkRLgBxEyFxrJyWLKEtQSaMt9Rc5sSN21TADWsHQFznzy7wz53APpPEYXPfX2uh4BnbJYd5F",
  "key5": "3i7mdRjYHsUodcFR6LHkXJuJ79Hk3sMPbBpjegsK3JMSghCSDVbVhmGGXghvqXgSk2VjaaAraTRQrmG932rX5T9s",
  "key6": "5D8AQCf2Zis5JjD5ByM6mnomyii9d81b2YjcB7Dep8oqaMTn3tZ8iDNkvAv1eCsG5LdDNUnkHEmVRRvjr4F6JHro",
  "key7": "26A9myFaW2NrMwCv9HNns274SjQrPiTSacxBtg2noKyacjwx1KAME9Yb8N38MHi6Zkf6ayQDMMyNCgj7CQSoU8Qf",
  "key8": "4LhQyeoP7tUCejBqJCWcqzAtPp3QvAGZ1uHAVRALzvt5xddnErJkDNn2Gouq7RqjcoqZKd1F1UWa9x59dDEQGXCi",
  "key9": "3k6aBus7H7FyH9jncvZxUZbFM89JwM6T8ancRTwZf7UWedFqMRhNbnoTobxKBzBitXp855HTg4ARTtCWUUJuGAtD",
  "key10": "2aGUNrDPuSny8pFsGVJMSQ9Rt4HCiRmRdfoTM9oXDpTp3QcGmQFTAb52R7u5nRoAEzjKgyGQP4ULUqyDSPGy9zPY",
  "key11": "4rUnYsRfjgyDefq84DyrMKg9Ves6ouFv6ZcUFzB9yyBiHjP7uM97Zd5mMqHo1WPtHgERR4rjAd2ypyRuRRVxJYCx",
  "key12": "C4kzVAsNhCCHc6QGkYhTL178WkdtPweG9yzb3fR6uWtQQxTLvtHsWE14CBh9QL5cioJcQb57ggbHQ9dC4PADibZ",
  "key13": "4jeGThvxFQ1G9xsdWz98m6PdiGJFsUyPg48DGKektwgyUZQaEzV4f75GCCW9AgN2WGpyjbApUm5vmo8nwpAM7cqK",
  "key14": "184xxfSzb4LshmJNmwU6EzauKjBQrA1PStddNGnffPZL8nUtmJdZ8sAFp9Aoo4VAcb42MBdP6LjeRkFHf8JH6hN",
  "key15": "y7frRzozhg2C62zukd25882unfphALFk4CAokKX8jjuejEWfwQ2AFtKQQpTano9hvjqChK3ULGr6mPKEMpmuHma",
  "key16": "2whRv7xJhtJvZyRjW2kTuAaCRNo8m9WpHDKYVUSAxBnQKfSasCsgPd2pNhuaGg1q6KZpKNcfxWi81dSMpJvBswx5",
  "key17": "5VUzE425MZHvhh7whuV8K53erVq96xLiztPUaMJ3Cpr1JXGgH5Y1PcPeSyizzXXqKb7cf1E7VSJhsDCthJqHLV9s",
  "key18": "2PrevgsrUsi8KaW9Pf38RSCxY5aArAMdk8bkTRdUmaRY2LdvXxk3Hns8U42AunWxoJY6dqg9AG6REJB9QT8WDiwc",
  "key19": "4nMCd1J97QwnZTRhbcPJKCgqYR4ujHx5YE6HTrpHqBfBbnN4VhRtGkFAJqnmJxQgQjuSJZbFPvSQkxptFjWYM3kZ",
  "key20": "4Y4NwokvHYrZsRNTwjgqgxtm6gBTLqHi28rpvK789PYJjZ1HNPA71d1BuPnnCm6x6nKRSgSguj92YDPHAPKp1vhD",
  "key21": "5ET5M4E49T5BEpeobQTPLfNAHRBBZEVWTHC9f1NqfJXUdssxVpzB7TJuMcyvbMW6vkumAdsyoPbqEUuWH2k8oDQU",
  "key22": "5438s7cWpHmfjfcKujG23PJ11NGus8U6tLv8ipsBwNQmwBgbWApoYhS5HuEyLdYazrpfXT4XbP7p8yadWfHecfkp",
  "key23": "dWz5JcNEYC3EQee7BUGzXodwRFjcwKNVntahZopUCbN4af9Mmu16b1db7VQDEdTB7RCFBkNSfLtrrC61NmxuMh5",
  "key24": "5ws5jT55ZChQsX4xqghcKFG4JKSkTCEyZyEZyGP8AunTqarHPEMGNT28S3gSMLaRtD59pZFgMeaCjgABbWDWCQGt",
  "key25": "5BdQrfvEvBDSpkL52GJ85Kna3LgBusX6fPuF9VsEm6VA8VGddADB9j2BmYy2pwhAdhSMq8QcKSTznyHQZ4jdubaW",
  "key26": "5wevsPZmAY8RRPdHmGMtTDvmDaWieSXYRXdLDDMU8Qe78tpHCh5sJ1YtXrhHznxu92MJMxCekudCd6KFSS8xagAz",
  "key27": "59KdZ2W5pFRP4W861Md5iEZsp2SAmGp6Aj6qZheJzpoatXRPxpiT3pDLaa3TbkW2fMwEUFe94WKtAREeYppFCqfY",
  "key28": "2A3a97L2shA9g45P4YAUJSzrosPP4U1uNCKj2BzRwKCPVev3giznV4XdTrn45KYVBm3oN2uA5tPxqra2kaoC9f2q",
  "key29": "4WXiWJx7wyXty7oGCbrYJjnx82GYbjXsY2Wb4es8peEF2gXUpd2CCmA4RqusuQooqDfL7YZLCejbyitWddTuTrdx"
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
