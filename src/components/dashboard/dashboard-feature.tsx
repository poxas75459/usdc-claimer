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
    "TNGJUuYius45pUJcBfXSSB1j5fBHcn9uRzaSr8sL6hrUo3i3ski1ok8sG5Th12TLKAP2CBzAm5aNbFFvUtMxxs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVTPg9GJduNRzvBPJQqHjuyUZVmvEFTmGGHv3ts68sefcZWkzSo39GfXkRf3Z8F6vTAJd5zKY2XgatKrrHxfERr",
  "key1": "58f8YSTfdHayopfPWxeqU9sUh3GSooZuPWxTEQ5AcqQTRvRrkG4v4ajoszXcqfz9DrrJYiHez8qLCxE781fmVZiP",
  "key2": "43qkGNs3vYMc9AnQVRrLFkMeQx86CWTsMdhEN8BsCtbq2nwRMG18E6kZgqw2cALaWig5PUUphLSK8UQ8quo9uMsz",
  "key3": "4GvFxNDzZGJA4SHHbvZ7Mp6PJneoXESBz1YHWq14NQ798gCWQ6jDMkxSBfNBLu7MxdrHYvtiAK1ZoEtiN16gNd4X",
  "key4": "2YHDiEMVzQjJEKLK9rpYmq8irS3EBezMjcXkXP5eEtXB6BtCKx1DyuxhaC3gVyShFjRNt7P7byAzp3duHrKeLidn",
  "key5": "22vppQc6eqyGLeBuv1PjDdiC9QAEikfdnqngxKSue8tqMeQo8Nk2LPh7gj2QnNhtVmsucDSMf1cviSZ9rMpBhADH",
  "key6": "3UHPEHNf9MwYjtRTmnk785exg8P3LfZ6eg8qDKg9C9V8rsVPzHrwn9rShu8tqHuT96j14DLe69n8bp1UE1YgFaek",
  "key7": "2obGN2mfGRXXASvRzqmNUsr2FMJrbxGgqj9K22UShQzCnmj6WhAhF8YUfGDoyt9wRvA6n2Ze6BegQnnVpR1Uyn5P",
  "key8": "2L7F1zPrJUUfGBx6XKntAqtBuDzN1skRMe91xFP9sH8hf66SuwdVCn5p23goLAu9VCL5HTBVQ27Q8FMfH9T71gQp",
  "key9": "FBf2Uc9paoLHcUEfP5k8F3YTpgNGYYVbvC1PakoVo5avJ9jy16wQzCSLcWbLoSSPCp3FVz3D5NbFu7y4m77RUCK",
  "key10": "5mWPyFeJQwHh2AAJMhtyAv9BSXDbvMkNstxPVmJfj8P3WUVqrNxkrJDRhEV9yrXkuxysdNQ8vBuxjfaZp5MvGwER",
  "key11": "4XQcdBuC4saD6N3F1LLK4ExptHLgWRaFB3caQSpMxLRTxcukWgrMVH2YWGevPE2EtUYE5S9wQaXwPqjmLEVG6d4H",
  "key12": "3c1preMiXSS8vVi61T6RWsE8HfUkyhRGU3hUjfKQYzkiCoiowAfuxomSarihjPwzQoWUe2nuEke9e5GADrN5FULs",
  "key13": "4HufeGiXUk1wdWf1m2hyeKAW2n4u2vkf6qzQnCL2wgb3Uv28bts8uswt3rKawyFH4gtkF5rFRzPQhFGYiYyx8PmF",
  "key14": "4AeT1gDzLNGo433FeYxZYdUHrY4i2isGuaVtsipC1MrVHdgbsv6fwHGcjCEbEKHqyakxvRiPy6hgdoakZvqqBn8s",
  "key15": "28Ynzo8kU9uc7vcz8rDZcfL7GUkyjGGwHw38azVP2SCgwfdGicuA2PgPSVXTUhjMfEywxrkPjknMfiXMxKccmxbp",
  "key16": "Dt1HdjWh2AKCnhHbKzUPnpipfJ9jbJCYaQUh2FEhuLtWqvpaTHbCBQHEpYB7CFUJV3Uvw3HQd6x8RytCBgjVkTJ",
  "key17": "2c4EQtDajGqVJsEbBo4HArfr4yMTDFZhPJ9MUb6jFDEyMWCGDoi1YB9iPqNcuaahQDtUTqUG3W7i1MCKrz5rNZhG",
  "key18": "2kQAYMXxZF3bzb3TURXkriMvcf64vtRRyXKR3RAGhREp1FjYyZT6VSpCjV69npe7ibbb56qMRP56wBeiAm8Kmj6S",
  "key19": "3174RXvwgTJcsXEXztcsa5v1MY9P9GERpxVbDXko6JFAKDXsKmyo2Mh1bw2UVGxUVB1QbGkzUm4iu9yXdvrSXVnw",
  "key20": "4XyY4aPimYfxYULB5usniYgePucFy4ptVGt4kM519Kw5bL76ZkG4KdqdVH9CBaTjSSaShXGVyyP516oFBeger3iB",
  "key21": "2jwVwfUezPVDYg7jrJaGcUj7wskXDcujVDis1Sa8eGdRx5wmmPagwNKSxZsyRajerQt43aqVy45N5qxhchXBgUjV",
  "key22": "ERuLAksXLA6U7Hpy9SJQ3A3JrLWSCcDn2DTZZZzZ7Ptsv8vSbF7mbozBDWrrvyspsVGr34266Ryhru5kDZ5MYe5",
  "key23": "by43KpRLWC6HJs6sxD1BnhenN1z4vL9BJ6TQeXsB461WsmLMAEtEBPd5FyUBv29AoLk4sFhjRrx5XUNyp1S5Xwa",
  "key24": "P9LbXM4PCvMDk3o3oQFeWW4EH7vnEzGJjyKdTzNUX4X9mZ2PQXcUuTGzUfS4WN3ANZviZ22sMKXtDtFXuqiPgAz",
  "key25": "CY4HBzL4bZvDUu96bdaemijsc16czK1gyW87KncCUk94dn5ksaKQPPnJ6BuVHF6wcfvka9jX7ZaQK8xvrEvmb3k",
  "key26": "3w6Q4Q1MEcGUGd5SCW9ax1FfXhbgTt3NGGSJbeUS8TruCdncrgCuDaDBTLXfZkfRJciL2B3ErukBdph4D74z8hkp",
  "key27": "4SR561skAQvBvze5YGg68w2Us9tmRJTz1BkitBkVg2QghpoK8VbKrbYuqh3irvhDgXbtkjV4paSKGxgZ7D4RRzfC",
  "key28": "5vzkSAHhQQewEbPezgvoe156CBbd4yxrvCQtZ5t7uv5JLyzLmXC7YL9wNArFDssfUoT9yHb9c3i1NYN7AkFkFvVQ",
  "key29": "4MGQxiZqcKGnXF1aFfnvXfEMgs5gUVDgYWfqAbhdokfdzHqvfYAXg3Q5WPYiJYgeeNGwNGRGwfKCazwiSQehHokc",
  "key30": "NYih5NdhZhd37UmGeKVmrsxmhSe8P3p2BJ5hpAWxhCjoq2XQQfhHP1QZMbifjz1jAExjJF1ASmhbZ2xcedWRbVm",
  "key31": "2xJgvbLEat68kVX9orinMq1HyMhGZMK5HBfhWuLLNpvgNzH23j3G46FBYVaqP2D7P1MTb9mTygSd7go6qMMbUJeu",
  "key32": "3JYDBhbp6YYidtJpfm6osExEbN6zdG586yDUCsCPTQ15jBK8E9YKUi2M3K5XKMVuYxJKMLiHzSTEBU2NH1xBaFB7",
  "key33": "2tE7ZTqRcLbXFv7RkU15bDGGZYghdJrQttMFGUqsxWvWHHfUiYdb4LS4wDQwgkZYe7jqzQYug2bFAg2BjtkBgWT8",
  "key34": "3xRT97rnr6ogDXczkrMDV1rhMs4rnEnzjpM9G8AMSuM9Gz53U9hLcmxj7caS5MybDseY1qkZASfDYL5kBtJ498mQ",
  "key35": "4wqSfQxfhvJwRZggdJ9oqfVXCkxZjhEp7JaxboFTAXmUGoGUm9UFtZrwgD1JAQTR4MZhw1VR6fM7LHK9cWuGE2hu",
  "key36": "mzrte5UXJZtmBGQH1byUWTEVUpPdqu8TRAjepJ49F1tM5KzX5pyw48VJfbhNA8J5f5KWhvFpy3RFJtisgGdAVK3",
  "key37": "48tMQu2tJ3A5ENuyV9UWGWyvy8UhCqB1yVBk6H9mc87go7JKdRJgtpzAgApcmmZBGX3TfpjNaLmF2kDojkRqzeXG"
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
