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
    "2jucd5wyxrRqnF418MSH8TGULzvvCyLNGU8vqoSYPF66eFvMVZS4xyhNSe6LUgsR3LpQVXG8DrVfbhfMa1h64aGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4TzKMWUpdCPvEXYjKJjMQg2yWgRxLNbZprsevTHBNn8LKBcoL4R4NWsGgiZCHH8RkKvCDRG9XXpyDz66jP8Jxi",
  "key1": "21pHhWyXP6eN5WfSfjd8xbCvpuVdUrmyy21HGt1k3iV5V7hSApDe4xm5CT71PAWhKHZUUvhZuGkUhoFJSGGMppnh",
  "key2": "5rifupdL4ENsf3bBabFoBWUbkovRUaevW3SuLG7ZhifPaBW58QUQzre2xdYwEoUrGx5CEykoMKuSJhU41Egkrj4A",
  "key3": "2Fi2tYuHmMpg6qLptTzrKAySuwFLZrhr18QY5gZino8b7MEgY2yUPjPkFP5sWUcyoDpS5Rkc8vP9xa9C96zk4R8z",
  "key4": "2STTp6EvP9stvTDJvNuqfyhWpdcdecZbSeEr7fsHAjV2xMwDSYRSFMG3nxab8jbPT2oxhK1vpubT4RCxEFeUY261",
  "key5": "zdZyuNpYj1BE8bNsc5FS4y695Vx2BfjePmjqMpuxtYSxXUmrHEd3PmED56a67rNonxpx4phBRVxv829cNQuf88M",
  "key6": "3stJeggzbXkqa1tAxHf4MwBLpNQAAH4wEXGrJtdyKWhE99eEJcSYhpzxPUrhXJGR7eNEnCLRbPjVArpHL6PB5qEd",
  "key7": "vdbqLzR8wmGFfPcV19jbPEogn39UFYC7BruhmFvF3nHnzrvuVp9xvHebbWi8TcvN7CRGZakzxqVbh7Pjy3VWANg",
  "key8": "3AiooF7YUU6yGGwymrRkjSS811cWkvapQKX9CJahhY1PWKC7VSFDLYGtuoWwdTo86vLnCBgFrteTKXycE9NGUtmw",
  "key9": "54hK7tMzX7GWXu5przLCuYPgVVNSBt96eU3svP1oSPbCH3hpTmjT6PbKHy2kY2Cc68JVCSxHQo8xg7CJNbBRruBN",
  "key10": "5cjmfrLKBhqDfrXWz3P36BxJ4fdL8FuDmt5tcSyK4qprZvfz4rtAz2oHiFRErTrN5W25qRGeWPHbidAixeR7GaqC",
  "key11": "4Xvjx3SgHfRBSC3T1EELoPQ4aRwdWByaVtGTcBRr9PzHccTUG7MkiAXRYdPDWJ77LdYVBf38eJ3TYxZVmcxC2FFt",
  "key12": "39bAGgLAYr4EvNp17JjLDjyd2Dovym6MHo9rMigZa9iowBNDkzeU5fqm58QmMuwTB2hDuVhAtVBAAgnBC3eu9mPj",
  "key13": "D2fSkFCBzGYyCfuZ1RTTQnZeG1Zsk3tJX9TAJh2WJT3CwPMzDN8f8o1JqYqHitKTPmEeomSgSV42QPwjgJ8iuFi",
  "key14": "ZHKxQxY5WnbCNH5QLhKmhkj1ZyTyhdATrsoro268XrH6hQKqCoDtr9YMi82gSEj4DgoUvhHvRLZ7QxHKGjpdXxq",
  "key15": "2znQoybHNun5evC1s5y33Xc5PB7ndb1GHyKTqPSFc9P8Np3irJA3bfjFcJj7PNqp7hVgj8zT8qJrtdhKF2qVfY8Q",
  "key16": "5jUKpmixPLyX1qDHgTbZ8UZZbEgJ5EpkzG96JCUK3NxN55hXXPkgQnaukhhAfUxs5zrGesbBTJU4s5AvryMwshu5",
  "key17": "mim6cnT1deTwQ5zZQREa3rpGBaCVP6daa6tDa51KGs9pRuUqsTZFYcfVaz9FKtaazrSAthB6FzvPDhukbYiA3cS",
  "key18": "3bkLwrEJCtLYhTkme2EaJr3ShRn2RajWAXEYFHgaExfnkhYHPFkdQpcWLFaVbtqm61AnrUQLA1N3jq78ToHCKNnF",
  "key19": "5o6pUieEwQCBVe4SGCe4QYWomJF7sLA11oKDAUZrqkXvd7mbnxeeh1dq4KB8LhRkSUjSYUri3j1LxvTiC3SHJjXY",
  "key20": "3v7fUWsQr9vjgigexcxK4hdawVNYLaCrW5AYHGkH3ML7s3QAtZqsYTiQ6stpvzienFNyyCqXm7fJ1wQR9RcfeuRv",
  "key21": "4cj4A7iKqQZPCCt2kF13xyrsiLvJfAimREzMBWGNftX45Jyovh9CLBSnZr9rBD7ro421W5Svq6xiWJTVcguSuLcV",
  "key22": "3VsZQTRACwLDhdQ5cnf3em5iNvUZjkaGTRLm72881S6DypXAiGnmPeoCQoh97rt45RL128wDwqtBgezA5QuSHWQp",
  "key23": "4CsU24oCUh9vKZoeXpTuUjSY4SPJGq8CznsjnKQiYESj1K94oseZVeym4haUMjtMoUa78qajgFN5xfDe2TRUpCvL",
  "key24": "3jz2CWRMbgE86FZUmioTQNNsRUZgAxpcTV7F4GW26WAaUQAY1iZZUkkAjGWYWYhHpoTkCqUArC2vExDVhQw7TQ5E",
  "key25": "2mwJLoTqhy62etAUBxbmRPKHknJrtmbZxJDzbTsLr9bVja5v8DrYTzyBD9VmR2ZMjxPtaDMtpUBnjb7ukRUqMmbE",
  "key26": "3DqkUcnmsF1tAkpwiizVvWkpupLrE7DeQM24XsEugHNMuj6M5RtL7W6Hs7UWkn1chTpMN5JegopuYXDbuxnBtbwM",
  "key27": "4ufmsBX1rgGaBpfxvyt82sWqzchEnobfA74xQHNaPvxd7rvo7YM2tcJd7o3edHXX66TvGSkGyFGMHad8uZfpSp4i",
  "key28": "AXr6KPzBRA4hECji8xo8bu53UtU6o4ga5DZTLBKEfe7TooN4tdZvsNdWXdK74cvebwwCwLZdfycLDUkbUgHA9YN",
  "key29": "2XeDFNyKUJutPimzbhx34vCxR9QjHeaX9FhBqxxNPLrEEdvXVNhxTkZdWpmfL9kuvMFUb1Q6uMgHRoMMh91fJEHF",
  "key30": "5uS4Znx4xvjuQcQgW3rSdX78Hh9uQNFJwWjctPa2pEf41kmd9XowenWLVcaHu9fAijincuDuQhGKK5ykvYzQNKEB",
  "key31": "2Reiq6RKiMbwMefKYgCXqPhGFkUyVrRUic2Tj7NVyhFTXAffKSKZsyDHuYKHuRTQ5G5KmALqRHTAzHYJERfXbKFp",
  "key32": "31qvwVdqexT41vyfvMyn1qPXk2uDZGyjSm2HzSRPGCDerW21Ur1rFqF8FtEh6rYbzzGVbCLMxQU3g92aB789B5u3",
  "key33": "54m8Z37Z5A8WnPW9JbtN93BYPJ4sZ4X4vrkZjo8oQiuPAzfVkQmbZH7RchKnBiXbFCg94MkzwLxyB7iiVDfbeJhR",
  "key34": "4zEh5GSUZSpZYws7c6SWEFvRnGyhEzBr3ucZKgxZyzM5RcetGcdZ6zuzbyFXnjpJpT322oe3oLvGZ1MSPKpsU6gd",
  "key35": "26kbChnq7fdSjQ7QdfrazAG14rrKifKSPz6vsNUifLAU7kvd46QVJ8t3BXaq6UC1Y43qQfgxDZYzPPqs2A6HkyVz",
  "key36": "42AQFNrv5mVoqQfs6SxDHmkoHnGTJHUBUGbk4sZa9WCK2V78TJwWnA7kYvZr1U32dMFeUkCFSHgMyaKzfC6AD88e",
  "key37": "5zydtJ5CRUw4YQdFacj4vB4MBrWvvH1BcDyFNeBkBqsX1g4msyUM2pyVh9xQVfqKiPKvHF1CHUSyBuRrAAB4cKK7",
  "key38": "8h1pmHmNp4GL4krPmk3mJzSQK532skL2KimxNqf2VTDSHg7qCgcgboqs9CFKxnZdGZ5xRWhaQHMtms21jk49s6M",
  "key39": "4V5SsyKvJuUSMxV9ZmyShTB4Pya3xWL5ccG2NDhhp39xZBEoC4pAV2jH9LyPBpR9AhUUwusrb5YHR48rsyFGoecq",
  "key40": "yveLAPg5Xm2kMjK9vpeZPeAXpmeVNhdAwSigDZSKhKhzZdnfob3LvEkkzfRvHU6WbGQvTfgLatcdkmz2cvnxdzx",
  "key41": "5g4DwAzZkmfqdiLLbDjrRvAhFdvgzN7ksEFKHE4Aeg6R8KWsLkdk6ybNqXhvWDVmH6Mj86iimQPebCAmuxgQWaoK",
  "key42": "4iQ8o4TzrEAb2HT9P5LW9sFUnxvJuZe4MDL3zuqKd9eQAxHLGCUGjhzvhqj4KmdQ77jKmUQ1rTyW387yHKSwVNed",
  "key43": "39NY8GrjRmZRYd1yCpz1XSJFah7SnMeLuHwrQLPPWwzaqqRKsP9hctM9yHfDyrZWhR4jvZ7mNkKXW4r68ufhfe69",
  "key44": "zKsgCAR9qUALVp7tM44zjfVqkg1ELGk7i8YjCaBTRRL1jmLA65smqyazPUUvnbx3RJwRWugZsHcP9BvvvTUTyWT",
  "key45": "3GNDqbxLspnVY3bv3gAg3PAfFeWGJbEUm8XR3AhCHz1cprUp2AELgB2WJDzvQLai8QqKtPeELDTG5QEcgZ6jMwyZ",
  "key46": "4s8gKqYGXnqUTsb5FvsorgJT6zf7fwhmb6hwp8YMT4sAqPWA9sJD2ccVU65qPrbivebAE7KCtTHpbF5Yd8FpWuhg",
  "key47": "Nuv1LdbGb5vQsKBE2eqVrbiarPqKBvDzabeKDQJrJSELrtsicudcBxCEZd7Z8M6nFjYPBCiCYbVc8RPPydQXoma"
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
