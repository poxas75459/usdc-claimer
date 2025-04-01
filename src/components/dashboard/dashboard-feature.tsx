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
    "2ivqtSduSzKnWezT5yNAuncQwmRTx5yWBBwyhTVX5CjwWjqQpP4sHWBoSuzx3Gi63RDpBj99Ah6kMpr7r2BrptL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3dv3PTyqPbGvgmHfj5sTA4Wf7i1Yr66tCVMRC55PM6SCKgBApL7sGg1UBqXqPpsLrN1hbtbbPRThVig763MB7W",
  "key1": "2kJRUV8CxUsMTXsPVW6Cuw2oSkRsfXynmiYK7j6mqffs6A8AZQi5HarPkU5cjtX9GvH3vnde86UCVQgjxvV9LaRF",
  "key2": "5fSrVBXmoz5Wx9rTuHFRSrNreD9H96j23dnaidjgezxZEjPzLu3WqWKRABhpSuxbkB3Tocbh23H9iSWMsCpbpgDR",
  "key3": "4FgVGUaTDqWXNxiapT33YUJos1jajMvykkwidam1jh3g18kHxgeDy6c1vBDMU76jqcqUF8Kg8hgDsvk38ZbotxQt",
  "key4": "4SPHwgrnTGT1ULyAqKpgFgjCodRpBiLeBWufJKeQqHypX9SmmzjiKPnAAb5DFbAzxEoK2jhGw8TSFFk89VTUhCg3",
  "key5": "4UAVRJZm1WCtaNKLdaxfuFJFVH9wR64scb6WVFvguGbG88VYv1B6SvoGJaNaxiQkQmp9Df7FecNfzNnhs1LRGoq",
  "key6": "62kyXHUfoxytxnynzmPy6LrzADPPR7XAdYbpqGw2EQW6cJnj2tqWQbMmiAhXQ5Q1BtWBzdDnTp4gQLnkkmdTPAcg",
  "key7": "2L9dGrM3odvgLi8HZHhpMUF2Dh5xWYgdoocseAfpEuwADaxnqKmeA3TeL7HhY5y3sCwie5GwBC5ZZeeW1JnqKT8i",
  "key8": "XCmV5oJRs7BVpsVc1LPoHEsStx4Mg93DBXHSEy3ZdmpUGFsUKtkUKkHysiECbeFNb1C34QbXqYuUTPXgHqT9iVG",
  "key9": "3UKhMMxnbQ1ituxN9XFHYVgYxvxRMkRQJArkEkp6jtjsbRyL1Sqw8BMiiAwkQZug3j5uBEeyfmGs2bkmWMZpyg9D",
  "key10": "y5Np8NXS7k1seozyWk3VRGG5wNLD6s2deEKi2bp8CraS7GraRhMciUaJxKh2zcHZAogEAsGnkmKKVJyk1w8rggd",
  "key11": "4UvyUVYEEjzx19HGr8qay2sYFeUPewy1j73u6dyGTQ6jkA4qDcRwcV71ZUwHu9qRthDd4uNzHKwzzNTDfT5UpgPK",
  "key12": "3qn8Cdah9ejhRfPFic7hj1sdcrnTaxgaCMkd3NraspkPir1qW5EEjMaoAprMkQuBKvpvQ3cdwNpbU2GCJLahhZoi",
  "key13": "2xWNYVLTmjSjpPA3sVhT78XZj9zAWFF9zrwLexnjN92xQLiCqer6EAfxSVyYofewYAjhieWrbV4asUax7m1ZpA5D",
  "key14": "4NSuqrGTSqVB4ptbNmiiJN5Bdh3DXokCWBEEPN9f1sU63ko95LjNMyNnkXp6eVSJn8Xc15r83KzXPaETCryyxXqb",
  "key15": "4Vf25h4CQxHeDVkJdWJztdHHHPpCRsk1NecDGT9BYQTyZYqgNEjKkKs72LhiMVzhNPkAjcfcrMzXYpGvqHNFi9AP",
  "key16": "4wMjg7rxRdkJF8Y8irGbXcqD7zKua5CzmxQmUVfdNwYSyvpPVYWGKp4GFck21GUwc7L9Vmt95bZStgDLXqoRnkux",
  "key17": "grqHgBs66MzGDxa7CXgFnUReTv5mruNuezRx5xgHaZ8yp5ExEbLbkRBaDtMSC9cbU6nWSd65gQNurgqm8KHvUE4",
  "key18": "3yjpmcHjJWAMvtRGandxJMHa15JwyQsv4tpPpfwFdbq1LzSEAuKMwCnFRKxjGfSxaeaQqLHqD7XAExXL7dz4rtaG",
  "key19": "3eP2u4w9oa3ZU6SrvDw5NUXVt6uFuwwS8TMr9eRDhQnnfV2tumKRf8N2zwnhDaswMwbpLjCyr7C4VXMUuhwMZ4xo",
  "key20": "5pywrFtLVZNnnRHHmSXL3NdpKcuxvajU2gosqiHvrC8CFAF5AW2jLApbRLKbzEescYyfuWx749bVbx4KTgANMsDS",
  "key21": "2sZ48WDBGCzgbzD4RT1reCqAdrZ9vfJL4RR4VFdsmj8vPxKsFyvXQ7zbJD97VNiTyoRbS7p7UPMqSDgGYsZaJ4gE",
  "key22": "5kkrEs1gWFsrnjLdcU9TngYcDKAdb527jaXLMzeiGXfMZU73A5nJzp9NA58joch2o72rT5FVhEFghNKNtkdzUTiL",
  "key23": "58gk5Dom6mfPAA4Uu5oZNSA15VMQ4UMeqhLDi5NCrmQAEaNdKtuFZmrjzJEBcDSS7szMmLgimCCCqhwrMQJnYbBh",
  "key24": "5c3RvTMfhuRtudMCeRFVFLaEMaZFNWg4arReTTZLVZg4Rzx567LXVB4J9dN8XPZcoyy3UxKJMqRrKsR1uWWXXjCE",
  "key25": "4axSnoR5bCEySsWuenqWVDi4nonrJx7te5fTYVhY2uyidd65H334Nq5QvFe4R3EqX4CsdWDdpC2oAZheo38fiEt",
  "key26": "33LnQnNh6rgfftQskKScvep8hkrqrjteTRv282asR7mme8JEyQULkvW6nW1oHWgysaVjxdm67uVrmM3jEJ7CRFKv",
  "key27": "tCicSFgggTrGnj5j5Pou9THUsArnTa1qciNxYGwPjdrHCU7t8y72HAgZeD9R13aSjYpYaCRh4dBHPb6ESWvRUbB"
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
