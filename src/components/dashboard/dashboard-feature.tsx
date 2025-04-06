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
    "4Rt8toAttWHpt48w8X2AP5pBfo8awCtPbYgDjMTqmctUie4mkWTGwc4BZi1kaBxjNP7C1uNq2P7z9tSufrewBbSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJp39n42pxTjJTd4FFV18HRQETpxur3Zcq1N4spRNwpdHatBuUfcftANpk4srmn4kuH25uYLQoqP2p8xrBcyz4i",
  "key1": "3hwBsGXmPYD439y945y6x35wLkNk5S5MQyfPuPEZQ5nHDDYmPWdFEjh74ZQSmat2abxJq4eE7V3UN54RjxMWomSy",
  "key2": "85WHmxMgC9jhEZ3VepdqHTytr5j6SVgdiB4aRJznW3Mt7rhF5uynvnhBdsK9qYKwmKo8vyuaKo73cpRF4Doiwnx",
  "key3": "55X5ahpG2EPUuoRWLhUsMVVZnd4dhhHnFSs1rQof9RMMMMqYKNxBnNEULwk4SHRginnUwY4ANbp2voqUwS5Xu4Ng",
  "key4": "5mzuBCKir34e8AZzaP23kFjYR8LNXfABua762vLTyYzRnCW6QyC6xCuageYFVu4NcWkFRwMjrDBpDBGxb1jUEzQK",
  "key5": "q7o4C8SU5JtEJqKSoNHLBwRywkL9xteB6NtXrUvMwxscGk1DUmB7Pc3fNWT6CyYfBwECg7xqv55YNhVM8aE7KdQ",
  "key6": "4hctuBswqfCbY94NUie1t8uB5dLmJtGffMwAgYRGzgs1KVQijrt4AxZkFG7gquGhHHgZ9SRKkfGn5onAb3ao7hS7",
  "key7": "5mjGLi3eAoR2GSCb35Q8yXGti5YYWy8ZEfYd6HtWj2vWeW9BCusXqNXtos8Sd5nriKBecv1fMK8gorNLWYiXabne",
  "key8": "59naM5jGdELkE3PBqzMVav3hx5mgKYp5jv9mGAXEH1UvqysKVMJDU9kR6wyaLs2th7xq1DovBXnxcxhoJe3pnprK",
  "key9": "3ugdgbooMvM2UtJPyU9FjLhf5SSzKW2bSpH1X7XSKyrq3hPgmz4uctvJjysZVB5PajVJpYXm3Y2NNhYqMC5ictca",
  "key10": "2crpGJb2tkoFS9U485QEbVH3qumDnhsFnB8R5prVWHPXLJFqZKo8yP9bd6TVkLgBuKY2HyWBh4Z84nJ8345jpKUH",
  "key11": "4rrvL8XffdKuvv4xfiDHhRFkeZ5GvUrZZYoGDsfDoxNZEwbPZGgTjfFNa6cN4kt5Ztu1sz8MQ9ycJvNT368WLg4g",
  "key12": "2GN8Ty1MybjHTBwxuurQsktM13pKCmFozygkeRPPshT3iFH3uW92BEiPryezwnshxmoQdi3iCpv1VYpghvbGAFNC",
  "key13": "5EzFJyjpJhkMoWHyjYDX38w6cC69Qd28ueUGQbGbwC9DouZqc13GQJPAsFq8UJCJajrQpWUTjDQizQjMfChbrQab",
  "key14": "3KyvY7rmKEZ5FFDGyBvaVhn6rnAb6WcwhDkyb3EDnTAbFcoAyKzHByvAZVsUwhF8CXQqBBkrVNEY9237wtBEe7LP",
  "key15": "5FkdGgTyB86oSB7nqGFq3U5VowniAYLdWrUmTqg7LhWzHJm7jvEt79MCjf5PaeoP17VGBcwmvDRq1b5PZtHiSjSL",
  "key16": "54c1ph1irWXJU7sCUz5dr4saeGTSBi8BmTGk2NQDHDKenWWSBhvCijkJAPyVLeM2itaxbqx1D6iJ5ry3fDGdAwe6",
  "key17": "2KDUh6MWMUFycfEDHrvnRz2hhLjFSfaosRRFHccL7s33DJPFVUXuemzjbKBzJYi7gGwQgfomZrqQbZfwqWc7b16L",
  "key18": "48qhzzpeSChL2LupzGbfwzWF5Z1JrdJGfmFpkLdCuHhE8ApC8zL4zvTt6DtcdsomMDNtiLdSvePFzjFJBrEuXT1Z",
  "key19": "eafCzzMfTFYtkr4GzKSpkAnAKavz1BSMwBQytSmKjJq5maFAsEaCp8pd88DeTWUcRNyjYiUXo54UukdsBrN3sDf",
  "key20": "33EnZhjNmMVEtqGXbbYo6whQUWhArHwTQjDhXJS7ompGueQKa4K2X4rwKawkhms7gpacgTnSwnLApwCzm4dwtnQQ",
  "key21": "4k7uh1xfkohiQkUSBn9CshTfKC4jENhjUYKkmX1R9QyLjraud8PKcUeXCotzMeLeR1M7kBo8qMSnkY9j1HKKBot6",
  "key22": "2RjFRyHA8fSgvvHzZYn1F7TwnQzcEnYdSHc9zQhAqScAYD66JPCwE8RngULx2aZTQYiJi3WKGw5nJrJ98o3E9U56",
  "key23": "5742kFn8iUetijjHm612F2AzWq8SxGgkDMh2ScSKF13bAnfzhnN4KVD84ks3Pmc7DnbooUZ64c7SvzGzMVNAWbdy",
  "key24": "5vTt33KU1QMQFzBa1FTDEq9D1Z8xFSrMoE89nRyoBQa4W2E1FTNuxSdzGJEmPuNEEtSTYQhysuJ584aQQhhYnjGB",
  "key25": "54em6bw3TMH1g1ppCL2JAFPZff6CtdW3ZWgDqfe1vw11eqoWCTYRJRxBn4VP1bsFT7jVDMcFUBGR7fuWdxJ9HmyP"
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
