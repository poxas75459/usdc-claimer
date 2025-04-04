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
    "VMPKQVtd1K9eGUsN7RDqW6DEjLQTLQuE5qRoctFFwqS4tnYjt8yTEuuiKZXds9fb3AGdnR9jgfao5ecLEoWasvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXVuoo2PFYEEWGShfeCJsrBLcieodHYZ2u2jRiYv8P8ZZezXYgTYUHbjyFE1yS4RgG5RtVgXN3ho2b3T7zmMqDY",
  "key1": "24eLaHZGGndRzgbnafKAhF2fHtCMYU7jk6rfsAPdFdUBfYkwgPibs9jQEVHXiBEQmYQLpEzsHiTN2E9mBjL19hd6",
  "key2": "2oqbwKFn665YzqQEqXRD8QBHWAF63y6X2bZUogxCi1yoXosCvNZPbMphnSm5fZqduSx4qoefRdrKCb6czaxhcYYv",
  "key3": "2hDp7KUHA99NrPapeCHgZWsmte9ieQDucLueCxnfrfLmGV4XEWqs2zhdbM4vNRbjuwHFhQTeRv1LiqMioBqEZGae",
  "key4": "5NQ76pfZUbcueC6tSnCvEnDLkRo6kwP9UeTnZHeBQzibnXDApzrGcEAwwh1zrQRYfj9N51MLMJ6iJr5W8xU6mpTD",
  "key5": "2DQhx5pB5eeBD5b83kFxLbZzUHTSY4zbicKq4CWnnWZYHKYiN5PAbbzKFrPBH7fayBi5SEjz7NDUpZy4tk9jyVFW",
  "key6": "3cLpgAfM8Rbb8KbcJFiRLpM9LkgdMqidyEX4SDCyaXNdtBQXV9Mu8YoyjP54V7uvkrKQ5k1QaDihykLNWpQdnCSm",
  "key7": "4s3QortgcYipnpegGwcRbAbFvwtxMK1g3mJe6DqvZnGWGLnzPfZzd3GTkAqxV79WgGNpLCbLtMiNvjm8oyUZTADK",
  "key8": "2FL2dvUY46DYLJaYi3wsCt8eiAYxL7ZwywF3vHzNkYQU5BahXyc1wUUqvP3JKCroAiWgbRpyjDS6sKSMHHjCGXbN",
  "key9": "5UtkpuSBkTfHdGaZfKm8Fhhf5DKy7tvmdtQRbgqanqHxQMsbTWCQFmmSbN1Hw7Vf9LrvndoscFko9RJDi3doxMsE",
  "key10": "2u6bj5teE3czjCqMJLUuUc6ziMn5x5Ky1jq8ozcfZ8xXD1PC9LnFCeP7EoXRA1nU8Kxpe6T7n4cHGMWiKqcMeS4t",
  "key11": "CEFQZHEARGvM6UQqg1nyXUkgeMKDPNpPN3KPPga826EpidLgvf2L7zRPhZsJPUnJPfQT4673m7uFbzfiigYNDmQ",
  "key12": "21rfMEEts3pCpzBKmTByv1BRRgGMA9CF8aLqqohPS89RwzcffAJ1qmZoURGgCC7136Z5DfU7KE5APJ8MAjpV4UFJ",
  "key13": "nj9rGyvZeE8p6BYMrxgR6zkoiy7vn9ND5ebofg6GQCTxYU7KZoZ3hm1EcTLSrXh7HBSGUU12Mczd699B7BZuC9Q",
  "key14": "nxQzHHXSod4qsuDeGWYndZ2sNTcbGDCufdNaPCwKzwbkAzUnGM2i62AR36yvfBPsHRJJ1QxiLsuGv6GGfDZD9DX",
  "key15": "4PTbffWegrLjpcNJHWavTHySFx8Kgi8oPQyjQ9MXg6ewKmoc3inx2XAFaPxk4BJRrDUj6c1mDy62sQJmSsiMFnot",
  "key16": "3o7tCAtMXAKcXotPW29BsGLWuX7FdEwQjLG4KER2RDnVhzLhJXDPXSsndGnW7jUyHbvmRQMaVLDCn7PqFQ5FiEZt",
  "key17": "4HNoroVsVd5VNWBn59f9s2xT5VhnTmHkVDxVTfug3n2J8LXZFK7hp2ePGMu1Nr75F58aN8jTpNNnrfp9VxXV3mB8",
  "key18": "basoX49ZZaLXjjrZNN9sLMPJi9NKGJsrYAadYHtXWoAHXAKHw4HuDPFvZAKb1qPsKWfSPVDZsGhBjWPLg7tDbSG",
  "key19": "249ZvwZqz73FB45F4Vo3P7eqxtnvZQfvgkjbg43sembfWzD2Qfvyca44fByqUwx8dtX38mPXFrBrZM6KL1A6E9wm",
  "key20": "5egEsuNQt6XHmcaHD2tLRM3wxbYyHA9q1rDC4qbN8FRz2CLzDQ7kGKLNdduFE7EmdfEeetYPyvLpFDynjmGp92PF",
  "key21": "u3KVUzNdzxuT229rpmXqKiuEZ8mMTUMbfpmVnFiu4Lek7kGsAEvhVNVAGYDp1T7gk8j6z7SaNQxRPhQBas4P9V6",
  "key22": "Vhu6ZZjvoV9imsv5pcdmxkS9i83KzEEFnnKayBKbdmDqy92cWqGePFe81tkcCCMzGgF1XDwGJQ6p4wkJ8FShczQ",
  "key23": "Qg6egaZp2XPMHkiacr6v2WSv3dVs169dHb1A4DZLEUrTwFjus93gEcSDJUecfYB9L7cLe8hTJfqEQepHdFbWFwi",
  "key24": "3sFLSS2k75mFLyHRfPPw3awAo1i6ybvpHQkY6THfBeLiaC2uhYz93ChxHXCMPEvbyhroYtCZs5f6fgapsm6B3Gc2",
  "key25": "2YZsHwJiW38qehmd9CQDzyTY7ynqDspfkMtLg2qbWvAnpPZV5qSHUFmDzcQYtLecCp8uXVQ55iSb5zwqzJ8xGzgM",
  "key26": "3gKqEyX287QpaPWZWR9SzW6528uyBye8GRhdrVUZr3h1TNZaeGdw2b2uhZjow7zGDBNNZmBQEHuLpW6eKrZZyZen",
  "key27": "gvkhVg3HdqVzG5VsLZXnKqZGAx9k4fLzGszGNTP54eMhyhoPL9NBYgyA8sscKD58WXqsjjw29gwjAt5E2EtFYm2",
  "key28": "3GKN7aW9VoVFk1AmUSgnawQY262do18Voe3S3AugHUiAWDowdkS2ytwyXWv6p6PxUx2dvFaqgqZjaKtyXYuYMzZN",
  "key29": "67WxBRbX7QFqeCmZ92wsD5S1eFJJeS6NH1j6ZtMZXtZoZ1dy6zNrn6zVQc8rsmgBrZrcfKJKwu47rBfVwXc4xfVN",
  "key30": "4jTZy6azuFKM7ukEYknMpgrcNdzjVxKrB51H8r3KoKHgfa9dyPZRczTbPNwrfqwS7gM5n4o87YxbjRgHBWxNfpmY",
  "key31": "3yzSVqPauGyt9VjTijgNDQvNBf1r94eS7hQ3X2BhtHhpmmUjnFxWerTt876acoAXA6oBh6t7vdidNQdhjAV3gTa6",
  "key32": "5gBVf5GHTdP3gokghpCdxshMEmVoVHHYGS7aJPVXwMVGCbnpb7pGrV3DLL8J3Ebu6UvTBgD33RAj6QBUn9nNQsCK",
  "key33": "DrtZ3j87nPDh9guqs8BZb7WfZ3h7qMDyYg4KcimTou1PfAcffRKQEFPexSjPmnvrYhkrtcNu2NmmaDndL96E4BZ",
  "key34": "24GzztWd2VtA6QiXKERBVMAuTvDqNZEwbx1rpHFrNTbesQRjtV5CzwmEpsjYqcvBz5DTGnP8rfdeyiMDUzoWmWMJ",
  "key35": "57hCTYpvMcn6H2wwXgrn9jF8XSXVbJStJbjQyVTwpQFvx65tzVtMwRb5xgbBMHUGZjqvFFtETK2Gei2AqrycBqHU",
  "key36": "2VKekcpRafT6k3ohGxcP2LgEGDpMrutxdL9gW5sDQCQTibbPLX8GXS1rEJAs4TqXBschES9oHiGeMcDv2jKwjPKn",
  "key37": "5nWyvm9KJjWgykvqterVjBJu9b6sBAGRiE7VaECVtHXqNa96XV1bT1JfyLCPjVMh3g18n6S48Y675VktnDMj1qBV",
  "key38": "4pew7CGfidHCKWvxD7nrqQ6zQW6uSQkunt9XwtoJw8nR7cbrL76DspLyPnp9YYaTDkpPapVXa1E8cTKpzkSH6d9T",
  "key39": "2R1x5j1pAsFrHtQa4r2bMgy5ugyGzHPHEt2QhvQC3ZfzoKaQxDLF3uY9qECV1nSyLT9sh2xPac7LwSnFf4mDpt5D",
  "key40": "5eH1z8H2GY8gCjCWguUVRfmjTjFJJ4eHbWLQdC4FakGg5hx6KNxbYxSJGDXZUxA9DgE4r4jWD2nf9cx55ufPAMPF",
  "key41": "4S9xAHce56zukw71GT8EfhNcT8P73vpgqa468fQgTNDe9wmj4sJd1eh4fgEvHtZesNv8Jg1KA2ZJkQFzg3ZAAaep",
  "key42": "5PwNAvav4sn2PRCCNQgxJ7W8qrzUE1dq7NxPp9wcPLAVcE8FmM4T2Co8bgWud8o2KGp3uV27ZFsBfebirhtBmjnm",
  "key43": "54qEjBsJeXYsTRUwSAynvJd4HDu8n2S61sYdbPAmVa5F3meT43r6pkMCwQcJVG958aqjtdDuC1wXC4xTUHJGU6i4"
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
