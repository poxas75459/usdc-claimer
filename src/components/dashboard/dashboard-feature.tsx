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
    "54DwSanPqUzj794hiGkKWpYRPBchzK1SFgFaww4W4pm2p9j1DkYszVbC8eJZuGmreibsUZthe2uE1WTTKR2XDRGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KY1yt2RzZpwbxtj39QWF6ntDnPbQgwEmKXtfUbqPq16RqTf5BZE89k9rtNuuXu6pg5tEJ6hnHYosC1g2SqJ1xMK",
  "key1": "2J3X1P9DZ95K5kRwV45heXjJzX2oDU48CKB8L45H3muPjR5bCGDohghtJdiFqmJAL5zjwm31BtsaJEoqbKfFUmR3",
  "key2": "4ZArQitvZyiXZu8oN8xUgA4mg59pJUVeeuD1Ctdj39wyLhpWw9mJpRySKx2eNCohvMhgjvPWQJaGGPkFyeoZsZHz",
  "key3": "4T5yXzvc2BYys4iuoZR4oTSZeLZn8QJa4qstDDe1HUsHY493SAnNn4BxrocJiYjcwTYGGuHezm3DKoG8YyPY8KGs",
  "key4": "SC1XgXnH33GJRiq3XDQAbsrAzYs439KVg7QXGiBDM62fEGduZB8kuGqFbFfokTadpJfZ8EHUvgj5m9PVKReQsbx",
  "key5": "hvVRDqUMxfeoQ9Ds5HQKQJwzT3gjRNna7AtNjCsoS6DWKrV4q2S84P3zp9opqsCPKrUjbNGCn4M84JmrFXo2WFa",
  "key6": "5oJ6ZWHBBrJdZuZeC2Zvh1g94BNQ5fGCjGJRZBGzaBHDAyWTBMxQmaBqiiTZQmWLLZfo5xo9HGWj74MLVmNWPjWD",
  "key7": "621ZCWqW1mky2wQbfL19iukZPkdbodSUzsmWEwNqBnvahDBEZaco6N4oo15abXwZ3o7haXwvSBtiWesFGhMDq9oh",
  "key8": "5vg77QQ4gAbDoARnErVcG3gXDHu4m227Vr1GVcgJ2g2h94htVaCCL9VAzEHKb7TmSaFMNUXCG2ccAr5hhbpe9AxC",
  "key9": "5Md1e1qvy9TaEdA3uAURvo4JQxgtwYzGMiSJP1hSQR6FZzxDamLh7f66mBqRBYRXR6KBtPnpvsrZAJiMsWC6oUw3",
  "key10": "38HBLxPGcNYN24S5dc62unqJhva2HHp54V59Pf697ioiQrF59zh7nnYbF5xbsGysYoH16Jw2t1ntZ8EYgGdS1h7J",
  "key11": "wuV5dWS13PTVVGhwmHQs3bUcrFnrLLjweJ1uYLRHX2vNdE9vyoae3VWuj3BhinSEDsAxCDi4nhwHaUx6PTxQqnm",
  "key12": "5aufYMw711AJ8jvicb8dBwpnBmpUZKaGHRPyuDk3StCbcsAewFDVLqNxSzWVWyoNVhdgzEMNuvhBEQ7NxhN1u8RV",
  "key13": "5TNFwMiv6DgQZJnvWurBrJxr7oXQckR1USvEfMenciYfnvGZKgpqpAZFpu45RYUis6cdH2Drw9V83SZfKe4hWmWt",
  "key14": "1LJ5nsn9EFSkCnDyaMnUmVowbLhYkmNSR9NuEXtGcnxibd4Tdn3dkLwNuYeJRVTMPah1KPPSZjpLdTVx3EdN3Yt",
  "key15": "5LGGAoae3QhdnbUhop8AiRnaRMMLY5rCszCh7g4xzrfeFEYrXL72AJ6582jC96By3m3mLsJqqyaLunLKaHgrs5zG",
  "key16": "2vB9RzGjr2wAdyDPcJ9UMcNBzoQ8W8mTjf5pUMsJBhMRc8Y2K8jQw9fY2UrAwD5J8kY2d17kjCYii2PuBJFNMcze",
  "key17": "LtTDUuzCH9PrVtFJAFs5q3GhaBdvwDGJ12L2Te9M7RntqY74phctdDLwiGW7W4senzuwwT6xkXDwns5Mou5EjFR",
  "key18": "3oNbCsjtKTz7owJvQi82tCf93ErckJu43aCQYdw3XvSf5VHQ1SMfC4SAPpj6VBa4CRZ27M8iLdh1QEwphGYQL4jq",
  "key19": "5FnG1BST5YvWYMGYgfsYjVxDvrDtEkEP3UB5zkBA1tQWDMg723Exg1zqAxMEH4kUwFwVLT43S6XKwUj233zVLDBD",
  "key20": "5eCou7fM2norTNcJoKeJofjZKbuE7XJPbRJKDapiNF2cu6KoTnkTvszgdarkst4pECtokPyt5apTjLb9RTFYMoxX",
  "key21": "D1fKrpPL1C3DtjG7FuRYFMrjNn7dpQUF6KrPsE49jcP9NoyYfbPwi6EdVchpcui6dh295eU9tb97b2eRt1KguTR",
  "key22": "21sAAc2U1v2BfMfcrSa3B9KcTCtJVCQpUdCyyyVzrVeBvaLnBxuXyEcM9HF3ag9hghfZQntmoLwcF3Zp66EzAkJp",
  "key23": "2SY1tdZCquey4GqvpnpKd2sbsSJnosFeQMQiM8CYEjar9j2v9M6YhKai1CNsF4iatznhuFPkJCxrDdTcekqLAy1Z",
  "key24": "3P6ZCWFHNrPJfohSg3EbmwwDexxDjKVCSTHnKT7hJdN4xPE1zSQ7xcs3vCoZtMAXY5g7ofU6AQsfozAmadUzy2JX",
  "key25": "4AV5TMynpEiv5d34TVNTY3wZB6B8VE3wCPX1KpPM3hZ5m6h6Ghu9EnA2Wdz8E3N1EEJEFx9Cx5eFtXbkibvVbztU",
  "key26": "3VKQMatwncZj2NeXwqdT1KYKH9nhXpRnnBBMgWAdnnrtVNNJMsP6eSeWkV8CHiDgGZCRFZqD98ciyZbtCBs99CDr",
  "key27": "oow1YpfM4hPAHNPa3GeSk4DjyBQkiKXJx6RDpHrLtmSZew9FVoUViNXJ3Zgew2q6AZBt2d14jodP7bBqcAe3AF4",
  "key28": "2T7qMSrGyv7GVsWjdUctBoE1R8wgH8uznUN5LETn4YuHhu5GL4WpXiBbTuNFWimtr1XQuMww3fycs9PJPYg1sy1d",
  "key29": "bn55EfeyNJZkvok5PYKnzQkZNYPQPpbc2UUq7Wn6p5NoyphZCek8vEfALfi77goERJCePg5z4xDPemDtbW6Bqhs",
  "key30": "4Efnt2yjk8tZ68QhFUka1HeM4Ry5t61tb29ZS7A4zKFfjo2dj3q4xu1n9cHQn1oJMU9xD9UcrXecfBDQu5NbMqGq",
  "key31": "2WVM6ShYTgD7vcVSMhYd53fmyAUTmvEtQh7mjt7LunABWzM6A1Ho51cjitavLcGej2eV2zHygULaVzhpKHN3ThuF",
  "key32": "2d19y25kXkycJYS55bp6D39YdFNZ5jeKFiHGv9rKyUC6eqckkpsNuTJ2EzFYR6XiMwqdoSTD1N6hAa84DTZtALhH",
  "key33": "2tfhnLvHU3fKTbxZQMKbcUAPpdc8PsaET2N7ogAMWrQmPen75xwLDVGu87hr5LrAMo2ujJGijY84fQyLRfp5kctn",
  "key34": "xSdoh39iX9rH7VfvAACGzXL6wC19eif4o52d6pHhwhCXjgLNm2e2AnkQEvtx5k5rGMywQWLP35D1GKwGpTBT6oa",
  "key35": "4CwU3GhY54MB3cKX3hrw5bKEBVsDFurzXzVPrahjuHtwmHt3qXj1397Uw3H2wp3E1AtBMhjUYHinwwwN48KVxadH",
  "key36": "56vhdmRdHXTm9S2nFnAPk5HgCUDpmHepkfeDQdVAEeBBrAd4vrPJVHWdFA248ZLuDBjBR1nn1tAfm34ZmcV7rd3H",
  "key37": "4H8RDdwXgu5XpCHEvs5uqNftZMgimFM89zHaSad15o7HZSFeywbez9TqBzLgRrqUroeTu3yZdhZ4zXLu99ajiKRc",
  "key38": "2naaPzCpgexaWGR4zhN5Q894i2X9qcwFBtCcp9fB27Jf48byUttTioiMR1VaK8fSMxoGZ8dxZAXfX3BSLmWojd1x",
  "key39": "24g3KnDYJVvKrwpCBAyMerZ1x8kJpYA1EkVSJF4fQZfipb8vxwfUTMwyV2jAniXsd2LYp1e8mPhBGEqw2MEijU22",
  "key40": "H6mhDtowD8QcHxCpEMyXjqwvi9AZdrcS5bA1W7Zgwdp28g7A8kN9amyZXYVZY6N9mpUjTA3MhC3fbasymoh4Fvx",
  "key41": "4HzWrXrXcBxcnHdt5mPP5CFmYxm7Q1RRGtsc3Jp4NSmsroVw2RrPseMsCwc2x591pYF2nGX2Nzhh8QiftYQGvK7P"
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
