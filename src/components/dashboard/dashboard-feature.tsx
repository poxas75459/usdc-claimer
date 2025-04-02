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
    "4yuTjsAHkSyuipQ1zfviu5ECGNfMAjsgXYpFFaog4bcL1hyycvmgznuCnoYo1K8VCeQcGZFB6zQRaNZhp7Hy2CpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smHLTivYURKnCXSJ4LAvYaj4vSRbmRR4TonsX7MXa8R3AUhuuPFUc595AaZyrhh4yv4T7APvhGf3i26zrCytqCy",
  "key1": "3PHotLHFjvL7J8zoL3BEtQFgTy5nK2qXUe9USJ6b6zMhRYLPWFakphaHN47KMFoyBNKSriq4my2f9G3ZLWkcfLNe",
  "key2": "4XgoVhRMx9fAKSk5CorKPPq9WKDHC3WzddiSGX1WPKZYB4qgWgpJJ9gG8Won7USjGVaUCV3ioRcny2arDsMwieiz",
  "key3": "3i2HvjdKy45urADrQddrx7roiYiXCdgwQG4QL1tdqtvkdKXiiYDQBnv1kARD15dmJh5faXcM7557TiLdHBkgaecJ",
  "key4": "3C31Nc6ne4t5iqzGXGTDxQpSxrbgcphqAGNqojrtWjMVuhu6twGEED1rCMB9tC976XYPFvnD6s2XvEQipY3KbLm7",
  "key5": "4FLNBrv3pwkAmUXS3jfrAjnjoRV2dHYn7GJvHbn4UrJxk9SHgBmSbP2Dat9WJxkoqL9g2hKENtbbBxCh9TYti77Z",
  "key6": "3R4417d7bnD3a9VQYbBHfWQPiYcLcY7u73hebPaGanQydExHY7rQ364wsrUDCCarKQZPkHDvRX7oJbAhvgkFQsY6",
  "key7": "3PKKPUjSGLczFooBRWvgdgRZtrqV7uBVMGyAg1KLiveQkiCrKYNPfWzPRuQRCK2iuWjArRvUtJhoPRbwpuaeNr5P",
  "key8": "5A4sEfP9Wu1QBfMcg73BvbR5xzGbHQZdm6T17uEoddZNMqdhPBnRbUodSrMsuGe3CCJmC4X8YnbjrSXYhoM3L8Bj",
  "key9": "3pmM5KsNAhgYx2JMBypWJ32p81xhM2XQsoerCUHz2ghM3pPoi6evhJhRaGyQpo6RV9qpmeb6xBFaZoFQPSszUyy8",
  "key10": "MkhX2D428BtWWT1reMbxGqnjDZXDV2W3VDAXFEnCatkv1vUvGq1Vko9fmYfAS5Z4YDbCNBt7gPpdnkPSKhuFM9H",
  "key11": "2MLPAx9eUXWSDEzDVp2BBFJBLLkgvgDWv9ftNoVthH41wCwjr3STs2jYAU77cBVLCYSoM2mao5MPFURYeJkATYXw",
  "key12": "3dfdWHPkk8BdNhEBNJgmzHFijzyw2pSuKdX8S7qLCKXCcBmTeEKQELt8Mfaf9uyDttB1KDpsPJZS8wpBnQJmq5wh",
  "key13": "96NnPKAy2utfai2gw7N26LM5j6Dvq97MfxFMoshxt7rvzqhNoaGzEnaAnUi5UPQPw6Rs16dTDTFZqYhbVuomsdt",
  "key14": "32iuVgCxDXwo5NWs2XLyE3bsgKds59g5XtgVdB5eHiuXZEZ2Bq4xofVFHfrkftrb85qGcDnhmUeWja2zAEYgc1eg",
  "key15": "DQioKErNDRiQVrMCUyK3Reoq7bZxb1rZtsy1VvmZEEsMp5Aeiinbefkgf3Uchfk7KY3MabquuNPQQy1LU5jehow",
  "key16": "2Kmbuttr59DBzsHCVZGHXiiEEjsbYp7ACEYRZ6v7xzHfcNvXPw2ZebBHRhqSRbUH1xwxa2Dz9HufWu2ACLKigF4w",
  "key17": "3RkDobuTETwg8g3s8JuJKs3fvPXT9XDxxDhZqdHV9j5VZXeNKq9yyYYq1ddq7VSxnCrjzeM2Qrkswm38PyvgQaHy",
  "key18": "Aa7uRh8neWP6WigEo625uBPPB4XyXNcpuxEHRV9Hu7HZLhP6194FBSmYHdzg9ig5k8nP6mbKdJdoRJZA6KLYyHm",
  "key19": "5o1SmqEamRRonNShCDGpdYxBMjW9sqGxbH6bnE2NyyRYjmgBERqboDcYZjC7isKXFXTXicCL6XJgx5RQdaLhENGV",
  "key20": "3mhT5ndfSUdpkyZRrWhJGz5W2krAKorfeLE1rDDaPAZctu2w1qQWdsoVztkGxxRXGng3Z1WokgnCFzFpGqwWwH1n",
  "key21": "5hmoWEcYVsspKvHdTTsoooJQcRe5VtLR8Ah9djmwQMVJZhX77VXbfNbZAxxPWhfoXoM8JrKQS981ZGR3F6AtBG8F",
  "key22": "5kd9wZECjXERJRg5i8L5EBDfcyGCu6K2pwC9671Ktzt2QaqGyqi57saDXgtFNSAqhQxPsN5tWcPVmiYXVwK2D8vk",
  "key23": "4hxu5zKPKBXtyCGsdDjDUXL9nkfTGucmMdRmSBAs5XZnKMXjdu3qV1mFtpWJVH27RmakEMa4MbN9PLVDfrzXFYjV",
  "key24": "5Tkt4aQMo1nugAJ62E4e9ow545phE8QwbV6QQaiEdcd6tZnD3uurwU7Q3XbwZEsrqcMorcc4ZTUu1FDe4DFZU9Ax",
  "key25": "5UP4vuNgDKvQz7NzMPtEwJEHpPJPWKUURRwfhPVKZjNEanxrzb2cfHxDDrXbehbrAqfsv3mh2nHjts9dKHL1XQ1L",
  "key26": "3t1R1MTgU1t9mXgHPEdCjkAhxU9K49gpNLnVymFFq9TdZdw9snupxQGrwJrdytoVJCMgRHL6CsyFPJesEBtT8M5n",
  "key27": "XzbY1Fgi2KjTza31uphRGA98CLg4mr2gLjQ4oXs34pzKsRh2ztMiSQCe3BNbFDcBeXVqVuzyez63NzHpvcxFb29",
  "key28": "2J8AGr2kXDJi9zhYgUPEvCM54rTkZ2C3eCumTHuSUyVjQymgg9ZZDbu5WB6tmPS8h5NJDmTBvi6nwnxpo9WLkjjj",
  "key29": "2baJ8LZgUe4gUoQuaaC4TEc9SDa2VZa5LNriogeuTu7GJRWGQTfu8A4PmA3tp3cRhoHqykcmm8H9AXC242dszmkZ",
  "key30": "3BvSGxKRotvdvThPGRsynnbZzB8uPsJjddViU3eHbP96fsq2XE1jwpEBgnZBBfECRHB5pJCWG3S8MVmhJhtkfFhR",
  "key31": "3MmKuqmNFFQCoZZR3Fo1vQcAmf3r4Q26HT9j8R6PtXtA82RAN7aAJPz4MVcYQNm7xSAQnEC5SAGqgwA5FUSdeRq3",
  "key32": "4BAryvXK6GC9fwiDTf4u3rqM8ZxjiaW37E8ZeZ8bhR4xtw4o9U92UKZsDMjMRmHf9jq5Za3x6YHhFkGUr3SkeKPe",
  "key33": "3QFzVaDbobwRxymMxysKw2d6ELPTYaWgy6hqMipK3wY15FzSVs1FB2Yf6TtiVv6RLMHPi9ogu3cErvHmFm13eSt3",
  "key34": "3vBvYvhRc4oPRgJJNw2VxUWhyYpkws86vTXwop2NuVoRV4jtTDeAxupdJxxyJpZiUPDNSHxE1p3UWC1sGqcQUJNy",
  "key35": "ofDDaDbVUhnfp1X14iFXVDXF4gN2tzZ9N951zgG4V7ckFcmNFEd7NMvzGqs99gsd9jQhzWXVDjpNZpSFifWV2aY",
  "key36": "3UZoWwBkmGsnTKWrwAJX4yS6VavkRvZaVF6vAC1iuoxQWHcftJJZwujtJfrENnv5yaoSMeA8gXqbBPP5BmdtXdjK",
  "key37": "2eZR99Ryf8AuQFH418hDjthPYAXEXQeYKDS3a8iie69ikW2N6oF5QxY1kbx3J4V2zgTpRevyJyKjwGpbrhJ5vt4B"
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
