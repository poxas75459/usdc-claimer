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
    "u3jTaMpKARsKVoNqjygbwMvCysPxzkHBnYSttopNyRmzuYjnhjmXZoP7RnjmCgwpes37Bw29reoLDzbeqSHDC35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJNWkZiSJu2XnbxR7jgYP5W7x1gnEYdJwWne2UodkC9HhSMt8YW67SmsQwvBREhpnv7hVZVGk79U4Gyf2GarWTH",
  "key1": "4hjm6xKoKcLspkfeCwouCJZ4fbNNKW6vPW6V45BhmmtSP82g58cUbQ6xcTQ6ttW6geDMqtETRr1v9vW5QmKWVoFe",
  "key2": "iXJujwUL8CJiEdZmaw5ZaiC4rnQnUj6pt9mqcT29D28kTmjdyW9iXUKpUxEYNdmyWmoPesqL135JwLHHJmHkq2V",
  "key3": "326hKPxfm4BTw8KbEMqS2VDBut8toPa8ARjMGA2zxgFVD9CEpLmgpVp6gGvnQG4J6p4xrgkBuk8EZrH7A7jfCfzi",
  "key4": "39Evb8RUrQYnsY62DofhmUZgNszq4YDT5rk4h3ZTrY9yipe5zJGaHHxa7mqxka6FAmzygMDCS4iqP3qHmM7FFwCT",
  "key5": "222NfVyr4uXn3QGoUcVd4VanpSmoMAsjpEs25fSJBLQpqVnNmdrK8ambrvZ2hSVckoVtdbD2TBzt5TRXYXvc9DcA",
  "key6": "4hrtkaF96hjKydhFSNAENaJ3zWjqnx6zzMceSqZsX1GWAbxkbyaiYKyx4ESixRRp4xVJdiPZwR1ZMJg8bYFGqstG",
  "key7": "2PbfhcBsp8XpwLMR8HBahhBkThEYsL9t3dwKeBVRkqHHjRTLoeVcZSRpSfxGEfcNLS7hdyZHZFMRTNYTvSgRuoCE",
  "key8": "5NjqbnsjEw4M4GHNdXes1b49Umk9t9BLN75vG6uedy1pAz3c8L7VBn73ifCLCuXXotW7J32SnuWjz4jQtFiK2znc",
  "key9": "5mFmfkH7KKGWDgMjRvWUfcPmLM5j5oNuxK45wYLsA4nW2psX4c52wJp322FoHQ1JT1wMEQ7sA7MpXuDqhX9Hf6Zx",
  "key10": "4dAV5HdUa8zTRuFDqDJcybycWwdfWPewAY9y9uizeZM9KX1UYwv8gfxBH2CsDP5hRnTVT128bULA7ecMgfnQysou",
  "key11": "5FbXVFag4xprnsKjfnc32dpwYp1vhaoaFLuNPUsKxAiyagfpWLY47mB8hpf4qSmhdtZh7tEQZhEvriatuy25J7bJ",
  "key12": "5D1Ai64m6NsSns2uRtj86swedMpyXPcVAy2zwpL66ZzFW7jKMiChVzNpWNp1ckbBdGPusEWzdqDibNdFLb6gvNsf",
  "key13": "3DB43LuPv95NvE9vt8nGwEp5892gyENcMSr3WJQRL7Yctrouw6sczwzEsJ3xXDx2DHkG1RNXQ4yufTPMgpLaqFRL",
  "key14": "5J6s7LTjknZHN8u8QhEHg35VFbk4ozJpQyRuRJRu6zYLxLHRPCexPFTAfBeHX4GWbS7rwZpskw2rjA5yTyYMXJ71",
  "key15": "2Ls2i5KtKtMLi3ntAyavHiQ1N89azRW6KazKuk1SSxtDEyNRhWnpAnkZBnjzbrhCPenHWHjAdPrstgvjMwWtdvpE",
  "key16": "5bccgpdsw498eLxWJT1C2TxQ9KuaYfvi9awUsw1oQoJYfrxH3JEtNcB3Zac8eyiE6XUSgbJwkLV2uDm7z7g2gUot",
  "key17": "3ghKPWGShEYJ5bumc2fFLZqmWdFpm4S5Lh3GRsmCnaRTNzaD2cEpX48bv3MXqhbvtrzYRmazt1dLR9KJvYYj1dBh",
  "key18": "2vUyknXHvJvtDhLvmr54wunGjCwt8rmev4AdGdCCTRA6qXntBSYCpx6HW1xSoU66ERSSyMzD6XcvWCRY7cvKMyCq",
  "key19": "4EWHoUgVWqDw1MuczsjTwanE9W3ZmCtUqfEPMu8VSRvXGvb33vg37LowDiZBXirDrVCLPYukKS9AKaDyEfx1oTVA",
  "key20": "3R3i6Dt2DvJrxyfzgKmuSTZCWmzwdc1XNKgTrruHkR4MWLpHgx2ukZw53t4MecrTLkeufhjo8QzVuFFBjGgxKhah",
  "key21": "5JvfwmbPxWhgfHSUiAn2Dg5SuypaDYhHefoU6c3GrEHr6h49cSZ4djHhysDnqhvydWPvYYyKuzAQhxzNdyo6jGei",
  "key22": "4RrprweDzwMB8C5mMENp31UpV5PotJturS78dvDJYbLcuL6Fxg7Rh8mm8ma2o6GrNQ9oiZwwErP9wdiQxAy4kpJA",
  "key23": "4fJwiCW5s8uATebGs3a9DqrkS4MEoTvGs6aqHbq2i9j5xyvkgM4Qhnij36RFarGmZPZk13ZuAid62mw4isQpDsFg",
  "key24": "vUShELQ9SRMy7jZjwF8yfqvczA9ZX7ytZus3WeDEQp2garkSqyfMpS9BYcBA9NFnQiWxGCe788zzua1F2MVSRzr",
  "key25": "3FAqdJkZfe2FWLht5kByWaeX3AaXrwonoYTnffjMZnkGK9eS3unkrqdBnTjwoeSfQRQiRpe5NTW3fFrG3X4Dw1Nn",
  "key26": "3rjpFn9TyumNi5anvumi4Y6pA5BMTTLJtrHdPsnLsZDgsLDb8AUjX8wjVe11Yn95CZxQ9WczGroWxLsvnyEU1gDq",
  "key27": "2R4aNr1jwtmhM3C5T8fuTezjAPsvx7ZWeT72HCnk9pTNEcdWxFUb2JWYDrjQH5kH7PrUvJMStGCyPkonQq4iHqsq",
  "key28": "55SuphVr6g8kDZ5zyjQSiPn1YuRSKfywYUMnFMoQWSyqaLV7ebFB7ehHN3kMsmNc2y5Ca47LvHrdkaY1cqGaGqQ4",
  "key29": "SAUY15sXT511poRcc1MtH3Gb1VKDp28Jz9P64wiM8Q5byGaSdFD4aEvgAAGhGYh2nWCqpG1Kx3vvny1GiasgvrF",
  "key30": "4Zga25N2cYMDFkR6Y4p8uzYWMYPM9UEnr6VPQ3vFfjHuuktjHnog6UVC1UXtWWexPnmRnnUKvY8vGjGLJZkCgyuD",
  "key31": "2ka2B5DH5kSb7Yicqq4BHfWmZKLLLx1PsxoUeMsXtXSAdRLZ6UWxmYjuNHFDxhrFD69W6qnVBFaze2nLLjD9vH5B",
  "key32": "2zYD3vMFRz8gWFBtHLHLcK6cyd2McZuwJ1ud1rbX4c6ZeYz5o44zLJTtyayHjDL22Aqf5beooomMzwioWz86H6D2",
  "key33": "5PZK4qXdtEytJ56eRdtrnLE6WEsTXXeDvTk72LkRR9z8vuvLCfC5obvw561LyFcGQd2cXYR5qwpz4wV4WYqkuZkb",
  "key34": "qorkJwrpRqSxecLwpJVw1aMuoUqLZgiGuVh2NHXcrrifXkSv3bB1b9ihBuATo8VwLCsMHFjGxC1SyFTi6joXEGK",
  "key35": "2qd6TEAzU7JxHeBGD7XErPgKZBq45PdnrZ7EiYnFGAceVZCEp5SuXzdvzLwr4xM9iZkt7eXoTYdRQfxWDNnGnS4u",
  "key36": "3frJ1mLyPc2sGhR4p1NXtRpBwnnfaoq5DLMH1y3EL6AXKCLS2YF1svsevdGMtboLn9icLFeS2jfC7AMWrZPdk2KV",
  "key37": "5LERwV7hwiAkfCvAnu2iWDKjnrZkayzLZ4SKKBuVYczzPJxvWpvSYtiGbYC9H46M7EyzD2qhs4CS2EiFLdZ5oh6s",
  "key38": "5HL5xCz5Xmf1TG48uhLY2kwLXY8AZqeVRVYPxsyWwLFFwU4vhxBfqR8mJA2FKCK8i6csrc9FbSw6fnB5uRfFe7vQ",
  "key39": "21hasYmksP1XZJkMFvaFqyTJ381yy2gngS79TP44mZBSUzG8TXbrEQJZTqks3wpQiGG8UtGv3X2hSq4y8K4AfjVA",
  "key40": "52rxe5JhxoPtqcrr3QnSnmo2onrUATwmGmKMTRTrKJQCjYZpBKMGsHeqS1KaHRhhad3Uv4UaWsznXf6K8U6XF9gD"
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
