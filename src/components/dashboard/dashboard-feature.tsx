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
    "jzrqew12YwmHB1bsKJy5LrJmk259u8EgcBvkVnY9SZcPdjYoSAgmLGFsRboEzVagSQAfyWUX7C42fw5H6a6TAKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PPMECdX2tpwZt7ZqHZdqW3DjBzzCpz6Gs645wNNAZYmRm7jFexUkVocRmr6Dh4wqsLQtqrXQGZQWNYiy3oSUc7T",
  "key1": "5jDbFpAPmABBVFVcrRrrjAdV8bxtvUUBtG8RH7GRNwSGx52ZuKN13rm2Nxdb8bDUdo6cP9wM3LVbMV3A6QcjNz18",
  "key2": "4YttE3cdnLs4hw3iVXAzEyRurbe4rfzSNqFkQtQvygwyQUGA5cNVKi8x7CpdDRrFmUTqBghrqvLP9ghNahusiHP",
  "key3": "XHQ8cGCKFiLi4neWK3WUea1SiM2jh6f2n71rRevBqRDCUyAmVYig3DPGFuHa19DjG2qtPRkSV46BmHAbGEyXjXi",
  "key4": "iMdN1hQ5emhVfMb1VwbTCmrUhjrGVdxdGv51oz4apHFDLrSXtDhpoAeND4u69dtEXM366zubRTf6tJpZ6PUjfqj",
  "key5": "3poimnScar9kfnLZPHvaZYAXQL2bNrPsGCL3B1R7V3MnCWmuH3ZJWxTn8MknmRgMYFvXPR7G3fzgH8teVpozWLw7",
  "key6": "5ujwtYAasrJhCbUNJWjqjdcTDz5JE4YzszjpX8Yd8kXd34gHGzBGckm38RrKQNZZxmCJefW5PoPtsVh9x59fi4To",
  "key7": "J3vE3Te1GxFaYohVQVJonARyw1U5ZjctB3FwLJxJnXf6Yt1APTRijvfFs6UBQBU3P3Ugix8XEsSyG14JNn66dHR",
  "key8": "32qLHam9L54cFZirR9fpMTLy56RVWMQpcbsdWaCN97fBazJo6H4LBu9WL7UMjdfNKFNX84NXt2FScGebWjLYhRnS",
  "key9": "NxS5svQmGN68zhsKgzA47aMMaz8PW9J5TrGHP9YrBSTjLNJpa8zTnFGejjGLgtr59AKgzjkPm5D6kEk1jz5o2db",
  "key10": "5UvP5USugw7SyGoLCxs5L1yHgdWjmpy2A1BiN2zWyVsspUPwJgudBT2qFjpai1Z6NJRVBKf3qjB7pCnnFvcFgPKb",
  "key11": "by5JewYtqFFi7W5jr5L9Bi1uFaKtMCDeiW4a5ks46GEHPubL7j41EBwzM2YaSMyzdxYLWaWwT8B1S7zaiRUVAYT",
  "key12": "3z4JaykNvACvLFWwNbBjV4v8q7WKpqiAgHgRQPBWG5HPVb8Vgfrx5kGzKT1pZiBQQKoBmasrLuqasCrcWdEuEi9H",
  "key13": "2s2hUwJwiqSrSggZorNU7snuey8RFcPxt92XixFvFTL5aJUYM3Ldd9KrKEuoojSLviQJKeSPKCuuBeGimjDQqSzz",
  "key14": "3ywwGbjyttvrHR2hksb8Vgciu348FZmbCb4zubMq57QJbaeiYGoNisuHcZTdveHqWowFicN8wqpkMckqnTDWE2br",
  "key15": "593AkkkcdHbxEoLQVJwBgaCEGYNDLFkGQ2hbUKjdmbrwPRJJWwPYu4ZAnpTfzLyn98TyXw2TTPVWF65ETgntcC8C",
  "key16": "Chs9hU2WA52tDMn7M5vrcLYGSQsFKDYNpU4etMkb8nvFBqHQ8sqgmLiWzGdDuT2vSQkT78WCsY4am2hUxJrg95s",
  "key17": "5d2UW2HaJMhozjRnfitcmDG6Mtx1eUaTT421Rp2vU3bvitjY5LLC25xEx2DuQJV4WUkeLtqdG6ErJ896DfAoHubJ",
  "key18": "3Ba6CfNDPvgfCJrNgaZyiBdgjjLsRJC37SoUfyaSoPW6f4vgp3RSVgeg852UgykNrPj7cjFVvymGbnSxkzBpX4na",
  "key19": "5qetG5BbgT8FBDKz3AiGfmyKsovDyqthzGyNvdhozUeDX4fGExHDwtRZpWsLHewkewg51bRH3cdNSRkUYYd9bpSZ",
  "key20": "2G8Qs7cYfA5ZWmeHhy34heFMmhf6aMKRTwrGTkwcgZkTMKVFLB2jXacXyxyEXYA3Y845fcGWhC9dhvyVKDzM6Gv9",
  "key21": "62kkVRoMPKzjZcBTVaKdb1kEf2ode5ES51s9ufTfh8w7j1LEwEX1txU6q5Pqk9m2piGumhWS9FmHJ2y3jQxQDXev",
  "key22": "5G9qMHiWKiNg5ox5J8dPhvBNZorpidFLBEbtpvfYrUjscfjP8K5uDXiEtBRDAdwW7wrJazBiSaMYQ72Y72KyLfig",
  "key23": "4WazYtqSZZXJj9PCA5exVLjyoh6NENEJmAeRW2ypEPWZ1dgcziuk63qbQ1uiQyepmGx6WrxDs6PcwbEMq65JTWtx",
  "key24": "2sstMgvA7u58EvG7FH5LLTkeFvMfByoqNdATs6Eqei55PiPqgVCWkFwaqhXNY9rbj8JMUJmsn5gc5rS4giqWnxDn",
  "key25": "3ZpfEWgsHTYZBaC3bEmdH6nSnGSVzmDzW5fwG7N5wKHdTHfd1rBtPj1BPf5iDJ4hiYFZo3FEfVUUYZCzXHkzgx94",
  "key26": "2f4vL2dmMKt5rA1hAw74vLMHwySi9bZGphEKchx4byxQvfaA1gAT6eLpN8Gta56bM6WSP9F3HbTaL8Hp4rfS1Gch",
  "key27": "4H7pawfRZccWKUPmmyLy2ZyiznTxb55E7h4fKtRff6Lx6TsTDhec1EegAgxcyb69TcTjtgoqYTBvAwKfWEDq8e4",
  "key28": "2KjkdXPjJgY5a7xfd7xTqujF4vps1FjwyK67vf9Wm7tdCLXfgpFf9L5DgRH3CE5SPQx45p7tVwVaDV8DoPk4Swq2",
  "key29": "2QM6ZZWroRiMXk5MZmi7iQ9ESeykPfSgydr6ChPyzyrwYJtw7yxHE7sWayo5iPCSkHVaVhchdhxncn3r96JRM9U",
  "key30": "uGV6kUk8xH9LKd5RbnXRxQpL7giYzo9LDQw7zE4QQrnG4Py3HjHxPGSW1nrcG1txWayWhYbqeFctFwvjwJiKzJd",
  "key31": "2gAHxL6zt5PqK1U1A6k2pe7ViBAqRcLiGTzd7KXwfgNt1hPACpM7zRCvxuirs2otubcQzpC8dA7KZg6eKfbsE88h",
  "key32": "22KW4YKrB7KRnB6iUXLZ8VgAjuhpGoyqFxi1ZvpXUrQhaT8HZTTg6hodktCLkMoCGD6TYMS3jcMmuQiGHcJoGFMr",
  "key33": "25CA2ezb3J1KhHAcrZcEFZwdq183dv7abqv9VtNvTmcYhehfpq1EpW8GkKk1bWtsqoqs7tYeXJnPMwXq7cCRP1uA",
  "key34": "5GmtgVmDran1dBd95cGeHuWrqDcBrNUfzWU2pyCtYEKhMM6bzjtmpX3Htb5KfmPxz4KrcaEjiYCET1ScEKhbLYh6"
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
