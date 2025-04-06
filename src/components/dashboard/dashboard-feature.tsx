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
    "5eYUCwP5W8uL3CqggNhWaEdhMrx3R3oSeGw5GJmwk8dc2JDCgbyh9q7djReUDqKnx37bACiGatNc2bSPVjhq9g8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phd7L751eYF25Zkdeo515LfNwK1AhiJfxDFNCvABXfeRWW4QuJhH6gt1DvEnNRoYnMHWdCDbmHdLwxDcacr8aj7",
  "key1": "Ls6AMACm6N18rKLxFzhUWpgwSri7B1NsNw6J3FEnBtGPS7RMGzgePf5RTHWHCu6LpeSbBGYF97kQ2QMLm8xZn28",
  "key2": "4cTzBZUJZeE2CRn77neL4VJSecr3xvXzgQcdNjxgqeZUokzvf5HH9xJuDRTfp4VLDBhjBRkpHfBjyVMT6abt9Kkh",
  "key3": "eVvabwAeqE5En52QDmCcerDa6PrHF6eG4XAFkweMjN2nzDLAqVfDRwEoYnm9VQqFE6UyPAJ7RXhrH8HhKBRPzmM",
  "key4": "4Sz99fm4w69W9fxqJQEUriE9MAtNwTKC5KG2Rpc3N11gyJnF2L7ZjLcVteYzMA84wmqbKenhopwFrhWcpXR4iHgd",
  "key5": "c98esB49fh9vKZNH4XuGUQy73qGZ39BpPky79t7LKdLWnKVEKTGVrZYtweBLjkkKxzUqJW67fKZmauk4nbfvU6k",
  "key6": "32sGC1QmjFHogFTnZirgaKFF8tSXw8q2TYRXu7DKXj6wEva1xN91Kw7Cyzp2DezefsNf8dGm1QNeYGvS6Tnk1Kvr",
  "key7": "KbPN4Cj8gQALG4vRxM2SXNTZ5tPqB91DtgYroYRDj1UqYvYhwUTLzppDHasVUQP8UoDgFTrMqN2RQengAX2mqEv",
  "key8": "hzD1uPUFk3dRkq1hXFzJGj9NAdb1QjHsvtAWyUFWR8Y1LM5TSGTGs9KkiyXjDTmqhJijVoh5yf2sF7iCAyoYgUR",
  "key9": "4F7hFpy9m953bBbyg17gaWS5kmtc9M6XSzntE9HGiWuzJypvqz4Li2tfeinkQayGgqgnd7tc27P6gc1jPXgj4fVn",
  "key10": "64zr24GMP3nd6EqMyrUGgyDec8oLgHFPfenTg7jFWaQBgY2v3hAtuD42o9dD5gf4J8DuaiuPy763cC7rNBLPCq5H",
  "key11": "5Lt53Q2Nx72iTdjVCr1wNbzjcg3XjMLMgUKabBruWECbEgLYVuJRizgbtsS1LEuBtqYskaB42fC4493t5hFoaqLw",
  "key12": "4CMXX8GwBUL1Dx7Aavq64ML9G7j2fVir5Gnpnfe6FBdM6yU7F9qc4bynYXZRgC38RSPzaHavzMAtKTKgBxNdb6Gn",
  "key13": "3JPSsrKd1KMMVTeMaufgU3sKL4zkZzfmzUULBTwtWozny7tkTezhbeo6hRdrgEcHdU4L1ErtxQ6wYMwmfdNe6CFd",
  "key14": "wDLMqG18LKJwkJeJmuVhCu2EVhA6cdXaHdZWVs49arMR5rpUWqP3A3GteaAnttN9jGaD9qvFGABxZe64EGZh9Tv",
  "key15": "3Ri9zZVKoPT1LLgA7eVjrQTtUs76M4o6Kt6bKj5EBxYKLzEdwhXhmCQEuMfEeL3oyVguuiRGPz3d2wuN7B9z42od",
  "key16": "2oiMzsmkVjBrLUFcLbEATZJzt4PP4SB4wsMxDH5JVCoUTco5yimLxDdxGk8bMPEF5BN98MAekStqyparPvyAthsW",
  "key17": "5RQ1xKtWBqiXXhShPeXwSP9fs5KdRbuVfxRg7gGofpw2R1JrDFqwF8UuuYcdYmeaV1LJmBL2vcgWeHb72uieM9zs",
  "key18": "5fYCvjW9c58QFgaaqmGvWRzxSSfjDSgk7sGfxGegoaRcgnm6XrgqbUAkq4eALVwtiN2v8GUJnfhd6wmDLiWs4teB",
  "key19": "2WoHiaRQ5iRtXRA54S2AD67HzF77RBdaSCbqAUSXDY9gmbtkNLFcpnBkR8JRr1BaZr2gHAKUGvJTshTQZS6mxDn2",
  "key20": "4b31cMjVcxn3RSeLbhq2j8j7k7cpRbsn8Yzea1nMWni3wRF3ZrmAkJzYPzwbN3cYpPxCkLrFbEmPA9AmJfLeoqUL",
  "key21": "3jPybTUGWFpU8BH2gGnz1QKuyrAYJw5HZM9Eti9F57mVxp2p3fJAPPCFag1NkACvy8UJ28datJht6EsAQLe8VFsd",
  "key22": "2y5HHPM8PdnGo2rio9Qv9CtF5EFLincG1CkbgodvCufHSAXuqoKAy9m5U45ChQPuhQKDDwjniehZtEdSNPsQhsjm",
  "key23": "5v56fbv2y5TMsWkcM5X79zvzVsT8YY6QXg6z6cn6MFk2pS1FKX1pZxBmNQgxuEYSUiLgFQW85jYi9yf1X52DWDup",
  "key24": "aJN9vHrc3E66f5cHFsXrhNmykGZ78famfSzi6oemt2oheiMa3CRp8uMXUvx42fVZHHPTij2YZELx8yQijZKX6pc",
  "key25": "2iLbVQP84zcLPRm5WYePXfJm1bVwzQoPLu9M1jNekT6DCQUYV15WMJZGdZNhyRkCtd8pjWi9fk5KVsiFH99fUHER",
  "key26": "2KY5Dka4PJgDXaNCzKwL4HUufanXHiQEzctjwwiCR4paEofEXn5TNgpT3mq7EmNEVi2P5mH621gFen4y5hR7YAKz",
  "key27": "5KMeA2kBgherVjVxSfLgW39jwU8f5M6vd9uNmjFdkqrsH96exNwKvpYuDapCS7VhN1wjby1gyQFNvse3QGQ7J2Mu",
  "key28": "2e3x8cMR7bFmnZDyCKb2hwgrWPpXd3czF4WEqv2epnBA1aDkNDVARiYhG8ZRVGDV376EdGdKbvS79ZY99ktQF5hq"
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
