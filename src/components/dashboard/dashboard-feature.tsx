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
    "4NyHbt1yHYGU2ZgcnysnXzDeLGuFzSM4ApukichAnonbMCTrwjid7RNnKmkPwMvFdUhNZKZfgtDzRQNeHffWXrf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29EGKpSbEmXpEMoBvz4aBnW1RSVxgALbrbkkZeEfAPP32LDh4EFVCu298MtQKvssCSAJ5skeXhVB7G4yy6E3NVDu",
  "key1": "2aRSm8zTmXrLknzRygsBLX35BAP7PsbSaeyVg1jmyYXPrswDYKiu5t21kKtT9EPU8sttC4EMuYZfSsAtrdaCE7Gw",
  "key2": "3VqN23aqGVUTtecBx5VSPpYZNBPKofrJnvr1tR2QitmBhWAt1CGBNJErPNqsmVAUUbaZrLxzeyQXb5vauUnNSAGe",
  "key3": "4f4ic1G8D3WXraTtVoHhGejJM35wKvJFmXyVZ7cVBXr8MmFWhP3yJjz9WZpkyGTJS5ydxZyxBBu2mWFWFrrZHPdT",
  "key4": "2jjtWZZRQpaeGCAGF1ahRwGHyPWbiYLNUUxZH1D5QaShCySTr8yb6EKPmcywrD3PCHyRqRjbGGJo9f5UcjjU6dqc",
  "key5": "61snQPBvTup16uzUUWHPW7CSwhWKrcW7Nt7QEMBMtmGMkJuzxDtDMWcQh99zFJT8DRgeWAkYTQ2ovRkJJE3gpgBz",
  "key6": "ZhgMbNPQUgiL3WSz7qKYffMpgcR3f1MQWkHvfTYUgUyinSJEzAdSHg52TDtqcYsT4b5qRC6LHFKWJoTbvsZPwS3",
  "key7": "2cgrMooCjFf9o3V9TQAA6g9iip4rDpRYyqqo3HiDPAk2DMhPaXtGLwgpNHUBs8mhLRgaSGPwenXHQ6gYQvM1BcK7",
  "key8": "5y8E1eiHURfNdXyG8Yo6ztRTLmXSizEFooaA5fs9v5nZ5D8ozUA28CEoXaGYewVCfk6J9r3GEXsK2M5RXumYPjJh",
  "key9": "2juigNJwXWDfgVh3FvySkVot77PyqMvV5Xff4qBJAd1KzJKeeoR1a4mK8LSGrRfkhAA5qgSL92g8q5G3woiAYjtf",
  "key10": "4vSLBxrZyNZ8AsyZ22WUQRi3PAZyvyg66fpQSyjXWNtaKkCJn419CTRLC4dE9787dez5eXKMGkUHUrNvatgscynx",
  "key11": "48ghn2zJ4GBnDSSY5MM83UHzspNDdtdRTQBJM94tYfUzGiQMZCKhs5QwugxtrPAUQ73XaJ41x73KzaiRmbmJRyeh",
  "key12": "46aetyrS4JUrDy3tf9zaN12yh7s1mC86M6VFzdJDdPzbXvcYmHGSV6pDFYjnAAER8Wk3oQxWtWRyCmPv1c5RcSCp",
  "key13": "5FuFovcALCnHYCgoSDmRVmZxWNKEXWyLS4X2bZtXcqpi98ncJrrHVLvwF2U3U9H3dv6t7cwdbr4JUCcTynM8s7Yo",
  "key14": "3k36XtStXNU8HZJBe6maiRtPpeuiJ57RayBcV5JKFC4TYA76R1Ma4mPDdcmT7uMRbV1XnxXkoe9UtkT9eHsHTmE9",
  "key15": "4JJmJ3DzSPLV2nDk9W7Agpgnqc3kKP8M3r7LCFMnFnmFme3pkZyr2VB7AS4EMrGToiq1ae8EwaM2FtDBe4tFQ32U",
  "key16": "2GS39T5BaeCcsxavmAt4AJsw9YQpjkZjTEXWTtyyDzYx4fYxg4mm1wEvHxoxUg6D3BfN1U34mfTRq9iHxkMpqKVC",
  "key17": "t9kaGG7ayhP8oPhAfbs68HTkkxvn8tvtrXwwB32B5zaeYyaX9Fwg5J5EhV8xJBmK8GVf3t7RK7sPJ6HWjNg3FPz",
  "key18": "19GkSgp8BjMwSinjMeWoxA8grggELnakw2mLheYo35EcjnrC5R7FyGahZUWfCzF7j58LtEoN8E4nYo9gRYRQYVf",
  "key19": "2abDge7G4pf53GsUF9SoTzQvGpxH3k6QFPUau5CDifCGiwm5aKxUyHSXhXnpdVBPavZ3BTYLBWgK3WsmQYNWfF5Z",
  "key20": "HBgJHbAnYmJovZwt7GR4fBNW76mLKgVYX8NQB5zhKfA6MYvb7dBJVDBqrSMtJMZwkguQ5JgjSyujjXNffkGkhNW",
  "key21": "66hryWfa14HyJeN158ELepTsPxrUwC4KnRVVPQCP17L9gbyekXzPfaMSsafkfVz2RNGLk14PRov4Vq5xL8LmCdhJ",
  "key22": "2SVXwGjX283FVprGVFR7cvuRNwsa4yKCb7EZhAE2htPR5QrTxJUgVuChayacqfEN4KCHyJcYuZrB8vnhLKFePTHV",
  "key23": "2TcFaJ2scViLW9vKDb66AK2z7S96ZUvn1NECnXzyub8vghJvmRyCpggQJXZ6263aN7JVj4cQyFaJtBdzsuMCHFGR",
  "key24": "UKDU9Zk3YDuDGvP5RtNLXNX2VJ3MeqfLoDLq2KgbuRgGGC9dMJfGiLhnomgKKfRMKayJeEa5gY2RpexSYDMukPA",
  "key25": "61eNnVPnGEija45WaJ1uM1uHCiVhy1dYN3KbNoqendTBseKyZgtsDZEf9UZahxJbvwoXLenXG2reJmKfHy7oz4id",
  "key26": "4rxFB7xaHDiHaWQMWnDW3SRV4pgrKpn7J4QYgquU7qNhN5LJuU29Zr6nHzZNv7GzLJMT6Ry26r4kkJaFhcSypMsV",
  "key27": "66NGBQCYds8MGeLWwnYFT8Uo9x2hxDMPRqbZUtr62RmGciTW2dJHtx3gDDzJFzC7PNxBKA4TJbYdw2BR8CmoPxMs",
  "key28": "3K3ExenrEiRSr2gvTuf8tMT2nxjWHEjZh9q96xQ2KfdfdutTubf27XXrn6HfyjPy4VBNwHxD1Bm99Xc8S8Z1EtxD",
  "key29": "3cg5wV1jBNgDjEd4djGM7qHhZCFxWpnFuH7ZPK6fjKESxtr6ng8Tvhgzx4cYbcDnxUiZkfbbtWRHox15J8RUVwD5",
  "key30": "2e6jJ1bpeMrfPZHoA1MNxn5bvjxHBgb8metrN3gGGJJAnw16DZP3Z7ccny9xUcMoYR5GjzQALtdmB62qA49vdFMs",
  "key31": "2MRpmCCKbUQmzih8XJ7hG18r9UvFyBmLRCQtcd8mw6oou9tpXVjzjAZnKhzbvn7ygxVKrLeTStVMzbern1nyVKEh",
  "key32": "5wy21RWiGeJ5EwtHJBk5aDrqc1ArKKVVANwHFxyr3gTTWQvY5piNUXgaYuD8K9DNECaYn4suCRD6cp3mKZAxkw7d",
  "key33": "47qHFyW1CC7bSZxyiEhNo7i8vHjo3n44xAo7DWth5BqQxdgvBNUuwPaq6bdP4EGFrJwm8KJys31d7HtWxQPsyYuz",
  "key34": "3aQSm2WYCW2rkfMbCddfFt2VQpNaD8THXpB5nU1kDnko45vecTJUPqEFA62ket37sK7BF62XnQSf4jy4nVgSotC5",
  "key35": "46PD27fTf7XcVccUoZta6C1j2CnFqxQ8wLjEqePNpECfC8TyBmMGFE8bhdb3uuku8nM5N3FT4q1uDZYEf4ioU9L7",
  "key36": "4QQE6Jd5cAoeqjvqXeJV2pgh3G5PnemBrgfNoDnkiCPcuT4BQDTEgmyrWt8ZGYrtESBdMyLyuokmPkrVSdtu5NSu",
  "key37": "3Ugihx6yQF9StybgqtLVUnzeyAaFvUwLZ3Qpvm9L5FpbLfsfxzFD1x3TjdQcPsMhyc1wmn8sYV1eHboXCjqgXh96",
  "key38": "TNUkynj3tonC2VrVMsEsouP2BHvAyrRP7KJVDh5UwYSppZkvA6rRrKwiQQ3WKKUSKfnmAd8cB4wRNJo4EJKPr5F",
  "key39": "3GkgwZ8wFB6EE8L6e3DymVpG2Dp12Me8uYfWMRpczZ8CwbeZAXtzqFBrKqbf855fs4WoSJae1tBMH5q3oVYGrWg3",
  "key40": "4FAph62HHtmbJJrrPJuzg6CrXuUn8ZZBd1GBzXxUA6n97LpdKJVW6qxtLBHjQ5LRx1Yz4KCGJ8Pgk8k9uW2A7gba",
  "key41": "34xjxthwmJ45nqmKW8PLKN7t6NaoYjDgiM3A9iUaRuaieudt6qHbBJe29jN4TMiUyfExiCW9YXL7mWk6mMZz2UvJ",
  "key42": "3MKvVJofN8rDAYSKNJDoPyWbbVCVXK1eEKQfitn4LUh2WwX1pcQtrq2E8XXWMSFR4Tfr2cGmTUAAj66u5tc8MxQ8",
  "key43": "3UfAxGS23UareNkWkq1atvn7tMmLoina3c2RgZZHGc8KtGERmZeZkiSQwMD6vmmf2utBuGu35ei73ANBXCADeQ6p",
  "key44": "4haBabEScqhCoSxA3xdJ1YXHeFtPiR8T7uXZnfsKNq5BpurL1t1NFaXBLAj6dMnVyZQAdqXdeYSaCcHQz3DLfdcZ",
  "key45": "bogbEYQt6BsjXVMjyPS8ygyqUZVfRXMAP3jRSmWsuLRmpwzjWcRjbcD8zAYJcWVVZbYFNo6m3Cy8kMTKcCHs8VF"
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
