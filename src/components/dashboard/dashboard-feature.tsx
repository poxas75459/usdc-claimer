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
    "JnoyEwZVvUWkcgKkyPcvnL9ADum5xt5MbGmFFuWWqFGMr16NZYuNyb5q4YTmKcq4rR9441immzddFKm5KFvNxrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RKEP4Fo8ueUZVb4bgQ65TewJXAvSMzQERqLXQ5mKCs56GhS47G7PjyhsoEfJgNkZ561dRL7ddu1GUe9UNRhShT",
  "key1": "5ZcV9jEW2BC6LhggAQkUxX53x3n5YagtKFMSkXaV4aNgyU6unSXSpQ2WFddx2CQEXvxpCEWDGqHwAimSTchCYWC2",
  "key2": "4bJLQvS9DLsJGzB8tCJEQYv1DmAcbwE7VbXAecZV1Z1iBLb9jH6xF3hBswbCSbVHbxjNPgBqSusrTFva2a3x47eP",
  "key3": "3zJXdR17B1SWZuJyvW7nRT2C9pU6HYoEdTvJjupa2wDn2hDDsFNHhPZQtEdVgUQoGxcS4hRbmhxvuRLzvmGDeqDY",
  "key4": "3XPuz8bDKgj7nJc6VvPznqfvsrRcFBF86MRRFfTV1y1SzGrEP83bM9EtyYgaQtbxfotj1bZmHrPTHq5trjpXphZS",
  "key5": "31L5Bvs5xLnzDwps54b1u1vZ32Sq6VxDKrrcFo6FnRojxTShYaNB6y7CxDrZ844YE1vtejB4SRwHK8n45dnYv6iV",
  "key6": "39oydPAEJ8EV1XNRyLhbiKBWe9ZNnR7sTVjMyrxxqzqXPyYnpPWdw62uELwCCn4mpFtcsiEhtvZtE3kFLjyJCKsb",
  "key7": "21FmgT5vtjtGSxZFvtrRKRtVbumybh2hMSXUk3sdWY3ykvKEq8yg92HV6kcv5XGFRpmc52vpJdQkad8g3AEtgp2y",
  "key8": "2MHPjx15V1Q5uQyQgAT7F2PDGtiCREryG5izravM51y9T7TGr3yAg4xbyEhgaDC6vL5y3QUsBA9kS8KWuG1sCvFE",
  "key9": "5QKQegreEZMT1UU9mHPKN7b2agC2KLL94ByirL4FcCHNQAg523PdxdvCjE2f9Wn1Krf8GAHMdB7z5kkzTAaneuGe",
  "key10": "4ugLdyUSgEd7mZ8pjz1LULLGtDbw5sgEN8cZQQH2k9FmDFtXRVBSt7KgFPbBGj2ALQomG6qga2LBxZugCgNLkPAr",
  "key11": "2LfqCnV3rXQT1MxpT6JVUuneaqV2ma4uHS3QSSEAnknNNDw5XZbPhGPLTG3iUUUGxxZ33NAKyEzSyw7XMyTUKKAB",
  "key12": "54TNdEXnf3W8FTZnpkAwruW6jwFg3T4t3wZzxi7qn4MHnrjmFF4WxRkmmHkmUB84rqDEzLpA7HaDDzjbRuX64KCL",
  "key13": "59nQJHnWcZAEnKZpqFq4YMGwZN85daBYrzKVPG3jHkEiGRY64JJKFbH6Y8sf4J42VMEdFE1XRYmf9qLf4R4CroPe",
  "key14": "48vNzJVbGaopUAKw2orn8569yPciHvrHRH7eNne1qbg9XgquTrmSddgVcQsgCvGGnWAnFXkXGHw8ut7LEt9okiyh",
  "key15": "2uouCQBhNhHEkmbcmf53cPgfEYY6kRAQhrNumNAsTpcGK6hFhgCJEXKn5oFSBFpV2c9jNCTXXW1cexqCP2UG578Y",
  "key16": "3BzLH36AQbV9NABe1JiPSUSqehmZbZ8arg7jGnJcxxKx2wvKafUtH97t7oghxmkMXmcw3FsB19NgnaPGA4VCsadM",
  "key17": "2zwnw2Bp1dG5hDm3qKJoL139NSqMrquf7f8BYwtbsbrfa16g8AcUuv1i2gD1du8MxS6MEFPsX3CxBbkQxJycfdZ",
  "key18": "ZrGXtnrYu29m6dLcZoGmENfaa4P3RPtWpGJV8f4uAtvvDYvgUvmPYyUkfEsFMfJKXgHBT8ymd6Lfc1TKypMSeaW",
  "key19": "395BgYjkKKXvPB3yiRTTftTEp8QBxihLAbMbUEKah1A2oss1X27qRysakwQDvCRFX71q4UbZ4sAgdUQG1hFMWeyt",
  "key20": "3HqtUdkC3S81jNsKEWJsf9BbYKrmf244Ys4AaCzKb4hLeK6aVr8855ReQQBSGYaYZRM9WX22oEJEbtaFMXPoDdM6",
  "key21": "2oVfx66BZkK5bGeXiYBGeffQZaFpKxw28atUJ3ueCtfho9tEEwRy4N8XCCHLmUaa489SU6HQbMcdPzaMp7o5MadP",
  "key22": "LAsuDpt3uKtgo9HzsVmxJhY5rk6zT3rxmq8ud9P6kpsPF5Fq2JvdcVjNHZurCyfwyEJk5Mm5ZFgdPKwj4urR2kq",
  "key23": "3ixoHgNHg46TiARotG4W2gZFh5pyz1gnVkdxzj8UPGSUS7CXhoToAU9MN77fXZXmFzYKPJDuCJvGJX8N2ckJaRWM",
  "key24": "3VPBae5Cint6uLNRAV79GxcQFVAPBppNpkvbHoGHi1vUPBoedTngH6dCXCQKUoMwQXDRVs2PWDbJN5U69tu5kfXZ",
  "key25": "4cxHhjQAQBaSMtX2Vx6zMthY5Wr7dva5M5wqmb2FBadrbM9RDk38P38WzGdQYKCd4d9XErMxkPK9BcVFpYMzh5JC",
  "key26": "foDseazNopkzc4ofa8d3o49M2L2XckiTvovS88hHmnxxfRP3zeA2QHuCuE8mgWHHGirHfJfTQvc7ASrE35qCUut",
  "key27": "4ufPDKn64GZsXJ3JzQNnoAGH9DJvvzvC1V9ctNzy9WiCKMDtoPMHcHJDPRqExnjw7XZb3vF2CdXV5TNWzPppStLS",
  "key28": "5PZUFfBYCSSTUMSM7j5TU8UxG2nHmH49r7U25G79dKRxeJUijiN3kNNa65WCkbj6HewLxnQiChUxKHjJWuvxLmhM",
  "key29": "5H1y1rcSsQnmmtAdtA6EE47wDfU6stdGLaqqmEzYcCKQged4iYeiDh2mVCEkNo8qvsxsnfyBBFnwsH6qz2LgaKwf",
  "key30": "2UfxhihpJQBfLjQkwdt4ZVnRefNFLTEkiydJZWGybt4hF9ZhxhxYn4TmdH826z4MqNtbo3REZPTbdqp7A6KRJKUZ",
  "key31": "mhppbVBUjKzds6rQeJkLvDDtSv4FggKkUmqTxdjbfBa2CMF9c93Xe8T7JhxEj6zsdq3F2rCjmRugsye6w1aneqE",
  "key32": "TfHHiwuUr1sojEAg1hkBchXvNnFxHPMGancqBh152aDc9nSnoShnmpThpqLXeZAzmbksAFFWECKMw2QLBuiDiBu",
  "key33": "5tyaTHakMmo7x3DTmV84bojwcaeBcytu4b9tkd4dHTBFUj2Ag8q6xRHhc1kiaCPXvJnqbg5Dq85nmYzDYLpD1vFc",
  "key34": "5NpN5sdQp5dkKrJVNgNoaFtv5wuo7CoWNLoyWH53RRzBJfNcozcpWvZc3hvLfaJikNszCwK3niut4TRkmgizEc9L",
  "key35": "3Xk7UZ8GY2aTDhrfpMyh5QfyqKfGiVMLsDTcKMLKuiNRqFzQQuDdZ6KMhAjs3zA1dRuovSAzgeSv725dVjXNKjrz",
  "key36": "2JwWekK48KCYbS1bTWbUgnMiLiWRNd6rgidbvnGh2YwoAcEGcmRA9zgGC3CgJV257PEStnMsofU5D46AXCbspoST"
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
