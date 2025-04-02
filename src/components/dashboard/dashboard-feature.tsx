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
    "32jXNqZMebgfmD7Bsc3SH7efkQPvS7eUhMm6v786Yb49dmrL9rJrJDbZrzhJPy45eApTnrKnY2NAoHd7srewocDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSd8i6iB2jrvK6Db5hWncU7p6zs5TibALGqXToqRDe44Tm4ivSnfAGowKa49RAwWys916G4fk5Pu9XQNnzZhHFt",
  "key1": "n2mzNCrMzUwUTkwhPbwgTjv2TLEDEfzgaZAXEbVzVhz125vvujDur7GE1BfJ2jG9cSrjQofeygJ4pbW9AHCgHE3",
  "key2": "guDyPLHgasSq7ztqXatPYgP9gDgW4KA78wszS9CNxBguQZC27T52qttUSSCn9SGxu7C5fdjgWNREVsDBmxiroxW",
  "key3": "51V4HxXnAJmf28SaEnwVxT8ZkKBd5gW3ZtWDXBD1856X862y5FfMyVhWp4jgtYRF3zremBEontRfjFzVXBQ9QEKV",
  "key4": "2Wr75mujBrMCYMgp4csjYgXpAk3VgJ2rQsKXJpeLZvakXzkeDh64iD9jmjLGC8sXCCBvZWR9d1RnFQ6dt81dsnfv",
  "key5": "4Jn2sXY5s21ZZpfBGXq3CSUFaUnLuhrp1JkzUrRt4CGmCULtdkF7JN558m8wzxoxMSYg5DtxbDVavE34vWGs4RiX",
  "key6": "4hygNX2x6hrEDZssGjRyz6yY941b2UpKDeqG6FQkjzNerf7bSQ1r1UU5JDthBNDXoS3RRc3WjogNiURSNxPngpGg",
  "key7": "58d4rDc9SvzTRsHz55nCNe4dXMpY8UisaJgJSDCfJ3TXctj6pPMpPZuvVsgGv5zkTZ5LttwWsaMxbwvLW6LkywWN",
  "key8": "2zAVD6DRnMba2dkPKGTZ7SUcnNVcVKSGgzqJFr5sxznGibyF4WsF72PWpDcrBsnPkomHgaNSeK8is5oSaxA3v1Xw",
  "key9": "3EgpLiWKNsRjzmLGs1wqeaK6Hvgq2GspB4sTGPuExtFfvuQ3fKbhQuxzBCKwUF6MArgFq2cwveTjRR2TFRME6gCg",
  "key10": "cH7KYWCgxC45beo3k3VQ15iA6aS8r7bFUaspx3ScJQ6RE2KxAv57D92kQ4d764Y2mZNcF6PSGkDFPpTMzX7U69u",
  "key11": "3y71Peymyc1ngowtgq1fvJtZLbFG7TgLieM9pf6HNCWiSSCm5RmPfN4gqwKd3xhexa3JWZDAF7w7A5p3dP3z4ArG",
  "key12": "3FuxvS7d45btRiS7WR3jEaG4Y7nofAqG2KhJaY4aBW5FcHAMiewtRptn95EGwdB2pMRkQJcp1Pyvtn8fML7F54qN",
  "key13": "QYqJNrRudsbmod4pZAxLmJSGxPqMZLuAzeWG6sWLmUYnYNXjd3b6ncmHsHw46FJUf4YjsX93KJZrotYPhnfUPu5",
  "key14": "3Z3NuXC3ZyUJvuTuoy51U45QLEanpVvb8C5RvgbfSi3E9LY4tB93ohMUbjLuL49Kqza7zBL412cFNqLW1n1SQ4er",
  "key15": "5GK3bot6kbcdDPnbGDJ2yijdJEDm5L81G11AwoCs4AdoUVN1iGKYXcFjPsgwrSbYSBFiCi5xkvkc1HKz1MLo64UX",
  "key16": "4RbytkqAS6rVevxHMEWAYtyR3kW3x1AR3PmXBPcKGLeELMoVvQbt7bfWarEY9d9Rz2AM1MCUxkN4YKksKTXWGPk",
  "key17": "4MnBJ3dR1GNdmwYSJ7s1RPsWKqhfCWyVScxxH34SqnjcxFfgGQeQsCcKvBMvwBe32uqLXQ2dpb92dpbf38E13KBC",
  "key18": "21N2YB4QQukErLmLN3S4xUSxA68H9BSyyDuiYQX9un2VYatWYsZRKaspL5j4M2isxdnotp6JP7b12Uhwun2Z3WU9",
  "key19": "31bjheLKd4CWYASEp1qCGpAX5StyRmTorwkeaZurLBjT3VX9zWx8sUz2JcfYjqVsVVNGFRuR3YhC3hXqBY9BUPfR",
  "key20": "5h8Q8dy2bpsSpMBryRZTV1p8pZ7Tnc1d7Zgn69uXkJAaXqq5FddUfYZosHeQAFaDmiaCdq4zoXr5Uz16LAUUukkh",
  "key21": "5moUshZWY9vnijQN71WVqEkeWAxGfef65zDGLNnem5gDMk2dXpHsT2dueAqydDwwpFPZn6sdLU9PpiPusmA2LKWc",
  "key22": "4erSLJvBXpnY9AHj9bmRgtb6TVbsukfGKMawcnTNAxWvKTYaxrBCXEnHdorSQddHfJgecvNXnkq8fpS3cJcfvZ2b",
  "key23": "4zfb76o8dcMvbdMc5DUjYbQUf2EizDp8wt2gCoyqGPyHXCesMfFFAvztUXKuxTs9yfxD2pedVfNxWVe6w2qfsWtx",
  "key24": "3cYVA6jnazqNGeYX7ACRopEFi7MNpB8ep2wBE2xypbfhfXRaz25sCQoxNSs8BwMbJYNNd4hYEVTJ3NNKwJXNLVV",
  "key25": "5pXiqYTfSdxNk6vm3y3QMRz8jZT8Zydi4FruPVEo81vgmDbNgMJMwVBbs2YStQjiVxhsqbwQD7FL9iWxw6iHVPxw",
  "key26": "2VXwwUkRHVpay43ozyq6vCAL2ejLZLfpygCk9W51xaWFyr9EpyPJeHwXJp1gSdUi53CKCdBwNHSAq6hCKSBYHSBh",
  "key27": "47xkpsTUbbrRaxJby7mBDUw445sJkQHrisTgAQGt7PVti9mcQxM31c8AXjDZ8CY77JMJTbHsyx7GqDyd3yaRgfrL"
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
