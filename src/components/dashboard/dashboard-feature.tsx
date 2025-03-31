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
    "cBHVAJvM5AJnYB5md5xRN7NEcbXSy2TqSH56X6MaNeA2VG7anNPdxASxittMRgChPLr6Xm5WNJGVToUnwm352hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FroxJd1x5uxK6GSzjkwTkgUurL6TjaqJcDfrpDHdpyFd8uwSFo4YybD12ouKC1dadyK1eKjsVNL3y94CutZmBxg",
  "key1": "4X3vis1uiubdcf1g1BiUVgsbnJxmT5foLfh2NHy8BaEhEG8fcpvDtZfxDFYVNykMuTpgjGc82yKtp6cmsnTKb4Fa",
  "key2": "Fyff9VfKSgj8nHeBqruyz1fGSotjXReb6WGkoYabDUagjKYFGoLqGRyzf3JzkSdKsUmtsfLtQDYGNLNsENt8ZF8",
  "key3": "5WxFtnTEL2DCjzH1mW8LUmNnt6aHM4qoXZ21RBDLgY9bM4s7rhPgYF7VdkzkfvQPsKWKZu2bgiXp5L8gQaStLios",
  "key4": "3NMFU4bqvGA8uwzGmFTusZuAeNSJbH1dy5hLtYCVhpCFnaUpnGJETCeqEoq3w3VscBEwHyKc9sdSbyoEU9RkDz6k",
  "key5": "5x7ebH2eMsWjD622HFAbnvRqumnYYR3jz5tzDgEeYN9MM9gPvAQcLncPuh2C2hBHwYBiXbDVPQiYs5DPtPJ5mh61",
  "key6": "2MMKmSYZFXH1hrYcqtzpESLL3GCT1wS9wSFGT878FYCUADiZLHGQPpBKGJHLJSXVZmZ5TojxUTWvrUx3p7k1K7aH",
  "key7": "XjkYYBDmzYhyaVPu4mg1FssNCqyDvWWK12dvNp2rMZMspTaXx9tgTRWbWoaNk9dF3vZaAmFv6LtHcf8x7hJLdw8",
  "key8": "4uscENELXs2gSbK6yuDdzdwoE2u91wH7vzFwHrd2fRwvWNsFUSDGk7AeSTkKxXqE48VHbxFxpQUpDNMZ1ihWmPdc",
  "key9": "2wMgu2PR41LKDXDpcDJhkX3frEF5PdNJCrGJ8PqycoxXhkL9djREs2ChYQ1cMRNFyTq5DFy2WgxUnJci1tqCiW37",
  "key10": "3FjBKii3sMB7mMECGhaSVZfzAtUc1kNQwSBxnHtge6PgUhcEHwtRdigZbPNzX75bKDAB9QQhMSjDhpDcJe5nUS8o",
  "key11": "3E7LqxTNuoSLGAGeGmahuepfsaL5yKDzS7D4EojpfdHcLyQQotY1Jbh3vX6Xk9FQN1L5HbSQsCmRAknU7muuMVjQ",
  "key12": "3cf96u5FvJcSMGdvWMh7L4QHqgMwjY1zE4tVtUbfopTkoB9BbAcomkooB57h1Bow2JD4ZsbWNFKweYYMB5fMewpZ",
  "key13": "i1ZxuAZtCJJBjgdaEeBFuSU1EK5CyML9tQdcZwjcVedo5TJgGAeLhF6Uuw1TDqExAdHjz45B3svY64YyyV3LoJn",
  "key14": "4UfNEnWUdQAnJBeSuCrX6k2XutEvToKPNzoE2dV7Q7985d4TVKQ4ra3Qw9gFrpT4KcCKEQ1FfRjhKBDBEXUsivpw",
  "key15": "4XRLrmKvytLz2wUUpb57Lc42i2PHEN63hV39irStyGe9d63tM5bu3zFGw7728BZNV2HcJ1TqobYKK6j6cTKvC5BF",
  "key16": "2bv4fAb9K4KqHMYB3vL8AnJ7kXyh1QVa4QBGMSrYLZ5kXPRYSDsibV6gShQibWQ8ZEMPUPuTArrgzNkJVQAyNmGD",
  "key17": "2h46ZUPyLAodq662FtURZzdTV2ubxoAyNyfV6iwP83C8oMvo5F543Jma9qPW7sij7AQYLGxUKt3T1yXMosKhRZUs",
  "key18": "66DQBB5vxgsfvHQuzLYUtJg2afTtsRD6KnMKU86EhDLTyvhBmq6vHemgq4Y6qqS6fsrkCtDbnw9akbR6QJmF9t8D",
  "key19": "5AWQCm7Nf3hyVdTAa1DtW39n1urV5Q5n3bb7A9gNHou8cRoh4wSAgKHBaPFhrdmfu67z9JGPv2FZ3sUoLD8uaHxv",
  "key20": "Dti727Za5ZxZrivpkyjLHqJ763s6cwRXeARijtmHgovwpSep2C6BpuGgtZgtRiF6hCN4CrLbEGTi5T686emdHEH",
  "key21": "3PGNK6uoD4GbDeBgFmq4FkC88VDH3YBvtRFh2cB29yp5pRV8K9swfsZdQyR9fo4EHdyTkarhbZsh6G91nPTzNW2Z",
  "key22": "2Mr8m37z3D5b4nAHr7sJuGs3ZafrooghrvWC9pJZsU9kyjVQKAXYAvjU9CHZQk5rAFYjjZHfciaFcZyu3AgxBizU",
  "key23": "2o1ciZqzw4dP46a5MmyiaRjKYLsGVGMEgydND14qikuWzssb7Mq8q68skFA7dKpN2ubAj59GmSXFwyibQxBu9STS",
  "key24": "4FDoVqhwcCsv1P5WrGFdn5bCHyhbJvJXcDiB3vUEGQzF43ATQuCxXWhCp1Ud5tVy2XpQ5aegVoPYwjncEyEv9TVU",
  "key25": "2Nq2SaT5tu3yKoH7uYKiEUZ8pKgn1wveyyxjaPzPzatBjpZFuNPy2WpkG42FsUBiWhnFrsXQGBbJ6xSozRogEb1C",
  "key26": "4DajUjLr77zJH4E8A8y3joJYn1fzRqdxtrmCTjnuiJ6jtDFJazTXABHa2Ci8MmtKpZTfjzU75VuqHXwYLhTjH6g9",
  "key27": "5LVFnActf1Gmn4WtiHmM3QhXhzMJPswEJqMBXwwg5p2sEAzstqUTbcpmLtoyWUbbHHuKU9hNwd6xMCsjhTYDUC2r",
  "key28": "3uPmB72aiqR3pD62ETop3PPYJyodWhUpS3orB2u6jkBgpEJYvL2g2tbLi67nZdMjUcw5vK6FCmpx2M2SPKH3T3W7",
  "key29": "4y3ez8NeFXGRxzawame24UjCk4Ebaq3RVuyGZxBNvevjkyYNXvRqUNZ3muCTssfgmxprXTrudSZrRYRiuV2DGqEz",
  "key30": "dm9XPGHMiGkN1ng4DDrGP2uuumKsKLpYqdLGiTYEAhCn84zygSzLsBGYPExe99249tGxXvhjr7bw8KNp2WzcsNS",
  "key31": "2DsCgp4HDZRtg5HB7TR8JyoaF7d5ThByKW3ocEFxbZPcBVKh6Jas15AsBhBNp9GJtmPxBGKhE29Fb2LtHcjaw7sT",
  "key32": "wJBs1tVwhJTpNhbndJ1HNy4RwHkfUc2EPMZv2CPXnF9brU19Qw9vuhZaDsNUFGrca4GAvxdafD2BEeuyKrmUkwE",
  "key33": "2Ttc1gC8nw38FfWvkurNfBycSJ9PUW9yoJ14wPXT4x7TJznGidD1SKyzx2SMi1WSpVdyvorhqYDf4zxh63sHcZSS",
  "key34": "5C1tBN9VTuxRLpo5kzxsG6cx4MMqMSarhwtNBGou8PPZQkFJcBKMxKXEZ7MTdkWMnvfeNjLNkKsoUssjGmBoL7fK",
  "key35": "2fyrA5JvsfWYFy4EkCEe1dxr1uJj3PVxvgxRii8R6kq9aWUmSwNSVzVpVYqXpZot3UWUWo1b71bDwAxBzd6RFkTR",
  "key36": "BQCoSvNMwbzzatBo7XVGGW5Z18d2QJDgxkTHB7WNh3apbSjds8Yrv7PiUjCVgUj3hGBBCWp2U7LtFTETfDFrqAZ",
  "key37": "2fGVppaGowveQe5cgZDzLcGBPt5RPnbxhjjpVQwFmbHQvotKzS1gcZzo1YwqdrsRHwpmHGFLVLhs6Utz2snvm2DX",
  "key38": "2giVUzLb1gpxYAn8weSLDbWEj3J9QzHAj3HD3aCsU1LLb14CckcWBRFrDfbx1hbGtn4DaARE7i4xuYRtSyAujPg1",
  "key39": "45oDjyMm5BwMukoEVF5wyKey1kV3rKdpq3sLi8sb27kPgfdpXr4ULyPfmtgnEi5yvcZVHFfqbtJXfPoVekCcJp6a",
  "key40": "2hm21R2j5ob3osqtdrrD6k5fao4dssZZaFctsUM8dkyMZeb9SZ6uNWtQnH5DpfhRJq6dQgxwWAGEste4RdreksGY",
  "key41": "yCuDWUqd6vryd9tHGh6C9PWqWtYPMfbXHGAA6umWAs9bTXTxECzKUvuj2FSA4nr47UXKeX1JpVSNYDYkXkWZcLb",
  "key42": "uw8vyXNrpciSRrMCCa84MDSptLvgNsyetvGdcocAJDjmYH6PhKeqscZV11xUKXhcGA3qK6tTeU4hq1HR7eZm4Fp"
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
