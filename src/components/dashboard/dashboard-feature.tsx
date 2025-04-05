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
    "46kcqbA2iMjFnv43HN56ydj9aY8ZqGaiKAzh3NHXr96X2H1DYfqe7RyYFpdH95VWNHnMhZDiKYWuJUetYwfM8mhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwHa4cWZHuueUkD9cm4iSb9KqFQ6MMBmuTR3Md3DJy8KTBBrb8jNRb6My4pNBeqnBnSGa31HgjUKDW2f1dMa4M7",
  "key1": "2PJzd8uWQkbfPL19ezuUWGJNweqR3CWsmReEipbQyFDfVT6eSjUwox7w24scomqLKuBK3z5YsXDVUqz4T6xnE8mu",
  "key2": "4EiP9zcF8NJ7TAa114TpNw75UCgKijE8tZsLuNFV4iuiB1W8YJfxSdfKHkTmKacDi44qJCC3jAVsE6H1eEFkpWha",
  "key3": "5hmXKkC5iiUQ25AjJeLGyhNR46bNFZXGAmV2Qz5sRrfoRbdgLuaMfbyWDb54bTTLbkv9mi5Me8g4SbJkvcUktWsj",
  "key4": "59D1Hj8ibvtsovbXjVEkcdCqrMHohnzbxYECHuJFMvQXVZbVeuDKvEqCxwZXq6QkXx8ujGzYAP9FVXXiFAg2tYDM",
  "key5": "5AiCdUFEUNkfXXmebswzV2yerh93wQ7R5hDr3RbN2DaaQ7KmdeniTQecKEt7V2FwkUbnnSRiF4rXDYgGqztdA6wv",
  "key6": "618iCQbZc95dLY8gWQxQYVFnXBAptd6KKATUS67C2CfAiGAqirduYXv9G1oqZe11QWTkwNMifjFXDy5dh1VbeXgD",
  "key7": "2fy3zBEqgx5MV9KnsgEZtqmKYwKTjECm9EZMqHupN5RBGAWkKirC7MDcGX5JH973y7GUpRaivdZesiKVJCd5uotf",
  "key8": "5CCXRs5Xe59exJgKUNUz5sVxgLpu2Vv7eueM3uzieXd2ki1ajw1S2ahuX8nSRZq4JPS835tjiaoPKuDkDoxUJSn7",
  "key9": "5zjbaUHvz7Tjqz711DdeMMRx6UqKFXtuHeFHV5ZWQojwLdLjawhNC41NA88qy2AyEDRHt2CVSVqrz3WGTAW6sfzi",
  "key10": "2okfapFYQZ1JD1y5RymtjTBb4agw2N77B2RsbzC62gFhbb8BJcETtsrXtTWw7kdSehNyV6xzWymT2NuWkatwmF7p",
  "key11": "V9gvviN48EkYXv4qtd1hEsb888oQJj8asYv1dwF93PzbJtUnTXu3jpNfkrV6Ku96UBoyQ2NzSWtWBfP1PK6tS9h",
  "key12": "5toYZEmstW8g5oiSr37NNJqZ4Sv6MqTP1Tc89Pvk8jooiYzivfMgB2KYCSHoVn7yptV23z8PMPMhANZPXEseVLzK",
  "key13": "6zozjakzxEK3TXfnRGSUsHQvYAQSkE43K7KuZS4wb7snnLuuTBC9V6LnreUR62Wuzz9fmZxQJ7owh9gyBo9dQH2",
  "key14": "42wVTTQ5LGKMHujfq5ePwuzqtsNndwD1VkA6NjQBtETY1VrtiaVTZ8qjkqJRN9kWQWcmtDHpfqMHBEcZhvEWz3MX",
  "key15": "3YHBoVGSgoH5YEdFKioY3ehfU1CwyfJwBjNMmsP7HNRRgThFCVm5xx7aD4h653yQfpLZfmXPVuatzVPZ6Eyt4DCK",
  "key16": "619NATooPPe9nqn6EnL3a1bBPYBKC43V8RUgcUd6z58wZT3bspgG7xQ2o7nncmkVaWjouxZRxmigAVJTDd6yguHv",
  "key17": "4LywQtEYateZA4QKzuomazQrB5vh7QBi9VAZVBZECt83VFEqjfqpZeCDUChrQpmRWgbfKpzJaKvSpzZgp7XTHer5",
  "key18": "4MFVbQdBG7AVxxnhfbZARctXRD9D7KT9xfKzPVtR1ZYK6G6bfzLZZ8qyh2vVJ1dStrJFyRXp38rdYYsjk6wGvYKR",
  "key19": "ni8re1bs6FuryeGoCiU1XGZCesDAZwVR7KPJveJ9pjNmFmzfNpBtfGa3BDmtjxpd6hPAXuQc96ks1aQ4MoiSBKb",
  "key20": "2mSNba91MjC6Z3AT26Fx9mQ9zSMfKitVXhueKpou58BCe89UNdwkZZN1NPwvbEPohDCWueEH7ph3tfryDeySCkcF",
  "key21": "4iMjnkafm7MZsLYq7N7YVvgqGp9cvSWNZJc1XtzjxHKSqcwdbvvwycfVDSBi536vZJ7yQybrT7kWF4e3rFdM2fA4",
  "key22": "5bLn5Pd71QHK2nTyHfNrAPeLxru4vsrwbkhngRquD4cHe8C4RMU6dHXWMvvPEPArim8D1dCNvB54k96tKqWRyWvY",
  "key23": "544x53CNzvM8qguSjSovzQY1L8jRCDjrJ98fANHPG96StXWPDGf7KnGZStWiWze4bKq5x8quyjYVHxHX1RAPFt4W",
  "key24": "5wnVLqDuAqj7o1hhWrKVxFsh9a1dy9LxGSC3c5BKifPTwpQ6a7Lb1Y39WBpfuLEseS5gaQKgeoEETFqkup4CvU7h",
  "key25": "2QQBfRmv31mddJfrcjFNNCte61dpyt4r1xYDcuHYpJCHnDB5pqfohdk8MwiRbpKqE5VfLaQsA39MgsaDgXp8bE59",
  "key26": "2rvbms19BYGUSWmVZnuBywjp4fSQ4GREwFL3pqMNGL2cTJ1Gcdpn5tPKB9785LZryAfmeFkdNrap5MxNpNVaYGqL",
  "key27": "5mNdEbCNYjGtuTkLycndJm7shTXWjZgCxoxKn6Yu9kghk98XunZy5Qvdv44LfVt95wEYdEeCpGFVQMYpR2EJs8Ce"
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
