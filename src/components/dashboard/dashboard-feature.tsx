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
    "3gjp5oGwqY5AoovWJVgRrpYpt4Etx8URZqP2s24xzAVxnWe8QfUq6NMkaL1ZnEgr19wdoxA1jxV8ZmtEJgjftkgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MU8CQ3xqp3DUytUZgEaDgzGgrqFDvzSYSHs4pGSnZvtRFXEgS1MuSi1uQPbdMi4HA9fkGyfgsjnEx6kkouYkhi4",
  "key1": "4fzMtAWjowctE6q3YRRRkAaZNULzNrAngdivaYgMr248WH3gUC57SiSv8B1saEWNAtU4sQnkJAHWsCqDQSFucrae",
  "key2": "JS9dPRnf6bZmWbBFAzd6XfAPJB7jyEoMomZ2aDCP1sqebSb2Ra8DZqbD1MQWUnhgb2gFhscPYRieSnGGP6hdcG3",
  "key3": "2KwAiEcPZhwxVb4WRfUJpZerbrxxpuXWnsgpdwkZ2fYndNTGPr9L9fugr3Xai3GuornWjVkA4pX3Uo8Srrr2icji",
  "key4": "2Jb6WtGje6G6LGiCz4oAt3KavQZoh1Vdzd82P8fN2Ei8igBBwzeDX3on9jWW5BGEaNGpBz9iJxosBgBjWMiNerH6",
  "key5": "4R17iv4dJ69NQJS1pRyEQNo6h2LDzRQB47voWjjbRWpSME4ykYogCoAdKmQ9cTLNVttRqkYEgAP3GF8ixakqL1Z3",
  "key6": "burMaeSEnDM5p5YjuBJhc2Rb6VEShDYd7ghYNxQMscdWS8Si26KnUfZpHySDXE6VNXjQ9H3Jv4yEBdiXPqJH7dj",
  "key7": "3GiJh8FV3D5BXtdR1ME6xvwLdNRq4PLDtxA7ZVKj94kgm7RmKUfDp5HEiQPNLKNWLVg6Lc8Rb1cnjG1dEMNNZVhM",
  "key8": "5sF34VtC1wo7sjC1i9MsQa9Pq8afCgcScfp45YzThoHoYBbdLUsuTzoSubWDzUf8k6KKnKkDjuM1KeRS2DCAfDUd",
  "key9": "2Ha6qashLjTRyrsLig9viKryBzoEtKQJT3WiAAF6G5T6HSf7ts4Bhv2dmrLFNTiwfx5AEC8GGP3hGA8BPfjKwvLh",
  "key10": "5argXNTLomATw35Rq4JoEdjAzQdkqqKBejMRt47ZQtEWRVDCQeL6rXrBkSTeYE6N9gTW2h1hsLu2RfDvY72XxEx3",
  "key11": "62m2N7qXmJFLTjKBfPebP71hzdzXUQsA4BtjdnJSkVJ8b2bj5HZeT9gwbCD2DXBwFkRZYYJkaNhRLyD6QPG5eCXo",
  "key12": "38HEQga1eVWCxd6FTXSZCVEiqqSBfERJdbe9RRVxpNHPnsPXzoaSMBt9E9fPzGzB4rszkKjuwWkjLwdSvjbxJNTr",
  "key13": "4tjnEc2n8DL7ai2H61QAsrDXuXK1GKuXDjbmWbnoYrHAVvc7bQVtMxDR1WVAGSBkjZqmcbxa1JnEnb71RhLJPhNe",
  "key14": "4PzQirMYJUf2kq5uvVBec3h5fqgmaaYBsi65DA4c8jQPhah6HR6coL4RNJr6V1J73wkDsxuonggMozWD7wyqUycz",
  "key15": "4jN4LbLfUjuynJVAuqebiKr8jMfdKgJcJjWXVPCkCyHT4cbMEDdJJ88i8LuVe2QoX9sm1Sng2nGFndMpRL9JjTX8",
  "key16": "62d7ijpRaMtsnKrNvpwZ7McuCr3W95VqQ5eNz1zCmedXwks5Yv3gvgat5izHrEk3b7bo3uLNSp6cB7JwwJqzW1aV",
  "key17": "24mc8zYVH6A6V7mDugcahk53Xgx9QNw5TCU4f7zgrr3gYi6Z7j38WivDTsCpAzfyZesUKwh7MQuGwc3nnECoy9e1",
  "key18": "vzf6BFVk8mhSPifS7Vo7DMc16ntTJ2mfLx1kBvShm8KhEbm63gBbY7SefSickeks1bRusgAJHY52xzjJApNJQ1S",
  "key19": "4M9QSDiCxe9mWaZftEvRe2UyDX32pcZpstPUdEsVFpCi4JoyxBGE8zT5AyF3fvftervBSPJLc6dSmPE35uGiBsTz",
  "key20": "2EysuKSxEdE4gw6d9vRNFGAtN7ubZjgx99PFU2xzUaSY3mK1pBx81HyppymiNFHwmYNz6pGSq8bBfgj9EHusqpUN",
  "key21": "29dgcEAdDjXTuTEswBNNw6yagrpRj5BndEgRu8Hce1SEQJ1VJDZvduUpzUvdMBumsDThVEbC4TPxfPq6zFYPA2MU",
  "key22": "4G54KFkxrxG5qKskcJP5vZs1xvwbwPES7gD6iT3wLoY2GQn6pcaEYAHbnceKoxFouKVWnK1DnFsz3GYSZxKziaB1",
  "key23": "4agJFEaKDurZupj2jyeKYn9zhm9JxWaCxABcZBMVUBRCMbWEWL5n6Zjk1ivnqfRfF2UmzZVQrcBj8U8BFGHHLGdh",
  "key24": "krur1N8HQPFCf5m4yV6i5LiLSS33sgn2Xh11aQBhkWFxeEWk3BZvgyZiw8Mr3v4yGGnXwzPRV1KaEyqM6VGoe9Y",
  "key25": "2d4aXZcDrxHmnyCJvvrr57aYQzxCBijqN8NkjDuAEs83nnC3yHaWohMyS1YL2XgZ6ym8wXJ4EeTKuh3JAHz3N8aa",
  "key26": "3fWeRif6y9KoGgD9tGxXFF7hKnwaeKBQU7RxRRWZ8fY9VooeAzcRZhw6vEqGnH1oGMjrrF2mVopLVb4G8WBj2K9d",
  "key27": "5eJCFngzYahBVHdG18ioePw9gAuyJaHdmB6ckM51hkEuic3HtHegVdFU8BEhu7pz3TvxDa5SbWA3o4Bumk82pKiV",
  "key28": "4tZUzxQ8gG3GNyMva4sJeyq6GkL9rKtoufJQRnbPLKd3aADcvtWhPEcttAHi9VxFe23GR5QWuvyaiCmuawAXnbMF",
  "key29": "4MS7qY7VU7uarTL5nJJjxzRHaKi4ENGfTxpxKe4j2JsqL453Cx4z38ywnqJS3y3zmwVB5mxRLuzXwuEZUx3snRcU",
  "key30": "54QKN5jfTP5h3Zi7RYZQAbkQPNgPsguwiSRdhxRPRY8dqiz6yDHj6VUgF3DRohu8hjbYaztZJpiPiPPcSsEwWvi4",
  "key31": "4LM3GuTpyVcSdq8pzWyyRqquGVDMYHbN1Xyj1tqt2Qho5GYEP7nBHuUrxV9WxLAedRzcAEhJ6psL4W8Sv8ksojeW",
  "key32": "29VMx7MJUj1SgeCXHSYbpxpwxF2N4vhg5C89RBKzQYSrt8Nn2KCSGXT5K7LkUVBimbCqQK79udUfRy4J9TsFDQf6",
  "key33": "27FUYTeKHx6HcR7CJjNxXphbtxW3Ynho7vYywQh2pDeEjpUpaiPq1NvVDEQe58Y1hSqxzwheRCZV1FTj7WU7Ly4j",
  "key34": "3WN2tLGtpqJCXj8Hw4w2WhEpSL5WK2NX8nLhhf2ysRoVZzJvjrdVrjWh2qejVoqrSjNUj1AXWv5YcH7TCMF8cQUE",
  "key35": "5388GPDs9UTTHTfwKxwbySSYg1W3jxhLYDF9dk5jENc3qDuNo7WdPGhVj4HAwAPmCNLEb8yqDbUHw1CVaPBswPy5",
  "key36": "oXXpXbfXHZsSC1G3jnenjKhUvsAGggdChZpzKfYisNUeg2e7Ja3ZjPQ6PJbvPGfzRNST5zBiBteGvJZpLUpkuKq",
  "key37": "5Z8dXfMYY2SKn4JvUjagQk5vMi1H8y81qeKfuDXackP3iK5syu2wssywe6ApDvr6BAKGcWjBS7KiPn71sqizhbti",
  "key38": "GhbNKafQrAgtorhhiDrwpb7VW8uwa7HqyPL9ngPdRmdgRnUiN6piLJVZWfFDz6QP6jBcjPkfQKGPJMQx3V4wC2J",
  "key39": "5tfHNtU5CqvdJPSJzxjiwux13Ejc95xZYnYyqbt67fYVp9zyciYNKM6GHSPYg5zFKdWr59tZPE3nnsSEWVoDBr7S"
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
