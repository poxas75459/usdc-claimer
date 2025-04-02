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
    "3BBLMzmoApvhkWupKR4WF9kg1pYGSh5GHnLjhbg9sj9CqGgVf4v1XjAHxvH9TiDjaCDcsb4Tmu2tYwvWQnteSxue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoBiFn6x7M6fud8d22gm27ZBNGKLuUTzvTFQJoKi3zfG51GD8Kr5qPpDDaCZczqnT9zpFcPZi5U4WjZkELNAJ9V",
  "key1": "42U15yGLh4VpCq9Agiwm7wssCUUVhK9fnogHDwYweumDDhiQJuhWgL9quqDvmFZuyQgcZSpNEeYjg5PjRbC5e6Ff",
  "key2": "3wYMydfjFewvHpMj9JhCWGbYnPzv1m92h6MBXaJHNeUrM3CrPH6E6DXjG8mnDSd98BSEW1k5d19J81uUBxzQvRcF",
  "key3": "5zMsdcBVgCJyMEb8PZHyzfc9nx4MBWNE4GY7XfdG1jYhuVHVU2Vy9TivT5bVGAKHahKEDUMuocrPrSmVUzXFqC85",
  "key4": "59v9if1qRpWUCzvwTucVFtKoBq71NZibUbSfvWCJZXznBu8zZWAtcswKn6ccttmEL1kQps26M6cMMmHU4UiaXVLC",
  "key5": "3ER8Bmv4UuZNqQigMoiTYaKyZ6kGgUmGk9qFxHgLx1b1fyrGUCbM9HLTCrRja44t5LxFKd6pvYFTnUArE4gwLdKR",
  "key6": "5idxtGUyRRC1WJGBv86FBk7QVoP8bbqxSUZ6AMFjAAhw34ECBT6zmVuUbaTvwT4TeTiqnxDYZBYks9BPy5DFT13J",
  "key7": "XGhkGpA7LhgfeksVKMVmEnGR5eTXAvqWWK8qK2tJPmoMZdKpJVRCybaooRmwe9QRWGbKmc6tkpjeWFLvizxBfFA",
  "key8": "3uqrQnBoUrv8ij5QVUhuXZN2pyehQ3tit3KVHxTyBeFndQTwSyJwWHz5uRBXCz4BmBcXLC3ZcynCkfjsXVmpzYjZ",
  "key9": "39yzjpu5hsxatCwHCWNQUWpkmn54k78EK131fb1WWDCMTNJudtJnHDQqnnff5XBzzV1Nocs64LF6GstNHvjiNHf8",
  "key10": "4eQ7h9cqSeHcf5h4X3QQd8MQuQGbvC25HtJPidorQC5VYbqeGCLSBLVGfqGrd3mprc7gB33fD2RT188exMrnsU54",
  "key11": "46nvTBQgAuAegmAVC7BACWrLxLWKEh1WWV4KxGTydr2PAF1JAPopRtkg24ckQE5qrmu2voQBvEqAiMNBguuvQjub",
  "key12": "3faArX2A3btEahF7JpWhCofdmyK2fjdcVQcXTCjWaNSECPZUYEz7TPiPbYefHtiJ2kPwJSSpmDoQcLNZQV9g2frK",
  "key13": "4gTNRvZyVVQiXqC6kuptknJwh6o6UzBpmYSNM9ZHV2tbEP29d2YvGsTPEZ9FQYzZ5MJ9ex8bXHU3hkCrWRBUysgQ",
  "key14": "4UxAREt5xSWefH3iBepDqjncUd4X7Jm8F4gdS5di7oFmq56VL6FY15fLKP22Y7nQ5h693doZ83eG9Hbivew11CwN",
  "key15": "2bu339JCwUR8kHtZ1sLTBRung6485YJTtCnuPmmPR7ick1CRpYxeB8BAyabYb7hWur8d3EZtnQqdu4xwkDKmgk35",
  "key16": "4o4irkbpuEFT34sVqdJEofUCF6ZX9Rbv5uLNzXqPHPvSpD29ia3L1bShN4aG52VCmbQ9Y7dLCmkZDmZkYK4sHMjB",
  "key17": "548PhSBDDPyE4MYDpCrzo58mXtDBw7g3C8F2EjpcbnWSSpFPtcYZVpfo8LpK5MUz6m51GGuMK32CYmrkwQmCJ4FC",
  "key18": "3rzgzi5K9s6YEFHf8ZU9GPd6Js87HqQRQFuyi96TtjabfDK7MJyPsxd9cb5VTu3rmWpSeZfQtZjaUfWpnhj41FH8",
  "key19": "aBMujospcYGjwm2UG9c9YfyzKUnXDTZUwP7BuqX7NNwoAvF1rFyhQGm4NUsEGof8xA6JGYHzofJD3htHQ41dTtf",
  "key20": "5gHAQVutBQr2GjSM8piu1N8QngY14hZpVFGewpbmueu3u4b41s1LnU4ZK4vXKMS2Az6aJruSv58TaHqcNd13KEmm",
  "key21": "vw51VfDAPvk51qatiiAe3WGLmtedsPW24z6ji214chZ3arAvitVWc6cm1VafaET9x3RjcQxFAKVkomR5RULD48v",
  "key22": "3oVqRCyd9oAEz4sHe7d7DwrfpYWUaR74SzUhBDZRwSsVSGeNa92NyCncoky8HPQ2H11JfUeDieCcT4vg31iJvcuE",
  "key23": "2cheqfgcukYYp35C2tCChsjfEN75DGneepbwAubzo5m6fB1boSE5x9gP1rGnJpU6whgyjLPJ6msMwPbEPifAWhQv",
  "key24": "3MVJbs6WoHXh4XTGWirqh8EtNk4oEVsV5TXuwbNuFDPbkJ36kqWTFdiaFuxfXp921kd34V8SGPLQ86J3JUmc2hqb",
  "key25": "4nG1eZKF8rt9Ls5Y2G3ipggwF81bo67jUrb3za2BaAFMagwRPs6i7dHgZpkDbPBfk8cmiqspJgKneu9AX6QkFs79",
  "key26": "3huyqK948C15oZMuTR3XcUJskWfpFDtC3BvDHaUunPP4m5NoKCUqCJxbXM2RXQx46bmwnKPgHCdP5Vo8tuYU5JJW",
  "key27": "3v5mtbuJEnx23XsTGK4xbV2Yf46CNxk1z87NPit4MfxozEy7BcPhicXw6UUXt5eMPEWkioQsY8Jv7DdssAY699U1",
  "key28": "YSzmMQjSdLZL3Pxo1R1mn6d5GVUuQ2DKYaf3o9CtRAHYcWqGH7aHfgyBMAN648G6bJisfPLXV15pdssA3DWJyw2",
  "key29": "4xS2aHmeu56jHatRnaZPyZHRnojEp6cKJAwHZoBPYG5hGSsrqzE5uuYKvmB1AFkqKn12Vvx8x5TNSUT9NFpAVshx",
  "key30": "3NCNUFCZzH2UrwnCnCiAKWgsRph2K3fJCBdo9EwZDjDHnHAw1AyfPnxWseBfUijfYux5c67y5q78gDbngSSCUEuH",
  "key31": "3yUeiGFajK56sRnwBKDZFn4tzyHwCkRkLqwtcdqLsbezaVLZuEMYoKUikngadZEWpKP6uutTdX7H1b2FREw3GqK7",
  "key32": "2FHVdeetgybdLZB1xBtwZm89PvfJgbVa1C7ZSoCwgvSE7xyCt86P6LyuicsT45LfUihTbHANDFK9nhH66UGMKQR",
  "key33": "4sUjBxUtcTeAYGjKEMCKy77gowWZhbkPaE6WBx1F1g5NshmRScVVnjHa2khVmntGMtF4awPtxsfQoTcTcqmjFQM4",
  "key34": "TkrbFRGP3FbKBnQi4eff79LWkyn83QaAgycmR5fHpAa4oaWsTtGQsSN6uDXCG3iE7XzvEVkM7LJere9MhEnyzLe"
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
