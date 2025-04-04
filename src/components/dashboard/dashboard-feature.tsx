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
    "jeSQGDZJaGcta32Yxh32F3m4EQa4bfQ1h14n8iYDYVoAYHfSyZ81mF1p9zhw1EcstzjuTCXpro4y8FJAof2MVwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n5aKDavgurgdT9TxWANHKp7anZrvxMC6S4oNVLdJ6m3k5fTQbi5wGSyWVUvENJQTktGn4TzP2BDhtN3y94bfKeo",
  "key1": "2ma8GcnfbkScgWJfyY1KRfRCwnctF4cr2F2NADBT7xV1QPvcX9T7dnHxuvowknHJmXmgyTaT6cAj345DbP3QKPCF",
  "key2": "svGV42Lzhc8jgm4BNrMPqvicPvwKvm5HUoYcytMZ8PaQDV59kgCrAWt6CxT1XXBhAvyFX5xZCoJfhbnKo5riCuo",
  "key3": "MMhcjd6MvPrDphxYfhuepAVXvLUDLBqKjGrSxzuCjZyA5oesB4GgKYXVVSieBo2FWe823Ggx4E5ER7CGsZNyinn",
  "key4": "WW7Fd27p3JcDLtgGt74uRe7Z2M6evi7skBfVMyFeVJmtejFCtLRPB646c7y1wsNkMYjh22bmJC3YMGenhFmUU9N",
  "key5": "3t2dfyRmVQW3G1wS2d6MYbxq6DnsGPVEfdP1nrdvaEgBCUWYpo9P4UnqAnxogQhueshZG1oMDYSMBS47MMHSEhFg",
  "key6": "4aLV5mgK5JXeofYKMQyznsrD8Fz3nFUnuJGr64Dd9yvMRk1yKXyi4n72k4RMp3eTMM5TNyQX2qbo6tYZMcU86hKd",
  "key7": "4275G5pozCTa4u3tFeGJEw1PMYk16ZuEWDjgcPRGCzarRaWebM7U5svsH8g1z7abJqhc5jWSpnrKL1q6Z99iD3fE",
  "key8": "3nyKtK2G6GdsUQTBwXUWSR467jD5KenVZy92T8AVL5TUW2aQxkpoUgVoaKB68kcZSeXNLzqrWNNis8Ct7gkNDHCx",
  "key9": "5ytNJXsiMK7nk5S3FPPfyxA2qfwCDXuKMEh36cP3ik6Hvt6533tpqyD9wtgBgsnb7Kb4LYbgfdX22RvnB7s9Yr6G",
  "key10": "3V4z3YNYZDsYiP6uuKvuaRtmNFnVE15avBp4KU7fDkD9rhPXrbWoCWzjkuERdGJDFk8b3BAy3KY6Sn5Dx9GLaroj",
  "key11": "2cmsKEjwF9VRNgKEbbWoJ59krD6r6EPEN16EovZHqhuf8Vcymek63XtkpkMkFY8Eqxd9PNLeGqGqWAim4xEhfqxj",
  "key12": "2z5Cn7BhAHE5ZQqckHzsWHMnX6ibG9LninaNpuMLf3AYupYYLxZArNQj5Cd6RgX12TDx6YpGhtj1R8XPp8MB5Gfi",
  "key13": "5GmVkGPFk8GtgVsrnL3Ta3PeD54F4c9vPFNZZiNfPpErADFNoqieCbgxUDQ2XgmgvLcWyvVXAqRmaPACUhAHHCcQ",
  "key14": "ei9ZjuzR9vW6gURyGf6DRgm7Ka5FxdRwhmLLHHk4ETq7jFLhS6QaU2HDvhQPEcsWAWgaMQT9aeAZu6aHDSH7Qtw",
  "key15": "G6Hxih5H5T8bjhuBfr9ZguyMakkYh61iT2WRFgZzLHFgX3h1UEy3RFHwdjqe4y1vK8oXCaPSucrZ1Mbg6GENXyw",
  "key16": "VChqhT37kJ9BFgWLvpJpbV39v28Q95gPTrXx37tTzxFtboo5imHSrhhMQW41872LTUS657kNozmnYQKfaoLhEKQ",
  "key17": "2CN1xzLTdek2nY4m4PgNasUREYZyEYtQh7Ujyp4FBiaBVJ4aTM82AStsfTaog6Ure8op4Up5H7LfvFraJTbyqzQu",
  "key18": "32jDrmhhUYHPoh1zZRqiTcqfyg41S67uAhZdqZZR5kZrCFgUB3EcGWNpctXoJ3D4ijCKVsgFJzDZePtKxuZ8mmmY",
  "key19": "3A6habjLzzGDiBj4YA4bqvPKaLZZFpeVDdZYHdtvKAKn7Dm5Wqju4eoWt1ZbZwLPifvTLAomrYycMmgmLE2FRymj",
  "key20": "2fevS2tUeojimZxa8WQLK9h7vGbSnSV8XcyXdyg2pN6doNBc7gGv2Y4oLuoMmizGtAPSf4vfvy85RRDihYrbpf7x",
  "key21": "2vj7srKsswWCe1pH975C4fRA4wLs1cP6PLARHUooDXnV2e93uBFYrmePhG5oG3DxjCb5vF7n8CZcBVfe1wCVVgtK",
  "key22": "acLsK5YwDu27DJbYa5NXFXLTr2zfP2S6j9uGYWWiXduzWKFtUSMaR6bhmCVEMPQGFLma3Jh6mFc7c9EenXaGfk5",
  "key23": "96CAVVgRjz4N76dzAgRDTkt9T2zDBTFrfGMkuDeQ8qDSAK8Ybq3ygJFBKM8udm7CFFk6g5FBybcFHRe18FaS7MD",
  "key24": "ctAQuDV7ehQJqmcqRCqS81gvq6hBhMaDG2A1Fz9HR2gbAetu2wQVRe128BiDgMSEK8xWpoHSBDB822Z2iNdZ3bH",
  "key25": "3MMejDJ65ZK6Rk6y3aRijxHLUQ3mQ9F3Bg13oGa2CnaQ1fGpLX57ZWtgNj7kzKrMejVu8eUFCs2GXXvuuZZWjkUo",
  "key26": "32HMf3b1sLoMM41oRksr1LfWRgAdqascqYhj6wnKRqdgitbVwnmTfmPhAHXVHN9xRW2wFexyAL1QozpyiqDjv8vT",
  "key27": "1DUQpAw4AeknzTSKmkBFwwWRYMUTXwW53iLzZfvbcebsc94r9w7q2tTmcm9r6y6RgFfKn4roeaofqiJwyjkUX9G",
  "key28": "2ZUS7ribmEqcmRg27v16vmUQpnMKvptDo8pajLMv9RXFkA7tApe6ca8BdyFeiCacQCnaJWk9deRnxsNrTkZD99HB",
  "key29": "61hMUUDiU56H964XNmdshS4RniPZWHYSoDAhrjaMaGMaHNH9HhaBvg1mHqzdgAhACoecD1rD7GZiR1mpHJgbrU2m",
  "key30": "3hpFyWHe6iD93Qszt4vkHJDGCeb6CakgtCnUMgzzy824HDodpdjZ23GskUifTbSKxoPahoUR47LRJoAjfzF8WS4t",
  "key31": "4BAeW9vByiJVLuibxPETDKV3HgW4JRBJFtkLnRstWwQcwojYAViRQvjVKNqwxvzUzQsnifcb8vTTmGAx8Xc1VoiA",
  "key32": "2SS2QPFGkN6rh25k2Bbw8SSW6d3Fok6Ptr8rHx6REbKZnLMUNrvn23evdHcBUpXXpRujPwTsCNCQTXUuNGRDLcYx",
  "key33": "m8XGzHSALUHLBtP1N3AGSLTGM89KwLhv5k19HRxttBupU3hpDawWYHW4oHdEjd5anqYNxBQJCASgVVSXLsMPsUU",
  "key34": "4jig3nKRsbkuJkbayNTkuSLg3nSN23eTyHSbxNLVpe2UjH9E7SGKWkgiBvv9FPfi7pE1V7Kf2ah5igMn3kH1oxdS",
  "key35": "61LRXTu37shitSaJgKdPeaGiDhK8JoFVmXep5ynqQbkBR6hsfjzjZu6rNfYPK7M61Me93b9Q6hTyFJoQVL4GcFmF",
  "key36": "5Hqs1UbRpaoBCc25G6Xcx65TGmahW6hoarTMGox29uT2hsDSBqNZkAAF4RVk3NryYDaNiW9oWVGSYaZfPbebdKiM",
  "key37": "5igNxDHx7HDdHzmm8jSz6ucc2ERLCSkRfdDYweZEVmb6CpALeXscaFz3njJHv8mqGSeXBcAJKD2DjhgUkE2rq4u3",
  "key38": "52JLsJqEQmB7ALsRXk7NcrLZsQkvRe7v4W2Hh6PHFhXe7niLm7nMpF6brmWbXpxGSm7v1we1dXCoZXUyPTV2m1bd",
  "key39": "38pcTfNtuGfV2FrtnXkgq159Lpp8ZUaP7GUMFmekNcbsfEvrXBLLK7XsAFGQrNcFZxJX7hKvsYZwrteQZ55nfgPj",
  "key40": "4R2sUa3ayd7USrqF2owwWp8tdGPxP9UJfV4WGNgHP3fmmvXiaiJfWDHLqMYcsL2TugxV7h8ZjE9zD56Z2kgGN1KD",
  "key41": "29yD1n2b2Mwo8M67eXnCz5WEdvMj7ADKxCUzZZ4TUPZgFQ2uRuCkfybnXnurAypGfcEyC7bsZ8t5eeBsXeETXb3s",
  "key42": "2qgjdAubYyDw28Q9H8rF3koBNxyuaUYvMrdZWw7FACZL2kfWMY96K1j7ee7KoKVUPh7izEn5oUmZt3tRjw7t4TTi",
  "key43": "5CCKFAHrJbTrtj7h2T4GFjBpBU3eSFcr5twi9S5cUHd9uAaRxzzJwTFVLrhv7f7uEmEfB2ZW46xqEMEXP7gQpzxr",
  "key44": "4nHYnhBGrncRkWN6qf95cDjHvKBMaK9eWbWMs65zzQ863YdGVp5c3ztUUaYCFeZkwiJnir5yaeAVovAy34YfAwd4",
  "key45": "2L8XcKoFwUW6imSn69h8m2VfevqagSpoutGampeRmZBb4zFXUo2traAAMrjGsMHJqSifQ3Ue9BujLWC77PoMb9rW"
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
