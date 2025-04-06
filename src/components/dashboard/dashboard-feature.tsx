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
    "41ehw2vLZR4skHJJjNPgP5K7fWFtYG5bmZT9VpdNFBfKxYauLWVxap2jYfvQNcYu8dyMe7wKnDfuZuikUJktMnwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38WdhBX4BCRnX78cU3qn8X1M5rG2EohfgKSRS2bSBth4xB7W8Kbybk9i47YFyHPhdZaGwUYyis4u4sv8MAsKrpfH",
  "key1": "59YYFhNiyFYJ4E2CUsVmbW2yiboCpS34xkpyJAAVYuShpP5XXvWmYh39BvhorMZ1s9axrgdw2iUP9PBj3hSNAMi8",
  "key2": "4tn5Sb519X1sgvy2UWTshZF2RZDxUn6VoQWEWMUs4syLA7KJStZZZupRJi1c1qqPotVcR53e4YySDdfEwmXes6UB",
  "key3": "2rGAhzyyyoQ9nZYAozS1PzBA1CncCN46BN4ikYC94HsRzkwsAxEGUcWh6dVicM6GB1mQh5pwJNZGbMHXHTPhprFS",
  "key4": "48xc6dSu2zZKHUieHCJSEmCCvGEpqnXVVPsw87VAjimW6DEQh1qf8gDHeuU8gwGuA5P5cNPY5jLmPWCJQWKFAQwD",
  "key5": "gHfDpKPuXUmRsjE2VDXzSaxHnPzAyZ8HrQU1drRiZXXbSKyA7S9wVuBn4ocMKhsZtF1sz1EqSZa6HPWztjk6rBK",
  "key6": "5p2W2o8z2TZ1g7LtJ4EBkhnFxKsvc83BgRXBRowtV6iz3poSLB4UqArrw5bzFpJYtiR8dbssFHcnwMr3VVENJSob",
  "key7": "5NaAsSKFt14szBgA1zNNUZUb1i7q3sA7HWuwBB5jZgQ3shNBNYdA7rxSyMkqvML2dx1HTMa8t2T4iczxNfNF8CeR",
  "key8": "2yae8vdGYZd5dozwkMsXMKB5vYcjsfRerTSHv32QKLDgJdNs7sadaq6iX8g2uTu457GrYKV7m9xepLVxfJPD4B7C",
  "key9": "31ZV4SGLDJuT2vs3nf3HEYXKQvkTYBr7emo52NmaWQ92M15Pp7SewLFJBR9PzaP83vivLM1ZxiRDuH7PXkfi2cPR",
  "key10": "PQnyKSRMFyJfM7bj43JwPRCvDENoCSFxktMYN4nHCC7GRgjQVSrH2yVxQSteG5VPjgbyNJ3pQWVw8E4j2h2smfR",
  "key11": "4ib4YCM86cGtjQ8KrKCaT8XNKvMnUyPJvoP6ziYkuYynYKE7ykhmbWL1xwpopctGQ27H9iwAvcex94V3CKGr2h1j",
  "key12": "7mUpzzwMxRu2Vh3SUywB5yLS8bro4VJCLKaYYgLJi3qCHVQ9KPnbT4vc9dtHhPWnYiXPKGSFJAYw8BtV4YCgo6B",
  "key13": "3YiWJXgyrc7bCv2Rn9sy4Zn9ckw4gRRvu45fwSurZXgvdsW89cjpdsfP6neimQcKCgdeZCLG1LgK7Ex7xEpwiuRX",
  "key14": "2qCoJKfagmEh6ARnVq5yABt98MKF2f88xWXE6vDer752Rzsr1UtFCVgtT8rh8Zy14TPWBQ5DHDNPemqYaZTffkhe",
  "key15": "7LLbM2KGecT1dsYYLq9WhSTgZCjZdwLvDbmbgN5CGmo35EX2wKzrPBQQnt3bza7awHpRnPzowFwQhAct4NCdT9E",
  "key16": "3zu38pm8kA4BgqhMf31H5uGQkMseBfvMJbgGACcKPfARNCRx9n9GeiHij8gzGFgTeBKD9Hv9CH1REgatLhsxJrUL",
  "key17": "H8xAWMxotre3ANuawC7PubfvVDJCatMBPmp2AbAdnYqQq27m5BuuQ13AgHMv4YqZPBf2aYMNp6DrJkonsPWtLys",
  "key18": "5qXfTDd8zEpNxwdj3PjW8NfwwnyWJurzUiRkAiPuUkLSmMsEVzqPmeAM9P2qxS4c3EiPQScph2vqg5eCfNJ2p1e8",
  "key19": "5fQ6pKyyAc3C28aJKm4ozSTYjHXLAkmso5zewtLgX7yrL4fF6ed17nDur8Vw25H7FxVEUTgXVbfJwW851GJXw4zt",
  "key20": "5C4EDZjK459YQiUQ7VWaGmJXWeE1zDYFiGbreVfSwDFa2B4UbiDK1cyQWpDzDLggCZUKSEBQCVaDihpY8YjvKY7a",
  "key21": "NPjRf8i1otJFLQgGZT93TDdjiYQGVjNQnGRQACaSbgUFV17StETJj5LHxumf9ia9tFcHckKBKGqcqKJGiL1FqAJ",
  "key22": "S5KzHHLHvoU4EetbXoeE4fLAj2XMmWHRKoMomQisdNTTVDLtghyCvn6aYar5GgCke3ZQcoeGaog11L2aCkaH2XK",
  "key23": "42jA8op9iMY8NJvxA5ZqsJHAftc1oGbninjxFU8mYgn7ZgRSZXLNKqVcFTgmLoaRcZeRCCrUmyjc3hNnpPkbpR4G",
  "key24": "bCnSxVzKEbuJEa4od5p5RW1UXDq1obs3uczSGPs6J8WkvNvYPBbRKiC67uSnaNPzRoWBwVcSCJJyUmYsVvg1U6W",
  "key25": "4cgGKTeAhFw7r2U3mDUYrihXHC3BA6AWSLiaGMrfRoNtHZD4xr9WHA2Mm5HfswgvcLonfTu9bxgaBsq4gHTsA5kR",
  "key26": "22wKweuEXLa2RF44PLXGTJQsS7LE8hNBJgzTjUyVdNnEAuzNnHdND1yuWKReyvbEhXLnVVB3kiVUKnhryUnKUDE8",
  "key27": "3daK5XdMoBGyPoEVy5Ck6W842HehHFgHNQKi6iNiTu18LTPzS8nLnL1Fdbf3SkwJnYmvQ2Z6H1VrYkXcmkqGHXmZ",
  "key28": "5osfUfiLrraUMGE6tTEPAKXa5Xz6iarXUeNjHP6AR3YBJHqhHQJMzoLf8FcmcACRzgvr1XGywEfJDdz97HDkswJn",
  "key29": "3ASGnSNcZbe3yQgjwtj1nFJEuq39PrdjN8hW5F1BXyzFwbLDTXr86kjA5Tfnijxxojx2qKxPzPahZW4aypPZ7xih",
  "key30": "3C6qYF8jAdhTXS1anc4R31RzCuEH6Cj39F8hkwZRmLruBeHvituanzektPY2uYA7aQa8kB15XJKaEr9oHRivA2zt",
  "key31": "3w8QMVgSYx1u9hgFWLGRho4m7PBr4N2G1qU2iq2UD3LFNrztuA5vHH8vCZPjDAoAS1usjbQijbdDyYN7YhTysWpm",
  "key32": "2Ub95cbM2KVJJ2CbKvxQuTXRa54t2HeXmRd8mDGa3VK2ZVmkn8e724x3v4cu3JZY6is8wFMKMd8bJcPdxC5xF9sj",
  "key33": "5G3u81Gpt1DEaeYqTXKPqEmMmVXvcPZSVKuWnc25s6HKmFVhLxZ7Ath3A1Dc3HLW9Sxaw5JYFAEu5gN8hGE6EgEE",
  "key34": "5VFeRBy8dmhJx6g2kWTAfAaJer566p5RrFNbvASBUns7RJ3656hGdNSHC7LffykQpiwHviQCiyamQMkHFP893TjC",
  "key35": "28v9yVj8Q5KxJZQTjYiRNKxEfG8yQNPDmq4cbXxvKyvFvmzAwsfxUt5HLeVZHpGyRyrnq8TpmjECEmdMtSBwXQkL"
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
