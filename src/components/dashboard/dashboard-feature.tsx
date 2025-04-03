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
    "LiKR9W7Qkcj46RnJ6iktrhd8M5iKP1Myag1kGcQN3HwPD6QshQrDDSq4oNob4FeEcygiRUhA7ygeZivbp3iM7e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yfnkKgTZgqsiXvbxewGb8773ZbL2J1c4wr9XNa1U7afFUrrgG1BYRmeuwu19uvbeTnuSDT6x58yqhwotxR9xNDv",
  "key1": "56yVX813iPnbMh9v6L8XqH4QBAMLVE96C5qNErH1mvGk8ADvB93ZcxzVwKBaooowKhZMCTQHdvaSe3hFJwSV5Zwf",
  "key2": "2VCFrUpU8RsQv5kiM2SNtWrwzseBZF9LZ7xwwikrspZ8LBmMaAsoGrTmSH42fusC1SqrGxbf1R5CPwU2QRtysxZv",
  "key3": "NNjjCZ2MuPedDzsWZYY7Yj1pYqNRoCzqUZVN162RiXqU3A8TJxzjsJ4zAKCbaFyrBVhHJfcnskbDZMGteEjbRkM",
  "key4": "3Usi29uKUv2LXpfGucjgfqR5en7aHoYFUrhuiXxRnW97LsSAc4vhYfwx3mF6UYxQvFVCKxqzikT6mrET8wGv8ifH",
  "key5": "5k86VBaDS2TViiCQpVebs4Vvb9Yp4A1rKN6SbMyhVtKwN34PnFfMNq3jnvgde6sA8ddTMvSjKycHrQax6QkceYF8",
  "key6": "2tQeXPbur16kJyUpaTC3k1q4zLvAwZHZS93QdCg1rbrbDsPqEieSSESxWPZHTJUsGwJz1qH4Ud2hZjJCnTUDtkzf",
  "key7": "2Hg73obE9KN3Wc452YbpA99g4vJF8tMr3jRpukKmWqqaMGTzXaJ7f5U2Se4CyBdpxzkUCdGxwif4AjhQguhpxaGC",
  "key8": "4CEKDccsYD96Hz2VxqGPbzEkPJsFMjwwW7qPdgfPjTi31HTy3FZLS6HXk1AhjMgwf7mWfbbGLf8WTVzzazPGFZth",
  "key9": "9k9M9TVcpFHptC331YLVKZ39p5bDMPXAXyyPgvDe9LeSNoYCQjhazBe7byDQXRUgQVMAB6Q5QZd5v3Tvp2BSUSR",
  "key10": "39Kg7Anc25RDyBUSupxtLptTeQJCP8XJUuLtkETL9XZ39KPtEEFuFQdqdB4VSZwsVtuXL5VCqWZ8uSFtd3duVLcN",
  "key11": "zVPSByXjHetC8LRweP2vth6JhaqtQhWvXNGnDP5KAySEwSSnkwQDif74gCXHChgcWdK8gA9kVEN8qU5oh7gQKR1",
  "key12": "36SxPDoN2yzXxPJds2gevErv66pdAgvfisoUSDU9ZnCRgzwwwAzbhkabjVqGqtkprPvF5mVpw4CyqJ3gZJkPYq6c",
  "key13": "2VxJzP3ikTtV7DMAFobXCp6iDHHT8njaZ4j8DHxFabXx2kBWNCjYxqZM92K8tSb7uqZxxX4G7qhm7dA4ZNcSvSiE",
  "key14": "3cTTd8gXGZnGfhyRbsVNnzTmZ8KoHXEpeGPXkheSL5V8i8CUe5jLiZjq4qJwjweZvFBKsgmevQ5hsXuzfftEc2Dd",
  "key15": "zwUp8HoPf86Wy98LVWiGeLF3KKA31cuDNyKkbvvsSL9XLnVAoJycTA1CpU2ExARd5BGdN3bDXmCFtfa6uBLDNMi",
  "key16": "3hFbZVgHT2emhG6Tfd4VkQV1xo66zMPHQjFtHht1z6RBeZZLkb69m8Pu5QgGPfLmmAorQdGNvofj11dvKKKa71hj",
  "key17": "SXnGvVXE9timVA1yBijfmwTvcD1oGLKCCkUd5pLLwT5qJyaibJkSxBJmoeWTgdo6NdbDu2qa58nmFBvxVLbkDGm",
  "key18": "62xnAG7AoZGoLFEPtYaT6HaE6eRDc6iGxjCPXBCFSx7wEx2v1H1VvbSaMSCo9GD75UM8wTgQWqbsaBxi7qt8QksV",
  "key19": "67E3LBQCLzhnVRo1y5ccPgCZzjtgEWrS2D8uvWMrnwqCxEMBxRi7z2ayVVrMfU7DvBw1Fgn3ESFGhQqMAxWMB31c",
  "key20": "8dr2H56i9DsTNvEvXzCCwYWDEY7YtBGaQDzoWiD3aC152oygjqGWSGFoooCL6e4S3q1SDxnRMks1QwaNnyhCz8X",
  "key21": "641itf1zZ1YoNSvWKgaqb36wap5rBdmQcfwcXab8USxiC5D1fu9bTJaK22TghzeUoJWSo6a25hdXb7AiL3Wa6osR",
  "key22": "5btnrehz8xWFsq9hg9QLfqUzEbHxdxes9VG9sNQ36cMtr3eUv18QNfdJntmgTDHozkEv8gDLXpBsfBEbbPjdfqN8",
  "key23": "3iRXbWBpevdhKjx4uk956N8J1WSJUNJmBM3QecRkUHznWYySFZ6cW8ojn1FN9LNTEP6XR88aSAtW5iHjvv5LBUey",
  "key24": "2ArGRs9PqCncm4Qu5ubfB7w12QFQTZ5jTLHMjUqopZ9t6JntNf7RvDFspDf27dVH9Dy55YfYnPwRNG4r2pMGjruM",
  "key25": "4zYCohrWBiB1jfDVzP9ycMPEsHyRTQNkFeQzPfTPw9rb1Vo1L2jjqWma8yz7szt7yAXbLHeLj7ZQhTmEf3e8nSVt",
  "key26": "JGDyjDAbPKxsdfygqsfTunxshAGEyWYQGkG2crJ4KHBBGV25eGZzAwkPqW3pto8mK8Hsa98unFBPD55n6N2f731",
  "key27": "5faX5e4z7yhfX33REgjRhmDBo2Kkd8DMHsWMmz1DsDgvBQ3DnWQV2yJLHYmn6vexvh6KRrSxrXgXtvRbhJRhyf6e",
  "key28": "4qrHYWuYxsgpWv3JSRxGWXyHUmd18bJGBCMRZrWaTtWt38fi5shq6eapprMDXaj9S2YJzFBFmqp4aJf2GJfsfmSL",
  "key29": "3n4TQin5ND9Pr5hbPffJ4FKkvQaBkYxpXzK6CgB5g8XQBYuHb5RXvYBptP8F5Vv5PgDXBQbTE23euJK5YAmBYCxL",
  "key30": "WFqcPVReE5pfNJCu9QKjfKyY5Nrze1uehMrAFb9cnJF4AYNogig91U9jncTrNqAMnUXiLSfmXucT9aV9ekCaiyB"
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
