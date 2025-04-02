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
    "4FH5khRTC1JyTv8moVMhVeiu2oCYzTy1kmn7kvARpR4V2Fk81D7ouLvfFaiAD4mqo15Kw5cpQW2pcDr56s5Tj7S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVx9PB7AdAduGReD4SXp2dSVmFnG8B1UgrnvZ6DUJyWPuvtuiuHyVnJ4jgBfUuQXNqbdjZHii7cGeLgH9mPQnAc",
  "key1": "3NrGaMSDvg9PEuKH5Wj55F8JKqaDxx6Rmk7qrK21vkAxFYZuFGphJ1gD19zcbEk5VgUWwEXFyzTuMpqbj3z6ughJ",
  "key2": "5WZf3Wm1XzAnX6v7VMMwyLYThdwuXAhoRCVpDYK4H3n6Rm3jvNRYDm1jcTMFYmGrTn2Pxsndf1SJyKpFerukwNX8",
  "key3": "25TcbLjrxzBPLbhUGYuzZNG9bzgShbAaEV9EknuHsvXsD897SJ2nq2GUut7TGAtx3V2Mvv99qHi1hDGYtMq8A1sT",
  "key4": "pZAPUi18d85AAfkJW63bVY2YxkGAmRr8NjSCKdE9io1CYwaZdMw1mrAeBoGNwiqysKW4g9PFtXCSaKz9f3dcDwz",
  "key5": "4DAJkdB96rvSPaoLwbk2tGh4k435MD8qTeARu5LSPcjZj3U1xUa632URiqR3NvUQGK2V943r5zrKmXdFjkLBXckh",
  "key6": "2tjgeEWviJDGXe2xsAAm7jyt5PoFRRaNmHtHNVe5miWwapCdgGzyZjNNTnPVm1p8YRcHoWMvwGJc3GAomAYq9zQy",
  "key7": "3F76PR4hGD5oW2g6Sdt9V8s5JqeFwqgnrEB8d82LEDokBZn99W8DK4McdhsQV2niEFfiabQFsSE8jTWggudH4XAN",
  "key8": "46odkzh2pCosdhKgMGFrj84VWJMeDVt8ccBcJvy6LbgWjxw3wa8bxDAMBtDFip5PoSybVCymEY2pGk7mU65iRs9Y",
  "key9": "3ttvfUSm7D1iLhPqVaZcQjk1xbYP51MBTGGQdE9xkxXUs2bChdCcUf68FEKQmRnH2q4ZwCp7TehiDD7oCzYsVxft",
  "key10": "4GMNUb251T2WNi37caYYC4vFLbP6RiXXJxYcmAKSjs7V98enVVxdZz9nJfmuHeH519j5NgV5zMUCXcmJh5tDcgKy",
  "key11": "5TZwV6j2oc7Evvzow8XLLjSvsaNKTwFmeBNtRKaJWWdyV27BJQu4xgNqTDTHFCk2xjs5X6Ns9Bt1iMWYyk89JZgU",
  "key12": "3RsN6F8zZWmuCJf45ZdiQ8Vue5NiVQAtxEytmjwV7JNpXNXo2VmQf9JVrwKCPQdSw1QM4kzDc6VYbNdqfmXgzvbt",
  "key13": "cX2ytXtBesMYnh3niEfCGXPFH1ne3M9Kd3oQNSKfR2R4dVptxqaUh9TbSq86P3YwfpgXrUCMYeCMUd2wAPbibuM",
  "key14": "3p2UYJL3dQcCkjgmzDTCQV9CLCMd3DTwEzLjLFxCDbU78MSP55uiJANPQqRjfw7oqwC45HVqusce5kYeukhZPTvL",
  "key15": "5zypu3GAk8QoHCL2cAUon5tr5mJEZHZZHMCfxgNe85WjLSQ4tA82RQtNzxHHDiHfZgmsUY4NZ9ZzHaB1FwatuZcE",
  "key16": "2SvR7XCMLg4eqPDxj4yhwZJ1RjewNzJoZwRaKdspJAbi36X89yqhhyn1iZub6xXA3XUyNNrwBZsMB5uPF2XVBE7p",
  "key17": "k358hYH3KAfLyC8fzmZe2JmtEJ8FWJeNWDo9fPcVdM7oLE8yLHa91zaSeE7ZPrimqYrYEf7eY6Bm69dDhAgh3Uq",
  "key18": "2AaeVcjAwV5kA1vw1dtRR2SSDMGMBAAqZqyGMwK6mrRFFfpjhcT1yVF5yQxpqghuaGUsst2MDjVfYYphMX5eH3F6",
  "key19": "YydA23YRkjjsc8zrUjyyYeEnxz9hiLBPFXYQppGcv4mbWhGLjwFGRU5Vgdta69p4SNKqqQr2m6XXYFD34mmjMxm",
  "key20": "pWgNxDEwjGq8gG5FLgdDe6z147ZxgKRZ574wqPBfoaYdMecS6zTTRamvXcTx2YsbB9Q5Njvw2iHtkXhCxTjXUHJ",
  "key21": "2VQ1Q5yHGZfJ44SVrvWV9LC9yksfwGvUb6qG9uDhRrm1r5p4piGz7nCpJJbQ918nvSpQpLGfp3DJnniBsB1DbUEZ",
  "key22": "52Fc9TiyxWve6t2bYaZhPAtNV6vfz1adZxmViGNkXk6La6MsdQAJ2aicNo2pMqPrqiFCCDUP4na3zCR7VWknWgNT",
  "key23": "5w1v25SzQdKsQSxWdGoXyeJFmjjq6hdjB9dP8pMt29cR12MnRXpXQABiVjW1iNN3c6aiZtQQehAGxvvH4Y2KQ2Pf",
  "key24": "96wjReM5oyYJ7wic2C5qxgqmmkenBRiApXLJ9JpF4pbSJZbfngRVfaNGZ9Sw3FiMYEThd3uWrM2Bvs2EXPmsUMW",
  "key25": "599xCqGZC5zybnzZNhUYNGux2ae7GHtJGhuJBuGJvqEYhJ9FU4GyCsrCiCBwkqHqHCEjZPvjqoLsnbLTQqsZqxz9",
  "key26": "4cKpB2sG2RE5Z6LzUjK1jG29JqzBjVnf9EjXb4F5LfRiitMK69BeToenyYCggQTT8wJVp6R4gu9Q1uzfZnkMtx65",
  "key27": "5NofkLVhsBpoAyGSUGkyGpfrSjs1jz8DAMpnLvKyaVFK3oBhtkqPKock7KKZz3Z2RWM1soe3ftVaFZcvmHWmSi6K",
  "key28": "3cU3NzpMnN28wANiRcd4is9f8kWzX6URTCzS6Vea49hZD1SjEo3D86kMswgNLwn9BBY8RWvM9FM5TB2DzxGM58Tu",
  "key29": "56A3DAW9sj2NgtQZkjsePX2A1avp1kpKRHYQNs9bfMD95x7VRTSVDJ66RAucRcCnw7LJSJEFnibYkmeTZHnaTBXK",
  "key30": "2dM5xYCF1ukZrXUC6fmsXwh3p6rqd2PztyKN1ZqMeCqfcszacpXbbi8b31raGkyw9M5dy6tXzhW95QAbaohLtYMk",
  "key31": "2QKfbCtQLFF5Jcke3X84VwhByim7dwM6Hz9s3d5czwNBanXDNc7d4Lz6zHnj8FxAJav9zvSmGXwGCGpbfBvuXgqu",
  "key32": "4RqeYtjth37GKm2Pv6KQNMHk9wA58pfFyouuLDm7N6j3zkcRwL2VFMGnZVNY56qh1skRHspbsDLthhMyj2VgNYZG",
  "key33": "4LSQWCcyUsjX8TgpigJMv4Ahtjr4iBwv2pCimDqQKeZayiiMduGkkYQtUAkb2A27JmMR5nR6iBh3XqsdWUWMzbGG",
  "key34": "5LDfUxaDA4LvZqQ1RVqKkEwsQAgEKMtQNAzNrZTY7ue258QK7axRwBiSCeMhQ6jyQsNXBu324hWYPKKUhUr3h43a",
  "key35": "4D7o9CMy34oA3wYrdMe3GeXV9gccdfgtqmGBeYx21WGXeniJpDGLwH5eTy3Lnef6G2gct2Yk4R5h1SDXptk9sQXf",
  "key36": "2VL43QbZXFERAAxLWzENFwGcetr1Pdcm8A894n4dLCTyJPhdVh8Ynmv55kr9GUW9AtDSESmDdEL6D1oPWeUjnCjB"
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
