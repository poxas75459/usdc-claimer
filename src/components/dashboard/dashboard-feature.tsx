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
    "5wasAwQvWJgquB8G4t4FZsTfvHA6rcAJU9xDtzRnW7xKkHgtCFJbys47RkQtG82oNuGB5uK3kbiA7CY8yvgYbrXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fs1ASBsVeU9vpfBweXC35bgpu9zDUQHvXDUqBXNonZGw84wopPjuv6p4bFRBuYeptURxdyrbyrAV2z2Ayqe36Go",
  "key1": "4tSkmzNfRuTvfKAGLG4G99Y3sN4eSxDFJMivUKkot5drKx3yNRgzrMgnqdmLGA5mVqLmzQwRVzUfgaukWDmCSvP9",
  "key2": "4hGL3BemFSfySvBfJxfTttCLwUjbzxFcFC1Z4gkChA2R9yBSWy4ec4w4iTGoQrTL5vLFAGkGVbQ8Ty1MYJRW3nfR",
  "key3": "26PBxJfo78UxJHYXSt5m67BHmgALpbd7FSZTKHkVheEeVp2q4xMfL7XMmYK74eEhCGhveEsBLsYx3F9XXaszpH5K",
  "key4": "ha48q38GawyKjrpCbBe6ksdswrXveStyzbzo7FtvJFDcrN7VBzSYCjbPp8GH8XxHqASVNrsjFPJxYnmUr9fE9C5",
  "key5": "5QBG1gtdGZCZhwYoUdXvkUv7hVCwSHjzpXxYDJRkYj3S4PaffE8vLQ7bnpyEYip6jWWii5a31fNYXo2gnkErDveW",
  "key6": "2wZcm4AjFPZ4SydwZESVQFN7SEjzRLbuHD7gtLaW4ZREzBfuYxDRrKVM3Wu9Mwr2ZCB1A7UCyfRP2MF9RGJ4H4Nv",
  "key7": "5BRsuQuh6yaq7etNgpQToqSSZgzzBNqy5jdUb4okYmQ9trJ8Ph4aAavsxUiG29dVavvLN661XK6mYXwydTv1PQvE",
  "key8": "xSUTg4AHwMZoFbPVVNc7cZzACpTssnBQpQidr8AawteWmaSRq77xhFXwkzN1CVoJ9yvSUuFwJog98xLXrBnbySG",
  "key9": "5nMvJbVx5fwNLXuUPnU4L6b28rtyZW6oxgDuUUuhu8BvGSVHtKNFbKep5iDamKXtHwtqhtoJaRV7w2barGYgm7G1",
  "key10": "247Yiz2KH4VSFNZRV9rWnWxUzvTr4fzBB7CvrziHqF6D9dtn5dej3otsvSr96iGzWdKwDsxhNV3dv7faMkctP7ha",
  "key11": "2Xcw9AK433dHyLELNYM52eXorh1qwX2kFZDQVPdiV9wFypM6osJpMUep233tz2rKaKsPcUeDWdWnLjGDznaJAaxn",
  "key12": "4dKYHbWeysQWb96BzNygayCDsQE2oSGrZR4ind7BmFAQVMjS17A1DJ2EHJNa3SuEYKW5mjUoqkkKyLdaEoWc2Dbw",
  "key13": "spNKbRwLemphG2ZNAWPkwXe2mo1YKyxj56AY2gHpZikAaf7cLKpiLTDwRUQUaPBbLcerUDgiymjNgSjwmnDmPGA",
  "key14": "4qzdemn2FnZaxFrW8ZwnTJLpNFczDKHnGytcHNDbiRYRafQtZ39KdVFLuV1rRwC2VDFNWhN5kD7pNV4H2X7gDo97",
  "key15": "3AmWWxFsUdp8ZxkCKudanxAfneJRcKEn6Qx1GsKemxNgBHeLerHFTkZRJ9bGoFd8nvvRPyuZuFNVkz8mfKzXzzZq",
  "key16": "5V5xqdZGda6sqcUJHDwZPXrrHZZCd1sJBydsc9Fgy8PXgeEvQA7FP8XPm13XyBjR4bAajaFgzsxwAqXPaKS3C6CU",
  "key17": "2PdxmRFmjkqXYZL2P5QGPUAQ92TvVE5tmttaj1THgyLNs9DsTVTab93ewRXpXPsQzVsC5ao6aiBqb6hPfaFQhY3k",
  "key18": "5ms1rSmeHNvmUHNtaNudbPmWT9RMwGhyWQC6ApWjvFmNrQnViiXfoXmvzZixUVrtu8gVJpP8MMS5TAfFRMyQHwbx",
  "key19": "24RDffCDHXBXfrvaS3bhJphQM4KTrhMqGuqoW1RtJDxQcrH9vsYwE8g2kQA1KARphcj2EjUHDAcew2igYa8pfM35",
  "key20": "kJC24ZWDBaszo7HwwtUeCZ3vzqsfneQa9v6aZtuXxFfFVgGyG5ebmoWcZ5QmQtv4XwbEgNo44VLmG4r6v5tcfAv",
  "key21": "5uPa3y59AGpwJQswiAAKGNG1HdifuY7cvsowX6kX92czDDef168MvJakzLDLd8bzANKhrvLW7Ps9qbTWwnkXSf9g",
  "key22": "2Zqx82pC1vZQad4PZosk5aiRx7ahS95XBmfUr7CP8qwooKHgxq6fX7vbkJWttsNPo7SSuy7TETuaDyXhyPqWks8y",
  "key23": "4TpyZNtL5Yj29YVpGPiRwWzM27mgHZ5P4KMkvGvYwMa4xfVnc8yzxxLx3iPtuJHreqmAwkRmZhAHdbFGG61NmPTE",
  "key24": "27iqgBE3K83rbxWuRNbVourGeUCaPtMfttmyhY1KW34aJHGMQkpxK59evK4XQ27ChKKwhptBEEz4eZ9eVLdp65Zq",
  "key25": "Eoi9fDfVYVaQdANpRCgE4uapRHLYk5cBCLTeNDFHGGgUjkqYHvHm8rw6N3gQmB7jshpdgUkpyyCgiWnEMMNVDxr",
  "key26": "5N8ue68SpyahAU8dxiP6rmEfFHBL7fGj5mLoD5q8iakCGg7B6ASqxvLfAUTpnechXne4MjDTeJGCy1Gd5zjnGX9K",
  "key27": "64fqmYtGRpGU79U2rZYW8YExHqQ3drHgMGnptBV4TpDe7g9jF5EBkPyiD6t7PLQ66x9rVqiRZKCUopTky95iYt8J",
  "key28": "55umFLtLRtrKqFH2K1W8m22nR9avGZZsHq3Y6nqnYwTc4qF1mg3W3dvajScBpVviJLxGngfW7knrwJebY2EHBfBE",
  "key29": "4Lxv7kk8HzcNfrti6nUs5tpgcLDnfAvSmmuZF6mX3P9JJDFPheHHio4vGeCbNLEbX4YmV2mGuWDUkkyewhgenmHM",
  "key30": "25x5HMNWcXzmViLYvzL7jWtC7iVy5s3B4oWjAtWAv1rkEAS13DJa2WAXLTK9JePartfEKinjqYZri6zqXye9UBfA",
  "key31": "3oeiU7xhvmJyop7NgbNbeYNUM1zsBzvRaGiAghnpa5nW8rVdkn4dJVx6o5j4bLxGZ5apBGkbFQhuxBuGTmfKBE8D",
  "key32": "2Q7cMbFokqyrY7CkZ4U8eahh8hkkY6CTE2eR4mCJtAtuc82H394nf7CPVMeKzQdt1YrJp3t3UgbF9BvfoVPUtSfP",
  "key33": "2BcPvBNHBVWdhbKMidnetLKYekZQ2B5cbYa2b9LGk2rLu4i66hLLwB2Noac9G9WkkMQzvboCQaJq7CQpkp16ouU",
  "key34": "4F7taCAoMuFdADYJpcUofaCFfJsJkte6AKK36sKaQV5SNtB4MY6eYQH46BtBNdEaLmpJQBur65NxAemMo5iVrZL7",
  "key35": "2UnkZFQXGQgQNZ4wg7gzMqgqVZLRA4x5cYuNxuPdUB9UzmuDTq49uRtwmrx9QH1y4bboELwn7MHvnfPxvs7r3V4B",
  "key36": "5M5EK7DR6yn1Y5nxY54wvt9UtZvr5sTvsfcAquoCaJoMrg6KUsuLxaeSAnA1Cnn2KfkR1Mo7Ja5a2McGNC3heSRF",
  "key37": "51QxUrhWzGkubiDTd4wCygX4bDrRJnLrRzLNuuC2t64s7ziUYgap9f6HV4MGgu1VE2iG4zhB7THTXHGGgDRvqbop",
  "key38": "5xhs4PkFE51q4BAefgYLnkaA5kd76uxfcBXwqR4gsRn74NRwpRZ74nxh2xWjfPJBx8CeMJ9fZnLYirnmwUAwfGkW",
  "key39": "3j23rsbEkgT5T1cr65PG32ktvRyahGDoj5Vf5jyhTArC5pVdcHcuuDXjw1V2wxq1zpYvwnfuFSU3hkYb9uMC3ufD",
  "key40": "5pGGG4bsTNuDUDY48B6EPg6HCf7zNT9NnSMR2AK8tdATxpaDU6Nib8oVZKXMRY7yZsJCt1Yjfk64yXqfyypdVpgb",
  "key41": "4T7Q8mzynpUfJyhBNC7Qz8VdpDVAk2zxRKV8tvnbVuqzH8hGA5CMKfiHHUR1XKYwrgxuhocgWdzjzr5kidTSv1k4",
  "key42": "5xEPgLuW248rWa3DxNgcJgZ4EvCrp8MkwggJXx1R5Rqk2FvzW1zFQAuqCEbT5VSHMzRQpiDnJiDmUowHQ6UVdRf4",
  "key43": "59jmtEuE2eSKVLaHrJfmudWqFov6XFyMzxWPtEy8GCrAF4bBKMpp28rUQ4FCnUD8zJGHt4oqhc5Nh1mtwU4XXHWw",
  "key44": "22RbwYQTjPEewJC8vVLa2EssBAeyU7t7rmkDozHuT8nfCNF1iq821hf2j29WoVHQEKnq8oyT9zMYgHXT67ekVCVq",
  "key45": "58u3dmwJpn9qNafYWhYkFHPGzZpimrjwVF7hZ9NUtkqRKz9iS9RheJyLod1YyoMRewvV8WBMiic3ABnP9MMAtvu5",
  "key46": "3uktWT1ZK3XmFWpDyVcKCgKtVc7W8MmPdfjxhjLm1KhGaewoL4UevTtZ4Kg8eL3QSFTmqfPitAC1xpa3LvES8nta",
  "key47": "4ASNTMgZn9PJ78BXnCWMMNvw7RVy7w83wz2h557EMaccQGdh3n6JGMSVy21rcPBY1XHSKnCyERadjxKyKxXNUCxi",
  "key48": "5VTAG5E16NrwHaX6LM6N3L8bB67pWpXd6yYKeGfyeXJFGL4jQDnA17bPJx4cTsbQvhXnu4L8TdkZdCXiQKWKd4EK"
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
