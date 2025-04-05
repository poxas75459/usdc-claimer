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
    "5aeZZqMvhYmQa2PkmT1TTrovUg8Hvt32cvqQNczLofKKGQ2zrRDddEkBcUUHcsqNtrLvogoQRc9PgDNFHDQTwAB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQrmobQ1ztTkg4odPKtggjacL6peh75z8GDxnk1KTXWwVprJVpiTQRZxDmwW9iw3jqjUw6BtQoRVfnKdMTQBzwe",
  "key1": "3oHrGJwya2oBNyjZuyi56cV4Hgwy6ANuce9N1uL8gz9tEEhDuJbJ9J1vnncwVgQcbbLNcFYx1oduBaugYXf1f6mV",
  "key2": "56XKQAqw1fEdEy3aoA6uTmD1KbywqDPgoegAEVnPtp5arZo4J9BYVjGPLYwGhTXwbvZAvex1AhqEQU7Prg4i5uwE",
  "key3": "NcHHYxmeYmbAEURWFRHQkuWU7CoW2ay8263ubY6EeKdgENWA3EKjMyBMZEHyJ8hH1dFYqFxckN3uhdwoxXX9kEm",
  "key4": "2VBoSfbo4HSmNGKNfVAsv96KoxsWT1iFcVPo8bewDoiQitXwJCStQggipSfMRfeyTAwYU5QXKNBapBxtb2mrFSN3",
  "key5": "3NoFiJFbbU61yGjZ4c35YQCWHpiKiQ4UaA5Mg2woKjewRKHbibZLk88PJeXTCyHuMfTGHEpKFnEb8n6ughKTW9T2",
  "key6": "u9CsmW31F5F7oxfJ1yLKY2vnwLFLRJ6Gn1VHvPeL7CNnMXgqfTVS79iMMcdv8H4fbFm6PbZ7bNC7LdPU6p5G3tJ",
  "key7": "ubNYc3KwSKx7zaZgpadqLPLK2t6W6843tB12XdRN7sreTiZRiMgzbN1QE78tTC8who7viJNVDRzgecwRUzpPqee",
  "key8": "3QEs9AdGraN3py3kDgLexYus6QN7eVy1NZAFw5CS1DVkwbgsWqSXH7p7aCr4RBHq7X9gnG6sq7BJKEj8R5UBpjhi",
  "key9": "3MDLDbiuE12RuW8VSd4iV3Z4JFdAapboqtvEVvhLAipRbDBQxCd4GPyetYayXBLxJkSoLngxbamEFicZqe9ckmDP",
  "key10": "2kPYHDvYyN8y4df3AiPTesHu8vcgc6mVxKdbFoKA5yJ83YyiD7ypok97P1U3sLKt4Pz6Z4AidGnFDAmucmGfA9QU",
  "key11": "5Rw6ASdCMwfeSZ3CipqpTza29Y5Bq593G4KpRRfAV27mX5NvNjUmabgyPjxUZjZzKBNCuNWtLwDZnohLGCDXi3uZ",
  "key12": "uSNUrZoRTQwNb1Ju155jhthdKHymVDJ3HDJDSspKa648EnvBqNxn7xcQymbyH4QTrgZ5SLpgzoMQCS31r1mAFLD",
  "key13": "2YKM5ZmUzex9vn7VKo9tt9QLQu9J66xynzghtZiP2j5nZJxYAGL7EQWchL6qhWwEnLaSkxUyX3h7Rjh7R9NTHPCn",
  "key14": "5Ev8n7hbmQk381hMC1SPkHfzk2jJ9sfwFM5MLrkgHrNucs2TQSaE6Wm5MVSapqV5DhADA13cQUFCG4x6icCaytFW",
  "key15": "EcmRtAszMCgaezN8tSsPSx4cEL52D2rweN9CERLT1n6d75f48AWZo23AGrwMMNtHwYkxcwqYJRcyUWW7A5xzcor",
  "key16": "2vAir27LjGTdw29zQudgtiWRy76vNJroVsWcpchS39mWTDF24qrsL9UNCfsYrWDg8z7h6LQbRYDEWkyzU6QmHYbp",
  "key17": "3Cyu3XWpxZyQiGskktzakfico1kr3MKiu3zi6BnuYQi9cWcKczmgWRT6LPFwEJk4SB3utJqwtvMmRuskuhbTw9DX",
  "key18": "4g4FuKUhewYuFRKfd1Go8bYmrRmEyopYEGHUeLmPvdTPRsunrFJgBAud7GpzA7mPJAKccDeGwYmJDuhPVetzWDBH",
  "key19": "4XAXP13GZoqLBCVa6WkoRiBGZcqW8F2tGctW6UsaivMevDagUXE3qitpQokKWMKKRPAVDffeWjPwbmR13Qf7ZEvt",
  "key20": "2CexBDT9zTEjbTxqsS1XYkedf7jp5d9AfsgZGZ3cTTtV8gHPbV3CZasmZE2Zd723Gfy1wcXz4RFGtfWBft19pP9w",
  "key21": "2pLfus8D6PQ7GSDHrU5RBvft2J5mndMfYZbzE4daEjFyJTvFWWPrUCQaqBeX4WwAN66PR289KRrVF5AVqW7HKrcp",
  "key22": "3EvXn49vq8ret3zcJvgXq8kwy9hKokqJNChsMK3WNwsHn5MywEXT2sdjwc7duJ5U5BL5U9vcs8W3mcL4M2RWzVVz",
  "key23": "3CpoHpPVXCVsEqRDQMWJF7YkmxuECcdsdWKks4qH3ttH6jvXo1CaPtzwwpEmUtPo5dqoVZwk2p98JmwZfGvbqquW",
  "key24": "2kgV79Eumtz92f9ix3bApUfmNbS9gaSpgtK6GEDcMYDXTPo1oXWvizt9GUsFuXsmCLp41mGkZt5xByd4HfKfLFnG",
  "key25": "2aUXKrVHAjqiSh444giUgUFShLfY4fWnpSmU38k9pJUoo19WCRonYZwK7cVXNZFWkpo1TXeons66ZAFwEqGbbti4",
  "key26": "3cJW67Yy5p71Hn5GcD2ZQ5H14L3hVEVZq7s5MnjK9LZV9fWBJ5jNX6QahFn3FEHxBrnmZEBwnaJVrfHwgi1KMua3",
  "key27": "3p2VuvLcxSNPMd7eYgEtQAzwCL9YM5ZsoELHxJfVLBx3je8SyhKZSx5ets42KyZK6zwrWYevyDXpTmRewxw7zqXS",
  "key28": "fcPKrhzdPntEapEaW7bLwZUNFmV3ZnuVq6WuyEujqxyReTe4gXcVy7RgQfy5T2NuP667fbJZBj8nBdzTJ7hLX9n"
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
