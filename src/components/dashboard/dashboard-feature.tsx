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
    "s3meQKF2jF8ogvDwuG7Bg7AqaZF1jFjNmGQ2nS3sbKzuHUHRo1TbXGYJDvE7HQePwSxKFdczFXt1DAEdDnyQ9PZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NV2VaMQUe3y3y5b6m2ZG5PUtroiTXvLv6dzS6Lp2HmDrjMR5Jv1z1fwudLqeL7h5rScHEzeuPsWaukMrsDLJZu",
  "key1": "5feRp1NPZi1MT2iuMVMieMVLjiCyXiFGTFre5fHZZAHiJd2fkVwT3tTq7xuR7jH4ihWyfkHPsPRnicYdJch6KQk1",
  "key2": "5xzm6uMsCs9wYdmqx8esG36r2BUrMw5FR7pWHfPnDN3maK4e5gpQhJTvDqkpA36mTajsEy9tSxnhcCkoeXJm58sW",
  "key3": "4ybcrDxXj34kbTZzaQuC8bkDcNsViWMDHcq4SenLcCxfYRxYmwbSXMGqjtgoqfZ4WcSFsQWmdHWuNGJCmaeXwtmj",
  "key4": "4M2sbvhJM3aYD3vk1V1wNHRXN95MNbYfb2uGtaCERPaFWaf4ERarC8wN1eTvoToDwipvB76PthQmXVyiumEWcoYF",
  "key5": "2KAZ12WrUHU6k1qNfn7xhFrLw9ozKfikxLmypW9RpxNqaC6qxZZZJXyKwBxzTfjHUufNS9wJiwnUWcAzkz51CX5p",
  "key6": "5LVseMTdS2efpMCg2pCyjcvdb9SUNTTLy3SunAxfXPFYmnR52EJgxPKCxkpwu2ZiX7SDFUWFkNvD2EYwnpsfNo6q",
  "key7": "3HAJRk1ZRHenDh44LW5cvJNNkDrXgv5qZViR3DphYzt1pAA2Nxp7akUeDLefoLkg8v1seWapVXrggVPjjANh62a5",
  "key8": "2BzvVgKtJ2bvNYyskp4qqRtphuyLd9Va6zp4qcKZxcLaM15hTbyUDYXfBfSk6q3w5ZRGYsiqDbbciquPNG9rZddw",
  "key9": "a5yfE5fze7FLRLuD9d9KS52NyydankdkoLzEgW1mFHAwSTpFJ836rPuHDQjMG8y4yn7nP2kF53WW6PGCYdgovAn",
  "key10": "GcyF9sUr4L2DVUx8o8u7995GzJbvVpbbNPkgLmgepSknxVxBpEZws4wuasDYnSwEvofmnGFXSytMKEAh4bzaMKw",
  "key11": "3FcJcChY24mvSPRVEFSREiMx94khWNfF14nP8y7TrkesGYJVy1LraR7DkejFCtpbVsms1XRcSvZYW88cjADzkT2G",
  "key12": "2MEMUAf3J3iwjXczShxmzn4Keu8PWevKwirxpyJDcBLhQJ427VatF45xvSFiw8oj57M1v5Y5FBJnpXxDAUJni1Zo",
  "key13": "4menrZ5icZxa6dKdtQTGgqeupyBAecyDjPwmRXtRNKxomLn6tjF8CNxkUmMfh6tWhW4C7LoXuYUWwihniq5e79Pr",
  "key14": "5aNGsh5K2yqs2hpTfRfvy6dbQnXWWTNoRQ92JroujV4D9tNVE4t2zrDP8BEALPGL6CGNzNNX9kRpK1SaLdHiP6Xn",
  "key15": "LV9fPz1UQVn1jUZJKawHRpuLMwiMh56Mz95avdzrnmBu5f1MBCP5uqbRGeXXpRbnJbg6zDfUkWR6RtH3DyHT1Y1",
  "key16": "3V3aCKHegeNiSrfZbRSnLLWQNUH5rXsxpVEutp42jAt7fU3k7q34AP2NnJaWGb62MR9nWXaTZtDujTBPsgMMKtXA",
  "key17": "5WuHY6SxDRLwnznheY23Erd86asEmbsABpkMgiBeaL23qGB5XL8GuqkK6cP1uN5BGonu7Yd7GcAoYwCL1xdTDhdh",
  "key18": "SWsLquvHcqtsb7T5UHZ71Y1MZLTrN3dTFrHsopZJpfayWcg4STbsVWJS89d5NraVKFyjAQ19Pn4wwWNoQcPiC9z",
  "key19": "3gDwnJn8HuCcFeTup1eHSzpLFRZxb9zkMkKLTd2Xb9pbgjtyMyH3hQvy34RgRffvyaP2tsa2kEV12KhbPu6DwwRH",
  "key20": "48zQmuB2wM6AxQQBGqAa5rePYRjfKxbXMhW5EuEYegedqKYGLMhvpWbGZKnuhpQdidT7nr46QjyVyvUpwuGj6Qbe",
  "key21": "mTvFsi3BrM2dVj792UTsatYLNBmVxtm3az5QDiT4kUTnUzbeoprKF3kGGChyJ8EUC9gux2hqwGpezFH24ErkHxh",
  "key22": "uhKqByr1VM9b7c7UGa3TG7iJvs56evuX3kzTqZ6zrLVqskubcM9i6tz7mPzyLdqN5hPAGTT6Sezot9cyEMmeJfv",
  "key23": "5eQvdSN2yra54PpB3ZJJyryDjMBMdc8URVpLWrzt7wAoBpgwE2UWU7aTVbeRXz6FxixesQCqxCoTPgEPiDrKPwBx",
  "key24": "2DRm7nvSneWFXySHHFDa9yZy2qmwnxFQqvEAfq7TKGCAQus5bmMGamTr6c8isLNY17NuPoER6YrSfuvoseojLrKy",
  "key25": "22sp1NzziQtPgcLgC6XDVGYDcq7rLLvmgqBxUcYnZRH65U61XxxjM98AyvVv5Geqv57S9x7ZZy9CwKchzALp1gyu",
  "key26": "2jY7CGQwvpVCbsKpPbkZ2v7gdpQN5tiyWNmQNUyt6fnR6w85pjVCEmXeMo6N9MGVWLqHCPREcUUZ79jVkx682Ujh",
  "key27": "2NkBYzSKGMTFWzqWzpkorsbh64qBUmxCy2SrKkCxDhUx4B3JCyU5aoxsLsh38kiAdpvVEQMtczVkcuDmzsC94xz4",
  "key28": "2LzgQR1rptUpnvNVaT31oSJH8Afp1RbWq7h3AbGsjQn1r3gZ5ifPVQtyaRWLqctURkFRnMHoFGEHPqXBqMTaNXj8",
  "key29": "ypwAZKgBV2iYR5QSX8MuMjmdFz48VFPc5A5YLVgAXEn4xnsAVg7u6gdBJfM2j7uB5N7tQBR7bgcWHCDStS1uFeV",
  "key30": "26mhbvqQdXHSCgYdm6bLXwF2nraYq5XVWChFGtkoAynJUnKkvfC75mzjS5LgXCyD2rHYgMi67TSfcnfpe5AT6Lyq",
  "key31": "4YuGF6txkabAaidBBHLJzCZEsKRSYFfWAyGrHbMot5rNn1LivZ2vkHdMoFc87WyvEvJmWkvrYY2JPnJDH5E1GSrw",
  "key32": "LFo4sGybq598Djw4EbjYNbJNU3ug7nXbMS2Zvi9wLZqT5ZL511gUU5s9TJHLiD5oiHWQAb7PSiw88P72uqDRhrE",
  "key33": "4M8VmTcrZ2yoKriwwxULMm78xDWsNkyfrTDvQjt2bHdGoHgo3wSKjHGuaJst1t92UgoeTuSdGinBphVYHNpcZP2Y",
  "key34": "4hb68aaPpRQJ8YFUbXiXa4mjiEmqyAtRbHwNDGKnk1ttWrNsckSN2ZJE9ZoHyGHwuJytv9SPgtVJqPSQvkqt6sTY",
  "key35": "5Sjd3yaP33rwpzEEN4FxTZZe3umynXJoHg8g8aXbEAfvyT9qfAmuW5jWjhPZadib9weAKzcRg7e555mubqznXwFi",
  "key36": "5h19icFiu7pXefLrNRHZEv6znRsJiZQycKzDrXXS4fc98nMmuTDrFSMcm9AvTKhKu3HiWaduLZt5FyNQ1VDWW6eb",
  "key37": "5MpeiXfrbNuVFgCA5MGcZbq4TrJCFHubfcQ2Lc7HYMmP1oqk3QcoD8dFe5ftChbLTCPXPmUWgS97zWFmY5SJT9Gk",
  "key38": "Wt185rbg1RRMetzhKRgUMxTZ2DCi2yd8Zkfa9Qb1sKT5NzBqeXAHtAdg3TgEBfHrVtiNLJdkywmPGRZBAd22DDD",
  "key39": "rMxf1jfu9pAPQw1isCQfoRYCy48G6yJ1uhMq1efMMsieStXQg5SmCxnZ1BVayRH8JcdKCf4b2qpLCAEYBmHgehM",
  "key40": "Uf4RFNV9qgnGzBcHBK2S9tXsRygPafpA7vp7vXwqYqb1aP8JYrFWMGCaQQniXNN3ivobT87bF5L8cd4h551JVAC",
  "key41": "br1ovJQR8zgj7MrfKvNS9YxBGHWWZeP4jsWQqbThFirGpahJYFwvAJ8RU1SaBH2yjnmcjQwod8ivoR4yzU6uJLh",
  "key42": "3PzFJ24pY3wa1KxBVqjNZmBmoKGerCm6PcxbaBUJSb3YfFpdkyqX4khGCKyZnsMRHZq596v1f1mhFAEqoxeKszFk",
  "key43": "2yiW6xuRvE8nZctGywd63xuYhRctd2PMoNfnrmRaa79UfcMW7v3DkYgg4AnLDdPycZQTXYHjLvskL6DK6JRUMbPt",
  "key44": "gR7pA64U7S33q1hKUZxFWaLJcMKVoNLZU6odBeMUCAW3isaRWBo5BNiEutpUYbZQeUVgrY5Xr4LVSwnZ8FymPmT",
  "key45": "3HdWZPcriDyStcCtZFYNGpiPHp32NHcXLzhYFFTGL8DL5A2jfRH9Ur4jUaqXHnbCGYbT3AwPg79TKG53aAtdQ3yH",
  "key46": "3kjw3mdtrsjK5UfX9kzGZ4jza3wd4cw97nPLHMceCFMfQbmLymedQzKRhAXQdJgCfkbkcuZ8HUiqTYxeWjc32zGW"
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
