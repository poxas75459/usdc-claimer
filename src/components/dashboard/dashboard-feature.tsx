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
    "4GaN6ofGFKcznqQCEjmZCyHyiohHmYWXvmbsjuKBbsdDLcJyshHyJgLDabRmrt4okWWfQzRS3AGS1NNugkVLFiqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tt5CyfvnqETV8KuEkLA4Vzeu8VL6G1w48JBpifBHzX1dXX2pGXAph1dB5rTtqwhXVCLZPZFhs4636ouKnwYDkUW",
  "key1": "4BE8Ptb81SUhUM2qrS1Jcp3gUnByUqqKNgBQVRXtN7E5JU2z1Wf8GsAUsSKTG7ypirh4TvCq2LGqsYUsvDPigafT",
  "key2": "462dgAHS7ZhVENqNu6fPMHBFeE5PNRHAydqrQjjWUQsUEPa9rWqhKZ7f8QKYCLWKDhw4xrs8Xh5VeVKcYYsqFYUV",
  "key3": "2yuydkH99Xpfb23Ya3FseHPeCshkphpLHrWNLJ3btoJgw4hxfMCU5HEpRftQqBKkEnhMrhuRPSQ2joxV4VquPWgb",
  "key4": "3YpBpFPcUstLujb5hmunJcvkMunDH4BTNrgRHmnNB8ogLVvAT1UipC7WLX1XacUxtL3JKj1RMfP7kE3Hf4FUT7wx",
  "key5": "4EjGp4zrFxUyQRdcw6WJUC2sabf9NrPyBJ4VsJefs4qqQnNQxGQCFfXto59z5zKKjjKA3gmUiGPSELpQGegfA8hZ",
  "key6": "9q9qw1o9J8Y6uUeSvhijkXLdfcm95vMhEZhUQtB5X4GLXky78fojrJ86ygBDYKnUejeLgfKYDXscMcVuHm1KdW8",
  "key7": "5vLQsnspHJ8N9kprKhV6KAyivqyz2ZgUoot7rkTKKbVeKPeLH4iaYFTZ1nM2A6WXzTo4NFP89WUKpKzEPrR77ZqJ",
  "key8": "2jYv5YBy5jYPAqmuBivN17QtjGTbWDhpg6r6M5cRuFq7W7QgxokfMUXEcRhknRPUEPCYUnAnnffGbMqnrovMUPn4",
  "key9": "3DEsuZBagkTszN4oVsRHSA7SKu4cb7aVaSi6nH44zLEUumVYB2B4UWr2TYRVp1rDwKyo86ULGSr54yj17LMFroPy",
  "key10": "5aLJgf4A6qm2xnWx6oJdyBpzknSVDybD5nViYp6SDwS7ymns4FBb8fs2j6hBde5dfacrB49mKmSS2b3fioaN8NqL",
  "key11": "595wDMsHgektnfMushAcEogro3dj8DHBzRpGKxH2ktjh5cTBC5LWCXNygb7yKreBzJN21zc7xrFkinA1nv2Q8Ukv",
  "key12": "c6T7EZqyU7M7V4Sw565UmgscmC62QMLABU6GCp66AQfZXNeX4bft241k5manZzXFmLf2E5NzGY1a7WBJKgjCS5a",
  "key13": "4MHFmqY72j8PzXZkyej82LbKLjsDjJNXnmNHnzJA6EFM2KpgAJZEciPQsuvbNxaGVMTonNce6aMVzfYHngWt6FLS",
  "key14": "gw2Zgb2z4h1LyaadyZrDiTs8fPRpMb7wh7ZagKEFn6iByWzBmRYm8YzK8qVxdHbqRXsCuZ1EeXrTZN5bTMc4mvL",
  "key15": "RLd1Ms4p4tQan743aG8tnoars6nZwYVrTvznuVw17vk97pEQyTcwJ3m8AXXnppxrPkpBDt6Gdbf1yCTpz8Wwei5",
  "key16": "5MAfW6vHW7MdQzaK9kJhZzvGugNrQxYnajqwZJRxeFcNJGKJjZwqAx4ZtSC5tNLUbJNUTBG8AJVLn1yqhqsvA3EK",
  "key17": "4K1JQDEJhut5AQaxF2nrQw83rG7KvngD81ogEEN3fDDLJJfsWCfBr2NeFh9ajDFjcvkGWgpwj9UPbVKCbqovKtPB",
  "key18": "3JLS8fdXrDPF6pGvNT1wqisn4LFJhsgbBqkkxSWn3eVjxBLgaZRMSVhv3vYoF18xp8MYVbBu9gfYLzG4wcNrqawX",
  "key19": "4EnUwyuUeZUbcFeVStWgirXFbKZ5U8xtHUJtBE8RP9rMP1hT4hP6EnTzAetvSSGtvtBzayfyxvExTArAuRUwrF5X",
  "key20": "5FnRtbQT6GiN31JnkATrFcv25A6SzqJeB2y6PsXaVbTGNnWarDkmDwwCeBSAUQpYvp8GV67dPfYbf4Mi8TSahVxB",
  "key21": "5jdXL6LYyQTxsmYRpMDnwEoHRVMhhAujLD3MbGnfjjmgdffCdsUnuoRXd8gBroyrznuuo6SaZqnsWRgXpGuuuAHw",
  "key22": "3Md6PyYzyqnfqoQzy9DeT8GMgz1p9EXPXp6d15sezEeaKfoMjTTfa4SNegb2UVk3MUT45LCH4bi535pxmGZYb2kP",
  "key23": "4dmapGMPMdxvNLv5GqcvK2wHJ17MswCsE9X1tzWvctQ6HYk6GGF4wDF53i3Cu9J6n9TbREFPwdRFpivjEi7fX3Ke",
  "key24": "2dgSeSGjJS4WGGm6SRxaJ2TXWwNPUrvQRnxH2zABbHy8sNkhwbj9Gbtex1dN7dYuhEd2z4Ay9KHPES4SqphaFCkh"
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
