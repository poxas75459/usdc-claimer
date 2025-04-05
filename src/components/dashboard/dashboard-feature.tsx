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
    "n3TyEcGYqiWvhfut5SFgLohBXaUNBXfHB1DJvDALfGJHUwHpzYKDi28jekSHBVvkArcVsuys8Smu4RYjcZSq8xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WSmJ6qngHmdAfwkEEDrAgnoYZ3bCod2xD9q8R5NYgiVrbwLtqpmTDEiVr27qkT6M9bfawyiLvKbnSK59nq2KV6s",
  "key1": "gjbUaJi3dPCWAJ2surecPUKpzPxW5twFgU3ZAdMY1TaZf6p41RY2ZcibfSjYeq1veNhqUcCR8o9AfShv2FDkVYG",
  "key2": "ErAuLu7Jpymvi9KY2mBDWuj5JJykrMeY6pRqQqebebwZZxgAQaaqDyBMFqfCeMp1BZyUPpgLLcneW6YZvedr7eB",
  "key3": "3sHSapdn6vF6ZupCwJpAYtcLa7GoSnr6dn9Qr7JaMmrburvnMEG46vM1rYo7nKQDLwPrkHYUp4CYXQBQ7zNnKZaN",
  "key4": "4furvRTZDMxtdcsNFVFxahL6MBgYhiW6kSqEYUWyGrcDrNJqmLdyDy1sqC54zzCTA4x5eYTBVUXzmGzfjS2gfdkG",
  "key5": "4qMiNJ8hZagqDJFU5Pk9RuZ99Cwijw1pw1K33NPSfmXQjU42DBPRAJBY11nfQKmqWb9U7oZX3LCdMpnE98CJjzem",
  "key6": "GMMSdXn4EQMSR7K8wYMvAzLAyLP9mpCuPaHyTqhBHKJhSPgD7uTzxnc9svdFLADbBQG2bAfU8H8iR7qQiEK4ArT",
  "key7": "5sNZVeWFPXHfoW8pfFWwzSavfXdfniLcaTEbq5XvQ2gXiBW4DyptTonuF4sT9SQakWwSeqWoSiWacsnRoXWvo3pi",
  "key8": "47QhZKX6yeBr2x8PfcM53QCLbaUFVmeRfrGEHoBLrh9cZAWR1NXeMpcyeqJmtD7ebCDgPHzF4UG2HuFzv4Dwr8uq",
  "key9": "4FAy8pWRDwSrrBE9BsX9EB1qkYeM9fmvmH7HT299h4ZBf758FDDjB7tCzd3swmUu756DhG42ZRsLGQhYvTBgxJCM",
  "key10": "4nmn5HJxFjq3MrbQno9YNBa7YmMjuHu9aFBJxQBcgeL5YAUGoqTi6WmPmj2GJymJyjmUiv3iLBYbQuNQeCH4ZpD4",
  "key11": "66sS2STkfJJZ5wKewS5PQBJCHYZe7m1wAoE6m4DjwvdsrsJb1DYS243Uy4ipwuPn1VpYBzEVxQaN27NwNALk3C7f",
  "key12": "EgbeU7DiaesdeMA2oBCjre7DXLPYSwbqexqid8udpEyV4PY6U8TQtPT5hNACjjCbHpP2U1LJEpdxa2gnv4qw6bi",
  "key13": "4yA16AqpyTwMFa4ZBNrRw2MvFcDQu4x42eTkxb7AS64G8TjptgSXnHgm54zatfuwUYjhNF3yUymgc5S3fHmx1pfg",
  "key14": "2rY6WCLq7tbAVRDPwyMvXZuWtXic7wK4aMbr1fvbHMswnVhYbBpBnoSzuGbmMdPaL9xLEmzK58oFZeV6TyDzuXG1",
  "key15": "61BYQ1iQmTev5BaA2EfxNHrBWfNPZGuN2LVwhmJQWBM1yw5ybMo3YhRqPiWP7FvF4Aa7t77pBB9xJq1fPbbZMHdF",
  "key16": "Rq6aR4PSX1tEWdcnfz432rkrLbEivv9xgTQAUinp2pVbnQxSX2Nnf2aee8HHte82Pv4hP9LzViLx9jUt6qRU35H",
  "key17": "4MrBmFM2MPkNu5VE6kuzziJzLLppwY4s3QgUVK3c2gQg2zKShrMou7nJyUxLahtQ4tG5rnv2E9QKvoY5a6qphTms",
  "key18": "GNodJ8kvzNeTH6hWZzFRhoM2DSJz8mToLUVkg38f7F32gDKekWqEjDQeW2iso5GqtzXJNZB3qdBwu1aCP7Mp2k9",
  "key19": "2DP7jyCg9SYEpiqTpztRbLaaGQxtiHsgAJKc3E1jy2HSYmu1p7V7kDSKzwcpvsXjfawDMYkRPnpWTk3RG2FgAqMi",
  "key20": "3Z6BFqjQ8ejzLLFxDYzqNeBm6MkGvpQW1PXHCBQvfk1G8W3QdSd7rkySimRLxNem8U3TNkx6pHyCoUaCvxR69xy6",
  "key21": "2DYVjoEnoPv6QBUbCUNKbMHqTDDh2WixTkqxMmWXZU2pQfwbkgoi6BvrEdSgbTGmo6APAwi62gRnTDaeXXR92yNF",
  "key22": "4dPkUC1W8j37QkGDaPasXn9ujCqhZomsNKfBK3fNa7Sg7e9zbEd5pBDyK8XrQgk8Ajjdi5Lf1eJVWzhGvZuq684s",
  "key23": "2FZx31HxQt452t9LzBhTNwmdp7LoduPaRKaHmjMgkYdvzaSNetwhkTV5Sm1WaLm8NgUq4hN5p4MnFZ1PR7UDVujH",
  "key24": "RAb9Ar1g1md3oNg6XNP5FQLNDtyC4DSJJCkjFdZQagQ7hwxyJ4Ym3JLsZvUK8MvsTXNPmz2wVvAnBQo94jp7GC1",
  "key25": "35s2YzXJwf1jkUkVp3zBT6PQFLwABzrhbRhFPtZhDSJwpf9F8bXjSPS7AT6ATL6gbjisco3v5yuR2BMrxxRpvHrm",
  "key26": "4D13SR5THDABoEN836BCgcVo9Hn65hzZKX7oPgeaDbkNFhTaSXHq5MNGeQVJdkpMYKRPd25iAu9ydP6MixwMs3W9",
  "key27": "4otb7VLgnWPqcTxze5LsYdsphTaovDXgCAvjMZ6857hwL8VHWCR5XD3z1JKnL8EnZiVwn3bUp7mb6pxi8JVnFCMm"
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
