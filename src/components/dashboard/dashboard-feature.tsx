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
    "2C7mfgBGGWdYWCUws8qSdduaB1fE2zji7YHqvTYgBnf8JvMcGdhFxQ8BExJG2u1kZq13KJT7D7c2dd54bNcjZgZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYdhX9DsYDrxM4HaVr4AP9uy67zBDhfdApHJzMDzwLUxTYCkEEXcQswecqpEoP31PqM3zZPnp4T3YE93KhLVFhF",
  "key1": "e8Eaivub8huGcZZe9rjEqKNuDeFcD16jHPR596nN5G2WyHb6b9DQ43jAB7f4wEQ1pGHy6bjxAUpHEX8HpYNuukD",
  "key2": "4p3GwoC2pa4ANWgnQUuv4Z5144xrPsVsAMVRLBnrw4S1mkc3gjVpdGhySywpr6PbcUYCrtQ29HbDybNHwbUnAppB",
  "key3": "54ZLvrcCA7NQENmRNjRFvYBZSzwCPsnrXXK2NncGb5n88cdjvZvayTagFAhgGcdM2UNdBDFSgWPRthHbuheciCpr",
  "key4": "3n4Arxvu878pt28mi7nShup1GTKxsdjWHooTL6sYePDNgsaxMPtv8eDY7hmaf1CSSL9pViDUJgPn18mtX1cTeovx",
  "key5": "4DiqBoahte82GRPcjDUSyy7FbpsEn5qsQo6HbQ6mEMfNbGPhmTpffPzAZWpVFpVYXJB348mtBUD1ZYtKTauB6kMF",
  "key6": "TSuKbXoYiCgXymwVNX9yfa8NjAb8tmjGxA8CebESPnRzTKT6QKcw5pRNcvtdDFq5Fq1fwg7gae9RnaYm6CCvDbg",
  "key7": "51wZGhj4hVfQwvUnDEjrsmdVN1Gq8Jp2yJCJ2qzY12grHLX8JqjkFZiQUULC5C3oEu9DB955WdcpmskwawfhNoZM",
  "key8": "29ekbnM2FZPdnocxaHkDPEi6oFrsriasijN9dHg4nSfpViaGd7DfZHHbEaJW27kMZvezmVy2n7ULhJZ7JJtRGrsw",
  "key9": "3fZXL1RpaoFs9zZ99diWXRcQPcc52W567AGMJoEKqzc1xbaavqkX1wJRuuJ3zbqyehecFqf4o7ggRay19mRx4NUG",
  "key10": "jAEaPoerkBNjfYLbeD6rTCNWAqkg9yZUgp5gfgXLtFEZoAXZQHNcodCRGiidnb9VCY2jx7hoi3Sw9BZG29KtWGd",
  "key11": "2pyrvzesYoPWmAubAzv4EDH6g7p8Ksh1GfKkKqg2B9LBAGgYBnoKZ9CCEjW6AV3wgNUDCZYYdnY1fsPsy4Eeo2aQ",
  "key12": "51tvCSpPEAodo5QVNuTG6As9V1gQQ37SEcZFVqpBTyegHDEyW8GxfyEU9YqRYnBWCVSvBDLyzvR2P2DgNWA6yCWk",
  "key13": "tdD7gSP2AFtb5u6UfUgzXw5gvXKYaqJruJsDmeLRKf2bJL8Pk8dZxZnWyHN98txqQcKQkyiPvooCeKzcK6Ytiw7",
  "key14": "5Di82MGD2ffU2uJcTjU2KKSeM8z8QpenGKYpDT6F2b2pkBAZKygmnck7APapumQ6QUsCpjDV3BT4aAKGUYMQBFnz",
  "key15": "3tRo2AfFLnH4nftJfLtZzHpTpjaLhqHieYaYPg1H8iZHBjRkDqMbPxb9BZe1jre9aL5VvZeKsLbJj5Xhxr3hpZEp",
  "key16": "2owyC7oAMGVzi715CvumjpSpc1C6qXsjjnHi7a79mt4A3ZLaqXApnk3xw9ByefbzzRa4kwpagEnVMW1YDtAHkcYo",
  "key17": "3pjDXivNdwo66TNnpS2XMViphGwZ5Uv4Sh11UsoUHJS6yaReECc2ynvTEznJDLYeDd1mjKXCnJ3SrNw2frw5yTA3",
  "key18": "2eb9xVCUdTUBUueqhZV7bf9ciu4yDBfDFxkt8Dq78fQu3nU8bXF3jL4RN7mh9tpc5R4z388pf5oboH3nATJVjRKu",
  "key19": "WMRupA9UEeGxu6z1p5wDBRYXKUVANztQyc2T3ohRQf8miocADpjTp6AnwxySpEgfn2VKx2AgDkGjLh2KzG2qWLx",
  "key20": "5zGwTM7kBs6AyWS3uUMy81wFf1Q3XSgwvjQKVYGiUnHDZwXabsGmDXyKiUqcQDywmGmMa4HXc4dnEdBfng538nQE",
  "key21": "2UPYA6EUeBXv9coyMXn5zmWLpSd2p4cL7n8tP7V5jN47tsxE9T3sHX6tHMudm141qAb6ZVs81nPTnpek6Nz2y7gb",
  "key22": "5sxZm5iKAf1NtjLyX3iV6zurRiqoSMBxnk8Fp89MquMsXwLoRCiDUwnMqxL1FFJdwAUS1eH62MvbxxV82H1vr4DW",
  "key23": "45aK4L4Cjfhwf5igS5Ssq8gNJUMn7rJJ6Da9c1Vj542TdhTCNwQBgekxDSg7NmgL3sQCoKg1L2MovG11oGdycxPZ",
  "key24": "5mMnVNm6Lv6bz8xmQXaT5VD84zV8xN7KU8Qt5gZXtbt2FH4zbvNkJBA36EBuJpSLTtkbqkMkpwz8C2TQzyE68A1x",
  "key25": "129bpeCxK5uHvb8NXf8htBJ4Lqn57VsHhXpmB8cykrMze3oDsn9BmqbwbwzZsMmyrSuPTBShUtruboEkScAsrFk3",
  "key26": "LK6mScjmk43EwcfqJLqHHGkFaBqnWEFESabZypYtVdHq63CX4mte31V1u9PbB33ENw6CxTSYsVhG29XbFpH3rBA",
  "key27": "Jtyghsa5KuZMteMY9mAL4xRfGtmz1THznHKwKHiuWfNbwJg8VjmdNM2mv8LDiqGYX3PxYPgA2VKcACMjGpRDSww",
  "key28": "4KvMxouGspy7rR2hTYGDrugf65up8vfAnM3qvoXEqd958rnudGC2nFcU6Dcg45oqVKGCES5r43y6CN5r9xAQ8WqV",
  "key29": "3bcAWGEfuAnoNjevVJa1dSyi6CRu8o7XGjVjXui69xH1axDzAr5F44FjgohHmerHBgvAspVpQYWXp4vcT6zJaaE8",
  "key30": "5WaS7QAgnjXFYmsEnFfnKCseLnYHAcorxJFBw4PRyRcvtdaDFDDAR5RcJ1PLfi9T7EXvq4QYGgNEuAUqjTiZoMjf"
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
