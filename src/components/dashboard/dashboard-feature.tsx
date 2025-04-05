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
    "2i2q1xgLstjwn79TL9UjfumR2ha7j49sbb7fpiZuT3deFR5HY6rP66GEkWVyAKDHTbBvRSgEdR1uacs3S3aBiTuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eax4Xzf1ZaDJEKjcChDpzDLuKD6JFfpjR679dLQpFdpzyY4sGARurrfyAAEP65BHyS52iLA58PrkoFZRR1qTh2",
  "key1": "2sQraGdrxHsyjpaxxFuRk8SbwWNh2treFMYKQJ5K4tVKBYaLBhzxceiwEbCVg5gKvcTXJsSRhfVB6LhkB8nsvCCi",
  "key2": "3DuSR7yZH3Ts1w451hNVAaCGGQMEvg5WmnnjPTZ7ihKTNjCLJzQEq7HKZVRUrf9kAzZxXghGG3d16zen8h2PKxCQ",
  "key3": "a1X5AEAgiNrCfYRNQ48eSSUCdYWMuMQ5c2z5pXQ9cEpyvwoEhqsMZa62f5jbRiik2u7G6sbbRpeqoPZoYsmGQfA",
  "key4": "DJaGejAMvpX5WcAz6mdXdV2p4TawP7o64wL5EczkfLescnHxezZFbQXaAupEcth6Qfb68u7pYKCgGpdgmHezR4d",
  "key5": "4o7CkNPAK8hwNPupraeKuGTA9FgAS45q3KJTzmeMcjuNobKhmNv881jBw8mMd8Pcr9s8QsoNyBYsL9gSXczx555E",
  "key6": "64G6VQ4gAmEeaKeKqGRTLCNPw7VcrVnEdY6S5KKuRqN7mV4dDiHPPtG1EYCMjdpPmpC5ykm3QdJDtPZzemrPLE77",
  "key7": "35SzNC5FLd7tYt9yBDtr3ghTU3z3ZfgNYjLRoAAgx5NdD7xYckcsZoxojYL3BxixsZQgTTFVYF3UZKJmKZxuFTBo",
  "key8": "2ii51Hkrsy24VVz5UfLKCi13p1518aYcqSVrNbzGQ1MVnEPvynNs9FAu8FnvB9JekT5DZkDESTMCSdA8VEQXD8mH",
  "key9": "5ZN9whmWqTqjE8t7BANkyG2xpMoGddAq8AczEGSzZ9Db1Bva4TXVMqFpz9wy6WdtfBXQqhGJGVcVM1op6Piuig7h",
  "key10": "53KYdX3iPNoqqUkVLsWHXPu62Yi5R3oqPqpGAbTmK6sBMHZ8uRMtg1VvDxFqSZJorduZqgytnyT2ZX1QB3g1fmCn",
  "key11": "2iiWbKYFjH8n4khpPiTDUDBVbnTRHnJh5EwK1gPMJ9AunJ2qZci1m69SGmhFgUVgn3zSCtpYWgcfEh336hEhV8kQ",
  "key12": "MsCyzLr469ntsNWpKdr7BiqEc8kdXAoGUQ6XVMQNap6QpQnszv8GGCvy931tNfzCPWTZKzSsDLhYFH8gCmkUofd",
  "key13": "3Q8u4Z95hDKBuUDF5P9JbiAGLMMpYJCBcEnCzisMhYVeQeBp4jZkMxVuV2oqqFMiYtkX55KvjkQLwYMkCULxN7Dw",
  "key14": "5uYvUdLfDjVk7DxeYoQzCPLt7wrh7wjHc8BrPZGfyVhXMS7MqwTmtLRiVFH9tEHVJMHzy6SMeRfGTWLqm9zjsEJ9",
  "key15": "4xdzQqGs4gS8gajRzSB6EzBiDdg8HktSYuoVS8Ru9zcxabHF2o38gQyQkSDtaJm8XpmwR7XdoeJgXGvb9CzkE9A",
  "key16": "cnkeYd7iuqBiLLHXZKtPFwUDyoom4BCVdMjKrLtemdVL9rXcCLNA7ennW3HYgNF8rtLevtMcXN8x5W8W7yt2jQv",
  "key17": "2aLeXDpnnQZVX91Rg3R3cUbgCgyFpHNkYfkBgLE6Arux2nZFzQuhWGMtn5Sir2bRETqXpa2TQKeru6gxBPiiky19",
  "key18": "5Lb23uXjTa1KaxoqyJo7ZQAEqHhpwdarGRUa8WvxDExLP2up25WwjEBSPBmXy46DZ1H95YoYWuWJk5fcfxfZ391G",
  "key19": "5CYKB5TCyCyea9RbFmAWw5SyKQrNT5cTuQkDs4XUGETrMSFqNXJPhKrNKsC8aEn4gpyfciGoH9rWdBPB8cBJ12Hh",
  "key20": "21vF2rQ72SdLLvx27NDbTRV3oNPqChQMoaUAjRLnKSjmC4zLJcvtpi5QWYKVr1YLD1bXQtC5vnG6V3vFTm44nZKF",
  "key21": "4VhTfR1VdCfwr3GvEPMWhA8kXpAgeHB5TNsZSpF5ivpYYfzvUZkCqj4YjqQcs79KH5LFQvU8cSwbYmR9cwcJ1ReS",
  "key22": "hB8qbqjdF61ULnx69XAeHw9LfkGFFpk5SrxUBQsgjE2uebb3JZRzWHWCbkQM4h5tWwmcuzH4iHNXwR93SEdNy5U",
  "key23": "4D129cPZ5iprsj66BrhaeLtWwN3fuMB9vsStFPyzqcJRhssparmHfyXtmhCze1EeA3Van4zu8ziT6hwHc1BFVuvD",
  "key24": "5h4TuijidopXiGr7dtACVc2ckG5Bq2M4iq2CzUJbbVxK7D6e1aWHkDkifj8rAmw6gcRYHA95s2Dt5AUcKNTK3KoF",
  "key25": "3urV65atnkeBzuZNox5eqKevgNpZEQh2TDFgsSSg4xQ8nUNAf72oNfNcPAUwMkHqfQ6F3Hgyo3e5XuKqwmEcKjs5",
  "key26": "5tviJTdDLPoAob5tcqZQeGA51276XfGwwcjuSySn4mYCK4G9hmdNUdkXTHbBhW4cUVSf24QuSKqu1YGMgpJZFU5F",
  "key27": "ZTVeetHctsKJnp8q8Y2rDzSEuJkLrbo9yJUB2QozGbxdJpykSJTKd26hrLARN6hkB3ou8UQvCrpjStJhksM744L",
  "key28": "4yL9D7iNR4VqjNuFnVun9K7tcDwT8DuK9D7d5UPB8YcN3LQ4eTZxgzfEfQVQtDqZtd2rQFbuzab6zEFt7BbnYERK",
  "key29": "4eGExnL4ZD78p98nPqUfQHogHfDPqcUVWMozRARXwmVPCWASQyKYtRWeiTLoLrh4m5M8XZuHzAPi8y1zPMx6GBCa",
  "key30": "5rG1t2cchrxJMTerevCC8qoDDkda2sLrcb3koQnRshsQjxaPns8ciVRMZbiENzes7FtHXMzQiTTDcAU1Xe6eYwz7",
  "key31": "4pmhaZDYC4JoMG2cTDNBbhKTPe2Fqyo3vhdfTjWB8Z3mNUtxwhp4zU7qTdtWP4XZBCCptPPMogQ1p7zZmJDxYvZ9",
  "key32": "4icFrkgrDc7Z1sozVF9MDPyr8AYq3bQqbN7xd1yLhY4NVzuAAMeUNJHnqrk24fFiT3mMWezggW7shTyyDPGUTfN5",
  "key33": "4JY2ThbNwseM7LDmxkEwJm4DATUkfxjB2w6taAjxBvH4jghUTU11mZueviDJ1FZnUKABjpzyv7AjpbSUm8Z3PnWo",
  "key34": "3mjQhktui4W3EXJWGnHqvuqmXx1QfciziX2iMexL8eWYaeo8rQTJwcwr4FLnafdrdjA1r8kFExYAMCjJhNe6tp2",
  "key35": "rBzq29GExo82E7KA2RCrh6wNvb49TSGyVmkJ5fKnhccVCsMtRST9BiY5Y9MFhP9kUsZXqrcfuzXiEkhQnufHY3W"
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
