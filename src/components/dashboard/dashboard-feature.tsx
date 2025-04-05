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
    "3uY4ZnDL55MMEbdz869SpCX5xELpDse8QQ5LtSsm4dQL1qaPE3eJER4sKiGhALeytEqafp8i3EQuKuuq6VaJ7bdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fQXXdRZaEqCDsY7mGiEoAYDgsAgEXkQ4vB7Wam8C7WxLodvjMjtd1iCqwQr8gL2UDswbPyK8S3aQuow4o1yjcuA",
  "key1": "3VDnBCrPVqGAgoTH55ujZndwLUtKjPJP6quGRT8Sa2T8RAS9XMzg98i49UiwFip25NkUMVbEnYRb2ynbmZRrZE6r",
  "key2": "51rDx6yCQTkSqGBnyZ3nmgjaXNuEKoA7iKEHHnGaRRZMhrZkgLXCVsRdMvCondoZYUwPmfHJXsgMkvY6iiT1UEqD",
  "key3": "3rd6r94oSottoNTymcccSUF9S7V32Smwdep1w62pRfdP9MUfVVkPYbLg8D7VCmesFEfpiH3VX55kQcLN3PrAsPon",
  "key4": "5coyHEJDdfGtXuAjfQDU89iA6yiEcAwGfbMAWu1cvMnQQ3iu82zbUSa4SxeGPFwams86MYp5rZkKefw46Q8HTyvy",
  "key5": "w9JQofKVtLoFw76krPX7fJoAPrzhvH7WhLWH855P4ep2P39WhSYKs5kqJ3i8vRnn1MktpFLaddWjoQez63Z7QmU",
  "key6": "3P2RLs17kmJHsEVXSPbnjmUZ2VfRHtvVM8ruVRvUX5gp4NgdrwGa8Fxte2tQjkaVLkWcPHTeZa59Vv8QXXMMdT6u",
  "key7": "2J2aVGDnfcqdeqck1vKWm86HnsV1EfnTq882nbrFzZeFwWdaAk61yWNdWPym4nunM7L6oCQnnuvPEEkvvhc2kKMJ",
  "key8": "Cfn7hY8wNbeKjxXXSQeSj7qATNvAuhPp8YVKezjac84qMDwDUmDwzPzdPn5AZiwwZvyw67k3o1TUbemS72zxM4F",
  "key9": "xdpWGvRT1DiZAhDsuLPeToo7aDRaZngPDB6XkSrfcSLh6oovk3WRLGbEpbtKibDmAVFH4zAhRYby5HyQUHGye23",
  "key10": "5gtiMGd9seYUyS3cATBSkd9mX1rfzyMicFGvZzgT6zEEWruQ83m3Fq9B8Zthou1qC6jXk9oYTseViZAL5bDrRuaw",
  "key11": "535rghvBzWymPxhXaXTizYBSiwgAR3Tckp8fUpU3oiYt4jKv3fQX3ccrXkSunjfpy9sQZuLkQ9HUkR3jfEPpyyk6",
  "key12": "5H9E4KRtDxS6reNZ4CEPeSQeXQgsBxfQWnYA85p4HJ37wWW8Lpwc8djn6n5ujtPaoZUaHqMi5JqrPeLpWorhque5",
  "key13": "5EFx5NA2XqzLBcNijuWRG2jgDbMVkQD7JvU3beVXoZuHC2vQa1RtQZ3qCDp2oVCgXXghVohezdKKgD9JRZuWm2e9",
  "key14": "36YziLTSeRufoifmqsaMxg1dNAQN9Lpikh2dCYfCefwd5eJAfDUPDkjhN1HviFNJiASLXBWFegN4TPKcH2Trd7e9",
  "key15": "4pLRcX63N5rYrwu3N6C4MeG7Usa3dfzp58XAVoeXFB6s4vQmPGQabzQJceuy9f4DLYnbvDymbhNJdzUYpvnGWSVf",
  "key16": "5Sx39fL1V6aHHDJRWqp7QpfdtozSNnvcBYEcJ1Ko7GCUVDCpeiGxPrmTJyEkz9LyWWkBonJd2onysxmW3VhUbWYD",
  "key17": "4fDkRYtWBms3TJJsyypBCp4cmjvfYSY5wtYzogBmPhmoThGqYJUZnCNmZELCWoiKpgimhYQz1txM74ksb6rDU4VF",
  "key18": "mCk7frrKJ2zTLG38NZri7mLT3FrbWpsRT52Px5QbSTzHHQqXroZhktkURdCKVkQ1H1TBQdn5xn4QaNrFc3h1M3J",
  "key19": "56szKwpJgaEtuGMRwsq7JqFkKJwUbFD14rkz97jUbB8iWGVVA1kDTgDHXaqkQRu6kb39K9VecmWULAKwDYeWAQGv",
  "key20": "39qa3wJyWF4rBdoTYDnh7HWJw6f1NJoXW2SsZmCm93EFLNjNx2vdyULDjbLRzSQFmmvw5QgyXWePPS1PhLSqGZgA",
  "key21": "4o8Uo1tguinweEYyPe9b1pvYhuQMhWxya8LJ8qzPmwZMfBL3Hni9nYQ1ckev5s3YXa4E6d3uRCmAhZKq5WNWhCGM",
  "key22": "2L35n2Knfz2tenMzJQLoJ5VVgLfRsZ2nJ2cRZkcw2vWAF7GviYam5KoyN2iHeRhRAkcKvsXE3T5gJgr9hhDaw5Xh",
  "key23": "2qbDyypPQxeTrcdSaNsk7iFL5kRbzFSBdJE43wcgHeKJ9D41jUTpenpanJt5zpvDG5qnSAhPdMp9mfei3aYta8UV",
  "key24": "5zyvytYAqxb3Kcb5UNkwoqKJ9dxhTxdK8G8D1DaaBeWNcnXk4fBCKHeuCGaa7rjCtoJXpkauJeYLJsoyuhV2xYeQ",
  "key25": "5gwaK2SbxFQzCQkyFJDcZfJ1tyN6BssHfCr6wjrmozsozr6mqT7q6RPUrqaHNQobEZFLbmPw3RckKjXyqKnEJY6k",
  "key26": "Z7EnjoC9pXxBcosDnAAABKeweSwqDCxZrcoNCdj9qErP8iQkdps1hbuXmu1rdChUavpR7BzPn4uXf1hwoY8F3mQ",
  "key27": "5g7sBim4NRow3v3G65giVzDkdGhUTkcXcaJ9wgB6E6MjkheJ5a8Lszg8doppvE2mimSvwPp8wyhrpt8Ryv8huLT7",
  "key28": "zp8Lg5WsaKf4ogHL3grGJDcd3Mpex8Lhsvr7vSVe6rvvVpEdALe2QzwuMfwtGjjyg33RzPDhkVdQV5863jfY1nK",
  "key29": "5KqULYLEGNibjwz2f2UGMqCMmTJEepK7sUVncJVxjJpFXvGXj5HvhRNFR5P6tfHxrupXNASDgfWVGqTJKZVRuukw",
  "key30": "BWPa8oRwnp95pBgzmbQgf9j9US9wcjS3s5AKWyPLzSwTbjCred4Fnm3ki61KirwhbM1m156nwAMDrhvXisemPyb",
  "key31": "UM6WStjP8CqavSZCkUaetHz4w2azPdVhbNJX39hVXTpKZcVogzM3H9pzY8VDY5sfsMbT6knWrrxG76YjzDyiAaS",
  "key32": "3zV29G2N74LuuJdeHSqsPyQ9pJrDLZEXT9AXpCbiLkeEtdAFuZbGT1MpG4Wwktj5igus9U9aZnrnRNHr3k92eH3s",
  "key33": "2BFhNNfKkpD8rh8xCpqJTETzUPMYaBFACzXHnSeJnW945PXYz5mQbbrLUiU8t6kMEUGfK28rJHNSjWrojeuoofXX",
  "key34": "5hHGNVKwkLFUcY7tJYchaMEYrR7mtab4jcyWKkVJUGmBp7RJTWMNZR7udA1jgFHGeoF57F2d7FR1Z2VzPPkcD3LK",
  "key35": "VUyQ7v89NtN4NkaZMqAfAVfz73JPUJZqWEGVTfWLa7WYNBztSiT8TyX2sgNfo5cr9AZmV5YKsivpCRpAqhPxr8L",
  "key36": "4vZfHKfYQWNTToiBnF1x1rbvhSxXDGnTpSKMdxaf7nEyN95AyuQNAA7a8gD8cmyeDqPDRrNdEeL9xp7HWU4Uicbk",
  "key37": "5J7RmBHaVrXKUCCLZC5ohJuvzG392xVYpCxGdEssiru9eVic7YYMJfCD4TkBCVdYF7dyo7NVoRE48hd5gP2aT5Z4",
  "key38": "62KmKQgFo64fPuNfVAckyHVnZGVpGmGshEtKsn4QqswA46E6e2Jf5mDiXHDxkgXSMhyvrp9toLSfsoPozY9DEDP6",
  "key39": "2JVY2bHXFasAmn4yBN1howNo9RBVSXoqSbHhNuaa3Q5UCX7z1o22cAcuu5i8uGC9WJA1Q94pVahZHMY3nQhWbdex",
  "key40": "3ziggj1ebnSiApx7aSyo8rUdfMBPvXDRDmHTYVWRJ83bpWH51LpcPB3FA1TG3MiiZCUPq5E9ENdhdYwL56yWtcMQ"
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
