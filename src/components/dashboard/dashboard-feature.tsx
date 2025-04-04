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
    "3jUKEXS8QHACWYZt5cT3TnfXx6rmKkW6EJjHfnCBVmvdxv1sstWqA1NeiK6g1AwR9gnRvSZcJggUBqSSJ9Y7Tj4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xPdLKNfQK6D9FWDMC1W5rYAFZmVifvajHFAjUgvSeMD4ktHR8JkYaBTaVhY2UKMFKTm3bKc55eWkPTwWkaGnzRZ",
  "key1": "3QrsM9ZqK7WdnfcgDp88q34PyjduKMpNHtvHL1qUGTaB9En2B5UBrSYF4HzCHGyhaK1EpQ1sA4FtXtAMFN8PDznZ",
  "key2": "3ooWuqHAFTBfFqU81XXMTTSE3ZCwgyUXNteHMPzQBY32noybv3LZ4xsR91KJzcjDwwDwWUqawF6QXrAXdwyFFNHz",
  "key3": "28564MeMAK9gyEHpc8JqRTghLocPUFfRJqf3YWjhLGXtYYNNzxzMNCUNJdTenWyppuBW2oSCUKEM8ESWxWX5U4NV",
  "key4": "5nG14LnsjxawMbCK7HuuoszxfoUAuHUa8FmtwJLRgpSwxpPgzeyCsGWr9tjnZVYyhcdTQxqSHeZpsUfDNK5bPHuu",
  "key5": "5nhfzU4EbhKUdExy4Wg6GjNS7djmtMJPkzLXF4M6faETBq9j8kG4R1Bn7BrcZzJ66uE4rJna9dQwBKuhytodq8ow",
  "key6": "gMojGEYZutbQ3Bqfi4vdv6mUuD83qppGVfXs4AP8eQuN6VkNuuEtWQRLHDhifXhGRHjymq4rjceTuw6XjW4qZvF",
  "key7": "28akxa3y4HCHtF72o5fe3E86J6oxksDDboHEeBDJ8gjBMBvyYVZScxS9BrhvQmxfMreYnZ6WZpHCVLtdG66HR3Vr",
  "key8": "T9VwBikdzDiaVMBga1NEMyHyY7knxACyKMscPKic6aZgFDL4tFGNf1g4SE8kkrY4WrGxEU1u6bzVE7FkYVzTEVd",
  "key9": "2aSmfCPidX3RnSnp64eQg2KKLq2AsHd8r8fXP31zSuZR3ReKcc6Ujc2mCF9fga3uS5mH3s5D5r41MSQN5a9vrTZ9",
  "key10": "4pcZ8iBoG4t1k2vmMme76fm5HtFjKhFqorGJA9Sxkh3XHKLU8BUSUmRL1BFd4S3DskbkugDiqhKhDJF81KixUZ5u",
  "key11": "63ns3UJSCviLR3LBC2FkwSKtXnoceTNRHM4dUvdv4STBNuxVQZzG89rbreVVmL82woUD8sq8ed7EsLEs4RAYqii7",
  "key12": "3Ey3Gbo3Jry8FEJtubtEtTtmySw9NMebpyxpgEuQY4gYLsR3eE32b9bYfCcSjG6yrQ1WCsnY1DZuxJA3Ehg2WCZT",
  "key13": "4Vf3VW5vpTZoiyHQobRm9FLy2MUyfJgCtMJTps6rhU7uYxVUvLcLBNy9BXdJTxuMiyjKHXUVkkFMTodvssfbc4w5",
  "key14": "32NVkzEHASyxyHWeQEFVKt2FCC7DyFJsVjXuKHDZyTMMjZHC5gJXPbY558D6G6CZRMCXLAUBK4Cr9Pr6Hoo5G2Wd",
  "key15": "5kCXBLn7jDhyLz56sEDwKJn6VtFNGt5LB5goQu3XbMCxnGh2KGoLL5akfz9J33cSamzdXYEycnruFVZLDK8KC8pk",
  "key16": "amZ4ZDHHthwtJbojoKEuiDfqyCnqsUcoHZFwaDJ2V4GuTwg3MFG6h5QhgNLNkSm1kumspz4Xbh37zXGAKVBwqJZ",
  "key17": "4H6gmUvGbLhAj6x8E8DMnX4aKXicSjGpVjKsVbDntmnN8ioAoyXtzDhuNEZ8t6iTAwYDuFwUG1GSWUQwoAAAof5N",
  "key18": "4yYHAbfDhQz9HiCtR6aFAe4G25HbGkSpgHk8FsC3UCrjETknG4pPb4ZtPzNDoDA1Tnbf1FK38FELrjhkMtAoCH3x",
  "key19": "3w78afyt14Zo66NkqQSUXddGNUh2AuvoEtuXvDzFD3C8MYgAYwf5YSpDf5MeEs1RKfk5SitCQ1qXeu2fJgxU7ASg",
  "key20": "3Bd2ijNyXLgird1zbmYxoiAyEMNSd8nLftK3UTcB7L6htqorUcdhsxN8q7wfHjybbpKoQE5ND9SdCkJfc1VhgGDf",
  "key21": "5593qh9JPc4A3LMV5GPbsaXQ9f97PezCA7AL2ZH3FnwuipyK6er6M4G7qsVytSRUQVRfHemd5ksQD7cJMAHNQe2Z",
  "key22": "5Vi56QpiFpdM8684ABxKGWAAtfwTXah7QfQ4uvxCyw92JfoSEYg4qXjkPcGgGeK6Jdmrn2oyVDZ1rKdejbWNtkNu",
  "key23": "24h2CWAB5mn87Ysc4t3kabzt1xLbGwAjYHq8sHUZ9313bLRnp6HvHNV2Gqz9mze34jSnSVk1ik9T4p95AcM2XaUP",
  "key24": "5JWoRGafSFz2V4Pg1V9hA3vqiSbDdy9nGp8KPvCF5mhgZazpW9e56jUzqzJaneSx2iY9bnq8hg2VCbVUph36KjsK",
  "key25": "2gsoP7ZKaHSgnBcoqESAngm4dmxjq8NbpWmeFKchMP4gfmfojfAX3bCRokKEyqNJf1eJcvNHxLpvaymv4ZturL5M",
  "key26": "4R1dbsW891Z7WiGbU3DAtkZsfLi5ocK93T1ERBmRz1dPbn4CsL8joWTRhWaCJu46TEKB7GNEZq31VJa12KcFz9Eg",
  "key27": "4BkGrLA6Zp4wdroxnVTh1sU1dd8KikqdxaipnubFCaNm85hUiWUjLQUT6jxmKFybAgGCfge4KqWFWLXvXDME7cvb",
  "key28": "4YJquHG9i4eGm9tyXjm8sbM1WU8kqGAhDBL8DFpuKkNXqkUxbxdWh6GgrrJP9hYgRuUNU6HdvUc5Cj2m6TVVL7U7",
  "key29": "3wY2NJXE3cQX59v7gUFCY3kzj9MsGQDKh5LqSwHrEeBzAW19Fm9gwrpcAm9RLS6PXT7swsCy62f4QaAjhC7u3gaE",
  "key30": "4gE6wUfYUdgjpgWLe6zvaQZeMTEzSqMLNtB68S1gX7btDqmNBtE4wuvwqpvJgndGuw9JiZ1z77pSFGHGGtsq7XzZ",
  "key31": "4uw1x6KL5SCDz7uKfQjihkSuwh2bqZFDqKak4eKTtufjqfuB81QcPaV1wdinNRZfpVzrjfwMaD4BvgirXwsKy9Lw",
  "key32": "2kHqxV3L927n12WbmyVdU2xcuJtF3DtnVfHy5r8KdWVayGqhVKQ1fakmtK9B1s3PwYsG8QTfArGmxMc4iw8AvYtE",
  "key33": "46Y6oibBAueaNWM5u9kMwYeUPA2kejFk4oDdxsf2PUGLiGv1LZsuR12JHKMR37ArCL9GHHWHacsLy1EJ3CWJUPN6",
  "key34": "28eVpuneSqCywxgRfoLPk9qtssXgNtwCpvfxaoXFRDCbJGbBg2ufeFYibcbGMC2TodW9fDCPgBEXzvzSXo2zjP9c",
  "key35": "5dzdw3FayXyZmHobyDCPGqKeDA4k9pk9qXqNHM7P3Lba4MrCEZMVpqPuRCUEVxpyLcxfJ2RHFXjSEhBh3ixePY9G",
  "key36": "2W6wB669BxYVe5qmfGpPgqfH2GwsEaF6Mq8wuGmuyeAREjhKjzkGBjYHoRqtzFtwafcTPpgMST3bmyzFy8Y88qyT",
  "key37": "3fa9Pet59ggswWR85YcpJ3Tz4gDTqbgV86MbFF6YQ9tQsSyEGCrr3pWxysC45QAZHWV7EPsM9LvUHFyKshe5QPka",
  "key38": "3pcaZ9LsrxxMb4vkz2p6hwP5TUvf2TnvNjy8ZJF94dSN9otqk9DFp8rcmDqg6BnDVZ1FGvpjQchJfgLL5cQPw4MA",
  "key39": "5B88U9A5EsuZbjNdJ3hRdJqXKMtiJNVxbJ2G2ib5rwmChrHiRBfVXGTpw3tDa5ATJaSaanvffr4XU4bTfqU9L9ML",
  "key40": "2Mdsu6xMzrSc8Gdzg21tA6RigbtatFvpPMJ5gac51qwb9ywJQxBCrgaEpe2PGrHPYDwKBwC81d4BVNot9neqdZQ5",
  "key41": "5KWZcAyJtEduRrpPVyzZ8wsjAav7HkhZ7jsn5dZFXsWaq7QoHdPnob2fvsxFhLjNrGgBiC94tm4FXnTSL2T1EsWj"
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
