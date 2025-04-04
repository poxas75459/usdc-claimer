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
    "5YMxapURZJ4iWiZ3sYtDVqNGsttTvNJEhguYtNuwQbYWezmy51sJ7rzuQqqKA9NhfSWiG1dDB3Yqs8vih74t9rS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMHiE4Vw2tAVrQjTdqFrv8pHXRocELyyBcfrHg5Knx5uW16LsFLThpWJjq3T7XTTCV49LfN6btR2TrG6cjPd9CM",
  "key1": "5Lhehe3Wn1C3wShND6bdmTfkVDLdX3xoYd1HF38U8Khc7evsRqtxqkMEjsrnmScoMgdVdECeTPr9quFC6dTXETif",
  "key2": "V8cjrjmbSwcGoyhHd1t4mUJyzYVeJirVdaxGYduBhw5gZdU7tA76M3CfBu28zph19149NcZfymE4YpVWy4oefeC",
  "key3": "3StAMDohZdCXxuhCtfatW2GfzsYghDgen3Qn8Z36UhQFg9WthdwPj8zvXKfKcYqduPhVmY7eLDot8GdC1brZ2oMh",
  "key4": "45B83P4ZWTfpan4d7J8QPtWhak11ssW5UiHezYSgQbLb4gNfnAqezM6EBY6mTd3ZjPnW5kdRGca2rdSeXzFLsgbP",
  "key5": "4Re1BHzATypSM6mawLngLt9KXkmo6Kf4d54hJTrtQZpnxKrknqYtQ4KLzvqxynjWyXEdMBZfw93WSnuFHDbZkXVV",
  "key6": "5GpTQto4YMovSKtRnt3tE3MKxMsCSSs6dDWn1f3miecq31ejc8PhRcq1cSCvk5LhwijWNPVNRtVZw4tCvzbHtHVH",
  "key7": "2rsK4MmeQxP8Zq7xkg6gP8MR55i5ETnqoRSmU6UMcHSCyCrbjaXgD8uVDZP1pdZHRXn38NQFJQAaDVM2S5LC8xvA",
  "key8": "yUUESYazn6XktVeb1pWLxbK9tqwoup1NWSJ8NFymFDUAXTZv4KVADPGK2Hbgc4KgnkNV68EJvoF9VPGr8cM9vkq",
  "key9": "5E4ZkqpaXJVM3sf5SbJ2bxqu3EXUFjNAH5ihFDLvL622JNsG1QPEsvoZE7pEBsHVfn9FgDDfssxHmkoS63xGQ9ry",
  "key10": "aWTT9k2C5hQPz35BM3MEfj9CnHojpFeNbM7ANVo3ohy369Z9ncnWK45mP9sPLVUHznHzLh4yiT67puXSm5yXXFa",
  "key11": "5SeWvUX4YpRPYPqH5jnKV67StDyNpg3gpVN5vn8YtbzKdvRqebaqBEvpxZi4pSqT1UqYYUyzZbMQ5LsjfdsvaSdY",
  "key12": "2o1QS6tiv3gdx5KZdZUGf6mSXdKguiNF7ttfnmRB4NNydwssbyWbFVZjjHLHovSPoFEqr6W9KPYCgT9MigX6PXet",
  "key13": "5e85m926HPaiTb4QKk6VVgSQYtYJQZQC7JjgKhsThBDLWPVBB6JJp4Jc5FuPSV1j9AGnHtxG4MCuKDNo8ZtrXZot",
  "key14": "4yNfWLuWoaiRE2MZJV1DhepCNfGc3aBEkUtUPfxke9jrSh2reVLYT9SV1jwrDCe4W53tXk4cSTxVqj1WVhY5bnSo",
  "key15": "ZhhgPboXvoaia45hMEFSPXNRd54uwUQ8wZPVkyU2nqSsn7WbNwcfxLGs7vRYRqj77d7iCR9wN4Sh2YwvCr2CBpW",
  "key16": "2bmBhpwqzr3iGQxXZahbrMd5TNuxTKFzH7zWSfnD54jK7VLgQFPQHkRm7hQxuX1hxd4dkrRzBQctS86H22j9Ry1E",
  "key17": "4n59u5otbhsqzGCkxKgsTUXyq2hhRg6Es8YnanLhX3d1b5u9RB3cy7VuwdsYw5PSnadeasYo6NgciiZwdcQ7Uih9",
  "key18": "3ubW8yUdvsb5uT4DdfB5Gszn4q3HTYPDNLN5Ao8ASpNbckZcJzdFMUSQqtMfMUc8QQ7nKBsjcMaa59jonHiRyA6e",
  "key19": "5GrmxRivEd4KaTxbKhR5XxiRnLQi1R9SRSh3rLNKFMRr9UVLBGJYZAGUbWusGhs47TmJEyfy4RGi33NnQxMQJqQz",
  "key20": "3ZWQPyrDNb1Jv2RfBqzqmrnYCfnPDJoqkka1NLJzAkyuxzvMWgURbEEmTno1ZJ1tgb8avxYRWr7ErJGukG9AzVSZ",
  "key21": "3N9dK1DxftKMv34htZ9fd77KP6vPpHcz44yPoGUyXi1ENZKLbPnGREkd5cQa7PRFvYoZBbwdaUkYUwrxjku6bmEs",
  "key22": "2Bfc7x95r8aNQoTD4MEanyFoUnGAMxSZezTpaJADyzjM4K8npekDo2FN1qgTzSYTP5mYs8aR2kziHeWYTdiN9WXn",
  "key23": "28K7uhTsXVZD2T7Vapjb3ZmX6SXVgLKpAAU3dQMEkdm7uF8VLpWAeJen1zKum6tFQp2wf4vpUgdkTiAcJySmAqkP",
  "key24": "2pohdArwPEeMPdrWxJxZLzWHZQwSsBffa6KuU2UpS8nPhxVgyVMEmVz1uzv3Rmz8qdPKnz5DSg37NFYMRNxrrAGB",
  "key25": "fn1dD66ChNRsjGoqQUJ8VoNFdKUGNE4Czxn4TWMdPocUpHFweTruKSUekmkUmKEoBnBSNHZtwe4aZHmCrS2yXFd",
  "key26": "4c6xmvpRw1N2muUvp9vDEmv3exzPL4BH6AFjJdgNeCuJw3y2ZEyELKzsnvPuFoFUEtbGu9p1gZW2RYEb9jenWkHH",
  "key27": "2e6Hg6DAiz3eokUkehZkAi3tVjCAcAUYKoXhabWtdQAgxXGruoNcSHjuEH1zkYXfSEFRZuc7YJxGPcrZyXGsh2g",
  "key28": "E2W2aexQ9KFwtQqtYVY7cVbBXPPZspiuq8LvyxVHykxwLjB4nv9dzHo5L9EKJAMaaQ7KFpNumMeCCWFE2mGf246",
  "key29": "4AvxABWgNhSwJCjtzWsKWh2kGYtcWa1N91Kp6P6nkZWCeHFm9d9FBQoNEvZhxbEsp3jNuaDep25Kqu9Vk1hEGXYi",
  "key30": "5W26HQbGpiYhLLYm7Q3WnNze9yokqSeKz5mombLJGmSpstLrqzzb8muKsPTPDRTdbQf5nBeQz4KkwuYue11t5WnQ",
  "key31": "7ttCdhLMQKE1wnuFJb98mkNMDScqtY5kdSeYWKWLiRkcv1skgVPWGzqirDwAvgoZTFyVsogVq3jqBbKfPEyC2dc",
  "key32": "59aRKuwPmBRu5YA27vHTv1SH3wn5CdTS73Qc4BDnc5yxPdfmEt4zAx7uhbiB1acXZksramctAahLA4yRj7xKsNq4",
  "key33": "JbAb9Vx2nABCB3R8Z6yJyWaX3Yr8EGewsYSTfqLMoBs8TMuo8gMBs68T13KCLHW6QpmjUdBMWm7A6khHYRJKgHb",
  "key34": "SFsgdsZmprTfQwBPmygGQbXVspTzytPSF1in9ZSM4131poiE4oygHKRv2eimNKmWWcTzfeQFL5MCANj91csWU7d",
  "key35": "4TbkUin5EbyB8suTZKv2ew1RPMkL3vAgguxBUEXSXMRuTwRPYJ99QkPhhgG11acAnLjHTv1iXm5dfNifwXTFvi8F",
  "key36": "29ejkkY6o8Yapex5HkoZjBENmyg4jomkGcZmdtE7nyqMcwNDxknyKuxqytBJpmEJcjq5VZMAn3eAmYmwcwPs6S77",
  "key37": "2a5G3LnphDnKB4nRwB1qGMhW7D2FWcfmwQXYmVLmnM1yWR3A25YJtADiMnVjZXcv9WViCmbZcVJ1NQtaqZfwJ4Cb",
  "key38": "4S647NfCEn4HwnxJWgpFZogkxRSheaLX51Kno2jN7NNB5CJ5pTrwZvUCVgNCQtYGPd3chLBhQ6Vs61YCgKL4ijbq",
  "key39": "4v1UUR8tnz9d2FyFpwukM7uQ5NwbzGJRGjaCfuxej8cP37kC38GKN8WGQSFp7sHtRmwqGFkKwWzJqoBwhPJugfck",
  "key40": "3UjGga6AyTxQdGFVKmav1vRj7mi2icw5vhqrGJoRpY43Y6ePXU5G3us9KviatBWKZHcSXrFKHGSTxq6Qi4mCGsBf",
  "key41": "3KvnbMPJrSySyUyLCpjeuuXc2XYxYvSssK2YRyaW3bxrv9uPAUcpqwQNCy1Ags9F3bntA9cdGuxfd4aMJQLAyUnV",
  "key42": "4uGCd7z3jpqNfubmDXViJWWovMakAJT2sm753VJneoNbHqyHX6coPcJmgDPQ4LdgJeJepg7ruQj9DyKD5x1r7j4y",
  "key43": "59btP7vfk9QkKBBMgPJ4A5YckyWioFfn6MvpjoeMzh1fU4oF9HYsTnGYJL9FqrGnivxXZSabdgNxonSpYdvuZXX1",
  "key44": "29HsQZKN26Tqy9DqqfSScXcFqtPqxVoA5oQKNr2eQem7HLV1r4dYK2HJd2hVv6hD67ZKHEU1F6NEhwayWGRofQpg",
  "key45": "4dHXV92MdWEnBVfk71HqH4LxvdFRuajG6ZTUu8aNoRhunbGiHZtHPxPsjxV1ziw4DQ3GfH8L5FRJZxrUCq58rkgE",
  "key46": "5ZgJgjFAh6NpiuoZUWZpLgU6gJtKWbuDsYKSCUjBxhwhavjRfJVc6obp6yhBmSJwZfHNRCJmPr7r8uwFwWU8o4Gc",
  "key47": "5sLZLNiBd63G5dbhRXNmf7a9JS7mfykmYWVmUwgpvAiWtQeWsbYQpRKGRDMSDXUetiroYVUjjuZtUCQfj5mLocdj",
  "key48": "DaMptSeeFLnPKaK66TJXQetwndaQ4rHU1sybJ6s5qW2eyWHGT3xrcywveVjfSs5WWLJdVNiKzPHeioc98X59p7f"
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
