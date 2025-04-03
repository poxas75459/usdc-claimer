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
    "DQqGygXbBoz9kQDwFtCWv6pdcooS6rtRozJCKFiQuKj3dPe7cHB72CGb1WCGHRq93kcqhXwEe8WxF5BKp6Ph68G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AE1TDLFbqDbfTs3FosRxWut7XfgrWa7y9bR6U8HjtQG45vC3HwCX4syTZQeAnPqS1RjzxMXSx8pphLrFWo7FgUX",
  "key1": "3GvprXWm5eogAwz5ak1VnGrTMSJ56Hp3xJEcECjpXaQPMqMZdnS2jifdTfWwskWXhU7NgT2BjNWYj3Gm6FRCQ1KF",
  "key2": "5dAKTS8mVWB9z21qLseBydsVkZ3Lp52ehuTqA5ufzqzRN46CNpovxAes7nykrdzykZNFmc7jg2ScoAym4dWEvexG",
  "key3": "5SSzGAGoBrvMnxp5NpiD7gf2h5Nz1Ep5AfXButardPyo2moYgWeu4Dk6So5jAkJqNdswX2XEVuyEgTTEbv4DYdG4",
  "key4": "34wK5x8zjzSm4ba9HceH8fgz2V3YeGUEw9uwHusqdVibhZnD1e1HqYGmG6JxD6cpvCyAnXDvmQ83qTeJfYVdPkyV",
  "key5": "JefE1M6vwQi2NzFqZ5ubjvB62Yj4kL9Md9U5mcEuhmoRCJa3s4BeTjbNiF7wo9TnwFt5jHwQnfvwe6qG9dzWssy",
  "key6": "SY9mnALydojw3jYzhBMdMRWi8rXCACMvYAwfqJpgpFLynetj1A6QPdVt7WYjwKALWUkWL6RfY6PmcKA59VvyDVX",
  "key7": "3r7ojzgMwGQnn4BUQU4k47yRfeNUtKJvV8QEPTKa5CZvGXZXSzMYUFzNMoJ1tbmY8MoNvwHaZQwJeEHQzJvPmveF",
  "key8": "3bRTGoXVQX4HsjFjjSDkgdgNFRpgaBic9S4JwMJFn9ppZrvNwo6E3kGsGKmncwrywvbhuN8oS65CbsG3x5sRshTY",
  "key9": "4PYa5K73DkwzA95rzcnQJL3nURyDZbyMqbEyVFhevyyCKCM4dW9Nq11EGMUG7T2zCJJzaE48tzfgiwdxM226vFbB",
  "key10": "5HkEbV8f8SSNoh2VAZMHjRohvs82RRr2Dsn4u3ovwLK8cuSdmHTt8Nwz5ykQEzCU6fVRjpAt7cKzDiXcjD1D6oSX",
  "key11": "5N1mNVjBCijokCbkPjeXeWa7ZCMebJECL4ZfUrWvrHgVpePDjarxWQ6dhXbEQuvYT9qiuf45jiAXDMf8MRU8zDsY",
  "key12": "2ThbTigP3PhxLPG24DZrf8S1qBsuEzTnc7ixnnjhiCtE5sv5yY5iR5FApSehf8hYPwLtiErZ1qSPPtipgseDeYE1",
  "key13": "3UKybLteN4gktLzwGpLT4Q5Fbvx5ZAuVg3Nyv43Ny3u2YGGkkYg76m4p7GmuS9xwsZgJNVdTCxWyPfVu8281aKy3",
  "key14": "548j6pNfG8SoRR97X6kgYVniAgJGHZHfzFYRF3WdSr1ena1pb5Mb5mkJhdewywYMmtnvcPj1KuaMVHt69mQmBnAz",
  "key15": "BG8hEFMmaQgAdyr5kMhYdDJyG4vytKyZL3M17tYgdZd6i4BKrQKmbdDVvv4es96LakEfCCfwf3SSv15Vg8GJw4S",
  "key16": "23zFVKVLPkVtgTXqa3xwcvr1ngAYzKtCzDjXZUAsL77mmueLsiPDV33syRRUCJA2iB5HvUxbQFsmkqCTEGf1KhCj",
  "key17": "3LaTradf7PVqAXJaczoYxmxfxcan1qKZ9mE8unJvLZxnVK6dM7Aq1cwzUzykshXk95VyYGr6N2pxgbs7hEibLD55",
  "key18": "3gNRMujMRa9mYRtNBFoxt1GkDYov1pxeqAcGRzRUe4mvx49FvdxucR9AQVHjNbNAEVFAavq8Buje2EPEEswKeHnr",
  "key19": "2MkhspVxfa5g4msEbAiYL1PFBTXDjAZfpETHFHZNk1cqFwRQ3QsbWaTdPZqqLq2j66FaCTX6dCyGZWDh3kmdR7da",
  "key20": "5GHBiEYLGQ79pfHaovQTDJxthtACk5QSGLwygXDwZ3ASLSq1DxrhhfrZz8Q2JeiZ3A2hiZCXKEjUBkzf4kVtLJpb",
  "key21": "jW9BMHgbwcWkLh4tTYvwAzxuwDoniMbk7DcFaA62xkZYpggH4A32ojU4VBYDjNLXFLjcMGPgrMrNYFkQsZwypNw",
  "key22": "3LfiuGYXiftiY6t9fEaCL1vzntQhwhc6WxoyntFhfAYHccUwxrsap5mq46ZmVDX7xW9dknBEMhbW2zemQBPsySki",
  "key23": "4X9otgjpCJwAbTVuX91HWThJhTyqZxdu1RwVVfe6zJHCn1VzFEM7GQAxdYJ2xqNfyoYJnHmwcFEF1VKcJpQtFt4x",
  "key24": "9pt5M6ro5Kv1tDoNAQE7tKss5ECKsyFxueJ2ufYh1rJG5pzSSn7CxUcUFhScYraUrBna3gyDUy55zTXJmrp516y",
  "key25": "bTkMoXPHFpN66m3yFx6V49T3oYbcShv5VnN3Vde2sFa3cYBCEJY2RhgsH93eE24HReP3k8MzZw7UZzjeQP6S6RT",
  "key26": "25sXKJuyQ15eVEyEGa17ehy3anttuTM54ux2pi31LPxVHonNgUyioQyf6DBUd1pngCXKngU33iq168tpTxMEwzNe",
  "key27": "4qfB9CtWMD26sJEXTS2jHgDfFnT1nW46SYw1auYHQ2VbDeVYHJjxJvRHt253jQFtyh3bvddcvangzosqZkdYTgts",
  "key28": "253FHMGtPpsyQSWt3T2Z7dPkBdsbNz4TfyovHKCB834it1esg3ptiBdEeSTspDuv83gKE9m7hS9TzsEb1ypR1ro7",
  "key29": "58abdADzd4im6zjJkyU6Nv5QBHPZek4isTLWuMxAehDPvFsTHtwJnbYEUi5sxtezKvzevoveyawirjxZvrr7NT6b",
  "key30": "4kVq3JWxeNmFEHGZz89qvmVAc6FcCHf7zK4V2o2CNCLjetMPewSGaM9a8khWsLWrZzcHL3H3Sv14zLS2MLqvZfs8",
  "key31": "5YWN5caG1UgxhZ7duZ5c5i9qwYXCo45m7YyDN7KUQM4oDonkM7vkGvuzwqx6jppqmajmsNLY16zDU4V6B4ydQ3Z6",
  "key32": "2ihMY7V6zDz9x4zXmnm8tpK6HshWLqGKmbhpJ9P2cKy4Jv42PK5DJurEBrzjX7CZxwjazhjkXDwPkZpaa7kTtCWr",
  "key33": "vwjs6Md18URZKfUQTzToB4bG66cNGkac3UZVyB7MC8BT7aAtRFgiFYvFcJkF7juJY751kMPdcNQ3NeifTWiCrxh",
  "key34": "3CMWN88JMhkh8nrwkNqpARt4BaBo1QuAjgCcDEdV3A4WskT4Q11RBQg5h2zoPdaxhWwDCZntpCD5yxNaNKsMvcPF"
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
