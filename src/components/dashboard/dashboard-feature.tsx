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
    "5p6dqjNpKZcvQkr2tY61TzncNVao288jbwYXf6BciCs93roj7jgv3dBaqtPCzVxM9Y5N5dn45sikxdMe6fMQWyoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cTy2abEQEvjiTb5pubkZwZY9C99WRiJ3EdLcK2RAagFS2rHdV8738XTGfNE2uea8CxTWK4PkjghrqmhU2Qdg11",
  "key1": "4wPdFT888zQVMhn9N3RHAf686B7QiAx63ioKVTAJ9TZhkd1kwqHrj2HGyuUxRBugjGTdXitw1NWr1Eqy1RUNASVq",
  "key2": "52McL6XFEdG3xT8YEr54ntoZ2pQk37iE3YDRAUT8AZVwimEE7GbHzpRFzEtJsGyABqiZrD3SmdJkDMGi4qNzA4wi",
  "key3": "5gCwHQ3WJ77xnpbvP6TZUK4s8hnmoXouKhMwYvoSXd1SaRqp3sqP7hv4EXN1yoptUuWTJKezXp3jXsL78f2ogqug",
  "key4": "5GykqvVaQNxge8yS4AWpT9Hxg9RW25CYDcurProN8cfJUbPK4MnRTVkQi4y1zqvePeSoveQxYaEeoAo9944EoDX1",
  "key5": "4etmXAUs4fogEMkGfxLnRui9c564BYr86RrGFdGc8Pof6hiNqLdrEZCAYku6QusRskojVcWhREvfroQgMKaPxkHQ",
  "key6": "5g3u9gdA57mkEjrmQVgBJ14wGHSmaAsrLxwchxsDjsDCs3bfTy5kLoWQftLbP9oLn37xng4Yh7tET6sT7VdtFfEn",
  "key7": "4cSPSvxPKqGFw48tMNBvRJqd7UpUZ2veuyipcEJtqreqPDWc9HSqBSYPQiR9Y8c4hkiD4nhw44XwstDGfs2ZmMUb",
  "key8": "52odX9hFGYzSHtC1gNsaStddH5tY4c2u5U9FHzgvRX12CKCWJP4RB7nsFmua1RisJvCgY2F17kiwAierMn7KK1pE",
  "key9": "5xzFZXRyfP1VemmX2q4CBYdATodisaXGqSDW25vyTvTPNy7vGbYJMWc32jnsqoCCcvMoGdp8TDGFqQKdHc32zu1j",
  "key10": "3LUtrT5eQmVcK3iGksqcFxvkQFFdoPwWKgWfiVZEnEb4EyUT2FfQyHy69kL7syzEqDjjwY913jnRukft3kimzTJN",
  "key11": "JRXF92n1BxGTHmyxqW8oAWMTJPJXLHDVdCgNvBJciaev2doaJqSCLWbwcUncyHZZaEXvxJRLvbnRmk4gmoEg2cX",
  "key12": "5zVfG5oyAbmt9x4uYFWycxiU1KmBEvY8mBSVpu97fhafvLAZ5LPjqBrRUuWu1yr5LuH6Q2yNB8k89dJMhQZhZULT",
  "key13": "4ygwTVytvTYDkzMY7GsmLzfSwbxF9GtCnvyHzoHj194twmWYZ7DCPPmeynB4ye6ejKa7m8XoKPQgsUmHYVwktX5j",
  "key14": "2T5JBLf8emKwHq99RNgBQFrLLk9MobMrtA7gXgEZU2gJhC31eqoZ9BrLKAnRqKgRAFUmDMNmaNoYtLKvvQvrAsxA",
  "key15": "3Qm2zxH1B12hYHHCfTcHWBt1gLnWDNX8dtpp3CkSrXT3FA5dgCnEQqwxNqX4WoMphKfhXgs8g9sDBe9kqfqaFDMd",
  "key16": "4yCUVfmzWJAjC8JmXCovHGYFAFRYmFnS9J4J1c1xaLibfj4UQvpq5iKyr6J3jTumUpMUn5NwTPy1FTY9Uhhr6aqh",
  "key17": "3FYzJUVMPBQmmUWTA6874nPa8Vy5omawGZsear3UJrGY9zSK3x1NwCFKdBZtrJ6K9rSWHqhDPmsTSt4ehELtmohU",
  "key18": "2zGKLSnPVH8A9e9BZMtqaMkCZ62DofSXgwGX8ErKHChdaeHMKVKLWaouEHXfpXwPUutz86HBUa6prVdmZa7hL28A",
  "key19": "3XU57omtLFWsBd6tCMj8KExArPtZzR5nu6PdcqFFfMvK3uPEY6nVfSSNuH8Q4XFt39JAGSEeQVg8wYuMe6XtUEfr",
  "key20": "33uFoTq3rLMifokVApKscLdx2s5cdvkdamUYvFhNoToyN9YSmTx9rFE5dEuyLNnsYbuQgpLzt9eKRRYWZWrhyiUV",
  "key21": "3VSnpzc2JC8dunEJHow2PVT9VsyyxqaVDupgGtFQVSJPR22wqhN9ZUHvNFsm1geKG5bPveLLCTGCREwBurpMXfsX",
  "key22": "2bAu4v6Qc16DLh3HWt6WnHXX8kzh9R9P6PZgyn7HTjDNL8z5yuyBQQhdSRDTXu5p1yyZxpdFUxqPtq3kmHvbsUZh",
  "key23": "4MQjEmsVMHHhunZh7ApaSj8g3GqtseyP9Zqrst9APeG9sYrvHArsH1Ltm3DkvbdKtC7G5uHcZ3r8RLxBZyeqd1ei",
  "key24": "2D5Q5dcE16upKVMYsCyNATBorBw9JCVXJVAMp8XTztTvg3pfsAUwD9kQgGdsjE2Zi4xmLXAyFRpDBRbpjbu6rf7Y",
  "key25": "3vdFwgMke4mb4DdwJF8YSVSpYonbFNXHHnvQPGJkMgZAbTMcvomN3AdRvtuMyCHMW7Ct13f4BRovw587hnoN5Sja",
  "key26": "4TogGFYYtoesSDWSm7udjsvrSDahpv5tvpcaVdtde9mNHy1SMtPsKeYKBhd5Srs3TfQUk7T4gwbXm86dM4EbSwAC",
  "key27": "3moK9om5ZXvxYWXhiCFqSNTziJJVm89KGyTSoPy3cC5ikcJFeLzSM4w17udkEQQfqGJstBstWjVUXAhF4PpEp4DV",
  "key28": "2e2148AfsMo6KfxYSp8URoqWShJNDPVxm1U9ARJnVx8bQimi1BjyaUyCoMuZPPaP6kq8i1uS5kzY44QqPTwTW8mQ",
  "key29": "2CVxBcwQiZJ5mTnonb56ffaqHUDmXaLFQjKqB77HdUv7yb3Ah4GFr9TVP34DCzAVX9WuweaogJYCJW4oy4P6wEJ2",
  "key30": "5fNJkW7kMdrQBHnvMfDqs7VVjGyXDddpB4LcKQHeim6osKVu2KLDFPePTsv3vRwYdfwX2c62VnpanVZWFQYFhtF",
  "key31": "4twWJymgKA6Rmh2B5pnmDXTkZteZMWGSV79cdnLnkqmNQqsze5C8FaZJcK8dEKhqrijz4uQnutDVcrSyjHJ82FPJ",
  "key32": "4WC6UXUjUSfkC9Wo6U6rgA1rDMFGsDYFNL6msHXmgSq3VbiFBC7CKTADJbRkJpgXhqJcusYv3yQDKGCfAXsvmVzX",
  "key33": "3c4NRpXXTpUk3shNbwrBYYmABivx8gouf7JzZGKW3pyALhtjYkdgbr9i67SqVwmAYTAMgsNfjpiVCd7uQuyFB5UC",
  "key34": "48FZq56N9u7jmCBZepY17JASJnAVzrYe7aeiT2Wk2RwNcMm2Y77oEqFKAVRrnQ3BmdhU2gND6cn9ibYdJTyiMQTP",
  "key35": "5yHtvULHLvei3qQg2yFVqwRzxY6c3LggEMiBvEiYyT4BfK8g3myrRMEKZRPgen99mN4vYwEHXic53ZTH7Qf8heFm",
  "key36": "5NQzsPB6d6rBKw9ETBbsAZuiUrw2svmiGckFVQ9ZRqjLhHUURkWoSb5qHQdUVS7kaRi83ZhM4mHGTy4RSkzwYTXH",
  "key37": "3mrNg3MR6ziD3p12vPrjR7aZUGkoE37nAZnjBuEy9BsmZXVcADhTGZN5Nnvgp8uetr5DdCVnufi8T9LwfDYLmAwG",
  "key38": "RbUr5N1S8zxzKLH1tqK3esfyFaBR1HC9Utw1XYyGSabgGRwCB9YvZxMnnan9wzT1sjaaCf6nhoxJhUaF6Ya5Zap",
  "key39": "rVHJXsYbmemi2YcwjRgS9UgCBKyjopwxkJgd1ZXRPJwHduxqC2bGue1J3iuPVeowjkKeJq3yXUVxk9XyeDGQb61",
  "key40": "4FZDr9Fb97YUWqXvzFjU33rb2uJn9Z9fWLxwSypARQ3DFLS8NBTWyrAwria95ddmZQHrU7VFULoZ45ZnNq4xLYCC",
  "key41": "5arSnXeib29djSaKezip8MCSM6HMxKA5K1fobo4iHxDSE2X4rM3QmURP9B3uBcyaqX5imVhoxxrYn9uAvnWyiaFb",
  "key42": "2qZMHVkGopUSGL6joVs5azHzrqtWrrT6C4ocY3aXmGwgk21Y1GzTsk2YpVmnMXuU3zfhQf3NaYZjmmBRDeLUhToU",
  "key43": "3tPAqQtpvkD3opYVuLkCuPFzrJtm842Tk2Zum4ib7RT1YJ11koTsg5cnY3n2aB5ojpvz4EiEBvBn9YuN43jH7aVX",
  "key44": "4Mb7vyPrYpvcddVPCbgXLhF9jQATh5iR8Y2isidFA5WdmGdJqrFVLShZey78iYkHboWAZeYpPGpSVzJoCfvwJrJ9"
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
