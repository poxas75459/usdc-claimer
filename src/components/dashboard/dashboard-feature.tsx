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
    "4fzr96Zg6M2JV37WX4Jpg8GpZkaDJUesEWLsnGjvTZ5oEuuzogDb5jXYPWFoZgikGNBGkGEqmWPYUJipaSAowMd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmx9wVUNrqQbgAubVZVK2WXDKGFvMNT3e28Xf8YsFr4dmWHRMnfHzxjNM9LLRpvdncSkCcM8K9XTn3NRx47qxoH",
  "key1": "44JAEGZ1yw4euhRJrCxFLK2Swm2Q1juZhNY3pBDMraMR2FFvamZ8tyMEhmnvDkysP64SZteYDg23TbHWHh78NmPR",
  "key2": "26DcySzbzrMWu7Uzp7LH1tkwQAwNSCFaf4JedtFWgtLawLuPMv7MPb7S8wx31t69uSRGGbFBRfNu9qRT8u7xFGwr",
  "key3": "TNbxqsGiDPS43YW4wFKXS3rwXb5yQ1JhQhpY8pukHqssfKVph2SJ1dnrCXgXuJLm2pAV1mhudXNs4AoxWhcYnxH",
  "key4": "5dRj14BjcRgtxCTuVj8tXuJ6ehNDqHLX7upuKZh84ibwnsWY7H1DeWz4VhKZLpZVjRZ2trwiFFpeoq9VAKyJk8X5",
  "key5": "25w7XbYKAbJZ7KvAuoHQoBQ6rwQbht8Xq8gTn2WG9E3U1b8E33hqQS7h9zzZH2AFUcVcHCtjxgKNsPKsV9a2CwMU",
  "key6": "o8HHgzEQmD5Ym99ydCfLFBfoYEjdfs5KC78EU9bFk8pKjuanuj7BMdCPgK4BXv7REVrMr46N5CNH9SGbTDQLZbL",
  "key7": "2gTs8y1wfpZX2t9GayTstK5opni7V4jRUKtZ5Pv2UbuY2veeBQQRMbRig5o9HeHfuAFPr6WwooZEZ3tiVWxk3z5f",
  "key8": "5CkqHbAB59sZdYaECij2zy1S2b5CPtj4ekmksTZHYYM7TYgpQTMTsLC3EdS5sjCgy7vC37JtQ8N8fDF3ahRVWxkw",
  "key9": "2ahNtMYi64QXrWGntvaBuS62SD2hdsXDJw3YYrJwBqXHiUaxxgsenSZq12pyWGRfwMgsgKfsRSdfoX4KEZx4F8SR",
  "key10": "34oMApU72LwM32kKMMWTpQz6qceb3ttBSbfrAYDWmvWRy4NPiC552uQSTWN9QKozmra5bPXMNVrxbdRizaHhv84n",
  "key11": "2jAmEtqi2BmrwZjETL8Q9p6e8ttrrKKheeYfpPZ8UDZXar19wdVyCeHPJXXexfgGmnUWitKaiaVRKfawkEAakULs",
  "key12": "2dZ8aJew8thvspBwsUpFCsuWi5SrSTBjK3pdUz9gxR8r47n7pR9QL7dy2vziZGRjB2BLUqrqMWqHCYY4VF92cLjy",
  "key13": "3KAyHLcK22XaJVoMuUTJ4vDTC4wq3u1z5NZbyqZrrMypYyaVNb4UPHReZWW6jjArYguvHZ4bF9bYL2uVbcfkKir4",
  "key14": "eSr28fffaR1LuZxPBam8EFMy6h88FXVxiXFydGRDVvA1WAwrRaxG5Pmv3AuW7J6oLSvMo8ZdtunRYRxyraytjiX",
  "key15": "3f8iaF8ewdt2NYRRqWQGRv8xppu7JedoyS95Lxns4xcd91yGq7JAY9DsEFmnddTUKpLr6pYH8sH4mjHB8BhBKKMS",
  "key16": "4hvMQpNH6mUcHJhFfZvVyA5x4FLQXW1YYm3mfQVZSWSGHrb5GptWXScBXSne79V9h2wXLyGbKYZ1fK4AHjXqRQm3",
  "key17": "5GmL5Kz9pKW471QB6qp63JyCUZBAQLxbSmvx9X4b3rmHE7wAvhGYY2Am7euHLUPXpZnVkjCu9w545ApXrMPo8ycA",
  "key18": "FkcVj17ABhcseXFkXetYujuaPeNGrgctmw4XCvVmoBqqqefCPva5WzTCWB35oj3LNzsQd9ygreBFSvkcxcwK4x5",
  "key19": "5Fs2djabFj1zW7hUQ5DFkRduQEJkfRLg9RtWXfVTew5To75qqYseHjK8ffSwRPAABd5mzCtjpNNC8yKGeWmRZn2Z",
  "key20": "4Eq8cH8g6VzQH1JXbVD9egcRVMwnLh8iawYUREhSQ261seTmuA1XAELcNzM2A5xskVDjyc3NoTYwvr61PKDGjHU9",
  "key21": "3geDPg9J6ArKYtvDdgJrxs28yPKNkiz1GV4MZLdU18frogNXxcwEZ2zRdiuXuaTFXKdrVxFFzg9jzYPk8wD4yYX8",
  "key22": "3S5uqtejp1HweGCcQveUQPivVdgqznf7fAnbF7fEaKsFhLzrcaR3SEnz6qt9EYL5wvazBbQy4JQrbQSWXe145ZBT",
  "key23": "52XYp4X22xQJxJeAnebBGd7ngSnVhrvaDA3NUBniEwvWQajmxGC9Z9nASAK6PQHsGXhHD5FTEdNvPMb3FzsHyw4A",
  "key24": "kooMAxT9rVVShaxXJxDodSC2YEpL5fba4t862tXGbC1PTJBpwTRPz72i6vtnV68iN5rg9mc5cih3N8Jok1M7gZ7",
  "key25": "3b3V5hFrGxRJjBcpwTYnYonuLvB1Eh1EEezP8dCHUa4wiCF8qkShRDKCevDSkWzzBw1t4EBGXY3eY5X2ZQa7h64i",
  "key26": "3PCeLqp5FGxAvMvCKhfWkUTG7iXFKvSfFQWf13gJYJ9btndnez1aqEgUsbjS8jrhBt2E27vDQf1tsmZZ92PS3otY",
  "key27": "FC13qpVTSCmNYVjA1TNxaPRZccMzRM9VjWQuhPTDYP1DejvgMoNwJJDenduZubFZ1Bi8BuAnDq2WgY7vweFSTzx"
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
