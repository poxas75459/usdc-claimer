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
    "5kT2JMTPvCKzypK1nYGAea96hhkHKWDTDVT5HQWHCqWhM8xVpKGswei9WzcP41xwMJcYDc3TkXYpnq1UADYGfHB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALfjaYZNPars8cbq6osQixcQtXK6PsjCg9qYB6EuorAaRdsdAETbE2wBT2bZZRXREthVtJxLcYZzysujPDfDP2r",
  "key1": "4xhxb8frhQmyqVitCB1ioTG4g9zvcCpGHNN4db6ZxXzqop8PhDuFDj3ix5JDYEPYj6ZMEwM4PcFJ9mod6uSXARCE",
  "key2": "3Q2cPGBawHp4CyKZFvzztxRVcdph9xh6TaETgwTMJErDrkU6eJGqfofNcjkA8Ao53RvsjK4fSEr6D6u3AHHZvWXD",
  "key3": "2PUsSqcmBMv9qtr5wzvRndJ8YTPPySPBBkxnhswkF6q6o9pgzDdFP5kZ3QLT88cAC3ypptxpLk9fi8UDxYdzt3ey",
  "key4": "42PfC8CcPNangdDxnTS2KSfhkfKgvDVrpfyiQb66yGnWfYHY5YAKEFyx8A9eZAx24zHFZx21hgYicYo8c966Bsge",
  "key5": "4ef173Kpsd27HKgw7PBJqm1kFqQPSUJNjpYjRmhkfguFhH97KdR3Bw3DNLWYsrtqWDPVtoFuWVchZtLrwsQUu4gT",
  "key6": "5MS6sY387ChAPS23gDf9dQ6qy5bs9CYX2mjJgdj1UHjLHZsHyHnkq7dBEuinZrwTHTKW4XSbYxTx4yjmYFFxz5B7",
  "key7": "5vidJXve1YbWBEYeTon9TdzBKexJ7H176LbEwWaMhREjGU9FSB4CgTGK7tUYPp8gYCpQQk2YkQewLrK13HZmv2o9",
  "key8": "2ufyCndfA4jYxiuJvdnHr6WLB3WWzEE1FMauS1VMJjaUvWDrkLvwmd6af8J87bx1xxov13rhLLkdFXYXQqvsisWV",
  "key9": "4GtNoMthed19ouS3ERX9kWpwGFhDn5QPZGEmr4RnZpi9K4wn5UysCD8wuedc92m1fTEdkdzDLhb6PS1VF1pmi8hp",
  "key10": "zx9K1cr5VTmRdM3PvSwMbXk9pp4Z7MmuDMrnu8AkVCaXXaHt3AytsHVmSRAfhP3rTK7EF4FQQ2QKeSr4nLqhuYB",
  "key11": "69AyWciwPEdNsoCA9g7uv5A1s5BCgEqGtErSbC54Ph2vB26sJM5dTh4RyqoBn63ieh65HLutrdtAVxrbZtKHDty",
  "key12": "YLcwcTzM4kLQMsXLcncqXRaTkWFwfjqsskXWGFHaeQqKAyD5oNfEoujSRgm86FCs5Z9M1oSm1fy3gLe6w36jM1f",
  "key13": "4E1WNe8qF3p3WTbhgkd7gtxxbmQpexkCcbELVNF4qhReCuWo45FHumA3mS2ySyRmHTwQL7VqhVMHrsT2wP7cK7yh",
  "key14": "2qwWJgJjqc7iajTSxrPZUVd56VMHi2juAS2xrRrSX6eAs4hB3812c2LLCpe3f87o2VTRRxTRLo4eu5SaquBn5APu",
  "key15": "2WsfFcVunDSDCToKcCdHrdgFSTt4Tbnzn9MUrWNLRx5pEyiagEMiPLH7xACc6NjB2QEawooG5eXjXPKXNFnMiKJh",
  "key16": "3ts1Q7C9L34zqmFhtwgFT6gwDduVDP55hYDthkQ8bD4in3GBj4n1qswXfzs4wsBndFYBnKvY5qnK7hG42KUFiRfY",
  "key17": "4ZcuqCupCU4sT1UxRQkWQnho1GvfBRqPzrqyYKkb94W53PQ5FVVFucw5fnn5tYDdEpf41HYLvqDVdU5i1rCsgfE9",
  "key18": "3Psdf38deV6hv3DjivCvPaEsuDkVpLgZXLBPYaSe9QvTHMjF8T6cHNDPQRiucBWQhMwRMDqkPfqQdhmCsWAxd1zu",
  "key19": "5oS1nHnQLkebvQGzH98jtncksEkHRZeZ1yse6i76bD9cjTtz9sjfmHGCsaszYMktefwdoNLuGGSpKaujTxgZ1Q5v",
  "key20": "3qze8PyYAbtXyKMukxLeH5okuQVdjr1WQ8whNKY7dn6azQ5HXf3yosXE91EqUXmpvnVg6YU93WtsJcN4TDirjFiX",
  "key21": "4W6YSME3rXm69xjeFByQw4QxiL4H9ZF2z7ijk62ZNR3doZjcaY2eBLgwKpgMPpabZzQzpL2LbfWGddgB7nTAnNeC",
  "key22": "5EmKEvXE5XEsBiuwqkCxu9d1z8yrRG4hZAPZbxAgYhkjEvbwQeGCx3LKtYRKuxxEWFdbqPLjSoEHMmjVeKhgMv27",
  "key23": "2Ruun145dNMrcmXu4YRb2phaagd78FYkf3gZjPxbnM2QmqmWM6GAXjkCRbrJQhFYUs7TPyGrFMg57nPwnjC5stgF",
  "key24": "4NbEx6PizN13LtAj8r6GU9u51koidh3Wt7Xj2jRSxm7Qy4r2mrR9M8hwHjh6HaVwsRch3R3vV1UmqYQJvzf4sdZk",
  "key25": "2j2yDJv9gT141yVckQtVtLCJg62C33PDmDHjyMqz6Q6s8cZc1iB9jFd3nLkxfPLoTJ4fL3YBopQsaNd6vbtEXmWR",
  "key26": "4iLmTsVgtNTmTKUssJayEVxEbpZiTJu1nfxyy4CS4aZAYz9YahCZvFRVZYWmtmULSCeuV3xPkHwKFT6FesmHggwb",
  "key27": "3EMpWMhV8oDEvpsM83FZ1yZhvQmV4osW6tdi7Y94JTrG7TK3ELbKGyxNhmgDhL3RwAHhQK9zWUaq7VVApRkyZG8a",
  "key28": "JkceM3G37qF2RvmaDuZFzMyuaAbB2BnUN7wnLCKoPBzGsJgGz6L4LpBvursapbFZDEmw8i2u9dEsmFpps8zsAKt",
  "key29": "uh9hDpgoXnWcJomtPh3VQxW8zBQHcmS1B3FMYrMSWraEtPnDPpDSp6WBen52z6E8xHbyJHhkJG1D74NyNeHfxZy",
  "key30": "5guTi2NKMVZZdhdMia3SZmAeMad4RfUzSmU81Gkx3uzUscAxwMsFnYuncj4mC7JSRJ4hCjW8ZTkeKC821SKBSKoY",
  "key31": "4nzvs19h3vZcY935fptB3YgJw3HVJCHDqCFHFdSs2sRRqWWCNPzFt8aeLs919sPgpSiKk8N76CM5rGUDEmABDu8e",
  "key32": "63pyRKaaAQN9pYSQGewr8hRu3LYUiczx1cpq1VFji3xeadwWuvbUim4WS6vdcCPu1TN32zdeqjPcXKeexXKE4tWj",
  "key33": "5CfteZrLjAx29SLyoHebdwTHGyJNChe4Uv2zkSLALrvUm9bdpJSDKsmsTzofKpvryEgihnD8poTZjpvzVDhCb6qU",
  "key34": "26msF583gbTxcv8LGd6PERLNAYauCk1mw1rXcRKpN4RotppVKV4ZD677p1oWzhKkfF5yaAitPJupnMGD8szzt3CB",
  "key35": "5QSRvAkx6vQE5R33FPZtvcpYvTr2y1iZAPpoPBiPegSA9799kKvm8q6BCWbrLhz3yUWxVuLhk6QcMEmfRMzn72h4",
  "key36": "5binhKzJ5X3BPDeQVTaaj3GbQYvGMTtUbtCqS36STUhStfSV8Mm87AvKKTZrxUL77coPUyTSTMb9sf2CGSCL28wd",
  "key37": "4MSnYHVpaQ8EJCpJLeG838q3frMt9zJ67rrfgb7L5Jr3sNT3vNrbEMMEnHWEZuiQ1GE8LLik3gMCTnjxhUjwgZN1",
  "key38": "59M5omFedgwxg7eH877FsgeJJGqFF3kPZ62MykTXYyRwRt7rUaCmyYUuQ8QzGMKcWFAvj9BYmPVNNYVBhGuNQfZc",
  "key39": "TYQG8J2YmcXGB2hb9iH2TiqibY9KBsSiqVPW4keMXETRNdxvufP9N6x2G2MoPs2t4Qrxndzt7tHxnU61pPBZ6x9",
  "key40": "3atUxTmrnWcTQ8D9XNzQN4CMnQy9sjucqNf4hd1chAdQbiTACNh3svgiBnV4LFMjfpkLs5Jm3Fv6wxARauh7NJrJ"
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
