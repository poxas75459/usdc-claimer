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
    "5Escudu3DBddm1aza3bhfgZxQYPyPqTbs5VMSsgq3bf1P3DPK6B1Tk4i7t484KvHQnzoKPcSFd8w4kwUG7QiU2Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xr2h3mmPCJEr6UXzyn2rLgzuKWhpvtYdozf4yVkTndWecZ1W7VgRL55Zfy2dsxJpFLq6Tgsu9Wf7VMhQvM3nFwj",
  "key1": "EsTFk7BupJnGRxnoqq8roHE6uyJrUCb6i7Fk4MFtxyP5YDX4XGB4wfBGiMyYm6sPPhKfBPgbsbZen1GNnoDTkGw",
  "key2": "cA5eB9JdHsYDr7TSUr2HKFeYgq3BAEQg66eYD2UqTBJ2FFzSBjPZEX4FjPsRsjva8ttdChKsJ1SwQ58YidfYj6k",
  "key3": "5Ymx2SisVN1DdVadudArZqcdmzGDm7Pr4CAPoBaTntrKCgyFEQUUTszqBszYYkmq4RnuR1x3hGupYse6C1FtPfxq",
  "key4": "FViMwS9QT7GGnr4zMwZDkcveojHAWQbC96FyNgW6shfYTjR82u89GNU64akYpRQzxAPdboa9HG95pXBf94Lf3J2",
  "key5": "62VpqDoyGVPNKMugnSHJNFfxYRg3v9C7qWRomMRTQkFV335piqRnVMNs4LVhztPhGp4bd8vYH9Jd3AKgKF5mLXWZ",
  "key6": "nW5DeHWbV3wCT1wtQznLdifvv2C176TxnTmoTNFAwhuG3oJdsakaGYXfrJRQoV4Yu83U3F8imngrfsGSQv15K5S",
  "key7": "jfn7XXQ42A9UbXmNi4AVPzPB4pmAEfvvf5b3hBGm2cdmc6ujV3Vco15HjaDXL8jS5HMCmvFbP9ByDheVHCxamRX",
  "key8": "Jb7wPCJNtUPAUSURRQZaFTRScSDLXqofNRQQ6sUKKmhvo76T8QRy7FJDQgwMXUHjCAEo1xMSE9Y5nSkkUu2dsdE",
  "key9": "31A2rJr344tm4WqfJhkxGghQfrHmsjaF3APkgbEjnDpYpDcE7BFVGuYseQsKd1GpD2Bn5GJevkLxJHFrjwuRFofu",
  "key10": "128gQksBSBwnZHj5moqqAcahsGDkTQ2mZjbUhiVCjZXj5EQyk8a3ST6CcQooPcez9jDmJXTqP6DoT8gTzcnjusbg",
  "key11": "VtjEF4veqWmhs1jStVdZwViYSB87ZQ41Pg38KyafDopGWtGBF7Wd7cTXDf6sMkUGnfJuWBJarUnUhVnAhAvAjwa",
  "key12": "3kfEYn3c8hWyazBigKkAsMCSuaM5AFVJanKUTozWRVNvFvisqzeAymm9exEJnCvp1sZ9nz2CK142JK3J4UvfuRnk",
  "key13": "26YTmX1vDqyNyN7ympg7jwuCK7N2dAybP31HPSmvcFkD9ryNReVr6E1KWeopWrZfQaRqNXDFN2wfBUEKGe8v6PnT",
  "key14": "4UKNfptRQJfHkrMWerTWmfXFTXawvpkuicmPXDs3qAxJxBjvZ1kw2ACvDYTcTZRyeDkFr6Zhb3TTdHFBP5T68jKA",
  "key15": "2ToF7qgQNUzNpF5mWCyaSkjCV7oAdWB85NYgi16mVyisor1D7eb2Ldso2Hf4BHMrBmbqxCdpRyMg7HM8xuZgAMqu",
  "key16": "4uZCDkhttk9eFGopQjEUeWV1EzZ4xesjEYzQDHejN57n1xd5gfB3f3bd6xFBppCcmV5CMGnhMwwDQs1Sgxh2tn2H",
  "key17": "5Yv5V3pjZ29awkBym9yU4eHqeXjQBLFepzuRwsPL6es6BzKuUXPFDZ3gk5uAouePET7PE6qV1BSvB9ifeqzeb9Sk",
  "key18": "2XD1x19XMQBsSP7J8n6PR8DrkMETmMqzAwmuqxBAkaixavLdBwTcwYwviqcWRbUbGHXPZgMEmT8eGhaQAwEFJdBb",
  "key19": "4tEieT1KzKbkREKEVSwZmAMcSU2AQkqiv7g1NjUG2UUCvS6BSXR5BDt5y8dap3KU7wkgJMheeeSXojQdPnATNvzx",
  "key20": "3RPZBjbnUVKiSoq3b5wW1ZYvxDn8E5XB66xX4bstqzw4ygvsdBe4mDqVUTq8CZhzuVP2bMzzX97tnZuV1fcfRH69",
  "key21": "4kzbaQZHF1NsN5QrArpM1ZwqF8iHuLTGC63wJPKncDjVFPDFc5E1pbmcKmwYcrXcqBuExbMuSCcV3dSJjytWrNh9",
  "key22": "2vEXpoK1EukRJSCoXHmrSJ5C1S4ggVuCwsXG617rjSB5h4GUc79hqM2FNX3HztkjFtVKHS8ASmcLCpHqTREEbi9",
  "key23": "3TzHBTX5SrAxp93RYZWmfB9MCACQ3fB3EhxmbYuj7o1En6VjyZzXToxNdiRjJAetaWbpatMKsbC418KBDVkfgt8s",
  "key24": "494YTTMB3rH8mprmeaEeJtJ8PcESaq44BEZ8GJYDxPQshTrfz87SLHvDFo6LiYL2tERBXqq4YnnZZNG3RHZEdzj2",
  "key25": "3izUvrkYq7AizhGbEEs5ymu3TJUdzv7rM8FxotkZBrVEpwUxo9SeW2ZBoe5uig5yPD2wG3m6NiKa2mDUUCQYWFvL",
  "key26": "3vgDDMWrsoRsNU15i3nBLzLhX9sLnNwPsXmnPtZrk81J3jCcXJu9EdQ8SquEprSMvRetBcBksw35f4h8CkxUYzYT",
  "key27": "4DV1vKNJUXC39WgDXFtVDKokrXeN7LuUdiP3ocFxt77fA7yjyEi3iq8L3Kr3jmh27MonJgpof6v5h7Rd9cMgWrUk",
  "key28": "TtrC9w8VNHEejNgFwNh4Ke456Kuei6s5XCKRztux1WsyTfLCsrr3D52cxTcPkvjSDRshN7HTn7GQFVsTpMCUgvK",
  "key29": "4Ys7DH44wy8cAJ6R46ijChsnmAJJy2hdwqa93DyxNscz877kWH8iFDzT5YebqNLLHys7cEcaechCXnrGfrUt5zXP",
  "key30": "4rZHLQULxL7j5uLPvZz3XzE6SzKzZwC2WMonuerwyXh4bkCYbmS6NTK2QRZFpy7Un1ZsUFtNr5m8NwZAnUzjd1kN",
  "key31": "iWZKyU4MCY9nAJHodfFThT6QL2QBG5412NNk24PHjdjKXypGpWe2kjsS72shRtK1kjcm1NbDfsxvLNLLZGBR89a",
  "key32": "2KULsWoXjH53AoMp3bZ9QyScpYDBpQjNVjRJ2mZisn26shkASYqkUdoAF2mM8X7NvEYDvkNLFtT6roJEuj2aLtzr",
  "key33": "CDAE96f2uLN2V1qfKzvgAQjmMy7Sy8xuNthbqzDkq98k9JZYZhu9MqgYGTCQX2REnhBrKrTTogAf7VVf3kukmhU",
  "key34": "2fW5GTTdmSWVwki7Cy3onD46Y43P5hVRRjqQD17pvYyb5UzHHk9YMqGMnfbh8PCKkfDbUecvxM59poKJGdcN9qLH",
  "key35": "5trgbFx1qCwJiL73EtGBGvkgN5RMnGs7ur8EW3N7f9ptFvL9g2U83awPbZVjzrWFnVtDmSmHhpc7SGTbQzkLtiDr",
  "key36": "1my6hBUrVEKSQbxAoGNDHVRcKQ4t9i6YN7mHRmEsxPhkiS8aWsd8yGWGzRDt6sFRSriV8gGHwi2GEgKKduoHYEA",
  "key37": "5qM7tzbTgELy2iexQWnqiX8Y98woHc6najeKZDW7YSEoXNAuPsAbpr6KezefZF27CxDzHMGYDVytRuRM2VY6uC7X",
  "key38": "3gQDv2gyPLGCasahoiHzgHZHfDx5xZ31LfHcMrueXPYg56B1qCNyd25F6gkwwKPHcGUPdjAq3zWwkuG8ABJfBUWf",
  "key39": "5UTznpLDK87XU7Lp73uBLfxGtUV1xKbBbQXD2hwTBqSZx413a3ZjLG8Q2udapbQCLiBEUKp18f7AWDPCjvPYRU9Z",
  "key40": "4nHMEnUzttNmDsFPh8UV4j8zjhNqECFmsFxXq9hNsdDPCE7AqqzDkbUN4wxudUc1s326PSXL9HWW6pDSsNXkSDwN",
  "key41": "2zjwBHBpQezyMQV1faAUcQkUuZBfPQhb3JEo7yWXeqEYLupuzb3J64t5KTNRptHbR9msXwCtw25UYNeAtSNeSCbh",
  "key42": "5tVWza6bVuvK6ptSSxanbCXpjRRHDN3nmzKNix8B5Mfzb6YJz8hU6mRF8CVcE9Zn94CrpdJT1oR6KhcTaUNvWxGh",
  "key43": "5KJkEuppyySZL3NYdSDmFyV23ijzWWidcrZb25aCHe81Grv8u87djW2JxqC5mdVxKDp5gk2HiX33WJwW44U675n9",
  "key44": "sATRbC93NBuyxU4HQgHUXH8tuAhcFTp2DbQk6ASEqL4jcC46vpULUerhC4aY7uGMuVSxy5Yhtrpa9nzbqpyt2qC",
  "key45": "jm6ZdttoCPZ1yjRBrdrDLz9CVqRRsJiMvN7kRqZnFdAuS8MsXHpJ7ifmgi16j22jBiCmjuZXBKawaqWW779WVBi",
  "key46": "5q9GJxnN2bGJpMtRaF9JcKQTmEbiJQuxKYHYmVtNo2S4PnfqQSjnAEb9JeadkaTQLkShd7LicGWJT1X2iAtUrUT",
  "key47": "3MVWufY9RM1gB3WdYGZCkGpDjZWFD6bNMtVvTgEtoupZVG3sTBRyen3y6RpUdd6pd7xJ9FpCqWHbRW2hu37xSTy4"
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
