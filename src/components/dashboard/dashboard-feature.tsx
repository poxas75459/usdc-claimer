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
    "2UuBQkYnoLuXtS7GFSPXeuau1hQf8EzACnrtFHRdtwwK1pEhqk9jaPSJiEoznRmqiwC6JAevqyJKuXadfsjSpH6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUdnJ96o7y3B8bWqFpetXqsUF1gdyZFdA8gWy8orb2AByRiH2MSSM5yyehg3t1vovD4bUxCCPVEDvsHAaS9bKzQ",
  "key1": "4km69e7qe3fJW36uJik1FYc8bx2TCbYVpzVHqT83qGQjvAxX13AsX9j75CpYEzGP6e6zgjWT6XKztCFcmwPbWtV1",
  "key2": "2LRRpfFVZmyqnk3oLcgUmpJJYKH4kutNanhw99M3vqhUC2ZtebqJTpyBfM3zBQj1kihV6auRXRbzKNzaFMLdTkRx",
  "key3": "28MzyaZ6b8NCmZHjKfDpaDni9iumAmeFafWUwXjhUMkAHz3MbuEo1ZnBi3DWaEKocK46wSdyursph3RZAFokHdqd",
  "key4": "3ftiwn6YaWiJJ1mynP2NKLB2iSiTtdXmhAm5Cwnw3HxfYMzxbA1vY45MWkh1AKFTqSCfwwcNQUk1ZNHMDxGgJgAZ",
  "key5": "3EqJwvxmAYGGu8QFwwou5QkTYoBmnAC1gsTCjMAW9Zxs55WhYBeN7jK2yPHLSLYMsVA8MjspHTuWC1g64mQ6pBh2",
  "key6": "3GXipzZbodb1C89LGuQpjKuHC3UTwgEEpB8GADM6HSVq7LafAuhT1vrmomyS4Ls1tdRzHcdEFVPFCwgQQ3etic3k",
  "key7": "3jNRE3JCjSxwz4RzUbrnRSrLvsViDSSJBANWdUFm1L8RJ9oFW5KrKr7VHnUD9XR3TMitPG6ZsWmTX32juzWy5HTm",
  "key8": "9GqSXWEkZdekosBFfyP44ChLUvAxP4D3KC33iD6Fp3rnb2zJNmDCMC4RZNgWiiV7qJripTPQUKvi3ueMWF6UdgD",
  "key9": "dgX9EeWppfrcEL9JwsFS5YJFb5i8pstuq5TL622tC48MXnaEXA7qmdjHbk5jBcLgJRk3CJaeXCk9rRVmFBwvqiR",
  "key10": "37BvPNi2YKTXwpHcZgepEvJe3hZVxUKPcQh1VMnnprit9fBhoygUZ9heqQpkganCXJUZKPfU45tQ6TiwwZ1FXqNx",
  "key11": "Bw15SMFMaF7ZYUuG7pupE7YKh9DRFo5HbX4VAqdQ14zL9czbX5vPEJHPPePZBhKAvCnpR4ic7c9afu6BSatbohi",
  "key12": "63bL9XYX4jdoc4LNZbdpqyhfqFwhkBsmKWQtssE8B3vsT6rcYAk3BQvGEWaMa9ux3tjv6eSKsdXxnsexxm6gnH32",
  "key13": "iqUVQF9zHFw4CYQf1JKod9xvscZGwRVBtT9hJUKLQg6Ksa55TLichJb4RNv1tYav3aSr1Yd8rjKXMDciQr44XvT",
  "key14": "5cfvKza4A9dwNZWVFhx5o845i23GsP2ecndo3vsd5WPxVLPBVc2JVmbGuxU9T4Bv9rLCCJpVtxWpHpsKCseUCEYv",
  "key15": "3zJQG5B3rFxfEVkrbLCiFzxQKWd3iztrw1jYivmm6C5QoBsYAiP4yodungsXqQvmTia8fTCkSQ4s4GJgzgCfSnXJ",
  "key16": "47RMUBYzBvgNVwxTc4a1Dikv15HYiq2hmbyQJXc6ndpVvTfTRADsZeLHLr8c5Sut9ZEfFpwNRxshYr2kPNdjwX1Z",
  "key17": "67GucMAMni8iDsLDN7xUtwU6bBzm2oRSLaEx21HQ3u9Fo6GWTcQdussZ42zwMUVWu9QJeLGWWHa4uviAe6JXyePm",
  "key18": "kywyEbSRKtupAeW2hKbXUkdRdDTLnjJzXGhKdx2CFEMhimftMXSCDKpNNtLNLoC49QU9DLWTqks65hbSYegh5Kt",
  "key19": "4MwVoNgDgbpjKEf2LdgJKrRVerXdihSE2EYN41ATWkb8cvFdnoJ5gGac5ASdmicfYLYQhKEEvMmqti2mXEQWgUk7",
  "key20": "2zkVQoFixfZGdChVF3hzAiCACnKkTRte7yJMepT7QT6k6aVx4E77Lg2XmSk25JmCLypERX9wUnBBqBq5qBzS6e49",
  "key21": "24Zbd7rBnBeqQhtp7YXoQmEV5swu8jGU3PH9SMRGReFVmc613H3M1ynirHBJFPxbfDu49PZC3784YVMfTYgGNiXd",
  "key22": "5bBu2oH9WE7egpncDxDSDZb49MdBX3nT9y7x3AtG2TH4qGsKU2W9ETHzhMsqzbqdRYKAne3pW5tb9Gdu9gHDbUFy",
  "key23": "zMLWCo2XmkcSP5qVtm6qPpkbEjSDvKYcDJFMTG9caWs4xAGKK4TYpn2pPWTyAL3M362hBsrwZXeJVrt5tWEi1hd",
  "key24": "3daM7xmZnTb9g4NdhbnTnpq4jfpsA2vNhdEEXEoXiCYhN4tjtZU5qSCWaGLofNoPYpXEUMzQVKp4buA6a18obRV2",
  "key25": "4dR98KJDTuGwCLosstCrkwQWChFCgEGL6aYMMJHxWTedphoMCzWDvJkKpZ2ugG5S8pQEMkL9WyYQQCijfvXXb8PJ",
  "key26": "4YMccCXofGUBBgsNF6wSkVe8iBrshv4nvcR8vRYiY6qof5ATUM47dStZSf77D52M5KjjYgDcJhUrzLabJwqrrqpt",
  "key27": "4bBj4WAANijSAtWjANmFRntgi8RbMf9hfGce32jfVu2kCYLdzVBjSQESXicGUbAeQoYYAutjDzPB3EECKnu1FyFV",
  "key28": "5u5QagttLUUNbJ1veTYtVZACVYnmDju5i3dQvPswQk1dHr3jdPidfFv9pYapxcsGKxGKEjNRkZdpGHZreXnKbXf8",
  "key29": "5zrcJQ7aJ6nBvxKioSjiRCuyWPSSuCyo4JSMGzGgeF6cbQ67BHirZNtX7HTRhn9bepNxVUmDGmZQSsjtELFCxBgs",
  "key30": "5JTT8kW7a2NnWaP4nTzxsE1RMDXGZotaeCcrDTECm9qXkCgpQzZgn3z14VF63TfYCXkjzYjmgQZh7fjoBRFjecBR"
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
