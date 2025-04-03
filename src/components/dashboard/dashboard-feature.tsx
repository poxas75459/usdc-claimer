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
    "5Li41SGB9mg5vc1wrxQDzqFiVXeNmHu1tmBkT6syjssBKVrqkkAQnPbysCmvkRSsg8nAuKKWzmB4wMaU676fweya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDVewgczSFfYBKoc4j5H7iBiFV9ajbQJmAcbc1sWnnb194fZgdVZjZVySm8iCkkquG3od39aaF5gYrfSDtWGrz6",
  "key1": "35GjQUA4RXRWmTkEvgcfCdHTtV8Vi4Wef1evc7YkoPbqo4FwiSPgufTeoFvcc1zhbAWgbP8rE4Mkvk5igrNVung2",
  "key2": "HGP1yQM3566bKriGzKn8ZWuh8Jpt3qgF3JanVYCojkoqzzxdWK6ap7WzhbLzTgSTWEsKN6aPkEZveEjeV73LZTZ",
  "key3": "MmEwcJCuf2D1YF4EUzjhokcMPc4GhsT75Pqajr3vfaJHPDBHr7e2uiWA4w7ViDqR5Vq7HmJVTPaMGknNKKm3j3A",
  "key4": "2qRQtiFN8UZaPnhXBtCupEThviBBccyY9HK3aVJqdsY4Y6DeJ4RVsVrfG34pKSGezdB8CtJVm8yyLnfBKTtb3qLD",
  "key5": "5cjRyYi6ZLfvGrdMArnbo7ba9TecSWXVaSA6h6vG1t3fa3PTZjwNxJLZkmtbMx7sidm1daZFBXJ2rJHWhykNKGbY",
  "key6": "5K33qrJpUywihgKtjCmxP3vxpkAsMHFfNAS1fnKK9Pa79mfiHaSnp5N64vH9tDRW4KUaxizTFzkR7HaceHbvTQ26",
  "key7": "3ZoMtCuCkiTqRMoQaADVpgoxNxwikwvtg9sHJFVQ8vLqJbBmCsxoL1qFXiHcPFNKCmRJHzmf35GL8pGpcFJKnPPx",
  "key8": "5HePNSUAf66tWYd2nRUCPC8EPTrzwdA7rXiehgrhSjH6dthYyCzbejiWH9BYDEab4LgTF4LpmZyoA2KuDEswUTqF",
  "key9": "5qmxVt8ks8Dw4hSQQ6HMyi9gebHSiRYSbFritMesuSuC9bajG91wzPJjV7tr5Ynt4HQrWx1tBb7ArWUhpyxYrXAM",
  "key10": "4enL26aQ8Kp5c6BSpQSQAFxd1o5spCyVuJ5AtuQFFkYVDEPVEnyM4jUUYQBvkmCKJXentsrwQPJqpa66u39diS7P",
  "key11": "j9vsvi9Qus2HridQrhS7pTRMQBak9yUue8pR6Bb6gfiUV1SQNRDp2wMZwgwtZNk9kJHhgbaGsqMfbqghtkRnHZF",
  "key12": "efxY1oofPpxjD2xFwRmEQ4LJmADqATKhHfS9hxm5vk24x6iwgghtXoAhBB1yApbx2zLBbAozj8mNP9HxrdAM1La",
  "key13": "2pEggemir2Ed62MtDkeqeQoL9jKJp1eKnGknsChBQ1uy8abxsb5hNTXGdV2Cgn18QgrQ1Efts6DMXEfTQ6Q7jZjq",
  "key14": "5XgDzwk75fdp2zY3NeQHwhzP7p4evB8duZEJRGv1ShV5D6UPu4nNNuLeTDEsQ5te6RjZSqyH3KdBe1Se3euMKbXx",
  "key15": "4e81nbR7KFcnWf3eh11mXXZr8RRdBA8WrT75wAgKsNtshRoxwbSMFAX71qmcQ7aSKmUT9N36y6JCT1FYk8LwH2wp",
  "key16": "5CCweWL4ugpdxJnGa9oQ1pRx7TEB5xcLwq85aWVTKNXnbUkwE8HQsN1fa9fy9azgvjsrSSTrWnaCcvZxxkJei1KL",
  "key17": "4zcQdmp7gLayXxpKBY5TeUqEA7H41Kk8vxbFBb3aoj9cC6c7WiFDZ5yAb9PQAheBuJ8nzCyd5pi9Yx5dEjBXgXxH",
  "key18": "4GLUzxBcgJfQdTeseS4FjsSZD1AGJRmfYP8iX8kuzwdpNPt2QLA1cBJFiRmBWXLpSs9iVe2DGU2w1yxodjvwDepH",
  "key19": "4eyYJDEDgqJ5wtj2FifK7fErPL17RwdS4jVt7QkPSyGvZ3aZVCuf2iWHmGkgRhg9xBjdzGE7XPWwpPTnkFq9tYCm",
  "key20": "4STY5FNWMzcog7HETc9LvTjs8XRKGPEJeeJwGt1TYnZJKDqrFWqG1jGoyCtALoz9QP2kCeNQniJwLPGbLB3HFWA",
  "key21": "5C3wTkb4A9iKcpaanTzsaZ8BTAUvgpmDegCpwqPHzL4CgYFcwZiKTdEFtAccB2sXDcRR4vqr5AefzEzSs4eGguGo",
  "key22": "arK3UtPTUaYytn6GAZRHhWByyRGWA2nPw8G7Lzm3by97dDP3xCSvRvdVFPFYk1FgipB66iNwC1m1m1vTfiMVyoL",
  "key23": "3JtsUd294domP23kmdLoWS51rxovFKmZG3QwMoeuvSyBNFERRx26FQ6Q4FFQ1vMARbQwNBJsabLKrKMmdtjT44ge",
  "key24": "61WM8SHcPfTaGuuu2WQbmcdwXNcPsLPvhsAQnGAYWCw4vNTMKQo5avGhLjDvSoW5P6CaLMC1UuJQaiwFopNYs5MA",
  "key25": "3ttLzdi7ob212MDJW47quFCoHo8ZM1fcVzYmiiqw5ReaHyAPuyoGeAGP8ZtVRToURPh7vFE8jpsCFtpfpie8TDLk",
  "key26": "2efsD31N2oS2T8g1VhYPDZkwREAPduDoLoMAmZmPikxYPwyXTGWaLM1SapyEUXsvNpvnZ6j1bGYWHUgVYgGfF2Lv",
  "key27": "Xt4tM1V9j3nxwEp9aN48sF2EZvwwLqQ3hP2ZNfypKpVfiAtiueD8zk9JsVVwNi4ZP2UgzAKL3Kysq3NDMT29wiD",
  "key28": "4fpPHe3SR6N8LZ852M3wz4ErVnLStrH77QnEJhTW6RRKJHjJtV1GmZ9GhMPE8gayoCKnTaUqfNCH5puGxrG11NmM",
  "key29": "59qv2aaFVMxM3SCKGGCTxNk66hegyYHVwSaQc7L6piUfXTi39znaHxFkYFArrAW9Mb9ZnLcNJLCjcGXbAcsdEtcS",
  "key30": "49U5rzn9hfjW6DVhUwVLzzbsc6qokpcgn9PVsjTaxJZdmvrnGqREF25tMFi5PyBqEfKsoULskgxyvAfu8TEhrHJh",
  "key31": "49Sofsk2ELrNLr5BMmNSqEgZgYNDxKJPtvekaausjVCr5fz9stE7gg5rDukv2r2EyZxF91tbzRLrUEQuW5j5cfqK"
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
