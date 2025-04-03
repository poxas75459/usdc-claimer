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
    "vx4UVVk8SZt5snMC9UuBboPgUjBh8Bk1vf6B8EuJH7N5KkoSqjqhQQDCDXrESy5cUxRZTy2FbLHPfVkxw39Szmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gW8LemUar3BNQ43Z9ocxE9GK4sAfz4ETvRnzpU2nrrmNMQXFY7qxyUTMAH6euMu9z3jb3wvMF8LmkesQTK4aYBs",
  "key1": "5RgNVVn1pKvMMTn1g9gGBPvcC6ptEoZKkVKamh6UmYkJeZzuu88ZYaB2FHezu6Gvy9Fd4ojdtWR3zEyKNzBedeCT",
  "key2": "57mSaNVN9bYsc24XeUdhuFWauVvu1jBNNsUzaMY8ZQp2ErUUcFxc2v3ekVsfc1122aqJrLx37zSHKMjGHHMxKiJH",
  "key3": "2SNPjqPvjBh5f1LuZj5cWTtntb9w16CWJ7xkTbFjF82brD6zJVyPsmkMo2ktaHXpUM2qSWwKfm9yxMEZX8PpPzWh",
  "key4": "5emJQeCdkP2tQCwoCh7pcyHYRYNWEwLSfaqmSupmALhZkLNiGH4giyAMaTuz5osrmnQr21eE7YkTHvhXkbW5jswm",
  "key5": "4VCc3wYiEB6BUa6GthCV2MHQGfWMdcrFR5QT3ftZ8nFyzqmu37oNkYiLbNxzT5rmACZTJSbZsZNBJncJQ2ujUMvT",
  "key6": "TQrXTr65dH8nYLWMzYMH7ZoopuGcNmPFZuJbaM8ors9EvRkDf2TYzZ9aXZg1kwEqYYrhQWEdpDqeDmpUoamL233",
  "key7": "63StgEom1UoWDVmkQ1okgvQ8L9kizR28AAsURjaED7K8FQSfRkU78oMJCpBYWQXYVHUFNaoEgFsattG2UnRg1dE2",
  "key8": "4jiPRfN82vyEEqKpLXB6gp89zkucJFRH7Lp4Zw5kbVYKDXMotN6nA4GrnYS6b5hmaKtm6pePnyXTNPaXRoDgCVk",
  "key9": "3qxSjwaaptZwPaMDwQe7qCe33jQfi1mf9jwYyBitAaaELKJ7kcnXP9g3Yuw3Ufec3qHChetda9cZV8N52GbDNdWX",
  "key10": "2WV4itfmropSVtDKsim19EAkqkKSUXG2HmE8q6bxKJETjUzamvLFLZo2gXMyGgdqb5pGikDAH3wtXcSit78F7jSd",
  "key11": "67a45jteakQyWaJfTN4n3Xbh5WYLLCG5fsdUmNfzwxoJaHEGTJFoS4jPLuAHNvEHbCLAy6S8hvd4uaMbg1tpEzwR",
  "key12": "xmhNds5CzRDSadNqnCh7MkpAouAtubgrKAAxENLrYMEg8MU5PWs7A2iPoNsWsui2D74iPDbN63fFN15P7hCssja",
  "key13": "2Phk4DyFoB9PnAo2aGUn1uAAqi8wfm6ZG8WWR2TbtvPni4WKz7B2y3XUe52dY7CwgB37ppjgytDxdiFjwN5Sp5s1",
  "key14": "45NSEXgG8jfSjuM48oQKaLWnQpCfqKpicpJLHLFXJuuNa58bNgfjDQzBgsDZN33fwZQqZ1sSDpGWkWwa65VQ2jWs",
  "key15": "n42AxsLJVWYN76bgbW93qgGggaMNFCKWTP2bRxJyU2GBPjGYg5VXFXff8y9f3uy1KM1zYjsEhzHfUMatRku5XFU",
  "key16": "2jDJHjobCECJYZzKDS2VAzrs59KwWjNM96eTW4UxQbNdgKy19JAjmHhuhC3pARjJtuqVfpJtMEr6xqHVt8esHW1b",
  "key17": "66qQ41GzPK4SKHH74Yyi4FTcQtcgCCMZDmjTNkRD8Qj1xanex4mAsaVm4uXPMmrxw4nru76hM499zPPbTwtJBQYK",
  "key18": "3GwLUucSCF2hYatjDhcmRLJ7ubWveQVmTL9fWde1xgc8uSffTGEsT9YvWQHRTEtRbeLHpY2HM31G9ZbDuHbchZXi",
  "key19": "5Txc7NdY7hEwgL3Wx2218Si7ZF6RPGV8Rf9UEhuTMoLqT2FP7e5PMSBtHUgtzZwjU6Gv8kKnpqVC6aAhhwxe3Jeb",
  "key20": "2Zw4yJJBSU6VL9XxYCSvBpdqSdZAbWGQ8R9reApHSaAdMTkngcJajXF3bfKE3tkWBF2VZVkC4Q6rxxkWnvx5a5Nz",
  "key21": "2E1BVb9x3NzybBnSPZHEwRkKE7r6v4PhqZhrhZB3VepTt6rAXudgFJsZJc84xqwEFifj8xJxktRLoWUJjpFH8PPi",
  "key22": "5GuQcFe6j4ptEGttU6rfEXTQ1CRMKcv8DHep33UVgYHvAfTBDGyFD5EdL28zF9vvu2ZwqhvepPyF6id2maSsi3dW",
  "key23": "2f4bqopbD4VSn3vJAGXbg9FQBgkStZAMVo4kHpJoN2bQRrxxBH77pUtmnrJQ4RSEsN3aR6qjxwpVC9jbkt1fuGqC",
  "key24": "2UYUenNn4JHs1sJVaq5zTkpWc6C8eAsTcXJwE5gAqNsQGow5ytPogWVGygfuPQTzj1uq68ZYVDoyHXmJ9YE3GgEC"
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
