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
    "4VUf2kuojCmpbpc9VsLwfLoEC6bs3nq7cWZTFseWpKsg94Nq5g8RqUsr7gmHy3YBckG4H4NfxESbmUKKd6RnKA58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Bp1SUZydapSu8SLCGBeESLEsuFc8x6kAj9EzayXQXZfLw1GRigoyJVHXHKYiMwAadqgLYfRZgcGgrBkv8PDUVS",
  "key1": "2FeNQaPxfqNq6UHPdn38ikF27X2VhDzgZb87J3EDbkz7yUrJo3GXCDfbafMrJZenyUUdhiQu6DeEFAB2AW43iECx",
  "key2": "4NDLw1EUaJeMhBGAkP827uZoqqiYy2L4AeYPgAkw4oDw6xEufnNsg8WgsJDfGwuMveeQxGnRo3W1rVp7sxGxV5UW",
  "key3": "2ewQa5qKxyvgfMr1MRt4W7cx2HUAp8zq5MZS2PQ1qawK16XWnT9r9s29dLEeeocMvDe2K3pANVBaY7B4TLGnvrr4",
  "key4": "a4VxWNEt6VgJQirYsbuVw1P6DErpuWARe2w3EA6qCzJrz9tjp1UU24RVC26Dv5NtrCfozwXupobevzk9K9cZiGx",
  "key5": "5VgjLfJXWq3qdKUJeXaaWahSrBe9JNCDSRMeJ2Kfhfq37p7ZFNEsyy7epChoHkJHsVQCcAfCmjXdB88RhRr8cXu4",
  "key6": "2Lj4fwtsHiAibF3HfN2h3nfK4eudTr4QVro6sVuwECEtacPkBG1XJ4dkaQt2ZcKXuK1NJFTwP1xYDmwNiFZ4VENK",
  "key7": "2WFswVGUWTrD4HmMRSjyckLCeBnBR1rxmwwUHEC5CMsrCpHfQVqrzzyYqaZvYfdzTXk2D6shPwGGrNGWrNnRZJo4",
  "key8": "W3xvyijZLJbJmpdQ7UkAwsZ5zm4Jhjrozhdx9LnmFV7EHZdkeoX3UPjT4QYfrzo83dd6VJJV7npUGDyoywYuCVE",
  "key9": "4AReNf5qcQ6ncCYXwQ47L55e1mN3CrRtQBUtxYyAfUXZnGYvuYkJpwRy6MmcvCLsjk7SpQs7HC5ypbDpiGJLiAPW",
  "key10": "4JN7DHBmS1VJSheaZbjDwJTxZXA5hMdeauqJMgzoA5qtvGY2K5YLJMTX1Nm474ZhG5GW1wSwDhm3apNsbapYohQN",
  "key11": "5W3mZoBeEQqSbF8Xs9iH2vT98rB27VrBCF8iF3keb5cUHWNTRynECJyjpuXzLWA73GiqzbPbJsjih8Cf3HvR949u",
  "key12": "gqMvMLJto1K81SCwKtTH1bksjsA1m3mwLbPVzbXjwRsAfY757B4TaZ1zA9norFdB1vn1rdikMBJVqNe1L1dvLpY",
  "key13": "3dWNXqzJocHzeY5JVVxz7EzgEa89TZ1NAw8U58Fd3c9MKQZdhpWR68GeFwdn5pVJ2sxT1g3tr2xVvGnp9vJSHLTk",
  "key14": "smvEayKTnHMUNC5pMArX121fP4WF9HWRzUwr8dqYC1bmmkpjPUjf3bnegowvbRmcnfx2ZYAXw5bTqdskaGsw9Aq",
  "key15": "58f5QR1fWVfLS6zNsWg5SSYBGP9FUDeH5Mt4jWh1MLUSg859Tp8Fw52MoPqceQpGbDhdKwZpgJDMpAgbR9nSFQuh",
  "key16": "2sqiN5oHMTKYahW8VBqtPzGxs9CpT8dArw94i31d6BVyPWePHH1iAwfSQ43dvupfrZ7LUDj4nBX8wcdC8Tja78g1",
  "key17": "5zLgyBJbc6f2c9ZdyE6iNrt7agiAf32Z9fiB4i1Vfbjt4HeJLzeArbJuP32iAYKdYCZyFtz7c31mTPfzkWecYpT3",
  "key18": "ViazS9KZuXR8NM3LESWZWqNMnZkBWSw1bDbeowUfEwSDAPXy855zggGgeg2kWW1188TwgpEoNcmT8RojBvRfegW",
  "key19": "PqpzWtP1ttS6uGY6UtTQBLpMwra7zHupwwwsdk73XrYxYckgivFXLcUmZ8KfxzG5sTiAQUXWrtp198ToVZ8XpDD",
  "key20": "62L7nQy8K723JG26i5aXjWeXZfn3GftvKngmCdwHdepEvY6uaDNtQRtyhrLt85vECyWfZQkEaK6jtSPaEyBmtJ7w",
  "key21": "cJY5WVAMmfZCYjapJMEpUyRr14o6yXMNrTmy6LcYSwC2v2Ro4kEdWLZb8FwHGJfNUAnQUjpRAf3FmixmVn7vnv1",
  "key22": "c17Nt4SKkAySmweNx7DKUcxGuAWwhMGH564xQoSWDmUkTyZ5aoUxVztUY7Qcjyd3XsT5ewyS8L5TQuWK4RacVKf",
  "key23": "45TFXjpnxqDtnq3J8LPW3KFSFxBrE6tH1zh8DTk8gLzfesnJQYrsHqSA3tpX8CSzuypc4zJF2oiE4dFUiCvdsggh",
  "key24": "qB2Qa2rYQA16LncpP8KDVWYjC8wD3vAwxZvWTnMZ8nDTac6CZkxgoJHUW3SevJYvmofcKvCU48wWmgd8BzPT3Ac",
  "key25": "H5GtUdt8mLRvSJ7gDvQYAptFT4xoULtyVxo1yzvFfkCjRRa9SZtZCwTrHcV7ytknRwMBA5Y6bzSHCNsqG5FQxWL",
  "key26": "LktFKnvLiVT1XY3wvg3Z8ZeoifBSRU7RHcrdhuo757XdLXb7n2CUSmhZt5isYv9S3WkVd9H1246BHWeaesF3arr",
  "key27": "243sdjMw9s9b7WLzQ7SgLz6PwMaRmC3q1EzacCpm1ot2bzWfV3Nmnb62tj9BF1xGgSHBQoq1hYwyABxKruHBRvD9",
  "key28": "4fRntG7CJsoipEhCc1aEjU4XA9DcsdB9aQivEcXjeL6P83cgsFeF6Sh5C9zySp5mEyz5etxEheGshDq6dT46MFtA",
  "key29": "2kHLzPS8wsXrwDSvfGiwGUdEooz183oZ9z4q2niGfVwEuvMomivzwXUPsbqMG4VEAGf9uUZ8YuASYMdDB4KvHCPM",
  "key30": "2oQr8p2exZkPRk8rWfaJMn4y2LyJv4kRa5noe4HfRwzeNr5Mea1LU5eqDUSdvxfVXTKMC9pdagwtKCTYhn22mjSQ",
  "key31": "2FMXD3tCg5WbZ1xKTRowEcsUk2rZwmcmiHxaiGPBAxQ935BzSqJRGMYYM1t464BnhxuWQQL6p8FoiowWwPcxGSKD",
  "key32": "5nrWYD32TDfackfWz9mW5AW4KVyCbbaxiimaVAhp5F33NX5y59VNtq53MXU91Pb1xp93gTuveJ51dgG36dqHPafi",
  "key33": "5NnUG1qWpN9jBdiwgz3HSZN46H449BKtcMsqZZnMQktnsTrRcEgqnKwHGER3TzQYJvyyhk8LakTVRB16XwiMZXe6",
  "key34": "2GaJf1NHVxBeci71FD8TMPiKf5j6oFXqsjbgpcoS8HytsSAhSM1dpWe8ciQhpNvJeqwMngEcwpAMc5QSmsfuTEb4",
  "key35": "2rnC464mTf1QKPUNrv48xAiz4s4UWZe2ispBywguB7zDSzE8kQuUE8z6s89jjCsDs5RYJw9FFXsxeDe4xKTGKz7E",
  "key36": "4htZ48uZaoynoRjL8GFJMNfupgLxdwuNmHoCyeNgxFRwR1xKtnWJmT3f4cDSs4smDpt2KnheqvPL7gqbjgA5mAcM",
  "key37": "5VdVFGi7PeMT37q7jQgGmh6cK7odTvnvc3aeAfgiqS77ZhvDPzDMAht2wsdLtieTWoCG2qAiHqC6J6mXKBzcy5cm",
  "key38": "PNLqMyjzi97BxZxdBxnfVVYfVGxUkrQphMknvgSJSSKPkZZ2ATiyGstehFTRtRiXrEwwzNscgdDq4DK3BuqV2mC",
  "key39": "3ia212kZvCBtHBra2HytXrFz9ufr4agcKWhCWBKAUuMwd95vpHB1kXcpngyiEPaDJnoZEpd8rfMqQrmw1FCZwkPt",
  "key40": "54vFJknCcZWp9e1qAGoekXk4Uh52wBy6w1igxQaVbkPWbDhZATsR7Wf7EhcNKX3aaZmhUbTyvw5pxNufeMPZJSo5",
  "key41": "4MStdx1FZQpqWqLqP7YNwU78FNwu4qgPbreKNwMz2pFcs1Fag7CTVLJcQW1dFxroryfopn22JPXjVwbd9DzRrCG5",
  "key42": "5ivYzt6BUEC2QJL1SZyVboqTUekoPaTXwdu8aPesQnBECFyoVirtPCRS1pr58PD5fGToUFjjaF6FqsEjN9EZJ232",
  "key43": "2EijWs7CpwCVZmwEZ3M7MmdCMMXErTpx791iSt7jD1gbqwpnwajTjs8JGjkXQ2Db7HhQQfX1j9C2NcfyZiXUMajV",
  "key44": "5b4588irsWsYeumgC2XCfTfW6Q8T2oaiwDNZ8ZhMoPe2V2cGYC2Go1JFuu9iw2Ru1aTHhxEMiVqeW4G5TJ77KTp4",
  "key45": "o5ebSH4QM6RVXa4tB9KXuk2RvrZDCN5ib1UKaudoMpbSJRdibs9deVb5Xb2eTGxjjkxSuT5AFnde3AeTmw1urHy",
  "key46": "5cD5Yp7juYYzSrZV8BQmgPauki3dBAPfFs3cEmjwtVzKRzF7g7VANXGNDeaGKVtcJLSDP64WEA4kyw5dSh3uV6eb",
  "key47": "2zuADpjmGY3gX7tqTsceFAAR5PWx8gdtavyo9aMLXwDz8wcPXDAoR8K4DBck7Kinn5d8KyRdyEW4AFiJiTaMYqJ5",
  "key48": "47k6sMVwWQP129F32v1U6t7wyG9zRvitNLbagmStX3gGduFx7dxRopoG1fX12b9La5qLbE5r9PrGvH8yTNVuUGEf",
  "key49": "c4qz38quAbM4ntA2gr16KE52VWnn6rRXKGkrJNa7N6pwMKuseTrvHfR4H1pJCccctnErna1T3raxMGtAEnMuyGR"
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
