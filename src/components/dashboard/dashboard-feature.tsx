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
    "5UihGAJVdB9Mpv5X7F6XtgGyYBoYTyGjaT9t2ezRDRFrDPC3KSc8Dz5WqkjVNCbD4LK32oPPqL6iEi8tF3oueHjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPePNv6uTyVVzM5cgo5VXuYQ9PZNWkKLYh4ZQcAAs28RbwHm2R7DR16HmpFdxZr2JPn8NYPiV5KgEfs36xVeA7b",
  "key1": "a5RQSUvPAKSbLkREuor92XVwCtHXUJvbMXXap36uWTAy9S38sMqteN2wQPduo3TZtNuKr8jUm7w9dA5ZQrbXQmh",
  "key2": "5mDeTshVWMEHFyN23UTKqzbm5FasWcycxYwyKZfz7o8UHvQAyq4ZEBScyQc4n7CcBVH85dCwD8hZJ6BR8msSfStR",
  "key3": "4h8oCsoXMxkX6JZqYiepS31nx4BE1rxftk1R1gJf1w8Vu5VR2PrFReMr8q9ftC6mQDHo8JAycCTzJpcQnt3doJe9",
  "key4": "uXkVVfvW88rB6CDtbch2S1trzPk537j94PfaE3fvWSmGYVfHbpmst4QZ4MnS18f3w8LiWywHJYTAg3SzbiC6wuy",
  "key5": "2TDPyuAGrMB4a1ZxA2WjQNLPQ9g8ZaN38BLYowmDaoDgiNtaV1ys4apnqgVYzKcY2QyUmgLJQG3Wik3aiVBHdsUy",
  "key6": "3i7vm14dR68QBhQvJhVmDv3VSDRCDP8p41Vw6tRvj4RozDTGpNBeVUZM8s1sGFGWs4SJUEidjegk7pNEdxrRw5zx",
  "key7": "4cqZGCZxq8AGLLfJ27dPP1kg96NKREYWmAVVHNigcGi82ULdPsLbM62mQwDxm2U8psvP72YV1Ca2AxhPRS827Z6a",
  "key8": "2nqW9J9NxzHhVfHtVTxDtDgacsFLmpKCE9WPKcQ9QvtGAegUveQPEizeDrYgsy1P7uPcBbR5q8oCmQGvTiyiLfTN",
  "key9": "4yaGbhBtr3FYbs2c8BoHtK5GNuinjLuQU9bJ4U2TvCLQiMEcqbPHueQnyLFiGbeb9rhFc2rEpSBSsntWqmRSpJV5",
  "key10": "314yegRNtfmuK1nskHKPhZLemYHcgXL4ykvF3HkntYCrbnd1rEwdfqjbbeNsuB3eq6WzEjafRnr2e4KEe5q3cW8x",
  "key11": "3G29kNcp9LiJf7drNWNt7cp7icWpxcLqbtLv8wo98SKY9hpMc1mLCkT9CcFUxajXxipkjiBS4YrxP6jV93kL31Ge",
  "key12": "2tS1rTNjLRozRK9LDPGk1sschPC9evUjYtLpgxHfTgfh68fuCsdSDqxEETGJByE1JFkDbfVueF6PYeMJhvy7R864",
  "key13": "3HGTDDiQdyQ5UTuxL87Sb7YzFa4xWUN7GpxVqDmJCqkPWVKr25fY3KESdmkdA3msDhHWsb1Ky1YDCPUE8MnGLvJj",
  "key14": "5mfNTzVxs2FEbnvsc28og2miMaNyjrqrL2gYMS43N1wExVkCLWaKeYEv5cBs3rwFM1FY9ANbAhjr2AYbkaixBzaG",
  "key15": "62gTwnZggF2jVmzpbCX6aMCfKx3ULV1CJixoJyAziCNuWERGXq9g4XYbicXgnNLadRMmiYwtm7XFHcR5tigk8mJC",
  "key16": "4bkLY2B2Yt9LhKKdeeqHXFvyg48Hgzdt7hT7PdV9hXv9HzSxv79kFT9EsBNzzJYJJcJStLdw3e7Bhe8mYzJjNmJc",
  "key17": "42k9KsvbCtKFqsVuQJv3Eww2xdFg2NkKoy6hQBMdgh8ycmwb4CifuENcNXgX5PjcBvAWTnx96siXiYAKuog7pvgo",
  "key18": "3kjkzJP31kWncowmF7AtZ8qGe8uSzJToxRSQN4e4nUHxViug1nssT9aWJrq38HpWfmYnEek5wE6GEfXf8su9MhsU",
  "key19": "4P7y2drv6sABtwZ13kYq4LvKbSpfJpscX38NsvQTrtT1U4FgKEomPy9EfCK3Ee9LiWsAH7QTZomMVUgLe1KoeBZr",
  "key20": "5Fhu3NXVRSgNirA5XoFVk3T5fsM2pUtFFkfTFKLaPJYwFWxahaebWeKBxFS5HjTREQWjvNSxkVfuBm89XLupHTaj",
  "key21": "dZCz54UTccbPJR6YSNvjYRj9aw9cQK6VJXhEcdAtgZSxuhrH9DhumLedtQjqK9EB6unhba5WgwSehYR6Z3LthrQ",
  "key22": "SsoEZHyaYtxWBMbPAxqQPZhEYJtpomUjhrSfEtGXMFtUqZYe9MiM5kPtznbmZwaEyCQ8xoRR5HHsPWNY2nkuKpN",
  "key23": "2e9kvSzwwDM1noCxW9GMgXv3SSiVSpkM18EcCZjMXFb7rhxpyuitL5D9zJsjuVECWrdV3CnM5ssAmzZEhvRGBpoZ",
  "key24": "ArRcAhuiXE72CFs2hewZHij1myyCVV3dYyrDfyZRjCv44C5cDxFc464Uqoi9W6826gjYegFgee47RXBjQoV1Yv4",
  "key25": "2QWXLmsKaKdaZcUA8Nobf4qR2vCq1r1zvFEwzCmvfBS8v9ECe9P9eiopSe2pc98mkK4Wtd9tLcjnpNJknu98pW2p",
  "key26": "3cCCXBTUKed9QWdt6Fbf8BqfJxPjrxgANQPQGpaUbLu3DRopjEEQBhqzS7Hd8TcQ4XqzHQUaugiRuWigSzn3ptqc",
  "key27": "3mCbg7QiXMCQpS5kzHyVxanXfyDrf1JjdjyNQhbypcXno5cx56Hauw5jHokFFTbDXtYDvheN5qqc7m4sPbGJiBg5",
  "key28": "4YtyZbuLAZUNUYry3FShqDAYhUx1T3vEQXSN7gUht3bnrhAqfiAUXM6mhx4vx5Jwu3k6dvFgdP3oYhcaXyRHYKZG",
  "key29": "2uiS2cUfEUuJe6VTMjyBHHCNqE6XWJRgLJLYHZbYBwRdHXBr5EusbwSQENWFfXP1WsQGY6ezH7YguAuvv1ww7c2u",
  "key30": "27XYFgJsp3kfzMtFnYwLLLSKwyT8mYuryFY3BechQdw4r58XRKSZJGTm2PKjiytR39QXyzAtWKRPWRUjT7bUy2SX",
  "key31": "5GW5NXV8sdFwXAdTBYjgrnuzFJFivzwE9oqSdihZf73fgkjMBLfUtvNuv7xGAc4MmuPY2APTny2Emaxj6uhZF23z",
  "key32": "54eKwzp6n9fCamAXQ2eUY6Efr7wVs1FBjZGSVmefdUsMAov5G4KETyNFrgmLZh5P65KH1Awy8TTbrsTct4vy3brY",
  "key33": "2pEFNahkm7mcJbCe61gAzvrR7ZkTAoeiiqwhJ24fNUiD54mwEj9FpeeWw8gJv9FFG4Sncsr1SyE7W83tPVyQjmye",
  "key34": "Vbj4xbeRcoFeD6UAvQMCZcKiHnzFSwkY17889NSUGWNsGo6eKLJF8KM6XEjbgxUi241GpwEwioyg9GTgtxDsesK",
  "key35": "3H2TQqt3nJvvYeXutkTtThBdx3DC9mLyawjQcYhpdUpozyDENKJzePLy64DpLKDMGFBUR6jeGLNtrG7H2VQNAfDm",
  "key36": "3xUKRE9yPMgh2BjQ3i14sBJ6UhSidNkm2sTi4WHyqwyDdAzbgGdbRomyWff7G6rWBbeZZxiuMSntzjhFRbTMSfzG"
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
