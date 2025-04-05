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
    "3rcJohhcfJarxKSq7AcekqoVEpytzwvuG1wigrxRSsR54zC5i7jLdv9pSiywoRUQfu3nB1s1cFcYF9PfKsYqaJaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDg5q3BuZwW8BS5cYApxv8xzmqWNvdADxkHHpHLVQcXTTnirszxfw8oUhwXi47qxZeYyt6QDLohURVoAETGwFej",
  "key1": "5fj7MrQfeDkAdjkM2pNvodohxh9aSwgDJNyPtroP3EfHocj1rBX3zCufXrA4CHEtG1AAj8hTXgQrzha7Gsk19BuK",
  "key2": "316Tkq7a5aHH6dnoqWLPRmZxHxu9UPTQM66cpZGG3V8xFukZTNNHCJoUrqJfyBUxmaP5gPuNw4psBdGKyXZRn3on",
  "key3": "2TiL8xM623dRoqrDkJFnHE1DDRzMMvThamG9fae2txTGLtTtZfam67pazEtxjtNaHij99uMyj4vrLADAQDk539Mo",
  "key4": "5uhsZ8KzNHiq9eeF96GtouYqq8fByzEaBzJ9UsKVZK5Kmg2D8J2rBpk5tcpKBQmRErMVuHEZ6Abx4iQzMP9KnR6r",
  "key5": "2h3LGBcwhPACK47fM3xYrKmjyd4DvRfJoF9uCmU3jFctrAX9NXvQbptfqrayiCWWyr5iLyE8a2LsgbyJdEepQYfs",
  "key6": "zgFuyMay1vc9qCzgTf491XVCZ3N2gbFNjedgv9YFAYU6KocfFFaMEaKKeSzf9fjyPwLU2Uceum4hEarSmwyt4vH",
  "key7": "4PUx3Xu3LWqJWeSmF6StycT6EndkkCL1ucjDdmCiwFGpcbfBxTGhNNYozBNKMr2c7BK2GtcV16fiJMBMzaSPQqu3",
  "key8": "1EaCpTeuHmWwLEC3C5gR5LM9iWSC4VmTwYQGWT57fgaZEnocTdgkRGic2cjNU6ED9nznQXcxqJqUvkuVM7yMKQL",
  "key9": "4a6DhK8t6bpNssHLW1hyruQqcR9r7ZpxHbxVbSV9SKSNKKkZrkmP39fKVjqdv4ahoaTD9Uhd66LN3vsoy5BxGek6",
  "key10": "2nBiPzrQAD8Dqw17jh7GMfbhDPxPX8SVtySimJevhY6poDnYxMUNBiKjHGwS92RY8LeaHkrFLyL8MGjUrCW2x3Eb",
  "key11": "ZzGjAeaML729PTkz72aEgPcKQxXww9o7aLsfVtsrSCESuRTKQFQx3TXFCF8Uq2svTgiBs9YRL26mc4a8CXWboRU",
  "key12": "LvFkZkfxyyjJTuAd6jJTdjG1TF7dv6AnpH3u8pS6h4qNJP8wLxWEhGC9PDx9AmVxKZDWsLQ43ra68nTWvvB6hD5",
  "key13": "2Dqe8ALc7DU6eXgnhYC6TLjnyp5k6KXAHoKL3yc72nXgb4fEsoDBF4iKowqZ2boTQQRQVrxG6me4ZzNJWMsyrTQH",
  "key14": "2THc5cRvae1emM9JUAEpYQ2jZqEq37kJKM7x1PxgNHWYXzLhyfrL1dLtrZBki39qKvtvhssNUiyw4dDdAbzdka69",
  "key15": "2L7zEYP35z24d8kwp38F4o5EUqdTnVg7kLE7hg1i3T6EFdHKyt5kNuXPtYGGNdinGhziQM436Sp8NgwMqBiJbR9u",
  "key16": "iVeJkZWy5gNZyzTqRmUrnoRpEaWwUQQWcqf9g1wAyPDXGfC9ZvZ1yR3sAmk7ctTu3dPpiMJt8imHnmZhwD3n3iH",
  "key17": "5dcr6R3UznxNYZJdxtCj7XWzEx17JUbkdkJaYTjjGUGaVQqvQqnJ1ASMn1REwfVMWw7M8XoRcE4UYTexSNdgi3os",
  "key18": "FYDArtukNRUpCaodJgTTF27zehwAHtZcdodur4d2Wpqov7eoXjQtrUgBxW1u63KykNzpns4yM2RB9N57xQsvSiD",
  "key19": "3czJWVCzidTV9YvtvkjNgaZ6nLBGeegTb84artbwGtUJC3hoRq23RyiUp8rzWhaznJvyKkedDEaPD9bmhKv85ZoA",
  "key20": "2VJTQqBmp4G2bbsKPQDTfc4FnnoYdGZ66bBvMfqRfB1Ko7P73HfXT7qm5AsaCMyjvHdDGQXS3RvpFg8qs9NGLacs",
  "key21": "5Fys9R8rhbEBiP2CbMFzekFpKHDbrUz14RpycytKg3eidDNFsmfi8yGj7erReGdmQnNKSetdpqrETydLKNyRBGon",
  "key22": "4qVjzN8JtvAs4BvJKFu1XZdesqB7zYSHs3Uqh8AFtjC3EySrCXRitgVPQ3tP6JWBSvHzou4uPpNdFAKnQmM5sKei",
  "key23": "v6hQ2wppGA9HkaRczEsbYNDVyW3xqnAKvz1aJ3xC5nFcfzw763jHr77pXTGtMxhhSWcfBc7BgByNN2PQAg9xxaP",
  "key24": "2BJJupK6zfLwRDevVEfePsd5N7u7oPpr1YU7JsgESSzCsYLxYaEoi9vy4DXVTJEf5Dpyrz9wDtpW8KtafKvAAZAG",
  "key25": "5GnzsmA2kHGQuESnHTX4cS6Fjd47y1tkF5Dmq5UZXT39GLFp2Y2YL25QHdmKMKzkywUo3iiWUSThtsjCMLX8KodV",
  "key26": "63qonUSxDmHe4de7xBoTKBnKQsaYRdjuRreUK5q7kt3CVSW3vCa8pnq7WshzpkSU6GKTRGaoCRFfRXvyb7aPmWte",
  "key27": "5rRe1eQcfX52sRMpnfjcE51tsw8ML1ED3iCNZTZmaXyVz74YYWaAygtA9Afc8z2gFUMQTLi48wVmVJNNcC3kZLXn",
  "key28": "57UwZ7vs5YR2hrfGuxdAXv3XrFCAPdNCA5mRLyPufXwN7cKwmp1v24mPrJj1ynS83ouFpGLN966ZrgPaHBV7kMcz",
  "key29": "4wPUkZLmsR2AqBKTy3tGdmy2m8WKaEkM6XgaR38FcocJALW3bfJ1XTNz5AUSyAkg9GBeQ8egqeZ2gRvcUfpmTnvT",
  "key30": "3JFBRRBei7YLM56kSnUhiFsiVEMYbyQG3v3qq6sKzVCLau8PGCJnoWEhWPzERz3CXe4ucL3Zddzs9Pfb2qYHmKof",
  "key31": "43cprZTAxcCoyM1Cz6wejYyLBuKHus5m1aLhrRKivJJ5WawQ3ThvntEkt3mcucEPgdvSaWs4YE51Gbr1yjJn3CS9",
  "key32": "2ajZhQR5gA8zzYprEA9yHbAxWKcbQqRNL2dDzELsLpexXpKxXtk1iojQZTMvsLzCtzYZdnjsFnQhK17ExngtuQq2",
  "key33": "4ZK1VYi5Kuz4fS2gxwA6QZt4wyBJf1swwjWbMdRTCkNHfQ4pgRYvQqyA31trzQpcEsm15Yg6q9r1MhQUC3BgW51S",
  "key34": "45bJQJHkP2HHzBJ9XSZLD9SLLt1heWa84i8isvVwjWiSuEcFS1Fa6gK9FVRR2LGCkQvmVjno6K9Wv3Pa4oFgJL8g"
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
