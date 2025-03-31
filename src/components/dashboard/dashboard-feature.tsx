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
    "4HiWuHD5QzHQx3DEQdwBF5m9CB3X63ufcqXks7UaSRiKKDcZXtiYarFLvf98FevThxVMUTWd2QoQdaU6VhV8fpii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Q6pNdUfx3NxdAV6257UEWcMqFHvbViFrU3owkZ5HtxwV5R6VhNrZEwdGTfYyd7kct7dba4vUKaJbjWtESbATWQ",
  "key1": "dnGdQdYoyLZF2mxwzcjqQyFvxrBdvofDVXoCCMA7EVJdJwTSbJ1qy9KPxTSqN3ViecGNByV186bd6KEWQqTB6cQ",
  "key2": "G3ueoaH4JBe2M2uRg9Jp7mD77VicHbWH1FHRqbdMkCpEmTj4XtbH3gJ9AUSXnuqE5fNjNN8siavRBp4YBwiD9V7",
  "key3": "3u3tUQuhC4Zu26r1fn33kUPJD6SFnSZ19VB336paqkue4ztdqYiBD8zMwwjGkn9Me1iX5gbJRZ9ZEQPuE5fUVLLn",
  "key4": "YRQz2aWEkCSNDBzGCpzpUhmjzKcrmnyaFhLSeKk2v6vuqazbJXpiMX4uFdCNW5x94V2w5mCSSnpnuAvQxBDMGVT",
  "key5": "4VCEpNi18tDMRWVXasAug3ju5brQKMky4bZ5Te8KxYEKtGNVqhh189gRgSt62KdQB1MtMM8ggzPFgT8omF2faaRz",
  "key6": "3EnxDi7apo2KY5GJQB6SjnNxS9YRSsgSK9L7KfruMQD9BjXpXpsAyhXfYwXrQHkuzkmSSob5vQwbXbhXJRRTX1KG",
  "key7": "5jy5RuWoJzgJ2SMNN4KQDq1HChrH186UhPU25ZHx6uVc8bATfsV9jtz16Yz9956AaYiqhAz5QMsZ3HfVnFXusR2x",
  "key8": "3JpBpTGSL9K8wSfqjZ5EUU5cAhAoU4JNqJx8tKM8irawJiV6arUHdygNQHK4yhLu76jcFS7iimHmJb4jdx4b5jkG",
  "key9": "2XgASB7UF16aAGHrWe6sL4KWsv6dfQmRriRWUNd3YUKE1s8jkynSpPZPgLQhQUchFhX3VoKqSV2fKAfops2VjWJn",
  "key10": "YRJjYRkBi3DABNrip2x8ft7hYUrFq9qHaDqH156trSwQnht8611iRcXb3qnwVWUqVrTag7iFCSkSstLcVFovue2",
  "key11": "5ig99P5bARcuvxs66CtD5zVjZigZw8Ne1nygFAxJrRT1CnRSWLv6Hz6FfzNZ47WYV6MZnAhX3FbeKx9feA4Zw2Rs",
  "key12": "3RLi1bnMGxWwKK1xbQCWLJY3KvhD6KcHiQTX6pkFgNm1xmiRBekhrHbTkFEjW8SzFVjFEA6jZt3byyYZbM2bSTPK",
  "key13": "4otet3Uu1n1B95UCtAtDeGc88uuj4Z4JsjhXJrg16aTHQTAUSAp1PSCpgUTVzdkvwuQcwRV2t6v6AK77WCpGBxg1",
  "key14": "58sBevbHCuKxNLMK9DRecDEwBZDXpEp33VRCuAQD61n9aYmchJviwanwRRnSAbnaukncgVc7YEpMxhZzuPVhNBZ5",
  "key15": "3f5GKbZU74WY5fbzPwSWFey4m9HUwyBtLsJz6khBMewaSJsPsCngH9GSs3rbUsfs5k8cK5gVH8rnp9jZfyjEiJGQ",
  "key16": "3DknfZLHaMVrvqGNaPqQnxv3pXSK7vGcWzX8CXuLW9CJKEETiCZdaxiFPk8DJNCEo84y8Lo8dsQpm1AWU9cH9BFP",
  "key17": "5oZAhJP5gzSzjQ783sNspJ1Gp11Wce8FuawrH6YP79LH7EGuYa9KeushsnHwEweXeReQTw3eqdoJ8pHTukx8eHbe",
  "key18": "odt6HUTvG1wi1ByzuCtaYssYTyVA2H2rWzTUn2GPDJGBfG5ALW5MNpFRqt6UtN7vTRowgLTfGwR7wDGSJnNDgZx",
  "key19": "5arfJrcDqwQsKW8V2RWiLHifVfAUxxXZooShk7zcCHDNXUHXvo4pEnKGMAkEGvcRQcNH7otUaKzsuni3FEVbUGK",
  "key20": "5FruzL2DUy88F6aPQTiRCXnMHjKA3YoVSbC3z3EwkmLwEi28QqeNgPmaxA86HYd8ZEzPAm8zrasvAWVL8qkSZZxw",
  "key21": "4nDbCYJiyiXa2RaAyDdfBmdDiR56owMAxqQWASK2cfZefCWvHu5C8XDtAUqjTTnVkU79dat6xFKzb1f47SLEFnnh",
  "key22": "3WvxtQVnXCpKFrq7PNiZpmYH3BaRjYaUS3NcrQn6QWkEXsx8Eg2PXZsKEqx2hMCmNuaiBWxjRAfY7epmYWsq162b",
  "key23": "2tmt7DmVxD7sL1LJjnFZWod5hW6UqJ9AzmWRJrw851vvY6Jue6mJiENJwW3WrGoP7J27t9LNAQqDzXXU5bRnDmKP",
  "key24": "5KTnzVo28JnizXfG788j5wteF8jNtgj54tWCrZpddZ3uxB3ybwAhxzG9HNHEMMeokcaKYgPCmdkJVpgKPYiid6my",
  "key25": "5b89iq7KRR5VofZD6tbj6gZanqpfry7yUjQo32tsb3ckQWvY8pD9PFrLnzkgTJh7qhdbFKRb6tusqzJ7FLd645Gc",
  "key26": "iqRxfHc4HF4KrNGykAfMzEb2Kka3B2bQdXpahz62PdKoAiZTn8xYqXZ3WqcHWgxQ4BWdD4dWrPm2btvBUzBML5h",
  "key27": "5PQmztk88UguKjuswrsKD4VDuy8z8zz4cQmNvNbZuxPNKKn61ByBDgEFM4vaDV7XjfrWdEQumqhabtAtRofyJmrX",
  "key28": "3n5eZehGj7yiX1rC4S5YbSkyZNvTjpB21gTaUo38UZNQcNpEzUVCWNFgVSyiadtQwBRND7KZp4NCFHBpPNo8A27K",
  "key29": "3GPsLi757W4Xa6JY9R9zLRPJ3ofpy9dtQi1zEdyeBte4w4vaf8MG2G9pvGoz7wq5eKigTNLcy6mYEELpvfp1SKUy",
  "key30": "48RWMJjuEon57jRV8KyA1PGA6H3oUB2vLwPfp194DHPJuULKW6DccWQBnKck6MyrgpwnAj7Gw9NGRWUarrXjfVz3",
  "key31": "4zGrCbZc6dECyT5ys6cLmLbLreegBnM7rMgq194fkTnsb2EPMSr4e81ruS8Mx3DgAhHxx1DzDzRa1e3ioB9RudDh",
  "key32": "3anec8L4BJBNWPB81VC4UvhWJWWRxmGKZaidPiZt6kseiRmSsV7fXsfo3bQzzHUBZ5V7ZayaHKgLsXVUw1FJmrwQ",
  "key33": "U1S8gficEM4FPhRGTocfddC1LnPu6MJjmnyD5uJW8XrS8Z6CDMq7ownw1a1RFb16Kp6VpQcR8mJirRNPFMYuzH5",
  "key34": "45yFf6rm9WGwqXdbgyNS6XvPGoYtKg7EELFTuNN8FRfbK4SdjuoLWji9WTTiPNNYimv6wkkM6Ff3vwTSPbeaCbQN",
  "key35": "5YeFaRjpodvxDQhRZFwMf286ucLE5629zwAr4gMD6iYBYCKvnNGXjxfZS5e4oT6Mk1bnhkC8HzwhHhsJ8MsMuovq",
  "key36": "4CQ9HXbLBy2kTEDeYN88FenfY7UwEKAXzZfj5tn9TRYgEYNHwi1dKtHr3KEiJSGmzzNRd6jo9VXPVi3dhHi8FYji",
  "key37": "4roP9xoTgT3XBpffANF32n2DwYnBZXtyZTLhvvPrBWaTRSQ9zr6DNbrAG6ggpiuPTz9KzG6QatV2KAZsQF2vTNG",
  "key38": "4t3BsDbri7SwtHMtVuMYZpHkB4JeMYuxe5ZQTVsHn3nGdrSUqihmwn6uV19asCTPgTQCPcWdafeiknZhukB7XAEX",
  "key39": "4Cd4HsEbvVvbXAkJPPqcgB5RQZxpMjnDKQWZtQ791CArbFfzfDaPuCucKwp4XZizwqW44pueJsRXNG7wpjMHz1Yn",
  "key40": "5G4VXqRgbDJY5KfvfJ2A2fyQ9RqiEZaXdGw2fDroHcS3dUzhQ8JYxvz2NsVrrfBT9s7mvaNQ2tnYKQkKD793ZXX5"
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
