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
    "3Be7PKGf6CsPaCnz4z7u7v6axheqgBtndzFTZGzaFzFVuvtjjc3HtiFWoKK5CBe31FHw3kxiifnw45zwcWY9wMDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oNyEfWK5pUxuu4Fpf2zwpQ1bGURGerna1dAE9ieJLpUg1xDhwFj18N8zEBuQjiNBL8vTVYYbiA4KH7nREynuKG",
  "key1": "2UyFVebsAGQF2LzguhUj3FaMmJ5F9vp9UnBzjE5voq9a2tb3iSYXuDhypdG57vCFmMHupPoH72QamDEZZsvgzs5g",
  "key2": "F2w84J9UiwbWYCJSBzbJCCEMZ7Ying9Kaq3GV3ir7uGmUaLRs9coN9fvox6Fp5U6U7vM1dDzNVZEe89FPE7E8Uy",
  "key3": "2BuYxzp4MVce8cVDWGKbSiTypz1cfrmJq377fEbDnhbw3ocB79xhUz5HqNLLP3rVJCrU1gENAj9SbSCKJP7s8qTt",
  "key4": "5Q8ZVM5ZkmK6AJhw8mbFAkYyoc9fvFG7BLCHAJqQmKJRTEyNMsgyH1e9g4gYDa9iHMuxTvEQGN8eX1YHCqquMJdK",
  "key5": "NJ9XmnNqffozZNT3mzn3NedaSoqxPTMN3zCjyx9MhxBweaYt59wKzw1Z5AkzBsRuV2vLgQ9Qm5wFwXxD5bG2VLu",
  "key6": "zm9EDNcZiF2apqZ4PqL7xcSAMmR1eMi73k5PR2qN8iQNVch5E5t1f7U4qi8Tr3u19zTWGKBVBsgG7FQSCuE1tyh",
  "key7": "5B9ML2R6cdu5XiWPcwgFDjpoeromCu6vk9ay9gTA1vCptNBUGfAoVJW64aLob94zM6Vtp4CpJw2jvv9SCgQK5F4X",
  "key8": "3sT7LSPwHxrnMHExXLdhPDHdk2mBiQ3YSxSijQ8Yt91YhYKS4u4pwnMyTpKtkWcUTCXSwUn1i3pGGatknJbMbA7n",
  "key9": "Jc1YaCrv332FHy7knqHuXELa7EahypUf1iaQXQ66TQNa4nJBkPdGVGPgjLX3shoqJg1vCUjY5UyDSiqhNHy3p4o",
  "key10": "AtN55uxj4NAjpuT2qcTu2VKTVMphzUjzDHHMpPYv8Pj7vje7N2rdLk3WohsCqnJ23dj7eLVNsLbwDHWqFXtWHQB",
  "key11": "4PZSfsajckPvzg7FCAQvv6eaLh14ye9rLucYkMX8oU3up9YMAD6HsepKKuHdaSjsSAZWR3NE8THv1xH4FiraGitM",
  "key12": "4pk3h6wowqNbDfQSqhoW13RbXxUHBXcE4V3sx3p4CPUtemXDRwYKTUrHVhK4NFdu5HB6rB3EeCqaYUGbiQhJGA13",
  "key13": "4xPQ4LSayxVVJvtd1kgfz4XgfCQTdt4GqPDhSiB9DvpaV3i1Ln6v2SX7wPfAHkYqfqwRdmqNZVk9gPsYLNyKNcYD",
  "key14": "4qivQqLyFaRkzkNT9YWmgHX4N3VCznwKB6SUHDZ8uvaNWxMoqS78oamr6Fr5nKp67GxuMWp6aNZjSpV1N9mtWUkA",
  "key15": "5E7HPLH6XEGgU6gGy7XNWJGx3ahRZ8isezydUTKkxxEceGbXGJbkkSwUi5QKyBqawVLdPAj8qCzzRdiSLdw5EqqX",
  "key16": "2UP1Xe2t9S8MZyU3GrT92h2YHw3bXNrpdBmTsy3WWRukCTER1mQwLerRPCaqmxQQenjQehFRjhwz7cHjsAuUZWi4",
  "key17": "25HrryGDJgc3xhsCNq68oQN6HC31i4TkVbXwEitgH5x1c6jdBfNLtrcFSDABotETQb3WzB1KVNAP2gac3MtaLbWx",
  "key18": "4ynWTsqAVuaM1rjGNafWoAGWq1rLQ42G1nDQ5imiwVSsYE1BELvN2pUqDqn2XKV3TMASCzUbaaCV4RzuyDfvCd2",
  "key19": "3VYZWES8x1aF9etkvD7jCrHYRY3wqNennMDFa46qQRwh4j3aB89JVJqNoTmZrK82GQC8NA5gg8KQBHWFYhxhn4ak",
  "key20": "437nCXXmh8wArsdKkwAMdpqxXCVtfQEXHW47uJCA49r8HSZkwbyjJcYF3XMTB7DpQMWrqQFbvWaWYmKXQYFJF5a8",
  "key21": "NswH1XswmagoXajfUxwNAxYdR4KGiAJRMSdeFzHs6VWxP91MYPUgyaySMkeAAcoGyFx2qPUdY8FYx1MiLWSaJ3k",
  "key22": "3628eg2aZ9qM78ZrsZ2gVLLtHKxSGgWM3gymnEsf4zsPFbyTGdYmLPdNKGUHBEf7hi35uCraEZVZ3E2HANEWkvwX",
  "key23": "5KXVEeeEBFUm34rFsayLBri2H3wD8zh9Y9d5uBM28aYfkB2bQiz8mZLKtZ7a5Gzuta3Gx51FGTEVwxCBP8C2j4J",
  "key24": "YoS8ipHgyDRJDFeppY1a2wPobuBUbfvGaKdACajPGwfh48evjHs3VoNMXmYeBwiC62w4ycqVsN2iQuaSNBwhmJd",
  "key25": "7TA38ynxXbmNx5UCFGiqPT5mR9jFcLHyT5p827Rgzhh1HZcJdrzgHujxEymStA9QXRsaTNqXofJTEs4tLr6LNkQ",
  "key26": "TAaUjKmzhSjVQiGuRs3oS2femUie7ggiZN8brT4tSRgP8qDCdYz3koHQ7gnH23pu3FVQ8HcoHZHU98dBV97nFsK",
  "key27": "VRMkAienkuE3cAMtyWt6GAhd4xn2YgdSMsYULyqGG3zBa8xDNGKpz343PoHJxJUofyGm9bo91BLiFQ2vVYDBBo4",
  "key28": "23DTaejDP7zz59hGTgkyygz1Q9rVyLwRFuXNEtC2U59ycW3QnZzdEbjQBLcnhacvyRZfSfw6BMchXArRKYUFLg3F",
  "key29": "cXZwNZECBcYGcZ2v43ABV4ShRmi5PqUw8sHbbQcKD1nJnsSm1ego2QsLw3fR996wta94Xj1fjEcDVZvdLUsMxdG",
  "key30": "DcUAEB3cXPrJn3hHpjsCNbyP8RtEQ3Y29Bkk2Px9o6sPqwcUJ5i2PNVmvcDFxN89vY6UEa6YmThjgnYpojyuZC2",
  "key31": "5QEE8kLtj7rL9d68p2knWGkStF4wHtrVKM4Um2m927GvjgzRkTq1tFHLQTdSK1UjYpXyM9rXsMLmgHGXWK9K3x4b",
  "key32": "4WGcLXcrBWf9aXYWx38f6JSj3pFvtAbMizh7MVaR239rtrndKZWiGEeLfFDDQXzy3pZjLca2RaseH23sSrrT7qm2",
  "key33": "o1FxGTptyP8GYBbSxcafvXAC2w5dJy8B6pdH1XBSW8eK3HBezpwgDkKXtoJdixSwgS1qNVFkX3NDrWWXQKVMrHz",
  "key34": "4bbacgyQu8vF856G8caNJN9AvAD3wq2NeCTwu6eARFWbfsgbM5ryExhkvuQo9vs6HaAcgStAfGw5LZZFCoALjtnt",
  "key35": "4Wyrz7aYtHJUFZRKSm9PBGXybqFDFzhhEacoANWdjGJ5RycffMMhZfSBhxAPWwRGL4i9175des8DHmcwMijvEzWf"
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
