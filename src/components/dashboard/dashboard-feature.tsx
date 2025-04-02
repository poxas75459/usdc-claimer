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
    "4LsaofR1k3G4MsaoBM2MXrpuxVQSRaH8Kpgi8wZJC2Vj3nhSzo1CxjCfDhtc3BTQk9cGdiDtnQP9Q4e5dMihQDKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEZksxdM89Sdd63XMjSYvEDmCRWVXBff3xatz1zreDwLCYkERQu8ogdjNe2Lzprs6mG8waCNBLXkUPFbnaKkgah",
  "key1": "4W1GR7QzcakHiJoEBDZhTqfrg4FYfEb777HJKFUpjDAN6ypRHJQj9s1qqm8Dxh4rGr6EcUNJ8XG6eFP1VkBHgCgd",
  "key2": "47Y9YXCanQaAbQJT9RdW2QRcuxcmKhWDJC1FWTPsC9HniW1GwA3jAWCQd6ijzMjd9Wr4ZjRixS52JCfXx4wm2qao",
  "key3": "541zzLrJsJdWyHaCDDgxgXtAByiDzeR7RR1PerPAzcFpsm44KZ9oBEUFsnUQoqXcaFMvKc6z3wTDmHKYvbNLkwCP",
  "key4": "5bgpqJLZDKBJRBWJdSpxYewiLuodTCqRw8zEZdEM7WDM3UPHt4cZc9bpCtts2Cc4dyGcSrWrMKH4ZfWBojhXmJMj",
  "key5": "EiFEFd83KP2fzF246xq99xAqXLDrT5umevCq92frCpxNsPFTHan7W5HJRFhcT159CqtvUzGAd43FcZLAc244ZAj",
  "key6": "RjnVyfFbaioapDQDUCLhepfzNerQyypvjF5NpVDzGeiuqh83Zbh38AkvVRfKhFpemnsDHnoJoQwzR6HiAdGUAjS",
  "key7": "pFqk8pZ6aitmVxQ3DvthJKBe9wtkER9MwdZB5XVdZky5AGSy4RuGjpj9NfWP2zH21WY52GQS8eVJBASSf9r277C",
  "key8": "6Rav9zfZYAqouVJ4AF3vYf1FFXLZZKQhokYWDggSrLnhuHuCE9yde5sKsx3tZ4wiBydQFo2VX9c7sWGsQ4V3cgm",
  "key9": "5HNtvw3gS1PUi4VKDc4jMp98TBwzgFaZod3Q2t8TrLE25RB6oNY3TKpQvUqMS7YeMo5JDbKWM6bcmn72WGmQp4P6",
  "key10": "49LfXb57kQ8oNuJu2iFhp6PZQ9prLFdjxf1z9XVjdhzVanZ6kEQXuaDHYPygut23EtbyWDnf6bmrFjLuF87u49m1",
  "key11": "pBBCMup1RhiQs9pSw5XFG7b4EwF4Nm1r4NT1sTcrucsEtQfKBuJTjbnji5D3AXWCMyQWGQcTwhrAc7KvURaHh82",
  "key12": "THWFqD1F7hVqi6qM8GTHRXtGgRrEMtoNQfQhXwm8gE95GK3Pi8xmjBd362vHsgu1DnSN57k1yfW97K3vAC6fFTe",
  "key13": "4MAwZtSWDwHpXjVe7FVsrDLTeMqmMiD2n2TTYEPVoDVxbqv22y2ywmC5vJjfVgvEM6XisPiYrWEicqcAnpFS3JfR",
  "key14": "3BbR3RGQQrT4o2JuQLijso5RZXdpWJMYMgekpV223NPEAcFqHbZJMHXmnLTnKbX5ACAg4pXnn5AwBmrKsN628eQb",
  "key15": "5QPWTEzJkK7ranm5xF2nzbzhWGn8bDh6tPaaSqTXFAWW9wh497BZBhEt5tkaPS7MprbGWqq22a8XxQV6TCwYXtvJ",
  "key16": "5ydP8BQHH3cneje238rSCbmRa2kdApE4EmyymvCvyRp4tBMzWBxWJpzVyyBtymW6S9nrfLZpsEBQdfNhFQNdFZyV",
  "key17": "3LtrNjjCPh3n51PqgDYmZ7ne8Q2EMVEQNVDLBqkdsmZU79Pf3MdUraNWCLgFFWHSyuoL65w7JvF4g7WBYAbuq5yk",
  "key18": "38M4wEgEEeym1yJE9UKt8hVjPG1XscFGoWduY5ukqRFUbmZVk7Whb5n2RpN2T4UwtVotbEEJZVJnEtjSMPWEaFJe",
  "key19": "d3sASKoNCAoiLfGYHgRiUkF7FrFngDK7NWCqX5xGW63WL8PiZnQFENuKgGsmsos4LtjwtQLTCE7saB8gSYYkr4e",
  "key20": "5fgAFt4kxNWEDeugvCLeDQ1XnZTqSKUEyoiTHQdU6VFkG2VsiEzLptwJth4SandeqE8SjANNXBZXirtV6bpifdmf",
  "key21": "3YyXQWHz8VM1fuCg1jBydgcBJ4BV7VPcWDo13HmuZHdD9oR8PoH8Uu4hcKATDTUNqzJdG7wDST61UYdc5JTSFvev",
  "key22": "3z4s9n9qR3ZEra6oiYBpHhNAsWQgb14GZyTGkShNuj3JUx9rxseoXTHkpnmyb6ULyHGc3WU4GaMZAjf34Euk69z5",
  "key23": "5QAypZoAM4yByUXqmCHth9tVeWWkxpDSmvj9Tjd5cZWTKAyT5HYjwTSAHcRw4bkqAp59tKySaYu8nNHFZuGEQ1Vv",
  "key24": "393peN1EYjPHe1JEjmoYQKFd8kCA7Sz4GWCHvozKyizcnCQd53THmi7SUkFrmAPZg8oXG38ASA5q4RfXPshjKyed",
  "key25": "5BNDwcmPgW7FnJzezULwbtnAr5zDuVuYBcxN1B2hHzDWbjhryFyrQu8akNg5wspn2P4Mj7xfuTyTb52yLGcjxzp9"
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
