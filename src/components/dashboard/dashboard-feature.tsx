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
    "2A66MvH6SXgYkeEHQchoDLwBAMrTGYWGg8KCH7c7gVEMwrQ2BWeyXjmwpQkPdHGwGJe4u5DHztvXJDUVtVpsSKrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdDGN4p63BFDLfCxcoMrNfU8PtYXw2Dq5z98dvevUofspJofszDSN31aRvWGiDqcE2Xi4WrjDaJxx95C3xhHaQ3",
  "key1": "4bpCNACWHBuknUZJPGSa1kqicL2KJueovdbPRCm8Z7bJ4gKRhd9KmqPDnQHuhGM73iSXdr19xR7myMgSCaQvbmnr",
  "key2": "UDxrH6yqP6mGvxSEPwtsDQCACb9JUhysYtQSqebaPBDJuGzAkgxPWBCp3UuEu3RUrjEogZ7m87wqScwvJBQu28T",
  "key3": "TyhR5iSXWGmfgv3XcTQ3EyAxH5Pjrp4Mc7N3ctw78kamdrhfS1YWGeRAqZwK2bKcZg8zPDgypwuHHQkccb7sjFz",
  "key4": "4SwAVMzLmDDkDWnbHn6wGnL5iYXy1bs1mbnGJfYXV46rkZjdCMxGF6v9k9qR6PwqsfUG5k56pb9Bvcd7SwYbrAnQ",
  "key5": "2sqjdVcGkbiShfWM7GaRH9roaXdNC8bUuzxj6XQKqEz6tfnp6RibNRYBrjDMZwuVhf44TVQ4KpT7Bb8u3edfJCHJ",
  "key6": "4pVDUC2EfBmAiQbANvD8gD4cYy3uuftqgzEmaVfEbkVaW3Mun5EFGsA1uHrZg91KJisGY5gh4Bv6NHBNX1mX1s3A",
  "key7": "21ZeigPsx7LWu9UQsZC5w4583kUXH24skVK4Z5CapmsYavBywPgm6Dbiw3d3D4Sy5J7SBeVwEf51Dikb2Q9MFZZM",
  "key8": "2jEvsGC3nv5rbM7Rt3ETm99UCuKWJvR9GWeyjDpjth1xtx958V6b1VanyqY8SZAWsamTFgFw9Znq8FpVxn2KrE9e",
  "key9": "s98JEwnW3vASNPFLeepVPJyEkwuTuF4cZfDu8yh5dj92mc2kdvm3pUmnMK3UxSVvvnxd4uyjvtwPq3WKwmopc3D",
  "key10": "3JQjYh9Mjp1JAAwU9nQLwSxEzvGwdoG5gy6Z1PbJMvcJZvz7adL9EZhhTsF22HHwDiuKmQzKyQkfQAH4zk48Ruob",
  "key11": "43CNab4ifpvnttbw3dybWNCbB27SdFKGyuUMEQSDVfv6G3ck4HtNGTfSNmEWG583dnTjETgyzRNrFCUYxnWZThgk",
  "key12": "2gmbq23tbq5YkdD8wbspDwnxwkWgwjHKWYWK5fZLwvCjMVnkSuzC97v9FJFW4aaw5A6QD2ff9P3q5EeQb2hnDYhu",
  "key13": "5xbqiduCFP6WWX4VyvTvifhnyGS1PMADkMMAzRtnydM7bJWuvP8SNAzGPSiQbWtRM7v7AFuGLogPy46bTdUbRkdg",
  "key14": "3fNaE8i9MMDYtGxQUeZogqsYAriXP9uEF3TRdtTMEBS3LEUSVDoAL1oHpX6aTvt1GLjFesjdf8Mfn79WqsjRhL5y",
  "key15": "2XwaprKNFn8zYAGvj29N9VVfx3WYmGg3rXDAj8YaEPEUzq7vRcQ4M6hQvUdZRd43YoT2Go8uuhe9hrxRvQcVNMRE",
  "key16": "3mSTushwH5GAj5K4StDKiaND3Ti46tHEpdPXhbTtm5xsaYkw74kRHXtEFx69rFbmMUNSxXJJWUrypoA8PCJotcWH",
  "key17": "5r2LzUtmDaRGRMJPunqJNPgASJfVQnWUS3sGrTyVDUU6Ws1DGp9b3c6emxcwYwCKvb3KwMUJYuHthf7bejTyTrDn",
  "key18": "3YXubRZ8iqmebHLTZ9DMGNe3brJtyN5iWWso5GdQqhQ52PuyXUrHSqZk4JYU9X49FeRhKKXs9w9aeYJYvfb9D8v6",
  "key19": "3nJhGGdMPbSnbFQbqUVCRHpuZzzBkg82PrfFddwQps4qfEid2F7PyDH5aELhRu2ZviDAjNgKddrPHhCuGBGDX818",
  "key20": "32jFAbJyNTSnu6rWWrqgAJ7viMjbFHG86RWM3xNAo5DaN2ZMr8MrQw3rvf8kb4Mynf8BAjNrh4RSACsaCrC6HJ5B",
  "key21": "NvNRxcKfrgB5euxbepQDkkrDaittP9Ha77SohxpHAViwy9a1RS1thiXg9MnVbC2V5vJWhq5prJz6aBz3pGekLw2",
  "key22": "32LHRq6MZUGmV5Btq3sCh9mcVFR4y5ivcxgu8QQNU8WHAFbVaWcLBqYQBjfLyPqRMXoYwPYFYnBYuHqYwtQ1vSf2",
  "key23": "5LnB6GkHidBFYueCtM3h2kiF9qstTbVFRshuUWayoiaxwTRnnJmC5im3VX4sH1KdvgFNiuXgN1rNLWiRKK43NvgA",
  "key24": "39ZQfZ14PdhzYxEoYz62e7mKvoFVcHgwKxehCXhCjUMQVUxk4Vbu1zb5UgtP7P8mHqtFDQ4WbdauGRzLhwmxvZjE",
  "key25": "43M3NUmCG1BbyiyjtTGrehfTrcByPBXEfSkN89sg1xmXJPxuoz9CSwX12Ezwd1Z1zeCrB4EHDNHZHUdgMMfeDQ6z",
  "key26": "4fWdWzkUzTaEzS9ubfWPURaahi8XSuesZ1uexAEVeQKTGe3zpppb76xwGC2KPzWQ5ScvGkAnvsnL9bXeZfbuu2zf",
  "key27": "3GFA7w2G9aACQW682HH1PB3esKQQED889JN2iQa7GXZvWLiZGRpuynM9JyNJNEMJa5PUeDAgrxYtsFADFN1abWiL",
  "key28": "4AGyVKrpsDVv7EwXb4A8HBmigr78B3Pz7889zZznWaqX33Mim4aLkb35odNJbsqmYvYVhsQaLd54BdmBfy5x4UZZ",
  "key29": "5Eccz81ppWbJiEV9qkVdosnLk6GgzmXgs78w9jvtE5VFqNdejJouCXuVCbAemkLmBXpd1oy5gvwGZsJcaZseWVCw",
  "key30": "2FWrxGxLgoxrthfdv2EmZNB1XnP8tXS1dboCoyhzEDKo2bfDKEbyHWN8fDYh7DedcVYdvRRgm9VwRLH5ZMSmH9sJ",
  "key31": "3KJGKL4cpBLXJpj6QEsVrTZnjxa6TyszCSmCec1Xim9r3qYhAnT8gv9MMBKgWS2ux3jnqM9637SUH7S1gpcWr9Cy",
  "key32": "2dcPXxCnCZeqzj85vGZazsR1VvhreYqHCLWYuW5cXGwBiH9VgA9oWLs5b6uGvy4MSBMWJxqBiVoZgd5h6EpTbs9H",
  "key33": "PanPCeRf6s7EEhGvivJKdbfby2BRve6MkeuZHPniKUuC8pqeQCAR3re2YpkdyH56VxhQDeiH5kZYQNKzdb174ry",
  "key34": "4GjYPgHeRuU5jvB7gCo1SsyboXjdbcjost6sfmjEDKQm2VVkKMJ2KPunt1swac9w9bWzxhNKv52dia9aeAFWxTcZ",
  "key35": "5ZPMAQR82iFQ5iserVQXvs2q7FHT4jvhAnoTnbsfG3wvmdgk4VfPUT5w6qN7G7Q18niU5RE9wrTxan4GaWgf1Zkb",
  "key36": "2JNSL7wygnC3b5bSB2Zaa5zHYXyZcRFnToZ7psaued6XfshkhZkYMbMnvAWuQeRRgg6Pb6GaqRTAxiz2VMZTHW2h",
  "key37": "bzwD6hZpo1HbFkR5skt9EJeSYnyfcb1W8qu1vAoPyBbQiVW6kcPiWxCeCLtzhpaeMMFQrpYiohVEmqfAcfqwZjs",
  "key38": "57byJ4kvxHEjMXdbJ4iZDvd5ghBTWLU7jafPkqMTF4joWJ1E54cdzq6xzWmxqqSi4EQx536Zqhk5GRWnJ3UnE7BQ",
  "key39": "3HezjtqoCQBQqezEcJ5oYW9vvThcB9kBXgKgJUJGcXZZnMwixUY5pSjxfT232CJYKeHe4wdJ9jYfYhRrJgjq6Atd",
  "key40": "2wqhoQ4XJSA7dkhzhJDYonLixuZK7rTjR5GygZV1qpUkXUr3FHZyWCaESiFdxzFGNavx73UrfKLU1fTfoPG7KhZC",
  "key41": "5CSogw9GtjSranAjCwznxrVaiDb7SvtRbQU7MeDwtw12cEqk4EhVGjbmRz2bq9FyqJcBgModF31Q5cSx1ijC1QcD",
  "key42": "rciyg2Hmke7DhsnMKSXLFZ3KaQaNgHymC68coyJxMCg3CA7eUkHyX7sc1TeJsX4zTQQjcq5zGk2W4LsTe6FQ1i6",
  "key43": "c9ajsQH94jMskE8vHQtLxGbxscnCufuw4LnTe9vQm1DX2he7x4VZy5Ad43rrWavdDxqAab4Xw3DZL9GpXk3fYeL",
  "key44": "53qWfuTnbvnaM6JbPMKA7Rjmxd1PkQaXb9XtiazxEenubp9bn6AYbN47aHcPsH5W7EEkD6VW2KfRMgkQ74w9aR8L"
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
