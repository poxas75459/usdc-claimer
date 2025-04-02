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
    "5fqAf2sXtz2Ye2uQxAxanZShfrni1pUQ2s9BLn7fxZZStzmtGU4Xzkur7dKrFaQzxoHHviD7MNnbezXahjPMRYYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnumvXXCooUgVXwZbZHRscaR4upxTa6pTYbBCiW2gszvoEqALznDVpTv31iRz1Nk3Ho49jCr4xGwjWnvewzEqoG",
  "key1": "3bsApdSHHrkuan9tF8LMH8m2Ggrzot2CSnQNSkgpxXmdgJws4E9qTAkSBp9KeCRbtYrmFCEWkk3RLPDXffmw9PH6",
  "key2": "4yDAytG2RKowkTH3v8RTj8broHTKciy3eiZHhSHAjS8MwQeanVGBZk3U2sKpQV4xipLNBts8Rg2HYjWCCYuiYt59",
  "key3": "gUDr5BbFa4pU152hzq1n2yuto2KC2ERhNjKcX7cbLsvTDZMGMrt4YjyGVFL19LWvuzPspnfzvbcwkPsewsgZDFj",
  "key4": "4MtiaspaU2yX3ZmpqGnNEh4yWG1iq4L9q8bY75T5E9nKYurwBXJTPB2hPh5yCZ7wxMn3G26sEFdHzfvG3j4b2bwy",
  "key5": "vBXnDwZkT1EDG1mZ6q8NZNaX6A8B77X2d9QP5XBQA87VeKm2Zd2JQj9qCZPjAwKJYGXvHPNtgQUmWtk9exnhGG6",
  "key6": "xeLsfWQ7MB8GJ5sWuW5KrRv8VbxegSusYNmrY24rgAGkkuBwrLtx84yQ4EAZA7wuGNnDAReUSpqaomvT6GHmTi2",
  "key7": "28NvxGYoRNKfr38VASJQE7za6FdXcMfYxYuqAEwPBwcXWJv4qxRtLXqj1k3DdST5q3TKzQfjh6xp5gLPfnRfxcXk",
  "key8": "3Gvo3aNnhKh3m8Ficpi677JHBjs3WfKaoDA4iYaN6TmzhoFpZXsQaGBUEEYNeRAjzkySdUruVh9PMvi7jMcmqVu9",
  "key9": "5eoTcStmz69EW54uHfQBVfJ6znYsmfaQNSwcLXkBF1hMSeZrDjdzh8atSYoFtgaWZhNBEQYHgQ9uuYef5R75Ze4F",
  "key10": "2gLXXiZPyPusVjwX4axQqNCPrPdpfsqr3g38NDiqUc4KXrtHZwNJpmXqvQgsCTsBr2zi2viJt3FJL6XtvTk7utPe",
  "key11": "Kmu7GRYw58QLTeiAEdqXwNaxAXCSB2xq4kWcp4GUVmwg7mMqLyKfSAarXZjKdSdn1xoRaJBkdjSSw1YHjpy4qHs",
  "key12": "4cAQZ4km7qSdEutEHnV3RSKdJtmRBx7afViiBqLxDAcb6d7gfSKTA2rLjioQyPL7VNoZwGpSZeMLDyTQXU6U2cmW",
  "key13": "s6X3YLwNCC5tdxamvNJ1hPHLugqkVnWjcD5BbyvSVaX7cWUhGvBh3wPGAKNadLmie24pR4LQQjxrBsgUZcHmAHb",
  "key14": "51pPq4ZAxCTa4qvQsKW3GY6b3qGV3iY6AUd7XKytMKmzkG7Dnvd1vQS2De1CS713Cvvebp4eUsEMigJV73JtVF3N",
  "key15": "4nF832pxMYqwv9oGcZmQWDWopYgMcuuD7EHi57m7udK9hJm9hKLVp7B84NR1skkduKbAqawjuqSKRuFFbSo76GhE",
  "key16": "wHjbpxUZrCxkLcb9gv61Sr8L9xYoUHCtRiVNkRrDkRMTj2BMPV9pGcsTFBW2m5sbCTuMVhANX8c7ZsPmWZ7C14g",
  "key17": "43V4RoD6VYKryQPgxFwU34pmVxpG47EvbkhjZrSNNPTcJGVjfibHBTRstbfbthpunDzc5zSd4t7XxcMxpG6Lw2Mm",
  "key18": "242mBnEfneeJ8omoFpYB33PcbXcqERjiU9o2Fom188BaBj6SVUzoWNFrw2meNUn59m3DQf9NnXFyGx617iZzyW58",
  "key19": "3AVGu38c9EDdwRquLLM6ZaLckT4XcnC9M6MmEkNhYoCvvhyAmgjZR61jcAYLcAvvDBzQGZxaktTHvVcePeBLgmMR",
  "key20": "3GXhqkyKUn7Ywd6oHRcgZge2MkinRgdsiAJapcB7XG5QftFVGJ7z9fqkgt9KXKNrRVB65P2yKUWWY2TQr1fuQCUs",
  "key21": "4LW8F955vQHak3pAKyCrwT6DZzBdreCkC4oVYf3LeSELnB1WqQSB8EQZmgohKLvC7i2GLiDFB8m6Jy34JPK7retT",
  "key22": "2GLJgDhHCpgw7NU2h8s5E8cKmtUpEzWEkGxCUU4hKw1Tp5pzcgy9tSs9r82SzkFWFjXfBJX5EmXsviUM51Jndp9j",
  "key23": "57sJgoesRr8LNpbGnhKaNNgd5QrYhAdaVuhp2voqEmmN5aZVdUm3ntjmzLbvTs9pK4N6jM9SUgFJXKpqoaWrA9jk",
  "key24": "5Z2pkh84dyjixdtDBCQXmcQsaaw8h5bbAVKMEAQQCW7WQKGhr7uUBFbLAPwqto4bYQGSUZC5Lqhvk465wvAFZAwU",
  "key25": "4GYCs7dCyu4FkXn2kE8kMArm6H7DBg9Nky6kmxU2fDHgHerqaMwLzk3x5TKstdnFd1rqq9MF1g3uGsWgW278Np2S",
  "key26": "4Bd8XoEvHGqFz2ukGU9SyhaMFoMmk81zsSMuSQs6BbBBBvqHueEcR9zMYNDd8VoFaKeSNN1Jb7y54tLNRrDdUGyx",
  "key27": "55HYvwkXfN7XBpkNcmh319acCofrqb1DNf7TgqD4xdKfDYkHpUmJj5twQCJK3pugzXhmHNNkqQP7u9M1QW8pZREn",
  "key28": "5hCSqcTRSeVWB6ubvQnSo1zk3ktMjw6BtJUk888cx7TKkkfiaW4iicRwzMoBmx5VbwWMmBLy45JvfGRDeAkEKwug",
  "key29": "3AczumxdmG4MSFwSv6v4AHzbyQgSUEWaVUgKjywrZcEs2UuHzZNj2TESSYWnjmsgSzcohgupavR5Sh9zoEjdohGS",
  "key30": "5BmhPmEffvACX477LktQM7WLwk6UN6HM9hAsYzQPNU3vvw5XGzj3WL6PgkRmrCqxU7nS18QeGiN6mdGDHVPVxphn",
  "key31": "4izQa8YKdTVJ4f5PMiUBNzdQQ81s43upiTWsDhpYE51b4uzEobuazWkyKyEkPVJdJWt5KaTdegvrGNq62Fznhfrr",
  "key32": "5rvVJnS2CDTm4nXKzM3gTNBLZB119cAuLibdNEKG27tSc4cXQdGJRq89PCNWJ3x9RNVeuLpkULSUD2YiSWEFip2f",
  "key33": "2NKx9qGmKvdsJ9e6oXoZSnLyPz8Z9feKShHgM6jMf8qs3iXdnXF8X8Hh6A6ni1BTpYWnDJzxWiVdszqw2ESX4TYS",
  "key34": "622DeTkPdpeUhAPTNVvBhxmVorzXCdthh9mqyT7AAzrAsQsoaq8RAeBCekj4pxKVBwqoQkBxUSaEEN3YWwz5UrmF",
  "key35": "4QSCZgaVJSsPJN3ofJ2R499UEMd2HnRDNbmnjxFhA7D18BjiwMoPbqCBeujunmFUUcYxp1wCY54Vijj3EqUYaL4C",
  "key36": "wST9nn7AvADfPHLrFkNHvchgCYTDgkYFTy6MrMajr4aFYT8iLp4NsEqBM2nY1QM5xSKiR9fGmUEBgBk6ef9ep88",
  "key37": "m1wt9us4CzFMkggAph62YJejRGXTFbQLne4TCHSjDFSipfBzqmXovjGT79nhH1ykjG8sLCVVC4pQWmvGGrUtut1",
  "key38": "2C8nXfZWvBLXLM51CkE61VK7VoQpvudLYbtsX3VQD2qAEokEyLFkhDV3vLGvPhxpGBdXVZM2WmFgBCKnuGH9PBvM",
  "key39": "4uTdpgFfZ8XVgzqfS17dzX8huTrYEqSNAxZi1NVtwvvsjJcg4gLcqBoRsBMrD1jxriSZoyEUTfCWHpv2z2ah81sc",
  "key40": "3x4WMJiT6MZ3E3sAuq6d7YAQhBcPAE9mCcXSwSpQBy7e4ZrHVrsBExKFsAfnkLG4NafGCrZ4SwAYLf6Dh2kUB4WA",
  "key41": "1Ww5ewdhTyjPrJCbZaTiWHcTyxF4oq5vM6P9d9QPYYpLQwJg1Nsv6XsPri8VpdA9TzG7YztojufKvfjTG3sCZa6",
  "key42": "4TFqFofG7tDY7bUbeHxESTYu496MCrjT9Jp8a7yzYNwiirnQY6M7tfxu7ELK3qzeL9aFWCM2BPM2SGqjqqtwynys",
  "key43": "3gjoqBeQfvF46D65ai6Q8GQSsefajPeXB9soewp96DYVm6TqfzcMs7Q9WYfSXa3JNnwb4LdGD9a6x78DXfKABNKx",
  "key44": "b14mJYirKBq6orhuWCgzMx4zEaMxeA58gYfFJig1NE1pm7wMpt74MRoRv97DNWq9WsLY3u55EMytzFQXjuuCvKU",
  "key45": "36JV2mNGSLr6zwTVbAUMkGhyX1dp9kJg9ZJsPtnGidf285dZKoi7bdkAHGjLDVsDsQLmG2bY7xQ3Tfbx48hYAuh1",
  "key46": "5EzCULuqqq5fEjRec5h3676YmrQ5fCVcQgrBt3Ti4eDCpRNdYc8hoiDJzppDDTTA5atVdM9aRsU5Gr6PVr93zSPr"
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
