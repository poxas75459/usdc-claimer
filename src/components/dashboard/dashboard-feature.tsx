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
    "4FWLn3GrCaSq81yvcQoZ58nYDf1x655Fue6HLF9PM3MXh4bVUP8jJJ5aNat51MbBWtM3od7PdER8mj75N5H9AMe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRQKrDtuFn1V1wurFKuNNwdUe51KGCe9UMEyHoSCqwwQ5YemktcdTpkmvU6CVKT9RELwA5LdzQSi2tZ9BUBSP1Z",
  "key1": "3hv3Jq35P5gRkzQe3eqgr7sUdRoFNG4ZvQzCDsBsCCTTjWz4AJ4q5GDfTrXzM8wB1VmgevWj8gTiE889TdmYWHcE",
  "key2": "2BkxSZ86QvcyXLCHehvhWXc1goc6CSbKiCSj4Re8se7M8RcxPNRXtc3LnfywqD7pJCfRt9jxHk9s3gn26mNwxuGy",
  "key3": "2fWpRsaY8DDhqnAwyn7r35pyRXzpw24SkmFc5UMr6VaxCfeCMM8TQg7NDDzdxP43uWoLVUZe67pEUV4GpRnAZ2TG",
  "key4": "u7mmitsym9p1FgArBe25Yn4arFaLcNDzso6VuLfhv9cYHcjycg9S4bJpPz6Mg6sc7YVSK8Xvskii3zHfA3AjAEv",
  "key5": "3btqF9UohXtHt19eQGijAfx3hKBivm6UbxcUkf6GWZMNcf6x3qy85P9vgrtAM67vRTxTqQFuevWA8CiHcATjWgdF",
  "key6": "3PZtkXSeXZUfCjXyvf8cLtjGzXwAuBMv921rN3PEZpDn7tQQkK1FFhFjM8PEEQVaw83v2DPyyDYUaMJSmuS6sCyw",
  "key7": "3yYze9MJ8Tuo2pPYrg2Z4q7w8kQmied2KvbFXNgfQftizwDgHoCUHHmsXocX27ffF4bKDS1WZ88zXnJe9LnjZR2u",
  "key8": "5GqoBzVZHwg2ixL2rcC3hD7FTXpwsDXYeHV18KY8JK7onacUSsaY41rFdKVG34gPTfgCygKyrbmY4i88MZNFKz2b",
  "key9": "24D4HhNVG8zXsT5hUhBBoBypFuHK4exhT2SDJRWhUfNZwbZujLoPn1fGFSA53ZjWJ6bNrzivPimuPW5kaBSKmiWp",
  "key10": "5TD96AgusjE48DNx6JaE4ax5625kPHKsNxyBH8odRFF1y3byjxPrpVWDHQDJrbUwNYGHYY2u1iwP6TCCAKyGq3Be",
  "key11": "5LWrTFeozw2AmAJ5zLUioPNyY5UnpAvjnePAs6t8irnwBL5dKnDWwRXCjxDcQQBtAkw9GbbEsHWHLwos4xHYbxBH",
  "key12": "2Bp3iionUDvpYvZ1PQvpGXzecxwcTtabBZgoaH218cmVTeGUxRTgUz7iRHAeXtq3kFCkH2muBxnAb4i2hAvdmZYt",
  "key13": "NhZKFd81pvUtAfbbskN4kSifp4zd7NTALurev2dHcuGKtXRyvEmEezw4gctAm1eNJoygWU9oNNUCFunxVMge3TX",
  "key14": "4iFEC9ZYpzopxuGWA5436oqevuQU8axt68YYpFFVioLCNzvqaysx4v1yqoHKjSMACShU2F4x6Bsk2r9JdvQB8u5U",
  "key15": "gbbvansKhW9czqmTQjc57AajTYV2u7es92g19dhgq84PUVsA4veZqd3VtkDt9GHJb9TrjyAmxy6LjZg2tK2kiRX",
  "key16": "66iA5Lx7Dj1PhZEUwKYPzQhqaZtXTG5ULCVT4YaUDPNm96jE8ZE3Y9VqpUXVR6DMbk6sBzfE1cPMsY8wZXXD6ar8",
  "key17": "2BHj3wuZF58J8pqvPVKPLTFL6azY3tnWSmhg5dn6UsowWBQaMt9bcNxtxUQBqBVzPi6dBzsMLro8MXzfAoZTypmY",
  "key18": "3wZV9hFyk6BtZsWqGpaXgZiKyx6E9oCgffmwCaXbh6MCTHw3P53aE8HkzYc7LJA8QdvKAZWw5CsGcmt16TsWVG4y",
  "key19": "2VDrMhfUwPzjLzddMnuoQXgonYQ1WzPv6xK1P7CbjzEHbkDgYwt6sF3wecGsHsiZk6Wx7fezd6MU7cFyeBfLU5Ya",
  "key20": "42D3S2evB8EzcVjsquobEG9rycSwLjAY1hWkwifjGJjSnJawCR8rRK4fN7mEtZfXzkCCoM94oigpxeuscEdCvK6Q",
  "key21": "64rJvFGgPH4QJ1L4JWpjhK5JNPsMHFkWTbgxiHVDCbL9mUmBGWob6Z3o4m4zgWjsfRGQuVgW82Y8XV2hA31RX4GF",
  "key22": "kg7NpCrPGNd6ibJm7B69BGMURsGeJC6rewMeSZAiU2mjd9gArrRKM1E6bSJhkUCRP1W8hRkzVBsVwV8ZF1ByM7C",
  "key23": "4fjLJJuhK8LN9L8XzN9ZW9xVG1NMNebV7XWGHPvPdbCKo1Lj8bi59EyocZqGRXoG76wwpdM9bbpj35Qu9Qk53yeQ",
  "key24": "2hB44eh6Gp1n2JDffBgJJY37Bi5TM5hYcXgJNKnaQid5hh9nmJzRftmkjKLfVcBrbmDgH71FdiyaamYifi9eXkBk",
  "key25": "3RndHpNPJBjZPp82fn9SUQ9xDZHfbSQnkn8bPnag2H317THzNjnm642ogLLtNkRDNtMwPGNSHUWuYbX1eckenEDX"
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
