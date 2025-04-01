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
    "asTtXm6xCvLEY9ezRoUN3aLZVp9VG62Kry98JumCNbEEnCXAB4aJ9SkMqPXTeyG5B7U6BexiHNMKWWuTEX3KVhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUuixEUbfX8TaRnMjj23xrMr86GfBALzpx6vy4GLY5TmzXW914e8d7aBq6dMNWR9P1UCC3YLCs5YjxYjk5dA7CW",
  "key1": "3UDNQCG3FZ8xC26GTwqdyGFB7Mv835whhqzqwngt3mPr7AeSqDvRecWrEuaszk4K8xwq9RcKGQpx5B6t3jzgfPzi",
  "key2": "3yQJLme8o6k5iy5QcFQtTbdBb4TKUR3eiQ5aKnKkCdYp7DCoKzNpGC1c95R9ec7rr79VhWxUvZp8pDoM1ZoFTKWp",
  "key3": "brMPdoahFnzf22K9YqYriHYusPUgAxj9bCtKFrArizM2ENwsmLwMA48Qud84k7TPEgpS8jRb7QqznAocjyhzHkp",
  "key4": "54Lxvhu5xuYLHRKbeXopq1vXmkSfmhZ3uHimkoqZw7x1wKASdSUeVtps8GZRK5EN3csmE83KFh6M6SHch7Fp2cy7",
  "key5": "4wsd4VqRfFimNNz2xHYkGy4hC8tDjUQ5Cuh9hEVkZZC8C6hhoDmPBKGDTRk1WW8vsRWkX8vEnoBBjGi3tXHCB2r2",
  "key6": "3r112fpHrcPdtCuFGznxCiNWVyQmgDuGYhJhA9VjebPaNxCmWP3xbWeiETxwPWd19TyfFmaTBbjRdKQRxffqzcwG",
  "key7": "5DmvMdZ8rZx7PinuS2iv61imGZUVm3ojRPyeCiHpNZ6q3jaRv6wzKFGxC7XXeuUEPaNu6aWZLj3TWuVswjH7Z6kf",
  "key8": "4giGGTWA1mP1CHC3paYrvS9HJeZ9PR16bqDBuX916WhotgK7jgygvKHGHWH3yGSTKb3Jm1cB2wD93E9v7vMFk1S4",
  "key9": "T2Fx6UfknXPEYnadwSmXqSmX5DivSWJHiVsyUbnUYBEN84eBgjJmRZ78cqefxiM2Xpc3T1XjD2QUg6gbB5oDL1T",
  "key10": "2bQVtFTrA5PGPo8tcpRajugxfxUFd96xkGBJ3RGgRscXLpdBWqm1LDDveaA6D6XvquiUQwDKGAiywxWvka1yHxCz",
  "key11": "5uUKq3JBF3vvMdYvHmBX5YRdEGCWWNCcSbbPJ7tg75fu8k5E4f2e4wWXDURrpfXArRRURXe6xDhrNfeH57i7cdPj",
  "key12": "55UhEyR1SLeRxn7ykfUmWb9guP3bzrdLL5fYZcg2qsaopxF5PkXyJcgEFMvz24GnctDNyHUjUsmw1cttjp3uFUxh",
  "key13": "5PXNcFLxbpzhZoQYYX3v2a7GAatbeuGpscZz2fVMSHgdjQAF8snn8sLrMppQaa6FDQg76DTWXYtq3yyxGoz8r9B9",
  "key14": "18ndxuEodH2UJNHEV4rhQxEtjXepUELB4PPpn7BkjgTEZMFPWDXqamxvjuNqbGdZTM1ApUDcsHv9QbyEEv8EZ8g",
  "key15": "4wXwdhxSY9nGwQNiqQs4usoAu3nyMdb1XPPkuj1pvoDgdqnrM6i94RA7TTn2p3TXeNrByN21YLnPBaFiazNQwo6a",
  "key16": "3c4gB3d9m3m2yV53XMuiCmbNcyW3kFBmArRszGxo1HefL7cDk3DeJWqptdcHRQ4VuZiuJtsiCJhmTgkrzFbC24g6",
  "key17": "2T7EXv7m1Wd77KpKEotLKKC9iDo9Qr6kaPZgraQnPJ1eqMW1HoZvCMUYe2VXrrQS3kwEmFKK4pWxtAo5MukAuvpm",
  "key18": "3sAU1E9A5pQ1hKYCcveLgJ8jscb5x18XVheVZJ9Q6rmjg1jz4WFxEeRR4d2GEMj5P6EDADDpX2FgyznUvZnBu7Bq",
  "key19": "2ejfRmsH7kqE9CeKVrXqpM98cfB4QHFLSPfgHM3oxm1LtD2g7Y7Pb9SCuDkKcuez8VYh68957TsfCC57vHToZNxx",
  "key20": "66kTuSVmvRyazrJW8VBZ26wJCrH8au7i9NN6oMteqmHdFQWRMQUN2L4SUmAWSpnqt9ib87DbzFDb4qk5eJLEV4wf",
  "key21": "ziVeeEoxuYYNUz4p9ytTLUZH4py8DCkLkiG1EcdhJJP8Je8FZUqV72RC2dkgHA7uGzU3p7Yth5DabWxHibyFm2j",
  "key22": "E28fHPQmvs4KHSQq4HLWFCN3GD3RaCZdgFKV43KxLcBGpASAip3hjwS8ZKez39DcS9j7Trq9V96wnP9DFrZ4A3c",
  "key23": "3aoisy2xWPVdEXW9fZDfpQLPuBdci6rP38aJu2JQ1m14tKuaB9hFUEB5DyNb7mAqUex6egazrR1Wjfa62pdji3eC",
  "key24": "2zncdhgrW5uyCKTNY9DsFa3iEb1rrFF4mQvAdQwryxUfcCuNsWNQ4ofyZ2mM8iqhzmCViY6s6BFoQdh1wTPMMEPM",
  "key25": "5djPMWYmuMN9etsietAcqbBXMJkiQRhLYogr7Gk5Ma1kgKxXtMjPXSfmVDFCKD54eDTFHF6cTkNkzrLL1m9Ygvbm",
  "key26": "3vPNTZdZpZrFjcEMZMM3CqzntUjDF7HpeetYLoZDmRMHBGUJJ6qkgyyfmm8ZGVSsEnadEtd3aUV2JKtbCteazTL2"
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
