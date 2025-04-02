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
    "2NJhQpe2A4D2ATVwAgrEU7WzbqBX7SpsDRevj3QZSrhofyQ2m4o1zJab9iJ2SFKq8ufZ7Rys7xLDvZhL4DmVCAym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632dByWRqZQqs9NfNtJfrC57kCAa48zmhEEPaMTHRueHp6XvJ5UqAStdwwA1KNYiX4q8Z31wMScuqgTwh3qcbjYE",
  "key1": "25YsL7TdraFQFW8p9KTTXNrs1YvVzbmoMKhtzV6qPe9efTeZcDM5GKEonkrt9Ug3BeVYkCndNzt2rAwzSGhaK9V3",
  "key2": "31TPhDbiXUgF5XJK6yw4ba9UpY1B3kmHSwk856svr9Vh6sPqjAVno6mYQJ2LWcyw5auuA2FR3NUc6BNHCKbuSXNL",
  "key3": "zbnByE9VY7wm55b3M3mURsdugEaD8FbZJXVPg66riUPiL9QPdwuW8GbRiamUb9re2smcnvTXfUDTifwnC25ykXK",
  "key4": "3XdPnfV3Q3aSWrBEwAQYFUKRMao5kKSuPhhL9w1esbhRo6Te5omqmHEj6yCSrbfrUrAQze6zb8CCxHFGvCBQKypN",
  "key5": "5zm31mpxeZdDHkGK1jXKvn77QibQMXgjMHYgV8fERvqS1jBUknh7bBqXw2gw1zPgQD7mCABVxQVCCrkuh2TFRLaH",
  "key6": "4FMmbtpQgjY3NWS89b3ZUAUZtwBHQTSPKE1EkYPj8btBSbFun9iPro6WDRr1nLKzQv2oicLBRCFnSo13wrezpGY3",
  "key7": "3iGDTocsm55S2mjhTdmYu8iEo4anCGu85evAufHVawogAWhdH23tBj1m5oGzP2iy45GDfsVrVHdNNReT5Y8oUHGq",
  "key8": "s9cCeFeTJBTmFwgUQeT4QWdD5v16mVpjy7YRV4JNet2F8y2YniqZvd1uFQSHch2zkY914az8XuXUGyc6Bs2UnCj",
  "key9": "5jeMR45FpoQfjEpFbNUtaWTbsp2btXd4AYmM7cAw7ojr9aMkYPeWtf41Zv2nHpexmPKhUTmRcieq7xuWGkQGb58D",
  "key10": "57fz6B1icY97MYoYvcssHapXLJETvyGwSgGiqQRK7AgTcE9bMANxWFFhhaGVmcvio4doeDo989SjnPv24BZ8voCF",
  "key11": "4noZmLW4V6FPs8m5sefwwma9Ys3rXs8EYGYNrGJrU2VHDC2AhS6Ba48pWRgWw6XNCMgNFoT5cxoXGtjAyEMAYas4",
  "key12": "4yfXg1PkgV8UGXEGuko8ZRH1SbSYFMekfihrrppeBimR1G1bzP7GL6CkZ15jQREN1AymvxsQxVvKBtvBLM8BrAA8",
  "key13": "Vr6ZeUrinnjmb4bRzsZSEhYHm7QwmmSnZdK5rKKq2wpyXgYZQ6oN4J9rqQcMDmo83JvzyMKV9XCZ6ypQ1FwaLGw",
  "key14": "2PBBpBT8X5QJc62w9FoMBDahThud7DEdP3zUGA3AFrTyt6WZUXcwNQbQEPZjHUsyw1PLueEepgmeMs5PA8x7Usep",
  "key15": "3j7JdcdZKETRSr9TxVb629DpHBdhx9BwYfnt2RVaGAx8j65213udSXFyceQgmBRz4Aj6oTHaL8MYDJhXNSF29AZF",
  "key16": "2surKyFtGaWunihXGpQJREtvX8W3jhgEMTCapAzofVG6VcaruXcnV3FgAZEVXZvEEAhPTUB4Dcebi1gZGYNj9X9Q",
  "key17": "3bHQ5iM2XkZcYXDVRzWqa81QG2HQYUpzpyRkzU2ZGAhZ1b6rNC5tSnUQgo9hZFA2G2NjXmcPUzbA875oZ9NxMupS",
  "key18": "3hbbh5hbdG5x9zuvKSdqdiGXnuJDzb2g2VKbbSu6gJV8sR9mR25BKVacUR8wKHs5vePrfeMySTYszVZg1HyukFZt",
  "key19": "2BjCHSNAtYgyKchYNMt47PiTykmCtuFgXSwoutqpTZLNhzB6BTg7kfY5yZ5EJMCFWZAZadTszZjvzvL7DdFKr1Py",
  "key20": "5AG37tHiCAfc7LJqnn3af3obnyLGweDwU2aRC7e3cTtfo8DZF1r49iKT282NKeyUAU5ftHeTPsjdZf4x8LaPh8yz",
  "key21": "3DaKATDH7UdAAertNadg5QEhiRDruY1KwCGT6udDWRf49UpYGAwABJ6fibxZtJJsPcYKGvqaKxaE6QCxEW6sDm5e",
  "key22": "3PhgiHMvuLWyWKDD74DjqNDhXmREZSifzTZk5h4rAgnMFVBDgpPyPe4gXxrUGSLDSEvr6QgieZbwrbz6ypANvxhf",
  "key23": "3QcrGAa3hnQ9r9CYDTFoVe8aXz83WV89seMgufFbixboF7HFeGwaA3hST28xr7PNpqSF9AW2rpCadCJ3xcdG3RTk",
  "key24": "4bwNp2x95BfwbjCW9ygwdroH6sDRDNfCShSUqatb8YHZDyXvgATuPwn1QbFQmiF6cSmbJTU67skAfDhUuhynL5oF",
  "key25": "3SuFDmvnpB4FuvRi3bLAzcdNmCbkCSNKibQycBmYPk81Kcv9ZhpEf8bsK4HSDEEfu1oe8YxWtgaLSxJ7rGbTWbC4",
  "key26": "cxewg3hGvif7zs6HWR7kqYn7HiUs4ZVLb7YguRNaFhG5dgmZqb9hENHquq9UV5cVz65easAPSWJLAuBxP5VKV5g",
  "key27": "3nT828Ry3merb9PYPSGbFgmb9U8Nc1zvo5mBBtoyTRdbQ8S59syG1bYrtFf7ZkUdtDoNGKwAznsEVCM1M1xH2DuH",
  "key28": "2n9jEPCxSyTmkarXeFGEe4LTmavCdWtHYKquKo7aNxdn2SMF9NzsvZkSsWH9XZWxcXe6gE8tjD53D8qkDhYFsKRn"
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
