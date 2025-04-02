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
    "41tBCCsVF5jmu6rdnJoYnSnAHHxor9FQu3acjRd7kDdQY6cFrteLAg8injULX6hLFsZsfG5YnThpr6bnNpbdGUQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rX3sRKqh37ipf3LfEmq9TAcuvamHo8g1xemV4LPAJhbEB689eaiS2ixaUERypLxYiHmMftrXpMFpoXvFYu8UB3j",
  "key1": "21uKGCkPjzhE4MifYN8STYUtU7vjW8JUHgTDoD3KW5v4rs3WK9WmJXbnEHAQLitdgG69WU7q6FJm4sfefVgimVEj",
  "key2": "2eDeS3Vez65mcmzhrpYiznQFnDcfmBPbzajukVv77Z8LzmtLJ7RzHqvK93chRnyQ1U3iFf1mkJabY3t4QNoxw5gh",
  "key3": "4yGqkFFnpbhcuQC13cmGNr5DRDmSxHfnNx1YjxFhp25Ceph7eQuUwr52jRK4wkBgjWciGpLMC2jkaBWbR8GcJBDo",
  "key4": "5RRBFp7HNyZbc4NjnBgfqurk3aNqfbUUokEgKpdSThZh42goEDwV7ukANymWpkWjExLtqzfdhUeZapFnVc7ceYdY",
  "key5": "7DvN5ZvQjryEXowQxfyRqLEShHiTvHqzeTCV65LrTTYaM6FhepbFHnReH5qYsq3rtmc4ubjLdkZxAn7jBprzRkh",
  "key6": "3HCKotbbeLyXUuPCnmEj3yzEp6Yg5DzaU5M5fD65giPwJsN4pHBctZHv2h7W5rhWz8VCRRiBKAL71EScH9s1X1iA",
  "key7": "2vX6VNq4NCJYZ5GytcsTuodveXbYf5ev8VAnF9Yd4iAkPpFhPgEc6HHbaXWZ1XPtWDrgMnsLSyEnHap8JrPChA91",
  "key8": "3eAZ3ArgTY3TqQRZvCEe2Av37HZtXz2hL4Tz8kBFkQSuGZzMR12EtBHPr5t2oAqzfwrhiBMVqGEP6YNfE1BaePBy",
  "key9": "25VkqGgv2cdBFYtQFuCAg5pGT1M93VSuuefEMQUxSwxvzJS5djHqLKGg4CUsoMcxoj6FNuZvLS9MXNxpN9C9tWHb",
  "key10": "5JspgwV8jqGZf68m6wGbU9ccPfEyB2JeL3CLqqeZX2jvPRgfkN8SvUxNrGyKcxyCi6x3VvE43jYxQ1pHjSeSi3a8",
  "key11": "5s53gzYnpCwyTT6KQwtStDkfm3zsMqvem6oMTTDepi9vbStoBpb2RtEmgmKiDg5myWZQ1nRKW5d16qWKPQaS83ZC",
  "key12": "4d8Yj56La3DHbeSyrTUWdqkbV2ozMHaZxDtSpDpu9hGrT2oESzivKThh9JcJ8ZyX2G9qbmqDpS5V2KkytrxE2aZR",
  "key13": "2sGyYZJsKQTeKC5ttZuGJh4Q4EWkGNMkdV5zKRxy8AyKfAZ31Xh69TYBN6J7QJ2WJd8jY8SkWYKoC1MS5YkkEab6",
  "key14": "4HiAg6b8TPWXeMy5K5AwQYukXbKNk85tseBDgkPYoUVxknALufkamdyTtktXZxdGJ5VerRTvWTUmWfNv2LsBnvgY",
  "key15": "FzQADwJTu17DGzkSVT8ZddHF9ESUPjnfJ9RB6E11E4L8HCWYpyv8QYXayYSw6iBQuKsQVZxsCLtEBfxSEGPp6TX",
  "key16": "46BtJHJG2bdYUKfCbBVAqUf1Sui5M53u4dUNfqyyot7Q9ep3JSgt6p5Ss7rqq4bShqanKBBb5PBn6xU5r1ZXaawb",
  "key17": "5aS2BR26pYHY5A74ViMJV3sekcXvjcfenQU5VxGgFrgHNGu7KCTbTtVt93MWs1ntooxRLnsxBe88wjVzQGto37VH",
  "key18": "3iSgT3heRbW2ERAhz6URZcfPgW6kgR5GT7cuT8V2u6AeTyzSbgro2zSLMTUzefZxVF2UvnvdRrjeZZ6n4JaZPfMS",
  "key19": "iEAZLW1PbkmnuNxf9vAVqyoQp7WXpofte8YJfGPBKy2MuLRwKQREwUyQN8HUXEFXfhJc9uHia5Mpu6r8De8xcDQ",
  "key20": "hGbcn7fmNTQF2zLE7CSJJoRNrTmvhzj2jUQVvz1tym3Ds4NtjMkaTiB26RiwrrKH7iqKpnEuDQ9bQ1gnfXZNEqj",
  "key21": "3wpvbuoYnPe95EMT348oEsYfk8BTiDM6YzaJtFWKqZHxS7hHB9wCpQcos8BqzFGGLNePKgTU8BirKL6HvRBjzv9A",
  "key22": "5uZbzmw1KnvKVUg3RFJiYLnLvjHnXv36aUy3nkuEsy9FnLJQfHHMQbGr38A6ceJsfHGTc869ADaxGjLmUBpodTPi",
  "key23": "61gQZoxr3M8nasia8UvBGGSrd2QwmYzrWRGRcmBFang6P25UHdoMQuBuUiFw8FiEeJoFpJhpfiHnd5YtiCdS6hWa",
  "key24": "2be4omeUN7VB7qN22hGJ314Ac7i7jL9kRVySkxXq2ux4vGddekcii7PPfQev9LFKJz512gJ6DzZUn6d6P2edv2iP",
  "key25": "3Ax3VW3m5YPdTkFePY453oCNi21vUwPbiDhpVDJvBUeJV185qgo7jjrUNCnYGKQecKCSxLyhVnS5kCUwkMwM1Ph7",
  "key26": "25tVG5xssZdXk3oWAZxxawWHTU8hk2q7JQZnwsBrGxejTWDfrVFHjzRz6t48XzswG86CEd37NXJW79jAygUbap5C",
  "key27": "3RrjpKohRRjaenRHdB2XcidVRjhzoxPWUHJejf5SYS6ZThPqrnyDFYL7QBDCSnmQ2qPUgx1anCCp8B2U2iKRcsbp",
  "key28": "KFvYLxUuJqX484LGfVK3txH2A38naNzkPa6CP5HPbJuTB7iaFrbwomKDMCKBk82AHtEULexcusimcP7kGqSjLuJ",
  "key29": "2hK7b82k7VwEAYq38F4xGwkeScZx7jvSedxAs9Zcy3HvWkDNbB7EW4AroskPd14jf4QnUPdkb59rGEkNExn6JM51",
  "key30": "4vF9WAxdg5egN39gpNBRwHo6bw8TXnJJWVtWjR9TZuMMpaxVNLBe6w61ipaJpLBddFZQrT1K6fWjEMXmSddkq9Tp",
  "key31": "LmN2pFd5vthvRAoKXPmZjAj6FYv5yRZEivrGjFv6SEPTshtJnkSDqBo3ZoTzTSuoTWc8xWtBnr9VWP526Vsrhg1",
  "key32": "24JCNbY3sGsh67CCi4hvfZTzAeNkdswvbjcDmyoH4ZqvfLJZhWaDaiAJaw41r1zikXND5RgeZzdyp6kDe9GKt5yj",
  "key33": "pivTviKcLp7PnTBgxjjMYF1vEPuwnBaCxTEX6jNinXZpw8FZBiX12kzFGQuQJUhJ2aKYSTAsacLaUj8KHxeZ73s",
  "key34": "438GUuu4gkJhmcHWARs8r9gnHB6A7BHhuZ4fuBXegmx5K9DEJkcth29BNDJ7mZrUVSoc5t2cy6wTSuqKywGax966",
  "key35": "67hKmu8dxV5NU5Mbvws86GcjsbdvvAyReuf3TvsPqpZzi2EGNyG3ZEH6jBgcrnMJ7MiT7AMia4Sjc6HP4LN9tfLr",
  "key36": "3us5GEJ3WArbAUwurSnUft91dA7XdWKnYVQpTJFwNVxQ39vE4caiKRCeoGLSWy8cdAZjKj18SCxPPwhXHLXcCCw8",
  "key37": "3TVZSiUipqzb967LoWH6jjQrAASpcCjG2Y3aa1HtdCbog8KfCnW5U3WauKGib79Ki5hsYEUfLXKRX16L2kdtga6a",
  "key38": "2LaAatdVWqdivqW3cGYNyPKbEjSPKZJ3hUUSfStU18GdtR6ZGvkR9GhAAkY9JkWycM9mVfaWMueJZB51tihhHQXc",
  "key39": "5t1gV11ZnhgDekPK8PYmsx4cFcNdGkke7ojGWLUvqGATzvDLjAPikRCkjF6ng8Ji3ytsnP2epQRyuN1mefjt6CSG",
  "key40": "2poxsL9Wrp97CZXAT4tv8JCews9K6C8xf394UyCn1SoBzeFoRgxeHWZRr5H4DLwenryHZZTGNX96GwE59xa8QkGh",
  "key41": "5i8piT9AWhPBZpqyZ5eTrNgjd2Y9HpBCNV3Vq8QAL8cdt4es6axWyLQ5Gepfb29FXMHi4DeAjUPCs7EPHdwt4NP1",
  "key42": "Kpf8A8WNDLbmm129wEwAdiehVG98DCvkcNTEVyGXskTCf8akV8tmQ5vWpWTemqzKTmwVCN2mVkiw1UJsjRqrkgw",
  "key43": "4nJakmG5bGJeKenFeif5BFJHNAcR2KSgHHmhcMYn3CcYKdc3XqHW2rHafJSrqcNqu6s63886bTaoyfjevFPae9PA",
  "key44": "3JxF5gX8q9iitawrY7Ui4j6fgGxZTTUSGrdY8pr5c2RpKr1hX577LvL285CENeBzDDidc8rgEtrebpLbrxGxhCyW",
  "key45": "2DYUZbTrezSREjdXRm5a3dYcfGH1ezhXHRV92PEASHr59mfaWmgwp4DcQTMRjBjiKcYVYV5HkCyTSkm95dd9uAe5",
  "key46": "4DyoQa6eytnevNwX1n3tmX1xqCLMWRar7qnhsxmaKdPmz3XjGQgQJx48gdgeb3LZQ3HwCj6y1ANwP9GBLBGPoWCe",
  "key47": "4ntoK3uuWojP9QXJ6p7fEompyFFDPUoDEzjbXGLHph1u9Rkpm8YXRJ1hN3skowkR8SPsk9GHYv7jbC3TUeXCHdbk"
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
