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
    "31Y3AxtHuEHxwst4tXjZuhbeCcoE3HhkjpR5ohbB3iQfY9vgVQQdFJiSopV3yVnQVsutj4max2k3DxAz1oH5129M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJHdRGbojDMH6taVVPh4NdebZwCs81d2ehRdQ5oQ44stZfctiY3xZA2rPY9vPqwMmVEwgvynEDUkHPf6U2YGHE3",
  "key1": "4Wc7zXQwNyg9poW6Rxb1nmnzEHQBPdq4Pa59UB3mL3DEB7hoQR9AmHgMosV6RVezrpaahHRnPYrJdL61SgNK7GYS",
  "key2": "4oc4yjdp3Zi5eCKm5Xkn7cfUJgxfyTEg9NH3JAWuna8pnL8SvHSRzMJpvpTuFrha6h8JXoQsTw7opd6aRp97nL9y",
  "key3": "2WD1xKcNMrFjupb3JWjGkyX7by9AhFfXHcPoJBVeCgjxfkRNsJ8F1WdjvFUKAou38CzKzi5Zw7uPNDZxTZN6sbWi",
  "key4": "5b84JZTn26DjqfRWGHCwmw4KT9E7m81bWFU1b4467QdwdC5Dr8du4rLvg2XeQ5dzXd2KSpjv6apjQrkUPQFPRxxa",
  "key5": "4WN9xArVWzCvg9Z752m2askDYuiVgg8JYWn211gpUGN9Hu3nL5rKYDipyfa8kdHEhQsqHsGT9AVHtfbkresWMkkQ",
  "key6": "MhoqF978ERDqeC26mNRpAp9dHYTcWwyqxGJQPbTW1x4mT5YrWRnmGKT9fmfyhGJm9r4W18oj3XHj2HQ2sNVjt8v",
  "key7": "4jnudjSGo7C2D6vt4PLzho1pTwB7YwwbZVNf9ypws2zMGSyifLz8EEGv15UrY3NMTFsoLij4jaY8g1U9DPLHxmPe",
  "key8": "xGRLTt8xxVaosBrio42z7aQSriCjnPf4CfHJiEmNUyS4rHWktziDyaB8pwnp2AAbD8Tb3uKiteuhX8cFPrwgfTs",
  "key9": "q9ZW87og3ycyCGEwLp5w9fH32SbrWQ7weFfiQFHX8sgQdiiPNWgbys29QBakw8pv3VukyaDy1ZiZfzWvhbh53jZ",
  "key10": "7nEkkxXnzYJyonjmG1bMTm1WV4eRfWHfrVgAmfReQEwAN2rWYskUmQ4NFr8ZAmTELXk788yhkMwdwWeVEvUwkcb",
  "key11": "3gszoa1kusbL2cBT1cAtNsT9ZWGN4FhrmzSnZKA2u2TXx7pjkVm2kmezTByX1paKD4d29GedPDCt1E87bu1GiBuK",
  "key12": "9U6Q7C1FQy73cHy1PhHn7HC3qwGqk2SQkLRroBDWNdpwiFQRJZvsYsdao5DkzVwXQSY21JcDZKjy8y2UYCGwEny",
  "key13": "61VhvrdPG8Bjr5Hpx7Rw2cA2wdsT9B3uBdBwZYrk4hsYgQEKzKoHCSfGfby8WWTX8P5RsX1XzUhWXbNCMV33QX1M",
  "key14": "wXXg9RvevDdNCPz7VQDdoiwfUD8fqkkHJFvW6rC2ZrSAnL9URMb1Xm5YHvLKZ9hZVUKfFs9BvcHpsDtMxGUeCqw",
  "key15": "2XkG4Esm6ywmmF8mwD9aAPv27489EKHKnDPzXoysXDDLR1t9pyeEJqYC7nbDax4EvHAFkUR7MHdGQv4VYkNbkq7q",
  "key16": "63fQ84qoscS4TvCyDvC2v1oRHYcct9inA2esTSJkfa6CQ6RadhKwqmGLT5v1f9ZpRqBX9rVe1HjVhTRzpbGaXYZj",
  "key17": "4xY1BULsicWQer1dCwXrvhdWoAjLiXMH2evhHjmpxgB23MoPweX2vWTJG5gijq2cztM1CdyvqzmwsgYyMhFRn2CB",
  "key18": "2XhFLivav8xT95DDT3QiiB4Xwg9Tm6pE5WkfvsCYXCvrmxmPftAsJbfRZXkodzwU5bsfPgd5y6HJTg3sEdvGrwAL",
  "key19": "4GzoD7yfmvBumodbsVtNqEve9JGeD6AZF4PwuU6jcuse81rZgsnPQhpkmCPmELfbhLjpk7xWEvZ5WSeoHUQ9Naqd",
  "key20": "5zBAbyshTmPhNjSyRVi4Y3TAzp1NuWVJKweEUBZXqq8u2sjedCA28ofPA3mRuvneNT2TDU8mqmeNe7X5oDV4yaJe",
  "key21": "4cnCac7W3D56AjpCWsEsPxPLjFEw3B9KX6sP6VvfUX5KTY93CipR2amf4xB2oKnCSQRmgArFLRxnSULhdRgGH6q4",
  "key22": "5GfheunMpa1uk6zH9pKmmQaaH7UBHeGfNPwKWueAoGR1PAwb6PBX1WaA1iWw9v2tswAAF5CdMC21TiQZATt5J5WY",
  "key23": "jCsfpqQztwrkK7aaa9so1tyGgemg4pHopBuKHqXDow6cKt5fGTU4wfn2PXq5pYyghHA5gJ5Np6cNYR7wSfTHuoR",
  "key24": "5hZfJjDhjuykyCesoYJo9DJw8inyzhgpYKitwkrAuoTzooB3giWDXSVQPFbVVdD35rMs67zJe1goKbauPGkZDKQo",
  "key25": "3JXXxHk2LGMQjwQWpQNh73dVesNnT2a1Nnwyh3PM7NLNXnYFQ3qzPSo3aD7NjCWXV2r14SnMD61w5HinPCZPE9tf",
  "key26": "AtZfhgBCnuhYUKDEtFTQjwHachdYKu7Fy1W69st812Bk5ZWZPZje1DWbyeHiqsr7gf73ZYBuURLZ2gNAfHgfr6i",
  "key27": "4Y4ECpwMsWgW1mXG7GVq3ZBwHVg9RN1r5rt4nke1qPGs7wiraojpumRKhizqtb6NWfypz4Ekje1cz2MDfrrznSmL",
  "key28": "5pXJPhM8kkKV9go4JyMhbqDGPx6HB9eyeqQ8NJLVqdLRydrFx2W19UbMQ2fP4Gvu8epCEQ1VfVXkfhnreTkmZgGe",
  "key29": "27FhsfSWGBf3aBJ4sZSqcR1YQG138xs5gV9xKtRiDCM4VoYNomYk88yKZANjDkVhhH51DCwoTUR7ZmfZffzeKEYU",
  "key30": "TvMQBanJvYY6pLavzimqpXPMPL766zweKKyndj6FmRJwLLboeRuYLLNASKDt7Qc5avT3Pv43EA4wEqFTbPixTPf",
  "key31": "33GFsJeQmuFCSU3UNZ9qV6sBm9G23ysjBZbXZmjD9PKuJcUhxCkSNEYcSGc5aDJxqqctwqUySkbqSvA3VHgvcnid",
  "key32": "p5wGPj9xhm64CgJdVXCU1vEF3qU4FJguKXcSisXmk3kAfnPxT2W8npY6aJbPZXUBhMFEw3yHQBE2tAsPUMFNJtp",
  "key33": "vMwoJJBQXANiKR2LmM7SYucdktyRLX5YYRggBcBf5RsorQxM5SQyiEmRiutsyxqD7JTXkH9rXi71fC2CqrJ2NYf"
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
