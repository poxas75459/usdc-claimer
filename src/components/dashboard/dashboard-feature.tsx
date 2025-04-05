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
    "5mnLMvYQeZBKxWFvZnTnZLoBfBrrgsuzigcxA9jBSDrnVdGpFkHTcJkwzdMoYeTUctUgDuYUrPuuJgB7AbCqSuA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTr5RrHqLaSkGdT6sTHXzj2jVoFMwB3eshEoB5zCvqk3tSAaJaKCaGwLvdV74CfrF9pYKKaTkjtEAaFwpciu26f",
  "key1": "nt7ofuJ7byvrgHCx2Qk3oQsz1R2yBSzbYJasUWTFxyTcmEyE2MRBjJNSkajKm6E1k5gNKyC3oytDJp3g9PVA7NN",
  "key2": "MAceYUqCLUyt9mYftdZ97rRwd1Pvyma5eNcMk2vFxHw8WZg3oa4iqoGsHY8pBcq2BG6mxP3wwK6NzhoysxUAvNn",
  "key3": "3XNzBAgciem3qpRm6bvAykhKnPjRJ9bsJWc9e538NV53KHqYwLBKo1myvwxHg9BngtZSoVfL21hDt3qkMTKJSTrk",
  "key4": "488uYZ73gzXtDMV2911S9XVTLsmhdTEaPmJSuzzigSBcyFu5D2Gbs8L64qtDQ2BmJaF6SHgYnTUrnZU3E7vCufiX",
  "key5": "3fMWi3cDqj741154c74KJXzP1RDJGB3hR1JPamiLL5PSRrdFKLCkXX9rZh8APYsx6Cemn36xixmGmESFeoKPN9RY",
  "key6": "4Hn6VyjL4iMD53TseNKRGf9B3TrwJhMEP6GC7RfUryexwXfdPKSgYkofeKF2vQ4BRt3MSyrubktQEyS2MNyspRVA",
  "key7": "dU7gzHNhbY5nTAuCcAMJKrWLbSyWhKyWZyXQ2HtoE5P1myEbUF8PaUoBeAedJipzoVj8ARgak8aFx9JvwKp9fHv",
  "key8": "2TWV5KA3Gk839gbgZUaCYevrRDHtSFtvCsSozie18RLbY6CM8UjidQxLUKiAX1frV2fcX86Yh1WSYW9pdczfJNuX",
  "key9": "5t6C1PsswqR5KX4VZDg6tvcrCopZkASskoZg5pWHUC9nFj515Nrt9menS5FPYTV9zcRya5fcBagkcK3macZD5vxH",
  "key10": "3Hvnf8XgSy41WqUsV3FTapyJs8Kgcxd2riMGb9ntJes7eufMgWprTocmxD7hDamRH18k4eGwNNxwexJBCGEajyAo",
  "key11": "3mdPfYARTD2HAugxVSW6iBdbuVf4KEYyMf38BWqQwGbrfJrU7HC9mkrRjCSGiUUM4om3ey98MZViD4ZEMykW9yh1",
  "key12": "4nM59Bz8RqhCYsRFcaY6RQbWRWQVnywtEDJuLEcVjgZH8FfHd3pvyBSpdGJiHAoMcJnHgP62EsUGPgoxdzJL6VEe",
  "key13": "2Zq6RQ6HghzXhSmnMdDRL5HmSfCEuMw8xytHkKosFjEpby6c538aRkfDaEJu2sdcCNAQoUagQH3XhxJyjxzCafWy",
  "key14": "tgoYe46JnhDcDMoGWDcCXx2jkWWVCQzd7sAkwjPb8BE2zhZBZGi3YeQ2u96J7c6DEveUKvqU9PiGrBWzVbLyRYb",
  "key15": "QVSLm8Rr7ymGYFqRAcJs6vSyZvqjCSXpH4ERbqKW9F9QVREQ6pitm9oXjZNeJg3mnb6hf7zrvz4WL18MH9zYNdp",
  "key16": "cDaTuGkmt4XseFLPMSH6TsnT3shFB76GWxryLkPbj3THLBrPwgsdNRiBWTRU9NQGT3fXFT6VYLuM3Ww42pyu48x",
  "key17": "5j6BUwqvy92fYB1j8VHvBFcvVv5xt9X3Jnxb7ZzUNRKUwfe8GXXppiqDkCZSuUgiQ7QMcSWSaniq8KEgS7LAjZ1y",
  "key18": "Nc2pRFLTFvKyjax9C6kXdMuRa2xLGEmg1zfnisZRaDXSeZr55QNKR6YG3gDGj9VV3Py2eUPfXNpWPA8H3rEvLyu",
  "key19": "8Xh7rdHammJb8gvKEjeHe7GFaAmvvMBX99q2wbKbFPFiiQqrnL8iqTiZEnPJAjYenR1NHJaZZp6Es9sTRMSvpAz",
  "key20": "2AhYsZVZSCU3csyVBvQi3ZJAbRxAVSqdzQQoYujDCZmzTkgkKVo5rhHQctRrQQ4iFaRU5ecKDAn6fJPzQSy3z4FC",
  "key21": "1EwxGwrBPCZ3yNhNVo9sBTXuG95Nive9Fhnmzv1SPcZBiHXon3xiL59sBso6aWtqM3ZAEUwxxc78adPdGwqergx",
  "key22": "3n443YFvrTTtLVwhrxaWWeSCTMqeLv2bUBwuJTifjd7sDGtQW3qpRFiXyEuZnQNWZku1xJrJKoqsR98isS68dtBH",
  "key23": "4QLgMQzDKDm4KV9fkdgeRG5BYETUPrheUaY6MikE6xuQ8uFixPrRprDvjTGUBPhz2zcmRQVGvomUwcagFwKwo9Sc",
  "key24": "5bTU1uvTspHVSJsXAhdtFrfBhRuSe5RMtYiNnkq1sbDiXUJGw7LwZYpnQ4rHfDRUttDWeixcdEbq9L9vRXp6mDGE",
  "key25": "3wZ17M7kPTnadeVqJXFSqdrDdd6bu8mMFmyQRjrsJEAxSSN8xQV3uF1DBWTWY8BqD4irXmBsPWa7F3eCEVkfrqjL",
  "key26": "28SeZBhmAZFhobN8py5uUZJrZP3bLxmY5cPfWP7Tfy5nTiDB87zXjs9u58V94Rce64PJ4jLgoKkzpkbV8kiaXtzA",
  "key27": "4eTvtu5XsTNSQtKV8mr46VcgNvvsoEnzHUns3F8dG6J4YscVwKn8mK9xdi99ANzE8NCmNsthMbfnKMbePeWsQdgW",
  "key28": "4r4koFLLDXg6Y7gGbXCV9P1bKXyj6qgtidXgh6QGuekc2EwHH5yZ3G6sTYN7dHFH4KGsQr3ZSD8RiaBHd6LuicdP",
  "key29": "1HEGLJrprEAUJSQk3idLNCExDxvww66Kd4R4PE2QukQY6tp3iQmkSerP1LbRnfjpBybjhYFFnfD76KwvSBAss86",
  "key30": "NjgmXSb72rGS77seG96kNxAyEDKxLg6u9nNwx8tBPc2EpMbbcZkSHEeCTMW2JbiQ5CnKjbkT2rcyMgJby4sTq6M",
  "key31": "3s64PH8jHj34muvVGAQtfZX3g7Z9gTqb5Y79NxK3WK2aNVj3Utgq63DUxHpqjmuqs7ZPb6zQEJzbgL2uTHYWorGH",
  "key32": "3ACASxGL9mRiTM8kCR58m3t3SeYTCVdwdwMkqT9AtFL4AeQdbbKuH9RYTK8PC5kAnRH8bM8uJUwNXkamC4q9KcFd",
  "key33": "56WgEHvkEg4KdppDDMULoS6gfjAqdiApXjp7w6DurhBiJSqFabq4KeM76zUnnk1sQQvXUzhif1JeE6mgCg4MarCT",
  "key34": "2f6PNw58NnYmKpUG8bJ4qaYFhNQfD7jLqkhRJqRF7K6BZPbADQtteZr8y71UuiBvGG1FZ544rfqB7k7ckg3QqkKw",
  "key35": "3yzHFEx2aHM4GT1zSMqh3cLU7RNTr1dqjVfpimuaQbHBPWJFvXFM3bdQWrLPw7ZZMiq8J1sEDw6aiyroN13Ebki3",
  "key36": "5HQBViog8So2Esd2Xg6oT9XVCeWZHtEbtSTuwH3dxyASWqwesSKPDKQcA5ySNtGxSRZGmLyyepL9GYnguueDtGv5",
  "key37": "4aCEySqR3k4eYnqUUKNxipkWsFDcX4xYyuHiTipW9i6grFDjsQMwcSLHn7BAfWw6MWu9Zd1sH5Pf9Y49c3VEnuA2"
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
