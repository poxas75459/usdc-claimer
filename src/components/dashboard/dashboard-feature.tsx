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
    "KYFLYZnTKigbLmCLwYdBzr1tixCamLser1X8JzkwanNBRcxjoPqqfpVSXSKCmp9Bi1e4CFdZAmteiCmUU2i4Jqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZMZYZ99GASyti2EKojabBNFTiKJh5aavJ1QNGxuVywYGaF26vnt3EhUA1SP6jZELdcGmmXAzxgLBai6tNGHGWk",
  "key1": "37yDaqGUviAj6hoZVadJLMz5t4v94kFP7u4nLvzJEZSQXJee6UGEZRaPNknUJZNeToRBXpP1mLJT2jzJMqyNZLjr",
  "key2": "61LtjJ2Q7zhBeXHuNJvwu2soXf1NvAvAos78JSabYguBMi4J7F5nNipCpjhNVRCJ64eRJBX31U23B5MESS3jUHEg",
  "key3": "5UF4SdqY3TrZVKn44PvidTVu9anmxrbEygaJVK136kVP7F4VHzMLBuwHeVsbijdx6Ujr1bwcT4DX2weZT71KcahU",
  "key4": "L9Sj3uuuzWx5wpvwcBMSoq3ca5tfitXjDtr8zGX11tFx5hmEFSWkKKPrXLzAaDw9sih5Q25vDcEi4Gi5iZASEw6",
  "key5": "4EcYz4nP4CxiKFpBC2jXeHZYbGhmjyuivuh2qCQgFBy2rrdr6VzXkMYGgvSkiMaw7XoKDRTcrpJvPapXnhSNbjR",
  "key6": "H4sTDujfqv3juUkFWnYokGsGCpEcGurM4wgKQNZaXsspS6nHwZX5zPXTkoBd42MjawArsPAq1EtwpDnrvdd68NC",
  "key7": "632ZvZSoAwBcbLUUXLQS9AaaQ9gCvCxzgr5ns2XhFQzzL74sKJJSn4Coz6exyFGhpK3VnuqLZ8Ru261CwCdzaWER",
  "key8": "4ymPmRsoyNvUraAA9u3ZDuar6c2w3MqKMLPfLpuigzeqRr6dHJWa7QmYZ7TF19PiDTKjSaC9cMV1LjmkruzJJ3FX",
  "key9": "xsDKRFr9h2GVaaHnM4u1HPBCFAE9c3cmMHgTDm6jQJPdxzBL9JzWSuL7XtPtb8k6RMkyTcxD5q4PGJ3ivJk5gVs",
  "key10": "5xAE1A8KnEow11dsgqjaNSQM1RYpn6bTD6UwTa4kWSRxQ3NEEq7Kvqziy6F6jbLTTPXRcs3sgThznXDsz6iUgWpu",
  "key11": "2nQqd3e76piJ9w5RDEgvz6YTyGrSGdwBUmWHvud29pkRNH2uBpoQ24r3uBdS7WU5HmUgBVKPNXVjyLSBsCdZZrxU",
  "key12": "5i2t89vJYU8hBwJupXBEUrzKZyr8t18YitruQXfsrp8pDXqn4eyGxTazXFLtroHAe4KYdKVRhe85kn1PpoHU6jQG",
  "key13": "45WTEWuvh2KV1Xe72D2UWVnPvBzCm5pznhx5f6CHYmJCtofmix42UfXSJwJnWe6WpucDXD65cfit7E22Tn1sckD1",
  "key14": "37qDeMxCSUG245B2MCdRnRNTWS4uU2x3J8wVQa21XCYBwW7M9BV2fv92HiyhTP5DWhBdaaaS6kEDujMaYojN3Vf",
  "key15": "4Lg7wWNxnyiYiVZQDV1uf4WQbLKbyzfdicz1xAkYgy8NGay5uLQijpo6k3ouDcB6aCQFptZeScZ8Qku3dXuSiNce",
  "key16": "5iiAeCjQ7TGGcGmWwwGJNWfBJLWoxtTZA9Bnm7sCSRqkd8a1afnfmkhoZLBb3LvV8fWpwPkuj8iQMcTQ7ZBd8ni3",
  "key17": "3apNx9mHUXeZgQirc3DETJWZ7FaRjCwVvDqCrLcK8Vx87DbZMY53TNmh1acRnL5gbbGTJRuBCJ2BNdXoY2UnvgJE",
  "key18": "5UCGHumjpsCXCWGy5svstgb9UjuoEHbY5LKdyknb3bEfg9rXf7R7aLjKvT1oSDYPjm1boeTyfrtPMekn6tiYE1sU",
  "key19": "4wV3W2z5kb19PJxMmK2TwsnBqQsRekuceh8jwfp4jRDYsPSKMxzW9o4umLha92tXytva47sB1LZ8HJdRXWYakkFq",
  "key20": "5b8QNCet5UqcvSAHDLZPxHB7LzmiLarahJNoZQ4yyag58naNwe3YKKtBYmCsCwQg8E5eFvZaoDG7a5cad5hJSqr7",
  "key21": "JLTjM33U1etEuoZwSrYiyeKGf1KbDVzLqQ85MPTeBBuEp2ZaMt4yzahRUJoKA9bxpsTFpUHQ7u8Y7WQWDbRspd9",
  "key22": "3QjYScDy76QV2DgcfZhpa9kDPwwsHamiVVV19dCfgbLNhuGGPH9fZms8Z8h7TB8BAd1s6QUMAjMvGFP4DfgUwQgh",
  "key23": "58qZ8sK3LmUPCsgMHK5YnBi8GP1Gp5X11kyTrXTUpB6xBRwySYUZcsX2w7j8378By91RmBXTzSR1Jk3NpXeLAGhN",
  "key24": "4DwsCvUgCUjyCNhfGFLcYafYJ6orbygw96SbWhagYNiiZMPiWf6vpku2zRwxtSHDwufMmEsRxuNecTS1wsAJVJk8",
  "key25": "4xWyBVu4pS46fwmafA4ZKoBepyUx3UdvcgVmcyPpt58PShRCxRuXojoA1GJJxG2CdNwZ8K1j3S4tEecHwd8aCyoM",
  "key26": "52nKce6L4ou4CDLGrRpris9Cm599uPX3cUJEK2NGdSqggRan611hTkYoK58D3jHFsXFV1Ee3d79NZqKnLQjxUSG",
  "key27": "qEHYoMSPsqNRAziTwwG9VU8M287heWeybVMyxo1U7t2kPn54tJcciqHQbA53MSii7KF2ByShmQobbdUuRer5zBB",
  "key28": "kWmTzz7rY5ZpGdZ2pf2n1TZXWDvG1UmBwbpuBDVa4FxBtQqMNKpNvrHhCmp9b8hpoqkPJZfVajgQMMLH2PvDLfb",
  "key29": "2Je5JEcqJ52nHa1DG2fESn23besQ6ycpBt4QoWtckEAkGSpqd2L9e8FPLRw25Pw16awTbMM5GbrkZESdCpbPoShQ",
  "key30": "cvb5EW6zfax7qPGyoXpmoaeaBJJfhYKdQT1Jnnuz3kU1cBxwRFF2fFFHvM69vmH1vsvxk1QiJvzNGwZpbaVUxJT"
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
