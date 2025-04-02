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
    "4GKKAcRWmXkZHW7EeEtGSzRiMFfqeJCN3EbZYZG3jd13awgBnwZHZE9bMjRSmRHx6gYsWF1jXX8KpBeLu9LNMmk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGXXGRc1py6S3KHPvj3TGDK2qYreLFx8vC8RtbcoKx9oYqY7Xnux7GEScE9d9cXtVD5siGByohoGn1vDAQJ5BVT",
  "key1": "oqfGZBe3amjxuXCv2Si88GioPmu8PxvC3sAMzuB6VQ3DdPfzsRnDPaujTimdK6tYFGbMBLVU4856LoUkk2zBuaY",
  "key2": "24KeQH9NqT2ayMpHhP2erkkaMN4Xi93u13a4Z1F9L7ZimueLbWcsb4Zdfc5ZbDa7trvAxK2gdrRgJF18EqhKSimT",
  "key3": "2gGnh9z9ceKnHtD2tsPCuzrzgw3GRoWmygvbF9wyWMbYmPF1ykAAPRoFVwxbtCvUgCGoeNGyUZ77AzktjCoGcucG",
  "key4": "2HzEZnXwyokpBnZEg3W6Ni7hUC1ewUD2pegh1kYwHt6iGnGC9RYSZQ9ThmSdgJ4AZ9dnV7X8Lkqki2AXYo7MFKst",
  "key5": "4kpHGpfiT56LssDTw4b5CCa8k675vkRXjxPAjTe13nFAfUDaiqPR1o5rLcAR6p7LxCmgp7WK9oLauntYcz9XMhYh",
  "key6": "2qofbBaNhcsyHEa5xDrvLLtccqjkz1Dd5NYuvjcQ1dUSVruJ64SHMyAwyZohwvaTpbbKM8oCwwnYHfXrtLDkTS4A",
  "key7": "Ry6KryTpFykchtqWgjcQDTZdA2KeB29no5gJLpyMGeE5uNbeqFkHPzCLTJjUaMc74PkNkGGtA6v9sYtJSTSkuQu",
  "key8": "45WGahEa5iUzLtxRjTbxyp3ad3n9DG9ZtN5FAeZYzpnA6sxA8TotSbjgjTsRgPXHhHfyFinAfLGspGf8RaRNRYTT",
  "key9": "2rDxCfFQzbc8rLGboUqY9tUFDQfeTTuRiLCYYCigrotFcacnorZjr8SWFPw3MubLJZcjNUuaAQstqd73yiPFdjM9",
  "key10": "2q448ccXDxKKqbDCXyv1HzunqGRKWRS65pNc88p1GaUepDG7TRsh6VNm7D9gc8AV9sRji5M8GcvQcttvW8oxV2wP",
  "key11": "42tLMxLQQvZE6ouLUpFsmx8sjKBFJ2Y8f76Vdwy8Kg9buyB84GBWd7n4gWn3UrXPmbyDtxEarWgw3abHxUHrWd6j",
  "key12": "2vHVRHHVTiCEcGCQfbiSJadkkZmJYUsWiyRK8LkPEQ8kR5aJ7mpmcxUQV1J3jH54Kz7x5gNF5VfCUpttxLGD57FS",
  "key13": "4oJUbhFTnCwZpHN39iV92TwKDoD2EFdwgAFTooozh9XxwGNMrJEGGKsTPAM4Yodj7zq2iyg4d5TYtEb6mZSRRDax",
  "key14": "h4HmynhF9eagrHLspsa4qS6aNzuHyB9Dqgdj5JkRwvgtYudcGshQ4sNoLFvpPfVhSqaq7mxNYxEHrnohfpzsBdJ",
  "key15": "2NruaQ3nrWKmddgv3oUGPUPfL5hXhTS6sYMtp6N7w2Q2pCiG2QLaF7DmPiEVboNBeXmdFFHE7KjQHohSpJbs769F",
  "key16": "5oTuyPqGqRSRc41cNHYwuAum2bhwUM8PF2rZosmWs1NzMudukpA6uJtGKUuc7avhGQS9nEpb4KB4nT5RQc6MLmbo",
  "key17": "5BD2TPPpy6DCtZWR4gUN9Zw2mw1o1HavsFYQGftXHHrwd9zFCo21ACRWp7MWxsTVVs951jcXTQ1yJ2pwiBn89yy7",
  "key18": "5Z9yLEt2peXircNa1s8Ja5eo3zgttq8mdLLPNQH6jAMbxJ9Mh5rWKUgycRykaxpJ6AdZCDqpEypLNuaRXdmBFKMX",
  "key19": "3J4h3dRHa6gQ6c1NvfXLY7QPpst3P7qqMcXEjpo1YCuX8xhRmGQjFuEusg93sXd8Y6RFzezCwxsL7KRofDZCU3g8",
  "key20": "3GPvN72SFFYEnwJCKUMwRLCV8EVKHhtJPgQkHS48xZ6XYxzCJB5VKtwyLfCB8afUJhNo1j5epmmzoo6pMgbGmEL2",
  "key21": "2VNF3EQ1HaU8wKjEYGDeQapYTctxd5a9ANG2HresJevNM1PWPovzVLniXs2FskgmwXVHK6iHjaUyiXYVjm16EkQk",
  "key22": "54VYpXL1cR5ri1iA6L3bG86UTCjX9TkyMDrMMScZG3Coey6Cz7fhAF5eJiE26iU53XDJScKskRxLWWcX1ioC5mfv",
  "key23": "2iAEG72TDjf9ZmqUkisKsRvSumv7JEzx5DGi6wTw56xb9f5DcoeyetcLPo6CKZ3NapUyADu1zjScyBRYAKVfGXT5",
  "key24": "2SdDouL5FbEgxxqfmFaKeuwL8jGsRd2ZAsmRirwusk9xe6488hTvWmrz5KDK7Gc7A3Z6b6HzkBKuCcuZfkYpQfxh",
  "key25": "3S6e34Fbm6zyFhinPqzKhEGiXGrF3BX8vXcJG44xVo2YD91gb9oiLYbfH2LMs33vvCGasuNw7MRRWcZ6EZZ95yPt",
  "key26": "5jRJ1MenP4vcJXQq3YxGQQXWCJyR4pJS4saLe1TzVwKeYc9VssAm8EgFyPPNJ2FneEEXdwYtSCLoS2XVs3jdxS7X",
  "key27": "3qBfYBLMT2g83kKRsQ5Duyh2opwbXNyELoj5YzdWxQxybnbjs9Ch8SFe5UU4VMnPXQN8KWJmPiNWt761J2mxpo7P",
  "key28": "3LUno5UfBqxo2xTYawmNVALAxCzkb6Tbx8cmaYYCZkjEK1rKnK2J9JkD9mZ9sBQ2KMUSVWEdWR1FiSyoJTmP7CLY",
  "key29": "4pAwrCgKvHNWyhftusxndvzZnhp7yfhrwF72HYQmV6jrn9QQG16w1z5x7cGxcBDugmepaSjNk7YY8KYkfb5HyHxZ",
  "key30": "d1SVhfNAde3iUTXK7rT8XXQ2hsq5y3sHsZYDjpPLifYTsphMhp9aiakDnh256XCSiAiSLZGXcSq9xeDiP12VPBw",
  "key31": "4UHGVYnJXE7A6B8QuB6nhSbvgspmLhkyoeHQ1qNg8gSxfr3ZvfwWEKzF5w8KS9D4ddgQzMb9p8ixTU3MUJuUFxU1",
  "key32": "Q8ThEsnqASW7bpEx1QDbUGvLKe84V734pBaELkoA5Nq4bWumnriXktNGAfAdDxWJMNgpYpHZgNaF5bhM3jTys4a",
  "key33": "5sWWw5xkpHPc6bdaiWZkavEvE27vhYPBnBd8xAnhKoYEgYPAhtT14BN3i4Z6MY9q5hrKuzsMmXQMcrY1JQDE6ADh",
  "key34": "2aUGvSU8CmguCav35FYSTAVaNpmRBvfnBeW2MgSpHtxZMLp3UW6ZKhdLbMF7k6e8En4L27vtGuyZ7H2vwGzaG1wp",
  "key35": "5uwvTjknqBQhBAHtV39zTKfA6vhEpmgkvPdG6rkySPimJJ5zbxqK24rWn1E7VZSWwDHGisMyvmdZMBnW9MdY3Xbn",
  "key36": "41SLPXjzZSYpCdhHFvGd6oMEkAMjWdbTinwBcWAW3FvsTbErbDJpYiwttRc8bdFV8wqXAMMfkqGn4T7pPwkG6eKs",
  "key37": "4xSWBpRKni92DK5xfmG1P1oUCU4DpKCufbbNrtVJqz5NAgXedX2ernRUPAz6WUXLZDfkMGbfoAj3YLX3SRN11FaE",
  "key38": "2HF14uyzmA8jVJsbiutkNjtdrcvwpxUpEB4YfMiVRcTxVX3zBXp5hvrMmM5H7h6Rn6e2HQEspXPSNXYJY2ycbEqn",
  "key39": "5viWzXRi2JkR5GdbhnFw9UHYKB61GDHma9333EZ5hM6RQbGsRAazP3xg7fDV7xmq22ShiY8fWvVK1xksPKGkTvp4"
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
