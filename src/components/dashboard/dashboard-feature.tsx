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
    "2Xz33tB4ivC4ujtbpjeSECSVGLc2Kj1sLPLyuVmZrWXHRLgpYJDFvDzBsUJgMuythzF9FTaf6peUBcvusZeDrPhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNHcjr6YDVeDyngfTLZ6BQZNmxxgt5goEVu3BmovGupVgVF1q94jrTifLk4729BZJfgsDYFFu9BbC3X2VELk3UW",
  "key1": "2ZZKSrgn8nE9ggRwicAGv44tNnwsJDX8eyDLJ6k7BxicXHZCfTmMoMsq4MUxEgFW32fChenAfKQDkZ95UNBrXeyV",
  "key2": "5vxpbRc5aCHz13KWC8EhBh5dtv3ceapNrgHqQnxjwqQUchC2AcZsAPZaK5axnoNdjkR3kZvH2KZxZfNkSkP43psU",
  "key3": "GwbwrJXiKC25XzcL976QNeAnixvPC6k7LciFGa4XGo5zvrJNd4QajP47YNUVr2sM1Y68Cty9BWmemia5iSsnzBo",
  "key4": "2RRrRM7BMQDowmzmY6PViGRdJMWM3hpRhAJGg6mhRXSzgBnmzvw8Zy3ogm5qVYWFpHMUdeFj18Pp1eqr8zhZUs5y",
  "key5": "3Vkvxp72tUrejYZyZa4xeZYFxGmY29dCNQgEJcZg3MJWXFZWk3FPA8H4HJP5QsbQrTUtRhDoBdS6cyFS1jqTFhUP",
  "key6": "6BCfkXziBeLGnjXbf6Sh9knCQ7iVst1kQD51ZCAQ6xLFg3MEjyX179omTKMXF7TR7PDJXRu7V6MpEcqQR2aFk8n",
  "key7": "4gZ5VvAej8x8vsgUy8oCfWJYBdLrchTzktpytbFePi4mSiZSxJPw6HXfb1zYAAkcqWbx4qKZC47UJVkUNA1R17RD",
  "key8": "H6wDv7vmc7wZMUrAw9C2ZY9EEQ6PCYLbsyC2fjdeiY8oLYpL114dUZbT6paqzungyxTpAi2GwLh9RmuQsdAnaf1",
  "key9": "2vC348YQMSUQad4egQ15HrZELARAwe2hJCohKRDG45sWVYGgGbYr3XsgAWNLeTLTooVyYhewESKXWYp46t3wKPp",
  "key10": "4dC5ciBkS4pB9T25nvubpNFsXkyRMUHFkgU8dW3THCAkjshL7MhUb1gf4Aq6LMyfUFBopHMHAe2xHQ9zmuUrumxK",
  "key11": "nRsRctvjKFxb3gTh5cc564XeV5tL42fxXUrZ9CU9xW46BpDTMQisqkp3NvrSfPXCy49fiY83F7T5g7nLK7vgxAM",
  "key12": "4vAWRMfNbmQPioQduVckBWPGTNhT55AFr1AhHru2CySUqGkhLR7gvddyjbmtV4Bq4AW1LBKGmxsu2L51gfEKUjYD",
  "key13": "5861vxgubXhBySKhMDC6KfiaJxukAL946pAsvGzCR8ZVUoqyEc29bLQcpJHx4WAxs5LFRuvJAPYd2A5QBg9kSyQp",
  "key14": "oPDu8wwT7GXsafZmvXiD76qcrGqhc8ZUP32K4zMPofsFjN7FovnrHDL7JuKW7JpRtW6YFEZh22Dvx4EkDuttWQq",
  "key15": "3hvtVBUaNjMz4GcCTeJwEPecXMF2FX581bkEZ3WZusyuuWunBWXj5ooCULRdsGWpQfrXRb6HNUi74ZSKk7Fk5yRu",
  "key16": "3ivD2yJeMZLyrgZGJWhin8Seeypx4AGFxLhQGH4S9Dapv6t1fAEFGxoPeyLftWQhStgjqTwASoyFL5TZFbNxswoB",
  "key17": "5rjNMY2qs2sVyUeBgkSG1PJi3JRmeKj8PtkABGm6jUHex3KuZgJZtnqPjYmrfTyTjA2hETfozc5PHgM2r9Jv5sRs",
  "key18": "3S1LUSSovbZ4betooTPaCXTBuUUnR8M1Dpn4Hmyf3FiSJA8p7WJ7h4uHMpFy3joG7jBbm7o6bx4VFesjNSKc5ZD6",
  "key19": "2yVRWJxvqG6JVFzvFiTdaxmbRCnLX4V33NK99Kgu18up3RaCWNZ9s1ho5cmUNwvfPUbY9jMWx61EMhpwLowJT15y",
  "key20": "3KVPkZYjCiPzn7itk2nXuUEGECsnKEo5qeTq6bRHBAxFfqVAjbqrvydbnQVMqnaN6mLCn1adLLjm6eTeG9RTaCsX",
  "key21": "hNYz567BE8YNX5A18PeJvU7JJQnuRPKSy1BY2e14US7dQ2KuwLt8LFHjmbzKNimAWjwboqU9EFsiX9eTbYhmQgA",
  "key22": "Tnj8afsRPVbJsZyaXA27HNC3RUZS2sT8H75f2BhPMgt9trRgjiJPVGgzwJZqLsQFh4PJ4fddZnLANBbQCEbxo2T",
  "key23": "5vnfTGs4n3jnNZstvcz7JBaoUNM9Atz4WXHwRc2fxB8xc3z4s3YGbtqBY9DMqAwpyCeooapQBbxxUJFbqGRtdVHS",
  "key24": "5NBWLv1fXZVggzBFiikeoUPB7tJs1fyikkNrU4uwnRj3F9TNCvB1etJaFhF8he2eALYEW23wdeqG67AGN22NcJyw",
  "key25": "3sXzi2byrhoqnykqFi7FRZxCCQZCKAZHiNHq1aQkRiAmbqDf6ovgjSdKLh7PC82aPH1SMNXG4ZdGSUtv2vZciuLR",
  "key26": "5Hz7mkh1i4r2FqzWnQsFXssk6VfHdGqMQkdwtBD4o2LezuNyoTtXFhk1ua5fbaFn6CAZMWWty39hXZobAZb6TVGQ",
  "key27": "gEBKcXkFCZ1nbjxgn6tNdKbNzovAwLRvCBftAPtAyx3YdniaQfhsqrkw4e1MFwehBAjhJi5jAjEPqfU3xmna1nh",
  "key28": "4136U9Lk9UZankuwXCnurnRQqwVWfUiAy5kHEnotsXTJi7Ke4A6PZKWdZXjeJt2MGuyW8boxi1ABT83dyqconZfa",
  "key29": "2kXv5akQ95miTJuBkPZXB7ZdXonLKNukqjpYCC9agKQWsyyPcqUwJNoKCgAWauyFg4fkTLTHs294VYFmNv7myCqG",
  "key30": "4phPLjXirSSsTa6XUbK7MoFPBzaktKfzujcejmkSSkCFMJiiB4PcE3vumwCx4G6RT5r9V7WZo34zA5bfMvMpB9of",
  "key31": "j6tCfHd9LfjEs1mLw6iVQemLwuBw7wt6q9fy7oED3aK6foQ2zqdgFrM2fcsrCrcVo1ArVoxsvTZ1w3X8bN9e7ji",
  "key32": "UToXU77o2ZvcuEJhBLH6dqaeZkfyoG6vymathqFm9dpRCsCBDD3KkujWBCDzcLi2Af42TnYgo6rxi2tJqW9mrzd",
  "key33": "3j2xYYmru3ZabekEou9352q55bSugTpQzBUoLnHuM2SpNCLeKo5cu5HgaepHa7HvHqYxEy47GRBDrCgZpmge7c1x",
  "key34": "58fUnVZshK9PobRBYx1YXpiKNMBjgBbP6VhGjpNSgYSFsM7GXZPu55zMNeEPchmMvny4YF72Hk6GecDVcWwCXsRq"
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
