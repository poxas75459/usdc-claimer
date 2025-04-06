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
    "4kUgHUSewK48MYFtE459bohaHiJBWXmjaopXyAjiusHoKw9RxrG2xN6wUKkqCfdaY3cfxvhbg891AJQKd5AMV7b2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ex5Wi94XMAUCkZksgNxHL7KqarxLSyFaUmSCqNwVErPMKa7TUcWi8yiKuTBjcpspBrCypXpVpYPWn5hrb5aZgFY",
  "key1": "4XwMmYPHeVLi2bMSmx8EEwKFEuVq8UkBtEWDkLjErhzyYN1uUjACqwk6sE7ufqUgNCumDpzjnZdEc2kqh1uGWGQF",
  "key2": "ZVH94TiSh9SXHM4M2rgDQ6jPnov7UpzVx6zTXPYeqFNX72C6FZy9iTErcviM6SFN5FT8Cfc7cE5LECqkT1vKge3",
  "key3": "2fP6zYwBVH98PxUjbj46PTG5WCdxgcjVPnZKBNjQxynHRLTFgzCUaAxMoVhB3uSe2PveyQB8gCS2T5jVLXVrHpgE",
  "key4": "4153iwuef32LJ2NeGTnhNB3mFU7Q4eBzdtusw3Y4yVdDdV5rrEZJbqcptA968KcME1jUtNnw55nzzwZCvnpF8Rye",
  "key5": "2C9Hb9Fm1ixBN8WXefDfTXtZj2UNRSypcKptucicWEXYXEW8AAtfTwC31ngSVxvHtV7YsC4ZzQjP2wPAn7tattXL",
  "key6": "5gCxD6wcfscEUMDMat1mv2pF2KqvFJv86nN2R6LBNQzJDdJbXdgsWPywTrRGvmjwXYESQZYH8N7rRX55s7XvefUM",
  "key7": "2KEZ32884QHYynC16cEmXqBneaCPKBiQFDGCp2TZ7sk4ZG1s9f39H6iksf8pgwWws6qC7M3X7V7BpWpKRKj3k58Q",
  "key8": "oCCxDfSkVTdhtFyih44yZU5Dqi1CbHFqt1FquJfMYyMJ77xbvpuFHkRWNgmk7fg5K2wxaY7MECF3gLBAZGd2CA6",
  "key9": "3mK69MPiGbHsDdsnD3L2WBKQiw9JZ1qTC3gXmVXxuNxfKhjUMxFqZ29q9Mb1TAwbr9pb6Xy6AWHG5jYQt8Rww6Ty",
  "key10": "4pT13utSjyrUGunzZWL6bGnJbMEmQxVWqkrCoAKi7f8KVCZMnMqrtfXFbWgKdWQy2aKse8r5VJGtc1RdvD6ze4W",
  "key11": "4ayUTUMygfzfHeZP6fELLJhQSBCdG2JrNvZwrG94jGQ22kU16MYG8zBnWkokfBuv1gzVUXCdWAoC7PrrWx7zWTDP",
  "key12": "4qGVq6WLHjTiU3HTVCZGSMNVjZm2STERTmiGw24ahHGAMw9Cm5zE1Wn8GmMRDsd2dAzQGhGQufP6PnAQReorbByX",
  "key13": "5EmdR5B6ew5sf1N2XkWWeB7bpjTCjyM8ZPv9qypHNKNdnJ3WrDRdJaGisJuRp8qVfSSFL8LpMPJsPCYbmKsF9rSg",
  "key14": "3JWBoHCNtkxzzP6N8tmfAUbza3p8Wa6Lpv5o3o42JjxVtPduGKC74Ua2km93zDYpPAJw4GmzTeHPuQCD6hrpZvbV",
  "key15": "GQk55fXdoSt5bdHstFfL4M26BBPFQyjzhyG8cTNxKKkdcsK751WG85n8xGFtQWEirCm3P97DczMrfozKQgmnV6G",
  "key16": "jfABhXRTwbF6XJrVgXRETd7me3NaTvrEvfxwgxks8KLWECuoiRsxrHDBwjTKGfgZ7MfMZ7E2C6k1RNf9aGUc7np",
  "key17": "sMkX2LpSrtcET4axHsrdkXrQ8RXKkRmMfDUrESfRLU5CkX1ND7TCh99TT3yqSyVTdLdN2HJxkSbF4b2bwyMWeoJ",
  "key18": "3RbPQkp8mLSsEZYj9tViZCH93U1zP2EgydQdSgA682Xq7rdefzAdjHVsX4CahVDd95Jx4Dsj7BribBZqCifLc8fc",
  "key19": "3DvrQ5ErYCY34mAXF1eHiC4Taz6iB75RYYKoDtRU7NsKihoMMWjWMhhfCyWUMJ1QFSyNpbvnZ8TAm58ejUdHGNks",
  "key20": "53RvGaddrpdAtngCVcb87mzLbrXTnhG18AdTZQKUPbigu1k1FUjqNNoLpsJYChFBhs6HjNMpEb5je8AEHDgckDmT",
  "key21": "1Q9Kvpz4qzykhNer47KGbeq9M36Qc2zf7KbVnTHXYtHb5n7UQYSmyqoEAsF1F15bq6MiGBRWnCAkNGeqDiddLdb",
  "key22": "5MGqx92f3VUMLUQnY1Bb8hHEmzzWsof9NfYN6VTvNUie165WtNKf55vkKnNSEEQT3hoqxqjBXSa4MTaitgydYsDw",
  "key23": "5UuPRVigDnasVykPPPDwy6dYXBU7kavHENsBaetA3TUUpZbhFSK9844M5Gzg4TxBpJJNzGD96u4Jshzz19yv5CUN",
  "key24": "5SP7rM62Zyxt8RRBA85JjUmgnbj8suzK5mq15JZ377YLDKie9ipeUw9E8hUvU74zPoQGtHenSFawmcoR1K1cYnvv",
  "key25": "56bHNUihS5NGqaTdJnuFEh9qZMowmwNLwNxZTpeu6NPCwsoiA8zMYveeRjRiUDo6HXgNLAk5wrb3cW4RaYSAtLXU",
  "key26": "qPRw15y3NChxxqdGyAxgfQ1KPbWeqinbkUpMvtr4yFHA89pGyL3kmQXz1Cjzd9TMqxjkNYvpdgKHvT4UcAfPWkU",
  "key27": "Eu2164nTWe9hNQHZT6x1CUFNFofmCt6XPxmtsaUz2VkwgxJvQYFnoxrQvFGRmEocXDVpDhJgfFhxV1JKAqw3KyM",
  "key28": "4MEBD6pvhgsWKjUhfX43EMpibUmeTpmSojAp8TAg5qFvfoeiubEYYmamCPtEe6k9WMPgKiSmAP8RWoBQCm1iwMGm",
  "key29": "3c14C5Z6zXSWnDGKs3BDkuyT8J8UcveL2NXU16ks322XEkazRwrx9tEZYF9aphyNT5vcZYUW4J5YHP583jukzKXj",
  "key30": "5R6AWZpcnxFzPyrrRhkvunbfPWiWWrYd8tnHRsxmWSNs22sFVgA33Yko7YzJ31YRBFLXAv7TBK7Ke6yizVNT9Fip",
  "key31": "3ekzUKEyLPLsc1XiCNfeEz8MPPC5nvT2GZNpz29fx2v3KYB9pRKeynmpoAAa3PTbBxbprazHnvi8p8GdzsR14U1p"
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
