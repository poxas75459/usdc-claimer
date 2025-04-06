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
    "3PaGR7WrdFzecG1VfXsPimDQh3np3r9qcKtToE8i67o1w65VmMScgHDDrWowmdYT2A6Lg6hVnbGtSuNY43uW7nLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2996voAwfG3eGffx9bHsDP13M2NC2KBF87H3rLGuV68SQywyJN7jfAN1BNqzhtSHs97KxBS4K8Aji64Tjmr88qeB",
  "key1": "5LVhzC6y1YWE929ueamVfgLC4dy9pwkdDENe2ngx3fNPToNxr7yyj8ESJ1sGN2ZVkH9xehBDdULVPpZWoP2rpqH9",
  "key2": "4LzwLNV2UVFC1cqQRgdZVb2aEipN5XceRa34h7p8uBrHJVVqt1DchHgYZ4Sc1bsxVU2uKzDTVcRKJtsRvW7EFEhz",
  "key3": "2NCLFm8XyqKQkvprhe4aBQRGVgHhPDUq7K78JPPwaQx35A9zyi6koyYUto8HdSBVyY8PPbmnjCkgXhjEnokUiUNr",
  "key4": "3SdmXudkpwgym3kYmNu5Y7c522uueGbPtqVfipav11HkDphFaRCP7JjAjfYEjoYwDvKFRxFc7DuvRtDf3yjHdUu2",
  "key5": "54LWidUgTh4koYZPs8Evie113otUGs9r6FK7NT2HSLnZJUcpQUGK4zr6HyJaBcPiv8q8hqBhm5vwZ3j8GL6PU1fp",
  "key6": "5aPczsUFToQQP98iftsutfKzxAwEqndMRpdgQT5LZ21tfCXyz2TgtxPfitKjSuQTBwDPaC3WHbP7Hw1Mkw2uZyY2",
  "key7": "CX9DQw82dem5ckzrMndAyRg9zFcc8b9zt5Hwys1bLqVp6wYxWQNnTrkjZesbtzCyhKDC2hyPWVCWidg2nYMugYf",
  "key8": "2Z9LgoEBsHna6i19XkkULMKGQL16PuuojJfFhq77EiKqxQVcRvkmz4bkgYH8LDGMm9moo1C3omgiFbHNtxgk9tVp",
  "key9": "5oE1DJzpsA7nBffcrX8oouxQiJpPUVLR247khqqke11aow1kRcwjtkAvC5iPKyVaRUj3NrGxmuGrwS86PFaD6uQg",
  "key10": "3aorU9vgDLER4XfAESKAhphNXTxu6nPSuGU9sfxExByVquFVAa6ji4SxF9snuc6D2gVKDiJzSztHhW4THM91Upvr",
  "key11": "3hDx4C6jgA4fnCqB36rx2pZTTi2vctrx9dSJxRipBNJTaunysQvayLUmnzEeFDrKRkd82s3pgdS67ZokGnL46TUD",
  "key12": "5MM6tTjxEEi82JQcsYYkGTpRWSk7dCDPGEfAzGbHisQaUVzuQaavJgdPbmGaZc4EpjwLvBLNhmTkzJGaVj6GmTKP",
  "key13": "5T9EZnxWHYwfZsQrbGo94Q9FJeGwA2CLEHaL8ibCwsSr8a6rKcD6EhXtEe718Qeihgxu1yxdkCWhDd7zcHoPsoJk",
  "key14": "3WXJxMwkFpLwWJuW9GKKNxoKbGZdAm8P9pKD96zRvbztdcbPnWE2tsuZdtAePkaT1GYbuZQj1SFQG2wXm9gWcg3n",
  "key15": "4okSu2RhbfkTWMVvWA8p3GKkxqgcNCc3RsDQFD3ERkzFp8LqQJUCcFjmJM15GnJTWuyKVmVCBCd5Mz65ZrR9NcMz",
  "key16": "2b1xUgd4v5vWnR3SRJ7BESRdJwL7hoGM1dzeCn4x5A8XxJKs96bpESS1YohJMd1HAhuEc7rUXvaBxapNsRmQx9n9",
  "key17": "3XY35JtgaN5FqKNwvWvwppLyJVR78zEATo4bKhN8aQzsUAntsRjNWSbTrcg2UEsdAJhoi32jZQHie6rxwHCLGXet",
  "key18": "CRoHunSUBjsWW5rsuTUjYvqFscwRQNuZgimov9JTb9pM2p1q1UUry3BzYxKwq6CEboFX1hMrAtYBz9NkUWsDHGU",
  "key19": "2x7gGgxGWCcLX49TUPKx6LjwqJA1HQABPZuHr3mUq45jtxapy58KiAyX5QvFk8AH9Gs4bVJgy56fVwQnThDDHJm9",
  "key20": "E81Yd7T1pUuCGZhhiwPzoNapd4yj1FZpLKJaZuGYjM568HncPAZTU6DRKiN8QbNrUTgxTVktRG2qpZbe8kZW15S",
  "key21": "s4wkDkifbRm6Mdh2NdmhkHUPssSNTJuDkAex1PMGtn2SA3aAcss77TPHSsXyzHMW6GHzDLwtpyZAgZoWopCgCGc",
  "key22": "bedf3p15U752p3hvquhMqqK6NDe6xp1dmzFmjkJtUSF891SxWA8DYxEsVSrrHBpGB7PQUCHERvZtVW5yP7vGCGp",
  "key23": "2sf4MedPQLX2CsJhxrx1JSLuBgvHS9Amr95gYrPs45AKs6Eczy6YyC1XgYvcqc78ac12F9R25R7JaEfXKAQqTJ5H",
  "key24": "3pd6yafmyXbZYfPQNqLiYHzyakASDRiVy3FEoasuazF3EXgwZwxh7TGKKJTZGn67Qnxz3JvW57NRUPbKi7fmvFxT",
  "key25": "JSNUJL5L8avgMSayFGxhbzXZVnTfGp3CAcAsVJ5XtkKViL9ZTeADpsgHhGcV62csUZQCnrx1ZQbFRS81vD88tDs",
  "key26": "5fG6PrjG1DeqWGcxZv8j3Jz3LX9Etdgrt9JSizyBLAVdJyw1NnRpnithHhgBNx3vD5ehysrEWrJMTtRAKeoh4Vk1",
  "key27": "4dfBGrBwoeoEFjVgnwfeb4nGJw191rWArA9WiNeURaW1irmQBYHdosVW9q3BhxHsMVntekda2jZptLsdu5LvhUrX",
  "key28": "5c1r1dPjBX8BEsQZJZB6LsoNkiztVqEiVwCUhQszafnBAHX6gCYrpaVKngvp3RiSekUmGqEa3qHC6bYGUyvF4U9Q",
  "key29": "3TMDpZETdF2WzPDhs1yZisA7yJDKizSny2EcwyjPjVYubWnXcpAYeHhrqQw2AK4twR4BsUVcdpphFNTyRh4xov3h",
  "key30": "2N63UryZhJrFtNTeiZo6W7AhdKtY7DdSwmAzFmSYp8wQN8JXECVumS9n9fpuihYQxbCjiBc14d3ejiBdmuXUbzPC",
  "key31": "3u8fp5jRKRyTfJYBTdMQvqCZMCtM62jVe2nUoiNe1kyeTSHdbtKmH72fQU94xmaKkvbjPNc19C7Y6foRUu7pMHq5",
  "key32": "2D7LUqFrkdARRDYL9YrBEn84YgGgjEkSaSVwxEAgtkf1DV8FrnNN3h5M8W467X8CPJSGcuJQdabN3NEKzeGj5RJP",
  "key33": "4VuBryFy4cMU54nLYmGQz2m6iRkTtF7WUwQ4cgq75jsw2Rxu2E19DPnPfSbVniHQ7k8n1cMBfJv17V8Fn9tGsfUJ",
  "key34": "4oUqLanSJ3oqGJtNWAjuMkyGvU5ByjEVJzQKAEZtDcXeWx1mixvakvYSCvBx8TMvhDGPfxstAgNYfdxdcuFwBwB6",
  "key35": "5D1zbgEPHNQpF9GQe4JU3kgumcaUKpHHWHWdo8fyk4U7Xta2Wohix7STeNjJnAJE9T2EwTfCYru3fF74Tj8pmnkM",
  "key36": "4NBW3LkkDUVApZ3o3bq5B68WiEJRtbLDGFk7j4cCC8ER4wfWmmjUuMy96waiMYZfeLHAmgXhrwaD5i3nL58ssN7b",
  "key37": "5YUpxGW3nxjEHgd3rf6jVGMzbP9Gg5nbncXjMgPUDAEdx7EApBQgQ2mjWHwgf5YdtmPp8nxFkUHMghx7hTM9XJtZ",
  "key38": "VQD6voakRqvV4DCTPXJTj8mqz31gr1uYreNUgv2zwrYK6wT4ycBjuDLXrhhKQbFuKGs1myWxY1mMrPK89o1eTbS",
  "key39": "3zjWyn3DvpzYxHeeBAhofxzRe6xvs4rnQR4BwVesyVsYcVvX5Nn7b3dyB4A5HEWk56Lf9F7nBqfU4YSDBgmZh866",
  "key40": "XBeRh4iRZK9dXukUUbjNExkTDt1eADVDRo6us1q9H6tbqdzqsCBopywXiqix8EPoac1CMuMStAMKvhnEyJAzacR",
  "key41": "23x3rFGBX5bgqMwfSsNjD92ALTwjoN5nxvF9k3Hx6AYr76n5AxkMq2AnRxVMjz911gJ9tL8nxUAY69aPgP1TsSSV",
  "key42": "5G1NsStgMZr5XBSEMUSJmLfEjdrPcAVRD38VrQZf98Cg9kxUos2bcfbqtb5ASM4MdcsYcCp7nfWznCrrqUX9je3S",
  "key43": "39tGewnrhbXu97jxDtGnv6TevNeTmGtzXe2gNquVJ9pXpjLyGd1ULT9iBNxfMo73hFXRFbt2gZMrnw8xmkKJB2HS",
  "key44": "2yB5YGLyyQZXNUxiHrujXdw9FGwxbrxdoPnW62DwMtUNc9fHqoevgVfLgRPTZMMt2HWti4yJrtJ5u3Zfu4mjcu3e",
  "key45": "5f6ebkeE5HK7EFAwKSr56SsJrzeDVhy95UBQcn3gLY6RLHgf1YLGEhf1CYp95DK1hsBKVUMs4zsMhTMTgSbzuF2A",
  "key46": "58mcNrSX9Qug2mtgvB8UjYqaQhWoyGqYA3zS1P4YmM45oXwh6DdJGmUpgQydtHvowbcuLYSxp27rJ9wpi1UPAMGL",
  "key47": "31KzYC2cSNDMcigVApanhrnR6E1uCn2kCC5KfodBp8ejDVKPjMeJkr8fa6BRb4kxPxwzwU26VqjiTUfQ7EijHdKz",
  "key48": "4XPTB5thXGt15wauLPpwFoJ4NcFq1UgiyaWVVkj5NtTxixGjEBHqXyosrViQbq9ZFtJaTrFAbTKqBnPcG6Rk4Mk"
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
