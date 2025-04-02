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
    "2W2GtMUtJ7fYgiPbUtHUyAE3pNLBguEurHFA5w1FoHUhrc4vbFE4iKQpRMitNLQU1bHPr4xd73sVEh8XfoAVayCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tM7zb2J8275boqVmVdhnRRykCKKrDC79qyDfwjoaywaRYmzLF9VjC2craDmbqX38SNqmntAJMdxW2GQg1ULFcwH",
  "key1": "49zeYyLvTehkNF3HVXHZa9gKf1b9HztaBkg6X8JmNNGqHeeCiD3GZcgFYvSrwyMXzKuNk4NV1RHdtXtvPbTmv8yo",
  "key2": "5WL2vYtUZHaj1VrUemcFjdRoy8a5DM7dLLcZjtkLwZyPUyu1XXmhvjho37LBv7NdCxeqyZ9u4b4Pt1RnU7XvQPy6",
  "key3": "3B2xRV9q6viWS8bjeysi3qwjwzeje2aukVeWMpPepU5RMRyxCJifrrnGRwr2XkwoHrqjNcgd3xe9FUmLBH4WREDo",
  "key4": "3hEgFmFAsa1fw7jxTMv3DD6TGaJV1CrHrRiTvvdUC9EBKofVDzChmfyLmBixNtzmQ5d39wY2kubPBJ5sizPoh3uC",
  "key5": "5B3zNJbUbPF5gsmCmkGM14YC5Y55wSh3jVNATBGh8ve6hiYzTKA4qdidhQAdyPhCRK6QVpTMTH4t3sE7gp26Rbbh",
  "key6": "5xK35S7fpHcZEDTi4zEsjZpCZD3V3jRqXizzNZZd1hVrGjyvoqYzonwUAhFXXSVudk8qPoRNt12JnbY1VKFtJJKW",
  "key7": "2pjmv76EsjEKUiv44zNguVDF7nZQwsdMQ9ndppEAZ7N48C2VQvPBiyWKKH8SKF53GJ2uWxZd7q8a6hvXcz1eTuxd",
  "key8": "5JMBxg1it6TVMVsEd7VuxXxPZFUhRhrkhNJSzHKcFc8YhLDoJf8DNzsVLACWU56WjA8F4XsqUxqhDmKHympfyDaZ",
  "key9": "2ptSZDJFXPVy1TZy6noZtio6GLLz9gh76Ry8fE1v2NjwUm1YPkYaYg5iGV3HGrskNWV41zSwtrZp5P1Q9EykWf6W",
  "key10": "5cZatfhMbWF9XjWxpnwgfBAZSnujusebNaYq8wPpsyEoKv2LNVM9deCNZ24rBew56VXZjR9extdUMw6oT4xA2CKS",
  "key11": "3zwkwnxNMPnb8ykCMTqQBM1i4FnmP4VwdjwHq4mY4cu31CWNFZANrzc6wmF3J9iaZPEG91Z5Ue2HYNPFV6vrKjAy",
  "key12": "5MQ8HVoKvp4oa6xxSxPWE1cvMJWZDjeaKcaxewqafRDNA544KVc8e1oP2fnf3oCuP3eWxGiGcFYg1bCWYX5Sopax",
  "key13": "3C1B3C7kPt2BnECGfRdWuK9Fy9nxSEzp9VxxicPCoZgv6SJTkCunu8vHbePtSZvQpu9KMDbHcPh4ktZ7SDBX8xJK",
  "key14": "2MjbVtsvUwRpRGymYgwvKrkRSkARbqsHQVTwDCzYAgcmJFZNEkcSBYqkqMC73mV5X2VahyMiGkVD3dufrBHzV9bB",
  "key15": "57FP1H3ZcXv8WngcvwcWsMn9vxx4kbCSedKvzFcTkgmSNnzqsogJEJ8QZ89W5H6QV3NSnMNWbdKUdjn2jsU1qoUB",
  "key16": "41PRWm1RYwhGTqxFRwTTNfuo5jSR2SvZTzhj4DS5qUQWC7GDZDKFkRUCNRebb5YhYFBtSD4cC1hnDUX8cJzoA3R5",
  "key17": "HfEDT63Zdn7LRmBbmtUQUnBhGzcKXb33BSDaQUhp8Cuk1ZoVboJXEdDaFiAsQKLgbuvmWmygkwhmZFoMCZqw4tu",
  "key18": "4pwLsHfyXU57DxZh7JVwKcjxh3sUxXGiwiA6VRAUWD1UkC6qowEkN6Luay7chHfSyXXzp1PhbraFzZB62xekFBMP",
  "key19": "351jqNaWZW9G2XrcahWymRfyDUkEkCdpyQxyoyTfmrT8FW3AJ6otiHfAgN5CqBVTa81uqy7c5aJE3awx4iES2UPg",
  "key20": "5YVB8yy39kq9kDSPnmnVbVDZgDMbdD417aawM3pKw9s61fAsGNGm59mGWMc5HwCFNAUsLE5seLQs17mgMuZynKQh",
  "key21": "4pMj5edkrrNES2oCavXhuPfpvd1uHjoWxV359FXCfV6XS7Q3sr4mLeKPjByzQyF5JiRewR3UGyqRBjvzwYN9ogdk",
  "key22": "5Xd3V3RA8nvByqGojqm5DSskdtC3wT9mqChVmhixQfvGGU6eqLoQhvLUJVcyvJJEFqVsanYn8ECVQTPPUTKgttsA",
  "key23": "61rJXw2NJPugbrVuWT3xXDjrGvKNzG4fQg3tuEuDGjLsmSi8p2m6oNVVSNqSH7JcMBsGJwoqfAmvPVR8ZYetGJXC",
  "key24": "2Ke7r7mAweB8exXEWkpM7AYgDTNH9tyDouxZ9NtyCtzttDszcLAetS7QyzDpjRZJRw3RGHmKrcioe9JhqX8i2uZx",
  "key25": "9N8szNENNh7rchS9453XqvNjWbecetRZDQQhHcFBW5DHm7vTEE3urcfDFW6YvNZsnTmFUrqc3wSRcMZLmSehfn6",
  "key26": "55eeX1vqRyB6bBvdq8Vt7oyoNKHwHQq5TQwixwnrHkcW8DcNHdLwBNa4GigXFNCYSgMwRzHuQYrhLKaJQPEqYdur",
  "key27": "6DErLpvY4x1tRTABNxeTRKKmu9ffDSzJj53QsyTRgXZ3HWE2JwZ9Y8Rx8YfMUvZqZe35mB79kjhUtThfHGaer8e",
  "key28": "5w1t6DbHxj2xJJBUV6jVHUqricQ3fMsxd3QQDUY4VdoLjAAYBfFQLwMSw7bLvcL14ivvu5NQ5dtGMbcWxAdJwMFo",
  "key29": "g3Xj4xCY92ME4WzYYTEnb9RcSy2ZEfNdX4m9Gk4eCf2dzeshpAWe1FEfVVQGKoQcgryx1eCrULwPJzbP7uo8hDi",
  "key30": "2HSuNxrv59nprb55h6xTxW2okZ9Ha6vpQqGDKA1CwmA14VKh4SDaHQDbt2aCTGL635QiEnmoqfCuW9H2Jaq5UVEM",
  "key31": "3VMtgeZ1kXQxVd5hHvHo1fixFdSGsYjBpSQFDvF7z3UCFU8Akfmqyu3pMJzHdnKqTmjuDSLbciWuAqDwdggaLfCi",
  "key32": "DFAnrPsMFx6fRAxoCfxDQN4YCv84XpXpfZfvuWFrJ2t8NwmJURcwsMpkGmHUYD7UhprHjgJdheEtCRJbQdQRCWo",
  "key33": "3AVsNKpGHp7p1WUDSDEmCZWjTDBUopc14G5mZUGKHJpz6eNapNNu76kkdwfgrJc1x13ggfDAMuRhoA7ANfjpwgSb",
  "key34": "5Q5zXWNmQkVb1AFD6k5CrNLoHazvMwZUEyUsNFKvAPHsE68SFLDKsXDxcypWUQZeLTgibjKQqimSShsnh5Lx7YUW",
  "key35": "4DFnE6mPhhEasF6jHcegZ25zBQuGF7hSnQzKyReEPSHM27uyPbNfVDeHjkNSNZZoFsvT2spHWxS3F2ssi7CH3xQt",
  "key36": "3Ns1CwT7BQVzTdAzEBhqKzjJu7Dokq371NHqNPAQw4XmDqKBVxPevThFS3QkV73gRC269oqsQF3DJjQEKrbZS1MG",
  "key37": "2mfk3TpJno2MqfT6cBe2BTMXU7636vkYfZtZLVuUxA7mT5s9Tz4jrhoC9Zqh24YFND5j5Kbsai5CfpBcMpTZembP",
  "key38": "5f6LpdqiWeA2D482bqbiPwr895TgZdfeRPrduVq12gaq9JR1mxwtwtLht43nVvXDCbKegZPqc8HgMWReFzzPoVLy",
  "key39": "5KLBDezBLTRxtPCF6mDqxcQCf4WsWjCwNn38ENjyyTAkbeZ6hY45BxA6vqfnzg1CdUKdgcK5uAQpx5f1fQ8KGQXb",
  "key40": "2xZyrwndcpbjoEagP48VTMz9UwnFKQAKyz6ZQqj9yHD2x6RN1NmFTutpHizepTfEa9L1j5WXrbZYhmuYkJ9zCXuK",
  "key41": "3CeDGx7uv2DDBrDVkKxqYdrcMPfY5B8HGRU6mMh6qd5Y97vyJPYxfDcFTgBnkqWp4vKVNJcjh5vgdW5mYoWtr7dG",
  "key42": "3hm1VAWiYme5Qku3JBcdo1y1tgLMX3ush9JGtWjos9FuhhEy2ekVhTkSjFPzsV3dzoixfAW78pyoXdThin9PsNTm",
  "key43": "9cb5bXpARwPktKp4iy2yJpwnLMLeHKBCQzzRqyxqBZ9eGgm9tGLKJgtddFvPzfGLEiXvPSRiavAF1yh5xPJy187",
  "key44": "2i9WCbapqPZVWhCQXSTR9ZzDUAeicv1Jig6tMs4GJDQDPXs7DBCoZEaMpVEaCpavwTbXz1wWZkLss7yF2gPFHE4"
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
