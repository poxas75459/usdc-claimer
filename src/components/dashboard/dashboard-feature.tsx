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
    "2XaxCensYWQzjHnTtPgFQMuv4QiMS3DKTm94PK6HCzbGsR5MhHkvdPosrTU6MKyjfgs8ZZN8dpKRYkzmmimAfcik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmQiYTXZ36ExZxwQtpmJ39KkGRpWKDmixFsTSmf41VDytfABsjUiPSe2ix2paVtK7bRiKcavU3sFrYwFF3iNPD9",
  "key1": "4mUrfv9ieiXxrHqQyfxipvaW5zbfoDmYLhKzDxUcdn6cVBzqDhctw7E1VTdWpdZGxwPxy8uV4EqxdxYZYtQz7HEv",
  "key2": "eydU3d33iXPerNSKGPVrAJx8DSC3FtAqFNnnePFxwZxHx2LR3gsXAV4Z2s3jhknPyvXxaJUCxcNajAWptg7JFnq",
  "key3": "3AFJAR6C83LALroWMqpcJRu8ZdPkDAQNcwY7Xa2nSGXNNvNQBhdWAiBq2SS3GJUwkS677bANVgivNR5F6xtuDvK6",
  "key4": "5DgyzaHdYxN7iXBneT5f1TSMosMiS1HkQUBwDPM4RgX2QTDuLB2qk6CrGYLxUD21C38cTAbErL81JAYuLVst7Lwn",
  "key5": "1cBVubF1g1NYdPA6pYeibktTespgKrQsk81EccTKbfSVddeKM1iLvoJzWJJjLPM8ThREokcKt2Dj5AzoaKV13yg",
  "key6": "4iE6fazQHGazCij14R7SLAMe2x42yhojznYbBfzKwgWN1Xji5uurfyxYtfmsaf6R5WGkKM2Dd77tXCchF382eg1A",
  "key7": "3oUyTxJeYF5xHBXJPVWF8HzRYVtS456ybdywpqt9uEdBwXBnCqWNiqmm51QUM15LGiygaHaTgpMyUeHijqKrtgp3",
  "key8": "4gFvMMhvBU9DUvmLyp11yoACLQewp8A2fQP1T2hfdk9GaZNKgRJcbbdTyRejtNUVeK1vbibL7FaQ2LaJfbgKGZ3o",
  "key9": "56fBbb5kFMu45g3PAimgddQrLaT7MF3dfw6eb62y4PEjuwuU6TNXTxAmB8aC7BEKx5amvxEcvMMdTZTTpdWDjC2V",
  "key10": "4kR6jiCQnc8TVo8RVT8QWtrwgZ2T1cUa3pEq8gZVZsURrF2knkFe1j4KHJ6H5sdJtwNnb5Tb2nZC1h7uhvyiHhLW",
  "key11": "3ce2HKQqCyWMatnpScvrYpi3NS9g3QodMwi9Cyo4bbHuMJZorA5sdBCukVgasYuoyXh3x4ujjLApZ3GbvfKCkacW",
  "key12": "4RGjSuRgfNf2cgvrUCSbYUUx7L7B5fapUYmaZab191FrGsMFVmmx9rQL2kadmPs7mpB66qDwaCcUv9BhzBHokkka",
  "key13": "4TuBYA8QnUviW831TJg7QxSvtGYKohoGDmVvPRLx349P6cRAX5FBbLJUwYzcJKixFoVJp25c4RJhwxPQGvo851Yb",
  "key14": "5tuFSQB7M7vAR2vmEqWsgdbEBuYqoUuB5sKNJNyQXXCK1oeydD8ZcTqF3MV6rosUyiouAB3SwgVoxWp9ESmTmALD",
  "key15": "3wDFLvAP7Vs6eXGhW21QfWhmSUTBzGpnDD25n7dgdViU9C6yGVoLzTxwnBAXqaMDy7dyLvX22xJ94DVZwvbVHchR",
  "key16": "66vHCffFGBpg9TeZBTSQyaYZpNhD5ud674CgZFtHZ6wuxD83agZDsS8RzVYeBUh41251WtjqCYSMfjv8CfCa4PwP",
  "key17": "5pdaRniZ6j8sjmzpnwPeTDAFbLb4f8FwZxLU6WNCosirhbur7dr15QhHmgeaAteoNsKHTXakhSyb9vKtdPn7hWW6",
  "key18": "22Gb3LAkhLqQGdwhur1vKN6hXu9bngHtHUEXT3EAiEHSgcUKnfyrPbw5vnmmpDLtDS33SNpvKBqqZ3d3niCiAUFv",
  "key19": "5ccrD4xgChEJjEkKCTw9hRfhywqiu5byxrdYXLBti7nUxWLjK9MxX6fkq9AGVXmMPCVZa5s5DHPiJSeVuR4C1LXT",
  "key20": "57Qwmz65x6WCa16eApMauiAxXib6AeCpNoU8d65h7hqShcic6xSdQ79u7Ujwkymqdv8RNUsA6mcWPGeXp6GUrToT",
  "key21": "Mk4kjnN4jMbdgxC8YcydcRAjkkG1YYK7GYWcH4X3FTeyqZwkJVTbyuXfxveikWuuLxLkPTpmx7TJb99ni9X23xm",
  "key22": "61fMQNyhJwx5KqGJZyTGCxEn9PoNTpcSugwhugUzsdidbegX5Y3jREqqHPd8u5gcPKLE8Su3QWcDsqwTF9yywLLW",
  "key23": "4URM8Tzxf2TwKsV6uxR6Yxr7ieUNXqjeMC7SfG7qHF1jNm38LshrRfPaKZUL22qWa5M8WGx8v7jgxeADAFhAxFp9",
  "key24": "39TkJVnu2Qee7Pz8YaJAHCFo8YVgUd4RmsLzdwpiv6GA6yru3xfHmijeTwcsKEPa3ygcJAiRVhoMtX7eRBjF1Lx3",
  "key25": "6AN9pcWXKxgVWdAoY6ZhinPeK66Wqwb8grwb5NomWvqbCXjvYu4ejHXTHdmFnWbXu4dUcqX85x4gBjoiZ1RqBxA",
  "key26": "4ugmXP8bEi7F4c9EDs7q3bpaGfToVE4Y6wzaHNrRwfB9mvhLBmt2S8BwSzkzikrRqfnKKSS3Pa4P2gH49ZjozuwC"
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
