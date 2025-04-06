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
    "2GukZSHmVXmGuKPcKQg7vupFEAsvGzQxFD5SYqNVf42Vz8uuAXPXa7zozFgEuxvSpMJMP21tMuxmVBcMiRBctRC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wqa5rbVS9p7Au6Lmz1d2prHX6puX4DHdZmnJ3TdqGPArTp4oFExUKVezckvSNgTZFf9qh7K2uj9UVkRXDHkTWYG",
  "key1": "8VNP5aVffbR8BdGWtYkRcJspfrF8YDRJK5gHhiS8ynkFAPCUK1VwAwvmUubLuPMbpnEe2hiV8WsxzwGzTG8Yajp",
  "key2": "5UaCLZLR268LnqptoBwRRCpiNQaMBvy2vsKVhXeEbSK8QcFycVzkXDq4wW83M7rdd4noUioLkDdFSu4AtY7gu9Ja",
  "key3": "3j78sZ1S6GiBEvkJC13NgDaggzjjJxaDkVUM2CSj2JHQGdb81TSRmjBCFnfD7dsjM5sKQ7cCmnLTcz1CM8muj3Kq",
  "key4": "4bCwfbb8Jv6QuHLkBdb9oSar6hraKyNyw9T46aRhWPZcBJAPSftsiMxYj2fZdbcDkumL54b55SogCNcvvfVkuMZu",
  "key5": "3BBjBopvKBvwWw3ANL61KiFz8RiyMNXd29aj2aD9Y7WAnrSdPvcE6u5XmrxZkWvP1UQa5oYewvUyhtNJNLH8RVYV",
  "key6": "3BHgdajxpHB9iVWSE3xa6dHfJ3kQcMoFByJuboKqKsPg93KGrEJ8WhpVS9VYStTux66ZqT4jEeCdAhCrxVt31VrE",
  "key7": "x1meSrdLibDT6SHorptBCmToSbHQ4wF3YtEshxig4bxEJANP6qYLe3LJc7gtb8AVhYnFUqygo6ykm71ENrttqKv",
  "key8": "5nY7i2jAvAvJ1PvH62Bk3B8BbXuA9KipJJ9qfAPwhZGoiUu6R7S1471XERBUMNGJ1Y2EbZEmkqxkzMfqmFfzuyb2",
  "key9": "YD1T7Dxt9LL3E9E588HfN2n7M4QKW6h3U4nbTYBmNQ52xCVneahw56XodMraF1dMgfeiWRNKm93rhAEZW56Apr8",
  "key10": "3uy4xfxMQgkGAaSg29nPcwMvCEYfnMGffn4P2VKjTtxephHHy1B5ZmNtPPzUfakqDpDPmvQM3tTq8fodg9m6o13i",
  "key11": "463Bx7WdhsdQNjejbtjn9TchzugTm176VUkkdz6qUbSbSf9EkpV6saZqKuJ3WSv8kjNBAjQ6azENfMhjdLu2tHhS",
  "key12": "44PAPtWSZq3WuVAbPf57TvaVSUyarSv42rpj1s6wcxMuBNee2vf2f9ZsudrW9qgkV3QTiwDK3qhP6GewRqEo1Sos",
  "key13": "4yHYmVcyRCgpvKuFKwZCoT1NF4C1akRhMHEviK54a1kkbuWFRk3ADrDWECvNc6aiQjXzcg1uz2FFyJDve3zCEMXJ",
  "key14": "4dmmXGVpJCheKGMSfQGjZP5czbSrUnSfDsyL4HAQHohiDwQHBzwSoC3wMT667wpEqBaFeQmLPfhEtjpEXy1H5yXh",
  "key15": "ZQfs1NGBcfwDym4hEc9ioEdZXoLhHCboMK1dgq3t4BpMjUMTuCJfox2DdyUTZbjgmR2TzXKVcAgEyuwuWRDbEyL",
  "key16": "21AKZmTJQZudtvPVPoL6qNw7BNvobg8Luhiz8ExFDYvLTai7qtFS6zE6qd8Q4VWhMmnHcD1S3a4hhXPE7qv169M7",
  "key17": "455J6HfYKAyutXs1nf2J2wRYDrKwfTMqHKqMNikPkfswGN7AncfdUgXsX4MNEyWnpoS1HKXYnTPhgtsyrQe3MRa9",
  "key18": "27HYdYqiGH92F1MjRX9yxKXmsKX6dtFU2HtVKMtk5ozdJnziCorNgShVMrgDW2T15n8KvsKJfYmbJViBHg2oxbC6",
  "key19": "3YqnxQfuJsmHEeSwupf8FAyEq3hVBgZ17EvdNUahptj2VbiftBdnJsZmrQt9daj1K7NtJZF2KWKyGiJ2q5bkPfkH",
  "key20": "ryaCSDvibQM8hn5nr28nzxqaMpL1TCfUGFdA1diA63FxaHvxE4wdUWrvZ1MR7gTNFugmgYg5P7C1uLxCLeKZSyc",
  "key21": "3A586Si5yXKNGX1yMNA1f97hGCwNdHVcgbDc5CxFehqexLyna5eJMg9bqCFwd47FX38hrZKFshkDAQBv7wFTUmN7",
  "key22": "3fMtkdnHqJfqMiomumgLCDXpsjtq4fn1mTg9jvvAYWXdHbBT9wJywSWZiAyDyRYK9odxhJaQ6pKmQiNYSC2oR3B",
  "key23": "H18AVL94ZaoCWbQUM3kY9heywNAPtJq2oAAR9Tam7MyuVUxc36UEwGhyHVThiVfy4Pv3yEwb44aVwa3nxk7PXFy",
  "key24": "QfjD6idgacFzqYUst3k4wfvo4iaYuci7uy7TY2rMu7cjwoYfk4X9G6cz8nVfkqMEu5MQBvrb32cm9H18C23RLwf",
  "key25": "5esF3J2HpBguAWB55Ppd62FcQGvaxrr1iXFZ3oCRySskt5Gs4ZE8EnQ9cwM8XX8R5CJGGREK6NZSKF9tYWwdUwLf",
  "key26": "3RrGxEC823GsAmuJPNyXCcRuxWHDwB7AuWrT8REaG416tJALrVJJ4tcpuD41EU5Lu2Q8xszW3S9LLqCEdZW9rjNv",
  "key27": "4aVnjT4USE33egWLUnFUj2cZdeCrDU9dhaZZLeQ3mM7yreXPffQ5NctirEbVNJH3Fz3iqj2oAr6DtvCCDyTmbLmX",
  "key28": "2t4MohSehTAs6MWrNG2NPbLx1sa5S6Xtmw1ss3ttrRqT6tqVmscSwd3zqBYBcw6GxxxZGtvvcqbvE9zra4cLBXWJ",
  "key29": "4GMr1MJ6DGonTvJHfY3NSqaZRShwC6mzR4jRrKKHGu5rMaNWE4Nyjm3H8CfATK88gvtr9nZewqj63RHejECjZAxJ",
  "key30": "5WdoXsHTcYXWaeL3eqnUH4wJiXdF5APfM5pW98Q1NYUXSDZ9rHpA4pdxwiekxdjqc5RVGENxxHNdtj4H9zHiBmB8"
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
