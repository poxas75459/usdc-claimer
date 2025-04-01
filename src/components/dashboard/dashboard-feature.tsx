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
    "3oAJMPqmczMKWXH1s5E9iWaDZeTc1wiqWJHcKK1vfjJJjVuzyQ7esbu22FmQr5iM7P3QM5A1xB4YiboZkizFgL49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBX33ZgaNQdXTzR6wYpv1NCcEkfXns5AR6brLTgqAV59n5auLJw4Md8NcLQXJCN41kwGbtg1PaAe4sZS5JyCdPZ",
  "key1": "2YSEfW6R7TQQZfK67XHGc3usUW41izsM9eFgFJ36FZRp5zMEL4LFsaEBDoCJXjxcnsTXoTRcfd63xfyaqttFg66Z",
  "key2": "2WHNoHWWehVJvmPwo1LdUoEGUz6ddansytuUpMWKCp2kyM3dJvZXsrVrJ72y4FKCrd4tCDDGNQ6J1u1zochRRhay",
  "key3": "3rwJ5X3F12nxgsa2FruqtL2j79t135PFiVv6agdt2LAz1thqqURQrMeM3R3rR3xwgmhnBnTofyUsiFuoxsgVWo8k",
  "key4": "4GAQrwNoQFKjtRq4SxFTT9zycTcMmDpqeQjinVMMunNXUjuQg6vBu8ZSNoX5uLiT34acS4TtrPwr5XqoUfpLLUSY",
  "key5": "5y7G5TTy4sCzq2zvNXcB41s7fHkkmFuMv6PiZtmbAxJfiDQHC9NbGGaj3NX8J8bw1Fb2Me7riFQxs39Gqr2f5acL",
  "key6": "4NZ8LExbmvcHLNskxpmtYfUKm6txhxYQqnUhmgZakPvcdYJwznDjdKQYyPYkCUVWTqAkZdYp8W3XEiTnHyNFGmXH",
  "key7": "jEhXW2n4XkKa4e6xFmnMZNRvVjetoP6JnzEyLSN9315iKjDyqeog4iNduU5GuYdn1pNva9hVzcQt73TuCLLvkNe",
  "key8": "4DN2ubryQKCzrV2w2mJaiMazkvwStJfTpQ7cDxE9MkwdvmE7t2NC9fst5fQufj8ZoKfF4ScpWrajGsEuYXR8S54p",
  "key9": "qDqUDSw551mvijvD4Gi2XzCBw9L5Y8pHqhRk6SdPM9EWwafTDruyEFUKrXoR4RqvCtvaH6ZkzbMF1rM9zaUe11P",
  "key10": "25pK7bpJdCt4Ji4ZGF4JgdGs6PYgEvDJQyD7UiTVQBP8rk6WXWe4khm5A5AfJqZoXdTe2xwjJUquGhxLii6idasH",
  "key11": "3j8ohZiFp1qLdLGNHfGobWq98rikxXM96y7PUgG1xs6KRa4jvE4irPpcQEfJrfkoxue1fDB5oq4xfp1Xa5p4YdUu",
  "key12": "3Z7QoieUkBTqo3PuXeXwtYQi5RzUX2dzLWtu9hXoddY91ttyUZ1G7wRiak45GKZmhg1WhQNjYkyECtU9Z3ciGKNn",
  "key13": "veueNaiaWFh4B9CqcPsyMkwb2QRwT2pzVcUMPZGwqbsyb7zdqNpUEtHEPc1YzvQWyhXVPjzeRUh3mRodZnisbxU",
  "key14": "2NSP9BKLZbHundvFiEnSAqDxoJr2XXV25X5nVuXkuiBX69HM4vQg4iZynZzQMSXsUTnYU4Y91bxxtPjuWaevQfpS",
  "key15": "5FX37oeiL32MdJ8rjJP8w6fTFJ1ShWTMcuADFNBt2d55deiWELdc3zJrhNu2j9HVWoebu33mQnzuFgvL8JmqSMdQ",
  "key16": "5MhqxqBfa4f4XHmNZZFKDsXUkptw7b7m825iB1NPqQ1xEhUWGeqEhkQJReW6Rv2dnRjwQfE5i2Z5vGAXCuJ2QUB8",
  "key17": "5z4DWFjJ2Ngq78Swi9E7EM6ACbZftB5ERZBqgLsLHyRxw4MRnJu9NQyTCaR24U1CKw6gsKNxapbARYr76ZPATgLw",
  "key18": "3vuCd2C5oSAUKH9wCZRnwHa6MnBCLSsQbC5vymYPfEvJWW9SfjEtH5xayGppBdFaVkbuNHB6TPYQns33ikVNZCZ2",
  "key19": "4VQ1sa4RhumksjonY2hWxCqpRbr6p94m2VWPe2oyuse9FQhPHbjLZxG8Qdz9xatEgD4hYHGCrEZZDCkJ88jsZFgJ",
  "key20": "5CqepAij7RD5fM7UTJq4WXAQ4RPY4Jt8r3z2Z9J7E8PCWJGyBxk5ZFFhDs8kawxnBo5kY8uFNqxRzUeRtyFwrWQp",
  "key21": "iP2YJzznEipnPonBegaYNYk7FpMbHTYqwmWVPUFDJG1c8P3zKfQLJZ6S48RvUAbZAojAe4cns1UeEyuXozmxcar",
  "key22": "iGpa1Exo9Ky9TTwMFvNHuexMrwLpXBcg1syzUYo2CZPVZdgPdVXihDWzkCboPMSPys1kEWSaYajAgZecGhwKk8Z",
  "key23": "59XgEKLMRT8tCN5oarbr3uA5F1nqJ35ed2hEuN7ehKVqP98KLDJxs22hhzQ6D5Kr8vhsajHKfdw17J8UNABJ9KLj",
  "key24": "4ixqMwySnnQmC1A5vctDChpgK7nJgeLtQg6GSY14GtHoCKsMcp9fFx2PM2ZS8WUVTP3pFwH8ExQ36GHsR8oDx1jY",
  "key25": "4LfJ8xESHcZMj2V17Jh7sAnoosCQYjg7QhN2LzDhgehriL3NLBpvWf5ePm3WfPiZ1Ey9re9JV5gLbURRHRQb7Se5",
  "key26": "4k2Y9Bgp4AHiJVM8uGpk43pf5eyAXcDuktRm8Wr9zqeT8VYuBp9nU7F2vks2RCXBeoV4Q3AvoCDBkVtpHUrswcVA",
  "key27": "2rBsuNondFBNNV5NjYouhX7nY54X1bopjYMUL4iZEt1s73WRryUfZbDNZEMnKKfryk9QxPpq6Sz9Y5u8vqCXcVKe",
  "key28": "3LQduLXxtiWq3uXG4pGaqwAWjeAWEA3JQP6eFsViUMH1wj8anpGftvmWUcURs7RBJc1S5U4H5MMekWtoZZkKtPXS",
  "key29": "2hZqCkAL36kTixV1sGie7E4groo4siw9Y1kCSDeoyjPHNkzyWdG27QgGpFACLnsBJbo77oey1WxnWoWCPy3vETGz",
  "key30": "3PcHmvSZoTywYtM7KEvMmoTX6MP73XiC7AkEEQi2eqQLFaNefLJzUoGW8qJQZP37TPiqGhrNWXzBWwm6YzAT1nUu",
  "key31": "372sCkZwMae5mLwCMxTHhYZD8i6QLjxU6KMSanmwdkJXw7DzW93EjoQ5WZcX6Qmz7rvoXsSrfvSt1FKnK4xTcFCh",
  "key32": "ooiKpmWGSYqRiHpUskhpSYKtFYuTcJL9UHQ1wjsrvBdh1TkoMqZrwmqKJGo51ufJBjZug2zB86c55G3VVCd9Ypp",
  "key33": "2ZvP5WR2ADgAgzoXWtrv6Yn7ZpcgmTe3kmYR926fWQKj1zUAdNY2vqhgGkiMighm6hQHgzLsBsmJbxF4PuVfixKD",
  "key34": "4cW3gBu6qidG1rwTgSR4ftMct2Db4rXT9UXJShHz7PfURiCJjC8HB2YLiP2XjAy2jaoBaDiF1QPxzEBp7k7vFiPf"
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
