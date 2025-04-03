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
    "2jFwXfXkoLSSwDXVhLym2nq8HE69rPGXBgDtNJiF1ddNVHx5p8VFGfUYDVcjgHKAbno9b3xQZ1xtyWxdPpwFT8Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S19REDxreUFTh4CJMrMYAQYAtXwmuRqgnnMBiho94s8LpDav7XS1BiBVhNoCt66AhBaRbg84AHKjKcqLBMd3mb6",
  "key1": "qrqBMSe6HBvzPRMWttjvmK6KUXLRQiaZU2RHXpTMKthUCHvSPfXRrpg59TwMcrVvHUY1Cmqj3heoG1YhKDYRYgv",
  "key2": "667fmWBbnf6A62VF2xkJvULpNp5Kimxid3fJhBeqiuM5zipjo5eiQp9De6enGVFfUTKxVLyzPTGfdwi6ce5V69JW",
  "key3": "64Ao87okih2zzMPAK9YUEkJFXFrCt2jc5pVDW9zTzKShxcpwp33ydswEA5KEzrL7QAJs8yr9teMmX3HNNHQ2oVNo",
  "key4": "5toiC3ZQbb9EWcJdamEoaZfZqnuHeqeWKZaz5yFR9WQDEmMoNopjdbdGNDMcLyhFURrEdF8qbuRoB9cNWUxj2mhb",
  "key5": "3s5qa3Ey47ZPNsTU8aWkFjVwUSkpH9KKVq7RLYhRBFQMuptyc5rjHZ3KQT3PAGbnLj8iRq957PQ6SKySTEsoUmZj",
  "key6": "4wP4L5c3eivpPmmn86cGXNGrMFYWZ3UPZrzrHGgPW5VH6MUAqMKypb4vuVMeXsUW7TZyDkSLD1mvLkY1tot7JHpu",
  "key7": "35UceTdr2WKxG7tshELPCbPcHCsB2SBxMsGaESxjckeKgg4g6cQqJcxCxerzujPcmXwtMfiZ5Cue7qGLJhu8G17c",
  "key8": "QNKLhduQP8C8km9W8ZDF2CC1bKZbVgq782ho8jMTRvB8jHP2AFh3tiTvP72kvpszT7jcj2Gn1yFYoxSUH6FxNAL",
  "key9": "3t7AWLDb6nv2Ae6bohauY6zsgUqpoWPruEfu1hrgFYYfFP13H4c6ZVvrM8kqR5ewnzCSfcEiunqvw5iu9JDifrMD",
  "key10": "4hugqAZ6Bh6upZbM97pSZFZbA9NmpTnMfDZgS6JbvcbmRnopdQMpMXZMLtgNhM7dGrXCSpzvAn5BnLPvVpqNf5qs",
  "key11": "35V5QzfnxrS5nZMfyH9SVt6YsKMqxxSKbgUVxPKmB3xMh5ehchKnfneMZ8ShXhZr8jPyZpdWoVJ2FFT9YCuX3iBR",
  "key12": "3g94VQrFsxQbetr1i8vXzoAN4JFGbg812Vx4VUdiciYidDHMMb7JCz9BgN8hysjTsXpyzKBvpmqwx98t77xrYcuP",
  "key13": "5idx5C55n6qmnaega7Y5wWBk8NpcL68AiXjQuZjdFxV3iwQ2UCWSsKdZpKJ6qQQwvXnndb4TBejX668zqeKXK1Zw",
  "key14": "KjN8eALK4xjqe5ZH3cbCggJVhsEfowH3UJmhThjDGA5CroQQu1X9PqD3ojeukxP3t8wuF5XvSALdEvnCJPiVrok",
  "key15": "3uxmhGszPDHo8xaf2FgU98AX6GuCaAogBead9DP7tC9CwKJUzaeLzVtssYkHWnjVqvGkWny94GuW9WDLE9BDDDCP",
  "key16": "2KtQHVHfZ8ra9pycRiQNEEv1uJV3WQqF2C3AyKVXHP6ewrn4oTMouL12US1dycZXqoueZPxrGZSM4cxrRxr3bBDB",
  "key17": "3r8KKfoVLQrhScUdh6nEosDr8B8GtGCSzV4R7Y5vwjWaYwnaFupxmzpcPwoWTTRogQtxARzWdRFNfpkm3k33BU6o",
  "key18": "5ohWgXkoQpRz15zRF7vh4SB2gUfr8kUyV5N631qBxja9kSsuUZTWPFYc2K5Fpfuek61CYjnEEACtnnrYxEijCczE",
  "key19": "4Y7pPXjV1WXRgALH2nkJjwweHWzY4sE7bXw1rf6jkn9rdTbzKpzLmrVyh9jPsiKqQHpUV6ghaJ17vSPL96Gtimqe",
  "key20": "4vdMKz3fC7mokFxEG7jaMERC7PTf27ociygBV3b6AqmKrwUmoj3e2HvHvywYFPYg2YM77Xqe1rfuiPCdkYZgbr3w",
  "key21": "5GZy426V2jR6BVFQHXTXsE3dFsfgAscLdwWSk1VGR5ZNiWXygLhrYHmJa8jsciztsCp9cmp4PeBKnbhSCrf8mcBt",
  "key22": "3DVsLqzUzv1HQGHzmsCesDfvE9PXx4913UZVDT3zqdRXRuQvGi9cf5hh2dfuCZNayAf4VceVqDN5qVTsJPH6RZRB",
  "key23": "61kJV4zcE5jMebVJ1PRLQanZB1ZMerQ3bxmBvY4MEKgpoup7TAWwoqqch4DQBCAFsRPVeCBvKNEprMPB2VF6nmBv",
  "key24": "3CjvovNky8JC6EJ1eA6qcyiwgYeybPK8uTtwdfxSbUo94w92A3LCviZTtRJnBNjB5dR4Jrk62imXQnmGuLBpfXvE",
  "key25": "2UBcu73EJs64NhkSuSYLXS64VwCXcTrgZyzWhjiMJUEButaV5JwM8c8LAfsRcMLaYYjKeitWkmL28KtkjKDzgJG7",
  "key26": "4VF4wcfuFoRKTt1qiPFGzpnABKdpgti5u72vLsBH2Uk8LgPW7AvdfKUWg5jxvC46nqELhUBkWHCzh53f5mNGqL28"
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
