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
    "3TaaDC1S9NNLfwrqj4YVAEsQSbMLJ5ndw698tiba9NA4VEpAxfSTJxWmb7Cb5UiaBcWnLxaapFbQZ2CEPwe3Vcqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wjKtuZmBzH7P3GvLnDfoTXAbsRGGYoMLvV3FWN9nYhn6AHv3Li6W8qpPWXTBTwWxBKWSodkYw9MoJsELcVnoVD",
  "key1": "ZT3xNAQ9r7xuXvgM5inGfAA9WpWtW2Rj76axzb15Tc15Lf45RHMTQ2Ae3o8gDmB9VfJyo3QyH6LBxHbtK25siR3",
  "key2": "uHpBSEZcReurYBcaqogZPo2NvxzAcwqLcu6jwhqkG67vQGes8B1B8AEQLyJrhy83XVycQwCzfubuytabVvJYN6e",
  "key3": "2YXppcUktKhKsQu4sym7VJZtn76xHFFk52LX8jv1HSVD76WrFj8zqwyr7DLxeKePT936uQkbMj7VMbLFrvFxZfaU",
  "key4": "DtXpz5BQhgZLXPSh1RZwQ7D2t4vKGgqcBDujm1Nt4fpTdLkLDVjSzfC1o1spaby2cXXxvYj6Um2xSu7cipCoPev",
  "key5": "hJieQQSdr72yQNUJjt2VE1bffBcv3zDrtyPArZNMfnVCyUANuPnad2VziwVfWZXZCvL8mYw1cVVJ6Ra2r8ZnYsG",
  "key6": "2WjXn8c9N2S9stF5BzC1wXTeabjHD1QTewqh4hUwdFw8zkf7SsyfPNW8WQXLTUhG6S2P8waacH2JpU21jHXSb73F",
  "key7": "44JS2qdJMCJatm4HKaoscTL6fY8oMegpQQhWm9ZJWNMGzKpgUqHizorE6w5KCpyrtkqgyLKqFZ74Erxbs6CQJMKb",
  "key8": "7r2Q9NuuCCf357SbELtoXyfZgrkfTdZefvvXbPpv5PEFJBubiUWCSo6jHPgx8ciiyHHssfZCaTsbRMfUXX4xaVT",
  "key9": "4aPrVJA8bJ3yJsVD2rf9m7qT8C2zWjS461Et58VMFJ298Kbp6AzDdLSwsPCMtZpeF6fzHwHuXYMSezc4i3hzvh56",
  "key10": "4ZgrVGW5TdB8FBHd5zc27GdAKh6H2EaQMNhhr88PfhcXDbpz13DMiNcishcvFtPZHxpEkRB7zrBcWFcToxt9Pyxn",
  "key11": "3KMTJZegKJjch6R8x4pJQruiVNcbWsuU9u3sQc3Qjw2j25D62Ugeods5ufEtYGqxLryQ4GCna9e2nic9dhzDfxZ9",
  "key12": "54qJpcpaQLNh3WYSyKNwMWTghH3SVzHMS8ZhvoFaYXWz2FrT9TDjvSyPGJH4UpWgYE3FS33tRRx9wswBCjNJaUTN",
  "key13": "5m8cwZ1mb7cVUPnMo5dJApxLFgN1JyZM5DreD1PKfZCSAc9CagdFCuYLSU9JzdCg6XLf3UBVTTPikmLAjonHc8wi",
  "key14": "zz7EviUeAhDZgcXDe2gFbnCEuUj6GsbAa776Z17PFg42RPuyxpro1v9MnDb9HwfpPfXhJ6DdvuQWtEPvngeZJhq",
  "key15": "3ycDzPujTam4h8jePyfUaawzwYs2F37EV1JX9zrgiaWSMVKnkogZTHnxjRzHyR7khcnsxuRnGrMT8QX2aZW8qdjj",
  "key16": "5fqD6NpEtMp7QSN8UcdcvTSvb9KcfDMbGULVRggN8nv86p793szutZcTFiGXVf5ScT8PUCeL6C22xzBsrbTz6hYx",
  "key17": "oPn8V2LwQGkKV5ocADwSwZWQRgXBLD5SKMWt1B4fsz9corXPBFiRwZkyQADbNn7YBxN17AYQFG18Hh747PvHSrQ",
  "key18": "3sG2gTjU6Z1SgCff85MLb1ytTkP8u8i3vAqvLox8y9nLy4fNLtWFe5ihLV4BVirxDL281z5armtVW4TQXVMfurLJ",
  "key19": "RbpW2kuve52YAKVob9hFzzqEhzPtK3hu5zoMuzb6rzBaZ9ZAHJKvCJVghrfFmBDZSfMtpCz1yuuShFigJRkqRvS",
  "key20": "4VZU54UBCGHkWjgpdA4QvgDN47X6bqaKqMRn5NpKfqh2YTpUUcF2nGhE2MWpRX79SQNnNVxSKK5FQcY5BzRKQki5",
  "key21": "5hGThVgDiibC1umPYGaeC1uFgSaZZiDoeAhDHjTAfE7Ca14FMGQUPqmZZew4uEssRpEUChiNyX3tTGeYNc15dkEh",
  "key22": "4ZeHhN1QvBNQ6G2f1BNSicvogX3Mn3BFEwf3SqyWrvtqgmgJ5oASV4v5D1iQ97aABTXAPHu9rBa4KqfDksmzMzeF",
  "key23": "Q66n98txSyMtbuBRH5HKPLSUi6TDURo91nJVkQYzrUduEHx5aDw6advUMxK8Lym9d757iBvCEXPdRZzSdq76x5v",
  "key24": "5Qneu9ag1BvsoHcAygUEy7crkQQV3R3jHdpoKnHstSTP7Cxkg1oJM6oy6ZDvGxuagkb2DmyBkn1GEaHoDwZQqwe8",
  "key25": "3ZcpHjmRKsgQ4YP6Seyoeqx4wGXPpVvSJ6hVkoGnVQY2H1LTQWAM6jwimkyRZ1D6ceP1SL8ro2rmTGWSKAV9j8EY",
  "key26": "2ELVcqjRN89gJHwMZgS76De1A1mFVuFYeNEv8i9TeYKDVkuLJncUUTaDpygYoDsKg1xtRdBNDUQSawMN28VGpkgr",
  "key27": "3ERcNGUVyXrsa3tCS43mqh4igvBhU6iMHLQZTC7zSj7awCz6BTrb8iFLM9bEopWh2UNzzc2fGqZKtPm2fwTgZeKL",
  "key28": "2BibrNkPrJQ7dWNaunHdkecgMAZXJecrgNqEjeYc3zD1fJj4sXkx1o7aSbVfsyV81oA9M9mgWyZkdZNyMNfb7UGu",
  "key29": "8VEtxJtURyScjdjhmpuFq7vnVnUyuW2cM8UeQ4LwDYxp4D9MSEZppgytdZv2CptVDufYoNNGUvDmrommnt9jgof",
  "key30": "4qpmPQt9SCqtRULSUDLyVz7BM8XEjdPhdaGEhsr1fAh8CqjNLwjDjwkYWVRWBf57bZ24aFrapcY6xnS3bwShRthw",
  "key31": "3XYDXQSZf6qXZsUZaDoCCp5uJ9pC2WSqVi6txgUvCtzRhuY2G5AjJTeXtheymLpfotHWqdYCSfKrbZEDvZonzwxB",
  "key32": "41FxHWhj94VRBTaQVWvmow4UYjzdxQ97FJLLcjzY2JJDFTrSTb5LfxpmcSJFqp6kEVSyrwMwXaTdCG6BkhqpLkQA",
  "key33": "36ByWduLtgrProp4Tnf3oTS7jkR2BPs6aQmonY84o7h2AuQiyj1EPphKMT46mKifaz84uumxHobCihzSzazYjPtY",
  "key34": "5HNZjHT2xyyyqDieYq5VQCSKZYFMXSuyx2Y34u8D23ejdJeekpWRcRLbWNNqsjFu8pTD5qKAkEAyodXSCntvqxQP",
  "key35": "2ifiGR8drLsizF5qrRLZRvykeGK5gU3uou14ZxXwohfRPsxbik98F6RAsc2z86WPwfSoNPBiQ1Kckn2hdn6mpPL2",
  "key36": "2EPoYUr57Qtxpmi25LJMWFTAJEWKQxwsq9a1qVEKqRBHprXhPhqKATA9JuDgmceucX1zDjrBrt1vRSZA6ZgsuCLB",
  "key37": "zE3aMdy5qnkqXGokXMWPkajibwuWbcXdGtG3zK9KayfGscUmBayp8Lg41GEDz9oQ8TVrVBfiiUWvrVMKcRCGCmy",
  "key38": "235f4Fh38r1NTT8vjTsCMcdvLQVKV7tDz8qLksTXTwDfeRM9LGCuyx8smJu15DaugHhhxViBxpbaNoHCLUz3zcpp",
  "key39": "2zs7UCL51yqPg1NpuTNPmdGHbSGJNMerPKF9yY7YkCaHTRzSYnWxqXTwdM6E9p1CCcM23sMwovnru2ZK7p8iMRHF",
  "key40": "3JUVj9dkGNa7nhqB6SQrnsMuACHK1BPwkU4Xt5fHa3dHp9Xtwf9GTu4PUNPNbszkXGeqMXfHNHXbU6XrQwaRdp1X",
  "key41": "5wahW63PQXWJny1UVwayeAasjXyEPcvWTm5iEutPNqmfzpX5L3VZi16GW3NdL4oFH6JRgUVXCSUdwKqyMq92WiZ3",
  "key42": "5VTDu9Hv52nW4fDowLz5EUTLni5raGFpRMEk4oxULT6X1eiFFSrePguMT5p7sCiTjJUgs9KEbLkgpXYxsay4d2x9"
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
