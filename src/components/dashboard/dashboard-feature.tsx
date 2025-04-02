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
    "5G6T6GZEGUn2aNq4qgYy26TjKyRURG79VHmcyeyjc45d8zfDzvTj4XsZV6fBNcnApi3gJDiWe1aqpxVvdKKts1MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "giQoiZGSp2NWCZLrBGhtmLkrmJ5UjJTf4qjWrAqKBWn4GDghVYABPHBaNYENj79Vj9gApDsC72Ghsfs5TobKs5B",
  "key1": "2PWg6t5812mYCwHLDaw1QkttFJqYXJjpeqtWXvBxdhdnHV3ERtzRDaZotD9UxGUo46GEGCesaDG1TUcrNJT4k7Jy",
  "key2": "3FEciEGctJmazyUYzoMYJnPS6UQfAckQdoK5mPmnFmd1VHzHGmm51khNnkssW5WMT2KNAnXsYcAb4MNx5UhPAFcF",
  "key3": "4HFoQGQQUn1H88MBW7qjY3kD3cLWoi6xXWXNdaMTckVc7kfLyVW85c4TyrutRnR2r5KJbVZEX1kE694RTT5usz5F",
  "key4": "52eQkg8Zxj9Vs9QauResEnLGMFRQU2BeJVPkL93twXpVZ9RxLkprD7g1pPWXBojPceHZQwgKtg2KEJMyBPo1ne7U",
  "key5": "3StU9AeGhG85eGdmuK6o5WvAgTZE734tKkdGibtgjdVuBrhE1cGBhauxWKzbbetgV4v1xmyQUB5uP49XSCXM1Xjf",
  "key6": "24tBTKNdbpFzRGKSXCgfremocMHbdXAbphi7NkPxZKaZdjak5YyJd9mdgBvn4AumWXDxi9fcXK8EbGijVyQfrBab",
  "key7": "4xg6hSgXknFwodt8UjkxNeZgiqvBtVQCF7DEZLUPjXAQdWsAfoYaeHjvG18GrnNj8tJMqdjB6Z7zaHcCp3oVnrGX",
  "key8": "3LGcazDdKE6NMHxpUUo1tttNvyLQPTFiBi8Hf1nPUrukPGTYqUaxL4LdjCSpkSz9Ju2Wut8yM1AFZ8bR8Nah7YJ4",
  "key9": "4oXaGiq8j64J6CJY6VPTszYbCmbNRNUaRmnyMWWsS1Yd8miZTH231mgs54Fzh6gubDM9yuMMKKmqNaCpVMVrt7Ck",
  "key10": "3MUj9MhtgJzJbQmbM4LE9GxdWiPtUKspY4rQFmvQagdbdmgYuAmmmXE9zqFprdbaBLc5cNKDDT3c6rqfzEgVe53J",
  "key11": "5zj1n9yaqNAJaa3H2cCx9TFW8pq2SMcpZ5RTnWQR8G4j6kLJwyycZTPNxaRZuDEL4AHkUQCPapAgeyqH3SaBoLoH",
  "key12": "3V8eEzDZK66SES37Ak5JVe584ppvNrUxQN1qAnohcLMmvDJLpaCrcpCjLeYsyFm9Kj2x4GhyabLHJJuPT8YJLZpy",
  "key13": "5tYKyv4wvtTZ2KxFycDX9mENE3wozHJhXGxUwa52aLZDygzNs9HVRvESoxzHbdhh5gXBH9MiHdZM13X8BALrtqKs",
  "key14": "zL2aYAu7EXBj6kkCNz6FNeKHDwJGxZZ9fmK1knF9SZpoYMyJKngTeqSYQCsY8dkifvCgUczEQv8QeJCoQEGFRhx",
  "key15": "27xSHPXvnaH8mB25dfuruzJ58zsZdBbDW2my8FqAfMznGRcbCEiEYnMEmtPo8S456294oHv3faVBdBtDDjMm2GtQ",
  "key16": "51pxCFrRbewucF8nQHfkKaNbjHbvUHd6uwa3hMaqyTXT7U7MuoAdihvgQJC15ramP1e3m9XXAmGfzHikDp7nXxxQ",
  "key17": "5DMyaM83cZWogYkqZ7hQDE5eMZfrtuMaSRxMVyKMAAVazUgiNMnapGNs3MvjLDucLcmn8FePZ7PfBGu9QT6KjnfT",
  "key18": "3t9uVC9qVZqqAtYE4LxnWSz6pfEUUHUHZYTa9ef39FPDt89sVC8mf8EJcQVeGJVZJerGWpLmfGzRsXkqbwDQHW6P",
  "key19": "5kgaFvTiDDm2RtSckmLfa5A8mL4rf4qdaxeVok81Jb8mdczzQg4k3CPamwXmrnbUjj4pi4w4q9u1PPnAc99DG4iT",
  "key20": "4NPNmLXk98H17XZXt9dh8Ytsp7Qx7T11jfa3mDDWpQiHpzCB7mFBXXUBsubUZS2aXLyGKqHz4MxfmspTiQFR2SgN",
  "key21": "4oGwzHCzm8YHVs6MwASi58grVpBdrHw4BbstRrMo1vorXt4HN9QQgqh58UYn6rZ7xmKyKRhp1u97H5XRyK1Twu2S",
  "key22": "2xuZSrQmvPW9hQi3jnyVgXpUdEDcZVFB7Uw8cZC9HGweHkcwjRgVUvvuRn6wMY2GF7Qf4ceq1LJB7M69dmxPRDNU",
  "key23": "62GmVGPfsgTekVAQEMAYvzJQDsGRm5iKVtQdqZdoRRvtvnQiSugTo68JEw9MwGY2xTYBzkfVKe43LHh9kEPuEWjY",
  "key24": "5AgVALZke23Y3gknCdHEce55H6BSTEQYs8jXqdA2FYC5CL4Hiy62eLnhgcZgtbtMh8n94xNHZNVRJABStgtbwkg5",
  "key25": "4AaBx9cyFa2q2MDsUWagWUHopi5XqPLHsfc7Er7kKy8F6aH9wqxZaHu7KrfRR5rdqQqSgML8yEMB9rrPaHfm3WxA",
  "key26": "1TJyb2WwVK2cGMLZTQ6zS3X3BrcRYFRMUh6bBHnp9hGSPUrGaBq8D1QBmGTJCpQgKWiZKMpnLYaTPYmBVGSeMC6",
  "key27": "25NMp7nDQc4Gme4VkyjDZCa5jKGnxpMmVcysvV8BERp4LsP92pbZSdAKZ5bL2XjSAseQ4Xg1CBjMaJeYPkjhuEhd",
  "key28": "FovyuEWnULtB1Seqv575AXBcxVoUr3T4djQWofvXBG1CQ3K7EDCvpwKd5fgjSggBzPV2jrNwnSDvvCaZmifZhkR",
  "key29": "4N3T6whWaCEQVN8m222ArYFao2tyTbTMyV551Dh5Pafm22dYQb8rV5vKxYnKkyg3y8QV1ZKjgZQFkQNoXtqZZnRx",
  "key30": "3bBbewhRAXCCex9hi6kPVzLWLHYwDgQ3BS6iKqaZVrwY4ucxT5fFGYk93WZzVxRS4X4Si9rtqN9Rb9J4SPM4ZFmk",
  "key31": "L189a6vvFfRQj86ZFU4sPKBJ1o4JRdq5WpREFc3ALcx5XuGSZYkftzjertVPh1ncvhbYBtNFBWjDbc9UsCGoXoX",
  "key32": "43mSQtLZNnrZbdx8PprzyRwKMco5HTwPojJuPNJH1JCctKkvkURoDqfTnDFRSp3C8Qmy1YNJRz37cgA8r6GuLtCe",
  "key33": "K2kQuTvZBUYxd1R6k9DPT13x3RsfNH4QQvXxkLgzGtahic3Ri6LcmevsTYDzcMLNKrPWxVQ3V8BaQdRuwBN9Tkr",
  "key34": "5AHB77Xo7mCvvQ4uGZmRYsBZL2pz7gUkNPJZzeR2GdHXrP6UbNnbwEKFq5Q8vRLWaEXqZEMVfUMLbo9qgkCVhJu2",
  "key35": "2AQEXQQCDvWXuNhfjxNVYkotNtcu4gC11brgKymoUjzsCP8tBcTczmczPBZNriYYhjoRtbeCZDw1h8xyPY2BVbiR"
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
