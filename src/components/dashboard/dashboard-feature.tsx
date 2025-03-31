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
    "4TkWy4g43ew9JVoVzXMrRqm2HcZb1cTgxXMhyTG2WMdQc5etuR237wbjXhGSfKwoaN3iYkcpLQqyCdMajakSbhgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QH8HMRAD96s3PjAgjTkCfSGuUtQAfcuQ7zeJvhtWfFdHmESAhaHB4WDqNsAjvywruPGQhJC12TqJ3BsJoypCCVH",
  "key1": "2R5n9cMkZwvXQ3ZnCW2yXy8HZMtDQMLxmGy1Bv43XsikFSt719fidYUeNQ4coCn9gjsVs7vudYxf739j2V64ZTP8",
  "key2": "461HR7LN3FqquZ39CxxokeMpxVEChU81uLFNexHTnYNtmhv1yhvJKQhNpgLN4n8ZSdLa6AV8eojkCkMXwj8F4esy",
  "key3": "y1r5uLHgVPcCywkWem9aJh4QAS8PQxxX3NXit2MsB5oAVAKK3SGdCwDQYH2sGrr9ViTbconGaiWBsrpAjanFUim",
  "key4": "5fxxDgbwBKWZTMwq6WBTtXtApGQ7qDtBywn96eLM6ocCnPgrqJh33ZioKV4hPoC91oZuHWLFqUhjdoxmc1trv18",
  "key5": "3YMQHTf3o98eY9Qw427AUWAFdXEkryUzqwFdY1yT4foKCzQF39sQFQTpVarXgNieKGWGiLHN46KbWNvhG9yc26hi",
  "key6": "3Jk596rHopBBjATuzUgjftNZPTy95j6woDvhKDsj7dcZ3XERYAYz162kNbYP6etS62h8Fn48MTwTjdR3LD1LF6zJ",
  "key7": "2BvPSEqGK3NwyvP1jiCsAeQu31UK31rbzzAN1RCYGWAJVLzGkxjVWS96mYksetkeEc52cr73aegWJgKp1SCYfAaN",
  "key8": "3J4zkinYhfUKLCvkk6o5VJXrWmScUzh5N4ZHB9xEJmQ521PVjYUsirZoiywEGBt7XmQFi8Dfgpemi2VBNDoom3eY",
  "key9": "3cbjjzfZYAsbnngrzUAHRg1sVdLmNPGRuFAhcGTBLoVZLZVqtBx7rdYXEj51KsCnH6sdSyF66L4vVQctSK4voEwe",
  "key10": "2vktNWU8WHYdxXR7JJNnE3yHa3798uywmCFuxFdkb1UaQZ4gVbHV25vMueoEGhTE7isuybm9MxRxBF47SFZPAuwK",
  "key11": "2qBeTmZjuvdFVRFRTotsH2S6CuMNtpPdmZzscud49MvWAstGnkUQrvo84vsPj7uEYdcfwFNp3645GpyNc52KBz7V",
  "key12": "31Bhtbdnv2FXKavnwD6ffvGmnbh2kdikaWoQrVx2hFFhQHmMDiqdLci2AjyYKSWqMK4pgeFDJJxa65EFMN8DTH2a",
  "key13": "HxdLFvXxpEeAvtUwDqGNjn43krYmHymHFKZYAeQvLHKaDa1vDPop9iJfaedEDrZcEzCTXnJMvaPY9n1pqNpffRY",
  "key14": "54Tn5gZUNrgVVA6CBJMqsAcA74FZ4DomGs5d7AWdJVZRNT8nSyyecApkWWvQ2iFFUbqKMkGFNSreVM4s9T6bthB9",
  "key15": "3SfHUBrSGECeWT7ZBHEWDu7reuHvnVGE374duEe25BazxEQ4jeDW38SZfSHRd52jNq573MDv2mjQcT8RBr2PHDpN",
  "key16": "46mKan5RGrkPCoywy1YD8pze5e1xggMmB8TbHNzDCQzGjpZ7yg2QWYMrLWFrBcNEWpkgAK9w5cewoAAuDSA6PSoy",
  "key17": "59ecFSXGFHTYXPyR9BUjjbDRidoatqiZW7JAzS6WTs6XYukhKWeXCJgrM3QMvcwozLay4iZ75fZ6LJx9eUarsLQA",
  "key18": "2C7JdVbojuZkt8pZ7dga4M6TaaSbLTQBLx1WkRddbUrZWG2ectZS83aTnvNrRyMnUrWizNxyuVq5Bkoxu5wG5CmS",
  "key19": "4MNxUW751EMZ22HSmLDr73Av2k1DBrupFK3ta7Yy29uZEFRXkGdgYDHswfXkXiMjrqBvgseQtTjtNoWYzcgtzwH",
  "key20": "4rD2JysGav6Mg7mvNPrgtYkFRNF9JFoQormCFTp4yvQpWU5WF6ppmLe8DP8cp9LRVytUxBV2RPPmbptyUQYxVfZZ",
  "key21": "3wvA8NFsvTbSo7oKJXvgpHYuo8zs1785raKGrGzWVRfnucyTrTdrFk5qTQXrsAcCcKS2nYXAuEGsivFGLsEcSJay",
  "key22": "2UMHKbsNDuBeSccxMMxUGYxFdwgMeqX14BqKjbnNdTyCsd7LMniiiVDRDw5XoJy6y22bGVwtzc2qnmFZae2FHuwT",
  "key23": "7dJvXjb1q35gxKpywGgBJrZ9fCHVwN3v1RRFJ9HTD9Eanu6ouCg8qQWPkyZt1ak7suM1g2KpjHGbrQyt7sdK9pe",
  "key24": "5TWR3rHFWdA3KMnSAvkENZdM5FUQRZWodTkVRFwSAJVDkVegGSACUDQrF2EUEY2tVFwoMj1U1KWMUzNMwqnf8FmQ",
  "key25": "q81TTGWBckR5WFpGkCd9YAe2xJPEGiUMg5yvxF8tXMzaxpNgaBSiNUE5HggjyZwidegPWiuGergb3mDatd3pWen",
  "key26": "5P45SBiewJTpJDC8J3B6b2nUVeq719PPYKU3H6FYA6jHp2jwqXrMiqgwMFMmL3S2cxFwUJf35MNxMgZ7pB5ucHkd",
  "key27": "4qaFFEehGmScwFSnqXvvVAicxsUvZXkJXAV32sHg7ssKvPfqWRV95ofKCcDcdN1tMABN2GTZmTSnd1aG3rJVPp17",
  "key28": "4iRGTxAbtMn2mxncdhxZ1dwSE14DGudk7ScgePwBTbVzgYT6hoff95vPgfKT8XnnwsHyZviyzBTgF9ctYe5CH6za",
  "key29": "2oXVTeMHDtnSgufk6RmUYvf2N85zkyGXWDfFE6qV4VtBYCaTsoDuMGHKc33oFdqxY3QPDYYujXnEyVyccjmzQVJM",
  "key30": "4k6GUAFjrkjiyuFaAk9p8JzRWoXpGMf7m7UY5Qi8LQbqcr4JH9C9FEhq7iAZX16nVqWTd7KsSWrdn3qmBUzfpQh6",
  "key31": "4yyBNUZFWL5xWRY22qJzgZ2dQ2WoNgk9BpCG8naj4DVHUHjhTPUUc47Bp33cupAAAbJzEtA6xSYYTWjECc59HHqZ",
  "key32": "2EjUHRHS6vuneukAFYWKq6D9qvdqhjZ76sn91bUfea5thq4HykygbmcuP5VXVkceyu68jUyCK5G4bNPxtSm1YpUB",
  "key33": "2R1nfVGtZVmycFbp3vg6caNVUdfvqhtgjBEMHSMLiiSuSBMyW1gZSjPYRfWebgCcs1AwShLFXkEsHyURCE7KRFV1"
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
