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
    "2zUVg8SvYFrMxtp8wh8mULJ2RooR4wLfEiXWdrtCpy3zs1aZBroNBc1ePcBRdz3S79ZGyJoScew6Uieei55jVWwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uEczdMucNM1bc3DeADorzGzPgZCP8W8syE3g6SA51XRzrmMB2Q7Rd9d9MFgvR2fJYro8hnBgKNiq6Woq6SsVXQh",
  "key1": "5E76WuT2DR8kMyujFpxkdDMCrcs2EHxJwb8u7ny6zh4SeBVkvc2KyjwCWhVhvXNBCeCBhR6EjRkEtTZasy2wJqi3",
  "key2": "4k2Bnm2SqrWmuggGKEKpvic1zf6bBJ5Ab4hPp7yjz7BXRhbgHvqkqTKgp63C8TLaFDcr8S3Y4H5cGBvWnqeq8BY3",
  "key3": "4X9nRYm5XV5U8AHpQ6uNcbuL35U5pVbWZD8VxFF2vc6pvY8fRrFN7mrJeJqkAkoyf2YQojuxFcxuKnGqPjpHR1nV",
  "key4": "37dYqQY5WCffqrDfSr6rNAoztfajoptPZNcN5igECkWVcQSv1QivMu5WWj8b2uiobYSx3vRNgMu6jM1Nnm78W1qK",
  "key5": "33uTRu2bgpZgCEggucWM9vturitwdu91PYdJ5Vv7Mno5kcbcw9U7jKZmRDiYbM6sDHP1ZiBiWk1K3ihoqmjbK8KC",
  "key6": "ZsMZwZpZVLViiHk8EuXJDqtrv2WxrZsDNkHdzpxKEVppPVDUoFVmqkuvmJipQZke6cCNBTvgWBTGwWfqGVg7FZ9",
  "key7": "eRGXGyMMXp9tw4T99mAbec6f8WzCkD1t9uAs6K6qcY5GdvSLDFJpJe5yxw8aatH7i6piNEXi69k3k6aqk1u57LD",
  "key8": "2FiS19bXqtRAeQZPR7sA6k9jn68bHcWK4ZB3ShofgSUnCNyAEaTDXf78dHqRVgLRp6qEvGumS6UHRjrQp2QmWcCp",
  "key9": "2eQemEmbASeSZrPmHA4cVstBVVSMVzsohwJhTTCCSr4jpdeyErw3pR3LtwgtHPMvpsnCRZ7kuJu4W7KUAHRM3Fw9",
  "key10": "31z2CqRaHDkFTBU26oKQk2r6Q31EKN23rBkKbfutyDeoP1cMkmsWATCDcQ8ZkLmvaYvxcp4CCUzAyLC1cEzW9UP7",
  "key11": "5ayPDeaxxuP7Ts6FH2r9yjdKMT72dcUsGp1jTK2y3Zj4eXSqt95LW62KR858DhCRUaRBMC6aJjKDg6CLDt74HE7Z",
  "key12": "3xhTnA34u5RAYkq3RD3z5JzQr7z72xSupM2YFn2v3Cjs2EYRpi7dbcnEUk8MkfEQtdRtbC8FQfNLvhzKCHHmziS",
  "key13": "3N6y7cQBxuo37seyKfA1cTSuMwucy64UVdukzgmx7FVvGyjRNCUmjXUKVW3iiayT1odQGRStXUTdjWqsdPTAAF3M",
  "key14": "uZp8XqprrS2JpqcGL4voG7sv76shoDfm9NNMrbjKCiRBTiJ85Rc1gooj6GCmDSwZzH9cs8XBfHgX48yzL6zQcik",
  "key15": "53TxyaReAHAJjt92SeF3bM3ppJQLLV9wqZgmwfu658TpZZNdpk1Wr6Ki1dQw4ssgdvVajHpThQfqrKUDq4Zkp4CC",
  "key16": "5jkiRPoPi1wVhezSFu851FRvCyzpNbDnkw3QGWSMRnGZ3NhURfw95XQmKx7XD629k6dC8mPsGCngUbECjFxNvX1Y",
  "key17": "4d5SZbcHCFh3xBeoyFPQv3gQqXMN11gbtwhjzzVUxfUZeSrM4Peq3zE1rBL7ButW8hDo4JG45KLVNfM4nQ8YAeFC",
  "key18": "KDLJntYdVVjJ2zBov5xuyqhVzmGfnacV1ScdNTG6KGsygp4G8eW9Qn8CwS4XRCFDPiTbZcWAYkZPkZR1TfX5YCF",
  "key19": "3Qw61zaK7ECsnPyouafJqbBhX84HiNEBCCQMrrDZwXCuer9ViQQ8ykfBp6WRHTatbUYLopX8LxHB8VCnAiarDESM",
  "key20": "2ATZr3rjN2xGsyTG1Knmmi74aAHzR33TjFUiTFpfDETE96i4EGQQFR2w9rwcfZ1QHGWTaS7FGiySLeeoqqbmtn3t",
  "key21": "2fNJbWvi8tndqzDgNoAsBj8P5gX8iipNVi5vdGKZFRAomngkDWp9dLA7HKsxZfqwHw1p8LDc9NEXBsGypB6sEcpR",
  "key22": "55Mdz6U6DGfhJmYxgaYXngei4Z8awXwN5n9jk741g2p2bjHYuNMSKsW4fCmMkXCYSZiEa2GaqtzZYWD67EKQjakb",
  "key23": "3Cc8g9NLpgfQxNWghjpYvoyynnRSmdjqaznvB13oFBd9WXieaui5yUzDrGQBBuVSE67HwrjVcMeG3xCMMvzQweSn",
  "key24": "3sqAdU8SZ5Kxop7MUkfg9tusNt4TjeBVfe9x5xnyJ2TbSG7BLQgXckYnRVadVrPhpQQPYCsqNpPzKzyy14UY4KAw",
  "key25": "2aDcFZ6pkcixjszQecA6ikSSMbeaHt4wjoc5mMnuBczhkh8UXVzv6nbL5Q7vfaLPpbir5k4AuU9ZKMnfNkPH8dbP",
  "key26": "4FZHhwYSmC4idASnJK7ELJNxbXRs5mSu3NSjxRy7a2PGiFWGZZDoPsBrWoTSewpjxmi6VZSVDssGggZ1dpjDBs6D",
  "key27": "21MZDJgGS2ztFba3De5REMC7THJhw5DWLndnGHPC7cd2ikf4795u8KCFVyDYDFvk6f2zUPEuqgrFJR56aq69HLZR",
  "key28": "4787Cui6qvmvfWHJpyzfXwZncMzNFZgSrB3o37vvfhmMygP9EpmAzRgGfNVBaZzyUdGcDuZVynLmjA784M3cJGfj",
  "key29": "SKRDgYdQJqJsTSra7MyUoJ6hpYkE2XhhP96D8eDWUzSNhhu7K6JrVdxHZ2Pna1zndchwj2BetTukER44eABWGPo",
  "key30": "46VyRsKfyiGdf56qddnTHAChWqGcHHwh7nxsGVH5FaS7bD5Jqh2q6hC1fST6EfcmhvirMfmWc5UtWsjHtnYwFKap",
  "key31": "2C3G2761HHDZtNpeB2u45BPLfpjnbCZrZtL2zYKybhwMJ2Baq29z9v2PrfWf58cKizzrmSRTjSufXKAuEjB5wTG3",
  "key32": "4aEkp6zTafZcJ3Bb1gBBJLf7CAUgCJ1M1rm9roFcFf7W8JydiRzeB5tSKmGJnB1Vs7N1mh6ZSLRijhbFScnZriJz",
  "key33": "3vagb9vyXYZ1aaC2T45dbHYCZFmWzUK3DU3rTdTuX7ApcMUQpz9eJJqepAo1tLJtzN52PQq6EpxLJJMFfTYFB2h1",
  "key34": "55aB7VCqMn5WjS3jphznwi6KyptWmGcHqQWKqnx9rgWFkPmyMAbN121FQp6bUVfSphWazrDz4MwGTskdU7b4xbUT",
  "key35": "399AvEVDEU6HY7mZejz6rmyns1z3kjm1HkNU2SqN8cDQrmjGQW6XqtpYyLoM9VhxgbyLE7hpgQ2UEtoJsjzNJJYW",
  "key36": "3bjQushYzaYpdPtmhaJ81heQbveoBbcmPoAK1oqSviFng2xyb7Pr6TBoUzAReWGGMEu5wobkhH9U1MhV6nVbJNzP",
  "key37": "5xjkGreWrWyURaq7AjZ3p1sp8huZbxU3xL85VVnKHQG3X6nSzYMh6SDbjRiqYGvfEgrLVHn8eJGjsEwG3o7BDmCb"
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
