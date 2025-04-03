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
    "2NDhKRY62kNJyDQyZA1vpHhfYZ4qVXWkgxi8gKtnsfwecVvJMNf4AniCgz1LMcXRTVeNeJDXWro2qNEXpWAUmFjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YmYCpGiEih4YvimTbASrnd32hdecJD9UV5exUdAKEmFTWNbkX2niq36EJpyippXFgoockgT3ihG43heRJvNHBd6",
  "key1": "49jZCkf7hYLY6tCQpedoDuFw2H8hkSNiGvMtWzaishhg7VBbVMkTyqz4LM6SRaSopXGbPBBEG7TPEGQMD6GbWYLp",
  "key2": "cjWjxtAWVyUn6ymXWrc2ftx8XHPHm6joNTg9oLADxJ6rTQckQesSEe68eGH4ChHN7GANrAjXTKbqpfsJywuoeyb",
  "key3": "2V7Pq37AZJ1L1buyeY9Twiie71svaaarXyBMebUp6ramAvubLoaXXcsf5mVJSDKiSxR9Cex9HU1tWo2yw65FKnkX",
  "key4": "JtSaUYmrnLefFCXJUUy5grwM1KJhGp3N6bt21BkpKkgXRgG5NkQsm85rgUMMSeEEhXgVnnjkS47tUKSgggvtV7R",
  "key5": "5f8LcfvooHDY1RJWh3tokRYZ4HpVzceQEZChwyXfMhJkmE4dqQAa4bfA9dYnQt32jETdpjem5oSM11HGihHTTCCg",
  "key6": "5pZ7F6MjZ4dDrVBQvx3VdndfGXJ7ohHR3o4gdTateX1irK5rNCgDaztFgd7nPYnLdJCer2W2gVFpmdDTcmfipNjL",
  "key7": "39xd1b41pBXv8G9gyZukx2qW4NJtp51g3SkX6bNGYhhP2Hk5LqjgKvr6oUd7VfZTfxmzLynYhCZFtLqLe5AGtZEp",
  "key8": "2YsLEtmMFRmbn5SRXkNHHbi73bxsPtATEKY4jkKC199TcQoDJS83ZTdeDSrTvcqzAqgwgiihjw5gCDCuWgtDstRH",
  "key9": "4jEWmDWixetKWNmfmQ4irwEyezntdAqvzPiSpB2F2WK2cuV5vD6h3paYe4Jc75QWPvmzZQD7cG6VUdhMMXPUJcj5",
  "key10": "5iSRtmY96WqRqSQK2EB7TLLrZRp4NJ8beyGrouKPvCsXo9mkuo5QM8BBA13qzgDbWu7vM7vUH4vWgnpqqrK8hZ71",
  "key11": "3yHNiTtgCzXiQrRJM5xFTC6VTVZyQoW1SmhvD79y7gTztL7pEGqjksYB3udkvPfEdo9N4DUAn8Ce12zFf1KEoLdb",
  "key12": "43imUfqUJZueqLzoEMBQKk6jfseoEfLGskVjiF7tRvHxYha4v5obXxjK3QyetrbXnK4ZeF6oDPWWNk7jJhdG1Cgu",
  "key13": "5s5DSK4T8TdkPch2Phw2LXTV9bX8irYk46xfp9PVB2iZQk3ch6tNJPd6Q8K6MwjBPdVTQCtMwcgR8jtL5ExgUwu9",
  "key14": "45uAfNPMQoG472b8iARmNQ4r7zXWbnRnM9x7mCn68m9z6MwW76v6yyXtiSQgvUrQLxRrn3EFXADPwfCQRfNEnvsM",
  "key15": "3VmEZ71Z52sV8LGxHZhKrCrR6vxyiiSutfPzVApqGR2GC63qSVv1LYwxucWt8su3sBptMYZx23MkGs3jetSKHNXx",
  "key16": "2MyC3gviTfAZMoVib8a2ZZasfa4tqS24kq7hAkLhirbe8NgH2igW1CTCy1NFDtVdPTv9Uv5q8XQfoY4EAeDir9RZ",
  "key17": "DgHpmfsDSdytdggJfk2vZUgjiPUTzGqT5timYuAzeQCMqYAbEwfETqDQGHGntr6mqTZces5KzyD2uHTX8EV4wiw",
  "key18": "2qcrM2CxQUnAPocpJArGwrgwdhn9iJveafisDm7zFfmJFYiGU3T8oXz1HuWVAuQqDttuJsAhn1uSqFFRdmviykX1",
  "key19": "4T2NqrnAGgQE9i3ZcKkNk3iThTW2zAJ2wn7k8FU9ED7qvJU2mbgGCHDVVySQ2e745VfmPXnVkL1ztpmwkFTe1EfF",
  "key20": "22WJs6iQPX9a8JizGGMfJ4pYuZDPB3TBocmeiaGcLG1xLb9s7yVHTTyzMU72qUTepDAdRGb5YYL235ymL1EryiEt",
  "key21": "32iZpiqMTJoV4ZxRKXbHq9zketQW63NH67mEGtNpPLwKtvTCrAdXbr41fwLsx1VD5RNbPubjmn9xDTxungGavqmr",
  "key22": "4Sffz33jxXtnd1ubs2asxU7SUNaVSKpYcg2rHADi6ToDKWYgvmnKibKReCpSSiTCsGyU8fijRpw8XYfFXL8wADZW",
  "key23": "4BdJ1xaXzaWwyAYZm4DhQ5D9oVGQKh1NQqCoGkzWcy4LtfKqeoRi8cLAEuszwKXkGy2Csn32ntVkFfYNyBChGYEx",
  "key24": "45xx1KQQFghsPdsZ2pU95kBRjeCs66Sv9j3GdkMRYgzPDBwgMDrusD79zwSpfZBG6jim768f57HgZsbzWXESext3",
  "key25": "2zSRgHkEhGEH2xLQWyragpa6nBzNsrehMHm4rZmXNmnTcVxgc6PETfw1oWDG29XC3XiDEJbSzWHFFv1xJfrK2kui",
  "key26": "2wQU4HsLsYaUEmdL21wcSUGAWPeX4p7nBUgkgav8ziR85UKjSHerQoDdH2MnwdbHTp8fqaL7gd5ygYKKC2RSET3U",
  "key27": "2EFz15hGyabeGCdsye1rssFTQXkfWeVKNYfvTXGTGxPzVspCGjxH68PgBVCo6nZzdMdx5TzZY1Ragv36WssYrcK1",
  "key28": "vNdbK8oMxMWoi5WkTxzPFAmMDFQpbQpdbLotXfFNW8TMj9v2B6sbBiTmGWBMQLCvMAtFZmMpa1HUbzSahekRy5Z",
  "key29": "55sfEorAmPVryc59fK3kmkGdtrZe18EfJRKSQMstDxFKH43evfmRYdospivn8kAWXAzy3E7ui86Pho3aN4bvmh66",
  "key30": "qHwDgKwrZ9porQHN3DzNYP4J3XfUEabEZTivrdHDJMsxZbz8PBiatzTTMXMJBqdmA7ec4nVWdPeX7yzAcKgH3t9",
  "key31": "2wjSrBeNsH3weNT5JyaTqxRyYvQT5kCMHYmNM3sYN5FdVQCJFLgZLTst6RCPWqfBPZRicd925KBrDYKkxueE2n39",
  "key32": "4r49ujDbTeSwfGUxbY2gv8148ApvKwcNoG9g346gnndiypDGzCanZjSEfSEX3yLbfnoGoUmg49Bgxfe5eM4pT82B",
  "key33": "xRBa8sv5qW2fLcsNYksrBrs5j1kEzuc7rmbFe9F7yMg2k3wZbMFUGDRCqs8iQWhwLtsi57LWPP3LzBcAz4pB5Cs",
  "key34": "2TvD4u4JS15zRvx73wxbpAkeDzMy5vqxxRFZHQc1Me7v6mhPAphv9e4VpLu9j86gGrdgN7aYME6tPwuJKv9SKF7i",
  "key35": "3BtBREmeS1qh9ZMy1scBYuUXjg4uFtm4E8rWhB4QGoWEcbsa88KHGScog9H6a8bF8MmFmHZgwbntJk6WH11JdAF9",
  "key36": "2yEgKpHFcNqzs7RavjQJ82QKQSDHidL1DEq11FTGqBBLWC7bmHWTwtnD6QX9p8X9P9ebwTv8zwKsm84SzYNRkfri",
  "key37": "3JoiUNsVdaWnrKZDddgc8b72czCmDjA1JCJMrU7UkpdcNYPQc7xPCCZamQB4fv1FrzrT2qp3ehPkyu7q4TDNTr79",
  "key38": "38jQem3qyB31k2ns2ajgCtCycoCqnnpV26dxyhZ2pBo2rnD967KxwTQ5HhQf5X42R16SKvSxg8s9sMGUg5fh1t8u",
  "key39": "5t2GDmJrhwp14bwa3GayeZopC8jyG9SGdEJDMw61L6XvYSjsun2D2qTnRgmYWRxZKq9aerudEsybNYjbMBY56zSP",
  "key40": "5Q5V92rynA3MawMG5qZJfPWAE3rarc5YZZTiF3DZbygieWsJGu7b37NBCNBeoo2FEnTJ7uGAouqrkzvnntM4SAH6",
  "key41": "525YLFkmfiGcfgDWrxoLyPNBAJ9LQcv27tz777iWkNDBdwfnvuiWcDytw1avWnzszW4nKdgej6qJDTPnAwcbTTgS",
  "key42": "4xk8jitcpzQgWf9Ww7NaUKA4xXqPnqbwwUMJhaa71PBgoRuvYyAdKA9HPgRjPcAKAiLr8PaAwNxjyv79dDxsNezQ",
  "key43": "2sdzQPy9w6Q91tDH8YgJmiUFDrqaVW7N19w5PbSqGucg2TV5whhtUiyBXQwUpRwPk7yjzCaTmwm9gzAXB7Gb3mmc",
  "key44": "2wxe2ej6c5MMxEzLb3u4qxSup4PbSTg16vLDciZkg57MVqjNjmEkkRNGpG6UjQ7SpToSr6ZLtwmsqNMHiFtq5yzt",
  "key45": "5nW4h4JKdLbCUh8RQATHy7XaKuse5og36JJk6dnkntpA66QCdnUKZz31c5Lz8dqqrsjaiNeUW1BPdYbVF9VjY7vt"
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
