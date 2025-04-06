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
    "2sHuxPDKdSRS7nkvRUPMxpae7nNkrf5SaEcoq9U8DEncnMbmW4GKJvuqGphzFvC4rqLgV2L53kpfuj3ExR7ETf6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mFKoBTHpoVMHgfTMw7Vs3FhYYVJn7CfEseU8cCtipea25AfanR3cooqbXqETrBegPyaLsXumoPv7hqYGDx94otL",
  "key1": "2NBeWDYWYnStHdpbhRsRNgXXEzeF6NAw9xTh9G7r1LrUyA1ABQkiTcjeJ5yWtqCk5gtwLiY1Wy43oxGMKpRpX53k",
  "key2": "5rd4KJ9JVzargT7b8R9grtJAy6v54xDuxKeG9VfhaDAKJKuoEhbuqpfgBQoqd4H2qQCJRixaNQh3VT8hcaVFKDhX",
  "key3": "3Qaaoerfij43tFvjc6ZYAG9Mv5fwAv7CihnW7bHHw3SnRmgCjN9eKVk6Ezq1zyNjtdWQk6iStAo5XbY7VVFCcH7X",
  "key4": "556onJ1GL184JHfhWs2xX58KZu57WqHyv4gN95ajKm9wp6zCxbguhrqCUEGxXWZoJXdit8Wm83e4tBJwYyc3zeeb",
  "key5": "5VktDif4cknmN7XEMSss3AZXbKEK3dAH1U3v5qAkdXBZYS4PPUTDVNqUKd1qk6BBQ2M62pWpMTPUZmHAFpkdYpbu",
  "key6": "3pH5FwbxPsNyBuD3KJiLx4szitEG6ZcPKPGiMLjKe5fQqk1X1ymh6y9t2HTVAe7F4JF1LSStiiN9tRLjQdqfVdFs",
  "key7": "3LTZWcHgAjdWD9ZkMdPSDSv7mHYuvBBdDqkk6P7Mt2jRYPMkMfN4gFZcrtkxsWAWBqQQDX6QbxgoLMBD6Rs1FaCi",
  "key8": "4RwfywJPcLUUriZHRwyR8311eTZjfWBJTz3xNmC3sJ1ZVThdrhRwpVpnGnkMUpCgmVAzTS7Z3WTJmBEJZpVsTRBE",
  "key9": "5LQqeegfZ46fTUg8mHLW5MEPGBbSccoSW2LMqdePa3B8sYr43cJYVNi3rTvB3aRsxQvJwverN95HssjPPDT6EQXb",
  "key10": "4TVBsTmJwHGfPgQ25rDDrBo8eb7zwjB6fpcsynqAPMtuybcndUxvBUnnqoh3L7yZmGxJWzPF4AVUtwHX9EAWifE",
  "key11": "2vNnHd2rzPVzVhAZVj4VwFd5nta5nR2KvBEZEsNFpCJiPfMMfCR6JexLcTxSZdc5d7qDRJnQU5szsN2t2s5gBd4A",
  "key12": "4CCV5qmfwSjMZwqPdrXAwwnxK846WHXLc3YjEF2FLoJpj2dBjcYMjLvwpXuT7A1mcRfJWKMb56Zc7imvAzrZqHzW",
  "key13": "5jc6f4C3FZkcNkCZVNzgvKCAg4oGiEHsSYdgo37qegDQxcmWwoB2oKXGUustqxUEE4AKXcuZim32ht3ti5YzgdyM",
  "key14": "26oDVJhrRKpRyP15EhNdseGAsFfvyayiyjkVfqqUGak7wF3APZBbRptuYwfxeLjtQkYTRZn4X7dXm9VukxuwcTZG",
  "key15": "3j3y6d2zRYfREyUYpfAhw7q8NJueDHp65LofryTZD4uUYTUsU78BKKMDhatVHRj1HSkhQnskYAJYxG3nydj7sDEL",
  "key16": "2bJz6bbkALKWB8uZyB4CtBgqoaDz7u1waJrWcRjEQbGbwn7zVvVjEb5xmnbF4kVFsMuNw5e9piQwzF977hFXEU5v",
  "key17": "222G3wBJtgwunjPoG3uN4Vhvj6wsRdrE6yRPPq8L12NCV7VhoLFqwuoWnzZZVc6YJRvPAutox2uAo1BGDYB1F4d8",
  "key18": "3diEp185wqKDfAMoUS6av2Vbp4v5HS3zKpg5zRG1iwBApjqfEXjsBbVzr2QaaB2wSW2YRVFWNH8C1KkEMGrj2VUa",
  "key19": "3nhScuf3tVDouXMyifyrNe1yQs48aqWYSAUtuCEY1rVdEqZLbWzEfJBSH7k9TbjLf3xd4QtCUkt2YqjrYR1oq8uU",
  "key20": "TVevNZit573QZ2WBLikRm29nZayUSvdpBioq9aF8xoG8J7FfLJxT7Re4fVpmjtTVPbs2jTUV76nMUauV7hpPfTA",
  "key21": "5C89o4dpCfQZvVc569DKPZGk1JeMKuX36H1xDPaZNKTMEW6fD1Bq8YPv5Jig7HLRmgeBj5EBpvm6ubohrpP7Y9MJ",
  "key22": "5EXnP2aKsnBgFLjum8YwpRM1gaH1P1VYcQ3crKQY1GyU94qRACV8S8EYyUYpd88dJpSfM2yVZsaC8PEo4P3wNeJb",
  "key23": "2wo4BBB3aS767vWZCj747qrxcHsXbqzy1TFtXHZqAiGFu53YERHD1xURoJdc7369A5z3KCAtCasaSRzd6Zt3k2aR",
  "key24": "4K4ZVCnTN5CtyyUDSajrghbDEZ3BGFWGju8KkNZNWG5bbchjmJbrnVFPh6WipWy1ygeUEWanSqBxwy3swWC7owvU",
  "key25": "iA3GFYEvicA97kuZRwrTQgdDEiYTGCGPn2ovWfnkayhR1H6gss4Qbhdvik1RcKt1PHKZkjJQFLZcb59uhdG2UjK",
  "key26": "32Lk6f3X9cJrcSrzDPyv6urc2x9NacrXof3LnXqskNLreGpx39Ddo5DFh8Pknr5roxY6Wytxn5Y7gCUgyn45rUEM",
  "key27": "nFucLqi9bEGSbXRoQxLB6mrRPCQVxoTQn7EW9bBnQQFtdzLiJwG11bqPQhd5rss67a2QcthKV6KJdV1WvCaCqFN",
  "key28": "5Yf58vb51RYhVEreU8hJid77rsxC1JUABtqoDFtgsUzvyiuyWPxcygWnrkKJejKLSvC6jbeqr1xNRCuqLrqvyZWp",
  "key29": "Zk4ZtfsQsYHET4fGTU7CjJgMb49biZVjeC4tpre1Cq2stXziGwAymHxYxKgqeAobVw3cYCsXPJWMu6ZMuKGGrDM",
  "key30": "5oQGE3Ne1yhSkX8z3412Fjx6jTSUD7AQLCRgko1hAExZLaqqMG7kv5PAKLLk6qzyGCVYXErL9vpgvD3p4FqkFTg9",
  "key31": "4uyDyn7GRxkLvJq2QkmKm25iv9Nr9oBkYSYLHDeykALHPy9fbY773ydN4XkGSzdpNEvGfRnB4AQ98aC5r8n2384b",
  "key32": "2DUbovRPZg1n2HWsGgTsJbtjyZphZyWjLUirtUrpm7i97VBShWAgdbvv1NhDUG3Lw2eQsk7bM9owqjztBK8gNjsS",
  "key33": "3bS9zTZS2nmsBPq6qq8CaHmrzgFn25vLvVX7dS2LPmKxvNK1qudAmNpg2rXcGqAA1iJhv6x37q6Jo6UhNG1eHMdy",
  "key34": "nC7bJM68kjNVvMnv4NkpdXg5JpGKLiVsh3yBtQ7Ua2qivXKXhJn56HgEZ8p2VTPt3j1HSkCoSytfyBBzXYpLPNH",
  "key35": "oKygNwY8Taf9XBxUiRAA7BzpbvUv2XGRUjGNjonQWLjwYsMzBrAWCPvLNiq3QGMBj5xf5ZCPcfEAQUaF6oPVwdx",
  "key36": "3AbnxXfjX2uLv4GSSCGeQofaGZeXtJbbMnT33ozYv18Whq8pbVYK1BEzxuodszd3LKAJKnL4gdBYNvSDBzdGQzZ1",
  "key37": "2v3xWXE1mtmQJTVsCzSNRG1krUhncMeQKVbsQRmQjKpRTqAQRMGTGd1sNzo1cjtUgWKnuyTipZEk6h7wc9rgL6L8",
  "key38": "5NjKwTKU5AMQQ4Po9VoP49X2pqpSoKxWMEzVZLXAm9w54rpZyX447ALgFfGVjobNo8h1pbYegBJG8UxqoNsg9MCu",
  "key39": "5RnGP2Fti4i15Uw6jsoBApxYidzD7Adc232pJEmFAQ8hjFGGdCiVbe3eAbMAueHY1ourpTi8UMaKygZVX8etao7r",
  "key40": "2ULYUMPmDfGMDyePRipy6SKtLmg9ej5TtXJu7ZaJEE1ceFEwsEzNbkCXHrQcd5US21BhhSEf6Wd1HwzAy9TbGD8a",
  "key41": "3o5yukthsmkRCw7tA3osYmF6cHDk6QdNVfARV49WgdxRaGUnbDEQ2qHfUphiibjeZkGZ3bacrCYTEY3fYEceTzcm",
  "key42": "3tXDNmVCum7FR3yq1qvXChhUhGgnuHiJ6M6gFhabDX5z5kU4iFCAk2NARwW21QXpMubJVmGnnCHHwn4GjJfD8GNr",
  "key43": "5Z5rCj51Sqkb7G4JN84f9xy5JPfnQ2aauNzRsNQDqHhEJAQNQRGo4R4RUMLTCAVhjMDyLDKn6iMvdwYHxA1FcecQ",
  "key44": "43aGNLpW1uWwUTv9hSSwVbBSEYWKnunHwt1GgYe1o19g18fDNYuViFc9sBGsB5vfbFywcq16xR9VXv2JU26dXe5n",
  "key45": "hvQkcA83ezwtrzokh4zcHfBnGDj6QsdHzJLDH2xaKgh81jiRFZtTie6ATLWpGqAy3NCGHNZvarStuicStVU8bx8"
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
