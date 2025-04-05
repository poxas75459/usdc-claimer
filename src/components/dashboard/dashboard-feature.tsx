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
    "3QjXmjHWBKz26MViges55RQdpyepFondaegKLC6jRQWKkqXGnVTR3QqHhkSm5rnEvbM6Hr87ZLZrwiv1et3jsFbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAzXNzHBy1C7x1SWstD67hKkt5VjW5MA2SdZWdADFPWsjTdKxufUjENbL4NhyLsYHtFz4ufoWQQXCsGFYXdFWsq",
  "key1": "2cUUxpiu4U66FQw8o6XkRQQf6QpkZ3QsJnaozN3LKRtC5y3D99LegifamZHiiifozRWm4bn4Hw2WBLqLdEfAkaLf",
  "key2": "3KSanj8r1ZNfjyqmdUfRcrckJPVPHGgX8BnKNDjXPehRZTuEmJKxFTfcdpAEtLhJKcBH5h8HxjkhQQWgJXxs9yKM",
  "key3": "2cm4uJytNiwU8fkvBrre1Gw3gMJCwzKWJxHVW3YMc4GCimEAM3Sd57AZXadycN6kFy2ajcDp1SWECswJQmPFmzuM",
  "key4": "63epepmSxAz1Cfqjof3NJqwECKtD1hEpd7Mx5oQEJ97ggFB6mmf963ZFqKdLbjkG6LBCvwiEgxsGotiseW6mxiTy",
  "key5": "5tjarb4NKZRw6BLH4c1vvQtLiAZyZoeHr9ajer9EWL6YVbZegpbW6doHyvpYYuRQQ4vY1KAaV7SWWPJTSPM9MDwd",
  "key6": "3CRD5yYBphZqmncBMWRYLzb3tdoW7wFnLH94YbG5q8z64GnLBB5amx6ZpXCBEWAnYaxaa3LS2bxiXNEgEzzedm76",
  "key7": "ZsTzMojqN9SWvU9ZiDJytMgX63wJB4NWv1Ebyh3arMruHoWfsukcygr2Ng5cfwuiyF73r7nLu47XkN2FKjTASDe",
  "key8": "5upvxXakccKPNVySwmkYDbfrZrf6GAhbNmTHC7w2WEa8UPYeYtqgmuTiVtx9UXkC1kHVdHcAYs3j76CYFkEsqbMf",
  "key9": "4FHdAfrwkPHdDAqDhoGFQi6bA8MDWDrBEnDWzZQ1BxnX23Gm9joGpbNn9bXa6VfAgVa2pBLFwMahMkw3MBfLLn3M",
  "key10": "5nNGBQkE4CD3ZT6YMS1TDS1Nersrqt2P7LL6R1k46iAm4565HGyHYduZTpc7hYVLefE4ByCos9SkCPtBxCqnzAG2",
  "key11": "KYiAEpaxQscXbrom7M4q2AP3vAHpSpAbAGz5bRpJUABX8ycQXi41uM3Wj15bJWN2pWYSaojRt9GTWuvofUbwc1u",
  "key12": "2HGDBMbfuMymiuH3u3vabfW5HLXrLhxkzuMifjUj2VexPrMvmzebp2TSEowu7YQYQLuzaGuYLPaLwo5ryHSsvdEh",
  "key13": "5xSLt4zfhinJyKQwFWY9MusXaUDjHEZ9bsPoxtn6RcD93hpfmwnxLtBVMhB7YRLj7igN88WRjqYV8GDjZHdpXAdu",
  "key14": "4iHEcDapXaDhrkH5E6cAYmRbEQMKpG662wLH1gr2Rw2a688gbeGLo1YWPyeALLmFLGF26Z8kVMLaDg6FchhZgzZB",
  "key15": "3ZNhZwSXQhohY36Qvtaks3ZVkZnD3vw54BhZ6jzyX8K62AR8WjeFVods3pFFNX5bbE7MuM8zY1cvx5jksJYeFDGx",
  "key16": "4d936WQXkxmQqJ7BiCmES7Td9UhFbcbS4xZivonXpjcqoDWXcXUH5d6m1wZYHesR6uEHRJTzRi9fNPiNqwLVeWEf",
  "key17": "56WZLFQzJDKo2BELAzmoMp2YmaqDMvMeffRnKVhQnP1ZVMox8jHAoH6eoPadpAhknvv5D8boxLEAjjhe7jMbAR5d",
  "key18": "3mnDqcFVddfoCe2tzggDNc5nwZJMXTHdeZzoM2ZFmZE3X8ArjBxXt6MWaYYDFuvAufxwjfZfCYytMGaXU9szA1e3",
  "key19": "2xa7eR54qva4vRdNry3uZRCGN6N3k2MqYR8mVp8J1p2wZYXhxubN6Ky5uzDYE7qCm8XQcjB2hYAhyqD8mLFdUVpr",
  "key20": "4exFCMnbaq2dGHHufgq6b8FMtdqh5GZ2dyRaUgTQU8LJF3jPDnmEsqppZUUFYaNYjYbA4puaVCB19SdDWDgm5H4h",
  "key21": "3BRvhMHbiPpeEsDMd6XGKN1eKnsoYA2kwLAiDhNZY8DXP1cymhtoZ4GNgRUeuK4r1AA3mu7cccied9eLAkU9dgQX",
  "key22": "5M6Di3eW7oeJNmZe5ZvYJ7kzoAuS8W8bZxFMJtUqP8SCR8TJ3X5d23Mq4xyw1eQxBynzq8FMkXvAnVmQH3tmvzmu",
  "key23": "DndeFoqjvkf3mu5hw4P4pijF8XbSHdPWVkqqzjvuQ6Ae5bvDPRemv58BNGbWp4LtqjDkTpfF3UtNEW3QKafazUS",
  "key24": "4qD2eehcXEyJ1nLS1avFMnhkoFxbw2aYvMRHdEuC9Ad2kFY4owveZxhNprwc6mcGC7yJyMSJrYqBVUdATKoVgw7W",
  "key25": "5WPEL7em7R4biZuvaFHu8vSihSnQLHpav9kXrheSqHBjctdsmbyB2s2MaTuBqdUUPMSDAcpM9FHyz7HYsZawBS8v",
  "key26": "5y975318Rq4fVvUbCXSA2BqVNMLwzyqyWHdwZrodUGZxJDRTkQphwCZ1NyGWmD8rN5E9CgFkvuauyuhvFtJnb7Bt",
  "key27": "4js8TWv2BwNQYrvMMDyedk39Yc9F2rdaNXTPKX4ksh6CnGf3DfBhmmehmFu9AR9RgJ29K5NpML34GaE26K7c1pmC",
  "key28": "B6RApun9omGBBUnT3jvC4AnnfL7imdewFYzTkaSX2izwMmHsHaswriwCJjAqWU7QaL5MHPkp74fu8PV9KVeL1qU",
  "key29": "2XfG4T6exkjiTiEQvEqa59uZw9gXoexABJus8JfzFfu2XZiUyyansjK4jg14pGeDS66mugj3VekGGmefMVei596U",
  "key30": "4ez15m1N7hsxPWuELVkaiXVuvfU1ZSFcKZ8zwz7qLPZ7ZJ23c3XAzvkUiN9h1xvrbA2yxMKimgVvkJU5wUa2xBBE",
  "key31": "63qurQJ6x9bY97HFDrDatyn1sU2cMYMMymcgdJx98wQhZ99e6DG9nE3A55REnMbDxGbVc2GUJggquhRFFYwLxyHZ",
  "key32": "3P7x2amHPT9foq6hrLbVbRwvWHSK8utjaxo1RgTppMmqjUbq73EBnGo3D2bnWCEBCxsbDp4pBJos9oZ3rV1jsZfk",
  "key33": "4LJ7JAKcDaG8NPE2M1Ctdat5EsCvGeytrcDQ77Mbu94EpLdYL12LTxKxGTabZ36roSJQkQBD83fuXwrwrVdtn3fd",
  "key34": "5aEFPBZ3Mw7Ny1EcUvAWceDJFLEo8gXK1ucfBwkUtSaAy5vDf6FGcQbzrzveHUu9JUgZ6Rg4imj4kt2PTM4Sig2q",
  "key35": "2EZinvygbVMTJrFACCCS9P7qWTweLkL442Wv58uWspkgnzsui2KeJufnnNAqByrjAEY9dUwCpSNVJ8wzsw2JQbLh",
  "key36": "D8oi7Nqvk4UT7ctXDuaMSzhBjHLCfDsnLu77Nte5CYy3pGpEJ2LeEamaPyVo3wV78ndf1eBLEfAdmBrt7Sh58mJ",
  "key37": "gnfqByzPQbUXM5sFjNmwZ2sbWkT2Z5JGCwbFa2gNE4rgM8pB2T5pZABBm9XpaYXPfMEtmW5XCRRNDxY4JKv9Yfp",
  "key38": "cQz8eLkx8s1PmDNkyjZ7YC6R4njifDQNTf8jvHHwbMyBGjkR66a9YjCNzBEvYTvgjkbAy3HhFUz2UY5wa2gQnTa",
  "key39": "21tLjtvBoztNotYjiLjZXGXHDE6r46KQMXzJVyRH59hBNj1kATgBtyqQbtyRV1MY9zNLPtLXT2NfX75LBDdUz797",
  "key40": "4oVXQHJfBkCF7Cbf5zu6QoMMWeaFQsEwZxZmo3cnr58MnnaH4t3o657eGHpaDjmd4X2nCfSj9P7Jcn59eKZgn6pW",
  "key41": "JcuRMAUsCCMiPHStfgpY3bg2RvV6Ehzhk2mAXdXGFpNrQdnvM4E7Bcft6KK43k8nuqqwSE6byxVu35HgvVkQ6Ni",
  "key42": "2r324hUysyUe7czDyH1WuxXTL844uopbesUc3WMYGiL23SsFrzWYf7HpADFAbUGab2KBmbup5ZQG7r4jTsQUUaFc",
  "key43": "3d46VJGNwDkd23w8HAdQxxFu9NW351BhJYR8cNtSYAbf3EwePkWqtkTb1Dqommk4DYh8BU1rEPSf6CMQirshK5M7",
  "key44": "4ubq4t2wxXsX2qfWEx98jzXHGtchNKhLuqeeSquvTPsTYNm4fY9wbB9HCcVk2kxbkDmUxGNvrsZK6TDR1ULLQ4GE",
  "key45": "Mpkirx4tPzPYKpgaQ3yvHjEA1tqbufPXtBAEDNq3T552iN6THzyGunxSMb3kjW4o91sUSVnEHJvgpyM9AzrLFbr",
  "key46": "2dMuJQkyKN9TdRBwcQYQUhzTP7jLdEZVrWc7r135CtVFw17d7bd7XYKLhvHvF8YjgNv3znBtb7MJJKBvjoCc5FTa"
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
