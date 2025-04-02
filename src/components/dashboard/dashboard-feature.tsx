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
    "3yv3mbMohegYEayQ3hXzzoDWgibwYNwPUzJvoVJgR66caSbyd4HpMvFoGPG5gWww8xnig9sYKHYwYzmaAc8bfSyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tjB7FP3egjQvx9FBAmbsaV4E7Po6uSA7ywZKJR6H5xvrdfq1fExs61GfcfrzWsgVJDwz77kzXiibV48ELXr9TfE",
  "key1": "5WEgJK6Wbfc8CoT8iS76JLHjMihCMv6EK5t7r99UdqtrDFvp2tCE4szdZswoQYmrztkPweJ7YsZae4bhN69zkzPg",
  "key2": "4F7FEdvKb58rz14a2do2XkB5qv9M6SSahPe7gMZgG76n22FSR8x9PpxQZu5DqnHtipzapYENhpZDoNoA9qe2YMmB",
  "key3": "55NBAELWgGZsXAtFB17ZXjb86kJGUiir9NbxFfrtPmLbxFE4C934HrvQEuvV6UL4XVyLcvUX1dQrgJ16XHN2GRJy",
  "key4": "21BjDgMvAZet3SFuNcqFE62mgHaqCNG7t12TbBHhUJ8e8JkUVbaT7f8VGWnWiPTF7JKty5Eb8RYHKTbceg3RvUn3",
  "key5": "4LCieZy5HQ3gaL5XZmukCbZSXLPNF1x2hQwpxakBVjtuvcJzA29uK5bA2QhChZZoxTDvM2gJReuuZPCvWBNJswk3",
  "key6": "59LjaJPuiJzE1ZUDPyjBNwukLyZneaMBHoYHLez6B44o3ALTZfL5ZZLjy6rYiCKVi7VqoUCxThkX2t5SqDuhLaud",
  "key7": "4uikhciMu7eFfE8Qi77HMVnQRZQB74FEM3gLiSbA6jGnSvidxU7gViscNqNez2yWJqYFg8j38PLCQhqc6CfW9mWt",
  "key8": "5Qja7pRKiLipWBPaeTbNcpZkqS4514FHTHR5im6TzSCcT18pd3uaTHWUfdrZhvtkWtG6km38ZVqt5WDipfqt4cyx",
  "key9": "526GR3YQSUkTMftZb6jXJ5JqTVqN4PN1XLARLo4Bb74D1T8YJkGXWZx4z67EvZvc3kmQnCjnM28E1g593bvdhVfK",
  "key10": "4xs5NnYTVkQQQBxCbABG1vhi3CBtJ3n3gUWdr5h8Y5GEXqPJmUJgVLbLa8En2uQ9k3vZAXXsbKvQHfA43reqtWBu",
  "key11": "4AKzEjfEFT5NigqahPyjUJKB4agscHPX85kRmwQ3GvkMbm3zF3iPSPJ5sKDXeNt4tMc8Fo6uYZchhTmFo2ChgqSM",
  "key12": "8DZN8pkw9wQBKWNiZGQeRQ2r7Xn1fBo4pGrQjPg5F1PEj7jhWTxXqZTPYZvNPUDHMYLn5NFJc4Bq6vTK6Tk4H8b",
  "key13": "5UW7JT65Eyi8amfMKeB1o8oSo3S2hhZgCsLvFkKPcxgSvrsc8sKfh6nc5UbGRzfjWr6j7WBoCfk6uNhU2vL7jafq",
  "key14": "2jYjuyxvNsqno2oVfantSfRt6nsJKvYBMFxWi7AqcUw8YmMpNozVJ7ETCAi8tdgjzyrdp4GHXefZanQx18My7GEw",
  "key15": "2gpEwQi5Adc4HKvmbYGU8f6scyNT1yCGHx8PuyygXhhkmDbcxodH3yx4UgkaPRNgpBmwy85GEFScWWMFdyqpMR5m",
  "key16": "5sjstvQUQ1dAAjnDBnEKzb95oU8ydBsXu5FFknWCydD5CuupeXw3a2itkqTAUoU7S3vGVcv3bTixEwMFGUDr1kZ",
  "key17": "2bop4bDePAZG26urC7tYK62xdrBa3cUDYWFdsDQWM26nDDUbMpNsJ88CJnECLZ23xRU8HcZPKzhv4UVGrvmRmq4R",
  "key18": "3tWz9FX8T6EMfDkPavdQ7rrhLae6q9hbf6b4ti7E8CNJS7UE9XzXtdZgcgigfM55oMp5PZX8WVzyUrC7fuMEEn2W",
  "key19": "3CfoVuwSs1suy6TwiFzTCAhpHnp68W7mzSSdFMNmXLBQQC7zsvvKADL3kjQkCN5dT9UPidpb2pbUP9GEcCxofGLF",
  "key20": "4yu4A3WJDh5TLExbqEi18xyBNAZfWmE8Tdh5Xr2sj93kwaCPQuxXuzTTuy2VkRJbqXhkFBRaVR7jfFLYPcGfRqWH",
  "key21": "3bdb9FPdY4Nb2WnbvEpemJ6XBbsTHj5nDCKDkA637N1TueSZp1v4kFNPSWHy5gQCJFD887YArPDSBnzS71VsTnwb",
  "key22": "4RRo1T4tho5ByPeqf3j8TFHJE7e57fR9iv8yK6tsXfTULDATf6385aJfnp5pCkTz9EQuweHTNWYWULpJfaZLkWvY",
  "key23": "5Esr5SzxMcmp9BKySqkfaJ6MzKzGkn1hi54zCr2NFVgimQ8A1ns79eQzY8HEj4q29xAS98e3u1HGYsyUkszR28W",
  "key24": "474qm3q96kqDFYTeqY1pkntNUbT5eHckpR4DdmwgmBB3vq8WARnBnH6R2yqo2KX9vuSEJNMU7kjpcUfnopzPcfBW",
  "key25": "3uWMN8uRNhVGgtkreuZ5MroVy1qs4AmWneHWHnr2Qqm1iupmVrgwzgH6s8YJTnP3qXHR5HSeyCqhduk3HsDi7pDu",
  "key26": "2Gu7oZf6GNRcycoDM7X3odTt2VAK47Ssh9MRGxLRGNymbT1ANncE9caQ7CXNhvfjGvREjhecKsuYFG7qHD2JHyoC",
  "key27": "5TMYtzf2TF9WvjR4hL71q9YKG8G3n2NY4HX81H6hgCFtVNijLpwxBWX4hhor8zShszAmrELq5NifTXK7snvg5L5h",
  "key28": "66PcDpe1waZThBVskyKNP1BEXYn6aLR48JG12D1q7SNm8evszvWgmdWVA9o5955mZ7PJNcivUXU2k6e6pgn7SU4h",
  "key29": "5oQfVaVqfNoUurDKyRMYEHwAYe8s7YwCpnrKNZqkHRvc8TqDRr9Vbxg3PKa8e3d7d17HQ8e9b2KB4bPJfUEq42U6",
  "key30": "2z6Y46KgzWPpicYAW44FXrZvWjYitSZy3sBCrf4WXWbASm2ygLSNcCw5zN6HxGiWV8zN2zkWtxwRBKdqLjERT3Xu",
  "key31": "2vpGZgVJMqSew2yLYcooE4GShTXqcpiEntwHMRaZ1P3sJd95mNayj1JQjhMp8CnA9PRKy8oAXdt3UPhYa7n4Echo"
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
