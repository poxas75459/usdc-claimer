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
    "nYhbdwdBcw3cCNTbHuZz9eM67uhko8YWjLmpwJLtKe2ZctnWMW64GycdGegazcnzAJgY8rboeSGpoKeC5P7Hjtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzK2h6meFC1wy3j8HrYnWvqWdMw6dtvAo9jowMKcG74KRci1M24joUVFkR1NjkiRmKQRHtqFoYqZuEFmK35H79B",
  "key1": "33txaNbpSvJv1J1JUJyKyddPTi85svZ47CwQUYyn83XBb1rMPphGDnthoMCS4NiDaujCxXoxYgAwzMxEQHXyNDQn",
  "key2": "5hvFfSFJThdXK27kxsEqr3KJjGtEB26i2MBybqMZgRoDyZGQhhyrCE6ZsDAu1xbBqN2v9SK4qec3RMqUbBQLm3PJ",
  "key3": "NudFZHBcJSaAa16uFRkcAzgatgPUWQsiucKZP7AkKcA1qrmz49MAYFu6aSX9gM93AE16xckP2oeBqiNt5Ts8ck5",
  "key4": "54PuH2MwZPE1GsE7vWzWK5GAWVruGRvy6cj9W2TpWzjPa7HHVadr9Adw9txp7AJp4t9JaExtQuchUwGb5RZ9FCBD",
  "key5": "2bsgMk1QKuAmguQE4DHKGUKamaDEMRz9rqLrRWEKW6Yu4VdbCB7XYGKgWoo6faf13V2Z4Vyacr9T7oZDpsGUFCSJ",
  "key6": "5rm8SN9giBGmVkkeviUFgFzyxVxCQ3TiC4TLtA7ByGpJgGu93nG3e1GauwjdvkNWMuxZBDnRva4gsncXH7Dco6dJ",
  "key7": "5Hpcrdr3gfjcLyh5nLdYUfVz24n6vjcBSCqGxeR4NvNLtHJt9x79tFhxRdPLgDkiP86qgsprgcUJxXdrKrpkZCXA",
  "key8": "4niLSENUdxpCe4EFJDCeaMJAAk3xtWinDrpANvYA4DRPA3Y8X1YdXG5Kvcwf1zG8MpvVdghrNmw4ZTcHvGXLgMaV",
  "key9": "4MLKdQ2EbaiNQCTcke88VWZZ8Xpyk11wVbXPJBQ7c5ExUVwW3hp41Lh3oXwVgRZryqApXZZtNeuuJbwpRmERdXsK",
  "key10": "4XUNE1WzV5QxBrb21tS22vZiLaG2sxQapUTj1Cuk4JUhM3FWaHKLUFteZUep8Cqe2SxjifzKv8z246bJJS7GSAyi",
  "key11": "3VZcyC7Amc4mGmhGCN56wC9geuYPV9X5EMoGP51XGaAwgSWbjLUZWXBZZWbB7U5UYBeZ3Tjmax8RbjeFJfUfjNkf",
  "key12": "U9gCD5YgkGcuDagJfgKVW8B8EuqpLZqvcyCDFssVSePK7SaKMs66ChwqHnbddUNokLF6zCrNWE1khmTS5DYh6a8",
  "key13": "5S7oc8jwYZt9DkFCUKM3LDu9gwfS3DaV6KE3658CS1P5DyZLqCpVwhNRj4ba1GRDx1Sz88aVrJMFP4C7XsAc4yU1",
  "key14": "2mE2qGP4p5BBkCvDgWsKJrRK32v5HV2Ujfu5JuCBnVJPcYmcUnj6hFjZ69AEBL76D6Vx5oDauudf7g8fBV2xM1W4",
  "key15": "5zjMtRLDCUEqRyo1immrbM88ExQQ8r697gqVJq8hkrsFfSGdzTJp3DSYuwGbhTF3mZXqfhpyQike7dxyjSxDnPhj",
  "key16": "2KEjVGaZVK3vnqXFWiCmgjuA9zjHuLTUhcMiDXUMbXg6jEkvsbhtrEgB8ncCDHS6oWAbGQHBEudGfVE4crs13GKd",
  "key17": "27FfCzFLwLbUmEEBD2xbfdGtuYCgsdrX4cY8MFzEPDQmKX8oFckMKYCJt6weHgNfHawRA6QmuDGNoPV3baF6z5uH",
  "key18": "5cJQkAVuafsp6DfDfotbjUyfuuYDeW3pr6ZRmz6vpU69GXRNnZgs7fBLspBP8Dx1qf9svCQgg4dnQ383Ep7sdW7F",
  "key19": "5gFNsSNPgGsEdRkkc5NBsmMDvms699ocUqTzpZgsoteAfHfkTG7yYyHJufhP9zfcnyScBsGxEnQZKGD9pZ7SAFvz",
  "key20": "4iEz6DB2bPeVhs95DQJtDSKoEAMRxjCPB5Cvbv5gZeLZhUwaqHRdEUDD1MYH9jhYQKEsRVmAMLS3kFHWHS3Ejd6C",
  "key21": "3QJwQcs3RSLzma3isiwSURd2fMhgUP1jRYneD8HojtkWhD9VYmE4DKQeyvSbUsu24bFyD6FrR6ALNwqSFgnqJ2z2",
  "key22": "4Vsfz5ATzf8Cogtm4iGx1hdp8X9jxremy4SE2LmBrPhEgPMyC32S2aX6srN7aSWTMYcWHjnZpWb79GiH7Mn24k3i",
  "key23": "5AiSBZtQTPGBCQueaZeZMDM3gocRJibiVP8UzixPcGe2w6aMuXjo9Ee6cMEbGYoTTt3ff6ysXhSowzbZg8sn56WE",
  "key24": "4hKco27GwMYy7yTHA1m8Uyz6Fg8Fh8apC4Ru559y2hbPz6negjL9kFRfEJnaXeEsCVfJxJpAbxbuF9bv17kFhSsZ",
  "key25": "4MAZxttemWvkk4JjxGgTeZHHgyp83HyXT6heNnAweEJyiaTT9Z3531SAbyqNVuMFvtVu3SxyipmPLBbWm9oQR8y4",
  "key26": "3xYfbGsUbqre1f51rMffv6ow9meXtx6znt3xJ3zw9wY33EweZqm91ooPaEvhFpUiwAkkR1skC5V4QjcKG6rqC5Du",
  "key27": "24SRDNkbemnRWCALVQZ8EkTyq2Cjf6DVAquxR8haPRp1GboqvsZampckLEDTeXWEcoypwBPkWrMVUofMeKUoqDZf",
  "key28": "36zJ1oCiH8fefuCULqgMSeDpmghwXSUwEpLZwjRiVpNJf5hLqts873GmNNHvrMMGdQ7NKSXPZtsjs5MRjNTMYFnM",
  "key29": "2bZCD9JDVs8kCcYQFQH9S8VznMYynCNhPWUPSNcr1j6oTF9pDwGARdnadz7es7L5yrPQhCi8LduV39kJqyrZtn8n",
  "key30": "4f4pSzVk4WR2mGdTAqPb4bbUoV35VAeHvqvh1BaxtPkrM6HvbX3v76AFRG3PHn2TZCFB5XLRZpruZAvAAUaA3eXa",
  "key31": "57XiNnCWXnv2GZN6ovnsajD51vy97vU3r8kXCqZPeynAmqbmGgjrTv7J9BYtLTkx3ZvsnkftmzDyUmG1iGwEgRH3",
  "key32": "3vC448B2YKJccNC1ERkfYo3myL68PumE1kaGYsG3xLEJUww4ttiw6sfRvusCuA1FB7etTtzPPXiNw8yHqevX8sh4"
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
