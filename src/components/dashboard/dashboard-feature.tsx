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
    "23EKWjMveqf1E3tt5wMSDkL71Kph95CAV575XMjefsntXitgbEvKPF7MfTkytsskzJeuAncNwnX29Qgrs1WWZ3GV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzrD9i7JjZLYvyd6V7yMHSVKZFFxm8rYpbSiudKL73a91Mio487KZVVxWSpJgrR1cVUi6HQovMdt6evKAduvHG5",
  "key1": "3pqoHqpPjvycRYLw1DKmHC3a3BdF7wkJwM7mJnJhYRx7bobeAjXqv9tKwRvVawZQvrPbQRedNob11VSL7vDyNtLe",
  "key2": "63hMVKnPTUWs9WS3FUDWeaX5QAxiZaJBwFMERFpAdyXQC4dyicedLvPHU4PcktiZnHDZxMcqPpSPodijeFP4SRMN",
  "key3": "bAiH9NMg8BqkFw17Eobcd8oGiziJwiMBLWRGNTNJe6YCGVa3et7RZWNpx9J576axRNh4Zz3BfV895oYJ75D6PZJ",
  "key4": "124eQQiC36zBXRxQGvrmLghEF391UftcZBiXNxx3Bb7Ve3JMMHqEK1haifPA7yBGe7KJr4uhavtHBJC2CUyR6WSx",
  "key5": "2oZ2gUfUnjDgpRmuWYeZZGi9XHtCaDdZoPY1v5teBhggE2NSjreX738K9v5faxBXBB4WmwiH8hSAuj65K6okXrqc",
  "key6": "ePczMTs6hTSdvLAKXGjdvoehvhqKNm4Dpmjn4fCHGayDegjV58kTJxTAqYfh9ZiCQvxXeAXPeezBpnAMBK118c9",
  "key7": "4CVb6CQiCDX5UmP5orQbu9rW4qLeK3xfqamDmg2JBbPGFd8Zp7qDgtNryftKCLedvVd6S1JRfoMe4nLcKSARmGDD",
  "key8": "3YrooHtehctY6s7wAnA7GKVQjKiRvai1RfhAULuzq9gKnreYWyQiqTzGsDiprKJwZBjs1TwYB8dHkromdYbBoYCx",
  "key9": "Ne5DTtCR2sF1oXDrXYVjVQqxfAiqszZZRZL4t73f1GP56DNDRsQqA7yWNnivseawjW9CaxdueawYLV5tHrpbApS",
  "key10": "cAh6J4SxuhtWsogtYtV78xZ4XFs55ModNNUjh5GwDFVQeJwpQgV4nEjWACCw2HKTzqxyd9wRyUgHxXCaUWztYci",
  "key11": "2SUYkeZSBtARsLoamcTBXTNSAwFuDNUdaT58veXBzxTKECVPyN27cXfmoQAMvPCk7wmVz7PTSU71aDZhzEL1K7oG",
  "key12": "5SpuFSntjJUe2L7PkYisLVDbQhyq4CYyK7Bci7rEwtzQninn68B1dLdRzKQ4pLzyAkmKveDA8k9rmWZF5DsBT2ej",
  "key13": "2jCGTfA23XTN1ooCcNnX7XgmnjkinZ9wZBVmyK9oyrtpxFMu1DNyMpYJUnvBX6y2xd8cjEGDMxpMimhF87xftMAp",
  "key14": "3iRoAbHaz9RNVD1b5gWAzYpowGWu81K8dWNtwt7c2A5q2HdyUpbTRyTU3gJXY2Dh9QQdk7VhQnGMuK9o3YqQYFQj",
  "key15": "2mdiJZqxuUJuTxJrZgSezDwktWeEYXrKqW4mf5YS7S67HRvgrcrgJuGsmsdDEmTPvFaeJWNcZ2W5vjm1NFFYASLp",
  "key16": "xEwxc1MVzGkEF93kqreZcRERgJfbZyDGhqeoGD9VacrGPBgQnebNWQNb7K6v8etx6tWD5yzcQQuo3BabnC5ZuRY",
  "key17": "YgzeGiuN5k7iGJZ4CHaaDHRmjfaWJHsP1NPWpUGJCLZyAppNc1uMBAPXvat8otSJrBCytpK2NXLrXybdLnb3Xu9",
  "key18": "4mgkiEzjPdia7Toc7SLCPXHiFicKWUZGvxEJiJ1BVZ3Y1mNTiZiAwNKcuuJSKfsi5AFBjXb2DoXkjJCu8V4UhTnf",
  "key19": "qQDuVbGz2fSLqF6Nhh6TTgzyFK4Qwd75EZYfTf14ZQ43JQSQoTYYkbiDoNCsSaM1UXSJ1QbSQktLWMF9tD99vg5",
  "key20": "3GMS6mvE77FJ3NPhBDNsXipq5qgsdfe7F8kg2JFPT8uDjppkaRcLiF2XD7UqbG4cA2yEaXYPBkcnxwVsa48kzBcT",
  "key21": "m6BduCViusa5fDaJRx2zh7DN9mBbJFXD6MNS4tFippNjMMUnffLDNiMKQxX11vhBveF298H6BGosuuE5PoSFvrQ",
  "key22": "5f4Bj5XL7nwXqgC31DSijNzqvUV9N6UDUvp82ZqrpcWBWpjzZopuN5YiwsheAYPxCwuuYkYp3v8hvXzBZBwVc8hk",
  "key23": "2FaRxJv1QT5kP2t3q6W9doLkFgwoJwcY512KTSRUEK9a1crCcxDcTtTbqam5G76KN25Awy9H1b3AwwHjHhqp95bh",
  "key24": "5YRyCuhuqYhdHdTfLRhf6Vw91YMS4KiNxHaRBooZj48TaxRe69erBApQTmmjaew1NhhvXj9yxyikgW2vYGSFc6Hm",
  "key25": "uEZnRzUexLWK87okRV4V2tYCYk52qcGAFtPCKAnThMhXpEJrmtArp8PJKJbvibrpkW1pG6oPwVBs5iu965Deds8",
  "key26": "3XEs7hZoYqc7nSiBLDGrs5q1nKCgP9ejS8caCo6u5KJg2g9rwDTjK2m1uedeAeZEzNbA2QTUGhnigzqVKPTc8ghH",
  "key27": "55x5c4RCLUhcTyY42LZ4yFiYWoLjgqe48tDnVpBZp5ThbxfRUyWLVPibY7i5aiMvog6jXKP4pewrPSEJ1DcunERd",
  "key28": "5ya3RTN5YcnxkEFeN3xZD62Yxe8H4XUWMH8Zfu7odoaP1iV1MCuSVh2jPbuQXDEw32UA3HU1CBqXLZQd8hLyDitf",
  "key29": "MoZUateVVprXHcxZSz9WJJ71A95teejfbwCn4hk7FJeM8u9bxJNLDQkFzCetKS2MtQWiVCVP5ijLAMQWm33vivp",
  "key30": "2gtWXb2tVdQjzWGhgLEALvxEd7X3CwmfQ1PY5aJccY3DJdWC9VjjNs9KCsWhy4cUxZbEWUsrSybPWjhAyg6dSJUk"
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
