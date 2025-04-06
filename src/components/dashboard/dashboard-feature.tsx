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
    "44zh6mszitbX7fvsH2RydgHoCsjRAQwzGuNG3Qf4snXQLVUN4eibX7u5gYTEUbBgZM1GvUzCxdCP7rF7RrdBvkzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xx9xjf7gHBBVs2VDcLf2Yz8p5ZsDSrcyGPgHc6T5vKnE1omd2E9LfumUsHNujosRMQBPceN6jAVWwpdHXzwwiKx",
  "key1": "insaPA7FbrwfJ9GsuMieFKRRsosSwE75vAb3uymVtaUs7XYmyv6HxhyCMdKK738qiRxHisSVoV7B63Q7gD3jWQ2",
  "key2": "2i4qhKZNGtjvRm2g8mmp9ZZ22EnqNqRzfTQCJdjSDRm29ZUixGQDVEnpSuGJwTp7PgEEd343TrdVBk2444Htuwrp",
  "key3": "3DM9TJknEn3cDVDrvoeY13b4Cw7Wz4ybDgyENczQcTBEVXyDP8nYTdLAeGZBm1aZjMsXa43TnR9smB65GZsehC5r",
  "key4": "5PoG1RgQENvkeukmRWJEhgPzHMV32r5Xs7nQpGfh5JyBLXUvA82FPoMausf1LvW6ZoyxoShCsFniDiX97Cjqyx5b",
  "key5": "5aXoFSLQ4gU7Brx3KFEgeHNe87ZFUJqLY2tGDLgwUaNxkEnB7Y2kTxqUCuTv4CFJzD6v4NhddJ4iZj3AywJdM6Gc",
  "key6": "4VWvxSJQHDdHvRcc6tFYQTfMT6bHjMH2v9MeigLfWtpof9orVagTcw2vqonaRLZeQau3VU524NcSURpZ59ZAZpR4",
  "key7": "4H9jqfiUXCtS9HKYeLm868Co2tec3MW1my3QF555PHpKXe7L21qjPyk2GxH4mvCEWuegN4phP2kLC13xCNTJ9YmG",
  "key8": "5H739Cfxqvow9WobCtQjF8v9Dx1md5W49cBXfnYdKbu7gtM1nGvAu9hKFCN2E47G1ue1wiz7zoHygzmmBbkLjnZX",
  "key9": "4858rTHwgenzoh2uTDrEbD3teiE917AfL71TctyouE8tyzQAt7QKMsKGixtpPGxh7HSfPJDyHs3gHjoD3BAsNjE2",
  "key10": "4QQDLm7H3Q1PvYHEV8qB1sDxuVNVfKDnfYXpkuD3hPuacFvbarZT2qg9vKs7mYPCSV9FVD6yaya8EE8WsTY1NhQe",
  "key11": "5oKuzW7jgsCsnrf277L8YSEmPSNu4tnZadrijmCFtEt24HNt8yvjD3UyQuXq2A1a7dmyAxYaq71x8k8NmjvCn2Gg",
  "key12": "5ELXKZJkMy7sF2qSNpRTCrvZ93ta2BvTmyCGkorvUgxkzsqoAqAFZVJTfq5qAgG1bcvYQKm3iynG39ydbc5xUZeg",
  "key13": "3k61RdPfxgQQPTM4Q271aQxDbDzXB9t5tQGsTn2ypbqWyZBeLCRmZvBbRvwa4QGSfHrZwGQ1VF3XnQUR1W6WxoEz",
  "key14": "4HBEX2fdgUTbsxbQXeJFPjnWHiKmy74Twwp7iu2vV6VNJ6Hz9ht3vDDqzx5fXQf8MJF6HGY281is38Ao9GBKd2RJ",
  "key15": "5dpfDZbuWps2wptfsCJJ3HivbCN4mDpEQCqbXAjdxyF5KmAZvBsmn23oo3Rw76BAjcmZrcmUwuSc175WXG4mL3b8",
  "key16": "2KJ29mPDfEJekSUzguAPiPne829QoTqCh2a4UxXA1pP8dv5LJHRwBZYr9FihDfZUQFQ1sFojZAiW8C57qqAPMobu",
  "key17": "27UeMmHy29BZJcWrp1ebm3LsG6rfJNHMdPKVvLfreqX9vqh1DDEbsEnEz3R8XNEfyvCrFcWw6cwEDuDwAi6eHdqd",
  "key18": "4hCm2L663iLkLqe69WB8nNtXvNLBFNBaGQsMUhGD95xiXud8ujWkaZkhPVN2bTwAwhShonHfMU6i3r13mQ5taRyB",
  "key19": "4WdXmghrB7KNfBcJydBhdr66sB22V1Tqvj3e2JKsxFo3W8dAEqWTP89MwcTmXhUFM4x5XchEsEDNHo5AsLBBDpdG",
  "key20": "35L53xUWURRGzxyQfVYUC9eswp5ah2JF4YgqRYMvR434bz81uTVZ9GAKiWVj82KHFkGiDkPZ8U7R2DmgWtaDGjmY",
  "key21": "4sphx61bdd4RX3sz68qyfXim8H58ZGY7yL8nnxKevDVmKW3NZJJqRkG5WvfrP4FXp591EsAo9CkZdHLAe1KENTj2",
  "key22": "4fs6MvGfgKUQQafF1nKjeSvBsnrCzmj8xuqsL6mewrW4dhJMqvg3PYc2C9wuwZh9hKrwQofudXGRruTq6edBRXHy",
  "key23": "3bfaXY9PkzhuCE6DMMKbCNdnTGZdbQpDLcVxCwa6iG15PqX2FBNYipkyZFQT3NZdjXg8tADxnLJBL7KznYN6i6EM",
  "key24": "S5G3t4XHhhR9FJuXkJmquDSDyv2miD3KvKgkXMEQAAGvVPtQZLQtpMwe51H4qg1Nk8NVkFvrMKe5i3C2Pa469m1",
  "key25": "2fuyJZMJRqsrPXS7xGud17YhVtpQ6wzbgk7scsCzFewvGA4iXzxc6YXjMrDVK8BBJhhWZ1FL381ZGs7ud25u3wwk",
  "key26": "5BmETmCYSSFPP9TTM6WUk2SAQ4VY4dmvyjPydd7UC2bxG1hB7qKP361zUFbJh89v5ttCJdFdP24bq2uxhJsCBakU",
  "key27": "4bU4tHhxJZSWcXuRdfWPbd9RTDvjaf3NPn6T9tEEM3dLX7dhcDHYaFfY1dXw4Dcz5vemtmNS8xKmDXTpuoLK1nTM",
  "key28": "53x59gaLdGB4MyXrszUswrWYDRPB1rthFF8u46KNDpnqAbciGHN8mtFycTmVD9RCyQ1YLpEWxZxbjmTMXvE5DRGG",
  "key29": "h8tSxTW4ba34eop8RTNtLZi9PiGQULyr2ZRTQNcbMqGv9tYjTgy99Rj3azjcgqdDmvVTMJrCMSEBh1JoabdA4cA",
  "key30": "5Ho69YsydKLChGDeazv68T2J8HvVozFZ8kPzpYcUoNUGcDpMrSbYvYa3BWJKfyvQsvtmkTxgrhUkaYHEP2ULCEAx",
  "key31": "3UWmgmue58qLv4ZkdRPEdMtuQ3gABFfo7wytTGCy3fDT8odc8JgkoWTjGaXkzT8ygCok3MYMiBxujv3UD3Dbme1s",
  "key32": "3yCGZMbPkQ7mSVeDQ1EDPoeyHMCPvydV4dBWh7PntEzCTe7KorGweD34jBNm6ccWfEequMkKjM23zRKumxo9fG2J",
  "key33": "FAT8pGy1cezTAUMGfrQmqETFDuBJUaunH9sYbhgzRmcRxsn2GXFvwih9mQdFovoKwDviw7JS3715iUntLVnr48g",
  "key34": "5GvgEhvR62QMuvsjmhra1w3GqN4TS3XfuPHvKy77z6vDar2kFfGWFh6XdEevkve35PEUB5dbPb1kcNs8Zx5uoyM9",
  "key35": "2qwYTp77xjxE6Gma1TfkzfKdaAV5RgtdLu2DwXtwnDHextRZkpJmx8CQ56JZ16cxzsmbPr1xZoiseMatHr9VdwhU",
  "key36": "44dTSkApQvutJ56Bv1eKxvuor3MeXWDzez5bE981uEMP513hSzhrFqopEhkw2zm9jM7wuLthCLSnP9HMrza5G6mi",
  "key37": "31fAFAZuwR24ZPKk9qEtWA8KyTfo8uud4cM9okbrJAmC5dfr2x4aEBvgJpjNnyEpqoLvLrGVP7UteRap5Ch4LZe7",
  "key38": "3ZxLyXtYgsWMU8YCmsi1cgJjahEC6BREdsvuBtaic3FN1jVWJdcbgPXnLY1P7XFM6wsraZoVdJAMQ5BeagdxdTi4",
  "key39": "kqWS5QcHbqavUby2ojqws4SK6uhUrWi6psBnus9XeZhHLPJfQzFknUYe2gey2BLXzLGZYbMYfM5gGnJKnGyDDnp",
  "key40": "25MU5LbiAHP3Zyp2MXT4qR33ApecX8Fm3tteHi3G6ujfh3L66pvdkDwV2AjmmXei5uGkSnVxyaiRT3yHmwLoT9wx",
  "key41": "4u5NXvW6gJxavZHHPhoHxee75abs5za91cre2gciQ1m9dgpZcnrddZ1qaSVbP9fLLdBpek5jHmETuv6ET9X31TDd"
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
