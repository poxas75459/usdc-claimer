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
    "3TCcrZFseLYXNbpx31uAvdkSpzCj92xa7o7TmjfQNKKN9Q2RAbHXtzjoGD18Q8uz3U38ymrB6eRg3qk9ymJPCz2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPuvFRk3ghFCfv4ZtuXqaKdRUW8aw633FAP83W3AqVFRVCEMUnzymovYBx7vYjCsA5a3vEUSwWRTRie1QyuQHan",
  "key1": "5yZVPkmf1YQDcSZa8unfTE2YfBkMeKX5oGLkRaPhtMyjZR4mecAsM846yzm55aTZvgV2JeXUQropeBu2JY53BetV",
  "key2": "2ULCqvjPLNDoFHRUKWeeac2uKemQoUpdtM5Se7PFnfSTHSFvA8Zh4QoHftHqHkx5VYSXgpQ2WPg6sHScJFF6Qb5a",
  "key3": "63dzZf1fxV7jZzDP5Zn7j1Cvw4mRy1vWv2okhsXaDAcF9imwanA61Q3BY2qCc5oT8zk6ojXGxMhcLZXSCwPAcxNN",
  "key4": "SECfn8aWC7eFViZ9s67yRiUtWBAf23fRexhNGDvj1LMHZMcDDBFppxMUSvcLMfqmMXi7QcRDtbmFV2j2WGhmceN",
  "key5": "2YmSzZxJjjusWUvao3ZENBEcVZfzHJsdoHqqsyxmbCPrq8o5ShaHCQLZ7myv6GhGabr6E3XD28GSGB7Zh9AbJAgA",
  "key6": "3LKzPdtapaY7SVpqYD4HPNbi6y8Gm9VEuLpHRZ1zg5Bgxmb3QVoFQi88jjda3MbaaUQBhUb3UaKHAErWoqbxfc1o",
  "key7": "osK6QHweky8zA3Hw4eeK13pykuMAV5ghaWF4MucxLZJkE6rg3Ge4ukj5yhbWtGzeifCZz8mJ3vcUDZ2Xh3sHv2Q",
  "key8": "4srMqKfyxT4kZzTTjGe4F7HQ4odFvrBwjJf2At23K4JMdPEg5XXW7jr6CDtm9XKH7dpBifwzZad5DG8dNyBMGwkN",
  "key9": "4bgsNgNWim4UHVZwnTfYU2RW1RJ8pPdnSF5tNkQ27hmq9sPFGUXMpchC69SCRCWyzpPViW1j2SP3RkjXNf6T4TcT",
  "key10": "2CyUqygYwd5sjWE7VPct59bwMzb5Ke1eR2xgUaHEedxnaknpZrUYXeqrPw1DjR9Sw8bgn5fdp7QQvGmFg8DSeKvA",
  "key11": "2k9vMmD4CasQ2iJzeouq7XkFa8bm4yTuGDn8E9nhqb6btgBRB3XpCKSZPkpjKFva7VLUhY2QHgcoNYhBCpebDVon",
  "key12": "2nrjqiuhfvg3nckRhYfAUufsWaKCxsieHmATcJjCzmnCGML86p1MwPqp7pyD26Ggb4gBKnYkGbfYFqMKv4nJF54G",
  "key13": "PV2nRTB4hgk6QQgNxi8UnB8Mky47bq89qS1SWeGYqdaY3o9A1PLgLQH4RmpWiC7JQtAh86xo4Ug4CT1Q6hf1P3j",
  "key14": "3trNCkxqVst6aE88zaNhfYDkvhmn7Ghtge1j9EwdnRGWwsgjG33xSwsXoWQJVqdF2ki1TnN28jBow3hzFHEWynCg",
  "key15": "5spHxpQZtPwjRYJhT6WwT5BrtSc6LEctymzGxF8jf7Kwcpc5N3MvBP4pVd81xgUPNrjHFPHG8XPruMKbEXTobGN3",
  "key16": "3o3e4r6eGaNuJREd7urwPx1KDXscG8dqQ9h8FX2hAyc3VriPK2muR7cCqeZHDJ1yYwGCP4ruLEMmG2fW54fWvP4T",
  "key17": "2ZsSoVHUDWDzRHXja8MdztMjrStby2zRkd5MfLRFBTFMjhjgYMKfYKjZ1dgS44J5ysuChc4WbkoM4KeEu3MV99Tt",
  "key18": "5TF8BKZzoWM2TxGqGVv6uoFzG77W3odfT9dEjfMPPYTJUhbSqjmGM8mRaEyh5N2pzV7D8kpMKVq2cJszsKPXaCMC",
  "key19": "2k3Kwjcui1t2dXDWGSqsap3bZMdeyaj1h4TjR3i3QZumdEYtj3siVYc26F1k7zuCAej4jWXJn3dfi3a8eaHtecKW",
  "key20": "2UpfxZb5BntkxKZAaM8PnVw58ohSUtsuoE6BdG4mR1D3pE89MzvhiqiaiH1xvPWhgiUL9RcpFyA74MLF5Hpo841i",
  "key21": "5DbRqALzvRkYYj8cveiwdURcn3mKZEpNWndcJqNygJSB97pZawXjmPDqCDjHeEGoQCqN6whLcLA1LzEACgzztPzp",
  "key22": "5X95kysUeMKbxYyR9ZRC9ECHcdFmquhR8HZWH11rP9Hj5sGjL6TeQ9bawuPFFZFeQ2it1YeG7zz3uXCiwFYKU26z",
  "key23": "4PCSU6yXsVrBwgou3NAM7q35u29zfPUtwiDqhqFquaQD6zieNe5aLGT1g551nU8fVqgFEoK69CGsWTocy9zNEovY",
  "key24": "15ZGQB7RcfQxnQFdkgMyM1swVjmgfiaHis9o67hc7yBMGikG3BLuB6mLfWLTnCm8nSEcD4mV7hey23B8RKK8obt",
  "key25": "4i9YL13JMqduGpb5oUrfeup9Xo79UwS59j6EBBFUYLixnCe7Vg64gtvK3Ht1FhDBWmBPvu8WZ9DU3GKgjyRFjT8j",
  "key26": "3xDCunHj1ntPHmCTctKZPUUcLmN3ahmELK3Q9BrTJchiYvPqkBJQqhz5emsvqyQ95ERToLs6VPoEAyFSwK1vRRiy",
  "key27": "3sWkijAqaRYcL67NFarjcRiS6U9DQCSD7GADSVkjq5y7qiD756jSGWq1VKrA3Bf9hqo6e64Z6zbvvX5BJU9VJgj8",
  "key28": "45TqK7ux7YmMPZCoMnmQBKeCPacVvezFtnwiRdV9GT1Z77jqx5jQBqVPCyK3k8p4yAVa2GhWjR34GTqKG3VcoVoc",
  "key29": "2S7vbbKaczUMp82YRdnvKNAMq8dTZKKveyHk4ALkJ6T2nmN79BtPkndjfzuWt2kKG3tSEP1eBiaV2CzDT7G1GLL",
  "key30": "3b1otvKLdBEHJiabfYSAGXSwCgLKvespSYd58TyfEMiByM6LYCxeHMufdr8HMPHCRBFsRYaNzPQitq2rC1KyHkQ2",
  "key31": "mAFuPz6UBNcThEEzU7xJE4dAeyPcRCosQgmemnr5AzTUCs4YgfEXzjRe2fC6m7fvCmQwdMfPaWiPHbfktxfbsXr",
  "key32": "5QeF6EKEezgDMj2XGB1GNWnEBKLLbFoek7rWFPExjndcpNkTGeDM2rpzNV9BGTGY27GmPGwG3TGoJNqsqXbfWabE",
  "key33": "2BkauWRPE7uXaHbrkmJamuoJY6REVZ3K6hqE8WucCgdfrQ1HPWb3LnaGMSuVKRQr4pRtMA5Lv4ViTQrkZzS2VVAu",
  "key34": "4fDsL8yTBpVp21aeVdsSS1XUxR9rgX4TKx6q784z2UBKFSiaVHTx3Pm722vmzE1bhUDBhTsideUBuh6HBta5UU56",
  "key35": "2tgLo3izsE6gGj7E85qZifY8fcReT687uzwNVpiHxvQZdVNsNZKq9YubvFbzRg2bGLYLArMZ7zYAdCz83LC3aotb",
  "key36": "4N4HTQV2o1adwMq9FrEMm2PrapXgYuZ9sReaHyQwaHNqr4kFhxMoZHsUb3sCaDQJACnewufbXgCW2VQnDCewoB4D",
  "key37": "4MD5zCSENNHcZSgoyw3g3gajPcPqyYgP51ycpWEwvK6RjDWEVeXBtdESF2Pf5Eao5pTyJ4LuEKjz8ub6QahLmreh",
  "key38": "233AoNpFT7CqaiKyMB5EeFMgbYL4uqFafkd8D66EyzxwAkkW4PV67ouShXGuKTLXEgXeiL6KonWhsx6tLxSzGY5X",
  "key39": "5DRbCNXgAhm7QmHX2wx9PWnKR7xyiu1ipLryPAWPP4mbCHUYLthfxxGgQrbvdaBk7nbNjDmmohhwk8xCPAY1t4J6",
  "key40": "nLzZPpaNx2kp1Fvqfzgy4qR1kSzmJJt6eSPwUNSxhqFFctZXBK8p5sJyjZvUG6T6R2TkKZvkL75FyrcAhArvgsb",
  "key41": "iASbnieiVcmXBXuYkUDYMJDYeczWa35nrRooctkfvpBRwmSbAzFMVNMANz376EFHSXdzCzrY98QXTybFUjE8WDs",
  "key42": "49hR5h1uGAt5zHaD41zvuhH7hSsriENs2JZhG8R7rbC6QFSFhqF1ZLJTRYSHfR6FMDHUjBpX8jorP9NgmnfnLX7S",
  "key43": "3P99BjyEbwE1SqKjfcHvrrbHFswtUZ1cZKfon5F7AyXmsEoDXqiEQYuThm4sU3QyzK4WoTLkdrkzN4hNwiXCeFHv",
  "key44": "3yheTXA3szxDpf5mvuowocNyJgrPy8P8tnCk8eygLNr3MT91x7LY1eQLNyGC5tvT399zUuwNiUD8KuuZsLgvnCK2",
  "key45": "444tzwqAxeiWU5xK941CaXRBU7hrRvhAgMtdjjMbjHWs6scoruMqjuQjAyLtWe6Kq4eN3xEUtHavte5YYfr6zMb5",
  "key46": "4uFbBXRjpBseJHLpCemJEBrjqokwsDsN17rrWqZakSgPAdQowkqzuGgqkv1BWTzPu8ZqJWEqiNChBx9wUqSxZFUq",
  "key47": "5KYoG94XNTxp7e9Mr36sKsrjpgKtzNGKofqMT4tMbCUEBZNdMpqYhnEhUD6XKKD31Jra4dTEV8m9c9AxTGGJk9hw",
  "key48": "3o3izPaCvwdEwhTKWcbQKYDcW1HrHF3Ui7TSHabszC1DL9d7ZaRwBPJu59meCakA5VHRe3iE5jwy6MiRNgf8FfQr",
  "key49": "5qCnQmiCccti46cRwxEY1RLMk6iGoYwr6ASKKCDtrsayqXFzdjqB86zQ9X7DFZMoYf7dqkaj2YKeBo1g8cJKzhS7"
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
