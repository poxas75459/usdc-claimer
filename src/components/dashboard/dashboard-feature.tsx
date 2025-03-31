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
    "zdQGe7NR4fkuuFnXZbvsWYJZ7745cWU5qZkJbiVXADkRYe3f2Ycs5F72q2SvNECPzsh9r6WWzSbjQo1caV3ocMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DYa9sE2roVRgsU449Cf39Brn82gU47xLcTRmPsMwyHgh6hQmgpmGPiegZ6i7um2L9PYfHSPnpUjXSvnghvYeaaK",
  "key1": "mSKKgWymH8u3LZvbzrUXWGrJJoerZ2Gf5SbFYXbGt5jUYo3A5PTVPrFQibf5EbNCcVVnHe23GSFacTrB9aKjCAg",
  "key2": "2SCqmdKU5b1jyujrJPhV6pCrqjFnu8YzjRkVD1cBQ5THrs58QDRQfNfSNEZzWfH392wHH5cAewgn4fmEeQpncLET",
  "key3": "2cqGsnWFDbkoeRtaAhmD945kjsBwPKLuzW9esyGzs8sxayNLNVmRGtQuZjvTc7ntH3d2LzpkXzkgzmPPabm6447R",
  "key4": "5UgTk1Uzt3cvgefs19JkY53CB2udSSDTyS5UpBbvHzaS51soqYiuSnTeoBP7aB7wd2HJ3THo5uvtaz7kTLhK1kxq",
  "key5": "4WrQfRyy5vtrL4hJCXBaYWVxavnVMuyKLaPxQwrQKmtWJtPCe463dxkHV2PMu4cKnnktz6LPMejwKpkgMJwubMq1",
  "key6": "4uzZKMjHVLz8LcbtseCyNYg3y4PYGCrgf8DNPMj82zfSoAutCkzKFZ5FK7NhoZXAd595Dce86uj1LxpPk2QDBS91",
  "key7": "DZzBF5PrDN7wVJN5CTzuffGe7rd2vNvc6F5nHZvmmvuDDYouoyGJipGW4zC3WFmLtBDgEnnKcdz4NewjoFkLJcb",
  "key8": "4QPXxPzMZHgWjxxL8WN2CHxeBoEWJdDNtvULEYmtbQXtVvgb8EDBFbTsJx3n8diiyKnFqG3nCpb4GX2n4MqC3Gfb",
  "key9": "qDFLWVAWsoABZsVFGfxJJaZCNneBf2KXp1CrGy3sU8U3CMKg4H3wDSE4YFC9DKE7BuBP3ZmHAnVvCyMLYQV9NHQ",
  "key10": "3sTn3wdAPkVxRgkqS7mdTr6pH12CurkjqfDq8JQyJGVF5cZMVBBUtQbWVdKz1W4zvPejxRkq7Y71gsMvyR7vK2Tw",
  "key11": "2ayTyt7zM8sW5rfp5HrtscueTtHhSiVjMTGptwMJ77JjXXQLGHoFXavK7P33Ypn9m7PEc9SYZGogaAide2KWcWU3",
  "key12": "5PjmPAotnyCzi2QEgWJgrsu2E8NLVo7cWs5c8gsP3UB85wTeWidhzWzyDw3q5hp4yrMVjnMBgKE8AAi2trnMcfzd",
  "key13": "667oxwk8EmWme95pSTW3g6ZTKDxkNpc5YzaGriEh4HpQK4ncMX1kBp2EJPJX7tiuZaUacR42RPcWpioe18SqgXsc",
  "key14": "2qcYHM9G4j3t2HaE51C16sLNBMtye7Tqo5xugtMi5oM3WvUMBLmHGWz5dWuekyGEegX3LjhRVjfrsHnn9GhJYyad",
  "key15": "f9FgZiBSPXH1FVZP7GSPCoUn3iY4n9VS1p1xKSmsCAdgGzSUFJbpbecogFEpnFuF4HSGiGE1iQUcJJkKMtD2sk8",
  "key16": "vrvwSczLZf5LDzmZb1VnsZFN4zp2jFKsR5zuX1yhAAmBDdTqCybDUGpgjdeMzH6w4wzEWB1z5wVEacGP3j81ooa",
  "key17": "5JxVdnQRz5FBR7T8jAHnzn31zY7YuqhxkFsC2gvxXCbzZ5x3Usdv74xQAbTeht8kw7px1hfsYZUoWs96E613WLw",
  "key18": "5q1FVtXAXMS2ZrSfxaKDYM8nDmmpiUae7kHvujZyC1YfoLVUkwZ1CSfyTpW51anvQhE3xJFnhnYqTbeMMnZiwcKD",
  "key19": "3ZeufGFHnNxRqtyZiP1AK4KTkkHHF84vGfvurfy2Z13jTcHRcWvQ2yFwsGme5mV81pnz6L6UVErhJNRGiMb3bW8w",
  "key20": "5Mp4jn8QKYA2vzSaKZ6gmHDmmqKpxMNn9KCT8zTjz5riE39VxhcbUJUXW1VcQ2Wm91YU8izBdzgU15AQ67D3Vz8F",
  "key21": "xabhJjseuY7deLrZUoTh5h73V5cud1GyvAM4btW7tegvzBUfWZq7EwX6z7MNzw9sxiziT5sVqPDAX2YmSCzCmzr",
  "key22": "2mdcSNjxTjcUDPgfAqtWj7vPtghznsfAc6CpmudrErRk14ABv5uLbBszhbYNxkcUXtUtL29wmdh3ZBC4Uy6rqQZ6",
  "key23": "4s5rBPYmgfSSWU2mW8veWhRAf7qWhq8d1h5F9wwfhAzVjxB3K4aKjtHQEGb6ngXqwXFUAu9F1qdA4SLCFh4Xkviv",
  "key24": "5GR1WtPLdz5vG8FuKdh7gj7trGq4u4heNCh27BcxnH5nfy1h29tkSK8kMPWBg4LFjtVTWAR4rM191dcLStqC2ZQB",
  "key25": "5fJsZzxFRsVg5ZLj3phu7exXvZT2VWVRivU2CW9cammhPFvhaBzacWWHnqbNvTocyJc4vc42R2FZzVuuGeBAbHi2",
  "key26": "2aFqTBaqnrso2X7GT3o6PC7X9DanqfNyiar6jCQTd4JjnWfEhVKsjMGsidcSXM6TJQYpqjBd5C1nfk6rYY8wqQs9",
  "key27": "4cbCBWRBxSmmieZ2UY73zhxAZXX9EkWPAPSZqNmD5sdrZfBWKyvaM4SJWgf2jeTKfw9AvbXg4es5BtXoDLHx4Dx8",
  "key28": "tuzsx8YWsYXvbx5AhGYgGysd1jTYnrjQAVnjLs4r2vcptguPaCgwE49GgRRppFuzsEcZBbWczADFYWGfGVpu7DQ"
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
