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
    "4PhnXPDzsHnTH1SaiSuVQWp2RHi8ThdzSiZc42oNxGpbrsVRkzPBSUBA3z34K84Q7FW2BQzwBzookMy6WA5ENo2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gS9zc4ysk6xSYtLT4dfCoM3zd2KejM1m2i6NGK8Cwgx2RhVgviK8zzkchE6VWGQhi7ySjzx5svkoDfQn6eNMyqA",
  "key1": "57oqmEEKfkYF4ogDbPgih9zkUZuBUj5vgZupRGQs77smCQaskmBp6nc3nx2LdFtwJsnt8EHnaATiJ43vZTapnBkT",
  "key2": "3PGvRA6uvio23EFFQqgfdBEma5NTAeMH344uWPLqX922cAF9Ahhge9kpSBgYUmark1zZJzUZ2qmiwYwYv1QfSNCo",
  "key3": "5vtLYWL2gjrpshEm1S66pWcUQMBXhDmSkzNXbzAzY5mSnT5DEACiqBHZ6BVFDu4mnxYWvvEZQXuBrQV3aS59Jaed",
  "key4": "5zk5CtxK3XH5JWfEn1xAUrF7YRGy9bjAgZyFZvXwuiCud1JTF88F4zsUZrur2ASk6L9WfFbbezyzk9WixH4b9BCD",
  "key5": "3sofyrBqU4m1b5BtnUkCFq2JAE4fy3VnTMej8iXNwLDGrrnNitDRawYpgN2zDv39EpgYi8oSzJ14vPnLJCc8J7wD",
  "key6": "5NieG8nmRATdFpsLrk4RLm38G9Eed7CRzwwvDpRcxg1C6utL8BV6Suph4HJbKMknxmMtKfVPTGLkErLaCnHvF5bz",
  "key7": "5TVq7jjQK7j2gUiUQzTWhoezhtGm1M5uuD6sg2EyK9RNckYWomknGxxfwojmkDvULxE9eG32CRntTZLd6V4y3Tms",
  "key8": "2jYmMLLYLoen727C21Umw9g9NQJCciDeAYGLJ8HWJQKZNxnbvF8uvH7U1EnCAn7FRdffktvADhFJW4rWgubmbPjK",
  "key9": "5T2fDfEUZ9HAUXxoNv81sybHRMfeynFBPrjTR5rb6xkhJv5H9yTXuKq4rc4zZv6aJPJLbuPQvFyxB7h4H4CUcFVu",
  "key10": "W34F93rxASbE4hzK1DCzk1z2xeSJAe8MVUWQEQFoomi952JHXMPNtbfLGqfTFgyreeeWWC18ZbUDNyTKeHsjMvd",
  "key11": "4RUjdoV1RHra9YrARDHQP1GnkS6RhvJs3PWkVQwwGKk82PEtYZfKzusYtHfTmgt8nDsUd26BnQyixuYUymAwDXSQ",
  "key12": "hSc2NZPQrTJVxJqHcagW628meDTg4cdtn8jbSaqVDsZfxocyqjC6wTfdyyLrzHcD3eRPbXj1dmCzJeT4PB4fXoU",
  "key13": "4QnrJqx5jZ8vMTu9MjaS7TTRmUy11tamqiazZW7SuND5afxWKHFkL4nbhiuBUUHPcV8ovUHTVnu5yXWuP31YnqzV",
  "key14": "4doxuftYbWbukXkSPSBXdNA8no4SQj4qQUKpGLN3gQXG193FCvsMFtmsijJS8Y3gqZ1JyAKyyGX3pCxJgyj1EfRZ",
  "key15": "4og8tYym1n6vi92J7TbmfCAPYGMqoRx124qDVY1AZoTLx1nFByetqWc81NpVa1tUCC7F8xTR6vYumKFTTzCGFfWE",
  "key16": "4a9vRVytusL8pjYpaFUWkZiZesedy3QXHaF4z3SRufVrzeSw2vzMJjzePT151wPTv2ky36XWJYonUPiu9Rshu2pf",
  "key17": "2ecnxpfr9jNG1zagejeFAZqC6YKMVQQEExeKEs6c8CCBkmShCaf1mmWX1gwdc6hmG56ABNu7sC3RtUR7qXwR5JTo",
  "key18": "5fd1cLktncgcVhVeREAEPCsVtHoA5LurdrGcbJ1r5JqnGGYwWFzgrA3cGNvdW8AKoxRZ4AaxwyyKZ1zFLQU4wSHb",
  "key19": "5Rz8Ru9otfkFFBhE9HLd84XTe7HTMhbkwQaH2saa85xtXNuANvxxAv3RaLmnfhsLLC91EHBYadywEPPj4fgwJqry",
  "key20": "njeYRYGSZAyvpAnBFqy1WNEfSmG5kzn9M7YLrp3L9qAyJtjYoajrMuoNCjnLVonFTd7o8Zif6Et8jHsfDVuG5Qm",
  "key21": "3yxzKc66Ey3aTaewfBqFVcP8JPkTKdxALGtTUnks76jinDMoYjjy9HTZswE7fTdP5k2fi5BA2A8SN66ejTLBoRxh",
  "key22": "tsaHXFaJbCeTWfdjj8e2sdg128WqW4gvkEwmWzEThYjHiEMUHDogVHzsGx6NGTkqnJ2iq8CZerg5UQMhVspdibx",
  "key23": "5qBiokfxd7ws4VFySkXSA4f66wR5M81Fs81e7EPBB2cEbxc72UtVYhQDn1akTYRr4fEFTNDHNic5Qj4tyZx9agcd",
  "key24": "7J7KGd3SsxsGsC5paVVXH8p7EfeFi1mrcFiuCVEmFA6CBneDStmz5gqGpR6yixt5JDqBEVHvGsdtSBdCFeyHRtf",
  "key25": "2DHpq5AZypwoPHAZNwZddbJzmgrxwkJ8SvbSKnibf69bGi1wHEXeMGsedFhjCcFzQXueX7TrhnPuTE6wxaKzReor",
  "key26": "n7pjTTZb3rXpecmQt2WsktHQXHypiXmubXNYJmcJ1ahWQgkM6QZeWLYiTfX7DKDFofDXKaDqx1SRYwkxkEANvN1",
  "key27": "64TJ9Lpjb7uHoausqdRUuxFN2yAzr96NJKd4p3CwzffsbyC2jrjJfbN3ZrhkGj6hgcU8pV5ivVhXVfVRehFRkN4",
  "key28": "5thasnLHYUtbyxdbDWcqZriRXeQB6SSy2eX3eveSPmTpqQWd4d3XGVhYQhajZWMuSAyVJ1DUvgg5VAUM6ouM2dJS",
  "key29": "21s2o2KkpgWtC3hit6YSLQNQzsRmJuMFMbWPavhx2ihX5dBwfyXo8xr5Yq4VXJo4rSWhrhwtE5D9nZo8jjBx9huq",
  "key30": "2rG5An11VNFwvRrJQBqs5MhnK2jz3VMZFYLo8Ty7YwpToFFZF8ePxyTZn1avAYiAS8wXxUBWJNdhtH9tLJeKP34k",
  "key31": "SGYiLVz2sgH6akvLyLqo5VeYTLq7mmLYjHDfHRaojdyu9vtb3RG3rBDnZKNTKRnuurpkQwQSitCuhqXXua9kkxj",
  "key32": "re6whKQMrMRjqoteXwCWp1nHrJ6JCiz39Kv3KzxsyGNxCppCebiNKej9rdNYtypM7HPYAebtAVBzsgW6aHmR37K",
  "key33": "4tFtXGBiZMcXvC4qpGBpdhBHQTQvFXxD7knzafw751xLFwBDeiTRygLE2QJkQZBU8H7WzgAcCtJTKf3CFQHCAaio",
  "key34": "4PJWCJE3Dk4ND5foyXgC1ny8QTJYDeUTua6hX75wprB1VkAcvdaX4dnD3MfnEmUufShCWhgSdHWACHNJ4ABQkJan",
  "key35": "31MPLQ7spQ4N8KGEUw5zCYo8t7zDYTCw2LNBk6jHuAzczR3PkU4zGCLG1Gb1poycNrnGPq5WnPjY7mguEgbRK89w",
  "key36": "Fr6ZgojoZNzokwk5pCvw8Esam8UA7proEBp8BHHnzV8qyKow8ceAMBEc87Mqmq3Cf4G8vKZmoqLBFh3Xfss8yNU",
  "key37": "3wsCo1ReW8c5vT2TteRrhchVt83ToDyKN28fgypDsJtKq2cEuexkoJk9QMFZbrdpV7GqozFK9a5aKf1Yi1BCLZaj",
  "key38": "2bCoRNza8JGpQUQKgWSPYWH5dCtHts4LXfozSymskEsstXgUY9vhQT1VjxVSFrT6Dsin21BNeFCWWY97B7awzLci",
  "key39": "3gCFk11mgsygNCUwddq3DTkyTf1smeX4GwVi2MciG6oeo5a9o1txJmzDqkaSniYdVXoF44j8QHCE2DgmsgVjLNCY",
  "key40": "3yZAkCB7KEVkpfkWQAFqB41qSB7Ex2S9g1s45TqRd5X3kchFgRBTuMUZCa3kWxMQTWkQYY1cmmAFkpBQ2A2pJQWv",
  "key41": "2YFR4c63NBB77Fz8xe65xYR1ZzyDrjkZzyH7XtpBryQRaVX3pDdwjKxh27LJpJ4hVY2dEEYKKnWAabUUQnt7E8NG",
  "key42": "3yRPKYaN3CoPaXhehLZGycyLExNt4anyygSABuVvcys1zbbrNXa9UuWNFsWBikguD3CC9FjWQb2ViCznUp8N6Vfj",
  "key43": "2qPENArqAbeG8P8QN9pAFjU1oJHhRBGgoVPVPedjbbY71mgTJwds2wJSRfohQo9d7Ka1wvE8WGsxUPmJtcvD1qTy",
  "key44": "3VrarGFAvV4Y75F71oTU8rrtARGhVHy2jAYa8JCraBTSjuurgjUVFVnpT9D33SAKfV193ta4qpSQMg7cGM3YRPfR"
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
