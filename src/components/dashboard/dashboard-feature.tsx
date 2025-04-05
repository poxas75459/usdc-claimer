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
    "4eZgQw92Z4frT7da7DnpK5kbUfRuJYhobfnx4o9UHdQpheBU6j6vWs41dkdGdfoxhCM27F4gQqVM8wbu6Z3AUHYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSwyin2sVFZxEfE3To9STBMz7hCY2zXYgcGZdAM9LniBGbCCThkfGhVXiNmB92cPbkkjKPJDVcKPT4XvnmS44vs",
  "key1": "2r192FcQ3KFPCkg1XRvLczyj6B8PE2YuAhZ9AzSzK83kbZzj1PBxtYZFL4x6MbgegasuuWwhD9vXJRsD8LxwMgt5",
  "key2": "3cFqDHDSXcjRphsZyDuVV4ZkEWEDmpeoHf4cXND2tSa84niQmfPnM5HAtfiicMSZBXPEjXDdPNtCBhP6u2MFAXdJ",
  "key3": "eJreXjyzM2Rk1MogFZspuiDG71qXBTp3ttL4VPkDdQDZUCWbYt8t34Dzfq6kE73MhZ8r438KW6vvhV9RDNSZgPa",
  "key4": "4LxEt4GQCpMV6EngUgrni26Z4gQNcWEdUkQ1ZanxeSAuZyLxbXx18Gnwa1gDErsTMTXBvrq2b9p1jPbkbPabwRm6",
  "key5": "4ZWcExjuBoeAmxQT7evgbGYFcKi9vRPZwoDxwy4qg7aC9Us1dUGHWU3sJhjoGQTz3kzkM3sU87jyKuH4XwsXkVDR",
  "key6": "32EUB38wjjvGEfyEJFaLJbECUvykWW9a2sGbhyWCE4YEheMNHu1XvEVudrzoNGA4SYFDBUFVjT26LtBetanW8epD",
  "key7": "5G1F1WVyf4NooSEoc1cxeiguKJxYJ6DzPC1LMLWcnhruuEPeeBqnxvHPsCETw3SdU63reYNz3VENByJSNAQSNLdp",
  "key8": "4umKvqjZye1DbKeig1twnJPTJFiVXrDvUALuGBXCL4RF8wqVs9rvt6Xymqx3hoMuxS2S9aJT9XVPMiCPybjDN76X",
  "key9": "5o9RjoLEiuEYykRCFW51xZTeCdaBbSUj8iJg6EM5eofvQuCHCdnVnXvjtiPV5Kd2epgaoLDUpoDNmFs5DXfNhL4",
  "key10": "3tqUxQJoJzq7VsiDV7cCWPjLXMHd1ZC2Q6sHQ8ACFw6tDJYTRwyTwMt11wb143tvRcg2WjB8m937GpyHaPygMSvP",
  "key11": "3GyzNLGWAUxz1m7shiMQ7V568hy9SPwKtSZZiETAgxKJ8tK3tYvK1R85ZYHkgscPdkTWBAxtadFEFTRcnovMFfuY",
  "key12": "Ut8FH47wFLzg589fkAjNE5cyCpJSR57tiGxtgwkpm3woNKwMFifmkkE9uBjKmUEGhXm9vKTCJnN3NJCqjueVvxJ",
  "key13": "4BmpqbMdRBjbih8FZsAjcAvxCC3TLiCehdPYFbkn2mmU4FDhihLXCLVUn764k9rVRxpUykuyk7Dw4F2h2GqSv3sL",
  "key14": "4uPvCkzkFBW1cJPuDYcJU6nS4WvhYhbLyFHYFK2gxEFRtoFS8ScSjJpt44ExTMfLfnfpYL7j9RUDP7ZCZJFLZxwX",
  "key15": "5efmzZSMk5mdjq14CdHYJWZV5dY3d9hLAzjNMKmW4yzkE6AQKTy9DrYQsHvGgA1AAb52M8EjZrHRoFESWSAdBZ9T",
  "key16": "5d3FCXkdT6KjGwkPQtkPJ5bT6XT8MSqShFK7x73CLi65E2nCUpwREGo1gN5FQ3a7iwRXzBH4rn7SZML1YqwQgQRL",
  "key17": "2WUVmNLZST2hMyxjRAaBbCuHJuCU6gbAwPGxaLYdw4C7Vkfw7ngFxD7iV9oUhxNDe78PzHQcw9K3CFHd66uCMxN3",
  "key18": "TbnDXqmxMhYGkMGwY4w79ASALjpfappG97QMDgTBta5Mz3RTDAcbU2bcJWLF4Z6qEkQvyps7YmZ7ppp3R8Hnymc",
  "key19": "5bhsRo1dsNuYcDtxvhUvCMGsaPtzj56kDjCNzCkYzXjjAvEJvmMQ9hh9WhAbwrzaSQGpFcT3yUdtTFesqA1uVHxE",
  "key20": "5WJbhLHxyswNqvw3R9Bo9bo2EPvSjJ8qCQPcT1WSmYxsmP4B97UGj5AWXSP2q3sB2K4HFokmJuQ4ocyFS66xHt8z",
  "key21": "2GE2Lfc63yXxFqYFmqUjWT5RfT3mXrYPZNmcMEs7HXhVvZAQRP5dGe986up6Zbeithri8X2n2BP1JGrTaD8gsvec",
  "key22": "5kq2DoYkSkTE3Jebun9R13cVENgJWK9Kik89irCVs1KKiHNS2GkXLbWu8Htc85RGi3HCs6uBk4hke9a2w7tPTgXW",
  "key23": "3tbT8b4i2W1VbJc1oQotB9vpWsjfaYL1zZJDVteRTzUZyZciigb9xFMdPrb7seUb3wRo3zXLWUuspH8nksZYVTiQ",
  "key24": "44NN59ND3XmbVwPNHLMJnLTSMTG7QPhoFBCKqBkXvsRbYKj3AqeimsmzKGHM1Zm59y5s2gv67eFtEHaxEfiX1Z9U",
  "key25": "3eUqQ2yfEtCWpmfCbEfLCH8ENTDNt5da2F3Ex1m1d3FyL7YGFEBgM6FTiCHvMVeovFUNzRnhePp2zHoNvNd4EXnu",
  "key26": "24NYfSUZRUhpqJ1QSzuaGVJoCnpVn6Y34ynC8NP3piLXCUJQJkwuawqmPhPPihYUiY4jni3KWci9RRfZRVwkiaEv",
  "key27": "42hYXzBhkMW3u55XnPULET4JopLDPZzRr2iFwmcZHVLWi1JJYvrDHxUWLMjbhjg9bN5p2ZpKu8mjBmbZkqN4MgcW",
  "key28": "2Ctr5eitLWbw3Y7eUXSDB3UZxVpmq76W8S8sRZsM7Fa6G8cD3XhEvrA3WBFk9PkTc69YQxTZ7M6eSkrh1ynD5gzA"
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
