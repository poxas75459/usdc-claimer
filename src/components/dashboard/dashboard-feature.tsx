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
    "2zqV7tRF2YE1v8gfKiXafRDt2ekVDJp2xrhv9pKe45q5WSdYDRdJtMfQGFE8fWnAH3BBgMj6AgWzuMzNkyX6GQbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HaUut4Rs7n5EuZEvZwZJHNFagSNhYMpdSyWkm7Lo9vYKcg5BPakm8B29craUwGZmxCTLSCKEnpZBUn3o8xCYd5s",
  "key1": "rEniyq8FG8D1i2wsZnmBGmN6QkoGMgZGbNewk25Fu2k9DaFqNwPsmoHuPrSGTgXQ1FYD9t2qqwo9FvQfA1HRVz8",
  "key2": "34Nzkp5JqfkDi4EWeRqiBJuSAVuLNqot2hNVcCSqtSxgHdKjuAbPmMxqvrmFtsHked4iTdra9tQAASqwUCyZfpWF",
  "key3": "4MS2DZb9JZXSTdN4t9HmqeN9kvES55YM7DEnjwJ1WLdWvUGRZs6p8z9gG7q6jj8haW2oNS6u9puxjchjiBKNgsqH",
  "key4": "4Y2qdhfmWcNmhaf6RoYzmc9ZHFCCboFAK4ygYoVXHSpaBwKHiz8MXWjbjavUfkbLDyZy1o6sfLFuRM9aLiU57tcy",
  "key5": "4BGbBcoE976TXnBwimjmkserzQZaR2cZWSqydjC9gBcX2fpRKqzYWFFefQAXSdbNxH2Ydc15dvCKjfgBPxayBsoa",
  "key6": "y5Ww1Cdnp1P2BfWY4nrqJ5sD8MexR5p23GZKk8dj7cNR74gBsHaNrqnvGnzuAtsVErtDdRVuV1QhRqgnnqEFxKC",
  "key7": "5qyEkt15BDDeR2SfN4cDKfgVRiYcunPqe5g4dD8stuXdHtc5MqXFfuJFTgfvzMKQZbdQDhrf6LBz1sERhdyGan66",
  "key8": "2bcME78x5ZpczpNrCpdaGw25oQuSi4QQWu5pQw2z2s34i5QJjMeaZLuhJfuun1hWxkWVUVxNN2jLSKSMMApT5UFA",
  "key9": "216EffC9ZsE3DqkVmgK2zA2ZUUSGhkWer6zn7g4n7L6v3vnvUxhQoofVwgVXJ6C19LxBwE7WuScKziV19hWYQcwV",
  "key10": "2g6aTQVoyu4QrkgyZK8ftNTMzJewxAkRxaGjQedmk74Wa9oXTzhRLd5VMhsmdVM6736TCsGGVUmYoHrfUGQvn5K3",
  "key11": "wqhptundsWRMbS68fwNC3oj6b916BWuouQUEkmhUnsgaA5PV1Wta93YbFqg8qDjYxNX6Xr2tQjd74npvT1Hi9Va",
  "key12": "3AAsUTT6ceUkfBuyYaPC9RZMrVYB5scQEBAi2KwQ8ZQMQtcm37vRM7Eh1btGL9knrgpYhewmSRJiU8BqJoSTzWdS",
  "key13": "xHb3E9GzEH1SpXwV3kdKYF1TLwXtXCUV6Cm3SmBHtsD4w5cKcSLZHhxKYWUMYNAJiSFUA2r1qureFd9jqKFTrd3",
  "key14": "3UaFBE5StEiBmF3ZJFhNHxdGW2ZyouRrqUvkNSAAEPkUTvF6vq174YHyDeVH8NeKhd2NseXqWTYehsaH64gK6QBJ",
  "key15": "3gMZ256M7gfa6ZywLax9XWp8uoGBiAqEDBMCxiEVs3yX1P5D2MxHJURixCbCB6yB7ktVeRXbAqbScdb8Hs7Y9i3u",
  "key16": "2CnfEEjgndxusBdcCBZn1gtZW96pa3zNUSAyneq6MVh6iFAwxScvPQJssuLm6jEvFNirGgWjpm4xzdwQ5uEb8zuy",
  "key17": "4a1Rj45SEcrZSCmbDGLtaswhFvQGQESGxBwrqMjswNuPK3RtY6xqCMi4wd2v3r9sb9Pot5aU4bNTCre8NNBmL5Dx",
  "key18": "4qakXuEin534TQveEEdahK78TpgijB8MWriUjMyaYBKr9ATrnkVvkZcqHrqbMi1PDrusGpvJwbdx6xfcLuTR1hCo",
  "key19": "3R96czqCRw8hEwujeu5KhVGhqGmv48PmXsDF3mALenauMGH53zKkLPrgLafZVBUTgiETxsSM81iWbZdGmKHhzMxc",
  "key20": "5ee2jkjrDJznsAyZJdZqzwjLAyQ7fCREqWe1nAARCyDre7YPNWx6p6JnMAgKMmGLt4fiFrsXxFgJjpcQUv39dqhU",
  "key21": "3N547xR2BfodyT5fbfFa4jwWG6uiuDqYfxPkH71tuzDmoNeQA1PqHF4Uoti43YinVR6HYJ2USpK87bJrkqjYqXT4",
  "key22": "56HoWAwmfPo7B2hDnEG75L6iL5ECNmRwNeEXqdPUZnXcx9r1VbixQpRSxNR4tZ6CSt3We9YWvaEppWdpf7tzPGDy",
  "key23": "p5kbTPbpBegaSdWbxDGaaXJnoqLYyDg3gewCUCeQL8SQVTbeLhTapfeoC1HC3aSqwAGJkJUUYpHYce3GTuSyZKd",
  "key24": "4o9w7yJ5FYvDGnMbVgXNeWexBjG3Wjt1ewBZt1acivztYoLpwaBiz1SjMkEvbo5q4Q3bzjrQgaKHTTiKUg8Qby64",
  "key25": "4MnGd7K19VCmBfz4EMp6t96wRXgW7MZESjX8wkCJDGZqkdqwTTdZhW4MR1RGC6t1YZ6x1Titgy9gW7FpxGouFc7j",
  "key26": "3j2XMVY6Y8h8HGGVrv8pASjBQZg2xBdPXFrzT5AWaWXBcTJnPgDmje8n5gcGUPrhzkAw7B5q31BCGosciPmxvXmG",
  "key27": "4Hbi9GraPkpLZjtaNLBuNwVbBcccyr23nYuGzbe79wydesemy1NHAQgcP4S3v2hTDRSqshRnRcZ8QwDVGitHe4wf",
  "key28": "3VdppZLnetUqaz2yx4U4wXny7invCE33bLqpH6d9QyYUmkM28ZGdySWb25j8buVJFVA1HWFWZ2NonAAD1PRobtZd",
  "key29": "43DbTKa4aD2csW8SVSAn2UF1AsomUaoxVVKd5fkFRuCf6tNo5NFTUs6aNyVE2Q44TorJNbhK5eNgjZphUqXB5A1W",
  "key30": "3NRiVyu8nbk1LF9hDeWaPu9ekn1YbPUSWVRG4TSh3mSWujMb5uTdufkMNN1yqcK8SBvsmJZijreQG4A24Pe1JQNv",
  "key31": "4Qj5LBKF6p8c928FJQF5rXqznN23sZbpx7UH2SUqMNpsEuND7GLUwhKvUH11C4ZMtUfxg4v3kRHEKWPRpmaKxAn",
  "key32": "3WFHj1zzJ4DAoLGWhJ6yQxCm61KGXHWbsf2hZsv4qQn8ekcNSGFioncDeVEwmjbXsHDjmpSYV23xNV2RcudVGKWu",
  "key33": "3w9VeMNtwutJFHqUouVqSYfaZocFv71ASH2dTsVoaWKtRBXP49buLERAynsqV1B8zmSfdeUhUD57FT1udtKTorjg",
  "key34": "XZBk2DKyeM72hkwWGsJQ7zEkvKBLpE1qybXiB1YhZ4zX8YbY71ozsouUkQK461PwKUFK7Hab8jpJeAD6ZuzGdVY",
  "key35": "63VNNKWAhXEEA49tk5hCoUPkAjYy7Z8oqsgqv5g3H61Z1Y95Aj4JicLTqYZ9rWJ13tJq8dCiNStCsHhUvyPTABGE",
  "key36": "2D6y4LMnM9PbyCe6VLsar4SawqHqGstxH8P9FCxtETRVdohRdC7eCxL52aJioy6hg6N2yMtVP9p9Lo5kEz6Xx4XR",
  "key37": "yNsNH7v1mALpQFqKbkNWKMKeHkgrSn6aq2WazSeupmZb555UErvFXDFaSAYitghVmBskUN3X5X2khCRmYHqtY23"
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
