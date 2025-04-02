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
    "2XQeDeA8jd8YNvtkJ1CLx3sYKTnqmWExGp9UrYLade82eRYdSgq3oHemgnz86S6mU7bKds8NU15g45SjYswgT8K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hgymu4BFhtvNn5nsY2DtTpt4459z4YLk6o2B8tRz4eA5CdPWFzgt3rtVMLLuWH7LApmRoZGjjzcv2pN1gHo5uvs",
  "key1": "5tZ7X1mgR8Z9yPYAX7GSx2qAFtad6NJ54TiFARZ9dxwyBUuDu67A9yTkmr3xhW1ELbV3A2bDvV2rrMNa1J64MjR3",
  "key2": "2tcQQh2d6zBs9zVu5Gre1TtfGRijgv1qJf2YvNADPiRqUekk4cEK5SL2WfXas8WNP6kHd9iAdboVSXrkVweUQRHP",
  "key3": "4x1XgmrkRMqrqSQh8x9oGnWJYPwu2R9aE4wgoHjr4Fpotj4SSuTUVKmqk7KWMiAJ35gUaL8PCWvYsy7UF4V269QX",
  "key4": "2jhENReANDJoiEj78XFwCAW6a9ngaWDRR4L3DiJ7KhaLSQAWUwusRy8ks4umZPAKnTeuE95wp93eWEb7gTwKM3nY",
  "key5": "GuS71sWSE13tt6BQ7cVemburcD5TXXLm2975KiKCgDAjYvCN1AjATxkCCB9nMLduJGDC1JNuQTkiJFjEGkjrCfQ",
  "key6": "n7jWHLZSzCK4E84tzKf7kXzka8sS2AJfyJqi747wjHTK9dsUDQWriPsV1ZXMpAvERLdvYRBPiNCwPC5wwkae9r9",
  "key7": "5Cok7gWJkztSTvhd1muzTMvzvEuaRP8JCTNVcGfiYz8ZGb4RN5MbQJ61jy2LLzPuX71ZvrnXMfoUKr5UPVA7cLtf",
  "key8": "2jEY1xCKRFBvKyAjZgc6GK4UEjnxBefL7RY4ofBG1kvsqEDJf88Hud8cfEuMQ1TRo7sT1PAqc1pxz4kN3TUjzzfk",
  "key9": "5qJoGmu5kETQwbHtK3w5SLcV3grJ465PuZG3dNonqSoQVyww8ovLYUtw3fqMyKuT29VjWovpHQstFcZhFo5GoX3y",
  "key10": "3gTXfge6VPu9Md6zjm2Z1dbwiDMMHUYboFtJGovCHXvtHwHFg9CQDwzf6oeWzyk3gKgXSy1CivXySMvQpMMPKodR",
  "key11": "3vySfm7CFivSt69byqoHPiyHGiYYMdTRs1SX5CXAKyGQdHDKYxfh772QZAet9kjAa3gGMP4hiEN2AhWh2No82fAj",
  "key12": "HJzyz5AgWSsfYsk1JdQXXwPrZr3mq88J21HpeqxQQ9AMiKNRYfq6E5kSeEeEuMAWTxEqF7mZbPVUK7vufbXnTp3",
  "key13": "52kNDN36E7W6tGeDWiMv8ukvAiLdmFAhx1AwtcYD56jGkuUabMZAmGVYU3VgjR9nCswhq76eo5WEzuSodjamWoiT",
  "key14": "3k6wbckJmmau4GW3byBV3CuYBGvTi1V5kVeZXKi8Wis2QD633icW3zGasT6HrBGiJahK5gYy2kYXnme1PzSgHUhX",
  "key15": "2bAJPs9L7Ne99BuYKM5FgTgSzVd2QQ3G61WDisA3mNPLMqLC7zoDQfJvXkbetAgXsaSWU4bDyx3Ko528HNUYVtqq",
  "key16": "LhcSB8iQZR7znhcFUmgCAwe8hrxiJC1NQTfFpHLjVgPpVD2wNnBKoT7A7N9Lb4Rc98Axpv8PkL84KU6UMVHFAR7",
  "key17": "5drqAM9mDfEERf5BBW3XYcWq8avDB6Nk2XoNxhBRChH5dBm7Hs8yf7sRR38hU1xqSXG5qm1UsPTuekBRVV5tt5Rd",
  "key18": "2i2N9Mr8aU4oAbkxpxfkF3RjDPaHjEzJWpx4fakRHxvAzbKbhTcJDtctd832XjjkRMraYfWcPuLH5JE39eHhdhEc",
  "key19": "35xD5vkp3PMMxtR9obqYq555bpLebmsb3EG5JPvuRZt4GjF7k4Pg3AeWqrGwVDXTe32ZnFdGoGuUMsTo3gt1XfLL",
  "key20": "5X93ZKyuMvMyKQqKxUboajJLJ574E3N6kjA342jp2ymETt8TpjZWoAawHmELJcgEyqTpZd2Yib8CvQjcgnndNFn5",
  "key21": "5F31DwvgDMdbiqptVd29FJLn7PC4JFYAyi3n9nW7JzB2JDxqsnfqPXUWpFEzuNePeywkdXswxDF9LweiqtivxEg1",
  "key22": "3NjzVBT4Y1BWZGZALYk2HiVXyhYnsmCNzr7vnLrGHdHM4Jk2NPSB162KfvTQR55zZrbhokEv1PohftTtceF3QjuN",
  "key23": "5qfUVDiAtxMtcxRomHZTX7QPGGdRez9g5xJRWsRwwNbHAf2AAgS7PZ1NtQnyGP4uw5ufz3sUcqnsqJbGRrU4B7Kn",
  "key24": "5Ax77wNoPeRWLkLaJXbs4Nbk2m2ouyrx7X23oQCCWgHyxpW3rtRoxzinM2TMwoZkR6ec32QyZsYCj6Ei3sTUQbeG",
  "key25": "tRxbX2q2zL94B9CGnMABRqQgz4SYA13fAhzXJQtWjoGNMmiYbWG9YhdJ8FvGqGLKSUmrNfczTrMeCS2nD2yYPe7",
  "key26": "FZszN6tqjtW1rErhoBsjegn8gNZ2SMhJh7NbmE4ff7UJXVbAohRZjLfxAGEABnCz99scEQijk5UXhCJt4ZdhstD",
  "key27": "3GFAcUu9yT1y3cS8J4sTsefu6PVszg1Z2SHRGxAtaib4RK1HaEtjNGsd4TmyPwqJwhHDZkgMhW2UMmBouYsTjscL",
  "key28": "YcmqyhsuL7t22ag5DHqYVxExSKvqHszGswjawfAU1gfeND5W1hCKbbhY5r9s5yDS5qTRPi93HF5HhneTsqNRHvf",
  "key29": "5ubnxLRogHp7ZBDpquURWtNavNQj8JjVUAyLwfsNhVdf63NFpF21E8UHCXXRcwdWZh2CgB1N1r7Du87fnFSTmjvu",
  "key30": "27CB2pUAbF9tP7xjyGufKVSs64UEcZA52eh1TcUFQqfsnLGsSndRpZ1uaLYVTeZFGkjHBQDjQokZxQxmYXe1qxVj",
  "key31": "38MrfhQH99eaGpp9osMaLVLqugSfwgWDmmuuC1ESHpCH6SQCrZEfU33bbSy9sx3qkZftVtpoAxtLNpCAURQb2rnn"
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
