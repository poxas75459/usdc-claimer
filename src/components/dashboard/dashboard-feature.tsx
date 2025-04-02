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
    "2sdBTFXzyx7UqwYvJy76yUFjxgzAsZX14xfPK4k9sNupec2jpGstcpGaq42C4f7dYCxqbnEKkzdawYfoxeKBa64U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcRYSTCv9tSKYoibvLiCpih8UFt7vBFomnxhD78dQksRQF5CpZZr8NzDasQ2gfFE8wHcM9EYgkRA54ZqbTifZ3R",
  "key1": "3cZUSr5L5QcNRJBRgfcJrHyaMXU6CKXgSzCAyGTdTSgviNHCAEaDc4dxpZ215yuKEiWzz3SLb73kDntw6whn42DL",
  "key2": "2iZAPBpbCwm5BJ16JPYEf3ddgXN9aXf48ondVVn94bNgDRHYqvPE5saapTgq9D3T4uBomGAdNyjCyn6p8jW5RW6o",
  "key3": "46fY7Jz1LffHbv3GiTRXnaPK6CafgqQRapsgieXXSA1GXou2eRPCjQQKY8AFRLHxeNxUFvcBQ7m8G3Q7FEGJ7xQ2",
  "key4": "54scp6pWuG8XgupWbZwBgbe5WcTfC1w1Va7Pu94ThPScJ1HaoDjJoSwmAEMfUFaBVBQeqRARtoqip7TtzdGNgjZU",
  "key5": "4pmMpneoQ2Zjg5xPkBptRv6LKQR3oSzbef7RYHTEu3kHHXiRrbEMS5bUt3n4vLAh6GBWJVjXnGec88f9Xhhx85Jv",
  "key6": "4EEy3gy9ReWZmvUbSys1Rz7BCu6CFrd7mPhAQtZxSttJGP262mWiLhmhXP6QGERiuFaDor3vfbunf1xsL7a4KYea",
  "key7": "3tMt2KZ5ocRPVnqQr8ihtgqWs2ZXn25qRvzV67tmW2wrYTtbkrC3jyuHVoQZuPUz2iFWE5GbW36D8iF5vfxKmh4h",
  "key8": "WaQUjTVsPjyKKwDY9iFKjiS2N1uRkq9y6gEWHx9En68fujhncKYrmXF2QCavZjM1fkegaSLU46AE1EGxVep4ug9",
  "key9": "2DcJrZYtpDedEVoycSetXzuf8zc9XRDZVNAGxKmwuHhtwfdoydkgpV8zawEL5YDBvd6k9qtt942x74Kpforj1oge",
  "key10": "gnXMUM1FnxZ8xX3KZmtP5Mo8yDEoG36VbDu11RBJhReC4c3fhTna9NPh72wHhrSVYfLL1VGWTf5QwVxPWCK5knF",
  "key11": "616UopvmEWGRZP5kvnFnNbEsSubhVK3iYsAeQnrVk9ngwZQP6ozCbTnAVUfPMxyfBz3kuCvXsgJBLmAZU5cSL8nm",
  "key12": "3cGWyCqhZdH3KjZcgPT1fk4zhepE71fKG7okJLbaKkdMYaqSUGd3rapj5Q4EWdcNS7fbAfomjjDrQm9MRt58Mxk8",
  "key13": "5a7YHAs9ZeGdc9DoVTfZqbUtdRFEDH7FaXSUdLM9M1fnLkyEqgL5XYtWMPPmSUHJFpeTCNmJGUCyLNpDHGsb3Pmj",
  "key14": "4boeCFVy2Wrb4JzGHbavLniWqKKkBdVVz5Kb5YDTSCyVxbTAdxS9BVUkSWQayX7PJaQrFbMSfbXv673gdyB6DqR4",
  "key15": "5VTkcFogWoT2HgjnpcBdzceYF88CsLkqdTyJKprEsDyrz99rWdXzyQt3DaTZLjMRgGRyBnKWrvKDGb8kkJj32mju",
  "key16": "4usjxAecXRF5PsYtC34XxAuAcdVK4oRuRHxuptPMgVqfKnJ5SdEacTQ7patjxhqWRLYGbvYvkoyaA5NMtFN7x8TL",
  "key17": "5SixWkLGyQMXSCkA5JFwmfQXL6BgT3wA52PUakpRUyNYvxCJgHNN8qFtbLHgDQ35aRqvF4Bc4FHJtneZjtM2NdLe",
  "key18": "3JRKtGFEP9sdKYRHDjFdjqU71ME89CJKTuYoLpxsxMYDRfQR6P1uWbdhqZAyrLNYuUWhXNN9V57Mvv1cXpsAB75j",
  "key19": "2P2sGL9VgCSXKs3DYLxbfwF1WNCvgWsgDyZNVLnGwXQFV83nkzVgjMjZUMVYMiGRyicrJ4sLjAoPLrPWanypbtgR",
  "key20": "N4KaVJ4uE9ZRkuvLozbaeJqyPuB4aY1aogxdF4TTp6iLCxg4m4KoH23V8pXgM2vecbwDsxshzq6GqmLuMzoAsSm",
  "key21": "3rAM93dwvJYoXNCp8esikeKp9QNSLpSzDrJtEwAhGrKmmtBvUMqHTxXyLvTC6WU8u3jBdNv6CV2FWiKD3wvpUNbx",
  "key22": "2V7Mrr78sTcbmZ6seMGPwmSG9m5spWPoKU1ChpchmgNJR9HM2d798f1QsNUMVgTMaWoRwrn4NgWNpeqUcWw6PVD4",
  "key23": "43m5DQBocvfQ983EVjSPzf7BmHYLVEAcRETszQALi285T14eriTWgXXNfowJrxUSYhzDddvydC4cAMiBaNqdWhf9",
  "key24": "3mE91RBGHsD1GE311gv34yBkkWMXaL4AQSAUSvi3BcVH3qRqMFnB1TW82K5UfPZFyqLabxeEZSL6dJHrDPGMV6ag",
  "key25": "5Ur9Ne3BUGSpoPsiQgdqyqPM7yx8p53gfhnTNSSMuQhMd4jJn22kufyCYG4AzQELkVFv8D6HBrZcPAiTCSwyNnP5",
  "key26": "4u2Gxg39fds4A9yFYayNQcuTMrFm3FgSYEhPQjhU3kuzTkzos5VpQkQLJQP7YSi4viUC2LzCHPpiWems2xXBjVrZ",
  "key27": "2NzrDGZmTnEmVJznpkFFGx6xHAyuBfUQfgywVBVkDr93MqfdQbQ2anQmRtesxJt2AKy74qPM8nYWf7x1Qj34TYCg",
  "key28": "3KACPxSXewfHenh1bzGysDEA4hQHu5ppqunCdxLE3ZDHizeJ1D1RpTMKbGTrSETpXMQCTUA8GCMWta9fiZZ9cYQC",
  "key29": "38hegDtY6YqN27CzVoaKRXEUNxnm8fReW7gg5z14unNzcC7o63MbuxxShMayC7G2s4f3gt9SdDzi6fqMzkVmbY73",
  "key30": "bkw8KiffRhMgeYUFNHZGSG55sm6v7V3dQ7sdUXpAc5oLWYFhTALNnd6dSw7LzyEFKd3RbSrEJo7Kgz3yhzHqvm9",
  "key31": "2vENfBWHjiBSxoKUbWVFZZupmjXkY6xbMgXE7yHZqdg5J6WE32dScKtNDZTvjTX7a7kYo31MLWs2x8GZFnSWu5cV",
  "key32": "4t2Fbr6UB8f7VWzjKsU8f558cGbpWi19MFHHuvMruEmXx16hW2S7UFZSZxB5zi8zwJLwDHw2413rJP1ZEqYCvtzd",
  "key33": "2qhgns4ewu7dex8ggZFLem9NNd9GGisPmhErmTEzQqiQrzCc2gUVkPHwQ13LXDxkNxA8HprUsfUtu4K5Sf3JxpSk",
  "key34": "s7FkasKSebRdPfSpwUZMxhK5sjEx5r2KRrrov6qpHpMN7tqMniEaizS1kMaXoUgVAML8gwH8iUjjFPT6vi2QbFy",
  "key35": "4ioKqn5qfnvAek9pTdgUcGrBGhQqjAyxaVrWVCaiDCuawv1EoCfrZgCQXdNfzYgFpqN6ZmpfNsUb5N4w1ho37unr",
  "key36": "2HcXsVtM9YzjeHYPaWNux4sNq2UbvihmmqJQY1w5buGPbpLRsjmAy9jsqx1ti2FRMnVpR7jHd9ETcQKJz1YfUFnB",
  "key37": "2jbZyQyXgyN7mh5RawBbtGP6LwfPP5JtVZCqmyrCZjkGqA3Jwe1aWwQivYMQZ8JUn5NuniyDFffKqMiD1dDwrzFK",
  "key38": "2UKwY21i5TFXjgeJqh7cJDBto55PJi23T8UF2W31H6rXDi56t3YEfBBdYrw9sCU2KxvkxZXnMhnCSDwGWX19RYkr",
  "key39": "zy3FRagHCmQURkQNV3foh4JEG6Re7JvFot57j6PB8r7fz5WgTAZ5d4moTwipXBXa9kXeGEEAMJBYqZeCyBGhQj8",
  "key40": "tG9uwGJK3Hd8DJkJXHzXSeGXtSyCMMswx1w88SawkZTCWCX9hpcCaQKxt7RRVmcyb7986YhbZ2qCHaarH25rR4u",
  "key41": "4oLgTy77JTPkJS9yF8ZDc4d3vqRAQGQB7LbmFoPZ7SKVXuENehhzNztLBDrgjTFxjVjLfVu7gjpBrBHUj5FVTjdu",
  "key42": "5RnVfvzjDj1nD8hoQZbQi1zm71bjVWjzAwe7SPTJuwNuf1UD65tibjR2baocHtKbvWj72BARecGvP9T3LgK21RoP",
  "key43": "2bXMWLP6s9LYKtpbcDZxxqC4gNXEWbkkfdsk97JpPenVC7w9bUjNymoJgKJqxkymkhHk46Dr2fNuv7uav5pUzzhg",
  "key44": "2saf1Fb16tpupamFvrDswee39iYGtNT4pfTwKZ1Yz5HGjWcznV4RjK1Kusny38YWx26VziG72HJgyJjLQXQCyE8Z",
  "key45": "3pKuhj3qfbbCPdppEzanFJXHNe5Dk7sr6oJV7SZE7A3feWkxN2YxnN4mjCVPj8HmKFSx8xRxqn2zqV3i5CvdMckv"
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
