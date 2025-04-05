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
    "67VGvWkGxX9gV2ZXGefA5yRobCFiNoA1fU2rp8eYDvH7y1ADWDV5bk6YhuokFSN2AiwPdmUzzU7TC9pfbNq864T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43mGRUkN3w41NyhosyEWKCS6o8UVN4ZNqrsDDb7LCxS7WV69LuCwCzht6LrWD9YSdGNggQj2WLyKNoZprvCLK3Wj",
  "key1": "5FxbKYNfweKuKFBG1a9BCN5kckdCPRjiYfp3Gt5RRe4bcHG7AGWZuwvAh4eYrp7pG6wy6PwGxpw5k5JsBSqpRFAm",
  "key2": "4ZxuVCsgHgjeatgomvTVTuM8uojw65fTbewoebVP4PzmZ85ZU4XofMDUjusJdFwxeNqg87xfS5Frg9nbQt2swgWL",
  "key3": "2pnAU5UM1d4hrhHwHgPQMbdC6MkGuW6d9mcfsQXJFpF5eGAsn7JDiRW8YB1auVeySmwTt1C3uxzEMBu6nK213S5S",
  "key4": "4mgPqzFLFfvuMehhBz9kVMBNAZrBkK6UDUhZhGzCS9xvc8iUQZwzrCuLu2gMFM4UWceQfLtk43VBMk4YiksxRXSX",
  "key5": "4PDsnURdBfQrNQNHuJWTuL7xBUBwtuxW6hbwx22q32Pz8Lrt83eWj3cNFYppgSB8a4NLJUr9ZEZE1aJcfah7BiEy",
  "key6": "4ucdPeuQDRM6yKAnavVGBxpCf81DgKJwaZEBXE5Nf4DZMVsnXvEfwwPGQWnh1FaZ8VUyNP3snsPVoE9eGJkcf3aD",
  "key7": "37orygfN9DqwyaPQ2UxwXcp4tbBKv2mHYAvEkPnx8xGu9MbcfiJB9QL4srr5KCaMBTUCuFLCQHmFMvbFeSErZGG4",
  "key8": "4icrG12u2eEWwftS3LvVr5hatrJ4L3RugFpWj5gGiMuJ97p5r2mhiiQLzyWjJav6L3CuEg1cvJHTULwQvAXqa22f",
  "key9": "4vR5iPVem12SStpCuwBVKJXxBYoZDef7gqP5j1NvB7uE6C1YZWhrxewL2MVKP2EmDmhXsbhkcPrSMH4trnfR59Eb",
  "key10": "3S6ehiypojnKkh4YozE6fHx4PrZKy7cfR1qdaGb5aJZCZYcHXMQQZHKDugtQGAeSaLw6Qxq5Sc3eehinLoA9deU4",
  "key11": "3jKMrHt8B7yCiaxTyq2bx3pyyvTNQVroPSFQwwFfht6mSVdZj3L2G98ojLLkd8sXroBvi2hfMfcXXRoqyiKLVK55",
  "key12": "35YrNdYHRidzP4F555zjitPDJggMfZvvZmnqQ4FUqLVxRdesAirwZSCp91WcvkKr6z6cTbro54oW9E7FmsFM5zWA",
  "key13": "EAqhMD2PCMN78XzzyuLmEaPXfkzTrdVx5AivXTP2DfP5eS2QosxMx98wwwHZHjydN5eA7fsSRK6iKj3qnD8QHxw",
  "key14": "2ZvrZRCsnDfKyNgAE5UWFPJfnf8PhUF4tk8LxZ8Fpv9CrF5Yi6mTPoPhc1UEveYziVAjuvkb76hHPq3Z5u2Hjf6N",
  "key15": "2kKgBmDKLXXezZrMPMYaY8uixTt2CZJChNdmkH98w3fPesZKAyaihnLUQNNpQtYoEihbfapocNm3Y6aHzsPLjKhN",
  "key16": "atQ2S4wpbozoQQj9A3zdJPyYY2d2m2PjmbqG6QhnqTUb1Sctty1qszreVwmDCRsLXrDrkoGHXhYUktXua6kC66x",
  "key17": "5FZy3kLZL9AwDaVnrHt13DhfSeGEtwDTid8AeEqtFcsfqjRDzFwgWJ4c9ww8b38WRsn9wPEyMnPGYWc6cqme7EVi",
  "key18": "5SdjAALk4f8yPq1FNKkdTZ1Hfkr5eFNpKLfEgxUnVhLbGv9F6VGQDCSoxzUwPPtufFtqQ163urfaF7H5MdRr4szm",
  "key19": "3sn7QZtzoQb4jH1qRuF7sVydhy3eQCfGsUSmEWFqQkmhLFmL1bZ2Won55ZsnW7rT6JCn9xDfwV2C3xEio9VHLywT",
  "key20": "38ShtkztKmKriosr6F4bPBZu8gyGBB3Zi6fxVeioq3fQaDY1aEUZPFdz8v6bkGXfXRxbxnZsstkAB2UQHTMotNCX",
  "key21": "3XpUGoXPyvKeLTHE2M55HWSTmGkJijQjJHUJnQF5oGTPeVQWGQk49DFNMjS1bKLJFqcVJTGAvJRCmTf1oWMwuTv1",
  "key22": "4XKsqVkgLQ8MaChEQBnMFzAwpBqEygPhDMxFECRj5UA3MHAHqQS6GTjjWz3GDvhzwFG91xCPbXowMRXNMR39uJvN",
  "key23": "3X1G6YbRTDETvfaP32iAoHMnAZYZCC93s1X74tt52W69BrLUpmme1i5ZT3xNZ5w4jKoYrHU3K7XbgNQfd6rT9Y5M",
  "key24": "67RwnFj2SkcRS3zyFSTRkTRUtTGyheeAwyJYaMDfpA6tFNupw4HGCer4xHWtjd22W6QaEDF1dy8mAVZwmzm2Nufc",
  "key25": "52nfQk3AZpSAQNEfx5gH6w248ia7ZAcbPfnvGeK9LHkrMhRpJ4314ReroeWtXwD7ctmdLvXdnHgyi5Yay1PB35yA",
  "key26": "3hK676FaxvwYp8zBzfYV5gXxvv9EoQ4sNnNDR4MVjxU2GSTC4SPqZceEDXjjkkn4XfnuLoqerkoJGGBSJmTQ7AwE",
  "key27": "71TrhLb9HRu3bBWHeN1YHPytpoJkSFXwmf5RRUnMuoXNdM69daSibjwEG2fFjGTUqXDGP6utGXacDMDLZUgqTqQ",
  "key28": "2vr4vAHGxKfVCgGJxwHMKoLBhwwFdxcYjqnVoAvwNtt1EvWLtRdsjfaSCDPi6ZAqPViPKctWVMHVdsAWgKN6U95q",
  "key29": "bQXDjJDLiqxwK1VP4k29Mo9fjZt6Grg4bL2BFKoiR9nLYvBQD7Y8f4FBqkRtXT3fVN5JWuaqBpx3bMz6qkXArYS"
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
