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
    "59ui1o8o4PjzMDvHY9gvrrRAkXa746odh8bNTmfhhANGh3j3VxjAeRjLTjZwfxdduYDpBWqsg7i1cg3Jo717ufBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9dMXDJusbKVyc4mQLW58WZoUqMyTFya4V8mgz3moXkdQE4EmbiaTSSNbAMSbTABrR9xPEfWdQMt4WyFtDFsZjW",
  "key1": "5Tvj5PTpBWCshcVuPv7HpgnvGJDhF7qkM6LacFVL2MY4ZbhU8X5urAxjAqziuaC44E9NEuHe9vrdvWBnQq62AXZW",
  "key2": "AmS1SLZu1a6ZWf9ozHStVrnUjq2U331NyevWcgyduyRi3P66ZxgGfqoNpE9DPPVQnVVBgmjn4uHFZTQFrrMCrqw",
  "key3": "3eiYX4jqKXyRHGKGZJZxQ3Tria4VZvV9qQenfuKKYcKurmjkVM8v4hxQAJ3ZHG4Gh8tUdpN25wfZudkjBEkWrhxg",
  "key4": "2Xr1uKkSzvyjiMPLXvAWWWMdXgvsKNefvBDwsRrZ3Wt2VCzNHckyK4jNi3A59Q2YeHFmGJRjDeMCjFSCT5SjpV9K",
  "key5": "3Uwoy43cqBJZp1cr68FGM4AgtcY2koTYCfcocMRHUjnVwMTShZRL7KKMvpcnqsE4z32QPLnWqQzetYgms7o5MxLm",
  "key6": "QvPMRXNDX6rnmqcdxgsiiRReem8SJ43NwEX6NVfiy7riy28mLy343uRBbqsDpeCC2c7wZQecXgmaZgaXxCvkmZS",
  "key7": "V9QK55Ck5JX9cpwtiYFeCD2jYnrt94AK9XrXzXYyegfiZq5FyQP2471b4mkF9tNcdqHxLFcErh6eD7kHp8LQNZw",
  "key8": "upJPLJTmviVQiMLn1MVdnphVsti72ASb8sQPWc7eqWVkpfGDqv4ewFPQHB6uLsg3DLsnEGtfYyZu8P2qXPwg868",
  "key9": "2vi5eRQ8SSUDTSz8ktu3dD36SmJEXTQ5Z53anxSWhSotDxHuZXL4oFT3qxXHmyNEzv3bFHd3NYqs8d4J4Lpnk6nv",
  "key10": "2rP8D713xCS2rsVLjqKMq54m7gzcdFv6DRAMfX3EdyPWjE8X8fZttF4r9pV9HHsTMwbPyiTX4EhEhpG6ayM7XuYW",
  "key11": "5RyA3SQ2k14ndotDkpGkTM1tLMXdkVjHGd42xeYej4niwK5J3HgLumS6LHHSPHmkDWnGuYYNWaH4Fxn5GSoLDgGS",
  "key12": "4e37R4Cmfv7EWPwNTakMyDEWqfZn5KVjD2QXRzgzQZCyE7qTJY9jecCeWdBFu9iKvi5e7cA1CqvDauGxTiPrnKk7",
  "key13": "4PttfEpeVTiWcYBWtTQcxNuJQMBs3J9VR9tKSCCn7nZX8zRxsMEGGPzqDayyH5Z8RuuVtaKcD6tcXpLXTT2LyCdw",
  "key14": "3DD9szxbiLhzRNo7CxAzV8GjeeYCwSDxTKCLPXnhrKUZ5UQSmGmsEtGGNJk3xzTDTjUQ56SoaJTNwbwYqfvPSped",
  "key15": "4fRyNgqsKNUW7DdPNVu8DcX3oTy1EtWjV8t5EwWcpXgZ3t4fvxJykUEutEUqnZoTMmkwB8E4WqXE2ATn3kFzHsQr",
  "key16": "5YyU6vBKSMjLU76nPRiJLcicezVtdozeNw3ENgxuALFd7doGm8cNTHGZU3py2zsoCMkVTqPSXaTKosRCv88VnR5C",
  "key17": "5yDttzaTvfLz4egQ3sXm94sLgvwpVRPdUnHLmZjhFck5AiCxT71e3QretCKDw39qCFxbTHSaMD6ZnBuVrRhXjmom",
  "key18": "Sm1orwNjedhQjWZYZ6KvjEZYToTnA4Q7VqijhyatiZ917ZCSJkZAo2krYgWcLsoFiBYAiKGZ8P8SAFvimZZ9vA7",
  "key19": "2nhsApUnwi6Y72DCHbM8jPA3yosuvuuP5JaJhptjbA2SmA1M8iwHQmFe48wdA7XW676M6PnaChCLQwCiGMP5FXoi",
  "key20": "65aFb8S9RpsNnwzRnV6JY7BCxPkRuLiFBBcG7UGRXhun6cK6tZF5fB1mzNnbchcbH2TaoUMjhMTh6sowsDeoehJ3",
  "key21": "2RhQKSk66m3NoFWtMHLcjdhbxmKcwBZ9d8C8TYEVDA6JKVQoL7LVFHVfx84USN7a9SRr3hMH29GTVCHRYUPw52yC",
  "key22": "4tYZjoXVRrpjBaVRprbLvx6nqxrueCPoEq2myxsnJs1FYXeG4Hv52LVbBSywE7wVcgFvEk5EAP6s4bYDJp3kgB24",
  "key23": "3CPY31k1Evc6T4r8fJzYrqhjLLqYCD9qL5Ve6ctqh6kGkmDqxGzu4aEWuT4GV5ruXJJvSbXin8qk8hgrX4oTq15T",
  "key24": "49NCBPLbGEWTgHA32g5m8Z8vujB4Dn62gGMCCEX5XSZxpV99xkm7ihLfGcB8Gy3W9yM93R6DWs55ERJmEkgzD4sy",
  "key25": "FEU34nDQDrc9f42aCxs6y1n1gUoRLfdwB4sRDSdShWdKJ2SiA6nj6huXzrwD26XKWi1TJpMLa2Vyg9ja6CaznTF",
  "key26": "2YinXpM9kdVNCfFVY8diBrE95QtzZuESaNoxUXFRkRyxKkGvkH2z8Z9uwDgjzzkyHjn9CYReeXq59pTWggfU43LJ"
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
