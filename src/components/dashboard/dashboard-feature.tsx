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
    "4d89VbtruibC1j63gPXW7PDM6T9n9e6Lahrw6V7PAeyY2FnLhkFWRDKgmiLEQtd2pDFSza3gbdPwZC8ws1x7UixD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzGsFkGiLKHeq8hn2FzeMop1sYc1mtuoExsSDGy7qjFcG5r4jTphWykjdA2VVw6KqYPDFTwgyKSjBgvL9BvXeJY",
  "key1": "2m9DJAyunEbrCuQtP5GBCGJsupXRAC25uH7h73xhSnfFp6QL8TPcvpker8XMQov5YmfHw5zfKBYV7uQ8VHNiH7kF",
  "key2": "22mjHmutJ7YkReGTAjFnGEznfimVbXA2GCpkXNozuy9ff5GHirFjAjTGKp8VEH713PfGU5r5MkJGAMHKT5F9kYrn",
  "key3": "RbeM19MEaPLFsEFn5z1ioxKP8pKXBewpgyLNjxrYPoPKesSuW7d4esc5rNmNrmKLwmvexzz8CicWzNsj95LfbL2",
  "key4": "5RDejuxWfHBSmHhvXArRiuPznJZJgGZU8MfZ3GxzPKFqUg7jRa4EKMQQFfF3qC2CmpRump6KPrrZyuyMYGan23dA",
  "key5": "3exowjjZVze5ZRYbMmAUnr2mDG1RfGCuDQeJgMuCXRkyT73XAcudQs7UBs2gJHZoDLq9GqzyAcqTGBu5CMq8qHDJ",
  "key6": "5aLJCh4xzr1SWe6siF8wepouQe7Aium8gCaSuigkmvJaSePeKYeRYKKmgp69wnpaGPL5NcCtP3UGBhkzRvAPHhmL",
  "key7": "2Hznmj43QDj1B3NFJYXC6tV5qZtFcYhw4EAJ4wpynCvpMjmRkSsdSr7jf2DU1DyEUZUdLXNN8Lx7RanCkekDYCQj",
  "key8": "3DufXy24EoesDyPPeo2q9rRgSbFtsJw5BjSSXBgPYKhLxhBLmXjj2poAHXyJkgjizhUP6D3aALBgtcLDkPnGmoK7",
  "key9": "5MCwCiT7oQTJUjF5icqesWNxTnbBxZBfoVLk8pymS7iKAbGbeKC8zJnJbo1tR9XpQ2QLzJJuRu42iznhiDwtahvL",
  "key10": "mUj55ijueNKvvAkktgjk8hydXfwEYZHQ3JVmphtSxnY59L4Zy3jKkbeFy9FPhrJwcYiFS6fHAtn7yD4PxTDnYVz",
  "key11": "3dfxxZDV3PLEKgjN7nqi4XM2UXShQZutVSDTJAumpQHnr4LJj6VE9ekk3RukeqKWAUxfS5wMrZQPrBSEgcXUuLvR",
  "key12": "FyTVRzK2T5cNDxttDGuYBTgxWTBqNFKjSZ7gnwG8NUWStKM2z9VTwUbsQNLqtvUnXfUHB8BEf2utDDUiXHahkVV",
  "key13": "wigV5Vy7cYyofwYF34uYfsS2tnnbVEK2Fit21ZEbW9CegF3Pt6jxR1dmVbkN2RstzWkfYd33rb8dpdKpcvJehL3",
  "key14": "3P2psQjUX2TdyUqVBJSFCHsEYHrwVzNWDQWAvS5SDb1Zgdzj1sLEGTCAmT5eDchPqVZsDyF4iQgZhCWLt1cJ3Ezg",
  "key15": "2S8rGQeQVkNPd3zuSMwU6HFytPBmaozYZLtcv8dJam7WRu9gko5KNYziEs9vKJHtzQuLkUJxZfF4DbqnjkEmw8F2",
  "key16": "Qg3a49vvLZ65gmMp5LbSDC8HGk8WuQdX1EyEHK48HGugYv6iQhd4Sa5JB6Ppozhs4xUnFJZhBsoRuDZt3q3gSXt",
  "key17": "33cTiKDmRmnHBTVd5kNGbM1zpLjm4pyzu9WPn5aJimMqMDCQYoUT3F9ZPwVUpR63Gpfr3zwCKMMWoFs8H68ZMyNH",
  "key18": "3NWU6juGfBzukVLjYXxV9kYVZopVPGmDfUu2WpiL1oGa3BRiCMPLqaDqB2Y8AsXyL3fH7twdZ5Q4uZviGpHhjQGg",
  "key19": "3kkVHA1YewNaYQYBU4M5BumzdPraoFA6g3qqr1FTuqSbswT8mE1k81wrhTF3WVe1f6ZJKfm3UjJaS4vfCS3B2H9D",
  "key20": "3kkVe2DcWbQ9K1piwi9AYeGUTrr5rdBSgbCgWWH14FiPLnYqwJhb81qmGy6eEMeCmMBzPKjbeeUb3g1mSuVLQqWY",
  "key21": "5yZGmRvioNT3EQWUizBvkR25ZKkoTX3YmvgugEzPW4aDbvpxymnpAfQXwpyLsjnvQLRBf4F7geMrCuotrzoETA8M",
  "key22": "37rRRwxPWjEdqENvztjxYoWfFjSyTM4t5evgSDTey6x85vauBKLizsjEzcpitUUP6gviP5XsVdPPK33UDJGz7M1G",
  "key23": "4HS9s64bQBso5pQSG7zunFJYGp5WDAtBpsJsWjZW3PfmCPixvVqkyCYx56ZKxNmEukev8xiMfZu3bbXvXkgdfTuX",
  "key24": "3KewK6iMrCmceqDjCo1s6YUFn2YQPm81ZR7gBL4QfZknTNxf2NxX5Ly6MAWjdCj8e8LvqCB9nKZ74dEnWQrLqmiN",
  "key25": "5mpfxmDj322S6wFA3QZGBQjfWb6dy14Zoi4KAuGZiT7ixne8qzWHDZBL2smKi9SAmv8CZNk2FzYZJR86t7X7WqBp",
  "key26": "4mq2x7HvZsZowzg232PqD8emCsBTLDynunZ9J5ZefiaYLFi7bLdVaFDz7gfQNoyuXb4FRPHKcKfHxQD69eUkULuG",
  "key27": "LRyV4Fomqiz88ZVayifpNQZ1rYc2AvCx6ygue4dZmGTUeme4kK8xrcCcEPsU3xgnPHsQkJzXF6kZpBy6nCXtt2A",
  "key28": "3tHcjjQ1SsTn1wSxhTTnvy7tNScvQHu7ySvWSgdRcUUbFyDmwcTyU4sEVRyNxLWsVae6afKc2oTyqxLqdh5f5Uv3",
  "key29": "3d7purE9kpt1v1yYVdVUiAbbomBBPAsP4N9yS5mf5GWkMKjX4r3mX6ynua8PbL9vMkyWfR63N7nhpHfgJutD7xfr",
  "key30": "4YHxUVV2MuXfPG7DFdjyPQskDvDJAEA7iXV51feMweUSKdJmchS1dd7f5Qp5G5kxoQD7x6YmX38E8MG9Pp9faMFm",
  "key31": "3p7ua1MzH61UJedpRGp9Xwm7fTSXwz48biPHqUxYdjLRoX1vEh9cqwJnYWhqK5UZChqmXAUSif6saGC9uZHY5gA7"
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
