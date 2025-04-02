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
    "58RJxn6WHAEoZPSgXaApXWGobUDSPe6BAoAMmCyFXwHWshKX7iyn3uip7hoU99NXC83WGqV53BC9MFgPxkb8SizN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7BHhKFEnnyeb42NAWvNRD35A4GUhEKHD8hzHAtHmPfg21gSyc2PxvEtswnpkwqbd6J2PT9dddhHeXy9wooFyxt",
  "key1": "5LUv7dWGLYCSJAa6wD7ESTK9JRsmzoLMxfzQND4UoQUPPoUer6H51sh9qR8WbhKXHRWru6XmA81YLepMQX6ZTVoA",
  "key2": "5ZtvZ9N9jSNeXrN9DA2CNAh4xUamc2dt5jJbGyM6x6kmPzc4qkWKH3X5VYd6Wt4UyrDYX1fesKQK3X5UxXD6UvvW",
  "key3": "2gha1xghjkwhru1EuJ5LQn7fQSMV9TYkbBmzjA8qeDc3REyivqS4eoHiuXNwgLFpa2MaEBMhXbYtwyutZRqirK1y",
  "key4": "2gJf2efsHPxVSC7qkZrJGFuWoKF4vESSNsLtqoz8hXWa52jQzrz3f4kTHxo3tSQvcD8qcpf3mvWUWQS9HgqhRoDp",
  "key5": "5BTqtdzsN9XbVbxfYFzH4XNhcEdECRmJBBfMVk99rEtkh3Xv6KnEtADvyyqGTm9F8A22BUczMtoup9H54ttBmDES",
  "key6": "2nGNo9KuwSVtwtFnRbHTKQuFKCKnpaBqYn4h7fjLdAGfqna33SJK4kbKLb4JMWET9iiV9z3MyLjgcE47bQMpGXQT",
  "key7": "4UgWM7HHyKuDG9sA589WTNMwaq3RFGnqDDZqFA34Vv3crhSs71LKRYc4ajpDLSpmqyPosysHN9uzMbAzVG8d3oYg",
  "key8": "4VHWiYGrdTtCXdVPGpEArQRS8nH2zELvtrsDDKXQMg6F96RAFmzttosgVQ48DpWwabqztQnX4dSJ2rY5KT1i9qCf",
  "key9": "2GxUvmZe9Nxk9D3q3eRn4SN5tErfC5Pc9fMdJuGf79bQAPj7nMq6kszREQQ89gNEyfe2hjN5NkK3Uur6RXG6GBBx",
  "key10": "4Y1NxiCKUCMNS9mwgYhzU8v1LME3TGAmANVcRUAUcEoed8Ja4cPi21TH6MaTyBb6JdxeoXc2gJq8R2dzU2vyvgFt",
  "key11": "4wApbpX2eUoGz5KahjvXgi8wCrN7A7Cp4vVwAqyjQDCim1Dhgnm2eAaKwYe7mzCUPuV8qZYGUoDVqarSf7KT4KYQ",
  "key12": "2NbChr73FfEyHKRWaZmjYovXdYXPzuGnxETqjxMDP75hSTnon7Z6MgknJHxDDa4rnNCxyaqEykUv5v9bv5dwWSNJ",
  "key13": "3Kb2yyHowwPKZyMC68HHAiHsMgN1MkbhbC5yLvhw5QmKa56YEVBCs2a98hxPHo3cvseKWW9bLef4Z29bVgZ9QHSe",
  "key14": "3KtdyTv8ULD3zGhHz9FMfD93wCaB7wJ8tRpg7wvBdZFu1E3h8k379xSYpxRjRtYxNNTXs1jw14x5ZLMsUDZAVUB1",
  "key15": "3uznH7wttxyzPYe9QZDapBrmgGbqPxEEX2CRN5RaeTGjEmmkd8BJXM1mWL2jpxaqMxsZY32DaQExZi4GepGvH16C",
  "key16": "3SboesxiHLDCZisagzMXTP7bxy5zUKZvCc3uP7tN5iLPgJj4GUP6zGgABiUfWoR22tMszmxXc2nfGtsVVs5DH1pf",
  "key17": "5NT5MYihw4Y4aFCNn7GXNvG5pZ9xw5fDoANBJPwPr2RQwaPSEVeySxGiSWt5rr7TRwtRN8evmHKZSA3ANsCtvum4",
  "key18": "581d3MztMydFQa4Ew4ikmv251abEzVQSkXjs35LZ23Xo3Bz5zVQfmhX1zGEoQZboSZ27Lpqp3ivuHPvNzWe5piku",
  "key19": "4iZ4qNvTmDiuVxTVZb8wtNkWhHmmxHvvvoFNPbjnXhDN2hHNRKjfzwiMGwfKPAPJiEKsaaQhX8P5xgb3ua2Zp1yG",
  "key20": "4Q7RXzKyESNcGj8HSKixkwrFRLtvuSYjBPwP6FUnPPUpH2L6vMVqQUgcEwpQxu3Vbrerpuh1DLeXWq5PWQzAcHTa",
  "key21": "3GEpanh5YiMLQe1VaTK7Y8kBWZxT2kHWjrDKEAubCLQK8C4XVW5rdwEhmWmCY4BhmnYMMrxkXowmkgHPTNHTZhGc",
  "key22": "4oee65HVeN36JqztqxMK5nbtdw3Tu3a1rUDk4NArpbD4nNeF2AuGsyP4mxBqMguvAE5kL9pi1eUBej3t8zAEHqzN",
  "key23": "4CW3QbdpL7qDqmA3TzqLSgwZ21ogEMUEA6JmUJdgJXho9Uzas27Ew1nU88W1uGhH8dHRd84EMdECyUqcJmNa25QG",
  "key24": "cDza2XUTe3A1r1HLAKnCwSMAspJwLGWUxbVo2GcpEUoCs7ohULzeedxMSFj64nGc7ibJPXHqNvHGWXUFzamRM5Y",
  "key25": "2uDmpBBLz6vFZN4JmqiozdBXVuYYKLn5fLb93Sj7KXNCBed7pxj2Z8snhF7RSQK8eLA28zSrFWS9h2VcT6tvkVpz",
  "key26": "2BoZaKjRKBkjoNHuXfBcxbapAzA4haVGgBvjcdmme4EWrhRna8ckjNf1T9dYNehtUZ1Tz43cLDiW9xsamEvsKVMk",
  "key27": "3MQ5bqFpRnv8njxx7wNagYmvfNSnBw5RTSqqie2tDdQNiQ2RsD6Jv2tEEhcNQnQPJjDNi4Bsu4qjwYzEjvtV161a",
  "key28": "ZXuTr6PkTfqsfgBgmhHoatwk2mhdPw3XoqUpkP9LXFhNwssCWmhwCR6qaPCMQsapjwmU8F7caXRCGmXq5NzYQAC",
  "key29": "36oMQyxUh1ky36Z8y3FMo54A5Bh7i2c5xdKzkww7opRkwr8dzfzExLvK2PQ1VrenAgo6RCWAZrvhipbxV3ByvmGk"
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
