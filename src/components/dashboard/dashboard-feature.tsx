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
    "4VoF14tHrRnFSh9bwH9cidg6UKcuSd24PJbcRoxBhELmYgaw6Z664inv5S2Q2eEjYbDFkbaVjpp8NSmGaR6boGf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPPtr1nZaMeXJnUjgkcCEzr7rBUD2yM4ZyrLitDrEoLeFG5dgSN2k9yHpeEdQCHQSA2P5cTdcsdh9Vda6qjuAV",
  "key1": "EdsBwiw1M1GDnfvVF7qwERfZ4CLVZqReaKpMLQtFqw5YPa2ZXU2azCcjzF8Kd2cmi8vLt5QBCHU8ZYGjvdsGkpD",
  "key2": "9ujxhpdd1dJPC3vB4hcdUBFa4BtBYMYGbgDjFXQ5N1vqivMsCdb5YVM4P99qhWrHuMefE3wYD9ZFB5Zi6PxDtMD",
  "key3": "659cdSaXusmzPj98K1NBfKVQN7iqgwucC76DU17WdBivUd28CDjUr3B3kuhWKJNjGuX9cf26bnYTn1sBmM7siSDb",
  "key4": "2JLSy4a4ZJdE1zZNWWuhGfR4pzMajaB4cPaeg2ZDYzpjeQRM5nG4N5PGReNXviJpArb6MBxDKSEa2mHSYiwt3mKX",
  "key5": "5xGoStGER3bAbknnLc5nxexQomWovsy3mtTr1T6XU4uuLHh3kddH4wcPW5yUonFsYPncXNxpGtmcGSSwgGDiviuH",
  "key6": "5k3Cit8cjA2E4wqCGJgXiCRv5RhB7nY6txA1EvawiajZ9qWgNc1ys8f7K9o7fJYnndR24mHM8XK8dxacbYa6b7uP",
  "key7": "4YVhwnyChd3a69XWZYuJbec9uFANwCxrVov9GGtfNfoDStYQJRJv2L2BW8xRLxmqA8qjgnwtx9uo849wbwffLgCg",
  "key8": "2CBKaPG6tNtNpSZYo4RApagvfSZYofBSUWKdrZJjHUv2wXSjBmvRuevFGuRiuGtUctaaUCscj4cQLt3fSojBdvne",
  "key9": "5MEhD5tk6pWo4HM2WfjkWKirWmm7ryk2iJuK1uW15AZZUG9MQ52s3tPt7rWJMXLD7a1TCseTbpb5Z6ADaWGqe4Qp",
  "key10": "2gVPHWDN96tEsuTs5UWtLepRjKVxtLJmL9PypxjGBugKjxtUrrmNFkabDZwcSXRirzbBqab7bsvYue3JNVPAjs8M",
  "key11": "5wjCftFbFdAVMWRukU2z7VivXEP7c2MCfM8BpsXXqUGz5coZh4y3fdDMhA5nXDsF4G4GbcHBSp4sy7vxrPA19xUc",
  "key12": "5waZVJX4EPQMwvdbfo4qK9t7pS1kQRSh5T2ytiQJcZaozCW19nKqj37D7UY8fp47krxVS4ypBYgXbSsMh5RX3mm1",
  "key13": "4SA9abBnjUra1iAqyAodwagoDT8PuY9EJEETsGFcYdmP3HKm7iq8iAa8VzZYQXfmCyZBAbuURsZPpktB2UcHMLV3",
  "key14": "frpy1G5BEehfeWz71LiTL6Cg7CZX1CFb91T8FCQrrgjhEr2aKQKWQUeUcFyujXhkWiUG6Giqnbgiys8us1NbuSa",
  "key15": "78DwUsMLq8ju7A1VCyujijtk8HP75d2tNLM8kpJtKD6vR4Y4aZ8aYgBTXv52dRAZr5DJe8VxRtGRVDrrwePPiZX",
  "key16": "B9jVLiL2FMudc3nf6rjWtCpYjg5yYd7HxKVy347sjp8h7ncGYAiECt4Sz7Mu21oV5tFa6NBPHv4kbBRzQnNvGoU",
  "key17": "2HcapU4mTsc4CPk6cYGaiH4eRkSg5BpMTztjohv9Serr1ahNJyVdBdcXqMGPrSCf4A8juBbSssioTbkFzvvCaoHs",
  "key18": "3MXqUVfzCTqfH4hm7s47EZt7kePqg1ChUDDCCqebpRib16C43w3jR1Ja5bgEC9ZjAinabaARN2SoK75erKR26R24",
  "key19": "2hEun6RbRrmvFcZc5Gb9KqUfGehVBEkppfV9edDbT5Agvty7VwcBv2qW1Z5MwAGxPCaC36VkqmgSpXE4NqcPEyrD",
  "key20": "23Nj4xmRjpHMTjXpohGRafZoW3yLHeFYKrYw6ua4uaRVcqTDQwY31NxZDdLRjkSgmmsCQwMeY9h6FPhneAMnWJDQ",
  "key21": "MoPWRXxerSyCWDQ1fmcdKTDpJa25g2mg4zTTAkkwpzZJxa4mbXRXNhvNqP3pAuR69xxLYdtXCLqYivXbGWUvvYw",
  "key22": "3bZp3kcJgCaUYQzxit9fL8gLyemWsqqX8JPp9kc1zdznf818wmqadmwhSm1B6yf8PW6TPEcpG9tjjFnqxcHWomVV",
  "key23": "xtXRXqKwx2T6MSQNoSbLGKivKesHMR9sfq4ppRwTgvtkBwyLCEJ1GWyrHgNwjjmR7vZQFQjt2yHc46bdGcnDg4g",
  "key24": "5ybjofk6Uhx9ibnYvXr4YpREu6Rk2JcS9vWH7dKJUfsuJx6F6WgYsyNfqZouBC9Kx3wPGbZoHsnVTjZPtt234oEa",
  "key25": "2hawyyFNpZeHCCfckSackzsBp5etdGHB1MWzC5wiAw5b5kLftddAKNJ9oJhVUfSoMvNZKS8RmmBpQgYBLKC2jxmj",
  "key26": "5QggdFJqdvVUU1qw63ndFyuboTjaVTB5c2mGBEfdQ63bHJYMnbrC8sMkHcqipG6SiSA3geL1482m1p8LBMC9CAY8",
  "key27": "4WtuFyfH7RTdg4DKZ2UxT4zYJwhPFik2mcBoCyHUefnb7AURwbQHo6BaphAhqhc5ZkJ3F1XbbCwKWe843LB2FNPK",
  "key28": "3t9qEhhp3cFKktCdeZYwkRWMphAWfK9FnDP9GKD354VoFiwGaUtTCDeWFbAMNeosibAzhvpg7tPukudxDjXJuYoQ"
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
