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
    "8fRRGB2khxY7QgphujDiFXsg6vjQKAuUGcAc5tmYo1ewnjeqPHFwdqwtvWRgqK5eM3UgGiwrfw1RyRa4FATFmsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUpc8FYajV2sN7ZyyAz9qqNAsskfHxe8qpHeEAwUwLpmuc3muG4AkGXyMXir9Tmb6uKBBG6x5Khc1HjgYfvtLsC",
  "key1": "2MPtRYyc76VH34AXRUErwwnUtws7uMcmeAgeMRpyytX2DTaac1HhDF2P2YpGzRzjZhLtGrqbhUqv7X3yCrcAWQuF",
  "key2": "rGHCdvp6WFhAFSNibRZQDxneMnkEGd1usycusomauLVXNAyQx9FVehy3J5AN1E3DDjMwyCXhd26wpCxe8xUwUpG",
  "key3": "2x6WQ7kTBVmcQvJWoaMM96PoiuLhGJFTmSSkBD1rG6CV7djfbhb6SzVVxYAgNqB3u5qUnUmMGJjBEW4ScX4Tq3bC",
  "key4": "3vecNrYQi9DjT4yZ5sCz7xMmcCMbr9k6AA6VRFiZ5zi1qAX1TpWGHzRxRR2oixSHncnNKUFvj67cbFzDePYFXN3G",
  "key5": "t89zEuuQQknLV2hG32V9gs5eX1K51RhARrkErm1xBQU5RVXTLPbwfUq96RfFcYzWhY5eDvZX7cvxaGPzW3k2AwP",
  "key6": "3LiH5rVsNgeq5jrCpVY15cmyXYQ3P3JY99h81QjMvSrDWk9zwqkfgjb63nNCpfB9jWYbGfRx4FEJKfEdrWBQtTTe",
  "key7": "3A6C1XdDp2iWkeXF5x3zREbkcLFt5qM63U8HeVDzqsV8m9HjoNQa29NZiu8iuaRZkPSHRrNNWT51CY7Y26GAvSBE",
  "key8": "4V6VXVxa5q7FNZsghVDgeuLWiRtPojzspgHV7tB7JpnYXUgQ5B9cfC4fsbugASfTAsHw28StUJeEq6ZJkB6W2Fuz",
  "key9": "2HFaKKwUXAd1v7PGcoE5pTY12oggP6LWTPXMERuJkAPpDPZrf4Z3UKP81ziAmJEtRM17o6fouwhJdAd4YVocfx2N",
  "key10": "2ZWUKYZWjDTvJbSEHpTfiew2w3S1yTXSU9AaCCRXyg1jPapVVtEKHK8QbggS7zqP1ejSMTAbmiWid35BCnT18aS2",
  "key11": "nhRFWf38G3T7dRkf88qL3RTnepCQVretfQ1ofgZTvzYBtAEMBVPumYubSzsTVk8oKYxcgvw9AKi6D8GMqzH6nBn",
  "key12": "3f3ioxd1onUpAX1H2rYSgt8uKn9qR6yVnq5uXpCHvkyeibuPChe5CZ6eSgNBRLsfpTbiGBbTESvBGakS3sG9QffN",
  "key13": "2om4ADf1DqdTy58F6Cg31XkNwaCzxijY7opJd2dEJVka55kH4TCXmLpSBqJ2yPMpZVdtwtcKgs4tNG7aTaJCaYYG",
  "key14": "2ZzVZ5RVRVEehEcFwz6FUPZ5ZdergrKJhZFSqpHKndgZnwvNUnQAYCAgKF6z3XrJ7tcmsd5KRF5tKBkGKLUf8iuW",
  "key15": "4RB85WNL6ZTMV46xkEHNW5e3rnNyYJ3h6nP2sqNKUp8idw2HgoJ23ibH72frzCvdDUxF98zeiQK22Cu5xpcHzp5g",
  "key16": "5NLy66ujpBcJ1ngEazrMS1vxj8eajVAjfGdod3T7NFatQXaz4qmhRR3ecxyCKS5JkdwyPVjuTjPavfnpUv5DKVcx",
  "key17": "2nRGzet6dAzvqXf6aHUM3raW8z4K9EnjZW2KU46ecfWGgh79WnGZnd6PbDjxEdQVSh3Asioq7oxK79qmzLMdD3kw",
  "key18": "nzrq1SuXYwirfihmGF6Ak8f99nddPdKfg6o7sDmqi9uMBfUEgQmmTHYivw7hGgQUtc9bsxNw1P47H1yjkfrehkU",
  "key19": "gwr2VrPtrZQft8xPndv4LuHe2iGLgCPbx2h17zpXG7wG7ykTQYDGRtqSer2KLssbc9k4ZSDmsSwij5j2TeZY82u",
  "key20": "41VHX8fhAWTRwWSFK4wM2ugqte4srVtmS67R681vfH5oqcFZN4N4624xn1onEoVLLfRWhxu9EsiRjeFmvyE7Ltcf",
  "key21": "2TEX5zRKTwMk5nfenBgWdb5ucsN1FjPikpafPtpgmDXxR88fDgxCJcXmqrf3tw4jWa7qb9ZNorTLwmYKy72Wptde",
  "key22": "5y8btUQVNoW8AAf3XMCj7aVzdQLGPPBzPQmci18yt9c24mMeZe1QYfWpeCPZfkhFFAiZvzujYpfqyrD7SC8afenZ",
  "key23": "5ZrhGu7renDd34wNuK5VZRoFcviSXfSLWaxLc3zy8qp9RWrCFqAzbfAUc1aDXhAX9M3LRmqcrFV5USeUtje6VVfR",
  "key24": "HifVsgMEg9EZvZtKLduFG35f6fePt6pBefKkHVR8QR84NBJ3nLqcvizp4JBeFrJJWMVgS8WjRBGd4pELtV5g9GD",
  "key25": "2nPWLZq259zsnVhRLnhD4XHiCx4ro1SwUA5y83g7tHm917v7QmL6514Lxr7s1oHbZ8tZETzzcGxrywS6eYA2joMG",
  "key26": "4CXHLzYqYR7amxcoG5j1qvehe514GPh7YAq5fQBzuHF667aauUTfpVG5QbVcd34ZLPRLEsPHfZW2heLuUACq3daQ",
  "key27": "28sN6NobyyhSWRKJc2Th9q5HuxosUsVanbemcX8W4LUFSPsBZScT4VXFpF2oKtJvB9AWJwm8hVa7D1K4Ph3a855w",
  "key28": "5qFU9R4NEZ7eSQN11AZCNNkMjJuTNtwZa9L9BHegvzPXkm2DdGRnp7ez3aEfu4xzXbejdArStcPQGb7JkdZfJqDv",
  "key29": "4A4TnYRV7dzTUeUt2N8GNjPPC4q5SAQqmiV2f4xiX3TGLmLHoeTcicANTDzFYZoYsrmNPb1w6waLLneh4Bm1yfEh"
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
