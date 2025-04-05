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
    "33MoNVEPD72B7LVoLNxnpSwFZcTWqzjLLxLjRU2rj6SgmSjNR3CWhpwWXrZT3ewBrtfC7w5ENe57pdZxRb5iDCVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtK3bVDx5qHnJidb81vqTWS9k7ALpsyitkAq4s4kNxctjc7QvdbMnxA6k7gbdNA4vcrbohXwtbC9yCyyShs2cP4",
  "key1": "2n5maXBX415TZADdLrUETiHvMaTqMLfPS2L32MvQa7AY7ZoMingiWFk3xy8qU4itJdUWWu4ygRT6UsRRH6jXEzSk",
  "key2": "3kkEd9QaTgkzTaT7hvvwUYcvQ3Cco8ok9jQnu56VfExopnf45WS8vRDTQq63fMmjbSJoCS6Z4X4tm4XHzBVRTKfC",
  "key3": "5JyxpWw4MLFAUsffaFSRW9gVgfCarncWFu831DDnc6jMUZuwYxexUexyie5CJLyLrVppY5XwbDqWimCUHa8yFUQN",
  "key4": "CnGs4C6977GVTJQ5GxN54JMEQge5VWWGs4fE6XMi3dLhfDyNmBxZ2D51HedtaXxXjA2waBxpw96m2zb7c89ASvJ",
  "key5": "4tFNVSZCdQjEqXPcxB5W7EkMehJGffYhmXKtgM1FVXsQEAAJQXmEjnuCLUSDWyd8pA21ueXokXkPdeWPMvTq12xh",
  "key6": "33TDiKxB5H8eMxXs8ZFGkL19iurVnRiLCZaDu17JFFqbutDTRawSYHFizB19JQnvoExqDa6Pbk7daThrTZu3ZoYu",
  "key7": "5suYfT5a825aUNkKFRdkKvDH4q1kJrnSgFx4DFeSNbod4aijc1mUifmJ8anZHDgViM4qQBU6B7ARbUecCX4f9TMq",
  "key8": "26S11FhnokNLkDCLaR1XPuoVJTskkrVd5R5UJ4NRMmDAVrpmtnrQAm6YY32QLgbSo22bYfaJdo4mYLGMVzBCVmKv",
  "key9": "2BDsRdbWZDkRzC38BCmao52nKgu6eJXHKH2tERYbGeUJuGS6S1uZCSMQFMqdb77fKL4TWRoSEZHpFs5RwBTnU3vu",
  "key10": "4JLMW45PZT9ZrMhQZhU86i8HC2VmRRGRj1HyvoBsGffU193TgtPJSrF4SkYenfUPWhRrDFHSFfmXQyyxr2Kruicy",
  "key11": "5NvWbskZLGjgnc2wM7uwdSWBspBnwg3NWkVByAUzjakQXYKYpeyDb4z8bsDuZnaZi1Ro1BcxJQtRomTvo91XRU1d",
  "key12": "2SypzWjjpC74YaLzzxdN48ZyrMmhzgowC61pRo1aW9WF3a1xJpgcWHdG41Tef2VH4xQfvHoAAGyeKsMqJpBfFikV",
  "key13": "3kuQQApx9Ng5YNZjJPmDk5zQ6Pb6Dp1LwWs3BvC9cpgvduBNGT9nujXPvUmE6TTeeZ9RAbfmHfQppcD5j3TTjuqR",
  "key14": "36uYXgHGA77qh5md1sCY4EwMJi5jDhJzptrkhz68RAGeAAT5xhL7dd4bm1h6LSTWaS1deVpWhzRaS42a4WzT1QA1",
  "key15": "3RmcRWAkPvms45ZDUVA8opAnjWHCPrnm5TeA29rw6FxNrJ3XpuyyZJeKuM5jSuD3LBnBmShWAtM6fHNY775vXH2j",
  "key16": "2JqNnqN88teFtiPR5crgz1nTSCXufvDh7z6qWmyRqf6t9GrGkYqAdXCLmBWtLDZATtNHXnWBFRvyrvxn7Ma6CAhC",
  "key17": "A7ZU8ChgirbtPMwLSPYX8QgroCEdhAJpDHz2sQ92n99st8rewUB4sa1dVgA6wu3GzYKZWLxKTdvDKGMpCSkfnvS",
  "key18": "47rrhk4iX78gMr5aem9Jvoc7uKvLuXNTCoG9ZHNopS4PXia8Bz9qvRk5McicGZg9Ga7tLqDMX93VHewwQfF7BWZ",
  "key19": "3j1JM8AAEDHDKVW4ifyz21Dosg8XX4avrkjTjYcJcz11sGR7tpvNVZqVTbpgv8ncKaQWsQMFSQjBCE6h1FwLyAED",
  "key20": "522KySruQBF5PUrnmwSXzj7A4VwUFvsUkiMofMQs1wJs3mZiQ8xYj22paLViaAvhc864RLsjfTThzLxQfsqVqhmA",
  "key21": "2HRqTpYosfpDXJYHuQ6ThD2HmABzfmKEFM6bRR93kJah3keU1bcPhQ2cjc7raFWzAR6m5BgLeZ9PJTHiGK6zpYof",
  "key22": "3k9Y4Mp7TqKC6vSKsGbyWUvV6fTaNRGQ5j8ArXqcPEVJHAgcCehrpGmW6VgmYQzNycjyqEk6viiZtq3gFPXQAuH9",
  "key23": "61ouT5p7Y9oJd6pyvmDGuX3BxSycPYmT7H63E2TyBm61gHhmDTZLRzVYA4ZribnMaX3tvEhcj5kP7LWRM3aTLZbi",
  "key24": "5c7K2vxQzkK8Ho8FPv65UrVsGKbYyRBBasNSGGwcXhGoLvYseFxU7QzoeS3TDVPJJMCzeTouTTNu9E2niuqasjCy",
  "key25": "5N9XR1KeDTjKyhdECJY7gFaogLZXEzHokTnSdVJYBcxSmnuX1tokggQAcvneGgNw7g95U5Y2qUZ1GMmbJsRusATP",
  "key26": "3SU3UqaX7G1RW6brovBNAAXQDcBJwezMBB8tC14A4vXWT13ce8M7iPxfz54pysdMcv7xj9WA9AZe6A4v8z2fa9rg",
  "key27": "sLhe1jaEZXL7YjZPCx8VoJAfGm14m1GpQzqc7bYtx5aQF5jC8NjmZL3ZeMGpuFZosCpwxT1SfxcvAxJcS5UmV6P",
  "key28": "YZyT2hPPCKexzdBqaJc6Rf6cGFpep67VVfJSetziQqBKpCPB95TrwmnvaLpgWpc7WavSZK11e8WeMAYJ7XRoUZ6",
  "key29": "AmyvsWW8Fwn1QDjuzb5u19t5eNaAppfBv62JXaLyHT7zjiSwCNfNRf4CAeWws5wFzPRT9rZFac9gVbjcETc6MkH",
  "key30": "MTkrkiygSC5Xx5mEsaJBt7B8C2dGMziyZYC5kLsC9NSfKGrNRkVPSvsnEF4e3cWxHJGbBNLNMrA3tgCMwZrj8QU",
  "key31": "TowBTpVUeLPu3s1LRShDWKvZftLQbmgM5WqowdgdG7i2fxG7WwTsyCytQCHRKHJpfeezvg5f8LhJkQLqLyEF6yL",
  "key32": "63a7UESue6wEfvcqPMXjWkWTCDxUGwtTwQnbCLs7KxYEM4pQfWeLnB643CYDgZZsoviqA4E5zW8rJ4tbyFnsk1ke",
  "key33": "5HpnxSmXdYjfRREkkU1ZYWsQ6a1bbnKfLZeCeuY4WtptVA13okcxHmywXwDJiKmU5BTmzpX94F98eTzK95UA9uha",
  "key34": "5YsB5T2C7jrM3ygQXzMXYmkcK5RZ6XJ9NygEWqbEtw1WJvQWqMyHErEBeEyPGWZaH9dvuuN3JTYF71fR1MhnRx1R",
  "key35": "3nNQBA5497djJwZFdJCHU4pehXLZzxSRYeF9KxGy252AojNgKN3MjXTnG6yzWkVdyU52WVsdheoYCS31pcwhDCAR",
  "key36": "5dK7TbaeX9UiioWJvBcZAo6B5mF2jHQf3xTdsUAVyH4JNYpT9T5RffpAZ6Rq2xk1ZygHRWtmk2tGnNhYRsZpfSPS",
  "key37": "4fKpciSR7WA9dSLvh9oPk4NF1ngqrNiQvYxy1nuuTC8eourEtwDTLYos6HNFpAFD6nNYCLHJsu1DQMXsh9zrisYB"
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
