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
    "KxxMjLeJJY1G5G4SRL66UgaBhcRAWyVakAXBAAbhc5v17gA5A5sKoo7FM3ffEmmM6kc7Tj8mfHf3WKXBcXCuG6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oU3ydWVPzPtBdkwyqfCigJJJTamozgqAZAiKrisfXnavqmvsrj6JDPrVuKumAMvnBsCjM9UahWFzoRDMrpnVzj7",
  "key1": "Svt8v8JmjUfYzUzPGccySVD2nTuscPptEt68NfnxKTnxPcNFaeJGiXepHvRJczvsxs4ob2Z8pkz2L276eun57y9",
  "key2": "2cSLBS9PLsg9AxFJkXDAwo7mRPPjsvfjgoLyvnRtC7bfQDabagb6aG8fughsJVNuWSB1dpDyfbrzyz7NmbbnLZbb",
  "key3": "xATCiKGE5GuW3YKUhZQHCuU27eHgPDPypzS8ooZ9ggjDEF3HxEiHQXKpXj5DnLXytCzSpdUzLbSjdHxe7N3M5qW",
  "key4": "247TJnLgXvzrPNsuf6r2suqopYVE1BRfhbVDPujxgshvmSdYnurNHbcBm2JmhDYQQWXcyDo54gkpZbE67qfFa2xC",
  "key5": "5J1Jwr5NbwUWuX1goQXmVXw9Xsw3UTwSMiUzx6cDHVSKs5Xpur9MQUs9At7QBamyELcxvBpLfJqZAxD5iuJ88uPi",
  "key6": "2XJtTn4KuLA81EmxZ781dHGYDznHeBorNSEjtzzX9ouoKuGnyXbwZQMjdLkAj89evNaEGyL83iRYhCjqAD7c6nWZ",
  "key7": "57WJCoVXwqcq7HK4xA8xQB28LgQP3WugbAHdCNkxWouvcEcjyjo1juzKDSEixQWaXBa2vQFGoH3Z2jXVNuqrqA7f",
  "key8": "6Yya4sYFCyERYFApZBQjBdGhnF34uNbwS6XtZQn2UoZ3wSQgKwpza5hm98j4bjjJPkmEbugqGfzpdqstgQwzFQF",
  "key9": "Kta7oUmDuHEmaH2bTFCDwYKzgsJTLHXkpejZz6PxBPDB2SAgZV7CmerkDMroKUDhZ4G4M8oMnk1Z5U9TXJ3vpLH",
  "key10": "4nsS5WsiugRtwmf3X3WySZZy1iPwRdjVTFMh84Bm5ub6KvCdWr3giD57v17XdHnUT7qQYwdDPL5NGPWE9vAkmdAF",
  "key11": "2Hk61BPmsLRpPZctUsfj7BVTsFm5ACxDYBeHVMhZwTyEzUz5eaqPo57kuXaKHPWt8gcWTX2CcokMEDze9CgbTvgS",
  "key12": "4jwrXa9MuufZ2Tfb2m5yabCWDxgGoWsRBF4nX8CKGS6rjuDXX4sjNMvzVX2jDsqbpPbEY2zxkeGVLBWTJbt1iagJ",
  "key13": "5UM91BYrHtvcfHXoCd192PyQqVh836BGvL8McBQim8T1JNo62baycAumEhH4aFi36hE2JbPnwazFkSa6ra3TkVNr",
  "key14": "5hm6BSABMx1TLyut4ceiXLuGkTYsyR3KaKUUSpakB218iF8jcJ49H2WMCtbek8AJZKnnF4EE4RwrSkKW6e8A48Q3",
  "key15": "4MVkT9QAoojjdnL7CK3ZvUWqJUvYBg1SxfsTY6xQNBwutNMYgHENySL57VijGMmEfN8He8nEXJ3HjdGbNJqiCJS",
  "key16": "1RNchz5LYJbYLJRWbXMmtSBauesabw6Vh5RP948znYUbZAxZu5cZrcHf595vDx2FVSFhNDZAqUNhSRt8naRqDCp",
  "key17": "3FmySo7wd2AteUP428JosQLAaSZXf9inbzT3YicdahrU336Z7RqcB8oDR75py2Q1LEKgYdi5ZHXR6WJFaRGR29jf",
  "key18": "GsZAc71vQB6dMhTHkiJS25EPkC2RAtYLzgNsj6GbHZrjUEUWhWEmFwJrSxpQAuFDm5Wfd6BoFv3zccNdSjoHq5k",
  "key19": "39DmLkjUm8LLQXNYTzrXa4twgfgYPwtg7s2GKRoSsoJmSjnpAzHJbb5bdAwP7jqC6oRy5BJJk6NfanfVauhswVZi",
  "key20": "UWyzEYWHfs8BC3Pm9iqsDaWp4avBpk8MpXGfqEhFE6LzeXU9qaHpS56dDokHjeLfx3wB4KSqg7CCTobMTQCkVc1",
  "key21": "3Gx6JmTrritu6kJFdbDuTZeF9mon3D1A3CexZu5E2Ws9uTU2kMnwZhxQWArnsiAmfHSHN6BVHxMxF5tL5fwen8Yw",
  "key22": "3APf7jVHR5wRHp2m65Yw4pL4Fgs7eZAg4K3f8Vp1jYzDWkX6ej1BrjbWjAukfoY6PKhGFZjhDmTBggnJUvJ75aKC",
  "key23": "KAFLERWEhhTNH1awGoWxYh64hywPrnvcMLQt1uqXnTJz654315sKaenjz7H7KDGZYE8yGcvTcQ36GBEsHfvgoAR",
  "key24": "4SFvx5jha3KBem9xMzTegW2QQ869hnAr8nD7rYpmSgbFA1zdR5KjHxZpBSR1FrhvhXdNkMkBS2a77QYuEn5Z2UBq",
  "key25": "2uTZQQWFKqzxvr5AU4khu8wLgR4XaEb8xJzu3bH5C2dpi4eHA1h1KY7pj1v6pPRozHgHpDZYjCY18C1U4PYWusHZ",
  "key26": "5UDtYfHvcRyqdRwN6dSsEvXq9y2xMqh6t6MeopMiNgWAf5nwNHbF9RMpC89WNBaruHJRnH5HUUCsgjB92r6q7uuC",
  "key27": "47aSmavmNE5JfnKiC2wrSJXJCRrccDQgCCbB9EDb3rAEG1dNU1hrEw97jjrmKjg5WytEDUraFL9FWiY97zAfpBrz",
  "key28": "2zShTiTmVCwYuVE4FkGefQRz9EDr5j8HPSRVDTzQftPfF7fsUgQR8nLR5aUC5QxA79EyKVL1Nh2AuxoEEEVFmwjc",
  "key29": "4in11PhasmvBugFta3hAB13Lk2fp2Qjg9FxLEC3uQdo21oSeWR1urpAbmo8ukL3svYk3yBokeec6Xhz8CekdhhhZ",
  "key30": "31oS8bMZMnpYf7ZJ2QRYT12Sckr7Fgd83p7dkzfQxNsUWTTDjaMFkspNsD4eySFG4mQtr3Cc6U5J9NZf6JRjKu32",
  "key31": "27NyziVYLJUSrddUawzhapsFwCVPHotsWyZujmT32FyqwtJ5W4DXCC6oULgKDsCExBcJibaUrWd974dsYNv17kWF",
  "key32": "NRecTvzMK1DDLvVGz8j4CHbLJxF2ZirNyAYWNckU4zRZKsEG2zJTroNEH6JktNLjmFhKpTVPa7TFtv8CbFhGwzA",
  "key33": "3zpRmLNtTNkQjYGuP63VSdRshqfdaYJjXL3vHwm5q3sMGjgxxXTv4oZjuuZ9pENwGtN6FiMES6a8FkvSEM33KqWh",
  "key34": "2GqSmjC6RFXRoBQdv7ucpteHTYEMXQSeteSASVi6VW4LkDBKGw2vqmytV8P8yTzo92i7sShFkZsuXmGLdWkaGJ4t",
  "key35": "expzatKfKhRrRK7Qsh5apQYUjWc12WfbGhFBS3iXPZzADvA3BT7Wjy5weM9HscqWBe7VXoADjiy2csdaLbm67qH",
  "key36": "4ZHfkH3B76AzjrQyhV8MbvYnvgoF7FRaBV1J3W6ub71fspmzHxaYRp8XGiYimTixewUFFjiMZrCEbR6GNXbJPX15",
  "key37": "5xbvsB6y441QiAvWFtmQTymxtuDZcdnziv1oj8S2abgr5eu7oLk3GdAhueifsVQYtAntXCtMsZjkcQpFqSi4y5td",
  "key38": "5EgW93u5Sx2JZtPSd6Fq5egN5p8ceHHPR4wvM4boatz9hkh1ZYDRgugYxVw5Wdw8t6nYocDNN75DW5wb6PrEYbbE",
  "key39": "4Xsgybivz2SotEdp5hXMRcvJLqxiAZQqnsW9bjM8w83krLZEFYn61bZktcbv4BnNDKV8FVB1zqkkvDoE77LSDoBD",
  "key40": "4HLTg2yf3rMN6Rs6Ni2RNd6bkU2Jxac93qLbqwJCV7xH3VkEcXruBwic8yUK6sNXiHSquA66pFQeLRwVzRPFvPVG",
  "key41": "5C7PqBpLNzFbqesL2UVJsCDxSQ5g3sJTFWDirJ6ibqddGZ9N4UentTA6jDbNXrqigfdhKMz7EjgSLCZNVxmBmZKr",
  "key42": "t6sCsqXMgb9gDXBYPEM61wcHePPYAVmneBkMs4Pgx6ACpBHurMEA3nNgo9hYLTYMFrR3MtQ4fkHR779M7bMg3r4",
  "key43": "B9pbdza1HrfHFehnRh9kBHCL7nmf6U3YabAgmhyVedNYe2eTjsWqu2DoXVNunWY7oJv3U1c79xH34gz71qxPca5",
  "key44": "3RpA6p4Yam9Ez6a5N3L7qAzLcZMbKCtMMN24JWrsN36V3naj4MtCKvPoxuR4yAxvK9vpCFqRgxCHptRashUfeq3V",
  "key45": "RMQiwNf6U9pMvAsCdnWsXthCxi88txmesc2a7v7s62c7u2Mr7DN6pgg71RHozJ2BouanysesqhpjXdGzETDLFid",
  "key46": "39UcdvuCi18MXTdQpy2PZUN5o2ogNDjUNguTAjxvcCxipXcNRvhEEgRqD21rPVBCkZabHpgbyexGdjCMFT9UgKPT",
  "key47": "2fsfFtfXhvL7m8iymgdCRo948VV6vWc3i3j7dqDEH94habywLcvYufe12UNvhEkFZfTNkcALv7tPNpwjQZyvXkPv"
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
