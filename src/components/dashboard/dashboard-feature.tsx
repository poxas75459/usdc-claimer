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
    "5FX4NycF17np2gtar3TMiNpT94Gh3nuhSL1cw8vfFXMoA44GBhLaFpQ7YDJPwKNNxQYQhd8coZLYrSk4af7WaBdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fsvbotnNAAPGd4i1DD1Bx1xBrUKThwMzPctforiSEw9pfx9nfK7Fb5VnyfueZog8sG9EVgmPXxU9yT6wX5uZVV",
  "key1": "f7NpcSPbpGkhAcUxD7pk3vdqXi36EWA2QcWP9qUBZrWXbs6N6oQNoM5TuvThUom6ATnkfYTPoTR94XnAsi7YFhV",
  "key2": "2575sAyE3Af6NPTUZErh7VyR8q3oWPJUHKhPvm938kQNvWeXx9Y6aYR3aaRLHBK5GugeFKR6vSeWassaqyQaxPbh",
  "key3": "58ZHUVxtyKjJoANkCoBBooGTKMxDJijasdN2Sj2VxKeNvX1uieNbC27bQ9kHwmmLGKAVQuDiB2g2JjrprdPebAdL",
  "key4": "2qnJ4eFk2kyD1B6aexYsagzE6eXiBbm44EgoiB4q3i8aJ4XsXZsUsGts8oNSz7g6QRWHxt8pF8GbiGCcAJ35JtYi",
  "key5": "2HuHT4j53e14RGYkkGTi3mwf1VerTKHCCunfkq5iNijm2mNeQ4XHmK37mAwdBfhyegtqMQLTyCMT9Us18XFZkNvc",
  "key6": "2YZnspAJGZ4LRstoQNZNJ897FDwBo8Ps16DFqATUi5G1dvLQuiYHzZ4R1UVhPG2z4qTjs5dRsh4cypzWLcYw7iod",
  "key7": "36nV2xzbfgUVTEqjnfhPpLWbcPQfyAXu3KMdfQf52HrGZNuuxkbD8BWmUJn5NHtN4igPEWEEZH2ykycauyxcCKpq",
  "key8": "2KKwu3ZY6a37qHGU43KokiNt365XR6bgYsD7sdi363zfh9dVXV8svSopwdmnpZygZ1PfGzXsY1ujvcs7T4Jeb7D8",
  "key9": "5gT2VzAVDXdPUNgDASJAg86BXUYD45otDruPHH7Hq9PdXWo1WpG2qnaykgA5yNG578yQ915NuGYMqJXZ3wjP4QNq",
  "key10": "2CsefHDEQiLETrZYB5dqsZrMMqhp6iNeQji3928evn6wFMrnM5afFWy1XaNseeZwrWtXFi4uLm1TnWN7uktWvhhQ",
  "key11": "2nPxtGKJPKCbiVj5J9YwsVKNzvi51X4WW66XAyayGKMps7Xnzqzz7cg2q33wtb1m7fkYTyzN7NhvQi3MaQBVmo4B",
  "key12": "5vzSTxp4Udrvt581Ezxm3Y3R59zHZcGtYkN26PEspHHVqoc1bZi6WHRipUK2mjjTspEHR7EbuBCB78JpAbdZKpS7",
  "key13": "3USeU7e3DUgW3UApxaiKxH6xYmtTBTtpZ6tychxMdLDjnWmKqSAqvFfKn1SSRTXJRmQz2QARvnHrVEJhnS1iXa8J",
  "key14": "3xDSuYsUx2LLcZzWeb1UhdALeLeWQqxtKFYyn9fg2f3TUf4dtQcGzbigniJ6FecSmZhVxG111nyo1zGjZz7tJUQQ",
  "key15": "4PNW6p39NsJLRR1H8q8363FrFoPdfHkzmw8TuDwQNfNYE8tYobR91NAsMMa2SCGerGGjZjwiktcoAoBhUYQ7oop8",
  "key16": "4gv4mKZCgw2METUZfHRsjAncs8Qz1kTNMX1fc5VRh7GYA6T7744K5SXFzUv16zpU8ZzN5KChxRjgdvBAFFTMebe",
  "key17": "ejUaj7KjajYN95EVwx4YnhCwrhuUJgonPYSMX65s3eVwnMxQU6JvQeTAWWMMwxb7h786vVnDdn4Abi5J8hkrEaB",
  "key18": "345Kv67eKt6DZE7DPaMh7gSMiiQPV1h2VWozCdG96SAtAeupf5zyT4kSwUACPoq2mKBEmfQXV27hRprmjjNzWP7E",
  "key19": "67KLswuMfAfBP9o9dTMjsJ9e9xb58KaBrT5kxCUfjqsyaxeJEfWnHyueRxwmVhxCVXUYYf8jELGdFhvSrsDcao4f",
  "key20": "2UPkgLyWpYW73ANkQCkXB1BnkuAftAA5nP42arWZtS5MGHcMrBmw3KvpbQiyEJsYWDVs41Ejvo1ZXmLM4KJf9cBQ",
  "key21": "5awdT9z4PMxbMmw6RNijTtekP4RsKG33woEomLj6DbXxYeJwLJ6gEcgeYy6JZvNFkS5SLAbm4coCgCSewtHam9X2",
  "key22": "yANWcLWqP4Abs6fW66NgdXznjx3oHCnymqkPR3QRjj1TwBr5zoe7Rw8WsCvvr7BGC5rWkjDRLSUtuDZhdPEN9yH",
  "key23": "a4WbmRL8xNKuANZhPkkFNmrkLghFJnRhYuS2FRzavk6AY8jP6m8chyXDdpmKHNnWTkKiMTPCbiUUhAPYTcxaXMp",
  "key24": "2TbYodtZ9EFJMf3YNftFvktKcZ7mw7eRiSVhe3a5KmkJzw9DpYKkEdWPZ4zgJD3ZjAw1HkaTYyuG7BKHaQ7xTvMj",
  "key25": "5wJUmECif78QSVSay9FJ1vPAo4Sb4ZhebPs6C4cSb4wkTRrh1M8jR8A17WxHpgVwyzvzrB9Jn9yDt3JFWEM6HT46",
  "key26": "3YVxPXPWuj14K9HBwNvfw9sX5FH1DdpXnRTjRMkHbmEwKpzqGQsew1NrkrWpXMdZhY3X3b3bjX2fzP1Kh9uWJPwM",
  "key27": "5GH5pa8hazLUS3TjhHHpoJXktaLNbj6vwuZofown8uhXWxzBKFaLHnaoHpAyJfQLfTLergF2YJzd93kpKLAPwgmB",
  "key28": "2F8Zsaf5fsCzrGiWweJsjcaksChPHTYBUtSgFaPscY2nHsH5JNmNkptEHTbJhWBnyD1z1YFRrdTVdLoSK94FkkAm",
  "key29": "4Dts6mvQXptFHoS88WwVXS3UXQ5ofLYXX99uK26JbdXsS47q2EpRvrea4UZG8Sjt461bF7Pka5CiF6pPgLTCg9Cr",
  "key30": "4YiomVvDFJoF3oLx5CE1guA21fdPMC7dhYDYdMxUBVxWHd7egh8JKeAR1YyBzffxpz2Eib8QqPhpMCnuLbwGxoyH",
  "key31": "5LemwrbtbTZbcPXumvw6VgvtmsvF3aKTnGTmYzDzHMJrtzxFTfrARPQv9Fzv6CyTVgCeDotUvUhPrV5A1Ackyoy1",
  "key32": "65jvWBucSxMKXbxoMSrroRhWkQ1V54upwrCxmKRwF3UfMHiebmCLhZM9jd147gxPDdfufG27dyJAGzS6iKJE1BUr"
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
