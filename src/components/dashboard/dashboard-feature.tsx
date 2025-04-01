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
    "4pmuPHJKKtCVoLimbMkaahnuiUNb8evpygP5vKkxK2LHRAx1MtyhEdBrjeCyFqQz5sFWbLMt76zom58ruFskmRXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHW9VGZNidcmWDoVUZzXeC4n7dhDwZWosu1AtX7L9C9TyKDRpz4AYUBLvcRBGs4uP1FruCzWxfogxfjPadBC7Gh",
  "key1": "25rhCjxshudY9DiGirmfayEPEtDjamLY8415rLZpzyRgEFFQu79xXt41xeug6BjttWHo4jTr6p4ab8QE5pQvLTHT",
  "key2": "2M2dCepCkjggxrSbn5WFVPimJ1BT6SxZbRCkLWbViUmoBDx1sduMruNrDkbt7MKwqTQGUmFTx5UUss28ZZvM8cRh",
  "key3": "5ChT2MSkxg8bVUXwmYe1kV4qrrvQCmyHwuNCrBNZbZuqS2G2obWGe7SwJNwtWxkJc6M7BLq2XLNLJsYHsfmAVDwj",
  "key4": "x1Us2VZvUmuueiB7PSSDXkPXkfE3afUyiUv1T2oeTM1a9a3hoM5bffcM5HSDkihpz9uqBf4JRfYuVyP4VpvcgZh",
  "key5": "9gRMwesrGo2xWz8PmaNHmJtxF6PAvvHZvrDhzZSLcetKsUkGqoBQ69XwZiFHQKQDPNtaVG7naDa9cWNsbrdcJDd",
  "key6": "2qxt2NsWcHV6PBpurjs5RiumT1EKFMTr1t8HNfQwkssW8apo234GPxz3YLWUsc2nR6qGeNdEvVGqrFU7ASHRrZs7",
  "key7": "4nV1KSXJstCCJWasW2xi4U1ADHcKbHq9QVz4w7SGCMoHCGWrW34LnwnKRDZS8xM5Uv7kwiSUS3v4Xjh15jQTaGEw",
  "key8": "3pn8bjxc1Pcaewy46qsSBchVaWkwPJkC6mJ1DzHDwuuv147cXV6H1BiodTA4BbBYwXDbBGY6ALb2hwTtUvdyGY5m",
  "key9": "2u1wWgM9nGuqQdPPcwsavmXhzriQfFEd3rLqeQktrzhDoSTcGohBNd7H4hy6jZRsKfa63EQtZ9zktEXuH9xwjdXh",
  "key10": "4h4kFhvuGwZjBGSYTQo75W8GuJgy2wKA7Po8o9sYPb7LrSEqiZjUMUXJTooRQ33QYDkdc5QRz7Zx1z1nGNxGxqNU",
  "key11": "w4XocpWsTrpMpNrYtRVganDA1sZZi4cqv1ud7MsWTEf8KwhYSjzRqR3eCZacJYonbEwuLuagYyH1n8TMBNTzeyj",
  "key12": "2p6ECjG1v844EB1FAjku9BeqRdoPuNjozGHwkrWcopymCw2W3WkKi5ezVh2AcwTi1csvKNaU7wYyDfmRUWCfmNGm",
  "key13": "2UkT3hL2SyfdFpVmRyJZdYJTVwiGV2WwVaByA7ComxQbu1WV9FzhedJGx8mvGESa4Ej6VVXvNJiVWsXMQ5SHo12y",
  "key14": "4JRtL396ZwEdszFQJG7QpMMhfrRNAtnG3wazJYBfzmDW6igwzEdComFS7gnMMBqWATQtLYYKGGKgVUeUGL6oqrnk",
  "key15": "2QEgTUoyDovD7KzsT7QzgXnajcRGDAkbBHrNCZutKyEFJeUTvtTNQUGFgLXTXwt977tAixzhSY9FWFQe929E3ZrF",
  "key16": "JPkHyEngXFbsPD1LJG6KeqAXu4kDSRnjKtEi9zPskgQz7kEZ5fjmo9AEZCip8a5HdpoZH4xKYGTtzLmgJ5t281W",
  "key17": "5qcGEUXKhkndADes3RptVW2Yv5u6jMnMhFxPQGfkssw8Ds8EMndCkoKf2LxSVwcuGQKGbWHqZ5bWrecNrtZyVAxR",
  "key18": "2QFytLAX5nVDPHSUASLoGkyPBvooS4zvA9b3dev7tTWBgS2unL9HBq4J4DdKRfjQGq8kioBpEsygFFu6dSBEh6dN",
  "key19": "5VN6hwMiEkAGGWNtStStEHWzL2Vg1EUHF9zQQFPcPWLCJwqVHA7BkcnSGXKCcZgqT46uS7amnAnv27gba5cUAWr",
  "key20": "2wnvK2RRwhJgLyPRyxEZ7xXLhTBmRrfCkGhBAAhQT3ko4ndrnkPiPp1mUy7pTAEV2n7LCCBQmgC5EjsriHatJK6S",
  "key21": "3u2Z1BAZhU1j9WfDcL292YKBSS3hZKLMmsYbWfehLA88rS6aRsVNY6m62KSgSHWKEd6wFMJL1xBikng3X2THpww6",
  "key22": "YAMjpSGFcbDx9t1CZnmykrtdqUxhLnaFz9zobjAoQjUzQWFzuVK1xsjzZFCLDmeVHaK44hFSTV4kRWai5Rnt81F",
  "key23": "kNPHKNmZ6zyx89haLs5HuYNXjYv2eih8AXqkS1GhTszvPCfGSZgFGNrjWeTKeGDvn9fkkJN3SBC92oTu7zmDtJD",
  "key24": "3pTEvxG2QeB9iGgQhcyHp6M8BCxLeNYKCUZA3e2yqZP9P4nAUQ6kQzkdnnLz1e6KpyBc8n8xA1a1BXXaThSrH7wk",
  "key25": "gvDsiC6KjetBb9LWbmqrW8JDdGtFEMuqcKqfDPhbcWT8GEfeqHwbaEJWuScXZM7w7AAKKp8htLHw1wfGbehwM3c",
  "key26": "2DQt3wBBegGd69HSqDhsH4yPN6CLhmmF4NsMKtqh7e5LZ4uDx432yWsbgBWvBhigZQfykrAKx3qY9GRG7Wa77GYL",
  "key27": "2VU1ck3C32Sjybjyrdqg4LnLbLPUpXkoNAeMDqcjWKzgCUPwBkamrS3E4P7kee6KYR59vYAENJk4ZYRSKRJkKNPa"
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
