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
    "4nC6eVVfwQFWneEbAsdSdeQCoq8eHYABFnRwK3g5nDmVuKPQKEvBpNR5tbMrV5QjuRBiGVjNTvBpiF5dy3WtXXH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8RdmTdfUZ8xuAp1UsFibqAht9T3FJB283S91oUbCWrNJR8dvm9pDVMhtMaPz541VxxomXsw6Qco7geJTuTTBdF",
  "key1": "Yj9yCvFXwSn6KbpP4zeVDP2X8YHr2E5qaQZg8KiQnZnhC1fbnWMw63dR7rKPJwUihpjsX88EF5f7gGd26adZVwA",
  "key2": "3t5Rhwprx9pv56VVeqnufPYKQ6y6CzcNQdxupoAJvmoViRZQQbwN4fMPknv8Yduv7Vf7HWDr2Ap5JK1BgRbgMHsV",
  "key3": "D9h2gmFb83t7PnJzTv772rLuukETAqwJK1mHwJTMkE96GjijaZzkEmG5XVaNVft5aia9vGHCmmvNzTz4iywEgzy",
  "key4": "3Rb6no6Gis7A9ZbykjSaXyTWVwaPD154b9oqfJ7p82eQUN2YXkkJCEiXhXWku87nV4NVo7oQgocyZgGj9uRSG77t",
  "key5": "2eWWS3HBepX1gZRYHt4p5zzJx8rie8Be4n5HZEu8wSfbhribbjZjvrLxtrrUi325Te1dhU7jtZF4aUimaQKV8gsz",
  "key6": "5wHmDmV2WHRKsMKjG9hY6mqLU6kf8nssNmweod1TxaqmCaaxpRJ7ydcXmwMxhs1wujwXreNf6zF8cVhaqUrLWdRb",
  "key7": "52Sw1tuSfa1Ak3Ya6MFMPtNK77VJq914L7NEdcdNNgKHG3DpGjDAjSDWTjEjHJSHuLteALiWxchLcCXbPJoeYjBt",
  "key8": "4KcEAtCRNuEXGFz84kEE3hvatuqb25sq1VhvFz1GPpKvyh4DhiuWoWQZrAA189kKpbLGKQuTaR2BxUYyXV8ykx23",
  "key9": "3tN6wXjkrecHjs2tVFXijWuMdQjGyW6hTeU2ghh6oc9KZwq1MAE7srBh7HCrVGWEWv4kvhw4jcX7Sv6ozeUzyMEp",
  "key10": "5ds2WLWTmssyr3TKZxcu7z8R3ZrFUNHSYpeZjxXTZTjzEMSEx11PiYr3TjBY7a3P6hBtsh1W8wL717NMusKJ25LW",
  "key11": "2RKo97MkMn5tiBRhsstYwzZL12WuJUmk2N7KM8pCyaMYdjm6oMn1KUEsYjgxfZtQMgQoagCedumMWxEHufs6P25R",
  "key12": "2b8LSVT2GqQWX3MA4j8cMRMcVSLkeBpE6sDnhfqtwjUd9GnFVMmMdFHfo5cPXpeHKE2dcJZWNedeFpcqTkCUVhQY",
  "key13": "3aiNexs7cYjn35oZdPKcsb6s1brpECATkn1LPtBMrNcAXMdqTCWPyQmazSy3DmYTgjm3qQTqqDQSAyRG28FpPhe5",
  "key14": "SPqk4twsnQ1PUVhVdPAYRuSRGxgsXBZMYSPCzgTeHxGndBNvcsPKfuEy86aZaF57VDMBvvjEJ8Ym3y9Hx4Bu5dC",
  "key15": "5phoTWKkPFjELCNkNxo3arHG7tP3XpYYaiLVSPB1qALiHixQHgdr3QCiu6wvsins5ZhjPCr7dVqBRRDPjCkjiYVV",
  "key16": "5QsgjH4fbg1QJZ33Wwnuq53Mhr1hkqdgXmUu6yJAEpeC641oYffbkH8d5mJvtUbCGf8BjbUtyb9kwSLqvf7ehQBY",
  "key17": "4sB2uzNTECCgqWZtQvhMHLu8TC3cnhvKSmDWiqr74d9QAjRhrxBjMg8i4tdtYdBPGaoNaDxRCYc55TESt4tY6keu",
  "key18": "4pnaaP29J5a9Y4rE1EuGaGaP2SLXM5pT9ENQt3krwoavUxMLnVhbZZZTpB62tKrmDaKpWQZrLbpMSbdp2tdDL5pW",
  "key19": "5bvFTVNKu6gWXJfGA1ZbawQ7f6Wdrt5HuKmrNjgbqJKdvo2uhrmR4VbnTyZxWn5LjLm9FZt2s9Xt4xstpHRqMiLT",
  "key20": "3s7dAkLbwYW6tMTD42Kj3s5cgQdCW6f2MT8HKsH7qnZUZhTCACws5JBTs67z1DTEhKemc7KxK42QXT362U9QrKtW",
  "key21": "4q7MaZ1fhFPyvVR9RBEQtSK848SRxhe9vgwaQLcjT5rMcquo1JouTRvApWmb2Magz3Dz8vT7zV3BQUMFmBhMbJfx",
  "key22": "5a4wy4A2c9xM5AjgJAWqKj9Nyns9m86uxS6njpAHUSAhQLgv5iCh7yiy9Umpz3thPkN41ckUsNYM1wihWRStTSyY",
  "key23": "2FqVKhNLKDeKRfUQF9QipqsxjmpnpJVhXzBC8Ry895RRFCZbQXjFtEApT7FFfD7hddwAYU1mp4djugzV5eMc7fcg",
  "key24": "2HzrcZUm997rEgrxmnxaEKUDATy8VoJ7s5G2tngEKThXxuT6YMA68HCqcQaFr3TKMCa2viogPMQJXMpXDUemFDk4",
  "key25": "3bcs5U5is6gnXGe6vybSmiyyS9rmsVtAPjZ5zT2BK8e7teY9bY1Hm71cd6HcXuHRU4k64ZCn4Ab4mzuSEuN66Qq5",
  "key26": "3o1HbPAy4NbzPqTSE5SapoJNF476ca9CBsZo3aHHDBsxH6M2rEd2nck8LrotQZcxuYMMVZz5YQC2qM7W85Jjnh2h",
  "key27": "2GAvn2GM2fnq6BunfRM4PcNEX4WDx8ehrLM5FyefkZ9aJ6s9WTnJNwADNWMJXX7LoTRXWt4PiynaSxCFZLUJRfss",
  "key28": "JYiR2FAcVcH4zyseNxHJ1q5ujDaHJwYokfC6K4GE4c31e6RM6pucYJ8ZCKt4aCYdPMntuMRudRV3cTgJXVPLx5f",
  "key29": "4HcnmY7gPUvaJ3icXCg9rFfXrU5haKWcMGDgrFcbEXtuJzYVf9PcAwqJtAjr7pxDoZw8wyEKr6mjkSDJu3P5i2pn",
  "key30": "23uNk8Sov8aC9HMtHynhSQTZEJnKajW6aFpMbqa7NBAPpbzxKm2fRLtsiEfsvCJJzyWeTAVXAPzwnhX3u5NXKNSx",
  "key31": "5oRv1bMEnDCXdngz78yiFitgwJe9Wn6UGCV71B9Hn8M7ig2hjTmTQae87BueWr48Vw1KM6ntTsnjEuRDhJjKx2BJ",
  "key32": "3i2TZvin84itbQ3KQ2VAKfoswqHSxihAuwqgu7CrnRdYaQ4pM8Tovb42cq519e4jEk8aV3yW4VzW8gaQs8sDCiPq",
  "key33": "2A92t4Da2BDTq8q5C6MoBUGsugDpcLKcVprZWUmcKqTs98u3dhXtUc2icRZYTJH6VeWeupSKD1vdTEtGshcfny8d",
  "key34": "3SJV4Nh9uWgNw1ViEZmBVFyXJ5RpyPU9fN3Ecapo678VM4oF7s8aGwdadGsos3w9TRsfdQPEZQGiE6CQ5DXLEWCn",
  "key35": "4LNJgVE89ATk6QhzEHr2fqre9MJ5y3fk1dqvFijuoE45ZxBSEW3GDiXiB6ZwxGcoVBCba9TjCNSRCAXxKhT73FFQ",
  "key36": "utL8BTfkNvzbfyxK3vqBNhr5STKP1gsSQapnv1Y7yBPf4oPkad54GVFnaSLy4evsJT5uLSpZr9TW5yASqFcAogx",
  "key37": "4XHLbZHEGhw15UtyQNv55fXmr16mtv7WQxrZzbTqMY7MA8vemPWHixERStvxL4FeeChZPEemzFC71RncZ1iPo3Wb",
  "key38": "5v7pszn4AQmMsaHFoW7jdsneKx4uYuH8fDHrcPah7nLn1BTDkSZAajj4nyiKgzAqExYnQmrAsG26ebjcaBu1V9Xe"
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
