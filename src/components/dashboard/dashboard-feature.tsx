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
    "2oZejxEUBmHrKUXygiX4wixhx4D5DCeqJznf6LEDvdczxqtr4wr7d16n66Je7c32rRZeq5wGWsfMc161FgxJw8jC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3SRGBiBFFKv4FnkSfj4bDQg9YFoYvjLWauoiXsqZ4ruRHFYgbBskaLPP2CTcLHHif6tEqbsLRwgLPY8DbC7kex",
  "key1": "5wYnET1XbUkLLjEb5vhQKP6JVyhMACfhL5h7ijbqcKdmFuSuHvanMhirUzBbYfhiSihwk4hZ1BiZT9nunW6Cb8a3",
  "key2": "5pFwW5LD1YAzoVUWkuTT2H2rBDhHcHAmPuriRxuZUjz67Nhar189fbZ5yhtUZk1XrdZ8HWAmEMNEd8JMTr6F5XNa",
  "key3": "2kofc1Tc5xZdpjpTx4bwQH1fssxU62JHjXSRKnxw9BpbsMrSJisLmA6kd8VS1yQc6Vf4SMqNhfoQPwGzmeUUCs2n",
  "key4": "4ta4KEptLJdKy1nZqcJnprx9buzNerjcgtLuv6mrHiZssLZFrP6qyRp5PHgV4GZGnpgKVEvMZBxbszP785E7UGr3",
  "key5": "hQiERayWBRGZudrfKEe1dysnMEji6URwJMdDAvnz6eDaMHEoMeGKv9majVa1QNJ6HV94fpUbg3HKNhJzZbWafkC",
  "key6": "2ejSFB7K4PT55i8yYVJMWpAUnp4iMQKYw4rdRn7GRQwwfNPR1FrBWHF3oEiNqQKDek9xaMYAwp8CqQf9yGqHoZEJ",
  "key7": "5XbCvTm2Vnzh1PeENp9pLLHNTJ6pez1yT9VTgpqRaUUquvNasonV8XAg3YHsPkRH7MNiYP4vKK3Gw28awVxCBqgA",
  "key8": "4TYpFmikhKV8WwhXJgocVX8pdJMi9yvsKHa1gEKsZcjmFX5LaeejEk5ZijLgNbuDcm3PHXFCJqBLFEjiivtegzJw",
  "key9": "65QeBPf3cweRrX7GdiD7sdEXvDGHCS4gfUZaLTCAiVL9BsMHsj75HnHX367BS56SaEzRqtzVXA5vJ1pVbjN6Fec9",
  "key10": "UTmjajgQauA2EWGuHZa6QreThY9DhfvhkLCFq2AQXdbz5jE3FLKX8KEB15Kr9CUP8u55VsHzCPpbfCVpWJDSkag",
  "key11": "4JMTUipfAZbaxovxD6JKqCj1gjw5k91J1EjrQjNzrWJs91HcLU2BzTHn1izzLiEwjJVTMy28qqxWQKXSZCzxKJSQ",
  "key12": "5Bk685As2cEypfy1xfjTHg1TkzXj17z2WCKkFxhkFDji3jKQ5iohnG1cxQypM9kBHiHgwBkE34xVYADUGdNGTHoB",
  "key13": "3UmP1qm613SrSoFzekGA37UzhVorGEtbsCiH1ebjJcu98oTV3whnzRNX6dAsGN1EgH2gKLY47b3nVmPDWtHp8vSG",
  "key14": "3EG2duKdaqpa55AEmriPNQ3f7BgvuTpanqRFqgn2jvA8J9uDvgwPC6gjEKkcgv3ysF4vgj1QMFd1TZWnyocSz9CS",
  "key15": "ytiWF4ZmHvSdjjRhi6qadWKzfM6UZFkMFu6RwTy5oNTKBpXzraHoimGdnWAgPpAWGPi8qimyrDwLzVviFKmxhQo",
  "key16": "6654KJL4EaUrKSTihD2eaEPdzx9vfMc43LKPTzzGSPgoEA44QVgbVh9EftF9A18mEsQEBADgP5YoDPq58dQErVCK",
  "key17": "a8b5c4MHup6CNi7CuoxGUDYq3dNy5idrp7zMC6f29Q7y2JwdiUdPAeGEEiwSuLBjn7apSPfL5s1zCVkjG8WFPJz",
  "key18": "3oLoGxjjHgHVaMsoWQxSwT268G64DrCEnMJJ7uqkC1L5JvgpJ5GpTQkxxNaFBgyCWgnbaL9T7C7kQxY1QLRY2fwR",
  "key19": "2YRzFz9vjyzkp3hdgd415y3GV2TtzEtzcKF7G7YpWYLspJuCd1AsQtSmyW8teiRLbcU8Fwjuaw2mXcpn2UR79cGS",
  "key20": "5MUyYww3GFe76poCQSyNEMY5ovUK3vpVF1ySWqqFosSqpYnosEDwH7HVcoxxA5yqmaamVDgw8TULM2zTPc6qXJt4",
  "key21": "rpW6XQVZjrGTq3JeAJb5aNSLyDuB6wK8FSNVP9Qm3hRy5DKB2MpHUmbfuXyaFNkNpytFwesL1hRT2Va7Qjq5YWZ",
  "key22": "4KfEUNFRmLHVWr9MgM8SSNMTY8ZRRGCvZeNcWnBM6b76spLcz6AzHZmzVWG4rBoCayqtsm7NwzbZjTjdi7WLBBRx",
  "key23": "NdY9SFu8zsAifMNbsGMDH8PfjAEsKXAUgetkR2H3hkirydYhZ2wc4VuctSiRWdya7YthAK7AqHoK6BUfavXKogB",
  "key24": "4yrE2uCN2E96uXbRvQW48o6nv5MeAVigzKQqDJbz2U2GpgmDr6VQieLMBERJaiLkz7RzMuCPi8wr6qj3Mt5qpjY",
  "key25": "4nfU6mKCzWN27tYZUb8RNz3goUFQ3HrCsJchrjRUhhWZACGx7kRWP7CzdwuwFEYfQ5zh2B7f84Y2bGKsnLAn5bw",
  "key26": "6228AtJWTj6vgANhxQR24TTbrVqpGuqFJ9MG383EkWKeQDTvhLs5scAk52PQUVP6uVpoDRckWqQep5Ypg9Q4W1vN",
  "key27": "627JcpgfdfatxWoz2wSgNz7yEJVLGgXaKipGtEzthYTqhkB7Ag19oiQGcdevSjERshSt961vWPtFhSsQcrk5R9JN",
  "key28": "2grPxXPhNQpFHSSX4GgAhRHDdzrRnQQvswGFDNz4JvfHJQcmhenZgeWkVgmjUDPFP24BujQwQ4vxjEPWGL7x8jSJ",
  "key29": "4RKvrJQanJJYiTv1zAHQ1xbHbFUcLcvwATBuu8fkMAD5ixBT5typLfSnx3YZytmifeDsWW7DoZXFFfVGy4NpEbQt",
  "key30": "3wg4Lbp2H5Yb5CdhFSrx851pH7GvwZhQaAEWu77LV19G4H7DyEgkUKBfT8K7tazf7ZjYjRWru3NCzBUt7j7YLvRD"
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
