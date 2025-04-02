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
    "3YZkc6eBzJgmSSdXTtTcvfDqH2vHJD2vkt1mVayscyiRJyv3RcezTojL1vgKKNdL7mV9QwF7SD4gQf2kuWDCdxik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43dMksLp2xzenh9b7aSJHY7Ah7osj7hGMnhh4kXewNhsNfF1qih2SdTxKoUZwZVubyoaGsTUyb8qZWGfMn59Qnq9",
  "key1": "2wusmETmpMV3SVULFVhheBzGfnmKtbARwZuY1BvqBSfVnRSAnLbWmJifvDJRsj1CvUEzYLK87rQUZcjzfWXwuME3",
  "key2": "28HUpsNqXKfkqszDrNd82SF84XR8sXcPKng3cYCH9ArmLpySNiv6NdRc9kq5tnHXgXsLozu177e9m2eqpZZs5pTf",
  "key3": "41ArBXkLstZhUztfibfjwCiWtuxCwtfdCj4ZwynoiQwZKPuQuqkAJa637LsGshm1yYPwFroLN89vvMisqnkfEV5n",
  "key4": "4GCDyJZ4BByEUg96oWt5wECCohVEG8KZaBgHftJFS1pfcdAoxyEjcMzA74y8Rdhbojr7VtPJ8UiRg6zVJcZCxsUS",
  "key5": "x6XEHAEkwMvMr97YVKpoGhxXdT8CBXAPJ4wivZFcYbX8Vy3WL5uPFHWXNPUGJ9Ym5oqHyiHseSdHwsk2SNWqDNy",
  "key6": "5N5BWCqHVJC9nSxv21Ax1XerXUBJaDoxmuZaJp7AGHKTqtLa3KvF3Nf3BWnEdV33XUAg7vgse1YMZhAB66WvpGSb",
  "key7": "2i6fysR8TrmQJXigMX1w5mGpJusjKApmi6Jt15s5YF2ra6ainwwTvfSxRSgdYEfutg9gmRLqcH49XfGFWSmyvHJh",
  "key8": "4iJGEGEsYDBTsEAKoRTjJ3xVuhT8tzUGZKfW38Q3bvpPymfqXgxKdoG7TPKAGUxQMQwWkKWonfr8dgzuxZsNCbPS",
  "key9": "4bbbdaYnXou3ESYtkHrPEFizsoSQWPwMwmTKuiqUhqXUTKQaUVFt1aURTYfA4TvYpYyvNozgw23cFGNZpysK3Zzs",
  "key10": "2JC2ST6vQ6LgEsB1kuq2DWMzy3DtXP89aPA2Lf8Tx2B5g7cYPufnFnH9LJCLAr2zqeAon8rMJ5GiR4a668UZev35",
  "key11": "2SbvKRRjz9YwG4DtuUvtbEorvLc2htp69BRtM7wFt5REx3h33whBoodbabVyvvMAJUkFMvTkNd48VEumsvqRweaC",
  "key12": "3MWuHjXchngzJEBcbCzjiW8CuhSTWzcGmuBEtKfoodUr88s9NixW367ScjZHPTtNYfQkxoVNQFhCRsdh5GeXzrZZ",
  "key13": "3PzMmkvZPEh1TGYWCub4tjhDWNPJkGTVM7aV7ARiV6gsyVaSwv5wRwHPapYSomPn932Ff3hDjVueiJKrJ4ZjrcV4",
  "key14": "2TwVtrQ6DhjNezhr6vVnspRoVAYYLG7yZ2GiqCoq2jJVbwTVPHFEiceLVwUD6Kx2eUfuine2Rqhcu5FiPEneBepB",
  "key15": "4CitYqHndwrKssV1MsyacGr9SV7RATFUtxrRC11uFRYskNUDssyNDgzYAGqQ7tZFih2NdWFcDrdw62CpdTVRzcy1",
  "key16": "4pEiXFVkrSGRwPefRTsEpFtUYX6GHyVtyR4jwingBdxaKczvBhgeptjXAVPu3Sj1D4puzDEXRKy99hfpESfUaEpq",
  "key17": "X5TP6EqaVhXep1ySoEgNPpaEsvKxVSweY9JQDosvCXF3FYfNxB4FiEXp99juRxBiQcziwkKC3Lx76QfgZbvzZ71",
  "key18": "4qvfq3SzDL7MzdMsAEjVNRXTdJui6fib6AduGJVUSTbt7PL7zVMWJe8p2hfVXCDQM1Ks9xyC4ykK2ZzkgaWxnzMa",
  "key19": "23DfDcwcMsJcK1dN59sSM4TQznRNeG79qMkSXqWsEPxz5D5wuxk5Qc7cJb6zCJgss9p4AoUgPdfzdgjonmEm4Eei",
  "key20": "fFasuYxVekWGWKqEn3amXCDHMT6HS9cWtk3AAGHSu5XDZf7i5d8t7Li2SnBoqyL1kckfYHQmxhgqdTg4oubpt61",
  "key21": "3dTqPhi14zHENEq9cSwnUpmRZr5NbCsxUN91B5J3MxtCb2J65VN9DKeCqsAdfdVCJGBYDNebqPRjJ6CYF8BVgXeJ",
  "key22": "3dVyWEg8zEnVfrHdQzuDNC7DGua1LPCj9obGEXCGLdDPZUjozKiX7La7K5fj44WJ2QXvdBashhk84HSEiEQQRP84",
  "key23": "3WQXvBptAhzMc7Pe7Kn5ozu82ei5oxqRvTiVoej1vMPRiPTCgGxJxmDKv7251RNTcsj4QgDQc6cCNnwHQfTRNaKj",
  "key24": "2x8zteZqp98TPcSjEkEko8Cb4F4LWjbxhVMEwhyYvgYW5s5R5M4JjM17BJxEBfN5noBkk5FwZCA3ht8Qw4urheXA",
  "key25": "Mxm4LwTKfqpuzemvSrSbeSsZMfDdDST58kL3wMPA4etXDKg27LVHvwm4g41K4moxuniuaZhZBCiAwwnBqd2mnEm",
  "key26": "3Ep3SuhgMwVzCoU6GocAfGg8JXCiHLw5E1wYHLTx6EZEMoQZ9g1W1h8XY5zSjKNqMo27g9PKRmUFbm5kTokfnhrL",
  "key27": "3rKeTFxzj1MRDhB3qGExJcn24o6dUwD1nLv7Vf3TYrYfqcngazbjvVnKPyGKTmbPDC9UW8ckZVDyJapAGxutVBaA",
  "key28": "3EKGFUJ8YDCFVLyYEbsmwZsFvvjVUamHm3M3FYPkWGFihLatCLnn4V2iTmK8fB4ErgULrB1r7NGmPw3sGwyVjCv2",
  "key29": "5ggxqrEPpsCb2qUmTgndRdhy9JuUjriK1fBEcrxndSH9FCLbqBKnPvmuN3pWxwgSXNEruQsyaEuhRX2pnAMSPor2",
  "key30": "2viZ1vLNuk2YV7SzXveMqbu7qHLVyBfH7PTJ87EG4eLMiUSJYNRY3MEvJTaqM5NxpnKXGKE2EUgtkTDFzaT16xWc",
  "key31": "59Rbjei8d41PLXRHtavvWShYfT5j3KZuZa5eoa5M6iYXSNKMBQ58aWRchujZgPNZ6UjKtELjDHJKVQrJX3GrrDPW",
  "key32": "tR7QDztWjgfDBCG7BYSqstjekUZZYqDsjcARUQ99L12sGT2uPdiLXsKVSgqxrz1NPguF1CaNWBYb33FtZkghJ67",
  "key33": "4BEymKqKVnahUQ9RyUHoEUWA1FnDQCjVWsQaEh6T9GeMcGAAvMbNeU6dH8CcQ8prkGkd2WzpypMSCNe9RrR74CiA",
  "key34": "5b5mwCU8pdFXQEatDrun1jtQwAH38mNS9r9aVpz6uhaE7fQ9ux5p9AENLegA4CCEkE7qUQiTBmDLwt8H21vzDb8i",
  "key35": "5JrQDzQtfbK7oyqaWQ3WJAw58HM6hzNrCWvE5urod785wBr1sQnxrqY2EzPyvV6xW8BLQy5NiiuqnUo7tHDCmEHZ",
  "key36": "4SwJ2p64j6tfHLdJoKGjZq6nQqxU8NkSWrSjiSEwzUZKbjjQWhq1BUPJsR319tvAuN9Hfkoh1t1xLejrRsSTAM27",
  "key37": "DYxUQQDyUpS1yXJZu9TVmeF49L5eYSRbx5aBzkYmUVvMXWNXmNgztDurpxUSvGPjAyNNQLoprQkbsad9Yws4rvo",
  "key38": "2yLj5zJXbRqYdQmGEj39RCQFLJtaiQ94fFnmSEiE4qV7zewgi9V5FS4S8ttrdrgGyJhi9gMH5nLE9C3TFHGonHqX",
  "key39": "4p5MMTMcCDPB5APZ5qBarMSQfytmhLuRD8z4CuZtePMTLPYr14FWtA4P4xdEULEbEgRwpErWwUdir141BjyqZZ6e",
  "key40": "2fQQnn7Ufu3Kwbc6QWZgBdDYzHrM5SpHgrJn9PKEBacCQBVxhrChRe1aURdriGW3VXwViChw6z16i2BdL3UKkzTd",
  "key41": "4NcVEGT5oWDaENxUPEMTSweUG6roJBcqmjSoxDGWxJ19LaoMxkxXXjEWPMLrSazH1BAM855t2XDL9rKLuu2v2MBT",
  "key42": "wAe3bm7N9oqHKUSNs18TjmTWbzXWJ3WpcvSMdhwuZoBjrcy6jHW7odUGBx4mj4EQh9sMDuzx9mo3yd6vAaw8RjR",
  "key43": "4DakN3fJcRNNGV8WxTzNr2DUYtBAne8BCAK48U8MpuuptJRopZqPhdRLyjQY1tGqyzz9wUT4FS86NM9LVLgsxjZn",
  "key44": "3kHNEiT7pt2n6KAXn86uDYBV2SC74k9sNvRPABEJ1ZX7jDY9c4svjZgYfUxYj1NXz5ujJbixWt1hFzd45UJXbV5",
  "key45": "624QkTVCD7EfZvWhXDVxvi1ygoSCbKx9Ws4HMSK1ojaZjcHcFfxA4Kx2KKM9wceMCKgzKJFYTqv2QAVXH5DXTWfv",
  "key46": "3qkpsfxqcwpy9C4Pw1jrg4f5yLBV2gAdPCXNwDxkyocoULcYen3es3qYBnT2RLK53BhkVhh5bMrY3DWwogbvxFAL",
  "key47": "2n2jEngzNZewQ3i2dqcbENCWZDNqkzAw4L3gJdiaC2XfVDkVtui9h3WY7vTFx7jLhrnjkLHWQ8M9iz1HXP1m2Kqv",
  "key48": "62GorWy4sQHRmCcoAiUDy2cEJHhXMwoBe6RmnMvUG31hu9afdyWaLdSR6EqMZFZ8SSKCaQ5S7ezy36YsbZgxT3sB",
  "key49": "3nFApBsyyipcQeGCdeXw9inj1kw66orSWZFUDdF1ZXvGLyTehk4JEtLnvLfugnS3cSCbYpdFTE9pYRRzSesA6jFq"
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
