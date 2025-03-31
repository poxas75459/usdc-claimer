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
    "626WDEJiMK8PbxxWjq1xx3y9WWFASkfyukjUsLfJBjBvfyvk4fTSWqxumX6MuFtNYD87wDfK9VXeWUANZ9344J4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tcQmNqoeVsJVYzj41Sh5eXJLgNP962iAe4xcbz2hMPLeSJhkVXcmwtYusJmYdgwQRz5NaqXCHDZ7rEqqr1deaZJ",
  "key1": "5YTHx3nrUg5Zdn9NFWAEZQcP1bbGjhcN6BveMDnV8CLqcrRmwdZG6CjT2NX2h7h3fN2EkK2tyMNx1M3TGGhhzdHP",
  "key2": "56nJ2iYGMX7D8oFDaDeNUVb46v4BCB3yB5rvcZkyU9BPUtQW9PoxWWdWkY2abpfnw21VvvH9DhaJpcdMWC9wLc42",
  "key3": "SuDBXSLEZAWcpB8zf9eyqLe1qxT4wxKQW5qEny6hvBQFJ7krWnDS72LJmQDhiwTEWdXXFnQNbDWiXoxU5NGTuGi",
  "key4": "3kuzFF6TULt58G4qQLVjyPLigqtqxgTwiexPuCgJqNSn8njSKv4mdn3tBWNASsRUq8fj7uLyCEdtPBrrVGwPzcui",
  "key5": "3ajfDwFMogaZjk6rPzFx7QCy7D1xYKWW8CpzDR7JPjje5sS3fkz39oNGPwRkVmxsNviih9niktWdggCAXxqdGdpz",
  "key6": "3KcxmDgt4dbNtR1fzwDH5w3NEmuQLDoA6vnCfyMtAdXAJrnUzXuvGmuWTxSVukvSC7SXczx3g7kc6R7KRgX9Rj6r",
  "key7": "2iVvBYgDtXAK4jAXpJiRG8hrAWSWXb2mzcHoSi3v4dUzX8vSUNomsYU7L9SB7hjgdNatDCp5Zz3eRPwXJWfeMkdN",
  "key8": "22gPuunhDoJqebfZcY11dXCgGwD2mtfmxr2hJgcipRhiDzx4ujon6RH7DCaHtZFquTF2HxQ18UABZQbeKDGoVgV3",
  "key9": "4spvvQugboFv4jFfNxzGsjfSkKxk1jAhDmcJVL2teC6NHzpBDD9Bo9qnbzsfQWpitQwAgSoikEEDCq2gxCfiaXZG",
  "key10": "iV2CBvMsJxi4xz84hwjQuNMfNy6VHTBJGr3vhzjcnqb5pVKLaXZeSRuBJk9FyosNAoHQC5NrCj9xgGSHD2Amomy",
  "key11": "2eRay5BZUaoaHNbsiAeF1w8kuZvNc1fvaMG6S6a36nPeDG2rYrA2osq7a1e5JK5JhXJgZJvpoGrY4h4zjkbpJWX5",
  "key12": "kMJa22KwhmsSE9pYGdXF5FoEynLVg9kyMenAzuwdEdB6T6454fyHAdpnpZQBSShkt63C57TZC5UDktSr6FCdtXN",
  "key13": "4E8Bb8iMN8gphnMQpTffZUckLtH9yyKT7VVjdD4Kv2vN41xatNUSKx8MREZVia14RFZJc4SD82dyr9WwDGTkQuiQ",
  "key14": "3AbU4cxT8rie1BrQgUeZnNKUMa7a5n79o1SAcyRuwVaVbfUg8GVghRLGC1sMLdZQ1WEpfj5L6au62otaePFZMkF2",
  "key15": "5FPCbaqA576jXpj6wWQTsL1yQRDGaxeThucWcpUfQuzsF99Sy7hmuf8QWq7Ye7BbKdnzEKgU9TJowgQReajS5RSi",
  "key16": "526yXDRmLCuhFbxkZqVXWQ4mqDiP4eEFBgc1xhwtQ8vP7GEMjCZzTF5eTg5wJZyHSyoATreCwpeGUmxw4YYYD4ve",
  "key17": "3o1rCRY8nF9LYH7cHa1dhH5YcDCiHJCN2uc4UcdH7xfYcn6AZkiLsGJL2Wcy841mXNJ64ZRmjpALMSsrxJUGvr31",
  "key18": "5u2cvNpNEqSh4haBXDJDxi8n8SXReB9AM52XqWo8chiJnf8GVAfCN7fo9yFt7pErqJJt51UpvyAbWdshRykSTPRS",
  "key19": "qYoTT32LE6dEo7WxZnMnzsBFXoxDC4GdHjsQTyuRG6p7JEw1Y4dJo7qrWNsAT1XgjPQw8s1sKQ6SEaUho8hMHtz",
  "key20": "QAvZmxCpLMU352YWGr1pXtRa9WAj1H13Q31BYHU5zpdhe9kgJx3n2x58VGe816w6MfvGJW9a5QxVcNYLKBSB62a",
  "key21": "3phAY33hDTEUuNsxcaFcxzW67Jmc3ExaksUpp82YszPUy3C8v2uQ8MAL7oeCTjbdThWu6DAhsWPmupmyoNQrwnJy",
  "key22": "3WrQTVXXR3BwAQYXvJE9hvpnKuZBU3G4DYiS5rvT5nnzg87MTph7pbZKyWxSPRrEfPRhmQEUkgXrgTdGMYZTqPA2",
  "key23": "5Np9gQdhmoncx1VnDVAudE71ZQp2LRWiruGHt2H51cVKQQqhafbyYvHz2Rkf3chSHaSbbvBJXQyK59gXLHqgc4k5",
  "key24": "3bv6G3NiF2kaGzUyUzTYEmPf2JTr3SZg43t4zUWQYtSbqQ5hJHgvtzphQDVcUvFkWbjRg5YMW749WbgbmnUj7kGj",
  "key25": "3brF6HzDYADK5GfyXRfQxdv5Yn2tv9eUJfYKrJ3K41z591yRJSRgLw9E2DEhefY8nkD2z2xGWSh5nLXgXggVC7Hc",
  "key26": "3m6aL3zZ6z4oDeic16qnsPcpdpGve3VVyc7EXNeWpDRahKpZwPBHjZsm6AcZbuVtmNJnTFFBMPHTwZ1RadK5JW19",
  "key27": "5uM2xiqXf73BQDKTkjZE8hTnkR6p6TsUXmYZUihD3PcaMeUsb5AJoEZmCazVEV6vLT3Sn3t2AF1fM5GFGccKqeYu",
  "key28": "4CKt71uAQE1SqoGrDDCWWsJivUJ1hcosShqKhRARQ1LHpdo5GWjMWGYTScJ7am6yWiZG2CmkKwoQbrohwKdnwSnZ",
  "key29": "3Md6y3XtvWbZq1R3Z9w4MpLd2kFNL27JhZcztZ4wLtKwgrUFFteNQ7kq3k173x5Q4GMASsky7uzSdFUq6P8mUr1",
  "key30": "2neuM44jkVD1hWkyr76mmZ4NLLhSXSJSNaRp77LKHByKXBPG7MpUcB3gTomuAprqjnKNickBYGm686rM4cEjs1Ed",
  "key31": "3SnDV1EvF8boULvoycifprmGERNUYQBV72yMDTkZT6drSSrV9EdFMABneKb1N2fNfuW7k2WC77xndiStygY8Kc1c",
  "key32": "YeYanD2VhxBkr1fY2BEpARSjVuCcFyLAqL7r9NpvU3zxq6SN8e1GXR9mkx4hg32VnNkjKa1VgrdviLmw7LCciK4",
  "key33": "33RudCH1a92H9VMPH1QHAJa29ssB8VFGyFhyBoQrxL7S1YjjMHRvkwxiTPuBEteVx91bo7i2FCuEHdHuE1fTga98",
  "key34": "5cy6PSRhbsrFBhFu7VsVzqbXGF9PPXpUzaVxZNdH6kcCJkagsQ9zYvn54kHYJdMMooYer8hyAYLxEEcJTsg6JLJx",
  "key35": "2LovTT41vb2AN6A8LyaKiJWTYbZ1famKbAUtrt5LZ8vNcAg7dUiNn1Np5V3kwWG3Yd4tLP7XNtEuDKpoUzF1baGn"
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
