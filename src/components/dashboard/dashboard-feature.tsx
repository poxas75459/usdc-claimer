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
    "LegwJ8YsfYuzSRfKXKfUbXTUaezq2aVLzKfbxkyqszrpvrAQa72W8BMWy41gETwzLCoN9e5kPqYNfVM9VRYmLPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vcUqbdTy3E9WdbN1u2scLxa7RXz2Pj17SAjweaL4qVF6cdjcpbhedadhZ4Mbp2T7Cx1MZi3frAk9ZTynPjns8b3",
  "key1": "5fhuGbTE6j1G3ERrvYDqKx7Fdxvdjat7XT3rjpJRUHWttf1RzmDttrmGZ71obwjbFdMjSxqiycNfxQpp8qPtgxgj",
  "key2": "4KFJHAeX3MrNbDwm7aNEpPHKcYvoyYq8Ut4qEH9xgD4omkF6vvXXxydFmQ8kRbWge4PyevES9d6xJ4AJU6BZypQe",
  "key3": "mGxU7qH5ty2BpPHiDj1ugp92eVVVkn6ASdjXcTyPNpwxsyqaWT3ffQWKsZmSCDaMyxCMrmLPPirsZjZgMvDQrTe",
  "key4": "4SBdNV5BBfM6at74VC25AXp5RcnkzVENP4uh4rcoMQGxjLvrBt8N3PwDjuqKVW9uBQFVqiEcZVzAj1XrWw6tEYJc",
  "key5": "3aYzjJV4KW3uDJAjTRTHsCZyjt5hMMEijoENiehCcuxQ6tvHSN5xPpMZ65U7LFYAPhxJJfutbo76VtyWuA5oZ6AK",
  "key6": "3iFfdq8MoQDFCsMqdxcyoxBDFBL9TEwVkFUdv3R28pMN9smFGgXfgbWnwk2KgadmtoyAxXtHYhkqbJyqQRjjatF3",
  "key7": "5VWyFr1zdnsuYvao5gd7oMbzp2cNJLyuZeFDkzwALTSvJtbsQwtHaH2n3jvgjzrrz6EtTTSNYRGHUmyNuXe2yJfE",
  "key8": "3Rucu5Cssay6LzTggXhs9u9PiVU7VziNqCVKTh8mcvic4VEg6bY3Uc6SHwmYdq52Hw61yBTggKK4UiD6N8fHGoL",
  "key9": "5eFmD7z95AhUfWNiLPw5VtkpfzEQcXLTQUeWw23D5ZBKqpid3i63NEfHUJsRvPcKafCoDZgH7488jBfXbTSbN8To",
  "key10": "5o9BvDWweiTGxETWoytAfuhEUie91P3gFgnbXiJEnztXrpxFgNe8ok63tXQPTWWLmVo7vcnurEFLRkLxfYdRd765",
  "key11": "5XHGQnwsB2zLnAnNhFBKkGwbeyZoGYksZzu4Cp1vGWExJKqdW5BdfYmCTiPaMd8qUrPcvfQwNKYMHpULe2LsUpJM",
  "key12": "4j2pRpExN4Hq4BLjBnJg2jjaCJDo2VTPnbq1ycyia2SouA5Eq9y25vjJUTai4F7AUWcm6qnCzvfPpWrreWHXd2uN",
  "key13": "53nZ2MpPfbh7doiK35uySzLFQrvS9Rd3dXArsYvYJQDbwGFfrG6pciRVJrSmfMJxTrX2KEpSgyoiLCidm3aDzwo9",
  "key14": "3tuMpXzk3RKLHNef8rFt6qJeUDUUk5YhZ1h1Mnjizq5TTVCkwszHD4g6brSHf1CSNXT3UknWE8QUuGehadavSmDb",
  "key15": "3w429G8E5e8Tt5dsDu2AMU1MpfNfaPwEtdkXfYaT3qouck4cFXL4Wxp28wb7MJ811VP3Pi5fuXtRVEic7joYCT54",
  "key16": "64sCtdeJhja6bSHvzewRsCnL8RwcGHB3Yk56dBoyVK5KcgGiUTNP6SfPA8uE7uZYcaNzxbkp5BqaePetS9deuFf9",
  "key17": "4hSvt5PEtQYPEHmuZ8DDW4fvueDbiEKj5FQtXYbWCQNeUmPz7TkrYGXrYfSZhw4ufizmVzoPZgFGjx4DWxNHGGxQ",
  "key18": "3sNxSuVGn2syZ7pMSR2U9dDYvqP5UBn2pwM56bbPPwyCguD41i6aSFa9KznGhUXSjEx9WqLJsa7VjgyZDLf5d3J6",
  "key19": "1gR9ERDSdMwgpX9YMh38dpMAVBHm3BRCX7rk6kocfr2CL1EWVs9aBf7Bi2AmGvsSu3CBi5uvMykkiu1QqkZbbtY",
  "key20": "3YEGkx6xmjthSDxjbHj8CavZkWPoVDubyAVTcjx2eF8AFJ1Ta9vw2cToejaXwV8xNyYDWcC42YxvQWVFAwsqdSXh",
  "key21": "TpPsbXkFU9bDmkWqrx79oeWFo6ZuUwvhddZDw1E9vF2DLTHFnmSqd1iTSvGCa7tYjn6HHh8DMed5Ke3QPECpFuB",
  "key22": "4YcihFSfpLw2EMXW5AmQSKEGhNTMDBg3W3XnzbEGGFoutxsdboGRZ8SXLJCHuRenbqV3Um9PEP4vzFbRGQabLqqB",
  "key23": "5b6dbVKNwFTK8A8UuqBPH4p2CtDQXXX6KnDzx7LNHED258R4jcoubapbfLyboedaK1sDHRiD8LJa9kXxBcZTCueh",
  "key24": "dLooqfg2ogzs3wfjcnN6YYCfBSHj3CrxKRCCB1hXP85DJjTeKqaUjv6i3zb4vTCnTpkUw7VrmUwDZ1tQRakKTWz",
  "key25": "5qV5PB7p2mTQFj1EQB1V5k1NZXCNw3bBz1oBiHzzfuoiUGiribSejqBhDZP4VmeEZHEAZXCJxreQM2YgE8A19eoN",
  "key26": "3p4ceLPbC8Yw5T73PDTjAAx2qkoeXZSeBabweXUzuifKtUBFKzA4cncKHdu2448TrhxtAV76QjdZvFVwFxfiTZcH",
  "key27": "Pri8MgehmR2YcaTyHVchnRkFYiADqUbKrKS7CEXcZjCnCz9urMovBbnUDmzCHWg8yHpMNJggXuBfRQhwVswjud9",
  "key28": "4L9iJHamnAQE3ou44vSvBcQrpsoBLpcxny92w9ayftstHyCicbFaZjYSr7gEHNALQT91rT4qUB9XmbW87R8Fu2zL",
  "key29": "5wTqFKossumeEchPA1w915X9RgrZX73hcZ1UXmUT2LXNxeFCHAZ6HxjZG1TiupqBbZeU5WgG9x3MNLbbXQ1vsZMP",
  "key30": "2ZcYoYFdZB7Ccy88P5V5eFgW5CmTc8wgqTzjD2Kjg3D5ZFG9PopD2ZVQYc292uhR9oNSErFXrJEZMDRmEDQk4D8A",
  "key31": "33pQu9y9usvuGN7u3nLWVXs3ZPgtMZBjmaAXhVWHb4jnecEe6Nxr3GMH4zytMiGbEdY4Uf44P3yFKKtXfyKAmdHW",
  "key32": "24UbE55heFEHKNhb8UXnUGrzPQtFmE2Kc5HWWKdotHrmtN8avRypLNFq4VDvvYkpfGymRC79YKNX13HGvxB5RneV",
  "key33": "5Ls47ebd5qhBCBPB5HCxEYzgUBHE4C8ejDGwVWo7s6v3kyVfaLMvx4CyuXmR22oBGiDkbsav5KPBGwEGidnUqc1E",
  "key34": "2zFkimKNp886aLnJaCazdtXgSQgQeFqugcPvxqSFaXPgbPknbVRyu7queg9MQBzZXNMbfLE2h2ZYvK9kfqTcvhLR",
  "key35": "2mkf9ZGJ7EBZSYAfJdx9a8rPrFEvVvPLCYj9zJc268CRUyESVbZqYvs1iy4CaCpFKrt8GEh6fGndX1bKjvaARdrP",
  "key36": "2zsEtKTEfF7XrVNmQ6wVU7rMaBPDCh7TpuUdsFtK6Qprn14kaBpReSVXKTbji9Sav3ggo64CXTc9Qt3tFUKQ1kXe",
  "key37": "124dEG1Jf4LNckshUpuoGq2A1623ZJmR1WnjBNc63v51PxhTVWiLkyeaPSvsNaxLZoafQME6Q3PR3QCDhj1afLTG",
  "key38": "3e5T8vgFJcqSJsS6JQDLgTvvv5ZgmUfezUakqJoEtHZnksMNc2pb4ysjFrxPpmqQdH9NuFM6p2WQ1yhvsfee3tiT",
  "key39": "2wFGRnxYhCaUnHQruDN2A6wtke74eVnkXLGdmxoEfbbK1iam2DFYZ5YWWGahm21YxG86mZ4BsHRBuNXhkzkEfxnh",
  "key40": "5ufy9LshVsQUbeGVMX8FzXBucch53yQEFX85GokeLqo5iG4HCNVjg9wBWhwMCBs3GjW9Tu2AgzMmPZz2NgHZoeMP",
  "key41": "4NMaVw54FFer1E7s8W2aY6obdyYkUbcoMGschvNgVvYQq6PEefcphPPRmw6H3kQDFyXL67RnER4biar4cfScz9sz",
  "key42": "5ySMzvLZTvjtGRNT54vCsiJuBdAf9GyDFXBaRXgWSoqE9anizJskep3t3ghB75caEy3R1Zq6cAuwka2ravyL5QnM",
  "key43": "4q8PK8auWVhPKoha3gLWDyRQ6vEhbqdHFwfAKYMzzqqp3bY8LRByBwLx9bqsPtL44ui2Fwgy5zdMUP5xWUsS2eBE",
  "key44": "3xUrBN9RZg7p4gtxwH11TbaDa3WMifvdUWUeYKD41dmRJmkBR7sfaGhgsXDN17xkQKS33XtypM1nP17qzLpd5m6C",
  "key45": "3kNSuzjD6pa8Z8nK6tGAML6AmPdby5js39WG6zsAqYYMfNSd6SNT4g4Dxgx2V5xJXz1MfyWoW4vNa4U2VVejvzYq"
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
