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
    "31RwJAxxfLR9Fv28m45AbmToEHbjFFJDG8z8xhEcm86JsiKacvjM9VjD3h3z7wwGYNhVpJi7Ys2Kea92PjeKTUYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515LTdGykt3arVKx9XRy7r1hcQSKwaauotYkhk6Vj6TbSbY4qAQdr7hEP3BQGAE7z3dHAMngqXwBBLWHtGwSBNm7",
  "key1": "5SsKyuFicrPyeCXaNFwoRekmYRTYUdsxmEb9NAPbJjtC358p1mtUkfQayJmEPycyroygmYmqZRuW2UaAZJDiN8Pu",
  "key2": "ovaur7DHgMvMAkVHsy4eGvQfjc2Q2SHPBDjykNcasAzgBHnEnpKf56Qg28H6c4cVazrY6tJUPgtd4rWtJ1ES69e",
  "key3": "2ZmmLk8FpojRTf8irdjKgKprvgRaj8AZWDFMASvQZnjKE4mVdKNjoNEw3tEYSYm1tmVU2DdbMyTWh9c5kvwk8x7q",
  "key4": "2SrVZXLv91pHjbqevZujbfMHRAkdLg33aAdpV9CpynPxDA7HVqcqXZDkLWfK2mSGCNTHKw27rFQeeV6pakqWFz1T",
  "key5": "hSxd1374DCz5b4grE6hCoUNw5eVoMGMUkapwu71GshvBXHXosf5r6mrBNYfkzFHcLSKSzwwYoAFatPDMZ4G1W8j",
  "key6": "4mnV9BB4VSjVpWmbh8rqvH441zyHRDkYnb7H6LYj2k8YEWHsa8zXemeK4B8VxRPZSxHxDqrtZaGTkK4Qm1FA7LtH",
  "key7": "67mzoG5FuJbERqWYGcqwstyMEsjEna589vfjVxvykiDnaTsK9S92aysAJzBVd8bGoDGnoTTyCDoddWnJJvYQLKir",
  "key8": "2QNMR6fmyoVdyF8BDzYwQRwi9bxB1WJb2TbtNS7ogDuzj9UdEKfjDpeYjyovwVCzwmnJye19DbQWRcB5coYF7173",
  "key9": "4DdkVUUk7KVXWPy8eb3VFscN4JPfp1SH1y38ouLLfMPMKjDjYT3z2MFMv6rLRXFZcQo9vBnqrYXknCj1HqZUGStq",
  "key10": "32Ucm7WYaANpRLMcFbqQgFNXTB7aNzd3rruvgVFmgQNYZmUxM5WaGCpeZHz6m9NmrHca3Q4amDjJCtiTVWUPZqUp",
  "key11": "3x3K6xwvG9Y3e8BaWezNgQWB3SQYiFQD6QVwhZZ9rtove82YccbnEcgXYFayc42TniJ9gAmsgUdsAYofYWrYfnQx",
  "key12": "q3u2iBXM96YhC6m7sFdwj1rmDpecsQ6HLy6huDDQvzKFcx4ebi1X8ekWcMRN6fBJrcea2dLeuCZNtqHhhKZbJHz",
  "key13": "55yyBkP6D3SF492f1uaD2pwKG7cjTwPd9BoFp4EnbNK3fPC3z373BmV23MChDR8iBKYme1f6TybEZzuiHqL5NEoC",
  "key14": "3DF5MsLkQYBPwyGwZUaUULvMr911acCTH3M9FMyZvUXPLU82d2mwQW6YR1rNiSdajYu6DPM7CMCGyvNe26eryLzU",
  "key15": "5RSAAVdAZ8eA8xMBg9yVNcZJmNY44o4eVfdUsx2gsup2W1LitpJWeLBeU7Bbtbozu32S4wpa5RjDZSXAc8xR6wTf",
  "key16": "s4SqaDHatf2KUe4Hz5vwx7sGQhCXzd2hh6Mca7epe5hf8RUW5YPLZumeq7sgUBwKtw4vayhrfpShmYPJgZXmAYd",
  "key17": "5QTdfAvcwAfVdAM4HBohNLd1tyHPzw7NxV7f3GXzx9sD8LcULDdBSndMS4JcXmmFaQcadhxEv6c9B96Sinp5HnNb",
  "key18": "YDSofqpWDcjoYvyWDvHSakQTZwsjVUHTHUdH9kXPxiv1iwHoQYa3LQPZM3zD1fnWTShpRowj9bZfUWGuQa2v1b1",
  "key19": "52iB6TjQAZrYTD45AUEUseW7KmBue8ufAMsW1kZa1KVTgoDo2HBVS7njQhs6wQkBD91gVsV416V8hipHyAXz3XXb",
  "key20": "3UoBGiQQp8iPkLU6R5SiMKrgWtduy3AbpPQfDVyS3LtEGtwNZdtgx8S1G3136QUWsLVK1mSsLzzgEj5gqu4fmsee",
  "key21": "5nJQPvHaP93JkCPm4hhtqkDLHr2gv1SfExdjcPK75SJMdW7r6zyA1Ei1s1QsHwoJ8v61CCiu7bnB9cCFy1tPQN6m",
  "key22": "9MvaAa5RtN8uzR11GXMTED8T5tZ63657PiN4fy4nJ9gjZH4P9xuzLAsPssJJPmsWVvCK94KeCVyTKW8L8MNBZce",
  "key23": "34X2F8nPSPix17nYLQWEGDn4Gt28grAf9hq7wKdc2DJnZtbPi99krPUg18N1Upy6k5tNHkSzdv9EaGxKhxmB167X",
  "key24": "2fYWk9KBk17q4yJqghxjLdxM5kC1BbhZPY5WB36ozPgGAG5g7NeKepBDiSVBAVNRrp7dfvsLDo81cemeDTVRFpao",
  "key25": "3H7Dc5b1W9qqBbJvNCSyM9CSwMTtK6YNhkF69VUBtC1t4Ds5KT4SgfwumYCuM5bEe9rYTrtgZQ37uKBgFKdixTmh",
  "key26": "5X8eUhKPxt4EaWeiqJ8atzhWskFtfV5dzZ98o6VKg6gzjeEiAG1BsyhYMp9t3M9tTyfM6zcnNoZC8RTcs21kxqe4",
  "key27": "3d2hu2xV1hTGyuUTe8dxEhwPhVSup5569udF3W8Xs4soxg3K12kaM43V92c8tSZvm78yX4oGgLTycLnEXRHrHPUX",
  "key28": "2kJ7kahJ1shx2T2p3d7oxqnXNYwFVcub38io3iyiB31TH6uHfvxMDQF5fbZUfR96dumVqzyPngJqqyubTJ7pprUs",
  "key29": "4LD3voo3MuqoocMnsd51b37rHnZkUBDob5HW4d5oJEUk3o1wZnrhqzKDvf74UMEVzukDJef1YveFaSqN22FihNSj",
  "key30": "4LobrSWf8aq1EXszNURGsXT7nMZjcruumP6Fn3jHGEMkMh7cCbNmTpFptFqekuaByRYeZFF5dwtNJ5KYuC9Bvqn8",
  "key31": "QMQ59LQTf1HpgkWvSntYt8QzmdUUkDitCjxmG4fWHxVc1G7pww8kUJf4TisztW4HfwfoJVJDbUxSiQRhPZhbBRA",
  "key32": "s71aXW35b7BBSc7fsYWs1xc6SUwfW6ctJrsEpvK2wnBYtxFX11FR9TaqGRE5FaV2uF36o7guUHpJt5vFtcHKfKj",
  "key33": "3Yv6jMmCVqdJEQTNBmqwFweex3gnbg1JM4ZCJmZDn2hhS5DrB2rJWKWqNEEtfajNvC3rzkG2MQTuYgV6FxkuYgkQ",
  "key34": "49ZHHEUGx9f4vYZz7YxzSsZAdU8qDxe761meBRynZ6BxfcTBU5QKY8NG2Grd5xtuJELKwVVafdrf1qpckRFPyfQL",
  "key35": "36N6jzapDkmmw2x9RyG7Qgh4NV3v7CdEoMA3UjDmqavBBrdxfwQwV222wBfEH6pAfpmBNdiQNCn1iefRCfgzjhyo"
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
