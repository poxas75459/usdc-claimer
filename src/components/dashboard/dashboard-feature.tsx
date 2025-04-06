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
    "4fqZX4rDkwoJbnEt5rF3cJM6vax85AeuUwrL9zgN7QvG9MhKuQuTZ5TuxAZa6m9jonjwotXew6tNzcEFrJdo3cuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ds54abKu598AYoEeSt4KcB7kmwqDnw9N2phpZXaFY41q97Vn8pRi2wn22McZ9BYU9sXJLC9LwKVWKDP98igu6ug",
  "key1": "2Wh1GCVecFtuXhhejKJX3yJBHS79sS3eAXe8h9D2YQZY5pTHBLabxhYwSQaRzYzLjLqf28YDJgZL9QSWjNksvkH1",
  "key2": "62bg8drhfKji4eTsMJb1MjXJhEnbYpPUr9bD3zdx4ndpGso8UZU5LavbVuoq2gSQjbNJcu9wTPdFxDfE5k5pn14p",
  "key3": "96PWJrQEwBFzm8FtYho5TsaFfNo1d3r6Jc1dWDCk1kxx3dQxXRLy4NqGrmSiWt3NprC5Mu1S4JAwtvicZDiV2mq",
  "key4": "2qvL4ro4ef8ygirKKPKysirYouZWXDRDUKG2oLCUNyixWafU7x7yPmg7RAtWXQ4eF2d1EpVLm3a3MK9xw9ogB4TF",
  "key5": "5yvor3tT8PCyREkT2imGzvLZG2Mum18LtA1hiSc1YycdKeqEGXgDg5qjAnxMthBr7PjvKbqDmAqgE6Q4GVWj5cVq",
  "key6": "gU87jrAuvEQ2mpa9P7XCad1aosyRCx57R8v2P8oZAKHaASwFfnPdsh31Z2AmrFJPFx2pFRP3Koo2Kx2r6KHuSnF",
  "key7": "3JoXSTNgV6V3wu8AiM8PA28eYsSE7Zf78KoZSHtrHE17N6df5FYNeZB6WWC1Pvafi7n2CsBN5WKJ2jpwhDXCRQeV",
  "key8": "2cEQ65b12CTG8BZ2uGrPLj2TsbM45rNxC1cRQqeN1N1qjfCg7XGVTrxrCcouLik9eRxGsWJCEkusmRbGz8qNL6rH",
  "key9": "i38Fc5ujqeTRbsnyCcp1HgBwB5rvsDwh83UBfEmYnndnCZuAD1arhsfHjMzDMAtc3TTYC2x2P81BcCcCSWX6w2p",
  "key10": "4MwHcqkdjhdYaSF2FBQoCQxAf2xxq9qS4Y4p3rRVsYninfRU84ppUfWjSqa2o7ZjZkvHPBKK1vLRqVU4CDiPb3mx",
  "key11": "5R2ay8g8WKcJkUyw6E12pk8FV45GmNUSJbUf2ucBeGTEn7PTC8YdJuyeepseUCdxwAytXBZtAHs9RvYowQwS4JYB",
  "key12": "3Q6N4UWwnu9JNQ5tfGez1fcrcYiT1UtmvixwXivJVAH3K1YMjdWNK3ad2g5RTZangXBUz5EZ4kEbArW4hnpDeN6p",
  "key13": "5Mcy3FdMJMqbVguYDM7STPYRk14rmWUy3PAy476LB1CjRkisbNm4DTAtUNuYd52XGu2ZktBkYvVD7b9FZJZKFEDn",
  "key14": "2TynF7ftjdcq3qVQwnRWK9AVEsBdmA9fkxHt3vJxRQiKPuEYfxYCmY4PSMpb5CtRXngNLrFGnuiixTaaTRK79baF",
  "key15": "2RECwLoFhy7QQqX7JTpZhmzeyCmL3EJp94MpD66L6or1ihS7JchZTyE88poi2XXWM3mTB7SBN72KcVsKFkkhPWUu",
  "key16": "5qZ8cVvdNvyH4HBBo8FRkkqLcKaLQbmJ4oXUAzzwJMqxVp3ZJ92abW3DKuTFHBKxnBJYxdHX4u7BCFKvKVr26D4C",
  "key17": "5nch5D3BV9RhgffZyqUCLd6ittom7Fe9fGQ72hKNDZ5xnSnMq9bLifsujcaQYjLRGG7J5erzm8w1NpYj9psxThyU",
  "key18": "3wot6nTZ6EzLsKNHAg12fiPnJbfXiLVstTLi9vrGse3vKXQRrNqxKt1xy9ec9wRWmyCBnxXAnZeUfUBvKLrvVESw",
  "key19": "3q6Hs4SvHcaw6Zcz7sWdHD6cVvJNMcSAP9mkwETUrMKQAiJxair2kayieD8kSSQjYVcrQRuVosLH3riYcCTWsu4M",
  "key20": "2zasb9c9umiG9Tz5kEC9ADEqz4dG96Zte7uC3UA4jFDMTWp6h1b49Njyo11eMmpGNXb4x3d32HnziqbuU8so6KWo",
  "key21": "5286qpP2vMudfopMqjheMCqVMPBSUaxsqXZ5gU2nisiNS8w1XRNWeSygnQYEBT2j7GM9ab6RNH7FXrSWdZ4jovjz",
  "key22": "2BB4iAVKUqhKyW944LCrG5gbxdU4WZi4wuTiqhmfH8GZ7AuJ4DQDLiFPdHEXw4V7qLv55xEp8SBRSPWVNn7SfHwr",
  "key23": "4FwRtWGRTGfzbBXtFGBECyZJ7KJhKGC2AaSwfqxNSUec6rtcE4dAHjzfs5mESVrNyoWNxsvE5WRsfj2q6QepHZrV",
  "key24": "458hisc38CeuGnDHxUCRcJxPS3D8Su75wH2r75Qhzf8aJFtcyFAiUaHwBxVNekP3wnPpTPuF32K5xquWwxLVS9wU",
  "key25": "5ZVeDSNhEonjt3BoQfJuwW53jcun2zkUpo7MeZpHtu9DRAyP1Tu3mBD1dQvTZEygdJ9EvuMZbFy1dgJefoZ2J1Zn",
  "key26": "W5Cdk6BMJhdWUcSoZ59Bcw5xfFUo1kHYrJwLQirgxz5tPBvMM8QK32fZ4n4LuiU5jnTE9xECFie1ZdcjzMpntru",
  "key27": "41P6BntCZ3pY6fiwQsz6MiKYroXAVTRwJBSRK8nQVL3B5KAqhbsDiJ8ti6RiAyapPZcby5vHseSUuJSvepnTjehz",
  "key28": "38BabncwDq4Q7kdt8JPrLDScYpydyD2dKJvj9kXvHpGkTkRbwUb48V7biqRLuKh7QgvDHL7o63YQktQKULrKNMb7",
  "key29": "268LpWE8Qu4Fe34te4eymBGJtp9PHWYcB55wzs75X4CVsoCzQH2JvFUNML11ac2nFttTjehfC9BFCsE63cDAkhwi",
  "key30": "2b17128zLnuSejhhXXyVFaGzLFTX2W1cETQ6JX2kWbvbczf7NU2bByxF28SDGLMXXPZ2tpcHiVRoDSkEdYfscniR",
  "key31": "3oeJfF5qbpuXsRsBXx1forGhiwT5h8J14jMwAspxGzw4pC4MDnky7N8zhsDVmMw9bz5uXQ9rhBkDq3xb12BGFLeB",
  "key32": "bKtd4uRGHFQ9mLpJuDjj6iqvUw4gkZcpNqEfrR5qFN7vUMRscsSk2hKBP6ZtGQ7p9YuPYESwi9rXpGpzeFE1XNG",
  "key33": "5R9uqzR3PT4ur59hYb8UxuX5uxTzXmVR5vWFyTr7xp1Sa2r2w1b6we2DCEozKRgFqaKAo8mor5vPoWnky6s3koFm",
  "key34": "232xmB3RCWbjCRgE3GYZjAzDKui7wHjBjjT58PbhWjyN6yE3xUkYZTGsKYcV1xSMk3AeF8hr257UyNuhymnjKTnz",
  "key35": "2KmS3Kik3ra1Sepwwz4WeH3QVkB75HnbhgWDD4UdcWqYbicCwYee9wBWjxo176g5758Fz9QqsJCY4xaYSMpJwz6A",
  "key36": "4xxWV5a9RSg2VEpDgS9UVuZ7rJGTWXKeB5vaby7aqEHe6VQBfgqMS1y4DM8Dhe6BBBb1vHiY9vRhW7foZgbscZZW",
  "key37": "2ud7J1pXdtzN8Tx4D1URi99suXGSBJMrn2vLwGuJbKzzjte47sC4XDjf8YSrUvDTFHDEKMy5BAsNCHC7nDNhjuTF"
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
