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
    "g8vyPq8tUEqBk7mBQ4gtykpd2M77fXK6aw88wUcddQxfdyoXcgjwAkoj2YuYYiVGDRrzubafo7nBfDufuHE1DHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMHgr9jxYC7aS6ym3M7FCituSAKFTytV7DwdToTzBkGmFR1tZXe9DmgwddBN17jTSDnKZJ6CxiB5DSGxyiwj65z",
  "key1": "2DaExfah6rMtiyMQfTSYW2deqFmbioN1tJKTPqscajhgp5tfAWez56XXrSrHwxQJ9b8tM6Zqz2DRyDRDwB921XX9",
  "key2": "4e6WRMus4gkQj217dFNrZqTfU38qa2kXYGc4FphWMdkdQq7kjwhjHE9Mz6k89mF6oGSwk4eUBL5LfyRKHWtJVzq",
  "key3": "2o5tfxSWvgpfjCwCkQ81wcWjU4geQyce1AYmpMYAax3NYwYDuQnn46e2P1vDrqvBby3WXkBf3J9UF6NX1T6u92PA",
  "key4": "2kdcPhJfFCEciDT64adEEbccBCGhGfZtLHz4kQCzSHehahAGEBgjCJRjbM1rLWawhuHvkGVMs6Tijizw4BP6d36Z",
  "key5": "4oRWziZepUzzvCZZ8i7Wu7u1XzeHncrCu46UP7vpNTyQ8m1ipFt5TFX6QoRZY3AuAiewAKCfytGQ5iLUMPBAGuHi",
  "key6": "2AmTcsZHkS96PPoHspux3XH4bReLdJQXh7bCtVU3pAm8Xt5n8gcQ2fir6bjSEWgdnJYeaZeqVDbBAUzN5qduGghM",
  "key7": "JLdBL5d1Q6Lop1mTMe6Ym9Np18cK4EkikE3E2b28FmBJpcJ5obfB9CjhmDJE2RqWYbUPaNGQFyAZwGcUbZXwfCS",
  "key8": "3n5aq5oFC4LWQuNFzBwShgdewup2vdpswbuZjksTBDikykjNHC52zrGRvfscnE1iWdNJHpeUoJVYmvSEQZq7y24q",
  "key9": "4dmPj6Wm6bDZwLt1sVsoQs2oqFSSK1xRujHX6tjjDq8Qc7dtk91tkjARGhxySiRTUGgvtTAY5utSFm5mViqPfdtt",
  "key10": "2f5Vf2VxH6HX6AKrNynsVYqLk5dDN6PLHqfZih6KWBjR9dGZz96voWPE21i6mneYAyzDPVzLTausYfua5kQJ8jwH",
  "key11": "SUmfxBPFAjUgbwXDPqdLgyoN7PayoYhcX9sSRMVbhTQyqEyyMgEbZwioqnqRA2aXyNDLuqDHofp1kNo9EMugz9J",
  "key12": "3dTnC7tfabpk3yXdJEdNR28kXAqQznHkp6L82oYhAzQax3M7PhcUgLyEw5D1UikdA22DFmnLArmADxDnVtc4TLJZ",
  "key13": "4BbPGwE6j4sbSU6XTd1mdsodkyhEeiGVcpf85YqLepbFaAa8Hp6Wvvc3obL5jKPnF47rSiK5YCBvTgCiDKXrKcdF",
  "key14": "2WNQB2kuaghovoskn8AwiBVRGz6vSDP5b8a89s6c3PMFKe4vwotzB9agBHAxgWe3RpvWcBUd8JDuen79sYCn7yPe",
  "key15": "38N52LzEvNnNcrTY3zi5xpBfApyszmGGYQjzc2sZrgMCRnhCKLfPoTNN6GDKkD5YkyFHua5wdYBnFKqJvbfEMenC",
  "key16": "2DpJoZPwWSC4h4Ljg6zVW56Hd4rRXC5yvEcEnNXG3Uz4mD1PfEA8urMuLqePtAJWWrNGckcwueWXRGDP28YwfUBM",
  "key17": "5iyEeGXzZjVtuKTY3ra7VHKZLnSYX4xPjgVeio4gWhhLv6oWbvhDUashoibCQvhwHJdxsDTcJxWS1K522KLFHkws",
  "key18": "3YKCZG1X2MoVg5XpbdevRgK6j7fk3dBLNWiGmX212pLMJjH5J1XU64hXqPXyWWZqPQE941VUJQ66YXoWfxJVsfSP",
  "key19": "5AJNbxr48t2EwTEVcKt8yhv9RNua7aEc4jGrhHWtnTVT5imXhsJzsxSWNg1qpwgZ7Lm2jJMYEmkoStkuwLhF9rDW",
  "key20": "54wSEiVzta5eFCvTeCmkjLE78KL7CacfZ3HveeMiBdj9ModWpcD3LEy5be8dtGEiCHZorfVywu2c8KNV5j69AKBH",
  "key21": "25345YiGUimDzyz5XHKQuyV5DJodGxZ1EeSoeknoC3RwTTGTBergsDx79zdArC6Wudq7NyEcMykWqpxVEQaVeidT",
  "key22": "3ESkEWKSHy1gfWHYMtDh1Ha93y2vUdPa3RNjww9H9EzwJwi1f1hU3TURiNLp3BKRwvS4ACgA5xj3tWgFHpVdGnKK",
  "key23": "4d6JRGgRrkkqxHDJuQwD8SQzssCtiJqvhb7FnKbQTdQg6ALrdD3E84BE188cxMbs5eMmigxsxTXbaaG3mr8wgWVB",
  "key24": "h5dYTnJ2qSaTqpTmKtf8mpf4bC98AGUiaNn5JCZfqKYSD7Myor62vitVsdfPbE1iwVtNr1eak1gL3GwnrzC1sQi",
  "key25": "353y3FkoHNLfiiWmitQWL34dHYw3cUTkGq8nPE8haNu1pcgBiT79SgiHSHRhfXcANc2guKwa8X1VJVDRjUNihhzk",
  "key26": "3gZftctbhUwxBJ6AfvLqaVfBZG8Zx1M9YmVnLXjUinKyv5EU6rrSRU8KyWjPTDooTPQV7u2Vtdcigk5uVURM4JKk",
  "key27": "2n9QxT5ybvsN7Dxv9CretwqC82gicYMwiF64jANgp6whjA6bsYa4Zf5PJ7FffwvJKePxcRRyyb6oB3E8UV1NW6ox",
  "key28": "2frLUDFjSK5PLQ3P33Tn389HNx4y8tBknDg5W9wt8oM5Zvaw9RJWMmbfniSbQoD9xTn3NQHpPN2aFZRwBa51sJzz",
  "key29": "466x94LXSUDnwyfuXuHGUyEgFBbMQJ9SnfgsyoFqbpWGKPMscNJB3AKjpHC3KjPZ7QPAL2iHvtLaZ1yrcFrQKznY",
  "key30": "YtfSdzJxEg7JrvVkFhA8nw51tJ3iTTppzLDhGPJkArW5gbbEaonnfCM8U27CTt3BHZVjjh3DyVGwRnereU8p7UV",
  "key31": "2dZ5paJTRDtT7qzxDYHEWa2ku7CPDVxfyFqcTKJcmj964veZ89XovCMK4dwsKjSCoUVjsCZDpBTSg49UdQDpJGaZ",
  "key32": "2hx4dbFVT5D6KyReER4guLPzHTmRuby3Q56xk7HDvEDyspV9wrZaB3bJ7caYDZvhUezaBHAtADexxmYL1EA1CNHp",
  "key33": "XzFLr5k4A98o3yGP6dTR9W4a4XvVD5iybnZSMeDxWaZQpco1FQKHZTapqMA3fK9ScgmfMTbvUDHzi4v1rUW3MJ3",
  "key34": "59Dq5d8EhrUMoEM8srGe3Mp6jWvYHVDtAwbE3Kn7qsUi7QJPeWvfhPzFuF2RfdP9VQ3xcL1cCcNhQ5p2uPEcZqAi",
  "key35": "4qvUsuMt1SJmgJa4H2Uaa72A1qigMvikF9h52z3reHDgzqLBooRLZjWH1pBZCEbJrNYeE8qvX1Vyowep6YHjSTNG",
  "key36": "4vSwZkSJGk1uZZab1jnRoEfYgWCnFvqd1EZSph3UfaDmmNPiK9MXq6pMty2gUE3x6yrL3frZkGtWF4HfwXjn11tB",
  "key37": "3VV4jAnzwzGUzwYcoA652FHMzv4PFZirUBpTv2sKMxRLaQffEu843sPeD8bGfVSYUbU94xADmRdmNbXCiX7mypzN",
  "key38": "2yBDFqH5XGjdBN3wWMS1M2HaJQb4fukHoh8NNVrPpuvkCfFg3FSbepk9Cz1WevnAqyJjWEeq4r5idVbkVtSTDfHd",
  "key39": "xCmf3wKi72bG93FAwKH7q1fhEfWnvVetkv6RHfd1Wosc74gwR2dWnRZDG5YGrrBp1BrVXMJo2Vne67b6H9VpcRe",
  "key40": "5ddPAJGmbp6uCmsBqy8sdFAD9GTe3JmGMFwYRn7ond67M5Lpua1MCyJPy7VGtF7k7aF1myh1PCMv175NXDjfLdi5",
  "key41": "hjYC7ovXmK9EocAhqGQ5sPyjS1ZdXaXpCQLBSDQ4uQZb5cwWkM2U4g51NSFtHsoj81mkU7SDw5454ZiULAMCbnp",
  "key42": "2D4ZAY2Dxtwtd7wuKwTuZo8oCjf15c5V3Zc1AwMbmH4kAfxiZSM9pSzVknEyqnALbGLANXoyoFXz2yDYSFH6k45L",
  "key43": "5o6ZTRcUCe6LnmjAUbVgUWGLaVG1tvrmrpUSsNfnmWCc9MWSxyihUeBiX8jdiSBKfx2k7R8bDimnQeuMFNSipA26",
  "key44": "5gMVUnBcFsvLSzT4M4ZaQoEdxWUx32i1vzrKo8SBUiwREkNRmJPKxwLzkDQqueQRAUFvtUzH1di3FCXfLHV4wkKP",
  "key45": "5KwTPSkzW97komimD1FteALCTQCXfZ1EpxmQct7YEsC7Cj3J9CpECo6TV4vKZTdpXmojeXzVvA2zLBpQxEwQVnwF"
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
