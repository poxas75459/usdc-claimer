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
    "2Md6uBstnUEnprzcdrCn8ZSEMG9XBPwUhmhRfUpdoTr1PTxtqRzQLy4baqx2RLMWJ9Lo3t9RRnRua8RDXRofkmy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8DWiKkkyuk2zutwJym3PTTcLVzgE7KPupJ1tc64z41qorg3F41E2xYGQauQeYZnoXBe48WgTkPLivtu2CgfEqG",
  "key1": "4gcfAcwwXPJcqPRxcLSU6CkA8egDGXcUrGzwFBDvzYyryYuXL7Zapyqswfop5iWC2PVh8nu7bFvKGY28GLjz7AWf",
  "key2": "2qSnSkb1vWr95C11PzB1rDmN5N49cqpzBiG4Qv5F9NvXDdiehC6rpZaRTDBHAcy6oqUTqZGDSbkU7vCKhfdVWLdz",
  "key3": "4PsDcCpRDyePs2uryadKHk1ExcfLjy1FmJBgFaGJYMCoeDPWMicsYM2tGF6Nbh2npi54rvQD3GjKoE2vWAGtTGAB",
  "key4": "2C3xayTBPkGbqpSFugxqp1LbgHFKkqG1eB6Nb4jmR5CSNbE4GeCMVnzK68eHdrXpwWEcKpn1Jf5CLniFUkTbkj7A",
  "key5": "2GAk3aTmsnVQUuQiA8d1spLyL5MgTjuUvnfgVtunCKmRs2h8k7HCczqeZ46mEVEKDeeWu1VasndUBDSaRvRa9iPB",
  "key6": "5RBnwhFfkVx5Ycz9etitbmihd19miDBGJqs1TdHpJVZJXNwnWbr1GaddYe8DiMqRkDQJzDrwGHM3tGYgbR6B6GSd",
  "key7": "3a8fT4TPg4wwGs4riNfjw2PP47625F4dZiumDmGAGGK3gGn6hUKzCHAuC1ue5GqAWjpti6zZPotpBB8n5XsFWdwo",
  "key8": "3RtZ1bhyAiA14f4zKD7QS2UmKptcvyjWhbCaWeZ8khrxMjmfNmH8GFkgwbv5sTR9huCgqu1QdgbvcS5aqBUG7t1g",
  "key9": "44B58oJhTXeUJVftBpJXDXqvWEVWGiNk55NxYoxvKcajYyDaSduw99a3YTG8FELiohZDEF7Sy7ZnBCpLRPWMsovM",
  "key10": "5c6ekYxHzbGHJ4ZkPrdY81C7skHSi3BBEZ9dFHnSZjKn7r8d1fdrgSaRixxmYLJNNWqGsYKaoQZLem9wxE6oaPzQ",
  "key11": "3tPwiNuxPsp5oGZU3JguEiCrEmgq7hcN4H3grRUJWmG6qkA54EsmVBU2PxZSSaXFugogU5mPGmzvCFpr4JpKPvX8",
  "key12": "5YZRSufrQmkQdTuyuym8VAbAVAsFnvxkNGXQzESGb1UBqQPFYBLDAzKAq4RZmQxGLfaqpTGBk3gTUsTY2ctG2NhL",
  "key13": "4QoeXQpJk1eVAHVK6yzLV7dG41wXwG3f9F2DAJSGFAGGU3FLR36ULWs4YpyT6hRkErw1NuQSPyL6QFTbtHfdoudg",
  "key14": "3vUMQHxe9dGXK8D3eS6YATFkgpK4sonQbhLDWgvkLJ36WGXvEntYMFPK6YAoJhP4oRp2DNYH5rzeRvG7Mnp1uffh",
  "key15": "2vL35wLs1ZUBLnih4geN8TRWbPYP6HPSPVua8WsMCXq5Aux9xhgngKdt4e8H2D21yKxgohkX58R4eB8rpgW7PwkB",
  "key16": "4BMw2tXkwZ51RkDp5JZcDBnziF1adiVERdTSMePfT4yPU8CbwfS884LRFncEcJCLR2XbTfyBuGxQ5aokDvDbFzpW",
  "key17": "2r9e49fiFPxqWhuhWGxtydZzH5SGWarDiqHtR4euNsBcz81WfuCaCiYK2pWi9XMwwayEk6z18gUMKxCYhATS1L3A",
  "key18": "5VTCzxqCeoY3RKeYkuAHhauVeuX7vfu9MR23ZMoKJnHjpNv7wM5LCn9qwGjPVQT381xjfYPyHr9uf2kEqErwLRJ8",
  "key19": "2PVPHgYLFdAo1qozRpdvqyr9s8acw6aS1eFZAwwedZsXppaSopya91qpgfeD8hyWVdS6FcNgNain3FNCBeq1J5V",
  "key20": "2bmtQ3HzeMzpRn25FxSJZrpay5WvQQ3Gtv73x1QCWyBhLLbX4sMVFvhDQTzy1YofxLnzM71pqzaNZ8DArx7FPRnE",
  "key21": "45SxBj7UXQgwURLoPQtCADvBpkPwinVjPvkEcQyW1YufqXqMKyPZfie6XfxBAgo1FNJsA1WF9jpYScPYvpYTZ94F",
  "key22": "4csZcvhu283d9rwz7mhtV4BxW4rTdmGMmLujjQBrnXQCC4TJX6pnV4YPqnNJ9gkcmQQmZdVaGWLszspbemPwRGTG",
  "key23": "5qjYiMzcTWMuej5En4z7YW7bMaaKmqKYRhDfMMUrSuvb4rXfUs4u9SCc6hc3dEBi3UKJ46FU5zcWuxyU6hoF4Q69",
  "key24": "2vPuLdTHLz8BFDmpDQimLXhrjyeNT7NmSrQ8pewmXqsrucov5ME4HF2E7RvGJ8HT9qrcCS4E53e5mfToYCtVS74j",
  "key25": "3AFUL9nTcHRCH6Jsp5Upm2j7NCE83Fjw3Gq3fcnNxtfowp78pUsCAxRKKRraeiCfU4YcaxucYKJFPUhxzvevvK4L",
  "key26": "5v6LryuNKKk6fwHKf82LBourptDQoD6LMieAUVaGXHktGZxrcQW1Wz2kEyvpGFecqmw5mmpNTLqFJJSdsS5tPapa",
  "key27": "2K6He4sVZLu4bH3227rnPEHnYRXUoc2GFp9bvaB4H9rtZgYuvn1133SDZ9MhesZ7Ko4HcUVyziUWT8eL9ugdxRiB",
  "key28": "5vCqfKzQAuTkrYZ3PkAVgosFWF4KkHyyc5FcXgpzAXFxiTs4ET6tirK58mRq463cZoCsGRB2TaWpxMPMfdBxHkm1",
  "key29": "3GZNxRvHbEcdDfhj7o3gYKt6tnrcVxjciPZu6ZX5QahPqMYPPDfeD6PyWRBCGw9ZbnAZprXjbh13j3ByiLWLnkRB",
  "key30": "5DapbWsbk5YaPqSKLmM5U55Frt3rQNTSPPWUwM95wzjhdxzXyk7rtqwD2aqagg4AgZxkUDgjDXnTB7gQHQBVKrHk",
  "key31": "5em58KQtTz2KvPsBkESM9Uf3N5TRXzyJBF9nKnzvR6kpQHrPmCVEuXkLYrxNDZ4s6SW7CYAT672XwMFYExGtsqLA",
  "key32": "4cr7BjUfBXc6fM3oQWuQ55b98EfFSWtzapnd742LRHxAAUpCQGurMD8CTk45b9qq26RS8x6UnyQzxtCKet5yogom",
  "key33": "2qb8y1axaBGMFGWrFHWr4azLQt66QD1mofMyYTBUpjyeH5YLrYw4P8CkgZ5jLkYX7zqXx7XacRiiz2Ete3b4po9A",
  "key34": "5HAhWpu4ckH6mfWKt6gkXAybgXwCzPf3AtKpoh45GLfxpcuxQzEKSG3aQsmAPuJjLWMkHKvBC4yNBzXarqXGm5Hx",
  "key35": "46TETbDp2adfNXcCa5d7Grfs8rzTrcXeyGPjPF18Wzfxp1QS9RhjHxbBFPDZhWuqwJUUfAVbBZA5ok4bqjs48okf",
  "key36": "5N98F1co1zNVXx4g81nT2X4TLVE3oDAkbDoYsZkMwkNs2jM1Yx5St77wnhsmBYP9UwXrES22kbAynLTdAFMyvJ7L",
  "key37": "3qarEEj35fHrKtxNqz5KD6NCzBadJucUAYUsywnoNXueHGFxV7vFaEjZQfyxpoCSBu1vAbXBwVSUfgeFSiQEFyfQ",
  "key38": "4q6C1kw6CmtWHG9N3W5PTPZiAypmXrLZvsxG8JwneziYfJp4GKDVsoG5QVYTTE5TBdxSbsJZFV7Su1uria9AkDuF",
  "key39": "4FktQqghnE9X2Ee7PS4w1zfWnqr4eHPAUyDRGGfYvwHWC42tR5NcmNU3sswQxCgCdaf99T5x2ovoKUnPcsPU8q6x",
  "key40": "AW3Y6XRHaKHhFDxFjV9btGYLq2duBjoa8s5s62yFYg4FeR5XMe8QowekCVCKNXZ2zsZv3oYdkF2bsXxHkqXYkHk",
  "key41": "4ijxccjLQgcxX5xSv8hKgN4YJNC2mFcTc4HyjqDeuJtpmuajv4on12XJjw3QAnXVEryRTxG97aoLbQQeTieegbNp",
  "key42": "3GFDxH7jD8kVddCeNsCd4TsYTf98geqMJyEPTEA2mbX2c4XVvPiJiq53YQUqHxBHoavU5VnW3petdLcaWHNm4Szi",
  "key43": "4YcrsPGxHrrtPZTQ5ErtiYjwo6jrcj5zv8rRJXEzTgzMzipysksLFGt1WhXDvPotZB8BFGxz6h1eK1yUCcRtzQeX",
  "key44": "3bhYqYSjPunmTpQcoWN1wUS6z1trfBcXPGYskjpMVpxsFn9VgpGDM57uzoygmzYbapah9NAPLvJi79DB8sMCRioE",
  "key45": "35C7vBEGfP5vF18CXsnxFr7pcEqeKdUDchXQ5DBVF2XiwqpvDycLN7G82oroXZLruisGCo5DZrV16PFV1h8zKDu8",
  "key46": "5HvA7ZyPgt4BA4SuKGiXq7WcUe2aLUQokCHSP9hXh1AWdq4RTFFuvCagSAFqsSEUNNaw5uCDiNXbtjZCMxCTsAzd"
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
