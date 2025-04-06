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
    "5g5F2WNNgUnjxsY48SjTjrdKxy7oRoae7fEYgQKZy2YXZGW6QHjvSFPeyqp6qTNr9pAR3t31GyeSD9ZxcKfNCVtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGdCtScLuC9SamSoXaCsNFVzXK8jgRwpL4Eabb6ngEQvVxjZ4UT6WKScENiLX63sXFUeFgp97kx6R6B2uHtVQq1",
  "key1": "2EhZw24drdWXFRt3xKxJSTFLze2i6CM2c1mjdXNQ92dUHsQNW5CJPAEkTBN3qY3ago3LdqEAKdgurUG5urJkPRxa",
  "key2": "4JvQJ1tFD6e3hfqKxSPfY1wWp6Eckmasm6ms2MQjFJPK8Tw3CQSVcyUsMSWXCh3HjrR59TePArpKvKhfJ3qkfuWk",
  "key3": "53RRVZ4s1w2XdBJjeTvPtUdd9Ha9N68oesjRQ5SxtgAtSpboBPFV4ThyvatJqnRQ6PioGCkgLrgfwRrrugdQGZfg",
  "key4": "5V5hnxiDPNXgduV2rH9hcwV8Tds5DxCUXpYFuehHoPtexjS6iA1gdq8NqyuQmwxDw4xmk5wKGjw3cJ1FWUsxjCZb",
  "key5": "maS1JqQuuSmdgj7pCDRKASuQ2BpR1tGASoKwhi4fwiHJQ58vzQSPvT26W56TGzJcaRfZg2K3PDJzKDBsri7nrDn",
  "key6": "7mrswTYxSmqunsD7F5mNmdTGpmxf4tKuatPrKLw3mdqTFUj87pthYe9bKySVpGGDPXMmiy35TLSywR2ckwpJKNC",
  "key7": "2j62M8bXogwjjRJA4Lyud1rgMD7A5eExUFn3bxVUVJ4zJs4y4wSaJR62AMeqeF7gM6KAtXjnP4hACq9JGcjFPQDC",
  "key8": "2c1QpxqHdeHmhAVUoPn5boXymeYCNKkrJWYPrXxuDmTxggcSkpTfNkgnvSa5oZ54Z7CpSbrraHJrsuDH76xSSETF",
  "key9": "2FaA7dNtzVsoq6iP27otZrxYb6W1Rn6kHtAksWqwkQ5NZZzhsAqNLye6ZagbfGuhjWHKYPo9iXwBe9eRYtCb1khH",
  "key10": "4BCJqVSijfqMMy4S9zynLAQ6VuokBAyeE9GZrBcg2Wy31QPrMWmxQUMEvcu8PopwncW3RAE3EbRQQ7895YBvZ468",
  "key11": "3ZADY1nVvZiV8gg16nwEpkCmyusTMrdcqtxqrpy2zKZ9SMxSNzx6QPrhpYD9vrJucWfPy3XVR6ZR3X1wyNvjztPY",
  "key12": "3J2ctfSoR2sTvCmaYa4Uok1vLA3vSrtke3hFwtf63qV15SJAwgTgvMJmtX7yZJYpm9jUKPXMYJo3Zja7WaVXzwwV",
  "key13": "5RM6ZvGATTyoMq2mLVcsktWgSXqpcTQrQCTYHprEPAW8DxJ3YLSNdnRpsgBgpNajvoCLbfDtmq49tgEgEcUDFwe6",
  "key14": "2e2VTN21Da7VUU8HGBALi682JrEnMzABeFLUUz1XzaCPqWZKNwdNkUhC43WWczqoZcCbeX76Rp3tNHY4HEoMJ6U",
  "key15": "5GJ7njc586crQRkxWD8sAeKtwkvPFi2XvuWmtqZ7TmX6YGB4ZsakRH1WjuP9vXGvaJ8AvdMCS6WNx3Wy9TWDW1Gm",
  "key16": "4b8GVhUy4bRwKyVJkwAqzX7acNrQCcc7XcikUm1DQXJwRjRK4Gp2rwBtCDZGE9xqNASnRM148ZHZ7TwWWbuPzGvT",
  "key17": "BP3Dipt1eqVgjtr22TuRnNw7V12T6eaXn2uJ7wqUZDkjdEc6BCodoEMJLqj1JjkMp6DkM4A3UYXzxWmdbV7Zhvs",
  "key18": "4MFQAKMXf3ZxwPCMfwaV7x4j7N9S5Kdu9rPfyLSpvoVEWhERiDKrVBwJfPmPz6u1Ws4EYmJAhJh2tyBS9mXDxFxt",
  "key19": "4jjP6QVTvo759czyMWfeyMgauQxD83HvZ5R6hugaj1ViWJv8PyDQEhB6jceyjBHzQBX9xVfjnELHnpovGeWmkqSP",
  "key20": "5Y4Fvk6MwPsmzNioFYR7ehwr2Q9uRnorraB7LjpeTutocteRQiQ2KSEmQhKWi1YMs15YbQpPrJJ7rjZ5Rzvbr7vD",
  "key21": "4omqG87ffidCdKekETtEWJ92F3NkVz1nyM9mSGWD4YpxuR3gAGH9eU5rAMSMhzKbbzhAxBuRnhNShhffsDhMicwD",
  "key22": "5jojYbEH7tKaAY7foMhCjz83zRTb6v8tw7KhxoRMbM53BKKXwWmPkZJaUkm2xZgeb6f1myZnBszZS2L4tfBjqBf2",
  "key23": "2T2qrco7JtLRFSYbBcQUYX2KCSPi7eCRtWx56M3CttQsK6JWJvuB4n3ZfxYp45k6uQ9ELRdiavemDTgEEdnkS5TB",
  "key24": "4LeqK6U4XE8D9nkAA3SVwnsRX8qCrHsLESERh7aqLCb8P9Va2GpuvdHpmi1Dozb2rY4PQSqtUK7cLMi64fJbGavv",
  "key25": "62ui2iDGpeKZh2zgRjyMewa1jYXA73JFjY6NRy5VFZKqPmmWp4UZNWSp5kBVZDff8Y7q9sB3L8W8XRCyVkk8R19j",
  "key26": "5LBoWViRngr1SpKJvU5VxfJbFUSxn49Agiy5g3ewtbFJS1Pd445qsxVf6VUkyHWaNCxYb5AoyVmXL2oCMgtgyGKD",
  "key27": "4Jns5usZkfJdEEmz2f51AEc63UQ2x7vQLo1JyFnfPFdY1poeZ75gdNRSJ6FnaZsRbHgyhH9yUC79RWyfoMthw86V",
  "key28": "GesxRqBAYAJxwnXeVuDEQ1eFz9mVMMuDuAZAzAqVDvAPRqWeXAREjKq2fcXmTVrQ7RALBGGDh8VAhEcuVFgdKVJ",
  "key29": "3zTFfMmkiJWRc1ibvH7sBwGKRWXxtJBLaq77XTKt7io1o5kDwGzjyyedcvb5cmYWexi3caNhe86f23Q5vdbuwhV5",
  "key30": "24Q8AYy89H2i54EQtoXhs75YHa2SD8VnmKs1cFdkEc4MkefnsgcpX1Csy3D8tbZbaaCHCeD8VT6CY3FjZCUDXso9",
  "key31": "4aUdLc5TcWGewaqqfFhQjk2ufqSToDVy5utQzM4B5Ut4KCTMiXZZitrTfgN3PaBeHnKxS6FkwQSu8wPXnMkm134i",
  "key32": "35fdjVWMKFPUV6NeZL1xCt6g3ThDvm9ZgJbD4GpV8CNm1QXZ3M17ZK1JTU3JTH34PXrEgYXmw6fokb4SpSA5xNkz",
  "key33": "kjHs3VEDDXPfQSw8pwAjusT5oR4cjTRy3zY2oAaMXMRE7Kbjj596X8YchxGoUooKE8JB8XV4JtafgKiGbXMhTgA",
  "key34": "Ry6Pmt8tnoVMZ2mcAtjtfHR4cVKRjxxj5EXxSeAPEgxDmGt13xJVURt6sWEoVUCBaJiHPY2HJF1FaGLURNTnP1i",
  "key35": "2sqAU77YM457YeuuqfVWGmnXGbRLfTkUyXFHeSF62Royxtnf211kGSWNyjLBwUuXhjTPQeX2H4krLuWkN4N2ePJx",
  "key36": "3H7X8bHweEy3Jjfd5rpxq2fyXkMZQLa6V7YVo5Xo1iknY4RjXzkwyb6CFSCoBmHoCywrCZfrB795Y45AqgiCxSPH",
  "key37": "2DoGvCRufj7dHrkb8AREwU1a6FjHXXSYhigMvrkseRSEGius8ocrzSqci5U8wgv3FkZmPgVtr4LMbmgWSSyeZbQH",
  "key38": "23kMYn84m8AEmmDMxiFR1XmboP4UX7dQ11sdng8ArZD9NYZyJ1yQ4NgB9xiH6AMbo19Np9ARQpsG67D3yPRa19dZ",
  "key39": "4n5jZzbLJFAgdmCgmpLS4xGribk3GKdVpx5uPWgMVqEQYzrNDc2UemFrMBuwuAdedak8ZxB37QqDhF7F7jGTDpNy",
  "key40": "4dRjPzLyXSSrXiG9xpUWpWNJghapFLW5Ac6CGR5xgJJTq8Sj2fCwLXhBemd63hGnANhZCfd885GCVzMBSapnEWKp",
  "key41": "3YqUHoLiomDJbmYY4fm4hysdA58UR4Mk4zW6Toa4hCE8CgjaPJwA8zcisqec7VX8oMA1KRDdxzm85AnmscEAhJ4j",
  "key42": "2K7srsDaTVghmnZKQyNz3paVsTHP7ZXadTx2gqJLbEDpDhdwMbKe9QmwAFGMqehMaCW4sNPEbnnP6sVwj4qsUkCN",
  "key43": "54dfDJ2BHysdrcue2oTG3JVuXHHbN5TNRKyuwhTfJpg4nfs6KGbDWuGKuwUWRozPxFFgdteSGhCwTysXuTgDKVpb"
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
