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
    "4fizaym5DRtcXb74czCs193UTucb9BwBSKqBi6ZMT8z4q5dyJMBj53bxRr5mVQ4RMASLJedEVEq13Ep9sK4zyYhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dzt8Tj9FLowtveCp1ojw4JStXMkaxH1pdUvGZfn8HrHFm12UYvGSBxtFjdZYZg7z5Thv5mthVDd4jHcUKRKFKeY",
  "key1": "ZnKnGWs2JnFkWkm8P64u68675QRgE2jLdLHhbEp9AXXsR375bgwQXkfYNz6fJCXEyqdF2VU17VPeD6TpqAkRY61",
  "key2": "y4EvXVfadtMc1bx9AhsdvR5148UT12HqGBxXHQYNRRm53Ygsgw7BSLF6dg5un7Q31TPCdSejsZVtW4uafibdD47",
  "key3": "3YMe1pNkVDzTQrtvQp3pkQyCcZXHqSWPopHE36FjNSRDEQDt8JugXFafD4Su57JrzR12nGJBXKhWGB1Be9xtBbKo",
  "key4": "guaBF9oyEExopLoHXXfn7cKMXTPMdHnTdij5TDAQnuNMpkuRp96fsVzR5PBKs9mzruYXFKdbXpKHSWzFeiH5UD3",
  "key5": "3m9hPtFDBYnoa1stJfoGVygQxe14WUvGptQcUA6P8ttUJR3vKPFMCYhK5pz8mCk9TwurJ6FeAMwdbusZ9DszQiYc",
  "key6": "irzsZUYB5FNbRGm7WYCkXgKQHViKB2A3vawcXgbpKw8G3RVjzDDW1b7RBeNW87QWg5Fe72DEpHefwhESA1paQ65",
  "key7": "2WivTKVJPXRna74Ybgs4qLNYchfexFPSbAmkRtYdyHTG1QgVesJswdN7xYJn8qCn6CwDWBta9EMXwB5LKFLyAFvq",
  "key8": "3KxU5Nzd8WWwzFbnURx9Xa32SDPdhGp9NrS1Rdi2jdFZ4z9bqeUH2ZscVi5of5EPw2v5Rc1C2a3hR2jAbkgg3hwX",
  "key9": "4SA5xGKgzdrMX4U3WEScYaz71W6jmwoEhJBJ4FPMV2rNaSFSXybrXTeB3py7CukfZQJLibLZKAH8Fxm16XKPuSom",
  "key10": "2ezmvVjhjfyCVj899NDMcB3tPaftswwoCjHXQmvB3RGJ8iJ3o3qTDrTSn49SkGDhvcJJfoGdDp2b7ngfuPmqUERw",
  "key11": "cW9WXYqj8onjp5EcFkDnqXGCQiktENW1yBMkPZ1961VaePLYDPDf1Wo471SHtZCtzAC5pHuykWBQPW69b4VFk9j",
  "key12": "2Q7aMYSoFLorejG1cTF84wgMCBj7we2ojAg9QSEhXYxtc4mAZ33jBhCbnkgac66eBUhwbYgyvb7ysyxHX2rxTixh",
  "key13": "3nukVcGi3XiAc2Esj8Jc9BNQLVUHCZpeoaff59wb4i5VTrd3oiSvAtFV1UBTvUooquYDbsyBYk9jto4xDdroEYDK",
  "key14": "2LgJnuMp3fo7sHRZRA7q4mADkwcDocarr4UB7iHCwosKJuLaGAtF2Szsqk3hEX1R1vU4Y9bJNGuC78M4oY7os8hK",
  "key15": "4MqXyADFJ5XJ75iSZYCPNGEAXLnVkJcQxvXDQrtKRwNxWBDR9BH3zTzf6eDeqkkZmKphfP7VKnSdUedoHM5j3uzY",
  "key16": "2ojnLGrWJqrsMDx9oF2dcoJkNRhRv7wnzTVxhKE78W4ubNCiBNUt6ucM4yBVyVJZEv5Q2XUFzDZshyqn8b7S8RVz",
  "key17": "3wWfYjRSnNZJwn5DNCBHHNGjNSNR9rYeHwLq36NcrCyzGx3notiiYNLsp5m8EeRtq1UU79yF9x5Q4cwxgwGMY7vH",
  "key18": "kbEtYw4HvvLUDYdk1SZxbh9jieXpYGktzEVg5w5cZEMpVyrKZrVfTo6yCPsKrHKpuxJdKS2u3paeS1YqzH6Qszk",
  "key19": "4HAGVtbhkVhZobr4veuf1K4hC7b377uFq9kHC9CVKHAKB8Kqnkg6Gf8iiUysfevip5kB955c4Ex81ozABDgV3Bn6",
  "key20": "2Z78wCBm2EcEzi6hr8uFbaDUAERWPddjNcLPDB8e6y5HLjteQb1CN4ErgX3mdEoRfsNqFnN8h761PaCtpZzt6GA3",
  "key21": "4TcrPVHohs9jqu8hzcEavz5nK4xX5j7rARss6w8oCaetB3rnyBFM2DCAJorrsB1QA4uXGht5FDaSWBxfYhaMhWLA",
  "key22": "2EEDJVu1HanMKHcfdGsm7HS2NdrftJH7gJUftPfx5pRovqpNRPT85Ug6kd2eCojohtDS5Lb1yYxNsoNu2oyQ999Z",
  "key23": "dpdfikks7dqKyMwPuHTtTJWJrwRY5Qz5ShMdXNigRoZG3dAvdB2bJHDcCTf8dC9FKtt7w1BGBjf1qZjLELFzwiF",
  "key24": "2ktiKRrDCgDNq9UtuBRvLEJ6XuZzVHNkwMNSJESjQoHrzQx8TRtHrwnDg5YdUofLWef4BYyjQzKUjmEYxnZvAGNm",
  "key25": "5zWSbAvjUKHfB6EAPNx258Fmue1CNneVX4NaNZ32CpvGCBYhTcK34h5zA13A84kXYBpLzwd1u2UzQ2WcLaqTLuEC",
  "key26": "5bCkxQoRmfc49RzGATeR6YAVqu6MqbJiXYmxLBGhSB9Fji7Xk8cgiMpPQoya7GJJvt6x8BLEjnUV2afV5mApqaoW",
  "key27": "5Rj6jyR66i8JBddFQiKvW9DsgyZ1ezrrBM12A1yWaiavr2eTA5Y7qTRfT5QUm3Fe42zuRfAtn7i2rKHNBQYqgx3E",
  "key28": "4a5C6DyhcmzCoTkWpYLq2mR9D7L1s3zhs8dUJZjCp39U3zWr9b7BCWHRYACrCYXmQrU2qUzFzWCdgzdLNFNiwLog",
  "key29": "4apdqKGY7goJbQLNH1y3X1PsSeoPPsTBUi7jhU2YSy78iASMu6dJN6dVUvCGJgj6yoM5sHEiKABHnYwWM1USjPEo",
  "key30": "insUaURrDtkeJMTnfK3zyKiVjmJW8uW6tQRk5AcEXy4jvgZWoBrj1NRYho5fmb7zFUZmQdRChiB6DuWZyvwg4ni",
  "key31": "3WedPWqLoxKADmEqHDXMw4hHrrmFUNxJcrVzC1XYYFphkzmXAx68QvA1SUucqemZGqPfjV34fnAsHF4ccMu5zDq6",
  "key32": "2q47ER7HmUxgRANNihH7q4dgfCjgDbZrc5KsLxhcVZUezjKwV8cbcLU2bWxBKZvxYVPFutQwngSgHJt2HfzZgptA",
  "key33": "4i2Pqk5pE95b4CGZ12qAGSavhJ7bE6vAFkKeELheaFtsgSGdRC2NDo4s3gifWajh8RU2dLQd8yJExh6BKiXENi3n",
  "key34": "2synXozpukwBQi9aaqvGE91w94ezS6pJ8s3ypPJhhNMC7tFZFyyzkMiPxGfx1nkvP2v51diWDLWor7Hxcru1dUKJ",
  "key35": "3omzbmThaHQ4QoZVnRnpyuwBN6bp9WQ13YjtkqrvY6tj6YhoZMcxfdZYcG7hgYXpEAWqKrTce5mW5HV1jBLFoyLT",
  "key36": "2bvjh74deXTV47bZFeVC2NMQgJhemjvPi8n9GLVS3QmSx3jFP3oXxpmDU5oKzvC3asMzapYw5EwAMWKzrRnYuiu4",
  "key37": "5JZvSi5EauU8PRjn3rDUeb9RRc54NwYbSTSmUmhj5bNrve7rMoQ5mfuf6ZYPVqsKWZvmAN8HsGwosWvTE2RcJ6Zo",
  "key38": "4zwVB65NqCYsi1A9pv8FT5rR3hfoL8m2Z1vMYhvmEwyGs4KmrY4UPpRdgFyWDgC8eXuX7Hf3cG9AeXYorJ1kTB1G",
  "key39": "4EX6smTyUw5sVbyKWb6C87pov6ozLT3z2UboMTE7Yhc5WCTynHQxozM9z3T2aVksyA1ZnuQoD3dA1xwWG1gjwqoL",
  "key40": "5TFU6P43vG8ZxYiMUeDDUJqNc4vuUVhdxecHPnGDN4C2RWX5M1gM9cWyyUAbMJDNwzpyR87nvStKphHpjiZDatuU",
  "key41": "2MXv5CjAs2BXQkLqRzdngpgmQ87ni68f1YUZVjjLVCGjShtFT1tnMq4F1yv7YANUznoa8LNwR6jTo6F7f2N7GCRc",
  "key42": "JHZxFQRLBMdyq5V7iNpz91hwDKddTnwXiwEfxhP2EwhCLAY3kuQpr9h4L6kMvrp1GnNGKuub5yfYkmYT13btTzW",
  "key43": "3jd1ZePhZWQknefp7iUdbKdpDFNEP3DMsPD1a2LiQB92NDbsuBDi1eHa7R9ckGUb7pvBAMYniX1bvBeqLNSTjXuw"
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
