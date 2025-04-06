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
    "3ZbSNt9kGN3SeFnsxnHsZNongvLpXf5akMvkFfNxd1j4GBC78JENJ76JfpKUi8KiFKC3XfNxEz68m3JWwmpJdvXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ufM2NhadnfQoLb8UEmfKHGEzK8nbCdnwGetmb3JxH5GB5eGTN7tWNNodyu4WwJ7Uw4h1H5fP3X19somV1XAePhm",
  "key1": "3MbjvCtbpxZ1L1H4a9wAXzPKEbCzXHLtSsscgzb8ShYfNopAcqzBZxAsfKpXohXpTMNsQ2rWpVivAv28GaUZtBdx",
  "key2": "3aya6DfuyhwB6ArZGLGJY9uVBSn3jN3o4WgmioAbc23TDTqWD5aRqWKxEMvaqJ4uG6WNgEL3Gcrc11rvkEyz5ico",
  "key3": "32Sxqzafynf2mH28iEjCE3CMRcgQTJ67wTidUTremDycD359CiLVo8HjkjGpsMSpBrjTjfMdNP62FR18jLUQbXov",
  "key4": "7yiPEHkko6hqq7i4eoyekyMMvLpedayW4EP4mNpoonfGPPVcrrFubR3mgYppRrkPJq9FE9RQmz488wyuKS4fxMG",
  "key5": "MAG99prhLXXrQmpP2wYtMoXtZzXeRkzcramaAMRSekLWXp6aMAaSY8iU3JwNsbL5FKzCtrRtq2vm31JG2aTR5Jo",
  "key6": "66mAgCGrtVeNVjfbstaxRnJs7vZrz3VbbrVEwkaKHJSLfdHbwakS6p25ZCKteGkhTjrLPeqS1yZfuB5hWotFBDvU",
  "key7": "8ABuvTWmAW6hGE7MdsU1Dq1sfZNZSzjuYsHRcPbJ186VjG85STA1mLDEJjw1t85cD2t1Cf1dxa34LkcxHZoa1Vr",
  "key8": "4vEjnSNC4nQHWbjZqbT5S9fEzJxaUZxvWuF3bmQhkp73LpTjR1NWokBg94QewoQN7smZa27uSry2ZLah7mJnWVJk",
  "key9": "dW3fD3cBGW7k4sNHLfWG5LeA4dS4rJSneHbQNtTmMiJmBu7GFvMuUtw5ahDaULeXHVBvmrgbo1U5xSVYLwCt8g3",
  "key10": "4j1MUmLT5ABpctByZYN9Em5jYE5sp9B6peBoLrRnxXXfViwoxVLm9bCJthLeiZh3kZ7pAsGU9zpzSB25cjzHMG3m",
  "key11": "ppN1kNeH7mFoR77AggXh5vkA7Sna8N1NRn3atp4MkhLGgnws5Lfj9PDWxiPqwntZxgFr21jG7pCEFvwJCkYHjTC",
  "key12": "2Xx57mTPEeqJcTrQiLgFBfvaFNXiqspPrDSDKXdWFSCwi9b6115khkBsxT7kge3oFXuU3DPXFwdCMqzKVsCzUGyQ",
  "key13": "gBHnBMdE3a5DjCyr32FmeZjBNGSvHh4CFXqFK6asaCuiLfUqfNKL3j9XRjKmBAxVcf1q6R3kyEdJHkUzkRRustW",
  "key14": "37NqKx6TDn55PBt5EmwuCCjWvKcobD7v4YbdPiBfjzVdvEifT7cF33shRfwvxG6SrgV3trfSE6CBNqbDqfS4ezbT",
  "key15": "41cNDeRj4QZ3EHugyTbuBvwoTTkimq8oeGpVD4GJc6X2it5bksmYKQx1NR4HMqP6tyr7YBup1MHMVM2j1hto8iNv",
  "key16": "3E3nTM3RPF2y8h5HuAFwLFwHRrJ3SEKTH9W2eRyMCouowwAWuMygLPESZsupkRonaLuR6TtaBcq8Biq7J9ChHk9Q",
  "key17": "3fd9ZbSLJSKkZ2LRCH6JP6yy5XGvZQbPgFtrLQGAxUcQMFo2Li1dGVXajfRcBb5HGqKNeAzn7WQmoCptH2yFem3x",
  "key18": "5KcSgte9VJj6Dmb7hNqMviqGcmmsDZrccUixHDQpfKPPK8fW7vpYTyhRoqafUerr4X1QiMqdKPg4E1kjXmmwfCWM",
  "key19": "5V5QszThohx7xSbKeMuUvA2ad3Ttk46Bjp1XpgqQVQNGqKcfkNt9TFEsfqWdt5BBXTfVFZrbtKr28AHSRtNvfmEp",
  "key20": "2V9y8THJEZTJDHeVYsQgxYSqFmgC5tn5VZ7PDYKBk8CnVuS682EBnz34RZDopX5FhmaRii8qgAajDXMCCjdxY7J5",
  "key21": "4UWLsm1y6wQJ3EM9evpRM6xCXP6DPSS3rpAoEcGe5bApiErEj23y6ApSK9v1YfhXmVJCksFpuYPbEyVVCc2SfbfU",
  "key22": "2zGo2T5EuiSGEbuA86RNHJVkiQ1mxFqXBWfh5Y3BRo7d9uqGKz22Fb1n7jx2vCxu4XmQttLXNxCt8djcwRxWKWdi",
  "key23": "5TMUn3jV3Hhk61gkVYSPLTPTYKe5CWGJ398jxn6jvpz6i6jViMKHgT2xCURRzh2c1GJdtWcQgEe5iWSMWCiCyD6K",
  "key24": "4KRCkZ5GATsfNgSj1BNLv6kNhpzR4msXccwimpzSdiKDUBhNoPJizauPyzBz1eCP7SLhvrirAyFDpbBhUbN4DU94",
  "key25": "3R9shfe6U2uM2Mo7UULQ4AQxfjD3awi6QDeVcuiJq9bHKSyfXHTT9y5i49V6pWNnnYeSvGnghfqnuznYeHpVmeYv",
  "key26": "5LXwYVpfKwHEBt39zHVQDDFnA75j5gdBT7LQVuJnp7EKCRwJMJ8aH4e2do7Aa1LkuUD4ycLcvUtW5eKSHy3jL3rF",
  "key27": "38ygaRuqA5M4hBvH4PwV8WkyqxedEot5B3YZJM1bhYQGcU44zSvWK271nztQMM4rJYYBUNmtKFKLPeELBNvZwKhD",
  "key28": "gRw1hWpFrqq1GsAHWAYo3e4uSC6me7eVGX81QJbuzo5MXBCESrEiVrbw7kpE2mLuxyABh4E6gs66Dh3s4Q2MzEK"
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
