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
    "YjynG1VgBsX7jt794FfBsbi4Nd5mZ56AUVwQvFRUAjmrnDkoVGgf6PmCSHCvncmRiTSrefzh444jk18d3Pp7HDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gP4SnNCTtcJZMQ27AwqwXnmSPpwPJcXjoKbZRTrdbZFk9hbtpE4EKosYpYfCWCVBKFxZJipd4Q9NijwHUVSYBe4",
  "key1": "5Nt7dJcnwK7C9imMmquiEzPcH8pUPHNr6RwWr51w7nb1phN8VM3yzWXxQ1KXQ9CFCWiPpoev3EJn6HmP19X11DWJ",
  "key2": "KHpw9DatvHN7PHqyrDNVm2fqnLNDmCic8EW4PUqUHMdiTD62cQAenFCztpwgTUMwR5KyDfLV2X7uFWfcjDWFHqK",
  "key3": "3SXq5ACYLz8LBMAV8fhxJksGDpTAdYgejaatWkmWvTwBSY8ebyyNkByj59NAbERodGD4anS9thiEUwvFe7jtXVTc",
  "key4": "2Vn87mBDBACK4RYVDa7tfzA37ps7v8BtrrdXPzLGvSMRWk5p5diztkRE1vdYYsnSw4kyzmSk6wBeuVUupxUVqMBd",
  "key5": "2tXtRDDJbHcUvUhZsdziSVpUu17bBfVr6X8SSTU9s2Fx8MwnyjXQC48bG9qv9Qk6w2SHvLFG3hVi2VxNGJZn6Kwo",
  "key6": "2vGDcvqTNz14BGSyachmi7EBkhyT1KeyEXaZ3GPwnH4cno1cdsz2kk8nejcY6HfWmVD3pDqSTffeo4Ego13wt3Zh",
  "key7": "5r9BVJHhG8wyWYmD6BiN3TwA7Y35diPvYhRxoQjKsTRRLR3tAn9fgg8ybbotXcs12MJL1KxfxaRZb549j39wXbMS",
  "key8": "3n6iAorvNbzw1yKVetJea5DEzzm4pEYRZwVqiuGMPznKWNxfwyKwE33hgtbZsGyFjeUZBfF1yVjJJ7839QP376Tp",
  "key9": "5WLQVB7xrhsR5SB1FqPoWSQPShFz9RjyAS997rzXsZbtdHKTNDLpvutZzSag3f4tynjk9Y4UGrGdumvfTAddfcWo",
  "key10": "2UHb4j1kQZVs4CcbDYmhNVmVAMPEqBdvnzRCeHtBdJHzhX1FdymKNEJfqj36Lfo6ePQPcu7o8SuA6K5i7GpLoVG2",
  "key11": "AvPkxDPYfhgimadbw2ERh5eNnuLjLFdyHGFtd8SSbTkrdFkexXJvm6bzvYoTc3SatVcspwan5vDpR7TVYyzGy3c",
  "key12": "57X2cVTvMU7dvDdpQQSJM7vUcEshFUpSfqbDBmLiSabPNVGUyRVi6VDtTJMFK9jpbYEyCxVTLxdufKb4V8cmrE1m",
  "key13": "3T5fJw5joJ6bQhB4wTbhiszgg7Z9WCxQ6rrDcto4oWR8S9JyAViSss2ngZoVZBeGNQdRzH7upFTAmHCxmEQBPVr8",
  "key14": "2oDGTMnQPQqhj7Fb1nGFsjEiqzCqkFw2MQBg9QvN6vBvk3i14eMfLJ7rzuM862wC3NQTfW4L4azeFzA7uZ9q6aZw",
  "key15": "3uoshU8PtwfyWYjEQV1xH82zC6CSgL5vwFnpZyzESWf3xoPzFdNfijj4LYUDzHi9no4aJZK5Joij3WJuiD4Z6yHr",
  "key16": "DUedxxedfCfBUqcHhQtyukZX9CPCfjQcZDWTXGcx9eWc6N6ABss3SZdNJr7Ljv8xMM9zJKhXGNN3jSu5ke6svAk",
  "key17": "2UHNQqoQJuoy6hJ4c4i51qQwsXWiczzV6b3TXb4UAvgrAMJjGdHi7CU5SDCcHzGteNaEzLipgNZDvXako4mU69jC",
  "key18": "8MPZc4Vw1YAN8Esf3Z55f9sR2KWPU25FNu9UEgph71N6mQfWwUPr3HZquxu5Mk3r9rdsv3LjfhAU9bcfPcEKPkn",
  "key19": "34VvAMrEFm2HetmRP419dw7xVNqJrjc17BUR2zHLxbEZmoQGYtsBfxcRxTQf7dAuhEgHn1gducJEjGS6L4hr5qY1",
  "key20": "21jfT7CNcfhUkXbRC8rpEkjwLupAHFAo4UHSSLFaaCgqp5nthBRr2N6vTQjwEs8TsFPsV2WW6Lex38bGRGyGH5qQ",
  "key21": "2VvjCLoDRMTFFnLEU42Ac43b12Cw18d8yb8Vm5h2tAgv555sqnKRnVrnpMLySAs8tXQ3gEjWNiTmiLKTHvB6MQxh",
  "key22": "4ezWA1SsneEaJ9L76hajAULhoVrN94XKu7wnrVJjbKpcjkADw5mF8HxZmMDHzMKUTuXop8pAA5hBfP8Xd35zmhzA",
  "key23": "4vQbJoQCMtrnUcXrkrvgMv6jGaSaPEFC7oMpv1EyBFpba7cWGASf4iYsrax9KfN5DuhdvNVXytpxp1JTKfhQXm8u",
  "key24": "5jshrMqNBYmRPRPQedzyus7ro5Ut7rSFsr2M3jDb7HwxxPtGaa3GwkcYXaDTLiK52skXch5e4PztxR365U47ovFJ",
  "key25": "2p7ZyUn1EhGJBceW2KLDBqvdKNWWFaeYno4M7zNqoY3DMbMHaxvNpjzGMEbosZkTyr79Z3t9XoBPK3Qpf3GzKxKL",
  "key26": "wNdJcRnPaKgcxnKFvjPdkCqpfQeUgN4Kp4chrNP2mYJjDuvsABPWwHCN6wrnzQHvJQuUgwDAcF5h3edxfbQSarD",
  "key27": "3VMMubJd81QLAUrcet37Ca7oFL57DNUijhnRgSU6aTAJwPA3DhvM2Y7TtGv1uxHdDyZ21CBkrqyrBmzuXBaz2qrH",
  "key28": "5qwBucrJFhzACTHFqD5FVhjhEdeu8znLhrq4nzRcnbUAtVW7bHTNNx3X2drmnUSHH7UuSd1kveWE7PrVZvyw9HDM",
  "key29": "xEVgjcyAzomg8qri5kCzezEsx9tQBubtqs7ZaNtDmkNZytCJJAgUco4ULv98rGV1xTFKEDCTB76PfHjmoh6wvnB",
  "key30": "3PMUKz7urjCegSAYB98PgDanBJqve6P5LQFwzjvMxTekgjxJmRG1Jve6D9fLjLQqpq8XeFUZhrP1fP8xU6iu4W1g",
  "key31": "2RW4dPPvy7byLxpQLot1aBxkk9GEuRS9Vpkq4P7jsJ5yjbrEjDMkZPbnjnZ1XfEcsnnGhnSPVpBtJEB35UHz31gB",
  "key32": "jmryCxKcAisCXzS7PzBMNwE9xDZPGL7oBizQNi3qm17uGWfJJcap7sZjkmvFhFcP6MFyoTqG3DcSwdgasCUdDvp",
  "key33": "3GEXKVawJESLP4GFeVEmaaStnpf77cMp6U1epjAngXJeHatVeKQg9cAtZCZA5ZWoi8bsGj1GpfMr2aa7xyXj8HxT",
  "key34": "2ggHg1DgXfw4U1nCmftzHRzZat2BCe1xYWjghPJMV8oEEjqGSeNryX8sXi3sMG6htcF88BUWecWfFPq9xHDdPcSQ",
  "key35": "2N3oHbs4JKr2nNoS578cq7PhsBW4RdUwcxivPbNBmYm8vJ8Dd6Vjok4QjAyUfNQJZFF3KxrtHp5pr6qMskHauE2V",
  "key36": "5jzXAeuCKPupxPLsLd4afWuwEw6Z3cwdvDn8GQfsLZWHRMdvtpfyuQUffZLJpufQVM6pZta8mchbGMw5LyEVAo7h",
  "key37": "2D4kUpoLqM2gbEp54nPbKbtFvWjJAjygJzFN9zjdY99rexkpuKzxMko6y11EcQZmsqbug9xdWJdaubMVAyYV3gPm",
  "key38": "67Gg5Lxnj9Tq7nATsrM4knkKZb8KvwWLDXtAZgXf6hNYHYa1HsPGffp9SMSyJ5LhGZpJ44YzFYM4zvQSL6EktL1R",
  "key39": "3n9KQdXPmhv8ogTWrtDYvu5RfYxKKLUZpff8pbgBmPzQ9eqKueCNQFnG5TV2RoMqahybvMDHSobXLJJhzbhb1NWD",
  "key40": "5EVWP313aV4QuSMoEg6myweHjp9akUucSKacqGCMi6SJRvgr5eSym24HVuaSjFXpoQ7fMBQA2MDxUFTd6HFkQ4A3",
  "key41": "4oy1a116YAbBWK9bPQ59fd2aWbfLHt7t6aPPXUkt9s4KuADLufzh8uaYQ9mAgYjMes4hEWtGesX4xFgw5ZJnGdPm",
  "key42": "5ZDBGQgEAvERwx8A4Jc5WqBDrk6TpLKXjL8Q1KenvtVXKYbf1hqv7tnRhTY37JngHYPRuDQGwJPNm3qYKFJWiGBV"
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
