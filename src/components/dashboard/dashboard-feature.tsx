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
    "4QFdwNaBYwwbQT5KyDHbS5BL7d4UVJjx4zMfrCjb1rem6s5L8XcFvHxXPHR9vvfTgTBzusNhbYStoYD4wazyciAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4AYDM16kjGasLM8s11ud9cp4qvq2bdzihfntMEdT62vwhkwKZUNuXmh3vCbk1WcZ1Ze3yhsH2BHFitM48hLDPU",
  "key1": "4BGtz7qVcyEcZWyYoHZZ3LB4o2ciZ7K5Mx82RUrBib1dTHbe169UFSMkzg6CmfJ5X5i9VFuhp3dH98haTXKhnwdD",
  "key2": "d3pPH7ZejoUQ6JQ659FLogn6j1LPCqAhee5CdUqTPtwmMok5uUwq2bfK4Mgk5gAYNms3crHLF9G2S2zUWqSMnD4",
  "key3": "4nA2tXrkQiLEkyKTn9kvnPeCvu1c1rnqsB2W7jcMCX14weyWKqvzCNvJ7SMDECdFGwpVYnZUNSgpdAoZZ1neBiTW",
  "key4": "3nDDZzSVtySoPPwEfSann3qK6tixNB79TZP6q2XCfEKJ2o7vtcwBCxRHRq2k2cSaBdcZJWf2j2TrNye8XyobD67Z",
  "key5": "3yPXEjR96hCZLkatbYj2BoP243ZadtQ9LRBTkPLuMj9HAyP9xPoQXT3eJ4FjG3khMuXKrJzPnJcdxCWMuXK1DBh1",
  "key6": "5PYuohBKABy2Pt3hxgToGUCmiFbeYLAtzDLDh9KvV5Xvt7XfaJZDSjNsatBby3kwcu4gvWrS7g9yuoADTRzQ7irs",
  "key7": "5jUbPZBbQyvcsRQxxhY5XD8xCVvnh33woALySkiiSMJPFBuu2uo2kgBm2RhZua7L7AiDqohtaUWa48imtMWokKPq",
  "key8": "2HvjDEHiwcX8wPiACpBSQeCcMttpc17V1pqRiTVu5sHXD3ABrPSMH2qY8TwTWACDvW1bCt7yQTk2GRo7bVocyKiz",
  "key9": "65xrE31ewJWvnaQ3NGzEDQ58LPTP3JTDLDJYvP9dpDpqBiHoUdCxCaqRs6o1RpUqmbPEyjMqo6mszRmwVVkuVgD4",
  "key10": "4fEk2YHMQjdyGcxZrbabpihk6qyrhpUtWSpKGtCgNBVCAR3tkZuthvhU1e7kmNDZmGiwVzGdysYRSv8mfGNgU1YZ",
  "key11": "4Mj3oqWyKVBmtArAmxCjyh84HGHGXKQtyTnuvEhKKjeSGeCuYMNeYrMjipoCbzd62NRwD869snLXTZuSqqg7LsJW",
  "key12": "3qRH3MxuxmeoMGN6GuU1yTtcZ63FmeFHCtYDJaYPQfMbTMtDmpASM3RvWgwJxc75Pzs3f6qKtLAMU1SXzYiVFZYH",
  "key13": "2kfvYHnQHmTxe5qRtfRpp6Cq7uyG5qK4UtD6uW1DaaTuCuxPrwyiXMk3EvHnfBVaZgCH3u7R9U7LoSabuqbT9fnW",
  "key14": "3JHSvRXqoSCbcUJRRGSHEjdZgWHJryLmnsy4webA6RmwWjdFN4WME2q5zvE4GUQ6Hn6FP7Mek1cgRiM5Lktxtmw6",
  "key15": "5DJTMA6YjiiQCLNurjUog72zTxWq6Z4KGaowFa9NYDWWpujL1mmpQgeDsKj8HivS4q5YWjuswnePLsJfnX7hKByG",
  "key16": "jHW9KrAn7qRgBPzx71NiBSJeVWwbtaj3LEmyYG75Gk9QwsFqscZGo8XAvQ7cBFZRajhks2LoZfhb7VB5MeJv9YE",
  "key17": "48bsTk1djw4NonsBsfC75pdV9u2WUwv6j2VDEkYGewq37KRM7RFSxi2n6rMgYxwoJkzwq6yyyCfcdu1H1fE3PWhF",
  "key18": "39P9zPx8r9QUsU74eGoreyXMgwCNQZBDwLmsUeXqqwj7yBAMqryuk1avHfxXNNhr1PGaR3g923vaeVPb1m4UYguL",
  "key19": "2XgNFSZQDMdXnHJLP4oc89WJW31c5NwdPhuTGpudbx1FJBUHi1vXGQt1iRmTx9rLHmrEi6c4YQtKsnsmqzJ8Dnge",
  "key20": "32FmYav6iXR4oy2kKkksg67JMeX4NeSE59DPu19mcQ3xKbmDaEKBLrsZzQ81Nx7JgAsnvqKG23Hfb2PnFJDxL37Z",
  "key21": "44n8cA8dBLmAYzR2T5QknQd9huhQWGqpdx4BRjrVJxrRJFYpqZ6U1WfTMFeB9zJMLcHSB5XZ6s2Ed6ex791imXyt",
  "key22": "28JpTUDrABv9wJn7xwqAZDrLgJTe3XUjHunqqNTL73PUFosVntcEqVv14o1mvm2aag92N1dy4oFqux1RfXbefqrF",
  "key23": "5kG1naZBVyqZ2BodzqXR3fbpjrrN9Pik6Xuh511qPVVcWbMJtmuKNpS7mtQAkntoKJ1sNpfFVJU6aBjAphDkaPx4",
  "key24": "2LYzahjWjgNzUiqvcFMCTgfBhqV4YWEjbbuKAP9JeMh1G6n8YReeGUNkBZhtzzZ5YmTx6qRHV9BoUuu2ridQZdAF",
  "key25": "LSWWA7JP9JMNVcPTjWmjKYPuH2ZYLfT9aeCorwoxMysCAkybYDLUZb8BjSsHnkoDT5KCkpxNiE2S2d2sAixzvCR",
  "key26": "3dK7xkKF8sFv2GKV6Hn5vyDzoTLd9D3MTghcHMXxYiJc1EjZraj5QgV73M5qcPwTrWux8yrGYqqcBn2mEmfc4Rhn",
  "key27": "4emyXPvwnE3yrRHqkz4iPqUJ1yiKekJEdmfa2KTPHLkiuqQV8Uab1vi68KVZkRPcZ9tcFzosBQWP3r6UP5CRRig1",
  "key28": "2c8uLBGmJu7cYW6Zw9cbacWLMUtR5gV7a9aWJYk4kF4EVUkLt1pWwnqGUELnLKv5FNsaY8FuofmNccjZbwzJoS5G"
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
