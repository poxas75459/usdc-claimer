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
    "4w4keae1kLLb3Ptd6PccBo2fHcEpJFgtpzwDRS4J86ThFAoGRwKZxLzMvSwBQBmtBxUmv6iHYMvQChyz3XRQ8kAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rXdviS6DntKfKyvdyfe6N4Mxxb4QmMQZH7PHu7GjB3XeQrUJhUENZT49rYjhGUGuhkaoceHt1mebXmG2AdyfJzu",
  "key1": "3ERH5MNK6sPVB5wisKLg5D2X4vEc8ZvgmYB56Cd5gXoMifBJchD55oYD6vE8kjxLxiVcvYwUZFyrDkVL3xo3Q4se",
  "key2": "2iHdfijaeov3auSyDaiNUjrEDS6saNF55mWoLrDrhGGVro8WxQW9RjLJ3oxr9CvfCkxWZ1wePxcrLwbyiXTtiLHo",
  "key3": "59S43e9iCrU5wjS3qRw3Cd4pTaWU6bTQb7JcuqtL85TmQ3Qk7H1smX3bToo4F98V71oWQNxqkV914zPZ5nrrqkCg",
  "key4": "ofJWgzLiPcdMWBYJK2YwhKdLW6W8i5yWjaNbHGZqb3YCaZVA27iYBYxa1pFKAbrm2Wsw9ez4DFV4UYpTxzdZACN",
  "key5": "5PVP8Y9BPA2j67h1ntpNhdabB1N16n1LyGXnqReoqZk79s78a5HDGX78iNt9URiRogaYcxJcChGQgMt9Qz4zsqux",
  "key6": "5hfxpCWneswVGjxyovT48eGLwY49xtHrxTUSEpKFoEMGVtCP3Te1KRbHfAf7waF8i63A2tsz8Q6LEDcdRoBy8sYu",
  "key7": "5GUPMUPHHhNYCCeVphbEKh7TbLGZKZMyUAH14WuCciDXh1djFpPfZmQ5LHJwdxKVQBGWn8LdqRLHNnHcqnSmCDy2",
  "key8": "3mD8pJPNaW3Yb3PaVFg2CjUVepY6pnQ9GRfG4LwCGXJSYMSsmXza5TgeZnXv22V6gMuwvMpgxaXnr3DYvvq3CDs6",
  "key9": "5XSM43kqBaKdfT9ZosLhaCh7yv5aweGNjS9D5ckipq9JsiU3mAvAzWZ5XSbvi6PpSh25TC4T9MkoUYTsSzzSXDba",
  "key10": "3fcrLc5wxrsNhk7sCmu8k6RdhnumzdgMET99khfMF9ABn7T8LDdqDjQK8XrmdX1nUFMXc4ymWcXVsh8Bb9mojuYs",
  "key11": "5Aavq7pzHryJimGdHR4BnzdSh2TC4m54mUmUgsWtpA2yQejqsJk7BgbEWmgz3rFjMDdhXpwYPfFGY2nqdLxApWbf",
  "key12": "fexFdXB9BmxbyZ1iYbs5jPNpk1nAVB8Sm5if8A8j6CoVPreDHXjiWxhN7prGYHS256HYrFM5AcYFmmsbxDGZEFd",
  "key13": "4KrUc4coMbQH7v9m8BWc3n6VgA268CmhXjTh7vJCt4EDo79fhAmvXddtZd5KhdfzzhZApV5D5toTJeEerWhg1TYK",
  "key14": "dviRPxvSN3LavsEnL6LjsQSAiYyCMgSxRQHuc4tCnxy2F1cyx1UtZPNtNseTRWSSV2NQ2qDsvX2szpg6VecYJkt",
  "key15": "4o6xfjC7cYrhEXn5Dmwem7firJbBj6mPVoTzwZC6YUSBgAQJFFLyka113GQ4mK9RstSpc8utZsyjwcvHAGYSRJ8F",
  "key16": "2g2GbVykZYh9NCFrQQKeKFXSeqtZG5QDGRyT7DT6NrMFubJd8CmVcuMMZVQfCKKRmiv9fhTh7SHDQss1yprdf7pt",
  "key17": "4ETki2dt6wDLkvEpfKtVBd3Mc3pFhbUo161tfagBqWzSXPw7j8V4HDHH9Asq2ehyDtkgsnZWKnkbg1pUfnEPPeP9",
  "key18": "v1dwJf9XjRvAqpbebmSFg5w6cPMz8DF37aRBezDBA6CY8tC1KoJdSea2TPAaX8618fee8bxF17iYiXhxQ7PYqpg",
  "key19": "5WxQgxCBVWtPboMRoxK2SUFLq2qshbHbeUgAV4z8nmqX27neYMowZFdw3AvhVVasoxMECuNa1BygAWpthGXQmKVy",
  "key20": "5goyJ5FeMkBXK9ycJY7RMdypcAudmyfSgs2fx9MUxVdsGfmQ5sctjEcGgziYeND1hPyDkgLcB2srqTYZWHV3facM",
  "key21": "3uVuX9CvSnhv2MjNRwf3oLZHP4DtnfEAkW28Rpr6PJBYi18puDzjgHpoBGKRGUgp7T2Em8BFdeissk7MXk2GGHbR",
  "key22": "3rBNvAEiV35ZoBNnVWr2LTnwLqEiMckXTdrcxG29VLujNqFfNKyXQ6MGgHQmaRsReTjJqsXXNr1CWJCDc8V6ZS3v",
  "key23": "VvVqt5E32VG4EXiZh3wXoLAUJd4Vk8tpGSFRa3iHyYWd37RMY53AnPqL5JuFETE6A74j68Xp3EAC2j58o9Y2uJp",
  "key24": "383QENmNt1KGoimq33EeAbBVKshazkUtmnQNseajEb12qjzLF5iC7FWHttXjJCCCDKEwjMfdaq3q4afPJWhyZSPZ",
  "key25": "ViSeEwGZ2t45sS9To8QHsqvXJ1Xj1NnpgnEDX2EHpKMDE1gaPJLx4Tt8Sn5MxBZAJ6HcUa3yjzpjQWESvvCSdzw",
  "key26": "ckPYdAKbgKMUTGHztJx3R6bnnvuyYhZyvNLEf4JPTc1FEbX3kfDLBJo8grh8Mm7hV5xjxXB6RDYoqaAypHorYSg",
  "key27": "3JFKM2NvBvHH76LVo3uM7v9o8jGP2pbemxLadq6Dc3vgVQdDiAzCiLc3BBrxkZyyR5jty2gcnYsGpgNud419GRrV",
  "key28": "43UzLAFt9cKuXLR4Sqv3dANG2w4NYPzUAsho5j3ioWtwDfxU82rH2YFy2sgUns5hDbL2Fj763a6gQvGXTAAqddKN",
  "key29": "whvWopKB1PBembkt9otweHsgReDKXwSgJqz4gAXnqFQwWvUYcCkmnD3ma2Ft67zjLLCqFYQ32toN1VTV3wxhCY7",
  "key30": "5nZDWKQsnudruJ1deMhoPc5LY27sTvqJ1GFkrgcWHSQSue8b37DYivogTQp4LnKZNxiEkqkPKWa8FqTw6499tf9w",
  "key31": "5MbfgYKCokTBZ8zjLey3ebDb12AJRkgkfAeFnMMADRuNE9eqKPZFRrwYn3mxbaeiWb9yWNfFMJ15bjf4Mc8YjGfW",
  "key32": "45WtnNFFTDYwNKSHuMN8ZhHszJ4iZoqNB3wQeBbqoKtNczU25tH2H7LJXtNPE36rxcaUJoTnDdNBHhwYRjgxbBNN",
  "key33": "3uDgHcgB8SQT1oDEPwuSyoL4mVsSn35ABaraiqFTcLExE7HsCAr17XgsK8rPQHBQ37LtHaJ27UmEqPbdA7nfBQgu",
  "key34": "2ASKNDiFhVJqapaZ7wtJ1rYAa1KDtApUPfdZT2PtWMx4K9R3SxmsMGCk4FRoHxRaJFbV49YdiTYutxNrBebZWQ2T",
  "key35": "5aghzy1kGXj2EgZQn9tW5yhBvPnPmU59hshzi1UwQaiTKjotK9ZhMDMXXdipU7urKnQFqSkUoRP1SKwoTPSW6sgg",
  "key36": "548nytxC4y8x7KxsMhp5z8Uwsm3bXdRK7Fz7bYFfc7xyLQJj7U74sYsFubc6RCZrrxkoQbm84Poksu14iyxy8adB",
  "key37": "NeuNQyqwcxWmMP6KhLt3TkzRqPfY88UiZkqgUrcZvAa1bVQQmkd6vENZNSwHWNRpLdcnB4SD2emrayf3kZhdRLw"
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
