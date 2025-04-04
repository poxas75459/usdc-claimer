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
    "3iaqtBHWTn8Eugp1uUsLjo7p7hBX2C7FVvaX5LUFqeFxfH6Jj6KXMbjzzYhLgvVLkBs5uybmgzVYqUwfj9iSyFdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hXgmV3zHMc3rsM4bsfjtfW49Wo6p2n6xzYHshni7eG7v2zT3tUrT7UknaScjbSLEq8tHy7ZKLLSmuFREzfoyYGJ",
  "key1": "2sS8e6QQAWsFMc6MtEMLhF1NTvCqX1297uLvJzXjBCqXPExYhknUGo2vSxBC6fKSXQFtwKEEtJbR1uUXAMrjbMmy",
  "key2": "37gnp6CnbfBgziAL1MfVdWALC64MNcgVwgspNcDeoUqPsUu5mvdbuHEMyPMXveQeTbgKwrwuAD35ZtE1RAVR5s6U",
  "key3": "21NbXDYaHnPzEu7gwLSLh5qn2biREv4KpDNzTfzSTXYuFszmQ84ZkSV6cjxgbahv4y2Ry3r1MTB2PDQ5zYvGXUQX",
  "key4": "2jNZNxYRRG7qvRk66Z81PCchXVdPvxMuVZusCYcejP5DyjoSPtag6WhWjtDck2XmiHX8BDJqDtG9UVBbdgwpVjyy",
  "key5": "5WW3g3z98sKgYhLezgL46ajrePCdgv8uMbDH2JRC96nXcM1UcrfVbsCLLzPUVRfZjxDmkQx7XXuDi6rmQ3M4SUmC",
  "key6": "4S4sWi2ihAmHe4qzy5A2CmEgis4k3kiJuSce5aVaDDKpnTxS5Zv9iq1CnX64DmWK1BM93KVZWR6C4Y9NSvwaNHyo",
  "key7": "2Eqiw4fomXEU91oZ5Eh36iW9BN8BiFALH3GbUDLEWFBoxpdYKByvEMDTCZ8MZb3GPWjyhqHvoBaLSENVcK62LzxL",
  "key8": "uDuVNRkyxvjPmwJvC9bindPCGTeifhc7LqqGuB4GhDrrunvsGt7URGuMaYHP5ikGs4YXYYHY6cdDphYFE62w8fp",
  "key9": "3rsYE3pVMRQeyjgS4MqtNzsAetLoTiqZXXB3QZDFo3YCfr8uqwDtzj2ZbC7VXCtgHTJ2zT8U8peXs8Z81uSFgftn",
  "key10": "3G8CBtwfYZp5C2CqF9Ac78GK8bJv3mu2LJTCgs29TUyVN9LSDetie81M9ko9EbQFfgHixny82UygNXt5BoHLXYhj",
  "key11": "Qcz9M8UwgKpoVSSZWGF1Cz6X5F9tuEKWgMZ747w9xNnyStdJ6CAYZdU9pC3VGitFptkgdpwUDevNy3QVCrrynbh",
  "key12": "CbGomWEYkpEFVZbGeTvYrL2FqYLvWro9tjs44AL6PA9yAWZVFMkfWuEan7VJRPHUuELhf5bq5XKwDAHN3Ec8H7X",
  "key13": "4zHX3AV8TPavb713KFBxRJzb1XRYsp9uegBX9VYuHxNmHZ6tUjMBZVLVH7eyGgLZmod5CyTG47XL8cSnJpRfKua5",
  "key14": "4MbnmdNFDeWyKYznKxD9V68vXXgJX4DaDGvtoVTrKTzwwedWPcFPcrxcZFarsqvLRsPdiDkVTgKH1BxHeetckb3p",
  "key15": "55QZKXbvH9TyCY7gUeKFSa1AyfirerX8HCWL62kayubYXVLH8Vghgr4xgXZfEXE2YqgKwA5VcQiWvRyJ42phsccQ",
  "key16": "4cz1MG1uMzURaP3XLU25VbFq8KAm2K1SE7WnsEgt18PzqPpQiJVPEBmedxZtTdMWvUveNkg8tvfJiDBqoPm5yfB2",
  "key17": "2Eb7qj3mpBZJv2KkMP5zA8TrM4duzx2qXvCGYyKCcdWik5ExaYrM2o96yDUMEmVDdQE8ftpbSuTHETvfERSEEM8i",
  "key18": "2KLpKMWpBeAzahcgdU9wByKBCabk1AtZjbXNeHdUThLhjwmTSQTzGp63aPWA1NxaG3ABWpDjfvm5c8FiBV8UAbpH",
  "key19": "5fkt9uaxJDSCWooA3sh7ZUp3qkSWWMtASFRFeJqbpMDj95ZxSf75iiwcbNzBVsuXZRn5RGk5Loya6ewP9xe3Tua8",
  "key20": "41NV6ggf6yxhWD9gmgFzTA6MsTTHg16QL7qee1sGGaUFuLQQ8V6LaVSVtjGyhZd72cCKb6117AdLGRxbS3mcK4Wt",
  "key21": "3TmmR3BmW4FYXzHMQWf1ZVxsT3YD8WVAYVzF4xjhYezBMUvTWyhmnL3sykxaCpQbV4HFzz97g1SxS6zUtMkSCxWM",
  "key22": "mETJ3hUrFemhhDisrSXhcoUtb7UrJJ76bYiAebRjfAmbe4dXq13f29pmGNqHuf7iFeB84yCqHCo3Qjv7ZV8buGx",
  "key23": "3DSEY9tvnag6vvpkhgVTj1Jg8eUQ8UZHW3YgBkmgofMySwycFahgJczMkpSUi2rvGaFTSZRdSRtLDbGn1g9mYE1k",
  "key24": "36JE59TFHfvq3kja4cxHfTq8Lm23oHkBuGLZ1ZCAa8a3EtJdUDa48h1uHdpmudkC7yii8e7MFGufitFraUDBiFUN",
  "key25": "ypcKRq5wjCW9yzPWrqbevDVreqGJXAP2GbZTLv4R5CVAv3oY8iVjt4tJXrtovxszvApJPZECjmSPoUdW264u79G",
  "key26": "4nLF39SeESmxKS5L2wpeHqDXSNhE4CnkiTAD3FBrfi1FDi2arQcAFvvQzFnLAhK7ZErefBEqs3Nuw2JdALAmHKNN",
  "key27": "2HQMSh8TeZAhBsMi5i4LrFAg9ZoQbiSRngq1WMddrfvd3XSjRiuFqTWVJcsvPH1inY6VkgtdjE5ECT5zkseRGuna",
  "key28": "x2WnNbUKLXfDd4SQN2sgCF4gWoyz4wFT4EqwhXe97i2z32Hf8VnYBfbQTBtu4yFzUcv3kq9iFKeUyVNUdPtGzg4",
  "key29": "4MxEfKjYoReTLnXTMyQFcpKnDNgwzR7gR3HtW6yHz51U9hK2CpMD3DKvDLt1KMzuN7pEuGULjM13UMbAF7c2FySz",
  "key30": "2FV94639wvKbxH9LJmXATVQS3HCWa9SAj5YRpNGkXTfsFu73VKAPiUhJzukmen8vmFvsXCVvJSy3eGYGR68kJyqq",
  "key31": "4Fd8bgpZwhJeZczhQacxYkE2QfGaRC8jwpRr7NTSnX551zMwL9DszcEALJBnFoAoWnpGzDphrgTqB6hDgpZ5pxBg",
  "key32": "2ZqGxUypbTrDbrdg8gCSQFT29hQzm6ypoEdYvNvWQsmg9nhNPfzXoUVosYFu8b9UT1qPbiTDXAXuhumWhcNrqfio",
  "key33": "4HxANBDWvLYGZafHQ66o769tpQWCEUfNzVBaf2MzBukNnQK2z1ZGThcd4j4af5VJc9HVMHfBVqgBVLi3rHTwQS1o",
  "key34": "4RrEQ4XhcrTHJTdUEfqPdqmnT7pHdX5yYpJ28xXk7PTGNa8RjjcEPGrRVFhPdcxaZZLN1KFSv7VnUcwHPRgd1NQc",
  "key35": "482pz4P3c5Fc7H8CiLQsjJhgKsfx1v465RvzbXcVbTRvveQ3zDhRS6iobuAqm3XE3a4KEpSLqyEsRmni6usaWXUL",
  "key36": "43go8ry9Y1WBYfqBsCqkVpXxhf7hLhze3XF3QUST2tWTaYEGbNq9S6UgawTv2GDCd61UBy5im312ZLygatbL6gyn",
  "key37": "2Co6GW2i1pRt3JAJWayUjjTodFdnF4pM8pgz9Agkc9DVB4QCX3JkSmGGBZeAEuTgSAWZrAShy4TPnwxXn5FPPwwq",
  "key38": "4Qk99FagpdmgupE2HQFG6ZaRKWccQu9AV8NRNYS6RVSDuXCfAiyGxRWrfk1BznjJz36Mm54mXtfJhMoDsE9mWuj2",
  "key39": "4bCGjpob6gjzPMaYE86Ueoez8sS8qE2GyLnNtsZnGw99kgJnV7FVXQH9sLHA6ogQxr5Sgq3a9sHUVF6x1ywuS6p5",
  "key40": "3tDGjmqBC2sbZiELqo6Mrz2tEJJxNZn451FuSM1ULH2CPdpnyjhwRppPnZuogkFRZRSUseqvfdBLuKAzPAgaHaCy",
  "key41": "5oDUFmeCi22qjxiFifuASEeHyneirhq9Gh4xev2891nddndZwbwbSXrXBm6bcpqWCm3dvMgcrZwW8j8SrMFGZgTs",
  "key42": "5YYRumMiUKTSrxaUfbeRgtdWqA3uvjMAbHA2786gJ24QSwwHECjqKcU2Muac96uEa6YkZXQHpyzvdmtCAy3RMhey",
  "key43": "5bTta8o5aArYGYJXGmC9xDK8DwjvL9naBKTPanF6MJYiWFKstwAvEPqwcSrsPFo8brYwzBuwajV5E4z6eePqbU14",
  "key44": "5nZ6QisRkc5Lji4HRLytjWyWbjQrfFuxwHwWMMRcgXqAViLqqhiRmmCMjQ7wywZB3NP7BRP8fGcbYjSar9BuZdSi",
  "key45": "4yMvjujumGH5oCAZiQYj7wmYjP8yCd6obcXhCuMNQZ5bEAVbBRmznB4saNfTnXtGvzqjfJHBFCxG3WcWnpYvkCJS",
  "key46": "4A2v1J783kxCWBtcMZiKQ3rDZnN6LGmVRbT3X8QCDBrrGaMxR7nnehDaqEQPLaLj5gzQVmz7uL4idRfqDhyj2Tjq",
  "key47": "Hc7uCQ8gw2JKF3b5ogrsvfktvyiRZHV6ssEFgtamBuqMkei8ficrXHdaT5GK5Dg6u6kE9vPZ5Ya5am3RD6aksNP",
  "key48": "vdrLCaQ6vWEPqiZ274bCEP6ckambTXDtui29B1HVZ387BkWyG2uE1FEiW2WFX62WfNYy4GAi1KUn88WSWKTHkvg"
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
