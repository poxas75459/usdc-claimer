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
    "2cnZ1Rx8omYV8mPUHfpUeECeyvjNZBzBHp5Uf5Xef525JEZb1hPVun5aPe9V5freiWERrcqvGafNxAeCHWYGZmbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqPkfjePAqD23waVmVpXiNSy7B878MmTG3hDKiqh2utXf27AK549Arxi1cLmgEaWmZV36zHPk95XLSxD2hdY9XD",
  "key1": "64Z9wiyR3eoWfR39B3SRyCYHwEoPCMcZXkRP72zhK2JjBzqqi7Dvhe7UE1tq3NRbhGpW5wuYbmpaFFxP75tY65Rs",
  "key2": "37YGaouaBSTMdho2EfyA1rUoRUqvQvuM66JMC5ZDJQtLbLisuzS4s11bG3BQorjMJSGroVtp1YMRNRAYnat7wc5s",
  "key3": "5fkZvmhVKq7oHSAXLnuvi5k7KoDTAArG8twuRpVweo92AeQkDZ9TTKictD4JPfeJY2MSzU2fCxXMsJcznwHZTLqh",
  "key4": "4j63y38BWWXZD4EMyfkb14UiWNGA1SxQ6HjF5cswrChxmcPLh91zsS5FZZ7H854EdgqJHJRq9433mtzcGmaHzj1D",
  "key5": "5c1Fex7WVtMFLHdqysqUxLt7b6jnbUiEaNFoUPBZsZhuiFKQMrtKtzRbLdVk9An7V3L48jtGJZVCtg1h9mtj6NZo",
  "key6": "f1C2V1GyMp9EupL3yh8bgXUMUGpiUHonT9Mmfe7tseSmrTGX2SKC8HJej6mFUpfNhmheYZcVXW9W9zRHCAGjmDW",
  "key7": "3Fov5aZ5w5KzMziCqqUv5TLr8dJueupT38jiPUzyapF3XKi2WCx8SnGhW2peAT966uTLWG1BuwAmdoMAAojF39fX",
  "key8": "5jyG3MiokRd7Uo5WSnHtmXXt41KAb7zvZo3DSoqoT7YoNwtFg9sLdhqs6Ej3pFxFXU4E3tWiX2jM121vcVRDDmES",
  "key9": "21WgZSHUC27h1v4iJ1BLdsFNS6n325Rkha3XoAd7ru5VqTpGwnse8u9CpisFTuHgVoTGJoy3L6pDUgP9wMtn3QHd",
  "key10": "UkdAHFvvPwWrXYeBS9NZMEReS1LhRDFMcyEpFsvZykH3YmJcxZ2jbJTfYcn36sneopmNzw6k4R1gqEqgkUg4Fag",
  "key11": "3dHunRxXYG1CKFx3Ls5VZUcVGnPLe9ydB8PHkbtZ5htEtaXVe5FodJwjbPDf9h4gnN2nYGFa5uziEqEbEN1NHRvm",
  "key12": "3BkcoNjQbN3ziKmmSBTXZPTZMnkGtP4DNy6nV8pcehXUSZQ1yzpXiNDgqfpVJVcyZqAUf5qgKXqDsH4q9GT82Svo",
  "key13": "kyuvCLSWCwKz6MsyjRLipWG8s4C3VmsqAnuUqWyCKvvuQT9PAsjzusXzeYCUJJ8Kk2mcpT259M4gU7jg4oEKVHR",
  "key14": "5FgnEyLWWsyEPrCHiph93bL1cjasZjtvafbbCq285LC2A57TNWboXuaS8UrF4N1JcaECbrJoNFmMGgereZBvyYLw",
  "key15": "5DBAgHgLaEmPj2ZjC2ETK3jmZZgMTERD5i5kfCUNDuYHH2KR8PNDVy9jjzSaSLi15pdqyZBwUkPAcnhsrE8h727z",
  "key16": "2kaZp8wNrYTnNoPCK5M2ujqAjimFwBUp9HndkHRb2VevchECBSWECBdbsXXT6fvnhJHXXN1WNbxu89PvEJmGMRWC",
  "key17": "67ZtoqQDiMB6KVHDPeLonLZBYM2wm4X5sqbXguQ3mtkFUrm1p6sMkM1ba84LjB7CPymfdYFdKhDjG1w1DUrYvaQQ",
  "key18": "5x1HisAy9RH1KftvPaEQed8ASGxB2f7vZC7Nre5MdaEj7sU6Wed4RUq9zHExa122LuWz2AANE1zEjLg9ymzvz4po",
  "key19": "32tt26roYsJoUUxosZ8N1o8VHXREWV9kVdgwJZtTMW8UhCZwe3WWobk2kNvinB7uJr1PB7gu34q2kmxnWmeZ82e2",
  "key20": "Qj97eDZCRLNXT4XNtVZc6fcBPPJUCnoy8LHEuksdc9Uo8LHfdB9cpQSem1wEcPEQxMbJMP1MnurAMDKCMECUShE",
  "key21": "5BzCaXbBE6b6UsRUkUJwqiUH6jSVSRVmM6U9Fz4m94tSwLZHHjqmGMsnHPj8mLZ7EhqXqDNxvFSE4G4K6DJcspwj",
  "key22": "fTpVQYTv8KXxvz1fgfWTEKjxcka7zuESScQrgYgzzy5T3zFBYH7WUFrXerasz47hP3hbQsnMVmc3GX9gYvsN619",
  "key23": "2HZtqUfY8cyWjSCw4RC61yUcntz1KGAxDpsDe6kzioLQqJJG9fXBDJH2tYAzHn1419qgXzHaMD3vnWD57sT7vy5x",
  "key24": "3CYKBKUHaZj8PXQ764YzMgxnwQ2Ht9LvHUwLpE87UKiSxv7PR48zUWxzD3oh6HmocNor7fM8U4thrrxtt2WpwnFi",
  "key25": "QmVvvuMZqCWB15naQbY55muBxCa9zoQrsq5bJtdRSqPSdeKFMJDkjB2YvCqRpbsMT4fd71KDZoTqBSJiuFQL77k",
  "key26": "5aMqWAfesRaRzRe1iBg543UReTgSjeVBWgtTptaYASbh9sdowba7GihupwJyQ576UNgzq2qActCGCQwGFNtDpEpS",
  "key27": "2oehauqsmEgzMGwgR9UVFyeqpu8fHivvnaDs8FpXMjReD1bnczw5fbzqMNgX5HwFBBgF8xZkBriMGfEVVorj6t4f",
  "key28": "2yF8yjoQhu89vFnAe3F3H8JWK2HPnX8JCyLvDAgEFxwPAEmxjSTgVec7Ys1gMFoosiFmxHgkV7R55H96QznUMpXj",
  "key29": "4TtfC756kEd7bd2a2nwsGLntg1A1TDpDWcgUDwWcF9orDLVBpohtSYMXPvmAXrGJc99GiGhb7BgfLM91GRoCjR6D",
  "key30": "5sUaQPakGBrd7Kt8DvHBmhUe6yLHWBXX6zEV91CfRuj3UkRTvuFLNsrxU2DsDPGBLi8UaxgqcyoPv8vZX4iiJxww",
  "key31": "5NJxT8KCBUebYj8iyeggYagpNDUmQFkFH86pEbik1hioBBPfcpymWrt6H6grMtdVVSzJ21xMWNW5BkXVemHUchY",
  "key32": "4xMrHNewbuEBioSfmokmLTv8uZbfzEU6Ht1LdZ1twFU9hPCS1GvYmXiNL6YfsTtzx3WmWha5UR5D5W1LFtDk6Sdz",
  "key33": "pFR9twha1criUAiDyxSPGe4e2WY4sCnd242Sr4EJZng2CZUUacPVfPoazFd3LqjRYUGxDkUhVQjeVWnteHt7pUQ",
  "key34": "cpxykEE38qhfAt3uYgfZMnscfp3CJ2TyXFjxMV6Wb2hvvmJoLChbedsf3RVyTVrL2cRyj8fsZRau58L8YerhsRA",
  "key35": "oaebzGEdW1mFeknJmKJBctrewkBcJvG1PAcMeUjinhx4vnSg81orCjDuV5TL6LfLy3VUTNVJXVkFnqrvuBYZnpP",
  "key36": "2UpYHomN4D15jrV1piMij5fPAgWgaVEGr9XRa99LgzF3k9YniMaiMoYAU49Dy5Vh2u8JgPdBrJZYxMV2ee1PhRf",
  "key37": "YybzKjkPBFARpgqP6DgWNEqX8MLYVwuRuG4XbARFXRiT3wgZZpp91ymXS5kjALr4GTjnbm6MtpUQLKBrT9o8N52",
  "key38": "3feaeSgDiM825y784uPEU2vT69h3tzBSP9QpGTWEikTVWM85M19Hd4Qvtj6zzx1zbZLR1hDob4a6Q2G1Q55vnGXt",
  "key39": "37tYtGAjWUFdoaFzLJyrQ9oTjFMMAKY3vtomyah6zyLiojAn8W9VpL7MFArhpWyZxYbVTWTGk9cPfVNM799KLPEN",
  "key40": "3tBTKNKbebLcWMTKb8qbJQHDzZt7UGYdFsmcZykeXH5sqzKLgjdQr28qx5R9pqQhJwJrcPGNXSWvHEUfQnYqGaE3",
  "key41": "2KWchGnoPuSCX8pP9FRcpun6gms91ncKQPoBijFTq4Pk9keHUvjJBsd5GcwvyqUxSXC79FnpFtYTEJV1kwrAYjVV",
  "key42": "2xbLvii15PeMV5rn9Hbs5q5xRjyNo2cjM65UTatGxBKnai1Zs9L3YubkTkKgUbV61JrW6eJ1BTMYZV7yTERtU1hb",
  "key43": "3n6c29Eq5ec7FTeibYrvrxFYEMAfTRsSAw1x6HAvV4dvx5JETSj4352GBWXTGpo6t4tvregsDxXftcNVa5KUiNnJ",
  "key44": "4F6vwHurnHiHEHovC7C1kj5exVgywskB9ppb8zv3xbhKeZwDtWs1C2oee98scqYrMjoM4HZAYm93tKnw4SD9NagA"
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
