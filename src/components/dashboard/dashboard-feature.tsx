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
    "Zr7Bm7UZGSj1EWBSDiR1hrdruWHh9ej1CFxK8YUWSghmBzf69ZXU1kLiJaJA73RoMtNnJSd1ac5KnJgJ51d5Hwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sdPsRMMFbQE8oXwBxxTV8dYtV6CydZDWbG3Zv4KfPgUkG25gELzE1LWst8Np3jNH9xYA53Yf7uaBPPDFctMqU1t",
  "key1": "5H9opCt8QgffDyMPn6b2r9G5kz5nrtFfPxLBnB8mKZr7ee1FBmHLb4zPNJapQMdrLhHuTpyC2zKBEAPJsFc56JK6",
  "key2": "XvyfcwWe2LGJnk5w8DQ3BjzD4wktXQ8dDAJzr3Lq25dYEF3e7pwgNqWcfRWhf3H37yTYWjMtjzbNFuaMvLVrMQa",
  "key3": "5FGN9TehKsAa1GekrKM3ybK7o21AEyzTU7CoBkcefRHKGZZjE3w3fkeJAB9471SqY659Shbk3vUiGshoeE49N5mJ",
  "key4": "5atuARidiFH9jAt8K7aHAGeMVuAREEZ8oGrCNMzvvwbDjJfSrhWvpwB847m3tHBwnRQBBJ49uPrq6XVso6pET6fi",
  "key5": "56597MyUS4we147kN19WE6RAt8k9hsfLxY2PWtuFbBGq87rPLAFcc9gkfXVsz61FZKVK7CdxgFW2Ty58FKWa4emF",
  "key6": "5FswTpeBUx3FQkB84fm84FGNWVa1pdd5UggmC2eJwLcPnZ3nna7pS7RFPPu4TqbZVWLhAP1iYfjyh92Nftxkc7wV",
  "key7": "2h5egDUHm1hrDWVxPk4oxdWu6y8smmHjbD8osxPk8CkKgAWFC4Ac3dPKy9Hmtev6vhYM6M7xoeDfCRcwApwpY5x5",
  "key8": "4mM588BTGMp1Rdvw6AGGXviB34nwVqBBdsm3LqK2YyV68WudEpZdz9MqB7MTSf2JC7s6mUkGeqAmViXwZYXrd3uX",
  "key9": "kotTtz8Gvm6rEfaePBKdVYLxW9mqg9a61dxcZuUdiZ1qRX8rm2mMjgFgFnRoDyCwAy1BjeDKVy7MucuPqajbWXC",
  "key10": "278MtkJerzuyBVWWDyaHyXewG9H2UMLKqHMmCitjb4mKRuGmBj4rVjA3FYm4BPvgkeeagDpAwqbvgrSYkKZF1VNa",
  "key11": "4LBCxLPN7zDNTrHcqgiVEF6bwdke1Ywz3huUxWxSeXu4pxckTAQfXi5MhRkeq9Ddt82S4rA5ti175ufHa88rAUr3",
  "key12": "66f7PNb93yjxkofYNNCoyNGkWe85zfyWnrsdEHcVRP7kq2AhEJE4gD5uz3wpKg5t51NzZMJBspB2MWXjG6Zz7qai",
  "key13": "4d8eDpG9i7JwjR7L7pkfqPF9rheBZeVHMfrgk4nigHUdQEHA29f65yf51Km45JpYp6ALT2478CVg9xGRosYifhcN",
  "key14": "2vUQCGpg3gXxKyYbKgNcVmAxdZQaNz7RdyCY85YmxGGNYAC8G4fGScyvwpko8hPEx7pszo36Mh5D45NzxrXZLt1B",
  "key15": "LLq8P9vJtbTBZQQ8PSKayYPpzBHnprSEG8GBJEWw8nH8gQXXGqBp7nsdnM2EyoDzjShFsgUUHbvYe17xTRymrV9",
  "key16": "2S61zrBTLyjfx8jbimVYW3bWaUFPa7AXjM4tcZVniZjLVoow1XxyWMj5soC3tvir1phtkgwiBFHHszAiZg8fctjJ",
  "key17": "4bwG8p8WbyMQ9ZJAGt1ZNuEytUaCXVjcKuaJX7LGsYXasCEjDf9TdRFCqYxu8pbC6pTqM1cQrKPnF5hY4kVaeTtx",
  "key18": "5gbZondNPAws9ircbWanb1x6L62YXTtMqXDvgrps5B9Zz4kvyEsc1eFDoDSMKJRtTPxH1Wd6REi2EnTkPX1afskQ",
  "key19": "55ir2GcUEKu5tibD5GHxqhNuncVF1ZvpCZfV3cCdNqUd9WLZKAhF6YrMxAhiuvPbVqDQ9QJ6LUJb2xfqimi2XmEd",
  "key20": "H9t6FsWS64JXa6Apa4ug2PDfVAwtq9BkJEtL18jaxrNfWHb4tpW7QphuNoZRm2uaiSW9FUayoxcbYXN1UjMJdFe",
  "key21": "4nqPgg8oQTEbvNrSejCLAJbzfXMQi6LThArsoHDW6wUywZsT7cfGjr9uM4boj1gk9xpv1saHipJLvQuYEarJ8Lvd",
  "key22": "2wmrr7TGFP3uQ6Hv232BtETrw6nMTNT4opyKGYgwjBMZj1F8tmiuq2GTmAGdae9geZRRxyDRtCZYi32SmfEL5Bg7",
  "key23": "hJgJtuXzSuWh367nvQ4G2kpAkQsPn4X8ZCe8LaRMVzwM7fvDCt5bcNbTX8B8xirNmc1tbdtaUCeHZrYhoXjKpad",
  "key24": "27pKoD7qFZ7d8ydbjYVr5ZFHfJmQKJkvcAyghgu6rskqhKC76ZRMU2Hcu5C3pzjDZwje9ryKCSaCiBCMzRaapyyD",
  "key25": "T3dhF4cpAyw1JZgjVC3ZuuHZGmrP6hvq2mCfQJcFFGaYd6XRCT2J5dKZ1ChTEVF5t7A1sfKNbKUnEgXXxvNGvFU",
  "key26": "7fiLCGk29W9wr3w9JTKr9AQeP6kNSQtdL31YiUUngG8TppAfQYUGGvNok1USEk4oiDKkDS7Nz6dzxZ4r6QvGnLo",
  "key27": "5RnCGmsGBTy82CtDQ2VWJQf6NwQoU9542PkrrMKrQfNVf4MA5kJBPAnbRPdZMfg3PzFQKsijTyweaXL2E9f3rx4Y",
  "key28": "2YYFa65aML2Cn1DavbMPoL7mKQvB4PrPVdv8mMcth3Yx7EsfZ1Kc1twsru22SME3d3vFYDJPkxNijWQY27pTaBr7",
  "key29": "5AZL5Yqe8qysQFYhU8Td5SNF4fhz23bAHxo94c1bP9XY3NMmJEs4T9Wy9nx7Gpokx81gkFsXe31yupbvqqUvtU8m",
  "key30": "3hutLHdUMgCT6DcuPpFVGnC6ZepV5Gm92iWHsmrs1D1UBUHxhuWZLm2NFDTfZSPqUNr3jvn6TWvjJDb3QJWUyMM9",
  "key31": "58eHuWAfDeYucrB757tdktu9gk2XLpi15sRLoBPR2qdxVn21E2HQQvGufme8BcRdbvAMxJ2VQtkRe2y7cpc6qQZJ",
  "key32": "ncEmHJMRoASu4sxyrUWLXpALtBTzNujdvX7FbsyX8PiHaR4no2c243tXfBuvz5nE2qvYXxcSygseZEKSQKTDUMv",
  "key33": "29YQFUHsnfvxQ7QDtbSarKnjDFjoxgDGHKrcthBuYXRv6pbdMwpjmdwthd6zhgAkmJXikykVEH8BwfmsEk3t63GK",
  "key34": "nJ7kXQr5fwk7cYYp3VpeTphQxTpY76nCSnsrZ7ueeitNaarRTcqsuYykgBrXCJwki5ToEfwsH5NeBa4XeSMKvtE",
  "key35": "KWcPDMJnRxNK4Ge169TJrVsf8YdDUzKwnMrZX36rhRfpXTZ87awy8hoiPtxYjtyAmRMkhAUJeWKVocKcYkzQqYo",
  "key36": "5Ke5Vdgx5zPE9BqBwxTPXEQS18RBW3QZVLoAb9dvZQRVY8gc5oNyxfYC3Bw6sKYhkMkw2mkkzMcdByACyCsVS1fG",
  "key37": "4yGm883YNTe4uxNuZssWp8sxTHLvMjZ2JLsGvn3VnBjPGpbnCARQrNbMDNivg2bTxEczvbNQkbb6nWa5jZZfY8yJ",
  "key38": "2CB1sea1aq2qim343DFXsPizzgdM5rvdCwohXio3pFCdR396ofBfenSgC1dTuUDqnjoGQzaFF9g3Am5EYtrQL3Mf",
  "key39": "5aCUUGxg6DELJPnFrhC7VRpKPH9eiyJgw48q7QtNas8B1KrkwWxxgqjMn6n1LERSRqa1qG1txWcJ2aceFeRf22qs",
  "key40": "3Ke3VzCzY2KaS3zP2nUkYrEYxRdFHs6wUSrJZqdxNCu53GJkf5p5Xa8m7MVmubJ8RNeZJgMzZPoE2FNvYrk97LmU",
  "key41": "EFCTYPqBah7CUZV5NRuYbqJGa3wbEKEHngpmBtqDXKiFoDVAXbG2BkoWpwxxFqtgrZ1GEJTjFu3oFHbQkdPyNcy",
  "key42": "3WEZGXx1AaHXfzuYc971G4VoWkGgC27TdZcjRtza7GEFF9mcE9yd4ALQ84QooxWvkYd2NmE1MCGFNpoK4kMGRWkr",
  "key43": "4qZxGVRRGLUiCZXuQvgS4SeH2s46hKm3hmjudc2Suy5W3YuyDvVxUSg3TJND4YkNbrJw6i1VFBsGnQcH1PdkYdVg",
  "key44": "4R24UNBUij6roAE9ZCmTZzbJEn3N7pm9Vu2H6XneF6MJPaNqj1oG9AjwPgCEMpkmJF6CAoRYFSwgGoog7vG2bUAZ",
  "key45": "5gfMxChn7UkmLJN3wuG97tJmgJyRgNH8CTrurRYjzFHutpv8hX5DDaAqHfBD6UoDVfbzGQYzK5w652cQcSzZzBin",
  "key46": "3BJ6Hp4D9ijhVm6Y1w1hAmN1dfMNRE7wbjCdu6F5rH1RCw8AwNWdpsEdmj6zct1Xm9yUAC6buTPE6xnWcgAtWHXi",
  "key47": "4J32SSFfyyD37r3uJJMnqCiCUXchtmU5bJGPxUVTV9rjtV6tQUFB5HutLUUydM9RwnmLARSuPKRT8wTa2EQdhthm",
  "key48": "342GFdWMj25vVhdcGtfmV1QVYZ7tAWo9eUcz5j3HgthR6PWCg2dzaH1J3ZfPo4wbM2Sue2w9DPkGv1dVHrQrfYk9",
  "key49": "5jcGKAUfagPwSXaEww6MbnsxiBBEGh3yS869LAp8q4kX4WcViiqReFmfdsbaywuZhcQUE7aYJVjqpHDAzt8hxp5P"
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
