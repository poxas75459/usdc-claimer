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
    "5GJmc7uqnyXRLFz6B6n4F8tgFvCd2rQC7gpueS5dskiayf4HvBh36MBHamhtkZMJXnPV6iCBYp8DeNgPKA6GhFZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VDGrrguLGLAx6wRrGbz2T1QM2kJA3j2Qe33nSGF6mD95ntB5z7DGsYTMzyeHg1N3RRoDHmQxHPHEQNqPtUeozF1",
  "key1": "2Wv1GxUurywMPZzw4doFgM2ywTGJvvBFKyHbwtLMwkUQjA4W4qDu3ehyiSTPJnegN2QW73noto69X2wtAthmaeSU",
  "key2": "3d8KRr5VzPkz9Xbun7Xq5cVT2LHAHnSutV6RWtJZLcC5t1kunbZ1VgWf2PWA21gBgWVU153aDWiRNgzZjzVdb7Nk",
  "key3": "3Hc8EZdEoCjUKCsVPuFTyrtBnpXj3uwdQcxHYwwQhj8oZc41DYN5CzfmHoWDtLMtznKmASXtcazQ44GDdVSYYXyo",
  "key4": "3qW5uU1KpoSraHJjV5tPnh656Ahfsv5AcYb7UTonwHtrzED7TBVGSfEA4Cip7PtZg6fAJhhKRrAnL8E9mQFnQgas",
  "key5": "5hmiUhrk8PkrT1ZwcENBWXVwhTqGSLoiggmn8QtE1hceu6JDzvHGvifCVP7QeVtV61k7Gnvciupxb6f8cnbK5Pdf",
  "key6": "35NsuGx6yqA5fBweQRgavqW1gc4D91iKE3yJccLhjFCziPUKyjkUXQCG1gnwGXxhfXGDqB3dQ1yMfSstb68kUdKC",
  "key7": "MJVDJqtJbvg7BKBdqv1ZwBKaLeeRVfyUQEPuBwpXHR2UT6eCn57TRcPmXHvWeu2reue5KLcvVDkeMLbNfb1ENhk",
  "key8": "5Sjp4F4LJS3uTsq8udpPhnn1FAN4wN1fvNtBaeDNXA9RvZLQcoihGtE935RVxnd9Svzs4NXFu7x1kNMBpEq4Qz3y",
  "key9": "2CQ87hNuwUvyX69q9eQkathVc5ik1DDCPN58NgncLKXhH1ctCFUCwgaFtxHB8SwY836WhWxS9oqJGgqgHxbA1Dru",
  "key10": "5HkbXqHaUNYmcypykkxzApafMzWujdhmghiAfQfdi7kE5n6LrWkGftdubLGafGXphadVwQnBkGVTPSz373xA6NGg",
  "key11": "3VtbP3XEKnHPjD7t7jgEVBCoVYZ6UJvuP2L5m3rzkTCwQMLd7GfMmdYPzxudHvuPBBtTQPNqEN16stoztm98s58P",
  "key12": "4dwzSGwyp1PQfHTvnVJFr1on7MqGiQ99yTjtHe3bgbfsUEP2ifbhd4txP63Tw46iQWcvTPfKxGfDGJb8VAtjZDBG",
  "key13": "5r2u761Q1jE8MP1MRDvi7KTLpa5sUiNWCwMNAL73Ph7L8KkXE53BMkrxyEHDFd4jmFbiUC8NxHCAiPaxHH2ABdvH",
  "key14": "4V43S1rw1rV8nZKiUBCXzb1SqPvWGcojhDEFWHYFEWe4yxyabvJkxRT1ShoiMdW7BGfcG6j9cY8Fv7N7ueGYi1aa",
  "key15": "abPbtK4D8L4Ck5kiww2iFRVNkXpW8cTw9mwygRo6SGSA8j8L3PfAWScEHANjYhv5T8etLcTupC9MwuWbqwNGcKS",
  "key16": "6KaNt9xBYRNu6USJxgsoGav5CZ57biqN3gBHGjcjjTsUmhGFQTgrvWZGZ8DkfVRdZJVmj5wXnp9ukhuqNpGv1Cd",
  "key17": "3K3qWAoyw8wGUv2tMACrpCkDaVkENLg3rmH2Y7FqerhuPVXp4LU5Ay2jWqQoRMUpzXSNdSLFHKUMubHtfdqumziK",
  "key18": "2Fi6foKViafL5xfAz6GSRADD9FDBQP1ho1cLNBy49Hes5LuQNLyDG9CrZHKfziQucPMkFLxCZEZWEhTHAesW2qrA",
  "key19": "5tRT9SF5jEUifBrs1rAbqBWShP9RhuiPW21XEVPrcAGmxkqr2kqb4HtgNUhdkDHPYMfncq7ea9DY1Pien9kP5giZ",
  "key20": "2n21eakxehGg6NEtL2UhfgAkLety5JdKivT9p94jtc6Ssft36gqQRi8cj9kp5SzER27Z5eeWJAwm8xiEPYSuUFbA",
  "key21": "5TeQerFBUWe3FaeED8WiK3tszFTyRc6qVhB3TJZPyZiqMWtf26sCU2E4kVqR2rFs8mAGUjCa46VKgHzqhaawpoZV",
  "key22": "36DfcoqG7kJbhfNZaoHkxTfpYBR7Loc3vUPNdRQguN1qqFNLznkZwKV9ST9io2HwDmVQqn8qSLUY7zH5Zu9QGETx",
  "key23": "5dHE8kvmuoi111gWghTSvjwQpWDvHDkYkvCuvwrhtSVjwEyFPqFyMH16gH2o1xjkJ6tqqPbucQNBQs5gWs7qUjT2",
  "key24": "2EdkRuZkkgk8q3f5nxWx1ZsAQ4rxCjKBr5kYQCP8gka99Ejc5jwm8kEZbTuPhtXWGRhTjxRG5ioFS9ZNCTkCWHPL",
  "key25": "4kDVWuzSnZHoyeJhTtCvT2MfAX3KEg3JrS3wipDhzs4b32ZeaPB68qDPMeuNkETZfPNU36CrDEp6eUu9NjQpEiby",
  "key26": "5jp43a2RhVXCf89Ex4qbPeP4MMj9xZMscZP8taPN56Qo9CNQh7vStcEtyrzKsMGQqFMguwFrKWLBczc8HQzYLEnA",
  "key27": "47Auj2iXxdAgUr5LfREuzQLeF6tfMLUT6ueRyXbNnM7J5ChG5bihmsCVBdN8Q85qroTmJ34WNNSmTVtm6Rpnu4tc",
  "key28": "2AqckeGNaanXwLDTFh2WG6cG59svtqZSqkE3ffKMCTMF7xvA4Ky2kwhDQMQwKxWdKdwDnZBye6PiWR1TH9MC2YBm",
  "key29": "2fn8ZMk18xDvCE7a1PozgxcfXvyhUUPhLiSAcjqrgZdVfwYdsUhkKc7rqtqUkLRRNvwyz5ALBFadwE38ZwmiNG5Z"
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
