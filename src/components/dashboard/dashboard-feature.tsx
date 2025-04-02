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
    "2VarDDqUBB9zncQWJNAnYxHkXT1PABHTHpuyHjtg59iriTDuqmuwe98MoDY2D9K9xq6XZytS6hNnJJAJRZWbdSXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWEU32u8XZgg6ZLeT8DUWJUCTPKek1HvCQ3WbyXiEBRsTEKEavupYE36A9JY7h57FgJKu4SjFst3sot1sKCL7HU",
  "key1": "2wc5GBf4Y2F4QvNF2ucXjhyiwrUTp15csmB3TertXv2D95WBqoq5L6etuJgoPAb6Lpj8z6rPtuEwQ8Jn5XQQqfVC",
  "key2": "32bidoLja2ZTVuVcYY3ykW54ETskzqSgXeqoHQqrn4UaLqQLceZpTsBqFedArSmdVTQ39owotqD4kGMZ9AiNtEyA",
  "key3": "4555ty3AYvzT94zeK1XivMFBL8k8tC96UtRNHkxm9MxqWasJ9h1RH1KEWazv9D92uQcK4HriPiWoVvMNUkXJ6zL7",
  "key4": "vkwoqu21quuh1gqxRd7DSBLKpMBz2CsR5ddbwZb9CXC1xTvg9yYXZirqCvizynWbRjbFDHPCtyx4A9C7Ubjp1Jj",
  "key5": "icUBcMEQU5HABoiUyLDdNm5gvrSfmNrE2SP9mPNkMDRvVYRH5TddHUmc5dSSkM5ieFKSs9SrxmPq6y4dttEEXRd",
  "key6": "265sGQpNsAcGnyntvkcaWqjjGcScpuzS29k8qvp8wLNRoyeTT3p1HZffP2W4PufKwLHi7MjjSyJnvanXnNQdS9ja",
  "key7": "UnF3NSHh36RQ6eR6sDpGdbrPVv8XnLsyHpgC5ysTkkxkGVZnvfmoF53VRJi7m8znm1ZT12QTbeFt6UKobdonejF",
  "key8": "3uCAtknEpG5UwhCBhbgEJrmLKC9gb6iukt454SUaCayo6LAjN8QjF2FvTypKvkqJr1fiXWVnEZ19rioq9TYtHN4J",
  "key9": "35hxAqJtCZN8bM7m5hpH7tQx5ZnKH3ojk4bF6B1dLsMGfpD6mXR8fd6Bwqq913JgnGmFqP8G8hR9m7vdqnCrpaHM",
  "key10": "4wK1tZxo9CF1hJT9w2iYgsTdVS14qzUZXcBCfFuRGWEXDQLg4t81GQchm6pz8QpLSuRk8rcdUbiHtFgwQZMn7YXy",
  "key11": "3mvsryam8puSqNXKhwUPamgFgA7gNiz6jHwfGsbnWbJTpoBGYoQd1gfebqg3jpHyD9pKKXmY5YNR97dr3AYLKwvs",
  "key12": "pEqUriTVhwJHow8sr7tytSDKk3A4BswVoXhAFA1FkzuyCX3786nKbYZLtkzEWqFQpRMQZGgut9nDFDz7YA9tvWj",
  "key13": "Kuq8FVT1VzgUBNMxXUvVkY7uzaUa5XrYKYUh3H4fCB9kQjRBm3hFqYBYY2oZ5oq4JV6Fcso3iKTqgU99QP3bZLe",
  "key14": "4Rof4twgRToXeWms8NNTsb8Sy8Am16HSQ8jgugeJqpgeGjHivNMThNJtFxk4tY2T3CVk6R2X6RGsSdR4Af6Z1H7s",
  "key15": "5J1ywHfFhXitNH9aoFGQmKcthvZStmoxGHZ29gGrxqPzeZcizkxeXWsQT2yxmQyaQuwMMtkFJyNZmFzaEYXzVWG5",
  "key16": "5jcCKaCd7dZfUUHjjAFd4jSLMJsGJUgLu8FrXAwqU1UrWMUbiZvwtG1NgcSA7k5jBBQNXWQky7hFSS7it3oZsP9V",
  "key17": "3f78LNcv4z6mRCVVZMZtVFifcgAd55tYyKqqyFY8MKM5wm5W4E42GizkTQsLxJJDVjohGFHfWcU69hxRnNzkGAYw",
  "key18": "3csU31eMsBweEDYej7m6mu6qm3gSrQ391ekbpBcMwpt1zRHKH7vVEbaNciV2qky5mH6HXaDFZQq9txntD9pg3Csg",
  "key19": "4t2BGXw3Rqq1tA1zMDZ5LPAbf8WsUgPnXw96qASrRK67UH2h9zRcvJqqEvnWdeVHVEMRBX3WauHeWHrm8gsgDvNU",
  "key20": "2HpMFhNzgwhT9tMC7gcbWaiQwNDY5AFfgZUFwNfKsBt6yTKJS2FcCJ3nvJyvcuf2oqAj5G9UJjQx5xE8DbWGhtHY",
  "key21": "2Hr28rVpwPhqt2GpkNA1vP5whdndXtVUYM6o7GARTDckxMexqNvsqP7tNT5t1oZeEj2wGrjwufYWqiDJh2xS7FcD",
  "key22": "4LtPEY7zQVUFVvR8qxWWLshoSUof7NBgAPJEr4BC2kMu4gThXfjkxsAKw8QVoCKuToPBdfqqvaKxYDJGFRfcZsQo",
  "key23": "5Viz4YmPqj92hoKpafjve2i9BXiR2qBKX7nS5FJyqFGTUFNC1ZUjDWfifuQCzUCy4GxKJ6NsKLfAg1DLJcMRvATg",
  "key24": "2YqFkZEsBMKy8NusPgHLaecdqocojeQrBCKdZnUuKeQgykzsKPy4ELzKgRb1oNdpUKTvN5eFzkdBDXYUUxCTSfyZ",
  "key25": "4HWLdkVt8Rm9SZ6Y9WgaHc474pUa43J5j31AJXKQK4vJ9JnLWQmfWJnaqpeKiSmk4b1UbJDt1TTqhZmmekWCfBxB",
  "key26": "2LdPQKrVUdkzJWXsYPGmam442SC3fEmmeT8iVoheMpKzb51vNNzAi1nSVvBNCfFoc1haEcp9ZwSN1GDdjEABd1Mk",
  "key27": "2ifi9CZ5hnwDkcRd7EZDDWseDXEkuCSnEo9D57nP9anpnczKCRPjHt8ExLVpVAYQzw77eV4tggAHjGoADRjpMQdv",
  "key28": "74kiVD6Ypma6vt5esLBZ4oVoaKuPb6y1p1TsMCJeUjrUhBHegZckmwgsDzzP316tiwmdC6WEfTudPqUxjtrx5AS",
  "key29": "5BN4pbXJHsBtyzMTkVUYLbsWupmBEcofkaQ3qyjGvkmnbEMLbgPtbaBvqXyMzYTJMSe5k9rkmNzs7yeqrsDu2p7H",
  "key30": "3WGEFTSgHH75H6tU3rZXwD2t9LvRj7hBzdioaMzxTsY9hyqgFiJjrCzAQfMEa8gGbyChJfSBJh3qXFZTG5QrwA7a",
  "key31": "23yogSFwd9sNrq1dWdZPgqgw9xA7ZkYX389wBYS6SwXnKgNTyaXUJX82z1LqGMnacnkdxmm1zkqP9ZvC6vpoMdbB",
  "key32": "2jmbc19db6qKPrRzLV93htCwZqz5AYatCthszTkZRutWtt1fSNkbaT5zuoqWiNoNnS4sR2BM8ekutKbcLFNjdPFe",
  "key33": "26jmJkonmFnynK71KXBRERPkJWVvn32HEnRuLCKWW7LGyJpVSigQ7FpXtfw3nA3V35tyF2NrbjvTbY3JJLuVNMhh"
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
