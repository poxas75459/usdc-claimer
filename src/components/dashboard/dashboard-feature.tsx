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
    "4jMwhvmHapdnDCZYdNxyQ42Fye8KL2bbE93w4dW6zS9TMv6YUjErJSbZRBNvuZMrxqR68NmgnM96amgAGxkMkP6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CatUzLEpQmo2k1h4uSBQBZeG2KAhMwCPLSEmDQLkPqmk9rc1mXrtc6MsypqH1nUaErnWhJxToFNA4ydzYF8mJTP",
  "key1": "4cs5QhLLJw6HiSnNDhsgrnzagfr5hia3aJNPDwMmBBNGSnoGBBYDVXatF1qWfx63PQZ8C9mgzwWZv3uAmbew1W1i",
  "key2": "5NfpsArbWeM1EhnFPff3mSaH51YVY9k6wBPybeXXVjVhYMszXU5DY4vggVn3Th9GiUF3X5BdA6BuP6meRauTRg9L",
  "key3": "4aAUeGuckgH25ccjEgNc88DXMhmFBTEuySJouppphEohBS2vvSGPo74Y5NrYGwLMRE4eqax35oSzj8Ub6ZQwHhZc",
  "key4": "5Gx7bw2ujqor3sUiricWrFYQ3s3W25iuVSws7AkJ7NGiFNhz5UaM7gBAr8rSpcCUfLVDrBrKs7kneXXgRu5Ck7C9",
  "key5": "27WHb9F26JcyxHQ5p1CF4L89QApv12xMv25cYkTd3Mu8RsPq4iZbkSYRFWioyCiBZudSrHgJwyhgun9Nt1VHxkYp",
  "key6": "QZNznpV5T8kQVMJA1v5Vh7NKtyxhduQ62YUY3pVnSh3g6dQu8fxc2aYEaCmPg39FeKEVwEMZdk4ohNKWVkgkqF5",
  "key7": "4iPq8wsNHy8iDA3H2BXYjSYQ1ss7GV7VkbztyTCVNUbiPKcsDC2cjb679KzoHocom3cZacCkmyAUfxLpTWWf7ooz",
  "key8": "66xXVS4KUTTpS3dUHRUZdMZDziYEBHZyCvrihZump5ScKfv2bbHdyFKhpf6i8gaj6gbXeSofNUShppR7h3LCAE5c",
  "key9": "4GQA3x1Vo1LoJ24BE9pujsX99vogbkfhd6sdCsjquLChBwKZhKMtht6fDPaMyhQ7ThXvGBjDdAQ726NDCzG4VvNG",
  "key10": "4UHxBSwiWTLZasZZQrsQZccnnUnCHp1m8ZXffVNWwGtLito1r8cHxSn8WYsKaqxzhWSitZPdHnVfKXewpAZaEifZ",
  "key11": "2FsQJEJWoDRXQY8Xm6yYeKo8Bg99iuHcSAec4pQZ5GdZLGCEw2e3vGj2YzMwPGDHAJySPTsyZSy9U2xkucZKdNQn",
  "key12": "5b329RrDnPPZSVg7ut3jP9ryBYCA7pTJuT4w6kwN9ov8E6U93dwpbpCNrDZsCeL7Q5YRUB9EYp4pTBsw1aL6ert9",
  "key13": "2nRZHRC1fGsobMhvsGSk7kZKXQjiZB1UQZvAVGKDcFfLdeWGepaP3xUEr4Wpqj7HPUkgYZpFXa3n6Zqk3ZBVxWgL",
  "key14": "3XQKgCFBm3unwoa7REVdnxaHook5Prrtoqy3XmBz4p69rsmCbvLMHuvPtX7n18mYxyLS7ttNXWBd3gJZ6vqvPSNC",
  "key15": "4E7CL5zZPZThA9bPvpSd1iqgxdgaQ3RGTUwXNxpik9TjfmH2B2WTn6iicF37VH56cE6kZ33UktSpZfyBqEUv4Fp5",
  "key16": "3wWoQh7aJrynKMmhAiim4uvtCHbtuFw4uxPaXWjVfRXRc4XtnkdoTLkDcj4BnUJ3FTxe4CVY6bGE8J81T9AEd1oR",
  "key17": "5t47fbAJ1fsbsx6s4mWDQXiG5XwEaP3n9xL9xUn4acHvdH348i2qypvkeYpQzUfsgJWJH5GiYxiH9RDhPFarn3Gp",
  "key18": "4C7pLiw5eDT6t7nYd73jgdjvsGKNKRFqCnK1sVKHuKuiUcoWDePznMLQWgvWmsQTAhGJMAgKqZTN8oVBq7bYrx8U",
  "key19": "2EGy2of77DDZBDqSuncAD1PHPg5tPgcUgimpTDVKMMNYBqENyHLWTrCi1PQma91roqLJchRsLAyhFDSTsAWqxqzZ",
  "key20": "2mUZ62V5oSmoEgmdSDhi3L33f4XkDcP4Bfo32fVxUtTmBdeybcEUNgkSgS6VvMLcu7znk6pEHfzxNwMMLKhaVqjL",
  "key21": "54Eof9xz2qN63Mcv1m6BGmP2wrgg4w7FfRpCpEWNVxV6cuQXZYQFuZVNrH8Tygf3Bk4gAbj13kT4WPBJSGbAurNy",
  "key22": "4iPPuEpUhEjqDYo2Pya9kx7XpFNKoqrJhRGGfhDQyc9SEEFKcoWGTG6QQUoCcW6DUwWL1krwm4gyWLAZjFFbVynL",
  "key23": "5eyvtw6GTpyonNqxjsNzrCAJpSDd4vZbnHJTYn5r6tAPKww2SSy7FtrUkpXhQ1x6aNRpsy8Eu4q1oezQP5SoQ85M",
  "key24": "2BxAzFjUK9cEjS2wSF6du6BcNnFrmJnG17ds2H1GBGagiHB4xkdXW4rgqS21aEDjrr6P68qVkL7o7s98UYEYEc5v"
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
