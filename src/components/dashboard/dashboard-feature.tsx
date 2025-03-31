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
    "hySwWXXfZ1JHhQEerWAx7dnVXJqMzmWwPvCGvYSJr8rsy5JKXhWA4RcCD6fBYq5uQFNYgA7kMRSdSX66pPaAJyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCCHsMk1GcipfweSvrRvCgFKUBLiPJjhJAq5FDFhWKBGJjatReCQ8hMBapAPqLowSpGvECu2mtC1WmteAcnYLqN",
  "key1": "2MDAS3NYJXYeFBC1nowUY9U1prk59LrmawCSJnBzDcrzfmMQXmCmDCvsUnFwncuN2mqVSSTapUzx7PnSLBifW45S",
  "key2": "5jnBjdQq6timTqxGYLQ22XDgkH1qg8UkttCazZV1n9DtqG4iSGHVt54haNMmmDtPKrryM9GRgeMWTZ9FFvF8FDqj",
  "key3": "2kCwtrgx5ydvxM85oEm7qkjj4wkS9MNHkvVT9RPG7MbdgztrJBvepmCCKmFR6SdpKHBPu3vm8V3TRGi9c9eCP3qb",
  "key4": "4bpZn1rnyQ9a78EAMF6HZLvbwPyTUVoxhummpwG7eAXaGsG7M4MRn3FjkUPekjtRVjUak7iarCft5E4i8GNE1Ei",
  "key5": "67EANjBdr5wJY5GbhPt46KSRToPy3pHeeHUphv3oPGhRNurNytTKztJfJW4ntXA98JvDVV3mQJCPfkvgs9Ucajq4",
  "key6": "1pyjTjSg5gueyZ1wrXgdvLCKDpsgh7Qb1XvcXC9cNwx7bqCjq2tSYrYUnTRLXqg3rZEpjBBWFNoX6RbaF92zuPo",
  "key7": "xuZmCyubnCvwjoAWWk3pzc7n6GBe8bspuxfYWLt6Wgh3JQDggwf1Rc9XGYYTKQ5f3VtK2YmXtyVxwW8NyrU2JJT",
  "key8": "4oo1CteDNzxjnEmCEBpsv9sZQJ3qKYZLUwiAoAA1kyyA7BAqwQMXiZQ9yZc2uvb4zCGbZ78ov9GPBxRcPjBfxQ5B",
  "key9": "5Xz4RujS6G6jo3K6YLji6ZnJpnovXwEy9B49bTk2c8BphEx5ULoSAGLuCacGbga17eEADiyFSJ2YB5dGma6CepT9",
  "key10": "2w3kVUMxnPw6VSaVrgGaU4JX5DBJkp6ibQkd9c7HSGiEJ6CXBrcpraq2bQWxvApaq4pJi4SmnWP3pWxTqJfD2UaS",
  "key11": "5jsoeivTcdyAswB5EzRhDEf6jhFmBxRiigqhbACSj2BV4ziHNwHq2fCRCynDnYBggwiaYnMUZqjN28fiXBMo1HMc",
  "key12": "2mmo8n1hS4XmgGJTwpJYZZi5YDqA1ovbhBDjEFdMqHfUj64d5qaLvkx276yyE7w3Fuwj3F26xtAmR8XyFxEjx5m",
  "key13": "5jS8o12t5rafjPkGUEUnpMvtKpVeQmPJhbgjP6ZY3d94dpYZCEFoGs1JX9ey7jtVm2Mwm4GmBx5tgJRZi8GGskpt",
  "key14": "3e45qdwLaYD5E6UxScMYb5bqvsVWJVUaxUiNBPQT3jX7za6eUFUpRxEvTcgHecSpE7UszunQLstjDMLFk5oTzDxH",
  "key15": "4ySm8KtoovjJu4ENiGvDF5wuceRfT8GJtZVQxw9c17ZXofd56SLTu5ZrcnihnUmWLCjgK4u16JH1gdhUkVBhU8BL",
  "key16": "kfHWgPrhErBuFHVjouibvxEC4PN6ZB5CyzRJ6QoNPrJVtoEPpy4FanEVgBnuz1QJPbaWgVcEEnayHMDiXvpjVN1",
  "key17": "22xij98s4qxm3uUftKB1Gai8UGN4tNMfFCKSSZvrGxNtZ53hcskTQ7qx8MLUWvL2UcBSnGDexh6gy1D9Uu2a8njh",
  "key18": "4Hi8fRaFyeMXS4KeRBHecDVwwLyiXHG7hfahbjbEEzvwrfsajxcg7xmA5kFcedBdWvz5Sp16yiZttSh4kyLd4Q4B",
  "key19": "4nnm4LDiwWcVwfQjfPwHnpscSQbaZ2bgzSASViDgZqKT9CNEcFufj19vFnZLBvEmRwvocHz1i7dARktbNMDfSK1j",
  "key20": "s3PzTQtGFB7Shj58d1T2okUtwx3tcvT9Pow6PiJAq7vMtXcAPohxBQ7EcuRMS5yzjVfG7KQwdUcV2K4x43T2ZZ1",
  "key21": "2hfEv3DowgzRNb6S6RTP3xipEHWMC1FshnfL5V5UVwifveK3TQm2NrAiuYFNsZPKYyuH2GHLwkfYk43iPqRPjDaH",
  "key22": "3oXghtCWy98Jdnr1smPrUdF8vjuVTrYujavnVNNeUS3Chpf3SzQnduyEwhuqzpuf7xj9DpAxFruuJjSsWhL3Yaj3",
  "key23": "2v4bEjhHXBdAN1vJ6pgD95fqSm8Wx9z4vjrxjZyd7Qre5Rn1r97CdeWrxjAqYch36NUZGWnxsweat51KnGszSZNB",
  "key24": "2mMCwWSsAFGxSo57DV7FHH6wbGRsonyxyDUKVN9msLkKihkhvFbQ7P6DB5rjGoc5t8SdAN7Pyh47ZEwmhCpeWxKu",
  "key25": "2U4NKZMxHpWtZFZV5NL15H7XHsawsEWvbC31GJ15PRFvwcVY5spuaBMCTo14ycZqRNxTBq72k5g5kugUU8ZxxQ6o",
  "key26": "WVL2kgGHYY7p5sFNPJS5aJDTNHML1vNK3SQajv4gzSqPW9755Nz5RJchotvmgk77nNw4qh5q2BfuieTy6etQtLm",
  "key27": "xGTzp7LVaWiipfXLpZeYNVYJmMxtYeneQZo3pn2DVwaNHcvun7gS7uiAwPFArvSzcCMABcDyCETGZfWrmLL7nSP"
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
