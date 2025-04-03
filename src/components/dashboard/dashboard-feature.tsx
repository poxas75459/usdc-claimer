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
    "2SLFFEXeqnMe9zfxe6zwJymWwmtiLH9Am4Vq4bMjJ7hByN7YGsDkxaCwxbJojdNz7N6S6pV9K7boUxvSGUzW5PBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f51j2EMjtmhcKzxuMbAi4FQvoeCeqk92mngcUEi2yRAmPw3uy4ZG5FHZFY89A2zuVTm6jTTy3BH957RB7pmGXHL",
  "key1": "45mDpQpcoarrJvsWFvzEkUDVap8432qb8rNUGY3hPL3e72LSB9BNuZkB8ZPAVdDqWxsof6oRhSj2fMaE5dFSnDry",
  "key2": "5AE5oVHJv5ckjGmtg5LsZa8v7NX5DB4LZgwkCZiBtyhwiWoEL9XrX4Gg8XFVEVx8iibh54mfzCAZNsCVTaZ8giSf",
  "key3": "3R1uDyFRdnPfnzk4qH8gV4ZACGthcY1uJzRepCS1bb81va56T1bqaqnPjZ8a6NPP9vKZtvNhsSTPFvgygAbBnbBy",
  "key4": "2f6BeKCE2WAowKQrewYiR21D2Vteo6yWA8W51j8mN7r9Rkrwbk6gginoSKw2sLFiH1cGtGEhhNXGxMvWXbPFUXyF",
  "key5": "2DWP3QrDcqnxyVTDsg7kRiBKt9ocfT8CxoaxcoLJkGEYm9GetMjEgeAcF2nHmgPavmhwbHbBa79DtQDrnD7c5eRh",
  "key6": "51ydnyWcw4RCNb2cfS4VKyxXicQEsgpu4oUE9ftiBVK9FBQYo5WxiSHtDLZi2VRFXhLieP99Hanioa7EtajXb59A",
  "key7": "25odPrLL8ijsMqbq6eAC4zc6CZuuWypuEG8VGuqXxJARZ6VyRAcMUD4X9fEcDxhFXUykndrTMieYDSu4XPUWtLdX",
  "key8": "xQv3cGspPPzPhkV6brjPsDUJrnHu6sivY2kx568u9zcJpKr15q4nM56eoEX45CTNLkxf25anmK6gxis1g864gEk",
  "key9": "2eJNssWBSzmCKg1mKL3RAin9xzaAPrfM19D6MvHEqMGLo7mWD6sEX2BW65D9xw6xmbH6cNw4FNddNbxqsza7BJzC",
  "key10": "4iFw19bdNGFL8LFAaNix4ab1MFcoaVHMjuV4Nfy1RSr9RznnhE5XgxE85Sh5NqsUaN26BX4vU13K2bj21WjtpGUg",
  "key11": "3tF1NzZWRuwKxCsoBtxc37eWfaGEuTRQFxmdDLdt8RtS3ZJRpM7U9kpVcrqCwavED7W5uwrFhVQFZEhpdYp7WqGP",
  "key12": "3pWr3rPb7Ks2f1cuHX75ADtYWJ1dRLQoTYyxu6UibsDDpxwh5GMUWtXdrcMJC8VP5oTeH12EgYF6i7hSS1gJwkyi",
  "key13": "2tTHCgdQhdgRBCfGnaY8XzJy5Az9P7bd8i91cbcMPMFfcNF3eReNeC5FNPRrdmuqzkDY9j1ii3SMiyTz9A6P3fcE",
  "key14": "4rewHTFYnmoBr9Xt5zgTWpy5MYaAzZkuA8rn4kAVN6e7dxTKUckiy9wMovJJk4XXsX5wTEtuEVPPYUexYUWA23W6",
  "key15": "eVn1apkxCpwsE6qAqCT7wtK1489A3dDwczLRSUxBtxwejWVpUsS6dLcSUw7ai9rZpvyCvSv12sF6StoRD6dUNmB",
  "key16": "4ZT1ajJqvZz2a3oazf2VeBu3XuwjyDLaYfrgWtz41KWpxSkzQywnxxyum6uyCPDkvzFJYzmEngnPYpicyMnjNaFN",
  "key17": "34sLrbdUuDtabGD91QPWNs4KYiDMQXHCNVAru8ywKTz7UBhdGyn5yfn5B2GS18G7xWpz7o5WmtacbyRvafgPd5CW",
  "key18": "5dKXpm5ggSxXjQQBubbM6QtnaQzANxszvqxJYjxojFJvnYYtSpeaLpxDPBghN539bjzjjZdufEqr9wPh2qqvA3dT",
  "key19": "4mAUKGPEpwykidKMcL9WBdMcRa7245ivu5tqkaZVZSrK3T7J1npmoQyLGQ7Dmq6YYRfcsys5tQPH8sWRus7ohzw6",
  "key20": "296hEL66VExTRDxR14vWNBaJj4XFAVYng1qKkg5fU9zU8ds8NjkbLkC1LabQD2PbggDWMXJ161fCL6uSAKj7R3Gt",
  "key21": "3j3bJyWKoP2bxjm57FQdY6MMhQG1VELuJkbCcLrwttYeddrNMFd2DkyE9bY34o1SVP5LDoZTRX4B7qARJY6M1kKL",
  "key22": "JgaNbJy99RctGD8iM94xj7NrWBBAoma6aeYJurHyh1E38EHkKfU4NccPPU9zUXsgXr7CfmQD2KgJw3ccncw4kdh",
  "key23": "326CqPEyT147ZSvuyu72ScgDpEa6yWZgPpgtnoQXcY1XDP98pT3WJmWiH2zqx4eYCpr8o3duyofiLYU8g652YFH2",
  "key24": "dJPo1zTywotPmBstdPJUW1tmK7FfrEiNy7aZih6Ftz78MaHrMjqKEjH9HzK2Hmn1BnH7Yaz2yrUEpLTZiZjuqZG",
  "key25": "4tr8z7D482b6RE3Qb7HLNpwPXquJgcRVnrN9aZjpYEg6Mm82C6D4xeQWy6gQ5f2fdjbekJUwGMfXLGs76SrWLGMZ",
  "key26": "24usyo7cVmJFbBgidyTJ3gYiYeSR5XKA1hN7YU9X4CTJWKie5VfLkyvBsxmZE9VnDfXBmHytNGYtVkbphRd9WrWQ",
  "key27": "mHovp7ZnFmUmT6aMbj8GQ9x7orKMNJsoTtX6S6dV7wvnBEFiZkWoZd6nVbqiWPfMAYgBf5VokZzUKvA8TTieUBn",
  "key28": "2MXvgm4yucRWt7YNEz4yL8hjTUBuex6n7qAMarFR3P7agLL14CuNhmeYg18BitFAyUuGX4cDAXqCA9YWaZgdoyW3",
  "key29": "21ZrE9y2RsKGUhpNiKBZHjhCwMvwLwGMnqrUv6Vg7NLFgx9XPuVWdKt9TcfHqwuVrLHD3d3GiyBCGHFMEmbQnkES",
  "key30": "3AZCviJc38wcyj1qLA5NKFD6JqbRjqpdg9eRiQ4oha34TMCf3Nc8j4qo9fsKNnAu64VNbeY9tQHom57sVt8Ccs9v",
  "key31": "39noJZbYHn2hiNLJffwDHJx115aPWJRCi16wmiMV9M1K6eb1FTho5Gvqezyue5MULUBMef8xyqUqMwePekX4EZMP",
  "key32": "4u4cm84RjpNWANmGkrBKsMe3vJaZHcD8PzjXoFpAMqdoZSn7Z6GrzKsEmUhwbnMZWG1yuMxNLju7yVQAVc3N2qoy",
  "key33": "2ca37q7CroRfNqqKA69tSymbS9PbRiN7DLyVN55eSpUr3tSQsN17ZCMkEMuUGqmUDLFQWRFU5nkypKhbWFnzXuXP",
  "key34": "46MH5K7uNABBgchWXKHSZA7Gmfm12wAVGynDY9DURZp2rHwwXinJhrCe7TAYmQmCUpixotHkV7gQTSxVoXQyT38k",
  "key35": "4f4v4AKbdK2yYZWvNwuXq9wKPZjdmh3idiHswotNLCEqtqMJPgVALr6qzbZ4VGwSRCMy6PLJqp4jXm3sPp152rq4"
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
