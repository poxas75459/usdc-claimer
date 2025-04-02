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
    "5EVCvBH9XKgZH9Xi7y7xDh7w9SyY4C1wH2LACNadMzLEM99SiuMuCx9ssyKWHczmkv6oYvQpxbudm2fKhz5auh8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBc7i65UcKfkb8gA2uK4unXXh2rbCdAvEP5ABBfqMjR9fxeA5aN4yN19q75nw1Gqixns6wQurQ2C5SaCGALUWuX",
  "key1": "XjkVRU9vxo4fumPVTzJDZkyFcN927vuzo6USdrDC8CiDgcCHosGqMGMdYpZxTsP1HQZi9RqUUi2FNicaGJWHbRY",
  "key2": "5rekSdT4pfaF97aimEicuzbmgT8MqENExt4NqZoeCNwuabR6SkPhUUYnEzWSeTMY7vgxZkNJFopsUrW7VDeN4c84",
  "key3": "jtbCGJ5233fyBwfP9LXUKjSsSTtmXu3X6HGAxuCLXrstNW8Cf6aMGGcSZDP1f2CbsmErhXctE4jh6PZhgLgo9kP",
  "key4": "5bpNv3UgPCMfHsD1EMALNP57UDYjTSkr9tKATcEgwWg6LYCY35fgYhiGv6wGMSapAWN295fG92p2Pc6R7rF4NxB7",
  "key5": "3amte1V42MCkfXZ58uTVmLrBxF2MzWYrZAVS5etU9tPx3BF1QZPJ31FRjQdTSzpok15GmgEvnx1j15niknt5otPK",
  "key6": "5Pp5MNMeWVWPCw1P82bytehEhM2BQgnRmVa1mAF8DTr3umUToUTGSd6Gu17ZSQz3PPDuRH4n7eRWezsFtb5nvj4W",
  "key7": "52Ssrcifsx1DBGsNViGi32xXAtwLYeai4UbZDtv17MdQvSTVZhjWyneiPz421QAyphvhfp3AiJexuNMFeciE2BhT",
  "key8": "44E1a6HfoCGXm91NQFgecETYV1N7qriTtq5VBzjzygnLZ578Wxh1cc6RRq33W6mcjYH8Pycq9A6h8nPUr2fB1FDK",
  "key9": "2d24o5GLtsmZgwm7jXXCVobVjjFGgyocatpzuY8XAfqvXPcVUeUrhZkGbac1k7Sqm62DA9Urz4rDJun3abvxfugF",
  "key10": "2MWmKrEiJmJcQ1FBKdoSHqTKZsdxR881ihffy7Lb1fieKWaA5zCgLwSJrWdJL5wcbgm7QkmVSLRKt1mfUmT5d2sg",
  "key11": "4kK1bGnRjLNuBkZCMZ2Y5rHhafMAveH93yB9Pomxj4pHz5E3nMr6ynvSWkiRAQXxh1fd1MwDV1DxhaXkVfmdYXzE",
  "key12": "3Mwn7CAa2NHVTLivBhHViGDoUhNsBmiNATFrwoEPvQBfZFjaJYej7qvP2bSeQCPTAV7P91DbcGDJ37GE1Kkxduvv",
  "key13": "3ki22pFjxh3ZkBdgQKpYPTYZrmQWyasAVRs3SyevRZJXXtQsb8mBHPgyCHUi2Cfu9Abex8vhkPCpfzu5j5QRwPx8",
  "key14": "3dQmBXUgKdwCBWVdScuX3MBw8Cd17kQFrTUMU8vg8ZuZF4BJdSyen949aQGGuBgMfQQTxDGCd6yr1yfNRy9pjYdk",
  "key15": "2kUjZMS8oVejA1s1nwBKb9xAJ27nso6vmB7scqQ8N4pcPEbuUav5375Rqby4SuGV7Ryhe8UAPcs2V75knHTeDKxy",
  "key16": "2XpKJdYjgJ3wYgw4Pejuwjch4chrWvDtimcQe4kfoVd3LfESE9N7sKby9PXN2BFFibfk5Qhn6EVreqZ1tdzLydw8",
  "key17": "3WWkS3UDEHaBLFSkJdHM4wQogBVM2UQJLFiYcMXfoSHenH3mKEdDgSDPBFVkurTACK5KyHD9BSiV9WgNeN8yK7xK",
  "key18": "3CydhS9fFaJNq9XX1bHJBHRZZcxHoyH8VHpEuBjDefS5XYvTxdfcUkV8gSdtDat8cg6voiJ6ENAtUp61idByFfDM",
  "key19": "5fLUfg5ZAUpH7aok9Hh1KvRpzz6obypgT2DtcV1mGC9QQPZRo9boDsJUNrCBWBBgSoKS6QBGKH1nHMZju8JvjyA2",
  "key20": "2kpsD9B5iuRZMxdH9HTWwh7V5iRFbzrKJ2PuUa6S7WkhNMhVcFHAw7NAMwdhZEZxMenUvmZbFoZUkucFQS1cDPEH",
  "key21": "3JbBhX5cfNTdjQxHeENAeJc65ozDqes1yRbdRRG1VLozBjq3bLgJmGBvdQsgdo7caXLzNdcY94qqofmPCDgDC6nq",
  "key22": "3V916zPjr8wob8HaVdb2X7KuYuBUF8vvd18ekbJL8a2FHfj9t9ukQzsSX5oQFQYdoqFN14KfJ41qNVpb9NBPCebk",
  "key23": "5T4x5rXqUeVaZRGEM4sFqbpHopL6HoAaFwhbnXm4HshNCsdASeaNJW4RBczNqNiGygnTtqpBqXNSf1KPyy9x7fqs",
  "key24": "3py1X93PGSSzJ3tikMoLPMrPFjJEfXWBPdQvoBkx3mX4EFQjDnDx5CBauFmkKyD1EMNq2oKoFbuDhwvHTue4EGuA",
  "key25": "3SiRzJhpy8MzhhbtRCiGNKUzPmggXLsRBu4D3L5ohfXoAx9pssZjBKSt417LKsD2z4aQQLgo9nEr7MoNaTXavzn7",
  "key26": "5yfAJ3xejLh49oJ8eiYm8BWP3aARirEtu3UFBfkUqZeN6J7zKk7htXAYMQytfxucc5Xwgj3XcGZjEWhREjewBpBe",
  "key27": "4eu2rqSusggtHHZUtGDnmPPXfabF15kbc7FLMTNBBLHJ5Hi3fMQA6mEkHVp5joGMTUrmRL47hyRVha1zJQ3jRDMu",
  "key28": "3UCQ9aJanw1vf3G2CNyzfr8mhWHHhM2fYzTYubRPYK4Ajd5TEzxB8pRW2vuoCpAWhgfpshNoguFe6NUS7fyRaVFz",
  "key29": "2X5rPWQp1LPGR3jjrksrd93aTDJFyyhi5we55E5vj3ukNRs6vEkFbN2TiyzYXuae6Q41FAgLnAfXC5DwK5UXFZHf",
  "key30": "3FkT8hY5oTAxg9Nu3UenPc4b7bwhsWtBAQS9tkwHtUCGXXMgS7twFSEvBstN2KRw5kh8f2gbTcYNKobHa9EMzHNm",
  "key31": "4Z1ath8PHBbGZ4M2iLJvSN3ther23yFpFvZcfQevNXhKY3cv1LUqRjuB18CW47BH958G6M2F9fUSDGHkh8Bxj5uR",
  "key32": "3ScPRGTZzs5xtwSS3uA3bhPpsHUPatAzAwaCb6W4gZBNctjD8qGgV6ANYQ3HoTs5bsb26AVp584GCFMTWgM5NVdh",
  "key33": "XheECKY5Nnx2PNMp6ByhKVQVnjVsgpM1fF3MXnikJSaZKc2CBfWtktrB1iAoX168veM5UWkjv1TvfqP9mavGMA6",
  "key34": "5Dvz7ptQ2aBnbvqFodPoFutnSxQqorAotvZ2sfLSvyBXiLYrPaobJpXKih4BLCdrfGrsnoBPJvQsY4fgqvxfZEM",
  "key35": "6281E3zyWLzbPfDvPiigqoK52wLHEzWwzwxqQxHyu4zMCraQTei6F3e3mpTDfzVyMYYkEvLMkiEkbJ9icSmqjrVJ",
  "key36": "46aB8V5oWBiLL8CdfFgzSqXnX2Mq2LK9YcXTH8quBZq1hifk5NGRy9qtTnvHmFrm1kojGr3JkUbKShk6CV1nVHrU",
  "key37": "ELTwh5QoXF7fg4nky67okYR4iYDczS8spFAC2aXnVQzji17XQd7qgwFqwVsSKFsvrJf1hnk41eWTncMEfNKvgNA",
  "key38": "3mLWuapEyNRy4mrqkiQJLRZ2HBXmzPaNQYZkW94ZZfVa2qSRUc5tn3wH5LRkJY2M8ecHSz9ripG14f9uNVfBA3hy",
  "key39": "3a73CSJ5KCM5Z6pRy7BFkiq9C4nAgk2wsJViyeWUuUxX1ZgQWqcc5t69stxTYFLntCxPJLAURLD26NWvt9VGp2Hu",
  "key40": "YEope98fG9pT38ezqarUTdvpGZTMUH2xAWcfy5mXgfSr2R5dfAgN2EnuLUKkH7gEebBMDLF3r2upeZSrDHofBze",
  "key41": "4dddcJaZArTgQCZmWveufaZxc87xaCjj6pGAyoGsoDiztQddvuQKUQSaduPoPFkL2vhYDGDviAf2XpLbWymEFeoj",
  "key42": "3o3RvnBuHBATe52TEoKqbWvSH3rw1pXfMeyv5yLQjCdGcCtBXuSYpHbe7g9JmPkFcrS3AUGnYJh8RdA4aXdvjz4c",
  "key43": "61Fwuh5fGo7mwwtYyukW5epo8R7o47E5F93ALZ4ynTkQjQbJzP194QcHVhdXcyy7DgGTF8VmY3vnJ4ogJR85zQMd"
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
