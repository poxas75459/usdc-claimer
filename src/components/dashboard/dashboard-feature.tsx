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
    "5sHDEQW213HzrR5o2wAQnzNDEw4LdEhT6mRXiaWiS756PgZpB9JyuAHKXGSVmgMcp7aEjx3tWu2vg5hyuwotwpzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vyGYA5xKmvu6GJHq7ifTsSkgVW71WBRbNgmTcHgsFHZ8PikJuiDmYWmeSCG4r1xb7bigHJwM8wpmAm9fDoiEAxp",
  "key1": "27KLt3T7w49y6SSGSjUh23oTZSLHo2CD5U7n85etq72kk9LexrmvwHQqKwuE3pg3b1GZ3re4U6vME21EbShuYmWF",
  "key2": "3BybXwHLWHoALhL1kEcBgThGuunUPz25hxiY5KjMvaLyCvAfJYDYXPs8dBEdaroTS4BXSpdnvQtKQhLgE8S8QASB",
  "key3": "4Pcm9NEuFhAPRGzMCV4uoshwL3WP7JwQJG4muNeoRoAchhvPy6hN4GHz8WYQUBN4ehi7ssfPh7CKQ46eeWHcrZq1",
  "key4": "28rSipW6hntuFfG2SgbkUGfQf6ZA2R96MkCwtoEM7QKFWabxsXDUkaXjz6KnCSBXFDDqFfXBVDFuiLfRxezPkVjk",
  "key5": "2UVFzLSbKxdoMTybkqC6F878YbcGuSpyNZtYYn5eeE4CNg9PWEde8wDFaLQ5U7bVmyEFVgPMSSA8CDGmWwCaNCtM",
  "key6": "2jNtjo7S1ixMqCj9UiJs9kFtCWS8fP7EQe4qDVjK3AJVVCBN6wE2DEgdpprzyNFxpjrga5rZnTKrK8k7pNGB6CEh",
  "key7": "5zau6ewKtMUfCEbdcK9cjJHseNojHgJvYT1Gyjq2dRwJQaZ4CpnptR7A2XUTMZERj7pWHXqkkdQbMHyQsLFg6NyR",
  "key8": "4oBnhWQvbWbwqeveP36WNBkk8GnvgVYASfgdAAY4BJbVcpvNmCvsMuL1LJekMHKTdZsfnC1iJWX558HjS8WG3jUw",
  "key9": "5kFPkiCT7HTaDSrWbagS6BW9fZDbP9LaEZoumisUcbHS54U1UkdZeE74DKv86vSybT64qUrezf1gzEpR1Sq6WoS3",
  "key10": "66rUpnsMHwcjhxLWJvg4FuyDHv4hMYyfU5gzdqkLS6926Q5nPmDEpVKaZzTL8APkdmgEHoWJQYo2f6Y2rd9Mun2N",
  "key11": "4QZNdZF6vG9B9vkmCZQAvF6dd7h41x2obJqtZfBF1QsVwVumFQdSkXaLAtJHmfCEEwKo3jjbQ4XXw94P82Za9aVH",
  "key12": "4kpEs4FEzv3aWT2atbC2p53nsinS4n4ucdTZ7F1d13RXAvghFfbFB5nHU29WqsHiXRz4GrJtvDPhk3KvmvKiyAXe",
  "key13": "2zXTHEVUdwSeovtSBoMxcRQQJWxN6MLNoTPoY8XjDJ5KX1urEYYTRgjByEPYTTD9R7M3ssbrpLmN1JBahxkC4px3",
  "key14": "2ZDvJ46CuSAF2C4vcbRtt5DXzJu19PyW6nUYzfkTcssvKNSQMivmTRjdQ2v7xzuqv45AuGFhzHiMYxK3hE4oQaZN",
  "key15": "nC78dePMc85L9gReRC8dMNPr1o5HhVHAkWbLexhD31oqycdHMFQSju3rDBAPViyKnAndwQGbpjXedq3AJR92tN7",
  "key16": "56BsS4SM6F7u24VYE7RHfLcR8cSawTyZTgCjgvEyvJ3qHHSJiT3awaVeau5isktCBhnsgr6SJGYUisDh6BonPKoA",
  "key17": "5shL1vGT47q2mMAaL79r2QUPygyMPJH5PF2UwUJLTLu4DkNw5PdC6qy4UYFNPiL1F9Zx7yS4BRfjsX44QiAFVdFk",
  "key18": "3FB1edXd37jLSBhhbSRqZk1qxXgyoQUcQ71Hqhedg46qE9NmoxrQHvB7QorhF6A56sorp8g77hra4srWnjrxUMHj",
  "key19": "4n1uDYRDaAAeDALz3fPXpY4gRpqi7p72H9yWXv1KXgonAjpBb9k8gGMzLJS5JTXHF8r6Ewn95tw3Q4K6DKQB8W7a",
  "key20": "4ntgxBURsNcj8zemw51KE3D5thTSG7H73XRqz4GKRhPV1eU6fC9KTht1gLeEUqDU812NnjEfz5bVm6UTya8XgRTD",
  "key21": "2PYF3Nkm6Myx7FBhLgb2c4WjbLvp17N6VNP8KFybnf4asoSNQYJNVQKmL8B168E1dWgvKq1NF9JQVScAgGFNnNQW",
  "key22": "4R7VQsnCRnHx3yJEF4J4a6GRhtd8cH8RtVRhMEfXR8nApFztsXTCBvTWJYehqdGVE2TXDAWXpy2ayAfUeoMS9e9x",
  "key23": "5mjUhVqMRoEYQXTZDtXTiasyVbrY9K1Mb6p535ghSZbD6MptG1dz2K5w2QVGhbWu9ngdL5RTiFidun94gWnDNMBs",
  "key24": "5W7GGXoc7RqdVRqtyY3uTEoWATbXiN1zDdyfPeuscLj7zCWqEiE9umhAKV9YcKWnBBwCfzWSCfwcuZQCGFDPcMJC",
  "key25": "4tCVY1FMtoJkfc9BzPAo7E1e3ZvrTQoR89viks1DcTzbr9TcGEzMzbVSEZ47dFDJKZDqczs86krReiikpghhEsQh",
  "key26": "3LbWzsMRLvx7Bu3gyed29wy51PG2Pm18CqzK8TWk5H35Tbhpkxj9fjbMyKrqyur2KAUTZyZ1Dnndrw4swSiFjtGY",
  "key27": "4bXWDFj9tgXM5NkNCNw2paVJJLEV2dR1Fd1u1AWnRTz35UKevVsbjgNeXNVYiUfreHe6LMhXSiyHUsw5mdagsu5S",
  "key28": "3cBt7TrN8K4ew9hFQ65fbNWMU26B32RjCYQcc9nfYg44bkmAHYeuXvABBVKLPHXWjfe8PzvHr95hS9Ui2FkFBJGH",
  "key29": "3G4xWzCkpjG4uNfMrWFaBWLPU9ViJ6C9EJZHHzJNRkHLUcApKiRi9DLxDrdKpLbye8N155WWvJLVjjocFN18ev6b",
  "key30": "2d328uUqQW9KMvGb3RAhrjKwaPNuCtdykisET1qX9W6uzhLiXAdDVJsHkryPNuQWaevPTCR8Z9HowDR1rMu7guVe",
  "key31": "5smqrZJjZymTbjE8NroLF2RYxKR2doNmhQo5ES2hoqbzmpcXh77Voi2GgWZYgSve6PHnRXZW1pDLjWfD9qwuKpz",
  "key32": "GUhzw3U34t8mKV4WdvBmD78xkEAZiisGAkqvP5KDQJJFHeKDuiAsh5JkJ4d91f9yGAfwPvpWG3LZ8vELkGfUqwv",
  "key33": "3T8vTqMNgNeyCrr9foUAEibBow2N6j59xdP6jEAjAAQzeWERyR8URanD92bWvHzr9FkYkyWhLFDsB6x6pfDoLiM5"
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
