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
    "41uZXKNokD1MMUXg7RbU9UYWN8WoYkhJbM9MBuTKrqT2CqUp4WKaysZ8jaohKc2vqxRQ87VQYeUMgVTyk5jmdc1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egFV7MzULEEG6JiKLwuPw1KefVFB4UMkDgmW5zDKoZMtw3D2J44kzS7MpAyENXGBLxuGnPU7VSq6FA72jWDrfJR",
  "key1": "z5GwHpn8N85gTYjAHJPkyGXnf7A4DNQH41AMo7za4YYgbWwoGjyyx7fyXrHENVdLVKPCBQKfqfV6jJwT5YRPB7t",
  "key2": "2U3H3vacPf99m9BgcAksAFCib79W7scDmtPyb6RaoGe846s3yeKgudVYDBpwmZW9xXWJfJA6dZEDJwScjUQRvjAs",
  "key3": "5w6y8xjByk8WBvi3myRtW6FbWPm31gyDmjtzDyH7sAuQD15du8G8CUrvMA48NWvKuNQZ5eeXavh2bP8Sy39eGdz",
  "key4": "2GfVxfz9Jb4g6SEW63qLa41G8j9uYoA5PZg2kQuoDhrAmv4hX2DoCFFs1hyBuDuUQ21gJqt7pQfPoBcdAK5Gbw38",
  "key5": "5vfsWMXgeMwwNfAC9AFakftYzc2AvGogDjgUipS6jzyHQ7eUiztz9wPqwBNF2GhvJXVTAnnZGZCYKpsxSyyHpPzd",
  "key6": "qjo17epcYYJdx65AdrUWHxUfHS1AL5nh7Gp5c9xRtRbN47kv5NeJDyomd6HKRBT5zZpFmZa8qFW1vfEGZcWFipR",
  "key7": "5HajLNWpiHEJX8D2wQFr67hZ9ovhS2g4dvKPq6KUXL2nEe6faj7R82hKQ6PTZYpn8uZYDGe8jzXyMC2vZ9zdJ3xL",
  "key8": "acBbZkkrMb1tvcSBwH6eeBET4YGDarskaHRpy4YzMGtxKa3hZm9oZPnM8MT8iLtaV44DRGweWTkqMZdTVTQrGx6",
  "key9": "3s8KJs4xdWCzAPC9xcWnxiyZsroJey1xvBeYtnbH8nucEw6obfiuiUjuHTrY7DCw4Br59bvvXx89wChHtJwRqZgh",
  "key10": "2wRZjRsqkstGdjVoYasSBkKjCYHyToRtiHAQaruPXYPHtZcavPK1Nj6E8Uw1kjSAbZ5RG4VWbtx3Uv7JNXJYLRtW",
  "key11": "2eniqn6XeV19KHVqb3DL1tqzyzHRfAo3cpaFqryn9sVxHp8wfT4bu7C4UBHPWJWUvJQAHdum7BxbzkAJkWQxGuHa",
  "key12": "1Ys1xYg9KkbRhBkMyX4EtaHNWNtyUwJau8bWXVF7LRwvLMvrNUCeC5yF3VpWP9aSJRT7oKmfJNqaXRvFTJLPsze",
  "key13": "2aQucQAvAig6hoeHXvcUxM9b4CyiWGa2q78ouemABsSB8RBnhg2i2gqPSwSEmpdgZ1oViYLMoU6TbxYpNjtF1Ag1",
  "key14": "5DREF2M9WT3BDXHGuw3HQD5wzWP6tV722rZowP9nqV2ef9pTjDf8GCmd9EU6NaxL6WFJXvF16TwDkCsZv83f24VJ",
  "key15": "5aepN1DaEfxbuWRziyjs91i2ze82aRHXic1WXUVqTfAEvgHr8MMaTUQD6NspX6t2VCEq8MwHUVswdGbJh1S8cbJ1",
  "key16": "4vBmL7G4DaK19AD5joYvmLh31wusGVUjDpeyjyLF2sF98jdiqrAyRFrdVuGx7rgszUKCJWQ979EuCepREH3qUXbC",
  "key17": "3Ez5hCWXGiadEuoQJTvjb3BNj2ErZPrXcj31cYkGg8wzBrNf2YQed2gbjH3C6ZGksRXAW7Jcxs1MDRytZh3Joe4P",
  "key18": "2EiurBUjmHKLUNLvuvHJ5qWdqtpbz6jqmysZGPCELmDfA4TxcrGzpdVJExQW6jFBVkduww2LumLb45eq4aXFzTsR",
  "key19": "3rZfMTPFtQ6eRvaFM2XACsiqr2JWSfFPne17MECRmLD17CR3q14TGtgwJQ9FHXJ9KycFcYmrBwjfGHsuhiygxYUy",
  "key20": "3hiuNbgBranTV3cGCpo4SpX8ESK8U8st1gmt3mTMqctHbBouhktCYmMjpqN3GMfnU7gBX3GBwfm7zpUFUXS2Mfce",
  "key21": "5HRr4QEgjR39175t58iRTdtsXU1HzNAZJkoypMWeVj6XqeBgdZ9Pipnc7o9gvyE3F241uotM6dUb4VS7SLLRfjp5",
  "key22": "4T6khp1Gg4pesvYSSFiPAVHQDSuDQFYfDjsx9ERLzyuBv7Uw9wdrRnRr1LdW9NmFDdP5Gb1HcwuFro1Bo3RNk7Um",
  "key23": "5fvXhwaXeizdFFZ7Ni4v9TNJt7AG7ztzJhTDXHtSG4UF4sXCiHConDnWT5bwHyMygYZ3i7uvQfEDB6Q4ht5YDmnX",
  "key24": "21C8ocsKcYnYWFgi38pmkS39KxdUFeumDjprX558avT4xKDdHC56kbs3MkTeL9K1vmkkvkiTXHMn5q1y2WTNpDst",
  "key25": "F8P7dhu4wrwdBbX7UA2pHt4F3LSofzATXobKzhkYE94GSqHHwHMNPU8HN6eXyYPqTo5LFrmqNdP3Z6PfFvRUupH"
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
