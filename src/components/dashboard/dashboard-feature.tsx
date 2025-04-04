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
    "9jx1tN8LyvqXZoLhhzphw4ZCYPZt14E8WFTjD7ZQmUTZgS3t5nf9kS3WQjkYSMP6yzNs2y1VkBQxJWfPXU2cGUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A4jczXAmGDGrNMicZdmLnrev6RZeeH2FqKF6GHyjDg3D7gT8WRuPsLnFkYHz3rwJxueyjgfctfnB5VVXEoLCufc",
  "key1": "2uTfHZSdkWdTpD8Rvb2Uxvv4D19EPtUnNMTNTmais5pwZgmKRM5wihri8rcZ8J8wfHkAdiyrcjCNs3riYMQ97BT2",
  "key2": "52By1NGDvdceZAqmB2ZWdRZqaxoT4SbZdGWPhFUoC342teURA8Aj5PxPPD4Cj7PWK2rrBzvwt3w1oukzVr97sKaw",
  "key3": "4dsre2QDXSKAgLrPpNkRAzCqAwJZzyVW4ToSMf21WQ3cksa3ZGFj62dmSnU7czQ4G73Y7TyawE19TDPMtmuH1V9y",
  "key4": "5cfoAdqmZkb1MVpkqbFL5oe2LQ4Ksnk7W8cEopfewq9e38LMmw5qimvZoGnh2hvbbaxnZYVQCi4r9nT9RSFou98a",
  "key5": "2Ksqw3Wbmcf1atDMB5dBoyX1pYXFEQd48eb8SQhJK3eEkiqRQq7ap7NPZR3tEgKqxEKpByFx7JWoMafFJskEzycs",
  "key6": "3ZhQ1N2sVNj1TWfkDCTDu1NkGx11hBTavX7NHR1G1YmTj6NMqr7hsgJU9LZjFYENxtxiH4hwt66Ghj9htGEmdsEe",
  "key7": "47APr5SskAc2yXWuSNHq5K3P9gwPi27xCrnhBGQMQt5pmCdacVDXc2Xwfjcpk6tsUWRqmwbxpj7QLZQauW2o58VN",
  "key8": "4Cwtto3u6CoZpV52avKNaxCQ4wcmxw19iZ5tavEXok7jPCfpQ8mJ6i7nQwQo6yKVAQTjpCtJL4fdGKkj81k2Jffu",
  "key9": "bkJgwvDYNYfSreG87yqMhCW8fE6YDEuBJh65KRZJJNU5Pfd6w8en91GcihXr6kptha9d8b1JZmbSQkLL7YxNtNM",
  "key10": "UDfrWszR7oCmQT44JpVykV1nrEYTAd7mbQQE3wPLM2Z1byd5rB9Vq5o69kkCcNcyDg91NhyFvMA57jKFtNiEUa5",
  "key11": "5kT6NpZ1f6YBDtC87qV9GyxmKwsQj1EkuvoVBCkfFWqJa2zUYWFzgRhjr2b3awiCBN8rs55cgJ4xmrFCjGbHtDNX",
  "key12": "3NqTuSp5BEr5CJYxqHEWACHvBdG7ov5vKVFSzTJGN9qQbvQGVKMPytcYsVme9CiaFhqE6aZXs6UESqSonUbZ4F8R",
  "key13": "37VwC54ksb86NaNWjrw9ebVFvWKiuyk9hdH2Weez325RxT4RmpUwcEUT6kR19B5kGPaFZuDGzqGZN9E8isfiLQnW",
  "key14": "54ej4CzJFhX3A96fY8svTwJHkCEW4p5AYyJXM3v4MWX3X2SxSPoZaEbDuP8nAFMMMfx6Fsk4reyVZHrba6Hfagg4",
  "key15": "2kDow8uftwNet1RmFznLYCXWAQBpynvKaDYxvpX5XNWkhf9ADhMoKiRWJzYpfiHY27xa9afAzSNLomKhm1tJbzsi",
  "key16": "4EZk2LDNxG2LpM6kRGvBwUcVFXT8AR5tJnfqeQjjFTRFAMLbQP12CK7KAJvZ4cGJBULsrT2jfKmKYCHcPHdbXYED",
  "key17": "4BosBQdjLobpmZ3Yr4tXvpfZNuBBB5ef14cuwkKwYp4VPnQWxuFWiXwPSnLZpwEo8ejF4XNN8oV1UuUsaSCAqgiL",
  "key18": "5sBMKfMoYkw6vw8m8wVKdeep2iqMBct84HNMP91feCtnUyHTj3Zk6Seg6PHbF2V3sBxKTuCWoWyCbaxZccCPz8Lc",
  "key19": "z7wGSrGGXDMYLRLxajyE69nx29ti8GUdy7VqbXX3JpZwpkAVsWygRazjiMT7CTYGJ4CFfd71K46hADinQMX4pyF",
  "key20": "5FcAa2GoJiPqmG5Fy8WsVYrFsZzLgReZFi9xNJQMbQTYLqDqxho5yshCoZh1w8FLiA4jWjYzVjoiiDekcvyTVHjL",
  "key21": "4ReMtgnaVyuF17U8DmNtbPonuwKoZr4uMBkm94YEPkFgEvaSYJCzK2SwHDPHXwEEXVqhfzoeDcsiP44ZoaJ68ezx",
  "key22": "2PYuxS3axetuhN4uNPP4Ao9CpGvx1zTs36PSuUseUvR4QotZ1n9tPAmCnBDzDpGGzKUJfc5L28pnPNP4LejWuPqp",
  "key23": "osuos4UAa47VusZLt3Vy7d4PF7mgQCvBpP63AbwzvFUapwSuwNpUYm8hcaJcD9tdvkDs5jnNk1t2ARQH9fdTNz7",
  "key24": "4pQxQgPf3HhcFvP4N4bN3LHeeJs58gooS2Jp5WiEjrppuTdigAnUQKssWwuFhLsygtkX2JxbCUnpVUyBJ3cEXumv",
  "key25": "4GRA26yURcU2TRJR4WnrLMj4uQFfqtWoC1nqvy72y6LVjGRE2BjuXidi78bgk6eQrvWFGKHGXPsPdt2zti86Ciu2",
  "key26": "3eXcabUwnyJ4tfww6GVTTzGeGCMi1QxFyLq6riA5oM2cbkL8aQjqEKfPRmxoa6Vk4scF4odSY7WfXR7wMBaTAHbj",
  "key27": "JxvRNiaFFunVF6p5YBcR9EPqNATApxYLUVws3kBetxvq7wtWTwdg9PopPUwixzRHUi4KumShdvDUicZgFXdzfEP"
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
