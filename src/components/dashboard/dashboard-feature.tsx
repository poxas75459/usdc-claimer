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
    "3UFuJmUbsPPxFrh9T6kdhs9RFPWysaZioUbAPyejMiSANksCqzMX4niwMCG2pUnq95FQQyA4ru19NJT39w5fmEAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjvDfktFtMEDmNpM5o7FvVngVQnwxVuXe3m7gnT19heyPenHkgR7wK14BbYVfq16WyXVno5nqo7VrwYak1PAFB",
  "key1": "5sSq5Pe5qACfACh8VVEP6L4JobjEoBms35knvTUdqiee5j4698Vfj99LGryP2kwGU15o4Zdf3ob1YY87TH9uLAcu",
  "key2": "4GtqqqqpghyjyXEi82xZAKGwZBCC3fUWf4RbFyC9g3EGoyrPW4voYyAvAvKVoYeSFkgbtxWS1ipsT6eKVUCBhMe",
  "key3": "YseiwbxtYrwd48Yre11GF2xF8BFHdwGw9WGaRmKxyVAKDXSyPGEtKtBf28GnKFJZnjiJJPztderMwkMDUx8Wthw",
  "key4": "3AQPUubGMVQTGzaF67CQkrTDroQgAQvEagNXNHUSh29hfB8mozcmV7i1xh5DRY3stqoPfBKFN27hAixDJZ8B6nr9",
  "key5": "NaZJG3dN3tZeCR1338YFjx1nuzYb2c24k5mxABrNmYAbjSJPTPRZ6KnhifsfYanX66WmeyVsVZ7m8SZRKmFf8hv",
  "key6": "4Sh6Bj8jzf7Qjegf8V4hG4V4mDz2gzxUfC4JphurTakmRHctJb7UeuskCynGHe8PAMdLDTm11Kj4L9C6RBY53Wcy",
  "key7": "R2subHvs6QWumDMh6XEJ2Egrwvj65cT3MYVVxtTZSwndxEic5bb21theCB9zKgzd56iY2i9Gds5WdiMAQwhsmPP",
  "key8": "CsqWqwqbfoocrFVm3XGwFUdLE8aeiYatVyJNV9X3jTDy54SEGpA3Chomu6BtthYsKMNdyCc4ivnsi5649aUuSTm",
  "key9": "aD4TBQReVo74CyfvVviRKSRv1hgaAheo1ALBZXTw2WFe7mr8Xmc1PAzJwXGrXjZd4aiXJfKbjDdqkKzAxViuHQM",
  "key10": "2c8RhfTbuzXK3qbhm6SX1GthxXYQSwu6L8PAUCQRVhVFUeF1nZzhkRuKhBpYnsP2CoJUg3rPR11KLmcLzSuJELvf",
  "key11": "soDsBKdGn8fvYMhFiFxttwY1Qch1tBE84891zCwBmAr1pRfCRvwrxMAGEw8TYV94RDrw6BaGooYoCQxnPP8XyWY",
  "key12": "238ggv21qT6JDCQJFEXx7ZSs1v1wc4di5kymageHLEMRLtEn7K3xZGugovjHbaNd46qMYuDKtydr9RQFNX2B2GcC",
  "key13": "4YwkCihjNakMqhoZTAbqLyjeMfssJHW46YWe4KhZswfXpFGAEEmZNoD7te3y1TYMtcqdk9rJDccdn1SQ5ckgUJcM",
  "key14": "28daasmyQCvY377fzWey77tWw9pBuCTZmXXUoDtNvh57L7Q8GeYNakgfMW6y4LBFn18hmTTGi7M8RVf4mt9wQNvp",
  "key15": "3NcT4z6ds15Kgg4wfxX6P5AbfZJrkFB5MhvRQ2sVjaYsAvZXi3ret7taUjvygXJjfK56Cogpekt6qNL95J3abHcR",
  "key16": "5PQ4kSKBe7niL2fo6tGrFYgfZtiLAJ6Xn7ih1MR4yYDV2h9e89eQkwt2aXwoJFNwjabLKz9tnEtM7ev9yt91R2Vn",
  "key17": "2cXxU5MyjiDUMTy3nuVyqzGC1ifnW3svxqGnWKzkrJPYE5jQYPgCEZj1CEwWmExHURMR62HgqYmVePmUQqjQ5vJD",
  "key18": "ajWGB4vPgb1AA57bARbxUhnMy7Ei8pKVHtpZRAx363XeDqGm8KEkuCZ7t5gN3QWuPm51ZUvNWf4XVe8WYnR2q38",
  "key19": "5ZLDf3wdr1g7gMUwznmE77UzmsyaixFgLPVdQGa4GMJsh4cXVuCFtShnAqjWgc8QKc1zez4HGr4NDHADyULHu6T9",
  "key20": "39rBxAYHAFTjuMZ1mJboAoiddHDdptJJpipRckGdF3VkJ1xsh6P4PBwcM8hNFm5YCASDpD133DvYQJgC5ATxB1at",
  "key21": "5cvFbWWSsjoGB66qcXzRrdREksFK5ZuuuGxUb3gDooV1jZ6n7f8JgCucxkHwP1nb2WBGEr8cMRbKr67F3ALBtCd2",
  "key22": "jSV1R26xPBHvwonc6NyFqnFS8dKz2QcX5pCEKGHq6MoEEAaKguzFiFMB6fnag8YMLdD2rbNDBcdgAFpATX2XyEQ",
  "key23": "9432eVioBHTrgGxuLCZrg6dCS9mfAZkZAXthNAFF9NtUJuQSkH2n4WUQEjBLgrXDp9RpZNBRsRF2ryWrvHraZdV",
  "key24": "5jgcHKugeknccqmmChvozvsYZzLBV7MuzPgL1hnNNVtt7TFieTaFmZt2cAoysxNdTSNBhbxGdVzv1omUVaMgb3ik",
  "key25": "3uJdahK5dGCKAKvHq5dqdFYcFB3ERPfyu1G6LCPf9vPCm8jkrRBvHo9okFhGTpRxCxt4EpDnomgs7WgyU3iPPoGt",
  "key26": "3Vo9Gcs3EJYxgg6LVoYiaH2vdMEjSbVKBdrSC69VesfVDgoPAf12ZVhmtFsgbgf69bjpuCyKhfy4KaFxcRDitHNq",
  "key27": "4VVkRi8oSrSUWnQYpQhbwzxobJFxknBEuYiDLiaQN7kgbfy4zHhd4gcVQsDPx9Vr4guGxWE4znJ9cDjogEzZ1djG",
  "key28": "2qC9roGzoftF7xaMva94urUe9xTwG9ixXrz5ybsR6T9QkEvAXphfTrXSFk3miu61dvFnjY79u7eqnqRpQEc1Xov1",
  "key29": "29eM9zh523fivfwAVSPTTs1kTUKUVdkyDNWLXv5EyvrDwrfxEgrKQnEzPotAdpCVzaELomAsT8bfph5F56JNyvZh",
  "key30": "4uJoqRGmALPvkjtgVubzySxrqfFKqdffevz4f1jLE4GmwdDE2X21VNsJwgWS1qyVJKH2CvDTYeQ7x4GFWm6UMroM",
  "key31": "5BNxpoSGC4nLZLKFYpnf2okGgDWf11ibmUZqLVXSTJXwibwciGm61azANGYvntbujdVfFKTTnn1VtELs98fAusyi",
  "key32": "5M8YzVYcy25p3ZhgZ394ERhpp6YWJm92N75RDzrYL4V5TZZMwiAc2LuLdd3UhamtgTUAgYjT2ipxMtSra3WkQs9a",
  "key33": "4WvmW98JSu9HTStk5KmCjv44MRYviPnNhvhDYHPZ4URWYSFXDSCeazemYyZc5EPm5xiWmJ1ChMum5w9dZ9DxreSK",
  "key34": "3L2rGU85F3NmPR9LeMcKQg9UwmxYpPBxWzaN3AE5mdu5Y2QUappX319ecKZKxzY3orpmokrtdJ5TKimfQWq8dCxJ"
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
