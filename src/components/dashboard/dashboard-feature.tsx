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
    "3LFRvrydLqsKf6NcxJWVi3MBTJDHG3SK3pwSicWCnTiGjF9rBbexfegbhsRceDcQGSZvtvFJd5k38C2rzDaHbSG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTidS48HQr9QBSF1CLQL7VufdKD6ZhY2d65hmEiYTVPrUtn3DNRptgMFP6k14fcxbBGVivhqMrj5L4PRFDdipsy",
  "key1": "2rQzUQJpK16rvnBPtbLSiFD6MGfMEJeUPNF2TRiXZyo9hNwtJH2e9w4bLu1EKoKswiMv4BqL9WQwr3jCKhk1s8QV",
  "key2": "BpeH9WABe1aTo5k1zod34xA1QChTxyeJQzpXqWdDLoy84AeYC2fpJDELjCPqpEXMcmaMz7HYNxePuVmUaH4G7Sz",
  "key3": "TigY5EuA96HBxAodFFHikeRwG81TxMkq8KGQdmJHeUFWZ3udXtLqGcjb5vRVE2AUfkiSNLAMTh6ptB7NDznU6aL",
  "key4": "2oDMp3uGZdKeSxLSY1ZEhQjpCTxPwXu82vRbVb829aq7AaZbXzwKd9fbZVyiYdpQagojn1q5MBuMZmusz2uLNNgk",
  "key5": "4P3D8ZQPzgsiY1YxWdroudMF5VRUoLovdC4SVW45eTL4U2azZc1YTv2a2CBDfXpkYF1LCSW57rJjn7K7dCa6JxXe",
  "key6": "5s3vT1wDw3B7Nz9Vm42RrC7juwLcFUMDkz5FFdxDTaTVWQi8EVfqH7pTPbPTwyduu3Un3h9QeyxjR14XNo5S36qJ",
  "key7": "5rqrfiNLzppEt2yjbsc7ZBse6yydX7KrfFFXZED4zagGCaDDaYHUvYjBJZeDg8g9KngmU9gpCbugadrJ7WT7oiW6",
  "key8": "2B2UEbVWDszZRhhMS7bhPQdB7eQCj6EVzCGYwmbtANxttFwNdCEn68DkM76GZw4Cb57fWKxWaMHxnDNngAzcRCdX",
  "key9": "ChNtZgvcqyLFXLaYEFqXeBVhUveUUF2GzhjUbWXjfAA5EftKnd4d2NGRSakHwdDkS7Ahss7RK5u65BMyjPHMLHe",
  "key10": "4yLHZeRgyKpdSTQ6GdkVqReX4gz8CzRpZYj62SQR3juFiniZonuSkm5NMoG1UvQBRYF7qWhmEETKfg8MqmeNcUJa",
  "key11": "4xhBAjkLkYHUpktBGxKfrRyHbFWmDAzQDyGfiA2iLGzLX4Tp1CZznA1mmVZ5PWNKponRBKqdM4YF1rbLN8s7XrNU",
  "key12": "4XRmd5oNxgEHhqLRmzTeK9Ep2mhnpmdF8ABfthZQsbsS8jvKewvL54vzNk6sTxbPcE7hvoTvcrsicXJ35sSmRFtG",
  "key13": "jjS4zSrEd8PNmaqUP2vwzH2Sh6fJobKLt8QGZBtpequ74QpN228Evkf4hFMgWCrPFF6BzEeCsyFNLdupDhT4f4b",
  "key14": "ggioBPw3oXsrFuK7r3hgSvkmTQQVJ8D3ChDFXEeYHfPxjUHV6GiLWf95QY4D4Gze4Fydg6HWD48umY3dZXbZc7o",
  "key15": "2uHmbs7NqyX1apVQJmCPjxKpNXidudSAusVE7Mo9N5u6GabBXZuDm9dudk8FqdY2sH9ADJNXGJJYJKWZZmpR1jUb",
  "key16": "qB1wbTJ6DfyrcXMYq8m6gDF8n8fcmfW47w78dx1TWZXByYPSCaNuTYSBLVg7rmQWRiCvhM2NmdrrYEyiMz1GtZm",
  "key17": "5oBiW6aQhMD94FKqjF8H9oC5RqHJV3o8CeUVkT7XGohfzzELV1YZ4RYz2tVTRK88P6SRmE3EHmgqnVqbKgMWfgyK",
  "key18": "64wgQ2deUwWNmFhPizTuwY6JLjQVMFeHXR1gN2jcpFPD3YPMTpCpfKiTxAHcRhL19DKz5CuJBBi1vfF3TS73eFwp",
  "key19": "MVvoamwKJMLPwS57czLcguibXVqYSAWDTnH8CyJ3Jz6CrVEkwSYLeWraWGjjK6UfVcGq9gCY6eRNpq3ETRmoqgn",
  "key20": "jN2J4Uuip8En3Rvp996HdwqjkG2s4k2F6kL5AD21z3rPYzYrZtgaaW9UvK4KQZtKf9XAzJZN3iaFz37a55NwyFT",
  "key21": "4Gbt3NcFFcWorve6DvRXkBHD9WCrCa4CSnGfYdSzhVjjMckexGGtBYanUReE9mECiMGKmHEzsCBLcMDYSy3cm1Rc",
  "key22": "zN2F9pPUPmgvRexgKZCM5MbJPRwhFfi9dQy9a95Kq4yg9V8JMnKrqakqAXfu1TTm5n7btK8eTLgzGeooSVWzYXs",
  "key23": "3aKs3SuDUKE7s3aCJxTPMe6M6YiuBhZMk8NxaqUUQWkQEuEGomvbGJVuxDmJwcUnVmucJkSVVqdhmm6BbpzgjLKd",
  "key24": "3ZRS6UbjaQaBqHwPSALwgE1aRf56i7CDkPmoD74EbhYAqUVqSGPd1P9oZrA7NGHZKSwpihVKfWLnmjenR4sBPtNP",
  "key25": "2KMwWH69bqKdUzjtzAqPjqT3RotbFyDhZssADSJ1zVe45BgrGMrW321csc7WinUDn1Fk3KQEJEY4WjQTFdtdfLa1",
  "key26": "22VxPdECbKsiFCPuREq6FGMpeKCnwe4cW8rfAh3Dad6rekaGmjffDkdw2CKwEQCHvDxZSwruJdyJ9FukLnfbBKwX",
  "key27": "4SNAwG4UH8f77JRqCWMDazPfmnDSoCRM8sNAgPpzHQgck3jVttjs9eqvxUbDHY2aQyAPcCRpZ3YG3FmZwunXYydF",
  "key28": "36swnJcv34BE8mjTQwszSy3UNFTkqof2MFgJpN6g6n8FQTDtVAWxJjrstjnEsSq2X1HSYWDYgp24UCopZVbzTt4X",
  "key29": "5jXW6bnDivAj7wmJzg2NsJvewRMZH4y36USzspSzjdkfh4V2MVJKccuKvYChmdnsHfbmMKc19Ha4L88NKMU7tJzj",
  "key30": "3r9n8D6qFCjcorR4SsuhRxNjwwZnHLMcXocgEm6g2h4GGJAZCJohhayMca28YifeGeidGzqSBag1iprzTVyUksvH",
  "key31": "39wkiGrBrzQhGCyttRBNopZWZ79yXRShdt1AqXzVkfFFG58phfhJwGGsEjUTLxoepoaXpe4nYT9zqDdq7xHU2mgB",
  "key32": "4dUATctrfn9Q9p6ELtWHQj8o6oFytRLvuPjNfjM6rvwZngRhZjP3vMY1PA8BCZcKJsMjkCH8GKXs6SaiYqjZDiH4",
  "key33": "4Nph842LGLs1oBUdrBhEd6ULao4ZoBq23FBQs6Ys1S6M4L5Emgxf3NeSYELJghpRzdmqkNPbzxTFerUw1j9aJYkQ",
  "key34": "2YUNF93Zk9sKAKJajSoy4RpNtVpHJKYLPnm37X4mMzo4phjzrfuYFRtXSaSeQ6yxdTVCUVZBzLZSZ6XVFgfYRvWg",
  "key35": "5K3qeMhWqDuUFR9NkVji9cjbFuDR4NNhQRztqQT4gTvQui2mGBSMnJTCcxaF3jWkwiaT76tmHBi8noedUaDFpjS4",
  "key36": "5N2sT8UfYvE96RKPPxiXVMqkSTvyAWEEiPgw5ysweGisg8y2VKrU546h9KkjasfTkAJjya2bJ9ELXRNKD2dtJ5dQ",
  "key37": "3ZUF1rqNPqfVq8xqmniqu6zDz1ns9f5KCgPKe59EFgKVZpPyTAitX1uZKp1B6apL4BuTruNi2t1rsjmnw9NwfY7H",
  "key38": "3bhpgNrUi8RRnHPmJY6m7XBUJm65kvUESaKPH8hUfxjFDknr9Y4TxPUhxsxjomT47XZ46Ezcb5JqaZ6wq5uu8Yqb",
  "key39": "5hzUNKDWGKXB16nBHfouWBdqRUxN3M7QGTJYjYSAioXDy3MwL3pYzDg6DjmdWWBsT4ne4TpKhQMQq38UGxjV6cjM",
  "key40": "49XBvN9Vz4nhZGoVifmh3f5dU32wzNCh6R85i6nYens6d2Ek5WJ8HGnUES3SAVeGecYFpA8jyWaMFAEQD1wMatZ1"
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
