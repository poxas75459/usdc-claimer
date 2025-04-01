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
    "5zo5e1Z9GKZ6g7XPHqRJKsacJAyffjuAN8ne59C3XnuGKZyFL5n35S9aBhfAzb2eBKwWLJXuCrs29JtAq962qTXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rDXRUcFugiFYmeDdBsuYSdgAkbLd3tja7J8ZowmAT7hBUdFZxpyuRxENtp2urL4TWBJnQiWmncuMQMfWwkjLs23",
  "key1": "4miEYh8RnbmhzFHp766myJbnrpVxWvbWkuWmrQhE4hBq8dnh3THRhfaNjd62WqxYxWGzP29BzJezdoQt1hZQmark",
  "key2": "aPZLTJjtX1iumHaC4UBNpn1JvycgQAob78pe3axq3HdUKv7v8dZexgnteSyf8VWjL43HWcPSNAgAtVJYEMgqnf2",
  "key3": "5tMzrDqjTsVZAaBEcHAx9Bc7LM5cDCEHJq8c6ia2NwYpQ77wfwJjt6sugKGEtcHRNsjHMJCzDjK7pesKCGKo5TdT",
  "key4": "2Eqj9ZHmqqug8RsL99MEH61LhPqENUR9XYSCJ6RJvU5efE6Ew9JsQ21SC9syE65QFT8JWCURsPErWPa8NSi6FVfc",
  "key5": "3QwGRPMbMvRic3g6N7mHJEYYNiq5ziXEfw9Apdz4qSPRPFbUU31FWHKqVp87hM2F3regsdyjQ1zvVgredSCKe2yd",
  "key6": "2vZCju7tR7K2HX6z9pxZWs7UFmjfxZSDZs4BwzoS6L5i4mp6ZRLS9udy9nSNHdaN5STcG3xQsdRnfEiozPAbohk6",
  "key7": "3Rs7VY65cpAYgvhPhtcbuifPSofMT38kYbvBdGBzuXFm1311pPr7xai4YBtoqxcHEkFkHJZvErSDATzjcnsKbmBk",
  "key8": "53bxs81UzpVG6KSmZ5TxrEPxCAnAFpaSi9v4rwxxvtoXLayG3y23hGo7rkkiMPQ25eMcLRG42rzkevbHPYLHt6hk",
  "key9": "4cNNr3R8ouc9htqB4xnWvBMmxTdUDV2o8bp6ZcMBSKtF6oq1P7t2dUHaV4bVYEUoaXS1G1G3UjZxhiqedrZ14kC3",
  "key10": "fWFCdZ8oqUy7eFBpuAmjvvUdES9cvZk7tgvUALmLBSHoPAiu4CZj8PoSj7otejekYJxSyYoniNvjZjkNqXuzNBV",
  "key11": "323QuG41qTBrTGGU5a1SNED32z19JgTbUjXB1p4FJvcdejgYAzvFVUrM3XBEQWx2uxTnMAMGnuj34YgnMoRDbGzy",
  "key12": "5YVntqHkJLEJVJsGDspZ9KiPwXEBtDyyrehucHDEdVQ9u3WErYRx9rnoSv7GnfWHBCksYFxFoVDPgPwfyNY28TRF",
  "key13": "65StXVtWEXaJ4R2TugjTJpVW8YyGRMyhovJpgBhV4pox1wnokSFqpNXcnoQUSoGaiURKdaF3MPKBcQciu1NYwG9Y",
  "key14": "RdJYj9eotArELrEPfbkhGHtdrPyS1jJaphkDoB7XtXhU3yqgA9mswva8DP3BNEC2rTPngESCvhDXcBSS9mTFYF5",
  "key15": "5bRW4scvBJAYWsXJx96tEM9Zb5Y1DHLE2JnorTxsSUTXgM5m3SmC5soZiXKcS7PXAwmeQG59Aom4UWmRZ3oQf9mX",
  "key16": "2bVmjZboBpb3Cgf5hGXV5N7qvef9wNcHkE4QDRRVzewzdcmJTAaWYVxDyAiDujhPmUPFDp6nLAH6eDEkhcQUyTUu",
  "key17": "4ZyWjHmXj162YYwzYiBvZHdNBcuZQ7rXYtHBWDUNz8dFqQcd7TPuL7xtZrqCtpJmXs62kvFKZjFK23SkeDR38GGk",
  "key18": "4GHB3z2vTUFr2Ck4VcsEYsJu4Zxwrbz3WrCkZUcrRDB4PSLEqQCN1mQ4RHaVfjEfZDKCWukniP8pNYrwFc879QeT",
  "key19": "3X6bw8Mh1rzPGqwAjgNmDUPYuohYAq8VnkQRw3PLE3JqgzjNrNY86Fgt6JDE7Uzr1sbDSfqYsiASTnxqiFqzgfpj",
  "key20": "2zuHJDCxAvR3SuduQpj25Yk23DnMYZf4MeLcKYuWjKhSB4N574zBEJjHv2HMc1cgaPNnPWQKX7fjQs9UpxEcGzTN",
  "key21": "5LpBFpD3WUuZmrK85dCox2Mdr3rExBdnDMPXSp4xuruP7EExTMAUgm64U6epqoptCuEn1LMxWReKCURknYaJZypq",
  "key22": "3cNryoBTrX3EeETxuUAYHKHPYHbkdKUDh6osQcYoJXn4rGawBmCa1fz5Rv7Ya3xqFs7DiuHRviiQ8Th4ZPUtdv45",
  "key23": "2kEjKCkG4hunAv3td8xUvjVxyQS8n8PS8rNp18orQxZVD6aMBUJT4wWVivTP2n5E3ENQfCvCYx52tCThMh8eV3Ln",
  "key24": "buqaBWjk7Dtg3BSiGLVULXpHS7tVsy1hMtofxna8wHnXmRxxNkm9okXmohrr3pGzyuJuisdw6rpksxFDpSviQXd",
  "key25": "NgEcsd7HjhtQermocTbVFcnCkMHp9NVjUePctSGusGcEdYR1VCndfczuD6xGQuF8neBo68KVRygMTsYW2Xmm1Ef",
  "key26": "4phTrBgwtdLRDmpLt9yCRp1fmwczSHCEHgjcT1yoiMu4F3mRKLQvmTHWkurSni1t4YsAHNeb7z5t4FPx4bPxhVQB",
  "key27": "e2dCqT1xYWMbNFskxZajAYAZHNj1zefum6kagT2JqPgfqoQpTZZEBAC8BbJzaUNuUKC8N1sajhDCmpriw9HzQD4",
  "key28": "2YcuKdrbcwhVPGNuZDHCHnmSdkAXhhWZwzTKVwXHX9D7hzV1mRjvmqDkCt5tVbMMsWmi37jANpkPFhdcmvPzRwP3",
  "key29": "5YrkDDtAW4msUxqfbdizwaAyjLhdPUvu61Fuk6kNecvemZ9CuTbCYVHwFxkqL1BHa5MrFYjLEtDAW2LE9Zw6iMc9",
  "key30": "sQf49kXKTEcrgQuFpzPwiFQ9PoELJHjnBefCHHZusyG1eSiR3j6jBP2bW1PyvqibHBJU1eoChJNCFRMjYkdzJcM",
  "key31": "3NvM9C55ZJYVgPGPj9z3mcex9LodwiBw1rNfvuzFK4bSBWq9kfSNb29qHAk7Ys2S8RPwzt4U9Vt4sT82zFJ132Bd",
  "key32": "2SURTyhkmrhX1Gqyq4ydcL2JSxiYV5eh66WEe27YsfYPhiUdPXFX6ffF3oftZ5awsbUgJrrKnt35ShYzivHqcfuW",
  "key33": "3g5efC13T89FEAUN8W7asDkuVxuev9K6CEnQ382Y2efPhqVS1UBpFbRK1n7wb7jC52HN86BWzXJs2MXNdPeSTdXD",
  "key34": "3XydseYF6EEYJWKp4AiagUnf4kSjqoQGiEpMJJXQgcxig56V2ig9AFE5avhzaY1VrPU8LzDcRZ8S4rFtru779UNm",
  "key35": "2NghS9XAeHoddUn3SmoDamDLHyfeFPJiYfvdhKzASJ25gSCBivuo3agL4UDeXAnr4HoNFm7TCXbZRZ8LHQHGT4DE",
  "key36": "4Nu9A4smnoPbGfUPEu6YgVVTtmkjADoWKcFDt5EGUwsgUWRtZ9fJPpYBiNo26ZfbtenA3Qn8VAfMZbM88kcoBrfX",
  "key37": "2ViDdVdPEmfwyskiTQEjwNQE2CyZBXnpGkv5qzYKuRmhP7xdPCE9FHbC7qk9T9qrLq1JxZbAJtVze7dPkjRWzNT5",
  "key38": "YkEpN4W1RzW2oC8g6jKd9sTtTsdr1haYHyremUCoWvNbViagYDFtrANcLzWn3fZGK315REvEa5XDzHVQUTtYHdT",
  "key39": "3v2Tn3bQ76NviFEPVqRxkDfQbR9cwaWdMYpWAfr3QAiiBFgAhcVzJYphh34AxAQ1rY8Ve8LYUED6ZWenkKw8ebeq",
  "key40": "D6GJiD3RGT9qA7WcNvgJeaEmkx6pvE9Ejm7ncuPRPmN8PK2ACUP3qVguwNmJJtnE6z6VFjSgnGj2cvWMiUtgta5",
  "key41": "2dDbB1iBUDEAFcncpezKkiK7nTAdpfhTvfK8fRPYKQHPMdp2oPKF979T2LG7DoN2YaGtcp4R15x6eyePPxKSt4Sy",
  "key42": "2ZSe1ZDixuj9kEZEMZADzsUuNuYFTPrsKsKk1uCT7ua458CviBUELTPEtgcd62KWvaQRZUraX1D7VfJZ3Cs6atSb",
  "key43": "5oa5sBgGhoTwZvngUEpUpuNV8f9SQo83QXeQeutTLwerqX9sAjHt3TqSUyHK1b8cAj4pvHgDkenoRcNps2Jejwrk",
  "key44": "cgcgMXQmKxgxbtZ1LwnTS6d5PDCpy3tQNCMxbnPEz14ucDN7RRqZ4QPAHqRnyZj1ANEBK87xsA9XoFVBHXbFpU1",
  "key45": "A6XCWiu99pjgcKsSASEy2V75weWn3nD7a8iYNCx9iXVGh32Pmkq44PF6W9qJxR4DuFa6pzHeEaYZJeEsWXog7TU",
  "key46": "625rWJG66TBGDyzJ3Tn5zgdhoBzhAaKrBBuwtryvYVJbnwqceMnKAAPBK6SRyV7FrQKyspAYi6i5DRbZBGagvg3Z",
  "key47": "38PRDCQL9Z1LzJzRUHVmxeFsz3cbcHKrHZc4ujMVNruLP3V2Cjs3H6t6BHGBd16kSd5rp1hCLJp6YNSjxujrqZpi",
  "key48": "5hYCFk31D3hk1JPj5XGP1BN2MFAdCRhNoSoCUhwTZq3fzxCvxY7zDD44hjWDfhYv3isJjBHP1VmxKcBWcwq8V8Z7"
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
