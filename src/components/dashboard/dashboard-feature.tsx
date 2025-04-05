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
    "jADeRVq6vgKG5ounLYCNvUNjNFWMpc8QNeFfBa4QGQrDaSFf8cfWdGE5UgQCGpY55L3vT5w8z4UGBuKUms9zNjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67UkzyBVqmBU2P467dZWNQYKZSnvzfrk2nfbJCWviYVDKGbEUhZnQc8jFjArNf5eobphb4fRfFQALfrVtxzsfFU3",
  "key1": "2iiGeuaMpXZQd612faVgVyz6KNNbLugrCdnj4zjrXpynxWU6FkBu9bHGzT91EasxQ53aBtPv1caVvELocgorwLNR",
  "key2": "53CVfFMiJdS9JtDCEeaNitG4WVHFcEU2eW7Dj2jY7dMXDtC2BuQRg2a8X1G7e67LNfkpRiRkvJhjb6qKF1nt7zBH",
  "key3": "5q2T91RCoU5C3Td5P2Ft9Yc8JhqcxkrDLJM2s4QuGZ2ApQbubecQqHo1T9GZYfinniKfnYJ1WcK2d83ZzoyhSYjP",
  "key4": "4yVQeJFf8b5ofvdujrUcoJYm2hRzikiHpnGxPy2HuyFMxBV4EFrKyhMi3xTypoSwB3SeAyJyAhW5qoJVzz79vid8",
  "key5": "4xQEUxpNdSXSc1np3Xg9XjRNdoYmEVhDy8d38uF3NXJ6si3khWLqyGj8vwtQgVLRrTbeN5LvSkqeEPycYDbpZWse",
  "key6": "yqjUBdTonBpwFWKLKKjpUQzqLKKQgYvzeHfZqYV5czYk5jyGo5HSUT7HvGSQk7DJrszuDWD3t7cYV4pJFWp71TL",
  "key7": "4445PzRqZTybjJXhn8secStyKKHNCKcdAjuww1pF6g4dwqkf4eu397NqSFpCfSwe12G7X6EwJDMExnnMLw8c7gSL",
  "key8": "39XjDXZNHWvcwZ8xYPRPqCaeC4RCJH1XymXhMGFMmNXSsr3fYA5T7PUvovuxqJZb4M3zMNYRfAkAF7UJpb2GjLSt",
  "key9": "44FtQXp3JihzH7YwtWSvvD6e2B4NLfyVGNcQBKdvW4mwJiUmUPZzY5DDeRppqMgLYTMxd5ekDv3zbR9QYAqSaXNx",
  "key10": "5cNzFdXAb8iirsgKCTpr18WzK4V1Gce7GUjM5yNzffxBhuthX1CHGNEbi3QY2vrmRcexMjR3Bm3Pye2kKyHYa63t",
  "key11": "2G8b7aiy2PTHEXAfXfxoCQFKN88ANzrZwhjoiE675Ydw2FQF9vDhu3DkzHaHKPoimzvbWYZR93YDp994mEjh2gQV",
  "key12": "VkUZA9hLHN4zZkKyrp4QaszhrscmgUoz8YBBeAPAGLTQRXpPgjtd68P2DGQ3J2h7GFYXdRjA4QZYGJ1hmd5vjP2",
  "key13": "4VPwVatKo9k5r3vm9bzVq3QDxFMbGpQN2Vc3v4SkCRV3oa5KGcQ6F2aZymCTwjQmZfrDUSbhzmveqsJ6NyBM5KCz",
  "key14": "3193JK7LJXE1bqWkYgtFHDafncxEe7uouJod8rCrbJSQs6ojonz243eW65ibmxnYwUP886rkysB1kge6mgDkB3rA",
  "key15": "4guv9LBXG6HKLsbfofRmgUVQEtMGFPpTKheCSsVk3DnRD8mG8kxh1SkX8NY2FSfg1jdbFRVNWsPk76NarQVwsbJF",
  "key16": "4eyQfWf3p4qmXWgwkb8FVxmQSM4qWzMTeze8XDa68tfCd8fy7NwTxBpimsSzCXtajw7xygoqNmFXFk9TM1Pc3xzc",
  "key17": "4xvPU82jRwEdomhpeH3esoj7135DeAk2Yi7XameyakGHZfqwCDws7TRKvMPPJNLmMmjLbzb99wtELs4nnEQzAWFa",
  "key18": "5867VpaDt3yMyVsMgJe9i5VDYuFeHaM1tLhj9L3FCC1bYMndwrZN1sNq2ADJpEZzGDTk2QSVRMbXBfx1q3bTGav",
  "key19": "5D75pHvT7rwWQVypRccfBWRwXFsMWfKzCNkyPib9r4r83xjr7u28TDfihvVHRc8JV81juM1YyCJ3pBTY11QYuEWX",
  "key20": "4Reqn5gjsj6MkqCbiJ7yC1DQZF8naEFGHWxJ7U49gvfqyaVfqTQEWSd582sKsjghinyjG9tsnycSj4mGgzDDoWFY",
  "key21": "3BSoR38a9qz8B8cURgTNLp16vDjjkqq11U585Eq4vpfJidvUyRgs1erRc3BVo25QnVzZ67AMZa45wGEEJMCrdw1B",
  "key22": "3Woky8y8By94qELoNygtxYLCEegsHuxezoMFsvE375mSxSepGLbB4Li96YgcgsyVs2PtXAzKXPDs3x6Zo12kdyhs",
  "key23": "4V8QAk7zdwmS2yesBSv4CE4Tqc4YnoUBRpN36CsTdPMtkZ2HZvxuUsCKMsmu8dqqSWxYg2Y2Nnen3y3avwV7miHh",
  "key24": "ZbcPEMjbisACr31K9GZ4H88Xi3ueHVDFQdo7YHY5anyeZD3VocVd5M1mMdEZczZXyWgnjYiHPVQf6UCqQQD9u8o",
  "key25": "4uyLf92A5h18MocbLJyZ4TKLp7MY3ak9XkebMwtRH2iFtvJECrKy6GizyhoR7ubouypw5xZzP4e9jWniw4X1cH1m",
  "key26": "3JoWRmcwTEp5pRLAo9a5baN6jdVgzEraaU9ctigSHedVMiFjcSZuGobT2UiU1Zy7XEdu9W2hd8h2Mkjv49GXKUbo",
  "key27": "3JDJE814kvuqsQpUypyh5618DPURtKWYm1A6Ftg5XqQZ9uem4ZBiEuE7wX7GmGCqT3oTCEhN3MnwN4E8LBHFckgH",
  "key28": "24376b6eipf89xBFne9fcNzRq9UnN4T3BGc6UM7WwdsxDxAPUjYRAGcxEB9nDd97kpjfegRB6m7FXukvLJVH7eDb",
  "key29": "4M4f1xygozrKZ8YP6bC7yZ5BFww9Ly1RJgyNtqPfCTSV5QeLXxwFtaijaBzjjHpNcWZgK19xMCwNXkx9x7aXDXDP",
  "key30": "4AwCTvhZ74MSntQWJgj4frCKi4yXFcNTi2815kiDCBLUuSTnuH6Tu1a3H7MfNcdpp7HmTVDatBzUmhKmmFi8vYHN",
  "key31": "2nm6JDhpqYpNxk9bSqW8pDqLbzL62pdEYWmq7AFJmmkUsYS1SCg2zM4jKAhdDyfVnicgcBTjX42d5Yum3TzigMif",
  "key32": "33DPN9xF4UtFHYdqqZyF9N3RzNQ37KEE5e7pGAfZbdPeoXwJaPcesDCRo6MPzNXsefi2HgYVAridcRHzX9rbYWmn",
  "key33": "53gd1xAgLfTnf6SXCdsmsv2ddXV9j4CLzC6XpU3SNgZNTDsDcqLguMB7xmzU3kPGoCtzTYchEJzdsBaB1KKavBZQ",
  "key34": "k7JZ1PnvydXDC4E2b5f47fQUEf8Deo5aVj8nnzDUB7ayGau7NxDtQVPkERntuBstaDR9UKC7S2H9vDyraobk6Yx",
  "key35": "wXm1YMofz32cKkyY7p8ZMH9uCarmkjSH1HncQxMHpyTdbKuF1jDEDJLRK36Sz84M668ddz3QNsBFNcW9dWuim7L",
  "key36": "5FRUXPfPVZk5fjLP66VLrP2dUvuZFRfKViwzSuWu9qPw6kC51yKPW5rXCz5J4qmpqxDeGazEBTXgAgn5Ypz5fBvH",
  "key37": "4bbLHj3E9wiCSYMxgCxfF9TD7dJrEeTcFfgtdUe9jTJK8E6X4ujo5H7iAGUL4wE2AP75rg88DLgfp4MNdUa7SdrT",
  "key38": "5jHhd2NbeFm4QbU1KUVVdShwqtAYNh4q1qq9pFcmebSsyaqtGzWYLuEJqEUDq3NJaFCEnmQgapuzJHTuLPjDfdc9",
  "key39": "5AqeTrsuUHD8wm2Y7husoKnnX2stZzyDcLkTMhAAAYswo3d7PNLGqWYmVBvaKFmnV8DqkxVxB4h65LCapUui8kJW",
  "key40": "5KipDn3KCu5vnjcqcRgbuZmZ6xWU7zgHdBGvCverdAi2C5LdHYWYWBsDz6GcKCszzzLbmuxPFURTf4gvQxWViMAU",
  "key41": "5PQmMmHAeLqF3d2GLJwtk3gcqsL3kRtp4jXKYB1z8YaJq6osAd7kPThBYiM9orRjLhzg5tinhWWWcWCEJtWW84Et",
  "key42": "5DLVEv3VBuqR9RePCY5DS1FvVRTG1ExbRNt7eQHSgLvX9VsbJGMFPXQXSUJE7ey44419usM3d4Xa94QWEHmPnbJE",
  "key43": "3GYpZoBkxv11M9tHpwGm94BxcyBEXUT5tTexbvbVZwB4bDieyUFVVxuNTyd6Nhe2ue21Xs9uAzePgysyo9zpcGfS",
  "key44": "3WwXLKyZcC1qPXe9HiKjLaN4SUdBouxJ3Z2DimMg9s9HLworTDbcKzf7W67cxg1Hh2csU8Loekc2HhPaTR8LeKxb"
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
