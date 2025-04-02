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
    "2ojr6L6S796Dn8hb5vbVderFDS9DotrzEGPBVbSrdzKsB6hoKXYhzfnnDFFkj9TindpodFmR4CbKqi8A7jsTCNte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfBF6QeryCuqA43j8NuuUxGb58bAFcAvhUxwvjJfDaQW6kidC7UwrH5w3MneoEtvFYueayDoBCFRj6E6jjUkNC9",
  "key1": "5HdMtoyX6Qi5zv75vMZzrXD8u26yx35bxm1KPmLxSRsMdWosVMp1TWGYFHQwpzGFze4mVUHo48KwWRKcjtfS4Bxq",
  "key2": "37KYZ7mjzrcHPfETMtz19xom8gTAB1b8emHsdvwvU69pM7G5c3AD6kvzyFYbTpzrMxM7VYA47KmdGYGaXkeoXofn",
  "key3": "2EbdTWJZ5haX6SDuikJcayHRSFMxLieaJPrcZLptZFJo66J3HoaQYnHdR123Aab2y6EjjDku9EUjmX5iYG7i5BSE",
  "key4": "454RQi5LZLwGiHMg5zgucNbSKwEE3PnCGsk4j1zEbmDM9jVZsjA5aKzy247JnxVYfgJGsqGzGSa9J5SYszH9eiGf",
  "key5": "2ofFVSpoUKsKfpmRuuRNxBNLHnVc5gK3zEQNK3d3EPmX43NapRTBh58qtH4Nf2572qhzvVEqyDR2xEsuXu3yc6uT",
  "key6": "5VwESXNfq2nsZW2ujBfAgKTHhMLDcWykUEeKdZfTLFZXykFcwNrNbAdtNnFqEEePHEqGkjG46utCmUDkHhhNiQfC",
  "key7": "SfJyfPyoyFqsZci9NJTxCyLmE4TycjdbbAQ9WdiGnKzhH1iJsP6WdS8oUsYmSqLzFmWpgJ9P2EQdw4Y1jac4Zno",
  "key8": "4efu1zb4tKSPzUPx2BtRRH2nVPcLa3tVYD9xjbMLvBeJHRgVfS89kap4CPUtezdPrgpicK8C4YjqG48EeNWwEnEq",
  "key9": "2VKnPnqapDAJ7KPNLEyJGZpYP5FJcYWbcp8gVMtiYU3U4jdXc4oKcT42iAby1LUvm7PH5VmuX9PRJAW8yqa8csua",
  "key10": "4FKpSaUTvtTYc7msDBYmnddjiTeqPfMw9HaMGVVZQbfGz4xrJDzhSggKx5dYikT9rPjB8gqUHzu2W8ftNHU976re",
  "key11": "5GM1LWK44tNJq7tAFQWWyBUZSNT7WiW8QZSzyXznmvKNioWJcVyk7hPSPrSEXRNknXvyYa2FtxczRJi7r5W66V4W",
  "key12": "5nXEp5pCHVaRjT5EzxETuiDHXzaDzEMEHa6JBbNPxcWqCSjaTmtVwcvvftfAx5cAG2gUPcf3JkTWXtiF5GjZyfvq",
  "key13": "2Y2fbq3rBSXYoKAY25e55snqmqeNtBLLdNbBuAKeXqSHA4KJN6LkrG2uck3G9JHKArn4vA6XCWuJobcR2LbLNcy",
  "key14": "2XUUcUYyXETBh8ffcPVGpDhbs3Vb7YkQFdwkD1z6sahL8eiBaQKy14hXDDB8FPomvrxAgJAKuYK7dupzTCy4k8UC",
  "key15": "d1KbCvJKSjxQS6o3pkV5tynu3ewj4eXHvbprBtsNCwwQ4QV4kgRWVpsyBDkxCB25cnPRxRq7F2qkxxv1iywHVCf",
  "key16": "3fS69YcaUcDCuAvRhu98hsjKx8EibqC9Ej8xUffJBjS2Q1Ehc1t2ySpWsP1YHPrQPh9RYbrsc8pserBbjsmM5JfU",
  "key17": "41KAQbuMChUEaTyc4TLvZmqsno6T2SMHnLnZ6XhdRHeQyanJycd1nnBwqkxmdMP1WLUQSeqse1VfkmrMv86NeAs7",
  "key18": "5Bu7BSRgjrvXuCvqiMAch6qVofGrdCGm3bobSjnsuEFXjheo5SMkfynmWW4yuFEhqTqWffbTc5yXQSYnAvWtH36p",
  "key19": "3FzjkHiHXi4iKRVu4fPiPJLh7viVbLZ7TpajKnJKWo6VWHs2GAExNiNTHco5XvSsnAfqi19Z3Eknr9PT8rdZArTv",
  "key20": "25rp9D44C9nZxXQCHUfDxCzaJDCVB4tKwvjHMk4HQvbjfGZZ3gDjEFBibARXg8D6qM4dR84fDRSZsNoEDMEUkvjG",
  "key21": "2dRnx7dboEuJNSGg3KCGLxBVcAPduM2LDaWKum6H7F1QcEenpn61WzjkEasmmw9YFn4JuTzPU9TQwVmtgFy3jUB4",
  "key22": "4MrvR7N5M5bMbwGddfMhwJqir4KJgH3x3VdwTQDETYb94jHQHoKrp2LUGYTf69qePpN9n5TUuiJsLhCcXsBTJ2BU",
  "key23": "4yH6711dLZn2xLFAawKLd9k2NQuPHLD9HPThjdttKTpgo4udCYgUKFyE3ziarFYkkrf5EAZzwaVZ8Xt7sUozo8QH",
  "key24": "2XjjczSZYwrK8tS3DpjQNyawz9gxuyRFniDLBHbKdK5nnH1gbjBLXsaoJEBVg8EKm6CtjFwroiXWdzYvCHBtBSQ4",
  "key25": "32TAUt7mzMpmyyjgynbrvSYPv2x1WCp7UboJoHnJTgaV5KkJj8EJbU3pvJbyNtZvxjjoqo1t9gwWa44jjpjSrnTK",
  "key26": "tsee8MiePxFSaJavG8bEpinCzKzFy6sErs64FJZT2zHqDEXmKZ1DXFpMdihxkUBNcjUHNZyPZ5YjcQJNp8DH1bv",
  "key27": "21Mrsi3eL2KGpnMBdykDNheDgcigfRYgWVGhAbHm1VeA6RtP1X4mvF79QEtuyHu6VDHRXWPMGdpBUxiPRRD521gf",
  "key28": "5GPpXq6bhc5kem61Kjc8p6cKzFzpAHxPagm3AvsTWBNbYgqAy7PiBJdfkXWC8F8LjUYs6NAWeh7XUjr1vvNWHciH"
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
