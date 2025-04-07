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
    "yBbmuHfosknkE2uvHVoT1MMGAWbBa4LZjgwbWqWy45cS1sfbb67K1nkBPjDjyq3vtMJGmRvoe6DMRGpmANy5ekQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rjKxutPF1es59GRWFyfmjdgtxKmwCwuZHGti2L4EGbK2F8fseWH6tfaRh2YXiE2rDU5PDxARxgBRYXPNe26g6t",
  "key1": "3Asqm8cF2Xs4yR2hKm5UcWDSDnHx4dw5MR5nhPWdobAYL9gVeN6LVV8SFp5MsxexDpfD6Q62ZKCwdfg4u1fWEZ8k",
  "key2": "4fpJGqemcDPCDJimVVHmQgNmEQJaPii3EZ5TBjDe8Uq9mRcvbFcFvyPDXm7XpzRunzbph4apZkbz6nk2VN5Sfnyk",
  "key3": "5u8gAFVg2Qb5aLNHoErdongV9uzZuwdcHApgzBC4wunjzUXXcrvPo6qbdDWCwmgMBkTVMViM2YUeCwxzANzRLUPt",
  "key4": "2mxEqvQrseKnwvrAPh4i3gaNJW9YsrHbLp2tTcGjKw7Tgvh9ToPzFXe8twxzAMqSrYkSAVeRZSjzRcCZAAaJ3sPy",
  "key5": "4yHgJoWKVxma8MqosdZ7jy2qWAQhbGPWSbyofooy4AUekeHj4iFJpjVvgcyNJ2yxwfWsY7wjbPidRxvUaJVuUSq6",
  "key6": "7RW9495N6RtXE3NqV4Xdk5bjxr6SWoWzuxrBa1eqMCGjkaTb3xkA4A21r3xbCuTKkJqHqWNWxCiCkrUUFt1wBcn",
  "key7": "28NdSLciS2n9J4GcbrnpPLitu4aeEyuhqhRnGT5zjNRRQkt6cBwzsnfeTVw7jKTZWSRRsnCVZ9BfdV5huMHdvg4z",
  "key8": "5FTcLRSX1qS7VEs6rspfAxNDXuwT8k7ietu4n4nnXyCp9GDVz7XWXuDwuvwS75KfD8AW8NigxdWcUjCsN545mbzX",
  "key9": "5unvnZqabiwxLafiNY7SS7K6hDHeooSywtHp5So1ofjHsmFLm5re96e7GusswHkMNAUUY6GVuH9ZdnQ5zkagsTJ4",
  "key10": "3Uz1yz4zG1dn1eNoD8E5qMU7mEtvAjdeKQWm5gzqtzieewZZV2dQYGLwrMwVGnZSMEPcZnV1oBmdWaghBeBm2g7o",
  "key11": "vg6672uGukqXWKcBvPTYLz64sZsP43FxiK4t7Ebfv23EaNJ95B1t1f9t8YMbbfawCfFJFyMdbjQTCPgdFGbZtFt",
  "key12": "ppve4gPJUijN15xqJTaHrS6xKPPmMiYtZsHeyHacKNFNjDSuHrHFpivwipm6cH3jBXCKSjM8Scw6HjL9gJvZRDp",
  "key13": "5ktLrE3EkQmxbLSdQPzHXXuxMzPkdNp6A49AiQSKsEeoeA7BaopLSP7nwbBHiSBUJNKLAPBvBtpZoXd5j7UTCpw6",
  "key14": "4Dcw19Nd9Nzuoc8MdVaoz3HFSQKaJiHjp59PmixfQKetGBpjky3t3tHpuGocLgKvoiSAgrSwWtFHA1VSra56CM2D",
  "key15": "2HzQJrRL291UtDaxeHBMLfTbD1L51umPpYE7GsHc8fKeqsSYcXD7G87PgzVWwEnkdBvXDaybUJaigDNM8kWu4HQm",
  "key16": "kVqbkos8qNbXUcwnFqqRnWVmq62mtqEYGsE1ehxR38D7vNkdeu2VMzsUjdMtfRASxzHL4TNhSbA7Pz6uDLQxJic",
  "key17": "4LNroyXGZfuzY113NXPLUE5vo8RtZVLfejpy8xLVxWXGKVezCwuucmLsVTjusftu7X9eGjFetMoCXp52cm4EiP9S",
  "key18": "9oRp6ycWVokeR1LRuSMq1TLq3MqkWyNgH7uYuzQVXZLL8vuBWY2kkEmBDP96ubcjtCRbR8tNPpfBa5z38hdy4PG",
  "key19": "2963TPqdc7J7gy4GUYrFx2J5xDBEgfoGzWKXZHiUqdst6CUwowWPTDJTAtEYbdmdNN4Yt2VhhUU4qU4RoxDmdYmc",
  "key20": "3bMAmiVTayKHMB2Qndj7iXWbzc32Zbj9E6TbRodfWiWTMBdtaW9XZQCt88ypoXRuL8xqJftCAWMij23xm9TZP99D",
  "key21": "4HjU9BG8SAKWt1BdNQRn8CtgEH51vhwTrMGnXSpSaubFWpxWKTHEJS8TDCe4KBy3ScdYV6HE1FTTrR7FL6c4sLrq",
  "key22": "2QF5oeMTsX2WB12mSuC7EaJvmxGrWZyhjWcqXriP38yd2bytLNWBwbUktANZ9c2vJoLnJAaZGUgQ3muYGfWSDSJ1",
  "key23": "X2mV4759uZC5CnhUhs3G89FEtj2kkyHGemVE6xuDaDYGYNKaWL3YLfijhUL6JoB6Yf7DyCLmm2AyDDB18mBXD8z",
  "key24": "4dqxDoCDyBk8TGJ6Mv66Jn21MBnn5AWeLPQRJUKxFsFZs5H2ZeVxpVSwRbuYGrfvQvWkRhSkVDa2tEMQx2bSsMYV",
  "key25": "61FKvRfWgGw43eQVngqtW3EDAwdcJeG8eTEXenrrRLgnSzU5VW5bQm5mh5n8YWeQS3wX7wpPjJo5qMEZDEjcqcX4",
  "key26": "2vNKvGscZYMkouH9RLExR25bLHMTapTXqYALf8UTqcpFwB7Qzkd3X2KkjHWrguFBSauyXLV7t6NDAq8QYM9eU3hT",
  "key27": "56hMMBjfXzR7TXd7StTScAaS8zhAc1aGmikJxF7r3oXh4S83uKevmYM84d5eC8xpVJMAqpmLUY4ZYFTgHvdvFAcZ",
  "key28": "3fpqoVCv9pMA8oUAihyLnsUea1EJU6uE1wAjZN9jrGkSFJg7xUsGrJQUfmqKckn7ddiUs99NqKE2oh98UvQSkXQC",
  "key29": "2Fg2YydfSr7okoDGizzKyPs2pmd8pE78513Q5ThCQrLQNfsJ3hk8ziiiZ9ihC9we2RFSqrTWTnsPSbEwqCoSB1Gf",
  "key30": "3pxQxVXyCQMBJSwmhqX5Umq17YwgUEvr7PhWbNoevEfEqBDLgK5ggGMkJEzHVS8i3T7Mtuve82gMubnh61wJnKgJ",
  "key31": "5672Rfw9Yrc9rhJiUXK9BEgBYXnFVPwdk9p2vNrE2zrXRnicZFzPVBNvZXjwCpJ6hvCkFGbrM5vV7qRFV25Ma6os",
  "key32": "4JPNGFme3SxEa7nGyHqDk7tTi1mc65MHPpctoxQDzqjmFYsyLvJgoNUf15FbK1ScFDhGxruhFsHcwZzT87iQLXQ4",
  "key33": "5GcMw2TQc7TggMbeNGZgjHFPynAKnszmvGPD7hPcArbZBFTFMBMfxNjpfDudm3WF952mp24cGNQWcHvSn3E41VYt",
  "key34": "3cugmSZcbUCmSSVvcJ5fqVbkM6trL1vE6y3TAMetiSZ48pji1KZoxQaZJbP4vBW8NzC9jumxsFPV4njtuWcuFkP8",
  "key35": "5PrmZFmHKw7vE2fsXQ6uHXxBmgyh1N8r1Ky1VYzpGSoFGQ1D5EgW73XCtmQJNgpEhc4y1Zqwr5ZGfPfSqTt6nrWc",
  "key36": "ct9zoqpX49XeqYge68HJawNwfMMksdEpUKcSFVLCsnL7S82EZ5MkUGZHyc93kfzvhfXffAEVYfX95M2EFH9tnRQ",
  "key37": "4UzVMrsQTuJTXh6wH8eDg952gnR59SC6uTYcsUzUEmAronqhNaw2VeLsPNvwjHMCHrSM4AiXLmV5zVLJLDcw13TE",
  "key38": "xLzbH2xcYkmB8Yq9QfaETTqPNq1Bhg5d2F8xYDoXSPvqZ2iX7cJrJTwRcYK2qLaL5DvG8rH1AidjTaaUkPEdzjK",
  "key39": "33qdkXu8ZX3c4yhJn1HxkHAWtDxLi4ddxXP89eJg24AbCq41iYgwKZVeFo6NgNvQ8iyVvKSTVkd2zZtAwTB6rgg6",
  "key40": "2GwFdsQoNQrPs49NuAy3wYXrNoVCXUa5eQVqLxs5AvqaN5Jga3ANmdzfVebiK5Vqph2GVWFUmxqSi3vyYjLNYKA9",
  "key41": "5VcUx4ckBahgdgsgHJPdZaDXac1C4qjxVaNzeWPkCsCXSUmwUphqs9YUJYD2pJUy3XZ9UjVGRfA4gzQP34hpGanZ"
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
